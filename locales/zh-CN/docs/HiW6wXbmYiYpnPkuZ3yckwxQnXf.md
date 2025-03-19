---
title: 系统介绍
slug: HiW6wXbmYiYpnPkuZ3yckwxQnXf
sidebar_position: 2
---


# 系统介绍

# 一、系统介绍

入金是指投资者将资金转入其证券账户的过程。这一过程涉及多个环节，确保资金的安全、准确地进入投资者的账户。

Whale 系统包含了处理入金申请、匹配银行流水、入金审核、单独处理开户中入金、对账、入金记录查询等功能，由于监理与风控需求，系统的功能设计具备多角色、流程化的特色，兼顾了高入金效率与低资金风险。

因不同券商公司对于入金的要求不同，有些券商要求快速入金，有些公司要求精准匹配银行流水后再入金，综合考虑了上述因素，系统兼容了 2 套入金的流程，如下：

<img src="/assets/SsSPwZG0oh6yXbbepuxcYInsnke-board.png" src-width="809" src-height="167"/>

## 前置条件

您需要获取以下授权后方可正常使用系统功能

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>权限名称</p></th><th><p>权限说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>管理资金参数、银行账单、入金的权限</p></td><td><ul>
<li>管理银行账单、出入金记录/方式、银行卡、换汇业务、资金指引的权限</li>
<li>管理资金参数的权限</li>
</ul></td></tr>
</tbody>
</table>

# 二、操作说明

# 入金配置

## 资金参数配置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>业务参数设置 &gt; 资金参数</p>
</div>

1. 公司银行账户

在客户入金前，需要在后台添加对应公司银行账户，并且配置公司银行账户下对应的入金方式。

<img src="/assets/Ps7TbaliYouroyxhlZGce9JGnkh.png" src-width="3286" src-height="998" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司自行增加对应公司银行账户信息。
- 编辑：对已经添加的公司银行账户信息可以进行人工编辑。

1. 币种

在客户入金前，需要进行入金币种设置。

<img src="/assets/GWgZbkb8uoWN3fx0rXTc1G85nrg.png" src-width="3282" src-height="988" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司自行增加币种。
- 编辑：对已经添加的币种可以进行人工编辑。

## 客户银行卡

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款项管理&gt;客户银行卡</p>
</div>

客户需要在券商配置好客户自己的银行卡信息，添加方式包括：客户客户端 App 自行添加、后台添加。

<img src="/assets/D9fsb2NTvo6FYsxoYOgc6zR4nSf.png" src-width="3349" src-height="1396" align="center"/>

<b>操作按钮说明</b>

- 批量新增：依照模板批次进行银行卡资讯的增加
- 新增银行卡：单笔新增银行卡
- 回收站：展示已删除的银行卡信息
- 设置拒绝理由：设置驳回银行卡拒绝理由
- 审核：后台审核银行卡
- 查看备注：查看银行卡相关备注
- 删除：删除银行卡信息
- 更新入金见证状态：关联客户入账明细，将银行卡的入金见证状态从“待见证”更新为“已见证”

## eDDA 授权

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款项管理&gt;客户银行卡</p>
</div>

如果客户需要进行 eDDA 入金，则需要进行 eDDA 授权，如果客户进行 eDDA 授权之后，则后台可以查到对应记录。

<img src="/assets/UsNJb31KZoqkElxU7L2c9BhQnid.png" src-width="3248" src-height="870" align="center"/>

<b>操作按钮说明</b>

- 刷新：重新获取最新的 eDDA 的授权记录
- 备注：对授权记录进行配置
- 修改状态：修改授权记录的状态

## 银行相关信息配置

客户或者公司银行账户信息配置时需要使用的“常见银行枚举值”、“国家/区域枚举值”、“银行区域列表枚举值”都可以通过后台进行配置。

### 1.卡所属银行

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款项管理&gt;App 管理&gt;卡所属银行</p>
</div>

<img src="/assets/GMfcbRsw7oxBruxvhzdcURGonsd.png" src-width="3284" src-height="762" align="center"/>

<b>操作按钮说明</b>

- 新建：单笔增加各地区常见银行列表信息
- 编辑：对于已添加的银行列表信息进行编辑

