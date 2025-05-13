---
title: 系統介紹
slug: RetvwXjhyi4FLLkq9Qmc2n4wn9e
sidebar_position: 1
---


# 系統介紹

活動系統是 Whale OPA 運營系統所提供營銷活動管理核心，方便劵商租戶來管理各種市場營銷活動，提供各種營銷活動的配置管理，系統目前提供下列活動類型組：
- 標準活動類型：邀請活動/基礎活動/組隊活動等等
- 非標準活動管理：提供自主的活動管理要素，方便滿足安排個性化活動

透過方便的營銷活動模板，來管理各種營銷活動，實現數字化營銷。

<img src="/assets/X73CbSkaIo7tLSxomLrcalD3ngc.png" src-width="1276" src-height="920"/>

## 1.功能介紹

<table header_column="1">
<colgroup>
<col width="126"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>菜單功能目錄</p></td><td><p>作業說明</p></td></tr>
<tr><td><p>標準活動管理</p></td><td><p>具有標準活動模版，可選中對應活動模版創建活動，並進行規則配置與活動數據的管理</p>
<ul>
<li>邀請活動模版：通過用戶邀請好友完成任務獲得獎品（常用的裂變活動模式）</li>
<li>基礎活動模版：用戶本人完成對應活動獲得獎品（每月新用戶活動更新、老用戶回饋活動。）</li>
<li>組隊活動模版：多人一起參與活動，達到指定人數要求且隊員都完成對應任務即可獲得獎品。</li>
</ul></td></tr>
<tr><td><p>非標準活動管理</p></td><td><p>主要用於進行非標準活動，如線下活動發獎，等類型的線上管理與歸檔</p></td></tr>
<tr><td><p>邀請關係管理</p></td><td><p>主要對於活動相關的邀請綁定關係進行管理。可對用戶的邀請關係信息查詢、更改、綁定</p></td></tr>
</tbody>
</table>

### 1.1 活動系統架構

<img src="/assets/YMfdb8VTfo2ahgxnDFKcaV4FnUf.png" src-width="806" src-height="492" align="center"/>

### 1.2 活動達標任務類型及說明

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
<tr><td><p>淨轉入</p></td><td rowspan="6"><p>活动期间内，账户内資金是否達到設定閾值</p></td><td><p>入金 + 轉入 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>入金 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>轉入+min（0，淨入金金額）的累計金額</p></td></tr>
<tr><td><p>入金達標</p></td><td><p>轉入現金的累計金額達標</p></td></tr>
<tr><td><p>轉倉達標</p></td><td><p>轉入股票的累計金額達標</p></td></tr>
<tr><td><p>淨資產達標</p></td><td><p>同淨轉入</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/轉倉金額達到設定閾值</p></td><td><p>首次入金總金額</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次轉倉總金額</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>完成設置的指定企業認證，或者只完成企業認證動作</p></td><td></td></tr>
</tbody>
</table>

### 1.3 活動獎勵說明

目前創建活動時可設置三種獎勵類型：實物、卡券、現金

實物和卡券的創建參見[權益系统](./Nohgwdf4midxtCkmYPtcemFenog)介紹

### 1.4 活動配置流程

適用：運營人員，活動系統涉及到下列幾個主體：
活動系統：運營人員負責配置管理在線活動
用戶分群：圈定目標用戶，以及活動過程中資產相關數據獲取
權益系統：關聯相關活動獎勵
<img src="/assets/MrnBbhmJro3K4bxzuyRcf8KJnXb.jpeg" src-width="2190" src-height="894" align="center"/>

## 
## 2.標準活動管理

執行菜單：運營系統&gt; 活動系統&gt;標準活動管理

本作業可以維護管理標準活動

上層：可選擇活動模版進行創建

下層：可對已創建好的活動紀錄進行查詢和管理

<img src="/assets/Uq5SbZ3mTooSBIxJeYDciG66nYc.png" src-width="3766" src-height="1562" align="center"/>

活動管理列表字段說明

