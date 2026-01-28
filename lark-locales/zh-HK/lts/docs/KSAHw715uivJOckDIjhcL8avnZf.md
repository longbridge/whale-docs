---
title: 系統介紹
slug: KSAHw715uivJOckDIjhcL8avnZf
sidebar_position: 5
---


# 系統介紹

# 一、系統介紹

<b>基本架構</b>

```text
根據客戶是否參與公司行動，可將公司行動分爲強制類和自願類（可選擇）。強制類公司行動，客戶無需採取任何操作即可參與的行動，例如普通分紅。自願類公司行動，客戶需要採取一定的操作才能參與的行動，例如供股、選股選息。兩種類型公司行動的流程略有差異


在公司行動處理過程中，還會和清算服務、消息中心、資產服務產生互動
```

<img src="/assets/HUGHbiRtlodsmLxlApBjJASvptb.png" src-width="3030" src-height="1698" align="center"/>

<b>操作流程</b>

1. 預告和方案的創建
    - 券商操作：非HK市場，需要根據上手數據，人工創建預告和方案信息
    - 系統功能：直聯港交所的券商，可利用導入的05文件自動創建HK市場的預告和方案信息

2. 登記
    - 券商操作：需要覈對系統的持倉是否和上手的一致
    - 系統功能：將根據清算服務或者資產服務的數據，生成含權益信息和費用信息的客戶明細

3. 客戶行權
    - 自願類公司行動流程之一，該步驟的時間一般比較長
    - 券商操作：需要在此階段通知客戶，收集客戶的行權指令並在系統內做登記
    - 系統功能：可自動通知客戶，並在App和證券後臺提供行權操作入口

4. 上報
    - 自願類公司行動流程之一
    - 券商操作：需要彙總客戶的行權指令，並在截止日前向上手進行申報
    - 系統功能：針對供股、要約進行提前的資產處置

5. 執行：
    - 券商操作：覈對上手的執行信息，並進行尾差調整
    - 系統功能：進行資產處置

已支持的的公司行動類型

TM（結構性產品的接管（強制）/自動練習）

BE（福利權利）

CA（公司行動）

DS（已除名、過期、失效）

OO（公開發售）

EO（超額公開要約）

RS（權利認購）

ER（超額認購權）

TU（無條件接管）

TC（接管（有條件））

ADR（ADR費用）

SO（剝離）

IP（利息支付）

VT（股東大會）

# 二、系統設定

## 1. 初始化參數配置

```text
暫不支持頁面配置，可聯繫客戶服務調整配置
```

## 2. 收費配置

<b>路徑</b>

```text
公司行動 >費用管理
```

<b>普通收費設置</b>

```text
可以維護管理公司行動的全局相關費用收取配置（方案類型-費用類型）
```

<img src="/assets/PBvmb1zkuozQ3xxsvFgjsHxipac.png" src-width="3344" src-height="1558" align="center"/>

```text
也可以在記錄右側區點擊【編輯】，來修改所對應的公司行動費用配置， 可以在左上方點擊【新建】，來增加一筆費用配置


![image.png](/assets/2c08a0b7f409e07f2eac4aa2effcf02a.png)

- 方案類型：匹配條件之一，匹配的主要條件
- 市場：匹配條件之一，只能選擇
- 費用類型：計算規則之一，只能選擇
- 子仓编号：匹配條件之一，配置 TAX 費用的時候，需要使用，不同地區（大帳戶），可使用不同費率
- 計費方式、計算方式：搭配使用
    - 登記持倉（每手）+比例收費：每手收 N 元
    - 預告+固定數額：每次公司行動收 N 元
    - 權益金額+比例收費：分紅金額*5%
- 截取方式：控制小數位數的截取方式，按照 2 位截取
- 收費優先級、費用特殊限制配合使用，比較費用和分紅（分股分紅的分股也統計在分紅內）的關係
    - 無限制：獨立進行費用計算
    - 單項費用不超過權益：該項費用的費用金額和分紅進行比較，費用大於分紅的，按照分紅金額收費
    - 優先級前費用不超過權：按照優先級進行費用計算，優先級前的費用（含自身）大於分紅的，按照分紅金額=優先級前費用收
```

<b>過戶費設置</b>

