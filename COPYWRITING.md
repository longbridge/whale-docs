# Whale Docs 文档撰写规范 {/* whale-docs-copywriting-guide */}

本文件是 AI 与人工作者编写、改写和审阅 Whale Docs 的统一指引。它以本仓库现有文档、OpenAPI 结构和组件能力为基础，并吸收 Cloudflare Docs 的内容策略与格式原则。仓库自身规则与真实产品事实始终优先于外部参考。

Cloudflare 参考基于官方 `cloudflare/cloudflare-docs` 仓库的固定快照 `7aab48be1a0accec2f792739d3e7a9f2ccf596bc`，研究日期为 2026-07-24。固定 commit 可以避免上游持续变化导致本规范的依据不可复现。

适用范围：

- `docs/en/`、`docs/zh-CN/`、`docs/zh-HK/` 下的 Markdown 和 MDX。
- `openapi.en.json`、`openapi.zh-CN.json`、`openapi.zh-HK.json` 和 TradingAPI OpenAPI 中面向读者的文案。
- `docs.json` 中的页签、分组和页面导航名称。
- 由 AI 新写、翻译、补全、重组或审阅的公开文档。

## 1. 写作目标与优先级 {/* goals-and-priorities */}

文档首先帮助读者完成任务、理解边界和排除问题。不要以展示产品、堆积功能或复述代码为目标。

按以下顺序处理冲突：

1. 已验证的产品行为、接口契约、安全要求和项目约定。
2. 本仓库的 `AGENTS.md`、构建约束、组件接口和导航结构。
3. 本文件的 Whale Docs 规范。
4. Cloudflare Docs 的通用内容策略和格式经验。
5. 现有页面中的局部写法。

现有内容是重要样本，但不是所有旧写法都值得延续。发现重复标题、不稳定 URL、含糊描述、无依据数值或三语不一致时，应按本规范修正，而不是复制。

## 2. AI 写作的事实边界 {/* factual-boundaries-for-ai */}

AI 必须区分“已验证事实”“合理建议”和“待确认信息”。

### 2.1 权威来源顺序 {/* source-of-truth-order */}

使用以下来源，并优先采用靠前的来源：

1. 当前项目的源代码、公开接口、类型定义、测试和正式产品要求。
2. 上游 OpenAPI 或 SDK 源仓库中的定义。
3. 本仓库生成的 OpenAPI 文件和已发布文档。
4. 经项目负责人确认的需求、设计记录和交付材料。
5. 官方第三方文档，例如 Apple、Android、云服务商的官方文档。

不要用搜索摘要、博客、论坛、旧截图或 AI 记忆覆盖一手来源。若来源互相冲突，在正文中采用可验证的当前行为，并在交付说明中指出冲突。

### 2.2 禁止猜测 {/* do-not-guess */}

没有依据时，不得编造：

- API 路径、字段、枚举、默认值、必填性、错误码或响应示例。
- SDK 方法名、参数、返回类型、最低系统版本或依赖版本。
- SLA、性能、延迟、容量、限流、费用、发布日期或兼容承诺。
- 测试和生产域名、凭证获取方式、安全流程或责任归属。
- 尚未实现的功能、自动重试、幂等性或最终一致性行为。

无法确认但必须保留的内容，应明确写成待确认项，例如“此限制尚待项目团队确认”。不要用流畅措辞掩盖证据缺口。公开页面不应长期保留没有负责人和确认路径的 `TODO`。

### 2.3 时间敏感信息 {/* time-sensitive-information */}

版本号、历史性能、兼容矩阵和统计数据必须同时说明：

- 数据对应的版本或时间范围。
- 测试环境或适用条件。
- 它是示例、历史样本、目标还是承诺。
- 读者从哪里获得当前值。

除非合同或正式产品政策明确如此，不要把历史样本写成 SLA。

### 2.4 安全与隐私 {/* security-and-privacy */}

示例必须使用虚构值或清晰的变量，不得出现真实 token、密钥、Cookie、手机号、邮箱、证件号、账号或客户数据。日志示例应展示脱敏方式。涉及写操作、资金、交易、权限、身份和生产切换时，必须说明关键前置条件、影响范围、失败处理和验证方式。

## 3. 先选择内容类型 {/* choose-a-content-type-first */}

一个页面应有一个主要目的。不要把概念解释、端到端教程、字段字典和故障排查无边界地堆在同一页。

