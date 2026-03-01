---
title: Quick Start
slug: E4biwQTSZibDsrkwnDrclQ68nDf
sidebar_position: 1
---


# Quick Start

# Overview

The Margin Call system provides functions for risk alert inquiries, liquidation operations, and stock recovery, meeting traders' needs for intraday monitoring, inquiry, and immediate liquidation.

# Usage

To utilize the full functionality of Margin Call, it is recommended to also purchase and integrate the WBO backend.

Backend: Supports basic configuration according to risk management strategy requirements, such as liquidation rules and additional margin amount settings.

Frontend: Provides traders with intraday risk alert inquiry and liquidation operation capabilities.

# Prerequisites

You must obtain the following permissions to use the system features normally.

<table header_row="1">
<colgroup>
<col width="576"/>
<col width="333"/>
</colgroup>
<thead>
<tr><th><p>Permission Name</p></th><th><p>Description</p></th></tr>
</thead>
<tbody>
<tr><td><p>RiskWarningFull — Permission to manage Margin Call and liquidation orders</p></td><td><p>Permissions for Margin Call–related liquidation, order cancellation, and other operations</p></td></tr>
<tr><td><p>RiskWarningReadOnly — Read-only permission for Margin Call and liquidation orders</p></td><td><p>View-only permission for the relevant pages</p></td></tr>
</tbody>
</table>

# Operating Instructions

## 1. Viewing Risk Warning Records

On the "Risk Warning" page, you can view the list of all clients who have received a Margin Call and whose cases are not yet closed. If you need to liquidate a client's positions, you can locate the corresponding client on that page.

<img src="/assets/XK6sbJT2VofAcgxZSrEjRCYcpXb.png" src-width="3024" src-height="1888" align="center"/>

## 2. Liquidation Handling

2.1 On the main "Risk Warning" page, you may select entries from the list to perform batch liquidations; alternatively, for liquidation actions targeting a specific client, you can query the client and enter from [Details].

<img src="/assets/GZKybHv27oLesAx3eoajJH1PpXd.png" src-width="2972" src-height="1888" align="center"/>

2.2 The [Details] page displays the client's cash and position details; you may select individual positions to [Liquidate] or use the batch [Liquidate] option at the bottom.

## 3. Cancellation Handling

3.1 If a liquidation operation was performed in error and the order needs to be canceled, you can perform [Cancel] under "Liquidation Processing" in the list [Details]

3.2 Alternatively, you can cancel orders on the Liquidation Orders page (which displays all liquidation orders).

<img src="/assets/Pv4EbZoTgoygXkxRfSqjzuRypOc.png" src-width="3024" src-height="1888" align="center"/>

