---
title: 2026-01-26 更新日志
slug: LSAYwOGCbiTHypk7JIojSmRFp5c
sidebar_position: 0
version: lts
---


# 2026-01-26 更新日志

# 🎉 新功能

- 支援报表的自动列印
    <img src="X4cTbLJ1WonXEpx3QBqjWMkPpSg" src-width="1593" src-height="764" align="center"/>
    <img src="LTJebEfzqoyAvyxECRijAQJapec" src-width="1593" src-height="764" align="center"/>
    - .支援报表的自动列印
    - 增加部分报表生成时机的标签
    - 路径：报表管理

- WBO 加密货币出入功能说明（对接 HashKey）
    <img src="UFLgb0zUsoeajmxTomXjrsWlpud" src-width="3294" src-height="822" align="center"/>
    <img src="TAsvbrNlzobkMyxiz5fjNhTrpzg" src-width="3276" src-height="822" align="center"/>
    <img src="EUs1bX7UUoG5F7xTqlojuoGFpQf" src-width="3270" src-height="1026" align="center"/>
    <img src="Y7Xobgc1EoKdWHxSATbjrToDpQe" src-width="3300" src-height="1436" align="center"/>
    <img src="Nl4RbNMCroFW8rxmtQtj1JCPp2g" src-width="3256" src-height="874" align="center"/>
    <img src="EEUmbx6rPoqFnTxv4K9jLkWpp9d" src-width="3298" src-height="788" align="center"/>
    - WBO 新增加密货币出入功能，满足客户加密货币出入需求。使用前需完成权限申请，并配置出币申请工单（标识：atm.va.coin_withdraw_apply）的审批流程。核心模组、功能及操作路径如下：
        1. 渠道存管账户：支援渠道存管账户批量新增；未分配的渠道存管账户可在后台手动删除。
            - 路径：WBO - 虚拟资产管理 - 出入币 - 渠道存管账户
        2. 客户钱包地址：客户进行加密货币出入前，需完成钱包地址加白流程；已加白的客户钱包地址将在后台维护。
            - 路径：WBO - 虚拟资产管理 - 出入币 - 客户钱包地址
        3. 入币：支援入币申请查询；可在后台查看客户入币全流程，同时支援后台退币及撤销操作。
            - 路径：WBO - 虚拟资产管理 - 出入币 - 入币
        4. 出币：可在后台审批客户出币申请；支援查询出币全流程。HashKey 虚拟币出币时，区块链手续费从主账户扣，本金从子账户扣。租户需提前在主账户预留足额对应虚拟币（覆盖预估手续费），避免申请失败。若提示手续费不足，可充值主账户或从子账户划转后重提。
            - 路径：WBO - 虚拟资产管理 - 出入币 - 出币
        5. 加密货币：支援在后台新增及编辑加密货币资讯。
            - 路径：WBO - 业务参数设置 - 资金参数 - 加密货币
    - 注意： 虚拟币帐户以「加密货币 + 计价货币」组合标的记帐：入币、出币时按加密货币单独记录，最终同步至证券帐户时，以该组合标的入帐（例：加密货币 ETH，预设计价货币 USD，入帐标的为「VA/HAS/ETHUSD」）。出帐时优先抵扣可用余额较大的币种，若余额不足则自动从次优先级币种扣减。
    - 权限：
        - 渠道存管账户查询 atm.va_channel_custodial_account_inquiry
        - 渠道存管账户操作 atm.va_channel_custodial_account_operation
        - 客户钱包地址查询 atm.va_client_wallet_address_inquiry
        - 客户钱包地址操作 atm.va_client_wallet_address_operation
        - 入币申请查询 atm.va_crypto_currency_deposit_application_inquiry
        - 入币申请操作 atm.va_crypto_currency_deposit_application_operation
        - 入币记录查询 atm.va_coin_deposit_records_inquiry
        - 入币记录操作 atm.va_coin_deposit_records_operation
        - 入币记录退币 atm.va_refund_of_coin_deposit_record
        - 出币申请查询 atm.crypto_currency_withdrawal_application_inquiry
        - 出币申请操作 atm.crypto_currency_withdrawal_application_operation
        - 加密货币查询 atm.crypto_currency_inquiry
        - 加密货币操作 atm.crypto_currency_operation

