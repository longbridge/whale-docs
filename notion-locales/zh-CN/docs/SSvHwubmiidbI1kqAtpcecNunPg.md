---
slug: SSvHwubmiidbI1kqAtpcecNunPg
title: 系统介绍
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


| **部门名称**                            | 报表前缀 |
| ----------------------------------- | ---- |
| 结算部（Settlement Delivery Department） | SDR  |
| 交易部（Trade Department）               | TDR  |
| 财务部（Finance Department）             | FDR  |
| 客服部（Customer Service Department）    | CDR  |
| 风控部（Risk Management Department）     | RDR  |
| 合规部（Inner Compliance Department）    | IDR  |
| 财政资源规则（Financial Resource Rule）     | FRR  |
| 若有券商特殊报表前面会根据券商缩写来定                 |      |


目前系统提供下列报表清单，后续会增加适当报表


## 结算报表


| **报表编号**   | **报表名称**                                                      | **报表说明**                                                  | **支持格式**      |
| ---------- | ------------------------------------------------------------- | --------------------------------------------------------- | ------------- |
| SDR002     | Client Cash Balance Report By CCY                             | 查询当前或历史的客户资金明细币种的信息                                       | CSV、PDF、EXCEL |
| SDR003     | Client Stock Holding Report(By Stock)                         | 按股票分组展示客户持仓                                               | CSV、PDF、EXCEL |
| SDR003-1   | Client Stock Holding Report(By Client)                        | 按客户帐户分组展示客户持仓                                             | CSV、PDF、EXCEL |
| SDR003-2   | Client Stock Holding Report(Real Time)                        | 查询当前实时嘅证券持仓信息                                             | CSV、PDF、EXCEL |
| SDR003-3   | Client Stock Holding Report With Custodian Details(Real Time) | 带仓库信息、子仓位置的持仓报表，只能查询当日的实时信息。为临时报表                         | CSV、PDF、EXCEL |
| SDR003-4   | Stock Holding Report With Client Details                      | 带一些客户基础信息的持仓报表，处理公司行动时和上手对账用                              | CSV、PDF、EXCEL |
| SDR003-5   | Client Stock Holding For Data Migration                       | 在系统上线时，查询数据迁移后的历史持仓，只能展示已导入的字段。                           | CSV、PDF、EXCEL |
| SDR004     | Client Stock Location Report(By Stock)                        | 按股票分组展示客户仓位的股票持仓                                          | CSV、PDF、EXCEL |
| SDR004-1   | Client Stock Location Report(By Client)                       | 按客户分组展示客户仓位的股票持仓                                          | CSV、PDF、EXCEL |
| SDR005     | Stock Location Report(By Stock)                               | 按股票分组展示公司所有股票的仓位持仓                                        | CSV、PDF、EXCEL |
| SDR005-1   | Stock Location Report(By Depot)                               | 按仓位分组展示公司所有股票的仓位持仓                                        | CSV、PDF、EXCEL |
| SDR006     | Monthly Trading Fee And Levy Report                           | 显示客户 direct 类交易的交易征费、交易费的明细及统计资讯                            | CSV、PDF、EXCEL |
| SDR006-1   | Monthly Trading Fee And Levy Summary Report                   | 交易征费、交易费报表                                                | CSV、PDF、EXCEL |
| SDR007     | Monthly Stamp Duty Report                                     | 显示客户某月港股 direct 交易的印花税                                      | CSV、PDF、EXCEL |
| SDR008     | Stock Movement In-Out Report                                  | 除了交易以外当天所有股票进出                                            | CSV、PDF、EXCEL |
| SDR008-1   | Stock Movement In-Out Report(Real Time)                       | 查询客户实时的持仓变动信息（不包括交易）                                      |               |
| SDR009     | Turnover Listing Report                                       | 统计客户一段时间内的佣金费用和成交量资讯，考虑交易取消                               | CSV、PDF、EXCEL |
| SDR010     | Daily Stamp Duty Report                                       | 查询某天印花税资讯                                                 | CSV、EXCEL     |
| SDR010-1   |  HKEX Daily Stamp Duty Form                                   | 查询某天印花税资讯                                                 | CSV、PDF、EXCEL |
| SDR011     | Daily Summary Report By HK                                    | 查询港股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                            | CSV、PDF、EXCEL |
| SDR011-1   | Daily Summary Report By US                                    | 查询美股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                            | CSV、PDF、EXCEL |
| SDR011-2   | Daily Summary Report By CN                                    | 查询A股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                            | CSV、PDF、EXCEL |
| SDR011-3   | Daily Summary Report By Client Type HK                        | 查询港股某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                            | CSV、PDF、EXCEL |
| SDR011-4   | Daily Summary Report By SG                                    | 查询新加坡市场某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                         | CSV、PDF、EXCE  |
| SDR011-5   | Daily Summary Report By VA                                    | 查询虚拟某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                            | CSV、PDF、EXCE  |
| SDR011-6   | Daily Summary Report By ID                                    | 查询印尼市场某天B/C买卖成交汇总资讯，包括成交金额，各种费用等                          | CSV、PDF、EXCE  |
| SDR012     | Monthly Trading Summary Report                                | 查询某月的每一天的成交汇总资讯，包括成交金额，净佣金，各种费用等                          | CSV、PDF、EXCEL |
| SDR013     | Client Bonds Holding Report(By Client)                        | 按客户帐户分组展示客户债券持仓                                           | CSV、PDF、EXCEL |
| SDR014     | Interest Detail Report                                        | 查询某月关于客户利息、客户罚息、客户每日的利息及当月累计利息的资金流水资讯                     | CSV、PDF、EXCEL |
| SDR015     | UnMatched Report                                              | 配对结果报表，显示客户订单和券商的订单差异                                     | CSV、PDF、EXCEL |
| SDR015-2   | Trade UnMatched Report                                        | 实时交易对账报表，清算前检查任务完成后可以查询                                   | CSV、PDF、EXCEL |
| SDR016     | ATI Settlement Report                                         | 报表展示某个交收日的满足条件的合约，对应的 ATI 净买入/净卖出资讯。以及相关客户的 ATI 明细            | CSV、PDF、EXCEL |
| SDR017     | Client Bargain Report                                         | 客户合约详情表                                                   | CSV、PDF、EXCEL |
| SDR018     | Bargain Detail Report-HK                                      | 交易合约资讯明细表 - 港股                                              | CSV、PDF、EXCEL |
| SDR018-1   | Bargain Detail Report-US                                      | 交易合约资讯明细表 - 美股                                              | CSV、PDF、EXCEL |
| SDR018-2   | Bargain Detail Report-USOP                                    | 交易合约资讯明细表 - 期权                                              | CSV、PDF、EXCEL |
| SDR018-3   | Bargain Detail Report-CN                                      | 交易合约资讯明细表-A 股                                              | CSV、PDF、EXCEL |
| SDR018-4   | Bargain Detail Report-SG                                      | 交易合约资讯明细表 - 新加坡股票                                           | CSV、PDF、EXCEL |
| SDR018-5   | Bargain Detail Report-VA                                      | 交易合约资讯明细表 - 虚拟资产                                            | CSV、PDF、EXCEL |
| SDR018-6   | Bargain Detail Report-ID                                      | 交易合约资讯明细表 - 印尼市场                                            | CSV、PDF、EXCEL |
| SDR019     | Outstanding Settlement Report                                 | 待交收合约报表                                                   | CSV、PDF、EXCEL |
| SDR021     | Daily Broker Settlement Report(By Broker)                     | 经纪商当日交收报表                                                 | CSV、PDF、EXCEL |
| SDR023-01  | CA Announcement Event List                                    | 展示当前公司行动 CA 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-03  | BE Announcement Event List                                    | 展示当前公司行动 BE 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-04  | DS Announcement Event List                                    | 展示当前公司行动 DS 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-05  | OO Announcement Event List                                    | 展示当前公司行动 OO 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-06  | EO Announcement Event List                                    | 展示当前公司行动 EO 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-07  | RS Announcement Event List                                    | 展示当前公司行动 RS 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-08  | ER Announcement Event List                                    | 展示当前公司行动 ER 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-09  | TU Announcement Event List                                    | 展示当前公司行动 TU 预告和方案                                           | CSV、PDF、EXCEL |
| SDR023-10  | TC Announcement Event List                                    | 展示当前公司行动 TC 预告和方案                                           | CSV、PDF、EXCEL |
| SDR024     | Corporate Action Past Due Report                              | 展示当天需要执行的公司行动，CA 在当日日终后操作。注意：需要以上手实际执行为准，只取最近 5 个自然日的数据；实时报表 | CSV、PDF、EXCEL |
| SDR025     | Stock Reconciliation Report                                   | 根据托管商子仓的持仓对账                                              | CSV、PDF、EXCEL |
| SDR026     |  Client Trustee Balance Report                                | 客户托管资金余额报表                                                | CSV、PDF、EXCEL |
| SDR027     | CCASS Securities Market Value Report                          | CCASS 的中证券市值报表，以及停牌超过 3 天的股票列表及市值情况                          | CSV、PDF、EXCEL |
| SDR028     | IPO Detail Report                                             | 获取客户当前历史 IPO 申购资讯（包括白表黄表数据），实时报表                            | CSV、PDF、EXCEL |
| SDR028-1   | IPO Infos                                                     | 统计一段时间内 IPO 的信息及订单                                          | CSV、PDF、EXCEL |
| SDR029     | Stock Frozen Report                                           | 股票冻结报表                                                    | CSV、PDF、EXCEL |
| SDR030     | Cash Frozen Report                                            | 现金冻结报表                                                    | CSV、PDF、EXCEL |
| SDR032     | Client Trade Amendment Report                                 | 显示订单被动修改纪录                                                | CSV、PDF、EXCEL |
| SDR034     | Client Margin Ratio Report                                    | 客户特殊保证金比率                                                 | CSV、PDF、EXCEL |
|            |                                                               |                                                           |               |
| SDR040-01  | Corporation Action Detail Report(TM)                          | 公司行动方案明细（TM）                                              | CSV、PDF、EXCEL |
| SDR040-02  | Corporation Action Detail Report(DS)                          | 公司行动方案明细（DS）                                              | CSV、PDF、EXCEL |
| SDR040-03  | Corporation Action Detail Report(OO/EO/RS/ER/TU/TC)           | 公司行动方案明细（OO/EO/RS/ER/TU/TC）                               | CSV、PDF、EXCEL |
| SDR040-09  | Corporation Action Detail Report(BE/IP/SO)                    | 公司行动方案明细（BE/IP/SO）                                        | CSV、PDF、EXCEL |
| SDR040-10  | Corporation Action Detail Report(BE With Selection)           | 公司行动方案明细（BE With Selection）                               | CSV、PDF、EXCEL |
| SDR040-11  | Corporation Action Detail Report(CA)                          | 公司行动方案明细（CA）                                              | CSV、PDF、EXCEL |
| SDR042     | BE Client Dividend With Scrip Option(Email)                   | 导出选股选息明细列表给对应的客户发权益邮件                                     | CSV、PDF、EXCEL |
| SDR048     | Broker Contract Details                                       | 代理商合约信息                                                   | CSV、PDF、EXCEL |
| SDR049     | Illiquid Stock Summary Report                                 | 列印非速动证券资讯                                                 | CSV、PDF、EXCEL |
| SDR051     | Short Sell Stock Report                                       | 显示客户持仓为负的股票资讯                                             | CSV、PDF、EXCEL |
| SDR052     | Short Sell Trade Report-US                                    | 美股市场沽空的合约信息                                               | CSV、PDF、EXCEL |
| SDR058-01  | HK Custodian Fee Group by Client V1                           | 港股托管费                                                     | CSV、PDF、EXCEL |
| SDR058-02  | HK Custodian Fee Group by Client V2                           | 港股托管费                                                     | CSV、PDF、EXCEL |
| SDR059     | Client Trading Summary Report                                 | 按时间区间查询客户的交易情况                                            | CSV、PDF、EXCEL |
| SDR060     | Client Trading Detail Report                                  | 查询客户交易费用明细                                                | CSV、PDF、EXCEL |
| SDR061     | Short Sell Borrow Fee Detail                                  | 融券利息明细表                                                   | CSV、PDF、EXCEL |
| SDR062     | Short Sell Borrow Fee Summary                                 | 融券利息汇总表                                                   | CSV、PDF、EXCEL |
| SDR063     |  List Of Stock Holdings Suspended                             | 持仓股票停牌清单                                                  | CSV、PDF、EXCEL |
| SDR064     | Daily Trading Report By HK                                    | 香港市场客户合约详情表，包含对手方成交明细                                     | CSV、PDF、EXCEL |
| SDR070     | OTCR Report                                                   | OTCR 汇报报表                                                  | EXCEL         |


