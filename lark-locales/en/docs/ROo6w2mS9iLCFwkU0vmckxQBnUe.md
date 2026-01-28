---
title: 2025-02-24 Release Notes
slug: ROo6w2mS9iLCFwkU0vmckxQBnUe
sidebar_position: 10
---


# 2025-02-24 Release Notes

# 🎉 New Feature

- Add client margin change query function
    <img src="/assets/Lb2Xb2Fs5osIfuxOGTbjENHvpgc.png" src-width="3246" src-height="986" align="center"/>
    - 1.Automatic processing of client margin when stocks are suspended or resumed
    - 2.Add/Edit/System Suspension&Resumption/Expiration will record the change of client margin
    - Path: Risk Control Compliance-Margin-Client Margin-Client Stock Margin
    - Permissions: Client Margin Change Query `credit_management.client_margin_change_query`

# 🪀 Optimization and Bugfix

- Bank Region List and Supported Bank Setups interaction optimization
    <img src="/assets/PFM7bsghaoWcIwxyByFjDbNfppc.png" src-width="3284" src-height="666" align="center"/>
    <img src="/assets/IAnlbhvEHoGADixjaunjcXecpTe.png" src-width="3286" src-height="772" align="center"/>
    - 1.The "icon" image of the bank area list supports direct display.
    - Path 1: WBO - Cash Management - App Config - Bank Region List
    - 2.The bank card's "bank card background color", "icon", and "bank logo" images can be directly displayed, and the deposit witness in non-Hong Kong regions can also be modified
    - Path 2: WBO - Cash Management - App Config - Supported Bank Setups

- Fund type multilingual optimization
    <img src="/assets/ZL5Tbf2c3orkzixsbPKjQlVfpOc.png" src-width="3270" src-height="658" align="center"/>
    - Multi-language display has been added to the fund type, and multi-language configuration is supported in [New] and [Edit] operations.
    - Path: WBO - Service Parameter - Accounting -Cashflow Types

- Deposit matching [Withdrawal Refund] operation adds permission control
    <img src="/assets/KwU6biaRroBiAyxdFi4jCSpppF1.png" src-width="3296" src-height="708" align="center"/>
    - Deposit matching [Withdrawal Refund] operation adds permission control
    - Path: WBO - Cash Management - Deposit - Deposit Match
    - Permission: Withdrawal Refund Operation `atm.withdrawal_refund_operation`

- Optimization of currency exchange statement remarks for automatic repayment
    <img src="/assets/NTJUbnQ3FoOmLgxaTpmjAhkjpDb.png" src-width="3322" src-height="1078" align="center"/>
    - Add the text "automatic repayment" to the remarks of the currency exchange statement for automatic repayment.
    - Path: WBO - Cash Management - Exchange - Customer exchange

- Added optimization of bank card error message copy
    <img src="/assets/XAogbFRYKoQSmZxYkU4j27OLpne.png" src-width="1638" src-height="1836" align="center"/>
    - Bind the bank card. Select other areas to bind the banks in the preset list, and optimize the error text.
    - Path: WBO - Cash Management - Bank Card Management

- Optimization of deposit witness background process
    <img src="/assets/YTeWbTkWSoEzLpxuefCjNIuCp5f.png" src-width="3302" src-height="1732" align="center"/>
    - For customers' bank cards for transfer authentication account opening, the background updates the deposit witness process optimization, allowing the deposit witness status to be updated directly to witnessed without association with the deposit
    - Path: WBO - Cash Management - Bank Card Management

- Accounting adds report export-Kingdee
    <img src="/assets/MJRpbsCGLoSz9XxmBTxj3qjwpke.png" src-width="3292" src-height="1758" align="center"/>
    - Accounting adds report export-Kingdee
    - Simplified report export page
    - Path: WBO - Accounting - Accounting Entries

- Merge entries support custom conversion currencies
    <img src="/assets/KioobGeueoAdcWxeW6zjGl6Gphc.png" src-width="3272" src-height="886" align="center"/>
    - Merge entries support custom conversion currencies
    - Path: WBO - Service Parameter - Accounting - Accounting Merge Rules

- New Entry Data Source - Settlement Contracts
    <img src="/assets/Whk5bkt1gov6uMxX93JjbDqwpJd.png" src-width="3300" src-height="978" align="center"/>
    - New Entry Data Source - Settlement Contracts
    - Path: WBO - Accounting - Entry Data Source - Settlement Contract
    - Permissions:
        - Settlement Contract Query `book.book_contract_bills_query`
        - Settlement Contract Action `book.book_contract_bills_operation`

- Add Enable/Disable functions
    <img src="/assets/IeW6b5dOAosIvkxzzjzjeFyQpee.png" src-width="3262" src-height="978" align="center"/>
    - Blacklist adds an enable/disable function based on the delete function, and supports remarks when enabling/disabling operations.
    - Path: Risk Control Compliance-List Management-Blacklist

