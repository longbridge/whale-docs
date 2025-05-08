/*
 * 1. read feishu-pages/docs.json file find first level meta slug equal zh-HK
 * 2. find the slug file in feishu-pages/docs/:slug.md copy it to locales/zh-HK/docs/:slug.md
 * 3. convert feishu-pagers/docs/:slug.md zh-CN then new file to locales/zh-CN/docs/:slug.md
 * 4. generate zh-HK, zh-CN siderbar config
 * 5. support versioning (stable and lts)
 * */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "fs"
import { resolve, dirname } from "path"
import { sync } from "glob"
import { compact, flattenDeep, uniq } from "lodash"
import { Converter } from "opencc-js"
import docsMeta from "../feishu-pages/docs.json"
import * as path from "node:path"
import * as fs from "node:fs"

const converter = Converter({ from: "hk", to: "cn" })
const VERSIONS = ["stable", "lts"]
const DEFAULT_VERSION = "stable"

function getVersionPath(version) {
  return version === DEFAULT_VERSION ? "" : `${version}/`
}

function convertHK2CN() {
  const docsPath = resolve(__dirname, "../feishu-pages/docs")
  const docs = sync(`${docsPath}/**/*.md`)

  // First, convert all HK docs to CN only once
  const convertedDocs = docs.map((doc) => {
    const hkContent = readFileSync(doc, "utf-8")
    const cnContent = converter(hkContent)

    return {
      path: doc,
      hkContent,
      cnContent,
      relativePath: doc.replace(`${docsPath}/`, ""),
    }
  })

  // convert docs.json to docs-zh-cn.json
  const docsMetaString = readFileSync(resolve(__dirname, "../feishu-pages/docs.json"), "utf-8")
  const cnDocsMetaString = converter(docsMetaString)
  writeFileSync(resolve(__dirname, "../feishu-pages/docs-zh-cn.json"), cnDocsMetaString)

  // Then process and distribute docs for each version
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)

    convertedDocs.forEach(({ path, hkContent, cnContent, relativePath }) => {
      // Check if this doc should be included in this version
      const docMeta = getDocMetaFromPath(docsMeta, relativePath)
      const docVersion = docMeta?.meta?.version

      // Skip if doc has version and doesn't match current version
      if (docVersion && docVersion !== version) {
        return
      }

      const hkFilePath = path.replace("feishu-pages", `locales/zh-HK/${versionPath}`)

      // Ensure directory exists
      if (!existsSync(dirname(hkFilePath))) {
        mkdirSync(dirname(hkFilePath), { recursive: true })
      }

      writeFileSync(hkFilePath, hkContent)
      console.log(`copy zh-HK (${version}) file: ${hkFilePath}`)

      const cnFilePath = path.replace("feishu-pages", `locales/zh-CN/${versionPath}`)

      // Ensure directory exists
      if (!existsSync(dirname(cnFilePath))) {
        mkdirSync(dirname(cnFilePath), { recursive: true })
      }

      writeFileSync(cnFilePath, cnContent)
      console.log(`convert zh-CN (${version}) file: ${cnFilePath}`)
    })
  })
}

function setupEnDocs() {
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)

    const versionEnMetadata = docsMeta.find((doc) => doc.meta?.slug === "en")
    if (!versionEnMetadata) {
      console.log(`not found en metadata`)
      return
    }

    const versionEnDocs = versionEnMetadata?.children.map((section) => ({
      ...section,
      children: filterNodesByVersion(section.children || [], version),
    }))

    versionEnDocs.forEach((doc) => {
      const enFilePath = path.replace("feishu-pages", `locales/en/${versionPath}`)
      if (!existsSync(dirname(enFilePath))) {
        mkdirSync(dirname(enFilePath), { recursive: true })
      }

      const enContent = readFileSync(doc.path, "utf-8")

      writeFileSync(enFilePath, enContent)
      console.log(`copy en (${version}) ${doc.title} to file: ${enFilePath}`)
    })
  })
}