## 财务报表


| **报表编号** | **报表名称**                                          | **报表说明**              | **支持格式**       |
| -------- | ------------------------------------------------- | --------------------- | -------------- |
| FDR001   | Client Cash Balance Summary Report By Client Type | 查询当前或历史的客户资金按本位币汇总的资讯 | CSV、PDF、EXCEL  |
| FDR002   | Client Cash Balance Detail Report By CCY          | 查询当前或历史的客户资金明细币种的资讯   | CSV、PDF、EXCEL  |
| FDR002-1 | Client Cash Balance Detail Report By CCY(Format2) | 查询指定帐务日期客户分币种的资金信息    | CSV、PDF、EXCEL  |
| FDR002-2 | Client Cash Balance Detail Report By CCY(Format3) | 查询指定帐务日期客户分币种的资金信息    | CSV、PDF、EXCEL  |
| FDR003   | Client Cash Balance Detail Report By Client       | 查询当前或历史的客户资金明细币种的资讯   | CSV、PDF、EXCEL  |
| FDR004   | Settle Cash Movement In-Out Report By CCY         | 结算现金余额变动明细记录          | CSV、PDF、EXCEL  |
| FDR005   | Cash Movement In-Out Report By CCY                | 资金变动流水                | CSV、PDF、EXCEL  |
| FDR006   | Daily Trial Balance Report                        | 每日成交金额/费用/应收应付款汇总     | CSV、PDF、EXCEL  |
| FDR009   |  AE Performance Report                            | 经纪人佣金报表               | CSV、PDF、EXCEL  |
| FDR009-1 |  AE Performance Report By Client                  | 按照年月日统计经纪人下的客户佣金      | CSV、PDF、EXCEL  |
| FDR012   | FD Commissions detail                             | FD 分成明细                | CSV、PDF、EXCEL  |
| FDR013   | FD Commissions Daily Report With AE               | FD 分成明细，按经纪人按日汇总       | CSV、PDF、EXCEL  |
| FDR014   | FD Commissions Monthly Report With AE             | FD 分成明细，按经纪人按月汇总       | CSV、PDF、EXCEL  |
| FDR015   | FD Commissions Yearly Report With AE              | FD 分成明细，按经纪人按年汇总       | CSV、PDF、EXCEL  |
| FDR016   | FD Commissions Monthly Report Without AE          | FD 分成明细，按月汇总           | CSV、PDF、EXCEL  |
| FDR017   | Cash In-Out Detail Report By CCY                  | 实时的现金变动报表             | CSV、PDF、EXCEL  |
| FDR018   | Client Cash Balance Report By Client（Real Time）  | 客户分币种的现金余额实时报表        | CSV、PDF、EXCEL  |
| FDR019   | Cash Movement Summary Report                      | 客户资金变得分类汇总表           | CSV、PDF、EXCEL  |
| FDR020   | Commission Rebate Report                          | 经纪人佣金汇总               | CSV、PDF、EXCEL  |
| FDR020-1 | Commission Rebate Detail Report                   | 经纪人佣金明细               | CSV、PDF、EXCEL  |
| FDR022   | Cash Movement Check Report                        | 资金变动检查表               | CSV、PDF、EXCEL  |
| FDR023   | Client Remaining Cash(USD)                        | 不能动用的客户存管资金           | CSV、PDF、EXCEL  |


