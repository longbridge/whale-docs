---
title: 2025-02-24 更新日誌
slug: ROo6w2mS9iLCFwkU0vmckxQBnUe
sidebar_position: 12
---


# 2025-02-24 更新日誌

# 🎉 新功能

- 新增客戶多頭股票保證金變更記錄
    <img src="/assets/UMipbZxSHokoW6xmwSrjxBRhppd.png" src-width="3230" src-height="1024" align="center"/>
    - 1、股票停復牌自動處理客戶保證金
    - 2、新增/編輯/系統停復牌/到期失效均會記錄客戶保證金變更記錄
    - 路徑：風控管理-保證金-客戶保證金-多頭股票
    - 權限：客戶保證金變更記錄查詢 `credit_management.client_margin_change_query`

# 🪀 改進與修復

- 銀行區域列表以及卡所屬銀行後臺交互優化
    <img src="/assets/Eh13bX514o2sewxtG9JjfVGPpWb.png" src-width="3272" src-height="716" align="center"/>
    <img src="/assets/IlS4b79iZooppVxURDNjvp0Cprb.png" src-width="3308" src-height="726" align="center"/>
    - 1.銀行區域列表“圖標”圖片支持直接展示
    - 路徑1：證券後臺-款項管理-App 管理-銀行區域列表
    - 2.卡所屬銀行“銀行卡背景色”、“圖標”、“銀行 logo”圖片支持直接展示，以及非香港區域下入金見證也可支持修改
    - 路徑2：證券後臺-款項管理-App 管理-卡所屬銀行

- 資金類型多語言優化
    <img src="/assets/V7AwbKL0SondK4xu6w3jc5kkp1b.png" src-width="3256" src-height="674" align="center"/>
    - 資金類型新增多語言展示，並且在【新建】、【編輯】操作中都支持多語言配置
    - 路徑：證券後臺-業務參數設置-記賬參數-資金類型

- 入金匹配【取款退還】操作新增權限控制
    <img src="/assets/WRdAb3RcYonXFUxZj95jfMHNpuf.png" src-width="3286" src-height="662" align="center"/>
    - 入金匹配【取款退還】操作新增權限控制
    - 路徑：證券後臺-款項管理-入金-入金匹配
    - 權限：取款退還操作 `atm.withdrawal_refund_operation`

- 對於自動還款的貨幣兌換結單備註優化
    <img src="/assets/S0WqbFHqMoqVh3xVqG3j2Kkvpzh.png" src-width="3280" src-height="1032" align="center"/>
    - 自動還款的貨幣兌換結單備註中增加文案“自動還款”
    - 路徑：證券後臺-款項管理-換匯-客戶匯兌

- 新增銀行卡報錯文案優化
    <img src="/assets/CctRbVD0soTq8pxoZcXju6UNpHb.png" src-width="1496" src-height="1818" align="center"/>
    - 綁定銀行卡選定其他區域綁定的是預設列表的銀行，報錯文案優化
    - 路徑：證券後臺-款項管理-客戶銀行卡

- 入金見證後臺流程優化
    <img src="/assets/Wu4pbRf7yoSxgpx6epdj91Hvpre.png" src-width="3290" src-height="1696" align="center"/>
    - 對於轉賬認證開戶的客戶銀行卡，後臺更新入金見證流程優化，允許不關聯入金直接將入金見證狀態更新爲已見證
    - 路徑：證券後臺-款項管理-客戶銀行卡

- 會計中臺新增報表導出-金蝶
    <img src="/assets/HvrMbUz3AoWKycxWMItj1RJ8pyg.png" src-width="3294" src-height="1746" align="center"/>
    - 會計中臺新增報表導出-金蝶
    - 簡化了報表導出頁面
    - 路徑：證券後臺-會計中臺-會計分錄

- 合併分錄支持自定義折算幣種
    <img src="/assets/KXhCbCXC5odoV9xLCfpjBmprpbg.png" src-width="3282" src-height="894" align="center"/>
    - 合併分錄支持自定義折算幣種
    - 路徑：證券後臺-業務參數設置-記賬參數-合併規則

- 新增會計數據源-交收合約
    <img src="/assets/H4L0bCCEzolkfixIH8djm9depz7.png" src-width="1280" src-height="379" align="center"/>
    - 新增會計數據源-交收合約
    - 路徑：證券後臺-會計中臺-分錄數據源-交收合約
    - 權限：
        - 交收合約查詢 `book.book_contract_bills_query`
        - 交收合約操作 `book.book_contract_bills_operation`

- 黑名單增加啟用/停用功能
    <img src="/assets/CejBbVL51o593zxJojFj2Soapgd.png" src-width="3262" src-height="992" align="center"/>
    - 黑名單在刪除功能基礎上增加啟用/停用功能，啟用/停用操作時均支持備註。
    - 路徑：風控管理-名單管理-黑名單

