---
title: System Overview
slug: Jv6ew1wTYivfUCk8F2ocsTyqnIh
sidebar_position: 2
---


# System Overview

# System Overview

# Summary

The Whale IPO Subscription System supports brokers throughout the entire IPO subscription process for their clients, primarily including modules for new-issue information management, subscription information configuration, order management, and allotment result management.

## New-Issue Process Diagram

<img src="/assets/UXm5bfWHGoXFg1xPAE1jC2s7p8e.png" src-width="2166" src-height="3140" align="center"/>

## New-Issue Module Overview

<img src="/assets/VB4fbxwV7orhk2xmpOJjiC8Gp5c.png" src-width="3214" src-height="1476" align="center"/>

- New-Issue Information Management module: consolidates and presents detailed information on upcoming new issues, including company background, financial data, and market analysis;
- Subscription Information Configuration module: allows brokers to set personalized subscription parameters for different clients, including subscription limits and strategies;
- Order Management module: handles and tracks clients’ IPO subscription orders, including order status and risk management;
- Allotment Result Management module: notifies clients of allotment outcomes after allocation and manages related financial transactions.

# Operational Management

## 1. IPO Subscription

## 1.1 Hong Kong IPO Subscription

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; Hong Kong IPO Subscription</p>
</div>

The Hong Kong IPO subscription workflow enables brokers to manage the full lifecycle of clients’ Hong Kong IPO subscriptions, including new-issue information management, subscription configuration, subscription orders, and allotment allocation. This is the core workflow of the IPO system.

### 1.1.1 New-Issue List

The New-Issue List page manages all historical Hong Kong new-issue entries and differentiates them into three statuses to facilitate broker operations:

- Subscription Not Open: new-issue information exists but the broker has not yet opened subscriptions before listing.
- Subscription In Progress: the broker has opened subscriptions, but the issue has not yet listed and subsequent steps remain.
- All: includes all new issues, including those already listed or withdrawn.

When a new-issue announcement is available, the system automatically synchronizes data from market feeds and records it by default in the "Subscription Not Open" list for brokers to review and configure. For issues with subscriptions not yet opened, click "Details" to configure the new issue.

<img src="/assets/QcaXbg7IzovQGkxMvELjaJ30p2e.png" src-width="3804" src-height="1832" align="center"/>

Operation Button Descriptions

- Details: view detailed information and order data for the new issue.
- Charge (Debit): this button appears only when there are orders pending debit; click to perform a quick debit operation.
- Publish Allotment: this button appears only when there are orders that require allotment publication; click to perform the allotment operation.

### 1.1.2 Subscription Information Configuration

If a broker intends to open client subscriptions for a given IPO, they must manually enable subscription and complete basic settings, including configuring subscription method, subscription time window, and eligible client groups.

1.1.2.1 Cash Subscription

1. Click "Details" from the New-Issue List to enter the configuration page; by default the issue is “Not Subscribable.”
2. Select "Yes" and save to enable subscription; once enabled, cash subscription is the default and only option.
3. After saving, cash subscription is enabled.

<img src="/assets/IFUYbLo7botn9Ixyvj3j0zIdpMg.png" src-width="3782" src-height="1764" align="center"/>

1.1.2.2 Financing Subscription Configuration

If a broker needs to enable "Financing Subscription" for an issue, a financing pool must be configured. If not enabling financing subscription, this configuration is not required.

Step 1: Create a Financing Pool

- Basic Information

Click "Create" at the top-right of "Financing Subscription" to configure the financing pool; a settings dialog will appear.

<img src="/assets/U3HbbGBjeo1YK3xbKoKjHTuApfg.png" src-width="3776" src-height="1816" align="center"/>

After completing the basic data, click "Submit for Approval" if no further configuration is required.

<img src="/assets/VCSYb7gfZoF1EJx3m3yj0tM4pfh.png" src-width="3296" src-height="1802" align="center"/>

- More Configuration

Click "More Configuration" to perform customized settings.

