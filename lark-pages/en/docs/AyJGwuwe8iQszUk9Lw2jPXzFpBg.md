---
title: System Introduction
slug: UepcwAVqJiP0t6kjBxHcsoMWn5c
sidebar_position: 2
---


# System Overview

# System Introduction

# Overview

The asset accounts currently comprise two main components: the Asset Ledger and Basic Asset Management Capabilities.

Asset Ledger: records, in detail, the transaction history of asset changes across all client business scenarios. The ledger includes, but is not limited to, the following information:

```text
- Asset types: Cash, Stocks, Options, Bonds, Funds, OTC, Others
- Accounts: Business accounts, Settlement accounts, Transitional accounts
- Types of asset changes: Outflow, Inflow, Freeze, Unfreeze
- Business code: the unique code identifying the business scenario
- Changed asset amount / position quantity
```

The ledger’s bookkeeping capability ensures that after any asset change, transaction records across different accounts remain clear and accurate, safeguarding asset reconciliation between upstream and downstream business processes.

Basic Asset Management Capabilities: the asset module also provides foundational capabilities such as adjustments, asset freeze/unfreeze, and business-code management to facilitate more convenient asset administration.

Account Categories

Types of Asset Changes

## Asset Architecture

<img src="/assets/G1hsbXWbloB8YOxa7wJjYdeXptc.png" src-width="2438" src-height="1422" align="center"/>

# Operations Guide

## 1. Accounts

### 1.1 Asset Overview

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Asset Accounts &gt; Account &gt; Asset Overview</p>
</div>

Menu Function: Query the overall asset status of all clients, including cash and positions. Primarily used for company-level asset statistics.

Instructions:

The page query results appear as shown below:

<img src="/assets/IkvWb4uScoVlK4xAV3zjliz1pZg.png" src-width="3324" src-height="3386" align="center"/>

Page Notes

- The page displays the total assets of all clients under the current company.
- Supports filtering by client type, account type, and broker; currency selection for aggregated data is also supported.
- Modules:
    - Total Assets: shows asset composition by asset type and currency.
    - Ledgered Total Cash: displays settled and pending settlement cash details by currency.
    - Positions: displays, in separate tabs by position type, the settled and pending settlement quantities and market value details for each security.

### 1.2 Account Query

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Asset Accounts &gt; Account &gt; Account Query</p>
</div>

Menu Function: Support querying a client’s asset overview and related account details by various dimensions, including client profile, bank card information, fee details, deposit/withdrawal transactions, and position transfer flows.

Instructions:

1. Begin query: selecting the account dimension and entering the corresponding information returns the client’s basic information.

<img src="/assets/QmcmbfR38o3pSSxefT7jCODdpse.png" src-width="2570" src-height="988" align="center"/>

1. The account query page displays "Recently Viewed" for quick access.
2. Query results: a sidebar shows the query results and defaults to the Asset Overview page; you can switch pages to view client profile, bank card information, fee details, deposit/withdrawal flows, position transfer flows, etc. Sidebar content matches the quick query results.

<img src="/assets/P6I7bPnPkoPIz3xYQKSj0tl3p5e.png" src-width="3272" src-height="1750" align="center"/>

Quick Account Query Entry:

<img src="/assets/HJNPbZU8RoHZEUxqa2ljmfdkpvg.png" src-width="3318" src-height="1304" align="center"/>

1. After performing an account query, under Account Details &gt; Position Details you can operate on specific holdings using [Modify Cost]; you can also view cost snapshots and transaction history via [Details].

<img src="/assets/Vhjub7Ehpo5UxXxXy6PjT2m0pWd.png" src-width="3341" src-height="1720" align="center"/>

<img src="/assets/MOJjba5ULoqlArxKmHwjm1d1pTg.png" src-width="3236" src-height="1652" align="center"/>

<img src="/assets/AryRby5X5ovD6xxokUojaLsupoy.png" src-width="3238" src-height="1570" align="center"/>

Cost Basis Explanation

