---
title: System Introduction
slug: KSAHw715uivJOckDIjhcL8avnZf
sidebar_position: 5
---


# System Overview

# System Introduction

# 1. System Overview

<b>Architecture</b>

Depending on whether clients participate in a corporate action, corporate actions can be categorized as mandatory or voluntary (opt-in). Mandatory corporate actions are events in which clients participate without any action required on their part, such as ordinary dividends. Voluntary corporate actions require clients to take specific actions to participate, such as rights issues or scrip/cash elections. The process flows for these two types of corporate actions differ slightly.

During corporate action processing, interactions also occur with clearing services, the message center, and asset services.

<img src="/assets/YpIcbZIsfoWYxDxHlt9jlL93pAe.png" src-width="3030" src-height="1698" align="center"/>

<b>Process Flow</b>

1. Announcement and plan creation
    - Broker actions: For non-HK markets, announcements and plan information must be created manually based on upstream data.
    - System functions: Brokers directly connected to HKEX can automatically create HK market announcements and plan information by importing the 05 file.

2. Registration
    - Broker actions: Brokers must verify that system holdings match upstream holdings.
    - System functions: The system will generate client detail records including entitlement and fee information based on data from clearing services or asset services.

3. Client exercise
    - A stage of voluntary corporate actions; this step typically requires a longer time window.
    - Broker actions: Brokers must notify clients at this stage, collect clients’ exercise instructions, and register them in the system.
    - System functions: The system can automatically notify clients and provide exercise entry points in the App and the brokerage back office.

4. Submission
    - A stage of voluntary corporate actions.
    - Broker actions: Brokers must consolidate client exercise instructions and submit them to the upstream party before the deadline.
    - System functions: The system performs pre-asset-processing for rights issues and offers.

5. Execution
    - Broker actions: Verify upstream execution information and perform residual adjustments.
    - System functions: Perform asset disposition.

Supported corporate action types

- TM (Takeover of structured products (mandatory) / Automatic exercise)
- BE (Benefits entitlement)
- CA (Corporate Action)
- DS (Delisted / Expired / Invalid)
- OO (Public offering)
- EO (Excess public offering)
- RS (Rights subscription)
- ER (Excess rights)
- TU (Unconditional takeover)
- TC (Takeover (conditional))
- ADR (ADR fees)
- SO (Spin-off)
- IP (Interest payment)
- VT (General meeting)

# 2. System Configuration

## 1. Initialization Parameter Configuration

Page-level configuration is not supported at present; contact Customer Service to adjust settings.

## 2. Fee Configuration

Path:

Corporate Actions &gt; Fee Management

General fee settings

The system allows maintenance of global fee charging configurations for corporate actions (plan type - fee type).

<img src="/assets/Cdcqb90C2o2lHIxYz0VjngiEpke.png" src-width="3344" src-height="1558" align="center"/>

You can click [Edit] on the right of a record to modify the corresponding corporate action fee configuration, or click [New] in the upper-left to add a fee configuration.

<img src="/assets/KqswbDfm7oc7faxxFw6jeMz1pah.png" src-width="3192" src-height="1842" align="center"/>

- Plan type: one of the matching conditions; the primary matching criterion.
- Market: one of the matching conditions; selection only.
- Fee type: one of the calculation rules; selection only.
- Sub-account ID: one of the matching conditions; required when configuring TAX fees. Different regions (master accounts) can use different rates.
- Charging method / Calculation method: used in combination
    - Registered holdings (per board lot) + proportional charge: charge N per board lot
    - Announcement + fixed amount: charge N per corporate action
    - Entitlement amount + proportional charge: dividend amount * 5%

- Truncation method: controls decimal truncation; truncate to 2 decimal places
- Fee priority and special fee restrictions are used together to compare the relationship between fees and dividends (the share portion of a stock dividend is also counted as part of dividends)
    - No limit: calculate the fee independently
    - Single fee not exceeding entitlement: compare the fee amount with the dividend; if the fee exceeds the dividend, charge up to the dividend amount
    - Fees prior to this priority not exceeding entitlement: calculate by priority; if fees prior to (and including) this priority exceed the dividend, charge the dividend amount equal to the cumulative prior fees

Transfer fee settings

Only one transfer fee configuration is required for corporate actions.

