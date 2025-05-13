---
title: 快速上手
slug: BhdxwdhAbiAKubkVNprcU5pZnru
sidebar_position: 1
---


# 快速上手

## 概述

Whale 的账户管理模块提供了对客户账户的综合管理和操作功能，帮助管理人员进行账户相关的管理工作。

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
<tr><td><p>ClientAccountInfoFull</p></td><td><p>管理账户列表、BCAN 码、工单中心的权限</p></td></tr>
</tbody>
</table>

## 账户列表

### 查询账户信息

可以查询所有已开户的客户帐户状态资料

<img src="/assets/NzSsbYQxCoCwlsxx3WfcPmJEnoh.png" src-width="3234" src-height="1606" align="center"/>

也可在右侧记录操作区：点选【详情】，查看客户细部基本资料，同时也提供资产交易/操作记录/登录设备/代理人/关系人 这些特定事项的 Tab 页签资料

<img src="/assets/Dq1pbV8gxoFuklxXPSxc1vz9nLe.png" src-width="3246" src-height="1228" align="center"/>

 资产记录的入金记录

<img src="/assets/TWuUbp1vzoyTNqxvIbmcB3c8nIb.png" src-width="2384" src-height="1248" align="center"/>

一些历史登录设备记录

<img src="/assets/OUPKbTEHZo7jA7xBIabcc841noe.png" src-width="2420" src-height="744" align="center"/>

本作业也可以对客户帐户作交易权益的变更，在记录右侧操作区点选【交易权限】

<img src="/assets/QrA2btYGFoHJabxMgfQcHdiGnWd.png" src-width="1802" src-height="1364" align="center"/>

本作业也可以对客户作帐户安全事项管理，在记录右侧操作区点选【...】，选择对应安全事项管理（冻结/解锁/注销等....)

<img src="/assets/NRkNbyqfBoRb3jxnUMzcPq6jnPf.png" src-width="3428" src-height="1504" align="center"/>

在帐户列表作业中，增加帐户标识筛选 查询条件，方便定位查询数据

<img src="/assets/VaLgbpy7Ro2wXHxY0YHcK6XqnVd.png" src-width="3248" src-height="808" align="center"/>

## BCAN 码

### HKIDR 报送

本作业可以处理 HKIDR 机制的 BCAN-CID 档案上传（分成 SFTP 自动上传与手动上传 两种模式）

- 注：有关中华通的 BCAN 说明 将在系统开放支持时说明

<img src="/assets/U14Rbr97jocfZhxGP7octqOrnsh.png" src-width="1280" src-height="586" align="center"/>

其中申报逻辑：上报的数据是 已开通帐户、有 BCAN 码且同意授权协议的全量客户，申报给港交易所后，获取交易所返回的档内容，将 BCAN 生效的状态同步更新；

1. <b>若是劵商是 EP 租户</b>：本作业是支持自动申报上传（透过 SFTP 的 SDNet/2 线路）

SFTP 申报方式说明如下：
- 交易日 08:00 am- 03:00 pm 时间段内，自动生成 BCAN-CID 档
- 产生档案后自动通过 SFTP 的方式提交给交易所
- 交易所返回的应答档展示在后台，支持下载
- 返回的全景档自动解析，将客户的 BCAN 状态自动更新

<img src="/assets/Waf3bsdXCoAeoLxzAHjctyeKnJS.png" src-width="3250" src-height="1542" align="center"/>

1. <b>若是劵商是 OB 租户</b>：是要手动产生 BCAN-CID 档后，再人工透过 SFC Web ECP 网站上传资料

SFC Wings 申报方式说明如下：
- 通过本作业先行下载申报文件
<img src="/assets/LZCib61FeoV55oxAno4cQAbOncf.png" src-width="3222" src-height="1618" align="center"/>

- 去 ECP 2.0 SFC 入口官网上传申报文件，将交易所返回的全景文件导入后台

<img src="/assets/HBWDbYqRPokkbCxNotfcrRSynqK.png" src-width="1280" src-height="904" align="center"/>

- 将交易所返回的全景文件，在本作业导入后台

