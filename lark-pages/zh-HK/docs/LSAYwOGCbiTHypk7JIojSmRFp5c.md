---
title: 2026-01-26 更新日誌
slug: LSAYwOGCbiTHypk7JIojSmRFp5c
sidebar_position: 0
version: lts
---


# 2026-01-26 更新日誌

# 🎉 新功能

- 支援報表的自動列印
    <img src="/assets/X4cTbLJ1WonXEpx3QBqjWMkPpSg.png" src-width="1593" src-height="764" align="center"/>
    <img src="/assets/LTJebEfzqoyAvyxECRijAQJapec.png" src-width="1593" src-height="764" align="center"/>
    - .支援報表的自動列印
    - 增加部分報表生成時機的標籤
    - 路徑：報表管理

- WBO 加密貨幣出入功能說明（對接 HashKey）
    <img src="/assets/UFLgb0zUsoeajmxTomXjrsWlpud.png" src-width="3294" src-height="822" align="center"/>
    <img src="/assets/TAsvbrNlzobkMyxiz5fjNhTrpzg.png" src-width="3276" src-height="822" align="center"/>
    <img src="/assets/EUs1bX7UUoG5F7xTqlojuoGFpQf.png" src-width="3270" src-height="1026" align="center"/>
    <img src="/assets/Y7Xobgc1EoKdWHxSATbjrToDpQe.png" src-width="3300" src-height="1436" align="center"/>
    <img src="/assets/Nl4RbNMCroFW8rxmtQtj1JCPp2g.png" src-width="3256" src-height="874" align="center"/>
    <img src="/assets/EEUmbx6rPoqFnTxv4K9jLkWpp9d.png" src-width="3298" src-height="788" align="center"/>
    - WBO 新增加密貨幣出入功能，满足客戶加密貨幣出入需求。使用前需完成權限申請，並配置出幣申請工單（標識：atm.va.coin_withdraw_apply）的審批流程。核心模組、功能及操作路徑如下：
        1. 渠道存管賬戶：支援渠道存管賬戶批量新增；未分配的渠道存管賬戶可在後台手動刪除。
            - 路徑：WBO - 虛擬資產管理 - 出入幣 - 渠道存管賬戶
        2. 客戶錢包地址：客戶進行加密貨幣出入前，需完成錢包地址加白流程；已加白的客戶錢包地址將在後台維護。
            - 路徑：WBO - 虛擬資產管理 - 出入幣 - 客戶錢包地址
        3. 入幣：支援入幣申請查詢；可在後台查看客戶入幣全流程，同時支援後台退幣及撤銷操作。
            - 路徑：WBO - 虛擬資產管理 - 出入幣 - 入幣
        4. 出幣：可在後台審批客戶出幣申請；支援查詢出幣全流程。HashKey 虛擬幣出幣時，區塊鏈手續費從主賬戶扣，本金從子賬戶扣。租戶需提前在主賬戶預留足額對應虛擬幣（覆蓋預估手續費），避免申請失敗。若提示手續費不足，可充值主賬戶或從子賬戶劃轉後重提。
            - 路徑：WBO - 虛擬資產管理 - 出入幣 - 出幣
        5. 加密貨幣：支援在後台新增及編輯加密貨幣資訊。
            - 路徑：WBO - 業務參數設置 - 資金參數 - 加密貨幣
    - 注意： 虛擬幣帳戶以「加密貨幣 + 計價貨幣」組合標的記帳：入幣、出幣時按加密貨幣單獨記錄，最終同步至證券帳戶時，以該組合標的入帳（例：加密貨幣 ETH，預設計價貨幣 USD，入帳標的為「VA/HAS/ETHUSD」）。出帳時優先抵扣可用餘額較大的幣種，若餘額不足則自動從次優先級幣種扣減。
    - 權限：
        - 渠道存管賬戶查詢 atm.va_channel_custodial_account_inquiry
        - 渠道存管賬戶操作 atm.va_channel_custodial_account_operation
        - 客戶錢包地址查詢 atm.va_client_wallet_address_inquiry
        - 客戶錢包地址操作 atm.va_client_wallet_address_operation
        - 入幣申請查詢 atm.va_crypto_currency_deposit_application_inquiry
        - 入幣申請操作 atm.va_crypto_currency_deposit_application_operation
        - 入幣記錄查詢 atm.va_coin_deposit_records_inquiry
        - 入幣記錄操作 atm.va_coin_deposit_records_operation
        - 入幣記錄退幣 atm.va_refund_of_coin_deposit_record
        - 出幣申請查詢 atm.crypto_currency_withdrawal_application_inquiry
        - 出幣申請操作 atm.crypto_currency_withdrawal_application_operation
        - 加密貨幣查詢 atm.crypto_currency_inquiry
        - 加密貨幣操作 atm.crypto_currency_operation

