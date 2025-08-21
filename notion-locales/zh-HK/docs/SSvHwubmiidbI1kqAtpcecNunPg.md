---
slug: SSvHwubmiidbI1kqAtpcecNunPg
title: 系統介紹
sidebar_position: 1
---


# 系統介紹


# 概述


報表管理系統是用於證券公司和金融機構的關鍵系統，用於處理、管理和生成各種與證券業務相關的報表。該系統旨在幫助公司確保遵守監管要求，提供準確和及時的財務和業務信息。


Whale報表管理系統通常具有以下功能和特點：

1. 數據收集和整合：系統能夠從多個源頭（如交易系統、結算系統、帳戶系統、風控系統等）收集和整合數據。它可以從不同的業務部門和系統中提取數據，以生成全面的報表。
2. 報表打印功能：系統可以根據公司的需求生成各種報表，如財務報表、結算報表、風險報表、合規報表、交易報表、客戶報表、財政監管報表等。系統提供報表列自定義的功能，使用戶可以根據自己的需求生成特定列的報表。
3. 報表批量打印功能：系統提供批量報表的批次設置和管理功能，可設置多個打印批次並在批次中設置多個報表，可按不同的條件一次生產多張報表。
4. 報表打印操作日誌紀錄功能：紀錄查詢每次報表打印操作的日誌。
5. 操作輔助類功能：參數設置、標籤管理、我的收藏等功能，給用戶提供符合自身崗位需要的操作便利性。

# 報表清單


為方便使用者快速記憶報表的分類，WBO 報表的報表代號也以常規的部門英文名稱來方便記憶學習


| **部门名称**                            | 报表前缀 |
| ----------------------------------- | ---- |
| 結算部（Settlement Delivery Department） | SDR  |
| 交易部（Trade Department）               | TDR  |
| 財務部（Finance Department）             | FDR  |
| 客服部（Customer Service Department）    | CDR  |
| 風控部（Risk Management Department）     | RDR  |
| 合规部（Inner Compliance Department）    | IDR  |
| 財政資源規則（Financial Resource Rule）     | FRR  |
| 若有券商特殊報表前面會根據券商縮寫來定                 |      |


目前系統提供下列報表清單，後續會增加適當報表


## 結算報表


