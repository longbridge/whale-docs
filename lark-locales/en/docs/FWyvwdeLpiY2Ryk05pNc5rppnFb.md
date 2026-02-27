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

<img src="/assets/FzZQbKVLYov3QixERiej8EpLpQe.png" src-width="3014" src-height="1600" align="center"/>

```text
You can monitor the parsing status via the Status field in the list area; a successful parse indicates the process is complete.
```

<img src="/assets/ZsJNbWqUGosXAuxXVm3jWiUUpPj.png" src-width="3010" src-height="1604" align="center"/>

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

<img src="/assets/SwQbbUPD4oXNbrxEr2ujDL1GpO5.png" src-width="1280" src-height="640" align="center"/>

```text
After execution, the check results will be returned within five seconds. If all checks pass, you may proceed to subsequent operations.

For checks that report errors, click the upper-right corner of the check item to view the rules and operation guidance for that check.
```

<img src="/assets/TkgXbUFqBoTUHnxgNEKjp5YIpcV.png" src-width="2986" src-height="1510" align="center"/>

```text
Some checks provide exception details.
```

<img src="/assets/GYw1bjvtHopx5uxTDyjj90oepJh.png" src-width="3000" src-height="1502" align="center"/>

```text
After settlement staff verify and confirm issues, they may click "Re-execute" after completing the related business operations.
```

<img src="/assets/Es6XbQBivoRHWcxJ0y2jc9XJpId.png" src-width="3008" src-height="1502" align="center"/>

```text
After settlement staff verification, if a check item can be allowed to pass, you may click Manual Review to approve it (requires a secondary review).
```

<img src="/assets/RDJAbeZRPodEH9xI9SIjvCaHptd.png" src-width="3016" src-height="1500" align="center"/>

```text
Review personnel may click Manual Review (or perform the approval directly in the work order review) to invoke the work order review.
```

<img src="/assets/LCUlbFwmBozQFBxBhw9jV7JDpCg.png" src-width="2996" src-height="1504" align="center"/>

```text
If settlement staff determine that a check item must be permanently closed due to differences in business processes, please contact customer support for assistance.
```

<img src="/assets/S3eEbGDUKoud1jxt6GWjPiw5pJd.png" src-width="3018" src-height="1490" align="center"/>

```text
Once approval is completed, the pre-clearing preparation is considered finished (the interface will indicate: Manually Approved).
```

<img src="/assets/JROBbeDJhoXZt0x2FZrjVOGRpDh.png" src-width="1280" src-height="637" align="center"/>

### Market Clearing — One-Click Clearing

```text
After the pre-clearing preparation has completed, you may click the Start One-Click Clearing button at the top. The system will automatically execute from the first step through the clearing and settlement tasks (when no errors occur, the system will automatically continue to the next task).

Note: If needed, you may click "Pause One-Click Clearing," but the system will wait for the current task to finish before pausing the next action (the function button will become disabled).
```

<img src="/assets/PVxLbix18oXeopxRaCpji3oppUd.png" src-width="3016" src-height="1492" align="center"/>

```text
If you need to perform back-office order supplementation or correct contracts, you may click "Pause One-Click Clearing" directly at Data Synchronization, then execute tasks step by step to avoid missing the pause opportunity.
```

<img src="/assets/BVqMbeFgVoAepxxLsN9jvSlcpTd.png" src-width="3016" src-height="1482" align="center"/>

```text
If a task error occurs during execution, One-Click Clearing will pause and stop at the task that reported the error; users may follow the error messages to perform subsequent corrections.
```

<img src="/assets/YSYUbAgT2o1XLMxEIU7jWLerpxd.png" src-width="3010" src-height="1606" align="center"/>

```text
At that time, you may manually select the relevant task operations in the lower-right area as needed to inspect or correct records or to proceed to the next One-Click Clearing operation; the system will then automatically execute the following task.

Note: During One-Click Clearing, you may rely on the system's automatic One-Click Clearing operation (which executes all tasks automatically), or you may select and execute tasks manually.
```

<img src="/assets/TjNobMgBso4N9RxW4NijNOczpng.png" src-width="1280" src-height="639" align="center"/>

Day-End Data Synchronization (Client Trade)

