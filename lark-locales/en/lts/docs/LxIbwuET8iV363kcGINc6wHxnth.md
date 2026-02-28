---
title: 7. Commission and Billing Issues
slug: LxIbwuET8iV363kcGINc6wHxnth
sidebar_position: 6
---


# 7. Commission Billing Issues

# 7. Commission and Billing Issues

# 7A Q: How can I query a client's commission charges?

A: See the steps below.

(i). On the Business Parameter Settings &gt; Billing Management &gt; Fee Rate and Other Charges page

<img src="/assets/Jy0IbFrQpoW3vPxRj7NjhKiEp34.png" src-width="3016" src-height="1504" align="center"/>

(ii). Search the client's charges and special charges using the Account Number

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note: Special charges take precedence over client-configured fees.</p>
</div>

<img src="/assets/KBxTbLkKlo4cspxTZAhjkKWGpxb.png" src-width="3016" src-height="1504" align="center"/>

# 7B Q: How can I modify a client's commission?

A: Create a standalone commission rate for the client under Business Parameter Settings &gt; Billing Management &gt; Rate Setups(Customized) (see 7B Figure 1).

If the billing package already contains the relevant fee, you can enter the Rate Setups(Package-based) page and click Manage Group Clients to add the client to the package (see 7B Figure 2 and Figure 3).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Fee precedence for client billing: client-specific settings &gt; standard client group &gt; global client group.</p>
</div>

<img src="/assets/X6K0bj2qVoKpOKxiz6Oj0bdFpit.png" src-width="3016" src-height="1504" align="center"/>

<em>7B Figure 1</em>

<img src="/assets/FVSDb9gkEoAICtxLbZqjqW6DpGh.png" src-width="3016" src-height="1504" align="center"/>

<em>7B Figure 2</em>

<img src="/assets/BDWRbZ4tkoJAoExBUVtjBrmLpUf.png" src-width="3016" src-height="1504" align="center"/>

<em>7B Figure 3</em>

# 7C Q: How can I modify government levies or commission rates? (Client Group Billing Modification)

A: (i) On the Business Parameter Settings &gt; Billing Management &gt; Rate Setups(Package-based) page, click Edit for the "Default Package".

<img src="/assets/EYOAbZpPBot2oQxQLxEj8xsPpd3.png" src-width="3016" src-height="1504" align="center"/>

(ii). Click Edit in the action column to modify the relevant billing scenario.

<img src="/assets/SSUkbDqsGo0UekxtNpujTK6lpVh.png" src-width="3016" src-height="1504" align="center"/>

(iii). You may modify the rate and the minimum/maximum charge.

<img src="/assets/XA6mbkwNQoQ8MBxmtCgjui2jpLZ.png" src-width="3016" src-height="1504" align="center"/>

(iv). After completing edits, click Submit (changes take effect in approximately 10 minutes).

<img src="/assets/IvAmbKnoSo9rOHxAR8aj1HRwpCc.png" src-width="3016" src-height="1504" align="center"/>

(v). Use Fee Rate and Other Charges to verify individual client charges.

<img src="/assets/Gvt8bjg0xoxETXx43OMjDHZlpzb.png" src-width="3016" src-height="1504" align="center"/>

(vi). Randomly search for clients and select the modified charge types to confirm.

<img src="/assets/HNxEbyWS5oMSJ7xgMC4jNq5fpZg.png" src-width="3016" src-height="1504" align="center"/>

# 7D Q: How can one-time waivers or adjustments to commission charges / trade contracts be handled?

A: When executing clearing tasks, after completing "Billing Calculation" pause the process, retrieve the client contract data, and modify fees under Contract Management &gt; Client Contracts.

(i). During the end-of-day process at "Billing Calculation," click Pause One-Click Clearing.

<img src="/assets/FsPSbVM8uouEq9xz5rSj1lyjplb.png" src-width="3016" src-height="1504" align="center"/>

(ii). After execution completes, go to Contract Management &gt; Client Contracts, retrieve the trades for the current accounting date, search for the client and the relevant orders, and click Details in the action column.

<img src="/assets/R089brEOVo1s1rx8NeLj18zIpfc.png" src-width="3016" src-height="1504" align="center"/>

(iii). On the Fee Information page, click Edit for the corresponding fee category.

