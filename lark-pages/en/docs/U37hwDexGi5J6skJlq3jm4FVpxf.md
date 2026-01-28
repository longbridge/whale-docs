---
title: Quick Start (OB Onboarding as LB)
slug: APK0wYG9UiOtn1kt3X7cgoNPnPe
sidebar_position: 0
---


# Quick Start (OB's Quick Start is LB)

# Quick Start (OB Onboarding as LB)

# Applicable Scenarios

- OB mode, onboarding as Longbridge Securities
- Broker operates only in the Hong Kong market

# Quick Start

# Prerequisites

You must obtain the following authorizations before the system functions can be used normally.

# Operational Instructions

## 1. Import Trading Files

- Around 5:00 PM Hong Kong time, click Quick Parse to import the trading file.
- Navigation: Clearing Management &gt; Market Clearing &gt; Quick Import

You can monitor the parsing status through the Status field in the list area; parsing is considered complete only after it succeeds.

## 2. Market Clearing (Trade Clearing)

- After the trading file import is completed, you may proceed with market clearing.
- Navigation: Clearing Management &gt; Market Clearing &gt; End-of-Day Tasks

### Pre-clearing Preparation

- This function checks whether the required configurations and the day’s business operations have been completed before execution.
- After confirming that the current accounting date is correct, click Execute Pre-clearing Preparation.
- Note: If only the Hong Kong market is used, U.S. and European market clearing can be hidden during initial setup.
- After execution, the checks will return results within 5 seconds. If all checks pass, subsequent operations may proceed.
- For checks that report errors, click the top-right corner of the check item to view the rules and operational guidance for that item.
- Some checks provide detailed exception information.
- If settlement personnel confirm issues, they may complete the relevant business operations and click “Re-execute.”
- If settlement personnel determine that a check item can be approved, they may click Manual Review to approve it (a verification review is required).
- Reviewers may click Manual Review (or directly review within a work order) to open the work order review interface.
- If, after verification, a check item must be permanently closed due to differences in business processes, contact customer service for assistance.
- Once a manual approval is completed, the Pre-clearing Preparation is considered finished (the interface will display: Manually Approved).

### Market Clearing — One-Click Clearing

- After Pre-clearing Preparation has been executed and completed, you may click the [Start One-Click Clearing] button. The system will automatically execute from the first step through the clearing and settlement jobs. When no errors occur, the system will automatically continue to the next job.
- Note: If necessary, you may click “Pause One-Click Clearing,” but the system will wait until the current job finishes before pausing the next action (the button will be grayed out).
- To perform background order supplementation or to correct contracts, click “Pause One-Click Clearing” on the Data Synchronization page and then execute steps manually in sequence to avoid missing the pause timing.
- If a job error occurs mid-process, One-Click Clearing will pause and stop at the job that produced the error. Users may refer to the error message to perform subsequent corrections.
- At that time, depending on business needs, you may manually select related job actions on the lower right to check or correct records or to proceed to the next one-click clearing operation; the system will then automatically execute the next job.
- Note: During One-Click Clearing, you may rely on the system’s automatic one-click execution (which runs all jobs automatically) or manually select and execute individual jobs.

Day-End Data Synchronization (Client Trade)

- Executing this step synchronizes system data, including trades, deposits and withdrawals prior to the day-cut point, trades, account openings, and other related data.

Pre-clearing Checks (Trade Match)

- Executing the pre-clearing check step will automatically trigger trade reconciliation for the day.
- If trade reconciliation fails, you can quickly jump to the Trade Reconciliation interface to view results.
- In Clearing Checks (Navigation: Clearing Management &gt; Market Clearing &gt; Clearing Checks &gt; Trade Reconciliation), you can query trade reconciliation for each market separately.
- Each time you click Check, the system generates the latest check result; maintain only the latest result.
- Counterparty file import errors: Re-import the counterparty file in the file import interface, then re-run Pre-clearing Check.
- Local order errors: After adding, deleting, or modifying front-end orders, re-run Pre-clearing Check.
- Process as system data: In “Check Results” (Navigation: Clearing Management &gt; Market Clearing &gt; End-of-Day Tasks &gt; Clearing Checks &gt; Check Results), change the corresponding check result to “Pass,” then re-run Pre-clearing Check from the End-of-Day Tasks page.

