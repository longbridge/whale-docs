---
title: 2024-12-23 更新日志
slug: KMI9w4Vw1id4n8kbkmscGlTVnMf
sidebar_position: 9
---


# 2024-12-23 更新日志

# 🎉 新功能

- 新增到账时间，预估费用配置
    - 对于客户在 App 提交出金申请时对应的“到账时间”以及“预估费用”提示内容，可根据客户银行卡、提交时间点、币种以及出金范围进行后台区分配置
    - 路径：证券后台 - 业务参数设置 - 出金规则 - 出金参数
    - 权限 1：withdrawalparameter.withdrawal_parameter_query 出金参数查询
    - 权限 2：withdrawalparameter.withdrawal_parameter_management 出金参数管理
    <img src="/assets/YNQ8bFwEZoP0JIxGMEIcs1bbnTd.png" src-width="3310" src-height="760" align="center"/>
    <img src="/assets/XmSwbr9vpo8nE3x78zpc1mO1ncg.png" src-width="3308" src-height="972" align="center"/>
    <img src="/assets/MB0Qb0MJcoSrX2x6FvicUhQhnKh.png" src-width="1386" src-height="1430" align="center"/>

- 借币提醒快照查询
    - 增加快照查询功能，可查询快照时刻的欠款/可兑换金额以及现金/余额通数据。
    - 路径：风控管理 - 授信额度 - 借币提醒 - 快照
    - 权限：借币提醒快照查询：margin_call.risk_debt_snapshot
    <img src="/assets/B6XVbztqCoiaCSxbujmcrIRLnvh.png" src-width="3314" src-height="1558" align="center"/>

- 授信系数规则配置
    - 新增根据客户净资产水平设置差异化授信系数功能；若设置规则，则优先取满足规则的授信系数，否则取默认设定。
    - 注：
    - 1）规则设定非必填项，根据实际业务需要配置
    - 2）若客户净资产水平满足多个规则设定条件，则系统默认取第一条匹配到的规则。
    - 路径：业务参数设置 - 风控 - 授信客户参数
    <img src="/assets/LeK4buamfoGWg4xGMSUcx2OXn6f.png" src-width="3352" src-height="1622" align="center"/>

# 🪀 改进与修复

- 开户认证方式变更后，对原本入金处理流程优化
    - 如果开户认证方式变更时，客户入金申请未关联且能有对应的证券账号，在开户成功后客户可在 App 进行撤销；
    - 如果开户认证方式变更时，客户入金申请未关联但无法对应到相应证券账号，则后台会有消息告警，根据告警信息在后台可撤销
    - 路径 1：证券后台 - 款项管理 - 入金 - 入金申请
    - 如果开户认证方式变更时，客户入金申请已匹配入账且能有对应的证券账号，在开户成功后系统会自动将加款状态“开户入金处理中”更新为“加款成功”
    - 如果开户认证方式变更时，客户入金申请已匹配入账但无法对应到相应证券账号，则后台会有消息告警，根据告警信息在后台可驳回操作
    - 路径 2：证券后台 - 款项管理 - 入金 - 开户中入金
    <img src="/assets/JXTzbDjEkouxklxD9crcyG2Dnuh.png" src-width="3248" src-height="816" align="center"/>
    <img src="/assets/CH9xbRCito5cmTxO29Eccuqznie.png" src-width="3588" src-height="1236" align="center"/>
    <img src="/assets/QTgUb1Y2QoT0dlxzquHcRSyEnOc.png" src-width="3258" src-height="862" align="center"/>
    <img src="/assets/KlqQbob5CoEwo4xIFeLc0Mlonnb.png" src-width="3592" src-height="1280" align="center"/>

- 入金支持多家收款行配置
    - 在客户选定银行卡以及入金币种之后，可以自主切换收款行，后台可支持配置多家入金银行。
    - 路径：证券后台 - 款项管理-App 管理 - 入金参数
    <img src="/assets/W1n3bA294ofhYYxKJgicr4d0nPc.png" src-width="3790" src-height="846" align="center"/>

