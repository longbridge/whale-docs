---
title: 2024-05-06 Release Notes
slug: CH5uw4JCMiNYHZk59gpcSpQPnmg
sidebar_position: 37
---


# Update Log — May 6, 2024

# 2024-05-06 Release Notes

# 🎉 New Features

- Settlement Instruction Export (New) (Previous menu deprecated)
    - Path: Clearing Management - End-of-Day Tasks - Settlement Instruction Export
    - Supports exporting files for future dates
    - Supports exporting across multiple markets: HK, SZ, SH
    - Previous menu deprecated

<img src="/assets/FR98bAb9tojpHwxb2DvjhAl9p6f.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/LYAwbQT6boT6ELxyWlpjRnnmpft.png" src-width="3574" src-height="1774" align="center"/>

- Added "Corporate Entity Type" field to corporate account profile

    <img src="/assets/PSvibvPduo9PnJxJEbSjSAEvpWf.png" src-width="2180" src-height="1264" align="center"/>
    - In the offline corporate account opening process, added the "Corporate Entity Type" field; it is optional
    - In the KYC details page, support display and editing of the new field
    - The bulk update functionality has been updated to support batch updates of the "Corporate Entity Type" field

- Customizable Pre-Clearing Preparation Configuration

    <img src="/assets/IyMzbkElooneNsxiqSwjsJWGpBe.png" src-width="3574" src-height="1774" align="center"/>
    - Path: Business Parameter Settings - End-of-Day Settings - Pre-Clearing Preparation
    - Definition of check stages: Trade Clearing (data synchronization — checks before clearing and settlement); End-of-Day Clearing and Settlement (data aggregation — checks before day cutover)
    - Definition of post-failure handling: Notification Only (does not block the process, only provides alerts), Work Order Review (will block the process but can be manually approved), Mandatory Validation (will block the process and must be passed)
    - Supported actions: Enable/Disable, select post-failure handling method
    - Editable time window: Before executing end-of-day tasks
    - Editing requires approval; work order identifier: clearing.before_clearing_ready.settiing
    - Other: Some checks are mandatory and cannot be edited

- Configuration for Merging Clearing into End-of-Day Tasks and Clearing Initialization

    <img src="/assets/H9uJbCe1TosRjax9jckjlBf4pdb.png" src-width="3574" src-height="1774" align="center"/>
    

    <img src="/assets/ZxxIb8aKnoD1UZxwWtmjs2gGpqD.png" src-width="3574" src-height="1774" align="center"/>
    - Path: Business Parameter Settings - End-of-Day Settings - Clearing Parameter Configuration
    - Editable time window: Before executing end-of-day tasks
    - Editing clearing initialization configuration requires approval; work order identifier: clearing.update_system_config.exec
    - Other:
        - For changes to other configuration switches, please contact the client and operate under guidance

- Added email notifications after corporate action execution completion

    <img src="/assets/A25xbejJioq0sdxfuwgjsl1kpHd.png" src-width="856" src-height="190" align="center"/>
    

    <img src="/assets/QPIJbmiYnoUWoqx2w6PjP4dBplf.png" src-width="828" src-height="182" align="center"/>
    

    <img src="/assets/NbMfb69rZoZPVSx1BoKjBmFKpEe.png" src-width="1242" src-height="232" align="center"/>
    

    <img src="/assets/WenGbwpqnou9g5xifO5jpDPMpQb.png" src-width="1268" src-height="222" align="center"/>
    

    <img src="/assets/Y6Zxbsw0poAwd0xtNNXjYLPdpdR.png" src-width="1210" src-height="274" align="center"/>
    

    <img src="/assets/BpjBbo21NowKWRx8byKjEIYupid.png" src-width="1182" src-height="334" align="center"/>
    - Rights issue types: RS, ER, OO, RS
    - Offer types
    - Share split/merge and share exchange
    - ADR execution
    - Dividends and bonus shares
    - Options-related corporate actions

- WBO FX Conversion — Added Cancellation Function
    - For FX conversion requests submitted by clients, cancellation capability is determined based on the client's exchange status. Specifically, when the client's exchange status is "Submitted" or "Exchanging," cancellation is permitted.

<img src="/assets/RTvKbdBb4oaxeUxa2yGj3kQwpof.png" src-width="3276" src-height="1776" align="center"/>

# 🪀 Improvements & Fixes

