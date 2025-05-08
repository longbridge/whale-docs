---
title: 系统介绍
slug: Jv6ew1wTYivfUCk8F2ocsTyqnIh
sidebar_position: 2
---


# 系统介绍

# 概述

Whale 新股认购系统支持券商支持客户新股认购的全过程，主要包括新股发行信息管理、申购信息配置、订单管理、中签信息管理等模块。

## 新股流程说明

<img src="/assets/WA2ZwNds0hy2bkbnElicgcmbnLe-board.png"/>

## 新股模块说明

<img src="/assets/LW7UwzUBvh2T5xbTW8ucqTFbnfc-board.png"/>

<img src="/assets/Z2tAbdZTtoWHxnxxT9zcFqSgnxe.png" src-width="3214" src-height="1476" align="center"/>

- 新股发行信息管理模块，用于整合和展示即将发行的新股的详细信息，包括公司背景、财务数据和市场分析；
- 申购信息配置模块，允许券商为不同客户设置个性化的申购参数，包括申购限额和策略；
- 订单管理模块，用于处理和跟踪客户的新股申购订单，包括订单状态和风险管理；
- 中签信息管理模块，负责在新股配售后向客户通报中签结果，并处理相关的财务事务。

# 务操作管理

## 新股认购

### 港股认购

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 港股认购 </p>
</div>

港股认购为券商处理客户港股新股认购的全部流程，包括新股资讯管理、认购配置、认购订单、中签分配等。也是新股系统最核心的流程

#### 新股列表

新股列表页面为管理所有港股历史新股的页面，页面区分三个状态，方便券商进行操作：

- 未开启认购：已有新股信息，新股未上市前，券商还未开启认购的新股。
- 认购处理中：券商已开启认购的新股，但新股还未上市，还有后续流程需要操作。
- 全部：包括所有新股，包括已上市，或取消上市的新股。

当有新股公告时，系统会透过行情自动同步数据，会默认记录在『未开启认购』列表中，方便券商查看与配置。对于未开启认购的新股，点击『详情』，进行新股配置。

<img src="/assets/HX36b8nnJoKrKTxK7FbccjXAnge.png" src-width="3804" src-height="1832" align="center"/>

<b>操作按钮说明</b>

- 详情：则可查看新股详细的信息、订单数据。
- 扣款：当存在待扣款订单时，才会出现『扣款』操作按钮，点击可进行快捷扣款操作。
- 公布中签：当存在需要公布中签的订单时，才会出现『公布中签』操作按钮，点击可进行中签操作。

#### 认购信息配置

若券商打算对某一个 IPO 开启客户申购，那么需要手动开启，并进行一些基础设置，包括配置认购方式、认购时间、可认购人群等。

##### <b>现金认购</b>

1. 点击新股列表的『详情』，则进入配置页面，进入页面后，默认为“不可认购”，如下图。
2. 单选，选择『是』，再进行保存，则开启认购，开启后默认只能现金认购。
3. 此处设置完成，即现金认购开启完成

<img src="/assets/M1aib4XYmoo13BxiSk3ct70LnSb.png" src-width="3782" src-height="1764" align="center"/>

##### 融资认购配置

若券商对该新股需要开启『融资认购』，那么需要设定融资池，<b>若不开启，则无需此设置</b>。

<b>步骤一：新建融资池</b>

-<b>基础信息</b>

点选『融资认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="/assets/F5lqbT3bOoUyWqxMtjLc5sMknge.png" src-width="3776" src-height="1816" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

<img src="/assets/RXwtbDa7Wo5cP3xx58GcQjXyn5e.png" src-width="3296" src-height="1802" align="center"/>

<b>-更多配置</b>

点击『更多配置』，则可进行个性化设置。

❤ Tips: 

1. 『更多配置』中的配置数据，一般为须特别控制的信息，非必填。
2. 可见用户群体：默认为全部客户，若券商有运营系统的用户分群功能，那么可以指定这个融资只给部分客户开放。
3. 上下限股数用于控制客户的可认购股数范围。

<img src="/assets/Jd3jb8ksho9AZExMQsDcK39CnTf.png" src-width="3288" src-height="1808" align="center"/>

<b>-客户分群配置</b>

融资池可设置多个分群规则，配合运营要求，例如：

1. A 客户群体只能最多申购 10000 股；
2. B 客户群体最多可以申购 100000 股。

<img src="/assets/O9m6b7TjCodPVnx3nqDcmSyyncg.png" src-width="3766" src-height="1834" align="center"/>

<b>步骤二：融资池审批</b>

提交审批后，融资池为默认『待审批』状态，审批成功后，才会生效。

❤ Tips: 

融资池审批有两个审批入口：

1. 融资池列表
2. 融资池审批页面

<img src="/assets/O4zGb5VlOoY68GxiRAUc0SkKnte.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 融资池审批</p>
</div>

<img src="/assets/JKvBb0IKLoULUQxGzobcSHmen1U.png" src-width="3744" src-height="1290" align="center"/>

点击『审批』按钮，查看工单详情，审批通过后，融资池生效。