| 内容类型                 | 回答的问题                             | 推荐标题                                | 必需内容                                         |
| ------------------------ | -------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| Overview                 | 这是什么，适合谁，下一步去哪？         | 产品名或简短名词                        | 一句话价值、边界、主要能力、读者入口、下一步     |
| Get started / Quickstart | 如何尽快完成第一个成功结果？           | “快速开始”或目标短语                    | 前置条件、最短步骤、可运行示例、成功验证、下一步 |
| How-to                   | 如何完成一个明确任务？                 | 动词短语                                | 前置条件、编号步骤、每步结果、最终验证           |
| Concept                  | 为什么这样设计，各对象如何关联？       | 简短名词短语                            | 背景、对象或机制、边界、关系、相关任务链接       |
| Reference                | 某项设置、字段或行为的准确规则是什么？ | 名词短语                                | 适用范围、结构化定义、限制、示例、关联内容       |
| API reference            | 如何调用一个操作？                     | 简短动作；由 OpenAPI 生成时遵循生成规则 | 用途、鉴权、输入、输出、错误、示例、限制         |
| Troubleshooting / FAQ    | 出现某个症状时如何判断与处理？         | 症状或用户问题                          | 症状、原因、诊断、解决、验证、升级信息           |
| Implementation guide     | 如何跨阶段交付并上线？                 | 目标或阶段名                            | 角色、依赖、阶段、交付物、完成条件、回滚或支持   |

Cloudflare 的内容策略强调 Overview 与 Get started 是产品入口，其他内容按用户旅程按需增加。Whale Docs 应采用“了解 → 选择方案 → 接入 → 验证 → 上线 → 运维”的导航顺序，而不是按内部团队或代码模块组织。

### 3.1 页面范围 {/* page-scope */}

满足任一条件时考虑拆页：

- 页面同时服务明显不同的读者角色。
- 一个独立任务可从导航或其他页面直接进入。
- 大量参考表或代码阻断了主任务。
- 不同平台只有少量共同内容，且各自流程很长。
- 页面标题无法准确概括全部内容。

拆页后必须补上上下文和双向链接，不要让读者依赖浏览器返回键猜测路径。

## 4. 语气、称谓与句子 {/* voice-terms-and-sentences */}

### 4.1 基本语气 {/* base-voice */}

采用专业、直接、平静、可信的语气：

- 先写读者要达成的目标，再写动作。
- 使用主动语态和现在时。
- 一句话表达一个主要意思。
- 先解释为什么，再逐步引入复杂做法。
- 直接给出主要答案；不要把关键步骤只放在折叠区、卡片或提示框中。
- 说明限制和风险，但不要使用营销式夸张或无依据保证。

避免“非常简单”“显然”“只需”“轻松”“强大”“革命性”“无缝”等空泛或可能贬低读者体验的词。不要把“支持”“自动”“实时”“安全”等词当作无需定义的承诺。

### 4.2 读者与参与方 {/* audience-and-participants */}

操作指令直接称“你”。描述职责边界时使用仓库既有术语：

- `Broker`：接入 Whale 的券商机构。
- `Broker App`：Broker 面向 Customer 的客户端。
- `Broker Server`：Broker 控制的服务端。
- `Customer`：Broker 的终端客户。
- `Whale`：Longport Whale 产品或系统一方。

不要在同一语境中随意交换“用户”“客户”“会员”“账户”。`open_id`、`member_id`、`application_id` 和 `account_no` 代表不同对象，必须准确区分。

### 4.3 中英文与本地化 {/* language-and-localization */}

- 英文使用简明技术英语；避免俚语、文化梗、缩写式口语和 contraction。
- 简体中文使用中国大陆常见技术用语。
- 繁体中文使用香港读者自然使用的繁体表达；不要仅做字符转换。
- 产品名、类名、方法名、字段名、HTTP 方法和协议名不翻译。
- 首次出现的不熟悉缩写应写出全称或立即解释。
- 三种语言表达相同事实、限制、步骤顺序和安全警告，但不要求逐字直译。

统一术语应维护在对应语言的 glossary 中。新术语若影响多页或多语言，先确定译法再扩写内容。

### 4.4 UI 文案与操作 {/* user-interface-actions */}

- 按钮、菜单项、页签和可交互 UI 标签使用粗体，例如“选择 **Settings** > **API tokens**”。
- 使用与界面完全一致的标签和大小写。
- 英文操作优先使用 `select`，不要默认所有界面都通过鼠标 `click`。
- 不使用“上方”“下方”“右侧”等依赖版面的位置描述；直接点名区域或控件。
- 开关动作应明确写“开启”或“关闭”，不要只写“切换”。
- 工具、命令、文件路径和配置键使用行内代码，不用粗体代替代码格式。

### 4.5 中文文案基本要求 {/* chinese-copy-basics */}

中文页面、软件界面和帮助内容采用严肃、克制、精炼的文风。发布前必须检查错别字、漏字、重复字、术语和标点。

- 不使用“墙裂”“童鞋”等谐音错别字或时效很短的网络流行语。
- 删除不影响含义的字、词和句，在不损失准确性的前提下缩短文案。
- 幽默、双关和文化梗可能难以理解或翻译，技术文档中不使用。
- 不滥用大字号、颜色、背景色、斜体和下划线。优先通过段落、标题、列表、表格和少量加粗建立层级。
- 尽可能正确使用“的”“地”“得”。
- 不因追求简短而省略关键条件、风险、单位或执行结果。

