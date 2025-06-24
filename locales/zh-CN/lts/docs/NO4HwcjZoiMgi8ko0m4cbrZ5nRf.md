---
title: 系统介绍
slug: NO4HwcjZoiMgi8ko0m4cbrZ5nRf
sidebar_position: 2
---


# 系统介绍

## 一、系统介绍

清算系统主要通过日终任务串联功能。日终任务分成两个模块，一个是市场清算，一个是日终管理。市场清算处理交易数据为主，用于各市场的计费、交收流程。日终清算处理涵盖交易、调帐、公司行动在内的全部数据，进行利息计算，最终输出报表和结单

<img src="/assets/QuCmw0vBohsEoubCvE3c7D4Gnbg-board.jpeg"/>

## 二、系统设定

### 市场管理配置

#### <b>服务商资料管理</b>

主要用于维护服务商的基础信息。可新增、编辑，删除

服务商分类型分为托管商、代理商。代理商为交易渠道，托管商持仓的托管方

<img src="/assets/OlHCbC5dmoF8iMxWPMQcf86qnwg.png" src-width="3548" src-height="1806" align="center"/>

#### <b>子仓资料</b>

主要用于维护托管商子仓的基础信息。可新增、编辑、删除

新增、编辑时可选择的服务商必须事先在服务商资料中配置，且服务商类型为托管商

配置交收、仓位规则时需要用到该配置项

<img src="/assets/Xu5IbVllGo8T9zx64JrciOUhnCf.png" src-width="3548" src-height="1806" align="center"/>

#### <b>结算渠道资料</b>

主要用于维护结算渠道基础信息，可新增、编辑、删除。新增、编辑时可选择的服务商必须事先在服务商资料中配置，且服务商类型为代理商。配置交收、仓位规则时需要用到该配置项

<img src="/assets/R4yxbJdE8oIHHvxzX6Vcx37Tnsg.png" src-width="3548" src-height="1806" align="center"/>

#### <b>交收仓位规则管理</b>

<b>市场层规则</b>

每个市场可分别配置一条规则

特殊字段说明：
- 隔夜市场：隔夜市场选择是的，系统处理时账务日期=交易日期 +1。长桥将美股市场作为隔夜市场
- 默认托管商、默认子仓编号：在未匹配到业务规则的情况下，仓位处理时取该配置

<img src="/assets/L9TBbxYoWozjRCx8DU2ca5BZnDc.png" src-width="3548" src-height="1806" align="center"/>

<b>业务层规则</b>
可以在业务层配置交收和仓位处理规则，一条规则可同时对交收和仓位服务起作用

依赖交收仓位基础对象的配置

字段说明：
组织号选 ALL
柜台选 ALL
合约
暗盘和非暗盘的可单独设置规则
买卖方向
可针对买、卖设置规则
期权类别
针对美股期权起作用，可根据期权类别设置规则
枚举包括权利仓、义务仓
指令类型
针对满足上述条件的流水，可生成交收指令
指令类型包括 ATI、STI、SI、ISI
交收方式
针对满足上述条件的流水，可生成交收指令
交收方式包括 FOP、RDP、DVP
默认托管仓
针对满足规则的持仓变动，在配置的托管商上进行仓位处理
托管商的枚举为服务商资料商已新增的服务商，且性质为托管商
默认子仓
针对满足规则的持仓变动，在配置的子仓上进行仓位处理
子仓的枚举为子仓资料已新增的子仓

<img src="/assets/IZCjbBSiOoCmwaxdG0GcMSIhnwh.png" src-width="3548" src-height="1806" align="center"/>

### 日终任务配置

路径：清算管理&gt;市场清算&gt;日终任务&gt;日终设置

<img src="/assets/Bd7gba1vsohhuuxxa0KcLL0Nnlh.png" src-width="2852" src-height="1374" align="center"/>

<b>市场交收配置</b>

点击新建新增分组

根据劵商交易市场帐务处理顺序，配置市场执行的群组配置
常规是按时间区段将接近相同地域市场配置在一起：例 欧美市场/亚洲市场 
租户劵商也可根据需要，将一些市场清算独立出来

<img src="/assets/Sf2ObkeXUouFpIxcoELcABi2nsh.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/TP1ybFelmoRXmWx8G0kcMfIVnJo.png" src-width="2440" src-height="934" align="center"/>

新建多个分组后，可以点选右上方区‘执行顺序设置'来 调整。所配置的市场群组清算顺序（劵商常规顺序：先欧美 - 亚洲 - 日终）

<img src="/assets/Bv9DbAUeOoPJC3xZxDwcf2l9nTb.png" src-width="2436" src-height="888" align="center"/>

<b>清算前准备配置</b>
可编辑时间段：操作日终任务之前
检查阶段释义：交易清算（数据同步 - 清算交收之前的检查项目）；日终清结算（数据汇总 - 日切之前的检查项目）
失败后处理释义：仅提醒（不会拦截流程，仅提示）、工单审核（会拦截流程，但是可以手动通过）、强制校验（会拦截流程，必须通过）
支持的操作：开启/关闭，选择失败后的处理方式
编辑时需要审批，工单标识：clearing.before_clearing_ready.setting       
其它：部分检查项目要求强制检查，不允许编辑
<img src="/assets/GoEYbJGiAo9VO6xVWL1cJQsnnpf.png" src-width="3574" src-height="1774" align="center"/>

<b>清算参数配置</b>

可编辑时间段：操作日终任务之前

编辑清算初始化配置时需要审批，工单标识：clearing.update_system_config.exec

注意：需要联系技术人员后修改

<img src="/assets/Nai0bUEJVoAqXKxW1QwcN5cCnih.png" src-width="3574" src-height="1774" align="center"/>

### 计费配置

#### 基础概念

合单规则和收费场景是系统的基础配置元素，通常在系统初始化时进行设置

套餐收费和个性化收费是根据业务需求灵活配置的功能，用户可根据实际情况选择是否启用。套餐收费通常依据用户群体进行添加，例如经纪人 A 套餐、现金账户套餐。系统具备在客户开户时自动分配相应套餐的功能；个性化收费一般根据客户个性化需求单独进行设置

<img src="/assets/OuYAwSctjhK8svbL9licXJnhnkb-board.jpeg"/>

#### 收费场景

