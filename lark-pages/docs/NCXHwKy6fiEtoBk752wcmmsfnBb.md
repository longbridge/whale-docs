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

<img src="/assets/EoRWbG4AqoOEQ7xohdEjhEZIpHd.png" src-width="874" src-height="553" align="center"/>

# Parameter Settings

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Business Parameter Settings &gt; Accounting Parameters</p>
</div>

Securities firms must configure accounting parameters before using the Accounting Middle Office. These configurations include account attributes, chart of accounts, entry rules, fund types, consolidation rules, and business types.

## Account Attributes

Overview

Before using the Accounting Middle Office, a broker-dealer must configure account attributes.

<img src="/assets/LnkCbAgkXoEjRJxlHoIjm8rgpwg.png" src-width="3814" src-height="1598" align="center"/>

Operation Button Descriptions

- New: Create custom account attributes according to the broker-dealer’s requirements.
- Edit: Manually edit existing account attributes.
- Delete: Delete existing account attributes.

Terminology

- Account Attributes: Generally, accounting accounts are classified according to their economic nature, and can be divided into asset accounts, liability accounts, owner’s equity accounts, cost and expense accounts, and profit and loss accounts. Because the economic content varies, the contents of accounting accounts differ; therefore, different accounts require different attributes to describe the economic content they represent.
- Balance Direction: Indicates the side on which the balance resides after offsetting the debit and credit amounts for accounts under the given attribute. Enumeration options are: Debit, Credit, and Both (meaning that different accounts under the attribute can be individually designated as debit or credit). For example: if an account attribute’s balance direction is defined as Debit, all accounts under that attribute will retain balances on the debit side; if an account’s total debits exceed total credits, the account balance is positive, and vice versa.

Operating Steps

Step 1: Before using the Accounting Middle Office, complete the configuration of accounting parameters. The first step is to add account attributes.

<img src="/assets/Zx2ibNoMgoRc7HxuzxQjvLu0pSd.png" src-width="3407" src-height="1427" align="center"/>

Step 2: For account attributes that have not been bound to chart of accounts, modifications can be made in the backend.

<img src="/assets/JdFHbjFkbosVenxzf1ejUyccp2e.png" src-width="3300" src-height="1428" align="center"/>

- Note: If the current account attribute is already bound to chart of accounts, it cannot be modified; attempting to modify will cause the system to report an error as shown below:

<img src="/assets/QfuCbXsHdol5y8xk9vijGkHFpud.png" src-width="360" src-height="106" align="center"/>

Step 3: For account attributes that have not been bound to chart of accounts, deletion can be performed in the backend.

<img src="/assets/ViYjbzNACo97x4x0Tndju2ZjpAd.png" src-width="3288" src-height="1034" align="center"/>

- Note: If the current account attribute is already bound to chart of accounts, it cannot be deleted.

<img src="/assets/EGDCbGKsUoLlVFx5sGrjOHPFpXc.png" src-width="368" src-height="104" align="center"/>

## Chart of Accounts

Overview

After configuring account attributes, you must configure the chart of accounts according to the broker-dealer’s requirements.

<img src="/assets/NUwpb427KoZn6txAn3ljFLsJpO0.png" src-width="3820" src-height="1622" align="center"/>

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
    <img src="/assets/XXJyb4DQeoIFy7xUQkUjGezrpEe.png" src-width="3415" src-height="1500" align="center"/>
    <img src="/assets/PK5Fbwr85oAIC3xa1JejiODbpHM.png" src-width="3421" src-height="1539" align="center"/>
    <img src="/assets/CDIKbJ2eiop1PrxlxCCjJ8hIpwd.png" src-width="3413" src-height="1549" align="center"/>
    <img src="/assets/Ff85b2XL6oAdw7xdZ94jXbQMpZm.png" src-width="3358" src-height="1480" align="center"/>
    <img src="/assets/Q5LjbtcHMoQiZsxkYCkjglbVpD4.png" src-width="2225" src-height="666" align="center"/>
    - First create a first-level account in the backend.
    - Create the corresponding second-level account under the first-level account.
    - Create the corresponding third-level account under the second-level account.
    - Bulk Import: Prepare the accounts to be imported using the template provided in the backend, then import the file.

