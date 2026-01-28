---
title: Quick Start
slug: K3iswCEWDi48zckDsjHc3pvinwe
sidebar_position: 1
---


# Quick Start

# Overview

The Whale IPO Subscription System fully supports brokers in managing the end-to-end IPO subscription process for clients, including IPO information management, subscription configuration, order management, and allotment distribution.

For upcoming IPOs, rapid configuration enables clients to subscribe online.

# Quick Start

## Prerequisites

You must obtain the following authorization to use the system features properly.

## Enabling Subscriptions

Taking Hong Kong cash subscriptions as an example, a few minutes of quick configuration will enable clients to subscribe to IPOs online.

### Cash Subscription Configuration

If a broker intends to open client applications for a particular IPO, it must be enabled manually and basic rate and time settings must be configured.

Step 1: View the IPO list

When an IPO is announced, the system will automatically synchronize data via market feeds and will, by default, record it in the "Subscriptions Not Enabled" list to facilitate broker review and configuration. For IPOs with subscriptions not enabled, click "Details" to configure the IPO.

Step 2: Enable subscriptions

1. Click "Details" in the IPO list to enter the configuration page. The page defaults to "Not Subscribable."
2. Select "Yes" and save to enable subscriptions. After enabling, cash subscription is the default and only option initially.
3. Once this setting is completed, cash subscription is enabled.

### Financed Subscription Configuration

If a broker needs to enable "Financed Subscription" for an IPO, a financing pool must be configured. If not required, this step can be skipped.

Step 1: Create a financing pool — Basic Information

Click "Create" at the top-right of "Financed Subscription" to set the corresponding financing pool information; a settings dialog will appear.

After filling in the basic data, if no additional configuration is needed, click "Submit for Approval."

More Configuration

Click "More Configuration" to apply personalized settings.

Tips:

1. Settings under "More Configuration" generally control special constraints and are not mandatory.
2. Visible user group: default is all clients. If the broker’s operations system supports user segmentation, the financing pool can be restricted to specified client groups.
3. Upper and lower share limits control the range of shares a client may subscribe for.

Client Segmentation Configuration

A financing pool can include multiple segmentation rules to satisfy operational requirements, for example:

1. Client group A may subscribe for up to 10,000 shares.
2. Client group B may subscribe for up to 100,000 shares.

Step 2: Financing pool approval

After submission, the financing pool is set to "Pending Approval" by default and only becomes effective once approval is granted.

Tips:

There are two approval entry points for financing pools:

1. Financing pool list
2. Financing pool approval page

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Navigation: IPO Subscription &gt; IPO Subscription &gt; Financing Pool Approval</p>
</div>

Click "Approve" to view the work order details; once approved, the financing pool becomes effective.

### Zero-Principal Subscription Configuration

If a broker needs to enable "Zero-Principal Subscription" for an IPO, a financing pool specific to zero-principal subscriptions must be configured. If not required, this step can be skipped.

Zero-principal subscription is a special subscription method in which the financing ratio provided to clients is fixed at 100%, meaning clients do not need any principal to subscribe to the IPO.

Step 1: Create a financing pool — Basic Information

Click "Create" at the top-right of "Zero-Principal Subscription" to set the corresponding financing pool information; a settings dialog will appear.

After filling in the basic data, if no additional configuration is needed, click "Submit for Approval."

Tips:

This setup is similar to the financed subscription settings, except that there is no financing ratio to select — it is fixed at 100%. For more detailed operations, refer to the Financed Subscription Configuration.

## Subscription Deadline Deductions

After the IPO subscription deadline, the broker must submit the confirmed IPO order data to the HKEX or other placement agent. At this time, the broker should perform deduction operations on clients' valid subscription orders for the subscription amounts and subscription fees, and disburse any applicable financing amounts.

There are two entry points for deduction operations:

1. Subscription processing list page: quick operation entries are dynamically displayed according to order status.
2. IPO details — subscription records page: quick operation entries are dynamically displayed according to order status.

Step 1: Click "Deduct" and confirm the order scope

After clicking "Deduct," the system will display the range of orders pending deduction. Confirm and select the order range, then proceed to the next step.

Step 2: Verify deduction order details

The system automatically calculates preview data based on subscription orders, fees, financing ratios, etc. Operators should verify the relevant data and submit it for review.

Step 3: Deduction approval

There are two entry points for deduction approval:

1. A dedicated deduction approval page: view historical deduction applications and approval records.
2. Work orders: users with approval privileges can approve directly from pending work orders.

Click "Approve" to view the work order; approval finalizes the deduction.

## Submitting Orders to Placement Agents

For IPO subscription orders confirmed as successfully deducted, brokers need to submit the orders to the placement agent or HKEX. Generally, IPOs processed through HKEX require CCASS files, while IPOs processed through other placement agents typically require offline Excel or CSV file transfers.

FINI Configured

If the broker has configured the new FINI platform, the Whale system will synchronize IPO orders directly to the HKEX via API, and this step is not required.

FINI Not Configured

Step 1: Select order type

Choose the order type based on channel or financing ratio, and click the "Generate File" button.

It is recommended to generate a single file for data associated with the same placement agent.

For example:

1. If financing is arranged through a bank and not directly via HKEX, select this option and generate a CSV file.
2. If cash or zero-cost subscriptions are processed through HKEX, select these together and generate a CCASS file.

Step 2: Generate the specified file

In the side panel that appears, select the file format and specify the file name. Click "Generate and Download" to produce the file.

## Publish Allotment Results

Allotment results are typically published one trading day before listing. The system must process clients' allotment results, and allotted shares should be credited on the same day.

For clients who were allotted: refund the subscription amounts, recover the provided IPO financing amounts, deduct IPO financing interest, additionally deduct allotment payments and allotment fees, and deliver the allotted shares.

For clients who were not allotted: refund the subscription amounts, recover the provided IPO financing amounts, and deduct IPO financing interest.

Allotment operations have two entry points:

1. Subscription processing list page: quick operation entries are dynamically displayed according to order status.
2. IPO details — subscription records page: quick operation entries are dynamically displayed according to order status.

Step 1: Click "Publish Allotments" and verify data

After clicking "Publish Allotments," the broker must first confirm the following data. If the information is correct, click "Next."

1. IPO Price: The system normally obtains this automatically; brokers should confirm it. If the automatically obtained IPO price is incorrect, operators may enter it manually.
2. Client interest-bearing days: The default interest-bearing days are calculated as the difference between the allotment date and the subscription deadline (consistent with HKEX time). Operators may modify this value.

Step 2: Select the allotment method

The IPO system offers multiple allotment methods; brokers may choose the appropriate method based on actual circumstances.

Uploading a Custom CSV File

1. Download the sample template. The template fields are:
    1. Order: represents the IPO system order number.
    2. APPLY: represents the number of shares the client applied for in that order.
    3. SUCCESS: represents the number of shares allotted to the client.

2. Fill in the allotment data and upload the file.

Step 3: Verify allotment results

The system will automatically parse the allotment results based on the selected method and uploaded file and will generate summary and detail data.

Summary data: used to reconcile total quantities and total allotted shares with the placement agent to quickly detect discrepancies.

Detail data: used to preview allotment data and deduction amounts.

If the data is correct, click "Confirm" to submit for review.

Step 4: Allotment results approval

There are two entry points for allotment approvals:

1. A dedicated allotment approval page: view historical allotment applications and approval records.
2. Work orders: users with approval privileges can approve directly from pending work orders.

Click "Approve" to view the work order; approval finalizes the allotment results.

