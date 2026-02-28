---
title: System Overview
slug: NO4HwcjZoiMgi8ko0m4cbrZ5nRf
sidebar_position: 2
---


# System Overview

# 1. System Overview

The clearing system is primarily orchestrated through Day-End tasks. Day-End tasks are divided into two modules: Market Clearing and Day-End Management. Market Clearing mainly processes trade data and supports market-specific billing and settlement workflows. Day-End Clearing processes all data including trades, adjustments, and corporate actions, performs interest calculations, and ultimately outputs reports and account statements.

<img src="/assets/UirUwz9SfhzfJObW1FBjunlOpkc-board.jpeg"/>

# 2. System Configuration

## Market Management Configuration

### Service Provider Profile Management

This function is used to maintain the basic information of service providers. Records can be added, edited, or deleted.

Service providers are categorized as custodians and brokers/agents. Brokers/agents serve as trading channels; custodians are the holders of positions.

<img src="/assets/GkocbOHMKoPptKxIEb6jz4AYpzd.png" src-width="2990" src-height="1452" align="center"/>

<img src="/assets/Weqsb0JX9oEeGpxoViijxgizp6c.png" src-width="1515" src-height="773" align="center"/>

### Sub-Account (Sub-Custody) Profiles

This function is used to maintain the basic information of custodians’ sub-accounts. Records can be added, edited, or deleted.

When adding or editing, the selectable service provider must have been previously configured in the Service Provider Profile and must be of type Custodian.

This configuration item is required when configuring settlement and position rules.

<img src="/assets/N5wubvlszo4aoExoInpjY1SWpvc.png" src-width="3012" src-height="1450" align="center"/>

<img src="/assets/DCkZbSxycoNQBHxFxOIjptIvpeh.png" src-width="3006" src-height="1440" align="center"/>

<img src="/assets/Md4RbnYVVo4ykKxojzGj8DbapNd.png" src-width="3020" src-height="1454" align="center"/>

### Settlement Channel Profiles

This function is used to maintain the basic information of settlement channels. Records can be added, edited, or deleted. When adding or editing, the selectable service provider must have been previously configured in the Service Provider Profile and must be of type Broker/Agent. This configuration item is required when configuring settlement and position rules.

<img src="/assets/GBoRbcJUPoz7QJxlvlWjfCZxpEg.png" src-width="1280" src-height="653" align="center"/>

<img src="/assets/BY4vbTzxro8eTMxL85EjFOFxpXd.png" src-width="3022" src-height="1452" align="center"/>

### Settlement and Position Rule Management

Market-Level Rules

A rule can be configured separately for each market.

Special field descriptions:

- Overnight Market: If the Overnight Market option is selected, the system will set the accounting date = trade date + 1. (Example: the platform treats the U.S. equity market as an overnight market.)
- Default Custodian, Default Sub-Account ID: If no business rule matches, these defaults are used for position handling.

<img src="/assets/Oj0IbxkIpojL7wxJReMjUQP0pyA.png" src-width="3002" src-height="1446" align="center"/>

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

<img src="/assets/AQTUbdE7qo8jB1xbxykjc9LYp1g.png" src-width="3006" src-height="1448" align="center"/>

<img src="/assets/KruVbFGTZo7eYPxVY5HjVMQ5pWh.png" src-width="3002" src-height="1442" align="center"/>

## Day-End Task Configuration

Path: Day-End Settlement &gt; Day End Clear &gt; Day-End Tasks &gt; Setup &gt; Day-End Configuration &gt; Market Rules

Or: Service Parameter &gt; Market Management &gt; Market &gt; Edit

<img src="/assets/Kz8gbSCmDo5oGuxbzhtjp3E8p7d.png" src-width="3010" src-height="1440" align="center"/>

<img src="/assets/Si9lbN6xKop6ARxVUGlj4Zo5pub.png" src-width="3014" src-height="1454" align="center"/>

Market Settlement Configuration

Click New to add a group.

Configure market execution groups according to the broker’s trading market accounting processing order.

- Common practice is to group markets by time zone: e.g., European & American markets / Asian markets.
- Tenant brokers may also isolate certain market clearing tasks as needed.

<img src="/assets/QOgebptEIoGiH2xrUA1jVyXxpkg.png" src-width="3012" src-height="1448" align="center"/>

<img src="/assets/VznbbtqGZootJcxfGG4j66vGpF9.png" src-width="3010" src-height="1442" align="center"/>

<img src="/assets/QCXgbvroFo6ASQx0zALjNgP3pfd.png" src-width="2996" src-height="1446" align="center"/>

<img src="/assets/GgGobkyi9oMTXYxn07mj9vLBpad.png" src-width="3016" src-height="1440" align="center"/>

After creating multiple groups, you can drag the slider to change the execution order. The typical market group clearing order is: Americas/Europe → Asia → Day-End.

<img src="/assets/EjRhbuwuOoc2EbxbHXAjLlvOp9f.png" src-width="3012" src-height="1448" align="center"/>

Health Check Before Clearing Configuration

Editable time window: actions executed before running Day-End tasks.

Definitions of check phases: Trade Clearing (data synchronization — checks prior to clearing and settlement); Day-End Clearing (data aggregation — checks prior to the day roll).

Post-failure handling definitions: Notify Only (does not block the workflow, only shows a notice), Work Order Review (blocks the workflow but can be manually approved), Enforced Validation (blocks the workflow and must be resolved).

Supported operations: enable/disable and choose the post-failure handling method.