Tips:

1. Data in "More Configuration" is typically for special controls and is optional.
2. Visible client group: defaults to all clients; if the broker uses a user-segmentation feature in the operations system, the financing pool can be made available only to specific client segments.
3. Upper and lower share limits control the allowable subscription share range per client.

<img src="/assets/TyeabGPedoHO12xnZhYjdKp7pie.png" src-width="3288" src-height="1808" align="center"/>

- Client Segmentation Configuration

The financing pool can include multiple segmentation rules to meet operational requirements, for example:

1. Client group A may subscribe up to 10,000 shares;
2. Client group B may subscribe up to 100,000 shares.

<img src="/assets/AHjjbgkfioFPu3xNExFj0mZJpoc.png" src-width="3766" src-height="1834" align="center"/>

Step 2: Financing Pool Approval

After submission, the financing pool defaults to "Pending Approval" and only becomes effective after approval.

Tips:

There are two approval entry points for financing pools:

1. Financing Pool List
2. Financing Pool Approval Page

<img src="/assets/GkUPbxRr8o4ejixg89jjYX5SpPf.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; Financing Pool Approval</p>
</div>

<img src="/assets/RtotbLybCoD11gx4Yeijwv0UpGd.png" src-width="3744" src-height="1290" align="center"/>

Click "Review" to view the work order details; once approved, the financing pool becomes active.

<img src="/assets/S9Gtb0atLon8tgxsj37jBZYzpsf.png" src-width="3274" src-height="1824" align="center"/>

1.1.2.3 Zero-Principal Subscription Configuration

If a broker needs to enable "Zero-Principal Subscription," a financing pool for zero-principal subscriptions must be created. If not enabling, this configuration is not required.

Zero-principal subscription is a special subscription method where the financing ratio provided to clients is fixed at 100%; clients can subscribe to the IPO without any principal.

Step 1: Create a Financing Pool

- Basic Information

Click "Create" at the top-right of "Zero-Principal Subscription" to configure the corresponding financing pool; a settings dialog will appear.

<img src="/assets/RjkFbVCaQodiA1xs6cxjMgMmp8e.png" src-width="3056" src-height="1840" align="center"/>

After entering the basic data, click "Submit for Approval" if no further settings are necessary.

Tips:

This configuration is similar to the financing subscription settings, except there is no financing ratio to select; it is fixed at 100%. For more details, refer to the Financing Subscription settings.

<img src="/assets/DvUSbQHWzoTslsx4pOZj7hB3pkl.png" src-width="3258" src-height="1814" align="center"/>

### 1.1.3 App Display Information

This page is used to configure App display "Tags" and "Display Copy."

- Tags: no default data; tags must be added manually.
- Display Copy: a default display copy is generated for each new-issue entry; editing is optional. If modification is needed, it can be edited on this page.

<img src="/assets/NyUKb4mNSoPOrPxAiXmj3SVMpxb.png" src-width="3274" src-height="1826" align="center"/>

### 1.1.4 Subscription Records

This page displays all subscription records for the corresponding IPO, including revoked or manually rejected orders; "Debit" and "Allotment" operations can be performed from this page.

<img src="/assets/O8V2bvkvmorwMMxTtmljeMyrpyc.png" src-width="3286" src-height="1574" align="center"/>

1.1.4.1 Debit Operation

After the IPO subscription deadline, the broker must submit confirmed IPO order data to HKEX or another placement party. At this stage, the broker performs debit operations on valid subscription orders to collect the subscription amount and subscription fee and disburses the corresponding financing amount.

There are two entry points for debit operations:

1. Subscription In Progress list page: displays quick action entry points dynamically based on order status.
2. IPO Details – Subscription Records page: displays quick action entry points dynamically based on order status.

Step 1: Click Debit and Confirm Order Scope

After clicking Debit, the system displays the scope of orders pending debit; confirm and select the order range, then proceed to the next step.

