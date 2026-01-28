---
title: Quick Start
slug: QUlww7SV3iiohxkxUb7c8CkenXd
sidebar_position: 1
---


# Quick Start

# Quick Start

# Overview

The Whale CRM System enables brokerages to view and manage the personal basic information and account-opening/funding information of all registered customers online; it also supports brokerages in proactively advancing target customers through their lifecycle to efficiently convert registered customers into active accounts. The system comprises five primary modules: Customer List, Account Managers, My Dashboard, Task Follow-up, and Today's Summary. The Customer List consolidates all customer information under the brokerage, covering basic customer information, account-opening details, referral relationships, funding, and other data; it also allows backend users with different roles to access a defined scope of customer information based on their functional and data permissions.

For brokerages that assign account managers to maintain customer relationships, the platform enables online management of the account management team, supports assigning customers to account managers according to predefined rules, and, through more granular data filtering, helps account managers perform CRM work more effectively to achieve efficient customer conversion.

# Quick Start

## Prerequisites

You must obtain the following authorizations before you can use the system features properly.

## Customer List: Full Customer Pool

After customers of each brokerage successfully register through the brokerage's specified method, their customer data will be aggregated into the Customer List menu. When customers complete actions on the platform such as account opening, funding, trading, or referrals, the Customer List records the related information.

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❗ As the aggregation point for the core data of the full customer base, special attention must be paid to developing permissions for the Customer List menu.</p>
</div>

<b>Path:</b> Customer Management System &gt; CRM &gt; Customer List

<b>Actions:</b> As the full customer pool under the brokerage, the Customer List supports filtering target customers according to specified rule conditions and viewing detailed information for those customers. Depending on the permissions of the logged-in user, it supports viewing the customer's account-opening information, remarks, assigning account managers, updating customer verification, and other capabilities.

<img src="/assets/Xr5KbFp5qoprRDxU8tHjgzjzpZf.png" src-width="2316" src-height="1432" align="center"/>

Select a customer and click "Details" to view the customer's basic information, referral relationships, account assets, and positions/trades (subject to appropriate permissions).

<img src="/assets/Ivl1bbQOoojAHJx7U9PjlA3Ypfv.png" src-width="458" src-height="956" align="center"/>

<img src="/assets/DZgJbnVRUoTTvzxzLGbjAZuXppc.png" src-width="2322" src-height="1420" align="center"/>

For smaller brokerage teams, customer management and follow-up can be conducted directly within this menu. The system supports individual customer follow-up and remarks, as well as bulk assignment of account managers and batch remarks.

<img src="/assets/JPXlbO492oe3i4xDzITji2zqp2f.png" src-width="2318" src-height="1408" align="center"/>

## Manage "Account Managers"

For brokerages that rely on account managers to maintain customer relationships, the platform allows online management of the account management team, supports assigning customers to the appropriate account managers according to defined rules, and facilitates account managers in following up online to efficiently drive customer conversions.

<b>Path:</b> Customer Management System &gt; CRM &gt; Account Managers

<b>Actions:</b> Click [Add Account Manager] to add a new account manager's basic information, including name, position, team, and region.

<img src="/assets/CxdQbLQHronEAfxVxxnjqRFPphp.png" src-width="3232" src-height="1526" align="center"/>

<img src="/assets/N5vubzxgvoBnxoxuQjCjfkz1pzg.png" src-width="1280" src-height="669" align="center"/>

## Assign Account Managers

Note: This module applies only to brokerages that use account managers.

The Customer List aggregates all successfully registered customers and supports assigning customers to the appropriate account managers according to defined rules. A single customer may be managed by different account managers at different stages, such as early-stage business development and later-stage channel conversion.

<b>Path:</b> Customer Management System &gt; CRM &gt; Customer List

<b>Actions:</b> Support assigning an account manager to a single customer, or select multiple customers to perform bulk assignment of account managers.

<img src="/assets/GOAcbTE2ZoAWJTxD5nEjAdefpkb.png" src-width="1180" src-height="713" align="center"/>

## My Dashboard: Account Manager Customer Board

After customers are assigned to account managers, account managers can view all customers bound to them in My Dashboard, including customers' basic information, account-opening/funding/trading/referral data. If team data permissions are granted, an account manager can view all customers being followed by account managers under the current team.

Account managers can also record summary notes of their interactions with customers online, including contact information, customer intent, next follow-up time, and other subjective information, to help build more effective customer profiles and provide better customer service.

<b>Path:</b> Customer Management System &gt; CRM &gt; My Dashboard

