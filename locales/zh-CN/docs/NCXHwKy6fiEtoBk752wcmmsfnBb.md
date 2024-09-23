---
title: 系统介绍
slug: NCXHwKy6fiEtoBk752wcmmsfnBb
sidebar_position: 2
---


# 系统介绍

## 概述

Whale 会计系统提供了一套可以自动获取数据源，按照预设的科目及分录规则进行自动记帐，进而完成帐实核对，主要包含了科目设置、分录规则设置、合并规则设置、会计分录、科目余额、科目明细帐、记帐数据源等功能

## 会计中台流程说明

<img src="/assets/SpYFbz4lQozQRyxm2xFcvmWtnsb.png" src-width="874" src-height="553" align="center"/>

## 参数设置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>业务参数设置 &gt; 记账参数</p>
</div>

证券机构在使用会计中台之前需要先进行记账参数设置，包括科目属性、会计科目、分录规则、资金类型、合并规则以及业务类型等设置。

#### 科目属性

<b>概要</b>

在使用会计中台前，券商需要配置会计属性。

<img src="/assets/YqTobs3VMofkkdxtim6cT9evnWb.png" src-width="3814" src-height="1598" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司需求自定义会计科目属性。
- 编辑：对已经添加的科目属性可以进行人工编辑。
- 删除：对已经添加的科目属性可以进行删除。

<b>专有名词解释</b>

- 科目属性：一般来说，会计科目按其经济内容来分类，可以划分为资产类、负债类、所有者权益类、成本费用类科目及损益类。但由于经济内容不同，会计科目所包含的内容就不同，因此，不同的科目就需要有不同的属性，来描述其所代表的经济内容。
- 余额方向：指该科目属性下相应科目的借方发生额和贷方发生额抵减后余额对应的方向，可选择的枚举值为：借方、贷方和共同（是指科目属性下不同的科目余额可以单独指定为借方或者贷方）。比如：定义科目属性的余额方向为借方，则该属性下所有科目的余额会留在借方，如果该科目的借方发生额大于贷方发生额，科目余额为正数，反之则为负数。

<b>操作步骤</b>

步骤一：在使用会计中台之前，要完成记账参数的配置，对于配置的第一步是新增会计科目属性

<img src="/assets/Jc7Vb2xbxom4aExDplPcMLudnZd.png" src-width="3407" src-height="1427" align="center"/>

步骤二：对于相应科目属性下未绑定会计科目，则可以进入后台进行修改

<img src="/assets/M9gfbhG9toDl7YxlCVicca4Mn7b.png" src-width="3300" src-height="1428"/>

- 📢：如果当前的科目属性已经绑定了会计科目，则无法进行修改，如果修改之后系统会报错提示如下：

<img src="/assets/NZfYbVhLNozmXfxaqzkcjVGtnIh.png" src-width="360" src-height="106"/>

步骤三：对于相应科目属性下未绑定会计科目，则可以进入后台进行删除

<img src="/assets/VVzebhc8aovx0SxtmTQcQDAAnNf.png" src-width="3288" src-height="1034" align="center"/>

- 📢：如果当前的科目属性已经绑定了会计科目，则无法进行删除

<img src="/assets/FqO3bSMIDoFJbxxBdbfcDN5Wn1f.png" src-width="368" src-height="104"/>

#### 会计科目

<b>概要</b>

在配置科目属性后，需要根据券商公司的要求配置会计科目。

<img src="/assets/Pj7Fb49Rvo0Kl5xYgmvcrOwwnNc.png" src-width="3820" src-height="1622" align="center"/>

<b>操作按钮说明</b>

- 批量导入：如果券商公司需要大量添加会计科目，可以选择批量导入，大批量新增会计科目。
- 新建：可根据券商公司需求单笔自定义会计科目。
- 编辑：对已经添加的会计科目可以进行人工编辑。
- 删除：对已经添加的会计科目可以进行删除。

<b>专有名词解释</b>

- 科目编码：系统会根据每个科目分配一个唯一的编码。
- 外部科目编码：由于券商公司接入的财务系统不一样，在券商公司财务系统中定义的科目名称和科目编码和会计中台也不一样，为了会计中台最终可以按照券商公司财务系统的要求导出财务报表，所以券商公司需要在会计科目中定义对应财务软件对应的科目编码，称之为外部科目编码。
- 会计科目：是指按照经济业务的内容和经济管理的要求，对会计要素的具体内容进行分类核算的会计科目所构成的集合。会计科目按其所提供信息的详细程度及其统驭关系不同，又分为总分类科目和明细分类科目，总分类科目可以对应会计中台的一级科目，明细分类科目对应会计中台二级或三级科目。

      为了会计中台系统搭建统一，在会计中台进行分录记账的明细科目统一为三级科目。

