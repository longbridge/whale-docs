---
title: 快速上手
slug: BEYJw66Pei30p3kNwOQcQXtNnCe
sidebar_position: 1
---


# 快速上手

# 概述

Whale 风控系统全面支持券商处理风控业务相关流程，包括额度管理、Margin Call、保证金、交易限额、压力测试等。

# 快速上手

## 前置条件

您需要获取以下授权后方可正常使用系统功能

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>权限名称</p></th><th><p>权限说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>管理授信额度、保证金、交易限额、风控报表、压力测试、指数管理的权限<br/>RiskCreditFull</p></td><td><p>管理授信额度、保证金、交易限额、风控报表、压力测试、指数管理的权限</p></td></tr>
<tr><td><p>管理 Margin call 业务的权限<br/>MarginCallFull</p></td><td><p>管理 Margin call 的权限</p></td></tr>
<tr><td><p>管理期权、HairCut 的权限<br/>RiskOptionHaircutFull</p></td><td><p>管理期权、HairCut 的权限</p></td></tr>
<tr><td><p>管理风控、融券配置的权限<br/>RiskSettingFull</p></td><td><p>风控业务参数配置权限</p></td></tr>
</tbody>
</table>

## 融资授信

客户若开通 margin 账户，后面客户有资产入账，则系统自动会给客户授信一定的额度，客户可以进行保证金交易。同时，客户也可自行在 APP 上申请调整融资额度。此外，系统也可支持由风控人员调整客户额度。

### 授信参数配置

需要先在「业务参数设置」-「授信客户参数」核验授信全局配置。​
（首次使用授信系统会有初始化配置，券商可以根据实际业务需求进行调整）

<img src="/assets/L5m1bb3piop3thxbL97c6AjdnNb.png" src-width="3726" src-height="1568" align="center"/>

### 客户额度查询

所有已授信客户可在「客户额度」页面进行查看其授予额度及额度使用情况

<img src="/assets/LzzObsHuKoKuTzxb13EclU2TnHc.png" src-width="3696" src-height="1412" align="center"/>

### 额度调整及审批

券商后台人工调整额度或客户 APP 申请命中人工审核额度均需要审批才可生效额度。

1. 「客户额度」页面操作【调整】

<img src="/assets/MnkZbssplolsngxBmukcPDbsnYf.png" src-width="3694" src-height="1434" align="center"/>

<img src="/assets/RyPYbfjx3oYabExXpX4cGPwQn8d.png" src-width="2050" src-height="1214" align="center"/>

1. 「额度审批」页面核验调整额度及审批，工单审批通过后即可调整额度

<img src="/assets/JFWybefydoScCwxPhCqc6wgRnDg.png" src-width="3736" src-height="848" align="center"/>

<img src="/assets/CmHebshV2oBzVKxUg9ncJJejnbh.png" src-width="3724" src-height="1636" align="center"/>

## Margin Call

### 追保金额配置

追保金额会有初始化配置，券商如需调整可联系技术或商务对接人进行改动。

<img src="/assets/PD9wbjwSUo7dUOxxfsVc2qyWnAj.png" src-width="3826" src-height="1724" align="center"/>

### 平仓处理

1. Margin Call 列表页会展示触发 margin call 客户纪录，点击【详情】可以查看具体资产数据信息

<img src="/assets/MkmRbNWhzo5tnbxVbDrculdDnrc.png" src-width="3710" src-height="1366" align="center"/>

1. 详情页面会有客户现金和持仓明细，可以自主选择对应的持仓操作【平仓】或者操作下方的批量【平仓】

<img src="/assets/KSe2bFH9zoWXa4xOr1bc8RQgnde.png" src-width="3740" src-height="1642" align="center"/>

## 保证金设置

支持设置股票或客户级别保证金，保证金计算会按“客户保证金&gt;股票保证金”的优先级逻辑处理。

<img src="/assets/KiZzbuMbbobwDixGIMVceRVxnab.png" src-width="3688" src-height="1558" align="center"/>