# 🪀 改進與修復

- 出金規則 - 自動審核規則新增工單審批
    - 功能新增：自動審核規則的所有操作（含【新建】、【編輯】、【刪除】及批量【啟用 / 停用】），提交後均會新增工單審核。工單標題為「自動審核規則編輯」（工單標識：atm.withdraw_audits_edit）；上線後工單預設自動審批，若需人工審批，可在「審批流程配置」中修改。
    - 路徑：業務參數設置 - 出金規則 - 自動審核規則

<img src="/assets/N16sb2XpPovbOAxppoKjEvvTpBg.png" src-width="2482" src-height="826" align="center"/>

---

- 基金管理-公募基金新增交易頻率配置
    - 功能新增：公募基金基礎信息新增交易規則和交易日曆配置，支持以單日、單周、單月為交易週期的基金。原基金渠道中的配置移動至公募基金基礎信息。
    - 路徑：基金管理-公募基金管理-交易和日曆

<img src="/assets/MfTBbvHiLo2CRYxkqFzjVaVcpff.png" src-width="4026" src-height="2692" align="center"/>

---

- 後台手動換匯時，匯兌策略支援手動選擇
    <img src="/assets/ViarbSmyyoqld7xAp6vjFbRIpZd.png" src-width="2508" src-height="1352" align="center"/>
    <img src="/assets/BPXJb73XWoYOJNx60puj0IS9pMh.png" src-width="3268" src-height="876" align="center"/>
    - 後台操作【手動換匯】時，可依需求手動選擇匯兌策略；人工選定後，客戶匯兌將立即執行。頁面預設採用系統判定模式，此模式下將按人工預設的匯兌策略完成匯兌。
若配置的「換匯策略」僅包含系統默認的全部匯兌類型，客戶提交換匯後，匹配的匯兌池類型將彙總顯示為「--」，換匯策略則按系統默認值展示。
    - 路徑：WBO - 款項管理 - 換匯 - 客戶匯兌

- 用戶提交出金申請可觸發工單生成，後台頁面同步優化
    - 單功能預設未啟用（避免影響線上運行），審核流配置可見，需使用可提交交付變更（工單標識：atm.withdraw_app_audit）；
    - 未啟用時，按現有流程操作；
    - 啟用後，申請自動生成審核工單；審核前客戶撤銷申請，會產生異常工單（需超級管理員關閉，不影響該筆出金業務）；
    - 出金申請新增 Tab 入口，方便按需切換查看。
    - 路徑：證券後台 - 款項管理 - 出金 - 出金申請

<img src="/assets/C81tbKDV6oXdvUxrDb6jpdWxpkf.png" src-width="2048" src-height="443" align="center"/>

<img src="/assets/Eo96bwu4hoEnPHxRg1ljZYwgpGf.png" src-width="2048" src-height="692" align="center"/>

- 出金駁回頁面優化
    - 出金駁回頁面新增文案提示：若當前櫃台已開啟工單審批，則提示文案為：「確定後需經工單審批，審批通過後將發送消息通知客戶出金已駁回」；若當前櫃台未開啟工單審批，則提示文案為：「確定後即發消息提示客戶出金已駁回」
    - 路徑：證券後台 - 款項管理 - 出金 - 出金申請

<img src="/assets/Jnw8b2WvjocoZ4xSmeqjIFHapMe.png" src-width="2048" src-height="788" align="center"/>

<img src="/assets/PrQcb4Sljo7yooxApCujvsyFpxl.png" src-width="2048" src-height="918" align="center"/>

- 簡化市場管理配置流程
    - 簡化市場管理配置流程
    - 路徑：业务参数设置-市场管理

<img src="/assets/EFvKbIeDvoxsJvx76uRjjwKGpvb.png" src-width="3024" src-height="1624" align="center"/>

