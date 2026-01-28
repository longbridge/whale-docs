import fs from "fs";
import path from "path";

const CACHE_BLOCKS_PATHS = [
    "lark-pages/en/.cache/blocks",
    "lark-pages/zh-HK/.cache/blocks",
];

function removeBlocksCache() {
    const rootDir = path.resolve(__dirname, "..");

    for (const relativePath of CACHE_BLOCKS_PATHS) {
        const fullPath = path.join(rootDir, relativePath);

        if (fs.existsSync(fullPath)) {
            console.log(`Removing: blocks cache`);
            fs.rmSync(fullPath, { recursive: true, force: true });
            console.log(`Successfully removed: ${relativePath}`);
        }
    }
}

removeBlocksCache();
