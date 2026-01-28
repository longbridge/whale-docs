---
title: 2024-11-19 Release Notes
slug: RZYZwbpBCia6TYkzJBNcgsqcnCh
sidebar_position: 3
---


# 2024-11-19 Release Notes

# 🪀 Optimization and Bugfix

- Added Company Actual Controller Information for Corporate Accounts
    <img src="/assets/FLPUbZQ67oDdBbxXkuqj4qDqpag.png" src-width="2722" src-height="1302" align="center"/>
    - On the offline account opening and KYC review pages, the company structure module now includes new fields for the company's actual controller.
        - When the "Entity Type" is set to "CRS101 = Passive Non-Financial Entity with – one or more controlling person that is a Reportable Person", the "Company Actual Controller" field becomes mandatory.
    - Supports adding/editing/deleting multiple actual controller entries.
    - Path: "KYC" -&gt; "Account Opening Review" -&gt; "Account Opening List"

- Easily Modify BCAN Validity Status
    - In the back office, the validity status of BCAN for HKIDR and North Trading can now be manually modified in bulk, setting it to either "Active" or "Inactive".
    - Path: "Account Management" -&gt; "BCAN Code"
    - Permission: account.update_bcan_validity_status

<img src="/assets/H0g4btWPho3YD8xxfghjj9Y3ppb.png" src-width="2726" src-height="1282" align="center"/>