When adding a transfer fee configuration, you may configure it as a standalone charge or combined charge:

- Standalone charge: independent from the Handling Fee; this configuration is recommended.
- Combined charge: combined with the Handling Fee; when charging Handling, the transfer fee portion is automatically offset.

<img src="/assets/CA6rbagWeoy7B5x2YRBjQPhup4d.png" src-width="3348" src-height="992" align="center"/>

<img src="/assets/DQjxbmFUhoj7T2xvqjjjiaPKpjb.png" src-width="3376" src-height="1254" align="center"/>

# 3. Layout Area Description

## 1. List Page Summary

On the corporate action announcement query/details screen, the layout is as follows: the central area displays the “Progress Status” and the “Instruction Collection Status” to facilitate quick location.

<img src="/assets/JoADbdTgKova7qxwLcTjxwk2pRc.png" src-width="3186" src-height="1520" align="center"/>

The right-hand record area displays the actionable function buttons for the corporate action (reducing misoperations and facilitating single-corporate-action handling).

<img src="/assets/TiXbbRwTYo3uTGxHerbjSdTxpdb.png" src-width="3184" src-height="1512" align="center"/>

Because corporate action types are numerous and business nodes differ, the system provides step-by-step copy (operation guidance) tailored to corporate action types.

<img src="/assets/R6npbLWIxo8i2Qxc6nvjn1gnped.png" src-width="2664" src-height="956" align="center"/>

Remarks copy is also shown in the list columns.

<img src="/assets/E9GkbEhp5ozEvXxBPy9jaEyLpvd.png" src-width="3560" src-height="1528" align="center"/>

Batch operation functionality: the system evaluates states and provides available action buttons.

<img src="/assets/BdHbblS3SoU6j9xaVzejORQKpJd.png" src-width="3324" src-height="1598" align="center"/>

Interactive support for the 02 file is provided to update corporate action status in real time.

<img src="/assets/WSAGbJKRzoyVqwxNmR6jpj67p0f.png" src-width="3334" src-height="1478" align="center"/>

<img src="/assets/Z3mvbtToGoDZXMxTxRojzIAMpid.png" src-width="3358" src-height="1002" align="center"/>

## 2. Detail Page

Click to enter the detail page, which is divided into several information areas as follows.

<b>Corporate Action Header</b>

Corporate action type icon and progress status.

<img src="/assets/CJarb2K6GoQAMZxSeqzjXzi7pqc.png" src-width="2388" src-height="292" align="center"/>

<b>Corporate Action Announcement Information</b>

Records key fields of the corporate action announcement (announcement type / underlying / execution method / record date / distribution date, etc.).

<img src="/assets/Afdxbu7Y7o5TyixokO3jUjnPpcf.png" src-width="2762" src-height="1033" align="center"/>

<b>Plan Information and Fee Rules</b>

This area records the related announcement plan records and fee rules. If a corporate action has separate rules, they can be maintained in fee rule maintenance.

<img src="/assets/TM0QbRQS4oNJsixNEBwjmA8SpIh.png" src-width="2682" src-height="1138" align="center"/>

<b>Summary and Client Details</b>

This area records the registered client summary information and client details.

<img src="/assets/CukObCGzTor6oYxf8ZcjWVo3pjf.png" src-width="2674" src-height="1182" align="center"/>

At the detail page, virtually all actionable function buttons are provided:

- On the detail page you can directly add, delete, or modify client entitlement calculations.
- On the detail page — client details you can further perform offline exercises, modify entitlements, and adjust fees.

<img src="/assets/T2sfbgrG4orokDx5THSjq0n5pbe.png" src-width="2504" src-height="1634" align="center"/>

<img src="/assets/ZuU1bxFCoolv4wxguuNjejBJp1g.png" src-width="2380" src-height="814" align="center"/>

<img src="/assets/PgrLbAGtJom8KcxuLBpjpjBapfd.png" src-width="2370" src-height="1046" align="center"/>

## 3. Notes Field Description

Because execution of corporate action announcements involves changes to assets and fees, the system will automatically generate standardized asset ledger remarks.

<b>Plan note (announcement note)</b>

HK market processed automatically; other markets manually entered.

TM, BE, IP types: stock code + market + name + comma + CCASS note.