### 2.用户绑卡 - 国家/地区

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款项管理&gt;App 管理&gt;用户绑卡 - 国家/地区</p>
</div>

<img src="/assets/RXoqbKWNZofQqixXwW4cEL2enEe.png" src-width="3260" src-height="774" align="center"/>

### 3.银行区域列表

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款项管理&gt;App 管理&gt;银行区域列表</p>
</div>

<img src="/assets/S3tmbT8Vio1qcYxtpz6ctPSrnAe.png" src-width="3290" src-height="978" align="center"/>

<b>操作按钮说明</b>

- 新建：单笔增加银行区域列表信息
- 编辑：对于已添加的银行区域列表信息进行编辑
- 删除：删除银行区域列表信息

## 入金指引配置

对于客户端用户入金页面，可以后台配置对应操作指引以及入金参数

### 1.入金指引

<img src="/assets/AK7jbhzoqonEhIxXa0kcfu90noe.png" src-width="3286" src-height="980" align="center"/>

### 2.入金参数

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>款项管理&gt;App 管理&gt;入金参数</p>
</div>

<img src="/assets/XoehbngXxoqlidxs115cGbUQnje.png" src-width="3260" src-height="1726" align="center"/>

<b>操作按钮说明</b>

- 新建：单笔新建入金参数
- 编辑：对于已添加的入金参数列表信息进行编辑
- 删除：删除入金参数列表信息
- 上架：是指配置的入金参数需应用于客户端展示，则可以将参数上架
- 下架：是指配置的入金参数无法适用于客户端展示，则可以将参数下架
- 复制：通过复制原本参数信息进行快速新建新的入金参数
- 审批：对于入金参数如果开通了工单审批，则上述的所有操作提交之后，需要工单审批

<b>多家收款银行配置</b>

- 如客户端需要根据客户选择的银行，在同一个入金方式下需要展示多个收款银行，则可以参考如下截图的配置。

<img src="/assets/JTldbcQgio6BvKxqiw5c8EYOnMz.png" src-width="3278" src-height="706" align="center"/>

# 入金操作

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：款项管理 - 入金</p>
</div>

## 入金申请

入金申请为用户方提出，申请的内容包含了币种、申请金额、收款银行卡与备注 4 大部分。WHALE 使用者可以手动帮助客户进行证券入仓并根据客户提交的申请进行驳回、提交审批等操作。

- 新建 (入金申请)

适用于使用者联络后台操作员进行手动入金的场景，操作员需要依序选择客户并输入金的币种、方式、收款银行、金额、备注、凭证（如有）

<img src="/assets/KkeVbvwzToGPx1xtVh0cetdOnKd.gif" src-width="2074" src-height="1000" align="center"/>

- 驳回：若客户递交的入金申请资料有误或使用者反馈本次申请无效时，操作员可以进行【驳回】操作
- 删除：若客户递交的入金申请资料有误或使用者反馈本次申请无效时，操作员也可以透过【删除】按钮直接删除目标记录
- 修改：若在提交入金申请前，发现客户递交的某笔入金申请有问题，可在与客户确认无误后可以透过【编辑】按钮进行修正，修改后需进行工单审批，审批通过后修改内容生效。
    - 修改的范围：币种、入金方式、收款银行、金额、入金手续费、备注、凭证（重新上传）
    <img src="/assets/IlRVbRl3toqWxFxk9tJcmms6nNf.gif" src-width="2076" src-height="998" align="center"/>

操作

- 直接入账：由于不同券商使用者对于入金的时效性要求不同，直接入账可以帮助使用者快速处理入金流程，使用者接收到客户的入金申请后只需补充银行流水资讯即可完成入账。直接入账预设需要进行审批，如果不需要审核可联络运维人员进行配置。
    - 需要审批：进入直接入账的弹窗内确认信息无误后，点击【提交审批】后，记录流转至入金审核页面，审批后即可入账
    - 无需审批：进入直接入账的弹窗内确认信息无误后，点击【确定入账】后即可入账

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>需要审批</p>
<img src="/assets/FlOqbkU7loUf14xPDTscaU6cnzh.png" src-width="1678" src-height="1764" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<p>无需审批</p>
<img src="/assets/OYtkbLK4QolXjYx2OalckTh1nwf.png" src-width="1688" src-height="1754" align="center"/>
</div>
</div>

