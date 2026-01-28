---
title: 2025-03-24 Release Notes
slug: X7tYw1V0Ki7ScLkzM6acdKqRnDb
sidebar_position: 11
---


# Update Log — March 24, 2025

# 2025-03-24 Release Notes

# 🎉 New Features

- Added future accounting date lookup and end-of-day interface improvements
    <img src="/assets/MVrXbIus4oVhzKxD7VxjN02vpoc.png" src-width="2846" src-height="1358" align="center"/>
    - Future accounting date lookup: click "More" next to the current accounting date to view future accounting dates
    - Added single-step execution function, applicable to fee modification scenarios
    - Made detailed optimizations to the end-of-day tasks page to improve user experience
    - Path: Clearing Management - End-of-Day Tasks

- Personalized billing now supports adding clients and improves client billing lookup
    <img src="/assets/BVzxb45MdofNRjxbvupj80rSpEe.png" src-width="2846" src-height="1358" align="center"/>
    <img src="/assets/WRwBbWEq8oM6X9xolELjkPBopNe.png" src-width="2846" src-height="1358" align="center"/>
    <img src="/assets/LeB3bmqDsogmV4xKg8KjUp2opFf.png" src-width="2846" src-height="1358" align="center"/>
    - Personalized billing supports adding clients to reduce duplicate configuration
    - After retrieving a client's billing configuration, billing settings can be modified directly
        - The client's billing package can be changed (formerly Customer Group Billing)
        - The client's personalized billing can be changed (formerly Customer Billing): it can be bound to an existing personalized billing or copy existing billing rules
    - Other interface refinements
        - Client billing lookup supports grouped display
        - Clicking refresh configuration can apply modified billing settings earlier
    - Path: Business Parameter Settings - Billing Management
    - Note: After deployment, Customer Group Billing will be renamed to Package Billing, and Customer Billing will be renamed to Personalized Billing

- Added bond interest rate management
    <img src="/assets/FjnQblOHyoVLNkxzRJ8j82Q8pRc.png" src-width="2846" src-height="1358" align="center"/>
    <img src="/assets/PSC1blP7JoiFGaxbT6gj0zXCpXg.png" src-width="2846" src-height="1358" align="center"/>
    - Brokers can maintain bond interest rates themselves, enabling flexible management of bond-related data
    - The closing price management feature has been upgraded to Basic Information Management, with added temporary maintenance capability for more public library fields
    - Path: Clearing Management - Clearing Instruments
    - Note 1: If new tradable bonds are listed in the future, brokers must manually add the instruments here
    - Note 2: The original closing price management feature will be retired

- BE-type corporate actions: added in-transit funds display
    <img src="/assets/T8Y5bKU3boxQ59xXZ2Ojp24Kphh.png" src-width="2846" src-height="1358" align="center"/>
    - For BE-type corporate actions, a client's funds will be displayed on the In-Transit Funds page prior to execution to help prevent inadvertent triggering of margin call notifications. This feature helps clients better understand their fund status and avoid unexpectedly triggering margin calls due to insufficient funds.
    - Note: If a pre-registration is not executed after being posted, please cancel the pre-registration promptly to avoid artificially inflating the client's purchasing power.

# 🪀 Improvements & Fixes

- Withdrawal application: added Anti-Money Laundering (AML) review process
    <img src="/assets/WnIwbmVLwowTFwx0wodjrkJBpRF.png" src-width="2848" src-height="1322" align="center"/>
    - Withdrawal applications can be flagged according to risk-control rules. Rules include: first bank card, manual withdrawal, financing withdrawal, flag customer for manual review, not deposited and first withdrawal escalated to manual review, no trades since account opening
    - All withdrawal applications can be configured with automatic review rules, supporting automatic submission, automatic rejection, or settings for whether manual submission requires a ticket
    - Paths
        - Securities Back Office - Funds Management - Withdrawals - Withdrawal Applications
        - Securities Back Office - Business Parameter Settings - Withdrawal Rules - Automatic Review Rules
    - Note
        - If a tenant has not configured any rules, all withdrawal applications will require manual approval
        - For tenants that currently auto-submit online, when this feature is deployed the system will automatically generate an automatic-review rule that auto-submits

- eDDA funding method: back-end interactions and functional optimizations
    <img src="/assets/NzXUbLvRioJ6eVxFWaaj7QOhp8e.png" src-width="2846" src-height="1358" align="center"/>
    - New fields: whether displayed to client, whether deleted
    - Consolidated display information: company bank account, client identity documents, client bank card, bank response information
    - New operation: manual deletion of records in the back end (requires ticket approval)
    - Path: Securities Back Office - Funds Management - Funding Methods - eDDA

- Automatic repayment activation record enhancements
    <img src="/assets/Jr6Kb6DBooJYJyxietQjHBaQpVg.png" src-width="2848" src-height="1322" align="center"/>
    - Records all clients who have used the automatic repayment feature, displaying their current status and the timestamp of the latest status update
    - Path: Risk Control Management - Credit Limits - Borrowing Reminder - Automatic Repayment Activation Lookup

- Borrowing reminder history details enhancement
    <img src="/assets/A82qbzsJwoVnilx7N3ejK30ipve.png" src-width="2848" src-height="1322" align="center"/>
    - Borrowing reminder history details have been updated to display in a modal window and include message records and exchange records
    - Path: Risk Control Management - Credit Limits - Borrowing Reminder - History Records

- CCASS exchange rate editing enabled
    <img src="/assets/Fic5bNsGkoYGZMxj6hYjwGripib.png" src-width="2846" src-height="1358" align="center"/>
    - CCASS exchange rate management updated to support manual editing and creation
    - Path: Securities Back Office - Funds Management - Foreign Exchange - Reference Rates

- Migration of currency precision for deposits/withdrawals and transfer between accounts to currency configuration
    <img src="/assets/MKjxbAf20ow4HmxtChrjkXCCpHc.png" src-width="2848" src-height="1340" align="center"/>
    - Supports configuration of amount precision and amount retrieval logic
    - Added related field parsing
    - Path: Securities Back Office - Business Parameter Settings - Funds Parameters - Currency

- Unified configuration for foreign-exchange rate precision
    <img src="/assets/Q9Wmb1XgmoR2ulxzjfNjTRjgpcb.png" src-width="2848" src-height="1322" align="center"/>
    - In scenarios requiring exchange rates, the precision used for calculations and display will be taken from the configuration of the currency being converted from, supporting up to 10 decimal places
        - Example: When converting HKD to USD, if HKD's exchange-rate precision is configured as 6 digits, the HKD→USD rate would be 0.123456
    - Path: Securities Back Office - Business Parameter Settings - Funds Parameters - Currency
    - Note: This precision setting currently applies only to client foreign-exchange transactions and does not affect clearing, reporting, trading, or other scenarios

- Channel foreign-exchange exception orders: review now connects to ticketing
    <img src="/assets/FLX5bifUloH8YmxuiJ3jLPEBp3H.png" src-width="2652" src-height="1544" align="center"/>
    - After submitting channel foreign-exchange exception order operations [Mark as Success], [Re-exchange], or [Mark as Failure], a ticket will be created
    - Path: Securities Back Office - Funds Management - Foreign Exchange - Channel Foreign Exchange

