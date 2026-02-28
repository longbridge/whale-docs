---
title: System Introduction
slug: UepcwAVqJiP0t6kjBxHcsoMWn5c
sidebar_position: 2
---


# System Overview

# System Introduction

# Overview

The asset accounts currently comprise two main components: the <b>Asset Ledger</b> and <b>Basic Asset Management Capabilities</b>.

Asset Ledger: records, in detail, the transaction history of asset changes across all client business scenarios. The ledger includes, but is not limited to, the following information:
- Asset types: Cash, Stocks, Options, Bonds, Funds, OTC, Others
- Accounts: Business accounts, Settlement accounts, Transitional accounts
- Types of asset changes: Debit, Credit, Freeze, Unfreeze
- Business code: the unique code identifying the business scenario
- Changed asset amount / position quantity

The ledger’s bookkeeping capability ensures that after any asset change, transaction records across different accounts remain clear and accurate, safeguarding asset reconciliation between upstream and downstream business processes.

Basic Asset Management Capabilities: the asset module also provides foundational capabilities such as adjustments, asset freeze/unfreeze, and business-code management to facilitate more convenient asset administration.

<b>Account Categories</b>

Types of Asset Changes

## Asset Architecture

<img src="/assets/W22ibtfBXoFWr4xSKdjjyKuBpMc.png" src-width="1578" src-height="910" align="center"/>

# Operations Guide

## 1. Accounts

### 1.1 Asset Overview

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Asset Accounts &gt; Account &gt; Asset Overview</p>
</div>

<b>Menu Function</b>: Query the overall asset status of all clients, including cash and positions. Primarily used for company-level asset statistics.

<b>Instructions</b>:

The page query results appear as shown below:

<img src="/assets/ADrkb3DrAotj8Dx11btjwODGphe.png" src-width="3674" src-height="1722" align="center"/>

<b>Page Notes</b>

- The page displays the total assets of all clients under the current company.
- Supports filtering by client type, account type, and broker; currency selection for aggregated data is also supported.
- Modules:
    - Total Assets: shows asset composition by asset type and currency.
    - Ledgered Total Cash: displays settled and pending settlement cash details by currency.
    - Positions: displays, in separate tabs by position type, the settled and pending settlement quantities and market value details for each security.

### 1.2 Account Query

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Asset Accounts &gt; Account &gt; Account Query</p>
</div>

<b>Menu Function</b>: Support querying a client’s asset overview and related account details by various dimensions, including client profile, bank card information, fee details, deposit/withdrawal transactions, and position transfer flows.

<b>Instructions</b>:

1. Begin query: selecting the account dimension and entering the corresponding information returns the client’s basic information.

<img src="/assets/IVBnbHjkdoYXW9xkPLkj5IPupLb.png" src-width="1280" src-height="481" align="center"/>

1. The account query page displays "Recently Viewed" for quick access.
2. Query results: a sidebar shows the query results and defaults to the Asset Overview page; you can switch pages to view client profile, bank card information, fee details, deposit/withdrawal flows, position transfer flows, etc. Sidebar content matches the quick query results.

<img src="/assets/Yh6sbRyhuoTOC4x51kqjg1evpGb.png" src-width="1280" src-height="514" align="center"/>

Quick Account Query Entry:

<img src="/assets/V5aZbyhPno6b2jxxu9Xjwefbpqf.png" src-width="3630" src-height="1338" align="center"/>

1. After performing an account query, under Account Details &gt; Position Details you can operate on specific holdings using [Modify Cost]; you can also view cost snapshots and transaction history via [Details].

<img src="/assets/Ty3rbfWkaoLLN4xpXGfj8D7ap6b.png" src-width="3228" src-height="1614" align="center"/>

<img src="/assets/Q0RobYaJ0oBhGcxGJPGjuKqppcx.png" src-width="3202" src-height="1710" align="center"/>

<img src="/assets/KNnebJN9QozjILx5ALzj0ECqpig.png" src-width="3184" src-height="1628" align="center"/>

<b>Cost Explanation</b>

