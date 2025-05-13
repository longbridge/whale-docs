---
title: 系統介紹
slug: T0JSwBdbmiU6aNkKRp0cW5q0nSf
sidebar_position: 2
---


# 系統介紹

# 一、系統介紹

證券存入功能是指投資者透過證券交易平台將資金轉入證券帳戶的操作。投資者即可方便地將資金轉入證券帳戶，隨時隨地參與證券交易和投資活動。

Whale 系統包含了存入申請、存入明細、便捷導入參數設置、電子郵件通知券商等功能，流程支援了不同角色的審核要求，有效地提升了證券存入的精確性。整體流程架構如下：

<img src="/assets/LmxHwUyIbhPgxvbvVoccR0LSnUd-board.png" src-width="745" src-height="408"/>

# 二、操作說明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：證券管理 - 證券存入</p>
</div>

## 存入申請

證券存入申請為用戶方提出，申請的內容包含了券商資訊、帳戶資訊、證券詳情與備註 4 大部分。WHALE 使用者可以手動幫助客戶進行證券入倉并根據客戶提交的申請進行駁回、提交審批、通知券商等操作。

- 手工入倉

適用於使用者聯絡後台操作員進行手動新增轉入申請記錄的場景，操作員需要依序填寫客戶的證券資訊、帳戶資訊以及證券的明細資訊。

<img src="/assets/Rs8lbixwro3MMExotmlcy7Uqnwe.png" src-width="2076" src-height="2469" align="center"/>

- 如轉入的股票爲實物股票，則在“是否爲實物股票”點選是
- 駁回（<b>可批量操作）</b>：若客戶遞交證券存入申請資料有誤或使用者反饋本次申請無效時，操作員可以進行【駁回】操作
- 通知券商：由於轉倉業務需要對方券商的配合，在實際操作過程中，為了能夠順利轉入，用戶通常會聯絡券商及時處理。此功能將提供郵件發送功能，並根據郵件發送的結果顯示給用戶是否已經通知了券商，以便於用戶進一步處理業務。
    - 選擇需要寄送郵件的券商機構，系統會自動帶出對方券商的郵件地址，操作員可檢查郵箱是否正確
    - 選擇目標券商下的涉及到的證券轉入申請明細（已發送過的證券申請將被剔除）
    - 預覽郵件內容，確認無誤後點選發送
    - 至郵件發送記錄頁面中查看發送狀態

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/Pe7GbOsfAo6RQqxgTa8c3vbWnde.png" src-width="2858" src-height="1330" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/G1o5bwjNKorKgTxljAHcBMB0nDc.png" src-width="2856" src-height="1332" align="center"/>
</div>
</div>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/PTVDbTCJVoZBlUxF6MZcGEZXn8b.png" src-width="1280" src-height="599" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/BlwubaEs5oJyRsxfs4kcyvOFnWf.png" src-width="1280" src-height="624" align="center"/>
</div>
</div>

- 提交（<b>可批量操作）</b>：經過操作人員初步審查無誤後，可以將申請提交至下一節點的操作人員進行審核 - 入倉操作
- 編輯：若操作員在處理轉入申請時，從客戶方得知券商已通知或未通知的信息，可以透過【編輯】按鈕進行修改通知狀態，以保證對方券商是否知曉需要處理證券轉倉的信息與實際情況相符

<img src="/assets/QV1ebO67IoH0nwxN9OKcyFmHn9f.png" src-width="3830" src-height="1380" align="center"/>

- 指標卡

若券商的證券轉入業務量較大，可以透過系統的分類展示卡進行精細化作業，指標卡的左右排布反映了業務操作的先後順序

<img src="/assets/HggKbN1i8o3i4TxYy3Wcmgnjn1g.png" src-width="3818" src-height="1780" align="center"/>

## 存入明細

由於一個存入申請下可能存在多筆證券明細記錄，具體操作入倉的審核人員需要針對每筆存入明細進行仔細核對，審核通過後方可入倉。

- 修改：若在處理證券明細時，發現用戶提交的某筆具體的明細記錄有問題，可在與客戶確認無誤後可以透過【編輯】按鈕進行修正
    - 修改的范围：股票名稱、託管商編號、子倉編號、證券明細數量、轉入成本、結單備註
    <img src="/assets/RuHIbkkDWoywuhxDvp1criX6nlw.png" src-width="3768" src-height="1058" align="center"/>