- Diluted Cost: the breakeven price for a stock over the holding period (excluding commissions and fees). If the user sells at this price, profit and loss are balanced. It calculates the cumulative profit and loss for each transaction during the holding period (including cash dividends), considering both purchases and sales. Calculation starts from the initial position; once fully closed, the cost is cleared and recalculated when a new position is opened.
- Average Purchase Cost: after the user buys a single stock, the cost basis equals the purchase amount (excluding commissions and fees) divided by the number of shares held. The cost during the holding period does not take into account gains or losses from subsequent sales, avoiding the effect that later sales would have on the purchase cost. Calculation starts from the initial position; once fully closed, the cost is cleared and recalculated when a new position is opened.

### 1.3 Account Balances

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Account &gt; Balance Query</p>
</div>

Menu Function: This menu supports querying client asset balances across different currencies and account types.

Instructions:

1. Select the asset type to query — Cash, Stocks, Funds, Options, Bonds, OTC & Others, Virtual Assets (the example below uses "Cash"); each page supports filtering by relevant dimensions.

<img src="/assets/NlqsbP6naogG7exuEQCjx7uSpmg.png" src-width="3292" src-height="784" align="center"/>

1. If the client has frozen funds, you can click the amount to open a secondary page showing freeze details; this entry is not available for other asset types.

<img src="/assets/Bfbpb2CTfoMj80xustQjbT1MpVS.png" src-width="3290" src-height="696" align="center"/>

Freeze Details Page:

<img src="/assets/SNJAb2eUNox5i5xdJGyjIwLlpzc.png" src-width="3240" src-height="406" align="center"/>

1. For certain cash-balance query scenarios, a convenient [Manual Withdrawal] action is available in the upper-right corner.

<img src="/assets/DpbpbEeFZo5yKxxoVLGj4Sgepyc.png" src-width="3280" src-height="686" align="center"/>

1. Additionally, the [Details] action on the list page provides quick navigation to the corresponding account transaction details.

<img src="/assets/OAHhbxF80oUscIxMd0MjrQjkpMy.png" src-width="3276" src-height="974" align="center"/>

Account Details Page:

<img src="/assets/G22EbtAzOobEXAx4LyAj2oNapce.png" src-width="3096" src-height="1502" align="center"/>

### 1.4 Account Transactions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Account &gt; Account Transactions</p>
</div>

Menu Function: Query transaction details for account asset flows and support multi-dimensional filtering by currency, business code, and other criteria.

Instructions:

1. Select the asset type to query — Cash, Stocks, Funds, Options, Bonds, OTC & Others, Virtual Assets (the example below uses "Cash"); each page supports filtering by relevant dimensions.

<img src="/assets/Wxe8bfGJxodbnBxLvkhju26Spqg.png" src-width="3274" src-height="882" align="center"/>

1. Operations for other asset types are the same as those for "Cash".

## 2. Freeze / Unfreeze

### 2.1 Asset Freeze

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Account &gt; Freeze/Unfreeze &gt; Asset Freeze</p>
</div>

Menu Function: This menu enables freezing of assets in a client’s cash, stock, or fund account. It supports single and batch freeze operations.

Instructions:

1. Select the asset type to enter the freeze operation; currently supported asset types are Cash, Stocks, and Funds (the example below uses "Cash"); each page supports filtering by relevant dimensions.

<img src="/assets/XAFqbI03eo5G9YxOgAZj5OG9pgc.png" src-width="3357" src-height="918" align="center"/>

1. Create a new freeze: click [New] in the upper-right corner to add an asset freeze request.

<img src="/assets/F1nCbBjrUougbkxXbsYjNhLapvg.png" src-width="3280" src-height="746" align="center"/>

1. Complete the freeze request information: after submission, the request enters the work order system for approval by the corresponding approver.
    1. Account Type: the account type for freezing defaults to supporting only SETTLEMENT accounts.
    2. Validity Period: optional; if specified, the record will be automatically unfrozen at expiration.

