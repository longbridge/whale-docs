---
title: 功能介紹
slug: AdsRw7CVviHYUwkYKg6cjzpDnOh
sidebar_position: 3
---


# 功能介紹

# 概述

當客戶的資產淨值，因市場波動而下跌至低於維持保證金水平時，系統會向客戶發出Margin Call通知，客戶必須在3個交易日補充資金或平倉，否則業務上有權替客戶進行平倉，而無須事先通知。

<img src="/assets/LIPHbwqmWonv5kxin6jjZlxNpBb.png" src-width="2564" src-height="754" align="center"/>

# 業務操作管理

## 1.風險預警

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 風險預警</p>
</div>

<b>菜單功能介紹</b>：該菜單支持實時的保證金預警監控。

1. 列表展示所有當前預警客戶記錄，在左側區會有 綠色文字實時相關更新提示（實時更新最新計算結果）；同時在上方區域會加總目前 預警紀錄的追保金額與 長期未結清追保金額的 匯總額

<img src="/assets/DkH2bhaVbowejjxVcdJjURz1p5b.png" src-width="2418" src-height="1148" align="center"/>

<b>頁面基礎字段說明</b>

1. 同時對於列入監控預警的客戶，可以點選記錄後，可以進行後續操作：發送消息/平倉操作/設置自動平倉/發送語音消息

<img src="/assets/VOIxbA1d3oX7fNxcJsujxA2qphc.png" src-width="2524" src-height="914" align="center"/>

1. 如果操作平倉動作時，可以選擇是否平倉特定股票平倉

<img src="/assets/VISRbWEvXo7KMVxJI4Djfh8Oppe.png" src-width="2506" src-height="908" align="center"/>

1. 設置自動平倉：可以自定義設置自動平倉時間；同時，也可以根據業務實際情況自定義調整某些Margin Call的截止日期

<img src="/assets/O0K9brxUpoL22px58FqjVsyPpce.png" src-width="2472" src-height="888" align="center"/>

1. 也可以對列入監控預警的客戶，在記錄區右側點選【詳情】，提供該客戶的資產總覽、持倉明細和現金明細等信息，為平倉輔助參考；支持在詳情頁操作平倉或者發送消息

<img src="/assets/YId0bXYtModtyMxgFlXjRvlXpAf.png" src-width="3546" src-height="384" align="center"/>

<img src="/assets/LkDibFnG2o9AKLxXKeHjUi0CpFe.png" src-width="3616" src-height="1782" align="center"/>

1. 對當前預警記錄進行編輯備注，便於後續處理或給其他人參考；同時，若標注為異常單，也可在列表頁面的【異常單】查看記錄

<img src="/assets/McLbbcg9uo9bBbxpJiRj6AFJpOd.png" src-width="3540" src-height="1096" align="center"/>

<img src="/assets/P1lkbl0O0oeIgHxywA3jr7Vhpmd.png" src-width="3614" src-height="596" align="center"/>

<b>關於異常單</b>：

可能存在一些只有欠款但沒有持倉的特殊情況，無法通過斬倉結束margin call，只能人工層面進行跟進。這些異常單不能跟正常margin call一樣頻繁進行通知。

這種情況，交易員可以將margin call記錄狀態更改為異常單，這樣這個margin call就不會每天發送消息給用戶。

## 2.日內融實時預警

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 日內融實時預警</p>
</div>

<b>菜單功能介紹</b>：該菜單功能及操作邏輯同「實時預警」，針對客戶對象僅爲日內融賬戶。

<img src="/assets/JCnsbhyr5opnuTx8XrOjGrtfp7d.png" src-width="3854" src-height="1979" align="center"/>

## 3.平倉訂單

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 平倉訂單</p>
</div>

<b>菜單功能介紹</b>：該菜單用於查看所有平倉記錄，以及若出現平倉操作錯誤，可以進行撤單。

<img src="/assets/QLebb4HmkoWpMsxIrlxjIjcNpvh.png" src-width="3734" src-height="1464" align="center"/>

## 4.期權備兌追收

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 期權備兌追收</p>
</div>

<b>菜單功能介紹</b>：該菜單展示期權備兌正股不足，需要追收股票的記錄。

1. 列表展示所有追收記錄

<img src="/assets/RYlEby1YaozwKWxEyuHjSbRtpEh.png" src-width="3828" src-height="1450" align="center"/>

1. 點擊【詳情】可以進一步查看客戶margin call詳情，並支持對期權操作【平倉】

<img src="/assets/VnDsbqDmFobbBYx52srjj75Fpig.png" src-width="3610" src-height="1792" align="center"/>

## 5.空頭股票追收

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 空頭股票追收</p>
</div>

<b>菜單功能介紹</b>：該菜單展示需要追收的空頭股票記錄（非實时更新）。

1. 列表展示所有追收記錄

<img src="/assets/JSTibBKeZoRRg5xIgFSjF3IwpSe.png" src-width="3828" src-height="1970" align="center"/>

1. 點擊【詳情】可以進一步查看客戶margin call詳情，並支持對空頭股票操作【平倉】

<img src="/assets/YklGbYy2boilTHxjiBKjQiApple.png" src-width="3278" src-height="1798" align="center"/>