<img src="/assets/VZdqb0fmcoxmTFxzItgjCqfDpDB.png" src-width="3304" src-height="1820" align="center"/>

Step 2: Verify Debit Order Details

The system automatically calculates preview data based on subscription orders, fees, financing ratios, etc. The operator must verify the relevant data and submit for review.

<img src="/assets/Fu7Kb2pC4o3GVYx5eFoje7n6pUc.png" src-width="3298" src-height="1836" align="center"/>

Step 3: Debit Approval

There are two entry points for debit approval:

1. A dedicated debit approval page: view historical debit requests and approval records.
2. Work order records: users with approval permissions can directly review in the Pending Work Orders list.

Click "Review" to view the work order; approval completes the process.

<img src="/assets/LvDybYLR3ovZ2rxdH4uj6Gsvphh.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/Yqykbi5lYoOJrzx9MI6j8NOHpFf.png" src-width="3302" src-height="1844" align="center"/>

1.1.4.2 Publish Allotment

Allotment results are typically published one trading day before listing. The system must process allotment results for clients and ensure allotted shares are credited on the same day.

For clients who receive allotments: the subscription amount is refunded, the IPO financing provided is recovered, IPO financing interest is deducted, and allotment payment and allotment fees are additionally deducted; the allotted shares are then delivered.

For clients who do not receive allotments: the subscription amount is refunded, the IPO financing provided is recovered, and IPO financing interest is deducted.

Allotment operations have two entry points:

1. Subscription In Progress list page: displays quick action entry points dynamically based on order status.
2. IPO Details – Subscription Records page: displays quick action entry points dynamically based on order status.

Step 1: Click Publish Allotment and Verify Data

After clicking Publish Allotment, the broker must confirm the following data; if correct, click "Next."

1. IPO Price: the system normally retrieves this automatically; the broker confirms. If automatic retrieval is abnormal, the operator may input the price manually.
2. Client interest-bearing days: default is the difference between Allotment Date and Subscription Deadline (consistent with HKEX time); the operator may modify.

<img src="/assets/GohfbMP6FoEz3dxIrwRjRS32pGh.png" src-width="3306" src-height="1820" align="center"/>

Step 2: Select Allotment Method

The IPO system provides multiple allotment methods; brokers may select according to actual conditions.

Uploading a Custom CSV File

1. Download the sample template, which includes:
    1. Order: the IPO system order number
    2. APPLY: the number of shares applied by the client for that order
    3. SUCCESS: the number of shares allotted to the client

<img src="/assets/C3wob3W8DocJUxxJmhDjm2owpqg.png" src-width="1004" src-height="258" align="center"/>

1. Fill in allotment data and upload the file.

<img src="/assets/Vq9AbRxxHovhKPxTgREjhyxfpMb.png" src-width="3286" src-height="1822" align="center"/>

Step 3: Verify Allotment Results

The system parses the allotment file according to the selected allotment method and generated summary and detail data.

Summary data: used to reconcile total quantities and total allotted shares with the placement party, enabling quick detection of quantity discrepancies.

Detail data: used to preview allotment and deduction details.

If data is correct, click "Confirm" to submit for review.

<img src="/assets/MaOfb3SkyoMLeOxbjgDjVjYfppf.png" src-width="3294" src-height="1832" align="center"/>

Step 4: Allotment Result Review

Allotment approvals have two entry points:

1. Dedicated allotment approval page: view historical allotment applications and approval records.
2. Work order records: users with approval permissions can operate in the Pending Work Orders list.

Click "Review" to view the work order; approval completes the process.

<img src="/assets/CsjXb02SHoEm9MxvvAxjE1VJpjf.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/GezTbq6UUowDgPxTWyajT3AtpRF.png" src-width="3286" src-height="1820" align="center"/>

### 1.1.5 File Generation

For IPO subscription orders with confirmed successful debits, brokers must submit orders to the placement party or HKEX. Typically, IPOs submitted through HKEX require CCASS files, while IPOs placed through other parties typically require offline Excel or CSV file transfers.

