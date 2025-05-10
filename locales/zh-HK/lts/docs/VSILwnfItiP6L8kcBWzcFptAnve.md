---
title: 快速上手
slug: VSILwnfItiP6L8kcBWzcFptAnve
sidebar_position: 1
---


# 快速上手

# 概述

WHALE 的款項管理系統提供了多情境的出金功能，使用者可以在系統中提交客戶的出金申請、審批出金、追蹤出金流程中的異常記錄、查詢所有歷史記錄等操作。

# 快速上手

## 前置条件

1. 設定公司銀行賬戶出金方式

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：業務參數設定&gt;資金參數&gt;公司銀行賬戶</p>
</div>

<img src="/assets/Jc3ZbG0kHoHzp9xpuYdczFiqnpf.png" src-width="2844" src-height="1304" align="center"/>

- 點選【新建】，進入二級頁面補充出金頻道訊息（券商公司用户付款的銀行賬户和出金方式組合，比如：工銀亞洲 001-支票轉賬）

<img src="/assets/M3sVbq2PVomb89xPJiWcPrkGn7b.png" src-width="2846" src-height="1330" align="center"/>

1. 打開幣種的出金功能開關

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：業務參數設定&gt;資金參數&gt;幣種</p>
</div>

<img src="/assets/Y0K4beoCYo6NN0xRQBCcX4olncc.png" src-width="2858" src-height="1318" align="center"/>

- 點選【新建】，進入二級頁面，將出金功能的選項設為「是」

<img src="/assets/BaHTbGjrroRB1WxLnZ3cJtnfnDf.png" src-width="2864" src-height="1330" align="center"/>

## 處理出金申請

根據客戶提出的出金要求，可在頁面手動新增出金申請，若用戶在 APP 已經提交了出金申請，記錄會自動展示在該頁面。

### 手工提現

點選【手工提現】，在出現的彈出內選擇客戶&gt;輸入幣種&gt;金額&gt;銀行卡&gt;備註等信息，點選【確認提現】，申請記錄即可生成（系統將根據已選擇的客戶，自動展示每個幣種可提現的餘額）

<img src="/assets/Aq1JboRjroTAM4x0h3GcVnpBnNg.png" src-width="3340" src-height="1764" align="center"/>

### 提交申請

申請的記錄生成後，後台的風控系統將自動檢測其合法性，耗時 5 秒左右風控通過後即可點擊【提交】進入到提現的步驟

<img src="/assets/LUcTbyfK5oXAvsxaRN6csMYqnad.png" src-width="3322" src-height="1692" align="center"/>

## 提現處理

出金申請提交後，具體操作提現的人員將會根據實際情況靈活處理提現的方式，系統提供了 2 套提現的模式：直接出賬、打包提現。同時，用户相應出金的渠道可能存在日限額，所以為了降低出金異常情況，建立了出金日限額監控提示以、管理以及查看。

### 直接出賬

<b>步驟一</b>：進入提現處理 tab 頁下的待處理分類頁面，選擇目標記錄，確認資訊無誤後點選【直接出賬】

<img src="/assets/P3bibjGXxo2tRYxB6U1cAJc4nrc.png" src-width="3310" src-height="1716" align="center"/>

<b>步驟二</b>：在出現的彈跳窗內輸入銀行名稱、銀行賬戶、通路、銀行流水（如有），點選【提交審核】（<em>若不需要工單審批，可以進行配置，詳見步驟五</em>）

<img src="/assets/ROgZbn9cMosrZNx2KbrcKnRunDb.png" src-width="3326" src-height="1776" align="center"/>

<b>步驟三</b>：進入工單系統，找到剛提交審核的記錄進行審核

<img src="/assets/MXI1b4TcUoVXkhxUeW0ceaxtndb.png" src-width="3824" src-height="1848" align="center"/>

<b>步驟四</b>：進入直接出賬待處理分類頁面中的目標記錄，點選【檢視並更新結果】手動更新出金的狀態，更新成「成功」後即可完成出賬

<img src="/assets/IpTsbedS3ot6bsxwXYtcjX7WnUh.png" src-width="3320" src-height="1020" align="center"/>

<img src="/assets/Oh6Kb49PooUNt9x80BBc5u9nnph.png" src-width="3316" src-height="1728" align="center"/>

