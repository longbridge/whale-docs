---
title: Frequently Asked Questions
slug: YLQ8wrjDgizykFkIP9ocQ000nLf
sidebar_position: 3
---


# Frequently Asked Questions

# End-of-Day Initialization Configuration

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How is end-of-day processing handled for multiple Hong Kong and U.S. markets?</p>
</div>

```text
Configure clearing for both markets, and designate the U.S. market as an overnight market.

Perform clearing for the U.S. market for the previous day every morning, and execute Hong Kong market clearing and end-of-day processing in the afternoon.
```

<img src="/assets/RTYXb0I71oqWxJxadfxjYzTxp33.png" src-width="3574" src-height="1774" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How are settlement statements generated separately for Hong Kong and U.S. markets?</p>
</div>

```text
Hong Kong and U.S. trades use the same account. Therefore, settlement statements are generated uniformly and market-separated generation is not supported.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How to handle inconsistent time zones between Hong Kong and U.S. markets?</p>
</div>

```text
Configure the U.S. market as an overnight market in Market Management.

Consequently, the clearing for the 28th will process Hong Kong trades dated the 28th and U.S. trades dated the 27th (U.S. time zone).
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Can end-of-day clearing be completed within a single workflow?</p>
</div>

- Path: Business Parameter Settings - End-of-Day Settings - Clearing Parameter Configuration
- Editable period: before initiating the end-of-day task
- Editing clearing initialization configuration requires approval
    - Work order identifier: clearing.update_system_config.exec

<img src="/assets/FHWZb0bwHoSKB0xAjcyjWss9pwh.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/SAkzbvIzeoU9gDx0ypHjWcRVp0g.png" src-width="3574" src-height="1774" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ If we want to rely on public repository market data but maintain our own closing prices without being overwritten by the public repository, how should we handle this in the clearing process?</p>
</div>

<b>It is recommended to add instruments directly to the private instrument repository rather than using the public repository.</b>

If necessary, proceed as follows:

- Set the stock information source in Market Rules to not depend on the public repository.

<img src="/assets/H8gDbuvAHoY21jx53iyjhSt0piu.png" src-width="3020" src-height="1452" align="center"/>

- If you need to add new instruments, you may choose to sync information from the public repository and then perform secondary maintenance.

<img src="/assets/NwQtbU2Mwoc7T6xakLXjyPA0p2c.png" src-width="3020" src-height="1452" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ If a market only conducts OTC business and you do not want to maintain a separate market calendar, what should be done?</p>
</div>

- <b>Configure the market as OTC to simplify the process</b>
    - After configuration, the market does <b>not</b> require a calendar; any non-weekend day may be considered a trading day.
    - After configuration, the market <b>may</b> accept manual order entry even if it is not included in the end-of-day process. When executing end-of-day, this market will <b>follow the primary market</b> for market clearing.

<img src="/assets/KDrob7O0ooEU6axyB2zjPSSYpug.png" src-width="3020" src-height="1452" align="center"/>

# Execution of End-of-Day Tasks

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How to query future accounting dates?</p>
</div>

<img src="/assets/E3MDbB9hconvjZx5Hvmj3Xhjp5e.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/Hgv9bJjKjoEk1PxIpDujO17WppT.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How can end-of-day be executed early for a half-day Hong Kong market?</p>
</div>

<img src="/assets/DipobdOoXocvHwxsWO5jAIttpJb.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/E5C2bxQiXovUkYxCldfj8507p0g.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Is it permissible to perform clearing before the scheduled day-roll time?</p>
</div>

```text
It is permissible, but only after public repository market data files have been received.

Example: A broker's day-roll time is 17:00. On non-half-day markets, an early day-roll can be performed before 16:30. However, because the Hong Kong market may still be open, Hong Kong stock information and closing price data might be unavailable, so end-of-day tasks must wait until after 16:30.

**Therefore, on non-half-day markets or when it is not a Hong Kong holiday, it is not recommended to perform an early day-roll before 16:30.**
```

