---
title: System Overview
slug: NO4HwcjZoiMgi8ko0m4cbrZ5nRf
sidebar_position: 2
---


# System Overview

# 1. System Overview

The clearing system is primarily orchestrated through end-of-day tasks. End-of-day tasks are divided into two modules: Market Clearing and End-of-Day Management. Market Clearing mainly processes trade data and supports market-specific billing and settlement workflows. End-of-Day Clearing processes all data including trades, adjustments, and corporate actions, performs interest calculations, and ultimately outputs reports and account statements.

<img src="/assets/L3NKbpQlpormcXxXRGijANVipDc.png" src-width="4452" src-height="1865" align="center"/>

# 2. System Configuration

## Market Management Configuration

### Service Provider Profile Management

This function is used to maintain the basic information of service providers. Records can be added, edited, or deleted.

Service providers are categorized as custodians and brokers/agents. Brokers/agents serve as trading channels; custodians are the holders of positions.

<img src="/assets/HGhBbiOwAoyieXx7jF5jUbOApah.png" src-width="3548" src-height="1806" align="center"/>

### Sub-Account (Sub-Custody) Profiles

This function is used to maintain the basic information of custodians’ sub-accounts. Records can be added, edited, or deleted.

When adding or editing, the selectable service provider must have been previously configured in the Service Provider Profile and must be of type Custodian.

This configuration item is required when configuring settlement and position rules.

<img src="/assets/LpGfbdMu8oRImExyLCFjAKB9pqf.png" src-width="3548" src-height="1806" align="center"/>

### Settlement Channel Profiles

This function is used to maintain the basic information of settlement channels. Records can be added, edited, or deleted. When adding or editing, the selectable service provider must have been previously configured in the Service Provider Profile and must be of type Broker/Agent. This configuration item is required when configuring settlement and position rules.

<img src="/assets/LuKGbBbGAoe2gTxI9jjjyhJbpEg.png" src-width="3548" src-height="1806" align="center"/>

### Settlement and Position Rule Management

Market-Level Rules

A rule can be configured separately for each market.

Special field descriptions:

- Overnight Market: If the Overnight Market option is selected, the system will set the accounting date = trade date + 1. (Example: the platform treats the U.S. equity market as an overnight market.)
- Default Custodian, Default Sub-Account ID: If no business rule matches, these defaults are used for position handling.

<img src="/assets/E3NGb8JWkodSQcxGdxJjhfnfpUd.png" src-width="3548" src-height="1806" align="center"/>

Business-Level Rules

Settlement and position processing rules may be configured at the business level; a single rule can apply to both settlement and position services.

These rules depend on the configuration of settlement/position base objects.

Field descriptions:

- Organization Number: select ALL
- Counter: select ALL
- Contract
    - Separate rules may be set for dark pool and non-dark pool trades

- Buy/Sell Direction
    - Rules can be set specifically for buys or sells

- Option Category
    - Applies to U.S. equity options; rules can be set by option category
    - Enumeration includes long position, short/obligation position

- Instruction Type
    - For flows that meet the above conditions, settlement instructions can be generated
    - Instruction types include ATI, STI, SI, ISI

- Settlement Method
    - For flows that meet the above conditions, settlement instructions can be generated
    - Settlement methods include FOP, RDP, DVP

- Default Custody Account
    - For position changes that meet the rule, position handling will be performed on the configured custodian
    - The custodian enumeration contains service providers previously added in Service Provider Profile whose type is Custodian

- Default Sub-Account
    - For position changes that meet the rule, position handling will be performed on the configured sub-account
    - The sub-account enumeration contains sub-accounts previously added in Sub-Account Profiles

<img src="/assets/MoDobfSyFoqSWoxExxPjRgWupQd.png" src-width="3548" src-height="1806" align="center"/>

## End-of-Day Task Configuration

Path: Clearing Management &gt; Market Clearing &gt; End-of-Day Tasks &gt; End-of-Day Settings

<img src="/assets/VLn2bk21HoS5UzxRosWjTBunpJg.png" src-width="2852" src-height="1374" align="center"/>

Market Settlement Configuration

Click New to add a group.

Configure market execution groups according to the broker’s trading market accounting processing order.

- Common practice is to group markets by time zone: e.g., European & American markets / Asian markets.
- Tenant brokers may also isolate certain market clearing tasks as needed.

<img src="/assets/TKlNbpk8Po1ApKxcMfvjZNVvp6c.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/TmRsbzvj2oSECYxkQMpjhAsVpmf.png" src-width="2440" src-height="934" align="center"/>

After creating multiple groups, click “Execution Order Settings” at the upper right to adjust the order. The configured market group clearing order (typical broker sequence: Americas/Europe → Asia → End-of-Day).

<img src="/assets/HHAJbVBKUoQ6Dex1qqWjJHdzpIh.png" src-width="2436" src-height="888" align="center"/>

Pre-Clearing Preparation Configuration

Editable time window: actions executed before running end-of-day tasks.

Definitions of check phases: Trade Clearing (data synchronization — checks prior to clearing and settlement); End-of-Day Clearing (data aggregation — checks prior to the day roll).

Post-failure handling definitions: Notify Only (does not block the workflow, only shows a notice), Work Order Review (blocks the workflow but can be manually approved), Enforced Validation (blocks the workflow and must be resolved).

Supported operations: enable/disable and choose the post-failure handling method.

Editing this configuration requires approval; work order identifier: clearing.before_clearing_ready.setting

Note: Some check items are mandatory and cannot be edited.

<img src="/assets/OYsUbjHWbods0mxughpjMGxHpXg.png" src-width="3574" src-height="1774" align="center"/>

Clearing Parameter Configuration

Editable time window: actions executed before running end-of-day tasks.

Editing clearing initialization configuration requires approval; work order identifier: clearing.update_system_config.exec

Note: Contact technical support for changes.