## 客户报表


| **报表编号** | **报表名称**                       | **报表说明**             | **支持格式**      |
| -------- | ------------------------------ | -------------------- | ------------- |
| CDR001   | Client Master Listing Report   | 显示客户帐户基本资料           | CSV、PDF、EXCEL |
| CDR001-1 | BCAN Information Report        | BCAN 资讯报表             | CSV、PDF、EXCEL |
| CDR009   | Stock Information Excel Export | 显示股票重要栏位讯息           | CSV、PDF、EXCEL |
| CDR008   |  Allow Trading Status Report   | 证券可买卖标志信息            | CSV、PDF、EXCEL |
| CDR010   | AE Listing                     | 查询 AE 经纪人 基本资料        | CSV、PDF、EXCEL |
| CDR013   | Member Agent Person            | 客户在券商记录的代理人信息，以客户为维度 | CSV、PDF、EXCEL |
| CDR014   | Member Related Person          | 客户在券商记录的关系人信息，以客户为维度 | CSV、PDF、EXCEL |
| CDR015   | Client Related Group Report    | FRR 关联组客户信息查询         | CSV、PDF、EXCEL |


## FRR 报表


| **报表编号**  | **报表名称**                                                                         | **报表说明**                                          | **支持格式**      |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------------------- | ------------- |
| FRR001    | Cash Client Receivable Aging Report(Form 1)                                      | 现金客户延期交收应收款分析                                     | CSV、PDF、EXCEL |
| FRR001-1  | Cash Client Receivable Aging Report By CCY(Form 1)                               | 现金客户延期交收应收款分析 欠款统计口径：资金账户分币种的已交收金额                | CSV、PDF、EXCEL |
| FRR002    | Market Unsettled ARAP Report（Form 1）                                             | 市场角度统计待交收证券的金额                                    | CSV、PDF、EXCEL |
| FRR003    | Margin Clients With The Largest Unadjusted Loan Balances Report
（Form 4 Table 1) | 客户资金资讯，证券市值资讯                                     | CSV、PDF、EXCEL |
| FRR004    | Margin Client With Adjusted Loan Balances Report（Form 4 Table 2)                 | 所有Margin客户资产/流动性详情:统计Margin客户，其负债及资产流动性明细及分类汇总。   | CSV、PDF、EXCEL |
| FRR004-1  | Margin Clients With Adjusted Loan Balances Report By Stock (Form 4 Table 2)      | 统计 Margin 客户，其负债及资产流动性明细及分类汇总，并关联股票                 | CSV、PDF、EXCEL |
| FRR005    | Ananlysis of Securities Collateral Report（Form 5（A))                            | 以股票的维度来查看：所有 Margin 客户的股票保证金情况：统计 search_str=M 的客户数据。 | CSV、PDF、EXCEL |
| FRR006    | FRR006 - Rolling Balance Cash Client Analysis Report(Form 6)                     | 现金帐户欠款客户                                          |               |
| FRR007    | Profit And Loss Account Report（Form 7）                                           | 客户成交量和佣金资讯                                        | CSV、PDF、EXCEL |
| FRR008    | Analysis of Client Securities Report（Form 8 Table1）                              | 统计 CCASS 及其他托管商不同仓位上的市值                             | CSV、PDF、EXCEL |
| FRR008-1  | Analysis of Client Securities Report By CCY(Form 8 Table1)                       | 分币种统计 CCASS 及其他托管商不同仓位上的市值                        | CSV、PDF、EXCEL |
| FRR008-2  | Analysis of Client Securities Report By CCY-2(Form 8 Table1)                     | 分币种统计 CCASS 及其他托管商不同仓位上的市值                        | CSV、PDF、EXCEL |
| FRR009    | Analysis of Client Segregated Funds Report(Form 8 Table 2)                       | 应向客户支付的款项及须独立存放的客户款项报表                            | CSV、PDF、EXCEL |
| FRR010    | Active Client Summary Report (Form 12)                                           | 活跃客户数量统计                                          | CSV、PDF、EXCEL |
| FRR010-1  |  Active Client Detail Report (form 12)                                           | 活跃客户账户及资产明细                                       | CSV、PDF、EXCEL |
| FRR011    | Option FRR Report                                                                | 期权 FRR                                             | CSV、PDF、EXCEL |
| FRR012    | Monthly Options Trade Summary Report                                             | 期权月度交易量                                           | CSV、PDF、EXCEL |


