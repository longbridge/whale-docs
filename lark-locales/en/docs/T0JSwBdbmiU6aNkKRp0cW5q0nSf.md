---
title: System Introduction
slug: T0JSwBdbmiU6aNkKRp0cW5q0nSf
sidebar_position: 2
---


# System Overview

# System Introduction

## I. System Overview

The securities deposit function refers to the operation by which investors transfer funds into their securities accounts via a securities trading platform. Investors can conveniently deposit funds into their securities accounts and participate in securities trading and investment activities anytime and anywhere.

The Whale system includes features such as deposit applications, deposit details, streamlined import parameter settings, and email notifications to brokers. The workflow supports the approval requirements of different roles and effectively enhances the accuracy of securities deposits. The overall process architecture is as follows:

<img src="/assets/G47mbaSqgoKqjIx0f6KjnzGmpmd.png" src-width="2162" src-height="1476" align="center"/>

## II. Operating Instructions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu entry: Securities Management - Securities Deposit</p>
</div>

### Deposit Application

Securities deposit applications are initiated by the client and comprise four main sections: broker information, account information, security details, and remarks. WHALE users can manually assist clients with securities deposit processing and perform actions such as rejecting applications, submitting them for approval, and notifying brokers based on the client's submitted application.

- Manual Deposit Entry

This applies when a user contacts a back-office operator to manually create a transfer-in application record. The operator must sequentially enter the client's security information, account information, and the detailed security records.

<img src="/assets/PVlQbvM3eo2B5Cxx9MSj5CKspKh.png" src-width="2076" src-height="2469" align="center"/>

- If the transferred shares are physical stock, select "Is Physical Stock" = Yes.
- Reject (bulk operation available): If the client's securities deposit application contains errors or the user indicates the application is invalid, the operator may perform the [Reject] action.
- Notify Broker: Because transfer-in operations require cooperation from the counterparty broker, users typically contact the broker to ensure timely handling. This function provides an email-sending capability and displays to the user whether the broker has been notified based on the email delivery results, enabling the user to proceed with subsequent business processing.
    - Select the broker institutions to which the email should be sent; the system will automatically populate the broker's email address for the operator to verify.
    - Select the securities deposit application details related to the target broker (applications that have already been sent will be excluded).
    - Preview the email content and, after confirming accuracy, click Send.
    - View the sending status on the Email Sending Records page.

<img src="/assets/LdelbcFdfoHMUsxQLvBjnabWpBh.png" src-width="2858" src-height="1330" align="center"/>

<img src="/assets/TE7ebFRtSoYLj4xlY6qj8QTkpUb.png" src-width="2856" src-height="1332" align="center"/>

<img src="/assets/YlUybu6jmoyUKfxZKjMjsI6bpLf.png" src-width="1280" src-height="599" align="center"/>

<img src="/assets/RZmab2nAwos6YCxkwNWjBAkTpyg.png" src-width="1280" src-height="624" align="center"/>

- Submit (bulk operation available): After the operator's preliminary review confirms correctness, the application may be submitted to the next-node operator for review — the deposit entry operation.
- Edit: If, during processing the transfer application, the operator learns from the client whether the broker has been notified or not, the operator can use the [Edit] button to modify the notification status so that the broker's awareness matches the actual situation.

<img src="/assets/B3spb6ZAIoI5iLxGtbdjsm5rpgh.png" src-width="3830" src-height="1380" align="center"/>

- Metric Cards

If a broker's securities transfer-in volume is high, the system's categorized display cards can be used for more granular operations. The left-to-right arrangement of the metric cards reflects the sequence of business operations.

<img src="/assets/CQWKby2dbo7UDNxLEsPj3wzWpJd.png" src-width="3818" src-height="1780" align="center"/>

### Deposit Details

Because a single deposit application may contain multiple security detail records, the deposit processing reviewer must carefully verify each deposit detail; only after approval may the deposit be entered.

