---
title: 12.0.1 結算報表（SDR 類別）
slug: X455wbGfliAlc7k7p1dckyjin7e
sidebar_position: 0
---


# 12.0.1 結算報表（SDR 類別）

## 12.0.1A 問：SDR070 - OTCR report 是用作什麼申報？

<b>答：</b>SDR070 - OTCR report 用作申報實物股票轉出及轉入。不收印花稅的公司行動不會在報表上顯示，現金要約的會作申報。可導出 excel 上傳到交易所。

## 12.0.1B 問：在場外證券交易匯報制度（OTCR）下，現金要約等企業行動是否須予匯報？

<b>答：</b>如企業行動不涉及須徵收印花稅的交易（例如新股發行、公開招股、供股及私有化等）或為須向聯交所匯報的交易（例如由交易所參與者進行的現有股份配售），則該等企業行動不屬於場外證券交易。因此，在場外證券交易匯報制度下，與此等企業行動有關的股份轉移無須予以匯報。 

另一方面，若相關受規管中介人（不論是作為主事人或代理人）進行就<b>現金要約（此乃場外證券交易）</b>而作出的股份轉移，該相關受規管中介人便須根據場外證券交易匯報制度就<b>該股份轉移予以匯報</b>。在這情況下，該相關受規管中介人須在股份轉移日（即相關受規管中介人知悉已接納的要約獲得結算當日，而該日亦為在場外證券交易匯報制度下須予匯報的股份交易日期）之後的三個香港交易日內，根據場外證券交易匯報制度向證監會匯報。

## 12.0.1C 問：SDR025 - Stock Reconciliation Report 顯示的任務結果 Successful Check／Manually Confirmed／ Manually Unrecognized 是什麼意思？

<b>答：</b>SDR025 的任務結果對應「清算管理＞清算檢查＞檢查結果」頁面的任務結果欄位。
- 檢查通過，Successful Check；
- 檢查失敗，點擊了手動通過的 - Manually Confirmed；
- 檢查失敗，未手動通過的 - Manually Unrecognized。

<img src="/assets/GJa1bRLIxoRRssxVesQc0xXknIh.png" src-width="2074" src-height="850" align="center"/>

## 12.0.1D 問：SDR018 - Bargain Detail Report 類別的報表什麼時間能看到當天的交易數據？

<b>答：</b>最快在日終任務完成「清算入賬」，可以在 SDR018 報表查看當天的交易佣金資料。

> 美股的可以查看 SDR018-1 - Bargain Detail Report-US。

<img src="/assets/ZQuSbTdpGo2HmNxFcZ3crSILnBb.png" src-width="2246" src-height="1486" align="center"/>

## 12.0.1E 問：如何計算到客户每月的託管費？

答：SDR058-2 HK Custodian Fee Group by Client V2 能計算到，當中收取費率可以在「報表管理＞報表打印＞參數設置」修改。（見 12.0.1E 圖一至圖二）
託管費扣除使用手工調賬，可以用 "按證券賬號彙總" 的費用收取。（見 12.0.1E 圖三）

> 其它客户費率指聯名賬户等其它户口。

<img src="/assets/XcdKbPk5LoYo14xCRdTc7Jz8nSC.png" src-width="2712" src-height="986" align="center"/>

<em>12.0.1E 圖一</em>

<img src="/assets/CngRbkDlNoW3PHxz4b0cJjetnqd.png" src-width="2384" src-height="922" align="center"/>

<em>12.0.1E 圖二</em>

<img src="/assets/Tg00bofhToJ1wYxEKDRceAS1njf.png" src-width="2392" src-height="406" align="center"/>

<em>12.0.1E 圖三</em>

## 12.0.1F 問：如何查看客戶每筆交易上手收的平台費和佣金？

答：

1. 先在「計費管理」的「收費場景」，新建「代理商收費 - 股票交易」計費。

<img src="/assets/Jaopb82RMoB2jNxtRC9ckKCNnYf.png" src-width="2866" src-height="1610" align="center"/>

1. 在相關「代理商計費 - 股票交易」設置收費。

<img src="/assets/OIFSbw5J4ofcdjxYKiEc0AmYnWc.png" src-width="2836" src-height="1430" align="center"/>

1. 在 SDR048 - Broker Contract Details 報表查閱費用

<img src="/assets/DF3nbcSjLoZKb7xjaBgcqPhSnph.png" src-width="2848" src-height="1214" align="center"/>

