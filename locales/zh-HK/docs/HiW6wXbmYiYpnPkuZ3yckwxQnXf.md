---
title: 系統介紹
slug: HiW6wXbmYiYpnPkuZ3yckwxQnXf
sidebar_position: 2
---


# 系統介紹

# 一、系統介紹

入金是指投資者將資金轉入其證券賬戶的過程。這一過程涉及多個環節，確保資金的安全、準確地進入投資者的賬戶。

Whale 系統包含了處理入金申請、匹配銀行流水、入金審核、單獨處理開戶中入金、對賬、入金記錄查詢等功能，由於監理與風控需求，系統的功能設計具備多角色、流程化的特色，兼顧了高入金效率与低資金風險。

因不同券商公司對於入金的要求不同，有些券商要求快速入金，有些公司要求精準匹配銀行流水後再入金，綜合考慮了上述因素，系統兼容了 2 套入金的流程，如下：

<img src="/assets/SsSPwZG0oh6yXbbepuxcYInsnke-board.png" src-width="809" src-height="167"/>

## 前置条件

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
<tr><td><p>管理資金參數、銀行賬單、入金的權限</p></td><td><ul>
<li>管理銀行賬單、出入金記錄/方式、銀行卡、換匯業務、資金指引的權限</li>
<li>管理資金參數的權限</li>
</ul></td></tr>
</tbody>
</table>

# 二、操作說明

# 入金配置

## 資金參數配置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數設置 &gt; 資金參數</p>
</div>

1. 公司銀行賬戶

在客戶入金前，需要在後臺添加對應公司銀行賬戶，並且配置公司銀行賬戶下對應的入金方式。

<img src="/assets/Ps7TbaliYouroyxhlZGce9JGnkh.png" src-width="3286" src-height="998" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司自行增加對應公司銀行賬戶信息。
- 編輯：對已經添加的公司银行账户信息可以進行人工編輯。

1. 幣種

在客戶入金前，需要進行入金幣種設置。

<img src="/assets/GWgZbkb8uoWN3fx0rXTc1G85nrg.png" src-width="3282" src-height="988" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司自行增加幣種。
- 編輯：對已經添加的幣種可以進行人工編輯。

## 客戶銀行卡

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款項管理&gt;客户銀行卡</p>
</div>

客戶需要在券商配置好客戶自己的銀行卡信息，添加方式包括：客戶客戶端 App 自行添加、後臺添加。

<img src="/assets/D9fsb2NTvo6FYsxoYOgc6zR4nSf.png" src-width="3349" src-height="1396" align="center"/>

<b>操作按鈕說明</b>

- 批量新增：依照模板批次進行銀行卡資訊的增加
- 新增銀行卡：單筆新增銀行卡
- 回收站：展示已刪除的銀行卡信息
- 設置拒絕理由：設置駁回銀行卡拒絕理由
- 審覈：後臺審覈銀行卡
- 查看備註：查看銀行卡相關備註
- 刪除：刪除銀行卡信息
- 更新入金見證狀態：關聯客戶入賬明細，將銀行卡的入金見證狀態從“待見證”更新爲“已見證”

## eDDA 授權

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款項管理&gt;客户銀行卡</p>
</div>

如果客戶需要進行 eDDA 入金，則需要進行 eDDA 授权，如果客戶进行 eDDA 授权之后，則後臺可以查到對應記錄。

<img src="/assets/Nbo3bOe0io6NQoxqFplcCne1n2f.png" src-width="3282" src-height="838" align="center"/>

<b>操作按鈕說明</b>

- 刷新：重新獲取最新的 eDDA 的授權記錄
- 備註：對授權記錄進行配置
- 修改狀態：修改授權記錄的狀態
- 刪除：對於授權中的授權記錄可以進行人工後台刪除

## 銀行相關信息配置

客戶或者公司銀行賬戶信息配置時需要使用的“常見銀行枚舉值”、“國家/區域枚舉值”、“銀行區域列表枚舉值”都可以通過後臺進行配置。

### 1.卡所屬銀行

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款項管理&gt;App 管理&gt;卡所屬銀行</p>
</div>

<img src="/assets/GMfcbRsw7oxBruxvhzdcURGonsd.png" src-width="3284" src-height="762" align="center"/>

<b>操作按鈕說明</b>

- 新建：單筆增加各地區常見銀行列表信息
- 編輯：對於已添加的銀行列表信息進行編輯

