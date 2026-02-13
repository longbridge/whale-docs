---
title: Quick Start
slug: FWyvwdeLpiY2Ryk05pNc5rppnFb
sidebar_position: 1
---


# Quick Start

# Applicable Scenarios

```text
Tenants directly connected to HKEX (EP mode)

Brokers operating only in the Hong Kong equities market
```

# Quick Start

# Prerequisites

```text
You must obtain the following authorizations before you can use the system functions normally.
```

# Instructions

## 1. Import Trade Files

```text
After 4:10 PM, import the CTF Trade File.

Path: Charging Management  > Market Clearing  > File Import

Click Import File, then upload the file.
```

<img src="/assets/FPpwbPIF7oUPVUxJamljKdLxp8f.png" src-width="2996" src-height="1592" align="center"/>

```text
You can monitor the parsing status via the Status field in the list area; a successful parse indicates the process is complete.
```

<img src="/assets/MsgZb3sPJoepaax4pS5jmy5Spph.png" src-width="3020" src-height="1608" align="center"/>

## 2. Market Clearing (Trade Clearing)

```text
After the trade files have been imported, you may operate the market clearing.

Path: Charging Management - Market Clearing - Day-End Tasks
```

### Pre-Clearing Preparation

```text
This function checks whether the relevant configurations and the day's business operations have been completed before execution.

After confirming that the current accounting date is correct, click Execute Pre-Clearing Preparation.

Note: If you operate only the Hong Kong equities market, you may hide the European/American market clearing during the initial setup.
```

<img src="/assets/J1eqbnaDWo7WzbxfP62jdPKFpnh.png" src-width="3020" src-height="1606" align="center"/>

```text
After execution, the check results will be returned within five seconds. If all checks pass, you may proceed to subsequent operations.

For checks that report errors, click the upper-right corner of the check item to view the rules and operation guidance for that check.
```

<img src="/assets/AV7Tb4cdZoPI07xBGbujFooRpyf.png" src-width="3016" src-height="1604" align="center"/>

```text
Some checks provide exception details.
```

<img src="/assets/NWgxbj5k0o1PuqxUpHcjBnTIpdh.png" src-width="2988" src-height="1584" align="center"/>

```text
After settlement staff verify and confirm issues, they may click "Re-execute" after completing the related business operations.
```

<img src="/assets/R8NvbZLNYoRDILxQ6AKjfwiEpag.png" src-width="2906" src-height="1558" align="center"/>

```text
After settlement staff verification, if a check item can be allowed to pass, you may click Manual Review to approve it (requires a secondary review).
```

<img src="/assets/HNWQb6WvwouR1Vx26KAjt2TAp8e.png" src-width="2904" src-height="1558" align="center"/>

```text
Review personnel may click Manual Review (or perform the approval directly in the work order review) to invoke the work order review.
```

<img src="/assets/HZeRbNflYomP1hxy9z0jMcGqpXd.png" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/CbKPb84lAokyFkx8CZ0jDdtqpZd.png" src-width="2920" src-height="1550" align="center"/>

```text
If settlement staff determine that a check item must be permanently closed due to differences in business processes, please contact customer support for assistance.
```

<img src="/assets/Kug6b2Fo4olUiexirvYjdOa7pvd.png" src-width="2926" src-height="1556" align="center"/>

```text
Once approval is completed, the pre-clearing preparation is considered finished (the interface will indicate: Manually Approved).
```

<img src="/assets/GKqnb1HftorO2dx3RCrj4zrypqe.png" src-width="2926" src-height="1558" align="center"/>

### Market Clearing — One-Click Clearing

```text
After the pre-clearing preparation has completed, you may click the Start One-Click Clearing button at the top. The system will automatically execute from the first step through the clearing and settlement tasks (when no errors occur, the system will automatically continue to the next task).

Note: If needed, you may click "Pause One-Click Clearing," but the system will wait for the current task to finish before pausing the next action (the function button will become disabled).
```

<img src="/assets/OoeabUt2Loc6gHxluDqj16g1pgg.png" src-width="3020" src-height="1536" align="center"/>

