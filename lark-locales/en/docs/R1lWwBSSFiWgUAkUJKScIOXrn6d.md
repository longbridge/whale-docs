---
title: System Introduction
slug: R1lWwBSSFiWgUAkUJKScIOXrn6d
sidebar_position: 2
---


# System Overview

# System Introduction

# Overview

The Whale Fund Management System fully supports broker-dealers in maintaining a fund repository, configuring fund displays on the App, managing fund orders, and handling trade settlement and other end-to-end processes.

Note: At present, Whale fund operations only support subscription and redemption transactions after the fund’s capital raising has been completed; subscriptions during the fundraising period are not currently supported.

<b>Fund Trading Process</b>

<img src="/assets/OMqtbxPviommtAx9V8jjNSOgpmh.png" src-width="1210" src-height="1716" align="center"/>

<b>Reference for Key Time Points:</b> (The following may vary by fund agent)

# Fund Business Operation Management

# 1. Fund Management

## 1.1 Public Funds

After a fund order placed via the front-end App is successful, it will enter the back-office fund order workflow.

<b>App Reference Screen:</b>

<img src="/assets/OzgzbUVP2oYCBhxCu4VjK5VSpff.jpeg" src-width="1260" src-height="2736" align="center"/>

### 1.1.1 Client Orders

Menu path: Fund Management &gt; Public Funds &gt; Client Orders Tab

- This module allows querying public fund order records from the front-end App and viewing the subscription/redemption status of fund orders.

<img src="/assets/URcnbA49xo1mdUxobkcjEqzlpQc.png" src-width="3782" src-height="2350" align="center"/>

Note: If the tenant broker-dealer is also connected to downstream broker-dealers (OB mode), downstream broker-dealers can first use the [Synchronize Orders] operation to sync their (OB) fund orders to the upstream broker.

### 1.1.2 External Shares

Menu path: Fund Management &gt; Public Funds &gt; External Shares Tab

- This module aggregates external share data held at fund companies.

<img src="/assets/JgzPbLpoloOYuix67fejt0pVp7c.png" src-width="3782" src-height="2350" align="center"/>

### 1.1.3 NAV Table

Menu path: Fund Management &gt; Public Funds &gt; NAV Table Tab

- This module allows querying, adding, and editing funds’ net asset value (NAV) data.

<img src="/assets/UKeCbHIq4oKzi8xZrhGjmpXvpbd.png" src-width="3782" src-height="2350" align="center"/>

- Adding a fund NAV
    - Click the [New] button
        <img src="/assets/NSv3bBh8sopNwExREhPjhrTrpbh.png" src-width="3782" src-height="2350" align="center"/>
    - Enter the fund for which you wish to add an NAV; after entering the NAV, select the corresponding NAV date.
        <img src="/assets/HoWwb6noCo2gF4xz6zfjho4ip4J.png" src-width="3782" src-height="2350" align="center"/>
        <div class="callout callout-bg-5 callout-border-5 callout-color-1">
        <div class='callout-emoji'>🎁</div>
        <p>Note: The system is now configured to automatically obtain public fund NAV data from market data sources. If the market data source provides delayed data, manual NAV entry is supported to ensure fund settlement.</p>
        </div>

- Editing a fund NAV
    <div class="callout callout-bg-5 callout-border-5 callout-color-1">
    <div class='callout-emoji'>🎁</div>
    <ol>
    <li><p>After updating, profit and loss will be recalculated; note that only modifications to the latest 30 NAV records will trigger profit and loss recalculation.</p>
    </li>
    <li><p>After updating, money market funds’ seven-day annualized yield, per-10,000 yield, and year-to-date fund performance will update automatically.</p>
    </li>
    <li><p>After updating, channel settlement orders for fund clearing will not be updated once reconciliation confirmation is completed.</p>
    </li>
    </ol>
    </div>
    - Locate the fund whose NAV needs editing and click the edit button.
        <img src="/assets/O8uYbTAqYoXMlixpOd3jYqG8pwh.png" src-width="3782" src-height="2350" align="center"/>
    - Enter the corresponding NAV and click [Confirm].
        <img src="/assets/MPsKboir5oQn1SxR3xZjOAKxprc.png" src-width="3782" src-height="2350" align="center"/>
    - After completing NAV edits, if NAV edit approval is enabled, the new NAV will take effect only after the approval workflow is passed; if approval is not enabled, the edit takes effect immediately.
        <img src="/assets/UKxzbgD0xogdjKxVBeWj5v6XpNb.png" src-width="3782" src-height="2350" align="center"/>

