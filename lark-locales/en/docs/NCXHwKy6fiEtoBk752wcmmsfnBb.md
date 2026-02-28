---
title: System Introduction
slug: NCXHwKy6fiEtoBk752wcmmsfnBb
sidebar_position: 2
---


# System Overview

# System Introduction

# Overview

The Whale Accounting System provides a solution that can automatically retrieve data sources and perform automated bookkeeping according to predefined accounts and entry rules, thereby completing account reconciliation. Key features include account configuration, entry rule configuration, consolidation rule configuration, accounting entries, account balances, account ledgers, and accounting data sources.

# Accounting Middle Office Process Description

<img src="/assets/TqHMwvV3RhbkQLb6B7pjx1OQpTe-board.jpeg"/>

# Parameter Settings

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>Service Parameter &gt; Accounting</p>
</div>

Securities firms must configure accounting parameters before using the Accounting Middle Office. These configurations include account attributes, chart of accounts, entry rules, fund types, consolidation rules, and business types.

## Account Attributes

Overview

Before using the Accounting Middle Office, a broker-dealer must configure account attributes.

<img src="/assets/OGmsbkh4uo6sA6xTKNIjogXKpcd.png" src-width="2928" src-height="1172" align="center"/>

Operation Button Descriptions

- New: Create custom account attributes according to the broker-dealer’s requirements.
- Edit: Manually edit existing account attributes.
- Delete: Delete existing account attributes.

Terminology

- Account Attributes: Generally, accounting accounts are classified according to their economic nature, and can be divided into asset accounts, liability accounts, owner’s equity accounts, cost and expense accounts, and profit and loss accounts. Because the economic content varies, the contents of accounting accounts differ; therefore, different accounts require different attributes to describe the economic content they represent.
- Balance Direction: Indicates the side on which the balance resides after offsetting the debit and credit amounts for accounts under the given attribute. Enumeration options are: Debit, Credit, and Both (meaning that different accounts under the attribute can be individually designated as debit or credit). For example: if an account attribute’s balance direction is defined as Debit, all accounts under that attribute will retain balances on the debit side; if an account’s total debits exceed total credits, the account balance is positive, and vice versa.

Operating Steps

Step 1: Before using the Accounting Middle Office, complete the configuration of accounting parameters. The first step is to add account attributes.

Step 2: For account attributes that have not been bound to chart of accounts, modifications can be made in the backend.

<img src="/assets/Tf9lb7QemoSPQVxmqaDjtjPipad.png" src-width="1280" src-height="490" align="center"/>

- Note: If the current account attribute is already bound to chart of accounts, it cannot be modified; attempting to modify will cause the system to report an error as shown below:

<img src="/assets/FIQYb4TsGo1yL9xTtagjrPcvp4g.png" src-width="546" src-height="110" align="center"/>

Step 3: For account attributes that have not been bound to chart of accounts, deletion can be performed in the backend.

<img src="/assets/DDuKbaThKoZQAtxTnrvj9eIsp6d.png" src-width="2978" src-height="1216" align="center"/>

- Note: If the current account attribute is already bound to chart of accounts, it cannot be deleted.

<img src="/assets/IB4Ab7OL2o73LWx2bJoj2AVEpdf.png" src-width="514" src-height="102" align="center"/>

## Chart of Accounts

Overview

After configuring account attributes, you must configure the chart of accounts according to the broker-dealer’s requirements.

<img src="/assets/HbWxbhWgqoXtF5xoaJjjD0Qopte.png" src-width="1280" src-height="498" align="center"/>

Operation Button Descriptions

- Bulk Import: Use this option to add a large number of accounts at once when the broker-dealer needs to add many accounts.
- New: Create a single customized account according to the broker-dealer’s needs.
- Edit: Manually edit existing accounts.
- Delete: Delete existing accounts.

Terminology

- Account Code: The system assigns a unique code to each account.
- External Account Code: Because broker-dealers integrate with different financial systems, account names and codes in the broker-dealer’s financial system may differ from those in the Accounting Middle Office. To enable the Accounting Middle Office to export financial statements according to the broker-dealer’s financial software requirements, the broker-dealer must define the corresponding account codes for their financial software in the chart of accounts, referred to as external account codes.
- Accounting Accounts: A collection of accounts defined for classification and accounting of accounting elements according to the nature of economic transactions and management requirements. Accounting accounts are categorized by their level of detail and hierarchy into summary accounts and detailed accounts. Summary accounts can correspond to first-level accounts in the Accounting Middle Office, while detailed accounts correspond to second- or third-level accounts.
    To maintain consistency in the Accounting Middle Office, the detailed accounts used for entry bookkeeping are standardized as three-level accounts.

