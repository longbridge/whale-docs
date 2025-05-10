---
title: 系统介绍
slug: SSvHwubmiidbI1kqAtpcecNunPg
sidebar_position: 1
---


# 系统介绍

# 概述

报表管理系统是用于证券公司和金融机构的关键系统，用于处理、管理和生成各种与证券业务相关的报表。该系统旨在帮助公司确保遵守监管要求，提供准确和及时的财务和业务信息。

Whale 报表管理系统通常具有以下功能和特点：

1. 数据收集和整合：系统能够从多个源头（如交易系统、结算系统、帐户系统、风控系统等）收集和整合数据。它可以从不同的业务部门和系统中提取数据，以生成全面的报表。
2. 报表打印功能：系统可以根据公司的需求生成各种报表，如财务报表、结算报表、风险报表、合规报表、交易报表、客户报表、财政监管报表等。系统提供报表列自定义的功能，使用户可以根据自己的需求生成特定列的报表。
3. 报表批量打印功能：系统提供批量报表的批次设置和管理功能，可设置多个打印批次并在批次中设置多个报表，可按不同的条件一次生产多张报表。
4. 报表打印操作日志纪录功能：纪录查询每次报表打印操作的日志。
5. 操作辅助类功能：参数设置、标签管理、我的收藏等功能，给用户提供符合自身岗位需要的操作便利性。

# 报表清单

为方便使用者快速记忆报表的分类，WBO 报表的报表代号也以常规的部门英文名称来方便记忆学习

<table header_row="1">
<colgroup>
<col width="399"/>
<col width="359"/>
</colgroup>
<thead>
<tr><th><p><b>部门名称</b></p></th><th><p>报表前缀</p></th></tr>
</thead>
<tbody>
<tr><td><p>结算部（Settlement Delivery Department）</p></td><td><p>SDR</p></td></tr>
<tr><td><p>交易部（Trade Department）</p></td><td><p>TDR</p></td></tr>
<tr><td><p>财务部（Finance Department）</p></td><td><p>FDR</p></td></tr>
<tr><td><p>客服部（Customer Service Department）</p></td><td><p>CDR</p></td></tr>
<tr><td><p>风控部（Risk Management Department）</p></td><td><p>RDR</p></td></tr>
<tr><td><p>合规部（Inner Compliance Department）</p></td><td><p>IDR</p></td></tr>
<tr><td><p>财政资源规则（Financial Resource Rule）</p></td><td><p>FRR</p></td></tr>
<tr><td colspan="2"><p>若有券商特殊报表前面会根据券商缩写来定</p></td></tr>
</tbody>
</table>

目前系统提供下列报表清单，后续会增加适当报表

