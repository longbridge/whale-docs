---
title: 系统介绍
slug: RetvwXjhyi4FLLkq9Qmc2n4wn9e
sidebar_position: 1
---


# 系统介绍

活动系统是 Whale OPA 运营系统所提供营销活动管理核心，方便劵商租户来管理各种市场营销活动，提供各种营销活动的配置管理，系统目前提供下列活动类型组：
- 标准活动类型：邀请活动/基础活动/组队活动等等
- 非标准活动管理：提供自主的活动管理要素，方便满足安排个性化活动

透过方便的营销活动模板，来管理各种营销活动，实现数字化营销。

<img src="/assets/X73CbSkaIo7tLSxomLrcalD3ngc.png" src-width="1276" src-height="920"/>

## 1.功能介绍

<table header_column="1">
<colgroup>
<col width="126"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>菜单功能目录</p></td><td><p>作业说明</p></td></tr>
<tr><td><p>标准活动管理</p></td><td><p>具有标准活动模版，可选中对应活动模版创建活动，并进行规则配置与活动数据的管理</p>
<ul>
<li>邀请活动模版：通过用户邀请好友完成任务获得奖品（常用的裂变活动模式）</li>
<li>基础活动模版：用户本人完成对应活动获得奖品（每月新用户活动更新、老用户回馈活动。）</li>
<li>组队活动模版：多人一起参与活动，达到指定人数要求且队员都完成对应任务即可获得奖品。</li>
</ul></td></tr>
<tr><td><p>非标准活动管理</p></td><td><p>主要用于进行非标准活动，如线下活动发奖，等类型的线上管理与归档</p></td></tr>
<tr><td><p>邀请关系管理</p></td><td><p>主要对于活动相关的邀请绑定关系进行管理。可对用户的邀请关系信息查询、更改、绑定</p></td></tr>
</tbody>
</table>

### 1.1 活动系统架构

<img src="/assets/YMfdb8VTfo2ahgxnDFKcaV4FnUf.png" src-width="806" src-height="492" align="center"/>

### 1.2 活动达标任务类型及说明

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
<tr><td><p>净转入</p></td><td rowspan="6"><p>活动期间内，账户内资金是否达到设定阈值</p></td><td><p>入金 + 转入 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净入金</p></td><td><p>入金 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>转入+min（0，净入金金额）的累计金额</p></td></tr>
<tr><td><p>入金达标</p></td><td><p>转入现金的累计金额达标</p></td></tr>
<tr><td><p>转仓达标</p></td><td><p>转入股票的累计金额达标</p></td></tr>
<tr><td><p>净资产达标</p></td><td><p>同净转入</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/转仓金额达到设定阈值</p></td><td><p>首次入金总金额</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次转仓总金额</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>完成设置的指定企业认证，或者只完成企业认证动作</p></td><td></td></tr>
</tbody>
</table>

### 1.3 活动奖励说明

目前创建活动时可设置三种奖励类型：实物、卡券、现金

实物和卡券的创建参见[权益系统](./Nohgwdf4midxtCkmYPtcemFenog)介绍

### 1.4 活动配置流程

适用：运营人员，活动系统涉及到下列几个主体：
活动系统：运营人员负责配置管理在线活动
用户分群：圈定目标用户，以及活动过程中资产相关数据获取
权益系统：关联相关活动奖励
<img src="/assets/MrnBbhmJro3K4bxzuyRcf8KJnXb.jpeg" src-width="2190" src-height="894" align="center"/>

## 
## 2.标准活动管理

执行菜单：运营系统&gt; 活动系统&gt;标准活动管理

本作业可以维护管理标准活动

上层：可选择活动模版进行创建

下层：可对已创建好的活动纪录进行查询和管理

<img src="/assets/Uq5SbZ3mTooSBIxJeYDciG66nYc.png" src-width="3766" src-height="1562" align="center"/>

活动管理列表字段说明