| **报表編號**   | **报表名称**                                                      | **報表說明**                                                  | **支持格式**      |
| ---------- | ------------------------------------------------------------- | --------------------------------------------------------- | ------------- |
| SDR002     | Client Cash Balance Report By CCY                             | 查詢當前或歷史的客戶資金明細幣種的信息                                       | CSV、PDF、EXCEL |
| SDR003     | Client Stock Holding Report(By Stock)                         | 按股票分組展示客戶持倉                                               | CSV、PDF、EXCEL |
| SDR003-1   | Client Stock Holding Report(By Client)                        | 按客戶帳戶分組展示客戶持倉                                             | CSV、PDF、EXCEL |
| SDR003-2   | Client Stock Holding Report(Real Time)                        | 查詢當前實時嘅證券持倉信息                                             | CSV、PDF、EXCEL |
| SDR003-3   | Client Stock Holding Report With Custodian Details(Real Time) | 帶倉庫信息、子倉位置的持倉報表，只能查詢當日的實時信息。為臨時報表                         | CSV、PDF、EXCEL |
| SDR003-4   | Stock Holding Report With Client Details                      | 帶一些客戶基礎信息的持倉報表，處理公司行動時和上手對賬用                              | CSV、PDF、EXCEL |
| SDR003-5   | Client Stock Holding For Data Migration                       | 在系統上線時，查詢數據遷移後的歷史持倉，只能展示已導入的字段。                           | CSV、PDF、EXCEL |
| SDR004     | Client Stock Location Report(By Stock)                        | 按股票分組展示客戶倉位的股票持倉                                          | CSV、PDF、EXCEL |
| SDR004-1   | Client Stock Location Report(By Client)                       | 按客戶分組展示客戶倉位的股票持倉                                          | CSV、PDF、EXCEL |
| SDR005     | Stock Location Report(By Stock)                               | 按股票分組展示公司所有股票的倉位持倉                                        | CSV、PDF、EXCEL |
| SDR005-1   | Stock Location Report(By Depot)                               | 按倉位分組展示公司所有股票的倉位持倉                                        | CSV、PDF、EXCEL |
| SDR006     | Monthly Trading Fee And Levy Report                           | 顯示客戶direct類交易的交易征費、交易費的明細及統計資訊                            | CSV、PDF、EXCEL |
| SDR006-1   | Monthly Trading Fee And Levy Summary Report                   | 交易征費、交易費報表                                                | CSV、PDF、EXCEL |
| SDR007     | Monthly Stamp Duty Report                                     | 顯示客戶某月港股direct交易的印花稅                                      | CSV、PDF、EXCEL |
| SDR008     | Stock Movement In-Out Report                                  | 除了交易以外當天所有股票進出                                            | CSV、PDF、EXCEL |
| SDR008-1   | Stock Movement In-Out Report(Real Time)                       | 查詢客戶實時的持倉變動信息（不包括交易）                                      |               |
| SDR009     | Turnover Listing Report                                       | 統計客戶一段時間內的傭金費用和成交量資訊,考慮交易取消                               | CSV、PDF、EXCEL |
| SDR010     | Daily Stamp Duty Report                                       | 查詢某天印花稅資訊                                                 | CSV、EXCEL     |
| SDR010-1   |  HKEX Daily Stamp Duty Form                                   | 查詢某天印花稅資訊                                                 | CSV、PDF、EXCEL |
| SDR011     | Daily Summary Report By HK                                    | 查詢港股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                            | CSV、PDF、EXCEL |
| SDR011-1   | Daily Summary Report By US                                    | 查詢美股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                            | CSV、PDF、EXCEL |
| SDR011-2   | Daily Summary Report By CN                                    | 查詢A股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                            | CSV、PDF、EXCEL |
| SDR011-3   | Daily Summary Report By Client Type HK                        | 查詢港股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                            | CSV、PDF、EXCEL |
| SDR011-4   | Daily Summary Report By SG                                    | 查詢新加坡市場某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                         | CSV、PDF、EXCE  |
| SDR011-5   | Daily Summary Report By VA                                    | 查詢虛擬某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                            | CSV、PDF、EXCE  |
| SDR011-6   | Daily Summary Report By ID                                    | 查詢印尼市場某天B/C買賣成交匯總資訊，包括成交金額，各種費用等                          | CSV、PDF、EXCE  |
| SDR012     | Monthly Trading Summary Report                                | 查詢某月的每一天的成交匯總資訊，包括成交金額，淨傭金，各種費用等                          | CSV、PDF、EXCEL |
| SDR013     | Client Bonds Holding Report(By Client)                        | 按客戶帳戶分組展示客戶債券持倉                                           | CSV、PDF、EXCEL |
| SDR014     | Interest Detail Report                                        | 查詢某月關於客戶利息、客戶罰息、客戶每日的利息及當月累計利息的資金流水資訊                     | CSV、PDF、EXCEL |
| SDR015     | UnMatched Report                                              | 配對結果報表，顯示客戶訂單和券商的訂單差異                                     | CSV、PDF、EXCEL |
| SDR015-2   | Trade UnMatched Report                                        | 實時交易對賬報表，清算前檢查任務完成後可以查詢                                   | CSV、PDF、EXCEL |
| SDR016     | ATI Settlement Report                                         | 報表展示某個交收日的滿足條件的合約，對應的ATI淨買入/淨賣出資訊。以及相關客戶的ATI明細            | CSV、PDF、EXCEL |
| SDR017     | Client Bargain Report                                         | 客戶合約詳情表                                                   | CSV、PDF、EXCEL |
| SDR018     | Bargain Detail Report-HK                                      | 交易合約資訊明細表-港股                                              | CSV、PDF、EXCEL |
| SDR018-1   | Bargain Detail Report-US                                      | 交易合約資訊明細表-美股                                              | CSV、PDF、EXCEL |
| SDR018-2   | Bargain Detail Report-USOP                                    | 交易合約資訊明細表-期權                                              | CSV、PDF、EXCEL |
| SDR018-3   | Bargain Detail Report-CN                                      | 交易合約資訊明細表-A股                                              | CSV、PDF、EXCEL |
| SDR018-4   | Bargain Detail Report-SG                                      | 交易合約資訊明細表-新加坡股票                                           | CSV、PDF、EXCEL |
| SDR018-5   | Bargain Detail Report-VA                                      | 交易合約資訊明細表-虛擬資產                                            | CSV、PDF、EXCEL |
| SDR018-6   | Bargain Detail Report-ID                                      | 交易合約資訊明細表-印尼市場                                            | CSV、PDF、EXCEL |
| SDR019     | Outstanding Settlement Report                                 | 待交收合約報表                                                   | CSV、PDF、EXCEL |
| SDR021     | Daily Broker Settlement Report(By Broker)                     | 經紀商當日交收報表                                                 | CSV、PDF、EXCEL |
| SDR023-01  | CA Announcement Event List                                    | 展示當前公司行動CA預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-03  | BE Announcement Event List                                    | 展示當前公司行動BE預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-04  | DS Announcement Event List                                    | 展示當前公司行動DS預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-05  | OO Announcement Event List                                    | 展示當前公司行動OO預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-06  | EO Announcement Event List                                    | 展示當前公司行動EO預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-07  | RS Announcement Event List                                    | 展示當前公司行動RS預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-08  | ER Announcement Event List                                    | 展示當前公司行動ER預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-09  | TU Announcement Event List                                    | 展示當前公司行動TU預告和方案                                           | CSV、PDF、EXCEL |
| SDR023-10  | TC Announcement Event List                                    | 展示當前公司行動TC預告和方案                                           | CSV、PDF、EXCEL |
| SDR024     | Corporate Action Past Due Report                              | 展示當天需要執行的公司行動，CA在當日日終後操作。注意：需要以上手實際執行為準，只取最近5個自然日的數據；實時報表 | CSV、PDF、EXCEL |
| SDR025     | Stock Reconciliation Report                                   | 根據託管商子倉的持倉對賬                                              | CSV、PDF、EXCEL |
| SDR026     |  Client Trustee Balance Report                                | 客戶托管資金餘額報表                                                | CSV、PDF、EXCEL |
| SDR027     | CCASS Securities Market Value Report                          | CCASS的中證券市值報表，以及停牌超過3天的股票列表及市值情況                          | CSV、PDF、EXCEL |
| SDR028     | IPO Detail Report                                             | 獲取客戶當前歷史IPO申購資訊（包括白表黃表數據），實時報表                            | CSV、PDF、EXCEL |
| SDR028-1   | IPO Infos                                                     | 統計一段時間內IPO的信息及訂單                                          | CSV、PDF、EXCEL |
| SDR029     | Stock Frozen Report                                           | 股票凍結報表                                                    | CSV、PDF、EXCEL |
| SDR030     | Cash Frozen Report                                            | 現金凍結報表                                                    | CSV、PDF、EXCEL |
| SDR032     | Client Trade Amendment Report                                 | 顯示訂單被動修改紀錄                                                | CSV、PDF、EXCEL |
| SDR034     | Client Margin Ratio Report                                    | 客戶特殊保證金比率                                                 | CSV、PDF、EXCEL |
|            |                                                               |                                                           |               |
| SDR040-01  | Corporation Action Detail Report(TM)                          | 公司行動方案明細（TM）                                              | CSV、PDF、EXCEL |
| SDR040-02  | Corporation Action Detail Report(DS)                          | 公司行動方案明細（DS）                                              | CSV、PDF、EXCEL |
| SDR040-03  | Corporation Action Detail Report(OO/EO/RS/ER/TU/TC)           | 公司行動方案明細（OO/EO/RS/ER/TU/TC）                               | CSV、PDF、EXCEL |
| SDR040-09  | Corporation Action Detail Report(BE/IP/SO)                    | 公司行動方案明細（BE/IP/SO）                                        | CSV、PDF、EXCEL |
| SDR040-10  | Corporation Action Detail Report(BE With Selection)           | 公司行動方案明細（BE With Selection）                               | CSV、PDF、EXCEL |
| SDR040-11  | Corporation Action Detail Report(CA)                          | 公司行動方案明細（CA）                                              | CSV、PDF、EXCEL |
| SDR042     | BE Client Dividend With Scrip Option(Email)                   | 導出選股選息明細列表給對應的客戶發權益郵件                                     | CSV、PDF、EXCEL |
| SDR048     | Broker Contract Details                                       | 代理商合約信息                                                   | CSV、PDF、EXCEL |
| SDR049     | Illiquid Stock Summary Report                                 | 列印非速動證券資訊                                                 | CSV、PDF、EXCEL |
| SDR051     | Short Sell Stock Report                                       | 顯示客戶持倉為負的股票資訊                                             | CSV、PDF、EXCEL |
| SDR052     | Short Sell Trade Report-US                                    | 美股市場沽空的合約信息                                               | CSV、PDF、EXCEL |
| SDR058-01  | HK Custodian Fee Group by Client V1                           | 港股托管費                                                     | CSV、PDF、EXCEL |
| SDR058-02  | HK Custodian Fee Group by Client V2                           | 港股托管費                                                     | CSV、PDF、EXCEL |
| SDR059     | Client Trading Summary Report                                 | 按時間區間查詢客戶的交易情況                                            | CSV、PDF、EXCEL |
| SDR060     | Client Trading Detail Report                                  | 查詢客戶交易費用明細                                                | CSV、PDF、EXCEL |
| SDR061     | Short Sell Borrow Fee Detail                                  | 融券利息明細表                                                   | CSV、PDF、EXCEL |
| SDR062     | Short Sell Borrow Fee Summary                                 | 融券利息匯總表                                                   | CSV、PDF、EXCEL |
| SDR063     |  List Of Stock Holdings Suspended                             | 持倉股票停牌清單                                                  | CSV、PDF、EXCEL |
| SDR064     | Daily Trading Report By HK                                    | 香港市場客戶合約詳情表，包含對手方成交明細                                     | CSV、PDF、EXCEL |
| SDR070     | OTCR Report                                                   | OTCR匯報報表                                                  | EXCEL         |


