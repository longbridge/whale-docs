---
title: 功能介绍
slug: AdsRw7CVviHYUwkYKg6cjzpDnOh
sidebar_position: 3
---


# 功能介绍

# 概述

当客户的资产净值，因市场波动而下跌至低于维持保证金水平时，系统会向客户发出Margin Call通知，客户必须在3个交易日补充资金或平仓，否则业务上有权替客户进行平仓，而无须事先通知。

<img src="LIPHbwqmWonv5kxin6jjZlxNpBb" src-width="2564" src-height="754" align="center"/>

# 业务操作管理

## 1.风险预警

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 风险预警</p>
</div>

<b>菜单功能介绍</b>：该菜单支持实时的保证金预警监控。

1. 列表展示所有当前预警客户记录，在左侧区会有 绿色文字实时相关更新提示（实时更新最新计算结果）；同时在上方区域会加总目前 预警纪录的追保金额与 长期未结清追保金额的 汇总额

<img src="DkH2bhaVbowejjxVcdJjURz1p5b" src-width="2418" src-height="1148" align="center"/>

<b>页面基础字段说明</b>

1. 同时对于列入监控预警的客户，可以点选记录后，可以进行后续操作：发送消息/平仓操作/设置自动平仓/发送语音消息

<img src="VOIxbA1d3oX7fNxcJsujxA2qphc" src-width="2524" src-height="914" align="center"/>

1. 如果操作平仓动作时，可以选择是否平仓特定股票平仓

<img src="VISRbWEvXo7KMVxJI4Djfh8Oppe" src-width="2506" src-height="908" align="center"/>

1. 设置自动平仓：可以自定义设置自动平仓时间；同时，也可以根据业务实际情况自定义调整某些Margin Call的截止日期

<img src="O0K9brxUpoL22px58FqjVsyPpce" src-width="2472" src-height="888" align="center"/>

1. 也可以对列入监控预警的客户，在记录区右侧点选【详情】，提供该客户的资产总览、持仓明细和现金明细等信息，为平仓辅助参考；支持在详情页操作平仓或者发送消息

<img src="YId0bXYtModtyMxgFlXjRvlXpAf" src-width="3546" src-height="384" align="center"/>

<img src="LkDibFnG2o9AKLxXKeHjUi0CpFe" src-width="3616" src-height="1782" align="center"/>

1. 对当前预警记录进行编辑备注，便于后续处理或给其他人参考；同时，若标注为异常单，也可在列表页面的【异常单】查看记录

<img src="McLbbcg9uo9bBbxpJiRj6AFJpOd" src-width="3540" src-height="1096" align="center"/>

<img src="P1lkbl0O0oeIgHxywA3jr7Vhpmd" src-width="3614" src-height="596" align="center"/>

<b>关于异常单</b>：

可能存在一些只有欠款但没有持仓的特殊情况，无法通过斩仓结束margin call，只能人工层面进行跟进。这些异常单不能跟正常margin call一样频繁进行通知。

这种情况，交易员可以将margin call记录状态更改为异常单，这样这个margin call就不会每天发送消息给用户。

## 2.日内融实时预警

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 日内融实时预警</p>
</div>

<b>菜单功能介绍</b>：该菜单功能及操作逻辑同「实时预警」，针对客户对象仅为日内融账户。

<img src="JCnsbhyr5opnuTx8XrOjGrtfp7d" src-width="3854" src-height="1979" align="center"/>

## 3.平仓订单

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 平仓订单</p>
</div>

<b>菜单功能介绍</b>：该菜单用于查看所有平仓记录，以及若出现平仓操作错误，可以进行撤单。

<img src="QLebb4HmkoWpMsxIrlxjIjcNpvh" src-width="3734" src-height="1464" align="center"/>

## 4.期权备兑追收

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 期权备兑追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示期权备兑正股不足，需要追收股票的记录。

1. 列表展示所有追收记录

<img src="RYlEby1YaozwKWxEyuHjSbRtpEh" src-width="3828" src-height="1450" align="center"/>

1. 点击【详情】可以进一步查看客户margin call详情，并支持对期权操作【平仓】

<img src="VnDsbqDmFobbBYx52srjj75Fpig" src-width="3610" src-height="1792" align="center"/>

## 5.空头股票追收

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; 空头股票追收</p>
</div>

<b>菜单功能介绍</b>：该菜单展示需要追收的空头股票记录（非实时更新）。

1. 列表展示所有追收记录

<img src="JSTibBKeZoRRg5xIgFSjF3IwpSe" src-width="3828" src-height="1970" align="center"/>

1. 点击【详情】可以进一步查看客户margin call详情，并支持对空头股票操作【平仓】

<img src="YklGbYy2boilTHxjiBKjQiApple" src-width="3278" src-height="1798" align="center"/>

