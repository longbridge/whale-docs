---
title: 2025-02-24 Release Notes
slug: ROo6w2mS9iLCFwkU0vmckxQBnUe
sidebar_position: 12
---


# 2025-02-24 Update Log

# 2025-02-24 Release Notes

# 🎉 New Features

- Added Client Long-Stock Margin Change Records
    <img src="/assets/CUATbIFmvoeX4CxTDKbjrN7ipQg.png" src-width="3230" src-height="1024" align="center"/>
    - Path: Risk Management - Margin - Client Margin - Long Stock
    - Permission: Client Margin Change Record Query `credit_management.client_margin_change_query`

# 🪀 Improvements and Fixes

- Backend interaction optimizations for Bank Region List and Card-Associated Bank
    <img src="/assets/Qjrab4yI9oux84xgqK0jZf8wp5E.png" src-width="3272" src-height="716" align="center"/>
    <img src="/assets/FylAbDiZEoXIxbxeXadjwzBqp45.png" src-width="3308" src-height="726" align="center"/>
    - Path 1: Securities Backend - Fund Management - App Management - Bank Region List
    - Path 2: Securities Backend - Fund Management - App Management - Card-Associated Bank

- Fund Type Multilingual Enhancements
    <img src="/assets/CEBab7UI2oLTGyx3APpja2ADpJd.png" src-width="3256" src-height="674" align="center"/>
    - Fund types now support multilingual display, and multilingual configuration is available during both [Create] and [Edit] operations
    - Path: Securities Backend - Business Parameter Settings - Accounting Parameters - Fund Types

- Deposit Matching "Withdrawal Refund" Operation: Added Permission Control
    <img src="/assets/OAH7bml6qoKoEfxgHO7jf8iUp7P.png" src-width="3286" src-height="662" align="center"/>
    - Added permission control for the Deposit Matching "Withdrawal Refund" operation
    - Path: Securities Backend - Fund Management - Deposits - Deposit Matching
    - Permission: Withdrawal Refund Operation `atm.withdrawal_refund_operation`

- Optimized Currency Exchange Settlement Note for Automatic Repayments
    <img src="/assets/LclLbiR8WoQbO9xglryjgaxfp5I.png" src-width="3280" src-height="1032" align="center"/>
    - Added the wording "Automatic Repayment" to the currency exchange settlement note for automatic repayments
    - Path: Securities Backend - Fund Management - Currency Exchange - Client Forex

- Bank Card Error Message Improvements
    <img src="/assets/JRo1b7CTqoAOsvxfBBCjkdw7pAc.png" src-width="1496" src-height="1818" align="center"/>
    - Optimized the error message displayed when binding a bank card that belongs to the preset bank list but is selected under a different region
    - Path: Securities Backend - Fund Management - Client Bank Cards

- Deposit Witness Backend Process Optimization
    <img src="/assets/HDOTbhq7xonpyExNctaj9mjnpre.png" src-width="3290" src-height="1696" align="center"/>
    - For client bank cards opened via transfer authentication, the backend deposit witness process has been updated to allow setting the deposit witness status to "Witnessed" without associating a deposit
    - Path: Securities Backend - Fund Management - Client Bank Cards

- Accounting Middle Platform: New Report Export — Kingdee
    <img src="/assets/JRiHb6aKuov8J1xbCBEj0y9SpVb.png" src-width="3294" src-height="1746" align="center"/>
    - Added report export for Kingdee in the Accounting Middle Platform
    - The report export page has been simplified
    - Path: Securities Backend - Accounting Middle Platform - Accounting Entries

- Merge Entries Now Support Custom Conversion Currencies
    <img src="/assets/NblSbm5DVoG0DjxnnPIj0tFvpeh.png" src-width="3282" src-height="894" align="center"/>
    - Merging entries now supports custom conversion currencies
    - Path: Securities Backend - Business Parameter Settings - Accounting Parameters - Merge Rules

- Added Accounting Data Source — Settlement Contracts
    <img src="/assets/OqzHbJqcPob5jsxYA3Aj74nSprd.png" src-width="1280" src-height="379" align="center"/>
    - Added a new accounting data source: Settlement Contracts
    - Path: Securities Backend - Accounting Middle Platform - Entry Data Sources - Settlement Contracts
    - Permissions:
        - Settlement Contract Query `book.book_contract_bills_query`
        - Settlement Contract Operation `book.book_contract_bills_operation`

- Blacklist: Added Enable / Disable Functionality
    <img src="/assets/LbudbKwgioq74nx8re7j5kM0peg.png" src-width="3262" src-height="992" align="center"/>
    - The blacklist now includes enable/disable functionality in addition to delete; both enable and disable operations support remarks
    - Path: Risk Management - List Management - Blacklist

