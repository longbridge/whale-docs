---
title: 2025-06-23 更新日誌
slug: LwRrwjWNhidkSikTExscfYMOnab
sidebar_position: 9
version: stable
---


# 2025-06-23 更新日誌

# 🎉 新功能

- 後台補單業務類型增加場外交易
    <img src="CJlqbv7sso8u6wxLOsRjNXMZpce" src-width="3020" src-height="1258" align="center"/>
    - 支持場外交易獨立配置收費規則
    - 支持OTC市場不配置日曆等
    - 路徑1：清算管理-合約管理
    - 路徑2：業務參數設置-市場管理-市場規則
    - 路徑3：業務參數設置-計費管理在港股雙櫃檯上線後，支持按主櫃檯的代碼導出指令；

- 港股雙櫃台兼容
    - 在港股雙櫃檯上線後，支持按主櫃檯的代碼導出指令； 支持按主櫃檯的代碼合併對賬

- 融資利息調整支援同時修改多天
    <img src="HiHabZLctohj22xNILNjgeTXpDd" src-width="3020" src-height="1266" align="center"/>
    - 融资利息调整支持同时修改多天
    - 路径：清算管理-融资管理

# 🪀 改進與修復

- 手工調賬增加客戶通知功能
    <img src="Sz03btv9QotKcYxcRsFjp4hCphh" src-width="3266" src-height="1738" align="center"/>
    - 手工調賬新增/批量新增均增加客戶通知功能，若調賬時選擇通知客戶則會在調賬成功後自動發送消息。
    - 消息通知功能為非必填項，默認不通知。其中批量新增時請根據幫助中心提示填寫。
    - 路徑：WBO - 資產賬戶 - 調賬 - 手工調賬

- 賬戶間轉倉增加託管商子倉
    <img src="BOKFbTpjeo1lbuxRAl0jk7gup4b" src-width="3228" src-height="1750" align="center"/>
    - 賬戶間轉倉支持指定轉出託管商子倉，轉入方託管商子倉信息默認與轉出方一致。
    - 路徑：WBO - 資產賬戶 - 資產調撥 - 賬戶間轉倉

- 入金記錄優化
    <img src="Og0abMeLaoQ5gVxcIAxjErOjp3g" src-width="3278" src-height="1054" align="center"/>
    - 為使展示更直觀，已將「公司銀行賬戶」、「客戶」、「匯款銀行」、「入金賬單」等零散資訊彙總展示。
    - 路徑：WBO - 款項管理 - 入金 - 入金記錄

- eDDA 授權記錄功能升級及工單配置說明
    <img src="KTvXbO23Sofbs6xcIlWj7zr0pgh" src-width="3264" src-height="1148" align="center"/>
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
    <img src="NenJbPx5RomBmDxeLSojnGBcpSh" src-width="2858" src-height="1878" align="center"/>
    - 公募基金/私募基金的訂單和基金清算新增拒單操作。
    - 路徑：
        - 基金管理-公募基金-客戶訂單/基金清算
        - 基金管理-私募基金-客戶訂單/基金清算

- 優化清算撤銷體驗
    <img src="CYi8bRAxJodhNPxzRsZjh5JEpVg" src-width="3022" src-height="1256" align="center"/>
    - 增加提醒、優化文案
    - 路徑：清算管理-清算撤銷

