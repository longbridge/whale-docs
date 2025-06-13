---
title: 系统介绍
slug: VWyawtnPoizaJvkLjGIcgA5hngb
sidebar_position: 2
---


# 系统介绍

# 概述

风控管理主要用于处理证券业务下的保证金配置、额度管理、Margin Call 等相关功能。所涉相关模组主要如下：

<img src="/assets/UYs7wy0j7htzO6buvyPcbQpSnYy-board.png"/>

# 业务操作管理

## 授信额度

目前系统可提供的额度类型分融资额度和交易额度，其中交易额度是授于合作比较好的机构客户或现金账户，在购买力不足时，可使用交易额度进行交易；融资额度是针对 margin 账户，根据客户的资产信息等综合评估给用户的额度，客户可在该额度范围内使用额度。

### 融资授信

<b>关于自动授信</b>：

客户若开通 margin 账户，后面客户操作了转仓/入金，则系统自动会给客户授信一定的额度，客户可以进行保证金交易，系统支持自动授信机制（转仓到账/入金到账），整理自动授信流程如下：

<img src="/assets/BPYrbPRX7oEOn9xtqxKc6bpPnzb.png" src-width="953" src-height="733" align="center"/>

#### 客户额度

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 客户额度</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询所有授信客户额度情况，同时若有客户需求，也可支持人工给客户授信及调整额度。​

主要操作场景如下：

<b>调整客户额度</b>

1. 列表为所有融资授信客户，打开列表页的调整弹窗为已授信客户调整额度

<img src="/assets/CxZdbK9Aqo40AKxRkdRcrCQSn5g.png" src-width="3272" src-height="1394" align="center"/>

<img src="/assets/STahb2N8MohAnyxdV6ocDyM6n8g.png" src-width="3250" src-height="1754" align="center"/>

- 页面字段说明

<table header_row="1">
<colgroup>
<col width="132"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>融资额度</p></td><td><p>客户当前的融资额度</p></td></tr>
<tr><td><p>已用融资额度</p></td><td><p>客户当前已经使用的融资额度</p></td></tr>
<tr><td><p>剩余融资额度</p></td><td><p>客户剩余还可以使用的额度，剩余融资额度=融资额度 - 已用融资额度</p></td></tr>
<tr><td><p>实时计算授信额度</p></td><td><p>同“自动授信”计算逻辑</p></td></tr>
<tr><td><p>调整后额度</p></td><td><p>由人工填入</p></td></tr>
<tr><td><p>调整额度</p></td><td><p>根据人工填入的调整后额度自动计算，调整额度=调整后额度 - 融资额度</p></td></tr>
<tr><td><p>备注</p></td><td><p>由人工填入，若填入则会在「额度审批」页面的列表“备注”列展示</p></td></tr>
</tbody>
</table>

1. 确定【调整后额度】，提交则需要进入额度审批页面的对应记录进行额度审批；见「[额度审批](./VWyawtnPoizaJvkLjGIcgA5hngb)」

<b>新建授信客户</b>

1. 若客户未有资产入账，需要给未授信的客户授予额度，可以在列表页【新建授信客户】可以单个新增授信客户

<img src="/assets/XxEYbbUpJohgGDx2dBQcTBFsneU.png" src-width="3250" src-height="1396" align="center"/>

1. 弹窗页填写相关信息（若客户已在授信列表，提交时会提示，可以在主列表查看客户额度）

<img src="/assets/Rg5Ebf0TgoPQLZx1Msec5oRQn4c.png" src-width="3252" src-height="1398" align="center"/>

1. 若需一次性给多个客户授信，可以在列表右上方的【批量新增】操作

<img src="/assets/QBslbDMvEo5JxbxPRv9cQ8hmnxg.png" src-width="3262" src-height="1764" align="center"/>

1. 无论是单个还是批量新增，提交后都需在工单系统审批。审批通过后方可对客户额度生效

<b>删除已注销客户授信额度</b>

业务中可能存在有些客户账户已经注销，但仍会计算在公司总批核额度中，可以人工删除该部分客户额度。

1. 筛选注销状态的授信客户

<img src="/assets/QY71bhCkqouZlDxsNS5c4ITDnUb.png" src-width="3244" src-height="1392" align="center"/>

1. 选择并删除已注销的授信客户

<img src="/assets/Zvhkbdy9BooZOwxSNjdc1P7nnLf.png" src-width="3170" src-height="730" align="center"/>

<b>设置公司额度</b>

1. 根据客户整体额度汇总情况，若需同步调整公司额度进行额度管控，可以在页面列表上方【设置公司额度】进入相关页面操作

<img src="/assets/MbS8byHoZo0blix3SjgcP7wBnvg.png" src-width="3256" src-height="1390" align="center"/>

1. 公司额度设置：租户上线时，系统会默认初始化额度，后租户可根据业务需求进行自定义修改；修改各维度额度，可通过页面【编辑】操作。修改后，需要走工单审批通过即可完成修改

<img src="/assets/KqzubACiWoatnmxGrFIcBkmxnCc.png" src-width="3276" src-height="1730" align="center"/>

- 页面字段说明

<table header_column="1" header_row="1">
<colgroup>
<col width="144"/>
<col width="160"/>
<col width="416"/>
</colgroup>
<thead>
<tr><th><p><b>类别</b></p></th><th><p><b>字段</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td rowspan="3"><p>融资额度（HKD）​<br/>*币种由主币种决定</p></td><td><p>总融资额度</p></td><td><p>人工设定的公司层面可以授予的保证金融资授信总额度，所有客户累加额度不可超过该数值</p>
<blockquote>
<p>对应「客户额度」页面总融资图表的“总额度”</p>
</blockquote></td></tr>
<tr><td><p>已批融资额度</p></td><td><p>系统计算的已经批给客户的总额度</p></td></tr>
<tr><td><p>已批融资额度预警阈值</p></td><td><p>人工设定的批核额度阈值</p></td></tr>
<tr><td rowspan="5"><p>融资额度​<br/>*分币种 HKD&amp;USD</p></td><td><p>最大融资额度</p></td><td><p>人工设定的公司层面最大可融资额度</p></td></tr>
<tr><td><p>融资额度预警</p></td><td><p>人工设定的分币种融资额度预警阈值</p></td></tr>
<tr><td><p>已用融资额度</p></td><td><p>系统计算的客户已经使用的融资额度</p></td></tr>
<tr><td><p>垫资预警阈值</p></td><td><p>人工设定的垫资额度阈值</p></td></tr>
<tr><td><p>已垫资金额</p></td><td><p>系统计算的公司已垫资金额</p></td></tr>
</tbody>
</table>

#### 额度审批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 额度审批</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于审批授信额度，包含后台及客户发起的调整额度申请。

1. 在列表页的操作【提交审批】打开弹窗页面

<img src="/assets/GkWzbYssBocw1jxKgdOcn5W5nhh.png" src-width="3276" src-height="1216" align="center"/>

1. 提交审批弹窗页面确认额度并进行额度批注；同时，若确认不同意本次额度申请，可直接【拒绝】，无需提交工单审批

<img src="/assets/R0R5bS2IwogU3Yxr9BSc4HiZnJf.png" src-width="3328" src-height="1688" align="center"/>

- 页面字段说明

