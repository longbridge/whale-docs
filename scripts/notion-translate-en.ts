/**
 * Translation script for converting Chinese markdown documents to English
 * Uses Dify API for translation
 * 
 * Usage: 
 *   DIFY_API_KEY=your_api_key bun run ./scripts/notion-translate-en.ts
 *   
 * To translate a single file:
 *   DIFY_API_KEY=your_api_key bun run ./scripts/notion-translate-en.ts --file ApzpwrzLpi6iNdkXoO7c5ZtUnjf.md
 * 
 * Or create a .env file in project root with:
 *   DIFY_API_KEY=your_api_key
 * 
 * Environment variables:
 *   - DIFY_API_KEY: Required. Your Dify API key
 * 
 * Features:
 *   - Automatically tracks translated files in translate/en/already.json
 *   - Skips files that have already been translated
 *   - Saves progress after each successful translation
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import { resolve, dirname, basename } from "path"
import { sync } from "glob"
import axios from "axios"


const DIFY_API_URL = "https://dify.longbridge-inc.com/v1/completion-messages"
const DIFY_API_KEY = process.env.DIFY_API_KEY
const DIFY_INPUT_VAR = "query"
const VERSIONS = ["stable", "lts"]
const DEFAULT_VERSION = "stable"
const BASE_NOTION_PAGE_URL = "../notion-pages"
const BASE_NOTION_LOCALES_URL = "../notion-locales"

if (!DIFY_API_KEY) {
  console.error("Error: DIFY_API_KEY environment variable is required")
  process.exit(1)
}

// Rate limiting configuration
const DELAY_BETWEEN_REQUESTS = 1000 // 1 second delay between API calls

// Already translated files tracking
const ALREADY_TRANSLATED_FILE = resolve(__dirname, "../translate/en/already.json")

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

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Load the list of already translated files
 */
function loadAlreadyTranslated(): Set<string> {
  try {
    if (existsSync(ALREADY_TRANSLATED_FILE)) {
      const content = readFileSync(ALREADY_TRANSLATED_FILE, "utf-8").trim()
      if (content) {
        const files = JSON.parse(content)
        return new Set(Array.isArray(files) ? files : [])
      }
    }
  } catch (error) {
    console.warn("Warning: Failed to load already translated files list")
  }
  return new Set()
}

/**
 * Save the list of already translated files
 */
function saveAlreadyTranslated(files: Set<string>): void {
  try {
    const dir = dirname(ALREADY_TRANSLATED_FILE)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    const sortedFiles = Array.from(files).sort()
    writeFileSync(ALREADY_TRANSLATED_FILE, JSON.stringify(sortedFiles, null, 2))
  } catch (error) {
    console.error("Error: Failed to save already translated files list:", error)
  }
}

/**
 * Add a file to the already translated list
 */
function markAsTranslated(alreadyTranslated: Set<string>, filename: string): void {
  alreadyTranslated.add(filename)
  saveAlreadyTranslated(alreadyTranslated)
}

/**
 * Clean up translated title by removing common Chinese prefix patterns
 */
function cleanTranslatedTitle(translatedTitle: string): string {
  // Remove patterns like "xxx的美式英语翻译为：", "xxx的英文翻译是：", etc.
  const patterns = [
    /^.*?的美式英语翻译为[：:]\s*/,
    /^.*?的英文翻译[是为][：:]\s*/,
    /^.*?的翻译[是为][：:]\s*/,
    /^.*?翻译[为成][：:]\s*/,
    /^The translation of.*?is[：:]\s*/i,
    /^Translation[：:]\s*/i,
  ]

  let result = translatedTitle
  for (const pattern of patterns) {
    result = result.replace(pattern, "")
  }

  return result.trim()
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
        timeout: 120000, // 2 minutes timeout for long documents
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

  return `---\n${frontmatterLines}\n---\n${body}`
}

/**
 * Translate a single markdown file
 */
async function translateMarkdownFile(inputPath: string, outputPath: string): Promise<void> {
  const content = readFileSync(inputPath, "utf-8")
  const { frontmatter, body } = parseMarkdown(content)

  // Translate title if exists
  if (frontmatter.title) {
    try {
      const rawTitle = await translateWithDify(frontmatter.title)
      frontmatter.title = cleanTranslatedTitle(rawTitle)
      await delay(DELAY_BETWEEN_REQUESTS)
    } catch (error) {
      console.error(`  Failed to translate title, keeping original`)
    }
  }

  let translatedBody = body
  try {
    translatedBody = await translateWithDify(body)
  } catch (error) {
    console.error(`  Failed to translate body, keeping original`)
  }

  // Build translated markdown
  const translatedContent = buildMarkdown(frontmatter, translatedBody)

  // Ensure output directory exists
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true })
  }

  writeFileSync(outputPath, translatedContent)
}