```text
Executing this will synchronize system data, including trades, deposits and withdrawals before the day roll, transactions, account openings, and other data.
```

Pre-Clearing Checks (Trade Reconciliation)

```text
Executing the pre-clearing check will automatically trigger reconciliation of the day's trades.

If trade reconciliation fails, you can quickly jump to the Trade Reconciliation interface to review results.
```

<img src="/assets/LIq1bsJxroZFqVxZ7ITj246lpsh.png" src-width="1280" src-height="639" align="center"/>

```text
You may query trade reconciliations for each market on the Clearing Checks page (Path: Charging Management - Market Clearing - Clearing Checks - Trade Reconciliation).

Each time you click Check, the system generates the latest check results; only the most recent results need to be maintained.
```

<img src="/assets/SSSib3CDCoE20Ax6rBujREHVpcB.png" src-width="1280" src-height="639" align="center"/>

```text
Counterparty file import error: Re-import the counterparty file in the file import interface, then re-run Pre-Clearing Checks.

Local order error: After adding, deleting, or modifying front-end orders, re-run Pre-Clearing Checks.

Treating by system data: In "Check Results" (Path: Charging Management - Market Clearing - Day-End Tasks - Clearing Checks - Check Results), change the corresponding check result to "Pass," then re-run Pre-Clearing Checks on the Day-End Tasks page.
```

<img src="/assets/PXUMbvthromjAIxjg6jj2ZBnp8b.png" src-width="1280" src-height="637" align="center"/>

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

<img src="/assets/SqTVb636io9HdKxnaEsjJeFzp1c.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/WRpNbXDULoEjd1x34wgjIRg3pvb.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/MCmdbIBkPoX1rHxAZbejSS4bpNd.png" src-width="3020" src-height="1496" align="center"/>

### Day-End One-Click Clearing

```text
After Pre-Clearing Preparation has completed, click the Start One-Click Clearing button at the top.

The system will automatically execute from the first step through to Statement Generation.

After statements are generated, you may review via reports or the statement itself.
```

<img src="/assets/PLaFbJtUkoKScQx7grQjtgYgpEh.png" src-width="1280" src-height="634" align="center"/>

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

<img src="/assets/Oyzobd22Vo7hxlxF2g2jsBbDpxh.png" src-width="1280" src-height="628" align="center"/>

```text
You may select records in the right-hand record area to Resend or Download statements.
```

<img src="/assets/CTjHbO9mSoty1kxXMn2jVesFp1d.png" src-width="1280" src-height="628" align="center"/>

## 5. ATI Instruction Export

```text
On the morning of T+2, you may export ATI settlement instructions for upload to CCASS.

Path: Charging Management - Day-End Tasks - Settlement Instruction Export

Supports exporting files for future dates.

Supports exporting across multiple markets: HK, SZ, SH.
```

<img src="/assets/VT6Cbs6uNoxTOLx1kDrj9l5zpGg.png" src-width="1280" src-height="641" align="center"/>

<img src="/assets/RDB7beU7rox6EvxpqNOjwGl8pzc.png" src-width="1280" src-height="636" align="center"/>

## 6. Position Reconciliation

```text
On the morning of T+1, you may import CCASS position files on the File Import interface to perform position reconciliation.

After import, the system will automatically trigger reconciliation.
```

<img src="/assets/Q8YabJueJoj6kwxgGeUj4KK8pUf.png" src-width="1280" src-height="634" align="center"/>

<img src="/assets/RqEKbCZ3to5rf2xCAbEjIgP9pLb.png" src-width="3010" src-height="1494" align="center"/>

```text
After import and triggering system reconciliation processing, the reconciliation result will be In Progress.

Once the reconciliation task completes, the reconciliation result will be Unreconciled or Reconciled.
```

<img src="/assets/IuQ0bIZL3oWlUaxFKHAjpaygpLc.png" src-width="3002" src-height="1492" align="center"/>

```text
You may click Reconcile Again to (re)trigger system reconciliation. The system supports triggering reconciliation for historical dates.
```

<img src="/assets/GJDSbyJwAoMzaixqrKSj4JeSp8e.png" src-width="3010" src-height="1490" align="center"/>

