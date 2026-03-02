/**
 * Markdown 处理器
 * 将 Markdown 转换为Lark文档块格式
 */
import path from 'path';

// Lark块类型常量
const BLOCK_TYPES = {
    PAGE: 1,
    TEXT: 2,
    HEADING1: 3,
    HEADING2: 4,
    HEADING3: 5,
    HEADING4: 6,
    HEADING5: 7,
    HEADING6: 8,
    HEADING7: 9,
    HEADING8: 10,
    HEADING9: 11,
    BULLET: 12,
    ORDERED: 13,
    CODE: 14,
    QUOTE: 15,
    TODO: 17,
    BITABLE: 18,
    CALLOUT: 19,
    DIVIDER: 22,
    IMAGE: 27,
    SHEET: 30,
};

interface LarkBlock {
    block_type: number;
    [key: string]: any;
}

export class MarkdownProcessor {
    private processor: any;

    constructor(
        private linkReplacer: (url: string) => string | Promise<string>,
        private baseDir: string
    ) { }

    private async getProcessor() {
        if (!this.processor) {
            const { unified } = await eval('import("unified")');
            const { default: remarkParse } = await eval('import("remark-parse")');
            const { default: remarkGfm } = await eval('import("remark-gfm")');
            this.processor = unified().use(remarkParse).use(remarkGfm);
        }
        return this.processor;
    }

    /**
     * 将 Markdown 转换为Lark文档块
     */
    async processToBlocks(markdown: string): Promise<LarkBlock[]> {
        const processor = await this.getProcessor();
        const tree = processor.parse(markdown);

        // 调试：打印所有节点类型
        const nodeTypes = new Set<string>();
        const traverse = (node: any) => {
            nodeTypes.add(node.type);
            if (node.children) {
                node.children.forEach(traverse);
            }
        };
        tree.children.forEach(traverse);
        // console.log('  🔍 解析到的节点类型:', Array.from(nodeTypes));

        return this.nodesToBlocks(tree.children);
    }

    private async nodesToBlocks(nodes: any[]): Promise<LarkBlock[]> {
        let blocks: LarkBlock[] = [];
        for (const node of nodes) {
            const result = await this.convertNode(node);
            if (result) {
                blocks = blocks.concat(result);
            }
        }
        return blocks;
    }

    private async convertNode(node: any): Promise<LarkBlock[]> {
        switch (node.type) {
            case 'heading':
                return [await this.createHeadingBlock(node)];
            case 'paragraph':
                // 检查是否只包含一个图片（Markdown 语法）
                if (node.children.length === 1 && node.children[0].type === 'image') {
                    return [await this.createImageBlock(node.children[0])];
                }
                
                // 检查是否只包含一个 HTML 图片
                if (node.children.length === 1 && node.children[0].type === 'html') {
                    const htmlContent = node.children[0].value || '';
                    if (htmlContent.trim().startsWith('<img')) {
                        return this.handleHtmlNode(node.children[0]);
                    }
                }
                
                // 检查是否包含混合内容（文本 + HTML 图片）
                const hasHtmlImage = node.children.some((c: any) => 
                    c.type === 'html' && (c.value || '').trim().startsWith('<img')
                );
                
                if (hasHtmlImage) {
                    // 分离文本和图片
                    const blocks: LarkBlock[] = [];
                    const textNodes: any[] = [];
                    
                    for (const child of node.children) {
                        if (child.type === 'html' && (child.value || '').trim().startsWith('<img')) {
                            // 如果有累积的文本节点，先创建文本块
                            if (textNodes.length > 0) {
                                const textBlock = await this.createTextBlock({ ...node, children: textNodes });
                                blocks.push(textBlock);
                                textNodes.length = 0;
                            }
                            // 创建图片块
                            const imageBlocks = await this.handleHtmlNode(child);
                            blocks.push(...imageBlocks);
                        } else {
                            textNodes.push(child);
                        }
                    }
                    
                    // 处理剩余的文本节点
                    if (textNodes.length > 0) {
                        const textBlock = await this.createTextBlock({ ...node, children: textNodes });
                        blocks.push(textBlock);
                    }
                    
                    return blocks;
                }
                
                return [await this.createTextBlock(node)];
            case 'list':
                return this.createListBlocks(node);
            case 'code':
                return [this.createCodeBlock(node)];
            case 'blockquote':
                return [await this.createQuoteBlock(node)];
            case 'table':
                return [await this.createTableBlock(node)];
            case 'thematicBreak':
                return [{ block_type: BLOCK_TYPES.DIVIDER, divider: {} }];
            case 'html':
                return this.handleHtmlNode(node);

            default:
                // console.log('  ⚠️  未处理的节点类型:', node.type);
                return [];
        }
    }

    /**
     * 处理 HTML 节点
     */
    private async handleHtmlNode(node: any): Promise<LarkBlock[]> {
        const html = node.value || '';
        
        // 检查是否是 <img> 标签
        const imgMatch = html.match(/<img\s+([^>]+)>/i);
        if (imgMatch) {
            // 提取 src 属性
            const srcMatch = imgMatch[1].match(/src=["']([^"']+)["']/i);
            if (srcMatch) {
                const src = srcMatch[1];
                return [await this.createImageBlockFromSrc(src)];
            }
        }
        
        // 其他 HTML 暂时忽略
        return [];
    }