<b>Actions:</b> Customers assigned to the current account manager are organized by lifecycle into four modules: Pending Account Opening, Pending Funding, Funded, and Traded. Click a lifecycle card to quickly filter all customers in that lifecycle.

- Field explanations:
    - User Region: The country/region where the user currently resides. Value selection follows this priority:
        - 1: Country/region of residence; 2: Mobile phone dialing code; 3: Country/region corresponding to the IP address at registration.
    - Active Region: The country that issued the user's identification document. If a customer's country of residence differs from the ID issuing country, the ID issuing country is preferred as the Active Region. Rules:
        - If an ID issuing country is available, use it as the Active Region; otherwise, use the value of the user region as the Active Region.

<img src="/assets/Qvu3b36IyoKKbKxQFy3jnKHCpDd.png" src-width="3306" src-height="1222" align="center"/>

Clicking a specific customer ID opens a drawer panel on the right that displays the customer's detailed information, including basic personal information, assets/trading data, referral relationships, and follow-up records, enabling account managers to quickly build the customer's profile and better serve the customer.

<img src="/assets/IElzbxlBqob1cxxe2RZjALoXpnd.png" src-width="3304" src-height="1782" align="center"/>

In the Follow-up Records tab, click [Add Follow-up Record] to record the customer's details, including customer intent, customer tier, contact methods used, next follow-up time, customer tags, remarks, and so on.

<img src="/assets/XU5Tbe5ypoSgBjxZC9kjeZOVpoc.png" src-width="1180" src-height="1766" align="center"/>

<img src="/assets/HuNfbtWCooQ0B2x7L0Uj5rYCpcc.png" src-width="1174" src-height="1808" align="center"/>

For customers of the same type, you can select multiple entries and click [Batch Remarks] to add related remark notes.

<img src="/assets/IE6wbFrnHorWnrxYGPZjoIGDpBC.png" src-width="3252" src-height="1016" align="center"/>

## "Tasks" Follow-up

When customers have already been assigned, if a customer's account activity or funding behavior changes, the system will automatically create tasks to remind the account manager to follow up.

<b>Path:</b> Customer Management System &gt; CRM &gt; Tasks

<b>Actions:</b> Clicking different task nodes displays the list of customers under that node.

Select a customer and click [Follow Up] to open a right-side panel that presents the customer's information in a card format.

<img src="/assets/OHZVb2gqAoilxQxJVdBj30w4pVf.png" src-width="3256" src-height="1482" align="center"/>

In the Follow-up Records tab, click [Add Follow-up Record] to enter interactive tags and notes.

<img src="/assets/PKGjbtDqRoohPkxKxGFj8iCJpYb.png" src-width="2242" src-height="1252" align="center"/>

<img src="/assets/FnYVbfaAfo5nrQxdlSxjizCgpJe.png" src-width="2228" src-height="1612" align="center"/>

In the Assets/Trades tab, view an overview of the customer's assets and recent deposit/withdrawal records.

<img src="/assets/P5I2bqWufoPHdJxfnMoja60SpUf.png" src-width="2216" src-height="1624" align="center"/>

In the Referral Relationships tab, view referral relationships.

<img src="/assets/EE9ybmy2Zo9fyHxgH0UjzjhZpLd.png" src-width="2230" src-height="1608" align="center"/>

## View "Today's Summary"

Within the Today's Summary list, account managers can review the customers they followed up with today and the progress made, presented across multiple visual dimensions. Today's Summary primarily displays information across three dimensions: Customer Progress, Daily Follow-up, and My Daily Report.

<b>Path:</b> Customer Management System &gt; CRM &gt; Today's Summary

<b>Actions:</b> Customer Progress provides comparative metrics across multiple dimensions (Account Openings / Fundings / Pending Account Opening Follow-ups / Pending Funding Follow-ups / TMT Registration Follow-ups / Funded Follow-ups).

<img src="/assets/X5ktb0EoSon3JjxXfvOjO0vdphd.png" src-width="2322" src-height="1438" align="center"/>

Daily Follow-up supports querying users (customers) that require follow-up based on filter conditions in the central work area.

<img src="/assets/NWP5bXp7RoQBNjxpoq5jjQDEpuh.png" src-width="2322" src-height="1442" align="center"/>

My Daily Report provides a daily report recording function to help account services staff capture daily summaries.

<img src="/assets/XZgfb9wx2o3sjRxd5axjVNO2pgg.png" src-width="2322" src-height="1412" align="center"/>

