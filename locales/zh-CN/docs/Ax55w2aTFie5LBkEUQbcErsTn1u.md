---
title: 系统介绍
slug: Ax55w2aTFie5LBkEUQbcErsTn1u
sidebar_position: 2
---


# 系统介绍

# 一、系统介绍

出金功能是指投资者从其证券账户中提取资金的操作。这个功能允许投资者将其证券账户中的资金转移到其银行账户或其他指定的账户中。

Whale 系统包含了处理出金申请、提现处理、对账、单独处理异常出金、出金记录查询等功能，由于监理与风控需求，系统的功能设计具备多角色、流程化的特色，在兼顾出金效率的同时，同步降低了资金风险。

整体业务流程如下：

<img src="/assets/QSsob9ZMtoHJE1x051hcwIFgnhn.png" src-width="2146" src-height="256" align="center"/>

## 二、操作说明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：款项管理 - 出金</p>
</div>

## 出金申请

出金申请为用户方提出，申请的内容包含了币种、申请金额、收款银行卡与备注 4 大部分。WHALE 使用者可以手动帮助客户进行证券入仓并根据客户提交的申请进行驳回、提交审批等操作。

- 手工提现

适用于使用者联络后台操作员进行手动出金的场景，操作员需要依序填写客户的币种、申请金额、出金手续费、收款银行卡、备注资讯。如果客户有出金的证明也可以上传至系统。

<img src="/assets/VPYlbZJfjokg7ZxkLf1c0MMdn6g.png" src-width="1192" src-height="2434" align="center"/>

- 提交（<b>可批量操作</b>）：经过操作人员初步审查无误后，可以将申请提交至下一节点的操作人员进行审核 - 提现

操作

- 驳回（<b>可批量操作）</b>：若客户递交的出金申请资料有误或使用者反馈本次申请无效时，操作员可以进行【驳回】操作
- 删除：若客户递交的出金申请资料有误或使用者反馈本次申请无效时，操作员也可以透过【删除】按钮直接删除目标记录
- 修改：若在提交出金申请前，发现客户递交的某笔具出金申请有问题，可在与客户确认无误后可以透过【编辑】按钮进行修正，修改后需进行工单审批，审批通过后修改内容生效。
    - 修改的范围：申请金额、出金手续费、收款银行卡、备注、凭证（重新上传）

<img src="/assets/KygmbMCcfo4HVxxNuvVcCWmHnnd.png" src-width="3824" src-height="1418" align="center"/>

<img src="/assets/UtkubpN0Fo09CpxtRRRcmQBonOd.png" src-width="3322" src-height="1674" align="center"/>

## 提现处理

在初审人员提交出金申请后，复审操作人员需要进行提现处理。提现处理提供了 2 种方式：直接出账与打包提审。其中：

<table>
<colgroup>
<col width="155"/>
<col width="598"/>
</colgroup>
<tbody>
<tr><td><p>出金方式</p></td><td><p>适用场景</p></td></tr>
<tr><td><p>直接出账</p></td><td><p>出金的记录较少，且需要快速进行出金</p></td></tr>
<tr><td><p>打包提审</p></td><td><p>出金的记录较多，需要对某一时段或某一特定的客户或其他需要进行集中处理出金的情形</p></td></tr>
</tbody>
</table>

- 直接出账
    - 选择目标记录后，点选操作列的【直接出账】
    <img src="/assets/HVnIbKbt6o0u9rxPxumcX6psnvf.png" src-width="3826" src-height="1024"/>
    - 在弹窗中输入银行名称、银行账户、渠道等信息，并在出账明细中可选择是否补充银行流水信息
    <img src="/assets/NXXHbrWQXo1V2JxsMedcwzX2n0f.png" src-width="1674" src-height="1748" align="center"/>
    - 提交审核后，记录流转至「直接出账待处理」页面，审核者需进行工单审批，审核通过后，完成出账
    <img src="/assets/SXmZbOROqoIWaCxT1N4c9TdYnfg.png" src-width="3810" src-height="1860"/>

- 打包提审
    - 选择目标记录后，点选批次操作行的【打包提审】，如果在打包后需要进行移除部分明细记录，可以在弹跳窗内进行操作，填好出金的银行资讯以及渠道资讯后，该批进入审核流程
    <img src="/assets/EbULbLUddo5PbsxvW44cAvdPnvh.png" src-width="3818" src-height="1536" align="center"/>
    <img src="/assets/F0Z4byQjOoTC1SxhGeCcDMchnce.png" src-width="3832" src-height="1848" align="center"/>
    - 提交审核后，记录流转至「打包待处理」页面，审核者需进行工单审批，审核通过后，完成出账
    <img src="/assets/Cjp2b0NecoErKXxfhhJcpLEGnac.png" src-width="3830" src-height="1146" align="center"/>
    <img src="/assets/T7WobwUbjobX3ixxhuDcpYA0nVi.png" src-width="3826" src-height="1826" align="center"/>
    - 注：由于出金的数量与渠道限制，部分出金管道需要人工更新出金的状态，用户需要点选【检视并更新结果】进入至详情页面进行手动更新（可批量更新）
    <img src="/assets/X9S5bVwl9odtz4xyzFscfYdXnHg.png" src-width="3910" src-height="1942" align="center"/>
    - 完成出账后，可将出金文件下载至电脑本地留存

