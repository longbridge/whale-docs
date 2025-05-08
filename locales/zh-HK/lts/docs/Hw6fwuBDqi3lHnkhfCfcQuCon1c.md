---
title: 功能介紹
slug: Hw6fwuBDqi3lHnkhfCfcQuCon1c
sidebar_position: 2
---


# 功能介紹

## 更新

2022.06.20  初稿

2023.02.23  增加黑白名单限制类型，并且支持批量导入客户及标的

2024.08.11   更新各功能模塊的操作說明

## 操作说明

### 1.成交補單

<b>功能概述</b>

成交補單通常指的是交易訂單的補充記錄功能。

這項功能對於確保交易資料的完整性和準確性至關重要。補單可以用來記錄那些因係統故障、網路問題或其他原因而未能及時在系統中登記的交易。透過補單，可以更新交易記錄，確保所有交易都能正確反映在帳戶和結單中。

目前 Whale 系統支持手動單條錄入及文件批量導入兩種方式。支持補錄港股、美股、滬深、新加坡市場。

<img src="/assets/UXErbz8nnoqRGqxAIo1cUM7dnBc.png" src-width="2868" src-height="1744" align="center"/>

<b>功能頁面結構說明</b>

頂部為查詢功能及新增功能區

列表左側為 checkbox 多選，可批量選中操作取消補單

中間列表為補單數據，包含歷史補單數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 1.1 補單列表

列表主要展示補單數據信息，部分字段（例如委託數量）支持上下排序，字段信息可根據使用習慣進行位置拖動。

<img src="/assets/HuqtbK2w4orMybxQ4hsc8DuQnte.gif" src-width="1848" src-height="1122" align="center"/>

- 查詢條件：證券帳戶、股票、委託時間、操作時間
- 特殊字段說明：
    - 委託渠道：目前系統支持多渠道下單，具體可在錄入時選擇委託渠道，一般為 APP、WTT、API 等
    - 交易渠道：用於顯示當前帳戶的交易結算渠道，如有上手則顯示對應上手的結算渠道及大帳戶號碼
    - 操作人：補單操作人，即對應操作的交易員名稱

- 操作項：詳情、取消
    - 詳情：查看補單訂單詳情數據
    - 取消：取消當前該筆的補單數據（僅當日的補單數據支持操作取消）

- 批量操作：列表頭 Checkbox，可對數據進行多選，選中後為取消的訂單可操作全部取消；

#### 1.2 新增補單 - 手動錄入

點擊右上角“新增”按鈕，進入補單下單操作彈窗界面，默認進入到“手動錄入”畫面，手動填入委託及成交信息。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/DJGTbyocHoZzKexkjWYc5tDgnJd.png" src-width="760" src-height="1682" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/IjDobsAgeoWmA4xpv7rccLRnnWc.png" src-width="738" src-height="1668" align="center"/>
</div>
</div>

- 填寫補單的訂單委託數據，需要包含客戶信息、股票、委託渠道及委託價格、數量等基本的下單信息
- 確認訂單委託信息後，下方模塊輸入訂單的成交信息，包含成交狀態、日期及成交數量、價格
    - 輸入成交價格、數量後點擊“添加”將錄入為成交明細，當訂單存在分筆成交的情況，可添加多條成交明細。如明細添加有誤，可在成交明細表往後滑動操作刪除

- 委託、成交信息填寫完成後，可點擊“確定”提交（如信息填入不全按鈕將置灰不可點擊）。數據正確並提交後，將在補單列表中生成一條補單數據。
- 成交信息錄入區訂單狀態說明：目前僅支持補“全部成交”、“部成部撤”、“已撤單”三種狀態，選中的補單狀態與訂單表中的訂單狀態一致，當選擇“全部成交”時，系統會在輸入成交數量時校驗數量是否滿足全部成交要求，系統將提示：成交數量與訂單狀態不匹配，無法提交；

#### 1.3 新增補單 - 文件錄入

點擊右上角“新增”按鈕，進入補單下單操作彈窗界面，頂部手動切換至“文件錄入”，可在該處進行批量文件補單。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[52%]" width-ratio="52">
<img src="/assets/Nx6jba4q2oLhF2xmaaKcZFd4nRc.png" src-width="764" src-height="548" align="center"/>
</div>
<div class="w-[47%]" width-ratio="47">
<img src="/assets/HEn2be5k3o5LTMx9aYEcKoELnRg.png" src-width="742" src-height="596" align="center"/>
</div>
</div>

