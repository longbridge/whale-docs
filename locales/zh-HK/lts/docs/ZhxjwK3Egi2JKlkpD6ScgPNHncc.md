---
title: '2024-08-15 更新日誌 '
slug: ZhxjwK3Egi2JKlkpD6ScgPNHncc
sidebar_position: 22
---


# 2024-08-15 更新日誌 

# 🎉 新功能

无

# 🪀 改进与修复

- 支持修改客戶詳細類型字段
    - 路徑：「客戶管理系統」-「KYC」-「開戶列表」-「kyc 詳情頁」
    - 在賬戶審核和開通的狀態下，支持修改客戶詳細類型
        - 在審核狀態下修改，可立即生效，且賬戶開通成功時，會按新的客戶詳細類型的值匹配對應的交易通道
        - 在賬戶開通狀態下修改，工單審核通過後，才會生效。修改成功後，當前的交易通道會同步變更
    - 新增工單：kyc.update_application_client_detail_type

<img src="/assets/HJ4BbZsRNoqjgix0U9uc8Zl3nxg.png" src-width="2138" src-height="886" align="center"/>

- 客戶資料頁支持賬戶名稱的展示
    - 路徑：「客戶管理系統」-「賬戶管理」-「賬戶列表」-「詳情」
    - 在客戶資料頁面，新增展示當前證券賬戶的賬戶名稱，包括關聯賬戶的賬戶名稱
    <img src="/assets/VBoab1VDWoXqKXxoMepcetN0nSd.png" src-width="2452" src-height="1616" align="center"/>

