/**
 * 飞书知识库上传工具
 * 将本地 Markdown 文档上传至飞书知识库
 *
 * 使用方法:
 *   bun run ./scripts/transfer-lark/index.ts -e <JSON文件路径> -s <空间ID>
 *
 * 环境变量配置 (.env):
 *   LARK_APP_ID=xxx
 *   LARK_APP_SECRET=xxx
 *   LARK_SPACE_ID=xxx          # 知识库空间ID
 *   LARK_PARENT_NODE_TOKEN=xxx  # 可选，父节点token
 *
 * 命令行选项:
 *   -e, --entry <path>     JSON 文件路径 (notion-pages/docs-en.json)
 *   -t, --target <token>   目标父节点 Token
 *   -s, --space <id>       飞书 Wiki 空间 ID
 *   --app-id <id>          飞书 App ID
 *   --app-secret <secret>  飞书 App Secret
 *   --assets-dir <path>    资源文件目录
 *   --dry-run              试运行模式
 *   --list-spaces          列出可用的 Wiki 空间
 *
 * 工作流程:
 * 1. 解析 JSON 文件结构（从第一级 children 开始）
 * 2. 根据 filename 在 /translate/en/docs/ 下查找对应的 MD 文件
 * 3. 按照层级结构创建飞书 Wiki 节点
 * 4. 上传 Markdown 内容到对应的 Wiki 文档
 */

import path from 'path';
import { readFileSync } from 'fs';
import { getConfig } from './config';
import { LarkClient } from './lark-client';
import { Uploader } from './uploader';
import { JsonDocNode } from './types';

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

async function main() {
    const config = getConfig();
    const client = new LarkClient(config.appId, config.appSecret);

    // 列出空间模式
    if (config.listSpaces) {
        console.log('📋 获取 Wiki 空间列表...');
        try {
            const spaces = await client.listSpaces();
            if (spaces.length === 0) {
                console.log('⚠️ 未找到空间。请检查应用权限（Wiki: 读取/管理）');
            } else {
                console.log('\n可用的 Wiki 空间:');
                console.table(
                    spaces.map((s: any) => ({
                        名称: s.name,
                        ID: s.space_id,
                        描述: s.description || '(无描述)',
                    }))
                );
            }
        } catch (e: any) {
            console.error('❌ 获取空间列表失败:', e.message);
        }
        return;
    }

    // 显示配置信息
    console.log('='.repeat(50));
    console.log('📁 配置信息');
    console.log('='.repeat(50));
    console.log(`JSON 文件: ${config.entryPath}`);
    console.log(`空间 ID: ${config.wikiSpaceId}`);
    console.log(`父节点: ${config.targetParentToken || '(根目录)'}`);
    console.log(`试运行: ${config.dryRun ? '是' : '否'}`);
    console.log('='.repeat(50));

    try {
        // 解析 JSON 文件
        const jsonFilePath = path.resolve(process.cwd(), config.entryPath);
        const jsonNodes = parseJsonStructure(jsonFilePath);

        // 使用 JSON 结构上传
        const uploader = new Uploader(client, config);
        await uploader.runFromJson(jsonNodes, config.targetParentToken);
    } catch (e: any) {
        console.error('\n❌ 上传失败:', e.message);
        process.exit(1);
    }
}

main();