### 结算报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>SDR002</p></td><td><p>Client Cash Balance Report By CCY</p></td><td><p>查询当前或历史的客户资金明细币种的信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003</p></td><td><p>Client Stock Holding Report(By Stock)</p></td><td><p>按股票分组展示客户持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-1</p></td><td><p>Client Stock Holding Report(By Client)</p></td><td><p>按客户帐户分组展示客户持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-2</p></td><td><p>Client Stock Holding Report(Real Time)</p></td><td><p>查询当前实时嘅证券持仓信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-3</p></td><td><p>Client Stock Holding Report With Custodian Details(Real Time)</p></td><td><p>带仓库信息、子仓位置的持仓报表，只能查询当日的实时信息。为临时报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-4</p></td><td><p>Stock Holding Report With Client Details</p></td><td><p>带一些客户基础信息的持仓报表，处理公司行动时和上手对账用</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-5</p></td><td><p>Client Stock Holding For Data Migration</p></td><td><p>在系统上线时，查询数据迁移后的历史持仓，只能展示已导入的字段。</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR004</p></td><td><p>Client Stock Location Report(By Stock)</p></td><td><p>按股票分组展示客户仓位的股票持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR004-1</p></td><td><p>Client Stock Location Report(By Client)</p></td><td><p>按客户分组展示客户仓位的股票持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR005</p></td><td><p>Stock Location Report(By Stock)</p></td><td><p>按股票分组展示公司所有股票的仓位持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR005-1</p></td><td><p>Stock Location Report(By Depot)</p></td><td><p>按仓位分组展示公司所有股票的仓位持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR006</p></td><td><p>Monthly Trading Fee And Levy Report</p></td><td><p>显示客户 direct 类交易的交易征费、交易费的明细及统计资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR006-1</p></td><td><p>Monthly Trading Fee And Levy Summary Report</p></td><td><p>交易征费、交易费报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR007</p></td><td><p>Monthly Stamp Duty Report</p></td><td><p>显示客户某月港股 direct 交易的印花税</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR008</p></td><td><p>Stock Movement In-Out Report</p></td><td><p>除了交易以外当天所有股票进出</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR008-1</p></td><td><p>Stock Movement In-Out Report(Real Time)</p></td><td><p>查询客户实时的持仓变动信息（不包括交易）</p></td><td></td></tr>
<tr><td><p>SDR009</p></td><td><p>Turnover Listing Report</p></td><td><p>统计客户一段时间内的佣金费用和成交量资讯，考虑交易取消</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR010</p></td><td><p>Daily Stamp Duty Report</p></td><td><p>查询某天印花税资讯</p></td><td><p>CSV、EXCEL</p></td></tr>
<tr><td><p>SDR010-1</p></td><td><p> HKEX Daily Stamp Duty Form</p></td><td><p>查询某天印花税资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011</p></td><td><p>Daily Summary Report By HK</p></td><td><p>查询港股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-1</p></td><td><p>Daily Summary Report By US</p></td><td><p>查询美股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-2</p></td><td><p>Daily Summary Report By CN</p></td><td><p>查询A股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-3</p></td><td><p>Daily Summary Report By Client Type HK</p></td><td><p>查询港股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-4</p></td><td><p>Daily Summary Report By SG</p></td><td><p>查询新加坡市场某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCE</p></td></tr>
<tr><td><p>SDR011-5</p></td><td><p>Daily Summary Report By VA</p></td><td><p>查询虚拟某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCE</p></td></tr>
<tr><td><p>SDR011-6</p></td><td><p>Daily Summary Report By ID</p></td><td><p>查询印尼市场某天B/C买卖成交汇总资讯，包括成交金额，各种费用等</p></td><td><p>CSV、PDF、EXCE</p></td></tr>
<tr><td><p>SDR012</p></td><td><p>Monthly Trading Summary Report</p></td><td><p>查询某月的每一天的成交汇总资讯，包括成交金额，净佣金，各种费用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR013</p></td><td><p>Client Bonds Holding Report(By Client)</p></td><td><p>按客户帐户分组展示客户债券持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR014</p></td><td><p>Interest Detail Report</p></td><td><p>查询某月关于客户利息、客户罚息、客户每日的利息及当月累计利息的资金流水资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR015</p></td><td><p>UnMatched Report</p></td><td><p>配对结果报表，显示客户订单和券商的订单差异</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR015-2</p></td><td><p>Trade UnMatched Report</p></td><td><p>实时交易对账报表，清算前检查任务完成后可以查询</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR016</p></td><td><p>ATI Settlement Report</p></td><td><p>报表展示某个交收日的满足条件的合约，对应的 ATI 净买入/净卖出资讯。以及相关客户的 ATI 明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR017</p></td><td><p>Client Bargain Report</p></td><td><p>客户合约详情表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018</p></td><td><p>Bargain Detail Report-HK</p></td><td><p>交易合约资讯明细表 - 港股</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-1</p></td><td><p>Bargain Detail Report-US</p></td><td><p>交易合约资讯明细表 - 美股</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-2</p></td><td><p>Bargain Detail Report-USOP</p></td><td><p>交易合约资讯明细表 - 期权</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-3</p></td><td><p>Bargain Detail Report-CN</p></td><td><p>交易合约资讯明细表-A 股</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-4</p></td><td><p>Bargain Detail Report-SG</p></td><td><p>交易合约资讯明细表 - 新加坡股票</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-5</p></td><td><p>Bargain Detail Report-VA</p></td><td><p>交易合约资讯明细表 - 虚拟资产</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-6</p></td><td><p>Bargain Detail Report-ID</p></td><td><p>交易合约资讯明细表 - 印尼市场</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR019</p></td><td><p>Outstanding Settlement Report</p></td><td><p>待交收合约报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR021</p></td><td><p>Daily Broker Settlement Report(By Broker)</p></td><td><p>经纪商当日交收报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-01 </p></td><td><p>CA Announcement Event List</p></td><td><p>展示当前公司行动 CA 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-03</p></td><td><p>BE Announcement Event List</p></td><td><p>展示当前公司行动 BE 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-04</p></td><td><p>DS Announcement Event List</p></td><td><p>展示当前公司行动 DS 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-05</p></td><td><p>OO Announcement Event List</p></td><td><p>展示当前公司行动 OO 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-06</p></td><td><p>EO Announcement Event List</p></td><td><p>展示当前公司行动 EO 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-07</p></td><td><p>RS Announcement Event List</p></td><td><p>展示当前公司行动 RS 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-08</p></td><td><p>ER Announcement Event List</p></td><td><p>展示当前公司行动 ER 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-09</p></td><td><p>TU Announcement Event List</p></td><td><p>展示当前公司行动 TU 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-10</p></td><td><p>TC Announcement Event List</p></td><td><p>展示当前公司行动 TC 预告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR024</p></td><td><p>Corporate Action Past Due Report</p></td><td><p>展示当天需要执行的公司行动，CA 在当日日终后操作。注意：需要以上手实际执行为准，只取最近 5 个自然日的数据；实时报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR025</p></td><td><p>Stock Reconciliation Report</p></td><td><p>根据托管商子仓的持仓对账</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR026</p></td><td><p> Client Trustee Balance Report</p></td><td><p>客户托管资金余额报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR027</p></td><td><p>CCASS Securities Market Value Report</p></td><td><p>CCASS 的中证券市值报表，以及停牌超过 3 天的股票列表及市值情况</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR028</p></td><td><p>IPO Detail Report</p></td><td><p>获取客户当前历史 IPO 申购资讯（包括白表黄表数据），实时报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR028-1</p></td><td><p>IPO Infos</p></td><td><p>统计一段时间内 IPO 的信息及订单</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR029</p></td><td><p>Stock Frozen Report</p></td><td><p>股票冻结报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR030</p></td><td><p>Cash Frozen Report</p></td><td><p>现金冻结报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR032</p></td><td><p>Client Trade Amendment Report</p></td><td><p>显示订单被动修改纪录</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR034</p></td><td><p>Client Margin Ratio Report</p></td><td><p>客户特殊保证金比率</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td></td><td></td><td></td><td></td></tr>
<tr><td><p>SDR040-01</p></td><td><p>Corporation Action Detail Report(TM)</p></td><td><p>公司行动方案明细（TM）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-02</p></td><td><p>Corporation Action Detail Report(DS)</p></td><td><p>公司行动方案明细（DS）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-03</p></td><td><p>Corporation Action Detail Report(OO/EO/RS/ER/TU/TC)</p></td><td><p>公司行动方案明细（OO/EO/RS/ER/TU/TC）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-09</p></td><td><p>Corporation Action Detail Report(BE/IP/SO)</p></td><td><p>公司行动方案明细（BE/IP/SO）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-10</p></td><td><p>Corporation Action Detail Report(BE With Selection)</p></td><td><p>公司行动方案明细（BE With Selection）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-11</p></td><td><p>Corporation Action Detail Report(CA)</p></td><td><p>公司行动方案明细（CA）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR042</p></td><td><p>BE Client Dividend With Scrip Option(Email)</p></td><td><p>导出选股选息明细列表给对应的客户发权益邮件</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR048</p></td><td><p>Broker Contract Details</p></td><td><p>代理商合约信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR049</p></td><td><p>Illiquid Stock Summary Report</p></td><td><p>列印非速动证券资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR051</p></td><td><p>Short Sell Stock Report</p></td><td><p>显示客户持仓为负的股票资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR052 </p></td><td><p>Short Sell Trade Report-US</p></td><td><p>美股市场沽空的合约信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR058-01 </p></td><td><p>HK Custodian Fee Group by Client V1</p></td><td><p>港股托管费</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR058-02</p></td><td><p>HK Custodian Fee Group by Client V2</p></td><td><p>港股托管费</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR059</p></td><td><p>Client Trading Summary Report</p></td><td><p>按时间区间查询客户的交易情况</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR060</p></td><td><p>Client Trading Detail Report</p></td><td><p>查询客户交易费用明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR061</p></td><td><p>Short Sell Borrow Fee Detail</p></td><td><p>融券利息明细表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR062</p></td><td><p>Short Sell Borrow Fee Summary</p></td><td><p>融券利息汇总表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR063</p></td><td><p> List Of Stock Holdings Suspended</p></td><td><p>持仓股票停牌清单</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR064</p></td><td><p>Daily Trading Report By HK</p></td><td><p>香港市场客户合约详情表，包含对手方成交明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR070</p></td><td><p>OTCR Report</p></td><td><p>OTCR 汇报报表</p></td><td><p>EXCEL</p></td></tr>
</tbody>
</table>

