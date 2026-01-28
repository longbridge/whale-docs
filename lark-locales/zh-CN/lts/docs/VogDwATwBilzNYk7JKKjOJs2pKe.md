---
title: CRS 操作文档
slug: Zf8xwz6teiNduAkCSPmcEf1mn4b
sidebar_position: 2
---


# CRS 操作文档

本使用手册适用于 Longbridge Whale WBO 证券后台管理的管理员和使用成员使用。阅读此手册，你将了解 Whale WBO ‘CSR 文件’模组的作业功能操作

# CSR 文件操作说明

执行菜单：报表管理&gt;CRS 文件生成

- 注意： 租户需要 增加下列权限 才能操作 相关 CSR 文件

<img src="JSdTb0yFzoXn77xCnnXjnwoVpad" src-width="409" src-height="221" align="center"/>

<img src="LNwWb2GhpoxyNax4uksjXUyxpOg" src-width="1093" src-height="189" align="center"/>

整个 CSR 文件操作基本上 下列流程的顺序

<img src="G8uJbo0RdoSWRPxRPrqjikwfpwd" src-width="1674" src-height="934" align="center"/>

## <b>1. 计算收益</b>：

首先在右上角点选'计算收益' ，输入报送年度与编号（公司名称） 后就会产生文件制作的任务工作（ 在<b>任务列表</b> Tab 页签）

注意： 在计算收益视窗上，在外部报税文件上传的网站了会提供一个编号的，公司名称就是券商的公司名称，要跟外部报税系统里面名称要一致

<img src="HByIbj3FmohOwYxXjGMjfMF1p5b" src-width="2358" src-height="1346" align="center"/>

此时产生一个的系统任务，当系统任务完成后（这会需要点时间产生全年资料）， 当完成后系统会给予这批 CRS 数据一个 相同的‘<b>消息编号</b>'

<img src="OEOtblRhyou5itx6SHIjx79FpF3" src-width="1046" src-height="249" align="center"/>

也可以在任务列表 Tab 页签上 点选 纪录右侧操作区的【详情】，会自动切换 <b>CRS 数据</b> Tab 页签，可以查询数据资料或编辑修改

<img src="Jtp7bL3ckoFCA2xUetvjlUTBpUd" src-width="2442" src-height="135" align="center"/>

<img src="Y9HjbQUklozyqRxP3PRjQ4Impud" src-width="1280" src-height="616" align="center"/>

可根据需要 删除纪录（不报送） 或修改数据资料

<img src="KGqEbxchcoQe4HxGIhljBwFcpKg" src-width="2489" src-height="1621" align="center"/>

## <b>2. 生成文件</b>：

当 CSR 数据 Tab 页签上 查看或修改正确后， 系统会根据 数据的状态： 标记为

- CRS701 = The message contains new information ，指上传新数据

新消息[CRS701]：new[CRS701]

- CRS702 = The message contains corrections for previously sent information， 指更正或删除数据

更正消息[CRS702 ]：corrections[CRS702 ]

此时 可根据需要 先查询 下列条件后（以下 仅为参考示意）

输入： <b>年度 /消息类型/编号/批次/消息编号</b>  查询后。 生成文件的功能键就可以操作了

<img src="Ythfb5FS3optl0x5KDqjAvr6pbb" src-width="3243" src-height="1086" align="center"/>

就可以点选右上角【生成文件】就会产生一个的系统任务来产生报税规格的文档
（注意：这会需要点时间产生全年资料）

<img src="BulCb6ODEouLXnxJPGSj87Mmp3e" src-width="1047" src-height="309" align="center"/>

1. <b>文件下载</b>

当生成文件任务完成后，就可以点选下载档案，去外部网站传送了

（系统会称生一个 xml 附档名的文档）

<img src="Z6hrbJ0V3ol2mRxtAbmjkUfppOS" src-width="2480" src-height="540" align="center"/>

<img src="HGTsbSYLgoKUNOxGB7Fjo7eLpQb" src-width="581" src-height="667" align="center"/>

建议： 此文件不要自行编辑，容易误操作造成文档规格不对，无法上传

## <b>3. 生成文件上传</b>：

将上传到外部系统的一个 XML 文件。这文件在外部系统上传以后，在外部系统它会返回一个文件序列号，可以在任务列表 Tab 页签，更新状态把外部系统序列号输入

<img src="MnAWbxIgro9LFRxJV9qjt3DLpuf" src-width="2472" src-height="552" align="center"/>

<img src="La1SbMCAto7GtQxRiMzjaB5hp7b" src-width="2462" src-height="843" align="center"/>

这等于将产生的 CRS 数据 打上这批次的 文件序列号，方便以后对数据查询或更正已报送资料

<img src="EzpEbhFZkoCVFoxwUlxj1quCpGh" src-width="1039" src-height="334" align="center"/>

## <b>4. 更正资料再上传</b>：

正常情况下，已报送资料其状态是‘文件已报送'

<img src="LV8RbmqkvoJleExFh0NjIm7fp6b" src-width="1032" src-height="529" align="center"/>

当发现数据需要变更时，可以点选右侧 【编辑】 来操作修改数据

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>系统会产生一笔新数据，可以根据需要来修改</p>
</div>

或 【删除】 已报送数据，

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>系统会将删除那笔资料 变成已锁定状态</p>
</div>

此时后面一样操作方式输入： <b>年度 /消息类型/编号/批次/消息编号</b>  查询后。 生成文件的功能键就可以操作了

产生文件并上传报送网站，同样 也会取的最新的文件序列号，也一样更新即可

