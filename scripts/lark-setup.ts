#!/usr/bin/env bun
/*
 * 1. read lark-pages/zh-HK/docs.json file find first level meta originalSlug equal zh-HK
 * 2. find the slug file in lark-pages/zh-HK/docs/:slug.md copy it to lark-locales/zh-HK/docs/:slug.md
 * 3. read lark-pages/en/docs.json file find first level meta originalSlug equal en
 * 4. find the slug file in lark-pages/en/docs/:slug.md copy it to lark-locales/en/docs/:slug.md
 * 5. Copy lark-pages/zh-HK/docs/assets and lark-pages/en/docs/assets to lark-locales/assets/
 * 6. convert lark-pages/zh-HK/docs/:slug.md zh-CN then new file to lark-locales/zh-CN/docs/:slug.md
 * 7. generate zh-HK, zh-CN siderbar config
 * 8. support versioning (stable and lts)
 * 
 * Optimizations:
 * 1. Flatten directory structure - move all .md files to root docs directory
 * 2. Remove duplicate H1 titles in markdown files
 * 3. Clean up empty directories
 * */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, readdirSync, statSync, renameSync, rmdirSync } from "fs"
import { resolve, dirname, basename, join } from "path"
import { sync } from "glob"
import compact from "lodash/compact"
import flattenDeep from "lodash/flattenDeep"
import uniq from "lodash/uniq"
import { Converter } from "opencc-js"
import * as path from "node:path"
import * as fs from "node:fs"
import yaml from "js-yaml"

const converter = Converter({ from: "hk", to: "cn" })
const VERSIONS = ["stable", "lts"]
const DEFAULT_VERSION = "stable"

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
    title?: string
    sidebar_position?: number
    version?: string
  }
}

function getVersionPath(version: string): string {
  return version === DEFAULT_VERSION ? "" : `${version}/`
}

// Helper function to find doc metadata from file path
function getDocMetaFromPath(docsMeta: DocNode[], filePath: string): DocNode | null {
  // Extract the filename without extension and path
  const fileName = basename(filePath).replace(/\.md$/, "")
  const filePathWithoutExt = filePath.replace(/\.md$/, "")

  function findNode(nodes: DocNode[]): DocNode | null {
    for (const node of nodes) {
      // Check if node matches by filename, slug, or full path
      if (
        node.filename === filePath ||
        node.filename === filePathWithoutExt ||
        node.node_token === fileName ||
        node.slug === filePathWithoutExt ||
        node.meta?.slug === fileName
      ) {
        return node
      }
      if (node.children && node.children.length > 0) {
        const found = findNode(node.children)
        if (found) return found
      }
    }
    return null
  }

  return findNode(docsMeta)
}

function filterNodesByVersion(nodes: DocNode[], version: string): DocNode[] {
  return nodes
    .filter((node) => {
      // Include if no version specified or version matches
      const nodeVersion = node.meta?.version
      return !nodeVersion || nodeVersion === version
    })
    .map((node) => {
      // Process children recursively
      if (node.children && node.children.length > 0) {
        return {
          ...node,
          children: filterNodesByVersion(node.children, version),
        }
      }
      return node
    })
}
function getAllValidFilenames(data: DocNode[]): string[] {
  const filenames: string[] = []

  function extractFilenames(nodes: DocNode[]) {
    for (const node of nodes) {
      // 优先使用 filename，其次用 meta.slug 构造
      if (node.filename) {
        filenames.push(node.filename)
      } else if (node.meta?.slug) {
        filenames.push(`${node.meta.slug}.md`)
      } else if (node.node_token) {
        filenames.push(`${node.node_token}.md`)
      }
      if (node.children && node.children.length > 0) {
        extractFilenames(node.children)
      }
    }
  }

  extractFilenames(data)
  return filenames
}

