---
title: Quick Start
slug: UbQ2wCsRyiWNrpknpa3ccCvunac
sidebar_position: 1
---


# Quick Start

# Overview

WHALE’s funds management system provides deposit capabilities for multiple scenarios. Users may submit clients’ deposit applications, approve deposits, track exception records during the deposit process, and query all historical records within the system.

# Quick Start

Deposit functionality has been implemented in accordance with actual business requirements and is divided into two posting criteria: posting based on deposit applications and posting based on bank statement information.

# Prerequisites

You must obtain the following authorizations in order to use the system features normally.

<table header_row="1">
<colgroup>
<col width="275"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>Permission Name</p></th><th><p>Permission Description</p></th></tr>
</thead>
<tbody>
<tr><td><p>Permission to manage fund parameters, bank statements, and deposits</p></td><td><p>Permission to manage bank statements; deposit and withdrawal records/methods; bank cards; foreign exchange operations; funding guidelines; and permission to manage fund parameters.</p></td></tr>
</tbody>
</table>

# Deposit Configuration

# Fund Parameter Configuration

## 1. Corporate Bank Accounts

Before a client deposit can be accepted, the corresponding corporate bank account must be added in the backend and the available deposit methods under that corporate account must be configured.

<img src="/assets/Lgaqb4w6So4HpGxcDqgjeb6Qpbc.png" src-width="3772" src-height="1392" align="center"/>

<img src="/assets/OibdbZ9Zgoiescx87QLjzwj2pzW.png" src-width="2584" src-height="2372" align="center"/>

## 2. Currencies

Before a client deposit can be accepted, deposit currencies must be configured.

<img src="/assets/IkWQbiV4poXDFnxuVjNjMaOcpRh.png" src-width="3834" src-height="1317" align="center"/>

# Client Bank Cards

Clients’ bank card information must be configured with the broker. Cards may be added either by the client via the client App or by backend staff.

<img src="/assets/XFAmbhrDjovTE0xVDNSjFNQNpyb.png" src-width="3816" src-height="974" align="center"/>

Single entry

<img src="/assets/XKUubsOoNoaYDExGTkyjxMFJp0c.png" src-width="3252" src-height="2832" align="center"/>

Bulk addition

<img src="/assets/QNPwbIit3oToeTxhMevjxIySp3e.png" src-width="1692" src-height="1770" align="center"/>

# Bank–Securities Account Opening

If a client intends to deposit via bank–securities transfer, a bank–securities account opening is required. If the client has submitted a bank–securities account opening request, the corresponding record will be visible in the backend.

<img src="/assets/VBLQbVpj4ovY5Qxy43CjlLW7p5d.png" src-width="3284" src-height="1078" align="center"/>

# eDDA Authorization

If a client intends to deposit via eDDA, eDDA authorization is required. Once the client completes eDDA authorization, the corresponding record will be visible in the backend.

<img src="/assets/Jzhjb7tg7o8HB1xSnfaje3Yepff.png" src-width="3292" src-height="1268" align="center"/>

# Bank-Related Information Configuration

The commonly used bank enumerations, country/region enumerations, and bank region list enumerations required when configuring client or corporate bank account information can all be configured in the backend.

## 1. Issuing Bank

<img src="/assets/QcKgbW46YoRpkHx2ikZjV5h6p5e.png" src-width="3292" src-height="1254" align="center"/>

## 2. User Card Binding – Country/Region

<img src="/assets/XH5jb43AGoH7m7xcq7pjU7MypYc.png" src-width="3288" src-height="1086" align="center"/>

## 3. Bank Region List

<img src="/assets/AL0TbJn2No536nxplq0juz4Dp4c.png" src-width="3286" src-height="1246" align="center"/>

# Deposit Operations

# Deposit Process for Clients with Opened Accounts

## 1. Posting Based on Deposit Application

## 1.1 Create Application