### 财务报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>FDR001</p></td><td><p>Client Cash Balance Summary Report By Client Type</p></td><td><p>查询当前或历史的客户资金按本位币汇总的资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR002</p></td><td><p>Client Cash Balance Detail Report By CCY</p></td><td><p>查询当前或历史的客户资金明细币种的资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR002-1</p></td><td><p>Client Cash Balance Detail Report By CCY(Format2)</p></td><td><p>查询指定帐务日期客户分币种的资金信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR002-2</p></td><td><p>Client Cash Balance Detail Report By CCY(Format3)</p></td><td><p>查询指定帐务日期客户分币种的资金信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR003</p></td><td><p>Client Cash Balance Detail Report By Client</p></td><td><p>查询当前或历史的客户资金明细币种的资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR004</p></td><td><p>Settle Cash Movement In-Out Report By CCY</p></td><td><p>结算现金余额变动明细记录</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR005</p></td><td><p>Cash Movement In-Out Report By CCY</p></td><td><p>资金变动流水</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR006</p></td><td><p>Daily Trial Balance Report</p></td><td><p>每日成交金额/费用/应收应付款汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR009</p></td><td><p> AE Performance Report</p></td><td><p>经纪人佣金报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR009-1</p></td><td><p> AE Performance Report By Client</p></td><td><p>按照年月日统计经纪人下的客户佣金</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR012</p></td><td><p>FD Commissions detail</p></td><td><p>FD 分成明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR013</p></td><td><p>FD Commissions Daily Report With AE</p></td><td><p>FD 分成明细，按经纪人按日汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR014</p></td><td><p>FD Commissions Monthly Report With AE</p></td><td><p>FD 分成明细，按经纪人按月汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR015</p></td><td><p>FD Commissions Yearly Report With AE</p></td><td><p>FD 分成明细，按经纪人按年汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR016</p></td><td><p>FD Commissions Monthly Report Without AE</p></td><td><p>FD 分成明细，按月汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR017</p></td><td><p>Cash In-Out Detail Report By CCY</p></td><td><p>实时的现金变动报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR018</p></td><td><p>Client Cash Balance Report By Client (Real Time )</p></td><td><p>客户分币种的现金余额实时报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR019</p></td><td><p>Cash Movement Summary Report</p></td><td><p>客户资金变得分类汇总表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR020</p></td><td><p>Commission Rebate Report</p></td><td><p>经纪人佣金汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR020-1</p></td><td><p>Commission Rebate Detail Report</p></td><td><p>经纪人佣金明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR022</p></td><td><p>Cash Movement Check Report</p></td><td><p>资金变动检查表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR023</p></td><td><p>Client Remaining Cash(USD)</p></td><td><p>不能动用的客户存管资金</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 客户报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>CDR001</p></td><td><p>Client Master Listing Report</p></td><td><p>显示客户帐户基本资料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR001-1</p></td><td><p>BCAN Information Report</p></td><td><p>BCAN 资讯报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR009</p></td><td><p>Stock Information Excel Export</p></td><td><p>显示股票重要栏位讯息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR008</p></td><td><p> Allow Trading Status Report</p></td><td><p>证券可买卖标志信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR010</p></td><td><p>AE Listing</p></td><td><p>查询 AE 经纪人 基本资料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR013</p></td><td><p>Member Agent Person</p></td><td><p>客户在券商记录的代理人信息，以客户为维度</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR014</p></td><td><p>Member Related Person</p></td><td><p>客户在券商记录的关系人信息，以客户为维度</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR015</p></td><td><p>Client Related Group Report</p></td><td><p>FRR 关联组客户信息查询</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### FRR 报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>FRR001</p></td><td><p>Cash Client Receivable Aging Report(Form 1)</p></td><td><p>现金客户延期交收应收款分析</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR001-1</p></td><td><p>Cash Client Receivable Aging Report By CCY(Form 1)</p></td><td><p>现金客户延期交收应收款分析 欠款统计口径：资金账户分币种的已交收金额</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR002</p></td><td><p>Market Unsettled ARAP Report (Form 1)</p></td><td><p>市场角度统计待交收证券的金额</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR003</p></td><td><p>Margin Clients With The Largest Unadjusted Loan Balances Report<br/>（Form 4 Table 1)</p></td><td><p>客户资金资讯，证券市值资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR004</p></td><td><p>Margin Client With Adjusted Loan Balances Report (Form 4 Table 2)</p></td><td><p>所有Margin客户资产/流动性详情:统计Margin客户，其负债及资产流动性明细及分类汇总。</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR004-1</p></td><td><p>Margin Clients With Adjusted Loan Balances Report By Stock (Form 4 Table 2)</p></td><td><p>统计 Margin 客户，其负债及资产流动性明细及分类汇总，并关联股票</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR005</p></td><td><p>Ananlysis of Securities Collateral Report (Form 5 (A))</p></td><td><p>以股票的维度来查看：所有 Margin 客户的股票保证金情况：统计 search_str=M 的客户数据。</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR006</p></td><td><p>FRR006 - Rolling Balance Cash Client Analysis Report(Form 6)</p></td><td><p>现金帐户欠款客户</p></td><td></td></tr>
<tr><td><p>FRR007</p></td><td><p>Profit And Loss Account Report (Form 7)</p></td><td><p>客户成交量和佣金资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR008</p></td><td><p>Analysis of Client Securities Report (Form 8 Table1)</p></td><td><p>统计 CCASS 及其他托管商不同仓位上的市值</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR008-1</p></td><td><p>Analysis of Client Securities Report By CCY(Form 8 Table1)</p></td><td><p>分币种统计 CCASS 及其他托管商不同仓位上的市值</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR008-2</p></td><td><p>Analysis of Client Securities Report By CCY-2(Form 8 Table1)</p></td><td><p>分币种统计 CCASS 及其他托管商不同仓位上的市值</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR009</p></td><td><p>Analysis of Client Segregated Funds Report(Form 8 Table 2)</p></td><td><p>应向客户支付的款项及须独立存放的客户款项报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR010</p></td><td><p>Active Client Summary Report (Form 12)</p></td><td><p>活跃客户数量统计</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR010-1 </p></td><td><p> Active Client Detail Report (form 12)</p></td><td><p>活跃客户账户及资产明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR011</p></td><td><p>Option FRR Report</p></td><td><p>期权 FRR</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR012</p></td><td><p>Monthly Options Trade Summary Report</p></td><td><p>期权月度交易量</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 风控报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>RDR001</p></td><td><p>Client Portfolio Details</p></td><td><p>统计在发生日起以及 2 个帐务日，客户的总资金、总市值、总抵押值、追保金额，以及持仓明细等信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR003</p></td><td><p>Margin Call Summary Report</p></td><td><p>分析统计客户历史按本位币汇总的追保资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR003-1</p></td><td><p>Margin Call Summary(Margin Client) Report</p></td><td><p>融资账户的日终后追保金额</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR005</p></td><td><p>Client Asset Summary Report By Client Type</p></td><td><p>分析统计客户历史的资产资讯</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR006</p></td><td><p>Client Asset Detail Report By CCY</p></td><td><p>按币种分组分析客户的资产细节</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR006-1</p></td><td><p>Client Asset Detail Report By Client</p></td><td><p>按客户分组分析客户的资产细节</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR007</p></td><td><p>Client Trading Or Credit Limit Report</p></td><td><p>客户交易额度和信用额度报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR008</p></td><td><p>Top N Market Value of Margin-Market Value Report</p></td><td><p>Top N 证券市值和保证金市值报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR010</p></td><td><p>Concentration Risk</p></td><td><p>客户股票的市值占整体持仓的占比以及发行市值的占比</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR011</p></td><td><p>Margincall Continuous Unpaid Amount</p></td><td><p>连续追保报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR012</p></td><td><p>MarginCall Aging Report</p></td><td><p>实时追保纪录</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR014</p></td><td><p>Stock Rank Report</p></td><td><p>股票级别占比</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR016</p></td><td><p>User Daily Approval Report</p></td><td><p>风控额度批核报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR019</p></td><td><p> Margin Loan Report</p></td><td><p>保证金贷款报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR021</p></td><td><p>Bad Credit Report By Client</p></td><td><p>客户不良信用纪录</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR022</p></td><td><p> Stock Margin Ratio Report</p></td><td><p>实时股票保证金比例</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR023</p></td><td><p>Client Overdue Cash Balance By CCY</p></td><td><p>实时统计客户分币种的欠款</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR024-1</p></td><td><p>Exposure By Clients</p></td><td><p>客户风险敞口</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR024-2</p></td><td><p>Exposure By Stocks</p></td><td><p>股票风险敞口</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR024-3</p></td><td><p>Exposure By Exchanges</p></td><td><p>分交易统计风险敞口</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR025</p></td><td><p>Client Borrowing Details</p></td><td><p>客户借贷明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR026</p></td><td><p>Stock Borrowing calculation</p></td><td><p>股票借贷明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR027</p></td><td><p>Client Position Summary</p></td><td><p>客户持仓及风控汇总信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR028</p></td><td><p>Client Position Details</p></td><td><p>客户持仓明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR029</p></td><td><p>Credit Client Info Review</p></td><td><p>客户融资额度重检报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR030 </p></td><td><p>Option Securities Recovery Record</p></td><td><p>期权到期日正股不足以行权的追收记</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR032</p></td><td><p>Options Margin Report</p></td><td><p>期权保证金报表，按照对应正股汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR033</p></td><td><p>FD/AE Overview</p></td><td><p>FD/AE 客户总览</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR034</p></td><td><p>Company Loan Limit Overview</p></td><td><p>公司纬度授信额度总览</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR035</p></td><td><p>Margin Risk Index</p></td><td><p>保证金风险指标</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR036</p></td><td><p>Stock Group Monitoring</p></td><td><p>股票组监控</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR037</p></td><td><p>Client Financing Monitoring</p></td><td><p>客户融资监控</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR038</p></td><td><p>Daily Margin Call Report</p></td><td><p>margin call report</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR039</p></td><td><p>Stress Test</p></td><td><p>日常风控报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR040</p></td><td><p>Option Composed Margin</p></td><td><p>期权组合保证金报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 合规报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>IDR001</p></td><td><p>S181 Trade Report</p></td><td><p>按照 SFC 的要求模版提交客户交易</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR002</p></td><td><p>S181 Holding Report</p></td><td><p>按照 SFC 的要求模版提交客户持仓</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR008</p></td><td><p>SPAC Post Trade Report</p></td><td><p>指定时间段内特定股票交易的成交清单</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR003</p></td><td><p>Client Trade With IP(SFC)</p></td><td><p>指定时间段内某个客户或某只股票的交易清单，带 IP </p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR011</p></td><td><p>Top N Client Turnover </p></td><td><p>10 大客户交易总额</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR012</p></td><td><p>Top N Order Turnover </p></td><td><p>最高 10 大订单成交量</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR013</p></td><td><p>Top N Client No. of Transactions</p></td><td><p>10 大客户交易次数</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR014</p></td><td><p>Top N Price Deviation In Percentage</p></td><td><p>成交价参数</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR015</p></td><td><p>Y trade</p></td><td><p>Y 盘</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR016</p></td><td><p>Transactions Report By Staff </p></td><td><p>员工交易报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR017</p></td><td><p>Transactions Report By High Risk Client </p></td><td><p>高度风险客户交易报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR018</p></td><td><p>Matched trades Wash trades </p></td><td><p>配对交易 虚售交易</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR019</p></td><td><p>Not genuine orders</p></td><td><p>非真正订单</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR020</p></td><td><p>Re-activation of dormant account</p></td><td><p>重启不动户</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR026</p></td><td><p>The proportion of customer transaction volume</p></td><td><p>客户成交量占比</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR027</p></td><td><p>Deliberately push up or down the closing price</p></td><td><p>刻意推高或推低市价</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR028</p></td><td><p>Transactions done at At-auction period </p></td><td><p>竞价时段成交</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR029</p></td><td><p>IPO share trades on first listed date </p></td><td><p>新股首日上市交易</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR038</p></td><td><p>Suspicious Trading Report</p></td><td><p>根据成交明细的维度来筛选，同一客户，成交时间相同（秒级），成交数量相等，成交价格相同，买卖方向相反的数据</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR040</p></td><td><p>Transaction Monitoring - cash in and out (including stock in and out)-normal client</p></td><td><p>出入金的交易监察（包括股票转入和转出）- 一般用户</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR041</p></td><td><p>Transaction Monitoring - cash in and out (including stock in and out)-watchlist</p></td><td><p>出入金的交易监察（包括股票转入和转出）-watchlist</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 交易报表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表编号</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>报表说明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>TDR001-1</p></td><td><p>Daily Client Order Report By Client</p></td><td><p>显示当天在指定条件下，所有客户的订单，按客户分组展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR001-2</p></td><td><p>Daily Client Order Report By Stock</p></td><td><p>显示当天在指定条件下，所有经纪人客户的订单，按股票分组展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR001-3</p></td><td><p>Daily Client Order Report By AE</p></td><td><p>显示当天在指定条件下，所有经纪人客户的订单，按经纪人分组展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR001-3</p></td><td><p>Daily Client Order Report By BuySell</p></td><td><p>显示当天在指定条件下，所有经纪人客户的订单，按买卖分组展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR004</p></td><td><p>Trade Detail Report</p></td><td><p>显示指定条件下所有成交的订单的信息，并会有各币种成交的统计</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR005</p></td><td><p>Trade Summary Report</p></td><td><p>显示指定条件下所有订单的资讯。并对交易的数据进行汇总</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR006</p></td><td><p>Client History Order Report By BuySell</p></td><td><p>显示指定条件下所有订单的信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR007</p></td><td><p>Cross Trade Report</p></td><td><p>显示指定条件下所有交叉盘交易的订单的信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR013</p></td><td><p>User Daily Turnover Report</p></td><td><p>根据操作员及币种显示当天成交及未成交金额</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR020</p></td><td><p>Third Party Operated Account Trade Listing</p></td><td><p>显示第三方授权帐户成交记录报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR022</p></td><td><p>IP address and Transaction Report</p></td><td><p>带客户 IP 地址的交易记录报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR023-1</p></td><td><p>Trades for Clients with the Same Stock</p></td><td><p>统计交易订单维度，相同下单日期，相同标的，订单状态成交、部分成交，统计数量大于等于 2 的资料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR023-2</p></td><td><p>Trades for Clients with the Same Address (SG Clients)</p></td><td><p>统计交易订单维度，相同下单日期，相同标的，相同邮编的用户，订单状态成交、部分成交，统计数量大于等于 2 的资料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR024</p></td><td><p>Clients Tagged to Same Licensed Representative</p></td><td><p>同一代码，不同客户的订单创建时间差小于 5 分钟的数据</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR025</p></td><td><p>Clients acting in concert</p></td><td><p>统计提交开户时间相同（日）的用户，订单用创建为同一天，交易同一只股票的数据</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR026</p></td><td><p>Ramping/Price Driver</p></td><td><p>统计成交价格大于等于当日开盘价的 120% 或小于等于当日开盘价 80% 的订单</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR027</p></td><td><p>Wash Trades (No Change in Beneficial Ownership)</p></td><td><p>统计某个交易日，同一个客户，同一只股票的汇总成交额（包含买卖）/ 市场成交额 ≥ 1% 的成交明细</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