## 財務報表


| **报表編號** | **报表名称**                                          | **報表說明**              | **支持格式**       |
| -------- | ------------------------------------------------- | --------------------- | -------------- |
| FDR001   | Client Cash Balance Summary Report By Client Type | 查詢當前或歷史的客戶資金按本位幣匯總的資訊 | CSV、PDF、EXCEL  |
| FDR002   | Client Cash Balance Detail Report By CCY          | 查詢當前或歷史的客戶資金明細幣種的資訊   | CSV、PDF、EXCEL  |
| FDR002-1 | Client Cash Balance Detail Report By CCY(Format2) | 查詢指定帳務日期客戶分幣種的資金信息    | CSV、PDF、EXCEL  |
| FDR002-2 | Client Cash Balance Detail Report By CCY(Format3) | 查詢指定帳務日期客戶分幣種的資金信息    | CSV、PDF、EXCEL  |
| FDR003   | Client Cash Balance Detail Report By Client       | 查詢當前或歷史的客戶資金明細幣種的資訊   | CSV、PDF、EXCEL  |
| FDR004   | Settle Cash Movement In-Out Report By CCY         | 結算現金餘額變動明細記錄          | CSV、PDF、EXCEL  |
| FDR005   | Cash Movement In-Out Report By CCY                | 資金變動流水                | CSV、PDF、EXCEL  |
| FDR006   | Daily Trial Balance Report                        | 每日成交金額/費用/應收應付款匯總     | CSV、PDF、EXCEL  |
| FDR009   |  AE Performance Report                            | 經紀人佣金報表               | CSV、PDF、EXCEL  |
| FDR009-1 |  AE Performance Report By Client                  | 按照年月日統計經紀人下的客戶佣金      | CSV、PDF、EXCEL  |
| FDR012   | FD Commissions detail                             | FD分成明細                | CSV、PDF、EXCEL  |
| FDR013   | FD Commissions Daily Report With AE               | FD分成明細，按經紀人按日匯總       | CSV、PDF、EXCEL  |
| FDR014   | FD Commissions Monthly Report With AE             | FD分成明細，按經紀人按月匯總       | CSV、PDF、EXCEL  |
| FDR015   | FD Commissions Yearly Report With AE              | FD分成明細，按經紀人按年匯總       | CSV、PDF、EXCEL  |
| FDR016   | FD Commissions Monthly Report Without AE          | FD分成明細，按月匯總           | CSV、PDF、EXCEL  |
| FDR017   | Cash In-Out Detail Report By CCY                  | 實時的現金變動報表             | CSV、PDF、EXCEL  |
| FDR018   | Client Cash Balance Report By Client（Real Time ）  | 客戶分幣種的現金餘額實時報表        | CSV、PDF、EXCEL  |
| FDR019   | Cash Movement Summary Report                      | 客戶資金變得分類匯總表           | CSV、PDF、EXCEL  |
| FDR020   | Commission Rebate Report                          | 經紀人佣金匯總               | CSV、PDF、EXCEL  |
| FDR020-1 | Commission Rebate Detail Report                   | 經紀人佣金明細               | CSV、PDF、EXCEL  |
| FDR022   | Cash Movement Check Report                        | 資金變動檢查表               | CSV、PDF、EXCEL  |
| FDR023   | Client Remaining Cash(USD)                        | 不能動用的客戶存管資金           | CSV、PDF、EXCEL  |