- Diluted Cost: the breakeven price for a stock over the holding period (excluding commissions and fees). If the user sells at this price, profit and loss are balanced. It calculates the cumulative profit and loss for each transaction during the holding period (including cash dividends), considering both purchases and sales. Calculation starts from the initial position; once fully closed, the cost is cleared and recalculated when a new position is opened.
- Average Purchase Cost: after the user buys a single stock, the cost basis equals the purchase amount (excluding commissions and fees) divided by the number of shares held. The cost during the holding period does not take into account gains or losses from subsequent sales, avoiding the effect that later sales would have on the purchase cost. Calculation starts from the initial position; once fully closed, the cost is cleared and recalculated when a new position is opened.

### 1.3 Account Balances

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Account &gt; Balance Query</p>
</div>

Menu Function: This menu supports querying client asset balances across different currencies and account types.

Instructions:

1. Select the asset type to query — Cash, Stocks, Funds, Options, Bonds, OTC & Others, Virtual Assets (the example below uses "Cash"); each page supports filtering by relevant dimensions.

<img src="/assets/QRM6btEIto5LDLxd7W2j3p9Lprc.png" src-width="3224" src-height="914" align="center"/>

1. If the client has frozen funds, you can click the amount to open a secondary page showing freeze details; this entry is not available for other asset types.

<img src="/assets/WwaKbvPLXoceX2xcQYCj59eLpxg.png" src-width="3194" src-height="984" align="center"/>

Freeze Details Page:

<img src="/assets/OoIJbHSm9oC67SxSWGPjJSORpZf.png" src-width="3186" src-height="558" align="center"/>

1. For certain cash-balance query scenarios, a convenient [Manual Withdrawal] action is available in the upper-right corner.

<img src="/assets/AjSLbVLsLoeOYCxZ587jGXQ5pvb.png" src-width="3214" src-height="758" align="center"/>

1. Additionally, the [Details] action on the list page provides quick navigation to the corresponding account transaction details.

<img src="/assets/LE6CbUMAloH2FBxhr2hjXwGKp5g.png" src-width="3212" src-height="800" align="center"/>

Account Details Page:

<img src="/assets/Mh4KbfIJKoAPZRxu9ThjGquvpNb.png" src-width="3220" src-height="586" align="center"/>

### 1.4 Account Transactions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Account &gt; Account Transactions</p>
</div>

<b>Menu Function</b>: Query transaction details for account asset flows and support multi-dimensional filtering by currency, business code, and other criteria.

<b>Instructions</b>:

1. Select the asset type to query — Cash, Stocks, Funds, Options, Bonds, OTC & Others, Virtual Assets (the example below uses "Cash"); each page supports filtering by relevant dimensions.

<img src="/assets/NL0eb7co9oJ8AfxSu4CjrHtBpah.png" src-width="3212" src-height="748" align="center"/>

1. Operations for other asset types are the same as those for "Cash".

## 2. Freeze / Unfreeze

### 2.1 Asset Freeze

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Account &gt; Freeze/Unfreeze &gt; Asset Freeze</p>
</div>

<b>Menu Function</b>: This menu enables freezing of assets in a client’s cash, stock, or fund account. It supports single and batch freeze operations.

<b>Instructions</b>:

1. Select the asset type to enter the freeze operation; currently supported asset types are Cash, Stocks, and Funds (the example below uses "Cash"); each page supports filtering by relevant dimensions.

<img src="/assets/RMFFbq50DoL71IxnPvkjkVtCpL1.png" src-width="3230" src-height="812" align="center"/>

1. Create a new freeze: click [New] in the upper-right corner to add an asset freeze request.

<img src="/assets/NHqebKs2uoUoHSx0YkSjrAvppKe.png" src-width="3206" src-height="800" align="center"/>

1. Complete the freeze request information: after submission, the request enters the work order system for approval by the corresponding approver.
    1. Account Type: the account type for freezing defaults to supporting only SETTLEMENT accounts.
    2. Validity Period: optional; if specified, the record will be automatically unfrozen at expiration.

