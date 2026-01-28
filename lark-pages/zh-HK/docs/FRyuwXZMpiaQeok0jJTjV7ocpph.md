---
title: 17.1 下單問題
slug: LLlvwUMy9ibdAxkjzKUcQVpUnpf
sidebar_position: 0
---


# 17.1 下單問題

# 17.1A 問：WTT 如何進行碎股交易？

答：可以在「交易頁面」下碎股單（見 17.1A 圖一）和「碎股撮合」（見 17.1A 圖二、圖三）進行碎股交易。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>碎股成交量比正股低，有機會需要掛單數天才有成交。</p>
</div>

<img src="S6OVbzeHZoZe9xxcBNbjcxWcp5b" src-width="2872" src-height="1792" align="center"/>

<em>17.1A 圖一</em>

<img src="XA1EbJFkXo2i4pxqQFoj8wRppjc" src-width="2878" src-height="1740" align="center"/>

<em>17.1A 圖二</em>

<img src="QPWQbglyvo8Dy8xZM7HjHqkWpOf" src-width="2862" src-height="1790" align="center"/>

<em>17.1A 圖三</em>

# 17.1B 問：交易訂單被拒絕原因為「Order Price Far Away From Reference Price」是什麼？

<b>答：</b> 下單被拒原因為下單價格距離現價太遠，買盤輸入價格不能高於最佳沽出價 9 個價位；賣盤輸入價格不能低於最佳買入價 9 個價位。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>美股窩輪暫未支持交易，會提示「該股票暫不支持交易」</p>
</div>

# 17.1C 問：前台下單的價格限制是什麼？

**答：**如買入訂單價格低於當前價格 24 個檔位會存放在系統中，到價再放出；

高於對手價格 9 檔不會存到系統，直接送出交易所，但會被交易所的價格限制下可能會被拒絕。

# 17.1D 問：如何限制客户交易虛擬資產或限制交易股票？

**答：**前台在「交易查詢＞證券限制」點擊右上方「新增」，把股票添加至黑名單禁止客户交易，能批量 “股票導入” 作限制。如黑名單沒有添加客户，默認為全部客户不能交易。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>如個別客户能作交易可以再新建白名單，添加關聯客户。以批量導入模版的股票代碼，需輸入：3099.hk</p>
</div>

<img src="V1YIbdZlrouSLqxbsKyjS6Xrp2b" src-width="2606" src-height="1526" align="center"/>

# 17.1E 問：WTT 的 “證券限制” 中，「關聯地區」是根據什麼區分客戶？

**答：**會以客戶填寫的居住國家作區分；如沒有，以證件簽發地區分；如果也沒有，會以國籍區分。

<img src="JaSjbfyr2omXhzxdZk5jZ7Ybp9c" src-width="2866" src-height="1332" align="center"/>

# 17.1F 問：下單後如何查到需要收取客户多少費用？

**答：**實際的費用需要完成清算後查看報表 SDR018 - Bargain Detail Report-HK。
預估的費用可以在前台下單組件右下方的「金額詳情」功能查詢到。

<img src="WkW2bw4hnoUlKkxJzXsjx4ZdpWg" src-width="2242" src-height="1122" align="center"/>

# 17.1G 問：強制平倉後，會有什麼方式通知到客户？

**答：<b>App 會有推送通知（見 17.1G 圖一）</b>，**在結單上也有強制平倉標示（見 17.1G 圖二）。
追收保證金（margin call）也有電郵及 App 推送通知（見 17.1G 圖三）。

<img src="P3nybWyU3oQMYUxQXY7jTdntpab" src-width="686" src-height="654" align="center"/>

<em>（17.1G 圖一）</em>

<img src="MTmrbNV9AoAUq7xt0z1jPNHypBR" src-width="1724" src-height="306" align="center"/>

<em>（17.1G 圖二）</em>

<img src="U2dibIrUjoWn9Dx9iCejaH4ypDh" src-width="770" src-height="1290" align="center"/>

<em>（17.1G 圖三）</em>

# 17.1H 問：「待提交」訂單距離市價多少價位會放出市場？

答：香港交易所的「待提交」訂單會在20個檔位以內放出市場。

# 17.1I問：系統能否限制自成交交易（客戶自己的買盤跟自己的賣盤對盤）？

自成交交易會被限制，同一個客戶雙向訂單，若價格是可成交的，第二筆下單會被拒絕。

