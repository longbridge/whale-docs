---
title: 功能介紹
slug: HKt0wOZDaidlkckhWTlcyMpnnbg
sidebar_position: 2
---


# 功能介紹

## 更新

2024.09.05   功能模塊的操作說明

## 操作说明

### 1.基金列表

<b>功能概述</b>

查看 WBO 後台配置的基金列表，可通過該頁面特客戶執行申購操作，並且支持查看基金基礎詳情數據。

<img src="/assets/UbNjbkrl3onwb5xCHPscmjBIn8b.png" src-width="2868" src-height="1730" align="center"/>

<b>功能頁面結構說明</b>

頂部為查詢功能區

中間列表為基金列表數據，包括已下架的基金數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 1.1 基金列表

<img src="/assets/Y9W4bu9W7oDZZDxm0PAcwfFrn7b.png" src-width="2870" src-height="1736" align="center"/>

- 查詢條件：ISIN、基金名稱、基金種類、基金類型、幣種、基金狀態
    - 列表的基金種類默認為“公募基金”，可手動切換為“私募基金”

- 列表字段：均展示 WBO 後台配置信息，可在列表中直觀查看基金類型、風險等級及上架狀態等基礎信息，可輔助判斷是否需要申購
- 操作項：申購、詳情
    - 申購：彈出申購窗口
    - 詳情：查看基金相關詳情數據

#### 1.2 基金列表 - 詳情

可分為三個功能區查看基金詳情：基本信息、歷史淨值、交易規則。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/GTIDb5jYwom3rOxhG4mc2fnrnch.png" src-width="2858" src-height="1734" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/PiO4bxb88oAwFCxd05TcSAaKnuf.png" src-width="2858" src-height="1736" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/J5xSbmmRToJo38xza67c5a1on0g.png" src-width="2862" src-height="1732" align="center"/>
</div>
</div>

- 頂部展示當前基金的名稱，點擊“&lt;”可操作返回至基金列表
- 通過 Tab 進行切換查看基金詳情數據
    - 基本信息：展示 WBO 後台配置的基金基本信息，主要為基金名稱、ISIN 以及基金類型、風險等級等
    - 歷史淨值：展示當前基金歷史單位淨值及日漲跌幅數據，可作為申購參考數據
    - 交易規則：根據 WBO 後台配置的相關交易規則進行展示，主要介紹基金的申購、贖回規則，包含起購金額及申購、贖回費率等

#### 1.3 基金列表 - 申購

列表點擊“申購”進入申購窗口，可在該窗口內選擇需申購的帳戶及輸入申購金額即可發起申購。

<img src="/assets/PYx7bYVMToXQ0Cxbk0ycJhoZnnf.png" src-width="2862" src-height="1742" align="center"/>

- 窗口內容分為三部分：客戶選擇、資金信息、申購操作
    - 客戶選擇：支持通過證券帳號、客戶姓名進行搜索，選中帳戶後將查詢客戶的資金信息
    - 資金信息 - 港元可提：展示選中客戶的現金數據，如未選擇帳戶則會展示為--，該金額是可進行申購的帳戶餘額，如申購的基金幣種為 USD 則提示為“美元可提”
    - 申購操作：包含當前基金的基本信息及申購費率信息，並且支持在申購金額處填入客戶需申購的金額
        - 申購金額：輸入客戶需申購的金額，未輸入金額時展示最低申購金額進行提醒
        - 備註：可填寫申購備註，在「訂單查詢」列表中可查看到相關申購備註

### 2.訂單查詢

<b>功能概述</b>

查看客戶全部的申購數據，可在該列表中進行管理，幫助客戶操作撤單。

<img src="/assets/X5dsbxYSJozkEOxx9JycgUVxniO.png" src-width="2874" src-height="1736" align="center"/>

<b>功能頁面結構說明</b>

頂部為查詢功能區

中間列表為基金訂單列表數據，包括全部申購訂單數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 2.1 基金訂單列表

<img src="/assets/HUY7bZQidohKg5xbLrcczj2ZnDb.png" src-width="2874" src-height="1736" align="center"/>

- 查詢條件：證券帳號、訂單狀態、基金種類、交易方向、委託渠道、訂單提交時間
- 列表字段：均展示基金訂單申購的基本信息，包括訂單編號、客戶信息、基金信息、申購信息及基金訂單申購狀態
    - 經紀人：即當前帳戶的經紀人，如無經紀人則顯示為空
    - 交易方向：申購、贖回
    - 訂單狀態：
        - 初始態：指下單至日切之間的訂單狀態
        - 已日切：已經進行日切，不可撤單
        - 已提交：後台發送資料到基金公司，不可撤單
        - 贖回貨交收：後台贖回份額交收完成
        - 已完成：申購交收、贖回錢交割完成，不可撤單
        - 已撤銷：訂單已操作撤單
    - 備註：展示申購提交時填入的備註信息，如未填寫備註則顯示為空

- 操作項：撤單、詳情
    - 撤單：操作基金申購撤單，在部分狀態下不支持撤單（參考上方訂單狀態說明）
    - 詳情：點擊查看基金訂單申購、贖回詳情

#### 2.2 基金訂單 - 詳情

<img src="/assets/JMBOb4yBEobQubxly4bckcVEnId.png" src-width="2858" src-height="1732" align="center"/>

基金訂單詳情窗口，查看基金訂單基本信息及費率、費用等。

#### 2.3 基金訂單 - 撤單

<img src="/assets/E4OHboqdIoRlPqx2Smrc7sgYnTe.png" src-width="782" src-height="784" align="center"/>

點擊訂單列表“撤單”操作後，喚起基金撤單二次確認，需確認後提交撤單申請。

