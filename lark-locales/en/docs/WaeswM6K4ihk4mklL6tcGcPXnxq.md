---
title: Frequently Asked Questions
slug: WaeswM6K4ihk4mklL6tcGcPXnxq
sidebar_position: 3
---


# Frequently Asked Questions

# Credit Limit Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Can different approval workflows be configured based on a customer&#39;s credit limit?</p>
</div>

Answer: Yes. You can set approval conditions in the approval flow "BSS - Risk Management - Credit Limit - Limit Review - Submit Review" and, based on those conditions, route different credit limit ranges through different approval workflows.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Can automatic credit granting be disabled?</p>
</div>

Answer: Yes. To disable automatic credit granting for all customers, set the global parameter for automatic credit granting to "Off" under Business Parameter Settings -&gt; Risk Control -&gt; Credit Customer Parameters; to restrict automatic credit granting for specific customers, add those customers to the credit blacklist. Customers on the blacklist will not receive automatic credit, and any limit adjustment requests submitted via the App will enter manual credit review.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why is there no option to request a limit adjustment in the customer&#39;s App?</p>
</div>

Answer: Limit adjustments are not permitted in the following scenarios:

1. There is an application currently under review.
2. Only two limit adjustment requests are permitted within any 24-hour period (common scenario).
3. If the used credit exceeds the App-adjustable upper limit, limit adjustment is not allowed.
4. Cash accounts are not eligible for limit adjustment.
5. Amounts less than 1,000 are not eligible for limit adjustment.

# Borrowing Reminder Usage Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why can&#39;t customers see the &quot;Automatic Repayment&quot; feature in the App?</p>
</div>

Answer: You must enable the currency exchange rules under the backend "Borrowing Reminder." Once the rules are enabled, the Automatic Repayment feature will be visible in the customer's App. If the customer enables this feature, the system will perform automatic currency exchange when the customer meets the configured rules.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: If a customer has an outstanding debt and a balance in another currency, will the system automatically perform a currency exchange?</p>
</div>

Answer: Not necessarily. The following conditions must be met: 1) the customer's outstanding debt and balances in other currencies meet the currently configured currency exchange rules; and 2) the customer has enabled the Automatic Repayment feature in the App.

# Margin Call Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Is it possible to configure scenarios in which a customer will not receive a margin call?</p>
</div>

Answer: Yes. You can configure Margin Call exemption rules under Business Parameter Settings -&gt; Risk Control -&gt; Risk Control Parameters. Scenarios that match the exemption rules will not receive a margin call. Both global and single-customer exemption rules are supported.

<img src="/assets/UqJwb1Ym3o5KhtxXoxOjM6xRpBJ.png" src-width="3250" src-height="672" align="center"/>

# Trading Limit Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Can special restrictions be applied to trading customers or securities?</p>
</div>

Answer: Yes. This can be achieved through trading limit configuration rules. The system provides a comprehensive set of dimensions to manage trading limits, including controls at the company, customer, security, and trader levels.

All supported limit codes can be viewed in Global Limits. To impose an overall restriction on all trades, configure rules in Global Limits; to restrict specific customers or securities, configure rules under the corresponding limit type. Multi-dimensional limits support applying limits simultaneously to specified customers and specified stocks.

<img src="/assets/L8VAbZDYpoSpQSxhMVej9A8Qp8b.png" src-width="3292" src-height="846" align="center"/>

