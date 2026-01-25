---
title: 2024-12-23 Release Notes
slug: KMI9w4Vw1id4n8kbkmscGlTVnMf
sidebar_position: 16
---


# Release Notes — December 23, 2024

# 2024-12-23 Release Notes

# 🎉 New Features

- Added Arrival Time and Estimated Fee Configuration
    <img src="/assets/UjCWb13yEov091xfvqrjKenepVc.png" src-width="3310" src-height="760" align="center"/>
    <img src="/assets/U8E5bAXI8ogpPcxvuknjO81mpXb.png" src-width="3308" src-height="972" align="center"/>
    <img src="/assets/CQxUbVc9AoGUEax82wfjrK1xp5f.png" src-width="1386" src-height="1430" align="center"/>
    - For the "arrival time" and "estimated fees" prompts shown to customers when submitting withdrawal requests in the App, backend configuration can differentiate settings based on the customer's bank card, submission time, currency, and withdrawal range.
    - Path: Securities Backend - Business Parameter Settings - Withdrawal Rules - Withdrawal Parameters
    - Permission 1: withdrawalparameter.withdrawal_parameter_query — Withdrawal Parameters Query
    - Permission 2: withdrawalparameter.withdrawal_parameter_management — Withdrawal Parameters Management

- Margin Call Snapshot Query
    <img src="/assets/HLK3bnWZMoweQZxtEB5jkUWipwf.png" src-width="3314" src-height="1558" align="center"/>
    - Added a snapshot query function that allows querying outstanding debt/exchangeable amounts as well as cash/balance-through data at the snapshot time.
    - Path: Risk Control Management - Credit Limit - Margin Call - Snapshot
    - Permission: Margin Call Snapshot Query: margin_call.risk_debt_snapshot

- Credit Coefficient Rule Configuration
    <img src="/assets/MVApbtH6Loi9x3xxWR3j0EPMpMd.png" src-width="3352" src-height="1622" align="center"/>
    - Added the ability to set differentiated credit coefficients based on the customer's net asset level; if rules are configured, the system will prioritize the coefficient that satisfies the rule; otherwise, the default setting is used.
    - Note:
        1. Rule configuration is optional and should be set according to actual business needs.
        2. If a customer's net asset level satisfies multiple rule conditions, the system will by default apply the first matched rule.
    - Path: Business Parameter Settings - Risk Control - Credit Customer Parameters

# 🪀 Improvements & Fixes

- Optimized deposit handling flow after account verification method change
    <img src="/assets/XtGybnDyboRyWLxX7pMjGqAXpAg.png" src-width="3248" src-height="816" align="center"/>
    <img src="/assets/SB1cbkdo4ohgHNxPulnjtDlhpEf.png" src-width="3588" src-height="1236" align="center"/>
    <img src="/assets/G0E9b1UMiodZ5cxaSsFjd6TQpje.png" src-width="3258" src-height="862" align="center"/>
    <img src="/assets/MAbebvkGIoYeaBxCv3ljp8n4pxe.png" src-width="3592" src-height="1280" align="center"/>
    - If the account verification method changes and the customer's deposit request is unassociated yet can be matched to a corresponding securities account, the customer may cancel the deposit in the App after account opening succeeds.
    - If the account verification method changes and the customer's deposit request is unassociated and cannot be mapped to a corresponding securities account, the backend will generate an alert message; the deposit can be canceled in the backend based on the alert information.
    - Path 1: Securities Backend - Funds Management - Deposits - Deposit Requests
    - If the account verification method changes and the customer's deposit request has already been matched to a credited account and can be associated with a corresponding securities account, upon successful account opening the system will automatically update the top-up status from "Account Opening Deposit Processing" to "Top-up Successful."
    - If the account verification method changes and the customer's deposit request has been matched to a credited account but cannot be mapped to a corresponding securities account, the backend will issue an alert message; the deposit can be rejected in the backend based on the alert information.
    - Path 2: Securities Backend - Funds Management - Deposits - Account Opening Deposits

- Support for multiple receiving banks for deposits
    <img src="/assets/KXZubbBbLoggFxxUxdMjn61VpQf.png" src-width="3790" src-height="846" align="center"/>
    - After the customer selects the bank card and deposit currency, they may switch the receiving bank independently; the backend supports configuring multiple incoming banks.
    - Path: Securities Backend - Funds Management - App Management - Deposit Parameters