1.1.5.1 FINI Configured

If the broker is configured to use the FINI platform, the Whale system will directly synchronize IPO orders to HKEX via API; no manual file generation is required.

1.1.5.2 FINI Not Configured

Step 1: Select Order Type

Select the order type according to channel or financing ratio, and click "Generate File."

It is recommended to generate a single file for orders placed through the same placement party.

Examples:

1. Financing provided through a specific bank and not directly via HKEX: generate a CSV file for that channel.
2. Cash and zero-principal subscriptions processed via HKEX: generate a CCASS file together.

<img src="/assets/WuwhbGTkUos2eexJVvKjPFt5pIf.png" src-width="3288" src-height="1318" align="center"/>

Step 2: Generate Specified File

In the side panel dialog, select the desired file format and specify a filename; click "Generate and Download."

<img src="/assets/WqOObnPvuolosMx9KNlj5MhCpEh.png" src-width="3302" src-height="1844" align="center"/>

### 1.1.6 Financing Summary

This page summarizes financing pool usage and utilization rates, displayed in two modules:

- Grouped by financing ratio
- Grouped by financing channel

<img src="/assets/YmrfbWCtKo9FWmxefmKjxBcJp4b.png" src-width="3294" src-height="1726" align="center"/>

### 1.1.7 Field Descriptions

<img src="/assets/WxYXbSvrvoyJLux5pTejLIWcpth.jpeg" src-width="1156" src-height="200" align="center"/>

## 1.2 U.S. IPO Subscription

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; U.S. IPO Subscription</p>
</div>

The U.S. IPO subscription workflow enables brokers to manage clients’ U.S. IPO subscriptions, including subscription information, subscription orders, and allotment allocation. Subscription information must be entered manually.

Click "Details" to view subscription information.

<img src="/assets/PDzWbe2aGomiLRx214mjBfVHp4d.png" src-width="3298" src-height="740" align="center"/>

### 1.2.1 Subscription Information

This page is used to configure basic U.S. IPO information. If set to "Subscribable" and the subscription start time has been reached, clients may subscribe to the U.S. IPO via the App.

<img src="/assets/RRQKbey8eobMYZxa64SjESsKpIX.png" src-width="3268" src-height="1878" align="center"/>

### 1.2.2 App Display Information

This page is used to configure App display copy. The system provides default display copy, so editing is optional; modifications can be made and saved on this page.

<img src="/assets/Z3APboXHwoh9PhxmtfRjD1E7pRg.png" src-width="3258" src-height="1808" align="center"/>

### 1.2.3 Subscription Records

This page displays all subscription records for the corresponding IPO, including revoked or manually rejected orders; allotment operations may also be performed here.

Detailed allotment operations are consistent with Hong Kong procedures; see 1.1.4.2 Publish Allotment for specifics.

<img src="/assets/EwD2bQlwQoP0i3xu3sAjgoYrpbd.png" src-width="3294" src-height="1688" align="center"/>

### 1.2.4 Field Descriptions

## 1.3 Hong Kong Institutional Allocation (National Allocation)

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; Hong Kong Institutional Allocation</p>
</div>

The primary workflow for Hong Kong institutional allocation consists of: create an institutional allocation new issue &gt; client subscription &gt; publish allotment results.

### 1.3.1 Subscription List

This page displays historically created institutional allocation stocks.

<img src="/assets/RJeobWuS8oKHbWx4lyQjduuyptb.png" src-width="3298" src-height="1018" align="center"/>

Click "Create" to create a new institutional allocation issue; only non-listed stocks may be selected.

<img src="/assets/IpafbZltsolOvOxdsVijMzVapqb.png" src-width="3304" src-height="1580" align="center"/>

### 1.3.2 Subscription Information

After creating an institutional allocation issue, enter the required information and enable subscription. Once the subscription start time is reached and client visibility conditions are met, clients may apply via the App.

<img src="/assets/YaiVbwXc7oB5wXx0jRwjGhMCpBh.png" src-width="3276" src-height="1804" align="center"/>

