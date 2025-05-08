---
title: 系統介紹
slug: SSvHwubmiidbI1kqAtpcecNunPg
sidebar_position: 1
---


# 系統介紹

# 概述

報表管理系統是用於證券公司和金融機構的關鍵系統，用於處理、管理和生成各種與證券業務相關的報表。該系統旨在幫助公司確保遵守監管要求，提供準確和及時的財務和業務信息。

Whale 報表管理系統通常具有以下功能和特點：

1. 數據收集和整合：系統能夠從多個源頭（如交易系統、結算系統、帳戶系統、風控系統等）收集和整合數據。它可以從不同的業務部門和系統中提取數據，以生成全面的報表。
2. 報表打印功能：系統可以根據公司的需求生成各種報表，如財務報表、結算報表、風險報表、合規報表、交易報表、客戶報表、財政監管報表等。系統提供報表列自定義的功能，使用戶可以根據自己的需求生成特定列的報表。
3. 報表批量打印功能：系統提供批量報表的批次設置和管理功能，可設置多個打印批次並在批次中設置多個報表，可按不同的條件一次生產多張報表。
4. 報表打印操作日誌紀錄功能：紀錄查詢每次報表打印操作的日誌。
5. 操作輔助類功能：參數設置、標籤管理、我的收藏等功能，給用戶提供符合自身崗位需要的操作便利性。

# 報表清單

為方便使用者快速記憶報表的分類，WBO 報表的報表代號也以常規的部門英文名稱來方便記憶學習

<table header_row="1">
<colgroup>
<col width="399"/>
<col width="359"/>
</colgroup>
<thead>
<tr><th><p><b>部门名称</b></p></th><th><p>报表前缀</p></th></tr>
</thead>
<tbody>
<tr><td><p>結算部（Settlement Delivery Department）</p></td><td><p>SDR</p></td></tr>
<tr><td><p>交易部（Trade Department）</p></td><td><p>TDR</p></td></tr>
<tr><td><p>財務部（Finance Department）</p></td><td><p>FDR</p></td></tr>
<tr><td><p>客服部（Customer Service Department）</p></td><td><p>CDR</p></td></tr>
<tr><td><p>風控部（Risk Management Department）</p></td><td><p>RDR</p></td></tr>
<tr><td><p>合规部（Inner Compliance Department）</p></td><td><p>IDR</p></td></tr>
<tr><td><p>財政資源規則（Financial Resource Rule）</p></td><td><p>FRR</p></td></tr>
<tr><td colspan="2"><p>若有券商特殊報表前面會根據券商縮寫來定</p></td></tr>
</tbody>
</table>

目前系統提供下列報表清單，後續會增加適當報表