## 客戶報表


| **报表編號** | **报表名称**                       | **報表說明**             | **支持格式**      |
| -------- | ------------------------------ | -------------------- | ------------- |
| CDR001   | Client Master Listing Report   | 顯示客戶帳戶基本資料           | CSV、PDF、EXCEL |
| CDR001-1 | BCAN Information Report        | BCAN資訊報表             | CSV、PDF、EXCEL |
| CDR009   | Stock Information Excel Export | 顯示股票重要欄位訊息           | CSV、PDF、EXCEL |
| CDR008   |  Allow Trading Status Report   | 證券可買賣標誌信息            | CSV、PDF、EXCEL |
| CDR010   | AE Listing                     | 查詢AE 經紀人 基本資料        | CSV、PDF、EXCEL |
| CDR013   | Member Agent Person            | 客戶在券商記錄的代理人信息，以客戶為維度 | CSV、PDF、EXCEL |
| CDR014   | Member Related Person          | 客戶在券商記錄的关系人信息，以客戶為維度 | CSV、PDF、EXCEL |
| CDR015   | Client Related Group Report    | FRR關聯組客戶信息查詢         | CSV、PDF、EXCEL |


## FRR報表


| **报表編號**  | **报表名称**                                                                         | **報表說明**                                          | **支持格式**      |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------------------- | ------------- |
| FRR001    | Cash Client Receivable Aging Report(Form 1)                                      | 現金客戶延期交收應收款分析                                     | CSV、PDF、EXCEL |
| FRR001-1  | Cash Client Receivable Aging Report By CCY(Form 1)                               | 現金客戶延期交收應收款分析 欠款統計口徑：資金賬戶分幣種的已交收金額                | CSV、PDF、EXCEL |
| FRR002    | Market Unsettled ARAP Report（Form 1）                                             | 市場角度統計待交收證券的金額                                    | CSV、PDF、EXCEL |
| FRR003    | Margin Clients With The Largest Unadjusted Loan Balances Report
（Form 4 Table 1) | 客戶資金資訊，證券市值資訊                                     | CSV、PDF、EXCEL |
| FRR004    | Margin Client With Adjusted Loan Balances Report（Form 4 Table 2)                 | 所有Margin客戶資產/流動性詳情:統計Margin客戶，其負債及資產流動性明細及分類匯總。   | CSV、PDF、EXCEL |
| FRR004-1  | Margin Clients With Adjusted Loan Balances Report By Stock (Form 4 Table 2)      | 統計Margin客戶，其負債及資產流動性明細及分類匯總，並關聯股票                 | CSV、PDF、EXCEL |
| FRR005    | Ananlysis of Securities Collateral Report（Form 5 （A))                            | 以股票的維度來查看:所有Margin客戶的股票保證金情況:統計search_str=M的客戶數據。 | CSV、PDF、EXCEL |
| FRR006    | FRR006 - Rolling Balance Cash Client Analysis Report(Form 6)                     | 現金帳戶欠款客戶                                          |               |
| FRR007    | Profit And Loss Account Report（Form 7）                                           | 客戶成交量和傭金資訊                                        | CSV、PDF、EXCEL |
| FRR008    | Analysis of Client Securities Report（Form 8 Table1）                              | 統計CCASS及其他託管商不同倉位上的市值                             | CSV、PDF、EXCEL |
| FRR008-1  | Analysis of Client Securities Report By CCY(Form 8 Table1)                       | 分幣種統計 CCASS 及其他托管商不同倉位上的市值                        | CSV、PDF、EXCEL |
| FRR008-2  | Analysis of Client Securities Report By CCY-2(Form 8 Table1)                     | 分幣種統計 CCASS 及其他托管商不同倉位上的市值                        | CSV、PDF、EXCEL |
| FRR009    | Analysis of Client Segregated Funds Report(Form 8 Table 2)                       | 應向客戶支付的款項及須獨立存放的客戶款項報表                            | CSV、PDF、EXCEL |
| FRR010    | Active Client Summary Report (Form 12)                                           | 活躍客戶數量統計                                          | CSV、PDF、EXCEL |
| FRR010-1  |  Active Client Detail Report (form 12)                                           | 活躍客戶賬戶及資產明細                                       | CSV、PDF、EXCEL |
| FRR011    | Option FRR Report                                                                | 期權FRR                                             | CSV、PDF、EXCEL |
| FRR012    | Monthly Options Trade Summary Report                                             | 期權月度交易量                                           | CSV、PDF、EXCEL |


