# Whale Docs

Longport Whale 的统一文档门户，基于 [Astro](https://astro.build/) 与 [Starlight](https://starlight.astro.build/) 构建，并使用 Bun 管理依赖和运行脚本。

站点包含 Docs、Whale SDK、Broker API、Trading API 与 OpenAPI。界面延续 Whale Docs 原有的品牌色、产品导航和信息架构；布局及交互实现参考了 Cloudflare Docs 的开源 Nimbus 主题模式，包括产品级导航、宽屏文档布局、可横向滚动表格、图片缩放和返回顶部等能力。

## 本地开发

```bash
bun install
bun run dev
```

默认访问 <http://localhost:4321>。生产构建与本地预览：

```bash
bun run build
bun run preview
```

## 内容与站点结构

```text
astro.config.mjs              # Astro、Starlight、OpenAPI 与多语言配置
docs.json                     # 原有信息架构；继续作为导航生成数据源
openapi.{en,zh-CN,zh-HK}.json # 三种语言的 Broker API OpenAPI 规范
docs/en/                      # 英文原始文档
docs/zh-CN/                   # 简体中文原始文档
docs/zh-HK/                   # 繁体中文原始文档
src/components/               # Whale 主题 Header、Sidebar 与兼容组件
src/styles/whale.css          # Whale 品牌和布局样式
scripts/prepare-astro-content.ts # 构建前生成 Astro 兼容内容
.astro-content/               # 自动生成，不提交
```

原始 Markdown/MDX 文件保持在 `docs/` 下的三个语言目录中。`prepare:docs` 会把它们复制到 `.astro-content/`，仅在生成副本中注入旧组件兼容层并转换 Mermaid 代码块，因此迁移不会重写或删减原文。

`docs.json` 不再是运行时框架配置，但仍是产品分组与多语言导航的来源，也由 API 导入脚本维护。源目录使用 `en`、`zh-CN`、`zh-HK`；Starlight 将公开 locale 路径规范化为 `/en/`、`/zh-cn/`、`/zh-hk/`，大小写形式和旧地址均通过重定向保持兼容。

## 更新 Broker API

API 的源数据位于相邻仓库 `../whale-openapi-docs`，不要直接编辑生成的 OpenAPI JSON。

```bash
python3 scripts/convert.py --dry-run
python3 scripts/convert.py
bun run build
```

导入脚本会更新三个 OpenAPI 文件和 `docs.json` 中的业务域分组。Astro 构建期间，`starlight-openapi` 根据规范生成接口参考页。

如需让每次提交自动同步 API，可在每个 clone 中启用仓库 hook：

```bash
git config core.hooksPath .githooks
```

## 主题来源

本站没有直接采用 Cloudflare 品牌视觉。可复用的 Astro/Starlight 架构与交互模式参考 [cloudflare/cloudflare-docs](https://github.com/cloudflare/cloudflare-docs) 中的 Nimbus 主题；其代码采用 MIT License。Whale 的颜色、Logo、排版密度、导航名称及内容呈现均由本仓库独立维护，详见 [NOTICE.md](./NOTICE.md)。

根目录的 `style.css` 与 `custom.js` 是旧 Mintlify 运行时遗留文件，不会被 Astro 加载。其中 `custom.js` 依赖 Mintlify 私有请求代理，无法在静态 Astro 站点安全复用；API 交互改由 `starlight-openapi` 提供。生成脚本仍维护该遗留文件，便于旧站回溯，但新功能不得依赖它。

内部设计稿、信息架构草案与决策记录放在被忽略的 `docs/internal/`，不得加入公开导航或提交到 Git。

旧站：<https://apidocs.longportwhale.com/whaleapi/>
