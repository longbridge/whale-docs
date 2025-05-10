---
title: 常见问题
slug: REBiw833PiFPeKkh5RkcL3slneb
sidebar_position: 3
---


# 常见问题

## 基金展示管理問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：為什麼在 App 展示管理中配置了基金，但是 App 端还是没有展示？展示了为什么无法交易？</p>
</div>

答：App 端展示的前提条件为：基金状态为显示状态；基金支持交易的前提条件为：基金在显示状态 & 基金在上架中状态。

## 基金渠道問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：為什麼每一只基金要配置基金渠道？</p>
</div>

答：基金渠道指定了基金提交的上手，上手对应券商在上手开通的账号，基金申赎订单需要提交到对应的上手。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：为什么一只基金只能配置一个渠道？</p>
</div>

同一只基金的订单只能向一个上手提交，不然一只基金如果向多个上手提交订单，会导致基金订单重复混乱。

## 基金回填問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：为什么支持手动回填？</p>
</div>

答：部分上手支持 API 自动回填，剩下的部分上手只支持基金文件回传，针对基金文件回传类型的上手，需要人工回填基金申购金额、赎回份额等信息。

## 基金清算問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：为什么基金清算的核对确认节点，限制了必须处理完前序交易日的渠道单才能处理后续交易日的渠道单？</p>
</div>

答：因为基金清算的核对确认后，客户资产中基金持仓收益等字段才开始计算，然后后续交易日的持仓收益依赖于前序交易日的持仓收益计算，因此需要优先处理前序交易日的渠道单后才能处理后续交易日的渠道单。

