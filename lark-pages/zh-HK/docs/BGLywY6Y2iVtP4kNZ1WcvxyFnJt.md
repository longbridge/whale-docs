---
title: 2025-06-30 更新日誌
slug: BGLywY6Y2iVtP4kNZ1WcvxyFnJt
sidebar_position: 8
version: lts
---


# 2025-06-30 更新日誌

# 🎉 新功能

- 支持所有證券類調賬撤銷
    <img src="/assets/RhIUbkET1oeysixNIzzj9fbspRf.png" src-width="3440" src-height="1120" align="center"/>
    - 全面支持所有調賬類型的撤銷功能，含普通撤銷和無痕撤銷
    - 列表新增撤銷批次號字段；如需縮減列表展示字段可使用“自定義列表”功能
    - 路徑：證券後台-資產賬戶-調賬-手工調賬

- 授信組額度變更增加工單審批流程
    - 調整授信組額度及調整授信組內賬戶額度增加工單審批流程，涉及功能入口見圖示。支持根據額度區間設置不同的審批流。
    - 關聯審批流：
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_back
        - credit.adjust_account_credit_call_back
        - credit.change_group_credit_call_back
    - 路徑：證券後臺 - 風控管理 - 授信額度 - 融資授信 - 額度審批

<img src="/assets/JuewbPPzRocOYLxwMnyj4i82pS9.png" src-width="3212" src-height="856" align="center"/>

- 交易限額批量新建優化
    - 客戶限額/證券限額/交易員限額批量創建功能優化，更換為批量新建統一組件，可按批次差異化設置限額規則。
    - 路徑：證券後台-風控管理-交易限額-客戶限額/證券限額/交易員限額

<img src="/assets/E9gZbqI3noOxEFx9mZ6jOovTpcg.png" src-width="3248" src-height="824" align="center"/>

- 公司行動對接工單審批
    - 新增公司行動模塊的審批功能，用戶在配寘相關工作流後在下列節點發起審批：
        - 預告執行
        - 預告撤銷
        - 退稅執行
        - 撤銷退稅

<img src="/assets/IK3ObitbVoQlbix3IcWjN93qpPd.png" src-width="3090" src-height="1756" align="center"/>

- 美股換股公司行動預告自動創建

<img src="/assets/BIobbvLz9oxzYixJCCmjh9Wrp9c.png" src-width="2522" src-height="1238" align="center"/>

- 後台補單業務類型增加場外交易
    <img src="/assets/KUfNbl442oPYTDxlUSfjkxD0pWc.png" src-width="3020" src-height="1258" align="center"/>
    - 支持場外交易獨立配置收費規則
    - 支持OTC市場不配置日曆等
    - 路徑1：清算管理-合約管理
    - 路徑2：業務參數設置-市場管理-市場規則
    - 路徑3：業務參數設置-計費管理在港股雙櫃檯上線後，支持按主櫃檯的代碼導出指令；

- 港股雙櫃台兼容
    - 在港股雙櫃檯上線後，支持按主櫃檯的代碼導出指令； 支持按主櫃檯的代碼合併對賬

- 融資利息調整支援同時修改多天
    <img src="/assets/Y6RDbzii5oG7x4xdqmCjL8uupsf.png" src-width="3020" src-height="1266" align="center"/>
    - 融资利息调整支持同时修改多天
    - 路径：清算管理-融资管理

# 🪀 改進與修復

- 證券存入業務優化：新增實物股票手續費錄入功能
    - 後台執行【手工入倉】操作並選擇實物股票類別時，系統將自動彈出手續費編輯框，供操作人員根據實際業務需求填寫應收手續費。
    - 路徑：證券後臺 - 證券管理 - 證券存入 - 存入申請

<img src="/assets/HZOqbJqVRooCHnx5c7NjKxAsptc.png" src-width="3310" src-height="1758" align="center"/>

- eDDA記錄新增回收站功能
    - eDDA記錄新增回收站功能，可在此模組中單獨查詢已刪除的eDDA記錄。
    - 路徑：證券管理-款項管理-出入金方式-eDDA

<img src="/assets/RfcubNtoeoFU02xGS1qjxO02phh.png" src-width="3298" src-height="954" align="center"/>

- 客戶額度調整頁面優化並增加自定義列表功能
    - 客戶額度頁面增加“自定義列表”功能
    - 調整額度由頁面更改為側邊欄
    - 路徑：證券後台-風控管理-授信額度-融資授信-客戶額度

<img src="/assets/M0iSbpfb0oBUjJxw6gzj0sxBpXg.png" src-width="3212" src-height="614" align="center"/>