## 風控報表


| **报表編號** | **报表名称**                                         | **報表說明**                                      | **支持格式**      |
| -------- | ------------------------------------------------ | --------------------------------------------- | ------------- |
| RDR001   | Client Portfolio Details                         | 統計在發生日起以及2個帳務日，客戶的總資金、總市值、總抵押值、追保金額，以及持倉明細等信息 | CSV、PDF、EXCEL |
| RDR003   | Margin Call Summary Report                       | 分析統計客戶歷史按本位幣匯總的追保資訊                           | CSV、PDF、EXCEL |
| RDR003-1 | Margin Call Summary(Margin Client) Report        | 融資賬戶的日終後追保金額                                  | CSV、PDF、EXCEL |
| RDR005   | Client Asset Summary Report By Client Type       | 分析統計客戶歷史的資產資訊                                 | CSV、PDF、EXCEL |
| RDR006   | Client Asset Detail Report By CCY                | 按幣種分組分析客戶的資產細節                                | CSV、PDF、EXCEL |
| RDR006-1 | Client Asset Detail Report By Client             | 按客戶分組分析客戶的資產細節                                | CSV、PDF、EXCEL |
| RDR007   | Client Trading Or Credit Limit Report            | 客戶交易額度和信用額度報表                                 | CSV、PDF、EXCEL |
| RDR008   | Top N Market Value of Margin-Market Value Report | Top N 證券市值和保證金市值報表                            | CSV、PDF、EXCEL |
| RDR010   | Concentration Risk                               | 客戶股票的市值占整體持倉的佔比以及發行市值的佔比                      | CSV、PDF、EXCEL |
| RDR011   | Margincall Continuous Unpaid Amount              | 連續追保報表                                        | CSV、PDF、EXCEL |
| RDR012   | MarginCall Aging Report                          | 實時追保紀錄                                        | CSV、PDF、EXCEL |
| RDR014   | Stock Rank Report                                | 股票級別佔比                                        | CSV、PDF、EXCEL |
| RDR016   | User Daily Approval Report                       | 風控額度批核報表                                      | CSV、PDF、EXCEL |
| RDR019   |  Margin Loan Report                              | 保證金貸款報表                                       | CSV、PDF、EXCEL |
| RDR021   | Bad Credit Report By Client                      | 客戶不良信用紀錄                                      | CSV、PDF、EXCEL |
| RDR022   |  Stock Margin Ratio Report                       | 實時股票保證金比例                                     | CSV、PDF、EXCEL |
| RDR023   | Client Overdue Cash Balance By CCY               | 實時統計客戶分幣種的欠款                                  | CSV、PDF、EXCEL |
| RDR024-1 | Exposure By Clients                              | 客戶風險敞口                                        | CSV、PDF、EXCEL |
| RDR024-2 | Exposure By Stocks                               | 股票風險敞口                                        | CSV、PDF、EXCEL |
| RDR024-3 | Exposure By Exchanges                            | 分交易統計風險敞口                                     | CSV、PDF、EXCEL |
| RDR025   | Client Borrowing Details                         | 客戶借貸明細                                        | CSV、PDF、EXCEL |
| RDR026   | Stock Borrowing calculation                      | 股票借貸明細                                        | CSV、PDF、EXCEL |
| RDR027   | Client Position Summary                          | 客戶持倉及風控匯總信息                                   | CSV、PDF、EXCEL |
| RDR028   | Client Position Details                          | 客戶持倉明細                                        | CSV、PDF、EXCEL |
| RDR029   | Credit Client Info Review                        | 客戶融資額度重檢報表                                    | CSV、PDF、EXCEL |
| RDR030   | Option Securities Recovery Record                | 期權到期日正股不足以行權的追收記                              | CSV、PDF、EXCEL |
| RDR032   | Options Margin Report                            | 期權保證金報表，按照對應正股匯總                              | CSV、PDF、EXCEL |
| RDR033   | FD/AE Overview                                   | FD/AE 客戶總覽                                    | CSV、PDF、EXCEL |
| RDR034   | Company Loan Limit Overview                      | 公司緯度授信額度總覽                                    | CSV、PDF、EXCEL |
| RDR035   | Margin Risk Index                                | 保證金風險指標                                       | CSV、PDF、EXCEL |
| RDR036   | Stock Group Monitoring                           | 股票組監控                                         | CSV、PDF、EXCEL |
| RDR037   | Client Financing Monitoring                      | 客戶融資監控                                        | CSV、PDF、EXCEL |
| RDR038   | Daily Margin Call Report                         | margin call report                            | CSV、PDF、EXCEL |
| RDR039   | Stress Test                                      | 日常風控報表                                        | CSV、PDF、EXCEL |
| RDR040   | Option Composed Margin                           | 期權組合保證金報表                                     | CSV、PDF、EXCEL |


## 合規報表