Operating Steps

Step 1: After configuring account attributes, add accounts under the corresponding attributes. Since the system supports three-level accounts, operators must add accounts progressively in the backend. Choose bulk import or single creation based on the number of accounts.

- Create accounts one by one:
    <img src="/assets/VhlpbIVHAoRpZixvt5mjQLP0pJd.png" src-width="1280" src-height="497" align="center"/>
    <img src="/assets/NThybxxmZoZ9Xsxow1njSCvRpHc.png" src-width="1280" src-height="514" align="center"/>
    - First create a first-level account in the backend.
    - Create the corresponding second-level account under the first-level account.
    - Create the corresponding third-level account under the second-level account.
    - Bulk Import: Prepare the accounts to be imported using the template provided in the backend, then import the file.

Step 2: Existing accounts can be modified in the backend.
-  Note: Edited accounts will apply to subsequent accounting entries. To update historical accounting entries that have already been generated, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Details.

<img src="/assets/X1FkbZrmYo0iTCx9gCLjtYnup4e.png" src-width="2958" src-height="1290" align="center"/>

Step 3: Accounts that have not been configured with entry rules or that have not been used for accounting entries can be deleted in the backend. Delete all third-level accounts first, then the corresponding second-level accounts, and finally the first-level accounts.
<img src="/assets/J6eZb5ApfojbsExR6Ytj1oGRpyb.png" src-width="2898" src-height="1254"/>
- Note: If the account has entry rules configured or has been used for bookkeeping, it cannot be deleted.

## Entry Rules

Overview

Before generating journal entries, configure entry rules according to the broker-dealer’s actual business needs.

<img src="/assets/XVmEbMpiToBKWtxxhpzjn0repbA.png" src-width="1280" src-height="493" align="center"/>

Operation Button Descriptions

- New: Add entry rules for business scenarios as required by the broker-dealer.
- Edit: Manually edit existing entry rules.
- Copy: Duplicate the current entry rule to facilitate creating similar rules.
- Delete: Delete existing entry rules.

Terminology

- Entry Rules: To ensure the system can automatically generate accounting entries after retrieving data sources, the broker-dealer must configure rules in the backend that map data sources to the resulting output entries.
- Payment Transactions: Detailed records of client transaction movements maintained by the broker-dealer, including withdrawals, deposits, stock buys, stock sells, currency exchanges, etc.
- Customer Charges Statement: Because payment transactions aggregate various client transaction fees (for example, stock trading fees may be aggregated as commissions, platform fees, and third-party charges), they may not meet accounting posting requirements. The detailed breakdown of customer charges must be parsed and used as an accounting data source.
- Bank Statement: Records of all actual cash movements in the broker-dealer’s bank accounts. After tagging by various criteria, bank statements can serve as a data source for cash-flow accounting.

Operating Steps

Step 1: After adding the broker-dealer’s accounts, create entry rules based on the business types of data sources. The Accounting Middle Office currently supports data sources such as payment transactions, bank statements, customer charges statements, CCASS statements, new-share statements, agent charges, business bill summaries, channel remittance slips, etc. Below we introduce how to configure entry rules for payment transactions, bank statements, and customer charges statements; operations for other data sources can be referenced accordingly.

<img src="/assets/ARHqbuNXfoSf3PxVbuRjY5Phpwg.png" src-width="1280" src-height="493" align="center"/>

- How to add entry rules for "Payment Transactions"

<img src="/assets/WLq7b4QJVowzFKx5UlBj0bPppUc.png" src-width="2374" src-height="2884" align="center"/>

- How to add entry rules for "All Client Fee List"

<img src="/assets/H87MbbcAmoY9mYxYIRhjen6Rprd.png" src-width="2756" src-height="1246" align="center"/>

- How to add entry rules for "Bank Statement"

<img src="/assets/N11RbB7XOoxxqDxY038j1dSppDa.png" src-width="2738" src-height="1284" align="center"/>

