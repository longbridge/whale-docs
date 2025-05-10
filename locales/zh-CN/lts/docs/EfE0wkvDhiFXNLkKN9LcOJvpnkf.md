---
title: 功能介绍
slug: EfE0wkvDhiFXNLkKN9LcOJvpnkf
sidebar_position: 2
---


# 功能介绍

## 客户列表组件

### 客户列表查询

1. 打开「客户列表」组件，支持三个维度的搜索条件
    1. 客户搜索：可通过证券帐号、中文名、英文名、经纪人、证件 ID、手机号、邮箱
    2. 帐户类型：Cash、Margin 帐户
    3. 帐户状态：未激活、激活、系统账号、辉立旧账号、废弃、冻结

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[84%]" width-ratio="84">
<img src="/assets/D3Onbq8jho8tPKxZ0Z1cMp5Wnze.png" src-width="2746" src-height="462" align="center"/>
</div>
<div class="w-[15%]" width-ratio="15">
<img src="/assets/F95ZbnM8FoPGSAxrHZgcZUKrnIc.png" src-width="634" src-height="598" align="center"/>
</div>
</div>

1. 列表默认展示当前交易员/经纪人管理的全部帐户，可通过查询条件筛选需查看的帐户情况

## 客户信息组件

1. 打开「客户信息」组件，需要输入“<b>证券账户</b>”后才可进行搜索，支持查看资产、持仓、订单、流水等数据
2. 如帐户通过手机号有绑定存在其他相关帐户可直接进行切换查看
3. 功能模块概述
    1. 资产总览：客户资金数据，包含现金余额、冻结金额等数据
    2. 客户持仓：客户持仓信息，包含持仓数量、市值、盈亏等数据
    3. 当日订单：客户当日交易订单数据，支持多维度条件查询
    4. 历史订单：客户历史交易订单数据，可通过时间进行筛选
    5. 今日成交：依赖当日订单成交数据，统计当日成交股票的成交数量、盈亏及均价
    6. 客户资料：客户基础信息数据，包含住址、电话、经纪人等
    7. 交易通道：客户不同市场的交易通道，对应 broker 的上手渠道
    8. 银行卡：客户已绑定的银行卡信息
    9. 代理人信息：如客户存在代理人时，该列表可查看所属代理人基础信息
    10. 联名户信息：如客户存在联名帐户，可在该列表可查看联名户帐户资料，包含基础证件信息
    11. 交易权限：可查看客户证券帐号交易权限，如需编辑需前往 WBO 后台客户管理
    12. 融资状态：客户证券帐户的融资情况，包含交易限额、融资额度及风控状态
    13. 帐户明细：客户证券帐户交易及现金流水流入流出情况
    14. 计费查询：客户当前帐号的收费情况，包含佣金、平台费等计费情况
    15. 授权人信息：如客户存在交易授权人时，该列表可查看授权人基础信息
    <img src="/assets/MOj2bifAnoD6VRxGbqrc45OxnGb.png" src-width="2634" src-height="914" align="center"/>

4. 设置功能：支持信息栏设置、客户帐户设置
    1. 信息栏设置：调整客户信息组件上 Tab 的显示 / 隐藏，及调整 Tab 使用顺序
    2. 客户帐户设置：调整帐户相关信息展示，是否需要展示联名户信息及帐户信息展示格式，是否需要展示英文名
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/PEd1blxYwo7jrCx2NDRcTPbEn4L.png" src-width="1374" src-height="922" align="center"/>
        </div>
    <div class="w-[49%]" width-ratio="49">
        <img src="/assets/G2PBb5Sdqofd44xlqUQcqq3xnrg.png" src-width="1376" src-height="940" align="center"/>
        </div>
    </div>

5. 客户信息组件横排、竖排样式切换
    - 客户信息组件支持切换横排 / 竖排样式，可通过右上角“···”快速切换使用！
        - 竖向排列样式资产信息更紧凑，右侧也增加了当日订单的两种状态对比（进行中、已成交），更直观通过一个竖向样式查看到客户的资产、持仓、订单信息，功能更集中，使用更流畅
        - 切换至竖向排列样式之后，后续新开的客户信息组件均保留该样式
        - 竖向排列样式占位面积相对较大，建议新开标签页进行使用，如在交易面板中进行切换可能会导致信息展示不全
            <img src="/assets/PA4PbxaAEoAEPgxyQ9Ocdb6qnRc.png" src-width="2746" src-height="528" align="center"/>
            <img src="/assets/BUMWbcQAno8K0txZEslcMxsXneg.png" src-width="2846" src-height="1590" align="center"/>
        - 竖向排列样式设置功能说明：
            - 新增一个设置项，用于控制新开客户信息组件是否跟随以下的自订设置，如选择不跟随则新开客户信息组件时则打开默认的排列样式
            - 显示隐藏设置：与横向排列样式不同，竖向排列样式中设置 Tab 操作隐藏，则表示收纳仅下拉框中而不是不展示（横向排列样式则保留现有设置逻辑）
            <img src="/assets/HHsJbh7cJoPufExg9MocrQsTnDd.png" src-width="2128" src-height="800" align="center"/>
            
