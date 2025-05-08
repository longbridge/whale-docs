---
title: 快速上手
slug: Tn3iwKPmLi3Xgnk2IsScxDG8nCb
sidebar_position: 0
---


# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用活動系統

<table header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><b>權限名稱</b></p></th><th><p><b>權限說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><ul>
<li>ActivityCenterFull<br/>管理活動、邀請關係配置的權限</li>
</ul></td><td><p>增刪改查標準活動，非標准活動，邀請關係</p></td></tr>
</tbody>
</table>

- 如需對活動設置實物、卡券獎勵，請先在[權益系统](./Nohgwdf4midxtCkmYPtcemFenog)中進行創建
- 如需對活動參與用戶進行限制，請先取得創建用戶分羣權限，參見[投放系统](./HFS5wXhvXi0yh7kKbllc8Xp4n9c)

## 活動達標任務類型及說明

<table>
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="260"/>
</colgroup>
<tbody>
<tr><td><p><b>任務类型</b></p></td><td><p><b>任務说明</b></p></td><td><p><b>计算公式</b></p></td></tr>
<tr><td><p>註冊</p></td><td><p>完成註冊動作</p></td><td></td></tr>
<tr><td><p>下載</p></td><td><p>完成註冊並且下載登錄 App 端內（會判斷是否新設備登錄，若不是新設備登錄 App 則會判定為不符合要求）</p></td><td></td></tr>
<tr><td><p>開戶</p></td><td><p>完成開戶動作且開戶審批通過，開戶成功</p></td><td></td></tr>
<tr><td><p>淨轉入</p></td><td rowspan="6"><p>活动期间内，账户内資金是否達到設定閾值</p></td><td><p>入金 + 轉入股票 - 出金 - 轉出股票的累計金額</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>入金 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>轉入+min（0，淨入金金額）的累計金額</p></td></tr>
<tr><td><p>入金達標</p></td><td><p>轉入現金的累計金額達標</p></td></tr>
<tr><td><p>轉倉達標</p></td><td><p>轉入股票的累計金額達標</p></td></tr>
<tr><td><p>淨資產達標</p></td><td><p>同淨入金</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/轉倉金額達到設定閾值</p></td><td><p>首次入金總金額</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次轉倉總金額</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>完成設置的指定企業認證，或者只完成企業認證動作</p></td><td></td></tr>
</tbody>
</table>

## 標准活動管理

邀請活動：通過用戶邀請好友完成任務，双方獲得獎品（常用的裂變活動模式）

基礎活動：用戶本人完成對應活動獲得獎品，提升關鍵節點轉化率，實現獲客、入金、交易等增長目標

組隊活動：多人一起參與活動，達到指定人數要求且隊員都完成對應任務即可獲得獎品

### 如何創建一個邀請活動？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：運營系統＞活動系統＞標準活動管理</p>
</div>

點擊邀請活動模塊下的新建按鈕

<img src="/assets/BsHabxNQGow09exZLzMciAXDnpg.png" src-width="2700" src-height="420" align="center"/>

邀請活動新建頁面如下

<img src="/assets/XX7xbxRF6oAMWcx0ZKRcNpzNnsb.png" src-width="1280" src-height="1178" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>活動時間</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr><td><p>目標用戶</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可參與活動。</p></td></tr>
<tr><td><p>分群延時時間</p></td><td><p>創建活動時支持選擇用戶分群，限定用戶參與活動。對於分群，我們提供兩種延時時間：</p>
<ul>
<li>五分鐘：即每五分鐘重跑一次分群，一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：即每一天重跑一次分群，對於有入資、轉倉等用戶任務列表的活動，設置一天延時</li>
</ul></td></tr>
<tr><td><p>活動屬性</p></td><td><ul>
<li>常規活動：活動數據為累計相加的數據，計入最終給用戶的邀請獲得獎勵總數據中展示。同一時間段內一個用戶只可參加一個常規活動，獲得一個活動獎品</li>
<li>營銷活動：不限制用戶參與次數且不計入用戶基礎邀請活動所得獎勵總數中，比如：用戶助力活動等等短期邀請活動</li>
</ul></td></tr>
<tr><td><p>獎勵類型</p></td><td><p>選擇發獎規則類型</p>
<ul>
<li>固定獎勵：邀請一個新用戶完成任務即獲得獎勵</li>
<li>階梯獎勵：邀請多人完成任務解鎖不同階梯獎勵並進行疊加，依數量遞增</li>
</ul></td></tr>
<tr><td><p>獎勵規則</p></td><td><p>配置活動任務規則與對應的獎勵</p></td></tr>
<tr><td><p>獎品設置</p></td><td><p>配置在當前活動中單一用戶可獲得同一獎勵的個數上限</p></td></tr>
<tr><td><p>備註</p></td><td><p>非必填，用作運營人員個人備忘，不會展示給用戶</p></td></tr>
</tbody>
</table>

