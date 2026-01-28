---
title: 系統介紹
slug: Ax55w2aTFie5LBkEUQbcErsTn1u
sidebar_position: 1
---


# 系統介紹

# 一、系統介紹

出金功能是指投資者從其證券賬戶中提取資金的操作。這個功能允許投資者將其證券賬戶中的資金轉移到其銀行賬戶或其他指定的賬戶中。

Whale系統包含了處理出金申請、提現處理、對賬、單獨處理異常出金、出金記錄查詢等功能，由於監理與風控需求，系統的功能設計具備多角色、流程化的特色，在兼顧出金效率的同時，同步降低了資金風險。

整體業務流程如下：

<img src="YfmSbxzjaoP9qRxfdZ9jQZfhp9e" src-width="2146" src-height="256" align="center"/>

# 二、操作說明

# 出金配置

## 資金參數配置

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置 &gt; 資金參數&gt;公司銀行賬戶</p>
</div>

<img src="Yc86b25pOo4MGbxxW4ojPOOUphg" src-width="2844" src-height="1304" align="center"/>

- 點選【新建】，進入二級頁面補充出金頻道訊息（券商公司用户付款的銀行賬户和出金方式組合，比如：工銀亞洲 001-支票轉賬）

<img src="EfH0bL2L0oxYFgx1OXmjCoYIphh" src-width="2846" src-height="1330" align="center"/>

1. 打開幣種的出金功能開關

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜單入口：業務參數設定&gt;資金參數&gt;幣種</p>
</div>

<img src="ZvACbu3PLo2hDoxg3TqjtfHJpRd" src-width="2858" src-height="1318" align="center"/>

- 點選【新建】，進入二級頁面，將出金功能的選項設為「是」

<img src="WjymbmTn1oQwEhxGlsGjR77Epvf" src-width="2864" src-height="1330" align="center"/>

## 自動出金規則

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;自動出金規則</p>
</div>

配置出金渠道打包規則，用以控制出金批量是自動還是手工處理。同時還能通過規則控制出金的單筆限額，以及服務窗口期以及支持的客戶銀行等。

目前可支持的出金策略包括：單筆實時、定時打包人工審核、手工打包和批量自動

<img src="UBrubTxewosjFNxHtL7j4hAwp3g" src-width="3304" src-height="878" align="center"/>

<b>操作按鈕說明</b>

- 新建：可以根據券商公司對應出金渠道新建自動出金規則
- 編輯：對已添加的自動出金規則可選擇編輯
- 刪除：刪除已有的自動出金規則

## 日限額以及變動表

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;日限額</p>
</div>

客戶相應出金的渠道可能存在日限額，所以為了降低出金異常情況，建立了出金日限額監控提示以及管理。

<img src="FskcbzuLvoU8mpx95NwjwijjpQ4" src-width="3292" src-height="730" align="center"/>

<b>操作按鈕說明</b>

- 新建：可以根據需求配置出金銀行相關日限額
- 編輯：對已添加的日限額可選擇編輯
- 刪除：刪除已有的日限額
- 調整：調整當前出金銀行對應的日限額額度

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;日限額變動表</p>
</div>

可以查詢出金銀行的日限額歷史變動記錄

<img src="NdmtbgB2PomRUmx8O8Ljn6EYpQc" src-width="3264" src-height="1102" align="center"/>

對於日限額達到日剩餘額度警戒線，系統會自動推送消息告警

<img src="RQ4xbJH86oXcWpxCqWHjB6y3pkc" src-width="1156" src-height="138" align="center"/>

## 餘額攔截

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;餘額攔截</p>
</div>

目前指用於出金業務。在出金業務中，系統會根據財務人員選擇的出金銀行進行餘額查詢，根據查詢到的餘額對待出金的金額進行判斷，如果餘額不足以支持用户提交的出金請求，則會將相應的出金進行攔截，等待財務後續人工處理。

<img src="UO0fbR6WaobkaXxm6Lijokb5ppg" src-width="3308" src-height="1048" align="center"/>

<b>操作按鈕說明</b>

- 編輯：對於已接入 API 銀行的餘額查詢記錄可以編輯提示餘額和攔截餘額
- 啟用：對於已接入 API 銀行的餘額查詢記錄選擇啟用
- 停用：對於已接入 API 銀行的餘額查詢記錄選擇停用

對於銀行餘額達到提示餘額時，系統會自動推送訊息警告

<img src="D5ihb7ofvo9c56xLX6rjb9GnpSP" src-width="830" src-height="194" align="center"/>

對於銀行餘額達到攔截餘額時，系統會自動攔截對應出金並且進行告警

<img src="WYqMbiQ85oAjwGxauRIj44cxpee" src-width="772" src-height="220" align="center"/>

## 自動審核規則

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;自動審核規則</p>
</div>

