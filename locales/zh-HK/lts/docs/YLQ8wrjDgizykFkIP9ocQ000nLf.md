---
title: 常見問題
slug: YLQ8wrjDgizykFkIP9ocQ000nLf
sidebar_position: 3
---


# 常見問題

## 日终初始化配置

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股多市場如何操作日終？</p>
</div>

配置兩個市場清算，美股市場設置爲隔夜市場

每天早上執行上日的美股市場清算，下午執行港股市場清算以及日終清算

<img src="/assets/CCuYbmmNpoKmLjxtInuciV7inYg.png" src-width="3574" src-height="1774" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股的結單如何分別生成？</p>
</div>

港美股的使用同一個賬戶進行交易。所以結單是統一生成的，不支持分市場生成

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港、美股時區不一致，怎麼解決？</p>
</div>

在市場管理中將美股市場配置為隔夜市場

則在 28 日清算中會處理 28 日的港股交易、27 日（美國時區）的美股交易

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>是否可以在一個流程裡完成日終清算？</p>
</div>

- 路径：业务参数设置 - 日终设置 - 清算参数配置
- 可编辑时间段：操作日终任务之前
- 编辑清算初始化配置时需要审批
    - 工单标识：clearing.update_system_config.exec  

<img src="/assets/Me38b9ODroR1NIxw0n1casMinlV.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/M4WcbtDdLoZFnUxtlLdcv2L5nsc.png" src-width="3574" src-height="1774" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>若想依賴公有庫市場資料，但希望自行維護收盤價且不讓公有庫資料覆寫，在清算流程中應如何處理？</p>
</div>

<b>推薦直接在私有標的庫增加標的，而不是使用公有庫</b>

如果確實有需要，可以按如下操作：

- 在市場規則中將股票資訊來源設置為不依賴公有庫

<img src="/assets/QvZ9bJCAgoyCsfxM5LDcxwoFnLg.png" src-width="3020" src-height="1452" align="center"/>

- 如果需要新增標的，可以選擇同步公有庫的資訊然後進行二次維護。

<img src="/assets/Ff3sbQxqVoPWGnxcqDLcELSvnxc.png" src-width="3020" src-height="1452" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如果某个市场只有 OTC 业务，不想单独维护市场日历怎么办？</p>
</div>

- <b>將該市場配置為 OTC 簡化流程</b>
    - 配置後，該市場<b>無需</b>設定日曆，<b>非週末皆可視為交易日</b>
    -  配置後，該市場<b>即便未加入日終流程，亦可進行補單</b>。執行日終時，將<b>跟隨主市場一併進行市場清算</b>

<img src="/assets/EuLpbj7M1omeqDxPqoEcbq8enae.png" src-width="3020" src-height="1452" align="center"/>

## 日终任務執行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何查詢未來的賬務日期？</p>
</div>

<img src="/assets/ABEzb115VoqvCvxxOzvcW6ADnrc.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/TuXNbfRnNoQEeGxaJ3icnBqAn6q.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股半日市如何提前執行日終？</p>
</div>

<img src="/assets/WcgmbbpZWocXckx8XxKcqg3pnNc.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/ABKVbBirYoYjiKxAzstcjflBnKc.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>平時可否在日切點前進行清算？</p>
</div>

可以，但是必須在公有庫的行情文件文件到位後進行。

例子：券商的日切時間點是下午 17:00。非半日市在 16:30 之前可以進行提前日切。但是，因為港股未收市，港股的股票信息和收盤價數據是沒有的，一直需要等到 16:30 後才能執行日終任務。

<b>所以，非半日市或者非港股假日，不建議在 16:30 之前操作提前日切</b>

<img src="/assets/K7dXb8ifQoAsEwxbAzKcy3Lsndd.png" src-width="3584" src-height="1764" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如果當天想修改某個客戶某一筆交易收費怎麼處理？</p>
</div>

<b>方式一：修改收費渠道</b>

<img src="/assets/X2habxE0doeHjixpNDvcD7xJnNb.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/SincbLUkxoao67xOcEocd5qNnte.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/HJombiLhqo0cwTxhL6Dc6Ej1nKh.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/TZl1bCXTjowkzbxVVEichRUknWf.png" src-width="2602" src-height="490" align="center"/>

<b>方式二：修改合約</b>

<img src="/assets/M8wfbt8NUo843Wx63QWcg3pDnde.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/P0ogbmMDxoC6BDxl6oIcmYvznuC.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/X2apbQPTYoD4C8xNE3BcVLClnAc.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/Trseb9uJ9ot4noxeNP3cjGC3npf.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/SwgHbIcaso3GzHxia3XccrAHnah.png" src-width="2602" src-height="490" align="center"/>

