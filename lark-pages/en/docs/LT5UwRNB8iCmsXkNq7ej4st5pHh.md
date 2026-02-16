---
title: Frequently Asked Questions
slug: 2a05bab0c2cc81a0b6d2c2008e1e6d28
sidebar_position: 3
---


# Frequently Asked Questions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: Why does the system indicate &quot;Insufficient Balance&quot; when I submit a withdrawal request even though my account shows sufficient funds?</p>
</div>

A: You must distinguish between the "available balance" and the "frozen balance." If assets are subject to a "T+1 lockup period" (for example, newly purchased tokens not held for 24 hours), are invested in financial products that have not been redeemed, or there are pending trade orders, they will be shown as frozen; only the available balance can be used for withdrawals. In addition, the withdrawal amount must include the network fee. If you enter the full available balance, the transaction may fail after the fee is deducted. We recommend leaving a small balance to cover the network fee.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: Why can&#39;t a newly registered account initiate withdrawals?</p>
</div>

A: Regulated platforms typically impose a "risk control observation period" for new accounts (usually 7–10 calendar days), during which purchased cryptocurrency cannot be withdrawn and you must wait until the observation period ends. In addition, accounts that have not completed advanced KYC verification may be restricted from withdrawing; completing identity verification (for example, uploading a passport and proof of address) will unlock withdrawal functionality.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: What happens if I omit or incorrectly enter the Memo/Tag when withdrawing? How should I handle it?</p>
</div>

A: Coins such as XRP, XLM, and EOS require a Memo/Tag to be credited correctly; omitting or entering an incorrect Memo/Tag may cause the assets to be held in temporary custody by the receiving platform (they will not be lost). To resolve this, contact the recipient’s customer support and provide the transaction hash (TXID), the withdrawal address, and the correct Memo/Tag information to request manual crediting. It is recommended to copy the address and the Memo/Tag together and verify them twice to avoid errors.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: After I click &quot;Confirm Withdrawal&quot; the page freezes and no TXID is generated. Should I resubmit?</p>
</div>

A: Do not resubmit! A frozen page may be caused by network latency or a temporary system fault, and the request may already be in a "Pending Submission" state. Log in and check Withdrawals → Withdrawal Requests: if the status shows "Pending Submission," please wait. If no status appears for an extended period, log out and log back in, or clear your browser cache and then check again to confirm the request was not submitted before attempting again.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: The withdrawal status shows &quot;Completed,&quot; but the recipient has not received the funds. How should I investigate this?</p>
</div>

A: Follow these three steps: 1) Use the TXID to query the relevant blockchain explorer and confirm the transaction has been confirmed on-chain (for example, BTC typically requires 6 confirmations); 2) If the blockchain shows "Success," contact the recipient platform’s customer support and provide the TXID and the receiving address to determine whether a synchronization delay on the recipient’s system is the cause; 3) If the asset was returned (the chain shows "Failed"), the funds will be automatically returned to the original withdrawal account—please allow 1–3 hours for the refund to appear.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: The withdrawal amount differs significantly from the amount the recipient received. Was the platform deducting the difference?</p>
</div>

A: Discrepancies generally arise from two sources: 1) Network fees (miner fees), which are collected by the blockchain network and automatically deducted from the withdrawal amount; these fees fluctuate with network congestion. 2) The recipient platform’s deposit threshold—if the withdrawal amount is below the recipient’s minimum deposit (for example, BTC may require ≥ 0.001 BTC), the deposit may be rejected and returned; when returned, an additional fee may be charged, increasing the discrepancy. Before withdrawing, confirm the recipient’s fee policy and minimum deposit requirements.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: Can assets be recovered if I mistakenly sent ETH to a BTC address, or sent USDT on the ERC-20 network to a TRC-20 address?</p>
</div>

A: Such cross-chain or cross-token transfers are incompatible due to address format differences; the assets will become permanently "unavailable" and cannot be automatically returned. You can attempt one of the following: 1) Contact the recipient platform’s customer support, provide the TXID and transfer proof, explain the mistake, and inquire whether a manual return is possible (success rates are very low). 2) If the funds were sent to an incorrect personal address and you control that address’s private key, import the private key into a wallet on the corresponding network to retrieve the assets. Before transferring, scan the address QR code and verify the first five and last five characters of the address.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: A WBO ticket shows &quot;Approved,&quot; but no on-chain transaction was triggered. What could be the reason?</p>
</div>

A: This may be due to insufficient funds in the platform’s withdrawal hot wallet; the system may be transferring funds from the cold wallet to the hot wallet, which typically takes 15–30 minutes. In addition, if the relevant blockchain network is experiencing extreme volatility (for example, a surge in gas fees), the system may pause transaction sending and wait for the network to stabilize before proceeding. You can check the hot wallet balance on the platform’s "Wallet Status" page or contact customer support to inquire about transaction queuing.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: Can the withdrawal fee be adjusted manually, and why are fees sometimes exceptionally high?</p>
</div>

A: Some platforms support manual fee adjustment (for example, Coinbase Pro’s "Advanced" option); higher fees increase miner/validator priority. Fee spikes are usually caused by blockchain network congestion (for example, ETH gas fees exceeding 150 Gwei). Platforms dynamically adjust default fees to ensure transaction success. To reduce costs, avoid peak network times (typically daytime in UTC) or use Layer-2 networks (for example, Arbitrum) where supported.

