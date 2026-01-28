---
title: 2025-11-24 更新日志
slug: 2b05bab0c2cc80198b77d51a268c3006
sidebar_position: 1
version: stable
---


# 2025-11-24 更新日志

# 🎉 新功能

- WBO 加密货币出入功能说明（对接 HashKey）
    <img src="TAombqpu8oOff3xajZUjY1T1pZb" src-width="3294" src-height="822" align="center"/>
    <img src="AFMTbiDrRolX6Jx1CS9j6PGzpKg" src-width="3276" src-height="822" align="center"/>
    <img src="UIO2byfGForHexxsh2Sjyw7cpCc" src-width="3270" src-height="1026" align="center"/>
    <img src="EeAjbQU3uoUu7pxyVCQjs2Jepbg" src-width="3300" src-height="1436" align="center"/>
    <img src="EfVfbo8ZAodgfTxKetEjV3Nnpgg" src-width="3256" src-height="874" align="center"/>
    <img src="JobpbYjG1ov6SDxMdAyjZQ3XpEc" src-width="3298" src-height="788" align="center"/>
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

- 后台手动换汇时，汇兑策略支援手动选择
    <img src="Y1GUbSetBoTYI4x2XIYjjJkepGc" src-width="2508" src-height="1352" align="center"/>
    <img src="KUVNb2ByOo93tixYi4yjgU1apvh" src-width="3268" src-height="876" align="center"/>
    - 后台操作【手动换汇】时，可依需求手动选择汇兑策略；人工选定后，客户汇兑将立即执行。页面预设采用系统判定模式，此模式下将按人工预设的汇兑策略完成汇兑。
若配置的「换汇策略」仅包含系统默认的全部汇兑类型，客户提交换汇后，匹配的汇兑池类型将汇总显示为「--」，换汇策略则按系统默认值展示。
    - 路径：WBO - 款项管理 - 换汇 - 客户汇兑

