---
title: Quick Start
slug: UbQ2wCsRyiWNrpknpa3ccCvunac
sidebar_position: 1
---


# Quick Start

# Quick Start

# Overview

WHALE’s funds management system provides deposit capabilities for multiple scenarios. Users may submit clients’ deposit applications, approve deposits, track exception records during the deposit process, and query all historical records within the system.

# Quick Start

Deposit functionality has been implemented in accordance with actual business requirements and is divided into two posting criteria: posting based on deposit applications and posting based on bank statement information.

# Prerequisites

You must obtain the following authorizations in order to use the system features normally.

# Deposit Configuration

# Fund Parameter Configuration

## 1. Corporate Bank Accounts

Before a client deposit can be accepted, the corresponding corporate bank account must be added in the backend and the available deposit methods under that corporate account must be configured.

<img src="/assets/QUF1bwTVSoik7fxAhJTjvCvspMb.png" src-width="3738" src-height="1132" align="center"/>

<img src="/assets/FJPrbM3rMoiTywxzVVUjdKu9pgg.png" src-width="2946" src-height="3020" align="center"/>

## 2. Currencies

Before a client deposit can be accepted, deposit currencies must be configured.

<img src="/assets/OrQNbd5yQovr6lx3dYXjMcghprV.png" src-width="3754" src-height="970" align="center"/>

# Client Bank Cards

Clients’ bank card information must be configured with the broker. Cards may be added either by the client via the client App or by backend staff.

<img src="/assets/BM9pbZSZEoSySyxodr4jNVHFpAf.png" src-width="3838" src-height="826" align="center"/>

Single entry

<img src="/assets/ZRlcblk60on2gwx4f2VjFmK3pfe.png" src-width="2876" src-height="2758" align="center"/>

Bulk addition

<img src="/assets/JMVqb0toXou1AMxLexHjzUyApZc.png" src-width="1672" src-height="1604" align="center"/>

# Bank–Securities Account Opening

If a client intends to deposit via bank–securities transfer, a bank–securities account opening is required. If the client has submitted a bank–securities account opening request, the corresponding record will be visible in the backend.

<img src="/assets/MvYnbrZ0xo52jmxkkpEjjpBGptd.png" src-width="3302" src-height="1086" align="center"/>

# eDDA Authorization

If a client intends to deposit via eDDA, eDDA authorization is required. Once the client completes eDDA authorization, the corresponding record will be visible in the backend.

<img src="/assets/SLIkboPO8okNA4xyUt3jEm75pPh.png" src-width="3278" src-height="962" align="center"/>

# Bank-Related Information Configuration

The commonly used bank enumerations, country/region enumerations, and bank region list enumerations required when configuring client or corporate bank account information can all be configured in the backend.

## 1. Issuing Bank

<img src="/assets/P28kbtSmxoOZP8xVHtrj5xDmppd.png" src-width="3254" src-height="1092" align="center"/>

## 2. User Card Binding – Country/Region

<img src="/assets/AWzlb7nEloiSogxFGujjeax7pob.png" src-width="3290" src-height="1236" align="center"/>

## 3. Bank Region List

<img src="/assets/JkUxbL8heoPmXdxZ0FSjzjs9pfc.png" src-width="3300" src-height="1156" align="center"/>

# Deposit Operations

# Deposit Process for Clients with Opened Accounts

## 1. Posting Based on Deposit Application

## 1.1 Create Application

A deposit application is a prerequisite for client deposits. It primarily records client information, the client’s bank card, the receiving bank, deposit amount, deposit currency, and supporting vouchers. Applications may originate in two ways: submitted by the client via the client interface, or created in the backend by operations staff according to the client’s instructions.

1. Client-submitted deposit application, backend query

<img src="/assets/X4JgbNmhtoXQqNxi8zJjfMTzpBh.png" src-width="3786" src-height="826" align="center"/>

1. Backend manual “New”

Backend operations staff create deposit applications manually according to the client’s instructions.

Select the client and enter information such as the bank, deposit method, deposit amount, deposit currency, vouchers, and remarks.

<img src="/assets/V0lQbAco3oj1y4xSj9djGSlWp3g.png" src-width="3822" src-height="1866" align="center"/>

## 1.2 Posting Operations

After receiving a deposit application, backend posting may be performed in one of two ways: “Direct Posting” and “Voucher Association.”

1. Direct Posting

The backend operator locates the corresponding application within the deposit application page, verifies the information, and may submit the posting directly.

Select the “Direct Posting” action in the operations bar, and confirm the following items in the pop-up dialog:

- Whether the submitted application information contains any errors
- Add the bank statement corresponding to this application (if the bank statement is not yet available, approval may be submitted first and statement information supplemented later)

<img src="/assets/CaMFb5vAYoHzi9x1Zkijop2YpPG.png" src-width="3822" src-height="1852" align="center"/>

- When the deposit method is a cheque, the operator may choose to freeze the funds based on actual business requirements. If freezing is selected, the operator may manually adjust the expected unfreeze date.

<img src="/assets/USybbMA0kotOPHxWgW4jDQbIp5w.png" src-width="1659" src-height="855" align="center"/>

1. Voucher Association

- If multiple applications are to be posted, the operator may enter the voucher association page to perform batch posting.

<img src="/assets/Wm9XbfnZJoll9Yx5s0WjBdFtpQO.png" src-width="3774" src-height="1000" align="center"/>

- On the voucher association page, all applications awaiting posting are filtered and displayed for operator selection; after verification, submit to post.

<img src="/assets/T9nWbOZPFojCbIxosQhjVv3qpQU.png" src-width="3324" src-height="1634" align="center"/>

