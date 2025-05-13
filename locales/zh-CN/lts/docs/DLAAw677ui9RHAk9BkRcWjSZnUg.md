---
title: 业务介绍
slug: DLAAw677ui9RHAk9BkRcWjSZnUg
sidebar_position: 0
---


# 业务介绍

## 概述

公司行动系统是证券后台的重要组成部分，主要用于处理公司股权变动相关业务，包括分红、拆合股、换股等。

目前，公司行动系统已支持牛熊证回收、拆合股、分红、供股、邀约、ADR 等多类型。WTT 前台公司行动页面仅支持查看客户相关处理明细，咱不支持操作处理相关业务。

## 名词释义

<table header_column="1" header_row="1">
<colgroup>
<col width="203"/>
<col width="719"/>
</colgroup>
<thead>
<tr><th><p><b>术语/ 缩略词</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>预告编号<br/>公告编号</p></td><td><p>上手的预告编号，具有唯一性<br/>港股为 A 开头的编号</p></td></tr>
<tr><td><p>预告类型 Announcement Type</p></td><td><p>枚举：TM/OO/EO/BE 等各类型公司行动</p></td></tr>
<tr><td><p>选择开始时间 Election From</p></td><td><p>执行方式为可选择的必须填写<br/>必须到这个时间点才能<em>进行行权指令收集</em></p></td></tr>
<tr><td><p>选择结束时间 Client Election To</p></td><td><p>执行方式为可选择的必须填写<br/>C 端客户操作结束时间</p></td></tr>
<tr><td><p>选择结束时间（CCASS）Election To（CCASS）</p></td><td><p>执行方式为可选择的必须填写<br/>上手券商选择结束日期</p></td></tr>
<tr><td><p>支付日期 Payable Date</p></td><td><p>决定执行的流水展示在那一天</p>
<ul>
<li>预告编辑时必须&gt;=当前账务日期</li>
<li>执行时进行更进一步校验 2 天内</li>
</ul></td></tr>
<tr><td><p>创建时间 Created Time</p></td><td><p>预告在公司行动系统内创建的时间</p></td></tr>
<tr><td><p>更新时间 Updated Time</p></td><td><p>预告在公司行动系统内创建的时间</p></td></tr>
<tr><td><p>执行方式</p></td><td><p>描述公司行动流程推进是否需要客户参与行权，分为强制执行和可选择（自愿类）</p>
<ul>
<li>BE 类可以让客户参与（选股选息），也可以不让客户参与</li>
<li>供股、要约的必须让客户参与</li>
</ul></td></tr>
<tr><td><p>过户费收取 Is Scrip Fee</p></td><td><p>决定是否收取过户费</p></td></tr>
<tr><td><p>派发 NOMINEE</p></td><td><p>派股、供股等才生效，决定新派发的股票是否在将来的公司行动中需要收取过户费，STREET 需要收取，NOMINEE 不需要收取</p></td></tr>
</tbody>
</table>

