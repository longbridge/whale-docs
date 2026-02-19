---
title: System Introduction
slug: 2a05bab0c2cc818c8cade6f552896fe8
sidebar_position: 2
---


# System Overview

# System Introduction

# 1. System Introduction

This guide covers the full back-end operational workflow for cryptocurrency withdrawals, including record creation, query tracking, and work order approval processes, to ensure standardized back-end operations and to safeguard business compliance and fund security.

# Prerequisites

- Back-end operators must log in to the WBO back-end system using their dedicated account credentials and navigate to the "Virtual Asset Management - Deposit/Withdrawal - Coin Withdrawal" module.
- Confirm that the account has permissions for "Coin Withdrawal Application" and "Approval" operations; if permissions are not available, contact the administrator to request access.

# 2. Operation Instructions

## Cryptocurrency Configuration

Prior to a customer's withdrawal, configure the cryptocurrency settings for withdrawals.

<img src="/assets/WxInbxzuvopUTlxQvZqjCs0wpWd.png" src-width="1280" src-height="614" align="center"/>

## Customer Wallet Address

Completing wallet address verification prior to withdrawal is a critical prerequisite for ensuring asset security.

<img src="/assets/YC7KbmBeQoBUpexHy40jN3Cxpog.png" src-width="1280" src-height="610" align="center"/>

## Withdrawal Operations

<b>Request Reception and Record Creation</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: WBO - Virtual Asset Management - Deposit/Withdrawal - Coin Withdrawal Application</p>
</div>

- After the client submits a withdrawal request, the system automatically receives the request information and generates a unique withdrawal record containing core information such as the record number, user's securities account, cryptocurrency, amount, destination address, transaction hash (TXID), request time, status, and other key details.

<img src="/assets/FuAkbZimLopOVcxWTksj21uipsf.png" src-width="2468" src-height="602" align="center"/>

- The client's withdrawal application is automatically linked to a WBO work order (work order identifier: atm.va.coin_withdraw_apply), and the system will carry out approval in accordance with the preconfigured approval flow.

<img src="/assets/S7oubUN6Hoj8UsxWWiKjtyPapKf.png" src-width="2498" src-height="1324" align="center"/>