<table header_row="1">
<colgroup>
<col width="132"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>公司总额度</p></td><td><p>对应「公司额度设置页面」的总融资额度</p></td></tr>
<tr><td><p>公司剩余额度</p></td><td><p>剩余可以授信的额度，对应「公司额度设置页面」的总融资额度减去已批融资额度的差值</p></td></tr>
<tr><td><p>调整前额度</p></td><td><p>客户当前的融资额度</p></td></tr>
<tr><td><p>调整前关联账户总额度</p></td><td><p>=if[授信组总融资额度&lt;&gt;&#39;&#39;,  min(授信组总融资额度，member 总融资额度), member 总融资额度]</p></td></tr>
<tr><td><p>调整后额度</p></td><td><p>本次调整后的额度</p></td></tr>
<tr><td><p>系统计算授信额度</p></td><td><p>系统根据当前客户资产根据自动授信计算逻辑计算的额度</p></td></tr>
</tbody>
</table>

1. 确认信息后，提交审批，需在工单系统进行审批，审批完成后额度调整方可生效

❤️Tips：

提交工单审批可以根据额度区间条件设置审批流程，对应审批流工单标识`credit.credit_adjust `       

#### 客户 FPS

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 客户 FPS</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询客户保证金融资授信的 FPS 值（FPS 初始配置可在「业务参数设置」-「风控」-「授信客户参数」查看）及配置自定义 FPS 规则（可在全局 FPS 初始值上按定义维度配置值进行增减计算）。

<b>配置 FPS 规则</b>

1. 页面点击【规则配置】打开规则页面

<img src="/assets/NYEybucEzoRS4ix3avHcmLTLn0x.png" src-width="3288" src-height="796" align="center"/>

1. 规则配置：可以根据客户各方面维度设定阈值配置增减阈值，确定后生效规则

<img src="/assets/BSIKb8upsoHhEpxumtjcz3rknWh.png" src-width="3302" src-height="1620" align="center"/>

#### 授信组

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 授信组</p>
</div>

<b>菜单功能介绍</b>：该菜单用于设置授信组及管理授信组额度，组内客户额度使用不可超过组额度。如需将同一客户多个账户分组，或者将关联账户（如夫妻账户）分组等场景均可使用该功能。

<b>主列表页说明</b>

列表页可查看所有授信组及总授信额度；每个组的额度使用情况也会显示。如下图：

1. 总授信额度：当前所有授信组的组额度总和
2. 授信组信息：支持编辑组信息及给授信组添加新账户；授信额度会展示组额度及额度使用情况，若组内使用额度超过组额度，则进度条会红色提示
3. 组内账户信息：展示组内账户融资额度及使用情况，支持调整组内账户额度及将对应账户从授信组删除

<img src="/assets/Jfgdb8wm2oiUWkxXR0gcdHL8ned.png" src-width="3814" src-height="1614" align="center"/>

<b>创建授信组</b>

1. 新建授信组：如图操作

<img src="/assets/PFXdbZeTYoLotLxqjcbcnkgMnvg.png" src-width="3296" src-height="634" align="center"/>

1. 填写授信组信息：授信组账户在创建授信组时非必填，可在创建组后再分步通过【新增组内账户】实现；信息填写完成后提交即可成功创建组

<img src="/assets/UlLDbD0SAoxQcoxRCjAcU8ZJnQg.png" src-width="3252" src-height="1410" align="center"/>

1. 若添加的组内账户已有额度，则会自动带入其现额度，同时也可以修改额度

<img src="/assets/JdoGb4QGdof9obx3ZQKc8157n5d.png" src-width="3276" src-height="1424" align="center"/>

1. 授信组创建后，均可进一步修改组信息、新增/删除组内账户或调整组内账户额度

<img src="/assets/DYJRbYqXAovEQYxxEUKchfRinNh.png" src-width="3110" src-height="554" align="center"/>

#### 授信快照

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 授信快照</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询所有客户的历史每一次的授信记录，若需具体定位额度变更情况可以使用该功能。

<img src="/assets/Xwp5b7MHno2ZKgx11SichmidnOd.png" src-width="3246" src-height="1664" align="center"/>

#### 批量变更

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理  &gt; 授信额度 &gt; 融资授信 &gt; 批量变更</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于批量变更客户的保证金融资额度，主要使用场景为风控的定期额度巡检。进行批量变更的客户必须为「授信额度」页面的已授信客户。

<b>操作流程如下</b>：

1. 页面右上角可以操作【导入授信】

<img src="/assets/CFeUb44VsoEpb4xdI8fcGlo4nsh.png" src-width="3234" src-height="1062" align="center"/>

1. 操作导入：根据下载的模版按模版字段要求填写；填写完成后上传档；【确定】后则会在列表页生成一个“待确认”状态的任务

<img src="/assets/BcrYbbTALocyJ9xnSI0cmoernKc.png" src-width="3218" src-height="1172" align="center"/>

1. 在列表任务的【详情】进入批量变更客户额度二次确认页面

<img src="/assets/Pjx5bbxPao04ObxtBOwcD9W6nzh.png" src-width="3282" src-height="522" align="center"/>

1. 【详情】列表会展示本次提交确认的所有授信记录，若需要再次修改部分客户的额度可以在操作的【编辑】操作；也可以【删除】无需变更的客户记录

<img src="/assets/Qthnb997GoCnqHxovhScWWqNnod.png" src-width="3246" src-height="758" align="center"/>

1. 核对确认无误后，可以点击页面的右上角【批量调整】即可完成该批次调整

<img src="/assets/VYoxbvl1BoZGj0x1RU2citLmngh.png" src-width="3352" src-height="774" align="center"/>

### 客户融资

#### 已用明细

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 客户融资 &gt; 已用明细</p>
</div>

<b>菜单功能介绍</b>：该菜单分币种展示所有客户融资明细，供查询使用。

<img src="/assets/B2aQbzTucoUzuJxnEvUc1nbknZc.png" src-width="3174" src-height="1136" align="center"/>

#### 超额明细

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 客户融资 &gt; 超额明细</p>
</div>

<b>菜单功能介绍</b>：该菜单展示所有超额融资客户的明细数据，供查询使用。

<img src="/assets/Ih6Jbx3gvoltxtx0J3CcE1vBnzb.png" src-width="3174" src-height="1256" align="center"/>

### 交易额度

#### 客户交易额度

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 交易额度 &gt; 客户交易额度</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查询所有给过交易额度的客户，并支持新增、修改和生效/失效额度。交易额度在客户交易时会计入购买力，额度到期时则会自动失效。

<b>操作流程如下</b>：

1. 页面可通过【设置】设置 margin call 时是否自动失效交易额度，默认开启自动失效，可以进行修改，详细可见设置页面提示；修改需工单审批后方可生效

<img src="/assets/LWNbb6XVioIP0zxICR7cl8zqnwc.png" src-width="3296" src-height="1104" align="center"/>

1. 页面可以通过【新建】【批量新建】来给客户添加交易额度

<img src="/assets/AryobHCidopcelxYkVWcJM8AnGb.png" src-width="3346" src-height="694" align="center"/>

1. 配置客户交易额度，按页面要求填写后提交审批，提交信息可在「变更记录」查看；在工单系统审批通过后，方可在「客户交易额度」列表展示​
注：​
    1. 一个客户仅可存在一个交易额度类型
    2. 若客户已有同类型交易额度，系统则会默认以本次新增额度进行覆盖

<img src="/assets/EzqgbOplqoFzL8x5TNTcToi9nge.png" src-width="3346" src-height="1724" align="center"/>

1. 批量创建交易额度：下载文件模板并根据模板说明按要求填写文件后再上传，页面会展示文件解析结果；提交在工单系统审批通过后，方可在「客户交易额度」列表展示

<img src="/assets/JUUQbCFL5om1APxUwPwcHGLlnte.png" src-width="3298" src-height="1652" align="center"/>

1. 在列表页操作项【编辑】可修改客户交易额度，按页面配置修改后提交即可；操作方式同【新建】

<img src="/assets/IIl0bWmZ8ouBqLxUEW7cv62cnMc.png" src-width="3254" src-height="1624" align="center"/>

1. 状态已失效的客户可以通过【编辑】修改失效日期来生效客户交易额度；若需要对已生效的客户进行失效额度，则可通过操作列表的【置为失效】操作完成

<img src="/assets/ZBQEbmWg2oP2jzxKrLocnjfln1q.png" src-width="3268" src-height="305" align="center"/>

#### 变更记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 交易额度 &gt; 变更纪录</p>
</div>

<b>菜单功能介绍</b>：该菜单用户查看客户交易额度的所有变更记录。

<b>操作流程如下</b>：

1. 「客户交易额度」创建/编辑后会进入「变更记录」页面；列表操作的【工单详情】可以查看该交易额度记录的审批详情

<img src="/assets/RWIKbywciog61uxUc8CcT7n5ntb.png" src-width="3254" src-height="608" align="center"/>

### 借币提醒

一般劵商的客户账户都是采用综合购买力换算机制，能方便客户以非当地币别去交易当地币别股票（例：以港元交易美金股票），当客户成交后，就会涉及到客户账户的借币（劵商先提供自有外币给外国劵商作交易）后续客户就需要进行换汇操作，因此可以配置事先的借币换汇提醒，将客户换汇提醒事项列入风控管理维度。

<b>业务流程</b>

<img src="/assets/I7m6wIpgRhBxMybx8hpcJM1bnXh-board.png" src-width="772" src-height="191"/>

#### 提醒查询

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 提醒查询</p>
</div>

<b>菜单功能介绍</b>：该菜单可以查询所有提醒客户，支持配置借币提醒规则和人工兑换操作。

<b>操作流程如下</b>：

1. 点击列表右上角的【换汇规则】配置借币提醒规则

<img src="/assets/QjFtb8q3dohY9qxQ2b9cQqFGnCe.png" src-width="3296" src-height="1076" align="center"/>

1. 规则配置：单币种规则为非必配项，其他为必配项；规则仅在开启时运行
    1. 必配项的欠款金额和其他币种可提金额默认为主币种，所有币种转化为主币种计算
    2. 单币种规则和必配项规则只要有其一满足规则，即会提醒
    3. 单币种规则可以设置不同币种规则，支持添加和删除

<img src="/assets/GUJXbCmYGop6dfxrqOdcvao0nHe.png" src-width="3312" src-height="1716" align="center"/>

1. 规则配置后，选择开启并提交工单审核。审核通过后，系统则会运行规则，捞取符合规则的客户，结果在「提醒查询」列表展示。此外，交易日均会定期执行规则并给符合规则的客户发送借币提醒消息，通知客户主动换汇。页面操作【换汇用户捞取】可刷新列表，过滤不再满足规则的客户

<img src="/assets/HlKsbk6ruot71rxggRjcKx6infe.png" src-width="3286" src-height="970" align="center"/>

1. 同时，开启规则后，客户在 App 上可以对应查看【自动还款】功能，可以自主选择开启该功能。若客户打开自动还款，当命中规则时，系统将进行自动换汇或后台操作人工兑换
    1. App 端「自动还款」
    <img src="/assets/T6iNbFRaBokTo0x0kQPcHPlznuX.png" src-width="1170" src-height="2532" align="center"/>
    1. App 若开启「自动还款」，页面「自动换汇」则为「开启」，支持操作【兑换】
    <img src="/assets/BFmWbrCjIoiyV1xTGJBcz7hDnIg.png" src-width="3216" src-height="682" align="center"/>

2. 兑换：开启自动还款的客户会默认系统自动兑换；在系统自动兑换之前，页面可支持人工兑换。列表操作【详情】支持查看客户实时数据、消息记录和兑换记录；人工兑换弹窗页面也可查看当前客户现金情况，配置兑入/兑出金额和币种确认兑换即可

<img src="/assets/S4kJbnbZgoQyjAxUlbVcRPUpn69.png" src-width="3274" src-height="1640" align="center"/>

<img src="/assets/Dxo0bPGLkoBbDRxAOlvcd48unih.png" src-width="3222" src-height="1220" align="center"/>

1. 兑换结果查看：人工/自动兑换完成后，若剩余资产仍命中规则，则仍会在提醒查询列表；若不再命中规则则会进入历史记录，可在「[历史记录](./VWyawtnPoizaJvkLjGIcgA5hngb)」查看相关详情；若命中换汇审核/换汇失败，可在【换汇异常】页面查看异常单（换汇审核中需在「款项管理」-「换汇」-「客户汇兑」页面进行人工审核）

<img src="/assets/GS1dbmbnSooY1NxBRzWcakSSnme.png" src-width="3290" src-height="1072" align="center"/>

#### 历史记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 历史纪录</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询历史所有的提醒客户及相关提醒兑换详情。

<img src="/assets/GixebJJjMoXwxFxNY9PcBNmcnug.png" src-width="3198" src-height="1070" align="center"/>

#### 快照

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 快照</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询快照时刻的欠款/可兑换金额以及现金/余额通数据。

<img src="/assets/YXbGb7ywSowhQWxrlibc7bMkn7k.png" src-width="3314" src-height="1558" align="center"/>

#### 自动还款开通查询

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 授信额度 &gt; 借币提醒 &gt; 自动还款开通查询</p>
</div>

<b>菜单功能介绍</b>：该菜单可以查询开通自动还款功能的客户（只要历史开通过的客户均支持查询，根据状态区分当前是否开通）。

<img src="/assets/FkxgbzK19ogwMuxk4cXcoZgEnef.png" src-width="3248" src-height="1642" align="center"/>

## Margin Call

当客户的资产净值，因市场波动而下跌至低于维持保证金水平时，系统会向客户发出 Margin Call 通知，客户必须在 3 个交易日补充资金或平仓，否则业务上有权替客户进行平仓，而无须事先通知。

<b>业务流程</b>：

<img src="/assets/K7YxwjkBUh6E07bYohpc5cvcn4c-board.png" src-width="772" src-height="191"/>

### 风险预警

#### 实时预警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 实时预警</p>
</div>

<b>菜单功能介绍</b>：该菜单支持实时的保证金预警监控。

1. 列表展示所有当前预警客户记录，在左侧区会有 绿色文字实时相关更新提示（实时更新最新计算结果）；同时在上方区域会加总目前 预警纪录的追保金额与 长期未结清追保金额的 汇总额

<img src="/assets/Eb9zbk0ugo94NAxSElBcJSZjnyd.png" src-width="3262" src-height="796" align="center"/>

<b>页面基础字段说明</b>：

<table>
<colgroup>
<col width="160"/>
<col width="511"/>
</colgroup>
<tbody>
<tr><td><p><b>字段</b></p></td><td><p><b>说明</b></p></td></tr>
<tr><td><p>合计追保金额</p></td><td><p>列表所有 margin call 客户应追缴保证金总额</p></td></tr>
<tr><td><p>长期未结清追保金额</p></td><td><p>触发预警超过 90 天的应追缴保证金总额</p></td></tr>
<tr><td><p>预警类型</p></td><td><p>用户触发 margin call 的类型</p></td></tr>
<tr><td><p>截止日期</p></td><td><p>用户 margin call 的最后截止日；超出截止日，系统将不再发送消息</p></td></tr>
<tr><td><p>已触发时长</p></td><td><p>当前时间 - 触发预警时间（时间不足一小时按一小时处理）</p></td></tr>
<tr><td><p>净资产比率</p></td><td><p>净资产比率 = 可流动净资产/max[可流动净资产, 多头持仓市值 - 退市及长期停牌股票市值 + abs(空头持仓市值)]</p></td></tr>
<tr><td><p>可流动净资产</p></td><td><p>股权资产 - 退市及长期停牌股票市值</p></td></tr>
<tr><td><p>股权资产</p></td><td><p>总现金 + 总持仓市值（总股票及衍生品持仓市值）</p></td></tr>
<tr><td><p>应追缴保证金</p></td><td><p>max (margin call 保证金 - 净资产 + 应收利息 + 欠款保证金 - 交易额度，超额融资额度)<br/>*具体可在 WBO 后台进行配置</p></td></tr>
</tbody>
</table>

1. 同时对于列入监控预警的客户，可以点选记录后，可以进行后续操作：发送消息//平仓操作/设置自动平仓

<img src="/assets/TryhbDzfronQenxyUUCcYrk7nlc.png" src-width="3230" src-height="1145" align="center"/>

1. 如果操作批量平仓动作时，可以选择是否平仓特定股票平仓；批量平仓需要在业务参数设置的平仓开关页面开启后才可使用

<img src="/assets/Hsk9b9caxo3LW6xIHx4cGnSSn8c.png" src-width="3248" src-height="1294" align="center"/>

1. 设置自动平仓：可以自定义设置自动平仓时间；同时，也可以根据业务实际情况自定义调整某些 Margin Call 的截止日期

<img src="/assets/W54lbRGVlox4KYxSG9Jc7oPDncf.png" src-width="3222" src-height="1306" align="center"/>

1. 也可以对列入监控预警的客户，在记录区右侧点选【详情】，提供该客户的资金摘要与持仓资料与正在平仓的股票清单；支持在详情页操作【平仓】或者【发送消息】

<img src="/assets/ZO5Rbam1AoOxCWx3xI1cZUjTnvb.png" src-width="3158" src-height="506" align="center"/>

<img src="/assets/SnTybAHepoqhFkxnQaAcgFVEnvd.png" src-width="3252" src-height="1632" align="center"/>

1. 对当前预警记录进行编辑备注，便于后续处理或给其他人参考​；同时，若标注为异常单，也可在列表页面的【异常单】查看记录

<img src="/assets/WwyrbvZ3so10mQx2YVwcJUzunXg.png" src-width="3150" src-height="466" align="center"/>

<img src="/assets/Vqb4b0ou9oijgYxEyNvc0etznbc.png" src-width="3156" src-height="1140" align="center"/>

#### 日内融实时预警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 日内融实时预警</p>
</div>

<b>菜单功能介绍</b>：该菜单功能及操作逻辑同「实时预警」，针对客户对象仅为日内融账户。

<img src="/assets/PdLrbubJuoKOmbxq336cRytPnvb.png" src-width="3212" src-height="700" align="center"/>

#### 历史记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 历史记录</p>
</div>

<b>菜单功能介绍</b>：margin call 结束后会进入历史记录页面，该菜单下可以查看历史 margin call 订单的详细信息。

1. 点击列表页的【详情】可以查看 margin call 触发前后的详细数据

<img src="/assets/D269bVtCYosDvmx8TNecJkRcngb.png" src-width="3300" src-height="736" align="center"/>

#### 快照

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 快照</p>
</div>

<b>菜单功能介绍</b>：当客户触发 margin call 后，需要保留当时客户触发 margin call 时的历史数据记录是可追溯，日后可以作为 RO 或相关合规的参考，附为上报给监管的依据，因此 margin call 历史记录需要在部分场景下记录快照数据。

场景如下：触发 margin call  /触发 force call / 触发通知/每日定时记录 /结束 margin call

<img src="/assets/P5zBbu3xJoG7PHxcgeFcd0gqnMh.png" src-width="3296" src-height="786" align="center"/>

#### 融券持仓概览

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 融券持仓概览</p>
</div>

<b>菜单功能介绍</b>：当 IB 不可融资时，会进行提前通知做股票召回或者强制平仓，对应我们也要通知用户做强制平仓。该菜单支持查看整体融券的使用情况并操作平仓。

1. 列表页查看整体融券信息

<img src="/assets/ERGqbwB5comLkixYwjVcCMXynid.png" src-width="3220" src-height="786" align="center"/>

1. 点击【详情】，可查看该空头股票对应客户详情

<img src="/assets/RapDb10RwoPCBixBU1PcuwkXnlc.png" src-width="3084" src-height="522" align="center"/>

1. 详情页面可以操作平仓或发送 margin call 消息，操作方式同「实时预警」

<img src="/assets/UFPKbvIlYo7RaLxAfIecyQiwntf.png" src-width="3030" src-height="522" align="center"/>

#### 不良信贷处理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 风险预警 &gt; 不良信贷处理</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查询不良信贷客户数据。

<img src="/assets/FXkQb6ptroSilexXrZIcMPl2nXT.png" src-width="3270" src-height="1624" align="center"/>

### 股票追收

#### 期权备兑追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 股票追收 &gt; 期权备兑追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示期权备兑正股不足，需要追收股票的记录。

1. 列表展示所有追收记录

<img src="/assets/EKk4bdpShoFmnCxQJ8WcdMkCnPd.png" src-width="3216" src-height="576" align="center"/>

1. 点击【详情】可以进一步查看客户 margin call 详情，并支持对期权操作【平仓】

<img src="/assets/GFq5bIiORoJcCQxKx7UcjY3zn7f.png" src-width="3262" src-height="1626" align="center"/>

#### 空头股票追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 股票追收 &gt; 空头股票追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示需要追收的空头股票记录（非实时更新）。

1. 列表展示所有追收记录

<img src="/assets/O6e9bPgVJoZyIvx0Senca3AFnSc.png" src-width="3234" src-height="720" align="center"/>

1. 点击【详情】可以进一步查看客户 margin call 详情，并支持对空头股票操作【平仓】

<img src="/assets/TKyfb5oBzo0CxjxWkgycu3MmnJf.png" src-width="3252" src-height="1608" align="center"/>

### 平仓订单

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; Margin Call  &gt; 平仓订单</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查看所有平仓记录，以及若出现平仓操作错误，可以进行撤单。

<img src="/assets/ZkxhbCFDAoJXvtx8frgcXLsFnyg.png" src-width="3312" src-height="856" align="center"/>

## 保证金

股票的保证金作为港美股券商风控的逻辑之一，用于计算购买力、margin call 等场景，一般来讲可保证金交易的股票是风险偏低的股票。该菜单主要提供保证金设置功能。

### 股票保证金

#### 多头股票保证金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 多头股票保证金</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于设置多头股票保证金比例。

1. 列表展示所有股票保证金设置现状

<img src="/assets/EsfabTBLBoexlTx91xbcOK9EnQf.png" src-width="2636" src-height="1020" align="center"/>

1. 可以在【新建】按钮，新增单个股票保证金比例（注：若该股票已存在，数据会覆盖，以本次设置为准）

<img src="/assets/SUg1bmHshowLV2xArcic3s9knKh.png" src-width="2294" src-height="636" align="center"/>

<img src="/assets/NJVPbhrorog1Cyxy2MJcVEjSnRf.png" src-width="3322" src-height="1640" align="center"/>

1. 批量设置保证金比例：下载模板后根据模板字段说明填写并上传文件

<img src="/assets/Dfewbq5Vfol5hRx7S3AcuRAXnDt.png" src-width="3200" src-height="1012" align="center"/>

1. 无论是单个新建还是批量上传，都会在「设置记录」生成记录，操作见「[设置纪录](./VWyawtnPoizaJvkLjGIcgA5hngb)」菜单
2. 若股票保证金设置已存在，需要修改比例，则可以在列表操作【编辑】，编辑操作流程同新增；如需删除某只股票的保证集比例设置，可以操作【删除】

<img src="/assets/VGsNbHo1FoCnKoxq0PvcnS2InPc.png" src-width="3058" src-height="428" align="center"/>

1. 股票状态可能变更，可以通过列表右上角的【拉取个股状态】刷新最新状态

<img src="/assets/IbdbbjwSBomBAYxx2qYc1RnJnoe.png" src-width="2278" src-height="534" align="center"/>

#### 日内交易实时保证金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 日内交易实时保证金</p>
</div>

<b>菜单功能介绍</b>：针对日内融业务，可以单独设置支持日内交易的股票保证金比例。

1. 列表展示所有支持日内交易的股票保证金比例记录；系统会自动根据交易时段变更保证金状态，相关规则可在页面的【规则设置】进行设置

<img src="/assets/E0A0bn3rroUiCrxOy3Kc2QcOn3c.png" src-width="2352" src-height="978" align="center"/>

1. 页面的【新增】和【批量上传】可以单个新增或批量新增日内交易股票的保证金比例设置；操作流程同「股票保证金」

<img src="/assets/E0HgbXEd6ogYFJxhMPvcEATfnIb.png" src-width="2320" src-height="782" align="center"/>

1. 在纪录右侧操作区，进行【编辑】或【删除】

<img src="/assets/CRwvbMYsjovCGwxQmgScSEvznEh.png" src-width="2294" src-height="784" align="center"/>

<img src="/assets/PDX3bM4rAojeyAxpwkNcQY2unUQ.png" src-width="2380" src-height="1282" align="center"/>

注意：若其中若状态为失效，则说明保证金比例默认为 100%

#### 设置记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 设置记录</p>
</div>

<b>菜单功能介绍</b>：该菜单用来查看股票保证金/日内交易实时保证金比例的设置记录以及进行人工同步/取消同步操作。

1. 「股票保证金」「日内交易实时保证金」新增或编辑提交后会在比率设置记录中会生成未触发的该保证金设置记录，也可以点击【取消同步】则取消设置，不作记录，此时点击【同步】，该记录状态变更为已触发，同时在主页生成一条股票保证金记录（若新增的为已存在的股票则更新原记录）；点击【取消同步】，则记录状态变更为已撤销，该设置不生效；若不操作人工同步，系统将在设定的有效期生效对应设置

<img src="/assets/DjBxblhOto5cixxTAGmcaI82n4d.png" src-width="2316" src-height="862" align="center"/>

#### 空头保证金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 保证金  &gt; 股票保证金 &gt; 空头保证金</p>
</div>

<b>菜单功能介绍</b>：针对空头业务，可以单独设置支持空头股票保证金比例。

1. 列表展示所有支持空头股票保证金比例记录

<img src="/assets/DCUrb1zYuoGfsRxQpavcjR9ynge.png" src-width="2352" src-height="860" align="center"/>

1. 支持批量上传：下载模板文件根据文件要求填写后上传

<img src="/assets/XKC7b20AsoLMIMxF62qcu55znmh.png" src-width="2298" src-height="816" align="center"/>

1. 也可点击纪录区【编辑】修改纪录
    <b>可卖空状态说明</b>：总共有三种状态
    - 允许卖空：融券池充足，当前股票支持卖空
    - 禁止卖空：人工设置不可卖空，代表股票不支持融券
    - 系统自动禁止：若人工设置融券池数量规则，当融券池数量达到自动关闭规则时，则系统会自动禁止卖空，对客户感知为该股票支持融券，但融券池数量不足导致无法卖空；同时若满足自动恢复卖空规则，则系统会恢复“允许卖空”

<img src="/assets/DwuobJpBtoRLAPxiWvFczClenwh.png" src-width="2298" src-height="1280" align="center"/>

❤️Tips：

融券池数量规则设置：自动恢复卖空数量需大于等于自动关闭卖空数量。

1. 点击页面的【变更记录】可以查看历史所有空头保证金的变更记录

<img src="/assets/BWZWbDdkVo6BKqxCbDSc35HqnTc.png" src-width="2334" src-height="582" align="center"/>

### 客户保证金

#### 多头股票

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 保证金  &gt; 客户保证金 &gt; 多头股票</p>
</div>

<b>菜单功能介绍</b>：该菜单可以设置客户个性化多头股票保证金比例，在保证金计算时会优先取客户保证金比例。

1. 列表展示所有客户多头股票保证金设置

<img src="/assets/MXpWbRkVwojADnxYPi9cSQ5nn8f.png" src-width="1280" src-height="492" align="center"/>

1. 新建客户保证金：点击页面的【新建】可以打开创建弹窗页；客户和股票选择均支持选择单个客户/股票和客户组/股票组（客户组可在「风控管理」-「名单管理」-「客户组」配置；股票组可在「业务参数设置」-「风控」-「股票组」配置）；页面配置后提交即可完成创建

<img src="/assets/Pc8jbndnuoIm9AxKKLjcHM35nme.png" src-width="3060" src-height="1174" align="center"/>

<img src="/assets/MuggblAOJoxOmDxvKJccvr6DnEh.png" src-width="3226" src-height="1698" align="center"/>

1. 同时，也可以通过【导入保证金数据】来新增客户保证金；进入弹窗下载模版根据模版填写后上传

<img src="/assets/TT0ObpTYFoqClBxUSstcg0rFn5d.png" src-width="3064" src-height="1298" align="center"/>

1. 文件上传【确认】后，在客户保证金列表中生成状态为生效中的记录；如需修改保证金比例，可以通过操作的【编辑】修改；也可以通过【置为失效】来失效客户保证金比例设置

<img src="/assets/FqCQbfKSRoPLdvxx0F6ciPQinVo.png" src-width="3060" src-height="1180" align="center"/>

1. 如需查看客户多头保证金历史设置记录，可在页面点击【变更记录】进行查询

<img src="/assets/MyhObCtsSo79e1xUtdHcrIyynuh.png" src-width="3072" src-height="1174" align="center"/>

#### 空头股票

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 保证金  &gt; 客户保证金 &gt; 空头股票</p>
</div>

客户空头股票保证金比例设置逻辑同「[多头股票](./VWyawtnPoizaJvkLjGIcgA5hngb)」，唯一不同的是空头股票多了“可卖空状态”和融券池规则设置，其卖空状态及融券池规则设置逻辑同「空头保证金」页面。

<img src="/assets/J53NbXrv5oMANqxN6DYcbRz4nBd.png" src-width="2342" src-height="852" align="center"/>

## 期权

### 期权行权

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 期权 &gt; 期权行权</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于查看各行权日期权相关数据概览，并支持查看具体期权及操作行权。

1. 列表展示行权日期权整体数据总览

<img src="/assets/PdFSbguYLohXPFxZrCTcdZwLn6g.png" src-width="3210" src-height="952" align="center"/>

1. 操作【详情】可以查看所有期权的行权情况

<img src="/assets/Q2TEb5ktMo4EV1xq4jzcXcDEnsh.png" src-width="3208" src-height="610" align="center"/>

<img src="/assets/LfQubs4cdov4GmxEIQKcLsIJnWd.png" src-width="3220" src-height="772" align="center"/>

1. 如需变更期权类型，可在不同 tab 的【编辑】弹窗进行操作

<img src="/assets/V6VrbAXqbofqDKxndXXcaD05nIf.png" src-width="3246" src-height="1082" align="center"/>

1. 若需对某只期权行权（针对所有客户），可在列表的【行权】操作

<img src="/assets/EKNAbsaDeoWQ1zxlDNKcxIo7njh.png" src-width="3156" src-height="384" align="center"/>

1. 如需查看某只期权下对应的所有客户，针对具体客户操作行权，可在【查看明细】页面进行操作

<img src="/assets/HK3KbN9VDoVesjxmPMCcvxzNnnd.png" src-width="3295" src-height="594" align="center"/>

<img src="/assets/JuQ4bclOgofN2nxc2e9cYnyNnwb.png" src-width="3194" src-height="1152" align="center"/>

### 行权记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 期权 &gt; 行权记录</p>
</div>

<b>菜单功能介绍</b>：该页面主要用于查看期权到期放弃行权或到期行权操作后的记录明细。

<img src="/assets/GgLSbayxmoyIpMxDlwRcKKl3nm9.png" src-width="3218" src-height="1088" align="center"/>

### 末日期权

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 期权 &gt; 末日期权</p>
</div>

<b>菜单功能介绍</b>：该页面主要用于查看到期期权用户的持仓列表明细。

<img src="/assets/SYjCbBFoRoO1ELxeT46cXzponoa.png" src-width="3158" src-height="1324" align="center"/>

## 交易限额

该菜单提供一个完整维度来管理交易限额，其维度包含：

公司层面、客户层面、证券层面、交易员层面的交易限额控制

- 可限制公司整体的单日限额、所有客户的单日限额、所有证券的每日交易限额
- 可设定单个或批量客户的交易限额 
- 可设定单个或批量证券的交易限额 
- 可对交易员进行提示、批核、拒绝的限额设定
- 优先级：客户限额/证券限额/交易员限额/客户类别限额/多维度限额&gt;全局限额。

### 全局限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 交易限额 &gt; 全局限额</p>
</div>

<b>菜单功能介绍</b>：该菜单展示所有的限额代码，若需新建限额代码（现有代码不支持规则），需联系长桥处理。

1. 通过列表操作项的【开启】和【关闭】可以生效/失效对应限额

<img src="/assets/A96kbT7QZoCUCTx33LIc4xpWnyb.png" src-width="3266" src-height="853" align="center"/>

1. 也可以编辑限额规则：

<img src="/assets/MSH4bQrLMofwD1xgseYcBDfQnbf.png" src-width="3276" src-height="1638" align="center"/>

重点字段说明如下：

<table header_column="1" header_row="1">
<colgroup>
<col width="172"/>
<col width="612"/>
</colgroup>
<thead>
<tr><th><p>字段名称</p></th><th><p>说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>限额币种</p></td><td><p>无：则为纯数量的判断，与金额无关<br/>HKD：则全部转化为 HKD 计算限额<br/>USD：则全部转化为 USD 计算限额 </p></td></tr>
<tr><td><p>限制的条件类型</p></td><td><p>可选项为：&gt;=， &gt;， =&lt;， &lt;，无限，限制<br/>无限类型无需填阈值，其他均需填入阈值，仅限数字格式</p></td></tr>
</tbody>
</table>

规则修改后需要工单审批方可生效

### 客户限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 交易限额 &gt; 客户限额</p>
</div>

<b>菜单功能介绍</b>：客户限额仅支持全局限额中限额类型为「客户」的限额代码；支持单个/批量新增客户限额规则。

1. 新增客户限额规则

<img src="/assets/UEBcboEDSoPYl0xY5VucHe4lnag.png" src-width="3244" src-height="1082" align="center"/>

1. 客户限额规则配置：支持单个客户录入和批量上传创建；此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/UsWdbRJrjo3pLRxFQkLcbtnEnic.png" src-width="3270" src-height="1740" align="center"/>

❤️注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 批量新建客户限额，需根据模板字段说明的要求填写上传文件

<img src="/assets/HlgHbV2KsoGrVmxilzRcpMDwnxg.png" src-width="3282" src-height="1746" align="center"/>

1. 如需修改客户限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

<img src="/assets/PrdQb98onoqbJjxmEZtcmF9gnyq.png" src-width="3327" src-height="735" align="center"/>

### 证券限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 交易限额 &gt; 证券限额</p>
</div>

<b>菜单功能介绍</b>：证券限额仅支持全局限额中限额类型为「证券」的限额代码；支持单个/批量新增证券限额规则

1. 新增证券限额规则

<img src="/assets/WDQBbqejUoo6IAx7Wp9cXYJ4nly.png" src-width="3252" src-height="1090" align="center"/>

1. 证券限额规则配置：支持单个证券代码录入和批量上传创建；此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/Jl4bbC88zo35p5x7smncIOzUnBe.png" src-width="3276" src-height="1750" align="center"/>

❤️注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 批量新建证券限额，需根据模板字段说明的要求填写上传文件

<img src="/assets/RA6EbnvTloZzJ8xfDCfcN7nrnad.png" src-width="3345" src-height="1816" align="center"/>

1. 如需修改证券限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效。同「客户限额」操作

### 交易员限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 交易限额 &gt; 交易员限额</p>
</div>

<b>菜单功能介绍</b>：交易员限额仅支持全局限额中限额类型为「交易员」的限额代码。

1. 新增交易员限额规则

<img src="/assets/Iv8Gbz5WHoZ0vSx0sSRcWaUinKe.png" src-width="3256" src-height="1082" align="center"/>

1. 交易员限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/ITuYbhyfUo5estxVnZocbcFlngb.png" src-width="3298" src-height="1640" align="center"/>

❤️注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 如需修改交易员限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效。同「客户限额」操作

### 客户类别限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 交易限额 &gt; 客户类别限额</p>
</div>

<b>菜单功能介绍</b>：客户类别限额仅支持全局限额中限额类型为「客户」的限额代码。

1. 新增客户类别限额规则

<img src="/assets/R8CpbAPiAoHvH4xBGtPcV8tLnHh.png" src-width="3248" src-height="836" align="center"/>

1. 客户类别限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/TLuQbSxbeoaoA3ximNlcahZxnoe.png" src-width="3274" src-height="1604" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 批量新建证券限额，需根据模板字段说明的要求填写上传文件

<img src="/assets/KeWLbI9tuomNhmxQqlfcUSVGn6d.png" src-width="3334" src-height="1829" align="center"/>

1. 如需修改客户类别限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效。同「客户限额」操作

### 多维度限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 交易限额 &gt; 多维度交易限额</p>
</div>

<b>菜单功能介绍</b>：多维度限额仅支持全局限额中限额类型为「多维度」的限额代码。

1. 新增多维度限额规则

<img src="/assets/GqkSbQTWio9ScaxHekhcD0VenHc.png" src-width="3224" src-height="558" align="center"/>

1. 多维度限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/VJwjbwxF0oDP3Yx0pKCcYPm9nqc.png" src-width="3254" src-height="1628" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

1. 如需修改多维度限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

## 名单管理

### 黑名单

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 名单管理 &gt; 黑名单</p>
</div>

<b>菜单功能介绍</b>：该菜单列表页展示当前所有黑名单，当前黑名单使用业务场景有授信和资产调拨。业务标签为“授信”的名单用户不会进行自动授信，且用户申请调额均会进入人工审核；业务标签为“资产调拨”的名单用户不支持使用购买力划转。

1. 列表页面

<img src="/assets/UtxFbzUDfoAsmhxcC6dcq5J6nbh.png" src-width="3084" src-height="1654" align="center"/>

1. 可以点击【新建】按钮，新增一个黑名单客户。
    1. 名单维度：支持证券账号和客户编号，若选择证券账号仅对指定账号生效；若为客户编号，即针对该客户下的所有账户。
    2. 业务标签：支持配置不同业务标签黑名单，系统支持授信、资产调拨两种业务黑名单标签控制。可以同时选择两个业务标签，生成记录会根据业务标签分别生成两条记录。

<img src="/assets/RzDwbGdcXosmi9xkoyRct80Xnwb.png" src-width="3080" src-height="1668" align="center"/>

1. 若黑名单量较大，可选择批量上传，实现批量新增黑名单，填写说明可参考模板说明提示。

<img src="/assets/D8vDb8T6GoWh6Px5oBKcGBzbnqb.png" src-width="3082" src-height="1640" align="center"/>

1. 如需临时禁用黑名单，可以在【操作】列选择“禁用”；如后续需重新启用则再操作“启用”即可。如果需要将该名单彻底删除，则可直接操作“删除”。

<img src="/assets/GQNTbi5R1oVHtoxfeNqcPvgpn2b.png" src-width="3072" src-height="1492" align="center"/>

### 客户组

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 名单管理 &gt; 客户组</p>
</div>

<b>菜单功能介绍</b>：该菜单可支持配置客户组，可在其他业务场景调用客户组，当前应用业务有保证金、报表（如需应用其他业务场景，可联系客户反馈）。

1. 新建客户组：选择客户组应用的业务类型，自定义客户组名称后提交即可完成创建

<img src="/assets/CkzgbeDMtovoX8xW0m3cnR32nYb.png" src-width="3302" src-height="748" align="center"/>

<img src="/assets/XNlLbxd3yoTN0HxDZfCcjWFznlc.png" src-width="3284" src-height="1164" align="center"/>

1. 添加组内账户：客户组创建后，主列表页会生成一条客户组记录，点击【详情】可以进入添加组内账户页面；可在详情页面的【新建】或【批量导入】进行单个/批量增加组内账户

<img src="/assets/T17BblV4toWv6txuhthcwpZrnEc.png" src-width="3302" src-height="862" align="center"/>

<img src="/assets/DcSmbtDT4oPgNoxQgrrcBgUGnUf.png" src-width="3296" src-height="638" align="center"/>

1. 管理组内账户：组内账户支持【删除】

<img src="/assets/M2xibgKd8ohXAIxLC8scemafnjh.png" src-width="3278" src-height="568" align="center"/>

1. 管理客户组：客户组支持【编辑】组信息和【删除】

<img src="/assets/AqCkbUVesoJc0gxFkLnc76FDnIg.png" src-width="3288" src-height="824" align="center"/>

## 压力测试

基于 SFC 保证金指引的压力测试与股票、客户相关的监控。

### Margin Call 压力测试

#### 测试明细

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; Margin Call 压力测试 &gt; 测试明细</p>
</div>

<b>菜单功能介绍</b>：该菜单可以支持新设不同的条件来计算 Margin Call 预警/非速冻资金盈余，每次新设都是分配一个任务 ID，当预计完成后，可以查询任务 ID 的执行状态与计算内容详情。

1. 新建模拟计算：系统支持股票组/股票市场/单一股票 三种模式的预计算，同时也支持是否将某种豁免规则配置在压力测试某个批次上​；按需选择模拟计算类型及计算内容后，提交即可开始模拟计算

<img src="/assets/GMSKb80HyoRHpSxSwRNcAYJsnmc.png" src-width="3180" src-height="1246" align="center"/>

注：相关豁免规则配置 请在执行菜单：「系统设置」&gt;「风控」&gt;「风控参数」菜单内配置

1. 当计算完毕，可以在记录右侧操作区，点选【详情】查看计算的结果

<img src="/assets/Fs1IbVDahowbphxHLNOcgzuxnPs.png" src-width="3184" src-height="1260" align="center"/>

1. 【详情】页面展示的列表数据可以用来评估模拟计算结果是否符合预期；如同时模拟计算 margin call 和非速冻资金盈余则会分开两个列表展示

<img src="/assets/OVFCbnXe4o7iJUx11GKcciVunDb.png" src-width="3238" src-height="1592" align="center"/>

#### 自定义数据

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; Margin Call 压力测试 &gt; 自定义数据</p>
</div>

<b>菜单功能介绍</b>：该菜单可以维护股票保证金比例，将保证金比例的文档批次导入。

1. 按模版要求导入保证金比例，导入成功后则会在列表页展示

<img src="/assets/LTWtbr7PYoCl3ZxDQt5cCgPLnyc.png" src-width="2914" src-height="1272" align="center"/>

### 指数管理

#### 指数级别

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; 指数管理 &gt; 指数级别</p>
</div>

<b>菜单功能介绍</b>：该菜单用来维护劵商保证金指引内所提及的指数级别。

1. 在页面点击【新建】可以新建指数级别

<img src="/assets/CO3db629cotANBxpQRccpGBfnph.png" src-width="3182" src-height="908" align="center"/>

1. 若需修改指数级别配置，可以在列表页的操作【编辑】；如配置无效或不再使用也可操作【删除】

<img src="/assets/NPRubxcCSoCnr6xxTPmcwod0nZg.png" src-width="3166" src-height="696" align="center"/>

1. 若需要初始化数据，可以点选左侧区点选【初始化数据】，会将系统预设指数数据作初始化配置（会将 9 个 SFC 保证金指引要求的指数及级别初始化），但操作初始化不会影响用户自行添加的指数数据

#### 股票指数

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; 指数管理 &gt; 股票指数</p>
</div>

<b>菜单功能介绍</b>：该菜单用来维护劵商保证金指引内所提及的股票指数。

1. 页面提供与行情数据同步功能【拉取基本数据】功能，点选后可以自动同步基本数据（此数据是提供给 Whale 产品始用的行情数据源）

<img src="/assets/YxV9bqTfUoIdgoxyFizc19xingh.png" src-width="3192" src-height="890" align="center"/>

1. 如果劵商若有更好的行情数据源，则可以自主批量导入，页面也有提供【批量导入】功能，提供导入模板下载，可先在模版上编辑后，再将资料导入

<img src="/assets/TJMhb1KqQoJOgfx895OcizrJnPd.png" src-width="3196" src-height="866" align="center"/>

1. 若需修改股票指数代码，可以在列表页的操作【编辑】；如配置无效或不再使用也可操作【删除】

<img src="/assets/Gx06boCT0ok4A6xasgTcDthGnUc.png" src-width="3246" src-height="578" align="center"/>

#### 股票级别占比

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; 指数管理 &gt; 股票级别占比</p>
</div>

<b>菜单功能介绍</b>：该菜单展示股票级别占比，并支持模拟 margin call 计算。

1. 股票级别占比列表

<img src="/assets/HUCebCFyTow5l0x2YI6crguBnRb.png" src-width="2856" src-height="784" align="center"/>

1. 默认三个指数跌幅为页面计算好的跌幅，也可通过页面的【模拟 Margin Call】功能进行人工修改并触发模拟计算

<img src="/assets/BN3tbbUyCoojqhxwVdrcKHlhnnq.png" src-width="2856" src-height="1032" align="center"/>

### Haircut 管理

根据 FRR 报表等相关的财务报表要求，需要计算抵押品的折扣价值。

<table header_column="1" header_row="1">
<colgroup>
<col width="144"/>
<col width="719"/>
</colgroup>
<thead>
<tr><th><p><b>术语 / 缩略词</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>Haircut</p></td><td><p>在金融学里，<b>估值折扣</b>或<b>剃头</b>是指从作为担保或抵押品的资产市场价值中扣除的百分比。估值折扣的数量反衬出投资者持有资产的风险。但是，贷款人拥有整个资产的担保物权。​<br/>比如，在投资者看来风险度很低的美国国库券可能有 1% 的估值折扣，而投资者认为风险度高的股票期权的估值折扣可能高达 30%。换句话说，1000 美元的国库券可被接纳为 990 美元贷款的担保，而 1000 美元的股票期权仅可作为 700 美元贷款的担保。</p></td></tr>
</tbody>
</table>

#### 股票 Haircut 管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; Haircut 管理 &gt; 股票 Haircut 管理</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于管理股票 Haircut。

1. 列表展示所有已设置 Haircut 的股票列表

<img src="/assets/B5N0bo8BuoNhnCxOYY5cGbmJnEd.png" src-width="3162" src-height="1132" align="center"/>

1. 可以点选左上角【添加股票 Haircut】添加股票 haircut 纪录

<img src="/assets/UUIebBYbmonorrxG3qecCxmpnyc.png" src-width="3166" src-height="664" align="center"/>

1. 也可以在记录右侧操作区点选【编辑】修改股票 haircut 数值

<img src="/assets/HwpYb7X9QoiAmjx5d9mcLqY2n9c.png" src-width="3182" src-height="690" align="center"/>

1. 页面也支持批量导入 Haitcut，可以点选左上角【批量导入】 ，可以下载导入模板按照其格式输入后，进行批量导入操作

<img src="/assets/I67QbZKm3oydy2x6ytkcqpyBnjg.png" src-width="3178" src-height="588" align="center"/>

#### 指数 Haircut

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; Haircut 管理 &gt; 指数 Haircut</p>
</div>

<b>菜单功能介绍</b>：该菜单主要用于管理指数 Haircut。

1. 指数部分与前述股票 Haircut 操作功能相同，但不支持批量导入

<img src="/assets/Z94SbwxGHob58FxVNkGcRF8unMb.png" src-width="3196" src-height="704" align="center"/>

#### Haircut 修改记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; Haircut 管理 &gt; Haircut 修改记录</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查询所有 Haircut 修改记录。

<img src="/assets/WceRbCzaQoaSbXxlBqecAS7ynVc.png" src-width="3158" src-height="974" align="center"/>

Haircut 修改记录列表页面

### 速动资金短欠

#### 业务说明

主要通过模拟 SFC 的要求，进行速动资金的压力测试，从而得出 Top 10 股票集中度是否符合监管要求。

#### 名词解释

<table>
<colgroup>
<col width="155"/>
<col width="109"/>
<col width="302"/>
<col width="366"/>
</colgroup>
<tbody>
<tr><td><p><b>繁体名词</b></p></td><td><p><b>英文名词</b></p></td><td><p><b>说明</b></p></td><td><p><b>计算规则</b></p></td></tr>
<tr><td><p>速动资金</p></td><td><p>LC</p></td><td><p>速动资金是持牌法团根据该规则需维持的其中一种财政资源，为持牌法团的速动资产超出认可负债之数</p></td><td></td></tr>
<tr><td><p>规定速冻资金</p></td><td><p>RLC</p></td><td><p>规定速动资金是持牌法团必须备有的，以便遵守该规则所指的财政资源规定的最低速动资金数额</p></td><td></td></tr>
<tr><td><p>速冻资金盈余</p></td><td><p>ELC</p></td><td><p>LC-RLC</p></td><td><p>LC-RLC</p></td></tr>
<tr><td><p>持仓市值</p></td><td><p>Market Value</p></td><td><p>抵押物 market value 等值 HKD</p></td><td><p>market value*港币汇率</p></td></tr>
<tr><td><p>FRR ratio</p></td><td><p>FRR ratio</p></td><td><p>作为担保或抵押品的的百分比</p></td><td><p>= 1-haircut，<br/>根据 571N 准则，一般来讲人工导入；<br/><b>空头持仓，选择权持仓，FRR ratio 依 0 计算</b></p></td></tr>
<tr><td><p>Liquid Asset</p></td><td><p>速动资产</p></td><td><p>持牌法团的速动资产是其在计算速动资金时需包含在内的资产金额。该等资产的价值需进行调整，以反映一些例如其非速动性质及信用风险等因素</p></td><td><p>FRR ratio*客户持仓市值等值 HKD</p></td></tr>
<tr><td><p>客户欠款</p></td><td><p>Loan Amount</p></td><td><p>同一客户融资欠款的等值本币</p></td><td><p>取分币种客户余额，全部转换为本位币，在做汇总，取汇总后金额&lt;0 的数据，再取绝对值<br/>例如帐面余额 -200，那么客户欠款 200，帐面余额为 100，那么客户欠款为 0</p></td></tr>
<tr><td><p>速动资金短欠</p></td><td><p>Shortfall</p></td><td><p>客户负债，且负债超出认可资产净值的那部分金额</p></td><td><p>max (abs(Loan Amount)-Liquid Asset), 0) </p></td></tr>
<tr><td><p>30% 跌幅下速动资金短欠</p></td><td><p>Shortfall 30%</p></td><td><p>抵押物市值下降 30%，客户负债，且负债超出认可资产净值的那部分数据</p></td><td><p>max [Loan Amount -min(abs(Loan Amount),Liquid Asset*70%), 0]</p></td></tr>
<tr><td><p>50% 跌幅下速动资金短欠</p></td><td><p>Shortfall 50%</p></td><td><p>抵押物市值下降 50%，客户负债，且负债超出认可资产净值的那部分数据</p></td><td><p>max [Loan Amount -min(abs(Loan Amount),Liquid Asset*50%), 0]</p></td></tr>
<tr><td><p>TOP10</p></td><td><p>TOP10</p></td><td><p>股票不可抵押后对 shortfall 影响最大的 10 个股票</p></td><td></td></tr>
</tbody>
</table>

