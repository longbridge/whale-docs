---
title: 快速上手
slug: BhdxwdhAbiAKubkVNprcU5pZnru
sidebar_position: 1
---


# 快速上手

## 概述

Whale 的賬戶管理模塊提供了對客戶賬戶的綜合管理和操作功能，幫助管理人員進行賬戶相關的管理工作。

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>權限名稱</p></th><th><p>權限說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>ClientAccountInfoFull</p></td><td><p>管理賬户列表、BCAN 碼、工單中心的權限</p></td></tr>
</tbody>
</table>

## 賬戶列表

### 查询账户信息

可以查詢所有已開戶的客戶帳戶狀態資料

<img src="/assets/NzSsbYQxCoCwlsxx3WfcPmJEnoh.png" src-width="3234" src-height="1606" align="center"/>

也可在右側記錄操作區：點選【詳情】，查看客戶細部基本資料，同時也提供資產交易/操作記錄/登錄設備/代理人/關係人 這些特定事項的 Tab 頁籤資料

<img src="/assets/Dq1pbV8gxoFuklxXPSxc1vz9nLe.png" src-width="3246" src-height="1228" align="center"/>

 資產記錄的入金記錄

<img src="/assets/TWuUbp1vzoyTNqxvIbmcB3c8nIb.png" src-width="2384" src-height="1248" align="center"/>

一些歷史登錄設備記錄

<img src="/assets/OUPKbTEHZo7jA7xBIabcc841noe.png" src-width="2420" src-height="744" align="center"/>

本作業也可以對客戶帳戶作交易權益的變更，在記錄右側操作區點選【交易權限】

<img src="/assets/QrA2btYGFoHJabxMgfQcHdiGnWd.png" src-width="1802" src-height="1364" align="center"/>

本作業也可以對客戶作帳戶安全事項管理，在記錄右側操作區點選【...】，選擇對應安全事項管理（凍結/解鎖/注銷等....)

<img src="/assets/NRkNbyqfBoRb3jxnUMzcPq6jnPf.png" src-width="3428" src-height="1504" align="center"/>

在帳戶列表作業中，增加帳戶標識篩選 查詢條件，方便定位查詢數據

<img src="/assets/VaLgbpy7Ro2wXHxY0YHcK6XqnVd.png" src-width="3248" src-height="808" align="center"/>

## BCAN 碼

### HKIDR 報送

本作業可以處理 HKIDR 機制的 BCAN-CID 檔案上傳（分成 SFTP 自動上傳與手動上傳 兩種模式）

- 注：有關中華通的 BCAN 說明 將在系統開放支持時說明

<img src="/assets/U14Rbr97jocfZhxGP7octqOrnsh.png" src-width="1280" src-height="586" align="center"/>

其中申報邏輯：上報的數據是 已開通帳戶、有 BCAN 碼且同意授權協議的全量客戶，申報給港交易所後，獲取交易所返回的檔內容，將 BCAN 生效的狀態同步更新；

1. <b>若是劵商是 EP 租戶</b>：本作業是支持自動申報上傳（透過 SFTP 的 SDNet/2 线路）

SFTP 申報方式說明如下：
- 交易日 08:00 am- 03:00 pm 時間段內，自動生成 BCAN-CID 檔
- 產生檔案後自動通過 SFTP 的方式提交給交易所
- 交易所返回的應答檔展示在後台，支持下載
- 返回的全景檔自動解析，將客戶的 BCAN 狀態自動更新

<img src="/assets/Waf3bsdXCoAeoLxzAHjctyeKnJS.png" src-width="3250" src-height="1542" align="center"/>

1. <b>若是劵商是 OB 租戶</b>：是要手動產生 BCAN-CID 檔後，再人工透過 SFC Web ECP 網站上傳資料

SFC Wings 申報方式說明如下：
- 通过本作業先行下载申报文件
<img src="/assets/LZCib61FeoV55oxAno4cQAbOncf.png" src-width="3222" src-height="1618" align="center"/>

- 去 ECP 2.0 SFC 入口官网上傳申報文件，将交易所返回的全景文件導入后台

<img src="/assets/HBWDbYqRPokkbCxNotfcrRSynqK.png" src-width="1280" src-height="904" align="center"/>

- 将交易所返回的全景文件，在本作業導入后台