## 风控报表


| **报表编号** | **报表名称**                                         | **报表说明**                                      | **支持格式**      |
| -------- | ------------------------------------------------ | --------------------------------------------- | ------------- |
| RDR001   | Client Portfolio Details                         | 统计在发生日起以及 2 个帐务日，客户的总资金、总市值、总抵押值、追保金额，以及持仓明细等信息 | CSV、PDF、EXCEL |
| RDR003   | Margin Call Summary Report                       | 分析统计客户历史按本位币汇总的追保资讯                           | CSV、PDF、EXCEL |
| RDR003-1 | Margin Call Summary(Margin Client) Report        | 融资账户的日终后追保金额                                  | CSV、PDF、EXCEL |
| RDR005   | Client Asset Summary Report By Client Type       | 分析统计客户历史的资产资讯                                 | CSV、PDF、EXCEL |
| RDR006   | Client Asset Detail Report By CCY                | 按币种分组分析客户的资产细节                                | CSV、PDF、EXCEL |
| RDR006-1 | Client Asset Detail Report By Client             | 按客户分组分析客户的资产细节                                | CSV、PDF、EXCEL |
| RDR007   | Client Trading Or Credit Limit Report            | 客户交易额度和信用额度报表                                 | CSV、PDF、EXCEL |
| RDR008   | Top N Market Value of Margin-Market Value Report | Top N 证券市值和保证金市值报表                            | CSV、PDF、EXCEL |
| RDR010   | Concentration Risk                               | 客户股票的市值占整体持仓的占比以及发行市值的占比                      | CSV、PDF、EXCEL |
| RDR011   | Margincall Continuous Unpaid Amount              | 连续追保报表                                        | CSV、PDF、EXCEL |
| RDR012   | MarginCall Aging Report                          | 实时追保纪录                                        | CSV、PDF、EXCEL |
| RDR014   | Stock Rank Report                                | 股票级别占比                                        | CSV、PDF、EXCEL |
| RDR016   | User Daily Approval Report                       | 风控额度批核报表                                      | CSV、PDF、EXCEL |
| RDR019   |  Margin Loan Report                              | 保证金贷款报表                                       | CSV、PDF、EXCEL |
| RDR021   | Bad Credit Report By Client                      | 客户不良信用纪录                                      | CSV、PDF、EXCEL |
| RDR022   |  Stock Margin Ratio Report                       | 实时股票保证金比例                                     | CSV、PDF、EXCEL |
| RDR023   | Client Overdue Cash Balance By CCY               | 实时统计客户分币种的欠款                                  | CSV、PDF、EXCEL |
| RDR024-1 | Exposure By Clients                              | 客户风险敞口                                        | CSV、PDF、EXCEL |
| RDR024-2 | Exposure By Stocks                               | 股票风险敞口                                        | CSV、PDF、EXCEL |
| RDR024-3 | Exposure By Exchanges                            | 分交易统计风险敞口                                     | CSV、PDF、EXCEL |
| RDR025   | Client Borrowing Details                         | 客户借贷明细                                        | CSV、PDF、EXCEL |
| RDR026   | Stock Borrowing calculation                      | 股票借贷明细                                        | CSV、PDF、EXCEL |
| RDR027   | Client Position Summary                          | 客户持仓及风控汇总信息                                   | CSV、PDF、EXCEL |
| RDR028   | Client Position Details                          | 客户持仓明细                                        | CSV、PDF、EXCEL |
| RDR029   | Credit Client Info Review                        | 客户融资额度重检报表                                    | CSV、PDF、EXCEL |
| RDR030   | Option Securities Recovery Record                | 期权到期日正股不足以行权的追收记                              | CSV、PDF、EXCEL |
| RDR032   | Options Margin Report                            | 期权保证金报表，按照对应正股汇总                              | CSV、PDF、EXCEL |
| RDR033   | FD/AE Overview                                   | FD/AE 客户总览                                    | CSV、PDF、EXCEL |
| RDR034   | Company Loan Limit Overview                      | 公司纬度授信额度总览                                    | CSV、PDF、EXCEL |
| RDR035   | Margin Risk Index                                | 保证金风险指标                                       | CSV、PDF、EXCEL |
| RDR036   | Stock Group Monitoring                           | 股票组监控                                         | CSV、PDF、EXCEL |
| RDR037   | Client Financing Monitoring                      | 客户融资监控                                        | CSV、PDF、EXCEL |
| RDR038   | Daily Margin Call Report                         | margin call report                            | CSV、PDF、EXCEL |
| RDR039   | Stress Test                                      | 日常风控报表                                        | CSV、PDF、EXCEL |
| RDR040   | Option Composed Margin                           | 期权组合保证金报表                                     | CSV、PDF、EXCEL |


