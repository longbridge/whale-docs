---
title: Frequently Asked Questions
slug: 2a05bab0c2cc81f09f40dc98b49f4ced
sidebar_position: 3
---


# Frequently Asked Questions

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: The customer says the transfer was successful; why can&#39;t the backend find the corresponding deposit record?</p>
</div>

A: First check the system data synchronization status; there may be a 5–10 minute delay—refresh the page and check again. If there is still no record, verify whether the customer's deposit address has completed authentication and whitelisting; failure to do so can prevent the record from being recognized. Finally, use the TXID provided by the customer to verify the transaction on a blockchain explorer.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: A deposit record is marked &quot;Abnormal.&quot; What are the common causes and how should it be handled?</p>
</div>

A: Common causes include: (1) invalid address format (for example, a Bitcoin address entered as an Ethereum address); (2) the transaction hash (TXID) does not exist, which may indicate a fraudulent transaction; (3) the deposit amount is below the platform's minimum deposit threshold. Handling: for invalid addresses, notify the customer to provide the correct address; for fraudulent transactions, delete the record; for insufficient amounts, inform the customer to resend the difference or explain why the deposit cannot be credited.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: I want to cancel a pending deposit record, but clicking the &quot;Revoke&quot; button does nothing—why?</p>
</div>

A: Only records with the status "Wallet Address Pending Verification" can be canceled.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: The customer requests a refund after a successful deposit, but the operation fails—how should this be investigated?</p>
</div>

A: Investigate step by step: (1) verify whether the refund address provided by the customer has completed authentication; unverified addresses cannot receive refunds; (2) confirm that the refund network matches the deposit network (for example, if the deposit used ERC-20, the refund cannot be sent via TRC-20).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: I accidentally copied the wrong address during deposit and the assets were sent to someone else—what should I do?</p>
</div>

A: Because blockchain transactions are immutable, mistakenly sent cryptocurrency transfers generally cannot be reversed. Contact platform customer support immediately and provide the sender address, the mistakenly sent recipient address, the transaction hash (TXID), and the transfer time to attempt to contact the recipient. For future transfers, prefer scanning the address via QR code to avoid manual entry.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: I clearly selected the correct token, so why hasn&#39;t the transfer been credited?</p>
</div>

A: First verify that the sender's network and the target platform's network are consistent (for example, if USDT was sent on ERC-20, the target address must correspond to the ERC-20 network); network mismatch can prevent the assets from being credited. Then use the TXID to check the transaction status in the appropriate network's blockchain explorer; if the transaction is confirmed but not credited, contact the target platform's customer support for assistance.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> Q: After deposit, it shows &quot;Confirming&quot; for a long time—has it stalled?</p>
</div>

A: This is most likely due to blockchain network congestion, or because the fee set at the time of sending was too low, causing miners not to prioritize the transaction. Use the TXID in a block explorer to check the number of confirmations; if the confirmations have not reached the platform's requirement (for example, ERC-20 requires 12 confirmations), please wait. If the fee was too low, contact the sender to confirm whether they support accelerating the transaction.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: If the Tag is omitted when sending XRP and the assets do not arrive, how should this be handled?</p>
</div>

A: Currencies such as XRP and XLM require a Tag to be filled in for proper crediting; omission may cause the assets to be held in platform custody. In this case, log in to the target platform, locate the corresponding deposit record, contact customer support and provide the TXID and the omitted Tag information to request manual crediting. For future transactions, remember to copy the Tag in sync to avoid omission.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Q: The transferred amount and the received amount are different—why is part of it missing?</p>
</div>

A: The missing portion is usually the blockchain network fee, which is automatically deducted from the sent amount and is normal. If the discrepancy is large, check whether the amount is below the platform's minimum deposit threshold; amounts below the threshold may not be credited. Contact customer support to confirm whether the difference can be resent and credited together.

