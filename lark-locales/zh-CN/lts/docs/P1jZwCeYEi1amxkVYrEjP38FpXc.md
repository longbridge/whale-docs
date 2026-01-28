---
title: 系统介绍
slug: Jv6ew1wTYivfUCk8F2ocsTyqnIh
sidebar_position: 2
---


# 系统介绍

# 概述

Whale 新股认购系统支持券商支持客户新股认购的全过程，主要包括新股发行信息管理、申购信息配置、订单管理、中签信息管理等模块。

## 新股流程说明

<img src="ARFMbnItwoVSgYx0f7Vjuxefp9g" src-width="2166" src-height="3140" align="center"/>

## 新股模块说明

<img src="" src-width="100" src-height="100" align="center"/>

- 新股发行信息管理模块，用于整合和展示即将发行的新股的详细信息，包括公司背景、财务数据和市场分析；
- 申购信息配置模块，允许券商为不同客户设置个性化的申购参数，包括申购限额和策略；
- 订单管理模块，用于处理和跟踪客户的新股申购订单，包括订单状态和风险管理；
- 中签信息管理模块，负责在新股配售后向客户通报中签结果，并处理相关的财务事务。

# 务操作管理

## 1. 新股认购

## 1.1 港股认购

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 港股认购</p>
</div>

港股认购为券商处理客户港股新股认购的全部流程，包括新股资讯管理、认购配置、认购订单、中签分配等。也是新股系统最核心的流程

### 1.1.1 新股列表

新股列表页面为管理所有港股历史新股的页面，页面区分三个状态，方便券商进行操作：

- 未开启认购：已有新股信息，新股未上市前，券商还未开启认购的新股。
- 认购处理中：券商已开启认购的新股，但新股还未上市，还有后续流程需要操作。
- 全部：包括所有新股，包括已上市，或取消上市的新股。

当有新股公告时，系统会透过行情自动同步数据，会默认记录在『未开启认购』列表中，方便券商查看与配置。对于未开启认购的新股，点击『详情』，进行新股配置。

<img src="EOGXbc2L3ospXTxfPFxj7Ve0pNh" src-width="3804" src-height="1832" align="center"/>

<b>操作按钮说明</b>

- 详情：则可查看新股详细的信息、订单数据。
- 扣款：当存在待扣款订单时，才会出现『扣款』操作按钮，点击可进行快捷扣款操作。
- 公布中签：当存在需要公布中签的订单时，才会出现『公布中签』操作按钮，点击可进行中签操作。

### 1.1.2 认购信息配置

若券商打算对某一个 IPO 开启客户申购，那么需要手动开启，并进行一些基础设置，包括配置认购方式、认购时间、可认购人群等。

<b>1.1.2.1 现金认购</b>

1. 点击新股列表的『详情』，则进入配置页面，进入页面后，默认为“不可认购”，如下图。
2. 单选，选择『是』，再进行保存，则开启认购，开启后默认只能现金认购。
3. 此处设置完成，即现金认购开启完成

<img src="BGw9bWf03osMkoxtYHsjxn20pKh" src-width="3782" src-height="1764" align="center"/>

<b>1.1.2.2融资认购配置</b>

若券商对该新股需要开启『融资认购』，那么需要设定融资池，<b>若不开启，则无需此设置</b>。

<b>步骤一：新建融资池</b>

-<b>基础信息</b>

点选『融资认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="NomKbH9ddo2qOixqjnxj3AXipof" src-width="3776" src-height="1816" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

<img src="OCLsbZVooo40VQxniMFj1wu2p1b" src-width="3296" src-height="1802" align="center"/>

<b>-更多配置</b>

点击『更多配置』，则可进行个性化设置。

❤ Tips:

1. 『更多配置』中的配置数据，一般为须特别控制的信息，非必填。
2. 可见用户群体：默认为全部客户，若券商有运营系统的用户分群功能，那么可以指定这个融资只给部分客户开放。
3. 上下限股数用于控制客户的可认购股数范围。

<img src="ABrFbZ8Tqo6q4px9RbIjpEbmpDc" src-width="3288" src-height="1808" align="center"/>

<b>-客户分群配置</b>

融资池可设置多个分群规则，配合运营要求，例如：

1. A 客户群体只能最多申购 10000 股；
2. B 客户群体最多可以申购 100000 股。

<img src="KoufbkHjqokkHkx6xIgj792Opud" src-width="3766" src-height="1834" align="center"/>

<b>步骤二：融资池审批</b>

