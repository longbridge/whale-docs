---
title: 2025-Q3 What's New
slug: 2025-Q3-What-s-New
sidebar_position: 1
version: lts
---


# 2025-Q3 What's New

# v 2.33.0

# 🎉 New Features

- Adding 'Reject Source' information to the Order Book allows you to more accurately identify whether an order was rejected by the system or the underlying broker.
    <img src="/assets/QWC2bv07Vo7QksxEANnjtzzVpbd.png" src-width="2868" src-height="540" align="center"/>

- All WTT-related operation logs can be viewed and managed in WBO, and user operations on WTT (such as exporting, adding, editing, and modifying) can be tracked.
    <img src="/assets/JLTnbJSGpobJhxxKnxQjIybEpLe.png" src-width="3812" src-height="1842" align="center"/>

- Asset metrics within the trading component have been optimized. Maximum buying power has been changed to "Max Trade Amt." This metric is calculated by combining maximum buying power and the initial margin ratio of the underlying asset.

# 📌 Improvements and Fixes

- Some technical and interactive optimizations.

# v 2.32.0

- Some technical and interactive optimizations.

# v 2.31.1

- Some technical and interactive optimizations.

# v 2.31.0

# 🎉 New Features

- The Volatility S&P 500 Index is now available on the stock index page. This helps you spot risks during high volatility and identify opportunities to buy undervalued stocks.
    <img src="/assets/UfKvbPrsIoolChxO9KvjR8zlp4e.png" src-width="720" src-height="416" align="center"/>

- The order table displays the original text of the rejection reason, allowing you to intuitively see the specific information of the current order rejection and make better judgments on order processing.
    - Generally speaking, messages with the prefix "rms." in the reason for rejection from the operator indicate that the Whale system blocked and rejected the request. Please contact us for further confirmation. For other messages, please contact the operator for verification.
        <img src="/assets/LsCNbElIJoBN36xTBr7jB0Yfple.png" src-width="2878" src-height="658" align="center"/>

# 📌 Improvements and Fixes

- Some technical and interactive optimizations.

# v 2.30.0

# 🎉 New Features

- A new chip distribution feature has been added to the stock details page, allowing you to track the market average cost in real time and reveal concentrated support and resistance levels. This helps you understand the market dynamics through chip fluctuations, making your position decisions more confident!
    - You can turn on this function by clicking the "Position overview" icon in the upper right corner of the chart.
        <img src="/assets/WicUbMz6Yo2rtxxD8HljLTeWpzf.png" src-width="2894" src-height="1748" align="center"/>

- Optimizes order data after transaction cancellation and supports transaction cancellation rollback, which can be used to roll back the order cancellation status after an incorrect transaction cancellation.
    <img src="/assets/CooLbOKynoRspIxJb4ejHI4Xphb.png" src-width="2886" src-height="1738" align="center"/>

# 📌 Improvements and Fixes

- Optimized order replenishment to support odd-lot orders for US stocks.

