#!/usr/bin/env node
import { BlockObjectResponse, Client } from "@notionhq/client";
import { NotionToMarkdown } from 'notion-to-md';
import { MdBlock } from "notion-to-md/build/types";
import "dotenv/config";
import fs from "fs";
import yaml from 'js-yaml';
import axios from "axios";
import path from "path";
import crypto from 'crypto';


interface INotionPageInfo {
  depth?: number;
  title?: string;
  // NOTE: 迁移的文件用飞书文档的token，新文档用notion的id
  node_token?: string;
  // NOTE: 迁移的文件用飞书文档的token，新文档用notion的id
  parent_node_token?: string;
  // NOTE: 迁移的文件用飞书文档的token，新文档用notion的id
  slug?: string;
  obj_create_time?: number;
  obj_edit_time?: number;
  // NOTE: notion的id
  notion_slug?: string;
  position?: number;
  filename?: string;
  has_child?: boolean;
  children?: INotionPageInfo[];
  meta?: Record<string, any>; // 页面元数据
  // obj_token: string; // 飞书文档的token，备注一下，暂时用不到
}

interface ICacheLog {
  [key: string]: {
    obj_edit_time?: number;
    meta?: Record<string, any>;
    position?: number;
  };
}

const OUTPUT_DIR = path.resolve(process.env.OUTPUT_DIR || "./notion-pages");
const DOCS_DIR = path.join(OUTPUT_DIR, "docs");
const CACHE_DIR = path.join(OUTPUT_DIR, ".cache");

const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID;
if (!NOTION_PAGE_ID) {
  throw new Error('NOTION_PAGE_ID is not set');
}

const NOTION_API_KEY = process.env.NOTION_API_KEY;
if (!NOTION_API_KEY) {
  throw new Error('NOTION_API_KEY is not set');
}

// 初始化客户端
// NOTE: https://www.notion.so/22c5bab0c2cc8154b7f6eb28360b28b3?source=copy_link
const notion = new Client({ auth: NOTION_API_KEY });

const n2m = new NotionToMarkdown({ notionClient: notion, config: { convertImagesToBase64: false, parseChildPages: false, separateChildPage: true } });

// 获取页面标题
const getPageTitle = (pageData: any): string => {
  // 情况1: 数据库页面
  if (pageData.object === "database") {
    return pageData.title.map(t => t?.plain_text).join("");
  }

  // 情况2: 普通页面
  const properties = pageData.properties;

  // 查找title类型的属性
  const titleKey = Object.keys(properties).find(key =>
    properties[key].type === "title"
  );

  if (titleKey) {
    return properties[titleKey].title
      .map(rt => rt.plain_text)
      .join("");
  }

  // 情况3: 旧版API结构
  if (pageData.title) {
    return pageData.title
      .map(rt => rt.plain_text)
      .join("");
  }

  // 情况4: 从其他位置获取
  if (properties["Title"]) {
    return properties["Title"].rich_text[0]?.plain_text || "无标题";
  }

  if (properties["Name"]) {
    return properties["Name"].rich_text[0]?.plain_text || "无标题";
  }

  // 最终回退
  return "未命名文档 " + new Date().toISOString().slice(0, 10);
}

// 转换页面信息
const convertInfo = (data: any, parent_node_token = '', depth = 0, position = 0): INotionPageInfo => ({
  depth,
  title: getPageTitle(data),
  node_token: data.id,
  parent_node_token,
  obj_create_time: data.created_time ? new Date(data.created_time).getTime() : 0,
  obj_edit_time: data.last_edited_time ? new Date(data.last_edited_time).getTime() : 0,
  slug: data.id,
  position,
  filename: `${data.id}.md`,
  has_child: false,
  children: [],
  notion_slug: data.id,
});

