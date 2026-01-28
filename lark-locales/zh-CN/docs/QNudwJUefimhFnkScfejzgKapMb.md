---
title: 12. 报表问题
slug: F1xuwsk0JipT5fkwAf6cOKL4nVN
sidebar_position: 11
---


# 12. 报表问题

# 常用报表类型说明：

# 12A 问：当天报表的数据什么时间生成？

**答：**需要完成当天的日终后报表会生成数据。
一些实时的报表不用待日终完成，在「报表打印」页面会提示那些是实时报表。

<img src="BotfbDApHoAtWpxL37bjKmaCptf" src-width="1790" src-height="780" align="center"/>

# 12B 问：合规报表 IDR020 Re-activation Of Dormant Account 显示什么客户数据？

**答：**报表显示上次成交记录超过 180 日的客户，新客户以开户日期计算。报表不会判断客户的激活状态。

# 12C 问：系统对虚拟交易、操控价格、内幕交易会有监察警报吗？

**答：**可使用以下报表来人工判断有没有可疑交易。

IDR018 - Matched Trades Wash Trades（检查是否有 2 客户或以上买卖同一股票交易成交）

IDR026 - The Proportion Of Customer Transaction Volume（客户的交易量占股票的当日成交量超越 50%）

IDR027 - Deliberately Push Up Or Down The Closing Price（于收市前最后一分钟订单成交高于 / 低于前收市价 ≥5%）

IDR019 - Suspected Order Activities Report（单一客户更改或取消订单超过 20 次）

# 12D 问：如何导出高风险客户的报告？

答：在 CDR001 - Client Master Listing Report 的「自定义列表」选择「风险承受能力」点击「保存」。
导出 Excel 后，在「风险承受能力」栏位作筛选。

<img src="BFXVbmxCIoI0GSxkQwdjnWOdp9b" src-width="2826" src-height="1600" align="center"/>

<img src="FjPGb31uho7vAQxapFfjrRd9pif" src-width="2844" src-height="1618" align="center"/>

<img src="BEJjb203voKV38xWpQxjLq0Vpmb" src-width="2846" src-height="1468" align="center"/>

# 12E 问：如何导出客户股票集中度（Stock Concentration）的历史数据？

答：报表 RDR010 - Concentration Risk 包含到一周的数据。如需要先前的历史数据可从 SDR003 Client Stock Holding Report（By Stock） 取得客户每天的持仓数值，再按港交所的股票发行市值，手工计算股票集中度。

<img src="HfwpbvHUDoWZuhxfmS1jHA2cpCb" src-width="2850" src-height="1346" align="center"/>

# 12F 问：如何解读 FRR006-1 报表与 FDR002-1 报表？

答：1.FRR006-1 报表统计所有 Cash 账户欠款客户（根据选择的汇率转换成 HKD）；

一个客户如果有多个币种，统一转成 HKD 后计算结余。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>例子：USD 10 &amp; HKD -50。转成 HKD 后，正数不统计到 FRR006-1 报表。</p>
</div>

日期基准：Trade Date 交易日 ＆Settle Date 交收日

<img src="GrvTbSq8IoK4O9xljpOjkiYcpRb" src-width="2380" src-height="592" align="center"/>

2.FDR002-1 报表统计所有客户的资金明细（分币种计算）

Available balance：以结算金额计算

Net Balance：以账面金额计算

DR 是欠款

CR 是非欠款

<img src="UgCJbcHJeo8vfKxT7RDjjpkEpjc" src-width="2820" src-height="1264" align="center"/>

# 12G问：为什么RDR027和RDR028报表没有数据。

答： RDR027、RDR028报表数据产生时间：

上午的数据：11:30

下午的数据：17:30；

下午的数据产生后上午的数据不再保存显示。

