---
title: 5. Clearing Issues
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. Settlement Issues

# 5. Clearing Issues

# 5A Q: Can clearing re-run yesterday’s data?

A: On the " Day-End Settlement &gt; Clearing Cancellation " page, click "New Clearing Cancellation" — you cannot skip accounting dates; reversals must be performed one accounting day at a time. (See Figure 5A-1)

<img src="/assets/RDOEbwKjXoJMEcxw5enjGYP6pIg.png" src-width="3016" src-height="1500" align="center"/>

<em>Figure 5A-1</em>

If interest/settlement data do not need to be recalculated, asset-type reversals may be optionally left unperformed.

# 5B Q: Why does the early settlement operation have no response?

A: Early settlement must be performed after end-of-day processing is complete. If the next day is a holiday, an error will occur: Market calendar does not exist.

<img src="/assets/RvsobP1RMoaVuoxEcpWjybEbpqc.png" src-width="3016" src-height="1500" align="center"/>

# 5C Q: What actions/precautions are required for half-day market clearing?

A: As early as 2:00 on the same day, click "Advance Day Cut" on the " Day-End Settlement &gt; End-of-day Tasks" page to perform clearing earlier, or wait until the system cut-off time (for example, 4:30) to proceed.

<img src="/assets/ZtDMbubeQooX1nxq0edj1z2upDb.png" src-width="3020" src-height="1496" align="center"/>

# 5D Q: How to handle error prompts in the end-of-day "Health Check Before Clearing"?

<img src="/assets/Cw05bKyJPobUMGxTHZGjWpSepKe.png" src-width="3020" src-height="1496" align="center"/>

<img src="/assets/DrIObJDBQogUYTxgbQrjcMqnpEh.png" src-width="3000" src-height="1500" align="center"/>

<img src="/assets/CtHdbz1eNoTWnIx1mrKjrzSypJb.png" src-width="3000" src-height="1500" align="center"/>

A: After verifying the displayed prompt information, perform a "Manual Review" to approve.

<img src="/assets/NYGgbOTE2o0Ah2xzuYpjJlUjpRg.png" src-width="2182" src-height="324" align="center"/>

<img src="/assets/Hl2dbSmVjoBLi9xJzLHjgzCep8Q.png" src-width="2220" src-height="448" align="center"/>

<img src="/assets/SInTbNHNVoYgSYxksKPjgZY2pzc.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5D-1</em>

# 5E Q: How to handle the "Full front-end flow into clearing" prompt during Day End Clearing?

<img src="/assets/H7f4bA707oWgewxQVG1j1JMTpwh.png" src-width="3014" src-height="1506" align="center"/>

A: Verify whether the transaction was performed after the system’s clearing time. On the " Day-End Settlement &gt; Exception Entry Mgmt " page, select the position/fund transaction and click "Edit Date" to change it back to the accounting date of that day. After end-of-day processing completes, the day’s settlement will appear for that transaction.

If it is not required that the transaction appears on the day’s statement, you may keep the original accounting date and not modify it; click Approve to continue end-of-day processing.

<img src="/assets/ZQuzbzNRlojolsx1PJjjArJup8g.png" src-width="3014" src-height="1506" align="center"/>

# 5F Q: Does the "IBOND Trade Check" in clearing checks require action?

A: The prompt can be manually reviewed and approved. To disable the check, modify the configuration at "Business Parameter Settings &gt; End-of-day Settings &gt; Clearing Pre-check &gt; IBOND Trade Check." (See below)

<img src="/assets/NuInbLI4soQlPkx56P1jiJi3pDg.png" src-width="3014" src-height="1506" align="center"/>

<img src="/assets/XVYmbCI91o90MxxyMOVj53hqpU1.png" src-width="3014" src-height="1506" align="center"/>

# 5G Q: How to handle "Execution failed! Market table configuration error" during end-of-day data synchronization?

A: The error message will indicate which market is missing.

(i) Add the market: "Business Parameter Settings &gt; Market Management &gt; Market Rules" — Edit the relevant market configuration. (See Figures 5G-1 and 5G-2)

(ii) Add the currency: "Funds Management &gt; Exchange Rates &gt; Reference Exchange Rates" — add the currency for that market. (See Figures 5G-3 and 5G-4)

(iii) Re-add the market in end-of-day settings: "Service Parameter &gt; Market Management &gt; Market " — click "Edit Market Group" to add the market. (See Figures 5G-5 and 5G-6)

<img src="/assets/A2mJbhBy6oSBuEx3UknjCqh2pIf.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5G-1</em>

<img src="/assets/SkuBbljbPomrtNxOJt0j9TzDp5e.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5G-2</em>

<img src="/assets/CAWrbqZ19oAAdhxom5DjQKJUp2b.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5G-3</em>

<img src="/assets/Ym3Kbwz3Uo7fQAxX6wdjxXM0p9Q.png" src-width="3139" src-height="1586" align="center"/>

<em>Figure 5G-4</em>

<img src="/assets/LBApb8fc6olRWRxQx2ijEpO5pVb.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5G-5</em>

<img src="/assets/JMy4bJZR5o56b6xAxH8jOtK0pwf.png" src-width="3014" src-height="1506" align="center"/>

<img src="/assets/WbjEbbtk7oZBznx6AQjj1xG7pFg.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5G-6</em>

# 5H Q: How to handle errors discovered during clearing checks?

<img src="/assets/SI2EbMgdholxsQxof4vjxDszpEh.png" src-width="3014" src-height="1506" align="center"/>

A: Confirm whether the same security for the same client is held at different custodians.

On the " Day-End Settlement &gt; Day End Clear &gt; Clearing Check " page, a failure may appear as "Same client, same underlying across Sub A/C" — this is prompted when the same client and the same stock are held in sub-accounts under different custodians.

- Method 1: If the stock is indeed held in two positions under different custodians, click "Work Order Details" to manually approve (see Figure 5H-1), then return to " Day-End Settlement &gt; End-of-day Tasks" to continue end-of-day processing. Note that if the holdings remain under different custodians, the check will continue to prompt errors in subsequent clearings.
- Method 2: Use " Day-End Settlement &gt; Position Management &gt; Position Query" to perform an internal position transfer to place the stock under the same custodian (see Figure 5H-2). Then return to End-of-day Tasks and click "Re-execute" on the clearing check to complete end-of-day processing.

<img src="/assets/X7ApbIcZCobm2lxqEUkjgzE2pqe.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5H-1</em>

<img src="/assets/SrsbbYh8Jo3qEhxMHL2juhLxpug.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5H-2</em>

# 5I Q: How to handle operations on typhoon days? (Not applicable after September 23, 2024)

A: CCASS will generally notify brokers to postpone funds or securities.

(i) Operate on the " Day-End Settlement &gt; Typhoon Day Handling" page.

<img src="/assets/PLhMbpkffo6nrbxz6ePjSMPbpJc.png" src-width="3014" src-height="1506" align="center"/>

(ii) Select the "Market" and, according to the CCASS notice, choose "Postpone both funds and securities" or "Postpone funds only."

<img src="/assets/To0ub94ecoNWGExYDGpj2nSvppe.png" src-width="3014" src-height="1506" align="center"/>

