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

**WhaleSDK**:
供 Broker 将完整客户交易体验嵌入自有客户端的集成产品，交付可直接集成的 UI 与完整业务功能，并包含 iOS、Android 和 WebTrade 三种形态。
_Avoid_: Whale SDK、Trading SDK、Client SDK

**WhaleSDK for iOS**:
WhaleSDK 面向 Broker iOS 客户端的原生交付形态。

**WhaleSDK for Android**:
WhaleSDK 面向 Broker Android 客户端的原生交付形态。

**WebTrade**:
WhaleSDK 面向 Web 或 WebView 容器的交易产品形态，与 iOS、Android 并列，文档归属于 WhaleSDK。
_Avoid_: Web Trading API、独立文档产品

**Broker API**:
供券商后端以 Server-to-Server 方式调用的机构级 API，授权范围可覆盖该券商下的数据与 SaaS 柜台能力。当前仓库中的 `b-api` 内容属于此产品。
_Avoid_: b-api、Whale API、OpenAPI

**Trading API**:
供券商自研客户端接入的客户级 API，以单个客户身份授权，只能访问该客户数据及平台公开内容；计划于 2026 年第四季度启动建设。
_Avoid_: Client API、App API、Mobile API

**OpenAPI**:
供券商的开发者客户及 AI 应用使用的客户级开放 API，以单个客户身份授权。
_Avoid_: Broker API、开放平台（单独指代 API 时）

## 参与方与授权

**Broker**:
采购并运营 Longport Whale 的持牌券商机构，也是 Broker API 的授权边界。
_Avoid_: SaaS Tenant、Member、Organization（作为对外统称时）

**Customer**:
Broker 服务的终端客户，是 Trading API 与 OpenAPI 的授权边界。
_Avoid_: Client、User、Investor（作为统一身份概念时）

**Broker Developer**:
代表 Broker 建设服务端集成或自研客户端的开发人员。
_Avoid_: Developer Customer

**Broker App Developer**:
代表 Broker 将 WhaleSDK 集成到 iOS、Android 或 Web 容器的客户端开发人员。
_Avoid_: Developer Customer、Broker Operator

**Broker Operator**:
代表 Broker 代表 Broker 执行日常柜台业务、审核、配置、查询和异常处理的操作人员。
_Avoid_: Admin、Staff、User（作为统一角色名称时）

**Developer Customer**:
使用 OpenAPI 构建个人、第三方或 AI 应用的 Broker 客户。
_Avoid_: Broker Developer

**Broker-scoped Authorization**:
由 Broker 授予的机构级访问权限，可按获批能力访问该 Broker 范围内的数据。

**Customer-scoped Authorization**:
由单个 Customer 授予的访问权限，只覆盖该 Customer 的私有数据和平台公开数据。
