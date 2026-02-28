---
title: Quick Start
slug: UMWcwWJFkix9AdkVRp7cjzsunHf
sidebar_position: 1
---


# Quick Start

# Overview

The Whale Fund Management System provides comprehensive end-to-end support for broker-dealers to maintain a fund repository, configure fund displays on the App, manage fund orders, and handle trade settlement and clearing.

# Maintaining the Fund Repository

You can maintain the profile information of a publicly offered fund, configure the fund issuer and description, and manage a fund’s listing and display status. You can also configure and manage fund channels and view fund management fees.

## Step 1: Create a Fund Channel

First click "New Channel" to configure the fund channel. The fund channel specifies the fund submission start time, day cut-off time, the confirmation data backfill time for subscription/redemption information, and the time zone.

<img src="/assets/PRE0bVxQFoJhBIxP6QAj308hpEe.png" src-width="3782" src-height="2350" align="center"/>

- The fund company channel must follow the example format pattern; do not enter Chinese characters or other special symbols.
- For private funds, strictly follow the prompt to add the prefix private- to the fund company channel.
- Automatic backfill retrieves confirmed NAV/confirmed amounts/confirmed shares, etc., from third-party fund companies via API. If the broker tenant has not configured the API, you may enter any time for the backfill time.

## Step 2: Create a New Fund

In Fund Management, choose between adding funds individually or importing them in bulk depending on the number of funds to be created.

<img src="/assets/PvsnbfixJon7NRxNGejjohiApoM.png" src-width="3782" src-height="2350" align="center"/>

Quickly select funds to add by ISIN code and choose an already configured fund channel.

<img src="/assets/VCQAb1LVto1btpxnjIvjYnjipJd.png" src-width="3782" src-height="2350" align="center"/>

After creating a fund, complete the fund’s basic information, subscription rules, redemption rules, and suitability-matching rules.

<img src="/assets/Hyrwb43oqorQeBxrSE7jLRwfpYd.png" src-width="3782" src-height="2350" align="center"/>

# Configuring Fund Display

After creating a fund, set the fund’s status and configure how the fund is presented within the App scenarios.

## Step 1: Configure Fund Display and Trading Status

In the fund management list, set the newly created fund to Display & Listed status. The fund will then appear in the App’s fund rankings and will be available for trading.

<img src="/assets/Nomeb5QreoZWOWx244ljji3npsF.png" src-width="3782" src-height="2350" align="center"/>

The App client displays this under Market → Funds → Fund Rankings.

<img src="/assets/FKPFbrfaMomGyDxlNqbjkRhMpjc.png" src-width="1260" src-height="2736" align="center"/>

- Funds in Hidden status cannot be searched for or viewed in the App client.
- Funds in Display status but not Listed can be searched for and viewed in the App client, but customers cannot trade those funds.

## Step 2: Configure Fund Operational Scenarios

In App Display Management, configure the locations where funds will be displayed.

Fund Management &gt; App Display Management

<img src="/assets/ECXObTbCzoQgNBxWpAUjjCVHppd.png" src-width="3782" src-height="2350" align="center"/>

The App client display positions are as follows:

- Top-selling Funds

<img src="/assets/IP1ybj6vvoJrCRxwDFxj9EIFpnb.jpeg" src-width="1260" src-height="2736" align="center"/>

# Managing Fund Orders

After a customer places a subscription or redemption request in the client, the resulting fund orders are aggregated and displayed in the fund backend for staff review.

<img src="/assets/XwtsbqcrHoa7i9x3Z3Fj2Vqppkh.png" src-width="3782" src-height="2350" align="center"/>

When the system time reaches the "Order Retrieval Time" configured in the Fund Channel, the fund orders for that channel will be consolidated into a channel batch and proceed to the fund clearing stage.

# Fund Clearing and Settlement

1. Select the generated fund pipeline orders, set them to the "Initialized" status, then click [Send Data]. After confirming the popup information is correct, click [Confirm]. The order status will change to "Sent Successfully."
    <img src="/assets/TOKub3LaMo5vlgxAcJNjM5sNpDe.png" src-width="3782" src-height="2350" align="center"/>

2. After the data is sent, select the "Sent Successfully" status and wait to receive the fund company’s subscription/redemption confirmation file. In the fund record action area, choose "Subscription Reconciliation Confirmation" and "Redemption Reconciliation Confirmation" to fill in and confirm the "Confirmed Subscription Shares" and "Confirmed Redemption Amount," respectively.
    <img src="/assets/RlR7b1JzNo8x8xxSCv2jkUWnp7f.png" src-width="3782" src-height="2350" align="center"/>
    - In the reconciliation confirmation dialog, select the fund net asset value (NAV) to be used for clearing and settlement, and enter the "Confirmed Subscription Shares" and "Confirmed Redemption Amount" respectively.
        - "Subscription Reconciliation Confirmation" and "Redemption Reconciliation Confirmation" must be reconciled separately; the subscription settlement and redemption settlement processes also support separate handling.
        - If the selected NAV date has no NAV data, add the NAV in the NAV table. The system has an automatic validation mechanism for backfilled subscription shares and redemption amounts. The system will calculate subscription shares and redemption amounts based on the submitted subscription amount, submitted redemption shares, and the fund NAV. If manually entered values differ from the system-calculated values by 0.5, clicking "Confirm" will produce an error and require reentry.

<img src="/assets/CmQKbBO1LoF302xfUckjEXLvpyf.png" src-width="1198" src-height="1966" align="center"/>

<img src="/assets/OimEbtz4tok1gzxFfZojbnuUpue.png" src-width="1196" src-height="1976" align="center"/>

1. If there are no orders for the day, reconciliation will proceed automatically and settlement will be completed automatically.
2. Select the "In Settlement" status, choose the corresponding pipeline batch for subscription settlement, and click Confirm. If there are no issues, the subscription will be completed.
    <img src="/assets/BWJ4bLCbVoITQbxOzrkjBHsmpXZ.png" src-width="3782" src-height="2350" align="center"/>

3. If, after subscription settlement is completed, there are subsequent redemptions, the redemption securities settlement will appear. After completing the redemption or delivery steps, the redemption cash settlement will be processed; once all steps are completed, the entire process is finished. If there are no redemptions, the process ends after subscription settlement is completed.
    <img src="/assets/KCPvbSZqeoLK9Vx83RWjv33rp4e.png" src-width="3782" src-height="2350" align="center"/>

