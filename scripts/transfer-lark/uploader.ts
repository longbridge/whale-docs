/**
 * 上传器
 * 负责将本地 Markdown 文件上传到Lark知识库
 */
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { LarkClient } from './lark-client';
import { FileScanner, parseMarkdownFrontmatter, extractTitleFromPath } from './file-scanner';
import { MarkdownProcessor, getExcelColumn } from './markdown-processor';
import { LocalNode, PathMapping, Config, JsonDocNode } from './types';

export class Uploader {
    private pathMap: PathMapping = {};
    private errors: { path: string; error: any }[] = [];

    constructor(
        private client: LarkClient,
        private config: Config
    ) { }

    /**
     * 运行上传流程
     */
    async run(entryPath: string, targetParentToken?: string): Promise<void> {
        console.log('📂 扫描文件...');
        const scanner = new FileScanner(entryPath);
        const rootNode = await scanner.scan();

        console.log('\n📝 阶段 1: 同步目录结构（创建 Wiki 节点）...');
        await this.syncStructure(rootNode, targetParentToken);

        console.log('\n📤 阶段 2: 上传文档内容...');
        await this.uploadContent(rootNode);

        this.printSummary();
    }

    /**
     * 同步目录结构到Lark Wiki
     */
    private async syncStructure(node: LocalNode, parentToken?: string): Promise<void> {
        try {
            // 获取标题
            let title = this.getNodeTitle(node);

            // 检查是否已处理
            if (this.pathMap[node.path]) return;

            // 检查是否是文件夹内容文件（与同级文件夹同名的 .md 文件）
            if (node.type === 'file' && node.parent) {
                const siblingFolder = this.findSiblingFolder(node);
                if (siblingFolder) {
                    // 等待文件夹创建完成
                    if (!this.pathMap[siblingFolder.path]) {
                        await this.syncStructure(siblingFolder, parentToken);
                    }
                    // 映射此文件到文件夹的节点
                    this.pathMap[node.path] = this.pathMap[siblingFolder.path];
                    console.log(`  📎 映射文件 ${node.relativePath} 到文件夹节点`);
                    return;
                }
            }

            // 创建 Wiki 节点
            const { nodeToken, objToken } = await this.client.createWikiNode(
                title,
                this.config.wikiSpaceId,
                parentToken
            );

            this.pathMap[node.path] = { nodeToken, objToken, type: node.type };
            console.log(`  ✅ 创建节点 (${node.type}): ${node.relativePath} -> ${nodeToken}`);

            // 递归处理子节点
            for (const child of node.children) {
                await this.syncStructure(child, nodeToken);
            }
        } catch (e: any) {
            console.error(`  ❌ 同步结构失败: ${node.relativePath}`, e.message);
            this.errors.push({ path: node.relativePath, error: e });
        }
    }

    /**
     * 上传文档内容
     */
    private async uploadContent(node: LocalNode): Promise<void> {
        if (node.type === 'file') {
            await this.processFile(node);
        } else if (node.type === 'folder') {
            // 处理文件夹节点的内容（查找同名的 .md 文件）
            await this.processFolderContent(node);
        }

        for (const child of node.children) {
            await this.uploadContent(child);
        }
    }

    /**
     * 处理单个文件
     */
    private async processFile(node: LocalNode): Promise<void> {
        const mapEntry = this.pathMap[node.path];
        if (!mapEntry || !mapEntry.nodeToken) {
            console.warn(`  ⚠️ 跳过 ${node.relativePath} (无节点 Token)`);
            return;
        }

        try {
            const content = readFileSync(node.path, 'utf-8');
            const docDir = path.dirname(node.path);
            const { body } = parseMarkdownFrontmatter(content);

            // 创建 Markdown 处理器
            const processor = new MarkdownProcessor(
                async (url) => this.replaceLink(url, docDir),
                docDir
            );

            // 转换为Lark块
            const blocks = await processor.processToBlocks(body);
            if (blocks.length > 0) {
                // 先写入文档内容（创建块，获取块 ID）
                await this.client.writeDocContent(mapEntry.objToken, blocks);
                console.log(`  ✅ 上传内容: ${node.relativePath} (${blocks.length} 个顶级块)`);

                // 后处理：上传图片并替换，更新表格
                await this.postProcessBlocks(blocks, mapEntry.objToken, mapEntry.nodeToken, node);
            }
        } catch (e: any) {
            console.error(`  ❌ 处理文件失败: ${node.relativePath}`, e.message);
            this.errors.push({ path: node.relativePath, error: e });
        }
    }

