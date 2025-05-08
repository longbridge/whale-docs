---
title: 快速上手
slug: Tn3iwKPmLi3Xgnk2IsScxDG8nCb
sidebar_position: 0
---


# 快速上手

## 前置条件

您需要获取以下授权后方可正常使用活动系统

<table header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><b>权限名称</b></p></th><th><p><b>权限说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><ul>
<li>ActivityCenterFull<br/>管理活动、邀请关系配置的权限</li>
</ul></td><td><p>增删改查标准活动，非标准活动，邀请关系</p></td></tr>
</tbody>
</table>

- 如需对活动设置实物、卡券奖励，请先在[权益系统](./Nohgwdf4midxtCkmYPtcemFenog)中进行创建
- 如需对活动参与用户进行限制，请先取得创建用户分群权限，参见[投放系统](./HFS5wXhvXi0yh7kKbllc8Xp4n9c)

## 活动达标任务类型及说明

<table>
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="260"/>
</colgroup>
<tbody>
<tr><td><p><b>任务类型</b></p></td><td><p><b>任务说明</b></p></td><td><p><b>计算公式</b></p></td></tr>
<tr><td><p>注册</p></td><td><p>完成注册动作</p></td><td></td></tr>
<tr><td><p>下载</p></td><td><p>完成注册并且下载登录 App 端内（会判断是否新设备登录，若不是新设备登录 App 则会判定为不符合要求）</p></td><td></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户动作且开户审批通过，开户成功</p></td><td></td></tr>
<tr><td><p>净转入</p></td><td rowspan="6"><p>活动期间内，账户内资金是否达到设定阈值</p></td><td><p>入金 + 转入股票 - 出金 - 转出股票的累计金额</p></td></tr>
<tr><td><p>净入金</p></td><td><p>入金 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>转入+min（0，净入金金额）的累计金额</p></td></tr>
<tr><td><p>入金达标</p></td><td><p>转入现金的累计金额达标</p></td></tr>
<tr><td><p>转仓达标</p></td><td><p>转入股票的累计金额达标</p></td></tr>
<tr><td><p>净资产达标</p></td><td><p>同净入金</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/转仓金额达到设定阈值</p></td><td><p>首次入金总金额</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次转仓总金额</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>完成设置的指定企业认证，或者只完成企业认证动作</p></td><td></td></tr>
</tbody>
</table>

## 标准活动管理

邀请活动：通过用户邀请好友完成任务，双方获得奖品（常用的裂变活动模式）

基础活动：用户本人完成对应活动获得奖品，提升关键节点转化率，实现获客、入金、交易等增长目标

组队活动：多人一起参与活动，达到指定人数要求且队员都完成对应任务即可获得奖品

### 如何创建一个邀请活动？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：运营系统＞活动系统＞标准活动管理</p>
</div>

点击邀请活动模块下的新建按钮

<img src="/assets/BsHabxNQGow09exZLzMciAXDnpg.png" src-width="2700" src-height="420" align="center"/>

邀请活动新建页面如下

<img src="/assets/XX7xbxRF6oAMWcx0ZKRcNpzNnsb.png" src-width="1280" src-height="1178" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动时间</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>目标用户</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr><td><p>分群延时时间</p></td><td><p>创建活动时支持选择用户分群，限定用户参与活动。对于分群，我们提供两种延时时间：</p>
<ul>
<li>五分钟：即每五分钟重跑一次分群，一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：即每一天重跑一次分群，对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr><td><p>活动属性</p></td><td><ul>
<li>常规活动：活动数据为累计相加的数据，计入最终给用户的邀请获得奖励总数据中展示。同一时间段内一个用户只可参加一个常规活动，获得一个活动奖品</li>
<li>营销活动：不限制用户参与次数且不计入用户基础邀请活动所得奖励总数中，比如：用户助力活动等等短期邀请活动</li>
</ul></td></tr>
<tr><td><p>奖励类型</p></td><td><p>选择发奖规则类型</p>
<ul>
<li>固定奖励：邀请一个新用户完成任务即获得奖励</li>
<li>阶梯奖励：邀请多人完成任务解锁不同阶梯奖励并进行叠加，依数量递增</li>
</ul></td></tr>
<tr><td><p>奖励规则</p></td><td><p>配置活动任务规则与对应的奖励</p></td></tr>
<tr><td><p>奖品设置</p></td><td><p>配置在当前活动中单一用户可获得同一奖励的个数上限</p></td></tr>
<tr><td><p>备注</p></td><td><p>非必填，用作运营人员个人备忘，不会展示给用户</p></td></tr>
</tbody>
</table>

