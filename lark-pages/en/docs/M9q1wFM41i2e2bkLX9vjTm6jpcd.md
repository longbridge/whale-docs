---
title: 2024-03-04 Release Notes
slug: EgPmwu4qui6mlMkorutcbZCrnie
sidebar_position: 42
---


# 2024-03-04 Release Notes

# Foreign Exchange Optimization Overview

# Why Are We Upgrading the Foreign Exchange System?

## Enhance Feature Usability

- Consolidate business menus to streamline operational workflows;
- Add more categorized metric cards to strengthen batch-processing capabilities across multi-data scenarios;
- Enhance the user-friendliness of data displays.

## Expand Supported Scenarios for Foreign Exchange Services

- Enrich time-window options within exchange strategies to satisfy exchange requests at any time;
- Adjust exchange rate display logic to enhance the business value of historical data;
- Add a foreign exchange reconciliation page.

# Where Have Upgrades Been Made?

1. Configuration and setting functions are consolidated under "Business Parameter Settings &gt; Foreign Exchange", allowing users to centralize pre-configuration for foreign exchange operations.

    <img src="/assets/CDTQbvjnJoeIFNxlzAsj1QgWpNb.png" src-width="1280" src-height="561" align="center"/>
    
The initial setup of the exchange function can be completed quickly through 3–5 tabs, among which:

    <img src="/assets/IeVybOfhNo89kpxvyNLjG5I2pog.png" src-width="1280" src-height="592" align="center"/>
    

    <img src="/assets/ItjIb9rPFomx2cxMoEcjiRnUpzc.png" src-width="1280" src-height="579" align="center"/>
    

    <img src="/assets/RpeXbxGPToZR0HxwbENjtQlapQQ.gif" src-width="2170" src-height="956" align="center"/>
    

    <img src="/assets/XDAkb0AjQol8wAx3aZNjpGsmphe.png" src-width="1280" src-height="588" align="center"/>
    

    <img src="/assets/Hs7XbLjJNoqorMxu2CnjavvKp9f.gif" src-width="2170" src-height="956" align="center"/>
    

    <img src="/assets/YlCHbGotqohMtUxOfS5jPgRdpmd.gif" src-width="2126" src-height="976" align="center"/>
    - Mandatory settings include: currency pairs, exchange strategies, and FX pool quota configuration
    - Optional settings: spread adjustment settings and large-amount limits
    - Intuitively display currency pair information
    - Allow multiple selection of incoming currencies, enabling multiple currency settings in a single operation
    - Refine service policy copy within exchange strategies
    - Change service policy time-window options from single-select to multi-select
    - Add enable/disable toggle for exchange strategies
    - Demote the approval trigger to a functional button so users can quickly designate currencies and amounts that require manual approval
    - Optimize quota settings: replace the previous increment/decrement functions with direct quota assignment
    - Present exchange-rate mark-up dimensions in two categories

2. Business functions consolidated under "Funds Management &gt; Foreign Exchange"

    <img src="/assets/Fs5Hbf3zxoxxIKx4xYJjZ31qpyh.png" src-width="1280" src-height="596" align="center"/>
    

    <img src="/assets/BsuAb9fsto64Jsx1szVjJcPKpuc.png" src-width="1280" src-height="589" align="center"/>
    

    <img src="/assets/YFZ8b51yRo5xyWxfvn8j8SoSpmc.gif" src-width="2132" src-height="974" align="center"/>
    

    <img src="/assets/R2tQbTeLwo7oUixe9NejdvuapJh.png" src-width="1280" src-height="645" align="center"/>
    

    <img src="/assets/Y9fzb22wzouU1fxABjljNflopOc.gif" src-width="2118" src-height="978" align="center"/>
    - Add categorized metric card display
    - Add quick navigation to [Spread Adjustment Settings]
    - Allow viewing of historically updated exchange rates
    - Integrate operations for exceptional exchange records so that handling and review can be completed on a single page
    - Add quick navigation for quota setting in the FX pool limits

3. Add a foreign exchange reconciliation page (goes live on 05/13)

    <img src="/assets/S748b3xmkoAucgxlPWsjCSogpXc.png" src-width="1280" src-height="634" align="center"/>
    - Perform reconciliation between customers' exchange records in the system and the bank's funding records

# New Version Operation Guide

# System Functional Architecture

<img src="/assets/FkxabO98Ho32ogxEIIUjJ3oWpJd.png" src-width="2560" src-height="2560" align="center"/>

# Customer Foreign Exchange