Clearing Billing

- During the Clearing Billing step, front-office contracts are generated with status set to Pending Billing.
- If this step is paused, you may edit front-office order charges.

Clearing Posting

- Based on billing statements, stock principal and fees are posted to business accounts; contract status changes from Calculated to Pending Settlement. The system will generate SDR018 series reports.
- Note 1: Background order supplementation must be completed before this step.
- Note 2: If clearing is reversed (asset handling set to do not process) after this step has completed, Clearing Billing and Clearing Posting will be no-ops and will be handled according to the original data.

Clearing Settlement

- Positions are processed based on contracts, adjustments, and other transactions.
- Contracts for the relevant date change to Settlement Completed.
- Position data is generated.
- T+2 ATI and other settlement instructions are generated.
- Temporary holdings are generated for corporate action processing.

## 3. End-of-Day Clearing (Non-trade Clearing)

- After Market Clearing is completed, you may perform End-of-Day Clearing.

### Pre-clearing Preparation

- Before formally executing End-of-Day Clearing, execute the Pre-clearing Preparation.
- This must be performed only after all market clearing has been completed; it mainly checks whether all business operations for the day have been completed.
- The operation method is the same as Market Clearing; see above for details.

### End-of-Day One-Click Clearing

- After Pre-clearing Preparation is complete, click the [Start One-Click Clearing] button.
- The system will automatically execute from the first step through to the Statement Generation step.
- After statements are generated, they may be reviewed via reports or the statements themselves.

Data Aggregation

- Before this operation, complete the posting date adjustments, advanced allocation of securities package fees / financing interest, and any amount adjustments.
- This operation processes trade data, adjustment data, deposits and withdrawals, closing prices, and other files across multiple markets and may be clicked repeatedly. Data Aggregation represents the last synchronized end-of-day data across all markets; it also represents the last full position processing across all markets, generating complete position data.
- After performing Data Aggregation, if posting date adjustments or closing prices are changed, re-run Data Aggregation.

In-Progress Checks

- Internal transaction reconciliation, business operation checks, etc.
- Checks may be triggered repeatedly; after resolving issues, re-trigger the checks.

Fund Clearing

- Execute tasks such as financing interest calculation, securities package fees, and securities lending calculations.

Post-clearing Checks

- Post-clearing checks primarily examine the execution status of the fund clearing steps.

Statement Generation

- Click Statement Generation to produce statements.
- Statements that have already been sent cannot be regenerated.

Day Cut

- After executing the day-cut process, the system accounting date advances to the next day.
- Settlement operations for financing interest and similar items are processed.
- Broker commission calculations are performed.

## 4. Statement Sending

- After statements are generated, you may proceed to send statements.
- Navigation: Clearing Management &gt; End-of-Day Management &gt; Statement Management &gt; Statement Query
- The system supports automatic statement sending during the day-cut aggregation step, but this must be configured in advance; please contact Whale Customer Support for configuration.
- You may select records in the right-hand record area to Resend or Download statements.

## 5. Position Reconciliation

- On the morning of T+1, you may import the CCASS position file in the Quick Import interface to perform position reconciliation.
- After import, the system will automatically trigger reconciliation.
- After import and triggering the system reconciliation process, the reconciliation result status will be In Progress.
- Once the reconciliation task completes, the reconciliation result will be either Unreconciled or Reconciled.
- Clicking Reconcile Again will (re)trigger the system reconciliation. The system supports triggering reconciliation for historical dates.

