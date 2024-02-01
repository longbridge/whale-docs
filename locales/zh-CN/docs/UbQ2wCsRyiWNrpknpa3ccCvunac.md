---
title: 快速上手
slug: UbQ2wCsRyiWNrpknpa3ccCvunac
sidebar_position: 1
---


# 快速上手

# 概述

Whale 新股认购系统全面支持券商处理客户新股认购流程，包括新股信息管理、认购配置、订单管理、中签分配等全流程的管理。

针对即将上市的新股，快速配置即可支持客户线上进行新股认购。

# 快速上手

## 一、开启认购

以港股现金认购为例，经过几分钟快速的配置，即可支持客户线上进行新股认购。

### 1.1 现金认购配置

若券商打算对某一个 IPO 开启客户申购，那么需要手动开启，并进行一些基础的费率、时间设置。

**步骤一：查看新股列表**

当有新股公告时，系统会透过行情自动同步数据，会默认记录在『未开启认购』列表中，方便券商查看与配置。对于未开启认购的新股，点击『详情』，进行新股配置。

<img src="/assets/R5X2bv3dLoTITkxvIBNcMyN9nof.png" src-width="3804" src-height="1832" align="center"/>

**步骤二：开启认购**

1. 点击新股列表的『详情』，则进入配置页面，进入页面后，默认为“不可认购”，如下图。
2. 单选，选择『是』，再进行保存，则开启认购，开启后默认只能现金认购。
3. 此处设置完成，即现金认购开启完成

<img src="/assets/STWsbR9OfohcXzxu7RRcPJVinJb.png" src-width="3782" src-height="1764" align="center"/>

### 1.2 融资认购配置

若券商对该新股需要开启『融资认购』，那么需要设定融资池，**若不开启，则无需此设置**。

**步骤一：新建融资池**

-**基础信息**

点选『融资认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="/assets/I9WwbUCvqoZJ9YxV2PBcBiY9nwh.png" src-width="3776" src-height="1816" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

<img src="/assets/RvBub9Z6uo8623xSU1CcIo3Snlc.png" src-width="3296" src-height="1802" align="center"/>

**-更多配置**

点击『更多配置』，则可进行个性化设置。

❤ Tips: 

1. 『更多配置』中的配置数据，一般为须特别控制的信息，非必填。
2. 可见用户群体：默认为全部客户，若券商有运营系统的用户分群功能，那么可以指定这个融资只给部分客户开放。
3. 上下限股数用于控制客户的可认购股数范围。

<img src="/assets/ULwWbW0GNoDCEYx8Wh7c8cP0nld.png" src-width="3288" src-height="1808" align="center"/>

**-客户分群配置**

融资池可设置多个分群规则，配合运营要求，例如：

1. A 客户群体只能最多申购 10000 股；
2. B 客户群体最多可以申购 100000 股。

<img src="/assets/Tfm5bIeugofo97xIjP9cVYH3n0b.png" src-width="3766" src-height="1834" align="center"/>

**步骤二：融资池审批**

提交审批后，融资池为默认『待审批』状态，审批成功后，才会生效。

❤ Tips: 

融资池审批有两个审批入口：

1. 融资池列表
2. 融资池审批页面

<img src="/assets/XsDabcQkco29O4xpLzYc2ZmKncg.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 融资池审批</p>
</div>

<img src="/assets/Wqd2bDApMoSFOpxI2bHcjeOEnzS.png" src-width="3744" src-height="1290" align="center"/>

点击『审批』按钮，查看工单详情，审批通过后，融资池生效。

<img src="/assets/HutgbiqmBosx51xzuFccHqM7n9W.png" src-width="3274" src-height="1824" align="center"/>

### 1.3 零本金认购配置

若券商对该新股需要开启『0 本金认购』，那么需要设定 0 本金认购的融资池，若不开启，则无需此设置。

0 本金认购为一种比较特殊的认购方式，提供给客户的融资比例只能为 100%，即客户不需要任何本金，就可以认购 IPO。

**步骤一：新建融资池**

-**基础信息**

