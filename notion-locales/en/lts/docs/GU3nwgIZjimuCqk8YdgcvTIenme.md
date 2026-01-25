---
title: 2024-02-20 Release Notes
slug: GU3nwgIZjimuCqk8YdgcvTIenme
sidebar_position: 44
---


# - Update Log — February 20, 2024

# 2024-02-20 Release Notes

# 🎉 New Features

- Clearing Check Work Order Approval
    <img src="/assets/AGfCb6AJcoUNFPxrtT8j4egKpGf.png" src-width="3574" src-height="1770" align="center"/>
    - Work order ID: clearing.clearing_check.fix_result
    - If no approver is configured at initialization, the work order will be automatically approved after 5 seconds.
    - The copy for clearing check items has been optimized and now supports multilingual display.
    - Note: If there are work orders pending approval, the work order cannot be clicked again.

- Report Export and Batch Printing Enhancements
    <img src="/assets/SjcUbKkp0ocm22xlqLzjI1Pqpfe.png" src-width="3802" src-height="1810" align="center"/>
    - Batch report printing can be configured to automatically synchronize to SFTP after printing.
    - Path: "Report Management" - "Batch Printing"
    - After reports and files are exported, all data is placed in the export list for quick review.
    - If a file or report export completes successfully within 10 seconds, it will be downloaded automatically.

- Corporate Actions: Automatic Creation for Privatization and Bond Recall Types
    <img src="/assets/Wx2FbA0KXojnAkxCFhkjWWykpKf.png" src-width="3574" src-height="1770" align="center"/>
    - Privatization and Bond Recall are both automatically created as TM type.
    - The TM type supports transfer fee collection and automatically retrieves the value from the file upon creation.

- Added Reconciliation for Common Files
    <img src="/assets/PdT1bCJk0ok4OPxVnInjNu65pce.png" src-width="3570" src-height="1780" align="center"/>
    <img src="/assets/FsS6bVNpYoI58FxkyXmj0UdGpIg.png" src-width="3574" src-height="1770" align="center"/>
    - Channels without integrated transaction files can reconcile via common files.
        - Integrated channels will be processed according to file rules.
    - Initial configuration steps:
        - Path: Business Parameter Settings - Market Management - Settlement Channels
        - Add the corresponding settlement channel and select Stock Reconciliation (Common Trade File)

- KYC Account Opening Records: Added One-Click File Export Function
    <img src="/assets/JWGlbs0pxo6FsPxVjugjcwc0pwd.png" src-width="2520" src-height="1362" align="center"/>
    - Path: "Customer Management System" - "KYC" - "Account Opening List"
    - On the account opening details page, clicking the 'File Download' button will automatically compress the file information in the account records into a single folder for export.
    - File information includes: ID photos, proof of address, transfer proofs, account opening documents, etc.

# 🪀 Improvements and Fixes

- Customer Details Interface Optimization
    <img src="/assets/V6dxbvLSpoZlBjxZAIAjxnO3prf.png" src-width="3574" src-height="1770" align="center"/>
    - Path: Corporate Actions - Customer Corporate Actions
    - Function: Primarily used to query the corporate actions associated with a client.
    - The end time selection in customer details has been changed to "Customer Selected End Time", and fields for Broker and Notice Remarks have been added to customer details.
    - For the now-deprecated customer details add, delete, and modify functions, the new edit path is: Corporate Actions - Details - Customer Details.
    - This page will be added to WTT in a future release.

- Hong Kong Custody Fee Report Now Supports Setting Rates by Type
    <img src="/assets/KWlkb4bBQoLuZPx9cF1jeFLbp4c.png" src-width="3574" src-height="1770" align="center"/>
    - Added SDR058-02 report, which can calculate fees based on configured rates.
    - Path: Report Management - Report Printing
    - Original path (now deprecated): Business Parameter Settings - Report Parameters

- "Account Opening Backend" - Birth Date / Date of Incorporation Restrictions
    <img src="/assets/FSLhbZMZho1yf0xeZPrjJjhOpff.png" src-width="3286" src-height="804" align="center"/>
    - Account opening details now include account information, including: review status, login mobile number, authentication type, account opening time, broker name, securities account number, account type, client type, client sub-type, and contact mobile number.