## 合规报表


| **报表编号** | **报表名称**                                                                           | **报表说明**                                             | **支持格式**      |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------- |
| IDR001   | S181 Trade Report                                                                  | 按照 SFC 的要求模版提交客户交易                                   | CSV、PDF、EXCEL |
| IDR002   | S181 Holding Report                                                                | 按照 SFC 的要求模版提交客户持仓                                   | CSV、PDF、EXCEL |
| IDR008   | SPAC Post Trade Report                                                             | 指定时间段内特定股票交易的成交清单                                    | CSV、PDF、EXCEL |
| IDR003   | Client Trade With IP(SFC)                                                          | 指定时间段内某个客户或某只股票的交易清单，带 IP                            | CSV、PDF、EXCEL |
| IDR011   | Top N Client Turnover                                                              | 10 大客户交易总额                                            | CSV、PDF、EXCEL |
| IDR012   | Top N Order Turnover                                                               | 最高 10 大订单成交量                                           | CSV、PDF、EXCEL |
| IDR013   | Top N Client No. of Transactions                                                   | 10 大客户交易次数                                            | CSV、PDF、EXCEL |
| IDR014   | Top N Price Deviation In Percentage                                                | 成交价参数                                                | CSV、PDF、EXCEL |
| IDR015   | Y trade                                                                            | Y 盘                                                   | CSV、PDF、EXCEL |
| IDR016   | Transactions Report By Staff                                                       | 员工交易报表                                               | CSV、PDF、EXCEL |
| IDR017   | Transactions Report By High Risk Client                                            | 高度风险客户交易报表                                           | CSV、PDF、EXCEL |
| IDR018   | Matched trades Wash trades                                                         | 配对交易 虚售交易                                            | CSV、PDF、EXCEL |
| IDR019   | Not genuine orders                                                                 | 非真正订单                                                | CSV、PDF、EXCEL |
| IDR020   | Re-activation of dormant account                                                   | 重启不动户                                                | CSV、PDF、EXCEL |
| IDR026   | The proportion of customer transaction volume                                      | 客户成交量占比                                              | CSV、PDF、EXCEL |
| IDR027   | Deliberately push up or down the closing price                                     | 刻意推高或推低市价                                            | CSV、PDF、EXCEL |
| IDR028   | Transactions done at At-auction period                                             | 竞价时段成交                                               | CSV、PDF、EXCEL |
| IDR029   | IPO share trades on first listed date                                              | 新股首日上市交易                                             | CSV、PDF、EXCEL |
| IDR038   | Suspicious Trading Report                                                          | 根据成交明细的维度来筛选，同一客户，成交时间相同（秒级），成交数量相等，成交价格相同，买卖方向相反的数据 | CSV、PDF、EXCEL |
| IDR040   | Transaction Monitoring - cash in and out（including stock in and out）-normal client | 出入金的交易监察（包括股票转入和转出）- 一般用户                             | CSV、PDF、EXCEL |
| IDR041   | Transaction Monitoring - cash in and out（including stock in and out）-watchlist     | 出入金的交易监察（包括股票转入和转出）-watchlist                        | CSV、PDF、EXCEL |