// 生成md文件的frontmatter
const generateFrontmatter = (title = '', originalMeta: any = {}, slug = '', sidebar_position = 0) => {
  const { originalSlug, ...others } = originalMeta;
  const meta = Object.assign(
    {},
    others,
    {
      title,
      slug: originalSlug || slug,
      sidebar_position,
    },
  );

  // Remove null or undefined key
  for (const key in meta) {
    if (meta[key] === undefined || meta[key] === null) {
      delete meta[key];
    }
  }

  let meta_yaml = yaml.dump(meta, {
    skipInvalid: true,
  });

  let output = `---\n`;
  output += meta_yaml;
  output += `---\n`;

  return output;
};

// 等待毫秒, Notion API 有每秒3-5次请求的限制
const wait = (ms = 350) => new Promise(resolve => setTimeout(resolve, ms));

// 下载文件
const downloadFiles = async (url: string, blockId: string, retryCount = 0) => {
  try {
    const urlWithoutQuery = url.split('?')[0];
    const extension = path.extname(urlWithoutQuery);
    // 对url进行hash，生成唯一文件名
    const filename = crypto.createHash('md5').update(urlWithoutQuery + blockId).digest('hex');
    const assetFilename = `${filename}${extension}`;

    const outputPath = path.join(DOCS_DIR, 'assets', assetFilename);
    if (fs.existsSync(outputPath)) {
      return assetFilename;
    }
    // 下载文件
    const res = await axios.get(url, {
      // responseType: "stream",
      responseType: 'arraybuffer',
    });
    // const buffer = Buffer.from(res.data);

    fs.writeFileSync(outputPath, res.data);

    // const writer = fs.createWriteStream(outputPath);
    // res.data.pipe(writer);

    return assetFilename;
  } catch (error) {
    // 文件下载重试
    if (retryCount < 5) {
      return await downloadFiles(url, blockId, retryCount + 1);
    } else {
      // TODO: 要观察具体情况，及时调整策略
      console.error(`下载文件失败: ${url}`, blockId, error?.code);
      return null;
    }
  }
};

let countForBlockRetry = 0;
const RETRY_COUNT_FOR_BLOCK = 500;

// 获取一页页面块列表
const getBlockListFromNotion = async (params: {
  block_id: string;
  start_cursor?: string;
  page_size: number;
}) => {
  let response;
  try {
    const promiseList = [notion.blocks.children.list(params), wait()];
    const result = await Promise.all(promiseList);
    response = result?.[0];
  } catch (error) {
    if (countForBlockRetry++ < RETRY_COUNT_FOR_BLOCK) {
      return await getBlockListFromNotion(params);
    } else {
      throw error;
    }
  }
  return response;
}

// 获取页面的所有块（处理分页）
const getAllBlocks = async (pageId = ''): Promise<BlockObjectResponse[]> => {
  let allBlocks: BlockObjectResponse[] = [];
  let startCursor = undefined;
  let hasMore = true;

  while (hasMore) {
    const response = await getBlockListFromNotion({
      block_id: pageId,
      start_cursor: startCursor,
      page_size: 100,
    });

    allBlocks = [...allBlocks, ...response?.results] as BlockObjectResponse[];
    hasMore = response?.has_more;
    startCursor = response?.next_cursor || undefined;
  }

  return allBlocks;
}

let countForPageRetry = 0;
const RETRY_COUNT_FOR_PAGE = 500;

// 获取页面n2m用的块结构信息
const getPageToMarkdownFromNotion = async (pageId: string) => {
  let mdBlocks: MdBlock[] = [];
  try {
    const promiseList = [n2m.pageToMarkdown(pageId), wait()];
    const result = await Promise.all(promiseList);
    mdBlocks = result?.[0] as MdBlock[] || [];
  } catch (error) {
    if (countForPageRetry++ < RETRY_COUNT_FOR_PAGE) {
      return await getPageToMarkdownFromNotion(pageId);
    } else {
      console.error(`获取页面n2m用的块结构信息失败: ${pageId}`);
      throw error;
    }
  }
  return mdBlocks;
}