<img src="/assets/LBOJbuiwwojUVHx697tjsWMspTd.png" src-width="3389" src-height="1725" align="center"/>

1. Click [View] in the operations area on the right to check the work order approval progress and details.

<img src="/assets/NNX4bVJbvoArnQxdLvej4Rdep1e.png" src-width="3356" src-height="1062" align="center"/>

<img src="/assets/YHvsbpQmOoDlVGxeuTyjrQWQpzb.png" src-width="3262" src-height="1756" align="center"/>

1. Batch Freeze: you can also click [Batch New] in the upper-right area to apply freezes in bulk by uploading a file.

<img src="/assets/JwWvbTFnPoYCfTxp8ExjDyvEpTc.png" src-width="3274" src-height="854" align="center"/>

1. Batch Freeze Operation Page: download the template, fill it in as prompted, and upload; after upload, records still require work order approval like single freezes.

<img src="/assets/IZzObyLyKoqMcRxuTATjJ24npsg.png" src-width="3260" src-height="1300" align="center"/>

1. Operations for other asset types are the same as those for "Cash".

### 2.2 Asset Unfreeze

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Account &gt; Freeze/Unfreeze &gt; Asset Unfreeze</p>
</div>

Menu Function: This menu enables unfreezing of a client’s cash, stock, or fund assets.

Instructions:

1. The asset unfreeze page allows selection of different asset types to enter unfreeze operations; each page supports filtering by relevant dimensions.

<img src="/assets/ZTTGbSIUvo3oLoxfScfjmyAepGd.png" src-width="3339" src-height="932" align="center"/>

1. If a freeze was set with an expiry time, the system will automatically unfreeze the record at expiration; before the expiry date, manual unfreeze can be performed via the page (the example below uses "Cash").

<img src="/assets/Uy1ubfRR4oovZ6xfUUzjuKKCppg.png" src-width="3276" src-height="770" align="center"/>

1. Manual unfreeze requires approval. You can check approval progress via [View] in the operations column; once approved, the system executes the unfreeze. The unfreeze result displays the final execution status.

<img src="/assets/JusdbPUHYoAyCIxS0j6j3W4QpMe.png" src-width="3272" src-height="1070" align="center"/>

<img src="/assets/OIvWbto3Cofg8qxJ3Pqj4v6Kped.png" src-width="3114" src-height="1612" align="center"/>

## 3. Adjustments

### 3.1 Manual Adjustment

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Adjustments &gt; Manual Adjustment</p>
</div>

Menu Function: Primarily intended for back-office staff to correct accounting errors in exceptional scenarios by manually adjusting client settlement account assets.

Instructions:

1. Manual Adjustment main page: displays tabs for different adjustment types (Cash, Stocks, Funds, Bonds, OTC & Others, Virtual Assets); to perform an adjustment, enter the corresponding tab for the asset type.

<img src="/assets/JkyGbbCgToNmn1xcWAsjVY6Ip6e.png" src-width="3342" src-height="1152" align="center"/>

1. Create a new manual adjustment: click [New] to open the add-adjustment page.

<img src="/assets/Flijb1fLpoVZz1x5MJKjpcE3pSf.png" src-width="3220" src-height="958" align="center"/>

1. Fill in adjustment information:
    1. Business Category: i.e., Business Code; select the business scenario associated with the adjustment transaction.
    2. Company Bank Card & Customer Bank Card: optional; if the adjustment involves deposits/withdrawals, include relevant bank card information to assist record keeping.
    3. Adjustment Tag: optional; tags such as Third Party and Check are for marking special adjustment scenarios.
    4. Business Time: optional; specifies the client-visible transaction time. If not set, defaults to the actual adjustment completion time.
    5. Accounting Date: optional; specifies the settlement date to which the transaction belongs. If not set, defaults to the accounting date corresponding to the actual adjustment completion. (Note: adjustments require work order approval and there may be a time gap between application and completion. Unless you have a specific accounting date requirement, do not select an accounting date to avoid failures caused by cross-day approvals.)
    6. Remarks: remarks shown to the client will appear in client-visible transaction records (e.g., App, statements); internal remarks are for internal reference only.