<img src="/assets/ZHvvb2BL0oSnyCxXtGIcAj2Bn8c.png" src-width="3274" src-height="1824" align="center"/>

##### 零本金认购配置

若券商对该新股需要开启『0 本金认购』，那么需要设定 0 本金认购的融资池，若不开启，则无需此设置。

0 本金认购为一种比较特殊的认购方式，提供给客户的融资比例只能为 100%，即客户不需要任何本金，就可以认购 IPO。

<b>步骤一：新建融资池</b>

- <b>基础信息</b>

点选『0 本金认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="/assets/GCEkb1Llpo1gxFxY3KrcTdafnOc.png" src-width="3056" src-height="1840" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

❤ Tips: 

此处设置，与融资认购设置相似，只是<b>不需要填选融资比例</b>，固定为 100%，更详细操作参考：

<b>融资认购设置</b>。

<img src="/assets/F7NlbQsbkos44dxammGcUn6intb.png" src-width="3258" src-height="1814" align="center"/>

#### APP 新展示信息

页面主要用于配置 APP 的展示『标签』、『文案信息』。

- 标签：默认无数据，需要自行添加。
- 展示文案：每个新股数据生成时，都会有默认的展示文案，无需每次都进行填写，若需要修改文案，则可以在此页面进行修改

<img src="/assets/BP9RbeJJqokFflxeBx1csAPtnuf.png" src-width="3274" src-height="1826" align="center"/>

#### 认购记录

页面主要展示对应 IPO 所有的认购记录，也包括撤销、被人工拒绝的订单，同时在此页面可操作『扣款』、『中签』

<img src="/assets/RH2Sb0cmXoPL63x8NMdckMb2nuc.png" src-width="3286" src-height="1574" align="center"/>

##### 扣款操作

当 IPO 认购截止后，券商需要把确认好的 IPO 订单资料交给港交所或其他上手，此时对客户的有效认购订单进行扣款认购金额及认购手续费的操作，并发放一定的融资金额。

扣款操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO 详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<b>步骤一：点击扣款，确认订单范围</b>

点击扣款后，会展示待扣款的订单范围，确认并选择订单范围，再进行下一步操作。

<img src="/assets/YrQZbkrjkoXdIMxGbjLc2RF6ndd.png" src-width="3304" src-height="1820" align="center"/>

<b>步骤二：核对扣款订单明细</b>

系统会自动根据认购订单、费用、融资比例等计算出预览数据，如下图，操作人员需要核对相关的数据，并提交审核。

<img src="/assets/H6XWbEaEno4ntexzMuDcMWY0nxg.png" src-width="3298" src-height="1836" align="center"/>

<b>步骤三：扣款审批</b>

扣款审批有两个入口：

1. 专门的扣款审批页面：可查看历史的扣款申请、审批记录。
2. 工单记录：有审批权限的人，直接可在<b>待办工单</b>中操作审批。

点击『审批』，则可查看工单，审批通过即可

<img src="/assets/VHMDb6Z1To9VOYxRVdfcDyOOnYb.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/SMyKbrJJdoxV9vxXmupcz5qEnsd.png" src-width="3302" src-height="1844" align="center"/>

##### 公布中签

一般在上市前一个交易日，会完成中签结果公布，系统需要对客户完成中签结果操作，中签股票需要在当日到帐。

对于中签的客户：将退还认购金额，回收提供的 IPO 融资金额，扣除 IPO 融资利息，额外扣除中签款、中签费，发放中签的新股。

对于未中签的客户：将退还认购金额，回收提供的 IPO 融资金额，同时扣除 IPO 融资利息

中签操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO 详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<b>步骤一：点击公布中签，核对数据</b>

点击公布中签后，首先需要券商确认好以下数据，若信息无误，则直接点击『下一步』即可。

1. IPO 价格：一般情况系统会自动获取，券商二次确认即可，若 IPO 价格系统自动获取是异常的，操作人也可以人工填写
2. 客户的计息天数：默认计息天数为中签日 - 认购截止日的差值（与港交所时间一致），操作者亦可自行修改。

<img src="/assets/Ex1EbVcz8o29xTxxV9tcA6Wunse.png" src-width="3306" src-height="1820" align="center"/>

<b>步骤二：选择中签方式</b>

IPO 系统提供多种中签方式，券商可根据实际情况选择不同的中签方式。

