---
title: 分成管理
slug: C7wvwc1tBiN0PdkTCYScD7mEnue
sidebar_position: 2
---


# 分成管理

# 适用场景

分成套餐设置

客户级别的经纪人分成套餐查询和修改

分佣明细查询

# 前置条件

完成经纪人相关设置

# 分成套餐设置操作说明

菜单：经纪人管理&gt; 经纪人分成管理

菜单：经纪人管理&gt; 团队与经纪人&gt;经纪人管理

此功能是设置/修改经纪人的分成佣金套餐，提供佣金计算后查询/分成管理/佣金套餐配置

<img src="/assets/Qt54bxKDIoYQmfxEjFUjm8O9pwe.png" src-width="3584" src-height="1738" align="center"/>

## <b>新增分成套餐</b>

可以在右上角， 点击【新增】，新增一笔分成佣金套餐

<img src="/assets/FobpbsdnConGYBxCFoqjYpnSpsc.png" src-width="3584" src-height="1738" align="center"/>

先填写套餐主体信息

特殊字段说明：

```text
- 分佣对象设置（ 劵商或经纪人）：决定配置的算法对哪个对象生效（先算哪一个）
- 允许亏损字段（：决定在分佣金额>佣金时的处理方案，允许亏损的，计算金额可大于佣金）
```

<img src="/assets/Q9vUba39YodW2BxblDCjhcsQpRf.png" src-width="3584" src-height="1738" align="center"/>

点击添加规则后，可分别针对股票、期权等单独设置套餐规则

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

<img src="/assets/JtiJbCGftowrWQxkHHXj8dsvpQg.png" src-width="3584" src-height="1738" align="center"/>

案例1：按佣金总额的1%设置分成套餐，最低收费2HKD，最高收费50HKD

<img src="/assets/O6hTbsEiQoOY8nx6rwhjiwiapvf.png" src-width="3584" src-height="1738" align="center"/>

案例2：按照单笔合约的交易金额进行阶梯分佣，将交易金额拆分到每个阶梯分别算

```text
交易金额为5000的，1000按第一个阶梯计费，4000（5000-1000）按第二个阶梯计费
```

<img src="/assets/Kf0nbRQL6oMFaLxwSjHj3nMrp0b.png" src-width="3584" src-height="1738" align="center"/>

案例3：按照单笔合约的交易金额进行阶梯分佣，交易金额在哪一个阶梯，统一用哪个阶梯计费

```text
交易金额为5000的，统一按第二个阶梯计费
```

<img src="/assets/EP7fbUCExoL7TUxtugIjJriopEu.png" src-width="3584" src-height="1738" align="center"/>

## 开户时自动分配经纪人套餐

设置完分成套餐后，在经纪人管理页面可以设置默认的分成套餐

开户时，如果用户分配给该经纪人，则该用户的默认分成套餐将为该客户

<img src="/assets/V4yKbiKZEolHnTxmPy2ju6Qlp2e.png" src-width="3584" src-height="1738" align="center"/>

## 设置客户级别分成套餐

在计费和分成管理可以通过批量、单笔的方式，修改客户的分成套餐

<img src="/assets/NSfTbRidNoIIYmxn4inj3W3ipve.png" src-width="3584" src-height="1738" align="center"/>

# 分佣明细查询操作说明

## 分佣明细查询

菜单：经纪人管理&gt; 经纪人分成管理 &gt;佣金分成明细查询

日切成功后，系统会触发分佣计算任务（异步任务）

<img src="/assets/RMeTbwMd7oeNKxxvMrljLwueppe.png" src-width="3584" src-height="1738" align="center"/>

查询经纪人名下客户的分佣套餐佣金，是以帐务日期与交易币种作查询条件， 支持日/月/年的周期报表查询（报表管理-佣金报表），点击【导出】可将查询的资料导出

<img src="/assets/TuBYbFzjPo4ZMGxhzC6jZM4ppNb.png" src-width="3584" src-height="1738" align="center"/>

