---
title: 2024-08-24 Release Notes
slug: QFh6wCUDAijETMkQ9X5chUsAnod
sidebar_position: 28
---


# 2024-08-24 Update Log

# 2024-08-24 Release Notes

# 🎉 New Features

None

# 🪀 Improvements and Fixes

- Support for editing additional account-opening information on the KYC detail page for joint accounts
    <img src="/assets/OUzObweX7ox90hxCzxijjHhBpre.png" src-width="2242" src-height="1100" align="center"/>
    - Path: "Customer Management System" - "KYC" - "Account Opening List" - "KYC Detail Page"
    - When the account is in either the "Under Review" or "Activated" status, additional account-opening information for joint-account types can be edited
        - Changes made while in the "Under Review" status will take effect immediately; changes made while the account is "Activated" will take effect only after the corresponding work order has been approved
        - Additional account fields that can be independently modified by the primary and secondary accountholders include:
            - Nationality
            - Document Issuing Place
            - Chinese Name
            - Surname (English)
            - Given Name (English)
            - Document Number
            - Country/Region of Birth
            - Date of Birth
            - Gender
            - Highest Educational Attainment
    - No additional permissions or work order identifiers

- WBO backend bulk-edit functionality now supports additional fields
    <img src="/assets/KqXrby1LToQnhfxkrrAjRqsMpl0.png" src-width="2264" src-height="980" align="center"/>
    - Path: "Customer Management System" - "KYC" - "Account Opening Information" - "Bulk Edit"
    - Within the bulk edit module, additional fields have been added to support batch modification requests; once approved, the modifications take effect immediately, and reports will be updated to include the new modification records
        - Additional fields added:
            - Nationality
            - Country/Region of Birth
            - Date of Birth
            - Gender
    - No additional permissions or work order identifiers