# 🪀 改进与修复

- 出金规则 - 自动审核规则新增工单审批
    - 功能新增：自动审核规则的所有操作（含【新建】、【编辑】、【删除】及批量【启用 / 停用】），提交后均会新增工单审核。工单标题为「自动审核规则编辑」（工单标识：atm.withdraw_audits_edit）；上线后工单预设自动审批，若需人工审批，可在「审批流程配置」中修改。
    - 路径：业务参数设置 - 出金规则 - 自动审核规则

<img src="N16sb2XpPovbOAxppoKjEvvTpBg" src-width="2482" src-height="826" align="center"/>

---

- 基金管理-公募基金新增交易频率配置
    - 功能新增：公募基金基础信息新增交易规则和交易日历配置，支持以单日、单周、单月为交易周期的基金。原基金渠道中的配置移动至公募基金基础信息。
    - 路径：基金管理-公募基金管理-交易和日历

<img src="MfTBbvHiLo2CRYxkqFzjVaVcpff" src-width="4026" src-height="2692" align="center"/>

---

- 后台手动换汇时，汇兑策略支援手动选择
    <img src="ViarbSmyyoqld7xAp6vjFbRIpZd" src-width="2508" src-height="1352" align="center"/>
    <img src="BPXJb73XWoYOJNx60puj0IS9pMh" src-width="3268" src-height="876" align="center"/>
    - 后台操作【手动换汇】时，可依需求手动选择汇兑策略；人工选定后，客户汇兑将立即执行。页面预设采用系统判定模式，此模式下将按人工预设的汇兑策略完成汇兑。
若配置的「换汇策略」仅包含系统默认的全部汇兑类型，客户提交换汇后，匹配的汇兑池类型将汇总显示为「--」，换汇策略则按系统默认值展示。
    - 路径：WBO - 款项管理 - 换汇 - 客户汇兑

- 用户提交出金申请可触发工单生成，后台页面同步优化
    - 单功能预设未启用（避免影响线上运行），审核流配置可见，需使用可提交交付变更（工单标识：atm.withdraw_app_audit）；
    - 未启用时，按现有流程操作；
    - 启用后，申请自动生成审核工单；审核前客户撤销申请，会产生异常工单（需超级管理员关闭，不影响该笔出金业务）；
    - 出金申请新增 Tab 入口，方便按需切换查看。
    - 路径：证券后台 - 款项管理 - 出金 - 出金申请

<img src="C81tbKDV6oXdvUxrDb6jpdWxpkf" src-width="2048" src-height="443" align="center"/>

<img src="Eo96bwu4hoEnPHxRg1ljZYwgpGf" src-width="2048" src-height="692" align="center"/>

- 出金驳回页面优化
    - 出金驳回页面新增文案提示：若当前柜台已开启工单审批，则提示文案为：「确定后需经工单审批，审批通过后将发送消息通知客户出金已驳回」；若当前柜台未开启工单审批，则提示文案为：「确定后即发消息提示客户出金已驳回」
    - 路径：证券后台 - 款项管理 - 出金 - 出金申请

<img src="Jnw8b2WvjocoZ4xSmeqjIFHapMe" src-width="2048" src-height="788" align="center"/>

<img src="PrQcb4Sljo7yooxApCujvsyFpxl" src-width="2048" src-height="918" align="center"/>

- 简化市场管理配置流程
    - 简化市场管理配置流程
    - 路径：业务参数设置-市场管理

<img src="EFvKbIeDvoxsJvx76uRjjwKGpvb" src-width="3024" src-height="1624" align="center"/>

