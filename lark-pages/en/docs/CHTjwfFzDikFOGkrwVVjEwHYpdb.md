---
title: 2024-03-26 Release Notes
slug: D07nwrBosi3XPikwqoVc5T8enUh
sidebar_position: 40
---


# Release Notes — March 26, 2024

# 2024-03-26 Release Notes

# 🎉 New Features

- Support for modifying the contact phone number or contact email

    <img src="/assets/J1QtbimdZolu69xeD9xjgm0qpLg.png" src-width="2434" src-height="1374" align="center"/>
    

    <img src="/assets/ZyL1bPO7eoXExoxZnHAjONf4p0k.png" src-width="2464" src-height="1378" align="center"/>
    - Path: "Account Management" - "Work Order Center" - "Customer/Account Information" - "Edit Contact Details"
    - Permission: account.edit_contact_details
    - Review Work Orders:
        - Modify contact email: crm.edit_account_email
        - Modify contact phone number: crm.edit_account_phone
    - Feature: Users can submit single or bulk requests to modify contact information (contact phone number or contact email); once the work order is approved, the changes will be applied successfully
        - Note: The modification entry for contact information within the KYC details will be closed going forward; please use the new modification entry exclusively