- 此處上傳補單文件需要按照模板規則進行上傳，所以在上傳補單文件之前請操作“下載模板”，在模板中進行數據錄入，錄入完成後可將文件進行上傳
- 點擊“上傳文件”將喚起本地文件選擇，選中需上傳的補單文件後，系統將執行補單操作
    - 目前僅支持上傳一份文件，文件內數據最多不超過 1,000 條，超過 1,000 條時系統將提示：文件超出一千條數據上限，請分批上傳。 --- 如看到此提示，請將補單文件中的數據進行拆分

- 補單模板文件說明：

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="118"/>
<col width="111"/>
<col width="135"/>
<col width="125"/>
<col width="100"/>
<col width="100"/>
<col width="113"/>
<col width="128"/>
<col width="161"/>
<col width="205"/>
<col width="113"/>
</colgroup>
<tbody>
<tr><td><p>文件表頭</p></td><td><p>Acc. Number</p></td><td><p>Symbol</p></td><td><p>Order Type</p></td><td><p>Side</p></td><td><p>Price</p></td><td><p>Quantity</p></td><td><p>Order Channel</p></td><td><p>Trade Date</p></td><td><p>Remark</p></td><td><p>Order Tag</p></td><td><p>Tag</p></td></tr>
<tr><td><p>字段说明</p></td><td><p>證券帳號</p></td><td><p>代碼<br/>填入規則：股票代碼。市場</p></td><td><p>訂單類型<br/>暫不支持條件單，具體對應內容查看模板文件「Notification」Sheet</p></td><td><p>委託方向<br/>填入B/S</p>
<blockquote>
<p>B：Buy<br/>S：Sell</p>
</blockquote></td><td><p>委託價格</p>
<blockquote>
<p>不超过 20 字符</p>
</blockquote></td><td><p>委託數量</p></td><td><p>委託渠道<br/>具體對應內容查看模板文件「Notification」Sheet</p></td><td><p>委託日期</p>
<blockquote>
<p>YYYY-MM-DD</p>
</blockquote></td><td><p>訂單/明細<br/>判斷這條補單訂單是 Order 還是 Done<br/>一般需要上下 Order、Done 結合使用<br/>可不填，即默認為 Order</p>
<blockquote>
<p>Order - 订单<br/>Done - 订单明细</p>
</blockquote></td><td><p>訂單標記<br/>可不填，不填則默認為 Normal<br/>具體對應內容查看模板文件「Notification」Sheet</p></td><td><p>彩蛋字段 -- 風控豁免<br/>是否需要跳過風控，填入 Y/N<br/>默認為空，即為不跳過</p></td></tr>
<tr><td><p>填入示例</p></td><td><p>LPT243184</p></td><td><p>700.HK</p></td><td><p>ELO</p></td><td><p>B</p></td><td><p>366.90</p></td><td><p>300</p></td><td><p>WTT</p></td><td><p>2024-04-20</p></td><td><p>Order</p></td><td></td><td><p>Y</p></td></tr>
</tbody>
</table>

- 補單導入結果反饋：
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[53%]" width-ratio="53">
        <img src="/assets/QHp8baWGao63ePxGFUwcudnfnNh.png" src-width="806" src-height="318" align="center"/>
        </div>
    <div class="w-[46%]" width-ratio="46">
        <img src="/assets/MTjJbq6CVodKe4x0kkBcQzE9nle.png" src-width="1600" src-height="734" align="center"/>
        </div>
    </div>
    - 補單文件中異常數據提示，目前會針對客戶證券帳號、股票標的、訂單類型、委託渠道、訂單標記、Remark 等多維度字段進行異常檢測，存在異常時將被攔截，可通過「導入反饋」窗口查看詳細數據

### 2.新股管理

<b>功能概述</b>

交易員可通過「新股列表」頁面查看新股詳情，並且可替客戶進行新股申購。同時對線上客戶的申購情況也可在「申購列表」中進行管理。

<img src="/assets/V5DgbBsLvoyiFPxyuX9cuePcnfd.png" src-width="2858" src-height="1736" align="center"/>

<b>功能頁面結構說明</b>

頂部為「新股列表」、「申購類表」切換區

列表右側固定為操作功能區

中間列表為新股 / 客戶申購數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 2.1 新股列表

查看新股基礎數據，包含新股代碼、開始申購日期、截止申購日期、申購價格區間、每手股數等，可點擊“詳情”進入新股詳情頁面查看新股數據。新股數據均可通過 WBO 後臺進行管理配置，WTT 僅展示後臺配置數據及內容。

