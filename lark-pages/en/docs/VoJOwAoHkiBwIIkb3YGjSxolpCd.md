---
title: 12.0.1 Settlement Reports (SDR Category)
slug: X455wbGfliAlc7k7p1dckyjin7e
sidebar_position: 0
---


# 12.0.1 Settlement Report (SDR Category)

# 12.0.1 Settlement Reports (SDR Category)

# 12.0.1A Q: What is the SDR070 - OTCR report used to declare?

<b>A:</b> The SDR070 - OTCR report is used to declare physical share transfers out and in. Corporate actions that are not subject to stamp duty will not appear on the report; cash offers will be declared. The report can be exported to Excel for upload to the exchange.

# 12.0.1B Q: Under the Over-the-Counter Reporting Regime (OTCR), must corporate actions such as cash offers be reported?

<b>A:</b> If a corporate action does not involve a transaction subject to stamp duty (for example, new share issues, public offers, rights issues and privatizations) or is a transaction that must be reported to the Stock Exchange (for example, existing share placements carried out by exchange participants), then such corporate actions do not constitute over-the-counter transactions. Accordingly, under the OTCR, share transfers related to those corporate actions do not need to be reported.

On the other hand, if the relevant regulated intermediary (whether acting as principal or agent) effects a share transfer in relation to a cash offer (which is an over-the-counter transaction), that regulated intermediary must report the share transfer under the OTCR. In such cases, the regulated intermediary must report to the Securities and Futures Commission under the OTCR within three Hong Kong trading days following the date of the share transfer (i.e., the settlement date on which the regulated intermediary becomes aware that the accepted offer has been settled, which is also the reportable transaction date under the OTCR).

# 12.0.1C Q: What do the SDR025 - Stock Reconciliation Report task results Successful Check / Manually Confirmed / Manually Unrecognized mean?

<b>A:</b> The task results in SDR025 correspond to the Task Result column on the Clearing Management &gt; Clearing Check &gt; Check Results page.

- Check passed: Successful Check;
- Check failed but manually approved: Manually Confirmed;
- Check failed and not manually approved: Manually Unrecognized.

<img src="/assets/Ehthb36SToLItaxLj5ujQiv3pHb.png" src-width="2074" src-height="850" align="center"/>

# 12.0.1D Q: When will bargain-detail reports of the SDR018 category show the day’s trading data?

<b>A:</b> The earliest time is after the end-of-day task completes the settlement posting; you can then view the day’s transaction commission information in the SDR018 report.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>For U.S. equities, refer to SDR018-1 - Bargain Detail Report-US.</p>
</div>

<img src="/assets/ZJ0PbzUMbokp19xdCccjqytapGf.png" src-width="2246" src-height="1486" align="center"/>

# 12.0.1E Q: How are clients’ monthly custodian fees calculated?

A: The SDR058-2 HK Custodian Fee Group by Client V2 report can compute this. The applicable fee rates can be modified in Report Management &gt; Report Printing &gt; Parameter Settings (see Figures 12.0.1E-1 and 12.0.1E-2). Custodian fee deductions are performed using manual adjustments; fees can be collected using the "Aggregate by Securities Account" charge (see Figure 12.0.1E-3).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>“Other client fee rates” refer to joint accounts and other account types.</p>
</div>

<img src="/assets/Hizxb3ZypomfSTx0m6wjuiU1pId.png" src-width="2712" src-height="986" align="center"/>

<em>Figure 12.0.1E-1</em>

<img src="/assets/Nbfsbnd50oZYbnxu9JKj3iIlp8g.png" src-width="2384" src-height="922" align="center"/>

<em>Figure 12.0.1E-2</em>

<img src="/assets/FakMb6MvyosaMUxBqExj6Q4JpKg.png" src-width="2392" src-height="406" align="center"/>

<em>Figure 12.0.1E-3</em>

# 12.0.1F Q: How can I view the platform fee and commission charged per client transaction?

A:

1. First, under Billing Management &gt; Charging Scenarios, create a new billing scenario named “Agency Charge - Stock Trading.”

<img src="/assets/F0cwbF2sTokQ0ExljlRjkDLxpAf.png" src-width="2866" src-height="1610" align="center"/>

1. Configure the charges within the relevant “Agency Charge - Stock Trading” billing scenario.

<img src="/assets/KxxrbYimvoIUNJxmxI0job6Apec.png" src-width="2836" src-height="1430" align="center"/>

1. View the fees in the SDR048 - Broker Contract Details report.

<img src="/assets/O7FSbA8euoWPMOx3Q7mjGZk6pgb.png" src-width="2848" src-height="1214" align="center"/>

