---
title: 快速上手
slug: QUlww7SV3iiohxkxUb7c8CkenXd
sidebar_position: 1
---


# 快速上手

## 概述

Whale CRM 系统，支持券商在线查看、管理旗下所有注册客户的个人基础信息和开户/入资信息；支持券商主动推进目标客户的生命周期的推进，高效实现注册客户快速转化为有效户。系统包含客户列表、客户经理、我的看板、任务跟进、今日完成五大模块。其中，客户列表整合了券商名下所有的客户信息，涵盖了客户基本信息、开户信息、邀请关系、入资等内容；同时也支持不同角色的后台用户基于一定的功能权限和数据权限获取一定范围的客户信息。

对于存在客户经理维系客户的券商，可以在线管理客经团队，支持将客户按一定规则分配给对应的客户经理；同时，也通过更细分的数据筛选等方式，支持客户经理更好的进行 CRM 工作，实现客户的高效转化。

## 快速上手

### 前置条件

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
<tr><td><p>只读客户列表的权限<br/>ClientReadOnly</p></td><td><p>申请该权限后，可查看当前券商名下所有的客户数据</p></td></tr>
<tr><td><p>管理客户列表的权限<br/>ClientFull</p></td><td><p>支持对客户列表的客户进行客经分配、备注、修改企业认证（若有）等权限</p></td></tr>
<tr><td><p>查看任务、看板、客户池、今日完成，查看客户资产的权限<br/>ClientProfileReadOnly</p></td><td><p>查看任务、看板、客户池、今日完成列表的数据权限，查看客户资产的权限</p></td></tr>
<tr><td><p>查看、添加、编辑客经信息及二维码、操作离职的权限<br/>SupportManageFull</p></td><td><p>支持客户经理信息的添加、编辑、查看的权限，支持查看客经二维码、操作客经离职的权限</p></td></tr>
<tr><td><p>团队看板数据权限<br/>crm_support_team.data</p></td><td><p>可查看该团队下的所有客经名下的客户数据</p></td></tr>
</tbody>
</table>

### 客户列表：全量客户池

各券商客户，通过券商指定的方式注册成功后，客户数据均会汇总至 客户列表 菜单。当客户在平台上完成开户、入金、交易、邀请等行为事项时，客户列表会一并记录相关信息。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❗</div>
<p>作为全量客户的核心数据的聚合点，客户列表 菜单的权限开发，需格外注意</p>
</div>

<b>路径：</b>客户管理系统 &gt; CRM &gt; 客户列表

<b>操作：</b>作为券商名下的全量客户池，支持按一定的规则条件筛选目标客户，并查看该客户的详情信息。同时根据登录用户拥有的权限，支持查看该客户的开户信息、备注、分配客经、更新客户认证等能力。

<img src="/assets/V1UNbahEqoRGnExlUGDcdW1HnWc.png" src-width="2316" src-height="1432" align="center"/>

选中某客户，点击「详情」，可查看该客户的基本信息、邀请关系、账户资产、持仓交易等信息（需开通相应的权限）

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[23%]" width-ratio="23">
<img src="/assets/WVsSbTSijoe9DIxgiqXcXpyonMq.png" src-width="458" src-height="956" align="center"/>
</div>
<div class="w-[76%]" width-ratio="76">
<img src="/assets/E7WubXWyRo52u9xayYKcgDt0n5b.png" src-width="2322" src-height="1420" align="center"/>
</div>
</div>

同时，对小体量的券商团队，可直接在该菜单进行客户的管理和跟进事宜。支持单客户的跟进、备注等操作，也支持批量分配客经、备注等功能。

<img src="/assets/I1W1bSl3TooHUkxTe5Oc7TxRn6f.png" src-width="2318" src-height="1408" align="center"/>

### 管理『客户经理』

对于存在客户经理维系客户的券商，可以在线管理客经团队，支持将客户按一定规则分配给对应的客户经理，方便客户经理在线跟进、高效推动客户的有效转化。

<b>路径：</b>客户管理系统 &gt; CRM &gt; 客户经理

<b>操作：</b>点击【添加客户经理】，新增一个客户经理的基本信息，包括姓名、岗位、团队、地区等信息

<img src="/assets/B2EDbZGUzoWUCSxy86icvVkmnth.png" src-width="3232" src-height="1526" align="center"/>

<img src="/assets/IMvAbmpA9oHdkUxc1TMcmyFtnvf.png" src-width="1280" src-height="669" align="center"/>

### 分配客户经理

说明：此模块仅针对存在客户经理场景的券商。

客户列表汇总了所有注册成功的客户，支持将客户按一定规则分配给对应的客户经理，支持一个客户由不同的客户经理来负责不同的阶段，如前期的商务拓展、后期的渠道转化。

<b>路径：</b>客户管理系统 &gt; CRM &gt; 客户列表

<b>操作：</b>支持为单个客户分配客户经理，也支持勾选多个客户后进行批量分配客经。

<img src="/assets/Gf2Abwv3Koga1oxQGBtcloWxnHf.png" src-width="1180" src-height="713" align="center"/>

