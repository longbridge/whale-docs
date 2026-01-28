---
title: 系统介绍
slug: UepcwAVqJiP0t6kjBxHcsoMWn5c
sidebar_position: 2
---


# 系统介绍

# 概述

资产账户目前主要包含两大部分：<b>资产账本</b>和<b>资产基础管理能力</b>。

资产账本：详细记录所有客户业务场景资产变更的流水记录。账本包含但不仅限于以下信息：

```text
- 资产类型：现金、股票、期权、债券、基金、OTC其他
- 账户：业务账户、结算账户、过渡户
- 资产变更类型：出账、入账、冻结、解冻
- 业务码：该业务场景的唯一编码
- 变更资产金额/持仓数量
```

资产账本提供的记账能力可使任何资产发生变动后，不同账户的流水都能够清晰准确，保障上下游的业务资产对账。

资产基础管理能力：资产还提供了调账、资产冻结/解冻、业务码管理的基础能力，辅助更加便捷地管理资产。

<b>账户类别</b>

<b>资产变更类型</b>

## 资产架构

<img src="DensbFl0toR74OxGbsejgI5MpGF" src-width="2438" src-height="1422" align="center"/>

# 操作说明

## 1. 账户

### 1.1 资产总览

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 资产账户&gt; 账户 &gt; 资产总览</p>
</div>

<b>菜单功能介绍</b>：查询所有客户整体资产情况，含现金和持仓。主要用于统计公司维度资产。

<b>操作说明</b>：

页面查询结果如下图：

<img src="D5aob3gb1olSytxPISFjIKNQpC0" src-width="3324" src-height="3386" align="center"/>

<b>页面说明</b>

- 进入页面查看的即当前公司下所有客户的总资产
- 支持按客户类型、账户类型、经纪人筛选查询，同时也可切换币种统计数据
- 模块：
    - 总资产：按资产类型和资产币种分别统计资产占比
    - 账面总现金：分币种展示已结算、待交收现金详情
    - 持仓：按持仓类型分Tab页展示每只证券的已结算、待交收数量及市值详情

### 1.2 账户查询

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 资产账户&gt; 账户 &gt; 账户查询</p>
</div>

<b>菜单功能介绍</b>：支持按客户各维度来查询其资产总览及账户相关详情信息，含客户资料、银行卡信息、计费明细、出入金和转仓流水。

<b>操作说明</b>：

1. 开始查询：选择账户维度填入对应信息即可返回客户基本信息

<img src="GeM9b1B39okMtRxKkFUjgFKipub" src-width="2570" src-height="988" align="center"/>

1. 账户查询页面会展示「最近浏览」，支持快速点击查看结果
2. 查询结果：侧边栏展示查询结果，默认展示资产总览页，可切换页面查看客户资料、银行卡信息、计费明细、出入金、转仓流水等。侧边栏信息同快捷查询结果

<img src="H9nZbzxE5ogQUdxm8P3j2VUNpod" src-width="3272" src-height="1750" align="center"/>

账户快捷查询入口：

<img src="WwMzbhiW4oRDz4xdPKZjEFCUpQb" src-width="3318" src-height="1304" align="center"/>

1. 账户查询后在账户详情的持仓明细下可以针对具体标的操作【修改成本】；同时也可在【详情】查看成本快照和流水

<img src="F87Ibvr59oDaOqx5myEjVeNqpde" src-width="3341" src-height="1720" align="center"/>

<img src="QZ7KbSqC1oIB9LxC6lljqJ5Apfe" src-width="3236" src-height="1652" align="center"/>

<img src="LjlBbLdKBoTn2PxoW4IjVBQXpde" src-width="3238" src-height="1570" align="center"/>

<b>成本价说明</b>

- 摊薄成本：指某股票持有期内的保本价格（不包含佣金及费用），用户在该值卖出可实现盈亏平衡。计算了持有期内每次交易的盈亏（包含现金派息等情况），既考虑买入，也考虑卖出的变化。从建仓开始计算，一旦清仓后成本就清空，再次建仓会重新开始计算。
- 平均买进成本：即用户买入单只股票后，成本价为买入股票的买入金额（不包含佣金及费用）除以持股股数的数值，持股期间不考虑卖出股票的盈亏，规避后续卖出实现盈亏对买入成本的影响。从建仓开始计算，一旦清仓后成本就清空，再次建仓会重新开始计算。

### 1.3 账户余额

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户 &gt; 账户 &gt; 余额查询</p>
</div>