// Remove duplicate H1 titles in markdown files
function removeDuplicateH1Titles(filePath: string): string {
  const content = readFileSync(filePath, "utf-8")
  const lines = content.split("\n")

  let h1Count = 0
  let firstH1Index = -1
  let secondH1Index = -1
  let firstH1Text = ""
  let secondH1Text = ""

  // Find first two H1 titles (after frontmatter)
  let inFrontmatter = false
  let frontmatterEnded = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Handle frontmatter
    if (line === "---") {
      if (!inFrontmatter && !frontmatterEnded) {
        inFrontmatter = true
        continue
      } else if (inFrontmatter) {
        inFrontmatter = false
        frontmatterEnded = true
        continue
      }
    }

    if (inFrontmatter) {
      continue
    }

    // Check for H1 title
    if (line.startsWith("# ") && line.length > 2) {
      h1Count++
      if (h1Count === 1) {
        firstH1Index = i
        firstH1Text = line.substring(2).trim()
      } else if (h1Count === 2) {
        secondH1Index = i
        secondH1Text = line.substring(2).trim()
        break
      }
    }
  }

  // If we found two H1 titles and they are the same, remove the second one
  if (h1Count >= 2 && firstH1Text === secondH1Text && secondH1Index > firstH1Index) {
    // Remove the second H1 line and any empty lines immediately after it
    const newLines = [...lines]
    newLines.splice(secondH1Index, 1)

    // Remove empty lines after the removed H1
    while (secondH1Index < newLines.length && newLines[secondH1Index].trim() === "") {
      newLines.splice(secondH1Index, 1)
    }

    return newLines.join("\n")
  }

  return content
}

// Process all markdown files to remove duplicate H1 titles
function cleanupDuplicateH1Titles(docsPath: string) {
  console.log(`  🧹 Cleaning up duplicate H1 titles in: ${docsPath}`)

  const allMdFiles = sync(`${docsPath}/**/*.md`)
  let cleanedCount = 0

  allMdFiles.forEach((filePath) => {
    const originalContent = readFileSync(filePath, "utf-8")
    const cleanedContent = removeDuplicateH1Titles(filePath)

    if (originalContent !== cleanedContent) {
      writeFileSync(filePath, cleanedContent)
      cleanedCount++
    }
  })

  console.log(`  ✅ Cleaned ${cleanedCount} files with duplicate H1 titles`)
}

// Copy zh-HK docs
function setupZhHKDocs() {
  const zhHKDocsMetaPath = resolve(__dirname, "../lark-pages/zh-HK/docs.json")
  const zhHKDocsMeta: DocNode[] = JSON.parse(readFileSync(zhHKDocsMetaPath, "utf-8"))

  // Find first level node with meta.originalSlug === "zh-HK"
  const zhHKRootNode = zhHKDocsMeta.find((doc) => doc.meta?.originalSlug === "zh-HK")

  if (!zhHKRootNode) {
    console.log("❌ Not found zh-HK root node in lark-pages/zh-HK/docs.json")
    return
  }

  // Get all markdown files from zh-HK
  const zhHKDocsPath = resolve(__dirname, "../lark-pages/zh-HK/docs")
  const zhHKDocs = sync(`${zhHKDocsPath}/**/*.md`)

  // Process docs for each version
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)
    let copiedCount = 0

    zhHKDocs.forEach((docPath) => {
      const relativePath = docPath.replace(`${zhHKDocsPath}/`, "")

      // Check if this doc should be included in this version
      const docMeta = getDocMetaFromPath(zhHKDocsMeta, relativePath)
      const docVersion = docMeta?.meta?.version

      // Skip if doc has version and doesn't match current version
      if (docVersion && docVersion !== version) {
        return
      }

      const content = readFileSync(docPath, "utf-8")
      const originalFileName = basename(docPath)

      // Use slug from frontmatter as target filename, fallback to original filename
      const slug = getSlugFromContent(content)
      const targetFileName = slug ? `${slug}.md` : originalFileName

      // Build target path: always place files directly in docs directory (flatten structure)
      const targetDir = resolve(__dirname, `../lark-locales/zh-HK/${versionPath}docs`)
      const targetPath = join(targetDir, targetFileName)

      // Ensure directory exists
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir, { recursive: true })
      }

      writeFileSync(targetPath, content)
      copiedCount++
    })

    console.log(`✅ Copied ${copiedCount} zh-HK docs for version: ${version}`)
  })
}

