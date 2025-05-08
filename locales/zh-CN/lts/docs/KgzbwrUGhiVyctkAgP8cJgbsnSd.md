---
title: 5. 清算问题
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. 清算问题

## 5A 问：清算能重跑昨天的数据？

<b>答：</b>在「清算管理＞清算撤销」页面点击「新增」，不能跳过账务日，需一天一天撤回。（见 5A 图一）

<img src="/assets/W8lRbtJwyoppPVxc7WmcpbcpnUd.png" src-width="2390" src-height="1420" align="center"/>

<em>5A 图一</em>

<em>如不用重新计算利息／交收数据，资产类回撤可选不操作</em>

## 5B 问：为什么操作提前交收没反应？

<b>答：</b>提前交收需要完成日终后操作，如下日为假期操作会有报错提醒：市埸日历不存在

<img src="/assets/QoB8bjR8yoZCwDxXjLKcENCXnod.png" src-width="2504" src-height="1006" align="center"/>

## 5C 问：半日市清算需要什么操作／注意？

<b>答：</b>最早当天 2 点在「清算管理＞日终任务」点击「提前日切」可提早进行清算 或 等到系统截数时间（如：4 点半）后操作。

<img src="/assets/QAa8bFUE8oVfXkxeYcechht8nXg.png" src-width="2183" src-height="384" align="center"/>

## 5D 问：日终 "清算前准备" 有报错提醒如何处理？

<img src="/assets/P4yobnuJPoDpfvxShqpc4MzonEc.png" src-width="2220" src-height="380" align="center"/>

<b>答：</b>弹出提醒信息检查后没问题，作「手动审核」通过。

<img src="/assets/N99ab1Rlto0SSKxOnjXcTMqBnHe.png" src-width="2110" src-height="172" align="center"/>

<img src="/assets/YUU6b16BdoORhOxtfDIckXsNnFd.png" src-width="2040" src-height="162" align="center"/>

<img src="/assets/VNV2bUB3aos4ThxzEGHcPUsZnid.png" src-width="2752" src-height="1354" align="center"/>

<em>5D 图一</em>

<img src="/assets/YymQbTCGuoUyLPxpuIzcsqJLnpX.png" src-width="2656" src-height="294" align="center"/>

<em>5D 图二</em>

## 5E 问：清算前准备出现「前台流水全部纳入清算」的提醒，如何处理？

<img src="/assets/OHFHbxDKToY316xlF1dc7LienRh.png" src-width="1373" src-height="1124"/>

<b>答：</b>检查流水是否在系统清算时间后操作。在「清算管理＞流水管理」页面选持仓／资金流水点击「编辑日期」，改回当天账务日期。完成日终后，当天结单会显示到该流水。

> 如不用在当天结单显示流水，可保持原来的账务日，不作修改，点击通过继续日终。

<img src="/assets/S0MXbrhojotR2KxfcOqcyFiknof.png" src-width="2386" src-height="828" align="center"/>

## 5F 问：清算检查的「IBOND 交易检查」是否须作处理？

<b>答：</b>可以人手检查通过提醒。如需关闭检查配置，在「业务参数设置＞日终设置＞清算前准备＞IBOND 交易检查」处理（见下图）。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/C9Q8b85qnomMl5x9sF8cS2BonQh.png" src-width="2858" src-height="1610" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/N93hbpsVmoT6sbx0TVzctxvCnHe.png" src-width="2314" src-height="1342" align="center"/>
</div>
</div>

## 5G 问：日终时数据同步出现「执行失败！市埸表配置错误」如何处理？

<b>答：</b>报错会提醒缺失那个市埸
（i）。添加市埸：「业务参数设置&gt;市埸管理&gt;市埸规则」新增相关市场配置。（见 5G 图一、图二）

(ii). 添加币种：「款项管理&gt;汇率&gt;参考汇率」的新增该市场的货币。（见 5G 图三、图四）

(iii). 日终设置加回市埸：「业务参数设置&gt;日终设置&gt;市埸交收」点击「编辑」加上市埸。（见 5G 图五、图六）

<img src="/assets/CjSib3J3OoJosFxpbDgcqCUlnWf.png" src-width="2852" src-height="1606" align="center"/>

<em>5G 图一</em>

<img src="/assets/IZtlbOHcZoX7O3xH8sYc9Rdjnhb.png" src-width="2448" src-height="1276" align="center"/>

<em>5G 图二</em>

<img src="/assets/XRbobPCEco1HyVxi4W3cGa04nRh.png" src-width="2334" src-height="1078" align="center"/>

<em>5G 图三</em>

<img src="/assets/Dy7AbL0dfokMjoxk1iGccY3Hnpl.png" src-width="1926" src-height="1298" align="center"/>

<em>5G 图四</em>

<img src="/assets/A5pebvI6JoYYv8xreIJcBPu3nif.png" src-width="2740" src-height="910" align="center"/>

<em>5G 图五</em>

<img src="/assets/Vw53b87Ago08Ybx9YJ4c0hvjnBh.png" src-width="2476" src-height="866" align="center"/>

<em>5G 图六</em>

## 5H 问：清算中检查报错，如何处理？

<img src="/assets/ERU0b1bs3oLARGxLNGUc5zglnke.png" src-width="2644" src-height="1112" align="center"/>

<b>答：</b>确认情况是否<b>同股票同客户持仓在不同托管商</b>上。

在「清算管理＞清算检查＞检查结果」页面是否出现“<b>同客户、同标的跨子仓</b>”出现检查失败，因同客户及同股票在不同上手的托管商会有提醒报错。

- 方法一：确认股票放在两个不同上手的仓位，可点击「工单详情」手动通过（见 5H 图一），回到「清算管理＞日终任务」页面继续完成日终。如持仓保持在不同上手，日后的清算中检查会一直有报错提醒。 
- 方法二：可在「清算管理＞仓位管理＞仓位查询」操作内部转仓，把股票放到同一上手托管商仓位（见 5H 图二）。之后回到日终任务，在清算中检查点击「重新执行」完成日终。

<img src="/assets/L5bWbfoxWozueRxxs1ncbUb5nod.png" src-width="2512" src-height="814" align="center"/>

<em>5H 图一</em>

<img src="/assets/VDGabF7gJocWm2xsilackweCnHg.png" src-width="2454" src-height="1109" align="center"/>

<em>5H 图二</em>

## 5I 问：台风天操作如何处理？（2024 年 9 月 23 日后不适用）

<b>答：</b>一般 ccass 会发通知券商延后钱或货


(i). 在「清算管理 &gt; 台风天处理」页面操作

<img src="/assets/SJgAbqZNtoQO7XxZvdscENQnnUh.png" src-width="2840" src-height="1410" align="center"/>

(ii). 选择「市场」及 根据 CCASS 通知选择「钱货同时延后」或「钱延后」

<img src="/assets/RvgPbNFZeo1iQTxyoFvc2Warnwe.png" src-width="2756" src-height="1478" align="center"/>