<b>字段说明</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="397"/>
</colgroup>
<tbody>
<tr><td><p><b>字段用途</b></p></td><td><p><b>字段名称</b></p></td><td><p><b>字段说明</b></p></td></tr>
<tr><td rowspan="2"><p><b>匹配条件</b></p></td><td><p>业务类型</p></td><td><p>包括股票交易、场外交易、融资利息、存款利息、出金交易、期权交易、转仓手续费等。满足此条件的流水，按计算规则收费。只能选择，不能新增</p></td></tr>
<tr><td><p>计费依据</p></td><td><p>股票交易选择市场，融资交易选择币种。满足此条件的，按此规则计费</p></td></tr>
<tr><td rowspan="5"><p><b>计费规则</b></p></td><td><p>计费方式</p></td><td><p>包括股数、交易金额等</p></td></tr>
<tr><td><p>计费精度</p></td><td><p>分为合约、订单、成交记录。不同精度影响收费明细和尾差处理的口径。<br/>以客户 A 一天提交了 3 笔订单，每笔订单都分成 3 次成交为例子：<br/>按合约计费<br/>收费明细：1 条合约生成 1 条收费明细。<br/>尾差处理：按合约分别处理尾差。<br/>按订单计费：<br/>收费明细：1 条合约含 3 条订单，生成 3 条收费明细。<br/>尾差处理：按订单分别处理尾差。<br/>按成交记录计费：<br/>收费明细：1 条合约含 3 条订单，每条订单含 3 条成交记录，生成 9 条收费明细。<br/>尾差处理：按成交记录分别处理尾差。</p></td></tr>
<tr><td><p>年费率天数</p></td><td><p>费用金额 = 计算金额 / 年费率天数。例子：融资利息的计费天数填 1，计费分母填 365</p></td></tr>
<tr><td><p>结果截取方式</p></td><td><p>与截取位数搭配使用。包括四舍五入、向上截取、向下截取三种方式</p></td></tr>
<tr><td><p>截取位数</p></td><td><p>与结果截取方式搭配使用，决定最终费用金额的精度。</p></td></tr>
<tr><td><p><b>输出结果</b></p></td><td><p>收费类型</p></td><td><p>包括佣金、平台费、印花税等。满足匹配条件的流水，收取该费用。只能选择，不能新增</p></td></tr>
</tbody>
</table>

---

<b>说明：</b>

匹配条件：用于确定哪些流水需要进入计费流程

计费规则：用于定义如何计算费用金额，包括计费方式、精度、天数和截取方式等

输出结果：最终的计费结果

---

<img src="/assets/MhgcbTcFaolc12xafw8crlbUn6y.png" src-width="3548" src-height="1806" align="center"/>

#### 客户收费配置

<b>新建个性化收费示例</b>
<img src="/assets/ArJ4bsEIEoXxgVx7w2hc6YKNnxc.png" src-width="2852" src-height="1374" align="center"/>
<img src="/assets/Jx4gbQoocod7oyxF4dtcDm7Zn7b.png" src-width="2852" src-height="1374" align="center"/>
<img src="/assets/A5WdbSXokooIfQxasbBc0mbInwg.png" src-width="2874" src-height="1312" align="center"/>

<b>添加客户示例</b>
<img src="/assets/VJB7bAF8go3VEzxdxmPcjnRqnHB.png" src-width="2874" src-height="1312" align="center"/>
<img src="/assets/Y4ZDbNdd6o8FPRx7WI2cI3t1nvb.png" src-width="2874" src-height="1312" align="center"/>
<img src="/assets/Y5Kmb7AXyoBhgmxRp5BcgExanpd.png" src-width="2522" src-height="1102" align="center"/>

##### 套餐收费

如果客户具有功能画像（比如同一个经纪人，同是现金账户，多个费用收费标准一致），可以使用套餐收费功能

一个客户只能绑定一个套餐

一个套餐里可包含多个收费场景

<b>新建套餐示例</b>

<img src="/assets/LXQ3bNmaboV1yqxoYTScDLTUnxh.png" src-width="2852" src-height="1374" align="center"/>

<img src="/assets/CunmbeoEvosnKlxIkx3chzhInXe.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/Fi4PbsSSwo5ZLSxrFeWcvRtznTf.png" src-width="2502" src-height="1096" align="center"/>

##### 客户计费查询

该功能用于查询客户的收费信息

<b>优先级处理</b>

<b>特殊收费</b>(个性化收费&gt;普通套餐&gt;全局套餐)&gt;<b>普通收费</b>(个性化收费&gt;普通套餐&gt;全局套餐)

<img src="/assets/K25bbfVTKor8U1xFbSXceZ6Snxc.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/AgHebOomkowyumxc9RAcV656nUg.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/BvCdbUYXfoTwaNxZo31cmE2jnze.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/RyBkbD7Hxoss7DxA311cNz21nAe.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/AgChbtdSXoORFdxzA2ycqCtln6f.png" src-width="2502" src-height="1096" align="center"/>

### 其它计费项目

功能清单

<table>
<colgroup>
<col width="146"/>
<col width="360"/>
<col width="235"/>
</colgroup>
<tbody>
<tr><td><p>操作</p></td><td><p>工单标识</p></td><td><p>操作日志</p></td></tr>
<tr><td><p><b>更新标的资讯</b></p></td><td><p>clearing.ods_stock.edit</p></td><td><p>标的管理 - 更新标的信息</p></td></tr>
</tbody>
</table>

#### 香港市场印花税豁免

配置注意事项

1. <b>资料自动更新</b>
    - 该栏位的资料将<b>自动从港交所获取</b>，并<b>每日更新</b>。

2. <b>资料修改指南</b>
    - 如发现资料有误，您可以在<b>清算计费步骤之前</b>修改标的资讯。请注意，所做修改将在次日被更新的资料覆盖，因此修改后请<b>务必联系 Whale 客户服务</b>反馈资料问题。

3. <b>适用范围限制</b>
    - 非香港市场的标的，该栏位将<b>不适用</b>。

4. <b>特定标的税收规则</b>
    - 以ETF/（ETF）和WT/（涡轮）开头的标的，将<b>强制不收取印花税</b>。

<b>配置案例</b>

<img src="/assets/AFTIb5XYwonWfjxJWnEcmpfZndh.png" src-width="2878" src-height="1172" align="center"/>

<img src="/assets/RvwubfFROoDrPMxCLP2cneTun64.png" src-width="2878" src-height="1172" align="center"/>

#### <b>可交易债券利率配置</b>

<b>功能清单</b>