### 結算報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>SDR002</p></td><td><p>Client Cash Balance Report By CCY</p></td><td><p>查詢當前或歷史的客戶資金明細幣種的信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003</p></td><td><p>Client Stock Holding Report(By Stock)</p></td><td><p>按股票分組展示客戶持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-1</p></td><td><p>Client Stock Holding Report(By Client)</p></td><td><p>按客戶帳戶分組展示客戶持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-2</p></td><td><p>Client Stock Holding Report(Real Time)</p></td><td><p>查詢當前實時嘅證券持倉信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-3</p></td><td><p>Client Stock Holding Report With Custodian Details(Real Time)</p></td><td><p>帶倉庫信息、子倉位置的持倉報表，只能查詢當日的實時信息。為臨時報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-4</p></td><td><p>Stock Holding Report With Client Details</p></td><td><p>帶一些客戶基礎信息的持倉報表，處理公司行動時和上手對賬用</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR003-5</p></td><td><p>Client Stock Holding For Data Migration</p></td><td><p>在系統上線時，查詢數據遷移後的歷史持倉，只能展示已導入的字段。</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR004</p></td><td><p>Client Stock Location Report(By Stock)</p></td><td><p>按股票分組展示客戶倉位的股票持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR004-1</p></td><td><p>Client Stock Location Report(By Client)</p></td><td><p>按客戶分組展示客戶倉位的股票持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR005</p></td><td><p>Stock Location Report(By Stock)</p></td><td><p>按股票分組展示公司所有股票的倉位持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR005-1</p></td><td><p>Stock Location Report(By Depot)</p></td><td><p>按倉位分組展示公司所有股票的倉位持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR006</p></td><td><p>Monthly Trading Fee And Levy Report</p></td><td><p>顯示客戶 direct 類交易的交易征費、交易費的明細及統計資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR006-1</p></td><td><p>Monthly Trading Fee And Levy Summary Report</p></td><td><p>交易征費、交易費報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR007</p></td><td><p>Monthly Stamp Duty Report</p></td><td><p>顯示客戶某月港股 direct 交易的印花稅</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR008</p></td><td><p>Stock Movement In-Out Report</p></td><td><p>除了交易以外當天所有股票進出</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR008-1</p></td><td><p>Stock Movement In-Out Report(Real Time)</p></td><td><p>查詢客戶實時的持倉變動信息（不包括交易）</p></td><td></td></tr>
<tr><td><p>SDR009</p></td><td><p>Turnover Listing Report</p></td><td><p>統計客戶一段時間內的傭金費用和成交量資訊，考慮交易取消</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR010</p></td><td><p>Daily Stamp Duty Report</p></td><td><p>查詢某天印花稅資訊</p></td><td><p>CSV、EXCEL</p></td></tr>
<tr><td><p>SDR010-1</p></td><td><p> HKEX Daily Stamp Duty Form</p></td><td><p>查詢某天印花稅資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011</p></td><td><p>Daily Summary Report By HK</p></td><td><p>查詢港股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-1</p></td><td><p>Daily Summary Report By US</p></td><td><p>查詢美股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-2</p></td><td><p>Daily Summary Report By CN</p></td><td><p>查詢A股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-3</p></td><td><p>Daily Summary Report By Client Type HK</p></td><td><p>查詢港股某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR011-4</p></td><td><p>Daily Summary Report By SG</p></td><td><p>查詢新加坡市場某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCE</p></td></tr>
<tr><td><p>SDR011-5</p></td><td><p>Daily Summary Report By VA</p></td><td><p>查詢虛擬某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCE</p></td></tr>
<tr><td><p>SDR011-6</p></td><td><p>Daily Summary Report By ID</p></td><td><p>查詢印尼市場某天B/C買賣成交匯總資訊，包括成交金額，各種費用等</p></td><td><p>CSV、PDF、EXCE</p></td></tr>
<tr><td><p>SDR012</p></td><td><p>Monthly Trading Summary Report</p></td><td><p>查詢某月的每一天的成交匯總資訊，包括成交金額，淨傭金，各種費用等</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR013</p></td><td><p>Client Bonds Holding Report(By Client)</p></td><td><p>按客戶帳戶分組展示客戶債券持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR014</p></td><td><p>Interest Detail Report</p></td><td><p>查詢某月關於客戶利息、客戶罰息、客戶每日的利息及當月累計利息的資金流水資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR015</p></td><td><p>UnMatched Report</p></td><td><p>配對結果報表，顯示客戶訂單和券商的訂單差異</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR015-2</p></td><td><p>Trade UnMatched Report</p></td><td><p>實時交易對賬報表，清算前檢查任務完成後可以查詢</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR016</p></td><td><p>ATI Settlement Report</p></td><td><p>報表展示某個交收日的滿足條件的合約，對應的 ATI 淨買入/淨賣出資訊。以及相關客戶的 ATI 明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR017</p></td><td><p>Client Bargain Report</p></td><td><p>客戶合約詳情表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018</p></td><td><p>Bargain Detail Report-HK</p></td><td><p>交易合約資訊明細表 - 港股</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-1</p></td><td><p>Bargain Detail Report-US</p></td><td><p>交易合約資訊明細表 - 美股</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-2</p></td><td><p>Bargain Detail Report-USOP</p></td><td><p>交易合約資訊明細表 - 期權</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-3</p></td><td><p>Bargain Detail Report-CN</p></td><td><p>交易合約資訊明細表-A 股</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-4</p></td><td><p>Bargain Detail Report-SG</p></td><td><p>交易合約資訊明細表 - 新加坡股票</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-5</p></td><td><p>Bargain Detail Report-VA</p></td><td><p>交易合約資訊明細表 - 虛擬資產</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR018-6</p></td><td><p>Bargain Detail Report-ID</p></td><td><p>交易合約資訊明細表 - 印尼市場</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR019</p></td><td><p>Outstanding Settlement Report</p></td><td><p>待交收合約報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR021</p></td><td><p>Daily Broker Settlement Report(By Broker)</p></td><td><p>經紀商當日交收報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-01 </p></td><td><p>CA Announcement Event List</p></td><td><p>展示當前公司行動 CA 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-03</p></td><td><p>BE Announcement Event List</p></td><td><p>展示當前公司行動 BE 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-04</p></td><td><p>DS Announcement Event List</p></td><td><p>展示當前公司行動 DS 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-05</p></td><td><p>OO Announcement Event List</p></td><td><p>展示當前公司行動 OO 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-06</p></td><td><p>EO Announcement Event List</p></td><td><p>展示當前公司行動 EO 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-07</p></td><td><p>RS Announcement Event List</p></td><td><p>展示當前公司行動 RS 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-08</p></td><td><p>ER Announcement Event List</p></td><td><p>展示當前公司行動 ER 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-09</p></td><td><p>TU Announcement Event List</p></td><td><p>展示當前公司行動 TU 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR023-10</p></td><td><p>TC Announcement Event List</p></td><td><p>展示當前公司行動 TC 預告和方案</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR024</p></td><td><p>Corporate Action Past Due Report</p></td><td><p>展示當天需要執行的公司行動，CA 在當日日終後操作。注意：需要以上手實際執行為準，只取最近 5 個自然日的數據；實時報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR025</p></td><td><p>Stock Reconciliation Report</p></td><td><p>根據託管商子倉的持倉對賬</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR026</p></td><td><p> Client Trustee Balance Report</p></td><td><p>客戶托管資金餘額報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR027</p></td><td><p>CCASS Securities Market Value Report</p></td><td><p>CCASS 的中證券市值報表，以及停牌超過 3 天的股票列表及市值情況</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR028</p></td><td><p>IPO Detail Report</p></td><td><p>獲取客戶當前歷史 IPO 申購資訊（包括白表黃表數據），實時報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR028-1</p></td><td><p>IPO Infos</p></td><td><p>統計一段時間內 IPO 的信息及訂單</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR029</p></td><td><p>Stock Frozen Report</p></td><td><p>股票凍結報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR030</p></td><td><p>Cash Frozen Report</p></td><td><p>現金凍結報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR032</p></td><td><p>Client Trade Amendment Report</p></td><td><p>顯示訂單被動修改紀錄</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR034</p></td><td><p>Client Margin Ratio Report</p></td><td><p>客戶特殊保證金比率</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td></td><td></td><td></td><td></td></tr>
<tr><td><p>SDR040-01</p></td><td><p>Corporation Action Detail Report(TM)</p></td><td><p>公司行動方案明細（TM）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-02</p></td><td><p>Corporation Action Detail Report(DS)</p></td><td><p>公司行動方案明細（DS）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-03</p></td><td><p>Corporation Action Detail Report(OO/EO/RS/ER/TU/TC)</p></td><td><p>公司行動方案明細（OO/EO/RS/ER/TU/TC）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-09</p></td><td><p>Corporation Action Detail Report(BE/IP/SO)</p></td><td><p>公司行動方案明細（BE/IP/SO）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-10</p></td><td><p>Corporation Action Detail Report(BE With Selection)</p></td><td><p>公司行動方案明細（BE With Selection）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR040-11</p></td><td><p>Corporation Action Detail Report(CA)</p></td><td><p>公司行動方案明細（CA）</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR042</p></td><td><p>BE Client Dividend With Scrip Option(Email)</p></td><td><p>導出選股選息明細列表給對應的客戶發權益郵件</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR048</p></td><td><p>Broker Contract Details</p></td><td><p>代理商合約信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR049</p></td><td><p>Illiquid Stock Summary Report</p></td><td><p>列印非速動證券資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR051</p></td><td><p>Short Sell Stock Report</p></td><td><p>顯示客戶持倉為負的股票資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR052 </p></td><td><p>Short Sell Trade Report-US</p></td><td><p>美股市場沽空的合約信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR058-01 </p></td><td><p>HK Custodian Fee Group by Client V1</p></td><td><p>港股托管費</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR058-02</p></td><td><p>HK Custodian Fee Group by Client V2</p></td><td><p>港股托管費</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR059</p></td><td><p>Client Trading Summary Report</p></td><td><p>按時間區間查詢客戶的交易情況</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR060</p></td><td><p>Client Trading Detail Report</p></td><td><p>查詢客戶交易費用明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR061</p></td><td><p>Short Sell Borrow Fee Detail</p></td><td><p>融券利息明細表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR062</p></td><td><p>Short Sell Borrow Fee Summary</p></td><td><p>融券利息匯總表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR063</p></td><td><p> List Of Stock Holdings Suspended</p></td><td><p>持倉股票停牌清單</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR064</p></td><td><p>Daily Trading Report By HK</p></td><td><p>香港市場客戶合約詳情表，包含對手方成交明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>SDR070</p></td><td><p>OTCR Report</p></td><td><p>OTCR 匯報報表</p></td><td><p>EXCEL</p></td></tr>
</tbody>
</table>

