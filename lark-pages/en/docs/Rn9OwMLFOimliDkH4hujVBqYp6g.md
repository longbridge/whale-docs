---
title: 17. Front-end WTT Display Issues
slug: XavywAyXAiFLOmkr1Czc95a9nCe
sidebar_position: 16
---


# 17. Front-end WTT display issue

# 17. Front-end WTT Display Issues

# 17A Question: How can the front-end view the names of the primary and secondary holders in joint account information?

Answer: In the "Customer Information" component, click the "..." settings in the upper-right and enable the option to display joint account information.

<img src="/assets/MEtQbnBtco93Twx98dzjhu2Tp4A.png" src-width="2894" src-height="528" align="center"/>

<img src="/assets/JwMEb1dE2oihMIxmOcYjdq55pzc.png" src-width="1492" src-height="996" align="center"/>

# 17B Question: What is the "Reset Current Layout" feature?

Answer: "Reset Current Layout" restores the layout to its initial state. This feature is only available on system base pages (e.g., Stock, Quotes, Trading); it is not available on custom pages.

<img src="/assets/B7TZbRAgkoMO4QxLTMIjYRjipmb.png" src-width="3024" src-height="1888" align="center"/>

<img src="/assets/Hoi8bmGTnoaiBrxcNruj80Dcpwd.png" src-width="3024" src-height="1888" align="center"/>

# 17C Question: Does WTT's "Save All Layouts" require saving each page individually?

Answer: Use the component toolbox in the upper-right: Layout Management &gt; Save All Layouts to save the entire WTT layout. You do not need to save each page individually.

<img src="/assets/Gp8ubCl86oj9L6xvwibjWvZspie.png" src-width="1360" src-height="920" align="center"/>

# 17D Question: How is the Net Asset Ratio calculated?

Answer: Net Asset Ratio = Equity Assets / Total Market Value of Holdings.Equity Assets = Total Cash + Total Market Value of Holdings.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The Total Market Value of Holdings includes the market value of stocks and options.</p>
</div>

<img src="/assets/GpzhbokqXoKOMTx946sjjOVtpth.png" src-width="3024" src-height="1888" align="center"/>

# 17E Question: How do I apply for market data in WTT?

Answer: Click "Market Data Application" in the top-right of WTT, then select the market and data plan in the "Market Data Store." After approval, charges will be billed on Whale's monthly invoice according to usage.

<img src="/assets/UzsBbmcBconAjHx6QRJjvTKspLg.png" src-width="3022" src-height="1888" align="center"/>

# 17F Question: If the front-end market view is set to 40 broker levels for bids and asks, how is the "40 levels" calculated?

Answer: The broker bid/ask depth contains a list of the top 40 broker IDs in the buy/sell direction:

- If more than 40 brokers are present at a single price level, the page displays the first 40 brokers.
- If fewer than 40 brokers are present at a single price level, then:
40 = Number of Brokers + Number of Price Levels with Brokers + Number of Price Levels without Brokers * 2.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note: Under exchange rules, a price level with no brokers occupies two rows: one row indicates the distance from the reference price, and the other row indicates that there are no brokers at that price.</p>
</div>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/KjmCbYlaAovfugx31SQjX6E6pIb.png" src-width="1142" src-height="586" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/CBwWbyhEnoELICx4j0FjA4Dbptk.png" src-width="978" src-height="484" align="center"/>
</div>
</div>

