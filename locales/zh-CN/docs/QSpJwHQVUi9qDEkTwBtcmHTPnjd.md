---
title: 快速上手 - 股东大会（VT）
slug: QSpJwHQVUi9qDEkTwBtcmHTPnjd
sidebar_position: 4
---


# 快速上手 - 股东大会（VT）

## 适用场景

- 证券投资者希望参与上市公司的年度股东大会时，可通过在 Whale 登记自己的参与方式与投票信息。

## 前置条件

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>权限名称</p></th><th><p>权限说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>CorporateActionReadOnly<br/>只读公司行动、客户明细、在途资金、美股期权、费用规则的权限<br/>CorporateActionFull<br/>管理公司行动、客户明细、在途资金、美股期权、费用规则的权限</p></td><td></td></tr>
</tbody>
</table>

## 操作说明 

### 预告和方案的<b>创建</b>

- 自动创建

结算人员在每天的早上，导入上日下午的 05 文件和 02 文件

导入文件并解析成功后，系统将执行自动创建流程，10 a.m 左右可以完成创建

系统将基于导入的 05 文件，在登记日生成有持仓的公司行动

<img src="/assets/QScKbf7lFoT4U3xF4yMctKHsnDh.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/E8zvbDoMQo2TVexZVO4c4aUXngb.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/U59db0skioQlwKxlTWWceS5tn1f.png" src-width="3570" src-height="1780" align="center"/>

- 手动创建

选择新建后，在弹窗内依次输入必填字段后点击确定即可创建预告

<img src="/assets/Ce4qb1njroBcwGxGbPtc1t9pnxg.png" src-width="2860" src-height="1300" align="center"/>

需要在创建成功的预告内，补充必填的时间字段，如下图所示

<img src="/assets/LggRbWWULoOQVux6pE4cEJpWnSI.png" src-width="2010" src-height="1232" align="center"/>

<img src="/assets/BVwqbiQj5o5tL6xUIMzchBN9ndg.png" src-width="1998" src-height="642" align="center"/>

### 维护会议资讯

会议资讯是股东大会的重要内容，如果是系统自动创建，会议资讯会自动生成，如果是手动创建则需要用户手动维护对应的会议资讯。

点击“会议资讯”区域下的「创建」进行新增资讯

<img src="/assets/Nee9b0xHnoEdCixbMdycnnEWnkb.png" src-width="1437" src-height="657" align="center"/>

<img src="/assets/JVOdbodHeo4fVNxYHEpclUE0nGe.png" src-width="2864" src-height="1320" align="center"/>

### <b>补充客户明细</b>

在预告中的登记日期后，用户需要根据客户是否参与以及参与的方式补充客户明细。根据股东大会的要求，客户有 3 种方式进行参与，如图所示

<img src="/assets/BWMObECcWooBLXxLNQYcPzRwnuc.png" src-width="1986" src-height="796" align="center"/>

点击「新增」，可以手动添加需要参会的客户信息

<img src="/assets/IJbqb2UPsoavqwxF9qnculM2n2b.png" src-width="2012" src-height="1212" align="center"/>

填写好所有的客户信息后，可在客户明细 tab 进行全局查看，如图所示

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/O5A1blW3Podxgcx9i6Ec1UVqnQd.png" src-width="1940" src-height="890" align="center"/>

<p>委托投票</p>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/VY5ZbasJIohjRgxYkHbckoxtnTe.png" src-width="1970" src-height="898" align="center"/>

<p>本人出席</p>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/G7Vvb94ZLo6iBIxFeT1cSiTMnsb.png" src-width="1952" src-height="858" align="center"/>

<p>委托出席</p>
</div>
</div>

### 4.<b>执行</b>

确认好所有的客户明细已经维护后，需要在投票截止时间（CCASS）日期前操作「执行」，执行后预告下出来不参与的客户，选择以“委托投票”、“本人出席”、“委托出席”的客户将会收取 50HKD 每人。收费详情可以在结单报表中查看。报表下载入口如下

<img src="/assets/V06gbU2syoaZkLxoPUycFCN9nCe.png" src-width="2012" src-height="1232" align="center"/>