- 出金申請客戶標記交互優化
    - 標記條件從單一「客戶編號」拓寬至多維度（如證券帳號、銀行名稱等），支援多組標記同時批量添加，提升操作效率。
    - 新增歷史標記記錄列表，清晰展示標記時間、操作人及標記內容；支援按需單獨或批量取消標記，靈活回溯與修正。
    - 符合標記條件的出金申請，將在詳情頁自動顯示標記備註，強化業務資訊關聯性與審核依據透明度。
    - 路徑：證券後台 - 款項管理 - 出金申請

- BE公司行動新增專項郵件發送功能
    - 根據派息是否需要墊資的場景發送特定的郵件

<img src="/assets/FxtTbqwGFoLN6NxP0TZjb2Xbpuh.png" src-width="3234" src-height="1766" align="center"/>

- 客戶匯兌單信息展示優化
    - 列表移除「客戶姓名」展示，將客戶編號設為可點擊跳轉項目。
    - 路徑：證券後台 - 款項管理 - 換匯 - 客戶匯兌

<img src="/assets/DMSub0Ocjoizy1xA9lfjY6kFpQU.png" src-width="3308" src-height="1756" align="center"/>

- 手工調賬增加客戶通知功能
    <img src="/assets/SNAXbKaS7o034dxMRj5jIpGkprb.png" src-width="3266" src-height="1738" align="center"/>
    - 手工調賬新增/批量新增均增加客戶通知功能，若調賬時選擇通知客戶則會在調賬成功後自動發送消息。
    - 消息通知功能為非必填項，默認不通知。其中批量新增時請根據幫助中心提示填寫。
    - 路徑：WBO - 資產賬戶 - 調賬 - 手工調賬

- 賬戶間轉倉增加託管商子倉
    <img src="/assets/Dfv2b8VxZoW7muxYPYujg5LQpwg.png" src-width="3228" src-height="1750" align="center"/>
    - 賬戶間轉倉支持指定轉出託管商子倉，轉入方託管商子倉信息默認與轉出方一致。
    - 路徑：WBO - 資產賬戶 - 資產調撥 - 賬戶間轉倉

- 入金記錄優化
    <img src="/assets/GLrab21itobs1Zx91OnjGXNopqf.png" src-width="3278" src-height="1054" align="center"/>
    - 為使展示更直觀，已將「公司銀行賬戶」、「客戶」、「匯款銀行」、「入金賬單」等零散資訊彙總展示。
    - 路徑：WBO - 款項管理 - 入金 - 入金記錄

- eDDA 授權記錄功能升級及工單配置說明
    <img src="/assets/Bp4Yb5XP5ohgtcxvNOFjiobkpVc.png" src-width="3264" src-height="1148" align="center"/>
    - 一、功能優化：新增 4 大 Tab 入口提升操作效率
        - eDDA 授權記錄頁面新增 4 個分類 Tab：待處理（Pending）、待審批（Awaiting Approval）、暫無法審批（Temporarily Unapproachable）、全部（All），支持後臺操作者按業務狀態快速篩選目標記錄，大幅縮短信息檢索時間。
    - 二、重要配置：工單審批流程必配項
        - eDDA 後臺審批功能已對接工單系統，上線前需完成以下配置：
        - 工單流程名稱1：WBO - 款項管理 - 出入金方式 - eDDA - 人工確認待審批
        - 工單流程名稱2：WBO-款項管理-出入金方式-eDDA-置為失效待審批
        - 配置必要性：若未完成該流程配置，將導致 eDDA 審批功能無操作按鈕。
    - 三、操作影響提示
        - 請同步完成工單流程配置，避免因流程缺失導致審批鏈路阻斷，確保 eDDA 業務處理的連續性。
    - 路徑：WBO - 款項管理 - 出入金方式 - eDDA

- 基金訂單新增拒單功能
    <img src="/assets/Eccjb7XenoSAAexfr2UjFNKep5e.png" src-width="2858" src-height="1878" align="center"/>
    - 公募基金/私募基金的訂單和基金清算新增拒單操作。
    - 路徑：
        - 基金管理-公募基金-客戶訂單/基金清算
        - 基金管理-私募基金-客戶訂單/基金清算

- 優化清算撤銷體驗
    <img src="/assets/QHPUb6ZIKohzBZx2iYCj9Yu2pbh.png" src-width="3022" src-height="1256" align="center"/>
    - 增加提醒、優化文案
    - 路徑：清算管理-清算撤銷

