---
title: 2024-03-04 Release Notes
slug: EgPmwu4qui6mlMkorutcbZCrnie
sidebar_position: 42
---


# Release Notes — 2024-03-04

# 2024-03-04 Release Notes

# Foreign Exchange Optimization Overview

# Why are we upgrading the foreign exchange system?

## Enhance usability

- Consolidate business menus to streamline operations;
- Add more categorized metric cards to strengthen batch-processing capabilities across multi-data scenarios;
- Improve the clarity and friendliness of data presentation.

## Expand supported foreign exchange scenarios

- Enrich the time-slot options available in exchange strategies to satisfy exchange requests at any time;
- Adjust exchange rate display logic to increase the business value of historical data;
- Add a foreign exchange reconciliation page.

# Where were the upgrades applied?

1. <b>Configuration and setup features have been consolidated under "Business Parameter Settings &gt; Foreign Exchange" so users can centralize pre-configuration for foreign exchange operations.</b>
    <img src="/assets/GyA8bDrjKodUw7x6FXkj6MEApqd.png" src-width="1280" src-height="561" align="center"/>
    The initial foreign exchange configuration can be completed quickly through 3–5 tabs, including:
    <img src="/assets/L9iLb0mY8oo1spxwyikjC1dTpKd.png" src-width="1280" src-height="592" align="center"/>
    <img src="/assets/ZQ5dbJWTYouOEDxStCZjpBK2peg.png" src-width="1280" src-height="579" align="center"/>
    <img src="/assets/MYJxb1mxOoTriZxhotKjELXUpWe.gif" src-width="2170" src-height="956" align="center"/>
    <img src="/assets/HCU3blotuoqEOix3rgrj9FRKpUh.png" src-width="1280" src-height="588" align="center"/>
    <img src="/assets/OvGnbZKAzodIX7xdigRjscnApNg.gif" src-width="2170" src-height="956" align="center"/>
    <img src="/assets/YPYZbKp4VoaFd4xgVgFjuWbGpuh.gif" src-width="2126" src-height="976" align="center"/>
    - Required settings: currency pair, exchange strategy, foreign exchange pool quota configuration
    - Optional settings: spread/mark-up settings, large-amount limits
    - Provide an intuitive display of currency pair information
    - Allow multiple incoming currencies to be selected, enabling configuration of multiple currencies in a single operation
    - Optimize the copy for service strategies within exchange strategies
    - Change service strategy time-slot options from single-select to multi-select
    - Add enable/disable functionality for exchange strategies
    - Demote the approval starting point to a functional button so users can quickly set the currencies and amounts requiring manual approval
    - Optimize quota configuration by replacing the previous increase/decrease adjustments with direct quota settings
    - Display exchange rate mark-up dimensions in two categories

2. <b>Business functions have been consolidated under "Funds Management &gt; Foreign Exchange".</b>
    <img src="/assets/NTjUbHzX6obb4exZVipjw8P3pYd.png" src-width="1280" src-height="596" align="center"/>
    <img src="" src-width="100" src-height="100" align="center"/>
    <img src="/assets/AYVtb3HzEoJcNbxVluGjxyLvpke.gif" src-width="2132" src-height="974" align="center"/>
    <img src="/assets/REgcbDdZXo3q0Hx3sdLj1VP3pEf.png" src-width="1280" src-height="645" align="center"/>
    <img src="/assets/IFukbcmd5okTOtxq6BbjlSkBpCb.gif" src-width="2118" src-height="978" align="center"/>
    - Add categorized metric card displays
    - Add a quick jump to [Spread Settings]
    - Enable viewing of historically updated exchange rates
    - Integrate abnormal foreign exchange record operations so handling and review can be completed on a single page
    - Add quick navigation to quota settings for the foreign exchange pool quota

3. Add a foreign exchange reconciliation page (goes live 05/13)
    <img src="/assets/AYkwbmyCsovz5Hx5qJKjjfZxpsg.png" src-width="1280" src-height="634" align="center"/>
    - Perform reconciliation between customers' exchange records in the system and the bank's fund records

# New Version Operation Guide

# System Functional Architecture

<img src="/assets/Cnecbco9xoQyQEx8E66jcTcZp6c.png" src-width="2560" src-height="2560" align="center"/>

# Customer Foreign Exchange

Based on a customer's foreign exchange request, a manual foreign exchange application can be added on the page; if the user has already submitted the request via the app, the record will automatically appear on this page.

