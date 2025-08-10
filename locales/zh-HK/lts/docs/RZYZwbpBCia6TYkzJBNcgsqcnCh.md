---
title: 2024-11-19 更新日誌
slug: RZYZwbpBCia6TYkzJBNcgsqcnCh
sidebar_position: 14
---


# 2024-11-19 更新日誌

# 🪀 改进与修复

- 企業戶的開戶信息中，新增公司實控人信息
    - 在線下開戶及 kyc 審核頁面，公司結構模塊中新增公司實控人信息
        - 當「企業實體」（Entity Type）選擇 ' CRS101 = Passive Non-Financial Entity with – one or more controlling person that is a Reportable Person ' 時，公司實控人爲必填模塊
    - 支持新增/編輯/刪除操作多個實控人信息
    - 路徑：「KYC」-「開戶審核」-「開戶列表」
    <img src="/assets/BHQFbuaJ0oHckcx7N8ucjc6enUd.png" src-width="2746" src-height="1656" align="center"/>

- 支持修改 BCAN 的生效狀態
    - 在後台，BCAN 港股通的生效狀態和中華通的生效狀態，新增支持手動批量修改爲生效/不生效
    - 路徑：「賬戶管理」-「BCAN 碼」
    - 權限：account.update_bcan_validity_status
    <img src="/assets/V0nabj2KLosUcHxn8VTckSuVnJs.png" src-width="2720" src-height="1288" align="center"/>