<b>操作步骤</b>

步骤一：科目属性配置完毕后，需要在对应科目属性下新增会计科目，由于我们系统支持三级科目，所以操作人员需要在后台逐级添加，可以根据自身科目数量选择批量还是单笔新建。

- 逐一科目新建
    - 在后台先新建一级科目
    <img src="/assets/Xt0Db5d8Qoja4rxG5QWca5Vwn0Y.png" src-width="3415" src-height="1500" align="center"/>
    - 在一级科目基础上新建对应的二级科目
    <img src="/assets/CZJYbExwHo3nFmxXyTFc1SPnny9.png" src-width="3421" src-height="1539" align="center"/>
    - 在二级科目基础上新建对应的三级科目
    <img src="/assets/HDx2be5D6ocTWuxpHp6cnH7xnAx.png" src-width="3413" src-height="1549" align="center"/>
    - 批量导入：通过后台提供的模板整理好需要导入的会计科目，然后通过后台完成文件导入
    <img src="/assets/Wr47b1FyFoJKElxSgePcE3NjnIe.png" src-width="3358" src-height="1480" align="center"/>
    <img src="/assets/S1sObyUZpo6SXax4bJrcE6U7nOe.png" src-width="2225" src-height="666" align="center"/>

步骤二：对于已经添加的会计科目，可以进入后台进行修改
- 📢：对于编辑后的会计科目，会应用于后续的会计分录，对于历史已经生成的会计分录如需更新，可以在「证券后台 - 会计中台 - 会计分录 - 明细」进行重跑。
    <img src="/assets/YjSYbTQNWo7VScxrOGCchBhrnrb.png" src-width="3308" src-height="1478" align="center"/>
- 对于编辑后的会计科目，会应用于后续的会计分录，对于历史已经生成的会计分录如需更新，可以在「证券后台 - 会计中台 - 会计分录 - 明细」进行重跑。
    <img src="/assets/RR8bbf9MooFj6Vx2PhbcL8tbnT4.png" src-width="3284" src-height="882" align="center"/>
- 📢：如果当前的科目已经配置了分录规则或者已记账，则无法进行删除

#### 分录规则

<b>概要</b>

形成分录之前需要根据券商公司实际业务需要配置对应的分录规则。

<img src="/assets/ESmSbOsTzoRK7jxkODlcsYSZnXf.png" src-width="3814" src-height="1524" align="center"/>

<b>操作按钮说明</b>

- 新增：可根据券商公司需求新增各业务的分录规则。
- 编辑：对已经添加的分录规则可以进行人工编辑。
- 复制：可以将当前分录规则进行复制，方便新增类似的分录规则。
- 删除：对已经添加的分录规则可以进行删除。

<b>专有名词解释</b>

- 分录规则：为了保证系统在获取数据源后能够自动形成会计分录，券商公司需要在后台进行规则配置，即数据源和最终输出分录的关联关系。
- 支付流水：是指券商公司记录客户交易变动的明细表，包括出金、入金、股票买入、股票卖出、货币兑换等。
- 客户收费账单：由于支付流水中客户发生的各种交易费用，比如股票交易费用是佣金、平台费和各种第三方收费合计，无法满足财务入账需求，需要解析客户交易的收费明细，作为会计记账的数据源。
- 银行账单：是指券商公司银行账户所有实际资金变动记录，按照各种标签进行打标后，可以作为资金流记账的数据源。

<b>操作步骤</b>

步骤一：增加了券商公司的会计科目之后，可以根据数据源的业务类型新增分录规则，目前会计中台可支持的数据源包括：支付流水、银行账单、客户收费账单、CCASS 账单、新股账单、代理商收费、业务账单统计、渠道汇兑单等。在此会分别介绍支付流水、银行账单、客户收费账单分录规则如何配置，其他数据源操作可同步参考。

<img src="/assets/ZEenb8ODBowJDWxICl1cRYn6noe.png" src-width="3437" src-height="906" align="center"/>

- “支付流水”如何添加分录规则

<img src="/assets/STNjbnDqvo7lH5xCxuRcVghmn34.png" src-width="2736" src-height="4936" align="center"/>

- “客户收费账单”如何添加分录规则

