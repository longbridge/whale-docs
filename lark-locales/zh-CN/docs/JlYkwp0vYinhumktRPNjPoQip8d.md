---
title: 快速上手
slug: Oq3wwTJvJiqpB6kWoz2cy5jFnFd
sidebar_position: 1
---


# 快速上手

# 概述

WHALE的款项管理系统提供了多币种、多渠道、多策略的汇兑功能，使用者可以在系统中根据换汇的实际要求设定币种对、输入金额并完成汇兑。

# 快速上手

## 客户汇兑

根据客户提出的换汇要求，可在页面手动新增手工换汇申请，若用户在APP已经提交了申请，记录会自动展示在该页面。

### 手工换汇

<b>步骤一：选择客户，确认兑出币种与兑入币种</b>

点选【手工换汇】，在出现的弹出内选择客户&gt;输入币种对（系统将根据已选择的客户，自动展示每个币种可提现的余额）

<img src="ZUpgbmXEQoBC06x6uqRjYSuHpYb" src-width="3830" src-height="1854" align="center"/>

<b>步骤二：确认参考汇率</b>

选择了客户与币种对之后，系统自动提供参考汇率，用户也可以切换成【自定义汇率】进行手动输入

<img src="RVQkbjq1QooJBTxslZojhSrKppj" src-width="3328" src-height="1772" align="center"/>

<img src="F5Zhb1F0MokzaaxOhICjUe4Fpgd" src-width="3322" src-height="1776" align="center"/>

<b>步骤三：输入金额</b>

确定了客户、币种对、汇率之后，需要输入汇兑的金额，汇兑金额可以有以下两种方式：

- 以兑出币种为基准。例：假设美元兑港币的汇率=1：7.8，确定兑出1000USD，系统将自动计算兑入币种（HKD）=7800
- 以兑入币种为基准。例例：假设美元兑港币的汇率=1：7.8，确定兑入1000USD，系统将自动计算兑出币种（HKD）=7800

资料输入无误后，点选【确定】，页面将产生一笔汇兑纪录。

### 处理申请

申请的记录生成后，后台操作人员需要再次检查资料的准确性，确认无误后点选操作列【复核】，进入弹跳窗进行【通过】/【驳回】操作。

<img src="EamibnRUjoo6ewx4ERejjiLIpag" src-width="3828" src-height="1858" align="center"/>

【通过】后，在「已结束」分类或「全部」分类下，可以查看已完成的汇兑记录

<img src="HTpmbewOBosFscxtdxBj1DmRpwd" src-width="3314" src-height="1052" align="center"/>

## 参考汇率

用户可在参考汇率页面查看所有币种对的汇率，同时支援用户进行手动新增币种对的参考汇率（含大量操作）

<img src="PKpubkxuVoJE1zx2tnXji4MHp6b" src-width="3836" src-height="1860" align="center"/>

### 新建参考汇率

点选【新建】进入弹跳窗，将页面中的必填栏位补齐，即可产生一笔参考汇率记录

<img src="QF3VbicRxoJZj3x5ZBBjDpZIpsf" src-width="3828" src-height="1864" align="center"/>

### 查看汇率更新记录

由于不同的汇率管道的汇率会即时更新，系统透过API对接的方式会自动刷新页面中的汇率，如果需要查看当天的历史汇率，可以在汇兑记录行的操作列点击【历史记录】进行查看。

<img src="KuFsbXj7souy0FxlQdHjFvx0pvd" src-width="3322" src-height="1770" align="center"/>

## 异常换汇记录

若因通道方、银行方、客户方等原因，导致提交的汇兑申请异常中断，可在该页面进行针对处理

### 处理异常记录

<b>步骤一：定位目标记录，在操作列的3种方式中进行选择：</b>

- 转成功：是指相应通路换汇单经过人力确认，银行资金已变动，所以人工将通路汇兑单状态更新为成功
- 再汇兑：根据相应的管道汇兑单确认银行端资金未变动，且不会再次变动，但是人工确认需要给用户再次汇兑，则需要再次提交通路汇兑请求
- 转失败：是指相应通路换汇单经过人工确认，银行资金未变动且后续不会变动，所以人工可以将通路汇兑单状态更新为失败

<img src="WW8BbPyecowwLLxpbpgjILu3pd1" src-width="2366" src-height="1220" align="center"/>

<b>步骤二：根据第一步的处理方式进行复核</b>

<img src="I9oIbe6WkoB45Fxkzwuj1ed3pOg" src-width="2370" src-height="1198" align="center"/>

## 汇兑损益

由于时间差，换汇申请在提交至换汇完成时会存在汇率的波动进而影响到兑换的金额。此页面用于查看每笔换汇申请所产生的汇兑损益，支援汇出至本地。

<img src="IaBIbiuB9ountoxRLQAjJrYspJb" src-width="2344" src-height="1210" align="center"/>

