# Whale Docs

Whale Docs 是 Longport Whale 系统解决方案的统一文档门户。它面向采用 Whale 的券商操作人员、实施团队及开发者，解释产品、柜台操作、实施流程和三种 API 接入方式。

## 产品与文档

**Longport Whale**:
面向券商的 SaaS 证券业务系统解决方案；Whale Docs 所描述的产品主体。
_Avoid_: Whale API、Longbridge Whale

**Whale Docs**:
Longport Whale 的统一文档门户，包含通用文档和各 API 产品文档；它本身不是 API 产品。
_Avoid_: Whale API、Whale API Docs

**Docs**:
不依赖特定 API 的产品与实施文档，包括 Whale 介绍、业务流程、接入方式和券商上线指引。
_Avoid_: Documentation（作为导航中的英文名称除外）、通用 API 文档

**Whale SDK**:
Whale 的客户端 SDK 产品族总称，包含图形界面 SDK WhaleApp SDK，以及无 UI 的数据 SDK WhaleCore SDK。

**WhaleApp SDK**:
Whale SDK 产品族中的图形界面 SDK。供 Broker App 直接集成完整证券业务 UI，包含 iOS、Android 与 WebTrade 三种形态。
_Avoid_: Whale SDK、Trading SDK、Client SDK

**WhaleCore SDK**:
Whale SDK 产品族中的无 UI 数据 SDK。供 Broker App 完全自行实现证券功能 UI 时使用，提供行情订阅、WebSocket 连接、认证签名和 token 续期等基础机制。面向 iOS、Android、Web 三个平台；iOS、Android 已可用，Web 的 WebAssembly 版本开发中。
_Avoid_: Whale SDK、WhaleCore（当明确指该数据 SDK 时）、TradingAPI

**WhaleApp SDK for iOS**:
WhaleApp SDK 面向 Broker iOS App 的原生图形界面交付形态。

**WhaleApp SDK for Android**:
WhaleApp SDK 面向 Broker Android App 的原生图形界面交付形态。

**WebTrade**:
WhaleApp SDK 面向 Web、iframe 或 WebView 容器的图形界面交付形态。
_Avoid_: Web TradingAPI、独立文档产品

**Broker API**:
面向 Broker 的机构级 API，可用于 Server-to-Server 集成，也可为 Broker 自研管理后台提供数据与 SaaS 柜台能力。实际请求由 Broker 控制的服务端发起；当前仓库中的 `b-api` 内容属于此产品。
_Avoid_: b-api、Whale API、OpenAPI

**TradingAPI**:
供 Broker App 使用的 Customer 级 HTTP API，以单个 Customer 身份授权，通常与 WhaleCore SDK 配合，用于完全自行实现证券功能 UI。
_Avoid_: Client API、App API、Mobile API

**OpenAPI**:
面向 Broker 的 Customer 的开放能力，以单个 Customer 身份授权。用于策略交易、量化分析和开发者工具，并通过 MCP 等 AI-native 方式让 Customer 授权 AI 接入其账户、资产、行情和基本面数据。
_Avoid_: Broker API、开放平台（单独指代 API 时）

## 参与方与授权

**Broker**:
采购并运营 Longport Whale 的持牌券商机构，也是 Broker API 的授权边界。
_Avoid_: SaaS Tenant、Member、Organization（作为对外统称时）

**Customer**:
Broker 服务的终端客户，是 TradingAPI 与 OpenAPI 的授权边界。
_Avoid_: Client、User、Investor（作为统一身份概念时）

**Broker Developer**:
代表 Broker 建设服务端集成或自研 App 的开发人员。
_Avoid_: Developer Customer

**Broker App Developer**:
代表 Broker 集成 WhaleApp SDK（iOS、Android 或 WebTrade）或 WhaleCore SDK 的 Broker App 开发人员。
_Avoid_: Developer Customer、Broker Operator

**Broker Operator**:
代表 Broker 代表 Broker 执行日常柜台业务、审核、配置、查询和异常处理的操作人员。
_Avoid_: Admin、Staff、User（作为统一角色名称时）

**Developer Customer**:
使用 OpenAPI 开发策略交易、量化分析、开发者工具或 AI 应用的 Broker Customer。
_Avoid_: Broker Developer

**Broker-scoped Authorization**:
由 Broker 授予的机构级访问权限，可按获批能力访问该 Broker 范围内的数据。

**Customer-scoped Authorization**:
由单个 Customer 授予的访问权限，只覆盖该 Customer 的私有数据和平台公开数据。