<table>
<colgroup>
<col width="111"/>
<col width="771"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>序号</p></td><td><p>创建活动后程序自动赋的序号</p></td></tr>
<tr><td><p>活动代码</p></td><td><p>创建活动后程序自动给该活动赋的代码，该代码与活动为一对一的关系，可用于后续的查询，补发奖励等各种操作</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>创建活动时确定的活动名称</p></td></tr>
<tr><td><p>类型</p></td><td><p>在创建活动时选择的活动类型，即模版中的类型</p></td></tr>
<tr><td rowspan="2"><p>属性</p></td><td rowspan="2"><p>和活动类型联动，不同活动类型会有以下属性：<br/>邀请活动</p>
<ul>
<li>常规活动：活动数据为累计相加的数据，计入最终给用户的邀请获得奖励总数据中展示。同一时间段内一个用户只可参加一个常规活动，获得一个活动奖品</li>
<li>营销活动：不限制用户参与次数且不计入用户基础邀请活动所得奖励总数中，比如：用户助力活动等等短期邀请活动<br/>基础活动</li>
<li>新用户：新用户活动（仅基础活动）</li>
<li>老用户：老用户活动（仅基础活动）</li>
</ul></td></tr>
<tr></tr>
<tr><td><p>状态</p></td><td><p>当前活动状态：</p>
<ul>
<li>草稿（已创建活动但还未点击发布之前）：查看详情、编辑、关闭、发布</li>
<li>运行中（活动已发布且未到结束时间）：查看详情、编辑、关闭</li>
<li>已结束（已过活动结束时间）：查看详情</li>
</ul></td></tr>
<tr><td><p>分群延时时间</p></td><td><p>创建活动时支持选择用户分群，限定用户参与活动。对于分群，我们提供两种延时时间：</p>
<ul>
<li>五分钟：即每五分钟重跑一次分群，一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：即每一天重跑一次分群，对于有入资、转仓等用户任务列表的活动，设置一天延时<br/>在活动管理列表中，此处显示每个活动所选择的分群延时时间</li>
</ul></td></tr>
<tr><td><p>活动时间</p></td><td><p>显示开始时间 - 结束时间；</p></td></tr>
<tr><td><p>创建时间</p></td><td><p>活动创建时间</p></td></tr>
<tr><td><p>操作</p></td><td><p>在上面状态栏，列出了不同状态的活动可以执行的操作</p></td></tr>
</tbody>
</table>

### 
### 2.1 邀请活动

#### 2.1.1 邀请活动业务实现逻辑说明

任意活动页面只要配置了分享功能，则该页面通过用户分享传播后完成新用户注册，均会进行邀请关系绑定。

邀请活动通过绑定关系进行发奖。

<img src="/assets/AEN0b9E4IomM6zx64CWcUWJ3nMf.jpeg" src-width="1474" src-height="494" align="center"/>

此外，邀请活动支持固定奖励和阶梯奖励两种奖励类型

固定奖励：每邀请一个新用户完成任务，即会固定获得奖励

阶梯奖励：划分被邀请人数量区间，邀请人数位于某一区间内，每邀请一个新用户即会获得该区间对应的奖励，到达下一区间时还可设置邀请人的额外奖励，通常邀请人数越多奖励越大。

#### 2.1.2 邀请活动配置

运营系统＞活动系统＞标准活动

若要新增一个邀请活动，可以点击邀请活动模块下的新建按钮

<img src="/assets/AER4bgL9IoaITpxZVxBcRb4qncb.png" src-width="1280" src-height="199" align="center"/>

邀请活动新建页面如下

<img src="/assets/Dg0vbXSaso8i8cxGNrdcmK63nEb.png" src-width="2108" src-height="1941" align="center"/>

活动模版字段按如下规则进行配置：

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

点击新增奖励规则，不同奖励类型和活动属性填写字段不同：

<u>固定奖励</u>

<img src="/assets/U3aZb5mg5of06dx43ICcE8xqnKb.png" src-width="1280" src-height="980" align="center"/>

<u>阶梯奖励</u>

<img src="/assets/JDXobSrslo2J3WxPlPPcy2xxn5b.png" src-width="1280" src-height="958" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

<b>奖品设置</b>

点击新建奖品规则，该区域出现配置项：

可在此处限定奖励规则中添加的奖品，每位用户最多可获得多少次

<img src="/assets/TzYsbeR8noYcW8xL3HwcJzuHnSc.png" src-width="2040" src-height="386" align="center"/>

#### 2.1.3 邀请活动奖励数据查询

只有当活动运行中进行发奖时才有数据显示

点击对应活动后方详情按钮，进入活动详情页面，点击“获奖名单”tab，进入以下页面

<img src="/assets/NUnrbOdUfo8ATMxTOEic4XWfnHf.png" src-width="3280" src-height="852" align="center"/>

数据统计

待提交：未提交发放请求的奖励记录

