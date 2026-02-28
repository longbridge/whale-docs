---
title: 5.3 Back-Office Order Supplement
slug: PXWHwKpEkiaIhLkgPF6ca91Lnaf
sidebar_position: 2
---


# 5.3 Backend Order Supplementation

# 5.3 Back-Office Order Supplement

# 5.3A Q: After executing a trade on behalf of a client, how do I supplement the order back to the client?

<b>A:</b> Before performing a back-office order supplementation, please ensure that the service provider, sub-warehouse, and settlement channel are configured on the "Business Parameter Settings &gt; Market Management" page (see Figure 5.3A-1, Figure 5.3A-2, Figure 5.3A-3).

After completing the preliminary configuration, go to "Clearing Management &gt; Contract Management" and click "Add Customer Supplemental Order" (see Figure 5.3A-4 and Figure 5.3A-5). After generating the supplemental order, click "Details" and add information to the transaction record (see Figure 5.3A-6 and Figure 5.3A-7).

<img src="/assets/BsKabP49WoHqSCxVS3Cj1CuXpZd.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5.3A-1</em>

<img src="/assets/AGFSb9KDRokR9pxXP7zjAp9Bpvd.png" src-width="3014" src-height="1506" align="center"/>

<img src="/assets/NzJDbT983oqkCWx9CxhjWeEppve.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5.3A-2</em>

<img src="/assets/CQslbesTboqFsixDPaujyEg4ptg.png" src-width="3022" src-height="1508" align="center"/>

<em>Figure 5.3A-3</em>

<img src="/assets/XY6IbI2RGoO8SsxNJg4jUglOpEd.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5.3A-4</em>

<img src="/assets/MJXobKPIfoj6FxxGOnVjU43ppnb.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5.3A-5</em>

<img src="/assets/NvxubWiWQokgu7x1j2WjwlIRpAh.png" src-width="3014" src-height="1506" align="center"/>

<em>Figure 5.3A-6</em>

<img src="/assets/H9jObFbOooI1x2xNlBsj4fnUp5e.png" src-width="3828" src-height="1812" align="center"/>

<img src="/assets/LeZrbb9tUoREXGx25k8jDvS9pL5.png" src-width="3022" src-height="1508" align="center"/>

<em>Figure 5.3A-7</em>

# 5.3B Q: What should be entered for the Back-End Order Number & Back-End Transaction Serial Number?

<b>A:</b> You may copy and paste the contract number.

# 5.3C Q: What is the function of the "Estimate" in the "Fee Information" after supplementing an order?

<b>A:</b> Click "Estimate" to calculate fees based on the client's charging settings. The "Billing Amount" is calculated according to the client's billing configuration under "Business Parameter Settings &gt; Billing Management"; if the bill was added manually, the "Billing Amount" will be "0".

If you wish to waive certain charges, click "Edit/Delete" within "Fee Information." After deletion, the "Billing Amount" will equal 0 and the fee will be shown in the "Receivable Amount."

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>&quot;Actual Received Amount&quot; = &quot;Receivable Amount&quot; - &quot;Deduction Amount&quot;</p>
</div>

<img src="/assets/WhaUbnHsYoXyXOxYtltjM7I0pNg.png" src-width="3022" src-height="1508" align="center"/>

# 5.3D Q: If a back-end supplemental order has more than one transaction record, how should the "Back-End Order Number" and "Back-End Transaction Serial Number" be filled in?

A: Enter the same contract number for the "Back-End Order Number"; enter different serial numbers for the "Back-End Transaction Serial Number."

<img src="/assets/Xpo8bANymo20R6xRRY0jcxOwpff.png" src-width="2850" src-height="1598" align="center"/>

# 5.3E Q: Can over-the-counter derivative products be imported as a "back-end supplemental order"?

A: In "Securities Management &gt; Underlying Management &gt; Private Underlying Library," click "Add Underlying" to create the underlying (see Figure 5.3E-1).

Then, in "Clearing Management &gt; Contract Management," when creating the supplemental order, enter the full security code (see Figure 5.3E-2) to proceed with the supplementation.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>e.g.: TN/HK/XS2703791762</p>
</div>

<img src="/assets/BuK4bmAvsomWj0xmRl4jtGsApbg.png" src-width="3022" src-height="1508" align="center"/>

<em>Figure 5.3E-1</em>

<img src="/assets/NnMMbNaXsoNNpXx1r3KjzLeqpve.png" src-width="3022" src-height="1508" align="center"/>

<em>Figure 5.3E-2</em>

