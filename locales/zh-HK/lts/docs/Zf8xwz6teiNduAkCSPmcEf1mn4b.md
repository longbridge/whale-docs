---
title: CRS 操作文檔
slug: Zf8xwz6teiNduAkCSPmcEf1mn4b
sidebar_position: 2
---


# CRS 操作文檔

本使用手冊適用於 Longbridge Whale WBO 證券後台管理的管理員和使用成員使用。閱讀此手冊，你將瞭解 Whale WBO‘CSR 文件’模組的作業功能操作

<table>
<colgroup>
<col width="83"/>
<col width="151"/>
<col width="99"/>
<col width="370"/>
</colgroup>
<tbody>
<tr><td colspan="4"><h4>文档编辑历史</h4></td></tr>
<tr><td><p><b>版本</b></p></td><td><p><b>日期</b></p></td><td><p><b>編輯人</b></p></td><td><p><b>變更內容</b></p></td></tr>
<tr><td><p>V1.0</p></td><td><p>2023 年 9 月 5 日</p></td><td></td><td><p>第一版產生</p></td></tr>
</tbody>
</table>

# CSR 文件操作說明

執行菜單：報表管理&gt;CRS 文件生成

- 注意：租戶需要 增加下列權限 才能操作 相關 CSR 文件

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[24%]" width-ratio="24">
<img src="/assets/KUuObQsQioYGCHxrxbqczTRXnMb.png" src-width="409" src-height="221"/>
</div>
<div class="w-[75%]" width-ratio="75">
<img src="/assets/GQxmbTqi4o6XYexjd4Zcnr0dnZb.png" src-width="1093" src-height="189"/>
</div>
</div>

整個 CSR 文件操作基本上 下列流程的順序

### <b>計算收益</b>： 

<img src="/assets/DlE4bukIfossTwxpS0OcoQITnWh.png" src-width="2358" src-height="1346" align="center"/>

此時產生一個的系統任務，當系統任務完成後（這會需要點時間產生全年資料），當完成後系統會給予這批 CRS 數據一個 相同的‘<b>消息編號</b>'

<img src="/assets/FDDQbkabGoiWP4xSUWGcuDvlnjf.png" src-width="1046" src-height="249" align="center"/>

 也可以在任務列表 Tab 頁籤上 點選 紀錄右側操作區的【詳情】，會自動切換<b> CRS 數據</b> Tab 頁籤，可以查詢數據資料或編輯修改

<img src="/assets/MFONb5V5gocnmfx9W9ac93NMnud.png" src-width="2442" src-height="135" align="center"/>

<img src="/assets/VArCbYj7ioZEpTxU5cqcr3F5n0g.png" src-width="1280" src-height="616" align="center"/>

可根據需要 刪除紀錄（不報送）或修改數據資料

<img src="/assets/O2SPbe0FxoNuysxmAOjcI0aSn8g.png" src-width="2489" src-height="1621" align="center"/>

### <b>生成文件</b>： 

<img src="/assets/UYcTbGL5Lo2QikxjzJhcDrT1nOc.png" src-width="1047" src-height="309" align="center"/>

1. <b>文件下載</b>

當生成文件任務完成後，就可以點選下載檔案，去外部網站傳送了

（系統會稱生一個 xml 附檔名的文檔）

<img src="/assets/YWc1blCkWoBYzixoIUDc7KXFn3f.png" src-width="2480" src-height="540" align="center"/>

<img src="/assets/EHMHbjie5oohKQx3MdIc4DGqnMq.png" src-width="581" src-height="667"/>

建議：此文件不要自行編輯，容易誤操作造成文檔規格不對，無法上傳

### <b>生成文件上傳</b>： 

將上傳到外部系統的一個 XML 文件。這文件在外部系統上傳以後，在外部系統它會返回一個文件序列號，可以在任務列表 Tab 頁籤，更新狀態把外部系統序列號輸入

<img src="/assets/UAs2bxuKJocDeoxh5rdcDysKnQh.png" src-width="2472" src-height="552" align="center"/>

<img src="/assets/BBYlbKsZJorlcZxw2JMcVZ4knAe.png" src-width="2462" src-height="843" align="center"/>

這等于 將 產生的 CRS 數據 打上這批次的 文件序列號，方便以後對數據查詢或更正已報送資料

<img src="/assets/LVdtbT9Z7oD82zx9eDFcNwCVnG4.png" src-width="1039" src-height="334" align="center"/>

### <b>更正資料再上傳</b>： 

正常情況下，已報送資料其狀態是‘文件已報送'

<img src="/assets/VzvlbmynnosO9uxKH4YcVZm7nob.png" src-width="1032" src-height="529" align="center"/>

當發現數據需要變更時，可以點選右側【編輯】來操作修改數據

> 系統會產生一筆新數據，可以根據需要來修改

或【刪除】已報送數據，

> 系統會將刪除那筆資料 變成已鎖定狀態

此時後面一樣操作方式輸入： <b>年度 /消息類型/編號/批次/消息編號  </b>查詢後。生成文件的功能鍵就可以操作了

產生文件並上傳報送網站，同樣 也會取的最新的文件序列號，也一樣更新即可

