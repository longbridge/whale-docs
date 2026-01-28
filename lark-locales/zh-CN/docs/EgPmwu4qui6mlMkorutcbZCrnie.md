---
title: 2024-03-04 更新日志
slug: EgPmwu4qui6mlMkorutcbZCrnie
sidebar_position: 42
---


# 2024-03-04 更新日志

# 换汇优化说明

# 我们为什么要升级换汇系统？

## 提升功能易用性

- 聚合业务菜单，使功能操作更加紧密；
- 增加更多分类指标卡，强化了多数据场景下的批量处理能力；
- 增加数据展示的友善性。

## 拓展换汇业务支援场景

- 丰富换汇策略中适配的时段选项，可满足任意时段的换汇要求
- 调整汇率展示逻辑，提升历史数据的业务价值
- 新增换汇对账功能页面

# 在哪些地方进行了升级？

1. <b>设定类与配置类别功能均聚合至「业务参数设定&gt;汇兑」选单下，用户可集中进行换汇业务的前置设置。</b>
    <img src="/assets/MUPOb7FMvokAUGxKWrcjYfV9pec.png" src-width="1280" src-height="561" align="center"/>
    透过 3-5 个 tab 可以快速完成换汇功能的初始设置，其中：
    <img src="/assets/D9BobmoTIojCBMxoMYkjnd1BpJb.png" src-width="1280" src-height="592" align="center"/>
    <img src="/assets/VOBWboAa5ob7rmxGnnnjzpFQp1c.png" src-width="1280" src-height="579" align="center"/>
    <img src="/assets/DF0ibuioFoW2eIxbvcGj5FGQpme.gif" src-width="2170" src-height="956" align="center"/>
    <img src="/assets/QR3Ybi0s0oCrMyx4oIgj7APopBh.png" src-width="1280" src-height="588" align="center"/>
    <img src="/assets/C60ubdrVAoK7R8xJXmwjl6tWpLf.gif" src-width="2170" src-height="956" align="center"/>
    <img src="/assets/QE9Tbwt7ToUXhqx4XWqjIQ0Gpec.gif" src-width="2126" src-height="976" align="center"/>
    - 必须设定的功能有：币种对、换汇策略、换汇池额度配置
    - 可选择设定的功能：加点设定、大额限制
    - 直观展示币种对讯息
    - 增加兑入币种为多选，可一次操作中完成多个币种设置
    - 优化换汇策略中服务策略文案
    - 服务策略的时间段选项从单选更新为多选
    - 增加换汇策略的启用/停用功能
    - 将审批起点降级为功能按钮，用户可以快速设定需要人工介入审批的币种与金额
    - 优化额度设定：透过直接设定额度取代原调增或调减功能
    - 用 2 个分类展示汇率加点维度

2. <b>业务类功能聚合至“款项管理&gt;换汇”</b>
    <img src="/assets/K5F4bgNY7oGNd4x9A3PjbigxpFA.png" src-width="1280" src-height="596" align="center"/>
    <img src="/assets/A9LjbZJQioVSh2x7BQ2jPz64pnc.png" src-width="1280" src-height="589" align="center"/>
    <img src="/assets/BLvybsfkZo6EJaxxo0rj8ElmpQg.gif" src-width="2132" src-height="974" align="center"/>
    <img src="/assets/CkNFbfa0goQI5YxVjBIj66z4pYb.png" src-width="1280" src-height="645" align="center"/>
    <img src="/assets/PazVbu9tqomgWKxYOU6jRD8tp9d.gif" src-width="2118" src-height="978" align="center"/>
    - 增加指标卡分类展示
    - 增加【加点设定】快速跳转功能
    - 可查看历史更新过的汇率
    - 整合异常换汇记录操作功能，在一个页面即可完成异常记录的处理与审核
    - 汇兑池额度增加额度设定的快速跳转功能

3. 新增换汇对账功能页面（0513上线）
    <img src="/assets/QmSpbx65WoIsnsxBGcVjFLmPpaf.png" src-width="1280" src-height="634" align="center"/>
    - 根据客户在系统中换汇记录与银行端的资金记录进行对账处理

# 新版本操作引导

# 系统功能架构

<img src="/assets/IIBfbK2x7otC3exQIPHjvCAdpqb.png" src-width="2560" src-height="2560" align="center"/>

# 客户汇兑

根据客户提出的换汇要求，可在页面手动新增手工换汇申请，若用户在 APP 已经提交了申请，记录会自动展示在该页面。

