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

<img src="/assets/L2jjbphXVodPTYx7T4Pj1O2jpbh.png" src-width="2970" src-height="1330" align="center"/>

<img src="/assets/DHmWbSr7WoxnHRxasC6ju9vUpkb.png" src-width="2984" src-height="1316" align="center"/>

Step 2: Confirm the reference rate

After selecting the customer and currency pair, the system will automatically provide a reference rate. The user may also switch to [Custom Rate] to input a rate manually.

<img src="/assets/YvqVbYkJ3oAQ5yxNYTrjxbCgpsg.png" src-width="2970" src-height="1286" align="center"/>

<img src="/assets/OoOtbP92yobzzxxLSrCjq1Dwpge.png" src-width="2982" src-height="1314" align="center"/>

Step 3: Enter the amount

Once the customer, currency pair, and rate are confirmed, enter the exchange amount. The exchange amount can be specified in one of two ways:

- Based on the outgoing currency. Example: Assuming the USD to HKD rate = 1:7.8. If the outgoing amount is 1,000 USD, the system will automatically calculate the incoming currency (HKD) = 7,800.
- Based on the incoming currency. Example: Assuming the USD to HKD rate = 1:7.8. If the incoming amount is 1,000 USD, the system will automatically calculate the outgoing currency (HKD) = 7,800.

After confirming that all information has been entered correctly, click [OK]. The page will generate an exchange record.

### Processing Requests

After a request record is generated, back-office staff must recheck the accuracy of the information. If correct, click [Review Again] in the Actions column to open a modal dialog for [Approve]/[Reject] operations.

<img src="/assets/Mz6vbDt4gorZJHxezZDj1vdwp09.png" src-width="3092" src-height="1440" align="center"/>

After [Approve], the completed exchange records can be viewed under the "Ended" or "All" categories.

<img src="/assets/HqaabIt4QouMlWxc0PcjylWopMd.png" src-width="2932" src-height="1312" align="center"/>

## Reference Rates

Users may view rates for all currency pairs on the Reference Rates page. The system also supports manual addition of reference rates for currency pairs (including bulk operations).

<img src="/assets/SQnAbDGp9oS9uwxejBDjHUgLpEe.png" src-width="2944" src-height="1302" align="center"/>

### Create Reference Rate

Click [Add] to open a modal dialog. Complete the required fields on the page to create a reference rate record.

<img src="/assets/YIUGbGSr2oBrSExmnhWjoMvJpOg.png" src-width="2996" src-height="1322" align="center"/>

### View Rate Update History

Since rates from different rate feeds update in real time, the system automatically refreshes the rates on the page via API integration. To view the day’s historical rates, click [Historical Records] in the Actions column of the exchange record row.

<img src="/assets/TvifbddLfoeg0oxz1xIjQBXMpVf.png" src-width="2994" src-height="1324" align="center"/>

<img src="/assets/EDgZbo1A6ooslfxmkwqji0Urp1b.png" src-width="3014" src-height="1306" align="center"/>

## Exception Exchange Records

If a submitted exchange request is interrupted due to issues with the channel provider, bank, customer, or other reasons, this page can be used to handle such cases.

### Handling Exception Records

Step 1: Locate the target record and choose one of three options in the Actions column:

- Mark as Successful: Indicates that, after manual confirmation, the bank funds have changed; the channel exchange order status is therefore manually updated to Successful.
- Re-exchange: Indicates that, upon confirming the channel exchange order, the bank-side funds did not change and will not change, but manual confirmation determines the user should be re-exchanged; a new channel exchange request must therefore be submitted.
- Mark as Failed: Indicates that, after manual confirmation, the bank-side funds did not change and will not change going forward; the channel exchange order status may thus be manually updated to Failed.

<img src="/assets/F0ugbIAm6ophZMx9E4NjZM4opRd.png" src-width="3010" src-height="1134" align="center"/>

Step 2: Conduct a review according to the handling method selected in Step 1.

<img src="/assets/UW8sbMBqEoKj1ixWr9Ojqbvjphg.png" src-width="3024" src-height="1242" align="center"/>

## Exchange Gains and Losses

Due to timing differences, exchange rates may fluctuate between the time an exchange request is submitted and the time the exchange is completed, affecting the exchanged amount. This page is used to view the exchange gains and losses generated by each exchange request and supports remittance to local accounts.

<img src="/assets/SXP3bAsxPo1tUkxYHOqjv23apvh.png" src-width="2972" src-height="1308" align="center"/>

