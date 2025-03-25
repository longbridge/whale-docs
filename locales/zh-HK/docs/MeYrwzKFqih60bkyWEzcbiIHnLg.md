---
title: 系統介紹
slug: MeYrwzKFqih60bkyWEzcbiIHnLg
sidebar_position: 2
---


# 系統介紹

# 一、系統介紹

換匯是指投資者將某一幣種兌換成另一幣種的行為。

Whale 系統提供了換匯的基礎參數設定與業務主流程操作功能。其中：參數設定包含了幣種對、換匯策略、匯兌池額度設定等功能。操作功能提供了手動換匯、參考匯率加點、異常換匯記錄處理等高頻使用功能。

整體業務流程如下：

<img src="/assets/NQiowfLl1hFtrlbtRbjcXD2GnQg-board.png"/>

系統功能架構

<img src="/assets/BmIKwr6ZnhNEy5bASdJcLgTYnAh-board.png"/>

## 前置条件

1. 首先打開幣種的換匯開關

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：業務參數設定&gt;資金參數&gt;幣種</p>
</div>

<img src="/assets/OZUQbEJS9oWUv5x66NPcTyYZnQK.png" src-width="3822" src-height="1850" align="center"/>

<img src="/assets/NLBabyI57oXTZ6xfpErcN8fPn4e.png" src-width="3820" src-height="1864" align="center"/>

1. 設定相應幣種的匯率精度、金額精度以及金額取數邏輯

<img src="/assets/G9PkbioGAoPiG2xy2Mwcw8DinEf.png" src-width="3266" src-height="604" align="center"/>

1. 然後先設定支援的幣種對並制定相應的換匯策略。如果使用匯兌池換匯策略，還需要設定匯兌池的換匯額度。詳見第二節操作說明。

# 二、操作說明

## 業務參數設置

業務參數設置選單為換匯功能的初始化設置，需要使用者根據換匯業務的實際情況進行一次或多次設定，以保障換匯的準確性與效率。

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：業務參數設置 - 匯兌</p>
</div>

### 幣種對

根據換匯業務涉及到的幣種範圍，設定對應的兌出幣種與兌入幣種。

- 新建（幣種對）

點選【新建】，選擇兌入幣種與兌出幣種。其中：兌出幣種為單選，兌入幣種為多選

<img src="/assets/W9hdbZiGNoT1xPxl1nQcysDEnKf.png" src-width="3342" src-height="1248" align="center"/>

幣種設定完成後，系統將以卡片的形式展示，針對已設定完成的幣種，用戶可依實際情況進行【編輯】、【刪除】對應的幣種。

### 換匯策略

指規範客戶匯兌提交到成交整體流程的策略，目前包括兩種策略：「匯兌池換匯」和「渠道換匯」。其中：

<table>
<colgroup>
<col width="155"/>
<col width="598"/>
</colgroup>
<tbody>
<tr><td><p>服務策略</p></td><td><p>簡述</p></td></tr>
<tr><td><p>匯兌池換匯</p></td><td><p>即時成交，可能產生匯兌損益</p></td></tr>
<tr><td><p>銀行換匯</p></td><td><p>時間上較長，但不產生匯兌損益</p></td></tr>
</tbody>
</table>

- 新建（換匯策略）

點選【新建】，在喚出的彈跳窗中，依照「服務策略設定→匯兌類型設定→適用時段設定→渠道設定→覆蓋的幣種對設定」順序依序填寫。

<img src="/assets/AXiRbNErrogJR5xF34Mcypcmn7f.png" src-width="3272" src-height="1506" align="center"/>

- 注意事項：
    - 服務時段可以進行多選，互相不可有交集，系統會根據使用者選擇的時段生效服務策略。
    - 只有選擇“銀行換匯”服務策略時，才需要選擇“匯兌渠道”

換匯策略設定完成後，使用者可依實際業務需求進行【編輯】與【啟用/停用】

<img src="/assets/AWFRbo7eqoxyuaxx5qlcwOjlnie.png" src-width="3280" src-height="1532" align="center"/>

### 換匯池額度配置

為了實現「匯兌池換匯」策略，用户需要建立匯兌池邏輯。此功能允許配置匯兌額度的增加、刪除和修改，並根據用戶的匯兌成交記錄持續計算匯兌池餘額。

