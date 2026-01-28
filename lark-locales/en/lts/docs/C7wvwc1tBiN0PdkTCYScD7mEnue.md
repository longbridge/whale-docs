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

<img src="/assets/ExfQbQW9hoIyXZx5R8JjvRH8p1g.png" src-width="3584" src-height="1738" align="center"/>

## New Commission Package

Click [New] in the upper-right corner to create a new commission split package.

<img src="/assets/GHDIbcd6To2GxmxnXUMjaT9epnh.png" src-width="3584" src-height="1738" align="center"/>

First, complete the primary package information.

Special field descriptions:

- Commission recipient setting (Brokerage Firm or Broker): determines which object the configured algorithm applies to (which one is calculated first).
- Allow Losses field: determines the handling when the commission distribution amount exceeds the commission; if losses are allowed, the calculated amount may exceed the commission.

<img src="/assets/F78obx10BotqL2xZ5RsjOFm2pXb.png" src-width="3584" src-height="1738" align="center"/>

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

<img src="/assets/BPXHbIxtloc0dYxYKhVjuJV2plh.png" src-width="3584" src-height="1738" align="center"/>

Example 1: Set a commission package at 1% of total commission, with a minimum charge of 2 HKD and a maximum charge of 50 HKD.

<img src="/assets/I5qdb1j2QoPpjtxK8K7jv06dpzX.png" src-width="3584" src-height="1738" align="center"/>

Example 2: Tiered commission based on the transaction amount of a single contract, splitting the transaction amount across each tier for separate calculation.

For a transaction amount of 5,000: 1,000 is charged at the first tier rate, and 4,000 (5,000 − 1,000) is charged at the second tier rate.

<img src="/assets/Z9mzbngHSoJfQ5xAtecjTzx7pLb.png" src-width="3584" src-height="1738" align="center"/>

Example 3: Tiered commission based on the transaction amount of a single contract, applying the rate of the tier in which the transaction amount falls to the entire amount.

For a transaction amount of 5,000: the second tier rate is applied to the entire amount.

<img src="/assets/MfPsbQiZAogVtsxbXYIjKL9tpmh.png" src-width="3584" src-height="1738" align="center"/>

## Automatically Assign Broker Package at Account Opening

After setting up commission packages, you can configure a default commission package on the Broker Management page.

During account opening, if a user is assigned to that broker, the user's default commission package will be set to the broker's default package.

<img src="/assets/Bynnb3Ivco9y49xeW7EjBsbFpJd.png" src-width="3584" src-height="1738" align="center"/>

## Set Client-Level Commission Packages

In Billing and Commission Management, you can modify clients' commission packages in bulk or on a per-client basis.

<img src="/assets/NBC0bQKrRojB2qxzhydjTFYnpfd.png" src-width="3584" src-height="1738" align="center"/>

# Commission Details Inquiry Instructions

## Commission Details Inquiry

Menu: Broker Management &gt; Broker Commission Split Management &gt; Commission Split Details Query

After the daily cutover completes successfully, the system will trigger an asynchronous commission calculation task.

<img src="/assets/V9RebrKq1ol7MkxGhk7jcy4Ap1g.png" src-width="3584" src-height="1738" align="center"/>

When querying the commission package fees for clients under a broker, use the accounting date and transaction currency as query criteria. Periodic reports are supported on a daily, monthly, or yearly basis (Reports Management – Commission Report). Click [Export] to export the query results.

<img src="/assets/AbWqbdtMRo04WNxwYZ1j2Y1Dpmg.png" src-width="3584" src-height="1738" align="center"/>

