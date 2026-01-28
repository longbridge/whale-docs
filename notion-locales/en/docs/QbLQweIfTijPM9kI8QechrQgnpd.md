---
title: 2024-10-21 Release Notes
slug: QbLQweIfTijPM9kI8QechrQgnpd
sidebar_position: 23
---


# 2024-10-21 Release Notes

# 2024-10-21 Release Notes

# 🪀 Improvements and Fixes

- Simplified the manual deposit and withdrawal workflows, and sorted manually withdrawn stocks by code in ascending order
    <img src="/assets/Td2jbav2ToL4ZlxcFY6jLa0TpxP.png" src-width="1312" src-height="1600" align="center"/>
    - After a manual deposit submission, no manual review is required; it directly enters Details Pending
    - After a manual withdrawal submission, once risk control processing is complete, no manual review is required; it directly enters Details Pending
    - Stocks for manual withdrawal are sorted by code in ascending order

- Optimized the tab entries for Deposit Details and Withdrawal Details
    <img src="/assets/DwtqbGIddoTQEvx9xi5jOlZApfe.png" src-width="2326" src-height="1310" align="center"/>
    - The Deposit Details tab entries have been split into: Pending Applications, Details Pending, Deposited, Failed and Deleted, All
    - The Withdrawal Details tab entries have been split into: Pending Applications, Details Pending, Withdrawn, Failed and Deleted, All
    - Pending Applications: refers to deposit or withdrawal application orders that are awaiting manual review
    - Details Pending: refers to deposit or withdrawal applications that have been approved and are awaiting subsequent detail processing

- Added direct rejection to limit approval
    <img src="/assets/GoBZbHvgnoWPZNxVLikjAlqApab.png" src-width="3326" src-height="1618" align="center"/>
    - Added a direct rejection option to the limit approval interface
    - Path: "Risk Control Management" - "Credit Limit" - "Financing Credit" - "Limit Approval"

