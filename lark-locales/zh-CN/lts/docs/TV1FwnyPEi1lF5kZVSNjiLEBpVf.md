---
title: 系统介绍
slug: 2a05bab0c2cc81039fcee82d68166238
sidebar_position: 0
---


# 系统介绍

# 一、系统介绍

客户在使用「存入加密货币」「提取加密货币」功能时，所使用的钱包地址均需完成认证及加白流程。

钱包地址认证系统的操作流程会因平台和钱包类型的不同而有所差异，以下以 HashKey Exchange 平台为例，为你提供一份钱包地址认证系统操作流程图解：

### 准备工作

确认你的个人钱包支持消息签名功能，HashKey Exchange 原则上对钱包类型不做限制，常见的软件钱包如 Metamask、Electrum、MyEtherWallet，硬件钱包如 Ledger Nano S、Trezor 等均可。

### 操作步骤

1. <b>触发地址认证</b>：充值时，如果你的充值来源地址为个人钱包地址，且地址未经 HashKey PRO 认证，则你的虚拟资产将在获得一定数量的区块确认后自动触发地址认证。
2. <b>选择认证方式</b>：以 Metamask 钱包为例，在添加充值白名单页面选择 MetaMask 认证方式，点击【连接 MetaMask】。
3. <b>连接钱包</b>：弹出钱包连接界面，确认需要认证的钱包地址，点击【下一步】，再点击【连接】。
4. <b>小额支付验证</b>：在「客户钱包地址」页面点击「新增认证」按钮，如实填写待认证钱包地址、对应币种等信息，仔细核对无误后提交。登录个人加密货币钱包，向系统生成的「验证地址」转账指定「验证金额」
5. <b>完成认证</b>：完成小额支付验后，该地址即加入充值白名单，后续充值可直接选择该地址，无需再次认证。

# 二、操作说明

## <b>权限准备</b>

登录 WBO 后台系统，确认已获得「加密货币」、「渠道存管账户」、「客户钱包地址」相关操作权限，无权限请联系管理员申请。

## <b>前置准备：加密货币资料维护（所有操作首要步骤）</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜单入口：WBO - 业务参数设置 - 资金参数 - 加密货币</p>
</div>

- 在开展加密货币出入、钱包地址认证业务前，后台操作人员需先完成加密货币相关资料维护：

1. 登录 WBO 后台系统，进入「业务参数设置 - 资金参数 - 加密货币」页面；
2. 点击「新增」或「编辑」，完善目标加密货币的基础信息（如币种代码、名称、认证规则等）；
3. 核实信息无误后提交生效，确保后续认证、出入币业务可正常对接。

<img src="UQiVb0OiIoqZbHx7KscjMmgapbc" src-width="3260" src-height="1124" align="center"/>

## <b>渠道存管账户导入</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜单入口：WBO - 虚拟资产管理 - 出入币 - 渠道存管账户</p>
</div>

1. 进入「虚拟资产管理 - 出入币 - 渠道存管账户」页面
2. 点击「批量新建」，上传经审核的渠道存管账户清单（需符合系统指定格式）
3. 导入完成后，核实账户信息无误，点击「确定」，用于客户认证前的自动分配

<img src="ZoHobE0azoJMWxxyqOUjP2N8pdd" src-width="2510" src-height="1362" align="center"/>

## <b>认证记录监控</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜单入口：WBO - 虚拟资产管理 - 出入币 - 客户钱包地址</p>
</div>

1. 进入「客户钱包地址」后台管理页面，可查看所有客户的认证申请记录
2. 支持按「认证状态」「创建时间」「客户编号」等条件筛选查询，点击单条记录可查看详情（含分配的存管账户、支付信息、校验结果等）
3. 对「未认证」的记录，可协助客户排查问题（如核实转账是否到账、地址是否匹配）

<img src="Tt8bbVXU2oIeCsxflgtjVWJnpCf" src-width="3288" src-height="1076" align="center"/>

## <b>加白与后续管理</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜单入口：WBO - 虚拟资产管理 - 出入币 - 客户钱包地址</p>
</div>

1. 客户地址认证通过后，系统自动纳入「加白名单」，后台可查看加白地址清单
2. 支持对已加白地址进行状态管理（如删除），应对异常风险
3. 定期导出认证与加白记录，完成合规备案与数据归档

<img src="FdBebKmwmoJZONxuicwjwGDZpEg" src-width="3274" src-height="1082" align="center"/>

## 注意事项

1. 待认证钱包地址需为客户本人所有，切勿使用他人地址提交认证，否则将影响资金接收
2. 小额支付验证的资金仅用于归属权验证，不收取任何费用，认证完成后无需单独提现
3. 妥善保管认证过程中的操作记录与转账凭证，便于后续问题排查
4. 如遇系统异常（如页面无法打开、提交失败），请刷新页面或更换浏览器；问题未解决，联系技术支持团队
5. 严格遵守加密货币业务相关法规与平台规则，虚假认证将导致账户限制，情节严重者终止服务

