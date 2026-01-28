---
title: 2025-10-11 Release Notes
slug: 2885bab0c2cc8037af7deec10162ad2a
sidebar_position: 34
version: lts
---


# 2025-10-11 Release Notes

# 🎉New Features

- Customer Bank Card Supplementary Deposit Name Function Description
    <img src="/assets/FPICbPThIozJzwx5P3djPEQ4pfd.png" src-width="2048" src-height="430" align="center"/>
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

<img src="/assets/JChBbuL7GoCQOyxPNXTjCqQbp9b.png" src-width="1280" src-height="425" align="center"/>

# 🪀 Optimization And Bugfix

- New Duplicate Prompt Function for Deposit Applications
    - New Function：The system will trigger a duplicate prompt for deposit applications that meet the following conditions:
    - Time Range：Applications submitted within 7 days
    - Key Information：Notification amount, currency, and customer securities account number are completely identical
    - Path：WBO - Cash Management - Deposits - Pending Requests

<img src="/assets/FUQcbrTQKo4kVuxI4OpjRKUtpEh.png" src-width="1280" src-height="529" align="center"/>

- Withdrawal Record Optimization
    <img src="/assets/NfUPbyWORo5oNqx4cAkjZeQ4pYe.png" src-width="1280" src-height="420" align="center"/>
    - Due to the complexity of withdrawal record fields, similar fields (including company bank account, customer information, receiving bank, remarks, amount, status, and time) have been merged for display to facilitate customer inquiries.
    - Path: WBO - Cash Management - Withdrawal - Withdrawal Records

- Credit FPS Rule Data Source Switching and Multi-language Support
    <img src="/assets/DeuublQ1soXSiVxY4ZqjSjNlpih.png" src-width="1280" src-height="687" align="center"/>
    - Note:
    - Path: WBO - Risk Control Compliance - Credit Limit - Financing Limit - Client FPS

- Support custom amount to complete currency exchange for customers:
    - For customers' currency exchange applications, operators can specify the amount in the backend for processing.
    - Path: WBO - Cash Management - Currency Conversion - Exchange Order

- Support Adjustment Business Type Management
    - If adjustments require adding or removing business types, you can manage them within the bizcode groups.
    - Path: WBO - Account Assets - Bizcode - Bizcode Group Management

- Interaction Optimization for [Batch Addition] in Customer Bank Cards / Securities Deposit
    - The batch addition function has a newly added secondary confirmation page: Only after clicking [Confirm] can the successfully parsed records be imported; meanwhile, a [Minimize Window] operation (supporting exit to the background) is added on the import page. If re-operation is needed, click the corresponding record in the transfer list at the top right corner to return to the original page.
    - Path 1: WBO - Cash Management - Bank Card Management
    - Path 2: WBO - Stock Management - Transfer In - Restricted Stock

- Rule for Linked Handling of Rejection After Account Opening & Fund Deposit Matching
    <img src="/assets/KUWfbibjWouJQoxHM46jhRUEpMb.png" src-width="4459" src-height="810" align="center"/>
    - In the account opening and fund deposit scenario, if the submitted fund deposit application has been matched, once the account opening request is rejected, the system will automatically reject the matched account opening fund deposit record; after rejection, the system will synchronously and automatically cancel the customer's fund deposit application.
    - Path: WBO - Payment Management - Fund Deposit - Fund Deposit During Account Opening

- Optimization of Automatic Carry-Forward of Previous Day's Exchange Rate
    <img src="/assets/Fc2eb6xsWoJvMIx0cRdjk4qppHe.png" src-width="2950" src-height="822" align="center"/>
    - For scenarios where the exchange rate type is 'Book Exchange Rate', the system has added a new process to automatically carry forward the previous day's exchange rate: if the exchange rates for various currencies have not been imported yet, the system will automatically copy the exchange rates of the corresponding currencies from the previous day to fill in the gaps.
    - Path: WBO - Cash Management -Currency Conversion - Reference Exchange Rate

- DA Daily and Monthly Statements are generated by default.
    <img src="/assets/ZTRYbdo9To8YEgxQM9ljBdFipzb.png" src-width="3008" src-height="1434" align="center"/>
    - Daily and monthly statements for DA accounts will be generated by default. Monthly statements support batch sending, while daily statements do not currently support batch sending
    - Path: Statement Management