<img src="/assets/JVpBbukmioX5xdxZcCTjD6cipLs.png" src-width="3548" src-height="1806" align="center"/>

<b>Entitlement note</b>

- Plan note + comma + holdings

<img src="/assets/QbPRbRRlNoAuy9xLsOcj9OieppP.png" src-width="3548" src-height="1806" align="center"/>

<b>Fee note</b>

Format (non-TAX_FEE): Fee name in English + stock code + market + stock name.

Example: CROSSTEC03893.HK handling fee

<img src="/assets/S2mvbQ8choIb0XxmV19jtv5VpAf.png" src-width="3548" src-height="1806" align="center"/>

<b>Fee note format (TAX_FEE)</b>

Announcement (or plan note) + " - Withholding TAX"

Example: TROW (US74144T1088) cash dividend USD 1.22 per share (ordinary dividend) - Withholding TAX

# 3. Common Functions

Path: Corporate Actions - Corporate Actions

## 1. Initialization

Select state: Initialization to query recently imported corporate action announcements.

Initialization is the starting state of a corporate action announcement and can also be Terminated.

<img src="/assets/NZcJbqm7koqvaNxgPD9jPrEypaf.png" src-width="3172" src-height="1835" align="center"/>

Click [Details] to inspect the corporate action announcement and plan information; the system will generate a default plan.

<img src="/assets/FmK5bfW8KoXdcExazl9juUSCpPg.png" src-width="3116" src-height="1616" align="center"/>

First, the system displays the corporate action’s processing node status information.

<img src="/assets/Jb7ebfWfFoiIrqxy05AjdhOPpVd.png" src-width="2606" src-height="282" align="center"/>

Note: Different corporate action types display different status sets to help users intuitively grasp progress.

<img src="/assets/ItH5be4ptoDU5axxVm9j2b7ypMc.png" src-width="2196" src-height="292" align="center"/>

Next is the announcement information. The system also provides preset configuration items for certain corporate action types to optimize processing:

- Examples: distribution location (Street or Nominee) or payment date + N configuration (may differ by tenant)
- Odd-lot-to-dividend preset (Yes or No). Note: For preset configuration changes, contact the Longbridge Operations team to apply changes.

<img src="/assets/SYoKbJMJuoevbyxuPgLjKVuBpIc.png" src-width="2888" src-height="1408" align="center"/>

Following that are plan information and fee rules.

<img src="/assets/FbAjbJhHdoTzcox4FJqj5hVPpDe.png" src-width="2904" src-height="1508" align="center"/>

At this point you may inspect individual corporate action data records as needed. If mandatory fields are missing, the system will highlight them in red to facilitate data checks.

<img src="/assets/FvYRb10iZoq8lex9FXcjcFOGpnb.png" src-width="2868" src-height="1020" align="center"/>

If no issues are found, select the record’s checkbox and proceed to [Registration].

<img src="/assets/W99MbeSVpoKCkHxH2ZNjvpnnpsf.png" src-width="3076" src-height="1436" align="center"/>

The system will check the record date against the accounting date; the record date must be earlier than or equal to the current accounting date.

<img src="/assets/OSCGb1YLZoGsVdxJexNjnAuZpJe.png" src-width="2964" src-height="246" align="center"/>

## 2. Registration

Prerequisite: Announcement records that have passed data validation.

Operation: Select state: Initialization to query announcements in the initialization state.

You may then perform [Registration] or [Terminate].

During registration the system provides business validation functions and additional business checks.

Note: The system enforces that Accounting Date &gt;= Record Date in order to proceed with registration.

<img src="/assets/Cqj4bttBIob0Dpx7nbwjlPEYpHc.png" src-width="2542" src-height="150" align="center"/>

<img src="/assets/C6YqbRxUlo5NJ5xe1oAjnodlpqf.png" src-width="3094" src-height="1562" align="center"/>

Note: Because corporate action CCASS files may take time to update, we have optimized 02 file reading by displaying the CCASS file date and CCASS status. Tenants may use this field to identify the announcements that are truly ready for execution, avoiding manual processing errors when the CCASS status is not the final execution status.

<img src="/assets/M2HqbUSN2og8PaxLM1Xjb5hcpzd.png" src-width="3192" src-height="1347" align="center"/>

This avoids situations where CCASS status is “provisionally confirmed” (not final) or later cancelled, which could otherwise cause errors in subsequent corporate action processing.

