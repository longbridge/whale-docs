---
title: 2025-06-23 Release Notes
slug: LwRrwjWNhidkSikTExscfYMOnab
sidebar_position: 18
version: stable
---


# 2025-06-23 Release Notes

# 🎉 New Features

- Backend order entry business types now include OTC (Over-The-Counter) transactions.
    <img src="/assets/H4bbbkD6AoJn5ux1e5hjfGz5pEd.png" src-width="3016" src-height="1240" align="center"/>
    - Supports an independent configuration of fee rules for OTC.
    - The OTC market supports flexible calendar configurations, including not requiring one.

- Compatible with the Hong Kong Stock Exchange Dual Counter Model.
    - Upon the launch of the HKEX Dual Counter Model, it will support exporting orders by main counter code and merging reconciliations by main counter code

- Financing interest adjustment supports modifying multiple days simultaneously.
    <img src="/assets/BgPpbhPdEoVXsJxlQRpjxzR2pvd.png" src-width="3012" src-height="1254" align="center"/>
    - Financing interest adjustment supports modifying multiple days simultaneously

# 🪀 Optimization And Bugfix

- Adjustment: Add Customer Notification Feature
    <img src="/assets/OaLeb4NEEoqoEvxUyIIjWTXqpOe.png" src-width="3248" src-height="1714" align="center"/>
    - The adjustment feature now supports adding customer notifications for both single and batch adjustments. If the "Send Message" option is selected during the adjustment process, a message will be automatically sent after the adjustment is successfully completed.
    - The notification is an optional feature and is disabled by default. For batch adjustments, please follow the instructions provided in the Help Center for proper input.
    - Path: WBO - Account Assets - Adjustments - Adjustment

- Internal Stock Transfer: Add Custodian and Sub-position Option
    <img src="/assets/HK0DbbMicounYyxeIGIjNDFwp4d.png" src-width="3230" src-height="1728" align="center"/>
    - The stock transfer feature now supports specifying custodian and sub-position for the transferor. By default, the custodian and sub-position information for the transferee will match that of the transferor.
    - Path: WBO - Account Assets - Internal Transfer - Stock Transfer

- Deposit Record Optimization
    <img src="/assets/BdpSbScgboKxELxI8tKjJT3Vpve.png" src-width="3294" src-height="1138" align="center"/>
    - To make the display more intuitive, scattered information such as "Company Bank Account", "Client", "Remitter Bank", and "Deposit Bill-Deposit" has been aggregated and displayed.
    - Path: WBO - Cash Management - Deposits - Deposit Records

- eDDA Authorization Record Function Upgrade and Work Order Configuration Instructions
    <img src="/assets/Giy5bJ3ATowM5jxT8A4jgHUspeb.png" src-width="3270" src-height="1294" align="center"/>
    - Function Optimization: 4 New Tab Entries to Improve Operational Efficiency
        - The eDDA authorization record page adds 4 categorized Tabs: Pending, Awaiting Approval, Temporarily Unapproachable, All, enabling backoffice operators to quickly filter target records by business status and significantly shorten information retrieval time.
    - Key Configuration: Mandatory Items for Work Order Approval Process
        - The eDDA backoffice approval function has been integrated with the work order system. Before launch, the following configurations must be completed:
        - Work Order Process Name1: WBO-Cash Management-Deposit/Withdrawal Method-eDDA-Manual Confirmation Pending Approval
        - Work Order Process Name2: WBO-Cash Management-Deposit/Withdrawal Method-eDDA-Set to Invalid Pending Approval
        - Configuration Necessity: Failure to complete this process configuration will result in the absence of operation buttons in the eDDA approval function.
    - Operation Impact Notice
        - Please complete the work order process configuration in a timely manner to avoid approval chain blockage due to process absence and ensure the continuity of eDDA business processing.
    - Path：WBO-Cash Management-Deposit/Withdrawal Method-eDDA

- Fund Orders Support Rejection
    <img src="/assets/XkzKbRm5joN0ypxuZQYjPEFepdf.png" src-width="2864" src-height="1868" align="center"/>
    - Public/Private Fund orders and fund settlement now support rejection operations.
    - Path:
        - Fund Management - Fund - Client Order/Settlement
        - Fund Management - Private Fund - Client Order/Settlement
    - This allows users to reject specific orders or settlements directly within the respective management modules.

- Optimize clearing cancellation experience
    <img src="/assets/Olnybroa9oZks0x6dZDjTxqwpTg.png" src-width="3000" src-height="1228" align="center"/>
    - Add reminders, optimize text/copy.
    - Path: Clearing Management - Clearing cancellation

