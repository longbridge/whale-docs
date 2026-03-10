---
title: System Introduction
slug: PTVVwpGBBiTXTrk0liTjzuXJpoh
sidebar_position: 2
---


# System Overview

# System Introduction

# Overview

Risk control management is primarily used to handle functions related to margin configuration, limit management, and Margin Call within securities business. The main modules involved are as follows:

<img src="/assets/Ac2ubnhVEoIolYxwn51jSEWTplg.png" src-width="2342" src-height="1556" align="center"/>

# Business Operations Management

# Credit Limits

The system currently provides two types of limits: financing limits and trading limits. Trading limits are granted to well‑cooperating institutional clients or cash accounts and may be used to trade when buying power is insufficient. Financing limits apply to margin accounts and are granted to users after a comprehensive assessment of the client's asset information; clients may utilize funds within the granted limit.

## Financing Credit

About automatic credit granting:

If a client opens a margin account and subsequently performs a transfer of positions or a deposit, the system will automatically grant the client a certain credit limit to enable margin trading. The system supports an automatic credit mechanism (transfer settlement / deposit settlement). The consolidated automatic credit flow is as follows:

<img src="/assets/RIO1bnu99o3biGxtRx8jpCRtpvf.png" src-width="953" src-height="733" align="center"/>

### Client Limits

Menu description: This menu is mainly used to query the credit limits of all credited clients; it also supports manually granting or adjusting credit limits upon client request.

Primary operation scenarios are as follows:

Adjusting client limits

1. The list displays all financing credit clients. Opening the adjustment modal from the list page allows adjustment of limits for already credited clients.

<img src="/assets/UgVlbpSHBoqvBMxAqhjjbhTapbh.png" src-width="3272" src-height="1394" align="center"/>

<img src="/assets/UPUJbOfXmoqb1kxEuilj7GArpId.png" src-width="3250" src-height="1754" align="center"/>

Adjustment page

- Field descriptions:

1. Confirm the "Adjusted Limit". Submission will create a corresponding record in the limit approval page for approval; see "Limit Approval (link missing)".

Creating a new credited client

1. If a client has no assets credited, an uncredited client may be granted a limit individually via the list page's "Create Credited Client" action.

<img src="/assets/XhDsbYf4WoM4hFxPP5ljpnJRpih.png" src-width="3250" src-height="1396" align="center"/>

1. Complete the required fields in the modal (if the client already exists in the credit list, the system will prompt during submission; client limits can be viewed in the main list).

<img src="/assets/IoH2bxydoomKu5xqttDjQYHipge.png" src-width="3252" src-height="1398" align="center"/>

1. To grant credit to multiple clients at once, use the "Bulk Add" operation at the top right of the list.

<img src="/assets/AhXyb579goL6BpxpdGljiTi1p9e.png" src-width="3262" src-height="1764" align="center"/>

1. Whether added individually or in bulk, submissions must be approved in the work order system. Only after approval can the client limits take effect.

Deleting credit limits for closed accounts

There may be cases where some client accounts have been closed but still count toward the company's total approved limit; such client limits can be manually deleted.

1. Filter credited clients by closed status.

<img src="/assets/P7KGbVmG3o1Y6PxSfGpjp72tpXg.png" src-width="3244" src-height="1392" align="center"/>

1. Select and delete credited clients whose accounts have been closed.

<img src="/assets/Ag4dbz11HoAL1IxGoeSjfEu3p2b.png" src-width="3170" src-height="730" align="center"/>

Setting company limits

1. Based on the consolidated client limits, if it is necessary to synchronously adjust company limits for overall control, access "Set Company Limits" from the top area of the page list to perform the operation.

<img src="/assets/H94ebrax8onPrxxkKpZjTP3JpOc.png" src-width="3256" src-height="1390" align="center"/>

1. Company limit settings: When a tenant goes live, the system initializes default limits. Tenants may later customize these limits according to business requirements; modify each dimension via the page "Edit" operation. Changes must be approved through the work order process to take effect.

<img src="/assets/T3WZbxRQLoei35xcJfcjNyompke.png" src-width="3276" src-height="1730" align="center"/>

Company limit settings page

- Field descriptions

### Limit Approval

Menu description: This menu is primarily used to approve credit limit requests, including adjustments initiated by the backend or by clients.

1. On the list page, use the "Submit for Approval" action to open the approval modal.

<img src="/assets/FUldbypnhoKEj7xE0vtjWOYvppg.png" src-width="3276" src-height="1216" align="center"/>

1. In the approval modal confirm the limit and add annotations. If the reviewer decides to reject the request, they may select "Reject" directly without submitting a work order.

<img src="/assets/KwjwboJN0oxOvHxQjW0j2ZAQpLg.png" src-width="3328" src-height="1688" align="center"/>

Limit approval confirmation page

- Field descriptions

1. After confirming the information, submit for approval. The approval will be processed in the work order system; only upon completion of that approval will the limit adjustment take effect.

Tips:

Work order approval flows can be configured based on limit ranges. The corresponding approval flow work order identifier is `credit.credit_adjust`.

### Client FPS

Menu description: This menu is used to query clients' FPS values for margin financing credit (the initial FPS configuration can be viewed under "Business Parameter Settings" - "Risk Control" - "Credit Client Parameters") and to configure custom FPS rules (you may adjust the global FPS baseline by adding or subtracting values across defined dimensions).

Configuring FPS rules

1. Click "Rule Configuration" on the page to open the rules page.

<img src="/assets/IpuabsyVSo00MLx272GjMS4ipnd.png" src-width="3288" src-height="796" align="center"/>

1. Rule configuration: Set threshold values across client dimensions to increase or decrease the FPS value; once confirmed, the rule takes effect.

<img src="/assets/LdsFbKVqFoHNTkxS9Mnj7BM8pUh.png" src-width="3302" src-height="1620" align="center"/>

### Credit Groups

Menu description: This menu is used to set up credit groups and manage group limits. Usage within a group must not exceed the group's limit. This feature is useful for grouping multiple accounts belonging to the same client (or related accounts such as spouses) under a shared group limit.

Main list page description

The list page allows viewing all credit groups and the total approved credit; each group's usage is also displayed. As follows:

