---
title: 2024-01-22 更新日誌
slug: GBUBwF3xJiv1M4kSe03cYPgjnyr
sidebar_position: 47
---


# 2024-01-22 更新日誌

# 🎉 新功能

- 文件導入新增隱藏無用文件類型的功能
    - 路徑：清算管理-文件處理-導入配置
    - 文件類型默認按導入次數倒序排列

<img src="/assets/R40XbhWZdoeQv2xiYf8jLfT9pWc.png" src-width="3496" src-height="1734" align="center"/>

<img src="/assets/EfMVb3aMOonzvPxrXZKjWvx6pCc.png" src-width="3496" src-height="1734" align="center"/>

- 颱風天接入工單並優化交互
    - 路徑：清算管理-颱風天處理
    - 未設置工單審批流程默認通過
    - 工單唯一標識：clearing.typhoon_date.exec

<img src="/assets/PvUbb6fZmoOoLmxyjbmjc06gprg.png" src-width="3496" src-height="1734" align="center"/>

- 清算撤銷接入工單
    - 路徑：清算管理-清算撤銷
    - 未設置工單審批流程默認通過
    - 工單唯一標識：clearing.re_clearing.exec

<img src="/assets/U6QcbypMPojZMOx5pm3jC8DZpCd.png" src-width="3496" src-height="1734" align="center"/>

- 自願類公司行動增加提前完成指令收集功能
    - 路徑：公司行動-詳情-提前完成指令收集
    - 指令收集狀態為指令收集中的可操作
    - 針對線下行權的公司行動，在提交指令收集時可以屏蔽消息（不打鉤）

<img src="/assets/Oo2objABtoCqgcx3JY7j5XnzpTd.png" src-width="3496" src-height="1734" align="center"/>

<img src="/assets/PRilb2RbroTiu2x200ajJ4y4pwf.png" src-width="3496" src-height="1734" align="center"/>

- 修改客戶登錄郵箱的認證狀態
    - 支持在後台單次/批量修改客戶登錄郵箱的認證狀態
    - 路徑：CRM-賬戶管理-工單中心-修改客戶數據

<img src="/assets/ESMCb8AA1odzKDx9JLSjluHdpCb.png" src-width="2898" src-height="1086" align="center"/>

# 🪀 改進與修復

- 業務碼修改&交易額度設置接工單審批
    - 交易額度【設置】對接工單審批。審批流為：BSS-風控管理-客戶交易額度-設置
        路徑：「風控管理」-「授信額度」-「交易額度」
    - 業務碼修改對接工單審批。審批流為：BSS-資產賬戶-業務碼-業務碼查詢-編輯業務碼
        路徑：「資產賬戶」-「業務碼」-「業務碼查詢」
    - 本次所涉審批場景默認後台超級管理員審批，如需更改審批流程，請至對應的審批流進行配置修改。配置路徑：「全局設置」-「身份管理」-「審批流程配置」

<img src="/assets/KevwblIoqoGZ0gxEZA5jzOUHpeb.png" src-width="3254" src-height="1154" align="center"/>

- 港股IPO整體配置更精簡，整體結構及互動優化

<img src="/assets/QatZbyE2ao6YQmx8wguj6hc2pQg.png" src-width="1280" src-height="770" align="center"/>

- 授信組支持導出所有組信息和組內賬戶信息

<img src="/assets/VsZOb2C1to9eq4xIy37jZ7yApZb.png" src-width="3214" src-height="542" align="center"/>

- 結單查詢支持自定義設置列表

<img src="/assets/SbZFbAcs6ogf9nxokHUjPKBmpxg.png" src-width="3220" src-height="554" align="center"/>

- 新增margin call和調賬場景通知訂閱
    - 新增Margin Call通知訂閱功能，支持在客戶觸發margin call時，通過email通知內部人員；
    - 新增調賬失敗通知訂閱功能，支持在調賬失敗時，通過email通知內部人員。

- 風控報表菜單下線
    - 涉及菜單如下：
        - 「風控管理」-「保證金」-「保證金風險指標」
        - 「風控管理」-「風控報表」
    - 涉及報表如下：
        - 保證金風險指標 RDR035 - Margin Risk Index
        - 客戶持倉明細 RDR028 - Client Position Details
        - 股票組監控 RDR036 - Stock Group Monitoring
        - 客戶融資監控 RDR037 - Client Financing Monitoring

- 客戶跟進進度填寫邏輯優化
    <img src="/assets/Ba5WbalD6obDbLxLeEPjJLNNpwc.png" src-width="2434" src-height="1378" align="center"/>
    - 路徑：「CRM」-「KYC」-「開戶列表」
    - 支持客戶在所有審核狀態下，編輯‘客戶跟進狀態’字段，維護客戶跟進進度。

- 賬戶列表的客戶詳情頁改造
    <img src="/assets/JqwFbV03moj0JGx3sKGjEokgp9b.png" src-width="2538" src-height="736" align="center"/>
    <img src="/assets/QxGRb3PuJoGHXKx8M08jTvXUpZ2.png" src-width="2602" src-height="1154" align="center"/>
    - 路徑：「CRM」-「賬戶管理」-「賬戶列表」-【詳情】
    - 在賬戶列表的詳情入口頁，點擊‘詳情’按鈕，優化展示爲客戶詳情側邊欄，且側邊欄展示更多賬戶信息。

