---
title: Feature Overview
slug: Kjbyw8cD7iqGjUkCtndcz3gonoc
sidebar_position: 2
---


# Feature Overview

# Feature Overview

# Updates

2024.08.11 Draft

# User Guide

## 1. Today’s Orders

Overview

View all clients’ orders for the current day, including order status and basic order information.

Operation and Feature Description

### 1.1 Search Criteria

Currently supports searching by order number, instrument type, market, order status, stock code/name, client, order submitter, order type, submission channel, short-sell type, order tag, review status, and option expiry date.

- To search by stock code/name, you must first select the instrument type:
    - When “Instrument Type = Stocks and Others,” you may search for stocks by stock code or name.
    - When “Instrument Type = Options,” you may search for option-related orders by stock code or name, and precise option search is also supported.
        In stock-matching mode, you can use a stock code to query all related option orders under the selected stock.
        In precise search mode, you may invoke the option filter to search for a specific option code.

- You can only filter by option expiry date when “Instrument Type = Options”; use a date to filter options.
- Other search criteria are dropdown selections or fixed-format inputs unless otherwise specified.

### 1.2 List Field Descriptions

The order list contains basic order-related information, principally including order submission details, execution details, trading channel, and operator information.

List data refreshes in real time.

- If an order requires approval, approval workflow details are available in the “Approval Status” field.

### 1.3 Actions

The actions are divided into List Actions and Order Actions. List Actions include refresh, export, and sort settings; Order Actions include amend, cancel, bulk cancel, view details, and exception handling.

- List Actions
    - Click a row to view the order’s execution details. If the order has been amended or executed in multiple fills, expand the execution details to view them.
    - Refresh: Manually refresh the current list.
    - Export: Support exporting order records and BCAN reports. Order records equal the current list data; BCAN reports include HBCNATBN_BPX066, HBCNERBN_2195, HBCNOTBN_2195.
    - Sort Settings: Manually customize the order list sequence and configure display options.

- Order Actions
    - Review Marking: Only the “Review Status” field is actionable in the list. Use it to mark whether a review with the client has been completed.
    - Amend Order: Orders that support amendment can be amended via right-click or the action column to open the amend window.
    - Cancel Order: Orders may be canceled via right-click or the action column; a confirmation prompt appears.
    - Bulk Cancel:
        - Select orders to cancel using checkboxes in the order list. After selection, submit cancellation requests via the “Cancel Selected” button in the upper-right.
        - Because bulk cancellation is high risk, the confirmation dialog does not allow “Do not show again.”
    - View Details: Access detailed order and fee information via right-click or the action column.
    - Exception Handling: For orders requiring manual intervention, open the exception handling window via right-click to view order basics and perform exception operations.
        - Exception handling supports changing order status and inputting executed price and quantity.

## 2. Historical Orders

Overview

View all clients’ historical orders, including order status and basic order information.

Operation and Feature Description

Historical order list fields are the same as Today’s Orders. Historical orders do not support amendment or cancellation; only viewing details is supported.

Refer to “Today’s Orders – Details” for the details workflow.

## 3. Positions

Overview

View all clients’ position data to monitor holdings in real time and provide timely alerts.

Operation and Feature Description

### 3.1 Search Criteria

Currently supports searching by asset market, account, and stock code.

- Asset markets include: Hong Kong, US, Shanghai/Shenzhen, Singapore, Virtual Assets, Funds, Bonds, Others, and Options. (Note: Some markets reflect balances adjusted by WBO backend; the front end will not support buy/sell operations for those positions.)

### 3.2 List Field Descriptions

The positions list contains position-related basic information, primarily including position quantity, market value, and P&L.

List data refreshes in real time.

### 3.3 Actions

Divided into Basic List Actions and Position Order Actions.

- Basic List Actions
    - Refresh: Manually refresh the current list.
    - Export: Support exporting position data; export fields match visible list fields.
    - Sort Settings: Manually customize list order and display preferences (same rules as the orders table).

