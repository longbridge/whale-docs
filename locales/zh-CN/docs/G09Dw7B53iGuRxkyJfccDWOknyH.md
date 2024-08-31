---
title: 9.1 余额通
slug: G09Dw7B53iGuRxkyJfccDWOknyH
sidebar_position: 1
---


# 9.1 余额通

## 9.1A 问：余额通触发自动赎回规则是什么？能用作抵扣认购其他基金、申购 IPO?

答：1.基金是每个交易日都会产生申赎渠道单，但是交收（回填）依赖基金公司实际返回申购确认份额，赎回确认金额的时间，基金那边设定了 T+几只是展示用的；客户购买了股票，T+2 需要交收股票，买完股票后现金可提会变成负数，此时会立刻触发余额通自动赎回，T+1 基金公司会打款到账，当天要人工在 WBO 完成清算交收，这样客户帐户上就有钱作 T+2 的股票交收了。

2.理论上不能买基金，因为购买基金当天就要客户扣款，然后把钱打给基金公司，等不到余额通赎回。IPO 使用余额通有时间限制，如果用户认购 IPO 时间晚于认购截止日的前一个交易日上午 9:00，因为余额通赎回金额到帐时间晚于认购截止日，就不能用余额通直接打新，用作抵扣美股港股则没问题。

## 9.1B 问：设置了最小赎回份额为整数，为什么能赎回小数份额？

答：余额通标的，赎回时只判断持股份额，不判断最小卖出份额/金额限制。
自动赎回是用于偿还欠款或交收的资金，如果无法自动赎回会导致客户欠款。所以余额通赎回时不受最小卖出份额/金额的限制。

<img src="/assets/TX2fboq73ojEFdx34PtckCJ0n2g.png" src-width="1640" src-height="308" align="center"/>