发放中：发放中的奖励记录

已发放：已发放成功的奖励记录

失败：发放失败的奖励记录数

取消发放：点击取消发放的奖励记录数

锁仓中：若活动达标任务设置了锁仓，则此处为正在锁仓中的奖励记录数

全部：所有该活动奖励记录数

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>奖励记录编号</p></td></tr>
<tr><td><p>用户编号</p></td><td><p>奖励具体发放给的用户 id</p></td></tr>
<tr><td><p>邀请人/被邀请人编号</p></td><td><p>该奖励用户编号所对应的邀请或者被邀请人的用户编号</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>用户所对应认证了企业的企业名称（若有）</p></td></tr>
<tr><td><p>达标任务</p></td><td><p>用户获得该奖励所完成的任务名称</p></td></tr>
<tr><td><p>达标时间</p></td><td><p>用户任务完成时间（基本奖励发放时间）</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>所获得的奖励的名称</p></td></tr>
<tr><td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
<tr><td><p>发放状态</p></td><td><p>待提交、发放中、已发放、失败、取消发放</p></td></tr>
<tr><td><p>发放时间</p></td><td><p>奖励发放到用户账上的时间</p></td></tr>
<tr><td><p>发放账户</p></td><td><p>发放到用户的具体账户（无多账户情况可忽略）</p></td></tr>
<tr><td><p>操作</p></td><td><p>提交请求：提交奖励进行发奖（当奖励为手动发放时才有）<br/>取消发放：取消奖励发放，奖励记录将不会提交发奖且奖励状态变更为取消发奖</p></td></tr>
</tbody>
</table>

### 2.2 基础活动

#### 2.2.1 基础活动业务实现逻辑说明

<img src="/assets/S2dCbbeR9oPAuYxOnM0c1miLnne.jpeg" src-width="1394" src-height="494" align="center"/>

#### 2.2.2 基础活动配置

运营系统＞活动系统＞标准活动

点击邀请活动模块下的新建按钮

<img src="/assets/HN74b0O8hoeRyPxcxh9cg5rknXf.png" src-width="1280" src-height="203" align="center"/>

打开如下页面：

<img src="/assets/Viekbh7vtonooRxtudHcpSoSnbg.png" src-width="2058" src-height="1480" align="center"/>

活动模版字段按如下规则进行配置：

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

<img src="/assets/KUNcbA3NmofF3PxOJmycvDnLnUb.png" src-width="1280" src-height="989" align="center"/>

- 不同奖励生成时间规则下，奖励的计算逻辑会有部分差别

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="240"/>
</colgroup>
<tbody>
<tr><td><p>达标任务类型</p></td><td><p>实时生成</p></td><td><p>结束统一生成</p></td></tr>
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

<img src="/assets/K1grbEvVzoM2RbxUnmFc1Tyxn8d.png" src-width="3144" src-height="548" align="center"/>

#### 2.2.3 基础活动奖励数据查询

活动奖励数据查询（只有当活动运行中进行发奖时才有数据显示）

点击对应活动后方详情按钮，进入活动详情页面，点击“获奖名单”tab，进入以下页面

<img src="/assets/OSKFbMvOFo0ZaCxitOUct92JnJf.png" src-width="2712" src-height="1132" align="center"/>

数据统计

待提交：未提交发放请求的奖励记录

发放中：发放中的奖励记录

已发放：已发放成功的奖励记录

失败：发放失败的奖励记录数

取消发放：点击取消发放的奖励记录数

锁仓中：若活动达标任务设置了锁仓，则此处为正在锁仓中的奖励记录数

全部：所有该活动奖励记录数

