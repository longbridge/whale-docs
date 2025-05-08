---
title: 快速上手 - 牛熊证、债券回收、私有化（TM）
slug: ODm8wYemyiS9WZkNGUmcbZ3Qnlc
sidebar_position: 3
---


# 快速上手 - 牛熊证、债券回收、私有化（TM）

## 适用场景

直联港交所的租户（有 05 文件）

TM 包含牛熊证回收（含剩余价值）、私有化、债券回收前置条件

股权回收和剩余价值返还在同一时间执行

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

结算人员每天导入上日下午的 05 文件和 02 文件
当天晚上执行公司行动的券商，在当日晚上导入文件
第二天执行公司行动的券商，在第二日上午导入文件
导入文件并解析成功后，系统将执行自动创建流程，10 左右可以完成创建

系统将基于导入的 05 文件，在登记日生成有持仓的公司行动

<img src="/assets/Q99LblRovo7XQfxRZHlcyXRvnpL.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/D8ySbDGmXovrJCxMBPucKcEGnYc.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/NJHtbch0Ioz9n3xUYI5cyi62nVw.png" src-width="3570" src-height="1780" align="center"/>

### <b>登记</b>

在 CCASS 返还剩余价值（CCASS 支付日期）<b>当天晚上或者下一天</b>可以开始操作公司行动
例子：CCASS 支付日期=2024-02-05，可以在 5 号晚上，或者 6 号早上执行

点击【登记】。路径：公司行动 - 公司行动 - 详情

<img src="/assets/Qpp1beyxvoUHzdxx7OucgLkxniV.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/VRIZbZd6DoPYUkxBi20cyOrNnth.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/PB6Bb5G1fo8xI4xsbDQcEpEQnFh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/RhOFb9j9aohJClxGRFDcV9sAnwg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/QSS3bAsxaos0zUxeICgc7GOunxh.png" src-width="3548" src-height="1806" align="center"/>

### <b>尾差处理</b>

如果券商支付的资金需要对齐 CCASS 的值，可进行尾差处理

<b>点击尾差调整</b>

<img src="/assets/SCUvbLVvdoIilkxef7bcxMDTnVh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/D9o7bNMaOoDXRYxmlNBcMMW0nEg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/GfWnbJ5Ksoxm1wxaqaIcKQ8xnad.png" src-width="3548" src-height="1806" align="center"/>

### 4.<b>执行</b>

登记成功（或尾差处理完毕后），点击提交执行开始执行公司行动

执行时分执行提交和执行审核两步，推荐双人操作

<b>点击提交执行</b>

<img src="/assets/YJQdbo4x2o6WCRxyg9rcsQ3Rnrd.png" src-width="3548" src-height="1806" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/ODeybr9Piovli1xJx85ctpPsnEe.png" src-width="3548" src-height="1806" align="center"/>

<p>提交后可通过系统数据进一步核对持仓、股份转出、收费</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/Sm8lbFDj9oMWDwxRwfccpEBUnox.png" src-width="3548" src-height="1806" align="center"/>

<p>核对无误后正式提交执行</p>
</div>
</div>

<b>点击执行复核</b>

<img src="/assets/RGhEbfK0bo3lTbx6dzhcQdmunIe.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/Fp9bbFmOwoeAElxmtZecoeq3nxb.png" src-width="3548" src-height="1806" align="center"/>