<img src="/assets/Y7iHbEL8Fo2Pt6x0unPcVt0Nn6d.png" src-width="2664" src-height="3890" align="center"/>

- “银行账单”如何添加分录规则

<img src="/assets/PgtBbNGgzoRycYxP6AncdzkTndc.png" src-width="2646" src-height="3740" align="center"/>

步骤二：对于已配置的分录规则可以后台进行修改。
- 📢：对于编辑后的分录规则，会应用于后续的会计分录，对于历史已经生成的会计分录如需更新，可以在「证券后台 - 会计中台 - 会计分录 - 明细」进行重跑。

<img src="/assets/JU9AbFSb4oOubUxAwN6cOLXLnvc.png" src-width="3278" src-height="1282" align="center"/>

<img src="/assets/VJjLbEplDor8adxuHWlcQrLLncc.png" src-width="2492" src-height="4530" align="center"/>

步骤三：对于已配置的分录规则可以后台进行删除
- 📢：当前分录规则删除后，只会对后续新的分录有影响，历史已生成的分录只有重跑之后才会同步更新。

<img src="/assets/BQfPbyVtcoUy8Vxfr9McfQnEnOc.png" src-width="3276" src-height="1304" align="center"/>

步骤四：如果需要新增类似业务的分录规则，可以使用后台复制功能

<img src="/assets/KrkobuGWXoVXtdxysULcXBlan8c.png" src-width="3252" src-height="1246" align="center"/>

#### 资金类型

<b>概要</b>

对于券商公司获取的银行账单可以自定义资金类型。

<img src="/assets/TopPbU9GCosOBdx3qzrc7SehnDe.png" src-width="3792" src-height="1462" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司银行账单新建不同资金类型标签。
- 删除：对已经添加的资金类型可以进行删除。

<b>专有名词解释</b>

- 资金类型：是指银行账单业务分类的名称

<b>操作步骤</b>

步骤一：如需要新增资金类型，可以根据需求在后台添加

<img src="/assets/VkO0bTGPZoMlmGxbMUtcQH9anOk.png" src-width="3248" src-height="834" align="center"/>

步骤二：如果未被使用的资金类型需要删除，可以后台操作

<img src="/assets/FoOObG9oXoEq7nxOaBJcQ9m7nzd.png" src-width="3278" src-height="724" align="center"/>

📢：如果当前的资金类型已经被银行账单使用，则无法进行删除

<img src="/assets/Sfxdb39zYofX35xaLwtcSKonnnf.png" src-width="362" src-height="114"/>

#### 合并规则

<b>概要</b>

如果券商公司导出的财务报表需要合并，则可以自定义合并规则。

<img src="/assets/Luehblccxoh7rXxR4jOceML8njg.png" src-width="3776" src-height="794" align="center"/>

<img src="/assets/X0XUbWrqSozvP7xnBUOc9DoBnWg.png" src-width="1846" src-height="735" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司需求新增报表的合并规则。
- 编辑：对已经添加的合并规则可以进行人工编辑。
- 删除：对已经添加的合并规则可以进行删除。

<b>专有名词解释</b>

- 合并规则：为了满足不同券商公司对于记账颗粒度的诉求，证券后台可支持合并规则配置，两种合并方式为：借贷各自合并、借贷抵减合并。借贷各自合并是指借方或者贷方按照本身的科目进行分类汇总，借贷抵减合并是指可以按照设定的相同科目或者不同科目将借贷金额抵减之后合并。

<b>操作步骤</b>

步骤一：如需要新增合并规则，可以根据需求在后台添加。

<img src="/assets/Muq6bASXHoTa5yxqMnacmg0UnNc.png" src-width="2396" src-height="4954" align="center"/>

- 📢：如果在新建合并规则选择的业务类型都未配置分录规则，则无法新建

<img src="/assets/Ae1LbrVN5oYAmtxzZhOcdoexn0Q.png" src-width="2680" src-height="3140" align="center"/>

步骤二：对于已配置的合并规则可以后台进行修改

<img src="/assets/SqFFbe07vov6gdxoH6pcZhPBnnc.png" src-width="3258" src-height="780" align="center"/>

- 📢：对于编辑后的合并规则，会应用于后续的合并分录，对于历史已经生成的合并分录如需更新，可以在「证券后台 - 会计中台 - 会计分录 - 合并」进行重跑。

步骤三：如果已配置的合并规则可以后台删除

<img src="/assets/O5vebcjkzoySdwxe1EYcXAX3nVe.png" src-width="3256" src-height="618" align="center"/>