- When the deposit method is a cheque, the operator may choose to freeze the funds based on actual business requirements. If freezing is selected, the operator may manually adjust the expected unfreeze date.

<img src="/assets/YRDmb7ED1o8Z1WxqERCjpGUFplb.png" src-width="1184" src-height="820" align="center"/>

## 1.3 Deposit Approval

Enter the Deposit Approval tab, locate the corresponding record, and select “Approve” to generate a work order; once approved, the deposit will be posted.

<img src="/assets/VpxabI5scoXlPtxmS1djmXc9pef.png" src-width="3312" src-height="762" align="center"/>

<img src="/assets/Q7ymbc8SZoZSOHxW7VKj8rWppIc.png" src-width="3310" src-height="1768" align="center"/>

<img src="/assets/EdMpbSNr5okGfSxNMeUjBhjfpWe.png" src-width="3318" src-height="602" align="center"/>

- If there are multiple work orders requiring approval, select the corresponding records to perform batch approval.

<img src="/assets/NGyWbGp77olaQIxtWZHjSm65prW.png" src-width="3320" src-height="1610" align="center"/>

- During deposit approval, when the deposit method is a cheque, information regarding whether the cheque is frozen will be displayed.

<img src="/assets/EqsAbWPsxonQV3xlJvujFxTwprb.png" src-width="1610" src-height="876" align="center"/>

## 2. Posting Based on Bank Statement

Post based on the funds actually received.

## 2.1 Obtain Arrival Information

Arrival information is categorized into two methods: deposit statements and bank instant messages.

1. Deposit statements

After bank funds have arrived, the system can obtain bank transaction records directly via the bank API.

<img src="/assets/QyEZbZeQEoEuobxqGRmjfB6Upje.png" src-width="3796" src-height="872" align="center"/>

If a bank API integration is not in place, statements may be imported manually in the backend using the online banking template.

<img src="/assets/RwB4bYTFUo62xkxv2MjjLFs4pse.png" src-width="3300" src-height="860" align="center"/>

<img src="/assets/YFJHbWJc3oX3M6xUuz4jXX23pIb.png" src-width="3318" src-height="1700" align="center"/>

<img src="/assets/SRxjbMJBBo8hmfxqheUjHJo3pJb.png" src-width="3312" src-height="1700" align="center"/>

<img src="/assets/SD7Xbr6X0oCuF1x037Wjh6TApHe.png" src-width="3302" src-height="1726" align="center"/>

1. Bank instant messages

For bank–securities transfers and eDDA, after posting is successful, the bank sends an instant posting message via API. The system automatically receives and matches the user for automatic posting without manual intervention.

## 2.2 Manual Association

For bank statements imported manually, manual association is required. Two association scenarios are distinguished: associating to a deposit application and associating to a bank card.

1. Associate to deposit application

- Applicable to two types of clients: clients who already have an account and have submitted a deposit application, and account-opening deposits authenticated by transfer verification.

Step one: select the bank transaction record and click Associate to enter the secondary page.

<img src="/assets/PW6VbJPOnoNUqdxdZO0jtBI2pDf.png" src-width="3320" src-height="1388" align="center"/>

Step two: on the secondary page, associate the selected bank transaction record to the corresponding deposit application. After confirming the reconciliation results on the page, click “Associate” and the record will flow to the approval node.

<img src="/assets/HFFmboQi6onkEMxTEtXjhWXNpqd.png" src-width="3298" src-height="1616" align="center"/>

- When the deposit method is a cheque, the operator may choose to freeze the funds based on actual business requirements. If freezing is selected, the operator may manually adjust the expected unfreeze date.

<img src="/assets/EFlbbDY6howLzQxQFjLjQt5npab.png" src-width="1588" src-height="1161" align="center"/>

1. Associate to bank card

If the client did not submit a deposit application and the backend operator did not create one, the bank transaction may be directly associated with the client’s bank card for posting.

<img src="/assets/Ue78bmCWgoP2pfxq3WrjrR3ZpEf.png" src-width="3310" src-height="1760" align="center"/>

1. Directly associate to securities account

- Applicable to two types of clients: clients who have an open account but did not submit a deposit application, and account-opening deposits authenticated by cheque verification.

Bank transactions may be directly associated to the securities account for posting.

<img src="/assets/A24ubcXs4oBMZCxHmfbjd8uMpWd.png" src-width="3210" src-height="1762" align="center"/>

## 2.3 Deposit Approval

For specific operations, refer to “1.3 Deposit Approval.”

# Deposit Process for Clients in Account Opening

- If the client selects transfer verification as the authentication type, posting must be performed via a deposit application. For details, see “1. Posting Based on Deposit Application.”
- If the client selects cheque verification as the authentication type, because the client has not submitted a deposit application via the client interface, posting must be performed based on bank statements. For details, see “2. Posting Based on Bank Statement.”

Although backend operations staff may have completed the deposit process, if the client’s account has not yet been activated, this scenario requires separate handling.

Step one: enter the “Deposits During Account Opening” tab page (deposits on this page have already been approved and are awaiting account activation).

<img src="/assets/BJ47bxN0KoQEhuxGCyYjhb2epyW.png" src-width="3306" src-height="1752" align="center"/>

Step two: review the account opening status and the fund-credit status in the list. If the client’s account ultimately fails to open, the account opening status will be shown as “Not Approved,” and you should proceed to step three.

<img src="/assets/VNNxbLovoo2oH3xQw99j26uPpKh.png" src-width="3308" src-height="1770" align="center"/>

Step three: select the deposit record for the client whose account opening failed and click “Reject.” The deposit process must then be restarted from the beginning.

<img src="/assets/NDQRb99GCoHB6jx92qqjUoB6peW.png" src-width="3308" src-height="1764" align="center"/>