<img src="/assets/JQ9Nbg2zBoikWUxhTmcjSOGTpXb.png" src-width="3294" src-height="1640" align="center"/>

Create Cash Adjustment

Tips:

- After selecting a client, you can click the client account to view current asset status to aid the adjustment decision.

<img src="/assets/Tx0ab1qqeocjOgxNfPcjJOXkpkf.png" src-width="3274" src-height="1634" align="center"/>

<img src="/assets/LRC8b1l6AoVAifxZDM2j0ahCp7g.png" src-width="3368" src-height="1737" align="center"/>

- Manual adjustments are intended for error correction and do not restrict adjustments that result in negative balances. Please exercise caution and adjust based on the client’s actual assets.

1. For securities-type adjustments (Stocks, Funds, Bonds, OTC & Others, Virtual Assets), the required information differs from cash adjustments (the example below uses "Stock" adjustment):
    1. Custodian & Sub-Account: optional; used only when specifying the position for the adjustment; otherwise the default clearing position will apply.
    2. Quantity: required; divided into Street, Nominee, and Own according to the business scenario. Nominee is exempt from transfer fees; if no special requirement, default to Street. Total = Street + Nominee + Own.
    3. Cost & Currency: optional; only fill in when fixing the cost explicitly. Otherwise, the system will default to the market price at the time the adjustment is created.

<img src="/assets/JvFnbKZF2oPbzNxuygjjkGxyp9d.png" src-width="3286" src-height="1658" align="center"/>

1. Fill in adjustment information according to actual business needs. If concerned about errors, you may [Save] first; you can later [Edit] or [Delete] if necessary. When confirmed, click [Submit].

<img src="/assets/IeTCbvl0PodsOKxVBMrjokrppOf.png" src-width="3284" src-height="866" align="center"/>

1. Submitted adjustments require work order approval. Use [Details] in the list operations to view approval progress.

<img src="/assets/M2ORbemLAoD01CxJd5ejwzf4ppH.png" src-width="3272" src-height="866" align="center"/>

1. After approval, you can view the "Adjustment Results" in the list. A completed adjustment indicates success. If an error is discovered after a successful adjustment, you can [Revoke Adjustment]; revoking generates a reversing transaction to offset the current adjustment. If the day’s clearing has not yet occurred, silent revocation (client cannot see the adjustment transaction) may be supported. See the revocation dialog for details.

<img src="/assets/BmPfbjNDxoqI3qx6pOAjdLwJpxh.png" src-width="3276" src-height="978" align="center"/>

<img src="/assets/S2aYbelLBoW6QHxXlbcjtmnkpBc.png" src-width="3282" src-height="1370" align="center"/>

Tips:

- To monitor adjustment failures, subscribe to "Adjustment Notifications" under Subscription Management.

<img src="/assets/YC9tbmK0joZuOkxgVhTjLluypKd.png" src-width="2806" src-height="1026" align="center"/>

1. After revocation completes, the adjustment record status updates to "Revoked"; both the client-visible remark and internal remark will show the original and revocation remarks.

<img src="/assets/AZ2lbTX16oi9onxXDx1jNZY0pdg.png" src-width="2336" src-height="1084" align="center"/>

1. Adjustments also support batch operations via the entry in the upper-right corner of the list. The batch-add page allows downloading a template and filling it per the "Template Field Description." After uploading, the system parses the file and returns error reasons for any incorrect entries for correction and resubmission; you may also choose to ignore errors and submit, in which case only successfully parsed records will be processed. Batch adjustments still require approval, which can be completed within a single application.

<img src="/assets/Ysb5bVmm8ovuJ8xrbJbjbo7lpnf.png" src-width="3210" src-height="802" align="center"/>