<table header_row="1">
<colgroup>
<col width="189"/>
<col width="522"/>
</colgroup>
<thead>
<tr><th><p><b>中签方式</b></p></th><th><p><b>中签方式说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>港交所 CCASS 中签结果</p></td><td><p><b>通过港交所做的 IPO</b><br/>CCASS 的中签结果，下载下来，直接上传 CCASS 结果即可。</p></td></tr>
<tr><td><p>自定义 CSV 文件</p></td><td><p><b>不是通过港交所做的 IPO，而是通过银行或其他上手做的</b><br/>一般情况上手把中签结果给一份 CSV 或 Excel 文件，需要操作人把对应结果文件转化为系统可识别的字段，再进行上传。</p></td></tr>
<tr><td><p>FINI 中签结果</p></td><td><p><b>通过港交所做的 IPO</b><br/>FINI 平台的中签结果，下载下来，直接上传即可。</p></td></tr>
<tr><td><p>自动获取上手中签结果</p></td><td><p><b>以长桥香港为上手做的 IPO，可以系统化自动获取</b><br/>选择后，直接点击『下一步』，那么系统将自动拉取结果。</p></td></tr>
<tr><td><p>自动获取 FINI 中签结果</p></td><td><p><b>通过港交所 FINI - API 自动做的 IPO 订单</b><br/>选择后，直接点击『下一步』，那么系统将自动拉取结果。</p></td></tr>
</tbody>
</table>

<b>上传自定义 CSV 文件</b>

1. 下载示例模板，模板如下：
    1. Order：代表 IPO 系统的订单号
    2. APPLY：代表该订单客户申请了多少股
    3. SUCCESS：代表客户中签了多少股

<img src="/assets/DiOabKazUoJhmfxKzimcreyXnuf.png" src-width="1004" src-height="258" align="center"/>

1. 填写中签数据，并上传文件

<img src="/assets/Em0MbCAPPonkVtx9yyacHDtanug.png" src-width="3286" src-height="1822" align="center"/>

<b>步骤三：核对中签结果</b>

系统会根据操作人所选的中签方式及中签文件，自动解析中签结果，生成汇总及明细数据。

汇总数据：用于跟上手核对总数量、总中签数量，便于快捷发现中签数量问题。

明细数据：用于预览中签数据及扣费数据。

若数据无误，点击『确定』，则提交审核。

<img src="/assets/DW7Kbw8AZobXgxx7PXRcfQp7n2f.png" src-width="3294" src-height="1832" align="center"/>

<b>步骤四：中签结果审核</b>

中签审批有两个入口：

1. 专门的中签审批页面：可查看历史的中签申请、审批记录。
2. 工单记录：有审批权限的人，直接可在<b>待办工单</b>中操作审批。

点击『审批』，则可查看工单，审批通过即可。

<img src="/assets/HeoLbCgIUoCSeoxuPHxc2QRJnEb.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/C43NbEPuPo7r03xPrcZc6uEDnge.png" src-width="3286" src-height="1820" align="center"/>

#### 文件生成

对于已经确认扣款成功的 IPO 认购订单，券商需要把订单提交给上手或港交所，一般来讲，通过港交所做的 IPO 为 CCASS 文件，通过其他上手做的 IPO 一般需要线下 Excel 或 CSV 进行文件传输。

##### <b>已配置 FINI</b>

若券商已配置采用新的<b> FINI 平台</b>，Whale 系统将直接以 API 的方式将<b>IPO 订单直接同步给港交所</b>，则无需此操作。

##### <b>未配置 FINI</b>

<b>步骤一：选择订单类型</b>

根据渠道或融资比例，选择指定的订单类型，点击『生成文件』按钮。

这里建议相同上手的数据，生成同一份文件。

例如：

1. 融资是通过某一银行做的，不直接通过港交所，那么单独选择，生成 CSV 文件。
2. 现金、0 成本打新是通过港交所做的，那么一起选择，生成 CCASS 文件。

<img src="/assets/ZXaqbYx5loR0V4xUgIgchpbinBb.png" src-width="3288" src-height="1318" align="center"/>

<b>步骤二：生成指定文件</b>

弹出侧拉弹窗后，选择<b>文件格式</b>，并自定义<b>文件名</b>，点击『生成并下载』即可。

<img src="/assets/Q6EcbP3EJoLbxOxQ0ZkcuEQcnlg.png" src-width="3302" src-height="1844" align="center"/>

#### 融资汇总

此页面主要用于统计融资池的使用金额及使用率，会分为两个模块展示：

- 按照融资比例分组展示
- 按照融资渠道分组展示

<img src="/assets/AqchbAVoaoEPShxInE0cVxg3n0c.png" src-width="3294" src-height="1726" align="center"/>