1. Total approved credit: the sum of all group limits for existing credit groups.
2. Credit group details: supports editing group information and adding new accounts to the group; the group limit and usage are displayed, and if usage exceeds the group limit, the progress bar will show a red alert.
3. Group account details: displays each group account's financing limit and usage; supports adjusting account limits within the group and removing accounts from the group.

<img src="/assets/AbxhbvqaWolxp5xnrzVjkN7Wpqc.png" src-width="3814" src-height="1614" align="center"/>

Creating a credit group

1. Create a new credit group via the illustrated operation.

<img src="/assets/FS7bbStBDoJVrTxXsV6je3Zbp0b.png" src-width="3296" src-height="634" align="center"/>

1. Fill in the credit group information. Accounts are not required at creation time and can be added later via "Add Group Account." Submit to create the group.

<img src="/assets/MEnibrLNOoRZdVxfrYHjOq7tpLh.png" src-width="3252" src-height="1410" align="center"/>

1. If added group accounts already have limits, those limits will be automatically imported and may be adjusted.

<img src="/assets/RHE4bXg8jo3MM3xzy2XjKqytpBb.png" src-width="3276" src-height="1424" align="center"/>

1. After creation, group information may be edited, accounts may be added/removed, and account limits within the group may be adjusted.

<img src="/assets/TgV7bFAX6oq0tFxdUGDjyjaJpac.png" src-width="3110" src-height="554" align="center"/>

### Credit Snapshots

Menu description: This menu is used to query each historical credit record for all clients. It is useful for precisely locating specific limit change events.

<img src="/assets/UMy5bi2GfoaoElxZ4B1jykirpUf.png" src-width="3246" src-height="1664" align="center"/>

Credit snapshot query page

### Bulk Changes

Menu description: This menu is used to perform bulk adjustments to clients' margin financing limits, primarily for periodic limit inspections by risk control. Clients targeted for bulk changes must be existing credited clients listed on the "Credit Limits" page.

Operation flow:

1. Use "Import Credit" at the top right to initiate an import.

<img src="/assets/SN4EbDJCYo08lGxeVXMjom6SpPd.png" src-width="3234" src-height="1062" align="center"/>

Bulk change page

1. Import operation: complete the downloaded template according to its field requirements and upload the file; after confirming, a "Pending Confirmation" task will be created in the list page.

<img src="/assets/PN0vbH2QSoHhcBxkIGBjqxnJpyb.png" src-width="3218" src-height="1172" align="center"/>

1. For the list task, open "Details" to enter the secondary confirmation page for bulk client limit changes.

<img src="/assets/Hn0rb6WICohw0rxyXF1jtvnapOf.png" src-width="3282" src-height="522" align="center"/>

1. The "Details" list displays all submitted credit records for confirmation. Individual client limits can be edited via "Edit" or removed via "Delete" if changes are not required.

<img src="/assets/PMS8b3zU0oo9fPxgpBljxV9lpTd.png" src-width="3246" src-height="758" align="center"/>

1. After verification, click "Bulk Adjust" at the top right to complete the batch adjustment.

<img src="/assets/BNmFb97Reo7fZ8xvtwNjrPuTp3b.png" src-width="3352" src-height="774" align="center"/>

Bulk change batch detail page

## Client Financing

### Usage Details

Menu description: This menu displays all clients' financing details by currency for query purposes.

<img src="/assets/QIbVbWmDuoBLpBxbrjmjqGp1ped.png" src-width="3174" src-height="1136" align="center"/>

Financing usage details page

### Overlimit Details

Menu description: This menu displays details for all clients who have exceeded financing limits for query purposes.

<img src="/assets/GvywbhuaOoRRHQxz0vijtBhQpgT.png" src-width="3174" src-height="1256" align="center"/>

Overlimit financing page

## Trading Limits

### Client Trading Limits

Menu description: This menu is used to query all clients who have been granted trading limits and supports creating, modifying, and activating/deactivating limits. Trading limits are included in clients' buying power and will automatically expire upon reaching their end date.

Operation flow:

1. Use "Settings" to configure whether trading limits should automatically expire at Margin Call; automatic expiration is enabled by default and can be modified. Changes require work order approval to take effect.

<img src="/assets/Wx8BbMdmMo0KnaxTpotjOOPap2f.png" src-width="3296" src-height="1104" align="center"/>

1. Use "New" or "Bulk Create" to add trading limits for clients.

<img src="/assets/KRb3bZuJCojT61xIOpdjd5nJpNd.png" src-width="3346" src-height="694" align="center"/>

1. Configure the client trading limit, submit for approval per page requirements; submission records can be viewed in "Change Records". After work order approval, the record will be displayed in the "Client Trading Limits" list.
Note: 1. A client may have only one trading limit type. 2. If a client already has the same type of trading limit, the system will default to overwrite with the newly added limit.

<img src="/assets/LCLbbLIYqoexzKx2dpwjC1rZpxU.png" src-width="3346" src-height="1724" align="center"/>

1. Bulk create trading limits by downloading the template and completing it according to the template instructions, then uploading. The page will display the file parsing results. After work order approval, the records will be displayed in the "Client Trading Limits" list.

<img src="/assets/Zqq9beQSQobrQJxI4lPjDp5jpDb.png" src-width="3298" src-height="1652" align="center"/>

1. Use "Edit" from the list page to modify a client's trading limit. The operation is the same as "New".

<img src="/assets/TWnfbgNHoo59fGxtSMfjeCSPpJc.png" src-width="3254" src-height="1624" align="center"/>

1. For clients whose status is expired, modify the expiration date via "Edit" to reactivate the trading limit; to deactivate an active client's limit, use "Set to Expired" from the list.

<img src="/assets/NpfGbqr7doaKQTx1iX1jmIuypJg.png" src-width="3268" src-height="305" align="center"/>

### Change Records

Menu description: This menu allows users to view all change records for client trading limits.

Operation flow:

1. After creating or editing a "Client Trading Limit", the record will appear in the "Change Records" page; use "Work Order Details" to view the approval details for a given trading limit record.

<img src="/assets/HSJabeZh9olCnAxvj6VjxJRYpSh.png" src-width="3254" src-height="608" align="center"/>

## Currency Borrowing Reminder

