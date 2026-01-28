---
title: Frequently Asked Questions
slug: REBiw833PiFPeKkh5RkcL3slneb
sidebar_position: 3
---


# Frequently Asked Questions

# Frequently Asked Questions

# Fund Display Management Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why is a fund configured in the App&#39;s display management not visible in the App? If it is visible, why is trading unavailable?</p>
</div>

Answer: The prerequisite for a fund to be displayed in the App is that the fund's status is set to "Visible." The prerequisites for a fund to support trading are that the fund is both in the "Visible" status and in the "On‑shelf" status.

# Fund Channel Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why must each fund have a fund channel configured?</p>
</div>

Answer: A fund channel designates the upstream submission endpoint for the fund; the upstream corresponds to the broker account opened on that endpoint, and fund subscription and redemption orders must be submitted to the corresponding upstream.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why can a fund only be configured with one channel?</p>
</div>

Answer: Orders for the same fund must be submitted to a single upstream; if a fund were to submit orders to multiple upstreams, it would cause duplicate and disordered fund orders.

# Fund Backfill Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why is manual backfilling supported?</p>
</div>

Answer: Some upstreams support automatic backfilling via API, while other upstreams only support fund file return. For upstreams that use fund file returns, manual backfilling of information such as fund subscription amounts and redemption shares is required.

# Fund Clearing Issues

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Question: Why does the verification and confirmation node in fund clearing require that channel orders from the previous trading day be fully processed before processing channel orders from subsequent trading days?</p>
</div>

Answer: Only after verification and confirmation in fund clearing are fields such as fund holding gains in customer assets calculated. The holding gains for subsequent trading days depend on the holding gains calculated for the previous trading day; therefore, channel orders from the previous trading day must be processed first before processing those from subsequent trading days.