### 1.1.4 Fund Settlement

Menu path: Fund Management &gt; Public Funds &gt; Fund Settlement Tab

- This module enables back-office fund settlement operations (including data reconciliation, subscription settlement, and redemption settlement of money and securities).

<img src="/assets/DL04bj9QWoC84ZxsntGjqWjDp8d.png" src-width="3782" src-height="2350" align="center"/>

Settlement Operation Flow:

1. Select the generated fund channel order, set it to the 'Initialized' status, then click [Send Data]. Confirm the information in the pop-up dialog and click [Confirm]. The order status will change to 'Sent Successfully'.
    <img src="/assets/FZ1kbuse0o78XSxfKifj4aiwpjh.png" src-width="3782" src-height="2350" align="center"/>

2. After sending data, select the 'Sent Successfully' status and wait to receive the fund company’s subscription/redemption confirmation files. In the fund record operation area, choose [Subscription Reconciliation Confirmation] and [Redemption Reconciliation Confirmation] to respectively fill in and confirm the "Subscription Confirmed Units" and "Redemption Confirmed Amount".
    <img src="/assets/E3dabY6jWoRPirxlXp9jUpFzpBf.png" src-width="3782" src-height="2350" align="center"/>
    - In the reconciliation confirmation dialog, you must select the fund NAV to be used for settlement and fill in the "Subscription Confirmed Units" and "Redemption Confirmed Amount" separately.
        <div class="callout callout-bg-5 callout-border-5 callout-color-1">
        <div class='callout-emoji'>🎁</div>
        <ol>
        <li><p>[Subscription Reconciliation Confirmation] and [Redemption Reconciliation Confirmation] are performed separately; subscription settlement and redemption settlement processes also support independent execution.</p>
        </li>
        <li><p>If the selected NAV date has no NAV data, add the NAV in the NAV Table. The auto-fill of subscription units and redemption amounts has an automatic validation mechanism: the system will calculate subscription units and redemption amounts based on the submitted subscription amount, submitted redemption units, and fund NAV. If manually entered values differ from the system-calculated values by 0.5 or more, clicking [Confirm] will trigger an error and require correction.</p>
        </li>
        </ol>
        </div>

<img src="/assets/LeXebC2wlo3VMkxUu0KjS1FAp1b.png" src-width="1198" src-height="1966" align="center"/>

<img src="/assets/Q4vDbHhucoimJdxA7hajb6Jzpuc.png" src-width="1196" src-height="1976" align="center"/>

1. If there are no orders for the day, reconciliation confirmation is automatic and settlement completes automatically.
2. Select the 'In Settlement' status, select the corresponding channel order for subscription settlement; after clicking Confirm, the subscription will be completed if there are no issues.
    <img src="/assets/OWnNbX6AVoIC49xccN4jbPZDpVh.png" src-width="3782" src-height="2350" align="center"/>

3. If, after subscription settlement is completed, there are subsequent redemptions, a redemption delivery pop-up will appear; completing the redemption delivery will then proceed to redemption proceeds settlement and conclude the entire process. If there are no redemptions, the process ends after subscription settlement.
    <img src="/assets/DOqvbfqPvosA3txDDhuj7uZJpRc.png" src-width="3782" src-height="2350" align="center"/>

### 1.1.5 Trading Calendar

Menu path: Fund Management &gt; Public Funds &gt; Trading Calendar Tab

- This module allows querying the trading calendar for public fund products and supports [Invalidate] and [Revoke] operations.

<img src="/assets/Uu0kbbvgPowU34xZN29j8PlJpjR.png" src-width="3782" src-height="2350" align="center"/>

## 1.2 Public Fund Administration

### 1.2.1 Fund Management

Menu path: Fund Management &gt; Public Fund Administration &gt; Fund Company Tab

- This module maintains public fund data, configures fund entities and descriptions, and manages fund listing and display.

In the fund record’s right-hand operation area, you may select [Details] to view or edit fund data and to manage fund listing and display settings.

```text
[List]: Include the fund in the system for trading. The status should be set to Listed.  
[Delist]: Make the fund unavailable for trading in the system.  
[Display]: Allow the fund to be shown, searchable, and tradable on the App.  
[Hide]: Prevent the fund from being displayed or searchable on the App.
```

<img src="/assets/LXKWbhhNPoYS0rxFXSsjFX9lpRe.png" src-width="3782" src-height="2350" align="center"/>