<table>
<colgroup>
<col width="146"/>
<col width="360"/>
<col width="235"/>
</colgroup>
<tbody>
<tr><td><p>操作</p></td><td><p>工单标识</p></td><td><p>操作日志</p></td></tr>
<tr><td><p>编辑清算参数配置</p></td><td><p>clearing.update_system_config.exec</p></td><td><p>清算 - 修改系统配置</p></td></tr>
<tr><td><p>删除债券利率信息</p></td><td><p>clearing.bond.delete</p></td><td><p>清算 - 新增债券信息与利率</p></td></tr>
<tr><td><p>新增债券利率信息</p></td><td><p>clearing.bond.insert</p></td><td><p>清算 - 删除债券信息与利率</p></td></tr>
<tr><td><p>编辑债券利率信息</p></td><td><p>clearing.bond.update</p></td><td><p>清算 - 更新债券信息与利率</p></td></tr>
</tbody>
</table>

<b>总开关</b>

开启总开关后才会正式启用可交易债券的计息功能

<img src="/assets/T5Qbbc0iVoNrEVxeb4tcVQp0nFh.png" src-width="2502" src-height="1110" align="center"/>

<b>利率配置</b>

配置注意事项

利息公布后务必及时更新日历

在派息日期 -4 个交易日内未更新利率的，可能会导致利息计算错误

必须一次性将所欲日历配置上，未来的派息日留空

配置的使用

累计利息=数量*账面价格*上期派息利率*累计计息天数/一年天数

累计计息天数=交收日 - 派息日

系统针对配置的检查

-7 个自然日内，系统在清算前准备会兜底性检查

报错时如果未到派息日期 -4 个交易日的，可先手动通过

报错时如果已到派息日期 -4 个交易日的，建议先按上期利率更新且持续跟踪利息计算情况

新建利率信息案例

<img src="/assets/RVNmbYBHMowUHLxIVntc7V1In0F.png" src-width="2502" src-height="1110" align="center"/>

<img src="/assets/U2hgbfkqWoMJ1wxtJeucBEDVnYc.png" src-width="2502" src-height="1110" align="center"/>

### 结单配置

#### 结单模版设置

路径：清算管理&gt; 日终管理&gt;结单管理&gt;结单模板 

本作业可以管理结单标准格式的配置，包含 公司讯息/联络方式/责任说明（以下为参考）

<img src="/assets/P9Y6bi0PPorbaQx40oNc4wJbnVf.png" src-width="2484" src-height="1468" align="center"/>

<img src="/assets/Di0CbFqXSo06llxnc4zcS7ItnLe.png" src-width="2272" src-height="1438" align="center"/>

在结单模版可进行社交媒体信息配置功能，配置后会在结单展示，若不配置，则不展示该栏位

<img src="/assets/TLIZbgU33oJRh4xWv4FcJKxxnKe.png" src-width="2908" src-height="1546" align="center"/>

结单模板新增结单语言配置功能（支持 5 种语言设置方式）
- 跟随系统：跟随客户 app 设置语言进行展示
- 全局设定（英语）：所有客户结单均为英文
- 全局设定（简体中文）：所有客户结单均为简体中文
- 全局设定（繁体中文）：所有客户结单均为繁体中文
- 全局设定（繁体中文&英语）：所有客户结单均为双语（繁体中文 + 英文）

<img src="/assets/PRTcbNWcJofdyTxliqBcz0Cjnic.png" src-width="2476" src-height="1420" align="center"/>

#### 结单配置

本作业用来配置管理：客户结单是否线下发送/是否接受邮件和 APP 通知/未配置的按线下发送为否/提醒全部开启处理 等配置项

<img src="/assets/M84XbC7xWoCVWBxOoVvcSWgDnue.png" src-width="3336" src-height="1400" align="center"/>

<img src="/assets/HBkcbA9sTosMTcxQlGJcgWZ8nXe.png" src-width="3346" src-height="1414" align="center"/>

在结单配置上增加来源栏位，方便定位结单配置修改来源

也支持批量新增功能，透过事先模版下载后上传来应用

<img src="/assets/NMXfbWosdoiv8AxrXb0cz0P0n5d.png" src-width="3324" src-height="1412" align="center"/>

新客户查询不到的，可新增发送方式

<img src="/assets/BC5DboP39oaRsWxSUMQc3E3Pn6d.png" src-width="3364" src-height="1410" align="center"/>

#### 客户备注

路径：清算管理&gt; 日终管理&gt;结单管理&gt;客户备注

提供一个客户结单备注的管理入口，方便针对某些特定客户结单增加备注说明

注意：若有需要增加客户结单备注，要在日终作业完成前，补录好客户结单备注后才能发生效用

<img src="/assets/FRowbvuURoZz1pxINv7c7tnZnSf.png" src-width="3116" src-height="1132" align="center"/>

可以点选右上角【新增备注】，根据需要新增 日结单/月结单 结单上对应客户备注

<img src="/assets/Nkj5bw2DJoOgaExDNhKcPZ3Fnth.png" src-width="3368" src-height="1462" align="center"/>

也提供批量结单模板导入的备注说明

<img src="/assets/GYKPbVqoFo0p8kxVskJcpm0FnQM.png" src-width="3366" src-height="1460" align="center"/>

以下是备注参考模板：

<img src="/assets/GS8ub2lUwoJjqNxCLRxc4tmUnSe.png" src-width="1304" src-height="496"/>

可在列表页查询备注内容，进行二次编辑

<img src="/assets/XkDibU6pooVfjMxUf0Wc3Zb9nCg.png" src-width="3358" src-height="1240" align="center"/>

#### DA 结单配置

路径：清算管理&gt; 日终管理&gt;结单管理&gt;DA 结单配置

DA 帐户开户后会默认配置为按 3 月/6 月/9 月/12 月这四个月生成月结单，结单模版为 DA 结单特殊模版。同时支持修改默认配置，修改后取最新配置

<img src="/assets/J4wmbwKkjoUALlxVFKTckyWenfg.png" src-width="3328" src-height="1454" align="center"/>

<img src="/assets/YLlMbWxzqojCKjx5hxucHqJznnh.png" src-width="3346" src-height="1456" align="center"/>

## 三、市场清算（交易清算）操作说明

### 对手方文件转入（Broker Trade）

路径：清算管理&gt;文件处理&gt;文件导入 

点击导入文件，上传文件

<img src="/assets/JZDdbnDGeoCZwbxf0HycKixLnec.png" src-width="3578" src-height="1798" align="center"/>

