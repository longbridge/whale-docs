---
name: whale-api-import
description: |
  Regenerate this Mintlify site (openapi.{en,cn,zh-hant}.json + docs.json navigation) from the whale-openapi-docs source repo's generated OpenAPI YAMLs. Use when the user adds/updates/removes interfaces in whale-openapi-docs and wants those changes reflected here, or asks to "同步 API"/"重新生成接口文档"/"import interfaces"/"convert whale-openapi-docs" — anything that means "pull the latest interface definitions into whale-apidocs".
---

# whale-api-import — 从 whale-openapi-docs 同步接口到 whale-apidocs（管线 v2）

本项目是 Whale Docs 门户站（Mintlify），Broker API 参考由隔壁仓库 `whale-openapi-docs` 生成。

**权威源（v2 起）**：源仓库业务目录里的 **OpenAPI YAML 文件**（每个接口一个 `.yaml`，由源仓库的 `whale-openapi-spec-gen` skill 生成）。老的 `.ts` / `.json` 文件仍在源仓库里，但**本管线不再读它们** —— 它们缺多语言字段。

## YAML 源结构（每个文件是一份完整 OpenAPI 3.1 文档）

```yaml
paths:
  /v1/datasets/broker_teams:
    post:
      operationId: broker_teams
      summary: To B 经纪人组列表            # 简体（基准语言）
      x-summary-hk: To B 經紀人組列表       # 繁体
      x-summary-en: To-B Broker Group List  # 英文
      x-menu-path:                          # 业务分组（导航层级，1-4 层）
        - 经纪人管理(Broker Management)
        - 团队与经纪人(Team & Broker)
      description: ...
      x-description-hk: ...
      x-description-en: ...
      requestBody: ...                       # 字段带 x-name-{cn,hk,en}
      # 枚举字段同时带 enum 数组 + x-enum-details（每个值的三语标签）
```

关键点：
- **三语通过 `x-*` 扩展字段承载**：`x-summary-{hk,en}`、`x-description-{hk,en}`、字段级 `x-name-{cn,hk,en}`、`x-enum-details[].{cn,hk,en}`。简体是基准（无后缀字段）。
- **`enum` 数组一定伴随 `x-enum-details`** —— Playground 靠 `enum` 渲染下拉选择框，靠 description 里的 Options 文案展示每个值的含义。转换时两个都要保留/融合。
- **数据集契约**：`POST /v1/datasets/<name>`，body 是 `{filters, page, page_size, orderBy}`（注意是 `filters` 不是旧版的 `body`）。每个数据集配套 `POST /v1/datasets/<name>/download` 导出接口。
- **鉴权**：`bearerAuth`（http bearer）→ `Authorization: Bearer <ACCESS_TOKEN>`。每个 op 还带 `account-channel` / `x-module` 两个必填 header 参数（Playground 会显示；鉴权指南页暂未提及，属已知待定项）。
- **响应包**：`{code, message, data}`，HTTP 恒 200，`code` 非 0 是业务错误。

## 转换产物

| 产物 | 说明 |
|---|---|
| `openapi.{en,cn,zh-hant}.json` | 三份单语言 spec：`localize()` 把 `x-*` 字段按语言解析进 `summary`/`description` 后**全部剥离**。枚举标签、字段名标签拼进 description |
| `docs.json` Broker API tab | 分组来自 `x-menu-path`（嵌套 1-4 层，标题按 `中文(English)` 括号格式拆语言；顶层名走 `menu.json`+`TOP_DIR_TO_MENU_KEY`），叶子是 `"METHOD /path"` 原生条目 |
| ~~MDX~~ | **v2 不再生成任何 MDX**。数据集就是普通 OpenAPI operation。`{lang}/api-reference/data-porter/` 已删除，脚本会清理残留 |

**手工组保护**：`BROKER_API_MANUAL_GROUPS`（convert.py 内）定义 Broker API tab 里手工维护的 Overview / Get Started / Operations 组，重跑时自动前后拼接，不会被覆盖。

## 工作流

**默认源路径**：`../whale-openapi-docs`（`--source` 覆盖）。依赖 `pyyaml`。

1. **确认源仓库最新**
   ```bash
   (cd ../whale-openapi-docs && git status && git pull)
   ```
2. **dry-run 看计数**
   ```bash
   python3 scripts/convert.py --dry-run
   ```
   预期输出类似：`{"ops": 1387, "datasets": 467, "downloads": 336, "rest": 584, "dupes": 17}`（随源仓库演进浮动，量级对即可）。`dupes` = 同 `path+method` 被多个 YAML 定义（同文件复制到兄弟目录等），first-win。
