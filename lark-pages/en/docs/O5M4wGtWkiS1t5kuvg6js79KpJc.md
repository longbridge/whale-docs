---
title: Feature Overview
slug: Hw6fwuBDqi3lHnkhfCfcQuCon1c
sidebar_position: 3
---


# Feature Overview

# Updates

2022.06.20  Initial draft

2023.02.23  Added blacklist/whitelist restriction types and support for bulk import of clients and securities

2024.08.11  Updated operational instructions for each functional module

# User Guide

## 1. Trade Fill-In Records

Function Overview

A trade fill-in record generally refers to the supplementary recording of a trading order.

This feature is essential for ensuring the completeness and accuracy of trading data. Fill-in entries can be used to record trades that were not timely recorded in the system due to system failures, network issues, or other reasons. Through fill-ins, trade records can be updated so that all trades are correctly reflected in accounts and statements.

The Whale system currently supports two methods: manual single-entry input and batch file import. Markets supported for fill-in recording include Hong Kong stocks, US stocks, Shanghai & Shenzhen A-shares, and Singapore stocks.

<img src="/assets/VFCsb2zo3o6GjBxSSZFjhO3spbb.png" src-width="2868" src-height="1744" align="center"/>

Page Structure

The top area contains search and add-new controls.

The left side of the list contains checkboxes for multi-selection and batch cancel operations.

The central list displays fill-in records, including historical entries; the page supports pagination (30 records per page).

Operations and Features

1.1 Fill-In List

The list primarily displays fill-in record information. Certain fields (for example, order quantity) support ascending/descending sorting, and column positions can be rearranged according to user preferences.

<img src="/assets/N3LpbyFV8oCBJdxW15SjL6ZApYg.gif" src-width="1848" src-height="1122" align="center"/>

- Search criteria: securities account, stock, order time, operation time
- Special field explanations:
    - Order channel: the system currently supports multiple channels for order submission; you can select the order channel when entering a record, typically APP, WTT, API, etc.
    - Trading channel: displays the account’s trading and settlement channel; if an upstream broker is present, the corresponding upstream settlement channel and master account number are shown.
    - Operator: the person performing the fill-in, i.e., the trader executing the operation.

- Actions: Details, Cancel
    - Details: view fill-in order detail data
    - Cancel: cancel the current fill-in entry (only fill-ins created on the same day are eligible for cancellation)

- Batch operations: the header checkbox allows multiple records to be selected; selected records that are cancellable can be canceled in bulk;

1.2 Add Fill-In — Manual Entry

Click the “Add” button in the upper-right corner to open the fill-in order modal. The modal defaults to the “Manual Entry” view, where you can enter order and trade details manually.

<img src="/assets/R2n5bYv3goFcRqxq9lqjHfvxpfy.png" src-width="760" src-height="1682" align="center"/>

<img src="/assets/JLbLbNamsoVXfNxMjfVjiwI4pze.png" src-width="738" src-height="1668" align="center"/>

- Enter the order instruction data for the fill-in, which must include client information, stock, order channel, order price, quantity, and other basic order information.
- After confirming the order instruction data, enter the trade execution details in the lower module, including execution status, date, executed quantity, and price.
    - After entering execution price and quantity, click “Add” to record a trade detail. If the order has multiple executions, multiple trade details may be added. If a detail is added in error, it can be deleted by swiping back in the trade details table.

- After completing the order and trade information, click “Confirm” to submit (the button will be disabled if required fields are incomplete). Once data is correct and submitted, a fill-in record will be generated in the fill-in list.
- Order status options in the trade-entry area: currently only supports “Fully Executed,” “Partially Executed and Partially Canceled,” and “Canceled.” The selected fill-in status must match the order status in the order table. When “Fully Executed” is chosen, the system will validate that the entered executed quantity satisfies the full-execution requirement and will prompt: “Executed quantity does not match the order status; submission is not possible.”

1.3 Add Fill-In — File Import

Click the “Add” button in the upper-right corner to open the fill-in order modal, then switch at the top to “File Import” to perform batch file fill-ins.

<img src="/assets/LhCvbSN3boxSQwxN0EmjNxrDpcc.png" src-width="764" src-height="548" align="center"/>

<img src="/assets/WeQkbKwxVo5HMZxHRTOjxW44p3e.png" src-width="742" src-height="596" align="center"/>

