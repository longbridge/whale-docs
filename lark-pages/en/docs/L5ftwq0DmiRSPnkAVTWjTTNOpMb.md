---
title: 2026-02-07 Release Notes
slug: TDB6w5EaQitkUGklchSjx5impmc
sidebar_position: 0
version: lts
---


# 2026-03-16 Release Notes

# 🎉 New Features

- Position Inquiry and Real-time Acquisition / Prompt Position and Interception Position Configuration / Settlement Channel Account Configuration / Fund Allocation Rule Configuration (Create/Edit/Copy) / Scheduled Task Automatic Allocation / Event-triggered Automatic Allocation (Insufficient Position, Withdrawal/Deposit Submission/Failure, Successful Deposit) / Manual Fund Allocation and Work Order Approval / Allocation Record Inquiry and Status Verification
    - Added position inquiry and real-time balance reacquisition functions, supporting filtered queries by channel, currency, and account type, applicable to both fiat and cryptocurrencies.
    - Added prompt position and intercept position configurations with corresponding alert mechanisms. For withdrawal scenarios, intercepts are supported when principal or fees are insufficient.
        - Path: VA Clearing Management - Position Management Inquiry
    -  Added settlement channel account configuration for maintaining upstream account information before position allocation.
        - Path: Service Parameter - Fund Parameters - Settle Chnl Acct
    - Added fund allocation rule configuration, supporting creation, editing, and copying of transfer rules between settlement accounts.
    - Enabled automatic allocation, supporting scheduled transfers and event-triggered transfers in multiple scenarios.
        - Path: Service Parameter - Fund Parameters - Funds Alloc Config
    - Launched manual allocation and approval workflow, supporting initiation, review, rejection, and reapplication.
    - Optimized allocation record inquiry. Operators can query details including allocation status, amount, currency, sender/receiver accounts, and business order numbers to ensure traceable processes and accurate data.
        - Path: Cash Management - Bank Statement - Company Fund Allocation
    - Permission
        - Position Management Inquiry assets.position_anagement_inquiry_query
        - Position Management Operation assets.position_anagement_inquiry_operation
        - Company Fund Allocation Inquiry atm.company_fund_allocation_inquiry
        - Company Fund Allocation Operation atm.company_fund_allocation_operation
        - Company Fund Allocation Approval atm.company_fund_allocation_approval
        - Settle Chnl Acct Inquiry atm.settle_chnl_bank_acct_inquiry
        - Settle Chnl Acct Operation atm.settle_chnl_bank_acct_operation
        - Funds Alloc Config Inquiry atm.funds_alloc_config_inquiry
        - Funds Alloc Config Operation atm.funds_alloc_config_operation

