---
title: 5.1.1 Clearing Reconciliation
slug: GPDXwgZ4oiHnaFkbSsJceZ5hnZe
sidebar_position: 0
---


# 5.1.1 Settlement Reconciliation

# 5.1.1 Clearing Reconciliation

# 5.1.1A Q: How are US equity files handled for reconciliation?

<b>A:</b> The US equities market operates overnight, with the trading day concluding the following day. Reconciliation requires importing the file provided by the US equities counterparty the next morning.

The system’s position reconciliation logic reconciles against the previous day’s settled positions (position reconciliation is performed on T-1); importing the US equities counterparty file is necessary to complete US equities clearing.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>US equity clearing can be executed as early as 11:00 on the same day.</p>
</div>

Go to Clearing Management &gt; Clearing Check &gt; Position Reconciliation and click Re-run Reconciliation, selecting the appropriate execution date and accounting date to refresh the data, then export report SDR025 for verification.

<img src="/assets/OqCSb7eIpo0Wchx1rWzjU45rpkh.png" src-width="2398" src-height="1188" align="center"/>

# 5.1.1B Q: How should the reconciliation date be selected?

<b>A:</b> For typical tenants, reconciliation of the previous day’s accounts is performed the next morning. The system defaults the display based on the date the reconciliation task was initiated; see the example below.

<img src="/assets/Gzg1b5JjHo61ZixoEaUjW9h8pdh.png" src-width="1466" src-height="972" align="center"/>

# 5.1.1C Q: Why, after Hong Kong stock clearing on April 30, is the system accounting date May 1 rather than May 2?

(Using May 1 as an example)

<b>A:</b> May 1 is a public holiday for the Hong Kong market, but the US market is a trading day; thus Hong Kong clearing must be run empty. The reverse applies when the US market is on holiday.

# 5.1.1D Q: If positions do not reconcile and there are discrepancies in position quantities, how should this be handled?

<b>A:</b> On the Clearing Management &gt; Position Management &gt; Position Inquiry page, search for the relevant client and click Internal Transfer for the position to be transferred out (see Figure 5.1.1D-1). The quantity to be transferred out must equal street + nominee + own; positions with no quantity should remain at 0 (see Figure 5.1.1D-2).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Position reconciliation is performed on T-1. For example, an internal transfer executed after the prior day’s (20/5) end-of-day will be reflected in the position reconciliation on the next day (22/5).</p>
</div>

<img src="/assets/Z4fibnBFwo4FFPx5WAHjz21Uphe.png" src-width="2500" src-height="1136" align="center"/>

<em>Figure 5.1.1D-1</em>

<img src="/assets/VWHbb49m1on2BhxcGoGjVvknpof.png" src-width="1188" src-height="805" align="center"/>

<em>Figure 5.1.1D-2</em>

# 5.1.1E Q: When the upstream counterparty is Changqiao Securities, what causes position reconciliation discrepancies during end-of-day clearing?

A: If the tenant does not complete position reconciliation before end of day, imbalances will occur. Position files must be parsed after the daily cut-off; once end-of-day processing is complete, the system’s position data will be updated. Afterwards, go to Clearing Management &gt; Clearing Check &gt; Position Reconciliation and click Re-run Reconciliation to align with the upstream position file (select the previous day as the accounting date).

# 5.1.1F Q: How do “Settlement Account” and “Business Account” affect the reconciliation type?

<b>A:</b> The reconciliation type configured by the upstream agent/custodian — “Settlement Account” — displays position quantities based on settled quantities (after T+2 settlement), whereas “Business Account” displays position quantities based on book quantities (real-time reflection). The system primarily reconciles using the settled quantities in the Settlement Account; if reconciliation is set to use the Business Account’s book quantities, this may cause SDR025 - Stock Reconciliation Report to be unreconciled. You can standardize by selecting Settlement Account as the reconciliation type.

<img src="/assets/AGIAba5mAoIUP4xqDkJjWP4ap6d.png" src-width="2672" src-height="1404" align="center"/>