# 功能操作

## 一、基础辅助功能及页面布局介绍

#### 报表业务分类

可以在右侧切换业务报表分类。中间区会显示可执行到报表清单列表

<img src="/assets/Malgbrnszo3gntxR0XJcfIIUnbd.png" src-width="3198" src-height="1622" align="center"/>

每个报表项目会显示报表项目名称与 报表简要说明 与最近更新版本时间

<img src="/assets/YTpKbHvA9oTI9MxmPNFcmXL4nAg.png" src-width="3234" src-height="1334" align="center"/>

报表项目旁若出现'实时'标签图示，表示该报表是实时数据报表资料  

<img src="/assets/V9hebWHrWoiWnexcglWc8SvWnFe.png" src-width="2704" src-height="152" align="center"/>

#### 报表标签分类

也可以编辑自己的报表标签说明，可以对单一报表赋予相应的「标签」，同时系统会根据「标签」对相关报表做自动分类，便于快速查找

<img src="/assets/PnzDbgXJwoYsGTxqYHNcQOXcnRc.png" src-width="3240" src-height="1066" align="center"/>

此时可以选择现有标签（支持多个标签同时存在）或 重新 新建一个 标签

<img src="/assets/O2HwbgX0AoCJjYxtWtMcpIJ9ntg.png" src-width="2340" src-height="968" align="center"/>