### 1.3.3 App Display Information

This page is used to configure App display copy. Default copy is provided; editing and saving are optional.

<img src="/assets/CzPYbneRSownx3xNhlTj6igzpFh.png" src-width="3260" src-height="1776" align="center"/>

### 1.3.4 Subscription Records

After institutional allocation orders succeed, records are displayed normally on this page.

When the process reaches the allotment stage, allotment operations can be performed; procedures align with standard Hong Kong allotment operations. See 1.1.4.2.

<img src="/assets/V8LsbsD4noRBjXxmhlRjoG7mpid.png" src-width="3290" src-height="1154" align="center"/>

### 1.3.5 File Generation

If the institutional allocation requires delivery to a placement party, export basic order and client information from "File Generation."

<img src="/assets/Nefqb9MaQoG7PcxI0uUjpB1epac.png" src-width="2578" src-height="780" align="center"/>

### 1.3.6 Field Descriptions

## 1.4 Financing Pool Approval

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; Financing Pool Approval</p>
</div>

This page records all financing pool applications and change records for Hong Kong financing subscriptions and zero-principal subscriptions, including approver and approval status.

<img src="/assets/WWJabCCgEoFV6GxYa1njUpskpYc.png" src-width="3276" src-height="1488" align="center"/>

### 1.4.1 Details

Click "Details" to view financing pool application details.

<img src="/assets/NQ1HbTBS6o7v42x5pxbjJxRmp0d.png" src-width="3280" src-height="1800" align="center"/>

### 1.4.2 Approval

Click "Review" to view the approval work order. For change records, the system can compare before and after values.

<img src="/assets/RiVsbwwTOoUtX8xKOuHj18MbpDg.png" src-width="3272" src-height="1780" align="center"/>

## 1.5 Debit Approvals

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; Debit Approval</p>
</div>

This page records all historical debit operations and allows quick identification of operator and approver.

<img src="/assets/UGlnb7LbtolOU2xpeyJjSlHfpGg.png" src-width="3268" src-height="1766" align="center"/>

- Click Details to view specific debit detail data.

<img src="/assets/WJEFboanCotpcHxlhYVjc08Dp6r.png" src-width="3278" src-height="1590" align="center"/>

## 1.6 Allotment Approvals

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; IPO Subscription &gt; Allotment Approval</p>
</div>

This page displays all historical allotment records for new issues, allowing quick identification of operators, approvers, and historical allotment files.

<img src="/assets/UY1ObhBDNoCQUExjmgZjAh0tppc.png" src-width="3236" src-height="1730" align="center"/>

### 1.6.1 Details

Click "Details" to view allotment data details, including allotment files and allotment detail data.

<img src="/assets/Ier7bYkOyoOYeUxbW1ejxHrfppd.png" src-width="1634" src-height="1822" align="center"/>

<img src="/assets/BZnNbnRaXoKKHixcBgJjHgjQpNf.png" src-width="1630" src-height="1844" align="center"/>

### 1.6.2 Approval

Click "Review" to view the approval work order details.

<img src="/assets/UXdzbkvfSo0W4hxLavSj7TNrpje.png" src-width="3276" src-height="1830" align="center"/>

## 2. Subscription Records

## 2.1 Subscription Records

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; Subscription Records &gt; Subscription Records</p>
</div>

This page lists all IPO orders and allows bulk backend rejection of orders.

Step 1: Select orders and click "Bulk Cancel."

<img src="/assets/AEX6bK0jSofIQDx7AGqjsYHNp3c.png" src-width="3258" src-height="1812" align="center"/>

Step 2: Enter the cancellation reason and confirm.

The system provides default rejection reasons; modify as needed in the input field and confirm.

Upon rejection, the client receives the corresponding rejection email.

<img src="/assets/JmGrbaR9wonJzcxHZ8RjTqkwpsf.png" src-width="3292" src-height="1810" align="center"/>

