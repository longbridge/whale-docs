---
title: 2026-01-26 Release Notes
slug: RP1lwAQgRigvTOki6OXj6LUYpOc
sidebar_position: 35
version: lts
---


# 2026-01-26 Release Notes

# 🎉New Features

- Support automatic printing of reports
    <img src="/assets/Sj29bgaYiothyexwhdRjBkHMp9d.png" src-width="1594" src-height="790" align="center"/>
    <img src="/assets/IU0LbkYJQo2snHxye6djCid1pfc.png" src-width="1593" src-height="764" align="center"/>
    - Support automatic printing of reports
    - Add tags for certain report generation timings
Path: Report Management

- WBO Cryptocurrency Deposit and Withdrawal Function Description (Integrated with HashKey)
    - WBO has added the cryptocurrency deposit and withdrawal function to meet customers' needs for cryptocurrency deposits and withdrawals. Before use, you need to complete the permission application and configure the approval process for the coin withdrawal application work order (Identifier: atm.va.coin_withdraw_apply). The core modules, functions and operation paths are as follows:
        1. Channel Custody Account: Supports batch addition of channel custody accounts; unallocated channel custody accounts can be manually deleted in the background.
            - Path: WBO - VA Clearing Management - Deposit & Withdrawal - Channel Custodial Account
        2. Customer Wallet Address: Before conducting cryptocurrency deposits and withdrawals, customers need to complete the wallet address whitelisting process; whitelisted customer wallet addresses will be maintained in the background.
            - Path: WBO - VA Clearing Management - Deposit & Withdrawal - Client Wallet Address
        3. Deposit: Supports query of deposit applications; allows viewing the entire deposit process of customers in the background, and also supports coin refund and cancellation operations in the background.
            - Path: WBO - VA Clearing Management - Deposit & Withdrawal - Deposit
        4. Withdrawal: Allows approval of customers' withdrawal applications in the background; supports query of the entire withdrawal process.When HashKey withdraws virtual coins, the blockchain handling fee is deducted from the main account, and the principal is deducted from the sub-account. Tenants need to reserve a sufficient amount of the corresponding virtual coins in the main account in advance (to cover the estimated handling fee) to avoid application failure. If it prompts insufficient handling fee, you can recharge the main account or transfer from the sub-account before re-withdrawing.
            - Path: WBO - VA Clearing Management - Deposit & Withdrawal - Withdrawal
        5. Cryptocurrency: Supports adding and editing cryptocurrency information in the background.
            - Path: WBO - Service Parameter - Fund Parameters - Cryptocurrency
    - Note: Virtual currency accounts are booked based on the combined symbol of "Cryptocurrency + Pricing Currency":Record inbound and outbound coin transactions separately by cryptocurrency.When finally synchronized to the securities account, book the transaction under the combined symbol (e.g., Cryptocurrency: ETH; Default Pricing Currency: USD; Booking Symbol: "VA/HAS/ETHUSD").For outbound transactions, prioritize deducting from the currency with the larger available balance. If the balance is insufficient, deductions will be automatically made from the next priority currency.
    - Permission:
        <img src="/assets/SfpwbZIO8o4ssjxLbdwjXnO6pZf.png" src-width="3290" src-height="1504" align="center"/>
        <img src="/assets/Umj3bQFPPoEzh0x57MMj6X3xpEg.png" src-width="3276" src-height="1318" align="center"/>
        <img src="/assets/SkkJbsjIVoJFfgx6N0ejsY0Rpi0.png" src-width="3296" src-height="1326" align="center"/>
        <img src="/assets/Wslobtf5FokAEsxlqFhjp16fp0f.png" src-width="3300" src-height="1108" align="center"/>
        <img src="/assets/DEGYb5iUzoQkbpxkAFvjnuYwpLg.png" src-width="3296" src-height="1090" align="center"/>
        <img src="/assets/Jw5cbnaTzoXhoYxxESDjOw4epFe.png" src-width="3290" src-height="834" align="center"/>
        - Channel Custodial Account Inquiry atm.va_channel_custodial_account_inquiry
        - Channel Custodial Account Operation atm.va_channel_custodial_account_operation
        - Client Wallet Address Inquiry atm.va_client_wallet_address_inquiry
        - Client Wallet Address Operation atm.va_client_wallet_address_operation
        - Cryptocurrency Deposit Application Inquiry atm.va_crypto_currency_deposit_application_inquiry
        - Cryptocurrency Deposit Application Operation atm.va_crypto_currency_deposit_application_operation
        - Coin Deposit Records Inquiry atm.va_coin_deposit_records_inquiry
        - Coin Deposit Records Operation atm.va_coin_deposit_records_operation
        - Refund of Coin Deposit Record atm.va_refund_of_coin_deposit_record
        - Cryptocurrency Withdrawal Application Inquiry atm.crypto_currency_withdrawal_application_inquiry
        - Cryptocurrency Withdrawal Application Operation atm.crypto_currency_withdrawal_application_operation
        - Cryptocurrency Inquiry atm.crypto_currency_inquiry
        - Cryptocurrency Operation atm.crypto_currency_operation