<img src="/assets/E6MfbCyUuoQhUuxwqXncDA3Fnxf.png" src-width="3836" src-height="1826" align="center"/>

- 指标卡

若出金业务量较大，可以透过系统的分类展示卡进行精细化作业，指标卡的左右排布反映了业务操作的先后顺序

<img src="/assets/OdhXbgRF9oRKAvxtEdKcY3xznVf.png" src-width="3830" src-height="1268" align="center"/>

- 支票列印

用户若是采用支票方式出金，流程结束后需要列印支票时，可点选页面右上方的【支票列印】进入二级页面

<img src="/assets/FCDNb8gZ6ojbCExiTsQc0PBhnWc.png" src-width="3326" src-height="1712" align="center"/>

页面内显示全部支票方式出金的记录，使用者选择目标记录后可选择支票补打或首打，（支援大量列印）输入支票号，点选【确定列印】

<img src="/assets/UexCbO5gZoDtp9xXIXkc8QSanJc.png" src-width="3324" src-height="1758" align="center"/>

## 出金对账

为了保障资金流水的准确性，业务中需要将银行的流水与系统中的出金记录进行比对，降低资金流失的风险。银行流水的来源有 2 种：①API 对接（自动产生）、②手动导入。（详见详见「出金账单」章节）

- 对账：用户可以选择目标期间的银行流水进行刷新，系统将自动匹配银行流水与系统的出金记录，对账完成后，可以关注清单中的「对账结果」列，如果不一致，需要进一步追踪处理。

<img src="/assets/EGR2bPbVcoJVVJxppgpcOlG4nde.png" src-width="3826" src-height="1790" align="center"/>

<img src="/assets/HD4TbxUeQozTP4xIjDCcBDhInib.png" src-width="3818" src-height="1808" align="center"/>

## 异常出金

若出金申请在提现与对账流程发现了异常，可在异常出金页面进行处理（<b>可批量操作</b>）。系统提供了 4 种处理方式：
- 转成功
- 转失败
- 再付款（重新生成提现单再次进行付款）
- 重提交（原提现单重新提交渠道付款）

<img src="/assets/MqMrb0SsXoIvIFxkxkocBp7ynO0.png" src-width="3826" src-height="1788" align="center"/>

- 选择了具体的处理方式后，记录流转只待审核页面，业务人员需要再次复核处理结果，通过后异常出金记录处理完毕

<img src="/assets/IWRobrlgYoyuSZx8182cNrwonJf.png" src-width="3832" src-height="1312" align="center"/>

## 出金记录

出金记录页面记录出金的全流程状态，使用者可随时进行查询、汇出等操作

<img src="/assets/XPuMbA0sxomiAvxw8r9cuwvGndA.png" src-width="3816" src-height="1854" align="center"/>

## 出金账单

指代券商公司银行账户所有资金的出账变动记录，是核对出金业务的重要依据。

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜单入口：款项管理 - 银行账单 - 出金账单</p>
</div>

- 如果银行已经对接银企直连，则系统可以自动取得银行账单。
    - 若无法对接银企直连，则需要人工后台依照对应银行账单范本进行人工导入

<img src="/assets/BN2pbCn1moFSOXxSODicXwRdnMc.png" src-width="3818" src-height="1796" align="center"/>

<img src="/assets/EU48bYetBofFAAxlZvqcau24nsc.png" src-width="3820" src-height="1866" align="center"/>

- 对于系统取得或手动汇入的银行账单，人工确认相应入账为冗余资料且匹配状态为“未匹配”，可选择手动删除；

<img src="/assets/EBTvbRMjOouihox1c1ccDLBPnsh.png" src-width="3316" src-height="1692" align="center"/>

- 解析银行账单时，可能存在银行出账的负金额，此时对系统原本判断为出账就会出错。若人工发现有这样的情况，可以手工将对应的出账置为入账；

<img src="/assets/GGKFbzp1Kol0dJxLFUccR7BPnJe.png" src-width="3308" src-height="1700" align="center"/>

- 对于未配对的提现单需要人工进行根据实际出账进行关联打标。
    - 打标后若发现为误操作，仍可进行【拒绝】操作

<img src="/assets/L2XYbt21xozm8jxbTCtcT0Xgn2b.png" src-width="3326" src-height="1718" align="center"/>

<img src="/assets/OF19byo4Vo46cpxH3vMcPG0MncF.png" src-width="3308" src-height="1708" align="center"/>