對於客戶提交出金申請是否需要後台人工審核，可以在「自動審核規則」進行設定。目前可支援的審核規則包括：人工審批需工單、人工審批無需工單、自動提交和自動駁回

<img src="SYzkbOBVMogY99xpqpcjoTMUpNb" src-width="3280" src-height="672" align="center"/>

<b>操作按鈕說明</b>

- 新建：可以根據需求配置自動審核規則
- 編輯：對已添加的自動審核規則可選擇編輯
- 啟用：對於已添加的自動審核規則選擇啟用
- 停用：對於已添加的自動審核規則選擇停用

## 更多設置

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;更多設置</p>
</div>

對於在「款項管理-出金-提現處理-待處理」對應操作的【直接出賬】提交後是否需要工單審批，可以在「更多設置」進行配置

<img src="UfSZbJg9TodgJax4OUQjNLxBpXc" src-width="3302" src-height="366" align="center"/>

## 出金參數

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數設置&gt;出金規則&gt;出金參數</p>
</div>

可根據客戶出金銀行區分配置預計到賬時間、預估費用等參數

<img src="Xnorb63iToyFj8xjUzhjX3Etphg" src-width="3262" src-height="1084" align="center"/>

<b>操作按鈕說明</b>

- 新建：可以根據需求配置出金參數
- 編輯：對已添加的出金參數可選擇編輯
- 複製：通過複製已有的出金參數進行快速新建

# 出金操作

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜單入口：款項管理-出金</p>
</div>

## 出金申請

出金申請為用戶方提出，申請的內容包含了幣種、申請金額、收款銀行卡與備註4大部分。WHALE使用者可以手動幫助客戶進行證券入倉并根據客戶提交的申請進行駁回、提交審批等操作。

- 手工提現

適用於使用者聯絡後台操作員進行手動出金的場景，操作員需要依序填寫客戶的幣種、申請金額、出金手續費、收款銀行卡、備註資訊。如果客戶有出金的證明也可以上傳至系統。

<img src="Ks5KbGh3Jo3WHjxG0iEjmzo8pRc" src-width="1192" src-height="2434" align="center"/>

- 提交（<b>可批量操作</b>）：經過操作人員初步審查無誤後，可以將申請提交至下一節點的操作人員進行審核-提現操作
- 駁回（<b>可批量操作）</b>：若客戶遞交的出金申請資料有誤或使用者反饋本次申請無效時，操作員可以進行【駁回】操作
- 删除：若客戶遞交的出金申請資料有誤或使用者反饋本次申請無效時，操作員也可以透過【删除】按鈕直接刪除目標記錄
- 修改：若在提交出金申請前，發現客戶遞交的某筆具出金申請有問題，可在與客戶確認無誤後可以透過【編輯】按鈕進行修正，修改後需進行工單審批，審批通過後修改內容生效。
    - 修改的范围：申請金額、出金手續費、收款銀行卡、備註、憑證（重新上傳）

<img src="WP60bCcVTohMAzxbSumjMMwip5c" src-width="3824" src-height="1418" align="center"/>

<img src="BvQab4xF2ornqixex2VjpJHxpgh" src-width="3322" src-height="1674" align="center"/>

## 提現處理

在初審人員提交出金申請後，複審操作人員需要進行提現處理。提現處理提供了2種方式：直接出賬與打包提審。其中：

- 直接出账
    <img src="PDZzbZULhoGcENxS9wxjNkqDpDc" src-width="3826" src-height="1024" align="center"/>
    <img src="BrpKbcaAyoZUfbxkr8LjcGOipTc" src-width="1674" src-height="1748" align="center"/>
    <img src="KeFfbbUQ3okZIFxBOQtjyqdApQg" src-width="3810" src-height="1860" align="center"/>
    - 選擇目標記錄後，點選操作列的【直接出賬】
    - 在彈窗中輸入銀行名稱、銀行賬戶、渠道等信息，並在出賬明細中可選擇是否補充銀行流水信息
    - 提交審核後，記錄流轉至「直接出賬待處理」頁面，審核者需進行工單審批，審核通過後，完成出賬

- 打包提審
    <img src="BwzmbIqmeoix1nxS6qdjjM0mpug" src-width="3818" src-height="1536" align="center"/>
    <img src="TH54bGUR3o99efx11QBj2hxwpZg" src-width="3832" src-height="1848" align="center"/>
    <img src="N68mbCkSZoZFESx7ouvjU7n7pdb" src-width="3830" src-height="1146" align="center"/>
    <img src="D6S0bNYxIoqkgvxgubZjCtirpAg" src-width="3826" src-height="1826" align="center"/>
    <img src="Q6GzbDztNoAe5xxipVxjnJm6pgb" src-width="3910" src-height="1942" align="center"/>
    - 選擇目標記錄後，點選批次操作行的【打包提審】，如果在打包後需要進行移除部分明細記錄，可以在彈跳窗內進行操作，填好出金的銀行資訊以及渠道資訊後，該批進入審核流程
    - 提交審核後，記錄流轉至「打包待處理」頁面，審核者需進行工單審批，審核通過後，完成出賬
    - 註：由於出金的數量與渠道限制，部分出金管道需要人工更新出金的狀態，用戶需要點選【檢視並更新結果】進入至詳情頁面進行手動更新（可批量更新）
    - 完成出賬後，可將出金文件下載至電腦本地留存

