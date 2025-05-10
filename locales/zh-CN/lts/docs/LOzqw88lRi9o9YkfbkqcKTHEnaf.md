---
title: 19. 账户资产问题
slug: LOzqw88lRi9o9YkfbkqcKTHEnaf
sidebar_position: 18
---


# 19. 账户资产问题

## 19A 问：「账户详情」中「现金明细」内“待结算现金”的 Total、T0、T1、T2 和 TN 代表什么？

答：1. Total（总计）是一个实时的数，交易时段有交易而引致待交收金额的话便会作更新。

2. T0，T1 是取昨天清算文件的待交收金额，不会随著当天交易而更新。

3. 如果当天有交易的话，Total 便会更新，而 T0，T1，T2 不会更新。出现了 T0＋T1＋T2 不等于 Total 的情况，系统会显示 TN 来计算它们的差额。

4. 当天完成日终后，T0 便会消失。当天交易引致的待交收金额便会变成 T2。

<img src="/assets/X2JzbfNgioWE4Hxp97Ocp8fnnCe.png" src-width="2852" src-height="1374" align="center"/>

## 19B 问：结单「资金余额」与后台资产总览的「可提现金」及「手工换汇余额」为什么不一样？

答：「可提现金」和「手工换汇余额」取的数值都是一样，而「可提现金」和「资金余额」差别在于后者包括已结算资金。

举例来说，23/4 的已结算现金是 $10,000，但「可提现金」要扣除 22/4 的未结算的买货金额，如：$2,000，「可提现金」和「手工换汇余额」便会是 $8,000。

> 日终清算计费的时候，会解冻手续费、扣减实际手续费，有机会清算计费后的可提现金有所变更。

<img src="/assets/SHksbApFdos7P5xfYEIc3sFnn1b.png" src-width="1840" src-height="918" align="center"/>

<img src="/assets/T5HdbB7HHoaR9MxOK5jcOFlonsb.png" src-width="2872" src-height="1226" align="center"/>

<img src="/assets/FX1lb84IwoaE8qxD9yZcIYRInCg.png" src-width="2574" src-height="1220" align="center"/>

