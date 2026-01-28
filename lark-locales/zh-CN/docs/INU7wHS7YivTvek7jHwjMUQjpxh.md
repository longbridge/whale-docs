---
title: 2025-09-29 更新日志
slug: 2795bab0c2cc80979af4f5a744274fb5
sidebar_position: 4
version: stable
---


# 2025-09-29 更新日志

# 🪀 改进与修复

- 开户入金匹配后驳回联动处理规则
    <img src="LVL5bzYYooWiBtxiIY6jfbCtp0b" src-width="4273" src-height="810" align="center"/>
    - 开户入金场景下，若提交的入金申请已完成匹配，一旦开户请求被驳回，系统将自动驳回该笔已匹配的开户入金纪录；驳回后，系统会同步自动撤销客户的入金申请。
    - 路径：WBO - 款项管理 - 入金 - 开户中入金

- 自动延续上一日汇率优化
    <img src="MkNnbsZH6ojXAIxVeFEje37HpGc" src-width="2930" src-height="812" align="center"/>
    - 针对汇率类型为「账面汇率」的场景，系统新增自动延续上一日汇率的流程：若当前各币种汇率尚未导入，系统将自动复制上一日对应币种的汇率进行填补。
    - 路径：WBO - 款项管理 - 换汇 - 参考汇率

