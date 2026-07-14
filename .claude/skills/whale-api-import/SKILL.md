---
name: whale-api-import
description: |
  Regenerate this Mintlify site (openapi.{en,cn,zh-hant}.json + data-porter MDX + docs.json navigation) from the whale-openapi-docs source repo. Use when the user adds/updates/removes interfaces in whale-openapi-docs and wants those changes reflected here, or asks to "同步 API"/"重新生成接口文档"/"import interfaces"/"convert whale-openapi-docs" — anything that means "pull the latest interface definitions into whale-apidocs".
---

# whale-api-import — 从 whale-openapi-docs 同步接口到 whale-apidocs

本项目是给 SaaS 租户看的 Whale API 门户站（Mintlify）。接口的**权威源**是隔壁仓库 `whale-openapi-docs`：里面每个业务领域一个 Chinese-named 目录，接口以两种文件形式描述。

**接口 Base URL**：生产 `https://b-api.lbkrs.com`；测试 `https://b-api.longbridge.xyz`。（**不是** `openapi.longbridge.com`，那是历史遗留的错误 URL，已从项目里清除。改脚本请统一用 `b-api.lbkrs.com` 作为 primary。）

| 源文件 | 含义 | 目标产物 |
|---|---|---|
| `<biz>/.../*.json` | 常规 REST 接口 —— `path` / `method` / `name_cn` / `name_en` / `summary` / `request.params` / `response.schema` | `openapi.{en,cn,zh-hant}.json` 中的一条 operation |
| `<biz>/.../*.ts` | `data_porter` 模板 —— **物理端点固定为 `POST /data_porter/query`**，不同 `template_id` 对应不同业务查询。带 `templateId` / `schemas`(过滤字段) / `heads`(响应列) | **两份产物**：1) openapi.{lang}.json 里合成路径 `/data_porter/query/<tid>` 的一条 operation；2) `{lang}/api-reference/data-porter/<slug>.mdx` 单页，用 `openapi:` frontmatter 引用上一条 operation |

### 环境切换（Production / Test）

**REST 接口**：openapi.{lang}.json 顶层 `servers` 数组 —— 顺序是 **Test 在前、Production 在后**（Mintlify Playground 默认选中第一个 server，Test-first 是我们刻意选的默认，避免用户点 Try 直接打到生产）。测试域名 `https://b-api.longbridge.xyz`、生产域名 `https://b-api.lbkrs.com`。Playground 顶部有 base URL 下拉可以随时切。

**data_porter 接口**：每个 template 对应的 OpenAPI operation 各自带 `servers` 数组（**同样 Test 在前**），所以哪怕关闭全局 `servers`，环境切换与默认值也照常工作。

顶层的 `docs.json` 里也留了一个 `api.mdx.server` 数组作为 frontmatter-only MDX 的兜底 —— 目前所有 API 页都走 openapi，这个字段暂时未生效，但保留以备将来新增 frontmatter-only 页时用。

需要加 UAT / 灰度等新环境：改 `scripts/convert.py` 里 `build_openapi_shell` 的 `servers` 列表 + `template_to_openapi_operation` 的 `servers` 列表 + `docs.json` 的 `api.mdx.server` 列表（三处保持一致）。

### data_porter / datasets 调用契约（重要）

新版接口，每个数据集有独立的 URL path：

```
POST https://b-api.longbridge.xyz/v1/datasets/<name>       # 测试
POST https://b-api.lbkrs.com/v1/datasets/<name>            # 生产
Content-Type: application/json

{
  "body": { /* 过滤字段，键来自 template 的 schemas[].key */ },
  "page": 1,          # 数字
  "page_size": 20     # 数字
}
```

- `<name>` 是**新数据集名**（不是老的 `template_id`）。二者的映射在 `templates/template_map.json`：
  ```json
  { "name": "fd_organizations", "versions": [{"template_id": "organizations", "default": true}] }
  ```
  转换脚本 `load_template_id_to_name()` 读这个文件构造 `old_template_id -> new_name` 反向索引；老的 `tool_name_template_id.json` 是 fallback。
- **`template_id` 不再放请求 body 里**。旧版是 `POST /data_porter/query` + body 里 `template_id`，已废弃。
- `body` 内的过滤字段（`schemas[]` 展开）都是可选，`force: true` 的字段必填。
- `page` / `page_size` 是**数字**（老版本是字符串）。
- 响应 `items[]` 每行字段来自 `heads[]`：`dataIndex` = 字段名，`titleMulti` = 列标题。
- 每个 template 在 openapi.{lang}.json 里注册成 `POST /v1/datasets/<new_name>`（每个 dataset 一条 operation，路径互不重复）。MDX frontmatter 用 `openapi: post /v1/datasets/<new_name>` 引用。
- 若源仓库新增了 template，`templates/template_map.json` 必须同步更新，否则脚本会 fallback 到 `template_id` 作为 name，路径会长得很怪。

## 何时用这个 skill