<img src="/assets/WoRMbNBYAoU2rPxug73j30Xtple.png" src-width="3574" src-height="1774" align="center"/>

## Billing Configuration

### Basic Concepts

Aggregation rules and billing scenarios are foundational configuration elements of the system, typically set during system initialization.

Package billing and personalized billing are flexible features that can be enabled based on business needs. Package billing is typically added according to user cohorts (for example, Broker A package, Cash Account package). The system can automatically assign the corresponding package during client onboarding; personalized billing is configured individually to meet a client’s special requirements.

<img src="/assets/SwyfbR2XgoGjMvxCofrjcLxqpSc.png" src-width="4113" src-height="2018" align="center"/>

### Billing Scenarios

Field Descriptions

Explanation:

- Matching Conditions: determine which flows enter the billing process.
- Billing Rules: define how to compute fee amounts, including method, granularity, days, and rounding.
- Output Result: the final billing outcome.

<img src="/assets/Mz4BbTQn3oHq4OxQH3DjHHUNpNd.png" src-width="3548" src-height="1806" align="center"/>

### Client Billing Configuration

All Operations

Field Descriptions

1. Fixed Rate: Fee Amount = Value × Rate. When calculation basis is transaction amount or position market value, rate values are non-percentage form (no %). (Example: to charge 1%, enter 0.01.)
2. Per-Transaction Tiered Rate: Effective per single statistical unit. Fee = tier_end1 × rate1 + (tier_end2 - tier_end1) × rate2 + ... + (tier_endN - tier_endN-1) × rateN. Tier input rule: left-open right-closed; the last tier value is 0 (e.g., greater than 1 and less than or equal to 3).
3. Monthly Tiered Rate: The backend aggregates monthly transaction amounts and charges based on the tier in which the transaction’s cumulative monthly volume falls. If a transaction crosses tiers, the amount is split and charged per tier, then summed. |
| Rate Currency | Billing currency. If the calculation basis provides a currency enumeration, use that currency. If calculation is by transaction amount, the fee currency follows the transaction amount currency. |
| Minimum/Maximum Fee | N/A (omitted) |
| Not Exceeding Transaction Amount Ratio | Fee amount does not exceed transaction amount × configured value / 100; applies only to equity and options trading. |

Personalized Billing

Usage Scenario

Use personalized billing when a client requires a custom fee.

Each personalized billing entry contains only one fee.

A client may be bound to multiple personalized billing entries.

Examples of Creating Personalized Billing

<img src="/assets/EoiQbcfLvo2zErxtRP1jlMCUpdh.png" src-width="2852" src-height="1374" align="center"/>

<img src="/assets/UChTb8fV8oTLZnxTTFEjdOgrpMh.png" src-width="2852" src-height="1374" align="center"/>

<img src="/assets/ZGmCbIQALo1k8hxwWm9jDACxp2R.png" src-width="2874" src-height="1312" align="center"/>

Examples of Adding Clients

<img src="/assets/NnoRbqylkogXa8xTHzuj1sRrpAh.png" src-width="2874" src-height="1312" align="center"/>

<img src="/assets/ZifkbTApsoN4xFxo4Qqj9Sndpif.png" src-width="2874" src-height="1312" align="center"/>

<img src="/assets/S5kobwZSVo2e52xaUdNj6JB8pJf.png" src-width="2522" src-height="1102" align="center"/>

Package Billing

Use package billing when a client segment (for example, the same broker and cash account type) shares identical fee standards.

A client may be bound to only one package.

A package can contain multiple billing scenarios.

Example of Creating a Package

<img src="/assets/Jfrbb0vsGoi8o9xKr3sjBLvHp0d.png" src-width="2852" src-height="1374" align="center"/>

<img src="/assets/Dz0qbV19woBuKgxIcOfjB6Zup5Z.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/XXNibJYQZoAnzWxY85ZjlZk1ppg.png" src-width="2502" src-height="1096" align="center"/>

Client Billing Inquiry

This function is used to query client billing information.

Priority Handling

Special Charges: (Personalized Billing &gt; Standard Package &gt; Global Package) &gt; Standard Charges: (Personalized Billing &gt; Standard Package &gt; Global Package)

<img src="/assets/FMhLbGGOxoPkHqxgw6fj9pZwppb.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/MNXobAeljoRbSnxEvXMjYpFqpCd.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/Y45Vbugj5op7sRxQP93jn064pDf.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/HOajbdh45okU3OxLcwZjof6Spnc.png" src-width="2502" src-height="1096" align="center"/>

<img src="/assets/BIs9b9XUXos5p8xETgcjaEALpQb.png" src-width="2502" src-height="1096" align="center"/>

## Other Billing Items

Function List

Hong Kong Market Stamp Duty Exemption

Configuration Notes

1. Data Auto-Update
    - The field data is automatically fetched from the HKEX and updated daily.

2. Data Correction Guidelines
    - If you find incorrect data, you may modify the instrument information before the clearing and billing step. Note that your changes will be overwritten by the next day’s auto-updated data; after making corrections, please contact Whale Customer Support to report the data issue.

3. Scope Limitations
    - This field does not apply to instruments outside the Hong Kong market.

4. Specific Instrument Tax Rules
    - Instruments with identifiers starting with ETF/ (ETF) or WT/ (warrant/turbo) are forced to be exempt from stamp duty.

Configuration Example

<img src="/assets/IdOVbzsILoL1swxw8iRjvmO7p7e.png" src-width="2878" src-height="1172" align="center"/>

<img src="/assets/NMS5bTMgUorVeXxlykNj0PYspHc.png" src-width="2878" src-height="1172" align="center"/>

Configurable Tradable Bond Interest Rates

Function List

Master Switch

The tradable bond interest calculation feature is enabled only after turning on the master switch.

<img src="/assets/T8lub2wDpolfhGxAbiejRxM9pOc.png" src-width="2502" src-height="1110" align="center"/>

Interest Rate Configuration

Configuration Notes