- Edit: If, during processing of security details, a specific detail record submitted by the user is found to be erroneous, it may be corrected via the [Edit] button after confirmation with the client.
    <img src="/assets/PBSabTCIvohKmnxoK3ajihnepye.png" src-width="3768" src-height="1058" align="center"/>
    - Editable fields: stock name, custodian code, sub-account number, security detail quantity, transfer cost, and settlement remarks.

- Delete: If the user indicates that a specific submitted detail will no longer be transferred, the target detail record can be removed via the [Delete] button.
- Generate SI Instructions (bulk operation available): Because transfer-in operations require necessary SI information to be entered in CCASS, the "Generate SI Instructions" function can automatically save this required information as a file for users to upload to CCASS, avoiding manual entry in the CCASS system. Generated SI instructions can also be viewed and exported under the "SI Instruction List" menu.

<img src="/assets/GQ7EbovIKoh1PtxPGObjxPw1ptd.png" src-width="3782" src-height="850" align="center"/>

<img src="/assets/RSRqbYv8hoDH4Sxx0pAjOSpKpue.png" src-width="3822" src-height="1796" align="center"/>

- Edit SI Instructions (bulk operation available): If modifications are required to generated SI information, select [Edit SI Info] to correct the target fields.

<img src="/assets/QUhobOBfBog1gmxvN2SjIwLopAg.png" src-width="3800" src-height="1340" align="center"/>

- Process — Successful Submission / Failed Submission (bulk operation available): If the operator determines that a detail has no issues, they may select [Process] and choose "Successful Submission"; otherwise, choose "Failed Submission".
    <img src="/assets/C1yTb8zp6osCXux9lmSjgDJ5pob.png" src-width="1280" src-height="381" align="center"/>
    <img src="/assets/EJDHbfYrJo8PJqxQyUrj4sb7pWe.png" src-width="3802" src-height="1256" align="center"/>
    - After processing, the workflow proceeds to the next node and requires review in the Work Order Center; once approved, the stock is successfully deposited.
    - If the transferred securities are physical shares, the operator may manually set an unfreeze time during processing; the physical shares will automatically unfreeze at the specified time. If no time is set, they will unfreeze immediately upon workflow approval.

- Approve (bulk operation available): After the processing result is submitted, an [Approve] button appears in the action column; selecting it opens the Work Order approval page.
    <img src="/assets/SQHhbWxkJo8o0nx02M7jNG0Opcf.png" src-width="3900" src-height="1863" align="center"/>
    - After processing, the workflow proceeds to the next node and requires review in the Work Order Center; once approved, the stock is successfully deposited.

- Submit Unfreeze (bulk operation available): If the client transferred physical shares and an unfreeze time was set during processing, but the client wishes to process the physical shares before the scheduled time, a manual unfreeze may be submitted. The submission requires another approval; once approved, the shares will be immediately unfrozen.

<img src="/assets/RfLabzLR4oCJ2uxfVJhj7Lutpid.png" src-width="3806" src-height="1132" align="center"/>

<img src="/assets/F4FobYzdboGRmkx7lfKjlUNHptf.png" src-width="3836" src-height="1776" align="center"/>

### Deposit Restrictions

To improve the success rate of securities acceptance and prevent transfers of delisted stocks, transfer restrictions can be enforced in advance by setting a stock blacklist. The system provides both single-entry restriction and bulk restriction functions:

- Single-entry Restriction

<img src="/assets/S8Wvb3fCjoxKZVxiuEpj0lLGpCh.png" src-width="3814" src-height="1856" align="center"/>

- Bulk Restriction

Entry

<img src="/assets/OGJvbzeXpoREyexpLlojgT2kpIh.png" src-width="3824" src-height="1844" align="center"/>

Template

<img src="/assets/JrXdbSvTqoyRWcxhG8Xj6LoopUc.png" src-width="652" src-height="372" align="center"/>

### Email Sending Records

After the user notifies the broker of the target deposit application, the corresponding email records will be saved for subsequent issue tracking.

<img src="/assets/W4XNb7bN7oJc2AxsGd9j1EsSpM5.png" src-width="3834" src-height="1856" align="center"/>

