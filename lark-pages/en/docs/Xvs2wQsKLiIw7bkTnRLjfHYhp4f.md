---
title: 2024-02-20 Release Notes
slug: GU3nwgIZjimuCqk8YdgcvTIenme
sidebar_position: 44
---


# Release Notes — February 20, 2024

# 2024-02-20 Release Notes

# 🎉 New Features

- Clearing Inspection Work Order Approval Integration

    <img src="/assets/PBFXbvO1PoHjVNxbxyujZIKVpsg.png" src-width="3574" src-height="1770" align="center"/>
    - Work order ID: clearing.clearing_check.fix_result
    - During initialization, if a work order does not have an approver configured, it will be automatically approved after 5 seconds by default.
    - Wording for clearing inspection items has been optimized and now supports multilingual display.
    - Note: if there are unapproved work orders, the work order cannot be clicked again.

- Report Export and Batch Printing Improvements

    <img src="/assets/CHjRbcp32odnGfxFoZej0DlhpOe.png" src-width="3802" src-height="1810" align="center"/>
    - Batch report printing can be configured to automatically synchronize to SFTP after printing.
    - Path: "Report Management" - "Batch Print"
    - After reports and files are exported, all data is placed in the export list for quick viewing.
    - If file or report export completes successfully within 10 seconds, it will be downloaded automatically.

- Corporate Actions Support Automatic Creation for Privatization and Bond Buyback Types

    <img src="/assets/E848bZ5LQowAdbxJEZqjoejxpDe.png" src-width="3574" src-height="1770" align="center"/>
    - Privatizations and bond buybacks are automatically created as the TM type.
    - The TM type supports transfer fee collection and automatically takes the value from the file upon creation.

- Added Reconciliation for Generic Files

    <img src="/assets/PernbhaEpou9CJxMIhsjdfRIpOe.png" src-width="3570" src-height="1780" align="center"/>
    

    <img src="/assets/KKKrbiVEfo4ze6xOEYQjlIzKpPd.png" src-width="3574" src-height="1770" align="center"/>
    - Channels without integrated trade files can perform reconciliation via generic files.
        - Channels that are already integrated will be processed according to the file rules.
    - Initial configuration steps:
        - Path: Business Parameter Settings - Market Management - Settlement Channels
        - Add the corresponding settlement channel and select Stock Reconciliation (Common Trade File).

- KYC Account Opening Records: Added One-Click File Export

    <img src="/assets/AZQCb7WD7oXcdDxfhNmjuD5PpVh.png" src-width="2520" src-height="1362" align="center"/>
    - Path: "Client Management System" - "KYC" - "Account Opening List"
    - On the account opening record details page, click the "Download Files" button; the system will automatically compress the file information contained in the account opening record into a single folder for export.
    - File information includes: ID photos, proof of address, transfer proofs, account opening documents, etc.

# 🪀 Improvements & Fixes

- Customer Details Interface Optimization

    <img src="/assets/MLAWbVS6OoapZxxM81Hjtx0op3b.png" src-width="3574" src-height="1770" align="center"/>
    - Path: Corporate Actions - Customer Corporate Actions
    - Purpose: Primarily used to query the corporate actions experienced under a customer's name.
    - The selection end time for customer details has been modified to reflect the customer's chosen end time. Customer details now include fields for Broker and Announcement Remarks.
    - The offline customer details support add, delete, and modify operations; the new path for editing customer details is: Corporate Actions - Details - Customer Details.
    - This page will be added to WTT in a subsequent release.

- Hong Kong Stock Custody Fee Report Now Supports Setting Rates by Type

    <img src="/assets/EixZblFAuoyakvxult6jKgsypJd.png" src-width="3574" src-height="1770" align="center"/>
    - Added the SDR058-02 report, which can calculate fees based on configured rates.
    - Path: Report Management - Report Print
    - Original path (deprecated): Business Parameter Settings - Report Parameters

- "Account Opening Data Backend" — Date of Birth / Date of Incorporation Restrictions

    <img src="/assets/CJZPbtXrioS0WfxZu4vjMnCZpHc.png" src-width="3286" src-height="804" align="center"/>
    - Account opening record details now include account information, including: review status, login phone number, authentication type, account opening time, broker name, securities account number, account type, client type, client sub-type, and contact phone number.