<b>菜单功能介绍</b>：该菜单支持查询客户各资产余额情况，并支持不同币种及账户类型查询。

<b>操作说明</b>：

1. 选择需要查询的资产类型，分现金、股票、基金、期权、债券、OTC其他、虚拟资产（下图以「现金」为例）；每个页面支持筛选相关纬度进行查询

<img src="NwfBb85RRo3zAkxltWrjdwykpMb" src-width="3292" src-height="784" align="center"/>

1. 若客户存在冻结资金，可以点击金额打开二级页面查看冻结详情；其他资产类型无该入口

<img src="DFI3bPKjvoB1wyxhfGAjKyzFpOc" src-width="3290" src-height="696" align="center"/>

冻结详情页：

<img src="J2IvbDZVsor7EIx3FBDjcD3bpMe" src-width="3240" src-height="406" align="center"/>

1. 若针对某些客户查询现金余额场景，可在右上角提供方便的 【手工提现】 操作入口

<img src="MWIob8XENomnf9xDCTwjj9qophh" src-width="3280" src-height="686" align="center"/>

1. 同时，列表页的操作【详情】可快速跳转查看对应账户流水明细

<img src="MzqRbL1kFoE7vjxeDeYjJyVcp6e" src-width="3276" src-height="974" align="center"/>

账户明细页：

<img src="ZtkbbTtp1oax9Ux1w1sjyhdqpWb" src-width="3096" src-height="1502" align="center"/>

### 1.4 账户明细

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户 &gt; 账户 &gt; 账户明细</p>
</div>

<b>菜单功能介绍</b>：查询账户发生的资产流水明细，并支持分币种、业务码等多维度筛选查询。

<b>操作说明</b>：

1. 选择需要查询的资产类型，分现金、股票、基金、期权、债券、OTC其他、虚拟资产（下图以「现金」为例）；每个页面支持筛选相关纬度进行查询

<img src="SRZxbNegmoi2yQxbRagjSf7Tp0g" src-width="3274" src-height="882" align="center"/>

1. 其他资产类型操作同「现金」

## 2. 冻结/解冻

### 2.1 资产冻结

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：账户&gt;冻结解冻&gt; 资产冻结</p>
</div>

<b>菜单功能介绍</b>：该菜单可以针对客户的现金账户/股票账户/基金账户来做资产冻结处理， 支持单一冻结与批量冻结操作。

<b>操作说明</b>：

1. 可以选择不同的资产类型进入资产冻结操作，目前支持现金、股票和基金（下图以「现金」为例）；每个页面支持筛选相关纬度进行查询

<img src="I648bz3p9oCSl6xCDq6jLCudpre" src-width="3357" src-height="918" align="center"/>

1. 新建冻结：点击右上角【新建】来增加一笔资产冻结的申请

<img src="MIYtbVZVuoc70rxtvVVjU1nDpCg" src-width="3280" src-height="746" align="center"/>

1. 填写冻结申请信息：申请资料填写完成提交后会进入工单系统，由相对应审批岗位来审批
    1. 账户类型：冻结的账户类型默认仅支持SETTLEMENT结算账户
    2. 有效期：为选填项，若填写有效期，则到期时会自动解冻

<img src="CduRbPZ35owuGnxxvLujaFfvpjc" src-width="3389" src-height="1725" align="center"/>

1. 点选右侧记录操作区【查看】，可以查看工单审批进度及详情

<img src="SEvLbmR1xoUtx4xje92jJpynpRb" src-width="3356" src-height="1062" align="center"/>

<img src="Fh0YbFB14oFrg3xT0aZjZK1TpGf" src-width="3262" src-height="1756" align="center"/>

1. 批量冻结：也可以右上角区点击【批量新建】，通过上传文件方式来批量申请冻结

<img src="ZBHdbyKEsoEuhXxaUX8jQlRMpvb" src-width="3274" src-height="854" align="center"/>

1. 批量冻结操作页面：需下载模板，根据提示填写信息上传；上传后同单个冻结仍需进行工单审批

<img src="IfmYbWTtxoJgKIxgOmAjZ4x1pjh" src-width="3260" src-height="1300" align="center"/>

1. 其他资产类型操作同「现金」

### 2.2 资产解冻

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：账户&gt;冻结解冻&gt; 资产解冻</p>
</div>

<b>菜单功能介绍</b>：该菜单可以针对客户的现金资产/股票资产/基金资产 来操作资产解冻处理。

<b>操作说明</b>：

1. 资产解冻页面可以选择不同的资产类型进入解冻操作，每个页面支持筛选相关纬度进行查询

