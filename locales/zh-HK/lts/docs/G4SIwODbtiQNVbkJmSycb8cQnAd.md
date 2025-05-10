---
title: 功能介紹
slug: G4SIwODbtiQNVbkJmSycb8cQnAd
sidebar_position: 2
---


# 功能介紹

## 概述

臨時調賬主要支持功能包含 創建調賬 和 失效調賬，滿足盤中臨時對客戶資產（現金/股票/期權）進行調增或調减操作，讓客户先完成下單，並支持事後將錢/券失效掉。

注：臨時調賬的資產在客戶的業務賬戶，對客戶來說該部分資產可用不可提。且臨時調賬流水不會在客戶端及結單展示。

## 操作說明

### 1.調賬查詢

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>臨時調賬  &gt; 調賬查詢</p>
</div>

<b>菜單功能介紹</b>：該菜單支持查詢所有的臨時調賬記錄及創建臨時調賬。

1. 列表頁展示所有類型的臨時調賬，可以通過篩選“調賬類型”查看不同類型的調賬記錄；在調賬查詢主頁面點擊【臨時調賬】，即可打開新增臨時調賬彈窗頁面

<img src="/assets/DRd3bq6oOoK9X6xSCfIcn0xPn5g.png" src-width="1280" src-height="640" align="center"/>

1. 填寫調賬信息頁面（以新增現金臨時調賬為例，如下圖）
    1. 業務類型和調賬類型綁定，只需選擇業務類型即可。現金臨時調賬默認對應入賬，現金臨時調減默認對應出賬
    2. 臨時調賬需要設定有效期，在到期後臨時調賬會自動失效

<img src="/assets/DUgCb15CjoSNRfxEsT0c3pZWnnb.png" src-width="1280" src-height="744" align="center"/>

1. 填寫完調賬信息後點擊【確定】即可完成，並可以在列表頁面查看到已創建的記錄；同時在「調賬清算」頁面也會創建一條狀態為“已調賬”的記錄

<img src="/assets/FDzEbMG1Hoh10LxjSRfcNEFQnMd.png" src-width="3324" src-height="1920" align="center"/>

### 2.調賬清算

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>臨時調賬  &gt; 調賬清算</p>
</div>

<b>菜單功能介紹</b>：該菜單支持失效臨時調賬。

1. 在調賬清算主頁面可以查看所有已失效和待失效的臨時調賬記錄，可以篩選“狀態”查看不不同狀態的記錄；點擊【失效】並進行二次確認後即可對當筆調賬完成失效

<img src="/assets/R0p2bqDE2oVWJLxmOBMcSzkFnEf.png" src-width="1280" src-height="657" align="center"/>

