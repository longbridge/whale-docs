---
title: 快速上手
slug: GdSVwFnmjiJU1IkugcWcIEc8nzz
sidebar_position: 0
---


# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

<table header_column="1" header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><b>權限名稱</b></p></th><th><p><b>權限說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>使用运营计划、人群画像、触达通道的权限<br/>DeliverySystemReadOnly</p></td><td><ul>
<li>增刪改查個人名下運營計劃；創建、管理、查看用戶分群；</li>
<li>增刪改查 Banner、彈窗、Push、SMS、Email</li>
</ul></td></tr>
</tbody>
</table>

- 您需要接入 Whale 櫃檯後方可使用人群畫像中的規則創建用戶分群
- 您需要使用 Whale 的白標 App 產品並完成交付配置後，方可使用 Banner、彈窗、Push 通道觸達用戶
- 您需要完成消息服務的交付配置後，方可使用 SMS、Email 通道觸達用戶

## 運營計劃

### 如何創建一個定時型 - 單次計劃？

#### 適用場景

- 場景描述<b>：</b>定向召回流失交易用戶
- 目標受衆<b>：</b>假設帳戶資產＜200，歷史交易過 5 次以上的用戶
- 運營策略：給目標受衆發放任務幣，配置專屬兌換活動，併發郵件通知
- 效果評估：計劃上線後，追蹤目標受衆的 APP 啓動情況、兌換情況、入金交易情况

#### 使用說明

<b>第一步：选择創建計劃</b>

菜單入口：投放系統&gt;運營計畫

點擊右上角‘創建計劃’，設置計劃名稱（例：12 月迴歸獎勵活動）

<img src="/assets/WlipbOyLbopoJSxsy7Tcfafonbh.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置觸發條件</b>

配置條件參考如下：選擇計劃類型爲定時型 - 單次，2022-12-29 的 14:00 觸發計劃，對受衆用戶進行觸達

<img src="/assets/XH9ybjeYMoWEhPx3NU1cBHQnndv.png" src-width="2534" src-height="964" align="center"/>

<b>第三步：选择受衆用戶</b>

賬戶總資產小於 200 美金 且 累計交易次數大於 5 次

<img src="/assets/AJmabdJeRoLyPtxnuJ8cwzJdnsg.png" src-width="2830" src-height="1576" align="center"/>

<b>第四步：配置觸達規則</b>

以郵件的方式給用戶發送 App 新版本升級介紹

<img src="/assets/UNS2bHMKWo6kV6x1huVcUMg7n2g.png" src-width="2218" src-height="1220" align="center"/>

<b>第五步：設置觸達目標</b>

用戶收到郵件後，1 天內完成 App 啓動

<img src="/assets/Ars0bIeJKoHru2xfnrscagZGnwf.png" src-width="2158" src-height="1060" align="center"/>

### 如何創建一個 定時型 - 重複 計劃？

#### 適用場景

場景描述：定期向開戶用戶推送邀請活動

目標受衆：開戶且活躍用戶

運營策略：通過邀請活動 offer 作爲利益點，加深開戶用戶邀請認知，邀請身邊朋友開戶即可領取活動獎勵

效果評估：邀請活動 H5 的瀏覽量、目標受衆邀請開戶情況

#### 使用說明

<b>第一步：選擇創建計劃</b>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：投放系統&gt;運營計畫</p>
</div>

點擊右上角‘創建計劃’，設置計劃名稱（例：定期邀請開戶活動）

<img src="/assets/T9IFbXJjYoMCiXx78V5cYZWCnnh.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：設置觸發條件</b>

配置條件參考如下：選擇計劃類型爲定時型 - 重複，設置起止時間爲 2023-01-01 至 202-01-31，設置觸達時間爲每週一和每週五的 12:30，設置觸達次數限制爲同一個用戶 5 天內最多收到 1 次邀請活動

<img src="/assets/LfCcbrjWgoy39NxV86vcsnWMnOh.png" src-width="2638" src-height="1170" align="center"/>

<b>第三步：選擇受衆用戶</b>

配置條件如下：已開戶用戶 且 最近 App 啓動時間在 2022-12-01 至 2023-01-31

<img src="/assets/W4KZbOJxrod5XWxgd6fcyvmKnqc.png" src-width="2836" src-height="1588" align="center"/>

<b>第四步：配置觸達規則</b>

以短信的方式給用戶發送邀請活動

<img src="/assets/P0N5bPAEzokuz5xi0EycL2ijnKh.png" src-width="1814" src-height="1024" align="center"/>

<b>第五步：設置觸達目標</b>

用戶收到郵件後，4 小時內完成邀請活動頁面的瀏覽

<img src="/assets/VqFWbc9iTosoD0xUiLBco1CMnnf.png" src-width="2546" src-height="1122" align="center"/>

