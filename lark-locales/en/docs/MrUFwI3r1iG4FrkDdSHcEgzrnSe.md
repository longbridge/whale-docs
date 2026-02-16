---
title: Deposit
slug: MrUFwI3r1iG4FrkDdSHcEgzrnSe
sidebar_position: 0
---


# Deposit Funds

# Deposit

# 1. System Overview

A deposit is the process by which an investor transfers funds into their securities account. This process involves multiple steps to ensure that funds are securely and accurately credited to the investor’s account.

The Whale system includes functions for handling deposit applications, matching bank transaction records, deposit review, separate processing of deposits during account opening, reconciliation, and deposit record queries. To satisfy supervisory and risk-control requirements, the system’s design features multi-role, workflow-driven capabilities that balance high deposit efficiency with low financial risk.

Because different brokerage firms have varying requirements for deposits—some require rapid crediting while others require precise matching of bank transaction records before crediting—the system supports two deposit workflows, as shown below:

<img src="/assets/ByiswEVTjhpYAabuAI2j1WaRpEd-board.jpeg"/>

# Prerequisites

None

# 2. Operating Instructions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: Funds Management - Deposit</p>
</div>

## Deposit Application

Deposit applications are initiated by the user and generally include four primary items: currency, requested amount, recipient bank card, and remarks. WHALE users can manually assist clients with securities fund-in operations and may reject or submit applications for approval based on the information provided by clients.

- Create (Deposit Application)

Applicable when a user contacts a back-office operator to perform a manual deposit. The operator must select the client in sequence and enter the deposit currency, method, receiving bank, amount, remarks, and any supporting documents (if applicable).

<img src="/assets/PkDobdc5YochnLxp1LFj3jJTpAc.gif" src-width="2086" src-height="994" align="center"/>

- Reject: If the client’s submitted deposit application contains errors or the user indicates that the application is invalid, the operator may perform the [Reject] action.
- Delete: If the client’s submitted deposit application contains errors or the user indicates that the application is invalid, the operator may also remove the target record using the [Delete] button.
- Edit: If a problem with a deposit application is discovered before submission, the operator may correct it using the [Edit] button after confirming details with the client. Edits require a work-order approval; changes take effect only after approval.
    - Editable fields: currency, deposit method, receiving bank, amount, deposit fee, remarks, and supporting documents (re-upload)
        <img src="/assets/D9Lvb6QTOoUjM4xW5mbjjiI1p8e.gif" src-width="2086" src-height="994" align="center"/>

- Submit (supports batch operations): After initial review by the operator confirms no issues, applications may be submitted to the next operator in the workflow for review — withdrawal processing.
- Direct Credit: Because different brokerage users have differing timeliness requirements for deposits, Direct Credit enables users to process deposits quickly. After receiving a client’s deposit application, the user only needs to supplement the bank transaction information to complete the credit. Direct Credit is configured to require approval by default; contact operations personnel if approval is not required.
    - Requires approval: In the Direct Credit dialog, after confirming the information is correct, click [Submit for Approval]; the record will flow to the Deposit Review page, and the deposit will be credited upon approval.
    - No approval required: In the Direct Credit dialog, after confirming the information is correct, click [Confirm Credit] to post the deposit immediately.

Requires approval

<img src="/assets/CDEfb47FBoqUJ8xuqrWjen3QpOh.png" src-width="1700" src-height="1436" align="center"/>

No approval required

<img src="/assets/Fyg1bAhnXojjoWxEzaZjcSvPpCe.png" src-width="1698" src-height="1352" align="center"/>

## Deposit Matching

The data on this page are derived from bank deposit statements. If a broker’s business rules require matching bank transactions with deposit records before crediting, once the bank transaction information has been synchronized to the system, operators may manually process items on the Deposit Matching page. Processing is divided into two categories: linking for crediting and returning funds to the client.

<table header_row="1">
<colgroup>
<col width="224"/>
<col width="528"/>
</colgroup>
<thead>
<tr><th><p>Processing Method</p></th><th><p>Definition</p></th></tr>
</thead>
<tbody>
<tr><td><p>Linking</p></td><td><p>Refers to automatically associating bank statement fields such as payer bank account number, payer name, currency, and amount with deposit records to perform linked crediting.</p></td></tr>
<tr><td><p>Deposit Return</p></td><td><p>Refers to the process of returning funds to the client’s bank card when the client has not properly opened an account or the client’s account poses a risk and funds cannot be credited to the securities account.</p></td></tr>
<tr><td><p>Withdrawal Return</p></td><td><p>Refers to when a client’s withdrawal is rejected by the beneficiary’s receiving bank; the funds returned by the receiving bank should be matched to the client’s account. (Because such bank flow appears as an inflow, it is placed on the Deposit Matching page to distinguish it from normal deposits.)</p></td></tr>
</tbody>
</table>

