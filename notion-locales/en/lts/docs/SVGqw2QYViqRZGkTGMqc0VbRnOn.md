---
title: 2023-10-9 Release Notes
slug: SVGqw2QYViqRZGkTGMqc0VbRnOn
sidebar_position: 52
---


# Release Notes — October 9, 2023

# 2023-10-9 Release Notes

## Core Features

1. [Added] Automatic Import of HKEX CTF Files
    <img src="/assets/MGv6bHl3Zo7qPrxXmERjaZnYpMb.png" src-width="3576" src-height="1692" align="center"/>
    - Added automatic import of HKEX CTF files, with daily imports completed before 4:30 PM.
    - Note: Activation of this feature requires contacting customer support for setup.
    - Path: Clearing Management - File Import

2. [Added] Delayed Settlement for Institutional Contracts
    <img src="/assets/TdRbbxjeGotZJSxkl5bjiPHvpxh.png" src-width="3574" src-height="1158" align="center"/>
    - Added an institutional contract maintenance module; institutional contracts will be automatically generated after the end-of-day processing on trading days.
    - This iteration supports performing delayed settlement operations on institutional contracts, addressing CCASS delayed settlement accounting issues.
    - Note: Only institutional contracts with settlement dates on or after the current accounting date are eligible for delayed settlement.
    - Subsequent iterations will include related reports, institutional fee functions, and other related features.
    - Path: Clearing Management - Contract Management - Institutional Contracts

3. [Improved] Statement Email Resend Function
    <img src="/assets/VVhlbB7dnowPxqxRNLOjiVOTpXr.png" src-width="2200" src-height="1242" align="center"/>
    - Primarily used to resend statements in special circumstances (e.g., data anomalies).
    - After regenerating a statement, its status will be "Regenerated — Pending Send"; emails sent while in this status may use a custom message template.
    - Note: Statements with status "Generation Failed" or "Generating" cannot be resent.
    - Path: Clearing Management - End-of-Day Management - Statement Management - Statement Inquiry

4. [Improved] Asset Inquiry Page Structure — Added Charts and Clearer Asset Categories
    <img src="/assets/VFM7bQ3YNotQGSx1YqojZpJzpVd.png" src-width="3780" src-height="1780" align="center"/>
    - Differentiates between various risk-control statuses and risk-control metrics.
    - Added detailed query for cash freezes (click "Frozen Cash" to view).
    - Added real-time position detail query (click "Settled Quantity" to view).
    - Path: Asset Account - Asset Overview - Client Account Inquiry

5. [Improved] Margin Call Details Page — Added Customer Cash Details
    <img src="/assets/C8HvbAv8vohnJ6xa0IMjY7ygprm.png" src-width="3794" src-height="1766" align="center"/>
    - Path: Risk Control Management - Risk Alerts - Real-time Alerts

6. [Improved] Margin Call Support for Automatic Liquidation on Specified Date or at Deadline
    <img src="/assets/KFcPbpA9ioOHsZxYEdPjqu7WpUh.png" src-width="3722" src-height="1698" align="center"/>
    - Margin Call supports configuring selected alert records to automatically close positions on a specified date or at the deadline.
    - Path: Risk Control Management - Risk Alerts - Real-time Alerts

7. [Improved] Manual Withdrawal Bank Card List Now Displays Currency After Card Number
    <img src="/assets/RCUEbEwrAo9pr5xqAW4jZcYwpJb.png" src-width="2826" src-height="1042" align="center"/>
    - Path: Funds Management - Withdrawals - Manual Withdrawal

8. [Improved] Prompt for HKIDR Authorization When Transferring Securities
    <img src="/assets/Un32bWSACof0rMxWv9yjw0Zlp2c.png" src-width="2816" src-height="1440" align="center"/>
    - When depositing or withdrawing securities, if the client has not completed HKIDR authorization, display the message: "OTCR declaration requires contacting the client to complete HKIDR authorization."
    - Path 1: Securities Management - Securities Deposit - Manual Deposit
    - Path 2: Securities Management - Securities Withdrawal - Manual Withdrawal

## Other Features

whale — Recent Login Memory Support

- On first login, users must enter the company ID and log in with their username and password.
- For subsequent logins, the system remembers the most recently used company; users may simply enter their username and password to log in.

<img src="/assets/Y68Db7LCaoMAuDxvQHxjaRcapNe.png" src-width="2514" src-height="1208" align="center"/>

