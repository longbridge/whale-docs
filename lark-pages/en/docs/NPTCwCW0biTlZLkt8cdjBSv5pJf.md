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

<img src="/assets/WJx7bqloYozjazxpmBQjM7HupWd.png" src-width="2726" src-height="206" align="center"/>

System functional architecture

<img src="/assets/PuoPbjtzkohKYtxbcHfjJkcApCb.png" src-width="1760" src-height="1060" align="center"/>

## Prerequisites

1. First, enable the currency exchange switch for the currency.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Business Parameter Settings &gt; Fund Parameters &gt; Currency</p>
</div>

<img src="/assets/BhbrbRLvLoPy79xK9lKj55A6p4M.png" src-width="3822" src-height="1850" align="center"/>

<img src="/assets/L7XHb9pato5q3txFmXgj2RgNppc.png" src-width="3820" src-height="1864" align="center"/>

1. Configure the exchange rate precision, amount precision, and amount retrieval/rounding logic for the corresponding currency.

<img src="/assets/L10hb9o5co5BUXxxUUAjoxz9pKe.png" src-width="3266" src-height="604" align="center"/>

1. Then configure the supported currency pairs and establish the corresponding exchange strategies. If using an exchange-pool strategy, you must also set the exchange-pool quotas. See Section Two for detailed operation instructions.

# 2. Operating Instructions

## Business Parameter Configuration

The Business Parameter Configuration menu initializes the currency exchange functionality. Users must perform one or more configurations according to actual exchange业务 conditions to ensure the accuracy and efficiency of exchanges.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Business Parameter Configuration - Exchange</p>
</div>

### Currency Pairs

Set the applicable source currencies and target currencies according to the range of currencies involved in the exchange business.

- Create (Currency Pair)

Click [New] and select the target currency and the source currency. Note: the source currency is single-select; the target currency is multi-select.

<img src="/assets/WA6Rb0TlbopPGkx6SpAjK8w1p2O.png" src-width="3306" src-height="1242" align="center"/>

After currency configuration is complete, the system will display entries as cards. For configured currencies, users may [Set Default Currency Pair], [Edit], or [Delete] the corresponding currency as appropriate.

### Exchange Strategy

Defines the strategy that governs the overall process from customer exchange submission to execution. Currently two strategies are supported: “Exchange Pool” and “Bank Exchange.” Specifically:

- Create (Exchange Strategy)

Click [New]. In the invoked modal dialog, complete fields sequentially according to: Service Strategy Setting → Exchange Type Setting → Applicable Time Period Setting → Channel Setting → Covered Currency Pairs Setting.

<img src="/assets/ANtHbvS7soflLuxuJObjCgwbpFd.png" src-width="3272" src-height="1506" align="center"/>

- Notes:
    - Service time periods may be multi-selected but must not overlap; the system will apply the service strategy according to the selected periods.
    - Only when “Bank Exchange” is selected as the service strategy is it required to select an exchange channel.

After an exchange strategy is configured, users may [Edit] or [Enable/Disable] it according to business needs.

<img src="/assets/Tk5SbWGvToX4aTxPcKUj9bolp7f.png" src-width="3280" src-height="1532" align="center"/>

### Exchange-Pool Quota Configuration

To implement the “Exchange Pool” strategy, the user must establish an exchange-pool logic. This feature allows adding, deleting, and modifying exchange quotas, and continuously calculates the exchange-pool balance based on users’ executed exchange records.

<img src="/assets/Dn6BbXZeIo9lwQxXMy2jL7lLpUe.png" src-width="3306" src-height="1382" align="center"/>

- Create (Exchange-Pool Quota): Set the exchange-pool quotas by currency. Definitions:
    - Alert Threshold Amount: the minimum account balance a currency must not fall below after its exchange quota has been exhausted.
    - Remaining Quota Adjustment: because exchanges are ongoing, users may increase or decrease the quotas as required by actual business needs.

<img src="/assets/UNm8bzYTxoDDjPxAjicj4q1JpXd.png" src-width="3330" src-height="1760" align="center"/>

### Rate Markup Settings

As an intermediary platform for currency exchange, the broker may charge fees on exchange requests. Rate markup settings serve as a configuration feature that applies a markup value to the reference exchange rate or the executed exchange rate for customer exchange requests to collect service fees.

- Create (Rate Markup): Click [New]. In the modal dialog, set markups by currency pair according to the Reference Rate Source Channel.
    <img src="/assets/IxAZbcf0tocgk7xFsPZjDoiFpzh.png" src-width="3320" src-height="1760" align="center"/>
    <img src="/assets/EBBPbNuH7op2B2xd8Q0jF7T8p6g.png" src-width="2360" src-height="1642" align="center"/>
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

- Create (Large-Amount Threshold): Click [New] and set the starting threshold per currency.

<img src="/assets/JXJSbjWFuoXrfDxYOu0jEDhgpgc.png" src-width="3314" src-height="1758" align="center"/>

## Currency Exchange

After business parameter configuration is complete, users may proceed to the exchange operational features. Operational features include customer exchange, reference-rate import, exceptional exchange record handling, exchange-pool quota viewing, and viewing exchange gains and losses.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: Funds Management - Exchange</p>
</div>

### Customer Exchange

Exchange workflow diagram

<img src="/assets/WrwQbu2FroMIVDxAxE8jUiMpp2c.png" src-width="1744" src-height="2228" align="center"/>

For detailed operational steps, refer to Quick Start.

### Reference Exchange Rates

The backend supports viewing, importing, editing, and configuring markups for exchange rates used in user exchanges.

- Among other items:
    - Rate sources include: Hong Kong Exchanges (HKEX), IB, Hang Seng, and ICBC.
    - Rate types include: book rate, spot rate, and HKEX rate.

- Batch import: Click [Batch Import], download the template, fill in the required fields, and upload.

<img src="/assets/AN3mbezMUoBlXCxxcSPjvAgVpzg.png" src-width="3328" src-height="1554" align="center"/>

The template contents are as follows (all fields are required):

<img src="/assets/CGAZb6D0JoFMJixMDb5j2AuKp2b.png" src-width="1904" src-height="214" align="center"/>

### Exceptional Exchange Records

For detailed operational steps, refer to Quick Start.

### Exchange-Pool Quota

The exchange-pool quotas are updated in real time according to customers’ executed exchange records. If a user edits the latest quotas under Business Parameter Configuration - Exchange, the records on this page will automatically update as well.

- Quota configuration: quickly access Business Parameter Configuration - Exchange - Exchange-Pool Quota Configuration.

<img src="/assets/OJukbRqDpo4fRoxKctMjei8dp8f.png" src-width="3302" src-height="1572" align="center"/>

### Exchange Gains and Losses

Due to timing differences, exchange requests may be subject to exchange-rate fluctuations between submission and completion, affecting the exchanged amount. This page is used to view the exchange gains or losses generated by each exchange request and supports export to local storage.

<img src="/assets/JxAObOT7boR02UxYjbqjUdt3pjg.png" src-width="2344" src-height="1210" align="center"/>

