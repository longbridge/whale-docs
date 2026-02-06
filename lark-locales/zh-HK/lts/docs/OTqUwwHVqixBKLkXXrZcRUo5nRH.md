---
title: 系統介紹
slug: OTqUwwHVqixBKLkXXrZcRUo5nRH
sidebar_position: 5
---


# 系統介紹

# 概述

Whale 經紀人管理模塊提供了對經紀人與客戶關系的管理，以及經紀人和團隊的管理功能。

## 關係管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 經紀人管理&gt; 關係管理</p>
</div>

支持根據經紀人查詢該經紀人名下客戶，或者直接查詢某個客戶；

<img src="/assets/SGjAbLmMCoTCD2xdYkgj0P0xpWc.png" src-width="3346" src-height="1104" align="center"/>

查詢到客戶，即可以進行操作【解除經紀人關係】及【轉移至其他經紀人】

在客戶變更或分配經紀人操作時，支持郵件推送通知客戶（可選項）

<img src="/assets/DeydbMTy0oCzqrxjvKLjdWSJpOh.png" src-width="3352" src-height="1362" align="center"/>

## 團隊與經紀人

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 經紀人管理&gt; 團隊與經紀人&gt;團隊管理</p>
</div>

<img src="/assets/Ql2VbmV6ZoZEG8x3JIwj6R5CpOZ.png" src-width="3348" src-height="1584" align="center"/>

首先在團隊與經紀人管理中的「團隊管理」可以新增經紀團隊，目前系統在團隊類型上分成：經紀人/營銷團隊

<img src="/assets/GhGpbcUIXoJnChxyPfcjcw7vpQd.png" src-width="3370" src-height="1442" align="center"/>

創建成功後，可以在顯示記錄的右側操作區進行操作： 「詳情」/「編輯」/「凍結」

<img src="/assets/Whuyba0d3oNTRYxzo5Aji5jkpPf.png" src-width="3366" src-height="1532" align="center"/>

## 經紀人管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 經紀人管理&gt; 團隊與經紀人&gt;經紀人管理</p>
</div>

點擊右上方「新建」可建立經紀人資料，創建經紀人成功後，系統會自動同步創建後台用戶帳號（經紀人帳號可以登錄WTT客戶端）

<img src="/assets/Ed2YbirGWoVxEfxlLmFjk4gmp0d.png" src-width="3350" src-height="1690" align="center"/>

注意： 系統在創建經紀人時，經紀人的券商郵箱號是唯一校驗的判斷

創建成功後，可以在顯示記錄的右側操作區進行操作： 「詳情」/「編輯」/「凍結」/「下級管理」

<img src="/assets/M0NcbWecQoRyIgxPYvQj941Lpif.png" src-width="3362" src-height="1562" align="center"/>

「編輯」在修改經紀人分傭套餐時，支持同步修改其下客戶的分傭套餐配置（可選項）

<img src="/assets/Vv07bzgIrozWw1xO9h1j5eNIplh.png" src-width="936" src-height="1662" align="center"/>

「凍結」，凍結經紀人操作後，該經紀人將無法使用賬號登錄WTT；

「下級管理」，該功能已遷移至“身份管理&gt;人員管理”，查到對應的經紀人用戶進行“數據權限”的編輯；

<img src="/assets/QHV4bz6xfoz4wFxLbUmj53XXp0b.png" src-width="3422" src-height="1840" align="center"/>

在經紀人管理上新增經紀人配置：開通帳戶時，若未人工分配經紀人，系統預設分配給指定經紀人；

<img src="/assets/StYrbVwdJoYolMxW4JXjlWTepOf.png" src-width="3370" src-height="1226" align="center"/>

在查詢組件上：支持按經紀人編號或經紀人名稱查詢

## 分成套餐設置

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 經紀人管理&gt; 分成管理</p>
</div>

此功能是設置/修改經紀人的分成佣金套餐，提供佣金計算後查詢/分成管理/佣金套餐配置

