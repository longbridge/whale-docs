---
title: 功能介绍
slug: HKt0wOZDaidlkckhWTlcyMpnnbg
sidebar_position: 2
---


# 功能介绍

## 更新

2024.09.05   功能模块的操作说明

## 操作说明

### 1.基金列表

<b>功能概述</b>

查看 WBO 后台配置的基金列表，可通过该页面特客户执行申购操作，并且支持查看基金基础详情数据。

<img src="/assets/UbNjbkrl3onwb5xCHPscmjBIn8b.png" src-width="2868" src-height="1730" align="center"/>

<b>功能页面结构说明</b>

顶部为查询功能区

中间列表为基金列表数据，包括已下架的基金数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 1.1 基金列表

<img src="/assets/Y9W4bu9W7oDZZDxm0PAcwfFrn7b.png" src-width="2870" src-height="1736" align="center"/>

- 查询条件：ISIN、基金名称、基金种类、基金类型、币种、基金状态
    - 列表的基金种类默认为“公募基金”，可手动切换为“私募基金”

- 列表字段：均展示 WBO 后台配置信息，可在列表中直观查看基金类型、风险等级及上架状态等基础信息，可辅助判断是否需要申购
- 操作项：申购、详情
    - 申购：弹出申购窗口
    - 详情：查看基金相关详情数据

#### 1.2 基金列表 - 详情

可分为三个功能区查看基金详情：基本信息、历史净值、交易规则。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/GTIDb5jYwom3rOxhG4mc2fnrnch.png" src-width="2858" src-height="1734" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/PiO4bxb88oAwFCxd05TcSAaKnuf.png" src-width="2858" src-height="1736" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/J5xSbmmRToJo38xza67c5a1on0g.png" src-width="2862" src-height="1732" align="center"/>
</div>
</div>

- 顶部展示当前基金的名称，点击“&lt;”可操作返回至基金列表
- 通过 Tab 进行切换查看基金详情数据
    - 基本信息：展示 WBO 后台配置的基金基本信息，主要为基金名称、ISIN 以及基金类型、风险等级等
    - 历史净值：展示当前基金历史单位净值及日涨跌幅数据，可作为申购参考数据
    - 交易规则：根据 WBO 后台配置的相关交易规则进行展示，主要介绍基金的申购、赎回规则，包含起购金额及申购、赎回费率等

#### 1.3 基金列表 - 申购

列表点击“申购”进入申购窗口，可在该窗口内选择需申购的帐户及输入申购金额即可发起申购。

<img src="/assets/PYx7bYVMToXQ0Cxbk0ycJhoZnnf.png" src-width="2862" src-height="1742" align="center"/>

- 窗口内容分为三部分：客户选择、资金信息、申购操作
    - 客户选择：支持通过证券帐号、客户姓名进行搜索，选中帐户后将查询客户的资金信息
    - 资金信息 - 港元可提：展示选中客户的现金数据，如未选择帐户则会展示为--，该金额是可进行申购的帐户余额，如申购的基金币种为 USD 则提示为“美元可提”
    - 申购操作：包含当前基金的基本信息及申购费率信息，并且支持在申购金额处填入客户需申购的金额
        - 申购金额：输入客户需申购的金额，未输入金额时展示最低申购金额进行提醒
        - 备注：可填写申购备注，在「订单查询」列表中可查看到相关申购备注

### 2.订单查询

<b>功能概述</b>

查看客户全部的申购数据，可在该列表中进行管理，帮助客户操作撤单。

<img src="/assets/X5dsbxYSJozkEOxx9JycgUVxniO.png" src-width="2874" src-height="1736" align="center"/>

<b>功能页面结构说明</b>

顶部为查询功能区

中间列表为基金订单列表数据，包括全部申购订单数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 2.1 基金订单列表

<img src="/assets/HUY7bZQidohKg5xbLrcczj2ZnDb.png" src-width="2874" src-height="1736" align="center"/>

- 查询条件：证券帐号、订单状态、基金种类、交易方向、委托渠道、订单提交时间
- 列表字段：均展示基金订单申购的基本信息，包括订单编号、客户信息、基金信息、申购信息及基金订单申购状态
    - 经纪人：即当前帐户的经纪人，如无经纪人则显示为空
    - 交易方向：申购、赎回
    - 订单状态：
        - 初始态：指下单至日切之间的订单状态
        - 已日切：已经进行日切，不可撤单
        - 已提交：后台发送资料到基金公司，不可撤单
        - 赎回货交收：后台赎回份额交收完成
        - 已完成：申购交收、赎回钱交割完成，不可撤单
        - 已撤销：订单已操作撤单
    - 备注：展示申购提交时填入的备注信息，如未填写备注则显示为空

- 操作项：撤单、详情
    - 撤单：操作基金申购撤单，在部分状态下不支持撤单（参考上方订单状态说明）
    - 详情：点击查看基金订单申购、赎回详情

#### 2.2 基金订单 - 详情

<img src="/assets/JMBOb4yBEobQubxly4bckcVEnId.png" src-width="2858" src-height="1732" align="center"/>

基金订单详情窗口，查看基金订单基本信息及费率、费用等。

#### 2.3 基金订单 - 撤单

<img src="/assets/E4OHboqdIoRlPqx2Smrc7sgYnTe.png" src-width="782" src-height="784" align="center"/>

点击订单列表“撤单”操作后，唤起基金撤单二次确认，需确认后提交撤单申请。

