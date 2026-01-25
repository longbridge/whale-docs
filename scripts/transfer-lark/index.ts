/**
 * Lark知识库上传工具
 * 将本地 Markdown 文档上传至Lark知识库
 *
 * 使用方法: 如果不指定命令行参数，则使用 .env 中的配置
 *   注意：指定父节点后，需要确保在Lark上选中父节点，然后在界面的右上角“三个点”点击“更多”，选择“添加文档应用”，搜索“文档上传”应用，并添加，才有权限上传文档
 *   bun run ./scripts/transfer-lark/index.ts -e <JSON文件路径> -s <空间ID> -t <父节点Token>
 * 
 * 上传单个文件
 *   bun run ./scripts/transfer-lark/index.ts ./path/to/file.md "自定义标题" "parent-node-token"
 *
 * 环境变量配置 (.env):
 *   LARK_APP_ID=xxx
 *   LARK_APP_SECRET=xxx
 *   LARK_SPACE_ID=xxx          # 知识库空间ID
 *   LARK_PARENT_NODE_TOKEN=xxx  # 父节点token
 *   ENTRY_MD_PATH=./translate/en/docs  # 本地md文档目录路径
 *   ENTRY_JSON_PATH=./notion-pages/docs-en.json  # 入口json文件路径
 *
 * 命令行选项:
 *   -e, --entry <path>     JSON 文件路径 (./notion-pages/docs-en.json)
 *   -d, --dir <path>      本地md文档目录路径
 *   -t, --target <token>   目标父节点 Token
 *   -s, --space <id>       Lark Wiki 空间 ID
 *   --app-id <id>          Lark App ID
 *   --app-secret <secret>  Lark App Secret
 *   --assets-dir <path>    资源文件目录
 *
 * 工作流程:
 * 1. 解析 JSON 文件结构（从第一级 children 开始）
 * 2. 根据 filename 在 entryMdPath 下查找对应的 MD 文件
 * 3. 按照层级结构创建Lark Wiki 节点
 * 4. 上传 Markdown 内容到对应的 Wiki 文档
 */

import path from 'path';
import { readFileSync, existsSync } from 'fs';

import { getConfig } from './config';
import { LarkClient } from './lark-client';
import { Uploader } from './uploader';
import { JsonDocNode, Config } from './types';
import { parseMarkdownFrontmatter, extractTitleFromPath } from './file-scanner';
import { MarkdownProcessor } from './markdown-processor';
import axios from 'axios';

/**
 * 解析 JSON 文件并返回第一级 children
 */
function parseJsonStructure(jsonFilePath: string): JsonDocNode[] {
    console.log(`📖 解析 JSON 文件: ${jsonFilePath}`);

    try {
        const jsonContent = readFileSync(jsonFilePath, 'utf-8');
        const jsonData: JsonDocNode[] = JSON.parse(jsonContent);

        // 找到根节点（通常是 depth 为 0 的节点）
        const rootNode = jsonData.find(node => node.depth === 0);
        if (!rootNode) {
            throw new Error('未找到根节点（depth 为 0 的节点）');
        }

        if (!rootNode.children || rootNode.children.length === 0) {
            throw new Error('根节点没有 children');
        }

        console.log(`✅ 找到 ${rootNode.children.length} 个第一级文档节点`);
        return rootNode.children;

    } catch (e: any) {
        throw new Error(`解析 JSON 文件失败: ${e.message}`);
    }
}

/**
 * 上传单个文件的测试函数
 * @param filePath 文件路径
 * @param title 可选的标题，如果不提供则从文件内容或文件名提取
 * @param parentToken 可选的父节点 token
 * @param config 可选的配置，如果不提供则使用环境变量
 */
