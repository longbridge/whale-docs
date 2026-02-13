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

<img src="/assets/BzcYwkSRChvaCgbfqtijYLoRp3c-board.jpeg"/>

# 2. Operating Instructions

# Withdrawal Configuration

## Fund Parameter Configuration

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Service Parameter &gt; Fund Parameter &gt; Company Bank Account</p>
</div>

<img src="/assets/AMzBba2IwoqMPux4ek2jwmsnple.png" src-width="2942" src-height="1320" align="center"/>

- Click [Create] to enter the secondary page and complete withdrawal channel information (the combination of the brokerage firm's payment bank account and withdrawal method, for example: ICBC Asia 001 - Check Transfer).

<img src="/assets/TJvdbxGcmoRLyQxpa6xjwH4Qp8v.png" src-width="3002" src-height="1332" align="center"/>

1. Enable the currency's withdrawal function toggle.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu: Service Parameter &gt; Fund Parameter &gt; Currency Setup</p>
</div>

<img src="/assets/Hx2AbhWoBoESrjxhA0bjb2L7ppc.png" src-width="2956" src-height="1326" align="center"/>

- Click [Add] to enter the secondary page and set the withdrawal function option to "Yes."

<img src="/assets/QK4KbXZbioHgvHxnGkGjxTYepnf.png" src-width="2912" src-height="1338" align="center"/>

## Automatic Withdrawal Rules

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Service Parameter &gt; Withdrawal Rules Management&gt; Withdrawal Rules</p>
</div>

Configure withdrawal-channel batching rules to control whether withdrawal batches are processed automatically or manually. The rules can also govern single-transaction withdrawal limits, service windows, and supported client banks.

Supported withdrawal strategies currently include: single-transaction real-time, scheduled batching with manual review, manual batching, and bulk automatic processing.

<img src="/assets/EegEbh072owR1ixmv3Yj8zr3pOg.png" src-width="2956" src-height="1312" align="center"/>

Operation button descriptions:

- Add: Create automatic withdrawal rules according to the brokerage firm's corresponding withdrawal channels.
- Edit: Edit existing automatic withdrawal rules.
- Delete: Delete existing automatic withdrawal rules.

## Daily Limits and Change Log

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Service Parameter &gt; Withdrawal Rules Management &gt; Daily Limits</p>
</div>

Some withdrawal channels may impose daily limits. To reduce withdrawal anomalies, a daily limit monitoring and management mechanism has been established.

<img src="/assets/EZZTb00GvoYiByxb7zajcAv2pkz.png" src-width="2986" src-height="760" align="center"/>

Operation button descriptions:

- Add: Configure the daily limits for withdrawal banks as required.
- Edit: Edit existing daily limits.
- Delete: Delete existing daily limits.
- Adjust: Adjust the daily limit amount for the current withdrawal bank.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Service Parameter &gt; Withdrawal Rules Management  &gt; Daily Limit Changes</p>
</div>

You can query historical changes to the withdrawal bank's daily limits.

<img src="/assets/G6AvbXO3Qo6ZcLxGjA0jWv2Qpvd.png" src-width="2938" src-height="1320" align="center"/>

When the daily limit reaches the remaining-balance alert threshold, the system will automatically send a message alert.

<img src="/assets/NJ4wbi143oZtzoxcLGLjgqr5pNb.png" src-width="1156" src-height="138" align="center"/>

## Balance Interception

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Service Parameter &gt; Withdrawal Rules Management  &gt; Balance Blocking Rules</p>
</div>

This currently applies to withdrawal operations. During withdrawal processing, the system will query the balance of the withdrawal bank selected by finance staff and evaluate the requested withdrawal amount against the retrieved balance. If the balance is insufficient to support the user's withdrawal request, the corresponding withdrawal will be intercepted and await subsequent manual handling by finance.

<img src="/assets/SLWrbvVyVor5B9xKRDej1z2Npuc.png" src-width="2938" src-height="1360" align="center"/>

Operation button descriptions:

- Edit: Edit the alert balance and interception balance for balance inquiry records of banks integrated via API.
- Enable: Enable balance inquiry records for banks integrated via API.
- Disable: Disable balance inquiry records for banks integrated via API.

When the bank balance reaches the alert balance, the system will automatically push a notification warning.

When the bank balance reaches the interception balance, the system will automatically intercept the corresponding withdrawals and issue an alert.

## Automatic Review Rules

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Business Parameter Settings &gt; Withdrawal Rules &gt; Automatic Review Rules</p>
</div>

Whether a client's withdrawal request requires manual backend review can be configured in "Automatic Review Rules." Supported review rules currently include: manual approval requiring a work order, manual approval without a work order, automatic submission, and automatic rejection.

<img src="/assets/V9QBb2BvPoOiESxdAOMj2fv4pdc.png" src-width="2980" src-height="1182" align="center"/>

Operation button descriptions:

- Create: Configure automatic review rules as required.
- Edit: Edit existing automatic review rules.
- Enable: Enable existing automatic review rules.
- Disable: Disable existing automatic review rules.

## Additional Settings

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> Business Parameter Settings &gt; Withdrawal Rules &gt; More settings</p>
</div>

To configure whether the "Direct Payment" operation under "Funds Management - Withdrawals - Withdrawal Processing - Pending" requires a work order approval after submission, set this in "Additional Settings."

<img src="/assets/AZZibyk3xorZ7Ex05MtjAqB7pPb.png" src-width="2982" src-height="748" align="center"/>

## Withdrawal Parameters

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Business Parameter Settings &gt; Withdrawal Rules &gt; Withdrawal Configuration</p>
</div>

Configure parameters such as estimated arrival time and estimated fees according to the client's withdrawal bank.

<img src="/assets/VaLWbtVMYo9Q5mxr3b8jl2sTpvd.png" src-width="2972" src-height="958" align="center"/>

Operation button descriptions:

- New: Configure withdrawal parameters as required.
- Edit: Edit existing withdrawal parameters.
- Copy: Quickly create new withdrawal parameters by copying existing entries.

# Withdrawal Operations

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> Menu: Cash Management- Withdrawals</p>
</div>

## Withdrawal Application

A withdrawal application is submitted by the user and includes four main elements: currency, requested amount, beneficiary bank card, and remarks. WHALE users can manually assist clients with securities placements and perform actions such as rejecting or submitting the client's application for approval.

- Manual Withdrawal

Applicable when the user contacts back-office operators to perform manual withdrawals. The operator must sequentially enter the client's currency, requested amount, withdrawal fee, beneficiary bank card, and remark information. If the client has proof of the withdrawal, it can also be uploaded to the system.

<img src="/assets/DaM6blbDUo9ZX8xIPktj4vvMphc.png" src-width="1204" src-height="3012" align="center"/>

- Submit (batch operation supported): After preliminary review by the operator, the application can be submitted to the next operator in the workflow for review — withdrawal processing.
- Reject (batch operation supported): If the client's submitted withdrawal information is incorrect or the user indicates the application is invalid, the operator may perform the "Reject" action.
- Delete: If the client's submission is incorrect or deemed invalid by the user, the operator may directly delete the record using the "Delete" button.
- Edit: If an issue is identified with a client's withdrawal application before submission, and after confirming with the client, the operator can correct it via the "Edit" button. Modifications require work order approval; changes take effect after approval.
    - Scope of modifications: requested amount, withdrawal fee, beneficiary bank card, remarks, supporting documents (re-upload).
    <img src="/assets/Z3hbbHY4koTNmKxXzXkjO1OIpEE.png" src-width="2910" src-height="1278"/>
    <img src="/assets/AmAXbeFeyohj1HxUPIDjcx3dpHg.png" src-width="2440" src-height="1194" align="center"/>

## Withdrawal Processing

After the initial reviewer submits a withdrawal application, the re-review operator must perform withdrawal processing. Withdrawal processing provides two methods: Direct Payment and Batch Submission for Review. Specifically:

- Direct Payment
    <img src="/assets/CVy9b3yPwowEzOxMT7tj84egpsd.png" src-width="2938" src-height="1316" align="center"/>
    <img src="/assets/IWFIb2zybohNVWxoPkJjsAIGp8e.png" src-width="2972" src-height="1332" align="center"/>
    <img src="/assets/H2aPbViWwozchNx4jGNjD33Wpkd.png" src-width="2958" src-height="1250" align="center"/>
    <img src="/assets/UQ62b72uwoB0OgxMzDHjxBoJp2e.png" src-width="3054" src-height="1387" align="center"/>
    - After selecting the target record, click the "Direct Payment" action in the operations column.
    - In the popup, enter the bank name, bank account, channel, and other information. In the payment details, optionally include bank statement information.
    - After submission for review, the record flows to the "Direct Payment Pending" page. The reviewer must perform work order approval; once approved, the payment is completed.

- Pack for arrangement
    <img src="/assets/ZGEib6cepoeq9xxRwfjj3VS4p9d.png" src-width="3038" src-height="1326" align="center"/>
    <img src="/assets/IAWabWTrVoE42TxeSmzjyGplpub.png" src-width="2990" src-height="1306" align="center"/>
    <img src="/assets/YOSdbRorQojWpQxcPHzjc2s5peT.png" src-width="2960" src-height="1282" align="center"/>
    <img src="/assets/LMdSbYBrOoAqdSxUTmSj9QYRp3d.png" src-width="2986" src-height="1398" align="center"/>
    <img src="/assets/I4LSb8sFsopai9xsW1HjpIWOpmb.png" src-width="2952" src-height="1394" align="center"/>
    - After selecting target records, click the batch operation "Pack and Submit for Review." If items need to be removed from the batch after packing, this can be done in the popup. Fill in the withdrawal bank and channel information, and the batch will enter the review workflow.
    - After submission for review, the record flows to the "Batch Pending" page. The reviewer must perform work order approval; once approved, the payment is completed.
    - Note: Due to withdrawal volumes and channel limitations, some withdrawal channels require manual status updates. Users must click "View and Update Results" to enter the details page and perform manual updates (batch updates supported).
    - After payment completion, the withdrawal file can be downloaded and saved locally.

<img src="/assets/Qvy3bvrwOoUZW5x8FVyjRl1Hpfb.png" src-width="2994" src-height="1270" align="center"/>

- Indicator Cards

If withdrawal volumes are large, the system's categorized display cards can be used for more refined operations; the left-right arrangement of the indicator cards reflects the sequence of business operations.

<img src="/assets/I00TbXlMJolXcVxmBEojpvjJpGe.png" src-width="2970" src-height="1334" align="center"/>

- Check Printing

If the user uses checks for withdrawals and needs to print checks after the process completes, click "Check Printing" at the top right of the page to enter the secondary page.

<img src="/assets/GXYzbrGgeoXK0ix93fpjUAwSpMf.png" src-width="2970" src-height="1304" align="center"/>

The page displays all check-method withdrawal records. After selecting the target record, the user may choose to reprint or perform the initial print (supports bulk printing), enter the check number, and click "OK to Print."

<img src="/assets/H2WrbgqrJolp4KxvKc8jayM3pUg.png" src-width="3020" src-height="1352" align="center"/>

## Withdrawal Reconciliation

To ensure the accuracy of fund flows and reduce the risk of financial loss, bank transactions must be reconciled against the system's withdrawal records. Bank statements originate from two sources: (1) API integration (automatically generated), and (2) manual import. (See the "Withdrawal Bills" section for details.)

- Reconciliation: Users may refresh bank transactions for a selected period. The system will automatically match bank transactions with system withdrawal records. After reconciliation, focus on the "Reconciliation Result" column in the list; any discrepancies require further investigation.

<img src="/assets/L4nIbSA95oEG1rxehRljPJnVpub.png" src-width="2976" src-height="1332" align="center"/>

<img src="/assets/UWOmbS2HGoOqlrxD38XjCoiqprg.png" src-width="2938" src-height="1324" align="center"/>

## Exceptional Withdrawals

If an anomaly is detected during withdrawal processing or reconciliation, it can be handled on the Exception Withdrawals page (batch operations supported). The system provides four resolution methods:

- Mark as Successful
- Mark as Failed
- Retry Payment (regenerate the withdrawal order and attempt payment again)
- Resubmit (resubmit the original withdrawal order to the channel for payment)

<img src="/assets/QSwabuiXOo7kcKxEwPkjgS0yppA.png" src-width="2962" src-height="1322" align="center"/>

After selecting a specific resolution method, the record flows to the "Pending Approval" page; business personnel must re-verify the result, and upon approval the exceptional withdrawal record is considered resolved.

<img src="/assets/PuLub4pgioYRkExmiP1jYxMgp3f.png" src-width="2984" src-height="1336" align="center"/>

## Withdrawal Records

The Withdrawal Records page logs the full lifecycle status of withdrawals. Users may query, export, and perform other operations at any time.

<img src="/assets/S7t3bvtRIoWLsfxMv4OjzhFIpDW.png" src-width="2936" src-height="1312" align="center"/>

## Withdrawal Bills

Refers to all debit transaction records of the brokerage firm's bank accounts and serves as an important basis for verifying withdrawal operations.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu: Cash Management- Bank Statement - Withdrawal </p>
</div>

- If the bank has integrated direct bank-enterprise connection, the system can automatically obtain bank statements.
    - If direct integration is unavailable, statements must be manually imported by back-office staff according to the bank's statement template.

<img src="/assets/S9WobCPWaoyAA4xzs0IjRTdfpWc.png" src-width="2988" src-height="1300" align="center"/>

<img src="/assets/MWAZblqnqoQpWWx0WDDjBt4ip0f.png" src-width="2990" src-height="1336" align="center"/>

- For bank statements obtained automatically or imported manually, if an entry is confirmed to be redundant and its match status is "Unmatch," it may be manually deleted.

<img src="/assets/XeKBbEofwoSqDBx6huNjTljsptg.png" src-width="2970" src-height="1310" align="center"/>

- When parsing bank statements, negative amounts may appear for bank debits, which could cause the system to incorrectly classify them as debits. If such cases are identified, they can be manually reclassified as credits.

<img src="/assets/RrW9bS7t9op1TExDLSsjfvDrprg.png" src-width="2968" src-height="1304" align="center"/>

- Unmatched withdrawal orders require manual association and tagging according to the actual debits.
    - If a tag is later found to have been applied in error, a "Reject" operation can still be performed.

<img src="/assets/TIpIbAvJ7o95NSxwRp0jcUeLpOb.png" src-width="2982" src-height="1396" align="center"/>

<img src="/assets/NocMbEknpoO0DAxemnJjH4M6p9Q.png" src-width="3048" src-height="1202" align="center"/>