<img src="/assets/U2D7baaK6obkE8xw0SQjxsFSpdd.png" src-width="3218" src-height="1696" align="center"/>

1. Click [View] in the operations area on the right to check the work order approval progress and details.

<img src="/assets/OLwFbdphTomPilxViO8jj52Qp9g.png" src-width="3202" src-height="1090" align="center"/>

<img src="/assets/TVz3bnyObo8EfOxhloZjzpZkpQh.png" src-width="3706" src-height="1710" align="center"/>

1. Batch Freeze: you can also click [Batch New] in the upper-right area to apply freezes in bulk by uploading a file.

<img src="/assets/XfjCbuWBLo00oyxcMyNj4xElpNc.png" src-width="3226" src-height="926" align="center"/>

1. Batch Freeze Operation Page: download the template, fill it in as prompted, and upload; after upload, records still require work order approval like single freezes.

<img src="/assets/Zon6bCXWioQBF8xlkiDjjF5Eprs.png" src-width="3210" src-height="1442" align="center"/>

1. Operations for other asset types are the same as those for "Cash".

### 2.2 Asset Unfreeze

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Account &gt; Freeze/Unfreeze &gt; Asset Unfreeze</p>
</div>

<b>Menu Function</b>: This menu enables unfreezing of a client’s cash, stock, or fund assets.

<b>Instructions</b>:

1. The asset unfreeze page allows selection of different asset types to enter unfreeze operations; each page supports filtering by relevant dimensions.

<img src="/assets/IdTfbesQeojo0XxvVZfjoOXBpDd.png" src-width="3202" src-height="1094" align="center"/>

1. If a freeze was set with an expiry time, the system will automatically unfreeze the record at expiration; before the expiry date, manual unfreeze can be performed via the page (the example below uses "Cash").

<img src="/assets/YcCsbzZRpoQWcGx0cQXjWrKHpDh.png" src-width="3202" src-height="1080" align="center"/>

1. Manual unfreeze requires approval. You can check approval progress via [View] in the operations column; once approved, the system executes the unfreeze. The unfreeze result displays the final execution status.

<img src="/assets/Xrs3bbisHoLfm3x3t6WjPOJ1pGc.png" src-width="3178" src-height="1048" align="center"/>

<img src="/assets/MijubaksioLF4Lx0QZEjCLthp3e.png" src-width="3716" src-height="1686" align="center"/>

## 3. Adjustments

### 3.1 Manual Adjustment

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Adjustments &gt; Manual Adjustment</p>
</div>

<b>Menu Function</b>: Primarily intended for back-office staff to correct accounting errors in exceptional scenarios by manually adjusting client settlement account assets.

<b>Instructions</b>:

1. Manual Adjustment main page: displays tabs for different adjustment types (Cash, Stocks, Funds, Bonds, OTC, Crypto, OTC Derivatives); to perform an adjustment, enter the corresponding tab for the asset type.

<img src="/assets/GCcdbxSaKo4u55xvf6Sjs3cSpdd.png" src-width="3206" src-height="824" align="center"/>

1. Create a new manual adjustment: click [New] to open the add-adjustment page.

<img src="/assets/VShgbpJOjohxmIxFermjDyLOpRg.png" src-width="3232" src-height="834" align="center"/>

1. Fill in adjustment information:
    1. Business Category: i.e., Business Code; select the business scenario associated with the adjustment transaction.
    2. Company Bank Card & Customer Bank Card: optional; if the adjustment involves deposits/withdrawals, include relevant bank card information to assist record keeping.
    3. Adjustment Tag: optional; tags such as Third Party and Check are for marking special adjustment scenarios.
    4. Business Time: optional; specifies the client-visible transaction time. If not set, defaults to the actual adjustment completion time.
    5. Accounting Date: optional; specifies the settlement date to which the transaction belongs. If not set, defaults to the accounting date corresponding to the actual adjustment completion. (Note: adjustments require work order approval and there may be a time gap between application and completion. Unless you have a specific accounting date requirement, do not select an accounting date to avoid failures caused by cross-day approvals.)
    6. Remarks: remarks shown to the client will appear in client-visible transaction records (e.g., App, statements); internal remarks are for internal reference only.

