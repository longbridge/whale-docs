---
title: 2024-10-21 Release Notes
slug: QbLQweIfTijPM9kI8QechrQgnpd
sidebar_position: 19
---


# 2024-10-21 Release Notes

# 🪀 Optimization and Bugfix

- Simplified Manual Stock Transfer-in/out Process with Sorting by Stock Symbol
    - Manual Stock Transfer-Ins no longer require manual review. They will be moved to "Pending Details" for processing immediately.
    - Manual Stock Transfer-Outs will be processed without manual review in "Pending Details" immediately once the risk control process is complete.
    - Manual Stock Transfers are now sorted by Stock Symbol in ascending order.

<img src="/assets/FN8Gbt7y4o1ThxxSTXgjbwsTpse.png" src-width="1352" src-height="1638" align="center"/>

- Enhanced Tabs for "Transfer-in Details" and "Transfer-out Details"
    - The requests in 'Transfer-In Details' and 'Transfer-Out Details' now include categories by status: Pending Applications, Pending Details, Completed, Failed & Deleted, and All.
    - Pending Applications: Refers to transfer-in/out requests awaiting manual review.
    - Pending Details: Refers to requests that have been approved and are awaiting further processing.

<img src="/assets/YOlDbn6fDoVT8Cx2BI0jTxLqpCb.png" src-width="2964" src-height="1614" align="center"/>

- New Feature: Reject Credit Limit Revision Requests Directly
    - You can now reject credit revision requests directly from the system.
    - Path: "Risk Control Compliance" -&gt; "Credit Limit" -&gt; "Financing Limit" -&gt; "Credit Limit Revision"

<img src="/assets/BdKmbfPqroQdv3xH0ajj9Qtbp2b.png" src-width="3322" src-height="1624" align="center"/>