<img src="/assets/NPicbiHDAooiGcxT0Y8jIkNlpSh.png" src-width="3094" src-height="390" align="center"/>

On the record date you may click [Register] to proceed to the next processing node. Note: Registration processing requires some time; the design is asynchronous and the status will become “Registering” (please wait briefly).

Once registration succeeds, you can find the client registration detail records for the plan under Execution menu: Corporate Actions &gt; Client Detail Jobs.

<img src="/assets/XfonbhMktosKilxZwN0jZBqrpzv.png" src-width="2778" src-height="158" align="center"/>

## 3. Instruction Collection

Prerequisite: Announcement records that have successfully completed registration.

Operation: Use query conditions State: Registered Successfully and Instruction Collection Status: Initialization to find announcements currently open for instruction collection (provided the announcement has been successfully registered).

<img src="/assets/W8LabPCj3oHHouxvoJEjlC4Cp6b.png" src-width="3410" src-height="1472" align="center"/>

You may then operate “Instruction Collection.” From the chosen start time to the settlement time, send selection notifications to relevant clients (via App or email).

Reference notification example:

This is to notify that for stock 700.HK an unconditional takeover offer has been made at a price of 12.00 HKD per share. The deadline for processing is Hong Kong Time 2023-02-07 12:00. Estimated distribution date: 2023-03-07 (for reference only; subject to actual distribution). To participate, please log in to the App and operate in [My Assets - Offer Buyback].

Note: After the instruction collection deadline, the progress status will automatically change to “Instruction Collection Completed.”

<img src="/assets/BxIGb7dUYoUPRqxd3tjjlS20p8c.png" src-width="3412" src-height="1574" align="center"/>

Because instruction collection involves client selection interactions, client selection records must be uploaded to CCASS for processing. The system stages for instruction collection are: Collecting Instructions / Submission Successful / Backfill Completed / Processed Successfully / Processing Failed.

<img src="/assets/PqJWbI3XToO6c8xKPiNjWlHApsi.png" src-width="2584" src-height="600" align="center"/>

### Submission

Submission refers to submitting client instructions to CCASS.

Announcement types of BE do not require pre-asset processing and do not require a submission action within the system.

Announcement types OO, EO, RS, ER, TU, TC, ADR require pre-asset processing and must be submitted within the system. Submission is allowed only when Progress Status: Registered Successfully and Instruction Collection Status: Processing Successful. After operation, the system will perform asset pre-processing and update the instruction collection status to Submission Completed.

<img src="/assets/SO2jbisiWodKzkxu9wUjj5NOpsg.png" src-width="3548" src-height="1806" align="center"/>

Submissions can be performed based on the summary of details.

<img src="/assets/LlpIbliGzoc56NxUnn5jVggTpYd.png" src-width="3548" src-height="1806" align="center"/>

### Backfill

Backfill refers to the operation of importing CCASS final processing results back into the system after client selection instructions have been uploaded to CCASS.

Operation: For announcement types OO, EO, RS, ER, TU, TC, ADR, and when Progress Status: Registered Successfully and Instruction Collection Status: Submission Completed, Backfill can be performed.

### Residual Adjustment

Not supported for announcement types OO, EO, RS, ER, TU, TC, ADR.

Residual adjustment can be performed when Progress Status: Registered Successfully and Instruction Collection Status: Client Operations Completed. Use the [Residual Adjustment] button on the right of the record.

<img src="/assets/K4pxbJsL1oPI1axG9bdjaPONpye.png" src-width="3192" src-height="1318" align="center"/>

The residual adjustment function can operate by sub-account or without sub-account splitting.

<img src="/assets/Du3mb5iIvo2XLax7xrwjAq2ypYc.png" src-width="2110" src-height="456" align="center"/>

## 4. Submit for Execution

Prerequisites: Announcement records that have been successfully registered and for which relevant business nodes (instruction collection, etc.) have been completed.

Note: This step is effectively the final step: execution processing. After verifying that the corporate action announcement’s required business nodes and system nodes are complete, submit for execution processing.

<img src="/assets/JhR1b1jyuoRScgxREDDjRvompvL.png" src-width="3404" src-height="1560" align="center"/>

A submission-for-review screen will appear; after confirming submission the record enters the subsequent execution review node.

