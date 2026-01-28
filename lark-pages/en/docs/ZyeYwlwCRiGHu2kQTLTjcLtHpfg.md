---
title: System Overview
slug: EmoCwz2KQi7rsCk2RQNcY7Wpnrb
sidebar_position: 1
---


# System Overview

This user manual applies to the Longbridge Whale — Entitlements Platform and is intended for operations system administrators and authorized users. By reading this manual, you will learn how to operate the Whale Entitlements Platform.

The Entitlements System is Whale’s solution for managing the distribution of various marketing rewards and entitlements, including creation and issuance of a variety of coupons and rewards. Within the Whale Entitlements System, the primary functional areas are Coupon Benefits, Rewards Center, and Entitlements Center.

<img src="/assets/AWE1bo7tXo1iV9xadrojFC38pzc.jpeg" src-width="1354" src-height="414" align="center"/>

# Feature Overview

# Entitlements Workflow

Intended users: operations personnel. The Entitlements System involves the following parties:

- Entitlements System: operations personnel are responsible for configuring and managing entitlements projects (Coupon Benefits / Rewards Center / Entitlements Center).
- App Client: end users who interact with various entitlements.
- Settlement System: responsible for the financial processing generated when customers interact with entitlement projects.
- Data Service System: refers to cases where certain entitlements relate to market data service activation (if applicable).
- Trading System: refers to cases where certain entitlements relate to trading services (if applicable).

<img src="/assets/KRpmb3qVUoVwodxArxIjZcTRpgc.jpeg" src-width="1734" src-height="2634" align="center"/>

# 1. Coupon Benefits

## 1.1 Menu Structure

## 1.2 Coupon Configuration

Navigation: Operations System &gt; Entitlements System &gt; Coupon Benefits &gt; Coupon Configuration

<img src="/assets/ERWVbuxRzo2TlKxFFYKjo5n8prf.png" src-width="2784" src-height="1190" align="center"/>

List operations:

- Query: Filter and search existing coupons by product template code, title, coupon type, validity period, etc.
- View: Click View to see all configuration fields for the selected coupon.
- Edit: Click Edit to modify the coupon fields and rules — use caution; saved changes may affect coupons already issued and in production.
- Copy: To rapidly create a similar coupon, click Copy to duplicate the current coupon template and then modify selected fields to create a new coupon quickly.

### 1.2.1 Create New Coupon

This function provides a tool for creating new coupons. After creating a coupon and obtaining the reward template code, the coupon can be issued via the activity system or other distribution methods.

The current Whale Entitlements System supports configuration of the following coupon types:

Operation details:

Click the “New” button at the top-right to open the creation page. Coupon information is divided into Basic Information and Rule Configuration. Basic Information fields are common across coupon types; Rule Configuration fields vary by coupon type.

<img src="/assets/L214b5Is1o6nrgxuFqfjJs9Epqb.png" src-width="1668" src-height="1960" align="center"/>

Basic Information:

Select the coupon type to create; the Basic Information fields are the same for all coupon types.

Rule Configuration:

After selecting the coupon type to create, configure rule fields specific to that type, as described below.

After completing these configurations, click Confirm to generate the coupon and reward template code.

### 1.2.2 Coupon Management

Navigation: Operations System &gt; Entitlements System &gt; Coupon Benefits &gt; Coupon Management

This function provides viewing of coupon issuance records. The list displays each issuance record for every coupon, regardless of issuance channel.

Filter and export by coupon number, reward template code, coupon type, issuance time, customer ID, coupon status, and other criteria.

<img src="/assets/VyKObVtnhoyhW7xJWa3jVQS3pvd.png" src-width="2758" src-height="820" align="center"/>

### 1.2.3 Coupon Settlement

Navigation: Operations System &gt; Entitlements System &gt; Coupon Benefits &gt; Coupon Settlement

This function provides viewing of coupon settlement records and is applicable to coupons that result in cash refunds (Commission-Free Coupons and Stock Cash Back Coupons).

The list contains each cash-back record; every successful cash-back is considered a settled record.

Filter by coupon number, user ID, settlement date, activity code, redemption scenario, etc.

<img src="/assets/RnW8bzNNDoY26GxvX0sjEACqpRh.png" src-width="2750" src-height="784" align="center"/>

## 1.3 Physical Prizes

Navigation: Operations System &gt; Entitlements System &gt; Coupon Benefits &gt; Physical Prizes