Click the top-left [Create Public Fund]; entering the ISIN will allow the system to retrieve all related fund data from external data sources by ISIN, simplifying data entry—final verification is then sufficient to archive the fund into the system.

<img src="/assets/OMMlbZArBogiwDxiQDJj2572ple.png" src-width="3782" src-height="2350" align="center"/>

<b>App Display Example:</b> (If a public fund is both 'Listed' and 'Displayed')

<img src="/assets/HcekbCW3ro2o5wxSpYnj8jAtphh.jpeg" src-width="1260" src-height="2736" align="center"/>

- This module also supports bulk importing fund data. Click the top-right [Bulk Import] to import funds in bulk using a provided template.

<img src="/assets/QjQObrkQooUrHpxecMeji2BEpif.png" src-width="3782" src-height="2350" align="center"/>

### 1.2.2 Fund Channels

Menu path: Fund Management &gt; Public Fund Administration &gt; Fund Channels Tab

- This module manages platform provider information for funds, maintains fund channels, and configures delivery timepoints for each fund channel.

<img src="/assets/RqdIbMbtfoVWzcxvLjPjhn8JpEb.png" src-width="3782" src-height="2350" align="center"/>

Click the top-left [New Configuration] to add a fund channel and enter the order acquisition time and reconciliation time for that channel.

<img src="/assets/C5ZIbCD7Po9KXrx1xfVjVO4zphg.png" src-width="3782" src-height="2350" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note:The order acquisition time is the day-cut time; please fill this in accurately according to actual business requirements.Automatic reconciliation refers to pulling confirmed NAV/confirmed amount/confirmed units, etc., from third-party fund companies via API; if the broker tenant has not configured API integration, any time may be entered.</p>
</div>

### 1.2.3 Fund Companies

Menu path: Fund Management &gt; Public Fund Administration &gt; Fund Companies Tab

- This module maintains fund company information.

<img src="/assets/GRc0bPXQ9oiRP1xIUpNjLSn1pgk.png" src-width="3782" src-height="2350" align="center"/>

Click [New] to add a fund company record.

<img src="/assets/AIzzbYYTSoMMdSxn4jYjf5RipEf.png" src-width="3782" src-height="2350" align="center"/>

### 1.2.4 Fund Management Fees

Menu path: Fund Management &gt; Public Fund Administration &gt; Fund Groups Tab

- This module allows querying fund management fee settings.

<img src="/assets/WJU5bxdRPopbRsx8Nc3jhRwwpVh.png" src-width="3782" src-height="2350" align="center"/>

## 1.3 Private Funds

The private fund business system operation flow is as follows (SOP):

<img src="/assets/GueYbjWjmoRwlmx8zRhjpA6QpJf.png" src-width="1222" src-height="2080" align="center"/>

### 1.3.1 Fund Management

Menu path: Fund Management &gt; Private Funds &gt; Fund Management Tab

- This module maintains private fund data and manages fund listing and display settings.
    [List]: Include the fund in the system for trading; set the status to Listed.[Delist]: Make the fund unavailable for trading in the system.[Display]: Allow the fund to be shown, searchable, and tradable on the App.[Hide]: Prevent the fund from being displayed or searchable on the App.

<img src="/assets/HIRBbsW0hohpiOxWTPXjrh21ple.png" src-width="3782" src-height="2350" align="center"/>

Click [New] and provide the private fund’s Basic Information / Fundamentals / Subscription Rules / Redemption Rules.

The system view has been changed to a left-side tree-tab configuration page to improve data presentation.

<img src="/assets/U4J7bFjX0oA1IUxpXFcjS0qspOe.png" src-width="3782" src-height="2350" align="center"/>

Fundamentals:

<img src="/assets/JKnebadgbo7qdkxKb80jL3wtpTf.png" src-width="3782" src-height="2350" align="center"/>

Subscription Rules:

<img src="/assets/OlTKb3h3Po38vjxvDhEjjMyipCV.png" src-width="3782" src-height="2350" align="center"/>

Redemption Rules:

<img src="/assets/RQSpbX4H6owGq4xdRQ2jh3Ncpxd.png" src-width="3782" src-height="2350" align="center"/>

### 1.3.2 NAV Table

Menu path: Fund Management &gt; Private Funds &gt; NAV Table Tab

- This module maintains NAV data for all private funds.

