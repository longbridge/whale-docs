---
title: System Overview
slug: 2a05bab0c2cc81d3a79adcc4e47cf1e0
sidebar_position: 2
---


# System Overview

# I. System Overview

This guide details the full back-office operational workflow for cryptocurrency deposit services, covering record generation, query and tracking, exception handling, cancellation operations, and refund processes, to ensure standardized operations by back-office personnel and to safeguard regulatory compliance and fund security.

# Prerequisites

- Back-office operators must log in to the WBO back-office system using their assigned account credentials and navigate to the "Virtual Asset Management - Deposit/Withdrawal - Deposit" module.
- Confirm that the account has the required permissions for "Deposit Application", "Deposit Records", "Cancel", and "Refund". If permissions are lacking, contact an administrator to request access.

# II. Operational Instructions

## Cryptocurrency Configuration

Prior to customer deposits, configure the supported deposit cryptocurrencies.

<img src="/assets/Qs63bldUWoUhdqxC9LpjVuKFpsd.png" src-width="1280" src-height="614" align="center"/>

## Customer Wallet Address

Completing wallet address verification before deposits is a critical prerequisite to ensure asset security.

<img src="/assets/Hgj7bqIK6oFrMVxqUYJj85BCpgd.png" src-width="1280" src-height="610" align="center"/>

## Deposit Operations

<b>Request Reception and Record Generation</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: WBO - VA Clearing Management - Deposits &amp; Withdrawals - Deposit Application</p>
</div>

- After the client submits a deposit request, the system automatically receives the request information and generates a unique deposit record (including record number, client securities account, deposit currency, amount, destination address, transaction hash (TXID), request time, status, and other core information).
- If an abnormal or problematic deposit application is encountered, back-office operators may delete it directly within the system.

<img src="/assets/LUNXbD0T4om70DxLiR9jAo4rplW.png" src-width="1280" src-height="336" align="center"/>

<b>Deposit Record Query and Tracking</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: WBO - Virtual Asset Management - Deposit/Withdrawal - Deposit Records</p>
</div>

- <b>Multi-condition search</b>: Supports filtering by record number, customer number, creation time, status, and other criteria to quickly locate target records.
- <b>Detail tracking</b>: Click a single record to view details, including address verification and the block confirmation progress corresponding to the transaction hash, enabling real-time tracking of the entire deposit process.

<img src="/assets/PAYtbvktAoeU9Tx9QudjsDgSpef.png" src-width="2446" src-height="964" align="center"/>

<b>Cancellation of Non-Deposited Records</b>

- <b>Prerequisite</b>: Applicable only to records with the status "Wallet Address Under Verification" (i.e., deposit requests for which the blockchain network has not begun confirmations and the assets have not been transferred). Records in other statuses cannot be cancelled.
- <b>Steps</b>:
    1. In the deposit records list, locate the target record to be cancelled and click the "Cancel" button;
    2. A confirmation dialog will appear; enter operation remarks (e.g., "Duplicate user request", "Incorrect address"), then confirm the cancellation again;
    3. Upon successful cancellation, the record status will be updated to "Cancelled", and the system will automatically retain a cancellation operation log (including operator, operation time, and remarks) to support subsequent traceability.

<img src="/assets/MMKDbz6nQoboX4xMiwCjWYoJpjb.png" src-width="2480" src-height="696" align="center"/>

<b>Refund Process After Successful Deposit</b>

- <b>Prerequisite</b>: Applicable only to records with the status "Credited" (i.e., assets have been successfully credited to the platform and the user requests a refund or the system requires a forced refund). Verify the user's identity and the legitimacy of the refund request.
- <b>Steps</b>:
    1. Navigate to the "Deposit" module, search for the target credited record, and click the "Request Refund" button;
    2. Complete the refund information: enter the user's specified refund address (must match the user's identity verification information), select the corresponding network (consistent with the deposit network), and verify the refund amount (defaulted to the deposit amount; adjustments are allowed but must state the reason for adjustment);
    3. Execute the refund: the back office clicks "Execute Refund", the system generates a refund transaction hash and broadcasts it to the blockchain network;
    4. Track the refund status: monitor the block confirmation progress of the refund record in real time; upon confirmation completion, update the deposit record status to "Refunded" and retain a full refund process log;
    5. Notify the user: once the refund succeeds, notify the customer offline.

<img src="/assets/BJjcbxXoRocUVRxxSqjjdw2upig.png" src-width="2452" src-height="732" align="center"/>