    /**
     * 处理文件夹节点的内容（查找同名的 .md 文件）
     */
    private async processFolderContent(node: LocalNode): Promise<void> {
        const mapEntry = this.pathMap[node.path];
        if (!mapEntry || !mapEntry.nodeToken) {
            return;
        }

        // 查找同名的 .md 文件
        const folderName = path.basename(node.path);
        const mdFilePath = path.join(path.dirname(node.path), `${folderName}.md`);

        if (!existsSync(mdFilePath)) {
            // 没有同名的 .md 文件，跳过
            return;
        }

        try {
            const content = readFileSync(mdFilePath, 'utf-8');
            const docDir = path.dirname(mdFilePath);
            const { body } = parseMarkdownFrontmatter(content);

            // 创建 Markdown 处理器
            const processor = new MarkdownProcessor(
                async (url) => this.replaceLink(url, docDir),
                docDir
            );

            // 转换为Lark块
            const blocks = await processor.processToBlocks(body);
            if (blocks.length > 0) {
                // 先写入文档内容（创建块，获取块 ID）
                await this.client.writeDocContent(mapEntry.objToken, blocks);
                console.log(`  ✅ 上传目录内容: ${node.relativePath} (${blocks.length} 个顶级块)`);

                // 后处理：上传图片并替换，更新表格
                const folderContentNode: LocalNode = {
                    path: mdFilePath,
                    relativePath: path.relative(process.cwd(), mdFilePath),
                    type: 'file',
                    children: []
                };
                await this.postProcessBlocks(blocks, mapEntry.objToken, mapEntry.nodeToken, folderContentNode);
            }
        } catch (e: any) {
            console.error(`  ❌ 处理目录内容失败: ${node.relativePath}`, e.message);
            this.errors.push({ path: node.relativePath, error: e });
        }
    }

    /**
     * 后处理：上传图片并替换，更新表格
     */
    async postProcessBlocks(
        blocks: any[],
        objToken: string,
        nodeToken: string,
        node: LocalNode
    ): Promise<void> {
        const batchRequests: any[] = [];

        const traverse = async (nodes: any[]) => {
            for (const block of nodes) {
                // 处理图片：上传图片并收集替换请求
                if (block.block_type === 27 && block._localPath && block._createdId) {
                    const localPath = block._localPath;
                    if (existsSync(localPath)) {
                        try {
                            console.log(`    📷 上传图片: ${path.basename(localPath)}`);
                            // 使用 objToken 作为 parent_node
                            const imageToken = await this.client.uploadImage(localPath, block._createdId, objToken);
                            if (imageToken) {
                                batchRequests.push({
                                    block_id: block._createdId,
                                    replace_image: { token: imageToken },
                                });
                            }
                            // 在图片上传之间加延迟，避免触发API限制，因为QPS=5
                            await this.client.delay(300);
                        } catch (e: any) {
                            // console.error(`    ❌ 图片上传失败: ${localPath}`, e.message);
                            this.errors.push({ path: node.relativePath, error: `图片上传失败: ${localPath}` });
                        }
                    } else {
                        console.warn(`    ⚠️ 图片不存在: ${localPath}`);
                    }
                }

                // 处理表格
                if (block.block_type === 30 && block._sheetValues && block._createdSheetToken) {
                    const [token, sheetId] = block._createdSheetToken.split('_');
                    if (token && sheetId && block._sheetValues.length > 0) {
                        try {
                            const rowCount = block._sheetValues.length;
                            const colCount = block._sheetValues[0]?.length || 0;
                            const endCol = getExcelColumn(colCount);
                            const range = `${sheetId}!A1:${endCol}${rowCount}`;

                            await this.client.updateSheetValues(token, range, block._sheetValues);
                            console.log(`    📊 更新表格值`);
                        } catch (e: any) {
                            console.error(`    ❌ 表格更新失败`, e.message);
                            this.errors.push({ path: node.relativePath, error: `表格更新失败: ${e}` });
                        }
                    }
                }

                // 递归处理子块
                if (block.children && block.children.length > 0) {
                    await traverse(block.children);
                }
            }
        };

        await traverse(blocks);

        // 批量更新图片（使用 objToken），分批处理避免API限制
        if (batchRequests.length > 0) {
            const batchSize = 10; // 每批最多10张图片
            for (let i = 0; i < batchRequests.length; i += batchSize) {
                const batch = batchRequests.slice(i, i + batchSize);
                try {
                    await this.client.batchUpdate(objToken, batch);
                    console.log(`    ✅ 批量更新图片 ${i + 1}-${Math.min(i + batchSize, batchRequests.length)}/${batchRequests.length}`);
                } catch (e: any) {
                    console.error(`    ❌ 批量更新失败 (${i + 1}-${Math.min(i + batchSize, batchRequests.length)})`, e.message);
                    this.errors.push({ path: node.relativePath, error: `批量图片更新失败 (${i + 1}-${Math.min(i + batchSize, batchRequests.length)}): ${e}` });
                }
                // 批次间稍作延迟
                if (i + batchSize < batchRequests.length) {
                    await this.client.delay(1000);
                }
            }
        }
    }

