---
title: 系统介绍
slug: MeYrwzKFqih60bkyWEzcbiIHnLg
sidebar_position: 2
---


# 系统介绍

# 一、系统介绍

换汇是指投资者将某一币种兑换成另一币种的行为。

Whale 系统提供了换汇的基础参数设定与业务主流程操作功能。其中：参数设定包含了币种对、换汇策略、汇兑池额度设定等功能。操作功能提供了手动换汇、参考汇率加点、异常换汇记录处理等高频使用功能。

整体业务流程如下：

<img src="/assets/NQiowfLl1hFtrlbtRbjcXD2GnQg-board.png"/>

系统功能架构

<img src="/assets/BmIKwr6ZnhNEy5bASdJcLgTYnAh-board.png"/>

## 前置条件

1. 首先打开币种的换汇开关

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：业务参数设定&gt;资金参数&gt;币种</p>
</div>

<img src="/assets/OZUQbEJS9oWUv5x66NPcTyYZnQK.png" src-width="3822" src-height="1850" align="center"/>

<img src="/assets/NLBabyI57oXTZ6xfpErcN8fPn4e.png" src-width="3820" src-height="1864" align="center"/>

1. 设定相应币种的汇率精度、金额精度以及金额取数逻辑

<img src="/assets/G9PkbioGAoPiG2xy2Mwcw8DinEf.png" src-width="3266" src-height="604" align="center"/>

1. 然后先设定支援的币种对并制定相应的换汇策略。如果使用汇兑池换汇策略，还需要设定汇兑池的换汇额度。详见第二节操作说明。

# 二、操作说明

## 业务参数设置

业务参数设置选单为换汇功能的初始化设置，需要使用者根据换汇业务的实际情况进行一次或多次设定，以保障换汇的准确性与效率。

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：业务参数设置 - 汇兑</p>
</div>

### 币种对

根据换汇业务涉及到的币种范围，设定对应的兑出币种与兑入币种。

- 新建（币种对）

点选【新建】，选择兑入币种与兑出币种。其中：兑出币种为单选，兑入币种为多选

<img src="/assets/FJxwbNeMSowFbYx8Xfkc3w5HnYb.png" src-width="3306" src-height="1242" align="center"/>

币种设定完成后，系统将以卡片的形式展示，针对已设定完成的币种，用户可依实际情况进行【设置默认币种对】、【编辑】、【删除】对应的币种。

### 换汇策略

指规范客户汇兑提交到成交整体流程的策略，目前包括两种策略：「汇兑池换汇」和「渠道换汇」。其中：

<table>
<colgroup>
<col width="155"/>
<col width="598"/>
</colgroup>
<tbody>
<tr><td><p>服务策略</p></td><td><p>简述</p></td></tr>
<tr><td><p>汇兑池换汇</p></td><td><p>即时成交，可能产生汇兑损益</p></td></tr>
<tr><td><p>银行换汇</p></td><td><p>时间上较长，但不产生汇兑损益</p></td></tr>
</tbody>
</table>

- 新建（换汇策略）

点选【新建】，在唤出的弹跳窗中，依照「服务策略设定→汇兑类型设定→适用时段设定→渠道设定→覆盖的币种对设定」顺序依序填写。

<img src="/assets/AXiRbNErrogJR5xF34Mcypcmn7f.png" src-width="3272" src-height="1506" align="center"/>

- 注意事项：
    - 服务时段可以进行多选，互相不可有交集，系统会根据使用者选择的时段生效服务策略。
    - 只有选择“银行换汇”服务策略时，才需要选择“汇兑渠道”

换汇策略设定完成后，使用者可依实际业务需求进行【编辑】与【启用/停用】

<img src="/assets/AWFRbo7eqoxyuaxx5qlcwOjlnie.png" src-width="3280" src-height="1532" align="center"/>

### 换汇池额度配置

为了实现「汇兑池换汇」策略，用户需要建立汇兑池逻辑。此功能允许配置汇兑额度的增加、删除和修改，并根据用户的汇兑成交记录持续计算汇兑池余额。

<img src="/assets/IyaHb1dgFo9kKox3M3eciAalnsh.png" src-width="3306" src-height="1382" align="center"/>

- 新建（换汇池额度）：根据币种设定汇兑池的额度，其中：
    - 警戒线金额：某一币种在换汇额度使用完毕后，该币种的帐户余额不得低于的金额
    - 剩余额度调整：由于换汇业务不断进行，用户可以根据实际业务需求调增或调减相应的额度

<img src="/assets/J8Q1b8TF2oaSm9xiYlhcX8lRnah.png" src-width="3330" src-height="1760" align="center"/>

### 加点设定

券商作为换汇的中介平台，在换汇业务中可能会在换汇申请中收取一定的费用，加点设定则作为一种配置类功能，针对客户提交的换汇申请，透过在「参考汇率」或「成交汇率」上设定加点数值，收取一定的服务费用。