<img src="/assets/BlJCbidMNowXmtx0jbgjTdY9pVp.png" src-width="3782" src-height="2350" align="center"/>

Click the [New] operation on the right to add a private fund NAV record.

<img src="/assets/RvG9b0Y3hoX5ZaxcqeSj5APVpue.png" src-width="3782" src-height="2350" align="center"/>

Support for editing fund NAVs:

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<ol>
<li><p>After updating, profit and loss will be recalculated; note that only modifications to the latest 30 NAV records will trigger profit and loss recalculation.</p>
</li>
<li><p>After updating, channel settlement orders for fund clearing will not be updated once reconciliation confirmation is completed.</p>
</li>
</ol>
</div>

- Locate the fund whose NAV needs editing and click the edit button.
    <img src="/assets/I7eCbwYuNo1UhvxAENkjk5Pgphg.png" src-width="3782" src-height="2350" align="center"/>

- Enter the corresponding NAV and click [Confirm].
    <img src="/assets/EOR9b6pTZoVa0Bxtimxj99yZpMr.png" src-width="3782" src-height="2350" align="center"/>

- After completing NAV edits, if NAV edit approval is enabled, the new NAV will take effect only after the approval workflow is passed; if approval is not enabled, the edit takes effect immediately.
    <img src="/assets/Wu3bbEbx2oSCXIxWuC1jazm7pGg.png" src-width="3782" src-height="2350" align="center"/>

### 1.3.3 Client Orders

Menu path: Fund Management &gt; Private Funds &gt; Client Orders Tab

- This module allows querying all private fund order records (including front-end and back-office entries) and viewing the subscription/redemption status.

At the top right, the [Fetch Orders] operation can retrieve private fund orders from the front end.

<img src="/assets/QuslbDmF0ox20qxMZ8Bjd95fpD2.png" src-width="3782" src-height="2350" align="center"/>

<img src="/assets/FikabWLZYojAXaxllPqjkmCdp6c.png" src-width="3782" src-height="2350" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note: After a back-office order is placed, the corresponding trade order information can be queried in the fund order list; order information will also synchronize to the App client and can be revoked prior to day cut.</p>
</div>

### 1.3.4 Fund Settlement

Menu path: Fund Management &gt; Private Funds &gt; Fund Settlement Tab

- This module handles private fund back-office settlement operations (including data reconciliation, subscription settlement, and redemption settlement of money and securities).

A. Data Sending

Select the corresponding fund record(s) and send them to the fund company; the system will only send data if the fund order status is 'Initialized'.

<img src="/assets/LXOgbrmeBoVqPRxnB1Sjwcrsphh.png" src-width="3782" src-height="2350" align="center"/>

B. Reconciliation / Backfill

Using the materials provided by the fund company, update the corresponding NAV and fill in each account’s and the aggregate subscription units, redemption amounts, and external charges.

<img src="/assets/S9uWbl5mTolGDAxO7R3jrfTqpcc.png" src-width="3782" src-height="2350" align="center"/>

<img src="/assets/QFiMbfZquol5zXxEnqAjGfJ2pBd.png" src-width="3782" src-height="2350" align="center"/>

C. Private Fund Settlement

Select the corresponding fund channel order ID for private settlement and complete both securities and cash settlement operations.

<img src="/assets/MBLXbfvDdoHpZsxyrQHjJq5xpkc.png" src-width="3782" src-height="2350" align="center"/>

### 1.3.5 App Listing

Menu path: Fund Management &gt; Private Funds &gt; App Listing Tab

- This module maintains the display order of private fund entities on the App.

<img src="/assets/NnLeb1QzaohOAjx2e6VjJ7fXp8R.png" src-width="3782" src-height="2350" align="center"/>

Click [New] on the right to create a private fund listing order.

<img src="/assets/NVNobJQ8koeur1xiXcMjiVEzp9d.png" src-width="3782" src-height="2350" align="center"/>

Settings will affect the display order of private funds on mobile devices.

App display examples:

<img src="/assets/Hhv8bto63odzk0xdTTujcrjqphf.jpeg" src-width="1260" src-height="2736" align="center"/>

## 1.6 App Display Management

### 1.6.1 Best-Selling Funds

Menu path: Fund Management &gt; App Management &gt; Best-Selling Funds Tab

- This module maintains the display order of best-selling fund entities on the App.

<img src="/assets/Dc6WbtI1Wo1PWZxqbmtjFSJgpef.png" src-width="3782" src-height="2350" align="center"/>

