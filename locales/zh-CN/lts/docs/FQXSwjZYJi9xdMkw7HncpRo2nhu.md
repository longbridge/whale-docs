---
title: 常见问题
slug: FQXSwjZYJi9xdMkw7HncpRo2nhu
sidebar_position: 3
---


# 常见问题

## 渠道管理问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：为什么要分不同渠道？</p>
</div>

答：分不同渠道更容易进行 IPO 认购订单的融资管理及统计，例如，分别设置如下渠道：

1. 自有资金渠道
2. A 上手融资渠道
3. B 上手融资渠道

在订单的汇总中，通过不同渠道汇总认购金额，融资使用情况，更便于系统自动化统计不同渠道的订单、融资情况，如下图：

<img src="/assets/R6jIbK3Peo8AQLx8WyOcBMl2nve.png" src-width="3612" src-height="592" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：渠道配置有什么建议？</p>
</div>

建议不同的资金来源、不同的认购方式，设置为不同的渠道进行配置。

## 费率配置问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：如何给不同股票配置不同费率？</p>
</div>

答：在 IPO 开启认购时，可灵活选择不同的费率套餐，在费率配置时，多配置几个不同费率，在 IPO 认购方式配置时，制定不同的费率即可。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：是否支持阶梯收费？</p>
</div>

答：目前系统暂不支持按照不同的认购股数进行阶梯收费，如有需求，可咨询对应 PM 或 CS 提出需求。

## 融资池配置问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：限制客户融资认购数量范围，如何操作？</p>
</div>

答：在设置融资池时，点击『更多配置』，调整<b>上下限股数</b>即可。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：限制融资池的可用时间范围，如何操作？</p>
</div>

答：在设置融资池时，设置好融资池<b>的开始时间、结束时间</b>即可。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：0 本金认购只想开放给部分客户，如何操作？</p>
</div>

答：首先需要券商有运营系统，同时在运营系统内设定好用户分群，在设置融资池时候，点击『更多配置』，可见用户群体选择<b>部分客户</b>即可，同时选择对应用户分群。

## 扣款问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：什么时候操作扣款</p>
</div>

答：扣款操作一般发生在 IPO 认购截止后的时间，扣款后，相当于订单已确认，订单不可以撤销

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：是否可以分批扣款</p>
</div>

答：可以。

例如融资认购先截止，那么可以截止后，只选择融资认购的订单进行扣款。待现金认购截止后，再选择现金认购的订单进行扣款即可。

## 中签问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：不通过港交所做的 IPO 如何公布中签</p>
</div>

答：待上手把中签结果返回后，需要先把中签结果，转化为 Whale 系统自定义中签的格式，导入系统操作即可，详情请参考：[公布中签操作](https://longbridge.feishu.cn/wiki/CfQ1wR31ViDOdJkaiB0cs1ipnJf)

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：对接了 FINI 平台的 API，如何操作中签</p>
</div>

答：若券商对接了 FINI - API 做自动化 IPO，那么直接在中签时，选择：<b>自动获取 FINI 中签结果</b>

再点击下一步则可以预览中签结果，无需上传文件