Step 2: Existing accounts can be modified in the backend.

```text
- Note: Edited accounts will apply to subsequent accounting entries. To update historical accounting entries that have already been generated, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Details.

    ![image.png](/assets/3f79305674fc2d8825851dee40e35d85.png)
```

Step 3: Accounts that have not been configured with entry rules or that have not been used for accounting entries can be deleted in the backend. Delete all third-level accounts first, then the corresponding second-level accounts, and finally the first-level accounts.

```text
![image.png](/assets/a22d9dd54d148715827b784a581513df.png)

- Note: If the account has entry rules configured or has been used for bookkeeping, it cannot be deleted.
```

## Entry Rules

Overview

Before generating journal entries, configure entry rules according to the broker-dealer’s actual business needs.

<img src="/assets/RIShbvddJoKWlYxG4L0jNaoVpee.png" src-width="2870" src-height="1226" align="center"/>

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

<img src="/assets/WXBbbncTtoPpscx6gCWjdKpZpSg.png" src-width="3437" src-height="906" align="center"/>

- How to add entry rules for "Payment Transactions"

<img src="/assets/OYPVbdgJ9og1U6xPDvMjzYIRpHh.png" src-width="2736" src-height="4936" align="center"/>

- How to add entry rules for "Customer Charges Statement"

<img src="/assets/Xai6b5ep9oJqxIxIF6Ojm332pmc.png" src-width="2664" src-height="3890" align="center"/>

- How to add entry rules for "Bank Statement"

<img src="/assets/K8YibYBFyozVUBxr7t2jZ1KNpWf.png" src-width="2646" src-height="3740" align="center"/>

Step 2: Configured entry rules can be modified in the backend.

```text
- Note: Edited entry rules will apply to subsequent accounting entries. To update historical accounting entries that have already been generated, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Details.
```

<img src="/assets/F6ngbjfjzolDCnxgNblj5ad0pef.png" src-width="3278" src-height="1282" align="center"/>

<img src="/assets/L0lwbi5wVoJ3nvxFVVZj7xyzpTc.png" src-width="2492" src-height="4530" align="center"/>

Step 3: Configured entry rules can be deleted in the backend.

```text
- Note: Deleting an entry rule affects only subsequently generated entries; historical entries will update only after a re-run.
```

<img src="/assets/ANJCb19rzoemeLxgjAyjPozhpne.png" src-width="3276" src-height="1304" align="center"/>

Step 4: To add similar entry rules, use the backend copy function.

<img src="/assets/NBfBbJpnsoy9QjxKtI7jvPW4pLh.png" src-width="3252" src-height="1246" align="center"/>

## Fund Types

Overview

Customize fund types for bank statements obtained by the broker-dealer.

<img src="/assets/H09UbOClHoAHpIxARMBjtZUFp8g.png" src-width="3282" src-height="596" align="center"/>

<img src="/assets/EYi4bHbTboV7DKxXpgaj4zD9pNT.png" src-width="3314" src-height="1236" align="center"/>

Operation Button Descriptions

- New: Create different fund type labels according to the broker-dealer’s bank statements.
- Edit: Edit added fund types with multilingual support.
- Delete: Delete existing fund types.

Terminology

- Fund Type: The classification name for bank statement business categories.

Operating Steps

Step 1: To add a fund type, add it in the backend according to needs.

<img src="/assets/K0jpbTe5oopSYwxn8NijuST2pKg.png" src-width="3248" src-height="834" align="center"/>

Step 2: If an unused fund type needs to be deleted, perform deletion in the backend.

<img src="/assets/YiR6bc59Go9We1x3OwcjXmqspxe.png" src-width="3278" src-height="724" align="center"/>