<b>奖励规则</b>

点击新增奖励规则，不同奖励类型下奖励规则需填写的字段不同：

固定奖励

<img src="/assets/Nq3rbDizBoD2YexjzCCcaT1xnCc.png" src-width="2274" src-height="1742" align="center"/>

阶梯奖励

<img src="/assets/CEA9b127yoXfrnxY6JXc6ruzndN.png" src-width="2340" src-height="1752" align="center"/>

<b>奖品设置</b>

点击新建奖品设置，该区域出现配置项

可在此处限定奖励规则中添加的奖品，每位用户最多可获得多少次

<img src="/assets/NNttbSpVvom26qxaMDzcRKCinI0.png" src-width="1280" src-height="242" align="center"/>

提交后，邀请活动即可创建完毕

### 如何创建一个基础活动？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：运营系统＞活动系统＞标准活动管理</p>
</div>

点击基础活动模块下的新建按钮

<img src="/assets/ZSo7bLnafoxPLExdBQ6cjDBIn2l.png" src-width="2718" src-height="432" align="center"/>

打开如下页面：

<img src="/assets/ExUgbpcwCohqEjxtHGIcw68Xnld.png" src-width="2058" src-height="1480" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动时间</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>目标用户</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr><td><p>分群延时时间</p></td><td><p>创建活动时支持选择用户分群，限定用户参与活动。对于分群，我们提供两种延时时间：</p>
<ul>
<li>五分钟：即每五分钟重跑一次分群，一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：即每一天重跑一次分群，对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr><td><p>活动属性</p></td><td><p>按照不同类型进行选择</p>
<ul>
<li>不限制：不限制新老用户均可参与</li>
<li>新用户：历史上从未获得过新用户奖励的人才能参与活动奖品</li>
<li>老用户：只有已获得过新用户奖励的人才能参与获得奖品</li>
</ul></td></tr>
<tr><td><p>奖励规则</p></td><td><p>配置活动任务规则与对应的奖励</p></td></tr>
<tr><td><p>备注</p></td><td><p>非必填，用作运营人员个人备忘，不会展示给用户</p></td></tr>
</tbody>
</table>

<b>奖励规则</b>

<img src="/assets/OEiAbqMA3oDEebxUTD1cErTGnef.png" src-width="2256" src-height="1744" align="center"/>

- 不同奖励生成时间规则下，奖励的计算逻辑会有部分差别

<table header_column="1" header_row="1">
<colgroup>
<col width="117"/>
<col width="328"/>
<col width="372"/>
</colgroup>
<thead>
<tr><th><p>达标任务类型</p></th><th><p>期间实时生成</p></th><th><p>结束统一生成</p></th></tr>
</thead>
<tbody>
<tr><td><p>注册</p></td><td><p>完成注册时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户任务时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>净转入</p></td><td><p>每天跑脚本计算前一天数据是否达标，并生成奖励发放请求，当存在不同档位金额转入时，达到一档则生成一笔奖励记录，多档时会依据不同档生成多档奖励，奖励叠加发放</p></td><td><p>活动结束 T+1 日后按照活动时间内用户发生的所有净转入动作总和，判断处于哪一档净转入奖励，生成一笔最高对应档位的奖励</p></td></tr>
<tr><td><p>净入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>首次入金</p></td><td><p>判断活动期间内第一次入金当天累计是否达标，达标则生成奖励发放请求</p></td><td><p>判断活动期间内第一次入金当天累计是否达标，达标则活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>判断活动期间内第一次转仓当天累计是否达标，达标则生成奖励发放请求</p></td><td><p>判断活动期间内第一次转仓当天累计是否达标，达标则活动结束 T+1 日后生成奖励发放请求</p></td></tr>
</tbody>
</table>

- 如交易或资产类达标任务想设置多档位，对应多个奖励，可添加多条奖励规则

例：以下为同一活动中设置 4 条奖励规则，净入金任务分为 3 个档位，选择「期间实时生成」，则用户每达标一个任务，生成一条奖励

<img src="/assets/GdYObaTsBo8EaXxV0frc9S8pnHh.png" src-width="3144" src-height="548" align="center"/>

### 如何创建一个组队活动？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：运营系统＞活动系统＞标准活动管理</p>
</div>