### 如何創建一個 獲取型-API 計劃？

#### 適用場景

- 場景描述：首發認購預熱
- 目標受衆：全部用戶
- 運營策略：通過 APP 彈窗的強提醒方式，引導用戶參與認購
- 效果評估：計劃上線後，追蹤目標受衆的 APP 彈窗打開率

#### 使用說明

<b>第一步：选择創建計劃</b>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：投放系統&gt;運營計畫</p>
</div>

點擊右上角‘創建計劃’，設置計劃名稱（例：越南概念 ETF 認購預熱）

<img src="/assets/ILE3brmO7o5rvLx9XQaclKpandy.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置觸發條件</b>

配置條件參考如下：選擇計劃類型爲獲取型-API

<img src="/assets/WDyGbHaKQoAogPx74Acc0YGdnof.png" src-width="2470" src-height="790" align="center"/>

<b>第三步：选择受衆用戶</b>

配置條件如下：全部用戶

<img src="/assets/F8iYbssD4oufnuxd9AWcL8L6nEe.png" src-width="2824" src-height="1586" align="center"/>

<b>第四步：配置觸達規則</b>

通過彈窗觸達用戶

<img src="/assets/XckdbTFItoja6Bx9xfCcGj16nXc.png" src-width="1788" src-height="1022" align="center"/>

<img src="/assets/AMoFbvUwtoupBZxk4nGc2kEvnDc.jpeg" src-width="1080" src-height="2234" align="center"/>

<b>第五步：設置觸達目標</b>

用戶收到彈窗後，5 分鐘內，打開彈窗且彈窗名稱爲南方東英越南 30

<img src="/assets/KPApbWiq2oiTmoxz8mOcFv2fnoh.png" src-width="2208" src-height="1070" align="center"/>

### 如何創建一個 觸發型 - 完成 A 計劃？

#### 適用場景

- 場景描述：新用戶註冊 12 天內，進行持續的內容觸達或引導
- 目標受衆：新註冊用戶
- 運營策略：通過多種觸達方式組合，在用戶註冊完成後的不同時間點，向用戶觸達不同類型的內容
- 效果評估：追蹤目標受衆的轉化情況、留存情況

#### 使用說明

從新用戶註冊 1 小時到 12 天，配置多個觸發型計劃，對用戶進行內容投放

<img src="/assets/KVPRbY6yAoJd4QxUeYscC8OXnRf.png" src-width="3454" src-height="1574" align="center"/>

以註冊 4 天關注股票引導爲例進行說明

<b>第一步：选择創建計劃</b>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：投放系統&gt;運營計畫</p>
</div>

點擊右上角‘創建計劃’，設置計劃名稱（例：註冊 4 天關注股票引導）

<img src="/assets/XH76bOl8hoQq9rxPzV2cZMzpnfc.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置觸發條件</b>

配置條件參考如下：選擇計劃類型爲 觸發型 - 完成 A，設置觸發事件爲註冊成功，設置延遲 4 天后對用戶觸達，設置起止時間爲 2023-01-01 至 2023-06-30，設置參與次數爲 1 次

<img src="/assets/BQuQb6hvDo6x27xc0zscs562noh.png" src-width="2854" src-height="1478" align="center"/>

<b>第三步：选择受衆用戶</b>

2023-01-01 至 2023-06-30 期間新註冊的用戶

<img src="/assets/HOD9blfPMoDhbcxvg6MckaYJnlh.png" src-width="2858" src-height="1582" align="center"/>

<b>第四步：配置觸達規則</b>

通過 Push 觸達用戶

<img src="/assets/RopYbNUzyoqziYxm2MTcCkSRnod.png" src-width="2206" src-height="1178" align="center"/>

<img src="/assets/KYT6bfw9NovAD8xdb8tctdVTnXd.png" src-width="1284" src-height="771" align="center"/>

<b>第五步：設置觸達目標</b>

用戶收到 Push 後，5 分鐘內，完成 Push 點擊，點擊 Push 的標題爲：順藤摸瓜，選到更多好股票

<img src="/assets/APxVbCkaTouyMex9bL8clLPYnEf.png" src-width="2200" src-height="1188" align="center"/>

## 人群畫像

### 怎樣創建用戶分羣？

投放系統支持通過 2 種方式創建用戶分羣，分別是規則創建和導入創建，您可以根據自己的需求選擇

<img src="/assets/GuRXbF3b0oLB9fxnh58cZxAsn2b.png" src-width="582" src-height="366" align="center"/>

#### 規則創建用戶分羣

基於用戶屬性和用戶行爲，設置規則創建分羣，您可以根據自己的需求選擇：