- After interest is announced, update the calendar promptly.
- If rates are not updated within 4 trading days before the ex-dividend date, interest calculations may be incorrect.
- The calendar must be configured in full in one operation; do not leave future ex-dividend dates blank.

Usage of Configuration

- Accrued Interest = Quantity × Book Price × Previous Dividend Rate × Accrued Days / Days in Year
- Accrued Days = Settlement Date - Dividend Date

System Checks Related to Configuration

- The system performs a catch-all check in Pre-Clearing Preparation within 7 calendar days.
- If an error occurs and it is not yet 4 trading days before the dividend date, manual override is permitted.
- If an error occurs and it is already within 4 trading days before the dividend date, it is recommended to update the rate to the previous rate and continue to monitor interest calculations.

Example of Creating Rate Information

<img src="/assets/NoQObyuKPoPDX1xXGSwjendZp8e.png" src-width="2502" src-height="1110" align="center"/>

<img src="/assets/PoyLbdE9YoIwz4xu0RIjJj5LpBh.png" src-width="2502" src-height="1110" align="center"/>

## Statement Configuration

### Statement Template Settings

Path: Clearing Management &gt; End-of-Day Management &gt; Statement Management &gt; Statement Templates

This function manages the standard format of statements and may include company information, contact details, and disclaimers (for reference).

<img src="/assets/FxdDbE6m6oWdIixe3xVjd3DLpLb.png" src-width="2484" src-height="1468" align="center"/>

<img src="/assets/C1EDb6lXKoPjDYxVEbzjpFbkpzc.png" src-width="2272" src-height="1438" align="center"/>

The statement template supports configuring social media information; if configured, it will be displayed on the statement; if not configured, that field will not be shown.

<img src="/assets/GLKobH4l3opGZAxQPtejguE8p3d.png" src-width="2908" src-height="1546" align="center"/>

The statement template supports statement language configuration (five options):

- Follow System: display according to client app language setting
- Global Setting (English): all client statements in English
- Global Setting (Simplified Chinese): all client statements in Simplified Chinese
- Global Setting (Traditional Chinese): all client statements in Traditional Chinese
- Global Setting (Traditional Chinese & English): all client statements bilingual (Traditional Chinese + English)

<img src="/assets/XjszbSvXfoZDUqxrYVajS6oKpvc.png" src-width="2476" src-height="1420" align="center"/>

### Statement Configuration

This function configures whether client statements are sent offline, whether the client accepts email and app notifications, default offline sending behavior for unspecified clients, and whether reminders are enabled for all processing options.

<img src="/assets/T01ybNgtHoYc01xHRJQjzvvwpzb.png" src-width="3336" src-height="1400" align="center"/>

<img src="/assets/VVCSb7yS5oAWXQxC0tUjRfjapsc.png" src-width="3346" src-height="1414" align="center"/>

A Source field has been added to the statement configuration to facilitate tracing the origin of configuration changes.

Batch add is supported by downloading a template and uploading it after filling.

<img src="/assets/MXBBbRSxwoEz1RxFlQCjUbcPp2g.png" src-width="3324" src-height="1412" align="center"/>

For newly created clients that cannot be found, a new delivery method can be added.

<img src="/assets/RjKCbLy6GoxF4VxBZtSjcFyDpFe.png" src-width="3364" src-height="1410" align="center"/>

### Client Remarks

Path: Clearing Management &gt; End-of-Day Management &gt; Statement Management &gt; Client Remarks

Provides an entry point for managing client statement remarks, enabling remarks for specific clients’ statements.

Note: If client statement remarks are to be added, they must be entered before the end-of-day job completes to take effect.

<img src="/assets/R7M4biWTdoQXh4xbScSjcxPSpYe.png" src-width="3116" src-height="1132" align="center"/>

Click the upper-right [Add Remark] to add a daily or monthly statement remark for specified clients as needed.

<img src="/assets/V8vTbwEnboWjTyxjDWDjngaup7c.png" src-width="3368" src-height="1462" align="center"/>

A bulk statement template import for remarks is also provided.

<img src="/assets/H1QZb7362oCLszx7zzujSuU2p2e.png" src-width="3366" src-height="1460" align="center"/>

Reference templates for remarks are provided:

<img src="/assets/A3IEbErNuosG4ix6urHjHEKnphd.png" src-width="1304" src-height="496" align="center"/>

Remarks can be queried and edited on the list page.

<img src="/assets/Xp2HbpEIeoXVfOxkK2QjLvPlpah.png" src-width="3358" src-height="1240" align="center"/>

### DA Statement Configuration

Path: Clearing Management &gt; End-of-Day Management &gt; Statement Management &gt; DA Statement Configuration

After opening a DA account, the account will by default be configured to generate monthly statements for March, June, September, and December with a special DA statement template. The default configuration can be modified; after modification, the latest configuration will be applied.

<img src="/assets/YvTrb9HjeowaL9xmfSQjtS7WpFf.png" src-width="3328" src-height="1454" align="center"/>

<img src="/assets/LOS4b0ecDoxLccxsUQfjBuqyphb.png" src-width="3346" src-height="1456" align="center"/>

# 3. Market Clearing (Trade Clearing) Operation Guide

## Counterparty File Import (Broker Trade)

Path: Clearing Management &gt; File Processing &gt; File Import

Click Import File and upload the file.

<img src="/assets/EZYwbfAYio2cu4xDMWZjxcMjpRh.png" src-width="3578" src-height="1798" align="center"/>

Select and upload the file.

Example: Importing Hong Kong CCASS trade files (CTF). Market: select Hong Kong; File Type: select CTF Trade File; then upload the document.

<img src="/assets/P6jpbQhgzo1aVOxvdR6jxpHYpSe.png" src-width="3578" src-height="1798" align="center"/>

Monitor the file import and parse status via the Status field in the list area. The file is considered processed only if parsing is successful.

