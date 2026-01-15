/**
 * 本地文件节点
 */
export interface LocalNode {
    path: string;        // 绝对路径
    relativePath: string;// 相对于入口根目录的路径
    type: 'file' | 'folder';
    children: LocalNode[];
    parent?: LocalNode;
}

/**
 * 路径映射
 */
export interface PathMapping {
    [localPath: string]: {
        nodeToken: string;    // Wiki 节点 Token
        objToken: string;     // 文档对象 Token
        type: 'file' | 'folder';
    };
}

/**
 * 处理统计
 */
export interface ProcessingStats {
    filesCreated: number;
    foldersCreated: number;
    imagesUploaded: number;
    errors: string[];
}

/**
 * JSON 文档节点（来自 notion-pages/docs-en.json）
 */
export interface JsonDocNode {
    depth: number;
    title: string;
    node_token: string;
    parent_node_token: string;
    obj_create_time: number;
    obj_edit_time: number;
    slug: string;
    position: number;
    filename: string;
    has_child: boolean;
    children: JsonDocNode[];
    notion_slug?: string;
    meta?: {
        slug: string;
        originalSlug?: string;
    };
}

/**
 * 配置接口
 */
export interface Config {
    appId: string;
    appSecret: string;
    wikiSpaceId: string;
    targetParentToken?: string;
    entryPath: string;
    assetsDir?: string;
    dryRun: boolean;
    listSpaces?: boolean;
}