## 交易报表


| **报表编号**  | **报表名称**                                              | **报表说明**                                                | **支持格式**      |
| --------- | ----------------------------------------------------- | ------------------------------------------------------- | ------------- |
| TDR001-1  | Daily Client Order Report By Client                   | 显示当天在指定条件下，所有客户的订单，按客户分组展示                              | CSV、PDF、EXCEL |
| TDR001-2  | Daily Client Order Report By Stock                    | 显示当天在指定条件下，所有经纪人客户的订单，按股票分组展示                           | CSV、PDF、EXCEL |
| TDR001-3  | Daily Client Order Report By AE                       | 显示当天在指定条件下，所有经纪人客户的订单，按经纪人分组展示                          | CSV、PDF、EXCEL |
| TDR001-3  | Daily Client Order Report By BuySell                  | 显示当天在指定条件下，所有经纪人客户的订单，按买卖分组展示                           | CSV、PDF、EXCEL |
| TDR004    | Trade Detail Report                                   | 显示指定条件下所有成交的订单的信息，并会有各币种成交的统计                           | CSV、PDF、EXCEL |
| TDR005    | Trade Summary Report                                  | 显示指定条件下所有订单的资讯。并对交易的数据进行汇总                              | CSV、PDF、EXCEL |
| TDR006    | Client History Order Report By BuySell                | 显示指定条件下所有订单的信息                                          | CSV、PDF、EXCEL |
| TDR007    | Cross Trade Report                                    | 显示指定条件下所有交叉盘交易的订单的信息                                    | CSV、PDF、EXCEL |
| TDR013    | User Daily Turnover Report                            | 根据操作员及币种显示当天成交及未成交金额                                    | CSV、PDF、EXCEL |
| TDR020    | Third Party Operated Account Trade Listing            | 显示第三方授权帐户成交记录报表                                         | CSV、PDF、EXCEL |
| TDR022    | IP address and Transaction Report                     | 带客户 IP 地址的交易记录报表                                        | CSV、PDF、EXCEL |
| TDR023-1  | Trades for Clients with the Same Stock                | 统计交易订单维度，相同下单日期，相同标的，订单状态成交、部分成交，统计数量大于等于 2 的资料         | CSV、PDF、EXCEL |
| TDR023-2  | Trades for Clients with the Same Address (SG Clients) | 统计交易订单维度，相同下单日期，相同标的，相同邮编的用户，订单状态成交、部分成交，统计数量大于等于 2 的资料 | CSV、PDF、EXCEL |
| TDR024    | Clients Tagged to Same Licensed Representative        | 同一代码，不同客户的订单创建时间差小于 5 分钟的数据                             | CSV、PDF、EXCEL |
| TDR025    | Clients acting in concert                             | 统计提交开户时间相同（日）的用户，订单用创建为同一天，交易同一只股票的数据                   | CSV、PDF、EXCEL |
| TDR026    | Ramping/Price Driver                                  | 统计成交价格大于等于当日开盘价的 120% 或小于等于当日开盘价 80% 的订单                | CSV、PDF、EXCEL |
| TDR027    | Wash Trades (No Change in Beneficial Ownership)       | 统计某个交易日，同一个客户，同一只股票的汇总成交额（包含买卖）/ 市场成交额 ≥ 1% 的成交明细       | CSV、PDF、EXCEL |


