---
title: 2025-12-15 更新日志
slug: 2ca5bab0c2cc80f0a97cf7923261c911
sidebar_position: 0
version: stable
---


# 2025-12-15 更新日志

# 🪀 改进与修复

- 用户提交出金申请可触发工单生成，后台页面同步优化
    - 单功能预设未启用（避免影响线上运行），审核流配置可见，需使用可提交交付变更（工单标识：atm.withdraw_app_audit）；
    - 未启用时，按现有流程操作；
    - 启用后，申请自动生成审核工单；审核前客户撤销申请，会产生异常工单（需超级管理员关闭，不影响该笔出金业务）；
    - 出金申请新增 Tab 入口，方便按需切换查看。
    - 路径：证券后台 - 款项管理 - 出金 - 出金申请

<img src="N6EqbjdruoyQvkx6I3wj88Mfpdd" src-width="2048" src-height="443" align="center"/>

<img src="AZITbOldNoyKSxxM53wjzxj5pWf" src-width="2048" src-height="692" align="center"/>

- 出金驳回页面优化
    - 出金驳回页面新增文案提示：若当前柜台已开启工单审批，则提示文案为：「确定后需经工单审批，审批通过后将发送消息通知客户出金已驳回」；若当前柜台未开启工单审批，则提示文案为：「确定后即发消息提示客户出金已驳回」
    - 路径：证券后台 - 款项管理 - 出金 - 出金申请

<img src="WogqbKKXBoA7qfxdxAWjXBdwplf" src-width="2048" src-height="788" align="center"/>

<img src="IJClbYiY1oqOfVxvtP9jDxvWppf" src-width="2048" src-height="918" align="center"/>

- 简化市场管理配置流程
    - 简化市场管理配置流程
    - 路径：业务参数设置-市场管理

<img src="SYw9bsBt4o1DPQxgE10jxaXdpZg" src-width="3024" src-height="1624" align="center"/>