// Copy en docs
function setupEnDocs() {
  const enDocsMetaPath = resolve(__dirname, "../lark-pages/en/docs.json")
  const enDocsMeta: DocNode[] = JSON.parse(readFileSync(enDocsMetaPath, "utf-8"))

  // Find first level node with meta.originalSlug === "en"
  const enRootNode = enDocsMeta.find((doc) => doc.meta?.originalSlug === "en")

  if (!enRootNode) {
    console.log("❌ Not found en root node in lark-pages/en/docs.json")
    return
  }

  // Get all markdown files from en
  const enDocsPath = resolve(__dirname, "../lark-pages/en/docs")
  const enDocs = sync(`${enDocsPath}/**/*.md`)

  // Process docs for each version
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)
    let copiedCount = 0

    enDocs.forEach((docPath) => {
      const relativePath = docPath.replace(`${enDocsPath}/`, "")

      // Check if this doc should be included in this version
      const docMeta = getDocMetaFromPath(enDocsMeta, relativePath)
      const docVersion = docMeta?.meta?.version

      // Skip if doc has version and doesn't match current version
      if (docVersion && docVersion !== version) {
        return
      }

      const content = readFileSync(docPath, "utf-8")
      const originalFileName = basename(docPath)

      // Use slug from frontmatter as target filename, fallback to original filename
      const slug = getSlugFromContent(content)
      const targetFileName = slug ? `${slug}.md` : originalFileName

      // Build target path: always place files directly in docs directory (flatten structure)
      const targetDir = resolve(__dirname, `../lark-locales/en/${versionPath}docs`)
      const targetPath = join(targetDir, targetFileName)

      // Ensure directory exists
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir, { recursive: true })
      }

      writeFileSync(targetPath, content)
      copiedCount++
    })

    console.log(`✅ Copied ${copiedCount} en docs for version: ${version}`)
  })
}

// Copy assets
function setupAssets() {
  const zhHKAssetsPath = resolve(__dirname, "../lark-pages/zh-HK/docs/assets")
  const enAssetsPath = resolve(__dirname, "../lark-pages/en/docs/assets")
  const targetAssetsPath = resolve(__dirname, "../lark-locales/assets")

  // Ensure target directory exists
  if (!existsSync(targetAssetsPath)) {
    mkdirSync(targetAssetsPath, { recursive: true })
  }

  let copiedCount = 0

  // Copy zh-HK assets
  if (existsSync(zhHKAssetsPath)) {
    const zhHKAssets = sync(`${zhHKAssetsPath}/*.{png,jpg,jpeg,gif}`)
    zhHKAssets.forEach((asset) => {
      const fileName = basename(asset)
      const targetPath = join(targetAssetsPath, fileName)

      if (!existsSync(targetPath)) {
        copyFileSync(asset, targetPath)
        copiedCount++
      }
    })
  }

  // Copy en assets
  if (existsSync(enAssetsPath)) {
    const enAssets = sync(`${enAssetsPath}/*.{png,jpg,jpeg,gif}`)
    enAssets.forEach((asset) => {
      const fileName = basename(asset)
      const targetPath = join(targetAssetsPath, fileName)

      if (!existsSync(targetPath)) {
        copyFileSync(asset, targetPath)
        copiedCount++
      }
    })
  }

  console.log(`✅ Copied ${copiedCount} assets to lark-locales/assets/`)
}

