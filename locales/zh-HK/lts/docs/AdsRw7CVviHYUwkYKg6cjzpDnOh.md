---
title: 功能介紹
slug: AdsRw7CVviHYUwkYKg6cjzpDnOh
sidebar_position: 2
---


# 功能介紹

## 概述

當客戶的資產淨值，因市場波動而下跌至低於維持保證金水平時，系統會向客戶發出 Margin Call 通知，客戶必須在 3 個交易日補充資金或平倉，否則業務上有權替客戶進行平倉，而無須事先通知。

<img src="/assets/ICCBwebZUhAJ0sb2lL8c02qbnxg-board.png" src-width="772" src-height="191"/>

## 業務操作管理

### 1.風險預警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 風險預警</p>
</div>

<b>菜單功能介紹</b>：該菜單支持實時的保證金預警監控。

1. 列表展示所有當前預警客戶記錄，在左側區會有 綠色文字實時相關更新提示（實時更新最新計算結果）；同時在上方區域會加總目前 預警紀錄的追保金額與 長期未結清追保金額的 匯總額

<img src="/assets/QUFkbpWP1oc3awxAQ1ZcF23mnNg.png" src-width="2418" src-height="1148" align="center"/>

<b>頁面基礎字段說明</b>

<table>
<colgroup>
<col width="160"/>
<col width="511"/>
</colgroup>
<tbody>
<tr><td><p><b>字段</b></p></td><td><p><b>說明</b></p></td></tr>
<tr><td><p>合計追保金額</p></td><td><p>列表所有 margin call 客戶應追繳保證金總額</p></td></tr>
<tr><td><p>長期未結清追保金額</p></td><td><p>觸發預警超過 90 天的應追繳保證金總額</p></td></tr>
<tr><td><p>預警類型</p></td><td><p>用戶觸發 margin call 的類型</p></td></tr>
<tr><td><p>截止日期</p></td><td><p>用戶 margin call 的最後截止日；超出截止日，系統將不再發送消息</p></td></tr>
<tr><td><p>已觸發時長</p></td><td><p>當前時間 - 觸發預警時間（時間不足一小時按一小時處理）</p></td></tr>
<tr><td><p>淨資產比率</p></td><td><p>淨資產比率 = 可流動淨資產/max[可流動淨資產, 多頭持倉市值 - 退市及長期停牌股票市值 + abs(空頭持倉市值)]</p></td></tr>
<tr><td><p>可流動淨資產</p></td><td><p>股權資產 - 退市及長期停牌股票市值</p></td></tr>
<tr><td><p>股權資產</p></td><td><p>總現金 + 總持倉市值（總股票及衍生品持倉市值）</p></td></tr>
<tr><td><p>應追繳保證金</p></td><td><p>max (margin call 保證金 - 淨資產 + 應收利息 + 欠款保證金 - 交易額度，超額融資額度)<br/>*具體可在 WBO 後台進行配置</p></td></tr>
</tbody>
</table>

1. 同時對於列入監控預警的客戶，可以點選記錄後，可以進行後續操作：發送消息/平倉操作/設置自動平倉/發送語音消息

<img src="/assets/NraZb3PZ4oa5vYxwoVhcI1Pmn3b.png" src-width="2524" src-height="914" align="center"/>

1. 如果操作平倉動作時，可以選擇是否平倉特定股票平倉

<img src="/assets/GxAdbTRVeoj0s7x5WLZcyMN3nQd.png" src-width="2506" src-height="908" align="center"/>

1. 設置自動平倉：可以自定義設置自動平倉時間；同時，也可以根據業務實際情況自定義調整某些 Margin Call 的截止日期

<img src="/assets/DYkubCr47oCzomxvgXYcvZx2nsb.png" src-width="2472" src-height="888" align="center"/>

1. 也可以對列入監控預警的客戶，在記錄區右側點選【詳情】，提供該客戶的資產總覽、持倉明細和現金明細等信息，為平倉輔助參考；支持在詳情頁操作平倉或者發送消息

<img src="/assets/JSzVbuiAfoTiR4xxDhscWsb3nPX.png" src-width="3546" src-height="384" align="center"/>

<img src="/assets/GCoTbVw0qoYB2vxKFMGcN35HnVh.png" src-width="3616" src-height="1782" align="center"/>

1. 對當前預警記錄進行編輯備注，便於後續處理或給其他人參考​；同時，若標注為異常單，也可在列表頁面的【異常單】查看記錄

<img src="/assets/D6PXbM2oWo38DJxTpescHP0GnWe.png" src-width="3540" src-height="1096" align="center"/>

<img src="/assets/M0GlbbDSsouXLJxDEFmcpVTjnDb.png" src-width="3614" src-height="596" align="center"/>

<b>關於異常單</b>：

可能存在一些只有欠款但沒有持倉的特殊情況，無法通過斬倉結束 margin call，只能人工層面進行跟進。這些異常單不能跟正常 margin call 一樣頻繁進行通知。

這種情況，交易員可以將 margin call 記錄狀態更改為異常單，這樣這個 margin call 就不會每天發送消息給用戶。

### 2.日內融實時預警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 日內融實時預警</p>
</div>

<b>菜單功能介紹</b>：該菜單功能及操作邏輯同「實時預警」，針對客戶對象僅爲日內融賬戶。

<img src="/assets/BkcPbCHSgo1b3AxqDIucIlUQnid.png" src-width="3854" src-height="1979" align="center"/>

### 3.平倉訂單

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 平倉訂單</p>
</div>

<b>菜單功能介紹</b>：該菜單用於查看所有平倉記錄，以及若出現平倉操作錯誤，可以進行撤單。

<img src="/assets/Hb0jbhUqAoA645x8YXZcM8hjnNf.png" src-width="3734" src-height="1464" align="center"/>

### 4.期權備兌追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 期權備兌追收</p>
</div>

<b>菜單功能介紹</b>：該菜單展示期權備兌正股不足，需要追收股票的記錄。

1. 列表展示所有追收記錄

<img src="/assets/Z8H0bFPWAohYpcxYYaYclgTMnAh.png" src-width="3828" src-height="1450" align="center"/>

1. 點擊【詳情】可以進一步查看客戶 margin call 詳情，並支持對期權操作【平倉】

<img src="/assets/TVUfbSzFnotCFXxCe03cHjECn0e.png" src-width="3610" src-height="1792" align="center"/>

### 5.空頭股票追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 空頭股票追收</p>
</div>

<b>菜單功能介紹</b>：該菜單展示需要追收的空頭股票記錄（非實时更新）。

1. 列表展示所有追收記錄

<img src="/assets/CzoUb7D2yovYt9xNv7ic2il3nSe.png" src-width="3828" src-height="1970" align="center"/>

1. 點擊【詳情】可以進一步查看客戶 margin call 詳情，並支持對空頭股票操作【平倉】

<img src="/assets/L3aHbEacuottNgxH94scwYBfnSe.png" src-width="3278" src-height="1798" align="center"/>

