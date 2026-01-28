---
title: Feature Introduction
slug: HKt0wOZDaidlkckhWTlcyMpnnbg
sidebar_position: 2
---


# Feature Overview

# Feature Introduction

# Updates

2024.09.05   Operational instructions for the feature module

# Operating Instructions

## 1. Fund List

<b>Overview</b>

View the fund list configured in the WBO backend. This page allows executing subscription operations for clients and supports viewing basic fund detail data.

<img src="/assets/UPk7bO6E5o9p88xXnH0jH97FpCf.png" src-width="2868" src-height="1730" align="center"/>

<b>Page Structure</b>

The top area contains the search/query function.

The middle list displays fund list data, including delisted funds; the page supports paginated viewing (30 items per page).

### Operations and Function Descriptions

### 1.1 Fund List

<img src="/assets/WtdabgalroPQYfx37P6jXXZMpcd.png" src-width="2870" src-height="1736" align="center"/>

- Search criteria: ISIN, fund name, fund category, fund type, currency, fund status
    - The fund category in the list defaults to "Public Fund" and can be manually switched to "Private Fund."

- List fields: display the WBO backend configuration information, allowing intuitive viewing of basic information in the list such as fund type, risk rating, and listing status, which assists in determining whether a subscription is necessary.
- Actions: Subscribe, Details
    - Subscribe: opens the subscription window
    - Details: view fund-related detailed data

### 1.2 Fund List - Details

Fund details can be viewed in three functional areas: Basic Information, Historical Net Asset Value, and Trading Rules.

<img src="/assets/Ss6sb0uTOoNdUnxZepbjHNlypbf.png" src-width="2858" src-height="1734" align="center"/>

<img src="/assets/Un3MbApCroFXV9xxWrFj2KdJpBb.png" src-width="2858" src-height="1736" align="center"/>

<img src="/assets/TQBfbexouomyChx53khjxDH2pgg.png" src-width="2862" src-height="1732" align="center"/>

- The top displays the current fund's name; clicking "&lt;" returns to the fund list.
- Use tabs to switch between fund detail data:
    - Basic Information: displays the fund's basic information as configured in the WBO backend, primarily the fund name, ISIN, fund type, risk rating, etc.
    - Historical Net Asset Value: displays the fund's historical unit NAV and daily price change percentages, which can serve as reference data for subscriptions.
    - Trading Rules: displays the relevant trading rules as configured in the WBO backend, mainly describing the fund's subscription and redemption rules, including the minimum subscription amount and subscription/redemption fee rates.

### 1.3 Fund List - Subscription

Click "Subscribe" in the list to enter the subscription window; within this window, select the account to be subscribed and enter the subscription amount to initiate the subscription.

<img src="/assets/EJzvbG8YDoOrNqxQhK9jSDutpwg.png" src-width="2862" src-height="1742" align="center"/>

- The window is divided into three parts: Client Selection, Fund Information, and Subscription Operation
    - Client Selection: supports searching by securities account number or client name; selecting an account will retrieve the client's fund information
    - Fund Information — Available HKD: shows the selected client's cash balance; if no account is selected, "--" is displayed. This amount represents the account balance available for subscription. If the subscribed fund's currency is USD, the indicator will read "USD Available."
    - Subscription Operation: includes the current fund's basic information and subscription fee rate information, and allows entering the amount the client wishes to subscribe in the subscription amount field
        - Subscription Amount: enter the amount the client wishes to subscribe; if no amount is entered, the minimum subscription amount is displayed as a reminder
        - Remarks: subscription remarks can be entered; the related remarks can be viewed in the "Order Query" list

## 2. Order Query

<b>Overview</b>

View all of a client's subscription data; you can manage them in this list and assist clients with order cancellations.

<img src="/assets/JaZ6bE0CDo3jlOxY45Oj9QNfpee.png" src-width="2874" src-height="1736" align="center"/>

<b>Page Structure</b>

The top area contains the search/query function.

The middle list displays fund order list data, including all subscription orders; the page supports paginated viewing (30 items per page).

### Operations and Function Descriptions

### 2.1 Fund Order List

<img src="/assets/K89nblRq4oCkZ6xDkbbjKzuUpCf.png" src-width="2874" src-height="1736" align="center"/>

- Search criteria: securities account number, order status, fund category, transaction direction, order channel, order submission time
- List fields: display the basic information of fund order subscriptions, including order number, client information, fund information, subscription information, and the fund order subscription status
    - Broker: the broker of the current account; if there is no broker, this field is empty
    - Transaction Direction: Subscription, Redemption
    - Order Statuses:
        - Initial: the order status between order placement and end-of-day processing
        - End-of-day processed: end-of-day processing has been completed; the order cannot be canceled
        - Submitted: the backend has sent materials to the fund company; the order cannot be canceled
        - Redemption Settlement: the backend redemption share settlement has been completed
        - Completed: subscription settlement and redemption funds transfer completed; the order cannot be canceled
        - Canceled: the order has been canceled
    - Remarks: displays the remarks entered at subscription submission; if no remarks were entered, this field is empty

- Actions: Cancel Order, Details
    - Cancel Order: perform fund subscription cancellation; cancellation may not be supported in certain statuses (refer to the order status descriptions above)
    - Details: click to view the subscription or redemption details of the fund order

### 2.2 Fund Order - Details

<img src="/assets/EFaPbVYdPoftUexNS0hjLxeIpRb.png" src-width="2858" src-height="1732" align="center"/>

Fund order details window: view the fund order's basic information as well as rates and fees.

### 2.3 Fund Order - Cancellation

<img src="/assets/ZJ8gbp7sCoeD37xesWsjrI1TpEf.png" src-width="782" src-height="784" align="center"/>

After clicking "Cancel Order" in the order list, a second confirmation for fund cancellation is triggered; upon confirmation, the cancellation request is submitted.