Brokerage client accounts commonly use an aggregated buying power conversion mechanism to facilitate trading in non‑local currencies (for example, using HKD to trade USD‑denominated stocks). After a client executes such trades, the client's account may involve a currency borrowing position (the brokerage temporarily provides foreign currency to a foreign broker for trading). Subsequently the client needs to perform currency exchange operations. Therefore, preconfigured currency borrowing/exchange reminders can be incorporated into risk control management to notify clients to complete exchange tasks.

Business flow:

<img src="/assets/D1fYb6gUyomFnExecRCjvfUBpJq.png" src-width="2182" src-height="474" align="center"/>

### Reminder Query

Menu description: This menu can query all clients requiring reminders, supports configuration of borrowing reminder rules, and supports manual currency exchanges.

Operation flow:

1. Click "Exchange Rules" at the top right of the list to configure borrowing reminder rules.

<img src="/assets/JUvEbMblpoXH8Ox2BS0jQ3DrpKl.png" src-width="3296" src-height="1076" align="center"/>

1. Rule configuration: Single‑currency rules are optional; other fields are mandatory. Rules only execute when enabled.
    1. Mandatory fields for outstanding amounts and other currencies' withdrawable amounts default to the base currency; all currencies are converted to the base currency for calculation.
    2. A reminder triggers if either the single‑currency rule or the mandatory field rule is satisfied.
    3. Single‑currency rules may set different rules per currency; add and remove as needed.

<img src="/assets/HctZbkMJpopjOQxCtR6jmhNFpTe.png" src-width="3312" src-height="1716" align="center"/>

1. After configuring rules, enable and submit for work order review. Once approved, the system will execute the rule, retrieve clients matching the rule, and display results in the "Reminder Query" list. Additionally, the rule executes regularly on trading days and sends currency borrowing reminder messages to matching clients to prompt proactive exchanges. The page action "Fetch Exchange Users" refreshes the list and filters out clients that no longer meet the rule.

<img src="/assets/IOoNbloL7osjp8x61AzjROXup2f.png" src-width="3286" src-height="970" align="center"/>

1. After enabling the rule, clients can also view an "Auto Repayment" function in the mobile app and opt in. If a client enables Auto Repayment and triggers the rule, the system will perform automatic exchanges or background manual conversion operations as configured.

    <img src="/assets/HTKDbD99VoQi4Nxsz9WjA7FbpZd.png" src-width="1170" src-height="2532" align="center"/>
    
App navigation: "Me" - "Settings" - "Account Settings"
b. If "Auto Repayment" is enabled in the App, the "Auto Exchange" field displays as "Enabled" and supports the "Exchange" operation.

    <img src="/assets/J7N6bYykroODeBxpJMpjHVGKpKb.png" src-width="3216" src-height="682" align="center"/>
    1. App "Auto Repayment"

2. Exchange: Clients who enable Auto Repayment default to automatic system exchange; before the system executes automatic exchange, the page also supports manual exchange. The list "Details" action allows viewing real‑time client data, message history, and exchange records. The manual exchange modal shows the client's current cash situation and allows configuration of exchange amounts and currencies to confirm the exchange.

<img src="/assets/WuQJbSIB3o6XRJxGKyVj2FgbpBh.png" src-width="3274" src-height="1640" align="center"/>

<img src="/assets/C1QobRrL6oGTBQxu4WhjeOSnpdg.png" src-width="3222" src-height="1220" align="center"/>

1. Exchange result review: After manual/automatic exchange completes, if remaining assets still meet the rule conditions they will remain in the Reminder Query list; if they no longer meet the conditions they move to history, viewable under "History (link missing)". For exchange audit triggers or exchange failures, view exceptions on the "Exchange Exceptions" page (exchange audits require manual review under "Funds Management" - "Exchange" - "Client Exchange").

<img src="/assets/Oj1Cbt3oVolR7vxrz2MjCUjNpYd.png" src-width="3290" src-height="1072" align="center"/>

### History

Menu description: This menu is used to query historical clients who received reminders and related exchange details.

<img src="/assets/DUBxbVTzMogONJxi8cTjzRjOpGd.png" src-width="3198" src-height="1070" align="center"/>

Currency borrowing reminder history page

### Snapshots

Menu description: This menu is used to query snapshot values at a given time, including outstanding/conversion‑eligible amounts and cash/balance channel data.

<img src="/assets/AhrWbZxepoyFkZxyOjpjHA3ep9e.png" src-width="3314" src-height="1558" align="center"/>

Currency borrowing reminder snapshot query page

### Auto Repayment Enrollment Query

Menu description: This menu queries clients who have enrolled in Auto Repayment (all clients who have ever enabled the feature are queryable; the current status distinguishes whether it is currently enabled).

<img src="/assets/PpxWb1ODyowwnoxWtEDjEEo5pDg.png" src-width="3248" src-height="1642" align="center"/>

Auto Repayment enrollment records query

# Margin Call

When a client's net asset value falls below the maintenance margin level due to market fluctuations, the system will issue a Margin Call notice. The client must replenish funds or close positions within three trading days; otherwise the business has the right to liquidate positions on the client's behalf without prior notice.

Business flow:

<img src="/assets/T4TGbEgOdoZVyOxDW4BjJemDpod.png" src-width="2564" src-height="754" align="center"/>

## Risk Alerts

### Real‑time Alerts

Menu description: This menu supports real‑time margin alert monitoring.

1. The list displays all current alert client records. The left area will show green real‑time update text (reflecting the latest computed results). The top area aggregates the totals for current margin call amounts and long‑standing unsettled margin call amounts.

<img src="/assets/N6QHb08x0oWYPNxEXFJjEeLkpCb.png" src-width="3262" src-height="796" align="center"/>

Page basic field descriptions:

1. For monitored alert clients, select a record to perform follow‑up actions: send message // liquidate positions // set automatic liquidation.

<img src="/assets/K0pebFowmoigV6xxoYOjEUitpvg.png" src-width="3230" src-height="1145" align="center"/>

1. When performing batch liquidation, you may choose whether to liquidate specific securities. Batch liquidation requires the liquidation toggle to be enabled in Business Parameter Settings.

<img src="/assets/ZbGebmX69oV0fEx5FE1j7ZuipWh.png" src-width="3248" src-height="1294" align="center"/>

1. Configure automatic liquidation: define custom automatic liquidation timing; you may also adjust the deadlines for certain Margin Calls according to actual business needs.

