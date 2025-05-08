---
title: 快速上手 - 牛熊證、債券回收、私有化（TM）
slug: ODm8wYemyiS9WZkNGUmcbZ3Qnlc
sidebar_position: 3
---


# 快速上手 - 牛熊證、債券回收、私有化（TM）

## 適用場景

直聯港交所的租戶（有 05 文件）

TM 包含牛熊證回收（含剩餘價值）、私有化、債券回收前置條件

股權回收和剩餘價值返還在同一時間執行

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>權限名稱</p></th><th><p>權限說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>CorporateActionReadOnly<br/>只讀公司行動、客戶明細、在途資金、美股期權、費用規則的權限<br/>CorporateActionFull<br/>管理公司行動、客户明細、在途資金、美股期權、費用規則的權限</p></td><td></td></tr>
</tbody>
</table>

## 操作說明 

### 预告和方案的<b>創建</b>

結算人員每天導入上日下午的 05 文件和 02 文件
當天晚上執行公司行動的券商，在當日晚上導入文件
第二天執行公司行動的券商，在第二日上午導入文件
導入文件並解析成功後，系統將執行自動創建流程，10 左右可以完成創建

系統將基於導入的 05 文件，在登記日生成有持倉的公司行動

<img src="/assets/Q99LblRovo7XQfxRZHlcyXRvnpL.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/D8ySbDGmXovrJCxMBPucKcEGnYc.png" src-width="3570" src-height="1780" align="center"/>

<img src="/assets/NJHtbch0Ioz9n3xUYI5cyi62nVw.png" src-width="3570" src-height="1780" align="center"/>

### <b>登記</b>

在 CCASS 返還剩餘價值（CCASS 支付日期）<b>當天晚上或者下一天</b>可以開始操作公司行動
例子：CCASS 支付日期=2024-02-05，可以在 5 號晚上，或者 6 號早上執行

點擊【登記】。路径：公司行动 - 公司行动 - 详情

<img src="/assets/Qpp1beyxvoUHzdxx7OucgLkxniV.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/VRIZbZd6DoPYUkxBi20cyOrNnth.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/PB6Bb5G1fo8xI4xsbDQcEpEQnFh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/RhOFb9j9aohJClxGRFDcV9sAnwg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/QSS3bAsxaos0zUxeICgc7GOunxh.png" src-width="3548" src-height="1806" align="center"/>

### <b>尾差處理</b>

如果券商支付的資金需要對齊 CCASS 的值，可進行尾差處理

<b>點擊尾差調整</b>

<img src="/assets/SCUvbLVvdoIilkxef7bcxMDTnVh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/D9o7bNMaOoDXRYxmlNBcMMW0nEg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/GfWnbJ5Ksoxm1wxaqaIcKQ8xnad.png" src-width="3548" src-height="1806" align="center"/>

### 4.<b>執行</b>

登記成功（或尾差處理完畢後），點擊提交執行開始執行公司行動

執行時分執行提交和執行審覈兩步，推薦雙人操作

<b>點擊提交執行</b>

<img src="/assets/YJQdbo4x2o6WCRxyg9rcsQ3Rnrd.png" src-width="3548" src-height="1806" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/ODeybr9Piovli1xJx85ctpPsnEe.png" src-width="3548" src-height="1806" align="center"/>

<p>提交後可通過系統數據進一步覈對持倉、股份轉出、收費</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/Sm8lbFDj9oMWDwxRwfccpEBUnox.png" src-width="3548" src-height="1806" align="center"/>

<p>覈對無誤後正式提交執行</p>
</div>
</div>

<b>點擊執行復核</b>

<img src="/assets/RGhEbfK0bo3lTbx6dzhcQdmunIe.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/Fp9bbFmOwoeAElxmtZecoeq3nxb.png" src-width="3548" src-height="1806" align="center"/>

