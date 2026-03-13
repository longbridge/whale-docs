---
title: 2. Deposit and Withdrawal Issues
slug: ZdfIws61ziGjJCkdHhkcwQ29ndf
sidebar_position: 1
---


# 2. Deposit and Withdrawal Issues

# 2A Question: The amount actually credited differs from the amount the client entered; how should this be handled?

<b>Answer:</b> In "Funds Management &gt; Deposit &gt; Deposit Application", click "Direct Posting" to correct the "Actual Amount Received".

<img src="/assets/WDrUbTxHeolpgAxp3iIj7Wcap42.png" src-width="3818" src-height="1294" align="center"/>

<img src="/assets/WK0JbG0zXos5CHxtpe9j5AFrpUA.png" src-width="3824" src-height="1854" align="center"/>

# 2B Question: Why did a withdrawal request that was not submitted automatically move to "Withdrawal Processing"?

<b>Answer:</b> If the client applied for a withdrawal via the App and the same bank card has a record of a successful withdrawal, the request will appear on the "Pending" page under "Withdrawal Processing", where it can be processed directly for disbursement (see Figure 2B-1). If the App requires withdrawal approval, click "New" on the "Business Parameter Settings &gt; Risk Control &gt; Withdrawal Amount Rules" page to create the rule (see Figures 2B-2 to 2B-4).

<img src="/assets/Hsnbbcibzoxlsixme0MjBIsCpM4.png" src-width="3800" src-height="1362" align="center"/>

<em>Figure 2B-1</em>

<img src="/assets/Y6x9bu2xhoXW1ExT0E4j4NntpEb.png" src-width="3802" src-height="1424" align="center"/>

<em>Figure 2B-2</em>

<img src="/assets/OrmobJrWcocl40xXsBOjay1ep6J.png" src-width="3292" src-height="1762" align="center"/>

<em>Figure 2B-3</em>

<img src="/assets/CRUObPGLoo5pElxsVx0j5aGHpDg.png" src-width="3282" src-height="762" align="center"/>

# 2C Question: After completing the end‑of‑day process, how should restored deposit/withdrawal transactions be handled?

<b>Answer:</b> If the end‑of‑day has been completed, you must first perform a settlement reversal (see Figures 2C-1 and 2C-2); you cannot skip accounting days and must reverse them one day at a time. After restoring the transactions, edit the date in Transaction Management to set the transactions back to the appropriate transaction date (see Figure 2C-3), and then continue with the end‑of‑day procedures.

<img src="/assets/VGKYbuFYxoAPTUxOtDzj61LYp33.png" src-width="2858" src-height="1418" align="center"/>

<em>Figure 2C-1</em>

<img src="/assets/AlMhbvggXouih9xgZoQjnJmkpMg.png" src-width="2390" src-height="1420" align="center"/>

<em>Figure 2C-2</em>

<em>If interest or settlement data do not need to be recalculated, asset rollbacks may be optionally omitted.</em>

<img src="/assets/O64Lbg8GhoGXdoxG9vjjBp32p3e.png" src-width="2392" src-height="972" align="center"/>

<em>Figure 2C-3</em>

<em>Select the "Position Transactions / Fund Transactions" page, choose the relevant transaction, and click "Edit Date".</em>

# 2D Question: If an account has a USD deficit but an HKD balance, can HKD be withdrawn?

<b>Answer:</b> In "Business Parameter Configuration &gt; Risk Control &gt; Withdrawal Parameters", click "Edit" on the "Coefficient X Configuration". Change the coefficient to 1; when the account has a USD deficit but retains purchasing power, the HKD balance may be withdrawn (see below).

<img src="/assets/UwVsbkXVDoEgYIxPykVjUuRZp8b.png" src-width="3004" src-height="1468" align="center"/>

<img src="/assets/Ao7TbnbHVoJDaDxmIHHj8gwrpVh.png" src-width="2980" src-height="1484" align="center"/>

# 2E Question: How can different withdrawal fees be set for different currencies?

Answer: In "Billing Management", configure a fixed withdrawal fee for a specific currency by setting both the maximum fee and the minimum fee to fixed amounts.

<img src="/assets/C4g1bqkQfoFBTKxyC7JjVH6QpWd.png" src-width="2226" src-height="1366" align="center"/>