### 財務報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>FDR001</p></td><td><p>Client Cash Balance Summary Report By Client Type</p></td><td><p>查詢當前或歷史的客戶資金按本位幣匯總的資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR002</p></td><td><p>Client Cash Balance Detail Report By CCY</p></td><td><p>查詢當前或歷史的客戶資金明細幣種的資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR002-1</p></td><td><p>Client Cash Balance Detail Report By CCY(Format2)</p></td><td><p>查詢指定帳務日期客戶分幣種的資金信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR002-2</p></td><td><p>Client Cash Balance Detail Report By CCY(Format3)</p></td><td><p>查詢指定帳務日期客戶分幣種的資金信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR003</p></td><td><p>Client Cash Balance Detail Report By Client</p></td><td><p>查詢當前或歷史的客戶資金明細幣種的資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR004</p></td><td><p>Settle Cash Movement In-Out Report By CCY</p></td><td><p>結算現金餘額變動明細記錄</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR005</p></td><td><p>Cash Movement In-Out Report By CCY</p></td><td><p>資金變動流水</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR006</p></td><td><p>Daily Trial Balance Report</p></td><td><p>每日成交金額/費用/應收應付款匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR009</p></td><td><p> AE Performance Report</p></td><td><p>經紀人佣金報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR009-1</p></td><td><p> AE Performance Report By Client</p></td><td><p>按照年月日統計經紀人下的客戶佣金</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR012</p></td><td><p>FD Commissions detail</p></td><td><p>FD 分成明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR013</p></td><td><p>FD Commissions Daily Report With AE</p></td><td><p>FD 分成明細，按經紀人按日匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR014</p></td><td><p>FD Commissions Monthly Report With AE</p></td><td><p>FD 分成明細，按經紀人按月匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR015</p></td><td><p>FD Commissions Yearly Report With AE</p></td><td><p>FD 分成明細，按經紀人按年匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR016</p></td><td><p>FD Commissions Monthly Report Without AE</p></td><td><p>FD 分成明細，按月匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR017</p></td><td><p>Cash In-Out Detail Report By CCY</p></td><td><p>實時的現金變動報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR018</p></td><td><p>Client Cash Balance Report By Client (Real Time )</p></td><td><p>客戶分幣種的現金餘額實時報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR019</p></td><td><p>Cash Movement Summary Report</p></td><td><p>客戶資金變得分類匯總表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR020</p></td><td><p>Commission Rebate Report</p></td><td><p>經紀人佣金匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR020-1</p></td><td><p>Commission Rebate Detail Report</p></td><td><p>經紀人佣金明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR022</p></td><td><p>Cash Movement Check Report</p></td><td><p>資金變動檢查表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FDR023</p></td><td><p>Client Remaining Cash(USD)</p></td><td><p>不能動用的客戶存管資金</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 客戶報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>CDR001</p></td><td><p>Client Master Listing Report</p></td><td><p>顯示客戶帳戶基本資料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR001-1</p></td><td><p>BCAN Information Report</p></td><td><p>BCAN 資訊報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR009</p></td><td><p>Stock Information Excel Export</p></td><td><p>顯示股票重要欄位訊息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR008</p></td><td><p> Allow Trading Status Report</p></td><td><p>證券可買賣標誌信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR010</p></td><td><p>AE Listing</p></td><td><p>查詢 AE 經紀人 基本資料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR013</p></td><td><p>Member Agent Person</p></td><td><p>客戶在券商記錄的代理人信息，以客戶為維度</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR014</p></td><td><p>Member Related Person</p></td><td><p>客戶在券商記錄的关系人信息，以客戶為維度</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>CDR015</p></td><td><p>Client Related Group Report</p></td><td><p>FRR 關聯組客戶信息查詢</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### FRR 報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>FRR001</p></td><td><p>Cash Client Receivable Aging Report(Form 1)</p></td><td><p>現金客戶延期交收應收款分析</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR001-1</p></td><td><p>Cash Client Receivable Aging Report By CCY(Form 1)</p></td><td><p>現金客戶延期交收應收款分析 欠款統計口徑：資金賬戶分幣種的已交收金額</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR002</p></td><td><p>Market Unsettled ARAP Report (Form 1)</p></td><td><p>市場角度統計待交收證券的金額</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR003</p></td><td><p>Margin Clients With The Largest Unadjusted Loan Balances Report<br/>（Form 4 Table 1)</p></td><td><p>客戶資金資訊，證券市值資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR004</p></td><td><p>Margin Client With Adjusted Loan Balances Report (Form 4 Table 2)</p></td><td><p>所有Margin客戶資產/流動性詳情:統計Margin客戶，其負債及資產流動性明細及分類匯總。</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR004-1</p></td><td><p>Margin Clients With Adjusted Loan Balances Report By Stock (Form 4 Table 2)</p></td><td><p>統計 Margin 客戶，其負債及資產流動性明細及分類匯總，並關聯股票</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR005</p></td><td><p>Ananlysis of Securities Collateral Report (Form 5 (A))</p></td><td><p>以股票的維度來查看：所有 Margin 客戶的股票保證金情況：統計 search_str=M 的客戶數據。</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR006</p></td><td><p>FRR006 - Rolling Balance Cash Client Analysis Report(Form 6)</p></td><td><p>現金帳戶欠款客戶</p></td><td></td></tr>
<tr><td><p>FRR007</p></td><td><p>Profit And Loss Account Report (Form 7)</p></td><td><p>客戶成交量和傭金資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR008</p></td><td><p>Analysis of Client Securities Report (Form 8 Table1)</p></td><td><p>統計 CCASS 及其他託管商不同倉位上的市值</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR008-1</p></td><td><p>Analysis of Client Securities Report By CCY(Form 8 Table1)</p></td><td><p>分幣種統計 CCASS 及其他托管商不同倉位上的市值</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR008-2</p></td><td><p>Analysis of Client Securities Report By CCY-2(Form 8 Table1)</p></td><td><p>分幣種統計 CCASS 及其他托管商不同倉位上的市值</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR009</p></td><td><p>Analysis of Client Segregated Funds Report(Form 8 Table 2)</p></td><td><p>應向客戶支付的款項及須獨立存放的客戶款項報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR010</p></td><td><p>Active Client Summary Report (Form 12)</p></td><td><p>活躍客戶數量統計</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR010-1 </p></td><td><p> Active Client Detail Report (form 12)</p></td><td><p>活躍客戶賬戶及資產明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR011</p></td><td><p>Option FRR Report</p></td><td><p>期權 FRR</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>FRR012</p></td><td><p>Monthly Options Trade Summary Report</p></td><td><p>期權月度交易量</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 風控報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>RDR001</p></td><td><p>Client Portfolio Details</p></td><td><p>統計在發生日起以及 2 個帳務日，客戶的總資金、總市值、總抵押值、追保金額，以及持倉明細等信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR003</p></td><td><p>Margin Call Summary Report</p></td><td><p>分析統計客戶歷史按本位幣匯總的追保資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR003-1</p></td><td><p>Margin Call Summary(Margin Client) Report</p></td><td><p>融資賬戶的日終後追保金額</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR005</p></td><td><p>Client Asset Summary Report By Client Type</p></td><td><p>分析統計客戶歷史的資產資訊</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR006</p></td><td><p>Client Asset Detail Report By CCY</p></td><td><p>按幣種分組分析客戶的資產細節</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR006-1</p></td><td><p>Client Asset Detail Report By Client</p></td><td><p>按客戶分組分析客戶的資產細節</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR007</p></td><td><p>Client Trading Or Credit Limit Report</p></td><td><p>客戶交易額度和信用額度報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR008</p></td><td><p>Top N Market Value of Margin-Market Value Report</p></td><td><p>Top N 證券市值和保證金市值報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR010</p></td><td><p>Concentration Risk</p></td><td><p>客戶股票的市值占整體持倉的佔比以及發行市值的佔比</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR011</p></td><td><p>Margincall Continuous Unpaid Amount</p></td><td><p>連續追保報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR012</p></td><td><p>MarginCall Aging Report</p></td><td><p>實時追保紀錄</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR014</p></td><td><p>Stock Rank Report</p></td><td><p>股票級別佔比</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR016</p></td><td><p>User Daily Approval Report</p></td><td><p>風控額度批核報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR019</p></td><td><p> Margin Loan Report</p></td><td><p>保證金貸款報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR021</p></td><td><p>Bad Credit Report By Client</p></td><td><p>客戶不良信用紀錄</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR022</p></td><td><p> Stock Margin Ratio Report</p></td><td><p>實時股票保證金比例</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR023</p></td><td><p>Client Overdue Cash Balance By CCY</p></td><td><p>實時統計客戶分幣種的欠款</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR024-1</p></td><td><p>Exposure By Clients</p></td><td><p>客戶風險敞口</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR024-2</p></td><td><p>Exposure By Stocks</p></td><td><p>股票風險敞口</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR024-3</p></td><td><p>Exposure By Exchanges</p></td><td><p>分交易統計風險敞口</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR025</p></td><td><p>Client Borrowing Details</p></td><td><p>客戶借貸明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR026</p></td><td><p>Stock Borrowing calculation</p></td><td><p>股票借貸明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR027</p></td><td><p>Client Position Summary</p></td><td><p>客戶持倉及風控匯總信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR028</p></td><td><p>Client Position Details</p></td><td><p>客戶持倉明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR029</p></td><td><p>Credit Client Info Review</p></td><td><p>客戶融資額度重檢報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR030 </p></td><td><p>Option Securities Recovery Record</p></td><td><p>期權到期日正股不足以行權的追收記</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR032</p></td><td><p>Options Margin Report</p></td><td><p>期權保證金報表，按照對應正股匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR033</p></td><td><p>FD/AE Overview</p></td><td><p>FD/AE 客戶總覽</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR034</p></td><td><p>Company Loan Limit Overview</p></td><td><p>公司緯度授信額度總覽</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR035</p></td><td><p>Margin Risk Index</p></td><td><p>保證金風險指標</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR036</p></td><td><p>Stock Group Monitoring</p></td><td><p>股票組監控</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR037</p></td><td><p>Client Financing Monitoring</p></td><td><p>客戶融資監控</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR038</p></td><td><p>Daily Margin Call Report</p></td><td><p>margin call report</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR039</p></td><td><p>Stress Test</p></td><td><p>日常風控報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>RDR040</p></td><td><p>Option Composed Margin</p></td><td><p>期權組合保證金報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 合規報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>IDR001</p></td><td><p>S181 Trade Report</p></td><td><p>按照 SFC 的要求模版提交客戶交易</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR002</p></td><td><p>S181 Holding Report</p></td><td><p>按照 SFC 的要求模版提交客戶持倉</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR008</p></td><td><p>SPAC Post Trade Report</p></td><td><p>指定時間段內特定股票交易的成交清單</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR003</p></td><td><p>Client Trade With IP(SFC)</p></td><td><p>指定時間段內某個客戶或某只股票的交易清單，帶 IP </p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR011</p></td><td><p>Top N Client Turnover </p></td><td><p>10 大客戶交易總額</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR012</p></td><td><p>Top N Order Turnover </p></td><td><p>最高 10 大訂單成交量</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR013</p></td><td><p>Top N Client No. of Transactions</p></td><td><p>10 大客戶交易次數</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR014</p></td><td><p>Top N Price Deviation In Percentage</p></td><td><p>成交價參數</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR015</p></td><td><p>Y trade</p></td><td><p>Y 盤</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR016</p></td><td><p>Transactions Report By Staff </p></td><td><p>员工交易报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR017</p></td><td><p>Transactions Report By High Risk Client </p></td><td><p>高度風險客戶交易报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR018</p></td><td><p>Matched trades Wash trades </p></td><td><p>配對交易 虛售交易</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR019</p></td><td><p>Not genuine orders</p></td><td><p>非真正訂單</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR020</p></td><td><p>Re-activation of dormant account</p></td><td><p>重啟不動戶</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR026</p></td><td><p>The proportion of customer transaction volume</p></td><td><p>客戶成交量佔比</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR027</p></td><td><p>Deliberately push up or down the closing price</p></td><td><p>刻意推高或推低市價</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR028</p></td><td><p>Transactions done at At-auction period </p></td><td><p>競價時段成交</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR029</p></td><td><p>IPO share trades on first listed date </p></td><td><p>新股首日上市交易</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR038</p></td><td><p>Suspicious Trading Report</p></td><td><p>根据成交明细的维度来筛选，同一客户，成交时间相同（秒级），成交数量相等，成交价格相同，买卖方向相反的数据</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR040</p></td><td><p>Transaction Monitoring - cash in and out (including stock in and out)-normal client</p></td><td><p>出入金的交易監察（包括股票轉入和轉出）- 一般用戶</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>IDR041</p></td><td><p>Transaction Monitoring - cash in and out (including stock in and out)-watchlist</p></td><td><p>出入金的交易監察（包括股票轉入和轉出）-watchlist</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

