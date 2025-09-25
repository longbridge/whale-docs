---
title: 17.1 下单问题
slug: LLlvwUMy9ibdAxkjzKUcQVpUnpf
sidebar_position: 0
---


# 17.1 下单问题

## 17.1A 问：WTT 如何进行碎股交易？

答：可以在「交易页面」下碎股单（见 17.1A 图一）和「碎股撮合」（见 17.1A 图二、图三）进行碎股交易。

> 碎股成交量比正股低，有机会需要挂单数天才有成交。

<img src="/assets/Exybbau8TohOENxOxh2czsmcnDe.png" src-width="2872" src-height="1792" align="center"/>

<em>17.1A 图一</em>

<img src="/assets/S3SEbdNYIop3wkxx2wQcclXCnXb.png" src-width="2878" src-height="1740" align="center"/>

<em>17.1A 图二</em>

<img src="/assets/OOHJbtu2Vo6ksoxkhFfc63Grnie.png" src-width="2862" src-height="1790" align="center"/>

<em>17.1A 图三</em>


## 17.1B 问：交易订单被拒绝原因为「Order Price Far Away From Reference Price」是什么？

<b>答：</b> 下单被拒原因为下单价格距离现价太远，买盘输入价格不能高于最佳沽出价 9 个价位；卖盘输入价格不能低于最佳买入价 9 个价位。

> 美股窝轮暂未支持交易，会提示「该股票暂不支持交易」

## 17.1C 问：前台下单的价格限制是什么？

<b>答：</b>如买入订单价格低于当前价格 24 个档位会存放在系统中，到价再放出；

高于对手价格 9 档不会存到系统，直接送出交易所，但会被交易所的价格限制下可能会被拒绝。

## 17.1D 问：如何限制客户交易虚拟资产或限制交易股票？

<b>答：</b>前台在「交易查询＞证券限制」点击右上方「新增」，把股票添加至黑名单禁止客户交易，能批量“股票导入”作限制。如黑名单没有添加客户，默认为全部客户不能交易。

> 如个别客户能作交易可以再新建白名单，添加关联客户。
以批量导入模版的股票代码，需输入：3099.hk

<img src="/assets/AFSkbVYrdoeeKfxD4tkcXM43n7b.png" src-width="2606" src-height="1526" align="center"/>

## 17.1E 问：WTT 的“证券限制”中，「关联地区」是根据什么区分客户？

<b>答：</b>会以客户填写的居住国家作区分；如没有，以证件签发地区分；如果也没有，会以国籍区分。

<img src="/assets/JZQmbuy2SolibOxFEueccBGun4f.png" src-width="2866" src-height="1332" align="center"/>

## 17.1F 问：下单后如何查到需要收取客户多少费用？

<b>答：</b>实际的费用需要完成清算后查看报表 SDR018 - Bargain Detail Report-HK。
预估的费用可以在前台下单组件右下方的「金额详情」功能查询到。

<img src="/assets/VGeqbkAh6ooLqWx2utkcLT27nVf.png" src-width="2242" src-height="1122" align="center"/>

## 17.1G 问：强制平仓后，会有什么方式通知到客户？

<b>答：</b>App 会有推送通知（见 17.1G 图一）<b>，</b>在结单上也有强制平仓标示（见 17.1G 图二）。
追收保证金（margin call）也有电邮及 App 推送通知（见 17.1G 图三）。


<img src="/assets/Fi8cbwXYPoCKzLxii98cHMY6nYe.png" src-width="686" src-height="654" align="center"/>

<em>（17.1G 图一）</em>

<img src="/assets/Rf8gbRygMoGdbMxEM5wcP6d0nwh.png" src-width="1724" src-height="306" align="center"/>

<em>（17.1G 图二）</em>

<img src="/assets/B83ub6V6zoxTHQxk4ZBc4Dignuf.png" src-width="770" src-height="1290" align="center"/>

<em>（17.1G 图三）</em>

## 17.1H 问：「待提交」订单距离市价多少价位会放出市场？

答：香港交易所的「待提交」订单会在 20 个档位以内放出市场。

## 17.1I 问：系统能否限制自成交交易（客户自己的买盘跟自己的卖盘对盘）？

答：自成交交易会被限制，同一个客户双向订单，若价格是可成交的，第二笔下单会被拒绝。

## 17.1J 问：能否设置 VA 产品的交易限额？

答：可以在「证券限额」批量上传相关产品的代码，然后限额代码选择 SDB，最后选择限制的交易金额。

## 17.1K 问：美股沽空前期配置？

答：1.客户权限

客户端填了对应的问卷，这边才会有卖空的权限：

<img src="/assets/XmwrbAYUxoFEj2xIZnJcT77LnPd.png" src-width="2966" src-height="1670" align="center"/>

2.股票空头保证金

<img src="/assets/Ly2kbr6zYoEl8OxjQrgcb65Vnib.png" src-width="2968" src-height="1662" align="center"/>

3.客户空头保证金

<img src="/assets/Fo7LbAKxMoNAjNxSUT3cCNmIn9d.png" src-width="2962" src-height="1422" align="center"/>

4.业务参数配置 - 融券配置

<img src="/assets/Ha9jbJWWRopjV8xi5IpcDEVTnLc.png" src-width="2954" src-height="1654" align="center"/>

<img src="/assets/CfYfb6zyconR79xoW6acXZfbn7q.png" src-width="2962" src-height="1530" align="center"/>

融资利息=卖空市值*融券费率

融券利息=（卖空数量*收市价*融券结算价转化系数）*Max（IB 提供的融券费率*系数乘 + 系数加，0.03）/365

max=（IB 提供的融券费率*系数乘 + 系数加，0.03）就是下图的【对客费率（%）】，IB 提供的融券费率就是下图中的【原费率（%）】

<img src="/assets/LlMwbtlSxojmXBxXBXmc7fytncc.png" src-width="2956" src-height="456" align="center"/>

5.融券管理 - 融券费率管理

下图的结果就是根据 4 配置得到结果，可以二次编辑对客费率。

<img src="/assets/CwICbBXnmolwMtx7n0AcgRihnSG.png" src-width="2938" src-height="1666" align="center"/>

6.融券费率场景配置

<img src="/assets/OVAcb1zVVoeoJqxESpwc7NTGn3b.png" src-width="2960" src-height="586" align="center"/>

7.融券利息需要后算

<img src="/assets/MVPqbaAzYowyGaxc5Rfck2DbnPe.png" src-width="2944" src-height="986" align="center"/>

8.帮助中心文章检查

<img src="/assets/IwBdbMUVhoeV9nxsJvYcRZrenug.png" src-width="2954" src-height="426" align="center"/>