选择文件并上传

例子：港股 CCASS 交易文件导入（CTF）。市场：选择港股，文件类型选择 CTF Trade File 后，上传文档

<img src="/assets/EF9sbBfZfoA4IPxs6OXcUkrIn4g.png" src-width="3578" src-height="1798" align="center"/>

可通过列表区域的状态字段关注文档导入和解析状态。解析成功才算处理完成

<img src="/assets/JQnUbsLgmoo5EmxADRwcD7DZnvg.png" src-width="2910" src-height="1548" align="center"/>

### 清算前准备

该功能的目的是检查执行日终任务前是否完成了相关配置和当天业务操作。市场清算和日终清算有不同的检查项目

市场清算完成交易文件导入，确认当前账务日期准确后，可点击执行清算前准备

<img src="/assets/Xtp1bMvQ5oRWlax8IehcJTMWnuh.png" src-width="2852" src-height="1374" align="center"/>

执行后，5 秒内会返回检查结果。全部检查都通过的，可以进行后续操作
检查报错的，点击检查项目右上角可查看检查项目的规则和操作指引
<img src="/assets/WHSFb0TtNoAklmxFVvFcdo2cn2f.png" src-width="2852" src-height="1374" align="center"/>

部分检查会提供异常详情

<img src="/assets/ENWTbTaXso0p2Ix6d2Uct32GnJ1.png" src-width="2852" src-height="1374" align="center"/>

结算人员核对后，确认有问题的，在完成相关业务操作后，可点击“重新执行”

<img src="/assets/JHxfbxdAso2912xuuyjc4ntKn9d.png" src-width="2906" src-height="1558" align="center"/>

结算人员核对后，检查项目可以允许通过的，可点击手动审核人工通过（需要复核）

<img src="/assets/HzfPbEJMaoZ0ZhxeoODcpDDunfB.png" src-width="2904" src-height="1558" align="center"/>

复核人员可点击手动审核（也可直接在工单审核），调出工单审核

<img src="/assets/BTw3bPuDhomgG8xJ38ucrCz3nsd.png" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/OM0lbFaZ4owtSZx0HAscsiMNnkd.png" src-width="2920" src-height="1550" align="center"/>

结算人员核对后，因为业务流程有差别，需要永久关闭检查项目的，可以联系客服处理
  当审核通过后，清算前准备就算完成（文字会提示：已手动通过）

<img src="/assets/E8B5bi1jxoOEbVxHTNhc43d5nw4.png" src-width="2852" src-height="1374" align="center"/>

清算前准备检查项目

<table header_row="1">
<colgroup>
<col width="100"/>
<col width="147"/>
<col width="360"/>
<col width="169"/>
</colgroup>
<thead>
<tr><th><p>分类</p></th><th><p>检查项目</p></th><th><p>对应 作业查询检查</p></th><th><p>检查层级</p></th></tr>
</thead>
<tbody>
<tr><td><p>交易</p></td><td><p>交易文件导入</p></td><td><p>清算管理&gt;市场清算&gt;文件导入</p></td><td><p>市场清算</p></td></tr>
<tr><td></td><td><p>市场收市</p></td><td></td><td></td></tr>
<tr><td><p>期权</p></td><td><p>期权到期行权</p></td><td></td><td><p>市场清算</p></td></tr>
<tr><td><p>资产</p></td><td><p>资产调拨审核</p></td><td><p>资产帐户&gt;资产调拨&gt;帐户间转帐</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>调帐审核</p></td><td><p>资产帐户&gt;资产调帐&gt;手工调帐</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>资产冻结解冻审核</p></td><td><p>资产帐户&gt;冻结解冻</p></td><td><p>日终清算</p></td></tr>
<tr><td><p>款项证劵</p></td><td><p>入金审核</p></td><td><p>款项管理&gt;入金&gt;入金审核 Tab</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>出金审核</p></td><td><p>款项管理&gt;出金&gt;出金申请（未处理）Tab</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>换汇审核</p></td><td><p>款项管理&gt;换汇&gt;客户汇兑 Tab</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>证劵取出审核</p></td><td><p>证劵管理&gt;证劵取出</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>证劵存入审核</p></td><td><p>证劵管理&gt;证劵存入</p></td><td><p>日终清算</p></td></tr>
<tr><td><p>公司行动</p></td><td><p>行动登记</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>行动上报</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>行动执行</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>行动通知</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>将退市股票</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr><td><p>新股</p></td><td><p>未公布中签操作</p></td><td><p>新股认购&gt;中签处理&gt;结果同步 Tab</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>未操作扣款</p></td><td><p>新股认购&gt;冻结收费&gt;待扣款 Tab</p></td><td><p>日终清算</p></td></tr>
<tr><td><p>结单</p></td><td><p>结单未发送</p></td><td><p>清算管理&gt;日终管理&gt;结单管理&gt;结单查询</p></td><td><p>日终清算</p></td></tr>
<tr><td><p>系统数据</p></td><td><p>收盘价确认</p></td><td><p>清算管理&gt;市场清算&gt;收盘价管理</p></td><td><p>日终清算</p></td></tr>
<tr><td></td><td><p>汇率检查</p></td><td><p>款项管理&gt;汇率管理&gt;参考汇率</p></td><td><p>市场清算、日终清算</p></td></tr>
<tr><td></td><td><p>市场日历检查</p></td><td><p>业务参数设置&gt;市场管理&gt;市场日历 Tab</p></td><td><p>市场清算</p></td></tr>
<tr><td></td><td><p>市场规则配置</p></td><td><p>业务参数设置&gt;市场管理&gt;市场规则 Tab</p></td><td><p>市场清算</p></td></tr>
<tr><td></td><td><p>前台流水检查</p></td><td><p>算前准备加“前台流水全部纳入清算”的检查项目</p></td><td><p>日终清算</p></td></tr>
</tbody>
</table>

### 市场清算<b>一键清算</b>

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键，系统会自动从第一步开始执行，一直到清算交收作业（当没有错误发生时，系统会自动续执行下个作业）

注意：若有需要可点选 '暂停一键清算'，但系统会等当时作业执行完毕后，才开始暂停下一动作（功能键会变灰）

<img src="/assets/WAikboAUAo5YxbxX1f2ctdBknkf.png" src-width="2852" src-height="1374" align="center"/>

如果要进行后台补单，或者修正合约的，在清算计费步骤后进行。可在数据同步直接点击“暂停一键清算”

