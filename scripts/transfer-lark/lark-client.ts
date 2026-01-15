/**
 * 飞书 API 客户端
 * 封装所有与飞书 API 的交互
 */
import * as lark from '@larksuiteoapi/node-sdk';
import * as fs from 'fs-extra';
import path from 'path';

export class LarkClient {
    private client: lark.Client;

    constructor(appId: string, appSecret: string) {
        this.client = new lark.Client({
            appId,
            appSecret,
            disableTokenCache: false,
            domain: lark.Domain.Lark,
        });
    }

    /**
     * 列出所有可见的 Wiki 空间
     */
    async listSpaces(): Promise<any[]> {
        const res = await this.client.wiki.v2.space.list({
            params: { page_size: 50 },
        });

        if (res.code !== 0) {
            throw new Error(`获取空间列表失败: ${res.msg}`);
        }

        return res.data?.items || [];
    }

    /**
     * 创建 Wiki 节点（文档）
     */
    async createWikiNode(
        title: string,
        spaceId: string,
        parentNodeToken?: string
    ): Promise<{ nodeToken: string; objToken: string }> {
        const res = await this.client.wiki.v2.spaceNode.create({
            path: { space_id: spaceId },
            data: {
                obj_type: 'docx',
                node_type: 'origin',
                title: title,
                parent_node_token: parentNodeToken,
            },
        });

        if (res.code !== 0) {
            throw new Error(`创建 Wiki 节点失败 "${title}": ${res.msg}`);
        }

        const node = res.data?.node;
        if (!node?.node_token || !node?.obj_token) {
            throw new Error(`创建节点返回数据不完整: ${JSON.stringify(res.data)}`);
        }

        return {
            nodeToken: node.node_token,
            objToken: node.obj_token,
        };
    }

    /**
     * 获取 Wiki 节点的 obj_token
     */
    async getWikiNodeObjToken(nodeToken: string): Promise<string> {
        const res = await this.client.wiki.v2.space.getNode({
            params: { token: nodeToken },
        });

        if (res.code !== 0) {
            throw new Error(`获取节点信息失败: ${res.msg}`);
        }

        return res.data?.node?.obj_token || '';
    }

    /**
     * 上传图片到飞书
     * @param filePath 本地图片路径
     * @param parentToken 父节点（文档 objToken）
     */
    async uploadImage(filePath: string, parentToken: string, wikiObjToken: string): Promise<string> {
        const fileName = path.basename(filePath);
        const stats = await fs.stat(filePath);
        const MAX_RETRIES = 3;

        for (let i = 0; i < MAX_RETRIES; i++) {
            try {
                // 每次重试都重新创建流
                const fileStream = fs.createReadStream(filePath);

                // 使用 drive.media.uploadAll（不带 v1，不带 extra）
                const res = await this.client.drive.v1.media.uploadAll({
                    data: {
                        file_name: fileName,
                        parent_type: 'docx_image',
                        parent_node: parentToken,
                        size: stats.size,
                        file: fileStream,
                        extra: JSON.stringify({ drive_route_token: wikiObjToken })
                    },
                });

                if (res && res.file_token) {
                    return res.file_token;
                }

                throw new Error(`上传图片返回空 token: ${fileName}`);
            } catch (e: any) {
                // 如果是资源限制错误，不重试
                if (e.response?.data?.code === 1770035 || e.message?.includes('resource count exceed limit')) {
                    console.warn(`[警告] 图片 ${fileName} 因资源限制跳过: ${e.message}`);
                    return '';
                }
                console.warn(`[警告] 第 ${i + 1} 次上传图片失败 ${fileName}: ${e.message}`);
                if (i === MAX_RETRIES - 1) throw e;
                await this.delay(1000 * Math.pow(2, i));
            }
        }

        return '';
    }

    /**
     * 写入文档内容（创建块）
     */
    async writeDocContent(docToken: string, blocks: any[]): Promise<void> {
        await this.createBlocksRecursive(docToken, docToken, blocks);
    }