## 2.2 Bulk Subscription

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; Subscription Records &gt; Bulk Subscription</p>
</div>

This page supports bulk subscriptions on behalf of clients via WBO, primarily used for offline subscription forms and bulk entry into the system.

Note: Bulk subscription will still require freezing subscription funds and follow risk-control logic; operators are placing orders on behalf of clients.

### 2.2.1 Bulk Subscription List

This page shows historical bulk subscription operation records, including subscription quantities and operator information.

<img src="/assets/U8zrbtbd6o0XItxer4djZ8Jdp6g.png" src-width="3304" src-height="1776" align="center"/>

Click "Details" to view bulk subscription information.

- Successful subscriptions will have associated order numbers.
- Failed subscriptions will include rejection reasons.

<img src="/assets/DTNibf0MzoI4t3xi4ltj1MSKpob.png" src-width="3302" src-height="920" align="center"/>

### 2.2.2 Subscription Operation

Step 1: Click the "Bulk Subscription" button.

A dialog will appear.

<img src="/assets/NLiZbmi4PopDeux1Cb9jCz4ipvb.png" src-width="3298" src-height="1768" align="center"/>

Step 2: Enter the stock code.

All bulk subscriptions will be for this stock; the page restricts the stock to currently subscribable new issues. If the issue has already listed, an error message is displayed.

<img src="/assets/DdVdb65USoEnIJxaFdAjPeCXplc.png" src-width="1062" src-height="1060" align="center"/>

Step 3: Download the template and fill in information.

The standard subscription template includes:

<img src="/assets/VFt0bMcFdoHnsgx6cDEj4J3Epjp.png" src-width="1232" src-height="96" align="center"/>

- Account No: the client’s securities account.
- Subscription Type: C = Cash Subscription, M = Financing Subscription, F = Zero-Principal Subscription.
- Subscription Qty: subscription quantity; must comply with allowable subscription quantities.
- Channel: the subscription channel; must match the channel configured for the stock.
- Financing Ratio (%): financing ratio.
    - For cash subscription, enter 0.
    - For financing subscription, enter the financing pool's ratio; financing ratio + channel must match the financing pool configured for the subscription method.
    - For zero-principal subscription, enter 100.

---

The Hong Kong institutional allocation template includes:

<img src="/assets/JefEbSG1bolsBjxbzxIj7vJgpXg.png" src-width="546" src-height="100" align="center"/>

- Account No: the client’s securities account.
- Subscription Qty: subscription quantity; must comply with allowable subscription quantities.
- Channel: the subscription channel; must match the channel configured for the stock.

Step 4: Upload the bulk subscription file.

After completing and saving the data, upload the file. It is recommended to keep file size under 5,000 records.

After upload, click "Confirm"; if the file data is valid, a bulk subscription record will be generated. Click "Details" to view results.

## 2.3 Subscription Summary

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ IPO Subscription &gt; Subscription Records &gt; Subscription Summary</p>
</div>

This page aggregates data for all valid IPO subscription orders. Only valid orders are included; revoked orders are excluded.

Financing amounts are split into channel financing and broker-subsidized financing.

- Total Financing Amount: client subscription amount × financing ratio
- Channel Financing Amount: client subscription amount × channel financing ratio
- Broker-Subsidized Financing Amount: client subscription amount × (financing ratio − channel financing ratio)

<img src="/assets/UEVPbfueSojZbOxceQZjXRNppQh.png" src-width="3316" src-height="748" align="center"/>

## 3. New-Issue Configuration

## 3.1 Fee Configuration

### 3.1.1 Function Overview

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Configuration &gt; New-Issue Configuration &gt; Fee Management</p>
</div>

IPO fees are configured as fee packages (billing plans) that may be reused across multiple new issues. When configuring new-issue subscription information, select a preset fee package. Billing items primarily include:

Prior to system launch, allotment fee defaults will be set according to HKEX requirements. Brokers can click "Default Allotment Fee" in the top-right to modify or set these values.