Note: If the current fund type is already used by a bank statement, it cannot be deleted.

<img src="/assets/TaE6bQ9O7oEB8Ax73j8jQ4uzp1e.png" src-width="362" src-height="114" align="center"/>

## Consolidation Rules

Overview

If the broker-dealer requires consolidated financial statements, customize consolidation rules.

<img src="/assets/OYT8br4TWo4OajxOSozjRt7JpEP.png" src-width="3276" src-height="780" align="center"/>

<img src="/assets/JuPibup6co5jeBxt2WNj4jtaptb.png" src-width="1846" src-height="735" align="center"/>

Operation Button Descriptions

- New: Add consolidation rules for reports according to the broker-dealer’s needs.
- Edit: Manually edit existing consolidation rules.
- Copy: Quickly create new rules by copying existing consolidation rules.
- Delete: Delete existing consolidation rules.

Terminology

- Consolidation Rules: To satisfy different broker-dealers’ preferences for accounting granularity, the backend supports consolidation rule configuration. Two consolidation methods are supported: separate debit/credit consolidation and debit-credit netting consolidation. Separate consolidation aggregates debits or credits by their own accounts; netting consolidation offsets debit and credit amounts based on the same or different configured accounts before consolidation.

Operating Steps

Step 1: To add a consolidation rule, add it in the backend according to needs.

<img src="/assets/DCNRbL8C6omYiwxCMBDjk1G7pke.png" src-width="2396" src-height="4954" align="center"/>

- Note: If the selected business types for the new consolidation rule have no configured entry rules, the rule cannot be created.

<img src="/assets/WZIabpPpLoqBMhxA5Nsjb9eEpTg.png" src-width="2680" src-height="3140" align="center"/>

Step 2: Configured consolidation rules can be modified in the backend.

<img src="/assets/C36MbMM5iotDwux0vqnjSUUepGc.png" src-width="3258" src-height="780" align="center"/>

- Note: Edited consolidation rules will apply to subsequent consolidated entries. To update historical consolidated entries, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Consolidation.

Step 3: Configured consolidation rules can be deleted in the backend.

<img src="/assets/UnJ2bDndkoJdoMxq2AGjifaUphh.png" src-width="3256" src-height="618" align="center"/>

- Note: Deleting a consolidation rule affects only subsequently generated consolidated entries; historical consolidated entries will update only after a re-run.

## Business Types

Overview

Business types are labels that distinguish various bookkeeping data source business scenarios. This feature allows clients to configure whether certain business types should be accounted for.

<img src="/assets/KDG7b8qBfo5ZjQxfRuHjuhIPp4e.png" src-width="3772" src-height="1622" align="center"/>

Operation Button Descriptions

- New: Configure business types according to the broker-dealer’s needs.
- Edit: Manually edit existing business types.

Terminology

- Business Type: A label used to distinguish among various bookkeeping data source business scenarios.

Operating Steps

Step 1: To add a business type, add it in the backend according to needs.

<img src="/assets/NHtJbsNr1oYC3SxC2VNjkzHIprc.png" src-width="3298" src-height="1410" align="center"/>

Step 2: Configured business types can be modified in the backend.

<img src="/assets/YNgEbVeMBo9wh3xa73Zj2WWKpoe.png" src-width="3266" src-height="1360" align="center"/>

- Note: Edited business types will apply to subsequent entries. To update historical entries, re-run the process at Securities Backend - Accounting Middle Office - Accounting Entries - Details.

# Accounting Entries

## Use Cases

When deposits, withdrawals, or trades occur within the securities system, the system can automatically obtain payment transactions, customer charges statements, or other entry data sources and, based on the client’s initial accounting parameter configuration, automatically generate detailed and consolidated accounting entries.

## Prerequisites

Possession of Accounting Middle Office menu permissions and prior configuration of the accounting-related parameters.

## Accounting Entries List