#### 字段说明

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="589"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>是否必填</b></p></th><th><p><b>填写说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>认购开始时间</p></td><td><p>是</p></td><td><p>认购开始时间默认为交易所可认购时间，券商可自行修改</p></td></tr>
<tr><td><p>现金认购 - 结束时间</p></td><td><p>是</p></td><td><p>现金认购结束时间，默认为交易所结束时间，券商可自行修改</p></td></tr>
<tr><td><p>费率</p></td><td><p>是</p></td><td><blockquote>
<p>代表客户选择此方式认购时，所匹配的费率套餐<br/>所选费率只能为<a href="https://longbridge.feishu.cn/wiki/NCxvwUuDfiJJ66kgmcrcCUVunYg">费率管理</a>预设好的费率</p>
</blockquote></td></tr>
<tr><td><p>渠道</p></td><td><p>是</p></td><td><p>现金认购的渠道为默认现金渠道，券商可自行修改为其他现金渠道</p></td></tr>
<tr><td><p>融资总金额</p></td><td><p>是</p></td><td><blockquote>
<p>用于限制所有客户可使用融资的最大总金额<br/>例如设置融资总金额设定为 500,000 HKD，融资比例为 90%。</p>
</blockquote>
<ol>
<li>客户 A 使用了 200,000 HKD 融资</li>
<li>客户 B 使用了 210,000 HKD 融资<br/>那么此时融资池只剩下 90,000 HKD 额度，客户使用 90% 的融资进行申购，最多只能申购 90,000 /90% =100,000 HKD 的金额，申购完毕后，融资池已用额度 500,000 HKD，其他客户将不可用再使用该融资申购，除非券商将融资额度调高。</li>
</ol></td></tr>
<tr><td><p>融资比例</p></td><td><p>是</p></td><td><blockquote>
<p>代表提供给客户的融资比例<br/>例如融资比例为 90%，那么客户 IPO 认购金额为 20,000 HKD 时，会用到 18,000 HKD 的 IPO 融资。</p>
</blockquote>
<ol>
<li>支持融资比例选择</li>
<li>可自定义融资比例，设置好系统自动提醒杠杆倍数<img src="/assets/TbZgbgPf4o1waxxFSVZcFL4snW3.png" src-width="1156" src-height="200"/></li>
</ol></td></tr>
<tr><td><p>认购时间</p></td><td><p>是</p></td><td><blockquote>
<p>代表此认购方式的可认购时间<br/>券商可以灵活使用这个时间，做好 IPO 运营管理，例如可以配置为：</p>
</blockquote>
<ol>
<li>1 月 3 日支持 20 倍打新（2024-01-03 00:00:00  ～  2024-01-04 00:00:00）</li>
<li>1 月 4 日支持 10 倍打新（2024-01-04 00:00:00  ～  2024-01-05 00:00:00）</li>
</ol></td></tr>
<tr><td><p>预警金额</p></td><td><p>否</p></td><td><blockquote>
<p>当融资池剩余金额小于设定值后，会有相关的预警通知，CS 会对券商做好友好提醒<br/>例如设置融资总金额设定为 500,000 HKD，若预警金额设置为 100,000 HKD，那么当融资池剩余额度低于设定值时，系统会进行相关通知</p>
</blockquote></td></tr>
<tr><td><p>最低本金要求</p></td><td><p>否</p></td><td><blockquote>
<p>一般情况下不设定，代表客户使用此融资方式认购时，需要至少付出的本金<br/>例如：认购 A 股票 1 手为 5,000 HKD，融资池给的融资额度为 90%，若不设定此值时，客户认购 1 手，只需要付出 500 HKD 本金，但当次值设置为 1,000 HKD 时，说明客户至少要付出 1,000 HKD 本金。当客户申购 3 手时，需要付出 1,500 HKD 本金，此时已经 &gt; 1,000 HKD，才能使用满 90% 融资。</p>
</blockquote></td></tr>
<tr><td><p>渠道融资比例</p></td><td><p>否</p></td><td><blockquote>
<p>仅作为记录使用，代表上手或银行提供了多少融资比例。<br/>例如上手只给了 80% 的融资比例，但券商想给客户提供 90% 融资，那么可设置为：</p>
</blockquote>
<ol>
<li>融资比例 = 90%</li>
<li>渠道融资比例 = 80%<br/>系统在统计时，能更方便的计算出券商自己垫付了 10% 的融资</li>
</ol></td></tr>
<tr><td><p>可见客户群体<br/>-客户分群</p></td><td><p>是</p></td><td><p>系统默认对全部客户开放，若券商有『Whale - 运营系统』，才会有用户分群功能<br/>不在对应分群内的客户，则在 IPO 申购时，看不到此认购方式</p></td></tr>
<tr><td><p>可见客户群体<br/>-上限股数</p></td><td><p>是</p></td><td><p>系统默认填充，交易所允许的最大申购股数，券商可根据运营需要做相关修改</p></td></tr>
<tr><td><p>可见客户群体<br/>-下限股数</p></td><td><p>是</p></td><td><p>系统默认填充，交易所的 1 手股数，券商可根据运营需要做相关修改</p></td></tr>
</tbody>
</table>

### 美股认购

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 美股认购 </p>
</div>

港股认购为券商处理客户港股新股认购的全部流程，包括认购信息、认购订单、中签分配等模块。认购信息需要手动进行填写。

点击『详情』，则可查看认购信息

<img src="/assets/B18SbfNUmojkZPxyK12c8m5KnFd.png" src-width="3298" src-height="740" align="center"/>

#### 认购信息

此页面主要用户设置美股信息的基础信息，若设置为『可认购』，且达到了『开始认购时间』，则客户可以在 APP 上进行美股 IPO 认购。

<img src="/assets/DjUrbP50AoQOBhxSmXecg73OnEb.png" src-width="3268" src-height="1878" align="center"/>

#### APP 展示信息

页面主要用于配置 APP 的展示『文案信息』。系统会有默认的展示文案，无需每次都进行填写，若需要修改文案，则可以在此页面进行修改与保存。