### 交易報表

<table>
<colgroup>
<col width="100"/>
<col width="278"/>
<col width="342"/>
<col width="144"/>
</colgroup>
<tbody>
<tr><td><p><b>报表編號</b></p></td><td><p><b>报表名称</b></p></td><td><p><b>報表說明</b></p></td><td><p><b>支持格式</b></p></td></tr>
<tr><td><p>TDR001-1</p></td><td><p>Daily Client Order Report By Client</p></td><td><p>顯示當天在指定條件下，所有客戶的訂單，按客戶分組展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR001-2</p></td><td><p>Daily Client Order Report By Stock</p></td><td><p>顯示當天在指定條件下，所有經紀人客戶的訂單，按股票分組展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR001-3</p></td><td><p>Daily Client Order Report By AE</p></td><td><p>顯示當天在指定條件下，所有經紀人客戶的訂單，按經紀人分組展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR001-3</p></td><td><p>Daily Client Order Report By BuySell</p></td><td><p>顯示當天在指定條件下，所有經紀人客戶的訂單，按買賣分組展示</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR004</p></td><td><p>Trade Detail Report</p></td><td><p>顯示指定條件下所有成交的訂單的信息，並會有各幣種成交的統計</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR005</p></td><td><p>Trade Summary Report</p></td><td><p>顯示指定條件下所有訂單的資訊。並對交易的數據進行匯總</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR006</p></td><td><p>Client History Order Report By BuySell</p></td><td><p>顯示指定條件下所有訂單的信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR007</p></td><td><p>Cross Trade Report</p></td><td><p>顯示指定條件下所有交叉盤交易的訂單的信息</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR013</p></td><td><p>User Daily Turnover Report</p></td><td><p>根據操作員及幣種顯示當天成交及未成交金額</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR020</p></td><td><p>Third Party Operated Account Trade Listing</p></td><td><p>顯示第三方授權帳戶成交記錄報表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR022</p></td><td><p>IP address and Transaction Report</p></td><td><p>带客户 IP 地址的交易记录报表</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR023-1</p></td><td><p>Trades for Clients with the Same Stock</p></td><td><p>統計交易訂單維度，相同下單日期，相同標的，訂單狀態成交、部分成交，統計數量大於等於 2 的資料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR023-2</p></td><td><p>Trades for Clients with the Same Address (SG Clients)</p></td><td><p>統計交易訂單維度，相同下單日期，相同標的，相同郵編的用戶，訂單狀態成交、部分成交，統計數量大於等於 2 的資料</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR024</p></td><td><p>Clients Tagged to Same Licensed Representative</p></td><td><p>同一代碼，不同客戶的訂單創建時間差小於 5 分鐘的數據</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR025</p></td><td><p>Clients acting in concert</p></td><td><p>統計提交開戶時間相同（日）的用戶，訂單用創建為同一天，交易同一隻股票的數據</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR026</p></td><td><p>Ramping/Price Driver</p></td><td><p>統計成交價格大於等於當日開盤價的 120% 或小於等於當日開盤價 80% 的訂單</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
<tr><td><p>TDR027</p></td><td><p>Wash Trades (No Change in Beneficial Ownership)</p></td><td><p>統計某個交易日，同一個客戶，同一隻股票的匯總成交額（包含買賣）/ 市場成交額 ≥ 1% 的成交明細</p></td><td><p>CSV、PDF、EXCEL</p></td></tr>
</tbody>
</table>