Menu: Securities Backend &gt; Accounting Middle Office &gt; Accounting Entries

This function allows querying and maintaining accounting entries. Detailed accounting entries serve as the basis for consolidated entries, and consolidated accounting entries are used to export financial statements for external financial systems.

<img src="/assets/IjOnbDcoCoxX1cxqQLwjjo8Apzb.png" src-width="3794" src-height="922" align="center"/>

<img src="/assets/RWPtbXxY5oX9vsxlEhAjPVOZpM5.png" src-width="3282" src-height="1646" align="center"/>

First, the system supports configuring entry rules per different data sources, enabling automatic generation of accounting entries from the data sources. For data sources that cannot be configured automatically, this function provides batch import and manual entry methods:

If entries are generated automatically, the task provides an Edit function to modify generated entry records; payment transactions records will display an added check number field.

<img src="/assets/E0lgbYR6to6bkUxhAjgjkWNFpch.png" src-width="2658" src-height="1412" align="center"/>

<img src="/assets/QzTgbC35BofK4ExZkgkjUu5hppg.png" src-width="3270" src-height="2754" align="center"/>

If only a small number of manual entries are required, choose Manual Entry.

<img src="/assets/Ua1ZbRAktoI1m4xZWEkjwXLSpAf.png" src-width="2502" src-height="1330" align="center"/>

<img src="/assets/GvInbrk9SoXqEFxWhR1jxkdNpfb.png" src-width="3290" src-height="2782" align="center"/>

You can also choose Bulk Import: download the template first, prepare entries according to the template, and then import them into the system.

<img src="/assets/FETObXtVGok32pxJEYTjTeu6pQd.png" src-width="3246" src-height="1534" align="center"/>

Use the Delete button in the operations area on the right of a record to delete that accounting entry.

<img src="/assets/UrF8b6MHMoCTuOxwMkajnMVgpce.png" src-width="3364" src-height="1474" align="center"/>

If a data source for a given accounting date is incomplete, select the data source for that date and Re-run; the system will update the data source and generate the latest accounting entry data.

<img src="/assets/ZJhTbEvv3or5SdxguSGj1rKrpbf.png" src-width="3362" src-height="1396" align="center"/>

If the system-generated accounting entries have been verified, manually select Summarize to generate the account balance summary.

<img src="/assets/Svacb6zfyo2gfCxdIAPjalhipyc.png" src-width="3370" src-height="1452" align="center"/>

A Report Export button has been added to Accounting Entries to facilitate exporting reports in formats required by financial software.

<img src="/assets/Eej1bts6uoxKoXxdfgkjN1ekpdf.png" src-width="3400" src-height="1842" align="center"/>

Provide consolidated accounting entry query functionality. When consolidating accounting entries, the system retrieves exchange rates by accounting date.

<img src="/assets/LbEBbEcZyo9tPSx3BbbjhDMNpDd.png" src-width="3348" src-height="1418" align="center"/>

If the corresponding consolidation rule has been updated, select the consolidated entries for the corresponding date and Re-run.

<img src="/assets/HXVrb15d3oj6NrxeJ3Tji5AapLc.png" src-width="3294" src-height="1692" align="center"/>

# Account Balances

## Use Cases

View balances by account based on accounting entry records.

## Prerequisites

Possession of Accounting Middle Office menu permissions and existing data in the accounting entries module.

## Account Balances List

Menu: Accounting Middle Office &gt; Account Balances

The system performs daily aggregation of account ledgers by accounting date to form the account balance summary.

<img src="/assets/M3Zlb0KBQoR8IwxXp4fjBwUYpWd.png" src-width="3188" src-height="1460" align="center"/>

# Account Ledger

## Use Cases

View account ledgers by account based on accounting entry records.

## Prerequisites

Possession of Accounting Middle Office menu permissions and existing data in the accounting entries module.

## Account Ledger List

Menu: Accounting Middle Office &gt; Account Ledger