    /**
     * 替换链接
     */
    async replaceLink(url: string, docDir: string): Promise<string> {
        // 外部链接直接返回
        if (url.startsWith('http')) return url;

        // 解码 URL
        try {
            url = decodeURIComponent(url);
        } catch (e) {
            // 忽略解码错误
        }

        // 解析相对路径
        const absTarget = path.resolve(docDir, url);
        const [filePath] = absTarget.split('#');

        // 查找映射
        const targetEntry = this.pathMap[filePath];
        if (targetEntry) {
            return `https://longbridge-group.jp.larksuite.com/wiki/${targetEntry.nodeToken}`;
        }

        // 本地链接未找到
        if (!url.startsWith('http')) {
            console.warn(`    ⚠️ 链接目标未找到: ${url}`);
            return '__UNLINK__';
        }

        return url;
    }

    /**
     * 获取节点标题
     */
    private getNodeTitle(node: LocalNode): string {
        if (node.type === 'folder') {
            return path.basename(node.path);
        }

        // 从文件内容读取标题
        try {
            const content = readFileSync(node.path, 'utf-8');
            const { title } = parseMarkdownFrontmatter(content);
            if (title !== 'Untitled') {
                return title;
            }
        } catch (e) {
            // 忽略读取错误
        }

        // 从文件名提取标题
        return extractTitleFromPath(node.path);
    }

    /**
     * 查找同名的兄弟文件夹
     */
    private findSiblingFolder(node: LocalNode): LocalNode | undefined {
        if (!node.parent) return undefined;

        const title = extractTitleFromPath(node.path);

        return node.parent.children.find(child => {
            if (child.type !== 'folder') return false;
            const childTitle = path.basename(child.path);
            return childTitle === title;
        });
    }

    /**
     * 打印摘要
     */
    private printSummary(): void {
        console.log('\n' + '='.repeat(50));

        if (this.errors.length > 0) {
            console.log('⚠️ 上传完成，但有错误:');
            console.log(`   错误数: ${this.errors.length}`);
            this.errors.forEach((err, idx) => {
                console.log(`   ${idx + 1}. ${err.path}`);
                console.log(`      原因: ${err.error.message || err.error}`);
            });
        } else {
            console.log('🎉 所有文件处理成功！');
        }
    }

    /**
     * 从 JSON 结构运行上传流程
     */
    async runFromJson(jsonNodes: JsonDocNode[], targetParentToken?: string): Promise<void> {
        console.log('\n📝 阶段 1: 同步 JSON 结构到 Wiki...');
        await this.syncJsonStructure(jsonNodes, targetParentToken);

        console.log('\n📤 阶段 2: 上传文档内容...');
        await this.uploadJsonContent(jsonNodes);

        this.printSummary();
    }

