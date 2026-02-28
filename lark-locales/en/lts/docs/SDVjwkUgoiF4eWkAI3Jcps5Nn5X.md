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

<img src="/assets/UDOYbVLMXohMRPxf6tUjdJE9pEg.png" src-width="1280" src-height="636" align="center"/>

Once a client is found, the operations [Unlink Broker Relationship] and [Transfer to Another Broker] are available.

When changing or assigning a broker for a client, optional email notifications to the client are supported.

<img src="/assets/Vvo3bHYiKonVf2xHFKcjia3QpOd.png" src-width="1280" src-height="636" align="center"/>

### Broker Management

Click "Create" in the upper-right corner to create broker information. After successfully creating a broker, the system will automatically synchronize and create a backend user account (the broker account can log in to the WTT client).

<img src="/assets/XZ6Xb6JxHopMHRxz9cRjVEMWphh.png" src-width="1280" src-height="678" align="center"/>

Note: When creating a broker, the broker's brokerage email address is used as the unique identifier for validation.

After creation, operations are available in the action area to the right of the displayed record: "Details" / "Edit" / "Freeze" / "Subordinate Management".

<img src="/assets/VzhrbP4gbo5SeuxNNjfjd7h0pvF.png" src-width="1280" src-height="678" align="center"/>

The "Edit" option, when modifying a broker's commission-sharing package, optionally supports synchronizing modifications to the commission-sharing package configurations of that broker's clients.

<img src="/assets/Hj02bTcRookJgRxdPYGjU40jpLe.png" src-width="874" src-height="1280"/>

"Freeze": after freezing a broker, that broker will be unable to log in to WTT using their account.

"Subordinate Management": this function has been migrated to "Identity Management &gt; Personnel Management", where you can locate the corresponding broker user to edit "data permissions".

<img src="/assets/OqByb3c62oCk2OxysSdjJ3FMprE.png" src-width="3010" src-height="1500" align="center"/>

A new broker configuration has been added under broker management: when opening an account, if a broker is not manually assigned, the system will pre-assign the account to a specified broker.

<img src="/assets/LV3Abn0w8oPBW9xm9SEja3JNpid.png" src-width="3010" src-height="1500" align="center"/>

In the query component: supports searching by broker ID or broker name.

### Add Commission-Sharing Package

You can click "Add" in the upper-right corner to create a new commission-sharing package.

<img src="/assets/UB5mb13JlofJJLx7r1ujsT5XpCg.png" src-width="3010" src-height="1500" align="center"/>

First, fill in the package's primary information.

Field descriptions:

- Commission recipient setting (broker-dealer or broker): determines which entity the configured algorithm applies to (which one is calculated first).
- Allow loss field: determines the handling when the sharing amount exceeds the commission; if losses are allowed, the calculated amount may exceed the commission.

<img src="/assets/O2KxbR16qoqMmLxvpwTjJSprpCv.png" src-width="3010" src-height="1500" align="center"/>

After adding rules, you can set package rules separately for equities, options, and other product types.

Field descriptions:

- Billing method: determines whether the sharing amount is calculated as commission (or trade amount) * rate.
- Tiered calculation basis: determines whether commission or trade amount is used for tier segmentation.
- Cross-tier processing method: determines whether the calculation basis is applied using a single rate across tiers or split into multiple segments for calculation.

