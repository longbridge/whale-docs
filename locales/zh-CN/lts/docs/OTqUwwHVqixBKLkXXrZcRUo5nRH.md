---
title: 系统介绍
slug: OTqUwwHVqixBKLkXXrZcRUo5nRH
sidebar_position: 5
---


# 系统介绍

# 概述

Whale 经纪人管理模块提供了对经纪人与客户关系的管理，以及经纪人和团队的管理功能。

## 关系管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> 经纪人管理&gt; 关系管理</p>
</div>

支持根据经纪人查询该经纪人名下客户，或者直接查询某个客户；

<img src="/assets/NkKebTkraoSYWTxiubacWtvZn6e.png" src-width="3346" src-height="1104" align="center"/>

查询到客户，即可以进行操作【解除经纪人关系】及【转移至其他经纪人】

在客户变更或分配经纪人操作时，支持邮件推送通知客户（可选项）

<img src="/assets/AxUebWQ4AoKiTOxB6h6cWfvjn0y.png" src-width="3352" src-height="1362" align="center"/>

## 团队与经纪人

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> 经纪人管理&gt; 团队与经纪人&gt;团队管理</p>
</div>

<img src="/assets/OiMKb7EeRoTPRjx6EpkcEfK1nfe.png" src-width="3348" src-height="1584" align="center"/>

首先在团队与经纪人管理中的「团队管理」可以新增经纪团队，目前系统在团队类型上分成：经纪人/营销团队

<img src="/assets/VkSzb2mjDoRirVxOSa7cpsgonff.png" src-width="3370" src-height="1442" align="center"/>

创建成功后，可以在显示记录的右侧操作区进行操作： 「详情」/「编辑」/「冻结」

<img src="/assets/P9GTbyTQ4ocO8MxCzDScxYVen5c.png" src-width="3366" src-height="1532" align="center"/>

## 经纪人管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>经纪人管理&gt; 团队与经纪人&gt;经纪人管理</p>
</div>

点击右上方「新建」可建立经纪人资料，创建经纪人成功后，系统会自动同步创建后台用户帐号（经纪人帐号可以登录 WTT 客户端）

<img src="/assets/AqPbbgThuomRrax71ONcNfPnnWe.png" src-width="3350" src-height="1690" align="center"/>

注意：系统在创建经纪人时，经纪人的券商邮箱号是唯一校验的判断

创建成功后，可以在显示记录的右侧操作区进行操作： 「详情」/「编辑」/「冻结」/「下级管理」

<img src="/assets/YQ4KbFSSkocqX7xlV9hcQIQfnCg.png" src-width="3362" src-height="1562" align="center"/>

「编辑」在修改经纪人分佣套餐时，支持同步修改其下客户的分佣套餐配置（可选项）
<img src="/assets/IWnCbSdmDo6GVoxiXNkcTYxmnWY.png" src-width="936" src-height="1662" align="center"/>
「冻结」，冻结经纪人操作后，该经纪人将无法使用账号登录 WTT；
「下级管理」，该功能已迁移至“身份管理&gt;人员管理”，查到对应的经纪人用户进行“数据权限”的编辑；
<img src="/assets/WnQKb0PseoHfnKxkz3tciefGnxd.png" src-width="3422" src-height="1840" align="center"/>
在经纪人管理上新增经纪人配置：开通帐户时，若未人工分配经纪人，系统预设分配给指定经纪人；
<img src="/assets/Y0Zob1080oc15sxQIv9cvxRznmd.png" src-width="3370" src-height="1226" align="center"/>
在查询组件上：支持按经纪人编号或经纪人名称查询

## 分成套餐设置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>经纪人管理&gt; 分成管理</p>
</div>

此功能是设置/修改经纪人的分成佣金套餐，提供佣金计算后查询/分成管理/佣金套餐配置

