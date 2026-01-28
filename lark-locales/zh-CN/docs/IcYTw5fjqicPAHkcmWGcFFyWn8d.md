---
title: 8. 债券处理问题
slug: IcYTw5fjqicPAHkcmWGcFFyWn8d
sidebar_position: 7
---


# 8. 债券处理问题

# 8A 问：如何处理债券进出？

**答：**债券买入或卖出需要使用手工调账方式处理，调账前请在「私有标的库」建立标的代码。

(i). 在「证券管理＞标的管理＞私有标的库」页面点击「新增标的」添加债券或外国股票

<img src="/assets/ScFvb8PI6o0iJ9xqmLejuag1pqg.png" src-width="2594" src-height="1289" align="center"/>

(ii). 打红色星号（*）为必需填写部份

<img src="/assets/EBVHbn723ov9OOxu96KjOVUwpRb.png" src-width="2114" src-height="1352" align="center"/>

(iii). 在操作栏点击「基础行情」作修改基础资料 或 点击「行情维护」录入价格会在结单的收盘价显示

<img src="/assets/DlhUbtC1DobEvKxx27ojjBBEpVf.png" src-width="2014" src-height="520" align="center"/>

<img src="/assets/NBZsbB1UVoL0MlxDhzCjYMippZf.png" src-width="2535" src-height="1552" align="center"/>

<em>市埸、类型、证券代码不能作修改</em>

(iv). 市值修改在「行情维护」页面点击「新增行情」

<img src="/assets/WQ09bG8tAoxF1bxWNa7jjd9vpnf.png" src-width="2241" src-height="1231" align="center"/>

(v). 输入代码、选择交易日、收盘价，点击「确定」。新增后可「编辑」修正收盘价。

<img src="/assets/RiK9biScuo65rlxf4QujSKp4pWg.png" src-width="2242" src-height="1302" align="center"/>

(vi). 设置债券标的后，在「资产账户＞手工调账＞债券」页面点击「新建」作债券出入仓。

<img src="/assets/StzSb8J91oCdYPxN2vRjQkZcprc.png" src-width="2580" src-height="1206" align="center"/>

(vii). 打星号（*）为必需填写部份，点击「提交审核」。（调账类型：`入账 = 买入`；`出账 = 卖出`）

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>首次的债券调账需要输入总成本价。如：交易总额为 <code>$500,000</code>、数量为 <code>5,000</code>。总成本价输入 <code>$500,000</code>、结单上的成本价以摊薄成本价显示 <code>= ＄100</code></p>
</div>

<img src="/assets/I739bi2qpoCyNCxuqdxjj44bpMj.png" src-width="2104" src-height="1352" align="center"/>

(viii). 审核人员在右上角「审批」有提醒，之后点击「通过」

<img src="/assets/CS2oboKE6oOrkGx7ibjj4GtKp0g.png" src-width="2589" src-height="881" align="center"/>

<img src="/assets/Lhg2b48HFoaS3Ixg6RRjw1rWpif.png" src-width="2542" src-height="1479" align="center"/>

(ix). 在「资产账户＞账户明细＞债券」页面看到流入债券。卖出显示为流出。

<img src="/assets/RYUBbKHuJo3iYPxfi28jPN6jp4b.png" src-width="2852" src-height="716" align="center"/>

# 8B 问：为什么债券的价格没有在结单上更新？

<b>答：</b> 需要在「证券管理＞标的管理＞行情维护」页面编辑行情才会在结上会反映（见 8B 图一、图二）。

如在清算前没有作维护，需清算撤销处理（结单可不操作、资产类不操作、补单不操作），新增／编辑行情后（见 8B 图三），重跑日终更新收盘价。

<img src="/assets/JKuSbPzdBovp2Gxn2tLjoyfupwb.png" src-width="2506" src-height="776" align="center"/>

<em>8B 图一</em>

<em>在「行情维护」页面点击「新增行情」</em>

<img src="/assets/YXJQbgu8zoBCs3xLQWJjfOPXp7g.png" src-width="2242" src-height="1302" align="center"/>

<em>8B 图二</em>

<em>输入股票代码、选择交易日、收盘价，点击「确定」</em>

<img src="/assets/QZfKbPMVcoWhnsx53gWjVed1pyC.png" src-width="2249" src-height="600" align="center"/>

<em>8B 图三</em>

<em>如行情价格有误可作「编辑」</em>

# 8C 问：结单上的成本、价格、持仓市值是什么计算？

**答：**结单成本计算是用摊薄成本： （总买入金额 - 总卖出金额）/ 持有数量 。债券「行情维护」的收盘价在结单上显示的是价格，成本是前面提供的摊薄成本。持仓市值是持仓股数 x 收盘价。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>基金的收盘价则是取「净值表」的价格。</p>
</div>

注＊调帐进去的金额就是买卖金额 如果调帐有设定总成本价就以设定为准，否则会以收盘价计算（价格*数量）。

<img src="/assets/PE9XbvgRaoUx5wxoiTLjnoYjpkh.png" src-width="1368" src-height="260" align="center"/>

