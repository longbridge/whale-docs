---
title: 2024-06-11 Release Notes
slug: L1jUwZK6Ci5YlykVxaOc3vYfnQe
sidebar_position: 35
---


# Update Log — June 11, 2024

# 2024-06-11 Release Notes

## 🎉 New Features

- <b>Configurable Business Types for Various Accounting Data Sources</b>
    <img src="/assets/SebFb7UsJo8Jk4xm9TAjQYLDpne.png" src-width="3810" src-height="960" align="center"/>
    - Once business types for the various accounting data sources are configurable, the company may configure whether each business type should be posted to the ledger according to its own accounting requirements.
    - Permissions
        - `book.booking_types_query` Accounting business type query
        - `book.booking_types_update` Accounting business type modification

- <b>Support for Batch Modification of Additional Email Addresses</b>
    <img src="/assets/HREpbnUUboptU0xjDxXjgIs7pec.png" src-width="2612" src-height="1390" align="center"/>
    - Modification path: "Customer Management System" - "Account Management" - "Work Order Center" - "Customer/Account Information" - "Modify Contact Information" - "Modification Content: More Contact Emails"
    - Supports creating a single entry or bulk importing to modify additional contact email addresses; once approved, the modification is applied.
    - The modification entry for additional email addresses on the KYC details page has been hidden and unified under the Work Order Center.
    - New work order identifier: `crm.edit_account_more_email`

## 🪀 Improvements and Fixes

- <b>Optimization of Margin Call Close-Out Order Pop-up Pages</b>
    <img src="/assets/KB9OboLgDoPxWkxYpVGjX3Ngpud.png" src-width="3742" src-height="1590" align="center"/>
    - Close-out order pop-up page optimizations:
        - All close-out pop-up pages will display the best bid/ask price and support manual price refresh.
        - U.S. equity limit orders now support selecting the trading session; additionally, support has been added for the "Securities Lending Position Overview" and "Short Stock Recovery" menus.
        - Added display of the estimated reduction in margin call amount to facilitate close-out reference (excluding the "Securities Lending Position Overview" and "Stock Recovery" menus).
    - The "Intraday Margin Real-Time Alert" and "Close-Out Orders" menu list pages have added a custom list feature.
    - Close-out orders support security code search.
    - Path: "Risk Management" - "Margin Call"

- <b>Accounting Middle Platform: Added Report Export — Sage300 AOM (GL)</b>
    <img src="/assets/X7R3b2rh0ofJ5fx7c1EjiwgGp6a.png" src-width="3804" src-height="1772" align="center"/>

- <b>Margin Call Details: Added Fund Holdings Market Value and Fund Position Details</b>
    <img src="/assets/X1gkbDbacoybLrxCdq9j3miApRg.png" src-width="2838" src-height="1340" align="center"/>
    - The page aggregates the market value of all fund holdings in the base currency.
    - Fund position details can be viewed separately.

- <b>Concentration Stress Test: Added PDF Print Functionality</b>
    <img src="/assets/SruZbNrqCoCX8hxIQzxjXqN8p0b.png" src-width="2806" src-height="1238" align="center"/>
    - Added the RDR039 report to record stress test results.
    - Specific results can be exported individually from the stress test detail page.

- <b>Dashboard Page: Added View for Statements Pending Dispatch</b>
    <img src="/assets/U0GlbYmbroRKogx5kV6jgMNIpRb.png" src-width="3232" src-height="830" align="center"/>
    - The Dashboard page now includes a "Statements Pending Dispatch" data display, aggregating all outstanding statements awaiting dispatch.