### 我的看板：客经负责的客户看板

为客户经理分配好客户后，客户经理可在 我的看板 查看跟自己绑定的所有客户数据，包括客户的基本信息、开户/入资/交易/邀请等所有客户数据。若有团队数据权限，则可查看当前团队下所有客经跟进的所有客户信息。

同时，客户经理可在线记录与客户联系的的摘要记录，包括联系方式、客户意愿、下次跟进时间等主观信息，帮助客经更高效的建立客户画像，以期更好的服务客户。

<b>路径：</b>客户管理系统 &gt; CRM &gt; 我的看板

<b>操作：</b>对分配至当前客经名下的客户，按客户所处的生命周期分成了待开户、待入金、已入资、已交易四个模块。点击生命周期卡片，快速筛选处于该生命周期下的所有客户信息

- 字段解释：
    - 用户地区：为用户当前所在国家/地区。取值规则，按以下优先级取：
        -  ①：居住国家/地区；优先级 ②：手机区号；优先级 ③：注册时的 IP 对应地区 
    - 活动地区：指证件签发国所在地。部分客户居住地区和证件签发国不一致，则优先取证件签发国作为活动地区。取值规则如下：
        - 若有证件签发国，取证件签发国作为活动地区；若无，则取用户区域的值作为活动地区

<img src="/assets/Q4LhbQRvwoSc7Jx2CkTciPjCnXe.png" src-width="3306" src-height="1222" align="center"/>

点击特定客户编号时，右侧呼出抽屉弹层，同步展示该客户的详细资料，包括个人基础信息、资产/交易数据、邀请关系、跟进记录等，方便客户经理快速构建该用户画像，更好的服务客户。

<img src="/assets/EZZGbS6UqorpGCx3fIfc6ySyn9f.png" src-width="3304" src-height="1782" align="center"/>

同时，跟进记录 Tab 页，可点击【添加跟进记录】，记录该客户详细情况，包括客户意愿、客户级别、与联系的联系方式、下次跟进时间、客户标签、备注等

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/ObKJbF3yCodmnvxEMZkccFQFnkg.png" src-width="1180" src-height="1766" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/OfzjbBuMuoLh4pxI9XwcDBqJnGl.png" src-width="1174" src-height="1808" align="center"/>
</div>
</div>

此外，对于同类客户，也可在勾选后点选【批量备注】添加相关备注说明

<img src="/assets/HTwMb9w5dopJpxx2AEwc5fgFnVe.png" src-width="3252" src-height="1016" align="center"/>

### 『任务』跟进

任务列表，在客户已经分配的情况下，若客户的客户、入金等行为有变化，系统将自动创建任务提醒客户经理跟进。

<b>路径：</b>客户管理系统&gt;CRM&gt;任务

<b>操作：</b>点击不同任务节点，可展示该节点下的客户列表。

选择某个客户，点击【跟进】，可打开右侧弹层，将该客户的资料以卡片形式展示

<img src="/assets/Qaknb5rU2oq0z8xUBSBclTQDnb2.png" src-width="3256" src-height="1482" align="center"/>

点击【跟进记录】Tab 页，点击【添加跟进记录】，可录入一些互动标签说明

<img src="/assets/V6mwb6jSjoXyJRx0emwcyzJunUg.png" src-width="2242" src-height="1252" align="center"/>

<img src="/assets/RIbvbJCIEo6F25xe4oDcGrRlneh.png" src-width="2228" src-height="1612" align="center"/>

点击【资产/交易】Tab 页签，查看客户资产总览与近期出入金记录

<img src="/assets/I5CSbGDjzoPXsgxM60PcJd0nnUd.png" src-width="2216" src-height="1624" align="center"/>

点击【邀请关系】Tab 页签，查看邀请关系

<img src="/assets/Ggbmbox0QoRX7ixZZancOmHcnWe.png" src-width="2230" src-height="1608" align="center"/>

### 查看『今日完成』

客户经理在今日完成列表，可通过多种维度的图文展示，来查看自己今日跟进的客户数据和进展。今日完成列表主要展示客户进展、每日跟进、我的日报三个维度的信息。

<b>路径：</b>客户管理系统&gt;CRM&gt;今日完成

<b>操作：</b>客户进展，提供多种维度对比（开户数/入金数/待开户跟进数/待入金跟进数/TMT 注册跟进数/已入金跟进数）

<img src="/assets/Ohi1bmXnvo7KAdxznqYcZeGynLe.png" src-width="2322" src-height="1438" align="center"/>

每日跟进，支持在作业中间区域根据筛选条件查询出需要跟进的用户（客户）记录

<img src="/assets/FDnLbjuCkojcqkxXV1ac7mq8nFb.png" src-width="2322" src-height="1442" align="center"/>

我的日报，提供日报记录的功能，方便客务人员记录日报摘要

<img src="/assets/ZAZZbEpN2oynMVxlIWWcFrCrnXc.png" src-width="2322" src-height="1412" align="center"/>

