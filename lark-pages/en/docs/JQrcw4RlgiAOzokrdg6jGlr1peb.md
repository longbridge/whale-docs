---
title: Quick Start
slug: BEYJw66Pei30p3kNwOQcQXtNnCe
sidebar_position: 1
---


# Quick Start

# Overview

The Whale Risk Control System fully supports brokers in managing risk-control related workflows, including credit limit management, Margin Call, margin, trading limits, stress testing, and more.

# Quick Start

## Prerequisites

The following authorizations are required to use the system's features:

## Margin Financing and Credit

If a client opens a margin account and subsequently has assets credited, the system will automatically grant the client a certain credit limit, allowing the client to conduct margin trading. Clients may also apply to adjust their financing limit via the app. In addition, the system supports adjustments to a client’s limit by risk-control personnel.

### 1. Credit Parameter Configuration

First verify the global credit configuration in Business Parameter Settings -&gt; Credit Client Parameters.
(When using the credit system for the first time, there will be an initial configuration; brokers may adjust these settings according to actual business requirements.)

<img src="/assets/VFBJb2tZzofgfMx2pQVjmdoZpcb.png" src-width="3726" src-height="1568" align="center"/>

### 2. Client Credit Limit Inquiry

All credit-approved clients can view their granted limits and usage on the "Client Credit Limit" page.

<img src="/assets/ZtGkbVSc8oFq56x5oaZjIR6HpXf.png" src-width="3696" src-height="1412" align="center"/>

### 3. Limit Adjustment and Approval

Any manual limit adjustments made by the broker backend or client app requests that trigger manual review require approval to take effect.

1. On the "Client Credit Limit" page, select [Adjust].

<img src="/assets/UjxhbFDgjoEbEwx6lUXjGmmoptf.png" src-width="3694" src-height="1434" align="center"/>

<img src="/assets/NUdKbTte5omZZYxtNakjI8ilpP0.png" src-width="2050" src-height="1214" align="center"/>

1. On the "Limit Approval" page, verify and approve the adjusted limit; once the work order approval is completed, the limit will be updated.

<img src="/assets/UPhbb6UccoVpd1x5VOyjRjMopGe.png" src-width="3736" src-height="848" align="center"/>

<img src="/assets/PAKKbps8CosyT9xnJEZj456XpNh.png" src-width="3724" src-height="1636" align="center"/>

## Margin Call

### 1. Margin Call Amount Configuration

Margin call amounts have initial configurations; brokers seeking adjustments should contact technical or commercial liaisons to make changes.

<img src="/assets/Sv6Cb5XjQoIjZzxInRej2lE4pHb.png" src-width="3826" src-height="1724" align="center"/>

### 2. Position Liquidation

1. The Margin Call list page displays records of clients who have triggered margin calls; click [Details] to view specific asset information.

<img src="/assets/FbKlbpn2VodJrRx1xiwjIhkopwb.png" src-width="3710" src-height="1366" align="center"/>

1. The details page shows the client's cash and position breakdown; you may choose to liquidate individual positions via [Liquidate] or perform a bulk [Liquidate] operation at the bottom.

<img src="/assets/BfBUbppphoxyjDxHzlojTtDKpOc.png" src-width="3740" src-height="1642" align="center"/>

## Margin Settings

Supports configuring margin at the stock or client level. Margin calculations follow the priority logic "Client Margin &gt; Stock Margin".

<img src="/assets/U0wjbspkgoK8BpxtWpjjhbSIpmf.png" src-width="3688" src-height="1558" align="center"/>

