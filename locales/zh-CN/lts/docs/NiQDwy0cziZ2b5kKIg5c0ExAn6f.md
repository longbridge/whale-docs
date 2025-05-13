---
title: '快速上手 - 自愿类红股红利（BE） '
slug: NiQDwy0cziZ2b5kKIg5c0ExAn6f
sidebar_position: 2
---


# 快速上手 - 自愿类红股红利（BE） 

## 适用场景

- 直联港交所的租户（有 05 文件）
- 自愿类 BE（执行方式为可选择），含选股选息、多币种选择

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

### 预告和方案的自动<b>创建</b>

结算人员在每天的早上，导入上日下午的 05 文件和 02 文件

导入文件并解析成功后，系统将执行自动创建流程，10 左右可以完成创建

系统将基于导入的 05 文件，在登记日生成有持仓的公司行动

<img src="/assets/GFMtbCC0XoANvgx0gfNccXdcnpb.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/PAOqbrABuot7epx1sHRcOARfnPh.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/CEVGb5sLTohw2XxrRE1cmwYhnKc.png" src-width="3570" src-height="1780" align="center"/>

### <b>登记</b>

在选择开始日期可以操作公司行动

<b>点击【登记】。</b>路径：公司行动 - 公司行动 - 详情
注意：选股选息中选择多方案的会合并收费，哪个行权多的，会按哪个收费。在配置收费时 BE-CASH DIVIDEND 和 BE-SCRIP DIVIDEND 的务必保持一致

<img src="/assets/WFfKbbs8WodsL8xIadOcTRFZnBe.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/Xjq7bMpE3o6gT0x3mZ0cxvFAnBd.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/HepEbK89KoH21uxNxrqcjzKFnzd.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/N1vMbSwq5oMPyNxEQhmcjGUfnrb.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/TeCwbSaVVomK38xlytnc2qj2nkd.png" src-width="3548" src-height="1806" align="center"/>

### 通知客户

在选择开始时间到选择结束时间之间，<b>点击【行权指令收集】</b>

路径：公司行动 - 公司行动 - 详情 - 行权指令收集

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/HDhjblIJFoN36wxib6wcyQq4nOb.png" src-width="3548" src-height="1806" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/XtoKb2qPxoP5AJxLvaOcIzJPnFg.png" src-width="3548" src-height="1806" align="center"/>
</div>
</div>

### 客户行权和后台行权

客户在 App 操作行权后，可在明细汇总跟踪到操作记录

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/AUuqbv5CLoPb7dx47TMcN6VOnsd.png" src-width="3548" src-height="1806" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/OngTbpWMhoMaDzxbA8McTrf0nyd.png" src-width="3548" src-height="1806" align="center"/>
</div>
</div>

结算人员可在后台操作行权

路径：公司行动 - 公司行动 - 详情 - 客户明细 - 详情 - 行权

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/PYslbY6LGoK7DNxtMZWcBFVMnog.png" src-width="3548" src-height="1806" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/OUEyb0Cwioyn5HxJXHOcRFoznhd.png" src-width="3548" src-height="1806" align="center"/>
</div>
</div>

<img src="/assets/AnsQbGQ5lo25c2x4N6ncR1dXnZb.png" src-width="3548" src-height="1806" align="center"/>

### <b>尾差处理</b>

如果券商支付的资金需要对齐 CCASS 的值，可进行尾差处理

<b>点击尾差调整</b>

<img src="/assets/ES6Abuzy2o4SGZxC21kci0ADnCR.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/NlZ6b6c9Iolb9jxPJcMcVTxYnWg.png" src-width="3548" src-height="1806" align="center"/>

### 4.<b>执行</b>

登记成功（或尾差处理完毕后），点击提交执行开始执行公司行动

执行时分执行提交和执行审核两步，推荐双人操作

<b>点击提交执行（Maker）</b>

<img src="/assets/TExJbl4bEoGD6dxXCV1c7suonLb.png" src-width="3548" src-height="1806" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/F0KObd9ZIoab9NxSeeOcDVJFnAf.png" src-width="3548" src-height="1806" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/HTBybAtm0o0KOGxwTwWcgAFanHg.png" src-width="3548" src-height="1806" align="center"/>

</div>
</div>

<b>点击执行复核（Checker）</b>

<img src="/assets/FOzcbkIZcofuDfxwrfLcsfRDnUb.png" src-width="3548" src-height="1806" align="center"/>