### 4.6 中文、英文和数字混排 {/* chinese-english-number-spacing */}

中文与英文、数字之间通常留一个半角空格：

```diff
+ 系统支持 iOS 和 Android 平台。
- 系统支持iOS和Android平台。
+ 请求将在 2 秒后超时。
- 请求将在2秒后超时。
```

以下情况不加空格：

- 中文标点与相邻字符之间。
- 数字与 `%`、`°C` 之间。
- 数字与约定为紧邻写法的倍数符号之间，例如 `2x`。
- 已经由代码格式、链接边界或产品官方拼写明确处理的内容。

数字与普通单位、货币代码之间留一个空格：

```diff
+ 文件大小上限为 500 MB。
- 文件大小上限为 500MB。
+ 示例金额为 1,000 USD。
- 示例金额为 1,000USD。
+ 成功率为 99.9%。
- 成功率为 99.9 %。
```

叙述性中文在不影响精度和扫描效率时可使用中文数词，例如“包含三个阶段”。接口值、版本号、日期、时间、金额、百分比、计量值、步骤编号和统计数据使用阿拉伯数字。

### 4.7 专有名词与大小写 {/* proper-nouns-and-capitalization */}

品牌、平台、协议和产品名称遵循其官方拼写，不因句首、标题或中文语境改变大小写。例如：`Android`、`iOS`、`iPhone`、`Google`、`Apple`、`GitHub`、`OpenAPI`、`HTTP`、`IPO`、`ETF`。

不确定拼写时，应查阅该名称所有者的官方来源。不要凭习惯把 `GitHub` 写成 `Github`，也不要随意把官方英文名称翻译成非官方中文名称。代码标识符则严格沿用源码和接口定义。

### 4.8 中文标点 {/* chinese-punctuation */}

中文句子以及以中文为主的中英文混排句子使用中文全角标点，包括 `，`、`。`、`：`、`；`、`！` 和 `？`。完整英文句子使用英文半角标点。

```diff
+ 请求失败时，请检查状态码：`401` 表示凭证无效。
- 请求失败时,请检查状态码: `401` 表示凭证无效.
```

中文标点与前后字符之间不留空格。尽量避免感叹号，禁止连续使用多个感叹号。技术内容保持平和、中性的语气。

避免连续标点或标点与括号重复表达停顿：

```diff
+ 请求可能需要 1-2 分钟（具体时间取决于数据量）。
- 请求可能需要 1-2 分钟，（具体时间取决于数据量）。
```

### 4.9 括号、方括号与书名号 {/* brackets-and-title-marks */}

括号内部首尾不留空格：

```diff
+ 任务完成后（通常需要 1-2 分钟）刷新页面。
- 任务完成后（ 通常需要 1-2 分钟 ）刷新页面。
```

按内容选择括号：

- 全中文补充说明优先使用全角括号 `（）`。
- 括号内容以英文、数字、代码或证券标识为主时，可使用半角括号 `()`，并在中文正文与左括号之间留一个空格。
- 界面短标签需要附加英文或数字说明时，可使用半角括号。
- 不使用视觉过重的 `【】` 表示普通标签。自然语言名称优先使用 `「」`；机器语法需要方括号时使用 `[]`。
- Markdown 链接、数组、可选参数和代码语法中的括号遵循其语法，不套用中文排版替换。

```diff
+ 当前在线 (50 人)
- 当前在线（50 人）
+ 这是一个中文（补充说明）。
- 这是一个中文 (补充说明)。
+ 「重要更新」
- 【重要更新】
```

## 5. 文件、URL 与导航 {/* files-urls-and-navigation */}

### 5.1 稳定 slug {/* stable-slugs */}

文件名和 URL 段必须短、简单、耐久，并以长期主题命名：

- 使用 `faq`，不要使用 `technical-faq`。
- 使用 `ios`、`android`、`web`，不要使用 `ios-integration`、`android-integration`、`webtrade-integration`。
- 除非用于区分长期并存的概念，避免 `technical`、`integration`、`implementation`、`guide`、`setup` 和版本号。
- 使用小写 `kebab-case`。
- 等价页面在 `en`、`zh-CN`、`zh-HK` 中使用相同 slug。

公开 slug 是 API。修改现有 slug 时，必须同时更新三种语言的导航、站内链接和必要的重定向。

### 5.2 导航名称 {/* navigation-labels */}

导航标签应：

- 与页面标题表达同一主题。
- 优先使用读者认识的产品、任务或概念名。
- 同级保持相同语法结构。
- 避免把团队名、项目代号或内部系统名暴露为信息架构。
- 避免同一页面出现在多个位置；必要时使用链接页而不是复制内容。

OpenAPI 导航中的 `METHOD /path` 必须与规范中的真实操作完全一致。不要手写一个不存在的操作来占位。

