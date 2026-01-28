---
title: 17.1 Order Placement Issues
slug: LLlvwUMy9ibdAxkjzKUcQVpUnpf
sidebar_position: 0
---


# 17.1 Order Placement Issues

# 17.1 Order Placement Issues

# 17.1A Q: How does WTT handle odd-lot trading?

A: Odd-lot orders can be placed on the "Trading Page" (see Figure 17.1A-1) and executed via "Odd-lot Matching" (see Figures 17.1A-2 and 17.1A-3).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Odd-lot trading volumes are lower than those for round-lot shares; orders may need to remain on the book for several days before execution.</p>
</div>

<img src="/assets/KtPBbBEGkoEDPWxxUVojceydpYx.png" src-width="2872" src-height="1792" align="center"/>

<em>Figure 17.1A-1</em>

<img src="/assets/SpmxbzLaBobmSCxKFq9jFSpgpEb.png" src-width="2878" src-height="1740" align="center"/>

<em>Figure 17.1A-2</em>

<img src="/assets/DRqHbEvyCoPlwoxBtE3jkBiRp5y.png" src-width="2862" src-height="1790" align="center"/>

<em>Figure 17.1A-3</em>

# 17.1B Q: What does the order rejection reason "Order Price Far Away From Reference Price" mean?

A: Orders are rejected when the order price is too far from the current market price. Buy-side input prices cannot be higher than the best ask by more than 9 price levels; sell-side input prices cannot be lower than the best bid by more than 9 price levels.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>U.S. warrants are currently not supported for trading; the system will display &quot;This stock is currently not tradable.&quot;</p>
</div>

# 17.1C Q: What are the front-end order price limits?

A: Buy orders priced lower than the current price by 24 price levels will be stored in the system and released when the market reaches the price.

Orders priced more than 9 price levels above the counterparty price will not be stored in the system and will be sent directly to the exchange; however, they may be rejected by the exchange's price limits.

# 17.1D Q: How can client trading of virtual assets or specific securities be restricted?

A: On the front end, navigate to "Trade Query &gt; Securities Restriction" and click "Add" in the top right to add securities to a blacklist to prohibit client trading. Securities can be imported in bulk to apply restrictions. If a blacklist entry does not have associated clients, the restriction defaults to all clients.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>If certain clients should be permitted to trade, create a whitelist and add the related clients.For the bulk import template, enter stock codes in the format: 3099.hk</p>
</div>

<img src="/assets/TMZybe4xCoZtofxiOUEjL7I4pXc.png" src-width="2606" src-height="1526" align="center"/>

# 17.1E Q: In WTT's "Securities Restriction," how is "Associated Region" used to distinguish clients?

A: The associated region is determined by the client's declared country of residence; if absent, by the document issuing country; if that is also absent, by nationality.

<img src="/assets/Ro5PbkhxYo7mUCxlu4Ojs2vWp0f.png" src-width="2866" src-height="1332" align="center"/>

# 17.1F Q: How can I determine the fees to be charged to a client after placing an order?

A: Actual fees can be checked after settlement by reviewing report SDR018 - Bargain Detail Report-HK. Estimated fees are available via the "Amount Details" function at the lower right of the front-end order component.

<img src="/assets/QvmGbGvYSo5l3fxQPwbjykDop4e.png" src-width="2242" src-height="1122" align="center"/>

# 17.1G Q: How are clients notified after forced liquidation?

A: The App will send a push notification (see Figure 17.1G-1), and forced liquidation will be indicated on the settlement statement (see Figure 17.1G-2). Margin calls are notified by email and App push notifications (see Figure 17.1G-3).

<img src="/assets/Fs98bGL0Ao8PCYxdzOajmbK0pfd.png" src-width="686" src-height="654" align="center"/>

<em>(Figure 17.1G-1)</em>

<img src="/assets/ZeqibBgrXoang8xM7ZLjenMtp9g.png" src-width="1724" src-height="306" align="center"/>

<em>(Figure 17.1G-2)</em>

<img src="/assets/WlRnbbtfYoT81GxrPqDjO5Ebpie.png" src-width="770" src-height="1290" align="center"/>

<em>(Figure 17.1G-3)</em>

# 17.1H Q: At what distance from the market price will "Pending Submission" orders be released to the market?

A: Pending Submission orders for the Hong Kong Exchange will be released to the market when within 20 price levels of the market price.

# 17.1I Q: Can the system restrict self-matching trades (a client's own buy order matching their own sell order)?

A: Self-matching is restricted. For opposing orders from the same client, if the second order would result in a match at an executable price, the second order will be rejected.

