---
title: 常见问题
slug: WaeswM6K4ihk4mklL6tcGcPXnxq
sidebar_position: 3
---


# 常见问题

## 授信额度问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：可否根据客户额度设置不同审批流程</p>
</div>

答：可以在审批流“BSS-风控管理 - 授信额度 - 额度审核 - 提交审核”设置审批条件，根据条件设置不同的额度区间走不同的审批流程。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：可否关闭自动授信</p>
</div>

答：可以。如需关闭所有客户的自动授信，可在「业务参数设置」-「风控」-「授信客户参数」的全局参数设置自动授信为关闭；如需针对具体客户限制自动授信，可以将客户添加授信黑名单，名单中的客户不会自动授信且在 APP 调额会进入人工额度审批。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：为什么客户 APP 上没有调额入口</p>
</div>

答：如遇以下场景不可调额

1. 有审核中的申请不可调额
2. 24 小时内只能申请两次调额（常见场景）
3. 已用额度&gt;App 可调上限额度不可调额
4. 现金账户不可调额
5. 小于 1000 不可调额

## 借币提醒使用问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：为什么客户 APP 上看不到「自动还款」功能</p>
</div>

答：需要在后台「借币提醒」开启换汇规则。规则开启后，客户 APP 上可以看到自动还款功能，若客户开启该功能，则在客户满足规则的时候系统会进行自动换汇。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：客户有欠款且其他币种有结余时，系统是否就会进行自动换汇</p>
</div>

答：不一定，需要满足以下条件：1）客户欠款和其他币种结余满足当前设置的换汇规则；2）客户 APP 已开启自动还款功能

## Margin Call 问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：是否可以设置某些场景客户不被 margin call</p>
</div>

答：可以通过在「业务参数设置」-「风控」-「风控参数」设置 Margin Call 豁免规则，命中规则的场景则不会 margin call。支持全局及单客户豁免规则。

<img src="/assets/SI78bT8smor9fnx46phc8kginVd.png" src-width="3250" src-height="672" align="center"/>

## 交易限额问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：是否可以对交易的客户或证券做特殊限制？</p>
</div>

答：可以通过交易限额配置规则实现。系统提供了完整维度来管理交易限额，含公司、客户、证券、交易员层面的交易限额控制。

当前支持的全部限额代码可在全局限额查看。如需对所有交易做整体限制可在全局限额配置规则，如需限定指定客户或证券等，可在指定限额类型下配置规则。其中多维度限额支持同时对指定客户和指定股票做限额。

<img src="/assets/UUYsbZeBcom6rrxO8F0clss2nah.png" src-width="3292" src-height="846" align="center"/>

