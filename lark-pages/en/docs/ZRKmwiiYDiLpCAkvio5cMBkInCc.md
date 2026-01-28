---
title: 18. Risk Control Questions
slug: ZRKmwiiYDiLpCAkvio5cMBkInCc
sidebar_position: 17
---


# 18. Risk Control Issues

# 18. Risk Control Questions

# 18A. Q: What is the difference between setting trading limits per currency and setting them for all currencies?

A: When configuring per-currency limits, you must select the corresponding currency and restrict use to the corresponding market. Configuring an all-currency limit applies the trading limit across different markets; if an all-currency limit is set, per-currency trading limits cannot be configured.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Displayed limits will be converted to HKD.</p>
</div>

# 18B. Q: If both global limits and client limits exist, how are they evaluated?

A: Limit precedence is: client limits &gt; global limits; security limits &gt; global limits; trader limits &gt; global limits.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>For example: the global configuration sets the &quot;Customer buy-rejection limit&quot; to &gt; 500,000 HKD.User A has configured a &quot;Customer buy-rejection limit&quot; of &gt; 400,000 HKD (reject).If User A places a buy order for 410,000, the configured limit is hit and the order will be rejected outright. If User B places a buy order for 410,000, the global configuration is evaluated; since the global limit is not breached, the order will be allowed.</p>
</div>

# 18C. Q: A client's cash account balance is positive and the client has not borrowed from the broker; why is the financing quota being consumed?

A: The "Used financing quota" under Risk Control Management &gt; Customer Financing includes cash that has been frozen and is not available for use.

<img src="/assets/Hs9UbCXT9oTznDx2c4Dj1zkopZc.png" src-width="2828" src-height="1346" align="center"/>

<img src="/assets/DBMGbt9zdoEszdxaDZ9jrgu7p5e.png" src-width="2856" src-height="1602" align="center"/>

# 18D. Q: The subaccount’s total assets are not negative; why is the "Risk Control Status" shown as "Danger"?

A: If the master account's "Risk Control Status" is "Danger", the subaccount will follow the master account and its "Risk Control Status" will be "Danger".

# 18E. Q: In Haircut Management, will the index in "Index Haircut Management" automatically update the information in the constituent stock list?

A: "Index Haircut Management" will automatically update information such as constituent stock weights and share quantities.

<img src="/assets/K87ibYKzeovfURxEivajR61bpEd.png" src-width="2858" src-height="1298" align="center"/>

# 18F. Q: In "Haircut Management", can cash accounts and margin accounts independently use different haircut percentages for calculations?

A: Cash accounts and margin accounts cannot independently use different haircut percentages for calculation.

<img src="/assets/Xkkjb9i3LoKFOuxjOudjO9Vzppf.png" src-width="2808" src-height="1330" align="center"/>

