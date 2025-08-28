---
title: 2025-06-03 更新日誌
slug: Vjohwb9L4iLTkpkwMbqczOD4nGc
sidebar_position: 5
version: stable
---


# 2025-06-03 更新日誌

# 🎉 新功能

- 支持所有證券類調賬撤銷
    - 全面支持所有調賬類型的撤銷功能，含普通撤銷和無痕撤銷
    - 列表新增撤銷批次號字段；如需縮減列表展示字段可使用“自定義列表”功能
    - 路徑：證券後台 - 資產賬戶 - 調賬 - 手工調賬
    <img src="/assets/CqPWbJrSGojTZfxh4uzcvk3ZnTe.png" src-width="3440" src-height="1120" align="center"/>

- 授信組額度變更增加工單審批流程
    - 調整授信組額度及調整授信組內賬戶額度增加工單審批流程，涉及功能入口見圖示。支持根據額度區間設置不同的審批流。
    - 關聯審批流：
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_back
        - credit.adjust_account_credit_call_back
        - credit.change_group_credit_call_back
    - 路徑：證券後臺 - 風控管理 - 授信額度 - 融資授信 - 額度審批

<img src="/assets/XVAEbnntcoReYYxXPujc9Qwznin.png" src-width="3212" src-height="856" align="center"/>

- 交易限額批量新建優化
    - 客戶限額/證券限額/交易員限額批量創建功能優化，更換為批量新建統一組件，可按批次差異化設置限額規則。
    - 路徑：證券後台 - 風控管理 - 交易限額 - 客戶限額/證券限額/交易員限額

<img src="/assets/ULS5b6H5YoUjSCxLiNpc8a1rnoc.png" src-width="3248" src-height="824" align="center"/>

- 公司行動對接工單審批
    - 新增公司行動模塊的審批功能，用戶在配寘相關工作流後在下列節點發起審批：
        - 預告執行
        - 預告撤銷
        - 退稅執行
        - 撤銷退稅

<img src="/assets/IKL6bHgMqopIfHxUOP5csBc4n8d.png" src-width="3090" src-height="1756" align="center"/>

- 美股換股公司行動預告自動創建

<img src="/assets/U0p7bNRzUoEu2oxvgzRczTqpnFc.png" src-width="2522" src-height="1238" align="center"/>

# 🪀 改進與修復

- 證券存入業務優化：新增實物股票手續費錄入功能
    - 後台執行【手工入倉】操作並選擇實物股票類別時，系統將自動彈出手續費編輯框，供操作人員根據實際業務需求填寫應收手續費。
    - 路徑：證券後臺 - 證券管理 - 證券存入 - 存入申請

<img src="/assets/J4Irbx23Ko4So7x47CpcfjR9nsc.png" src-width="3310" src-height="1758" align="center"/>

- eDDA 記錄新增回收站功能
    - eDDA 記錄新增回收站功能，可在此模組中單獨查詢已刪除的 eDDA 記錄。
    - 路徑：證券管理 - 款項管理 - 出入金方式-eDDA

<img src="/assets/G9SSbOCv6oCizOx56LncbLmRnge.png" src-width="3298" src-height="954" align="center"/>

- 客戶額度調整頁面優化並增加自定義列表功能
    - 客戶額度頁面增加“自定義列表”功能
    - 調整額度由頁面更改為側邊欄
    - 路徑：證券後台 - 風控管理 - 授信額度 - 融資授信 - 客戶額度

<img src="/assets/ArL7bv6WXoX6qHxbWlGct34Enje.png" src-width="3212" src-height="614" align="center"/>

- 出金申請客戶標記交互優化
    - 標記條件從單一「客戶編號」拓寬至多維度（如證券帳號、銀行名稱等），支援多組標記同時批量添加，提升操作效率。
    - 新增歷史標記記錄列表，清晰展示標記時間、操作人及標記內容；支援按需單獨或批量取消標記，靈活回溯與修正。
    - 符合標記條件的出金申請，將在詳情頁自動顯示標記備註，強化業務資訊關聯性與審核依據透明度。
    - 路徑：證券後台 - 款項管理 - 出金申請

- BE 公司行動新增專項郵件發送功能
    - 根據派息是否需要墊資的場景發送特定的郵件

<img src="/assets/AUyFb0orDoGmbpxggdGcSP20nLc.png" src-width="3234" src-height="1766" align="center"/>

- 客戶匯兌單信息展示優化
    - 列表移除「客戶姓名」展示，將客戶編號設為可點擊跳轉項目。
    - 路徑：證券後台 - 款項管理 - 換匯 - 客戶匯兌

<img src="/assets/HXW7bI8fqodMCkxqHufcxfhVndh.png" src-width="3308" src-height="1756" align="center"/>