点选『0 本金认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="/assets/V4fEbeb7hocWGNxGwPxcW3OmnTc.png" src-width="3056" src-height="1840" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

❤ Tips: 

此处设置，与融资认购设置相似，只是**不需要填选融资比例**，固定为 100%，更详细操作参考：

**1.2 融资认购设置**。

<img src="/assets/Lhi7bI1lqo3MOYx70pQcTQctn1c.png" src-width="3258" src-height="1814" align="center"/>

## 二、认购截止扣款

当 IPO 认购截止后，券商需要把确认好的 IPO 订单资料交给港交所或其他上手，此时对客户的有效认购订单进行扣款认购金额及认购手续费的操作，并发放一定的融资金额。

扣款操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO 详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<img src="/assets/WZ6PbkMjjolvyWxokXAcVgSIn7g.png" src-width="3280" src-height="860" align="center"/>

<img src="/assets/IxFRbGxHKoe9aixj6zjcGHmAnJe.png" src-width="3286" src-height="1574" align="center"/>

**步骤一：点击扣款，确认订单范围**

点击扣款后，会展示待扣款的订单范围，确认并选择订单范围，再进行下一步操作。

<img src="/assets/Hm4KbcVFQoyv30xXPD1cK48ynAg.png" src-width="3304" src-height="1820" align="center"/>

**步骤二：核对扣款订单明细**

系统会自动根据认购订单、费用、融资比例等计算出预览数据，如下图，操作人员需要核对相关的数据，并提交审核。

<img src="/assets/H8HjbPCYEog4f2xXvkKctacvnTe.png" src-width="3298" src-height="1836" align="center"/>

**步骤三：扣款审批**

扣款审批有两个入口：

1. 专门的扣款审批页面：可查看历史的扣款申请、审批记录。
2. 工单记录：有审批权限的人，直接可在**待办工单**中操作审批。

点击『审批』，则可查看工单，审批通过即可

<img src="/assets/LvX3bUtNnopNBDxuYuYcK8rOnPg.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/KexhbGNlvoNtDnx3EiRcVFRHnXc.png" src-width="3302" src-height="1844" align="center"/>

## 三、订单提交上手

对于已经确认扣款成功的 IPO 认购订单，券商需要把订单提交给上手或港交所，一般来讲，通过港交所做的 IPO 为 CCASS 文件，通过其他上手做的 IPO 一般需要线下 Excel 或 CSV 进行文件传输。

### 3.1 **已配置 FINI**

若券商已配置采用新的** FINI 平台**，Whale 系统将直接以 API 的方式将**IPO 订单直接同步给港交所**，则无需此操作。

### 3.2 **未配置 FINI**

**步骤一：选择订单类型**

根据渠道或融资比例，选择指定的订单类型，点击『生成文件』按钮。

这里建议相同上手的数据，生成同一份文件。

例如：

1. 融资是通过某一银行做的，不直接通过港交所，那么单独选择，生成 CSV 文件。
2. 现金、0 成本打新是通过港交所做的，那么一起选择，生成 CCASS 文件。

<img src="/assets/J4Hwb9v7Co0D8VxA4sgcMQ7Mn9e.png" src-width="3288" src-height="1318" align="center"/>

**步骤二：生成指定文件**

弹出侧拉弹窗后，选择**文件格式**，并自定义**文件名**，点击『生成并下载』即可。

<img src="/assets/WcSHbs7qAopTnHxySTUc24IVnmc.png" src-width="3302" src-height="1844" align="center"/>

## 四、公布中签

一般在上市前一个交易日，会完成中签结果公布，系统需要对客户完成中签结果操作，中签股票需要在当日到帐。

对于中签的客户：将退还认购金额，回收提供的 IPO 融资金额，扣除 IPO 融资利息，额外扣除中签款、中签费，发放中签的新股。

对于未中签的客户：将退还认购金额，回收提供的 IPO 融资金额，同时扣除 IPO 融资利息

中签操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO 详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<img src="/assets/TL73buAM5o2sUwxTGALcGK1dnD1.png" src-width="3282" src-height="720" align="center"/>

