---
title: 2025-06-03 更新日志
slug: Vjohwb9L4iLTkpkwMbqczOD4nGc
sidebar_position: 5
version: stable
---


# 2025-06-03 更新日志

# 🎉 新功能

- 支持所有证券类调账撤销
    - 全面支持所有调账类型的撤销功能，含普通撤销和无痕撤销
    - 列表新增撤销批次号字段；如需缩减列表展示字段可使用“自定义列表”功能
    - 路径：证券后台 - 资产账户 - 调账 - 手工调账
    <img src="/assets/CqPWbJrSGojTZfxh4uzcvk3ZnTe.png" src-width="3440" src-height="1120" align="center"/>

- 授信组额度变更增加工单审批流程
    - 调整授信组额度及调整授信组内账户额度增加工单审批流程，涉及功能入口见图示。支持根据额度区间设置不同的审批流。
    - 关联审批流：
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_back
        - credit.adjust_account_credit_call_back
        - credit.change_group_credit_call_back
    - 路径：证券后台 - 风控管理 - 授信额度 - 融资授信 - 额度审批

<img src="/assets/XVAEbnntcoReYYxXPujc9Qwznin.png" src-width="3212" src-height="856" align="center"/>

- 交易限额批量新建优化
    - 客户限额/证券限额/交易员限额批量创建功能优化，更换为批量新建统一组件，可按批次差异化设置限额规则。
    - 路径：证券后台 - 风控管理 - 交易限额 - 客户限额/证券限额/交易员限额

<img src="/assets/ULS5b6H5YoUjSCxLiNpc8a1rnoc.png" src-width="3248" src-height="824" align="center"/>

- 公司行动对接工单审批
    - 新增公司行动模块的审批功能，用户在配寘相关工作流后在下列节点发起审批：
        - 预告执行
        - 预告撤销
        - 退税执行
        - 撤销退税

<img src="/assets/IKL6bHgMqopIfHxUOP5csBc4n8d.png" src-width="3090" src-height="1756" align="center"/>

- 美股换股公司行动预告自动创建

<img src="/assets/U0p7bNRzUoEu2oxvgzRczTqpnFc.png" src-width="2522" src-height="1238" align="center"/>

# 🪀 改进与修复

- 证券存入业务优化：新增实物股票手续费录入功能
    - 后台执行【手工入仓】操作并选择实物股票类别时，系统将自动弹出手续费编辑框，供操作人员根据实际业务需求填写应收手续费。
    - 路径：证券后台 - 证券管理 - 证券存入 - 存入申请

<img src="/assets/J4Irbx23Ko4So7x47CpcfjR9nsc.png" src-width="3310" src-height="1758" align="center"/>

- eDDA 记录新增回收站功能
    - eDDA 记录新增回收站功能，可在此模组中单独查询已删除的 eDDA 记录。
    - 路径：证券管理 - 款项管理 - 出入金方式-eDDA

<img src="/assets/G9SSbOCv6oCizOx56LncbLmRnge.png" src-width="3298" src-height="954" align="center"/>

- 客户额度调整页面优化并增加自定义列表功能
    - 客户额度页面增加“自定义列表”功能
    - 调整额度由页面更改为侧边栏
    - 路径：证券后台 - 风控管理 - 授信额度 - 融资授信 - 客户额度

<img src="/assets/ArL7bv6WXoX6qHxbWlGct34Enje.png" src-width="3212" src-height="614" align="center"/>

- 出金申请客户标记交互优化
    - 标记条件从单一「客户编号」拓宽至多维度（如证券帐号、银行名称等），支援多组标记同时批量添加，提升操作效率。
    - 新增历史标记记录列表，清晰展示标记时间、操作人及标记内容；支援按需单独或批量取消标记，灵活回溯与修正。
    - 符合标记条件的出金申请，将在详情页自动显示标记备注，强化业务资讯关联性与审核依据透明度。
    - 路径：证券后台 - 款项管理 - 出金申请

- BE 公司行动新增专项邮件发送功能
    - 根据派息是否需要垫资的场景发送特定的邮件

<img src="/assets/AUyFb0orDoGmbpxggdGcSP20nLc.png" src-width="3234" src-height="1766" align="center"/>

- 客户汇兑单信息展示优化
    - 列表移除「客户姓名」展示，将客户编号设为可点击跳转项目。
    - 路径：证券后台 - 款项管理 - 换汇 - 客户汇兑

<img src="/assets/HXW7bI8fqodMCkxqHufcxfhVndh.png" src-width="3308" src-height="1756" align="center"/>