### 2.用戶綁卡 - 國家/地區

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款項管理&gt;App 管理&gt;用戶綁卡 - 國家/地區</p>
</div>

<img src="/assets/RXoqbKWNZofQqixXwW4cEL2enEe.png" src-width="3260" src-height="774" align="center"/>

### 3.銀行區域列表

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款項管理&gt;App 管理&gt;銀行區域列表</p>
</div>

<img src="/assets/S3tmbT8Vio1qcYxtpz6ctPSrnAe.png" src-width="3290" src-height="978" align="center"/>

<b>操作按鈕說明</b>

- 新建：單筆增加銀行區域列表信息
- 編輯：對於已添加的銀行區域列表信息進行編輯
- 删除：删除銀行區域列表信息

## 入金指引配置

对于客户端用户入金页面，可以后台配置对应操作指引以及入金参数

### 1.入金指引

<img src="/assets/AK7jbhzoqonEhIxXa0kcfu90noe.png" src-width="3286" src-height="980" align="center"/>

### 2.入金參數

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款項管理&gt;App 管理&gt;入金參數</p>
</div>

<img src="/assets/XoehbngXxoqlidxs115cGbUQnje.png" src-width="3260" src-height="1726" align="center"/>

<b>操作按鈕說明</b>

- 新建：單筆新建入金參數
- 編輯：對於已添加的入金參數列表信息進行編輯
- 刪除：刪除入金參數列表信息
- 上架：是指配置的入金參數需應用於客戶端展示，則可以將參數上架
- 下架：是指配置的入金參數無法適用於客戶端展示，則可以將參數下架
- 複製：通過複製原本參數信息進行快速新建新的入金參數
- 審批：對於入金參數如果開通了工單審批，則上述的所有操作提交之後，需要工單審批

<b>多家收款銀行配置</b>

- 如客戶端需要根據客戶選擇的銀行，在同一個入金方式下需要展示多個收款銀行，則可以參考如下截圖的配置。

<img src="/assets/JTldbcQgio6BvKxqiw5c8EYOnMz.png" src-width="3278" src-height="706" align="center"/>

# 入金操作

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：款項管理 - 入金</p>
</div>

## 入金申請

入金申請為用戶方提出，申請的內容包含了幣種、申請金額、收款銀行卡與備註 4 大部分。WHALE 使用者可以手動幫助客戶進行證券入倉并根據客戶提交的申請進行駁回、提交審批等操作。

- 新建 (入金申請)

適用於使用者聯絡後台操作員進行手動入金的場景，操作員需要依序選擇客戶並輸入金的幣種、方式、收款銀行、金額、備註、憑證（如有）

<img src="/assets/KkeVbvwzToGPx1xtVh0cetdOnKd.gif" src-width="2074" src-height="1000" align="center"/>

- 駁回：若客戶遞交的入金申請資料有誤或使用者反饋本次申請無效時，操作員可以進行【駁回】操作
- 删除：若客戶遞交的入金申請資料有誤或使用者反饋本次申請無效時，操作員也可以透過【删除】按鈕直接刪除目標記錄
- 修改：若在提交入金申請前，發現客戶遞交的某筆入金申請有問題，可在與客戶確認無誤後可以透過【編輯】按鈕進行修正，修改後需進行工單審批，審批通過後修改內容生效。
    - 修改的范围：幣種、入金方式、收款銀行、金額、入金手續費、備註、憑證（重新上傳）
    <img src="/assets/IlRVbRl3toqWxFxk9tJcmms6nNf.gif" src-width="2076" src-height="998" align="center"/>

操作

- 直接入賬：由於不同券商使用者對於入金的時效性要求不同，直接入賬可以幫助使用者快速處理入金流程，使用者接收到客戶的入金申請後只需補充銀行流水資訊即可完成入賬。直接入賬預設需要進行審批，如果不需要審核可聯絡運維人員進行配置。
    - 需要審批：进入直接入账的弹窗内确认信息无误后，点击【提交审批】后，记录流转至入金审核页面，审批后即可入账
    - 無需審批：进入直接入账的弹窗内确认信息无误后，点击【確定入賬】后即可入账

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>需要審批</p>
<img src="/assets/FlOqbkU7loUf14xPDTscaU6cnzh.png" src-width="1678" src-height="1764" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<p>無需審批</p>
<img src="/assets/OYtkbLK4QolXjYx2OalckTh1nwf.png" src-width="1688" src-height="1754" align="center"/>
</div>
</div>