#### 速动资金短欠

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>风控管理 &gt; 压力测试 &gt; 速动资金短欠 &gt; 速动资金短欠</p>
</div>

1. 列表展示历史创建的计算任务

<img src="/assets/LJkxbuSovolFdAxtxZRcnh4AnT9.png" src-width="3328" src-height="1256" align="center"/>

1. 点击『新建』，会创建一条新的计算任务，同时需要人工填写速动资金数据

<img src="/assets/HjasbIxmyo0BTbx1YUHcOefRnkf.png" src-width="3296" src-height="1682" align="center"/>

1. 创建完成后，可点击『详情』，查看本次计算任务

<img src="/assets/ODFdbYUGJoaOyixyrbWcMX4InVc.png" src-width="3290" src-height="1020" align="center"/>

#### 客户 shortfall 明细

1. 计算任务约 1-5 分钟完成，完成后可查看本次计算结果，首先会展示客户的 shortfall 明细

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>❗</div>
<p>此页面仅会统计欠款客户，以及模拟客户持有的抵押物下跌 30% 及 50% 后的 shortfall 结果</p>
</div>

<img src="/assets/CbfBb2WxPoDr9XxAorrcHz3Enzd.png" src-width="3264" src-height="1762" align="center"/>

1. 点击详情可查看客户的持仓明细以及持仓中认可的资产值

