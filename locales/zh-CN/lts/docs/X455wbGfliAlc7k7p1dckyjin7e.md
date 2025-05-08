---
title: 12.0.1 结算报表（SDR 类别）
slug: X455wbGfliAlc7k7p1dckyjin7e
sidebar_position: 0
---


# 12.0.1 结算报表（SDR 类别）

## 12.0.1A 问：SDR070 - OTCR report 是用作什么申报？

<b>答：</b>SDR070 - OTCR report 用作申报实物股票转出及转入。不收印花税的公司行动不会在报表上显示，现金要约的会作申报。可导出 excel 上传到交易所。

## 12.0.1B 问：在场外证券交易汇报制度（OTCR）下，现金要约等企业行动是否须予汇报？

<b>答：</b>如企业行动不涉及须征收印花税的交易（例如新股发行、公开招股、供股及私有化等）或为须向联交所汇报的交易（例如由交易所参与者进行的现有股份配售），则该等企业行动不属于场外证券交易。因此，在场外证券交易汇报制度下，与此等企业行动有关的股份转移无须予以汇报。 

另一方面，若相关受规管中介人（不论是作为主事人或代理人）进行就<b>现金要约（此乃场外证券交易）</b>而作出的股份转移，该相关受规管中介人便须根据场外证券交易汇报制度就<b>该股份转移予以汇报</b>。在这情况下，该相关受规管中介人须在股份转移日（即相关受规管中介人知悉已接纳的要约获得结算当日，而该日亦为在场外证券交易汇报制度下须予汇报的股份交易日期）之后的三个香港交易日内，根据场外证券交易汇报制度向证监会汇报。

## 12.0.1C 问：SDR025 - Stock Reconciliation Report 显示的任务结果 Successful Check／Manually Confirmed／ Manually Unrecognized 是什么意思？

<b>答：</b>SDR025 的任务结果对应「清算管理＞清算检查＞检查结果」页面的任务结果栏位。
- 检查通过，Successful Check；
- 检查失败，点击了手动通过的 - Manually Confirmed；
- 检查失败，未手动通过的 - Manually Unrecognized。

<img src="/assets/GJa1bRLIxoRRssxVesQc0xXknIh.png" src-width="2074" src-height="850" align="center"/>

## 12.0.1D 问：SDR018 - Bargain Detail Report 类别的报表什么时间能看到当天的交易数据？

<b>答：</b>最快在日终任务完成「清算入账」，可以在 SDR018 报表查看当天的交易佣金资料。

> 美股的可以查看 SDR018-1 - Bargain Detail Report-US。

<img src="/assets/ZQuSbTdpGo2HmNxFcZ3crSILnBb.png" src-width="2246" src-height="1486" align="center"/>

## 12.0.1E 问：如何计算到客户每月的托管费？

答：SDR058-2 HK Custodian Fee Group by Client V2 能计算到，当中收取费率可以在「报表管理＞报表打印＞参数设置」修改。（见 12.0.1E 图一至图二）
托管费扣除使用手工调账，可以用 "按证券账号汇总" 的费用收取。（见 12.0.1E 图三）

> 其它客户费率指联名账户等其它户口。

<img src="/assets/XcdKbPk5LoYo14xCRdTc7Jz8nSC.png" src-width="2712" src-height="986" align="center"/>

<em>12.0.1E 图一</em>

<img src="/assets/CngRbkDlNoW3PHxz4b0cJjetnqd.png" src-width="2384" src-height="922" align="center"/>

<em>12.0.1E 图二</em>

<img src="/assets/Tg00bofhToJ1wYxEKDRceAS1njf.png" src-width="2392" src-height="406" align="center"/>

<em>12.0.1E 图三</em>

## 12.0.1F 问：如何查看客户每笔交易上手收的平台费和佣金？

答：

1. 先在「计费管理」的「收费场景」，新建「代理商收费 - 股票交易」计费。

<img src="/assets/Jaopb82RMoB2jNxtRC9ckKCNnYf.png" src-width="2866" src-height="1610" align="center"/>

1. 在相关「代理商计费 - 股票交易」设置收费。

<img src="/assets/OIFSbw5J4ofcdjxYKiEc0AmYnWc.png" src-width="2836" src-height="1430" align="center"/>

1. 在 SDR048 - Broker Contract Details 报表查阅费用

<img src="/assets/DF3nbcSjLoZKb7xjaBgcqPhSnph.png" src-width="2848" src-height="1214" align="center"/>