<img src="/assets/VWfeb5lDToOYFYxc1Gecd5iWnYc.png" src-width="3258" src-height="1808" align="center"/>

#### 认购记录

页面主要展示对应 IPO 所有的认购记录，也包括撤销、被人工拒绝的订单，同时在此页面可操作『中签』。

详细的中签操作，与港股一致，详细操作请看 1.1.4.2 公布中签。

<img src="/assets/E5Qbb6zDDoo70rx5eAOccp1dnMc.png" src-width="3294" src-height="1688" align="center"/>

#### 字段说明

<table header_column="1" header_row="1">
<colgroup>
<col width="132"/>
<col width="121"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>是否必填</b></p></th><th><p><b>填写说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>是否可认购</p></td><td><p>是</p></td><td><p>默认关闭，开启后代表可认购</p></td></tr>
<tr><td><p>最低发行价</p></td><td><p>是</p></td><td><p>发行价区间下限值，限制只能填正数</p></td></tr>
<tr><td><p>最高发行价</p></td><td><p>是</p></td><td><p>发行价区间上限值，限制只能填正数</p></td></tr>
<tr><td><p>总股本</p></td><td><p>是</p></td><td><p>限制只能填正数</p></td></tr>
<tr><td><p>冻结比例（%）</p></td><td><p>是</p></td><td><p>由于最终 IPO 价格会有变化，此值代表申购时按照最高发行价冻结现金的比例</p></td></tr>
<tr><td><p>最低认购股数</p></td><td><p>是</p></td><td><p>认购股数下限值，限制只能填正数</p></td></tr>
<tr><td><p>招股书</p></td><td><p>是</p></td><td><p>需要填写招股书 PDF 链接</p></td></tr>
<tr><td><p>开始认购时间（美东时间）</p></td><td><p>是</p></td><td><p>美东时间的开始认购时间</p></td></tr>
<tr><td><p>截止认购时间（美东时间）</p></td><td><p>是</p></td><td><p>美东时间的截止认购时间</p></td></tr>
<tr><td><p>公布中签时间（美东时间）</p></td><td><p>是</p></td><td><p>美东时间的公布中签时间</p></td></tr>
<tr><td><p>IPO 时间</p></td><td><p>是</p></td><td><p>实际上市日</p></td></tr>
<tr><td><p>行业</p></td><td><p>是</p></td><td><p>新股所属的行业，主要展示在 APP 新股详情的介绍资料中</p></td></tr>
<tr><td><p>承销商</p></td><td><p>是</p></td><td><p>新股的承销商，主要展示在 APP 新股详情的介绍资料中</p></td></tr>
</tbody>
</table>

### 港股国配

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 港股国配</p>
</div>

港股国配的主要流程为：创建国配新股 &gt; 客户认购 &gt; 公布中签。

#### 认购列表

此页面主要展示历史创建好的港股配售股票

<img src="/assets/V6uZb09J3oEWrMxDN6Cc9sRSnBe.png" src-width="3298" src-height="1018" align="center"/>

点击『新建』，可创建新的国配新股，这里仅能选择，未上市的股票。

<img src="/assets/TweobuibwomTngxqCQ4c1wKGnQc.png" src-width="3304" src-height="1580" align="center"/>

#### 认购信息

创建国配新股后，需要填写部分信息，并开启认购。确认后，若已经到了认购开始时间，并符合可见客户，则可在 APP 内进行申请。

<img src="/assets/Xvkjb1Q1eohWClxVsg9cE7aDnQg.png" src-width="3276" src-height="1804" align="center"/>

#### APP 展示信息

页面主要用于配置 APP 的展示『文案信息』。系统会有默认的展示文案，无需每次都进行填写，若需要修改文案，则可以在此页面进行修改与保存。

<img src="/assets/GfBEbkIcxouilkxjfudcErdqnCg.png" src-width="3260" src-height="1776" align="center"/>

#### 认购记录

国配订单认购成功后，页面会正常展示认购记录。

到中签阶段，可操作中签，操作与普通港股中签一致。详情见 <b>1.1.4.2</b>

<img src="/assets/NSwrb0qw8oleCuxmeZpc46mYnbd.png" src-width="3290" src-height="1154" align="center"/>

#### 文件生成

若国配对接上手，需要提供给上手文件，那么可在『文件生成』处，导出认购的基本订单信息、客户信息。

<img src="/assets/NF0db7QRkoAzmGxzfdpcTShbnnh.png" src-width="2578" src-height="780" align="center"/>

#### 字段说明