## 客戶費用配置和查询

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何新增費用，什麼是收費場景？</p>
</div>

費用由技術人員直接添加，券商可基於費用添加收費場景

場景場景是計費配置的基礎元素，代表這個費用在系統中是否被正式啟用。系統基於收費場景設置了一些便捷功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>修改股票交易費用配置後，何時生效；怎麼判斷是否生效？</p>
</div>

請在對應市場的清算計費步驟前，修改收費规则后。修改後 10 分鐘內生效

可以在客戶計費查詢頁面（路徑：業務參數設置 - 計費管理 - 客戶計費查詢），此頁面查詢的數據為最新數據

如果想提前生效，可點擊<b>刷新配置</b>按鈕

<img src="/assets/RNZIb7GNYoPZypxca1CcTm8Xnwf.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/M1jvbLhlsoNRnNxTwjwccwFBnTh.png" src-width="2854" src-height="1358" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>修改收費配置後打算馬上生效</p>
</div>

<img src="/assets/MsgsbH8QBooAW5xYrwScxzAEnSf.png" src-width="830" src-height="396" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>想要查看之前某一筆交易的的佣金是基於什麼配置計算的？</p>
</div>

<img src="/assets/VjREbYNfxoQpMdxbd6ccl24snHe.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/Q7CJbGlvloy8JKxJyVychEHwnMd.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/NHlLbJBReow7tAxngrHcL8Nanrg.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>和客戶協商了佣金，如何進行修改</p>
</div>

<img src="/assets/OMCSboEiwofsY1xYwxsc9I2nnuf.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/WzOibrUkuo3orIxIR7SchjHLnVe.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/Wu6jbi9BkofEodxVFEGcAk9nnte.png" src-width="1079" src-height="1329" align="center"/>

<img src="/assets/X8l2b3VjZouThGxfAERcQMqDnQh.png" src-width="830" src-height="396" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>某一客戶針對 WTT 下單的渠道想要收取更高的費用，如何處理？</p>
</div>

如果是只想針對某一客戶設置，在<b>客戶計費</b>（路徑：計費管理 - 客戶計費）頁面添加客戶計費。普通收費設置為標準費率，同時添加 WTT 的特殊收費並設置相應費率

如果是只想針對某一客戶組設置，在<b>客戶組計費</b>（路徑：計費管理 - 客戶組計費）頁面的普通客戶組添加計費。普通收費設置為標準費率，同時添加 WTT 的特殊收費並設置相應費率

如果是只想針對全部客戶，在<b>客戶組計費</b>（路徑：計費管理 - 客戶組計費）頁面的全<b>局客戶組</b>添加計費。普通收費設置為標準費率，同時添加 WTT 的特殊收費並設置相應費率

<img src="/assets/U8BNbbktGocitjxcKxHcEbVRnGV.png" src-width="3578" src-height="1798" align="center"/>

## 標的信息修改

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>公共標的庫和私有標的區別？</p>
</div>

公共標庫的信息由 Whale 依據港交所等數據進行加工處理，券商僅擁有臨時修改的權限；私有庫的信息則由券商自行維護全部內容。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何臨時修改公有庫的信息？</p>
</div>

當日券商可對公共標庫中的標的進行臨時修改，並需及時將修改後的信息反饋給 Whale 客服，以便進行後續的數據更新與維護。

<img src="/assets/WzRJbMFhnoJtPyxbyD7cElv3nRf.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/UdGxbrLA9oPEc8xhQj2cz6o7nqg.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>何時可以對公有庫中的標的信息及收市價進行臨時修改？</p>
</div>

數據同步後可進行操作：
若在數據匯總前進行操作，無需額外處理。
若在資金清算前進行操作，需重新執行數據匯總及清算檢查。
資金清算後，則不可進行修改。

<img src="/assets/J6tCbyJMPovu5xxH1FscNt86ntd.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>停牌 3 天以上收盘价会改成 0 吗？</p>
</div>

系统会根据第三方数据判断停牌是否已达到 3 个交易以上，如果已到 3 个交易日，结单收盘价（停牌标的用）会将结单收盘价置为 0，如果停牌天数计算有问题，或者停牌时想提前将收盘价置为 0 的，可直接修改该字段。

除了结单，部分报表在进行收盘价计算时，

<img src="/assets/WmvYbQQe8of9O1xHy2FcqD53ngg.png" src-width="2876" src-height="1346" align="center"/>

## 后台补单

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>後台補單提交後是否會立刻凍結客戶資金？</p>
</div>

不會，完成日終任務 - 日切步驟後才會正式針對資產賬戶進行操作

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>新增代理商需要配置什麼？</p>
</div>

路徑：清算參數設置 - 市場管理 - 服務商：配置基本信息和持倉對賬方式