<img src="/assets/RpIrbx0jxoJZOkxAsUmjydjlpGe.png" src-width="2394" src-height="1282" align="center"/>

### 3.2 Temporary Adjustment

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Adjustments &gt; Temporary Adjustment</p>
</div>

Common use cases for temporary adjustments:

- When a client encounters special circumstances, a trader may temporarily increase or decrease client assets (Cash/Options/Stocks) to allow the client to place orders; the temporary funds/positions are later invalidated.
- In special cases (e.g., corporate actions requiring manual position adjustments), back-office staff may manually adjust Cash/Stocks/Options to ensure continued business operations.

Instructions:

1. In Temporary Adjustment, select the corresponding adjustment type tab (Cash/Stocks/Options) and click [Add] to open the new temporary adjustment page.

<img src="/assets/DbalbXl3KoYk0IxAHS2jYLrkpme.png" src-width="3292" src-height="1330" align="center"/>

1. Fill in the adjustment information page (example: adding a temporary cash adjustment):
    1. Business type and adjustment type are bound; simply select the business type. Temporary cash increases default to inflow; temporary cash decreases default to outflow.
    2. Temporary adjustments require a validity period; after expiry, the temporary adjustment will automatically become invalid.

<img src="/assets/TGnIbY8fXoc8Vrxs0JIjMpODpDf.png" src-width="3412" src-height="1745" align="center"/>

Create Temporary Cash Adjustment

1. After completing the adjustment information, click [Submit for Review] to initiate work order approval. The adjustment record will show a status of "Initialized."
    1. Click [Details] to view work order approval progress.

<img src="/assets/ZRV0bz86qomUOMxe7oyjMZG2pBg.png" src-width="3288" src-height="618" align="center"/>

1. Once the adjustment is approved and the system executes the adjustment, the status will show "Adjusted." During the validity period, you can manually trigger [Invalidate]; otherwise, the system will automatically invalidate the adjustment on the expiry date.

<img src="/assets/LemTbNXnvoY6D6xkLwejYmeNpQd.png" src-width="3288" src-height="1194" align="center"/>

## 4. Asset Allocation

### 4.1 Inter-Account Transfer

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Asset Allocation &gt; Inter-Account Transfer</p>
</div>

Menu Function: In parent-child account scenarios, if an account lacks funds, a transfer can be made from another related account to enable the account to complete transactions.

Note: Only supports transfers between main accounts of the same client and two-way transfers within the same main–subaccount relationship.

Instructions:

1. The list page includes both back-office operation flows and client-initiated transfer flows.
2. Click [New] in the upper-right corner of the list page to enter Inter-Account Transfer, or click [Batch New] to perform batch transfers.

<img src="/assets/VB0abplC6oOazaxUPt4j9mygp1c.png" src-width="3312" src-height="1462" align="center"/>

1. Inter-Account Transfer page:

<img src="/assets/It0Ebt52AoSytCxLgIujZXftpTb.png" src-width="3326" src-height="1650" align="center"/>

- After confirming the transferor and selecting the transfer type, the system automatically matches and allows selection of transferees:
    - Transfer to a main account: if the transferee is a main account, you may transfer to other main accounts of the same client; if the transferee is a subaccount, you may transfer to its corresponding main account.
    - Transfer to a subaccount: if the transferee is a main account, you may transfer to its subaccounts.

- Fill in transfer information as required by the business. If the transfer amount exceeds the available transferable amount, the page will display a warning but will not strictly prevent submission.

<img src="/assets/UrXhbbIgFopEWZxYYHgjOEKXpoh.png" src-width="3272" src-height="1772" align="center"/>

Tips: Because transfer amounts are not strictly validated for over-limit conditions, confirm client assets before performing batch transfers.

1. Confirm and submit for approval. Approval progress can be viewed via the list operations.

<img src="/assets/NaqKbXfIuoFpHux7R8Tj26m8pwg.png" src-width="3144" src-height="754" align="center"/>

### 4.2 Inter-Account Position Transfer

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Asset Allocation &gt; Inter-Account Position Transfer</p>
</div>