<img src="/assets/ZLj3b4c8moNuUcx0auKj93CjpEe.png" src-width="2910" src-height="1548" align="center"/>

## Pre-Clearing Preparation

This function checks whether related configurations and the day’s business operations have been completed before executing end-of-day tasks. Market Clearing and End-of-Day Clearing have different check items.

After Market Clearing has completed trade file imports and the current accounting date is confirmed to be correct, click Execute Pre-Clearing Preparation.

<img src="/assets/QZKObkCT5oD4zrxo0Xjj3zHbpOk.png" src-width="2852" src-height="1374" align="center"/>

Execution returns check results within five seconds. If all checks pass, subsequent operations may proceed.

For check errors, click the upper-right of the check item to view the rules and operation guidance for that check item.

<img src="/assets/SgWgbvf5uoB0kOxHcZ3jNh3gpzf.png" src-width="2852" src-height="1374" align="center"/>

Some checks provide exception details.

<img src="/assets/Em18bLsKKozJm8xhQYrjkOvVpqd.png" src-width="2852" src-height="1374" align="center"/>

After reconciliation, if settlement personnel confirm there are issues, they may complete the relevant business operations and click “Re-execute.”

<img src="/assets/Ri0KbwDZZof9HzxMhC8j5CVcpwb.png" src-width="2906" src-height="1558" align="center"/>

If settlement staff determine a check item may be allowed to pass, they can click Manual Review to approve it (requires a reviewer).

<img src="/assets/ORXib844loIduwxZxqfjbu2gpNf.png" src-width="2904" src-height="1558" align="center"/>

Reviewers can click Manual Review (or approve directly via work order) to open a work order review dialog.

<img src="/assets/Gm5TbhA5xoLGzBxliMMjdIU9p2b.png" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/XhWObF2PQooJ2bxgfXljIc1PpOe.png" src-width="2920" src-height="1550" align="center"/>

If settlement staff determine a check item must be permanently disabled due to workflow differences, contact customer service for assistance.

After approval, the Pre-Clearing Preparation is considered complete (the UI will indicate: Manually Approved).

<img src="/assets/JZ6UbMJXfo5fEDxlCoYjsiBopKe.png" src-width="2852" src-height="1374" align="center"/>

Pre-Clearing Preparation Check Items

## Market Clearing One-Click Clearing

Once Pre-Clearing Preparation is completed, click the Start One-Click Clearing button at the top. The system will automatically execute from the first step through to clearing and settlement tasks (if no errors occur, the system continues to the next job automatically).

Note: You may select Pause One-Click Clearing; however, the system will wait for the current job to finish before pausing the next action (the button will gray out).

<img src="/assets/EDuZbUBJPoYV3Tx5Jhbji75apdd.png" src-width="2852" src-height="1374" align="center"/>

If background manual trade entry or contract correction is necessary, perform those actions before the clearing and billing step. You may also click “Pause One-Click Clearing” directly in Data Synchronization.

<img src="/assets/PMnVbJ7Qpoz5m0xiRIJjQOH4pCd.png" src-width="2852" src-height="1374" align="center"/>

<img src="/assets/VKdbbXwNjo8ZN3xhlzijifAKpSb.png" src-width="2852" src-height="1374" align="center"/>

If a job error occurs during the process, One-Click Clearing will pause and remain at the job that produced the error; users may follow error messages to perform fixes.

<img src="/assets/AdVFbDBZkofVrUxd3fDj83WtpOg.png" src-width="2908" src-height="1554" align="center"/>

Users may, as needed, manually select the relevant job operations at the lower-right to inspect or correct records or to advance to the next job; the system will then automatically execute the next job.

Note: During One-Click Clearing, you may rely on the system to automatically execute all jobs, or you may manually operate individual jobs.

<img src="/assets/PfL5bVloCoEj2Sx9SiajTBappxh.png" src-width="2922" src-height="1556" align="center"/>

Data Synchronization

Clicking Execute will synchronize system data (trades, cash movements before the day roll, account openings, etc.).

Pre-Clearing Checks

Clicking the Pre-Clearing Check step in the end-of-day flow will automatically trigger trade reconciliation for the day.

If trade reconciliation fails, you can quickly jump to the Trade Reconciliation page (Clearing Management &gt; Market Clearing &gt; Clearing Checks &gt; Trade Reconciliation) to view results.

<img src="/assets/GqNebpEQpoDBGjxgPuBjfkKOpdG.png" src-width="2852" src-height="1374" align="center"/>

Reconciliation Result Query

On the Clearing Checks – Trade Reconciliation page you can query trade reconciliations for each market.

Each check generates a new result; maintain the latest result.

On the Trade Reconciliation page you can view discrepancy details and overall reconciliation information.

Click the local file to view local details; click the counterparty file to view counterparty details.

Reference example:

<img src="/assets/RoNNbVkcioF1XQxXNYgjEg2epQT.png" src-width="3566" src-height="1732" align="center"/>

Manual Approval in Special Scenarios

- Counterparty file import error: re-import the counterparty file in the file import interface, then re-run Pre-Clearing Check.
- Local-side order error: add, delete, or modify front-end orders, then re-run Pre-Clearing Check.
- Use system data handling: in Check Results (Clearing Management &gt; Market Clearing &gt; Clearing Checks &gt; Check Results), set the corresponding check result to “Pass,” then re-run Pre-Clearing Check.

<img src="/assets/PNs6bXVUYo309sxbQOVj8hCYpvd.png" src-width="2920" src-height="1552" align="center"/>

Clearing Billing

During the Clearing Billing step, front-end contracts are generated with status Pending Billing.

If this step is paused, you can edit front-end order billing.

Clearing Posting (Clearing & Settlement Combined)

After execution:

- Business account processing of stock principal and fees will be performed according to the billing statements.
- Contract status changes from Calculated to Pending Settlement.
- The system will generate SDR018 series reports.