Editing this configuration requires approval; work order identifier: clearing.before_clearing_ready.setting

Note: Some check items are mandatory and cannot be edited.

<img src="/assets/KHNxbzapAoeToexkYb1jTweLpzc.png" src-width="3012" src-height="1442" align="center"/>

Clearing Parameter Configuration

Editable time window: actions executed before running Day-End tasks.

Editing clearing initialization configuration requires approval; work order identifier: clearing.update_system_config.exec

Note: Contact technical support for changes.

<img src="/assets/AjPFbY3X3obaNNxO3Apjt5YhpNb.png" src-width="3014" src-height="1498" align="center"/>

## Billing Management

### Basic Concepts

Aggregation rules and billing scenarios are foundational configuration elements of the system, typically set during system initialization.

Package billing and personalized billing are flexible features that can be enabled based on business needs. Package billing is typically added according to user cohorts (for example, Broker A package, Cash Account package). The system can automatically assign the corresponding package during client onboarding; personalized billing is configured individually to meet a client’s special requirements.

<img src="/assets/T7KPwkO0FhUeDobqQWLjnKwYp7d-board.jpeg"/>

### Billing Scenarios

Field Descriptions

Explanation:

- Matching Conditions: determine which flows enter the billing process.
- Billing Rules: define how to compute fee amounts, including method, granularity, days, and rounding.
- Output Result: the final billing outcome.

<img src="/assets/FzXNba711ogGc8xTG9Djt4uspZe.png" src-width="3014" src-height="1502" align="center"/>

<img src="/assets/DrgLbi7oNotlhUxLcJ6jkGz5pnc.png" src-width="3008" src-height="1504" align="center"/>

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

<img src="/assets/UXlgbh0BCo2SOWxr3A2jMSdxpCA.png" src-width="3002" src-height="1502" align="center"/>

<img src="/assets/L7zybIY48oitfjxHxxAjPHZGpfe.png" src-width="3012" src-height="1506" align="center"/>

<img src="/assets/MkzQbhyOEoBlOpxChftjPk8epEe.png" src-width="3004" src-height="1482" align="center"/>

Examples of Adding Clients

<img src="/assets/Vgkub8hzeo5DpRxUvr2jFkW9p2Q.png" src-width="3004" src-height="1492" align="center"/>

<img src="/assets/N4gEbeJQjo3GjIxxVWDjXXidpNc.png" src-width="2994" src-height="1496" align="center"/>

<img src="/assets/RHbPb05b6oXkJ8xV6SXjLZRDpHc.png" src-width="3022" src-height="1508" align="center"/>

Package Billing

Use package billing when a client segment (for example, the same broker and cash account type) shares identical fee standards.

A client may be bound to only one package.

A package can contain multiple billing scenarios.

Example of Creating a Package

<img src="/assets/PtJRbjh1BoOsfFxPbiVjHjhsp7b.png" src-width="3012" src-height="1496" align="center"/>

<img src="/assets/PgyIbBDM3oUXrXxcbhxjZXVMpKg.png" src-width="3014" src-height="1502" align="center"/>

<img src="/assets/WFN0bjNsTo3rgxxSvjQj5S8tpNf.png" src-width="3008" src-height="1490" align="center"/>

Client Billing Inquiry

This function is used to query client billing information.

Priority Handling

Special Charges: (Personalized Billing &gt; Standard Package &gt; Global Package) &gt; Standard Charges: (Personalized Billing &gt; Standard Package &gt; Global Package)

<img src="/assets/RPH4bccz9oXcvvxYKHFjCW6Hpqc.png" src-width="3010" src-height="1504" align="center"/>

<img src="/assets/S6G4bIRSpo3DlMxyShfjOZiSp9d.png" src-width="2998" src-height="1494" align="center"/>

<img src="/assets/EWyxbxGsfo9By9x43zIjMIHApLe.png" src-width="3014" src-height="1492" align="center"/>

<img src="/assets/QKpqbsStiokBjAxfrutjz1x6p3g.png" src-width="3012" src-height="1496" align="center"/>

<img src="/assets/Zzv3bQ3vIoKg3bxi9GajN6p3pfh.png" src-width="3016" src-height="1506" align="center"/>

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

<img src="/assets/SedCb3sCBoPSsxxYVUjjiT3Hpff.png" src-width="3014" src-height="1508" align="center"/>

<img src="/assets/KzRGbhLgHowrcbxhtTkjqDlUpHb.png" src-width="3002" src-height="1498" align="center"/>

Configurable Tradable Bond Interest Rates

Function List

Master Switch

The tradable bond interest calculation feature is enabled only after turning on the master switch.

<img src="/assets/Fo1WbBbJZoa8bsxdQGyjIRsXpGg.png" src-width="3016" src-height="1498" align="center"/>

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

<img src="/assets/WHW2b5N3doR2tYxohcqj9DiSpZa.png" src-width="3014" src-height="1500" align="center"/>

<img src="/assets/PkA9bYgoroLxvVxjQoujzmkGpOC.png" src-width="3016" src-height="1508" align="center"/>

## Statement Configuration

### Statement Template Settings

Path: Day-End Settlement &gt; Day-End Management &gt; Statement Management &gt; Statement Templates

This function manages the standard format of statements and may include company information, contact details, and disclaimers (for reference).

<img src="/assets/DRB3b4lOHoWZtHxl4ROjXJQuphh.png" src-width="3008" src-height="1498" align="center"/>

<img src="/assets/PpcqbtzQZopU5Sx7ulBjUtSBp0d.png" src-width="3018" src-height="1502" align="center"/>

