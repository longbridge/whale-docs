---
title: 入金
slug: MrUFwI3r1iG4FrkDdSHcEgzrnSe
sidebar_position: 0
---


# 入金

# 一、系統介紹

入金是指投資者將資金轉入其證券帳戶的過程。這一過程涉及多個環節，確保資金的安全、準確地進入投資者的帳戶。

Whale 系統包含了處理入金申請、匹配銀行流水、入金審核、單獨處理開戶中入金、對帳、入金記錄查詢等功能，由於監理與風控需求，系統的功能設計具備多角色、流程化的特色，兼顧了高入金效率与低資金風險。

因不同券商公司對於入金的要求不同，有些券商要求快速入金，有些公司要求精準匹配銀行流水後再入金，綜合考慮了上述因素，系統兼容了 2 套入金的流程，如下：

<img src="/assets/Hp8VwKnyShhc1KbzdQHcMrzYnnb-board.png" src-width="809" src-height="167"/>

## 前置条件

無

# 二、操作說明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：款項管理 - 入金</p>
</div>

## 入金申請

入金申請為用戶方提出，申請的內容包含了幣種、申請金額、收款銀行卡與備註 4 大部分。WHALE 使用者可以手動幫助客戶進行證券入倉并根據客戶提交的申請進行駁回、提交審批等操作。

- 新建 (入金申請)

適用於使用者聯絡後台操作員進行手動入金的場景，操作員需要依序選擇客戶並輸入金的幣種、方式、收款銀行、金額、備註、憑證（如有）

<img src="/assets/N62Jb4i6loaEbCx4WJwcTm6wnQd.gif" src-width="2074" src-height="1000" align="center"/>

- 駁回：若客戶遞交的入金申請資料有誤或使用者反饋本次申請無效時，操作員可以進行【駁回】操作
- 删除：若客戶遞交的入金申請資料有誤或使用者反饋本次申請無效時，操作員也可以透過【删除】按鈕直接刪除目標記錄
- 修改：若在提交入金申請前，發現客戶遞交的某筆入金申請有問題，可在與客戶確認無誤後可以透過【編輯】按鈕進行修正，修改後需進行工單審批，審批通過後修改內容生效。
    - 修改的范围：幣種、入金方式、收款銀行、金額、入金手續費、備註、憑證（重新上傳）
    <img src="/assets/ZfOGbD5bboc6MWxboE8cnoBYnhg.gif" src-width="2076" src-height="998" align="center"/>

- 提交（<b>可批量操作</b>）：經過操作人員初步審查無誤後，可以將申請提交至下一節點的操作人員進行審核 - 提現

操作

- 直接入帳：由於不同券商使用者對於入金的時效性要求不同，直接入帳可以幫助使用者快速處理入金流程，使用者接收到客戶的入金申請後只需補充銀行流水資訊即可完成入帳。直接入帳預設需要進行審批，如果不需要審核可聯絡運維人員進行配置。
    - 需要審批：进入直接入账的弹窗内确认信息无误后，点击【提交审批】后，记录流转至入金审核页面，审批后即可入账
    - 無需審批：进入直接入账的弹窗内确认信息无误后，点击【確定入帳】后即可入账

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>需要審批</p>
<img src="/assets/D50lbtT7qo4P5Gxa4fdcCIGLnee.png" src-width="1678" src-height="1764" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<p>無需審批</p>
<img src="/assets/D9MYbZLwIodUk4xgx96cVQV5n5O.png" src-width="1688" src-height="1754" align="center"/>
</div>
</div>

## 入金匹配

此頁面的數據皆來自銀行帳單中的入金帳單，若券商的業務規範需要銀行流水與入金記錄匹配一直後進行入帳，在確認銀行流水資訊已同步系統後，可手動在入金匹配頁面下處理。處理的方式分為：關聯入帳、退還客戶 2 大類。

<table>
<colgroup>
<col width="100"/>
<col width="544"/>
</colgroup>
<tbody>
<tr><td><p>處理方式</p></td><td><p>名詞解釋</p></td></tr>
<tr><td><p>關聯</p></td><td><p>指代根據銀行帳單中的付款方銀行帳號、付款方姓名、幣種、金額等欄位自動與入金記錄是否一致來進行關聯入賬。</p></td></tr>
<tr><td><p>入金退還</p></td><td><p>指代沒有正常開戶的客戶或因客戶帳戶有風險等原因無法入帳至證券帳戶的情況，需要將資金退回客戶銀行卡的整體處理流程。</p></td></tr>
<tr><td><p>出金退還</p></td><td><p>指代用戶的出金被用戶的收款行拒絕，用戶需要把客戶被收款行退回的錢配對到客戶的帳戶中。（由於對銀行流水而言是一筆資金流入，為了能夠區分正常的入金，故放置在入金匹配的頁面）</p></td></tr>
</tbody>
</table>

