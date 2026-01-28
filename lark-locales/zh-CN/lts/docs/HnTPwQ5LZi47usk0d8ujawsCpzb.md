---
title: '2025-10-11 更新日志 '
slug: 2885bab0c2cc8037af7deec10162ad2a
sidebar_position: 3
version: lts
---


# 2025-10-11 更新日志 

# 🎉 新功能

- 客户银行卡补充入金姓名功能说明
    <img src="IcVJbwS2soovJIxr69BjKFe9pDg" src-width="1280" src-height="313" align="center"/>
    - 功能新增：客户银行卡新增「补充入金姓名」入口，用于解决银行预留姓名与 KYC 资讯不一致的场景。
    - 应用场景：当银行预留姓名与 KYC 资讯不一致时，可通过此功能补充填写。经人工审核的姓名将自动套用于后续 eDDA 授权、入金自动匹配及银行卡绑卡。
    - 工单审批流程：新建 / 编辑 / 删除操作均需工单审批，需配置以下工单：
        - WBO - 款项管理 - 入金 - 新建补充入金姓名待审批
        - WBO - 款项管理 - 入金 - 编辑补充入金姓名待审批
        - WBO - 款项管理 - 入金 - 删除补充入金姓名待审批
    - 路径：WBO - 款项管理 - 客户银行卡
    - 权限：
        - 补充入金姓名查询`atm.update_deposit_name_inquiry`
        - 补充入金姓名操作`atm.update_deposit_name_operation`
        - 补充入金姓名审批`atm.update_deposit_name_approval`

- 资产调拨增加虚拟资产判断校验
    <img src="FARFbLUtqoP66hxSIeUjuaqvpxf" src-width="1280" src-height="416" align="center"/>
    - 1.账户间转账转给主帐户时增加虚拟资产账户判断配置，若开启配置，则当转入方为虚拟资产账户时，需要校验公司账户头寸，头寸不足在后台划转时会提示。如需打开配置，可联系长桥客服协助申请。
    - 2.账户间转仓增加限制虚拟资产账户划转股票。
    - 路径：WBO-资产账户-资产调拨

# 🪀 改进与修复

- 入金申请新增重复提示功能
    - 功能新增：系统将对满足以下条件的入金申请触发重复提示：
    - 时间范围：7 日内提交的申请
    - 关键资讯：通知金额、币种、客户证券帐号完全一致
    - 路径：证券后台-款项管理-入金-入金申请

<img src="D7s9bTekRodwjkxXBHnjSHTApid" src-width="1280" src-height="498" align="center"/>

- 出金记录优化
    - 因出金记录字段繁杂，已将同类字段（含公司银行账户、客户信息、收款银行、备注、金额、状态、时间）合并展示，以方便客户查询。
    - 路径：WBO - 款项管理 - 出金 - 出金记录

<img src="HcrFbOgBOowcJExjUnRjYeOupFd" src-width="1280" src-height="367" align="center"/>

- 授信FPS规则数据源切换并支持多语言
    - 1.FPS规则数据源切换直接调用KYC信息。规则配置变量范围同当前一致，含“职业信息&gt;职业性质”以及“资产投资”信息。
    - 注：
        - 1）KYC信息按客户类型（个人/企业/联名户）区分，不同客户类型请根据规则变量名称分别配置
        - 2）如线上已配置FPS规则，请按本次最新变量更新配置
    - 2.FPS规则变量支持多语言
    - 路径：WBO-风控管理-授信额度-融资授信-客户FPS

<img src="FP00beZ2toFuvpxav4fjw12dpEf" src-width="1280" src-height="684" align="center"/>

- 支持自订金额为客户完成换汇：
    <img src="PcndbTYw6ovjPoxy7s6jonHHpwc" src-width="1280" src-height="680" align="center"/>
    - 针对客户换汇申请，操作人员可在后台指定金额进行处理。
    - 路径：WBO - 款项管理 - 换汇 - 客户换汇

- 支持手工调账业务码管理：
    <img src="IRssbIORvoumiLxWjVLjHextpzb" src-width="1280" src-height="350" align="center"/>
    - 如手工调账需增减业务码，可在业务码分组进行管理。
    - 路径：WBO - 资产账户 - 业务码 - 业务管理

- 客户银行卡 / 证券存入【批量新增】交互优化
    - 批量新增功能新增二次确认页面：仅点击【确定】后，解析成功的纪录方可导入；同时在导入页面新增【最小化视窗】操作（支援退出至后台），若需重新操作，点击右上角传输列表中的对应纪录即可返回原页面。
    - 路径 1：WBO - 款项管理 - 客户银行卡
    - 路径 2：WBO - 证券管理 - 证券存入 - 存入限制
        <img src="K1ctb6JEKoZGfnxQ302jEDhspoc" src-width="3320" src-height="1774" align="center"/>
        <img src="G08SbM0Uso5KoCxbcGZjb4AZpdf" src-width="3320" src-height="1764" align="center"/>
        <img src="LrE0bpV1KooKTzxmtwljvgmHp6g" src-width="3360" src-height="828" align="center"/>

- 开户入金匹配后驳回联动处理规则
    <img src="GycibHZlUorseRxVPRRjywzOpdb" src-width="4273" src-height="810" align="center"/>
    - 开户入金场景下，若提交的入金申请已完成匹配，一旦开户请求被驳回，系统将自动驳回该笔已匹配的开户入金纪录；驳回后，系统会同步自动撤销客户的入金申请。
    - 路径：WBO - 款项管理 - 入金 - 开户中入金

- 自动延续上一日汇率优化
    <img src="D8z1bP9mmo0jwuxdS3ujWxgvpmd" src-width="2930" src-height="812" align="center"/>
    - 针对汇率类型为「账面汇率」的场景，系统新增自动延续上一日汇率的流程：若当前各币种汇率尚未导入，系统将自动复制上一日对应币种的汇率进行填补。
    - 路径：WBO - 款项管理 - 换汇 - 参考汇率

- DA日结单和月结单默认生成
    <img src="ADmqbxgKkon3BVxR67Vj1kdRpPb" src-width="3008" src-height="1434" align="center"/>
    - DA账户的日结单和月结单将默认生成，其中月结单支持批量发送，日结单暂不支持批量发送
    - 路径：结单管理