Step 2: Configured entry rules can be modified in the backend.
- Note: Edited entry rules will apply to subsequent accounting entries. To update historical accounting entries that have already been generated, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Details.
<img src="/assets/M9ZmbK6rpoB2HPxJJZ2j5G29pOh.png" src-width="2932" src-height="1200"/>

<img src="/assets/NZPYbkBgWoykKyxG8jRjKW1UpRe.png" src-width="2370" src-height="4522" align="center"/>

Step 3: Configured entry rules can be deleted in the backend.
- Note: Deleting an entry rule affects only subsequently generated entries; historical entries will update only after a re-run.
<img src="/assets/NE5nbeOcFoAVg4xUeI6jGAegp3e.png" src-width="2950" src-height="1278" align="center"/>

Step 4: To add similar entry rules, use the backend copy function.

<img src="/assets/RjYXbJZ2moCqWexNe8JjzZ68pHe.png" src-width="2938" src-height="1238" align="center"/>

## Fund Types

Overview

Customize fund types for bank statements obtained by the broker-dealer.

<img src="/assets/VrhZbnXsaoMODCx8yWXj9crvpod.png" src-width="2930" src-height="628" align="center"/>

Operation Button Descriptions

- New: Create different fund type labels according to the broker-dealer’s bank statements.
- Edit: Edit added fund types with multilingual support.
- Delete: Delete existing fund types.

Terminology

- Fund Type: The classification name for bank statement business categories.

Operating Steps

Step 1: To add a fund type, add it in the backend according to needs.

<img src="/assets/Hx4Qbw3gYoJHmbxmuhajE1Ykp1d.png" src-width="2878" src-height="1060" align="center"/>

Step 2: If an unused fund type needs to be deleted, perform deletion in the backend.

<img src="/assets/TbNNbwKNEoLETQxWmjojnWpPp5b.png" src-width="2916" src-height="1094" align="center"/>

Note: If the current fund type is already used by a bank statement, it cannot be deleted.

<img src="/assets/JEcBbN9XJosgJ1xdWWjjhbQSpRh.png" src-width="464" src-height="100" align="center"/>

## Consolidation Rules

Overview

If the broker-dealer requires consolidated financial statements, customize consolidation rules.

<img src="/assets/A5UYbRXwVoDzWdxKlw7jU0Jxp9c.png" src-width="2904" src-height="1208" align="center"/>

<img src="/assets/SE7ubfvBqoT3AIx2W0ujZiPPpyb.png" src-width="2950" src-height="884" align="center"/>

Operation Button Descriptions

- New: Add consolidation rules for reports according to the broker-dealer’s needs.
- Edit: Manually edit existing consolidation rules.
- Copy: Quickly create new rules by copying existing consolidation rules.
- Delete: Delete existing consolidation rules.

Terminology

- Consolidation Rules: To satisfy different broker-dealers’ preferences for accounting granularity, the backend supports consolidation rule configuration. Two consolidation methods are supported: separate debit/credit consolidation and debit-credit netting consolidation. Separate consolidation aggregates debits or credits by their own accounts; netting consolidation offsets debit and credit amounts based on the same or different configured accounts before consolidation.

Operating Steps

Step 1: To add a consolidation rule, add it in the backend according to needs.

- Note: If the selected business types for the new consolidation rule have no configured entry rules, the rule cannot be created.

<img src="/assets/B8DpbDNFyo6uQ6xpMStjXss4pwh.png" src-width="2098" src-height="2806" align="center"/>

Step 2: Configured consolidation rules can be modified in the backend.

<img src="/assets/Q2aobjr2AoRFLBxiCEOjtivRpMf.png" src-width="2914" src-height="1044" align="center"/>

- Note: Edited consolidation rules will apply to subsequent consolidated entries. To update historical consolidated entries, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Consolidation.

Step 3: Configured consolidation rules can be deleted in the backend.

<img src="/assets/YVFyb2cj6oVxCgxfYiujwDGzpVb.png" src-width="2922" src-height="954" align="center"/>

- Note: Deleting a consolidation rule affects only subsequently generated consolidated entries; historical consolidated entries will update only after a re-run.

## Business Types

Overview

Business types are labels that distinguish various bookkeeping data source business scenarios. This feature allows clients to configure whether certain business types should be accounted for.