提交审批后，融资池为默认『待审批』状态，审批成功后，才会生效。

❤ Tips:

融资池审批有两个审批入口：

1. 融资池列表
2. 融资池审批页面

<img src="HoMBb0zuuoVGHmxnlKAjoK2fpJb" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 融资池审批</p>
</div>

<img src="F6zIb9mxuoVIwBxqpQgj60PQpHd" src-width="3744" src-height="1290" align="center"/>

点击『审批』按钮，查看工单详情，审批通过后，融资池生效。

<img src="FozQbY64aoliA7xos3kjJHUhpCc" src-width="3274" src-height="1824" align="center"/>

<b>1.1.2.3 零本金认购配置</b>

若券商对该新股需要开启『0本金认购』，那么需要设定0本金认购的融资池，若不开启，则无需此设置。

0本金认购为一种比较特殊的认购方式，提供给客户的融资比例只能为100%，即客户不需要任何本金，就可以认购IPO。

<b>步骤一：新建融资池</b>

- <b>基础信息</b>

点选『0本金认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="Z7pzblCrzo0OXxxH9jMj5cTDpmd" src-width="3056" src-height="1840" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

❤ Tips:

此处设置，与融资认购设置相似，只是<b>不需要填选融资比例</b>，固定为100%，更详细操作参考：

<b>融资认购设置</b>。

<img src="DaYKb0LWModlGNx3QuJjPDUOpLg" src-width="3258" src-height="1814" align="center"/>

### 1.1.3 APP新展示信息

页面主要用于配置APP的展示『标签』、『文案信息』。

- 标签：默认无数据，需要自行添加。
- 展示文案：每个新股数据生成时，都会有默认的展示文案，无需每次都进行填写，若需要修改文案，则可以在此页面进行修改

<img src="YUfHbzYVWoHiwdxf3SsjIpX7pYf" src-width="3274" src-height="1826" align="center"/>

### 1.1.4 认购记录

页面主要展示对应IPO所有的认购记录，也包括撤销、被人工拒绝的订单，同时在此页面可操作『扣款』、『中签』

<img src="CfSmbJrGco1DqaxYBJ2jPvQtpKg" src-width="3286" src-height="1574" align="center"/>

<b>1.1.4.1 扣款操作</b>

当IPO认购截止后，券商需要把确认好的IPO订单资料交给港交所或其他上手，此时对客户的有效认购订单进行扣款认购金额及认购手续费的操作，并发放一定的融资金额。

扣款操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<b>步骤一：点击扣款，确认订单范围</b>

点击扣款后，会展示待扣款的订单范围，确认并选择订单范围，再进行下一步操作。

<img src="PswgbuPzMoUIS6xMGHSjYiZEpbf" src-width="3304" src-height="1820" align="center"/>

<b>步骤二：核对扣款订单明细</b>

系统会自动根据认购订单、费用、融资比例等计算出预览数据，如下图，操作人员需要核对相关的数据，并提交审核。

<img src="TFMBbyvUeoHyL7xnxKvjdvHupSe" src-width="3298" src-height="1836" align="center"/>

<b>步骤三：扣款审批</b>

扣款审批有两个入口：

1. 专门的扣款审批页面：可查看历史的扣款申请、审批记录。
2. 工单记录：有审批权限的人，直接可在<b>待办工单</b>中操作审批。

点击『审批』，则可查看工单，审批通过即可

<img src="PDyVbFelyot1axxr1Ujjlt4ApTh" src-width="3294" src-height="976" align="center"/>

<img src="OwqNbunGCopdBGxUiTZj31OGpQh" src-width="3302" src-height="1844" align="center"/>

<b>1.1.4.2 公布中签</b>

一般在上市前一个交易日，会完成中签结果公布，系统需要对客户完成中签结果操作，中签股票需要在当日到帐。

对于中签的客户：将退还认购金额，回收提供的IPO融资金额，扣除IPO融资利息，额外扣除中签款、中签费，发放中签的新股。

对于未中签的客户：将退还认购金额，回收提供的IPO融资金额，同时扣除IPO融资利息

中签操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<b>步骤一：点击公布中签，核对数据</b>

点击公布中签后，首先需要券商确认好以下数据，若信息无误，则直接点击『下一步』即可。

1. IPO价格：一般情况系统会自动获取，券商二次确认即可，若IPO价格系统自动获取是异常的，操作人也可以人工填写
2. 客户的计息天数：默认计息天数为中签日 - 认购截止日的差值（与港交所时间一致），操作者亦可自行修改。

