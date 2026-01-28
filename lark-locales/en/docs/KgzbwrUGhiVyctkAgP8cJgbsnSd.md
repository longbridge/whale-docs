---
title: 5. Clearing Issues
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. Settlement Issues

# 5. Clearing Issues

# 5A Q: Can clearing re-run yesterday’s data?

A: On the "Clearing Management &gt; Clearing Reversal" page, click "Add" — you cannot skip accounting dates; reversals must be performed one accounting day at a time. (See Figure 5A-1)

<img src="/assets/MXfPbOfovoQJrHxf0HOjqLTppJf.png" src-width="2390" src-height="1420" align="center"/>

<em>Figure 5A-1</em>

If interest/settlement data do not need to be recalculated, asset-type reversals may be optionally left unperformed.

# 5B Q: Why does the early settlement operation have no response?

A: Early settlement must be performed after end-of-day processing is complete. If the next day is a holiday, an error will occur: Market calendar does not exist.

<img src="/assets/KxIlboe5yoyQGKxYS1xjilMupnd.png" src-width="2504" src-height="1006" align="center"/>

# 5C Q: What actions/precautions are required for half-day market clearing?

A: As early as 2:00 on the same day, click "Advance Day Cut" on the "Clearing Management &gt; End-of-day Tasks" page to perform clearing earlier, or wait until the system cut-off time (for example, 4:30) to proceed.

<img src="/assets/TAiQbmNccoa5A5xcX8ijzzwzpPe.png" src-width="2183" src-height="384" align="center"/>

# 5D Q: How to handle error prompts in the end-of-day "Clearing Pre-check"?

<img src="/assets/Kr7lbug4BojilNxTodcjkdDUp6e.png" src-width="2220" src-height="380" align="center"/>

A: After verifying the displayed prompt information, perform a "Manual Review" to approve.

<img src="/assets/H6DJb4PY6ofRYSxVta7ju6F9prc.png" src-width="2110" src-height="172" align="center"/>

<img src="/assets/TjHHbX3sMo9unLxVx2YjuK2upwf.png" src-width="2040" src-height="162" align="center"/>

<img src="/assets/QPE2bFEDvolaHVxvTpcjbVjPpyh.png" src-width="2752" src-height="1354" align="center"/>

<em>Figure 5D-1</em>

<img src="/assets/TU9obFKN4oXBSPxqrIEj4Zzgpda.png" src-width="2656" src-height="294" align="center"/>

<em>Figure 5D-2</em>

# 5E Q: How to handle the "All front-office transactions included in clearing" prompt during Clearing Pre-check?

<img src="/assets/M6aebyfyWoJtl8xYOrqjzVHVpOb.png" src-width="1373" src-height="1124" align="center"/>

A: Verify whether the transaction was performed after the system’s clearing time. On the "Clearing Management &gt; Transaction Management" page, select the position/fund transaction and click "Edit Date" to change it back to the accounting date of that day. After end-of-day processing completes, the day’s settlement will appear for that transaction.

If it is not required that the transaction appears on the day’s statement, you may keep the original accounting date and not modify it; click Approve to continue end-of-day processing.

<img src="/assets/Vht7bz7I2oE1VIxAehPjdY07pAk.png" src-width="2386" src-height="828" align="center"/>

# 5F Q: Does the "IBOND Trade Check" in clearing checks require action?

A: The prompt can be manually reviewed and approved. To disable the check, modify the configuration at "Business Parameter Settings &gt; End-of-day Settings &gt; Clearing Pre-check &gt; IBOND Trade Check." (See below)

<img src="/assets/IzeQbwULAot8YQxbTtIjptexpmc.png" src-width="2858" src-height="1610" align="center"/>

<img src="/assets/MkqKbttkLoj1k0xE7CijqGlSpYe.png" src-width="2314" src-height="1342" align="center"/>

# 5G Q: How to handle "Execution failed! Market table configuration error" during end-of-day data synchronization?

A: The error message will indicate which market is missing.

(i) Add the market: "Business Parameter Settings &gt; Market Management &gt; Market Rules" — add the relevant market configuration. (See Figures 5G-1 and 5G-2)

(ii) Add the currency: "Funds Management &gt; Exchange Rates &gt; Reference Exchange Rates" — add the currency for that market. (See Figures 5G-3 and 5G-4)

(iii) Re-add the market in end-of-day settings: "Business Parameter Settings &gt; End-of-day Settings &gt; Market Settlement" — click "Edit" to add the market. (See Figures 5G-5 and 5G-6)

<img src="/assets/XHZDbdhdroZpTxxPCjoj4hsNpHe.png" src-width="2852" src-height="1606" align="center"/>

<em>Figure 5G-1</em>

<img src="/assets/EdPgbHvyXozTabx5fH1j14xOpHf.png" src-width="2448" src-height="1276" align="center"/>

<em>Figure 5G-2</em>

<img src="/assets/RRVcblUDwoM88NxHLIXjbZ0Fpbg.png" src-width="2334" src-height="1078" align="center"/>

<em>Figure 5G-3</em>

<img src="/assets/IVwNbnZvvowayCx2bqwjtKe4pMe.png" src-width="1926" src-height="1298" align="center"/>

<em>Figure 5G-4</em>

<img src="/assets/YMnZbmKQQoOStex94e4jbPU6pKc.png" src-width="2740" src-height="910" align="center"/>

<em>Figure 5G-5</em>

<img src="/assets/Av9PbVbqJo11ipx7UQzjvGrvpyc.png" src-width="2476" src-height="866" align="center"/>

<em>Figure 5G-6</em>

# 5H Q: How to handle errors discovered during clearing checks?

<img src="/assets/XiIpbV9EyoVLRvx1slIjqF1Up0g.png" src-width="2644" src-height="1112" align="center"/>

A: Confirm whether the same security for the same client is held at different custodians.

On the "Clearing Management &gt; Clearing Check &gt; Check Results" page, a failure may appear as "Same client, same security across sub-accounts" — this is prompted when the same client and the same stock are held in sub-accounts under different custodians.

- Method 1: If the stock is indeed held in two positions under different custodians, click "Work Order Details" to manually approve (see Figure 5H-1), then return to "Clearing Management &gt; End-of-day Tasks" to continue end-of-day processing. Note that if the holdings remain under different custodians, the check will continue to prompt errors in subsequent clearings.
- Method 2: Use "Clearing Management &gt; Position Management &gt; Position Query" to perform an internal position transfer to place the stock under the same custodian (see Figure 5H-2). Then return to End-of-day Tasks and click "Re-execute" on the clearing check to complete end-of-day processing.

<img src="/assets/QnDMbMWwQoHvU9x5dFqje0JipMe.png" src-width="2512" src-height="814" align="center"/>

<em>Figure 5H-1</em>

<img src="/assets/UDAGbq8vwosnhcxCGAtj4yiNpce.png" src-width="2454" src-height="1109" align="center"/>

<em>Figure 5H-2</em>

# 5I Q: How to handle operations on typhoon days? (Not applicable after September 23, 2024)

A: CCASS will generally notify brokers to postpone funds or securities.

(i) Operate on the "Clearing Management &gt; Typhoon Day Handling" page.

<img src="/assets/M0v5b1BuLo2KgTxKVdmj3W2rpoe.png" src-width="2840" src-height="1410" align="center"/>

(ii) Select the "Market" and, according to the CCASS notice, choose "Postpone both funds and securities" or "Postpone funds only."

<img src="/assets/YsSqbbk9ooxDQhxhLPEjh5nUpgf.png" src-width="2756" src-height="1478" align="center"/>

