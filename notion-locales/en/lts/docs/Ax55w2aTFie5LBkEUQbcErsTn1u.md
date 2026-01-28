---
title: System Introduction
slug: Ax55w2aTFie5LBkEUQbcErsTn1u
sidebar_position: 1
---


# System Overview

# System Introduction

# 1. System Overview

The withdrawal function refers to the operation by which an investor withdraws funds from their securities account. This function allows investors to transfer funds from their securities accounts to their bank accounts or other designated accounts.

The Whale system includes features for processing withdrawal requests, withdrawal handling, reconciliation, separate handling of exceptional withdrawals, and withdrawal record inquiries. Due to regulatory supervision and risk-control requirements, the system is designed with multi-role and workflow characteristics, balancing withdrawal efficiency while simultaneously reducing financial risk.

The overall business process is as follows:

<img src="/assets/Ar9AbCyKcoXhuZxOGtVjB2xqp5f.png" src-width="2146" src-height="256" align="center"/>

# 2. Operating Instructions

# Withdrawal Configuration

## Fund Parameter Configuration

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Fund Parameters &gt; Company Bank Accounts</p>
</div>

<img src="/assets/BgP4bNWsios8TkxKbJij9APQpfg.png" src-width="2844" src-height="1304" align="center"/>

- Click [New] to enter the secondary page and complete withdrawal channel information (the combination of the brokerage firm's payment bank account and withdrawal method, for example: ICBC Asia 001 - Check Transfer).

<img src="/assets/BdC5bPDT2ooOlfxexIXjFxC9plh.png" src-width="2846" src-height="1330" align="center"/>

1. Enable the currency's withdrawal function toggle.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu: Business Parameter Settings &gt; Fund Parameters &gt; Currencies</p>
</div>

<img src="/assets/DbB4b6dvqo9zHuxUHlKjEIYGppc.png" src-width="2858" src-height="1318" align="center"/>

- Click [New] to enter the secondary page and set the withdrawal function option to "Yes."

<img src="/assets/BSBQbRboqoBQ68xirbqjjiOTpid.png" src-width="2864" src-height="1330" align="center"/>

## Automatic Withdrawal Rules

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Automatic Withdrawal Rules</p>
</div>

Configure withdrawal-channel batching rules to control whether withdrawal batches are processed automatically or manually. The rules can also govern single-transaction withdrawal limits, service windows, and supported client banks.

Supported withdrawal strategies currently include: single-transaction real-time, scheduled batching with manual review, manual batching, and bulk automatic processing.

<img src="/assets/PvfIbMVXDoWZFGxQB9yjwMwCpKh.png" src-width="3304" src-height="878" align="center"/>

Operation button descriptions:

- New: Create automatic withdrawal rules according to the brokerage firm's corresponding withdrawal channels.
- Edit: Edit existing automatic withdrawal rules.
- Delete: Delete existing automatic withdrawal rules.

## Daily Limits and Change Log

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Daily Limit</p>
</div>

Some withdrawal channels may impose daily limits. To reduce withdrawal anomalies, a daily limit monitoring and management mechanism has been established.

<img src="/assets/CHMubflrNog5MBxBXtFjD9Xup9e.png" src-width="3292" src-height="730" align="center"/>

Operation button descriptions:

- New: Configure the daily limits for withdrawal banks as required.
- Edit: Edit existing daily limits.
- Delete: Delete existing daily limits.
- Adjust: Adjust the daily limit amount for the current withdrawal bank.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Daily Limit Change Log</p>
</div>

You can query historical changes to the withdrawal bank's daily limits.

<img src="/assets/XtjfbHwNhouy4axhZRMjNKRRpPd.png" src-width="3264" src-height="1102" align="center"/>

When the daily limit reaches the remaining-balance alert threshold, the system will automatically send a message alert.

<img src="/assets/NJ4wbi143oZtzoxcLGLjgqr5pNb.png" src-width="1156" src-height="138" align="center"/>

## Balance Interception

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Balance Interception</p>
</div>

This currently applies to withdrawal operations. During withdrawal processing, the system will query the balance of the withdrawal bank selected by finance staff and evaluate the requested withdrawal amount against the retrieved balance. If the balance is insufficient to support the user's withdrawal request, the corresponding withdrawal will be intercepted and await subsequent manual handling by finance.

<img src="/assets/AmoKbYHGhoCBm3xh7ubjGQWPpae.png" src-width="3308" src-height="1048" align="center"/>

Operation button descriptions:

- Edit: Edit the alert balance and interception balance for balance inquiry records of banks integrated via API.
- Enable: Enable balance inquiry records for banks integrated via API.
- Disable: Disable balance inquiry records for banks integrated via API.

When the bank balance reaches the alert balance, the system will automatically push a notification warning.

<img src="/assets/LnBtbjPWIoUhs9xrbvzjfTNbpqd.png" src-width="830" src-height="194" align="center"/>

When the bank balance reaches the interception balance, the system will automatically intercept the corresponding withdrawals and issue an alert.

<img src="/assets/DJUsbJJ7roNyVhxEK9fj8uZ1pgh.png" src-width="772" src-height="220" align="center"/>

## Automatic Review Rules

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Automatic Review Rules</p>
</div>

Whether a client's withdrawal request requires manual backend review can be configured in "Automatic Review Rules." Supported review rules currently include: manual approval requiring a work order, manual approval without a work order, automatic submission, and automatic rejection.

<img src="/assets/KA12bQRPLonE56xXRLtjup7ApNg.png" src-width="3280" src-height="672" align="center"/>

Operation button descriptions:

- New: Configure automatic review rules as required.
- Edit: Edit existing automatic review rules.
- Enable: Enable existing automatic review rules.
- Disable: Disable existing automatic review rules.

## Additional Settings

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Additional Settings</p>
</div>

To configure whether the "Direct Payment" operation under "Funds Management - Withdrawals - Withdrawal Processing - Pending" requires a work order approval after submission, set this in "Additional Settings."

<img src="/assets/QXtHb5MhfoLkhVxa9UCjw6IBpph.png" src-width="3302" src-height="366" align="center"/>

## Withdrawal Parameters

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Withdrawal Rules &gt; Withdrawal Parameters</p>
</div>

Configure parameters such as estimated arrival time and estimated fees according to the client's withdrawal bank.

<img src="/assets/RxKhbcLwSoaiBZxHGwajKJATp9b.png" src-width="3262" src-height="1084" align="center"/>

Operation button descriptions:

- New: Configure withdrawal parameters as required.
- Edit: Edit existing withdrawal parameters.
- Copy: Quickly create new withdrawal parameters by copying existing entries.

# Withdrawal Operations

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu: Funds Management - Withdrawals</p>
</div>

## Withdrawal Application

A withdrawal application is submitted by the user and includes four main elements: currency, requested amount, beneficiary bank card, and remarks. WHALE users can manually assist clients with securities placements and perform actions such as rejecting or submitting the client's application for approval.

- Manual Withdrawal

Applicable when the user contacts back-office operators to perform manual withdrawals. The operator must sequentially enter the client's currency, requested amount, withdrawal fee, beneficiary bank card, and remark information. If the client has proof of the withdrawal, it can also be uploaded to the system.

<img src="/assets/R7YObb6W8oX4sRxIeaij5GttpRc.png" src-width="1192" src-height="2434" align="center"/>

- Submit (batch operation supported): After preliminary review by the operator, the application can be submitted to the next operator in the workflow for review — withdrawal processing.
- Reject (batch operation supported): If the client's submitted withdrawal information is incorrect or the user indicates the application is invalid, the operator may perform the "Reject" action.
- Delete: If the client's submission is incorrect or deemed invalid by the user, the operator may directly delete the record using the "Delete" button.
- Modify: If an issue is identified with a client's withdrawal application before submission, and after confirming with the client, the operator can correct it via the "Edit" button. Modifications require work order approval; changes take effect after approval.
    - Scope of modifications: requested amount, withdrawal fee, beneficiary bank card, remarks, supporting documents (re-upload).

<img src="/assets/UPnWbSLiIolBGjxhTC3j3B3Jpfd.png" src-width="3824" src-height="1418" align="center"/>

<img src="/assets/JeilbieGHoKGPTxsbDejCP5qpRf.png" src-width="3322" src-height="1674" align="center"/>

## Withdrawal Processing

After the initial reviewer submits a withdrawal application, the re-review operator must perform withdrawal processing. Withdrawal processing provides two methods: Direct Payment and Batch Submission for Review. Specifically:

- Direct Payment
    <img src="/assets/X6u5b2kMAoNFaCxpPunj4ctEpHd.png" src-width="3826" src-height="1024" align="center"/>
    <img src="/assets/LEaXbRf5uoi5uRxCXthjrERcppf.png" src-width="1674" src-height="1748" align="center"/>
    <img src="/assets/D2VmbcySWoJpfVxdiMQjA0QJpmg.png" src-width="3810" src-height="1860" align="center"/>
    - After selecting the target record, click the "Direct Payment" action in the operations column.
    - In the popup, enter the bank name, bank account, channel, and other information. In the payment details, optionally include bank statement information.
    - After submission for review, the record flows to the "Direct Payment Pending" page. The reviewer must perform work order approval; once approved, the payment is completed.

- Batch Submission for Review
    <img src="/assets/UA3ubjPp0onD5Ix5q7tjzc0cpRu.png" src-width="3818" src-height="1536" align="center"/>
    <img src="/assets/TL6Mbo0qPoE7fYxlDLKjv5xJpBd.png" src-width="3832" src-height="1848" align="center"/>
    <img src="/assets/ZRSxbXHkZo0sXCxuSZDjuSlXp9e.png" src-width="3830" src-height="1146" align="center"/>
    <img src="/assets/NHsXbGOYNou3RxxvoPejDk5ap9d.png" src-width="3826" src-height="1826" align="center"/>
    <img src="/assets/VhFMb8ICWoqrMKxJIg8jPFJxpgf.png" src-width="3910" src-height="1942" align="center"/>
    - After selecting target records, click the batch operation "Pack and Submit for Review." If items need to be removed from the batch after packing, this can be done in the popup. Fill in the withdrawal bank and channel information, and the batch will enter the review workflow.
    - After submission for review, the record flows to the "Batch Pending" page. The reviewer must perform work order approval; once approved, the payment is completed.
    - Note: Due to withdrawal volumes and channel limitations, some withdrawal channels require manual status updates. Users must click "View and Update Results" to enter the details page and perform manual updates (batch updates supported).
    - After payment completion, the withdrawal file can be downloaded and saved locally.

<img src="/assets/QlGQb0BpIoQEZ1xZyeijy6azpWS.png" src-width="3836" src-height="1826" align="center"/>

- Indicator Cards

If withdrawal volumes are large, the system's categorized display cards can be used for more refined operations; the left-right arrangement of the indicator cards reflects the sequence of business operations.

<img src="/assets/HrhibiyRtoYsUZxMzXijHcHopdf.png" src-width="3830" src-height="1268" align="center"/>

- Check Printing

If the user uses checks for withdrawals and needs to print checks after the process completes, click "Check Printing" at the top right of the page to enter the secondary page.

<img src="/assets/UBgCbOvScoEWr2xFY9ajPorepLe.png" src-width="3326" src-height="1712" align="center"/>

The page displays all check-method withdrawal records. After selecting the target record, the user may choose to reprint or perform the initial print (supports bulk printing), enter the check number, and click "Confirm Print."

<img src="/assets/E0ulb2YfgorQMXxlihijp1X5pHd.png" src-width="3324" src-height="1758" align="center"/>

## Withdrawal Reconciliation

To ensure the accuracy of fund flows and reduce the risk of financial loss, bank transactions must be reconciled against the system's withdrawal records. Bank statements originate from two sources: (1) API integration (automatically generated), and (2) manual import. (See the "Withdrawal Bills" section for details.)

- Reconciliation: Users may refresh bank transactions for a selected period. The system will automatically match bank transactions with system withdrawal records. After reconciliation, focus on the "Reconciliation Result" column in the list; any discrepancies require further investigation.

<img src="/assets/LZn5bf8npolQZZx4VjEjjsMTpdc.png" src-width="3826" src-height="1790" align="center"/>

<img src="/assets/LhM0bUHlpoanVPxpHMRjuqE4pOd.png" src-width="3818" src-height="1808" align="center"/>

## Exceptional Withdrawals

If an anomaly is detected during withdrawal processing or reconciliation, it can be handled on the Exception Withdrawals page (batch operations supported). The system provides four resolution methods:

- Mark as Successful
- Mark as Failed
- Retry Payment (regenerate the withdrawal order and attempt payment again)
- Resubmit (resubmit the original withdrawal order to the channel for payment)

<img src="/assets/JWHbbPsdzonouexaIlfjm5wiphe.png" src-width="3826" src-height="1788" align="center"/>

After selecting a specific resolution method, the record flows to the "Pending Approval" page; business personnel must re-verify the result, and upon approval the exceptional withdrawal record is considered resolved.

<img src="/assets/IAtFbnJaqo5ym9x6OPaj8Mg6pbh.png" src-width="3832" src-height="1312" align="center"/>

## Withdrawal Records

The Withdrawal Records page logs the full lifecycle status of withdrawals. Users may query, export, and perform other operations at any time.

<img src="/assets/CJ7PbNJgwoPM0yxgSISjSnQPpqc.png" src-width="3816" src-height="1854" align="center"/>

## Withdrawal Bills

Refers to all debit transaction records of the brokerage firm's bank accounts and serves as an important basis for verifying withdrawal operations.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu: Funds Management - Bank Statements - Withdrawal Bills</p>
</div>

- If the bank has integrated direct bank-enterprise connection, the system can automatically obtain bank statements.
    - If direct integration is unavailable, statements must be manually imported by back-office staff according to the bank's statement template.

<img src="/assets/NsZob3in9ofoi6xo3Z7jwmLdp26.png" src-width="3818" src-height="1796" align="center"/>

<img src="/assets/AgATbc0p4o42JrxXceNj8dc8psd.png" src-width="3820" src-height="1866" align="center"/>

- For bank statements obtained automatically or imported manually, if an entry is confirmed to be redundant and its match status is "Unmatched," it may be manually deleted.

<img src="/assets/Ic1VblK6HomlGLxzKrxjmssJpzb.png" src-width="3316" src-height="1692" align="center"/>

- When parsing bank statements, negative amounts may appear for bank debits, which could cause the system to incorrectly classify them as debits. If such cases are identified, they can be manually reclassified as credits.

<img src="/assets/LQDKbjSqLoaxEMxcYkzj3pqnpoO.png" src-width="3308" src-height="1700" align="center"/>

- Unmatched withdrawal orders require manual association and tagging according to the actual debits.
    - If a tag is later found to have been applied in error, a "Reject" operation can still be performed.

<img src="/assets/E0MebfHwOoz2Ebx3hn0jYySSpJY.png" src-width="3326" src-height="1718" align="center"/>

<img src="/assets/ZSQpbp6fuotAg3xWLq7jAkPkp1g.png" src-width="3308" src-height="1708" align="center"/>

