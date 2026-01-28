---
title: Quick Start
slug: Oq3wwTJvJiqpB6kWoz2cy5jFnFd
sidebar_position: 1
---


# Quick Start

# Overview

WHALE’s funds management system provides multi-currency, multi-channel, and multi-strategy currency exchange functionality. Users can configure currency pairs, enter amounts, and complete exchanges within the system according to actual exchange requirements.

# Quick Start

## Customer Exchange

Based on the customer’s requested exchange, a manual exchange request can be added on the page. If the user has already submitted a request through the mobile app, the record will be displayed on this page automatically.

### Manual Exchange

Step 1: Select the customer and confirm the currency to exchange from and the currency to exchange to

Click [Manual Exchange], then in the appearing modal select the customer and enter the currency pair. The system will automatically display the withdrawable balance for each currency based on the selected customer.

<img src="/assets/UzwmbYiYUonS0Ax9G91jqL16pyd.png" src-width="3830" src-height="1854" align="center"/>

Step 2: Confirm the reference rate

After selecting the customer and currency pair, the system will automatically provide a reference rate. The user may also switch to [Custom Rate] to input a rate manually.

<img src="/assets/OIOvbSuAToeU2exdp0MjVISEpgd.png" src-width="3328" src-height="1772" align="center"/>

<img src="/assets/JLf5b7u40oBU3wxZe27jO75ypYe.png" src-width="3322" src-height="1776" align="center"/>

Step 3: Enter the amount

Once the customer, currency pair, and rate are confirmed, enter the exchange amount. The exchange amount can be specified in one of two ways:

- Based on the outgoing currency. Example: Assuming the USD to HKD rate = 1:7.8. If the outgoing amount is 1,000 USD, the system will automatically calculate the incoming currency (HKD) = 7,800.
- Based on the incoming currency. Example: Assuming the USD to HKD rate = 1:7.8. If the incoming amount is 1,000 USD, the system will automatically calculate the outgoing currency (HKD) = 7,800.

After confirming that all information has been entered correctly, click [Confirm]. The page will generate an exchange record.

### Processing Requests

After a request record is generated, back-office staff must recheck the accuracy of the information. If correct, click [Review] in the Actions column to open a modal dialog for [Approve]/[Reject] operations.

<img src="/assets/P9zFb3SpvottsPxbqLfjqXKEpZd.png" src-width="3828" src-height="1858" align="center"/>

After [Approve], the completed exchange records can be viewed under the "Completed" or "All" categories.

<img src="/assets/TDgQbmmffotxl9xzLLUjLwacpsf.png" src-width="3314" src-height="1052" align="center"/>

## Reference Rates

Users may view rates for all currency pairs on the Reference Rates page. The system also supports manual addition of reference rates for currency pairs (including bulk operations).

<img src="/assets/SkcWbl9QsoLD6Jx9Ci8jpynlpGF.png" src-width="3836" src-height="1860" align="center"/>

### Create Reference Rate

Click [New] to open a modal dialog. Complete the required fields on the page to create a reference rate record.

<img src="/assets/XIOrbBmNLoSdmUxsALljMyjMpKd.png" src-width="3828" src-height="1864" align="center"/>

### View Rate Update History

Since rates from different rate feeds update in real time, the system automatically refreshes the rates on the page via API integration. To view the day’s historical rates, click [History] in the Actions column of the exchange record row.

<img src="/assets/ECfHbnoMboDxM2xFNOnjX6zspMh.png" src-width="3322" src-height="1770" align="center"/>

## Exception Exchange Records

If a submitted exchange request is interrupted due to issues with the channel provider, bank, customer, or other reasons, this page can be used to handle such cases.

### Handling Exception Records

Step 1: Locate the target record and choose one of three options in the Actions column:

- Mark as Successful: Indicates that, after manual confirmation, the bank funds have changed; the channel exchange order status is therefore manually updated to Successful.
- Re-exchange: Indicates that, upon confirming the channel exchange order, the bank-side funds did not change and will not change, but manual confirmation determines the user should be re-exchanged; a new channel exchange request must therefore be submitted.
- Mark as Failed: Indicates that, after manual confirmation, the bank-side funds did not change and will not change going forward; the channel exchange order status may thus be manually updated to Failed.

<img src="/assets/Az74bMq7woasROx8fKgjXtAap1d.png" src-width="2366" src-height="1220" align="center"/>

Step 2: Conduct a review according to the handling method selected in Step 1.

<img src="/assets/YIJObUV0boKN3uxhQxPjtu1Tp9e.png" src-width="2370" src-height="1198" align="center"/>

## Exchange Gains and Losses

Due to timing differences, exchange rates may fluctuate between the time an exchange request is submitted and the time the exchange is completed, affecting the exchanged amount. This page is used to view the exchange gains and losses generated by each exchange request and supports remittance to local accounts.

<img src="/assets/SUwhbrzo3o4adexJzPSj0VSOptb.png" src-width="2344" src-height="1210" align="center"/>

