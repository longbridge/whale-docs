---
title: 7. Commission and Billing Issues
slug: LxIbwuET8iV363kcGINc6wHxnth
sidebar_position: 6
---


# 7. Commission Billing Issues

# 7. Commission and Billing Issues

# 7A Q: How can I query a client's commission charges?

A: See the steps below.

(i). On the Business Parameter Settings &gt; Billing Management &gt; Client Billing Query page

<img src="/assets/WkQFblRe1oYjX0xOLz0jX9WKpff.png" src-width="2480" src-height="1264" align="center"/>

(ii). Search the client's charges and special charges using the Account Number

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note: Special charges take precedence over client-configured fees.</p>
</div>

<img src="/assets/WxxIbEQOQotxy6xokc5jsGKXp3c.png" src-width="2852" src-height="1370" align="center"/>

# 7B Q: How can I modify a client's commission?

A: Create a standalone commission rate for the client under Business Parameter Settings &gt; Billing Management &gt; Client Billing Configuration (see 7B Figure 1).

If the billing package already contains the relevant fee, you can enter the Client Group Billing Configuration details page and click Manage Group Clients to add the client to the package (see 7B Figure 2 and Figure 3).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Fee precedence for client billing: client-specific settings &gt; standard client group &gt; global client group.</p>
</div>

<img src="/assets/UpepbjQMzoeKSnxHAMqjk2sLpYc.png" src-width="2752" src-height="1324" align="center"/>

<em>7B Figure 1</em>

<img src="/assets/ZP2UbxJAPoZKCaxjlSgjX18kpAf.png" src-width="2504" src-height="1356" align="center"/>

<em>7B Figure 2</em>

<img src="/assets/VWFXbOoZRoiNJIxGpjBjqENWp5d.png" src-width="2168" src-height="700" align="center"/>

<em>7B Figure 3</em>

# 7C Q: How can I modify government levies or commission rates? (Client Group Billing Modification)

A: (i) On the Business Parameter Settings &gt; Billing Management &gt; Client Group Billing Configuration page, click Edit for the "Default Client Group".

<img src="/assets/Z21xbcRWqoYtSIxVCwejj87OpOe.png" src-width="2869" src-height="1540" align="center"/>

(ii). Click Edit in the action column to modify the relevant billing scenario.

<img src="/assets/RQskbpDF8oOwSfxE9vPjJUkzpvh.png" src-width="2876" src-height="1628" align="center"/>

(iii). You may modify the rate and the minimum/maximum charge.

<img src="/assets/AEDBbUF53okl2RxTzRnju7McpGg.png" src-width="2326" src-height="1367" align="center"/>

(iv). After completing edits, click Submit (changes take effect in approximately 10 minutes).

<img src="/assets/Xh3mb2htFoDZwyxteF8jcE9gpdc.png" src-width="2705" src-height="1436" align="center"/>

(v). Use Client Billing Query to verify individual client charges.

<img src="/assets/TMMhbCH82oeEqGxaxGrjZ1Xbpse.png" src-width="2599" src-height="1368" align="center"/>

(vi). Randomly search for clients and select the modified charge types to confirm.

<img src="/assets/SrXCb2aceod40OxfOhljX3iRp1J.png" src-width="2619" src-height="295" align="center"/>

# 7D Q: How can one-time waivers or adjustments to commission charges / trade contracts be handled?

A: When executing clearing tasks, after completing "Clearing Billing" pause the process, retrieve the client contract data, and modify fees under Clearing Management &gt; Contract Management.

(i). During the end-of-day process at "Clearing Billing," click Pause One-Click Clearing.

<img src="/assets/WJoNb4TnVoDfavxbr0ejMfP1p5c.png" src-width="2496" src-height="1100" align="center"/>

(ii). After execution completes, go to Contract Management &gt; Client Contracts, retrieve the trades for the current accounting date, search for the client and the relevant orders, and click Details in the action column.

<img src="/assets/WcZgbRLSGo2wMGxJkmCjcXNOp0g.png" src-width="2502" src-height="780" align="center"/>

(iii). On the Fee Information page, click Edit for the corresponding fee category.

<img src="/assets/UlTnbgW68osZCmxTSfrj3wkRpNh.png" src-width="2868" src-height="1457" align="center"/>

(iv). Modify the Actual Amount Received and click Confirm. For example, change 0.74 USD to 0.01 USD.

<img src="/assets/FJ7QbRd31oHA1exOik4jGKOxp5d.png" src-width="2861" src-height="1618" align="center"/>

(v). On the Fee Information page, the Actual Amount Received and Amount Receivable will be updated.

<img src="/assets/RkzTbXExhoH6KHxgBADjVcaYp5S.png" src-width="2843" src-height="1575" align="center"/>

(vi). Continue to complete clearing; the fees will be adjusted and the closing statement will display the updated amounts.

# 7E Q: How do Contract, Order, and Trade done differ in terms of calculation granularity?

A: See the examples below for Contract, Order, and Trade done.