<img src="/assets/MS4YbWrAyo97D5xXhjUcfJqMnuh.png" src-width="3286" src-height="1818" align="center"/>

#### Top 10 股票

1. <b>第一部分:LC 数据。</b>

首先系统会根据财务所填写的 LC，RLC 资料得到 ELC 相关数据（速动资金英盈余）

<img src="/assets/UwUhbeVvZotqpFxC5Hrc2qlanTf.png" src-width="3286" src-height="1782" align="center"/>

1. <b>第二部分：速动资金短欠</b>

此处数据模拟抵押物跌幅为 x 时的 shortfall 结果，同时会对比是否还有 buffer（缓冲额）

buffer（缓冲额）= 50% 速动资金盈余 - 速动资金短欠（shortfall）

<img src="/assets/YD6NbbBOWouX63xb8IzcpMoRnif.png" src-width="3306" src-height="1800" align="center"/>

<b>股票跌幅 x 为一个变量，需要根据保证金指引规则得到，明细如下：</b>

依股票类别分别统计持股市值，比计算分类占比；根据抵押证券的组合成分，采用适当的假设性压力测试：可以每日所有市场闭市后计算 一次

(a) 以市值计算，若等级 1 的抵押品占比超过 75%，则平均价格跌幅为参数 a 的值