// Convert zh-HK to zh-CN
function convertHK2CN() {
  const zhHKDocsPath = resolve(__dirname, "../lark-pages/zh-HK/docs")
  const zhHKDocs = sync(`${zhHKDocsPath}/**/*.md`)

  const zhHKDocsMetaPath = resolve(__dirname, "../lark-pages/zh-HK/docs.json")
  const zhHKDocsMeta: DocNode[] = JSON.parse(readFileSync(zhHKDocsMetaPath, "utf-8"))

  // First, convert all HK docs to CN only once
  const convertedDocs = zhHKDocs.map((doc) => {
    const hkContent = readFileSync(doc, "utf-8")
    const cnContent = converter(hkContent)

    return {
      path: doc,
      hkContent,
      cnContent,
      relativePath: doc.replace(`${zhHKDocsPath}/`, ""),
    }
  })

  // Convert docs.json to docs-zh-cn.json
  const docsMetaString = readFileSync(zhHKDocsMetaPath, "utf-8")
  const cnDocsMetaString = converter(docsMetaString)
  const cnDocsMetaPath = resolve(__dirname, "../lark-pages/zh-CN/docs.json")

  // Ensure directory exists
  if (!existsSync(dirname(cnDocsMetaPath))) {
    mkdirSync(dirname(cnDocsMetaPath), { recursive: true })
  }

  writeFileSync(cnDocsMetaPath, cnDocsMetaString)
  console.log(`✅ Converted docs.json to zh-CN`)

  // Then process and distribute docs for each version
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)
    let convertedCount = 0

    convertedDocs.forEach(({ path, hkContent, cnContent, relativePath }) => {
      // Check if this doc should be included in this version
      const docMeta = getDocMetaFromPath(zhHKDocsMeta, relativePath)
      const docVersion = docMeta?.meta?.version

      // Skip if doc has version and doesn't match current version
      if (docVersion && docVersion !== version) {
        return
      }

      const originalFileName = basename(path)

      // Use slug from frontmatter as target filename, fallback to original filename
      // Note: use hkContent to extract slug since cnContent might have converted characters
      const slug = getSlugFromContent(hkContent)
      const targetFileName = slug ? `${slug}.md` : originalFileName

      // Build target path: always place files directly in docs directory (flatten structure)
      const targetDir = resolve(__dirname, `../lark-locales/zh-CN/${versionPath}docs`)
      const cnFilePath = join(targetDir, targetFileName)

      // Ensure directory exists
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir, { recursive: true })
      }

      writeFileSync(cnFilePath, cnContent)
      convertedCount++
    })

    console.log(`✅ Converted ${convertedCount} docs to zh-CN for version: ${version}`)
  })
}

const HomePageSlug = "guides"

// Setup index pages (docs.md) for each locale
function setupIndexPages() {
  const zhHKDocsMetaPath = resolve(__dirname, "../lark-pages/zh-HK/docs.json")
  const zhHKDocsMeta: DocNode[] = JSON.parse(readFileSync(zhHKDocsMetaPath, "utf-8"))

  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)

    // Filter docs for this version
    const versionDocs = zhHKDocsMeta.map((section) => ({
      ...section,
      children: filterNodesByVersion(section.children || [], version),
    }))

    const versionHkMetadata = versionDocs.find((doc) => doc.meta?.originalSlug === "zh-HK")

    // Find the guides page (first level children with slug = guides)
    const guidesChild = versionHkMetadata?.children.find((doc) => {
      return (doc.meta?.originalSlug || doc.meta?.slug) === HomePageSlug
    })

    // Determine content for docs.md
    let guidesContent = `---
title: 使用指南
slug: guides
sidebar_position: 1
---


# 使用指南
`

    if (guidesChild) {
      // After flattening, all files are in the root docs directory
      const fileName = basename(guidesChild.filename)
      const guidesFilePath = resolve(__dirname, `../lark-pages/zh-HK/docs/${fileName}`)

      if (existsSync(guidesFilePath)) {
        guidesContent = readFileSync(guidesFilePath, "utf-8")
      }
    }

    // Setup zh-HK docs.md (always create)
    const guidesTargetDir = resolve(__dirname, `../lark-locales/zh-HK/${versionPath}`)
    if (!existsSync(guidesTargetDir)) {
      mkdirSync(guidesTargetDir, { recursive: true })
    }

    const guidesTargetFilePath = resolve(guidesTargetDir, `docs.md`)
    writeFileSync(guidesTargetFilePath, guidesContent)
    console.log(`  ✅ Created zh-HK docs.md for version: ${version}`)

    // Setup zh-CN docs.md (always create)
    const cnContent = converter(guidesContent)
    const cnFilePath = guidesTargetFilePath.replace("zh-HK", "zh-CN")

    if (!existsSync(dirname(cnFilePath))) {
      mkdirSync(dirname(cnFilePath), { recursive: true })
    }

    writeFileSync(cnFilePath, cnContent)
    console.log(`  ✅ Created zh-CN docs.md for version: ${version}`)
  })

  // Setup en docs.md - create a simple index page
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)

    const enIndexContent = `---
title: User Guide
slug: guides
sidebar_position: 1
---


# User Guide
`

    const guidesTargetDir = resolve(__dirname, `../lark-locales/en/${versionPath}`)
    if (!existsSync(guidesTargetDir)) {
      mkdirSync(guidesTargetDir, { recursive: true })
    }

    const guidesTargetFilePath = resolve(guidesTargetDir, `docs.md`)
    writeFileSync(guidesTargetFilePath, enIndexContent)
    console.log(`  ✅ Created en docs.md for version: ${version}`)
  })
}