#### 标签管理

同时左上角 提供标签管理功能，可以维护标签内容：

删除标签后，则该标签下所有报表与之关联关系都会被清除

修改标签名称后，标签名称会直接变更

<img src="/assets/HDRjbzTvGoloIBxifJ9cNfdknFa.png" src-width="3252" src-height="348" align="center"/>

<img src="/assets/DnDTb93Zto28ndx7lJZcMhXtn4c.png" src-width="3244" src-height="954" align="center"/>

#### 报表收藏

也提供 星状图示报表收藏，点选后就会出现在 自己的「我的收藏」入口菜单区内，方便快速点选操作

<img src="/assets/IVYBbkR0yoOQnJx32qrcXwrPnbb.png" src-width="3224" src-height="1318" align="center"/>

#### 参数设置

- 可以通过报表参数设置完成部分报表需要的参数设置

<img src="/assets/I57HbCjNYoGA2Kxib96cXDedn3e.png" src-width="2340" src-height="1340" align="center"/>

<img src="/assets/F95hbhmtEoiHxrxGaLscWxUqnsg.png" src-width="2368" src-height="1336" align="center"/>

#### 查看更新日志

- 通过更新日志用户可以及时了解 Whale 系统报表的最新更新纪录

<img src="/assets/AFr3bVClAoP9o5xq1kwcWwxEned.png" src-width="2324" src-height="1310" align="center"/>