<img src="RedgbrrgFoD2qAxN93rjDjgxpsc" src-width="3836" src-height="1826" align="center"/>

- 指標卡

若出金業務量較大，可以透過系統的分類展示卡進行精細化作業，指標卡的左右排布反映了業務操作的先後順序

<img src="HLnLbe8xFo4Tdmxwl2ejyEPYp7d" src-width="3830" src-height="1268" align="center"/>

- 支票列印

用户若是採用支票方式出金，流程結束後需要列印支票時，可點選頁面右上方的【支票列印】進入二級頁面

<img src="THR7bELzlooyZtxWyP2jezBzpGd" src-width="3326" src-height="1712" align="center"/>

頁面內顯示全部支票方式出金的記錄，使用者選擇目標記錄後可選擇支票補打或首打，（支援大量列印）輸入支票號，點選【確定列印】

<img src="E1QMbkumEoyGKKxbnJLjbh8QpkL" src-width="3324" src-height="1758" align="center"/>

## 出金對賬

為了保障資金流水的準確性，業務中需要將銀行的流水與系統中的出金記錄進行比對，降低資金流失的風險。銀行流水的來源有2種：①API對接（自動產生）、②手動導入。（详见詳見「出金賬單」章節）

- 對賬：用戶可以選擇目標期間的銀行流水進行刷新，系統將自動匹配銀行流水與系統的出金記錄，對賬完成後，可以關注清單中的「對賬結果」列，如果不一致，需要進一步追蹤處理。

<img src="LMNibqqoPoHfgWxXRWTj5iMJpmB" src-width="3826" src-height="1790" align="center"/>

<img src="DjVPbB9AbowSWbxBgWgjKa1QpGe" src-width="3818" src-height="1808" align="center"/>

## 異常出金

若出金申請在提現與對賬流程發現了異常，可在異常出金頁面進行處理（<b>可批量操作</b>）。系統提供了4種處理方式：

```text
- 轉成功
- 轉失敗
- 再付款（重新生成提現單再次進行付款）
- 重提交（原提現單重新提交渠道付款）
```

<img src="WAO6bPnTJoEycZx0Gc2jUBcGp4c" src-width="3826" src-height="1788" align="center"/>

- 選擇了具體的處理方式後，記錄流轉只待審核頁面，業務人員需要再次複核處理結果，通過後異常出金記錄處理完畢

<img src="UYW9bindRo7nJxxbuCgj9GR8pod" src-width="3832" src-height="1312" align="center"/>

## 出金記錄

出金記錄頁面記錄出金的全流程狀態，使用者可隨時進行查詢、匯出等操作

<img src="Z6HHbGiMno1ohYxfWlfj6YQnpzg" src-width="3816" src-height="1854" align="center"/>

## 出金賬單

指代券商公司銀行賬户所有資金的出賬變動記錄，是核对出金业务的重要依据。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜單入口：款項管理-銀行賬單-出金賬單</p>
</div>

- 如果銀行已經對接銀企直連，則係統可以自動取得銀行賬單。
    - 若無法對接銀企直連，則需要人工後台依照對應銀行賬單範本進行人工導入

<img src="YlxUbEbfUov4trxV1ThjzpQ7pIf" src-width="3818" src-height="1796" align="center"/>

<img src="UylVb9gesou0egx696OjzjGsptg" src-width="3820" src-height="1866" align="center"/>

- 對於系統取得或手動匯入的銀行賬單，人工確認相應入賬為冗餘資料且匹配狀態為“未匹配”，可選擇手動刪除；

<img src="FOs9btJUEoHE8TxWXC1jQdDKpWf" src-width="3316" src-height="1692" align="center"/>

- 解析銀行賬單時，可能存在銀行出賬的負金額，此時對系統原本判斷為出賬就會出錯。若人工發現有這樣的情況，可以手工將對應的出賬置為入賬；

<img src="EgStbUUzyodAa5xicAOjWcU9p0c" src-width="3308" src-height="1700" align="center"/>

- 對於未配對的提現單需要人工進行根據實際出賬進行關聯打標。
    - 打標後若發現為誤操作，仍可進行【拒絕】操作

<img src="AegGbalg3om30CxzXcEjMan8prf" src-width="3326" src-height="1718" align="center"/>

<img src="UWhwbbGcDoqBohxo0Dcjqflppbb" src-width="3308" src-height="1708" align="center"/>