<img src="/assets/Y2KPbiqvKovjZAxU7L4cdfgino8.png" src-width="3246" src-height="1624" align="center"/>

同時客户的 BCAN 生效狀態結果將同步更新

<img src="/assets/QQZkbPEHOonSQpxsfwWcYieTnUg.png" src-width="3218" src-height="1228" align="center"/>

### BCAN 區間

本作業可以維護參與者的角色（CCEP）所自行維護本身 BCAN 碼區間段或（TTEP）被上手劵商分配的 BCAN 碼區間段

當 BCAN 區間分配後，系統就會對新開戶的客戶自動分配一個 BCAN 碼

至于存量現有客戶，長橋科技將會協助在實名制實施前，批量完成現有客戶分配 BCAN 碼

<img src="/assets/JdFib9xOMoc53hxBZoGchdC4nvc.png" src-width="3242" src-height="810" align="center"/>

點選右方上側【新建區間】，新建一筆新的 BCAN 區間

<img src="/assets/KbvsbVzM7oFFprxrGmUc4VKanLf.png" src-width="3248" src-height="1624" align="center"/>

其中欄位說明如下：

<table>
<colgroup>
<col width="368"/>
<col width="503"/>
</colgroup>
<tbody>
<tr><td><p><b>港股 EP 模式</b></p></td><td><p><b>港股 Non-EP 模式</b></p></td></tr>
<tr><td><p>CCEP：選擇當前租戶選項<br/>使用者：選擇當前租戶選項<br/>是否上報：選擇‘是’<br/>起始編號/結束編號：手動輸入配置· </p></td><td><p>CCEP：選擇‘lb’選項<br/>使用者：選擇當前租戶選項<br/> 是否上報：選擇‘是’<br/> 起始編號/結束編號：手動輸入配置·</p></td></tr>
<tr><td colspan="2"><p>注意：（‘1’ - ‘99’是交易所自測區間，不可使用，不可用‘0’前置占位，建議按 lb 提供的區間配置）</p></td></tr>
</tbody>
</table>

## 參與者管理

本作業可以配置管理 實名制中有關劵商參與者的公司資料以及參與者的角色安排（CCEP/TTEP）

<img src="/assets/PxFub0ff7oCAgYxaXt9c4x9pnfh.png" src-width="3132" src-height="1046" align="center"/>

點選右方上側【新建參與者】，建一筆新的參與者信息

<img src="/assets/EDkGbD0SJooqh2xAI1JcyqXunYd.png" src-width="3248" src-height="1630" align="center"/>

其中欄位說明如下：

## 工單中心

### 凍結客戶

支持在後台操作客戶的賬號凍結，凍結後，當前賬號將無法登錄 App、桌面端等。

<b>單個賬號凍結</b>

點擊「新建工單」，選擇「凍結客戶」

<img src="/assets/RMPIbbhoMoAt0QxT7ZDcezrunBf.png" src-width="1998" src-height="824" align="center"/>

在「新建凍結客戶」彈窗內，選擇需要凍結的客戶編號，填寫備注說明及附件後，提交工單申請

<img src="/assets/SL3ebq2zHoBYhzxYPTncZRpyn0b.png" src-width="1952" src-height="1006" align="center"/>

點擊「詳情」，或批量勾選數據後，可單次/批量審核工單，審核通過後，客戶的狀態將發生變更

<img src="/assets/AcNhblfXWogXHMx9yIicPZySnNd.png" src-width="1948" src-height="988" align="center"/>

<b>批量客戶凍結</b>

在凍結客戶的列表頁，點擊「批量導入」按鈕

<img src="/assets/Y4JJbjr0aok18wxgJFCcag5Unw1.png" src-width="1960" src-height="854" align="center"/>

下載批量導入的文件模板，按要求填入待處理的數據，再在後台點擊上傳文件

<img src="/assets/W5FUb0Z7XogzfWxQsDdcp4uUn9b.png" src-width="1976" src-height="1000" align="center"/>

提交後，再在凍結客戶的列表頁，單次/批量審核數據。審核完成後，客戶的狀態發生變更

<img src="/assets/X8gQbOUwJo7IMHx54o3cpQSQnze.png" src-width="1948" src-height="988" align="center"/>

其他客戶/賬戶操作的流程，與凍結客戶類似