- 凭证关联，如果操作入账的申请是多笔，则可以进入凭证关联页面进行批量操作入账

<img src="/assets/U0UNbBAO6oOkvTx0QigcEti1nYd.png" src-width="3774" src-height="1000" align="center"/>

进入凭证关联页面，会筛选出所有等待入账的申请单，由操作者进行选择，在核对无误后提交入账

<img src="/assets/DQFAbPj8Bo8ScCxmXkVcndcQnxn.png" src-width="3324" src-height="1634" align="center"/>

## 入金匹配

此页面的数据皆来自银行账单中的入金账单，若券商的业务规范需要银行流水与入金记录匹配一直后进行入账，在确认银行流水资讯已同步系统后，可手动在入金匹配页面下处理。处理的方式分为：关联入账、退还客户 2 大类。

<table>
<colgroup>
<col width="100"/>
<col width="544"/>
</colgroup>
<tbody>
<tr><td><p>处理方式</p></td><td><p>名词解释</p></td></tr>
<tr><td><p>关联</p></td><td><p>指代根据银行账单中的付款方银行账号、付款方姓名、币种、金额等栏位自动与入金记录是否一致来进行关联入账。</p></td></tr>
<tr><td><p>入金退还</p></td><td><p>指代没有正常开户的客户或因客户账户有风险等原因无法入账至证券账户的情况，需要将资金退回客户银行卡的整体处理流程。</p></td></tr>
<tr><td><p>出金退还</p></td><td><p>指代用户的出金被用户的收款行拒绝，用户需要把客户被收款行退回的钱配对到客户的账户中。（由于对银行流水而言是一笔资金流入，为了能够区分正常的入金，故放置在入金匹配的页面）</p></td></tr>
</tbody>
</table>

- 关联：仅入金的银行账单中系统无法自动匹配需要人工操作的记录，在此页面下操作员可以根据系统提示进行确认，并进行后续入账或者其他操作。
    - 关联页面将根据姓名配对用户自动比对栏位（如图），确认无误后可点选【关联】
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/Wb1ibQjqOoeDcjxeySLcfNXNnHd.png" src-width="3818" src-height="1842" align="right"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/Wj7sbldCoopPv3xe4rHcfuHpnNg.png" src-width="3904" src-height="1950" align="center"/>
        </div>
    </div>
    - 如系统预设匹配的用户不准，可透过【自定义】手动关联该笔银行流水所对应的客户。关联的方式有：入金的申请与证券账号
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/QgoqbKGL6oftC5xOl7JczjwEnRc.png" src-width="3308" src-height="1776" align="center"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/FFOubF4z9oJkS7xQCFqcSVvFnid.png" src-width="3308" src-height="1750" align="center"/>
        </div>
    </div>

入金退还：若因种种原因，导致入金未能正常进入客户的证券账户，需要对这笔记录进行退款时，可以使用该功能进行操作。用户需填写客户的银行卡讯息，确认无误后点选【确定】流转至入金审核页面进行审核操作。

<img src="/assets/Q9ZybG1ano5vKixwrqzcvHSanNN.png" src-width="2436" src-height="1326" align="center"/>

出金退还：由于入金匹配页面的数据来自银行流水流入的信息，如果用户在处理客户出金的时候被银行拒绝，在银行流水中会以流入的形式存在，用户需要关联出金的业务流水号通过【出金退还】功能处理此类记录。

<img src="/assets/OouibaBavoYDtgxrTyocGWl6nle.png" src-width="2366" src-height="1234" align="center"/>

## 入金审核

用户在「入金匹配」页面中依赖银行流水流入的资讯进行处理后，下游的审核人员会对处理的结果进行审批，通过后方可入账。对于正常关联入账的入金，由于存在客户在入金时时证券账户仍在客户中的情况，后台将针对这类记录单独进行审批。

- 开户中：选取目标记录后，点选【审批】后进入详情页面再次核对讯息，确认无误后发起工单审批