## 二、报表打印功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：报表管理 &gt;报表打印</p>
</div>

#### 报表数据查询

报表打印首页提供两种报表选择进入方式 

<b>方式一：</b> 

在搜索栏输入报表编号的关键字，可以查询对应的报表展示选择，例如：输入 SDR003 则下拉显示 SDR003 相关的报表，点击所需报表便可以进入详细的报表页。（注意：输入报表编号作搜索，英文字母必须为大写）

<img src="/assets/OYh4bxwr6o66laxu69Ic1JesnQh.png" src-width="3240" src-height="1188" align="center"/>

<b>方式二</b>：

    点击所需报表名称，展开后可选择对应的报表进入详细的报表页面

<img src="/assets/OqBJbWOkboUicgxT8yAcpZnKnmh.png" src-width="3246" src-height="1618" align="center"/>

单一报表详情的上方区域为报表条件栏位查询区，可按照不同条件进行报表详情筛选

<img src="/assets/HIiHb1UOqokwdfx2qPFcNYBcnie.png" src-width="3238" src-height="1332" align="center"/>

#### 报表预览

- 如果报表配置了支持 PDF 格式则可以预览档案 
- 预览只支持预览前 30 条明细记录生成的档案； 
- 预览介面页可以选择下载或者列印。 

<div class="callout callout-bg-1 callout-border-1">
<div class='callout-emoji'>🚫</div>
<p>因为预览只显示部分数据，所以请注意要数据是否完整后再进行下载；后期会优化在预览档案里说明是否是完整数据</p>
</div>