<table>
<colgroup>
<col width="120"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>奖励记录编号</p></td></tr>
<tr><td><p>用户编号</p></td><td><p>奖励具体发放给的用户 id</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>用户所对应认证了企业的企业名称（若有）</p></td></tr>
<tr><td><p>达标任务</p></td><td><p>用户获得该奖励所完成的任务名称</p></td></tr>
<tr><td><p>达标时间</p></td><td><p>用户任务完成时间（基本奖励发放时间）</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>所获得的奖励的名称</p></td></tr>
<tr><td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
<tr><td><p>发放状态</p></td><td><p>待提交、发放中、已发放、失败、取消发放</p></td></tr>
<tr><td><p>发放时间</p></td><td><p>奖励发放到用户账上的时间</p></td></tr>
<tr><td><p>发放账户</p></td><td><p>发放到用户的具体账户（无多账户情况可忽略）</p></td></tr>
<tr><td><p>是否锁仓</p></td><td><p>是否需要满足锁仓需求</p></td></tr>
<tr><td><p>是否锁仓后发放</p></td><td><p>根据配置活动时的额选择展示</p></td></tr>
<tr><td><p>锁仓金额</p></td><td><p>获得该奖励后需要锁仓的金额</p></td></tr>
<tr><td><p>货币</p></td><td><p>锁仓资金对应的币种</p></td></tr>
<tr><td><p>锁仓到期时间</p></td><td><p>奖励到账时间 + 锁仓期限=锁仓到期时间</p></td></tr>
<tr><td><p>锁仓时间</p></td><td><p>锁仓期限</p></td></tr>
<tr><td><p>操作</p></td><td><p>提交：提交奖励进行发奖（当奖励为手动发放时才有）<br/>取消：取消奖励发放，奖励记录将不会提交发奖且奖励状态变更为取消发奖</p></td></tr>
</tbody>
</table>

### 2.3 组队活动

#### 2.3.1 组队活动业务流程

<img src="/assets/AguQb4BkIoIIRCx93fvcSiZCnKd.jpeg" src-width="2274" src-height="434" align="center"/>

#### 2.3.2 组队活动配置

运营系统＞活动系统＞标准活动

点击组队活动模块下的新建按钮

<img src="/assets/V6KbbtB01oan48x5crCcIj4Fnph.png" src-width="1280" src-height="201" align="center"/>

打开如下页面：

<img src="/assets/Vk4zbmaYdo4M0HxvO3fcQWuKnpf.png" src-width="1886" src-height="1648" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>目前「活动属性」中仅“助力得奖”活动形式可用，“基础组队得奖”和“组队瓜分”两种活动形式暂未上线</p>
</div>

活动模版字段按如下规则进行配置：

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

#### 2.3.3 组队活动奖励数据查询

只有当活动运行中进行发奖时才有数据显示

点击对应活动后方详情按钮，进入活动详情页面，点击“获奖名单”tab，进入以下页面

<img src="/assets/YPNGbd55PoR6Y9xGX1bcieWxnWe.png" src-width="2730" src-height="818" align="center"/>

数据统计

待提交：未提交发放请求的奖励记录

发放中：发放中的奖励记录

已发放：已发放成功的奖励记录

失败：发放失败的奖励记录数

取消发放：点击取消发放的奖励记录数

锁仓中：目前助力型组队活动不涉及，忽略即可

全部：所有该活动奖励记录数

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>奖励记录编号</p></td></tr>
<tr><td><p>用户编号</p></td><td><p>具体发放给的用户编号</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>用户所对应认证了企业的企业名称（若有）</p></td></tr>
<tr><td><p>达标任务</p></td><td><p>目前助力型组队活动不涉及，忽略即可</p></td></tr>
<tr><td><p>达标时间</p></td><td><p>目前助力型组队活动不涉及，忽略即可</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>所获得的奖励的名称</p></td></tr>
<tr><td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
<tr><td><p>发放状态</p></td><td><p>待提交、发放中、已发放、失败、取消发放</p></td></tr>
<tr><td><p>发放时间</p></td><td><p>奖励发放到用户账上的时间</p></td></tr>
<tr><td><p>发放账户</p></td><td><p>发放到用户的具体账户（无多账户情况可忽略）</p></td></tr>
<tr><td><p>是否锁仓</p></td><td rowspan="6"><p>目前助力型组队活动不涉及，忽略即可</p></td></tr>
<tr><td><p>是否锁仓达标后发放</p></td></tr>
<tr><td><p>锁仓金额</p></td></tr>
<tr><td><p>货币</p></td></tr>
<tr><td><p>锁仓到期时间</p></td></tr>
<tr><td><p>锁仓时间</p></td></tr>
<tr><td><p>操作</p></td><td><p>提交请求：提交奖励进行发奖（当奖励为手动发放时才有）<br/>取消发放：取消奖励发放，奖励记录将不会提交发奖且奖励状态变更为取消发奖</p></td></tr>
</tbody>
</table>

#### 2.3.4 组队信息查看

助力活动，视为发起人邀请助力人进行组队，因此可查看其组队信息

只有当活动运行中进行发奖时才有数据显示