- Uploaded fill-in files must follow the template rules. Before uploading, please download the template, fill in the data there, and then upload the completed file.
- Click “Upload File” to open the local file selector. After selecting the file to upload, the system will process the fill-in.
    - Currently only one file may be uploaded at a time, and a file may contain up to 1,000 records. If it exceeds 1,000 records, the system will prompt: “File exceeds the 1,000-record limit; please upload in batches.” If you see this prompt, split the data in the fill-in file into multiple files.

- Fill-in template file specification:

- Import result feedback for fill-ins:

<img src="/assets/LV48bX0IuowWnixjCLgjE0rCpib.png" src-width="806" src-height="318" align="center"/>

<img src="/assets/M4bYbFaN2oCsP3x6QgQjZQvFp6t.png" src-width="1600" src-height="734" align="center"/>

```text
- When file data contains exceptions, the system currently validates multiple dimensions such as client securities account, stock symbol, order type, order channel, order tag, and Remark. Records with exceptions will be blocked and can be inspected in detail via the “Import Feedback” window.
```

## 2. IPO Management

Function Overview

Traders can view IPO details through the “IPO List” page and submit IPO applications on behalf of clients. Online client subscription statuses can also be managed in the “Subscription List.”

<img src="/assets/B4fUbbnckor0ISxCcFNjHS7Tpob.png" src-width="2858" src-height="1736" align="center"/>

Page Structure

The top area includes tabs to switch between “IPO List” and “Subscription List.”

The right side of the list has fixed operation controls.

The central list shows IPO or client subscription data; the page supports pagination (30 records per page).

Operations and Features

2.1 IPO List

View basic IPO data, including IPO code, subscription start date, subscription end date, subscription price range, lot size, etc. Click “Details” to view IPO-specific data on the IPO details page. IPO data are managed and configured in the WBO backend; WTT only displays the backend-configured data and content.

<img src="/assets/JMjwbFUygoEcaCxMQtbjjh3dp6b.png" src-width="2734" src-height="1598" align="center"/>

2.2 IPO Details

The IPO details modal contains three sections: Basic Information, Financing Information, and Subscription Details. Use the function tabs on the timeline to switch between views.

<img src="/assets/ZYKVbKApmoTHMkxcNNBj38hQpdh.png" src-width="2752" src-height="1170" align="center"/>

- Basic Information: IPO basic data configured in the backend
- Financing Information: applicable financing multipliers and requirements for the IPO
- Subscription Details: information about clients who have subscribed to the IPO

2.3 IPO Subscription

Traders can assist clients with IPO subscriptions via WTT. Click the “Subscribe” button in the IPO list’s action column to open the IPO subscription modal. The subscription modal consists of three modules: funds confirmation, subscription information entry, and subscription result review.

<img src="/assets/OYGhbQ5nHoGkdrxkJAjjxHKmpne.png" src-width="2870" src-height="1730" align="center"/>

- Enter the subscription account; you can search accounts to select the client to subscribe on behalf of.
- Funds information: after selecting a client, the client’s buying power and cash balance will be displayed. Traders can use this data to judge whether the account is suitable for subscription.
- Subscription operation: enter the quantity and method for the client’s subscription and optionally select and apply vouchers for the client.
- Subscription review: after confirming the subscription information is accurate, click “Confirm” at the bottom to submit. After submission, the IPO subscription is completed.

2.4 Subscription List

View client subscription data (including subscriptions submitted via the client App/PC and trades submitted by traders via WTT), and perform order modification or cancellation from this list.

<img src="/assets/D8bCb7yOfo1KS2xTEwDjsSYVp0f.png" src-width="2856" src-height="1722" align="center"/>

- Search functions: currently supports search by client and order status only.
    - To view subscriptions for a specific IPO, go to “IPO List” → “Details” → “Subscription Details.”

- List data: displays basic subscription information, including client account, subscription amount, share quantity, etc.
- Action column: supports Modify Order, Cancel Order, Re-subscribe, and Details operations.
    - Modify / Cancel: traders can modify or cancel subscriptions for high-risk clients.
    - Re-subscribe: if a historical client subscription was canceled but the IPO is still in the subscription period, this action allows a second subscription.
    - Details: view subscription details for the client.

## 3. Securities Restrictions

Function Overview

Blacklist / Whitelist: set blacklists to restrict trading of specific securities. When restricted, clients will receive interception prompts when submitting trades. If a blacklist is applied in bulk but specific users need trading access for certain securities, use the whitelist function to grant permissions to those users.

Risk Restrictions: apply trading restrictions to VA-ETFs using three dimensions: PI certification, VA-ETF risk questionnaire, and VA-ETF risk prompt.

<img src="/assets/WyCTbXrqUohRUOxa5ISjZj8ippf.png" src-width="2852" src-height="1736" align="center"/>

<img src="/assets/HeaUbimthoScu7xpDJwjLrpZpD6.png" src-width="2870" src-height="1736" align="center"/>

Page Structure

The top area includes tabs to switch between “Blacklist/Whitelist” and “Risk Restrictions.”

The right side of the list has fixed operation controls.

The central list shows the set blacklist/whitelist or risk restriction conditions; the page supports pagination (30 records per page).

Operations and Features

3.1 Add Blacklist/Whitelist Condition

Click the “Add” button at the top-right of the list to open the “Add Trading Restriction” modal, where you can set trading restrictions for securities and accounts. The system currently supports two setup methods: manual restriction and securities import.

- Manual restriction: manually add a security restriction condition; once added and submitted, the condition becomes effective.
- Securities import: bulk import securities to set trading restrictions; currently supports restrictions applied to all clients only.

<img src="/assets/FTlJbAI4AocPmrxHBkWjIYiGpLe.png" src-width="746" src-height="1666" align="center"/>

<img src="/assets/Q59ibjXa8o5PGvxExkUjuFD2phc.png" src-width="752" src-height="1672" align="center"/>

- Field explanations:
    - Restriction type: Blacklist, Whitelist
    - Market: All markets, Hong Kong, US, Shanghai & Shenzhen, Singapore
    - Trading instrument: All instruments, Stocks/ETFs, Warrants, Options
    - Stock: enter the stock code to restrict — only a single stock is supported here
    - Restricted trading directions: Buy Open, Sell Close, Sell Open, Buy Close — multiple selections supported; more than one direction can be restricted simultaneously
    - Client association method: Manual association, Bulk import, Associate by region
        - Manual association: select client accounts manually in the “Associated Clients” field below to add restrictions
        - Bulk import: upload a file of client accounts to be restricted. When switching to this method, an “Import Clients” field appears below for file upload — follow the template; we recommend downloading the template on first use.
        - Associate by region: after selecting this method, restrict clients by region. After you set the “Associated Regions” field and submit, the system will determine interception by checking “Country of Residence → ID Issuing Country → Nationality” sequentially — multiple regions can be selected.
    - Remark: text only; up to 30 characters.
    - Import securities: upload a file with securities codes in the format “symbol.market”, e.g., 00700.HK, BABA.US — follow the template; we recommend downloading the template on first use.

- Relational rules and notes:
    <img src="/assets/EAGxbvxxXonCTfxqlpmj8KuGpG8.png" src-width="748" src-height="744" align="center"/>
    - Market, trading instrument, and stock are interrelated. For example, if Hong Kong market is selected, Options will not be presented as an instrument option.
    - If “All markets” is selected, the stock input box does not permit entering a stock. Note: because the selection imposes an all-market restriction, any stock entries will not take effect.
        - To restrict all markets and instruments: select Market = All, Instrument = All, leave the stock field blank.
        - To restrict a single market/instrument: select the market to restrict and select the appropriate instrument type; leave the stock field blank.
    - For US options restrictions, the system will default to restricting all options under the entered stock code. For example, setting a US options blacklist with BABA.US entered in the stock field means all options under BABA.US are restricted for Buy Open operations (see example).

- Blacklist/Whitelist interception result prompt: after submission, blacklists may take 1–2 minutes to become effective. Once effective, if a client attempts to trade a restricted security, their trading terminal will display an interception prompt.
    <img src="/assets/F2lLbVfpuoJOCXxBo1ljyTRDpVr.png" src-width="574" src-height="118" align="center"/>
    - For example, if Buy Open is disabled, the client/trader will see: “Order failed: this security does not support Buy Open.”

3.2 Blacklist/Whitelist List Operations

The blacklist/whitelist list supports Edit, Delete, Associate Clients, and Bulk Delete. Edit and Delete operate at the stock-condition level, while Associate Clients adjusts the client scope for a given restriction condition.

