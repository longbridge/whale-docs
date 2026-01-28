---
title: 4. Manual Adjustment Issues
slug: FpzLwjeUmiIzlekHXvtcqrCRnnd
sidebar_position: 3
---


# 4. Manual Account Adjustment Issues

# 4. Manual Adjustment Issues

# 4A Q: How can a manual adjustment be modified?

<b>A:</b> Completed adjustments cannot be modified. When creating a new adjustment request, selecting "Save Only" allows subsequent modification; if "Submit for Review" is selected, the request can only be rejected and a new request submitted.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>When an adjustment operation is rejected, the client will not receive a notification.</p>
</div>

<img src="/assets/Bmypbp1QFoSWHyxb6hBjS7dCprh.png" src-width="2414" src-height="1252" align="center"/>

<em>4A Figure 1</em>

# 4B Q: The accounting date options for adjustments only show today and tomorrow — how can I backdate to yesterday?

<b>A:</b> The accounting date is not mandatory and may be left blank (see 4B Figure 1). If you need to restore yesterday’s transaction records, you must perform a settlement reversal (see 4B Figure 2).

<img src="/assets/WmhFbUKeWo06uUxdlMdjtdmap7f.png" src-width="2494" src-height="1438" align="center"/>

<em>4B Figure 1</em>

<img src="/assets/Nt0qboMUlo2EfgxzrkGjA28Mp1e.png" src-width="2390" src-height="1420" align="center"/>

<em>4B Figure 2</em>

If re‑calculation of interest/settlement data is not required, asset reversals may be optionally omitted.

# 4C Q: If I perform an adjustment to deposit/withdraw funds or securities after the system’s clearing cutoff time, how should I handle it?

<b>A:</b> On the Clearing Management &gt; Transaction Management page, select the position/fund transaction and click "Edit Date" to change it back to the accounting date of the current day. After end‑of‑day processing completes, the day’s statement will include that transaction.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>If you do not need the transaction to appear on the current day’s statement, you may keep the original accounting date and make no changes.</p>
</div>

<img src="/assets/KWgMbWhHuoqEvixWg9rjy4TRp0c.png" src-width="2386" src-height="828" align="center"/>

# 4D Q: Can the total cost price of stocks adjusted via manual adjustment be modified?

<b>A:</b> On the Asset Account &gt; Account Inquiry &gt; Overview page, click "Modify Cost"; after end‑of‑day processing, the cost will be viewable on the statement.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Note: Not applicable to funds &amp; bonds.</p>
</div>

<img src="/assets/IOsqbSi4zo2TPCxqizBjIp2gpQh.png" src-width="2346" src-height="1386" align="center"/>

# 4E Q: What do Street, Nominee, and Own mean during adjustment?

<b>A:</b>

- Street: shares that have not been transferred and are not registered in the broker’s name (typically enter the quantity under Street).
- Nominee: shares that have been transferred and are registered in the broker’s name.
- Own: shares registered in the client’s name.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>If the wrong holding type is selected during adjustment, perform an &quot;Internal Transfer&quot; on Clearing Management &gt; Position Management &gt; Position Inquiry.</p>
</div>

<img src="/assets/MXGmb3iB0oENd5xPoaQjZDPBpKg.png" src-width="2706" src-height="1232" align="center"/>

# 4F Q: How can transfers of funds or securities between clients be handled?

<b>A:</b> Manual adjustments can be used for this purpose: one client is debited and the other client is credited.

<img src="/assets/FHpybED3fouwUSxr5qejQW0Zpqc.png" src-width="2674" src-height="1414" align="center"/>

# 4G Q: How should inter‑client adjustments be reported for over‑the‑counter securities transactions?

<b>A:</b> Only physical shares or corporate actions involving stamp duty can generate an OTCR file for upload. For inter‑client adjustments, you can export a blank SDR070 - OTCR Report Excel template and manually fill in the transaction details for reporting.

<img src="/assets/DGKbbqF1jon9VAxsQGajUy42pcc.png" src-width="2848" src-height="1152" align="center"/>

# 4H Q: Can adjustments be processed in bulk?

<b>A:</b> Click "Batch Create" in the corresponding category column to download the template. Provide the required information according to the "Import Field Description"; optional fields may be left blank.

<img src="/assets/VXegbJDcdokfHjxeadtjzk6Ppqb.png" src-width="2766" src-height="700" align="center"/>

<img src="/assets/Nn9ub0QP3oUJBqxAqJijSJZmpbg.png" src-width="2352" src-height="1352" align="center"/>

<img src="/assets/WI5MbAwVoo8KMfxiyL1jCUxmpdg.png" src-width="1404" src-height="1290" align="center"/>

# 4I Q: How can the business name for adjustment types on the statement be modified?

A: On Asset Account &gt; Business Code Inquiry, select the relevant business type, click "Edit", and modify the business name.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>The LCOTHER2 business code is not linked to a specific business scenario and may be renamed by users for use with adjustments.</p>
</div>

<img src="/assets/FtNxbJw7ToTlLpxWIs9jSYVBp7g.png" src-width="1412" src-height="504" align="center"/>

<img src="/assets/SmhsbZ0dAoIP7fxv97AjvduJpEc.png" src-width="2696" src-height="1156" align="center"/>

# 4J Q: If funds are deposited using "Manual Adjustment" rather than Funds Management &gt; Deposit, what impacts will this have?

A: There are three impacts:

1. Different accounting ledger classification (depending on company settings).
2. Different presentation on the statement.
3. Different record locations for viewing.

