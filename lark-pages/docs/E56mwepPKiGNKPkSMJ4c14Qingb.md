---
title: Feature Introduction
slug: E56mwepPKiGNKPkSMJ4c14Qingb
sidebar_position: 2
---


# Feature Overview

# Feature Introduction

# Updates

2024.09.05 Initial Draft

# Feature Description

## 1. Market Charts

Market charts are used to view intraday and K-line (candlestick) data, support technical indicator overlays and drawing assistance functions, and offer two modes: Classic mode and TradingView mode.

## 1.1 Classic Mode

- Intraday Chart:

Displays different content depending on the market. For example, for U.S. equities, it provides five intraday states for user selection: night session intraday, pre-market intraday, regular session intraday, post-market intraday, and full-day intraday. Indicator support includes four intraday indicators: MACD, Volume, RSI, and KDJ.

- K-line Chart (Candlestick Chart):

Offers multi-dimensional timeframe selection, ranging from minute-level to daily and annual K-lines. Primary interactions include dragging to view additional historical K-lines, zooming to adjust candlestick size, and using the crosshair to inspect detailed information for a single candlestick, such as open price, close price, price change, and volume.

- Indicator Loading:

The entry is located at the top-right of the main chart; an indicator loading popup appears to the right of the timeframe switch button. We provide a variety of indicator types for the main chart, subcharts, and intraday subcharts.

Users can control the loading of each indicator on the main chart via the toggle behind each indicator. After clicking an indicator, the right side will display two tabs: "Overview" and "Indicator Settings." Users may adjust parameters and toggle indicator-line visibility in "Indicator Settings."

Loaded indicators appear on the main chart or subcharts. Click the arrow behind an indicator to remove it, or click the "Indicator Settings" button to open the settings popup for quick adjustments.

- Drawing Tools:

Click the button next to the indicator loader to enable drawing mode; a variety of drawing tools will appear above the main chart. Users can select the desired drawing type and operate directly on the chart. The drawing tools also provide trade statistics, continuous drawing, delete, and hide functions to facilitate flexible use.

- Range Statistics:

The range statistics feature is located within the drawing tools. After clicking the drawing button, the trade-statistics toggle can be found in the center of the toolbar. When enabled, a statistical-range popup appears on the main chart, and users can determine the range by dragging the left and right boundaries.

The statistics popup displays the metrics for the selected period; users can also adjust the time range using the arrows next to the start and end times in the popup.

## 1.2 TradingView Mode

Embeds TradingView’s open-source charts to provide an alternative chart presentation, supporting more detailed settings such as main chart background color, axes, and other visual details. Its drawing tools also include unique features that enhance the user experience.

## 2. Market Quote Component

The market quote component displays real-time quote information for individual securities, with fields that vary by instrument type. The component shows the instrument name and trading status, and uses icons to indicate market and permission information. The heart button next to the instrument name can be used to add or remove the instrument from the watchlist.

## 3. Order Book Component

The order book displays the instrument’s current order placements, and the content varies according to user permissions. For U.S. equities, different permissions may reveal single-level bids, multi-level bids, or full depth. Time-sequenced trade data presents the day’s transactions in chronological order.

## 4. Broker Quotes

Broker quotes is a module specific to Hong Kong stocks, available to users with Level 2 or higher permissions. This feature displays each broker’s quotes at different price levels.

## 5. Option Chain

The option chain is an important feature for U.S. equities, presenting option quotes across strikes and expiration dates. Users can customize the option chain layout by showing or hiding fields, adjusting sort order, and selecting option types to create the desired view.

## 6. Stock Screener

The stock screener is accessed from the tab bar at the top of the application; click it to enter the screener interface. First, click "Filter Criteria" to open the filter-criteria popup. Users can select desired filter criteria; clicking a criterion adds it to the filter list on the left side of the screen. Users may adjust criterion values by entering precise numbers or dragging the range sliders below. After confirming the criteria, the "Matches" area displays the number of stocks that meet the conditions. The list of stocks satisfying all filter criteria is shown to the right of the filter list.