The statement template supports configuring social media information; if configured, it will be displayed on the statement; if not configured, that field will not be shown.

<img src="/assets/RKaqb2wIAoFQ3YxNsvsje8sIpG7.png" src-width="3018" src-height="1502" align="center"/>

The statement template supports statement language configuration (five options):

- Follow System: display according to client app language setting
- Global Setting (English): all client statements in English
- Global Setting (Simplified Chinese): all client statements in Simplified Chinese
- Global Setting (Traditional Chinese): all client statements in Traditional Chinese
- Global Setting (Traditional Chinese & English): all client statements bilingual (Traditional Chinese + English)

<img src="/assets/TOvtblNhqoEEOpxc259ja1KNpfe.png" src-width="2998" src-height="1592" align="center"/>

### Statement Configuration

This function configures whether client statements are sent offline, whether the client accepts email and app notifications, default offline sending behavior for unspecified clients, and whether reminders are enabled for all processing options.

<img src="/assets/T7Wkbf5OCopOV8xrn8WjJeX2pWp.png" src-width="3004" src-height="1498" align="center"/>

<img src="/assets/SfnDbK9GVoaqSxx9q5qjRTdepbh.png" src-width="3016" src-height="1500" align="center"/>

A Source field has been added to the statement configuration to facilitate tracing the origin of configuration changes.

Batch add is supported by downloading a template and uploading it after filling.

<img src="/assets/KtvjbKSFFoTOYUxTveMjszTkpbh.png" src-width="3016" src-height="1494" align="center"/>

For newly created clients that cannot be found, a new delivery method can be added.

<img src="/assets/FvfvbZax7oYnj4xzRlijBGelpoc.png" src-width="3022" src-height="1500" align="center"/>

### Client Remarks

Path: Clearing Management &gt; Day-End Management &gt; Statement Management &gt; Client Remarks

Provides an entry point for managing client statement remarks, enabling remarks for specific clients’ statements.

Note: If client statement remarks are to be added, they must be entered before the Day-End job completes to take effect.

<img src="/assets/MDvjbiPD5oApHwxtqrHjaK0Vplb.png" src-width="3014" src-height="1502" align="center"/>

Click the upper-right [Add Remark] to add a daily or monthly statement remark for specified clients as needed.

<img src="/assets/WBwHbCESvoykp8x3kw9j9X0Eppg.png" src-width="3018" src-height="1506" align="center"/>

A bulk statement template import for remarks is also provided.

<img src="/assets/KtlHbXuMxow7N1xvk5kjY6qGpYe.png" src-width="3014" src-height="1508" align="center"/>

Reference templates for remarks are provided:

<img src="/assets/Gw4ebcTLCoG1a5xAos7j0Ea2p4E.png" src-width="3024" src-height="1096" align="center"/>

Remarks can be queried and edited on the list page.

<img src="/assets/TkOdbbDWKo5NXRxQgHmj4JynpQb.png" src-width="3016" src-height="1498" align="center"/>

### DA Statement Configuration

Path: Clearing Management &gt; Day-End Management &gt; Statement Management &gt; DA Statement Configuration

After opening a DA account, the account will by default be configured to generate monthly statements for March, June, September, and December with a special DA statement template. The default configuration can be modified; after modification, the latest configuration will be applied.

<img src="/assets/B2cdbIvz6oGxMTxvzVBjExvspSg.png" src-width="3010" src-height="1502" align="center"/>

<img src="/assets/A7pzb4N0Yoxjwex1y0bjy3UVpBd.png" src-width="3012" src-height="1502" align="center"/>

# 3. Market Clearing (Trade Clearing) Operation Guide

## Counterparty File Import (Broker Trade)

Path: Day-End Settlement &gt; Day End Clear &gt; File Processing &gt; File Import

Click Import File and upload the file.

<img src="/assets/ZgsabQwa7oImLIxTq9tjpQsvpvh.png" src-width="3010" src-height="1496" align="center"/>

Select and upload the file.

Example: Importing Hong Kong CCASS trade files (CTF). Market: select Hong Kong; File Type: select CTF Trade File; then upload the document.

<img src="/assets/MZaibPpg0oHykqxiHBBj3eMbpMx.png" src-width="3018" src-height="1512" align="center"/>

Monitor the file import and parse status via the Status field in the list area. The file is considered processed only if parsing is successful.

<img src="/assets/HjPAbcADYogMz7xaHgzj3cMmpLe.png" src-width="3002" src-height="1484" align="center"/>

## Pre-Clearing Preparation

This function checks whether related configurations and the day’s business operations have been completed before executing Day-End tasks. Market Clearing and Day-End Clearing have different check items.

After Market Clearing has completed trade file imports and the current accounting date is confirmed to be correct, click Execute Pre-Clearing Preparation.

<img src="/assets/BXWJbewYWoPBoSxP2tJj5TDZpFf.png" src-width="3004" src-height="1502" align="center"/>

Execution returns check results within five seconds. If all checks pass, subsequent operations may proceed.

For check errors, click the upper-right of the check item to view the rules and operation guidance for that check item.

<img src="/assets/BMwObgEs5oiVqGxSsDBjneEYp5h.png" src-width="2986" src-height="1510" align="center"/>

Some checks provide exception details.

<img src="/assets/MT4ybGGCUoMrhEx0yfUjKh2Opdh.png" src-width="3000" src-height="1502" align="center"/>

After reconciliation, if settlement personnel confirm there are issues, they may complete the relevant business operations and click “Re-execute.”