- 删除：若在證券明細時，用戶反映提交的某筆具體的明細記錄不再進行轉入，可以透過【删除】按鈕直接刪除目標明細記錄
- 生成 SI 指令（<b>可批量操作）</b>：由於轉倉業務需要在 CCASS 裡填寫必要的 SI 信息，生成 SI 指令功能可以將這些必要的信息以文件的形式自動保存，供用戶進行上傳 CCASS，以免於手動在 CCASS 系統錄入。產生的 SI 指令也可以在「SI 指令清單」選單下進行詳情查看、匯出等操作

<img src="/assets/DoAObUI5Bos9r0xdMTHcChrnnuf.png" src-width="3782" src-height="850" align="center"/>

<img src="/assets/IwfnbUH2oorMwFxIcS5cCZlGnqd.png" src-width="3822" src-height="1796" align="center"/>

- 編輯 SI 指令（<b>可批量操作）</b>：若需要對已經產生的 SI 資訊進行修改，可以點選【編輯 SI 資訊】對目標欄位進行修正

<img src="/assets/EWnjbNP7eoqLFIxmFivcI9dFnod.png" src-width="3800" src-height="1340" align="center"/>

- 處理-成功提交/失敗提交（<b>可批量操作）</b>：若操作人員認定某個明細沒有問題，可以點選【處理】選擇【成功提交】，反之選擇【失敗提交】。
    - 處理完畢後，流程進行至下一節點，需要在工單中心進行審核，審核通過購，股票成功入倉
    <img src="/assets/D67hbE26Voc8FNxtjwnczRPMndh.png" src-width="1280" src-height="381" align="center"/>
    - 若用戶轉入的證券為實體股票，可在處理時同時手動設定實體股票的解凍時間，實體股票將在設定的時間點自動解凍，如若未設定時間，流程通過後則立即解凍
    <img src="/assets/QuDQbdbghoIsUax9znoc9RFEnwh.png" src-width="3802" src-height="1256" align="center"/>

- 審批（<b>可批量操作）</b>：處理結果提交後，操作列出現【審核】按鈕，點選可以召喚出工單審核頁面
    - 處理完畢後，流程進行至下一節點，需要在工單中心進行審核，審核通過購，股票成功入倉
    <img src="/assets/HMD0bvWDBoWEI2xWvrOc8t1Nnih.png" src-width="3900" src-height="1863" align="center"/>

- 提交解凍（<b>可批量操作）</b>：若客戶轉入的證券為實體股票，且在處理時，設定了解凍時間，但在期限到達前想要提前對實體股票進行處理，可以進行手動解凍，提交后需再次進行審批，審批通過後立即解凍成功。

<img src="/assets/FZYXbYEHeoizmgx8nDTcjPjJnRh.png" src-width="3806" src-height="1132" align="center"/>

<img src="/assets/JXKEbi6FsoYFr7xkK2OcHVGJnqv.png" src-width="3836" src-height="1776" align="center"/>

## 存入限制

為了提高證券准入的成功率，杜絕一些諸如已退市股票的轉入，可以透過設定股票黑名單的方式提前控制目標股票的轉入限制。系統提供了單筆限制與批量限制功能：

- 單筆限制

<img src="/assets/M7Q5bgrIUoyYFkxZK0Qc6CUqn7c.png" src-width="3814" src-height="1856" align="center"/>

- 批量限制

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>入口</p>
<img src="/assets/ZdqpbCPZJoHcN5xprGKcq2Sonie.png" src-width="3824" src-height="1844" align="center"/>

</div>
<div class="w-[50%]" width-ratio="50">
<p>範本</p>
<img src="/assets/ZmWNbUItNopz8Cx15DJcl5cUneh.png" src-width="652" src-height="372" align="center"/>

</div>
</div>

## 郵件發送記錄

用戶將目標存入申請通知券商後，相應的郵件記錄將會被保存，以用於後續進行問題追蹤。

<img src="/assets/QC2gboHuWofvXSxXF40cXYMEnsh.png" src-width="3834" src-height="1856" align="center"/>

# 
