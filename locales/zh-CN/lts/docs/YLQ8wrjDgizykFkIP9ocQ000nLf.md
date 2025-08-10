---
title: 常见问题
slug: YLQ8wrjDgizykFkIP9ocQ000nLf
sidebar_position: 3
---


# 常见问题

## 日终初始化配置

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股多市场如何操作日终？</p>
</div>

配置两个市场清算，美股市场设置为隔夜市场

每天早上执行上日的美股市场清算，下午执行港股市场清算以及日终清算

<img src="/assets/CCuYbmmNpoKmLjxtInuciV7inYg.png" src-width="3574" src-height="1774" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股的结单如何分别生成？</p>
</div>

港美股的使用同一个账户进行交易。所以结单是统一生成的，不支持分市场生成

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港、美股时区不一致，怎么解决？</p>
</div>

在市场管理中将美股市场配置为隔夜市场

则在 28 日清算中会处理 28 日的港股交易、27 日（美国时区）的美股交易

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>是否可以在一个流程里完成日终清算？</p>
</div>

- 路径：业务参数设置 - 日终设置 - 清算参数配置
- 可编辑时间段：操作日终任务之前
- 编辑清算初始化配置时需要审批
    - 工单标识：clearing.update_system_config.exec  

<img src="/assets/Me38b9ODroR1NIxw0n1casMinlV.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/M4WcbtDdLoZFnUxtlLdcv2L5nsc.png" src-width="3574" src-height="1774" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>若想依赖公有库市场资料，但希望自行维护收盘价且不让公有库资料覆写，在清算流程中应如何处理？</p>
</div>

<b>推荐直接在私有标的库增加标的，而不是使用公有库</b>

如果确实有需要，可以按如下操作：

- 在市场规则中将股票资讯来源设置为不依赖公有库

<img src="/assets/QvZ9bJCAgoyCsfxM5LDcxwoFnLg.png" src-width="3020" src-height="1452" align="center"/>

- 如果需要新增标的，可以选择同步公有库的资讯然后进行二次维护。

<img src="/assets/Ff3sbQxqVoPWGnxcqDLcELSvnxc.png" src-width="3020" src-height="1452" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如果某个市场只有 OTC 业务，不想单独维护市场日历怎么办？</p>
</div>

- <b>将该市场配置为 OTC 简化流程</b>
    - 配置后，该市场<b>无需</b>设定日历，<b>非周末皆可视为交易日</b>
    -  配置后，该市场<b>即便未加入日终流程，亦可进行补单</b>。执行日终时，将<b>跟随主市场一并进行市场清算</b>

<img src="/assets/EuLpbj7M1omeqDxPqoEcbq8enae.png" src-width="3020" src-height="1452" align="center"/>

## 日终任务执行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何查询未来的账务日期？</p>
</div>

<img src="/assets/ABEzb115VoqvCvxxOzvcW6ADnrc.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/TuXNbfRnNoQEeGxaJ3icnBqAn6q.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股半日市如何提前执行日终？</p>
</div>

<img src="/assets/WcgmbbpZWocXckx8XxKcqg3pnNc.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/ABKVbBirYoYjiKxAzstcjflBnKc.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>平时可否在日切点前进行清算？</p>
</div>

可以，但是必须在公有库的行情文件文件到位后进行。

例子：券商的日切时间点是下午 17:00。非半日市在 16:30 之前可以进行提前日切。但是，因为港股未收市，港股的股票信息和收盘价数据是没有的，一直需要等到 16:30 后才能执行日终任务。

<b>所以，非半日市或者非港股假日，不建议在 16:30 之前操作提前日切</b>

<img src="/assets/K7dXb8ifQoAsEwxbAzKcy3Lsndd.png" src-width="3584" src-height="1764" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如果当天想修改某个客户某一笔交易收费怎么处理？</p>
</div>

<b>方式一：修改收费渠道</b>

<img src="/assets/X2habxE0doeHjixpNDvcD7xJnNb.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/SincbLUkxoao67xOcEocd5qNnte.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/HJombiLhqo0cwTxhL6Dc6Ej1nKh.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/TZl1bCXTjowkzbxVVEichRUknWf.png" src-width="2602" src-height="490" align="center"/>

<b>方式二：修改合约</b>

<img src="/assets/M8wfbt8NUo843Wx63QWcg3pDnde.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/P0ogbmMDxoC6BDxl6oIcmYvznuC.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/X2apbQPTYoD4C8xNE3BcVLClnAc.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/Trseb9uJ9ot4noxeNP3cjGC3npf.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/SwgHbIcaso3GzHxia3XccrAHnah.png" src-width="2602" src-height="490" align="center"/>

