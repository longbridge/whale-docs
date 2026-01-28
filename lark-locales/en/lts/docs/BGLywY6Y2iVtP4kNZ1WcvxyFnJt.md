---
title: 2025-06-30 Release Notes
slug: BGLywY6Y2iVtP4kNZ1WcvxyFnJt
sidebar_position: 26
version: lts
---


# 2025-06-30 Release Notes

# 🎉 New Features

- Support Reversal of All Types of Adjustments
    - Fully support the reversal function for all types of adjustments, including standard reversals and seamless reversals.
    - Add a "Revoke Batch ID" field in the list; to simplify the displayed list fields, you can use the "Columns" feature.
    - Path:  WBO - Account Assets - Adjustments - Adjustment

<img src="/assets/McW5bbOj5oVI2JxGj8Ejc6WXp1f.png" src-width="3082" src-height="1192" align="center"/>

- Implementation of Approval Process for Credit Group Limit Modifications
    - Adjustment of credit group limits and account limits within credit groups now requires approval process. The functionality entry points are illustrated in the screenshot. Approval flows can be customized based on different credit limit intervals.
    - Approval Flows:
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_backcredit.adjust_account_credit_call_backcredit.change_group_credit_call_back
        - Path: WBO - Risk  Control Compliance - Credit Limit - Financing Limit - Credit Limit

<img src="/assets/FlsTbclZWoYO6jx4EgvjKLmhpSd.png" src-width="3210" src-height="814" align="center"/>

- Add(Bulk) Optimization for Trade Risk
    - Optimization of Add(Bulk) Function for Client Limit/Securities Limit/Dealer Limit. Replace it with a unified batch creation component to allow differentiated limit rules per batch.
    - Path: WBO - Risk  Control Compliance - Trade Risk - Client Limit/Securities Limit/Dealer Limit

<img src="/assets/HwNpbfRqoo2LVrx8AtdjDvJPpvf.png" src-width="3248" src-height="822" align="center"/>

- Approval process for corporate action
    - Add approval function to the company's action module, where users can initiate approval at the following nodes after configuring relevant workflows:
        - Announcements execution
        - Revocation of Announcements
        - Tax refund execution
        - Revocation of tax refund

<img src="/assets/AChHbzsRXo78nrxvXf8jdhQyp1c.png" src-width="3072" src-height="1768" align="center"/>

- Automatic creation of stock conversion

<img src="/assets/USEzbHLako3FoOxGrUIj8sBqpIT.png" src-width="3082" src-height="1634" align="center"/>

- Backend order entry business types now include OTC (Over-The-Counter) transactions.
    <img src="/assets/FUWGbs3OlonVdmxmoiljq0c0pXf.png" src-width="3016" src-height="1240" align="center"/>
    - Supports an independent configuration of fee rules for OTC.
    - The OTC market supports flexible calendar configurations, including not requiring one.

- Compatible with the Hong Kong Stock Exchange Dual Counter Model.
    - Upon the launch of the HKEX Dual Counter Model, it will support exporting orders by main counter code and merging reconciliations by main counter code

- Financing interest adjustment supports modifying multiple days simultaneously.
    <img src="/assets/CFe1bvjrAoakKmxkN8cjhjyIpae.png" src-width="3012" src-height="1254" align="center"/>
    - Financing interest adjustment supports modifying multiple days simultaneously

# 🪀 Optimization And Bugfix

- Securities Deposit Service Optimization: New Physical Stock Handling Fee Entry Function
    - When performing the [Manual Warehousing] operation in the backend and selecting the Physical Stock category, the system will automatically pop up a handling fee edit box for operators to fill in the receivable handling fees according to actual business needs.
    - Path: WBO - Stock Management - Transfer In - Transfer In

<img src="/assets/HzpwbLmeCouRIsxlJAkjJIiPp3b.png" src-width="3312" src-height="1772" align="center"/>

- The eDDA record adds a recycle bin function
    - The eDDA record adds a recycle bin function, and deleted eDDA records can be queried separately in this module.
    - Path: WBO - Cash Management -Deposit/Withdrawal Method - eDDA

