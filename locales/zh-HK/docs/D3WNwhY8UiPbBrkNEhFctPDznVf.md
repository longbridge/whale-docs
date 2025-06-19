---
title: '2025-01-20 更新日誌 '
slug: D3WNwhY8UiPbBrkNEhFctPDznVf
sidebar_position: 5
---


# 2025-01-20 更新日誌 

# 🎉 新功能

- 公司行動增加股東大會類型
    - 支持用戶在後台完成股東大會的預告創建、會議內容新增、客戶參會方式選擇等關鍵流程節點推進。
    <img src="/assets/Tg1Tb1ZIYohiJ8xtls7cxrDAn8b.png" src-width="2868" src-height="1302" align="center"/>
    <img src="/assets/QHt1bzcqXoGAvixicQIcUPx9n6b.png" src-width="1442" src-height="661" align="center"/>

附幫助中心：[快速上手 - 股東大會（VT）](./QSpJwHQVUi9qDEkTwBtcmHTPnjd)

- 增加美股 TAXFEE 退還功能
    - 針對上年度因美股公司行動產生的 TAXFEE，在本年度可以進行退還，新增了退稅頁面統一管理系統所產生的所有 TAXFEE 收費記錄，並根據上手返還的金額同比例返還給客戶
    <img src="/assets/Yv7zbwNPZoBkEnxwYTIcYF5xn8g.png" src-width="2874" src-height="1190" align="center"/>

- 華盛美股文件增加手動選擇文件日期的功能
    - 華盛美股文件對檔案名稱中的日期格式不再做校驗，改為由介面選擇
    <img src="/assets/XpXwbAheVoO2bAxx8o7cKuzsnQb.png" src-width="2948" src-height="1424" align="center"/>

- 建立文章納入審核流
    - 由於對客文章都需要審核，審批流中補充出創建文章環節
    <img src="/assets/K1yzbr9QloVsVUxo9sQcOH7Znfh.png" src-width="2700" src-height="1342" align="center"/>

- 建立模版新增模版適用對象
    - 模版增加 Longport 和 Whitelabel 適用對象

<img src="/assets/LDHPbzPvoorXtRxDlVMcJNnGnhf.png" src-width="2660" src-height="1164" align="center"/>

# 🪀 改进与修复

- 入金指引交互頁面優化（路徑：證券後臺 - 關聯管理-App 管理 - 入金指引）
    - 入金指引列表頁面刪除了“櫃檯”字段
    - 入金指引【新建】頁面交互優化

- 貨幣兌設置優化（路徑 1：證券後臺 - 業務參數設置 - 匯兌 - 幣種對）
    - 在幣種配置中對於未打開兌換功能的貨幣，無法支持幣種對配置；
    - 幣種對無法找到的幣種，可以通過快捷按鈕進行幣種配置；

- 幣種配置將貨幣兌換從開通改爲關閉，新增了是否存在匯兌幣種對配置的邏輯判斷；（證券後臺 - 業務參數設置 - 資金參數 - 幣種）
- 【新建】和【編輯】公司銀行賬戶優化（路徑：證券後臺 - 業務參數設置 - 資金參數 - 公司銀行賬戶）
    - 如果存在重複的銀行卡，會提示無法重複添加。對於銀行相關的字段從人工輸入改爲下拉選擇：國家/地區、銀行代碼、銀行名稱、Swift Code、銀行地址。

- 隱藏出金記錄的字段“渠道出賬狀態”（路徑 1：「證券後臺 - 款項管理 - 出金 - 提現處理 - 已結束」明細列表；路徑 2：「證券後臺 - 款項管理 - 出金 - 出金記錄」）
    - 因爲出金記錄只受到提現狀態的控制，對於渠道出賬狀態是系統內部邏輯，爲避免誤解，故將“渠道出賬狀態”字段隱藏

- 會計中臺新增報表導出-MYOB（路徑：證券後臺 - 會計中臺 - 會計分錄）
    - 會計中臺新增報表導出-MYOB
    - 簡化了報表導出頁面
    <img src="/assets/PhP7b0eaKosp66xCC8tchGcXnmc.png" src-width="2346" src-height="1226" align="center"/>

- 保證金管理交互設計優化（路徑：風控管理 - 保證金）
    - 統一不同保證金類型的增刪改查頁面設計
    - 增加多頭股票保證金和期權保證金系數批量刪除功能。

- 入金賬單優化（路徑：證券後臺 - 款項管理 - 銀行賬單 - 入金賬單）
    - 入金賬單中新增了被屏蔽的記錄
    - 入金記錄是否需要屏蔽可以在後臺切換。
        不屏蔽是指相應入金記錄可以通過入金匹配流程將資金加到客戶的證券賬戶
        屏蔽是指相應入金記錄不會進入後續入金匹配流程；
    - 支持人工修改對應入金記錄的網銀流水號
    - 對於入金賬單【手工關聯】操作支持手工關聯加款記錄
    - 權限：accounting.deposit_bill_blocking_operation 入金賬單屏蔽操作
    <img src="/assets/DDWjbuNjJoEVUpxSDuYctTrjnVd.png" src-width="3258" src-height="952" align="center"/>
    <img src="/assets/WoXjbzMkwo0tJTxHQVSc6MZ9nVb.png" src-width="2472" src-height="1730" align="center"/>
    <img src="/assets/S9rGbkHUvoaJBVxjt7McO2qcnec.png" src-width="3662" src-height="1366" align="center"/>

- 出金賬單優化（路徑：證券後臺 - 款項管理 - 銀行賬單 - 出金賬單）
    - 支持人工修改對應出金記錄的網銀流水號
    - 權限：accounting.edit_online_banking_serial_number 編輯網銀流水號
    <img src="/assets/D4BEboFBFozVdZx5Yytc7ocpngh.png" src-width="3268" src-height="1090" align="center"/>