- Position Order Actions
    - Buy: Right-click or use the action column “Buy” to quickly open the trading order component for the client’s current holding.
    - Sell: Right-click or use the action column “Sell” to quickly open the trading order component for the client’s current holding.
    - Close Position: Right-click to quickly open the close-position order component; the quantity defaults to the maximum held quantity to facilitate rapid liquidation.
    - Client Info: Right-click or click the small hover icon next to the client name to open the client profile in the “Client Information” component. (Refer to the “Client Query” documentation for the client information component workflow.)

## 4. Order Entry Component

Overview

The primary tool for order submission; use this component to place orders.

Traders must have WTT order entry permission (permission key: wtt_trading.permission) to place orders.

Operation and Feature Description

- Trader Mode vs. Normal Mode:
    - Trader Mode: Supports exact account search; order side defaults to empty; order price must be manually entered. Market quotes are integrated so selecting a stock enables quick market view.
        - Can switch to “Compact Mode” to reduce nonessential fields.
        - Using the Clear function fully clears the order entry panel to avoid submitting orders under the wrong account or with incorrect details.
    - Normal Mode: Supports fuzzy account search; order side defaults to Buy; price automatically fetches the latest price after entering the code.
        - No “Compact Mode”; ensure required information is entered before submitting.
        - Using the Clear function retains the code and side information to assist rapid order entry.

- Conditional Orders: Offers four conditional order types—Buy at Price, Sell at Price, Rebound Buy, and Pullback Sell—to meet traders’ take-profit/stop-loss and trailing stop needs.
    - Buy at Price / Sell at Price: Selectable in the order entry component. The trader sets the trigger price and chooses whether the order submitted on trigger is a Limit or Market order; typically used for stop-profit/stop-loss or for opening a position when the market price reaches a specified level.
    - Rebound Buy / Pullback Sell: Selectable in the order entry component. The trader sets parameters for the trailing trigger (e.g., monitor the highest/lowest price after placing the order, define the rebound/drop amount or percentage at the turning point, and submit a child order with a specified price offset upon trigger). Typically used for trailing take-profit/stop-loss on held positions or for seeking better entry points.

- Order Entry Layout Adjustments:
    - When used standalone, the order entry component can display market depth and order information within a single component for multi-dimensional views.
    - Use “Layout” settings to display one level of market depth and Today’s Orders (one level follows market data; Today’s Orders follow the orders table).
        - Ensure the trading component has a selected client and code before enabling this feature.

## 5. Manual Trades & Manual Trade Records

Overview

Submit manual trades using the “Manual Trade” component as a basic order entry tool. When manual trades are submitted by other brokers and require acceptance or rejection, handle them through the “Manual Trade Records” component. Manual Trade entry supports Hong Kong market only.

Operation and Feature Description

### 5.1 Manual Trade Entry

Order Types: Manual Trade, Pre Opening, Odd Lot, Overseas

- Manual Trade: Quantity must be an integer multiple of a board lot; price ≥ 0.01; price supports up to 3 decimal places.
- Pre Opening: Non-board-lot quantities allowed; may be less than one lot; maximum quantity 999,999,999; price supports up to 3 decimal places; values out of range will be rejected.
- Odd Lot: Quantity must be a non-board-lot; price supports up to 3 decimal places.
- Overseas: Non-board-lot quantities allowed; may be less than one lot; maximum quantity 999,999,999; price supports up to 3 decimal places; values out of range will be rejected.
- Side: Default is Sell; Overseas can switch to Buy.
- Cross Trade: Option to select cross trade.
    - Yes: Must choose a receiving account within the current brokerage.
    - No: Submit directly to the specified seat broker; that broker will receive a manual trade receipt notification.

### 5.2 Manual Trade Records

Search Criteria: Order status, cross trade flag, side, stock code

- Order Status: Pending Confirmation, Confirmed, Cancelled, Rejected. To monitor incoming manual trades awaiting receipt, choose “Pending Confirmation.”
- List Fields: Manual trade order status, basic order information, and action column.
- Actions: Confirm, Reject, View Details.
    - For Pending Confirmation, Confirm and Reject are available; confirming requires selecting a receiving account within your brokerage.
    - After confirmation or rejection, manual trade details can be viewed.

## 6. Odd-Lot Matching

Overview

Use this component for matching odd-lot shares; view odd-lot market information, select an odd-lot, and assign it to a trading account.

Operation and Feature Description