点击组队活动模块下的新建按钮

<img src="/assets/KOLFbCSHkoc76SxJgIJcM4itnId.png" src-width="2700" src-height="426" align="center"/>

打开如下页面：

<img src="/assets/N0PSbR6q0okex5xYXJZcgOusn4g.png" src-width="1886" src-height="1648" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>目前「活动属性」中仅“助力得奖”活动形式可用，“基础组队得奖”和“组队瓜分”两种活动形式暂未上线</p>
</div>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动时间</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>目标用户</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可作为发起人参与活动。</p></td></tr>
<tr><td><p>活动属性</p></td><td><p>目前可选择“助力得奖”</p></td></tr>
<tr><td><p>助力人数</p></td><td><p>可填写 2-10 内整数，助力人数达到此值后，发起人可得规定奖励</p></td></tr>
<tr><td><p>发起次数</p></td><td><p>若不限制，则在活动时间内，当发起人获得规定人数助力并获得相应奖励后，可继续发起下一次助力活动；<br/>若此处限制次数，则在活动时间内，发起人仅可最多发起该限定次数的活动</p></td></tr>
<tr><td><p>助力次数</p></td><td><p>若不限制，每个助力人可进行不限次数的助力；<br/>若此处限制次数，则助力人仅可最多进行该限定次数助力</p></td></tr>
<tr><td><p>助力奖励</p></td><td><p>此处规定助力人可获得的奖励<br/>可选择用户分群，助力用户在该用户范围内则可获得对应奖励；<br/>通过此方式可设置不同类型的助力用户获得不同奖励，若无此需求，分群选择全部用户即可</p></td></tr>
<tr><td><p>发起人可得</p></td><td><p>当助力人数得到设定值时，发起人可获得的奖励</p></td></tr>
<tr><td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
</tbody>
</table>

提交后，即可创建助力得奖型组队活动。

## 非标准活动管理

适用场景：线下活动发奖，例如：大客户回馈之类的无具体活动规则，只是为了单纯给用户发放奖励的活动

主要功能：可在此创建活动并获得活动程式码，之后在权益系统 - 奖励中心关联活动程式码，发放奖励。

### 如何创建一个非标准活动？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：运营系统＞活动系统＞非标准活动管理</p>
</div>

点击页面上方新建按钮，打开如下页面

<img src="/assets/D0t7bMf3Lo8LdqxLBsTc8EPEnMc.png" src-width="1742" src-height="1612" align="center"/>

其他字段忽略，关注以下字段即可

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动 code</p></td><td rowspan="2"><p>这两项在创建活动后，系统会自动赋予，非必要无需人工填写<br/>生成后不可编辑</p></td></tr>
<tr><td><p>奖励发放业务代码</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称有可能展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>费用类型</p></td><td><p>营销推广、日常运营、返利，根据个单位自己的活动费用支出归属选择即可</p></td></tr>
</tbody>
</table>

## 邀请关系管理

可在此查询通过邀请活动绑定的邀请关系，也可以在此进行人工绑定

### 如何新增邀请关系？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：运营系统＞活动系统＞邀请关系管理</p>
</div>

<b>新增注册邀请关系</b>

在注册邀请 tab，点击邀请关系管理页面的新建按钮，打开如下弹窗

<img src="/assets/KDxFbi2r1oiYM5xo8fdchgmhnUf.png" src-width="1280" src-height="183" align="center"/>

<img src="/assets/CdbIb1u6konGhvxdZukc4L5jnMQ.png" src-width="936" src-height="708"/>

填写被邀请人和邀请人的客户编号后即可完成绑定

<b>新增开户邀请关系/入金邀请关系</b>

首先通过筛选找到欲为其绑定邀请人的被邀请人用户，点击该用户详情，进入查看

<img src="/assets/Mnu9b66utobUjlxfZAMcdPefnQf.png" src-width="2698" src-height="392" align="center"/>

详情中，会显示该用户的注册邀请人，并可在此选择进一步绑定开户邀请人和入金邀请人

<img src="/assets/RQwzbAJMCobBJ2xaIGicnPhGnHc.png" src-width="2712" src-height="1710" align="center"/>

在随后出现的弹窗中输入邀请人用户编号后，即可完成对此被邀请人绑定开户/入金邀请人的操作

（对于已完成的动作则不可绑定对应节点的邀请人了，未完成动作节点邀请人可以绑定和变更）