- Linking: Only those deposit bank statement records that the system cannot auto-match require manual operation. On this page, operators can confirm according to system prompts and proceed with subsequent crediting or other actions.
    - The Linking page will automatically compare fields by matching names (as shown); once confirmed, click [Link].
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[41%]" width-ratio="41">
        <img src="/assets/RiI5bDRr0oNCfMxxX0Lj9wDdpCh.png" src-width="2484" src-height="1946" align="center"/>
        </div>
    <div class="w-[58%]" width-ratio="58">
        <img src="/assets/J0WKbaHClovxVfxSuIWjy9i5pHf.png" src-width="2574" src-height="1434" align="center"/>
        </div>
    </div>
    - If the user matched by the system default is incorrect, you may manually associate the customer corresponding to this bank transaction via [Custom]. Association methods: Deposit Application and Securities Account.
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/IJtwbU0OFoVjOKxhwgVj0kUwpoh.png" src-width="3100" src-height="1756" align="center"/>
        </div>
    <div class="w-[49%]" width-ratio="49">
        <img src="/assets/LM9kbp5V5ostwaxcy2TjH0top1b.png" src-width="3030" src-height="1732" align="center"/>
        </div>
    </div>

Deposit Return: If a deposit cannot be credited to the client’s securities account for any reason and must be refunded, use this function. The user must enter the client’s bank card information; after confirming the details, click [Confirm] to route the record to the Deposit Review page for auditing.

<img src="/assets/R07abr1wno5d46xCGzfjz0BfpKD.png" src-width="3392" src-height="1871" align="center"/>

Withdrawal Return: Since the Deposit Matching page shows bank inflows, if a client’s withdrawal was rejected by the receiving bank, it will appear as an inflow in the bank statement. The user must associate the withdrawal business transaction number and handle such records via the [Withdrawal Return] function.

<img src="/assets/LKVvbBFfEoMWbhxrUyDjUXpFpPg.png" src-width="3298" src-height="1760" align="center"/>

## Deposit Review

After operators process items on the Deposit Matching page using bank inflow information, downstream reviewers will audit the processed results; deposits may be posted only after approval. For normally linked deposits where the securities account remained under the client’s control at the time of deposit, the back office will subject these records to separate approval.

- Account Opening in Progress: Select the target record and click [Approve] to enter the details page to re-verify the information; after confirmation, initiate a work-order approval.

<img src="/assets/NLDsbfvbWouBZ8xuzTRjfS5Hpge.png" src-width="3310" src-height="1748" align="center"/>

- Account Opened: Select the target record and click [Approve] to review the details; after verification, approve the record.

<img src="/assets/Amkkb1mWYo9ca9xxt0Dj1mvepLg.png" src-width="3310" src-height="1748" align="center"/>

- Deposit Return: Select the target record and click [Approve] to trigger the approval work-order; after confirming the information, approve.

<img src="/assets/P5LYbmCKQo0HHyxMvIujnZ4BpHb.png" src-width="3320" src-height="1762" align="center"/>

- Withdrawal Return: Select the target record and click [Approve]; after confirming the information, pass it directly—no work-order approval is required.

<img src="/assets/Km9YbtdHZonXdXxGOsmjTLLVpWq.png" src-width="3401" src-height="1852" align="center"/>

## Deposits During Account Opening

Because the deposit and account opening workflows can be initiated in parallel, there are cases in which the deposit workflow has been approved while the account opening workflow is still in progress. For such deposit records, users can track the corresponding account-opening status on this page.

Users can view the real-time status under "Account Opening Status"; if the client’s account opening process fails, you may [Reject] it (supports batch operations).

<img src="/assets/Rw3OblWgzoktvixY9Lcj25j8pxe.png" src-width="3288" src-height="1122" align="center"/>

## Deposit Reconciliation

To ensure the accuracy of fund flows, business operations require comparing bank transactions with system deposit records to improve deposit accuracy. Bank transaction data can be sourced in two ways: (1) API integration (automatic), and (2) manual import.

- Reconciliation: Users can select bank transactions for the target period and refresh; the system will automatically match bank transactions with system deposit records. Upon completion, monitor the "Reconciliation Result" column; any discrepancies require further investigation.

<img src="/assets/ATF2bW9nAoFdLIxo5ecjNMcDp7f.png" src-width="3282" src-height="1496" align="center"/>

<img src="/assets/LacLb6unJoORwNxl1A8je1Mzp2d.png" src-width="3290" src-height="1732" align="center"/>

## Deposit Records

The Deposit Records page logs the entire deposit lifecycle; users may query, export, and import records at any time.

- If a user performed a Direct Credit deposit without entering bank transaction information, they may bulk import bank transactions on this page using [Import Bank Transactions].

<img src="/assets/LHlvbv9IyoosAqxgknCjoAISp9g.png" src-width="3784" src-height="1458" align="center"/>

# 3. FAQ

Q: What are the deposit methods and channels?

A: Common deposit methods include: online bank transfer, wire transfer, bank-to-broker transfer, sub-account, eDDA, FPS (Faster Payment System), check, ATM/counter, and PAYNOW.

Q:

A:

Q:

A:

Q:

A:

