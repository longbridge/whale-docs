---
title: 2024-11-19 更新日志
slug: RZYZwbpBCia6TYkzJBNcgsqcnCh
sidebar_position: 13
---


# 2024-11-19 更新日志

# 🪀 改进与修复

- 企业户的开户信息中，新增公司实控人信息
    - 在线下开户及 kyc 审核页面，公司结构模块中新增公司实控人信息
        - 当「企业实体」（Entity Type）选择 ' CRS101 = Passive Non-Financial Entity with – one or more controlling person that is a Reportable Person ' 时，公司实控人为必填模块
    - 支持新增/编辑/删除操作多个实控人信息
    - 路径：「KYC」-「开户审核」-「开户列表」
    <img src="/assets/BHQFbuaJ0oHckcx7N8ucjc6enUd.png" src-width="2746" src-height="1656" align="center"/>

- 支持修改 BCAN 的生效状态
    - 在后台，BCAN 港股通的生效状态和中华通的生效状态，新增支持手动批量修改为生效/不生效
    - 路径：「账户管理」-「BCAN 码」
    - 权限：account.update_bcan_validity_status
    <img src="/assets/V0nabj2KLosUcHxn8VTckSuVnJs.png" src-width="2720" src-height="1288" align="center"/>