Note 1: Background manual trade entries must be completed before this step.
Note 2: If a clearing reversal is performed with asset processing set to Do Not Process, and this step has already completed, clearing billing and clearing posting will be no-ops and original data handling applies.

Clearing and Settlement

After execution:

- Position processing is performed according to contracts, adjustments, and other flows.
- Contracts for the corresponding date are marked as Settlement Completed.
- Position data is generated.
- ATI and other instructions are generated.
- Temporary positions are created for corporate action processing.

# 4. End-of-Day Clearing (Non-Trade Clearing) Operation Guide

## Pre-Clearing Preparation

Before executing End-of-Day Clearing, Pre-Clearing Preparation must be run.

- Must be run after all Market Clearing has completed.
- Check that all business operations for the day have been completed.
- Operation procedure is the same as for Market Clearing (see above).

## End-of-Day One-Click Clearing

Once Pre-Clearing Preparation is completed, click the Start One-Click Clearing button at the top.

The system will automatically execute from the first step through to statement generation.

After statements are generated, results can be reviewed via reports or statements.

<img src="/assets/OnL9bLOvyowoNdxFngAjNGaEpPe.png" src-width="2852" src-height="1374" align="center"/>

Data Aggregation

Before this action, adjust flow dates and pre-allocate combo fees/financing interest amounts as required.

This action aggregates trade data, adjustment data, cash movements, and closing price files across multiple markets. The action may be executed repeatedly.

After data aggregation, if flow date adjustment or closing price changes are performed, Data Aggregation must be re-run.

Intermediate Clearing Checks

Internal flow reconciliation and business operation checks are performed (ongoing expansion).

These are internal data checks; contact customer service if exceptions occur.

Manual approval for intermediate checks uses the same approach as trade reconciliation.

<img src="/assets/Xi7fb0hcTo6dIHxR4NFjcjsDpic.png" src-width="2846" src-height="1418" align="center"/>

Funds Clearing

Execute financing interest calculation, portfolio fees, short lending calculations, and related tasks.

Post-Clearing Checks

Internal flow reconciliation and business operation checks are performed.

These are internal data checks; contact customer service if exceptions occur.

Manual approval for post-clearing checks uses the same approach as trade reconciliation.

Statement Generation

<img src="/assets/IdILbl15rorQBlx3aa5jrorEpng.png" src-width="3364" src-height="1452" align="center"/>

<img src="/assets/PHgGbHM3koxIm9x8qQyjzQhopWf.png" src-width="3304" src-height="1452" align="center"/>

You may select entries on the right to [Resend] or [Download] statements.

<img src="/assets/HJatbo6UCo8lGYxursIjS4OrpXe.png" src-width="3360" src-height="1460" align="center"/>

You may also generate a temporary statement by inputting the client and statement date in the temporary statement window. Temporary statements support cross-month queries and allow an earliest start of 1 year and a maximum timespan of 3 months.

<img src="/assets/QjyJbk3k8oROwJxaugwjghi5phf.png" src-width="3340" src-height="1368" align="center"/>

<img src="/assets/Q6m7b4Y8mo8gybxWQdsj4YQUpfq.png" src-width="3362" src-height="1368" align="center"/>

Day Roll (Date Advance)

After executing the day roll process, the system accounting date advances to the next day. Financing interest and related settlement operations are completed, triggering broker commission calculation tasks.

# 5. Settlement Instruction Export

On the morning of T+2, ATI settlement instructions may be exported and uploaded to CCASS.

Path: Clearing Management &gt; End-of-Day Tasks &gt; Settlement Instruction Export

Supports exporting files for future dates.

Supports exporting for multiple markets: HK, SZ, SH.

<img src="/assets/SWBFbNM9Soic4ZxI1tfjGpIDpEb.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/BZ3XbawaPoLO6Kx8NGzjgP7Bphg.png" src-width="3574" src-height="1774" align="center"/>

# 6. Position Reconciliation

In the file import interface, position files can be imported; some file types will trigger automatic reconciliation processing.

<img src="/assets/Wjlfb0hrroDAsQxYW0ij8oSspJd.png" src-width="3350" src-height="1456" align="center"/>

After import and triggering system reconciliation, the reconciliation status will be In Progress.

Once the reconciliation task completes, the result will be Out of Balance or Balanced.

<img src="/assets/JAvRbQO7IoClKMxnZZEjov3LpcP.png" src-width="2930" src-height="1554" align="center"/>

Click Reconcile Again to (re)trigger system reconciliation. Historical date reconciliation is supported.

<img src="/assets/EWZnbv2z0oFtfjx4nITjsgFzp2e.png" src-width="2914" src-height="1526" align="center"/>

# 7. Non-Trade Flow Date Editing

This function is mainly used after Market Clearing when you need to change the accounting date originally used by the end-of-day process for a flow entry, i.e., to adjust the posting date of cash/position flows. Under the new mechanism, this is achieved by modifying the front-end account date.

Path: Clearing Management &gt; Market Clearing &gt; Flow Management

Single Flow Date Editing

Cash flows and position flows are edited on separate page tabs. Locate the flow record and click Edit.

<img src="/assets/HpgFbqwVEodGrtxDA4ujqx6cpQf.png" src-width="3578" src-height="1798" align="center"/>

Enter the date to be processed.

<img src="/assets/NsX1b1bKyoaHvBxPs5FjrB79pvd.png" src-width="3368" src-height="1308" align="center"/>

Observe the accounting date of the edited record to verify effectiveness.

<img src="/assets/SzRSbeXoBoKIRLxQ6LSjYbAIpOf.png" src-width="3368" src-height="1308" align="center"/>

Rerun Data Aggregation in End-of-Day Tasks.

Bulk Flow Date Editing

Select flow records, then click Bulk Edit Accounting Date.

<img src="/assets/EJk7bUrlyobxD2xwhaWjp9TBpZg.png" src-width="3344" src-height="1456" align="center"/>

Rerun Data Aggregation in End-of-Day Tasks.