# 功能操作

## 一、基礎輔助功能及頁面佈局介紹

#### 報表業務分類

可以在右側切換業務報表分類。中間區會顯示可執行到報表清單列表

<img src="/assets/Malgbrnszo3gntxR0XJcfIIUnbd.png" src-width="3198" src-height="1622" align="center"/>

每個報表項目會顯示報表項目名稱與 報表簡要說明 與最近更新版本時間

<img src="/assets/YTpKbHvA9oTI9MxmPNFcmXL4nAg.png" src-width="3234" src-height="1334" align="center"/>

報表項目旁若出現'實時'標籤圖示，表示該報表是實時數據報表資料  

<img src="/assets/V9hebWHrWoiWnexcglWc8SvWnFe.png" src-width="2704" src-height="152" align="center"/>

#### 報表標籤分類

也可以編輯自己的報表標籤說明，可以對單一報表赋予相應的「標籤」，同时系统會根據「標籤」對相關報表做自動分類，便於快速查找

<img src="/assets/PnzDbgXJwoYsGTxqYHNcQOXcnRc.png" src-width="3240" src-height="1066" align="center"/>

此時可以選擇現有標籤（支持多個標籤同時存在）或 重新 新建一個 標籤

<img src="/assets/O2HwbgX0AoCJjYxtWtMcpIJ9ntg.png" src-width="2340" src-height="968" align="center"/>

