---
title: 系統介紹
slug: UepcwAVqJiP0t6kjBxHcsoMWn5c
sidebar_position: 2
---


# 系統介紹

# 概述

資產賬戶目前主要包含兩大部分：<b>資產賬本</b>和<b>資產基礎管理能力</b>。

資產賬本：詳細記錄所有客戶業務場景資產變更的流水記錄。賬本包含但不僅限於以下信息：
- 資產類型：現金、股票、期權、債券、基金、OTC 其他
- 賬戶：業務賬戶、結算賬戶、過渡戶
- 資產變更類型：出賬、入賬、凍結、解凍
- 業務碼：該業務場景的唯一編碼
- 變更資產金額/持倉數量

資產賬本提供的記賬能力可使任何資產發生變動後，不同賬戶的流水都能夠清晰準確，保障上下遊的業務資產對賬。

資產基礎管理能力：資產還提供了調賬、資產凍結/解凍、業務碼管理的基礎能力，輔助更加便捷地管理資產。

<b>賬戶類別</b>

<table header_column="1" header_row="1">
<colgroup>
<col width="124"/>
<col width="116"/>
<col width="485"/>
</colgroup>
<thead>
<tr><th><p>術語 / 中文</p></th><th><p>術語 / 英文</p></th><th><p>說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>業務賬戶</p></td><td><p>BUSINESS</p></td><td><p><b>可用不可提</b><br/>一般的交易發生，都會先對業務賬戶做處理，業務賬戶的現金可用不可提</p></td></tr>
<tr><td><p>結算賬戶</p></td><td><p>SETTLEMENT</p></td><td><p><b>可用可提</b><br/>清結算交收後，會把業務賬戶的錢或券，交收（結轉）到結算賬戶</p></td></tr>
<tr><td><p>外部過渡戶</p></td><td><p>EXTERNAL</p></td><td><p><b>不可用不可提</b><br/>部分業務實際上遊已扣款，但沒有資產加進來，例如 IPO 先扣款，但沒有持倉，業務上為了使得用戶總資產不變，會把扣掉的錢額外加在外部過渡戶上</p></td></tr>
<tr><td><p>內部過渡戶</p></td><td><p>INTERNAL</p></td><td><p>暗盤買入時，先扣 INTERNAL 賬戶的錢，暗盤買入結轉後，INTERNAL 賬戶的錢再加回來，再扣除 business 的錢</p></td></tr>
<tr><td><p>結算過渡戶</p></td><td><p>SETTLEMENT_INTERNAL</p></td><td><p>中臺的結算過渡戶，出掉一筆錢後會影響可用，在部分業務影響需要只影響可提（換匯、余額通申購中間狀態），會從結算過渡戶扣錢</p></td></tr>
<tr><td><p>換匯過渡戶</p></td><td><p>EXCHANGE</p></td><td><p>部分業務（換匯、余額通申購中間狀態），從結算過渡戶扣錢之後，需要在換匯過渡戶加錢，加完之後用戶總資產不變</p></td></tr>
</tbody>
</table>

<b>資產變更類型</b>

<table header_column="1" header_row="1">
<colgroup>
<col width="124"/>
<col width="601"/>
</colgroup>
<thead>
<tr><th><p><b>術語 / 中文</b></p></th><th><p><b>说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>凍結</p></td><td><p>業務提交後，成功前，一般需要先凍結現金/證券，使得這部分資產不可被重復使用</p></td></tr>
<tr><td><p>解凍</p></td><td><p>業務結束後，會解凍</p></td></tr>
<tr><td><p>出賬</p></td><td><p>相當於對資產進行扣減</p></td></tr>
<tr><td><p>入賬</p></td><td><p>相當於資產進行增加</p></td></tr>
</tbody>
</table>

## 資產架構

<img src="/assets/Dr8SbtkXeoxzkFxO5XSchH4fnGy.png" src-width="2438" src-height="1422" align="center"/>

# 操作說明