<img src="/assets/BKEIbRyXvoJmrWxBMsvjh35Jpbb.png" src-width="3422" src-height="1628" align="center"/>

Please approve or reject according to the data. Once approved, the corporate action announcement processing cycle is complete.

<img src="/assets/CDUYby0kvoKDgfxW0pYjDzyXpHf.png" src-width="3414" src-height="1628" align="center"/>

The corporate action execution review report includes a grouping function to help operators more easily identify discrepancies with CCASS.

<img src="/assets/LrMMbDw4TosIN1x1MQ1jKOWUpHf.png" src-width="2908" src-height="1558" align="center"/>

## 5. Execution Review

Operation: Query with Progress Status: Execution Pending Review to find announcements pending execution review.

After execution review approval, the system will formally execute the corporate action.

When executing a corporate action, transfer operations are performed concurrently. If an announcement has been successfully registered and the client has holdings, during the “Execution” progress state the system will automatically perform transfer operations (after shares are transferred — i.e., payment of Script Fee — share records will change to Nominee).

Not all corporate actions require transfers; consolidations, splits, and share exchanges do not require transfers. When transfers occur, Street -&gt; Nominee operations will be completed.

<img src="/assets/LFOhbZaiYoA2f4xmneDj4HkTpzf.png" src-width="3406" src-height="1548" align="center"/>

<img src="/assets/HX2fbUdIhovVksxPyYEju1tnpcb.png" src-width="3548" src-height="1806" align="center"/>

# 4. Extended Functions

## 1. Manually Add Corporate Action

Path:

Corporate Actions &gt; Corporate Actions &gt; [Add] in the upper-left corner

The system provides two manual creation modes: Manual Creation and Quick Creation.

<img src="/assets/DQ72b6MhWoSKbqxPcJGjErxFppb.png" src-width="3348" src-height="298" align="center"/>

<b>Manual Creation</b>

Applicable scenarios:

- Corporate actions for U.S. and other markets that are created automatically
- Manual corporate action creation in OB mode

Operation:

Enter announcement type / underlying / announcement number / ex-dividend date or record date manually.

The announcement number must be entered manually (must not duplicate an existing system number).

For U.S. stock splits/dividends, enter the ex-dividend date; the system will automatically calculate the record date based on the ex-dividend date (operations remain based on the record date). For other types, enter the record date.

<img src="/assets/Bq7abe72roKt86x3jnFjgkbbpob.png" src-width="3364" src-height="1394" align="center"/>

Submit and then further edit information on the detail page.

Note: Regardless of whether you selected record date or ex-dividend date in the first step, ensure that the record date is accurate on the detail page.

<img src="/assets/HM6nbE696oECLOxa58BjFHvFpQc.png" src-width="2984" src-height="752" align="center"/>

<b>Quick Creation</b>

Applicable scenarios:

- Use when an announcement number already imported in the system’s CCNAN05 file is available; the system will read the corresponding information to generate the corporate action record.
- Useful when creation was missed due to inaccurate holdings or other reasons.
- Supported only in EP mode for HK, SZ, SH markets.

Operation:

Based on the 02 file, enter the announcement number (a 9-character text starting with “A”).

<img src="/assets/WJJKb327UoyQXgxnPkPjTCGEp4b.png" src-width="3548" src-height="1806" align="center"/>

## 2. Add Client Details

Applicable scenario:

After registration, discover that a client is entitled to an entitlement but is not included in the registration detail (e.g., due to delayed transfer synchronization).

Path:

Corporate Actions - Corporate Actions - Details - New

Operation:

Immediately after registration, verify holdings; if a client is missing, add the client detail.

Click [New], and enter announcement number, custodian, and holdings.

Holdings = STREET (shares not transferred/registered) + NOMINEE (shares already transferred/registered) + OWN

<img src="/assets/FWOGbTgWKoDLuRxiB0tjy807pnh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/UZ71brB5doH0VnxsCbrjnOKAp5d.png" src-width="3548" src-height="1806" align="center"/>

Notes:

- If added during the client selection stage, notifications (App, etc.) will not be sent retrospectively.
- Cannot add when not registered, after instruction collection has started, or after execution.

## 3. Void Client Details

Applicable scenario:

After registration, discover that a client should not receive the entitlement for a corporate action.