<img src="/assets/MgCHbfHZkoL1o9xo8vGjFnvVpHe.png" src-width="3584" src-height="1738" align="center"/>

### <b>新增分成套餐</b>

可以在右上角， 點擊【新增】，新增一筆分成佣金套餐

<img src="/assets/GeWnbSE0EoCbJaxjhANjTiCLpTe.png" src-width="3584" src-height="1738" align="center"/>

先填寫套餐主體信息

特殊字段說明：

分傭對象設置（ 劵商或經紀人）：決定配置的算法對哪個對象生效（先算哪一個）

允許虧損字段（：決定在分傭金額&gt;佣金时的處理方案，允许虧损的，計算金額可大于佣金）

<img src="/assets/CwyWbWbO7oZOP0xm62KjCsWnppc.png" src-width="3584" src-height="1738" align="center"/>

點解添加規則後，可分別針對股票、期權等單獨設置套餐規則

字段說明

計費方式：決定用佣金（OR交易金額）*費率算分傭金額
階梯統計基準：決定用佣金（OR交易金額）進行階梯的劃分

跨階梯處理方式：決定將統計基準統一用一個費率計算 OR 拆分成多端計算

注意：

分傭幣種和佣金幣種不一致時，分傭的金額會根據匯率轉換為分傭幣種

階梯的範圍為左開（不含）右閉（含）

階梯收費的最低、最高收費和主頁面最低最高收費的關係

階梯收費總體算出一個分傭金額後，再和主頁面進行比較

<img src="/assets/Q7bxboaLPoiOA7xLUT7jUIxipUf.png" src-width="3584" src-height="1738" align="center"/>

案例1：按佣金總額的1%設置分成套餐，最低收費2HKD，最高收費50HKD

<img src="/assets/BGY6bkoS5oxSyBxpuuLjZYumple.png" src-width="3584" src-height="1738" align="center"/>

案例2：按照單筆合約的交易金額進行階梯分傭，將交易金額拆分到每個階梯分別算

交易金額為5000的，1000按第一個階梯計費，4000（5000-1000）按第二個階梯計費

<img src="/assets/VLgdbpOCyoPqlGxigNKjdAC7pZf.png" src-width="3584" src-height="1738" align="center"/>

案例3：按照單筆合約的交易金額進行階梯分傭，交易金額在哪一個階梯，統一用哪個階梯計費

交易金額為5000的，統一按第二個階梯計費

<img src="/assets/EBExbYpktotLOjxy8AsjsjT2pTg.png" src-width="3584" src-height="1738" align="center"/>

### 開戶時自動分配經紀人套餐

設置完分成套餐後，在經紀人管理頁面可以設置默認的分成套餐

開戶時，如果用戶分配給該經紀人，則該用戶的默認分成套餐將為該客戶

<img src="/assets/JBYPb6qNGoRvg8xs5sOj6qU1ptk.png" src-width="3584" src-height="1738" align="center"/>

### 設置客戶級別分成套餐

在計費和分成管理可以通過批量、單筆的方式，修改客戶的分成套餐

<img src="/assets/MbUlbjv87onP9AxpWKAjtkbuplh.png" src-width="3584" src-height="1738" align="center"/>

## 分傭明細查詢操作说明

### 分傭明細查詢

菜單：經紀人管理&gt; 經紀人分成管理 &gt;佣金分成明細查詢

日切成功後，系統會觸發分傭計算任務（異步任務）

<img src="/assets/VABkbYgUWo9O5uxgObKjW6SppUf.png" src-width="3584" src-height="1738" align="center"/>

查詢經紀人名下客戶的分佣套餐佣金，是以帳務日期與交易幣種作查詢條件， 支持日/月/年的週期報表查詢（报表管理-佣金报表），點擊【導出】可將查詢的資料導出

<img src="/assets/Ytm5bdC1ro8sCoxaUr1jjDp9pUc.png" src-width="3584" src-height="1738" align="center"/>

