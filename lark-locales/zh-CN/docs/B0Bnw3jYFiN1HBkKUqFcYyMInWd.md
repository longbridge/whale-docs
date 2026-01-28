---
title: 系统介绍
slug: B0Bnw3jYFiN1HBkKUqFcYyMInWd
sidebar_position: 2
---


# 系统介绍

# 一、系统介绍

证券转出功能是金融系统中的服务，允许投资者将其持有的证券从一个帐户转移到另一个帐户，以实现资产灵活调动和管理。

Whale系统包含了取出申请、取出明细、电子邮件通知券商等功能，流程支援了不同角色的审核要求，有效地了降低证券取出业务的风险。整体流程架构如下：

<img src="/assets/N1Zmbzpg3oZZrXxYpzrjkSp5pee.png" src-width="2162" src-height="1476" align="center"/>

## 前置条件

无

# 二、操作说明

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 菜单入口：证券管理-证券取出</p>
</div>

## 取出申请

证券存入申请为用户方提出，申请的内容包含了券商资讯、帐户资讯、证券详情与备注4大部分。WHALE使用者可以手动帮助客户进行证券入仓并根据客户提交的申请进行驳回、提交审批、通知券商等操作。

- 手工出仓：适用于使用者联络后台操作员进行手动转出证券的场景，操作员需要依序填写客户的证券资讯、帐户资讯以及证券的明细资讯。
    - 选择了客户后，系统会自动带出该客户所有的持仓讯息，使用者可以勾选目标记录确认好需要转出的数量后确认转出

<img src="/assets/GBdebXi74oYd7ExbRpVjJFuqpsh.png" src-width="2356" src-height="2457" align="center"/>

- 驳回（<b>可批量操作</b>）：若客户递交证券取出申请资料有误或使用者反馈本次申请无效时，操作员可以进行【驳回】操作
- 通知券商：由于转仓业务需要对方券商的配合，在实际操作过程中，为了能够顺利转出，用户通常会联络券商及时处理。此功能将提供邮件发送功能，并根据邮件发送的结果显示给用户是否已经通知了券商，以便于用户进一步处理业务。
    - 选择需要寄送邮件的券商机构，系统会自动带出对方券商的邮件地址，操作员可检查邮箱是否正确
    - 选择目标券商下的涉及到的证券取出申请明细（已发送过的证券申请将被剔除）
    - 预览邮件内容，确认无误后点选发送
    - 至邮件发送记录页面中查看发送状态

<img src="/assets/Aun9baEyAov4jxxZyoMjPjINpof.png" src-width="3834" src-height="1856" align="center"/>

<img src="/assets/Ey4hbI2KGouOhIxJDIFjyzmZpHc.png" src-width="3826" src-height="1856" align="center"/>

<img src="/assets/Sg95bYirYocpxOxrTIljH0Zhptf.png" src-width="3820" src-height="1852" align="center"/>

<img src="/assets/RDsvb3ERoojX8KxLKK1jrdLJppf.png" src-width="3820" src-height="1832" align="center"/>

- 提交（<b>可批量操作</b>）：经过操作人员初步审查无误后，可以将申请提交至下一节点的操作人员进行审核-出仓操作
- 编辑：若操作员在处理取出申请时，从客户方得知券商已通知或未通知的信息，可以透过【编辑】按钮进行修改通知状态，以保证对方券商是否知晓需要处理证券转仓的信息与实际情况相符

<img src="/assets/IfwTblGTuohWrbxcIEQjLVvKpvh.png" src-width="3836" src-height="1854" align="center"/>

- 指标卡

若券商的证券取出业务量较大，可以透过系统的分类展示卡进行精细化作业，指标卡的左右排布反映了业务操作的先后顺序，可以选择的批次操作有：

<img src="/assets/LRsDbkCOPodb6Yx05r2jlcJZpIb.png" src-width="3834" src-height="1786" align="center"/>

## 取出明细

由于一个取出申请下可能存在多笔证券明细记录，具体操作出仓的审核人员需要针对每笔取出明细进行仔细核对，审核通过后方可出仓。

- 修改：若在处理证券明细时，发现用户提交的某笔具体的明细记录有问题，可在与客户确认无误后可以透过【编辑】按钮进行修正
    <img src="/assets/SjhYb2yJjo2nT0x9y93jqs7kpfS.png" src-width="3804" src-height="1074" align="center"/>
    - 修改的范围：托管商编号、子仓编号、证券明细数量、备注

- 修改转出费用：证券明细在出仓前，使用者可以根据实际的业务场景选择是否需要调整客户的转出费用，同时可以选择将修改的资讯是否显示给客户

<img src="/assets/O8kobaK4NobY1Cxb0BcjsyBcp3c.png" src-width="3802" src-height="1398" align="center"/>

- 删除：若在处理证券明细时，用户反映提交的某笔具体的明细记录不再进行转入，可以透过【删除】按钮直接删除目标明细记录
- 生成SI指令：由于转仓业务需要在CCASS里填写必要的SI信息，生成SI指令功能可以将这些必要的信息以文件的形式自动保存，供用户进行上传CCASS，以免于手动在CCASS系统录入。产生的SI指令也可以在「SI指令清单」选单下进行详情查看、汇出等操作

<img src="/assets/FIuMbAjuRo6vTex4T1GjkUvqpyf.png" src-width="3800" src-height="898" align="center"/>

<img src="/assets/Atg7b3ezhoMYuaxGVzyjRoaQpAe.png" src-width="3818" src-height="1146" align="center"/>

- 编辑SI指令：若需要对已经产生的SI资讯进行修改，可以点选【编辑SI资讯】对目标栏位进行修正

<img src="/assets/MGg7bHSGioo2RzxBzlPjw0Toprh.png" src-width="3810" src-height="1326" align="center"/>

- 处理-成功提交/失败提交：若操作人员认定某个明细没有问题，可以点选【处理】选择【成功提交】，反之选择【失败提交】。
    <img src="/assets/TVmlbB0MDo6Nr5xJVGXjPjMCpWg.png" src-width="1280" src-height="374" align="center"/>
    - 处理完毕后，流程进行至下一节点，需要在工单中心进行审核，审核通过购，股票成功入仓

- 审批：处理结果提交后，操作列出现【审核】按钮，点选可以召唤出工单审核页面
    <img src="/assets/LsafbtxUlovF8pxeRaDjDyTtp0b.png" src-width="3914" src-height="1957" align="center"/>
    - 处理完毕后，流程进行至下一节点，需要在工单中心进行审核，审核通过购，股票成功入仓

## 邮件发送记录

用户将目标存入申请通知券商后，相应的邮件记录将会被保存，以用于后续进行问题追踪。

<img src="/assets/VO5HbmkrPo5XMMxZ7usj16Kupmb.png" src-width="3830" src-height="1476" align="center"/>

