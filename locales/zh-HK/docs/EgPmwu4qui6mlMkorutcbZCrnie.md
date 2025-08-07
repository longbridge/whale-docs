---
title: 2024-03-04 更新日志
slug: 24-03-04
sidebar_position: 36
---


# 2024-03-04 更新日志

# 換匯優化說明

## 我們爲什麼要升級換匯系統？

### 提升功能易用性

- 聚合業務菜單，使功能操作更加緊密；
- 增加更多分類指標卡，強化了多數據場景下的批量處理能力；
- 增加數據展示的友善性。

### 拓展換匯業務支援場景

- 豐富換匯策略中適配的時段選項，可滿足任意時段的換匯要求
- 調整匯率展示邏輯，提升歷史數據的業務價值
- 新增換匯對賬功能頁面

## 在哪些地方進行了升級？

<table header_row="1">
<colgroup>
<col width="255"/>
<col width="726"/>
</colgroup>
<thead>
<tr><th><p>项目</p></th><th><p>示意图</p></th></tr>
</thead>
<tbody>
<tr><td rowspan="5"><p><b>設定類與配置類別功能均聚合至「業務參數設定&gt;匯兌」選單下，用戶可集中進行換匯業務的前置設置。</b></p></td><td><img src="/assets/Vpt9bDz6XoV1FGxLgHXcySTSnJf.png" src-width="2870" src-height="1258" align="center"/>
透過 3-5 個 tab 可以快速完成換匯功能的初始設置，其中：
- 必須設定的功能有：幣種對、換匯策略、換匯池額度配置
- 可選擇設定的功能：加點設定、大額限制</td></tr>
<tr><td><img src="/assets/VuyjbzienoArsgxFPhrc4BqWn7e.png" src-width="2860" src-height="1324" align="center"/>
- 直觀展示幣種對訊息
<img src="/assets/AgjubHOD0o9s6Gxp4rjcIa9DnMd.png" src-width="2858" src-height="1294" align="center"/>
- 增加兌入幣種為多選，可一次操作中完成多個幣種設置</td></tr>
<tr><td><img src="/assets/Oy8dbRMxJoui0ExEYlCcsDPdnAf.gif" src-width="2116" src-height="980" align="center"/>
- 優化換匯策略中服務策略文案
- 服務策略的時間段選項從單選更新為多選
- 增加換匯策略的啟用/停用功能
<img src="/assets/Q39GbopaJopjtRxAHCGcoujtnBf.png" src-width="2864" src-height="1316" align="center"/>
- 將審批起點降級為功能按鈕，用戶可以快速設定需要人工介入審批的幣種與金額</td></tr>
<tr><td><img src="/assets/MWKVbo6jeoDf4IxDbsScm6Mcnkc.gif" src-width="2170" src-height="956" align="center"/>
- 優化額度設定：透過直接設定額度取代原調增或調減功能</td></tr>
<tr><td><img src="/assets/WqevbRd5CoiG2YxCU8EcWmQCnse.gif" src-width="2126" src-height="976" align="center"/>
- 用 2 個分類展示匯率加點維度</td></tr>
<tr><td rowspan="5"><p><b>業務類功能聚合至“款項管理&gt;換匯”</b></p></td><td><img src="/assets/KqmdbEK2yoZVRKxDvOacg6yfnNh.png" src-width="2852" src-height="1328" align="center"/></td></tr>
<tr><td><img src="/assets/WRCObptbFooDhuxMKi6cthHtnKf.png" src-width="2870" src-height="1322" align="center"/>
- 增加指標卡分類展示</td></tr>
<tr><td><img src="/assets/YBHXb0dQoodH4sx27W9csoGwnDd.gif" src-width="2132" src-height="974" align="center"/>
- 增加【加點設定】快速跳轉功能
- 可查看歷史更新過的匯率</td></tr>
<tr><td><img src="/assets/M4k6bwSQioMidtxlAA7cVH30nMh.png" src-width="2370" src-height="1196" align="center"/>
- 整合異常換匯記錄操作功能，在一個頁面即可完成異常記錄的處理與審核</td></tr>
<tr><td><img src="/assets/QJG3blcwuoRlGQx9fP8ctZP8nzx.gif" src-width="2118" src-height="978" align="center"/>
- 匯兌池額度增加額度設定的快速跳轉功能</td></tr>
<tr><td><p>新增換匯對賬功能頁面（0513 上线）</p></td><td><img src="/assets/C4DAbSkGjoJJkAxr6dlcdb8Pn3e.png" src-width="2352" src-height="1166" align="center"/>
- 根據客戶在系統中換匯記錄與銀行端的資金記錄進行對賬處理</td></tr>
</tbody>
</table>

## 
## 
# 新版本操作引导

## 系統功能架構