<img src="/assets/UTKIbXpBYoBYHKxd3dhcczGEn7f.png" src-width="3324" src-height="592" align="center"/>

<b>步驟五：</b>若不需要工單審批，可以至“業務參數設定&gt;出金規則&gt;更多設置”中關閉開關

<img src="/assets/I06abl27boDIrVxHN5jc2I4wnJf.png" src-width="3816" src-height="1780" align="center"/>

### 打包處理

<b>步驟一</b>：在待處理分類下，選擇多筆目標記錄後點選【打包提審】

<img src="/assets/SsCybNzIvoso8hxGqnAcEUSjnCe.png" src-width="3298" src-height="1470" align="center"/>

<b>步驟二</b>：在出現的跳窗中，填寫相關銀行資料後，點選【提交審核】

<img src="/assets/JOYtbKzqGo14jKxpSyXcrYcyn8e.png" src-width="3318" src-height="1760" align="center"/>

<b>步驟三：進入打包待處理分類，選取剛剛打包好的批次，點選【審批】，在被召喚的工單中審批通過</b>

<img src="/assets/B2w3bM3T8o5866xyHAPc56xsnGe.png" src-width="3304" src-height="1024" align="center"/>

<b>步驟四：點選批次記錄中的【檢視並更新結果】進入彈跳窗內，依照批次內的明細記錄實際出金情況進行手動更新为「成功」（可批次操作）</b>

<img src="/assets/TCNlbkuaioHyRix5pqVcMXYTnlh.png" src-width="3318" src-height="1764" align="center"/>

<b>步驟五：進入工單系統中針對剛剛更新的結果再次進行審核通過，即可完成出</b><b>賬</b>

<img src="/assets/X8QJbJMBqohOYaxzDfdcPSZJnvb.png" src-width="3808" src-height="1868" align="center"/>

<img src="/assets/FiujbaVsXoIwGkxkIqpchWqZnUg.png" src-width="3306" src-height="1686" align="center"/>

### 日限額（設定）

指用戶相應出金的管道可能存在每日限額，所以為了降低出金異常情況，建立了出金日限額監控提示以及管理。

<b>步驟一：進入““業務參數設定&gt;出金規則&gt;日限額 tab””，目前頁面展示已設定好的限額記錄</b>

<img src="/assets/Jt1Ibr0EOoUpr0xa4WBcTOg7nGf.png" src-width="3836" src-height="1770" align="center"/>

<b>步驟二：若需要新增限額，點選【新建】，進入彈窗填入對應的欄位後點選【確定】</b>

<img src="/assets/EXJlbKAfGoFcwQxhFhCchB6knig.png" src-width="3834" src-height="1858" align="center"/>

- 若對於已存在的記錄需要調整額度，點選操作列的【調整】，在彈跳窗中選擇調增或調減並輸入金額

<img src="/assets/JYDhbl0VDoK05yxv63ic2vTvnm2.png" src-width="3332" src-height="1756" align="center"/>

- 若需要對其他欄位進行修改，可以點選操作欄的【編輯】進入彈跳窗進行操作

<img src="/assets/EAQpbo27Tohgvtx5WtXcNJNCnXf.png" src-width="3444" src-height="1848" align="center"/>

- 若需要刪除記錄，則選擇記錄後點選操作列的【刪除】即可

<img src="/assets/PlMAbyhjoocqmUxoG6BcsMfDnSh.png" src-width="3328" src-height="890" align="center"/>

- 若想要查看限額的變動情況，可至「業務參數設定&gt;出金規則&gt;日限額變動表」查看

<img src="/assets/TbzGbSKProwJRMxrugecwFi2npg.png" src-width="3796" src-height="1832" align="center"/>

## 處理異常出金

在實際業務中，出金可能會因種種原因被銀行拒絕，該部分記錄會被標記為異常，需要人工單獨處理

<b>步驟一：進入待處理頁面選擇目標記錄，點選【處理】，在彈跳窗中的 4 種方式中選擇 1 種，點選【確定】</b>

<img src="/assets/XlR7b1WZYoMiR3xZdvjcutWrnTf.png" src-width="3322" src-height="1696" align="center"/>

<b>步驟二：進入待審核頁面，選擇目標記錄後進行複核</b>

<img src="/assets/IckcbV6CYomj0ZxQLJJc7p7sntf.png" src-width="3288" src-height="1218" align="center"/>

