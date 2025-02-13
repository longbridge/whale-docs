---
title: 17.1 下單問題
slug: LLlvwUMy9ibdAxkjzKUcQVpUnpf
sidebar_position: 0
---


# 17.1 下單問題

## 17.1A 問：WTT 如何進行碎股交易？

答：可以在「交易頁面」下碎股單（見 17.1A 圖一）和「碎股撮合」（見 17.1A 圖二、圖三）進行碎股交易。

> 碎股成交量比正股低，有機會需要掛單數天才有成交。

<img src="/assets/Exybbau8TohOENxOxh2czsmcnDe.png" src-width="2872" src-height="1792" align="center"/>

<em>17.1A 圖一</em>

<img src="/assets/S3SEbdNYIop3wkxx2wQcclXCnXb.png" src-width="2878" src-height="1740" align="center"/>

<em>17.1A 圖二</em>

<img src="/assets/OOHJbtu2Vo6ksoxkhFfc63Grnie.png" src-width="2862" src-height="1790" align="center"/>

<em>17.1A 圖三</em>


## 17.1B 問：交易訂單被拒絕原因為「Order Price Far Away From Reference Price」是什麼？

<b>答：</b> 下單被拒原因為下單價格距離現價太遠，買盤輸入價格不能高於最佳沽出價 9 個價位；賣盤輸入價格不能低於最佳買入價 9 個價位。

> 美股窩輪暫未支持交易，會提示「該股票暫不支持交易」

## 17.1C 問：前台下單的價格限制是什麼？

<b>答：</b>如買入訂單價格低於當前價格 24 個檔位會存放在系統中，到價再放出；

高於對手價格 9 檔不會存到系統，直接送出交易所，但會被交易所的價格限制下可能會被拒絕。

## 17.1D 問：如何限制客户交易虛擬資產或限制交易股票？

<b>答：</b>前台在「交易查詢＞證券限制」點擊右上方「新增」，把股票添加至黑名單禁止客户交易，能批量“股票導入”作限制。如黑名單沒有添加客户，默認為全部客户不能交易。

> 如個別客户能作交易可以再新建白名單，添加關聯客户。
以批量導入模版的股票代碼，需輸入：3099.hk

<img src="/assets/AFSkbVYrdoeeKfxD4tkcXM43n7b.png" src-width="2606" src-height="1526" align="center"/>

## 17.1E 問：WTT 的“證券限制”中，「關聯地區」是根據什麼區分客戶？

<b>答：</b>會以客戶填寫的居住國家作區分；如沒有，以證件簽發地區分；如果也沒有，會以國籍區分。

<img src="/assets/JZQmbuy2SolibOxFEueccBGun4f.png" src-width="2866" src-height="1332" align="center"/>

## 17.1F 問：下單後如何查到需要收取客户多少費用？

<b>答：</b>實際的費用需要完成清算後查看報表 SDR018 - Bargain Detail Report-HK。
預估的費用可以在前台下單組件右下方的「金額詳情」功能查詢到。

<img src="/assets/VGeqbkAh6ooLqWx2utkcLT27nVf.png" src-width="2242" src-height="1122" align="center"/>

## 17.1G 問：強制平倉後，會有什麼方式通知到客户？

<b>答：</b>App 會有推送通知（見 17.1G 圖一）<b>，</b>在結單上也有強制平倉標示（見 17.1G 圖二）。
追收保證金（margin call）也有電郵及 App 推送通知（見 17.1G 圖三）。


<img src="/assets/Fi8cbwXYPoCKzLxii98cHMY6nYe.png" src-width="686" src-height="654" align="center"/>

<em>（17.1G 圖一）</em>

<img src="/assets/Rf8gbRygMoGdbMxEM5wcP6d0nwh.png" src-width="1724" src-height="306" align="center"/>

<em>（17.1G 圖二）</em>

<img src="/assets/B83ub6V6zoxTHQxk4ZBc4Dignuf.png" src-width="770" src-height="1290" align="center"/>

<em>（17.1G 圖三）</em>

## 17.1H 問：「待提交」訂單距離市價多少價位會放出市場？

答：香港交易所的「待提交」訂單會在 20 個檔位以內放出市場。

## 17.1I 問：系統能否限制自成交交易（客戶自己的買盤跟自己的賣盤對盤）？

自成交交易會被限制，同一個客戶雙向訂單，若價格是可成交的，第二筆下單會被拒絕。

