#!/usr/bin/env bun
/**
 * 自动翻译和上传新增的 Lark 文档
 * 
 * 功能:
 * 1. 对比 lark-pages/zh-HK/docs.json 和 lark-pages/en/docs.json
 * 2. 找出新增的文档(在 zh-HK 中存在但在 en 中不存在)
 * 3. 在代码中缓存新增文档列表
 * 4. 翻译新增的中文文档为英文
 * 5. 复制图片资源从 lark-pages/zh-HK/docs/assets 到 translate/en/docs/assets
 * 6. 将新增节点添加到 lark-pages/en/docs.json (保持 slug 一致,翻译 title)
 * 7. 从更新后的 en/docs.json 读取节点信息(包括 parent_node_token)
 * 8. 使用 en/docs.json 中的 parent_node_token 上传到 Lark
 * 9. 重新导出英文文档并同步到本地
 * 
 * 重要说明: 
 * - 不使用 translate/en/cache.json 来判断是否需要上传
 * - 检测到的新增文档会在代码中缓存,然后直接上传
 * - 上传时使用英文 docs.json 中的 parent_node_token,不修改节点的 parent_node_token
 * - 确保新节点添加到正确的英文父节点下
 * 
 * 使用方法:
 *   bun run ./scripts/auto-translate-new-docs.ts
 *   bun run ./scripts/auto-translate-new-docs.ts --dry-run          # 只检测不执行
 *   bun run ./scripts/auto-translate-new-docs.ts --limit 5          # 只处理前5个
 *   bun run ./scripts/auto-translate-new-docs.ts --dry-run --limit 3
 * 
 * 前置条件:
 * 1. 已执行 bun run lark-zh-HK-export 和 bun run lark-en-export
 * 2. 已执行 bun run lark-setup
 * 3. 配置了必要的环境变量 (DIFY_API_KEY, LARK_APP_ID, LARK_APP_SECRET 等)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync, readdirSync } from "fs"
import { resolve, dirname, basename, join } from "path"
import axios from "axios"
import * as dotenv from 'dotenv'
import { execSync } from 'child_process'

dotenv.config()

// ==================== 类型定义 ====================

interface DocNode {
  depth: number
  title: string
  node_token: string
  parent_node_token: string | null
  obj_create_time: string
  obj_edit_time: string
  obj_token: string
  children: DocNode[]
  has_child: boolean
  slug: string
  position: number
  filename: string
  meta?: {
    slug?: string
    originalSlug?: string
    version?: string
  }
}

interface NewDocInfo {
  node: DocNode
  parentNodeToken: string | null
  zhCNFilePath: string
}

// ==================== 配置 ====================

const DIFY_API_URL = "https://dify.longbridge-inc.com/v1/completion-messages"
const DIFY_API_KEY = process.env.DIFY_API_KEY
const DIFY_INPUT_VAR = "query"
const DELAY_BETWEEN_REQUESTS = 300 // 0.3 seconds
const DIFY_REQUEST_TIMEOUT = 600000 // 10 minutes

const ZH_HK_DOCS_JSON = resolve(__dirname, "../lark-pages/zh-HK/docs.json")
const EN_DOCS_JSON = resolve(__dirname, "../lark-pages/en/docs.json")
const ZH_CN_DOCS_DIR = resolve(__dirname, "../lark-locales/zh-CN/docs")
const EN_OUTPUT_DIR = resolve(__dirname, "../translate/en/docs")
const ZH_HK_ASSETS_DIR = resolve(__dirname, "../lark-pages/zh-HK/docs/assets")
const EN_ASSETS_DIR = resolve(__dirname, "../translate/en/docs/assets")

// Lark 配置
const LARK_APP_ID = process.env.LARK_APP_ID
const LARK_APP_SECRET = process.env.LARK_APP_SECRET
const LARK_SPACE_ID = process.env.LARK_SPACE_ID
const LARK_EN_PARENT_TOKEN = process.env.LARK_PARENT_NODE_TOKEN

// ==================== 工具函数 ====================

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ==================== 文档检测 ====================

/**
 * 收集所有文档的 slug
 */
function collectSlugs(nodes: DocNode[], slugSet: Set<string>): void {
  for (const node of nodes) {
    if (node.slug) {
      slugSet.add(node.slug)
    }
    if (node.children && node.children.length > 0) {
      collectSlugs(node.children, slugSet)
    }
  }
}

/**
 * 找出新增的文档(在 zh-HK 中存在但在 en 中不存在)
 */
