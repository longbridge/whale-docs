---
title: 2024-01-22 Release Notes
slug: GBUBwF3xJiv1M4kSe03cYPgjnyr
sidebar_position: 47
---


# 2024-01-22 Release Notes

# 🎉 New Features

- Added the ability to hide unused file types in file import
    - Path: Clearing Management - File Handling - Import Configuration
    - File types are ordered by descending import count by default

<img src="/assets/Mm1xbiUQZohOuAxpFnOjNrs4pAd.png" src-width="3496" src-height="1734" align="center"/>

<img src="/assets/Wcw4b7zjkoiKxnxZm4Nj9FAgppc.png" src-width="3496" src-height="1734" align="center"/>

- Integrated typhoon-day processing with work orders and optimized interactions
    - Path: Clearing Management - Typhoon Day Processing
    - If the work order approval workflow is not configured, approval defaults to approved
    - Work order unique identifier: clearing.typhoon_date.exec

<img src="/assets/Lq63bIs1do3YwPxKrQzjAXuipwf.png" src-width="3496" src-height="1734" align="center"/>

- Integrated clearing reversal with work orders
    - Path: Clearing Management - Clearing Reversal
    - If the work order approval workflow is not configured, approval defaults to approved
    - Work order unique identifier: clearing.re_clearing.exec

<img src="/assets/SnxKb2IEZonVCixzDvdjYsk3pUc.png" src-width="3496" src-height="1734" align="center"/>

- Added early completion instruction collection for voluntary corporate actions
    - Path: Corporate Actions - Details - Early Completion Instruction Collection
    - Operable when the instruction collection status is "Collecting Instructions"
    - For corporate actions with offline exercise, messages can be suppressed when submitting instruction collection (leave unchecked)

<img src="/assets/FKRJbknqrowxoAxZQWZjvxW1pzb.png" src-width="3496" src-height="1734" align="center"/>

<img src="/assets/Ht4GbV1qBo0g75xBzSnjOSaLpkc.png" src-width="3496" src-height="1734" align="center"/>

- Modify customer login email verification status
    - Supports single and batch modification of customer login email verification status in the backend
    - Path: CRM - Account Management - Work Order Center - Modify Customer Data

<img src="/assets/QLpKb3a3VohlSNxfjoujru1LpEA.png" src-width="2898" src-height="1086" align="center"/>

# 🪀 Improvements and Fixes

- Business code modification & trading limit settings integrated with work order approval
    - Trading Limit [Set] is integrated with work order approval. Approval flow: BSS - Risk Management - Client Trading Limit - Set
Path: Risk Management - Credit Limit - Trading Limit
    - Business code modification is integrated with work order approval. Approval flow: BSS - Asset Account - Business Code - Business Code Query - Edit Business Code
Path: Asset Account - Business Code - Business Code Query
    - The approval scenarios involved in this release default to backend super administrator approval. To change the approval workflow, please modify the corresponding approval flow configuration at: Global Settings - Identity Management - Approval Workflow Configuration

<img src="/assets/Q3XmbgmgyolLFPxG61ajAR8Cpqc.png" src-width="3254" src-height="1154" align="center"/>

- Hong Kong IPO configuration streamlined; overall structure and interactions optimized

<img src="/assets/KBZIbymhpoONZJxAZ2tjGMD0pbh.png" src-width="1280" src-height="770" align="center"/>

- Credit Group now supports exporting all group information and accounts within the group

<img src="/assets/YCNab0b7FoRhBoxZfjSj7HNcp0b.png" src-width="3214" src-height="542" align="center"/>

- Settlement statement query supports custom list configuration

<img src="/assets/QbFRbVtBmoe9NQxqebtjzWuipHh.png" src-width="3220" src-height="554" align="center"/>

- Added notification subscriptions for margin call and adjustment scenarios
    - Added a Margin Call notification subscription feature to notify internal personnel by email when a client triggers a margin call
    - Added an adjustment-failure notification subscription feature to notify internal personnel by email when an adjustment fails

- Risk report menus removed
    - Affected menus:
        - Risk Management - Margin - Margin Risk Index
        - Risk Management - Risk Reports
    - Affected reports:
        - Margin Risk Index RDR035 - Margin Risk Index
        - Client Position Details RDR028 - Client Position Details
        - Stock Group Monitoring RDR036 - Stock Group Monitoring
        - Client Financing Monitoring RDR037 - Client Financing Monitoring

- Optimization of client follow-up progress entry logic

    <img src="/assets/KN8RbpuCaoxOvPx3es3j53aUp0c.png" src-width="2434" src-height="1378" align="center"/>
    - Path: CRM - KYC - Account Opening List
    - Supports editing the "Client Follow-up Status" field in all review states to maintain client follow-up progress

- Redesign of the customer details page in the account list

    <img src="/assets/H7AsbMSwUobadPxaV5vjq75fpEd.png" src-width="2538" src-height="736" align="center"/>
    

    <img src="/assets/VIlzbjTxMowXEXxgWjIjBp3Xpic.png" src-width="2602" src-height="1154" align="center"/>
    - Path: CRM - Account Management - Account List - [Details]
    - On the account list details entry page, clicking the "Details" button now displays a customer details sidebar that presents more account information.

