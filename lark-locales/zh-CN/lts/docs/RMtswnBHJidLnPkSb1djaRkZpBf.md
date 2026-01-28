---
title: 2024-01-22 更新日志
slug: GBUBwF3xJiv1M4kSe03cYPgjnyr
sidebar_position: 47
---


# 2024-01-22 更新日志

# 🎉 新功能

- 文件导入新增隐藏无用文件类型的功能
    - 路径：清算管理-文件处理-导入配置
    - 文件类型默认按导入次数倒序排列

<img src="R40XbhWZdoeQv2xiYf8jLfT9pWc" src-width="3496" src-height="1734" align="center"/>

<img src="EfMVb3aMOonzvPxrXZKjWvx6pCc" src-width="3496" src-height="1734" align="center"/>

- 台风天接入工单并优化交互
    - 路径：清算管理-台风天处理
    - 未设置工单审批流程默认通过
    - 工单唯一标识：clearing.typhoon_date.exec

<img src="PvUbb6fZmoOoLmxyjbmjc06gprg" src-width="3496" src-height="1734" align="center"/>

- 清算撤销接入工单
    - 路径：清算管理-清算撤销
    - 未设置工单审批流程默认通过
    - 工单唯一标识：clearing.re_clearing.exec

<img src="U6QcbypMPojZMOx5pm3jC8DZpCd" src-width="3496" src-height="1734" align="center"/>

- 自愿类公司行动增加提前完成指令收集功能
    - 路径：公司行动-详情-提前完成指令收集
    - 指令收集状态为指令收集中的可操作
    - 针对线下行权的公司行动，在提交指令收集时可以屏蔽消息（不打钩）

<img src="Oo2objABtoCqgcx3JY7j5XnzpTd" src-width="3496" src-height="1734" align="center"/>

<img src="PRilb2RbroTiu2x200ajJ4y4pwf" src-width="3496" src-height="1734" align="center"/>

- 修改客户登录邮箱的认证状态
    - 支持在后台单次/批量修改客户登录邮箱的认证状态
    - 路径：CRM-账户管理-工单中心-修改客户数据

<img src="ESMCb8AA1odzKDx9JLSjluHdpCb" src-width="2898" src-height="1086" align="center"/>

# 🪀 改进与修复

- 业务码修改&交易额度设置接工单审批
    - 交易额度【设置】对接工单审批。审批流为：BSS-风控管理-客户交易额度-设置
        路径：「风控管理」-「授信额度」-「交易额度」
    - 业务码修改对接工单审批。审批流为：BSS-资产账户-业务码-业务码查询-编辑业务码
        路径：「资产账户」-「业务码」-「业务码查询」
    - 本次所涉审批场景默认后台超级管理员审批，如需更改审批流程，请至对应的审批流进行配置修改。配置路径：「全局设置」-「身份管理」-「审批流程配置」

<img src="KevwblIoqoGZ0gxEZA5jzOUHpeb" src-width="3254" src-height="1154" align="center"/>

- 港股IPO整体配置更精简，整体结构及互动优化

<img src="QatZbyE2ao6YQmx8wguj6hc2pQg" src-width="1280" src-height="770" align="center"/>

- 授信组支持导出所有组信息和组内账户信息

<img src="VsZOb2C1to9eq4xIy37jZ7yApZb" src-width="3214" src-height="542" align="center"/>

- 结单查询支持自定义设置列表

<img src="SbZFbAcs6ogf9nxokHUjPKBmpxg" src-width="3220" src-height="554" align="center"/>

- 新增margin call和调账场景通知订阅
    - 新增Margin Call通知订阅功能，支持在客户触发margin call时，通过email通知内部人员；
    - 新增调账失败通知订阅功能，支持在调账失败时，通过email通知内部人员。

- 风控报表菜单下线
    - 涉及菜单如下：
        - 「风控管理」-「保证金」-「保证金风险指标」
        - 「风控管理」-「风控报表」
    - 涉及报表如下：
        - 保证金风险指标 RDR035 - Margin Risk Index
        - 客户持仓明细 RDR028 - Client Position Details
        - 股票组监控 RDR036 - Stock Group Monitoring
        - 客户融资监控 RDR037 - Client Financing Monitoring

- 客户跟进进度填写逻辑优化
    <img src="Ba5WbalD6obDbLxLeEPjJLNNpwc" src-width="2434" src-height="1378" align="center"/>
    - 路径：「CRM」-「KYC」-「开户列表」
    - 支持客户在所有审核状态下，编辑‘客户跟进状态’字段，维护客户跟进进度。

- 账户列表的客户详情页改造
    <img src="JqwFbV03moj0JGx3sKGjEokgp9b" src-width="2538" src-height="736" align="center"/>
    <img src="QxGRb3PuJoGHXKx8M08jTvXUpZ2" src-width="2602" src-height="1154" align="center"/>
    - 路径：「CRM」-「账户管理」-「账户列表」-【详情】
    - 在账户列表的详情入口页，点击‘详情’按钮，优化展示为客户详情侧边栏，且侧边栏展示更多账户信息。

