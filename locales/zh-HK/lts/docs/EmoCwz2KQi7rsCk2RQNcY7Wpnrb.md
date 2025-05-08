---
title: 系統介紹
slug: EmoCwz2KQi7rsCk2RQNcY7Wpnrb
sidebar_position: 1
---


# 系統介紹

本使用手冊適用於 Longbridge Whale-權益平台，運營系統管理員和使用成員使用。閱讀此手冊，你將瞭解 Whale-權益平台作業功能操作

權益系統是 Whale 來管理各類營銷獎勵與權益的發放，包含各類卡劵的創建與發放管理，整個 Whale 權益系統體系中，權益主要包括卡券福利、獎勵中心、權益中心三大作業功能。

<img src="/assets/NvWPbCPOxoUVSrxLGIpctVXnnFb.jpeg" src-width="1354" src-height="414" align="center"/>

## 功能介紹

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>功能目錄</p></td><td><p>目錄說明</p></td></tr>
<tr><td><p>權益</p></td><td><p>Whale 權益系統體系中，權益主要包括卡券福利、獎勵中心、權益中心三大塊功能。</p></td></tr>
<tr><td><p>卡券福利</p></td><td><p>主要分卡券和實物福利，具備卡券的創建、管理、結算功能；實物獎勵模版創建、實物獎勵管理功能</p></td></tr>
<tr><td><p>獎勵中心</p></td><td><p>查詢通過各種方式發出的所有的獎勵記錄，並具備主動給用戶發卡券、實物獎勵的功能</p></td></tr>
<tr><td><p>權益中心</p></td><td><p>主要用於查詢 APP 內的行情商店產生的行情訂單數據</p></td></tr>
</tbody>
</table>

## 權益使用流程