<img src="/assets/Klawbo3Ueo8IvuxxBnBjQo2lpCf.png" src-width="3206" src-height="1690" align="center"/>

Create Cash Adjustment

Tips:

- After selecting a client, you can click the client account to view current asset status to aid the adjustment decision.

<img src="/assets/IelnbGphnotnCQxHNEFjB4VPpVb.png" src-width="3210" src-height="1716" align="center"/>

<img src="/assets/J7o8bmeSEozjDlx0E51j3VE2puh.png" src-width="3194" src-height="1570" align="center"/>

- Manual adjustments are intended for error correction and do not restrict adjustments that result in negative balances. Please exercise caution and adjust based on the client’s actual assets.

1. For securities-type adjustments (Stocks, Funds, Bonds, OTC & Others, Virtual Assets), the required information differs from cash adjustments (the example below uses "Stock" adjustment):
    1. Custodian & Sub-Account: optional; used only when specifying the position for the adjustment; otherwise the default clearing position will apply.
    2. Quantity: required; divided into Street, Nominee, and Own according to the business scenario. Nominee is exempt from transfer fees; if no special requirement, default to Street. Total = Street + Nominee + Own.
    3. Cost & Currency: optional; only fill in when fixing the cost explicitly. Otherwise, the system will default to the market price at the time the adjustment is created.

<img src="/assets/ZflkbcoVMoQ2wex1FSAjQ2InpHf.png" src-width="3214" src-height="1708" align="center"/>

1. Fill in adjustment information according to actual business needs. If concerned about errors, you may [Save] first; you can later [Edit] or [Delete] if necessary. When confirmed, click [Submit].

<img src="/assets/XRZAbAIpZonOw5xgRTKjwrJSp8X.png" src-width="3200" src-height="820" align="center"/>

1. Submitted adjustments require work order approval. Use [Details] in the list operations to view approval progress.

<img src="/assets/GFNmbRHpRonqUpxGHRwjngi1p7d.png" src-width="3220" src-height="948" align="center"/>

1. After approval, you can view the "Adjustment Results" in the list. A completed adjustment indicates success. If an error is discovered after a successful adjustment, you can [Revoke Adjustment]; revoking generates a reversing transaction to offset the current adjustment. If the day’s clearing has not yet occurred, silent revocation (client cannot see the adjustment transaction) may be supported. See the revocation dialog for details.

<img src="/assets/XENDbJS0IopCWOxheO4joFSWpRS.png" src-width="3202" src-height="946" align="center"/>

<img src="/assets/UKeXbcR30otrvBxvzAJjV8JqpDm.png" src-width="3180" src-height="1480" align="center"/>

Tips:

- To monitor adjustment failures, subscribe to "Adjustment Notifications" under Subscription Management.

<img src="/assets/McrvbEtMHo9OU8x7DHrj6lTbplb.png" src-width="3214" src-height="1236" align="center"/>

1. After revocation completes, the adjustment record status updates to "Revoked"; both the client-visible remark and internal remark will show the original and revocation remarks.

<img src="/assets/OBonb7rFgoOqLkxIAJKjVLohpQb.png" src-width="3210" src-height="828" align="center"/>

1. Adjustments also support batch operations via the entry in the upper-right corner of the list. The batch-add page allows downloading a template and filling it per the "Template Field Description." After uploading, the system parses the file and returns error reasons for any incorrect entries for correction and resubmission; you may also choose to ignore errors and submit, in which case only successfully parsed records will be processed. Batch adjustments still require approval, which can be completed within a single application.

<img src="/assets/OQfQbFJMOoRPmKxgEjhjuGImpUh.png" src-width="3220" src-height="730" align="center"/>

<img src="/assets/XQC9bQ6EIouyuYxdNAKjloH4pSf.png" src-width="3218" src-height="1700" align="center"/>