#### 標籤管理

同時左上角 提供標籤管理功能，可以維護標籤內容：

删除標籤后，则該標籤下所有報表与之關聯關係都会被清除

修改標籤名稱後，標籤名稱會直接變更

<img src="/assets/HDRjbzTvGoloIBxifJ9cNfdknFa.png" src-width="3252" src-height="348" align="center"/>

<img src="/assets/DnDTb93Zto28ndx7lJZcMhXtn4c.png" src-width="3244" src-height="954" align="center"/>

#### 報表收藏

也提供 星狀圖示報表收藏，點選後就會出現在 自己的「我的收藏」入口菜單區內，方便快速點選操作

<img src="/assets/IVYBbkR0yoOQnJx32qrcXwrPnbb.png" src-width="3224" src-height="1318" align="center"/>

#### 參數設置

- 可以通過報表參數設置完成部分報表需要的參數設置

<img src="/assets/I57HbCjNYoGA2Kxib96cXDedn3e.png" src-width="2340" src-height="1340" align="center"/>

<img src="/assets/F95hbhmtEoiHxrxGaLscWxUqnsg.png" src-width="2368" src-height="1336" align="center"/>

#### 查看更新日誌

- 通過更新日誌用戶可以及時了解 Whale 系統報表的最新更新紀錄