<img src="/assets/FMuObyrXXoBb2WxhRK1cjGkznDf.png" src-width="2852" src-height="1374" align="center"/>

<img src="/assets/JxUZbyjw6oBmVax2mfaclVNYngt.png" src-width="2852" src-height="1374" align="center"/>

中间若有作业执行错误，则一键清算将会暂停，并停在相关错误的作业程序上，用户可以参考错误讯息提示进行后续修正处理

<img src="/assets/OGl7bVIqloWA4ix176zcB1wbnkd.png" src-width="2908" src-height="1554" align="center"/>

此时可根据业务需要手动点选右侧下方相关的作业操作，来检查或修正纪录或著 往下一键算操作，系统会自动执行下一个作业

注意：在一键清算过程中，可以依赖系统的一键清算操作（自动执行所有作业），也可以自行 点选作业自行操作

<img src="/assets/PZbibMo0yozKWYx4DX1cNbC4nqg.png" src-width="2922" src-height="1556" align="center"/>

#### 数据同步

点击执行后会同步系统数据（交易、日切点前的出入金、交易、开户等数据）

#### 清算前检查

在日终流程中点击清算前检查步骤会：自动触发当日的交易对帐

交易对帐失败的，可快速跳转到交易对账界面（清算管理 - 市场清算 - 清算检查 - 交易对账）查询结果

<img src="/assets/Z5wObSdPiowJBKxsWOacozLknwg.png" src-width="2852" src-height="1374" align="center"/>

<b>对帐结果查询</b>

可在<b>清算检查 - 交易对账</b>页面分别查询各市场的交易对帐

每次点击检查会生成最新的检查结果，只需要维护最新的检查结果

可在<b>交易对帐</b>页面查询交易对帐的差异明细、对帐总览讯息；

点击本端档案可查询本端明细；点击对手端档案可查询对手端明细

参考图示如下：

<img src="/assets/S8MtbgmR2oh4IYxMfEHck5R3nTh.png" src-width="3566" src-height="1732" align="center"/>

<b>特殊场景手动通过</b>

对手端档导入错误：在档导入介面，重新导入对手端档，然后重新点击清算前检查 

本端订单错误：增、删、改前台订单后，重新点击清算前检查 

按系统数据处理：在“检查结果”（清算管理 - 市场清算 - 清算检查 - 检查结果）中，将对应的检查结果改为“通过”，然后重新点击清算前检查

<img src="/assets/NoJ5bSM4vomhhax2lhUcieEMnae.png" src-width="2920" src-height="1552" align="center"/>

#### 清算计费

在清算计费步骤会生成前台合约，状态为待计费

该步骤暂停执行的，可以编辑前台订单的收费

#### 清算入帐（已清算交收合并）

执行完毕后：
根据计费帐单，股票本金和手续费作业务帐户处理
合约状态变由计算完成更为待交收
系统会生成 SDR018 系列报表

注意 1：后台补单必须在该步骤之前操作完成

注意 2：清算撤销（资产处理选择不处理的）后，此步骤已经完成的，清算计费和清算入帐为空跑，按原资料处理

#### 清算交收

执行后：
根据合约和调帐等其他流水进行仓位处理
对应日期的合约变更为交收完成
生成仓位数据
生成 ATI 等指令
生成临时持仓，用于处理公司行动

## 四、日终清算（非交易清算）操作说明

### 清算前准备

在正式执行日终清算前，需要先执行清算前准备
必须在完成所有的市场清算后再操作
检查是否完成了当天所有的业务操作
操作方式同市场清算，详见上文

### 日终清算一键清算

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键

系统会自动从第一步开始执行，一直到结单生成步骤

结单后可通过报表或者结单进行检查

<img src="/assets/J0wjbyoqZo5PyaxdDDjczSYDn9g.png" src-width="2852" src-height="1374" align="center"/>

#### 数据汇总

此操作前需要完成流水日期调整，证券组合费/融资利息的提前归本、金额调整

此操作加工多个市场的交易数据、调帐数据、出入金、收盘价等文件，可重复点击

数据汇总后操作流水日期调整、收盘价，需要重新点击数据汇总

#### 清算中检查

内部流水对帐、业务操作检查等（不断扩充中）

为内部数据检查，有异常的可联系客服

清算中检查手动通过的操作方式类似交易对帐

<img src="/assets/JH5ybYIFqo3GxzxN5oUc1GDwnic.png" src-width="2846" src-height="1418" align="center"/>

#### 资金清算

执行融资利息计算、证券组合费、融券计算等任务

#### 清算后检查

内部流水对帐、业务操作检查等

为内部数据检查，有异常的可联系客服

清算中检查手动通过的操作方式类似交易对帐

#### 结单生成

<img src="/assets/DMYWbK1ZmoSxlKxpimicH0EGnOe.png" src-width="3364" src-height="1452" align="center"/>

<img src="/assets/GZfib9fmlo6h9vxxn2vc2mYUnj3.png" src-width="3304" src-height="1452" align="center"/>

可以点选右侧记录区对结单【重发】或【下载】

<img src="/assets/Fxjrb0KGVoVVMfx3uvmcC2qon0b.png" src-width="3360" src-height="1460" align="center"/>

也可产生一份临时结单，在临时结单视窗输入对应客户与结单日期。·临时结单支持跨月，支持最早时间 1 年、最大时间跨度 3 个月的临时结单

<img src="/assets/DFzGbHvtioWzQ3x6P3TciJzUn2g.png" src-width="3340" src-height="1368" align="center"/>

<img src="/assets/NVv4bf0bvoH4Fmxwr4dcPg2fnsg.png" src-width="3362" src-height="1368" align="center"/>

#### 日切

执行完日切流程后，当前系统帐务日会切换到下一日。进行了融资利息等的结算操作，触发了经纪人分成计算的任务

## 五、交收指令导出

T+2 日的早上可导出 ATI 交收指令，上传到 CCASS

路径：清算管理 - 日终任务 - 交收指令导出

支持导出未来日期的文件

支持导出 HK、SZ、SH 多市场

<img src="/assets/I9Wgb8c5doirwUxzZ9Xc9yN8nle.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/AjoWbZWNho9sDdxQlsGcrWDGnKg.png" src-width="3574" src-height="1774" align="center"/>

## 六、持仓对帐

在文件导入界面可导入持仓文件，部分文件可直接系统触发对帐处理

