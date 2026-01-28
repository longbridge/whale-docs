---
title: 2025-11-24 Release Notes
slug: 2b05bab0c2cc80198b77d51a268c3006
sidebar_position: 36
version: stable
---


# 2025-11-24 Release Notes

# 🎉New Features

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
        <img src="/assets/LI10bi9Yyocf0BxLRllj71cjpjd.png" src-width="3290" src-height="1504" align="center"/>
        <img src="/assets/BCzDbUEcToWHs8xoS7AjSNjipVb.png" src-width="3276" src-height="1318" align="center"/>
        <img src="/assets/Oe4gb7nlyocutJxZQPfjP8iupPf.png" src-width="3296" src-height="1326" align="center"/>
        <img src="/assets/B3lUbaOpFoTRkkxwkE6j6zg6pqc.png" src-width="3300" src-height="1108" align="center"/>
        <img src="/assets/Kp8vb5YJ0oDBfcx6btQjVgT3pyh.png" src-width="3296" src-height="1090" align="center"/>
        <img src="/assets/TFN0bCZ47oMBmWxgir7jlXMcpjn.png" src-width="3290" src-height="834" align="center"/>
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

- When performing manual foreign exchange in the backend, the exchange strategy is selectable
    <img src="/assets/PLWZbBgymofLLuxaIbvjWHD5pef.png" src-width="4962" src-height="2620" align="center"/>
    - When operating 【Manual Foreign Exchange】 in the backend, you can manually select the exchange strategy as needed. After manual selection, the customer's foreign exchange will be executed immediately. The page defaults to the system-determined mode, which will complete the exchange according to the manually configured exchange strategy.
If the configured "foreign exchange strategy" only includes the system's default full exchange type, after the customer submits the exchange, the matched exchange pool type will be summarized and displayed as "--", and the foreign exchange strategy will be displayed according to the system's default value.
    - Path: WBO - Cash Management - Currency Conversion - Exchange Order