### 3.2 Temporary Adjustment

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Adjustments &gt; Temporary Adjustment</p>
</div>

Common use cases for temporary adjustments:

- When a client encounters special circumstances, a trader may temporarily increase or decrease client assets (Cash/Options/Stocks) to allow the client to place orders; the temporary funds/positions are later invalidated.
- In special cases (e.g., corporate actions requiring manual position adjustments), back-office staff may manually adjust Cash/Stocks/Options to ensure continued business operations.

<b>Instructions</b>:

1. In Temporary Adjustment, select the corresponding adjustment type tab (Cash/Stocks/Options) and click [Add] to open the new temporary adjustment page.

<img src="/assets/XgArb4wymoMXbTxO6YXj6Pfxpae.png" src-width="3210" src-height="832" align="center"/>

1. Fill in the adjustment information page (example: adding a temporary cash adjustment):
    1. Business type and adjustment type are bound; simply select the business type. Temporary cash increases default to inflow; temporary cash decreases default to outflow.
    2. Temporary adjustments require a validity period; after expiry, the temporary adjustment will automatically become invalid.

<img src="/assets/NytbbdpI7oEQSmx2lZbjEcajpHd.png" src-width="3232" src-height="1710" align="center"/>

Create Temporary Cash Adjustment

1. After completing the adjustment information, click [Submit for Review] to initiate work order approval. The adjustment record will show a status of "Initialized."
    1. Click [Details] to view work order approval progress.

<img src="/assets/Eo0kbyOQooEMRixThvLjWaOYpBh.png" src-width="3212" src-height="944" align="center"/>

1. Once the adjustment is approved and the system executes the adjustment, the status will show "Adjusted." During the validity period, you can manually trigger [Invalidate]; otherwise, the system will automatically invalidate the adjustment on the expiry date.

<img src="/assets/Zve8bAoz2o73bexkmPZjOfrkpcg.png" src-width="3224" src-height="570" align="center"/>

## 4. Internal Transfer

### 4.1 Inter-Account Transfer

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Asset Allocation &gt; Inter-Account Transfer</p>
</div>

<b>Menu Function</b>: In parent-child account scenarios, if an account lacks funds, a transfer can be made from another related account to enable the account to complete transactions.

<b>Note</b>: Only supports transfers between main accounts of the same client and two-way transfers within the same main–subaccount relationship.

<b>Instructions</b>:

1. The list page includes both back-office operation flows and client-initiated transfer flows.
2. Click [New] in the upper-right corner of the list page to enter Inter-Account Transfer, or click [Batch New] to perform batch transfers.

<img src="/assets/TzgxbzbpGoCMnCxbQuOj4HaXpRc.png" src-width="3196" src-height="754" align="center"/>

1. Inter-Account Transfer page:

<img src="/assets/B57wba2ssoLVl2x031qjWQAjpic.png" src-width="3212" src-height="1700" align="center"/>

- After confirming the transferor and selecting the transfer type, the system automatically matches and allows selection of transferees:
    - Transfer to a main account: if the transferee is a main account, you may transfer to other main accounts of the same client; if the transferee is a subaccount, you may transfer to its corresponding main account.
    - Transfer to a subaccount: if the transferee is a main account, you may transfer to its subaccounts.

- Fill in transfer information as required by the business. If the transfer amount exceeds the available transferable amount, the page will display a warning but will not strictly prevent submission.

<img src="/assets/IalObF6BooTFBqxYrLdjzPxpp6d.png" src-width="3240" src-height="1720" align="center"/>

Tips: Because transfer amounts are not strictly validated for over-limit conditions, confirm client assets before performing batch transfers.

1. Confirm and submit for approval. Approval progress can be viewed via the list operations.

<img src="/assets/PbicbOSPnonZObxHD9wj1VW6p3b.png" src-width="3216" src-height="748" align="center"/>

### 4.2 Inter-Account Position Transfer

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Asset Allocation &gt; Inter-Account Position Transfer</p>
</div>