<img src="/assets/PCADbGnCZoUSCJxp3BJjAb7apde.png" src-width="2870" src-height="1744" align="center"/>

<img src="/assets/J8CXbSVypodgCNxnqe6jWwfnpng.png" src-width="746" src-height="696" align="center"/>

<img src="/assets/QDQTbVOrFo9CjFx1r6Dj5d5vpMe.png" src-width="758" src-height="992" align="center"/>

- Checkbox bulk delete: suitable for deleting a small number of selected restriction conditions via checkboxes.
- “Bulk Delete” button in the upper-right: suitable for large-scale global deletions. Use the “Bulk Delete” modal to manually add restriction conditions to delete, then import the stock codes to be removed — matching restriction conditions will be deleted in bulk.
- Action column:
    - Edit: only supports editing restricted trading directions and remarks. Other restriction fields (restriction type, market, instrument, stock) are not editable.
    - Delete: deletes only the selected restriction condition.
    - Associate Clients:
        - If the condition is associated with all clients, clicking this action will display a prompt stating “Associated with all clients,” and client association editing is not permitted.
        - If associated with a subset of clients, open the “Associate Clients” modal to add or remove associated clients (bulk operations are not supported in this modal).

<img src="/assets/FwDpblItNoRbi2xHS9rjBQmrp4c.png" src-width="698" src-height="314" align="center"/>

<img src="/assets/WmdHbWYo9opmG3xT0yYjbTeKp7b.png" src-width="2288" src-height="1006" align="center"/>

3.3 Risk Restriction Features

<img src="/assets/REQPbPqoEoXvmHxZvHijywftprc.png" src-width="2864" src-height="1740" align="center"/>

- Use the tabs to restrict VA-ETF risk controls by three dimensions: PI Certification, VA-ETF Risk Questionnaire, VA-ETF Risk Prompt.
    - PI Certification: checking this means the security requires PI certification before trading is allowed.
    - VA-ETF Risk Questionnaire: checking this requires completion of the question set certification; users who have not completed it will be directed to the questionnaire flow.
    - VA-ETF Risk Prompt: checking this requires terminal-side risk acknowledgment. Users who have not passed the VA-ETF risk assessment will see a risk disclosure on their first trade.

- The VA-ETF Risk Questionnaire and VA-ETF Risk Prompt are mutually exclusive; they cannot be selected simultaneously.
- Other restriction rules follow the same logic as blacklist rules; refer to section 3.1 for operational details.

## 4. Trade Allocation & Transfer

Function Overview

The Trade Allocation page supports order allocation and order transfer operations. This feature addresses client mis-entries and related issues. Both Ordinary Orders and Institution Orders support allocation, but at present only Institution Orders support order transfers.

<img src="/assets/GOIQbiVujoyN4fxHZUFjgvwqp4e.png" src-width="2874" src-height="1736" align="center"/>

<img src="/assets/TM5cbIeMYoeYa2xCeInjIiPiptb.png" src-width="2870" src-height="1732" align="center"/>

Page Structure

The top area contains tabs to switch between “Trade Allocation” and “Allocated Orders.”

The right side of the list has fixed operation controls.

The central list displays allocation / allocated order data; the page supports pagination (30 records per page).

Operations and Features

4.1 Trade Allocation Page Overview

The Trade Allocation page is divided into two sections. The upper half displays trade order information, including Ordinary Orders and Institution Orders, where allocation and transfer actions may be performed. The lower half displays allocation, transfer, and sub-order data related to the selected trade order; a specific upper-order must be selected to display lower-order data.

- The Trade Allocation page supports two order types: Ordinary Orders and Institution Orders.
    - Ordinary Orders: allocation only. You may allocate to any receiving account. After allocation, the original order will be canceled and a new Ordinary Order will be generated under the receiving account.
    - Institution Orders: support allocation and transfer. Allocation is allowed only to sub-accounts under the trading account; successful allocation generates an allocation record and does not create an actual order. Transfer is allowed only to other master accounts; a successful transfer generates a new Institution Order that can be allocated or transferred again.

- Allocation list details:
    - Base list fields derive from the Ordinary Order or Institution Order components.
    - Special field explanations:
        - Executed average price = “today’s executed average price” from the Institution Order
        - Executed quantity = “today’s executed quantity” from the Institution Order
        - Pending quantity = the quantity available for allocation/transfer for the current Institution Order, i.e., today’s executed quantity − already allocated quantity − already transferred quantity
        - Operation status: Unallocated, Allocated, Partially Allocated or Transferred
        - Transfer approval: Pending, Approved, Rejected (— indicates no approval submission)