## 客户费用配置和查询

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何新增费用，什么是收费场景？</p>
</div>

费用由技术人员直接添加，券商可基于费用添加收费场景

场景场景是计费配置的基础元素，代表这个费用在系统中是否被正式启用。系统基于收费场景设置了一些便捷功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>修改股票交易费用配置后，何时生效；怎么判断是否生效？</p>
</div>

请在对应市场的清算计费步骤前，修改收费规则后。修改后 10 分钟内生效

可以在客户计费查询页面（路径：业务参数设置 - 计费管理 - 客户计费查询），此页面查询的数据为最新数据

如果想提前生效，可点击<b>刷新配置</b>按钮

<img src="/assets/RNZIb7GNYoPZypxca1CcTm8Xnwf.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/M1jvbLhlsoNRnNxTwjwccwFBnTh.png" src-width="2854" src-height="1358" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>修改收费配置后打算马上生效</p>
</div>

<img src="/assets/MsgsbH8QBooAW5xYrwScxzAEnSf.png" src-width="830" src-height="396" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>想要查看之前某一笔交易的的佣金是基于什么配置计算的？</p>
</div>

<img src="/assets/VjREbYNfxoQpMdxbd6ccl24snHe.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/Q7CJbGlvloy8JKxJyVychEHwnMd.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/NHlLbJBReow7tAxngrHcL8Nanrg.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>和客户协商了佣金，如何进行修改</p>
</div>

<img src="/assets/OMCSboEiwofsY1xYwxsc9I2nnuf.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/WzOibrUkuo3orIxIR7SchjHLnVe.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/Wu6jbi9BkofEodxVFEGcAk9nnte.png" src-width="1079" src-height="1329" align="center"/>

<img src="/assets/X8l2b3VjZouThGxfAERcQMqDnQh.png" src-width="830" src-height="396" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>某一客户针对 WTT 下单的渠道想要收取更高的费用，如何处理？</p>
</div>

如果是只想针对某一客户设置，在<b>客户计费</b>（路径：计费管理 - 客户计费）页面添加客户计费。普通收费设置为标准费率，同时添加 WTT 的特殊收费并设置相应费率

如果是只想针对某一客户组设置，在<b>客户组计费</b>（路径：计费管理 - 客户组计费）页面的普通客户组添加计费。普通收费设置为标准费率，同时添加 WTT 的特殊收费并设置相应费率

如果是只想针对全部客户，在<b>客户组计费</b>（路径：计费管理 - 客户组计费）页面的全<b>局客户组</b>添加计费。普通收费设置为标准费率，同时添加 WTT 的特殊收费并设置相应费率

<img src="/assets/U8BNbbktGocitjxcKxHcEbVRnGV.png" src-width="3578" src-height="1798" align="center"/>

## 标的信息修改

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>公共标的库和私有标的区别？</p>
</div>

公共标库的信息由 Whale 依据港交所等数据进行加工处理，券商仅拥有临时修改的权限；私有库的信息则由券商自行维护全部内容。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何临时修改公有库的信息？</p>
</div>

当日券商可对公共标库中的标的进行临时修改，并需及时将修改后的信息反馈给 Whale 客服，以便进行后续的数据更新与维护。

<img src="/assets/WzRJbMFhnoJtPyxbyD7cElv3nRf.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/UdGxbrLA9oPEc8xhQj2cz6o7nqg.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>何时可以对公有库中的标的信息及收市价进行临时修改？</p>
</div>

数据同步后可进行操作：
若在数据汇总前进行操作，无需额外处理。
若在资金清算前进行操作，需重新执行数据汇总及清算检查。
资金清算后，则不可进行修改。

<img src="/assets/J6tCbyJMPovu5xxH1FscNt86ntd.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>停牌 3 天以上收盘价会改成 0 吗？</p>
</div>

系统会根据第三方数据判断停牌是否已达到 3 个交易以上，如果已到 3 个交易日，结单收盘价（停牌标的用）会将结单收盘价置为 0，如果停牌天数计算有问题，或者停牌时想提前将收盘价置为 0 的，可直接修改该字段。

除了结单，部分报表在进行收盘价计算时，

<img src="/assets/WmvYbQQe8of9O1xHy2FcqD53ngg.png" src-width="2876" src-height="1346" align="center"/>

## 后台补单

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>后台补单提交后是否会立刻冻结客户资金？</p>
</div>

不会，完成日终任务 - 日切步骤后才会正式针对资产账户进行操作

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>新增代理商需要配置什么？</p>
</div>