<img src="Zip7bvt8UouhIVx8Uj9jB8WWpAd" src-width="3339" src-height="932" align="center"/>

1. 若资产冻结时，支持设定到期时间，则系统会在到期时，会自动解冻该资产纪录；在到期日之前，可以在页面人工进行解冻（下图以「现金」为例）

<img src="QPDObsvpLoqTSexL5gfjn6z6pQg" src-width="3276" src-height="770" align="center"/>

1. 人工解冻需要审批，可以在操作栏的【查看】了解审批进度，审批通过后会执行资产解冻，可在解冻结果查看最终执行情况

<img src="QtiVbbkMnors4pxN5tojgUrnppe" src-width="3272" src-height="1070" align="center"/>

<img src="G2NNb11oyoIFZfxCcfpjaqdnp88" src-width="3114" src-height="1612" align="center"/>

## 3. 调账

### 3.1 手工调账

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户&gt;调账&gt; 手工调账</p>
</div>

<b>菜单功能介绍</b>：主要提供给后台人员在异常场景做资产账务差错处理使用，对客户结算账户资产进行人工调整。

<b>操作说明</b>：

1. 手工调账主页面：根据不同调账类型(现金/股票/基金/债劵/OTC其他/虚拟资产）分Tab页展示，如需调账需要根据调账的资产类型进入对应页面

<img src="XaAYb0DX2odpUjxPqlEjTPE4pvc" src-width="3342" src-height="1152" align="center"/>

1. 新建手工调账：点击【新建】，即可打开新增调账页面

<img src="CDT2bun7joVbwqxDh5fjckb3pdg" src-width="3220" src-height="958" align="center"/>

1. 填写调账信息：
    1. 业务分类：即业务码，选择调账流水需要添加的业务场景
    2. 公司银行卡&客户银行卡：非必填项，若调账为出入金场景可以根据实际业务情况选择对应银行卡信息，便于数据记录
    3. 调账标记：非必填项，第三方和支票仅根据实际调账场景做标记使用
    4. 业务时间：非必填项，用于指定客户端流水发生时间，若无特殊需求，不选择则默认实际调账完成时间
    5. 账务日期：非必填项，用于指定结算流水归属日，若无特殊需求，不选择则默认实际调账完成对应的账务日（注：因调账需走工单审批，申请到调整完成存在时间差，如无特殊指定账务日需求，请勿选择账务日期，避免因审核隔日导致调账失败）
    6. 备注：注明对客户展示的备注即会在客户可见的流水展示（如App、结单）；内部备注仅供内部记录使用

<img src="RQ7BbD1kJo1gYnxElkkj24Zupdc" src-width="3294" src-height="1640" align="center"/>

新建现金调账

❤️Tips**：**

- 选择客户后可以点击客户账户查看当前资产情况，用来辅助调账决策

<img src="WUexbP0rrosZdtx0Y40jVc7HpYd" src-width="3274" src-height="1634" align="center"/>

<img src="KVl4bzuU0omna3x5MK8jCu9Spcd" src-width="3368" src-height="1737" align="center"/>

- 手工调账因支持差错处理，不限制调整资产账户为负值，调账处理时请根据客户实际资产谨慎操作

1. 证券类（股票/基金/债券/OTC其他/虚拟资产）调账填写信息不同于现金调账（下图以「股票」调整为例）：
    1. 托管商&子仓：非必填项，仅在调账指定仓位时使用，否则会根据清算时默认仓位为准
    2. 数量：必填项，分Street、Nominee、Own，根据实际业务场景选。Nominee 免收过户费，无特殊需求可默认选择 Street，合计=Street+Nominee+Own
    3. 成本&币种：非必填项，仅在限定成本时填写，否则系统将会默认以调账创建时的行情价格为准

<img src="SpuQbgQQLoi1JPxZuvQjvc8ypAc" src-width="3286" src-height="1658" align="center"/>

1. 根据实际业务需求填写调账信息，如担心出错，可以先【保存】，如有误仍可以选择【修改】或【删除】，确认无误后再【提交】

<img src="SPLZbCmKWoNx2xxSn9yjyq0cpGf" src-width="3284" src-height="866" align="center"/>

1. 调账提交后均需进入工单审批，可在列表页的操作栏【详情】查看审批进度

<img src="L5PjbzRbnoYZdjxlmUqjIDX7pad" src-width="3272" src-height="866" align="center"/>

1. 审批完成后，可以在列表查看“调账结果”，调账完成即调账成功。若调账成功后仍发现有错误，可以【撤销调账】；此时撤销调账会通过生成一笔反向流水抵销当前调账流水，同时如果当天清算未完成日切，可以支持无痕撤销（即客户端无法看到调账流水），详细可以看撤销弹窗页面

<img src="IYhDbkUsZoCnohx6SkJj1rV7pTe" src-width="3276" src-height="978" align="center"/>

<img src="IPpubvMpmo72ibxOP9FjfDpGpWf" src-width="3282" src-height="1370" align="center"/>

❤️Tips：

如需关注调账失败消息，可以在订阅管理下订阅“调账通知”消息

<img src="CM4Qb4Hc9onXfsxWc5VjWJcbppe" src-width="2806" src-height="1026" align="center"/>

1. 撤销完成后，调账记录状态会更新为“已撤销”，备注和内部备注均可查看原备注和撤销时备注

<img src="ExUpbTL7Vo22vyxTAGAjAHpNpdh" src-width="2336" src-height="1084" align="center"/>

1. 此外，调账支持批量操作，可以在列表右上方入口进行；批量新增页面可以下载模版根据【模版字段说明】进行填写，填写后上传文件解析，如填写内容错误，弹窗页面均会返回错误原因，可根据原因进行修改后重新提交；同时，也可忽略错误，直接提交，但该场景下系统仅会处理解析成功的记录。批量调账仍需审批，审批可在一笔申请单完成

<img src="Dt5Fb12Mjovemox56SIj9GdRprc" src-width="3210" src-height="802" align="center"/>

<img src="O18hbufz2olv4dxtnZaj8omnpPf" src-width="2394" src-height="1282" align="center"/>

### 3.2 临时调账

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户&gt;调账&gt; 临时调账</p>
</div>

一般资产调账的使用场景如下：

- 在用户遇到特殊情况时，交易员通过对客户资产(现金/期权/股票)进行临时的调增或调减操作，让客户先完成下单，最终再把钱/券失效掉。
- 在特殊情况下（如股票公司行动，需要通过手工调整持仓），后台人员需要手工对 现金/股票/期权进行调账，保障业务的有效进行。

<b>操作说明</b>：

1. 在临时调账选择对应的调账类型 Tab 页签(现金/股票/期权），点击【新增】，即可打开对应新增临时调账页面。

<img src="TcefbHsyKonpW3x0TINjoY6bpth" src-width="3292" src-height="1330" align="center"/>

1. 填写调账信息页面（以新增现金临时调账为例，如下图）
    1. 业务类型和调账类型绑定，只需选择业务类型即可。现金临时调账默认对应入账，现金临时调减默认对应出账
    2. 临时调账需要设定有效期，在到期后临时调账会自动失效

<img src="JfCPba7xRoCIFaxDsoSjpqyspXb" src-width="3412" src-height="1745" align="center"/>

新增现金临时调账

1. 填写完调账信息后点击【提交审核】进行工单审批，调账记录展示如下图，状态为“初始化”
    1. 点击“详情”亦可查看工单审批进度

<img src="HGX3bcrOuoIcS5xUAxRj3tZSprs" src-width="3288" src-height="618" align="center"/>

1. 调账审批通过且系统执行调账完成后，状态会显示“已调账”，同时在有效期之内，可人工操作【失效】；否则，系统将在到期日自动失效

<img src="EKaTbltNnoZMIKxPtI4jtAT6poe" src-width="3288" src-height="1194" align="center"/>

## 4. 资产调拨

### 4.1 账户间转账

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户&gt;资产调拨&gt; 账户间转账</p>
</div>

<b>菜单功能介绍</b>：主子账户场景下，若某个账户资金不足，可以通过另一关联账户进行转账，方便当前账户完成交易。

注：仅支持同一客户的主账户间转账以及同一主子关系下的主子账户间双向转账

<b>操作说明</b>：

1. 列表页记录包含后台操作流水和客户App上自主操作的转账流水
2. 在列表页的右上角点击【新建】可以进入账户间转账；或者【批量新建】进行批量转账

<img src="IlnjbPQPZoav5PxsssAj5dPJp6g" src-width="3312" src-height="1462" align="center"/>

1. 账户间转账页面如下图：

<img src="RPDBbj57coT9f4xnHFFjsvD7pge" src-width="3326" src-height="1650" align="center"/>

- 转账操作页面确认转出方并选择转账类型后，系统会自动匹配转入方支持选择
    - 转给主账户：若转入方为主账户，可以转给同一客户的其他主账户；若转入方为子账户，可以转给该账户对应的主账户
    - 转给子账户：若转入方为主账户，可以转给其下的子账户

- 按实际业务需求填写转账信息，若转账金额超出可转出金额，页面会提示，但不会强制限制转账

<img src="LXFOb0VVSoekgjxfonDjjhiapLb" src-width="3272" src-height="1772" align="center"/>

❤️Tips：因转账金额不强校验超限，批量转账时请提前确认转账客户资产再做处理。

1. 确认后提交审批，审批进度可以在列表页的操作查看

<img src="Wd5kbHvYWoKpFOxjEvKjjO4Dpdb" src-width="3144" src-height="754" align="center"/>

### 4.2 账户间转仓

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户&gt;资产调拨&gt; 账户间转仓</p>
</div>

<b>菜单功能介绍</b>：同一客户有多个账户，若某个账户股票不足，可以通过另一账户进行转仓，方便当前账户完成交易。
注：支持同一客户的主账户间、子账户间及主子账户间双向转仓（OB 企业客户仅支持同一客户下的子账户间转仓）

<b>操作说明</b>：

1. 列表页记录包含后台操作流水和客户App上自主操作的转仓流水
2. 在列表页的右上角点击【新建】可以进入账户间转仓；或者【批量新建】进行批量转仓

<img src="PCdCbV40ioi70AxXviAjXmJNped" src-width="3306" src-height="1470" align="center"/>

1. 账户间转仓页面如下图：

<img src="TKu4bgjQVoroYQxRg0RjMfpXp1d" src-width="3312" src-height="1630" align="center"/>

- 转仓操作页面确认转出方并选择转仓类型后，系统会自动匹配转入方支持选择
    - 转给主账户：若转入方为子账户，可以转给该账户对应的主账户
    - 转给子账户：若转入方为主账户（非OB客户），可以转给其下的子账户；若转入方为子账户，可以转给同一客户的其他子账户

- 按实际业务需求填写转仓信息，若转仓数量超出可转出数量，页面会提示，但不会强制限制转仓

<img src="OOS1boOZvot7vKxUuv2jiQk1pxf" src-width="3340" src-height="1828" align="center"/>

❤️Tips：因转仓数量不强校验超限，批量转仓时请提前确认客户持仓再做处理。

1. 确认后提交审批，审批进度可以在列表页的操作查看

<img src="JGvobWBJzoxbyaxTCThjvFGgpxh" src-width="3130" src-height="618" align="center"/>

## 5. 业务码

### 5.1 业务码查询

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户&gt;业务码&gt;业务码查询</p>
</div>

<b>菜单功能介绍</b>：该菜单支持查询所有的业务码，同时可以更改对客展示的业务码名称以及业务码对应的流水是否对客户展示。

每一笔流水都会对应一个业务码，业务码是业务场景的唯一标识。

<b>操作说明</b>：

1. 进入菜单页，可以在列表查询所有业务码，支持通过编码和名称搜索

<img src="YyMNbJtcJoWmC5x5Kb2j9cTTpjb" src-width="3202" src-height="792" align="center"/>

<b>页面主要字段说明</b>

- 资产类型：对应流水处理的资产类型，如现金、股票
- 客户端展示：展示端含客户App流水及结单流水

1. 同时，如果需要修改展示的业务码名称或更改是否可见，可以在编辑操作。

<img src="RiEdbRdfrorjM9xp5rdjr9Cvpjk" src-width="3280" src-height="1760" align="center"/>

### 5.2 业务管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：资产账户&gt;业务码&gt;业务管理</p>
</div>

<b>菜单功能介绍</b>：该菜单为业务码分组，主要应用场景为调账选择的业务分类，可以在调账的分组下通过更改业务码来决定调账是否展示该业务码。

除调账外，其他分组主要供系统在各业务场景调用，仅作查看，无需编辑。

<b>操作说明</b>：

1. 进入菜单，查看所有业务码分组

<img src="GjrbbbAxmopT7mxrMuAjDIcGprc" src-width="3216" src-height="626" align="center"/>

1. 详情仅支持查看，如需更改分组信息，点击编辑进入；业务码选择框勾选业务码则会在对应类型调账的业务分类展示，取消勾选则不展示

<img src="HEwrbWm6QoyjiJxoQaajGp9ypXr" src-width="3250" src-height="1758" align="center"/>

<img src="NoQ3bmBo6oeyqAxchlkj9DA5pTd" src-width="3240" src-height="1768" align="center"/>