<img src="/assets/ID4XbJUdHohHtxxYdOrjrPOgpFd.png" src-width="2432" src-height="1142" align="center"/>

List operations:

- Query: Filter by prize template code, prize type, creation time, etc.
- View: Click View to see all configuration fields of the selected physical prize.
- Edit: Click Edit to modify the prize information.
- Copy: Click Copy to duplicate an existing prize and modify fields to create a new prize quickly.

### 1.3.1 Create New Physical Prize

Click the “Create Template” button at the top-right to open the creation page.

<img src="/assets/SL2ObgNOQoMqFExt9MajJg4opcd.png" src-width="1680" src-height="2645" align="center"/>

Configure the following fields:

After completing these fields, click Submit to create the template; the system will automatically generate a prize template code.

### 1.3.2 Physical Fulfillment Management

Physical fulfillment workflow:

<img src="/assets/KBvAbs67Yo2d23xl4iUjiKW7pVd.jpeg" src-width="1114" src-height="2174" align="center"/>

Navigation: Operations System &gt; Entitlements System &gt; Coupon Benefits &gt; Physical Fulfillment Management

This function supports combined online and offline operations to ship physical rewards to recipients and provides querying of fulfillment records.

Fulfillment operation instructions:

After a user receives a physical reward, a record is created in Physical Fulfillment Management. Once the user supplies a shipping address via the mobile app, fulfillment must be executed as follows:

(1) Filter users who have filled in their address

<img src="/assets/HbJ7b6eM1ohGuTxHz16jXM2FpYg.png" src-width="2782" src-height="880" align="center"/>

If a user has not provided an address, the fulfillment status will be “Address Not Provided.” Once the user provides an address, the status changes to “Address Provided.” Use this filter to find records that are ready for shipment.

(2) Export addresses

After filtering for users who have provided addresses, export the address information to proceed with offline shipment.

<img src="/assets/FUNQbYuUSoCXosxK1OMjFuOgpPh.png" src-width="2758" src-height="946" align="center"/>

To prevent address changes after export, lock the record status. After exporting, batch change the fulfillment status to “Shipping In Progress”; once set, the user can no longer modify the address.

<img src="/assets/OyO4b2j0AoujrqxQ2ZJjr8Kwp0c.png" src-width="2758" src-height="1608" align="center"/>

(3) Upload tracking numbers

After shipping offline, collect tracking numbers and enter them into the system so users can view shipment tracking.

If there are only a few tracking numbers, enter them individually by clicking the “Ship” button for each record and inputting the tracking number in the dialog.

<img src="/assets/ICx0bffV2oN0MWxzmC4j0I7zptL.png" src-width="2770" src-height="1036" align="center"/>

For large volumes, use “Batch Import Tracking Numbers” at the top-right to bulk import tracking numbers via file upload.

<img src="/assets/WKg1b1frgovJ0dxRrATjKnLKpIb.png" src-width="2788" src-height="1640" align="center"/>

After uploading tracking numbers, the physical reward fulfillment process is complete.

# 2. Rewards Center

The Rewards Center consolidates reward issuance records from various distribution channels and supports manual reward issuance and approval workflows for user asset redemptions.

## 2.1 Reward Issuance

This section provides querying of all issued reward records and manual reward issuance functions.

### 2.1.1 Query Reward Records

Navigation: Operations System &gt; Entitlements System &gt; Rewards Center &gt; Reward Issuance

<img src="/assets/BBVYbSx1PoWlZpxclOHjtur3pRb.png" src-width="2788" src-height="1042" align="center"/>

### 2.1.2 Manual Reward Issuance

Applicable scenarios: For non-standard activities or special cases where no automated rules exist—such as issuing a gift to a loyal customer or correcting omissions in online activities—the manual issuance function is used.

Issue to a single user:

Click the “New” button at the top-right to open the issue dialog.

[内联图片不支持]
[内联图片不支持]

After confirming, the issuance record is created. If an approval workflow is configured, the record enters the approval flow and will be issued upon approval; if not approved, the issuance is canceled. If the approval flow is automatic, the record is issued immediately.

Issue to multiple users:

For bulk issuance, click “Batch Issue Rewards” at the top-right and upload a file to issue rewards to multiple users at once.

[内联图片不支持]
[内联图片不支持]

First select the reward type, then download the template file from the template section (different reward types require different templates; follow the steps in order). Complete the template file and upload it by dragging it into the input box. After confirming, the system generates the corresponding number of issuance records. Records will enter the approval flow if configured; otherwise they will be issued according to the approval configuration.