<table>
<colgroup>
<col width="111"/>
<col width="771"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>序號</p></td><td><p>創建活動後程序自動賦的序號</p></td></tr>
<tr><td><p>活動代碼</p></td><td><p>創建活動後程序自動給該活動賦的代碼，該代碼與活動為一對一的關係，可用於後續的查詢，補發獎勵等各種操作</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>創建活動時確定的活動名稱</p></td></tr>
<tr><td><p>類型</p></td><td><p>在創建活動時選擇的活動類型，即模版中的類型</p></td></tr>
<tr><td rowspan="2"><p>屬性</p></td><td rowspan="2"><p>和活動類型聯動，不同活動類型會有以下屬性：<br/>邀請活動</p>
<ul>
<li>常規活動：活動數據為累計相加的數據，計入最終給用戶的邀請獲得獎勵總數據中展示。同一時間段內一個用戶只可參加一個常規活動，獲得一個活動獎品</li>
<li>營銷活動：不限制用戶參與次數且不計入用戶基礎邀請活動所得獎勵總數中，比如：用戶助力活動等等短期邀請活動<br/>基礎活動</li>
<li>新用戶：新用戶活動（僅基礎活動）</li>
<li>老用戶：老用戶活動（僅基礎活動）</li>
</ul></td></tr>
<tr></tr>
<tr><td><p>狀態</p></td><td><p>當前活動狀態：</p>
<ul>
<li>草稿（已創建活動但還未點擊發佈之前）：查看詳情、編輯、關閉、發佈</li>
<li>運行中（活動已發佈且未到結束時間）：查看詳情、編輯、關閉</li>
<li>已結束（已過活動結束時間）：查看詳情</li>
</ul></td></tr>
<tr><td><p>分群延時時間</p></td><td><p>創建活動時支持選擇用戶分群，限定用戶參與活動。對於分群，我們提供兩種延時時間：</p>
<ul>
<li>五分鐘：即每五分鐘重跑一次分群，一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：即每一天重跑一次分群，對於有入資、轉倉等用戶任務列表的活動，設置一天延時<br/>在活動管理列表中，此處顯示每個活動所選擇的分群延時時間</li>
</ul></td></tr>
<tr><td><p>活動時間</p></td><td><p>顯示開始時間 - 結束時間；</p></td></tr>
<tr><td><p>創建時間</p></td><td><p>活動創建時間</p></td></tr>
<tr><td><p>操作</p></td><td><p>在上面狀態欄，列出了不同狀態的活動可以執行的操作</p></td></tr>
</tbody>
</table>

### 
### 2.1 邀請活動

#### 2.1.1 邀請活動業務實現邏輯說明

任意活動頁面只要配置了分享功能，則該頁面通過用戶分享傳播後完成新用戶註冊，均會進行邀請關係綁定。

邀請活動通過綁定關係進行發獎。

<img src="/assets/AEN0b9E4IomM6zx64CWcUWJ3nMf.jpeg" src-width="1474" src-height="494" align="center"/>

此外，邀請活動支持固定獎勵和階梯獎勵兩種奖励類型

固定獎勵：每邀請一個新用戶完成任務，即会固定獲得獎勵

階梯獎勵：劃分被邀請人數量區間，邀請人數位於某一區間內，每邀請一個新用戶即會獲得該區間對應的獎勵，到達下一區間時還可設置邀請人的額外獎勵，通常邀請人數越多獎勵越大。

#### 2.1.2 邀請活動配置

運營系統＞活動系統＞標準活動

若要新增一個邀請活動，可以點擊邀請活動模塊下的新建按鈕

<img src="/assets/AER4bgL9IoaITpxZVxBcRb4qncb.png" src-width="1280" src-height="199" align="center"/>

邀請活動新建頁面如下

<img src="/assets/Dg0vbXSaso8i8cxGNrdcmK63nEb.png" src-width="2108" src-height="1941" align="center"/>

活動模版字段按如下規則進行配置：

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

點擊新增獎勵規則，不同獎勵類型和活動屬性填寫字段不同：

<u>固定獎勵</u>

