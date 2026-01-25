---
title: 2024-01-22 Release Notes
slug: GBUBwF3xJiv1M4kSe03cYPgjnyr
sidebar_position: 47
---


# 2024-01-22 Update Log

# 2024-01-22 Release Notes

# 🎉 New Features

- Added the ability to hide irrelevant file types in file imports
    - Path: Clearing Management - File Processing - Import Configuration
    - File types are ordered by default in descending order by import count

<img src="/assets/TelPbhYByoi2oqxpfEzjguq4ppd.png" src-width="3496" src-height="1734" align="center"/>

<img src="/assets/Y00KbsLZfo9zyKxy7vejMzNvpye.png" src-width="3496" src-height="1734" align="center"/>

- Integration of typhoon-day into work orders and interaction optimizations
    - Path: Clearing Management - Typhoon-Day Handling
    - If no work order approval workflow is configured, the work order defaults to approved
    - Work order unique identifier: clearing.typhoon_date.exec

<img src="/assets/Fb32bNf5noPX0AxFIGIjnMcQpjc.png" src-width="3496" src-height="1734" align="center"/>

- Integration of clearing reversal into work orders
    - Path: Clearing Management - Clearing Reversal
    - If no work order approval workflow is configured, the work order defaults to approved
    - Work order unique identifier: clearing.re_clearing.exec

<img src="/assets/Tm0ObArlco3ghhxWo4QjTZ86pJc.png" src-width="3496" src-height="1734" align="center"/>

- Voluntary corporate actions: added early completion of instruction collection
    - Path: Corporate Actions - Details - Complete Instruction Collection Early
    - Actionable when instruction collection status is "Collecting Instructions"
    - For corporate actions with offline exercise, messages can be suppressed (unchecked) when submitting instruction collection

<img src="/assets/XnkibcjLpoH6BCxr5w3jL7wcprf.png" src-width="3496" src-height="1734" align="center"/>

<img src="/assets/BZ9dbEAjtovNCSxvEUVjczc7pCe.png" src-width="3496" src-height="1734" align="center"/>

- Modify customer login email verification status
    - Support single/bulk modification of customer login email verification status in the backend
    - Path: CRM - Account Management - Work Order Center - Modify Customer Data

<img src="/assets/BLtJbQYQroHVEexXPlnjc5ZdpAd.png" src-width="2898" src-height="1086" align="center"/>

# 🪀 Improvements & Fixes

- Business code modifications & trading limit settings integrated with work order approval
    - Trading Limit [Settings] now integrate with work order approval. Approval flow: BSS - Risk Management - Customer Trading Limits - Settings
        Path: Risk Management - Credit Limit - Trading Limit
    - Business code modifications now integrate with work order approval. Approval flow: BSS - Asset Accounts - Business Codes - Business Code Query - Edit Business Code
        Path: Asset Accounts - Business Codes - Business Code Query
    - Approval scenarios involved in this release default to backend super administrator approval. To change the approval workflow, please modify the corresponding approval flow configuration. Configuration path: Global Settings - Identity Management - Approval Workflow Configuration

<img src="/assets/CvV6bdWvUoOGcTxKaQfjorZMpvg.png" src-width="3254" src-height="1154" align="center"/>

- Hong Kong IPO configuration streamlined; overall structure and interactions optimized

<img src="/assets/HxvDb87yjoSr2Ox5JnSjSd5Xpzh.png" src-width="1280" src-height="770" align="center"/>

- Credit groups now support exporting all group information and accounts within a group

<img src="/assets/H7tOb6FNhoPIC9xTMiTjMYGhpth.png" src-width="3214" src-height="542" align="center"/>

- Statement query now supports custom list settings

<img src="/assets/Ql5zb7jFkoA1Qgx71SZjCBoqpKe.png" src-width="3220" src-height="554" align="center"/>

- Added notification subscriptions for margin call and adjustment scenarios
    - Added Margin Call notification subscription: when a customer triggers a margin call, internal personnel can be notified via email
    - Added adjustment-failure notification subscription: when an adjustment fails, internal personnel can be notified via email

- Risk report menus retired
    - Affected menus:
        - Risk Management - Margin - Margin Risk Index
        - Risk Management - Risk Reports
    - Affected reports:
        - Margin Risk Index RDR035 - Margin Risk Index
        - Client Position Details RDR028 - Client Position Details
        - Stock Group Monitoring RDR036 - Stock Group Monitoring
        - Client Financing Monitoring RDR037 - Client Financing Monitoring

- Optimized logic for entering customer follow-up progress
    <img src="/assets/EsuUbGdlDoib6ixh2W7jX1Cypig.png" src-width="2434" src-height="1378" align="center"/>
    - Path: CRM - KYC - Account Opening List
    - Support customers to edit the 'Customer Follow-up Status' field in all review states to maintain follow-up progress

- Redesigned customer details page in the account list
    <img src="/assets/RYI9bY7a3o251jxUXUhjPk4Tpkc.png" src-width="2538" src-height="736" align="center"/>
    <img src="/assets/KeH8bQG85ofLGaxugT9jCvagpCh.png" src-width="2602" src-height="1154" align="center"/>
    - Path: CRM - Account Management - Account List - Details
    - On the details entry page of the account list, clicking the 'Details' button now displays a customer details sidebar that shows more account information