<img src="/assets/Fw75betxWojsMRxXjmrjYc9CpEg.png" src-width="3008" src-height="1502" align="center"/>

If settlement staff determine a check item may be allowed to pass, they can click Manual Review to approve it (requires a reviewer).

<img src="/assets/IzAtbZx6goUPwSxLylfjtEBIp2g.png" src-width="3016" src-height="1500" align="center"/>

Reviewers can click Manual Review (or approve directly via work order) to open a work order review dialog.

<img src="/assets/QNPgbWNQkohsYOxC9fXjpy79p6g.png" src-width="2996" src-height="1504" align="center"/>

If settlement staff determine a check item must be permanently disabled due to workflow differences, contact customer service for assistance.

After approval, the Pre-Clearing Preparation is considered complete (the UI will indicate: Manually Approved).

<img src="/assets/SH1LbxGLkomV6fxvTKUjSxJTpnb.png" src-width="3022" src-height="1504" align="center"/>

Pre-Clearing Preparation Check Items

## Market Clearing One-Click Clearing

Once Pre-Clearing Preparation is completed, click the Start One-Click Clearing button at the top. The system will automatically execute from the first step through to clearing and settlement tasks (if no errors occur, the system continues to the next job automatically).

Note: You may select Pause One-Click Clearing; however, the system will wait for the current job to finish before pausing the next action (the button will gray out).

<img src="/assets/KDpPbn8MuowoTmxa4fPjI9nJpfg.png" src-width="3016" src-height="1492" align="center"/>

If background manual trade entry or contract correction is necessary, perform those actions before the clearing and billing step. You may also click “Pause One-Click Clearing” directly in Data Synchronization.

<img src="/assets/YTpIbdpesoQW3fxpJPvjzY10pBc.png" src-width="3016" src-height="1492" align="center"/>

<img src="/assets/WeNxbDoruopDbzxeNlzjeL3ypJb.png" src-width="3016" src-height="1482" align="center"/>

If a job error occurs during the process, One-Click Clearing will pause and remain at the job that produced the error; users may follow error messages to perform fixes.

<img src="/assets/S2JEbjgv3oP03XxYszjj2aJvppN.png" src-width="1280" src-height="682" align="center"/>

Users may, as needed, manually select the relevant job operations at the lower-right to inspect or correct records or to advance to the next job; the system will then automatically execute the next job.

Note: During One-Click Clearing, you may rely on the system to automatically execute all jobs, or you may manually operate individual jobs.

<img src="/assets/EUfybeGVnozR4WxmYlXjgOe8pze.png" src-width="3008" src-height="1502" align="center"/>

Data Synchronization

Clicking Execute will synchronize system data (trades, cash movements before the day roll, account openings, etc.).

Pre-Clearing Checks

Clicking the Pre-Clearing Check step in the Day-End flow will automatically trigger trade reconciliation for the day.

If trade reconciliation fails, you can quickly jump to the Trade Reconciliation page (Clearing Management &gt; Market Clearing &gt; Clearing Checks &gt; Trade Reconciliation) to view results.

<img src="/assets/TQ2mbUXF6oOtTLxZ2ugj7aNjp5E.png" src-width="3006" src-height="1502" align="center"/>

Reconciliation Result Query

On the Clearing Checks – Trade Reconciliation page you can query trade reconciliations for each market.

Each check generates a new result; maintain the latest result.

On the Trade Reconciliation page you can view discrepancy details and overall reconciliation information.

Click the local file to view local details; click the counterparty file to view counterparty details.

Reference example:

<img src="/assets/PE7tba08woIhtRx2BI8joVzCpHd.png" src-width="3004" src-height="1500" align="center"/>

Manual Approval in Special Scenarios

- Counterparty file import error: re-import the counterparty file in the file import interface, then re-run Pre-Clearing Check.
- Local-side order error: add, delete, or modify front-end orders, then re-run Pre-Clearing Check.
- Use system data handling: in Check Results (Clearing Management &gt; Market Clearing &gt; Clearing Checks &gt; Check Results), set the corresponding check result to “Pass,” then re-run Pre-Clearing Check.

<img src="/assets/FfMgbIACaouBzoxfZXIjdzV7pHb.png" src-width="3014" src-height="1500" align="center"/>

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

# 4. Day-End Clearing (Non-Trade Clearing) Operation Guide

## Pre-Clearing Preparation

Before executing Day-End Clearing, Pre-Clearing Preparation must be run.

- Must be run after all Market Clearing has completed.
- Check that all business operations for the day have been completed.
- Operation procedure is the same as for Market Clearing (see above).

## Day-End One-Click Clearing

Once Pre-Clearing Preparation is completed, click the Start One-Click Clearing button at the top.

The system will automatically execute from the first step through to statement generation.

After statements are generated, results can be reviewed via reports or statements.

<img src="/assets/YSdBbWR0voixsoxP5snj0W0jpAb.png" src-width="3020" src-height="1496" align="center"/>

Data Aggregation

Before this action, adjust flow dates and pre-allocate combo fees/financing interest amounts as required.

This action aggregates trade data, adjustment data, cash movements, and closing price files across multiple markets. The action may be executed repeatedly.

After data aggregation, if flow date adjustment or closing price changes are performed, Data Aggregation must be re-run.

Intermediate Clearing Checks

Internal flow reconciliation and business operation checks are performed (ongoing expansion).

These are internal data checks; contact customer service if exceptions occur.