<img src="/assets/BRYNbzLUtoDHP7xvmTfcLeCJnDe.png" src-width="3232" src-height="1644" align="center"/>

#### 报表导出

<img src="/assets/U6LQbkJcfoODooxgLECchFSQn4g.png" src-width="3254" src-height="758" align="center"/>

导出功能可以选择导出的档案类型，大部分报表支持 CSV、PDF、EXCEL 格式，部分特定报表只支持特定的格式，详情见报表列表

- CSV 默认支持：按页面列表展示的列栏位导出
- PDF 配置支持：按定义的列印模板栏位导出，支持分组总计以及报表组合
- EXCEL 配置支持：按定义的列印模板栏位导出，支持分组总计以及报表组合

点击后会会自动产生一个报表导出任务，后续可以在导出列表页面查看进度并作下载操作

<img src="/assets/I28Jbg7Fpo9gXoxles9cGlwKnQd.png" src-width="3470" src-height="764" align="center"/>

#### 导出文件

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>报表管理 &gt;导出列表</p>
</div>

可以查询当前登录用户所导出的报表文档，可以【删除】或直接【下载】

<img src="/assets/Nm4Lbn3q9o5E3LxIMXuc3A8Inec.png" src-width="2324" src-height="1318" align="center"/>

## 三、批量打印功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：报表管理 &gt;批量打印</p>
</div>

#### 设置打印批次

系统也支持批量打印报表功能，可以自行新增一个批量作业，点选右上方【新增】，增加批量打印名称与批量报表组成

<img src="/assets/B3dyboQWSoc2QJxw1PPcnYpqnqh.png" src-width="3362" src-height="1526" align="center"/>

批量打印名称确认后，可以添加批量的报表组成（选报表名称/打印方式），打印条件会根据不同报表，自动显示相关栏位，可以根据需要自行设置

<img src="/assets/Xq5Xb0it0oB8Eyx1vwicV7kXnKh.png" src-width="2364" src-height="1348" align="center"/>

同时根据不同的报表条件栏位，也可以设制不同条件：在批次详情面，点击【添加】进入报表添加设置页面，选择报表并设置报表条件

 例：如果是日期则如下选择项：
- ledger date    当前帐务日期  
- Last ledger date 上一个帐务日期
- year start date     年初第一天
- month start date    本月初第一天
- last month end date   上月最后一天
- last month begin date 上月最后一天
- system date  当前自然日
- last system date 上一自然日
- Before last ledger date 上上一个帐务日期
- Before last system date 上上一自然日

<img src="/assets/GO77bjUxBooB58x8gwycx70pnAc.png" src-width="2360" src-height="1352" align="center"/>

#### 编辑打印批次

批次详情可以进行下列操作：

1. 列表内点击【修改】进入报表条件修改页面
2. 列表内点击【导出】可以按条件导出单个报表
3. 列表内点击【删除】可以移除批次中的报表
4. 报表批量打印同一批次支持添加相同的报表，方便相同报表但列印参数不同需要

<img src="/assets/P8ypbCiyeohpCHx76yZcchaBnSh.png" src-width="2336" src-height="1248" align="center"/>

#### 批量打印

可以在现有批量作业纪录右侧功能区，操作【详情】或【批量导出】或【删除】

