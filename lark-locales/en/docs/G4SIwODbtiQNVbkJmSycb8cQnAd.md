---
title: Feature Introduction
slug: G4SIwODbtiQNVbkJmSycb8cQnAd
sidebar_position: 2
---


# Feature Overview

# Feature Introduction

# Overview

The primary functions of Temporary Adjustment include creating adjustments and invalidating adjustments. These functions enable temporary intraday increases or decreases to a client's assets (cash, equities, or options), allow clients to place orders first, and support subsequent invalidation of funds or securities.

Note: Assets adjusted temporarily are held in the client's operational account; they are available for use but are not withdrawable. Temporary adjustment transactions will not be displayed in the client interface or on settlement statements.

# Operational Instructions

## 1. Adjustment Inquiry

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Temporary Adjustment  &gt; Adjustment Inquiry</p>
</div>

Menu Function Description: This menu allows querying all temporary adjustment records and creating temporary adjustments.

1. The list page displays all types of temporary adjustments. You can filter by "Adjustment Type" to view records of different types; on the Adjustment Inquiry main page, click [Temporary Adjustment] to open the Create Temporary Adjustment modal.

<img src="/assets/Ln0qbBkPBoLm1CxhKMkjrXy9pzd.png" src-width="1280" src-height="640" align="center"/>

1. Adjustment information entry page (example: creating a new cash temporary adjustment, as shown below)
a. The business type is linked to the adjustment type; you only need to select the business type. A cash temporary adjustment defaults to an inbound posting, whereas a temporary cash reduction defaults to an outbound posting.
b. Temporary adjustments must have an expiration period; they will automatically become invalid upon expiration.

<img src="/assets/Zwqeb7EAvozh5txQemQjbrsBp6b.png" src-width="1280" src-height="744" align="center"/>

1. After completing the adjustment information, click [Confirm] to finish; the created record will appear on the list page. At the same time, an entry with the status "Adjusted" will be created on the "Adjustment Settlement" page.

<img src="/assets/DvmRbNYkOowVyJxKWxAjKYBgpme.png" src-width="3324" src-height="1920" align="center"/>

## 2. Adjustment Settlement

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Temporary Adjustment  &gt; Adjustment Settlement</p>
</div>

Menu Function Description: This menu supports invalidating temporary adjustments.

1. On the Adjustment Settlement main page, you can view all invalidated and pending-invalidation temporary adjustment records. You can filter by "Status" to view records in different states; click [Invalidate] and confirm a second time to complete the invalidation of the selected adjustment.

<img src="/assets/Um95bA7AYoZkvyxtaqRjPJW5pVh.png" src-width="1280" src-height="657" align="center"/>

