---
title: 5. 清算问题
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. 清算问题

# 5A 问：清算能重跑昨天的数据？

**答：**在「清算管理＞清算撤销」页面点击「新增」，不能跳过账务日，需一天一天撤回。（见 5A 图一）

<img src="/assets/EzPcbwB3uosFrExVntSjWocPpJe.png" src-width="2390" src-height="1420" align="center"/>

<em>5A 图一</em>

<em>如不用重新计算利息／交收数据，资产类回撤可选不操作</em>

# 5B 问：为什么操作提前交收没反应？

**答：**提前交收需要完成日终后操作，如下日为假期操作会有报错提醒：市埸日历不存在

<img src="/assets/D2JmbWF0aoaqVIxSlAVj0uBIp3c.png" src-width="2504" src-height="1006" align="center"/>

# 5C 问：半日市清算需要什么操作／注意？

**答：**最早当天 2 点在「清算管理＞日终任务」点击「提前日切」可提早进行清算 或 等到系统截数时间（如：4 点半）后操作。

<img src="/assets/OyakbTYRhoEinLxQZHHjpeUWpRe.png" src-width="2183" src-height="384" align="center"/>

# 5D 问：日终 "清算前准备" 有报错提醒如何处理？

<img src="/assets/WgiSbzN7wokCIjx3aBcjiKu0pDc.png" src-width="2220" src-height="380" align="center"/>

**答：**弹出提醒信息检查后没问题，作「手动审核」通过。

<img src="/assets/EBBpbmmmEogJvGx3TECjDU79pQh.png" src-width="2110" src-height="172" align="center"/>

<img src="/assets/CuuybAyqOoHIbGx6ylRjlJl5p7g.png" src-width="2040" src-height="162" align="center"/>

<img src="/assets/WbIxbYEs5oBMMIx6Z24j9aoMpkh.png" src-width="2752" src-height="1354" align="center"/>

<em>5D 图一</em>

<img src="/assets/SiCQbFouvoVQhExPN8OjeuLXp3f.png" src-width="2656" src-height="294" align="center"/>

<em>5D 图二</em>

# 5E 问：清算前准备出现「前台流水全部纳入清算」的提醒，如何处理？

<img src="/assets/Z641bu4uCoxINAxbUVSjuGp9pYb.png" src-width="1373" src-height="1124" align="center"/>

**答：**检查流水是否在系统清算时间后操作。在「清算管理＞流水管理」页面选持仓／资金流水点击「编辑日期」，改回当天账务日期。完成日终后，当天结单会显示到该流水。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>如不用在当天结单显示流水，可保持原来的账务日，不作修改，点击通过继续日终。</p>
</div>

<img src="/assets/Jmw8bLP4Ko3uNsxRX78j4Ikfpkh.png" src-width="2386" src-height="828" align="center"/>

# 5F 问：清算检查的「IBOND 交易检查」是否须作处理？

**答：**可以人手检查通过提醒。如需关闭检查配置，在「业务参数设置＞日终设置＞清算前准备＞IBOND 交易检查」处理（见下图）。

<img src="/assets/P0EEbOiaXoFPT7x1MZujYTjipWb.png" src-width="2858" src-height="1610" align="center"/>

<img src="/assets/TvUkb20svoDohxxcF3pjMg5Fpp5.png" src-width="2314" src-height="1342" align="center"/>

# 5G 问：日终时数据同步出现「执行失败！市埸表配置错误」如何处理？

**答：**报错会提醒缺失那个市埸
(i). 添加市埸：「业务参数设置&gt;市埸管理&gt;市埸规则」新增相关市场配置。（见 5G 图一、图二）

(ii). 添加币种：「款项管理&gt;汇率&gt;参考汇率」的新增该市场的货币。（见 5G 图三、图四）

(iii). 日终设置加回市埸：「业务参数设置&gt;日终设置&gt;市埸交收」点击「编辑」加上市埸。（见 5G 图五、图六）

<img src="/assets/DIMIbpFz2oWrsnxBdrajpA5Ypyh.png" src-width="2852" src-height="1606" align="center"/>

<em>5G 图一</em>

<img src="/assets/AjCQb4o9UoajsVxMbTLjfOsOpOc.png" src-width="2448" src-height="1276" align="center"/>

<em>5G 图二</em>

<img src="/assets/W8iSb1xafonEr6xoiyFjbhF8ppg.png" src-width="2334" src-height="1078" align="center"/>

<em>5G 图三</em>

<img src="/assets/VAKFb0zlwocNvix9AR7jk37Ypkc.png" src-width="1926" src-height="1298" align="center"/>

<em>5G 图四</em>

<img src="/assets/UqivbN6RXozE1PxzvVnj6T98pec.png" src-width="2740" src-height="910" align="center"/>

<em>5G 图五</em>

<img src="/assets/WSgwbWn2po71yhxsZwVjhhOlpIh.png" src-width="2476" src-height="866" align="center"/>

<em>5G 图六</em>

# 5H 问：清算中检查报错，如何处理？

<img src="/assets/DkqMbXEmLoLVUAxFAD2jWT8Vplg.png" src-width="2644" src-height="1112" align="center"/>

<b>答：</b><b>确认情况是否</b><b>同股票同客户持仓在不同托管商</b>上。

在「清算管理＞清算检查＞检查结果」页面是否出现“<b>同客户、同标的跨子仓</b>”出现检查失败，因同客户及同股票在不同上手的托管商会有提醒报错。

- 方法一：确认股票放在两个不同上手的仓位，可点击「工单详情」手动通过（见 5H 图一），回到「清算管理＞日终任务」页面继续完成日终。如持仓保持在不同上手，日后的清算中检查会一直有报错提醒。
- 方法二：可在「清算管理＞仓位管理＞仓位查询」操作内部转仓，把股票放到同一上手托管商仓位（见 5H 图二）。之后回到日终任务，在清算中检查点击「重新执行」完成日终。

<img src="/assets/Xtt7bpfBpout2RxLxa0j5F3opJb.png" src-width="2512" src-height="814" align="center"/>

<em>5H 图一</em>

<img src="/assets/Fp8Jb3Xe3o8khBxQpd4jVlzXpId.png" src-width="2454" src-height="1109" align="center"/>

<em>5H 图二</em>

# 5I 问：台风天操作如何处理？（2024 年 9 月 23 日后不适用）

**答：**一般 ccass 会发通知券商延后钱或货

(i). 在「清算管理 &gt; 台风天处理」页面操作

<img src="/assets/HOQhbaVa4oFOw3xdUMIj5o2xpKc.png" src-width="2840" src-height="1410" align="center"/>

(ii). 选择「市场」及 根据 CCASS 通知选择「钱货同时延后」或「钱延后」

<img src="/assets/RQVTbTzxmoJjykxJ0MsjKCW5pnd.png" src-width="2756" src-height="1478" align="center"/>

