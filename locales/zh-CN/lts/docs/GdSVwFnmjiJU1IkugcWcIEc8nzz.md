---
title: 快速上手
slug: GdSVwFnmjiJU1IkugcWcIEc8nzz
sidebar_position: 0
---


# 快速上手

## 前置条件

您需要获取以下授权后方可正常使用系统功能

<table header_column="1" header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><b>权限名称</b></p></th><th><p><b>权限说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>使用运营计划、人群画像、触达通道的权限<br/>DeliverySystemReadOnly</p></td><td><ul>
<li>增删改查个人名下运营计划；创建、管理、查看用户分群；</li>
<li>增删改查 Banner、弹窗、Push、SMS、Email</li>
</ul></td></tr>
</tbody>
</table>

- 您需要接入 Whale 柜台后方可使用人群画像中的规则创建用户分群
- 您需要使用 Whale 的白标 App 产品并完成交付配置后，方可使用 Banner、弹窗、Push 通道触达用户
- 您需要完成消息服务的交付配置后，方可使用 SMS、Email 通道触达用户

## 运营计划

### 如何创建一个定时型 - 单次计划？

#### 适用场景

- 场景描述<b>：</b>定向召回流失交易用户
- 目标受众<b>：</b>假设帐户资产＜200，历史交易过 5 次以上的用户
- 运营策略：给目标受众发放任务币，配置专属兑换活动，并发邮件通知
- 效果评估：计划上线后，追踪目标受众的 APP 启动情况、兑换情况、入金交易情况

#### 使用说明

<b>第一步：选择创建计划</b>

菜单入口：投放系统&gt;运营计划

点击右上角‘创建计划’，设置计划名称（例：12 月回归奖励活动）

<img src="/assets/WlipbOyLbopoJSxsy7Tcfafonbh.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置触发条件</b>

配置条件参考如下：选择计划类型为定时型 - 单次，2022-12-29 的 14:00 触发计划，对受众用户进行触达

<img src="/assets/XH9ybjeYMoWEhPx3NU1cBHQnndv.png" src-width="2534" src-height="964" align="center"/>

<b>第三步：选择受众用户</b>

账户总资产小于 200 美金 且 累计交易次数大于 5 次

<img src="/assets/AJmabdJeRoLyPtxnuJ8cwzJdnsg.png" src-width="2830" src-height="1576" align="center"/>

<b>第四步：配置触达规则</b>

以邮件的方式给用户发送 App 新版本升级介绍

<img src="/assets/UNS2bHMKWo6kV6x1huVcUMg7n2g.png" src-width="2218" src-height="1220" align="center"/>

<b>第五步：设置触达目标</b>

用户收到邮件后，1 天内完成 App 启动

<img src="/assets/Ars0bIeJKoHru2xfnrscagZGnwf.png" src-width="2158" src-height="1060" align="center"/>

### 如何创建一个 定时型 - 重复 计划？

#### 适用场景

场景描述：定期向开户用户推送邀请活动

目标受众：开户且活跃用户

运营策略：通过邀请活动 offer 作为利益点，加深开户用户邀请认知，邀请身边朋友开户即可领取活动奖励

效果评估：邀请活动 H5 的浏览量、目标受众邀请开户情况

#### 使用说明

<b>第一步：选择创建计划</b>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：投放系统&gt;运营计划</p>
</div>

点击右上角‘创建计划’，设置计划名称（例：定期邀请开户活动）

<img src="/assets/T9IFbXJjYoMCiXx78V5cYZWCnnh.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置触发条件</b>

配置条件参考如下：选择计划类型为定时型 - 重复，设置起止时间为 2023-01-01 至 202-01-31，设置触达时间为每周一和每周五的 12:30，设置触达次数限制为同一个用户 5 天内最多收到 1 次邀请活动

<img src="/assets/LfCcbrjWgoy39NxV86vcsnWMnOh.png" src-width="2638" src-height="1170" align="center"/>

<b>第三步：选择受众用户</b>

配置条件如下：已开户用户 且 最近 App 启动时间在 2022-12-01 至 2023-01-31

<img src="/assets/W4KZbOJxrod5XWxgd6fcyvmKnqc.png" src-width="2836" src-height="1588" align="center"/>

<b>第四步：配置触达规则</b>

以短信的方式给用户发送邀请活动

<img src="/assets/P0N5bPAEzokuz5xi0EycL2ijnKh.png" src-width="1814" src-height="1024" align="center"/>

<b>第五步：设置触达目标</b>

用户收到邮件后，4 小时内完成邀请活动页面的浏览

<img src="/assets/VqFWbc9iTosoD0xUiLBco1CMnnf.png" src-width="2546" src-height="1122" align="center"/>

