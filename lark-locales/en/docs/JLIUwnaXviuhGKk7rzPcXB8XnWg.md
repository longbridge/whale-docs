---
title: 10. Questions About New Share Subscriptions
slug: JLIUwnaXviuhGKk7rzPcXB8XnWg
sidebar_position: 9
---


# 10. Questions Regarding IPO Subscriptions

# 10. Questions About New Share Subscriptions

# 10A Q: Why must applications for new shares be separated into different channels?

A: Segmenting applications into different channels facilitates financing management and statistical reporting for IPO subscription orders. For example, you may configure the following channels:

```text
1. Proprietary Funds Channel
2. Channel A — Financing
3. Channel B — Financing
```

When aggregating orders, subscribing amounts and financing usage can be summarized by channel, enabling the system to automatically report on orders and financing status by channel.

<img src="/assets/LunObbjACooITCxXVn8jStgvpRe.png" src-width="3612" src-height="592" align="center"/>

# 10B Q: Can new share subscription debits be performed sequentially across different channels?

A: Yes. You can first debit Channel A, then add Channel B and defer its application time, and finally debit Channel B.

<img src="/assets/Q8OJbpQPQo7fyRxcxWbj3YCQpEc.png" src-width="2876" src-height="1602" align="center"/>

<img src="/assets/XuqJbRAqkoHjT7xVy1yjbnjspOe.png" src-width="2820" src-height="1598" align="center"/>

# 10C Q: Is tiered subscription charging supported?

A: Tiered charging based on different numbers of subscribed shares is not currently supported.

# 10D Q: How does the selected financial date on a debit order affect anything?

A: The financial date here refers to the record date for when the debit occurred. For example: if Account A was debited 100 on May 10 and the financial date is set to May 11, the statement will display the debit on May 11.

<img src="/assets/WyCab4guYotlQnxqqXrjvYCYpkf.png" src-width="2680" src-height="902" align="center"/>

# 10E Q: Does the accounting date of an IPO debit order affect interest calculation?

A: The accounting date on an IPO debit order is used to record when the debit occurred and does not affect the number of interest-accrual days. Selecting the relevant financial date will display the debit record on the statement.

<img src="/assets/FFpwbBHiLosHHexRRHXjvlICpvd.png" src-width="2680" src-height="902" align="center"/>

# 10F Q: If a client's account balance is 0, why does a zero-cost new share subscription application fail?

A: Even for zero-cost new share subscriptions, fees must be deducted; the account balance cannot be zero. The client must deposit sufficient funds to cover the fees, or set the subscription fee for the zero-cost application to 0 before applying.

# 10G Q: Can the trading limit be used for new share subscriptions?

A: The trading limit cannot be used as cash or financing for new share subscriptions. New share subscriptions require sufficient actual funds.

# 10H Q: Why can't bond #4701 be used for a new share subscription?

A: Although the bond is listed, it does not support subscriptions. Because it is not a designated securities broker, it does not appear for new share subscriptions.

# 10I Q: After a new share is withdrawn post-listing and re-offered, how should subscription settings be configured?

A: Search for the re-offered stock code under "New Share Subscription &gt; All" (see 10I Figure 1), click "Details," then reset the subscription start & end times, fees, channels, and other information. Switch back to "Yes" to enable subscription. (See 10I Figure 2.)

<img src="/assets/EJlAbU3yaoUHWdxYpb1j3DeCpIh.png" src-width="2554" src-height="662" align="center"/>

<em>10I Figure 1</em>

<img src="/assets/T13Zbezi2oIOKoxoZ2cjhBEEpdh.png" src-width="2528" src-height="1552" align="center"/>

<em>10I Figure 2</em>

# 10J Q: Is international allocation supported?

A: International allocations for new shares can be handled in the back office, but allocations for listed companies are not supported.

Configure the process, debits, and allotment handling on the "New Share Subscription &gt; Hong Kong International Allocation" page; these steps are consistent with IPO subscriptions (see 10J Figures 1 and 2). Allotment files from the receiving party must be imported into the system using the generic template (see 10J Figure 3). If the subscription period has passed, manual ledger adjustments are required.

<img src="/assets/XJjXbwQO1oxqvlxEw82jI4o8pUd.png" src-width="2506" src-height="854" align="center"/>

<em>10J Figure 1</em>

<img src="/assets/KQBqb4CRcoXiKVx8rTkjsHgMpAf.png" src-width="2498" src-height="928" align="center"/>

<em>10J Figure 2</em>

<img src="/assets/GeYMb7j1QorGKExgE1djP3tsp2m.png" src-width="2508" src-height="1428" align="center"/>

<em>10J Figure 3</em>

# 10K Q: After a new share subscription is debited, why does the "Cash Details" in "Account Details" include that debit in the "Total Amount"?

<img src="/assets/GGasb3Gq9oVCITxg3S6jSFrZpbf.png" src-width="1846" src-height="1392" align="center"/>

A: The "Total Amount" calculation includes "cash in transit." "Cash in transit" accounts for funds currently applied to new share subscriptions and therefore more accurately reflects the client's total assets. The funds the client can actually use are shown as "Total Available Cash," which does not include the funds committed to the new share subscription.

