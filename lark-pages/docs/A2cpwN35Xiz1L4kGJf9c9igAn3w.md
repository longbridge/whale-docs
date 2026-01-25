---
title: 2024-01-08 Release Notes
slug: A2cpwN35Xiz1L4kGJf9c9igAn3w
sidebar_position: 49
---


# Release Notes — January 8, 2024

# 2024-01-08 Release Notes

# 🎉 New Features

- Added: Direct Posting option for deposits
    - Enables rapid posting of deposits; by default it requires approval, but it can be configured to post directly without approval according to actual business requirements.

<img src="" src-width="100" src-height="100" align="center"/>

<img src="" src-width="100" src-height="100" align="center"/>

- Requires approval

<img src="" src-width="100" src-height="100" align="center"/>

- No approval required
- Added: AML backend supports batch TESS invocation
    Path: "CRM" - "KYC" - "AML" - "Batch Invocation"
    Path: "CRM" - "KYC" - "AML" - "Select Customers" - "Batch Cancel Monitoring"
    Path: "CRM" - "KYC" - "Account Opening List" - "Details" - "TESS Hit Records"
    - The AML backend now displays customers with active accounts or TESS invocation records, and additionally shows: review status, screening time, and an entry point to account opening information.
    - Added an entry for batch TESS invocation.
    - Added batch cancel monitoring function.
    - Account opening list details can obtain TESS case_id in real time.

<img src="" src-width="100" src-height="100" align="center"/>

- Added: Work orders support reviewer and creator being different persons
    Path: "Settings" - "Identity Management" - "Approval Workflow Configuration"
    - When configuring the approval workflow for work orders, each node can be configured to specify whether the reviewer and the creator are the same person.

<img src="" src-width="100" src-height="100" align="center"/>

# 🪀 Improvements and Fixes

- Improvement: Comprehensive optimization of deposit and withdrawal functions
- Improvement: Risk control menu adjustments and optimizations
- Improvement: Bulk limit reduction supports automatic credit granting

<img src="" src-width="100" src-height="100" align="center"/>

- Improvement: Added bulk unfreeze function

<img src="" src-width="100" src-height="100" align="center"/>

- Improvement: Manual adjustments — removed strict quantity validation for stock adjustments

<img src="" src-width="100" src-height="100" align="center"/>

- Improvement: KYC backend information display

<img src="" src-width="100" src-height="100" align="center"/>

- Improvement: Support synchronous reuse of company director / shareholder / beneficiary / authorized person / instruction authorized person information when opening a corporate account
- Improvement: Account opening backend can directly open virtual asset accounts

<img src="" src-width="100" src-height="100" align="center"/>

- Improvement: Settlement dispatch method configuration, settlement templates, and customer notes connected to work order approvals
- Improvement: Support bulk assignment and updating of brokers

<img src="" src-width="100" src-height="100" align="center"/>

- Improvement: Update log display

<img src="" src-width="100" src-height="100" align="center"/>