// Setup root index.md
function setupRootIndex() {
  const indexContent = `Welcome to Whale Docs.

- [简体中文](zh-CN/docs.md)
- [繁体中文](zh-HK/docs.md)
- [English](en/docs.md)
`

  const indexPath = resolve(__dirname, "../lark-locales/index.md")
  writeFileSync(indexPath, indexContent)
  console.log(`  ✅ Created root index.md`)
}

// Rename markdown files based on their slug frontmatter field and update docs.json
// Helper function to extract slug from markdown content
function getSlugFromContent(content: string): string | null {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
  if (!frontmatterMatch) {
    return null
  }

  try {
    const frontmatter = yaml.load(frontmatterMatch[1]) as Record<string, any>
    return frontmatter?.slug || null
  } catch {
    return null
  }
}

function syncDocsJsonOnly(docsJsonPath: string) {
  console.log(`  🔄 Syncing docs.json with meta.slug...`)

  // Only sync docs.json, don't rename source files
  if (existsSync(docsJsonPath)) {
    syncDocsJsonWithMetaSlug(docsJsonPath)
  }
}

// Sync docs.json slug and filename fields with meta.slug
function syncDocsJsonWithMetaSlug(docsJsonPath: string) {
  const docsData: DocNode[] = JSON.parse(readFileSync(docsJsonPath, "utf-8"))

  function updateNode(node: DocNode): DocNode {
    const updatedNode = { ...node }
    let nodeUpdated = false

    // If meta.slug exists and differs from slug or filename, update them
    const metaSlug = updatedNode.meta?.slug
    if (metaSlug) {
      const currentSlug = updatedNode.slug || ''
      const currentFilename = updatedNode.filename || ''
      const expectedFilename = `${metaSlug}.md`

      // Update slug if it differs from meta.slug
      if (currentSlug !== metaSlug) {
        updatedNode.slug = metaSlug
        nodeUpdated = true
      }

      // Update filename if it differs from expected filename
      if (currentFilename !== expectedFilename) {
        updatedNode.filename = expectedFilename
        nodeUpdated = true
      }
    }

    // Recursively update children
    if (updatedNode.children && updatedNode.children.length > 0) {
      updatedNode.children = updatedNode.children.map(updateNode)
    }

    return updatedNode
  }

  const updatedData = docsData.map(updateNode)
  writeFileSync(docsJsonPath, JSON.stringify(updatedData, null, 2))
}

