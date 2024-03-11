---
title: 常見問題
slug: SHybwQn9aiVZFSkVAwKcAuH7nDc
sidebar_position: 5
---


# 常見問題

# 公司行動創建

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：公司行動的數據是否會更新？</p>
</div>

BE 類&初始化狀態的公司行動支持自動更新

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：找不到预告？</p>
</div>

系統基於 05 文件創建公司行動預告，只生成有持倉的公司行動

OB 模式可通過手動創建基於上手資料創建公司行動

EP 模式，系統只生成有持倉的公司行動。轉倉未及時處理，或者自動創建時剛好無持倉的可能會遺漏公司行動，可通過快捷創建補建

EP 模式，02 文件內有數據的 BE 類公司行動會強制生成，不再判斷持倉

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/LNJjbxaJ5o42HsxDswfcBS9bnyg.png" src-width="3548" src-height="1806" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/XdDUbHHRWoheSpxubyCceykjnfg.png" src-width="3639" src-height="1886" align="center"/>
</div>
</div>

# 登記

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：何时可进行登记？</p>
</div>

**推薦在執行日進行登記，可根據自身需要進行提前登記**

在登記日提前登記的 BE 類公司行動，將會在結單中提示將來的派息

券商如果打算提前登記，可在清算前準備中開啓公司行動 - 登記檢查項目

登記日當天提前登記的，需要在日終的港股清算交收步驟後進行

股權的標的信息在執行日才能創建完畢，無法進行提前登記

# 收費配置

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：為什麼供股、要約無法配置固定金額單次收費</p>
</div>

該配置下，所有未行權的客戶，也會進行收費，暫時進行了屏蔽

RS、OO、ER、EO、TU、TC 這種客戶可以放棄行權的公司行動，可以按如下方式配置

<img src="/assets/XUgMbk0wiownK3x5SG6cOWyOnjg.png" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：如果免收一個客戶的 Handing Fee</p>
</div>

在客戶規則處，將費率係數和最低收費係數分別填為 0 即可

<img src="/assets/WRSXbuPMKoFrZPxrqdqc3GMunNb.png" src-width="3578" src-height="1798" align="center"/>

# 執行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：执行时无对端数据</p>
</div>

公司行動可能會取消，需要依據上手數據執行

執行時覈對報表的對端數據來源於 CCASS 的 02 文件，只支持 EP 模式，暫只支持部分類型。對端沒數據的依然可執行

# BE 類

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：特殊派息如何处理</p>
</div>

需要同時選擇兩個默認方案

特殊派息將進行兩次派息和收費

<img src="/assets/LqmRbhmW8oFFDwxXL6gcAUnqnxf.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：过户费收取</p>
</div>

可設置否收取過戶字段來配置過戶費，僅支持 BE 類和 TM 類

<img src="/assets/Ihwibq9WcoOC0Sxc29WcuGtUnjg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：如何控制收取的費用不大於分紅</p>
</div>

在費用規則中進行配置

過戶費的收費優先級默認爲 0

派發股權、派發股票時分紅金額等同於 0

<img src="/assets/BSNLbyoYvo2O6CxKsV7cUobznJf.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：选股选息的精确定义</p>
</div>

有一個 BE-SCRIP DIVIDEND 方案，一個以上的 BE-CASH DIVIDEND

BE-SCRIP DIVIDEND 的計算公式：分紅金額/再投資金額

派發非港股的股票 BE-SCRIP EVENT 類方案和 BE-CASH DIVIDEND 組合不是選股選息，後臺支持全流程操作，客戶端不支持客戶行權，推薦直接派息

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：选股选息的零股处理</p>
</div>

定義

操作

<img src="/assets/TjbwbNDqHoIYURxfvROcyZsbnSb.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：客戶選擇階段何時結束</p>
</div>

在選擇結算時間到後，自動結束，期間不能修改時間

如果修改了時間，或者想提前結束的，可操作提前完成指令收集

<img src="/assets/U4rAbvjXZobN9FxrICacwTDknTg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：多币种选择是否支持</p>
</div>

後臺和客戶端均支持不同幣種的選擇，報表可正常展示

