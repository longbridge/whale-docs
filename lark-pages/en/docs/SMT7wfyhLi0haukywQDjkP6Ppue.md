---
title: 2025-09-29 Release Note
slug: 2795bab0c2cc80979af4f5a744274fb5
sidebar_position: 32
version: stable
---


# 2025-09-29 Release Note

# 🪀 Optimization

- Rule for Linked Handling of Rejection After Account Opening & Fund Deposit Matching
    <img src="/assets/BPgEbcUgfoZvZ8x1pLajfZLdpMd.png" src-width="4459" src-height="810" align="center"/>
    - In the account opening and fund deposit scenario, if the submitted fund deposit application has been matched, once the account opening request is rejected, the system will automatically reject the matched account opening fund deposit record; after rejection, the system will synchronously and automatically cancel the customer's fund deposit application.
    - Path: WBO - Payment Management - Fund Deposit - Fund Deposit During Account Opening

- Optimization of Automatic Carry-Forward of Previous Day's Exchange Rate
    <img src="/assets/RdlSbhhTRoOiBDxNuVmjGy2wpwg.png" src-width="2950" src-height="822" align="center"/>
    - For scenarios where the exchange rate type is 'Book Exchange Rate', the system has added a new process to automatically carry forward the previous day's exchange rate: if the exchange rates for various currencies have not been imported yet, the system will automatically copy the exchange rates of the corresponding currencies from the previous day to fill in the gaps.
    - Path: WBO - Cash Management -Currency Conversion - Reference Exchange Rate