- List operations:
    - Checkbox: multi-select Institution Orders to perform combined allocation. Combined allocation is allowed only when the orders have the same account, same stock, and same direction.
    - Allocate: perform trade allocation and open the allocation modal.
        - When an order has a transfer approval pending or is fully allocated, the Allocate button will be disabled.
    - Transfer: perform trade transfer and open the transfer modal.
        - When an order has a transfer approval pending or is fully allocated, the Transfer button will be disabled.

- Allocation groups: you can preset allocation groups before allocation. On the allocation page, you may select a preset allocation group to speed up allocation operations.

<img src="/assets/Teyib6mTuoPY7KxRirrjtjlzpfS.png" src-width="2876" src-height="1736" align="center"/>

<img src="/assets/ScL9bvlUIoNIjkxfWuwjFavvpNe.png" src-width="1060" src-height="1700" align="center"/>

```text
- Add Group: enter group name, allocation method, accounts to receive allocation, and allocation ratios.
    - Group name: appears in the allocation group list and will be used to identify the group during allocation—choose a clear, descriptive name.
    - Allocation method: preset by Proportion or by Quantity.
    - Accounts to receive allocation: select client accounts for the allocation group.
        - If an account is added by mistake, remove it using the red icon.
        - Click “Add accounts to receive allocation” to add more accounts.
    - Allocation ratio: required when Proportion is selected; the sum of ratios must not exceed 100%.
    - Allocation quantity: required when Quantity is selected; quantities are typically set according to custom needs.
```

4.2 Ordinary Orders — Trade Allocation

When operating on Ordinary Orders, set the order type filter at the top to “Ordinary Orders.” The action column supports only “Allocate.”

<img src="/assets/Q39xb3OAko4wblxeUs8j6kKxpab.png" src-width="2864" src-height="1734" align="center"/>

<img src="/assets/XipjbyqHsopN94xwmdkj9C96pRe.png" src-width="2866" src-height="1742" align="center"/>

- Allocation modal:
    - Ordinary Orders support two allocation modes: Order Allocation and Detail Allocation.
        - Order Allocation: allocate at the Order level; the entire order is allocated as a single unit regardless of its trade detail composition. Order allocation is limited to sub-accounts under the current account.
        - Detail Allocation: allocate by Trade Done entries under the Order. To fully allocate all details, multiple operations may be required. Detail Allocation allows Trade Done entries to be allocated to multiple receiving accounts (no master-subaccount relationship required).
    - Allocation order: defaults to the selected order. If in Detail Allocation mode, select a specific order detail from a dropdown to allocate.
    - Maximum allocatable quantity: equals the pending quantity for the selected order. For combined allocation, it equals the sum of pending quantities of the selected orders.
    - Allocation group: select a preset allocation group to quickly assign receiving accounts.
    - Allocation method: supports Quantity and Proportion.
        - Quantity allocation: default mode. Manually enter the quantity for each receiving sub-account; the total must not exceed the maximum allocatable quantity.
        - Proportion allocation: manually enter the proportion for each receiving sub-account; the system will calculate quantities based on proportions and the allocatable quantity. Final results are rounded to whole shares, which may cause residual stock differences that must be adjusted manually on the preview page. The sum of proportions must not exceed 100%.
    - Allocation price: defaults to the order’s execution price and is not editable.
    - Receiving accounts: choose the accounts that will receive allocations.
    - Allocation quantity / proportion: the input fields shown will depend on the selected allocation method.

4.3 Institution Orders — Trade Allocation & Transfer

Institution Orders support allocation and transfer on this page. Set the order type filter at the top to “Institution Orders.” The action column supports “Allocate” and “Transfer.” When the pending quantity is 0, action buttons are disabled.

<img src="/assets/VIeDbPeawoCZz6x5lFtjs7lopBb.png" src-width="2866" src-height="1740" align="center"/>

<img src="/assets/QrmLbhLudo3WbmxAuiRjevZmpub.png" src-width="2864" src-height="1740" align="center"/>

<img src="/assets/XWMzbJEnxonznSxA359jw9YVppg.png" src-width="2874" src-height="1722" align="center"/>

