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

# Account List

## Query Account Information

You can query the status information of all opened customer accounts.

<img src="/assets/JcFdbQzWxoo8dFxKGXpjFN88pge.png" src-width="3234" src-height="1606" align="center"/>

In the record operations area on the right, click [Details] to view the customer's detailed basic information. Tab pages are also provided for specific items such as asset transactions / operation records / login devices / agents / related parties.

<img src="/assets/WCmUbKToNo19VUxlo7IjmEREp7d.png" src-width="3246" src-height="1228" align="center"/>

Deposit records in the asset ledger:

<img src="/assets/HbugbzOc0oefPVxdVUijGwQlp9g.png" src-width="2384" src-height="1248" align="center"/>

Historical login device records:

<img src="/assets/Y5TSbp2XboX3tbxXDOcjR14CpRb.png" src-width="2420" src-height="744" align="center"/>

This operation also allows changing trading entitlements for customer accounts; click [Trading Permissions] in the record operations area on the right.

<img src="/assets/LTPsbKvNHosIwPxORK9jXNhapqf.png" src-width="1802" src-height="1364" align="center"/>

This operation also supports account security management actions for customers; click [...] in the record operations area on the right and select the appropriate security action (freeze / unlock / deactivate, etc.).

<img src="/assets/VGxHbV5cqorEbtxIzTxjQFvqpGc.png" src-width="3428" src-height="1504" align="center"/>

An account identifier filter has been added to the account list to simplify locating records.

<img src="/assets/OamdbKPXto9CaZxSGFRjGNDAp2g.png" src-width="3248" src-height="808" align="center"/>

# BCAN Codes

## HKIDR Reporting

This operation handles BCAN-CID file uploads under the HKIDR mechanism (supports both automated SFTP uploads and manual uploads).

- Note: BCAN details regarding Zhonghuatong will be provided when system support is enabled.

<img src="/assets/JPeJbAxhSow9HfxedAvjyXyFpeh.png" src-width="1280" src-height="586" align="center"/>

Reporting logic: the data submitted includes all customers with active accounts, a BCAN code, and a signed authorization agreement. After reporting to the Hong Kong Exchange and receiving the exchange's response files, the BCAN effective status will be synchronized and updated.

1. If the broker is an EP tenant: automatic reporting upload is supported (via the SFTP SDNet/2 line).
    SFTP reporting process:
    - BCAN-CID files are automatically generated between 08:00 AM and 03:00 PM on trading days.
    - Generated files are automatically submitted to the exchange via SFTP.
    - Response files returned by the exchange are displayed in the backend and available for download.
    - The returned comprehensive files are automatically parsed, and customers' BCAN statuses are updated automatically.

<img src="/assets/Y5EDbKCNxo3Je6xYkkhjJXTZp6f.png" src-width="3250" src-height="1542" align="center"/>

1. If the broker is an OB tenant: BCAN-CID files must be generated manually and then uploaded to the SFC Web ECP site by staff.
    SFC Wings reporting process:
    <img src="/assets/KxfAbAe3MoKLCExduSij5vMcp8g.png" src-width="3222" src-height="1618" align="center"/>
    - Download the reporting file through this operation.
    - Upload the reporting file on the ECP 2.0 SFC portal and import the comprehensive file returned by the exchange into the backend.

<img src="/assets/T6OIbjLGjos5FyxUlidjekfipWb.png" src-width="1280" src-height="904" align="center"/>

```text
- Import the comprehensive file returned by the exchange into the backend via this operation.
```

<img src="/assets/Z5Wxb7YJoozKGixjXEBjoXnYpIn.png" src-width="3246" src-height="1624" align="center"/>

Customer BCAN effective status results will be synchronized and updated.

<img src="/assets/WVCXbscOYoww5wxHjq7jcl3Kpod.png" src-width="3218" src-height="1228" align="center"/>

## BCAN Ranges

This operation can maintain BCAN code ranges either managed by participants in the CCEP role or BCAN ranges assigned to TTEP by an onboarding broker.

Once a BCAN range is assigned, the system will automatically assign a BCAN code to newly opened customer accounts.

For existing customers, LongBridge Technology will assist in bulk assigning BCAN codes prior to the implementation of the real-name registration.

<img src="/assets/ZwGjbEVLdo6PGrxAI9QjeWWjpbc.png" src-width="3242" src-height="810" align="center"/>

Click [Create Range] at the upper right to create a new BCAN range.

<img src="/assets/RDiwbYqqeogVUsxHbmIjci8Ipvd.png" src-width="3248" src-height="1624" align="center"/>

Field descriptions are as follows:

# Participant Management

This operation can configure and manage company information of broker participants and assign participant roles (CCEP / TTEP) in the real-name registration process.

<img src="/assets/IRAdb84UKouITPxLw7MjG7tKpyg.png" src-width="3132" src-height="1046" align="center"/>

Click [Create Participant] at the upper right to add a new participant record.

<img src="/assets/YwNkbY8nioe1K5xbAkCjRoeJpfh.png" src-width="3248" src-height="1630" align="center"/>

Field descriptions are as follows:

# Work Order Center

## Freeze Customer Account

The backend supports freezing customer accounts. Once frozen, the account cannot log in to the mobile app, desktop client, or other clients.

Single Account Freeze

Click [New Work Order] and select "Freeze Customer".

<img src="/assets/Imrlb5nf0orUv1xhIovjunNtpXf.png" src-width="1998" src-height="824" align="center"/>

In the "New Freeze Customer" dialog, select the customer ID to be frozen, provide remarks and attachments, then submit the work order request.

<img src="/assets/S4sjbtDlUo5bqOx9HD1jJ6JSpcf.png" src-width="1952" src-height="1006" align="center"/>

Click [Details], or select multiple records to approve work orders individually or in bulk. Once approved, the customer's status will change.

<img src="/assets/PjKzb5pKkoNGGcxo1uUjmvrYpXe.png" src-width="1948" src-height="988" align="center"/>

Bulk Customer Freeze

On the Freeze Customer list page, click the "Batch Import" button.

<img src="/assets/X7ffbnjTCojALkxgpQyjMPwVpYb.png" src-width="1960" src-height="854" align="center"/>

Download the batch import template, fill in the required data, then upload the file in the backend.

<img src="/assets/LYQUbnqG2ofbT9xTclhjO8eKp2b.png" src-width="1976" src-height="1000" align="center"/>

After submission, review the data individually or in bulk on the Freeze Customer list page. Once the review is completed, the customers' statuses will be updated.

<img src="/assets/PvtwbonkMoPXHmxHyu7jIVZYpYe.png" src-width="1948" src-height="988" align="center"/>

The workflow for other customer/account operations is similar to the Freeze Customer process.