(b) 以市值计算，若等级 1 和等级 2 的抵押品总占比超过 75%，则平均价格跌幅为参数 b 的值

(c) 以市值计算，如果等级 1 和等级 2 的抵押品总占比在 25% 到 75% 之间，则平均价格跌幅为参数 c 的值

(d) 以市值计算，如果等级 1 和等级 2 的抵押品总占比在 25% 以下，则平均价格跌幅为参数 d 的值

|   |   |
|---|---|
|<b>参数</b>|<b>数值</b>|
|a drop|15%|
|b drop|25%|
|c drop|30%|
|d drop|50%|

1. <b>第三部分 : 速动资金短欠</b>

该部分数据会逐个模拟所有抵押物不可抵押后，对 shortfall 的影响，并根据 shortfall 影响最大的 10 只个股进行排序。

<img src="/assets/DdRSbH9XGoxAcbxSmJdcai6Bnrb.png" src-width="3288" src-height="1800" align="center"/>

<table>
<colgroup>
<col width="142"/>
<col width="177"/>
<col width="508"/>
</colgroup>
<tbody>
<tr><td><p><b>名词中文</b></p></td><td><p><b>名词英文</b></p></td><td><p><b>规则</b></p></td></tr>
<tr><td><p>股票代码</p></td><td><p>Stock Code</p></td><td></td></tr>
<tr><td><p>股票级别</p></td><td><p>Stock Level</p></td><td><p>股票级别，使用股票指数管理的级别数据<br/><a href="https://console.lbkrs.com/next/risk/index_management/stock_index">https://console.lbkrs.com/next/risk/index_management/stock_index</a></p></td></tr>
<tr><td><p>持仓市值</p></td><td><p>Market Value    </p></td><td><p>所有欠款客户该股票的合计持股市值</p></td></tr>
<tr><td><p>速动资金短欠</p></td><td><p>Shortfall</p></td><td><p>按照该股票或关联股票</p></td></tr>
<tr><td><p>ELC 影响基准 (%)</p></td><td><p>maximum ELC Ratio</p></td><td><p>根据股票等级来：</p>
<ul>
<li>Tier 1: 50%</li>
<li>Tier 2: 30%</li>
<li>Other: 50%</li>
</ul></td></tr>
<tr><td><p>ELC 下跌百分比（%）</p></td><td><p>Shortfall/ELC（%）</p></td><td><p>对应股票的 Shortfall / ELC（人工填写的）</p></td></tr>
<tr><td><p>集中度 (%)</p></td><td><p>Concentr Action（%）</p></td><td><p>ELC 下跌百分比（%）/ELC 影响基准 (%)</p></td></tr>
<tr><td><p>结果</p></td><td><p>Result</p></td><td><ul>
<li>Concentr Action=&lt;100%  &gt;&gt; Pass</li>
<li>Concentr Action&gt;100%  &gt;&gt; Reject</li>
</ul></td></tr>
</tbody>
</table>

#### 持仓明细

统计所有欠款客户持仓明细，作为计算 shortfall 的数据源

<img src="/assets/K7lGbDdUBoHNv6xgqxocvAlwnag.png" src-width="3300" src-height="1226" align="center"/>