    /**
     * 同步 JSON 结构到Lark Wiki
     */
    private async syncJsonStructure(nodes: JsonDocNode[], parentToken?: string): Promise<void> {
        for (const node of nodes) {
            try {
                // 跳过没有 children 的根节点，直接处理其子节点
                if (node.depth === 0 && node.children.length > 0) {
                    await this.syncJsonStructure(node.children, parentToken);

                    continue;
                }

                // 检查是否已存在映射
                if (this.pathMap[node.filename]) {
                    console.log(`⏭️ 跳过已存在的节点: ${node.title}`);
                    continue;
                }

                const result = await this.client.createWikiNode(
                    node.title,
                    this.config.wikiSpaceId,
                    parentToken
                );

                this.pathMap[node.filename] = {
                    nodeToken: result.nodeToken,
                    objToken: result.objToken,
                    type: node.has_child ? 'folder' : 'file'
                };

                console.log(`✅ 创建节点: ${node.title}：${node.slug}`);

                // 递归处理子节点
                if (node.children && node.children.length > 0) {
                    await this.syncJsonStructure(node.children, this.pathMap[node.filename].nodeToken);
                }

            } catch (e: any) {
                console.error(`❌ 创建节点失败: ${node.title} (depth=${node.depth}, filename=${node.filename})`);
                console.error(`   错误详情: ${e.message}`);
                if (e.stack) {
                    console.error(`   堆栈: ${e.stack}`);
                }
                this.errors.push({ path: node.filename, error: e });
            }
        }
    }

    /**
     * 上传 JSON 结构对应的文档内容
     */
    private async uploadJsonContent(nodes: JsonDocNode[]): Promise<void> {
        for (const node of nodes) {
            try {
                // 跳过没有 children 的根节点
                if (node.depth === 0 && node.children.length > 0) {
                    await this.uploadJsonContent(node.children);
                    continue;
                }

                const mapping = this.pathMap[node.filename];
                if (!mapping || !mapping.objToken) {
                    console.warn(`⚠️ 跳过无映射的节点: ${node.title}`);
                    // 递归处理子节点
                    if (node.children?.length > 0) {
                        await this.uploadJsonContent(node.children);
                    }
                    continue;
                }

                // 查找对应的 MD 文件
                const mdFilePath = path.join(this.config.entryMdPath!, node.filename);
                if (!existsSync(mdFilePath)) {
                    // 如果是文件夹节点且没有对应的 MD 文件，不报错，只是跳过
                    if (!node.has_child) {
                        console.warn(`⚠️ MD 文件不存在: ${mdFilePath}`);
                        this.errors.push({ path: node.filename, error: `MD 文件不存在: ${mdFilePath}` });
                    }
                    // 递归处理子节点
                    if (node.has_child && node.children && node.children.length > 0) {
                        await this.uploadJsonContent(node.children);
                    }
                    continue;
                }

                // 读取并处理 Markdown 内容
                const content = readFileSync(mdFilePath, 'utf-8');
                const { body } = parseMarkdownFrontmatter(content);

                const processor = new MarkdownProcessor(
                    (url: string) => url, // 链接替换器
                    path.dirname(mdFilePath)
                );
                const blocks = await processor.processToBlocks(body);

                if (blocks.length > 0) {
                    // 上传文档内容
                    await this.client.writeDocContent(mapping.objToken, blocks);

                    // 后处理：上传图片并替换，更新表格
                    await this.postProcessBlocks(blocks, mapping.objToken, mapping.nodeToken, {
                        relativePath: node.filename,
                        path: mdFilePath
                    } as any);

                    const nodeType = node.has_child ? '目录' : '文件';
                    console.log(`✅ 上传${nodeType}内容: ${node.title}`);
                }

                // 递归处理子节点
                if (node.has_child && node.children && node.children.length > 0) {
                    await this.uploadJsonContent(node.children);
                }

            } catch (e: any) {
                console.error(`❌ 上传内容失败: ${node.title}`, e.message);
                this.errors.push({ path: node.filename, error: e });
                // 即使上传失败，也继续处理子节点
                if (node.has_child && node.children && node.children.length > 0) {
                    await this.uploadJsonContent(node.children);
                }
            }
        }
    }
}

