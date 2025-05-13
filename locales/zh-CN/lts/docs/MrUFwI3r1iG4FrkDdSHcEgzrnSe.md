---
title: 入金
slug: MrUFwI3r1iG4FrkDdSHcEgzrnSe
sidebar_position: 0
---


# 入金

# 一、系统介绍

入金是指投资者将资金转入其证券帐户的过程。这一过程涉及多个环节，确保资金的安全、准确地进入投资者的帐户。

Whale 系统包含了处理入金申请、匹配银行流水、入金审核、单独处理开户中入金、对帐、入金记录查询等功能，由于监理与风控需求，系统的功能设计具备多角色、流程化的特色，兼顾了高入金效率与低资金风险。

因不同券商公司对于入金的要求不同，有些券商要求快速入金，有些公司要求精准匹配银行流水后再入金，综合考虑了上述因素，系统兼容了 2 套入金的流程，如下：

<img src="/assets/Hp8VwKnyShhc1KbzdQHcMrzYnnb-board.png" src-width="809" src-height="167"/>

## 前置条件

无

# 二、操作说明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：款项管理 - 入金</p>
</div>

## 入金申请

入金申请为用户方提出，申请的内容包含了币种、申请金额、收款银行卡与备注 4 大部分。WHALE 使用者可以手动帮助客户进行证券入仓并根据客户提交的申请进行驳回、提交审批等操作。

- 新建 (入金申请)

适用于使用者联络后台操作员进行手动入金的场景，操作员需要依序选择客户并输入金的币种、方式、收款银行、金额、备注、凭证（如有）

<img src="/assets/N62Jb4i6loaEbCx4WJwcTm6wnQd.gif" src-width="2074" src-height="1000" align="center"/>

- 驳回：若客户递交的入金申请资料有误或使用者反馈本次申请无效时，操作员可以进行【驳回】操作
- 删除：若客户递交的入金申请资料有误或使用者反馈本次申请无效时，操作员也可以透过【删除】按钮直接删除目标记录
- 修改：若在提交入金申请前，发现客户递交的某笔入金申请有问题，可在与客户确认无误后可以透过【编辑】按钮进行修正，修改后需进行工单审批，审批通过后修改内容生效。
    - 修改的范围：币种、入金方式、收款银行、金额、入金手续费、备注、凭证（重新上传）
    <img src="/assets/ZfOGbD5bboc6MWxboE8cnoBYnhg.gif" src-width="2076" src-height="998" align="center"/>

- 提交（<b>可批量操作</b>）：经过操作人员初步审查无误后，可以将申请提交至下一节点的操作人员进行审核 - 提现

操作

- 直接入帐：由于不同券商使用者对于入金的时效性要求不同，直接入帐可以帮助使用者快速处理入金流程，使用者接收到客户的入金申请后只需补充银行流水资讯即可完成入帐。直接入帐预设需要进行审批，如果不需要审核可联络运维人员进行配置。
    - 需要审批：进入直接入账的弹窗内确认信息无误后，点击【提交审批】后，记录流转至入金审核页面，审批后即可入账
    - 无需审批：进入直接入账的弹窗内确认信息无误后，点击【确定入帐】后即可入账

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>需要审批</p>
<img src="/assets/D50lbtT7qo4P5Gxa4fdcCIGLnee.png" src-width="1678" src-height="1764" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<p>无需审批</p>
<img src="/assets/D9MYbZLwIodUk4xgx96cVQV5n5O.png" src-width="1688" src-height="1754" align="center"/>
</div>
</div>

## 入金匹配

此页面的数据皆来自银行帐单中的入金帐单，若券商的业务规范需要银行流水与入金记录匹配一直后进行入帐，在确认银行流水资讯已同步系统后，可手动在入金匹配页面下处理。处理的方式分为：关联入帐、退还客户 2 大类。

<table>
<colgroup>
<col width="100"/>
<col width="544"/>
</colgroup>
<tbody>
<tr><td><p>处理方式</p></td><td><p>名词解释</p></td></tr>
<tr><td><p>关联</p></td><td><p>指代根据银行帐单中的付款方银行帐号、付款方姓名、币种、金额等栏位自动与入金记录是否一致来进行关联入账。</p></td></tr>
<tr><td><p>入金退还</p></td><td><p>指代没有正常开户的客户或因客户帐户有风险等原因无法入帐至证券帐户的情况，需要将资金退回客户银行卡的整体处理流程。</p></td></tr>
<tr><td><p>出金退还</p></td><td><p>指代用户的出金被用户的收款行拒绝，用户需要把客户被收款行退回的钱配对到客户的帐户中。（由于对银行流水而言是一笔资金流入，为了能够区分正常的入金，故放置在入金匹配的页面）</p></td></tr>
</tbody>
</table>