<img src="/assets/WrgkbrqxWoU8I2xad5BjPJ6lp0c.png" src-width="3222" src-height="1306" align="center"/>

1. From a monitored alert record, click "Details" on the right side to view the client's fund summary, positions, and the list of securities currently subject to liquidation. The Details page supports "Liquidate" or "Send Message" operations.

<img src="/assets/AE7JbSa2Joap41x0Ho9jSF7ep3I.png" src-width="3158" src-height="506" align="center"/>

<img src="/assets/WX70bMZquoJmHOxFNcfjqQOMp0x.png" src-width="3252" src-height="1632" align="center"/>

1. Edit remarks on current alert records for subsequent handling or reference by others. If marked as an exception, view the record under "Exception Orders" on the list page.

<img src="/assets/Q1b3bfF8loHkTZxaFvZjm875pHh.png" src-width="3150" src-height="466" align="center"/>

<img src="/assets/EYG9b00UAoX7acxULQJjpYmmpbf.png" src-width="3156" src-height="1140" align="center"/>

### Intraday Financing Real‑time Alerts

Menu description: Functionality and operation logic are the same as "Real‑time Alerts," but the client scope is limited to intraday financing accounts.

<img src="/assets/HNoebEPBfo6ZHOxKLNljNtyLpig.png" src-width="3212" src-height="700" align="center"/>

### History

Menu description: After a margin call ends, it is recorded in History. This menu allows viewing detailed historical margin call orders.

1. Click "Details" on the list page to view detailed data before and after margin call triggering.

<img src="/assets/UHMGb76hOoYO6IxKgFojSLpkpyf.png" src-width="3300" src-height="736" align="center"/>

### Snapshots

Menu description: When a client triggers a margin call, it is necessary to retain the historical data snapshot at the moment of trigger for traceability; such snapshots can serve as reference for operations (RO) or compliance reviews and as evidence for regulatory reporting. Therefore, margin call history requires snapshot data in certain scenarios.

Scenarios include: triggering a margin call / triggering a force call / triggering notification / daily scheduled record / ending a margin call.

<img src="/assets/KgtbbgMTxolGtRxyyGNjCFN7p9g.png" src-width="3296" src-height="786" align="center"/>

### Short Position Overview (Securities Lending Positions)

Menu description: When an IB cannot borrow financing, advance notice is required for stock recall or forced liquidation; correspondingly we must notify users for forced liquidation. This menu supports viewing overall securities lending usage and performing liquidation operations.

1. View overall securities lending information on the list page.

<img src="/assets/QteCbwibdox5JGxR0rej9mnIpun.png" src-width="3220" src-height="786" align="center"/>

1. Click "Details" to view the clients corresponding to the shorted security.

<img src="/assets/BYorbjANloWQO0xxyGijtdAmp25.png" src-width="3084" src-height="522" align="center"/>

1. The Details page supports liquidation or sending a margin call message; operations are the same as in "Real‑time Alerts."

<img src="/assets/Eyz9burpboy2c6xAmXrjXniQpae.png" src-width="3030" src-height="522" align="center"/>

### Non‑performing Credit Handling

Menu description: This menu is primarily used to query data for clients with non‑performing credit.

<img src="/assets/RBCobJP3po8o64x8SsujoUfspbh.png" src-width="3270" src-height="1624" align="center"/>

## Stock Collections

### Covered Options Stock Collection

Menu description: This menu displays records where the underlying stock for covered options is insufficient and shares need to be collected.

1. The list displays all collection records.

<img src="/assets/DSO9bULghoGP6rxyBicjMSBipuc.png" src-width="3216" src-height="576" align="center"/>

1. Click "Details" to further view the client's margin call details and support liquidation operations on options.

<img src="/assets/KiQDb6BnroYYIIxhL8WjAt7Jplf.png" src-width="3262" src-height="1626" align="center"/>

### Short Stock Collection

Menu description: This menu displays records of short stocks that require collection (not updated in real time).

1. The list displays all collection records.

<img src="/assets/Dpw9bMWVjoULBKxaPypjp58NpUh.png" src-width="3234" src-height="720" align="center"/>

1. Click "Details" to further view the client's margin call details and support liquidation operations on short stocks.

<img src="/assets/K8nqb5UAmo1UXfxhLZKjsuzNpcb.png" src-width="3252" src-height="1608" align="center"/>

## Liquidation Orders

Menu description: This menu is used to view all liquidation records and, in the event of liquidation operation errors, to cancel orders.

<img src="/assets/SAQYbf5MRoUUUcxZJOJjddHOpSg.png" src-width="3312" src-height="856" align="center"/>

# Margin Requirements

The margin for equities is one of the risk control mechanisms used by brokers for HK/US stocks; it is used to calculate buying power, trigger margin calls, and other scenarios. Generally, stocks eligible for margin trading carry lower risk. This menu primarily provides margin configuration functionality.

## Stock Margin

### Long‑position Stock Margin

Menu description: This menu is mainly used to set margin ratios for long positions on stocks.

1. The list displays the current configuration of all stock margin settings.

<img src="/assets/DZlnbNSkFoe9ncxrrXrjiO0GpFh.png" src-width="2636" src-height="1020" align="center"/>

Long‑position stock margin main page

1. Use the "New" button to add a single stock margin ratio (note: if the stock already exists in the system, the data will be overwritten by the current setting).

<img src="/assets/Oop5bfXLtosTibxWmA2jQzf1p6b.png" src-width="2294" src-height="636" align="center"/>

<img src="/assets/ASolbwZAUocNk0xZbocjqrnxp5d.png" src-width="3322" src-height="1640" align="center"/>

1. Bulk set margin ratios by downloading the template, completing fields per instructions, and uploading the file.

<img src="/assets/V6lPbXS0Uo6LSpx3A9djBlljpQg.png" src-width="3200" src-height="1012" align="center"/>

1. Whether added individually or via bulk upload, a record will be generated in "Setting Records." See the "Setting Records (link missing)" menu.
2. To modify an existing stock margin ratio, use "Edit" from the list; to delete a stock margin setting, use "Delete."

<img src="/assets/G9nQbNZdeo4fryx1uhQjLuGDpkg.png" src-width="3058" src-height="428" align="center"/>

1. Stock status may change; use "Fetch Stock Status" at the top right of the list to refresh to the latest status.

