---
title: System Introduction
slug: HiW6wXbmYiYpnPkuZ3yckwxQnXf
sidebar_position: 2
---


# System Introduction

# System Introduction

## 1. System Overview

A deposit refers to the process by which an investor transfers funds into their securities account. This process involves multiple steps to ensure that funds are transferred into the investor’s account securely and accurately.

The Whale system includes functionalities for processing deposit applications, matching bank transaction records, deposit review, separately handling deposits made during account opening, reconciliation, and deposit record inquiry. In response to regulatory and risk-control requirements, the system is designed with multi-role, workflow-based characteristics to balance high deposit efficiency and low capital risk.

Because different brokerage firms have different requirements for deposits—some requiring rapid deposits while others require precise matching of bank transaction records before posting—the system supports two deposit workflows, as follows:

<img src="" src-width="100" src-height="100" align="center"/>

# Prerequisites

You must obtain the following authorizations to use the system functions properly.

## 2. Operation Guide

# Deposit Configuration

# Funding Parameter Configuration

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameters Settings &gt; Funding Parameters</p>
</div>

1. Company Bank Accounts

Before a customer makes a deposit, the corresponding company bank accounts must be added in the backend and the deposit methods under each company bank account must be configured.

<img src="/assets/GDy5bVDoDo90Ugxub5mj299RpBf.png" src-width="3286" src-height="998" align="center"/>

Operation button descriptions:

- Create: Add company bank account information for the brokerage as needed.
- Edit: Manually edit existing company bank account information.

1. Currency

Before a customer makes a deposit, the deposit currencies must be configured.

<img src="/assets/Q6APbQFD4osFoNx62xCjuROlp9g.png" src-width="3282" src-height="988" align="center"/>

Operation button descriptions:

- Create: Add currencies as required by the brokerage.
- Edit: Manually edit existing currency entries.

# Customer Bank Cards

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Funds Management &gt; Customer Bank Cards</p>
</div>

Customers must have their bank card information configured with the broker. Bank cards can be added either by the customer via the client app or by the backend.

<img src="/assets/OCFfbxVOwoHxDpxykg8jXnqspWr.png" src-width="3349" src-height="1396" align="center"/>

Operation button descriptions:

- Bulk Add: Add bank card information in batches according to a template.
- Add Bank Card: Add a single bank card.
- Recycle Bin: Display deleted bank card records.
- Set Rejection Reason: Configure reasons for rejecting a bank card.
- Review: Perform backend review of a bank card.
- View Notes: View related notes for a bank card.
- Delete: Delete bank card information.
- Update Deposit Witness Status: Associate the customer’s deposit details to update the bank card’s deposit witness status from “Pending Witness” to “Witnessed.”

# eDDA Authorization

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Funds Management &gt; Customer Bank Cards</p>
</div>

If a customer intends to deposit via eDDA, eDDA authorization is required. Once the customer has authorized eDDA, the corresponding record is available in the backend.

<img src="/assets/M9xYbMS61oqIJvxdgSFjuQaDple.png" src-width="3282" src-height="838" align="center"/>

Operation button descriptions:

- Refresh: Retrieve the latest eDDA authorization records.
- Notes: Configure notes for the authorization record.
- Change Status: Modify the status of an authorization record.
- Delete: Manually delete authorization records that are in-progress.

# Bank-Related Information Configuration

When configuring customer or company bank account information, the “common bank list,” “country/region enumeration values,” and “bank region list enumeration values” used by the system can all be configured in the backend.

## 1. Card Issuing Banks

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Funds Management &gt; App Management &gt; Card Issuing Banks</p>
</div>

<img src="/assets/PkcWbtMWxo2KISxGnWAjRBj3pYe.png" src-width="3284" src-height="762" align="center"/>

Operation button descriptions:

- Create: Add a single entry to the list of common banks for each region.
- Edit: Edit existing entries in the bank list.

## 2. User Card Binding - Country/Region

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Funds Management &gt; App Management &gt; User Card Binding - Country/Region</p>
</div>

<img src="/assets/KV6obF62ioP9C8xAg2DjCJdxpqg.png" src-width="3260" src-height="774" align="center"/>

## 3. Bank Region List

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Funds Management &gt; App Management &gt; Bank Region List</p>
</div>

<img src="/assets/KOy6b0FuYoVLa7x6TOZjtrGZpsl.png" src-width="3290" src-height="978" align="center"/>

Operation button descriptions:

- Create: Add a single bank region list entry.
- Edit: Edit existing bank region list entries.
- Delete: Delete bank region list entries.

# Deposit Guidance Configuration

On the client deposit page, the backend can configure operation guidance and deposit parameters.

## 1. Deposit Guidance

<img src="/assets/HgzfbKN1zote4NxI54fjtNpdp8f.png" src-width="3286" src-height="980" align="center"/>

## 2. Deposit Parameters

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Funds Management &gt; App Management &gt; Deposit Parameters</p>
</div>

<img src="/assets/S62ObkMt2ogAzXxqHtCjlXGWpNb.png" src-width="3260" src-height="1726" align="center"/>

Operation button descriptions:

- Create: Create a single deposit parameter entry.
- Edit: Edit existing deposit parameter entries.
- Delete: Delete deposit parameter entries.
- Publish: Apply the configured deposit parameter to the client display.
- Unpublish: Make the configured deposit parameter unavailable for client display.
- Copy: Quickly create a new deposit parameter by copying an existing one.
- Approval: If deposit parameters are configured to require work order approval, all the above operations will require work order approval after submission.

Multiple Receiving Bank Configuration

- If the client needs to display multiple receiving banks under the same deposit method depending on the customer’s chosen bank, refer to the following configuration screenshot.

<img src="/assets/BX5Tbp1QxosqzwxgIYujaABVpye.png" src-width="3278" src-height="706" align="center"/>

# Deposit Operations

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Funds Management - Deposit</p>
</div>

# Deposit Applications

A deposit application is submitted by the user and includes four main elements: currency, requested amount, receiving bank card, and remarks. WHALE users can manually assist customers with deposits into securities accounts and may reject submitted applications, submit them for approval, and perform other operations.

- Create (Deposit Application)

Applicable when an operator contacts backend staff to perform manual deposit posting. The operator must sequentially select the customer and enter the deposit currency, method, receiving bank, amount, remarks, and supporting documents (if any).

<img src="/assets/Q9u0bHncioUqMkx3nfzjDNU3p3g.gif" src-width="2074" src-height="1000" align="center"/>

- Reject: If the customer’s submitted deposit application information is incorrect or the user deems the application invalid, the operator may perform the Reject operation.
- Delete: If the customer’s submitted deposit application information is incorrect or the user deems the application invalid, the operator may also delete the target record via the Delete button.
- Edit: If an issue is discovered with an application prior to submission, the operator may correct it via the Edit button after confirming with the customer. Edits require work order approval; changes take effect only after approval.
    - Editable fields: currency, deposit method, receiving bank, amount, deposit fee, remarks, supporting documents (re-upload).

<img src="/assets/W0h3bXvRqoge2lxiAQTjoBKhpjb.gif" src-width="2076" src-height="998" align="center"/>

Operations

- Direct Posting: Because different broker users have different timeliness requirements for deposits, Direct Posting helps users process deposit workflows quickly. After receiving the customer’s deposit application, the user needs only to supplement bank transaction information to complete the posting. Direct Posting is preset to require approval; if approval is not needed, contact operations to configure.
    - Requires Approval: In the Direct Posting dialog, confirm that the information is correct and click [Submit for Approval]; the record will flow to the Deposit Review page and will be posted after approval.
    - No Approval Required: In the Direct Posting dialog, confirm that the information is correct and click [Confirm Posting] to post directly.

Requires Approval

<img src="/assets/MAQKbegAxoLYLNxhuThj0xnfphe.png" src-width="1678" src-height="1764" align="center"/>

No Approval Required

<img src="/assets/IcMkb6ND8ovDcwxXXXkjw1lgp7c.png" src-width="1688" src-height="1754" align="center"/>

- Voucher Association: If the posting operation involves multiple applications, you may enter the Voucher Association page to perform batch postings.

<img src="/assets/TgvFbDIdMoMybExpGayjsltQpSd.png" src-width="3774" src-height="1000" align="center"/>

On the Voucher Association page, all applications awaiting posting are filtered and presented for operator selection; after verification, submit to post.

<img src="/assets/F0pCbLzsUojev5xWsdvjgfMApjd.png" src-width="3324" src-height="1634" align="center"/>

# Deposit Matching

The data on this page come from deposit entries in bank statements. If a brokerage’s business rules require matching bank transaction records to deposit records before posting, and bank transaction information has been synchronized to the system, operators can manually process such records on the Deposit Matching page. Processing methods are divided into two main categories: Associate (match and post) and Deposit Return.

- Associate: For bank statement deposit records that the system cannot automatically match, operators can follow the system’s prompts to confirm and then proceed with posting or other actions.
    - The Associate page will auto-compare fields to match users by name; after confirming accuracy, click [Associate].

<img src="/assets/Onh6bHWJboSaTGxvBIPjaptvpVc.png" src-width="3818" src-height="1842" align="center"/>

<img src="/assets/O9Qqb03FLoStSIx87x4jrsuXpGd.png" src-width="3904" src-height="1950" align="center"/>

```text
- If the system’s preselected match is incorrect, use [Custom] to manually associate the bank transaction to the correct customer. Association can be made via the deposit application or the securities account number.
```

<img src="/assets/CTKlbqCUjoeyhJx3eUAjMb4DpTd.png" src-width="3308" src-height="1776" align="center"/>

<img src="/assets/YfJzbAgCPoNIQNxjizhjaBt6pOg.png" src-width="3308" src-height="1750" align="center"/>

Deposit Return: If for various reasons a deposit cannot be credited to the customer’s securities account, use this function to process a refund. The operator must enter the customer’s bank card information, confirm accuracy, and click [Confirm] to flow the record to the Deposit Review page for approval.

<img src="/assets/XipzbdLZOoxFlpxjUN9jdJjoppe.png" src-width="2436" src-height="1326" align="center"/>