<img src="ARMabJx7Fou0IixIzEDj5gwBp2d" src-width="3306" src-height="1820" align="center"/>

<b>步骤二：选择中签方式</b>

IPO系统提供多种中签方式，券商可根据实际情况选择不同的中签方式。

<b>上传自定义CSV文件</b>

1. 下载示例模板，模板如下：
    1. Order：代表IPO系统的订单号
    2. APPLY：代表该订单客户申请了多少股
    3. SUCCESS：代表客户中签了多少股

<img src="GtnVbJhARoCf7kxBdvmjxRlcpCd" src-width="1004" src-height="258" align="center"/>

1. 填写中签数据，并上传文件

<img src="RbuKbAxrqoaCgKxiqXlj5JJApYY" src-width="3286" src-height="1822" align="center"/>

<b>步骤三：核对中签结果</b>

系统会根据操作人所选的中签方式及中签文件，自动解析中签结果，生成汇总及明细数据。

汇总数据：用于跟上手核对总数量、总中签数量，便于快捷发现中签数量问题。

明细数据：用于预览中签数据及扣费数据。

若数据无误，点击『确定』，则提交审核。

<img src="U9zwbWUCfoe5uKxBqjtjYgO0p7g" src-width="3294" src-height="1832" align="center"/>

<b>步骤四：中签结果审核</b>

中签审批有两个入口：

1. 专门的中签审批页面：可查看历史的中签申请、审批记录。
2. 工单记录：有审批权限的人，直接可在<b>待办工单</b>中操作审批。

点击『审批』，则可查看工单，审批通过即可。

<img src="HbMzbXQjqodhlbxydcIjarlcpRh" src-width="3272" src-height="954" align="center"/>

<img src="ZiTVbKzYdocGWExPmKdjLODJpqc" src-width="3286" src-height="1820" align="center"/>

### 1.1.5 文件生成

对于已经确认扣款成功的IPO认购订单，券商需要把订单提交给上手或港交所，一般来讲，通过港交所做的IPO为CCASS文件，通过其他上手做的IPO一般需要线下Excel或CSV进行文件传输。

<b>1.1.5.1 已配置 FINI</b>

若券商已配置采用新的 <b>FINI 平台</b>，Whale系统将直接以API的方式将<b>IPO订单直接同步给港交所</b>，则无需此操作。

<b>1.1.5.2 未配置 FINI</b>

<b>步骤一：选择订单类型</b>

根据渠道或融资比例，选择指定的订单类型，点击『生成文件』按钮。

这里建议相同上手的数据，生成同一份文件。

例如：

1. 融资是通过某一银行做的，不直接通过港交所，那么单独选择，生成CSV文件。
2. 现金、0成本打新是通过港交所做的，那么一起选择，生成CCASS文件。

<img src="Uk2ubz6KBoky3yxnjqEjN1b5pGc" src-width="3288" src-height="1318" align="center"/>

<b>步骤二：生成指定文件</b>

弹出侧拉弹窗后，选择<b>文件格式</b>，并自定义<b>文件名</b>，点击『生成并下载』即可。

<img src="TENWbfyUNo8bb3xSJnCjfNuKpTg" src-width="3302" src-height="1844" align="center"/>

### 1.1.6 融资汇总

此页面主要用于统计融资池的使用金额及使用率，会分为两个模块展示：

- 按照融资比例分组展示
- 按照融资渠道分组展示

<img src="EHA3bBOBkoS03FxbAADjZoYkpOe" src-width="3294" src-height="1726" align="center"/>

### 1.1.7 字段说明

<img src="ZfY1btiFiofyDvxvmSEjWTW4pic" src-width="1156" src-height="200" align="center"/>

## 1.2 美股认购

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 美股认购</p>
</div>

港股认购为券商处理客户港股新股认购的全部流程，包括认购信息、认购订单、中签分配等模块。认购信息需要手动进行填写。

点击『详情』，则可查看认购信息

<img src="YGx3bh1qTo8C2mxQfCFjhaHrpDf" src-width="3298" src-height="740" align="center"/>

### 1.2.1 认购信息

此页面主要用户设置美股信息的基础信息，若设置为『可认购』，且达到了『开始认购时间』，则客户可以在APP上进行美股IPO认购。

<img src="PvIRbMWklo2zKFxsTmAj0Hfgped" src-width="3268" src-height="1878" align="center"/>

