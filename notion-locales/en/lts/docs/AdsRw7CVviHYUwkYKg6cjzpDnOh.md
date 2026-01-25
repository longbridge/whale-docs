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

<img src="/assets/BW33bTngOoZt4xxbDDpjaDndpxd.png" src-width="2418" src-height="1148" align="center"/>

Basic Page Field Descriptions

1. For clients included in monitoring alerts, selecting a record enables subsequent actions: Send Message / Close Positions / Set Auto-Liquidation / Send Voice Message.

<img src="/assets/GV4NbqssgoMK8Dx5sNJjqMl6pnc.png" src-width="2524" src-height="914" align="center"/>

1. When executing a liquidation, you can choose whether to liquidate specific securities.

<img src="/assets/AlCfbjN23oMVqPxdDXDjoIOOpre.png" src-width="2506" src-height="908" align="center"/>

1. Set Auto-Liquidation: You can customize the automatic liquidation time; additionally, you can adjust the deadline of certain Margin Calls according to actual business needs.

<img src="/assets/Sxbfb10iRotAHtx77sKjMVaYpNg.png" src-width="2472" src-height="888" align="center"/>

1. You can also click "Details" on the right side of a monitored customer's record to view an overview of the customer's assets, position details, and cash details to assist with liquidation; the details page also supports liquidation and sending messages.

<img src="/assets/GEMCbPCMLomGoYxVJK7jMRe4pVh.png" src-width="3546" src-height="384" align="center"/>

<img src="/assets/LMJObAa9qoOVpKxxCpgjnBLspGf.png" src-width="3616" src-height="1782" align="center"/>

1. Edit remarks on the current alert record for subsequent handling or reference for others; additionally, if marked as an exception, the record can be viewed in the "Exception" list page.

<img src="/assets/TrSubEiPzoq9AxxHHSAjRqqHp4c.png" src-width="3540" src-height="1096" align="center"/>

<img src="/assets/KzOWbZfKroz0NNxrQm5jHP70pfd.png" src-width="3614" src-height="596" align="center"/>

About Exception Records:

There may be special cases in which a client has only outstanding debts but no positions, making it impossible to resolve the margin call through forced liquidation; these cases must be handled manually. Such exception records should not receive notifications as frequently as normal margin calls.

In such cases, a trader can change the margin call record status to "Exception," so that the margin call will not send daily messages to the user.

## 2. Intraday Financing Real-Time Alerts

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; Intraday Financing Real-Time Alerts</p>
</div>

Menu Function Description: This menu's functionality and operational logic are the same as "Real-Time Alerts," but it is targeted only at intraday financing accounts.

<img src="/assets/DuVRbzDLNoHFvbxIL3vjUxqypsE.png" src-width="3854" src-height="1979" align="center"/>

## 3. Liquidation Orders

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; Liquidation Orders</p>
</div>

Menu Function Description: This menu is used to view all liquidation records, and in case of liquidation operation errors, allows cancellation of liquidation orders.

<img src="/assets/Tr9pbzkVroz0Udx5FzAjDqNip4g.png" src-width="3734" src-height="1464" align="center"/>

## 4. Covered Options Stock Collection

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; Covered Options Stock Collection</p>
</div>

Menu Function Description: This menu displays records where the underlying stocks for covered options are insufficient and require stock collection.

1. The list displays all collection records.

<img src="/assets/KBuqbmmhoogVKgxNGxajGktjpJe.png" src-width="3828" src-height="1450" align="center"/>

1. Click "Details" to view the client's margin call details and to support options position liquidation.

<img src="/assets/A57vbktl4oNzIXxNpZtjpaXup7b.png" src-width="3610" src-height="1792" align="center"/>

## 5. Short Stock Recovery

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Margin Call  &gt; Short Stock Recovery</p>
</div>

Menu Function Description: This menu displays records of short stocks that need to be recovered (not updated in real time).

1. The list displays all recovery records.

<img src="/assets/PP6tbhJoFotsA9xuAUGjAK44pdh.png" src-width="3828" src-height="1970" align="center"/>

1. Click "Details" to further view the client's margin call details and to support closing short stock positions.

<img src="/assets/D42AbjPnso11uDxX7QijiqAWpSe.png" src-width="3278" src-height="1798" align="center"/>