- Foreign Exchange Strategy Optimization
    <img src="/assets/ETfUbQUasodWWZxMiOWjT3hwpPf.png" src-width="2862" src-height="1220" align="center"/>
    <img src="/assets/Jq7VbbwuAo2bK6xmw4vj3QF2pzd.png" src-width="906" src-height="1332" align="center"/>
    <img src="/assets/LvB3bpyqhoY7cnxuZqfjwcNlpWg.png" src-width="2484" src-height="1332" align="center"/>
    - Newly integrated counter companies will have a default exchange strategy added during initialization.
    - If an exchange strategy selects "Service Strategy = Pool Exchange," it is possible to configure whether the exchange pool performs interception.
        - No Interception: After a customer selects pool exchange, they may continue to submit exchange requests regardless of remaining quota sufficiency; upon successful exchange, the exchange quota will be adjusted normally.
        - Interception: After a customer selects pool exchange, the system will check the remaining quota; this follows the current online logic.
    - The "Create" and "Edit" operations now include explanations for the "Exchange Type" and "Service Strategy" fields.
    - Exchange strategies now support 7×24 service period configuration.
    - The currency pairs for exchange strategies support full configuration; the complete currency set is sourced from Securities Backend - Business Parameter Settings - Exchange - Exchange Strategy.
    - The "Exchange Type" field in the "Create" operation supports multiple selections.
    - Path: Securities Backend - Business Parameter Settings - Exchange - Exchange Strategy

- Integration of remarks entered during customer bank card review with remark templates
    <img src="/assets/X8RNbBJmJoWb6xx0ECUjj46CpTf.png" src-width="2850" src-height="1214" align="center"/>
    <img src="/assets/M1wVbyT8BoPSuQx2pTCjFCuNpCg.png" src-width="2862" src-height="1220" align="center"/>
    - When reviewing bank cards in the backend, if "Reject" is selected, manually entered remarks can be chosen from predefined remark templates.
    - For entered remarks, it is possible to select whether they are visible to the customer. If "Visible" is selected, the remark will be included in the message pushed with the review result; if "Not Visible" is selected, the remark will be visible only in the backend and will not be shown to the customer in messages.
    - Path 1: Securities Backend - Funds Management - Customer Bank Cards
    - Predefined remarks for rejecting customer card binding can be customized in the backend.
    - Path 2: Securities Backend - Business Parameter Settings - Remark Templates

- Bank standard template now supports multiple file imports
    <img src="/assets/SOGyblm2Fo41m0xiqtKjZ6TYpVe.png" src-width="2850" src-height="680" align="center"/>
    <img src="/assets/Jn0cbhSNfoqCGoxxaSJjrv8Ppnd.png" src-width="2482" src-height="1338" align="center"/>
    - Building on the existing single-file import for the deposit bill bank standard template, multiple-file import is now supported.
    - Path: Securities Backend - Bank Statements - Deposit Statements

- Deposit request creation time defaults to the current week
    <img src="/assets/ZmWZbhPTZow9JdxEoPFjkLIVpW9.png" src-width="2276" src-height="890" align="center"/>
    - On the Deposit Request page, the creation time defaults to the current week but can be manually modified.
    - Path: Securities Backend - Funds Management - Deposits - Deposit Requests

- Added "Change" permission for deposit requests and optimized "View Remarks"
    <img src="/assets/SHdrbvrXjoJKiaxXJaSjFLcSpPh.png" src-width="3286" src-height="856" align="center"/>
    <img src="/assets/OotZbUV22oBuqyxB70tj2BfPpqb.png" src-width="3302" src-height="1232" align="center"/>
    - Added a "Change" permission for deposit requests; if this permission is not granted, the corresponding operation button will not be visible in the backend.
    - Adding remarks now supports attachment import.
    - Path: Securities Backend - Funds Management - Deposits - Deposit Requests
    - Permission: atm.deposit_request_change — Deposit Request Change

- Business code group update selection component
    <img src="/assets/QnYvbn2CgoLbXsxvmI0jomeyp4c.png" src-width="3326" src-height="1610" align="center"/>
    - Business code group update selection component
    - Path: Asset Accounts - Business Codes - Business Management

- Added permission operation records
    - historical operation records for permissions/roles.