<img src="/assets/Pj09b5EjZoPtK0xQHApjQge7p4d.png" src-width="3584" src-height="1764" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ If you want to modify the charge for a specific client&#39;s trade on the same day, how should it be handled?</p>
</div>

<b>Method 1: Modify the charging channel</b>

<img src="/assets/GyHHbVmAAomKspx0TxEjc8mdpmh.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/L6bLbU1MyoWxykxVsPbj9MGIp51.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/DoT3b7bh0ofnh1xjvY3jyscBp4e.png" src-width="2878" src-height="1364" align="center"/>

<img src="/assets/KXONbwUS3og15Jx53Ilj1tEOpXc.png" src-width="2602" src-height="490" align="center"/>

<b>Method 2: Modify the contract</b>

<img src="/assets/FNeIbo6A2o0ltsxYejEjEzw8pdd.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/MAJXbFp1XoXXuixfR8QjhzzGp2e.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/Odcbbr751oo6XnxKxpCj9d7EpKh.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/HlRGbEx5xok8XrxKJR1jjETepQg.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/Lm2PbE07LodO89xI0IojAOQYppf.png" src-width="2602" src-height="490" align="center"/>

# Client Fee Configuration and Inquiry

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How to add a fee, and what is a charging scenario?</p>
</div>

```text
Fees are added directly by technical staff; brokers can create charging scenarios based on available fees.

A charging scenario is a foundational element of billing configuration; it indicates whether a fee is formally enabled in the system. The system provides convenient features based on charging scenarios.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ After modifying stock trading fee configurations, when do changes take effect and how to verify effectiveness?</p>
</div>

```text
Please modify fee rules before the clearing billing step for the corresponding market. Changes take effect within 10 minutes.

You can verify using the Client Billing Inquiry page (Path: Business Parameter Settings - Billing Management - Client Billing Inquiry); this page displays the most up-to-date data.

If you want changes to take effect immediately, click the Refresh Configuration button.
```

<img src="/assets/M4BSbjdlnoZmMDxXEbMjPqlapZf.png" src-width="2854" src-height="1358" align="center"/>

<img src="/assets/CM8mb3O3soF5luxt9L8jUzSzpJb.png" src-width="2854" src-height="1358" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ If you intend the updated fee configuration to take effect immediately</p>
</div>

<img src="/assets/SPy2bXXKFoMUFyxW41zjBrAMpUe.png" src-width="830" src-height="396" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How to view which configuration was used to calculate the commission for a past trade?</p>
</div>

<img src="/assets/F1Lpb0g9MohQ2RxsCyoj82U7p0c.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/QGYGbY5zLosNLExH5fOjjXSZpxe.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/BBiMbN1BioVGAixcg7yjEaQHpem.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ After negotiating commission with a client, how to modify it?</p>
</div>

<img src="/assets/RC5Qbf18zoptwqxM9dojiBGTpl1.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/V22jbAQ20ocQhPx2PssjEiTlpuc.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/NsOybeqRSoJSYsxgX1qjrCF6plS.png" src-width="1079" src-height="1329" align="center"/>

<img src="/assets/XeWLbHWRyoT8Ybx93SkjudUdpfc.png" src-width="830" src-height="396" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ A client wants to be charged a higher fee for orders placed via the WTT channel. How to handle this?</p>
</div>

```text
If you want to set this for a single client, add a client-specific billing entry on the Client Billing page (Path: Billing Management - Client Billing). Set the standard fee as the base rate and add a WTT-specific special charge with the applicable rate.

If you want to set this for a single client group, add billing for the ordinary client group on the Client Group Billing page (Path: Billing Management - Client Group Billing). Set the standard fee as the base rate and add a WTT-specific special charge with the applicable rate.