点击对应活动后方详情按钮，进入活动详情页面，点击“组队信息”tab，进入以下页面

<img src="/assets/PT7RbQCGYopvPbx1Qq6cLmNonBc.png" src-width="2716" src-height="838" align="center"/>

数据统计

进行中：活动期间，发起过助力且未达到预设助力人数的队伍数量

组队成功：发起过助力并达到预设助力人数的队伍数量

组队失败：至活动结束，发起过助力且未达到预设助力人数的队伍数量

全部：所有该活动发起过助力的队伍数量

<table>
<colgroup>
<col width="123"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>队伍编号</p></td><td><p>发起助力后，程序自动赋予队伍的一个编号</p></td></tr>
<tr><td><p>队伍状态</p></td><td><p>组队中，组队成功，组队失败</p></td></tr>
<tr><td><p>队伍名称</p></td><td><p>程序自动生成的名称，生成规则“发起人暱称的队伍”</p></td></tr>
<tr><td><p>发起人用户编号</p></td><td><p>发起助力用户的用户 id</p></td></tr>
<tr><td><p>队伍人数</p></td><td><p>n/m，n为当前队伍人数（不算发起人本人，即已助力人数），m为设定的队伍人数上限</p></td></tr>
<tr><td><p>创建时间</p></td><td><p>发起助力（队伍创建）的时间</p></td></tr>
<tr><td><p>完成时间</p></td><td><p>只有组队成功的队伍才有数据，为助力人数（队员人数）达到上限时的时间</p></td></tr>
<tr><td><p>操作</p></td><td><p>查看详情，点击后可查看队伍及队伍人员详情<br/><img src="/assets/L5XibEwAHoJSaFx8Q2PcMkftnSf.png" src-width="1062" src-height="650"/></p></td></tr>
</tbody>
</table>

## 
## 3.非标准活动管理

使用人员：运营

使用场景：线下活动发奖，例如：大客户回馈之类的无具体活动规则，只是为了单纯给用户发放奖励的活动

主要功能：可在此创建活动并获得活动程式码，之后在权益系统 - 奖励中心关联活动程式码，发放奖励。

执行菜单：运营系统&gt; 活动系统&gt;非标准活动管理

可对已创建好的活动纪录进行查询和管理（当前系统设计为标准活动创建后也会归档在这个列表内，因此该列表会显示上述标准活动与在此处创建的非标准活动，兼有全量活动查询库的功能）

<img src="/assets/BuKXbWwMvovMO1xJev5cEO7QnNg.png" src-width="2720" src-height="1216" align="center"/>

活动管理列表字段说明

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>列表自动赋予的编号，仅用于计数</p></td></tr>
<tr><td><p>活动名称</p></td><td></td></tr>
<tr><td><p>活动编码</p></td><td><p>创建活动后程序自动给该活动赋的编码，该编码与活动为一对一的关系，可用于后续的查询，补发奖励等各种操作</p></td></tr>
<tr><td><p>业务编码</p></td><td><p>技术人员需要，可忽略</p></td></tr>
<tr><td><p>备注</p></td><td><p>创建活动时填写的备注，如未填写则为空</p></td></tr>
<tr><td><p>费用类型</p></td><td><p>营销推广、日常运营、返利</p></td></tr>
<tr><td><p>审核方式</p></td><td><p>审核：活动的奖励需要财务审核后才发<br/>不审核：奖励无需财务审核即可发放</p></td></tr>
<tr><td><p>创建时间</p></td><td><p>活动的创建时间</p></td></tr>
<tr><td><p>更新时间</p></td><td><p>活动的更新时间，若未编辑过，则与创建时间一致</p></td></tr>
<tr><td><p>操作</p></td><td><p>编辑：点击后进入活动编辑页面，可修改已有活动信息<br/>审核配置：点击后可修改活动的审核方式，可在审核与不审核之间切换（第三个选项暂未启用，请忽略）<br/><img src="/assets/F0fhbHlzYo4GrixcqO2chPAkncd.png" src-width="944" src-height="334"/></p></td></tr>
</tbody>
</table>

### 3.1 非标准活动配置

点击页面上方新建按钮，打开如下页面

<img src="/assets/WUbbbmKlpo8dfbxx04mcYZesned.png" src-width="1742" src-height="1612" align="center"/>