<img src="/assets/BLVBbve42ozKLPxcYHjcH9kWnFb.png" src-width="3334" src-height="1598" align="center"/>

- 已开户：选取目标记录后，点选【审批】后进入详情页面再次核对讯息，确认无误后审核通过

<img src="/assets/Tk2DbATvmoM28OxL8S6cGZENnez.png" src-width="3318" src-height="1598" align="center"/>

- 入金退还：选取目标记录后，点选【审批】后唤出审批工单，确认资讯无误后审核通过

<img src="/assets/SwY0b0oBDoBkJex4zohczvxqnQb.png" src-width="3330" src-height="1596" align="center"/>

- 出金退还：选取目标记录后，点选【审批】后确认无误后直接通过，无需走工单审批流程

<img src="/assets/Fc1HbyiKgoLkSIxsX5JcyXVonHb.png" src-width="3318" src-height="1598" align="center"/>

## 银证入金

在银证开户之后，用户可以通过银证入金，系统接收到银行通知后，会直接匹配用户后自动入账，无需人工干预。

<img src="/assets/QQ2jbmrkDolXXrxBlcfcOjiOnPc.png" src-width="2854" src-height="1074" align="center"/>

## eDDA 入金

在 eDDA 授权完成之后，用户可以通过 eDDA 入金，系统接收到银行通知后，会直接匹配用户后自动入账，无需人工干预。

<img src="/assets/J0SKbWDcLoQXc6xg5fPcTACWnBf.png" src-width="2820" src-height="1048" align="center"/>

## FPS 转数快

对于 FPS 转数快，在或者银行账单后，系统可以通过账单和入金申请进行自动匹配，匹配一致后可以自动入账。

<img src="/assets/EK3ObfOb1oc07UxfxMXcgsb5nzd.png" src-width="2324" src-height="1070" align="center"/>

## 开户中入金

- 客户选择认证类型为转账验证，则需要通过入金申请进行操作入账，具体操作详见“入金申请”
- 客户选择认证类型为支票验证，由于客户端未提交入金请申请，需要以银行流水为准入账，具体操作详见“入金匹配”

由于入金流程与开户流程可以并行发起，存在入金流程已通过但开户流程仍在执行中的情况，针对该类入金记录，用户可在该页面中进行跟踪已通过入金流程的记录对应的开户情况。

用户可以在页面中「开户状态」查看即时的状态，如果客户的开户流程未通过，可以将其【驳回】（<b>可批量操作</b>）

<img src="/assets/ZhLmbvYE4orSm4xen3Hc3eqrnfg.png" src-width="3392" src-height="1693" align="center"/>

## 入金对账

为了保障资金流水的准确性，业务中需要将银行的流水与系统中的入金记录进行比对，提升入金的准确率。银行流水的来源有 2 种：①API 对接（自动产生）、②手动导入。

- 对账：用户可以选择目标期间的银行流水进行刷新，系统将自动匹配银行流水与系统的入金记录，对账完成后，可以关注清单中的「对账结果」列，如果不一致，需要进一步追踪处理。

<img src="/assets/RBp9bICB4oZqjVxxFmYcsj4GnOh.png" src-width="3336" src-height="1770" align="center"/>

<img src="/assets/WxpxbAAATojywIxFPXfcUzAEnGb.png" src-width="3828" src-height="1870" align="center"/>

## 入金记录

入金记录页面记录入金的全流程状态，使用者可随时进行查询、导出、导入等操作。

- 若用户在使用【直接入账】入金时，没有录入银行流水信息，可在该页面中通过【导入银行流水】批量导入银行流水信息

<img src="/assets/X1TVb7Ur1oSm8HxLRkFc0uKYnlg.png" src-width="2804" src-height="1056" align="center"/>

- 对于已经冻结的支票入金，在“预计解冻时间”之前可以后台手工解冻，也可以等系统自动解冻。

<img src="/assets/Lc0Gba5PHom600xkoeNcNQgBnxe.png" src-width="1640" src-height="367" align="center"/>

- 人工提交解冻申请后，需等待工单审批。

<img src="/assets/OSaZb9E84oTrF8xukv5czc7NnId.png" src-width="1622" src-height="470" align="center"/>