### 如何创建一个 获取型-API 计划？

#### 适用场景

- 场景描述：首发认购预热
- 目标受众：全部用户
- 运营策略：通过 APP 弹窗的强提醒方式，引导用户参与认购
- 效果评估：计划上线后，追踪目标受众的 APP 弹窗打开率

#### 使用说明

<b>第一步：选择创建计划</b>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：投放系统&gt;运营计划</p>
</div>

点击右上角‘创建计划’，设置计划名称（例：越南概念 ETF 认购预热）

<img src="/assets/ILE3brmO7o5rvLx9XQaclKpandy.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置触发条件</b>

配置条件参考如下：选择计划类型为获取型-API

<img src="/assets/WDyGbHaKQoAogPx74Acc0YGdnof.png" src-width="2470" src-height="790" align="center"/>

<b>第三步：选择受众用户</b>

配置条件如下：全部用户

<img src="/assets/F8iYbssD4oufnuxd9AWcL8L6nEe.png" src-width="2824" src-height="1586" align="center"/>

<b>第四步：配置触达规则</b>

通过弹窗触达用户

<img src="/assets/XckdbTFItoja6Bx9xfCcGj16nXc.png" src-width="1788" src-height="1022" align="center"/>

<img src="/assets/AMoFbvUwtoupBZxk4nGc2kEvnDc.jpeg" src-width="1080" src-height="2234" align="center"/>

<b>第五步：设置触达目标</b>

用户收到弹窗后，5 分钟内，打开弹窗且弹窗名称为南方东英越南 30

<img src="/assets/KPApbWiq2oiTmoxz8mOcFv2fnoh.png" src-width="2208" src-height="1070" align="center"/>

### 如何创建一个 触发型 - 完成 A 计划？

#### 适用场景

- 场景描述：新用户注册 12 天内，进行持续的内容触达或引导
- 目标受众：新注册用户
- 运营策略：通过多种触达方式组合，在用户注册完成后的不同时间点，向用户触达不同类型的内容
- 效果评估：追踪目标受众的转化情况、留存情况

#### 使用说明

从新用户注册 1 小时到 12 天，配置多个触发型计划，对用户进行内容投放

<img src="/assets/KVPRbY6yAoJd4QxUeYscC8OXnRf.png" src-width="3454" src-height="1574" align="center"/>

以注册 4 天关注股票引导为例进行说明

<b>第一步：选择创建计划</b>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：投放系统&gt;运营计划</p>
</div>

点击右上角‘创建计划’，设置计划名称（例：注册 4 天关注股票引导）

<img src="/assets/XH76bOl8hoQq9rxPzV2cZMzpnfc.png" src-width="3174" src-height="1576" align="center"/>

<b>第二步：设置触发条件</b>

配置条件参考如下：选择计划类型为 触发型 - 完成 A，设置触发事件为注册成功，设置延迟 4 天后对用户触达，设置起止时间为 2023-01-01 至 2023-06-30，设置参与次数为 1 次

<img src="/assets/BQuQb6hvDo6x27xc0zscs562noh.png" src-width="2854" src-height="1478" align="center"/>

<b>第三步：选择受众用户</b>

2023-01-01 至 2023-06-30 期间新注册的用户

<img src="/assets/HOD9blfPMoDhbcxvg6MckaYJnlh.png" src-width="2858" src-height="1582" align="center"/>

<b>第四步：配置触达规则</b>

通过 Push 触达用户

<img src="/assets/RopYbNUzyoqziYxm2MTcCkSRnod.png" src-width="2206" src-height="1178" align="center"/>

<img src="/assets/KYT6bfw9NovAD8xdb8tctdVTnXd.png" src-width="1284" src-height="771" align="center"/>

<b>第五步：设置触达目标</b>

用户收到 Push 后，5 分钟内，完成 Push 点击，点击 Push 的标题为：顺藤摸瓜，选到更多好股票

<img src="/assets/APxVbCkaTouyMex9bL8clLPYnEf.png" src-width="2200" src-height="1188" align="center"/>

## 人群画像

### 怎样创建用户分群？

投放系统支持通过 2 种方式创建用户分群，分别是规则创建和导入创建，您可以根据自己的需求选择

<img src="/assets/GuRXbF3b0oLB9fxnh58cZxAsn2b.png" src-width="582" src-height="366" align="center"/>

#### 规则创建用户分群

基于用户属性和用户行为，设置规则创建分群，您可以根据自己的需求选择：

1. 仅使用用户属性
2. 仅使用用户行为
3. 同时使用用户属性和用户行为