- Search Criteria: Stock code, seat number, status
    - Status: Orderable, Not Orderable (only odd-lots with “Orderable” status can be matched)

- Odd-Lot List: Market odd-lot data, including stock code, price, quantity, seat number, and order ID.
- Execution Account Selection: Choose the receiving account within your brokerage. After selection, display the account’s available buy/sell quantities.

## 7. Bulk Cancel

Overview

Use this component to perform bulk cancellations by configured criteria.

Operation and Feature Description

Bulk cancel supports four filtering criteria: code, side, seat number, and sector.

- Side: Buy, Sell
- Sector: MAIN, GEM, ETS, NASD (currently supports these four options)

## 8. Basket Trading

Overview

Manage baskets and submit batch orders to accounts using this component.

Operation and Feature Description

Basket trading includes basket management, basket submission, and order queries.

- In Basket Management, create a new basket by adding single stocks or importing a set of selected stocks in bulk. After adding, edit specific stock direction, quantity, weight, and order type (Limit or Market) via the edit button in the basket’s stock list.
- After configuring basket stocks, switch to “Basket Submission” to place orders. Select account(s) and a basket, then set the submission mode in the lower-left as “By Amount” or “By Quantity.” For example, if selecting “By Amount,” enter the total amount and the system calculates per-stock quantities; confirm and click “Submit Now” to place the basket order.
- After submission, switch to the “Basket Orders” page to view submitted basket orders, including the number of stock orders, executed orders, submitted quantities, executed quantities, and execution ratios. Click a basket order to display the actual submission details and per-order details.

## 9. Algorithmic Trading & Algorithm Orders

Overview

Supports TWAP / VWAP algorithmic trading strategies. Beyond basic quantity and price parameters, WTT provides advanced strategy and risk-control parameters, including trading style (Conservative, Normal, Aggressive), market participation rate, relative limit price, and more.

1. TWAP (Time-Weighted Average Price): Distributes the parent order quantity evenly over a specified time window, posting child orders at set intervals at a specified price.
2. VWAP (Volume-Weighted Average Price): Distributes the parent order quantity across multiple child orders according to patterns such as decreasing, equal, or random allocations until the full quantity is placed.

Operation and Feature Description

### 9.1 Algorithmic Order Entry

Fields mirror the standard order entry component and include account selection, stock code, side, price, order type (Market, Limit), and quantity.

- Algorithm Time Selection:
    - Custom Trading Time:
        - Start Time: Algorithmic order start time; earliest is the current time.
        - End Time: Algorithmic order end time; latest is market close.
    - Execution Duration: If specified, the end time auto-populates as current time + execution duration. Duration granularity is minutes. Maximum execution duration = end time − current time. Midday market breaks are excluded from calculation.

- Only supports intraday trading; start time must be within the intraday session.
- Distinguishes trading days from non-trading days. For orders submitted during non-trading hours, the server pre-places the order and submits it to the executing institution the next trading day. Users are notified that algorithm orders placed during non-trading hours will be submitted on the next trading day.
- If the start and end times are too short (≤ 5 minutes), the end time field will be highlighted in red to warn that execution may fail.
- Trading Style:
Selecting different trading styles adjusts execution pace. More conservative styles favor our side’s execution price but execute more slowly; more aggressive styles prioritize speed but may favor counterparty prices.
    - Conservative: Post orders at our market depth; can place up to two resting orders.
    - Normal (Default): Post a single resting order.
    - Aggressive: Hit the opposite market price; will not proactively rest orders.

- Maximum Market Participation Rate (optional): Default displays 33.00% (system default).
    - Formula: Maximum percentage = executed volume of the parent order / market volume during the execution window.
    - Purpose: Prevents order volume from exceeding a set share of market volume to avoid undue market impact. Generally, exceeding 33% is not recommended.
    - Input range: 0–100 with two decimal places; values of exactly 0 or 100 are not allowed.

- Reference Price (optional):
    - None (Default)
    - Opposite Side Quote
    - Our Side Quote
    - Previous Close
    - Last Trade: The latest execution price of the most recent child of the parent order, which may change over time.
    - Arrival Price: The parent order’s arrival price at submission; fixed thereafter.
    - Market VWAP Price