<img src="/assets/L5a7bzuzQoRjUGxb3dnjhy0cpQo.png" src-width="3016" src-height="1504" align="center"/>

(iv). Modify the Actual Amount Received and click Confirm. For example, change 0.74 USD to 0.01 USD.

<img src="/assets/OcmEb6NKEow72PxVIxejx3DepUC.png" src-width="3016" src-height="1504" align="center"/>

(v). On the Fee Information page, the Actual Amount Received and Amount Receivable will be updated.

<img src="/assets/KM81bvCogoBjanxKt9Ej3RmapSh.png" src-width="3016" src-height="1504" align="center"/>

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

<img src="/assets/KFPYb1CBYoL6SJxo1nojz6CZpyg.png" src-width="3016" src-height="1504" align="center"/>

<em>7E Figure 1</em>

# 7F Q: How do special charge settings affect clients?

A: If a special charge is configured at the Global Client Group, all clients will have commissions calculated according to that special charge. If you add a client to a standard client group, you must add the special charge to that group's package to override the global setting.

<img src="/assets/O6KNbf0V7oM4oFxcGFtjnGa1ppf.png" src-width="2464" src-height="1368" align="center"/>

<img src="/assets/E8KqbXW3oolGUtxQrJvjs2O5plb.png" src-width="3016" src-height="1504" align="center"/>

# 7G Q: Why does the Global Client Group not display client counts or group members?

A: The Global Client Group is theoretically applied to all clients, so it does not display a count or group members. The Standard Client Group displays the count and its members.

<img src="/assets/FtGpbTfi9odASmxj4szjfvwFpxb.png" src-width="3016" src-height="1504" align="center"/>

<img src="/assets/NUPlbqCl1olE2mxdtuoj9QkppBe.png" src-width="3016" src-height="1504" align="center"/>

# 7H Q: Can dark-pool platform fees and normal trading platform fees be calculated separately?

A: In Business Parameter Settings &gt; Calculation Management &gt; Client Group Billing Configuration, click Edit for the relevant client group (see 7H Figure 1), then click Edit on the platform fee charge (see 7H Figure 2). Under Special Charges, click Add, select Order Type = Dark Pool, and enter the fee details (see 7H Figure 3).

<img src="/assets/W1AibBJ32oxZRnxpVjYj8ft4pke.png" src-width="3016" src-height="1504" align="center"/>

<em>7H Figure 1</em>

<img src="/assets/Ap5vbENv0oYPjoxbLzujy0YQpUf.png" src-width="3016" src-height="1504" align="center"/>

<em>7H Figure 2</em>

<img src="/assets/Zo22bkmCiomkkNxhss2juQljpwg.png" src-width="3016" src-height="1504" align="center"/>

<em>7H Figure 3</em>

# 7I Q: What do the billing channels Longport, Pro, App, Web, and WTT represent?

A: Longport is the standard public App; Pro is the premium Longport Pro; App is the white-label App; Web is the Web Trade web version; WTT is the front-end Whale Trade Terminal.

<img src="/assets/GxUWbmkRSohRY8x0OsKjigS7plf.png" src-width="3016" src-height="1504" align="center"/>

# 7J Q: How do I add the billing package selected during account opening?

A: In Business Parameter Settings &gt; Billing Management &gt; Rate Setups (By FD), click Edit for the corresponding "Default User Group" (see 7J Figure 1), add the already-created billing packages from Client Group Billing Configuration into Available Client Groups, and the billing package will then be selectable during account opening (see 7J Figure 2).

<img src="/assets/FBcKbuw7Uo7J5Wx510tjvoRWpAb.png" src-width="3016" src-height="1504" align="center"/>

<em>7J Figure 1</em>

<img src="/assets/KNTaba8WKoVxUlxcNewjvFX5p0f.png" src-width="3020" src-height="1600" align="center"/>

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

<img src="/assets/F9gVbmYwzod0Vzx9Cfxj7RPbpwg.png" src-width="2206" src-height="1712" align="center"/>

<img src="/assets/T8JLbF7x9o0sJBxsIAyj6wYqpag.png" src-width="2206" src-height="1712" align="center"/>

<img src="/assets/PmXGbK708osY66xMC1GjMn1Xp24.png" src-width="3020" src-height="1602" align="center"/>

