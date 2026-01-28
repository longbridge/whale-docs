---
title: 2025-09-29 更新日誌
slug: 2795bab0c2cc80979af4f5a744274fb5
sidebar_position: 4
version: stable
---


# 2025-09-29 更新日誌

# 🪀 改進與修復

- 開戶入金匹配後駁回聯動處理規則
    <img src="LVL5bzYYooWiBtxiIY6jfbCtp0b" src-width="4273" src-height="810" align="center"/>
    - 開戶入金場景下，若提交的入金申請已完成匹配，一旦開戶請求被駁回，系統將自動駁回該筆已匹配的開戶入金紀錄；駁回後，系統會同步自動撤銷客戶的入金申請。
    - 路徑：WBO - 款項管理 - 入金 - 開戶中入金

- 自動延續上一日匯率優化
    <img src="MkNnbsZH6ojXAIxVeFEje37HpGc" src-width="2930" src-height="812" align="center"/>
    - 針對匯率類型為「賬面匯率」的場景，系統新增自動延續上一日匯率的流程：若當前各幣種匯率尚未導入，系統將自動複製上一日對應幣種的匯率進行填補。
    - 路徑：WBO - 款項管理 - 換匯 - 參考匯率

