---
title: 2024-08-15 Release Notes
slug: ZhxjwK3Egi2JKlkpD6ScgPNHncc
sidebar_position: 29
---


# Release Notes — August 15, 2024

# 2024-08-15 Release Notes

# 🎉 New Features

None

# 🪀 Improvements and Fixes

- Support for modifying the Customer Detail Type field
    - Path: "Customer Management System" - "KYC" - "Account Opening List" - "KYC Details Page"
    - Modification of the Customer Detail Type is supported while the account is in either the "Under Review" or "Opened" status
        - If modified while in the "Under Review" status, the change takes effect immediately, and when the account is successfully opened, the trading channel will be matched according to the new Customer Detail Type value
        - If modified while the account is in the "Opened" status, the change will only take effect after the work order has been approved. After successful modification, the current trading channel will be updated accordingly
    - New work order: kyc.update_application_client_detail_type

<img src="/assets/DtJIbQJwioD7wPxT49DjjddNpFg.png" src-width="2138" src-height="886" align="center"/>

- Customer Profile page now supports display of account name(s)
    <img src="/assets/VdlqbPYAqoTHuyxy9IUjtvDfp5c.png" src-width="2452" src-height="1616" align="center"/>
    - Path: "Customer Management System" - "Account Management" - "Account List" - "Details"
    - On the Customer Profile page, the account name of the current securities account is now displayed, including the account names of associated accounts

