---
title: Commission Split Management
slug: C7wvwc1tBiN0PdkTCYScD7mEnue
sidebar_position: 2
---


# Revenue Sharing Management

# Commission Split Management

# Applicable Scenarios

Commission package configuration

Querying and modifying broker commission packages at the client level

Commission details inquiry

# Precondition

Broker-related settings completed

# Commission Package Configuration Instructions

Menu: Broker Management &gt; Broker Commission Split Management

Menu: Broker Management &gt; Teams and Brokers &gt; Broker Management

This function is used to set or modify brokers' commission split packages and provides post-calculation queries, split management, and commission package configuration.

<img src="/assets/RjWPb0R88oYenexugMrjoAQupMb.png" src-width="3010" src-height="1500" align="center"/>

## New Commission Package

Click [New] in the upper-right corner to create a new commission split package.

<img src="/assets/MiZsbK8ENo3gqAxisucjLs2ipgf.png" src-width="3010" src-height="1500" align="center"/>

First, complete the primary package information.

Special field descriptions:

- Commission recipient setting (Brokerage Firm or Broker): determines which object the configured algorithm applies to (which one is calculated first).
- Allow Losses field: determines the handling when the commission distribution amount exceeds the commission; if losses are allowed, the calculated amount may exceed the commission.

<img src="/assets/PynMbZajhoT4Nvx6x3ljKoUrpxc.png" src-width="3010" src-height="1500" align="center"/>

After clicking Add Rule, you may configure package rules separately for stocks, options, and other asset types.

Field descriptions

- Billing method: determines whether commission (OR transaction amount) * rate is used to calculate the commission share amount.
- Tier calculation basis: determines whether commission (OR transaction amount) is used as the basis for tier division.
- Cross-tier handling method: determines whether to apply a single rate to the entire calculation basis OR split the basis across multiple tiers for calculation.

Notes:

- If the commission-sharing currency differs from the commission currency, the commission share amount will be converted to the commission-sharing currency according to the exchange rate.
- Tier ranges are left-open (exclusive) and right-closed (inclusive).
- Relationship between tiered minimum/maximum charges and the main page minimum/maximum charges:
    - After calculating an overall commission share amount from tiered charges, it will be compared with the minimum and maximum charges specified on the main page.

<img src="/assets/UawAba738oQRIKxcDeAjq2zZpN6.png" src-width="3010" src-height="1500" align="center"/>

Example 1: Set a commission package at 1% of total commission, with a minimum charge of 2 HKD and a maximum charge of 50 HKD.

<img src="/assets/JJBRbCRbyocmunxvKcpjiQsOpFe.png" src-width="3010" src-height="1500" align="center"/>

Example 2: Tiered commission based on the transaction amount of a single contract, splitting the transaction amount across each tier for separate calculation.

For a transaction amount of 5,000: 1,000 is charged at the first tier rate, and 4,000 (5,000 − 1,000) is charged at the second tier rate.

<img src="/assets/MOHSbZFAToS78Rx34OFjHWZcpzb.png" src-width="3010" src-height="1500" align="center"/>

Example 3: Tiered commission based on the transaction amount of a single contract, applying the rate of the tier in which the transaction amount falls to the entire amount.

For a transaction amount of 5,000: the second tier rate is applied to the entire amount.

<img src="/assets/QHr5bRHFKo5bLoxIGVqjigH8pHd.png" src-width="3010" src-height="1500" align="center"/>

## Automatically Assign Broker Package at Account Opening

After setting up commission packages, you can configure a default commission package on the Broker Management page.

During account opening, if a user is assigned to that broker, the user's default commission package will be set to the broker's default package.

<img src="/assets/TlqHbvsu3oCHLrxtcNdjTjPspOd.png" src-width="3014" src-height="1590" align="center"/>

## Set Client-Level Commission Packages

In Billing and Commission Management, you can modify clients' commission packages in bulk or on a per-client basis.

<img src="/assets/X0znbnzPQoWfk7xyDABjwHaMpof.png" src-width="3016" src-height="1500" align="center"/>

# Commission Details Inquiry Instructions

## Commission Details Inquiry

Menu: Broker Management &gt; Broker Commission Split Management &gt; Commission Split Details Query

After the daily cutover completes successfully, the system will trigger an asynchronous commission calculation task.

<img src="/assets/UIVHbAjUyoNPwMxVSpojHZoHpyc.png" src-width="3016" src-height="1500" align="center"/>

When querying the commission package fees for clients under a broker, use the accounting date and transaction currency as query criteria. Periodic reports are supported on a daily, monthly, or yearly basis (Reports Management – Commission Report). Click [Export] to export the query results.

<img src="/assets/FauZbfMzpo9luLxyIrujHBGUpKe.png" src-width="3016" src-height="1500" align="center"/>