Withdrawal Return: Because the Deposit Matching page’s data come from inflows in bank transaction records, if a customer’s withdrawal is rejected by the bank and appears as an inflow, the operator should associate the withdrawal’s transaction reference and process the record using the [Withdrawal Return] function.

<img src="/assets/N1PvbiCdGoRS0UxVKdsj1HgLpoc.png" src-width="2366" src-height="1234" align="center"/>

# Deposit Review

After operators process records on the Deposit Matching page based on bank transaction inflows, downstream review personnel will approve the processed results before posting can occur. For deposits associated with normal postings where the securities account was still under the customer’s account at the time of deposit, the backend will perform a separate approval for such records.

- Account Opening in Progress: Select the target record and click [Approve] to enter the details page, verify the information, and initiate a work order approval.

<img src="/assets/V4m6bWrPNoHOluxZVm8jgvwlpvc.png" src-width="3334" src-height="1598" align="center"/>

- Account Opened: Select the target record and click [Approve] to enter the details page, verify the information, and approve.

<img src="/assets/SkWpbNlm3oqXmTxibkRjPi0Ipsb.png" src-width="3318" src-height="1598" align="center"/>

- Deposit Return: Select the target record and click [Approve] to summon the approval work order; after confirming the information is correct, approve to proceed.

<img src="/assets/I59mbPPEkozRw0xM7Uoj8c5opPb.png" src-width="3330" src-height="1596" align="center"/>

- Withdrawal Return: Select the target record and click [Approve]; after confirming the information is correct, approve directly—no work order approval process is required.

<img src="/assets/G5vPbBLfwoPt7hxdiYojWNkUpmo.png" src-width="3318" src-height="1598" align="center"/>

# Bank‑Securities Deposit

After bank‑securities account opening, users can deposit via the bank‑securities channel. When the system receives a bank notification, it will automatically match the user and post the deposit without manual intervention.

<img src="/assets/KLdubRPd0oLwsrx1dnrjnV5yprc.png" src-width="2854" src-height="1074" align="center"/>

# eDDA Deposit

After eDDA authorization is completed, users may deposit via eDDA. When the system receives a bank notification, it will automatically match the user and post the deposit without manual intervention.

<img src="/assets/TXeUbklLUorRJWx0HxpjJxtTp2g.png" src-width="2820" src-height="1048" align="center"/>

# FPS (Faster Payment System)

For FPS transfers, after the bank statement is received, the system can automatically match the bank statement entries with deposit applications and, if matched, automatically post the deposit.

<img src="/assets/LCtdbMh8eoi0tfxYJmEjXfnxptc.png" src-width="2324" src-height="1070" align="center"/>

# Deposits During Account Opening

- If the customer selects transfer verification as the verification type, deposits must be processed via deposit applications; see “Deposit Applications” for details.
- If the customer selects cheque verification and the client app did not submit a deposit application, the bank transaction record must be used as the basis for posting; see “Deposit Matching” for details.

Because deposit workflows and account-opening workflows can run concurrently, deposits may be posted while the account-opening process is still in progress. For such deposit records, users can track the corresponding account-opening status on this page.

Users can view the real-time status under “Account Opening Status.” If the customer’s account-opening process fails, it can be [Rejected] (batch operations are supported).

<img src="/assets/DvxublF2NoCrI1x3FQjjQqCmpxb.png" src-width="3392" src-height="1693" align="center"/>

# Deposit Reconciliation

To ensure the accuracy of fund flows, business operations must compare bank transaction records with the system’s deposit records to improve deposit accuracy. Bank transaction records originate from two sources: ① API integration (automatically generated), and ② manual import.

- Reconciliation: Users may refresh bank transactions for a target period; the system will automatically match bank transactions with the system’s deposit records. After the reconciliation completes, review the “Reconciliation Result” column in the list; if discrepancies exist, further investigation and handling are required.

<img src="/assets/PWNJbIH2TolVdmxUYX0j5IoVpXf.png" src-width="3336" src-height="1770" align="center"/>

<img src="/assets/FHsZb9Zn4opZKhx75dgjJcUqpXu.png" src-width="3828" src-height="1870" align="center"/>

# Deposit Records

The Deposit Records page logs the full lifecycle status of deposits. Users may query, export, or import records at any time.

- If a user performed a Direct Posting deposit without entering bank transaction information, they can bulk import bank transaction records on this page via [Import Bank Transactions].

<img src="/assets/BOHrblMoQomr0Vx4jeVjbhRbpWg.png" src-width="2804" src-height="1056" align="center"/>

- For cheque deposits that have been frozen, they may be manually unfrozen in the backend before the “Estimated Unfreeze Time,” or allowed to be automatically unfrozen by the system.

<img src="/assets/KHcTbIYCno7CIbxYq8xjNma2p2f.png" src-width="1640" src-height="367" align="center"/>

- After submitting a manual unfreeze request, it must await work order approval.

<img src="/assets/IsLDbFeTgolJDMxvWPYjYMLJpHe.png" src-width="1622" src-height="470" align="center"/>

