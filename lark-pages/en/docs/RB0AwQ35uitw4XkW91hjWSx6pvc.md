---
title: 2024-03-18 Release Notes
slug: ZzUjw9y7Viv2BnkCivCccXepnld
sidebar_position: 41
---


# 2024-03-18 Release Notes

# 🎉 New Features

- Support for Hong Kong domestic allocation

    <img src="/assets/IezzbnNV8ogJsJxGPWUj34Sxpqh.png" src-width="3304" src-height="1708" align="center"/>
    - IPO supports Hong Kong domestic allocation
    - Path: "New Share Subscription" - "New Share Subscription" - "Hong Kong Domestic Allocation"

- Added Customer Groups and Customer Margin application-by-Group feature

    <img src="/assets/LtJYbenlxoHSzfxAs9Gjd7DEp4c.gif" src-width="1970" src-height="1052" align="center"/>
    - Added Customer Groups; supports applying to customer margin and reporting operations
    - Path: "Risk Management" - "List Management" - "Customer Groups"
    - Permissions:
        - Customer group query: `credit_limit.client_group_query`
        - Customer group operations: `credit_limit.client_group_operation`
    - Customer margin supports creation by selecting Customer Groups or Stock Groups
    - Path: "Risk Management" - "Margin" - "Customer Margin"

- Modify order channel before billing

    <img src="/assets/HPmWb7j7Soq8Ezx7Csije8sDpsh.png" src-width="3578" src-height="1798" align="center"/>
    - Scenario: Modify a user's order channel before billing and perform settlement based on the change
    - Operation: Start one-click settlement -&gt; Pause one-click settlement (data synchronization step) -&gt; Edit order channel
    - Edit order channel path: "Settlement Management" - "Transaction Flow Management" - "Trade Orders"
    - Note 1: Editing the billing channel is not supported after settlement billing
    - Note 2: After settlement billing, re-clicking data synchronization is not supported. If data synchronization was re-clicked, perform settlement rollback first

- Support reprocessing orders after billing and before day cut

    <img src="/assets/JVGobV5YUoX7f9x2MKWj53gjpvs.png" src-width="3578" src-height="1798" align="center"/>
    - Scenario: After billing and before day cut, back-end or front-end order reprocessing can be performed
    - Process: Perform settlement rollback -&gt; Back-end reprocessing (Front-end reprocessing) -&gt; Re-execute end-of-day
        - When performing settlement rollback, select "No Action" for asset rollbacks and select "Include in Settlement" for newly reprocessed orders
    - Settlement rollback path: "Settlement Management" - "End-of-Day Management" - "Settlement Rollback"

- Corporate Actions support display of client status

    <img src="/assets/M8GEbXm8WorUU6xPP1SjTOenpze.png" src-width="3578" src-height="1900" align="center"/>
    

    <img src="/assets/HEXvb9wk5o5ZhqxBqy3jq1U8pUd.png" src-width="3578" src-height="1900" align="center"/>
    - Corporate Actions now support displaying client status
    - Brokers may contact customer service to set whether actions apply to closed-account clients; the system defaults to applying the actions

- Configurable trading permissions in Account Opening List details
    - In Account Opening List Details — "Associated Accounts List": for accounts not yet activated, trading markets and permissions can be modified during the KYC review process
    - Path: "Customer Management System" - "KYC" - "Account Opening List" - "Details"
    - Note: Trading permission configuration must consider the type of account being opened; the final permissions are the intersection of markets selected in the backend and the account-opening functionality. For example: if the backend enables Hong Kong and Virtual Asset trading permissions but the account type is a Virtual Asset account, the final opened account will have only Virtual Asset trading permissions
    - Permissions:

        <img src="/assets/LCZ3btCAAoz6pUxFF9uj5ywHpgf.png" src-width="2140" src-height="1216" align="center"/>
        - View trading permissions entry: `account.trade_permission`
        - Modify trading permissions: `account.update_trade_permission`

- Account Opening List details: added Professional Investor certification and Risk Assessment information

    <img src="/assets/STnibeGjnogwsjx5MVuj96IFplb.png" src-width="2120" src-height="1122" align="center"/>
    - Reviewers with the corresponding view permissions can view Professional Investor certification records and risk assessment information in the account opening details; clicking will navigate to the detail page
    - Path: "Customer Management System" - "KYC" - "Account Opening List" - "Details"
    - Permissions: Corresponding permissions must be requested for these modules to appear in account details
        - Professional Investor certification: `customer.pi_app_record`
        - Risk assessment data query: `kyc.risk_assessment_query`

# 🪀 Improvements & Fixes

- Temporary statements: support custom language

    <img src="/assets/YtvHbF6VFovoaRxTEVTjy8GGp8c.png" src-width="3150" src-height="1132" align="center"/>
    - Creating a temporary statement supports selecting the statement language. The default follows the App language (note: the App language here is determined by the App settings corresponding to the cut-off date selected for the temporary statement). Users can customize and switch to a specified language
    - Path: "Settlement Management" - "End-of-Day Management" - "Statement Management" - "Statement Query"

- Add trading session selection for position closures

    <img src="/assets/QsBob612bopJQ3xt0u5jQyi2phe.png" src-width="1628" src-height="1712" align="center"/>
    - On the position-close modal under a margin call, US limit-order position closures support custom selection of the "trading session"; the default is intraday only
    - Path: "Risk Management" - "Margin Call" - "Risk Alerts"

- Added work-order approval to some Deposit & Withdrawal module functions
    - "Reject" on the deposit application page now triggers work-order approval
    - "Reject" on the withdrawal application page now triggers work-order approval
    - "Process" in the exception withdrawal module now triggers work-order approval
    - "Edit" & "Delete" under the customer's bank card menu now require work-order review

- Borrow reminders: added exception orders and rule approval

    <img src="/assets/WxsObap3ioTFQixLlXSjIzncppe.png" src-width="3282" src-height="1216" align="center"/>
    - Editing foreign-exchange rules requires work-order approval to be successfully modified
    - Added a query entry for exception orders (foreign exchange under review, foreign exchange failed, submission failed)
        - If foreign exchange is "under review," obtain the customer's exchange order number and check the review progress at "Funds Management" - "Foreign Exchange" - "Customer Exchange"
        - If you encounter foreign exchange failure or submission failure, contact customer service to report the issue
    - Path: "Risk Management" - "Credit Limit" - "Borrow Reminders"

- Manual adjustment status optimization

    <img src="/assets/Eupbb4PDaoQfQNxQRn3jows8phh.png" src-width="1750" src-height="678" align="center"/>
    - The "Status" of manual adjustments now reflects the actual adjustment state. Removed "Approved" and added three statuses: "Adjustment Successful", "Adjustment Failed", and "Adjustment Processing"
        - Adjustment Successful: approval granted and the adjustment processed successfully
        - Adjustment Failed: the reason for failure can be viewed in "Adjustment Results"
        - Adjustment Processing: the system is processing the adjustment
    - Path: "Asset Accounts" - "Manual Adjustments"

- Optimized naming of fields related to settlement checks

<img src="/assets/L04ibuMjco68EoxlBM4jW3USp6g.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/POq8bwOgRok6dMxXspfjZGaApyf.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/MWRxbhaNroiLhWxTNcLj0kjnpeh.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/QwmLbU1hhoy09PxlnVgjGMArpmb.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/PabHbqlzgodOv7xstv5jjTFspKc.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/RUjybJgrxo2crGxXYcOj1gGHpSf.png" src-width="3578" src-height="1798" align="center"/>

