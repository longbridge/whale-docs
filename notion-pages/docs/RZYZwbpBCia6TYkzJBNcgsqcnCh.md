---
slug: RZYZwbpBCia6TYkzJBNcgsqcnCh
title: 2024-11-19 更新日誌
sidebar_position: 17
---


# 2024-11-19 更新日誌


# 🪀 改进与修复

- 企業戶的開戶信息中，新增公司實控人信息
    - 在線下開戶及 kyc 審核頁面，公司結構模塊中新增公司實控人信息
        - 當「企業實體」（ Entity Type ）選擇 ' CRS101 = Passive Non-Financial Entity with – one or more controlling person that is a Reportable Person ' 時，公司實控人爲必填模塊
    - 支持新增/編輯/刪除操作多個實控人信息
    - 路徑：「KYC」-「開戶審核」-「開戶列表」

    ![image.png](/assets/193233642942c5f65aef6804199ad576.png)

- 支持修改 BCAN 的生效狀態
    - 在後台，BCAN 港股通的生效狀態和中華通的生效狀態，新增支持手動批量修改爲生效/不生效
    - 路徑：「賬戶管理」-「BCAN 碼」
    - 權限：account.update_bcan_validity_status

    ![image.png](/assets/c269001f268b760f4a764d0d646cc3fc.png)