    /**
     * 从 src 创建图片块
     */
    private async createImageBlockFromSrc(src: string): Promise<LarkBlock> {
        // 解码 URL
        let decodedUrl = src;
        try {
            decodedUrl = decodeURIComponent(src);
        } catch (e) {
            // 忽略解码错误
        }

        // 解析本地路径
        let absPath: string;
        if (decodedUrl.startsWith('/')) {
            // 绝对路径处理
            if (decodedUrl.startsWith('/assets/')) {
                // 特殊处理 /assets/ 路径
                const translateEnMatch = this.baseDir.match(/(.*\/translate\/en)\/(lts\/)?docs/);
                if (translateEnMatch) {
                    absPath = path.join(translateEnMatch[1], decodedUrl.substring(1));
                } else {
                    const projectRoot = path.resolve(this.baseDir);
                    absPath = path.join(projectRoot, decodedUrl.substring(1));
                }
            } else {
                const projectRoot = path.resolve(this.baseDir);
                absPath = path.join(projectRoot, decodedUrl.substring(1));
            }
        } else if (decodedUrl.startsWith('http://') || decodedUrl.startsWith('https://')) {
            // 外部 URL,不需要本地路径
            return {
                block_type: BLOCK_TYPES.IMAGE,
                image: {}
            };
        } else {
            // 相对路径
            absPath = path.resolve(this.baseDir, decodedUrl);
        }

        return {
            block_type: BLOCK_TYPES.IMAGE,
            image: {},
            _localPath: absPath
        };
    }




    private async createHeadingBlock(node: any): Promise<LarkBlock> {
        const level = Math.min(Math.max(node.depth, 1), 9);
        const blockType = 2 + level;
        const elements = await this.phrasingToElements(node.children);

        return {
            block_type: blockType,
            [`heading${level}`]: { elements },
        };
    }

    private async createTextBlock(node: any): Promise<LarkBlock> {
        const elements = await this.phrasingToElements(node.children);
        return {
            block_type: BLOCK_TYPES.TEXT,
            text: { elements },
        };
    }

    private async createListBlocks(node: any): Promise<LarkBlock[]> {
        const listItems: LarkBlock[] = [];

        for (const listItem of node.children) {
            const allBlocks: LarkBlock[] = [];

            // 按顺序处理所有子节点，保持原始顺序
            for (const child of listItem.children) {
                const contentBlocks = await this.convertNode(child);
                allBlocks.push(...contentBlocks);
            }

            if (allBlocks.length > 0) {
                const mainBlock = allBlocks[0];

                // 将第一个块转换为列表项
                if (mainBlock.block_type === BLOCK_TYPES.TEXT) {
                    mainBlock.block_type = node.ordered ? BLOCK_TYPES.ORDERED : BLOCK_TYPES.BULLET;
                    const textData = mainBlock.text;
                    delete mainBlock.text;
                    if (node.ordered) {
                        mainBlock.ordered = textData;
                    } else {
                        mainBlock.bullet = textData;
                    }
                }

                // 其余的块作为子块，保持原始顺序
                const children = allBlocks.slice(1);
                if (children.length > 0) {
                    mainBlock.children = children;
                }

                listItems.push(mainBlock);
            }
        }

        return listItems;
    }

    private createCodeBlock(node: any): LarkBlock {
        return {
            block_type: BLOCK_TYPES.CODE,
            code: {
                style: {
                    language: this.mapLanguage(node.lang),
                },
                elements: [{ text_run: { content: node.value || '' } }],
            },
        };
    }

    private async createQuoteBlock(node: any): Promise<LarkBlock> {
        const childrenBlocks = await this.nodesToBlocks(node.children);

        return {
            block_type: BLOCK_TYPES.CALLOUT,
            callout: {
                background_color: 5,
                border_color: 5,
                text_color: 1,
            },
            children: childrenBlocks,
        };
    }

    private async createTableBlock(node: any): Promise<LarkBlock> {
        const rows = node.children;
        const rowSize = rows.length;
        const colSize = rows[0]?.children?.length || 0;

        const values: string[][] = [];

        for (const row of rows) {
            const rowValues: string[] = [];
            for (const cell of row.children) {
                const text = this.flattenPhrasingToText(cell.children);
                rowValues.push(text);
            }
            values.push(rowValues);
        }

        return {
            block_type: BLOCK_TYPES.SHEET,
            sheet: {
                row_size: Math.min(rowSize, 9),
                column_size: Math.min(colSize, 9),
            },
            _sheetValues: values,
        };
    }

