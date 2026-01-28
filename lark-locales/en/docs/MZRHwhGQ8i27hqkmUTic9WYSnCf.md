---
title: 12.0.2 Trade Reports (TDR Category)
slug: MZRHwhGQ8i27hqkmUTic9WYSnCf
sidebar_position: 1
---


# 12.0.2 Transaction Report (TDR Category)

# 12.0.2 Trade Reports (TDR Category)

# 12.0.2A Q: Why does the market order price in the TDR001-1 Daily Client Order Report By Client differ so significantly from the stock's current price?

<b>A:</b> Market orders are not exchange orders; they are submitted as Special Limit Orders (SLO) at the counterparty's price band. Because the execution price is uncertain and to prevent account overdrafts, a protective fund freeze of 20% (1.2×) is applied.

# 12.0.2B Q: Why do the "Execution Time" and "Trade Date" filter times not match for U.S. equities in the TDR005 - Trade Summary Report?

A: This is due to time zone differences. U.S. equities include overnight trading sessions. The report displays execution times in Hong Kong Time and reflects trading records from the U.S. market.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The counterparty broker seat can also be viewed in the executed order details.</p>
</div>

<img src="/assets/BNTObfRALo5dO8x4ccwj1Xunpgh.png" src-width="2850" src-height="1444" align="center"/>

