---
title: 17. Front-end WTT Display Issues
slug: XavywAyXAiFLOmkr1Czc95a9nCe
sidebar_position: 16
---


# 17. Front-end WTT display issue

# 17. Front-end WTT Display Issues

# 17A Question: How can the front-end view the names of the primary and secondary holders in joint account information?

Answer: In the "Customer Information" component, click the "..." settings in the upper-right and enable the option to display joint account information.

<img src="/assets/XeV0bvTOKoq3u7x9Ny9jvmNdpUf.png" src-width="2610" src-height="611" align="center"/>

<img src="/assets/X14nbEP9FoyeixxbVwkjqhiJplb.png" src-width="2116" src-height="800" align="center"/>

# 17B Question: What is the "Reset Current Layout" feature?

Answer: "Reset Current Layout" restores the layout to its initial state. This feature is only available on system base pages (e.g., Stock, Quotes, Trading); it is not available on custom pages.

<img src="/assets/H9IDbF8pgowFG4xUabaj3i98pCd.png" src-width="2042" src-height="1240" align="center"/>

<img src="/assets/C2TabLqoJok1nyxGtZ6jRoyxplb.png" src-width="2864" src-height="1790" align="center"/>

# 17C Question: Does WTT's "Save All Layouts" require saving each page individually?

Answer: Use the component toolbox in the upper-right: Layout Management &gt; Save All Layouts to save the entire WTT layout. You do not need to save each page individually.

<img src="/assets/QSNNbovjVo0d3AxuuS6jGzvTpcb.png" src-width="1316" src-height="896" align="center"/>

# 17D Question: How is the Net Asset Ratio calculated?

Answer: Net Asset Ratio = Equity Assets / Total Market Value of Holdings.Equity Assets = Total Cash + Total Market Value of Holdings.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The Total Market Value of Holdings includes the market value of stocks and options.</p>
</div>

<img src="/assets/IYWCbEGttoLh4NxTf5pj20nJpBe.png" src-width="2600" src-height="766" align="center"/>

# 17E Question: How do I apply for market data in WTT?

Answer: Click "Market Data Application" in the top-right of WTT, then select the market and data plan in the "Market Data Store." After approval, charges will be billed on Whale's monthly invoice according to usage.

<img src="/assets/ZZEWbimbbo5o89xPa0hj0aMkpOd.png" src-width="1582" src-height="1140" align="center"/>

# 17F Question: If the front-end market view is set to 40 broker levels for bids and asks, how is the "40 levels" calculated?

Answer: The broker bid/ask depth contains a list of the top 40 broker IDs in the buy/sell direction:

- If more than 40 brokers are present at a single price level, the page displays the first 40 brokers.
- If fewer than 40 brokers are present at a single price level, then:
40 = Number of Brokers + Number of Price Levels with Brokers + Number of Price Levels without Brokers * 2.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note: Under exchange rules, a price level with no brokers occupies two rows: one row indicates the distance from the reference price, and the other row indicates that there are no brokers at that price.</p>
</div>

<img src="/assets/FvJEbxYEqoNg2oxkaKmjSPF0pRc.png" src-width="680" src-height="483" align="center"/>

<img src="/assets/Sbj5baWBnog7YHxGLs2j1CYRpKc.png" src-width="969" src-height="1340" align="center"/>