<img src="/assets/CatUbWowpoTdTuxm567csyD3nSc.png" src-width="2734" src-height="1598" align="center"/>

#### 2.2 新股詳情

新股詳情窗口中包含三塊內容：基本信息、融資信息、申購詳情。可通過時間軸下的功能 Tab 進行切換查看。

<img src="/assets/MtwkbbMVuocjqVx27atcsgHFnRf.png" src-width="2752" src-height="1170" align="center"/>

- 基本信息：後臺配置的新股基本數據
- 融資信息：當前新股可用到的融資倍數既要求
- 申購詳情：當前新股認購的客戶信息

#### 2.3 新股申購

交易員通過 WTT 可幫助客戶進行新股申購，點擊新股列表操作列中“申購”按鈕，可進入新股申購窗口，通過此窗口進行申購。申購窗口主要分為資金確認、申購信息填入、申購結果覆核三個模塊進行。

<img src="/assets/QovebuCYZo8ETgxN63dciIElnuh.png" src-width="2870" src-height="1730" align="center"/>

- 填寫申購帳戶，可通過帳戶搜索選擇需進行申購的客戶
- 資金信息：選中客戶後將展示客戶購買力及現金情況，交易員可通過這些數據綜合判斷該帳戶是否適合進行申購
- 申購操作：填寫客戶需申購的數量及方式，同時支持幫助客戶選擇並使用抵用券
- 申購覆核：填寫的申購信息確認無誤後，可操作底部“確認”進行提交，提交完成後即完成新股申購

#### 2.4 申購列表

可通過該列表查看客戶申購數據（包含客戶 App、PC 端申購及交易員 WTT 代客申購），並且可通過該列表對客戶的申購訂單進行改、撤操作。

<img src="/assets/SqzIbnFbRoPsx7xuUYhcZ96mneb.png" src-width="2856" src-height="1722" align="center"/>

- 查詢功能：目前僅支持客戶、訂單狀態搜索
    - 如需查看某一個新股標的的申購情況需前往「新股列表」-「詳情」-「申購詳情」中查看

- 列表數據：僅展示基礎申購情況，包含申購客戶帳號、申購金額、股數等
- 操作列說明：支持改單、撤單、重新申購、詳情操作
    - 改單、撤單：交易員可直接對風險客戶申購單進行改撤單處理
    - 重新申購：如將客戶歷史申購訂單進行撤單後，當前新股仍在申購期內，則可通過該操作直接進行二次申購
    - 詳情：查看客戶申購詳情數據

### 3.证券限制

<b>功能概述</b>

黑白名單：對股票設置黑名單進行交易限制，限制後客戶提交交易時將提示攔截。同時如果批量設置黑名單後需要針對某些用戶單獨開放交易權限，可使用白名單功能進行權限開放。

風險限制：對 VA-ETF 進行交易限制，可通過“PI 認證、VA-ETF 風險問卷、VA-ETF 風險提示”三個維度進行設置。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/MoOibOAE2olEZMxb0bBcjcIInde.png" src-width="2852" src-height="1736" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/JgHwbMFESoT4R0xlNWocRz3ynPf.png" src-width="2870" src-height="1736" align="center"/>
</div>
</div>

<b>功能頁面結構說明</b>

頂部為「黑白名單」、「風險限制」切換區

列表右側固定為操作功能區

中間列表為黑白名單 / 風險限制已設置的條件數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 3.1 新增黑白名單條件

通過列表頂部右側“新增”按鈕進入「新增交易限制」窗口，可在窗口內對股票、帳戶進行交易限制。目前系統支持手動限制、股票導入兩個方式進行設置。

> 手動限制：手動人工添加股票限制條件，添加並提交成功後，條件生效
> 股票導入：通過批量導入股票的方式對客戶進行交易限制，該方式目前僅支持限制全部客戶

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/CxINbJ2cvoIsCpxW0Uoc13UHnsd.png" src-width="746" src-height="1666" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/C7gEbgLfdoHJcYxzsl8cEBfUnFO.png" src-width="752" src-height="1672" align="center"/>
</div>
</div>

