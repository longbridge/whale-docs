---
title: 2025-06-30 更新日志
slug: BGLywY6Y2iVtP4kNZ1WcvxyFnJt
sidebar_position: 3
version: lts
---


# 2025-06-30 更新日志

# 🎉 新功能

- 支持所有证券类调账撤销
    - 全面支持所有调账类型的撤销功能，含普通撤销和无痕撤销
    - 列表新增撤销批次号字段；如需缩减列表展示字段可使用“自定义列表”功能
    - 路径：证券后台 - 资产账户 - 调账 - 手工调账
    <img src="/assets/S7ctbLmB3oYX7oxpcTmcnbaZnJf.png" src-width="3440" src-height="1120" align="center"/>

- 授信组额度变更增加工单审批流程
    - 调整授信组额度及调整授信组内账户额度增加工单审批流程，涉及功能入口见图示。支持根据额度区间设置不同的审批流。
    - 关联审批流：
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_back
        - credit.adjust_account_credit_call_back
        - credit.change_group_credit_call_back
    - 路径：证券后台 - 风控管理 - 授信额度 - 融资授信 - 额度审批

<img src="/assets/He47bQJ8FoV983xAviUcPiHWnSf.png" src-width="3212" src-height="856" align="center"/>

- 交易限额批量新建优化
    - 客户限额/证券限额/交易员限额批量创建功能优化，更换为批量新建统一组件，可按批次差异化设置限额规则。
    - 路径：证券后台 - 风控管理 - 交易限额 - 客户限额/证券限额/交易员限额

<img src="/assets/XtvkbAPdjoIVOqxnknTcnEpqnmf.png" src-width="3248" src-height="824" align="center"/>

- 公司行动对接工单审批
    - 新增公司行动模块的审批功能，用户在配寘相关工作流后在下列节点发起审批：
        - 预告执行
        - 预告撤销
        - 退税执行
        - 撤销退税

<img src="/assets/KjW5bNeFAocG83xyCSpcpNN4nxh.png" src-width="3090" src-height="1756" align="center"/>

- 美股换股公司行动预告自动创建

<img src="/assets/WdUMbImJIoiqyoxQuSDcArU6nWg.png" src-width="2522" src-height="1238" align="center"/>

- 后台补单业务类型增加场外交易
    - 支持场外交易独立配置收费规则
    - 支持 OTC 市场不配置日历等
    - 路径 1：清算管理 - 合约管理
    - 路径 2：业务参数设置 - 市场管理 - 市场规则
    - 路径 3：业务参数设置 - 计费管理在港股双柜台上线后，支持按主柜台的代码导出指令；
    <img src="/assets/Mt9tbv9Cto0W5pxR4QocFp3In6c.png" src-width="3020" src-height="1258" align="center"/>

- 港股双柜台兼容
    - 在港股双柜台上线后，支持按主柜台的代码导出指令；支持按主柜台的代码合并对账

- 融资利息调整支援同时修改多天
    - 融资利息调整支持同时修改多天
    - 路径：清算管理 - 融资管理
    <img src="/assets/FbZYbk2KIoXulVxBNOicOqjNn8d.png" src-width="3020" src-height="1266" align="center"/>

# 🪀 改进与修复

- 证券存入业务优化：新增实物股票手续费录入功能
    - 后台执行【手工入仓】操作并选择实物股票类别时，系统将自动弹出手续费编辑框，供操作人员根据实际业务需求填写应收手续费。
    - 路径：证券后台 - 证券管理 - 证券存入 - 存入申请

<img src="/assets/Q2dBbfJPVoALgwx1Z3WcIgxTnug.png" src-width="3310" src-height="1758" align="center"/>

- eDDA 记录新增回收站功能
    - eDDA 记录新增回收站功能，可在此模组中单独查询已删除的 eDDA 记录。
    - 路径：证券管理 - 款项管理 - 出入金方式-eDDA

<img src="/assets/E9LNbtYfDomgX0xCesjcCGMRnQc.png" src-width="3298" src-height="954" align="center"/>

- 客户额度调整页面优化并增加自定义列表功能
    - 客户额度页面增加“自定义列表”功能
    - 调整额度由页面更改为侧边栏
    - 路径：证券后台 - 风控管理 - 授信额度 - 融资授信 - 客户额度

<img src="/assets/WNzWbPs6YoubE4xde6lczkRsnZd.png" src-width="3212" src-height="614" align="center"/>

- 出金申请客户标记交互优化
    - 标记条件从单一「客户编号」拓宽至多维度（如证券帐号、银行名称等），支援多组标记同时批量添加，提升操作效率。
    - 新增历史标记记录列表，清晰展示标记时间、操作人及标记内容；支援按需单独或批量取消标记，灵活回溯与修正。
    - 符合标记条件的出金申请，将在详情页自动显示标记备注，强化业务资讯关联性与审核依据透明度。
    - 路径：证券后台 - 款项管理 - 出金申请

- BE 公司行动新增专项邮件发送功能
    - 根据派息是否需要垫资的场景发送特定的邮件

<img src="/assets/Q7MXbfEvHo2dZ0xUIARcXCHKnPb.png" src-width="3234" src-height="1766" align="center"/>

- 客户汇兑单信息展示优化
    - 列表移除「客户姓名」展示，将客户编号设为可点击跳转项目。
    - 路径：证券后台 - 款项管理 - 换汇 - 客户汇兑

<img src="/assets/PazLbxOlioEIBOxuVXScCBx8nMe.png" src-width="3308" src-height="1756" align="center"/>

- 手工调账增加客户通知功能
    - 手工调账新增/批量新增均增加客户通知功能，若调账时选择通知客户则会在调账成功后自动发送消息。
    - 消息通知功能为非必填项，默认不通知。其中批量新增时请根据帮助中心提示填写。
    - 路径：WBO - 资产账户 - 调账 - 手工调账
    <img src="/assets/MYTNbi4PEollbVxRRnMcXhXjnAg.png" src-width="3266" src-height="1738" align="center"/>

- 账户间转仓增加托管商子仓
    - 账户间转仓支持指定转出托管商子仓，转入方托管商子仓信息默认与转出方一致。
    - 路径：WBO - 资产账户 - 资产调拨 - 账户间转仓
    <img src="/assets/Fl1Wbr0usosdhVxJCqEcyYaxnkI.png" src-width="3228" src-height="1750" align="center"/>

- 入金记录优化
    - 为使展示更直观，已将「公司银行账户」、「客户」、「汇款银行」、「入金账单」等零散资讯汇总展示。
    - 路径：WBO - 款项管理 - 入金 - 入金记录
    <img src="/assets/IP7vbr84poQ0XhxW9Src5txfnlh.png" src-width="3278" src-height="1054" align="center"/>

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
    <img src="/assets/Ozd9bMTrEolM1ExGdCgccDgFnLg.png" src-width="3264" src-height="1148" align="center"/>

- 基金订单新增拒单功能
    - 公募基金/私募基金的订单和基金清算新增拒单操作。
    - 路径：
        - 基金管理-公募基金-客户订单/基金清算
        - 基金管理-私募基金-客户订单/基金清算
    <img src="/assets/YuQLbaBQDoBCrpxGzuxcgP6QnDg.png" src-width="2858" src-height="1878" align="center"/>

- 优化清算撤销体验
    - 增加提醒、优化文案
    - 路径：清算管理 - 清算撤销
    <img src="/assets/MxLAbMDVNoBSfnxAUMiczOD7ndc.png" src-width="3022" src-height="1256" align="center"/>
    