## 6. Frontmatter {/* frontmatter */}

当前公开 MDX 页面的标准 frontmatter：

```yaml
---
title: 快速开始
description: 发起第一个经过鉴权的 BrokerAPI 请求并验证响应
---
```

规则：

- `title` 和 `description` 必填。
- `title` 简短、唯一、可扫描，不加句号，不重复产品层级中已经明确的信息。
- `description` 用一到两句自包含文字说明产品或主题，以及读者将完成或理解什么。
- 不要以“本页介绍”“了解更多”“本文档将说明”开头。
- 不要在正文再写一个 H1；页面标题由 frontmatter 渲染。
- 只有渲染或页面行为确实需要时才添加仓库 schema 支持的 `openapi`、`wide` 或 `feedback`。
- 不要照搬 Cloudflare 专用的 `pcx_content_type`、`products`、`weight` 等字段；本仓库 schema 未采用它们。

三种语言页面的标题和描述应本地化，并保持相同的信息范围。

## 7. 页面开头与信息顺序 {/* page-opening-and-information-order */}

frontmatter 后直接写一个简短导语，回答：

1. 这页解决什么问题？
2. 对谁适用？
3. 完成后会得到什么？

如读者必须先获得凭证、权限、环境、依赖或基础知识，在第一个任务步骤前增加“开始前”或“前置条件”。不要把关键前置条件埋在步骤中间。

任务型页面推荐顺序：

1. 导语。
2. 开始前。
3. 完成任务的步骤。
4. 验证结果。
5. 错误或边界处理。
6. 下一步。

概念型页面推荐顺序：

1. 背景和价值。
2. 核心对象或术语。
3. 关系、流程或状态。
4. 边界和例外。
5. 进入具体任务的链接。

参考型页面推荐顺序：

1. 适用范围和使用场景。
2. 字段、选项或行为定义。
3. 限制和边界。
4. 精确示例。
5. 相关操作链接。

## 8. 标题与稳定锚点 {/* headings-and-stable-anchors */}

所有 Markdown 或 MDX 标题都必须以显式、稳定的英文锚点结尾：

```md
## 获取凭证 {/* obtain-credentials */}

### 处理过期 Token {/* handle-expired-token */}
```

规则：

- 锚点使用小写英文 `kebab-case`。
- 锚点描述长期主题，不照搬可能变化的可见标题。
- 三种语言等价标题使用相同锚点。
- 可见标题翻译或润色时，不修改已有锚点。
- 不跳级：`##` 下使用 `###`，不要直接使用 `####`。
- 优先使用短名词或动词短语，避免“其他”“更多”“说明”等无信息标题。
- 编号只用于确有顺序的任务或阶段；不要为了视觉效果给所有章节编号。

若必须修改公开锚点，需同时更新三种语言中所有入站 fragment 链接。新增或重排标题后运行：

```bash
bun run check:anchors
```

## 9. 段落、列表与步骤 {/* paragraphs-lists-and-steps */}

### 9.1 段落 {/* paragraphs */}

- 每段围绕一个主题，通常为一至三句。
- 把结论或条件放在段首。
- 不用空洞导语重复标题。
- 不用手动换行控制视觉宽度。
- 段落之间保留一个空行，不连续插入多个空行。
- 段首不使用空格或全角空格缩进。
- 并列信息超过三项时优先使用列表或表格。

### 9.2 列表 {/* lists */}

- 完整句使用句号；短标签或名词短语可不加。
- 同一列表保持相同语法结构。
- 有先后顺序或依赖关系时使用有序列表。
- 无顺序的条件、选项和特征使用无序列表。
- 不要只写一个列表项。
- 不要用列表表达需要逐列比较的数据。
- Markdown 有序列表使用 `1. `、`2. `、`3. `，序号后保留一个空格；不要手写 `1、`、`（1）` 或省略序号后的空格。
- Markdown 无序列表统一使用 `- `；不要混用 `*`、`+` 或省略标记后的空格。
- 中文列表项均为完整句时，使用句号；多个短句共同组成一个长句时，可使用分号，并在最后一项使用句号。

### 9.3 操作步骤 {/* procedures */}

每一步以明确动作开头，并尽量包含可观察结果。简单任务使用 Markdown 有序列表；步骤较长、含代码或提示时使用组件：

```mdx
<Steps>
  <Step title="设置访问令牌">将令牌保存到环境变量 `ACCESS_TOKEN`。</Step>
  <Step title="发送请求">运行下方命令，然后确认响应中的 `code` 为 `0`。</Step>
</Steps>
```

不要在同一流程中混用两套编号。不要把可选说明伪装成必做步骤。

可选步骤应在标题或句首明确标注“可选”。不要把“登录”机械地拆成独立步骤；若登录只是进入目标位置的前提，应与打开目标页面合并。步骤写完后提供验证或“下一步”，不要在执行动作后突然结束页面。

