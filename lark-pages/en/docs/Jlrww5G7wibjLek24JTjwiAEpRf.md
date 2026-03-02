---
title: 2025-11-03 Release Notes
slug: 29a5bab0c2cc8040a885c4ed19b64a68
sidebar_position: 2
version: stable
---


# 2025-11-03 Update Log

# 2025-11-03 Release Notes

# 🎉 New Features

- Support for automated report printing

    <img src="/assets/Bs8vbxX2HohCzAxL0PjjqAlHpOl.png" src-width="1593" src-height="764" align="center"/>
    

    <img src="/assets/U1e8bps9hoyz8YxqHSLj8B6lpQp.png" src-width="1593" src-height="764" align="center"/>
    - Support for automated report printing
    - Added labels for certain report generation timing
    - Path: Report Management

# 🪀 Improvements and Fixes

- Withdrawal Rules — Added work order approval for Automatic Audit Rules
    - New feature: All operations on automatic audit rules (including [Create], [Edit], [Delete], and bulk [Enable / Disable]) will create a work order review upon submission. The work order title is "Automatic Audit Rule Edit" (work order identifier: atm.withdraw_audits_edit); after launch the work order defaults to automatic approval. If manual approval is required, this can be modified in "Approval Workflow Configuration."
    - Path: Business Parameter Settings - Withdrawal Rules - Automatic Audit Rules

<img src="/assets/LzD6bpS97oiPDgxS2DCjxh2ypzd.png" src-width="2482" src-height="826" align="center"/>

---

- Fund Management — Added trading frequency configuration for Public Funds
    - New feature: The Public Fund basic information now includes trading rules and a trading calendar configuration, supporting funds with trading cycles of single-day, single-week, or single-month. The configurations previously located in Fund Channels have been moved to Public Fund basic information.
    - Path: Fund Management - Public Fund Management - Trading and Calendar

<img src="/assets/XEbAbSbW6oG013xymcPjgaiGpwe.png" src-width="4026" src-height="2692" align="center"/>

