---
title: 2024-04-08 Release Notes
slug: KVbLw3Bc7ihpPzktaPZcXmIwnle
sidebar_position: 39
---


# Release Notes — 2024-04-08

# 2024-04-08 Release Notes

# 🎉 New Features

- Added Shortfall stress testing as required by the SFC
    <img src="/assets/VK54bGa5soL8hqxA2rLjFMlLpEh.png" src-width="3740" src-height="1438" align="center"/>
    - Allows creation of Shortfall stress test tasks
    - The system automatically calculates whether an individual client is in Shortfall
    - The system automatically calculates the Top 10 Shortfall changes resulting from stocks becoming non-pledgeable
    - Path: "Securities Back Office" &gt; "Risk Management" &gt; "Stress Testing" &gt; "Liquid Funds Shortfall"
    - New permissions:
        - `risk.elc_test_management`
        - `lb_hk_margin_call.risk_monitoring_stock_level_query`

- Added signature file to the exported file list on the KYC detail page
    <img src="/assets/MuGrbchSfolNwWxyAOJjFVxwpub.png" src-width="2460" src-height="1090" align="center"/>
    - The exported file list on the KYC detail page now includes signature files
    - Path: "Client Management System" &gt; "KYC" &gt; "Account Opening Review" &gt; "Account Opening List"

- Work orders support custom default approval flows
    <img src="/assets/KgN0bjg68oCdQkx8Sv6jP7ZWpub.png" src-width="2462" src-height="732" align="center"/>
    - Added an entry for configuring the default approval flow in the approval flow settings
    - In specific work order business scenarios, if a work order's approval flow is not configured, the system will use the configured default approval flow
    - Configuration Path: "Global Settings" &gt; "Identity Management" &gt; "Approval Flow Configuration" &gt; "Default Approval Flow Configuration"

- Added business classification and configuration indicators for work orders
    <img src="/assets/UfCgb7ciKoitNixE8rPj5Nbwpph.png" src-width="2540" src-height="919" align="center"/>
    - Added filtering and display for the "Business Category" field in work order approval flow configuration and details
    - Added an indicator in the work order approval flow configuration to show whether approval nodes are configured
    - Existing approval flows can be checked via the indicator to verify whether approval nodes are properly configured
    - Path: "Global Settings" &gt; "Identity Management" &gt; "Approval Flow Configuration"

- Added Laboratory features toggle
    - Added an entry point for Laboratory features
    - Path: "Global Avatar" &gt; "Laboratory Features"
    - Within the Laboratory features, users can enable or disable the feature
        <img src="/assets/Oxy8bsE3eoEXH2xnIx8j8ZiOpTd.png" src-width="2468" src-height="1010" align="center"/>
        <img src="/assets/HqZtby6Q3o1PHmx7lztjzRvQpEg.png" src-width="2834" src-height="845" align="center"/>
        - If "Enable" is selected, the relevant single-menu pages will support multiple windows and tabs displayed simultaneously, and different windows can be dragged to any position, facilitating simultaneous viewing of multiple entries
        - Currently supported pages: CRM - KYC - Account Opening List; more pages will be added subsequently
        - If "Disable" is selected, current usage is not affected

# 🪀 Improvements and Fixes

- Enhanced message record query capabilities
    <img src="/assets/VjQebYKe3owuHNxVgrUje6ZKpSc.png" src-width="3178" src-height="784" align="center"/>
    - Supports exporting message records
    - Supports querying records via sender email and securities account
    - Displays securities account and sender email
    - Path: "Client Management System" &gt; "Message Center" &gt; "Message Templates"

- Added "Accounting Date" field to deposit and withdrawal reconciliation
    <img src="/assets/A1PgbmuqjoWEa4xAxNTjW40Fpxc.png" src-width="2794" src-height="946" align="center"/>
    - The deposit and withdrawal reconciliation now includes the "Accounting Date" field

- Rejected deposit vouchers are removed silently in the backend
- Users can control the currency exchange toggle per currency through configuration

