---
slug: X455wbGfliAlc7k7p1dckyjin7e
title: 12.0.1 结算报表（SDR 类别）
sidebar_position: 0
---


# 12.0.1 结算报表（SDR 类别）


# 12.0.1A 问：SDR070 - OTCR report 是用作什么申报？


**答：**SDR070 - OTCR report 用作申报实物股票转出及转入。不收印花税的公司行动不会在报表上显示，现金要约的会作申报。可导出 excel 上传到交易所。


# 12.0.1B 问：在场外证券交易汇报制度（OTCR）下，现金要约等企业行动是否须予汇报？


**答：**如企业行动不涉及须征收印花税的交易（例如新股发行、公开招股、供股及私有化等）或为须向联交所汇报的交易（例如由交易所参与者进行的现有股份配售），则该等企业行动不属于场外证券交易。因此，在场外证券交易汇报制度下，与此等企业行动有关的股份转移无须予以汇报。 


另一方面，若相关受规管中介人（不论是作为主事人或代理人）进行就**现金要约（此乃场外证券交易）**而作出的股份转移，该相关受规管中介人便须根据场外证券交易汇报制度就**该股份转移予以汇报**。在这情况下，该相关受规管中介人须在股份转移日（即相关受规管中介人知悉已接纳的要约获得结算当日，而该日亦为在场外证券交易汇报制度下须予汇报的股份交易日期）之后的三个香港交易日内，根据场外证券交易汇报制度向证监会汇报。


# 12.0.1C 问：SDR025 - Stock Reconciliation Report 显示的任务结果 Successful Check／Manually Confirmed／ Manually Unrecognized 是什么意思？


**答：**SDR025 的任务结果对应「清算管理＞清算检查＞检查结果」页面的任务结果栏位。

    - 检查通过，Successful Check；
    - 检查失败，点击了手动通过的 - Manually Confirmed；
    - 检查失败，未手动通过的 - Manually Unrecognized。

![image.png](/assets/77326729cac37235c6089530640cba43.png)


# 12.0.1D 问：SDR018 - Bargain Detail Report 类别的报表什么时间能看到当天的交易数据？


**答：**最快在日终任务完成「清算入账」，可以在 SDR018 报表查看当天的交易佣金资料。

> 美股的可以查看 SDR018-1 - Bargain Detail Report-US。

![image.png](/assets/f061b9e34c47db30444aba25886443d7.png)


# 12.0.1E 问：如何计算到客户每月的托管费？


答：SDR058-2 HK Custodian Fee Group by Client V2 能计算到，当中收取费率可以在「报表管理＞报表打印＞参数设置」修改。（见 12.0.1E 图一至图二）
托管费扣除使用手工调账，可以用 "按证券账号汇总" 的费用收取。（见 12.0.1E 图三）

> 其它客户费率指联名账户等其它户口。

![image.png](/assets/337013f51a4d9aad368062b36c166bc8.png)


_12.0.1E 图一_


![image.png](/assets/c7420841c9782864561b83e8a84f2344.png)


_12.0.1E 图二_


![image.png](/assets/5392f8963303e3a4b8f37c0f642964c5.png)


_12.0.1E 图三_


# 12.0.1F 问：如何查看客户每笔交易上手收的平台费和佣金？


答：

1. 先在「计费管理」的「收费场景」，新建「代理商收费 - 股票交易」计费。

![image.png](/assets/ca903a2d4cf3ec4845ad2201f63276b9.png)

1. 在相关「代理商计费 - 股票交易」设置收费。

![image.png](/assets/ba55e04f20565f0a1c4f92564c5a10ef.png)

1. 在 SDR048 - Broker Contract Details 报表查阅费用

![image.png](/assets/c42d327eaed056e7e3a17038be0297c0.png)