## 賬戶

### 資產總覽

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>資產賬戶&gt; 賬戶 &gt; 資產總覽 </p>
</div>

<b>菜單功能介紹</b>：查詢所有客戶整體資產情況，含現金和持倉。主要用於統計公司維度資產。

<b>操作說明</b>：

頁面查詢結果如下圖：

<img src="/assets/CH05bnAhCoEGfUxQXJxc9R3snug.png" src-width="3324" src-height="3386" align="center"/>

<b>頁面說明</b>

- 進入頁面查看的即當前公司下所有客戶的總資產
- 支持按客戶類型、賬戶類型、經紀人篩選查詢，同時也可切換幣種統計數據
- 模塊：
    - 總資產：按資產類型和資產幣種分別統計資產佔比
    - 賬面總現金：分幣種展示已結算、待交收現金詳情
    - 持倉：按持倉類型分 Tab 頁展示每隻證券的已結算、待交收數量及市值詳情

### 1.2 賬戶查詢

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>資產賬戶&gt; 賬戶 &gt; 賬戶查詢 </p>
</div>

<b>菜單功能介紹</b>：支持按客戶各維度來查詢其資產總覽及賬戶相關詳情信息，含客戶資料、銀行卡信息、計費明細、出入金和轉倉流水。

<b>操作說明</b>：

1. 開始查詢：選擇賬戶維度填入對應信息即可返回客戶基本信息

<img src="/assets/A7HibUnVrolrjLxlU51cn7cjnue.png" src-width="2570" src-height="988" align="center"/>

1. 賬戶查詢頁面會展示「最近瀏覽」，支持快速點擊查看結果
2. 查詢結果：側邊欄展示查詢結果，默認展示資產總覽頁，可切換頁面查看客戶資料、銀行卡信息、計費明細、出入金和磚倉流水。側邊欄信息同快捷查詢結果

<img src="/assets/WuXFbXkTXorIRCx8X83cEHknnsh.png" src-width="3304" src-height="1666" align="center"/>

賬戶快捷查詢入口：

<img src="/assets/Y2F9bGROOo9Cd3xwzPLcTVV6nPb.png" src-width="3318" src-height="1304" align="center"/>

1. 賬戶查詢後在賬戶詳情的持倉明細下可以針對具體標的操作【修改成本】；同時也可在【詳情】查看成本快照和流水

<img src="/assets/Qr77bdFsjousu6xwqzXcnf18ngh.png" src-width="3341" src-height="1720" align="center"/>

<img src="/assets/QVwLbBdgvomgTCxPVdFcYZ87n5f.png" src-width="3236" src-height="1652" align="center"/>

<img src="/assets/WFgCbxW8yoSEvzxADlHcT6Rfnlc.png" src-width="3238" src-height="1570" align="center"/>

<b>成本價說明</b>

- 攤薄成本：指某股票持有期內的保本價格（不包含佣金及費用），用戶在該值賣出可實現盈虧平衡。計算了持有期內每次交易的盈虧（包含現金派息等情况），既考慮買入，也考慮賣出的變化。從建倉開始計算，一旦清倉後成本就清空，再次建倉會重新開始計算。
- 平均買進成本：即用戶買入單只股票後，成本價為買入股票的買入金額（不包含佣金及費用）除以持股股數的數值，持股期間不考慮賣出股票的盈虧，規避後續賣出實現盈虧對買入成本的影響。從建倉開始計算，一旦清倉後成本就清空，再次建倉會重新開始計算。

### 1.3 賬戶餘額

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶 &gt; 賬戶 &gt; 餘額查詢</p>
</div>

<b>菜單功能介紹</b>：該菜單支持查詢客戶各資產餘額情況，並支持不同幣種及賬戶類型查詢。

<b>操作說明</b>：

1. 選擇需要查詢的資產類型，分現金、股票、基金、期權、債券、OTC 其他、虛擬資產（下圖以「現金」為例）；每個頁面支持篩選相關緯度進行查詢