<img src="/assets/Cu6WbgX6yoeUCBxkmJicjpMHnCb.png" src-width="3350" src-height="1456" align="center"/>

导入后并触发系统对帐处理后，对帐结果为进行中

对帐任务执行完毕后，对帐结果为不平帐或平帐

<img src="/assets/GudmbSccnorbLZxLn9Wcr1yNn7d.png" src-width="2930" src-height="1554" align="center"/>

点击重新对帐也可（重新）触发系统对帐。支持触发历史日期对帐

<img src="/assets/XulibqZa0oMH4Hx5B96cB4PAnX3.png" src-width="2914" src-height="1526" align="center"/>

## 七、非交易流水编辑日期

本作业主要是市场清算后，若想要改变原本日终所计算的流水入帐日期，也就是进行资金/持仓的流水日期调整，新机制下通过修改前台帐户日期实现

路径：清算管理  &gt; 市场清算  &gt; 流水管理

### 单笔流水日期编辑

资金和持仓流水需要在不同页面 Tab 上操作，找到流水纪录点击编辑

<img src="/assets/AxPEbwD9boqPVuxm5PLcD7IIn5g.png" src-width="3578" src-height="1798" align="center"/>

输入需要处理的日期

<img src="/assets/Q8XFbOGk4oWQHfxo93wcHhtnn1f.png" src-width="3368" src-height="1308" align="center"/>

观察编辑号的帐务日期，看是否生效

<img src="/assets/JoUJbhbUuojD0xxC4MqcjTy9ncc.png" src-width="3368" src-height="1308" align="center"/>

在日终任务中重新点击数据汇总

### 批量流水日期编辑

先选中流水纪录，然后点击批量编辑帐务日期

<img src="/assets/RFxabZ7o1oVheAxsmOkc2Nman0e.png" src-width="3344" src-height="1456" align="center"/>

在日终任务中重新点击数据汇总

### 通过业务码批量编辑日期

注意：批量调整日期的，需要事先确认该业务码是否支持编辑，边界后需要在页面观察最终结果

<img src="/assets/Fsosb77I6onLl1xp9NmcJ44CnBe.png" src-width="3356" src-height="1344" align="center"/>

### 更新数据

流水同步为准实时。提交后，可刷新当前账务日期的全部数据。

<img src="/assets/Ba0bbLaHpoKMBcx6Ms5cc1T9nVb.png" src-width="3578" src-height="1798" align="center"/>

## 八、后台客户<b>合约补单和券商快捷补单</b>

提供新增客户补单与劵商快捷补单的合约记录功能，这个补单就是业务上所谓的 Client trade 与 Broker trade 补单

在清算计费步骤前补录客户合约

上手合约（代理商合约）单是建立在合约基础上进行相关补单操作

上手合约（代理商合约）需要在清算前检查步骤前操作

### 后台客户合约补单

点击新建客户补单

<img src="/assets/NqYpbxbs5oH1ZHxGRxZce97FnOe.png" src-width="3008" src-height="1494" align="center"/>

先补充基础信息，系统会自动进行部分字段的试算（可人工进一步修改）

<img src="/assets/Q5rmbwYDroNseixNOsecisCLnCd.png" src-width="3008" src-height="1494" align="center"/>

系统已支持历史交易日补单（最多前 5 个交易日），补单后交易日期为历史日期，帐务日期为当日

<img src="/assets/LPGTbFJ9yokwBAxyeFtcFAUfnOd.png" src-width="3008" src-height="1594" align="center"/>

提交后数据有错误，可进一步编辑后台合约的基础信息

<img src="/assets/THrVbX64vo1E26xaUrbcst8Rnvd.png" src-width="3008" src-height="1494" align="center"/>

<img src="/assets/UmGWb0VUoom0vzxpZjfc4YNQnFf.png" src-width="3008" src-height="1494" align="center"/>

点击计费可以自动计算费用

试算后可进一步编辑费用，详见费用查询和编辑

注意：只要操作过计费、添加、编辑的，即使删除了全部费用，在清算计费步骤中不会再计算费用；如果在费用信息页面未进行过任何操作的，在清算计费步骤会自动基于配置的规则计算费用

<img src="/assets/Ip1kbvPqYoXosIxHN6ecXl4on1f.png" src-width="3008" src-height="1494" align="center"/>

若商品是 OTC 产品或者交易通道未进行系统对接的，则结算渠道要对应选择 OTC 结算渠道

<img src="/assets/DH5mblrQNoq53XxQE3XcibiCngb.png" src-width="3008" src-height="1594" align="center"/>

OTC 补单系统会按大账号自动计算托管商、子仓

托管商、子仓可进一步编辑，详见仓位信息查询和编辑

<img src="/assets/Yj2abb7WBoIPd8xQkjrcaigCnNb.png" src-width="3008" src-height="1494" align="center"/>

### <b>券商快捷补单</b>

在完成所有客户合约补单后，可以透过右上【劵商快捷补单】操作劵商补单

注意：券商快捷补单仅能查询结算渠道为 OTC 的数据，生成的数据用于清算前检查步骤的交易对帐

<img src="/assets/B7M0b7tVZowcdXxB4LicJnTGnBh.png" src-width="2898" src-height="1520" align="center"/>

<b>机构合约（代理商合约）提前试算</b>

选择所有筛选条件，点击试算机构费用并刷新，系统会自动计算代理商费用（详见后文机构合约操作说明）

<img src="/assets/THwTbC48QombuwxRUmbcNnnmn2b.png" src-width="2914" src-height="1098" align="center"/>

<b>更新对手方文件</b>

初步核对数据，有问题的修改客户合约后，重新进入页面并刷新

操作人员也可以先点击编辑，临时调整数据。注意：此编辑不能保存在数据库中，仅配合“更新对手文件”按钮使用

<img src="/assets/Y2Npbfzq3oQOffxipQ8c6MCKnfc.png" src-width="2926" src-height="1554" align="center"/>

核对无误后，200 条以内数据，可点击更新对手文件，该文件可用于清算前检查的交易对账

<img src="/assets/W8tPbjPowo4PcYxevCVcsUJFnDf.png" src-width="2922" src-height="848" align="center"/>

200 条以上的数据，可下载模板文件，编辑后在清算前检查步骤前导入文件

<img src="/assets/HIv7bHykzoan32xlzd8cTXn2nCh.png" src-width="2920" src-height="838" align="center"/>