<img src="/assets/AFr3bVClAoP9o5xq1kwcWwxEned.png" src-width="2324" src-height="1310" align="center"/>

## 二、報表打印功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：報表管理 &gt;報表打印</p>
</div>

#### 報表數據查詢

報表打印首頁提供兩種報表選擇進入方式 

<b>方式一：</b> 

在搜索欄輸入報表編號的關鍵字，可以查詢對應的報表展示選擇，例如：輸入 SDR003 則下拉顯示 SDR003 相關的報表，點擊所需報表便可以進入詳細的報表頁。（注意：輸入報表編號作搜索，英文字母必須為大寫）

<img src="/assets/OYh4bxwr6o66laxu69Ic1JesnQh.png" src-width="3240" src-height="1188" align="center"/>

<b>方式二</b>：

    點擊所需報表名稱，展開後可選擇對應的報表進入詳細的報表頁面

<img src="/assets/OqBJbWOkboUicgxT8yAcpZnKnmh.png" src-width="3246" src-height="1618" align="center"/>

單一報表詳情的上方區域為報表條件欄位查詢區，可按照不同條件進行報表詳情篩選

<img src="/assets/HIiHb1UOqokwdfx2qPFcNYBcnie.png" src-width="3238" src-height="1332" align="center"/>

#### 報表預覽

- 如果報表配置了支持 PDF 格式則可以預覽檔案 
- 預覽只支持預覽前 30 條明細記錄生成的檔案； 
- 預覽介面頁可以選擇下載或者列印。 

<div class="callout callout-bg-1 callout-border-1">
<div class='callout-emoji'>🚫</div>
<p>因為預覽只顯示部分數據，所以請注意要數據是否完整後再進行下載；後期會優化在預覽檔案裏說明是否是完整數據</p>
</div>

<img src="/assets/BRYNbzLUtoDHP7xvmTfcLeCJnDe.png" src-width="3232" src-height="1644" align="center"/>

#### 報表導出

<img src="/assets/U6LQbkJcfoODooxgLECchFSQn4g.png" src-width="3254" src-height="758" align="center"/>

導出功能可以選擇導出的檔案類型，大部分報表支持 CSV、PDF、EXCEL 格式，部分特定報表只支持特定的格式，詳情見報表列表

- CSV 默認支持：按頁面列表展示的列欄位導出
- PDF 配置支持：按定義的列印模板欄位導出，支持分組總計以及報表組合
- EXCEL 配置支持：按定義的列印模板欄位導出，支持分組總計以及報表組合

點擊後會會自動產生一個報表導出任務，後續可以在導出列表頁面查看進度並作下載操作

<img src="/assets/I28Jbg7Fpo9gXoxles9cGlwKnQd.png" src-width="3470" src-height="764" align="center"/>

#### 導出文件

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>報表管理 &gt;導出列表</p>
</div>

可以查詢當前登錄用戶所導出的報表文檔，可以【刪除】或直接【下載】

<img src="/assets/Nm4Lbn3q9o5E3LxIMXuc3A8Inec.png" src-width="2324" src-height="1318" align="center"/>

## 三、批量打印功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：報表管理 &gt;批量打印</p>
</div>

#### 設置打印批次

系统也支持批量打印报表功能，可以自行新增一个批量作业，点选右上方【新增】，增加批量打印名称与批量报表组成

<img src="/assets/B3dyboQWSoc2QJxw1PPcnYpqnqh.png" src-width="3362" src-height="1526" align="center"/>

批量打印名称确认后，可以添加批量的报表组成（选报表名称/打印方式），打印条件会根据不同报表，自动显示相关栏位，可以根据需要自行设置

<img src="/assets/Xq5Xb0it0oB8Eyx1vwicV7kXnKh.png" src-width="2364" src-height="1348" align="center"/>

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

<img src="/assets/GO77bjUxBooB58x8gwycx70pnAc.png" src-width="2360" src-height="1352" align="center"/>

#### 編輯打印批次

批次詳情可以进行下列操作：

1. 列表内点击【修改】进入报表条件修改页面
2. 列表内点击【导出】可以按条件导出单个报表
3. 列表内点击【删除】可以移除批次中的报表
4. 报表批量打印同一批次支持添加相同的报表，方便相同报表但列印参数不同需要

<img src="/assets/P8ypbCiyeohpCHx76yZcchaBnSh.png" src-width="2336" src-height="1248" align="center"/>

#### 批量打印

可以在现有批量作业纪录右侧功能区，操作【详情】或【批量导出】或【删除】

