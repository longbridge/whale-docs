---
title: 2026-01-26 更新日誌
slug: LSAYwOGCbiTHypk7JIojSmRFp5c
sidebar_position: 0
version: stable
---


# 2026-03-16 更新日誌

# 🎉 新功能

- 頭寸查詢與即時獲取 / 提示頭寸與攔截頭寸配置 / 結算渠道帳戶配置 / 資金調撥規則配置（新建 / 編輯 / 複製） / 定時任務自動調撥 / 事件觸發自動調撥（頭寸不足、出金提交 / 失敗、入金成功） / 手動資金調撥與工單審批 / 調撥記錄查詢與狀態核對
    - 新增頭寸查詢、即時餘額重新獲取功能，支援按渠道、幣種、帳號類型篩選查詢，同時適用於法幣與加密貨幣。
    - 新增提示頭寸、攔截頭寸配置及對應告警機制，出金場景支援本金與手續費不足攔截。
        - 路徑：虛擬資產管理 - 頭寸管理
    - 新增結算渠道帳戶配置功能，用於頭寸調撥前的上游帳戶資訊維護。
        - 路徑：業務參數設置 - 資金參數 - 結算渠道帳戶
    - 新增資金調撥規則配置，支援結算帳戶間劃轉規則的新建、編輯與複製。
    - 實現自動調撥能力，支援定時任務劃轉與多場景事件觸發劃轉。
        - 路徑：業務參數設置 - 資金參數 - 資金調撥配置
    - 上線手動調撥與審批流程，支援發起、審核、駁回、重新申請。
    - 優化調撥記錄查詢功能，操作人員可查詢調撥狀態、金額、幣種、發起 / 接收帳戶、業務單號等詳細資訊，確保流程可追溯、數據準確無誤。
        - 路徑：款項管理 - 銀行帳單 - 公司資金調撥
    - 權限：
        - 頭寸管理查詢 assets.position_anagement_inquiry_query
        - 頭寸管理操作 assets.position_anagement_inquiry_operation
        - 公司資金調撥查詢 atm.company_fund_allocation_inquiry
        - 公司資金調撥操作 atm.company_fund_allocation_operation
        - 公司資金調撥審批 atm.company_fund_allocation_approval
        - 結算渠道帳戶查詢 atm.settle_chnl_bank_acct_inquiry
        - 結算渠道帳戶操作 atm.settle_chnl_bank_acct_operation
        - 資金調撥配置查詢 atm.funds_alloc_config_inquiry
        - 資金調撥配置操作 atm.funds_alloc_config_operation
    <img src="/assets/SkUmbZcE2oacZXxGIz6j2cCGpad.png" src-width="3814" src-height="1038" align="center"/>
    <img src="/assets/XAHub0cj7os9b6xb80vjslx7pMg.png" src-width="3800" src-height="1632" align="center"/>
    <img src="/assets/MrIQb8eUuoV9vTxVlcajuePqpVf.png" src-width="3794" src-height="1546" align="center"/>
    <img src="/assets/KguWbgtUTot5WkxltdZjw7rxptc.png" src-width="3816" src-height="1196" align="center"/>

