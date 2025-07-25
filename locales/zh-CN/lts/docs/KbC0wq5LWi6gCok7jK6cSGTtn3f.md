---
title: 2025-07-21 更新日志
slug: KbC0wq5LWi6gCok7jK6cSGTtn3f
sidebar_position: 0
version: lts
---


# 2025-07-21 更新日志

# 🎉 新功能

- 客户银行卡补充入金姓名功能说明
    - 功能新增：客户银行卡新增「补充入金姓名」入口，用于解决银行预留姓名与 KYC 资讯不一致的场景。
    - 应用场景：当银行预留姓名与 KYC 资讯不一致时，可通过此功能补充填写。经人工审核的姓名将自动套用于后续 eDDA 授权、入金自动匹配及银行卡绑卡。
    - 工单审批流程：新建 / 编辑 / 删除操作均需工单审批，需配置以下工单：
        -  WBO - 款项管理 - 入金 - 新建补充入金姓名待审批
        -  WBO - 款项管理 - 入金 - 编辑补充入金姓名待审批
        -  WBO - 款项管理 - 入金 - 删除补充入金姓名待审批
    - 路径：WBO - 款项管理 - 客户银行卡
    - 权限：
        - 补充入金姓名查询`atm.update_deposit_name_inquiry`
        - 补充入金姓名操作`atm.update_deposit_name_operation`
        - 补充入金姓名审批`atm.update_deposit_name_approval`
    <img src="/assets/BX4xbGoqBoLtMJx4fm1cmfVXnOe.png" src-width="2048" src-height="501" align="center"/>

- 资产调拨增加虚拟资产判断校验
    - 1.账户间转账转给主帐户时增加虚拟资产账户判断配置，若开启配置，则当转入方为虚拟资产账户时，需要校验公司账户头寸，头寸不足在后台划转时会提示。如需打开配置，可联系长桥客服协助申请。
    - 2.账户间转仓增加限制虚拟资产账户划转股票。
    - 路径：WBO-资产账户 - 资产调拨
    <img src="/assets/KKZQbE6LwoZubExadN7cN1Jknjh.png" src-width="3696" src-height="1202" align="center"/>

# 🪀 改进与修复

- 入金申请新增重复提示功能
    - 功能新增：系统将对满足以下条件的入金申请触发重复提示：
    - 时间范围：7 日内提交的申请
    - 关键资讯：通知金额、币种、客户证券帐号完全一致
    - 路径：证券后台 - 款项管理 - 入金 - 入金申请
    <img src="/assets/MhUybf6ydom8EJxv3AQcybmvnnd.png" src-width="2310" src-height="900" align="center"/>

- 出金记录优化
    - 因出金记录字段繁杂，已将同类字段（含公司银行账户、客户信息、收款银行、备注、金额、状态、时间）合并展示，以方便客户查询。
    - 路径：WBO - 款项管理 - 出金 - 出金记录
    <img src="/assets/H8f9bTX6wofocBxeGWjctRSonxh.png" src-width="3270" src-height="938" align="center"/>

- 授信 FPS 规则数据源切换并支持多语言
    - 1.FPS 规则数据源切换直接调用 KYC 信息。规则配置变量范围同当前一致，含“职业信息&gt;职业性质”以及“资产投资”信息。
    - *注：
        - 1）KYC 信息按客户类型（个人/企业/联名户）区分，不同客户类型请根据规则变量名称分别配置
        - 2）如线上已配置 FPS 规则，请按本次最新变量更新配置
    - 2.FPS 规则变量支持多语言
    - 路径：WBO-风控管理 - 授信额度 - 融资授信 - 客户 FPS
    <img src="/assets/ZGh3bq6MUo3SEaxW2Pncc59Dnrd.png" src-width="3286" src-height="1756" align="center"/>
    