// 下载资源文件（目前只处理图片）
const downloadAssetFiles = async (blocks: MdBlock[] = []) => {
  for (const block of blocks) {
    if (block.type === 'image') {
      const attachments = findAttachments(block.parent);
      for (const attachment of attachments) {
        const assetFilename = await downloadFiles(attachment.url, block.blockId);
        if (assetFilename) {
          block.parent = block.parent.replace(attachment.url, `/assets/${assetFilename}`);
        }
      }
    }
    if (block.children?.length > 0) {
      await downloadAssetFiles(block.children);
    }
  }
}

// 递归获取页面块信息
const getPageBlocks = async (pageInfo: INotionPageInfo) => {
  // 子页面块ID列表
  const childPageIdList: string[] = [];
  // 获取页面所有块信息
  const allBlocks = await getAllBlocks(pageInfo.notion_slug);

  // 如果文档的第一个文件是飞书文档的原始链接，则用飞书的token来覆盖node_token、slug、filename
  // NOTE: 用 meta 的 slug 代替
  // const firstBlock = allBlocks[0];
  // if (firstBlock?.type === 'paragraph') {
  //   const richText = firstBlock?.paragraph?.['rich_text']?.[0];
  //   const originalFeishuUrl = richText?.href || '';
  //   const plainText = richText?.plain_text || '';
  //   if (originalFeishuUrl && plainText.includes('[原始文档 - Original Document]')) {
  //     const urlObj = new URL(originalFeishuUrl);
  //     const segments = urlObj.pathname.split('/');
  //     const lastSegment = segments.pop();

  //     if (lastSegment) {
  //       pageInfo.node_token = lastSegment;
  //       pageInfo.slug = lastSegment;
  //       pageInfo.filename = `${lastSegment}.md`;
  //     }

  //   }
  // }


  for (const allBlock of allBlocks) {
    // 获取代码块中的元数据
    if (allBlock.type === 'code') {
      // 只处理YAML代码块
      if (allBlock?.code?.language === 'yaml') {
        const text = (allBlock?.code?.['rich_text'] || []).reduce((prev, curr) => {
          return prev + '\n' + (curr?.plain_text || '')
        }, '');

        if (text) {
          try {
            pageInfo.meta = { ...pageInfo.meta, ...yaml.load(text) };
          } catch (error) {
            console.error(`解析YAML代码块失败: ${text}`, error);
          }
        }
      }
    }
    if (allBlock.type === 'child_page') {
      allBlock.id && childPageIdList.push(allBlock.id);
    }
  }
  const slugFromMeta = pageInfo.meta?.slug || '';

  if (slugFromMeta) {
    pageInfo.node_token = slugFromMeta;
    pageInfo.slug = slugFromMeta;
    pageInfo.filename = `${slugFromMeta}.md`;
  }

  // 如果父节点被隐藏，则不处理子节点
  if (shouldHide(pageInfo)) {
    return;
  }

  // 处理每个子页面
  for (let i = 0; i < childPageIdList.length; i++) {
    const childPageId = childPageIdList[i];
    // 获取子页面详细信息
    const childPage = await getPageInfoFromNotion(childPageId);

    // 创建子节点
    const childNode = convertInfo(childPage, pageInfo.slug, (pageInfo.depth || 0) + 1, i);

    // 添加到父节点
    if (pageInfo.children) {
      pageInfo.children.push(childNode);
    } else {
      pageInfo.children = [childNode];
    }
    pageInfo.has_child = true;

    // 递归获取子页面的子页面
    await getPageBlocks(childNode);
  }
}