<img src="/assets/D62fbJXLnoepe5xzdwTc2AxhnKg.png" src-width="2904" src-height="1542" align="center"/>

## 九、<b>查询和编辑前台交易合约</b>

在操作清算计费步骤后，系统会基于前台交易订单、计费管理配置生成客户合约

点击详情可查看客户合约的详情

前台合约只支持编辑费用信息、IBOND 累计利息、结算币种、仓位信息

前台合约的其它字段如果有问题，需要先修改前台合约数据，再依次执行清算前检查和清算计费步骤

<img src="/assets/QdaGbj2DzoDWg4xibAscsfOVn6A.png" src-width="2456" src-height="1242" align="center"/>

<img src="/assets/R06IbrSEborsA6xi12gcsOWGnGd.png" src-width="2484" src-height="1530" align="center"/>

进入详情页直接展示含交易日期、交收日期、特殊收费条件在内的基本信息
数据来源是“交易”的为前台合约

<img src="/assets/AkfOblq8XodksmxzDrfcyrqGnJc.png" src-width="2486" src-height="1544" align="center"/>

### 结算币种编辑

在基础信息点击编辑

<img src="/assets/Yz86bWV1io3TQJxBT3NcYI45nwh.png" src-width="2486" src-height="1502" align="center"/>

同时修改结算币种和汇率并提交

系统会根据汇率和结算币种计算累计利息（结算币种）、交易金额（结算币种）、费用（结算币种）

系统会按结算币种进行扣费和交收

<img src="/assets/OHkQbgZEuoTUBTxOIkwcs1qxnef.png" src-width="2512" src-height="1558" align="center"/>

### 成交纪录查询

点击成交记录可展示成交记录

<img src="/assets/VbLEbqRbZohpZZxzS5xcbRX9nSc.png" src-width="2480" src-height="1542" align="center"/>

### IBOND 累计利息编辑

在成交记录中，可以点击编辑，修改累计利息

<img src="/assets/F6mGbL86ZoVwK6xzQfPc2DJWn1b.png" src-width="2500" src-height="1556" align="center"/>

### 费用查询和编辑

点击费用信息可展示收费明细

<img src="/assets/LRaob16pfoTPYTxzRDLcyxiRnzc.png" src-width="2488" src-height="1526" align="center"/>

点击试算会重算全部费用

<img src="/assets/FVhrbEnVPoGTdZxaNl1ck0iInFd.png" src-width="2480" src-height="1536" align="center"/>

点击添加可以增加费用，增加收费类型不能和已有的重复

<img src="/assets/Lwh8b1azCoAZwlxEwfdc4Abvnwc.png" src-width="2894" src-height="1548" align="center"/>

点击删除可以删除费用

<img src="/assets/CQITbRRXrofPWBx4KDFcj6OxnPg.png" src-width="2892" src-height="1538" align="center"/>

点击编辑可以修改费用

<img src="/assets/U6FwbiEz7ocZUBxsYbzcJhgZn7b.png" src-width="2916" src-height="1538" align="center"/>

### 仓位信息查询和编辑

点击仓位信息可查询仓位数据

<img src="/assets/VndtbxNYdokC0HxbvVHccTW6nBV.png" src-width="2900" src-height="1552" align="center"/>

点击编辑可修改托管商和子仓

<img src="/assets/OE8ybBYSmoULvZxCd0kcTWLSnHl.png" src-width="2914" src-height="1544" align="center"/>

## 十、提前交收

若在 T+2（N）时有提早交收的入帐操作，方便客户可以提早操作资金相关处理

路径：清算管理&gt; 市场清算&gt;交收系统&gt;交收批次 Tab 页签

点选【提前交收】，输入欲提早交收的市场（可多选）

<img src="/assets/Oe7Yb06CxoaAOLx8VsycA3wNnSg.png" src-width="3364" src-height="1450" align="center"/>

操作后可观察交收批次是否处理完毕

<img src="/assets/WMvIbJmkyoc8UaxskGWcVbAOnth.png" src-width="2516" src-height="740" align="center"/>

## 十一、仓位调整

路径：清算管理&gt; 日终管理&gt;仓位管理&gt;仓位查询

### 子仓位置调整

查询出对应的客户记录后，在右侧记录区点击【<b>编辑仓位</b>】

<img src="/assets/Y0vxbtG9BoIZWLxGcmacQZennUc.png" src-width="2924" src-height="1546" align="center"/>

此处根据实际数据来调整子仓位置（子仓位置之后必须和持仓保持一致）

<img src="/assets/PLG6bo1KkoMT3NxRGutcSpxVngb.png" src-width="2914" src-height="1538" align="center"/>

调整后会在仓位流水页面（Tab 页签）生成一条调整记录

<img src="/assets/F7ENbsM3XoGzdOxlqvjcMlOKnBd.png" src-width="2892" src-height="1022" align="center"/>

### 内部转仓

查询出对应的客户记录后，在右侧记录区点击【<b>内部转仓</b>】

<img src="/assets/HqeKb6YEuo4EBQxzpGNcOp6RnId.png" src-width="2920" src-height="1548" align="center"/>

调整后会在仓位流水页面生成两条调整记录

<img src="/assets/AJbFbAtMOobGysxC6ZbcPmQgnGg.png" src-width="2922" src-height="1236" align="center"/>

### 批量调整

可以根据事先下载模板，进行批量调仓

<img src="/assets/EI53bs7gWoH7Egxn2Nfc3q1Kn5c.png" src-width="2052" src-height="640" align="center"/>

<img src="/assets/S9e0bjFIRodLIBxwDujcB9y5nng.png" src-width="2926" src-height="1556" align="center"/>

## 十二、融资利息调整

### 融资利息查询

可在融资利息账单页面查询每个客户的融资利息收费详情
当期账单=抵扣后金额 + 已调整利息
抵扣后金额=抵扣前金额 + 抵扣金额

<img src="/assets/A9PDbM0OyokHjCxrRmLc8TJinqe.png" src-width="2910" src-height="1544" align="center"/>

点击抵扣后金额可查询每日的融资利息明细

<img src="/assets/KfSGb0IFKoQBNnxp3F5cSsVAnJX.png" src-width="2910" src-height="1554" align="center"/>

<img src="/assets/MDT5bXQoDoi5BUxSIGZc7Efrnwb.png" src-width="2898" src-height="1522" align="center"/>

### 融资利息调整

点击调整可调整融资利息