<img src="/assets/Fu5hbSZk2o4p9bxSmRajXm1Qp7b.png" src-width="2278" src-height="534" align="center"/>

### Intraday Trading Real‑time Margin

Menu description: For intraday financing business, margin ratios for stocks that support intraday trading can be configured separately.

1. The list displays all margin ratio records for stocks that support intraday trading. The system automatically adjusts margin status based on trading sessions. Related rules are configurable via "Rule Settings" on this page.

<img src="/assets/Buxxb5vGXo0Y72xeIXujkyXoppe.png" src-width="2352" src-height="978" align="center"/>

1. Use "Add" and "Bulk Upload" to add intraday trading margin ratio settings individually or in bulk; operation flow is the same as "Stock Margin".

<img src="/assets/N3ZFb9QPcoJFOSxM8eJjoFAIpfc.png" src-width="2320" src-height="782" align="center"/>

1. Use "Edit" or "Delete" in the records' right‑side operation area.

<img src="/assets/NadEbgGOdoiXKix0mLLjigVdpsd.png" src-width="2294" src-height="784" align="center"/>

<img src="/assets/RfEKbzjrYoxSwvx6ANXjnRwJpUf.png" src-width="2380" src-height="1282" align="center"/>

Note: If a record's status is "Expired," the margin ratio defaults to 100%.

### Setting Records

Menu description: This menu is used to view setting records for Stock Margin and Intraday Trading Real‑time Margin, and to perform manual synchronization or cancel synchronization operations.

1. When a Stock Margin or Intraday Trading Real‑time Margin record is added or edited and submitted, a pending setting record is created. You may click "Cancel Sync" to cancel the setting (no record generated), or click "Sync" to mark the record as triggered, which will create a stock margin record on the main page (if the stock already exists the original record will be updated). Clicking "Cancel Sync" changes the record status to "Revoked" and the setting will not take effect. If no manual synchronization is performed, the system will apply the setting within the configured effective period.

<img src="/assets/HzSrb7L7FoWHzex5MPujF2ONpKf.png" src-width="2316" src-height="862" align="center"/>

### Short‑sell Margin

Menu description: For short‑sell business, margin ratios for stocks that support short selling can be configured separately.

1. The list displays all records of margin ratios for stocks that support short selling.

<img src="/assets/Fc4tb2dpgo7qHAxcADoj8JeOpnb.png" src-width="2352" src-height="860" align="center"/>

1. Supports bulk upload: download the template, complete it according to the file requirements, and upload.

<img src="/assets/Fnicb2vakow8uxxdGJJjy1ppp7b.png" src-width="2298" src-height="816" align="center"/>

1. Use "Edit" from the record area to modify a record.
Sellable status description: There are three statuses:
    - Sellable: sufficient securities lending inventory; the stock supports short selling.
    - Prohibited: manually set to prohibit short selling; the stock does not support securities lending.
    - System Auto‑prohibited: if a manual securities lending inventory threshold rule is set, when inventory meets the automatic closure rule the system will automatically prohibit short selling. From the client's perspective the stock supports securities lending but inventory is insufficient to execute short selling. If automatic recovery conditions are met, the system will restore "Sellable."

<img src="/assets/PBjZbU9y9ox3oBx1v5wjTFKtpEg.png" src-width="2298" src-height="1280" align="center"/>

Tips:

For securities lending inventory rules: the automatic recovery threshold must be greater than or equal to the automatic closure threshold.

1. Click "Change Records" on the page to view the historical change log for all short‑sell margin settings.

<img src="/assets/Aci0bXHn6oWqN7x6eFOj3xxspVf.png" src-width="2334" src-height="582" align="center"/>

## Client Margin

### Long‑position Stocks

Menu description: This menu allows configuring client‑specific margin ratios for long‑position stocks; when calculating margin, client‑specific settings take priority.

1. The list displays all client long‑position stock margin settings.

<img src="/assets/TqwmbLOYPowLxtxjjoljidrgpif.png" src-width="1280" src-height="492" align="center"/>

1. Create client margin: click "New" to open the creation modal. Client and stock selections support single client/stock and client group/stock group selection (client groups are configurable under "Risk Control Management" - "List Management" - "Client Groups"; stock groups are configurable under "Business Parameter Settings" - "Risk Control" - "Stock Groups"). Complete the configuration and submit to create.

<img src="/assets/LummboUn0o67nCx84oGjA9DCpQg.png" src-width="3060" src-height="1174" align="center"/>

<img src="/assets/Ra35bs9BnoiAJUxcVXgjnEAnptf.png" src-width="3226" src-height="1698" align="center"/>

1. You may also import client margin data via "Import Margin Data": download the template in the modal, complete it per instructions, and upload.

<img src="/assets/Bqdtbl2qbondL1xEsPCjr9OPpmg.png" src-width="3064" src-height="1298" align="center"/>

1. After file upload and confirmation, a "Pending Activation" record will be generated in the client margin list. To modify a margin ratio use "Edit"; to deactivate a client margin setting use "Set to Expired".

<img src="/assets/C2Xeb7LhQoi3ccxy6rdjomWGpIf.png" src-width="3060" src-height="1180" align="center"/>

1. To view the client's long‑position margin setting history, click "Change Records" on the page.

<img src="/assets/OjnQb3rzooTpKwxutXPj2YjZpBh.png" src-width="3072" src-height="1174" align="center"/>

### Short‑position Stocks

Client short‑position margin configuration logic is the same as for long‑position stocks, with the addition of "sellable status" and securities lending inventory rule configuration. Sellable status and inventory rule logic are the same as on the "Short‑sell Margin" page.

<img src="/assets/VaKyby4zpoIrSkxIpgjjys6Xpf3.png" src-width="2342" src-height="852" align="center"/>

# Options

## Option Exercise

Menu description: This menu is primarily used to view an overview of option exercise dates and related data, to inspect specific options, and to perform exercise operations.

1. The list displays an aggregated overview of option exercise date data.

<img src="/assets/MH2WbnFrcoAZGxxTpdVjAvBnp8f.png" src-width="3210" src-height="952" align="center"/>

1. Use "Details" to view the exercise status of all options.

<img src="/assets/TQMYbjd4loZb98x6yokjcOnvppg.png" src-width="3208" src-height="610" align="center"/>