## 10. 链接 {/* links */}

链接文字必须说明目标，不能使用“点击这里”“更多”或裸 URL。

```md
参阅 [鉴权](/zh-cn/broker-api/get-started/authentication)。
```

规则：

- 站内链接使用以 locale 开头的根相对 URL。
- 链接到标题时使用显式稳定锚点。
- 三语页面链接到相同语言的目标页面。
- 不链接到不存在、未导航或仅本地可见的页面。
- 外部链接优先指向官方一手资料。
- 不在相邻句子中重复链接同一目标。
- 页面重命名、移动或改锚点时，检索并更新所有入站链接。
- 链接自然融入句子。中文正文中的链接与相邻中文通常各留一个半角空格，句末标点直接跟在链接后。
- 直接展示 URL 时使用小写域名；除非服务器规范要求，不添加无意义的 `www.`、尾部 `/` 或大小写变化。

```md
你可以阅读 [鉴权说明](/zh-cn/broker-api/get-started/authentication) 了解凭证要求。
```

## 11. 代码、命令与示例 {/* code-commands-and-examples */}

### 11.1 行内代码 {/* inline-code */}

以下内容使用反引号：

- 文件名、路径、命令、环境变量。
- 类、方法、函数、参数、字段和枚举值。
- HTTP 方法、状态码和短小的 header 示例。
- 可由读者准确输入或在界面中看到的机器值。

产品名、普通技术概念和自然语言按钮名称不要滥用代码格式。

### 11.2 代码块 {/* code-blocks */}

所有代码块标注准确的小写语言；没有对应语言时使用 `txt`：

````md
```bash
export ACCESS_TOKEN="<ACCESS_TOKEN>"
```
````

示例必须：

- 可复制，并在合理上下文中可运行。
- 只包含解释当前任务所需的代码。
- 使用与正文一致的变量名。
- 明确区分测试和生产环境。
- 展示安全的凭证注入方式，不硬编码真实秘密。
- 给出预期结果或验证方法。
- 与当前 SDK/API 签名一致。

Shell 环境变量使用全大写下划线，例如 `$ACCESS_TOKEN`。普通占位值可使用 `<ACCOUNT_NO>`；不要同时混用多种含义不清的占位格式。JSON 必须合法，除非明确标注为带注释的伪代码。

命令块中不要加入 `$`、`%` 或 `PS>` 提示符，以免复制命令时一并复制。命令输出紧跟命令，并使用单独的 `txt` 代码块。示例域名使用 `example.com` 等保留域名；示例 IP 使用文档专用地址段。MDX 正文中的 `{}` 和 `<>` 可能被解析为表达式或 JSX，应放入行内代码、代码块或正确转义。

多语言示例仅在读者确实会从中受益时提供。不同语言示例必须语义等价，不要让其中一个包含额外必需步骤。

### 11.3 输出与错误示例 {/* output-and-error-examples */}

输出示例只保留验证任务所需的字段，并说明是否经过删减。错误示例同时解释：

- 触发条件。
- HTTP 状态和业务 `code` 的关系。
- 是否可以重试。
- 重试前需要查询或修正什么。
- 何时停止并升级处理。

不要暗示所有非 `200` 响应结构相同，除非 OpenAPI 明确定义如此。

## 12. 表格、图示与图片 {/* tables-diagrams-and-images */}

### 12.1 表格 {/* tables */}

表格适合精确比较字段、责任、状态或选项。规则：

- 表格前用完整句子说明目的；紧接表格时以冒号结束。
- 表头使用短名词，并标明单位。
- 每一列都有表头，不合并单元格。
- 单元格保持简短；长流程移到正文。
- 数字列右对齐。
- 必填、默认值、限制和示例应分列，不塞进一个含糊的“说明”列。
- 不使用空表头制造布局。
- 没有值时使用 em dash `—`，不要留下含义不明的空白。
- 行按业务逻辑排序；没有业务顺序时按名称排序。
- 确认窄屏仍可理解；复杂表格应拆分。

### 12.2 Mermaid 图 {/* mermaid-diagrams */}

当关系、状态或跨系统时序比文字更清晰时使用 Mermaid。简单事实不要强行画图。

仓库支持 fenced Mermaid：

````md
```mermaid
flowchart LR
    A[Broker App] --> B[Broker Server]
    B --> C[Whale]
```
````

图中节点名称应简短，关键条件和失败分支不能省略。图后用正文解释读者需要采取的动作；图不能成为唯一事实来源。三种语言的图必须保持相同逻辑。

### 12.3 图片与截图 {/* images-and-screenshots */}

- 只有在视觉位置或结果难以用文字说明时才添加截图。
- 提供简洁、有意义的替代文字。
- 不在替代文字中重复“图片”或“截图”。
- 裁掉无关区域并遮盖个人、客户、账户和凭证信息。
- 避免依赖很快变化的 UI；能用稳定文字或代码表达时优先不用截图。
- 正文不能只靠颜色、箭头或图中小字传达关键信息。