<b>Menu Function</b>: When a client has multiple accounts and one account lacks sufficient shares, shares can be transferred from another account to enable the account to complete transactions.

<b>Note</b>: Supports two-way position transfers between main accounts, between subaccounts, and between main and subaccounts for the same client. (OB enterprise clients only support transfers between subaccounts under the same client.)

<b>Instructions</b>:

1. The list page includes both back-office operation flows and client-initiated position-transfer flows.
2. Click [New] in the upper-right corner of the list page to enter Inter-Account Position Transfer, or click [Batch New] to perform batch transfers.

<img src="/assets/N246bKZr9osB2yxmmJ3jl4WCpwf.png" src-width="3210" src-height="762" align="center"/>

1. Inter-Account Position Transfer page:

<img src="/assets/Dza6b2GkCoZ4Stxu569jWQzVpRb.png" src-width="3292" src-height="1806" align="center"/>

- After confirming the transferor and selecting the transfer type, the system automatically matches and allows selection of transferees:
    - Transfer to a main account: if the transferee is a subaccount, you may transfer to its corresponding main account.
    - Transfer to a subaccount: if the transferee is a main account (non-OB clients), you may transfer to its subaccounts; if the transferee is a subaccount, you may transfer to other subaccounts of the same client.

- Fill in transfer information as required by the business. If the transfer quantity exceeds the available transferable quantity, the page will display a warning but will not strictly prevent submission.

<img src="/assets/Cg2ibLqC3o2AJlxEhWzj7gqPpBd.png" src-width="3200" src-height="1710" align="center"/>

Tips: Because transfer quantities are not strictly validated for over-limit conditions, confirm client holdings before performing batch transfers.

1. Confirm and submit for approval. Approval progress can be viewed via the list operations.

<img src="/assets/Mc0gbKWtQoQEybxYO8KjrHoIpTf.png" src-width="3192" src-height="620" align="center"/>

## 5. Business Codes

### 5.1 Business Code Query

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Business Codes &gt; Business Code Query</p>
</div>

<b>Menu Function</b>: This menu supports querying all Business Codes and allows modification of the Business Code name displayed to clients as well as whether transactions associated with a Business Code are visible to clients.

Each transaction corresponds to a Business Code; the Business Code uniquely identifies the business scenario.

<b>Instructions</b>:

1. Enter the menu and use the list to query all Business Codes; search by code or name is supported.

<img src="/assets/EPndbiPSAou3z9xmUPVjpjvUpph.png" src-width="3166" src-height="722" align="center"/>

Page Field Descriptions

- Asset Type: the asset type processed by the transaction, such as Cash or Stocks.
- Client Display: indicates whether the transaction is shown in the client App and statements.

1. If you need to modify the displayed Business Code name or change its visibility, use the Edit action.

<img src="/assets/EvkIbjoWBoyy99xSJxejWr4Cprc.png" src-width="3220" src-height="1696" align="center"/>

### 5.2 Business Management

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>⚓</div>
<p>Menu Path: Asset Accounts &gt; Business Codes &gt; Business Management</p>
</div>

<b>Menu Function</b>: This menu groups Business Codes. Its primary application is for categorizing Business Codes when selecting Business Category during adjustments; you can change which Business Codes are displayed within an adjustment group to control whether adjustments display that Business Code.

Except for adjustment groups, other groups are primarily used by the system across business scenarios and are view-only; editing is not required.

<b>Instructions</b>:

1. Enter the menu to view all Business Code groups.

<img src="/assets/F1cabQHwPoPvvtxt7Unj5fgcp4d.png" src-width="3148" src-height="1000" align="center"/>

1. Details are view-only. To modify group information, click Edit; checking Business Codes in the selection box will make them appear in the corresponding adjustment business category, while unchecking will hide them.

<img src="/assets/EkYibBStToEPbqxXIEKjnbgupYc.png" src-width="3218" src-height="1700" align="center"/>

<img src="/assets/AeUzbbVc6oHvAXx7Npfj3SpSpMj.png" src-width="3206" src-height="1710" align="center"/>

