---
title: 系统介绍
slug: OTqUwwHVqixBKLkXXrZcRUo5nRH
sidebar_position: 5
---


# 系统介绍

# 概述

Whale 经纪人管理模块提供了对经纪人与客户关系的管理，以及经纪人和团队的管理功能。

## 关系管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 经纪人管理&gt; 关系管理</p>
</div>

支持根据经纪人查询该经纪人名下客户，或者直接查询某个客户；

<img src="/assets/SGjAbLmMCoTCD2xdYkgj0P0xpWc.png" src-width="3346" src-height="1104" align="center"/>

查询到客户，即可以进行操作【解除经纪人关系】及【转移至其他经纪人】

在客户变更或分配经纪人操作时，支持邮件推送通知客户（可选项）

<img src="/assets/DeydbMTy0oCzqrxjvKLjdWSJpOh.png" src-width="3352" src-height="1362" align="center"/>

## 团队与经纪人

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 经纪人管理&gt; 团队与经纪人&gt;团队管理</p>
</div>

<img src="/assets/Ql2VbmV6ZoZEG8x3JIwj6R5CpOZ.png" src-width="3348" src-height="1584" align="center"/>

首先在团队与经纪人管理中的「团队管理」可以新增经纪团队，目前系统在团队类型上分成：经纪人/营销团队

<img src="/assets/GhGpbcUIXoJnChxyPfcjcw7vpQd.png" src-width="3370" src-height="1442" align="center"/>

创建成功后，可以在显示记录的右侧操作区进行操作： 「详情」/「编辑」/「冻结」

<img src="/assets/Whuyba0d3oNTRYxzo5Aji5jkpPf.png" src-width="3366" src-height="1532" align="center"/>

## 经纪人管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 经纪人管理&gt; 团队与经纪人&gt;经纪人管理</p>
</div>

点击右上方「新建」可建立经纪人资料，创建经纪人成功后，系统会自动同步创建后台用户帐号（经纪人帐号可以登录WTT客户端）

<img src="/assets/Ed2YbirGWoVxEfxlLmFjk4gmp0d.png" src-width="3350" src-height="1690" align="center"/>

注意： 系统在创建经纪人时，经纪人的券商邮箱号是唯一校验的判断

创建成功后，可以在显示记录的右侧操作区进行操作： 「详情」/「编辑」/「冻结」/「下级管理」

<img src="/assets/M0NcbWecQoRyIgxPYvQj941Lpif.png" src-width="3362" src-height="1562" align="center"/>

「编辑」在修改经纪人分佣套餐时，支持同步修改其下客户的分佣套餐配置（可选项）

```text
![image.png](/assets/8955107676a9e210601ac77dc204354f.png)


「冻结」，冻结经纪人操作后，该经纪人将无法使用账号登录WTT；


「下级管理」，该功能已迁移至“身份管理>人员管理”，查到对应的经纪人用户进行“数据权限”的编辑；


![image.png](/assets/1de51686cccc9c730a6f9aa3325343cf.png)


在经纪人管理上新增经纪人配置：开通帐户时，若未人工分配经纪人，系统预设分配给指定经纪人；


![image.png](/assets/8d67fb5aec1bdafd5832f89f153a7993.png)


在查询组件上：支持按经纪人编号或经纪人名称查询
```

## 分成套餐设置

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 经纪人管理&gt; 分成管理</p>
</div>

此功能是设置/修改经纪人的分成佣金套餐，提供佣金计算后查询/分成管理/佣金套餐配置

<img src="/assets/MgCHbfHZkoL1o9xo8vGjFnvVpHe.png" src-width="3584" src-height="1738" align="center"/>

### <b>新增分成套餐</b>

可以在右上角， 点击【新增】，新增一笔分成佣金套餐

<img src="/assets/GeWnbSE0EoCbJaxjhANjTiCLpTe.png" src-width="3584" src-height="1738" align="center"/>

先填写套餐主体信息

特殊字段说明：

```text
- 分佣对象设置（ 劵商或经纪人）：决定配置的算法对哪个对象生效（先算哪一个）
- 允许亏损字段（：决定在分佣金额>佣金时的处理方案，允许亏损的，计算金额可大于佣金）
```

<img src="/assets/CwyWbWbO7oZOP0xm62KjCsWnppc.png" src-width="3584" src-height="1738" align="center"/>

点解添加规则后，可分别针对股票、期权等单独设置套餐规则

字段说明

```text
计费方式：决定用佣金（OR交易金额）*费率算分佣金额


阶梯统计基准：决定用佣金（OR交易金额）进行阶梯的划分


跨阶梯处理方式：决定将统计基准统一用一个费率计算 OR 拆分成多端计算
```

注意：

```text
- 分佣币种和佣金币种不一致时，分佣的金额会根据汇率转换为分佣币种
- 阶梯的范围为左开（不含）右闭（含）
- 阶梯收费的最低、最高收费和主页面最低最高收费的关系
    - 阶梯收费总体算出一个分佣金额后，再和主页面进行比较
```

<img src="/assets/Q7bxboaLPoiOA7xLUT7jUIxipUf.png" src-width="3584" src-height="1738" align="center"/>

案例1：按佣金总额的1%设置分成套餐，最低收费2HKD，最高收费50HKD

<img src="/assets/BGY6bkoS5oxSyBxpuuLjZYumple.png" src-width="3584" src-height="1738" align="center"/>

案例2：按照单笔合约的交易金额进行阶梯分佣，将交易金额拆分到每个阶梯分别算

```text
交易金额为5000的，1000按第一个阶梯计费，4000（5000-1000）按第二个阶梯计费
```

<img src="/assets/VLgdbpOCyoPqlGxigNKjdAC7pZf.png" src-width="3584" src-height="1738" align="center"/>

案例3：按照单笔合约的交易金额进行阶梯分佣，交易金额在哪一个阶梯，统一用哪个阶梯计费

```text
交易金额为5000的，统一按第二个阶梯计费
```

<img src="/assets/EBExbYpktotLOjxy8AsjsjT2pTg.png" src-width="3584" src-height="1738" align="center"/>

### 开户时自动分配经纪人套餐

设置完分成套餐后，在经纪人管理页面可以设置默认的分成套餐

开户时，如果用户分配给该经纪人，则该用户的默认分成套餐将为该客户

<img src="/assets/JBYPb6qNGoRvg8xs5sOj6qU1ptk.png" src-width="3584" src-height="1738" align="center"/>

### 设置客户级别分成套餐

在计费和分成管理可以通过批量、单笔的方式，修改客户的分成套餐

<img src="/assets/MbUlbjv87onP9AxpWKAjtkbuplh.png" src-width="3584" src-height="1738" align="center"/>

## 分佣明细查询操作说明

### 分佣明细查询

菜单：经纪人管理&gt; 经纪人分成管理 &gt;佣金分成明细查询

日切成功后，系统会触发分佣计算任务（异步任务）

<img src="/assets/VABkbYgUWo9O5uxgObKjW6SppUf.png" src-width="3584" src-height="1738" align="center"/>

查询经纪人名下客户的分佣套餐佣金，是以帐务日期与交易币种作查询条件， 支持日/月/年的周期报表查询（报表管理-佣金报表），点击【导出】可将查询的资料导出

<img src="/assets/Ytm5bdC1ro8sCoxaUr1jjDp9pUc.png" src-width="3584" src-height="1738" align="center"/>

