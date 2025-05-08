---
title: 功能介绍
slug: AdsRw7CVviHYUwkYKg6cjzpDnOh
sidebar_position: 2
---


# 功能介绍

## 概述

当客户的资产净值，因市场波动而下跌至低于维持保证金水平时，系统会向客户发出 Margin Call 通知，客户必须在 3 个交易日补充资金或平仓，否则业务上有权替客户进行平仓，而无须事先通知。

<img src="/assets/ICCBwebZUhAJ0sb2lL8c02qbnxg-board.png" src-width="772" src-height="191"/>

## 业务操作管理

### 1.风险预警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 风险预警</p>
</div>

<b>菜单功能介绍</b>：该菜单支持实时的保证金预警监控。

1. 列表展示所有当前预警客户记录，在左侧区会有 绿色文字实时相关更新提示（实时更新最新计算结果）；同时在上方区域会加总目前 预警纪录的追保金额与 长期未结清追保金额的 汇总额

<img src="/assets/QUFkbpWP1oc3awxAQ1ZcF23mnNg.png" src-width="2418" src-height="1148" align="center"/>

<b>页面基础字段说明</b>

<table>
<colgroup>
<col width="160"/>
<col width="511"/>
</colgroup>
<tbody>
<tr><td><p><b>字段</b></p></td><td><p><b>说明</b></p></td></tr>
<tr><td><p>合计追保金额</p></td><td><p>列表所有 margin call 客户应追缴保证金总额</p></td></tr>
<tr><td><p>长期未结清追保金额</p></td><td><p>触发预警超过 90 天的应追缴保证金总额</p></td></tr>
<tr><td><p>预警类型</p></td><td><p>用户触发 margin call 的类型</p></td></tr>
<tr><td><p>截止日期</p></td><td><p>用户 margin call 的最后截止日；超出截止日，系统将不再发送消息</p></td></tr>
<tr><td><p>已触发时长</p></td><td><p>当前时间 - 触发预警时间（时间不足一小时按一小时处理）</p></td></tr>
<tr><td><p>净资产比率</p></td><td><p>净资产比率 = 可流动净资产/max[可流动净资产, 多头持仓市值 - 退市及长期停牌股票市值 + abs(空头持仓市值)]</p></td></tr>
<tr><td><p>可流动净资产</p></td><td><p>股权资产 - 退市及长期停牌股票市值</p></td></tr>
<tr><td><p>股权资产</p></td><td><p>总现金 + 总持仓市值（总股票及衍生品持仓市值）</p></td></tr>
<tr><td><p>应追缴保证金</p></td><td><p>max (margin call 保证金 - 净资产 + 应收利息 + 欠款保证金 - 交易额度，超额融资额度)<br/>*具体可在 WBO 后台进行配置</p></td></tr>
</tbody>
</table>

1. 同时对于列入监控预警的客户，可以点选记录后，可以进行后续操作：发送消息/平仓操作/设置自动平仓/发送语音消息

<img src="/assets/NraZb3PZ4oa5vYxwoVhcI1Pmn3b.png" src-width="2524" src-height="914" align="center"/>

1. 如果操作平仓动作时，可以选择是否平仓特定股票平仓

<img src="/assets/GxAdbTRVeoj0s7x5WLZcyMN3nQd.png" src-width="2506" src-height="908" align="center"/>

1. 设置自动平仓：可以自定义设置自动平仓时间；同时，也可以根据业务实际情况自定义调整某些 Margin Call 的截止日期

<img src="/assets/DYkubCr47oCzomxvgXYcvZx2nsb.png" src-width="2472" src-height="888" align="center"/>

1. 也可以对列入监控预警的客户，在记录区右侧点选【详情】，提供该客户的资产总览、持仓明细和现金明细等信息，为平仓辅助参考；支持在详情页操作平仓或者发送消息

<img src="/assets/JSzVbuiAfoTiR4xxDhscWsb3nPX.png" src-width="3546" src-height="384" align="center"/>

<img src="/assets/GCoTbVw0qoYB2vxKFMGcN35HnVh.png" src-width="3616" src-height="1782" align="center"/>

1. 对当前预警记录进行编辑备注，便于后续处理或给其他人参考​；同时，若标注为异常单，也可在列表页面的【异常单】查看记录

<img src="/assets/D6PXbM2oWo38DJxTpescHP0GnWe.png" src-width="3540" src-height="1096" align="center"/>

<img src="/assets/M0GlbbDSsouXLJxDEFmcpVTjnDb.png" src-width="3614" src-height="596" align="center"/>

<b>关于异常单</b>：

可能存在一些只有欠款但没有持仓的特殊情况，无法通过斩仓结束 margin call，只能人工层面进行跟进。这些异常单不能跟正常 margin call 一样频繁进行通知。

这种情况，交易员可以将 margin call 记录状态更改为异常单，这样这个 margin call 就不会每天发送消息给用户。

### 2.日内融实时预警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 日内融实时预警</p>
</div>

<b>菜单功能介绍</b>：该菜单功能及操作逻辑同「实时预警」，针对客户对象仅为日内融账户。

<img src="/assets/BkcPbCHSgo1b3AxqDIucIlUQnid.png" src-width="3854" src-height="1979" align="center"/>

### 3.平仓订单

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 平仓订单</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查看所有平仓记录，以及若出现平仓操作错误，可以进行撤单。

<img src="/assets/Hb0jbhUqAoA645x8YXZcM8hjnNf.png" src-width="3734" src-height="1464" align="center"/>

### 4.期权备兑追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 期权备兑追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示期权备兑正股不足，需要追收股票的记录。

1. 列表展示所有追收记录

<img src="/assets/Z8H0bFPWAohYpcxYYaYclgTMnAh.png" src-width="3828" src-height="1450" align="center"/>

1. 点击【详情】可以进一步查看客户 margin call 详情，并支持对期权操作【平仓】

<img src="/assets/TVUfbSzFnotCFXxCe03cHjECn0e.png" src-width="3610" src-height="1792" align="center"/>

### 5.空头股票追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>Margin Call  &gt; 空头股票追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示需要追收的空头股票记录（非实时更新）。

1. 列表展示所有追收记录

<img src="/assets/CzoUb7D2yovYt9xNv7ic2il3nSe.png" src-width="3828" src-height="1970" align="center"/>

1. 点击【详情】可以进一步查看客户 margin call 详情，并支持对空头股票操作【平仓】

<img src="/assets/L3aHbEacuottNgxH94scwYBfnSe.png" src-width="3278" src-height="1798" align="center"/>