<img src="/assets/U3aZb5mg5of06dx43ICcE8xqnKb.png" src-width="1280" src-height="980" align="center"/>

<u>階梯獎勵</u>

<img src="/assets/JDXobSrslo2J3WxPlPPcy2xxn5b.png" src-width="1280" src-height="958" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

<b>獎品設置</b>

點擊新建獎品規則，該區域出現配置項：

可在此處限定獎勵規則中添加的獎品，每位用戶最多可獲得多少次

<img src="/assets/TzYsbeR8noYcW8xL3HwcJzuHnSc.png" src-width="2040" src-height="386" align="center"/>

#### 2.1.3 邀請活動奖励数据查询

只有當活動運行中進行發獎時才有數據顯示

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

<img src="/assets/NUnrbOdUfo8ATMxTOEic4XWfnHf.png" src-width="3280" src-height="852" align="center"/>

數據統計

待提交：未提交發放請求的獎勵記錄

發放中：發放中的獎勵記錄

已發放：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消發放的獎勵記錄數

鎖倉中：若活動達標任務設置了鎖倉，則此處為正在鎖倉中的獎勵記錄數

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>獎勵具體發放給的用戶 id</p></td></tr>
<tr><td><p>邀請人/被邀請人編號</p></td><td><p>該獎勵用戶編號所對應的邀請或者被邀請人的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td><p>用戶獲得該獎勵所完成的任務名稱</p></td></tr>
<tr><td><p>達標時間</p></td><td><p>用戶任務完成時間（基本獎勵發放時間）</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶（無多賬戶情況可忽略）</p></td></tr>
<tr><td><p>操作</p></td><td><p>提交請求：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消發放：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

### 2.2 基礎活動

#### 2.2.1 基礎活動業務實現邏輯說明

<img src="/assets/S2dCbbeR9oPAuYxOnM0c1miLnne.jpeg" src-width="1394" src-height="494" align="center"/>

#### 2.2.2 基礎活動配置

運營系統＞活動系統＞標準活動

點擊邀請活動模塊下的新建按鈕

<img src="/assets/HN74b0O8hoeRyPxcxh9cg5rknXf.png" src-width="1280" src-height="203" align="center"/>

打開如下頁面：

<img src="/assets/Viekbh7vtonooRxtudHcpSoSnbg.png" src-width="2058" src-height="1480" align="center"/>

活動模版字段按如下規則進行配置：

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

<img src="/assets/KUNcbA3NmofF3PxOJmycvDnLnUb.png" src-width="1280" src-height="989" align="center"/>

- 不同獎勵生成時間規則下，獎勵的計算邏輯會有部分差別

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="240"/>
</colgroup>
<tbody>
<tr><td><p>達標任務類型</p></td><td><p>實時生成</p></td><td><p>結束統一生成</p></td></tr>
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

<img src="/assets/K1grbEvVzoM2RbxUnmFc1Tyxn8d.png" src-width="3144" src-height="548" align="center"/>

#### 2.2.3 基础活动獎勵数据查询

活動獎勵數據查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

<img src="/assets/OSKFbMvOFo0ZaCxitOUct92JnJf.png" src-width="2712" src-height="1132" align="center"/>

數據統計

待提交：未提交發放請求的獎勵記錄

發放中：發放中的獎勵記錄

已發放：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消發放的獎勵記錄數

鎖倉中：若活動達標任務設置了鎖倉，則此處為正在鎖倉中的獎勵記錄數

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="120"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>獎勵具體發放給的用戶 id</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td><p>用戶獲得該獎勵所完成的任務名稱</p></td></tr>
<tr><td><p>達標時間</p></td><td><p>用戶任務完成時間（基本獎勵發放時間）</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶（無多賬戶情況可忽略）</p></td></tr>
<tr><td><p>是否鎖倉</p></td><td><p>是否需要滿足鎖倉需求</p></td></tr>
<tr><td><p>是否鎖倉後發放</p></td><td><p>根據配置活動時的額選擇展示</p></td></tr>
<tr><td><p>鎖倉金額</p></td><td><p>獲得該獎勵後需要鎖倉的金額</p></td></tr>
<tr><td><p>貨幣</p></td><td><p>鎖倉資金對應的幣種</p></td></tr>
<tr><td><p>鎖倉到期時間</p></td><td><p>獎勵到賬時間 + 鎖倉期限=鎖倉到期時間</p></td></tr>
<tr><td><p>鎖倉時間</p></td><td><p>鎖倉期限</p></td></tr>
<tr><td><p>操作</p></td><td><p>提交：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