<table header_column="1" header_row="1">
<colgroup>
<col width="132"/>
<col width="121"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>是否必填</b></p></th><th><p><b>填写说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>是否可认购</p></td><td><p>是</p></td><td><p>默认关闭，开启后代表可认购</p></td></tr>
<tr><td><p>是否可使用持仓购买力</p></td><td><p>是</p></td><td><p>默认否。<br/>为否：代表只能用可提现金认购<br/>为是：代表可以用现金 + 持仓抵押的购买力认购</p></td></tr>
<tr><td><p>冻结比例（%）</p></td><td><p>是</p></td><td><p>此值代表申购时按照申购金额价冻结现金的比例</p></td></tr>
<tr><td><p>渠道</p></td><td><p>是</p></td><td><p>国配认购的渠道只能选择支持国配的渠道</p></td></tr>
<tr><td><p>费率</p></td><td><p>是</p></td><td><blockquote>
<p>代表客户选择此方式认购时，所匹配的费率套餐<br/>所选费率只能为<a href="https://longbridge.feishu.cn/wiki/NCxvwUuDfiJJ66kgmcrcCUVunYg">费率管理</a>预设好的费率</p>
</blockquote></td></tr>
<tr><td><p>认购开始时间</p></td><td><p>是</p></td><td><p>开始认购的时间</p></td></tr>
<tr><td><p>结束时间</p></td><td><p>是</p></td><td><p>截止认购的时间</p></td></tr>
<tr><td><p>可见客户群体</p></td><td><p>是</p></td><td><p>系统默认对全部客户开放，若券商有『Whale - 运营系统』，才会有用户分群功能<br/>不在对应分群内的客户，则在 IPO 申购时，看不到此认购方式</p></td></tr>
<tr><td><p>可认购数量</p></td><td><p>是</p></td><td><p>可认购的上限、下限数量范围</p></td></tr>
</tbody>
</table>

### 融资池审批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 融资池审批</p>
</div>

此页面记录港股新股融资认购、0 本金认购的所有融资池申请、变更记录，同时可查看审核人、审核状态。

<img src="/assets/UvfobI0RDoODuIxEjmtc3tlGnvg.png" src-width="3276" src-height="1488" align="center"/>

#### 详情

点击『详情』，可查看融资池的申请明细

<img src="/assets/E8QgbRhJUosIufx4l8qc73E2ndb.png" src-width="3280" src-height="1800" align="center"/>

#### 审批

点击『审批』，可查看审批工单详情。

若为变更数据，则可对比变更前、变更后数据。

<img src="/assets/OB2wbBCmloMufLxhr2xcUEI2noe.png" src-width="3272" src-height="1780" align="center"/>

### 扣款审批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 扣款审批</p>
</div>

此页面主要记录所有的历史扣款记录，可快速查到操作人，审核人。

<img src="/assets/Pineb2b9XoFOaCxwslmcXTJCnAh.png" src-width="3268" src-height="1766" align="center"/>

- 点击详情可查看具体的扣款明细数据

<img src="/assets/EssIbJydiorRcbxiQOHc7bmlns2.png" src-width="3278" src-height="1590" align="center"/>

### 中签审批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 新股认购 &gt; 中签审批</p>
</div>

此页面展示所有新股历史的中签记录，可快速查到操作人，审核人及历史中签文件数据。

<img src="/assets/Umpgb2McCoWgVVxOGjTc9Xr7nuh.png" src-width="3236" src-height="1730" align="center"/>

#### 详情

点击『详情』，可查看中签数据详情，包括中签文件、中签明细等数据。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/H5M9bFqRKov6RFxwsoWcN1g4nag.png" src-width="1634" src-height="1822" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/OIoxbZQtuoquvDxIk3Oc45renFb.png" src-width="1630" src-height="1844" align="center"/>
</div>
</div>

#### 审批

点击『审批』，可查看审批工单详情。

<img src="/assets/AH4IbvyjIoL5UyxSr5LcNe2gnkc.png" src-width="3276" src-height="1830" align="center"/>

## 认购记录

### 认购记录

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 认购记录 &gt; 认购记录</p>
</div>

页面展示所有的新股订单，同时可操作后台批量拒绝订单。

<b>步骤一：选中订单，点击『批量撤单』</b>

<img src="/assets/TvE4bOnI8oeilbxF2nzcn8uCncc.png" src-width="3258" src-height="1812" align="center"/>

<b>步骤二：填写撤单原因，并确认</b>

系统会有默认的拒绝原因，若需要修改拒绝原因，则可在输入框内进行修改后确认。

拒绝后，客户会收到对应的拒绝邮件。

<img src="/assets/Mfhyb83hSoebxDxtSQ3cEjN1n6g.png" src-width="3292" src-height="1810" align="center"/>

### 批量认购

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 认购记录 &gt; 批量认购</p>
</div>

此页面，主要为通过 WBO 帮客户进行批量认购，主要适用于线下的认购单，可以批量录入到系统中。

注意：这里的批量认购，会正常需要冻结认购资金，走风控逻辑，只是操作人员代客下单。

#### 认购列表

页面主要展示批量认购的操作记录，包括认购数量，操作人信息。

<img src="/assets/XSPhbYyUFoxl9JxGw1LcHEbvnfb.png" src-width="3304" src-height="1776" align="center"/>

点击『详情』，则可查看批量认购的信息。

- 认购成功则会有关联订单号
- 认购失败则会有拒绝原因

<img src="/assets/IyMfbKkN2okN9NxcoTDcujvWn6f.png" src-width="3302" src-height="920" align="center"/>

#### 认购操作

