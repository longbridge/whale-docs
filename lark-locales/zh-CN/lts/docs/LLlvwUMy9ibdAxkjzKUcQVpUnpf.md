---
title: 17.1 下单问题
slug: LLlvwUMy9ibdAxkjzKUcQVpUnpf
sidebar_position: 0
---


# 17.1 下单问题

# 17.1A 问：WTT 如何进行碎股交易？

答：可以在「交易页面」下碎股单（见 17.1A 图一）和「碎股撮合」（见 17.1A 图二、图三）进行碎股交易。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>碎股成交量比正股低，有机会需要挂单数天才有成交。</p>
</div>

<img src="/assets/S6OVbzeHZoZe9xxcBNbjcxWcp5b.png" src-width="2872" src-height="1792" align="center"/>

<em>17.1A 图一</em>

<img src="/assets/XA1EbJFkXo2i4pxqQFoj8wRppjc.png" src-width="2878" src-height="1740" align="center"/>

<em>17.1A 图二</em>

<img src="/assets/QPWQbglyvo8Dy8xZM7HjHqkWpOf.png" src-width="2862" src-height="1790" align="center"/>

<em>17.1A 图三</em>

# 17.1B 问：交易订单被拒绝原因为「Order Price Far Away From Reference Price」是什么？

<b>答：</b> 下单被拒原因为下单价格距离现价太远，买盘输入价格不能高于最佳沽出价 9 个价位；卖盘输入价格不能低于最佳买入价 9 个价位。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>美股窝轮暂未支持交易，会提示「该股票暂不支持交易」</p>
</div>

# 17.1C 问：前台下单的价格限制是什么？

**答：**如买入订单价格低于当前价格 24 个档位会存放在系统中，到价再放出；

高于对手价格 9 档不会存到系统，直接送出交易所，但会被交易所的价格限制下可能会被拒绝。

# 17.1D 问：如何限制客户交易虚拟资产或限制交易股票？

**答：**前台在「交易查询＞证券限制」点击右上方「新增」，把股票添加至黑名单禁止客户交易，能批量 “股票导入” 作限制。如黑名单没有添加客户，默认为全部客户不能交易。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>如个别客户能作交易可以再新建白名单，添加关联客户。以批量导入模版的股票代码，需输入：3099.hk</p>
</div>

<img src="/assets/V1YIbdZlrouSLqxbsKyjS6Xrp2b.png" src-width="2606" src-height="1526" align="center"/>

# 17.1E 问：WTT 的 “证券限制” 中，「关联地区」是根据什么区分客户？

**答：**会以客户填写的居住国家作区分；如没有，以证件签发地区分；如果也没有，会以国籍区分。

<img src="/assets/JaSjbfyr2omXhzxdZk5jZ7Ybp9c.png" src-width="2866" src-height="1332" align="center"/>

# 17.1F 问：下单后如何查到需要收取客户多少费用？

**答：**实际的费用需要完成清算后查看报表 SDR018 - Bargain Detail Report-HK。
预估的费用可以在前台下单组件右下方的「金额详情」功能查询到。

<img src="/assets/WkW2bw4hnoUlKkxJzXsjx4ZdpWg.png" src-width="2242" src-height="1122" align="center"/>

# 17.1G 问：强制平仓后，会有什么方式通知到客户？

**答：<b>App 会有推送通知（见 17.1G 图一）</b>，**在结单上也有强制平仓标示（见 17.1G 图二）。
追收保证金（margin call）也有电邮及 App 推送通知（见 17.1G 图三）。

<img src="/assets/P3nybWyU3oQMYUxQXY7jTdntpab.png" src-width="686" src-height="654" align="center"/>

<em>（17.1G 图一）</em>

<img src="/assets/MTmrbNV9AoAUq7xt0z1jPNHypBR.png" src-width="1724" src-height="306" align="center"/>

<em>（17.1G 图二）</em>

<img src="/assets/U2dibIrUjoWn9Dx9iCejaH4ypDh.png" src-width="770" src-height="1290" align="center"/>

<em>（17.1G 图三）</em>

# 17.1H 问：「待提交」订单距离市价多少价位会放出市场？

答：香港交易所的「待提交」订单会在20个档位以内放出市场。

# 17.1I问：系统能否限制自成交交易（客户自己的买盘跟自己的卖盘对盘）？

自成交交易会被限制，同一个客户双向订单，若价格是可成交的，第二笔下单会被拒绝。