function findNewDocuments(zhHKDocs: DocNode[], enDocs: DocNode[]): DocNode[] {
  // 构建 en 的 slug 集合
  const enSlugs = new Set<string>()
  collectSlugs(enDocs, enSlugs)

  // 找出 zh-HK 中新增的文档
  const newDocs: DocNode[] = []

  function findNew(nodes: DocNode[]): void {
    for (const node of nodes) {
      if (node.slug && !enSlugs.has(node.slug)) {
        newDocs.push(node)
      }
      if (node.children && node.children.length > 0) {
        findNew(node.children)
      }
    }
  }

  findNew(zhHKDocs)
  return newDocs
}

/**
 * 查找文档节点的父节点 token
 */
function findParentToken(nodes: DocNode[], targetSlug: string): string | null {
  for (const node of nodes) {
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        if (child.slug === targetSlug) {
          return node.node_token
        }
      }
      // 递归查找
      const found = findParentToken(node.children, targetSlug)
      if (found) return found
    }
  }
  return null
}

// ==================== 翻译功能 ====================

/**
 * 使用 Dify API 翻译文本
 */
async function translateWithDify(text: string): Promise<string> {
  try {
    const response = await axios.post(
      DIFY_API_URL,
      {
        inputs: {
          [DIFY_INPUT_VAR]: text
        },
        response_mode: "blocking",
        user: "auto-translate-script"
      },
      {
        headers: {
          "Authorization": `Bearer ${DIFY_API_KEY}`,
          "Content-Type": "application/json"
        },
        timeout: DIFY_REQUEST_TIMEOUT
      }
    )

    if (response.data && response.data.answer) {
      return response.data.answer.trim()
    } else {
      throw new Error("Dify API 返回格式错误")
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Dify API 错误:", error.response.status, error.response.data)
    } else {
      console.error("Dify API 错误:", error.message)
    }
    throw error
  }
}

/**
 * 解析 Markdown frontmatter
 */
function parseMarkdown(content: string): { frontmatter: Record<string, string>; body: string } {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!frontmatterMatch) {
    return { frontmatter: {}, body: content }
  }

  const frontmatterStr = frontmatterMatch[1]
  const body = frontmatterMatch[2]

  const frontmatter: Record<string, string> = {}
  frontmatterStr.split("\n").forEach(line => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim()
      frontmatter[key] = value
    }
  })

  return { frontmatter, body }
}

/**
 * 构建 Markdown
 */
function buildMarkdown(frontmatter: Record<string, string>, body: string): string {
  const frontmatterLines = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")

  return `\`\`\`yaml\n${frontmatterLines}\n\`\`\`\n${body}`
}

/**
 * 翻译单个 Markdown 文件
 */
async function translateMarkdownFile(
  inputPath: string,
  outputPath: string,
  slug: string
): Promise<void> {
  console.log(`  📝 翻译文件: ${basename(inputPath)}`)

  const content = readFileSync(inputPath, "utf-8")
  const translatedRes = await translateWithDify(content)

  let { frontmatter, body } = parseMarkdown(translatedRes)

  if (!frontmatter.slug) {
    // Dify 接口偶尔会将 frontmatter 省略
    const { frontmatter: originalFrontmatter } = parseMarkdown(content)
    const rawTitle = await translateWithDify(originalFrontmatter.title)
    frontmatter = {
      ...originalFrontmatter,
      title: rawTitle,
      slug: slug,
    }
    await delay(100)
  } else if (frontmatter.slug !== slug) {
    frontmatter.slug = slug
  }

  // 构建翻译后的 markdown
  const translatedContent = buildMarkdown(frontmatter, body)

  // 确保输出目录存在
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true })
  }

  writeFileSync(outputPath, translatedContent)
  console.log(`  ✅ 翻译完成: ${basename(outputPath)}`)
}

// ==================== 资源文件处理 ====================

/**
 * 复制图片资源从 zh-HK 到 en
 */
function copyAssets(): void {
  console.log("📦 复制图片资源...")

  if (!existsSync(ZH_HK_ASSETS_DIR)) {
    console.log("  ⚠️  源资源目录不存在,跳过")
    return
  }

  // 确保目标目录存在
  if (!existsSync(EN_ASSETS_DIR)) {
    mkdirSync(EN_ASSETS_DIR, { recursive: true })
  }

  try {
    // 复制所有资源文件
    cpSync(ZH_HK_ASSETS_DIR, EN_ASSETS_DIR, { recursive: true })

    // 统计文件数量
    const files = readdirSync(EN_ASSETS_DIR)
    console.log(`  ✅ 复制完成: ${files.length} 个文件`)
  } catch (error: any) {
    console.error("  ❌ 复制资源失败:", error.message)
  }
}