If you want to set this for all clients, add billing to the Global Client Group on the Client Group Billing page (Path: Billing Management - Client Group Billing). Set the standard fee as the base rate and add a WTT-specific special charge with the applicable rate.
```

<img src="/assets/OW2Vb6YtGoh5bsxnp76j9lF0pce.png" src-width="3578" src-height="1798" align="center"/>

# Instrument Information Modification

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ What is the difference between the public instrument repository and the private instrument library?</p>
</div>

```text
The public instrument repository information is processed by Whale based on sources such as the Hong Kong Exchange; brokers have temporary edit permissions. Private library information is fully maintained by the broker.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How to temporarily modify information in the public repository?</p>
</div>

```text
Brokers may temporarily modify instruments in the public repository for the day and should promptly report modifications to Whale Customer Support for subsequent data updates and maintenance.
```

<img src="/assets/VQOib8uiYoqflFxom5ZjNmHmp6f.png" src-width="2864" src-height="1368" align="center"/>

<img src="/assets/N7EdbVRuXomoBDx8zkij7VuXpNc.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ When is it permissible to temporarily modify instrument information and closing prices in the public repository?</p>
</div>

Operations may be performed after data synchronization:

```text
If modified before data aggregation, no additional steps are required.

If modified before funds clearing, data aggregation and clearing checks must be re-executed.

After funds clearing, modifications are not permitted.
```

<img src="/assets/HhQJbXabtoznJkxI6YQjVZc2pid.png" src-width="2864" src-height="1368" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ If a security is suspended for more than three trading days, will the closing price be set to 0?</p>
</div>

The system uses third-party data to determine whether suspension has reached three trading days. If it has reached three trading days, the settlement statement closing price (for suspended instruments) will be set to 0. If there are errors in the suspension day calculation, or if you wish to preemptively set the closing price to 0 during suspension, you may directly modify that field.

Beyond settlement statements, certain reports also use the closing price in their calculations.

<img src="/assets/UtkpbMMIwobdxUxhfd8jCWJvpOh.png" src-width="2876" src-height="1346" align="center"/>

# Backend Manual Order Entry

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Will a customer&#39;s funds be immediately frozen after submitting a backend manual order entry?</p>
</div>

No. Funds will only be formally affected after completing the end-of-day task — specifically, after the day-roll step — when asset account operations are applied.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ What needs to be configured when adding a new agent?</p>
</div>

Path: Clearing Parameter Settings - Market Management - Service Provider: configure basic information and position reconciliation method.

Path: Clearing Parameter Settings - Market Management - Sub-Account: configure sub-accounts.

Path: Clearing Parameter Settings - Market Management - Settlement Channel: configure transaction reconciliation methods.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ What should be noted when entering bonds in backend manual order entry?</p>
</div>

<img src="/assets/PBg0bHkaHoVMKkxHPezjKRodpdg.png" src-width="3564" src-height="1768" align="center"/>

<img src="/assets/IrVjbajFQoMZAzxK3COj4zDrpsf.png" src-width="3564" src-height="1768" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How to set charges for over-the-counter (OTC) trades separately?</p>
</div>

Create a new charging scenario.

<img src="/assets/LUJZbIKZXohaLgxaHHVjyKMHpQf.png" src-width="3020" src-height="1452" align="center"/>

- Specify rates and add clients within package billing or personalized billing.

<img src="/assets/PEghbsmnqoCEkIx9621jpdSupTe.png" src-width="3020" src-height="1452" align="center"/>

- Verify the final configuration on the Client Billing Inquiry page.

<img src="/assets/ZdWfbxftJoPvDZxHg20jrmdIpke.png" src-width="3020" src-height="1452" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ When performing manual order entry, how to input bonds using face value?</p>
</div>

- When adding a trade record, click to toggle input mode.
- Note: The toggle function applies only to bonds in the private library.

<img src="/assets/R5GNbzkSto5gVixbep6jsENqp4e.png" src-width="3008" src-height="1494" align="center"/>

