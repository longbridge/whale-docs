---
title: 2024-04-08 Release Notes
slug: KVbLw3Bc7ihpPzktaPZcXmIwnle
sidebar_position: 39
---


# Release Notes — April 8, 2024

# 2024-04-08 Release Notes

# 🎉 New Features

- Added SFC-required Shortfall stress test

    <img src="/assets/Ie23bT0KRoTQ3px1QkCjAqFkpsf.png" src-width="3740" src-height="1438" align="center"/>
    - Supports creating Shortfall stress test tasks
    - The system automatically calculates whether an individual client is in Shortfall
    - The system automatically calculates the Top 10 Shortfall changes resulting from stocks becoming non-pledgeable
    - Path: "Securities Backend" - "Risk Management" - "Stress Testing" - "Liquid Funds Shortfall"
    - New permissions:
        - `risk.elc_test_management`
        - `lb_hk_margin_call.risk_monitoring_stock_level_query`

- Added signature file to the exported file list on the KYC detail page

    <img src="/assets/YBhxbxDxHotZ1rxKo9DjVAZYpEf.png" src-width="2460" src-height="1090" align="center"/>
    - Added signature file to the exported file list on the KYC detail page
    - Path: "Customer Management System" - "KYC" - "Account Opening Review" - "Account Opening List"

- Work orders support custom default approval workflows

    <img src="/assets/HfQAbKljCoJkdixJnwajZ7Wkpnc.png" src-width="2462" src-height="732" align="center"/>
    - Added an entry for configuring the default approval workflow in the approval workflow settings
    - In specific work order scenarios, if the work order approval workflow is not configured, the system will use the default approval workflow configuration
    - Configuration path: "Global Settings" - "Identity Management" - "Approval Workflow Configuration" - "Default Approval Workflow Configuration"

- Added business category and configuration flag for work orders

    <img src="/assets/LriqbCqD0oxAjMxbT1SjJgfApTh.png" src-width="2540" src-height="919" align="center"/>
    - Added filtering and display for the "Business Category" field in the work order approval workflow configuration and details
    - Added a flag in the work order approval workflow configuration to indicate whether approval nodes are configured
    - Existing approval workflows can use the flag to check whether approval nodes have been properly configured
    - Path: "Global Settings" - "Identity Management" - "Approval Workflow Configuration"

- Added Laboratory feature enablement
    - Added an entry for Laboratory features
    - Path: "Global Avatar" - "Laboratory Features"
    - Within the Laboratory features, users can choose to enable or disable the features

        <img src="/assets/D6VDbh7iYoPeRGxlSY1jSlQspL5.png" src-width="2468" src-height="1010" align="center"/>
        

        <img src="/assets/BQJHbQpKhobVLfxO2j7j96wcpcc.png" src-width="2834" src-height="845" align="center"/>
        - If "Enable" is selected, the relevant single‑menu pages will support multiple windows and tabs displayed simultaneously; different windows can be dragged to arbitrary positions to facilitate viewing multiple records at once
        - Currently supported pages: CRM → KYC → Account Opening List; additional pages will be added over time
        - If "Disable" is selected, existing usage will not be affected

# 🪀 Improvements and Fixes

- Improved message record query capabilities

    <img src="/assets/CenQbfe3GoK8eExGiTfjnTcVpgg.png" src-width="3178" src-height="784" align="center"/>
    - Supports exporting message records
    - Supports querying records by sender email and securities account
    - Supports displaying securities account and sender email
    - Path: "Customer Management System" - "Message Center" - "Message Templates"

- Added "Accounting Date" field to deposit and withdrawal reconciliation

    <img src="/assets/SfIGbA23doM0OSxwUMRjdAnmpyf.png" src-width="2794" src-height="946" align="center"/>
    - Added the "Accounting Date" field to deposit and withdrawal reconciliation

- Rejected deposit receipts are silently deleted in the backend
- Users can control the currency conversion toggle by configuring it per currency