// Helper function to find doc metadata from file path
function getDocMetaFromPath(docsMeta, filePath) {
  const fileName = filePath.replace(/\.md$/, "")

  function findNode(nodes) {
    for (const node of nodes) {
      if (node.node_token === fileName || node.slug === fileName) {
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

// Copy feishu-pages/assets/*.png to locales/assets
function setupAssets() {
  const assetsPath = resolve(__dirname, "../feishu-pages/docs/assets")
  // find png or jpg or jpeg gif file
  const assets = sync(`${assetsPath}/*.{png,jpg,jpeg,gif}`)

  assets.forEach((asset) => {
    const targetAssetsPath = asset.replace("feishu-pages/docs/", "locales/")

    if (!existsSync(dirname(targetAssetsPath))) {
      mkdirSync(dirname(targetAssetsPath), { recursive: true })
    }

    if (!existsSync(targetAssetsPath)) {
      copyFileSync(asset, targetAssetsPath)
      console.log("copy assets file: ", targetAssetsPath)
    }
  })
}

const HomePageSlug = "guides"
// read feishu-pages/docs.json file find slug equal guides, then copy it to locales/zh-HK/docs/index.md
// for Nginx directory to index.html
function setupIndexPage() {
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version)

    // Filter docs for this version
    const versionDocs = docsMeta.map((section) => ({
      ...section,
      children: filterNodesByVersion(section.children || [], version),
    }))

    const versionHkMetadata = versionDocs.find((doc) => doc.meta?.slug === "zh-HK")

    // loop first level children find meta.slug = guides
    const guidesChild = versionHkMetadata?.children.find((doc) => {
      return doc.meta?.slug === HomePageSlug
    })

    if (guidesChild) {
      const guidesFilePath = resolve(__dirname, `../feishu-pages/docs/${guidesChild.slug}.md`)

      if (existsSync(guidesFilePath)) {
        const guidesContent = readFileSync(guidesFilePath, "utf-8")
        const guidesTargetDir = resolve(__dirname, `../locales/zh-HK/${versionPath}`)

        // Ensure directory exists
        if (!existsSync(guidesTargetDir)) {
          mkdirSync(guidesTargetDir, { recursive: true })
        }

        const guidesTargetFilePath = resolve(guidesTargetDir, `docs.md`)
        writeFileSync(guidesTargetFilePath, guidesContent)
        console.log(`copy zh-HK (${version}) ${guidesChild.title} to index file: `, guidesTargetFilePath)

        const cnContent = converter(guidesContent)
        const cnFilePath = guidesTargetFilePath.replace("zh-HK", "zh-CN")

        // Ensure directory exists
        if (!existsSync(dirname(cnFilePath))) {
          mkdirSync(dirname(cnFilePath), { recursive: true })
        }

        writeFileSync(cnFilePath, cnContent)
        console.log(`copy zh-CN (${version}) ${guidesChild.title} to index file: `, cnFilePath)
      }
    }
  })
}

function filterNodesByVersion(nodes, version) {
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

function getAllNodeTokens(data) {
  const nodeTokens = []

  function extractNodeTokens(nodes) {
    for (const node of nodes) {
      if (node.node_token) {
        nodeTokens.push(`${node.node_token}.md`)
      }
      if (node.children && node.children.length > 0) {
        extractNodeTokens(node.children)
      }
    }
  }

  extractNodeTokens(data)
  return nodeTokens
}

function normalize_hidde_docs() {
  const rootPath = resolve(__dirname, "..")
  const all_docs = compact(
    uniq(
      sync(`${rootPath}/feishu-pages/docs/*.md`).map((doc) => {
        return path.basename(doc)
      })
    )
  )

  const raw_docs_data = JSON.parse(readFileSync(resolve(__dirname, "../feishu-pages/docs.json"), "utf-8"))
  const the_news_docs = compact(uniq(getAllNodeTokens(raw_docs_data)))
  const removed_docs = flattenDeep(
    all_docs
      .filter((doc) => {
        if (["index.md", "docs.md", "SUMMARY.md"].includes(doc)) {
          return false
        } else {
          return !the_news_docs.includes(doc)
        }
      })
      .map((f) => {
        return [
          `${rootPath}/feishu-pages/docs/${f}`,
          `${rootPath}/locales/zh-CN/docs/${f}`,
          `${rootPath}/locales/zh-HK/docs/${f}`,
          `${rootPath}/locales/en/docs/${f}`,
          `${rootPath}/locales/zh-CN/lts/docs/${f}`,
          `${rootPath}/locales/zh-HK/lts/docs/${f}`,
          `${rootPath}/locales/en/lts/docs/${f}`,
        ]
      })
  )

  removed_docs.forEach((doc) => {
    if (fs.existsSync(doc)) {
      fs.unlinkSync(doc)
      console.log(`--> removed file: ${doc}`)
    } else {
      console.log(`--> not found file: ${doc}`)
    }
  })
}

async function run() {
  normalize_hidde_docs()
  convertHK2CN()
  setupEnDocs()
  setupAssets()
  setupIndexPage()
}

run()
