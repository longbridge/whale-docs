---
title: 2024-08-15 Release Notes
slug: ZhxjwK3Egi2JKlkpD6ScgPNHncc
sidebar_position: 2
---


# 2024-08-15 Release Notes

# 🎉 New Feature

None

# 🪀 Optimization and Bugfix

- Easily update the "Client detail type" field
    - Path: "CRM" -&gt; "KYC" -&gt; "Account Opening Review" -&gt; "Account Details"
    - For accounts under review or already opened:
        - Changes to the "Client detail type" field take immediate effect during the review process. Once the account is opened, the system will align the client detail type with the correct trading channel.
        - If the account is already opened, changes will take effect only after approval. Once approved, the trading channel will adjust to match the new details.
    - Add new ticket: kyc.update_application_client_detail_type

<img src="/assets/MAbxb3ygCoEQlHx9UIkjlNcNpjg.png" src-width="2440" src-height="1028" align="center"/>

- See account names right on the Client Info page
    - Path: "CRM" - "Account" - "Account List" - "Details"
    - The Client Info page now displays the account name for the current securities account, along with the account names of any linked accounts.

<img src="/assets/ANLUbZB5sotfnsxFJjhjFsgspLb.png" src-width="2454" src-height="1598" align="center"/>

