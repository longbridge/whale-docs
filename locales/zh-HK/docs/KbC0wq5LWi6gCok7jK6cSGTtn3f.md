---
title: 2025-07-21 更新日誌
slug: KbC0wq5LWi6gCok7jK6cSGTtn3f
sidebar_position: 2
version: stable
---


# 2025-07-21 更新日誌

# 🎉 新功能

- 客戶銀行卡補充入金姓名功能說明
    - 功能新增：客戶銀行卡新增「補充入金姓名」入口，用於解決銀行預留姓名與 KYC 資訊不一致的場景。
    - 應用場景：當銀行預留姓名與 KYC 資訊不一致時，可通過此功能補充填寫。經人工審核的姓名將自動套用於後續 eDDA 授權、入金自動匹配及銀行卡綁卡。
    - 工單審批流程：新建 / 編輯 / 刪除操作均需工單審批，需配置以下工單：
        -  WBO - 款項管理 - 入金 - 新建補充入金姓名待審批
        -  WBO - 款項管理 - 入金 - 編輯補充入金姓名待審批
        -  WBO - 款項管理 - 入金 - 刪除補充入金姓名待審批
    - 路徑：WBO - 款項管理 - 客戶銀行卡
    - 權限：
        - 補充入金姓名查詢`atm.update_deposit_name_inquiry`
        - 補充入金姓名操作`atm.update_deposit_name_operation`
        - 補充入金姓名審批`atm.update_deposit_name_approval`
    <img src="/assets/BX4xbGoqBoLtMJx4fm1cmfVXnOe.png" src-width="2048" src-height="501" align="center"/>

- 資產調撥增加虛擬資產判斷校驗
    - 1.賬戶間轉賬轉給主帳戶時增加虛擬資產賬戶判斷配置，若開啟配置，則當轉入方為虛擬資產賬戶時，需要校驗公司賬戶頭寸，頭寸不足在後台劃轉時會提示。如需打開配置，可聯繫長橋客服協助申請。
    - 2.賬戶間轉倉增加限制虛擬資產賬戶劃轉股票。
    - 路徑：WBO-資產賬戶 - 資產調撥
    <img src="/assets/KKZQbE6LwoZubExadN7cN1Jknjh.png" src-width="3696" src-height="1202" align="center"/>

# 🪀 改進與修復

- 入金申請新增重複提示功能
    - 功能新增：系統將對滿足以下條件的入金申請觸發重複提示：
    - 時間範圍：7 日內提交的申請
    - 關鍵資訊：通知金額、幣種、客戶證券帳號完全一致
    - 路徑：證券後台 - 款項管理 - 入金 - 入金申請
    <img src="/assets/MhUybf6ydom8EJxv3AQcybmvnnd.png" src-width="2310" src-height="900" align="center"/>

- 出金記錄優化
    - 因出金記錄字段繁雜，已將同類字段（含公司銀行賬戶、客戶信息、收款銀行、備註、金額、狀態、時間）合併展示，以方便客戶查詢。
    - 路徑：WBO - 款項管理 - 出金 - 出金記錄
    <img src="/assets/H8f9bTX6wofocBxeGWjctRSonxh.png" src-width="3270" src-height="938" align="center"/>

- 授信 FPS 規則數據源切換並支持多語言
    - 1.FPS 規則數據源切換直接調用 KYC 信息。規則配置變量範圍同當前一致，含“職業信息&gt;職業性質”以及“資產投資”信息。
    - *注：
        - 1）KYC 信息按客戶類型（個人/企業/聯名戶）區分，不同客戶類型請根據規則變量名稱分別配置
        - 2）如線上已配置 FPS 規則，請按本次最新變量更新配置
    - 2.FPS 規則變量支持多語言
    - 路徑：WBO-風控管理 - 授信額度 - 融資授信 - 客戶 FPS
    <img src="/assets/ZGh3bq6MUo3SEaxW2Pncc59Dnrd.png" src-width="3286" src-height="1756" align="center"/>
    
