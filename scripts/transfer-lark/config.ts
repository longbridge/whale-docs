/**
 * 配置管理
 */
import * as dotenv from 'dotenv';
import { Command } from 'commander';
import { Config } from './types';

dotenv.config();

export function getConfig(): Config {
    const program = new Command();

    program
        .name('transfer-lark')
        .description('将本地 Markdown 文档上传至飞书知识库')
        .option('-e, --entry <path>', '入口文件或目录路径')
        .option('-t, --target <token>', '目标父节点 Token', process.env.LARK_PARENT_NODE_TOKEN)
        .option('-s, --space <id>', '飞书 Wiki 空间 ID', process.env.LARK_SPACE_ID)
        .option('--app-id <id>', '飞书 App ID', process.env.LARK_APP_ID)
        .option('--app-secret <secret>', '飞书 App Secret', process.env.LARK_APP_SECRET)
        .option('--assets-dir <path>', '资源文件目录（图片等）')
        .option('--dry-run', '试运行模式（不实际创建）', process.env.DRY_RUN === 'true')
        .option('--list-spaces', '列出可用的 Wiki 空间')
        .parse(process.argv);

    const options = program.opts();

    // 列出空间模式
    if (options.listSpaces) {
        return {
            appId: options.appId || process.env.LARK_APP_ID || '',
            appSecret: options.appSecret || process.env.LARK_APP_SECRET || '',
            wikiSpaceId: '',
            entryPath: '',
            dryRun: false,
            listSpaces: true,
        };
    }

    // 验证必需参数
    if (!options.entry) {
        console.error('❌ 错误: 缺少入口路径参数 -e, --entry <path>');
        process.exit(1);
    }

    if (!options.appId || !options.appSecret) {
        console.error('❌ 错误: 需要 LARK_APP_ID 和 LARK_APP_SECRET（环境变量或命令行参数）');
        process.exit(1);
    }

    if (!options.space) {
        console.error('❌ 错误: 需要 Wiki 空间 ID（-s 或 LARK_SPACE_ID 环境变量）');
        process.exit(1);
    }

    return {
        appId: options.appId,
        appSecret: options.appSecret,
        wikiSpaceId: options.space,
        targetParentToken: options.target,
        entryPath: options.entry,
        assetsDir: options.assetsDir,
        dryRun: options.dryRun || false,
    };
}