### 2.3 組隊活動

#### 2.3.1 組隊活動業務流程

<img src="/assets/AguQb4BkIoIIRCx93fvcSiZCnKd.jpeg" src-width="2274" src-height="434" align="center"/>

#### 2.3.2 組隊活動配置

運營系統＞活動系統＞標準活動

點擊組隊活動模塊下的新建按鈕

<img src="/assets/V6KbbtB01oan48x5crCcIj4Fnph.png" src-width="1280" src-height="201" align="center"/>

打開如下頁面：

<img src="/assets/Vk4zbmaYdo4M0HxvO3fcQWuKnpf.png" src-width="1886" src-height="1648" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>目前「活動屬性」中僅“助力得獎”活動形式可用，“基礎組隊得獎”和“組隊瓜分”兩種活動形式暫未上線</p>
</div>

活動模版字段按如下規則進行配置：

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

#### 2.3.3 組隊活動獎勵數據查詢

只有當活動運行中進行發獎時才有數據顯示

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

<img src="/assets/YPNGbd55PoR6Y9xGX1bcieWxnWe.png" src-width="2730" src-height="818" align="center"/>

數據統計

待提交：未提交發放請求的獎勵記錄

發放中：發放中的獎勵記錄

已發放：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消發放的獎勵記錄數

鎖倉中：目前助力型組隊活動不涉及，忽略即可

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>具體發放給的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td><p>目前助力型組隊活動不涉及，忽略即可</p></td></tr>
<tr><td><p>達標時間</p></td><td><p>目前助力型組隊活動不涉及，忽略即可</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶（無多賬戶情況可忽略）</p></td></tr>
<tr><td><p>是否鎖倉</p></td><td rowspan="6"><p>目前助力型組隊活動不涉及，忽略即可</p></td></tr>
<tr><td><p>是否鎖倉達標後發放</p></td></tr>
<tr><td><p>鎖倉金額</p></td></tr>
<tr><td><p>貨幣</p></td></tr>
<tr><td><p>鎖倉到期時間</p></td></tr>
<tr><td><p>鎖倉時間</p></td></tr>
<tr><td><p>操作</p></td><td><p>提交請求：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消發放：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

#### 2.3.4 組隊信息查看

助力活動，視為發起人邀請助力人進行組隊，因此可查看其組隊信息

只有當活動運行中進行發獎時才有數據顯示

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“組隊信息”tab，進入以下頁面

<img src="/assets/PT7RbQCGYopvPbx1Qq6cLmNonBc.png" src-width="2716" src-height="838" align="center"/>

數據統計

進行中：活動期間，發起過助力且未達到預設助力人數的隊伍數量

組隊成功：發起過助力並達到預設助力人數的隊伍數量

組隊失敗：至活動結束，發起過助力且未達到預設助力人數的隊伍數量

全部：所有該活動發起過助力的隊伍數量