- 📢：当前合并规则删除后，只会对后续新的分录有影响，历史已生成的合并分录只有重跑之后才会同步更新。

#### 业务类型

<b>概要</b>

业务类型是指区分记账数据源各种业务的标签，该功能可提供客户按照记账与否的要求进行个性化配置

<img src="/assets/BE5gbzttIouTv4xZGjFcUHExnKd.png" src-width="3772" src-height="1622" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司需求配置业务类型。
- 编辑：对已经添加的业务类型可以进行人工编辑。

<b>专有名词解释</b>

- 业务类型：是指区分记账数据源各种业务的标签

<b>操作步骤</b>

步骤一：如需要新增业务类型，可以根据需求在后台添加。

<img src="/assets/Nrq7bpVlNoB5pvxi9sNc6IKVnMv.png" src-width="3298" src-height="1410" align="center"/>

步骤二：对于已配置的业务类型可以后台进行修改

<img src="/assets/JF7BbXQ1roq1CExXWOUcshVOn8a.png" src-width="3266" src-height="1360" align="center"/>

- 📢：对于编辑后的业务类型，会应用于后续的分录，对于历史已经生成的分录如需更新，可以在「证券后台 - 会计中台 - 会计分录 - 明细」进行重跑。

## 会计分录

### 适用场景

在证券系统发生出、入金或者交易之后，系统就可以自动获取支付流水、客户收费账单或者其他分录数据源并根据客户初始配置的记账参数自动形成明细和合并的会计分录

### 前置条件 

拥有会计中台的菜单权限，并且已经设定了会计工作中涉及的参数设置

### 会计分录列表

执行菜单：证券后台&gt;会计中台&gt;会计分录

此功能可以查询或者维护会计分录，其中明细的会计分录是形成合并的依据，合并的会计分录是导出外部财务系统对应财务报表的依据

<img src="/assets/Jbvab1mBhoiRPHxF0qWc3Zu1n17.png" src-width="3794" src-height="922" align="center"/>

<img src="/assets/BhoFbmjwCoUW6nxB3VOcvACzndg.png" src-width="3282" src-height="1646" align="center"/>

首先，系统是支持根据不同数据源配置分录规则，可以自动地对数据源产生会计分录，若某些数据源无法自动配置，此功能提供批次导入与手工录入方式：

如果自动产生分录后，作业提供新增【编辑】功能，可以修改产生分录纪录，同时纪录新增支付流水新增支票号栏位展示

<img src="/assets/CqZlbS8mxo2o2exeVgzc3x28nDb.png" src-width="2658" src-height="1412"/>

<img src="/assets/PFtjbvAAko74FpxyhiHc0oxonPc.png" src-width="3270" src-height="2754" align="center"/>

如果需要手工录入的分录很少，可以选择【手动录入】

<img src="/assets/RsZPb9Fn4ofvgfxunhCccLw7nqb.png" src-width="2502" src-height="1330"/>

<img src="/assets/OAmyb0IQpopXP6xg5U0cMSZcnGb.png" src-width="3290" src-height="2782" align="center"/>

也可以选择【批量导入】，先行下载范本之后，根据批量范本进行编制分录并导入到系统中

<img src="/assets/LFG3bgtVSokpSVx9DNwcWTXfnRb.png" src-width="3246" src-height="1534" align="center"/>

在记录右侧操作区的【删除】键，也可进行删除此会计分录

<img src="/assets/LDqxbQHPRo1exKx86CEcZZKunnb.png" src-width="3364" src-height="1474" align="center"/>

如果某个帐务日期对应的数据源获取不完整，可以选择对应日期的数据源进行【重跑】，系统会更新数据源产生最新会计分录资料

<img src="/assets/Nv9ibNwYYoHhlNxJlbmc79LZnEd.png" src-width="3362" src-height="1396" align="center"/>

如果系统生成的会计分录已经核对无误，手工可以点选【汇总】生成科目余额汇总表

<img src="/assets/RtrJbDpIHo7aA3xk99OcvUplnwb.png" src-width="3370" src-height="1452" align="center"/>

会计分录中新增【报表导出】按钮，方便按照财务软件格式要求进行报表导出

<img src="/assets/FpfgbBv56ouzM3xraQTcXk5unWb.png" src-width="3248" src-height="1606" align="center"/>

提供合并会计分录查询功能，合并会计分录时，系统会按账帐日期获取汇率

