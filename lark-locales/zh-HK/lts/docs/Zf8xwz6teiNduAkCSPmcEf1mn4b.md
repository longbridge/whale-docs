---
title: CRS 操作文檔
slug: Zf8xwz6teiNduAkCSPmcEf1mn4b
sidebar_position: 2
---


# CRS 操作文檔

本使用手冊適用於 Longbridge Whale WBO 證券後台管理的管理員和使用成員使用。閱讀此手冊，你將瞭解 Whale WBO ‘CSR 文件’模組的作業功能操作

# CSR 文件操作說明

執行菜單：報表管理&gt;CRS 文件生成

- 注意： 租戶需要 增加下列權限 才能操作 相關 CSR 文件

<img src="/assets/JSdTb0yFzoXn77xCnnXjnwoVpad.png" src-width="409" src-height="221" align="center"/>

<img src="/assets/LNwWb2GhpoxyNax4uksjXUyxpOg.png" src-width="1093" src-height="189" align="center"/>

整個 CSR 文件操作基本上 下列流程的順序

<img src="/assets/G8uJbo0RdoSWRPxRPrqjikwfpwd.jpeg" src-width="1674" src-height="934" align="center"/>

## <b>1. 計算收益</b>：

首先在右上角點選'計算收益' ，輸入報送年度與編號（公司名稱） 後就會產生文件製作的任務工作（ 在<b>任務列表</b> Tab 頁籤）

注意： 在計算收益視窗上，在外部報税文件上傳的網站了會提供一個編號的，公司名稱就是券商的公司名稱，要跟外部報税系統里面名稱要一致

<img src="/assets/HByIbj3FmohOwYxXjGMjfMF1p5b.png" src-width="2358" src-height="1346" align="center"/>

此時產生一個的系統任務，當系統任務完成後（這會需要點時間產生全年資料）， 當完成後系統會給予這批 CRS 數據一個 相同的‘<b>消息編號</b>'

<img src="/assets/OEOtblRhyou5itx6SHIjx79FpF3.png" src-width="1046" src-height="249" align="center"/>

也可以在任務列表 Tab 頁籤上 點選 紀錄右側操作區的【詳情】，會自動切換 <b>CRS 數據</b> Tab 頁籤，可以查詢數據資料或編輯修改

<img src="/assets/Jtp7bL3ckoFCA2xUetvjlUTBpUd.png" src-width="2442" src-height="135" align="center"/>

<img src="/assets/Y9HjbQUklozyqRxP3PRjQ4Impud.png" src-width="1280" src-height="616" align="center"/>

可根據需要 刪除紀錄（不報送） 或修改數據資料

<img src="/assets/KGqEbxchcoQe4HxGIhljBwFcpKg.png" src-width="2489" src-height="1621" align="center"/>

## <b>2. 生成文件</b>：

當 CSR 數據 Tab 頁籤上 查看或修改正確後， 系統會根據 數據的狀態： 標記為

- CRS701 = The message contains new information ，指上傳新數據

新消息[CRS701]：new[CRS701]

- CRS702 = The message contains corrections for previously sent information， 指更正或删除數據

更正消息[CRS702 ]：corrections[CRS702 ]

此時 可根據需要 先查詢 下列條件後（以下 僅為參考示意）

輸入： <b>年度 /消息類型/編號/批次/消息編號</b>  查詢後。 生成文件的功能鍵就可以操作了

<img src="/assets/Ythfb5FS3optl0x5KDqjAvr6pbb.png" src-width="3243" src-height="1086" align="center"/>

就可以點選右上角【生成文件】就會產生一個的系統任務來產生報稅規格的文檔
（注意：這會需要點時間產生全年資料）

<img src="/assets/BulCb6ODEouLXnxJPGSj87Mmp3e.png" src-width="1047" src-height="309" align="center"/>

1. <b>文件下載</b>

當生成文件任務完成後，就可以點選下載檔案，去外部網站傳送了

（系統會稱生一個 xml 附檔名的文檔）

<img src="/assets/Z6hrbJ0V3ol2mRxtAbmjkUfppOS.png" src-width="2480" src-height="540" align="center"/>

<img src="/assets/HGTsbSYLgoKUNOxGB7Fjo7eLpQb.png" src-width="581" src-height="667" align="center"/>

建議： 此文件不要自行編輯，容易誤操作造成文檔規格不對，無法上傳

## <b>3. 生成文件上傳</b>：

將上傳到外部系統的一個 XML 文件。這文件在外部系統上傳以後，在外部系統它會返回一個文件序列號，可以在任務列表 Tab 頁籤，更新狀態把外部系統序列號輸入

<img src="/assets/MnAWbxIgro9LFRxJV9qjt3DLpuf.png" src-width="2472" src-height="552" align="center"/>

<img src="/assets/La1SbMCAto7GtQxRiMzjaB5hp7b.png" src-width="2462" src-height="843" align="center"/>

這等于將產生的 CRS 數據 打上這批次的 文件序列號，方便以後對數據查詢或更正已報送資料

<img src="/assets/EzpEbhFZkoCVFoxwUlxj1quCpGh.png" src-width="1039" src-height="334" align="center"/>

## <b>4. 更正資料再上傳</b>：

正常情況下，已報送資料其狀態是‘文件已報送'

<img src="/assets/LV8RbmqkvoJleExFh0NjIm7fp6b.png" src-width="1032" src-height="529" align="center"/>

當發現數據需要變更時，可以點選右側 【編輯】 來操作修改數據

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>系統會產生一筆新數據，可以根據需要來修改</p>
</div>

或 【刪除】 已報送數據，

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>系統會將刪除那筆資料 變成已鎖定狀態</p>
</div>

此時後面一樣操作方式輸入： <b>年度 /消息類型/編號/批次/消息編號</b>  查詢後。 生成文件的功能鍵就可以操作了

產生文件並上傳報送網站，同樣 也會取的最新的文件序列號，也一樣更新即可

