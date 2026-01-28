---
title: 5. 清算問題
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. 清算問題

# 5A 問：清算能重跑昨天的數據？

**答：**在「清算管理＞清算撤銷」頁面點擊「新增」，不能跳過賬務日，需一天一天撤回。（見 5A 圖一）

<img src="/assets/EzPcbwB3uosFrExVntSjWocPpJe.png" src-width="2390" src-height="1420" align="center"/>

<em>5A 圖一</em>

<em>如不用重新計算利息／交收數據，資產類回撤可選不操作</em>

# 5B 問：為什麼操作提前交收沒反應？

**答：**提前交收需要完成日終後操作，如下日為假期操作會有報錯提醒：市埸日歷不存在

<img src="/assets/D2JmbWF0aoaqVIxSlAVj0uBIp3c.png" src-width="2504" src-height="1006" align="center"/>

# 5C 問：半日市清算需要什麼操作／注意？

**答：**最早當天 2 點在「清算管理＞日終任務」點擊「提前日切」可提早進行清算 或 等到系統截數時間（如：4 點半）後操作。

<img src="/assets/OyakbTYRhoEinLxQZHHjpeUWpRe.png" src-width="2183" src-height="384" align="center"/>

# 5D 問：日終 "清算前準備" 有報錯提醒如何處理？

<img src="/assets/WgiSbzN7wokCIjx3aBcjiKu0pDc.png" src-width="2220" src-height="380" align="center"/>

**答：**彈出提醒信息檢查後沒問題，作「手動審核」通過。

<img src="/assets/EBBpbmmmEogJvGx3TECjDU79pQh.png" src-width="2110" src-height="172" align="center"/>

<img src="/assets/CuuybAyqOoHIbGx6ylRjlJl5p7g.png" src-width="2040" src-height="162" align="center"/>

<img src="/assets/WbIxbYEs5oBMMIx6Z24j9aoMpkh.png" src-width="2752" src-height="1354" align="center"/>

<em>5D 圖一</em>

<img src="/assets/SiCQbFouvoVQhExPN8OjeuLXp3f.png" src-width="2656" src-height="294" align="center"/>

<em>5D 圖二</em>

# 5E 問：清算前準備出現「前台流水全部納入清算」的提醒，如何處理？

<img src="/assets/Z641bu4uCoxINAxbUVSjuGp9pYb.png" src-width="1373" src-height="1124" align="center"/>

**答：**檢查流水是否在系統清算時間後操作。在「清算管理＞流水管理」頁面選持倉／資金流水點擊「編輯日期」，改回當天賬務日期。完成日終後，當天結單會顯示到該流水。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>如不用在當天結單顯示流水，可保持原來的賬務日，不作修改，點擊通過繼續日終。</p>
</div>

<img src="/assets/Jmw8bLP4Ko3uNsxRX78j4Ikfpkh.png" src-width="2386" src-height="828" align="center"/>

# 5F 問：清算檢查的「IBOND 交易檢查」是否須作處理？

**答：**可以人手檢查通過提醒。如需關閉檢查配置，在「業務參數設置＞日終設置＞清算前準備＞IBOND 交易檢查」處理（見下圖）。

<img src="/assets/P0EEbOiaXoFPT7x1MZujYTjipWb.png" src-width="2858" src-height="1610" align="center"/>

<img src="/assets/TvUkb20svoDohxxcF3pjMg5Fpp5.png" src-width="2314" src-height="1342" align="center"/>

# 5G 問：日終時數據同步出現「執行失敗！市埸表配置錯誤」如何處理？

**答：**報錯會提醒缺失那個市埸
(i). 添加市埸：「業務參數設置&gt;市埸管理&gt;市埸規則」新增相關市場配置。（見 5G 圖一、圖二）

(ii). 添加幣種：「款項管理&gt;滙率&gt;參考滙率」的新增該市場的貨幣。（見 5G 圖三、圖四）

(iii). 日終設置加回市埸：「業務參數設置&gt;日終設置&gt;市埸交收」點擊「編輯」加上市埸。（見 5G 圖五、圖六）

<img src="/assets/DIMIbpFz2oWrsnxBdrajpA5Ypyh.png" src-width="2852" src-height="1606" align="center"/>

<em>5G 圖一</em>

<img src="/assets/AjCQb4o9UoajsVxMbTLjfOsOpOc.png" src-width="2448" src-height="1276" align="center"/>

<em>5G 圖二</em>

<img src="/assets/W8iSb1xafonEr6xoiyFjbhF8ppg.png" src-width="2334" src-height="1078" align="center"/>

<em>5G 圖三</em>

<img src="/assets/VAKFb0zlwocNvix9AR7jk37Ypkc.png" src-width="1926" src-height="1298" align="center"/>

<em>5G 圖四</em>

<img src="/assets/UqivbN6RXozE1PxzvVnj6T98pec.png" src-width="2740" src-height="910" align="center"/>

<em>5G 圖五</em>

<img src="/assets/WSgwbWn2po71yhxsZwVjhhOlpIh.png" src-width="2476" src-height="866" align="center"/>

<em>5G 圖六</em>

# 5H 問：清算中檢查報錯，如何處理？

<img src="/assets/DkqMbXEmLoLVUAxFAD2jWT8Vplg.png" src-width="2644" src-height="1112" align="center"/>

<b>答：</b><b>確認情況是否</b><b>同股票同客户持倉在不同托管商</b>上。

在「清算管理＞清算檢查＞檢查結果」頁面是否出現“<b>同客户、同標的跨子倉</b>”出現檢查失敗，因同客户及同股票在不同上手的托管商會有提醒報錯。

- 方法一：確認股票放在兩個不同上手的倉位，可點擊「工單詳情」手動通過（見 5H 圖一），回到「清算管理＞日終任務」頁面繼續完成日終。如持倉保持在不同上手，日後的清算中檢查會一直有報錯提醒。
- 方法二：可在「清算管理＞倉位管理＞倉位查詢」操作内部轉倉，把股票放到同一上手托管商倉位（見 5H 圖二）。之後回到日終任務，在清算中檢查點擊「重新執行」完成日終。

<img src="/assets/Xtt7bpfBpout2RxLxa0j5F3opJb.png" src-width="2512" src-height="814" align="center"/>

<em>5H 圖一</em>

<img src="/assets/Fp8Jb3Xe3o8khBxQpd4jVlzXpId.png" src-width="2454" src-height="1109" align="center"/>

<em>5H 圖二</em>

# 5I 問：颱風天操作如何處理？（2024 年 9 月 23 日後不適用）

**答：**一般 ccass 會發通知券商延後錢或貨

(i). 在「清算管理 &gt; 颱風天處理」頁面操作

<img src="/assets/HOQhbaVa4oFOw3xdUMIj5o2xpKc.png" src-width="2840" src-height="1410" align="center"/>

(ii). 選擇「市場」及 根據 CCASS 通知選擇「錢貨同時延後」或「錢延後」

<img src="/assets/RQVTbTzxmoJjykxJ0MsjKCW5pnd.png" src-width="2756" src-height="1478" align="center"/>

