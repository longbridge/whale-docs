---
title: 6. Corporate Action Questions
slug: OcH0w43lqi1mMDk3JHvcrJCbnMc
sidebar_position: 5
---


# 6. Issues Related to Company Actions

# 6. Corporate Action Questions

# 6A Q: What do the different corporate action types mean? (e.g., categories BE, CA, RS, TM)

A: See the list below describing the different corporate action categories.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>After a corporate action is completed, it generally takes about 5 minutes for the cost price to be updated.</p>
</div>

# 6B. Q: How are corporate actions for US equities handled?

A: US corporate actions should be handled according to the instructions provided by upstream.

- For BE category actions, refer to Quick Start - Regular Cash Dividend (BE) and Quick Start - Voluntary Cash Dividend (BE).

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>If a CA-type corporate action occurs for US equities, the US end-of-day “clearing and settlement” must be completed to pull the latest data.For example: NVDA carried out a 1-for-10 share consolidation after market close on June 7, 2024. The system must complete the US clearing and settlement on June 10; the CA corporate action’s record date will be June 10 and the payment date will be June 11.</p>
</div>

# 6C Q: Why are there no client records after I clicked "Register"?

A: If the equity record date is April 8, the system must complete the end-of-day processing for that date. Only after the system generates data can you click "Register" to retrieve client information. Clicking "Register" prematurely will return no data.

If you need to complete the corporate action before the end of day, you can change the equity record date to April 7, then click "Register" again to pull client data.

<img src="/assets/QimCbDXZCoXtUtxESXxjvjXopHe.png" src-width="2131" src-height="849" align="center"/>

# 6D Q: What if the distributed dividend amount differs from the system amount?

A: You can perform a "Residual Adjustment" to input the actual distributed amount.

(i) On the "Corporate Action" page, click "Details" in the action column.

<img src="/assets/E0dubx5E7oA7lZxCmk1jaCfIpAe.png" src-width="2816" src-height="1376" align="center"/>

(ii) In "Detail Summary," click "Residual Adjustment" to select the amount/quantity, then click "Submit for Execution."

<img src="/assets/MFgmbIsw8o71FrxrsyPjlbk4pud.png" src-width="2084" src-height="1236" align="center"/>

# 6E Q: Can dividends from corporate actions be received in different currencies?

A: In "Scheme Information" click "Edit," add a "BE-CASH DIVIDEND" scheme, input the "Exchange Rate" and the "Dividend Rate" (the dividend per share), then click "Re-register" to pull the latest data.

<img src="/assets/JEkQbolASoYO3oxnvpUjoTa6ptg.png" src-width="2236" src-height="1490" align="center"/>

# 6F Q: How to subscribe for or modify a client’s Rights Subscription exercise quantity?

A: (i) After "Register" succeeds, you can view the exercisable shares and client quantities in the "Detail Summary" section. Add clients in "Client Details" or edit them in "Details."

<img src="/assets/N0tRby1FXox9pTx3SkUjITuWp9g.png" src-width="2367" src-height="1392" align="center"/>

(ii) In "Client Details" you will see eligible clients for distribution. After modifying data, click "Re-register" to refresh. Once data is confirmed, click "Exercise Instruction Collection" to proceed.

- Click "Add": add an individual client to the distribution list.
- Click "Void": remove a client.
- Click "Details": modify a client’s charge information or entitlement transfer quantity.

<img src="/assets/MOn7bi80SoOp6BxoZh4jkJOopJb.png" src-width="2391" src-height="1438" align="center"/>

(iii) Under "Exercise Information" you can view a client’s exercise quantity; click "Exercise" to modify it."Charge Information" shows the corporate action fees for the client; click "Edit" to adjust."Entitlement Information" shows the distributed securities; click "Edit" to modify.

<img src="/assets/Ozcdb52dDolvPtxJq6sjpqDkpoh.png" src-width="1849" src-height="1390" align="center"/>

# 6G Q: If a client does not subscribe for their Rights Subscription (RS), will the system automatically remove it?

A: You must operate a DS-type corporate action to recall the equity.

RS handles the subscribed and reported entitlements; DS handles the unsubscribed entitlements. During CCASS processing, the two corporate actions have different record dates; DS-type actions will be generated slightly later.

# 6H Q: When will the system remove knocked-out CBBCs?

A: When creating a new corporate action, select TM or DS depending on whether residual value remains, then enter the record date provided by upstream in "Record Date." When the issuer removes the product, complete the corporate action to reclaim the underlying.

<img src="/assets/HCujbYERkoZcrQxfURGjzQI7pfL.png" src-width="2674" src-height="1226" align="center"/>

<img src="/assets/EXXnbniSRo8ZOdxyXCujpAXKpub.png" src-width="904" src-height="1126" align="center"/>

# 6I Q: What should I do if an error occurs when performing "Exercise Instruction Collection"?

<img src="/assets/RyrjbQarko2IahxFmibjiI1Opcc.png" src-width="2137" src-height="510" align="center"/>

A: When operating "Exercise Instruction Collection," the selected Start Time and End Time must be in sequence. After success, you can click "Complete Instruction Collection Early" to finish the corporate action ahead of schedule.Additionally, the time intervals must progress sequentially: choose Start Time &lt; choose End Time &lt; choose End Time (CCASS).

# 6J Q: In which report are corporate actions displayed?

A: You can view the SDR040 category reports. Corporate actions that are executed as "mandatory" distributions appear in SDR040-09 Corporate Action Detail Report (BE/IP/SO).Optional scrip/dividend selection corporate actions appear in SDR040-10 Corporate Action Detail Report (BE With Selection).

# 6K Q: Which types of corporate actions must be reported to the Off‑Market Transfer Reporting regime (OTCR)?

A: Corporate actions that are exempt from stamp duty do not need to be reported to the OTCR. Cash offer–type corporate actions must be uploaded; use the `SDR070 - OTCR Report`. Note: you must export to an Excel file to display takeover share transfer records — in‑page queries and CSV export do not support this.

<img src="/assets/HnT3bYsQvo9oyoxpqGQjrFt1pPr.png" src-width="2042" src-height="808" align="center"/>