```text
If you need to perform back-office order supplementation or correct contracts, you may click "Pause One-Click Clearing" directly at Data Synchronization, then execute tasks step by step to avoid missing the pause opportunity.
```

<img src="/assets/TMWvb8x0potDYqx62sojFz7apnf.png" src-width="2482" src-height="1060" align="center"/>

```text
If a task error occurs during execution, One-Click Clearing will pause and stop at the task that reported the error; users may follow the error messages to perform subsequent corrections.
```

<img src="/assets/YSYUbAgT2o1XLMxEIU7jWLerpxd.png" src-width="3010" src-height="1606" align="center"/>

```text
At that time, you may manually select the relevant task operations in the lower-right area as needed to inspect or correct records or to proceed to the next One-Click Clearing operation; the system will then automatically execute the following task.

Note: During One-Click Clearing, you may rely on the system's automatic One-Click Clearing operation (which executes all tasks automatically), or you may select and execute tasks manually.
```

<img src="/assets/Eg7ob0mlNoHudWxqwJMjs14tpXd.png" src-width="3022" src-height="1620" align="center"/>

Day-End Data Synchronization (Client Trade)

```text
Executing this will synchronize system data, including trades, deposits and withdrawals before the day roll, transactions, account openings, and other data.
```

Pre-Clearing Checks (Trade Reconciliation)

```text
Executing the pre-clearing check will automatically trigger reconciliation of the day's trades.

If trade reconciliation fails, you can quickly jump to the Trade Reconciliation interface to review results.
```

<img src="/assets/JfDRbEyonoToxzxHkCZjwtIGpkd.png" src-width="3014" src-height="1610" align="center"/>

```text
You may query trade reconciliations for each market on the Clearing Checks page (Path: Charging Management - Market Clearing - Clearing Checks - Trade Reconciliation).

Each time you click Check, the system generates the latest check results; only the most recent results need to be maintained.
```

<img src="/assets/E9Hwb4YdZo43HVxbfHNjYQGKpFg.png" src-width="3020" src-height="1606" align="center"/>

```text
Counterparty file import error: Re-import the counterparty file in the file import interface, then re-run Pre-Clearing Checks.

Local order error: After adding, deleting, or modifying front-end orders, re-run Pre-Clearing Checks.

Treating by system data: In "Check Results" (Path: Charging Management - Market Clearing - Day-End Tasks - Clearing Checks - Check Results), change the corresponding check result to "Pass," then re-run Pre-Clearing Checks on the Day-End Tasks page.
```

<img src="/assets/Y6pSbDzBgoTQEhxKQaQj04CVpvb.png" src-width="3018" src-height="1610" align="center"/>

Clearing Billing

```text
During the Clearing Billing step, front-end contracts will be generated with status Pending Billing.

If this step is paused, you may edit the front-end order fees.
```

Clearing Posting to Accounts

```text
Based on the billing invoices, stock principal and fees will be processed into the business accounts; contract status will change from Calculated to Pending Settlement. The system will generate SDR018 series reports.

Note 1: Back-office order supplementation must be completed before this step.

Note 2: After clearing cancellation (when asset processing is set to not process), if this step has already completed, Clearing Billing and Clearing Posting to Accounts will be no-ops and original data will be retained.
```

Clearing and Settlement

```text
Positions will be processed according to contracts, adjustments, and other transactions.

Contracts for the corresponding date will be updated to Settlement Completed.

Position data will be generated.

T+2 ATI and other settlement instructions will be generated.

Temporary positions will be generated for processing corporate actions.
```

## 3. Day-End Clearing (Non-Trade Clearing)

```text
After completing market clearing, you may perform day-end clearing.
```

### Pre-Clearing Preparation

```text
Before formally executing day-end clearing, you must perform Pre-Clearing Preparation.

This must be done after completing all market clearing processes and primarily checks whether all the day's business operations have been completed.

Operation is the same as market clearing; see above for details.
```

<img src="/assets/ZRWwbxSnEor2lNxYTxqjZMBIp3g.png" src-width="2492" src-height="1412" align="center"/>