<img src="/assets/R8t5bJBXto02Bux35macYL4dnAg.png" src-width="3284" src-height="1590" align="center"/>

**步骤一：点击公布中签，核对数据**

点击公布中签后，首先需要券商确认好以下数据，若信息无误，则直接点击『下一步』即可。

1. IPO 价格：一般情况系统会自动获取，券商二次确认即可，若 IPO 价格系统自动获取是异常的，操作人也可以人工填写
2. 客户的计息天数：默认计息天数为中签日 - 认购截止日的差值（与港交所时间一致），操作者亦可自行修改。

<img src="/assets/WB4sbErc6o8TJpxIdqDcefB9n3d.png" src-width="3306" src-height="1820" align="center"/>

**步骤二：选择中签方式**

IPO 系统提供多种中签方式，券商可根据实际情况选择不同的中签方式。

<table header_row="1">
<colgroup>
<col width="189"/>
<col width="522"/>
</colgroup>
<thead>
<tr>
<th><p><strong>中签方式</strong></p></th><th><p><strong>中签方式说明</strong></p></th></tr>
</thead>
<tbody>
<tr>
<td><p>港交所 CCASS 中签结果</p></td><td><p><strong>通过港交所做的 IPO</strong><br/>CCASS 的中签结果，下载下来，直接上传 CCASS 结果即可。</p></td></tr>
<tr>
<td><p>自定义 CSV 文件</p></td><td><p><strong>不是通过港交所做的 IPO，而是通过银行或其他上手做的</strong><br/>一般情况上手把中签结果给一份 CSV 或 Excel 文件，需要操作人把对应结果文件转化为系统可识别的字段，再进行上传。</p></td></tr>
<tr>
<td><p>FINI 中签结果</p></td><td><p><strong>通过港交所做的 IPO</strong><br/>FINI 平台的中签结果，下载下来，直接上传即可。</p></td></tr>
<tr>
<td><p>自动获取上手中签结果</p></td><td><p><strong>以长桥香港为上手做的 IPO，可以系统化自动获取</strong><br/>选择后，直接点击『下一步』，那么系统将自动拉取结果。</p></td></tr>
<tr>
<td><p>自动获取 FINI 中签结果</p></td><td><p><strong>通过港交所 FINI - API 自动做的 IPO 订单</strong><br/>选择后，直接点击『下一步』，那么系统将自动拉取结果。</p></td></tr>
</tbody>
</table>

**上传自定义 CSV 文件**

1. 下载示例模板，模板如下：
    1. Order：代表 IPO 系统的订单号
    2. APPLY：代表该订单客户申请了多少股
    3. SUCCESS：代表客户中签了多少股

<img src="/assets/YIxAbwjpLoLzQ8xvdHRcm79knsc.png" src-width="1004" src-height="258" align="center"/>

1. 填写中签数据，并上传文件

<img src="/assets/LWhibfYfloAhCDxqvuWcMcBgnsc.png" src-width="3286" src-height="1822" align="center"/>

**步骤三：核对中签结果**

系统会根据操作人所选的中签方式及中签文件，自动解析中签结果，生成汇总及明细数据。

汇总数据：用于跟上手核对总数量、总中签数量，便于快捷发现中签数量问题。

明细数据：用于预览中签数据及扣费数据。

若数据无误，点击『确定』，则提交审核。

<img src="/assets/HqrWbiKvYosdF8xV2dHcKmpinfb.png" src-width="3294" src-height="1832" align="center"/>

**步骤四：中签结果审核**

中签审批有两个入口：

1. 专门的中签审批页面：可查看历史的中签申请、审批记录。
2. 工单记录：有审批权限的人，直接可在**待办工单**中操作审批。

点击『审批』，则可查看工单，审批通过即可。

<img src="/assets/MFuSbKEPMouFhOxvzFDcvh3Snxc.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/ERZTboNvsoKEtMxYinkct8F4nUm.png" src-width="3286" src-height="1820" align="center"/>

