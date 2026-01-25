---
title: 2024-11-19 Release Notes
slug: RZYZwbpBCia6TYkzJBNcgsqcnCh
sidebar_position: 20
---


# Release Notes — November 19, 2024.

# 2024-11-19 Release Notes

# 🪀 Improvements and Fixes

- Added company ultimate controlling person information to corporate account opening records
    <img src="/assets/U9lebywyVoKOcyxzfjPju34Dpqc.png" src-width="2746" src-height="1656" align="center"/>
    - On the offline account opening and KYC review pages, the Company Structure module now includes company ultimate controlling person information
        - When "Entity Type" is set to 'CRS101 = Passive Non-Financial Entity with – one or more controlling person that is a Reportable Person', the company ultimate controlling person section is mandatory
    - Supports adding, editing, and deleting multiple controlling person entries
    - Path: "KYC" - "Account Opening Review" - "Account Opening List"

- Support for modifying BCAN validity status
    <img src="/assets/WDnvb2z9qoCsvAxhZE1j4UbcpJh.png" src-width="2720" src-height="1288" align="center"/>
    - In the backend, the validity statuses for BCAN Hong Kong Stock Connect and Zhonghua Tong now support manual bulk modification to active/inactive
    - Path: "Account Management" - "BCAN Codes"
    - Permission: account.update_bcan_validity_status