<img src="/assets/IyaHb1dgFo9kKox3M3eciAalnsh.png" src-width="3306" src-height="1382" align="center"/>

- 新建（換匯池額度）：根據幣種設定匯兌池的額度，其中：
    - 警戒線金額：某一幣種在換匯額度使用完畢後，該幣種的帳戶餘額不得低於的金額
    - 剩餘額度調整：由於換匯業務不斷進行，用戶可以根據實際業務需求調增或調減相應的額度

<img src="/assets/J8Q1b8TF2oaSm9xiYlhcX8lRnah.png" src-width="3330" src-height="1760" align="center"/>

### 加點設定

券商作為換匯的中介平台，在換匯業務中可能會在換匯申請中收取一定的費用，加點設定則作為一種配置類功能，針對客戶提交的換匯申請，透過在「參考匯率」或「成交匯率」上設定加點數值，收取一定的服務費用。

- 新建（匯率加點）：點選【新建】，在呼喚的彈跳窗中依照「參考匯率來源管道」以「幣種對」設定對應的加點
    - 幣種對選擇完畢後，系統將自動帶出對應的匯率參考
    - 加點的方式有「值」與「比值」2 種方式
    - 「參考匯率」上設定加點數值：
    <img src="/assets/S454bEII8omUagx8cNKcwQfRnZb.png" src-width="3320" src-height="1760" align="center"/>
    - 「成交匯率」上設定加點數值：
    <img src="/assets/BNrZbW1ZPoQI6CxAPMmc8HI6nYc.png" src-width="2360" src-height="1642" align="center"/>

### 大額設置

若使用者選擇了「大額換匯」匯兌類型，則需要在該頁面設定「大額」的標準。即：金額超過多少才需要走到「大額換匯」

- 新建（大額標準）：點選【新建】，依照幣種設定起始點

<img src="/assets/WMenbsqkooL47qxV6DUcfxFRnef.png" src-width="3314" src-height="1758" align="center"/>

## 換匯

業務參數設置完成後，使用者可以正式進入換匯的業務功能中進行操作。業務功能包括了客戶匯兌、參考匯率導入、異常換匯記錄處理。匯兌池額度查看、匯兌損益查看等功能。

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：款項管理 - 換匯</p>
</div>

### 客戶匯兌

換匯流程圖

<img src="/assets/Xel4wsCbCh8XyAbTS93cM870nyg-board.png"/>

詳細操作順序，可參考[快速上手](./Oq3wwTJvJiqpB6kWoz2cy5jFnFd)描述

### 參考匯率

對於用戶換匯，後台可以支持匯率進行查看、導入、編輯、加點設定等功能。

- 其中：
    - 匯率渠道有：香港交易所、IB、恆生、工銀
    - 匯率類型有：帳面匯率、即期匯率、港交所匯率

- 批量導入：點選【批次匯入】，下載模板，填入內容後進行上傳

<img src="/assets/UX0LbWCxyoP7lnxhX4lcyCVon5f.png" src-width="3328" src-height="1554" align="center"/>

模板內容如下（所有欄位均為必填）：

<img src="/assets/FiDLbCO8ioDHlaxviw7cNJOYneh.png" src-width="1904" src-height="214" align="center"/>

### 異常換匯記錄

詳細操作順序，可參考[快速上手](./Oq3wwTJvJiqpB6kWoz2cy5jFnFd)描述

### 匯兌池額度

根據客戶實際換匯成交的記錄，匯兌池的額度會進行即時的變動展示，如果用戶在業務參數設定 - 匯兌下的額度設定編輯了最新的額度後，頁面的記錄也會自動進行更新。

- 額度設置：可快速開啟業務參數設置 - 匯兌 - 換匯池額度配置

<img src="/assets/ISdGb0NbkoVGpFxTSQkcXhavnpd.png" src-width="3302" src-height="1572" align="center"/>

### 匯兌損益

由於時間差，換匯申請在提交至換匯完成時會存在匯率的波動進而影響到兌換的金額。此頁面用於查看每筆換匯申請所產生的匯兌損益，支援匯出至本地。

<img src="/assets/Xhmybgq8Qof7Ozxtxizc3WBcnFf.png" src-width="2344" src-height="1210" align="center"/>

