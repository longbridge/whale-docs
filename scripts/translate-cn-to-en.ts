/**
 * Translation script for converting Chinese markdown documents to English
 * Uses Dify API for translation
 * 
 * create a .env file in project root with:
 *   DIFY_API_KEY=your_api_key
 * 
 * Usage: 
 * To translate all md files to en:
 *   bun run ./scripts/translate-cn-to-en.ts
 *   
 * To translate a single file:
 *   bun run ./scripts/translate-cn-to-en.ts --filePath ../lark-locales/zh-CN/docs/ApzpwrzLpi6iNdkXoO7c5ZtUnjf.md
 * 
 * To only translate docs.json:
 *   bun run ./scripts/translate-cn-to-en.ts --json-only
 * 
 * To only translate all md files to en:
 *   bun run ./scripts/translate-cn-to-en.ts --docs-only
 * 
 * To fix slug mismatches (make slug match filename):
 *   bun run ./scripts/translate-cn-to-en.ts --fix-slugs
 *   bun run ./scripts/translate-cn-to-en.ts --fix-slugs --dir ../translate/en/docs
 * 
 * To only copy assets directory:
 *   bun run ./scripts/translate-cn-to-en.ts --copy-assets
 * 
 * Features:
 *   - Intelligently skips files that don't need re-translation
 *   - Compares obj_edit_time from docs.json with translate_edit_time from cache
 *   - Only re-translates when obj_edit_time > translate_edit_time
 *   - Saves progress after each successful translation
 *   - Caches translated titles in translate/en/cache.json
 *   - Skips re-translating cached titles to save time and cost
 *   - Copies assets directory from zh-HK to en translation output
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync } from "fs"
import { resolve, dirname, basename } from "path"
import { sync } from "glob"
import axios from "axios"
import * as dotenv from 'dotenv';

dotenv.config();


const DIFY_API_URL = "https://dify.longbridge-inc.com/v1/completion-messages"
const DIFY_API_KEY = process.env.DIFY_API_KEY
const DIFY_INPUT_VAR = "query"
const BASE_LARK_PAGE_URL = "../lark-pages/zh-CN"
const OUTPUT_DIR = "../translate/en/docs" // output directory for translated files

if (!DIFY_API_KEY) {
  console.error("Error: DIFY_API_KEY environment variable is required")
  process.exit(1)
}

// Rate limiting configuration
const DELAY_BETWEEN_REQUESTS = 300 // 0.3 seconds delay between API calls
const DIFY_REQUEST_TIMEOUT = 600000 // 10 minutes timeout for long documents

// Already translated files tracking
const CACHE_FILE = resolve(__dirname, "../translate/en/cache.json")

interface DocNode {
  depth: number
  title: string
  node_token: string
  parent_node_token: string
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
    version?: string
  }
}

interface CacheEntry {
  translate_edit_time: number
  meta: {
    slug: string
    originalSlug?: string
  }
  position?: number
  title?: string  // false表示未翻译，true表示已翻译但未存储标题文本，字符串表示已翻译的标题
  isReUpload?: boolean  // true表示文件被重新修改过需要重新翻译，false表示不需要
}

interface CacheData {
  [slug: string]: CacheEntry
}

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Load cache data
 */
function loadCache(): CacheData {
  try {
    if (existsSync(CACHE_FILE)) {
      const content = readFileSync(CACHE_FILE, "utf-8").trim()
      if (content) {
        return JSON.parse(content)
      }
    }
  } catch (error) {
    console.warn("Warning: Failed to load cache file")
  }
  return {}
}

/**
 * Save cache data
 */
function saveCache(cache: CacheData): void {
  try {
    const dir = dirname(CACHE_FILE)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))
  } catch (error) {
    console.error("Error: Failed to save cache file:", error)
  }
}

/**
 * Update cache entry for a slug
 */
