---
title: 2024-01-08 Release Notes
slug: A2cpwN35Xiz1L4kGJf9c9igAn3w
sidebar_position: 49
---


# 2024-01-08 Release Notes

# 🎉 New Features

- Added: "Direct Posting" option for Deposits
    - Enables rapid crediting of deposit funds; by default requires approval, but can be configured to bypass approval and post directly according to business requirements.

- Requires approval
- No approval required
- Added: AML backend supports batch invocation of TESS
Path: "CRM" - "KYC" - "AML" - "Batch Invocation"
Path: "CRM" - "KYC" - "AML" - "Select Customers" - "Batch Cancel Monitoring"
Path: "CRM" - "KYC" - "Account Opening List" - "Details" - "TESS Hit Records"
    - The AML backend displays customer information for accounts that have been opened or have TESS invocation records, and adds: review status, screening time, and access to account opening documentation.
    - Adds an entry point for batch TESS invocation.
    - Adds a batch "cancel monitoring" function.
    - Account opening list details can retrieve TESS case_id in real time.

- Added: Work orders support the reviewer and creator being different persons
Path: "Settings" - "Identity Management" - "Approval Workflow Configuration"
    - When configuring approval workflows for work orders, each node supports setting whether the reviewer and the creator are the same person.

# 🪀 Improvements & Fixes

- Improved: Comprehensive optimization of deposit & withdrawal functions
- Improved: Risk Control menu adjustments and optimizations
- Improved: Batch limit reduction changes now support automatic crediting
- Improved: Added batch unfreeze functionality
- Improved: Manual adjustments — removed strict quantity validation for stock adjustments
- Improved: KYC backend information display
- Improved: When opening a corporate account, supports synchronizing and reusing company director, shareholder, beneficial owner, authorized person, and instruction-authorized person information.
- Improved: The account opening backend can directly create a virtual asset account.
- Improved: Statement sending method configuration, statement templates, and customer remarks are integrated with work order approval
- Improved: Support for batch assignment and updating of brokers
- Improved: Update log display