// ==================== docs.json 更新功能 ====================

/**
 * 在 docs.json 树中查找节点的父节点
 */
function findParentNodeInTree(nodes: DocNode[], targetSlug: string): DocNode | null {
  for (const node of nodes) {
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        if (child.slug === targetSlug) {
          return node
        }
      }
      // 递归查找
      const found = findParentNodeInTree(node.children, targetSlug)
      if (found) return found
    }
  }
  return null
}

/**
 * 在 docs.json 树中查找节点
 */
function findNodeBySlug(nodes: DocNode[], slug: string): DocNode | null {
  for (const node of nodes) {
    if (node.slug === slug) {
      return node
    }
    if (node.children && node.children.length > 0) {
      const found = findNodeBySlug(node.children, slug)
      if (found) return found
    }
  }
  return null
}

/**
 * 创建英文版本的节点(保持 slug 一致,但翻译 title)
 */
function createEnglishNode(zhNode: DocNode, translatedTitle: string): DocNode {
  return {
    ...zhNode,
    title: translatedTitle,
    children: [], // 新节点初始没有子节点
    // 保持这些字段与中文版本一致
    slug: zhNode.slug,
    filename: zhNode.filename,
    meta: zhNode.meta ? {
      ...zhNode.meta,
      slug: zhNode.meta.slug
    } : undefined
  }
}

/**
 * 将新增节点添加到 en/docs.json
 */
async function updateEnDocsJson(
  newDocs: DocNode[],
  translatedTitles: Map<string, string>
): Promise<void> {
  console.log("\n📝 更新 en/docs.json...")

  // 读取当前的 en/docs.json
  const enDocs: DocNode[] = JSON.parse(readFileSync(EN_DOCS_JSON, "utf-8"))
  const zhHKDocs: DocNode[] = JSON.parse(readFileSync(ZH_HK_DOCS_JSON, "utf-8"))

  let addedCount = 0

  for (const newDoc of newDocs) {
    const translatedTitle = translatedTitles.get(newDoc.slug)
    if (!translatedTitle) {
      console.warn(`  ⚠️  未找到翻译标题: ${newDoc.slug}`)
      continue
    }

    // 在 zh-HK 树中找到父节点
    const zhParent = findParentNodeInTree(zhHKDocs, newDoc.slug)
    if (!zhParent) {
      console.warn(`  ⚠️  在 zh-HK 中未找到父节点: ${newDoc.slug}`)
      continue
    }

    // 在 en 树中找到对应的父节点(通过 slug)
    const enParent = findNodeBySlug(enDocs, zhParent.slug)
    if (!enParent) {
      console.warn(`  ⚠️  在 en 中未找到父节点: ${zhParent.slug}`)
      continue
    }

    // 检查是否已存在
    const existingNode = findNodeBySlug(enParent.children, newDoc.slug)
    if (existingNode) {
      console.log(`  ⏭  已存在,跳过: ${newDoc.title}`)
      continue
    }

    // 创建英文节点
    const enNode = createEnglishNode(newDoc, translatedTitle)

    // 更新 parent_node_token 为英文父节点的 node_token
    enNode.parent_node_token = enParent.node_token

    // 添加到父节点的 children
    if (!enParent.children) {
      enParent.children = []
    }
    enParent.children.push(enNode)
    enParent.has_child = true

    console.log(`  ✅ 添加节点: ${newDoc.title} -> ${translatedTitle}`)
    console.log(`     父节点: ${enParent.title} (${enParent.node_token})`)
    addedCount++
  }
  
  // 保存更新后的 en/docs.json
  writeFileSync(EN_DOCS_JSON, JSON.stringify(enDocs, null, 2))
  console.log(`\n✅ 更新完成: 添加了 ${addedCount} 个节点到 en/docs.json`)
}

// ==================== Lark 上传功能 ====================

/**
 * 使用 transfer-lark 脚本上传单个文件
 */
