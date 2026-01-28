---
title: 2025-03-24 Release Notes
slug: X7tYw1V0Ki7ScLkzM6acdKqRnDb
sidebar_position: 28
---


# 2025-03-24 Release Notes

# 🎉 New Features

- Added future ledger date query function and day-end tasks optimization
    <img src="/assets/O5rHbx9gTogM8LxZPeojJl6Rp0b.png" src-width="2848" src-height="1340" align="center"/>
    - Future ledger date Inquiry: Click 「More」 to inquire about future ledger dates
    - Added step-by-step execution function, suitable for fee modification scenarios
    - Detailed optimization of day-end tasks  to improve user experience
    - Path : Day-End  Settlement - Day-End Tasks

- Rate setups(customized) support to add clients and fee rate and other charges page optimization
    <img src="/assets/QILgbnXnKolhAFxRbAhjXBsjpHe.png" src-width="2848" src-height="1340" align="center"/>
    - Rate setups(customized) supports adding clients and reducing duplicate configurations
    - After inquiring the client's fee rate and other charges information, you can directly modify the charging configuration
        - The client's billing package can be changed
        - Can change the client's rate setups(customized): can be bound to the existing customized charging, can copy the existing charging rules
    - Interface other details optimization
        - Client's fee rate support group display
        - Click 「refresh」 configuration to take effect the modified charging configuration in advance
    - Path : Service Parameter-Billing Management
    - Note: After going online, rate setups(by group) will be renamed rate setups(package-based), and rate setups(by client) will be renamed rate setups(customized)

- Added bond interest rate management function
    <img src="/assets/TREkbaH6CojYqVxrmeljapa7pOh.png" src-width="2848" src-height="1340" align="center"/>
    <img src="/assets/T14Sb4ryroNt2fxjp3RjU5vtprb.png" src-width="2848" src-height="1340" align="center"/>
    - Brokers can maintain bond interest rates and manage bond-related data flexibly
    - The closing price management function is upgraded to basic information management, and more temporary maintenance capabilities for public library fields are added
    - Path: Day-End  Settlement -  Clearing Symbol
    - Note 1: If there is a new tradable bond listed in the future, the brokerage needs to manually add the symbol here
    - Note 2: The original Closing Px Management feature will be discontinued

- BE  increase the display of in-transit funds
    <img src="/assets/RQO2bS886oQM1LxksdRj404vpXf.png" src-width="2848" src-height="1340" align="center"/>
    - Before executing the actions of BE, display the client's funds on the in transit funds page to prevent them from mistakenly triggering a margin call
    - If you do not proceed after the registration, please promptly cancel the announcement to avoid causing an overestimation of customer purchasing power

# 🪀 Optimization And Bugfix

- Added AML Review Process for Withdrawal Applications
    <img src="/assets/Au9pbvG9DovbSzxPaldjq4zopfc.png" src-width="2848" src-height="1340" align="center"/>
    - Withdrawal applications can be flagged according to pre-determined risk control rules. Currently supported rules include: First Bank Card, Manual Withdrawal, Financing Withdrawal, Mark Client To Manual, First Withdrawal without Deposit (Manual Review), and No transactions since account opening
    - For all withdrawal applications, automatic approval rules can be configured to determine whether they should be automatically approved, automatically rejected, or require manual approval with or without a ticket
    - Path
        - WBO - Cash Management - Withdrawal - Withdrawal Request
        - WBO - Service Parameter - Withdrawal Rules Management - Automatic Review Rules
    - Note:
        - If a tenant has not set any rules, all withdrawal applications will require manual review.Except for tenants with customized withdrawal processes
        - For tenants who currently have automatic approval enabled online, the system will automatically generate an automatic approval rule for automatic submission when this requirement goes live

- Deposit/Withdrawal Method - eDDA back-end interaction and function optimization
    <img src="/assets/RGhdbvR4MoKVNrxDAdSj7IgBpyc.png" src-width="2848" src-height="1340" align="center"/>
    - New fields added to the eDDA list page and filter options:「 Display To Client」 and 「Delete Or Not」
    - On the eDDA list page, information such as company bank accounts, client document info, client bank cards, and custom bank return is combined and presented.
    - A new 「Delete」 operation has been added. For eDDA records that do not need to be displayed, they can be manually deleted in the background. After submitting the deletion request, a work order approval is required.
    - Path: WBO - Cash Management

- Automatic Repayment Activation Record Optimization
    <img src="/assets/Kfu1bwN89oIzJ4x1JyUjUscOpXe.png" src-width="2848" src-height="1340" align="center"/>
    - Added a query function for the activation records of automatic repayment, listing all clients who have ever used the automatic repayment feature, along with displaying the current status and the latest status update time
    - Path: Risk Control Compliance - Credit Notification - Auto Convert Query

- Debit Notification History Optimization
    <img src="/assets/A60ZbEvVLo5yXRxStI6j6FuPpxg.png" src-width="2848" src-height="1340" align="center"/>
    - Details page updated to a pop-up window mode, displaying message logs and exchange records
    - Path :Risk Control Compliance - Credit Notification - Notification History

- CCASS exchange rate allows manual 「Edit]」and 「Add」 in the WBO
    <img src="/assets/L826bTUmQo2JlWxQ8G9jWz65pMf.png" src-width="2848" src-height="1340" align="center"/>
    - CCASS exchange rate allows manual 「Edit」 and 「Add」 in the WBO
    - Path: WBO - Cash Management - Currency Conversion - Reference Exchange Rate

- Migrate the precision of each currency for fund in - out and position transfer to the currency configuration
    <img src="/assets/PgKzbzinao5WhmxBKuxjWXrvpjd.png" src-width="2848" src-height="1340" align="center"/>
    - In the currency list, it is supported to configure the 「Amount Precision」 and the amount data-fetching logic, and add parsing for these two fields.
    - Path: WBO-Service Parameter - Fund Parameter - Currency Setup

- Configurable exchange rate precision for currency conversion
    <img src="/assets/Zbeabsi7YoJNAExi5isjAC0Fpeg.png" src-width="2848" src-height="1340" align="center"/>
    - In scenarios where exchange rates are needed, the precision of exchange rates used in calculations and display is taken from the configuration of the outgoing currency, maximum support up to 10 digits
        - For example: when exchanging HKD to USD, since the HKD exchange rate precision is configured as 6 decimal places, the exchange rate from HKD to USD would be 0.123456
    - Currently, this exchange rate precision is only applied to customer currency exchange and does not include other business scenarios such as settlement, reporting, or trading
    - Path: WBO-Service Parameter - Fund Parameters - Currency Setup

- Channel Exchange Exception Order Review Integration
    <img src="/assets/QjWJbHIfeo1NplxNHsmjpnpdpPe.png" src-width="2660" src-height="1538" align="center"/>
    - After submitting channel exchange exception order operations [Convert to Success], [Re-exchange], [Convert to Failure], integrate into work order
    - Path: WBO - Cash Management - Currency Conversion - Channel Exchange Order