- 详情：进入批次详细列表页面
- 删除：删除批次
- 批量导出：提交批次文件生成任务

<img src="/assets/X5Jrb97PPo7Pe7x4aodcvQBQn0k.png" src-width="2352" src-height="940" align="center"/>

#### 导出批量文件

若批量导出执行后，可以在导出列表作业上查看，也可以将文件夹整个下载操作

<img src="/assets/ZYCyb8GoBoAuYexsR5YcArKYnLx.png" src-width="2832" src-height="834" align="center"/>

可以点选详情，查看每一批量打印的单一报表，或单一报表下载

<img src="/assets/UyTVbCLOIoo2ZSxn9cOcIDaunvd.png" src-width="2346" src-height="802" align="center"/>

## 四、导出日志

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：报表管理&gt;导出日志</p>
</div>

查询报表列印的历史操作记录

- 「单个列印」查询单个报表打印的历史操作记录
- 「批量列印」查询批量报表打印的历史操作记录

<img src="/assets/ZX52bsN9hoSfkdxY0YLcttYKnnh.png" src-width="3346" src-height="1512" align="center"/>

## 五、CRS 文件生成

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：报表管理&gt;CRS 文件生成</p>
</div>

### 功能操作说明

本作业提供年度 CRS 文件的操作处理，支持新消息与更正消息类型

注意：租户需要 增加下列权限 才能操作 相关 CRS 文件

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[54%]" width-ratio="54">
<img src="/assets/UpPHbEP62obOPuxVfuTc2sXdnEh.png" src-width="950" src-height="563" align="center"/>
</div>
<div class="w-[45%]" width-ratio="45">
<img src="/assets/WB3nb9Xk8oux6Yxl5ePc2D5bnxf.png" src-width="1878" src-height="1354" align="center"/>

<p>CRS 文件权限</p>
</div>
</div>

#### <b>计算收益</b>： 

首先在右上角点选'计算收益' ，输入报送年度与编号（公司名称）后就会产生文件制作的任务工作（在<b>任务列表</b> Tab 页签）

注意：在计算收益视窗上，在外部报税文件上传的网站了会提供供一个编号【AEOI ID】的，公司名称就是券商的公司名称，要跟外部报税系统里面名称要一致的

<img src="/assets/DNKpbKEv4o7Xkix4zRycOwCbnqp.png" src-width="2352" src-height="1344" align="center"/>

就会产生一个的系统任务，当系统任务完成后（这会需要点时间产生全年资料），就会产生报送的参考数据，可以在 CRS 数据 Tab 页签上 查看或修改

<img src="/assets/RwkWbtqYloi7owx0I30cD8LInqh.png" src-width="2368" src-height="874" align="center"/>

也可以在任务列表 Tab 页签上 点选 纪录右侧操作区的【详情】，会自动切换<b> CRS 数据</b> Tab 页签，可以查询数据资料或编辑修改

<img src="/assets/F5ifbjNJ6oXg8OxC73scnM51nDh.png" src-width="2346" src-height="1196" align="center"/>

可根据需要 删除纪录（不报送）或修改数据资料

<img src="/assets/FXgvba7kdoiiqrxZX3Bc8zzun5e.png" src-width="1193" src-height="662" align="center"/>

#### <b>生成文件</b>： 

当 CRS 数据 Tab 页签上 查看或修改正确后，可以点选右上角【生成文件】就会产生一个的系统任务来产生报税规格的文档（注意：这会需要点时间产生全年资料）

<img src="/assets/BnOUbJWigoLi38xgRpmcp71Snmd.png" src-width="2338" src-height="836" align="center"/>

#### <b>文件下载</b>

当生成文件任务完成后，就可以点选下载档案，去外部网站传送了

（系统会称生一个 xml 附档名的文档）

<img src="/assets/Np0nb7dIhoGv0UxP9xzc69AlnRf.png" src-width="2338" src-height="836" align="center"/>

<img src="/assets/T3lPb7Ccgod7r5xssVGcdOwcnue.png" src-width="581" src-height="667"/>

建议：此文件不要自行编辑，容易误操作造成文档规格不对，无法上传

#### <b>生成文件上传</b>： 

将上传到外部系统的一个 XML 文件。这文件在外部系统上传以后，在外部系统它会返回一个文件序列号，可以在任务列表 Tab 页签这，更新状态把外部系统序列号输入

<img src="/assets/AYn2bziLVoz8VBxb9KGc7ssMnkd.png" src-width="2350" src-height="1348" align="center"/>

这等于 将 产生的 CRS 数据 打上这批次的 文件序列号，方便以后对数据查询或更正已报送资料

<img src="/assets/UaXCb59M4onF6sxUYAyctBirnub.png" src-width="2352" src-height="846" align="center"/>

#### <b>更正资料再上传</b>： 

正常情况下，已报送资料其状态是‘文件已报送'

<img src="/assets/NMjLbszRdoK5LBxwxP2cMyOFnCh.png" src-width="2334" src-height="1214" align="center"/>

当发现数据需要变更时，可以点选右侧【编辑】来操作修改数据或【删除】已报送数据，此时后面一样操作产生文件并上传报送网站，同样 也会取的最新的文件序列号，也一样更新即可

