---
title: October 9, 2023 Release Notes
slug: SVGqw2QYViqRZGkTGMqc0VbRnOn
sidebar_position: 52
---


# Release Notes — October 9, 2023

# October 9, 2023 Release Notes

## Core Features

1. [New] Automatic Import of HKEX CTF Files

    <img src="/assets/Uuyfbcmkpof5W8xGuGXj1KKMp7d.png" src-width="3576" src-height="1692" align="center"/>
    - Added automatic import of HKEX CTF files; files are imported daily before 4:30 PM.
    - Note: To enable this feature, please contact customer service for integration.
    - Path: Clearing Management - File Import

2. [New] Institutional Contract Delayed Settlement

    <img src="/assets/SsG3bR0afoYhePx83NTjgxexpTb.png" src-width="3574" src-height="1158" align="center"/>
    - Added an institutional contract maintenance module; institutional contracts are automatically generated after the trading day end-of-day processing.
    - This iteration supports delayed settlement operations for institutional contracts, addressing the accounting issues caused by CCASS delayed settlements.
    - Note: Only institutional contracts with a settlement date greater than or equal to the current accounting date can be subject to delayed settlement.
    - Subsequent iterations will include related reports, institutional fees, and other related functions.
    - Path: Clearing Management - Contract Management - Institutional Contracts

3. [Improved] Statement Email Resend Function

    <img src="/assets/UKUFbZEdnoOMj7xBO8oj7Y82pIh.png" src-width="2200" src-height="1242" align="center"/>
    - Primarily used to resend statements in special circumstances (e.g., data anomalies).
    - After regenerating a statement, its status becomes "Regenerated - Pending Send"; emails sent in this status may use a customized message template.
    - Note: Statements with status "Generation Failed" or "Generating" cannot be resent.
    - Path: Clearing Management - End-of-Day Management - Statement Management - Statement Inquiry

4. [Improved] Asset Inquiry Page Structure — Added Charts and Clearer Asset Categories

    <img src="/assets/Eucxb5ur3ov2dzx72Wmj57LWpwg.png" src-width="3780" src-height="1780" align="center"/>
    - Differentiates between various risk-control statuses and risk-control metrics.
    - Added cash freeze detail inquiry (click "Frozen Cash" to view).
    - Added real-time position detail inquiry (click "Settled Quantity" to view).
    - Path: Asset Account - Asset Overview - Client Account Inquiry

5. [Improved] Margin Call Detail Page — Added Customer Cash Details

    <img src="/assets/M7gRb9FjSoMvz3xj3LTjjYVLpF7.png" src-width="3794" src-height="1766" align="center"/>
    - Path: Risk Management - Risk Alerts - Real-time Alerts

6. [Improved] Margin Call Support for Auto-Close Settings

    <img src="/assets/Sc25bjtc9oOb7qxq4ZUj2B2vpzf.png" src-width="3722" src-height="1698" align="center"/>
    - Margin Call now supports setting certain alert records to automatically close positions on a specified date or on the deadline.
    - Path: Risk Management - Risk Alerts - Real-time Alerts

7. [Improved] Manual Withdrawal Bank Card List — Display Currency

    <img src="/assets/LB88bcF2loSPhyx8c5vjpqehpAb.png" src-width="2826" src-height="1042" align="center"/>
    - In the manual withdrawal bank card list, the currency is displayed after the card number.
    - Path: Fund Management - Withdrawals - Manual Withdrawal

8. [Improved] HKIDR Authorization Prompt for Stock Transfers

    <img src="/assets/BqhNbRz4LoFu7SxaenUjVZMDpgc.png" src-width="2816" src-height="1440" align="center"/>
    - When transferring stocks in or out, if the client's account has not completed HKIDR authorization, display the prompt: "OTCR declaration requires contacting the client to complete HKIDR authorization."

## Other Features

whale supports recent login memory


<img src="/assets/ZmB3bYyWBoJAtgxcoA7jG8x8p1g.png" src-width="2514" src-height="1208" align="center"/>


- Path 1: Securities Management - Securities Deposit - Manual Deposit
- Path 2: Securities Management - Securities Withdrawal - Manual Withdrawal
- On first login, enter the company ID and log in with account and password.
- On subsequent logins, the system remembers the most recently logged-in company; only account and password are required to log in.