<b>步骤一：点击『批量认购』按钮</b>

点击按钮按钮后，弹出如下弹窗

<img src="/assets/KVM6bLVveoaeQwxdh1lcg5XGn9e.png" src-width="3298" src-height="1768" align="center"/>

<b>步骤二：输入股票代码</b>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>需要输入批量认购的股票代码，输入后代表全部的认购均为此股票，页面会限制，只能输入认购中的新股，例如新股已上市，则会给出报错说明。</p>
<p>如右图。</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/I6e7bK6iNoM5csxHTpBcnKE5nqr.png" src-width="1062" src-height="1060" align="center"/>
</div>
</div>

<b>步骤三：下载模板，并填写信息</b>

普通认购模板信息如下图。

<img src="/assets/W88tbnVdoomvlsxgr2rcX0aznxU.png" src-width="1232" src-height="96" align="center"/>

- Account No：代表认购的证券账号。
- Subscription Type：C 代表现金认购、M 代表融资认购、F 代表 0 本金认购。
- Subscription Qty：代表认购的数量，这个必须与实际可认购数量相符合。
- Channel：代表申购的渠道。这个必须为该股票认购信息配置时，配置的渠道。
- Financing Ratio(%)：代表融资比例。
    - 若为现金认购，则填 0。
    - 若为融资认购，则填写融资池的比例即可，融资比例 + 渠道需要与认购信息配置的融资池匹配。
    - 若为 0 本金认购，则填 100。

---

港股国配认购模板信息如下图。

<img src="/assets/YNz2bBUMaoUKyfxWtgzcYnDmnNf.png" src-width="546" src-height="100"/>

- Account No：代表认购的证券账号。
- Subscription Qty：代表认购的数量，这个必须与实际可认购数量相符合。
- Channel：代表申购的渠道。这个必须为该股票认购信息配置时，配置的渠道。

<b>步骤四：上传批量认购文件</b>

数据填写完毕，保存后，即可上传文件数据，建议数据量控制在 5000 以内。

上传完毕后，点击『确认』即可，若文件信息无问题，则会生成一条批量认购记录，点击『详情』，则可查看申购结果。

### 认购汇总

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股认购 &gt; 认购记录 &gt; 认购汇总</p>
</div>

此页面主要为分统计所有 IPO 认购订单的汇总数据。所统计的订单，只会统计有效订单部分，会剔除撤销的订单。

融资金额，会拆分成渠道融资金额和券商垫资金额。

- 融资总额：客户认购金额 * 融资比例
- 渠道融资金额：客户认购金额 * 渠道融资比例
- 券商垫资金额：客户认购金额 *（融资比例 - 渠道融资比例）

<img src="/assets/KG0xbVuAZofsiHxwjaOcmcvincb.png" src-width="3316" src-height="748" align="center"/>

## 新股配置

### 费率配置

#### 功能介绍

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>业务参数配置 &gt; 新股配置 &gt; 费率管理</p>
</div>

IPO 的费率是以<b>计费套餐</b>的方式进行配置，可多个新股复用，在配置新股认购信息时，选择一个预设好的计费套餐即可，计费内容主要包括：

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="720"/>
</colgroup>
<tbody>
<tr><td><p>认购手续费</p></td><td><p>对申购的有效订单，收取的固定手续费，与申购金额无关</p></td></tr>
<tr><td><p>融资年利率</p></td><td><p>收取客户的利息 = 融资金额 * 融资年利率/365 * 计息天数</p></td></tr>
<tr><td><p>中签费用</p></td><td><p>此设置为比例，按照最终中签金额 × 对应的比例</p></td></tr>
</tbody>
</table>

在系统上线前，会根据港交所要求，系统默认设置好中签费率，券商可点选右上角：<b>默认中签费率</b>，修改或设定设定对应信息。

- 费率名称尽可能设置为容易识别的信息，如：90% 融资费率、现金费率；
- 中签费率在 0 本金认购的场景下，若不做任何收取，可在设置时，修改为 0。

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<p>中签费率为交易所收取，一般情况下不会变化，因此只需要设置默认值，在设置计费套餐时会默认引用默认值，无需每次填写。</p>
</div>

#### 操作说明

<b>步骤一：默认中签费率设置</b>

点选右上角：默认中签费率，设定对应信息，填写信息后，确认即可。

<img src="/assets/HOvnbP2SnoleddxGihWco2S7nVh.png" src-width="1280" src-height="615" align="center"/>

<b>步骤二：默认中签费率设置</b>

点选右上角：新建，进行计费套餐设置，填写信息后，确认即可。

<img src="/assets/R24nbLIXEoFnRNxCVGrcFxg4nHf.png" src-width="3288" src-height="1826" align="center"/>