<b>獎勵規則</b>

點擊新增獎勵規則，不同獎勵類型下獎勵規則需填寫的字段不同：

固定獎勵

<img src="/assets/Nq3rbDizBoD2YexjzCCcaT1xnCc.png" src-width="2274" src-height="1742" align="center"/>

階梯獎勵

<img src="/assets/CEA9b127yoXfrnxY6JXc6ruzndN.png" src-width="2340" src-height="1752" align="center"/>

<b>獎品設置</b>

點擊新建獎品設置，該區域出現配置項

可在此處限定獎勵規則中添加的獎品，每位用戶最多可獲得多少次

<img src="/assets/NNttbSpVvom26qxaMDzcRKCinI0.png" src-width="1280" src-height="242" align="center"/>

提交後，邀請活動即可創建完畢

### 如何創建一個基礎活動？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：運營系統＞活動系統＞標準活動管理</p>
</div>

點擊基礎活動模塊下的新建按鈕

<img src="/assets/ZSo7bLnafoxPLExdBQ6cjDBIn2l.png" src-width="2718" src-height="432" align="center"/>

打開如下頁面：

<img src="/assets/ExUgbpcwCohqEjxtHGIcw68Xnld.png" src-width="2058" src-height="1480" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>活動時間</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr><td><p>目標用戶</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可參與活動。</p></td></tr>
<tr><td><p>分群延時時間</p></td><td><p>創建活動時支持選擇用戶分群，限定用戶參與活動。對於分群，我們提供兩種延時時間：</p>
<ul>
<li>五分鐘：即每五分鐘重跑一次分群，一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：即每一天重跑一次分群，對於有入資、轉倉等用戶任務列表的活動，設置一天延時</li>
</ul></td></tr>
<tr><td><p>活動屬性</p></td><td><p>按照不同類型進行選擇</p>
<ul>
<li>不限制：不限制新老用戶均可參與</li>
<li>新用戶：歷史上從未獲得過新用戶獎勵的人才能參與活動獎品</li>
<li>老用戶：只有已獲得過新用戶獎勵的人才能參與獲得獎品</li>
</ul></td></tr>
<tr><td><p>獎勵規則</p></td><td><p>配置活動任務規則與對應的獎勵</p></td></tr>
<tr><td><p>備註</p></td><td><p>非必填，用作運營人員個人備忘，不會展示給用戶</p></td></tr>
</tbody>
</table>

<b>獎勵規則</b>

<img src="/assets/OEiAbqMA3oDEebxUTD1cErTGnef.png" src-width="2256" src-height="1744" align="center"/>

- 不同獎勵生成時間規則下，獎勵的計算邏輯會有部分差別

<table header_column="1" header_row="1">
<colgroup>
<col width="117"/>
<col width="328"/>
<col width="372"/>
</colgroup>
<thead>
<tr><th><p>達標任務類型</p></th><th><p>期間實時生成</p></th><th><p>結束統一生成</p></th></tr>
</thead>
<tbody>
<tr><td><p>註冊</p></td><td><p>完成註冊時生成獎勵發放請求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>開戶</p></td><td><p>完成開戶任務時生成獎勵發放請求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>淨轉入</p></td><td><p>每天跑腳本計算前一天數據是否達標，並生成獎勵發放請求，當存在不同檔位金額轉入時，達到一檔則生成一筆獎勵記錄，多檔時會依據不同檔生成多檔獎勵，獎勵疊加發放</p></td><td><p>活動結束 T+1 日後按照活動時間內用戶發生的所有淨轉入動作總和，判斷處於哪一檔淨轉入獎勵，生成一筆最高對應檔位的獎勵</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>首次入金</p></td><td><p>判斷活動期間內第一次入金當天累計是否達標，達標則生成獎勵發放請求</p></td><td><p>判斷活動期間內第一次入金當天累計是否達標，達標則活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
<tr><td><p>首次轉倉</p></td><td><p>判斷活動期間內第一次轉倉當天累計是否達標，達標則生成獎勵發放請求</p></td><td><p>判斷活動期間內第一次轉倉當天累計是否達標，達標則活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
</tbody>
</table>

- 如交易或資產類達標任務想設置多檔位，對應多個獎勵，可添加多條獎勵規則

例：以下為同一活動中設置 4 條獎勵規則，淨入金任務分為 3 個檔位，選擇「期間實時生成」，則用戶每達標一個任務，生成一條獎勵

<img src="/assets/GdYObaTsBo8EaXxV0frc9S8pnHh.png" src-width="3144" src-height="548" align="center"/>

