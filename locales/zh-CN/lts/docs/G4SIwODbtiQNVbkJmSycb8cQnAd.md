---
title: 功能介绍
slug: G4SIwODbtiQNVbkJmSycb8cQnAd
sidebar_position: 2
---


# 功能介绍

## 概述

临时调账主要支持功能包含 创建调账 和 失效调账，满足盘中临时对客户资产（现金/股票/期权）进行调增或调减操作，让客户先完成下单，并支持事后将钱/券失效掉。

注：临时调账的资产在客户的业务账户，对客户来说该部分资产可用不可提。且临时调账流水不会在客户端及结单展示。

## 操作说明

### 1.调账查询

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>临时调账  &gt; 调账查询</p>
</div>

<b>菜单功能介绍</b>：该菜单支持查询所有的临时调账记录及创建临时调账。

1. 列表页展示所有类型的临时调账，可以通过筛选“调账类型”查看不同类型的调账记录；在调账查询主页面点击【临时调账】，即可打开新增临时调账弹窗页面

<img src="/assets/DRd3bq6oOoK9X6xSCfIcn0xPn5g.png" src-width="1280" src-height="640" align="center"/>

1. 填写调账信息页面（以新增现金临时调账为例，如下图）
    1. 业务类型和调账类型绑定，只需选择业务类型即可。现金临时调账默认对应入账，现金临时调减默认对应出账
    2. 临时调账需要设定有效期，在到期后临时调账会自动失效

<img src="/assets/DUgCb15CjoSNRfxEsT0c3pZWnnb.png" src-width="1280" src-height="744" align="center"/>

1. 填写完调账信息后点击【确定】即可完成，并可以在列表页面查看到已创建的记录；同时在「调账清算」页面也会创建一条状态为“已调账”的记录

<img src="/assets/FDzEbMG1Hoh10LxjSRfcNEFQnMd.png" src-width="3324" src-height="1920" align="center"/>

### 2.调账清算

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>临时调账  &gt; 调账清算</p>
</div>

<b>菜单功能介绍</b>：该菜单支持失效临时调账。

1. 在调账清算主页面可以查看所有已失效和待失效的临时调账记录，可以筛选“状态”查看不不同状态的记录；点击【失效】并进行二次确认后即可对当笔调账完成失效

<img src="/assets/R0p2bqDE2oVWJLxmOBMcSzkFnEf.png" src-width="1280" src-height="657" align="center"/>