```text
公司行動過戶費只需要配置一條


新增過戶費設置：可進行單獨收費，也可進行聯合收費

    - 單獨收費：和Handling Fee獨立，推薦此種配置
    - 联合收费：和Handling联合收费，收取Handling时，自动抵扣過戶費部分
```

<img src="/assets/QLojbYK3MolwgZxYzvLjfWFqpTc.png" src-width="3348" src-height="992" align="center"/>

<img src="/assets/EgHfbAt6lomKwoxgXP7jU4Yxp2e.png" src-width="3376" src-height="1254" align="center"/>

# 三、版面區域說明

## 1. 列表頁摘要

```text
在進公司行動預告紀錄查詢明細畫面， 版面如下： 中間區域 展示‘推進狀態’與‘指令收集狀態‘，方便快速定位
```

<img src="/assets/HU1WbAUVpo0IcZxh2iejIAKnpZZ.png" src-width="3186" src-height="1520" align="center"/>

```text
右邊紀錄區展示該公司行動可操作的功能鍵 （減少誤操作，方便單一公司行動處理）
```

<img src="/assets/GuMCbnhmgowA02xGFsKj86UQpGb.png" src-width="3184" src-height="1512" align="center"/>

```text
由於公司行動類型眾多，業務節點不盡相同， 系統也針對公司行動類型提供操作順序順序的文案（操作引導）
```

<img src="/assets/VOiwbHSyloaBGwx1ucpjBELZpnh.png" src-width="2664" src-height="956" align="center"/>

```text
在列表列也展示備註文案提示
```

<img src="/assets/MJD9bfckfohK4JxfSqzjpTTBpCd.png" src-width="3560" src-height="1528" align="center"/>

```text
批量操作功能，系統會狀態判斷，提供可操作功能鍵
```

<img src="/assets/M4phbSclxoxDhMxCCqpjvBArpf8.png" src-width="3324" src-height="1598" align="center"/>

```text
提供 02 文件的互動，實時更新公司行動最新狀態
```

<img src="/assets/DN3sbinxboe5fTxy5CFjul32pb0.png" src-width="3334" src-height="1478" align="center"/>

<img src="/assets/Sahnbt7NNoUvANxryBqj4sBvphh.png" src-width="3358" src-height="1002" align="center"/>

## 2. 詳情頁面

```text
點選進入詳情頁面，分成幾塊 資訊區域如下
```

<b>公司行動主體與</b>

```text
公司行動類型圖標 與推進狀況
```

<img src="/assets/MDA5b5dYwo4Oakx18wZjOVP1p4c.png" src-width="2388" src-height="292" align="center"/>

<b>公司行動預告訊息資料</b>

```text
紀錄該公司行動預告的重要欄位訊息（預告類型/標的/執行方式/登記日/派發日.._)
```

<img src="/assets/YLT3bICEkotdZuxh0DgjjlhUpEh.png" src-width="2762" src-height="1033" align="center"/>

<b>方案信息與費用規則</b>

```text
這邊記錄對應的預告方案紀錄與費用規則，一個公司行動如果有單獨的規則，可以在費用規則維護
```

<img src="/assets/LrabbunXCoTnWdxZkzPjlBLXppc.png" src-width="2682" src-height="1138" align="center"/>

<b>明細匯總與客戶明細</b>：

```text
這邊記錄 所登記的客戶匯總資料與客戶明細
```

<img src="/assets/U6bmb70oqo0Zbix7NtHjnE4ppIc.png" src-width="2674" src-height="1182" align="center"/>

<b>同時在詳情頁，基本上提供所有可供操作的功能鍵入口</b>

```text
- 在詳情頁可以直接增、刪、改客戶派發計算的權益
- 在詳情頁-客戶詳情可以進一步操作線下行權、更改權益和費用
```

<img src="/assets/YnIjbu33qonYCqx7Dksj9WhupKh.png" src-width="2504" src-height="1634" align="center"/>

<img src="/assets/NYtxblC9yoYJQYxbepTjLyjXpSb.png" src-width="2380" src-height="814" align="center"/>

<img src="/assets/IbeqbjK9RosDRRxLrT8j0KhtpBc.png" src-width="2370" src-height="1046" align="center"/>

## 3. 備註欄位說明