3. **实跑**
   ```bash
   python3 scripts/convert.py
   ```
4. **本地预览**
   ```bash
   mint dev --port 3999 > /tmp/mint.log 2>&1 &
   # 等 "preview ready"；grep -iE "invalid|not expected" /tmp/mint.log 应无输出
   ```
5. **手写页一致性检查**（重要）
   ```bash
   rg "旧数据集名 | 已删路径" en/ cn/ zh-hant/ --glob '!api-reference/**'
   ```
   quickstart / authentication / changelog / trading-api 里有请求示例引用具体数据集（当前统一用 `account_cash_balances`，核心稳定数据集）。源里删除/改名数据集后要同步。
6. **提交**
   ```bash
   git add openapi.*.json docs.json
   git commit -m "chore: regenerate Broker API from whale-openapi-docs"
   ```

## convert.py 设计要点

- **语言映射**：`LANGS = [("en","en","en"), ("cn","cn",None), ("zh-Hant","zh-hant","hk")]` —— 第三个元素是 `x-*` 后缀，`None` 表示用基准字段（简体）。
- **`localize(node, sfx, lang_key)`**：深度遍历，`x-description-<sfx>` 优先于 `description`；`x-name-<sfx>` 作为标签前置拼进 description；`x-enum-details` 渲染成 "Options: `v` = label; …" 追加；其余 `x-*` 键全部丢弃。注意 YAML 里存在**非字符串 key**（未加引号的数字/布尔），判断前要 `str(k)`。
- **JSON 序列化用 `default=str`**：YAML 会把裸日期（`2026-01-01`）解析成 `datetime.date`。
- **`walk_yaml_ops`**：只走 `中文(English)` 括号命名的业务目录，跳过 `.git/.claude/whale-openapi/scripts/data/templates/docs`。
- **spec 顶层**：`openapi: 3.1.1`；servers Test 在前（Playground 默认测试环境）；security 只有 `bearerAuth`。
- op 级的 `security` / `servers` 被剥掉（全局的够用）。

## 常见修复模式

| 现象 | 处理 |
|---|---|
| `mint dev` 报 openapi invalid | 源 YAML 有非法结构。定位报错 path，回源仓库修 YAML（或在 convert.py 过滤） |
| 新增业务模块后 docs.json 分组标题/图标不对 | `TOP_DIR_TO_MENU_KEY` + `MODULE_ICONS` 补一行；源 `menu.json` 没有对应 key 时回退目录名 |
| 英文页出现中文 | 该字段源 YAML 缺 `x-*-en`。回源仓库补翻译（`data/i18n/en.json` 翻译记忆），不要在本仓库硬编码 |
| 枚举字段 Playground 显示成 input 而不是下拉 | 源 YAML 该字段缺 `enum` 数组（只有 `x-enum-details` 不够）。回源补 `enum` |
| 源删除/改名数据集，手写页示例失效 | 见工作流第 5 步；示例统一用 `account_cash_balances` |
| `mint dev` 报 `ENOTEMPTY ... ~/.mintlify/...` | CLI 缓存冲突：`rm -rf ~/.mintlify/mint/apps/client/src/_props/` 重跑 |

## 手工维护 vs 脚本重跑

**能靠脚本生成的一律靠脚本生成**；要给某接口补充说明，改源仓库 YAML（summary/description），保持"权威源→展示站"单向流动。**不要**手改 `openapi.*.json` 或 docs.json 里 Broker API tab 的生成分组 —— 下次重跑会覆盖。Broker API tab 里手工内容只放 `BROKER_API_MANUAL_GROUPS` 声明的组。

## 历史（v1，已废弃，避免走回头路）

v1 管线读源仓库的 `.ts`（data_porter 模板）/ `.json`（REST 描述），生成 openapi + 每数据集一个 MDX 页。演进过程中踩过的坑：
- 老 data_porter 契约 `POST /data_porter/query` + body 里 `template_id` → 曾用合成路径 + enum 锁定 workaround → 后来 `/v1/datasets/<name>` 把名字提进 URL，workaround 废弃
- Mintlify frontmatter `api:` 页面不吃 `<ParamField default/hidden>`，锁定字段必须走 openapi schema
- `.ts` 的 `nameMulti` 基本为 null → 英文站中文标题 → 这是催生 v2 的直接原因
- 鉴权从 4 头（X-Api-Key/Authorization/X-Timestamp/X-Api-Signature HMAC 签名）简化为单 Authorization，再演进为 Bearer