async function uploadToLark(
  filePath: string,
  title: string,
  parentToken: string
): Promise<void> {
  console.log(`  📤 上传到 Lark: ${title}`)

  try {
    // 调用 transfer-lark 的上传功能
    const command = `bun run ./scripts/transfer-lark/index.ts "${filePath}" "${title}" "${parentToken}"`
    execSync(command, {
      cwd: resolve(__dirname, ".."),
      stdio: 'inherit'
    })
    console.log(`  ✅ 上传成功: ${title}`)
  } catch (error: any) {
    console.error(`  ❌ 上传失败: ${title}`, error.message)
    throw error
  }
}

// ==================== 主流程 ====================

async function main() {
  // 解析命令行参数
  const args = process.argv.slice(2)
  const isDryRun = args.includes('--dry-run')
  const limitIndex = args.indexOf('--limit')
  const limit = limitIndex !== -1 && args[limitIndex + 1] ? parseInt(args[limitIndex + 1]) : undefined

  console.log("🚀 开始自动翻译和上传新增文档...\n")
  if (isDryRun) {
    console.log("⚠️  DRY RUN 模式 - 只检测不执行\n")
  }
  if (limit) {
    console.log(`⚠️  限制处理数量: ${limit} 个文档\n`)
  }

  // 1. 检查环境变量
  if (!DIFY_API_KEY) {
    console.error("❌ 错误: 缺少 DIFY_API_KEY 环境变量")
    process.exit(1)
  }

  if (!LARK_APP_ID || !LARK_APP_SECRET || !LARK_SPACE_ID) {
    console.error("❌ 错误: 缺少 Lark 配置 (LARK_APP_ID, LARK_APP_SECRET, LARK_SPACE_ID)")
    process.exit(1)
  }

  if (!LARK_EN_PARENT_TOKEN) {
    console.error("❌ 错误: 缺少 LARK_EN_PARENT_NODE_TOKEN 或 LARK_PARENT_NODE_TOKEN 环境变量")
    process.exit(1)
  }

  // 2. 检查文件是否存在
  if (!existsSync(ZH_HK_DOCS_JSON)) {
    console.error(`❌ 错误: 文件不存在: ${ZH_HK_DOCS_JSON}`)
    console.error("请先执行: bun run lark-zh-HK-export")
    process.exit(1)
  }

  if (!existsSync(EN_DOCS_JSON)) {
    console.error(`❌ 错误: 文件不存在: ${EN_DOCS_JSON}`)
    console.error("请先执行: bun run lark-en-export")
    process.exit(1)
  }

  // 3. 读取文档结构
  console.log("📖 读取文档结构...")
  const zhHKDocs: DocNode[] = JSON.parse(readFileSync(ZH_HK_DOCS_JSON, "utf-8"))
  const enDocs: DocNode[] = JSON.parse(readFileSync(EN_DOCS_JSON, "utf-8"))

  // 4. 找出新增的文档
  console.log("🔍 检测新增文档...")
  const newDocs = findNewDocuments(zhHKDocs, enDocs)

  if (newDocs.length === 0) {
    console.log("✅ 没有发现新增文档")
    return
  }

  console.log(`\n📋 发现 ${newDocs.length} 个新增文档:`)
  const displayDocs = limit ? newDocs.slice(0, limit) : newDocs
  displayDocs.forEach((doc, index) => {
    console.log(`  ${index + 1}. ${doc.title} (${doc.slug})`)
  })

  if (limit && newDocs.length > limit) {
    console.log(`  ... 还有 ${newDocs.length - limit} 个文档未显示`)
  }

  if (isDryRun) {
    console.log("\n✅ DRY RUN 完成 - 未执行任何翻译或上传操作")
    return
  }
  //  复制图片资源
  copyAssets()

  // 5. 准备翻译和上传信息
  console.log("\n📦 准备文档信息...")
  const newDocInfos: NewDocInfo[] = []
  
  // 应用 limit 限制
  const docsToProcess = limit ? newDocs.slice(0, limit) : newDocs

  for (const doc of docsToProcess) {
    const zhCNFilePath = resolve(ZH_CN_DOCS_DIR, `${doc.slug}.md`)
    
    if (!existsSync(zhCNFilePath)) {
      console.warn(`  ⚠️  警告: 中文文件不存在: ${zhCNFilePath}`)
      continue
    }

    // 不需要查找父节点 token,稍后从更新后的 en/docs.json 中获取
    newDocInfos.push({
      node: doc,
      parentNodeToken: null, // 稍后从 en/docs.json 获取
      zhCNFilePath
    })
  }

  console.log(`  准备翻译 ${newDocInfos.length} 个文档\n`)



  // 6. 翻译文档
  console.log("🌐 开始翻译文档...\n")
  const translatedFiles: Array<{ slug: string; title: string; enFilePath: string; parentToken: string | null }> = []
  const translatedTitles = new Map<string, string>() // 记录翻译后的标题

  for (const info of newDocInfos) {
    try {
      const enFilePath = resolve(EN_OUTPUT_DIR, `${info.node.slug}.md`)

      // 翻译标题
      const translatedTitle = await translateWithDify(info.node.title)
      translatedTitles.set(info.node.slug, translatedTitle)
      console.log(`  📝 标题翻译: ${info.node.title} -> ${translatedTitle}`)

      await delay(DELAY_BETWEEN_REQUESTS)

      // 翻译文件内容
      await translateMarkdownFile(
        info.zhCNFilePath,
        enFilePath,
        info.node.slug
      )

      translatedFiles.push({
        slug: info.node.slug,
        title: translatedTitle, // 使用翻译后的标题
        enFilePath,
        parentToken: info.parentNodeToken
      })

      await delay(DELAY_BETWEEN_REQUESTS)
    } catch (error: any) {
      console.error(`  ❌ 翻译失败: ${info.node.title}`, error.message)
    }
  }

  console.log(`\n✅ 翻译完成: ${translatedFiles.length}/${newDocInfos.length} 个文档\n`)



  // 6.2 更新 en/docs.json
  await updateEnDocsJson(docsToProcess, translatedTitles)

  // 7. 上传到 Lark (从更新后的 en/docs.json 获取节点信息)
  console.log("📤 开始上传到 Lark...\n")
  
  // 重新读取更新后的 en/docs.json
  const updatedEnDocs: DocNode[] = JSON.parse(readFileSync(EN_DOCS_JSON, "utf-8"))
  
  let uploadedCount = 0
  const uploadResults: Array<{ slug: string; success: boolean; error?: string }> = []

  for (const file of translatedFiles) {
    try {
      // 从更新后的 en/docs.json 中查找节点
      const enNode = findNodeBySlug(updatedEnDocs, file.slug)
      if (!enNode) {
        console.warn(`  ⚠️  在 en/docs.json 中未找到节点: ${file.slug}`)
        uploadResults.push({ slug: file.slug, success: false, error: "节点不存在于 en/docs.json" })
        continue
      }
      
      // 使用 en/docs.json 中的 parent_node_token
      const parentToken = enNode.parent_node_token || LARK_EN_PARENT_TOKEN!
      
      console.log(`  📤 上传: ${file.title}`)
      console.log(`     父节点 token: ${parentToken}`)
      
      await uploadToLark(file.enFilePath, file.title, parentToken)
      
      uploadResults.push({ slug: file.slug, success: true })
      uploadedCount++
      
      await delay(1000) // 上传之间延迟 1 秒
    } catch (error: any) {
      console.error(`  ❌ 上传失败: ${file.title}`, error.message)
      uploadResults.push({ slug: file.slug, success: false, error: error.message })
    }
  }

  console.log(`\n✅ 上传完成: ${uploadedCount}/${translatedFiles.length} 个文档\n`)
  
  // 显示上传结果摘要
  if (uploadResults.some(r => !r.success)) {
    console.log("⚠️  部分文档上传失败:")
    uploadResults.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.slug}: ${r.error}`)
    })
  }

  // 8. 重新导出英文文档
  // console.log("🔄 重新导出英文文档...\n")
  // try {
  //   console.log("  执行: bun run lark-en-export")
  //   execSync("bun run lark-en-export", {
  //     cwd: resolve(__dirname, ".."),
  //     stdio: 'inherit'
  //   })

  //   console.log("\n  执行: bun run lark-setup")
  //   execSync("bun run lark-setup", {
  //     cwd: resolve(__dirname, ".."),
  //     stdio: 'inherit'
  //   })

  //   console.log("\n✅ 导出和同步完成")
  // } catch (error: any) {
  //   console.error("❌ 导出失败:", error.message)
  // }

  console.log("\n🎉 所有操作完成!")
  console.log(`\n📊 统计:`)
  console.log(`  - 发现新增文档: ${newDocs.length}`)
  console.log(`  - 成功翻译: ${translatedFiles.length}`)
  // console.log(`  - 成功上传: ${uploadedCount}`)
}

// 运行主流程
main().catch(error => {
  console.error("\n❌ 执行失败:", error)
  process.exit(1)
})
