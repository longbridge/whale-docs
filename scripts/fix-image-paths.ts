#!/usr/bin/env bun
/**
 * 批量修复图片路径：为 lark-pages/zh-HK/docs 目录下所有 md 文件中的图片地址添加 /assets/ 前缀
 * 
 * Usage:
 *   bun run ./scripts/fix-image-paths.ts
 */

import { readFileSync, writeFileSync, existsSync } from "fs"
import { resolve } from "path"
import { sync } from "glob"

const DOCS_PATH = resolve(__dirname, "../lark-pages/en/docs")

/**
 * 修复单个文件中的图片路径
 */
function fixImagePathsInFile(filePath: string): boolean {
  const content = readFileSync(filePath, "utf-8")

  // 匹配所有 <img> 标签，查找 src 属性
  // 匹配格式：<img src="xxx" ...> 或 <img src='xxx' ...>
  const imgTagRegex = /<img\s+([^>]*?)>/gi

  let modified = false
  let newContent = content.replace(imgTagRegex, (match, attributes) => {
    // 匹配 src 属性，支持单引号和双引号
    const srcRegex = /src=["']([^"']+)["']/i
    const srcMatch = attributes.match(srcRegex)

    if (srcMatch) {
      const srcValue = srcMatch[1]

      // 如果 src 不是以 /assets/ 开头，也不是以 http:// 或 https:// 开头，则添加 /assets/ 前缀和 .png 后缀
      if (!srcValue.startsWith("/assets/") &&
        !srcValue.startsWith("http://") &&
        !srcValue.startsWith("https://") &&
        !srcValue.startsWith("data:")) {
        // 确保有 .png 后缀
        let finalSrc = srcValue
        if (!finalSrc.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
          finalSrc = `${finalSrc}.png`
        }
        const newSrc = `/assets/${finalSrc}`
        const newAttributes = attributes.replace(srcRegex, `src="${newSrc}"`)
        modified = true
        return `<img ${newAttributes}>`
      }

      // 如果已经有 /assets/ 前缀但没有后缀，也添加 .png 后缀
      if (srcValue.startsWith("/assets/") && !srcValue.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
        const newSrc = `${srcValue}.png`
        const newAttributes = attributes.replace(srcRegex, `src="${newSrc}"`)
        modified = true
        return `<img ${newAttributes}>`
      }
    }

    return match
  })

  if (modified) {
    writeFileSync(filePath, newContent, "utf-8")
    return true
  }

  return false
}

async function main() {
  console.log("🔧 开始修复图片路径...\n")

  if (!existsSync(DOCS_PATH)) {
    console.error(`❌ 目录不存在: ${DOCS_PATH}`)
    process.exit(1)
  }

  // 获取所有 md 文件
  const mdFiles = sync(`${DOCS_PATH}/**/*.md`)

  if (mdFiles.length === 0) {
    console.log("⚠️  未找到任何 md 文件")
    return
  }

  console.log(`📋 找到 ${mdFiles.length} 个 md 文件\n`)

  let fixedCount = 0
  let skippedCount = 0

  mdFiles.forEach((filePath) => {
    try {
      const fixed = fixImagePathsInFile(filePath)
      if (fixed) {
        fixedCount++
        console.log(`✅ 已修复: ${filePath.replace(DOCS_PATH + "/", "")}`)
      } else {
        skippedCount++
      }
    } catch (error: any) {
      console.error(`❌ 处理失败: ${filePath}`, error.message)
    }
  })

  console.log(`\n📊 处理完成:`)
  console.log(`   ✅ 已修复: ${fixedCount} 个文件`)
  console.log(`   ⏭️  跳过: ${skippedCount} 个文件（无需修改）`)
}

main().catch(error => {
  console.error("修复失败:", error)
  process.exit(1)
})
