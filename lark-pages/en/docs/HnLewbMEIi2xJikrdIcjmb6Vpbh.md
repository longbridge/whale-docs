---
title: 2024-08-24 Release Notes
slug: QFh6wCUDAijETMkQ9X5chUsAnod
sidebar_position: 0
---


# 2024-08-24 Release Notes

# 🎉 New Feature

None

# 🪀 Optimization and Bugfix

- Enhanced KYC Management for Joint Accounts
    <img src="/assets/MUBubMbVKoyh1Kx3q7xjwSTLpwf.png" src-width="1894" src-height="1086" align="center"/>
    - Path: "CRM" -&gt; "KYC" -&gt; "Account Opening Review" -&gt; "Account Details"
    - Users can now update more account details for joint accounts during the review process and after the account is opened.
        - Changes made during the review process will take effect immediately. For existing accounts, updates will become effective after ticket approval.
        - The following fields can now be updated independently for both primary and secondary account holders:
            - Nationality
            - Place of Issue
            - Full name
            - Last name (English)
            - First name (English)
            - ID No.
            - Country of Birth
            - Date of Birth
            - Gender
            - Highest Education Level
    - No new permissions ticket keys

- Enhanced Batch Update Capabilities in WBO
    <img src="/assets/NvnibuHlNoMDbKxXSiOjVLiQpmd.png" src-width="2608" src-height="918" align="center"/>
    Accounting Information 是会计信息而非账户信息吧，这个地方建议改为Account Information
    - Path: "CRM" -&gt; "KYC" -&gt; "Account Information" -&gt; "Batch Update"
    - Under the batch modification module, more fields have been added to support batch modifications. Once approved, the modification will take effect and the report will also add modification records simultaneously.
    - The Batch Update feature now supports more fields, enabling bulk updates. Once the changes are approved, they will be immediately applied, with all updates automatically recorded in the report.
    - Newly supported fields include:
        - Nationality
        - Country/Region of Birth
        - Date of Birth
        - Gender
    - No new permissions or ticket keys