    /**
     * 递归创建文档块
     */
    private async createBlocksRecursive(
        docToken: string,
        parentBlockId: string,
        blocks: any[]
    ): Promise<void> {
        const LIMITS = {
            BLOCK_COUNT: 50,
            IMAGE: 20,
            SHEET: 5,
        };

        let currentBatch: any[] = [];
        let counts = { image: 0, sheet: 0 };

        const submitBatch = async (batch: any[]) => {
            if (batch.length === 0) return;

            // 准备 payload: 移除内部字段和子节点
            const payload = batch.map(b => {
                const copy = { ...b };
                delete copy._localPath;
                delete copy.children;
                delete copy._createdId;
                delete copy._sheetValues;
                delete copy._createdSheetToken;
                return copy;
            });

            const res = await this.client.docx.documentBlockChildren.create({
                path: {
                    document_id: docToken,
                    block_id: parentBlockId,
                },
                data: {
                    children: payload,
                    index: -1,
                },
            });

            if (res.code === 0 && res.data?.children?.length === batch.length) {
                for (let j = 0; j < batch.length; j++) {
                    const block = batch[j];
                    const created = res.data.children[j];
                    block._createdId = created.block_id;

                    if (created.sheet?.token) {
                        block._createdSheetToken = created.sheet.token;
                    }

                    if (block.children && block.children.length > 0) {
                        if (!created.block_id) {
                            throw new Error('创建的块没有 ID，无法添加子节点');
                        }
                        await this.createBlocksRecursive(docToken, created.block_id, block.children);
                    }
                }
            } else {
                throw new Error(`创建块失败 (Code ${res.code}): ${res.msg}`);
            }
        };

        for (const block of blocks) {
            // 跳过空元素的块
            const contentKeys = ['text', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'heading7', 'heading8', 'heading9', 'bullet', 'ordered', 'code', 'quote', 'callout', 'todo'];
            let hasEmptyElements = false;
            for (const key of contentKeys) {
                if (block[key] && Array.isArray(block[key].elements) && block[key].elements.length === 0) {
                    hasEmptyElements = true;
                    break;
                }
            }
            if (hasEmptyElements) continue;

            const isImage = block.block_type === 27;
            const isSheet = block.block_type === 30;

            const nextImageCount = counts.image + (isImage ? 1 : 0);
            const nextSheetCount = counts.sheet + (isSheet ? 1 : 0);

            if (
                currentBatch.length >= LIMITS.BLOCK_COUNT ||
                nextImageCount > LIMITS.IMAGE ||
                nextSheetCount > LIMITS.SHEET
            ) {
                await submitBatch(currentBatch);
                currentBatch = [];
                counts = { image: 0, sheet: 0 };
            }

            currentBatch.push(block);
            if (isImage) counts.image++;
            if (isSheet) counts.sheet++;
        }

        if (currentBatch.length > 0) {
            await submitBatch(currentBatch);
        }
    }

    /**
     * 批量更新块（用于替换图片等）
     */
    async batchUpdate(docToken: string, requests: any[]): Promise<void> {
        if (!requests || requests.length === 0) return;

        const CHUNK_SIZE = 50;

        for (let i = 0; i < requests.length; i += CHUNK_SIZE) {
            const chunk = requests.slice(i, i + CHUNK_SIZE);
            const res = await this.client.docx.documentBlock.batchUpdate({
                path: { document_id: docToken },
                data: { requests: chunk },
            });

            if (res.code !== 0) {
                throw new Error(`批量更新失败: ${res.msg}`);
            }
        }
    }

    /**
     * 更新表格值
     */
    async updateSheetValues(spreadsheetToken: string, range: string, values: any[][]): Promise<void> {
        const res = await this.client.request({
            method: 'PUT',
            url: `/open-apis/sheets/v2/spreadsheets/${spreadsheetToken}/values`,
            data: {
                valueRange: { range, values },
            },
        });

        if (res.code !== 0) {
            throw new Error(`更新表格值失败: ${res.msg}`);
        }
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