- 字段解釋：
    - 限制類型：黑名單、白名單
    - 市場：全部市場、港股、美股、滬深、新加坡
    - 交易品種：全部品種、股票/ETF、輪證、期權
    - 股票：輸入需限制的股票代碼 --- 此處僅支持填單一股票
    - 限制交易方向：買入開倉、賣出平倉、賣出開倉、買入平倉 --- 此處支持多選，同時限制多個方向
    - 關聯客戶方式：手動關聯、批量導入、關聯地區
        - 手動關聯：即在下方“關聯客戶”字段中手動選擇客戶帳號進行添加限制
        - 批量導入：通過文件批量上傳需限制的客戶帳號，切換該方式後，下方將出現“導入客戶”字段，可進行文件上傳 --- 需根據模板進行上傳，首次使用時建議先下載模板
        - 關聯地區：選擇該方式後可通過地區對客戶進行限制，在下方“關聯地區”字段中設置完成提交後，將通過“居住國家 -- 證件簽發地 -- 國籍”依次進行判斷進行交易攔截 --- 此處支持多選，同時限制多個地區
    - 備註：僅支持填寫文字，最多 30 個文字字符
    - 導入股票：上傳股票列表文件，文件中股票代碼填入格式為“代碼。市場”，例如：00700.HK、BABA.US --- 需根據模板進行上傳，首次使用時建議先下載模板

- 字段之間關聯關係及注意事項：
    - 市場、交易品種、股票均存在關聯關係，如選擇港股市場的情況下，交易品種則不會出現期權的選項
    - 市場選擇全部市場時，股票輸入框內不支持填入股票。請注意：由於選擇時全市場限制，填入的股票條件將不會生效
        - 限制全部市場、品種的交易：市場選擇全部、交易品種選擇全部品種，股票框不填
        - 限制單個市場、品種的交易：市場選擇需要限制的市場，交易品種可根據實際進行選擇，股票框不填
    - 針對美股 - 期權限制時，系統將默認限制填入股票代碼下全部的期權。例如設置美股期權黑名單，當股票字段填入 BABA.US 時，則表示 BABA.US 下的期權均不支持操作買入開倉（參考下圖）
    <img src="/assets/QRsybp22CoVkT4xNP6Wck0swnUe.png" src-width="748" src-height="744" align="center"/>

- 黑白名單攔截結果提示：黑名單提交成功至生效，將會有 1-2 min 的生效延遲），成功生效後，如客戶交易被限制的股票時，客戶交易終端將收到攔截提示。
    - 例如設置不支持買入開倉，則客戶/交易員交易時將提示：委託失敗，該標的不支持買入開倉
    <img src="/assets/EuA8bCj8RoHiXXxLjU5csROQnfe.png" src-width="574" src-height="118" align="center"/>

#### 3.2 黑白名單列表操作功能

黑白名單支持操作編輯、刪除、關聯客戶、批量刪除。編輯、刪除均是股票條件維度下的操作，而關聯客戶則是操作調整限制條件內的客戶範圍。

<img src="/assets/Hsz9bZrLLo9omBxzYYuclfIUn2g.png" src-width="2870" src-height="1744" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[58%]" width-ratio="58">
<img src="/assets/FDDYbWDKRoSm7IxnYdectyL9nui.png" src-width="746" src-height="696" align="center"/>
</div>
<div class="w-[41%]" width-ratio="41">
<img src="/assets/YswWbPHRcoSF0UxqvfWcHZisn2f.png" src-width="758" src-height="992" align="center"/>
</div>
</div>

- Checkbox 批量刪除：適用於僅單獨刪除某幾條限制條件，則可通過 Checkbox 小範圍選中後進行刪除
- 右上角“批量刪除”按鈕：適用於全局性大範圍的刪除，可通過「批量刪除」窗口手動添加需刪除的限制條件，再導入需刪除的股票代碼，滿足限制條件的股票將大批量的進行刪除
- 操作列
    - 編輯：僅支持編輯限制交易方向、備註，其他限制條件（限制類型、市場、品種、股票）不支持編輯
    - 刪除：僅刪除當前選中的這條限制條件
    - 關聯客戶：
        - 如關聯全部客戶，點擊該功能後將直接彈窗提示 - 已關聯全部客戶，則不可進行關聯客戶的相關編輯
        - 如僅關聯部分客戶，可進入「關聯客戶」窗口，在該窗口內新增、刪除關聯客戶（窗口內暫不支持批量操作）
        <div class="flex gap-3 columns-2" column-size="2">
        <div class="w-[49%]" width-ratio="49">
                <img src="/assets/BeBqbHcVZobWp4xXf6OcOIC0nKh.png" src-width="698" src-height="314" align="center"/>
                </div>
        <div class="w-[50%]" width-ratio="50">
                <img src="/assets/OA5TbBacXo9SESxTzs1ceFHBn7f.png" src-width="2288" src-height="1006" align="center"/>
                </div>
        </div>