## 13. MDX 组件 {/* mdx-components */}

本仓库已提供以下组件，无需在每个页面手动 import：

| 组件                           | 用途                               | 关键属性                        |
| ------------------------------ | ---------------------------------- | ------------------------------- |
| `Note`                         | 补充上下文或非关键说明             | 无                              |
| `Tip`                          | 能节省时间或降低出错率的建议       | 无                              |
| `Warning`                      | 数据、安全、权限、兼容或不可逆风险 | 无                              |
| `Steps` / `Step`               | 含复杂内容的顺序流程               | `Step title`                    |
| `CardGroup` / `Card`           | 入口、方案或相关内容导航           | `cols`；`title`、`href`、`icon` |
| `AccordionGroup` / `Accordion` | FAQ 或次要细节                     | `Accordion title`               |
| `Update`                       | 有日期或标签的更新记录             | `label`、可选 `tags`            |
| `Mermaid`                      | 需要框架与放大交互的图             | `chart`                         |

使用提示框时：

```mdx
<Warning>生产请求会影响真实账户。切换环境前确认域名、凭证和账户范围。</Warning>
```

规则：

- 主要答案和必做步骤留在正文，不要只放在提示框或 Accordion 中。
- `Note` 用于补充，不是承载长篇旁支。
- `Tip` 必须真的可选。
- `Warning` 应说明具体后果和避免方式。
- 不连续堆叠多个提示框。
- `Accordion` 适合独立 FAQ 或补充细节，不适合隐藏关键流程。
- `Card` 的标题和描述应能独立解释链接目标。

不要照搬 Cloudflare 仓库中的专用组件名。应先确认 Whale Docs 是否已有等效组件；没有时优先使用标准 Markdown，确需新交互再修改站点组件。

## 14. OpenAPI 文案标准 {/* openapi-copywriting */}

OpenAPI 是生成 API Reference 的契约，不是可以随意润色的普通文章。BrokerAPI 的生成文件由上游源仓库导入，不应在本仓库直接修正文案；应在源头修改并重新生成。

### 14.1 Info、server 与 tag {/* openapi-info-servers-and-tags */}

- `info.title` 使用正式产品名。
- `info.description` 用一句话说明受众、调用边界和核心用途。
- `info.version` 表示文档所描述的 API 版本，不用日期代替。
- 每个 `server` 使用准确 URL 和清楚的环境名称。
- tag 使用稳定业务域名，不使用内部服务名或团队名。
- 相同 tag 在三种语言中的范围和排序一致。

### 14.2 Operation {/* openapi-operations */}

每个 operation 应包含：

- 唯一、稳定、可读的 `operationId`。
- 简短的 `summary`，用动作加对象表达，不塞入版本和实现细节。
- `description`：用途、适用场景、关键副作用、异步语义和重要限制。
- 正确的 tag、鉴权和参数位置。
- 所有实际可能返回且对调用方有意义的响应。

不要让 `summary` 和 `description` 完全重复。不要写“This interface is used to…”之类无信息前缀；直接说明操作产生的结果。

### 14.3 参数与 schema {/* openapi-parameters-and-schemas */}

字段说明应回答以下适用项：

- 字段代表什么，而不是重复字段名。
- 是否必填；由 schema 的 `required` 表达。
- 数据格式、单位、时区、精度和大小写规则。
- 可接受的范围、长度、pattern 和默认值。
- 每个 enum 值的业务含义。
- 字段间条件，例如“当 `type` 为 `x` 时必填”。
- 生命周期和稳定性，例如是否可复用、是否可能变化。

优先用 OpenAPI 关键词表达机器约束，如 `type`、`format`、`enum`、`minimum`、`maximum`、`minLength`、`pattern`、`deprecated`；不要只把约束藏在 description 中。

避免以下低质量描述：

- `Account Number. Account Number`
- `Data`
- `Status`
- 把中文残片留在英文说明中。
- 只说“成功”但不解释返回数据或业务完成状态。

### 14.4 请求与响应 {/* openapi-requests-and-responses */}

- 指定正确的 media type。
- request body 说明整体用途，字段说明各自语义。
- 成功响应区分“请求已接受”和“业务已最终完成”。
- HTTP 状态遵循协议语义；业务 `code` 的意义另行说明。
- 错误响应说明调用方可以采取的动作。
- 分页接口定义页码或 cursor、大小限制、排序和 `has_more` 语义。
- 异步操作定义查询标识、处理中状态、最终状态和超时后的处理。
- 批量操作定义部分成功、单项错误和原子性。
- 写操作说明幂等键、重复请求或超时重试语义；未知时不要假设。

### 14.5 示例 {/* openapi-examples */}