<b>结果更新说明：</b>已经创建并保存成功的分群，在每次被请求时，均会使用分群规则去重新计算，从而获取最新的数据结果

<img src="/assets/WBBObPO5cofGBgx7IoNcZ44cnnd.png" src-width="3068" src-height="1704" align="center"/>

#### 导入创建用户分群

通过导入指定 `id` 的名单来创建分群，系统会将导入的 `id` 进行匹配，匹配成功的 `id` 则保存到分群的结果中，导入 `id` 需为用户的唯一标识：`member_id`

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[52%]" width-ratio="52">
<img src="/assets/ShaHb3GyhoDZDoxyWfKcULonnWc.png" src-width="1542" src-height="1546"/>
</div>
<div class="w-[47%]" width-ratio="47">
<img src="/assets/B30BbYkh6oyYc3xYiRucx4wHnKc.png" src-width="1536" src-height="1684" align="center"/>
</div>
</div>

## 触达通道

### 如何创建一个 App Banner？

以下是创建 App Banner 的步骤顺序：

- 选择 Banner 类型：如 - 需要创建一个在市场首页位置的 Banner
- 设置 Banner 顺序：同一个位置的 Banner 有多个配置上时，按照数字从小到大的顺序进行轮播
- 设置 Banner 名称：用于区分 Banner，作为业务标识
- 设置 Banner 图片：有裁剪和普通上传 2 种方式，按需选择
- 设置 Banner 跳转链接：一般使用 Pagehub 生成 H5 链接后进行配置，也可使用 App 内的 H5 页面链接
- 设置 Banner 运行周期：Banner 生效的周期，在设置周期内，Banner 生效，过期后则不再展示
- 设置 Banner 可见范围：全部用户可见 - 则 App 所有用户可以看到 Banner，投放系统可见 - 则仅计划配置中的目标受众可见

<img src="/assets/EdhrbpGXcoeEWzxJyd8cYgWbnmb.png" src-width="1972" src-height="1640" align="center"/>

### 如何创建一个 App 弹窗？

以下是创建 App 弹窗 的步骤顺序：

- 弹窗名称：弹窗标识名称
- 弹窗类型：头图或全图，头图代表弹窗的标题描述确认按钮等都将使用编辑的信息，全图则代表完全使用背景图作为弹窗的展示信息
- 弹窗标题：展示在 App 的标题
- 弹窗描述：展示在 App 的描述信息
- 背景图片：弹窗展示时的背景图
- 确认按钮：弹窗点击跳转的按钮所对应的文案提示
- 确认按钮 URL：点击确认按钮后，期望跳转的地址
- 频次限制：同一个用户收到同一个弹窗的次数
- 活动时间：弹窗生效的时间周期
- 展示时间：在每天的 0 点到 24 点之间，希望弹窗在什么时间段展示
- 弹窗平台：可以选择是在 2 个端显示还是只在某个单一的端进行显示
- 可见状态：选择投放系统可见则代表仅计划配置中的目标受众可见，全部用户可见则整个 App 用户可见弹窗

<img src="/assets/RFNgbeSQYo091UxFfHccX4ujnqf.png" src-width="1924" src-height="1644" align="center"/>

### 如何创建一个 APP Push 消息？

投放系统的触发配置提供了 Push 的自定义模板功能，可以在配置计划时直接配置内容

以下是创建 App Push  的步骤顺序：

- 选择通道为 Push
- 设置标题、内容、上传封面图片
- 选择通知行为：常用的为打开某个活动链接或跳转到新股认购的页面，具体可按需选择

<img src="/assets/NNTQbrU3aohigYxQiozcqqlwnhf.png" src-width="2132" src-height="1526" align="center"/>

### 如何创建一个 邮件消息？

投放系统的触发配置提供了邮件的自定义模板功能，可以在配置计划时直接配置内容

以下是创建邮件消息的步骤顺序：

- 选择通道为邮件
- 设置发件人名称、邮件标题
- 通过富文本编辑器编辑邮件正文
- 添加邮件附件、设置邮件发件邮箱

<img src="/assets/NvxwbYJXUoMHSGxLqiYcAJ1VnJd.png" src-width="1694" src-height="1362" align="center"/>

### 如何创建一个 短信消息？

投放系统的触发配置提供了短信的自定义模板功能，可以在配置计划时直接配置内容

以下是创建短信消息的步骤顺序：

- 选择通道为短信
- 选择短信发送地区
- 选择短信类型：投放系统一般使用营销活动
- 设置短信内容

<img src="/assets/MeQmbnpHcohC0XxO9jUcm7mAnWe.png" src-width="2226" src-height="1530" align="center"/>