Manual approval for intermediate checks uses the same approach as trade reconciliation.

<img src="/assets/T3HkblaKioyeI9xzLb4jISnjpfc.png" src-width="3010" src-height="1498" align="center"/>

Funds Clearing

Execute financing interest calculation, portfolio fees, short lending calculations, and related tasks.

Post-Clearing Checks

Internal flow reconciliation and business operation checks are performed.

These are internal data checks; contact customer service if exceptions occur.

Manual approval for post-clearing checks uses the same approach as trade reconciliation.

Statement Generation

<img src="/assets/Ng6WbrDMpoxKmIxncpHjlrFZp74.png" src-width="3010" src-height="1500" align="center"/>

<img src="/assets/Bj9sb4Ek3o85JDxdVzdjJ0wypog.png" src-width="3012" src-height="1478" align="center"/>

You may select entries on the right to [Resend] or [Download] statements.

<img src="/assets/AmqWb83jJoTGsgxyynMjEm7hptf.png" src-width="3012" src-height="1478" align="center"/>

You may also generate a temporary statement by inputting the client and statement date in the temporary statement window. Temporary statements support cross-month queries and allow an earliest start of 1 year and a maximum timespan of 3 months.

<img src="/assets/Us1Qbmj8FowFcoxYqfdjeDESpSb.png" src-width="3012" src-height="1478" align="center"/>

<img src="/assets/DdrHb8LGJoV6vrx0sN6jMmI2p6g.png" src-width="3012" src-height="1492" align="center"/>

Day Roll (Date Advance)

After executing the day roll process, the system accounting date advances to the next day. Financing interest and related settlement operations are completed, triggering broker commission calculation tasks.

# 5. Settlement Instruction Export

On the morning of T+2, ATI settlement instructions may be exported and uploaded to CCASS.

Path: Day-End Settlement &gt; Day End Clear &gt; Day-End Tasks &gt; Settlement Instruction Export

Supports exporting files for future dates.

Supports exporting for multiple markets: HK, SZ, SH.

<img src="/assets/ETcsbAQlkoBAqCxElWVjCb69pje.png" src-width="3004" src-height="1506" align="center"/>

<img src="/assets/SVizbcGchoUN9NxzTBcjC4Q9pYf.png" src-width="3006" src-height="1494" align="center"/>

# 6. Position Reconciliation

In the file import interface, position files can be imported; some file types will trigger automatic reconciliation processing.

<img src="/assets/WCjLbqBhBopO2Yx1VAtjigNwpWc.png" src-width="3012" src-height="1494" align="center"/>

<img src="/assets/UNQabOrIZoBqF6xrvV5j659Mpsc.png" src-width="3010" src-height="1494" align="center"/>

After import and triggering system reconciliation, the reconciliation status will be In Progress.

Once the reconciliation task completes, the result will be Out of Balance or Balanced.

<img src="/assets/TNIebnJzHoWRFVxSjnZj5IkApPd.png" src-width="3002" src-height="1492" align="center"/>

Click Reconcile Again to (re)trigger system reconciliation. Historical date reconciliation is supported.

<img src="/assets/VtJkbhbgEowm86xkSCnjNfeTpG0.png" src-width="3010" src-height="1490" align="center"/>

# 7. Non-Trade Flow Date Editing

This function is mainly used after Market Clearing when you need to change the accounting date originally used by the Day-End process for a flow entry, i.e., to adjust the posting date of cash/position flows. Under the new mechanism, this is achieved by modifying the front-end account date.

Path: Day-End Settlement &gt; Day End Clear &gt; Flow Management

Single Flow Date Editing

Cash flows and position flows are edited on separate page tabs. Locate the flow record and click Edit.

<img src="/assets/BQQjbRaRno1VsYxmmMZjwkD7pGc.png" src-width="3002" src-height="1494" align="center"/>

Enter the date to be processed.

<img src="/assets/AS6EbDZVWoCSgfxnqj4j94uep7d.png" src-width="3020" src-height="1496" align="center"/>

Observe the accounting date of the edited record to verify effectiveness.

<img src="/assets/RCdsbwKFiovKBmx61wejVx1BpQf.png" src-width="3020" src-height="1496" align="center"/>

Rerun Data Aggregation in Day-End Tasks.

Bulk Flow Date Editing

Select flow records, then click Bulk Edit Accounting Date.

<img src="/assets/LrwKbpxyWojlCbx1dBxjzXD1pBe.png" src-width="3020" src-height="1496" align="center"/>

Rerun Data Aggregation in Day-End Tasks.

Bulk Editing by Business Code

Note: For bulk date adjustments, confirm in advance whether the business code supports editing. After editing, verify the final outcome on the page.

<img src="/assets/LLdBbVNqEouAgaxqx7JjB3XJpKb.png" src-width="3020" src-height="1496" align="center"/>

Update Data

Flow synchronization is near real-time. After submission, you may refresh all data for the current accounting date.

<img src="/assets/E3lWbf1jSoRqEHxkjKgjE1S1pac.png" src-width="3020" src-height="1496" align="center"/>

# 8. Back-Office Client Contract Manual Entry and Broker Quick Entry

Provides functionality to create client manual trades and broker quick entry contract records; these manual entries correspond to business “Client trade” and “Broker trade” manual entries.

Enter client contracts before the clearing and billing step.

Upside contracts (agency contracts) are created based on contract records for related manual entry operations.

Upside contracts (agency contracts) must be operated before the Pre-Clearing Check step.

Back-Office Client Contract Manual Entry

Click New Client Manual Entry.