// 生成md文件
const generateMarkdownFiles = async (pageInfoList: INotionPageInfo[]) => {
  // 读取cache 日志文件
  let cacheLog: ICacheLog = {};
  const cacheLogPath = path.join(CACHE_DIR, 'log.json');
  try {
    if (fs.existsSync(cacheLogPath)) {
      cacheLog = JSON.parse(fs.readFileSync(cacheLogPath, 'utf-8')) || {};
    }
  } catch (error) {
    // 忽略错误
  }

  for (const pageInfo of pageInfoList) {
    const { notion_slug, slug, obj_edit_time, filename, meta, position, title } = pageInfo || {};
    if (notion_slug && slug && filename) {
      const outputPath = path.join(DOCS_DIR, filename);
      const cacheData = cacheLog?.[slug];
      // 如果文件存在，且缓存时间与当前时间一致，则跳过
      if (fs.existsSync(outputPath) && cacheData?.obj_edit_time && String(cacheData?.obj_edit_time) === String(obj_edit_time) && String(cacheData?.position || 0) === String(position || 0)) {
        continue;
      }

      // 获取页面n2m用的块结构信息
      const mdBlocks = await getPageToMarkdownFromNotion(notion_slug);

      const finalMdBlocks = mdBlocks.filter((block, index) => {
        // 过滤掉代码块和子页面块
        if (['code', 'child_page'].includes(block.type || '')) {
          return false;
        }
        // 如果第一个块是飞书文档的原始链接，则不处理
        if (index === 0 && block.type === 'paragraph' && block.parent.includes('[原始文档 - Original Document]')) {
          return false;
        }
        return true;
      });

      // 下载资源文件
      await downloadAssetFiles(finalMdBlocks);
      // 生成md文件
      const mdString = n2m.toMarkdownString(finalMdBlocks);

      fs.writeFileSync(outputPath, `${generateFrontmatter(title, meta, slug, position)}\n\n# ${title}\n\n${mdString.parent || ''}`);

      // NOTE: 更新缓存日志，每次生成md文件后更新一次是为了中途崩掉不用重头再来
      cacheLog[slug] = { obj_edit_time, meta, position };
      fs.writeFileSync(cacheLogPath, JSON.stringify(cacheLog, null, 2));
    }
  }
}

const shouldHide = (pageInfo: INotionPageInfo) => {
  const { title = '', meta = {} } = pageInfo || {};
  return title.includes('[hide]') || title.includes('[隐藏]') || String(meta.hide) === 'true';
}

// 当meta.hide=true时，删除当前元素
const deleteHideNode = (pageInfo: INotionPageInfo) => {
  pageInfo.children = (pageInfo.children || []).filter(child => !shouldHide(child));
  for (const child of pageInfo.children) {
    deleteHideNode(child);
  }
}

// 查找 Markdown 中的附件
const findAttachments = (content: string) => {
  // 图片匹配: ![...](...)
  const imageRegex = /!\[[^\]]*\]\((.*?)\)/g;
  // 文件链接匹配: [...](...)
  const fileRegex = /\[[^\]]*\]\((.*?)\)/g;

  const attachments: Array<{ url: string; original: string; type: string; }> = [];
  const urlSet = new Set();

  // 查找图片
  let match: RegExpMatchArray | null;
  while ((match = imageRegex.exec(content)) !== null) {
    const url = match[1];
    if (!urlSet.has(url)) {
      urlSet.add(url);
      attachments.push({
        url,
        original: match[0],
        type: 'image'
      });
    }
  }

  // 查找文件附件
  while ((match = fileRegex.exec(content)) !== null) {
    const url = match[1];
    // 跳过已经添加的图片和普通链接
    if (!urlSet.has(url) &&
      !url.startsWith('#') &&
      !url.startsWith('http')) {
      urlSet.add(url);
      attachments.push({
        url,
        original: match[0],
        type: 'file'
      });
    }
  }

  return attachments;
}

let countForPageInfoRetry = 0;
const RETRY_COUNT_FOR_PAGE_INFO = 500;