- Unit (optional): If Reference Price is None, Unit cannot be set.
    - Minimum price tick (for relative limit calculations)
    - Percentage
    - Currency unit specific to the stock: e.g., HKD for Hong Kong stocks, USD for US stocks

- Offset Amount (optional): Numeric input, default 0. Accepts positive, zero, or negative numbers with two decimal places.
- Relative Limit Price: Automatically calculated to assist user input.
    - Explanation: Relative limit price = Reference Price ± (Unit × Offset). For buy orders: Relative Limit = Reference Price + Unit × Offset. For sell orders: Relative Limit = Reference Price − Unit × Offset.
    - Display Rules:
        - If Reference Price = None, Relative Limit displays “No limit” and Unit and Offset are disabled.
        - If Unit = Tick and Reference Price = Opposite Side Quote with Offset = 4, display: Opposite Side +0.04.
        - If Unit = Percentage and Reference Price = Opposite Side Quote with Offset = 4, display: Opposite Side + Opposite Side × 4%.
        - If Unit = Currency and Reference Price = Opposite Side Quote with Offset = 4, display: Opposite Side + 4.

- Submit the algorithm order via the submit button. If required fields are missing, the submit button is disabled.

### 9.2 Today’s Algorithm Orders

After submitting an algorithm order, the parent order and its child details display in the algorithm order view. If the parent order is running, available operations include amend, cancel, pause, and pause-and-cancel.

- Amend: Opens the amend dialog; the system will cancel unexecuted child orders and re-slice child orders according to the updated parent parameters.
    - Editable parameters: price, quantity, algorithm type, end time, trading style, maximum market participation rate, reference price, unit, offset.
    - Non-editable parameters: account, code, side, start time.

- Cancel: Sends a request to cancel the parent order and cancels unexecuted child orders.
- Pause/Resume: When running, a parent order can be paused, stopping generation of new child orders; already generated child orders continue to execute. A paused parent can be restarted.
- Pause and Cancel: Pauses the parent to stop generating new child orders and initiates cancellation of unexecuted child orders.

### 9.3 Historical Algorithm Orders

Displays historical algorithm orders sorted by submission time in descending order by default.

- Display fields are similar to Today’s Orders, with differences:
    - Historical algorithm orders are non-actionable (no amend, cancel, or pause operations).
    - Historical algorithm orders support date-range filtering.

## 10. Grid Orders

Overview

This component displays grid orders placed from client terminals. Traders can manage and monitor client grid orders here.

Operation and Feature Description

The page is divided into two parts: the top section lists grid orders (filterable and with customizable column visibility and order), and the bottom section shows details for a selected grid order, including trigger history (orders generated by grid triggers) and order history (trigger records for the grid order itself).

Available operations: Pause, Cancel.
Operations on historical triggered orders: Amend, Cancel.

## 11. Institutional Orders & Institutional Order Entry

Overview

Use the Institutional Order Entry component to submit Non-DMA parent orders and use the Institutional Orders component to split and view orders.

Operation and Feature Description

### 11.1 Institutional Order Entry (Parent Order Submission)

Used by traders to submit Non-DMA parent orders within the system.

Supported order types: “Special Handling – Limit” and “Special Handling – Market”

- Special Handling – Market: Only quantity input is required; price is not required.
- Special Handling – Limit: Supports input of parent order price and quantity.

Time-in-force supports Day and GTC; options include “Good for Day,” “Good till Cancelled,” and custom validity periods.

### 11.2 Today’s Institutional Orders

The Institutional Orders component is used to view Non-DMA parent orders in the system and to amend, cancel, or split parent orders into child orders for market submission.

The top section lists Non-DMA parent orders and their statuses (e.g., progress, execution ratio). The bottom section displays child orders already submitted to the market, including each child order’s status and executed quantity.

- The parent order list defaults to “In Progress” orders; switch filters to view other statuses.

Parent Order Operations:

