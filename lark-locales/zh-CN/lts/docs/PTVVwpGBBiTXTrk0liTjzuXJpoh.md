---
title: 系统介绍
slug: PTVVwpGBBiTXTrk0liTjzuXJpoh
sidebar_position: 2
---


# 系统介绍

[[原始文档 - Original Document]](https://longbridge.larkenterprise.com/docx/SSardPSeuoy0o9xEJjhcBX3BnMc) @千鸟

```text
slug: VWyawtnPoizaJvkLjGIcgA5hngb
```

# 概述

风控管理主要用于处理证券业务下的保证金配置、额度管理、Margin Call等相关功能。所涉相关模组主要如下：

<img src="/assets/OcJIbLLGeoJw9SxxkEcjNKLwpJg.png" src-width="2342" src-height="1556" align="center"/>

# 业务操作管理

# 授信额度

目前系统可提供的额度类型分融资额度和交易额度，其中交易额度是授于合作比较好的机构客户或现金账户，在购买力不足时，可使用交易额度进行交易；融资额度是针对margin账户，根据客户的资产信息等综合评估给用户的额度，客户可在该额度范围内使用额度。

## 融资授信

<b>关于自动授信</b>：

客户若开通 margin 账户，后面客户操作了转仓/入金，则系统自动会给客户授信一定的额度，客户可以进行保证金交易，系统支持自动授信机制（转仓到账/入金到账）， 整理自动授信流程如下：

<img src="/assets/MgjNbAKFxo1jaLxm878ji5YBp3f.png" src-width="953" src-height="733" align="center"/>

### <b>客户额度</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 客户额度</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询所有授信客户额度情况，同时若有客户需求，也可支持人工给客户授信及调整额度。

主要操作场景如下：

<b>调整客户额度</b>

1. 列表为所有融资授信客户，打开列表页的调整弹窗为已授信客户调整额度

<img src="/assets/QzKQbmFWOobXgWxhQPNja0p3pqb.png" src-width="3272" src-height="1394" align="center"/>

<img src="/assets/BRDcb7K0UojDJrxXjW1j5B65pPd.png" src-width="3250" src-height="1754" align="center"/>

调整额度页面

- 页面字段说明

1. 确定【调整后额度】，提交则需要进入额度审批页面的对应记录进行额度审批；见「额度审批 (链接丢失)」

<b>新建授信客户</b>

1. 若客户未有资产入账，需要给未授信的客户授予额度，可以在列表页【新建授信客户】可以单个新增授信客户

<img src="/assets/F2KhbZXESoRf1Lxc6MHjmjMMpDc.png" src-width="3250" src-height="1396" align="center"/>

1. 弹窗页填写相关信息（若客户已在授信列表，提交时会提示，可以在主列表查看客户额度）

<img src="/assets/NTlVb7wxco5fSpxHcmxjmTP3phg.png" src-width="3252" src-height="1398" align="center"/>

1. 若需一次性给多个客户授信，可以在列表右上方的【批量新增】操作

<img src="/assets/C2t3btazFoMAYPx4oVXjeV81p8c.png" src-width="3262" src-height="1764" align="center"/>

1. 无论是单个还是批量新增，提交后都需在工单系统审批。审批通过后方可对客户额度生效

<b>删除已注销客户授信额度</b>

业务中可能存在有些客户账户已经注销，但仍会计算在公司总批核额度中，可以人工删除该部分客户额度。

1. 筛选注销状态的授信客户

<img src="/assets/YdFTbm5lpoX0NExgQ7XjLNPXpoN.png" src-width="3244" src-height="1392" align="center"/>

1. 选择并删除已注销的授信客户

<img src="/assets/EYXObwvpnoXUKBxfrBHj36lvp2e.png" src-width="3170" src-height="730" align="center"/>

<b>设置公司额度</b>

1. 根据客户整体额度汇总情况，若需同步调整公司额度进行额度管控，可以在页面列表上方【设置公司额度】进入相关页面操作

<img src="/assets/O2mjbaNDVoi5aLxpzkRjtY7opEc.png" src-width="3256" src-height="1390" align="center"/>

1. 公司额度设置：租户上线时，系统会默认初始化额度，后租户可根据业务需求进行自定义修改；修改各维度额度，可通过页面【编辑】操作。修改后，需要走工单审批通过即可完成修改

<img src="/assets/NbekbnI4noUdf5x74tej9IWVpoQ.png" src-width="3276" src-height="1730" align="center"/>

公司额度设置页面

- 页面字段说明

### <b>额度审批</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 额度审批</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于审批授信额度，包含后台及客户发起的调整额度申请。

1. 在列表页的操作【提交审批】打开弹窗页面

<img src="/assets/Bu0RbDifqoDKqpxxZ70jrtITpyb.png" src-width="3276" src-height="1216" align="center"/>

1. 提交审批弹窗页面确认额度并进行额度批注；同时，若确认不同意本次额度申请，可直接【拒绝】，无需提交工单审批

<img src="/assets/B5zbbKA2QoG7zcxCam9jGCmdp5e.png" src-width="3328" src-height="1688" align="center"/>

额度审批确认页面

- 页面字段说明

1. 确认信息后，提交审批，需在工单系统进行审批，审批完成后额度调整方可生效

❤️Tips：

提交工单审批可以根据额度区间条件设置审批流程，对应审批流工单标识`credit.credit_adjust`

### <b>客户FPS</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 客户FPS</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询客户保证金融资授信的FPS值（FPS初始配置可在「业务参数设置」-「风控」-「授信客户参数」查看） 及配置自定义FPS规则（可在全局FPS初始值上按定义维度配置值进行增减计算）。

<b>配置FPS规则</b>

1. 页面点击【规则配置】打开规则页面

<img src="/assets/FPt5bcLoSoZ9g5xtnTWjgxf8p5b.png" src-width="3288" src-height="796" align="center"/>

1. 规则配置：可以根据客户各方面维度设定阈值配置增减阈值，确定后生效规则

<img src="/assets/LjLybj8g9osnjLxQRnNj0U8vpOe.png" src-width="3302" src-height="1620" align="center"/>

### <b>授信组</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 授信组</p>
</div>

<b>菜单功能介绍</b>：该菜单用于设置授信组及管理授信组额度，组内客户额度使用不可超过组额度。如需将同一客户多个账户分组，或者将关联账户（如夫妻账户）分组等场景均可使用该功能。

<b>主列表页说明</b>

列表页可查看所有授信组及总授信额度；每个组的额度使用情况也会显示。如下图：

1. 总授信额度：当前所有授信组的组额度总和
2. 授信组信息：支持编辑组信息及给授信组添加新账户；授信额度会展示组额度及额度使用情况，若组内使用额度超过组额度，则进度条会红色提示
3. 组内账户信息：展示组内账户融资额度及使用情况，支持调整组内账户额度及将对应账户从授信组删除

<img src="/assets/BsNmbF8MjomOCcx8a25jUQ1ApEb.png" src-width="3814" src-height="1614" align="center"/>

<b>创建授信组</b>

1. 新建授信组：如图操作

<img src="/assets/KtbJbsxSUosCOzxrIUfjcpgVpLc.png" src-width="3296" src-height="634" align="center"/>

1. 填写授信组信息：授信组账户在创建授信组时非必填，可在创建组后再分步通过【新增组内账户】实现；信息填写完成后提交即可成功创建组

<img src="/assets/QcNqbLVkUov1cXx8xW0jTwy5p5H.png" src-width="3252" src-height="1410" align="center"/>

1. 若添加的组内账户已有额度，则会自动带入其现额度，同时也可以修改额度

<img src="/assets/Wxscb04ZWoCjfwxjrV9jK6owpwc.png" src-width="3276" src-height="1424" align="center"/>

1. 授信组创建后，均可进一步修改组信息、新增/删除组内账户或调整组内账户额度

<img src="/assets/ZKbRbRAUGo94zlxCptSjvnzopCg.png" src-width="3110" src-height="554" align="center"/>

### 授信快照

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 授信快照</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询所有客户的历史每一次的授信记录，若需具体定位额度变更情况可以使用该功能。

<img src="/assets/Fcf9bn16Io5RMmx0o9EjqP7upEb.png" src-width="3246" src-height="1664" align="center"/>

授信快照查询页面

### 批量变更

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 批量变更</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于批量变更客户的保证金融资额度，主要使用场景为风控的定期额度巡检。进行批量变更的客户必须为「授信额度」页面的已授信客户。

<b>操作流程如下</b>：

1. 页面右上角可以操作【导入授信】

<img src="/assets/WspTbeHipou8pexYaWtjDO8Pp7Q.png" src-width="3234" src-height="1062" align="center"/>

批量变更页面

1. 操作导入：根据下载的模版按模版字段要求填写；填写完成后上传档；【确定】后则会在列表页生成一个“待确认”状态的任务

<img src="/assets/MKWxbRfBQod0z5xFTJYjwX0Upme.png" src-width="3218" src-height="1172" align="center"/>

1. 在列表任务的【详情】进入批量变更客户额度二次确认页面

<img src="/assets/SYq2bUeRWo9GbWxTDkEjewstpdh.png" src-width="3282" src-height="522" align="center"/>

1. 【详情】列表会展示本次提交确认的所有授信记录，若需要再次修改部分客户的额度可以在操作的【编辑】操作；也可以【删除】无需变更的客户记录

<img src="/assets/LESMbKil1o00UzxetKtjBEYJp7b.png" src-width="3246" src-height="758" align="center"/>

1. 核对确认无误后，可以点击页面的右上角【批量调整】即可完成该批次调整

<img src="/assets/HPwybHc6GoNrVAxiPFYjWawLpWi.png" src-width="3352" src-height="774" align="center"/>

批量变更批次详情页

## 客户融资

### 已用明细

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 客户融资 &gt; 已用明细</p>
</div>

<b>菜单功能介绍</b>：该菜单分币种展示所有客户融资明细，供查询使用。

<img src="/assets/DSInbDlZdosULBxytFnjWqDdpVg.png" src-width="3174" src-height="1136" align="center"/>

融资已用明细页面

### 超额明细

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 客户融资 &gt; 超额明细</p>
</div>

<b>菜单功能介绍</b>：该菜单展示所有超额融资客户的明细数据，供查询使用。

<img src="/assets/WT5jbbwGao2yGVx7n6ojzLzbpWD.png" src-width="3174" src-height="1256" align="center"/>

超额融资页面

## 交易额度

### 客户交易额度

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 交易额度 &gt; 客户交易额度</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查询所有给过交易额度的客户，并支持新增、修改和生效/失效额度。交易额度在客户交易时会计入购买力，额度到期时则会自动失效。

<b>操作流程如下</b>：

1. 页面可通过【设置】设置margin call时是否自动失效交易额度，默认开启自动失效，可以进行修改，详细可见设置页面提示；修改需工单审批后方可生效

<img src="/assets/W5nybS3b1oLBpsxjok8jP7zSp9b.png" src-width="3296" src-height="1104" align="center"/>

1. 页面可以通过【新建】【批量新建】来给客户添加交易额度

<img src="/assets/FslhbczvHoNv0Px06rVjN208pjb.png" src-width="3346" src-height="694" align="center"/>

1. 配置客户交易额度，按页面要求填写后提交审批，提交信息可在「变更记录」查看；在工单系统审批通过后，方可在「客户交易额度」列表展示
注：
    1. 一个客户仅可存在一个交易额度类型
    2. 若客户已有同类型交易额度，系统则会默认以本次新增额度进行覆盖

<img src="/assets/QCOcbMsIyoaNJpxgfOnje8EzpIh.png" src-width="3346" src-height="1724" align="center"/>

1. 批量创建交易额度：下载文件模板并根据模板说明按要求填写文件后再上传，页面会展示文件解析结果；提交在工单系统审批通过后，方可在「客户交易额度」列表展示

<img src="/assets/QOqibCJbmoKr3UxeLzBjJYZopHf.png" src-width="3298" src-height="1652" align="center"/>

1. 在列表页操作项【编辑】可修改客户交易额度，按页面配置修改后提交即可；操作方式同【新建】

<img src="/assets/LPFCbyzNooc6DexdNHNj9227pZg.png" src-width="3254" src-height="1624" align="center"/>

1. 状态已失效的客户可以通过【编辑】修改失效日期来生效客户交易额度；若需要对已生效的客户进行失效额度，则可通过操作列表的【置为失效】操作完成

<img src="/assets/MF58b2o0Po2gWlxNzZJj0G9qpRd.png" src-width="3268" src-height="305" align="center"/>

### 变更记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 交易额度 &gt; 变更纪录</p>
</div>

<b>菜单功能介绍</b>：该菜单用户查看客户交易额度的所有变更记录。

<b>操作流程如下</b>：

1. 「客户交易额度」创建/编辑后会进入「变更记录」页面；列表操作的【工单详情】可以查看该交易额度记录的审批详情

<img src="/assets/SjH7bWRkqo17DQxQWiejNVu6pne.png" src-width="3254" src-height="608" align="center"/>

## 借币提醒

一般劵商的客户账户都是采用综合购买力换算机制，能方便客户以非当地币别去交易当地币别股票（例：以港元交易美金股票），当客户成交后，就会涉及到客户账户的借币（劵商先提供自有外币给外国劵商作交易）后续客户就需要进行换汇操作，因此可以配置事先的借币换汇提醒，将客户换汇提醒事项列入风控管理维度。

<b>业务流程</b>

<img src="/assets/A0pObeHdZofzVExuqcbj9OTrpLe.png" src-width="2182" src-height="474" align="center"/>

### 提醒查询

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 提醒查询</p>
</div>

<b>菜单功能介绍</b>：该菜单可以查询所有提醒客户，支持配置借币提醒规则和人工兑换操作。

<b>操作流程如下</b>：

1. 点击列表右上角的【换汇规则】配置借币提醒规则

<img src="/assets/CULlbU6RuodmaWxbw5CjmC8ypwp.png" src-width="3296" src-height="1076" align="center"/>

1. 规则配置：单币种规则为非必配项，其他为必配项；规则仅在开启时运行
    1. 必配项的欠款金额和其他币种可提金额默认为主币种，所有币种转化为主币种计算
    2. 单币种规则和必配项规则只要有其一满足规则，即会提醒
    3. 单币种规则可以设置不同币种规则，支持添加和删除

<img src="/assets/B0yBb33V1o8zyRxQ8OijynHMpRd.png" src-width="3312" src-height="1716" align="center"/>

1. 规则配置后，选择开启并提交工单审核。审核通过后，系统则会运行规则，捞取符合规则的客户，结果在「提醒查询」列表展示。此外，交易日均会定期执行规则并给符合规则的客户发送借币提醒消息，通知客户主动换汇。页面操作【换汇用户捞取】可刷新列表，过滤不再满足规则的客户

<img src="/assets/OCjebpNcyowJT9xcnuyjrsG5p0I.png" src-width="3286" src-height="970" align="center"/>

1. 同时，开启规则后，客户在App上可以对应查看【自动还款】功能，可以自主选择开启该功能。若客户打开自动还款，当命中规则时，系统将进行自动换汇或后台操作人工兑换
    <img src="/assets/Lw0ibIl2AomsGhx6g2JjAOQUpmc.png" src-width="1170" src-height="2532" align="center"/>
    功能入口：「我的」-「设置」-「账户设置」
    b. App若开启「自动还款」，页面「自动换汇」则为「开启」，支持操作【兑换】
    <img src="/assets/WgGdbN6oSoA4LcxT6tFjxUD1pnc.png" src-width="3216" src-height="682" align="center"/>
    1. App端「自动还款」

2. 兑换：开启自动还款的客户会默认系统自动兑换；在系统自动兑换之前，页面可支持人工兑换。列表操作【详情】支持查看客户实时数据、消息记录和兑换记录；人工兑换弹窗页面也可查看当前客户现金情况，配置兑入/兑出金额和币种确认兑换即可

<img src="/assets/GCJ4baoOyoi7lGx5OifjTy2ZpAh.png" src-width="3274" src-height="1640" align="center"/>

<img src="/assets/OvaobI6M3or269x8zkYjCgADpec.png" src-width="3222" src-height="1220" align="center"/>

1. 兑换结果查看：人工/自动兑换完成后，若剩余资产仍命中规则，则仍会在提醒查询列表；若不再命中规则则会进入历史记录，可在「历史记录 (链接丢失)」查看相关详情；若命中换汇审核/换汇失败，可在【换汇异常】页面查看异常单（换汇审核中需在「款项管理」-「换汇」-「客户汇兑」页面进行人工审核）

<img src="/assets/Htsgbexi6o9YxGx8MQUjZqOup5f.png" src-width="3290" src-height="1072" align="center"/>

### 历史记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 历史纪录</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询历史所有的提醒客户及相关提醒兑换详情。

<img src="/assets/R0yKbJOJSoYlNqxA8MNjSNlwpKg.png" src-width="3198" src-height="1070" align="center"/>

借币提醒历史记录页面

### 快照

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 快照</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询快照时刻的欠款/可兑换金额以及现金/余额通数据。

<img src="/assets/RTCub3TK4o9r8pxrWzYj7yoKpMh.png" src-width="3314" src-height="1558" align="center"/>

借币提醒快照查询页面

### 自动还款开通查询

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 自动还款开通查询</p>
</div>

<b>菜单功能介绍</b>：该菜单可以查询开通自动还款功能的客户（只要历史开通过的客户均支持查询，根据状态区分当前是否开通）。

<img src="/assets/AnaMbEEnBoH8eTxDaMcj054ypfe.png" src-width="3248" src-height="1642" align="center"/>

自动还款开通客户记录查询

# Margin Call

当客户的资产净值，因市场波动而下跌至低于维持保证金水平时，系统会向客户发出Margin Call通知，客户必须在3个交易日补充资金或平仓，否则业务上有权替客户进行平仓，而无须事先通知。

<b>业务流程</b>：

<img src="/assets/VaZ7b1AukoRQHZx8BGSjgAxdp9d.png" src-width="2564" src-height="754" align="center"/>

## 风险预警

### 实时预警

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 实时预警</p>
</div>

<b>菜单功能介绍</b>：该菜单支持实时的保证金预警监控。

1. 列表展示所有当前预警客户记录，在左侧区会有 绿色文字实时相关更新提示（实时更新最新计算结果）；同时在上方区域会加总目前 预警纪录的追保金额与 长期未结清追保金额的 汇总额

<img src="/assets/UBpbbl6t6oQniyxSF2rjNhkzpBJ.png" src-width="3262" src-height="796" align="center"/>

<b>页面基础字段说明</b>：

1. 同时对于列入监控预警的客户，可以点选记录后，可以进行后续操作：发送消息//平仓操作/设置自动平仓

<img src="/assets/L7iYbSE7yoqVfNxWCcWjt91fpoa.png" src-width="3230" src-height="1145" align="center"/>

1. 如果操作批量平仓动作时，可以选择是否平仓特定股票平仓；批量平仓需要在业务参数设置的平仓开关页面开启后才可使用

<img src="/assets/PFEqbife5ohfEFxFTNhjlEbGpMg.png" src-width="3248" src-height="1294" align="center"/>

1. 设置自动平仓：可以自定义设置自动平仓时间；同时，也可以根据业务实际情况自定义调整某些Margin Call的截止日期

<img src="/assets/TSWxbDiDJow8fWxoliHjYLPfpme.png" src-width="3222" src-height="1306" align="center"/>

1. 也可以对列入监控预警的客户，在记录区右侧点选【详情】，提供该客户的资金摘要与持仓资料与正在平仓的股票清单；支持在详情页操作【平仓】或者【发送消息】

<img src="/assets/FVo0bUMQ4oZGc9xoBp3jf7gopag.png" src-width="3158" src-height="506" align="center"/>

<img src="/assets/SVm1bolVEo0qBnxOgLkjQ9wwpxg.png" src-width="3252" src-height="1632" align="center"/>

1. 对当前预警记录进行编辑备注，便于后续处理或给其他人参考；同时，若标注为异常单，也可在列表页面的【异常单】查看记录

<img src="/assets/Ry09bgxRToSZXdxGOSajFRURpod.png" src-width="3150" src-height="466" align="center"/>

<img src="/assets/V0XPbGKQGoWZYMxFS02jECVCplu.png" src-width="3156" src-height="1140" align="center"/>

### 日内融实时预警

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 日内融实时预警</p>
</div>

<b>菜单功能介绍</b>：该菜单功能及操作逻辑同「实时预警」，针对客户对象仅为日内融账户。

<img src="/assets/OWfmb87qpojCeCxlch8jGLCUpdb.png" src-width="3212" src-height="700" align="center"/>

### 历史记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 历史记录</p>
</div>

<b>菜单功能介绍</b>：margin call结束后会进入历史记录页面，该菜单下可以查看历史margin call订单的详细信息。

1. 点击列表页的【详情】可以查看margin call触发前后的详细数据

<img src="/assets/YJHRbihm0oyHHcxeirfj2F4QpEy.png" src-width="3300" src-height="736" align="center"/>

### 快照

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 快照</p>
</div>

<b>菜单功能介绍</b>：当客户触发 margin call 后，需要保留当时客户触发 margin call 时的历史数据记录是可追溯，日后可以作为 RO 或相关合规的参考，附为上报给监管的依据，因此 margin call 历史记录需要在部分场景下记录快照数据。

场景如下：触发 margin call  /触发 force call / 触发通知/每日定时记录 /结束 margin call

<img src="/assets/ILlHbT3HOogMqoxJoAQj5giQpXh.png" src-width="3296" src-height="786" align="center"/>

### 融券持仓概览

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 融券持仓概览</p>
</div>

<b>菜单功能介绍</b>：当IB不可融资时，会进行提前通知做股票召回或者强制平仓，对应我们也要通知用户做强制平仓。该菜单支持查看整体融券的使用情况并操作平仓。

1. 列表页查看整体融券信息

<img src="/assets/US9eb0Od0oDWX0xRNZ3jYjoVpUf.png" src-width="3220" src-height="786" align="center"/>

1. 点击【详情】，可查看该空头股票对应客户详情

<img src="/assets/BcndbYJ4aolqk8xtctbjxbsmpxh.png" src-width="3084" src-height="522" align="center"/>

1. 详情页面可以操作平仓或发送margin call消息，操作方式同「实时预警」

<img src="/assets/XB7Mb7200oPmkexnpfvjKoenp5b.png" src-width="3030" src-height="522" align="center"/>

### 不良信贷处理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 不良信贷处理</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询不良信贷客户数据。

<img src="/assets/GwBwbyoovo54sjxmQhrjA0Pupzf.png" src-width="3270" src-height="1624" align="center"/>

## 股票追收

### 期权备兑追收

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 股票追收 &gt; 期权备兑追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示期权备兑正股不足，需要追收股票的记录。

1. 列表展示所有追收记录

<img src="/assets/HLqSbRhcqofUOdxrjeyjsvQxpJh.png" src-width="3216" src-height="576" align="center"/>

1. 点击【详情】可以进一步查看客户margin call详情，并支持对期权操作【平仓】

<img src="/assets/Xl8YbczHfoe50exA2IZjTnQupZc.png" src-width="3262" src-height="1626" align="center"/>

### 空头股票追收

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 股票追收 &gt; 空头股票追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示需要追收的空头股票记录（非实时更新）。

1. 列表展示所有追收记录

<img src="/assets/V4O6bkNDzopGrjxAHfLj5xWfpRf.png" src-width="3234" src-height="720" align="center"/>

1. 点击【详情】可以进一步查看客户margin call详情，并支持对空头股票操作【平仓】

<img src="/assets/GBLkbeZHwotObxxa0S7jZ8WUpLf.png" src-width="3252" src-height="1608" align="center"/>

## 平仓订单

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; Margin Call  &gt; 平仓订单</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查看所有平仓记录，以及若出现平仓操作错误，可以进行撤单。

<img src="/assets/R65wbIseAo3oe4xIaH0j6XYNpnd.png" src-width="3312" src-height="856" align="center"/>

# 保证金

股票的保证金作为港美股券商风控的逻辑之一，用于计算购买力、margin call等场景，一般来讲可保证金交易的股票是风险偏低的股票。该菜单主要提供保证金设置功能。

## 股票保证金

### 多头股票保证金

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 多头股票保证金</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于设置多头股票保证金比例。

1. 列表展示所有股票保证金设置现状

<img src="/assets/ByQybMMo7oJuBFxIhQHjWY4XpWe.png" src-width="2636" src-height="1020" align="center"/>

多头股票保证金主页面

1. 可以在【新建】按钮，新增单个股票保证金比例（注：若该股票已存在，数据会覆盖，以本次设置为准）

<img src="/assets/HpfObcQLAoN7xBxGfWSj3KRDpdD.png" src-width="2294" src-height="636" align="center"/>

<img src="/assets/U4GbbOKzDo7DFFxHB7ejBX6JpBe.png" src-width="3322" src-height="1640" align="center"/>

1. 批量设置保证金比例：下载模板后根据模板字段说明填写并上传文件

<img src="/assets/A6pVbDY8totQnaxaf7AjGIjJpqd.png" src-width="3200" src-height="1012" align="center"/>

1. 无论是单个新建还是批量上传，都会在「设置记录」生成记录，操作见「设置纪录 (链接丢失)」菜单
2. 若股票保证金设置已存在，需要修改比例，则可以在列表操作【编辑】，编辑操作流程同新增；如需删除某只股票的保证集比例设置，可以操作【删除】

<img src="/assets/CI9obpdeDocli7xFWUpjQlaJpkk.png" src-width="3058" src-height="428" align="center"/>

1. 股票状态可能变更，可以通过列表右上角的【拉取个股状态】刷新最新状态

<img src="/assets/RXcYbySIno3MAmx7D0uj1Ovkprd.png" src-width="2278" src-height="534" align="center"/>

### 日内交易实时保证金

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 日内交易实时保证金</p>
</div>

<b>菜单功能介绍</b>：针对日内融业务，可以单独设置支持日内交易的股票保证金比例。

1. 列表展示所有支持日内交易的股票保证金比例记录；系统会自动根据交易时段变更保证金状态，相关规则可在页面的【规则设置】进行设置

<img src="/assets/F7CAb4QXEoP36HxXeaHjwb0ppKf.png" src-width="2352" src-height="978" align="center"/>

1. 页面的【新增】和【批量上传】可以单个新增或批量新增日内交易股票的保证金比例设置；操作流程同「股票保证金」

<img src="/assets/KJHnbWsGeoTno0xbgh9jElALpIg.png" src-width="2320" src-height="782" align="center"/>

1. 在纪录右侧操作区，进行【编辑】或【删除】

<img src="/assets/TwM2bjo03oxJTVxsbxZjI5yvp4b.png" src-width="2294" src-height="784" align="center"/>

<img src="/assets/ASR8b1PB0ov3JLxsvhEjOA3pp0g.png" src-width="2380" src-height="1282" align="center"/>

注意： 若其中若状态为失效，则说明保证金比例默认为 100%

### 设置记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 设置记录</p>
</div>

<b>菜单功能介绍</b>：该菜单用来查看股票保证金/日内交易实时保证金比例的设置记录以及进行人工同步/取消同步操作。

1. 「股票保证金」「日内交易实时保证金」新增或编辑提交后会在比率设置记录中会生成未触发的该保证金设置记录，也可以点击【取消同步】则取消设置，不作记录 ，此时点击【同步】，该记录状态变更为已触发，同时在主页生成一条股票保证金记录（若新增的为已存在的股票则更新原记录）；点击【取消同步】，则记录状态变更为已撤销，该设置不生效；若不操作人工同步，系统将在设定的有效期生效对应设置

<img src="/assets/NsiCb0hZdoUq4IxmddQjnsH5pl4.png" src-width="2316" src-height="862" align="center"/>

### 空头保证金

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 空头保证金</p>
</div>

<b>菜单功能介绍</b>：针对空头业务，可以单独设置支持空头股票保证金比例。

1. 列表展示所有支持空头股票保证金比例记录

<img src="/assets/SAHfbzoydoI5wpxv3r8jb6cupug.png" src-width="2352" src-height="860" align="center"/>

1. 支持批量上传：下载模板文件根据文件要求填写后上传

<img src="/assets/QvQEbZkUQogvqFxDXJrjlZpMpTu.png" src-width="2298" src-height="816" align="center"/>

1. 也可点击纪录区【编辑】修改纪录
    <b>可卖空状态说明</b>：总共有三种状态
    - 允许卖空：融券池充足，当前股票支持卖空
    - 禁止卖空：人工设置不可卖空，代表股票不支持融券
    - 系统自动禁止：若人工设置融券池数量规则，当融券池数量达到自动关闭规则时，则系统会自动禁止卖空，对客户感知为该股票支持融券，但融券池数量不足导致无法卖空；同时若满足自动恢复卖空规则，则系统会恢复“允许卖空”

<img src="/assets/XbRfbdLaao9IMixClFnjyVyCpQc.png" src-width="2298" src-height="1280" align="center"/>

❤️Tips：

融券池数量规则设置：自动恢复卖空数量需大于等于自动关闭卖空数量。

1. 点击页面的【变更记录】可以查看历史所有空头保证金的变更记录

<img src="/assets/WcRzbk0NIoEJRnx8fn3jOnBopRh.png" src-width="2334" src-height="582" align="center"/>

## 客户保证金

### 多头股票

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 保证金  &gt; 客户保证金 &gt; 多头股票</p>
</div>

<b>菜单功能介绍</b>：该菜单可以设置客户个性化多头股票保证金比例，在保证金计算时会优先取客户保证金比例。

1. 列表展示所有客户多头股票保证金设置

<img src="/assets/WMKnb62rtoSwfPxmRLMj9wz2p3b.png" src-width="1280" src-height="492" align="center"/>

1. 新建客户保证金：点击页面的【新建】可以打开创建弹窗页；客户和股票选择均支持选择单个客户/股票和客户组/股票组（客户组可在「风控管理」-「名单管理」-「客户组」配置；股票组可在「业务参数设置」-「风控」-「股票组」配置）；页面配置后提交即可完成创建

<img src="/assets/DOiqbW4Ybo7Knbx24uJjy55mp0f.png" src-width="3060" src-height="1174" align="center"/>

<img src="/assets/Ik2ebcQHIoRK4Nxqkstj1HUdpDb.png" src-width="3226" src-height="1698" align="center"/>

1. 同时，也可以通过【导入保证金数据】来新增客户保证金；进入弹窗下载模版根据模版填写后上传

<img src="/assets/KGOPbFZouofVH3xUEd0jLQolpUQ.png" src-width="3064" src-height="1298" align="center"/>

1. 文件上传【确认】后，在客户保证金列表中生成状态为生效中的记录；如需修改保证金比例，可以通过操作的【编辑】修改；也可以通过【置为失效】来失效客户保证金比例设置

<img src="/assets/V3TqbhQ2To2GvYx6otVjrunipJb.png" src-width="3060" src-height="1180" align="center"/>

1. 如需查看客户多头保证金历史设置记录，可在页面点击【变更记录】进行查询

<img src="/assets/SdUGbVb6covgqnxKL7RjjO9LpXf.png" src-width="3072" src-height="1174" align="center"/>

### 空头股票

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 保证金  &gt; 客户保证金 &gt; 空头股票</p>
</div>

客户空头股票保证金比例设置逻辑同「多头股票 (链接丢失)」，唯一不同的是空头股票多了“可卖空状态”和融券池规则设置，其卖空状态及融券池规则设置逻辑同「空头保证金」页面。

<img src="/assets/HIo7bNiDjoSOY9xB4NdjYKKVpQf.png" src-width="2342" src-height="852" align="center"/>

# 期权

## 期权行权

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 期权 &gt; 期权行权</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查看各行权日期权相关数据概览，并支持查看具体期权及操作行权。

1. 列表展示行权日期权整体数据总览

<img src="/assets/R4prb3jKuoybomx0bYdj9x3ppWd.png" src-width="3210" src-height="952" align="center"/>

1. 操作【详情】可以查看所有期权的行权情况

<img src="/assets/Z67QbvPxXo8hxYxVuiUjVn5gpmc.png" src-width="3208" src-height="610" align="center"/>

<img src="/assets/D2dObrzsYorARwxiO0QjYoWwpjd.png" src-width="3220" src-height="772" align="center"/>

1. 如需变更期权类型，可在不同tab的【编辑】弹窗进行操作

<img src="/assets/Gw4ebFKJXo0XrMxDTLkj2WXYpmQ.png" src-width="3246" src-height="1082" align="center"/>

1. 若需对某只期权行权（针对所有客户），可在列表的【行权】操作

<img src="/assets/QzH4bycjeoUnLxxbfMmjGW6WpbT.png" src-width="3156" src-height="384" align="center"/>

1. 如需查看某只期权下对应的所有客户，针对具体客户操作行权，可在【查看明细】页面进行操作

<img src="/assets/Kz2BbzhzToEgOSxhGY1jLtHjpxf.png" src-width="3295" src-height="594" align="center"/>

<img src="/assets/JPW0bZOv3o15njxolqAjGGo2p9b.png" src-width="3194" src-height="1152" align="center"/>

## 行权记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 期权 &gt; 行权记录</p>
</div>

<b>菜单功能介绍</b>：该页面主要用于查看期权到期放弃行权或到期行权操作后的记录明细。

<img src="/assets/TTp2bXzA2oc6T6x731pjIpiApHb.png" src-width="3218" src-height="1088" align="center"/>

## 末日期权

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 期权 &gt; 末日期权</p>
</div>

<b>菜单功能介绍</b>：该页面主要用于查看到期期权用户的持仓列表明细。

<img src="/assets/UIr7bg43doDtrvxnPUNj32DVpoh.png" src-width="3158" src-height="1324" align="center"/>

# 交易限额

该菜单提供一个完整维度来管理交易限额，其维度包含：

公司层面、客户层面、证券层面、交易员层面的交易限额控制

- 可限制公司整体的单日限额、所有客户的单日限额、所有证券的每日交易限额
- 可设定单个或批量客户的交易限额
- 可设定单个或批量证券的交易限额
- 可对交易员进行提示、批核、拒绝的限额设定
- 优先级：客户限额/证券限额/交易员限额/客户类别限额/多维度限额&gt;全局限额。

## 全局限额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 交易限额 &gt; 全局限额</p>
</div>

<b>菜单功能介绍</b>：该菜单展示所有的限额代码，若需新建限额代码（现有代码不支持规则），需联系长桥处理。

1. 通过列表操作项的【开启】和【关闭】可以生效/失效对应限额

<img src="/assets/HD2Pb22skonb5DxXfdtj0z1Upnc.png" src-width="3266" src-height="853" align="center"/>

1. 也可以编辑限额规则：

<img src="/assets/LWpIbu4DHogFKBxIPu6jU5O4pTN.png" src-width="3276" src-height="1638" align="center"/>

重点字段说明如下：

规则修改后需要工单审批方可生效

## 客户限额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 交易限额 &gt; 客户限额</p>
</div>

<b>菜单功能介绍</b>：客户限额仅支持全局限额中限额类型为「客户」的限额代码；支持单个/批量新增客户限额规则。

1. 新增客户限额规则

<img src="/assets/DoZNbPtvOoMnaAxvgZnjx0nIpNe.png" src-width="3244" src-height="1082" align="center"/>

1. 客户限额规则配置：支持单个客户录入和批量上传创建；此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/YO2Kb0ahnowouNxMSlbjp0S8plb.png" src-width="3270" src-height="1740" align="center"/>

新建客户限额

❤️注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 批量新建客户限额，需根据模板字段说明的要求填写上传文件

<img src="/assets/ClREbdLgqo4lBvxJ1MNjRMFJpVg.png" src-width="3282" src-height="1746" align="center"/>

1. 如需修改客户限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

<img src="/assets/WoQHbN1diona9UxZzYYj1fu8p3e.png" src-width="3327" src-height="735" align="center"/>

## 证券限额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 交易限额 &gt; 证券限额</p>
</div>

<b>菜单功能介绍</b>：证券限额仅支持全局限额中限额类型为「证券」的限额代码；支持单个/批量新增证券限额规则

1. 新增证券限额规则

<img src="/assets/X08IbfkgRosuQhxirpAjpRuMp5g.png" src-width="3252" src-height="1090" align="center"/>

1. 证券限额规则配置：支持单个证券代码录入和批量上传创建；此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/Uo8nba42aonOTFxWwSejkEDppOh.png" src-width="3276" src-height="1750" align="center"/>

❤️注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 批量新建证券限额，需根据模板字段说明的要求填写上传文件

<img src="/assets/RdgQb5kyAos9NIxRpI1j4D1Hpm9.png" src-width="3345" src-height="1816" align="center"/>

1. 如需修改证券限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效。同「客户限额」操作

## 交易员限额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 交易限额 &gt; 交易员限额</p>
</div>

<b>菜单功能介绍</b>：交易员限额仅支持全局限额中限额类型为「交易员」的限额代码。

1. 新增交易员限额规则

<img src="/assets/SqqjbGoYgoFhi9xziYIj9vsUpdq.png" src-width="3256" src-height="1082" align="center"/>

1. 交易员限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/R4htbj34ToFzt3xkLT7jIKlWpXe.png" src-width="3298" src-height="1640" align="center"/>

❤️注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 如需修改交易员限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效。同「客户限额」操作

## 客户类别限额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 交易限额 &gt; 客户类别限额</p>
</div>

<b>菜单功能介绍</b>：客户类别限额仅支持全局限额中限额类型为「客户」的限额代码。

1. 新增客户类别限额规则

<img src="/assets/BFxabHaiFobz3cxYilejerSTpVh.png" src-width="3248" src-height="836" align="center"/>

1. 客户类别限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/YMmgbJFfpoUJbNxiFqVjl2owpfe.png" src-width="3274" src-height="1604" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 批量新建证券限额，需根据模板字段说明的要求填写上传文件

<img src="/assets/N5eSbuZTKohxK2x2B62jEOo3pVf.png" src-width="3334" src-height="1829" align="center"/>

1. 如需修改客户类别限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效。同「客户限额」操作

## 多维度限额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 交易限额 &gt; 多维度交易限额</p>
</div>

<b>菜单功能介绍</b>：多维度限额仅支持全局限额中限额类型为「多维度」的限额代码。

1. 新增多维度限额规则

<img src="/assets/Rv5ZbHpc3oWYB0xec2GjVd3gp9e.png" src-width="3224" src-height="558" align="center"/>

1. 多维度限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/RhYtblEoMo4SCSxXyXIjRuvwp4e.png" src-width="3254" src-height="1628" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 如需修改多维度限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

# 名单管理

## 黑名单

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 名单管理 &gt; 黑名单</p>
</div>

<b>菜单功能介绍</b>：该菜单列表页展示当前所有黑名单，当前黑名单使用业务场景有授信和资产调拨。业务标签为“授信”的名单用户不会进行自动授信，且用户申请调额均会进入人工审核；业务标签为“资产调拨”的名单用户不支持使用购买力划转。

1. 列表页面

<img src="/assets/VT8bbhdbnoRwIMxnfBRj11kTpFh.png" src-width="3084" src-height="1654" align="center"/>

1. 可以点击【新建】按钮，新增一个黑名单客户。
    1. 名单维度：支持证券账号和客户编号，若选择证券账号仅对指定账号生效；若为客户编号，即针对该客户下的所有账户。
    2. 业务标签：支持配置不同业务标签黑名单，系统支持授信、资产调拨两种业务黑名单标签控制。可以同时选择两个业务标签，生成记录会根据业务标签分别生成两条记录。

<img src="/assets/DPnkbtYOCod7oVxnf8tjgOCcpYg.png" src-width="3080" src-height="1668" align="center"/>

1. 若黑名单量较大，可选择批量上传，实现批量新增黑名单，填写说明可参考模板说明提示。

<img src="/assets/XxFxbXM80oMpLPxahR2jm63mpVd.png" src-width="3082" src-height="1640" align="center"/>

1. 如需临时禁用黑名单，可以在【操作】列选择“禁用”；如后续需重新启用则再操作“启用”即可。如果需要将该名单彻底删除，则可直接操作“删除”。

<img src="/assets/X4BQbDK2To3ZlQx1olcj9BSXpNe.png" src-width="3072" src-height="1492" align="center"/>

## 客户组

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 名单管理 &gt; 客户组</p>
</div>

<b>菜单功能介绍</b>：该菜单可支持配置客户组，可在其他业务场景调用客户组，当前应用业务有保证金、报表（如需应用其他业务场景，可联系客户反馈）。

1. 新建客户组：选择客户组应用的业务类型，自定义客户组名称后提交即可完成创建

<img src="/assets/QxfbbgxzaoNuWKxcK0Hjm3WXpsh.png" src-width="3302" src-height="748" align="center"/>

<img src="/assets/Es8Ybpv2tof9dVxyacsjDOzGp5c.png" src-width="3284" src-height="1164" align="center"/>

1. 添加组内账户：客户组创建后，主列表页会生成一条客户组记录，点击【详情】可以进入添加组内账户页面；可在详情页面的【新建】或【批量导入】进行单个/批量增加组内账户

<img src="/assets/YQ9hbrVqOoOkBbx1fpcjoWxkpec.png" src-width="3302" src-height="862" align="center"/>

<img src="/assets/HWCxbt7RZoSPUsxHsqTjakJ3pdc.png" src-width="3296" src-height="638" align="center"/>

1. 管理组内账户：组内账户支持【删除】

<img src="/assets/XDinbZopvoQq7qx4fZujtzEgp4c.png" src-width="3278" src-height="568" align="center"/>

1. 管理客户组：客户组支持【编辑】组信息和【删除】

<img src="/assets/MocIbDaNqo8fALxkAryjMcFspJg.png" src-width="3288" src-height="824" align="center"/>

# 压力测试

基于SFC保证金指引的压力测试与股票、客户相关的监控。

## Margin Call压力测试

### 测试明细

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; Margin Call压力测试 &gt; 测试明细</p>
</div>

<b>菜单功能介绍</b>：该菜单可以支持新设不同的条件来计算 Margin Call 预警/非速冻资金盈余，每次新设都是分配一个任务 ID，当预计完成后，可以查询任务 ID 的执行状态与计算内容详情。

1. 新建模拟计算：系统支持股票组/股票市场/单一股票 三种模式的预计算，同时也支持是否将某种豁免规则配置在压力测试某个批次上；按需选择模拟计算类型及计算内容后，提交即可开始模拟计算

<img src="/assets/RZQBbvhGDoqlT8xiAWbj2ev7pae.png" src-width="3180" src-height="1246" align="center"/>

注： 相关豁免规则配置 请在执行菜单：「系统设置」&gt;「风控」&gt;「风控参数」菜单内配置

1. 当计算完毕，可以在记录右侧操作区，点选【详情】查看计算的结果

<img src="/assets/YRwObAm37oTQXfxYmZGjI3mkpMh.png" src-width="3184" src-height="1260" align="center"/>

1. 【详情】页面展示的列表数据可以用来评估模拟计算结果是否符合预期；如同时模拟计算margin call和非速冻资金盈余则会分开两个列表展示

<img src="/assets/QJ56bAKsuoPwsjxgm7xj6FRHpsb.png" src-width="3238" src-height="1592" align="center"/>

### 自定义数据

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; Margin Call压力测试 &gt; 自定义数据</p>
</div>

<b>菜单功能介绍</b>：该菜单可以维护股票保证金比例，将保证金比例的文档批次导入。

1. 按模版要求导入保证金比例，导入成功后则会在列表页展示

<img src="/assets/GSdIb3XZXoLQ0OxxD1mjaCkWpGw.png" src-width="2914" src-height="1272" align="center"/>

## 指数管理

### 指数级别

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; 指数管理 &gt; 指数级别</p>
</div>

<b>菜单功能介绍</b>：该菜单用来维护劵商保证金指引内所提及的指数级别。

1. 在页面点击【新建】可以新建指数级别

<img src="/assets/LuX5bPHTaoiE8WxGMadjZGCqpxd.png" src-width="3182" src-height="908" align="center"/>

1. 若需修改指数级别配置，可以在列表页的操作【编辑】；如配置无效或不再使用也可操作【删除】

<img src="/assets/GC2nbXgLXo2Fzixpdzdj08cVpYT.png" src-width="3166" src-height="696" align="center"/>

1. 若需要初始化数据，可以点选左侧区点选【初始化数据】，会将系统预设指数数据作初始化配置（会将 9 个 SFC 保证金指引要求的指数及级别初始化），但操作初始化不会影响用户自行添加的指数数据

### 股票指数

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; 指数管理 &gt; 股票指数</p>
</div>

<b>菜单功能介绍</b>：该菜单用来维护劵商保证金指引内所提及的股票指数。

1. 页面提供与行情数据同步功能【拉取基本数据】功能，点选后可以自动同步基本数据（此数据是提供给 Whale 产品始用的行情数据源）

<img src="/assets/CRsRbovK8oP8QtxIGltjWGy5pyb.png" src-width="3192" src-height="890" align="center"/>

1. 如果劵商若有更好的行情数据源，则可以自主批量导入，页面也有提供【批量导入】功能，提供导入模板下载，可先在模版上编辑后，再将资料导入

<img src="/assets/ENxNbQZ9poBuJVxFX9MjtZhWp5b.png" src-width="3196" src-height="866" align="center"/>

1. 若需修改股票指数代码，可以在列表页的操作【编辑】；如配置无效或不再使用也可操作【删除】

<img src="/assets/QDfLbfJBAowlH0xs7RSjytKIpEh.png" src-width="3246" src-height="578" align="center"/>

### 股票级别占比

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; 指数管理 &gt; 股票级别占比</p>
</div>

<b>菜单功能介绍</b>：该菜单展示股票级别占比，并支持模拟margin call计算。

1. 股票级别占比列表

<img src="/assets/U9YBbbJ7soIVVBxCzPijSBWypfg.png" src-width="2856" src-height="784" align="center"/>

1. 默认三个指数跌幅为页面计算好的跌幅，也可通过页面的【模拟Margin Call】功能进行人工修改并触发模拟计算

<img src="/assets/FNw4bopcYopME1xEDnMjbF12pfh.png" src-width="2856" src-height="1032" align="center"/>

## Haircut管理

根据FRR报表等相关的财务报表要求，需要计算抵押品的折扣价值。

### 股票Haircut管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; Haircut管理 &gt; 股票Haircut管理</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于管理股票Haircut。

1. 列表展示所有已设置Haircut的股票列表

<img src="/assets/Q6b5bm6P0olnGbxSl7cjYKsZp6d.png" src-width="3162" src-height="1132" align="center"/>

1. 可以点选左上角【添加股票 Haircut】 添加股票 haircut 纪录

<img src="/assets/P1DebHb8GoloYHx1VaojCi98p0c.png" src-width="3166" src-height="664" align="center"/>

1. 也可以在记录右侧操作区点选【编辑】 修改股票 haircut 数值

<img src="/assets/QVrabqa8non6dxxyceajcQbzpSe.png" src-width="3182" src-height="690" align="center"/>

1. 页面也支持批量导入 Haitcut， 可以点选左上角【批量导入】 ，可以下载导入模板按照其格式输入后，进行批量导入操作

<img src="/assets/KvtgbSuquoTQ1Lxe3TijokBUpDf.png" src-width="3178" src-height="588" align="center"/>

### 指数Haircut

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; Haircut管理 &gt; 指数Haircut</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于管理指数Haircut。

1. 指数部分与前述股票 Haircut 操作功能相同，但不支持批量导入

<img src="/assets/XMOybccPmoxTAJxo3WMjDdlFpkb.png" src-width="3196" src-height="704" align="center"/>

### Haircut修改记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; Haircut管理 &gt; Haircut修改记录</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查询所有Haircut修改记录。

<img src="/assets/CtOvb1cGKo9GfvxU5IcjSm5cpRT.png" src-width="3158" src-height="974" align="center"/>

Haircut修改记录列表页面

## 速动资金短欠

### 业务说明

主要通过模拟SFC的要求，进行速动资金的压力测试，从而得出Top 10股票集中度是否符合监管要求。

### 名词解释

### 速动资金短欠

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓</p>
<p>风控管理 &gt; 压力测试 &gt; 速动资金短欠 &gt; 速动资金短欠</p>
</div>

1. 列表展示历史创建的计算任务

<img src="/assets/BpY1bkuZGo1SUgxxjorjtP4Opzg.png" src-width="3328" src-height="1256" align="center"/>

历史任务列表

1. 点击『新建』，会创建一条新的计算任务，同时需要人工填写速动资金数据

<img src="/assets/Wosbb2vXYoX1WExukmjjdY4RpCd.png" src-width="3296" src-height="1682" align="center"/>

创建一个测试任务

1. 创建完成后，可点击『详情』，查看本次计算任务

<img src="/assets/HFc1b7mH8o9DrIxqY7KjG5JQphc.png" src-width="3290" src-height="1020" align="center"/>

查看计算结果

### 客户shortfall明细

1. 计算任务约1-5分钟完成，完成后可查看本次计算结果，首先会展示客户的shortfall明细

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❗</p>
<p>此页面仅会统计欠款客户，以及模拟客户持有的抵押物下跌30%及50%后的shortfall结果</p>
</div>

<img src="/assets/EJvUbXzuEo2XjuxdMEsjfBoXp7b.png" src-width="3264" src-height="1762" align="center"/>

shortfall明细

1. 点击详情可查看客户的持仓明细以及持仓中认可的资产值

<img src="/assets/LTY3blaPdok3AUxFHLGjzhsppwb.png" src-width="3286" src-height="1818" align="center"/>

持仓详情

### Top 10股票

1. <b>第一部分:LC数据。</b>

首先系统会根据财务所填写的LC，RLC资料得到ELC相关数据（速动资金英盈余）

<img src="/assets/I87ebdq6sorQL8xfjbXjaE04pKc.png" src-width="3286" src-height="1782" align="center"/>

LC数据

1. <b>第二部分:速动资金短欠</b>

此处数据模拟抵押物跌幅为x时的shortfall结果，同时会对比是否还有buffer（缓冲额）

buffer（缓冲额）= 50%速动资金盈余 - 速动资金短欠（shortfall）

<img src="/assets/AtdaboMalov5NhxQvg8jf0bCppe.png" src-width="3306" src-height="1800" align="center"/>

速动资金短欠

<b>股票跌幅 x 为一个变量，需要根据保证金指引规则得到，明细如下：</b>

依股票类别分别统计持股市值，比计算分类占比；根据抵押证券的组合成分，采用适当的假设性压力测试：可以每日所有市场闭市后计算 一次

(a) 以市值计算，若等级1的抵押品占比超过75%，则平均价格跌幅为参数a的值

(b) 以市值计算，若等级1和等级2的抵押品总占比超过75%，则平均价格跌幅为参数b的值

(c) 以市值计算，如果等级1和等级2的抵押品总占比在25%到75%之间，则平均价格跌幅为参数c的值

(d) 以市值计算，如果等级1和等级2的抵押品总占比在25%以下，则平均价格跌幅为参数d的值

1. <b>第三部分 : 速动资金短欠</b>

该部分数据会逐个模拟所有抵押物不可抵押后，对shortfall的影响，并根据shortfall影响最大的10只个股进行排序。

<img src="/assets/Jk99bxIkooZYNRxThiFjSwuspfZ.png" src-width="3288" src-height="1800" align="center"/>

Top 10股票

### 持仓明细

统计所有欠款客户持仓明细，作为计算shortfall的数据源

<img src="/assets/Lnhfb4FccoJ3HCx7hAYjPYQspYc.png" src-width="3300" src-height="1226" align="center"/>

持仓明细