- 新建（汇率加点）：点选【新建】，在呼唤的弹跳窗中依照「参考汇率来源管道」以「币种对」设定对应的加点
    - 币种对选择完毕后，系统将自动带出对应的汇率参考
    - 加点的方式有「值」与「比值」2 种方式
    - 「参考汇率」上设定加点数值：
    <img src="/assets/S454bEII8omUagx8cNKcwQfRnZb.png" src-width="3320" src-height="1760" align="center"/>
    - 参考汇率加点是指在提交换汇时，根据汇兑的汇率基础上进行加点，计算举例如下：
        1. 根据用户选择的币种兑，比如 USD 兑换 CNH，计算出未加点的汇率=7.8147➗1.095=7.1367（汇率小数点截取 4 位，汇率精度取自币种配置）
            参考汇率公式=兑出币种的买入价➗兑入币种的卖出价
        |   |   |   |   |
|---|---|---|---|
|基准货币 | 折算币种 | 买入价 | 卖出价|
|HKD|CNH|1.0962|1.095|
|HKD|USD|7.8147|7.8132|
        1. 根据 i 中的兑出币种选择参考加点，比如 USD 兑换 CNH，计算结果如下：
        <table>
        <colgroup>
        <col width="137"/>
        <col width="423"/>
        </colgroup>
        <tbody>
        <tr><td><p><b>加点方式</b></p></td><td><p><b>USD 兑换 CNH 加点值</b></p></td></tr>
        <tr><td><p>比值 0.001</p></td><td><p>=USD 兑换 CNH 未加点的参考汇率 - 比值=7.1367-0.001=7.1366</p></td></tr>
        <tr><td><p>比率 0.1%</p></td><td><p>=USD 兑换 CNH 未加点的参考汇率（1-比率）=7.1367（1-0.1%）=7.1295</p></td></tr>
        </tbody>
        </table>
    - 「成交汇率」上设定加点数值：
    <img src="/assets/BNrZbW1ZPoQI6CxAPMmc8HI6nYc.png" src-width="2360" src-height="1642" align="center"/>
    - 成交汇率加点是指在客户汇兑成交时，根据汇兑的汇率基础上进行成交加点，举例参考参考汇率加点

### 大额设置

若使用者选择了「大额换汇」汇兑类型，则需要在该页面设定「大额」的标准。即：金额超过多少才需要走到「大额换汇」

- 新建（大额标准）：点选【新建】，依照币种设定起始点

<img src="/assets/WMenbsqkooL47qxV6DUcfxFRnef.png" src-width="3314" src-height="1758" align="center"/>

## 换汇

业务参数设置完成后，使用者可以正式进入换汇的业务功能中进行操作。业务功能包括了客户汇兑、参考汇率导入、异常换汇记录处理。汇兑池额度查看、汇兑损益查看等功能。

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：款项管理 - 换汇</p>
</div>

### 客户汇兑

换汇流程图

<img src="/assets/Xel4wsCbCh8XyAbTS93cM870nyg-board.png"/>

详细操作顺序，可参考[快速上手](./Oq3wwTJvJiqpB6kWoz2cy5jFnFd)描述

### 参考汇率

对于用户换汇，后台可以支持汇率进行查看、导入、编辑、加点设定等功能。

- 其中：
    - 汇率渠道有：香港交易所、IB、恒生、工银
    - 汇率类型有：帐面汇率、即期汇率、港交所汇率

- 批量导入：点选【批次汇入】，下载模板，填入内容后进行上传

<img src="/assets/UX0LbWCxyoP7lnxhX4lcyCVon5f.png" src-width="3328" src-height="1554" align="center"/>

模板内容如下（所有栏位均为必填）：

<img src="/assets/FiDLbCO8ioDHlaxviw7cNJOYneh.png" src-width="1904" src-height="214" align="center"/>

### 异常换汇记录

详细操作顺序，可参考[快速上手](./Oq3wwTJvJiqpB6kWoz2cy5jFnFd)描述

### 汇兑池额度

根据客户实际换汇成交的记录，汇兑池的额度会进行即时的变动展示，如果用户在业务参数设定 - 汇兑下的额度设定编辑了最新的额度后，页面的记录也会自动进行更新。

- 额度设置：可快速开启业务参数设置 - 汇兑 - 换汇池额度配置

<img src="/assets/ISdGb0NbkoVGpFxTSQkcXhavnpd.png" src-width="3302" src-height="1572" align="center"/>

### 汇兑损益

由于时间差，换汇申请在提交至换汇完成时会存在汇率的波动进而影响到兑换的金额。此页面用于查看每笔换汇申请所产生的汇兑损益，支援汇出至本地。

<img src="/assets/Xhmybgq8Qof7Ozxtxizc3WBcnFf.png" src-width="2344" src-height="1210" align="center"/>