Bulk Editing by Business Code

Note: For bulk date adjustments, confirm in advance whether the business code supports editing. After editing, verify the final outcome on the page.

<img src="/assets/V7gCb2hEOohqonxHiHYjLW4TpSe.png" src-width="3356" src-height="1344" align="center"/>

Update Data

Flow synchronization is near real-time. After submission, you may refresh all data for the current accounting date.

<img src="/assets/BYIxb67LPo1BETxY7r5jG0tppGd.png" src-width="3578" src-height="1798" align="center"/>

# 8. Back-Office Client Contract Manual Entry and Broker Quick Entry

Provides functionality to create client manual trades and broker quick entry contract records; these manual entries correspond to business “Client trade” and “Broker trade” manual entries.

Enter client contracts before the clearing and billing step.

Upside contracts (agency contracts) are created based on contract records for related manual entry operations.

Upside contracts (agency contracts) must be operated before the Pre-Clearing Check step.

Back-Office Client Contract Manual Entry

Click New Client Manual Entry.

<img src="/assets/SXBsbVO2RoKmnrx4yfsjbBejpku.png" src-width="3008" src-height="1494" align="center"/>

First, complete basic information. The system will automatically estimate certain fields (which may be further adjusted manually).

<img src="/assets/ZfQ2bfsIaoHG0wxP9aLjWAnjpJd.png" src-width="3008" src-height="1494" align="center"/>

The system supports manual entry for historical trade dates (up to the past 5 trading days). After manual entry, the trade date will be the historical date and the accounting date will be the current date.

<img src="/assets/USwjb1HaLo5vbZxQ8EjjvMBopDf.png" src-width="3008" src-height="1594" align="center"/>

If submitted data contain errors, the back-office contract basic information can be edited further.

<img src="/assets/CR7rb7yzPo1xXxxTGH4jgZdPpte.png" src-width="3008" src-height="1494" align="center"/>

<img src="/assets/VWKcbvIKio4oPBxNirEjh6Zvpah.png" src-width="3008" src-height="1494" align="center"/>

Click Billing to automatically calculate fees.

After preliminary calculation, fees may be edited further (see Fee Query and Editing).

Note: If Billing, Adding, or Editing operations have been performed, then even if all fees are later deleted, fees will not be recalculated in the Clearing Billing step; if no operations have been performed on the fee information page, fees will be automatically calculated during the Clearing Billing step based on configured rules.

<img src="/assets/W4m6bUoV0omkJOxLRVBjrvIfpSg.png" src-width="3008" src-height="1494" align="center"/>

If the product is an OTC product or the trading channel has not been system-integrated, the settlement channel should be selected as OTC.

<img src="/assets/RkRNb4Ph4oCX68xR45WjGScbpje.png" src-width="3008" src-height="1594" align="center"/>

For OTC manual entries, the system will auto-calculate custodian and sub-account based on the master account.

Custodians and sub-accounts may be edited further; see Position Information Query and Editing.

<img src="/assets/EKofbnNOaodNWPx8B4JjIr7wpHk.png" src-width="3008" src-height="1494" align="center"/>

Broker Quick Entry

After completing all client manual entries, use the Broker Quick Entry button at the upper right to create broker manual entries.

Note: Broker Quick Entry can only query data where the settlement channel is OTC. The generated data is used for trade reconciliation in the Pre-Clearing Check step.

<img src="/assets/NnxlbO43ComSS1xqm3DjlTU1pWc.png" src-width="2898" src-height="1520" align="center"/>

Institution Contract (Agency Contract) Preliminary Calculation

Select all filter criteria, click Calculate Agency Fees and Refresh. The system will automatically calculate agent fees (see the Agency Contract Operation Guide later).

<img src="/assets/RnNobDCTwofINHx2QtJj5kyUp9d.png" src-width="2914" src-height="1098" align="center"/>

Update Counterparty File

After initial data verification, modify client contracts as needed, re-enter the page, and refresh.

Operators may click Edit to make temporary data adjustments. Note: this edit is not saved to the database and is intended for use with the “Update Counterparty File” button only.

<img src="/assets/NayCbEFe3odU9yxsBtMjeeDMpxd.png" src-width="2926" src-height="1554" align="center"/>

After verification, for datasets under 200 rows, click Update Counterparty File; the file can be used for trade reconciliation in Pre-Clearing Check.

<img src="/assets/Ca9rb6DM5oZSPWxDqJzjpju9pBf.png" src-width="2922" src-height="848" align="center"/>

For datasets over 200 rows, download the template, edit it, and import the file before the Pre-Clearing Check step.

<img src="/assets/OPcPbEbPyoF8ZWx8joxjcpYYpkd.png" src-width="2920" src-height="838" align="center"/>

<img src="/assets/Tg6Tbku5Wo6uzSxOfb0jbNV8pCg.png" src-width="2904" src-height="1542" align="center"/>

# 9. Query and Edit Front-End Trade Contracts

After executing the Clearing Billing step, the system generates client contracts based on front-end trade orders and billing configuration.

Click Details to view client contract details.

The front-end contract supports editing only fee information, IBOND accrued interest, settlement currency, and position information.

If other fields of the front-end contract have issues, the front-end contract data must be corrected first, then Pre-Clearing Check and Clearing Billing must be run sequentially.

<img src="/assets/Qpwgb9LkMoO6gcxQdnljxWkWpWB.png" src-width="2456" src-height="1242" align="center"/>

<img src="/assets/KLc8bov8zosJl3xF3plj3cipp8c.png" src-width="2484" src-height="1530" align="center"/>

The Details page shows basic information including trade date, settlement date, and any special fee conditions.

Data whose source is “Trade” are front-end contracts.

<img src="/assets/MHF8bNMoRojE7LxCtyLjtyUNpQz.png" src-width="2486" src-height="1544" align="center"/>

Settlement Currency Editing

Click Edit in Basic Information.