## Manual Foreign Exchange

<b>Step 1: Select the customer and confirm the sell and buy currencies</b>

Click [Manual Foreign Exchange]; in the popup, select the customer and enter the currency pair (the system will automatically display the withdrawable balance for each currency based on the selected customer).

<img src="/assets/NPaxb1OKloqBPZxn60cjQ8e2pOg.png" src-width="3830" src-height="1854" align="center"/>

<b>Step 2: Confirm the reference exchange rate</b>

After selecting the customer and currency pair, the system automatically provides a reference rate; users may also switch to [Custom Rate] to input a rate manually.

<img src="/assets/JGNobf66aosyaGx5MiwjeloFpPc.png" src-width="3328" src-height="1772" align="center"/>

<img src="/assets/QAClbCzQJo7IKTxHltCjusvNp0O.png" src-width="3322" src-height="1776" align="center"/>

<b>Step 3: Enter the amount</b>

After confirming the customer, currency pair, and rate, enter the exchange amount. The exchange amount can be specified in one of two ways:

- Based on the sell currency. Example: assuming USD to HKD rate = 1:7.8, specifying sell 1,000 USD, the system will automatically calculate the received currency (HKD) = 7,800.
- Based on the buy currency. Example: assuming USD to HKD rate = 1:7.8, specifying buy 1,000 USD, the system will automatically calculate the sell currency (HKD) = 7,800.

After verifying the input, click [Confirm] to create an exchange record on the page.

## Process Application

After the application record is generated, back-office operators must recheck the accuracy of the data; once confirmed, click [Review] in the action column to open a modal for [Approve]/[Reject] actions.

<img src="/assets/YA9gbw1AiorGzzx2hK3jG3P4pCh.png" src-width="3828" src-height="1858" align="center"/>

After [Approve], completed exchange records can be viewed under the "Completed" or "All" categories.

<img src="/assets/Ym7dbR5enoBG1CxD7nkjKFR7pPb.png" src-width="3314" src-height="1052" align="center"/>

# Reference Exchange Rates

Users can view rates for all currency pairs on the Reference Exchange Rates page, and the system also supports manually adding reference rates for currency pairs (including bulk operations).

<img src="/assets/ASUMbCwGtolHnGxFMPej8eoQp2u.png" src-width="3836" src-height="1860" align="center"/>

## Create Reference Rate

Click [Create] to open a modal; fill in the required fields on the page to create a reference rate record.

<img src="/assets/XG8vb1bbqoYwR3xUaIIjtMafp6d.png" src-width="3828" src-height="1864" align="center"/>

## View rate update history

Since rates from different rate channels update in real time, the system automatically refreshes the rates on the page via API integration. To view the day's historical rates, click [History] in the action column of the exchange rate record row.

<img src="/assets/SZJ0bBrjNoKwllxOjHsjJOkTpGd.png" src-width="3322" src-height="1770" align="center"/>

# Abnormal Exchange Records

If an exchange application is interrupted abnormally due to channel, bank, or customer issues, it can be processed on this page.

## Processing abnormal records

<b>Step 1: Locate the target record and choose one of the three options in the action column:</b>

- Mark as Successful: indicates that the corresponding channel exchange order has been manually confirmed and bank funds have changed, so the channel exchange order status is updated to Successful.
- Re-exchange: if the channel exchange order confirms that bank funds have not changed and will not change, but manual confirmation requires re-exchanging for the user, then a new channel exchange request must be submitted.
- Mark as Failed: indicates that after manual confirmation the bank funds have not changed and will not change, so the channel exchange order status can be updated to Failed.

<img src="/assets/BUZgbyxJUosVvLxRP60jWlJMpYf.png" src-width="2366" src-height="1220" align="center"/>

<b>Step 2: Perform review according to the processing method selected in step 1</b>

<img src="/assets/UZ75bPfcXokzycxc6pDjSPjapRh.png" src-width="2370" src-height="1198" align="center"/>

# Foreign Exchange Gains and Losses

Due to timing differences, exchange rate fluctuations may affect the converted amount between submission and completion of an exchange request. This page is used to view the foreign exchange gains and losses generated by each exchange application and supports exporting the data to local files.

<img src="/assets/DabebsFftoBMbmxCLr6j8yLlpeb.png" src-width="2344" src-height="1210" align="center"/>