- Split Parent into Child Orders: Double-click or click the trading icon in the action column to open the split-child window.
    - In the order entry window, the institutional order number, account, code, side, and validity follow the parent order and are not editable. The trader inputs the expected child order quantity and price and submits the child order.
    - Child order price and quantity cannot be better than the parent order; the system will enforce this restriction.
    - After successful submission, the child order appears beneath the institutional order list.
    - All child orders are subject to the same pre-trade controls (purchasing power, holdings, trading permissions, Cross Trade restrictions); if rejected, specific rejection reasons can be viewed in the child order list.
    - The sum of child orders’ executed quantities and submitted market quantities cannot exceed the parent order’s quantity; if exceeded, the last child submission will be rejected.

- Amend Parent: For parents “In Progress,” clicking the amend icon opens the parent amend dialog. Only quantity and remarks are editable. Confirm changes via a secondary confirmation prompt.
- Cancel Parent: For parents not yet fully split or with outstanding child orders, traders can cancel the parent via the cancel icon. After secondary confirmation, the parent is cancelled. If there are child orders still active in the market, those child orders will also be automatically cancelled.
- Complete Parent: Right-click to mark a parent as “Completed.” Only completed parents can proceed to allocation or transfer operations.

Parent List Field Descriptions:

- In addition to basic parent order information, view metrics such as execution ratio and remaining quantities.
- Key fields:
    - Daily Total Submitted Quantity: Parent’s total quantity submitted on that day (reflects daily child submissions).
    - Parent Total Quantity: Total quantity of the parent order at submission.
    - Daily Executed Quantity: Sum of executed quantities from child orders submitted that day; for partially filled then cancelled child orders, only executed quantity counts.
    - Daily Transferred Quantity: Sum of quantities transferred via the allocation/transfer function that day.
    - Daily Execution Ratio: Daily Executed Quantity / Daily Total Submitted Quantity.
    - Order Executed Quantity: Total executed quantity aggregated at the parent level; for partially filled then cancelled child orders, only executed quantity counts.
    - Parent Remaining Submitted Quantity: Remaining quantity of the parent that has already been submitted as child orders.
    - Parent Remaining Unsubmitted Quantity: Remaining quantity of the parent not yet submitted as child orders.
    - Total Transferred Quantity: Aggregate of all transferred quantities from the parent across operations.

Order Status Definitions:

- In Progress: Parent not fully split, or child orders not fully executed and still awaiting matching.
- Executed: Sum of child executions equals the parent quantity.
- Cancelled: Parent cancelled without split or without executions after splitting.
- Rejected: Parent order rejected at submission.
- Expired: Parent expired after market close if not split or not executed.
- Completed: Parent order workflow completed; only in this state can allocation/transfer operations be performed.

Child Order Operations:

- Cancel Child: Cancel a child order from the child order action column. After cancellation, parent-level quantities (Daily Total Submitted Quantity, Parent Total Quantity, Parent Remaining Submitted Quantity, Parent Remaining Unsubmitted Quantity) are updated accordingly.
- Amend Child: Enter the amend dialog for a child order to modify price and quantity only.

## 12. Execution Statistics

Overview

This component aggregates execution data for all clients and presents execution statistics at the stock/instrument level.

Operation and Feature Description

### 12.1 Search Criteria

Supports filtering by market, date, and stock.

- Default market on entry is HK; date defaults to the current trading day.
- Manually switch market or trading date to query data.

### 12.2 List Field Descriptions

Each row corresponds to a traded stock instrument and includes buy & sell average execution price, buy & sell execution volume, net executed quantity, total executed quantity, buy & sell execution amount, net execution amount, and total execution amount.

- Buy & Sell Average Execution Price: Calculated separately by side. For buy example: buy execution amount / buy execution volume. If there are no sell orders that day, the list displays 0.0000.
- Buy & Sell Execution Volume: Aggregated executed volume by side.
- Net Executed Quantity: Buy volume − Sell volume.
- Total Executed Quantity: Buy volume + Sell volume.
- Buy & Sell Execution Amount: Aggregated executed amount by side.
- Net Execution Amount: Buy amount − Sell amount.
- Total Execution Amount: Buy amount + Sell amount.

List data refreshes in real time as executions occur.

List Actions:

- Upper-right controls support Refresh, Export, and Field Settings.
    - Refresh: Manually refresh the list if network latency occurs.
    - Export: Export the current list data; exported fields match the displayed list.
    - Field Settings: Configure field order and display/hide fields.