### 1.2.2 APP展示信息

页面主要用于配置APP的展示『文案信息』。系统会有默认的展示文案，无需每次都进行填写，若需要修改文案，则可以在此页面进行修改与保存。

<img src="QQFdbEur7onI4pxkQYHjF5TcpGf" src-width="3258" src-height="1808" align="center"/>

### 1.2.3 认购记录

页面主要展示对应IPO所有的认购记录，也包括撤销、被人工拒绝的订单，同时在此页面可操作『中签』。

详细的中签操作，与港股一致，详细操作请看1.1.4.2 公布中签。

<img src="B6U3bFU1NoWId5xhqfdjJEoppnb" src-width="3294" src-height="1688" align="center"/>

### 1.2.4 字段说明

## 1.3 港股国配

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 港股国配</p>
</div>

港股国配的主要流程为：创建国配新股 &gt; 客户认购 &gt; 公布中签。

### 1.3.1 认购列表

此页面主要展示历史创建好的港股配售股票

<img src="UZf1brFfyoaaoPx3QMQj15fWp8M" src-width="3298" src-height="1018" align="center"/>

点击『新建』，可创建新的国配新股，这里仅能选择，未上市的股票。

<img src="HmdVbhr7Lov9NXxuegej22ACpDg" src-width="3304" src-height="1580" align="center"/>

### 1.3.2 认购信息

创建国配新股后，需要填写部分信息，并开启认购。确认后，若已经到了认购开始时间，并符合可见客户，则可在APP内进行申请。

<img src="AloDbsQEAon7f5xonf6jsbXQp4c" src-width="3276" src-height="1804" align="center"/>

### 1.3.3 APP展示信息

页面主要用于配置APP的展示『文案信息』。系统会有默认的展示文案，无需每次都进行填写，若需要修改文案，则可以在此页面进行修改与保存。

<img src="UGvnbrWHtoY82CxftOzjCPGopne" src-width="3260" src-height="1776" align="center"/>

### 1.3.4 认购记录

国配订单认购成功后，页面会正常展示认购记录。

到中签阶段，可操作中签，操作与普通港股中签一致。详情见 <b>1.1.4.2</b>

<img src="QeKJbRzwvoR0tFxaVUzjljO4poh" src-width="3290" src-height="1154" align="center"/>

### 1.3.5 文件生成

若国配对接上手，需要提供给上手文件，那么可在『文件生成』处，导出认购的基本订单信息、客户信息。

<img src="TKcbbrdGyonb6MxxzmvjNUsEpGh" src-width="2578" src-height="780" align="center"/>

### 1.3.6 字段说明

## 1.4 融资池审批

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 融资池审批</p>
</div>

此页面记录港股新股融资认购、0本金认购的所有融资池申请、变更记录，同时可查看审核人、审核状态。

<img src="LauKb3hLboWWn9x6oq5junTNp5b" src-width="3276" src-height="1488" align="center"/>

### 1.4.1 详情

点击『详情』，可查看融资池的申请明细

<img src="HN0FbwcACosAEcxFwUKjGA8VpAh" src-width="3280" src-height="1800" align="center"/>

### 1.4.2 审批

点击『审批』，可查看审批工单详情。

若为变更数据，则可对比变更前、变更后数据。

<img src="BHMWb5ufGoDU57xUaApjMWNUpGe" src-width="3272" src-height="1780" align="center"/>

## 1.5 扣款审批

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 扣款审批</p>
</div>

此页面主要记录所有的历史扣款记录，可快速查到操作人，审核人。

<img src="RW9rbX5b2oDLj0xYP0vjPVxcpDs" src-width="3268" src-height="1766" align="center"/>

- 点击详情可查看具体的扣款明细数据

<img src="APdabQz2zohzHpxrbAUjn0ggpQb" src-width="3278" src-height="1590" align="center"/>

## 1.6 中签审批

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 新股认购 &gt; 中签审批</p>
</div>

此页面展示所有新股历史的中签记录，可快速查到操作人，审核人及历史中签文件数据。

<img src="XYAsbiww6oSeiRxeJRqjgqi7pi0" src-width="3236" src-height="1730" align="center"/>

### 1.6.1 详情

点击『详情』，可查看中签数据详情，包括中签文件、中签明细等数据。

<img src="C8wkbsvs8ovOLqxUQ5zjikzFpzd" src-width="1634" src-height="1822" align="center"/>

<img src="TFGLbAAsXoWs7WxpWRhjDemuptf" src-width="1630" src-height="1844" align="center"/>

