---
title: 2024-09-23 Release Notes
slug: KqqBwPIMKiz5hikm4qPc5G6BnVg
sidebar_position: 25
---


# Update Log — September 23, 2024

# 2024-09-23 Release Notes

# 🎉 New Features

- Automatic Repayment Activation Customer Query
    <img src="/assets/EgxMbp6rnoOEsQxOCKljNwGbpNd.png" src-width="3306" src-height="1480" align="center"/>
    - Added an Automatic Repayment Activation Customer Query page
    - Path: "Risk Management" - "Borrowing Reminder" - "Automatic Repayment Activation Query"
    - Permission: Automatic Repayment Activation Customer Query `margin_call.auto_convert_query`

- Message Records — Support for SMS/Email Resend
    <img src="/assets/CjeZbDmbiou9YFxrqdqjK7eZpJb.png" src-width="3206" src-height="1622" align="center"/>
    - The message records list now supports SMS/Email resend capability
    - Path: "Message Center" - "Message Records" - "Action - Resend"

- Support for Article Duplication; Article Edit/Delete/Hide/Show Require Approval
    <img src="/assets/NFblbqiYXoJUIzxC9arja4jYpxh.png" src-width="3272" src-height="1586" align="center"/>
    - In the Help Center, support article duplication; article edit/delete/hide/show actions require approval
    - Path: "Help Center" - "Articles" - "Action - Duplicate"

# 🪀 Improvements and Fixes

- Margin Change Approval and Interaction Optimization
    Main improvements:
    <img src="/assets/MxfubhNrYoGqvDxqt83jrDHjpHS.png" src-width="3330" src-height="1114" align="center"/>
    - Creation/editing/batch upload/deletion of margins, as well as intraday trading rule configuration, now support work order approval.
        The related approval flow identifiers are as follows:
        - Upload long-stock margin `risk.credit.upload_stock_margin_ratio`
        - Update long-stock margin `risk.credit.update_stock_margin_task`
        - Create long-stock margin `risk.credit.create_stock_margin_task`
        - Batch delete long-stock margins `risk.credit.batch_delete_stock_margin_ratio`
        - Delete long-stock margin `risk.credit.delete_stock_margin_ratio`
        - Upload short-selling stock margin `risk.credit.upload_short_sell_stock_margin_ratio`
        - Update short-selling stock margin ratios `risk.credit.update_short_sell_stock_margin_ratios`
        - Set intraday financing time configuration `risk.credit.set_day_trade_time_config`
        - Upload intraday real-time stock margin ratio `risk.credit.upload_intraday_stock_margin_ratio`
        - Create intraday real-time stock margin task `risk.credit.create_intraday_stock_margin_task`
        - Batch delete intraday real-time stock margin ratio `risk.credit.batch_delete_intraday_stock_margin_ratio`
        - Delete intraday real-time stock margin ratio `risk.credit.delete_intraday_stock_margin_ratio`
        - Update intraday real-time stock margin task `risk.credit.update_intraday_stock_margin_task`
    - Optimized the new long-stock margin creation interface by converting it to a sidebar

- Fund Settlement Supports Separate Verification and Confirmation for Subscriptions and Redemptions
    <img src="/assets/VVkgbH6heotY39xjHCRjIfZ8pmg.png" src-width="2788" src-height="1648" align="center"/>
    - Support separate verification and confirmation for subscriptions and redemptions within the fund settlement process
    - Path: "Fund Management" - "Public Funds" - "Fund Settlement" - "Action - Subscription Verification and Confirmation, Redemption Verification and Confirmation"

