---
title: System Introduction
slug: MeYrwzKFqih60bkyWEzcbiIHnLg
sidebar_position: 3
---


# System Overview

# System Introduction

# 1. System Overview

Currency exchange refers to the action by which an investor converts one currency into another.

The Whale system provides foundational parameter configuration and primary workflow operation features for currency exchange. Parameter configuration includes functions such as currency pairs, exchange strategies, and exchange-pool quota settings. Operational features provide frequently used functions including manual exchange, reference-rate markups, and handling of exceptional exchange records.

The overall business process is as follows:

<img src="/assets/BEr4wte5Hhi5DHbSFxojUPMupLd-board.jpeg"/>

System functional architecture

<img src="/assets/AuaBwBcL4h1TFQb274oj4uOXpjb-board.jpeg"/>

## Prerequisites

1. First, enable the currency exchange switch for the currency.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: Service Parameter &gt; Fund Parameter&gt; Currency Setup</p>
</div>

<img src="/assets/VSQcbbV6zofcItx7dnCj1QV4pOh.png" src-width="2984" src-height="1314" align="center"/>

<img src="/assets/R7B9bbB2doArEgx41JXjTJGrpDc.png" src-width="2988" src-height="1310" align="center"/>

1. Configure the exchange rate precision, amount precision, and amount retrieval/rounding logic for the corresponding currency.

<img src="/assets/TQW6bGkiloTMvgxPDYVjjrMSpLh.png" src-width="2936" src-height="1332" align="center"/>

1. Then configure the supported currency pairs and establish the corresponding exchange strategies. If using an exchange-pool strategy, you must also set the exchange-pool quotas. See Section Two for detailed operation instructions.

# 2. Operating Instructions

## Business Parameter Configuration

The Business Parameter Configuration menu initializes the currency exchange functionality. Users must perform one or more configurations according to actual exchange业务 conditions to ensure the accuracy and efficiency of exchanges.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: Business Parameter Configuration - Exchange</p>
</div>

### Currency Pairs

Set the applicable source currencies and target currencies according to the range of currencies involved in the exchange business.

- Create (Currency Pair)

Click [Add] and select the target currency and the source currency. Note: the source currency is single-select; the target currency is multi-select.

<img src="/assets/MBrDbjuVdodeI9x3YlUjSFuApqb.png" src-width="3014" src-height="1308" align="center"/>

After currency configuration is complete, the system will display entries as cards. For configured currencies, users may [Set Default Currency Pair], [Edit], or [Delete] the corresponding currency as appropriate.

### Exchange Strategy

Defines the strategy that governs the overall process from customer exchange submission to execution. Currently two strategies are supported: “Exchange Pool” and “Bank Exchange.” Specifically:

- Create (Exchange Strategy)

Click [Create]. In the invoked modal dialog, complete fields sequentially according to: Service Strategy Setting → Exchange Type Setting → Applicable Time Period Setting → Channel Setting → Covered Currency Pairs Setting.

<img src="/assets/QiZcbdcTuo8FRYxkstJjq34NpIe.png" src-width="2948" src-height="1332" align="center"/>

- Notes:
    - Service time periods may be multi-selected but must not overlap; the system will apply the service strategy according to the selected periods.
    - Only when “Bank Exchange” is selected as the service strategy is it required to select an exchange channel.

After an exchange strategy is configured, users may [Edit] or [Enable/Disable] it according to business needs.

<img src="/assets/KCcIbQ9K8oN4rsx6os6jF9ARpQc.png" src-width="2908" src-height="1304" align="center"/>

### Exchange-Pool Quota Configuration

To implement the “Exchange Pool quota configuration” strategy, the user must establish an exchange-pool logic. This feature allows adding, deleting, and modifying exchange quotas, and continuously calculates the exchange-pool balance based on users’ executed exchange records.

<img src="/assets/SblgbM1aEo0IV3xK2pAjp3Nipwc.png" src-width="2946" src-height="1300" align="center"/>

- Create (Exchange-Pool Quota): Set the exchange-pool quotas by currency. Definitions:
    - Alert Threshold Amount: the minimum account balance a currency must not fall below after its exchange quota has been exhausted.
    - Remaining Quota Adjustment: because exchanges are ongoing, users may increase or decrease the quotas as required by actual business needs.