### 1.6.2 审批

点击『审批』，可查看审批工单详情。

<img src="CRCNblnveoWAUKxJl2Qj8icypXc" src-width="3276" src-height="1830" align="center"/>

## 2. 认购记录

## 2.1 认购记录

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 认购记录 &gt; 认购记录</p>
</div>

页面展示所有的新股订单，同时可操作后台批量拒绝订单。

<b>步骤一：选中订单，点击『批量撤单』</b>

<img src="ZQjcb29Mlo6GAAxv0hUj9t9PpMg" src-width="3258" src-height="1812" align="center"/>

<b>步骤二：填写撤单原因，并确认</b>

系统会有默认的拒绝原因，若需要修改拒绝原因，则可在输入框内进行修改后确认。

拒绝后，客户会收到对应的拒绝邮件。

<img src="NJzgbfE0joi9XlxJmcZjl2Dbpdf" src-width="3292" src-height="1810" align="center"/>

## 2.2 批量认购

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 认购记录 &gt; 批量认购</p>
</div>

此页面，主要为通过WBO帮客户进行批量认购，主要适用于线下的认购单，可以批量录入到系统中。

注意：这里的批量认购，会正常需要冻结认购资金，走风控逻辑，只是操作人员代客下单。

### 2.2.1 认购列表

页面主要展示批量认购的操作记录，包括认购数量，操作人信息。

<img src="JEbDbF9xPoXmelxkBiWjRuj1p8c" src-width="3304" src-height="1776" align="center"/>

点击『详情』，则可查看批量认购的信息。

- 认购成功则会有关联订单号
- 认购失败则会有拒绝原因

<img src="HmjdbuSOJo7PFPxaHFCjk7gxpQg" src-width="3302" src-height="920" align="center"/>

### 2.2.2 认购操作

<b>步骤一：点击『批量认购』按钮</b>

点击按钮按钮后，弹出如下弹窗

<img src="AsbUbUMaDo58Csx3jm3jGmEtpId" src-width="3298" src-height="1768" align="center"/>

<b>步骤二：输入股票代码</b>

需要输入批量认购的股票代码，输入后代表全部的认购均为此股票，页面会限制，只能输入认购中的新股，例如新股已上市，则会给出报错说明。

如右图。

<img src="A2r2bnOKSotLS5x5c6Ij2bDWpCI" src-width="1062" src-height="1060" align="center"/>

<b>步骤三：下载模板，并填写信息</b>

普通认购模板信息如下图。

<img src="MPhabcZedoHL9LxzBzPj9oCkpwh" src-width="1232" src-height="96" align="center"/>

- Account No：代表认购的证券账号。
- Subscription Type：C代表现金认购、M代表融资认购、F代表0本金认购。
- Subscription Qty：代表认购的数量，这个必须与实际可认购数量相符合。
- Channel：代表申购的渠道。这个必须为该股票认购信息配置时，配置的渠道。
- Financing Ratio(%)：代表融资比例。
    - 若为现金认购，则填0。
    - 若为融资认购，则填写融资池的比例即可，融资比例 + 渠道需要与认购信息配置的融资池匹配。
    - 若为0本金认购，则填100。

---

港股国配认购模板信息如下图。

<img src="Aq4xbCW9MovJssxf9fojzz3UpFb" src-width="546" src-height="100" align="center"/>

- Account No：代表认购的证券账号。
- Subscription Qty：代表认购的数量，这个必须与实际可认购数量相符合。
- Channel：代表申购的渠道。这个必须为该股票认购信息配置时，配置的渠道。

<b>步骤四：上传批量认购文件</b>

数据填写完毕，保存后，即可上传文件数据，建议数据量控制在5000以内。

上传完毕后，点击『确认』即可，若文件信息无问题，则会生成一条批量认购记录，点击『详情』，则可查看申购结果。

## 2.3 认购汇总

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股认购 &gt; 认购记录 &gt; 认购汇总</p>
</div>

此页面主要为分统计所有IPO认购订单的汇总数据。所统计的订单，只会统计有效订单部分，会剔除撤销的订单。

融资金额，会拆分成渠道融资金额和券商垫资金额。

- 融资总额：客户认购金额 * 融资比例
- 渠道融资金额：客户认购金额 * 渠道融资比例
- 券商垫资金额：客户认购金额 *（融资比例 - 渠道融资比例）