#### 3.3 風險限制功能說明

<img src="/assets/F76Ebe80WoGAg3x0OGGc7ACBnSb.png" src-width="2864" src-height="1740" align="center"/>

- 可通過切換 Tab 頁面來限制 VA-ETF 風險提示，可根據三個維度來設置：PI 認證、VA-ETF 風險問卷、VA-ETF 風險提示
    - PI 認證：勾選代表對應的標的需要有 PI 認證才可進行交易
    - VA-ETF 風險問卷：勾選代表對應的標的需要完成題集認證，未進行認證的用戶將調整至問卷流程
    - VA-ETF 風險提示：勾選代表對應的標的需要在端側內進行風險認證，沒有銅通過 VA-ETF 風險測評的用戶，首次交易將會展示風險聲明

- VA-ETF 風險問卷、VA-ETF 風險提示，條件互斥，不支持同時多選該兩項
- 其他限制規則與黑名單規則一致，可參考 3.1 中的操作說明

### 4.成交分配 & 轉移

<b>功能概述</b>

成交分配頁面支持操作訂單分配、訂單轉移。可通過這個功能處理客戶錯單相關問題，普通訂單、機構訂單均支持操作分配，但是目前只有機構訂單支持操作訂單轉移。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/AkaEbZpxoo2KsdxD5bdcpx3snpe.png" src-width="2874" src-height="1736" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/LPSCbKWtzoucCVx0O0qc4OhYnLb.png" src-width="2870" src-height="1732" align="center"/>
</div>
</div>

<b>功能頁面結構說明</b>

頂部為「成交分配」、「已分配訂單」切換區

列表右側固定為操作功能區

中間列表為成交分配 / 已分配訂單的數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 4.1 成交分配頁面說明

成交分配頁面分為上下兩部分：上半部分為成交訂單信息，其中包含普通訂單及機構訂單，可在列表中操作分配、轉移。下半部分為成交訂單相關的分配、轉移、子訂單數據，需要選中上方一條具體訂單後才會有實際數據。

- 成交分配頁面支持兩種兩個類型：普通訂單、機構訂單
    - 普通訂單：僅支持分配。可任意選擇分配帳戶，分配完成後原訂單將撤單，重新按新帳戶生成一條普通訂單
    - 機構訂單：支持分配、轉移。分配僅支持分配給交易帳戶下的子帳戶，分配成功後生成一條分配記錄，不會產生實際訂單；轉移僅支持轉移給其他主帳戶，轉移成功後生成一條機構訂單，該機構訂單可再次進行分配、轉移。

- 分配列表說明
    - 列表基礎數據字段均來自普通訂單或機構訂單組件中
    - 特別字段說明：
        - 成交均價 = 機構訂單中的“當日成交均價”
        - 成交數量 = 機構訂單中的“當日成交數量”
        - 待處理數量 = 當前機構訂單可用於操作分配、轉移的數量，即當日成交數量 - 已分配數量 - 已轉移數量
        - 操作狀態：未分配、已分配、部分分配或轉移
        - 轉移審批：審批中、已通過、已拒絕（-- 表示未進行提交審批）

- 列表操作
    - Checkbox：多選機構訂單，可進行合併分配。合併分配只有同帳號、同股票、同方向才可以進行合併分配
    - 分配：執行成交分配，進入分配操作窗口
        - 當訂單存在轉移審批中或已經分配完時，分配按鈕灰色不可點擊
    - 轉移：執行成交轉移，進入轉移操作窗口
        - 當訂單存在轉移審批中或已經分配完時，轉移按鈕灰色不可點擊

- 設置分配組：可在分配之前預設好分配組，後續分配頁面可直接選擇已設置好的分配組，可提升分配操作效率。
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[72%]" width-ratio="72">
        <img src="/assets/ZPRHbu2XgojrJTxMpbhcsuktn6g.png" src-width="2876" src-height="1736" align="center"/>
        </div>
    <div class="w-[27%]" width-ratio="27">
        <img src="/assets/BtFRbE0FJoMMV6xJg4ucS4L7nph.png" src-width="1060" src-height="1700" align="center"/>
        </div>
    </div>
    - 新增分組：需要填入組名、分配方式、待分配客戶、分配比例
        - 組名：體現在分配組預設列表中，並且後續操作分配時通過組名來進行關聯，請填寫較明顯易理解的名稱
        - 分配方式：支持按比例、按數量兩種分配方式進行預設
        - 待分配客戶：選擇該分配組中的客戶帳號
            - 客戶如添加有誤，可通過後面紅色 icon 進行刪除
            - 可點擊“添加待分配客戶”添加更多客戶帳號
        - 分配比例：選擇按比例分配方式時，則需要填寫分配比例，分配比例加總上限為 100%
        - 分配數量：選擇按數量分配方式時，則需要填寫分配數量，分配數量一般為自定義設置
        <img src="/assets/QfYLbwVOzoZV4WxNAylcBrabnWJ.png" src-width="1064" src-height="678" align="center"/>