<img src="/assets/TJMubSHtIo8hRgxhEUac7Wr7njd.png" src-width="3292" src-height="784" align="center"/>

1. 若客戶存在凍結資金，可以點擊金額打開二級頁面查看凍結詳情；其他資產類型無該入口

<img src="/assets/ZTkObeTAio9X8px7bgKc27q3nRg.png" src-width="3290" src-height="696" align="center"/>

凍結詳情頁：

<img src="/assets/VInib4xT8owYDlxnujccAQEbnKQ.png" src-width="3240" src-height="406" align="center"/>

1. 若針對某些客戶查詢現金餘額場景，可在右上角提供方便的【手工提現】操作入口

<img src="/assets/W1yZbEHFdoAcBKxSOF5cg2ednIb.png" src-width="3280" src-height="686" align="center"/>

1. 同時，列表頁的操作【詳情】可快速跳轉查看對應賬戶流水明細

<img src="/assets/BOU1bmxxfoGbYtxeIXxcczXXn9g.png" src-width="3276" src-height="974" align="center"/>

賬戶明細頁：

<img src="/assets/SGn4byajgoShmuxSUMCcigALnJh.png" src-width="3096" src-height="1502" align="center"/>

### 1.4 賬戶明細

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶 &gt; 賬戶 &gt; 賬戶明細</p>
</div>

<b>菜單功能介紹</b>：查詢賬戶發生的資產流水明細，並支持分幣種、業務碼等多維度篩選查詢。

<b>操作說明</b>：

1. 選擇需要查詢的資產類型，分現金、股票、基金、期權、債券、OTC 其他、虛擬資產（下圖以「現金」為例）；每個頁面支持篩選相關緯度進行查詢

<img src="/assets/H38PboPKMoahSWx2FNicbQJ4nmc.png" src-width="3274" src-height="882" align="center"/>

1. 其他資產類型操作同「現金」

## 凍結/解凍

### 資產凍結

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：賬戶&gt;凍結解凍&gt; 資產凍結</p>
</div>

<b>菜單功能介紹</b>：該菜單可以針對客戶的現金賬戶/股票賬戶/基金賬戶來做資產凍結處理，支持單一凍結與批量凍結操作。

<b>操作說明</b>：

1. 可以選擇不同的資產類型進入資產凍結操作，目前支持現金、股票和基金（下圖以「現金」為例）；每個頁面支持篩選相關緯度進行查詢

<img src="/assets/K9fxb0UsHoy1nAxWjmEcJy2xnMc.png" src-width="3357" src-height="918" align="center"/>

1. 新建凍結：點擊右上角【新建】來增加一筆資產凍結的申請

<img src="/assets/XpxlbgSXAoawpnx7kMvc5Mpunqc.png" src-width="3280" src-height="746" align="center"/>

1. 填寫凍結申請信息：申請資料填寫完成提交後會進入工單系統，由相對應審批崗位來審批
    1. 賬戶類型：凍結的賬戶類型默認僅支持 SETTLEMENT 結算賬戶
    2. 有效期：為選填項，若填寫有效期，則到期時會自動解凍

<img src="/assets/PBClbhzSYo5YOSx1FllcA1hInJf.png" src-width="3389" src-height="1725" align="center"/>

1. 點選右側記錄操作區【查看】，可以查看工單審批進度及詳情

<img src="/assets/QJEobHXOQomUDdxfwLjcIBbgnuh.png" src-width="3356" src-height="1062" align="center"/>

<img src="/assets/PK7QbsuDgoPin7xHgc4c5MhunCg.png" src-width="3262" src-height="1756" align="center"/>

1. 批量凍結：也可以右上角區點擊【批量新建】，通過上傳文件方式來批量申請凍結

<img src="/assets/OtvDbegZeoPyjrxJDHuc2UIEnwA.png" src-width="3274" src-height="854" align="center"/>