# Transaction Reconciliation

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Why are there multiple reconciliation modes?</p>
</div>

```text
Different upstream providers supply transaction files in different formats and with different fields. Therefore, multiple reconciliation modes exist. Common reconciliation modes include trade-level reconciliation, order-level reconciliation, and stock-level reconciliation. Each mode compares transaction quantities and transaction amounts (quantity * execution price).

Trade-level reconciliation: pairs based on trade sequence numbers, comparing quantities and amounts.

Order-level reconciliation: pairs based on order numbers; multiple trades under one order will be aggregated.

Stock-level reconciliation: pairs based on securities; multiple trades for the same security will be aggregated.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ After backend or frontend manual order entry, imbalance may occur due to missing sequence numbers. How to address this?</p>
</div>

```text
Solution 1: Use the SDR015-2 report. Check the third module and manually compare imbalances to determine whether stock-level reconciliation results are balanced. If balanced, manually approve.
```

<img src="/assets/PWOfb3SfzodCPwxEhYfjqvuqp2g.png" src-width="3584" src-height="1696" align="center"/>

```text
Solution 2: Enable fuzzy reconciliation.

Turn on the fuzzy reconciliation option in Clearing Parameter Configuration.
```

<img src="/assets/UaQgbJog6o3V8axZqYxjeKyHpzc.png" src-width="3584" src-height="1696" align="center"/>

```text
If there are imbalances, the system will automatically re-reconcile by security.

If re-reconciliation by security results in balance, the system will treat the "stock-based reconciliation result" as balanced; otherwise, it will remain unbalanced.

If the "stock-based reconciliation result" is balanced, the clearing check will automatically pass.
```

<img src="/assets/UDFkbGJQKoQcg1xupNKjdY4TpXd.png" src-width="3584" src-height="1696" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ CTF trade files automatic import</p>
</div>

<b>Activation</b>

```text
Brokers operating in EP mode may contact Customer Support to enable this feature. Once enabled, the system will automatically retrieve trade files from the Hong Kong Exchange SFTP each trading day.
```

<img src="/assets/IMXwbDRhTocWIFxBolyj4TBnpph.png" src-width="3584" src-height="1764" align="center"/>

<b>If scheduled files are missing</b>

```text
The system begins automatically fetching HKEX files from 13:00. If no file is retrieved (manual imports are also considered as imported), the system retries every 10 minutes until 17:00.

If the tenant notices after 16:35 (or after 13:05 for half-day markets) that the system has not auto-imported, manual import may be performed.
```

# Position Reconciliation

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ When is position reconciliation performed?</p>
</div>

```text
For the Hong Kong market, position reconciliation is performed the next day for the previous day's positions, after the prior day's day-roll and upon receipt of files.

The U.S. market is treated as an overnight market; reconciliation may be performed for the current accounting date. The earliest time to perform is after the clearing settlement step.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How is the position reconciliation task triggered?</p>
</div>

```text
Files whose file types are marked to trigger position reconciliation can automatically initiate position reconciliation upon import.

Note: For OB mode, if position reconciliation must be triggered on the same day, import the position file after clearing settlement.
```

<img src="/assets/FUcEbXrtRobEvWxkHWZj3oXApvf.png" src-width="3572" src-height="1662" align="center"/>

```text
If the position file does not support “automatic trigger for position reconciliation,” click “Reconcile Again” on the Position Reconciliation page.
```

<img src="/assets/CLzSbG8xvoVrG8x8yYojoTn8pDb.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Is position reconciliation required on non-trading days?</p>
</div>

```text
No. The system does not support initiating position reconciliation on non-trading days.
```

<img src="/assets/Zijnb4MLkoPABBxHIivjVeVZpIh.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ After position reconciliation shows discrepancies, how to confirm?</p>
</div>

```text
Review discrepancy details to identify missing internal transfers, corporate actions, or other operations.
```

