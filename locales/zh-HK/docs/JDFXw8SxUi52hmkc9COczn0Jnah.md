---
title: 9. 公募／私募基金問題
slug: JDFXw8SxUi52hmkc9COczn0Jnah
sidebar_position: 8
---


# 9. 公募／私募基金問題

## 9A 問：為什麼後台下基金訂單不能撤單？

<b>答：</b>下單後可以馬上撤單。如訂單狀況為“已日切”過了截止時間就不能作撤單。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[66%]" width-ratio="66">
<img src="/assets/IEwrbveUGo53AcxD47tcWQtlndh.png" src-width="2848" src-height="1634" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/SPr5bz4teoDas7xZsJRcheNrnTe.png" src-width="1352" src-height="1580" align="center"/>
</div>
</div>

## 9B 問：什麼是 獲取訂單時間 和 自動回填時間？

<b>答：</b>“獲取訂單時間”是日切時間；“自動回填時間”只對系統接了上手 API 的才有作用。接了的，上手會在自動回填時間返回回填數值；沒有接的，就需要在後台手動輸入數據回填。

<img src="/assets/JPt5b0atXo6WEYxkxUtc2BRyn4c.png" src-width="2630" src-height="542" align="center"/>

## 9C 問：自動回填的時間如何輸入？

<b>答：自動回填是針對有用 API 的場景</b>。不走 API 的，自動回填時間對租戶不生效，可以跟獲取訂單時間一樣。

<img src="/assets/IQTmbXkgZo1y3mx5b3WcS48Kn8g.png" src-width="2502" src-height="596" align="center"/>

## 9D 問：公募基金 及 私募基金 如何操作回填？

<b>答：</b>確認申購份額／贖回金額需根據上手給的結單或交易確認資料填寫，如沒有的數值可輸入 0。

<img src="/assets/KUilb17Huo7kHTxcSxIcoB8snZd.png" src-width="2164" src-height="1198" align="center"/>

## 9E 問：接了 API 上架的基金，系統沒有自動進行日切，能如何處理？ 

<img src="/assets/BmVtb4zJho0uGnxzeTMcnwTEnoc.png" src-width="2510" src-height="932" align="center"/>

<b>答：</b>系統會在每天的 8:00-22:00，每隔 5 分鐘檢查是否到達基金日切時間。請修改日切時間至 8:00-22:00 之間的時間段。（見 9E 圖一、圖二）

> 自動回填的檢測時間也是相同的時間段（8:00 - 22:00）。

<img src="/assets/YXZpbOehDoQMZVx91rQcBBZPngh.png" src-width="2502" src-height="692" align="center"/>

<em>9E 圖一</em>

<img src="/assets/Ouk2buPYhoVHv3xtkw4camMknIf.png" src-width="2170" src-height="1042" align="center"/>

<em>9E 圖二</em>

## 9F 問：如何更新每日基金的價格？

<b>答：</b>在「基金管理＞公募基金／私募基金＞淨值表」頁面內作更新價格。

<img src="/assets/LjWObrztEoXdLTxtayVc9tMlnzb.png" src-width="2636" src-height="640" align="center"/>

## 9G 問：補回之前的基金淨值，結單上會更新嗎？

<b>答：</b>結單的基金淨值生成是以自然日取值，即使修改歷史基金淨值也不會更新到。清算徹銷重新生成的結單對過往記錄不影響，仍然是取值該自然日前的基金淨值。

> 例子說明：現在為 2 月 28 日，而基金淨值的記錄截取至 1 月 31 日。之後在 2 月 28 日更新之前的歷史基金淨值，重新生成的結單也是取值 1 月 31 日。修改歷史基金淨值重跑日終生成結單，也不會更新。

## 9H 問：<b>PI 認證如何影響到認購公募／私募基金？</b>

<b>答：</b>（i）公募基金：沒有作 PI 限制，會以風險測評問卷限制認購基金。

（ii）私募基金：PI 認證後先可以認購；

前台 WTT 下單會提醒，客戶不是 PI，但仍可為客戶下單；

後台 WBO 沒有校驗，可以為客戶下單；

App 的未作 PI 認購不能認購。          

## 9I 問：手工調賬操作基金進出，會有什麼限制？

<b>答：</b>基金手工調賬，客戶可在 APP 作贖回；在後台也可以操作認購／贖回訂單。

> 後台「交易面板＞基金下單」只接受港元、美金的基金下單；
其他幣種的基金，需在 WTT「基金管理＞基金列表」下單

## 9J 問：新建私募基金的「最少持倉份額」、「最少持倉金額」和「最少賣出份額」、「內部代碼（來自上手）」是什麼？

<img src="/assets/SDiMbyFuJoqE8sx6bcIcnJuwnJg.png" src-width="2842" src-height="1068" align="center"/>

<img src="/assets/EAiib3TWloSbNzxrM5vckVsLncc.png" src-width="2838" src-height="1050" align="center"/>

答：

「最少持倉份額」、「最少持倉金額」：限制客戶出售基金數量、金額，須要持有一定數量的基金；

「最少賣出份額」：出售的基礎值，類似股票手數的概念；

「內部代碼（來自上手）」：租戶自行選擇用以識別標的的唯一碼。

## 9K 問：基金合單交易中，為什麼「基金清算」的總交易份額和所有客戶分配的份額總和不一樣？

<img src="/assets/HXiBbuVA0ovnMYx95kFc4mPrnkc.png" src-width="2866" src-height="964" align="center"/>

<img src="/assets/EdxYbzJbgogLa7xJtFPc4mYOnHb.png" src-width="2864" src-height="916" align="center"/>

答：系統現在計算基金合單交易的份額是以「個體客戶的認購金額/總認購金額*基金淨值」來計算，因此出現小數位差異。租戶可以用手工調賬方式幫助客戶調整份額。