#### 字段说明

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="65"/>
<col width="604"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>必填</b></p></th><th><p><b>填写说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>证监会交易征费</p></td><td><p>是</p></td><td><p>对应港交所 SFC Transaction Levy 的费用类型</p></td></tr>
<tr><td><p>联交所交易征费</p></td><td><p>是</p></td><td><p>对应港交所 Transaction Fee 的费用类型</p></td></tr>
<tr><td><p>财汇局交易征费</p></td><td><p>是</p></td><td><p>对应港交所 Transaction Levy 的费用类型</p></td></tr>
<tr><td><p>经纪人佣金</p></td><td><p>是</p></td><td><p>给经纪人的佣金（具体使用待确认）</p></td></tr>
<tr><td><p>费率名称</p></td><td><p>是</p></td><td><p>券商自定义的费率名称，再配置 IPO 费用时，选择使用，如下图：<br/><img src="/assets/TPaUbENXHohTbhxyggRc3xdUnCd.png" src-width="1162" src-height="472" align="center"/></p></td></tr>
<tr><td><p>计费币种</p></td><td><p>是</p></td><td><p>港股 IPO 默认以港币计费</p></td></tr>
<tr><td><p>客户融资年利率</p></td><td><p>是</p></td><td><p>为客户提供融资认购，收取客户的融资利息年利率，可以为 0</p></td></tr>
<tr><td><p>认购手续费</p></td><td><p>是</p></td><td><p>IPO 认购时，券商收取客户的认购手续费，为一次性收费，与认购金额无关，可以为 0</p></td></tr>
</tbody>
</table>

### 渠道管理

#### 功能介绍

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>业务参数配置 &gt; 新股配置 &gt; 渠道管理</p>
</div>

渠道配置主要是用来管理：劵商提供客户认购新股的融资来源 (渠道)

1. IPO 的资金来源是哪里：例如是券商自有资金，或是某银行提供融资资金；
2. 这个渠道可以进行什么类型的认购：例如只能现金认购、或只能进行 0 本金认购。

分配使用不同渠道，更方便券商后续的融资成本管理及 IPO 数据的统计。

#### 操作说明

<b>步骤一：查看新股列表</b>

点选右上角：新建，设定对应数据。

<img src="/assets/C6v2b0Tb2oZJtAxMY28c4PONn4b.png" src-width="3770" src-height="1694" align="center"/>

<img src="/assets/T25Mbgv77oSijMxzvxpcEmgNnn4.png" src-width="3788" src-height="1734" align="center"/>

#### 字段说明

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="569"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>必填</b></p></th><th><p><b>填写说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>渠道名称</p></td><td><p>是</p></td><td><p>自定义渠道名称，建议小于 10 个字符，不能有空格<br/>在配置融资池时，会根据名称选择。</p></td></tr>
<tr><td><p>支持类型</p></td><td><p>是</p></td><td><p>该渠道都支援什么样的认购类型，可多选。</p></td></tr>
<tr><td><p>是否同步至港交所</p></td><td><p>是</p></td><td><p>对应通路的订单是否需要同步到港交所。</p>
<ul>
<li>是 - 开启了 FINI 后，会透过 API 自动把该通路订单同步给港交所</li>
<li>否 - 不同步<br/>例如：透过上手/银行做的新股认购，不直接提交到港交所，则选择<b>否</b>；</li>
</ul></td></tr>
<tr><td><p>备注</p></td><td><p>否</p></td><td><p>自主备注，方便查看这个管道的用途、定义</p></td></tr>
</tbody>
</table>

### 购买力配置

#### 功能介绍

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>业务参数配置 &gt; 新股配置 &gt; 购买力配置</p>
</div>

该功能主要用于配置，在新股认购时，是否支持使用持仓购买力进行打新。若不配置，则默认不支持持仓购买力打新。

- 支持持仓购买力打新：那么无论是现金认购，还是融资认购，现金部分可以使用持仓抵押的购买力。
    - 举例说明：现金为 0，持仓 100,000HKD，能抵押 60,000 HKD 的购买力，那么若客户申购新股时候，就可以使用 60,000 KHD 的购买力进行现金申购，而非一定需要现金。

- 不支持持仓购买力打新：那么无论是现金认购，还是融资认购，现金部分只能使用港币已结算现金进行申购。
    - 举例说明：现金为 0，持仓 100,000HKD，能抵押 60,000 HKD 的购买力，那么若客户申购新股时候，现金申购金额为 0，融资申购若存在现金部分，那么也不可以申购。

#### 操作说明

<b>『新建』并填写信息</b>

1. 点击『新建』后弹出如下弹窗
2. 输入股票代码
3. 选择认购类型，普通认购选『认购』，国配认购选『国配』
4. 是否支持持仓打新，填写『是』
5. 是否支持借币，填写『是』
6. 信息填写完毕确认即可

<img src="/assets/HfD7bhuiqojdEMx62AoceF8gnZe.png" src-width="3284" src-height="1750" align="center"/>

打新购买力上浮系数说明：

代表认购新股时，持仓不能完全抵押。例如 700.HK 持仓 10,000 HKD，初始保证金=40%，那么代表可以抵押出来 6,000 HKD 的购买力，若此时填写了『上浮系数』=0.2。

那么在新股认购时，700.HK 的初始保证金会按照 40%+20%=60%（最多不超过 100%）计算，也就是打新时，购买力=4,000 HKD。