<img src="/assets/J6wRbgAM3og0lMx6vJkjhUXcpZf.png" src-width="3572" src-height="1662" align="center"/>

```text
After confirming items one by one, click Approve on the Check Results page.
```

<img src="/assets/BJhXbLQ4borbvwxpRA2jSg8mpse.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/Wxs7bYIh0o6VwXxHKKNj37XOp1f.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/NElbbUYVcoXCcXxWuvFjqP1Opad.png" src-width="3572" src-height="1662" align="center"/>

# Early Settlement of Trades

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ How can the Hong Kong market allow users to withdraw funds in the morning?</p>
</div>

```text
Method 1: Enable the “11:00 HK auto settlement” and “Auto settlement after US day-roll” tasks.

Path: Business Parameter Settings - End-of-Day Settings - Clearing Parameter Configuration
```

<img src="/assets/OOdwbf0euoaaojxaDAajmzOtpbg.png" src-width="3570" src-height="1774" align="center"/>

```text
Method 2: Manually perform early settlement.

Path: Clearing Management > Market Clearing > Settlement System > Settlement Batches tab

Select [Early Settlement], and choose the market(s) you wish to settle early.
```

<img src="/assets/X85hb9fVyoWnW8xS9GwjP7JHpcg.png" src-width="3364" src-height="1450" align="center"/>

```text
After operation, monitor whether the settlement batch has completed processing.
```

<img src="/assets/XuNfbBrVZobwjUx7Tq1jBWrvped.png" src-width="2516" src-height="740" align="center"/>

# Internal Position Transfers When Switching Upstream Providers

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ After switching the upstream provider, how to perform internal position transfers in the system?</p>
</div>

```text
**Method 1: Single-record operation**

Operation path: Clearing Management - Position Management - Position Query

a. Data filtering

- Date range: set to the "current accounting date" to filter relevant data for the day.
- Other criteria: when necessary, further filter by client, security, etc., to narrow results.

b. Execute internal position transfer

- **Process individually:** Execute internal transfers for each client and for each security as required.

c. Notes

- Perform these operations before clearing inspection.
- Even if clearing is later undone, the system retains records of these operations.
```

<img src="/assets/F50ObI93KoVmUnxjMWAjdR67pwe.png" src-width="3570" src-height="1774" align="center"/>

<img src="/assets/I33MbH72Zoy1YuxgrpvjqS9Zp7b.png" src-width="3570" src-height="1774" align="center"/>

<b>Method 2: Bulk operation</b>

```text
- Operation path: Clearing Management - Position Management - Position Query
- Perform operations before clearing inspection.
- Even if clearing is later undone, the system retains records of these operations.
```

<img src="/assets/Yc4ibAAEuoTheqxeo7Gj7HsepDR.png" src-width="3570" src-height="1774" align="center"/>

```text
**Modify sub-account template**

- Field descriptions are shown in the figure.
- Follow the documented example:
    - The system will locate the Hong Kong market holdings for client H123456 custodied in U123445, and transfer them all to U23333.
- Note: Uploading a modified sub-account template will also update pending settlement contracts.
```

<img src="/assets/J8TKb7yzWo1UQjxcMkdjosCrpkb.png" src-width="3570" src-height="1774" align="center"/>

```text
**Base position adjustment**

- Field descriptions are shown in the figure.
- Follow the documented example:
    - The system will decrease client H1000001's ST/HK/700 holding by 1,000 shares in Custodian ID1 Sub-Account 3;
    - The system will increase client H1000001's ST/HK/700 holding by 1,000 shares in Custodian ID1 Sub-Account 4.
- The base position adjustment template will not modify pending settlement contracts. The template can simultaneously adjust Street, Nominee, and Own. When using this template for internal transfers, paired data (two records) is required.
```

<img src="/assets/A14pbHrJwoZHtXxkBg4jKUc2pjf.png" src-width="3570" src-height="1774" align="center"/>