A deposit application is a prerequisite for client deposits. It primarily records client information, the client’s bank card, the receiving bank, deposit amount, deposit currency, and supporting vouchers. Applications may originate in two ways: submitted by the client via the client interface, or created in the backend by operations staff according to the client’s instructions.

1. Client-submitted deposit application, backend query

<img src="/assets/BHjsbsmfZoZvJHx8OwSjrVw0pfe.png" src-width="3810" src-height="1238" align="center"/>

1. Backend manual “New”

Backend operations staff create deposit applications manually according to the client’s instructions.

Select the client and enter information such as the bank, deposit method, deposit amount, deposit currency, vouchers, and remarks.

<img src="/assets/PWrebiVInoZua5x8W90jFuSXpyd.gif" src-width="2086" src-height="994" align="center"/>

## 1.2 Posting Operations

After receiving a deposit application, backend posting may be performed in one of two ways: “Direct Posting” and “Voucher Association.”

1. Direct Posting

The backend operator locates the corresponding application within the deposit application page, verifies the information, and may submit the posting directly.

Select the “Direct Posting” action in the operations bar, and confirm the following items in the pop-up dialog:

- Whether the submitted application information contains any errors
- Add the bank statement corresponding to this application (if the bank statement is not yet available, approval may be submitted first and statement information supplemented later)

<img src="/assets/Xyk0bjCzFoINt0xngEdjmuYbp8c.png" src-width="3814" src-height="1770" align="center"/>

- When the deposit method is a cheque, the operator may choose to freeze the funds based on actual business requirements. If freezing is selected, the operator may manually adjust the expected unfreeze date.

<img src="/assets/I1ruboUtxoXTkBxmq7mjDmBbpoH.png" src-width="3334" src-height="1770" align="center"/>

1. Voucher Association

- If multiple applications are to be posted, the operator may enter the voucher association page to perform batch posting.

<img src="/assets/GQhObxAOdoPRuPx1B6NjR09FpZf.png" src-width="3316" src-height="1212" align="center"/>

- On the voucher association page, all applications awaiting posting are filtered and displayed for operator selection; after verification, submit to post.

<img src="/assets/Jp96bpjedoZHmPxhYWIjUsYtpYd.png" src-width="2404" src-height="1134" align="center"/>

- When the deposit method is a cheque, the operator may choose to freeze the funds based on actual business requirements. If freezing is selected, the operator may manually adjust the expected unfreeze date.

<img src="/assets/CqkBboHyFoabEIxVT1oj4fGzprc.png" src-width="2454" src-height="1352" align="center"/>

## 1.3 Deposit Approval

Enter the Deposit Approval tab, locate the corresponding record, and select “Approve” to generate a work order; once approved, the deposit will be posted.

<img src="/assets/D018bCNMmoIHhCx5rryjOGdvpgc.png" src-width="3280" src-height="754" align="center"/>

<img src="/assets/ZpDsbrgsEo6f82xhRAFjVxK4pBf.png" src-width="3310" src-height="1960" align="center"/>

<img src="/assets/ZwEabxUNbo1iymxk5GMjNI5ZpBh.png" src-width="3264" src-height="954" align="center"/>

- If there are multiple work orders requiring approval, select the corresponding records to perform batch approval.

<img src="/assets/QMQZbcGrbocGj6xmFmxjqP50pGf.png" src-width="3398" src-height="1836" align="center"/>

- During deposit approval, when the deposit method is a cheque, information regarding whether the cheque is frozen will be displayed.

<img src="/assets/Grx5bKTaCowKFExtU0njruVtpbP.png" src-width="3300" src-height="1738" align="center"/>

## 2. Posting Based on Bank Statement

Post based on the funds actually received.

## 2.1 Obtain Arrival Information

Arrival information is categorized into two methods: deposit statements and bank instant messages.

1. Deposit statements

After bank funds have arrived, the system can obtain bank transaction records directly via the bank API.

<img src="/assets/KndmbcUoUo6yO8xybSTjqH2TpBe.png" src-width="3778" src-height="738" align="center"/>

If a bank API integration is not in place, statements may be imported manually in the backend using the online banking template.

