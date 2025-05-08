---
title: 快速上手
slug: SDVjwkUgoiF4eWkAI3Jcps5Nn5X
sidebar_position: 4
---


# 快速上手

# 概述

Whale 的賬戶管理模塊提供了對客戶賬戶的綜合管理和操作功能，幫助管理人員進行賬戶相關的管理工作。

# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>權限名稱</p></th><th><p>權限說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>BrokerFull</p></td><td><p>管理經紀人關係、團隊、分成、基礎信息的權限</p></td></tr>
</tbody>
</table>

## 經紀人與客戶關系查詢/操作

支持根據經紀人查詢該經紀人名下客戶，或者直接查詢某個客戶；

<img src="/assets/HztxbGezBoRA4Vxks8BcI68GnAg.png" src-width="3346" src-height="1104" align="center"/>

查詢到客戶，即可以進行操作【解除經紀人關係】及【轉移至其他經紀人】

在客戶變更或分配經紀人操作時，支持郵件推送通知客戶（可選項）

<img src="/assets/K3RYbbghxoeXD7xW1kRcfkWHnke.png" src-width="3352" src-height="1362" align="center"/>

## 經紀人管理

點擊右上方「新建」可建立經紀人資料，創建經紀人成功後，系統會自動同步創建後台用戶帳號（經紀人帳號可以登錄 WTT 客戶端）

<img src="/assets/FARrbI3PWoX46TxiWpzc3tKPnXc.png" src-width="3350" src-height="1690" align="center"/>

注意：系統在創建經紀人時，經紀人的券商郵箱號是唯一校驗的判斷

創建成功後，可以在顯示記錄的右側操作區進行操作： 「詳情」/「編輯」/「凍結」/「下級管理」

<img src="/assets/QeXibd182oFjg9xxyU9cHWLCnfb.png" src-width="3362" src-height="1562" align="center"/>

「編輯」在修改經紀人分傭套餐時，支持同步修改其下客戶的分傭套餐配置（可選項）
<img src="/assets/BRSebWmDFopMNfxvpCHcsVl2nkc.png" src-width="936" src-height="1662" align="center"/>

「凍結」，凍結經紀人操作後，該經紀人將無法使用賬號登錄 WTT；

「下級管理」，該功能已遷移至“身份管理&gt;人員管理”，查到對應的經紀人用戶進行“數據權限”的編輯；

<img src="/assets/EUJEbsD4kogRZyx8J7OcJ1dXnMd.png" src-width="3422" src-height="1840" align="center"/>

在經紀人管理上新增經紀人配置：開通帳戶時，若未人工分配經紀人，系統預設分配給指定經紀人；

<img src="/assets/X1M7b9PCAo3djsx2eaJcgcpHnxe.png" src-width="3370" src-height="1226" align="center"/>

在查詢組件上：支持按經紀人編號或經紀人名稱查詢

### <b>新增分成套餐</b>

可以在右上角，點擊【新增】，新增一筆分成佣金套餐

<img src="/assets/Chm0bvy4eoUXBRxulvmcXPcKnIg.png" src-width="3584" src-height="1738" align="center"/>

先填寫套餐主體信息

字段說明：
- 分傭對象設置（劵商或經紀人）：決定配置的算法對哪個對象生效（先算哪一個）
- 允許虧損字段（：決定在分傭金額&gt;佣金时的處理方案，允许虧损的，計算金額可大于佣金）

<img src="/assets/Rro5bqoyRoCVtixExeXcu8dVn5b.png" src-width="3584" src-height="1738" align="center"/>

點解添加規則後，可分別針對股票、期權等單獨設置套餐規則

字段說明

計費方式：決定用佣金（OR 交易金額）*費率算分傭金額

階梯統計基準：決定用佣金（OR 交易金額）進行階梯的劃分

跨階梯處理方式：決定將統計基準統一用一個費率計算 OR 拆分成多端計算

