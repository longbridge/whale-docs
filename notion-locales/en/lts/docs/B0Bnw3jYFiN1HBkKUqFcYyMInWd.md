---
title: System Introduction
slug: B0Bnw3jYFiN1HBkKUqFcYyMInWd
sidebar_position: 2
---


# System Overview

# System Introduction

# 1. System Overview

The securities transfer-out function is a service within the financial system that allows investors to transfer securities they hold from one account to another, enabling flexible asset reallocation and management.

The WHALE system includes functions such as transfer-out applications, transfer-out details, and email notifications to brokers. The process supports approval requirements for different roles and effectively reduces the risks associated with securities transfer-out operations. The overall process architecture is as follows:

<img src="/assets/TXz2bme00oTkLhxkyewjSXbVpOg.png" src-width="2162" src-height="1476" align="center"/>

## Prerequisites

None

# 2. Operation Instructions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Securities Management - Securities Transfer-Out</p>
</div>

## Transfer-Out Application

The securities deposit application is submitted by the user and consists of four main parts: broker information, account information, security details, and remarks. WHALE users can manually assist clients with securities deposit and, based on the client's submitted application, perform operations such as rejecting, submitting for approval, and notifying the broker.

- Manual Transfer-Out: Suitable for scenarios in which a user contacts a back-office operator to manually transfer out securities. The operator must sequentially enter the client's security information, account information, and detailed security records.
    - After selecting a client, the system will automatically populate all of the client's holdings; the user can select the target records and confirm the quantities to be transferred before confirming the transfer.

<img src="/assets/AGDDbcDlvo0sKOxOLc6jtNi8pcB.png" src-width="2356" src-height="2457" align="center"/>

- Reject (bulk operation supported): If the client's securities transfer-out application contains incorrect information or the user indicates the application is invalid, the operator may perform the [Reject] action.
- Notify Broker: Because transfer operations require cooperation from the counterparty broker, users typically contact the broker to ensure a smooth transfer. This feature provides email-sending functionality and indicates to the user whether the broker has been notified based on the email delivery result, facilitating further processing.
    - Select the broker to which the email should be sent; the system will automatically populate the broker's email address for the operator to verify.
    - Select the relevant securities transfer-out application details under the target broker (applications that have already been sent will be excluded).
    - Preview the email content and click Send once confirmed.
    - View the sending status on the Email Sending Records page.

<img src="/assets/ESUDbzrAjop2TWxA1eVjjhfZpTb.png" src-width="3834" src-height="1856" align="center"/>

<img src="/assets/OhkEbM9hEorheWx8okxjZb6Bp9g.png" src-width="3826" src-height="1856" align="center"/>

<img src="/assets/DtFFbgoPQoZPg9x7e8SjveiPpgc.png" src-width="3820" src-height="1852" align="center"/>

<img src="/assets/Ix5cb2p6Co32u7xWg9WjdUhXp4b.png" src-width="3820" src-height="1832" align="center"/>

- Submit (bulk operation supported): After initial review by the operator confirms there are no issues, the application can be submitted to the next operator for review — the transfer-out operation.
- Edit: If the operator learns from the client that the broker has or has not been notified while processing a transfer-out application, the operator can use the [Edit] button to modify the notification status to ensure that the broker's awareness of the required transfer actions matches the actual situation.

<img src="/assets/KSxZb4G0jor9hAxgg25jM1J2pmc.png" src-width="3836" src-height="1854" align="center"/>

- Indicator Cards

If a broker's securities transfer-out volume is large, the system's categorized display cards can be used for more granular operations. The left-to-right arrangement of the indicator cards reflects the sequence of business operations. The available batch operations include:

<img src="/assets/KDdZbDTABo9P6zxgUuzjc7aRpEd.png" src-width="3834" src-height="1786" align="center"/>

## Transfer-Out Details

Since a single transfer-out application may contain multiple security detail records, the reviewer responsible for executing the transfer-out must carefully verify each detail; only after approval may the transfer be executed.

- Edit: If, when processing security details, a specific record submitted by the user is found to be problematic, the operator may, after confirming with the client, correct it using the [Edit] button.
    <img src="/assets/AlsSb41okoeYnjxhTU6j7d8BpFd.png" src-width="3804" src-height="1074" align="center"/>
    - Editable fields: Custodian ID, Sub-Account ID, Security detail quantity, Remarks

- Modify Transfer Fees: Before transfer-out, the user may, depending on the actual business scenario, choose whether to adjust the client's transfer fees and whether the modified information should be displayed to the client.

<img src="/assets/HK8jb6njzoGdchx1MSzjKbmmp5d.png" src-width="3802" src-height="1398" align="center"/>

- Delete: If, when processing security details, the user indicates that a specific record will no longer be transferred in, the operator may delete the target detail record using the [Delete] button.
- Generate SI Instruction: Because transfer operations require necessary SI information to be entered in CCASS, the Generate SI Instruction function can automatically save this required information as a file for the user to upload to CCASS, avoiding manual entry in the CCASS system. Generated SI instructions can also be viewed in detail, exported, and otherwise managed under the "SI Instruction List" menu.

<img src="/assets/Y4wIbnCXgot2TtxP9xejItQfpGd.png" src-width="3800" src-height="898" align="center"/>

<img src="/assets/IPfdbIZdpoxtHPx3yoEjezeApZy.png" src-width="3818" src-height="1146" align="center"/>

- Edit SI Instruction: If it is necessary to modify an already-generated SI record, click [Edit SI Information] to correct the target fields.

<img src="/assets/GBoWbcAU8ovp8txNneUjfuVQppb.png" src-width="3810" src-height="1326" align="center"/>

- Process — Successful Submission / Failed Submission: If the operator determines that a detail has no issues, they may click [Process] and select [Successful Submission]; otherwise, select [Failed Submission].
    <img src="/assets/Y353bbAj6onA50xbR7sjYNN5pAd.png" src-width="1280" src-height="374" align="center"/>
    - After processing is complete, the workflow moves to the next stage and requires review in the Work Order Center; upon approval, the securities are successfully deposited.

- Approval: After the processing result is submitted, an [Approve] button appears in the operation column; clicking it opens the Work Order approval page.
    <img src="/assets/RBJLbsfGToxJ3YxjADcjLPobpN7.png" src-width="3914" src-height="1957" align="center"/>
    - After processing is complete, the workflow moves to the next stage and requires review in the Work Order Center; upon approval, the securities are successfully deposited.

## Email Sending Records

After the user notifies the broker of the relevant deposit application, the corresponding email records will be saved for subsequent issue tracking.

<img src="/assets/Xcv2bQJFaosxZUx5PsbjPUA8pQb.png" src-width="3830" src-height="1476" align="center"/>