路径：清算参数设置 - 市场管理 - 服务商：配置基本信息和持仓对账方式

路径：清算参数设置 - 市场管理 - 子仓：配置子仓

路径：清算参数设置 - 市场管理 - 结算渠道：配置交易对账方式

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>后台补单录入债券的注意事项是什么？</p>
</div>

<img src="/assets/JdwzbeXNRoYmbpxlD8XcoAlanLf.png" src-width="3564" src-height="1768" align="center"/>

<img src="/assets/RQ9sbqzHjoupK8x35Vsc5iMgnUc.png" src-width="3564" src-height="1768" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>场外交易如何单独设置收费</p>
</div>

新增收费场景

<img src="/assets/HUOqbLPsZoS2HwxWKM6c4hddnse.png" src-width="3020" src-height="1452" align="center"/>

- 在套餐收费或个人化收费中设定具体费率并添加客户

<img src="/assets/KKGdbJmyGoPrY7xQSL4csBQUnIg.png" src-width="3020" src-height="1452" align="center"/>

- 在客户计费查询页面查询最终的配置效果

<img src="/assets/WWYobDlX7ofhSUxDJVecjfecn2c.png" src-width="3020" src-height="1452" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>在补单时，债券如何使用面值输入</p>
</div>

- 在添加成交记录时，点击切换
- 注意：切换功能仅对私有库的债券有效

<img src="/assets/Ra9XbD4aIo2AhSxz7i6cn4mFnyc.png" src-width="3008" src-height="1494" align="center"/>

## 交易对账

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>为什么会有多种对账模式？</p>
</div>

不同上手在提供交易文件时，会有不同的格式和字段。不同上手会有不同的对账模式。常用的对账模式有成交对账、订单对账、股票对账。不管是哪类都会对交易数量和交易金额（交易数量*成交价格）进行对账

成交对账：基于成交流水号进行配对，会比对交易数量和交易金额

订单对账：基于订单号进行配对，多笔成交的会进行汇总

股票对账：基于股票进行配对，多笔成交的会进行汇总

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>前后台补单后，因为没有流水号，会出现不平账，该如何处理？</p>
</div>

处理方案一：借助 SDR015-2 报表。查看第三模块，人工比对不平账，看看基于股票的对账是否平账。如果平账的人工通过

<img src="/assets/QtjcbpbzPooWctxl1aiclrHnnCb.png" src-width="3584" src-height="1696" align="center"/>

处理方案二：开启模糊对账功能

在清算参数配置打开模糊对账功能。

<img src="/assets/Q8Rib9m2ao8xJkxSEXDcbrnHnTe.png" src-width="3584" src-height="1696" align="center"/>

如果有不平账，系统会自动按股票重新对账

如果“按股票对账”进行重新对账后，结果为平账的，系统会将“按股票对账的结果”处理为平账。反之，“按股票对账的结果”依然为不平账

如果“按股票对账的结果”为平账的，清算检查自动通过

<img src="/assets/Zx7dbuYBeojUMyxxToec6OGBnwg.png" src-width="3584" src-height="1696" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>CTF 交易文件自动导入</p>
</div>

<b>开通</b>

EP 模式的券商，可联系客服开通。开通后每个交易日，系统会自动从港交所的 SFTP 获取交易文件

<img src="/assets/BWXubhuBCoDyvdxkqZJcC83Lnbh.png" src-width="3584" src-height="1764" align="center"/>

<b>到点文件没有</b>

系统会从下午 13:00 开始，自动获取港交所文件。如果一直没获取到文件的（手动导入的也算导入），每隔 10 分钟跑一次，一直跑到下午 5 点

如果租户在 16 点 35 后（或半日市的 13:05 后），发现系统没自动导入的，可人工手动导入

## 持仓对账

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>什么时候进行持仓对账？</p>
</div>

港股市场在下一日对上一个的持仓。在上一日日切且收到文件后进行

美股市场因为是隔夜市场，可在当前账务日期对当日的账。最早可在清算交收步骤后进行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持仓对账任务是如何触发的？？</p>
</div>

文件类型标记为触发持仓对账的文件，在导入后可自动触发持仓对账

注意如果是 OB 模式，当日就要触发持仓对账的，请在清算交收后再导入持仓文件

<img src="/assets/Y5fSblZ1yoJWKQx1LTgcdWiun6d.png" src-width="3572" src-height="1662" align="center"/>

如果持仓文件未支持“自动触发持仓对账”，可在持仓对账页面点击“重新对账”

<img src="/assets/PxNVbljWwoa5CIxevcLcxRUmnnc.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>非交易日是否需要发起持仓对账？</p>
</div>