<img src="/assets/FKUwbT5C3oqnGmxRstvjpqU4pTf.png" src-width="2910" src-height="1174" align="center"/>

Operation Button Descriptions

- New: Configure business types according to the broker-dealer’s needs.
- Edit: Manually edit existing business types.

Terminology

- Business Type: A label used to distinguish among various bookkeeping data source business scenarios.

Operating Steps

Step 1: To add a business type, add it in the backend according to needs.

<img src="/assets/WmKIbai0IoE0ojxkuDyj4N1fpJS.png" src-width="2930" src-height="1326" align="center"/>

Step 2: Configured business types can be modified in the backend.

<img src="/assets/S3ymbm1f6oxpIMxKcn3jZE0BpWg.png" src-width="2942" src-height="1260" align="center"/>

- Note: Edited business types will apply to subsequent entries. To update historical entries, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Details.

# Accounting Entries

## Use Cases

When deposits, withdrawals, or trades occur within the securities system, the system can automatically obtain payment transactions, customer charges statements, or other entry data sources and, based on the client’s initial accounting parameter configuration, automatically generate detailed and consolidated accounting entries.

## Prerequisites

Possession of Accounting Middle Office menu permissions and prior configuration of the accounting-related parameters.

## Accounting Entries List

Menu: Securities Backend &gt; Accounting &gt; Accounting Entries

This function allows querying and maintaining accounting entries. Detailed accounting entries serve as the basis for consolidated entries, and consolidated accounting entries are used to export financial statements for external financial systems.

<img src="/assets/EThSbFwp8oHVCBxB3oxjXGg0pyc.png" src-width="2930" src-height="1206" align="center"/>

<img src="/assets/C7aQbUtEVo54umxQrz7jEyxGpbP.png" src-width="2950" src-height="1192" align="center"/>

First, the system supports configuring entry rules per different data sources, enabling automatic generation of accounting entries from the data sources. For data sources that cannot be configured automatically, this function provides batch import and manual entry methods:

If entries are generated automatically, the task provides an Edit function to modify generated entry records; payment transactions records will display an added check number field.

<img src="/assets/X1WhbVmWUobg6yxiJuUjkzVapdb.png" src-width="2948" src-height="1100" align="center"/>

<img src="/assets/GRI5bU5QioUFAPxZ92IjGkTMpSc.png" src-width="2258" src-height="2402" align="center"/>

If only a small number of manual entries are required, choose Manual Entry.

<img src="/assets/ZX5KbBp9voVNZ8xmND2jLOkzpwg.png" src-width="2854" src-height="1258" align="center"/>

<img src="/assets/HiL4bJ4dioEtWoxZzUnjCA0Apkh.png" src-width="2346" src-height="2728" align="center"/>

You can also choose Bulk Import: download the template first, prepare entries according to the template, and then import them into the system.

<img src="/assets/YLrvbI8YyoFl64xmq4GjSGHepwg.png" src-width="2952" src-height="1222" align="center"/>

Use the Delete button in the operations area on the right of a record to delete that accounting entry.

<img src="/assets/LQDtbBQwToXRrExGGNcjoTFNptb.png" src-width="2932" src-height="756" align="center"/>

If a data source for a given accounting date is incomplete, select the data source for that date and Re-run; the system will update the data source and generate the latest accounting entry data.

<img src="/assets/R3i5biLrgo8okvxn1roj8KDzpSc.png" src-width="2958" src-height="1154" align="center"/>

If the system-generated accounting entries have been verified, manually select Summarize to generate the account balance summary.

<img src="/assets/CI0obKpx2oBrOkx8tL0jNdABpVe.png" src-width="2976" src-height="942" align="center"/>

A Report Export button has been added to Accounting Entries to facilitate exporting reports in formats required by financial software.

<img src="/assets/EkMnbwpX0oLAO8xPiZSjG3sTp2g.png" src-width="2926" src-height="1120" align="center"/>

Provide consolidated accounting entry query functionality. When consolidating accounting entries, the system retrieves exchange rates by accounting date.

<img src="/assets/Bf0Dbb3IJozyWXx3EOAjL9qRpPh.png" src-width="2890" src-height="1286" align="center"/>

If the corresponding consolidation rule has been updated, select the consolidated entries for the corresponding date and Re-run.