```text
因為公司行動預告執行時，會涉及資產與費用的變更，因此系統 也會自動產生 通用的資產流水相關備註說明


**方案備註（预告備註）**


HK 市场自動处理，其它市場手填


TM、BE、IP 类：股票编号+市場+名稱+逗号+CCASS 备注
```

<img src="/assets/VXGDbjm1Powg3uxZBefjstCip8w.png" src-width="3548" src-height="1806" align="center"/>

<b>權益備註</b>

```text
- 方案備註+逗号+持倉
```

<img src="/assets/LM67biuimoGfUIx4f9yjFSVZp2f.png" src-width="3548" src-height="1806" align="center"/>

<b>費用備註</b>

```text
格式（非 TAX_FEE）：費用名稱英文+股票编號+市場+股票名稱


CROSSTEC03893.HK手續費
```

<img src="/assets/PxVxbyfeQoo3bmxNaORj3Wvjp2d.png" src-width="3548" src-height="1806" align="center"/>

<b>費用備註格式（TAX_FEE</b>）

```text
預告（或方案備註）+ "- Withholding TAX"


例： TROW（US74144T1088）現金股息USD每股1.22（普通股息）-預扣稅
```

# 三、常規功能

```text
路徑：公司行動-公司行動
```

## 1. 初始化

```text
選擇狀態：初始化 ，就可以查詢到近期剛導入的公司行動預告


初始化狀態是公司行動預告的起始點， 也可以操作【終止】
```

<img src="/assets/PsDTbZBAVot7qvxuPtijOXgCpje.png" src-width="3172" src-height="1835" align="center"/>

```text
可以點擊【詳情】檢查對應的公司行動預告資料與方案信息，同時系統會產生默認方案
```

<img src="/assets/XEjQbvoqDoFhvMxq2LijrnRmpnf.png" src-width="3116" src-height="1616" align="center"/>

```text
首先展示是該公司行動的 系統推進節點狀態訊息：
```

<img src="/assets/XTTEbYAwboz1RnxRBZBj0yyfpZe.png" src-width="2606" src-height="282" align="center"/>

```text
注意：  不同的公司行動類型，會有不同狀態展示，方便用戶直覺掌握推進狀態
```

<img src="/assets/QqFNbGS6EovhWXxEW2vjRpO8pRo.png" src-width="2196" src-height="292" align="center"/>

```text
接下展示是**預告信息**： 同時系統也針對部分公司行動提供預設配置項來優化，

- 例： 派發位置（Street 或 Nominee） 或 支付日期+N 配置 （每家租戶可能不同）
- 零股轉分紅預設（是或否）。  注意：以上預設配置變更，若有需要請聯絡 長橋運營團隊來配置
```

<img src="/assets/RRlYbXcfTonNIOxtAGsj63DlpFf.png" src-width="2888" src-height="1408" align="center"/>

```text
接下來是**方案信息與費用規則**：
```

<img src="/assets/P3EWbl9Zoo5rOLxSeKpjGhrhpJE.png" src-width="2904" src-height="1508" align="center"/>

```text
這時候可以 根據需要 檢查個別的公司行動資料紀錄，若必要欄位有缺失， 系統會標紅出來，方便檢核數據
```

<img src="/assets/N2SjbJUJVogD43xAHBZjV3V2pDb.png" src-width="2868" src-height="1020" align="center"/>

```text
若沒問題，則可以點選 前方的 紀錄 Checkbox 區域，往下操作【登記】
```

<img src="/assets/RahGbmmn1oy4Pjx6BQxjD447phd.png" src-width="3076" src-height="1436" align="center"/>

```text
此時系統會檢查登記日與帳務日期，必須登記日小於目前帳務日期
```

<img src="/assets/TZ0bb63CkoIwIaxUrEPjA3g7pHe.png" src-width="2964" src-height="246" align="center"/>

## 2. 登記

