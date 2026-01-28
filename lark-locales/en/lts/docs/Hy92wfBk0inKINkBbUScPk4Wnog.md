---
title: 16.1 App Data Display
slug: Hy92wfBk0inKINkBbUScPk4Wnog
sidebar_position: 0
---


# 16.1 App Data Display

# 16.1A Q: How is the App holding ratio calculated? Why can it exceed 100%?

<b>A:</b> The holding ratio is calculated as: total value of holdings / total assets. Because the client engaged in margin financing trades, the total market value of holdings is 32,497. Calculated as:

Account total holding ratio: 32,497 / 660 × 100% = 4,923.78%

#2502: market value approximately 30,360 / 660 = 4,600%#6911: market value approximately 2,137 / 660 = 323.78%

<img src="/assets/MFGyb3VCDoAq8XxGn8GjUjNspCh.png" src-width="652" src-height="1134" align="center"/>

# 16.1B Q: Multiple fund companies have been configured in the backend; why does the App "Market &gt; Funds" page only display three funds?

<b>A:</b> The backend has updated the fund company information, but the App does not reflect this immediately due to caching; it requires approximately one hour for the cache to refresh. After refreshing the page you should see the updates. If a configured fund company has no funds, the App will not display it.

# 16.1C Q: How are the profit/loss figures for newly listed stocks calculated?

<img src="/assets/DZ0mbNRmCogUWpxX2gbjFIYXpNc.png" src-width="1305" src-height="884" align="center"/>

<b>A:</b> Floating profit/loss: calculated by comparing the dark pool purchase cost to the current price.

Intraday profit/loss: calculated by comparing the issue price to the current price.

Using the above image as an example: for stock #ChaBaiDao the issue price is $17.5, the cost price is $15.1, and the current price is $12.36.Floating P/L: (12.36 − 17.5) × 200 (one lot) = −1,028Intraday P/L: (12.36 − 15.1) × 200 (one lot) = −548

# 16.1D Q: What is BMP market data?

A: Hong Kong Basic Market Quote (BMP):

1. The watchlist only supports manual-refresh real-time quotes for up to 20 stocks; any stocks beyond that will display 15-minute delayed quotes. (The watchlist displays real-time quotes for the 20 most recently selected stocks; the Quotes page shows delayed quotes.)
2. Individual stock pages support manual refresh of real-time quotes.

# 16.1E Q: At what time does the App "Profit & Loss Analysis" &gt; "P/L Details" update the previous day's data?

<b>A:</b> The previous day's data is updated at approximately 10:30 AM.

<img src="/assets/BbODbsXxsoeNcnxanM8jpcYFpyf.png" src-width="734" src-height="1464" align="center"/>