<img src="/assets/KN6SbbAL6oLN5DxBvjYjlsQwpFd.png" src-width="3266" src-height="846" align="center"/>

- Optimization of the Client Limit Adjustment Page and Addition of Custom List Functionality
    - Add "Columns" Functionality on the Client Limit Page
    - Move the Limit Adjustment Feature from Main Page to Sidebar
    - Path: WBO - Risk  Control Compliance - Credit Limit - Financing Limit - Credit Limit

<img src="/assets/WgH7bvICQoHTgSxxQmdjFnr0p9e.png" src-width="3186" src-height="746" align="center"/>

- Interactive Optimization for Withdrawal Application Customer Tagging
    - Tagging criteria expanded from a single "customer number" to multiple dimensions (e.g., securities account number, bank name, etc.), supporting batch addition of multiple tag groups simultaneously to improve operational efficiency.
    - A new historical tag record list is added to clearly display tagging time, operator, and tag content; supports on-demand individual or batch tag cancellation for flexible backtracking and correction.
    - Withdrawal applications that meet tagging criteria will automatically display tag notes on the details page, enhancing the relevance of business information and the transparency of audit evidence.
    - Path: Securities Backend - Funds Management - Withdrawal Application

- BE type of corporate action add a special email sending function
    - Send specific emails based on whether advance payment is required for dividend payout scenarios

<img src="/assets/Ee3rbuCuPo1C5xx1Qf5jCDNcpDh.png" src-width="3224" src-height="1766" align="center"/>

- Optimization of Customer Remittance Slip Information Display
    - Remove "Customer Name" from the list, and set the customer number as a clickable jump item.
    - Path: WBO - Cash Management - Currency Conversion - Exchange Order

<img src="/assets/Qt36bTsq2ozut0xhYmpjel6hp8b.png" src-width="3322" src-height="1768" align="center"/>

- Adjustment: Add Customer Notification Feature
    <img src="/assets/LbJJbfBekoI83uxf6wWj3lmgpoe.png" src-width="3248" src-height="1714" align="center"/>
    - The adjustment feature now supports adding customer notifications for both single and batch adjustments. If the "Send Message" option is selected during the adjustment process, a message will be automatically sent after the adjustment is successfully completed.
    - The notification is an optional feature and is disabled by default. For batch adjustments, please follow the instructions provided in the Help Center for proper input.
    - Path: WBO - Account Assets - Adjustments - Adjustment

- Internal Stock Transfer: Add Custodian and Sub-position Option
    <img src="/assets/TnxJbD7eyoynrUxJ8WKjyJi9pDb.png" src-width="3230" src-height="1728" align="center"/>
    - The stock transfer feature now supports specifying custodian and sub-position for the transferor. By default, the custodian and sub-position information for the transferee will match that of the transferor.
    - Path: WBO - Account Assets - Internal Transfer - Stock Transfer

- Deposit Record Optimization
    <img src="/assets/W3X4buaSNoDfXjxqk6djCMnupxh.png" src-width="3294" src-height="1138" align="center"/>
    - To make the display more intuitive, scattered information such as "Company Bank Account", "Client", "Remitter Bank", and "Deposit Bill-Deposit" has been aggregated and displayed.
    - Path: WBO - Cash Management - Deposits - Deposit Records

- eDDA Authorization Record Function Upgrade and Work Order Configuration Instructions
    <img src="/assets/QycVbXxcdo473vxyrCNj9B3Kpgd.png" src-width="3270" src-height="1294" align="center"/>
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
    <img src="/assets/A5dYbtO7IoJqNwxnX9Hjbk8zpJf.png" src-width="2864" src-height="1868" align="center"/>
    - Public/Private Fund orders and fund settlement now support rejection operations.
    - Path:
        - Fund Management - Fund - Client Order/Settlement
        - Fund Management - Private Fund - Client Order/Settlement
    - This allows users to reject specific orders or settlements directly within the respective management modules.

- Optimize clearing cancellation experience
    <img src="/assets/EQonbg5Nco2VEqxDmokjJ267pFn.png" src-width="3000" src-height="1228" align="center"/>
    - Add reminders, optimize text/copy.
    - Path: Clearing Management - Clearing cancellation