<img src="/assets/XYBsbXDA3oylpaxKqLDcrqFknkh.png" src-width="3348" src-height="1418" align="center"/>

如果对应的合并规则有更新，可以选择对应日期的合并分录进行重跑

<img src="/assets/SerGbDjZCo3lpuxxNYqcvsWAnke.png" src-width="3294" src-height="1692" align="center"/>

## 科目余额

### 适用场景

根据会计分录记录的数据，以科目的形式查看余额

### 前置条件 

拥有会计中台的菜单权限，并且会计分录模组已经存在数据

### 科目余额列表

执行菜单：会计中台&gt;科目余额

系统每日会根据科目明细帐按照帐务日期进行汇总，汇总形成科目余额汇总表

<img src="/assets/V97rbtw7UoDrejxfD3KcDNXan3e.png" src-width="3188" src-height="1460" align="center"/>

## 科目明细帐

### 适用场景

根据会计分录记录的数据，以科目的形式查看明细帐

### 前置条件 

拥有会计中台的菜单权限，并且会计分录模组已经存在数据

### 科目明细帐列表

菜单：会计中台&gt;会计科目明细帐

对于系统按照科目展示的明细帐，可以在此功能进行查询

<img src="/assets/T6MDbuLDPo7SJPx8JcVcNWg0nVf.png" src-width="3218" src-height="1506" align="center"/>

也可以根据系统生成的科目明细，在此功能可以点选【报表导出】选择使用对应财务软体格式导出 

目前系统支持以下 GL 软体汇入格式：

- FlexSystemVerNV5W
- GeneralLedgerSystemV3
- SunSystemsFinancialsRelease
- Yonyou U8 V.13
- FlexAccount V11
- Sage300 AOM (GL)

## 银行余额

### 适用场景 

使用者需要根据银行提供的流水与系统存在的自己资料进行多维度比对

### 前置条件 

银行流水与后台资料均已生成

### 维度展示

帐单核对

执行菜单：会计中台&gt;银行余额&gt;帐单核对 Tab 页签

根据银行账单历史发生额计算的结果与银行历史余额进行核对，进而保证银行账单明细的准确性和完整性。

<img src="/assets/WmODbMWcFoS3u7xTevjcGD15n0g.png" src-width="3234" src-height="1542" align="center"/>

## 历史余额

执行菜单：会计中台&gt;银行余额&gt;历史余额 Tab 页签

是指券商公司所有银行帐户某一帐务日期的银行实际余额。

可以选择批次导入

<img src="/assets/YaZQbO1zmojQVRx5wBEc6yDAnKf.png" src-width="3238" src-height="1524" align="center"/>

<img src="/assets/UmqXbLPtIo8kb1xtNCqcyGlRned.png" src-width="3242" src-height="1234" align="center"/>

## 实时余额

执行菜单：会计中台&gt;银行余额&gt;实时余额 Tab 页签

是指券商公司已对接 API 的银行账户的银行实时余额。

<img src="/assets/Ja7xbuke2oUHmMxJUPgc1qkZnJf.png" src-width="3252" src-height="1242" align="center"/>

## 记帐数据源

### 适用场景 

用户在记帐时需依照各类明细会计资料进行分类整理，并根据整理出的异常资料进行单独处理

### 前置条件 

支付流水、客户收费帐单、银行流水、CCASS 资料等均已准备就绪

### 异常数据源

执行菜单：会计中台&gt;记帐数据源&gt;异常数据源 Tab 页签

系统对于无法自动形成分录的数据源会视作为异常数据，可以在此功能进行查询

<img src="/assets/FFEbbx5waoTyDXxZwVJc8bYxnCe.png" src-width="3236" src-height="1110" align="center"/>

对于异常数据源，可以在记录列表通过点击「异常数据源单号」，可以跳转到具体数据源

<img src="/assets/N7hbbofgDorNDWxvodjcbGBmn4d.png" src-width="3414" src-height="1210" align="center"/>

### 客户收费帐单

执行菜单：会计中台&gt;记帐数据源&gt;客户收费帐单 Tab 页签

由于支付流水中用户发生的各种交易费用，比如股票交易是汇总数，类似于佣金、平台费和各种第三方收费合计，无法满足财务入帐需求，需要解析用户交易收费明细，作为会计记账的数据源。

客户收费帐单对于股票交易类型可以更细分配置，可以支持单独区分出暗盘，并且暗盘交易可以单独配置分录规则并形成会计分录

记帐数据源“客户收费帐单”增加【帐务日期】，并用于记帐分录帐务日期取值