Query the system’s account ledgers displayed by account in this function.

<img src="/assets/Iei7b7eBvosGxPxVkIJj4fJopub.png" src-width="3218" src-height="1506" align="center"/>

# Bank Balances

## Use Cases

Users need to perform multi-dimensional reconciliations between bank-provided transaction records and the system’s internal records.

## Prerequisites

Bank transaction records and backend records have both been generated.

## Dimensions Display

Statement Reconciliation

Menu: Accounting Middle Office &gt; Bank Balances &gt; Statement Reconciliation Tab

Compare computed results based on historical transaction amounts in bank statements with historical bank balances to ensure the accuracy and completeness of bank statement details.

<img src="/assets/C38fbdlydoClOAxbESsj4yOFpDa.png" src-width="3234" src-height="1542" align="center"/>

# Historical Balances

Menu: Accounting Middle Office &gt; Bank Balances &gt; Historical Balances Tab

Refers to the actual bank balances of all the broker-dealer’s bank accounts on a given accounting date.

Batch import is supported.

<img src="/assets/ONg8b0cfNoG8AxxLq11jyAGTpof.png" src-width="3238" src-height="1524" align="center"/>

<img src="/assets/Hi8dbdQtFozcOXxjwmOjCKmUpUf.png" src-width="3242" src-height="1234" align="center"/>

# Real-time Balances

Menu: Accounting Middle Office &gt; Bank Balances &gt; Real-time Balances Tab

Refers to the real-time balances of bank accounts for which the broker-dealer has integrated APIs.

<img src="/assets/OZUxb9FxMoY5wExRMXtj7epVp4W.png" src-width="3252" src-height="1242" align="center"/>

# Accounting Data Sources

## Use Cases

When bookkeeping, users must classify and organize various detailed accounting materials and handle exceptional data separately.

## Prerequisites

Payment transactions, customer charges statements, bank statements, CCASS data, etc., are all prepared.

## Exception Data Sources

Menu: Accounting Middle Office &gt; Accounting Data Sources &gt; Exception Data Sources Tab

Data sources that cannot automatically generate entries are treated as exceptions by the system and can be queried in this function.

<img src="/assets/No3ibJ6O7obiiUx6OeqjTfSzptf.png" src-width="3236" src-height="1110" align="center"/>

For exception data sources, clicking the "Exception Data Source Number" in the record list navigates to the specific data source.

<img src="/assets/TMLSbwPC2oalh1xu5H4jknonpLf.png" src-width="3414" src-height="1210" align="center"/>

## Customer Charges Statement

Menu: Accounting Middle Office &gt; Accounting Data Sources &gt; Customer Charges Statement Tab

Because payment transactions aggregate various transaction fees charged to customers (for example, stock trading fees aggregated as commissions, platform fees, and third-party charges), they may not satisfy accounting posting requirements. The detailed breakdown of customer charges must be parsed and used as an accounting data source.

Customer charges statements for stock transaction types can be configured more granularly, supporting separate identification of dark pool trades; dark pool trades can be configured with separate entry rules to generate accounting entries.

The Accounting Data Sources “Customer Charges Statement” adds an Accounting Date field, which is used as the accounting date value for accounting entries.

<img src="/assets/BOSnbi9hioooI3x5TAwjWzEMphc.png" src-width="3206" src-height="1502" align="center"/>

If a customer charges statement does not require bookkeeping, delete the record in the backend.

<img src="/assets/CURPbIkynoB9kzxhEkujVxJopQd.png" src-width="3286" src-height="712" align="center"/>

If a customer charges statement for a given accounting date is inaccurate, re-run it in the backend.

<img src="/assets/NXFTbXnxBozbCQxMB5JjYkmupsK.png" src-width="3302" src-height="1110" align="center"/>

## Payment Transactions

Menu: Accounting Middle Office &gt; Accounting Data Sources &gt; Payment Transactions Tab

