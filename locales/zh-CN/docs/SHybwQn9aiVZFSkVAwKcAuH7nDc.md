---
title: 常见问题
slug: SHybwQn9aiVZFSkVAwKcAuH7nDc
sidebar_position: 6
---


# 常见问题

# 公司行动创建

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：公司行动的数据是否会更新？</p>
</div>

BE 类&初始化状态的公司行动支持自动更新
05 文件更新基本信息
02 文件更新最新状态和文件日期

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：找不到预告？</p>
</div>

系统基于 05 文件创建公司行动预告，只生成有持仓的公司行动

OB 模式可通过手动创建基于上手资料创建公司行动

EP 模式，系统只生成有持仓的公司行动。转仓未及时处理，或者自动创建时刚好无持仓的可能会遗漏公司行动，可通过快捷创建补建

EP 模式，02 文件内有数据的 BE 类公司行动会强制生成，不再判断持仓

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/LNJjbxaJ5o42HsxDswfcBS9bnyg.png" src-width="3548" src-height="1806" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/XdDUbHHRWoheSpxubyCceykjnfg.png" src-width="3639" src-height="1886" align="center"/>
</div>
</div>

# 登记

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：何时可进行登记？</p>
</div>

<b>推荐在执行日进行登记，可根据自身需要进行提前登记</b>

在登记日提前登记的 BE 类公司行动，将会在结单中提示将来的派息

券商如果打算提前登记，可在清算前准备中开启公司行动 - 登记检查项目

登记日当天提前登记的，需要在日终的港股清算交收步骤后进行

股权的标的信息在执行日才能创建完毕，无法进行提前登记

# 收费配置

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：为什么供股、要约无法配置固定金额单次收费</p>
</div>

该配置下，所有未行权的客户，也会进行收费，暂时进行了屏蔽

RS、OO、ER、EO、TU、TC 这种客户可以放弃行权的公司行动，可以按如下方式配置

<img src="/assets/XUgMbk0wiownK3x5SG6cOWyOnjg.png" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：如果免收一个客户的 Handing Fee</p>
</div>

在客户规则处，将费率系数和最低收费系数分别填为 0 即可

<img src="/assets/WRSXbuPMKoFrZPxrqdqc3GMunNb.png" src-width="3578" src-height="1798" align="center"/>

# 执行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：执行时无对端数据</p>
</div>

公司行动可能会取消，需要依据上手数据执行

执行时核对报表的对端数据来源于 CCASS 的 02 文件，只支持 EP 模式，暂只支持部分类型。对端没数据的依然可执行

# BE 类

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：特殊派息如何处理</p>
</div>

需要同时选择两个默认方案

特殊派息将进行两次派息和收费

<img src="/assets/LqmRbhmW8oFFDwxXL6gcAUnqnxf.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：过户费收取</p>
</div>

可设置否收取过户字段来配置过户费，仅支持 BE 类和 TM 类

<img src="/assets/Ihwibq9WcoOC0Sxc29WcuGtUnjg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：如何控制收取的费用不大于分红</p>
</div>

在费用规则中进行配置
单项费用不超过分红释义：单一费用项目会和分红进行比较
优先级前费用不超过分红释义：Handling Fee 收费优先级为 10 且设置了该项目，CA Fee 优先级为 1，则在计算 Handling Fee 时会使用 CA Fee+Handling Fee 之后和分红进行比较

过户费的收费优先级默认为 0

派发股权、派发股票时分红金额等同于 0

<img src="/assets/BSNLbyoYvo2O6CxKsV7cUobznJf.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：选股选息的精确定义</p>
</div>

有一个 BE-SCRIP DIVIDEND 方案，一个以上的 BE-CASH DIVIDEND

BE-SCRIP DIVIDEND 的计算公式：分红金额/再投资金额

派发非港股的股票 BE-SCRIP EVENT 类方案和 BE-CASH DIVIDEND 组合不是选股选息，后台支持全流程操作，客户端不支持客户行权，推荐直接派息

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：选股选息的零股处理</p>
</div>

定义
在操作选股时，如果客户行权了 1000 股，即可达到收取 100 股股票的目的。用户行权 1002 股时，系统会自动将多余的 2 股行权到现金的方案，达到利益最大化的目的

操作
在分股方案和分红方案分别将零股转分红字段设置为是
如果有一个分股方案，两个分红方案，则必须且只能将一个分红方案设置为是
系统初始化时，可开启零股转分红，自动将零股转分红设置为时

<img src="/assets/TjbwbNDqHoIYURxfvROcyZsbnSb.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：客户选择阶段何时结束</p>
</div>

在选择结算时间到后，自动结束，期间不能修改时间

如果修改了时间，或者想提前结束的，可操作提前完成指令收集

<img src="/assets/U4rAbvjXZobN9FxrICacwTDknTg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：多币种选择是否支持</p>
</div>

后台和客户端均支持不同币种的选择，报表可正常展示