export async function uploadSingleFile(
    filePath: string,
    title?: string,
    parentToken?: string,
    config?: Partial<Config>
): Promise<void> {
    console.log(`📄 开始上传单个文件: ${filePath}`);

    // 检查文件是否存在
    if (!existsSync(filePath)) {
        throw new Error(`文件不存在: ${filePath}`);
    }

    // 获取配置
    // const defaultConfig = getConfig();
    // 获取配置（从环境变量或传入的配置）
    const finalConfig: Config = {
        appId: config?.appId || process.env.LARK_APP_ID || '',
        appSecret: config?.appSecret || process.env.LARK_APP_SECRET || '',
        wikiSpaceId: config?.wikiSpaceId || process.env.LARK_SPACE_ID || '',
        targetParentToken: parentToken || config?.targetParentToken || process.env.LARK_PARENT_NODE_TOKEN,
        entryPath: filePath,
        assetsDir: config?.assetsDir,
    };

    // 验证必需的配置
    if (!finalConfig.appId || !finalConfig.appSecret) {
        throw new Error('需要 LARK_APP_ID 和 LARK_APP_SECRET（环境变量或配置参数）');
    }
    if (!finalConfig.wikiSpaceId) {
        throw new Error('需要 Wiki 空间 ID（LARK_SPACE_ID 环境变量或配置参数）');
    }
    // 创建客户端和上传器
    const client = new LarkClient(finalConfig.appId, finalConfig.appSecret);
    const uploader = new Uploader(client, finalConfig);

    try {
        // 确定标题
        if (!title) {
            title = extractTitleFromPath(filePath);
            try {
                const content = readFileSync(filePath, 'utf-8');
                const { title: extractedTitle } = parseMarkdownFrontmatter(content);
                if (extractedTitle !== 'Untitled') {
                    title = extractedTitle;
                }
            } catch (e) {
                // 忽略读取错误，使用默认标题
            }
        }

        console.log(`📝 标题: ${title}`);
        console.log(`📍 父节点: ${parentToken || '根目录'}`);

        // 创建 Wiki 节点
        const { nodeToken, objToken } = await client.createWikiNode(
            title,
            finalConfig.wikiSpaceId,
            parentToken
        );

        console.log(`✅ 创建节点成功: ${nodeToken}`);

        // 读取和处理文件内容
        const content = readFileSync(filePath, 'utf-8');
        const docDir = path.dirname(filePath);
        const { body } = parseMarkdownFrontmatter(content);

        // 创建 Markdown 处理器
        const processor = new MarkdownProcessor(
            async (url) => uploader.replaceLink(url, docDir),
            docDir
        );

        // 转换为Lark块
        const blocks = await processor.processToBlocks(body);

        if (blocks.length > 0) {
            // 写入文档内容
            await client.writeDocContent(objToken, blocks);
            console.log(`✅ 上传内容成功 (${blocks.length} 个顶级块)`);

            // 后处理：上传图片并替换，更新表格
            const mockNode = {
                relativePath: path.basename(filePath),
                path: filePath
            } as any;

            await uploader.postProcessBlocks(blocks, objToken, nodeToken, mockNode);
        }

        console.log('🎉 文件上传完成！');

    } catch (e: any) {
        console.error('❌ 上传失败:', e.message);
        throw e;
    }
}

async function main() {
    const config = getConfig();
    const client = new LarkClient(config.appId, config.appSecret);

    try {
        // await client.addKnowledgeSpaceMember(config.wikiSpaceId);
        // 解析 JSON 文件
        const jsonFilePath = path.resolve(process.cwd(), config.entryPath);
        const jsonNodes = parseJsonStructure(jsonFilePath);
        const parentToken = config.targetParentToken;
        if (!parentToken) {
            throw new Error('需要目标父节点 Token（.env 中设置 LARK_PARENT_NODE_TOKEN 环境变量）或 -t 命令行参数');
        }
        // 使用 JSON 结构上传
        const uploader = new Uploader(client, config);
        await uploader.runFromJson(jsonNodes, parentToken);
    } catch (e: any) {
        console.error('\n❌ 上传失败:', e.message);
        process.exit(1);
    }
}

async function testUploadSingleFile() {
    // 示例用法
    const filePath = process.argv[2];
    const title = process.argv[3];
    const parentToken = process.argv[4];

    try {
        await uploadSingleFile(filePath, title, parentToken);
    } catch (e: any) {
        process.exit(1);
    }
}

// 检查命令行参数，如果提供了文件路径则运行测试模式
if (process.argv[2] && !process.argv[2].startsWith('-')) {
    testUploadSingleFile();
} else {
    main();
}