<table>
<colgroup>
<col width="123"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>隊伍編號</p></td><td><p>發起助力後，程序自動賦予隊伍的一個編號</p></td></tr>
<tr><td><p>隊伍狀態</p></td><td><p>組隊中，組隊成功，組隊失敗</p></td></tr>
<tr><td><p>隊伍名稱</p></td><td><p>程序自動生成的名稱，生成規則“發起人暱稱的隊伍”</p></td></tr>
<tr><td><p>發起人用戶編號</p></td><td><p>發起助力用戶的用戶 id</p></td></tr>
<tr><td><p>隊伍人數</p></td><td><p>n/m，n為當前隊伍人數（不算發起人本人，即已助力人數），m為設定的隊伍人數上限</p></td></tr>
<tr><td><p>創建時間</p></td><td><p>發起助力（隊伍創建）的時間</p></td></tr>
<tr><td><p>完成時間</p></td><td><p>只有組隊成功的隊伍才有數據，為助力人數（隊員人數）達到上限時的時間</p></td></tr>
<tr><td><p>操作</p></td><td><p>查看詳情，點擊後可查看隊伍及隊伍人員詳情<br/><img src="/assets/L5XibEwAHoJSaFx8Q2PcMkftnSf.png" src-width="1062" src-height="650"/></p></td></tr>
</tbody>
</table>

## 
## 3.非標準活動管理

使用人員：運營

使用場景：線下活動發獎，例如：大客戶回饋之類的無具體活動規則，只是為了單純給用戶發放獎勵的活動

主要功能：可在此創建活動並獲得活動程式碼，之後在權益係統 - 獎勵中心關聯活動程式碼，發放獎勵。

執行菜單：運營系統&gt; 活動系統&gt;非標準活動管理

可對已創建好的活動紀錄進行查詢和管理（當前系統設計為標准活動創建後也會歸檔在這個列表內，因此該列表會顯示上述標准活動與在此處創建的非標准活動，兼有全量活動查詢庫的功能）

<img src="/assets/BuKXbWwMvovMO1xJev5cEO7QnNg.png" src-width="2720" src-height="1216" align="center"/>

活動管理列表字段說明

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>列表自動賦予的編號，僅用於計數</p></td></tr>
<tr><td><p>活動名稱</p></td><td></td></tr>
<tr><td><p>活動編碼</p></td><td><p>創建活動後程序自動給該活動賦的編碼，該編碼與活動為一對一的關係，可用於後續的查詢，補發獎勵等各種操作</p></td></tr>
<tr><td><p>業務編碼</p></td><td><p>技術人員需要，可忽略</p></td></tr>
<tr><td><p>備註</p></td><td><p>創建活動時填寫的備註，如未填寫則為空</p></td></tr>
<tr><td><p>費用類型</p></td><td><p>營銷推廣、日常運營、返利</p></td></tr>
<tr><td><p>審核方式</p></td><td><p>審核：活動的獎勵需要財務審核後才發<br/>不審核：獎勵無需財務審核即可發放</p></td></tr>
<tr><td><p>創建時間</p></td><td><p>活動的創建時間</p></td></tr>
<tr><td><p>更新時間</p></td><td><p>活動的更新時間，若未編輯過，則與創建時間一致</p></td></tr>
<tr><td><p>操作</p></td><td><p>編輯：點擊後進入活動編輯頁面，可修改已有活動信息<br/>審核配置：點擊後可修改活動的審核方式，可在審核與不審核之間切換（第三個選項暫未啟用，請忽略）<br/><img src="/assets/F0fhbHlzYo4GrixcqO2chPAkncd.png" src-width="944" src-height="334"/></p></td></tr>
</tbody>
</table>

### 3.1 非標准活動配置

點擊頁面上方新建按鈕，打開如下頁面

<img src="/assets/WUbbbmKlpo8dfbxx04mcYZesned.png" src-width="1742" src-height="1612" align="center"/>

如上述使用場景舉例，因為非標准活動事實上沒有明確的規則，創建非標准活動主要為了拿到活動 code（活動編碼），後續通過獎勵中心關聯該活動 code 發放獎勵，因此上方創建頁面中的非必填字段可不必填寫，忽略即可。

以下僅對其中重要字段配置作說明

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動 code</p></td><td rowspan="2"><p>這兩項在創建活動後，系統會自動賦予，非必要無需人工填寫。<br/>生成後不可編輯</p></td></tr>
<tr><td><p>獎勵發放業務代碼</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱有可能展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>費用類型</p></td><td><p>營銷推廣、日常運營、返利，根據個單位自己的活動費用支出歸屬選擇即可</p></td></tr>
</tbody>
</table>

