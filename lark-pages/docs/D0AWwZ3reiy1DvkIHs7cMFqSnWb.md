---
title: 2.2 Currency Exchange
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
sidebar_position: 2
---


# 2.2 Currency Exchange

# 2.2 Currency Exchange

# 2.2A Q: How do I configure currency exchange operations?

Answer: Please refer to the following steps for initial configuration. Confirm that the currencies are enabled for exchange, and that currency pairs, exchange strategies, and exchange pool limits have been configured.
(i). On the Business Parameter Settings &gt; Fund Parameters &gt; Currency page, click Edit in the action column and set the exchange function to "yes".

<img src="/assets/Uis2bbyEgoZQzaxDIMrjjNMNp6c.png" src-width="2641" src-height="1274" align="center"/>

<img src="/assets/YpNubRRzuoOxptxTohkjfAgSpLg.png" src-width="2858" src-height="1635" align="center"/>

(ii). On the Business Parameter Settings &gt; Currency Exchange &gt; Currency Pairs page, click Create to add currencies that can be exchanged out and exchanged in.

<img src="/assets/Jo4Nbn9ziolNNexrpOBjA8Qvpre.png" src-width="2635" src-height="1203" align="center"/>

<img src="/assets/Aajjb9KkzoxJKzxSe8IjJ5Lxpnd.png" src-width="2383" src-height="941" align="center"/>

(iii). On the Business Parameter Settings &gt; Currency Exchange &gt; Exchange Strategy page, click Create.

<img src="/assets/PZDgbGWEPop8YsxRSI5j1l6apLc.png" src-width="2627" src-height="1291" align="center"/>

(iv). On the Create page, add by exchanged-out and exchanged-in currencies:

- Default (if the exchange type is set to "Specified", it cannot be "None")
- Service strategy: Exchange pool conversion
- Exchange type: None
- Enter service hours
- Supported currency pairs, click Add

<img src="/assets/YoR0boDSKoeYw2xFkVWjSgUIpxf.png" src-width="2229" src-height="1372" align="center"/>

(v). On Funds Management &gt; Exchange Pool &gt; Quota Configuration, click Create.

<img src="/assets/RquNbucAzomRGNxOs5XjhYAOp3r.png" src-width="2856" src-height="1555" align="center"/>

(vi). On the Create page:

- Currency: add the exchanged-out and exchanged-in currencies
- Alert threshold amount: enter an amount (a notification will be triggered when the threshold is reached)
- Remaining quota adjustment: enter an amount

<img src="/assets/JOilbeRChoDUDJxV0jmjJPCKpjh.png" src-width="2246" src-height="1370" align="center"/>

- After the basic configuration is complete, currency exchange can be performed.

(1) On Funds Management &gt; Currency Exchange &gt; Customer Exchange, click Manual Exchange.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Manual Exchange allows custom exchange rates up to 8 decimal places. If more than 8 decimal places are required, you must first reject the exchange request and use the adjustment function.</p>
</div>

<img src="/assets/FB08bJYtgoReZnxGMuEjlMXSpTg.png" src-width="2599" src-height="1104" align="center"/>

<img src="/assets/ZL35bpEyBocuByxm4BDjngTQpVd.png" src-width="2702" src-height="1232" align="center"/>

(2) In the action column, click Review to approve or reject the request.

<img src="/assets/NmexbEyZ1oldRJx4m2fjvL0opXe.png" src-width="2236" src-height="1034" align="center"/>

<img src="/assets/KotcbuUDNoM8LOxr6m3jaSPipLd.png" src-width="2228" src-height="1367" align="center"/>

# 2.2B Q: What is the difference between Manual_current and Manual_account? What impact do they have?

Answer: The exchange rate shown on statements (see 2.2B Fig. 1) and the system-configured rate for manual exchange (see 2.2B Fig. 2) follow the spot rate (Manual_current). The Manual_current rate will continue to display the value from the most recent modification record until it is manually updated again.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Reference rates use the mid cross-rate to convert the total asset market value.</p>
</div>

Accounting and exchange- or asset-related reports, such as FRR006, FDR001, and SDR003, provide a choice of rate types (see 2.2B Fig. 3). The selectable book rate is typically used for asset valuation; accounting processes will involve the book rate (Manual_account).

<img src="/assets/QPDAbmBYcoHYbex5YdijnsXTp5l.png" src-width="1268" src-height="194" align="center"/>

<em>2.2B Fig. 1</em>

<img src="/assets/C4eTbaWplor4GLxfPkRjjnJuphg.png" src-width="2510" src-height="768" align="center"/>

<em>2.2B Fig. 2</em>

<img src="/assets/UhErbBdvvoI3m5xMuHNjip0Npyh.png" src-width="2042" src-height="382" align="center"/>

<em>2.2B Fig. 3</em>

# 2.2C Q: Why was the customer's exchange request unsuccessful?

Answer: The exchange pool must have sufficient quota available to perform the exchange.

Steps to configure the exchange pool are as follows:

(i). On Business Parameter Settings &gt; Currency Exchange &gt; Exchange Pool Quota Configuration, click Create.

<img src="/assets/T1i1bAQPQoWbt9xV0eijfepnpmf.png" src-width="2856" src-height="1555" align="center"/>

(ii). On the edit page:

- Currency: add the exchanged-out and exchanged-in currencies
- Alert threshold amount: enter an amount (a notification will be triggered when the threshold is reached)
- Remaining quota adjustment: enter an amount

<img src="/assets/VqlPbGQvVoJO1XxK5V6jZdE7pYf.png" src-width="2096" src-height="1354" align="center"/>

# 2.2D Q: Can manual exchange use a custom rate?

Answer: Yes. On Funds Management &gt; Currency Exchange, click Manual Exchange and enter a custom rate.

<img src="/assets/XMePbFSdpoOs6OxLwZJjmfcnpsh.png" src-width="2500" src-height="986" align="center"/>

# 2.2E Q: How do I require manual review for every exchange transaction?

Answer: On Business Parameter Settings &gt; Currency Exchange &gt; Exchange Strategy, click Approval Starting Point and set the review starting amount, for example: 0.01.

<img src="/assets/QVDjboHGWoq98Dxgi3yjsFbgpVh.png" src-width="2712" src-height="1394" align="center"/>

<img src="/assets/BkSzbv019oiExhxW8FjjlNRlpPe.png" src-width="2346" src-height="940" align="center"/>

# 2.2F Q: Can deposits, withdrawals, and exchanges trigger notifications?

Answer: On the Message Settings &gt; Subscription Management page accessed via the top-right gear icon (see 2.2F Fig. 1 and Fig. 2), click Create.

You can select an email notification for "Exchange and deposits/withdrawals require review" (see 2.2F Fig. 2). Select the email notification method and add the users/roles to be notified (see 2.2F Fig. 3). Note that if a customer submits an exchange request via the App, there is no email notification.

<img src="/assets/GFDlbOfPRoFzo6xq4Y4jYiyppVf.png" src-width="2386" src-height="374" align="center"/>

<em>2.2F Fig. 1</em>

<img src="/assets/BEnpbx3LPo92WdxGeWLjbEXBpvf.png" src-width="2371" src-height="1098" align="center"/>

<em>2.2F Fig. 2</em>

<img src="/assets/CuKEbgxt9o4RM8xWXT2jgu9spmc.png" src-width="2021" src-height="966" align="center"/>

<em>2.2F Fig. 3</em>

Webhook is for internal Feishu notifications and is not available externally.

