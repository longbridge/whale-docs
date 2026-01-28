---
title: Quick Start
slug: SDVjwkUgoiF4eWkAI3Jcps5Nn5X
sidebar_position: 4
---


# Quick Start

# Overview

The Whale account management module provides comprehensive management and operational functions for client accounts, assisting administrators in performing account-related management tasks.

# Quick Start

## Prerequisites

You must obtain the following authorization to use the system's functions properly.

## Broker and Client Relationship Lookup / Operations

Supports querying the clients under a broker by broker, or directly querying an individual client.

<img src="/assets/TOC5bBhalo5gqGxNdMrjkhkmpJb.png" src-width="3346" src-height="1104" align="center"/>

Once a client is found, the operations [Unlink Broker Relationship] and [Transfer to Another Broker] are available.

When changing or assigning a broker for a client, optional email notifications to the client are supported.

<img src="/assets/F9b9biu6kopUtqxPi6PjxjMbpch.png" src-width="3352" src-height="1362" align="center"/>

### Broker Management

Click "Create" in the upper-right corner to create broker information. After successfully creating a broker, the system will automatically synchronize and create a backend user account (the broker account can log in to the WTT client).

<img src="/assets/LrG2bqudIo8kIkxynrBjbwnZpjc.png" src-width="3350" src-height="1690" align="center"/>

Note: When creating a broker, the broker's brokerage email address is used as the unique identifier for validation.

After creation, operations are available in the action area to the right of the displayed record: "Details" / "Edit" / "Freeze" / "Subordinate Management".

<img src="/assets/EJh0bZheeoKIIIxeTPFjde1Pprf.png" src-width="3362" src-height="1562" align="center"/>

The "Edit" option, when modifying a broker's commission-sharing package, optionally supports synchronizing modifications to the commission-sharing package configurations of that broker's clients.

<img src="/assets/Rvu4bLi4conbHsxaedojA5uBp7w.png" src-width="936" src-height="1662" align="center"/>

"Freeze": after freezing a broker, that broker will be unable to log in to WTT using their account.

"Subordinate Management": this function has been migrated to "Identity Management &gt; Personnel Management", where you can locate the corresponding broker user to edit "data permissions".

<img src="/assets/Zg2AbdrSuo0iJ6xmly1jY2kOpGb.png" src-width="3422" src-height="1840" align="center"/>

A new broker configuration has been added under broker management: when opening an account, if a broker is not manually assigned, the system will pre-assign the account to a specified broker.

<img src="/assets/E619bs1RCorCk3xiuLcj4pSNpwh.png" src-width="3370" src-height="1226" align="center"/>

In the query component: supports searching by broker ID or broker name.

### Add Commission-Sharing Package

You can click "Add" in the upper-right corner to create a new commission-sharing package.

<img src="/assets/AGNKbZ2uzoswMdxWyV4jzOChpIf.png" src-width="3584" src-height="1738" align="center"/>

First, fill in the package's primary information.

Field descriptions:

- Commission recipient setting (broker-dealer or broker): determines which entity the configured algorithm applies to (which one is calculated first).
- Allow loss field: determines the handling when the sharing amount exceeds the commission; if losses are allowed, the calculated amount may exceed the commission.

<img src="/assets/ZTFEbwiskoHNDKxpN9ajOrCBp8f.png" src-width="3584" src-height="1738" align="center"/>

After adding rules, you can set package rules separately for equities, options, and other product types.

Field descriptions:

- Billing method: determines whether the sharing amount is calculated as commission (or trade amount) * rate.
- Tiered calculation basis: determines whether commission or trade amount is used for tier segmentation.
- Cross-tier processing method: determines whether the calculation basis is applied using a single rate across tiers or split into multiple segments for calculation.