至少提供一个代表性成功示例；重要失败或边界条件按需提供示例。示例必须通过 schema 校验，并遵守：

- 请求和响应使用同一组关联标识。
- 枚举、日期、时间戳、金额和数量格式合法。
- 不使用真实客户数据。
- 示例值能帮助理解，不全部写成 `string`、`0` 或空对象。
- 响应示例不出现 schema 未定义的字段。
- 三种语言可翻译说明文字，但机器值应保持一致。

cURL 示例还应遵守：

- 使用完整 API URL 和清楚的 shell 环境变量。
- 先写 `Authorization`，带 JSON body 时再写 `Content-Type: application/json`。
- 有 body 的 `POST` 不必重复写 `--request POST`；没有 body 时显式写出方法。
- JSON 使用双引号和 2 空格缩进；传给 `--data` 的完整 JSON 使用单引号包裹。
- 返回示例保留调用方需要理解的完整 envelope；若只截取片段，必须明确说明。

### 14.6 弃用与版本 {/* deprecation-and-versioning */}

弃用操作或字段时：

- 设置 `deprecated: true`。
- 说明替代项。
- 说明迁移差异和截止时间；未确定时间时明确写“尚未确定”，不要猜测。
- 保持旧链接在支持期内可达。
- 不通过把版本号塞进页面 slug 来替代正式版本策略。

## 15. FAQ、故障排查与运维内容 {/* faq-troubleshooting-and-operations */}

FAQ 问题使用读者会搜索的完整问句，每个回答先给结论，再给条件和操作。问题较少或答案关系紧密时直接使用标题；独立短问答较多时可使用 `AccordionGroup`。

故障排查按以下结构写：

1. 可观察的症状和错误信息。
2. 影响范围。
3. 最可能的原因，按验证成本或概率排序。
4. 每个原因的诊断步骤。
5. 修复步骤。
6. 成功验证。
7. 升级时需提供的脱敏信息。

不要把“重试”“联系支持”作为没有诊断信息的万能答案。运维页面应定义 trace ID、业务标识、时间范围、环境和复现步骤等证据，同时明确禁止提交秘密和个人数据。

## 16. 三语同步标准 {/* localization-parity */}

等价页面在三种语言中必须保持：

- 相同 slug 和目录层级。
- 相同章节数量和稳定英文锚点。
- 相同事实、步骤、代码行为、链接目标和风险提示。
- 相同 API 字段、枚举、路径和示例机器值。
- 相同导航位置。

可以因语言习惯调整句序、标点和标题长度，但不能让某种语言成为信息更少的摘要版。若产品当前仅支持一种语言，应在导航和页面中明确范围，不创建内容空洞的伪翻译。

变更一个公共事实时，应搜索所有语言和 OpenAPI 版本中的对应内容。翻译后重新验证代码和链接，因为翻译不能改变机器可读文本。

## 17. AI 标准工作流 {/* ai-writing-workflow */}

### 17.1 写作前 {/* before-writing */}

1. 读取 `AGENTS.md` 和与目标目录有关的仓库说明。
2. 确认目标读者、任务、内容类型和页面边界。
3. 找到一手事实来源，记录无法确认的内容。
4. 检索现有页面、glossary、导航、入站链接和三语对应页。
5. 检查 OpenAPI 或 SDK 签名，避免重复维护可生成的参考信息。
6. 确认是否需要新页面；能改善现有页面时不要轻易增加页面。

### 17.2 起草时 {/* while-writing */}

1. 先写页面目的和成功结果。
2. 写最短可用主路径。
3. 再补前置条件、边界、失败处理和下一步。
4. 使用稳定标题锚点和准确站内链接。
5. 只加入能减少理解或操作成本的表格、图、提示和组件。
6. 对每个数字、承诺和安全相关陈述回查来源。
7. 保持术语与三种语言对应页一致。

### 17.3 审阅时 {/* while-reviewing */}

按以下四轮审阅，避免只做表面润色：

1. **事实审阅**：API、代码、状态、责任、安全和数值是否有依据。
2. **任务审阅**：读者能否按顺序完成，并知道何时成功。
3. **结构审阅**：内容类型、标题、链接、提示和导航是否合理。
4. **语言审阅**：是否简明、一致、可翻译且无营销空话。

AI 应报告仍未确认的事实，而不是静默补全。

## 18. 页面模板 {/* page-templates */}

### 18.1 How-to 模板 {/* how-to-template */}

```mdx
---
title: 配置消息转发
description: 将 Whale 消息转发到 Broker Server 并验证处理结果
---

配置消息转发后，Broker Server 可以接收并处理 Whale 事件。

## 开始前 {/* before-you-begin */}

- 准备测试环境凭证。
- 确认回调地址可通过 HTTPS 访问。

## 配置转发 {/* configure-forwarding */}

<Steps>
  <Step title="创建接收端点">实现请求验证和幂等处理。</Step>
  <Step title="提交配置">向项目团队提供经过验证的端点信息。</Step>
</Steps>

## 验证结果 {/* verify-the-result */}

发送测试事件，确认服务返回约定的成功响应并只处理一次。

## 下一步 {/* next-steps */}

参阅 [运维与支持](/zh-cn/docs/operations-support)，配置日志和告警。
```