| **报表編號** | **报表名称**                                                                           | **報表說明**                                             | **支持格式**      |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------- |
| IDR001   | S181 Trade Report                                                                  | 按照 SFC 的要求模版提交客戶交易                                   | CSV、PDF、EXCEL |
| IDR002   | S181 Holding Report                                                                | 按照 SFC 的要求模版提交客戶持倉                                   | CSV、PDF、EXCEL |
| IDR008   | SPAC Post Trade Report                                                             | 指定時間段內特定股票交易的成交清單                                    | CSV、PDF、EXCEL |
| IDR003   | Client Trade With IP(SFC)                                                          | 指定時間段內某個客戶或某只股票的交易清單，帶 IP                            | CSV、PDF、EXCEL |
| IDR011   | Top N Client Turnover                                                              | 10大客戶交易總額                                            | CSV、PDF、EXCEL |
| IDR012   | Top N Order Turnover                                                               | 最高10大訂單成交量                                           | CSV、PDF、EXCEL |
| IDR013   | Top N Client No. of Transactions                                                   | 10大客戶交易次數                                            | CSV、PDF、EXCEL |
| IDR014   | Top N Price Deviation In Percentage                                                | 成交價參數                                                | CSV、PDF、EXCEL |
| IDR015   | Y trade                                                                            | Y盤                                                   | CSV、PDF、EXCEL |
| IDR016   | Transactions Report By Staff                                                       | 员工交易报表                                               | CSV、PDF、EXCEL |
| IDR017   | Transactions Report By High Risk Client                                            | 高度風險客戶交易报表                                           | CSV、PDF、EXCEL |
| IDR018   | Matched trades Wash trades                                                         | 配對交易 虛售交易                                            | CSV、PDF、EXCEL |
| IDR019   | Not genuine orders                                                                 | 非真正訂單                                                | CSV、PDF、EXCEL |
| IDR020   | Re-activation of dormant account                                                   | 重啟不動戶                                                | CSV、PDF、EXCEL |
| IDR026   | The proportion of customer transaction volume                                      | 客戶成交量佔比                                              | CSV、PDF、EXCEL |
| IDR027   | Deliberately push up or down the closing price                                     | 刻意推高或推低市價                                            | CSV、PDF、EXCEL |
| IDR028   | Transactions done at At-auction period                                             | 競價時段成交                                               | CSV、PDF、EXCEL |
| IDR029   | IPO share trades on first listed date                                              | 新股首日上市交易                                             | CSV、PDF、EXCEL |
| IDR038   | Suspicious Trading Report                                                          | 根据成交明细的维度来筛选，同一客户，成交时间相同（秒级），成交数量相等，成交价格相同，买卖方向相反的数据 | CSV、PDF、EXCEL |
| IDR040   | Transaction Monitoring - cash in and out（including stock in and out）-normal client | 出入金的交易監察（包括股票轉入和轉出）-一般用戶                             | CSV、PDF、EXCEL |
| IDR041   | Transaction Monitoring - cash in and out（including stock in and out）-watchlist     | 出入金的交易監察（包括股票轉入和轉出）-watchlist                        | CSV、PDF、EXCEL |


## 交易報表


| **报表編號**  | **报表名称**                                              | **報表說明**                                                | **支持格式**      |
| --------- | ----------------------------------------------------- | ------------------------------------------------------- | ------------- |
| TDR001-1  | Daily Client Order Report By Client                   | 顯示當天在指定條件下，所有客戶的訂單，按客戶分組展示                              | CSV、PDF、EXCEL |
| TDR001-2  | Daily Client Order Report By Stock                    | 顯示當天在指定條件下，所有經紀人客戶的訂單，按股票分組展示                           | CSV、PDF、EXCEL |
| TDR001-3  | Daily Client Order Report By AE                       | 顯示當天在指定條件下，所有經紀人客戶的訂單，按經紀人分組展示                          | CSV、PDF、EXCEL |
| TDR001-3  | Daily Client Order Report By BuySell                  | 顯示當天在指定條件下，所有經紀人客戶的訂單，按買賣分組展示                           | CSV、PDF、EXCEL |
| TDR004    | Trade Detail Report                                   | 顯示指定條件下所有成交的訂單的信息，並會有各幣種成交的統計                           | CSV、PDF、EXCEL |
| TDR005    | Trade Summary Report                                  | 顯示指定條件下所有訂單的資訊。並對交易的數據進行匯總                              | CSV、PDF、EXCEL |
| TDR006    | Client History Order Report By BuySell                | 顯示指定條件下所有訂單的信息                                          | CSV、PDF、EXCEL |
| TDR007    | Cross Trade Report                                    | 顯示指定條件下所有交叉盤交易的訂單的信息                                    | CSV、PDF、EXCEL |
| TDR013    | User Daily Turnover Report                            | 根據操作員及幣種顯示當天成交及未成交金額                                    | CSV、PDF、EXCEL |
| TDR020    | Third Party Operated Account Trade Listing            | 顯示第三方授權帳戶成交記錄報表                                         | CSV、PDF、EXCEL |
| TDR022    | IP address and Transaction Report                     | 带客户 IP 地址的交易记录报表                                        | CSV、PDF、EXCEL |
| TDR023-1  | Trades for Clients with the Same Stock                | 統計交易訂單維度，相同下單日期，相同標的，訂單狀態成交、部分成交，統計數量大於等於 2 的資料         | CSV、PDF、EXCEL |
| TDR023-2  | Trades for Clients with the Same Address (SG Clients) | 統計交易訂單維度，相同下單日期，相同標的，相同郵編的用戶，訂單狀態成交、部分成交，統計數量大於等於 2 的資料 | CSV、PDF、EXCEL |
| TDR024    | Clients Tagged to Same Licensed Representative        | 同一代碼，不同客戶的訂單創建時間差小於 5 分鐘的數據                             | CSV、PDF、EXCEL |
| TDR025    | Clients acting in concert                             | 統計提交開戶時間相同（日）的用戶，訂單用創建為同一天，交易同一隻股票的數據                   | CSV、PDF、EXCEL |
| TDR026    | Ramping/Price Driver                                  | 統計成交價格大於等於當日開盤價的 120% 或小於等於當日開盤價 80% 的訂單                | CSV、PDF、EXCEL |
| TDR027    | Wash Trades (No Change in Beneficial Ownership)       | 統計某個交易日，同一個客戶，同一隻股票的匯總成交額（包含買賣）/ 市場成交額 ≥ 1% 的成交明細       | CSV、PDF、EXCEL |