<img src="/assets/CazRbwPbpoWKVZx0ddYjVPAhpLc.png" src-width="2486" src-height="1502" align="center"/>

Modify the settlement currency and exchange rate and submit.

The system will calculate accrued interest (in settlement currency), transaction amount (in settlement currency), and fees (in settlement currency) based on the exchange rate and settlement currency.

The system will perform fee deductions and settlement in the settlement currency.

<img src="/assets/G0ZpbVBnSoRw8nxBxgrj2maEpHg.png" src-width="2512" src-height="1558" align="center"/>

Trade Record Query

Click Trade Records to display trade records.

<img src="/assets/D6t3binBroH1x2x3OzLjAUJfpZc.png" src-width="2480" src-height="1542" align="center"/>

IBOND Accrued Interest Editing

In Trade Records, click Edit to modify accrued interest.

<img src="" src-width="100" src-height="100" align="center"/>

Fee Query and Editing

Click Fee Information to display billing details.

<img src="/assets/VIu9bGsPjoS6LUxVDaijPhhmpMg.png" src-width="2488" src-height="1526" align="center"/>

Click Recalculate to recompute all fees.

<img src="/assets/ESoLbtSy6obKsdxjyzAj4Xbqpxb.png" src-width="2480" src-height="1536" align="center"/>

Click Add to add a fee; the added fee type must not duplicate an existing type.

<img src="/assets/HA3mbXVYioJR14xU16CjrSphpMc.png" src-width="2894" src-height="1548" align="center"/>

Click Delete to delete a fee.

<img src="/assets/IUYAbVq1Io7GsoxYXJDj3AS9p6f.png" src-width="2892" src-height="1538" align="center"/>

Click Edit to modify a fee.

<img src="/assets/X1mtbt9tco9TBix5yfdje9vJpoe.png" src-width="2916" src-height="1538" align="center"/>

Position Information Query and Editing

Click Position Information to query position data.

<img src="/assets/FepHbZHXroP38fxJD2mj1jFIpdI.png" src-width="2900" src-height="1552" align="center"/>

Click Edit to modify custodian and sub-account.

<img src="/assets/WiG0bhEzNoHdCmx6ZbKjZcNBp5e.png" src-width="2914" src-height="1544" align="center"/>

# 10. Early Settlement

If early settlement posting is required on T+2 (N), this function allows clients to process fund-related operations earlier.

Path: Clearing Management &gt; Market Clearing &gt; Settlement System &gt; Settlement Batches Tab

Click [Early Settlement] and input the market(s) for early settlement (multiple selections allowed).

<img src="/assets/WS2Gbd0B6oRD9LxEBpMjNT75pVh.png" src-width="3364" src-height="1450" align="center"/>

Monitor whether the settlement batch has finished processing.

<img src="/assets/KLYGb4oEioterXxAZbcjBnxhp9d.png" src-width="2516" src-height="740" align="center"/>

# 11. Position Adjustments

Path: Clearing Management &gt; End-of-Day Management &gt; Position Management &gt; Position Query

Sub-Account Position Adjustment

Query the relevant client record and click [Edit Position] in the right record area.

<img src="/assets/XEq0b0baioQpIFxO7GOjb2Ffpl8.png" src-width="2924" src-height="1546" align="center"/>

Adjust the sub-account position according to actual data (the sub-account position must be consistent with holdings after the adjustment).

<img src="/assets/MCpFbrv3vo27n7xJXbijp9E2pec.png" src-width="2914" src-height="1538" align="center"/>

An adjustment record will be generated on the position flow page (Tab).

<img src="/assets/YpnOb2Gd7oD8P9xHQvsjwn04prf.png" src-width="2892" src-height="1022" align="center"/>

Internal Position Transfer

Query the relevant client record and click [Internal Transfer] in the right record area.

<img src="/assets/AYFobL1JVoFeiwxEWWsjtImjp3f.png" src-width="2920" src-height="1548" align="center"/>

After adjustment, two adjustment records will be generated on the position flow page.

<img src="/assets/SdjebHlM9ofn7Lxwy0mjImOjpif.png" src-width="2922" src-height="1236" align="center"/>

Bulk Adjustments

Bulk transfers can be performed via a pre-downloaded template.

<img src="/assets/Ra3ObKq3Sot4mUxNao2j4IJYpuf.png" src-width="2052" src-height="640" align="center"/>

<img src="/assets/O3f3bZPa2oF2hvx0FpHj22RNpLf.png" src-width="2926" src-height="1556" align="center"/>

# 12. Financing Interest Adjustments

Financing Interest Inquiry

You can query each client’s financing interest billing details on the financing interest bill page.

- Current bill = Post-Deduction Amount + Adjusted Interest
- Post-Deduction Amount = Pre-Deduction Amount + Deduction Amount

<img src="/assets/ESywbTf15oXewdx55e2jMk0npxc.png" src-width="2910" src-height="1544" align="center"/>

Click Post-Deduction Amount to view daily financing interest details.

<img src="/assets/YgPCbBE5VoBJPOx2sz1jB4B9pEf.png" src-width="2910" src-height="1554" align="center"/>

<img src="/assets/X1sNb9XcOoAq2SxQkLDj3bdXpUb.png" src-width="2898" src-height="1522" align="center"/>

Financing Interest Adjustments

Note: During the day roll period (from the first Data Aggregation click until the day roll completes), interest adjustments cannot be performed.

Click Adjust to modify financing interest.

<img src="/assets/BfyEbhNBeo5LG9xiOkwjGHSZpjd.png" src-width="2910" src-height="1528" align="center"/>

Adjust by Principal: the system will calculate the required interest adjustment based on the entered principal.

<img src="/assets/Rj3gbvntNozmvLx6UiUj8Ni4pDE.png" src-width="2914" src-height="1548" align="center"/>

Adjust by Result: the system will calculate the required interest adjustment based on the entered total interest for that day.