- 關聯：僅入金的銀行賬單中系統無法自動匹配需要人工操作的記錄，在此頁面下操作員可以根據系統提示進行確認，並進行後續入賬或者其他操作。
    - 關聯頁面將根據姓名配對用戶自動比對欄位（如圖），確認無誤後可點選【關聯】
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/TvXgbQOkcom643xSHe5cbtnDnBc.png" src-width="3818" src-height="1842" align="right"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/SkrUbgAmDoo4fMxHRy2cOR6Qngg.png" src-width="3904" src-height="1950" align="center"/>
        </div>
    </div>
    - 如係統預設匹配的用戶不準，可透過【自定義】手動關聯該筆銀行流水所對應的客戶。關聯的方式有：入金的申請與證券帳號
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/NthfbU9kiozjvgxLe7tcsd4Gntb.png" src-width="3308" src-height="1776" align="center"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/GMHlbwoAgooLyRxOW2qct14MnHf.png" src-width="3308" src-height="1750" align="center"/>
        </div>
    </div>

入金退還：若因種種原因，導致入金未能正常進入客戶的證券帳戶，需要對這筆記錄進行退款時，可以使用該功能進行操作。用戶需填寫客戶的銀行卡訊息，確認無誤後點選【確定】流轉至入金審核頁面進行審核操作。

<img src="/assets/YoWubP32PoVhU7x4YQbcF0K9n5a.png" src-width="2436" src-height="1326" align="center"/>

出金退還：由於入金匹配頁面的數據來自銀行流水流入的信息，如果用戶在處理客户出金的時候被銀行拒絕，在銀行流水中會以流入的形式存在，用戶需要關聯出金的業務流水號通過【出金退還】功能處理此類記錄。

<img src="/assets/LnWfbAicboGKm5xzDMic77pNnDc.png" src-width="2366" src-height="1234" align="center"/>

## 入金審核

用戶在「入金匹配」頁面中依賴銀行流水流入的資訊進行處理後，下游的審核人員會對處理的結果進行審批，通過后方可入帳。對於正常關聯入帳的入金，由於存在客戶在入金時時證券帳戶仍在客戶中的情況，後台將針對這類記錄單獨進行審批。

- 開戶中：選取目標記錄後，點選【審批】後進入詳情頁面再次核對訊息，確認無誤後發起工單審批

<img src="/assets/LG99bFzZ1om6XBxjBOicmRfqnae.png" src-width="3334" src-height="1598" align="center"/>

- 已開戶：選取目標記錄後，點選【審批】後進入詳情頁面再次核對訊息，確認無誤後審核通過

<img src="/assets/NlfTbduDDoOj0LxU50KcMPpLnsf.png" src-width="3318" src-height="1598" align="center"/>

- 入金退還：選取目標記錄後，點選【審批】後喚出審批工單，確認資訊無誤後審核通過

<img src="/assets/KgOJbaRMloqFtrxpi2UcpngQnxe.png" src-width="3330" src-height="1596" align="center"/>

- 出金退還：選取目標記錄後，點選【審批】後確認無誤後直接通過，無需走工單審批流程

<img src="/assets/KsEebLN1AoAKXCxzwsic7invnve.png" src-width="3318" src-height="1598" align="center"/>

## 開戶中入金

由於入金流程與開戶流程可以並行發起，存在入金流程已通過但開戶流程仍在執行中的情況，針對該類入金記錄，用戶可在該頁面中進行跟踪已通過入金流程的記錄對應的開戶情況。

用戶可以在頁面中「開戶狀態」查看即時的狀態，如果客戶的開戶流程未通過，可以將其【駁回】（<b>可批量操作</b>）

<img src="/assets/KLf4b0zNOoVViqxZs3qcT4D5nUh.png" src-width="3392" src-height="1693" align="center"/>

## 入金對帳

為了保障資金流水的準確性，業務中需要將銀行的流水與系統中的入金記錄進行比對，提升入金的準確率。銀行流水的來源有 2 種：①API 對接（自動產生）、②手動導入。

- 對帳：用戶可以選擇目標期間的銀行流水進行刷新，系統將自動匹配銀行流水與系統的入金記錄，對帳完成後，可以關注清單中的「對帳結果」列，如果不一致，需要進一步追蹤處理。

<img src="/assets/H0jObR8uioedaVxngMFcYgRSntc.png" src-width="3336" src-height="1770" align="center"/>

<img src="/assets/UIOdbtgf8oTRa2xcj0GcroFlnef.png" src-width="3828" src-height="1870" align="center"/>

## 入金記錄

入金記錄頁面記錄入金的全流程狀態，使用者可隨時進行查詢、導出、導入等操作。

- 若用户在使用【直接入账】入金时，没有录入银行流水信息，可在该页面中通过【导入银行流水】批量导入银行流水信息

<img src="/assets/S681bb9u2o1CidxX2NBcHYopnTb.png" src-width="3816" src-height="1854" align="center"/>

# 三、FAQ

Q：入金方式與通路有哪些？

A：常見的入金方式有：網路銀行轉帳、電匯、銀證轉帳、子帳戶、eDDA、FPS 轉數快、支票、ATM/櫃檯、PAYNOW。

Q：

A：

Q：

A：

Q：

A：

