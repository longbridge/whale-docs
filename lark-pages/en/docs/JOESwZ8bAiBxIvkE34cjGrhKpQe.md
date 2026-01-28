---
title: 2024-09-23 Release Notes
slug: KqqBwPIMKiz5hikm4qPc5G6BnVg
sidebar_position: 22
---


# 2024-09-23 Release Notes

# 🎉 New Feature

- Query Clients with Automatic Repayment Enabled
    <img src="/assets/SC6Qb7k1zoxeC7xUFILjywpvpjm.png" src-width="3308" src-height="1460" align="center"/>
    - A new page has been added to query clients who have enabled automatic repayment.
    - Path: "Risk Control Compliance" -&gt; "Debit Notification" -&gt; "Auto Convert Query"
    - New permission for querying clients with automatic repayment enabled: `margin_call.auto_convert_query`

- Message Log - Resend SMS/Emails
    - Message Record List, supporting SMS/Email resending capability
    - You can now resend SMS or emails directly from the message log list.
    - Path: "Message Center" -&gt; "Message log" -&gt; "Action - Resend"

<img src="/assets/WTRMbPT96oHpjVxE5jSjVZbupVe.png" src-width="3076" src-height="1546" align="center"/>

- Topics Management: Copy Function and Approval Process
    - You can now copy topics in the Help Center, while all other actions (edit, delete, hide/show) require approval.
    - Path: "Help Center" -&gt; "Topics" - "Action - Copy"

<img src="/assets/KoW2bNL4BonfAFxkwCejIkSDpIf.png" src-width="3214" src-height="1540" align="center"/>

# 🪀 Optimization and Bugfix

- New Approval Process for Margin Ratio Changes and Interface Enhancements
    Key updates:
    <img src="/assets/KIy6byBrEoOPZ6xlNHZjfTCtpAh.png" src-width="3378" src-height="1168" align="center"/>
    - Ticket approvals are now supported for adding, editing, uploading (bulk), and deleting margin ratios, as well as for setting daytrade rules.
        Ticket flow keys are as follows:
        - Upload Stock Margin Ratio `risk.credit.upload_stock_margin_ratio`
        - Update Stock Margin Task `risk.credit.update_stock_margin_task`
        - Create Stock Margin Task `risk.credit.create_stock_margin_task`
        - Batch Delete Stock Margin Ratio `risk.credit.batch_delete_stock_margin_ratio`
        - Delete Stock Margin Ratio `risk.credit.delete_stock_margin_ratio`
        - Upload Short Sell Stock Margin Ratio `risk.credit.upload_short_sell_stock_margin_ratio`
        - Update Short Sell Stock Margin Ratio `risk.credit.update_short_sell_stock_margin_ratios`
        - Set Day Trade Time `risk.credit.set_day_trade_time_config`
        - Update Intraday Stock Margin Ratio `risk.credit.upload_intraday_stock_margin_ratio`
        - Create Intraday Stock Margin Task `risk.credit.create_intraday_stock_margin_task`
        - Batch Delete Intraday Stock Margin Ratio `risk.credit.batch_delete_intraday_stock_margin_ratio`
        - Delete Intraday Stock Margin Ratio `risk.credit.delete_intraday_stock_margin_ratio`
        - Update Intraday Stock Margin Task `risk.credit.update_intraday_stock_margin_task`
    - The interface for adding long margin ratios has been optimized with a new sidebar layout.

- Fund Clearing - Separate Buttons for Confirming Subscriptions and Redemptions
    - In the fund-clearing process, you can now confirm subscriptions and redemptions separately.
    - Path: "Fund Management" -&gt; "Fund" -&gt; "Fund Clearing" -&gt; "Action - Confirm Subscription / Confirm Redemption"

<img src="/assets/TU7SbZ9AMoVzXVxPnTGjaCkopod.png" src-width="2770" src-height="1654" align="center"/>

