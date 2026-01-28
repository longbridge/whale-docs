---
title: 2024-08-12 Release Notes
slug: OrbwwvMG5ityKtkHqF2cL1rDnVh
sidebar_position: 7
---


# 2024-08-12 Release Notes

# 🎉 New Feature

None

# 🪀 Optimization and Bugfix

- Enhancements to Withdrawal Rules
    <img src="/assets/I8e7bQpNUo0YM4xeMOYjr2K8pZZ.png" src-width="3006" src-height="3238" align="center"/>
    - The setting for "Service Parameter -&gt; Risk Control -&gt; Balance Blocking Rules" has been relocated to "Service Parameter - Withdrawal Rules Management -&gt; Balance Blocking Rules".
    - The setting for "Service Settings -&gt; Risk Control -&gt; Withdrawal Rules" has been relocated to "Service Settings -&gt; Withdrawal Rules Management ", with the tab title updated to "Automatic Review Rules".
    - In the "Automatic Review Rules" tab, the "Withdrawal Card Type" field has been renamed to "Bank Region". Three new fields have also been added:
        - Bank Name
        - Bank Card First Withdrawal
        - Priority

- New "Batch Withdraw" feature under "Withdrawal Fund"
    - We have streamlined the "Batch Withdraw" operation under "Cash Management -&gt; Withdrawals -&gt; Withdrawal Fund" into one single "Batch Withdraw".
    - The template description is now available.
    - Import Template no longer requires "Withdrawal Fee" and "Receiving Bank Card Number"

（图中的出金申请“Withdrawal Fund”应该是Withdrawal Request或者Withdrawal Application吧，最起码也得是Withdraw Fund?)

<img src="/assets/EO97b71wXomhOexLzlhjDT3JpEd.png" src-width="2270" src-height="1208" align="center"/>

- Extended decimal precision for "Custom Exchange Rate"
    （图中大小写最好统一一下）
    <img src="/assets/Ljq3bsiJBoN95Fxq9ZfjBvFHpXb.png" src-width="2290" src-height="1234" align="center"/>
    - "Manual Exchange - Custom Exchange Rate" under "Cash Management -&gt; Currency Conversion -&gt; Exchange Order" now allows up to 8 decimal places.

- Real-time position query for asset adjustments
    <img src="/assets/L4pFbmuoMoMOVwxsI63jxOyrpMc.png" src-width="3272" src-height="1638" align="center"/>
    - Debit adjustments to securities (including stocks, funds, options, bonds, OTC assets, and virtual assets) now support querying real-time position reference values based on custodian and sub-position. (including stocks, funds, options, bonds, OTC assets, and virtual assets) adjustments for the "DEBIT" direction now support querying real-time position reference values based on the custodian and sub-position.
    - Path: "Account Assets" -&gt; "Adjustments" -&gt; "Adjustment"

- Introducing "MV of Collateral" in "Account Overview" (MV: Market Value)
    <img src="/assets/DRzcbOJvFoWPM1xwIHijFaHcpNf.png" src-width="3260" src-height="1740" align="center"/>
    - We have added a new "MV of Collateral" column to "Holding Details".
    - Path: "Account Assets" -&gt; "Account" -&gt; "Account Overview"

- Fuzzy matching in trade reconciliation
    <img src="/assets/LlBMb1pYtoHCWCxLcKKj0deopWf.png" src-width="3584" src-height="1696" align="center"/>
    - A second reconciliation can be performed for unmatched transactions in trade reconciliation. Reconciliation by individual stocks is also supported.
    - Path: "Service Parameter" -&gt; "Day-End Configuration" -&gt; "Clearing Parameter Configuration"

- Notifications via push and email will be sent to clients upon successful execution of SO and DS.
    <img src="/assets/IHv0bxqL9ohfCOxtCLdjhthKpQf.png" src-width="2280" src-height="828" align="center"/>

- Minimum transfer fee setting under "Fee Management"
    <img src="/assets/BY6ibo2VJoKj0FxKgLGjvd4YpDb.png" src-width="2874" src-height="1296" align="center"/>
    - Clients can now set the minimum transfer fee globally on the Fee Management page.

- Updates to CRM: Client list
    <img src="/assets/W4DbbjXiYoMa9VxYUsEji880pBc.png" src-width="2564" src-height="1158" align="center"/>
    - To provide a more comprehensive client profile, new fields have been added:
    - Base Level
    - Account Information
    - Account Agreements
    - Activity Region
    - Improved display, filtering and search interactions for quick access to basic client information, account agreements, assets, trades and holdings.
    - Path: "CRM" -&gt; "CRM" -&gt; "Clients List"

- Updates to CRM: My Dashboard
    <img src="/assets/Ko8Lbhvy2oUMu0xTKNujgMjgpjg.png" src-width="2809" src-height="1474" align="center"/>
    - Users are now more finely categorized by "Base Level" in the updated dashboard statistics tabs.
    - We have added more fields describing basic client information and operation items.
    - New team permissions allow viewing data for all clients within the team.
    - Path: "CRM" -&gt; "CRM" -&gt; "My Dashboard"