<img src="/assets/Qzj4bED3foxvQ2xGel6jLjW6pWb.png" src-width="3220" src-height="772" align="center"/>

1. To change an option type, use the "Edit" modal in the respective tab.

<img src="/assets/I3gBb4ncooCssIxi9jFj9NHBpbd.png" src-width="3246" src-height="1082" align="center"/>

1. To exercise a specific option for all clients, use the "Exercise" action from the list.

<img src="/assets/PpJ3bvS7NoVVEYxyWEwjWw05ptd.png" src-width="3156" src-height="384" align="center"/>

1. To view all clients under a specific option and exercise on a per‑client basis, use the "View Details" page.

<img src="/assets/GGuCbFU1Iox4tux2UJOj4YoxpDb.png" src-width="3295" src-height="594" align="center"/>

<img src="/assets/SAUYbCwCBoPTEdxPPHWjok1tphd.png" src-width="3194" src-height="1152" align="center"/>

## Exercise Records

Menu description: This page is used to view records and details resulting from option expiration exercises or expirations where exercise was waived.

<img src="/assets/L76kb2H14oSjZhx5koIjqNLQprf.png" src-width="3218" src-height="1088" align="center"/>

## Near‑expiry Options

Menu description: This page is used to review the holding lists of clients with options approaching expiry.

<img src="/assets/D8iIbieo2o5DEuxJLbLj8yp8ptc.png" src-width="3158" src-height="1324" align="center"/>

# Trading Limits

This menu provides a comprehensive dimension for managing trading limits, including company‑level, client‑level, security‑level, and trader‑level controls.

- Restrict company‑wide daily limits, all clients' daily limits, and all securities' daily trading limits.
- Set trading limits for single or multiple clients.
- Set trading limits for single or multiple securities.
- Configure trader limits to prompt, require approval, or reject.
- Priority order: Client Limit / Security Limit / Trader Limit / Client Category Limit / Multi‑dimension Limit &gt; Global Limit.

## Global Limits

Menu description: This menu displays all limit codes. To create a new limit code (if current codes do not support the rule), contact the platform provider.

1. Use the "Enable" and "Disable" actions in the list to activate/deactivate corresponding limits.

<img src="/assets/TUB4bm394oPfhFxHhwVj0nQOpXe.png" src-width="3266" src-height="853" align="center"/>

1. You may also edit limit rules.

<img src="/assets/YIzibP2Oaojpg0xEhLoj5Dkmped.png" src-width="3276" src-height="1638" align="center"/>

Key fields:

Rule changes require work order approval to take effect.

## Client Limits

Menu description: Client limits support only limit codes of type "Client" in Global Limits and support single or bulk creation of client limit rules.

1. Create new client limit rules.

<img src="/assets/B9tHbPxe3ogjVrxHB1Wj7DvqpLh.png" src-width="3244" src-height="1082" align="center"/>

1. Client limit rule configuration: supports single client entry and bulk upload; the limit name is customizable. Rules require work order approval to take effect.

<img src="/assets/XxGbbc6FCo7EAcx2FCOjDoJCpKh.png" src-width="3270" src-height="1740" align="center"/>

Create new client limit

Note: Selecting a limit code will display the code's enable status, which reflects the Global Limits code status. Modifying the status here may also update the global code status.

1. Bulk create client limits by completing the template per instructions and uploading.

<img src="/assets/J3kJblcHfo3g3axDQ3zj42UHpGg.png" src-width="3282" src-height="1746" align="center"/>

1. To modify client limit rules or change rule status, use "Edit", "Set to Active", or "Set to Inactive" in the list operations. Edits require work order approval to take effect.

<img src="/assets/PsFubRHPtoP3kDxRUJYjGXQBpzb.png" src-width="3327" src-height="735" align="center"/>

## Security Limits

Menu description: Security limits support only limit codes of type "Security" in Global Limits and support single or bulk creation of security limit rules.

1. Create new security limit rules.

<img src="/assets/IKwhbKwLIohgLHxQp27jQmbmpYe.png" src-width="3252" src-height="1090" align="center"/>

1. Security limit rule configuration: supports single security code entry and bulk upload creation; the limit name is customizable. Rules require work order approval to take effect.

<img src="/assets/ZsZlbDsPloNlmexRuIljEFQwpze.png" src-width="3276" src-height="1750" align="center"/>

Note: Selecting a limit code shows the code's enable status reflecting the Global Limits code status. Modifying the status here may also update the global code status.

1. Bulk create security limits by completing the template per instructions and uploading.

<img src="/assets/F028bnCUgozwvFxQ2htjHAJ1p3L.png" src-width="3345" src-height="1816" align="center"/>

1. To modify security limit rules or change rule status, use "Edit", "Set to Active", or "Set to Inactive" in the list operations; edits require work order approval to take effect. Same as "Client Limits."

## Trader Limits

Menu description: Trader limits support only limit codes of type "Trader" in Global Limits.

1. Create new trader limit rules.

<img src="/assets/IzBKb3Ha1oraJ0xC77hjHJ7QphE.png" src-width="3256" src-height="1082" align="center"/>

1. Trader limit rule configuration: the limit name is customizable; rules require work order approval to take effect.

<img src="/assets/UH6gbHNBZofuGXxq3amjqUoCpCu.png" src-width="3298" src-height="1640" align="center"/>

Note: Selecting a limit code displays the code's enable status, mirroring the Global Limits code status. Modifying the status here may also update the global code status.

1. To modify trader limit rules or change rule status, use "Edit", "Set to Active", or "Set to Inactive"; edits require work order approval to take effect. Same as "Client Limits."

## Client Category Limits

Menu description: Client category limits support only limit codes of type "Client" in Global Limits.

1. Create client category limit rules.

<img src="/assets/FC88bzv7Oo7ZBixmXI6jkvkgpJb.png" src-width="3248" src-height="836" align="center"/>

1. Client category limit configuration: the limit name is customizable; rules require work order approval to take effect.

<img src="/assets/OoxGbEwB9oP90tx6nL6jpzWZpGe.png" src-width="3274" src-height="1604" align="center"/>

Note: Selecting a limit code displays the code's enable status reflecting the Global Limits code status. Modifying the status here may also update the global code status.

1. Bulk create security limits by completing the template per instructions and uploading.

