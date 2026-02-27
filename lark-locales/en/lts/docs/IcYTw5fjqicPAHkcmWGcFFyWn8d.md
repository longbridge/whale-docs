---
title: 8. Bond Handling Issues
slug: IcYTw5fjqicPAHkcmWGcFFyWn8d
sidebar_position: 7
---


# 8. Bond Processing Issues

# 8. Bond Handling Issues

# 8A Question: How are bond inflows and outflows handled?

Answer: Purchases or sales of bonds must be processed using manual adjustments. Before making an adjustment, please create the instrument code in the "Private Securities Repository."

(i). On the "Securities Management &gt; Instrument Management &gt; Private Securities Repository" page, click "Add Instrument" to add a bond or foreign equity.

<img src="/assets/A9HsbMKf7oi71UxLE6ljCod3pPb.png" src-width="3016" src-height="1500" align="center"/>

(ii). Fields marked with a red asterisk (*) are required.

<img src="/assets/KAVAb6LL7ovvI1x9SRkjaCO9pSf.png" src-width="3016" src-height="1500" align="center"/>

(iii). In the action column, click "Basic Market Data" to modify base information, or click "Price Maintenance" to enter prices that will display as the closing price on the statement.

<img src="/assets/T0eVbt9MooxxqAxw1JRjMsvtpBh.png" src-width="3016" src-height="1500" align="center"/>

<img src="/assets/WYlPbJh6QoXW2SxKKOHjCEsMpjb.png" src-width="3016" src-height="1500" align="center"/>

Note: Market, Type, and Security Code cannot be modified.

(iv). To modify market value, click "Add Market Data" on the "Price Maintenance" page.

<img src="/assets/SfK6bBldhoffMexylsvj32ORp8f.png" src-width="3016" src-height="1500" align="center"/>

(v). Enter the code, select the trading date, enter the closing price, and click "Confirm." After adding, you may click "Edit" to correct the closing price.

<img src="/assets/KirYbq06ToNI3MxXLbzjL1VfpNF.png" src-width="3016" src-height="1500" align="center"/>

(vi). After configuring the bond instrument, go to "Assets Account &gt; Manual Adjustment &gt; Bonds" and click "New" to process bond inflows or outflows.

<img src="/assets/AcY0b3LYaoiNJlxPSZgjK5Cgple.png" src-width="3016" src-height="1500" align="center"/>

(vii). Fields marked with an asterisk (*) are required. Click "Submit for Review." (Adjustment types: `In = Purchase`; `Out = Sell`)

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The initial bond adjustment requires entering the total cost. For example: total transaction amount = <code>$500,000</code>, quantity = <code>5,000</code>.Enter total cost <code>$500,000</code>; the cost per unit displayed on the statement will be shown as the diluted cost <code>= $100</code></p>
</div>

<img src="/assets/ANrTbJUB0oZMn5xnLXtj1T1mpod.png" src-width="3016" src-height="1500" align="center"/>

(viii). The reviewer receives a reminder under "Approval" at the top right; then click "Approve."

<img src="/assets/QMLbblQd1oFYcxxCii0j8dOjpqc.png" src-width="3020" src-height="1602" align="center"/>

<img src="/assets/ViZYbkvm1oN6WCxHj7yjd1sapKg.png" src-width="1862" src-height="1278" align="center"/>

(ix). You can view bond inflows on "Assets Account &gt; Account Details &gt; Bonds." Sales will appear as outflows.

<img src="/assets/AHSsbtvh8oGlZVxtib4ja6gNpGh.png" src-width="3014" src-height="1500" align="center"/>

# 8B Question: Why did the bond price not update on the statement?

Answer: You must edit the market price on "Stock Management &gt; Instrument Management &gt; Price Maintenance" for it to be reflected on the statement (see 8B Fig. 1 and Fig. 2).

If no maintenance was done prior to settlement, perform a settlement reversal (no action required on statements, asset classes, or supplementary orders). After adding or editing the market price (see 8B Fig. 3), rerun the end-of-day process to update the closing price.

<img src="/assets/KHoQbIYicohwC1xckE8jGv3FpJg.png" src-width="3014" src-height="1500" align="center"/>

<em>8B Fig. 1</em>

<em>On the "Price Maintenance" page, click "Add Market Data"</em>

<img src="/assets/B5FHbds4boTwHPxFHwdjZAjPp4O.png" src-width="3014" src-height="1500" align="center"/>

<em>8B Fig. 2</em>

<em>Enter the security code, select the trading date, enter the closing price, and click "Confirm"</em>

<img src="" src-width="3014" src-height="1500" align="center"/>

<em>8B Fig. 3</em>

<em>If the market price is incorrect, you may click "Edit"</em>

# 8C Question: How are the cost, price, and position market value on the statement calculated?

Answer: Statement cost is calculated using diluted cost: (Total buy amount − Total sell amount) / Quantity held. The closing price from "Price Maintenance" for bonds is displayed as the price on the statement; the cost is the diluted cost provided above. Position market value equals quantity held × closing price.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>For funds, the closing price is taken from the &quot;NAV Table.&quot;</p>
</div>

Note: The amount entered in an adjustment is the trade amount. If a total cost is specified in the adjustment, that specified value takes precedence; otherwise the calculation will use the closing price (price × quantity).

<img src="/assets/VvWibEZ2BoivGEx62fOjRPW5pRe.png" src-width="1368" src-height="260" align="center"/>