# 🪀 Optimization And Bugfix

- Withdrawal Rules - Automatic Review Rules: Add New Work Order Approval
    - New Function：All operations for the Automatic Review Rules (including [Create], [Edit], [Delete], and batch [Enable/Disable]) will generate a new work order for review after submission. The work order title is "Automatic Review Rule Editing" (Work Order ID: atm.withdraw_audits_edit); after launch, work orders will be automatically approved by default. If manual approval is required, it can be modified in "Approval Process Configuration".
    - Path: Service Parameter - Withdrawal Rules Management - Automatic Review Rules

<img src="/assets/B2JGb5STGoJMufxMz6Aj8ZJPpkc.png" src-width="3284" src-height="746" align="center"/>

- Fund Management - Dealing & Calendar
    - New Function：Trading Rules and Trading Calendar configurations have been added to the basic information of public funds, supporting funds with daily, weekly, or monthly trading cycles.The configuration from the original fund channel has been moved to the basic information of funds.
    - Path: Fund Management - Dealing & Calendar

<img src="/assets/VZpIbq2l6osUgixEGcijUN6Fpre.png" src-width="4020" src-height="2682" align="center"/>

- When performing manual foreign exchange in the backend, the exchange strategy is selectable
    <img src="/assets/WmXXbPHGroEj4XxB0yvj6wFWpib.png" src-width="4962" src-height="2620" align="center"/>
    - When operating 【Manual Foreign Exchange】 in the backend, you can manually select the exchange strategy as needed. After manual selection, the customer's foreign exchange will be executed immediately. The page defaults to the system-determined mode, which will complete the exchange according to the manually configured exchange strategy.
If the configured "foreign exchange strategy" only includes the system's default full exchange type, after the customer submits the exchange, the matched exchange pool type will be summarized and displayed as "--", and the foreign exchange strategy will be displayed according to the system's default value.
    - Path: WBO - Cash Management - Currency Conversion - Exchange Order

- Customer withdrawal application triggers work order generation
    - When disabled, follow the existing process;
    - When enabled, application auto-generates approval work order. If customer cancels before approval, an abnormal work order is created (closed only by super administrator, no impact on the withdrawal business);
    - A new Tab entry is added to the withdrawal application for easy switching and viewing as needed.
    - WBO - Cash Management - Withdrawals - Withdrawal Request

<img src="/assets/JaTfbRceMoy942xzGPWj2uD9p8f.png" src-width="2048" src-height="446" align="center"/>

<img src="/assets/VcfQbyBcQoxC86xdK36jdE7xphb.png" src-width="2048" src-height="761" align="center"/>

- Withdrawal Rejection Page Optimization
    - New copy prompts added to the withdrawal rejection page:If the current counter has enabled work order approval, the prompt copy is: "After confirmation, a work order approval is required; once approved, a notification will be sent to the client informing them that the withdrawal has been rejected";If the current counter has not enabled work order approval, the prompt copy is: "After confirmation, a notification will be sent to the client immediately informing them that the withdrawal has been rejected";
    - Path: WBO-Cash Management-Withdrawal-Withdrawal Request

<img src="/assets/Fm97bZ6uNoCU5FxCbh3jem9spYf.png" src-width="2048" src-height="815" align="center"/>

<img src="/assets/BGjTbR40voeDR6xGRFyj0LmTpxe.png" src-width="2048" src-height="843" align="center"/>

- Simplify the Market Management Configuration Process
    - Simplify the Market Management Configuration Process
    - Path: Business Parameter Settings -Market Management

<img src="/assets/KxoAbTMcjoC9zrx2E1Ujg6aGpgf.png" src-width="3024" src-height="1614" align="center"/>

