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
 *   bun run ./scripts/translate-cn-to-en.ts --filePath ../notion-locales/zh-CN/docs/ApzpwrzLpi6iNdkXoO7c5ZtUnjf.md
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
 * Features:
 *   - Automatically tracks translated files in translate/en/already.json
 *   - Skips files that have already been translated
 *   - Saves progress after each successful translation
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import { resolve, dirname, basename } from "path"
import { sync } from "glob"
import axios from "axios"
import * as dotenv from 'dotenv';

dotenv.config();


const DIFY_API_URL = "https://dify.longbridge-inc.com/v1/completion-messages"
const DIFY_API_KEY = process.env.DIFY_API_KEY
const DIFY_INPUT_VAR = "query"
const BASE_NOTION_PAGE_URL = "../notion-pages"
const BASE_NOTION_LOCALES_URL = "../notion-locales"
const OUTPUT_DIR = "../translate/en/docs" // output directory for translated files

if (!DIFY_API_KEY) {
  console.error("Error: DIFY_API_KEY environment variable is required")
  process.exit(1)
}

// Rate limiting configuration
const DELAY_BETWEEN_REQUESTS = 300 // 0.3 seconds delay between API calls
const DIFY_REQUEST_TIMEOUT = 600000 // 10 minutes timeout for long documents

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
async function translateMarkdownFile(inputPath: string, outputPath: string): Promise<void> {
  const content = readFileSync(inputPath, "utf-8")
  const translatedRes = await translateWithDify(content)
  const jsonSlug = basename(inputPath, ".md")
  let { frontmatter, body } = parseMarkdown(translatedRes)
  if (!frontmatter.slug) {
    // dify接口偶尔会将frontmatter省略
    const { frontmatter: originalFrontmatter } = parseMarkdown(content)
    const rawTitle = await translateWithDify(originalFrontmatter.title)
    frontmatter = {
      ...originalFrontmatter,
      title: rawTitle,
      slug: jsonSlug, // 防止部分md中slug与文件名不一致，用文件名做slug
    }
    await delay(100)
  } else if (frontmatter.slug !== jsonSlug) {
    frontmatter.slug = jsonSlug
  }
  // Build translated markdown
  const translatedContent = buildMarkdown(frontmatter, body)

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
    translatedNode.title = rawTitle
    console.log(`  Translated node title: ${node.title} -> ${translatedNode.title}`)
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
  console.log("translate docs.json start...")
  for (const node of docsMeta) {
    translatedMeta.push(await translateDocNode(node))
  }

  const outputPath = resolve(__dirname, `${BASE_NOTION_PAGE_URL}/docs-en.json`)
  writeFileSync(outputPath, JSON.stringify(translatedMeta, null, 2))
  console.log("translate docs.json success")
}

/**
 * Translate all markdown files from Chinese to English
 */
async function translateAllDocs({ inputDir = `${BASE_NOTION_LOCALES_URL}/zh-CN/docs`, outputDir = OUTPUT_DIR }: { inputDir?: string, outputDir?: string } = {}): Promise<void> {
  const docsPath = resolve(__dirname, inputDir)
  const docs = sync(`${docsPath}/**/*.md`).filter(
    doc => !doc.endsWith("SUMMARY.md") && !doc.endsWith("index.md")
  )
  const _outputDir = resolve(__dirname, outputDir)

  if (!existsSync(_outputDir)) {
    mkdirSync(_outputDir, { recursive: true })
  }

  // Load already translated files
  const alreadyTranslated = loadAlreadyTranslated()

  for (const docPath of docs) {
    const relativePath = docPath.replace(`${docsPath}/`, "")
    const outputPath = resolve(_outputDir, `${relativePath}`)

    // Skip if already in the translated list
    if (alreadyTranslated.has(relativePath)) {
      console.warn(`  Skipping (already translated): ${relativePath}`)
      continue
    }

    // Skip if output file exists
    // if (existsSync(outputPath)) {
    //   markAsTranslated(alreadyTranslated, relativePath)
    //   continue
    // }

    try {
      console.log("translating file:", relativePath)
      await translateMarkdownFile(docPath, outputPath)
      markAsTranslated(alreadyTranslated, relativePath)
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
  try {
    console.log("translate single file start...")
    await translateMarkdownFile(inputPath, outputPath)
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

  // 只翻译目录json
  if (args.includes("--json-only")) {
    await translateDocsJson()
    return
  }

  // 只翻译md文件
  if (args.includes("--docs-only")) {
    await translateAllDocs()
    return
  }
  console.log("translate start everything...")
  // Default: translate everything
  await translateDocsJson()
  await translateAllDocs()
}

run().catch(error => {
  console.error("Translation failed:", error)
  process.exit(1)
})