Path:

Corporate Actions - Corporate Actions - Details - Void

Operation:

Select the detail and click [Void].

<img src="/assets/H4AAbJcY8oc8YOx5ziZj5JUSpke.png" src-width="3548" src-height="1806" align="center"/>

Notes:

- Voiding may be performed immediately after registration.
- Voiding after entering the client selection stage for scrip/cash elections is likely to cause client complaints.
- Cannot void when not registered, after instruction collection has started, or after execution.

## 4. Back-Office Exercise

Applicable scenario:

During the client selection stage, perform back-office plan settings on behalf of the client.

Path:

Corporate Actions - Corporate Actions - Details - Client Details - Details - Exercise

Operation:

Enter the quantity in the exercise interface and submit.

<img src="/assets/Zwx7bKykdoMwNExoCbKjFzXqp0b.png" src-width="3548" src-height="1806" align="center"/>

Notes:

- Only corporate actions in Instruction Collection state can be exercised.
- For BE class, the sum of quantities across all options must equal the available exercisable quantity (holdings).
- Except for oversubscription options, the aggregated exercised quantity across options must not exceed the exercisable quantity (holdings).
- Offers and rights issues will validate holdings concurrently.

## 5. Edit Client Fees and Details

Path:

Corporate Actions - Corporate Actions - Details - Client Details - Details - Edit

Notes:

- Only corporate actions prior to submission for execution support editing of fees and details.
- Input amounts must be &gt;= 0.
- Up to two decimal places are supported.
- Edited results may be affected by re-registration, residual adjustment, backfill, etc.
- When fee currency and entitlement currency differ, report display may be affected.
- When editing entitlements, the combinations “currency + transfer amount” and “transfer quantity + new security” cannot be submitted simultaneously.

<img src="/assets/OC1jbPX6CoQ57MxQLjQjswanpPg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/GjVSbOos5obmGixI4dWjkxFnpjb.png" src-width="3548" src-height="1806" align="center"/>

## 6. Termination / Revoke of Corporate Actions

Termination

Corporate actions in the Initialization state support Termination; once terminated the corporate action will be permanently deleted.

<img src="/assets/NuBIbEIdcoygelxlMdwjtMmMped.png" src-width="3548" src-height="1806" align="center"/>

Revoke

Corporate actions after registration support Revoke; revoked corporate actions will retain operation records in the system.

Notes:

- For revokes after execution: if the daily close has not completed on the same day, the revoke is “seamless” (no trace); if the daily close has completed, the system will generate reversing entries and the original entries will not be deleted.
- Post-execution revokes are limited to revoking corporate actions from the same day or the previous day.
- After rights issues or offers have entered instruction collection, revoke is temporarily not supported; instead, perform revoke via cancelling client exercise.

<img src="/assets/JdPnbru8ioSRfLxltWAjYe0vpVc.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/S558beFcaogjZAxNog5jC7vypMc.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/Cnevb3YkDoxCk1xlqGNjVdyDp6K.png" src-width="3548" src-height="1806" align="center"/>

## 7. Corporate Action Email Message Templates

- Corporate action type
    - Template

- Rights issue
    <img src="/assets/BAGlbCfQPoEcjTxJ4c7jpvOqpTJ.png" src-width="856" src-height="190" align="center"/>

- Offer type
    <img src="/assets/MBcubK1niocjPlxynGdjQGM5p9d.png" src-width="828" src-height="182" align="center"/>

- Consolidations, splits, share exchanges
    <img src="/assets/ARDcbyAgSoD3jDxBi7xjMrN8pf0.png" src-width="1242" src-height="232" align="center"/>

- ADR execution
    <img src="/assets/SQZMbgTJroO1mbxCpxWjqpkXpXc.png" src-width="1268" src-height="222" align="center"/>

- Dividends / Bonus shares
    <img src="/assets/JkyNbB2BGogYj3xZa8BjF7rnpae.png" src-width="1210" src-height="274" align="center"/>

- Options-related corporate actions
    <img src="/assets/UOhcbLFQzoxi0YxlrqWj8MUmpMd.png" src-width="1182" src-height="334" align="center"/>

- General meeting
    <img src="/assets/RfwSb7feeo5oU5xVJpRjhKbnpFh.png" src-width="1238" src-height="310" align="center"/>