<img src="/assets/TFFNbMaH4o906xxmDPcjdTNNphg.png" src-width="2928" src-height="1558" align="center"/>

Adjust by Occurrence Amount: the system will adjust interest based on the entered amount. This mode supports modifying multiple days simultaneously.

<img src="/assets/TkXRbWSjboAnnCxba9qjBOQmpQP.png" src-width="3008" src-height="1494" align="center"/>

Adjusted flows can be queried on the Error Flows page.

<img src="/assets/PyO0bJI2womd9pxCevbjihQMpVU.png" src-width="2482" src-height="1406" align="center"/>

In special cases where no financing interest bill has been generated, you may create a bill first and then make adjustments.

<img src="/assets/VDWbb6TC1orB0pxZQsrj6psKpGb.png" src-width="2912" src-height="1550" align="center"/>

Bulk Adjustments

Bulk processing by occurrence amount is supported.

<img src="/assets/LGOVb9PVmoPEVBxmJapjGN2gp6g.png" src-width="3578" src-height="1798" align="center"/>

Early Settlement

Note: During the day roll period (from the first Data Aggregation click until the day roll completes), early settlement cannot be performed.

Filter clients and click Early Settlement.

<img src="/assets/L4YkbElc3oFGekx20vTjqPeYpLe.png" src-width="2900" src-height="1546" align="center"/>

# 13. Temporary Editing of Closing Prices

Stocks with positions will be displayed on the Closing Price Management page.

Path: Clearing Management &gt; Market Clearing &gt; Closing Price Management

Prerequisite: the end-of-day process step Clearing & Settlement / Data Aggregation must have been completed.

<img src="/assets/LZ8XbcdfNoGF49xvrUWjStiRp7d.png" src-width="3362" src-height="1342" align="center"/>

To temporarily modify the closing price used for clearing, click Edit.

<img src="/assets/XYmPbqsDPon7MnxtevijWPNmpMe.png" src-width="3460" src-height="1555" align="center"/>

Modify the closing price and submit.

After submission, re-run Data Aggregation.

If Pre-Clearing Preparation reported errors, you may first execute Clearing & Settlement, and then re-run Pre-Clearing Preparation.

# 14. Clearing Reversal

Select the date to be reversed, click Clearing Reversal, choose the reversal items as needed, and submit.

Note 1: This task is asynchronous and may require some time to complete.

Note 2: Only Clearing Reversals for T and T-1 days are allowed.

Note 3: For consecutive reversals, reversal operations must be performed in order.

Click New Clearing Reversal.

<img src="/assets/Likwb9L51oGYZlxEE3CjJ6uHpjA.png" src-width="3578" src-height="1798" align="center"/>

Choose the actual items according to the reversal scenario.

<img src="/assets/XUn0bEvtFoVuFgxGYruj5LrRptb.png" src-width="3578" src-height="1798" align="center"/>

After submission, monitor reversals on the list page.

<img src="/assets/Wb6KbCRsgod7JNxqla9jTWaJpOJ.png" src-width="3578" src-height="1798" align="center"/>

- Scenario: Post-day-roll adjustments that move next-day flows to current day; post-day-roll adjustments that move same-day flows to next day; adjustments to closing price after funds clearing
    <img src="/assets/WMlQbMeKtolokqxkOtej6TSRpAb.png" src-width="3020" src-height="1452" align="center"/>
    - Clearing Reversal Form

- Scenario: Pre-day-roll discovery of billing issues (contract fees, manual entries) requiring adjustment
    <img src="/assets/XjIMbEFaKowpUixpO8pjShI7ptd.png" src-width="3020" src-height="1452" align="center"/>
    - Clearing Reversal Form

- Scenario: End-of-month financing interest settlement exceptions (e.g., a particular client’s financing interest requires adjustment and re-settlement)
    <img src="/assets/LaTAbr4c3oYQTxxvfjWjbJG4pbd.png" src-width="3020" src-height="1452" align="center"/>
    - Clearing Reversal Form

- Scenario: Typhoon day early settlement that needs reversal
    <img src="/assets/CXV0b2sNeoGPRbx7HWNjHNuwpFh.png" src-width="3020" src-height="1452" align="center"/>
    - Clearing Reversal Form

- Scenario: Post-day-roll discovery of billing issues requiring adjustment; high-volume brokers are advised to contact technical support
    <img src="/assets/YvN7bqb7ToTeHgxuNcCj4pDdpqf.png" src-width="3020" src-height="1452" align="center"/>
    - Clearing Reversal Form

# 15. Typhoon Day Handling

Handling of Typhoon Signal No. 8

Path: Clearing Management &gt; Market Management – Typhoon Day Handling

Typhoon Day Full-Day Market

Scenario: On September 2 a typhoon occurs and Hong Kong stock settlement is delayed overall.

- Select the accounting date to be processed (e.g., September 2) and the market(s) to be processed (HK).
- Choose whether to postpone both funds and securities or to postpone funds only.
- After submission: all pending settlement securities (and/or funds) will be postponed by one accounting date. Click Confirm to update the view.

<img src="/assets/CtlFbhi5AoFiNrx1jpGjLSkVpMb.png" src-width="3578" src-height="1798" align="center"/>

If end-of-day operations need to be performed before the day roll, click Advance Day Roll in End-of-Day Tasks. This function is supported after 2:30 PM; operation is recommended on the following day.

Note: The Advance Day Roll button requires a configured work order approval to operate.

<img src="/assets/CLSzb6DZgoYulNxJQ8WjVIDSpbc.png" src-width="3332" src-height="1192" align="center"/>

<img src="/assets/IXLbbVDIFo9IMLxevJEjL9VMpje.png" src-width="3368" src-height="1172" align="center"/>

Typhoon Day Half-Day Market

For mornings with trading but an afternoon closure, select funds-only postponement.

<img src="/assets/Z0Q6b8BlIohubKxhE5OjmGdOpzf.jpeg" src-width="1280" src-height="643" align="center"/>

