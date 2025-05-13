---
title: 7. 佣金计费问题
slug: LxIbwuET8iV363kcGINc6wHxnth
sidebar_position: 6
---


# 7. 佣金计费问题

## 7A 问：如何查询客户佣金收费？

<b>答：</b>见以下步骤，

(i). 在「业务参数设置＞计费管理＞客户计费查询」页面

<img src="/assets/XuvbboSg4oOSIyxszQ1cq4yLn0d.png" src-width="2480" src-height="1264" align="center"/>

(ii). 以「账户号码」查询客户的收费及特殊收费

> 注＊特殊收费会优先于客户设置的收费

<img src="/assets/RcadbksX0okCYLxlo8dcvh0vnlg.png" src-width="2852" src-height="1370" align="center"/>

## 7B 问：如何修改客户佣金？

<b>答：</b>在「业务参数设置＞计费管理＞客户计费配置」新建一个独立的佣金费率给客户（见 7B 图一）。

如计费套餐已有相关收费，可以在「客户组计费配置」进入详情页后，点击「管理组内客户」把客户添加进去（见 7B 图二、图三）。

> 客户计费设置取收费优先顺序：针对某个客户的设置＞普通客户组＞全局客户组。

<img src="/assets/QOzzb81Qzo87TgxwWBscQD4vnqf.png" src-width="2752" src-height="1324" align="center"/>

<em>7B 图一</em>

<img src="/assets/HZdYb8MEloj44GxAcHbcNS6WnCb.png" src-width="2504" src-height="1356" align="center"/>

<em>7B 图二</em>

<img src="/assets/NOhRb7ZSfolbICx4dBic48QAnt7.png" src-width="2168" src-height="700" align="center"/>

<em>7B 图三</em>


## 7C 问：如何修改政府杂费或佣金费率？ （客户组计费修改）

<b>答：</b>（i）在「业务参数设置＞计费管理＞客户组计费配置」页面中的“默认客户组”点击「编辑」。

<img src="/assets/WZ23bsry3oZAjHxcBN6cWI2qnCr.png" src-width="2869" src-height="1540" align="center"/>

(ii). 在操作栏中点击「编辑」修改相应的收费埸景。

<img src="/assets/FYVrbmZIlocXiCxWzsSckKQlnGh.png" src-width="2876" src-height="1628" align="center"/>

(iii). 可修改费率、最低/最高收费。

<img src="/assets/Nrb9bj8SyoeuhfxsVH2c3Xl3nMd.png" src-width="2326" src-height="1367" align="center"/>

(iv). 修改完成后点击「提交」（编辑后约 10 分钟生效）。

<img src="/assets/NS4GbF26QoSbtqxjDWUc2hVMnPe.png" src-width="2705" src-height="1436" align="center"/>

(v). 点击「客户计费查询」查询个别客户收费确认。

<img src="/assets/Th9kbrrZaobolcxAzDfcsF6YnMf.png" src-width="2599" src-height="1368" align="center"/>

(vi). 随机搜寻客户及点选修改了的收费类型查询。

<img src="/assets/ZhGnbpm50oNrrRxHenxcg26Tneg.png" src-width="2619" src-height="295" align="center"/>

## 7D 问：佣金收费／交易合约作一次性的额免或修改，可以什样处理？

<b>答：</b>执行清算任务时，完成 "清算计费" 后先暂停，拉取到客户合约数据在「清算管理 &gt; 合约管理」修改费用。

(i). 执行日终任务去到 "清算计费" 时点击「暂停一键清算」。

<img src="/assets/KISwbh4kOoyuppxhxT1cTBPHnAe.png" src-width="2496" src-height="1100" align="center"/>

(ii). 执行完成后去到「合约管理 &gt; 客户合约」页面拉取到当天账务日期的交易后，搜索客户及相应的订单，在操作栏点击「详情」

<img src="/assets/J1wlbt9gSolcO2xK0ATc5OS7nsg.png" src-width="2502" src-height="780" align="center"/>

(iii). 在「费用信息」页面相应的收费类别点击「编辑」

<img src="/assets/Z2TXbD3TQoc8WExFI7pcSWjknJc.png" src-width="2868" src-height="1457" align="center"/>

(iv). 在实收金额修改费用后点击「确定」。如收取 0.74 USD &gt; 0.01 USD

<img src="/assets/QrjhbECfaoaxXMx17XFc9G74nhp.png" src-width="2861" src-height="1618" align="center"/>

(v). 在「费用信息」页面，实收金额及应收金额费用会更新

<img src="/assets/RfLEbu0CmoNrEPxkqgvcWt4Tnoc.png" src-width="2843" src-height="1575" align="center"/>

(vi). 之后继续完成清算，费用会作调整及结单会显示更新的费用

## 7E 问：计算精度的 Contract、Order、Trade done 如何区分？