```text
前置作業：  已經通過資料檢核 的公司行動預告紀錄


操作說明：  選擇狀態：初始化 ，就可以查詢到初始化的公司行動預告


後續可以操作【登記】或 【終止】，


在登記時，提供業務校驗功能的同時，增加了更多的業務檢查項目
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 注： 系統會判斷 必須 帳務日期&gt;= 登記日 才可進行登記操作。</p>
</div>

<img src="/assets/J9AMbo9opoDoE4xbgcUjz8bZple.png" src-width="2542" src-height="150" align="center"/>

<img src="/assets/EGQBbZDJBoOxlMx0BxojDfpspEh.png" src-width="3094" src-height="1562" align="center"/>

```text
注意： 因為公司行動 CCASS 文件會有一段時間的內容更新，因此我們優化 02 文件的讀取， 增加 CCASS 文件日期與 CCASS 狀態的展示，  租戶可選擇此欄位查出真正要開始執行的公司行動，否則容易因為 CCASS 狀態不是‘最終執行'，可能因為數據內容造成人工處理的環節
```

<img src="/assets/A4OYbw8TQo2Orzx5lPSjN1AjpPb.png" src-width="3192" src-height="1347" align="center"/>

```text
這樣可避免 CCASS 狀態是‘初步確認’（並非最終狀態） 或後面被取消，此時若去執行後續公司行動操作容易有機會出錯
```

<img src="/assets/GwtNb9CD2oofNMxUYytjCOnApCe.png" src-width="3094" src-height="390" align="center"/>

```text
此時可以在登記日期當天，點選 【登記】 ，往下一步操作節點進行，當登記成功後，


 注： 由於系統處理‘登記'須有點時間， 屬於異步設計，狀態會變成‘正在登記' （請稍後即可）


 當登記成功後，  就可在 執行菜單：公司行動>客戶明細作業， 可以查到對應預告方案的客戶登記明細紀錄
```

<img src="/assets/O0YXbpSsPouOfVxUfa1jYwDjpZc.png" src-width="2778" src-height="158" align="center"/>

## 3. 指令收集

```text
前置作業：  已經通過 登記成功 的公司行動預告紀錄


操作說明：查詢條件 選擇狀態： 登記成功。 指令收集狀態：初始化  ，就可以查詢到 近期 公司行動預告可進行指令收集操作的預告紀錄 （前提是 已登記成功 狀態）
```

<img src="/assets/HXODbDFWCoahVjxdC5Sj4kympHf.png" src-width="3410" src-height="1472" align="center"/>

```text
此時可以操作‘指令收集'。 在選擇開始時間 到結算時間，對相關客戶發送選擇通知（透過 APP 或 mail  訊息）


參考通知範例：


     茲通知股票 700.HK，提出無條件要约收購，收購價格為每股 12.00 HKD。截止辦理日期香港时间 2023-02-07  12:00. 預計派送日期 2023-03-07（僅供參考，以實際派發为準）。如欲参與，請登入 APP 在【我的資產-要约回購】進行操作。


注意：  系統將在指令收集截止日期後，推進狀態將自動變成‘指令收集完成'
```

<img src="/assets/Vnsnb0lFUoVOLZx8pv9jwMvTp5c.png" src-width="3412" src-height="1574" align="center"/>

```text
由於 指令收集涉及到 客戶選擇交互通知， 後續也要把客戶選擇記錄上傳 CCASS 處理， 整個指令收集的系統節點如下：  正在收集指令/上報成功/回填完成/處理成功/ 處理失敗
```

<img src="/assets/Xbqob2oCBoWOtpxAeudj4CeXp1b.png" src-width="2584" src-height="600" align="center"/>

### 上報

```text
上报操作是指 將客戶指令提交到CCASS


預告類型爲（BE）的因爲不需要資產預處理，不需要在系統內操作上報動作


预告類型为（OO EO RS ER TU TC ADR）因为需要资产预处理，需要在系统内操作上报动作。同時推進狀態：登記成功，指令收集狀態：处理成功 才可以進行，操作后系统将进行资产预处理，并更新指令收集状态为上报完成
```

<img src="/assets/F8TAbQ5PIo6DJaxzxPIjB6rupne.png" src-width="3548" src-height="1806" align="center"/>

```text
上報時可根據明細彙總的數據進行操作
```

<img src="/assets/DvnWbSvMuozysSxmlF8j7mqbpLg.png" src-width="3548" src-height="1806" align="center"/>

### 回填（Backfill）

```text
回填操作是指 將客戶指令選擇上傳 CCASS 處理後，要將 CCASS 的最後處理結果 回填到系統內的操作
```

操作說明：

```text
预告類型为（OO EO RS ER TU TC ADR）同時推進狀態：登記成功，指令收集狀態：上报完成 才可以進行
```

### 尾差處理

```text
预告類型为（OO EO RS ER TU TC ADR ）不支持