路徑：清算參數設置 - 市場管理 - 子倉：配置子倉

路徑：清算參數設置 - 市場管理 - 結算渠道：配置交易對賬方式

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>後台補單錄入債券的注意事項是什麼？</p>
</div>

<img src="/assets/JdwzbeXNRoYmbpxlD8XcoAlanLf.png" src-width="3564" src-height="1768" align="center"/>

<img src="/assets/RQ9sbqzHjoupK8x35Vsc5iMgnUc.png" src-width="3564" src-height="1768" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>場外交易如何單獨設置收費</p>
</div>

新增收費場景

<img src="/assets/HUOqbLPsZoS2HwxWKM6c4hddnse.png" src-width="3020" src-height="1452" align="center"/>

- 在套餐收費或個人化收費中設定具體費率並添加客戶

<img src="/assets/KKGdbJmyGoPrY7xQSL4csBQUnIg.png" src-width="3020" src-height="1452" align="center"/>

- 在客戶計費查詢頁面查詢最終的配置效果

<img src="/assets/WWYobDlX7ofhSUxDJVecjfecn2c.png" src-width="3020" src-height="1452" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>在補單時，債券如何使用面值輸入</p>
</div>

- 在添加成交記錄時，點擊切換
- 注意：切換功能僅對私有庫的債券有效

<img src="/assets/Ra9XbD4aIo2AhSxz7i6cn4mFnyc.png" src-width="3008" src-height="1494" align="center"/>

## 交易對賬

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>為什麼會有多種對賬模式？</p>
</div>

不同上手在提供交易文件時，會有不同的格式和字段。不同上手會有不同的對賬模式。常用的對賬模式有成交對賬、訂單對賬、股票對賬。不管是哪類都會對交易數量和交易金額（交易數量*成交價格）進行對賬

成交對賬：基於成交流水號進行配對，會比對交易數量和交易金額

訂單對賬：基於訂單號進行配對，多筆成交的會進行匯總

股票對賬：基於股票進行配對，多筆成交的會進行匯總

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>前後台補單後，因為沒有流水號，會出現不平賬，该如何处理？</p>
</div>

處理方案一：藉助 SDR015-2 報表。查看第三模塊，人工比對不平賬，看看基於股票的對賬是否平賬。如果平賬的人工通過

<img src="/assets/QtjcbpbzPooWctxl1aiclrHnnCb.png" src-width="3584" src-height="1696" align="center"/>

處理方案二：開啟模糊對賬功能

在清算參數配置打開模糊對賬功能。

<img src="/assets/Q8Rib9m2ao8xJkxSEXDcbrnHnTe.png" src-width="3584" src-height="1696" align="center"/>

如果有不平賬，系統會自動按股票重新對賬

如果“按股票對賬”進行重新對賬後，結果為平賬的，系統會將“按股票對賬的結果”處理為平賬。反之，“按股票對賬的結果”依然為不平賬

如果“按股票對賬的結果”為平賬的，清算檢查自動通過

<img src="/assets/Zx7dbuYBeojUMyxxToec6OGBnwg.png" src-width="3584" src-height="1696" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>CTF 交易文件自動導入</p>
</div>

<b>開通</b>

EP 模式的券商，可聯繫客服開通。開通後每個交易日，系統會自動從港交所的 SFTP 獲取交易文件

<img src="/assets/BWXubhuBCoDyvdxkqZJcC83Lnbh.png" src-width="3584" src-height="1764" align="center"/>

<b>到點文件沒有</b>

系統會從下午 13:00 開始，自動獲取港交所文件。如果一直沒獲取到文件的（手動導入的也算導入），每隔 10 分鐘跑一次，一直跑到下午 5 點

如果租戶在 16 點 35 後（或半日市的 13:05 後），發現系統沒自動導入的，可人工手動導入

## 持倉對賬

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>什麼時候進行持倉對賬？</p>
</div>

港股市場在下一日對上一個的持倉。在上一日日切且收到文件後進行

美股市場因為是隔夜市場，可在當前賬務日期對當日的賬。最早可在清算交收步驟後進行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持倉對賬任務是如何觸發的？？</p>
</div>

文件類型標記為觸發持倉對賬的文件，在導入後可自動觸發持倉對賬

注意如果是 OB 模式，當日就要觸發持倉對賬的，請在清算交收後再導入持倉文件

<img src="/assets/Y5fSblZ1yoJWKQx1LTgcdWiun6d.png" src-width="3572" src-height="1662" align="center"/>

如果持倉文件未支持“自動觸發持倉對賬”，可在持倉對賬頁面點擊“重新對賬”

