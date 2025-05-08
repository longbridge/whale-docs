---
title: 8. 債券處理問題
slug: IcYTw5fjqicPAHkcmWGcFFyWn8d
sidebar_position: 7
---


# 8. 債券處理問題

## 8A 問：如何處理債券進出？

<b>答：</b>債券買入或賣出需要使用手工調賬方式處理，調賬前請在「私有標的庫」建立標的代碼。

(i). 在「證券管理＞標的管理＞私有標的庫」頁面點擊「新增標的」添加債券或外國股票

<img src="/assets/OHX7bsYcFofoKlxB7hqcaVUWnKb.png" src-width="2594" src-height="1289" align="center"/>

(ii). 打红色星號（*）為必需填寫部份

<img src="/assets/LNMobvZ7JoMxfyxdqG7cagwPnke.png" src-width="2114" src-height="1352" align="center"/>

(iii). 在操作欄點擊「基礎行情」作修改基礎資料 或 點擊「行情維護」錄入價格會在結單的收盤價顯示

<img src="/assets/GKCvbDO6co2lP1xCrhPc3cGSnsc.png" src-width="2014" src-height="520" align="center"/>

<img src="/assets/U8tkbrOhSoYWVrxIhH0cFgm0nVb.png" src-width="2535" src-height="1552" align="center"/>

<em>市埸、類型、證券代碼不能作修改</em>

(iv). 市值修改在「行情維護」頁面點擊「新增行情」

<img src="/assets/TFnmbqiFHoe1hGxUZU9cFqD5npd.png" src-width="2241" src-height="1231" align="center"/>

(v). 輸入代碼、選擇交易日、收盤價，點擊「確定」。新增後可「編輯」修正收盤價。

<img src="/assets/Zj0zb20zVohFEOxyAeUcnggzn4c.png" src-width="2242" src-height="1302" align="center"/>

(vi). 設置債券標的後，在「資產賬户＞手工調賬＞債券」頁面點擊「新建」作債券出入倉。

<img src="/assets/OBSpbrGJQoR3FwxiiZ9cAS0IniZ.png" src-width="2580" src-height="1206" align="center"/>

(vii). 打星號（*）為必需填寫部份，點擊「提交審核」。（調賬類型：`入賬 = 買入`；`出賬 = 賣出`）

> 首次的債券調賬需要輸入總成本價。如：交易總額為 `$500,000`、數量為 `5,000`。
總成本價輸入 `$500,000`、結單上的成本價以攤薄成本價顯示 `= ＄100`

<img src="/assets/NQ8FbZlD2oFQ6fxh8TAcVDXTn5e.png" src-width="2104" src-height="1352" align="center"/>

(viii). 審核人員在右上角「審批」有提醒，之後點擊「通過」

<img src="/assets/PlHgbvZ5VoXpPnxuuGsc2OL7nCd.png" src-width="2589" src-height="881" align="center"/>

<img src="/assets/HDwobHTDGoc8Q4x2FMyclNRZnbb.png" src-width="2542" src-height="1479" align="center"/>

(ix). 在「資產賬户＞賬户明細＞債券」頁面看到流入債券。賣出顯示為流出。

<img src="/assets/MBd7bly46oTqDmxozu1cjzggnC0.png" src-width="2852" src-height="716" align="center"/>

## 8B 問：為什麼債券的價格沒有在結單上更新？

<b>答：</b> 需要在「證券管理＞標的管理＞行情維護」頁面編輯行情才會在結上會反映（見 8B 圖一、圖二）。

如在清算前沒有作維護，需清算撤銷處理（結單可不操作、資產類不操作、補單不操作），新增／編輯行情後（見 8B 圖三），重跑日終更新收盤價。

<img src="/assets/KEtxbVL6EomA59xPTlicmysQntc.png" src-width="2506" src-height="776" align="center"/>

<em>8B 圖一</em>

<em>在「行情維護」頁面點擊「新增行情」</em>

<img src="/assets/GJkvbBmnzoPNTZxvjPNc9aO4nNK.png" src-width="2242" src-height="1302" align="center"/>

<em>8B 圖二</em>

<em>輸入股票代碼、選擇交易日、收盤價，點擊「確定」</em>

<img src="/assets/NOWxboPFJoPfhPxseJlc5Y87n5d.png" src-width="2249" src-height="600" align="center"/>

<em>8B 圖三</em>

<em>如行情價格有誤可作「編輯」</em>

## 8C 問：結單上的成本、價格、持倉市值是什麼計算？

<b>答：</b>結單成本計算是用攤薄成本： （總買入金額 - 總賣出金額）/ 持有數量。債券「行情維護」的收盤價在結單上顯示的是價格，成本是前面提供的攤薄成本。持倉市值是持倉股數 x 收盤價。

> 基金的收盤價則是取「淨值表」的價格。

註＊調帳進去的金額就是買賣金額 如果調帳有設定總成本價就以設定為準，否則會以收盤價計算（價格*數量）。

<img src="/assets/PO8pbGCcCoxyTsxIXKlcAdQxnrh.png" src-width="1368" src-height="260" align="center"/>

## 