<img src="/assets/TFCVbyPAHojciQxCwknjc5nCpkw.png" src-width="3016" src-height="1318" align="center"/>

### Rate Markup Settings

As an intermediary platform for currency exchange, the broker may charge fees on exchange requests. Rate markup settings serve as a configuration feature that applies a markup value to the reference exchange rate or the executed exchange rate for customer exchange requests to collect service fees.

- Create (Rate Markup): Click [Add]. In the modal dialog, set markups by currency pair according to the Reference Rate Source Channel.
    <img src="/assets/KJFAbDBsFoiI1zxk5yqjWpwhpMg.png" src-width="2992" src-height="1330" align="center"/>
    <img src="/assets/FlCFbvBICoMKRhxEYsJjxQMlpRd.png" src-width="2946" src-height="1290" align="center"/>
    - After selecting the currency pair, the system will automatically populate the corresponding rate reference.
    - Markups may be specified as an absolute value or as a percentage.
    - Setting a markup on the reference exchange rate:
    - Reference-rate markups are applied at the time of exchange submission, based on the underlying reference exchange rate. Example calculation:
        i. Given a user-selected pair, for example USD to CNH, compute the unmarked rate = 7.8147 ÷ 1.095 = 7.1367 (exchange rate rounded/truncated to 4 decimal places; rate precision is taken from the currency configuration).
        ```text
Reference exchange rate formula = Buy price of the source currency ÷ Sell price of the target currency
```
                ii. Based on the result in i and the chosen source currency, for example USD to CNH, the calculations are as follows:
            - Setting a markup on the executed exchange rate:
    - Executed-rate markups are applied at the time the customer’s exchange is executed, based on the underlying execution rate; see the reference-rate markup example for guidance.

### Large-Amount Settings

If the user selects the “Large-Amount Exchange” type, they must set the threshold that defines “large amount” on this page—that is, the amount above which an exchange must be processed as a large-amount exchange.

- Create (Large-Amount Threshold): Click [Add] and set the starting threshold per currency.

<img src="/assets/KSy6bCy0yoN1hhxop4ljhhzTpOg.png" src-width="3000" src-height="1318" align="center"/>

## Currency Exchange

After business parameter configuration is complete, users may proceed to the exchange operational features. Operational features include customer exchange, reference-rate import, exceptional exchange record handling, exchange-pool quota viewing, and viewing exchange gains and losses.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Menu path: Funds Management - Exchange</p>
</div>

### Customer Exchange

Exchange workflow diagram

<img src="/assets/BElWwQxu4hN2xNb1zBRjYksApmd-board.jpeg"/>

For detailed operational steps, refer to Quick Start.

### Reference Exchange Rates

The backend supports viewing, importing, editing, and configuring markups for exchange rates used in user exchanges.

- Among other items:
    - Rate sources include: Hong Kong Exchanges (HKEX), IB, Hang Seng, and ICBC.
    - Rate types include: book rate, spot rate, and HKEX rate.

- Batch import: Click [Batch upload], download the template, fill in the required fields, and upload.

<img src="/assets/NNUKb2ub9oy4tCx84xljxemtpbf.png" src-width="2982" src-height="1410" align="center"/>

The template contents are as follows (all fields are required):

### Exceptional Exchange Records

For detailed operational steps, refer to Quick Start.

### Exchange-Pool Quota

The exchange-pool quotas are updated in real time according to customers’ executed exchange records. If a user edits the latest quotas under Business Parameter Configuration - Exchange, the records on this page will automatically update as well.

- Quota configuration: quickly access Service Parameter - Exchange pool quota configuration

<img src="/assets/VZp8bmnAXoDiRFxxU9lj0gMhpRe.png" src-width="2962" src-height="1296" align="center"/>

### Exchange Gains and Losses

Due to timing differences, exchange requests may be subject to exchange-rate fluctuations between submission and completion, affecting the exchanged amount. This page is used to view the exchange gains or losses generated by each exchange request and supports export to local storage.

<img src="/assets/GmJDbzz8HohLFhxa1lSjBmE6pCh.png" src-width="2984" src-height="1288" align="center"/>