1. 批量凍結操作頁面：需下載模板，根據提示填寫信息上傳；上傳後同單個凍結仍需進行工單審批

<img src="/assets/I9gjbKjdWouhaPxVQiDcFh69nGh.png" src-width="3260" src-height="1300" align="center"/>

1. 其他資產類型操作同「現金」

### 資產解凍

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：賬戶&gt;凍結解凍&gt; 資產解凍</p>
</div>

<b>菜單功能介紹</b>：該菜單可以針對客戶的現金資產/股票資產/基金資產 來操作資產解凍處理。

<b>操作說明</b>：

1. 資產解凍頁面可以選擇不同的資產類型進入解凍操作，每個頁面支持篩選相關緯度進行查詢

<img src="/assets/RZdpb5ZysooRj2xzK5ucpMZwnme.png" src-width="3339" src-height="932" align="center"/>

1. 若資產凍結時，支持設定到期時間，則系統會在到期時，會自動解凍該資產紀錄；在到期日之前，可以在頁面人工進行解凍（下圖以「現金」為例）

<img src="/assets/MyrObfwpFobPxkxCRVdcgiwinyV.png" src-width="3276" src-height="770" align="center"/>

1. 人工解凍需要審批，可以在操作欄的【查看】了解審批進度，審批通過後會執行資產解凍，可在解凍結果查看最終執行情況

<img src="/assets/UBshbBCJioR6Anx993AcS4Ofn8b.png" src-width="3272" src-height="1070" align="center"/>

<img src="/assets/IjTAbFhwboBLI8xocZzcAKZEnlf.png" src-width="3114" src-height="1612" align="center"/>

## 調賬

### 手工調賬

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶&gt;調賬&gt; 手工調賬</p>
</div>

<b>菜單功能介紹</b>：主要提供給後台人員在異常場景做資產賬務差錯處理使用，對客戶結算賬戶資產進行人工調整。

<b>操作說明</b>：