function updateCache(cache: CacheData, slug: string, titleTranslated?: string, originalSlug?: string, position?: number, isReUpload?: boolean): void {
  cache[slug] = {
    translate_edit_time: Date.now(),
    meta: {
      slug,
      ...(originalSlug && { originalSlug })
    },
    ...(position !== undefined && { position }),
    ...(titleTranslated !== undefined && { title: titleTranslated }),
    ...(isReUpload !== undefined && { isReUpload })
  }
  saveCache(cache)
}

/**
 * Check if title is already translated and return the translated title if available
 */
function getTranslatedTitle(cache: CacheData, slug: string): string | null {
  const entry = cache[slug]
  if (!entry || !entry.title) {
    return null
  }
  // 如果title是字符串，返回翻译后的标题
  if (typeof entry.title === 'string') {
    return entry.title
  }
  // 如果title是true，表示已翻译但没有存储标题文本
  return null
}

/**
 * Call Dify API to translate text from Chinese to English
 */
async function translateWithDify(text: string, userId: string = "translator"): Promise<string> {
  try {
    const inputs: Record<string, string> = {}
    inputs[DIFY_INPUT_VAR] = text

    const response = await axios.post(
      DIFY_API_URL,
      {
        inputs,
        response_mode: "blocking",
        user: userId,
      },
      {
        headers: {
          "Authorization": `Bearer ${DIFY_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: DIFY_REQUEST_TIMEOUT, // 10 minutes timeout for long documents
      }
    )

    if (response.data && response.data.answer) {
      return response.data.answer
    }

    throw new Error("Invalid response from Dify API")
  } catch (error: any) {
    if (error.response) {
      console.error("Dify API Error:", error.response.status, error.response.data)
    } else {
      console.error("Dify API Error:", error.message)
    }
    throw error
  }
}

function parseEnFormatter(content: string): { frontmatter: Record<string, string>, body: string } {
  const formatterMatch = content.match(/^```yaml\n([\s\S]*?)\n```\n([\s\S]*)$/)
  if (!formatterMatch) {
    return { frontmatter: {}, body: content }
  }
  const frontmatter = formatterMatch[1].split("\n").reduce((acc, line) => {
    const [key, value] = line.split(":")
    acc[key] = value.trim()
    return acc
  }, {} as Record<string, string>)
  return {
    frontmatter,
    body: formatterMatch[2]
  }
}

/**
 * Parse markdown frontmatter and content
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
 * Reconstruct markdown with translated content
 */
function buildMarkdown(frontmatter: Record<string, string>, body: string): string {
  const frontmatterLines = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")

  return `\`\`\`yaml\n${frontmatterLines}\n\`\`\`\n${body}`
}

/**
 * Translate a single markdown file
 */
async function translateMarkdownFile(inputPath: string, outputPath: string, cache: CacheData): Promise<void> {
  const content = readFileSync(inputPath, "utf-8")
  const translatedRes = await translateWithDify(content)
  const jsonSlug = basename(inputPath, ".md")
  let { frontmatter, body } = parseMarkdown(translatedRes)
  let originalSlug: string | undefined

  if (!frontmatter.slug) {
    // dify接口偶尔会将frontmatter省略
    const { frontmatter: originalFrontmatter } = parseMarkdown(content)
    const rawTitle = await translateWithDify(originalFrontmatter.title)
    originalSlug = originalFrontmatter.slug !== jsonSlug ? originalFrontmatter.slug : undefined
    frontmatter = {
      ...originalFrontmatter,
      title: rawTitle,
      slug: jsonSlug, // 防止部分md中slug与文件名不一致，用文件名做slug
    }
    await delay(100)
  } else if (frontmatter.slug !== jsonSlug) {
    originalSlug = frontmatter.slug
    frontmatter.slug = jsonSlug
  }

  // Build translated markdown
  const translatedContent = buildMarkdown(frontmatter, body)

  // Ensure output directory exists
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true })
  }

  writeFileSync(outputPath, translatedContent)

  // Update cache - MD文件翻译完成后，更新translate_edit_time为当前时间，isReUpload设为true（需要重新上传到Lark）
  updateCache(cache, jsonSlug, undefined, originalSlug, undefined, true)
}

/**
 * Translate node titles recursively and build English docs.json structure
 */
/**
 * 翻译文档节点
 * 注意：英文版本的 parent_node_token 会指向英文版本自己的父节点 node_token
 * 这样英文版本和繁体版本就是两个独立的文档树结构
 */
async function translateDocNode(node: DocNode, cache: CacheData): Promise<DocNode> {
  const translatedNode = { ...node }

  // 检查标题是否已翻译
  const cachedTitle = getTranslatedTitle(cache, node.slug)
  if (cachedTitle) {
    console.log(`  Using cached title: ${node.title} -> ${cachedTitle}`)
    translatedNode.title = cachedTitle
  } else {
    // Translate title
    try {
      const rawTitle = await translateWithDify(node.title)
      translatedNode.title = rawTitle
      console.log(`  Translated node title: ${node.title} -> ${translatedNode.title}`)

      // 更新缓存，存储翻译后的标题，isReUpload设为false（已完成翻译）
      updateCache(cache, node.slug, rawTitle, undefined, node.position, true)

      await delay(DELAY_BETWEEN_REQUESTS)
    } catch (error) {
      console.error(`  Failed to translate node title: ${node.title}`)
    }
  }

  // Recursively translate children
  if (node.children && node.children.length > 0) {
    translatedNode.children = []
    for (const child of node.children) {
      const translatedChild = await translateDocNode(child, cache)
      // 更新子节点的 parent_node_token 为当前节点的 node_token
      // 这样保证英文版本的父子关系指向英文版本自己的节点
      translatedChild.parent_node_token = translatedNode.node_token
      translatedNode.children.push(translatedChild)
    }
  }

  return translatedNode
}

/**
 * Translate docs.json structure to English
 */
async function translateDocsJson(): Promise<void> {
  const docsMetaPath = resolve(__dirname, `${BASE_LARK_PAGE_URL}/docs.json`)
  const docsMetaString = readFileSync(docsMetaPath, "utf-8")
  const docsMeta: DocNode[] = JSON.parse(docsMetaString)

  // Load cache
  const cache = loadCache()

  // Build edit time map and update isReUpload flags
  const editTimeMap = buildSlugToEditTimeMap(docsMeta)
  updateIsReUploadFlags(cache, editTimeMap)

  const translatedMeta: DocNode[] = []
  console.log("translate docs.json start...")
  for (const node of docsMeta) {
    translatedMeta.push(await translateDocNode(node, cache))
  }

  const outputPath = resolve(__dirname, `../lark-pages/en/docs.json`)
  writeFileSync(outputPath, JSON.stringify(translatedMeta, null, 2))

  console.log("translate docs.json success")
}

/**
 * Build a map of slug to obj_edit_time from docs.json
 */
function buildSlugToEditTimeMap(docsNodes: DocNode[]): Map<string, number> {
  const map = new Map<string, number>()

  function traverse(nodes: DocNode[]) {
    for (const node of nodes) {
      if (node.slug && node.obj_edit_time) {
        // obj_edit_time is in seconds, convert to milliseconds
        map.set(node.slug, parseInt(node.obj_edit_time) * 1000)
      }
      if (node.children && node.children.length > 0) {
        traverse(node.children)
      }
    }
  }

  traverse(docsNodes)
  return map
}

/**
 * Check if a file needs to be re-translated based on edit time
 */
function needsRetranslation(slug: string, cache: CacheData, editTimeMap: Map<string, number>): boolean {
  const cacheEntry = cache[slug]
  const editTime = editTimeMap.get(slug)

  // If no cache entry, needs translation (new file)
  if (!cacheEntry) {
    return true
  }

  // If no edit time found, skip translation (file might not exist in docs.json)
  if (!editTime) {
    console.warn(`  ⚠ No edit time found for slug: ${slug}`)
    return false
  }
  if (slug === "O7STwqBFtiFK86ko6oijJZZfpag") {
    console.log('---editTime', editTime)
    console.log('---translate_edit_time', cacheEntry.translate_edit_time)
  }
  // If obj_edit_time > translate_edit_time, needs re-translation
  return editTime > cacheEntry.translate_edit_time
}

/**
 * Update isReUpload flags for all files in cache based on docs.json
 */
function updateIsReUploadFlags(cache: CacheData, editTimeMap: Map<string, number>): void {
  let updated = false

  // Update existing cache entries
  for (const slug in cache) {
    const cacheEntry = cache[slug]
    const editTime = editTimeMap.get(slug)

    if (editTime) {
      const needsReTranslation = editTime > cacheEntry.translate_edit_time
      if (cacheEntry.isReUpload !== needsReTranslation) {
        cacheEntry.isReUpload = needsReTranslation
        updated = true
      }
      if (slug === "O7STwqBFtiFK86ko6oijJZZfpag") {
        console.log('---needsReTranslation', editTime, needsReTranslation)
        console.log('---cacheEntry.isReUpload', cacheEntry.isReUpload)
      }
    }
  }

  // Add new entries for files in docs.json that are not in cache
  for (const [slug, editTime] of editTimeMap.entries()) {
    if (!cache[slug]) {
      cache[slug] = {
        translate_edit_time: 0,
        meta: { slug },
        isReUpload: true  // New file needs translation
      }
      updated = true
    }
  }

  if (updated) {
    saveCache(cache)
  }
}

/**
 * Translate all markdown files from Chinese to English
 */
async function translateAllDocs({ inputDir = `../lark-locales/zh-CN/docs`, outputDir = '../translate/en/docs' }: { inputDir?: string, outputDir?: string } = {}): Promise<void> {
  const docsPath = resolve(__dirname, inputDir)
  const docs = sync(`${docsPath}/**/*.md`).filter(
    doc => !doc.endsWith("SUMMARY.md") && !doc.endsWith("index.md")
  )
  const _outputDir = resolve(__dirname, outputDir)

  if (!existsSync(_outputDir)) {
    mkdirSync(_outputDir, { recursive: true })
  }

  // Load cache
  const cache = loadCache()

  // Load docs.json to get obj_edit_time for each file
  const docsJsonPath = resolve(__dirname, `${BASE_LARK_PAGE_URL}/docs.json`)
  let editTimeMap = new Map<string, number>()

  try {
    const docsJsonContent = readFileSync(docsJsonPath, "utf-8")
    const docsNodes: DocNode[] = JSON.parse(docsJsonContent)
    editTimeMap = buildSlugToEditTimeMap(docsNodes)

    // Update isReUpload flags for all files
    updateIsReUploadFlags(cache, editTimeMap)
  } catch (error) {
    console.error("Warning: Failed to load docs.json, will translate all files:", error)
  }

  for (const docPath of docs) {
    const relativePath = docPath.replace(`${docsPath}/`, "")
    const outputPath = resolve(_outputDir, `${relativePath}`)
    const slug = basename(docPath, ".md")

    // Check if file needs re-translation
    if (!needsRetranslation(slug, cache, editTimeMap)) {
      console.log(`  ⏭ Skipping (up to date): ${relativePath}`)
      continue
    }

    try {
      console.log(`  📝 Translating file: ${relativePath}`)
      await translateMarkdownFile(docPath, outputPath, cache)
      console.log(`  ✓ Completed: ${relativePath}`)
      await delay(DELAY_BETWEEN_REQUESTS)
    } catch (error) {
      console.error(`  ✗ Failed to translate: ${relativePath}`)
    }
  }
}

/**
 * Translate a single file (for testing)
 */
async function translateSingleFile(filePath: string): Promise<void> {
  const inputPath = resolve(__dirname, filePath)
  const filename = basename(filePath)

  if (!existsSync(inputPath)) {
    console.error(`  File not found: ${filename}`)
    process.exit(1)
  }

  // Output to stable version by default
  const outputPath = resolve(__dirname, `../translate/en/docs/${filename}`)
  const cache = loadCache()

  try {
    console.log("translate single file start...")
    await translateMarkdownFile(inputPath, outputPath, cache)
    console.log(`  ✓ Translated successfully: ${filename}`)
  } catch (error) {
    console.error(`  ✗ Failed to translate: ${filename}`)
    process.exit(1)
  }
}

/**
 * Fix slug mismatches in markdown files
 * Finds files where slug doesn't match filename and updates them
 */
async function fixSlugMismatches(targetDir: string = OUTPUT_DIR): Promise<void> {
  const docsPath = resolve(__dirname, targetDir)
  const docs = sync(`${docsPath}/**/*.md`).filter(
    doc => !doc.endsWith("SUMMARY.md") && !doc.endsWith("index.md")
  )

  console.log(`Checking ${docs.length} files for slug mismatches...`)

  for (const docPath of docs) {
    const filename = basename(docPath, ".md")

    try {
      const content = readFileSync(docPath, "utf-8")
      const { frontmatter, body } = parseEnFormatter(content)

      if (!frontmatter.slug) {
        console.warn(`  ⚠ No slug found in: ${basename(docPath)}`)
        continue
      }

      if (frontmatter.slug.trim() !== filename) {
        // Update slug to match filename
        frontmatter.slug = filename
        const updatedContent = buildMarkdown(frontmatter, body)
        writeFileSync(docPath, updatedContent)
        console.log(`    ✓ Fixed! ${filename}`)
      }
    } catch (error) {
      console.error(`  ✗ Error processing: ${basename(docPath)}`, error)
    }
  }
}

/**
 * Copy assets directory from zh-HK to en translation output
 * Copies ./lark-pages/zh-HK/docs/assets to ./translate/en/docs/assets
 */
function copyAssetsDirectory(): void {
  const sourceDir = resolve(__dirname, "../lark-pages/zh-HK/docs/assets")
  const targetDir = resolve(__dirname, "../translate/en/docs/assets")

  if (!existsSync(sourceDir)) {
    console.warn(`  ⚠ Source assets directory not found: ${sourceDir}`)
    return
  }

  try {
    // Create parent directory if it doesn't exist
    const parentDir = dirname(targetDir)
    if (!existsSync(parentDir)) {
      mkdirSync(parentDir, { recursive: true })
    }

    // Copy directory recursively
    cpSync(sourceDir, targetDir, { recursive: true, force: true })
    console.log(`  ✓ Assets directory copied successfully from ${sourceDir} to ${targetDir}`)
  } catch (error) {
    console.error(`  ✗ Failed to copy assets directory:`, error)
  }
}

async function run(): Promise<void> {
  const args = process.argv.slice(2)

  // Check for --filePath argument for single file translation
  const fileArgIndex = args.indexOf("--filePath")
  if (fileArgIndex !== -1 && args[fileArgIndex + 1]) {
    const filename = args[fileArgIndex + 1]
    await translateSingleFile(filename)
    return
  }

  // Fix slug mismatches
  if (args.includes("--fix-slugs")) {
    const dirArgIndex = args.indexOf("--dir")
    const targetDir = dirArgIndex !== -1 && args[dirArgIndex + 1]
      ? args[dirArgIndex + 1]
      : OUTPUT_DIR
    await fixSlugMismatches(targetDir)
    return
  }

  // Copy assets directory only
  if (args.includes("--copy-assets")) {
    copyAssetsDirectory()
    return
  }

  // 只翻译目录json
  // if (args.includes("--json-only")) {
  //   await translateDocsJson()
  //   return
  // }

  // 只翻译md文件
  if (args.includes("--docs-only")) {
    await translateAllDocs()
    return
  }
  console.log("translate start everything...")
  // Default: translate everything
  // await translateDocsJson()
  await translateAllDocs()
  copyAssetsDirectory()
}

run().catch(error => {
  console.error("Translation failed:", error)
  process.exit(1)
})

