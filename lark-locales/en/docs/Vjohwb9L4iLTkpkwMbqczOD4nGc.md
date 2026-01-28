---
title: 2025-06-03 Release Notes
slug: Vjohwb9L4iLTkpkwMbqczOD4nGc
sidebar_position: 12
version: stable
---


# 2025-06-03 Release Notes

# 🎉 New Features

- Support Reversal of All Types of Adjustments
    - Fully support the reversal function for all types of adjustments, including standard reversals and seamless reversals.
    - Add a "Revoke Batch ID" field in the list; to simplify the displayed list fields, you can use the "Columns" feature.
    - Path:  WBO - Account Assets - Adjustments - Adjustment

<img src="/assets/DHJnbwQvpoqVoZxo3cvjR4o7ppg.png" src-width="3082" src-height="1192" align="center"/>

- Implementation of Approval Process for Credit Group Limit Modifications
    - Adjustment of credit group limits and account limits within credit groups now requires approval process. The functionality entry points are illustrated in the screenshot. Approval flows can be customized based on different credit limit intervals.
    - Approval Flows:
        - credit.add_credit_groups_call_back
        - credit.change_account_credit_call_backcredit.adjust_account_credit_call_backcredit.change_group_credit_call_back
        - Path: WBO - Risk  Control Compliance - Credit Limit - Financing Limit - Credit Limit

<img src="/assets/VkL0bvSuEohf6SxLyWxjhsjYp0g.png" src-width="3210" src-height="814" align="center"/>

- Add(Bulk) Optimization for Trade Risk
    - Optimization of Add(Bulk) Function for Client Limit/Securities Limit/Dealer Limit. Replace it with a unified batch creation component to allow differentiated limit rules per batch.
    - Path: WBO - Risk  Control Compliance - Trade Risk - Client Limit/Securities Limit/Dealer Limit

<img src="/assets/K0N4bbddKoByo3xtGCvjNny4pFb.png" src-width="3248" src-height="822" align="center"/>

- Approval process for corporate action
    - Add approval function to the company's action module, where users can initiate approval at the following nodes after configuring relevant workflows:
        - Announcements execution
        - Revocation of Announcements
        - Tax refund execution
        - Revocation of tax refund

<img src="/assets/M59IbzwpIoarmux5oHYjsST6psc.png" src-width="3072" src-height="1768" align="center"/>

- Automatic creation of stock conversion

<img src="/assets/BegbbHnF8ozq2Yx8cFBjpwDHpJf.png" src-width="3082" src-height="1634" align="center"/>

# 🪀 Optimization And Bugfix

- Securities Deposit Service Optimization: New Physical Stock Handling Fee Entry Function
    - When performing the [Manual Warehousing] operation in the backend and selecting the Physical Stock category, the system will automatically pop up a handling fee edit box for operators to fill in the receivable handling fees according to actual business needs.
    - Path: WBO - Stock Management - Transfer In - Transfer In

<img src="/assets/CcicbTDbToo82dxEgDxjdCNfpce.png" src-width="3312" src-height="1772" align="center"/>

- The eDDA record adds a recycle bin function
    - The eDDA record adds a recycle bin function, and deleted eDDA records can be queried separately in this module.
    - Path: WBO - Cash Management -Deposit/Withdrawal Method - eDDA

<img src="/assets/SHMjbHXuRojsTgxImH4jD5VBpUg.png" src-width="3266" src-height="846" align="center"/>

- Optimization of the Client Limit Adjustment Page and Addition of Custom List Functionality
    - Add "Columns" Functionality on the Client Limit Page
    - Move the Limit Adjustment Feature from Main Page to Sidebar
    - Path: WBO - Risk  Control Compliance - Credit Limit - Financing Limit - Credit Limit

<img src="/assets/Vn0HbSEa4oajQwxI8ktjxa6OpTb.png" src-width="3186" src-height="746" align="center"/>

- Interactive Optimization for Withdrawal Application Customer Tagging
    - Tagging criteria expanded from a single "customer number" to multiple dimensions (e.g., securities account number, bank name, etc.), supporting batch addition of multiple tag groups simultaneously to improve operational efficiency.
    - A new historical tag record list is added to clearly display tagging time, operator, and tag content; supports on-demand individual or batch tag cancellation for flexible backtracking and correction.
    - Withdrawal applications that meet tagging criteria will automatically display tag notes on the details page, enhancing the relevance of business information and the transparency of audit evidence.
    - Path: Securities Backend - Funds Management - Withdrawal Application

- BE type of corporate action add a special email sending function
    - Send specific emails based on whether advance payment is required for dividend payout scenarios

<img src="/assets/FwSNbXnsQoXaMtxmuxMjmXoBpFg.png" src-width="3224" src-height="1766" align="center"/>

- Optimization of Customer Remittance Slip Information Display
    - Remove "Customer Name" from the list, and set the customer number as a clickable jump item.
    - Path: WBO - Cash Management - Currency Conversion - Exchange Order

<img src="/assets/YHJtbXmeOocn4Kxx9sTjP2vApCb.png" src-width="3322" src-height="1768" align="center"/>

