---
title: Feature Overview
slug: EfE0wkvDhiFXNLkKN9LcOJvpnkf
sidebar_position: 2
---


# Feature Overview.

# Feature Overview

# Client List Component

## Client List Search

1. Open the "Client List" component; it supports search criteria across three dimensions:
    1. Client Search: searchable by Securities Account, Chinese Name, English Name, Broker, ID Number, Mobile Number, or Email
    2. Account Type: Cash, Margin
    3. Account Status: Inactive, Active, System Account, Hui Li Legacy Account, Deprecated, Frozen

<img src="/assets/QH8dbpb7AoaQoixP0l6jvZAzpLb.png" src-width="2746" src-height="462" align="center"/>

<img src="/assets/CbhubqevyoQdVQx3ncwjl5mnpLd.png" src-width="634" src-height="598" align="center"/>

1. The list displays all accounts managed by the current trader/broker by default; you may filter the accounts to view using the search criteria.

# Client Information Component

1. Open the "Client Information" component; you must enter the Securities Account before performing a search. The component supports viewing assets, holdings, orders, transaction flows, and other data.
2. If other related accounts are linked by the same mobile number, you can switch to them directly for viewing.
3. Overview of Functional Modules
    <img src="/assets/UDgAbA9SNowcSfxBDY4jBzqEpcc.png" src-width="2634" src-height="914" align="center"/>
    1. Asset Overview: client funds data, including cash balance, frozen amounts, and other figures
    2. Client Holdings: client holding information, including holding quantity, market value, profit and loss, and other data
    3. Today's Orders: client's trading orders for the day, supporting multi-dimensional condition filtering
    4. Historical Orders: client's historical trading orders, filterable by date
    5. Today's Executions: relies on executed order data for the day to aggregate the executed quantity, profit and loss, and average price of stocks executed that day
    6. Client Profile: client's basic information, including address, phone number, broker, etc.
    7. Trading Channels: the client's trading channels for different markets, corresponding to the broker's access channels
    8. Bank Cards: bank card information bound to the client
    9. Agent Information: if the client has an agent, this list displays the agent's basic information
    10. Joint Account Information: if the client has joint accounts, this list displays joint account details, including basic identification information
    11. Trading Permissions: view the client's securities account trading permissions; to edit, proceed to WBO backend client management
    12. Financing Status: the financing situation of the client's securities account, including trading limits, financing limits, and risk control status
    13. Account Details: the client's securities account transaction and cash flow inflows and outflows
    14. Billing Inquiry: the current account's charges, including commissions, platform fees, and other billing items
    15. Authorized Person Information: if the client has an authorized trader, this list displays the authorized person's basic information

4. Settings: supports Information Bar Settings and Client Account Settings
    1. Information Bar Settings: adjust the display/hide status of Tabs on the Client Information component and modify the Tab order
    2. Client Account Settings: adjust the display of account-related information, whether to show joint account information and the account information display format, and whether to display the English name

<img src="/assets/OAQvbu2rboZHJPx4gnlj8AaopNb.png" src-width="1374" src-height="922" align="center"/>

<img src="/assets/DPf0bKsE6ojeu3xIkzPjehk0pEm.png" src-width="1376" src-height="940" align="center"/>

1. Client Information Component Horizontal / Vertical Layout Switch
    - The Client Information component supports switching between horizontal and vertical layouts; you can quickly switch via the "···" in the upper right corner.
        - The vertical layout presents asset information more compactly; the right side also adds a comparison of two states of today's orders (In Progress, Executed), allowing a more intuitive single-view of the client's assets, holdings, and orders. Functionality is more centralized and usage is smoother.
        - After switching to the vertical layout, subsequently opened Client Information components will retain that layout.
        - The vertical layout occupies relatively more space; it is recommended to open it in a new tab. Switching to it within the trading panel may result in incomplete information display.
            <img src="/assets/QopvbmIslotlm7xXxHej3vAlpVf.png" src-width="2746" src-height="528" align="center"/>
            <img src="/assets/PTZMbY2IQo3Stex0xm1jnEYZp3b.png" src-width="2846" src-height="1590" align="center"/>
        - Vertical Layout Settings Description:
            <img src="/assets/PAyebK6uzoLpITxJ2fRj4g5Kp8e.png" src-width="2128" src-height="800" align="center"/>
            - A new setting item has been added to control whether newly opened Client Information components follow the custom settings below; if not followed, newly opened components will open in the default layout.
            - Show/Hide Settings: unlike the horizontal layout, in the vertical layout setting a Tab to hidden means it is collapsed into a dropdown rather than being not displayed (the horizontal layout retains the existing show/hide logic).

