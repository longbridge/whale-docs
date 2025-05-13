---
title: 快速上手
slug: SDVjwkUgoiF4eWkAI3Jcps5Nn5X
sidebar_position: 4
---


# 快速上手

# 概述

Whale 的账户管理模块提供了对客户账户的综合管理和操作功能，帮助管理人员进行账户相关的管理工作。

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
<tr><td><p>BrokerFull</p></td><td><p>管理经纪人关系、团队、分成、基础信息的权限</p></td></tr>
</tbody>
</table>

## 经纪人与客户关系查询/操作

支持根据经纪人查询该经纪人名下客户，或者直接查询某个客户；

<img src="/assets/HztxbGezBoRA4Vxks8BcI68GnAg.png" src-width="3346" src-height="1104" align="center"/>

查询到客户，即可以进行操作【解除经纪人关系】及【转移至其他经纪人】

在客户变更或分配经纪人操作时，支持邮件推送通知客户（可选项）

<img src="/assets/K3RYbbghxoeXD7xW1kRcfkWHnke.png" src-width="3352" src-height="1362" align="center"/>

## 经纪人管理

点击右上方「新建」可建立经纪人资料，创建经纪人成功后，系统会自动同步创建后台用户帐号（经纪人帐号可以登录 WTT 客户端）

<img src="/assets/FARrbI3PWoX46TxiWpzc3tKPnXc.png" src-width="3350" src-height="1690" align="center"/>

注意：系统在创建经纪人时，经纪人的券商邮箱号是唯一校验的判断

创建成功后，可以在显示记录的右侧操作区进行操作： 「详情」/「编辑」/「冻结」/「下级管理」

<img src="/assets/QeXibd182oFjg9xxyU9cHWLCnfb.png" src-width="3362" src-height="1562" align="center"/>

「编辑」在修改经纪人分佣套餐时，支持同步修改其下客户的分佣套餐配置（可选项）
<img src="/assets/BRSebWmDFopMNfxvpCHcsVl2nkc.png" src-width="936" src-height="1662" align="center"/>

「冻结」，冻结经纪人操作后，该经纪人将无法使用账号登录 WTT；

「下级管理」，该功能已迁移至“身份管理&gt;人员管理”，查到对应的经纪人用户进行“数据权限”的编辑；

<img src="/assets/EUJEbsD4kogRZyx8J7OcJ1dXnMd.png" src-width="3422" src-height="1840" align="center"/>

在经纪人管理上新增经纪人配置：开通帐户时，若未人工分配经纪人，系统预设分配给指定经纪人；

<img src="/assets/X1M7b9PCAo3djsx2eaJcgcpHnxe.png" src-width="3370" src-height="1226" align="center"/>

在查询组件上：支持按经纪人编号或经纪人名称查询

### <b>新增分成套餐</b>

可以在右上角，点击【新增】，新增一笔分成佣金套餐

<img src="/assets/Chm0bvy4eoUXBRxulvmcXPcKnIg.png" src-width="3584" src-height="1738" align="center"/>

先填写套餐主体信息

字段说明：
- 分佣对象设置（劵商或经纪人）：决定配置的算法对哪个对象生效（先算哪一个）
- 允许亏损字段（：决定在分佣金额&gt;佣金时的处理方案，允许亏损的，计算金额可大于佣金）

<img src="/assets/Rro5bqoyRoCVtixExeXcu8dVn5b.png" src-width="3584" src-height="1738" align="center"/>

点解添加规则后，可分别针对股票、期权等单独设置套餐规则

字段说明

计费方式：决定用佣金（OR 交易金额）*费率算分佣金额

阶梯统计基准：决定用佣金（OR 交易金额）进行阶梯的划分

跨阶梯处理方式：决定将统计基准统一用一个费率计算 OR 拆分成多端计算

