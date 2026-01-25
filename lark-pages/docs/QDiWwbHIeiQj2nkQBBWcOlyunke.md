---
title: 5.1 Clearing Settings
slug: QDiWwbHIeiQj2nkQBBWcOlyunke
sidebar_position: 0
---


# 5.1 Settlement Settings

# 5.1 Clearing Settings

# 5.1A Question: How do I set the market calendar for a new trading market?

Answer: Configure this in WBO under Business Parameter Settings &gt; Market Management.

(i) First, locate the market calendar (for example, on the exchange website).

<img src="/assets/K1uYb9iiFovIC2x0eVUjkQKxpuc.png" src-width="1792" src-height="1612" align="center"/>

(ii) Go to WBO → Business Parameter Settings &gt; Market Management &gt; Market Calendar to configure.

<img src="/assets/UJC3bIofroQHWdxnV78jxRDVp3e.png" src-width="2488" src-height="922" align="center"/>

(iii) In Market Calendar Management, click "Initialize." Select the "Market" and the "Start Date," then click "Confirm" to set all weekdays within that period as the trading and settlement days for that market.

<img src="/assets/FiYQbJ5GioCYtyx6DH0jxSQYpQc.png" src-width="2848" src-height="1586" align="center"/>

<img src="/assets/L2ttbRPnloKocixWTAfje7wSpOe.png" src-width="2836" src-height="1546" align="center"/>

(iv) Finally, in the calendar select the market’s closed days and mark them as holidays.

<img src="/assets/WrwAbhWL0oTYQjxmH6zjysHnpnc.png" src-width="2850" src-height="1570" align="center"/>

Additionally, if the Hong Kong and A-share markets are both closed on the same day, you may mark other markets as closed as well to avoid unnecessary empty end-of-day runs.

<img src="/assets/Y7PRbXjzsomLuwxClgejFmW9pPb.png" src-width="2830" src-height="1584" align="center"/>

Half-day trading sessions in different markets can be designated as settlement days or non-settlement days; please configure the appropriate type in the market calendar.

<img src="/assets/Pc7vbFnU7onSLjxJaXcjmZ0LphX.png" src-width="1980" src-height="1308" align="center"/>

# 5.1B Question: How do I perform a clearing reversal?

Answer: On the Clearing Management &gt; Clearing Reversal page, click "Create Clearing Reversal." (See Figure 5.1B-1)

Select the financial date, post-send settlement handling, asset-class rollback, and market(s) (multiple markets can be selected), then click "Submit for Approval." (See Figure 5.1B-2)

- "Accounting Reversal" performs a comprehensive reversal of fees, such as charged commissions, interest deductions, and clearing accounting calculations. It does not affect deposits/withdrawals, trade orders, or account-opening data.
- Clearing financial dates cannot be skipped. For example, if today is 2024-01-26 and you need to reverse to 2024-01-24, first reverse 2024-01-26, complete that, then reverse 2024-01-25, and finally reverse 2024-01-24; otherwise, the clearing process will report an error.

<img src="/assets/CEyDbgZtvo05dGxqKSJjfQIgpKc.png" src-width="2864" src-height="1288" align="center"/>

<em>5.1B Figure 1</em>

<img src="/assets/LvbdbPsQcoANTwxGa3HjrjDEp2k.png" src-width="2390" src-height="1420" align="center"/>

<em>5.1B Figure 2</em>

If it is not necessary to recalculate interest/settlement data, asset-class rollback may be left unselected.

# 5.1C Question: Why does ZunJia’s position file not need to be imported by market?

Answer: ZunJia’s position file does not separate Hong Kong and U.S. markets; positions are consolidated into a single file for provision, so the import system does not need to distinguish markets.

<img src="/assets/Jif8bnmxwo7O5OxBgtVj3HhgpKg.png" src-width="2690" src-height="1410" align="center"/>

<img src="/assets/KXc6bEvVto30MMxFLEjjdry8p9c.png" src-width="1398" src-height="202" align="center"/>

