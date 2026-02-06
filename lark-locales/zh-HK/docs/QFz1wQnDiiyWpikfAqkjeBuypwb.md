---
title: 系統介紹
slug: QFz1wQnDiiyWpikfAqkjeBuypwb
sidebar_position: 2
---


# 系統介紹

[Document original - 原始文档](https://longbridge.larkenterprise.com/docx/FPELdtBfPoYO8MxuGm2cRZJunDc)

Creator - jian.gao@longbridge-inc.com

---

## 概述

Whale 會計系統提供了一套可以自動獲取數據源，按照預設的科目及分錄規則進行自動記帳，進而完成帳實核對，主要包含了科目設置、分錄規則設置、合併規則設置、會計分錄、科目餘額、科目明細帳、記帳數據源等功能

## 会计中台流程说明

<img src="/assets/AE0Ub4fVnoTilPxpe18joD6ipdf.jpeg" src-width="874" src-height="553" align="center"/>

## 參數設置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數設置 &gt; 記賬參數</p>
</div>

證券機構在使用會計中臺之前需要先進行記賬參數設置，包括科目屬性、會計科目、分錄規則、資金類型、合併規則以及業務類型等設置。

#### 科目屬性

<b>概要</b>

在使用會計中臺前，券商需要配置會計屬性。

<img src="/assets/GXhGbQOyuocSjExzlnojAukLpVg.jpeg" src-width="3814" src-height="1598" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求自定義會計科目屬性。
- 編輯：對已經添加的科目屬性可以進行人工編輯。
- 刪除：對已經添加的科目屬性可以進行刪除。

<b>專有名詞解釋</b>

- 科目屬性：一般來說，會計科目按其經濟內容來分類，可以劃分爲資產類、負債類、所有者權益類、成本費用類科目及損益類。但由於經濟內容不同，會計科目所包含的內容就不同，因此，不同的科目就需要有不同的屬性，來描述其所代表的經濟內容。
- 餘額方向：指該科目屬性下相應科目的借方發生額和貸方發生額抵減後餘額對應的方向，可選擇的枚舉值爲：借方、貸方和共同（是指科目屬性下不同的科目餘額可以單獨指定爲借方或者貸方）。比如：定義科目屬性的餘額方向爲借方，則該屬性下所有科目的餘額會留在借方，如果該科目的借方發生額大於貸方發生額，科目餘額爲正數，反之則爲負數。

<b>操作步驟</b>

步驟一：在使用會計中臺之前，要完成記賬參數的配置，對於配置的第一步是新增會計科目屬性

<img src="/assets/W2obbdXfJoiBlCxZ72YjcIAVpMV.jpeg" src-width="3407" src-height="1427" align="center"/>

步驟二：對於相應科目屬性下未綁定會計科目，則可以進入後臺進行修改

<img src="/assets/AQTjbJ3bsoSv3cxOIrljsJHvpRd.jpeg" src-width="3300" src-height="1428" align="center"/>

- 📢：如果當前的科目屬性已經綁定了會計科目，則無法進行修改，如果修改之後系統會報錯提示如下：

<img src="/assets/G3lObG8ZVoQsHJx4c9bj1BOjpEg.jpeg" src-width="360" src-height="106" align="center"/>

步驟三：對於相應科目屬性下未綁定會計科目，則可以進入後臺進行刪除

<img src="/assets/DBXNbMWTIoF06hx8bmXj0le2pCb.jpeg" src-width="3288" src-height="1034" align="center"/>

- 📢：如果當前的科目屬性已經綁定了會計科目，則無法進行刪除

<img src="/assets/Ghg7bxwmOoMWixxwhbJj0aQWpRc.jpeg" src-width="368" src-height="104" align="center"/>

#### 會計科目

<b>概要</b>

在配置科目屬性後，需要根據券商公司的要求配置會計科目。

<img src="/assets/FP2FbynJ4oD6yYxB1nijyng6prc.jpeg" src-width="3820" src-height="1622" align="center"/>

<b>操作按鈕說明</b>

- 批量導入：如果券商公司需要大量添加會計科目，可以選擇批量導入，大批量新增會計科目。
- 新建：可根據券商公司需求单笔自定義會計科目。
- 編輯：對已經添加的会计科目可以進行人工編輯。
- 刪除：對已經添加的会计科目可以進行刪除。

<b>專有名詞解釋</b>

- 科目編碼：系統會根據每個科目分配一個唯一的編碼。
- 外部科目編碼：由於券商公司接入的財務系統不一樣，在券商公司財務系統中定義的科目名稱和科目編碼和會計中臺也不一樣，爲了會計中臺最終可以按照券商公司財務系統的要求導出財務報表，所以券商公司需要在會計科目中定義對應財務軟件對應的科目編碼，稱之爲外部科目編碼。
- 會計科目：是指按照經濟業務的內容和經濟管理的要求，對會計要素的具體內容進行分類覈算的會計科目所構成的集合。會計科目按其所提供信息的詳細程度及其統馭關係不同，又分爲總分類科目和明細分類科目，總分類科目可以對應會計中臺的一級科目，明細分類科目對應會計中臺二級或三級科目。

      爲了會計中臺系統搭建統一，在會計中臺進行分錄記賬的明細科目統一爲三級科目。

<b>操作步驟</b>

步驟一：科目屬性配置完畢後，需要在對應科目屬性下新增會計科目，由於我們系統支持三級科目，所以操作人員需要在後臺逐級添加，可以根據自身科目數量選擇批量還是單筆新建。

- 逐一科目新建
    - 在後臺先新建一級科目
    <img src="/assets/ByYpb9SKMoOsuSxcAMSj7vcBpHh.jpeg" src-width="3415" src-height="1500" align="center"/>
    - 在一級科目基礎上新建對應的二級科目
    <img src="/assets/RRtfb4uWdo6LYNxd4tVjNQuipbf.jpeg" src-width="3421" src-height="1539" align="center"/>
    - 在二級科目基礎上新建對應的三級科目
    <img src="/assets/Xs19bBEwao1SdOxUb7ijVPN8pzd.jpeg" src-width="3413" src-height="1549" align="center"/>
    - 批量導入：通過後臺提供的模板整理好需要導入的會計科目，然後通過後臺完成文件導入
    <img src="/assets/Fc2ibekx2oGvTBx1hHFjpgPepJf.jpeg" src-width="3358" src-height="1480" align="center"/>
    <img src="/assets/NrGHbVk2ToQauGxPCnojePgtp1i.jpeg" src-width="2225" src-height="666" align="center"/>

步驟二：對於已經添加的會計科目，可以進入後臺進行修改
- 📢：對於編輯後的會計科目，會應用於後續的會計分錄，對於歷史已經生成的會計分錄如需更新，可以在「證券後臺-會計中臺-會計分錄-明細」進行重跑。
    <img src="/assets/O1wrbdJZfohx5ex6r0ajYqpcpje.jpeg" src-width="3308" src-height="1478" align="center"/>

步驟三：對於未配置分錄規則或者未進行會計分錄記賬的科目，可以進入後臺進行刪除，需要先刪除所有的三級科目，然後刪除對應的二級科目，最後才能刪除相應的一級科目
<img src="/assets/ZUGEbwWZqonsAgx8qq8jE288pQc.jpeg" src-width="3284" src-height="882" align="center"/>
- 📢：如果当前的科目已经配置了分录规则或者已记账，则无法进行删除

#### 分錄規則

<b>概要</b>

形成分錄之前需要根據券商公司實際業務需要配置對應的分錄規則。

<img src="/assets/FSKObKyWtobIPrxnmzjjHH16pkf.jpeg" src-width="2870" src-height="1226" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求新增各業務的分錄規則。
- 編輯：對已經添加的分录规则可以進行人工編輯。
- 複製：可以將當前分錄規則進行復制，方便新增類似的分錄規則。
- 刪除：對已經添加的分录规则可以進行刪除。

<b>專有名詞解釋</b>

- 分錄規則：爲了保證系統在獲取數據源後能夠自動形成會計分錄，券商公司需要在後臺進行規則配置，即數據源和最終輸出分錄的關聯關係。
- 支付流水：是指券商公司記錄客戶交易變動的明細表，包括出金、入金、股票買入、股票賣出、貨幣兌換等。
- 客戶收費賬單：由於支付流水中客戶發生的各種交易費用，比如股票交易費用是佣金、平臺費和各種第三方收費合計，無法滿足財務入賬需求，需要解析客戶交易的收費明細，作爲會計記賬的數據源。
- 銀行賬單：是指券商公司銀行賬戶所有實際資金變動記錄，按照各種標籤進行打標後，可以作爲資金流記賬的數據源。

<b>操作步驟</b>

步驟一：增加了券商公司的會計科目之後，可以根據數據源的業務類型新增分錄規則，目前會計中臺可支持的數據源包括：支付流水、銀行賬單、客戶收費賬單、CCASS 賬單、新股賬單、代理商收費、業務賬單統計、渠道匯兌單等。在此會分別介紹支付流水、銀行賬單、客戶收費賬單分錄規則如何配置，其他數據源操作可同步參考。

<img src="/assets/EoC9b7F4BovPOsxvcwbjCRgRpLc.jpeg" src-width="3437" src-height="906" align="center"/>

- “支付流水”如何添加分錄規則

<img src="/assets/GEM1bpwJyoznH9xneYTjDDd5pbf.jpeg" src-width="2736" src-height="4936" align="center"/>

- “客戶收費賬單”如何添加分錄規則

<img src="/assets/UE5dbEBwQobFLzxcLmZjCRWppMc.jpeg" src-width="2664" src-height="3890" align="center"/>

- “銀行賬單”如何添加分錄規則

<img src="/assets/VEiibCK5gont4HxOfIIjXqmapje.jpeg" src-width="2646" src-height="3740" align="center"/>

步驟二：對於已配置的分錄規則可以後臺進行修改。
- 📢：對於編輯後的分錄規則，會應用於後續的會計分錄，對於歷史已經生成的會計分錄如需更新，可以在「證券後臺-會計中臺-會計分錄-明細」進行重跑。

<img src="/assets/Hv1Xb6u5poWrNTxbXmkj2IaTpYe.jpeg" src-width="3278" src-height="1282" align="center"/>

<img src="/assets/ZELubLmlwoJTeHxlEJRjTUzhpry.jpeg" src-width="2492" src-height="4530" align="center"/>

步驟三：對於已配置的分錄規則可以後臺進行刪除
- 📢：當前分錄規則刪除後，只會對後續新的分錄有影響，歷史已生成的分錄只有重跑之後纔會同步更新。

<img src="/assets/DhwSbwc5mo5ApqxEO6GjVzAMpOe.jpeg" src-width="3276" src-height="1304" align="center"/>

步驟四：如果需要新增類似業務的分錄規則，可以使用後臺複製功能

<img src="/assets/ES6YbOmdyocL81xvlxQjL4EQpwf.jpeg" src-width="3252" src-height="1246" align="center"/>

#### 資金類型

<b>概要</b>

對於券商公司獲取的銀行賬單可以自定義資金類型。

<img src="/assets/Iipkb6aAvoVU9DxkcBGjn18Apwc.jpeg" src-width="3282" src-height="596" align="center"/>

<img src="/assets/AKS3bLCYXoE5WEx5PSqjBpCkp3r.jpeg" src-width="3314" src-height="1236" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司銀行賬單新建不同資金類型標籤。
- 編輯：對於已添加的資金類型進行多語言編輯
- 刪除：對已經添加的资金类型可以進行刪除。

<b>專有名詞解釋</b>

- 資金類型：是指銀行賬單業務分類的名稱

<b>操作步驟</b>

步驟一：如需要新增資金類型，可以根據需求在後臺添加

<img src="/assets/F0RZbXQQUow1sDxgXBqjsweJple.jpeg" src-width="3248" src-height="834" align="center"/>

步驟二：如果未被使用的資金類型需要刪除，可以後臺操作

<img src="/assets/MtYWbH0npoMyq3xRxRJjl4ZVpqf.jpeg" src-width="3278" src-height="724" align="center"/>

📢：如果當前的資金類型已經被銀行賬單使用，則無法進行刪除

<img src="/assets/HA2lbmXw4o6wgIxDLtvjJvL7pEf.jpeg" src-width="362" src-height="114" align="center"/>

#### 合併規則

<b>概要</b>

如果券商公司導出的財務報表需要合併，則可以自定義合併規則。

<img src="/assets/UA2ib3cVfoljzIxfbEIjcPBop0d.jpeg" src-width="3276" src-height="780" align="center"/>

<img src="/assets/Chj1bisC8oYXVUxumYCjjiFtplb.jpeg" src-width="1846" src-height="735" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求新增報表的合併規則。
- 編輯：對已經添加的合併規則可以進行人工編輯。
- 複製：通過複製已有的合併規則進行快速新建。
- 刪除：對已經添加的合併規則可以進行刪除。

<b>專有名詞解釋</b>

- 合併規則：爲了滿足不同券商公司對於記賬顆粒度的訴求，證券後臺可支持合併規則配置，兩種合併方式爲：借貸各自合併、借貸抵減合併。借貸各自合併是指借方或者貸方按照本身的科目進行分類彙總，借貸抵減合併是指可以按照設定的相同科目或者不同科目將借貸金額抵減之後合併。

<b>操作步驟</b>

步驟一：如需要新增合併規則，可以根據需求在後臺添加。

<img src="/assets/XOtpbP7F1oBSw4x7TkZjQgchpyg.jpeg" src-width="2396" src-height="4954" align="center"/>

- 📢：如果在新建合併規則選擇的業務類型都未配置分錄規則，則無法新建

<img src="/assets/Tf0Wb3I7so1LUrxus21jBHNVpWg.jpeg" src-width="2680" src-height="3140" align="center"/>

步驟二：對於已配置的合併規則可以後臺進行修改

<img src="/assets/H4slb5ZUxoVcE5xc9R6j4nsEpqg.jpeg" src-width="3258" src-height="780" align="center"/>

- 📢：對於編輯後的合併規則，會應用於後續的合併分錄，對於歷史已經生成的合併分錄如需更新，可以在「證券後臺-會計中臺-會計分錄-合併」進行重跑。

步驟三：如果已配置的合併規則可以後臺刪除

<img src="/assets/YrPhbmyYfoFxzxx6yBxjWQPJpsd.jpeg" src-width="3256" src-height="618" align="center"/>

- 📢：當前合併規則刪除後，只會對後續新的分錄有影響，歷史已生成的合併分錄只有重跑之後纔會同步更新。

#### 業務類型

<b>概要</b>

業務類型是指區分記賬數據源各種業務的標籤，該功能可提供客戶按照記賬與否的要求進行個性化配置

<img src="/assets/SvJTbxWKuoeVlvxKSvxjQMJ5pMg.jpeg" src-width="3772" src-height="1622" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求配置業務類型。
- 編輯：對已經添加的業務類型可以進行人工編輯。

<b>專有名詞解釋</b>

- 業務類型：是指區分記賬數據源各種業務的標籤

<b>操作步驟</b>

步驟一：如需要新增業務類型，可以根據需求在後臺添加。

<img src="/assets/FF5HbnSCSoTS4KxOOLrjgVFWpcc.jpeg" src-width="3298" src-height="1410" align="center"/>

步驟二：對於已配置的業務類型可以後臺進行修改

<img src="/assets/UvXcbueQGobtAExGSlrjx2zOpZe.jpeg" src-width="3266" src-height="1360" align="center"/>

- 📢：對於編輯後的業務類型，會應用於後續的分錄，對於歷史已經生成的分錄如需更新，可以在「證券後臺-會計中臺-會計分錄-明細」進行重跑。

## 會計分錄

### 適用場景

在證券系統發生出、入金或者交易之後，系統就可以自動獲取支付流水、客戶收費賬單或者其他分錄數據源並根據客戶初始配置的記賬參數自動形成明細和合並的會計分錄

### 前置條件 

擁有會計中台的菜單權限，並且已經設定了會計工作中涉及的參數設置

### 會計分錄列表

執行菜單：证券后台&gt;會計中台&gt;會計分錄

此功能可以查詢或者維護會計分錄，其中明細的會計分錄是形成合並的依據，合併的會計分錄是導出外部財務系統對應財務報表的依據

<img src="/assets/MADhbn6Fwo5O3RxXUbIjxTDIpUb.jpeg" src-width="3794" src-height="922" align="center"/>

<img src="/assets/XeBdbRSQ6o4przxApbVj92rPp2g.jpeg" src-width="3282" src-height="1646" align="center"/>

首先，系統是支持根據不同數據源配置分錄規則，可以自動地對數據源產生會計分錄，若某些數據源無法自動配置，此功能提供批次導入與手工錄入方式：

如果自動產生分錄後，作業提供新增【編輯】功能，可以修改產生分錄紀錄，同時紀錄新增支付流水新增支票號欄位展示

<img src="/assets/X89Cb3yAZonKe5xqN9cjf84VpIf.jpeg" src-width="2658" src-height="1412" align="center"/>

<img src="/assets/VjXgba147oqu9RxJbK6js415pYf.jpeg" src-width="3270" src-height="2754" align="center"/>

如果需要手工錄入的分錄很少，可以選擇【手動錄入】

<img src="/assets/T34AbUGaRo5S2Sx9bd9jRF2apJe.jpeg" src-width="2502" src-height="1330" align="center"/>

<img src="/assets/BlEAbyeoloTAjCxLpFcjicFkpgf.jpeg" src-width="3290" src-height="2782" align="center"/>

也可以選擇【批量導入】，先行下載範本之後，根據批量範本進行編制分錄並導入到系統中

<img src="/assets/YQSVbl3kBoQBb0xTryEjButdpMd.jpeg" src-width="3246" src-height="1534" align="center"/>

在記錄右側操作區的【刪除】鍵， 也可進行刪除此會計分錄

<img src="/assets/EbFYbaK5poo2aQxI58FjKqjKpUd.jpeg" src-width="3364" src-height="1474" align="center"/>

如果某個帳務日期對應的數據源獲取不完整，可以選擇對應日期的數據源進行【重跑】，系統會更新數據源產生最新會計分錄資料

<img src="/assets/MKeFbvxfRotbh6xI7lYjOanPpGe.jpeg" src-width="3362" src-height="1396" align="center"/>

如果系統生成的會計分錄已經核對無誤，手工可以點選【匯總】生成科目餘額匯總表

<img src="/assets/BRvsbR38MotVuRxclUmjG90sprd.jpeg" src-width="3370" src-height="1452" align="center"/>

會計分錄中新增【報表導出】按鈕，方便按照財務軟件格式要求進行報表導出

<img src="/assets/OxCkbJIHdoUtQRxlit5jFTrVpjv.jpeg" src-width="3400" src-height="1842" align="center"/>

提供合併會計分錄查詢功能,合併會計分錄時，系統會按賬帳日期獲取匯率

<img src="/assets/BpzFb71qAocK0Qx68YQj74RJpMe.jpeg" src-width="3348" src-height="1418" align="center"/>

如果对应的合并规则有更新，可以选择对应日期的合并分录进行重跑

<img src="/assets/VWp5bFNXfoNc7RxtoWvj0vRkp5f.jpeg" src-width="3294" src-height="1692" align="center"/>

## 科目餘額

### 適用場景

根據會計分錄記錄的數據，以科目的形式查看餘額

### 前置條件 

擁有會計中台的菜單權限，並且會計分錄模組已經存在數據

### 科目餘額列表

執行菜單：會計中台&gt;科目餘額

系統每日會根據科目明細帳按照帳務日期進行匯總，匯總形成科目餘額匯總表

<img src="/assets/Zz28b65cBo43APxwUs2jnONWpUh.jpeg" src-width="3188" src-height="1460" align="center"/>

## 科目明細帳

### 適用場景

根據會計分錄記錄的數據，以科目的形式查看明細帳

### 前置條件 

擁有會計中台的菜單權限，並且會計分錄模組已經存在數據

### 科目明細帳列表

菜單：會計中台&gt;會計科目明細帳

對於系統按照科目展示的明細帳，可以在此功能進行查詢

<img src="/assets/Fg4dbh3ZKomFQkxWqUwj14xxpdc.jpeg" src-width="3218" src-height="1506" align="center"/>

## 銀行餘額

### 適用場景 

使用者需要根據銀行提供的流水與系統存在的自己資料進行多維度比對

### 前置條件 

銀行流水與後台資料均已生成

### 维度展示

帳單核對

執行菜單：會計中台&gt;銀行餘額&gt;帳單核對 Tab 頁籤

根據銀行賬單歷史發生額計算的結果與銀行歷史餘額進行核對，進而保證銀行賬單明細的準確性和完整性。

<img src="/assets/Fv2Bb5sY1oQ0ysxlkWnj4Sgqpig.jpeg" src-width="3234" src-height="1542" align="center"/>

## 歷史餘額

執行菜單：會計中台&gt;銀行餘額&gt;歷史餘額 Tab 頁籤

是指券商公司所有銀行帳戶某一帳務日期的銀行實際餘額。

可以選擇批次導入

<img src="/assets/XS8Cb4SliohbbVxY5vJjLi2Ephf.jpeg" src-width="3238" src-height="1524" align="center"/>

<img src="/assets/Et1Mb2aahovr4uxkdh5jLhf2pog.jpeg" src-width="3242" src-height="1234" align="center"/>

## 實時餘額

執行菜單：會計中台&gt;銀行餘額&gt;實時餘額 Tab 頁籤

是指券商公司已對接 API 的銀行賬戶的銀行實時餘額。

<img src="/assets/Af2kbFPn1okOklxhE3mjDSHEp5f.jpeg" src-width="3252" src-height="1242" align="center"/>

## 記帳數據源

### 適用場景 

用戶在記帳時需依照各類明細會計資料進行分類整理，並根據整理出的異常資料進行單獨處理

### 前置條件 

支付流水、客戶收費帳單、銀行流水、CCASS 資料等均已準備就緒

### 異常數據源

執行菜單：會計中台&gt;記帳數據源&gt;異常數據源 Tab 頁籤

系統對於無法自動形成分錄的數據源會視作為異常數據，可以在此功能進行查詢

<img src="/assets/GNAqb92H6oDg6fxYpcCjqCuSpUe.jpeg" src-width="3236" src-height="1110" align="center"/>

對於異常數據源，可以在記錄列表通過點擊「異常數據源單號」，可以跳轉到具體數據源

<img src="/assets/SqcHb26Z2oqMrPxuTURjGJpXpFb.jpeg" src-width="3414" src-height="1210" align="center"/>

### 客戶收費帳單

執行菜單：會計中台&gt;記帳數據源&gt;客戶收費帳單 Tab 頁籤

由於支付流水中用戶發生的各種交易費用，比如股票交易是匯總數，類似於佣金、平台費和各種第三方收費合計，無法滿足財務入帳需求，需要解析用戶交易收費明細，作為會計記賬的數據源。

客戶收費帳單對於股票交易類型可以更細分配置，可以支持單獨區分出暗盤，並且暗盤交易可以單獨配置分錄規則並形成會計分錄

記帳數據源“客戶收費帳單”增加【帳務日期】，並用於記帳分錄帳務日期取值

<img src="/assets/UQleb97r6o8aESxYoQEjsUv7pYf.jpeg" src-width="3206" src-height="1502" align="center"/>

如果對應客戶收費賬單不需要記賬，可以進入後臺將記錄進行刪除

<img src="/assets/CPrJbIMUYo5PYfx8LV9jSZo5pLg.jpeg" src-width="3286" src-height="712" align="center"/>

如果某一個賬務日期的的客戶收費賬單不準確，可以在後臺進行重跑

<img src="/assets/A7RzbbmkAo6VrVxCTi6jfLXspWg.jpeg" src-width="3302" src-height="1110" align="center"/>

### 支付流水

執行菜單：會計中台&gt;記帳數據源&gt;支付流水 Tab 頁籤

是指券商公司記錄用戶交易變動明細表，會計中台根據轉賬、出賬和入賬進行規範獲取，作為會計分錄中信息流記賬的數據。

<img src="/assets/IV9nb6UOtoMD5XxhtvVjPkIZptd.jpeg" src-width="3230" src-height="1502" align="center"/>

如果對應支付流水不需要記賬，可以進入後臺將記錄進行刪除

<img src="/assets/Z33bbTuSmobq8LxYldcj8WRopoc.jpeg" src-width="3258" src-height="818" align="center"/>

如果某一個賬務日期的的支付流水不準確，可以在後臺進行重跑

<img src="/assets/EbrlbGSQVoCg8NxoMQFjfEK0p7d.jpeg" src-width="3282" src-height="1132" align="center"/>

### CCASS 賬單

執行菜單：會計中台&gt;記帳數據源&gt;CCASS 賬單Tab 頁籤

增加 CCASS 文件解析，此 CCASS 數據源是相關文件導入後，系統自動根據配置完成會計分錄處理，可在此 Tab 查詢記錄或刪除已轉入的數據源分錄

<img src="/assets/Z3lGbcbzEos4Ysxjv85jgxH5prh.jpeg" src-width="3240" src-height="1478" align="center"/>

### 新股帳單

執行菜單：會計中台&gt;記帳數據源&gt;新股帳單Tab 頁籤

新增新股帳單

<img src="/assets/QDczbXHXGoNzCfx1Z1SjmQiMppg.jpeg" src-width="3262" src-height="1120" align="center"/>

### 代理商收費

執行菜單：會計中台&gt;記帳數據源&gt;代理商收費Tab 頁籤

爲獲取機構合約的相關費用，滿足券商公司進行上手費用記賬的訴求，新增代理商收費作爲會計記賬的數據源

<img src="/assets/PxKMbhg5VoZqHCxewXrjhfqxpEd.jpeg" src-width="3288" src-height="912" align="center"/>

### 銀行賬單

執行菜單：款項管理&gt;銀行賬單&gt;銀行賬單 Tab 頁籤

券商公司銀行賬戶所有實際資金變動記錄，按照各種標籤進行打標後，可以作爲資金流記賬的數據源。

<img src="/assets/UwcrbE5DVoxfLLxHgeFjshyZpmd.jpeg" src-width="3794" src-height="1002" align="center"/>

如果銀行賬單資金類型未知，可以人工後臺進行操作修改

<img src="/assets/K9ETbF2EQo14wYxHldRjj0gOpyg.jpeg" src-width="3376" src-height="1822" align="center"/>

<img src="/assets/VHsjb4ZawoeXVux0EQ8jgXy1pEc.jpeg" src-width="3376" src-height="1816" align="center"/>

如果銀行賬單有缺失，可以後臺進行文件導入

<img src="/assets/QqODbP4XNokzryx8X5wjhKQUp5g.jpeg" src-width="3260" src-height="826" align="center"/>

如果銀行賬單記錄有問題，可以後臺進行刪除

<img src="/assets/FJ3nbowoAo2AFvxWHsajDaErpLg.jpeg" src-width="3260" src-height="826" align="center"/>

如果入金賬單和出金賬單有更新，可以在後臺進行重跑

<img src="/assets/YXSFblGh5oAqaqxYJijjWHdHp9v.jpeg" src-width="3260" src-height="826" align="center"/>

## 入金在途

### 適用場景 

作為追蹤客戶在入金未完成狀態時的記錄參考

### 前置條件 

入金流程未完成

執行菜單：會計中台&gt;入金在途&gt;明細

提供在途資金的匯總記錄查詢

<img src="/assets/NNlBbyc8joB7DCxqXDYjZCMzpAc.jpeg" src-width="3282" src-height="1690" align="center"/>

執行菜單：會計中台 &gt; 入金在途&gt;彙總覈對

提供在途資金與銀行賬單彙總覈對結果查詢

<img src="/assets/ETotbWvPqoGJGwxLajUjUI6lp3d.jpeg" src-width="3242" src-height="540" align="center"/>

