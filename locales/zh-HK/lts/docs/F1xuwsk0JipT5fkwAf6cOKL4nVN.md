---
title: 12. 報表問題
slug: F1xuwsk0JipT5fkwAf6cOKL4nVN
sidebar_position: 11
---


# 12. 報表問題

## 常用報表類型說明：

<table>
<colgroup>
<col width="208"/>
<col width="612"/>
</colgroup>
<tbody>
<tr><td><p>資金報表</p></td><td><p>FDR017 - Cash Movement In-Out Report By CCY（實時報表）</p></td></tr>
<tr><td><p>股票報表</p></td><td><p>SDR008 - 1  Stock Movement In-Out Report</p></td></tr>
<tr><td><p>待交收（T＋1／T＋1 以上）<br/>賬面市值＆持倉報表</p></td><td><p>SDR004 - Client Stock Location Report (By Stock)</p></td></tr>
<tr><td><p>收費詳細報表</p></td><td><p>按市埸選 SDR018 - Bargain Detail Report-HK／SDR018-1 - Bargain Detail Report-US</p></td></tr>
<tr><td><p>新股認購／費用明細</p></td><td><p>SDR028 - IPO Detail Report 需要搜尋新股代碼</p></td></tr>
<tr><td><p>交易報表</p></td><td><p>TDR001-1 查到訂單拒絕的原因</p></td></tr>
</tbody>
</table>

## 12A 問：當天報表的數據什麼時間生成？

<b>答：</b>需要完成當天的日終後報表會生成數據。
一些實時的報表不用待日終完成，在「報表打印」頁面會提示那些是實時報表。

<img src="/assets/Owvpbv3UXofcY1xyc9ociMxvnXd.png" src-width="1790" src-height="780" align="center"/>

## 12B 問：合規報表 IDR020 Re-activation Of Dormant Account 顯示什麼客户數據？

<b>答：</b>報表顯示上次成交記錄超過 180 日的客戶，新客戶以開戶日期計算。報表不會判斷客戶的激活狀態。

## 12C 問：系統對虛擬交易、操控價格、內幕交易會有監察警報嗎？

<b>答：</b>可使用以下報表來人工判斷有沒有可疑交易。

IDR018 - Matched Trades Wash Trades（檢查是否有 2 客戶或以上買賣同一股票交易成交）

IDR026 - The Proportion Of Customer Transaction Volume（客戶的交易量佔股票的當日成交量超越 50%）

IDR027 - Deliberately Push Up Or Down The Closing Price（於收市前最後一分鐘訂單成交高於 / 低於前收市價 ≥5%）

IDR019 - Suspected Order Activities Report（單一客戶更改或取消訂單超過 20 次）

## 12D 問：如何導出高風險客戶的報告？

答：在 CDR001 - Client Master Listing Report 的「自定義列表」選擇「風險承受能力」點擊「保存」。
導出 Excel 後，在「風險承受能力」欄位作篩選。

<img src="/assets/UjF3bx23goiKmUxAfNqcqTCDnte.png" src-width="2826" src-height="1600" align="center"/>

<img src="/assets/UW5XbfXIBo4HQwx2a1Sc08TVnZb.png" src-width="2844" src-height="1618" align="center"/>

<img src="/assets/DLwfbDP0xoIvzrxnznWc2amjnBh.png" src-width="2846" src-height="1468" align="center"/>

## 12E 問：如何導出客戶股票集中度（Stock Concentration）的歷史數據？

答：報表 RDR010 - Concentration Risk 包含到一周的數據。如需要先前的歷史數據可從 SDR003 Client Stock Holding Report（By Stock）取得客戶每天的持倉數值，再按港交所的股票發行市值，手工計算股票集中度。

<img src="/assets/Ki5TbQ5qYoROi2xXzc7caRXennf.png" src-width="2850" src-height="1346" align="center"/>

## 12F 問：如何解讀 FRR006-1 報表與 FDR002-1 報表？

答：1.FRR006-1 報表統計所有 Cash 賬戶欠款客户（根據選擇的匯率轉換成 HKD）；

一個客戶如果有多個幣種，統一轉成 HKD 後計算結餘。

> 例子：USD 10 & HKD -50。轉成 HKD 後，正數不統計到 FRR006-1 報表。

日期基準：Trade Date 交易日 ＆Settle Date 交收日

<img src="/assets/L3uYb98C7o5egvxWyhucD005nHf.png" src-width="2380" src-height="592" align="center"/>

2.FDR002-1 報表統計所有客戶的資金明細（分幣種計算）

Available balance：以結算金額計算

Net Balance：以賬面金額計算

DR 是欠款

CR 是非欠款

<img src="/assets/NSM7b7mGCo0iWJxk6JrcRi1UnTd.png" src-width="2820" src-height="1264" align="center"/>

## 12G 問：為什麼 RDR027 和 RDR028 報表沒有數據。

答： RDR027、RDR028 報表數據產生時間：

上午的數據：11:30

下午的數據：17:30；

下午的數據產生後上午的數據不再保存顯示。