- 憑證關聯，如果操作入賬的申請是多筆，則可以進入憑證關聯頁面進行批量操作入賬

<img src="/assets/U0UNbBAO6oOkvTx0QigcEti1nYd.png" src-width="3774" src-height="1000" align="center"/>

進入憑證關聯頁面，會篩選出所有等待入賬的申請單，由操作者進行選擇，在覈對無誤後提交入賬

<img src="/assets/DQFAbPj8Bo8ScCxmXkVcndcQnxn.png" src-width="3324" src-height="1634" align="center"/>

## 入金匹配

此頁面的數據皆來自銀行賬單中的入金賬單，若券商的業務規範需要銀行流水與入金記錄匹配一直後進行入賬，在確認銀行流水資訊已同步系統後，可手動在入金匹配頁面下處理。處理的方式分為：關聯入賬、退還客戶 2 大類。

<table>
<colgroup>
<col width="100"/>
<col width="544"/>
</colgroup>
<tbody>
<tr><td><p>處理方式</p></td><td><p>名詞解釋</p></td></tr>
<tr><td><p>關聯</p></td><td><p>指代根據銀行賬單中的付款方銀行賬號、付款方姓名、幣種、金額等欄位自動與入金記錄是否一致來進行關聯入賬。</p></td></tr>
<tr><td><p>入金退還</p></td><td><p>指代沒有正常開戶的客戶或因客戶賬戶有風險等原因無法入賬至證券賬戶的情況，需要將資金退回客戶銀行卡的整體處理流程。</p></td></tr>
<tr><td><p>出金退還</p></td><td><p>指代用戶的出金被用戶的收款行拒絕，用戶需要把客戶被收款行退回的錢配對到客戶的賬戶中。（由於對銀行流水而言是一筆資金流入，為了能夠區分正常的入金，故放置在入金匹配的頁面）</p></td></tr>
</tbody>
</table>

- 關聯：僅入金的銀行賬單中系統無法自動匹配需要人工操作的記錄，在此頁面下操作員可以根據系統提示進行確認，並進行後續入賬或者其他操作。
    - 關聯頁面將根據姓名配對用戶自動比對欄位（如圖），確認無誤後可點選【關聯】
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/Wb1ibQjqOoeDcjxeySLcfNXNnHd.png" src-width="3818" src-height="1842" align="right"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/Wj7sbldCoopPv3xe4rHcfuHpnNg.png" src-width="3904" src-height="1950" align="center"/>
        </div>
    </div>
    - 如係統預設匹配的用戶不準，可透過【自定義】手動關聯該筆銀行流水所對應的客戶。關聯的方式有：入金的申請與證券賬號
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/QgoqbKGL6oftC5xOl7JczjwEnRc.png" src-width="3308" src-height="1776" align="center"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/FFOubF4z9oJkS7xQCFqcSVvFnid.png" src-width="3308" src-height="1750" align="center"/>
        </div>
    </div>

入金退還：若因種種原因，導致入金未能正常進入客戶的證券賬戶，需要對這筆記錄進行退款時，可以使用該功能進行操作。用戶需填寫客戶的銀行卡訊息，確認無誤後點選【確定】流轉至入金審核頁面進行審核操作。

<img src="/assets/Q9ZybG1ano5vKixwrqzcvHSanNN.png" src-width="2436" src-height="1326" align="center"/>

出金退還：由於入金匹配頁面的數據來自銀行流水流入的信息，如果用戶在處理客户出金的時候被銀行拒絕，在銀行流水中會以流入的形式存在，用戶需要關聯出金的業務流水號通過【出金退還】功能處理此類記錄。

<img src="/assets/OouibaBavoYDtgxrTyocGWl6nle.png" src-width="2366" src-height="1234" align="center"/>

## 入金審核

用戶在「入金匹配」頁面中依賴銀行流水流入的資訊進行處理後，下游的審核人員會對處理的結果進行審批，通過后方可入賬。對於正常關聯入賬的入金，由於存在客戶在入金時時證券賬戶仍在客戶中的情況，後台將針對這類記錄單獨進行審批。

- 開戶中：選取目標記錄後，點選【審批】後進入詳情頁面再次核對訊息，確認無誤後發起工單審批