<img src="/assets/HHdSbSHlYou7gNxJiUcj6Q5Cplh.png" src-width="3334" src-height="1829" align="center"/>

1. To modify client category limit rules or change rule status, use "Edit", "Set to Active", or "Set to Inactive" in the list operations; edits require work order approval to take effect. Same as "Client Limits."

## Multi‑dimension Limits

Menu description: Multi‑dimension limits support only limit codes of type "Multi‑dimension" in Global Limits.

1. Create new multi‑dimension limit rules.

<img src="/assets/YBFYbM6dcoBs9TxA059jem9cp3B.png" src-width="3224" src-height="558" align="center"/>

1. Multi‑dimension limit rule configuration: the limit name is customizable; rules require work order approval to take effect.

<img src="/assets/AEt4bAmbDoIpwaxZuo4jLWOLpAb.png" src-width="3254" src-height="1628" align="center"/>

Note: Selecting a limit code displays the code's enable status reflecting the Global Limits code status. Modifying the status here may also update the global code status.

1. To modify multi‑dimension limit rules or change rule status, use "Edit", "Set to Active", or "Set to Inactive"; edits require work order approval to take effect.

# List Management

## Blacklist

Menu description: The list page displays current blacklist entries. Blacklist application scenarios include credit granting and asset transfers. Clients with the business tag "Credit" will not receive automatic credit, and credit adjustment requests will require manual review; clients with the business tag "Asset Transfer" are not supported for buying power transfers.

1. List page

<img src="/assets/Ce5ebtcQyo32z6xr0BMjGi6FpAL.png" src-width="3084" src-height="1654" align="center"/>

1. Click "New" to add a blacklisted client.
    1. List dimension: supports securities account and client ID. Selecting securities account applies only to the specified account; selecting client ID applies to all accounts under that client.
    2. Business tags: support configuration of different blacklist business tags. The system supports "Credit" and "Asset Transfer" tags. You may select both tags simultaneously; records will be generated separately per business tag.

<img src="/assets/Wh6Fbw3vHokhs2xuSRBjJyMjple.png" src-width="3080" src-height="1668" align="center"/>

1. For large volumes of blacklist entries, use bulk upload per template instructions.

<img src="/assets/VH6ObraPpoBAJnxbammjfNuYpgc.png" src-width="3082" src-height="1640" align="center"/>

1. To temporarily disable a blacklist entry, select "Disable" in the Action column; to reenable, select "Enable". To permanently remove the entry, select "Delete."

<img src="/assets/QoRobn0LWousQNxbXtHjiqSJpFd.png" src-width="3072" src-height="1492" align="center"/>

## Client Groups

Menu description: This menu supports configuring client groups, which may be referenced in other business scenarios. Current applications include margin and reporting; to apply client groups elsewhere, contact support.

1. Create a client group: select the business type for which the group will be used, enter a custom group name, and submit to create.

<img src="/assets/V3KVbgmB1o3NCsxjqWKjPfDJp9f.png" src-width="3302" src-height="748" align="center"/>

<img src="/assets/VHiabOJ1lohYS8xT3rkjpHAjp0e.png" src-width="3284" src-height="1164" align="center"/>

1. Add accounts to the group: after creating a client group, a record is generated in the main list. Click "Details" to add accounts to the group via "New" or "Bulk Import."

<img src="/assets/Z9fwbxF5PoVnBkxO9zsjg73wpMf.png" src-width="3302" src-height="862" align="center"/>

<img src="/assets/S7ItbnANmoX49WxK5gOjojmDpgd.png" src-width="3296" src-height="638" align="center"/>

1. Manage group accounts: group accounts support "Delete."

<img src="/assets/XfgfbgaAPob1GLxca92juVUMptd.png" src-width="3278" src-height="568" align="center"/>

1. Manage client groups: groups support "Edit" and "Delete."

<img src="/assets/VhbkbZeySo6QJBx03IFjQUJopXb.png" src-width="3288" src-height="824" align="center"/>

# Stress Testing

Stress testing related to SFC margin guidelines and monitoring associated with stocks and clients.

## Margin Call Stress Testing

### Test Details

Menu description: This menu supports creating conditions to calculate Margin Call alerts / non‑frozen capital surpluses. Each simulation is assigned a task ID; upon expected completion, the task ID's execution status and calculation details may be queried.

1. Create a new simulation: the system supports three pre‑calculation modes—stock group / stock market / single stock—and supports applying exemption rules to a stress test batch. Choose the simulation type and calculation content and submit to start the simulation.

<img src="/assets/IoYfbFBlVoS3KCxNV1qjyLCxpQf.png" src-width="3180" src-height="1246" align="center"/>

Note: Configure related exemption rules under "System Settings" &gt; "Risk Control" &gt; "Risk Control Parameters."

1. When the calculation completes, click "Details" in the record's operation area to view the results.

<img src="/assets/TDJAbT1SVoKeVtxAn1ujqBa4p4f.png" src-width="3184" src-height="1260" align="center"/>

1. The "Details" page results can be used to evaluate whether the simulation meets expectations. If both margin call and non‑frozen capital surplus simulations are run, they will be presented in two separate lists.

<img src="/assets/LxJJbyPrEoMSxexbjUsj4FHRpYf.png" src-width="3238" src-height="1592" align="center"/>

### Custom Data

Menu description: This menu maintains stock margin ratios by importing margin ratio documents in batches.

1. Import margin ratios per the template; upon successful import they will be displayed in the list page.

<img src="/assets/VqFdb98ujo6EbQx6ba8jgzzEpKe.png" src-width="2914" src-height="1272" align="center"/>

## Index Management

### Index Levels

Menu description: This menu is used to maintain index levels referenced in brokerage margin guidelines.

1. Click "New" to create an index level.

<img src="/assets/MLL7bzKfEoICsuxLUl0jfxK8pQe.png" src-width="3182" src-height="908" align="center"/>

1. To modify an index level, use "Edit" on the list page; to deactivate or remove, use "Delete."

<img src="/assets/KYdwbsVgqoGLoRxgUvsjmyBcpJb.png" src-width="3166" src-height="696" align="center"/>

1. Initialize data by selecting "Initialize Data" on the left area to populate the system with preset index data (initializes nine SFC margin guideline indices and levels). Initialization does not affect user‑added index data.