- Allocation modal:
    - Allocation mode: Institution Orders support only “Order Allocation.”
    - Allocation order: displays the selected order data (master account / stock name / today’s executed quantity @ today’s executed average price).
        - If multiple orders are combined via checkboxes, this area will list the selected Institution Orders.
    - Maximum allocatable quantity, allocation group, allocation method, receiving accounts, allocation quantity/proportion: follow the same rules as Ordinary Orders.
    - Allocation price: defaults to the Institution Order’s executed average price. If combining multiple Institution Orders, the executed average price will be computed as: sum(institution order executed amount) / sum(institution order executed quantity). The result is rounded to four decimal places using standard rounding.

- Transfer modal:
    - Transfer order: shows the selected Institution Order (master account / stock name / today’s executed quantity @ today’s executed average price).
    - Transfer account: select the target account for transfer; only master accounts are eligible.
    - Transfer quantity: enter the quantity to transfer; the maximum transfer quantity is the current order’s pending quantity.

4.4 Allocation Preview Modal

<img src="/assets/EEShbmjOcoNehTxVWysjE8espEd.png" src-width="942" src-height="698" align="center"/>

<img src="/assets/EEzAblW6Po4UyOxsNryjAlhCpGh.png" src-width="940" src-height="514" align="center"/>

- Allocation preview:
    - Displays the basic information for the allocation, including allocation mode, original Institution Order, and allocation details.
    - If multiple receiving accounts are present, you can scroll the list to view them.
    - Review entered allocation base information as well as receiving accounts and allocated quantities.
    - Shows the actual allocated quantity and remaining allocatable quantity. Remaining allocatable quantity = allocatable quantity − already allocated quantity.

- Transfer preview:
    - Displays basic information for the transfer order.
    - Shows the target account and transfer quantity information.

4.5 Allocated Orders

This page displays orders produced by trade allocation operations and supports actions such as sending trade confirmations, modifying commission, previewing confirmation documents, viewing order details, and canceling allocations.

<img src="/assets/Rf4nbNEnLo0ezdxdb1NjfjbvpAh.png" src-width="2858" src-height="1740" align="center"/>

List Details

- The list fields are derived from allocation; base attributes such as stock and direction remain consistent with the original Institution Order data prior to allocation.
- Special field explanations:
    - Allocation status: Success, Failure, Canceled
    - Commission modification: Not Submitted, Pending Approval, Modification Failed, Modification Successful
    - Send status: Not Sent, Sent (whether the trade confirmation has been sent)
    - Remarks: if allocation failed, the failure reason is displayed in this column

List Operations

- Send trade confirmation
    - Use the checkboxes on the left to select allocated orders for which to send trade confirmations. After selection, a “Send Trade Confirmation” button appears at the bottom and can be used for batch sending.
    - If an allocated order is under approval or has been canceled, sending a trade confirmation is not permitted; the system will block the submission and provide a prompt with the reason.
    - You can inspect the current send node and status for trade confirmations in the “Send Status” column.

<img src="/assets/TwnYb0PfVoa5HvxOk8OjyNH8pJf.png" src-width="2862" src-height="1734" align="center"/>

- Modify commission
    - The “Actions” column on the right supports “Modify Commission,” which opens a modal to change commission and settlement date for the selected allocated order.
    - Confirmed modifications will initiate an approval process submitted to the BO backend, and the commission modification status can be viewed in the “Commission Modification” column.
    - Modified values become effective and displayed after approval.
    - If an order is in commission approval, has canceled allocation, or is not an order-based allocation, commission modification is not permitted (the button will be disabled).

<img src="/assets/WvIgbief0oZMJYxDgxwjBG62p6d.png" src-width="2866" src-height="1738" align="center"/>

- Preview: confirmation preview
    - Preview the trade confirmation for the account allocation order; clicking will open a web view.

- Details: view order details
    - View allocation order details, including original order information and allocation breakdown. Details are view-only; no further operations are available on this modal.

<img src="/assets/OVbXbHG7voEQBLxdTN3jXXt1p4e.png" src-width="2864" src-height="1734" align="center"/>

- Cancel: cancel allocation
    - When canceling an allocation, all orders associated with the same source order will be canceled together. The cancellation confirmation modal shows all related allocated orders.
    - After clicking “Confirm,” the listed orders will be canceled and the canceled allocation quantities will be rolled back to the original account.
    - Only allocations performed on the same day can be canceled; historical allocated orders cannot be canceled because they have already been settled. Attempting to cancel historical orders will prompt: “Allocation cancellation failed.”

