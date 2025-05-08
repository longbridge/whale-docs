---
title: 12.0.2 交易报表（TDR 类别）
slug: MZRHwhGQ8i27hqkmUTic9WYSnCf
sidebar_position: 1
---


# 12.0.2 交易报表（TDR 类别）

## 12.0.2A 问：为何交易报表 TDR001-1 Daily Client Order Report By Client 的市价单价格跟股票现价相差那么多？

<b>答：</b>市价单非交易所订单，会以对手方的价格档位下特别限价单（SLO）。因为成交价格不确定，防止穿仓，所以做了 20% （1.2 倍）冻结资金的保护。

## 12.0.2B 问：为什么 TDR005 - Trade Summary Report 美股「成交时间」跟「交易日期」的筛选时间不匹配？

答：这个是时差问题，美股为隔晚市埸。报表显示的成交时间是香港时间，当中是显示到美股市场交易记录。

> 成交订单中也可查询到「对手方经纪席位」

<img src="/assets/TXpNbbrupocKbYx7xXIcACfNnjg.png" src-width="2850" src-height="1444" align="center"/>

