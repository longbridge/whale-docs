---
title: 7. 佣金計費問題
slug: LxIbwuET8iV363kcGINc6wHxnth
sidebar_position: 6
---


# 7. 佣金計費問題

## 7A 問：如何查詢客戶佣金收費？

<b>答：</b>見以下步驟，

(i). 在「業務參數設置＞計費管理＞客户計費查詢」頁面

<img src="/assets/XuvbboSg4oOSIyxszQ1cq4yLn0d.png" src-width="2480" src-height="1264" align="center"/>

(ii). 以「賬戶號碼」查詢客戶的收費及特殊收費

> 註＊特殊收費會優先於客户設置的收費

<img src="/assets/RcadbksX0okCYLxlo8dcvh0vnlg.png" src-width="2852" src-height="1370" align="center"/>

## 7B 問：如何修改客户佣金？

<b>答：</b>在「業務參數設置＞計費管理＞客户計費配置」新建一個獨立的佣金費率給客户（見 7B 圖一）。

如計費套餐已有相關收費，可以在「客户組計費配置」進入詳情頁後，點擊「管理組內客户」把客户添加進去（見 7B 圖二、圖三）。

> 客戶計費設置取收費優先順序：針對某個客戶的設置＞普通客戶組＞全局客戶組。

<img src="/assets/QOzzb81Qzo87TgxwWBscQD4vnqf.png" src-width="2752" src-height="1324" align="center"/>

<em>7B 圖一</em>

<img src="/assets/HZdYb8MEloj44GxAcHbcNS6WnCb.png" src-width="2504" src-height="1356" align="center"/>

<em>7B 圖二</em>

<img src="/assets/NOhRb7ZSfolbICx4dBic48QAnt7.png" src-width="2168" src-height="700" align="center"/>

<em>7B 圖三</em>


## 7C 問：如何修改政府雜費或佣金費率？ （客户組計費修改）

<b>答：</b>（i）在「業務參數設置＞計費管理＞客户組計費配置」頁面中的“默認客户組”點擊「編輯」。

<img src="/assets/WZ23bsry3oZAjHxcBN6cWI2qnCr.png" src-width="2869" src-height="1540" align="center"/>

(ii). 在操作欄中點擊「編輯」修改相應的收費埸景。

<img src="/assets/FYVrbmZIlocXiCxWzsSckKQlnGh.png" src-width="2876" src-height="1628" align="center"/>

(iii). 可修改費率、最低/最高收費。

<img src="/assets/Nrb9bj8SyoeuhfxsVH2c3Xl3nMd.png" src-width="2326" src-height="1367" align="center"/>

(iv). 修改完成後點擊「提交」（編輯後約 10 分鐘生效）。

<img src="/assets/NS4GbF26QoSbtqxjDWUc2hVMnPe.png" src-width="2705" src-height="1436" align="center"/>

(v). 點擊「客户計費查詢」查詢個別客户收費確認。

<img src="/assets/Th9kbrrZaobolcxAzDfcsF6YnMf.png" src-width="2599" src-height="1368" align="center"/>

(vi). 隨機搜尋客户及點選修改了的收費類型查詢。

<img src="/assets/ZhGnbpm50oNrrRxHenxcg26Tneg.png" src-width="2619" src-height="295" align="center"/>

## 7D 問：佣金收費／交易合約作一次性的額免或修改，可以什樣處理？

<b>答：</b>執行清算任務時，完成 "清算計費" 後先暫停，拉取到客户合約數據在「清算管理 &gt; 合約管理」修改費用。

(i). 執行日終任務去到 "清算計費" 時點擊「暫停一鍵清算」。

<img src="/assets/KISwbh4kOoyuppxhxT1cTBPHnAe.png" src-width="2496" src-height="1100" align="center"/>

(ii). 執行完成後去到「合約管理 &gt; 客户合約」頁面拉取到當天賬務日期的交易後，搜索客户及相應的訂單，在操作欄點擊「詳情」

<img src="/assets/J1wlbt9gSolcO2xK0ATc5OS7nsg.png" src-width="2502" src-height="780" align="center"/>

(iii). 在「費用信息」頁面相應的收費類別點擊「編輯」

<img src="/assets/Z2TXbD3TQoc8WExFI7pcSWjknJc.png" src-width="2868" src-height="1457" align="center"/>

(iv). 在實收金額修改費用後點擊「確定」。如收取 0.74 USD &gt; 0.01 USD

<img src="/assets/QrjhbECfaoaxXMx17XFc9G74nhp.png" src-width="2861" src-height="1618" align="center"/>

(v). 在「費用信息」頁面，實收金額及應收金額費用會更新

<img src="/assets/RfLEbu0CmoNrEPxkqgvcWt4Tnoc.png" src-width="2843" src-height="1575" align="center"/>

(vi). 之後繼續完成清算，費用會作調整及結單會顯示更新的費用

## 7E 問：計算精度的 Contract、Order、Trade done 如何區分？

<b>答：</b>Contract、Order、Trade done 見以下例子說明。

- 如：想合單計算，選 Contract，會按客户當天買同一隻股票的總交易金額計算佣金
- 則：客户下單 3 次 10000，合成 30000 計算一次佣金