- 用户说：同步 API / 重新生成 / 加了几个新接口 / import / regenerate / 转换 whale-openapi-docs
- 用户改动了 `whale-openapi-docs` 里的 `.ts` / `.json` / `template_map.md` / `tool_name_template_id.json` / `menu.json`，希望在 apidocs 站上看到
- 首次拉起项目、需要把源仓库完整转换成 Mintlify 结构

## 工作流

**默认源路径**：`../whale-openapi-docs`（可用 `--source` 覆盖）。转换脚本已经在 `scripts/convert.py`。

1. **确认源仓库最新**
   ```bash
   (cd ../whale-openapi-docs && git status && git pull)
   ```
2. **可选：dry-run 看看要生成多少东西**
   ```bash
   python3 scripts/convert.py --dry-run
   ```
   预期输出类似：`{"rest": 590, "porter": 358, "dupes": 11, "porter_dupes": 3}`。`dupes` = 同 `path+method` 被两个业务文件重复描述；`porter_dupes` = 同 `template_id` 被多个 `.ts` 引用（3 个已知复用 template，是正常的）。
3. **实跑**
   ```bash
   python3 scripts/convert.py
   ```
   脚本会**幂等**地重写这些文件：
   - `openapi.en.json` / `openapi.cn.json` / `openapi.zh-hant.json`
   - `en/api-reference/data-porter/*.mdx`、`cn/…`、`zh-hant/…`（旧的 mdx 会被清掉再写，防止残留）
   - `docs.json` 里三种语言的 "API Reference" tab（分组按业务领域）
4. **本地预览**
   ```bash
   mint dev --port 3999 > /tmp/mint.log 2>&1 &
   sleep 15
   grep -Ei "error|erro" /tmp/mint.log
   kill %1
   ```
   没输出就 OK；有 openapi 校验错误一定要修完再提交。
5. **提交**
   ```bash
   git add openapi.*.json docs.json en/api-reference cn/api-reference zh-hant/api-reference
   git commit -m "chore: regenerate API from whale-openapi-docs"
   ```

## 转换脚本设计要点（`scripts/convert.py`）

### 语言与文件对应
| 语言 key（docs.json） | 目录 | openapi 文件 | 源里取名字段 |
|---|---|---|---|
| `en` | `en/` | `openapi.en.json` | `name_en` |
| `cn` | `cn/` | `openapi.cn.json` | `name_cn` |
| `zh-Hant` | `zh-hant/` | `openapi.zh-hant.json` | `name_cn`（源里没有繁体，用简体兜底）|

### 目录树 → 嵌套业务分组
- **顶层目录**名形如 `款项管理(Cash Management)`，脚本解析为 `(cn, en)`。三语标题从 `menu.json` 取（键映射在 `TOP_DIR_TO_MENU_KEY`）；图标（Lucide）预定义在 `MODULE_ICONS`。新增业务模块时需要在这两个字典里补一行。
- **子目录**同样形如 `出金规则(Withdrawal Rules)`，脚本按同一 `parse_top_dir` 规则拆出中/英名，直接作为下一级 group 标题（不再查 `menu.json`；源里也没有对应键）。
- **嵌套深度**跟源仓库一致，最深 3 层（顶层模块 + 2 层子目录）。同一目录下：先是直接文件（渲染为叶子 `pages` 字符串），再是子目录（渲染为 `{group, pages}` 对象），顺序按源里文件系统排序（`sort()` 后的稳定序）。
- Mintlify 的嵌套 group 支持形如：
  ```json
  {
    "group": "Cash Management",
    "openapi": { "source": "openapi.en.json", "directory": "en/api-reference" },
    "pages": [
      { "group": "App Config", "pages": [
        { "group": "Deposit Parameter", "pages": ["POST /...", "en/api-reference/data-porter/..."] }
      ]}
    ]
  }
  ```
  外层 group 的 `openapi.source` 会被内嵌 group 里的 `"METHOD /path"` 页面共享（不用每层重复声明）。

### `.json` REST → OpenAPI operation
- `GET`：所有 `request.params` 放 query。
- `POST/PUT/DELETE/PATCH`：`request.params` 里同名不在 `path` 里的键，进 `requestBody.application/json.schema`；`path` 里的 `{id}` 类占位符，进 `parameters` 且 `in: path`。
- `request.example` 存在 → 作为 `requestBody.content.application/json.example`。
- `response.schema` 的每一项是一个字段描述（`type` / `name_cn` / `name_en` / `description` / `enum` / `items`），递归转成 OpenAPI schema。
- 每个 operation 只带一个 `tag`（顶层目录英文名）。
- `method: "N/A"` / path 不以 `/` 开头 / 无 path 的记录跳过（源里存在少数说明性 json）。

### `.ts` data_porter → OpenAPI operation + MDX
- TS 文件形态是"顶部 `//` 注释 + JSON 对象字面量"，脚本剥离注释即可 `json.loads`。
- **URL path 用的是新数据集名**（`templates/template_map.json` 里的 `name`），MDX 文件名 slug = 同一个 name，`_` 转 `-`。例：`templateId=organizations` → `name=fd_organizations` → path `/v1/datasets/fd_organizations`，MDX 文件名 `fd-organizations.mdx`。