Click [New] on the right to create a best-selling fund order.

<img src="/assets/CwcUbuKdbovM82xfJJhjLcGEpce.png" src-width="3782" src-height="2350" align="center"/>

The Best-Selling Funds module is an operational fund display feature configurable in the back office. After configuring the Best-Selling Funds page, it can be displayed on the App. By default, the displayed performance period is the 3-year return.

# 2. OB Fund Management

When a tenant broker-dealer is also connected to a downstream broker-dealer that uses Whale’s BSS securities system (OB broker), the tenant may proactively pull downstream OB broker fund orders and perform quota checks.

Overall process reference:

<img src="/assets/B6E1brvpsoUhxHxpLtZjBM51pZe.png" src-width="1354" src-height="636" align="center"/>

## 2.1 Fund Account Management

Menu path: OB Fund Management &gt; Fund Account Management

<img src="/assets/Ek2JbQ1OgoeVttxGMQ5jzuvnpJf.png" src-width="3782" src-height="2350" align="center"/>

- This module maintains OB account information opened by downstream broker-dealers. Click [New] in the top-right to add an OB account record.

<img src="/assets/VbPKbDg8tozaK8xNQPKjlFGHp7d.png" src-width="3782" src-height="2350" align="center"/>

## 2.2 OB Reported Order Management

Menu path: OB Fund Management &gt; OB Reported Order Management

- This module functions similarly to the Client Orders module described above, but it allows an upstream broker to manage downstream broker fund orders from the upstream broker’s perspective.

Note: The downstream OB broker must first perform [Order Synchronization] in its Whale Fund system before the upstream broker can view the fund order records.

<img src="/assets/GQZ5bSg0EoaLy9xufrxjbX2vpye.png" src-width="3782" src-height="2350" align="center"/>

For the upstream broker:

1. Fund orders submitted by the downstream OB broker initially represent subscription requests that must undergo approval by the upstream broker before becoming formal upstream broker fund orders. Order statuses include:
    - Pending Generation: The initial state after synchronization (the upstream broker’s initial state for fund orders synchronized from the downstream OB broker).
    - Rejected: State after order rejection.
    - Generated: (Order has been generated.)
    - Downstream Withdrawn: Downstream has cancelled the order.

2. Before generating an upstream broker fund order, the downstream OB account balance must be checked. After the check, the tenant OB account’s corresponding [Account Balance] and [Holding Units] data will be displayed to assist the upstream broker in approving the downstream OB broker’s subscription/redemption requests.
    Click [Balance Check] in the right-side operation area of the record; the system will calculate the current fund account balance and holding units for that OB account.

<img src="/assets/ZCKHbRzXao7RZbxVGxkjgHnRpvc.png" src-width="3782" src-height="2350" align="center"/>

# 3. Fund Order Entry (Back Office)

The Whale system provides three terminals for fund trading: the LongPort App, the WTT terminal, and the WBO back office. This module pertains to back-office fund order entry, enabling direct entry of a fund trade order (including private and public funds) — either subscription or redemption — in the WBO back office.

Menu path: Trading Panel &gt; Fund Order

<img src="/assets/WtBSbpQCEolLrgxWyxjjdLMUpac.png" src-width="3782" src-height="2350" align="center"/>

(Subscription / Redemption): Steps to enter a back-office fund order are as follows:

- After entering the basic client account, the client account’s available purchasing power will be displayed.

<img src="/assets/RJ9Kb8JvkoLIxfxp4avjJkdnpae.png" src-width="632" src-height="354" align="center"/>

- Next, enter the corresponding fund channel order (subscription), the fund channel and fund product, and the subscription amount. If subscription handling fees are entered on the order page, once approved the fees will be directly deducted from the user’s cash balance in the corresponding currency.
    Note: The system will evaluate <b>Subscription Fee + Subscription Amount &gt;= Cash</b>.
    <img src="/assets/OEOWbYhkdodihLxtJtMjSUJqpRe.png" src-width="3782" src-height="2350" align="center"/>

Or enter the corresponding fund channel order (redemption), the fund channel and fund product, and the redemption units.

- After verifying that the basic information is correct and submitting, the order will appear in the fund orders area below; you may use the operation area on the right of the record to revoke the order.
    Note: If the back office has begun retrieving front-end fund orders, a back-office entered fund order cannot be revoked.

<img src="/assets/Aqt6b43CaowiN7xgqCSjeFZjpSX.png" src-width="3782" src-height="2350" align="center"/>

