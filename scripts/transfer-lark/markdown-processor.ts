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
                if (node.children.length === 1 && node.children[0].type === 'image') {
                    return [await this.createImageBlock(node.children[0])];
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
            default:
                return [];
        }
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
            const itemBlocks: LarkBlock[] = [];
            const nestedBlocks: LarkBlock[] = [];

            for (const child of listItem.children) {
                if (child.type === 'list') {
                    const childListBlocks = await this.nodesToBlocks([child]);
                    nestedBlocks.push(...childListBlocks);
                } else {
                    const contentBlocks = await this.convertNode(child);
                    itemBlocks.push(...contentBlocks);
                }
            }

            if (itemBlocks.length > 0) {
                const mainBlock = itemBlocks[0];

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

                const children = [...itemBlocks.slice(1), ...nestedBlocks];
                if (children.length > 0) {
                    mainBlock.children = children;
                }

                listItems.push(mainBlock);
            } else if (nestedBlocks.length > 0) {
                const emptyBlock: LarkBlock = {
                    block_type: node.ordered ? BLOCK_TYPES.ORDERED : BLOCK_TYPES.BULLET,
                    [node.ordered ? 'ordered' : 'bullet']: { elements: [] },
                    children: nestedBlocks,
                };
                listItems.push(emptyBlock);
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
                const projectRoot = path.resolve(this.baseDir);
                absPath = path.join(projectRoot, decodedUrl.substring(1));
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