<img src="/assets/WVhhbDXrfoAqorxLe26jxeeXpIh.png" src-width="2434" src-height="1418" align="center"/>

### Day-End One-Click Clearing

```text
After Pre-Clearing Preparation has completed, click the Start One-Click Clearing button at the top.

The system will automatically execute from the first step through to Statement Generation.

After statements are generated, you may review via reports or the statement itself.
```

<img src="/assets/E9kzbwwxioi7kdxkvTcjQaMXpoc.png" src-width="2912" src-height="1522" align="center"/>

Data Aggregation

```text
Before performing this operation, you must complete cashflow date adjustments and pre-allocation/amount adjustments for portfolio fees/financing interest.

This operation consolidates trade data, adjustment data, deposits/withdrawals, closing prices, and other files across multiple markets and may be executed repeatedly. Data aggregation represents the market-wide final synchronization of day-end data; the last position processing across all markets generates complete position data.

After data aggregation, if you perform cashflow date adjustments or closing price updates, you must re-run Data Aggregation.
```

In-Clearing Checks

```text
Internal cashflow reconciliation and business operation checks.

Checks may be triggered repeatedly; after issues are resolved, re-trigger the checks.
```

Funds Clearing

```text
Execute financing interest calculations, portfolio fee computations, securities lending calculations, and related tasks.
```

Post-Clearing Checks

```text
Post-clearing checks primarily verify the execution status of the funds clearing step.
```

Statement Generation

```text
Click Generate Statement to produce statements.

Statements that have already been sent cannot be regenerated.
```

Day Roll

```text
After completing the day roll process, the system accounting date will advance to the next day.

Settlement of financing interest and related operations will be executed.

Broker commission allocations will be calculated.
```

## 4. Statement Dispatch

```text
After statements are generated, you may proceed to dispatch statements.

Path: Charging Management > Day-End Management > Statement Management > Statement Inquiry

The system supports automatic statement dispatch during the day roll aggregation, but this must be configured in advance; please contact Whale Support.
```

<img src="/assets/UzYPblM9GoLSy7xU5pCjzCpNpLh.png" src-width="3012" src-height="1600" align="center"/>

<img src="/assets/TyQgbLJjGo9lhux8s31jn7EvpbE.png" src-width="3012" src-height="1616" align="center"/>

```text
You may select records in the right-hand record area to Resend or Download statements.
```

<img src="/assets/SroebBDhoo9KoFxtGB9jIf8HpCc.png" src-width="3010" src-height="1610" align="center"/>

## 5. ATI Instruction Export

```text
On the morning of T+2, you may export ATI settlement instructions for upload to CCASS.

Path: Charging Management - Day-End Tasks - Settlement Instruction Export

Supports exporting files for future dates.

Supports exporting across multiple markets: HK, SZ, SH.
```

<img src="/assets/NeU3bucbmoGuHZxpIt7jF6mhprs.png" src-width="3012" src-height="1602" align="center"/>

<img src="/assets/OmQobIFkLoo2fcxWBCjjNa8Kp26.png" src-width="3002" src-height="1596" align="center"/>

## 6. Position Reconciliation

```text
On the morning of T+1, you may import CCASS position files on the File Import interface to perform position reconciliation.

After import, the system will automatically trigger reconciliation.
```

<img src="/assets/RzBubQWZEozx4WxwhTQjvQAfpyf.png" src-width="3010" src-height="1596" align="center"/>

<img src="/assets/VMq6bEnQ2omeioxMu7cjbLSepIc.png" src-width="3012" src-height="1610" align="center"/>

```text
After import and triggering system reconciliation processing, the reconciliation result will be In Progress.

Once the reconciliation task completes, the reconciliation result will be Unreconciled or Reconciled.
```

<img src="/assets/QzZYbnLRroh1zSx5kDJjM0cnpff.png" src-width="3016" src-height="1598" align="center"/>

```text
You may click Reconcile Again to (re)trigger system reconciliation. The system supports triggering reconciliation for historical dates.
```

<img src="/assets/KTyFbwZL9o2qL5xgEIpjLpGRpAg.png" src-width="3010" src-height="1592" align="center"/>

