---
title: Quick Start
slug: VSILwnfItiP6L8kcBWzcFptAnve
sidebar_position: 3
---


# Quick Start

# Quick Start

# Overview

WHALE's funds management system provides multi‑scenario withdrawal capabilities, allowing users to submit clients' withdrawal requests, approve withdrawals, track exception records during the withdrawal process, and query all historical records.

# Quick Start

## Prerequisites

1. Configure company bank account withdrawal methods

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Business Parameter Settings &gt; Funding Parameters &gt; Company Bank Account</p>
</div>

<img src="/assets/S5WybMhFSojSwzxlLmQjptSIp9g.png" src-width="2844" src-height="1304" align="center"/>

- Click [New] to enter the secondary page and add withdrawal channel information (the combination of the brokerage firm's payment bank account and withdrawal method, for example: ICBC Asia 001 — check transfer)

<img src="/assets/YR5Wbo3XmoEXZ7x4WLpjqtMEpie.png" src-width="2846" src-height="1330" align="center"/>

1. Enable the withdrawal function for the currency

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Business Parameter Settings &gt; Funding Parameters &gt; Currencies</p>
</div>

<img src="/assets/UHz0bgZF0o3RL1xzebHjwtfcpBe.png" src-width="2858" src-height="1318" align="center"/>

- Click [New] to enter the secondary page and set the withdrawal function option to "Yes"

<img src="/assets/YuCFbB8ZZooieKxxivZjw9aRppe.png" src-width="2864" src-height="1330" align="center"/>

## Processing Withdrawal Requests

Based on the client's withdrawal requirements, withdrawal requests can be manually created on the page. If a user has already submitted a withdrawal request via the app, the record will be displayed automatically on this page.

### Manual Withdrawal

Click [Manual Withdrawal]; in the popup select the client &gt; enter the currency &gt; amount &gt; bank card &gt; remarks and other information, then click [Confirm Withdrawal] to generate the request record (the system will automatically display the withdrawable balance for each currency based on the selected client).

<img src="/assets/Rk4ibVYuToQErdxGVpoj9ao5pTT.png" src-width="3340" src-height="1764" align="center"/>

### Submit Request

After the request record is generated, the backend risk control system will automatically validate its legitimacy, which takes about five seconds; once the risk control check passes, click [Submit] to proceed to the withdrawal steps.

<img src="/assets/I5PcbbP58okHVsxAP1rjUw5bpYx.png" src-width="3322" src-height="1692" align="center"/>

## Withdrawal Processing

After a withdrawal request is submitted, the personnel responsible for executing the withdrawal will flexibly handle the method according to actual circumstances. The system provides two withdrawal modes: Direct Disbursement and Batch Withdrawal. In addition, the user's corresponding withdrawal channels may have daily limits; therefore, a daily withdrawal limit monitoring prompt, management, and viewing functions have been established to reduce withdrawal exceptions.

### Direct Disbursement

<b>Step 1:</b> Go to the Pending category under the Withdrawal Processing tab, select the target record, verify that the information is correct, and then click [Direct Disbursement].

<img src="/assets/YBoObbofTo33M9xqgRojVUCTpwh.png" src-width="3310" src-height="1716" align="center"/>

<b>Step 2:</b> In the popup, enter the bank name, bank account, channel, and bank transaction reference (if any), then click [Submit for Review] (if ticket approval is not required, this can be configured — see Step 5).

<img src="/assets/WZBZbtIrWo26wgxdTPdj51o8p1w.png" src-width="3326" src-height="1776" align="center"/>

<b>Step 3:</b> Go to the ticketing system, locate the record that was submitted for review, and perform the audit.

<img src="/assets/UZdtbElVhoXEUwxzRwtjDom4pUc.png" src-width="3824" src-height="1848" align="center"/>

<b>Step 4:</b> In the Direct Disbursement pending category, select the target record, click [View and Update Result] to manually update the withdrawal status; setting it to "Successful" completes the disbursement.

<img src="/assets/FpF2bRPLqoLTGHx3oLhjRYO2pvh.png" src-width="3320" src-height="1020" align="center"/>

<img src="/assets/W1JQbcBIeo0tQDxUUD9jMPmepsf.png" src-width="3316" src-height="1728" align="center"/>

<img src="/assets/WgP5b4fjZoVkq6xWjnfjC0kEpib.png" src-width="3324" src-height="592" align="center"/>

<b>Step 5:</b> If ticket approval is not required, you may disable the switch under Business Parameter Settings &gt; Withdrawal Rules &gt; More Settings.

<img src="/assets/Q4B7bgcnDoMGisxHQgPjvVZmpdg.png" src-width="3816" src-height="1780" align="center"/>

### Batch Processing

<b>Step 1:</b> In the Pending category, select multiple target records and click [Batch Submit for Review].

<img src="/assets/JMYybS4lRoBfElxP8r6jj2WCpib.png" src-width="3298" src-height="1470" align="center"/>

<b>Step 2:</b> In the popup, fill in the relevant bank information and click [Submit for Review].

<img src="/assets/MUCQb6THWoTnWnx8sQzjFQZ1pRX.png" src-width="3318" src-height="1760" align="center"/>

<b>Step 3:</b> Go to the Batch Pending category, select the batch you just created, click [Approve], and approve it in the prompted ticket.

<img src="/assets/P3wJb98BooWeaxxD9lrje8unpgg.png" src-width="3304" src-height="1024" align="center"/>

<b>Step 4:</b> Click [View and Update Result] on the batch record to open the popup, then manually update each detailed record in the batch to "Successful" according to the actual disbursement situation (batch operations are supported).

<img src="/assets/UIA6bu5yqo96cbxgw7bjJMxXpof.png" src-width="3318" src-height="1764" align="center"/>

<b>Step 5:</b> Go to the ticketing system to re‑audit the results you just updated; once approved, the disbursement is complete.

<img src="/assets/BJOpbJ5b6oYeznxqowWjJ1XDpJc.png" src-width="3808" src-height="1868" align="center"/>

<img src="/assets/OhZQbyqfKolCxWxOMb1jBP9XpGd.png" src-width="3306" src-height="1686" align="center"/>

### Daily Limit (Configuration)

Because a user's withdrawal channel may have a daily limit, a daily withdrawal limit monitoring prompt and management functions have been established to reduce withdrawal exceptions.

<b>Step 1:</b> Go to Business Parameter Settings &gt; Withdrawal Rules &gt; Daily Limit tab; the page currently displays the configured limit records.

<img src="/assets/YXvVbooWcoUEzAxOAiHjiO8Xpcd.png" src-width="3836" src-height="1770" align="center"/>

<b>Step 2:</b> To add a new limit, click [New], fill in the corresponding fields in the popup, and click [Confirm].

<img src="/assets/HxExbAJFvoGKwhxJavxjd6vxpwc.png" src-width="3834" src-height="1858" align="center"/>

- To adjust an existing record's limit, click [Adjust] in the actions column, choose Increase or Decrease in the popup, and enter the amount.

<img src="/assets/H5O9bJ258oNEREx5EjZjO78OpNe.png" src-width="3332" src-height="1756" align="center"/>

- To modify other fields, click [Edit] in the actions column to open the popup and make changes.

<img src="/assets/VWijbjJzNosyNSxhPXEjhW5rpnh.png" src-width="3444" src-height="1848" align="center"/>

- To delete a record, select the record and click [Delete] in the actions column.

<img src="/assets/Kv1sbOLhBov52MxhNyJjc0Ocp0f.png" src-width="3328" src-height="890" align="center"/>

- To view limit changes, navigate to Business Parameter Settings &gt; Withdrawal Rules &gt; Daily Limit Change Table.

<img src="/assets/EeyAbbkCGohxwAxKLcIj2faBpYv.png" src-width="3796" src-height="1832" align="center"/>

## Handling Exceptional Withdrawals

In practice, withdrawals may be rejected by banks for various reasons; such records will be marked as exceptions and require manual handling.

<b>Step 1:</b> On the Pending page, select the target record and click [Handle]; in the popup choose one of the four available options and click [Confirm].

<img src="/assets/LbpObJtVFopZ0xxPQxMj8gfupnc.png" src-width="3322" src-height="1696" align="center"/>

<b>Step 2:</b> Go to the Pending Review page, select the target record, and perform a recheck.

<img src="/assets/MPYNb8LC3o2ocQxaMOujSgUTpGg.png" src-width="3288" src-height="1218" align="center"/>

