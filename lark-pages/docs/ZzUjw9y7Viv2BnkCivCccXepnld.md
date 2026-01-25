---
title: 2024-03-18 Release Notes
slug: ZzUjw9y7Viv2BnkCivCccXepnld
sidebar_position: 41
---


# March 18, 2024 — Release Notes

# 2024-03-18 Release Notes

# 🎉 New Features

- Support for Hong Kong Stock National Allocation
    <img src="/assets/RiAmb0WdPoVQ9JxfwGLjt626psg.png" src-width="3304" src-height="1708" align="center"/>
    - IPOs now support Hong Kong stock national allocation
    - Path: "New Share Subscription" - "New Share Subscription" - "Hong Kong National Allocation"

- Added Customer Groups and Ability to Apply Customer Margin to Customer Groups
    <img src="/assets/SUVMbpWbCoHmoKxmQQSjxdwnpAN.gif" src-width="1970" src-height="1052" align="center"/>
    - Added customer groups, supporting the application of margin and reporting services
    - Path: "Risk Control Management" - "List Management" - "Customer Groups"
    - Permissions:
        - Customer group query: `credit_limit.client_group_query`
        - Customer group operation: `credit_limit.client_group_operation`
    - Customer margin supports creation by selecting customer groups and equity groups
    - Path: "Risk Control Management" - "Margin" - "Customer Margin"

- Modify Order Channel Before Billing
    <img src="/assets/HGddbeceuoVPxyxE1VOjZMcypdh.png" src-width="3578" src-height="1798" align="center"/>
    - Scenario: Modify the user's order channel before billing and perform clearing based on the modified channel
    - Operation: Start one-click clearing -&gt; Pause one-click clearing (data synchronization step) -&gt; Edit order channel
    - Edit order channel path: "Clearing Management" - "Flow Management" - "Trade Orders"
    - Note 1: Editing the charging channel is not supported after clearing billing
    - Note 2: After clearing billing, re-clicking data synchronization is no longer supported. If data synchronization was re-clicked first, perform a clearing reversal before further operations

- Support Order Replenishment After Billing and Before Daily Cutoff
    <img src="/assets/YJsWbQnZSon1qjx7gVnjUYrRp4e.png" src-width="3578" src-height="1798" align="center"/>
    - Scenario: After billing and before the daily cutoff, backend or frontend order replenishment can be performed
    - Flow: First perform clearing reversal -&gt; backend replenishment (or frontend replenishment) -&gt; re-execute end-of-day processing
        - When performing clearing reversal, choose "Do not operate" for asset rollbacks & choose "Include in clearing" for newly added replenished orders
    - Clearing reversal path: "Clearing Management" - "End-of-Day Management" - "Clearing Reversal"

- Corporate Actions Support Displaying Client Status
    <img src="/assets/EKDObzWfGo59ihxen6bjg1gMptg.png" src-width="3578" src-height="1900" align="center"/>
    <img src="/assets/J1cmbi1uno6oM4xz5pVjA4lNp9c.png" src-width="3578" src-height="1900" align="center"/>
    - Corporate actions now support displaying client status
    - Brokers may contact customer service to set whether to execute for closed-account clients or not. The system defaults to execute

- Configurable Trading Permissions in Account Opening List Details
    - Account Opening List Details — "Associated Accounts List" added: for accounts that have not been opened, the account's trading markets and permissions can be modified during the KYC review process
    - Path: "Customer Management System" - "KYC" - "Account Opening List" - "Details"
    - Note: Trading permission configuration must consider the type of account the client opens; it is the intersection of the market permissions selected in the backend and the account-opening functionality. For example: if the backend enables Hong Kong stocks and virtual asset trading permissions, and the account type is a virtual asset account, the final enabled permissions for the account will be only virtual asset trading
    - Permissions:
        <img src="/assets/OJtybIGLYoZUKsxNLL6jjvwupHh.png" src-width="2140" src-height="1216" align="center"/>
        - Display trade permission entry: `account.trade_permission`
        - Modify trade permissions: `account.update_trade_permission`

