---
title: Quick Start
slug: BhdxwdhAbiAKubkVNprcU5pZnru
sidebar_position: 1
---


# Getting Started

# Quick Start

# Overview

The Whale account management module provides comprehensive management and operational capabilities for customer accounts, assisting administrators with account-related tasks.

# Prerequisites

You must obtain the following authorizations to use the system functions normally.

<table>
<colgroup>
<col width="165"/>
<col width="457"/>
</colgroup>
<tbody>
<tr><td><p><b>Permission Name</b></p></td><td><p><b>Permission Description</b></p></td></tr>
<tr><td><p>ClientAccountInfoFull</p></td><td><p>Permissions to manage the account list, BCAN codes, and the Work Order Center</p></td></tr>
</tbody>
</table>

# Account List

## Query Account Information

You can query the status information of all opened customer accounts.

<img src="/assets/LaaCbC0GEoX3yxx4NRVjGNQ6pNb.png" src-width="2494" src-height="1520" align="center"/>

In the record operations area on the right, click [Details] to view the customer's detailed basic information. Tab pages are also provided for specific items such as asset transactions / operation records / login devices / agents / related parties.

<img src="/assets/PJlObNDHIol1wMx5UndjC3SdpIy.png" src-width="1698" src-height="1400" align="center"/>

Deposit records in the asset ledger:

<img src="/assets/CQaVbQwseo97VBxfy7lj78a8pQb.png" src-width="1690" src-height="1542" align="center"/>

Historical login device records:

<img src="/assets/MZ43bgSXZo7BuWx6jdgjPlOkp2f.png" src-width="1698" src-height="1404" align="center"/>

This operation also allows changing trading entitlements for customer accounts; click [Trading Permissions] in the record operations area on the right.

<img src="/assets/YbOMbE89SohhSYxO5dZjnGhvpEh.png" src-width="1608" src-height="1546" align="center"/>

This operation also supports account security management actions for customers; click [...] in the record operations area on the right and select the appropriate security action (freeze / unlock / deactivate, etc.).

<img src="/assets/MnERbaOlCo8S4Jxc2yLjXQgzpKc.png" src-width="2922" src-height="1558" align="center"/>

An account identifier filter has been added to the account list to simplify locating records.

<img src="/assets/LOBXbupT5oaeDLxErDJjQL9kpHg.png" src-width="2480" src-height="1272" align="center"/>

# BCAN Codes

## HKIDR Reporting

This operation handles BCAN-CID file uploads under the HKIDR mechanism (supports both automated SFTP uploads and manual uploads).

- Note: BCAN details regarding Zhonghuatong will be provided when system support is enabled.

<img src="/assets/XgG4b15uAoBQoKxi3uhjIrawpcb.png" src-width="2520" src-height="1422" align="center"/>

Reporting logic: the data submitted includes all customers with active accounts, a BCAN code, and a signed authorization agreement. After reporting to the Hong Kong Exchange and receiving the exchange's response files, the BCAN effective status will be synchronized and updated.

1. If the broker is an EP tenant: automatic reporting upload is supported (via the SFTP SDNet/2 line).
    SFTP reporting process:
    - BCAN-CID files are automatically generated between 08:00 AM and 03:00 PM on trading days.
    - Generated files are automatically submitted to the exchange via SFTP.
    - Response files returned by the exchange are displayed in the backend and available for download.
    - The returned comprehensive files are automatically parsed, and customers' BCAN statuses are updated automatically.

<img src="/assets/TgsJbMPG2oJKE0x9950jk3dgptf.png" src-width="2478" src-height="1418" align="center"/>

1. If the broker is an OB tenant: BCAN-CID files must be generated manually and then uploaded to the SFC Web ECP site by staff.
    SFC Wings reporting process:
    <img src="/assets/UM5Xbiy0Woi0ghxBaIhjAgodp6c.png" src-width="2518" src-height="1402" align="center"/>
    - Download the reporting file through this operation.
    - Upload the reporting file on the ECP 2.0 SFC portal and import the comprehensive file returned by the exchange into the backend.

<img src="/assets/T6OIbjLGjos5FyxUlidjekfipWb.png" src-width="1280" src-height="904" align="center"/>

```text
- Import the comprehensive file returned by the exchange into the backend via this operation.
```

<img src="/assets/KC3fbF667oUM9MxRZOLjvRuQp4e.png" src-width="2508" src-height="1414" align="center"/>

Customer BCAN effective status results will be synchronized and updated.

<img src="/assets/PKmHbnLDsoaUjOxoIxijfi8Opsd.png" src-width="2498" src-height="1418" align="center"/>

## BCAN Ranges

This operation can maintain BCAN code ranges either managed by participants in the CCEP role or BCAN ranges assigned to TTEP by an onboarding broker.

Once a BCAN range is assigned, the system will automatically assign a BCAN code to newly opened customer accounts.

For existing customers, LongBridge Technology will assist in bulk assigning BCAN codes prior to the implementation of the real-name registration.

<img src="/assets/HCIfbHpSholiCSx1fV1jKTl0pjc.png" src-width="2504" src-height="938" align="center"/>

Click [Create Range] at the upper right to create a new BCAN range.

<img src="/assets/O5rqbZNDJoYILtxY3uzjusvbpqc.png" src-width="2914" src-height="1410" align="center"/>

Field descriptions are as follows:

# Participant Management

This operation can configure and manage company information of broker participants and assign participant roles (CCEP / TTEP) in the real-name registration process.

<img src="/assets/EBuUbX96CoYVO1xEpOEjLRTWpCe.png" src-width="2914" src-height="1390" align="center"/>

Click [Add Participant] at the upper right to add a new participant record.

<img src="/assets/BzaObuzzgojr41xTXF9j81h4pAf.png" src-width="2914" src-height="1528" align="center"/>

Field descriptions are as follows:

# Work Order Center

## Freeze Customer Account

The backend supports freezing customer accounts. Once frozen, the account cannot log in to the mobile app, desktop client, or other clients.

<b>Single Account Freeze</b>

Click [New Work Order] and select "Freeze Customer".

<img src="/assets/H9NNbynf6oRAxFxKrIXjeRiJp6c.png" src-width="2916" src-height="1516" align="center"/>

In the "New Lock Account" dialog, select the customer ID to be frozen, provide remarks and attachments, then submit the work order request.

<img src="/assets/JehUb7mGcoSWdjxzkCrjKymFpA2.png" src-width="2934" src-height="1390" align="center"/>

Click [Details], or select multiple records to approve work orders individually or in bulk. Once approved, the customer's status will change.

<img src="/assets/RYudb3ufFoSvpsx9A5AjgKNup0g.png" src-width="2904" src-height="1392" align="center"/>

<b>Bulk Customer Freeze</b>

On the Freeze Customer list page, click the "Batch Import" button.

<img src="/assets/XJPmbK3oloTjRLxsFe0jyDDEpme.png" src-width="2930" src-height="1368" align="center"/>

Download the batch import template, fill in the required data, then upload the file in the backend.

<img src="/assets/IV38bhP5Bo22ZPxGGXvj0yULpno.png" src-width="2912" src-height="1540" align="center"/>

After submission, review the data individually or in bulk on the Freeze Customer list page. Once the review is completed, the customers' statuses will be updated.

<img src="/assets/JKw1bFu5coNbWLxZXYSjF0I0pwc.png" src-width="2922" src-height="1418" align="center"/>

The workflow for other customer/account operations is similar to the Freeze Customer process.

