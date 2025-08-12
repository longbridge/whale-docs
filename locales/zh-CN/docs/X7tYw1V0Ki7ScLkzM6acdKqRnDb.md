---
title: 2025-03-24 更新日志
slug: X7tYw1V0Ki7ScLkzM6acdKqRnDb
sidebar_position: 5
---


# 2025-03-24 更新日志

# 🎉 新功能

- 新增未来账务日期查询功能及日终界面优化
    - 未来账务日期查询：在当前账务日期旁点击「更多」，即可查询未来账务日期
    - 新增单步执行功能，适用于费用修改场景
    - 对日终任务页面进行了细节优化，提升用户体验
    - 路径：清算管理 - 日终任务
    <img src="/assets/Sqy1be8KyosLCdxll0nckqGsn7c.png" src-width="2846" src-height="1358" align="center"/>

- 个性化收费支持添加客户及客户计费查询优化
    - 个性化收费支持添加客户，减少重复配置
    <img src="/assets/V5T7bKFg4oxmATxD01uc7Zqun7c.png" src-width="2846" src-height="1358" align="center"/>
    - 查询到客户计费配置信息后，可直接修改收费配置
        - 可变更客户的计费套餐（原客户组计费）
        - 可变更客户的个性化收费（原客户计费）：可绑定到已有的个性化收费，可复制已有的收费规则
    <img src="/assets/PApzbfwajowdSYx9McAc7WRDn6e.png" src-width="2846" src-height="1358" align="center"/>
    - 界面其他细节优化
        - 客户计费查询支持分组展示
        - 点击刷新配置可将修改的收费配置提前生效
    <img src="/assets/JbYabY9bWorlxdxaxeHc1yZqn6e.png" src-width="2846" src-height="1358" align="center"/>
    - 路径：业务参数设置 - 计费管理
    - 注意：上线后客户组计费将更名为套餐收费，客户计费将更名为个性化收费

- 新增债券利率管理功能
    - 券商可自行维护债券利率，灵活管理债券相关数据
    <img src="/assets/F89PbAtaboz7PFx4IM5c9ijdnDb.png" src-width="2846" src-height="1358" align="center"/>
    - 收盘价管理功能升级为基础信息管理，新增更多公有库字段的临时维护能力
    <img src="/assets/DKzwbjfTKo0bUYxky9ycqEGsnEg.png" src-width="2846" src-height="1358" align="center"/>
    - 路径：清算管理 - 清算标的
    - 注意 1：后续如果有新的可交易债券上市，券商需人工在此添加标的
    - 注意 2：原来的收盘价管理功能将下线

- BE 类公司行动新增在途资金展示
    - BE 类公司行动在执行前，将客户的资金展示在在途资金页面，使其避免误触发保证金追加通知（margin call），此功能有助于客户更清晰地了解其资金状况，避免因资金不足而意外触发保证金追加通知
    - 注意：若预告登记后未执行，请及时撤销预告，以免造成客户购买力虚增
    <img src="/assets/D9DUb0468oVG3gxiTKzc9FhZnje.png" src-width="2846" src-height="1358" align="center"/>

# 🪀 改进与修复

- 出金申请新增反洗钱（AML）审核流程
    - 出金申请支持根据风控规则进行标记，规则包括：首张银行卡、手工提现、融资出金、标记客户转人工、未入金且首次出金转人工、开户至今无交易
    - 所有出金申请均可配置自动审核规则，支持自动提交、自动驳回或人工提交是否需要工单的设置
    - 路径
        - 证券后台 - 款项管理 - 出金 - 出金申请
        - 证券后台 - 业务参数设置 - 出金规则 - 自动审核规则
    - 注意
        - 如租户未设定任何规则，则所有的出金申请都需要人工审批
        - 对于目前线上已经自动提交的租户，在需求上线时，系统会自动生成一条自动提交的自动审核规则
    <img src="/assets/KpKdbKPhAolWeHxSSP4cPAeHndg.png" src-width="2848" src-height="1322" align="center"/>

- 出入金方式-eDDA 后台交互以及功能优化
    - 新增字段：客户端是否展示、是否删除
    - 合并展示信息：公司银行账户、客户证件信息、客户银行卡、银行返回信息
    - 新增操作：后台人工删除记录（需工单审批）
    - 路径：证券后台 - 款项管理 - 出入金方式 - eDDA
    <img src="/assets/HdECb70ndok7FuxXIHwcEJfLn6d.png" src-width="2846" src-height="1358" align="center"/>

- 自动还款开通记录优化
    - 记录所有使用过自动还款功能的客户，展示其当前状态及最新状态更新时间
    - 路径：风控管理 - 授信额度 - 借币提醒 - 自动还款开通查询
    <img src="/assets/S5QHb0GNUo1FV0xxqa2c0bZwn8r.png" src-width="2848" src-height="1322" align="center"/>

- 借币提醒历史记录详情优化
    - 借币提醒历史记录详情更新为弹窗展示，包含消息记录和兑换记录
    - 路径：风控管理 - 授信额度 - 借币提醒 - 历史记录
    <img src="/assets/KOxtbLA1eomPpNxNs7mcVIEmnXc.png" src-width="2848" src-height="1322" align="center"/>

- CCASS 汇率开放编辑
    - CCASS 汇率管理功能更新：支持人工编辑和新建操作
    - 路径：证券后台 - 款项管理 - 换汇 - 参考汇率
    <img src="/assets/GGUJbfWwJoHjVKxF6egcglNUnB5.png" src-width="2846" src-height="1358" align="center"/>

- 出入金以及转仓各币种精度迁移到币种配置
    - 支持配置金额精度及金额取数逻辑
    - 新增相关字段解析
    - 路径：证券后台 - 业务参数设置 - 资金参数 - 币种
    <img src="/assets/PzYEbsLCKoEMyEx6hPucz2FnnIf.png" src-width="2848" src-height="1340" align="center"/>

- 换汇汇率精度统一配置
    - 在需要使用汇率的场景，参与计算以及展示的汇率精度取自兑出币种的配置，最大可支持 10 位
        - 例如：HKD 换 USD 时，由于 HKD 汇率精度配置为 6 位，那么 HKD 兑换为 USD 的汇率为 0.123456
    - 路径：证券后台 - 业务参数设置 - 资金参数 - 币种
    - 注意：该精度设置目前仅适用于客户换汇业务，暂不涉及清算、报表或交易等其他场景
    <img src="/assets/I4JObLCs2o95iLxULiucZc4AnWf.png" src-width="2848" src-height="1322" align="center"/>

- 渠道汇兑异常单复核接入工单
    - 渠道换汇异常单操作【转成功】、【再汇兑】、【转失败】提交之后接入工单
    - 路径：证券后台 - 款项管理 - 换汇 - 渠道换汇
    <img src="/assets/CGk2biMx2oT3NYxf3ILcTlURnmf.png" src-width="2652" src-height="1544" align="center"/>
    