# 功能操作


# 一、基礎輔助功能及頁面佈局介紹


## 報表業務分類


可以在右側切換業務報表分類。中間區會顯示可執行到報表清單列表


![image.png](/assets/fd5312c21ba2b9550f1e9aecec4892f8.png)


每個報表項目會顯示報表項目名稱與 報表簡要說明 與最近更新版本時間


![image.png](/assets/01cda19e1514c53c4b64816ee0fa1c66.png)


報表項目旁若出現'實時'標籤圖示，表示該報表是實時數據報表資料  


![image.png](/assets/a2f47dbca811a93c95035f05e7d7d269.png)


## 報表標籤分類


也可以編輯自己的報表標籤說明，可以對單一報表赋予相應的「標籤」，同时系统會根據「標籤」對相關報表做自動分類，便於快速查找


![image.png](/assets/cf888fd2dbc5ab3914c429ed4ba36e69.png)


此時可以選擇現有標籤（支持多個標籤同時存在） 或 重新 新建一個 標籤


![image.png](/assets/a7dc546d053e12378ef5c3ccb916bc9d.png)


## 標籤管理


同時左上角 提供標籤管理功能，可以維護標籤內容：


删除標籤后，则該標籤下所有報表与之關聯關係都会被清除


修改標籤名稱後，標籤名稱會直接變更


![image.png](/assets/07e0d89c390fd856649b43782694c92d.png)


![image.png](/assets/d3af552554bd981c7605cb87c2e7b0fb.png)


## 報表收藏


也提供 星狀圖示報表收藏，點選後就會出現在 自己的「我的收藏」入口菜單區內，方便快速點選操作


![image.png](/assets/7f59832a8d5d78524158243a299c58d3.png)


## 參數設置

- 可以通過報表參數設置完成部分報表需要的參數設置

![參數設置入口](/assets/0c6b20c83c8819e085a573f34f52b225.png)


![參數設置](/assets/61af306ac62941c49b8102cd72c1a888.png)


## 查看更新日誌

- 通過更新日誌用戶可以及時了解Whale系統報表的最新更新紀錄

![image.png](/assets/0af5e27b940b115cbdecd922ddff3f9f.png)


# 二、報表打印功能


> ⚓ 菜單入口：報表管理 >報表打印


## 報表數據查詢


報表打印首頁提供兩種報表選擇進入方式 


**方式一：** 


    在搜索欄輸入報表編號的關鍵字，可以查詢對應的報表展示選擇，例如：輸入 SDR003 則下拉顯示 SDR003 相關的報表，點擊所需報表便可以進入詳細的報表頁。（注意：輸入報表編號作搜索，英文字母必須為大寫）


![image.png](/assets/9920d74b14283c0a9c16e15b6b154137.png)


**方式二**：


    點擊所需報表名稱，展開後可選擇對應的報表進入詳細的報表頁面


![image.png](/assets/3b6064c8e8b2c71055a89e52c45f114d.png)


單一報表詳情的上方區域為報表條件欄位查詢區，可按照不同條件進行報表詳情篩選


![image.png](/assets/f95e3860f75234a29f3b57d872cf3ea1.png)


## 報表預覽

- 如果報表配置了支持 PDF 格式則可以預覽檔案
- 預覽只支持預覽前 30 條明細記錄生成的檔案；
- 預覽介面頁可以選擇下載或者列印。

> 🚫 因為預覽只顯示部分數據，所以請注意要數據是否完整後再進行下載；後期會優化在預覽檔案裏說明是否是完整數據


![image.png](/assets/3008374d89fb9ddab762614f74a64060.png)


## 報表導出


![image.png](/assets/e88a9d55ce010257d66c9d73052269ed.png)


導出功能可以選擇導出的檔案類型，大部分報表支持CSV、PDF、EXCEL格式，部分特定報表只支持特定的格式，詳情見報表列表

- CSV 默認支持 ：按頁面列表展示的列欄位導出
- PDF 配置支持 ：按定義的列印模板欄位導出，支持分組總計以及報表組合
- EXCEL 配置支持： 按定義的列印模板欄位導出，支持分組總計以及報表組合

點擊後會會自動產生一個報表導出任務，後續可以在導出列表頁面查看進度並作下載操作


![image.png](/assets/eba3596a8b775268bfc5752d28eb586c.png)


## 導出文件


> ⚓ 報表管理 >導出列表


可以查詢當前登錄用戶所導出的報表文檔，可以【刪除】或直接【下載】


![image.png](/assets/d5eda81b640f5e62a1a9a3c5c5b577e1.png)


# 三、批量打印功能


> ⚓ 菜單入口：報表管理 >批量打印


## 設置打印批次


系统也支持批量打印报表功能，可以自行新增一个批量作业，点选右上方【新增】，增加批量打印名称与批量报表组成


![image.png](/assets/58d0879589641783f028fd40e8982283.png)


批量打印名称确认后，可以添加批量的报表组成（选报表名称/打印方式），打印条件会根据不同报表，自动显示相关栏位，可以根据需要自行设置