<img src="/assets/BLVBbve42ozKLPxcYHjcH9kWnFb.png" src-width="3334" src-height="1598" align="center"/>

- 已開戶：選取目標記錄後，點選【審批】後進入詳情頁面再次核對訊息，確認無誤後審核通過

<img src="/assets/Tk2DbATvmoM28OxL8S6cGZENnez.png" src-width="3318" src-height="1598" align="center"/>

- 入金退還：選取目標記錄後，點選【審批】後喚出審批工單，確認資訊無誤後審核通過

<img src="/assets/SwY0b0oBDoBkJex4zohczvxqnQb.png" src-width="3330" src-height="1596" align="center"/>

- 出金退還：選取目標記錄後，點選【審批】後確認無誤後直接通過，無需走工單審批流程

<img src="/assets/Fc1HbyiKgoLkSIxsX5JcyXVonHb.png" src-width="3318" src-height="1598" align="center"/>

## 銀證入金

在銀證開戶之後，用戶可以通過銀證入金，系統接收到銀行通知後，會直接匹配用戶後自動入賬，無需人工干預。

<img src="/assets/QQ2jbmrkDolXXrxBlcfcOjiOnPc.png" src-width="2854" src-height="1074" align="center"/>

## eDDA 入金

在 eDDA 授權完成之後，用戶可以通過 eDDA 入金，系統接收到銀行通知後，會直接匹配用戶後自動入賬，無需人工干預。

<img src="/assets/J0SKbWDcLoQXc6xg5fPcTACWnBf.png" src-width="2820" src-height="1048" align="center"/>

## FPS 轉數快

對於 FPS 轉數快，在或者銀行賬單後，系統可以通過賬單和入金申請進行自動匹配，匹配一致後可以自動入賬。

<img src="/assets/EK3ObfOb1oc07UxfxMXcgsb5nzd.png" src-width="2324" src-height="1070" align="center"/>

## 開戶中入金

- 客戶選擇認證類型爲轉賬驗證，則需要通過入金申請進行操作入賬，具體操作詳見“入金申請”
- 客戶選擇認證類型爲支票驗證，由於客戶端未提交入金請申請，需要以銀行流水爲準入賬，具體操作詳見“入金匹配”

由於入金流程與開戶流程可以並行發起，存在入金流程已通過但開戶流程仍在執行中的情況，針對該類入金記錄，用戶可在該頁面中進行跟踪已通過入金流程的記錄對應的開戶情況。

用戶可以在頁面中「開戶狀態」查看即時的狀態，如果客戶的開戶流程未通過，可以將其【駁回】（<b>可批量操作</b>）

<img src="/assets/ZhLmbvYE4orSm4xen3Hc3eqrnfg.png" src-width="3392" src-height="1693" align="center"/>

## 入金對賬

為了保障資金流水的準確性，業務中需要將銀行的流水與系統中的入金記錄進行比對，提升入金的準確率。銀行流水的來源有 2 種：①API 對接（自動產生）、②手動導入。

- 對賬：用戶可以選擇目標期間的銀行流水進行刷新，系統將自動匹配銀行流水與系統的入金記錄，對賬完成後，可以關注清單中的「對賬結果」列，如果不一致，需要進一步追蹤處理。

<img src="/assets/RBp9bICB4oZqjVxxFmYcsj4GnOh.png" src-width="3336" src-height="1770" align="center"/>

<img src="/assets/WxpxbAAATojywIxFPXfcUzAEnGb.png" src-width="3828" src-height="1870" align="center"/>

## 入金記錄

入金記錄頁面記錄入金的全流程狀態，使用者可隨時進行查詢、導出、導入等操作。

- 若用户在使用【直接入账】入金时，没有录入银行流水信息，可在该页面中通过【导入银行流水】批量导入银行流水信息

<img src="/assets/X1TVb7Ur1oSm8HxLRkFc0uKYnlg.png" src-width="2804" src-height="1056" align="center"/>

- 對於已經凍結的支票入金，在“預計解凍時間”之前可以後臺手工解凍，也可以等系統自動解凍。

<img src="/assets/Lc0Gba5PHom600xkoeNcNQgBnxe.png" src-width="1640" src-height="367" align="center"/>

- 人工提交解凍申請後，需等待工單審批。

<img src="/assets/OSaZb9E84oTrF8xukv5czc7NnId.png" src-width="1622" src-height="470" align="center"/>