**operation 结构**（`template_to_openapi_operation` in convert.py）
```json
"/v1/datasets/fd_organizations": {
  "post": {
    "tags": ["FD/B2B"],
    "summary": "券商组织列表",
    "description": "Query the `券商组织列表` dataset. Dataset name (in the URL path) is `fd_organizations`.",
    "servers": [{...Test}, {...Production}],
    "requestBody": {
      "content": {"application/json": {"schema": {
        "type": "object",
        "properties": {
          "body":      { "type": "object", "properties": <schemas[] → filter fields> },
          "page":      { "type": "integer", "default": 1 },
          "page_size": { "type": "integer", "default": 20 }
        }
      }}}
    },
    "responses": { "200": { ... items[] from heads[] ... }}
  }
}
```

**MDX frontmatter**
```yaml
title: <nameMulti[lang] 或 name 或 templateId>
description: dataset: <new_name>
openapi: post /v1/datasets/<new_name>
```
MDX 正文只保留 intro + JSON 请求示例。字段 / 响应结构完全由 openapi 生成。

**docs.json nav**：引用 MDX 路径 `en/api-reference/data-porter/<slug>`（不是 `"post /v1/datasets/<name>"`），导航侧栏走业务分组，Playground 走 openapi。

**历史设计说明（避免走回头路）**：
- 老版接口是 `POST /data_porter/query` + body 里 `template_id`。为了在 Playground 里锁定 `template_id`，脚本曾用合成路径 `/data_porter/query/<template_id>` + `enum: [<tid>]` + `default: <tid>` 的 workaround。
- 新版把 dataset name 提到 URL path 里了 (`/v1/datasets/<name>`)，天然唯一，body 里也不再需要 `template_id` 字段 —— 上面那套合成 + enum 锁定的做法已经完全废弃。
- Mintlify 的 frontmatter `api:` playground 依然不吃 `<ParamField default/hidden>`，但现在我们全都走 openapi 引用，不受影响。

### 去重规则
- REST 同 `(path, method)` 只取第一个（`dupes` 计数）。
- data_porter 同 `templateId` 只取第一个（`porter_dupes` 计数）。
- 存量 MDX 不在本次生成集合里 → 删除（避免旧文件残留)。

## 常见修复模式

| 现象 | 处理 |
|---|---|
| `mint dev` 报 `Openapi file … is invalid` 或 `Property XXX is not expected to be here` | 说明源里有非法 path/method。搜 `whale-openapi-docs` 里对应 path，或者放宽 `scripts/convert.py` 的过滤条件 |
| `docs.json` 的 pages 里出现文件不存在 | data-porter slug 对不上 —— 检查 `tool_name_template_id.json` 是否更新了 |
| 新增了业务领域，`docs.json` 缺分组 | 在 `TOP_DIR_TO_MENU_KEY` 加映射，并（可选）在 `MODULE_ICONS` 配图标；若源里 `menu.json` 没有对应 `key`，会退回目录名 |
| `mint dev` 报 `ENOTEMPTY: directory not empty ... /Users/*/.mintlify/mint/...` | Mintlify CLI 内部 cache 冲突，跟当前项目内容无关。`rm -rf ~/.mintlify/mint/apps/client/src/_props/` 后重跑 |
| MDX 里英文页显示中文标题 | 源 `.ts` 的 `nameMulti` 只有中文；这是源的缺陷，无法在脚本里凭空造英文；若客户要求可以在源仓库补 `nameMulti.en` |
| 只想更新某几个接口 | 目前脚本是"整体重跑"。要选择性更新，把 `walk_source` 加一个 include glob 或直接手改产物。整体重跑是幂等的，通常不需要选择性更新 |

## 手工维护 vs 脚本重跑

**能靠脚本生成的一律靠脚本生成**。如果你要手工维护某个接口页（比如加请求示例、加校验步骤说明），有两种做法：

1. **首选**：把补充信息回写到 `whale-openapi-docs` 源文件里（`.json` 的 `summary` / `.ts` 里加富字段），保持"权威源→展示站"单向流动。
2. **次选**：在 `docs.json` 里替换成一个手写 MDX 路径（如 `en/api-reference/data-porter/<slug>-custom.mdx`）——用不同的 slug 才不会被下一次 `convert.py` 覆盖。

**不要**在生成出来的 mdx / openapi.json 上直接手改：下一次 `python3 scripts/convert.py` 会覆盖掉。

## 输入源里已知的对应关系

- 顶层目录 → menu.json module key：`TOP_DIR_TO_MENU_KEY`（`scripts/convert.py` 头部）。菜单里没有对应 key 的 "Shared Components" 会走 fallback，但依然会出现在 docs.json 里。
- 358 个 `.ts` template_id → 727+80 = 807 条 name 映射；有 3 个 template_id 被多个页面共用（保留一份）。