#### 4.2 普通訂單 - 成交分配

操作普通訂單分配時，頂部搜索項需將訂單類型切換為“普通訂單”，操作列中僅支持“分配”。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/AoLQbNuuKo6ECJxGa1NcFGsjnhh.png" src-width="2864" src-height="1734" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/LxfXbXnYTobrPUxv0sRcpueqn9z.png" src-width="2866" src-height="1742" align="center"/>
</div>
</div>

- 分配操作窗口
    - 普通訂單操作分配支持訂單分配、明細分配兩種方式
        - 訂單分配：按 Order 層面將整個訂單統一進行分配，不管原訂單的成交明細情況，訂單分配時僅支持分配給當前帳戶下的子帳戶
        - 明細分配：按 Orde 下 Trade Done 進行分配，該方式如需將成交明細全部分配完需要操作多次，明細分配可將 Trade Done 分配給多個其他帳戶（無需主子帳戶關係）
    - 分配訂單：默認為選中的訂單，如果是明細分配模式，則可以進行下拉選擇，選取具體的訂單明細進行分配操作
    - 最大可分配數量：即為當前選中訂單的待處理數量，如合併分配即為多條訂單的待處理數量累加
    - 分配組：在分配列表頁面中預設分配組，預設好後可在該位置選中分配組進行快速指定帳戶
    - 分配方式：支持按數量、按比例兩種分配方式
        - 按數量分配：默認為按數量的分配方式，該方式下需要手動輸入每一個子帳戶分配的具體數量，加總不可超過最大可分配數量
        - 按比例分配：該方式下手動輸入子帳戶接收的比例，系統將根據輸入的比例及可分配數量自動計算，最終計算結果將取整，所以將存在零股的偏差情況，需要在預覽頁面進行手動修改，加總不可超過 100%
    - 分配價格：默認取用訂單的成交價格，不可編輯
    - 待分配客戶：選擇需接受分配的帳戶
    - 分配數量 / 比例：會根據選擇的分配方式來進行切換

#### 4.3 機構訂單 - 成交分配&轉移

機構訂單可支持在該頁面中操作分配、轉移，頂部搜索項需將訂單類型切換為“機構訂單”，操作列中支持“分配”、“轉移”。待處理數量為 0 時，操作功能將置灰不可點擊。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/MZQBbJ2vcobBmwxVgp3c0mXYnGO.png" src-width="2866" src-height="1740" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/K2d6b7GahoQ4IIxAU8Ccpbp8nvc.png" src-width="2864" src-height="1740" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/J9vsbRNoQoXN1ux41ftcKAGjn4g.png" src-width="2874" src-height="1722" align="center"/>
</div>
</div>

- 分配操作窗口
    - 分配模式：機構訂單分配模式僅支持“訂單分配”
    - 分配訂單：
        顯示選中的訂單數據（母帳戶帳號 / 股票名稱 / 當日成交數量 @ 當日成交均價）
        如通過 checkbox 合併分配則該區域會顯示批量選中的機構訂單數據
    - 最大可分配數量、分配組、分配方式、待分配帳戶、分配數量/比例：規則均普通訂單一致
    - 分配價格：默認按機構訂單的成交均價進行分配，如若合併分配則會根據選中的多條機構訂單來計算成交均價，成交均價計算規則：sum 機構單成交金額 / sum 機構單成交數量，計算結果四捨五入保留四位小數

- 轉移操作窗口
    - 轉移訂單：默認展示選中的機構訂單（母帳戶帳號 / 股票名稱 / 當日成交數量 @ 當日成交均價）
    - 轉移賬戶：選擇需轉移的目標賬戶，僅支持選擇母帳戶進行轉移
    - 轉移數量：僅支持輸入數量，最大可轉移數量為當前訂單的待處理數量