<img src="/assets/TojPbjvfaoAlCWxk2Qaj2G8LpTc.png" src-width="2916" src-height="1224" align="center"/>

# Account Balances

## Use Cases

View balances by account based on accounting entry records.

## Prerequisites

Possession of Accounting Middle Office menu permissions and existing data in the accounting entries module.

## Account Balances List

Menu: Accounting &gt; Account Balances

The system performs daily aggregation of account ledgers by accounting date to form the account balance summary.

<img src="/assets/CMUBb8fUEoyiNcxjDEDjjCD0pQg.png" src-width="2892" src-height="966" align="center"/>

# Account Ledger

## Use Cases

View account ledgers by account based on accounting entry records.

## Prerequisites

Possession of Accounting Middle Office menu permissions and existing data in the accounting entries module.

## Account Ledger List

Menu: Accounting  &gt; Account Details

Query the system’s account ledgers displayed by account in this function.

<img src="/assets/Kh1Wbp2jNoCfLXx0lTcjvxKhpfd.png" src-width="2964" src-height="1192" align="center"/>

# Bank Balances

## Use Cases

Users need to perform multi-dimensional reconciliations between bank-provided transaction records and the system’s internal records.

## Prerequisites

Bank transaction records and backend records have both been generated.

## Dimensions Display

Statement Reconciliation

Menu: Accounting &gt; Bank Balances &gt; Bank Balance Reconciliation Tab

Compare computed results based on historical transaction amounts in bank statements with historical bank balances to ensure the accuracy and completeness of bank statement details.

<img src="/assets/VGnrbFVOuoAB9Px6p37jY8rhpVx.png" src-width="2966" src-height="1160" align="center"/>

# Historical Balances

Menu: Accounting  &gt; Bank Balances &gt; Bank Balance Records Tab

Refers to the actual bank balances of all the broker-dealer’s bank accounts on a given accounting date.

Batch import is supported.

<img src="/assets/I63BbZX4ioM3jxxpyvNj1nwvp4b.png" src-width="2970" src-height="1138" align="center"/>

<img src="/assets/SnGLbAyLJoLSrjxHG3jj84gOpEd.png" src-width="2962" src-height="1160" align="center"/>

# Real-time Balances

Menu: Accounting  &gt; Bank Balances &gt; Account Balance Query Tab

Refers to the real-time balances of bank accounts for which the broker-dealer has integrated APIs.

<img src="/assets/G6zMbkuLso2gxoxTRqujfkYgp7e.png" src-width="2924" src-height="630" align="center"/>

# Accounting Data Sources

## Use Cases

When bookkeeping, users must classify and organize various detailed accounting materials and handle exceptional data separately.

## Prerequisites

Payment transactions, customer charges statements, bank statements, CCASS data, etc., are all prepared.

## Exception Data Sources

Menu: Accounting  &gt; Entry Data Sources &gt; Exceptions  Tab

Data sources that cannot automatically generate entries are treated as exceptions by the system and can be queried in this function.

<img src="/assets/UbDqbIjIVoPrM7xcQiwjZeCApIf.png" src-width="2914" src-height="930" align="center"/>

For exception data sources, clicking the "Exception Data Source Number" in the record list navigates to the specific data source.

<img src="/assets/CyKxb1wTwo5c2dxxz3ljogtapi9.png" src-width="2944" src-height="946" align="center"/>

## Customer Charges Statement

Menu: Accounting  &gt; Entry Data Sources  &gt; All Client Fee List Tab

Because payment transactions aggregate various transaction fees charged to customers (for example, stock trading fees aggregated as commissions, platform fees, and third-party charges), they may not satisfy accounting posting requirements. The detailed breakdown of customer charges must be parsed and used as an accounting data source.

Customer charges statements for stock transaction types can be configured more granularly, supporting separate identification of dark pool trades; dark pool trades can be configured with separate entry rules to generate accounting entries.

The Accounting Data Sources “All Client Fee List” adds an Accounting Date field, which is used as the accounting date value for accounting entries.

<img src="/assets/SLpkblNx2ol9Gzx8YWxjBGZnp01.png" src-width="2896" src-height="1110" align="center"/>

If a customer charges statement does not require bookkeeping, delete the record in the backend.