### Stock Index

Menu description: This menu is used to maintain stock indices referenced in brokerage margin guidelines.

1. The page provides a "Fetch Base Data" function to synchronize market data automatically (this data is provided as the market data source for the Whale product).

<img src="/assets/W1lVbS6VtoITqDxyQXwj0LgNpDc.png" src-width="3192" src-height="890" align="center"/>

1. If the broker has a preferred market data source, bulk import is supported via "Bulk Import", with a template available for download.

<img src="/assets/Jf1JbxQFMoFyVvxz247jRpOIpLe.png" src-width="3196" src-height="866" align="center"/>

1. To modify an index code, use "Edit" from the list; to remove or deactivate, use "Delete."

<img src="/assets/EfXobrgrzohkfgxwjXujbjH7pVb.png" src-width="3246" src-height="578" align="center"/>

### Stock Level Weighting

Menu description: This menu displays stock level weightings and supports margin call simulation calculations.

1. Stock level weighting list.

<img src="/assets/Q4FRbtGPaoDOYGxLVCSjBnbbpYc.png" src-width="2856" src-height="784" align="center"/>

1. The default three index decline rates are precomputed on the page; you may modify them manually using the "Simulate Margin Call" function to trigger a simulation.

<img src="/assets/WUH0b0H9Go8PI3xYswxjnPbfpQf.png" src-width="2856" src-height="1032" align="center"/>

## Haircut Management

According to FRR reports and other financial reporting requirements, the discounted value of collateral must be calculated.

### Stock Haircut Management

Menu description: This menu is primarily used to manage stock haircuts.

1. The list displays all stocks for which haircuts have been configured.

<img src="/assets/BY4NbjuDjoIRl4xi780jXVWIpUb.png" src-width="3162" src-height="1132" align="center"/>

1. Click "Add Stock Haircut" to add a stock haircut record.

<img src="/assets/M6MMbZoKpoyZGexcH2NjpEC6pyb.png" src-width="3166" src-height="664" align="center"/>

1. Use "Edit" in the record area to modify a stock's haircut value.

<img src="/assets/Vsmnbxhjoog08RxKQrLjJLhBpsc.png" src-width="3182" src-height="690" align="center"/>

1. The page also supports bulk import of haircuts via "Bulk Import": download the template, enter data per format, and import.

<img src="/assets/PWYpbfSZaoN7qexRk9vjUipDpGb.png" src-width="3178" src-height="588" align="center"/>

### Index Haircut

Menu description: Index operations are the same as stock haircut operations but do not support bulk import.

<img src="/assets/RYOeb7J4eo8jc6xdpZmjC3j9pxd.png" src-width="3196" src-height="704" align="center"/>

### Haircut Modification Records

Menu description: This menu is used to query all haircut modification records.

<img src="/assets/IlM0bNIABoUpPTxDbYcjc9Wtpth.png" src-width="3158" src-height="974" align="center"/>

Haircut modification record list page

## Liquid Capital Shortfall

### Business Description

This feature simulates SFC requirements to perform stress testing on liquid capital in order to determine whether the Top 10 stock concentration meets regulatory requirements.

### Definitions

### Liquid Capital Shortfall

1. The list displays historical calculation tasks that have been created.

<img src="/assets/WEW5bnJUmooOoBxKPNXjMsWwpLb.png" src-width="3328" src-height="1256" align="center"/>

Historical task list

1. Click "New" to create a new calculation task; you will need to manually input liquid capital data.

<img src="/assets/ETaKbhmnPoG2w5xwibljv11bpaf.png" src-width="3296" src-height="1682" align="center"/>

Create a test task

1. After creation, click "Details" to view the calculation task.

<img src="/assets/MNQsbsaqyoYoabxearejTFM1pvg.png" src-width="3290" src-height="1020" align="center"/>

View calculation results

### Client Shortfall Details

1. Calculation tasks complete in about 1–5 minutes. Once complete, view the calculation results; the client shortfall details are presented first.

<img src="/assets/MNv2babpxoGMlqxA3gujwzh8pgc.png" src-width="3264" src-height="1762" align="center"/>

Shortfall details

1. Click "Details" to view the client's position details and the recognized asset values of holdings.

<img src="/assets/DLYrbbvXhojwFDx3G1Xjg922pCb.png" src-width="3286" src-height="1818" align="center"/>

Position details

### Top 10 Stocks

1. First part: LC data.

The system derives ELC‑related data (liquid capital surplus) from LC and RLC information provided by the finance department.

<img src="/assets/ZsKBbAOL6osXLWx11yrjxqfapQb.png" src-width="3286" src-height="1782" align="center"/>

LC data

1. Second part: Liquid capital shortfall

This data simulates shortfall results when collateral declines by x and compares whether a buffer remains.

Buffer = 50% of liquid capital surplus - liquid capital shortfall

<img src="/assets/VhwcbfHe1oBiymxf3Wsjuwtrpie.png" src-width="3306" src-height="1800" align="center"/>

Liquid capital shortfall

Stock decline x is a variable determined according to margin guideline rules, detailed as follows:

Calculate by market value and classify holdings by level to compute proportion; based on the composition of collateral securities, apply appropriate hypothetical stress tests. Calculations can be performed once after market close each trading day.

(a) If level‑1 collateral proportion exceeds 75% (by market value), the average price decline equals parameter a.

(b) If the combined proportion of level‑1 and level‑2 collateral exceeds 75% (by market value), the average price decline equals parameter b.

(c) If the combined proportion of level‑1 and level‑2 collateral is between 25% and 75% (by market value), the average price decline equals parameter c.

(d) If the combined proportion of level‑1 and level‑2 collateral is below 25% (by market value), the average price decline equals parameter d.

1. Third part: Liquid capital shortfall

This section simulates each collateral becoming non‑pledgeable and the impact on shortfall; it ranks the top 10 stocks by the magnitude of shortfall impact.

<img src="/assets/IcGSbZNchowAh0x2yTJjWdifpAc.png" src-width="3288" src-height="1800" align="center"/>

Top 10 stocks

### Position Details

Consolidate position details for all indebted clients as the data source for shortfall calculations.

<img src="/assets/RjhrbOODPoTRZrx2YcCjmQr1pgg.png" src-width="3300" src-height="1226" align="center"/>

Position details