<img src="/assets/MCDIbLwTBodeHkxy8t9j585tpRf.png" src-width="3290" src-height="842" align="center"/>

<img src="/assets/IdcubZM9GoaEwOxsl7gjUN0Opvc.png" src-width="3306" src-height="1766" align="center"/>

<img src="/assets/PKL2bOTHGoHWr0xsTYvjYYtipjc.png" src-width="3308" src-height="1768" align="center"/>

<img src="/assets/NKtsb7hJHoHQWPxaDwUjn7fspEc.png" src-width="3314" src-height="1760" align="center"/>

1. Bank instant messages

For bank–securities transfers and eDDA, after posting is successful, the bank sends an instant posting message via API. The system automatically receives and matches the user for automatic posting without manual intervention.

## 2.2 Manual Association

For bank statements imported manually, manual association is required. Two association scenarios are distinguished: associating to a deposit application and associating to a bank card.

1. Associate to deposit application

- Applicable to two types of clients: clients who already have an account and have submitted a deposit application, and account-opening deposits authenticated by transfer verification.

Step one: select the bank transaction record and click Associate to enter the secondary page.

<img src="/assets/RGIob9fcXoIaZZxSOWZj7BFJpSh.png" src-width="3282" src-height="1100" align="center"/>

Step two: on the secondary page, associate the selected bank transaction record to the corresponding deposit application. After confirming the reconciliation results on the page, click “Associate” and the record will flow to the approval node.

<img src="/assets/MHnDbcbkvodBMLxIgb3jNcnHpge.png" src-width="3288" src-height="1748" align="center"/>

- When the deposit method is a cheque, the operator may choose to freeze the funds based on actual business requirements. If freezing is selected, the operator may manually adjust the expected unfreeze date.

<img src="/assets/OA17buBjgoKBjkxty0SjzEsEpDe.png" src-width="3276" src-height="2528" align="center"/>

1. Associate to bank card

If the client did not submit a deposit application and the backend operator did not create one, the bank transaction may be directly associated with the client’s bank card for posting.

<img src="/assets/KmFlbOYvKoKNVqx2NhFjzR9Upof.png" src-width="3302" src-height="2376" align="center"/>

1. Directly associate to securities account

- Applicable to two types of clients: clients who have an open account but did not submit a deposit application, and account-opening deposits authenticated by cheque verification.

Bank transactions may be directly associated to the securities account for posting.

<img src="/assets/Y4Jsb2Hc3oUVWlx7Kzyj3mF9pQg.png" src-width="3212" src-height="1766" align="center"/>

## 2.3 Deposit Approval

For specific operations, refer to “1.3 Deposit Approval.”

# Deposit Process for Clients in Account Opening

- If the client selects transfer verification as the authentication type, posting must be performed via a deposit application. For details, see “1. Posting Based on Deposit Application.”
- If the client selects cheque verification as the authentication type, because the client has not submitted a deposit application via the client interface, posting must be performed based on bank statements. For details, see “2. Posting Based on Bank Statement.”

Although backend operations staff may have completed the deposit process, if the client’s account has not yet been activated, this scenario requires separate handling.

Step one: enter the “Deposits During Account Opening” tab page (deposits on this page have already been approved and are awaiting account activation).

<img src="/assets/Dc6ubL713odrTAxscyIjV8Dip7b.png" src-width="3246" src-height="1094" align="center"/>

Step two: review the account opening status and the fund-credit status in the list. If the client’s account ultimately fails to open, the account opening status will be shown as “Not Approved,” and you should proceed to step three.

<img src="/assets/LgWhbGggfo48vWxwZ7pj1W5Npqd.png" src-width="3276" src-height="1226" align="center"/>

Step three: select the deposit record for the client whose account opening failed and click “Reject.” The deposit process must then be restarted from the beginning.

<img src="/assets/GQ2wbsCn0ovROIxrpl6jeQ1dpY9.png" src-width="3276" src-height="1226" align="center"/>