- 关联：仅入金的银行账单中系统无法自动匹配需要人工操作的记录，在此页面下操作员可以根据系统提示进行确认，并进行后续入账或者其他操作。
    - 关联页面将根据姓名配对用户自动比对栏位（如图），确认无误后可点选【关联】
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/TvXgbQOkcom643xSHe5cbtnDnBc.png" src-width="3818" src-height="1842" align="right"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/SkrUbgAmDoo4fMxHRy2cOR6Qngg.png" src-width="3904" src-height="1950" align="center"/>
        </div>
    </div>
    - 如系统预设匹配的用户不准，可透过【自定义】手动关联该笔银行流水所对应的客户。关联的方式有：入金的申请与证券帐号
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/NthfbU9kiozjvgxLe7tcsd4Gntb.png" src-width="3308" src-height="1776" align="center"/>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/GMHlbwoAgooLyRxOW2qct14MnHf.png" src-width="3308" src-height="1750" align="center"/>
        </div>
    </div>

入金退还：若因种种原因，导致入金未能正常进入客户的证券帐户，需要对这笔记录进行退款时，可以使用该功能进行操作。用户需填写客户的银行卡讯息，确认无误后点选【确定】流转至入金审核页面进行审核操作。

<img src="/assets/YoWubP32PoVhU7x4YQbcF0K9n5a.png" src-width="2436" src-height="1326" align="center"/>

出金退还：由于入金匹配页面的数据来自银行流水流入的信息，如果用户在处理客户出金的时候被银行拒绝，在银行流水中会以流入的形式存在，用户需要关联出金的业务流水号通过【出金退还】功能处理此类记录。

<img src="/assets/LnWfbAicboGKm5xzDMic77pNnDc.png" src-width="2366" src-height="1234" align="center"/>

## 入金审核

用户在「入金匹配」页面中依赖银行流水流入的资讯进行处理后，下游的审核人员会对处理的结果进行审批，通过后方可入帐。对于正常关联入帐的入金，由于存在客户在入金时时证券帐户仍在客户中的情况，后台将针对这类记录单独进行审批。

- 开户中：选取目标记录后，点选【审批】后进入详情页面再次核对讯息，确认无误后发起工单审批

<img src="/assets/LG99bFzZ1om6XBxjBOicmRfqnae.png" src-width="3334" src-height="1598" align="center"/>

- 已开户：选取目标记录后，点选【审批】后进入详情页面再次核对讯息，确认无误后审核通过

<img src="/assets/NlfTbduDDoOj0LxU50KcMPpLnsf.png" src-width="3318" src-height="1598" align="center"/>

- 入金退还：选取目标记录后，点选【审批】后唤出审批工单，确认资讯无误后审核通过

<img src="/assets/KgOJbaRMloqFtrxpi2UcpngQnxe.png" src-width="3330" src-height="1596" align="center"/>

- 出金退还：选取目标记录后，点选【审批】后确认无误后直接通过，无需走工单审批流程

<img src="/assets/KsEebLN1AoAKXCxzwsic7invnve.png" src-width="3318" src-height="1598" align="center"/>

## 开户中入金

由于入金流程与开户流程可以并行发起，存在入金流程已通过但开户流程仍在执行中的情况，针对该类入金记录，用户可在该页面中进行跟踪已通过入金流程的记录对应的开户情况。

用户可以在页面中「开户状态」查看即时的状态，如果客户的开户流程未通过，可以将其【驳回】（<b>可批量操作</b>）

<img src="/assets/KLf4b0zNOoVViqxZs3qcT4D5nUh.png" src-width="3392" src-height="1693" align="center"/>

## 入金对帐

为了保障资金流水的准确性，业务中需要将银行的流水与系统中的入金记录进行比对，提升入金的准确率。银行流水的来源有 2 种：①API 对接（自动产生）、②手动导入。

- 对帐：用户可以选择目标期间的银行流水进行刷新，系统将自动匹配银行流水与系统的入金记录，对帐完成后，可以关注清单中的「对帐结果」列，如果不一致，需要进一步追踪处理。

<img src="/assets/H0jObR8uioedaVxngMFcYgRSntc.png" src-width="3336" src-height="1770" align="center"/>

<img src="/assets/UIOdbtgf8oTRa2xcj0GcroFlnef.png" src-width="3828" src-height="1870" align="center"/>

## 入金记录

入金记录页面记录入金的全流程状态，使用者可随时进行查询、导出、导入等操作。

- 若用户在使用【直接入账】入金时，没有录入银行流水信息，可在该页面中通过【导入银行流水】批量导入银行流水信息

<img src="/assets/S681bb9u2o1CidxX2NBcHYopnTb.png" src-width="3816" src-height="1854" align="center"/>

# 三、FAQ

Q：入金方式与通路有哪些？

A：常见的入金方式有：网路银行转帐、电汇、银证转帐、子帐户、eDDA、FPS 转数快、支票、ATM/柜台、PAYNOW。

Q：

A：

Q：

A：

Q：

A：

