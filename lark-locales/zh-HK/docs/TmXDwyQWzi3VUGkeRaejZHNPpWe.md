---
title: 常見問題
slug: SHybwQn9aiVZFSkVAwKcAuH7nDc
sidebar_position: 6
---


# 常見問題

# 公司行動創建

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：公司行動的數據是否會更新？</p>
</div>

```text
BE類&初始化狀態的公司行動支持自動更新


    05文件更新基本信息


    02文件更新最新狀態和文件日期
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：找不到预告？</p>
</div>

```text
系統基於05文件創建公司行動預告，只生成有持倉的公司行動


OB模式可通過手動創建基於上手資料創建公司行動


EP模式，系統只生成有持倉的公司行動。轉倉未及時處理，或者自動創建時剛好無持倉的可能會遺漏公司行動，可通過快捷創建補建


EP模式，02文件內有數據的BE類公司行動會強制生成，不再判斷持倉
```

<img src="FXm6b87pto27qAxT3csjFnSvpTc" src-width="3548" src-height="1806" align="center"/>

<img src="T4YObu3wlokkAJxuglyjn39Wp2f" src-width="3639" src-height="1886" align="center"/>

# 登記

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：何时可进行登记？</p>
</div>

```text
**推薦在執行日進行登記，可根據自身需要進行提前登記**


在登記日提前登記的BE類公司行動，將會在結單中提示將來的派息


券商如果打算提前登記，可在清算前準備中開啓公司行動-登記檢查項目


登記日當天提前登記的，需要在日終的港股清算交收步驟後進行


股權的標的信息在執行日才能創建完畢，無法進行提前登記
```

# 收費配置

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：為什麼供股、要約無法配置固定金額單次收費</p>
</div>

```text
該配置下，所有未行權的客戶，也會進行收費，暫時進行了屏蔽


RS、OO、ER、EO、TU、TC這種客戶可以放棄行權的公司行動，可以按如下方式配置
```

<img src="XhG0bT9tvoLEJMxSDE7jBV7tpqc" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：如果免收一個客戶的Handing Fee</p>
</div>

```text
在客戶規則處，將費率係數和最低收費係數分別填為0即可
```

<img src="RITQbCHD9ocunhxgy4Bj1t56pzh" src-width="3578" src-height="1798" align="center"/>

# 執行

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：执行时无对端数据</p>
</div>

```text
公司行動可能會取消，需要依據上手數據執行


執行時覈對報表的對端數據來源於CCASS的02文件，只支持EP模式，暫只支持部分類型。對端沒數據的依然可執行
```

# BE類

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：特殊派息如何处理</p>
</div>

```text
需要同時選擇兩個默認方案


特殊派息將進行兩次派息和收費
```

<img src="NtLlbOEG0oC2mAxvXP3jiLREpwf" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：过户费收取</p>
</div>

```text
可設置否收取過戶字段來配置過戶費，僅支持BE類和TM類
```

<img src="FBsfbHYLAoJhY1xqD7AjNWippFt" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：如何控制收取的費用不大於分紅</p>
</div>

```text
在費用規則中進行配置


    單項費用不超過分紅釋義：單一費用項目會和分紅進行比較


    優先級前費用不超過分紅釋義：Handling Fee收費優先級爲10且設置了該項目，CA Fee優先級爲1，則在計算Handling Fee時會使用CA Fee+Handling Fee之後和分紅進行比較


過戶費的收費優先級默認爲0


派發股權、派發股票時分紅金額等同於0
```

<img src="P5oBbW8XtoHtPmxARlDjzjDHpuh" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：选股选息的精确定义</p>
</div>

```text
有一個BE-SCRIP DIVIDEND方案，一個以上的BE-CASH DIVIDEND


BE-SCRIP DIVIDEND的計算公式：分紅金額/再投資金額


派發非港股的股票BE-SCRIP EVENT類方案和BE-CASH DIVIDEND組合不是選股選息，後臺支持全流程操作，客戶端不支持客戶行權，推薦直接派息
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：选股选息的零股处理</p>
</div>

```text
定義


    在操作選股時，如果客戶行權了1000股，即可達到收取100股股票的目的。用戶行權1002股時，系統會自動將多餘的2股行權到現金的方案，達到利益最大化的目的


操作


    在分股方案和分紅方案分別將零股轉分紅字段設置爲是


    如果有一個分股方案，兩個分紅方案，則必須且只能將一個分紅方案設置爲是


    系統初始化時，可開啓零股轉分紅，自動將零股轉分紅設置爲時
```

<img src="B20RbkOs5oZGZKxiJR7jUpOEpAb" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：客戶選擇階段何時結束</p>
</div>

```text
在選擇結算時間到後，自動結束，期間不能修改時間


如果修改了時間，或者想提前結束的，可操作提前完成指令收集
```

<img src="LS8xbIFu1oELXwx9uORjYJM7pFd" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 問：多币种选择是否支持</p>
</div>

```text
後臺和客戶端均支持不同幣種的選擇，報表可正常展示
```

