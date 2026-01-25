#!/usr/bin/env node
/*
 * Lark setup script - Copy Lark docs to notion-locales/en directory
 * 1. Read lark-pages/docs.json file
 * 2. Copy docs to notion-locales/en/docs/
 * 3. Copy assets to notion-locales/assets/
 * 4. Support versioning (stable and lts)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, renameSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { sync } from "glob";
import lodash from "lodash";
import * as path from "node:path";
import * as fs from "node:fs";

const { compact, flattenDeep, uniq } = lodash;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read docs.json
const docsMeta = JSON.parse(readFileSync(resolve(__dirname, "../lark-pages/docs.json"), "utf-8"));

const VERSIONS = ["stable", "lts"];
const DEFAULT_VERSION = "stable";

function getVersionPath(version) {
  return version === DEFAULT_VERSION ? "" : `${version}/`;
}

// Extract slug from markdown frontmatter
function extractSlugFromContent(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const slugMatch = frontmatter.match(/slug:\s*(.+)/);
    if (slugMatch) {
      return slugMatch[1].trim();
    }
  }
  return null;
}

// Rename markdown files in lark-pages/docs based on slug
function renameDocsBasedOnSlug() {
  const docsPath = resolve(__dirname, "../lark-pages/docs");
  const mdFiles = sync(`${docsPath}/*.md`).filter(file => {
    const basename = path.basename(file);
    // Skip special files
    return !["index.md", "docs.md", "SUMMARY.md"].includes(basename);
  });

  mdFiles.forEach((filePath) => {
    const content = readFileSync(filePath, "utf-8");
    const slug = extractSlugFromContent(content);
    
    if (slug) {
      const currentFilename = path.basename(filePath);
      const newFilename = `${slug}.md`;
      
      // Only rename if the filename is different
      if (currentFilename !== newFilename) {
        const newFilePath = path.join(path.dirname(filePath), newFilename);
        
        // Check if target file already exists
        if (existsSync(newFilePath)) {
          console.log(`⚠️  Skip renaming ${currentFilename} -> ${newFilename} (target already exists)`);
        } else {
          renameSync(filePath, newFilePath);
          console.log(`✓ Renamed: ${currentFilename} -> ${newFilename}`);
        }
      } else {
        console.log(`✓ Already correct: ${currentFilename}`);
      }
    } else {
      console.log(`⚠️  No slug found in ${path.basename(filePath)}`);
    }
  });
}

// Setup English docs from Lark
function setupEnDocs() {
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version);

    // Filter docs for this version
    const versionDocs = docsMeta.map((section) => ({
      ...section,
      children: filterNodesByVersion(section.children || [], version),
    }));

    // Process all docs and copy to en directory
    const allDocs = flattenDocs(versionDocs);

    allDocs.forEach((doc) => {
      if (doc.filename && doc.node_token) {
        // Use slug from meta if available, otherwise use node_token
        const slug = doc.meta?.slug || doc.node_token;
        const sourceFilename = `${slug}.md`;
        const sourceFilePath = resolve(__dirname, `../lark-pages/docs/${sourceFilename}`);

        if (existsSync(sourceFilePath)) {
          const content = readFileSync(sourceFilePath, "utf-8");
          
          // Use slug as target filename
          const targetFilename = sourceFilename;
          const enFilePath = resolve(__dirname, `../notion-locales/en/${versionPath}docs/${targetFilename}`);

          if (!existsSync(dirname(enFilePath))) {
            mkdirSync(dirname(enFilePath), { recursive: true });
          }

          writeFileSync(enFilePath, content);
          console.log(`copy en (${version}) ${doc.title} to file: ${enFilePath} (slug: ${slug})`);
        } else {
          console.log(`⚠️  Source file not found: ${sourceFilePath}`);
        }
      }
    });
  });
}

// Copy lark-pages/assets/* to notion-locales/assets
function setupAssets() {
  // Temporarily commented out - not copying assets to notion-locales/assets for now
  const assetsPath = resolve(__dirname, "../lark-pages/docs/assets");
  // Find png, jpg, jpeg, gif files
  const assets = sync(`${assetsPath}/*.{png,jpg,jpeg,gif}`);

  assets.forEach((asset) => {
    const targetAssetsPath = asset.replace("lark-pages/docs/", "notion-locales/");

    if (!existsSync(dirname(targetAssetsPath))) {
      mkdirSync(dirname(targetAssetsPath), { recursive: true });
    }

    if (!existsSync(targetAssetsPath)) {
      copyFileSync(asset, targetAssetsPath);
      console.log("copy assets file: ", targetAssetsPath);
    }
  });
}

// Setup index page
function setupIndexPage() {
  VERSIONS.forEach((version) => {
    const versionPath = getVersionPath(version);

    // Filter docs for this version
    const versionDocs = docsMeta.map((section) => ({
      ...section,
      children: filterNodesByVersion(section.children || [], version),
    }));

    // Find the first document as index
    const firstDoc = findFirstDoc(versionDocs);
    if (firstDoc && firstDoc.filename) {
      // Use slug from meta if available, otherwise use node_token
      const slug = firstDoc.meta?.slug || firstDoc.node_token;
      const sourceFilename = `${slug}.md`;
      const sourceFilePath = resolve(__dirname, `../lark-pages/docs/${sourceFilename}`);
      const indexFilePath = resolve(__dirname, `../notion-locales/en/${versionPath}docs.md`);

      if (!existsSync(dirname(indexFilePath))) {
        mkdirSync(dirname(indexFilePath), { recursive: true });
      }

      if (existsSync(sourceFilePath)) {
        const content = readFileSync(sourceFilePath, "utf-8");
        writeFileSync(indexFilePath, content);
        console.log(`copy en (${version}) ${firstDoc.title} to index file: ${indexFilePath} (slug: ${slug})`);
      } else {
        console.log(`⚠️  Source file not found: ${sourceFilePath}`);
      }
    }
  });
}

// Filter nodes by version
function filterNodesByVersion(nodes, version) {
  return nodes
    .filter((node) => {
      // Include if no version specified or version matches
      const nodeVersion = node.meta?.version;
      return !nodeVersion || nodeVersion === version;
    })
    .map((node) => {
      // Process children recursively
      if (node.children && node.children.length > 0) {
        return {
          ...node,
          children: filterNodesByVersion(node.children, version),
        };
      }
      return node;
    });
}

// Flatten docs structure
function flattenDocs(docs) {
  const result = [];

  function traverse(nodes, depth = 0) {
    for (const node of nodes) {
      result.push({ ...node, depth });
      if (node.children && node.children.length > 0) {
        traverse(node.children, depth + 1);
      }
    }
  }

  traverse(docs);
  return result;
}

// Find first document
function findFirstDoc(docs) {
  for (const doc of docs) {
    if (doc.filename) {
      return doc;
    }
    if (doc.children && doc.children.length > 0) {
      const found = findFirstDoc(doc.children);
      if (found) return found;
    }
  }
  return null;
}

// Get all valid filenames (using slug from meta if available, otherwise node_token)
function getAllValidFilenames(data) {
  const filenames = [];

  function extractFilenames(nodes) {
    for (const node of nodes) {
      if (node.node_token) {
        // Use slug from meta if available, otherwise use node_token
        const slug = node.meta?.slug || node.node_token;
        filenames.push(`${slug}.md`);
      }
      if (node.children && node.children.length > 0) {
        extractFilenames(node.children);
      }
    }
  }

  extractFilenames(data);
  return filenames;
}

// Clean up hidden docs
function normalize_hidden_docs() {
  const rootPath = resolve(__dirname, "..");
  const all_docs = compact(
    uniq(
      sync(`${rootPath}/lark-pages/docs/*.md`).map((doc) => {
        return path.basename(doc);
      })
    )
  );

  const raw_docs_data = JSON.parse(readFileSync(resolve(__dirname, "../lark-pages/docs.json"), "utf-8"));
  const the_valid_docs = compact(uniq(getAllValidFilenames(raw_docs_data)));
  const removed_docs = flattenDeep(
    all_docs
      .filter((doc) => {
        if (["index.md", "docs.md", "SUMMARY.md"].includes(doc)) {
          return false;
        } else {
          return !the_valid_docs.includes(doc);
        }
      })
      .map((f) => {
        return [
          `${rootPath}/lark-pages/docs/${f}`,
          `${rootPath}/notion-locales/en/docs/${f}`,
          `${rootPath}/notion-locales/en/lts/docs/${f}`,
        ];
      })
  );

  removed_docs.forEach((doc) => {
    if (fs.existsSync(doc)) {
      fs.unlinkSync(doc);
      console.log(`--> removed file: ${doc}`);
    } else {
      console.log(`--> not found file: ${doc}`);
    }
  });
}

async function run() {
  console.log("开始处理 Lark 文档...");
  console.log("\n1. 根据 slug 重命名 lark-pages/docs 中的文件...");
  renameDocsBasedOnSlug();
  console.log("\n2. 清理隐藏文档...");
  normalize_hidden_docs();
  console.log("\n3. 复制文档到 notion-locales/en...");
  setupEnDocs();
  console.log("\n4. 复制资源文件...");
  setupAssets();
  console.log("\n5. 设置索引页面...");
  setupIndexPage();
  console.log("\n✅ Lark 文档处理完成！");
}

run();