![image.png](/assets/9c2a3530911572e299b1faa28b929ad5.png)


同时根据不同的报表条件栏位，也可以设制不同条件：在批次详情面，点击【添加】进入报表添加设置页面，选择报表并设置报表条件


 例：如果是日期则如下选择项：

    - ledger date    當前帳務日期
    - Last ledger date 上一个帳務日期
    - year start date     年初第一天
    - month start date    本月初第一天
    - last month end date   上月最后一天
    - last month begin date 上月最后一天
    - system date  當前自然日
    - last system date 上一自然日
    - Before last ledger date 上上一个帳務日期
    - Before last system date 上上一自然日

![image.png](/assets/c92bc4679a100a23bd853b8dbb8d9345.png)


## 編輯打印批次


批次詳情可以进行下列操作：

1. 列表内点击【修改】进入报表条件修改页面
2. 列表内点击【导出】可以按条件导出单个报表
3. 列表内点击【删除】可以移除批次中的报表
4. 报表批量打印同一批次支持添加相同的报表，方便相同报表但列印参数不同需要

![批次詳細](/assets/77c222498d146e5de70a30862c4f2c6f.png)


## 批量打印


可以在现有批量作业纪录右侧功能区，操作【详情】或【批量导出】或【删除】

- 詳情：進入批次詳細列表頁面
- 刪除：刪除批次
- 批量導出：提交批次文件生成任務

![批次列表頁面](/assets/0a32e42025dd44cf81a453115fff4f62.png)


## 導出批量文件


若批量导出执行后，可以在导出列表作业上查看 ，也可以将文件夹整个下载操作


![image.png](/assets/3f6f7f323c5ae93b848e612938f91b20.png)


可以点选详情，查看每一批量打印的单一报表，或单一报表下载


![image.png](/assets/0647488bafdd01787e85d4bfb6ebfc8d.png)


# 四、導出日誌


> ⚓ 菜單入口：報表管理>導出日誌


查詢報表列印的歷史操作記錄

- 「單個列印」查詢單個報表打印的歷史操作記錄
- 「批量列印」查詢批量報表打印的歷史操作記錄

![image.png](/assets/db70b6eb56e3b54ac4e6bec7d0476049.png)


# 五、CRS文件生成


> ⚓ 菜單入口：報表管理>CRS文件生成


## 功能操作說明


本作業提供年度 CRS 文件的操作處理，支持新消息與更正消息類型


注意： 租戶需要 增加下列權限 才能操作 相關 CRS 文件


![報表全部權限](/assets/10641cc489253440c4854817fa66bec5.png)


![image.png](/assets/f56abc5d35c772d4a8be75520a1eed7e.png)


CRS文件權限


## **計算收益**： 


    首先在右上角點選'計算收益' ，輸入報送年度與編號（公司名稱） 後就會產生文件製作的任務工作（ 在**任務列表** Tab 頁籤）


    注意： 在计算收益視窗上，在外部报税文件上傳的網站了會提供供一個编号【AEOI ID】的，公司名稱就是券商的公司名稱，要跟外部報税系统里面名稱要一致的


![image.png](/assets/97460ef3323c179f50f7318ef172fc4b.png)


    就會產生一個的系統任務，當系統任務完成後（這會需要點時間產生全年資料），就會產生報送的參考數據，可以在 CRS 數據 Tab 頁籤上 查看或修改


![image.png](/assets/1d1ee9093b6b0708cae7f7119c526a05.png)


也可以在任務列表 Tab 頁籤上 點選 紀錄右側操作區的【詳情】，會自動切換 **CRS 數據** Tab 頁籤，可以查詢數據資料或編輯修改


![image.png](/assets/68825fcabff827e2abda7f46e849c22e.png)


可根據需要 刪除紀錄（不報送） 或修改數據資料


![image.png](/assets/a17fde558a867f81edb961864d1796dc.png)


## **生成文件**： 


    當 CRS 數據 Tab 頁籤上 查看或修改正確後，可以點選右上角【生成文件】就會產生一個的系統任務來產生報稅規格的文檔（注意：這會需要點時間產生全年資料）


![image.png](/assets/ec41c739e293c8586bd54734220e0de0.png)


## **文件下載**


當生成文件任務完成後，就可以點選下載檔案，去外部網站傳送了


（系統會稱生一個 xml 附檔名的文檔）


![image.png](/assets/8c238a3ebb135441033d92e56bd639d9.png)


![image.png](/assets/310cb60a6da2760f71b6c36a569f451e.png)


建議： 此文件不要自行編輯，容易誤操作造成文檔規格不對，無法上傳


## **生成文件上傳**： 


將上傳到外部系统的一个 XML 文件。这文件在外部系统上傳以后，在外部系统它會返回一个文件序列号，可以在任務列表 Tab 頁籤這，更新状态把外部系统序列号输入


![image.png](/assets/eb53c36955a793dd4a48035fe1f0dfbd.png)


這等于 將 產生的 CRS 數據 打上這批次的 文件序列號，方便以後對數據查詢或更正已報送資料


![image.png](/assets/a55aedfd2e62dd1f051849607aac1874.png)


## **更正資料再上傳**： 


正常情況下，已報送資料其狀態是‘文件已報送'


![image.png](/assets/4ddb33aa78bc215207df4af2666a73cb.png)


當發現數據需要變更時，可以點選右側 【編輯】 來操作修改數據或 【刪除】 已報送數據，此時後面一樣操作產生文件並上傳報送網站，同樣 也會取的最新的文件序列號，也一樣更新即可