## 手工换汇

<b>步骤一：选择客户，确认兑出币种与兑入币种</b>

点选【手工换汇】，在出现的弹出内选择客户&gt;输入币种对（系统将根据已选择的客户，自动展示每个币种可提现的余额）

<img src="/assets/ITjJbZ4kGogkjPxWJxdj7cvNpGg.png" src-width="3830" src-height="1854" align="center"/>

<b>步骤二：确认参考汇率</b>

选择了客户与币种对之后，系统自动提供参考汇率，用户也可以切换成【自定义汇率】进行手动输入

<img src="/assets/HVFWb6O5Pop5WqxwcWUjxM8HpFc.png" src-width="3328" src-height="1772" align="center"/>

<img src="/assets/GpJ4bsdHJo2nLXxPckfjY82YpWe.png" src-width="3322" src-height="1776" align="center"/>

<b>步骤三：输入金额</b>

确定了客户、币种对、汇率之后，需要输入汇兑的金额，汇兑金额可以有以下两种方式：

- 以兑出币种为基准。例：假设美元兑港币的汇率=1：7.8，确定兑出 1000USD，系统将自动计算兑入币种（HKD）=7800
- 以兑入币种为基准。例例：假设美元兑港币的汇率=1：7.8，确定兑入 1000USD，系统将自动计算兑出币种（HKD）=7800

资料输入无误后，点选【确定】，页面将产生一笔汇兑纪录。

## 处理申请

申请的记录生成后，后台操作人员需要再次检查资料的准确性，确认无误后点选操作列【复核】，进入弹跳窗进行【通过】/【驳回】操作。

<img src="/assets/CxOObvCCFoJmS7xOxtVjdF5vpsa.png" src-width="3828" src-height="1858" align="center"/>

【通过】后，在「已结束」分类或「全部」分类下，可以查看已完成的汇兑记录

<img src="/assets/LTPpbYwzCoNsmxxuEKjjKvxyp3c.png" src-width="3314" src-height="1052" align="center"/>

# 参考汇率

用户可在参考汇率页面查看所有币种对的汇率，同时支援用户进行手动新增币种对的参考汇率（含大量操作）

<img src="/assets/E2rsbIjpkom5GDxzTAEjJdKApGh.png" src-width="3836" src-height="1860" align="center"/>

## 新建参考汇率

点选【新建】进入弹跳窗，将页面中的必填栏位补齐，即可产生一笔参考汇率记录

<img src="/assets/RvFdbWqmGolElUx1sz7jaf1Upvb.png" src-width="3828" src-height="1864" align="center"/>

## 查看汇率更新记录

由于不同的汇率管道的汇率会即时更新，系统透过 API 对接的方式会自动刷新页面中的汇率，如果需要查看当天的历史汇率，可以在汇兑记录行的操作列点击【历史记录】进行查看。

<img src="/assets/NAl5bpMIUo22IKxFJJxjPcoepDb.png" src-width="3322" src-height="1770" align="center"/>

# 异常换汇记录

若因通道方、银行方、客户方等原因，导致提交的汇兑申请异常中断，可在该页面进行针对处理

## 处理异常记录

<b>步骤一：定位目标记录，在操作列的 3 种方式中进行选择：</b>

- 转成功：是指相应通路换汇单经过人力确认，银行资金已变动，所以人工将通路汇兑单状态更新为成功
- 再汇兑：根据相应的管道汇兑单确认银行端资金未变动，且不会再次变动，但是人工确认需要给用户再次汇兑，则需要再次提交通路汇兑请求
- 转失败：是指相应通路换汇单经过人工确认，银行资金未变动且后续不会变动，所以人工可以将通路汇兑单状态更新为失败

<img src="/assets/At9UbqGXeopLLTxNA6OjzJAipSe.png" src-width="2366" src-height="1220" align="center"/>

<b>步骤二：根据第一步的处理方式进行复核</b>

<img src="/assets/N2pjbJwkxoA8daxzqOPjNYEUpIh.png" src-width="2370" src-height="1198" align="center"/>

# 汇兑损益

由于时间差，换汇申请在提交至换汇完成时会存在汇率的波动进而影响到兑换的金额。此页面用于查看每笔换汇申请所产生的汇兑损益，支援汇出至本地。

<img src="/assets/J8Elbudpvo75MOxvq0PjQ3n2peh.png" src-width="2344" src-height="1210" align="center"/>