適用：運營人員，權益系統涉及到下列幾個主體：
權益系統：運營人員負責配置管理權益項目 (卡劵福利/獎勵中心/權益中心)
APP  端：客戶與各種權益做交互行為互動
結算系統：當客戶與權益項目作交互時所產生的相關帳務處理
數據服務系統：這部份是指一些權益項目與行情服務開通有關 (若有）
交易系統：這部份是指一些權益項目與交易服務使用有關 (若有）

<img src="/assets/FF93bUxneosgg4xCMxbcGwh3nMb.jpeg" src-width="1734" src-height="2634" align="center"/>

## 1.卡券福利

### 1.1 功能菜單目錄

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>菜單名稱</p></td><td><p>功能說明</p></td></tr>
<tr><td><p>卡券配置</p></td><td><p>主要功能為根據卡券模版配置對應的卡券，以及對已有卡券進行查詢</p></td></tr>
<tr><td><p>卡券管理</p></td><td><p>主要對已發放出去的所有卡券進行管理，可查詢到卡券具體發給誰，以及卡券當前狀態與使用情況。</p></td></tr>
<tr><td><p>卡券結算</p></td><td><p>主要為所有已經結算完成且進行金額返還的卡券結算流水表單，如先收後返的平台費、免傭卡等卡券使用所產生需要返還現金的流水，而自動抵扣的免傭卡不生成流水則不會提現在表單中</p></td></tr>
<tr><td><p>實物獎品</p></td><td><p>主要用於根據實物獎勵模版配置實物獎勵，以及對已有實物獎勵進行查詢</p></td></tr>
<tr><td><p>實物發放管理</p></td><td><p>對實物獎勵進行發貨，導入物流單號等。</p></td></tr>
</tbody>
</table>

### 1.2 卡券配置

執行菜單：運營系統&gt;權益系統&gt;卡劵福利&gt;卡劵配置

<img src="/assets/NkIDbwJFDoAVy4xKdigc8KR3nqb.png" src-width="2784" src-height="1190" align="center"/>

列表功能操作

- 查詢：可通過卡券的商品模版代碼、標題、卡券類型，有效時間等篩選查詢已有卡券
- 查看：點擊查看則可見當前卡券所有配置字段信息
- 編輯：點擊編輯則可編輯當前卡券字段與規則

（謹慎使用，修改保存之後的字段會影響到當前線上已發放的卡券信息）

- 複製：當想要快速創建相似卡券時，點擊複製可直接複製當前卡券模版的信息，再進行部分字段修改即可快速創建新的卡券。

#### 1.2.1 新建卡券

本作業提供新建卡券工具，在此處創建卡券並獲得獎勵模版編號後，可用於之後通過活動系統等形式的發放

當前 whale 的權益系統支持配置以下類型的卡券權益

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>卡券類型</p></td><td><p>對應權益說明</p></td></tr>
<tr><td><p>股票卡</p></td><td><p>設置對應的特定股票/指數/基金及其股數，用戶得到卡券後即代表可兌換相應數量的該股票指數/基金</p></td></tr>
<tr><td><p>現金卡</p></td><td><p>用戶領取本卡券後即會向其賬戶中充入對應現金，相当于红包</p></td></tr>
<tr><td><p>行情卡</p></td><td><p>用戶得到卡券並激活後，可查看對應的行情內容</p></td></tr>
<tr><td><p>免傭卡</p></td><td><p>用戶使用該卡，傭金可以得到一定程度直至全部免除</p></td></tr>
<tr><td><p>基本面卡</p></td><td><p>用戶獲得後可以查看對應的基本面信息</p></td></tr>
<tr><td><p>打新手續費卡</p></td><td><p>用戶使用該卡，在認購新股時可以免除相應額度的手續費</p></td></tr>
<tr><td><p>股票現金卡</p></td><td><p>用戶交易時選擇使用該卡券，交易後的三個工作日內會返現卡面金額</p></td></tr>
<tr><td><p>平台費抵扣卡</p></td><td><p>用戶使用該卡，可以按一定規則抵扣平台費</p></td></tr>
<tr><td><p>融資利息卡</p></td><td><p>用戶使用該卡，融資利息可以獲得一定折扣直至免除</p></td></tr>
</tbody>
</table>

<b>操作說明</b>

點擊右上角“新建”按鈕後打開如下頁面

卡券信息分為基本信息和規則配置兩部分，對於每種卡券類型，基本信息所需要配置的字段相同，規則配置所需要的字段有所差別

<img src="/assets/ZURcb88s0oLkQNx9xfYcBicdn5g.png" src-width="1668" src-height="1960" align="center"/>

<b>基本信息</b>

選擇對應要創建的卡券類型，選擇後每種卡券的基本信息配置字段相同

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>卡券類型</p></td><td><p>按照所購買的產品不同將展示不同卡券種類。</p></td></tr>
<tr><td><p>卡券標題</p></td><td><p>可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>卡券有效期</p></td><td><p>分為固定有效期和相對有效期兩種模式</p>
<ul>
<li>設置固定有效期為卡券在固定時間段內有效，例如 2023 年 1 月 1 日至 2023 年 1 月 31 日有效期卡券，不管在何時發放何時領取，用戶收到後使用日期都不變；</li>
<li>設置領取後 XX 天後有效則按照領取時間起開始算有效時間，例如設置卡券領取 7 天後有效，則用戶在 2023 年 1 月 1 日領取卡券，卡券有效期則 Wie2023 年 1 月 1 日至 2023 年 1 月 8 日。</li>
</ul></td></tr>
<tr><td><p>卡券價值</p></td><td><p>配置當前卡券幣種以及對應價值/價值上限。<br/>部分卡券會使用此值作為結算價值，如：現金卡、股票現金卡、平台費抵扣卡、全額免傭卡等</p></td></tr>
<tr><td><p>卡券使用說明</p></td><td><p>卡券使用說明，填寫後將在卡券中心，以及卡券選擇頁面中展示<br/>可以在交易環節使用的卡券類型（如平台費抵扣卡、股票現金卡、免傭卡）該字段建議填寫，以便指導用戶使用</p></td></tr>
<tr><td><p>備註</p></td><td><p>用於操作人員個人備忘，非必填</p></td></tr>
</tbody>
</table>

<b>規則配置</b>

選擇對應要創建的卡券類型後，每種類型需要設置規則字段不一樣，以下詳細描述

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="127"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>卡券類型</p></td><td><p>規則字段</p></td><td><p>配置說明</p></td></tr>
<tr><td rowspan="2"><p>股票卡</p></td><td><p>指定股票</p></td><td><p>必填項，單選。兌換後可獲得對應股票代碼股票</p></td></tr>
<tr><td><p>可兌換股票股數</p></td><td><p>必填項，填寫單張可兌換的股票的股數</p></td></tr>
<tr><td><p>現金卡</p></td><td><p>/</p></td><td></td></tr>
<tr><td><p>行情/基本面卡</p></td><td><p>數據權益標籤</p></td><td><p>必填項，代表獲得該卡後可查看對應數據權益服務包中的內容</p></td></tr>
<tr><td rowspan="4"><p>免傭卡</p></td><td><p>適用市場</p></td><td><p>必填項，可多選。即可使用該卡進行免傭的市場有哪些，可配置單市場也可配置多市場</p></td></tr>
<tr><td><p>適用標的類型</p></td><td><p>必填項，可多選。</p></td></tr>
<tr><td><p>結算模式</p></td><td><p>必填項，單選，支持直接抵扣和先收後返兩種模式</p>
<ul>
<li>直接抵扣：交易時直接免除相應佣金</li>
<li>先收後返：交易後三個工作日內退還相應佣金</li>
</ul></td></tr>
<tr><td><p>免傭模式</p></td><td><p>必填項，單選，选择直接抵扣后，会出现三种模式：</p>
<ul>
<li>終生免傭：即免除該用戶在平台內當前市場交易產生的所有佣金，有效期為終身。（用戶註銷後重新註冊的除外）</li>
<li>金額次卡：設置使用次數，每次免除金額為卡券價值/次數</li>
<li>折扣次卡：按照配置比例進行佣金優惠，例如配置 80%，則收取 80% 佣金。免除 20%。有最多使用次數，並可設置單次金額上限<br/>选择先收后返后，有两种模式可选：</li>
<li>全額免傭：即支持按照當前卡券價值全額免傭，直到扣完全部額度為止</li>
<li>按比例免傭：即按照配置比例進行佣金優惠。例如配置 80%，則收取 80% 佣金。免除 20%</li>
</ul></td></tr>
<tr><td rowspan="3"><p>打新手續費卡</p></td><td><p>指定 IPO 可用</p></td><td><p>非必填，單選。可選擇指定新股可用。</p></td></tr>
<tr><td><p>打新方式</p></td><td><p>必填項，單選。可選擇融資打新或現金打新時使用該卡券</p></td></tr>
<tr><td><p>融資額度門檻</p></td><td><p>當選擇融資打新時可選填，設置後則只有在大於該融資額度打新時才可使用本卡券</p></td></tr>
<tr><td rowspan="3"><p>股票現金卡</p></td><td><p>指定股票</p></td><td><p>非必填，單選。不選則可通用。選擇後則只有對應股票交易或兌換可使用。</p></td></tr>
<tr><td><p>適用市場</p></td><td><p>必填項，可多選。即可使用該卡進行交易的股票市場有哪些，可配置單市場也可配置多市場</p></td></tr>
<tr><td><p>適用標的類型</p></td><td><p>必填項，單選。當前支持正股交易、期權交易兩種類型現金卡配置</p></td></tr>
<tr><td><p>平台費抵扣卡</p></td><td><p>可使用次數</p></td><td><p>必填項，即當前卡券可抵扣多少次平台費。如卡券價值為 30 港幣，抵扣次數為 3，則單次可抵扣上限 10 港幣。</p></td></tr>
<tr><td rowspan="2"><p>融資利息卡</p></td><td><p>優惠方式</p></td><td><p>必填項，單選。支持免息、折扣兩種優惠模式選擇</p>
<ul>
<li>免息：則有效期內所產生融資利息直接免除</li>
<li>折扣：則有效期內所產生融資利息直接打折收取。</li>
</ul></td></tr>
<tr><td><p>折扣率</p></td><td><p>選擇折扣優惠時，必填字段。設置折扣為當前收取折扣。例如 80%，則直接收取 80% 利息，優惠 20%。</p></td></tr>
</tbody>
</table>

填好這些配置項後，點擊確定，則生成對應卡券以及獎品模版代碼。

#### 1.2.2 卡券管理

菜單入口：運營系統&gt;權益系統&gt;卡劵福利&gt;卡劵管理

本作業提供卡券發放數據查看，列表為每個卡券的每一筆發放記錄（不論通過何種方式發出）

可通過卡券編號、獎勵模版編號、卡券類型、到賬時間、客戶編號、卡券狀態等篩選特定記錄篩選查看和導出

<img src="/assets/PzMLba9UWozViSxUe9WcjxEUnth.png" src-width="2758" src-height="820" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>卡券編號</p></td><td><p>卡券通過各種用戶發放給用戶後，會生成一個卡券編號，相當於一個記錄編號對應這一筆發放記錄</p></td></tr>
<tr><td><p>客戶編號</p></td><td><p>收到卡券的用戶 id</p></td></tr>
<tr><td><p>客戶姓名</p></td><td><p>收到卡券的用戶姓名</p></td></tr>
<tr><td><p>卡券類型</p></td><td><p>這一條記錄中發放卡券的類型</p></td></tr>
<tr><td><p>卡券標題</p></td><td><p>該卡的標題 | 卡券的獎勵模版代碼</p></td></tr>
<tr><td><p>有效期</p></td><td><p>開始時間為用戶實際獲得卡券的時間，結束時間為根據規則算出的卡券到期時間</p></td></tr>
<tr><td><p>狀態</p></td><td><ul>
<li>未使用：卡券還未開始使用</li>
<li>使用中：部分有使用週期的卡券類型會有使用中状态，即卡券当前已使用了部分。例如：10 次卡，當前已使用 3 次，則狀態為使用中</li>
<li>已使用：全部價值均使用完畢，例如：50 次卡，當前已使用 50 次則狀態為已使用</li>
<li>已過期：卡券未使用或未全部使用完就到了卡券有效期，均稱為已過期</li>
<li>已鎖定：未全部使用但當前該卡已被綁定不可使用了。例如：股票現金卡，下單時選擇本卡，卡券狀態即變為已鎖定，不可再次使用。後續成交後卡券狀態變為已使用，未成交變為未使用</li>
</ul></td></tr>
<tr><td><p>總價值</p></td><td><p>卡券價值</p></td></tr>
<tr><td><p>到賬時間</p></td><td><p>卡券發放給用戶的時間</p></td></tr>
<tr><td><p>來源</p></td><td><p>即通過何種方式發出的卡券，目前支持通過活動中台或通過任務中心進行發放</p></td></tr>
</tbody>
</table>

#### 1.2.3 卡券結算

菜單入口：運營系統&gt;權益系統&gt;卡劵福利&gt;卡券結算

本作業提供卡券結算數據查看，適用於會返現的卡券（免傭卡和股票現金卡）

列表為每一筆返現記錄，每次返現成功視為當次結算成功

可通過卡券編號、用戶編號、結算日期、活動代碼、核銷場景、進行篩選查看

<img src="/assets/Nzmkbz2IpoaHl9xXEjLcTof4n3e.png" src-width="2750" src-height="784" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>每一筆返現記錄的編號</p></td></tr>
<tr><td><p>客戶編號</p></td><td><p>收到返現的用戶 id</p></td></tr>
<tr><td><p>客戶姓名</p></td><td><p>收到返現的用戶姓名</p></td></tr>
<tr><td><p>卡券編號</p></td><td><p>這一條記錄中產生返現的卡券編號</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>發放該卡券的活動名稱</p></td></tr>
<tr><td><p>活動代碼</p></td><td><p>發放該卡券的活動代碼</p></td></tr>
<tr><td><p>核銷場景</p></td><td><p>股票、打新</p></td></tr>
<tr><td><p>關聯流水號</p></td><td><p>核銷業務內部流水號</p></td></tr>
<tr><td><p>市場</p></td><td><p>使用卡券時的股票市場</p></td></tr>
<tr><td><p>返傭金額</p></td><td><p>本次返傭的金額</p></td></tr>
<tr><td><p>餘額</p></td><td><p>對於免傭卡來說，可以多次使用，故單次返傭後可能還有餘額；對於股票現金卡，只能單次使用，返現後餘額為 0</p></td></tr>
<tr><td><p>貨幣</p></td><td><p>返現及餘額幣種</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>返現是否發放成功，一般狀態都是「發放成功」</p></td></tr>
<tr><td><p>核銷日期</p></td><td><p>返現，及卡券本次結算的日期</p></td></tr>
</tbody>
</table>

### 1.3 實物獎品

執行菜單：運營系統&gt;權益系統&gt;卡劵福利&gt;實物獎品

<img src="/assets/SdqTbDUsgo2KgPxx4KIcDE9TnMg.png" src-width="2432" src-height="1142" align="center"/>

列表功能操作

- 查詢：可通過獎品模版代碼、獎品類型、創建時間等篩選查詢
- 查看：點擊查看則可見當前實物獎品所有配置字段信息
- 編輯：點擊編輯則可編輯當前實物獎品信息。
- 複製：當想要快速創建相似實物獎品時，點擊複製可直接複製當前物品信息，再進行部分字段修改即可快速創建新的實物獎品。

#### 1.3.1 新建實物獎品

點擊頁面右上角“新建模版”按鈕，將打開以下頁面

<img src="/assets/Wkd4b6lgxoKQ9Jxd7sUcOOwdn3p.png" src-width="1680" src-height="2645" align="center"/>

配置面板進行如下字段配置

<table>
<colgroup>
<col width="111"/>
<col width="783"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>獎品類型</p></td><td><p>當前僅支持實物獎勵一種獎品類型，後續拓展其他類型</p></td></tr>
<tr><td><p>獎品圖片</p></td><td><p>按照建議尺寸上傳圖片即可</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>獎品概述</p></td><td><p>可對實物獎品進行簡單介紹供用戶查看</p></td></tr>
<tr><td><p>領取截止時間</p></td><td><p>分為固定時間和相對時間兩種模式。</p>
<ul>
<li>設置固定時間，則獎品在固定時間之前可領取，不管在何時發放何時領取，用戶收到後均需要在該時間之前領取或填寫郵寄地址才有效，否則獎勵將直接過期。</li>
<li>設置發放後 x 天內有效，則按按照產生獎勵記錄開始算起，x 天內用戶需要領取或填寫郵寄地址，否則獎勵將直接過期</li>
</ul></td></tr>
<tr><td><p>價值</p></td><td><p>配置當前商品的幣種以及對應價值</p></td></tr>
<tr><td><p>實物領取方式</p></td><td><p>可多選。選擇線下領取後，需填寫線下領取地址，改地址會展示給用戶；選擇郵寄，則在用戶側會出現填寫郵寄地址的入口</p></td></tr>
</tbody>
</table>

填寫好以上信息後，點擊提交則創建成功，系統自動生成對應獎品模版代碼

#### 1.3.2 實物發放管理

實物發放業務流程

<img src="/assets/MLxTbHMflo1xMsxN15xcluEVnDh.jpeg" src-width="1114" src-height="2174"/>

執行菜單：運營系統&gt;權益系統&gt;卡劵福利&gt;實物發放管理

本作業可通過線上線下結合操作為獲得實物獎勵的用戶發貨，已提供查詢發貨記錄的功能

<b>發貨操作說明：</b>

用戶獲得實物獎勵後，會在實物獎勵發放管理處產生一條記錄。之後用戶在手機側上傳郵寄地址後，需給用戶發貨，執行這一作業需要操作如下：

<b>（1）篩選已填寫地址的用戶</b>

<img src="/assets/NRlNbpwoloErQcxG5cJczeppndh.png" src-width="2782" src-height="880" align="center"/>

當用戶收到獎勵未填寫地址時，發貨狀態為「未填寫地址」，用戶填寫地址後，該狀態則變更為「已填寫地址」

可以通過此處篩選出已填寫地址待發貨的記錄

<b>（2）導出地址</b>

篩選出已填寫地址的用戶後，可以導出用戶填寫的地址信息，進行線下發貨操作

<img src="/assets/C9yEbcimFoHzf9xrYMXccY5fnQg.png" src-width="2758" src-height="946" align="center"/>

為防止導出地址後用戶又進行地址修改，需鎖定該記錄狀態，導出信息後，可批量將記錄的發貨狀態變更為「發貨中」，變更後用戶不可再修改地址

<img src="/assets/LziPbisuCo57hsxLXpcc2VkWnjb.png" src-width="2758" src-height="1608" align="center"/>

<b>（3）上傳物流單號</b>

隨後進行線下發貨，發貨後得到物流單號，需要填寫至系統中，以便用戶查看

只有少量物流單時，可選擇逐個輸入，點擊每天記錄的“發貨”按鈕，在彈框中輸入物流單號

<img src="/assets/Bj6abbAZRoWhtexFad6cGnFMnie.png" src-width="2770" src-height="1036" align="center"/>

若操作量多時，可點擊頁面右上角“批量導入物流單號”，通過上傳文件方式批量導入物流單號

<img src="/assets/J2YqbODJboj1tXx2ZWZcqZngnNh.png" src-width="2788" src-height="1640" align="center"/>

上傳物流單號後，實物獎勵發放流程完畢。

## 2.獎勵中心

獎勵中心用於匯總通過各種發放形式發出的額各類獎勵的發放記錄，並提供手動發獎和審批用戶資產兌換的功能

### 2.1 獎勵發放

本作業用於查詢所有發放的獎勵記錄與手動發獎

#### 2.1.1 查詢獎勵記錄

菜單入口：運營系統&gt;權益系統&gt;獎勵中心&gt;獎勵發放

<img src="/assets/Tk5Lb4yyxodAgsx7hbIccwZdnmc.png" src-width="2788" src-height="1042" align="center"/>

<table>
<colgroup>
<col width="143"/>
<col width="783"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>發放流水號</p></td><td><p>業務自動賦予的流水號</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>發放該獎勵的活動及活動代碼</p></td></tr>
<tr><td><p>客戶編號</p></td><td><p>獲得獎勵的客戶 id</p></td></tr>
<tr><td><p>獎勵類型</p></td><td><p>獲得的獎勵的類型，即權益中心支持的權益類型，可能是現金、卡券、實物</p></td></tr>
<tr><td><p>獎勵批次號</p></td><td><p>業務自動賦予的流水號</p></td></tr>
<tr><td><p>獎勵價值</p></td><td><p>創建獎品時備註的每個獎品的價值</p></td></tr>
<tr><td><p>獎品模版代碼</p></td><td><p>發放的獎品對應的獎品模版代碼（獎品創建後即會生成，卡券福利部分有詳細介紹）</p></td></tr>
<tr><td><p>狀態</p></td><td><p>支付成功狀態的獎勵為發放至用戶</p></td></tr>
<tr><td><p>獎勵發放時間</p></td><td><p>獎勵發放至用戶側的時間</p></td></tr>
<tr><td><p>操作人</p></td><td><p>如果是人工發放獎勵，會顯示發放操作人</p></td></tr>
<tr><td><p>備註</p></td><td><p>如果是人工發放獎勵，會顯示操作人發放時備註的內容，非必填</p></td></tr>
</tbody>
</table>

#### 2.1.2 手動發放獎勵

適用場景：如活動係統中提到的非標准活動所述，一些情況下無具體規則，單純需要給用戶發放禮品，如回饋老客戶；或在一些線上活動中有查漏補缺需求，將用到手動發放獎勵

<b>給單一用戶發獎</b>

點擊右上方「新建」按鈕，打開新建發獎彈窗

<img src="/assets/BafOb2MKmod6mPxxHt3cS8Ngnce.png" src-width="2792" src-height="310" align="center"/>

<img src="/assets/Q53qbqq2UoKj68xMrGcc2Nmxnze.png" src-width="2816" src-height="1646" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>客戶</p></td><td><p>選擇被發獎勵的客戶，支持根據用戶 id、用戶註冊電話、用戶註冊郵箱來定位到客戶</p></td></tr>
<tr><td><p>獎勵類型</p></td><td><p>目前權益系統支持的權益類型：卡券、現金、實物<br/>根據不同獎勵類型，需填寫關聯字段<br/>卡券：需從下拉框中選擇已創建的卡券<br/>實物：需從下拉框中選擇已創建的實物獎品<br/>現金：需填寫金額及幣種</p></td></tr>
<tr><td><p>獎勵活動</p></td><td><p>此次發放必須掛靠一個活動以便財務歸檔，可從已創建的標准活動及非標准活動中選擇</p></td></tr>
<tr><td><p>用戶批次識別</p></td><td><p>系統自動賦予，無特別必要不用修改</p></td></tr>
<tr><td><p>備註</p></td><td><p>發放人員備忘，非必填</p></td></tr>
</tbody>
</table>

點擊確定後，生成發放記錄，若設有審批環節，則本條發放記錄進入審批流，審批通過後發放，不通過取消發放；若審批流為自動通過，則本條記錄開始執行發放操作。

<b>給批量用戶發獎</b>

若操作量多時，可點擊頁面右上角“批量發放獎勵”，通過上傳文件方式一次性給一批用戶發獎

<img src="/assets/CP5CbIbVXovcl2xtPG9cuumxnIf.png" src-width="2782" src-height="378" align="center"/>

<img src="/assets/JZlbbHr86oqI8kxv09Schoj8nkh.png" src-width="2780" src-height="1600" align="center"/>

首先選擇發放的獎勵類型，隨後在下方模版處下載模版文件（不同獎勵類型對應的模版不同，步驟不可顛倒）

按照模版填寫好所需字段後，將文件拖入輸入框中上傳

點擊確定，生成對應數量的發放記錄，若設有審批環節，則這些條發放記錄進入審批流，審批通過後發放，不通過取消發放；若審批流為自動通過，則這些條記錄開始執行發放操作。

### 2.2 資產處置

本作業用於處理用戶的資產（股票和現金），當用戶獲得現金時可在此查詢記錄，當用戶使用卡券兌換股票時，可在此進行審批操作

用戶可以使用股票卡兌換相應股票，也可以累計數張股票現金卡，直至他們的總價值超過一股價格，再一次性使用這些卡券兌換股票

菜單入口：運營系統&gt;權益系統&gt;獎勵中心&gt;獎勵發放

<img src="/assets/CEGtbE4wIouI4sxcOSwcagcInjh.png" src-width="2750" src-height="1004" align="center"/>

現金及現金卡一般直接發放，兌換股票類型，需在此審批後，對應股數的股票才會轉到對應賬戶中

## 3.權益中心

權益中心目前用於行情商品管理，以及查看、導出行情商品產生的訂單

### 3.1 權益商店

菜單入口：運營系統&gt;權益系統&gt;權益中心&gt;權益商店

<img src="/assets/FL3TbPUfaoR0NFxkKmWcK14bnvd.png" src-width="2752" src-height="1002" align="center"/>

如果訂閱了 whale 的內容服務中的行情內容，則可以將行情查看權限售賣給用戶，目前 whale 的工作人員會幫助每一位租戶創建和管理行情商品，在此不做過多說明

### 3.2 權益訂單

菜單入口：運營系統&gt;權益系統&gt;權益中心&gt;權益訂單

此作業用於查詢，導出行情商店產生的訂單，供運營和財務人員使用

<img src="/assets/Dgtzb9jMGoElfAxyw2Dcy4iNnXg.png" src-width="2420" src-height="730" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>訂單號</p></td><td><p>用戶購買訂單流水號</p></td></tr>
<tr><td><p>產品名稱</p></td><td><p>用戶所購買的行情商品名稱</p></td></tr>
<tr><td><p>付款人</p></td><td><p>付款的用戶 ID</p></td></tr>
<tr><td><p>貨幣類型</p></td><td><p>付款幣種</p></td></tr>
<tr><td><p>產品成本</p></td><td><p>產品實際成本價格</p></td></tr>
<tr><td><p>週期</p></td><td><p>該行情可使用的週期，產品 + 週期組成一個實際的 sku</p></td></tr>
<tr><td><p>支付額度</p></td><td><p>用戶付款金額</p></td></tr>
<tr><td><p>支付時間</p></td><td><p>用戶進行支付的時間</p></td></tr>
<tr><td><p>支付渠道</p></td><td><p>用戶支付的渠道，當前提供：現金支付，Stripe 支付，ApplePay（僅蘋果系統）</p></td></tr>
<tr><td><p>支付流水號</p></td><td><p>有支付行為後產生的流水號</p></td></tr>
<tr><td><p>下單時間</p></td><td><p>訂單產生的時間（下單時間早於支付時間）</p></td></tr>
<tr><td><p>超時時間</p></td><td><p>訂單產生後 40 分鐘之內未支付成功則將超時，此處未未完成的訂單的超時時間</p></td></tr>
<tr><td><p>支付狀態</p></td><td><p>未支付：建立了訂單還未支付<br/>支付中：支付正在進行中<br/>支付成功：用戶已支付成功，行情卡還未發放<br/>支付失敗：用戶有支付動作但支付失敗<br/>清算成功：用戶購買成功並且行情卡已發放給用戶<br/>支付超時：訂單建立後 40 分鐘之內未支付成功<br/>已關閉：用戶手動關閉訂單<br/>（其他無需關注）</p></td></tr>
</tbody>
</table>

## App 端用戶功能

以下展示前端  APP 有關的配置呈現效果：

### 卡券

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>App 入口</b></p>
<img src="/assets/MscXb8U7KodWEIx6wRzcPdchnug.png" src-width="628" src-height="1352" align="center"/>

<p>我的 - 我的卡券</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>我的卡券</b></p>
<img src="/assets/EDeEbd2wdoZRuwxAD5oc2IYZnBd.png" src-width="624" src-height="1360" align="center"/>

<p>用戶可自行查看當前已有卡券以及卡券狀態</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>交易使用卡券</b></p>
<img src="/assets/OjY3b3jRSoyDDcxCf7scavNJnrf.png" src-width="674" src-height="1366" align="center"/>

<img src="/assets/Nt8WbSAo0oOqf2xUtHZcWlUonSd.png" src-width="750" src-height="1624" align="center"/>

</div>
<div class="w-[25%]" width-ratio="25">
<p><b>打新使用卡券</b></p>
<img src="/assets/J9z1byDzsoTwWyx2Qhzciofentd.jpeg" src-width="724" src-height="1610" align="center"/>

</div>
</div>

### 獎勵

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<p><b>App 入口</b></p>
<img src="/assets/UBDzbE9wno8h8IxE3tBcg1bbnLf.png" src-width="620" src-height="1366" align="center"/>

<p>我的 - 獎勵記錄</p>
<img src="/assets/BDomb6mPOoVCzmxT9nJcpDBJntb.png" src-width="626" src-height="1360" align="center"/>

<p>我的 - 活動中心 - 獎勵</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>獎勵記錄</b></p>
<img src="/assets/HyG4b1X2aop949xSQR1cf9JhnH7.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有歷史記錄</p>
<img src="/assets/SBx1bmkw6oUof2xDIAUcltmxnPd.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>可篩選類別進行查看</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>實物獎勵領取</b></p>
<img src="/assets/QoVCbrFw5oUkeuxHErUchiB7nsg.png" src-width="750" src-height="1624" align="center"/>

<p>輸入地址與電話</p>
<img src="/assets/GLyzbBtx9og5fqx6HYTcqMdYnFe.png" src-width="750" src-height="1626" align="center"/>

<p>確認郵寄信息</p>
<img src="/assets/QjHpb2ZCkowquYx7bqpcCE0PnNb.png" src-width="750" src-height="1296" align="center"/>

<p>查看物流單號</p>
</div>
</div>

### 權益商店

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>商店入口</b></p>
<img src="/assets/O9QQbQtl7ojLErxqqzVc8YrVnz3.png" src-width="614" src-height="1366" align="center"/>

<img src="/assets/Ave1bImSpoMlwextaaFc7K4tn3g.png" src-width="626" src-height="1374" align="center"/>

<p>我的 - 我的行情 - 行情商店</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>行情商店</b></p>
<img src="/assets/LaYibIKfaou2tUxSmYIcOfpSn6g.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有產品，可分 tab 切換不同市場行情產品列表</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>購買產品</b></p>
<img src="/assets/LsPBbeU5sowKT1xw8zIcFXTqnMe.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>選擇對應產品、對應套餐支付購買</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>購買記錄查看</b></p>
<img src="/assets/K18MbF2VVojVvZxWRJCc0QVanBd.png" src-width="628" src-height="1330" align="center"/>

<img src="/assets/HUembGSCioUNOcxKOhecJIuXnjf.jpeg" src-width="1080" src-height="2338" align="center"/>

</div>
</div>

