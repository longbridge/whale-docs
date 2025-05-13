---
title: 5.2 結單顯示
slug: USTfweOITiXo2ekzNhbc0NFpnDh
sidebar_position: 1
---


# 5.2 結單顯示

## 5.2A 問：客户的結單密碼是什麼？

<b>答：</b>密碼組成方式：登錄手機號末四位 + 證件號末四位。密碼中的字母必須大寫，有括弧的直接忽略。 

例如：手機號碼是 12345678，證件號碼是 123456（X），則結單密碼是 5678456X。

- 個人戶：手機號碼後 4 位數字 ＋ 身分證號碼最後 4 位數字（聯名戶以主持有人為相關信息）
- 公司户：手機號尾 4 位數字 ＋ CI 尾 4 位數字

> 如客户是提供了多個國藉證件，取的證件號邏輯順序是：香港身份證＞本國身份證＞護照，按香港交易所申報 BCAN 的順序保持一致。

## 5.2B 問：會有臨時結單可以生成？

<b>答：</b>在「清算管理＞結單管理＞結單查詢」頁面點擊「創建臨時結單」。


「創建臨時結單」功能最多能創建一份包含帳戶最終操作日期起計三個月內的結單，如客户最後操作出入金為 2023 年 6 月，臨時結單只能包含 6，7，8 月這時段，再往後的日期因為帳戶沒有操作日期便沒有結單。

> 如果客户沒錢沒貨就不能創建出臨時結單／ 月結單，沒有流水出入記錄沒有日結單。

<img src="/assets/JnOBbpSMtocgUZxGMGzcpXXHnBd.png" src-width="2496" src-height="1312" align="center"/>

## 5.2C 問：結單顯示的參考匯率是那種匯率？

答：結單顯示的參考匯率是依照「款項管理＞換滙＞參考滙率」的即期匯率。

> 參考滙率以<b>中間拆算價</b>換算總資產市值。

<img src="/assets/LfLVbcuXqoa7zZxjSKHcQeE7nmc.png" src-width="1682" src-height="634" align="center"/>

## 5.2D 問：報表或結單會否顯示到平倉交易？

<b>答：</b>TDR001-1-Daily Client Order Report By Client 報表的「訂單類型」會顯示為「強平單」；
結單中的「股票交易明細」會顯示該訂單為「強制平倉 Forced Liquidation」。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[48%]" width-ratio="48">
<img src="/assets/LLgzbfVbdo3zK9xPsCGcR5z9nac.png" src-width="2832" src-height="1486" align="center"/>
</div>
<div class="w-[51%]" width-ratio="51">
<img src="/assets/NyKBblpMXoRc5RxUIvxcblnInzc.png" src-width="1384" src-height="676" align="center"/>
</div>
</div>

## 5.2E 問：手工調賬的交易為什麼不能顯示「成本價」及「浮動盈虧」？

<b>答：</b>日切時間點後進行手工調賬交易，結單的「成本價」和「浮動盈虧」須要在下一個交易日更新和顯示。

## 5.2F 問：結單顯示的債券「價格」和「成本」分別代表什麼？

<b>答：</b>“價格”顯示的是債券「行情維護」的收盤價；“成本”顯示的是攤薄成本＝（總買入金額 - 總賣出金額）/ 持有數量。調賬以人工輸入的總成本價為準，如沒有輸入會取上次收盤價計算 = 收盤價 x 持有數量。

> 如：交易總額為 `$500,000`、數量為 `5,000`。
總成本價輸入 `$500,000`、結單上的成本價以攤薄成本價顯示 `= ＄100`

<img src="/assets/MEeVbIOPeoNlIgxrfMxczESZnNd.png" src-width="1368" src-height="260" align="center"/>

## 5.2G 問：結單中的「待交收金額」和「資金餘額」有什麼分別？

答：港股是 T＋2 交收，在 T＋1、T＋2 或以外的交收資金，都會撥入「待交收金額」。前天和當天的交易淨交收金額（淨買入金額 - 淨賣出金額）等於「待交收金額」。

> "資金餘額" 是賬面金額。

<img src="/assets/ZteSb46a4oUukqxXUgTcHOqYnib.png" src-width="1706" src-height="696" align="center"/>

## 5.2H 交易下單賬號選錯了另一個客户，前台已作成交分配轉移訂單到正確客户，但是結單上能什樣修正？

答：因前後台分離下，前台 WTT 作成交分配，在「交易查詢＞成交分配」（見 5.2H 圖一、圖二）App 上會即時顯示。
後台作合約修正，選擇錯誤的訂單分配到正確的賬户。在「清算管理＞合約管理＞合約修正列表」操作修正合約作審批（見 5.2H 圖三至圖六）。
日終後結單上會把錯誤的訂單顯示為已撤銷（見 5.2H 圖七），另一客户生成新結單。

> 操作成交分配前請通知受影響客户，以免引起投訴。

<img src="/assets/QucfbrYRPom9aex6xaJcQWZ1nUh.png" src-width="2612" src-height="1574" align="center"/>

<em>5.2H 圖一</em>

<img src="/assets/CzUkbTMGpoYH8nxcqkmcy482n2d.png" src-width="2606" src-height="1544" align="center"/>

<em>5.2H 圖二</em>

<img src="/assets/DtN1bQbaWoM3ywxBHBycKTDrnxe.png" src-width="2732" src-height="816" align="center"/>

<em>5.2H 圖三</em>

<img src="/assets/ZPLybBm3xoDo6lx9lXBcAQhknWd.png" src-width="2702" src-height="1192" align="center"/>

<em>5.2H 圖四</em>

<img src="/assets/VqwsbUyoyo5iEhxLsDgc5A13nZc.png" src-width="2504" src-height="1538" align="center"/>

<em>5.2L 圖五</em>

<img src="/assets/U3KabQ3uWoKQGOxNd1BcbYHwnwe.png" src-width="2850" src-height="1306" align="center"/>

<em>5.2L 圖六</em>

<img src="/assets/QgrXbyXvnovgDQxbLZMcHjSln0d.png" src-width="1096" src-height="370" align="center"/>

<em>5.2L 圖七</em>