<img src="/assets/QgEQbg12coLtAzx4BNxjdwmmpif.png" src-width="3020" src-height="1496" align="center"/>

First, complete basic information. The system will automatically estimate certain fields (which may be further adjusted manually).

<img src="/assets/HhE4bzsqForNC0xaz97jFzkSpOb.png" src-width="3020" src-height="1496" align="center"/>

The system supports manual entry for historical trade dates (up to the past 5 trading days). After manual entry, the trade date will be the historical date and the accounting date will be the current date.

<img src="/assets/J2skbvpkjoLxGexhf0IjrKQtpTb.png" src-width="3020" src-height="1496" align="center"/>

If submitted data contain errors, the back-office contract basic information can be edited further.

<img src="/assets/KSCmbiCo3opplzx05DejyjnZpKb.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/QCXnbQlAloB9fpxoAHBjnnkopXg.png" src-width="3020" src-height="1496" align="center"/>

Click Billing to automatically calculate fees.

After preliminary calculation, fees may be edited further (see Fee Query and Editing).

Note: If Billing, Adding, or Editing operations have been performed, then even if all fees are later deleted, fees will not be recalculated in the Clearing Billing step; if no operations have been performed on the fee information page, fees will be automatically calculated during the Clearing Billing step based on configured rules.

<img src="/assets/MTQmbIO0Go7zzdxDxmIjaF6Xp6d.png" src-width="3020" src-height="1496" align="center"/>

If the product is an OTC product or the trading channel has not been system-integrated, the settlement channel should be selected as OTC.

<img src="/assets/LAV2bsxRnoQ5X7x4mmcjE4cbpDf.png" src-width="3020" src-height="1496" align="center"/>

For OTC manual entries, the system will auto-calculate custodian and sub-account based on the master account.

Custodians and sub-accounts may be edited further; see Position Information Query and Editing.

<img src="/assets/FDmMbcGbKo9hQlxHeBjjnVoWpXd.png" src-width="3020" src-height="1496" align="center"/>

Broker Quick Entry

After completing all client manual entries, use the Broker Quick Entry button at the upper right to create broker manual entries.

Note: Broker Quick Entry can only query data where the settlement channel is OTC. The generated data is used for trade reconciliation in the Pre-Clearing Check step.

<img src="/assets/YABcb9lwCot2oOx4rIYjoXNEpgc.png" src-width="3020" src-height="1496" align="center"/>

Institution Contract (Agency Contract) Preliminary Calculation

Select all filter criteria, click Calculate Agency Fees and Refresh. The system will automatically calculate agent fees (see the Agency Contract Operation Guide later).

<img src="/assets/LaJRbIJmsoFsnfxY2wCjf5nUpmg.png" src-width="3020" src-height="1496" align="center"/>

Update Counterparty File

After initial data verification, modify client contracts as needed, re-enter the page, and refresh.

Operators may click Edit to make temporary data adjustments. Note: this edit is not saved to the database and is intended for use with the “Update Counterparty File” button only.

<img src="/assets/Sboabzdruodf2UxTBqxj7jJhphe.png" src-width="3020" src-height="1496" align="center"/>

After verification, for datasets under 200 rows, click Update Counterparty File; the file can be used for trade reconciliation in Pre-Clearing Check.

<img src="/assets/NMTGbnE2wo2ag6xwU0xj93HEpub.png" src-width="3020" src-height="1496" align="center"/>

For datasets over 200 rows, download the template, edit it, and import the file before the Pre-Clearing Check step.

<img src="/assets/XvYpbsoLZoSas5xDl0yjjiJ2pMf.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/ADHpbPmMBobBl2xwSYzj9dvgphf.png" src-width="3020" src-height="1496" align="center"/>

# 9. Query and Edit Front-End Trade Contracts

After executing the Clearing Billing step, the system generates client contracts based on front-end trade orders and billing configuration.

Click Details to view client contract details.

The front-end contract supports editing only fee information, IBOND accrued interest, settlement currency, and position information.

If other fields of the front-end contract have issues, the front-end contract data must be corrected first, then Pre-Clearing Check and Clearing Billing must be run sequentially.

<img src="/assets/VtIrbGRozoDbBAxVauqj43ilpFg.png" src-width="3020" src-height="1496" align="center"/>

The Details page shows basic information including trade date, settlement date, and any special fee conditions.

Data whose source is “Trade” are front-end contracts.

<img src="/assets/Wm1kbHKKtoxXYCxRGZBjt4Dwp8f.png" src-width="3020" src-height="1496" align="center"/>

Settlement Currency Editing

Click Edit in Basic Information.

<img src="/assets/A4VcbCARHoUqrlxoXW1jw3ZIpcg.png" src-width="3020" src-height="1496" align="center"/>

Modify the settlement currency and exchange rate and submit.

The system will calculate accrued interest (in settlement currency), transaction amount (in settlement currency), and fees (in settlement currency) based on the exchange rate and settlement currency.

The system will perform fee deductions and settlement in the settlement currency.

<img src="/assets/L5WXbUQhZolq01xtnQCjBZcUpbb.png" src-width="3020" src-height="1496" align="center"/>

Trade Record Query

Click Trade Records to display trade records.

<img src="/assets/Bk9bbgAHooDGWwxZhV1jhe30pve.png" src-width="3020" src-height="1496" align="center"/>

IBOND Accrued Interest Editing

In Trade Records, click Edit to modify accrued interest.