<img src="/assets/PxNVbljWwoa5CIxevcLcxRUmnnc.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>非交易日是否需要發起持倉對賬？</p>
</div>

不需要，系統也不支持發起持倉對賬

<img src="/assets/Z89sb2kk0o0SpIxN38NcnEeNnXf.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持倉對賬不平後，如何進行確認？</p>
</div>

根據不平賬明細，查找是否有漏做的轉倉、公司行動等操作

<img src="/assets/MGCFbS81Qo8jVMxwT0scnmR2nGf.png" src-width="3572" src-height="1662" align="center"/>

逐項確認完畢後，在檢查結果頁面點擊通過

<img src="/assets/BomSbi9Ico3y5uxXrSsc8vPJnye.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/LjYYbzjHUoZpmvxZ7KUceRBGnxd.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/MRmab9eGIoBJMcxGrobcbHtAnVc.png" src-width="3572" src-height="1662" align="center"/>

## 交易的提前交收

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股市场如何让用戶可以在早上提現？</p>
</div>

方式一：可以打開“11 點的港股自動交收”、“US 日切後自動交收”任務

路径：业务参数设置 - 日终设置 - 清算参数配置

<img src="/assets/SpPybPk1noYDfKx4vvyc0fPwnWd.png" src-width="3570" src-height="1774" align="center"/>

方式二：手工操作提前交收

路径：清算管理&gt; 市場清算&gt;交收系統&gt;交收批次 Tab 頁籤

點選【提前交收】，輸入欲提早交收的市場（可多選）

<img src="/assets/KOQzbEUYGo2XqyxS1exccTpHnnd.png" src-width="3364" src-height="1450" align="center"/>

操作後可觀察交收批次是否處理完畢

<img src="/assets/TNFubCMOyofC61xiJgQcFDcdnAc.png" src-width="2516" src-height="740" align="center"/>

## 切換上手時如何內部轉倉

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>切換上手後，在系統進行內部轉倉？</p>
</div>

<b>方式一：單筆操作</b>

操作路徑：清算管理 - 倉位管理 - 倉位查詢

a.<b>篩選數據</b>
- 日期範圍：設定為「當前賬務日」以篩選出當日相關資料。
- 其他條件：如有需要，可進一步篩選客戶、股票等條件，以縮小查詢範圍
<b>b.執行內部轉倉</b>
- <b>逐一處理：</b> 針對每一個客戶、每一個股票，分別執行內部轉倉操作
<b>c.注意事項</b>
- 在清算中檢查前操作
- 即使之後撤銷了清算，系統仍會保留此次操作的記錄

<img src="/assets/IMiEbxRZaozj5VxsXvBc1LZ3nee.png" src-width="3570" src-height="1774" align="center"/>

<img src="/assets/GuZdbsQeaoty8nxpxYFcXYM5nbb.png" src-width="3570" src-height="1774" align="center"/>

<b>方式二：批量操作</b>
- 操作路徑：清算管理 - 倉位管理 - 倉位查詢
- 在清算中檢查前操作
- 即使之後撤銷了清算，系統仍會保留此次操作的記錄

<img src="/assets/EHoSbkg91ozmXKxOpfIcSpOXnJ0.png" src-width="3570" src-height="1774" align="center"/>

<b>修改子倉模板</b>
- 字段說明如下圖
- 按圖示的文檔
    - 系統將找到香港市場 H123456 客戶託管在 U123445 的持倉，並全部轉到 U23333 的持倉上
- 注意事項：上傳修改子倉的模板後，系統將同時修改待交收的合約

<img src="/assets/VBWMb1s4PoBCcXxNZs4cI7vKn4e.png" src-width="3570" src-height="1774" align="center"/>

<b>基礎倉位調整</b>
- 字段說明如下圖
- 按圖示的文檔
    - 系統會將客戶H1000001在託管商ID1子倉3上的ST/HK/700將減少1000股；
    - 系統會將客戶H1000001在託管商ID1子倉4上的ST/HK/700將增加1000股
- 基礎倉位調整的模板，將不會修改待交收的合約。基礎倉位調整的模板，可同時調整 Sreet、Nominee、Own。用來操作內部轉倉時，必須有配套的數據（兩條）

<img src="/assets/MOxDby2MtoLWjgxxMJuczzginIb.png" src-width="3570" src-height="1774" align="center"/>

## 經紀人分佣如何重算

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>重新配置佣金分成套餐後，想要針對之前的日期重新計算分佣如果處理？</p>
</div>

<img src="/assets/I7Dab7dvNoqaafxhkaacJGHCnJe.png" src-width="3024" src-height="1500" align="center"/>

<img src="/assets/Bv6vbd5AKoIP8UxlEhXc3C1FnVf.png" src-width="3024" src-height="1500" align="center"/>

