---
title: Quick Start
slug: VSILwnfItiP6L8kcBWzcFptAnve
sidebar_position: 3
---


# Quick Start

# Overview

WHALE's funds management system provides multi‑scenario withdrawal capabilities, allowing users to submit clients' withdrawal requests, approve withdrawals, track exception records during the withdrawal process, and query all historical records.

# Quick Start

## Prerequisites

1. Configure company bank account withdrawal methods

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: Service Parameter &gt; Fund Parameter &gt; Company Bank Account</p>
</div>

<img src="/assets/QHnebiNeAolvWNxXfd9jEHXUp9f.png" src-width="1280" src-height="574" align="center"/>

- Click [Create] to enter the secondary page and add withdrawal channel information (the combination of the brokerage firm's payment bank account and withdrawal method, for example: ICBC Asia 001 — check transfer)

<img src="/assets/Zdt7bR3seotqGzx7PUPjeNSRp5c.png" src-width="1280" src-height="567" align="center"/>

1. Enable the withdrawal function for the currency

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: Service Parameter &gt; Fund Parameter &gt; Currency Setup</p>
</div>

<img src="/assets/CbHobX9ZhoJ5oWxcJyCjCae7p8g.png" src-width="1280" src-height="574" align="center"/>

- Click [Add] to enter the secondary page and set the withdrawal function option to "Yes"

<img src="/assets/HCkeb3YIHoYQQMxJtO1jUCXyprc.png" src-width="1280" src-height="588" align="center"/>

## Processing Withdrawal Requests

Based on the client's withdrawal requirements, withdrawal requests can be manually created on the page. If a user has already submitted a withdrawal request via the app, the record will be displayed automatically on this page.

### Manual Withdrawal

Click [Manual Withdrawal]; in the popup select the client &gt; select the currency &gt; amount &gt; bank card &gt; remarks and other information, then click [Confirm Withdrawal] to generate the request record (the system will automatically display the withdrawable balance for each currency based on the selected client).

<img src="/assets/N8F5bEXD2oMI8QxH4MvjEXwCpeh.png" src-width="1204" src-height="3012" align="center"/>

### Submit Request

After the request record is generated, the backend risk control system will automatically validate its legitimacy, which takes about five seconds; once the risk control check passes, click [Submit] to proceed to the withdrawal steps.

<img src="/assets/Drlabh2vOonrJUxwRhJjElA0pUg.png" src-width="2988" src-height="1202" align="center"/>

## Withdrawal Processing

After a withdrawal request is submitted, the personnel responsible for executing the withdrawal will flexibly handle the method according to actual circumstances. The system provides two withdrawal modes: Direct Disbursement and Batch Withdrawal. In addition, the user's corresponding withdrawal channels may have daily limits; therefore, a daily withdrawal limit monitoring prompt, management, and viewing functions have been established to reduce withdrawal exceptions.

### Direct Disbursement

<b>Step 1:</b> Go to the Pending category under the Withdrawal Processing tab, select the target record, verify that the information is correct, and then click [Direct Disbursement].

<img src="/assets/Ld0hbXjmUosj6lxHSjOjfkpopXK.png" src-width="1280" src-height="573" align="center"/>

<b>Step 2:</b> In the popup, enter the bank name, bank account, channel, and bank transaction reference (if any), then click [Submit for approval] (if ticket approval is not required, this can be configured — see Step 5).

<img src="/assets/Rkinbg4hpo7Rf8xAqgYj0nRwptc.png" src-width="1280" src-height="573" align="center"/>

<b>Step 3:</b> Go to the ticketing system, locate the record that was submitted for review, and perform the audit.

<img src="/assets/HfYFbZS3yoUdB1xpmNGjCRTXpHQ.png" src-width="1280" src-height="540" align="center"/>

<img src="/assets/EtwabIEYHoocloxcOgVjE81sp7f.png" src-width="1280" src-height="581" align="center"/>

<b>Step 4:</b> In the Direct Disbursement pending category, select the target record, click [View and Update Result] to manually update the withdrawal status; setting it to "Successful" completes the disbursement.

<img src="/assets/FpF2bRPLqoLTGHx3oLhjRYO2pvh.png" src-width="3320" src-height="1020" align="center"/>

<img src="/assets/W1JQbcBIeo0tQDxUUD9jMPmepsf.png" src-width="3316" src-height="1728" align="center"/>

<img src="/assets/WgP5b4fjZoVkq6xWjnfjC0kEpib.png" src-width="3324" src-height="592" align="center"/>

<b>Step 5:</b> If ticket approval is not required, you may disable the switch under Business Parameter Settings &gt; Withdrawal Rules &gt; More Settings.

<img src="/assets/Q4B7bgcnDoMGisxHQgPjvVZmpdg.png" src-width="3816" src-height="1780" align="center"/>

### Batch Processing

<b>Step 1:</b> In the Pending category, select multiple target records and click [Pack for arrangement].

<b>Step 2:</b> In the popup, fill in the relevant bank information and click [Submit for approval].

<img src="/assets/NdxybRFvtoKKXFxRfuyjy5Urpys.png" src-width="1280" src-height="558" align="center"/>

<b>Step 3:</b> Go to the Batch Pending category, select the batch you just created, click [Approve], and approve it in the prompted ticket.

<img src="/assets/TKGSbsTbmoZhyZxDLJOjRWZsp9p.png" src-width="1280" src-height="559" align="center"/>

<b>Step 4:</b> Click [Direct update] on the batch record to open the popup, then manually update each detailed record in the batch to "Successful" according to the actual disbursement situation (batch operations are supported).

<img src="/assets/ZEoubkV7Uo67Hex360KjWXlcpLh.png" src-width="1280" src-height="599" align="center"/>

<b>Step 5:</b> Go to the ticketing system to re‑audit the results you just updated; once approved, the disbursement is complete.

<img src="/assets/DDF5b92emoVqUSxNhmQj7dvHpXb.png" src-width="1280" src-height="554" align="center"/>

<img src="/assets/FVNGbKvydoHwzzx5EPajFMYapRb.png" src-width="3746" src-height="1758" align="center"/>

### Daily Limit (Configuration)

Because a user's withdrawal channel may have a daily limit, a daily withdrawal limit monitoring prompt and management functions have been established to reduce withdrawal exceptions.

<b>Step 1:</b> Go to Service Parameter &gt; Withdrawal Rules Management&gt; Daily Limits; the page currently displays the configured limit records.

<img src="/assets/WFH6b8weuoUi0OxxNtxjyA6npni.png" src-width="1280" src-height="325" align="center"/>

<b>Step 2:</b> To add a new limit, click [Add], fill in the corresponding fields in the popup, and click [ok].

<img src="/assets/DCJMbJm5OoDJC0xrfpzjQyRSp0g.png" src-width="3802" src-height="1800" align="center"/>

- To adjust an existing record's limit, click [Adjust] in the actions column, choose Increase or Decrease in the popup, and enter the amount.

<img src="/assets/Ov3QbntAfoNambxRZVxje3C6pXg.png" src-width="3006" src-height="1352" align="center"/>

- To modify other fields, click [Edit] in the actions column to open the popup and make changes.

<img src="/assets/IvB3bWtHOoMb5Tx2w1JjjtsjpMT.png" src-width="3006" src-height="1312" align="center"/>

- To delete a record, select the record and click [Delete] in the actions column.

<img src="/assets/INBPbw1KmoiXdgxyEN5jJaMepOb.png" src-width="2994" src-height="868" align="center"/>

- To view limit changes, navigate to Service Parameter &gt; Withdrawal Rules Management  &gt; Daily Limit ChangesT

<img src="/assets/SmghbT2drog5kgxREPNjV0Lnpqe.png" src-width="1280" src-height="575" align="center"/>

## Handling Exceptional Withdrawals

In practice, withdrawals may be rejected by banks for various reasons; such records will be marked as exceptions and require manual handling.

<b>Step 1:</b> On the Pending page, select the target record and click [Handle]; in the popup choose one of the four available options and click [OK].

<img src="/assets/JhSDbB6Oto4d7BxjAP1jq3pNpyb.png" src-width="3000" src-height="1354" align="center"/>

<b>Step 2:</b> Go to the Pending Review page, select the target record, and perform a recheck.

<img src="/assets/FGIIbdqBEojHDsxtYzKjy58npxh.png" src-width="2996" src-height="1310" align="center"/>