<img src="/assets/S9PQbZrFtoDsxtxixktjNsj6phc.png" src-width="3020" src-height="1496" align="center"/>

Fee Query and Editing

Click Fee Information to display billing details.

<img src="/assets/YazbbrcYMoWYYZxLh5xjwv7rpb7.png" src-width="3020" src-height="1496" align="center"/>

Click Recalculate to recompute all fees.

<img src="/assets/XJ3ubEG0qoATIAxcON5jHf59pRe.png" src-width="3020" src-height="1496" align="center"/>

Click Add to add a fee; the added fee type must not duplicate an existing type.

<img src="/assets/NWtebNoPjogbl7xWF5kjSm96p4g.png" src-width="3020" src-height="1496" align="center"/>

Click Delete to delete a fee.

<img src="/assets/XdktbZ3uaoT0Ilx8LBgjVxEppoh.png" src-width="3020" src-height="1496" align="center"/>

Click Edit to modify a fee.

<img src="/assets/RCMIbMf9JoHQ7cxAYfQjh761pLY.png" src-width="3020" src-height="1496" align="center"/>

Position Information Query and Editing

Click Position Information to query position data.

<img src="/assets/OZRSbEXOhowHaBxiduJjLhX6pPf.png" src-width="3020" src-height="1496" align="center"/>

Click Edit to modify custodian and sub-account.

<img src="/assets/UW1CbUVz5o4N6HxnqRSjS7R0pVb.png" src-width="3020" src-height="1496" align="center"/>

# 10. Early Settlement

If early settlement posting is required on T+2 (N), this function allows clients to process fund-related operations earlier.

Path: Day-End Settlement &gt; Day End Clear &gt; Settlement System &gt; Settlement Batches Tab

Click [Early Settlement] and input the market(s) for early settlement (multiple selections allowed).

<img src="/assets/F2zIb13JjolHJLx0PnejlV18pgh.png" src-width="3020" src-height="1496" align="center"/>

Monitor whether the settlement batch has finished processing.

<img src="/assets/GCcRbIMGVoJ8P4xXwnBj3qXKpGe.png" src-width="3020" src-height="1496" align="center"/>

# 11. Holdings Management

Path: Day-End Management &gt; Day-End Mgr &gt; Holdings Management &gt; Custodian Query

Sub-Account Position Adjustment

Query the relevant client record and click [Edit Position] in the right record area.

<img src="/assets/SQiXb6jVoozxOyxyOAcjjclFpLc.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/XoIsbuLmlo8hwbxDQ0RjUzJopch.png" src-width="3020" src-height="1496" align="center"/>

Adjust the sub-account position according to actual data (the sub-account position must be consistent with holdings after the adjustment).

<img src="/assets/TwCHblknForuhxxxPOkj4rMnp5d.png" src-width="3020" src-height="1496" align="center"/>

An adjustment record will be generated on the Custodian Transaction (Tab).

<img src="/assets/Sllhbusq4o7Xw6x0hjWjVHphpFc.png" src-width="3020" src-height="1496" align="center"/>

Internal Transfer (Holdings)

Query the relevant client record and click [Internal Transfer] in the right record area.

<img src="/assets/Q0n6buGyXoaowlxmcT3jNUxTpOh.png" src-width="3020" src-height="1496" align="center"/>

After adjustment, two adjustment records will be generated on the Custodian Transaction (Tab).

<img src="/assets/TPUobvdUVoBdA8x2jBQj7hfjpsg.png" src-width="3020" src-height="1496" align="center"/>

Bulk Adjustments

Bulk transfers can be performed via a pre-downloaded template.

<img src="/assets/SlnbbQWrBo3S4hxP2SijvvAvpDN.png" src-width="2654" src-height="488" align="center"/>

<img src="/assets/RriCbQWD0oJzh7xTJgbjdymBpzh.png" src-width="3020" src-height="1496" align="center"/>

# 12. Financing Interest Adjustments

Financing Interest Inquiry

You can query each client’s financing interest billing details on the financing interest bill page.

- Current bill = Post-Deduction Amount + Adjusted Interest
- Post-Deduction Amount = Pre-Deduction Amount + Deduction Amount

<img src="/assets/TivMboI5NocZV7xn2pojLPbwpjc.png" src-width="3020" src-height="1496" align="center"/>

Click Post-Deduction Amount to view daily financing interest details.

<img src="/assets/VSsVbWfeMoHeh6xTGZzj5FmBp3f.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/Oh1JbuMq7oRLXixjLFljZfXfp1d.png" src-width="3020" src-height="1496" align="center"/>

Financing Interest Adjustments

Note: During the day roll period (from the first Data Aggregation click until the day roll completes), interest adjustments cannot be performed.

Click Adjust to modify financing interest.

<img src="/assets/Id3ubrpeboKnw2xy1d3j3yrdpyb.png" src-width="3020" src-height="1496" align="center"/>

Adjust by Principal: the system will calculate the required interest adjustment based on the entered principal.

<img src="/assets/NirkbhirwoNNmnxydtRjkMc1p9c.png" src-width="3020" src-height="1496" align="center"/>

Adjust by Result: the system will calculate the required interest adjustment based on the entered total interest for that day.

<img src="/assets/TwzSbQxFjoEwHXxFq2Cjk773pGb.png" src-width="3020" src-height="1496" align="center"/>

Adjust by Occurrence Amount: the system will adjust interest based on the entered amount. This mode supports modifying multiple days simultaneously.

<img src="/assets/ShX7b0yBZoq9lixGpN9jUY5Bpmd.png" src-width="3020" src-height="1496" align="center"/>