Records of user transaction movements maintained by the broker-dealer. The Accounting Middle Office standardizes retrieval based on transfers, withdrawals, and deposits, using these as information-flow data for accounting entries.

<img src="/assets/LrG0bNEjhoT3AgxDR5rjWjdXp4c.png" src-width="3230" src-height="1502" align="center"/>

If a payment transaction record does not require bookkeeping, delete it in the backend.

<img src="/assets/CJudbQWBEo2QXhx1Tb8jGe8Gp3g.png" src-width="3258" src-height="818" align="center"/>

If a payment transaction for a given accounting date is inaccurate, re-run it in the backend.

<img src="/assets/W1O7bS9zloIQwXxFBYFjOyB9p9f.png" src-width="3282" src-height="1132" align="center"/>

## CCASS Statements

Menu: Accounting Middle Office &gt; Accounting Data Sources &gt; CCASS Statements Tab

Add CCASS file parsing. After importing related CCASS files, the system automatically processes accounting entries according to configuration. Query or delete imported data-source entries in this tab.

<img src="/assets/CpbkbsP9XoFX3yxum7ljhezRpjf.png" src-width="3240" src-height="1478" align="center"/>

## New Share Statements

Menu: Accounting Middle Office &gt; Accounting Data Sources &gt; New Share Statements Tab

Add new share statements.

<img src="/assets/WLl6bT4RGojdHhxdTlBjShe9pyh.png" src-width="3262" src-height="1120" align="center"/>

## Agent Charges

Menu: Accounting Middle Office &gt; Accounting Data Sources &gt; Agent Charges Tab

To capture fees under institutional agreements and satisfy broker-dealers’ bookkeeping requirements for onboarding fees, Agent Charges are added as an accounting data source.

<img src="/assets/FVPEbiG1foXEBnxcwpLjsKoWp5f.png" src-width="3288" src-height="912" align="center"/>

## Bank Statements

Menu: Funds Management &gt; Bank Statements &gt; Bank Statement Tab

Records of all actual cash movements in the broker-dealer’s bank accounts. After tagging by various criteria, bank statements can serve as a data source for cash-flow accounting.

<img src="/assets/TUSUbFPaCoCkKZxVTHIjObk0pWh.png" src-width="3794" src-height="1002" align="center"/>

If a bank statement’s fund type is unknown, modify it manually in the backend.

<img src="/assets/DEm9b4Ho2ooOVkxbLmDjvpfepdO.png" src-width="3376" src-height="1822" align="center"/>

<img src="/assets/GeW6bBoPyohMBxxJdFajMpc0pvg.png" src-width="3376" src-height="1816" align="center"/>

If bank statement data is missing, import files in the backend.

<img src="/assets/XoG3bOtg4o91hQxKgqQjjvt1poh.png" src-width="3260" src-height="826" align="center"/>

If a bank statement record has issues, delete it in the backend.

<img src="/assets/UBeqbjxpLoQWMPxkT1xjOyJIpOb.png" src-width="3260" src-height="826" align="center"/>

If deposit and withdrawal statements are updated, re-run them in the backend.

<img src="/assets/TQUpbKiVCoAZqGxsFrdjAK32p5g.png" src-width="3260" src-height="826" align="center"/>

# Funds in Transit

## Use Cases

Provide records to track client funds that are in the process of deposit and not yet completed.

## Prerequisites

Deposit process not completed.

Menu: Accounting Middle Office &gt; Funds in Transit &gt; Details

Provides aggregated record queries for funds in transit.

<img src="/assets/QxvDbUOwjo2GCAxj0jZjgMPgp9c.png" src-width="3282" src-height="1690" align="center"/>

Menu: Accounting Middle Office &gt; Funds in Transit &gt; Summary Reconciliation

Provides summary reconciliation results for funds in transit against bank statements.

<img src="/assets/SJfibYFdCoKnN4xt7bbjoHdIpLd.png" src-width="3242" src-height="540" align="center"/>

