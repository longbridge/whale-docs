---
title: CRS 操作文档
slug: Zf8xwz6teiNduAkCSPmcEf1mn4b
sidebar_position: 2
---


# CRS 操作文档

本使用手册适用于 Longbridge Whale WBO 证券后台管理的管理员和使用成员使用。阅读此手册，你将了解 Whale WBO‘CSR 文件’模组的作业功能操作

<table>
<colgroup>
<col width="83"/>
<col width="151"/>
<col width="99"/>
<col width="370"/>
</colgroup>
<tbody>
<tr><td colspan="4"><h4>文档编辑历史</h4></td></tr>
<tr><td><p><b>版本</b></p></td><td><p><b>日期</b></p></td><td><p><b>编辑人</b></p></td><td><p><b>变更内容</b></p></td></tr>
<tr><td><p>V1.0</p></td><td><p>2023 年 9 月 5 日</p></td><td></td><td><p>第一版产生</p></td></tr>
</tbody>
</table>

# CSR 文件操作说明

执行菜单：报表管理&gt;CRS 文件生成

- 注意：租户需要 增加下列权限 才能操作 相关 CSR 文件

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[24%]" width-ratio="24">
<img src="/assets/KUuObQsQioYGCHxrxbqczTRXnMb.png" src-width="409" src-height="221"/>
</div>
<div class="w-[75%]" width-ratio="75">
<img src="/assets/GQxmbTqi4o6XYexjd4Zcnr0dnZb.png" src-width="1093" src-height="189"/>
</div>
</div>

整个 CSR 文件操作基本上 下列流程的顺序

### <b>计算收益</b>： 

<img src="/assets/DlE4bukIfossTwxpS0OcoQITnWh.png" src-width="2358" src-height="1346" align="center"/>

此时产生一个的系统任务，当系统任务完成后（这会需要点时间产生全年资料），当完成后系统会给予这批 CRS 数据一个 相同的‘<b>消息编号</b>'

<img src="/assets/FDDQbkabGoiWP4xSUWGcuDvlnjf.png" src-width="1046" src-height="249" align="center"/>

 也可以在任务列表 Tab 页签上 点选 纪录右侧操作区的【详情】，会自动切换<b> CRS 数据</b> Tab 页签，可以查询数据资料或编辑修改

<img src="/assets/MFONb5V5gocnmfx9W9ac93NMnud.png" src-width="2442" src-height="135" align="center"/>

<img src="/assets/VArCbYj7ioZEpTxU5cqcr3F5n0g.png" src-width="1280" src-height="616" align="center"/>

可根据需要 删除纪录（不报送）或修改数据资料

<img src="/assets/O2SPbe0FxoNuysxmAOjcI0aSn8g.png" src-width="2489" src-height="1621" align="center"/>

### <b>生成文件</b>： 

<img src="/assets/UYcTbGL5Lo2QikxjzJhcDrT1nOc.png" src-width="1047" src-height="309" align="center"/>

1. <b>文件下载</b>

当生成文件任务完成后，就可以点选下载档案，去外部网站传送了

（系统会称生一个 xml 附档名的文档）

<img src="/assets/YWc1blCkWoBYzixoIUDc7KXFn3f.png" src-width="2480" src-height="540" align="center"/>

<img src="/assets/EHMHbjie5oohKQx3MdIc4DGqnMq.png" src-width="581" src-height="667"/>

建议：此文件不要自行编辑，容易误操作造成文档规格不对，无法上传

### <b>生成文件上传</b>： 

将上传到外部系统的一个 XML 文件。这文件在外部系统上传以后，在外部系统它会返回一个文件序列号，可以在任务列表 Tab 页签，更新状态把外部系统序列号输入

<img src="/assets/UAs2bxuKJocDeoxh5rdcDysKnQh.png" src-width="2472" src-height="552" align="center"/>

<img src="/assets/BBYlbKsZJorlcZxw2JMcVZ4knAe.png" src-width="2462" src-height="843" align="center"/>

这等于 将 产生的 CRS 数据 打上这批次的 文件序列号，方便以后对数据查询或更正已报送资料

<img src="/assets/LVdtbT9Z7oD82zx9eDFcNwCVnG4.png" src-width="1039" src-height="334" align="center"/>

### <b>更正资料再上传</b>： 

正常情况下，已报送资料其状态是‘文件已报送'

<img src="/assets/VzvlbmynnosO9uxKH4YcVZm7nob.png" src-width="1032" src-height="529" align="center"/>

当发现数据需要变更时，可以点选右侧【编辑】来操作修改数据

> 系统会产生一笔新数据，可以根据需要来修改

或【删除】已报送数据，

> 系统会将删除那笔资料 变成已锁定状态

此时后面一样操作方式输入： <b>年度 /消息类型/编号/批次/消息编号  </b>查询后。生成文件的功能键就可以操作了

产生文件并上传报送网站，同样 也会取的最新的文件序列号，也一样更新即可

