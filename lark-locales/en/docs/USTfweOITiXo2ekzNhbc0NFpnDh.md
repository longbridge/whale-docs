---
title: 5.2 Statement Display
slug: USTfweOITiXo2ekzNhbc0NFpnDh
sidebar_position: 1
---


# 5.2 Statement Display

# 5.2A Q: What is the customer's statement password?

<b>A:</b> Password composition: last four digits of the login mobile number + last four digits of the identification number. Letters in the password must be uppercase; any parentheses in the identification number should be ignored.

For example: if the mobile number is 12345678 and the identification number is 123456(X), the statement password is 5678456X.

- Individual account: last 4 digits of the mobile number + last 4 digits of the identity card number (for joint accounts, use the primary account holder's information)
- Corporate account: last 4 digits of the mobile number + last 4 digits of the CI

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>If the customer has provided multiple nationality documents, the selection priority for identification numbers is: Hong Kong Identity Card &gt; Domestic Identity Card &gt; Passport, consistent with the BCAN declaration order to the Hong Kong Stock Exchange.</p>
</div>

# 5.2B Q: Can a temporary statement be generated?

<b>A:</b> Click "Clearing Management &gt; Statement Management &gt; Statement Inquiry" and then select "Create Temporary Statement."

The "Create Temporary Statement" function can create at most one statement covering up to three months from the account's last active date. For example, if the customer's last cash/deposit activity was in June 2023, the temporary statement can only cover June, July, and August; there will be no statement for later periods if the account has no activity dates.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>If the customer has no cash and no holdings, a temporary statement or monthly statement cannot be created; without transaction flows there is no daily statement.</p>
</div>

<img src="/assets/BplebkVF0ooFOwxMFOJj4BoSpsz.png" src-width="2496" src-height="1312" align="center"/>

# 5.2C Q: Which exchange rate is used as the reference rate displayed on the statement?

A: The reference exchange rate shown on the statement follows the spot rate under "Funds Management &gt; FX &gt; Reference Rates."

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The reference rate uses the mid-market derived rate to convert the total asset market value.</p>
</div>

<img src="/assets/LP6VbRSGXowLDsxj2z1j7aQHpSg.png" src-width="1682" src-height="634" align="center"/>

# 5.2D Q: Will reports or statements show forced liquidation trades?

<b>A:</b> In the TDR001-1 Daily Client Order Report By Client, the "Order Type" will be shown as "Forced Liquidation"; the "Stock Trade Details" section in the statement will label the order as "Forced Liquidation."

<img src="/assets/MMJIbvJ7coiWyuxPC6Bj0oNEpXd.png" src-width="2832" src-height="1486" align="center"/>

<img src="/assets/ERq9b4Kp4o1DUUxeoFJjSX1wpAc.png" src-width="1384" src-height="676" align="center"/>

# 5.2E Q: Why do manually adjusted transactions not display "Cost Price" and "Unrealized P/L"?

<b>A:</b> Manual adjustments made after the end-of-day cutoff require the next trading day to update and display the statement's "Cost Price" and "Unrealized P/L."

# 5.2F Q: What do the bond "Price" and "Cost" displayed on the statement represent?

<b>A:</b> "Price" shows the bond's closing price from "Market Data Maintenance"; "Cost" shows the diluted cost = (Total Buy Amount - Total Sell Amount) / Quantity Held. For adjustments, the manually entered total cost price takes precedence; if no manual input is provided, the previous closing price is used to calculate cost = Closing Price × Quantity Held.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Example: Total transaction amount = $500,000; Quantity = 5,000.If the total cost input = $500,000, the statement will display the cost per unit as the diluted cost = $100.</p>
</div>

<img src="/assets/S23HbHICnopyWGx7hgwjnKUdpLd.png" src-width="1368" src-height="260" align="center"/>

# 5.2G Q: What is the difference between "Pending Settlement Amount" and "Cash Balance" on the statement?

A: Hong Kong equities settle on T+2. Funds for settlements on T+1, T+2, or other settlement dates will be allocated to "Pending Settlement Amount." The net settlement amount for the previous day and the current day (Net Buy Amount - Net Sell Amount) equals the "Pending Settlement Amount."

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>&quot;Cash Balance&quot; is the book balance.</p>
</div>

<img src="/assets/A6sXb2yM2oh8F1xTr0jjjflDp3b.png" src-width="1706" src-height="696" align="center"/>

# 5.2H Q: If an order was placed under the wrong client's trading account and the front desk has reallocated the executed trade to the correct client, how can the statement be corrected?

A: Because the front and back offices are separated, the front-end WTT performs trade allocation, which will display immediately in the app under "Trade Inquiry &gt; Trade Allocation" (see Figure 5.2H-1 and Figure 5.2H-2). The back office performs contract corrections to reassign the incorrectly allocated order to the correct account. This is done in "Clearing Management &gt; Contract Management &gt; Contract Correction List" where the contract correction is submitted for approval (see Figures 5.2H-3 through 5.2H-6). After end-of-day processing, the incorrect order will appear on the statement as cancelled (see Figure 5.2H-7), and a new statement will be generated for the other client.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Notify affected clients before performing trade allocation to avoid complaints.</p>
</div>

<img src="/assets/W8c8bNIBSojHStxs3dojB0u6pde.png" src-width="2612" src-height="1574" align="center"/>

<em>Figure 5.2H-1</em>

<img src="/assets/Si2JbskXvo46LaxXnp6jiuPepIe.png" src-width="2606" src-height="1544" align="center"/>

<em>Figure 5.2H-2</em>

<img src="/assets/TC5jbnO3Uo0QiVxHIQdjbziKpxg.png" src-width="2732" src-height="816" align="center"/>

<em>Figure 5.2H-3</em>

<img src="/assets/EBF6bThGvohLy0xHJmMj7lsTpif.png" src-width="2702" src-height="1192" align="center"/>

<em>Figure 5.2H-4</em>

<img src="/assets/J77KbQzCoopzf0x6cnUjjfTaplg.png" src-width="2504" src-height="1538" align="center"/>

<em>Figure 5.2H-5</em>

<img src="/assets/NDYabWlJpo4nMpxWXcpjXjGQpoc.png" src-width="2850" src-height="1306" align="center"/>

<em>Figure 5.2H-6</em>

<img src="/assets/U8ikbO0LxoUqbKxa7Tjj1hvQpwf.png" src-width="1096" src-height="370" align="center"/>

<em>Figure 5.2H-7</em>

