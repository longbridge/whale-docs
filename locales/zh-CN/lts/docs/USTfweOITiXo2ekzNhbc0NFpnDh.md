---
title: 5.2 结单显示
slug: USTfweOITiXo2ekzNhbc0NFpnDh
sidebar_position: 1
---


# 5.2 结单显示

## 5.2A 问：客户的结单密码是什么？

<b>答：</b>密码组成方式：登录手机号末四位 + 证件号末四位。密码中的字母必须大写，有括弧的直接忽略。 

例如：手机号码是 12345678，证件号码是 123456（X），则结单密码是 5678456X。

- 个人户：手机号码后 4 位数字 ＋ 身分证号码最后 4 位数字（联名户以主持有人为相关信息）
- 公司户：手机号尾 4 位数字 ＋ CI 尾 4 位数字

> 如客户是提供了多个国藉证件，取的证件号逻辑顺序是：香港身份证＞本国身份证＞护照，按香港交易所申报 BCAN 的顺序保持一致。

## 5.2B 问：会有临时结单可以生成？

<b>答：</b>在「清算管理＞结单管理＞结单查询」页面点击「创建临时结单」。


「创建临时结单」功能最多能创建一份包含帐户最终操作日期起计三个月内的结单，如客户最后操作出入金为 2023 年 6 月，临时结单只能包含 6，7，8 月这时段，再往后的日期因为帐户没有操作日期便没有结单。

> 如果客户没钱没货就不能创建出临时结单／ 月结单，没有流水出入记录没有日结单。

<img src="/assets/JnOBbpSMtocgUZxGMGzcpXXHnBd.png" src-width="2496" src-height="1312" align="center"/>

## 5.2C 问：结单显示的参考汇率是那种汇率？

答：结单显示的参考汇率是依照「款项管理＞换汇＞参考汇率」的即期汇率。

> 参考汇率以<b>中间拆算价</b>换算总资产市值。

<img src="/assets/LfLVbcuXqoa7zZxjSKHcQeE7nmc.png" src-width="1682" src-height="634" align="center"/>

## 5.2D 问：报表或结单会否显示到平仓交易？

<b>答：</b>TDR001-1-Daily Client Order Report By Client 报表的「订单类型」会显示为「强平单」；
结单中的「股票交易明细」会显示该订单为「强制平仓 Forced Liquidation」。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[48%]" width-ratio="48">
<img src="/assets/LLgzbfVbdo3zK9xPsCGcR5z9nac.png" src-width="2832" src-height="1486" align="center"/>
</div>
<div class="w-[51%]" width-ratio="51">
<img src="/assets/NyKBblpMXoRc5RxUIvxcblnInzc.png" src-width="1384" src-height="676" align="center"/>
</div>
</div>

## 5.2E 问：手工调账的交易为什么不能显示「成本价」及「浮动盈亏」？

<b>答：</b>日切时间点后进行手工调账交易，结单的「成本价」和「浮动盈亏」须要在下一个交易日更新和显示。

## 5.2F 问：结单显示的债券「价格」和「成本」分别代表什么？

<b>答：</b>“价格”显示的是债券「行情维护」的收盘价；“成本”显示的是摊薄成本＝（总买入金额 - 总卖出金额）/ 持有数量。调账以人工输入的总成本价为准，如没有输入会取上次收盘价计算 = 收盘价 x 持有数量。

> 如：交易总额为 `$500,000`、数量为 `5,000`。
总成本价输入 `$500,000`、结单上的成本价以摊薄成本价显示 `= ＄100`

<img src="/assets/MEeVbIOPeoNlIgxrfMxczESZnNd.png" src-width="1368" src-height="260" align="center"/>

## 5.2G 问：结单中的「待交收金额」和「资金余额」有什么分别？

答：港股是 T＋2 交收，在 T＋1、T＋2 或以外的交收资金，都会拨入「待交收金额」。前天和当天的交易净交收金额（净买入金额 - 净卖出金额）等于「待交收金额」。

> "资金余额" 是账面金额。

<img src="/assets/ZteSb46a4oUukqxXUgTcHOqYnib.png" src-width="1706" src-height="696" align="center"/>

## 5.2H 交易下单账号选错了另一个客户，前台已作成交分配转移订单到正确客户，但是结单上能什样修正？

答：因前后台分离下，前台 WTT 作成交分配，在「交易查询＞成交分配」（见 5.2H 图一、图二）App 上会即时显示。
后台作合约修正，选择错误的订单分配到正确的账户。在「清算管理＞合约管理＞合约修正列表」操作修正合约作审批（见 5.2H 图三至图六）。
日终后结单上会把错误的订单显示为已撤销（见 5.2H 图七），另一客户生成新结单。

> 操作成交分配前请通知受影响客户，以免引起投诉。

<img src="/assets/QucfbrYRPom9aex6xaJcQWZ1nUh.png" src-width="2612" src-height="1574" align="center"/>

<em>5.2H 图一</em>

<img src="/assets/CzUkbTMGpoYH8nxcqkmcy482n2d.png" src-width="2606" src-height="1544" align="center"/>

<em>5.2H 图二</em>

<img src="/assets/DtN1bQbaWoM3ywxBHBycKTDrnxe.png" src-width="2732" src-height="816" align="center"/>

<em>5.2H 图三</em>

<img src="/assets/ZPLybBm3xoDo6lx9lXBcAQhknWd.png" src-width="2702" src-height="1192" align="center"/>

<em>5.2H 图四</em>

<img src="/assets/VqwsbUyoyo5iEhxLsDgc5A13nZc.png" src-width="2504" src-height="1538" align="center"/>

<em>5.2L 图五</em>

<img src="/assets/U3KabQ3uWoKQGOxNd1BcbYHwnwe.png" src-width="2850" src-height="1306" align="center"/>

<em>5.2L 图六</em>

<img src="/assets/QgrXbyXvnovgDQxbLZMcHjSln0d.png" src-width="1096" src-height="370" align="center"/>

<em>5.2L 图七</em>

