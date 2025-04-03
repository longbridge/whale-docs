---
title: '2025-01-20 更新日志 '
slug: D3WNwhY8UiPbBrkNEhFctPDznVf
sidebar_position: 3
---


# 2025-01-20 更新日志 

# 🎉 新功能

- 公司行动增加股东大会类型
    - 支持用户在后台完成股东大会的预告创建、会议内容新增、客户参会方式选择等关键流程节点推进。
    <img src="/assets/Tg1Tb1ZIYohiJ8xtls7cxrDAn8b.png" src-width="2868" src-height="1302" align="center"/>
    <img src="/assets/QHt1bzcqXoGAvixicQIcUPx9n6b.png" src-width="1442" src-height="661" align="center"/>

附帮助中心：[快速上手 - 股东大会（VT）](./QSpJwHQVUi9qDEkTwBtcmHTPnjd)

- 增加美股 TAXFEE 退还功能
    - 针对上年度因美股公司行动产生的 TAXFEE，在本年度可以进行退还，新增了退税页面统一管理系统所产生的所有 TAXFEE 收费记录，并根据上手返还的金额同比例返还给客户
    <img src="/assets/Yv7zbwNPZoBkEnxwYTIcYF5xn8g.png" src-width="2874" src-height="1190" align="center"/>

- 华盛美股文件增加手动选择文件日期的功能
    - 华盛美股文件对档案名称中的日期格式不再做校验，改为由介面选择
    <img src="/assets/XpXwbAheVoO2bAxx8o7cKuzsnQb.png" src-width="2948" src-height="1424" align="center"/>

- 建立文章纳入审核流
    - 由于对客文章都需要审核，审批流中补充出创建文章环节
    <img src="/assets/K1yzbr9QloVsVUxo9sQcOH7Znfh.png" src-width="2700" src-height="1342" align="center"/>

- 建立模版新增模版适用对象
    - 模版增加 Longport 和 Whitelabel 适用对象

<img src="/assets/LDHPbzPvoorXtRxDlVMcJNnGnhf.png" src-width="2660" src-height="1164" align="center"/>

# 🪀 改进与修复

- 入金指引交互页面优化（路径：证券后台 - 关联管理-App 管理 - 入金指引）
    - 入金指引列表页面删除了“柜台”字段
    - 入金指引【新建】页面交互优化

- 货币兑设置优化（路径 1：证券后台 - 业务参数设置 - 汇兑 - 币种对）
    - 在币种配置中对于未打开兑换功能的货币，无法支持币种对配置；
    - 币种对无法找到的币种，可以通过快捷按钮进行币种配置；

- 币种配置将货币兑换从开通改为关闭，新增了是否存在汇兑币种对配置的逻辑判断；（证券后台 - 业务参数设置 - 资金参数 - 币种）
- 【新建】和【编辑】公司银行账户优化（路径：证券后台 - 业务参数设置 - 资金参数 - 公司银行账户）
    - 如果存在重复的银行卡，会提示无法重复添加。对于银行相关的字段从人工输入改为下拉选择：国家/地区、银行代码、银行名称、Swift Code、银行地址。

- 隐藏出金记录的字段“渠道出账状态”（路径 1：「证券后台 - 款项管理 - 出金 - 提现处理 - 已结束」明细列表；路径 2：「证券后台 - 款项管理 - 出金 - 出金记录」）
    - 因为出金记录只受到提现状态的控制，对于渠道出账状态是系统内部逻辑，为避免误解，故将“渠道出账状态”字段隐藏

- 会计中台新增报表导出-MYOB（路径：证券后台 - 会计中台 - 会计分录）
    - 会计中台新增报表导出-MYOB
    - 简化了报表导出页面
    <img src="/assets/PhP7b0eaKosp66xCC8tchGcXnmc.png" src-width="2346" src-height="1226" align="center"/>

- 保证金管理交互设计优化（路径：风控管理 - 保证金）
    - 统一不同保证金类型的增删改查页面设计
    - 增加多头股票保证金和期权保证金系数批量删除功能。

- 入金账单优化（路径：证券后台 - 款项管理 - 银行账单 - 入金账单）
    - 入金账单中新增了被屏蔽的记录
    - 入金记录是否需要屏蔽可以在后台切换。
        不屏蔽是指相应入金记录可以通过入金匹配流程将资金加到客户的证券账户
        屏蔽是指相应入金记录不会进入后续入金匹配流程；
    - 支持人工修改对应入金记录的网银流水号
    - 对于入金账单【手工关联】操作支持手工关联加款记录
    - 权限：accounting.deposit_bill_blocking_operation 入金账单屏蔽操作
    <img src="/assets/DDWjbuNjJoEVUpxSDuYctTrjnVd.png" src-width="3258" src-height="952" align="center"/>
    <img src="/assets/WoXjbzMkwo0tJTxHQVSc6MZ9nVb.png" src-width="2472" src-height="1730" align="center"/>
    <img src="/assets/S9rGbkHUvoaJBVxjt7McO2qcnec.png" src-width="3662" src-height="1366" align="center"/>

- 出金账单优化（路径：证券后台 - 款项管理 - 银行账单 - 出金账单）
    - 支持人工修改对应出金记录的网银流水号
    - 权限：accounting.edit_online_banking_serial_number 编辑网银流水号
    <img src="/assets/D4BEboFBFozVdZx5Yytc7ocpngh.png" src-width="3268" src-height="1090" align="center"/>

