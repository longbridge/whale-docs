---
title: 分成管理
slug: C7wvwc1tBiN0PdkTCYScD7mEnue
sidebar_position: 2
---


# 分成管理

## 適用场景

分成套餐設置

客戶級別的經紀人分成套餐查詢和修改

分佣明细查询

## 前置条件

完成經紀人相關設置

## 分成套餐設置操作说明

菜單：經紀人管理&gt; 經紀人分成管理 

菜單：經紀人管理&gt; 團隊與經紀人&gt;經紀人管理

此功能是設置/修改經紀人的分成佣金套餐，提供佣金計算後查詢/分成管理/佣金套餐配置

<img src="/assets/Qzpkb0MZAo9vQ0xGtNGc3MGnnse.png" src-width="3584" src-height="1738" align="center"/>

### <b>新增分成套餐</b>

可以在右上角，點擊【新增】，新增一筆分成佣金套餐

<img src="/assets/FavebviC0ot26nxBMWdc6pCwnNg.png" src-width="3584" src-height="1738" align="center"/>

先填寫套餐主體信息

特殊字段說明：
- 分傭對象設置（劵商或經紀人）：決定配置的算法對哪個對象生效（先算哪一個）
- 允許虧損字段（：決定在分傭金額&gt;佣金时的處理方案，允许虧损的，計算金額可大于佣金）

<img src="/assets/Kk5EbBXjQoHHhfxKt8Ic8h3FnJg.png" src-width="3584" src-height="1738" align="center"/>

點解添加規則後，可分別針對股票、期權等單獨設置套餐規則

字段說明

計費方式：決定用佣金（OR 交易金額）*費率算分傭金額

階梯統計基準：決定用佣金（OR 交易金額）進行階梯的劃分

跨階梯處理方式：決定將統計基準統一用一個費率計算 OR 拆分成多端計算

注意：
- 分傭幣種和佣金幣種不一致時，分傭的金額會根據匯率轉換為分傭幣種
- 階梯的範圍為左開（不含）右閉（含）
- 階梯收費的最低、最高收費和主頁面最低最高收費的關係
    - 階梯收費總體算出一個分傭金額後，再和主頁面進行比較

<img src="/assets/P11NbZ34KoG8B8xxtfYcDcjFnVb.png" src-width="3584" src-height="1738" align="center"/>

案例 1：按佣金總額的 1% 設置分成套餐，最低收費 2HKD，最高收費 50HKD

<img src="/assets/AYxbbml32osJQTxT9TxcFkr0nOf.png" src-width="3584" src-height="1738" align="center"/>

案例 2：按照單筆合約的交易金額進行階梯分傭，將交易金額拆分到每個階梯分別算

交易金額為 5000 的，1000 按第一個階梯計費，4000（5000-1000）按第二個階梯計費

<img src="/assets/VdHkbj0z5oPkmAxBoMscVDN6n3b.png" src-width="3584" src-height="1738" align="center"/>

案例 3：按照單筆合約的交易金額進行階梯分傭，交易金額在哪一個階梯，統一用哪個階梯計費

交易金額為 5000 的，統一按第二個階梯計費

<img src="/assets/Axn9b1g6Ao7QXhxqeShcm6panJg.png" src-width="3584" src-height="1738" align="center"/>

### 開戶時自動分配經紀人套餐

設置完分成套餐後，在經紀人管理頁面可以設置默認的分成套餐

開戶時，如果用戶分配給該經紀人，則該用戶的默認分成套餐將為該客戶

<img src="/assets/HaNdbZw1Ao8i45xTStAcmFi1nIc.png" src-width="3584" src-height="1738" align="center"/>

### 設置客戶級別分成套餐

在計費和分成管理可以通過批量、單筆的方式，修改客戶的分成套餐

<img src="/assets/Rn8Gbqz3DoIAh7xUExTcgLVJnoc.png" src-width="3584" src-height="1738" align="center"/>

## 分傭明細查詢操作说明

### 分傭明細查詢

菜單：經紀人管理&gt; 經紀人分成管理 &gt;佣金分成明細查詢

日切成功後，系統會觸發分傭計算任務（異步任務）

<img src="/assets/CIBkbEqeaoE3oXxKHyqc9MSUn48.png" src-width="3584" src-height="1738" align="center"/>

查詢經紀人名下客戶的分佣套餐佣金，是以帳務日期與交易幣種作查詢條件，支持日/月/年的週期報表查詢（报表管理-佣金报表），點擊【導出】可將查詢的資料導出

<img src="/assets/SP4wbVY3goIBigxhOQ4crKiynGc.png" src-width="3584" src-height="1738" align="center"/>