不需要，系统也不支持发起持仓对账

<img src="/assets/Z89sb2kk0o0SpIxN38NcnEeNnXf.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持仓对账不平后，如何进行确认？</p>
</div>

根据不平账明细，查找是否有漏做的转仓、公司行动等操作

<img src="/assets/MGCFbS81Qo8jVMxwT0scnmR2nGf.png" src-width="3572" src-height="1662" align="center"/>

逐项确认完毕后，在检查结果页面点击通过

<img src="/assets/BomSbi9Ico3y5uxXrSsc8vPJnye.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/LjYYbzjHUoZpmvxZ7KUceRBGnxd.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/MRmab9eGIoBJMcxGrobcbHtAnVc.png" src-width="3572" src-height="1662" align="center"/>

## 交易的提前交收

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股市场如何让用户可以在早上提现？</p>
</div>

方式一：可以打开“11 点的港股自动交收”、“US 日切后自动交收”任务

路径：业务参数设置 - 日终设置 - 清算参数配置

<img src="/assets/SpPybPk1noYDfKx4vvyc0fPwnWd.png" src-width="3570" src-height="1774" align="center"/>

方式二：手工操作提前交收

路径：清算管理&gt; 市场清算&gt;交收系统&gt;交收批次 Tab 页签

点选【提前交收】，输入欲提早交收的市场（可多选）

<img src="/assets/KOQzbEUYGo2XqyxS1exccTpHnnd.png" src-width="3364" src-height="1450" align="center"/>

操作后可观察交收批次是否处理完毕

<img src="/assets/TNFubCMOyofC61xiJgQcFDcdnAc.png" src-width="2516" src-height="740" align="center"/>

## 切换上手时如何内部转仓

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>切换上手后，在系统进行内部转仓？</p>
</div>

<b>方式一：单笔操作</b>

操作路径：清算管理 - 仓位管理 - 仓位查询

a.<b>筛选数据</b>
- 日期范围：设定为「当前账务日」以筛选出当日相关资料。
- 其他条件：如有需要，可进一步筛选客户、股票等条件，以缩小查询范围
<b>b.执行内部转仓</b>
- <b>逐一处理：</b> 针对每一个客户、每一个股票，分别执行内部转仓操作
<b>c.注意事项</b>
- 在清算中检查前操作
- 即使之后撤销了清算，系统仍会保留此次操作的记录

<img src="/assets/IMiEbxRZaozj5VxsXvBc1LZ3nee.png" src-width="3570" src-height="1774" align="center"/>

<img src="/assets/GuZdbsQeaoty8nxpxYFcXYM5nbb.png" src-width="3570" src-height="1774" align="center"/>

<b>方式二：批量操作</b>
- 操作路径：清算管理 - 仓位管理 - 仓位查询
- 在清算中检查前操作
- 即使之后撤销了清算，系统仍会保留此次操作的记录

<img src="/assets/EHoSbkg91ozmXKxOpfIcSpOXnJ0.png" src-width="3570" src-height="1774" align="center"/>

<b>修改子仓模板</b>
- 字段说明如下图
- 按图示的文档
    - 系统将找到香港市场 H123456 客户托管在 U123445 的持仓，并全部转到 U23333 的持仓上
- 注意事项：上传修改子仓的模板后，系统将同时修改待交收的合约

<img src="/assets/VBWMb1s4PoBCcXxNZs4cI7vKn4e.png" src-width="3570" src-height="1774" align="center"/>

<b>基础仓位调整</b>
- 字段说明如下图
- 按图示的文档
    - 系统会将客户H1000001在托管商ID1子仓3上的ST/HK/700将减少1000股；
    - 系统会将客户H1000001在托管商ID1子仓4上的ST/HK/700将增加1000股
- 基础仓位调整的模板，将不会修改待交收的合约。基础仓位调整的模板，可同时调整 Sreet、Nominee、Own。用来操作内部转仓时，必须有配套的数据（两条）

<img src="/assets/MOxDby2MtoLWjgxxMJuczzginIb.png" src-width="3570" src-height="1774" align="center"/>

## 经纪人分佣如何重算

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>重新配置佣金分成套餐后，想要针对之前的日期重新计算分佣如果处理？</p>
</div>

<img src="/assets/I7Dab7dvNoqaafxhkaacJGHCnJe.png" src-width="3024" src-height="1500" align="center"/>

<img src="/assets/Bv6vbd5AKoIP8UxlEhXc3C1FnVf.png" src-width="3024" src-height="1500" align="center"/>