## 
## 4.邀請關係管理

如圖：一個用戶在一個 App 下會生成當前 App 唯一邀請碼，用戶將自己邀請碼分享給好友，好友即可填寫綁定。綁定後會更新在邀請關係清單中

通過邀請活動綁定的邀請關係可在此查詢，也可以在此進行人工綁定

執行菜單：運營系統&gt; 活動系統&gt;邀請關係管理

<img src="/assets/GorFbAYxsobpK1xP7EecCMTxnSh.png" src-width="2730" src-height="1010" align="center"/>

主要功能：

査詢：通過切換頂部 tab，可以分別查詢註冊邀請，開戶邀請，入金邀請的綁定關係

新增：可以直接在後臺操作給用戶進行邀請關係綁定

詳情：可查看綁定關係的具體用戶資訊以及綁定管道、綁定時間、以及可以變更綁定關係。

（對於已完成的動作則不可綁定對應節點的邀請人了，未完成動作節點邀請人可以綁定和變更）

### 4.1 新增邀請關係

#### 4.1.1 新增註冊邀請關係

點擊邀請關係管理頁面的新建按鈕，打開如下彈窗

<img src="/assets/MlXGb9xbvoLBWixKIjOcxQtUncb.png" src-width="1280" src-height="183" align="center"/>

<img src="/assets/Siw6buGRcoNmdXxok4UcTR9XnVb.png" src-width="936" src-height="708"/>

填寫被邀請人和邀請人的客戶編號後即可完成綁定

#### 4.1.2 新增開戶邀請人/入金邀請人

首先通過篩選找到欲為其綁定邀請人的被邀請人用戶，點擊該用戶詳情，進入查看

<img src="/assets/N546br6XmosDyvxLYDbcsHl1nCe.png" src-width="2698" src-height="392" align="center"/>

詳情中，會顯示該用戶的註冊邀請人，並可在此選擇進一步綁定開戶邀請人和入金邀請人

<img src="/assets/YoMVbBw4ZohoO4xcb3LcDktanng.png" src-width="2712" src-height="1710" align="center"/>

在隨後出現的彈窗中輸入邀請人用戶編號後，即可完成對此被邀請人綁定開戶/入金邀請人的操作

當用戶未完成某一節點時，可以變更用戶綁定的該節點的邀請人，變更流程同上，輸入新的邀請人用戶編號即可。

## 運營活動常見問題查詢

## 用戶咨詢未收到獎勵，運營如何查詢？

執行菜單：運營系統&gt; 活動系統&gt;標準活動管理

先查活動配置是否正確，點擊對應活動後方詳情進入查看活動規則配置，確認配置的對應規則和獎勵是否正確

<img src="/assets/Bm7XbapCGoQlujxdKk3cAiAxnUe.png" src-width="1280" src-height="595" align="center"/>

<img src="/assets/WCrUbCPoWoJQUDxntc6clhYenQe.png" src-width="1280" src-height="636" align="center"/>

若正確，則正確進入獲獎名單查詢是否生成以及獎勵記錄狀態

<img src="/assets/FybmbBlwMo7sbjxEK0GcK0LKnXf.png" src-width="1280" src-height="443" align="center"/>

若發放中則說明系統還在發放中，若待提交則需要運營同學點擊提交進行發放

## 如何查詢用戶是否綁定成功邀請關係？

執行菜單：運營系統&gt; 活動系統&gt;邀請關係管理

<img src="/assets/PSsKbHDAtoGVJLxlExUcQj5DnJd.png" src-width="1280" src-height="492" align="center"/>

如圖，搜索後列表會展示所有該用戶綁定的邀請關係，點擊後方詳情可查看具體綁定的用戶信息

<img src="/assets/IPDTb6xbGoF216xgd5BcJWI6noe.png" src-width="1280" src-height="395" align="center"/>

<img src="/assets/Sz5IbVApfodSA1xuvETcfVsknLb.png" src-width="1280" src-height="632" align="center"/>

