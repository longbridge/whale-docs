---
title: 2025-07-21 Release Notes
slug: 2345bab0c2cc80f7a029d7bda98d184a
sidebar_position: 15
version: stable
---


# 2025-07-21 Release Notes

# 🎉New Features

- Customer Bank Card Supplementary Deposit Name Function Description
    - New Function：Added a "Supplementary Deposit Name" entry for customer bank cards to address scenarios where the bank registered name does not match KYC information.
    - Application Scenario：When the bank registered name differs from KYC information, this function allows supplementary entry. Manually reviewed names will be automatically applied to subsequent eDDA authorizations, deposit auto-matching, and bank card binding.
    - Work Order Approval Process：New/edit/delete operations all require work order approval. The following work orders need to be configured:
        - WBO - Funds Management - Deposits - New Suppl Deposit Name Pending
        - WBO - Funds Management - Deposits - Edit Deposit Name Pending
        - WBO - Funds Management - Deposits - Delete Suppl Cust Info Pending
    - Path：WBO - Cash Management - Bank Card Management
    - Permissions：
        - Update Deposit Name Inquiry `atm.update_deposit_name_inquiry`
        - Update Deposit Name Operation `atm.update_deposit_name_operation`
        - Update Deposit Name Approval `atm.update_deposit_name_approval`

- Internal Transfer: Add validation for virtual asset identification
    - 1.Internal Cash Transfer: Add Configuration for virtual asset account validation
    - When transferring funds to the main account, enable validation for virtual asset account configuration. If this configuration is activated, the system will check the company account's position when the recipient is identified as a virtual asset account. If the position is insufficient, an alert will be triggered during the backend transfer process. To enable this feature, please contact Longbridge customer service for assistance in applying.
    - 2.Internal Stock Transfer: Restrict virtual asset accounts from transferring stocks
    - Path: WBO - Account Assets - Internal Transfer

# 🪀 Optimization And Bugfix

- New Duplicate Prompt Function for Deposit Applications
    - New Function：The system will trigger a duplicate prompt for deposit applications that meet the following conditions:
    - Time Range：Applications submitted within 7 days
    - Key Information：Notification amount, currency, and customer securities account number are completely identical
    - Path：WBO - Cash Management - Deposits - Pending Requests

- Withdrawal Record Optimization
    - Due to the complexity of withdrawal record fields, similar fields (including company bank account, customer information, receiving bank, remarks, amount, status, and time) have been merged for display to facilitate customer inquiries.
    - Path: WBO - Cash Management - Withdrawal - Withdrawal Records

- Credit FPS Rule Data Source Switching and Multi-language Support
    - Note:
    - Path: WBO - Risk Control Compliance - Credit Limit - Financing Limit - Client FPS