### 18.2 Concept 模板 {/* concept-template */}

```mdx
---
title: 会话与账户
description: Customer 会话、Whale 用户和证券账户之间的关系
---

这些对象具有不同的标识和生命周期。区分它们可以避免错误授权和资源关联。

## 核心对象 {/* core-objects */}

定义对象、标识、创建方和持久化责任。

## 对象关系 {/* object-relationships */}

说明关系、状态变化和授权边界。

## 下一步 {/* next-steps */}

链接到读者可以执行的具体任务。
```

### 18.3 API 操作描述模板 {/* api-operation-template */}

```yaml
summary: Query account cash balances
description: >-
  Returns cash balances for the specified brokerage account. The response
  includes one entry per currency available to the account.
```

随后用 schema 定义必填字段、格式、枚举和约束；用 response 描述成功和错误语义；用 example 展示可验证的真实结构。不要把全部契约压进一个超长 `description`。

## 19. 发布前检查清单 {/* pre-publication-checklist */}

### 内容与事实 {/* content-and-facts */}

- [ ] 页面有单一、明确的主要目的和目标读者。
- [ ] 主要答案、前置条件、成功结果和下一步可直接找到。
- [ ] 产品行为、API、SDK、版本和数字已由一手来源验证。
- [ ] 没有将未知事项、历史样本或建议写成产品承诺。
- [ ] 安全、权限、数据影响和不可逆操作有明确说明。
- [ ] 没有真实秘密、个人数据或客户数据。

### 结构与格式 {/* structure-and-format */}

- [ ] 文件名和 URL 简短、稳定，三语 slug 一致。
- [ ] `title` 和 `description` 完整、准确、自包含。
- [ ] 正文没有重复 H1。
- [ ] 每个标题都有稳定英文锚点，且层级连续。
- [ ] 链接文字有意义，并指向正确 locale 和锚点。
- [ ] 列表、步骤、表格和 MDX 组件使用场景正确。
- [ ] 图片有替代文字，图示不是唯一事实来源。

### 代码与 API {/* code-and-api */}

- [ ] 每个代码块有正确语言标签并可复制。
- [ ] 变量、占位值、环境和预期结果清楚。
- [ ] 示例不含秘密，且与当前 API/SDK 签名一致。
- [ ] OpenAPI 示例通过 schema，状态码和业务码语义一致。
- [ ] 写操作说明副作用、异步状态、重试或幂等边界。

### 本地化与验证 {/* localization-and-verification */}

- [ ] 三语页面的事实、锚点、代码和警告保持一致。
- [ ] 简体与繁体不是未经校对的机械转换。
- [ ] `docs.json` 导航和内部链接已同步更新。
- [ ] 已运行 `bun run check:anchors`。
- [ ] 已运行与变更相关的 targeted check；通常运行 `bun run check`。
- [ ] 未默认运行昂贵的 `bun run build`；仅在用户明确要求或生产构建确有必要时运行。

## 20. Cloudflare 参考的采用边界 {/* cloudflare-reference-boundary */}

本规范采用 Cloudflare Docs 的以下通用原则：

- 以用户目标和用户旅程组织内容。
- 用稳定的内容类型定义页面目的。
- 使用简明语言、主动语态、现在时和一致术语。
- 主要答案留在正文，复杂度逐步展开。
- 页面描述可独立说明主题与读者收益。
- 标题、链接、替代文字和步骤应支持可访问性。
- 概念、任务、参考和故障排查内容各自承担不同职责。
- 代码、表格、提示和截图只有在帮助完成任务时才使用。

不会直接复制以下 Cloudflare 专属实现：

- `pcx_content_type`、`products`、`weight` 等 frontmatter。
- Cloudflare 产品名称、术语、目录结构和内部审核流程。
- Cloudflare 仓库特有的 Astro/MDX 组件。
- 与 Whale Docs 生成链路、三语规则或显式锚点冲突的格式。

外部参考：

- [Cloudflare Docs snapshot](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc)
- [Style Guide source](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide)
- [Writing guidelines source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/documentation-content-strategy/writing-guidelines.mdx)
- [Content types source](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/documentation-content-strategy/content-types)
- [File conventions source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/documentation-content-strategy/file-conventions.mdx)
- [Code block guidelines source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/formatting/code-block-guidelines.mdx)
- [API content strategy source](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/api-content-strategy)
- [Frontmatter schema source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/schemas/base.ts)
- [Cloudflare Docs CI source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/.github/workflows/ci.yml)