    private async createImageBlock(node: any): Promise<LarkBlock> {
        const localUrl = node.url;

        if (!localUrl.startsWith('http')) {
            let decodedUrl = localUrl;
            try {
                decodedUrl = decodeURIComponent(localUrl);
            } catch (e) {
                // 忽略解码错误
            }

            let absPath: string;

            // 处理绝对路径（如 /assets/xxx.png）
            if (decodedUrl.startsWith('/')) {
                // 特殊处理 /assets/ 路径
                // 如果文档在 translate/en/docs 或 translate/en/lts/docs，assets 应该在 translate/en/assets
                if (decodedUrl.startsWith('/assets/')) {
                    // 找到 translate/en 目录
                    const translateEnMatch = this.baseDir.match(/(.*\/translate\/en)\/(lts\/)?docs/);
                    if (translateEnMatch) {
                        // 使用 translate/en/assets 目录
                        absPath = path.join(translateEnMatch[1], decodedUrl.substring(1));
                    } else {
                        // 回退到原来的逻辑
                        const projectRoot = path.resolve(this.baseDir);
                        absPath = path.join(projectRoot, decodedUrl.substring(1));
                    }
                } else {
                    const projectRoot = path.resolve(this.baseDir);
                    absPath = path.join(projectRoot, decodedUrl.substring(1));
                }
            } else {
                // 相对路径直接解析
                absPath = path.resolve(this.baseDir, decodedUrl);
            }


            return {
                block_type: BLOCK_TYPES.IMAGE,
                image: {},
                _localPath: absPath,
            };
        }

        // 远程图片暂不支持，显示为文本
        return {
            block_type: BLOCK_TYPES.TEXT,
            text: {
                elements: [{
                    text_run: {
                        content: `[远程图片: ${localUrl}]`,
                        text_element_style: { text_color: 2 },
                    },
                }],
            },
        };
    }

    private flattenPhrasingToText(nodes: any[]): string {
        let text = '';
        if (!nodes) return text;
        for (const node of nodes) {
            if (node.value) {
                text += node.value;
            } else if (node.children) {
                text += this.flattenPhrasingToText(node.children);
            }
        }
        return text;
    }

    private async phrasingToElements(nodes: any[]): Promise<any[]> {
        const elements: any[] = [];

        for (const node of nodes) {
            if (node.type === 'text') {
                elements.push({ text_run: { content: node.value } });
            } else if (node.type === 'strong') {
                const children = await this.phrasingToElements(node.children);
                children.forEach((el: any) => {
                    if (el.text_run) {
                        el.text_run.text_element_style = { ...el.text_run.text_element_style, bold: true };
                    }
                });
                elements.push(...children);
            } else if (node.type === 'emphasis') {
                const children = await this.phrasingToElements(node.children);
                children.forEach((el: any) => {
                    if (el.text_run) {
                        el.text_run.text_element_style = { ...el.text_run.text_element_style, italic: true };
                    }
                });
                elements.push(...children);
            } else if (node.type === 'inlineCode') {
                elements.push({
                    text_run: {
                        content: node.value,
                        text_element_style: { inline_code: true },
                    },
                });
            } else if (node.type === 'link') {
                let newUrl = await this.linkReplacer(node.url);

                if (newUrl === '__UNLINK__') {
                    const children = await this.phrasingToElements(node.children);
                    children.forEach((el: any) => {
                        if (el.text_run) {
                            el.text_run.text_element_style = {
                                ...el.text_run.text_element_style,
                                text_color: 2,
                            };
                            el.text_run.content += ' (链接丢失)';
                        }
                    });
                    elements.push(...children);
                } else {
                    try {
                        newUrl = encodeURI(decodeURI(newUrl));
                    } catch (e) {
                        try {
                            newUrl = encodeURI(newUrl);
                        } catch (e2) {
                            // 忽略编码错误
                        }
                    }

                    const children = await this.phrasingToElements(node.children);
                    children.forEach((el: any) => {
                        if (el.text_run) {
                            el.text_run.text_element_style = {
                                ...el.text_run.text_element_style,
                                link: { url: newUrl },
                            };
                        }
                    });
                    elements.push(...children);
                }
            } else if (node.type === 'image') {
                elements.push({
                    text_run: {
                        content: '[内联图片不支持]',
                        text_element_style: { text_color: 2 },
                    },
                });
            }
        }

        return elements;
    }

    private mapLanguage(lang: string): number {
        const map: { [k: string]: number } = {
            ts: 9, typescript: 9,
            js: 6, javascript: 6,
            json: 19,
            md: 26, markdown: 26,
            python: 2, py: 2,
            java: 3,
            go: 4, golang: 4,
            rust: 13,
            shell: 8, bash: 8, sh: 8,
            sql: 15,
            yaml: 67, yml: 67,
            html: 5,
            css: 7,
            c: 10,
            cpp: 11, 'c++': 11,
        };
        return map[lang?.toLowerCase()] || 1;
    }
}

/**
 * 获取 Excel 列名
 */
export function getExcelColumn(n: number): string {
    let result = '';
    while (n > 0) {
        n--;
        result = String.fromCharCode(65 + (n % 26)) + result;
        n = Math.floor(n / 26);
    }
    return result || 'A';
}

