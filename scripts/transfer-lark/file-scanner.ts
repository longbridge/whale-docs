/**
 * 文件扫描器
 * 扫描本地 Markdown 文件目录结构
 */
import { readdirSync, statSync } from 'fs';
import path from 'path';
import { LocalNode } from './types';

export class FileScanner {
    constructor(private entryPath: string) { }

    /**
     * 扫描入口路径，返回文件树
     */
    async scan(): Promise<LocalNode> {
        const absEntry = path.resolve(this.entryPath);
        const stats = statSync(absEntry);

        if (stats.isFile()) {
            // 单文件入口
            return {
                path: absEntry,
                relativePath: path.basename(absEntry),
                type: 'file',
                children: [],
            };
        }

        // 目录入口
        const rootNode: LocalNode = {
            path: absEntry,
            relativePath: '.',
            type: 'folder',
            children: [],
        };

        await this.scanDir(rootNode);
        return rootNode;
    }

    private async scanDir(node: LocalNode): Promise<void> {
        const entries = readdirSync(node.path, { withFileTypes: true });

        // 先处理文件夹，再处理文件（确保文件夹先创建）
        const folders = entries.filter(e => e.isDirectory());
        const files = entries.filter(e => e.isFile());

        // 处理文件夹
        for (const entry of folders) {
            // 忽略隐藏文件和 node_modules
            if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;

            const fullPath = path.join(node.path, entry.name);
            const childNode: LocalNode = {
                path: fullPath,
                relativePath: path.relative(this.entryPath, fullPath),
                type: 'folder',
                children: [],
                parent: node,
            };
            node.children.push(childNode);
            await this.scanDir(childNode);
        }

        // 处理 .md 文件
        for (const entry of files) {
            if (entry.name.startsWith('.')) continue;
            if (!entry.name.endsWith('.md')) continue;

            const fullPath = path.join(node.path, entry.name);
            const childNode: LocalNode = {
                path: fullPath,
                relativePath: path.relative(this.entryPath, fullPath),
                type: 'file',
                children: [],
                parent: node,
            };
            node.children.push(childNode);
        }
    }
}

/**
 * 解析 Markdown frontmatter
 */
export function parseMarkdownFrontmatter(content: string): { title: string; body: string } {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (!frontmatterMatch) {
        return { title: 'Untitled', body: content };
    }

    const frontmatterStr = frontmatterMatch[1];
    const restContent = frontmatterMatch[2];

    const titleMatch = frontmatterStr.match(/^title:\s*(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

    // 将 frontmatter 转换为代码块格式
    const codeBlockFrontmatter = '```yaml\n' + frontmatterStr + '\n```\n';
    const body = codeBlockFrontmatter + restContent;

    return { title, body };
}

/**
 * 从文件路径提取标题
 */
export function extractTitleFromPath(filePath: string): string {
    let title = path.basename(filePath, '.md');

    // 如果文件名包含空格和 ID（Notion 导出格式），提取标题部分
    const parts = title.split(' ');
    if (parts.length > 1) {
        // 最后一部分可能是 ID，移除它
        const lastPart = parts[parts.length - 1];
        // 检查是否像是 Notion ID（32位十六进制）
        if (/^[a-f0-9]{32}$/i.test(lastPart)) {
            parts.pop();
            title = parts.join(' ');
        }
    }

    return title;
}