# 功能操作


# 一、基础辅助功能及页面布局介绍


## 报表业务分类


可以在右侧切换业务报表分类。中间区会显示可执行到报表清单列表


![image.png](/assets/fd5312c21ba2b9550f1e9aecec4892f8.png)


每个报表项目会显示报表项目名称与 报表简要说明 与最近更新版本时间


![image.png](/assets/01cda19e1514c53c4b64816ee0fa1c66.png)


报表项目旁若出现'实时'标签图示，表示该报表是实时数据报表资料  


![image.png](/assets/a2f47dbca811a93c95035f05e7d7d269.png)


## 报表标签分类


也可以编辑自己的报表标签说明，可以对单一报表赋予相应的「标签」，同时系统会根据「标签」对相关报表做自动分类，便于快速查找


![image.png](/assets/cf888fd2dbc5ab3914c429ed4ba36e69.png)


此时可以选择现有标签（支持多个标签同时存在）或 重新 新建一个 标签


![image.png](/assets/a7dc546d053e12378ef5c3ccb916bc9d.png)


## 标签管理


同时左上角 提供标签管理功能，可以维护标签内容：


删除标签后，则该标签下所有报表与之关联关系都会被清除


修改标签名称后，标签名称会直接变更


![image.png](/assets/07e0d89c390fd856649b43782694c92d.png)


![image.png](/assets/d3af552554bd981c7605cb87c2e7b0fb.png)


## 报表收藏


也提供 星状图示报表收藏，点选后就会出现在 自己的「我的收藏」入口菜单区内，方便快速点选操作


![image.png](/assets/7f59832a8d5d78524158243a299c58d3.png)


## 参数设置

- 可以通过报表参数设置完成部分报表需要的参数设置

![参数设置入口](/assets/0c6b20c83c8819e085a573f34f52b225.png)


![参数设置](/assets/61af306ac62941c49b8102cd72c1a888.png)


## 查看更新日志

- 通过更新日志用户可以及时了解 Whale 系统报表的最新更新纪录

![image.png](/assets/0af5e27b940b115cbdecd922ddff3f9f.png)


# 二、报表打印功能


> ⚓ 菜单入口：报表管理 >报表打印


## 报表数据查询


报表打印首页提供两种报表选择进入方式 


**方式一：** 


    在搜索栏输入报表编号的关键字，可以查询对应的报表展示选择，例如：输入 SDR003 则下拉显示 SDR003 相关的报表，点击所需报表便可以进入详细的报表页。（注意：输入报表编号作搜索，英文字母必须为大写）


![image.png](/assets/9920d74b14283c0a9c16e15b6b154137.png)


**方式二**：


    点击所需报表名称，展开后可选择对应的报表进入详细的报表页面


![image.png](/assets/3b6064c8e8b2c71055a89e52c45f114d.png)


单一报表详情的上方区域为报表条件栏位查询区，可按照不同条件进行报表详情筛选


![image.png](/assets/f95e3860f75234a29f3b57d872cf3ea1.png)


## 报表预览

- 如果报表配置了支持 PDF 格式则可以预览档案
- 预览只支持预览前 30 条明细记录生成的档案；
- 预览介面页可以选择下载或者列印。

> 🚫 因为预览只显示部分数据，所以请注意要数据是否完整后再进行下载；后期会优化在预览档案里说明是否是完整数据


![image.png](/assets/3008374d89fb9ddab762614f74a64060.png)


## 报表导出


![image.png](/assets/e88a9d55ce010257d66c9d73052269ed.png)


导出功能可以选择导出的档案类型，大部分报表支持 CSV、PDF、EXCEL 格式，部分特定报表只支持特定的格式，详情见报表列表

- CSV 默认支持：按页面列表展示的列栏位导出
- PDF 配置支持：按定义的列印模板栏位导出，支持分组总计以及报表组合
- EXCEL 配置支持：按定义的列印模板栏位导出，支持分组总计以及报表组合

点击后会会自动产生一个报表导出任务，后续可以在导出列表页面查看进度并作下载操作


![image.png](/assets/eba3596a8b775268bfc5752d28eb586c.png)


## 导出文件


> ⚓ 报表管理 >导出列表


可以查询当前登录用户所导出的报表文档，可以【删除】或直接【下载】


![image.png](/assets/d5eda81b640f5e62a1a9a3c5c5b577e1.png)


# 三、批量打印功能


> ⚓ 菜单入口：报表管理 >批量打印


## 设置打印批次


