---
title: 2025-06-23 Release Notes
slug: LwRrwjWNhidkSikTExscfYMOnab
sidebar_position: 9
version: stable
---


# Update Log — June 23, 2025

# 2025-06-23 Release Notes

# 🎉 New Features

- Added over-the-counter (OTC) trading as a business type for backend order supplementation
    <img src="/assets/IMwwbymjGobquxxFB9kjh465pJd.png" src-width="3020" src-height="1258" align="center"/>
    - Supports independent configuration of fee rules for over-the-counter (OTC) trading
    - Supports not configuring calendars for OTC markets, among other related settings
    - Path 1: Clearing Management - Contract Management
    - Path 2: Business Parameter Settings - Market Management - Market Rules
    - Path 3: Business Parameter Settings - Billing Management. After the Hong Kong dual-counter deployment goes live, supports exporting instructions by the primary counter's code.

- Hong Kong dual-counter compatibility
    - After the Hong Kong dual-counter deployment goes live, supports exporting instructions by the primary counter's code; supports consolidating reconciliations by the primary counter's code

- Financing interest adjustment — support for modifying multiple days simultaneously
    <img src="/assets/JB0vbongkoniJAx7YEVjOAxNpzh.png" src-width="3020" src-height="1266" align="center"/>
    - Financing interest adjustment supports modifying multiple days at once
    - Path: Clearing Management - Financing Management

# 🪀 Improvements and Fixes

- Manual adjustment: added client notification feature
    <img src="/assets/JGicbSZ1FoGJ02xCXXGjDGBjp9f.png" src-width="3266" src-height="1738" align="center"/>
    - Both single and batch manual adjustments now include a client notification option; if "Notify Client" is selected during adjustment, a message will be automatically sent upon successful completion.
    - The notification option is optional and is disabled by default. For batch additions, please complete the fields in accordance with the Help Center instructions.
    - Path: WBO - Asset Accounts - Adjustments - Manual Adjustment

- Inter-account transfer: added custodian sub-account
    <img src="/assets/L34Gb8J8dowZAcx7LltjcK6fpyg.png" src-width="3228" src-height="1750" align="center"/>
    - Transfers between accounts support specifying the outgoing custodian sub-account; the recipient's custodian sub-account information defaults to match that of the sender.
    - Path: WBO - Asset Accounts - Asset Allocation - Inter-Account Transfer

- Deposit records optimization
    <img src="/assets/EunabY1LJoGNJ6xKulEjsmSXpWc.png" src-width="3278" src-height="1054" align="center"/>
    - To provide a more intuitive display, scattered information such as 'Company Bank Account', 'Client', 'Remitting Bank', and 'Deposit Invoice' has been aggregated and displayed together.
    - Path: WBO - Funds Management - Deposits - Deposit Records

- eDDA authorization records: function upgrades and work order configuration instructions
    <img src="/assets/Ds1lb3ITJovhlrxCVFbjgFsnpQd.png" src-width="3264" src-height="1148" align="center"/>
    - Path: WBO - Funds Management - Deposit and Withdrawal Methods - eDDA

- Fund orders: added rejection operation
    <img src="/assets/F8EBbquzroDSILxbrV2jM3aLplh.png" src-width="2858" src-height="1878" align="center"/>
    - Added a rejection operation for customer orders and fund clearing for both public and private funds.
    - Path:
        - Fund Management - Public Funds - Customer Orders / Fund Clearing
        - Fund Management - Private Funds - Customer Orders / Fund Clearing

- Optimized clearing reversal experience
    <img src="/assets/DQbnb6ZG3omtRcxN2BzjJfAYpAb.png" src-width="3022" src-height="1256" align="center"/>
    - Added reminders and improved copy
    - Path: Clearing Management - Clearing Reversal