<img src="/assets/HEHrb4HsDoUwbAxjTFhc9Th4nab.png" src-width="3584" src-height="1738" align="center"/>

### <b>新增分成套餐</b>

可以在右上角，点击【新增】，新增一笔分成佣金套餐

<img src="/assets/RIbdbl6AlokKmcx8UCJcVwtCnPg.png" src-width="3584" src-height="1738" align="center"/>

先填写套餐主体信息

特殊字段说明：
- 分佣对象设置（劵商或经纪人）：决定配置的算法对哪个对象生效（先算哪一个）
- 允许亏损字段（：决定在分佣金额&gt;佣金时的处理方案，允许亏损的，计算金额可大于佣金）

<img src="/assets/YkLXbqGltoZtUixQAY3cyZYvnCh.png" src-width="3584" src-height="1738" align="center"/>

点解添加规则后，可分别针对股票、期权等单独设置套餐规则

字段说明

计费方式：决定用佣金（OR 交易金额）*费率算分佣金额

阶梯统计基准：决定用佣金（OR 交易金额）进行阶梯的划分

跨阶梯处理方式：决定将统计基准统一用一个费率计算 OR 拆分成多端计算

注意：
- 分佣币种和佣金币种不一致时，分佣的金额会根据汇率转换为分佣币种
- 阶梯的范围为左开（不含）右闭（含）
- 阶梯收费的最低、最高收费和主页面最低最高收费的关系
    - 阶梯收费总体算出一个分佣金额后，再和主页面进行比较

<img src="/assets/NC1KbKN7wompmpx0MJacwpjHnDh.png" src-width="3584" src-height="1738" align="center"/>

案例 1：按佣金总额的 1% 设置分成套餐，最低收费 2HKD，最高收费 50HKD

<img src="/assets/P6iHbN2LuogKrWxZwv1ckuFInsh.png" src-width="3584" src-height="1738" align="center"/>

案例 2：按照单笔合约的交易金额进行阶梯分佣，将交易金额拆分到每个阶梯分别算

交易金额为 5000 的，1000 按第一个阶梯计费，4000（5000-1000）按第二个阶梯计费

<img src="/assets/KTzkbHatQo5XTxxES9hcd75RnCd.png" src-width="3584" src-height="1738" align="center"/>

案例 3：按照单笔合约的交易金额进行阶梯分佣，交易金额在哪一个阶梯，统一用哪个阶梯计费

交易金额为 5000 的，统一按第二个阶梯计费

<img src="/assets/CMjNbtofEomJOmxZJYickdQmnZg.png" src-width="3584" src-height="1738" align="center"/>

### 开户时自动分配经纪人套餐

设置完分成套餐后，在经纪人管理页面可以设置默认的分成套餐

开户时，如果用户分配给该经纪人，则该用户的默认分成套餐将为该客户

<img src="/assets/Lje7bQHVzoJ7JvxlLOOcbcXln0b.png" src-width="3584" src-height="1738" align="center"/>

### 设置客户级别分成套餐

在计费和分成管理可以通过批量、单笔的方式，修改客户的分成套餐

<img src="/assets/XIO1bmTrgo169BxBBhecHDTynjh.png" src-width="3584" src-height="1738" align="center"/>

## 分佣明细查询操作说明

### 分佣明细查询

菜单：经纪人管理&gt; 经纪人分成管理 &gt;佣金分成明细查询

日切成功后，系统会触发分佣计算任务（异步任务）

<img src="/assets/I5lab7D3WoObS0xZWZzcQxTjn5f.png" src-width="3584" src-height="1738" align="center"/>

查询经纪人名下客户的分佣套餐佣金，是以帐务日期与交易币种作查询条件，支持日/月/年的周期报表查询（报表管理-佣金报表），点击【导出】可将查询的资料导出

<img src="/assets/Qa4CbIPBboPV3RxSKDtcbICKnMf.png" src-width="3584" src-height="1738" align="center"/>