<img src="/assets/Y2KPbiqvKovjZAxU7L4cdfgino8.png" src-width="3246" src-height="1624" align="center"/>

同时客户的 BCAN 生效状态结果将同步更新

<img src="/assets/QQZkbPEHOonSQpxsfwWcYieTnUg.png" src-width="3218" src-height="1228" align="center"/>

### BCAN 区间

本作业可以维护参与者的角色（CCEP）所自行维护本身 BCAN 码区间段或（TTEP）被上手劵商分配的 BCAN 码区间段

当 BCAN 区间分配后，系统就会对新开户的客户自动分配一个 BCAN 码

至于存量现有客户，长桥科技将会协助在实名制实施前，批量完成现有客户分配 BCAN 码

<img src="/assets/JdFib9xOMoc53hxBZoGchdC4nvc.png" src-width="3242" src-height="810" align="center"/>

点选右方上侧【新建区间】，新建一笔新的 BCAN 区间

<img src="/assets/KbvsbVzM7oFFprxrGmUc4VKanLf.png" src-width="3248" src-height="1624" align="center"/>

其中栏位说明如下：

<table>
<colgroup>
<col width="368"/>
<col width="503"/>
</colgroup>
<tbody>
<tr><td><p><b>港股 EP 模式</b></p></td><td><p><b>港股 Non-EP 模式</b></p></td></tr>
<tr><td><p>CCEP：选择当前租户选项<br/>使用者：选择当前租户选项<br/>是否上报：选择‘是’<br/>起始编号/结束编号：手动输入配置· </p></td><td><p>CCEP：选择‘lb’选项<br/>使用者：选择当前租户选项<br/> 是否上报：选择‘是’<br/> 起始编号/结束编号：手动输入配置·</p></td></tr>
<tr><td colspan="2"><p>注意：（‘1’ - ‘99’是交易所自测区间，不可使用，不可用‘0’前置占位，建议按 lb 提供的区间配置）</p></td></tr>
</tbody>
</table>

## 参与者管理

本作业可以配置管理 实名制中有关劵商参与者的公司资料以及参与者的角色安排（CCEP/TTEP）

<img src="/assets/PxFub0ff7oCAgYxaXt9c4x9pnfh.png" src-width="3132" src-height="1046" align="center"/>

点选右方上侧【新建参与者】，建一笔新的参与者信息

<img src="/assets/EDkGbD0SJooqh2xAI1JcyqXunYd.png" src-width="3248" src-height="1630" align="center"/>

其中栏位说明如下：

## 工单中心

### 冻结客户

支持在后台操作客户的账号冻结，冻结后，当前账号将无法登录 App、桌面端等。

<b>单个账号冻结</b>

点击「新建工单」，选择「冻结客户」

<img src="/assets/RMPIbbhoMoAt0QxT7ZDcezrunBf.png" src-width="1998" src-height="824" align="center"/>

在「新建冻结客户」弹窗内，选择需要冻结的客户编号，填写备注说明及附件后，提交工单申请

<img src="/assets/SL3ebq2zHoBYhzxYPTncZRpyn0b.png" src-width="1952" src-height="1006" align="center"/>

点击「详情」，或批量勾选数据后，可单次/批量审核工单，审核通过后，客户的状态将发生变更

<img src="/assets/AcNhblfXWogXHMx9yIicPZySnNd.png" src-width="1948" src-height="988" align="center"/>

<b>批量客户冻结</b>

在冻结客户的列表页，点击「批量导入」按钮

<img src="/assets/Y4JJbjr0aok18wxgJFCcag5Unw1.png" src-width="1960" src-height="854" align="center"/>

下载批量导入的文件模板，按要求填入待处理的数据，再在后台点击上传文件

<img src="/assets/W5FUb0Z7XogzfWxQsDdcp4uUn9b.png" src-width="1976" src-height="1000" align="center"/>

提交后，再在冻结客户的列表页，单次/批量审核数据。审核完成后，客户的状态发生变更

<img src="/assets/X8gQbOUwJo7IMHx54o3cpQSQnze.png" src-width="1948" src-height="988" align="center"/>

其他客户/账户操作的流程，与冻结客户类似