<img src="/assets/DduYwgsglhCrW6bfjtvcU9xxnpf-board.png"/>

## 客戶匯兌

根據客戶提出的换匯要求，可在頁面手動新增手工換匯申請，若用戶在 APP 已經提交了申請，記錄會自動展示在該頁面。

### 手工換匯

<b>步驟一：選擇客戶，確認兌出幣種與兌入幣種</b>

點選【手工換匯】，在出現的彈出內選擇客戶&gt;輸入幣種對（系統將根據已選擇的客戶，自動展示每個幣種可提現的餘額）

<img src="/assets/Kq7xb4n8eoQIkxxKiGVcuXJ4nCc.png" src-width="3830" src-height="1854" align="center"/>

<b>步驟二：確認參考匯率</b>

選擇了客戶與幣種對之後，系統自動提供參考匯率，用戶也可以切換成【自定義匯率】進行手動輸入

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/M6jybjwk8oTi5vxsQDxcAdt1n4g.png" src-width="3328" src-height="1772" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/TZU0bfegKozjzaxHyXtclUqWndd.png" src-width="3322" src-height="1776" align="center"/>
</div>
</div>

<b>步驟三：輸入金額</b>

確定了客戶、幣種對、匯率之後，需要輸入匯兌的金額，匯兌金額可以有以下兩種方式：

- 以兌出幣種為基準。例：假設美元兌港幣的匯率=1:7.8，確定兌出 1000USD，系統將自動計算兌入幣種（HKD）=7800
- 以兌入幣種為基準。例例：假設美元兌港幣的匯率=1:7.8，確定兌入 1000USD，系統將自動計算兌出幣種（HKD）=7800

資料輸入無誤後，點選【確定】，頁面將產生一筆匯兌紀錄。

### 處理申請

申請的記錄生成後，後台操作人員需要再次檢查資料的準確性，確認無誤後點選操作列【複核】，進入彈跳窗進行【通過】/【駁回】操作。

<img src="/assets/V8jubkYfjoZ9gGxVs1McxfCwnzb.png" src-width="3828" src-height="1858" align="center"/>

【通過】後，在「已結束」分類或「全部」分類下，可以查看已完成的匯兌記錄

<img src="/assets/EwpabJxeBoPDePx6qZVctFSnn5c.png" src-width="3314" src-height="1052" align="center"/>

## 參考匯率

用戶可在參考匯率頁面查看所有幣種對的匯率，同時支援用戶進行手動新增幣種對的參考匯率（含大量操作）

<img src="/assets/O5labPB5Fo6wIzxT8Cdc4ZSVnbg.png" src-width="3836" src-height="1860" align="center"/>

### 新建參考匯率

點選【新建】進入彈跳窗，將頁面中的必填欄位補齊，即可產生一筆參考匯率記錄

<img src="/assets/FddhbcyQJoPBusxbVkrcC9f5n0b.png" src-width="3828" src-height="1864" align="center"/>

### 查看匯率更新記錄

由於不同的匯率管道的匯率會即時更新，系統透過 API 對接的方式會自動刷新頁面中的匯率，如果需要查看當天的歷史匯率，可以在匯兌記錄行的操作列點擊【歷史記錄】進行查看。

<img src="/assets/JUAIb26IOoJPp8xdgFlcDLvyn7e.png" src-width="3322" src-height="1770" align="center"/>

## 異常換匯記錄

若因通道方、銀行方、客戶方等原因，導致提交的匯兌申請異常中斷，可在該頁面進行針對處理

### 處理異常記錄

<b>步驟一：定位目標記錄，在操作列的 3 種方式中進行選擇：</b>

- 轉成功：是指相應通路換匯單經過人力確認，銀行資金已變動，所以人工將通路匯兌單狀態更新為成功
- 再匯兌：根據相應的管道匯兌單確認銀行端資金未變動，且不會再次變動，但是人工確認需要給用戶再次匯兌，則需要再次提交通路匯兌請求
- 轉失敗：是指相應通路換匯單經過人工確認，銀行資金未變動且後續不會變動，所以人工可以將通路匯兌單狀態更新為失敗

<img src="/assets/UHyubshqbo4l2mxMoIrczoKdncg.png" src-width="2366" src-height="1220" align="center"/>

<b>步驟二：根據第一步的處理方式進行複核</b>

<img src="/assets/CgdBbGm4AoWVzcxNRo3cF5wWnHu.png" src-width="2370" src-height="1198" align="center"/>

## 匯兌損益

由於時間差，換匯申請在提交至換匯完成時會存在匯率的波動進而影響到兌換的金額。此頁面用於查看每筆換匯申請所產生的匯兌損益，支援匯出至本地。

<img src="/assets/F9pVbULOMoehLyxV3eDck5Drnad.png" src-width="2344" src-height="1210" align="center"/>

