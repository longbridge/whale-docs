---
title: System Introduction
slug: OTqUwwHVqixBKLkXXrZcRUo5nRH
sidebar_position: 5
---


# System Overview

# System Introduction

# Overview

The Whale Broker Management module provides management of broker–client relationships as well as administration functions for brokers and teams.

## Relationship Management

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Broker Management &gt; Relationship Management</p>
</div>

Supports querying the clients under a specific broker or directly searching for an individual client.

<img src="/assets/GkrzbVAyRoA9MqxKmbGjJQEJpRe.png" src-width="3002" src-height="1492" align="center"/>

Once a client is found, the following actions are available: [Unlink Broker Relationship] and [Transfer to Another Broker].

When changing or assigning a broker for a client, the system can optionally send an email notification to the client.

<img src="/assets/JMoSbaXLxod8ttxxVjQjkXACpXd.png" src-width="3002" src-height="1492" align="center"/>

## Teams and Brokers

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Broker Management &gt; Teams and Brokers &gt; Team Management</p>
</div>

<img src="/assets/SsuXb6WMqo3WDsxUMhZjtDappAg.png" src-width="3002" src-height="1492" align="center"/>

First, you can add broker teams under "Team Management" in Teams and Brokers. The system currently classifies team types as: Broker / Marketing Team.

<img src="/assets/C4ugb50WxoX35HxKudHjVew2pid.png" src-width="3002" src-height="1492" align="center"/>

After successful creation, you may perform actions in the operations area on the right of the record display: [Details] / [Edit] / [Freeze].

<img src="/assets/ULDVbNEsRoCag7xGCY8juKGmpRd.png" src-width="3002" src-height="1492" align="center"/>

## Broker Management

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Broker Management &gt; Teams and Brokers &gt; Broker Management</p>
</div>

Click [New] in the upper right to create broker information. After successfully creating a broker, the system will automatically synchronize and create a backend user account (the broker account can log in to the WTT client).

<img src="/assets/Rvd3b5S4JoPVvAxy8l1jCRiopvc.png" src-width="3020" src-height="1602" align="center"/>

Note: When creating a broker, the broker’s brokerage email address is validated as unique.

After successful creation, you may perform actions in the operations area on the right of the record display: [Details] / [Edit] / [Freeze] / [Subordinate Management].

<img src="/assets/U6m9b3T7Lo0rY6x77tajUUy0pNf.png" src-width="3020" src-height="1602" align="center"/>

[Edit] — When modifying a broker’s commission plan, the system supports optionally synchronizing the commission plan configuration for the broker’s clients.

<img src="/assets/JPtvbcuBBoMjzRxn1iRj5KsnpOe.png" src-width="1066" src-height="1560"/>

[Freeze] — After freezing a broker, that broker will be unable to use the account to log in to WTT.

[Subordinate Management] — This function has been migrated to “Identity Management &gt; Personnel Management,” where you can locate the corresponding broker user to edit “Data Permissions.”

<img src="/assets/BmOybI6QHomaQHxBm5EjWtkDpEd.png" src-width="3010" src-height="1500" align="center"/>

New broker configuration in Broker Management: when opening an account, if a broker is not manually assigned, the system will preassign the account to a specified broker.

<img src="/assets/QgGcbhNYKoBh7mxRfjTjCgdFpFf.png" src-width="3010" src-height="1500" align="center"/>

The query component supports searching by broker ID or broker name.

## Commission Plan Settings

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Broker Management &gt; Commission Management</p>
</div>

This feature sets or modifies brokers’ commission share plans, providing post-calculation commission queries, share management, and commission plan configuration.

<img src="/assets/QhYdbtmbModiBdxqjyMjWqUnpYf.png" src-width="3010" src-height="1500" align="center"/>

### Add New Commission Plan

Click [Add] in the upper right to create a new commission share plan.

<img src="/assets/SQdPb1ltBomYRuxe6rFjU1y1pOd.png" src-width="3010" src-height="1500" align="center"/>

First, complete the primary information for the plan.

Special field descriptions:

- Commission target setting (brokerage firm or broker): determines which object the configured algorithm applies to (which one is calculated first).
- Allow loss field: determines the handling when the share amount exceeds the commission; if loss is allowed, the calculated amount may exceed the commission.

<img src="/assets/SkMxbEuGGoxVBixdKmOja4olpYf.png" src-width="3010" src-height="1500" align="center"/>

After adding rules, you can configure plan rules separately for stocks, options, and other instruments.

Field descriptions:

- Billing method: determines whether the share amount is calculated as commission (OR trade amount) * rate.
- Tiered calculation base: determines whether commission (OR trade amount) is used to divide tiers.
- Cross-tier handling method: determines whether to apply a single rate uniformly to the calculation base or to split the calculation across multiple segments.

Notes:

- If the commission currency and the commissionable currency differ, the share amount will be converted to the commission currency according to the exchange rate.
- Tier ranges are left-open (exclusive) and right-closed (inclusive).
- Relationship between tiered minimum/maximum charges and the main page minimum/maximum charges:
    - After the tiered calculation produces an overall share amount, it is then compared with the main page limits.

<img src="/assets/NSZHb9frdoA1gfxAPcVjPQN0pZb.png" src-width="3010" src-height="1500" align="center"/>

Example 1: Set a commission plan at 1% of total commission, with a minimum charge of 2 HKD and a maximum charge of 50 HKD.

<img src="/assets/BeOZbJ3u7ozTRrxB86cjURl4ppe.png" src-width="3010" src-height="1500" align="center"/>

Example 2: Tiered commission based on the trade amount of a single contract, splitting the trade amount across each tier for separate calculation.

For a trade amount of 5,000: 1,000 is charged at the first tier rate; 4,000 (5,000 − 1,000) is charged at the second tier rate.

<img src="/assets/Mr7sb4r8joAWuIx4m5DjLPXWp06.png" src-width="3010" src-height="1500" align="center"/>

Example 3: Tiered commission based on the trade amount of a single contract, where the trade amount falls into a specific tier and is charged uniformly at that tier’s rate.

For a trade amount of 5,000: the entire amount is charged at the second tier rate.

<img src="/assets/TiMfbVVbLo6h4KxsmOPjV007p6g.png" src-width="3010" src-height="1500" align="center"/>

### Automatic Assignment of Commission Plan at Account Opening

After configuring a commission plan, you can set a default commission plan on the Broker Management page.

If, at account opening, a user is assigned to that broker, the user’s default commission plan will be set to that plan.

<img src="/assets/Vg40bYa9RoadY5xy6j0j7mAQpDd.png" src-width="3014" src-height="1590" align="center"/>

### Set Customer-Level Commission Plans

In Billing and Commission Management, you can modify customers’ commission plans in bulk or on an individual basis.

<img src="/assets/XK2ybRCm0oX9hxxfizqjpi8Apbe.png" src-width="3016" src-height="1500" align="center"/>

## Commission Detail Query Operation Instructions

### Commission Detail Query

Menu: Broker Management &gt; Broker Commission Management &gt; Commission Share Details Query

After the day-end process completes successfully, the system will trigger the commission calculation task (an asynchronous task).

<img src="/assets/NWQPb8Zn8ompDrxyWcHjqQTzp2j.png" src-width="3016" src-height="1500" align="center"/>

Querying the commission share amounts for a broker’s clients is performed using accounting date and transaction currency as query criteria. The system supports daily, monthly, and annual periodic report queries (Report Management – Commission Reports). Click [Export] to download the query results.

<img src="/assets/LRO8bLHnSos4pJxhFPFjtl3hpag.png" src-width="3016" src-height="1500" align="center"/>