<img src="/assets/Km53bLm0RoJ0pcx6HM1c0BfEn1e.png" src-width="3206" src-height="1502" align="center"/>

如果对应客户收费账单不需要记账，可以进入后台将记录进行删除

<img src="/assets/OBkIbJENqo9D3pxTk3HcM8j9nSe.png" src-width="3286" src-height="712" align="center"/>

如果某一个账务日期的的客户收费账单不准确，可以在后台进行重跑

<img src="/assets/EUUPbpZBgochLLxX1aXcGOQ5nLd.png" src-width="3302" src-height="1110" align="center"/>

### 支付流水

执行菜单：会计中台&gt;记帐数据源&gt;支付流水 Tab 页签

是指券商公司记录用户交易变动明细表，会计中台根据转账、出账和入账进行规范获取，作为会计分录中信息流记账的数据。

<img src="/assets/WcpZbfvvyoL8JwxccTicujfsnJd.png" src-width="3230" src-height="1502" align="center"/>

如果对应支付流水不需要记账，可以进入后台将记录进行删除

<img src="/assets/VLLpb7yumoiVfSxXhBtcFxTcnZb.png" src-width="3258" src-height="818" align="center"/>

如果某一个账务日期的的支付流水不准确，可以在后台进行重跑

<img src="/assets/R3HFbItxVoFEzCxi9ymcX683nme.png" src-width="3282" src-height="1132" align="center"/>

### CCASS 账单

执行菜单：会计中台&gt;记帐数据源&gt;CCASS 账单 Tab 页签

增加 CCASS 文件解析，此 CCASS 数据源是相关文件导入后，系统自动根据配置完成会计分录处理，可在此 Tab 查询记录或删除已转入的数据源分录

<img src="/assets/NAoebDTf7oGM62xJCQJcuzWEnag.png" src-width="3240" src-height="1478" align="center"/>

### 新股帐单

执行菜单：会计中台&gt;记帐数据源&gt;新股帐单 Tab 页签

新增新股帐单

<img src="/assets/MwFQbP7x5oN11RxzIeGcYJwCnXf.png" src-width="3262" src-height="1120" align="center"/>

### 代理商收费

执行菜单：会计中台&gt;记帐数据源&gt;代理商收费 Tab 页签

为获取机构合约的相关费用，满足券商公司进行上手费用记账的诉求，新增代理商收费作为会计记账的数据源

<img src="/assets/R1yIbUuYpog2Ipxuxtyc6Y8gndc.png" src-width="3288" src-height="912" align="center"/>

### 银行账单

执行菜单：款项管理&gt;银行账单&gt;银行账单 Tab 页签

券商公司银行账户所有实际资金变动记录，按照各种标签进行打标后，可以作为资金流记账的数据源。

<img src="/assets/LTzIbRlEkojN1SxHuZ4cQmIunrc.png" src-width="3794" src-height="1002" align="center"/>

如果银行账单资金类型未知，可以人工后台进行操作修改

<img src="/assets/RR3wbH4rAonsn5xOpDHcb80qnoe.png" src-width="3376" src-height="1822" align="center"/>

<img src="/assets/LAq9bpVauoBFEfxUEWZcvUMfnfd.png" src-width="3376" src-height="1816" align="center"/>

如果银行账单有缺失，可以后台进行文件导入

<img src="/assets/YAzkbKYafo7Lf2xI7OGc9Cbnnnd.png" src-width="3260" src-height="826" align="center"/>

如果银行账单记录有问题，可以后台进行删除

<img src="/assets/OJC3bcn93ohKSgxAOFVcC5PKnkb.png" src-width="3260" src-height="826" align="center"/>

如果入金账单和出金账单有更新，可以在后台进行重跑

<img src="/assets/HTvVbKFrioX0wIxdoJVcYwognug.png" src-width="3260" src-height="826" align="center"/>

## 入金在途

### 适用场景 

作为追踪客户在入金未完成状态时的记录参考

### 前置条件 

入金流程未完成

执行菜单：会计中台&gt;入金在途&gt;明细

提供在途资金的汇总记录查询

<img src="/assets/If7mbcaCooFQM2xx692cVK2tnGg.png" src-width="3282" src-height="1690" align="center"/>

执行菜单：会计中台 &gt; 入金在途&gt;汇总核对

提供在途资金与银行账单汇总核对结果查询

<img src="/assets/FdlYbk2nMoyaimx2M9wcp1Kynnf.png" src-width="3242" src-height="540" align="center"/>