/**
 * Translate node titles recursively and build English docs.json structure
 */
async function translateDocNode(node: DocNode): Promise<DocNode> {
  const translatedNode = { ...node }

  // Translate title
  try {
    const rawTitle = await translateWithDify(node.title)
    translatedNode.title = cleanTranslatedTitle(rawTitle)
    await delay(DELAY_BETWEEN_REQUESTS)
  } catch (error) {
    console.error(`  Failed to translate node title: ${node.title}`)
  }

  // Recursively translate children
  if (node.children && node.children.length > 0) {
    translatedNode.children = []
    for (const child of node.children) {
      translatedNode.children.push(await translateDocNode(child))
    }
  }

  return translatedNode
}

/**
 * Translate docs.json structure to English
 */
async function translateDocsJson(): Promise<void> {
  const docsMetaPath = resolve(__dirname, `${BASE_NOTION_PAGE_URL}/docs-zh-cn.json`)
  const docsMetaString = readFileSync(docsMetaPath, "utf-8")
  const docsMeta: DocNode[] = JSON.parse(docsMetaString)

  const translatedMeta: DocNode[] = []
  for (const node of docsMeta) {
    translatedMeta.push(await translateDocNode(node))
  }

  const outputPath = resolve(__dirname, `${BASE_NOTION_PAGE_URL}/docs-en.json`)
  writeFileSync(outputPath, JSON.stringify(translatedMeta, null, 2))
}

/**
 * Translate all markdown files from Chinese to English
 */
async function translateAllDocs(): Promise<void> {
  const docsPath = resolve(__dirname, `${BASE_NOTION_LOCALES_URL}/zh-CN/docs`)
  const docs = sync(`${docsPath}/**/*.md`).filter(
    doc => !doc.endsWith("SUMMARY.md") && !doc.endsWith("index.md")
  )

  // Load already translated files
  const alreadyTranslated = loadAlreadyTranslated()

  for (const version of VERSIONS) {
    for (const docPath of docs) {
      const relativePath = docPath.replace(`${docsPath}/`, "")
      const outputPath = resolve(__dirname, `../translate/en/docs/${relativePath}`)

      // Skip if already in the translated list
      if (alreadyTranslated.has(relativePath)) {
        console.warn(`  Skipping (already translated): ${relativePath}`)
        continue
      }

      // Skip if output file exists
      if (existsSync(outputPath)) {
        markAsTranslated(alreadyTranslated, relativePath)
        continue
      }

      try {
        await translateMarkdownFile(docPath, outputPath)
        markAsTranslated(alreadyTranslated, relativePath)
        console.log(`  ✓ Completed: ${relativePath}`)
        await delay(DELAY_BETWEEN_REQUESTS)
      } catch (error) {
        console.error(`  ✗ Failed to translate: ${relativePath}`)
      }
    }
  }
}

/**
 * Translate a single file (for testing)
 */
async function translateSingleFile(filename: string): Promise<void> {
  const docsPath = resolve(__dirname, `${BASE_NOTION_LOCALES_URL}/zh-CN/docs`)
  const inputPath = resolve(docsPath, filename)

  if (!existsSync(inputPath)) {
    console.error(`  File not found: ${filename}`)
    process.exit(1)
  }

  // Load already translated files
  const alreadyTranslated = loadAlreadyTranslated()

  // Check if already translated
  if (alreadyTranslated.has(filename)) {
    console.warn(`  File already translated: ${filename}`)
    return
  }

  // Output to stable version by default
  const outputPath = resolve(__dirname, `../translate/en/docs/${filename}`)
  try {
    await translateMarkdownFile(inputPath, outputPath)
    markAsTranslated(alreadyTranslated, filename)
    console.log(`  ✓ Translated successfully: ${filename}`)
  } catch (error) {
    console.error(`  ✗ Failed to translate: ${filename}`)
    process.exit(1)
  }
}

async function run(): Promise<void> {
  const args = process.argv.slice(2)

  // Check for --file argument for single file translation
  const fileArgIndex = args.indexOf("--file")
  if (fileArgIndex !== -1 && args[fileArgIndex + 1]) {
    const filename = args[fileArgIndex + 1]
    await translateSingleFile(filename)
    return
  }

  // Check for --json-only argument
  if (args.includes("--json-only")) {
    await translateDocsJson()
    return
  }

  // Check for --docs-only argument
  if (args.includes("--docs-only")) {
    await translateAllDocs()
    return
  }

  // Default: translate everything
  await translateDocsJson()
  await translateAllDocs()
}

run().catch(error => {
  console.error("Translation failed:", error)
  process.exit(1)
})