Menu Function: When a client has multiple accounts and one account lacks sufficient shares, shares can be transferred from another account to enable the account to complete transactions.

Note: Supports two-way position transfers between main accounts, between subaccounts, and between main and subaccounts for the same client. (OB enterprise clients only support transfers between subaccounts under the same client.)

Instructions:

1. The list page includes both back-office operation flows and client-initiated position-transfer flows.
2. Click [New] in the upper-right corner of the list page to enter Inter-Account Position Transfer, or click [Batch New] to perform batch transfers.

<img src="/assets/Jo1obaYOkogtSdxW2b0j0ddmpGh.png" src-width="3306" src-height="1470" align="center"/>

1. Inter-Account Position Transfer page:

<img src="/assets/VKWSbTg7eoztGbx0O1CjDHMbpQh.png" src-width="3312" src-height="1630" align="center"/>

- After confirming the transferor and selecting the transfer type, the system automatically matches and allows selection of transferees:
    - Transfer to a main account: if the transferee is a subaccount, you may transfer to its corresponding main account.
    - Transfer to a subaccount: if the transferee is a main account (non-OB clients), you may transfer to its subaccounts; if the transferee is a subaccount, you may transfer to other subaccounts of the same client.

- Fill in transfer information as required by the business. If the transfer quantity exceeds the available transferable quantity, the page will display a warning but will not strictly prevent submission.

<img src="/assets/PljobY9paoTSIexF85vjWBVwpFd.png" src-width="3340" src-height="1828" align="center"/>

Tips: Because transfer quantities are not strictly validated for over-limit conditions, confirm client holdings before performing batch transfers.

1. Confirm and submit for approval. Approval progress can be viewed via the list operations.

<img src="/assets/QUSVbSyoCotf6DxJgcljft3VpEc.png" src-width="3130" src-height="618" align="center"/>

## 5. Business Codes

### 5.1 Business Code Query

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Business Codes &gt; Business Code Query</p>
</div>

Menu Function: This menu supports querying all Business Codes and allows modification of the Business Code name displayed to clients as well as whether transactions associated with a Business Code are visible to clients.

Each transaction corresponds to a Business Code; the Business Code uniquely identifies the business scenario.

Instructions:

1. Enter the menu and use the list to query all Business Codes; search by code or name is supported.

<img src="/assets/EqYobFoCsoExMPxQrLlj9xYUpm6.png" src-width="3202" src-height="792" align="center"/>

Page Field Descriptions

- Asset Type: the asset type processed by the transaction, such as Cash or Stocks.
- Client Display: indicates whether the transaction is shown in the client App and statements.

1. If you need to modify the displayed Business Code name or change its visibility, use the Edit action.

<img src="/assets/VdHIbvKYQonJkFx8Hw3jao7fpZd.png" src-width="3280" src-height="1760" align="center"/>

### 5.2 Business Management

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu Path: Asset Accounts &gt; Business Codes &gt; Business Management</p>
</div>

Menu Function: This menu groups Business Codes. Its primary application is for categorizing Business Codes when selecting Business Category during adjustments; you can change which Business Codes are displayed within an adjustment group to control whether adjustments display that Business Code.

Except for adjustment groups, other groups are primarily used by the system across business scenarios and are view-only; editing is not required.

Instructions:

1. Enter the menu to view all Business Code groups.

<img src="/assets/NdpgbKMbQoKeBgxlqhsjn4L2pjg.png" src-width="3216" src-height="626" align="center"/>

1. Details are view-only. To modify group information, click Edit; checking Business Codes in the selection box will make them appear in the corresponding adjustment business category, while unchecking will hide them.

<img src="/assets/IF4Ibg7exoFhSdxvlFbjWbLqppd.png" src-width="3250" src-height="1758" align="center"/>

<img src="/assets/Ag8lbNDmhozDk1xehq6jcA6YpSc.png" src-width="3240" src-height="1768" align="center"/>

