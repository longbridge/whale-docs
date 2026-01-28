---
title: 2025-06-03 Release Notes
slug: Vjohwb9L4iLTkpkwMbqczOD4nGc
sidebar_position: 10
version: stable
---


# 2025-06-03 Release Notes

# 2025-06-03 Release Notes

# 🎉 New Features

- Support for revocation of all securities adjustment types
    <img src="/assets/T116bZdjYoXgw3xWInZjNyzZpNq.png" src-width="1280" src-height="416" align="center"/>
    - Full support for revocation of all adjustment types, including standard revocation and silent revocation.
    - A "Revocation Batch Number" field has been added to the list; to reduce displayed list fields, use the "Custom List" feature.
    - Path: Securities Back Office - Asset Accounts - Adjustments - Manual Adjustments

- Work order approval workflow added for credit group limit changes
    - Adjusting credit group limits and adjusting account limits within a credit group now include a work order approval workflow; see illustrated entry points. Supports configuring different approval flows based on limit ranges.
    - Associated approval flows:
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_back
        - credit.adjust_account_credit_call_back
        - credit.change_group_credit_call_back
    - Path: Securities Back Office - Risk Management - Credit Limits - Financing Credit - Limit Approval

<img src="/assets/W7gwbqjzTozZ8RxteKTjC6GNpYb.png" src-width="3212" src-height="856" align="center"/>

- Optimization of bulk creation for trading limits
    - The bulk creation functionality for Customer Limits / Security Limits / Trader Limits has been optimized and replaced with a unified batch-creation component, allowing limit rules to be set differently per batch.
    - Path: Securities Back Office - Risk Management - Trading Limits - Customer Limits / Security Limits / Trader Limits

<img src="/assets/CBCHbS8Xkohr9axohA4jb6Djpik.png" src-width="1280" src-height="324" align="center"/>

- Corporate actions workflow approval integration
    - Added approval functionality to the Corporate Actions module; after configuring the related workflows, users may initiate approvals at the following nodes:
        - Announcement Execution
        - Announcement Revocation
        - Tax Reclaim Execution
        - Tax Reclaim Revocation

<img src="/assets/FwHobmQW1os4L5x2WCCjbqpapEf.png" src-width="3090" src-height="1756" align="center"/>

- Automatic creation of corporate action announcements for U.S. stock share swaps

<img src="/assets/AxtKbd8TooTXdzxVXifjiwANp2e.png" src-width="2522" src-height="1238" align="center"/>

# 🪀 Improvements and Fixes

- Securities deposit process optimization: added physical stock fee entry
    - When performing the [Manual Stock Inbound] operation in the back office and selecting the physical stock category, the system will automatically display a fee editing box for operators to enter receivable fees according to actual business requirements.
    - Path: Securities Back Office - Securities Management - Securities Deposit - Deposit Application

<img src="/assets/J6Jeb1XInoGD4ZxuK2ij0q7ap2d.png" src-width="3310" src-height="1758" align="center"/>

- Recycle Bin added for eDDA records
    - eDDA records now include a Recycle Bin feature, allowing deleted eDDA records to be queried separately within this module.
    - Path: Securities Management - Funds Management - Deposit/Withdrawal Methods - eDDA

<img src="/assets/BourbaUHJoH06uxBt8cjl0MopyU.png" src-width="3298" src-height="954" align="center"/>

- Client limit adjustment page optimized with added Custom List feature
    - A "Custom List" feature has been added to the Client Limits page.
    - Limit adjustments have been changed from a full page to a sidebar.
    - Path: Securities Back Office - Risk Management - Credit Limits - Financing Credit - Client Limits

<img src="/assets/C5H5bfaI1o6oO4xZF90jO3snpie.png" src-width="3212" src-height="614" align="center"/>

- Withdrawal application client tagging interaction improvements
    - Tagging conditions have been expanded from a single "Client ID" to multi-dimensional criteria (e.g., securities account, bank name), supporting simultaneous bulk addition of multiple tag groups to improve operational efficiency.
    - Added a historical tag record list that clearly displays tag time, operator, and tag content; supports individual or bulk untagging as needed for flexible rollback and correction.
    - Withdrawal applications that meet tagging conditions will automatically display tag notes on the details page, strengthening the linkage of business information and transparency of review basis.
    - Path: Securities Back Office - Funds Management - Withdrawal Applications

- BE corporate actions: added targeted email dispatch function
    - Sends specific emails depending on whether dividend payments require temporary funding.

<img src="/assets/INikbu5jAo4iHCxsddRjKs6gp8f.png" src-width="3234" src-height="1766" align="center"/>

- Client foreign exchange order display optimization
    - Removed "Client Name" from the list display and made the Client ID a clickable navigation item.
    - Path: Securities Back Office - Funds Management - Foreign Exchange - Client Foreign Exchange

<img src="/assets/WUDGbKj2OoYEatx9HMKjyfoEp5e.png" src-width="1280" src-height="679" align="center"/>