<img src="Y4mmbfV1FoMr51xEIOzj9JpRp1f" src-width="3316" src-height="748" align="center"/>

## 3. 新股配置

## 3.1 费率配置

### 3.1.1 功能介绍

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 业务参数配置 &gt; 新股配置 &gt; 费率管理</p>
</div>

IPO 的费率是以<b>计费套餐</b>的方式进行配置，可多个新股复用，在配置新股认购信息时，选择一个预设好的计费套餐即可，计费内容主要包括：

在系统上线前，会根据港交所要求，系统默认设置好中签费率，券商可点选右上角：<b>默认中签费率</b>，修改或设定设定对应信息。

- 费率名称尽可能设置为容易识别的信息，如：90% 融资费率、现金费率；
- 中签费率在 0 本金认购的场景下，若不做任何收取，可在设置时，修改为 0。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 中签费率为交易所收取，一般情况下不会变化，因此只需要设置默认值，在设置计费套餐时会默认引用默认值，无需每次填写。</p>
</div>

### 3.1.2 操作说明

<b>步骤一：默认中签费率设置</b>

点选右上角：默认中签费率，设定对应信息，填写信息后，确认即可。

<img src="SMgLbqJguox9XUxD1gsjWJGHpOB" src-width="1280" src-height="615" align="center"/>

<b>步骤二：默认中签费率设置</b>

点选右上角：新建，进行计费套餐设置，填写信息后，确认即可。

<img src="J7mqbghaaoT5NEx2oAijljjspzf" src-width="3288" src-height="1826" align="center"/>

### 3.1.3 字段说明

<img src="LK6qbWymJoKIRgxbh9Nj1U8Mpqe" src-width="1162" src-height="472" align="center"/>

### 渠道管理

### 3.1.4 功能介绍

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 业务参数配置 &gt; 新股配置 &gt; 渠道管理</p>
</div>

渠道配置主要是用来管理：劵商提供客户认购新股的融资来源(渠道)

1. IPO 的资金来源是哪里：例如是券商自有资金，或是某银行提供融资资金；
2. 这个渠道可以进行什么类型的认购：例如只能现金认购、或只能进行 0 本金认购。

分配使用不同渠道，更方便券商后续的融资成本管理及 IPO 数据的统计。

### 3.1.5 操作说明

<b>步骤一：查看新股列表</b>

点选右上角：新建，设定对应数据。

<img src="TLcZb4xYdoL3j1x7w9yjqj7cpuf" src-width="3770" src-height="1694" align="center"/>

<img src="Jllyb1wqNogoHoxJS3Sj1hcupaf" src-width="3788" src-height="1734" align="center"/>

### 3.1.6 字段说明

## 3.2 购买力配置

### 3.2.1 功能介绍

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 业务参数配置 &gt; 新股配置 &gt; 购买力配置</p>
</div>

该功能主要用于配置，在新股认购时，是否支持使用持仓购买力进行打新。若不配置，则默认不支持持仓购买力打新。

- 支持持仓购买力打新：那么无论是现金认购，还是融资认购，现金部分可以使用持仓抵押的购买力。
    - 举例说明：现金为0，持仓100,000HKD，能抵押60,000 HKD的购买力，那么若客户申购新股时候，就可以使用60,000 KHD的购买力进行现金申购，而非一定需要现金。

- 不支持持仓购买力打新：那么无论是现金认购，还是融资认购，现金部分只能使用港币已结算现金进行申购。
    - 举例说明：现金为0，持仓100,000HKD，能抵押60,000 HKD的购买力，那么若客户申购新股时候，现金申购金额为0，融资申购若存在现金部分，那么也不可以申购。

### 3.2.2 操作说明

<b>『新建』并填写信息</b>

1. 点击『新建』后弹出如下弹窗
2. 输入股票代码
3. 选择认购类型，普通认购选『认购』，国配认购选『国配』
4. 是否支持持仓打新，填写『是』
5. 是否支持借币，填写『是』
6. 信息填写完毕确认即可

<img src="ELYbblpDYom8spxWsb5jrACEpeh" src-width="3284" src-height="1750" align="center"/>

打新购买力上浮系数说明：

代表认购新股时，持仓不能完全抵押。例如700.HK持仓10,000 HKD，初始保证金=40%，那么代表可以抵押出来6,000 HKD的购买力，若此时填写了『上浮系数』=0.2。

那么在新股认购时，700.HK的初始保证金会按照40%+20%=60%（最多不超过100%）计算，也就是打新时，购买力=4,000 HKD。