// 获取页面详细信息
const getPageInfoFromNotion = async (pageId: string) => {
  let pageInfo;
  try {
    const promiseList = [notion.pages.retrieve({ page_id: pageId }), wait()];
    const result = await Promise.all(promiseList);
    pageInfo = result?.[0];
  } catch (error) {
    if (countForPageInfoRetry++ < RETRY_COUNT_FOR_PAGE_INFO) {
      return await getPageInfoFromNotion(pageId);
    } else {
      console.error(`获取页面详细信息失败: ${pageId}`);
      throw error;
    }
  }
  return pageInfo;
}

// 删除不在docs.json里的多余的md文件
const removeExtraMdFiles = (pageInfoList: INotionPageInfo[]) => {
  let removedCount = 0;
  const mdFileList = pageInfoList.map(pageInfo => pageInfo.filename);
  try {
    fs.readdirSync(DOCS_DIR).forEach(file => {
      if (!['SUMMARY.md'].includes(file) && file.endsWith('.md') && !mdFileList.includes(file)) {
        fs.unlink(path.join(DOCS_DIR, file), () => { });
        removedCount++;
      }
    });
  } catch (error) {
    // 忽略错误
  }
  return removedCount;
}

// 生成summary内容
const generateSummary = (pageInfoList: INotionPageInfo[]): string => {
  let output = '';
  for (const pageInfo of pageInfoList) {
    let indent = '  '.repeat((pageInfo.depth || 0));
    output += `${indent}- [${pageInfo.title}](${pageInfo.filename})\n`;

    if (pageInfo.children && (pageInfo.children || []).length > 0) {
      output += generateSummary(pageInfo.children);
    }
  }

  return output;
};

// 生成summary.md文件
const generateSummaryFile = (pageInfoList: INotionPageInfo[] = []) => {
  fs.writeFileSync(path.join(DOCS_DIR, 'SUMMARY.md'), generateSummary(pageInfoList));
}

// 循环递归pageInfo的children，去掉children扁平成一级数组，并返回List
const flattenPageInfo = (pageInfo: INotionPageInfo): INotionPageInfo[] => {
  const flatPageInfo: INotionPageInfo[] = [];
  if ((pageInfo.depth ?? 0) >= 0) {
    flatPageInfo.push(pageInfo);
  }
  if (pageInfo.children) {
    for (const child of pageInfo.children) {
      flatPageInfo.push(...flattenPageInfo(child));
    }
  }
  return flatPageInfo;
}

const notion2mk = async () => {
  const start = new Date();

  // docs.json内容，根目录-1不用展示
  const info: INotionPageInfo = { depth: -1, slug: NOTION_PAGE_ID, notion_slug: NOTION_PAGE_ID, children: [] };

  // 创建目录
  fs.mkdirSync(path.join(DOCS_DIR, 'assets'), { recursive: true });
  fs.mkdirSync(path.join(CACHE_DIR), { recursive: true });

  // 获取页面块信息
  await getPageBlocks(info);

  // 删除隐藏节点以及其子节点
  deleteHideNode(info);

  fs.writeFileSync(path.join(OUTPUT_DIR, 'docs.json'), JSON.stringify(info.children, null, 2));

  // 生成summary.md 飞书侧debug的逻辑？可能不用但是也先写上
  generateSummaryFile(info.children);

  // TODO: 临时绕过生成页面信息，用于测试后续步骤
  // const docsJson = fs.readFileSync(path.join(OUTPUT_DIR, 'docs.json'), 'utf-8') || '[]';
  // const docsJsonData = JSON.parse(docsJson);
  // info.children = docsJsonData || [];

  // 扁平化pageInfo方便之后的操作
  const flatPageInfoList = flattenPageInfo(info);

  // 生成md文件
  await generateMarkdownFiles(flatPageInfoList);

  // 删除不在docs.json里的多余的md文件
  const removedMdCount = removeExtraMdFiles(flatPageInfoList);
  removedMdCount > 0 && console.log(`删除多余md文件数量: ${removedMdCount}`);

  console.log(`总耗时: ${((Date.now() - start.getTime()) / 1000).toFixed(2)}s`);
}

// App entry
(async () => {
  await notion2mk();
})();
