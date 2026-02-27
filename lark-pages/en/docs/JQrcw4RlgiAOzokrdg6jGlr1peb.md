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

<img src="/assets/DlHebOEgooVRY5xNn0VjiWxwpXh.png" src-width="3830" src-height="1472" align="center"/>

### 2. Client Credit Limit Inquiry

All credit-approved clients can view their granted limits and usage on the "Client Credit Limit" page.

<img src="/assets/ZHXvbe6NioksJTxqbXhjsP0xp3g.png" src-width="3792" src-height="1422" align="center"/>

### 3. Limit Adjustment and Approval

Any manual limit adjustments made by the broker backend or client app requests that trigger manual review require approval to take effect.

1. On the "Client Credit Limit" page, select [Adjust].

<img src="/assets/OmQAbjfcdoB0RHxk5smjmWZwpLd.png" src-width="2988" src-height="1352" align="center"/>

<img src="/assets/Hf66bzvSqoOdy6xue5HjbU6jptd.png" src-width="3022" src-height="1384" align="center"/>

1. On the "Limit Approval" page, verify and approve the adjusted limit; once the work order approval is completed, the limit will be updated.

<img src="/assets/FwAvbYWjMocmvcxjhJGja7k1pBe.png" src-width="2998" src-height="836" align="center"/>

<img src="/assets/AN2sbuPsPoTYpvxh0EmjkAprpCv.png" src-width="3077" src-height="1462" align="center"/>

## Margin Call

### 1. Margin Call Amount Configuration

Margin call amounts have initial configurations; brokers seeking adjustments should contact technical or commercial liaisons to make changes.

<img src="/assets/Q2OebVqboopqhzxvbutjZw5ApOg.png" src-width="2992" src-height="1346" align="center"/>

### 2. Position Liquidation

1. The Margin Call list page displays records of clients who have triggered margin calls; click [Details] to view specific asset information.

<img src="/assets/IN4abolAAoSDiOxbwGOjbcropte.png" src-width="3000" src-height="1282" align="center"/>

1. The details page shows the client's cash and position breakdown; you may choose to liquidate individual positions via [Liquidate] or perform a bulk [Liquidate] operation at the bottom.

<img src="/assets/ONhkbr9TkoLleIx4vIuj3qo8pkT.png" src-width="3090" src-height="1462" align="center"/>

## Margin Settings

Supports configuring margin at the stock or client level. Margin calculations follow the priority logic "Client Margin &gt; Stock Margin".

<img src="/assets/OWGKbo0U2oIDpGxPU4xjDEXrpld.png" src-width="3000" src-height="1230" align="center"/>

