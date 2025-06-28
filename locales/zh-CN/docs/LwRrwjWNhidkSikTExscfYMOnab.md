---
title: 2025-06-23 更新日志
slug: LwRrwjWNhidkSikTExscfYMOnab
sidebar_position: 1
version: stable
---


# 2025-06-23 更新日志

# 🎉 新功能

- 后台补单业务类型增加场外交易
    - 支持场外交易独立配置收费规则
    - 支持 OTC 市场不配置日历等
    - 路径 1：清算管理 - 合约管理
    - 路径 2：业务参数设置 - 市场管理 - 市场规则
    - 路径 3：业务参数设置 - 计费管理在港股双柜台上线后，支持按主柜台的代码导出指令；
    <img src="/assets/GaZgbNlkjo3PWoxhZ3tcrjy5ntg.png" src-width="3020" src-height="1258" align="center"/>

- 港股双柜台兼容
    - 在港股双柜台上线后，支持按主柜台的代码导出指令；支持按主柜台的代码合并对账

- 融资利息调整支援同时修改多天
    - 融资利息调整支持同时修改多天
    - 路径：清算管理 - 融资管理
    <img src="/assets/P6Flb563HoXTRBxn802cEiYxnjD.png" src-width="3020" src-height="1266" align="center"/>

# 🪀 改进与修复

- 手工调账增加客户通知功能
    - 手工调账新增/批量新增均增加客户通知功能，若调账时选择通知客户则会在调账成功后自动发送消息。
    - 消息通知功能为非必填项，默认不通知。其中批量新增时请根据帮助中心提示填写。
    - 路径：WBO - 资产账户 - 调账 - 手工调账
    <img src="/assets/NuB8bXcyVoh7etxVmoRcuIsLncl.png" src-width="3266" src-height="1738" align="center"/>

- 账户间转仓增加托管商子仓
    - 账户间转仓支持指定转出托管商子仓，转入方托管商子仓信息默认与转出方一致。
    - 路径：WBO - 资产账户 - 资产调拨 - 账户间转仓
    <img src="/assets/Ht4Gb3uhmoVGrgxeIrfcRNGrnjb.png" src-width="3228" src-height="1750" align="center"/>

- 入金记录优化
    - 为使展示更直观，已将「公司银行账户」、「客户」、「汇款银行」、「入金账单」等零散资讯汇总展示。
    - 路径：WBO - 款项管理 - 入金 - 入金记录
    <img src="/assets/JNyRbrDJoo1Boox5RhXcv4ern8d.png" src-width="3278" src-height="1054" align="center"/>

- eDDA 授权记录功能升级及工单配置说明
    - 一、功能优化：新增 4 大 Tab 入口提升操作效率
        - eDDA 授权记录页面新增 4 个分类 Tab：待处理（Pending）、待审批（Awaiting Approval）、暂无法审批（Temporarily Unapproachable）、全部（All），支持后台操作者按业务状态快速筛选目标记录，大幅缩短信息检索时间。
    - 二、重要配置：工单审批流程必配项
        - eDDA 后台审批功能已对接工单系统，上线前需完成以下配置：
        - 工单流程名称 1：WBO - 款项管理 - 出入金方式 - eDDA - 人工确认待审批
        - 工单流程名称 2：WBO-款项管理 - 出入金方式-eDDA-置为失效待审批
        - 配置必要性：若未完成该流程配置，将导致 eDDA 审批功能无操作按钮。
    - 三、操作影响提示
        - 请同步完成工单流程配置，避免因流程缺失导致审批链路阻断，确保 eDDA 业务处理的连续性。
    - 路径：WBO - 款项管理 - 出入金方式 - eDDA
    <img src="/assets/DJVbbyCOAoQEAqxuAmDcRIZinvH.png" src-width="3264" src-height="1148" align="center"/>

- 基金订单新增拒单功能
    - 公募基金/私募基金的订单和基金清算新增拒单操作。
    - 路径：
        - 基金管理-公募基金-客户订单/基金清算
        - 基金管理-私募基金-客户订单/基金清算
    <img src="/assets/XAl4b5EOyoQgfnxfXqccqMHUn9f.png" src-width="2858" src-height="1878" align="center"/>

- 优化清算撤销体验
    - 增加提醒、优化文案
    - 路径：清算管理 - 清算撤销
    <img src="/assets/POlsbc9BjoKdHcxRfeCc1llbnvf.png" src-width="3022" src-height="1256" align="center"/>
    
