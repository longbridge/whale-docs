---
title: Feature Introduction
slug: AdsRw7CVviHYUwkYKg6cjzpDnOh
sidebar_position: 3
---


# Feature Overview

# Feature Introduction

# Overview

When a client's net asset value falls below the maintenance margin level due to market fluctuations, the system will issue a Margin Call notification to the client. The client must either deposit additional funds or close positions within three trading days; otherwise, the firm is authorized to liquidate positions on the client's behalf without prior notice.

<img src="/assets/FanXbeCCGobJsJxRdoojMUiSpEc.png" src-width="2564" src-height="754" align="center"/>

# Operational Management

## 1. Risk Alerts

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; Risk Alerts</p>
</div>

Menu Function Description: This menu supports real-time margin alert monitoring.

1. The list displays all current alert customer records. In the left panel, green text provides real-time update prompts (displaying the latest computed results); additionally, the header area aggregates the total amount of margin to be collected for current alerts and the total amount of long-term unsettled margin to be collected.

<img src="/assets/Me03bAHMVoOqSRxHvEJjAvr0ppd.png" src-width="3004" src-height="1722" align="center"/>

Basic Page Field Descriptions

<table header_row="1">
<colgroup>
<col width="257"/>
<col width="563"/>
</colgroup>
<thead>
<tr><th><p>Field</p></th><th><p>Description</p></th></tr>
</thead>
<tbody>
<tr><td><p>Total Margin to Be Collected</p></td><td><p>The total amount of margin to be collected from all clients in margin call.</p></td></tr>
<tr><td><p>Long-Term Unsettled Margin to Be Collected</p></td><td><p>The total amount of margin to be collected for alerts that were triggered more than 90 days ago.</p></td></tr>
<tr><td><p>Alert Type</p></td><td><p>The type of margin call that was triggered.</p></td></tr>
<tr><td><p>Deadline</p></td><td><p>The final deadline for the user&#39;s margin call; after this date, the system will no longer send messages.</p></td></tr>
<tr><td><p>Elapsed Duration Since Trigger</p></td><td><p>Current time minus the alert trigger time (durations less than one hour are treated as one hour).</p></td></tr>
<tr><td><p>Net Asset Ratio</p></td><td><p>Net Asset Ratio = Liquid Net Assets / max[Liquid Net Assets, Long Position Market Value - Delisted and Long-Suspended Stock Market Value + abs(Short Position Market Value)].</p></td></tr>
<tr><td><p>Liquid Net Assets</p></td><td><p>Equity assets minus the market value of delisted and long-suspended stocks.</p></td></tr>
<tr><td><p>Equity Assets</p></td><td><p>Total cash plus total position market value (including all stock and derivative position market values).</p></td></tr>
<tr><td><p>Margin to Be Collected</p></td><td><p>max(margin call margin - net assets + accrued interest + outstanding margin deposit - trading limits, overfinancing limits). Specific settings can be configured in the WBO backend.</p></td></tr>
</tbody>
</table>

1. For clients included in monitoring alerts, selecting a record enables subsequent actions: Send Message / Close Positions / Set Auto-Liquidation / Send Voice Message.

<img src="/assets/XjdZbCausorALIxr8LsjtXhhpSh.png" src-width="3024" src-height="1888" align="center"/>

1. When executing a liquidation, you can choose whether to liquidate specific securities.

<img src="/assets/KKopbgH9Bow0huxjHJVj5gAop0c.png" src-width="2968" src-height="1888" align="center"/>

1. Set Auto-Liquidation: You can customize the automatic liquidation time; additionally, you can adjust the deadline of certain Margin Calls according to actual business needs.

<img src="/assets/KCaFbIhFCo4FuwxEYeRjFfelpad.png" src-width="3024" src-height="1888" align="center"/>

1. You can also click "Details" on the right side of a monitored customer's record to view an overview of the customer's assets, position details, and cash details to assist with liquidation; the details page also supports liquidation and sending messages.

<img src="/assets/CSEob55ePo5x3TxnxhGj3F0lpMb.png" src-width="3024" src-height="1888" align="center"/>

<img src="/assets/FDUGbkfr0ohKp1xt8hhjgSjLp2g.png" src-width="3024" src-height="1888" align="center"/>

1. Edit remarks on the current alert record for subsequent handling or reference for others; additionally, if marked as an exception, the record can be viewed in the "Exception" list page.

<img src="/assets/P8BfbG8z7ohLMAxkd23jRxOMpsK.png" src-width="3024" src-height="1888" align="center"/>

About Exception Records:

There may be special cases in which a client has only outstanding debts but no positions, making it impossible to resolve the margin call through forced liquidation; these cases must be handled manually. Such exception records should not receive notifications as frequently as normal margin calls.

In such cases, a trader can change the margin call record status to "Exception," so that the margin call will not send daily messages to the user.

## 2. Intraday Financing Real-Time Alerts

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p> Margin Call  &gt; Intraday Financing Real-Time Alerts</p>
</div>

Menu Function Description: This menu's functionality and operational logic are the same as "Real-Time Alerts," but it is targeted only at intraday financing accounts.

<img src="/assets/YrXvbXOMKog8uzxMl4sju4Fgpvd.png" src-width="3024" src-height="1886" align="center"/>

## 3. Liquidation Orders

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Margin Call  &gt; Liquidation Orders</p>
</div>

Menu Function Description: This menu is used to view all liquidation records, and in case of liquidation operation errors, allows cancellation of liquidation orders.

<img src="/assets/IZISbW4gOouZH1xfeLPjusaNpdh.png" src-width="3024" src-height="1888" align="center"/>

## 4. Covered Options Stock Collection

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Margin Call  &gt; Covered Options Stock Collection</p>
</div>

Menu Function Description: This menu displays records where the underlying stocks for covered options are insufficient and require stock collection.

1. The list displays all collection records.

<img src="/assets/PImgbGfW4ohb9IxTo0FjbfKdpKd.png" src-width="3024" src-height="1888" align="center"/>

1. Click "Details" to view the client's margin call details and to support options position liquidation.

<img src="/assets/D1N9b7XOsod2GVxHu3PjN3iRpBd.png" src-width="3024" src-height="1888" align="center"/>

## 5. Short Stock Recovery

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p> Margin Call  &gt; Short Stock Recovery</p>
</div>

Menu Function Description: This menu displays records of short stocks that need to be recovered (not updated in real time).

1. The list displays all recovery records.

<img src="/assets/I1ahbzJK8oo94YxgzZlj9Evppig.png" src-width="3024" src-height="1888" align="center"/>

1. Click "Details" to further view the client's margin call details and to support closing short stock positions.

<img src="/assets/J0IlbsgsBoACBFxy5z1j0wTUpud.png" src-width="3024" src-height="1888" align="center"/>

