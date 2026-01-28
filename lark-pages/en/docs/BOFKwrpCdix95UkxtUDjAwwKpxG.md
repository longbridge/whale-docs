---
title: System Introduction
slug: 2a05bab0c2cc81039fcee82d68166238
sidebar_position: 0
---


# System Introduction

# I. System Overview

When using the "Deposit Cryptocurrency" or "Withdraw Cryptocurrency" functions, any wallet addresses you use must complete the authentication and whitelisting process.

The operation flow of the wallet address authentication system may vary depending on the platform and wallet type. The following provides a graphic walkthrough of the wallet address authentication process using the HashKey Exchange platform as an example:

### Preparations

Confirm that your personal wallet supports message signing. HashKey Exchange does not, in principle, restrict wallet types; common software wallets such as MetaMask, Electrum, MyEtherWallet and hardware wallets such as Ledger Nano S and Trezor are all supported.

### Procedure

1. <b>Trigger Address Authentication:</b> When depositing, if your deposit source address is a personal wallet address and that address has not been certified by HashKey PRO, your virtual assets will automatically trigger address authentication after receiving a certain number of block confirmations.
2. <b>Select Authentication Method:</b> For example, using a MetaMask wallet, on the Add Deposit Whitelist page select the MetaMask authentication method and click [Connect MetaMask].
3. <b>Connect Wallet:</b> A wallet connection interface will appear. Confirm the wallet address that needs to be authenticated, click [Next], then click [Connect].
4. <b>Small-amount Payment Verification:</b> On the "Customer Wallet Addresses" page click the "Add Authentication" button, accurately enter the wallet address to be authenticated and the corresponding currency information, carefully verify the details, and submit. Log in to your personal cryptocurrency wallet and transfer the specified verification amount to the system-generated verification address.
5. <b>Complete Authentication:</b> After completing the small-amount payment verification, the address will be added to the deposit whitelist. Subsequent deposits can directly select that address without requiring reauthentication.

# II. Operating Instructions

## Permissions Preparation

Log in to the WBO backend system and confirm that you have been granted the operational permissions related to "Cryptocurrency", "Channel Custodial Accounts", and "Customer Wallet Addresses". If you do not have the necessary permissions, please contact an administrator to request them.

## Prerequisite: Cryptocurrency Data Maintenance (Primary Step for All Operations)

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: WBO - Business Parameter Settings - Fund Parameters - Cryptocurrency</p>
</div>

- Before conducting cryptocurrency deposit/withdrawal and wallet address authentication operations, backend operators must first complete the maintenance of cryptocurrency-related data:

1. Log in to the WBO backend system and navigate to Business Parameter Settings - Fund Parameters - Cryptocurrency;
2. Click "Add" or "Edit" and complete the basic information for the target cryptocurrency (such as currency code, name, authentication rules, etc.);
3. After verifying that the information is correct, submit to take effect to ensure subsequent authentication and deposit/withdrawal operations can proceed normally.

<img src="/assets/FOPsbi8yeoQ05fx5s6yjYgCZpih.png" src-width="3260" src-height="1124" align="center"/>

## Channel Custodial Account Import

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: WBO - Virtual Asset Management - Deposits &amp; Withdrawals - Channel Custodial Accounts</p>
</div>

1. Go to Virtual Asset Management - Deposits & Withdrawals - Channel Custodial Accounts;
2. Click "Batch Create" and upload the reviewed channel custodial account list (must conform to the system-specified format);
3. After import is complete, verify the account information is correct and click "Confirm". These accounts will be used for automatic allocation prior to customer authentication.

<img src="/assets/VyC1bx0Rxon0J4xTGXHj5FA7p8e.png" src-width="2510" src-height="1362" align="center"/>

## Authentication Record Monitoring

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: WBO - Virtual Asset Management - Deposits &amp; Withdrawals - Customer Wallet Addresses</p>
</div>

1. Access the "Customer Wallet Addresses" backend management page to view all customer authentication application records;
2. Support filtering by "Authentication Status", "Creation Time", "Customer ID", and other criteria. Click a single record to view details (including the allocated custodial account, payment information, verification results, etc.);
3. For "Unauthenticated" records, assist customers in troubleshooting (for example, verify whether the transfer has been received or whether the addresses match).

<img src="/assets/TSNqbTNipo24kFx4kFKjfcmXpLd.png" src-width="3288" src-height="1076" align="center"/>

## Whitelisting and Subsequent Management

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>📍 Menu path: WBO - Virtual Asset Management - Deposits &amp; Withdrawals - Customer Wallet Addresses</p>
</div>

1. After a customer address successfully completes authentication, the system will automatically include the address in the whitelist; the backend can view the list of whitelisted addresses;
2. Support status management for whitelisted addresses (such as deletion) to mitigate abnormal risks;
3. Periodically export authentication and whitelist records to complete compliance filing and data archiving.

<img src="/assets/BurebwE8KoZO9bxXtT4jEpdrpbf.png" src-width="3274" src-height="1082" align="center"/>

## Notes

1. The wallet address submitted for authentication must be owned by the customer. Do not submit another person's address for authentication, as this may affect the receipt of funds.
2. Funds used for the small-amount payment verification are solely for ownership verification; no fees are charged, and there is no need to withdraw them separately after authentication.
3. Keep records of operations and transfer receipts generated during the authentication process to facilitate subsequent troubleshooting.
4. If system anomalies occur (for example, the page cannot be opened or submission fails), please refresh the page or switch browsers; if the problem persists, contact the technical support team.
5. Strictly comply with cryptocurrency-related laws and platform rules. Fraudulent authentication will result in account restrictions and may lead to service termination in severe cases.

