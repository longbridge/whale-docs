---
title: 业务介绍
slug: IhPvwXVD6ifTdgklF7FjrkGLpHe
sidebar_position: 0
---


# 业务介绍

Document original - 原始文档

Creator - chuanyuan.chen@longbridge-inc.com

---

# 概述

公司行动系统是证券后台的重要组成部分，主要用于处理公司股权变动相关业务，包括分红、拆合股、换股等
目前，公司行动系统已支持牛熊证回收、拆合股、分红、供股、邀约、ADR等多类型

# 名词释义

<table header_column="1" header_row="1">
<colgroup>
<col width="232"/>
<col width="547"/>
</colgroup>
<thead>
<tr><th><p><b>术语/ 缩略词</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>登记日Record Date</p></td><td><p>分股分红的登记日，拆合股的生效日<br/>系统基于此获取持仓客户</p></td></tr>
<tr><td><p>除权日 Ex Dividend Date</p></td><td><p>在除权日前一天结算后，仍持有该股票的投资者会自动参与该公司行动。例如股票派息的话, 除权日当天开市时会自动将公布会派出的利息于股价扣减<br/>美股公司行动等会将除权日转化为登记日，系统实际交互以登记日为准</p></td></tr>
<tr><td><p>预告编号<br/>公告编号</p></td><td><p>上手的预告编号，具有唯一性<br/>港股为A开头的编号</p></td></tr>
<tr><td><p>预告类型Announcement Type</p></td><td><p>枚举：TM/OO/EO/BE 等各类型公司行动</p></td></tr>
<tr><td><p>选择开始时间Election From</p></td><td><p>执行方式为可选择的必须填写<br/>必须到这个时间点才能<em>进行行权指令收集</em></p></td></tr>
<tr><td><p>选择结束时间Client Election To</p></td><td><p>执行方式为可选择的必须填写<br/>C端客户操作结束时间</p></td></tr>
<tr><td><p>选择结束时间（CCASS）Election To（CCASS）</p></td><td><p>执行方式为可选择的必须填写<br/>上手券商选择结束日期</p></td></tr>
<tr><td><p>支付日期Payable Date</p></td><td><p>决定执行的流水展示在那一天</p>
<ul>
<li>预告编辑时必须&gt;=当前账务日期</li>
<li>执行时进行更进一步校验2天内</li>
</ul></td></tr>
<tr><td><p>创建时间Created Time</p></td><td><p>预告在公司行动系统内创建的时间</p></td></tr>
<tr><td><p>更新时间Updated Time</p></td><td><p>预告在公司行动系统内创建的时间</p></td></tr>
<tr><td><p>执行方式</p></td><td><p>描述公司行动流程推进是否需要客户参与行权，分为强制执行和可选择（自愿类）</p>
<ul>
<li>BE类可以让客户参与（选股选息），也可以不让客户参与</li>
<li>供股、要约的必须让客户参与</li>
</ul></td></tr>
<tr><td><p>过户费收取 Is Scrip Fee</p></td><td><p>决定是否收取过户费</p></td></tr>
<tr><td><p>派发NOMINEE</p></td><td><p>派股、供股等才生效，决定新派发的股票是否在将来的公司行动中需要收取过户费，STREET需要收取，NOMINEE不需要收取</p></td></tr>
</tbody>
</table>