### 如何創建一個組隊活動？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：運營系統＞活動系統＞標準活動管理</p>
</div>

點擊組隊活動模塊下的新建按鈕

<img src="/assets/KOLFbCSHkoc76SxJgIJcM4itnId.png" src-width="2700" src-height="426" align="center"/>

打開如下頁面：

<img src="/assets/N0PSbR6q0okex5xYXJZcgOusn4g.png" src-width="1886" src-height="1648" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>目前「活動屬性」中僅“助力得獎”活動形式可用，“基礎組隊得獎”和“組隊瓜分”兩種活動形式暫未上線</p>
</div>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>活動時間</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr><td><p>目標用戶</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可作為發起人參與活動。</p></td></tr>
<tr><td><p>活動屬性</p></td><td><p>目前可選擇“助力得獎”</p></td></tr>
<tr><td><p>助力人數</p></td><td><p>可填寫 2-10 內整數，助力人數達到此值後，發起人可得規定獎勵</p></td></tr>
<tr><td><p>發起次數</p></td><td><p>若不限製，則在活動時間內，當發起人獲得規定人數助力並獲得相應獎勵後，可繼續發起下一次助力活動；<br/>若此處限制次數，則在活動時間內，發起人僅可最多發起該限定次數的活動</p></td></tr>
<tr><td><p>助力次數</p></td><td><p>若不限製，每個助力人可進行不限次數的助力；<br/>若此處限制次數，則助力人僅可最多進行該限定次數助力</p></td></tr>
<tr><td><p>助力獎勵</p></td><td><p>此處規定助力人可獲得的獎勵<br/>可選擇用戶分群，助力用戶在該用戶范圍內則可獲得對應獎勵；<br/>通過此方式可設置不同類型的助力用戶獲得不同獎勵，若無此需求，分群選擇全部用戶即可</p></td></tr>
<tr><td><p>發起人可得</p></td><td><p>當助力人數得到設定值時，發起人可獲得的獎勵</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
</tbody>
</table>

提交後，即可創建助力得獎型組隊活動。

## 非標准活動管理

適用場景：線下活動發獎，例如：大客戶回饋之類的無具體活動規則，只是為了單純給用戶發放獎勵的活動

主要功能：可在此創建活動並獲得活動程式碼，之後在權益係統 - 獎勵中心關聯活動程式碼，發放獎勵。

### 如何创建一个非标准活动？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：運營系統＞活動系統＞非標準活動管理</p>
</div>

點擊頁面上方新建按鈕，打開如下頁面

<img src="/assets/D0t7bMf3Lo8LdqxLBsTc8EPEnMc.png" src-width="1742" src-height="1612" align="center"/>

其他字段忽略，關注以下字段即可

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動 code</p></td><td rowspan="2"><p>這兩項在創建活動後，系統會自動賦予，非必要無需人工填寫<br/>生成後不可編輯</p></td></tr>
<tr><td><p>獎勵發放業務代碼</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱有可能展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>費用類型</p></td><td><p>營銷推廣、日常運營、返利，根據個單位自己的活動費用支出歸屬選擇即可</p></td></tr>
</tbody>
</table>

## 邀請關係管理

可在此查詢通過邀請活動綁定的邀請關係，也可以在此進行人工綁定

### 如何新增邀請關係？

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：運營系統＞活動系統＞邀請關係管理</p>
</div>

<b>新增註冊邀請關係</b>

在註冊邀請 tab，點擊邀請關係管理頁面的新建按鈕，打開如下彈窗

<img src="/assets/KDxFbi2r1oiYM5xo8fdchgmhnUf.png" src-width="1280" src-height="183" align="center"/>

<img src="/assets/CdbIb1u6konGhvxdZukc4L5jnMQ.png" src-width="936" src-height="708"/>

填寫被邀請人和邀請人的客戶編號後即可完成綁定

<b>新增開戶邀請關係/入金邀請關係</b>

首先通過篩選找到欲為其綁定邀請人的被邀請人用戶，點擊該用戶詳情，進入查看

<img src="/assets/Mnu9b66utobUjlxfZAMcdPefnQf.png" src-width="2698" src-height="392" align="center"/>

詳情中，會顯示該用戶的註冊邀請人，並可在此選擇進一步綁定開戶邀請人和入金邀請人

<img src="/assets/RQwzbAJMCobBJ2xaIGicnPhGnHc.png" src-width="2712" src-height="1710" align="center"/>

在隨後出現的彈窗中輸入邀請人用戶編號後，即可完成對此被邀請人綁定開戶/入金邀請人的操作

（對於已完成的動作則不可綁定對應節點的邀請人了，未完成動作節點邀請人可以綁定和變更）