- Corporate action-related optimizations

    <img src="/assets/Hdsnbkab4oFpiGxwnOPjyVfpp4b.png" src-width="3574" src-height="1774" align="center"/>
    

    <img src="/assets/LZkLbdD3SohHqpx9efHjpKqlpdf.png" src-width="3574" src-height="1774" align="center"/>
    

    <img src="/assets/MHOHbh7qgovg22x2CBdjT8hJprg.png" src-width="3574" src-height="1774" align="center"/>
    - Upgraded the underlying securities search component
    - Added prompts for voluntary corporate actions not supported by BE-type. If the backend supports exercise but the app does not, the customer will not be prompted
    - Added email send time to the customer name; this field displays the most recent email send time for the corporate action
    - Other:
        - BE-type now supports BONUS CONVERTIBLE NOTE scheme type; when auto-created it maps to BE-BONUS ISSUE
        - Optimized GST handling logic for the Singapore market

- Optimizations for checks during clearing

    <img src="/assets/BE1dbZfVSoZNAGxFJkajpykup1A.png" src-width="3574" src-height="1774" align="center"/>
    - Balance reconciliation now excludes frozen transactions

- Optimizations for pre-clearing preparation

    <img src="/assets/G7VWb12e5oxserxXvEujnowgpDg.png" src-width="3574" src-height="1774" align="center"/>
    - Closing price confirmation: error items that were alerted the previous day will no longer be reported; Hong Kong stock code ranges 41000–46999 and 49000–49499 will no longer trigger errors
    - Trade file check: no error will be reported for entities that did not initiate trades on the day

- Accounting middle platform onboarding fees now sourced from billing and copy adjustments
    - Onboarding fees in the accounting middle platform are now sourced from billing
    - Renamed accounting middle platform data source labels:
        - “[LOTSNSDR]其它第三方费用(卖出)” changed to “Agency Charges - Equity Trading - Commission (Sell)”
        - “其他费用账单” changed to “Agency Charges”
        - “[LOTSNSCR ...” (entry truncated in source)

<img src="/assets/RlWqb8B7ao3b3sx3PeXjn2uJpPd.png" src-width="2158" src-height="1152" align="center"/>

- WBO home dashboard to-do slot card display logic updated
    - Withdrawal to-do: application status = Pending Submission & Under Approval & Modification Pending Approval & Deletion Pending Approval & Rejection Pending Approval
    - Deposit to-do: match status = "Unmatched" && credit status = "Processing" & "Modification Pending Approval" & "Deletion Pending Approval" & "Rejection Pending Approval"
    - Securities withdrawal to-do: the sum of the counts of the two metric cards "Pending Submission" and "In Progress" in withdrawal applications
    - Securities deposit to-do: the sum of the counts of the two slot cards "Pending Submission" and "In Progress" in deposit applications
    - Bank cards pending review: verification status = Pending Verification && deletion status = Not Deleted

<img src="/assets/UChNbj7yNoftqqxiqYsjrIJWpfb.png" src-width="3838" src-height="1802" align="center"/>

- Exception FX records — added Chinese enumeration values
    - The enumeration values for "Channel Exchange Status" on the exception FX records page will be displayed according to the language environment

<img src="/assets/Pspkbn2m6ormMEx3Aptj93TRpMc.png" src-width="3302" src-height="1708" align="center"/>

- Statement dispatch configuration changed from client number to securities account dimension

    <img src="/assets/DuHKbiiSboW5gixg0BkjILpGpne.png" src-width="3212" src-height="984" align="center"/>
    - Statement dispatch configuration is now based on the "Securities Account" dimension, supporting per-account configuration for statement delivery (corresponding to the app "Statement Reminder" feature)
        - Add a [Securities Account] column to the list
        - Bulk add file fields must include the Securities Account, filled according to the template
    - Path: Clearing Management - End-of-Day Management - Statement Management - Dispatch Method Configuration

- Removal of "Receive Offline Statements" entry in the offline account opening process

    <img src="/assets/SJT5bQoH2oePEixpd62jQ0OHppe.png" src-width="1232" src-height="1694" align="center"/>
    - In the offline corporate account opening process, the "Receive Offline Statements" field has been removed and unified to be maintained in the "Statement Management" module, enabling statement receipt management at the Account dimension
    - Path: KYC - Document Management - Account Opening Information - Final step of the offline corporate account opening process

