---
title: 系統介紹
slug: 2a05bab0c2cc81d3a79adcc4e47cf1e0
sidebar_position: 2
---


# 系統介紹

# 一、系統介紹

本指南針對加密貨幣入幣業務的後台操作全流程，涵蓋記錄生成、查詢跟蹤、異常處理、撤銷操作及退幣流程，確保後台人員規範操作，保障業務合规與資金安全。

# 前置条件

- 後台操作人員使用專屬賬號密碼登錄 WBO 後台系統，進入「虛擬資產管理 - 出入幣 - 入幣」模塊。
- 確認賬號已具備「入幣申請」「入幣記錄」「撤銷」「退幣」等操作權限，無權限需聯繫管理員申請。

# 二、操作說明

## 加密貨幣<b>配置</b>

在客戶入幣前，需要進行入幣加密貨幣設置。

<img src="/assets/GAFAbi0P8oDP6pxfsq8jA3YOpxd.png" src-width="2048" src-height="706" align="center"/>

## 客户錢包地址

入幣前完成錢包地址認證是保障資產安全的關鍵前置環節。

<img src="/assets/Aqv0bjy0Lo397MxLaNujrEmQpPb.png" src-width="3288" src-height="1076" align="center"/>

## <b>入幣操作</b>

<b>請求接收與記錄生成</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜單入口：WBO - 虛擬資產管理 - 出入幣 - 入幣申請</p>
</div>

- 客戶端提交入幣請求後，系統自動接收請求信息，並生成唯一入幣記錄（含記錄編號、用戶證券賬號、入幣幣種、金額、目標地址、交易哈希 TXID、請求時間、狀態等核心信息）。
- 若遇異常或有問題的入幣申請，後台操作人員可直接在系統中執行刪除操作。

<img src="/assets/LanObTVnboVFS5xfj7fj9DHypwh.png" src-width="3262" src-height="826" align="center"/>

<b>入幣記錄查詢與跟蹤</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜單入口：WBO - 虛擬資產管理 - 出入幣 - 入幣記錄</p>
</div>

- <b>多條件查詢</b>：支持按記錄編號、客戶編號、創建時間 、狀態、等條件篩選查詢，快速定位目標記錄。
- <b>詳情跟蹤</b>：點擊單條記錄查看詳情，包含地址核對、交易哈希對應的區塊確認進度等信息，實時跟蹤入幣全流程。

<img src="/assets/DuHRbCq7Oo0o1bx03o0jKdVEpCf.png" src-width="3268" src-height="806" align="center"/>

<b>未入幣記錄撤銷操作</b>

- <b>操作前提</b>：僅針對狀態為「錢包地址認證中」的記錄（即區塊鏈網絡未開始確認、資產未轉出的入幣請求），其他狀態記錄不可撤銷。
- <b>操作步驟</b>：
    1. 在入幣記錄列表中，找到目標撤銷記錄，點擊「撤銷」按鈕；
    2. 系統彈出確認窗口，輸入操作備註（如「用戶重複申請」「地址填寫錯誤」），再次確認撤銷；
    3. 撤銷成功後，記錄狀態更新為「已撤銷」，系統自動留存撤銷操作日誌（含操作人、操作時間、備註），支持後續溯源。

<img src="/assets/XG2Db5drgo1wNGxr9aAjDC68p1c.png" src-width="3302" src-height="720" align="center"/>

<b>入幣成功後退幣流程</b>

- <b>操作前提</b>：僅針對狀態為「已到賬」的記錄（即資產已成功入賬至平台，用戶申請退幣或系統需強制退幣場景），需核實用戶身份及退幣合理性。
- <b>操作步驟</b>：
    1. 進入「入幣」模塊，查詢目標已到賬記錄，點擊「申請退幣」按鈕；
    2. 填寫退幣信息：輸入用戶指定的退幣地址（需與用戶身份驗證信息匹配）、選擇對應網絡（與入幣網絡一致）、核對退幣金額（默認為入幣金額，可調整，需注明調整原因）；
    3. 執行退幣操作：後台點擊「執行退幣」，系統生成退幣交易哈希，同步至區塊鏈網絡；
    4. 跟蹤退幣狀態：實時查看退幣記錄的區塊確認進度，確認完成後，更新入幣記錄狀態為「已退幣」，並留存退幣全流程日誌；
    5. 通知用戶：退幣成功後，需線下通知客戶。

<img src="/assets/U7RRbFCE5o6lbXxn3u6jCYxspHh.png" src-width="3274" src-height="804" align="center"/>

