---
title: 12.0.2 交易報表（TDR 類別）
slug: MZRHwhGQ8i27hqkmUTic9WYSnCf
sidebar_position: 1
---


# 12.0.2 交易報表（TDR 類別）

## 12.0.2A 問：為何交易報表 TDR001-1 Daily Client Order Report By Client 的市價單價格跟股票現價相差那麼多？

<b>答：</b>市價單非交易所訂單，會以對手方的價格檔位下特別限價單（SLO）。因為成交價格不確定，防止穿倉，所以做了 20% （1.2 倍）凍結資金的保護。

## 12.0.2B 問：為什麼 TDR005 - Trade Summary Report 美股「成交時間」跟「交易日期」的篩選時間不匹配？

答：這個是時差問題，美股為隔晚市埸。報表顯示的成交時間是香港時間，當中是顯示到美股市場交易記錄。

> 成交訂單中也可查詢到「對手方經紀席位」

<img src="/assets/TXpNbbrupocKbYx7xXIcACfNnjg.png" src-width="2850" src-height="1444" align="center"/>