如上述使用场景举例，因为非标准活动事实上没有明确的规则，创建非标准活动主要为了拿到活动 code（活动编码），后续通过奖励中心关联该活动 code 发放奖励，因此上方创建页面中的非必填字段可不必填写，忽略即可。

以下仅对其中重要字段配置作说明

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动 code</p></td><td rowspan="2"><p>这两项在创建活动后，系统会自动赋予，非必要无需人工填写。<br/>生成后不可编辑</p></td></tr>
<tr><td><p>奖励发放业务代码</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称有可能展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>费用类型</p></td><td><p>营销推广、日常运营、返利，根据个单位自己的活动费用支出归属选择即可</p></td></tr>
</tbody>
</table>

## 
## 4.邀请关系管理

如图：一个用户在一个 App 下会生成当前 App 唯一邀请码，用户将自己邀请码分享给好友，好友即可填写绑定。绑定后会更新在邀请关系清单中

通过邀请活动绑定的邀请关系可在此查询，也可以在此进行人工绑定

执行菜单：运营系统&gt; 活动系统&gt;邀请关系管理

<img src="/assets/GorFbAYxsobpK1xP7EecCMTxnSh.png" src-width="2730" src-height="1010" align="center"/>

主要功能：

查询：通过切换顶部 tab，可以分别查询注册邀请，开户邀请，入金邀请的绑定关系

新增：可以直接在后台操作给用户进行邀请关系绑定

详情：可查看绑定关系的具体用户资讯以及绑定管道、绑定时间、以及可以变更绑定关系。

（对于已完成的动作则不可绑定对应节点的邀请人了，未完成动作节点邀请人可以绑定和变更）

### 4.1 新增邀请关系

#### 4.1.1 新增注册邀请关系

点击邀请关系管理页面的新建按钮，打开如下弹窗

<img src="/assets/MlXGb9xbvoLBWixKIjOcxQtUncb.png" src-width="1280" src-height="183" align="center"/>

<img src="/assets/Siw6buGRcoNmdXxok4UcTR9XnVb.png" src-width="936" src-height="708"/>

填写被邀请人和邀请人的客户编号后即可完成绑定

#### 4.1.2 新增开户邀请人/入金邀请人

首先通过筛选找到欲为其绑定邀请人的被邀请人用户，点击该用户详情，进入查看

<img src="/assets/N546br6XmosDyvxLYDbcsHl1nCe.png" src-width="2698" src-height="392" align="center"/>

详情中，会显示该用户的注册邀请人，并可在此选择进一步绑定开户邀请人和入金邀请人

<img src="/assets/YoMVbBw4ZohoO4xcb3LcDktanng.png" src-width="2712" src-height="1710" align="center"/>

在随后出现的弹窗中输入邀请人用户编号后，即可完成对此被邀请人绑定开户/入金邀请人的操作

当用户未完成某一节点时，可以变更用户绑定的该节点的邀请人，变更流程同上，输入新的邀请人用户编号即可。

## 运营活动常见问题查询

## 用户咨询未收到奖励，运营如何查询？

执行菜单：运营系统&gt; 活动系统&gt;标准活动管理

先查活动配置是否正确，点击对应活动后方详情进入查看活动规则配置，确认配置的对应规则和奖励是否正确

<img src="/assets/Bm7XbapCGoQlujxdKk3cAiAxnUe.png" src-width="1280" src-height="595" align="center"/>

<img src="/assets/WCrUbCPoWoJQUDxntc6clhYenQe.png" src-width="1280" src-height="636" align="center"/>

若正确，则正确进入获奖名单查询是否生成以及奖励记录状态

<img src="/assets/FybmbBlwMo7sbjxEK0GcK0LKnXf.png" src-width="1280" src-height="443" align="center"/>

若发放中则说明系统还在发放中，若待提交则需要运营同学点击提交进行发放

## 如何查询用户是否绑定成功邀请关系？

执行菜单：运营系统&gt; 活动系统&gt;邀请关系管理

<img src="/assets/PSsKbHDAtoGVJLxlExUcQj5DnJd.png" src-width="1280" src-height="492" align="center"/>

如图，搜索后列表会展示所有该用户绑定的邀请关系，点击后方详情可查看具体绑定的用户信息

<img src="/assets/IPDTb6xbGoF216xgd5BcJWI6noe.png" src-width="1280" src-height="395" align="center"/>

<img src="/assets/Sz5IbVApfodSA1xuvETcfVsknLb.png" src-width="1280" src-height="632" align="center"/>