#### 4.4 分配預覽窗口

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[42%]" width-ratio="42">
<img src="/assets/AG9ZbfU3rop2QGxPRLHc8RjWnTe.png" src-width="942" src-height="698" align="center"/>
</div>
<div class="w-[57%]" width-ratio="57">
<img src="/assets/JyA8baVIyoGQwNx8BF0cFv2SnRb.png" src-width="940" src-height="514" align="center"/>
</div>
</div>

- 分配预览窗口
    - 顯示當前這筆分配的基本情況，包含分配模式、分配訂單（原始機構訂單）、分配詳情
    - 分配詳情如存在多個帳戶可在列表中滾動查看
    - 查看填入的分配基礎信息及分配帳戶、數量情況
    - 統計實際操作分配的數量及剩餘可分配數量，剩餘可分配數量 = 可分配數量 - 已分配數量

- 轉移预览窗口
    - 顯示當前這筆轉移訂單的基礎信息
    - 轉移對應賬戶及轉移數量信息

#### 4.5 已分配訂單

該頁面主要僅顯示通過成交分配操作出來的訂單數據，並且支持在該頁面上操作發動成交確認書、修改佣金、確認書預覽、查看訂單詳情、取消分配。

<img src="/assets/H8PKbsT9ioMI0LxQw3IcRgxPnVb.png" src-width="2858" src-height="1740" align="center"/>

<b>列表說明</b>

- 該列表字段均通過分配而來，基礎股票方向等數據與分配前原機構訂單數據一致
- 特別字段說明：
    - 分配狀態：成功、失敗、取消
    - 佣金修改：未提交、待審批、修改失敗、修改成功
    - 發送狀態：未發送、已發送（成交確認書是否發送）
    - 說明：如存在分配失敗，將在此列中顯示分配失敗原因

<b>列表操作</b>

- 發送成交確認書
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>通過列表左側的 Checkbox 勾選需要發送成交確認書的分配訂單，勾選成功後底部將出現“發送成交確認書”按鈕，可點擊進行批量發送</p>
        </li>
        <li><p>當分配訂單存在審批或已取消時，不支持發送成交確認書，此時提交系統會有響應攔截及提示，詳細原因可參考提示文案</p>
        </li>
        <li><p>可在列表上的“發送狀態”對應查看當前成交確認書的發送節點&amp;狀態</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/WgyobYr9BoGrCxx4BQfcXVkin7g.png" src-width="2862" src-height="1734" align="center"/>
        </div>
    </div>

- 修改佣金
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>列表右側“操作”列支持選擇“修改佣金”，直接通過彈出的窗口對當前分配訂單進行佣金、結算日期的修改</p>
        </li>
        <li><p>確認提交修改後將發起審批，將直接提交至 BO 後台進行審批，同時可以在列表中“佣金修改”自字段來查看審批狀態</p>
        </li>
        <li><p>佣金修改窗口中修改的數據審批通過後生效顯示</p>
        </li>
        <li><p>如訂單處於佣金審批中、已取消分配、非訂單分配狀態下，則不支持操作修改佣金（按鈕限制置灰）</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/PhAybIxEro7Ii3xXnjJcYY04n8c.png" src-width="2866" src-height="1738" align="center"/>
        </div>
    </div>

- 預覽：確認書預覽
    - 預覽帳戶分配訂單的成交確認書，點擊後將跳轉至網頁查看

- 詳情：查看訂單詳情
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>查看分配訂單詳情，具體包含信息：原訂單信息、分配情況。可直接通過詳情窗口頁面查看</p>
        </li>
        <li><p>當前詳情窗口僅支持查看，無其他操作功能</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/VZPlbaxTUoG1mQxscWAcMCdsnKe.png" src-width="2864" src-height="1734" align="center"/>
        </div>
    </div>

- 取消：取消分配
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>當操作取消分配時，相對應同一個訂單源的訂單將同時被取消，取消二次確認窗口中將同步展示全部關聯的分配訂單</p>
        </li>
        <li><p>點擊“確定”後，窗口列表中的訂單將同意被取消，取消分配的數量也將回滾至原帳戶中</p>
        </li>
        <li><p>僅當天分配的訂單支持操作取消分配，歷史訂單由於已做結算，故不支持取消。歷史訂單點擊取消時，將提示：分配取消失敗。</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/VhMTbQFJOou1tHxF0CDcpQIenhb.png" src-width="1102" src-height="588" align="center"/>
        </div>
    </div>

### 5.订单批核

<b>功能概述</b>

