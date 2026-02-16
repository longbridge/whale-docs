---
title: 9. Public and Private Fund Issues
slug: JDFXw8SxUi52hmkc9COczn0Jnah
sidebar_position: 8
---


# 9. Inquiries Regarding Publicly Offered and Privately Offered Funds

# 9. Public and Private Fund Issues

# 9A Q: Why can't fund orders placed from the backend be canceled?

Answer: Orders can be canceled immediately after placement. If an order's status is "Daily Cut" and the cut-off time has passed, it cannot be canceled.

<img src="/assets/ZrjkbCFC8opUugxhigAjIiBbprg.png" src-width="3212" src-height="2188" align="center"/>

<img src="/assets/B2oSbNS7xob5XPx703Oj6P8gpRg.png" src-width="3232" src-height="2188" align="center"/>

# 9B Q: What are Order Retrieval Time and Automatic Backfill Time?

Answer: "Order Retrieval Time" refers to the daily cutoff time; "Automatic Backfill Time" applies only when the system is integrated with the upstream API. For integrated cases, the upstream provider will return backfill values at the Automatic Backfill Time; if not integrated, backfill values must be entered manually in the backend.

<img src="/assets/Ia7Kb7gx4ooikmxo94BjKVJPpxg.png" src-width="3242" src-height="2190" align="center"/>

# 9C Q: How should the Automatic Backfill Time be entered?

Answer: Automatic backfill applies to scenarios using the provider's API. For tenants not using the API, the Automatic Backfill Time is ineffective and can be set to the same value as the Order Retrieval Time.

<img src="/assets/S83LbcSsuoOtdjxNuxMjg9jdppe.png" src-width="3216" src-height="2182" align="center"/>

# 9D Q: How are Public Funds and Private Funds backfilled?

Answer: Confirm subscription units / redemption amounts must be filled in according to the settlement statement or trade confirmation provided by the upstream provider; if a value is unavailable, enter 0.

<img src="/assets/UV5Wb1NwfoedH4xMQGgjYdySpde.png" src-width="3232" src-height="2196" align="center"/>

<img src="/assets/WFcGb48NhomEO5x8Fc5jeZiupee.png" src-width="3222" src-height="2208" align="center"/>

# 9E Q: If a fund listed via API integration does not perform the automatic daily cutoff, how can this be handled?

<img src="/assets/HGJ3bVQUloiWCrxezHsjdzcRp2b.png" src-width="3242" src-height="2196" align="center"/>

Answer: The system checks every 5 minutes between 08:00 and 22:00 daily to determine whether the fund daily cutoff time has been reached. Please modify the daily cutoff time to within the 08:00–22:00 window. (See 9E Figure 1 and Figure 2.)

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The automatic backfill detection also occurs during the same time window (08:00–22:00).</p>
</div>

<img src="/assets/OGYRbzBxDosWtAxpNkejboWApwd.png" src-width="3222" src-height="2192" align="center"/>

<em>9E Figure 1</em>

<img src="/assets/Gab9b4iVSoPvFCxBLe8juSZdplg.png" src-width="3216" src-height="2212" align="center"/>

<em>9E Figure 2</em>

# 9F Q: How do I update the daily fund prices?

Answer: Update prices on the "Fund Management &gt; Public Funds / Private Funds &gt; Net Value Table" page.

<img src="/assets/PY0ZbbVF2oEao5xaTvbjigN6pxd.png" src-width="3238" src-height="2192" align="center"/>

# 9G Q: If historical fund NAVs are backfilled, will settlement statements be updated?

Answer: Settlement statement NAVs are generated based on values as of the calendar day. Even if historical fund NAVs are modified later, settlement statements will not be updated. Regenerating settlement statements due to clearing and cancellation does not affect past records; they still use the NAV values as of the original calendar day.

Example: If today is February 28 and NAV records are available only up to January 31, then updating earlier historical NAVs on February 28 and regenerating settlement statements will still result in values taken as of January 31. Re-running end-of-day settlement generation after modifying historical NAVs will not update prior settlement statements.

# 9H Q: How does PI certification affect subscription to public and private funds?

Answer: (i) Public Funds: There is no PI restriction; subscription eligibility is governed by the risk assessment questionnaire.

(ii) Private Funds: Subscription is permitted after PI certification.

- On the WTT frontend, a warning will indicate the client is not PI, but an operator can still place orders on behalf of the client.
- On the WBO backend, there is no PI validation; orders can be placed on behalf of the client.
- On the App, clients who have not completed PI certification cannot subscribe.

# 9I Q: What limitations apply when manually adjusting fund inflows/outflows?

Answer: After manual fund adjustments, clients may redeem via the App; subscriptions/redemptions can also be processed in the backend.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The backend Trading Panel &gt; Fund Order accepts fund orders only in HKD and USD.Funds in other currencies must be subscribed via WTT: Fund Management &gt; Fund List.</p>
</div>

# 9J Q: What are the meanings of "Minimum Holding Units", "Minimum Holding Amount", "Minimum Sellable Units", and "Internal Code (from upstream)" when creating a new private fund?

<img src="/assets/IsQJbFFk3oaBtCxrVjnjiEFip0d.png" src-width="3232" src-height="2202" align="center"/>

<img src="/assets/W5hOb8QnuodeXGxFHpXjYWfdpOb.png" src-width="3232" src-height="2212" align="center"/>

Answer:

- "Minimum Holding Units" and "Minimum Holding Amount": Restrict the quantity or amount of fund that a client may sell; the client must hold a minimum amount of the fund.
- "Minimum Sellable Units": The base unit for selling, similar to the lot size concept in stocks.
- "Internal Code (from upstream)": A unique code chosen by the tenant to identify the fund.

# 9K Q: In aggregated fund orders, why do the total transaction units shown in "Fund Settlement" differ from the sum of units allocated to all clients?

<img src="/assets/Q4j5bUJfhoIYegxui6GjvC2Wptd.png" src-width="3212" src-height="2214" align="center"/>

<img src="/assets/GSR7bQg7Uo3agqxIjgIj3hyQpVg.png" src-width="3218" src-height="2202" align="center"/>

Answer: The system currently calculates aggregated fund order units using the formula: (individual client's subscription amount / total subscription amount) * fund NAV, which can result in decimal rounding differences. Tenants can use manual account adjustments to help clients reconcile their unit allocations.