<img src="/assets/JGZzbtGOPof8v4x7IOjjh1TOpfd.png" src-width="1102" src-height="588" align="center"/>

## 5. Order Approval

Function Overview

Orders that trigger risk-control approval conditions set in the WBO backend will enter the “Order Approval” page for review. After approval, the order will be submitted for trade instruction reporting; until approval is completed, the orders are stored in the Whale system and are not reported for execution.

Submitting new orders or modifying orders may trigger risk-control approval; canceling orders does not trigger approval.

<img src="/assets/RK9Wb9Xkko51DqxLQEmjheaXpbh.png" src-width="2868" src-height="1732" align="center"/>

Page Structure

The top of the list contains search filters.

The right side of the list has fixed operation controls.

The central list displays orders that have triggered risk-control approval; the page supports pagination (30 records per page).

Operations and Features

5.1 Order Approval List Page

Orders that trigger approval are aggregated in this list for review. To perform approval operations you must have Order Approval page management permissions (refer to the “Quick Start” documentation for permissions).

<img src="/assets/ClVrbhaTNoyOGTxxDIjjEEcjp1f.png" src-width="1280" src-height="772" align="center"/>

- Search criteria: order number, client, market, stock, approval status, order time, operation time
    - Order number refers to the order instruction number and matches the order component in the trading panel. Use order number for precise queries to check approval status.
    - Approval status: Pending Approval, Approved, Rejected, Expired, Canceled
        <img src="/assets/SWKYbHh2soPRXZx24d6j7kZ3p7g.png" src-width="2716" src-height="742" align="center"/>
        - (Pending Approval, Approved, Rejected are the approval states. Prior to approval, an order may be canceled or may expire, in which case its state changes automatically; no further approval is required.)
        - When an order triggers approval, the trading panel order component will display “Pending Approval” in the approval status field, allowing front-line traders to identify the status at a glance (only new orders and modifications trigger approval; cancellations do not).
    - Order time: the time the order was submitted, consistent with the trading panel order component.
    - Operation time: the time the risk officer or trader performed the approval action.

- List fields: display basic order and approval information. For orders awaiting approval, the approval status is “Pending Approval” and operator and operation time are empty.
- Actions: Bulk Approval, Single Approval, Details
    - Bulk Approval: use the list checkboxes to select multiple orders, then bulk Approve or Reject. This is a quick method but does not show the specific risk restrictions that triggered each order.
    - Single Approval: use the action column on the right to open the approval modal for targeted review.
    - Details: view detailed information.

5.2 Approval Modal

<img src="/assets/YW7NbX5zQoRTbcxn9eCjB8GdpSc.png" src-width="2864" src-height="1096" align="center"/>

<img src="/assets/JHd8bBshhoeVcLxrSl4jqFbPpah.png" src-width="2866" src-height="1740" align="center"/>

<img src="/assets/NeKxbyU7vojVzIxQfvpjGRVrpKe.png" src-width="2868" src-height="1736" align="center"/>

- Single Approval:
    - When the approval status is “Pending Approval,” the “Approve” action is available. For other statuses, only order approval details can be viewed.
    - The approval modal includes three main sections: Order Basic Information, Triggering Restriction Types, and Approval Action.
        - Order Basic Information: includes client information, order direction, type, price, and quantity.
        - Triggering Restriction Types: displays the specific risk-control restriction types that triggered the approval; format shown as “Risk Code | Risk Restriction Name.”
        - Approval Action: choose “Approve” or “Reject” and enter the approval reason. Whether approving or rejecting, entering an approval reason is supported; the reason will be visible in the Order Approval Details.

- Bulk Approval:
    - Select orders via the list checkboxes and perform a bulk operation. After selecting, “Approve” and “Reject” buttons appear at the bottom of the list for quick handling.
    - Bulk approval does not allow viewing the specific risk restriction types that triggered each order. Please use with caution.

5.3 Approval Details

<img src="/assets/NHJFblEzaoMOHjxb4TXjrAFLp5b.png" src-width="2872" src-height="1742" align="center"/>

- For orders not in “Pending Approval” status, details can be viewed. The details display the order’s basic information and the risk-control restriction types, along with the order’s approval status and operation time.