- Account Opening List Details Add Professional Investor Certification and Risk Assessment Information
    <img src="/assets/J7zcb8YJ0ob6xKxdTttjOt3wpCf.png" src-width="2120" src-height="1122" align="center"/>
    - Reviewers with the appropriate viewing permissions can view professional investor certification records and risk assessment information in the account opening details; clicking will navigate to the details page
    - Path: "Customer Management System" - "KYC" - "Account Opening List" - "Details"
    - Permissions: The corresponding modules will be displayed in account opening details only after the appropriate permissions have been requested
        - Professional investor certification: `customer.pi_app_record`
        - Risk assessment data query: `kyc.risk_assessment_query`

# 🪀 Improvements and Fixes

- Temporary Statement Supports Custom Language
    <img src="/assets/Leajb5LJUo4NMNxXC7TjGPpopRe.png" src-width="3150" src-height="1132" align="center"/>
    - Creating a temporary statement now supports selecting the statement language. The default follows the App language (Note: the App language here corresponds to the setting for the cutoff date selected for the temporary statement). Users may manually switch to a specified language
    - Path: "Clearing Management" - "End-of-Day Management" - "Statement Management" - "Statement Search"

- Added Trading Session Selection for Position Closing
    <img src="/assets/SYZ5bSsTloaC8dxO1DHjxh3Hpic.png" src-width="1628" src-height="1712" align="center"/>
    - On the margin call position-closing modal, U.S. limit order closing now supports custom selection of "trading session"; the default is intraday only
    - Path: "Risk Control Management" - "Margin Call" - "Risk Alerts"

- Deposit and Withdrawal Module: Added Workflow Approvals for Certain Functions
    - "Reject" on the deposit application page now includes workflow approval
    - "Reject" on the withdrawal application page now includes workflow approval
    - "Handle" in the exception withdrawal module now includes workflow approval
    - "Edit" & "Delete" under the customer's bank card menu now require workflow review

- Borrowing Reminder: Added Exception Tickets and Rule Approval
    <img src="/assets/SmPJbGYKGoVH9CxjciQjZy6KpfK.png" src-width="3282" src-height="1216" align="center"/>
    - Editing foreign exchange rules requires workflow approval to take effect
    - Added a query entry for exception tickets (exchange under review, exchange failed, submission failed)
        - If encountering "exchange under review," you may use the client's exchange order number to check the exchange review progress at "Funds Management" - "Foreign Exchange" - "Client Exchange"
        - If encountering "exchange failed" or "submission failed," please contact customer service for assistance
    - Path: "Risk Control Management" - "Credit Limit" - "Borrowing Reminder"

- Manual Adjustment Status Optimization
    <img src="/assets/GaCibkRs7ohoPrxMHA2jULgkpRK.png" src-width="1750" src-height="678" align="center"/>
    - The "Status" of manual adjustments will reflect the actual adjustment state. The status "Approved" has been removed and replaced with three statuses: "Adjustment Successful," "Adjustment Failed," and "Adjustment Processing"
        - Adjustment Successful: approved and processed successfully
        - Adjustment Failed: failure reasons can be viewed in "Adjustment Result"
        - Adjustment Processing: the system is processing the adjustment
    - Path: "Asset Accounts" - "Manual Adjustment"

- Optimized Naming of Fields Related to Clearing Checks

<img src="/assets/DTP8b9kMSoBDVExeioojD27Ep0c.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/J88QbuqmGors5RxAHvxjtE0Jpbe.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/IympbGcOLoA1a8xzygQjFJEtpGh.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/Lykyb3iizojZYlxPZlJj9NYlp3f.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/TsSHbyx08oOyl3xq4hpj7doxpiv.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/OxpiblmgRoYB9VxUWDVjzUBopxf.png" src-width="3578" src-height="1798" align="center"/>