- 如：平台費逐條訂單計算，選 Order，會按客户下單次數計算
- 則：客户下單 3 次 10000，逐筆計算 會收取 3 次平台費

- 如：收取政府雜費，選 Trade done，會按訂單成交的次數計算
- 則：客户下單 3 次 10000，每筆分了 3 次成交，會逐條成交計算稅花稅，總共計算 9 次費用

> 選了 Contract 是依照合約進行計費。如果沒開啟合單功能，一個 Contract 對應的是一個 Order；如果已經開啟了合單功能，多個 Order 才會合併成一個 Contract 計算（見 7E 圖一），這樣 Contract 和按 Order 才有差別

<img src="/assets/W70VbDunroTZCNxQPuXcQ9BunAK.png" src-width="2578" src-height="1229" align="center"/>

<em>7E 圖一</em>

## 7F 問：特殊收費的設置如何影響到客户？

<b>答：</b>全局客户組設置了特殊收費，所有客户都會依據該特殊收費計算佣金。如把客户添加到普通客户組，需要在這套餐添加特殊收費才能覆蓋掉全局的設置。

<img src="/assets/A4Mobr0NJoGf08xG5IrcZlDynjg.png" src-width="2464" src-height="1368" align="center"/>

<img src="/assets/XsUrbcX4foBHJgxZ8lsct3dWnDd.png" src-width="2134" src-height="1354" align="center"/>

## 7G 問：全局客戶組為什麼看不到客戶數量和組內的客戶？

<b>答：</b>全局客戶組理論上配置到所有客戶，所以沒有顯示到數量及組內客户。在普通客户組能看到數量及組內客户。

<img src="/assets/UnydbvGTio0o0qxFC8IcQqvGncc.png" src-width="2496" src-height="1180" align="center"/>

<img src="/assets/PMVabUdZ8oKPJGx97ekc94cUnod.png" src-width="2160" src-height="700" align="center"/>

## 7H 問：暗盤平台費和正常交易平台費能否分開計算？

答：在「業務參數設置＞計算管理＞客户組計費配置」相關客戶組點擊「編輯」（見 7H 圖一），然後在平台費收費點擊「編輯」。（見 7H 圖二）
在“特殊收費”點擊「添加」，“訂單類型”選擇「暗盤」後并輸入收費資料。（見 7H 圖三）

<img src="/assets/BcNybt9EboDqzkxJaLIceaHDnmf.png" src-width="2866" src-height="1606" align="center"/>

<em>7H 圖一</em>

<img src="/assets/Qe1lbiWHoo2rcSxwiO3cxiZenEd.png" src-width="2790" src-height="1386" align="center"/>

<em>7H 圖二</em>

<img src="/assets/WELwbbklhol38RxG7Xdc1XJ7nOc.png" src-width="2864" src-height="1618" align="center"/>

<em>7H 圖三</em>

## 7I 問：收費渠道 Longport，Pro，App，Web，WTT 的分別表示什麼？

答：Longport 是公版 App；Pro 是豪華版 Longport Pro；App 是白標 App；Web 是網頁版 Web Trade；WTT 是前台 Whale Trade Terminal。

<img src="/assets/Uwgmbd6cwo6xA6xxgBwcMdTznCh.png" src-width="2728" src-height="1370" align="center"/>

## 7J 問：如何添加開户時所選的計費套餐？

答：在「業務參數設置＞計費管理＞機構計費」對應的 "默認用户組" 點擊「編輯」（見 7J 圖一），在 "可選客户組" 添加「客户組計費配置」已建立的計費套餐，之後在計費套餐可選擇（見 7J 圖二）。

<img src="/assets/PPVpbYpwCoRGvWxHGrOcKxvPnNg.png" src-width="2726" src-height="1408" align="center"/>

<em>7J 圖一</em>

<img src="/assets/ItqabGJSyoye5sxXCWhcrIr2nfd.png" src-width="2126" src-height="1410" align="center"/>

<em>7J 圖二</em>

## 7K 問：App「我的費率」佣金計費的取值邏輯是什麼？

答：取值邏輯先後次序如下：

1. 「客戶計費」佣金特殊收費中的「條件」（「條件」在「收費渠道」有設置了「APP」才會顯示）
2. 「客戶組計費」佣金特殊收費中的「條件」
3. 「全局客戶組計費」佣金特殊收費中的「條件」
4. 「客戶計費」佣金特殊收費
5. 「客戶組計費」佣金特殊收費
6. 「全局客戶組計費」佣金特殊收費

此外，可以在「瞭解示例」中為客戶提供更多「費率」資訊，而後台「幫助中心」可以修改「瞭解示例」中的內容。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[13%]" width-ratio="13">
<img src="/assets/VgjRbBOHloOZIXxHcKGcFZxan7b.png" src-width="716" src-height="1606" align="center"/>
</div>
<div class="w-[14%]" width-ratio="14">
<img src="/assets/QH0sb0IXIoBXODxs4DucuPBinbh.png" src-width="740" src-height="1588" align="center"/>
</div>
<div class="w-[72%]" width-ratio="72">
<img src="/assets/R831byx3goj3mRxdNKOcdrounOe.png" src-width="2824" src-height="1156" align="center"/>
</div>
</div>

 