同時推進狀態：登記成功，指令收集狀態： 客户操作完成 才可以進行,可以在 紀錄右側功能鍵操作【尾差調整】按鈕
```

<img src="/assets/NLheb2FFfobqRHxCkf4j5ri9pqb.png" src-width="3192" src-height="1318" align="center"/>

```text
尾差處理功能，可以按子倉處理，也可以不分子倉處理
```

<img src="/assets/TmJsbPWj7o5AKXx9PCDjhdvdpjg.png" src-width="2110" src-height="456" align="center"/>

## 4. 提交執行

```text
前置作業：  已經通過 登記成功 的公司行動預告紀錄，同時已完成該預告相關業務節點（ 指令收集 等）


注意：  這步驟基本是最後一步： 執行經辦， 若檢查該公司行動預告應該處理的業務節點與系統節點後，就可提交執行經辦
```

<img src="/assets/PiJdbzwzuoxq6yxSRijjIzHWpPe.png" src-width="3404" src-height="1560" align="center"/>

```text
此時會出現提交審核的畫面，確認提交後就會進入 後續執行審核的節點
```

<img src="/assets/VFgxbSPOToC1HvxjlCRjMgMopRf.png" src-width="3422" src-height="1628" align="center"/>

```text
請根據資料數據，做出審核通過的操作或拒絕，當審核通過後就完成一個 公司行動的預告處理週期
```

<img src="/assets/WgiPb8GLUoQSddxl6m9j97Hxp6c.png" src-width="3414" src-height="1628" align="center"/>

```text
公司行動執行複核報表，增加了分組功能，可以協助操作者更方便地發現和 CCACC 的差異
```

<img src="/assets/XjdUb5DNroCg45x2WNcjZSX0ptd.png" src-width="2908" src-height="1558" align="center"/>

## 5. 執行復核

```text
操作說明：  推進狀態： 執行待審核  ，就可以查詢到 執行待審核的預告紀錄


執行審覈通過後，系統將正式執行公司行動。


执行公司行动时同时进行过户操作，該預告登記成功且客戶有持倉的狀況下，在‘執行’推進狀態時就系統會自動過戶操作（當股份過户后： 即支付 Script Fee）股份記錄將改為 Nominee


不是所有的公司行動都要過戶，合股、拆股和換股不需要過戶，過戶時將完成 Street->Nominee 的 操作
```

<img src="/assets/QK6FbbH8koe9zkxbsmRjKQCkpFd.png" src-width="3406" src-height="1548" align="center"/>

<img src="/assets/Kl85b29kCoxd0ExNZcujfuxfppc.png" src-width="3548" src-height="1806" align="center"/>

# 四、擴展功能

## 1. 手工新增公司行動

<b>路徑</b>

```text
公司行動>公司行動 > 左上角新增 功能鍵


系統提供兩種方式手工新增手動創建與快捷創建
```

<img src="/assets/W1i8bsNigoeN6Vxf5GSjYUHBpHh.png" src-width="3348" src-height="298" align="center"/>

<b>手動創建</b>

```text
適用場景


    美股及其它市場公司行動自動創建


    OB模式手工創建公司行動


操作


    自行輸入預告類型/標的/預告標號/除淨日或登記日期


     預告編號要自行填寫(不可與現行系統已有編號相同)


    美股的分股分紅填寫除淨日，系統會基於除淨日自動計算登記日（依然是基於登記日操作）；其它類型填寫登記日


    ![image.png](/assets/5851c84a5d9ad93c3759569e7b6c6880.png)


    提交後進一步在詳情頁編輯信息


    注意：不管第一步選擇的是登記日還是除淨日，在詳情頁僅需保證登記日的準確


    ![image.png](/assets/ad978ef7c8e4ddb622c6ed7aad0a82c3.png)
```

<b>快捷創建</b>

```text
適用場景


    是利用系統內已導入的 CCNAN05 檔內的預告編號， 讀取其對應資料來產生公司行動數據紀錄


    因爲持倉不準或者其它原因漏創建的，可以利用該功能


    僅支持EP模式下HK、SZ、SH市場


  操作


    根據02文件，輸入預告編號（A開頭的9位文本）