<img src="/assets/T7eGb5k3zo5bfGxWEsejsCd5pxg.png" src-width="2924" src-height="924" align="center"/>

If a customer charges statement for a given accounting date is inaccurate, re-run it in the backend.

<img src="/assets/NKDPbUYDWoZwD6xtwodjrVv8pyf.png" src-width="2940" src-height="1026" align="center"/>

## Payment Transactions

Menu: Accounting  &gt; Entry Data Sources &gt; Payment Transactions Tab

Records of user transaction movements maintained by the broker-dealer. The Accounting Middle Office standardizes retrieval based on transfers, withdrawals, and deposits, using these as information-flow data for accounting entries.

<img src="/assets/Y2yybJU8wotyvExCvs1jlCvNpwh.png" src-width="2936" src-height="934" align="center"/>

If a payment transaction record does not require bookkeeping, delete it in the backend.

<img src="/assets/WtX4bZXizonYzdxYRLtjINijpNR.png" src-width="2944" src-height="886" align="center"/>

If a payment transaction for a given accounting date is inaccurate, re-run it in the backend.

<img src="/assets/UhpXbWwEUoKMcXxce3bjKYdypbd.png" src-width="2944" src-height="1038" align="center"/>

## CCASS Statements

Menu: Accounting  &gt; Entry Data Sources &gt; CCASS Statements Tab

Add CCASS file parsing. After importing related CCASS files, the system automatically processes accounting entries according to configuration. Query or delete imported data-source entries in this tab.

<img src="/assets/NC3GbfJ84oE1fNxfbM7jr3TapDg.png" src-width="2924" src-height="1146" align="center"/>

## New Share Statements

Menu:  Accounting  &gt; Entry Data Sources &gt; New Share Statements Tab

Add new share statements.

<img src="/assets/SYvvbXW0zo40ElxdhE6jz5vhpPf.png" src-width="2958" src-height="1122" align="center"/>

## Agent Charges

Menu: Accounting  &gt; Entry Data Sources  &gt; Broker Fee Tab

To capture fees under institutional agreements and satisfy broker-dealers’ bookkeeping requirements for onboarding fees, Agent Charges are added as an accounting data source.

<img src="/assets/YOm9bdWK8ooSpSxYYY2jo1VYpGd.png" src-width="2908" src-height="974" align="center"/>

## Bank Statements

Menu: Cash Management &gt; Bank Statements &gt; Bank Statement Tab

Records of all actual cash movements in the broker-dealer’s bank accounts. After tagging by various criteria, bank statements can serve as a data source for cash-flow accounting.

<img src="/assets/N0m1bYiTRoAw6XxejSAjzchWp9b.png" src-width="2934" src-height="1190" align="center"/>

If a bank statement’s fund type is unknown, modify it manually in the backend.

<img src="/assets/L0u7bydi9ohfGuxnxVUjvgZ5p9g.png" src-width="2906" src-height="1282" align="center"/>

<img src="/assets/MFvCbWyOKoACECxgFcoj3TwkpLh.png" src-width="2866" src-height="1230" align="center"/>

If bank statement data is missing, import files in the backend.

<img src="/assets/TpRBbQBL3oZDLzxLoYKjjh01p1e.png" src-width="2896" src-height="704" align="center"/>

If a bank statement record has issues, delete it in the backend.

<img src="/assets/ZCd9bZL5uo6SjxxHbSLjYDh2psb.png" src-width="2946" src-height="936" align="center"/>

If deposit and withdrawal statements are updated, re-run them in the backend.

<img src="/assets/Xrg8bhXrXow5BLxUPE5jPF8Apqh.png" src-width="2914" src-height="862" align="center"/>

# Funds in Transit

## Use Cases

Provide records to track client funds that are in the process of deposit and not yet completed.

## Prerequisites

Deposit process not completed.

Menu: Accounting  &gt; Deposit in transit &gt; Details

Provides aggregated record queries for funds in transit.

<img src="/assets/ULhrbweKcogqsMxCJTcj3FmwpWQ.png" src-width="2922" src-height="1172" align="center"/>

Menu: Accounting  &gt; Deposit in transit &gt; Summary check

Provides summary reconciliation results for funds in transit against bank statements.

<img src="/assets/GnBkbbyZPofLE9xYQJGjlj9HprU.png" src-width="2894" src-height="1190" align="center"/>

