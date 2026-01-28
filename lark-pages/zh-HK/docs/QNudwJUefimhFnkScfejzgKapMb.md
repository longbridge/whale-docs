---
title: 12. 報表問題
slug: F1xuwsk0JipT5fkwAf6cOKL4nVN
sidebar_position: 11
---


# 12. 報表問題

# 常用報表類型說明：

# 12A 問：當天報表的數據什麼時間生成？

**答：**需要完成當天的日終後報表會生成數據。
一些實時的報表不用待日終完成，在「報表打印」頁面會提示那些是實時報表。

<img src="/assets/BotfbDApHoAtWpxL37bjKmaCptf.png" src-width="1790" src-height="780" align="center"/>

# 12B 問：合規報表 IDR020 Re-activation Of Dormant Account 顯示什麼客户數據？

**答：**報表顯示上次成交記錄超過 180 日的客戶，新客戶以開戶日期計算。報表不會判斷客戶的激活狀態。

# 12C 問：系統對虛擬交易、操控價格、內幕交易會有監察警報嗎？

**答：**可使用以下報表來人工判斷有沒有可疑交易。

IDR018 - Matched Trades Wash Trades（檢查是否有 2 客戶或以上買賣同一股票交易成交）

IDR026 - The Proportion Of Customer Transaction Volume（客戶的交易量佔股票的當日成交量超越 50%）

IDR027 - Deliberately Push Up Or Down The Closing Price（於收市前最後一分鐘訂單成交高於 / 低於前收市價 ≥5%）

IDR019 - Suspected Order Activities Report（單一客戶更改或取消訂單超過 20 次）

# 12D 問：如何導出高風險客戶的報告？

答：在 CDR001 - Client Master Listing Report 的「自定義列表」選擇「風險承受能力」點擊「保存」。
導出 Excel 後，在「風險承受能力」欄位作篩選。

<img src="/assets/BFXVbmxCIoI0GSxkQwdjnWOdp9b.png" src-width="2826" src-height="1600" align="center"/>

<img src="/assets/FjPGb31uho7vAQxapFfjrRd9pif.png" src-width="2844" src-height="1618" align="center"/>

<img src="/assets/BEJjb203voKV38xWpQxjLq0Vpmb.png" src-width="2846" src-height="1468" align="center"/>

# 12E 問：如何導出客戶股票集中度（Stock Concentration）的歷史數據？

答：報表 RDR010 - Concentration Risk 包含到一周的數據。如需要先前的歷史數據可從 SDR003 Client Stock Holding Report（By Stock） 取得客戶每天的持倉數值，再按港交所的股票發行市值，手工計算股票集中度。

<img src="/assets/HfwpbvHUDoWZuhxfmS1jHA2cpCb.png" src-width="2850" src-height="1346" align="center"/>

# 12F 問：如何解讀 FRR006-1 報表與 FDR002-1 報表？

答：1.FRR006-1 報表統計所有 Cash 賬戶欠款客户（根據選擇的匯率轉換成 HKD）；

一個客戶如果有多個幣種，統一轉成 HKD 後計算結餘。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>例子：USD 10 &amp; HKD -50。轉成 HKD 後，正數不統計到 FRR006-1 報表。</p>
</div>

日期基準：Trade Date 交易日 ＆Settle Date 交收日

<img src="/assets/GrvTbSq8IoK4O9xljpOjkiYcpRb.png" src-width="2380" src-height="592" align="center"/>

2.FDR002-1 報表統計所有客戶的資金明細（分幣種計算）

Available balance：以結算金額計算

Net Balance：以賬面金額計算

DR 是欠款

CR 是非欠款

<img src="/assets/UgCJbcHJeo8vfKxT7RDjjpkEpjc.png" src-width="2820" src-height="1264" align="center"/>

# 12G問：為什麼RDR027和RDR028報表沒有數據。

答： RDR027、RDR028報表數據產生時間：

上午的數據：11:30

下午的數據：17:30；

下午的數據產生後上午的數據不再保存顯示。