觸發 WBO 後台設置風控審核條件的訂單，將進入「訂單批核」頁面進行批核，批核通過後將再執行交易委託上報，在批核完成之前，訂單均存儲在 Whale 系統中並未進行委託上報。

提交訂單、改單，均有可能會觸發風控審批，撤單不觸發。

<img src="/assets/WTSKbpAsXol7Rmxva0hch6uwntg.png" src-width="2868" src-height="1732" align="center"/>

<b>功能頁面結構說明</b>

列表頂部為功能頁面查詢條件

列表右側固定為操作功能區

中間列表為觸發風控審批的數據，頁面數據支持分頁查看（一頁 30 條數據）

#### <b>操作及功能說明</b>

#### 5.1 訂單批核列表頁面說明

下單觸發批核的訂單將進入該列表統一進行審批工作，如需要執行審批操作需確保您擁有訂單批核頁面管理權限（權限參考《快速上手》文檔內容）。

<img src="/assets/Q9WBbxSDDo7wO8xaKvBcVxoSnyc.png" src-width="1280" src-height="772" align="center"/>

- 查詢條件：訂單號、客戶、市場、股票、批核狀態、委託時間、操作時間
    - 訂單號為訂單委託單號，與交易面板中訂單組件中一致，如需查詢某一訂單是否審批通過可使用訂單號進行精準查詢
    - 批核狀態：待審批、已通過、已拒絕、已過期、已撤單
        （待審批、已通過、已拒絕：均為批核的操作狀態。在批核操作之前可操作撤單或訂單已過期則自動變更狀態，無需進行再進行審批）
        當訂單觸發批核時，對應在交易面板中訂單組件“批核狀態”字段將會展示“待審批”，前台交易員可直觀知曉訂單情況（僅下單、改單會觸發批核，撤單不觸發批核）
        <img src="/assets/ABvSb0XKfoS4pTxFjeMcyom8nrb.png" src-width="2716" src-height="742" align="center"/>
    - 委託時間：訂單提交委託時間，與交易面板中訂單組件中一致
    - 操作時間：風控員/交易員操作批核的具體時間

- 列表字段：列表展示訂單基礎信息及審批信息，當訂單未進行批核時，批核狀態為“待審批”，操作人及操作時間均為空
- 操作：批量審批、單條審批、詳情
    - 批量審批：可通過列表前的 Checkbox 進行批量選擇，選中後可操作批量通過或駁回，該方式可進行快捷審批，但是無法查看到每一條觸發的具體風險限制
    - 單條審批：通過列表右側操作列進入批核窗口，針對性進行審批
    - 詳情：
    
#### 5.2 批核操作窗口

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[61%]" width-ratio="61">
<img src="/assets/Qv3KbsBQBowfU0xz0jccY3X9nQg.png" src-width="2864" src-height="1096" align="center"/>
</div>
<div class="w-[38%]" width-ratio="38">
<img src="/assets/Yzr0bzI26o7rKhxjFYXcvyn7nie.png" src-width="2866" src-height="1740" align="center"/>
</div>
</div>

<img src="/assets/RBq0b7ymyoy8iGxekPncktHEnVe.png" src-width="2868" src-height="1736" align="center"/>

- <b>單條審批：</b>
    - 當批核狀態為“待審批”時，可操作“批核”，其餘狀態下均只支持查看批核訂單詳情
    - 批核操作窗口，主要包含三部分信息：訂單基礎信息、觸發批核的限制類型、批核操作
        - 訂單基礎信息：包含委託單客戶信息、委託訂單方向、類型及價格數量
        - 觸發批核的限制類型：對應展示具體觸發的風控限制類型，展示格式為“風控代碼｜風控限制名稱”
        - 批核操作：操作“通過”/“駁回”及輸入批核原因，無論批核通過或駁回均支持填寫批核原因，填寫的批核原因將在訂單批核詳情中查看

- <b>批量審批：</b>
    - 通過列表前 Checkbox 選中訂單進行批量操作，選中後列表底部將出現“通過”、“駁回”操作按鈕，可對這批選中的訂單快捷處理批核
    - 批量審批將不可查看到每一條訂單觸發的具體風控類型，請謹慎使用！

#### 5.3 批核詳情

<img src="/assets/KYNJbNhLzo6J83xUMMncy6XOnbg.png" src-width="2872" src-height="1742" align="center"/>

- 當訂單非待審批狀態時，均支持查看詳情，詳情中可查看訂單基礎信息及風控限制類型，同時也包含訂單的批核狀態及操作時間

