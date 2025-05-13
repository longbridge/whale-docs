---
title: 系統介紹
slug: OTqUwwHVqixBKLkXXrZcRUo5nRH
sidebar_position: 5
---


# 系統介紹

# 概述

Whale 經紀人管理模塊提供了對經紀人與客戶關系的管理，以及經紀人和團隊的管理功能。

## 關係管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> 經紀人管理&gt; 關係管理</p>
</div>

支持根據經紀人查詢該經紀人名下客戶，或者直接查詢某個客戶；

<img src="/assets/NkKebTkraoSYWTxiubacWtvZn6e.png" src-width="3346" src-height="1104" align="center"/>

查詢到客戶，即可以進行操作【解除經紀人關係】及【轉移至其他經紀人】

在客戶變更或分配經紀人操作時，支持郵件推送通知客戶（可選項）

<img src="/assets/AxUebWQ4AoKiTOxB6h6cWfvjn0y.png" src-width="3352" src-height="1362" align="center"/>

## 團隊與經紀人

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> 經紀人管理&gt; 團隊與經紀人&gt;團隊管理</p>
</div>

<img src="/assets/OiMKb7EeRoTPRjx6EpkcEfK1nfe.png" src-width="3348" src-height="1584" align="center"/>

首先在團隊與經紀人管理中的「團隊管理」可以新增經紀團隊，目前系統在團隊類型上分成：經紀人/營銷團隊

<img src="/assets/VkSzb2mjDoRirVxOSa7cpsgonff.png" src-width="3370" src-height="1442" align="center"/>

創建成功後，可以在顯示記錄的右側操作區進行操作： 「詳情」/「編輯」/「凍結」

<img src="/assets/P9GTbyTQ4ocO8MxCzDScxYVen5c.png" src-width="3366" src-height="1532" align="center"/>

## 經紀人管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>經紀人管理&gt; 團隊與經紀人&gt;經紀人管理</p>
</div>

點擊右上方「新建」可建立經紀人資料，創建經紀人成功後，系統會自動同步創建後台用戶帳號（經紀人帳號可以登錄 WTT 客戶端）

<img src="/assets/AqPbbgThuomRrax71ONcNfPnnWe.png" src-width="3350" src-height="1690" align="center"/>

注意：系統在創建經紀人時，經紀人的券商郵箱號是唯一校驗的判斷

創建成功後，可以在顯示記錄的右側操作區進行操作： 「詳情」/「編輯」/「凍結」/「下級管理」

<img src="/assets/YQ4KbFSSkocqX7xlV9hcQIQfnCg.png" src-width="3362" src-height="1562" align="center"/>

「編輯」在修改經紀人分傭套餐時，支持同步修改其下客戶的分傭套餐配置（可選項）
<img src="/assets/IWnCbSdmDo6GVoxiXNkcTYxmnWY.png" src-width="936" src-height="1662" align="center"/>
「凍結」，凍結經紀人操作後，該經紀人將無法使用賬號登錄 WTT；
「下級管理」，該功能已遷移至“身份管理&gt;人員管理”，查到對應的經紀人用戶進行“數據權限”的編輯；
<img src="/assets/WnQKb0PseoHfnKxkz3tciefGnxd.png" src-width="3422" src-height="1840" align="center"/>
在經紀人管理上新增經紀人配置：開通帳戶時，若未人工分配經紀人，系統預設分配給指定經紀人；
<img src="/assets/Y0Zob1080oc15sxQIv9cvxRznmd.png" src-width="3370" src-height="1226" align="center"/>
在查詢組件上：支持按經紀人編號或經紀人名稱查詢

## 分成套餐設置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>經紀人管理&gt; 分成管理</p>
</div>

此功能是設置/修改經紀人的分成佣金套餐，提供佣金計算後查詢/分成管理/佣金套餐配置

<img src="/assets/HEHrb4HsDoUwbAxjTFhc9Th4nab.png" src-width="3584" src-height="1738" align="center"/>

### <b>新增分成套餐</b>

可以在右上角，點擊【新增】，新增一筆分成佣金套餐

<img src="/assets/RIbdbl6AlokKmcx8UCJcVwtCnPg.png" src-width="3584" src-height="1738" align="center"/>

先填寫套餐主體信息

特殊字段說明：
- 分傭對象設置（劵商或經紀人）：決定配置的算法對哪個對象生效（先算哪一個）
- 允許虧損字段（：決定在分傭金額&gt;佣金时的處理方案，允许虧损的，計算金額可大于佣金）

<img src="/assets/YkLXbqGltoZtUixQAY3cyZYvnCh.png" src-width="3584" src-height="1738" align="center"/>

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

<img src="/assets/NC1KbKN7wompmpx0MJacwpjHnDh.png" src-width="3584" src-height="1738" align="center"/>

案例 1：按佣金總額的 1% 設置分成套餐，最低收費 2HKD，最高收費 50HKD

<img src="/assets/P6iHbN2LuogKrWxZwv1ckuFInsh.png" src-width="3584" src-height="1738" align="center"/>

案例 2：按照單筆合約的交易金額進行階梯分傭，將交易金額拆分到每個階梯分別算

交易金額為 5000 的，1000 按第一個階梯計費，4000（5000-1000）按第二個階梯計費

<img src="/assets/KTzkbHatQo5XTxxES9hcd75RnCd.png" src-width="3584" src-height="1738" align="center"/>

案例 3：按照單筆合約的交易金額進行階梯分傭，交易金額在哪一個階梯，統一用哪個階梯計費

交易金額為 5000 的，統一按第二個階梯計費

<img src="/assets/CMjNbtofEomJOmxZJYickdQmnZg.png" src-width="3584" src-height="1738" align="center"/>

### 開戶時自動分配經紀人套餐

設置完分成套餐後，在經紀人管理頁面可以設置默認的分成套餐

開戶時，如果用戶分配給該經紀人，則該用戶的默認分成套餐將為該客戶

<img src="/assets/Lje7bQHVzoJ7JvxlLOOcbcXln0b.png" src-width="3584" src-height="1738" align="center"/>

### 設置客戶級別分成套餐

在計費和分成管理可以通過批量、單筆的方式，修改客戶的分成套餐

<img src="/assets/XIO1bmTrgo169BxBBhecHDTynjh.png" src-width="3584" src-height="1738" align="center"/>

## 分傭明細查詢操作说明

### 分傭明細查詢

菜單：經紀人管理&gt; 經紀人分成管理 &gt;佣金分成明細查詢

日切成功後，系統會觸發分傭計算任務（異步任務）

<img src="/assets/I5lab7D3WoObS0xZWZzcQxTjn5f.png" src-width="3584" src-height="1738" align="center"/>

查詢經紀人名下客戶的分佣套餐佣金，是以帳務日期與交易幣種作查詢條件，支持日/月/年的週期報表查詢（报表管理-佣金报表），點擊【導出】可將查詢的資料導出

<img src="/assets/Qa4CbIPBboPV3RxSKDtcbICKnMf.png" src-width="3584" src-height="1738" align="center"/>

