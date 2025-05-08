---
title: 5.1.1 清算对账
slug: GPDXwgZ4oiHnaFkbSsJceZ5hnZe
sidebar_position: 0
---


# 5.1.1 清算对账

## 5.1.1A 问：美股文件如何处理对账？ 

<b>答：</b>美股是隔夜市场，交易日会在下一天结束，需要美股上手第二天早上提供文件后导入对账。

系统持仓对账逻辑是对上一日的已交收持仓（持仓对帐对的是 T-1），需要导入美股上手文件，以完成美股清算。

> 美股清算最早在当天 11 点可执行

在「清算管理＞清算检查＞持仓对账」中按「重新对账」选择对应的执行日期及账务日期以刷新数据，再导出报表 SDR025 核对。

<img src="/assets/D7bhbYS7YofPIpxIfjUcN55bnhg.png" src-width="2398" src-height="1188" align="center"/>

## 5.1.1B 问：对账日期如何选择？

<b>答：</b>常规租户是下一天上午对上一天的账，系统是按对账任务发起的日期去默认展示，见下例说明。

<img src="/assets/XiuobUlooo6wPzx2iAicxL60n7d.png" src-width="1466" src-height="972" align="center"/>

## 5.1.1C 问：为什么 4 月 30 日港股清算后，系统账务日是 5 月 1 日，不是 5 月 2 日？
（以 5 月 1 日为例子）

<b>答：</b>5 月 1 日港股为假期，但美股为交易日，需要空跑港股清算，反之美股假期情况也一样。

## 5.1.1D 问：持仓不对账，仓位数量有差异，如何处理？

<b>答：</b>在「清算管理＞仓位管理＞仓位查询」页面搜索相应的客户，从需要转出的仓位点击「内部转仓」（见 5.1.1D 图一）。
转出的数量需要等于 street + nominee + own，没有数量的保持为 0（见 5.1.1D 图二）。

> 持仓对帐对的是 T-1。如昨天（20/5）日终后的内部转仓要明天（22/5）的持仓对帐才能反映出来

<img src="/assets/OH63bYXz6oUY8mxZA3pc7LKAnFf.png" src-width="2500" src-height="1136" align="center"/>

<em>5.1.1D 图一</em>

<img src="/assets/WQBWb9Wepoowi2xd3YMcUH1Wndh.png" src-width="1188" src-height="805" align="center"/>

<em>5.1.1D 图二</em>

## 5.1.1E 问：上手为长桥证券，在进行日终清算时，出现持仓不对账的原因是什么？

答：租户未完成日终前作持仓对账，会出现不平账。持仓文件要日切后作解析，完成日终后，系统的仓位数据作更新。
之后在「清算管理＞清算检查＞持仓对账」点击「重新对账」才能跟上手的持仓文件对得上。（账务日期选上一天）


## 5.1.1F 问：“结算账户”跟“业务账户”如何影响到对账类型？

<b>答：</b>上手代理／托管商设置的对账类型「结算账户」指以已结算数量（T+2 交收后）来显示持仓股数，「业务账户」指以账面股数（即时反映）来显示持仓股数。
系统主要以「结算账户」已交收的股数作对账，如设置了「业务账户」以账面股数对账，会引致 SDR025 - Stock Reconciliation Report 不对账，可以统一以把对账类型选为结算账户。

<img src="/assets/YQaWbAwU7ol2QVxP8FgcmbcZnlg.png" src-width="2672" src-height="1404" align="center"/>