1. 手工調賬主頁面：根據不同調賬類型 (現金/股票/基金/債劵/OTC 其他/虛擬資產）分 Tab 頁展示，如需調賬需要根據調賬的資產類型進入對應頁面
    <img src="/assets/PJVkbUzlyoV1T8xQdIncyM6HnFc.png" src-width="3342" src-height="1152" align="center"/>

2. 新建手工調賬：點擊【新建】，即可打開新增調賬頁面
    <img src="/assets/ZZ3Jb4yRyonh62xW0Gock16gnQg.png" src-width="3220" src-height="958" align="center"/>

3. 填寫調賬信息：
    1. 業務分類：即業務碼，選擇調賬流水需要添加的業務場景
    2. 公司銀行卡&客戶銀行卡：非必填項，若調賬為出入金場景可以根據實際業務情況選擇對應銀行卡信息，便於數據記錄
    3. 調賬標記：非必填項，第三方和支票僅根據實際調賬場景做標記使用
    4. 業務時間：非必填項，用於指定客戶端流水發生時間，若無特殊需求，不選擇則默認實際調賬完成時間
    5. 賬務日期：非必填項，用於指定結算流水歸屬日，若無特殊需求，不選擇則默認實際調賬完成對應的賬務日（注：因調賬需走工單審批，申請到調整完成存在時間差，如無特殊指定賬務日需求，請勿選擇賬務日期，避免因審核隔日導致調賬失敗）
    6. 備註：註明對客戶展示的備註即會在客戶可見的流水展示（如 App、結單）；內部備註僅供內部記錄使用

<img src="/assets/Fhmmb3RbOo8Qutx1Xj6cTQSvnBf.png" src-width="3294" src-height="1640" align="center"/>

新建現金調賬

❤️Tips<b>：</b>

- 選擇客戶後可以點擊客戶賬戶查看當前資產情況，用來輔助調賬決策

<img src="/assets/ZjO3bMnlno0rOwxTLwFcOA7Knjc.png" src-width="3274" src-height="1634" align="center"/>

<img src="/assets/YLxYbRmfxow5l9xcZPmcWhoGnCk.png" src-width="3368" src-height="1737" align="center"/>

- 手工調賬因支持差錯處理，不限制調整資產賬戶為負值，調賬處理時請根據客戶實際資產謹慎操作

1. 證券類（股票/基金/債券/OTC 其他/虛擬資產）調賬填寫信息不同於現金調賬（下圖以「股票」調整為例）：
    1. 託管商&子倉：非必填項，僅在調賬指定倉位時使用，否則會根據清算時默認倉位為準
    2. 數量：必填項，分 Street、Nominee、Own，根據實際業務場景選。Nominee 免收過户費，無特殊需求可默認選擇 Street，合計=Street+Nominee+Own
    3. 成本&幣種：非必填項，僅在限定成本時填寫，否則系統將會默認以調賬創建時的行情價格為準

<img src="/assets/KgRSb0Rl0o3QlExWInfctQ2JnIc.png" src-width="3286" src-height="1658" align="center"/>

1. 根據實際業務需求填寫調賬信息，如擔心出錯，可以先【保存】，如有誤仍可以選擇【修改】或【刪除】，確認無誤後再【提交】

<img src="/assets/L9o5bfLljohDHVxHUG9cnwo9nJh.png" src-width="3284" src-height="866" align="center"/>

1. 調賬提交後均需進入工單審批，可在列表頁的操作欄【詳情】查看審批進度

<img src="/assets/U6AEblXgtoRs6lxX605cEGSwnDc.png" src-width="3272" src-height="866" align="center"/>

1. 審批完成後，可以在列表查看“調賬結果”，調賬完成即調賬成功。若調賬成功後仍發現有錯誤，可以【撤銷調賬】；此時撤銷調賬會通過生成一筆反向流水抵銷當前調賬流水，同時如果當天清算未完成日切，可以支持無痕撤銷（即客戶端無法看到調賬流水），詳細可以看撤銷彈窗頁面

<img src="/assets/KM1hbmJt0oJ6fFxABbicg2xKnRe.png" src-width="3276" src-height="978" align="center"/>

<img src="/assets/PZ4ubT5nCo0Ezqx6c2ccdISSnAd.png" src-width="3282" src-height="1370" align="center"/>

❤️Tips：

如需關注調賬失敗消息，可以在訂閱管理下訂閱“調賬通知”消息

<img src="/assets/EvdCbTjwcoLNDyxo69scmDHvnNh.png" src-width="2806" src-height="1026" align="center"/>

1. 撤銷完成後，調賬記錄狀態會更新為“已撤銷”，備註和內部備註均可查看原備註和撤銷時備註

<img src="/assets/F6nob8EqaocwB2xBTyDcn3zqnYg.png" src-width="2336" src-height="1084" align="center"/>

1. 此外，調賬支持批量操作，可以在列表右上方入口進行；批量新增頁面可以下載模版根據【模版字段說明】進行填寫，填寫後上傳文件解析，如填寫內容錯誤，彈窗頁面均會返回錯誤原因，可根據原因進行修改後重新提交；同時，也可忽略錯誤，直接提交，但該場景下系統僅會處理解析成功的記錄。批量調賬仍需審批，審批可在一筆申請單完成

<img src="/assets/JP93bY7JeoB2Exxl6GLcH8dsnGb.png" src-width="3210" src-height="802" align="center"/>

<img src="/assets/K1ObbAozcoZ4Lrx6IZNcy7Zsn3d.png" src-width="2394" src-height="1282" align="center"/>

### 臨時調賬

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶&gt;調賬&gt; 臨時調賬</p>
</div>

一般資產調賬的使用場景如下：

- 在用户遇到特殊情况时，交易員通過對客戶資產 (現金/期權/股票) 進行臨时的調增或調减操作，讓客户先完成下單，最终再把錢/券失效掉。
- 在特殊情况下（如股票公司行动，需要通過手工調整持倉），後台人員需要手工對 现金/股票/期權進行调賬，保障業務的有效進行。

<b>操作說明</b>：

1. 在臨時調賬選擇對應的調賬類型 Tab 頁籤 (現金/股票/期權），點擊【新增】，即可打開對應新增臨時調賬頁面。

<img src="/assets/QsfpbrAz1oYhILxor1qcGVEVnAe.png" src-width="3292" src-height="1330" align="center"/>

1. 填寫調賬信息頁面（以新增現金臨時調賬為例，如下圖）
    1. 業務類型和調賬類型綁定，只需選擇業務類型即可。現金臨時調賬默認對應入賬，現金臨時調減默認對應出賬
    2. 臨時調賬需要設定有效期，在到期後臨時調賬會自動失效

<img src="/assets/FihkbKzPdouG5Jx64g1c2dXAnug.png" src-width="3412" src-height="1745" align="center"/>

新增現金臨時調賬

1. 填寫完調賬信息後點擊【提交審核】進行工單審批，調賬記錄展示如下圖，狀態為“初始化”
    1. 點擊“詳情”亦可查看工單審批進度

<img src="/assets/TK6xb9CZ6o05cdx3AWPcVk1AnUe.png" src-width="3288" src-height="618" align="center"/>

1. 調賬審批通過且系統執行調賬完成後，狀態會顯示“已調賬”，同時在有效期之內，可人工操作【失效】；否則，系統將在到期日自動失效

<img src="/assets/XGlabaz36oJr55xESAEctn6OnIg.png" src-width="3288" src-height="1194" align="center"/>

## 資產調撥

### 賬戶間轉賬

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶&gt;資產調撥&gt; 賬戶間轉賬</p>
</div>

<b>菜單功能介紹</b>：主子賬戶場景下，若某個賬戶資金不足，可以通過另一關聯賬戶進行轉賬，方便當前賬戶完成交易。

注：僅支持同一客戶的主賬戶間轉賬以及同一主子關系下的主子賬戶間雙向轉賬

<b>操作說明</b>：

1. 列表頁記錄包含後台操作流水和客戶 App 上自主操作的轉賬流水
2. 在列表页的右上角點擊【新建】可以進入賬户間轉賬；或者【批量新建】進行批量轉賬

<img src="/assets/EJNWb5WEIoL7KMxy0V6cGW7onod.png" src-width="3312" src-height="1462" align="center"/>

1. 賬戶間轉賬頁面如下圖：

<img src="/assets/JUI5blivyoRf3uxE10rc9r6tnVc.png" src-width="3326" src-height="1650" align="center"/>

- 轉賬操作頁面確認轉出方並選擇轉賬類型後，系統會自動匹配轉入方支持選擇
    - 轉給主賬戶：若轉入方為主賬戶，可以轉給同一客戶的其他主賬戶；若轉入方為子賬戶，可以轉給該賬戶對應的主賬戶
    - 轉給子賬戶：若轉入方為主賬戶，可以轉給其下的子賬戶

- 按實際業務需求填寫轉賬信息，若轉賬金額超出可轉出金額，頁面會提示，但不會強制限制轉賬

<img src="/assets/BADSbujGtocDJBxlI8Ecnrmxnsf.png" src-width="3272" src-height="1772" align="center"/>

❤️Tips：因轉賬金額不強校驗超限，批量轉賬時請提前確認轉賬客戶資產再做處理。

1. 確認後提交審批，審批進度可以在列表頁的操作查看

<img src="/assets/RO1SbM6inosGfIxUeV6c2q4Wnbe.png" src-width="3144" src-height="754" align="center"/>

### 賬户間轉倉

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶&gt;資產調撥&gt; 賬户間轉倉</p>
</div>

<b>菜單功能介紹</b>：同一客戶有多個賬戶，若某個賬戶股票不足，可以通過另一賬戶進行轉倉，方便當前賬戶完成交易。​
注：支持同一客戶的主賬戶間、子賬戶間及主子賬戶間雙向轉倉（OB 企業客戶僅支持同一客戶下的子賬戶間轉倉）

<b>操作說明</b>：

1. 列表頁記錄包含後台操作流水和客戶 App 上自主操作的轉倉流水
2. 在列表頁的右上角點擊【新建】可以進入賬户間轉倉；或者【批量新建】進行批量轉倉

<img src="/assets/PiwXbqj1uo1uvxx8FXOcA7FKnxh.png" src-width="3306" src-height="1470" align="center"/>

1. 賬戶間轉倉頁面如下圖：

<img src="/assets/KkMDb2326o2L7IxBTHJc9B43nad.png" src-width="3312" src-height="1630" align="center"/>

- 轉倉操作頁面確認轉出方並選擇轉倉類型後，系統會自動匹配轉入方支持選擇​
    - 轉給主賬戶：若轉入方為子賬戶，可以轉給該賬戶對應的主賬戶​
    - 轉給子賬戶：若轉入方為主賬戶（非 OB 客戶），可以轉給其下的子賬戶；若轉入方為子賬戶，可以轉給同一客戶的其他子賬戶

- 按實際業務需求填寫轉倉信息，若轉倉數量超出可轉出數量，頁面會提示，但不會強制限制轉倉

<img src="/assets/HF98bjkA4ozVwIx01BTcg10Fnfg.png" src-width="3340" src-height="1828" align="center"/>

❤️Tips：因轉倉數量不強校驗超限，批量轉倉時請提前確認客戶持倉再做處理。

1. 確認後提交審批，審批進度可以在列表頁的操作查看

<img src="/assets/MBOYblcdFoojgvx6qTWci9MZn3e.png" src-width="3130" src-height="618" align="center"/>

## 業務碼

### 業務碼查詢

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶&gt;業務碼&gt;業務碼查詢</p>
</div>

<b>菜單功能介紹</b>：該菜單支持查詢所有的業務碼，同時可以更改對客展示的業務碼名稱以及業務碼對應的流水是否對客戶展示。

每一筆流水都會對應一個業務碼，業務碼是業務場景的唯一標識。

<b>操作說明</b>：

1. 進入菜單頁，可以在列表查詢所有業務碼，支持通過編碼和名稱搜索

<img src="/assets/EUKQbvmgaoOysGxz3hQccojNnDf.png" src-width="3202" src-height="792" align="center"/>

<b>頁面主要字段說明</b>

- 資產類型：對應流水處理的資產類型，如現金、股票
- 客戶端展示：展示端含客戶 App 流水及結單流水

1. 同時，如果需要修改展示的業務碼名稱或更改是否可見，可以在編輯操作。

<img src="/assets/CksbbtMfToUnl3xsABIcbEghnCo.png" src-width="3280" src-height="1760" align="center"/>

### 業務管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：資產賬戶&gt;業務碼&gt;業務管理</p>
</div>

<b>菜單功能介紹</b>：該菜單為業務碼分組，主要應用場景為調賬選擇的業務分類，可以在調賬的分組下通過更改業務碼來決定調賬是否展示該業務碼。

除調賬外，其他分組主要供系統在各業務場景調用，僅作查看，無需編輯。

<b>操作說明</b>：

1. 進入菜單，查看所有業務碼分組

<img src="/assets/UjufbgoGNoBHWoxgZ1HccNdKnjb.png" src-width="3170" src-height="630" align="center"/>

1. 詳情僅支持查看，如需更改分組信息，點擊編輯進入；業務碼選擇框勾選業務碼則會在對應類型調賬的業務分類展示，取消勾選則不展示

<img src="/assets/L0zib6BL1oiCbfxkWwfcbbI6nlg.png" src-width="3156" src-height="1552" align="center"/>

<img src="/assets/D52cbO4mZofAEgxOaQ3cTNxsnlg.png" src-width="3240" src-height="1768" align="center"/>