- 换汇策略优化
    - 新接入的柜台公司会在初始化时新增一条默认的换汇策略
    - 换汇策略如果选定“服务策略=换汇池换汇”，则可以设置汇兑池是否拦截
        - 不拦截：是指客户换汇在选定换汇池换汇后，无论剩余额度是否充足，都可以继续提交换汇，换汇成功后正常加减汇兑额度；
        - 拦截：是指客户换汇在选定换汇池换汇后，需要判断剩余额度，目前线上逻辑
    - 【新建】和【编辑】操作新增“汇兑类型”和“服务策略”字段解释
    - 汇兑策略的服务时段支持 7×24 配置
    - 汇兑策略的币种对支持全量配置，全部币种对来自「证券后台 - 业务参数设置 - 汇兑 - 换汇策略」的配置
    - 【新建】操作的“汇兑类型”支持多选
    - 路径：证券后台 - 业务参数设置 - 汇兑 - 换汇策略
    <img src="/assets/HMhGbwnX6ot1ivxdJYncyK0gnvh.png" src-width="2862" src-height="1220" align="center"/>
    <img src="/assets/QNkObLuBIo1I1jxLV28cA4Ljnbf.png" src-width="906" src-height="1332" align="center"/>
    <img src="/assets/HOwdbBppkof9d9xFbBXcLicDnPd.png" src-width="2484" src-height="1332" align="center"/>

- 审核客户银行卡输入的备注对接备注模板
    - 在后台审核银行卡，如果选择【拒绝】，则人工输入的备注可以从预设备注进行选择。
    - 对于输入的备注可以选择客户是否可见，如果选择“可见”，则在推送审核结果的消息中会将备注带给客户；如果选择“不可见”，则相应备注只能后台看到，客户在消息中看不到
    - 路径 1：证券后台 - 款项管理 - 客户银行卡
    - 拒绝客户绑卡的预设备注可以在后台进行自定义
    - 路径 2：证券后台 - 业务参数设置 - 备注模板
    <img src="/assets/JSx0b3GTyoR9w4xwN6XcarPanlz.png" src-width="2850" src-height="1214" align="center"/>
    <img src="/assets/TFvLb0HHmowzzvxydnFcT85znof.png" src-width="2862" src-height="1220" align="center"/>

- 银行标准版模板支持多个文件导入
    - 对于入金账单银行标准模板单个文件导入的基础上，可支持多个文件导入
    - 路径：证券后台 - 银行账单 - 入金账单
    <img src="/assets/OgEcbDGY1o0MqYxpMTNcXeAKnZe.png" src-width="2850" src-height="680" align="center"/>
    <img src="/assets/VCPibkmk8oc4h5xcdqKcykJTnFc.png" src-width="2482" src-height="1338" align="center"/>

- 入金申请创建时间默认本周
    - 进入入金申请页面创建时间默认本周，但可人工修改
    - 路径：证券后台 - 款项管理 - 入金 - 入金申请
    <img src="/assets/CUjebNYScodWiNxH7P4cWBgPnoq.png" src-width="2276" src-height="890" align="center"/>

- 将入金申请【更改】新增权限以及【查看备注】优化
    - 将入金申请【更改】新增权限，如未申请该更改权限，后台无法看到对应操作按钮
    - 添加备注支持附件导入
    - 路径：证券后台 - 款项管理 - 入金 - 入金申请
    - 权限：atm.deposit_request_change 入金申请更改
    <img src="/assets/JpXcbojFSoeT1hxsI4dcv94DnGd.png" src-width="3286" src-height="856" align="center"/>
    <img src="/assets/NhjqbM9ihoLHA9xNdqKcV5IXnsf.png" src-width="3302" src-height="1232" align="center"/>

- 业务码分组更新选择组件
    - 业务码分组更新选择组件
    - 路径：资产账户 - 业务码 - 业务管理
    <img src="/assets/EfMjbgKTCoB1XUxJ6aScV811nZT.png" src-width="3326" src-height="1610" align="center"/>

- 新增权限操作记录
    - 1、路径：全域设定 - 身分管理 - 权限操作记录
    - 2、功能支援：支援管理员检视、筛选使用者的
    - 权限/角色的历史操作记录

