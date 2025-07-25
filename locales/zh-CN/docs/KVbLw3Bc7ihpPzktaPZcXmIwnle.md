---
title: 2024-04-08 更新日志
slug: 24-04-08
sidebar_position: 32
---


# 2024-04-08 更新日志

# 🎉 新功能

- 新增 SFC 要求的 Shortfall 压力测试
    - 支持创建 Shortfall 压力测试任务
    - 系统自动计算单一客户是 Shortfall
    - 系统自动计算股票不可抵押后的 Shortfall 变化 Top 10
    - 路径：「证券后台」-「风控管理」-「压力测试」-「速动资金短欠」
    - 新增权限：
        - `risk.elc_test_management`
        - `lb_hk_margin_call.risk_monitoring_stock_level_query`
    <img src="/assets/O8d6biA5aovDjCxIQePcgCN8n5c.png" src-width="3740" src-height="1438" align="center"/>

- KYC 详情页导出的文件列表新增签名文件
    - KYC 详情页导出的文件列表新增签名文件
    - 路径：「客户管理系统」-「KYC」-「开户审核」-「开户列表」
    <img src="/assets/TY93bHsAlogu8jxM6Suc3AXynqc.png" src-width="2460" src-height="1090" align="center"/>

- 工单支持自定义默认审批流程
    - 在审批流程配置中，新增默认审批流配置的入口
    - 在具体的工单业务场景下，若工单审批流程未配置，则会取到默认审批流配置的流程
    - 配置路径：「全局设置」-「身份管理」-「审批流程配置」-「默认审批流配置」
    <img src="/assets/ZqhBbdO5roHtaLxmTd1cSDDpnrP.png" src-width="2462" src-height="732" align="center"/>

- 工单新增业务分类及配置标识
    - 在工单的审批流程配置及详情中，新增’业务分类‘字段的筛选和展示
    - 在工单的审批流程配置中，新增是否配置审批节点的标识
    - 已有的审批流程，可通过标识来检查是否有正常配置审批节点
    - 路径：「全局设置」-「身份管理」-「审批流程配置」
    <img src="/assets/GRGsbTe45o1OIox9K1PclzOOnEb.png" src-width="2540" src-height="919" align="center"/>

- 新增实验室功能的开启
    - 新增实验室功能入口
    - 路径：「全局头像」-「实验室功能」
    - 在实验室功能内，可选择开启/关闭实验室功能
        - 若选择’开启‘，则在相关的单个菜单页面内，支持多窗口多标签同时展示，且不同窗口间可以拖拽至任意位置，方便同时查看多条数据
        - 目前已支持的页面：CRM-KYC-开户列表，后续将持续新增
        - 若选择’关闭‘，则不影响目前的使用
        <img src="/assets/GrPsbumgtoieVYxckpycV9MKnBe.png" src-width="2468" src-height="1010" align="center"/>
        <img src="/assets/YBjpbqNUCokxw3xpIIkcQRWHnPo.png" src-width="2834" src-height="845" align="center"/>

# 🪀 改进与修复

- 消息记录查询能力优化
    - 支持消息记录导出
    - 支持通过发邮邮箱及证券账号查询记录
    - 支持证券账号、发邮邮箱展示
    - 路径：「客户管理系统」-「消息中心」-「消息模板」
    <img src="/assets/He7hbtZqIoATc0xtD6mczRzWnqb.png" src-width="3178" src-height="784" align="center"/>

- 出、入金对账新增字段“账务日期”
    - 出、入金对账新增字段“账务日期”
    <img src="/assets/Bre5bavteofJ14xJ7sIcnLjXnFe.png" src-width="2794" src-height="946" align="center"/>

- 已拒绝的入金凭证后台无感删除
- 用户可以根据币种对设定即可控制币种的汇兑开关