// Clean up hidden docs (docs that are not in docs.json)
function normalizeHiddenDocs() {
  const rootPath = resolve(__dirname, "..")

  // Get all docs from lark-locales
  const allDocs = compact(
    uniq(
      flattenDeep([
        sync(`${rootPath}/lark-locales/zh-HK/docs/*.md`).map((doc) => basename(doc)),
        sync(`${rootPath}/lark-locales/zh-HK/lts/docs/*.md`).map((doc) => basename(doc)),
        sync(`${rootPath}/lark-locales/zh-CN/docs/*.md`).map((doc) => basename(doc)),
        sync(`${rootPath}/lark-locales/zh-CN/lts/docs/*.md`).map((doc) => basename(doc)),
        sync(`${rootPath}/lark-locales/en/docs/*.md`).map((doc) => basename(doc)),
        sync(`${rootPath}/lark-locales/en/lts/docs/*.md`).map((doc) => basename(doc)),
      ])
    )
  )

  const zhHKDocsMetaPath = resolve(__dirname, "../lark-pages/zh-HK/docs.json")
  const rawDocsData: DocNode[] = JSON.parse(readFileSync(zhHKDocsMetaPath, "utf-8"))
  const validDocs = compact(uniq(getAllValidFilenames(rawDocsData)))

  const removedDocs = flattenDeep(
    allDocs
      .filter((doc) => {
        if (["index.md", "docs.md", "SUMMARY.md"].includes(doc)) {
          return false
        } else {
          return !validDocs.includes(doc)
        }
      })
      .map((f) => {
        return [
          `${rootPath}/lark-locales/zh-CN/docs/${f}`,
          `${rootPath}/lark-locales/zh-HK/docs/${f}`,
          `${rootPath}/lark-locales/en/docs/${f}`,
          `${rootPath}/lark-locales/zh-CN/lts/docs/${f}`,
          `${rootPath}/lark-locales/zh-HK/lts/docs/${f}`,
          `${rootPath}/lark-locales/en/lts/docs/${f}`,
        ]
      })
  )

  removedDocs.forEach((doc) => {
    if (fs.existsSync(doc)) {
      fs.unlinkSync(doc)
    }
  })

  if (removedDocs.length === 0) {
    console.log(`✅ No hidden docs to remove`)
  }
}

async function run() {
  console.log("🚀 Starting lark-setup process...\n")

  // Step 1: Optimize source files (cleanup H1 titles and sync docs.json)
  console.log("📋 Step 1: Optimizing source files...")
  console.log("  🔧 Processing zh-HK docs...")
  const zhHKDocsPath = resolve(__dirname, "../lark-pages/zh-HK/docs")
  const zhHKDocsJsonPath = resolve(__dirname, "../lark-pages/zh-HK/docs.json")
  cleanupDuplicateH1Titles(zhHKDocsPath)
  syncDocsJsonOnly(zhHKDocsJsonPath)

  console.log("  🔧 Processing en docs...")
  const enDocsPath = resolve(__dirname, "../lark-pages/en/docs")
  const enDocsJsonPath = resolve(__dirname, "../lark-pages/en/docs.json")
  cleanupDuplicateH1Titles(enDocsPath)
  syncDocsJsonOnly(enDocsJsonPath)

  // Step 2: Clean up hidden docs
  console.log("📋 Step 2: Cleaning up hidden docs...")
  normalizeHiddenDocs()

  // Step 3: Setup zh-HK docs (copy to lark-locales)
  console.log("📋 Step 3: Setting up zh-HK docs...")
  setupZhHKDocs()

  // Step 4: Setup en docs (copy to lark-locales)
  console.log("📋 Step 4: Setting up en docs...")
  setupEnDocs()

  // Step 5: Copy assets
  console.log("📋 Step 5: Copying assets...")
  setupAssets()

  // Step 6: Convert to zh-CN
  console.log("📋 Step 6: Converting zh-HK to zh-CN...")
  convertHK2CN()

  // Step 8: Setup index pages
  console.log("📋 Step 7: Setting up index pages...")
  setupIndexPages()
  setupRootIndex()

  console.log("\n✅ All done!")
}

run()