系统也支持批量打印报表功能，可以自行新增一个批量作业，点选右上方【新增】，增加批量打印名称与批量报表组成


![image.png](/assets/58d0879589641783f028fd40e8982283.png)


批量打印名称确认后，可以添加批量的报表组成（选报表名称/打印方式），打印条件会根据不同报表，自动显示相关栏位，可以根据需要自行设置


![image.png](/assets/9c2a3530911572e299b1faa28b929ad5.png)


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

![image.png](/assets/c92bc4679a100a23bd853b8dbb8d9345.png)


## 编辑打印批次


批次详情可以进行下列操作：

1. 列表内点击【修改】进入报表条件修改页面
2. 列表内点击【导出】可以按条件导出单个报表
3. 列表内点击【删除】可以移除批次中的报表
4. 报表批量打印同一批次支持添加相同的报表，方便相同报表但列印参数不同需要

![批次详细](/assets/77c222498d146e5de70a30862c4f2c6f.png)


## 批量打印


可以在现有批量作业纪录右侧功能区，操作【详情】或【批量导出】或【删除】

- 详情：进入批次详细列表页面
- 删除：删除批次
- 批量导出：提交批次文件生成任务

![批次列表页面](/assets/0a32e42025dd44cf81a453115fff4f62.png)


## 导出批量文件


若批量导出执行后，可以在导出列表作业上查看，也可以将文件夹整个下载操作


![image.png](/assets/3f6f7f323c5ae93b848e612938f91b20.png)


可以点选详情，查看每一批量打印的单一报表，或单一报表下载


![image.png](/assets/0647488bafdd01787e85d4bfb6ebfc8d.png)


# 四、导出日志


> ⚓ 菜单入口：报表管理>导出日志


查询报表列印的历史操作记录

- 「单个列印」查询单个报表打印的历史操作记录
- 「批量列印」查询批量报表打印的历史操作记录

![image.png](/assets/db70b6eb56e3b54ac4e6bec7d0476049.png)


# 五、CRS 文件生成


> ⚓ 菜单入口：报表管理>CRS 文件生成


## 功能操作说明


本作业提供年度 CRS 文件的操作处理，支持新消息与更正消息类型


注意：租户需要 增加下列权限 才能操作 相关 CRS 文件


![报表全部权限](/assets/10641cc489253440c4854817fa66bec5.png)


![image.png](/assets/f56abc5d35c772d4a8be75520a1eed7e.png)


CRS 文件权限


## **计算收益**： 


    首先在右上角点选'计算收益' ，输入报送年度与编号（公司名称） 后就会产生文件制作的任务工作（ 在**任务列表** Tab 页签）


    注意： 在计算收益视窗上，在外部报税文件上传的网站了会提供供一个编号【AEOI ID】的，公司名称就是券商的公司名称，要跟外部报税系统里面名称要一致的


![image.png](/assets/97460ef3323c179f50f7318ef172fc4b.png)


    就会产生一个的系统任务，当系统任务完成后（这会需要点时间产生全年资料），就会产生报送的参考数据，可以在 CRS 数据 Tab 页签上 查看或修改


![image.png](/assets/1d1ee9093b6b0708cae7f7119c526a05.png)


也可以在任务列表 Tab 页签上 点选 纪录右侧操作区的【详情】，会自动切换 **CRS 数据** Tab 页签，可以查询数据资料或编辑修改


![image.png](/assets/68825fcabff827e2abda7f46e849c22e.png)


可根据需要 删除纪录（不报送）或修改数据资料


![image.png](/assets/a17fde558a867f81edb961864d1796dc.png)


## **生成文件**： 


    当 CRS 数据 Tab 页签上 查看或修改正确后，可以点选右上角【生成文件】就会产生一个的系统任务来产生报税规格的文档（注意：这会需要点时间产生全年资料）


![image.png](/assets/ec41c739e293c8586bd54734220e0de0.png)


## **文件下载**


当生成文件任务完成后，就可以点选下载档案，去外部网站传送了


（系统会称生一个 xml 附档名的文档）


![image.png](/assets/8c238a3ebb135441033d92e56bd639d9.png)


![image.png](/assets/310cb60a6da2760f71b6c36a569f451e.png)


建议：此文件不要自行编辑，容易误操作造成文档规格不对，无法上传


## **生成文件上传**： 


将上传到外部系统的一个 XML 文件。这文件在外部系统上传以后，在外部系统它会返回一个文件序列号，可以在任务列表 Tab 页签这，更新状态把外部系统序列号输入


![image.png](/assets/eb53c36955a793dd4a48035fe1f0dfbd.png)


这等于 将 产生的 CRS 数据 打上这批次的 文件序列号，方便以后对数据查询或更正已报送资料


![image.png](/assets/a55aedfd2e62dd1f051849607aac1874.png)


## **更正资料再上传**： 


正常情况下，已报送资料其状态是‘文件已报送'


![image.png](/assets/4ddb33aa78bc215207df4af2666a73cb.png)


当发现数据需要变更时，可以点选右侧【编辑】来操作修改数据或【删除】已报送数据，此时后面一样操作产生文件并上传报送网站，同样 也会取的最新的文件序列号，也一样更新即可

