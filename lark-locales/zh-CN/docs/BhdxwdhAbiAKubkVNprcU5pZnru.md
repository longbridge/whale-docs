---
title: 快速上手
slug: BhdxwdhAbiAKubkVNprcU5pZnru
sidebar_position: 1
---


# 快速上手

# 概述

Whale 的账户管理模块提供了对客户账户的综合管理和操作功能，帮助管理人员进行账户相关的管理工作。

# 前置条件

您需要获取以下授权后方可正常使用系统功能

# 账户列表

## 查询账户信息

可以查询所有已开户的客户帐户状态资料

<img src="/assets/PH36bE67Jo1qezxdAg6jeS1YpKe.png" src-width="3234" src-height="1606" align="center"/>

也可在右侧记录操作区：点选【详情】， 查看客户细部基本资料，同时也提供资产交易/操作记录/登录设备/代理人/关系人 这些特定事项的 Tab 页签资料

<img src="/assets/Dn4xbYzzEowwwhxpm7mjNjJPpLf.png" src-width="3246" src-height="1228" align="center"/>

资产记录的入金记录

<img src="/assets/InhNbSJIwokmNyx71jmjdbHHppd.png" src-width="2384" src-height="1248" align="center"/>

一些历史登录设备记录

<img src="/assets/UZNKbT71Gorpy7xSbAmjpsFwphf.png" src-width="2420" src-height="744" align="center"/>

本作业也可以对客户帐户作交易权益的变更，在记录右侧操作区点选【交易权限】

<img src="/assets/LuKHbOPT8oDIW5xaAFij5vXxprh.png" src-width="1802" src-height="1364" align="center"/>

本作业也可以对客户作帐户安全事项管理，在记录右侧操作区点选【...】，选择对应安全事项管理（冻结/解锁/注销等....)

<img src="/assets/LnbUbxEraoVc8FxuOPljqkYFpKh.png" src-width="3428" src-height="1504" align="center"/>

在帐户列表作业中，增加帐户标识筛选 查询条件，方便定位查询数据

<img src="/assets/LJ36bzyPDohmjyxbs6zjsMMqpwP.png" src-width="3248" src-height="808" align="center"/>

# BCAN码

## HKIDR报送

本作业可以处理 HKIDR 机制的 BCAN-CID 档案上传（分成 SFTP 自动上传与手动上传 两种模式）

- 注： 有关中华通的 BCAN 说明 将在系统开放支持时说明

<img src="/assets/LSFtbF6UMoKwDXxHvcnjJ2UPpPg.png" src-width="1280" src-height="586" align="center"/>

其中申报逻辑：上报的数据是 已开通帐户、有 BCAN 码且同意授权协议的全量客户，申报给港交易所后，获取交易所返回的档内容，将 BCAN 生效的状态同步更新；

1. <b>若是劵商是 EP 租户</b>： 本作业是支持自动申报上传（透过 SFTP 的 SDNet/2 线路）
    SFTP 申报方式说明如下：
    - 交易日 08:00 am- 03:00 pm 时间段内，自动生成 BCAN-CID 档
    - 产生档案后自动通过 SFTP 的方式提交给交易所
    - 交易所返回的应答档展示在后台，支持下载
    - 返回的全景档自动解析，将客户的 BCAN 状态自动更新

<img src="/assets/S1tobBzKso858uxufdzjZ1Qrp6d.png" src-width="3250" src-height="1542" align="center"/>

1. <b>若是劵商是 OB 租户</b>： 是要手动产生 BCAN-CID 档后，再人工透过 SFC Web ECP 网站上传资料
    SFC Wings 申报方式说明如下：
    <img src="/assets/VBDvb22Kvo3t9Gxig8WjqWbCpee.png" src-width="3222" src-height="1618" align="center"/>
    - 通过本作业先行下载申报文件

- 去 ECP 2.0 SFC 入口官网上传申报文件，将交易所返回的全景文件导入后台

<img src="/assets/OwflbXL3boW0fqxl2W7jSqYjp2f.png" src-width="1280" src-height="904" align="center"/>

- 将交易所返回的全景文件，在本作业导入后台

<img src="/assets/WVzibpxYXoTL6mxsIfmjltqBpTd.png" src-width="3246" src-height="1624" align="center"/>

同时客户的 BCAN 生效状态结果将同步更新

<img src="/assets/KBx9byjL7ozdyuxr68NjoG6Mp5f.png" src-width="3218" src-height="1228" align="center"/>

## BCAN 区间

本作业可以维护参与者的角色（CCEP）所自行维护本身 BCAN 码区间段或（TTEP）被上手劵商分配的 BCAN 码区间段

当 BCAN 区间分配后，系统就会对新开户的客户自动分配一个 BCAN 码

至于存量现有客户，长桥科技将会协助在实名制实施前，批量完成现有客户分配 BCAN 码

<img src="/assets/Rv0gbdLJRoPeAfxdyLGjtjZYpDf.png" src-width="3242" src-height="810" align="center"/>

点选右方上侧【新建区间】， 新建一笔新的 BCAN 区间

<img src="/assets/V29abzfbkoypfLxwDvDjt633phe.png" src-width="3248" src-height="1624" align="center"/>

其中栏位说明如下：

# 参与者管理

本作业可以配置管理 实名制中有关劵商参与者的公司资料以及参与者的角色安排（CCEP/TTEP）

<img src="/assets/TsoZbn2lvo9YMJxaolZj1sAFpig.png" src-width="3132" src-height="1046" align="center"/>

点选右方上侧【新建参与者】， 建一笔新的参与者信息

<img src="/assets/VaLab9T3lo8xFYxuIeQjEH12pde.png" src-width="3248" src-height="1630" align="center"/>

其中栏位说明如下：

# 工单中心

## 冻结客户

支持在后台操作客户的账号冻结，冻结后，当前账号将无法登录 App、桌面端等。

<b>单个账号冻结</b>

点击「新建工单」，选择「冻结客户」

<img src="/assets/FrKubYQV1oQlpYxwEP6jWAlCpNd.png" src-width="1998" src-height="824" align="center"/>

在「新建冻结客户」弹窗内，选择需要冻结的客户编号，填写备注说明及附件后，提交工单申请

<img src="/assets/PAJObM5qRo1ON8xE18PjRsMIpnr.png" src-width="1952" src-height="1006" align="center"/>

点击「详情」，或批量勾选数据后，可单次/批量审核工单，审核通过后，客户的状态将发生变更

<img src="/assets/ZUdBbcZLWoRydPxcELsjGbdQpTe.png" src-width="1948" src-height="988" align="center"/>

<b>批量客户冻结</b>

在冻结客户的列表页，点击「批量导入」按钮

<img src="/assets/L6N0bZpcGob7mOxh2nljtz4Dp8e.png" src-width="1960" src-height="854" align="center"/>

下载批量导入的文件模板，按要求填入待处理的数据，再在后台点击上传文件

<img src="/assets/XEPWbNcwKoUuIUx5E1tjJcwJpwg.png" src-width="1976" src-height="1000" align="center"/>

提交后，再在冻结客户的列表页，单次/批量审核数据。审核完成后，客户的状态发生变更

<img src="/assets/BcRqbDOOMoTki0xFuK5jnlAdpyf.png" src-width="1948" src-height="988" align="center"/>

其他客户/账户操作的流程，与冻结客户类似