## 2.2 Asset Disposal

This function handles user assets (stocks and cash). When users receive cash, query records here; when users redeem coupons for stocks, perform approval operations here.

Users may redeem Stock Coupons to receive corresponding shares, or accumulate multiple Stock Cash Back Coupons until their combined value reaches at least one share price, at which point they can be redeemed together for a share.

Navigation: Operations System &gt; Entitlements System &gt; Rewards Center &gt; Reward Issuance

<img src="/assets/Asywb9TM1oAUFyx9u8Mjz82epvh.png" src-width="2750" src-height="1004" align="center"/>

Cash and cash coupons are generally issued directly. For stock redemptions, approval is required here before the corresponding shares are transferred to the recipient’s account.

# 3. Entitlements Center

The Entitlements Center is currently used for managing market-data products and for viewing/exporting orders generated by the Market Data Shop.

## 3.1 Entitlements Shop

Navigation: Operations System &gt; Entitlements System &gt; Entitlements Center &gt; Entitlements Shop

<img src="/assets/QLlRb82rooWrG3xcLfyjKONbpCD.png" src-width="2752" src-height="1002" align="center"/>

If you subscribe to Whale’s content services that include market data, you may sell market data viewing permissions to users as market-data products. Whale staff will assist each tenant in creating and managing market-data products; further details are not covered here.

## 3.2 Entitlements Orders

Navigation: Operations System &gt; Entitlements System &gt; Entitlements Center &gt; Entitlements Orders

This function is used to query and export orders generated by the Market Data Shop for operations and finance personnel.

<img src="/assets/Vmdxbnietou8Mgxmjq5jp1zYpdc.png" src-width="2420" src-height="730" align="center"/>

# App Client Features

The following demonstrates how configurations are presented in the front-end app.

## Coupons

App Entry:

<img src="/assets/CvkHbmrfAoEqrxxVK4HjenEupkg.png" src-width="628" src-height="1352" align="center"/>

My — My Coupons

My Coupons:

<img src="/assets/Fm7xbPDKjoApSHxTb64jaccDpLb.png" src-width="624" src-height="1360" align="center"/>

Users can view their current coupons and coupon statuses.

Using Coupons in Trading:

[内联图片不支持]
[内联图片不支持]

Using Coupons for IPO Subscriptions:

<img src="/assets/BKJpbcEGQo6NRvxGLiojs2AYpqb.jpeg" src-width="724" src-height="1610" align="center"/>

## Rewards

App Entry:

<img src="/assets/BSAybzfGtofYFpxrPpOjYb8Cpqg.png" src-width="620" src-height="1366" align="center"/>

My — Reward Records

<img src="/assets/So3IbgZ9xoaJD5xntjPjH2u2peb.png" src-width="626" src-height="1360" align="center"/>

Reward Records:

<img src="/assets/IL5zbsJPpo517wxZczUjbsxipcf.jpeg" src-width="1080" src-height="2374" align="center"/>

Displays all historical records.

<img src="/assets/WA7LbagweovOYPx9pWgjVzxCpng.jpeg" src-width="1080" src-height="2374" align="center"/>

Filter by category to view specific records.

Physical Reward Claiming:

<img src="/assets/GOMxbz9h9oDbILxxDQJj449KpGb.png" src-width="750" src-height="1624" align="center"/>

Enter address and phone number.

<img src="/assets/CtAxb2xpOokAlKx90pqj92R3pBf.png" src-width="750" src-height="1626" align="center"/>

Confirm shipping information.

<img src="/assets/FysLbu2oboOMTfxsmVojnlVepLd.png" src-width="750" src-height="1296" align="center"/>

View logistics/tracking number.

## Entitlements Shop

Shop Entry:

[内联图片不支持]
[内联图片不支持]

My — My Market Data — Market Data Shop

Market Data Shop:

<img src="/assets/JnxLbykyaoN7oux5zBujGUDKpdT.jpeg" src-width="1080" src-height="2374" align="center"/>

Displays all products; tabs allow switching between product lists for different market data.

Purchasing a Product:

<img src="/assets/Qy6db1vlUoA01VxMQ2ijTT9LpQe.jpeg" src-width="1080" src-height="2374" align="center"/>

Select the appropriate product and package, then proceed to payment.

Viewing Purchase Records:

[内联图片不支持]
[内联图片不支持]

