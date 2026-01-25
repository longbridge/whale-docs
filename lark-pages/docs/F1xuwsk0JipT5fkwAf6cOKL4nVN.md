---
title: 12. Report Issues
slug: F1xuwsk0JipT5fkwAf6cOKL4nVN
sidebar_position: 11
---


# 12. Report Issues

# 12. Report Issues

# Common Report Types:

# 12A Q: At what time is same-day report data generated?

Answer: Report data is generated after the end-of-day processing for that day is completed.
Some real-time reports do not wait for end-of-day processing; the "Report Printing" page will indicate which reports are real-time.

<img src="/assets/YOmpbDOlaoOVNFxApbEjGteNpYe.png" src-width="1790" src-height="780" align="center"/>

# 12B Q: What customer data does compliance report IDR020 Re-activation Of Dormant Account display?

Answer: The report lists customers whose last transaction record exceeds 180 days; for new customers the account opening date is used. The report does not determine a customer's activation status.

# 12C Q: Does the system generate surveillance alerts for fictitious trades, price manipulation, or insider trading?

Answer: The following reports can be used to manually assess whether there are suspicious trading activities.

IDR018 - Matched Trades / Wash Trades (checks whether two or more clients executed offsetting buy and sell trades in the same stock)

IDR026 - The Proportion Of Customer Transaction Volume (identifies when a customer's trading volume exceeds 50% of the stock's daily turnover)

IDR027 - Deliberately Push Up Or Down The Closing Price (identifies orders executed in the last minute before market close at prices ≥5% above or below the previous close)

IDR019 - Suspected Order Activities Report (flags when a single client modifies or cancels orders more than 20 times)

# 12D Q: How to export a report of high-risk customers?

Answer: In CDR001 - Client Master Listing Report, select "Custom List", choose "Risk Tolerance", and click "Save".
After exporting to Excel, filter by the "Risk Tolerance" column.

<img src="/assets/TZKWbhoQmonC0tx2OlBjMNIcpug.png" src-width="2826" src-height="1600" align="center"/>

<img src="/assets/PhC5bBhk2o4CHIxn2dXjWp4Mpjc.png" src-width="2844" src-height="1618" align="center"/>

<img src="/assets/Nip9b02uboYAAdx6FiujY3TApIf.png" src-width="2846" src-height="1468" align="center"/>

# 12E Q: How to export historical data for clients' stock concentration (Stock Concentration)?

Answer: RDR010 - Concentration Risk contains up to one week of data. If earlier historical data is required, obtain each client's daily holding values from SDR003 - Client Stock Holding Report (By Stock), then manually calculate stock concentration using the Hong Kong Stock Exchange’s issued market capitalization.

<img src="/assets/KSSnbwrHdoDr4kxViwHj8k40pTf.png" src-width="2850" src-height="1346" align="center"/>

# 12F Q: How to interpret the FRR006-1 report and the FDR002-1 report?

Answer:

1. FRR006-1 reports all indebted clients with Cash accounts (converted to HKD based on the selected exchange rate).

If a client holds multiple currencies, convert all balances to HKD and then compute the aggregate balance.

Example: USD 10 & HKD -50. After conversion to HKD, positive balances are not included in the FRR006-1 report.

Date basis: Trade Date & Settle Date

<img src="/assets/T1ndbZajnoVy1kxYkfkjXL59pM3.png" src-width="2380" src-height="592" align="center"/>

1. FDR002-1 reports all clients' cash details (calculated by currency).

Available balance: calculated using settlement amounts

Net Balance: calculated using ledger amounts

DR indicates an outstanding debt

CR indicates no outstanding debt

<img src="/assets/Sz5Hbog6VoZBx9xwEQxjQDnQptf.png" src-width="2820" src-height="1264" align="center"/>

# 12G Q: Why do RDR027 and RDR028 reports have no data?

Answer: RDR027 and RDR028 data generation times are:

Morning data: 11:30

Afternoon data: 17:30

After the afternoon data is generated, the morning data is no longer retained or displayed.