<img src="/assets/GuIIb92Lqo5b9wxfnwocyyEtnRW.png" src-width="2910" src-height="1528" align="center"/>

按本金调整：系统将根据输入的本金自动计算需要调整的利息

<img src="/assets/OlT2bXPiRorp8xxZp4HcktCKnRf.png" src-width="2914" src-height="1548" align="center"/>

按结果调整：系统将根据输入的该日利息总额，自动计算需要调整的利息

<img src="/assets/QYNFbQugJoZLuPxT8K8c6jEhnZc.png" src-width="2928" src-height="1558" align="center"/>

按发生额调整：系统将根据输入额，调整利息。按发生额调整支持同时修改多天

<img src="/assets/G23JbFuJUorjlNxdKeEcmT7On7f.png" src-width="3008" src-height="1494" align="center"/>

调整的流水可在<b>差错流水</b>页面查询

<img src="/assets/M9a3bTQiZoUpcJxBqSwcNWPLnSd.png" src-width="2482" src-height="1406" align="center"/>

特殊情况，未生成融资利息帐单的，可先新增帐单，再调整

<img src="/assets/XsVxbnCE6oiYFNxD65tcxrT5noc.png" src-width="2912" src-height="1550" align="center"/>

### 批量调整

可按照发生额调整进行批量处理

<img src="/assets/BRn7b5Qc6o4kOzxNTLucPioHnBb.png" src-width="3578" src-height="1798" align="center"/>

### 提前结算

注意：日切期间（第次击数据汇总后 - 日终流畅点完日切）不能操作提前结算

筛选客户，点击提前结算

<img src="/assets/OE5BbyWPfoeiOGxzmVHcICF2nIf.png" src-width="2900" src-height="1546" align="center"/>

## 十三、收盘价临时编辑

有持仓的股票会展示在收盘价管理页面

路径：清算管理  &gt;  市场清算 &gt;  收盘价管理

前置条件：已经完成日终任务 - 清算交收/数据汇总 这个流程节点

<img src="/assets/BvZMbvkZ8o4fOxxDQSCchpCfn1c.png" src-width="3362" src-height="1342" align="center"/>

需要临时修改清算收盘价的可点击编辑

<img src="/assets/LvrGbhmaCowQbnx89JOcTYFbnwg.png" src-width="3460" src-height="1555" align="center"/>

修改收盘价并提交

提交后，需要重新再执行一次数据汇总

如果是清算前准备报错的，可先执行清算交收，然后重新执行清算前准备

## 十四、清算撤销

选择需要撤销的日期，点击清算撤销，根据实际需要，选择撤销项目，并提交

注意 1：该任务为异步操作，可能须等一点时间

注意 2：仅能 操作 T 日与 T-1 日的清算撤销操作

注意 3：操作连续撤销的，必须按顺序进行撤销

点击新建清算撤销

<img src="/assets/Z36KbHV65opdpdxma5gcUQdSnib.png" src-width="3578" src-height="1798" align="center"/>

根据撤销场景选择实际项目

<img src="/assets/Ws3xbHIZLoPGINxfrZLcUtU1nVf.png" src-width="3578" src-height="1798" align="center"/>

提交后，可在列表页关注撤销

<img src="/assets/LLwebJiYIoL3SLx7wsdcOdGPnIh.png" src-width="3578" src-height="1798" align="center"/>

<table>
<colgroup>
<col width="183"/>
<col width="383"/>
<col width="330"/>
</colgroup>
<tbody>
<tr><td><p>场景</p></td><td><p>清算撤销表单</p></td><td><p>后续操作</p></td></tr>
<tr><td><p>日切点后调账，下一日的流水改到当日<br/>日切点后调账，当日的流水调整到下日<br/>资金清算后，调整收盘价</p></td><td><img src="/assets/JlADbfgXZovqwZxztGTcQUKpnlU.png" src-width="3020" src-height="1452" align="center"/></td><td><p>清算撤销 - 流水管理界面编辑日期 - 重新执行日终<br/>注意：找不到流水的可点击更新数据</p></td></tr>
<tr><td><p>日切前发现计费（合约收费、补单）有问题需要调整</p></td><td><img src="/assets/AxcRbGjA1od525xAFjActXHpnSe.png" src-width="3020" src-height="1452" align="center"/></td><td><p>清算撤销 - 修改费用</p></td></tr>
<tr><td><p>月底融资利息结算异常<br/>例子：某客户的融资利息需要调整后再结算</p></td><td><img src="/assets/CW1tbKZ3bogpwIxVGXnc4S23n8f.png" src-width="3020" src-height="1452" align="center"/></td><td><p>清算撤销 - 融资利息管理编辑利息 - 重新执行日终</p></td></tr>
<tr><td><p>台风天已经进行提前交收，需要撤销</p></td><td><img src="/assets/Stl1bzr1qoFQtSxdOVkcnlnenFb.png" src-width="3020" src-height="1452" align="center"/></td><td><p>清算撤销 - 台风天处理 - 执行日终</p></td></tr>
<tr><td><p>日切后发现计费有问题需要调整<br/>量大的券商建议联系客服技术介入</p></td><td><img src="/assets/JfLKbbMImoO1W9xWWbvcjQqQnJd.png" src-width="3020" src-height="1452" align="center"/></td><td><p>清算撤销 - 执行日终 - 暂停 - 清算计费 - 编辑费用 - 继续日终</p></td></tr>
</tbody>
</table>

## 十五、台风天处理

台风天 8 号风球处理

路径：清算管理 &gt; 市场管理 - 台风天处理

### 台风天全日市

场景：9 月 2 日为台风天，港股交收整体延后
选择需要处理的账务日期（如 9 月 2 日），需要处理的市场（HK）
操作时可操作钱货同时延后，或者仅钱延后
提交后：所有待交收的货（钱）都会延后一个帐务日期进行处理，点击完「确定」后更新版面

<img src="/assets/BH18biKOjorWRBxeFGdcLcYZnoI.png" src-width="3578" src-height="1798" align="center"/>

在日切点前需要操作日终的，日终任务点击提前日切。最终支持在下午 2 点半后操作。推荐在下一日进行操作

注意：提前日切按钮需要配置工单审核来操作

<img src="/assets/MTCEbPEYDooAdCx39FRcxjbfnbg.png" src-width="3332" src-height="1192" align="center"/>

<img src="/assets/CpoobZLiioXDRTxJv8qcx223nnb.png" src-width="3368" src-height="1172" align="center"/>

### 台风天半日市

