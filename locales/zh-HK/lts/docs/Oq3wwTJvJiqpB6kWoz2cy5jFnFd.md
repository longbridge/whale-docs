---
title: 快速上手
slug: Oq3wwTJvJiqpB6kWoz2cy5jFnFd
sidebar_position: 1
---


# 快速上手

# 概述

WHALE 的款項管理系統提供了多幣種、多渠道、多策略的匯兌功能，使用者可以在系統中根據換匯的實際要求設定幣種對、輸入金額並完成匯兌。

# 快速上手

## 客戶匯兌

根據客戶提出的换匯要求，可在頁面手動新增手工換匯申請，若用戶在 APP 已經提交了申請，記錄會自動展示在該頁面。

### 手工換匯

<b>步驟一：選擇客戶，確認兌出幣種與兌入幣種</b>

點選【手工換匯】，在出現的彈出內選擇客戶&gt;輸入幣種對（系統將根據已選擇的客戶，自動展示每個幣種可提現的餘額）

<img src="/assets/ZXp6ba0Vfog0SFxhz19ckaX5nEd.png" src-width="3830" src-height="1854" align="center"/>

<b>步驟二：確認參考匯率</b>

選擇了客戶與幣種對之後，系統自動提供參考匯率，用戶也可以切換成【自定義匯率】進行手動輸入

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/LgKWb9WdDogVMfxVHTncYoHOnZk.png" src-width="3328" src-height="1772" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/WZHxbFJV2oXUNQxkgBFcQf0ungc.png" src-width="3322" src-height="1776" align="center"/>
</div>
</div>

<b>步驟三：輸入金額</b>

確定了客戶、幣種對、匯率之後，需要輸入匯兌的金額，匯兌金額可以有以下兩種方式：

- 以兌出幣種為基準。例：假設美元兌港幣的匯率=1:7.8，確定兌出 1000USD，系統將自動計算兌入幣種（HKD）=7800
- 以兌入幣種為基準。例例：假設美元兌港幣的匯率=1:7.8，確定兌入 1000USD，系統將自動計算兌出幣種（HKD）=7800

資料輸入無誤後，點選【確定】，頁面將產生一筆匯兌紀錄。

### 處理申請

申請的記錄生成後，後台操作人員需要再次檢查資料的準確性，確認無誤後點選操作列【複核】，進入彈跳窗進行【通過】/【駁回】操作。

<img src="/assets/Bg4obtseOoZFD4xlqZDcki5LnPb.png" src-width="3828" src-height="1858" align="center"/>

【通過】後，在「已結束」分類或「全部」分類下，可以查看已完成的匯兌記錄

<img src="/assets/B0VtbeAyKodEXYxuKOecSx1Fnmb.png" src-width="3314" src-height="1052" align="center"/>

## 參考匯率

用戶可在參考匯率頁面查看所有幣種對的匯率，同時支援用戶進行手動新增幣種對的參考匯率（含大量操作）

<img src="/assets/Dp6lbVR4Co4HS5xEuJncHjYUndf.png" src-width="3836" src-height="1860" align="center"/>

### 新建參考匯率

點選【新建】進入彈跳窗，將頁面中的必填欄位補齊，即可產生一筆參考匯率記錄

<img src="/assets/PXL8bv6BkopW3ixYONlc0njUnYe.png" src-width="3828" src-height="1864" align="center"/>

### 查看匯率更新記錄

由於不同的匯率管道的匯率會即時更新，系統透過 API 對接的方式會自動刷新頁面中的匯率，如果需要查看當天的歷史匯率，可以在匯兌記錄行的操作列點擊【歷史記錄】進行查看。

<img src="/assets/Q6zfbtCdyozcD3xMOeacFgR0nCh.png" src-width="3322" src-height="1770" align="center"/>

## 異常換匯記錄

若因通道方、銀行方、客戶方等原因，導致提交的匯兌申請異常中斷，可在該頁面進行針對處理

### 處理異常記錄

<b>步驟一：定位目標記錄，在操作列的 3 種方式中進行選擇：</b>

- 轉成功：是指相應通路換匯單經過人力確認，銀行資金已變動，所以人工將通路匯兌單狀態更新為成功
- 再匯兌：根據相應的管道匯兌單確認銀行端資金未變動，且不會再次變動，但是人工確認需要給用戶再次匯兌，則需要再次提交通路匯兌請求
- 轉失敗：是指相應通路換匯單經過人工確認，銀行資金未變動且後續不會變動，所以人工可以將通路匯兌單狀態更新為失敗

<img src="/assets/FgzibDYQKoOAkyxAKTgcP20BnGf.png" src-width="2366" src-height="1220" align="center"/>

<b>步驟二：根據第一步的處理方式進行複核</b>

<img src="/assets/Q0Atb1q4FoM8kexa7YhcdfgWnCf.png" src-width="2370" src-height="1198" align="center"/>

## 匯兌損益

由於時間差，換匯申請在提交至換匯完成時會存在匯率的波動進而影響到兌換的金額。此頁面用於查看每筆換匯申請所產生的匯兌損益，支援匯出至本地。

<img src="/assets/NOEwb187yoWU6nxvzQtcbWJfnAd.png" src-width="2344" src-height="1210" align="center"/>