1. 僅使用用戶屬性
2. 僅使用用戶行爲
3. 同時使用用戶屬性和用戶行爲

<b>結果更新說明：</b>已經創建並保存成功的分羣，在每次被請求時，均會使用分羣規則去重新計算，從而獲取最新的數據結果

<img src="/assets/WBBObPO5cofGBgx7IoNcZ44cnnd.png" src-width="3068" src-height="1704" align="center"/>

#### 導入創建用戶分羣

通過導入指定 `id` 的名單來創建分羣，系統會將導入的 `id` 進行匹配，匹配成功的 `id` 則保存到分羣的結果中，導入 `id` 需爲用戶的唯一標識：`member_id`

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[52%]" width-ratio="52">
<img src="/assets/ShaHb3GyhoDZDoxyWfKcULonnWc.png" src-width="1542" src-height="1546"/>
</div>
<div class="w-[47%]" width-ratio="47">
<img src="/assets/B30BbYkh6oyYc3xYiRucx4wHnKc.png" src-width="1536" src-height="1684" align="center"/>
</div>
</div>

## 觸達通道

### 如何創建一個 App Banner？

以下是創建 App Banner 的步驟順序：

- 選擇 Banner 類型：如 - 需要創建一個在市場首頁位置的 Banner
- 設置 Banner 順序：同一個位置的 Banner 有多個配置上時，按照數字從小到大的順序進行輪播
- 設置 Banner 名稱：用於區分 Banner，作爲業務標識
- 設置 Banner 圖片：有裁剪和普通上傳 2 種方式，按需選擇
- 設置 Banner 跳轉鏈接：一般使用 Pagehub 生成 H5 鏈接後進行配置，也可使用 App 內的 H5 頁面鏈接
- 設置 Banner 運行週期：Banner 生效的週期，在設置週期內，Banner 生效，過期後則不再展示
- 設置 Banner 可見範圍：全部用戶可見 - 則 App 所有用戶可以看到 Banner，投放系統可見 - 則僅計劃配置中的目標受衆可見

<img src="/assets/EdhrbpGXcoeEWzxJyd8cYgWbnmb.png" src-width="1972" src-height="1640" align="center"/>

### 如何創建一個 App 彈窗？

以下是創建 App 彈窗 的步驟順序：

- 彈窗名稱：彈窗標識名稱
- 彈窗類型：頭圖或全圖，頭圖代表彈窗的標題描述確認按鈕等都將使用編輯的信息，全圖則代表完全使用背景圖作爲彈窗的展示信息
- 彈窗標題：展示在 App 的標題
- 彈窗描述：展示在 App 的描述信息
- 背景圖片：彈窗展示時的背景圖
- 確認按鈕：彈窗點擊跳轉的按鈕所對應的文案提示
- 確認按鈕 URL：點擊確認按鈕後，期望跳轉的地址
- 頻次限制：同一個用戶收到同一個彈窗的次數
- 活動時間：彈窗生效的時間週期
- 展示時間：在每天的 0 點到 24 點之間，希望彈窗在什麼時間段展示
- 彈窗平臺：可以選擇是在 2 個端顯示還是隻在某個單一的端進行顯示
- 可見狀態：選擇投放系統可見則代表僅計劃配置中的目標受衆可見，全部用戶可見則整個 App 用戶可見彈窗

<img src="/assets/RFNgbeSQYo091UxFfHccX4ujnqf.png" src-width="1924" src-height="1644" align="center"/>

### 如何創建一個 APP Push 消息？

投放系統的觸發配置提供了 Push 的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建 App Push  的步驟順序：

- 選擇通道爲 Push
- 設置標題、內容、上傳封面圖片
- 選擇通知行爲：常用的爲打開某個活動鏈接或跳轉到新股認購的頁面，具體可按需選擇

<img src="/assets/NNTQbrU3aohigYxQiozcqqlwnhf.png" src-width="2132" src-height="1526" align="center"/>

### 如何創建一個 郵件消息？

投放系統的觸發配置提供了郵件的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建郵件消息的步驟順序：

- 選擇通道爲郵件
- 設置發件人名稱、郵件標題
- 通過富文本編輯器編輯郵件正文
- 添加郵件附件、設置郵件發件郵箱

<img src="/assets/NvxwbYJXUoMHSGxLqiYcAJ1VnJd.png" src-width="1694" src-height="1362" align="center"/>

### 如何創建一個 短信消息？

投放系統的觸發配置提供了短信的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建短信消息的步驟順序：

- 選擇通道爲短信
- 選擇短信發送地區
- 選擇短信類型：投放系統一般使用營銷活動
- 設置短信內容

<img src="/assets/MeQmbnpHcohC0XxO9jUcm7mAnWe.png" src-width="2226" src-height="1530" align="center"/>

