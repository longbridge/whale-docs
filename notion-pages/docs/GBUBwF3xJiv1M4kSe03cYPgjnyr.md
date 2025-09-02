---
slug: 24-01-22
title: 2024-01-22 更新日誌
sidebar_position: 42
---


# 2024-01-22 更新日誌


# 🎉 新功能

- 文件導入新增隱藏無用文件類型的功能
    - 路徑：清算管理-文件處理-導入配置
    - 文件類型默認按導入次數倒序排列

![image.png](/assets/d204f6c5f806847841044dd8c83e7e8d.png)


![image.png](/assets/f223aed537f446a1c820b1280b809d22.png)

- 颱風天接入工單並優化交互
    - 路徑：清算管理-颱風天處理
    - 未設置工單審批流程默認通過
    - 工單唯一標識：clearing.typhoon_date.exec

![image.png](/assets/820b7790eaafd8659507bca8c8a284a2.png)

- 清算撤銷接入工單
    - 路徑：清算管理-清算撤銷
    - 未設置工單審批流程默認通過
    - 工單唯一標識：clearing.re_clearing.exec

![image.png](/assets/cf119b01481bb8799ee0251e5b1e549f.png)

- 自願類公司行動增加提前完成指令收集功能
    - 路徑：公司行動-詳情-提前完成指令收集
    - 指令收集狀態為指令收集中的可操作
    - 針對線下行權的公司行動，在提交指令收集時可以屏蔽消息（不打鉤）

![image.png](/assets/cbc327873ac35a103fc7a9ff4e3b675d.png)


![image.png](/assets/972c19b9c3ee780016d6a7b4f3ee1a2e.png)

- 修改客戶登錄郵箱的認證狀態
    - 支持在後台單次/批量修改客戶登錄郵箱的認證狀態
    - 路徑：CRM-賬戶管理-工單中心-修改客戶數據

![image.png](/assets/aec1e8c8e322e17bf7108986baf2d6dc.png)


# 🪀 改進與修復

- 業務碼修改&交易額度設置接工單審批
    - 交易額度【設置】對接工單審批。審批流為：BSS-風控管理-客戶交易額度-設置

      路徑：「風控管理」-「授信額度」-「交易額度」

    - 業務碼修改對接工單審批。審批流為：BSS-資產賬戶-業務碼-業務碼查詢-編輯業務碼

      路徑：「資產賬戶」-「業務碼」-「業務碼查詢」

    - 本次所涉審批場景默認後台超級管理員審批，如需更改審批流程，請至對應的審批流進行配置修改。配置路徑：「全局設置」-「身份管理」-「審批流程配置」

![image.png](/assets/dbe58324d9a326e67519e974842ca214.png)

- 港股IPO整體配置更精簡，整體結構及互動優化

![image.png](/assets/a331bd0818548c860e9764e60884b80e.png)

- 授信組支持導出所有組信息和組內賬戶信息

![image.png](/assets/16eb64221450dd0eb14c2832764ffa57.png)

- 結單查詢支持自定義設置列表

![image.png](/assets/778b8aafb4333376d07ea36f407425f2.png)

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
    - 路徑：「CRM」-「KYC」-「開戶列表」
    - 支持客戶在所有審核狀態下，編輯‘客戶跟進狀態’字段，維護客戶跟進進度。

    ![image.png](/assets/3197ea305c18009b2fe4045a4c4138e4.png)

- 賬戶列表的客戶詳情頁改造
    - 路徑：「CRM」-「賬戶管理」-「賬戶列表」-【詳情】
    - 在賬戶列表的詳情入口頁，點擊‘詳情’按鈕，優化展示爲客戶詳情側邊欄，且側邊欄展示更多賬戶信息。

    ![image.png](/assets/decccefdd3dc6f2e0066f2babf1ec461.png)


    ![image.png](/assets/c6616afdf771944a76c59e6d1f03fb8f.png)