- 詳情：進入批次詳細列表頁面
- 刪除：刪除批次
- 批量導出：提交批次文件生成任務

<img src="/assets/X5Jrb97PPo7Pe7x4aodcvQBQn0k.png" src-width="2352" src-height="940" align="center"/>

#### 導出批量文件

若批量导出执行后，可以在导出列表作业上查看，也可以将文件夹整个下载操作

<img src="/assets/ZYCyb8GoBoAuYexsR5YcArKYnLx.png" src-width="2832" src-height="834" align="center"/>

可以点选详情，查看每一批量打印的单一报表，或单一报表下载

<img src="/assets/UyTVbCLOIoo2ZSxn9cOcIDaunvd.png" src-width="2346" src-height="802" align="center"/>

## 四、導出日誌

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：報表管理&gt;導出日誌</p>
</div>

查詢報表列印的歷史操作記錄

- 「單個列印」查詢單個報表打印的歷史操作記錄
- 「批量列印」查詢批量報表打印的歷史操作記錄

<img src="/assets/ZX52bsN9hoSfkdxY0YLcttYKnnh.png" src-width="3346" src-height="1512" align="center"/>

## 五、CRS 文件生成

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：報表管理&gt;CRS 文件生成</p>
</div>

### 功能操作說明

本作業提供年度 CRS 文件的操作處理，支持新消息與更正消息類型

注意：租戶需要 增加下列權限 才能操作 相關 CRS 文件

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[54%]" width-ratio="54">
<img src="/assets/UpPHbEP62obOPuxVfuTc2sXdnEh.png" src-width="950" src-height="563" align="center"/>
</div>
<div class="w-[45%]" width-ratio="45">
<img src="/assets/WB3nb9Xk8oux6Yxl5ePc2D5bnxf.png" src-width="1878" src-height="1354" align="center"/>

<p>CRS 文件權限</p>
</div>
</div>

#### <b>計算收益</b>： 

首先在右上角點選'計算收益' ，輸入報送年度與編號（公司名稱）後就會產生文件製作的任務工作（在<b>任務列表</b> Tab 頁籤）

注意：在计算收益視窗上，在外部报税文件上傳的網站了會提供供一個编号【AEOI ID】的，公司名稱就是券商的公司名稱，要跟外部報税系统里面名稱要一致的

<img src="/assets/DNKpbKEv4o7Xkix4zRycOwCbnqp.png" src-width="2352" src-height="1344" align="center"/>

就會產生一個的系統任務，當系統任務完成後（這會需要點時間產生全年資料），就會產生報送的參考數據，可以在 CRS 數據 Tab 頁籤上 查看或修改

<img src="/assets/RwkWbtqYloi7owx0I30cD8LInqh.png" src-width="2368" src-height="874" align="center"/>

也可以在任務列表 Tab 頁籤上 點選 紀錄右側操作區的【詳情】，會自動切換<b> CRS 數據</b> Tab 頁籤，可以查詢數據資料或編輯修改

<img src="/assets/F5ifbjNJ6oXg8OxC73scnM51nDh.png" src-width="2346" src-height="1196" align="center"/>

可根據需要 刪除紀錄（不報送）或修改數據資料

<img src="/assets/FXgvba7kdoiiqrxZX3Bc8zzun5e.png" src-width="1193" src-height="662" align="center"/>

#### <b>生成文件</b>： 

當 CRS 數據 Tab 頁籤上 查看或修改正確後，可以點選右上角【生成文件】就會產生一個的系統任務來產生報稅規格的文檔（注意：這會需要點時間產生全年資料）

<img src="/assets/BnOUbJWigoLi38xgRpmcp71Snmd.png" src-width="2338" src-height="836" align="center"/>

#### <b>文件下載</b>

當生成文件任務完成後，就可以點選下載檔案，去外部網站傳送了

（系統會稱生一個 xml 附檔名的文檔）

<img src="/assets/Np0nb7dIhoGv0UxP9xzc69AlnRf.png" src-width="2338" src-height="836" align="center"/>

<img src="/assets/T3lPb7Ccgod7r5xssVGcdOwcnue.png" src-width="581" src-height="667"/>

建議：此文件不要自行編輯，容易誤操作造成文檔規格不對，無法上傳

#### <b>生成文件上傳</b>： 

將上傳到外部系统的一个 XML 文件。这文件在外部系统上傳以后，在外部系统它會返回一个文件序列号，可以在任務列表 Tab 頁籤這，更新状态把外部系统序列号输入

<img src="/assets/AYn2bziLVoz8VBxb9KGc7ssMnkd.png" src-width="2350" src-height="1348" align="center"/>

這等于 將 產生的 CRS 數據 打上這批次的 文件序列號，方便以後對數據查詢或更正已報送資料

<img src="/assets/UaXCb59M4onF6sxUYAyctBirnub.png" src-width="2352" src-height="846" align="center"/>

#### <b>更正資料再上傳</b>： 

正常情況下，已報送資料其狀態是‘文件已報送'

<img src="/assets/NMjLbszRdoK5LBxwxP2cMyOFnCh.png" src-width="2334" src-height="1214" align="center"/>

當發現數據需要變更時，可以點選右側【編輯】來操作修改數據或【刪除】已報送數據，此時後面一樣操作產生文件並上傳報送網站，同樣 也會取的最新的文件序列號，也一樣更新即可