```

<img src="/assets/ANZObg4QWo32gQxN1ESjgDKPpWd.png" src-width="3548" src-height="1806" align="center"/>

## <b>2. 新增客戶明細</b>

适用場景

```text
登記後發現某客戶可以享受權益，但是不在登記明細中。如未及時同步轉倉
```

路徑

```text
公司行動-公司行動-詳情-新建
```

操作

```text
登記後立刻覈對持倉，發現缺客戶的操作新增客戶明細


點擊新增按鈕，輸入預告編號、托管商、持仓


持倉 = STREET（未登記過户股票） + NOMINEE（已登記過户股票）+ OWN
```

<img src="/assets/C2lKbMMCso6t6ox4lHUjAce4peh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/NA2XbnF9aoLcBExbYLQjVJrmp3Q.png" src-width="3548" src-height="1806" align="center"/>

注意事項

```text
若在客戶選擇階段所新增的，不會再發送通知 (APP等)


    未登記、开始指令收集、執行後不可新增
```

## <b>3. 作廢客戶明細</b>

适用場景

```text
登記後發現某客戶實際不需要享受某個公司行動權益
```

路徑

```text
公司行動-公司行動-詳情-作廢
```

操作

```text
選中明細後點擊【作廢】
```

<img src="/assets/E90cbRJVgow1jmxr4dsjEyOlpxc.png" src-width="3548" src-height="1806" align="center"/>

注意事項

```text
在登記後可以即操作作廢


若在選股選息等進入客戶選擇階段後再作廢容易引起客訴 


未登記、开始指令收集、執行後不可作废
```

## <b>4. 後臺行權</b>

<b>适用場景</b>

```text
在客戶選擇階段，代理客戶進行後台方案的設置
```

<b>路徑</b>

```text
公司行動-公司行動-詳情-客戶明細-詳情-行權
```

<b>操作</b>

```text
在行權界面輸入數量並提交
```

<img src="/assets/MJi1b94mjophNIxHlcojCWDupYf.png" src-width="3548" src-height="1806" align="center"/>

```text
**注意**


狀態爲指令收集中的公司行動纔可行權


BE類各方案的數量之和必須等於可行權數量（持倉數量）


除了超額認購各方案的匯總行權數量不能大於可行權數量（持仓数量）


要約和供股會同時校驗持倉
```

## <b>5. 編輯客戶的費用和明細</b>

<b>路徑</b>

```text
公司行動-公司行動-詳情-客戶明細-詳情-編輯
```

<b>注意</b>

```text
提交執行前的公司行動才支持費用和明細的編輯


輸入金額必須>=0；


最多支持兩位小數； 


編輯後的結果會受到重新登記、尾差調整、回填等影響； 


費用幣種和權益幣種不一致，會影響報表展示。


权益编辑时，幣種+轉入金額、轉入份額+新標的這兩個組合不能同時提交
```

<img src="/assets/Rp3Lb5JXBoZ1nSxRXJrjd7Q3pJc.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/YpHObWk9DoIG2bxMHtDjuOLVpoe.png" src-width="3548" src-height="1806" align="center"/>

## 6. 公司行動的終止/撤销

<b>終止</b>

```text
初始化狀態下的公司行動支持終止操作，終止後會徹底刪除該公司行動
```

<img src="/assets/S9R6bitZZoXk2SxEdxsjT9iHpTc.png" src-width="3548" src-height="1806" align="center"/>

<b>撤銷</b>

```text
登記後的公司行動支持撤銷，撤銷的公司行動系統將保存操作記錄
```

<b>注意事項</b>

```text
執行後撤銷時，如當日未完成日終，則爲無痕撤銷；若已經完成日終的，則系統將產生衝正流水，原流水不刪除


執行後撤銷僅限於撤銷當日或者上一日的公司行動


供股、要約進入指令收集後，暫不支持撤銷，可通過撤銷客戶行權進行操作
```

<img src="/assets/EPztbiyCZoC2F4xBKWnjrgmrpyf.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/XqFrbHc6Oo0iSBxxdIcj1G0wp0b.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/RdYub6bqxoQlyfxyTbEjuEuGppe.png" src-width="3548" src-height="1806" align="center"/>

## 7. 公司行動郵件消息模板

- 公司行動類型
    - 模版

## 供股類

## 要約類

## 拆合股、換股

## ADR 執行

## 紅利、紅股

## 期權公司行動

## 股東大會