<b>答：</b>Contract、Order、Trade done 见以下例子说明。

- 如：想合单计算，选 Contract，会按客户当天买同一只股票的总交易金额计算佣金
- 则：客户下单 3 次 10000，合成 30000 计算一次佣金

- 如：平台费逐条订单计算，选 Order，会按客户下单次数计算
- 则：客户下单 3 次 10000，逐笔计算 会收取 3 次平台费

- 如：收取政府杂费，选 Trade done，会按订单成交的次数计算
- 则：客户下单 3 次 10000，每笔分了 3 次成交，会逐条成交计算税花税，总共计算 9 次费用

> 选了 Contract 是依照合约进行计费。如果没开启合单功能，一个 Contract 对应的是一个 Order；如果已经开启了合单功能，多个 Order 才会合并成一个 Contract 计算（见 7E 图一），这样 Contract 和按 Order 才有差别

<img src="/assets/W70VbDunroTZCNxQPuXcQ9BunAK.png" src-width="2578" src-height="1229" align="center"/>

<em>7E 图一</em>

## 7F 问：特殊收费的设置如何影响到客户？

<b>答：</b>全局客户组设置了特殊收费，所有客户都会依据该特殊收费计算佣金。如把客户添加到普通客户组，需要在这套餐添加特殊收费才能覆盖掉全局的设置。

<img src="/assets/A4Mobr0NJoGf08xG5IrcZlDynjg.png" src-width="2464" src-height="1368" align="center"/>

<img src="/assets/XsUrbcX4foBHJgxZ8lsct3dWnDd.png" src-width="2134" src-height="1354" align="center"/>

## 7G 问：全局客户组为什么看不到客户数量和组内的客户？

<b>答：</b>全局客户组理论上配置到所有客户，所以没有显示到数量及组内客户。在普通客户组能看到数量及组内客户。

<img src="/assets/UnydbvGTio0o0qxFC8IcQqvGncc.png" src-width="2496" src-height="1180" align="center"/>

<img src="/assets/PMVabUdZ8oKPJGx97ekc94cUnod.png" src-width="2160" src-height="700" align="center"/>

## 7H 问：暗盘平台费和正常交易平台费能否分开计算？

答：在「业务参数设置＞计算管理＞客户组计费配置」相关客户组点击「编辑」（见 7H 图一），然后在平台费收费点击「编辑」。（见 7H 图二）
在“特殊收费”点击「添加」，“订单类型”选择「暗盘」后并输入收费资料。（见 7H 图三）

<img src="/assets/BcNybt9EboDqzkxJaLIceaHDnmf.png" src-width="2866" src-height="1606" align="center"/>

<em>7H 图一</em>

<img src="/assets/Qe1lbiWHoo2rcSxwiO3cxiZenEd.png" src-width="2790" src-height="1386" align="center"/>

<em>7H 图二</em>

<img src="/assets/WELwbbklhol38RxG7Xdc1XJ7nOc.png" src-width="2864" src-height="1618" align="center"/>

<em>7H 图三</em>

## 7I 问：收费渠道 Longport，Pro，App，Web，WTT 的分别表示什么？

答：Longport 是公版 App；Pro 是豪华版 Longport Pro；App 是白标 App；Web 是网页版 Web Trade；WTT 是前台 Whale Trade Terminal。

<img src="/assets/Uwgmbd6cwo6xA6xxgBwcMdTznCh.png" src-width="2728" src-height="1370" align="center"/>

## 7J 问：如何添加开户时所选的计费套餐？

答：在「业务参数设置＞计费管理＞机构计费」对应的 "默认用户组" 点击「编辑」（见 7J 图一），在 "可选客户组" 添加「客户组计费配置」已建立的计费套餐，之后在计费套餐可选择（见 7J 图二）。

<img src="/assets/PPVpbYpwCoRGvWxHGrOcKxvPnNg.png" src-width="2726" src-height="1408" align="center"/>

<em>7J 图一</em>

<img src="/assets/ItqabGJSyoye5sxXCWhcrIr2nfd.png" src-width="2126" src-height="1410" align="center"/>

<em>7J 图二</em>

## 7K 问：App「我的费率」佣金计费的取值逻辑是什么？

答：取值逻辑先后次序如下：

1. 「客户计费」佣金特殊收费中的「条件」（「条件」在「收费渠道」有设置了「APP」才会显示）
2. 「客户组计费」佣金特殊收费中的「条件」
3. 「全局客户组计费」佣金特殊收费中的「条件」
4. 「客户计费」佣金特殊收费
5. 「客户组计费」佣金特殊收费
6. 「全局客户组计费」佣金特殊收费

此外，可以在「了解示例」中为客户提供更多「费率」资讯，而后台「帮助中心」可以修改「了解示例」中的内容。

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

 