Based on customers' foreign exchange requests, manual exchange applications can be added on the page; if a user has already submitted a request via the app, the record will be automatically displayed on this page.

## Manual Foreign Exchange

Step 1: Select the customer and confirm the currency to sell and the currency to receive

Click [Manual Foreign Exchange]; in the popup select the customer &gt; enter the currency pair (the system will automatically display each currency's withdrawable balance based on the selected customer)

<img src="/assets/AyYUbCSLaoFwKBx4p5PjM3TppyS.png" src-width="3830" src-height="1854" align="center"/>

Step 2: Confirm the reference exchange rate

After selecting the customer and currency pair, the system automatically provides a reference exchange rate; users can also switch to [Custom Rate] for manual entry

<img src="/assets/Xg6ybCkgNoSHFHxdh4Mjyvkmp3c.png" src-width="3328" src-height="1772" align="center"/>

<img src="/assets/J1lKbNSO3oFXJEx8hN6jUCttpZd.png" src-width="3322" src-height="1776" align="center"/>

Step 3: Enter the amount

After confirming the customer, currency pair, and rate, enter the exchange amount. The exchange amount can be specified in either of the following ways:

- Use the selling currency as the base. Example: Assuming USD to HKD rate = 1:7.8, if the selling amount is 1000 USD, the system will automatically calculate the received amount (HKD) = 7800
- Use the receiving currency as the base. Example: Assuming USD to HKD rate = 1:7.8, if the receiving amount is 1000 USD, the system will automatically calculate the selling currency (HKD) = 7800

After the information is entered correctly, click [Confirm]; a foreign exchange record will be generated on the page.

## Processing Applications

After the application record is created, back-office operators must recheck the accuracy of the information; once confirmed, click [Review] in the actions column to open the popup for [Approve]/[Reject] operations.

<img src="/assets/KoYhbUce5oGbzlxAYrij9LLspBe.png" src-width="3828" src-height="1858" align="center"/>

After [Approve], completed exchange records can be viewed under the "Completed" or "All" categories.

<img src="/assets/HiIBbHcguoSK9kxUvTrjcPIrpth.png" src-width="3314" src-height="1052" align="center"/>

# Reference Exchange Rates

Users can view exchange rates for all currency pairs on the Reference Exchange Rates page; the page also supports manual bulk creation of reference rates for currency pairs.

<img src="/assets/ClVpbH28ZoMOPWx3MvujQkbWp3e.png" src-width="3836" src-height="1860" align="center"/>

## Create Reference Rate

Click [New] to open the popup; complete the required fields on the page to create a reference exchange rate record.

<img src="/assets/ViyfbZuYPosm5XxSP8VjQs6Gpje.png" src-width="3828" src-height="1864" align="center"/>

## View Rate Update History

Because rates from different rate channels update in real time, the system automatically refreshes rates on the page via API integration; to view the day's historical rates, click [History] in the actions column of the exchange rate record.

<img src="/assets/ONZ3bRsphoIQwWxiPgLjqsOHpeg.png" src-width="3322" src-height="1770" align="center"/>

# Exceptional Exchange Records

If an exchange request is abnormally interrupted due to channel providers, banks, customers, or other reasons, the record can be handled on this page.

## Handling Exception Records

Step 1: Locate the target record and choose one of three actions in the actions column:

- Mark as Success: Indicates that after manual confirmation the channel exchange order resulted in a change in bank funds, so the channel exchange order status is updated to Success manually
- Re-exchange: If confirmation of the channel's exchange order shows the bank-side funds did not change and will not change, but manual confirmation indicates the user needs to be re-exchanged, submit a new channel exchange request
- Mark as Failed: Indicates that after manual confirmation the bank-side funds did not change and will not change going forward, so the channel exchange order status can be updated to Failed manually

<img src="/assets/CbshbzWfcodgwRxLK4Jj3iphpYf.png" src-width="2366" src-height="1220" align="center"/>

Step 2: Carry out review based on the handling method chosen in Step 1

<img src="/assets/PB36b7Q9Goz5MexU2LzjujX9pAd.png" src-width="2370" src-height="1198" align="center"/>

# Exchange Profit and Loss

Due to timing differences, exchange applications may experience exchange rate fluctuations between submission and completion, which affect the exchanged amount. This page is used to view the exchange profit and loss generated by each exchange application and supports export to the local system.

<img src="/assets/L85HbSeEUoxeIexOSu3jJK0Qpdh.png" src-width="2344" src-height="1210" align="center"/>