- If you want to aggregate orders for calculation, select Contract: commission will be calculated based on the client's total trading amount for the same stock on that day.
- Example: The client places 3 orders of 10,000 each; they aggregate to 30,000 and commission is calculated once.
- For platform fees calculated per order, select Order: fees will be charged based on the number of orders placed by the client.
- Example: The client places 3 orders of 10,000 each; platform fees are charged three times.
- For government levies calculated per executed trade, select Trade done: fees are calculated according to the number of trade executions.
- Example: The client places 3 orders of 10,000 each, and if each order is executed in 3 fills, taxes/fees are calculated per execution—resulting in a total of 9 fee calculations.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Selecting Contract means billing is done by contract. If the order-combining feature is not enabled, one Contract corresponds to one Order; if order combining is enabled, multiple Orders are merged into a single Contract for calculation (see 7E Figure 1), which is where Contract differs from Order.</p>
</div>

<img src="/assets/OWfMbvhOQo9tIRxNcvgjZ8gopzg.png" src-width="2578" src-height="1229" align="center"/>

<em>7E Figure 1</em>

# 7F Q: How do special charge settings affect clients?

A: If a special charge is configured at the Global Client Group, all clients will have commissions calculated according to that special charge. If you add a client to a standard client group, you must add the special charge to that group's package to override the global setting.

<img src="/assets/O6KNbf0V7oM4oFxcGFtjnGa1ppf.png" src-width="2464" src-height="1368" align="center"/>

<img src="/assets/KwR6bHHngoIpNkxklB0jcfKXpcc.png" src-width="2134" src-height="1354" align="center"/>

# 7G Q: Why does the Global Client Group not display client counts or group members?

A: The Global Client Group is theoretically applied to all clients, so it does not display a count or group members. The Standard Client Group displays the count and its members.

<img src="/assets/YqLBb9PBro5ZxoxBlP3jyikapOe.png" src-width="2496" src-height="1180" align="center"/>

<img src="/assets/WEsPb1eQAoEHXTx6Q0TjcfOyp64.png" src-width="2160" src-height="700" align="center"/>

# 7H Q: Can dark-pool platform fees and normal trading platform fees be calculated separately?

A: In Business Parameter Settings &gt; Calculation Management &gt; Client Group Billing Configuration, click Edit for the relevant client group (see 7H Figure 1), then click Edit on the platform fee charge (see 7H Figure 2). Under Special Charges, click Add, select Order Type = Dark Pool, and enter the fee details (see 7H Figure 3).

<img src="/assets/XxiVbD3W3oinAExlrAGjKJxlpFd.png" src-width="2866" src-height="1606" align="center"/>

<em>7H Figure 1</em>

<img src="/assets/NM3JbjBxDoFXufxFy33jrSkGpbS.png" src-width="2790" src-height="1386" align="center"/>

<em>7H Figure 2</em>

<img src="/assets/Jjuob7sWZoN7zDxyJ2hjgTpWpzg.png" src-width="2864" src-height="1618" align="center"/>

<em>7H Figure 3</em>

# 7I Q: What do the billing channels Longport, Pro, App, Web, and WTT represent?

A: Longport is the standard public App; Pro is the premium Longport Pro; App is the white-label App; Web is the Web Trade web version; WTT is the front-end Whale Trade Terminal.

<img src="/assets/ECBobEkX6ogOKHxj04IjNylppSg.png" src-width="2728" src-height="1370" align="center"/>

# 7J Q: How do I add the billing package selected during account opening?

A: In Business Parameter Settings &gt; Billing Management &gt; Organization Billing, click Edit for the corresponding "Default User Group" (see 7J Figure 1), add the already-created billing packages from Client Group Billing Configuration into Available Client Groups, and the billing package will then be selectable during account opening (see 7J Figure 2).

<img src="/assets/M1LNbKxQAojNg9xdYc4jQEX9pRn.png" src-width="2726" src-height="1408" align="center"/>

<em>7J Figure 1</em>

<img src="/assets/IlQVbrdwboEXyxxnpQbj2FjtpFj.png" src-width="2126" src-height="1410" align="center"/>

<em>7J Figure 2</em>

# 7K Q: What is the value selection logic for commission billing in the App "My Rates"?

A: The selection logic priority is as follows:

1. Conditions in the commission special charges under Client Billing (the "Condition" is shown only if the "Billing Channel" includes "APP")
2. Conditions in the commission special charges under Client Group Billing
3. Conditions in the commission special charges under Global Client Group Billing
4. Commission special charges under Client Billing
5. Commission special charges under Client Group Billing
6. Commission special charges under Global Client Group Billing

Additionally, you can provide clients with more rate information in "View Examples," and the backend Help Center can modify the content shown in "View Examples."

<img src="/assets/UvbbblS1jonwfpxireDjpVG9pZd.png" src-width="716" src-height="1606" align="center"/>

<img src="/assets/HAwmbv9ZVoKyCqxrhTyjHFDypEc.png" src-width="740" src-height="1588" align="center"/>

<img src="/assets/QiSjbCRXyo8ayYxRlHKjYpkepUg.png" src-width="2824" src-height="1156" align="center"/>