- Use recognizable names for fee plans, e.g., "90% Financing Rate" or "Cash Fee Plan."
- For zero-principal subscription scenarios, if no allotment fee is to be charged, set the allotment fee to 0 in the plan.

Tip: Allotment fees are charged by the exchange and typically do not change. Set default values once; these are referenced by billing packages and need not be entered each time.

### 3.1.2 Operational Steps

Step 1: Set Default Allotment Fee

Click "Default Allotment Fee" in the top-right, enter the corresponding information, and confirm.

<img src="/assets/EurhbE1ugo3XgFx1dSxjAehApTg.png" src-width="1280" src-height="615" align="center"/>

Step 2: Create Fee Package

Click "Create" in the top-right to configure a billing plan; complete the fields and confirm.

<img src="/assets/QkNTbY56Io4aETxRZhsjwekypxf.png" src-width="3288" src-height="1826" align="center"/>

### 3.1.3 Field Descriptions

<img src="/assets/Cx7MbYtBboAUyixhH2Yjn0N1ptf.jpeg" src-width="1162" src-height="472" align="center"/>

Channel Management

### 3.1.4 Function Overview

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Configuration &gt; New-Issue Configuration &gt; Channel Management</p>
</div>

Channel configuration manages the financing sources for client IPO subscriptions:

1. The source of IPO funds: e.g., broker-owned funds or financing provided by a bank;
2. The types of subscription this channel supports: e.g., cash subscription only or zero-principal subscription only.

Assigning different channels facilitates subsequent financing cost management and IPO data reporting.

### 3.1.5 Operational Steps

Step 1: View channel list and click "Create" to configure a new channel.

<img src="/assets/D0Xvbt8vdoXgOXxJfxxjHBE3pZf.png" src-width="3770" src-height="1694" align="center"/>

<img src="/assets/EmGpbgMbko5MlHxlRT4jgImXpTc.png" src-width="3788" src-height="1734" align="center"/>

### 3.1.6 Field Descriptions

## 3.2 Purchasing Power Configuration

### 3.2.1 Function Overview

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Configuration &gt; New-Issue Configuration &gt; Purchasing Power Configuration</p>
</div>

This feature controls whether holdings-based purchasing power may be used for IPO subscriptions. If not configured, holdings-based purchasing power is not supported by default.

- If holdings-based purchasing power is supported: the cash portion of subscriptions (for both cash and financing subscriptions) may be covered by pledged holdings’ purchasing power.
    - Example: cash balance is 0; holdings worth 100,000 HKD can provide 60,000 HKD purchasing power. A client may use 60,000 HKD of purchasing power for a cash subscription without having actual cash.

- If not supported: the cash portion must be paid with settled HKD cash only.
    - Example: cash balance is 0; holdings worth 100,000 HKD can provide 60,000 HKD purchasing power. If holdings-based purchasing power is not supported, cash subscription amount is 0 and financing subscriptions with a cash portion cannot proceed.

### 3.2.2 Operational Steps

Create a new purchasing-power configuration and enter information:

1. Click "Create" to open the dialog.
2. Enter the stock code.
3. Select subscription type: choose "Subscription" for ordinary subscription or "Institutional Allocation" for institutional allocation.
4. Set "Support Holdings-Based Subscription" to "Yes."
5. Set "Support Margin Borrowing" to "Yes."
6. Confirm to save.

<img src="/assets/FL7gbOhOHoiieuxVSDNjtZ10p8b.png" src-width="3284" src-height="1750" align="center"/>

Purchasing Power Uplift Coefficient Explanation:

This coefficient indicates that holdings cannot be fully pledged when subscribing. For example, for stock 700.HK, holdings worth 10,000 HKD with initial margin = 40% means purchasable power is 6,000 HKD. If an uplift coefficient of 0.2 is entered, the initial margin for IPO subscription will be 40% + 20% = 60% (capped at 100%), and purchasing power for subscription becomes 10,000 × (1 − 60%) = 4,000 HKD.