Adjusted flows can be queried on the Error Flows page.

<img src="/assets/NY7NbuzIKoVebuxou3IjWZJkpeh.png" src-width="3020" src-height="1496" align="center"/>

In special cases where no financing interest bill has been generated, you may create a bill first and then make adjustments.

<img src="/assets/W3MkbenjFoP7yOxeRhhjV2vfpVg.png" src-width="3020" src-height="1496" align="center"/>

Bulk Adjustments

Bulk processing by occurrence amount is supported.

<img src="/assets/AV34bwdezoJv2yxwRuQjwFbVpNg.png" src-width="3020" src-height="1496" align="center"/>

Early Settlement

Note: During the day roll period (from the first Data Aggregation click until the day roll completes), early settlement cannot be performed.

Filter clients and click Early Settlement.

<img src="/assets/EafXbTBv1oPU1gxLi2QjQZbUp4b.png" src-width="3020" src-height="1496" align="center"/>

# 13. Temporary Editing of Closing Prices

Path: Day-End Settlement &gt; Day End Clear &gt; Clearing Symbol

Prerequisite: the Day-End process step Clearing & Settlement / Data Aggregation must have been completed.

<img src="/assets/AxahbaHMxo1Pl4xQgXOjUpeDpcg.png" src-width="3020" src-height="1496" align="center"/>

To temporarily modify the closing price used for clearing, click Edit.

<img src="/assets/OovCbxpdwomUUix7uCSj0P1hpQf.png" src-width="3020" src-height="1496" align="center"/>

Modify the closing price and submit.

After submission, re-run Data Aggregation.

If Pre-Clearing Preparation reported errors, you may first execute Clearing & Settlement, and then re-run Pre-Clearing Preparation.

# 14. Clearing Cancellation

Select the date to be reversed, click Clearing Cancellation, choose the reversal items as needed, and submit.

Note 1: This task is asynchronous and may require some time to complete.

Note 2: Only Clearing Cancellation for T and T-1 days are allowed.

Note 3: For consecutive cancellation, reversal operations must be performed in order.

Click New Clearing Reversal.

<img src="/assets/IammbgUrfoSVWxxWbjajeYLtpae.png" src-width="3020" src-height="1496" align="center"/>

Choose the actual items according to the reversal scenario.

<img src="/assets/QnVqbC8a4ooWrMxg67hjtY9Mpye.png" src-width="3020" src-height="1496" align="center"/>

After submission, monitor reversals on the list page.

<img src="/assets/CzW9bOwm2ooULKx1MAmjO8qOpCg.png" src-width="3020" src-height="1496" align="center"/>

- Scenario: Post-day-roll adjustments that move next-day flows to current day; post-day-roll adjustments that move same-day flows to next day; adjustments to closing price after funds clearing
    <img src="/assets/Nl8xboiFaoEj9GxRD4YjV6cmp0c.png" src-width="3020" src-height="1496" align="center"/>
    - Clearing Reversal Form

- Scenario: Pre-day-roll discovery of billing issues (contract fees, manual entries) requiring adjustment
    <img src="/assets/UqNDbbQQMopEJpx45MOjmT1epZb.png" src-width="3020" src-height="1496" align="center"/>
    - Clearing Reversal Form

- Scenario: End-of-month financing interest settlement exceptions (e.g., a particular client’s financing interest requires adjustment and re-settlement)
    <img src="/assets/JKMNbfNdRo9P49xrLc6jBKlQpib.png" src-width="3020" src-height="1496" align="center"/>
    - Clearing Reversal Form

- Scenario: Typhoon day early settlement that needs reversal
    <img src="/assets/WkkDbMBL0o8AiFxsozcjVi2UpOb.png" src-width="3020" src-height="1496" align="center"/>
    - Clearing Reversal Form

- Scenario: Post-day-roll discovery of billing issues requiring adjustment; high-volume brokers are advised to contact technical support
    <img src="/assets/JObQbWyNzo2Gf0xZ5z3jZgmBpYd.png" src-width="3020" src-height="1496" align="center"/>
    - Clearing Reversal Form

# 15. Typhoon Day Handling

Handling of Typhoon Signal No. 8

Path: Day-End Settlement &gt; Day End Clear &gt; Typhoon Day Handling

Typhoon Day Full-Day Market

Scenario: On September 2 a typhoon occurs and Hong Kong stock settlement is delayed overall.

- Select the accounting date to be processed (e.g., September 2) and the market(s) to be processed (HK).
- Choose whether to postpone both funds and securities or to postpone funds only.
- After submission: all pending settlement securities (and/or funds) will be postponed by one accounting date. Click Confirm to update the view.

<img src="/assets/AB3kb2o5toVo6GxakZYjqB4kpbh.png" src-width="3020" src-height="1496" align="center"/>

If Day-End operations need to be performed before the day roll, click Advance Day Roll in Day-End Tasks. This function is supported after 2:30 PM; operation is recommended on the following day.

Note: The Advance Day Roll button requires a configured work order approval to operate.

<img src="/assets/O5gfbczBQoXJEvxZFt2jdF63pGb.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/Clc4bf3SWo0KlVxIMxQjeuCDpsg.png" src-width="3020" src-height="1496" align="center"/>

Typhoon Day Half-Day Market

For mornings with trading but an afternoon closure, select funds-only postponement.

<img src="/assets/Xi7hb6fM3oEfp6xHzDYj9OpwpWd.png" src-width="3020" src-height="1496" align="center"/>

