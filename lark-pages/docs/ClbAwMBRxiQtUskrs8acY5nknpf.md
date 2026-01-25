---
title: 2024-05-20 Release Notes
slug: ClbAwMBRxiQtUskrs8acY5nknpf
sidebar_position: 36
---


# 2024-05-20 Release Notes

# 2024-05-20 Release Notes

# 🎉 New Features

- Added accounting generic report export — by business category
    <img src="/assets/XIwsbZJk0olClnxRQ3gjgY2Pp40.png" src-width="3234" src-height="768" align="center"/>
    - Added accounting generic report export — by business category

- Support for batch withdrawals
    <img src="/assets/ZkbRblJEWoHElAx13LXjtVXypce.png" src-width="2850" src-height="1240" align="center"/>
    - The system provides predefined templates; filling in the fields in a template enables generation of multiple withdrawal requests in a single operation
    - Batch withdrawal: atm.import_batch_withdraw

- Client-level short margin ratio configuration
    <img src="/assets/NCQAbvnMwoiq15x0OL2jyOAFpXg.png" src-width="3224" src-height="1086" align="center"/>
    - Client margin now includes a setting for short margin ratios
    - Path: "Risk Management" → "Margin" → "Client Margin" → "Short Stocks"
    - Client short margin query: `margin_ratio.account_short_query`
    - Client short margin operations: `margin_ratio.account_short_operation`

- Whale Home quick access feature released
    <img src="/assets/DesQbz6IDoSQxbxwu1Tj4cLxpGc.png" src-width="818" src-height="352" align="center"/>
    - Is processing across multiple systems inconvenient? Too many browser bookmarks to manage?
    - Console Home — Quick Access helps you stay focused and more efficient!

- Billing supports floating interest rates
    Basis rate maintenance
    <img src="/assets/CAnzbAy13o6gUaxN3VHjQE9xp7f.png" src-width="3574" src-height="1794" align="center"/>
    <img src="/assets/JYkLbinogoB5ZqxEVvSjdRbwpDb.png" src-width="3574" src-height="1794" align="center"/>
    <img src="/assets/DoSIbYaLpoRMJXx5zOMjTvWqp0w.png" src-width="3574" src-height="1794" align="center"/>
    Setting basis points
    <img src="/assets/RmDkbWXDIoIRb2xEon9jXBsfpXe.png" src-width="3574" src-height="1794" align="center"/>
    - Financing interest now supports floating interest rates
    - Path: Business Parameter Settings → Billing Management
    - On the charging scenario page, click the boundary and adjust the Base Rate field
    - Before adjusting the base rate, use report SDR065-01 to check whether any basis points have been set too low
    - Note: input values are not percentages. Example: for 6%, enter 0.06
    - On the Client Group Billing and Client Billing pages, select Floating Rate and enter the basis points. The final rate used = Basis Points + Base Rate
    - Note: enter 1 bp as 0.0001

- Work orders for Client Group Billing and Client Billing integration
    The newly added approval items are as follows:
        Work order approval examples:
    - Note 1: Newly added data takes effect only after approval
    - Note 2: Edited data takes effect only after approval; until approved, charges are based on the original data
    - Note 3: Deleted data becomes inactive only after approval; until approved, charges are based on the original data
    1. Billing Management — Client Group Rate Setups — Add
        <img src="/assets/DbNmbljLGoAMAgxGjrVjJPMjpBb.png" src-width="1280" src-height="642" align="center"/>
        When added, the status is Pending Effective and can be approved on the work order page
        <img src="/assets/Iemsbf6VGoJ3VlxsjS0jN4Rtpwe.png" src-width="1160" src-height="1280" align="center"/>
    2. Billing Management — Client Group Rate Setups — Edit
        <img src="/assets/QEwAb7J4Xo1taIxajBUj34DIpOg.png" src-width="1133" src-height="1280" align="center"/>
        New and old data can be expanded separately
    3. Billing Management — Client Group Rate Setups — Delete
        <img src="/assets/PNvUb7JIIo6x9LxVleNjD4q5pJv.png" src-width="1154" src-height="1280" align="center"/>
    4. Billing Management — Client Billing — Add
        <img src="/assets/M3VKbrDVKoG4xCxyx31j2kAMp6d.png" src-width="1155" src-height="1280" align="center"/>
    5. Billing Management — Client Billing — Edit
        <img src="/assets/FedsbRVVooAVjkxwjk1jKZPWpmg.png" src-width="1156" src-height="1280" align="center"/>
    6. Billing Management — Client Billing — Delete
        <img src="/assets/JouWb8x8voEUdFxJnyajvxp6pXe.png" src-width="1152" src-height="1280" align="center"/>
    7. Billing Management — Client Group Configuration — Change Client Group (Add)
        <img src="/assets/RAIRbKXLtoyE8Dx6wAsjbpUlptc.png" src-width="1159" src-height="1280" align="center"/>
    8. Billing Management — Client Group Configuration — Change Client Group (Move Out)
        <img src="/assets/QX5cbX43OoEDVgxmGnWjMlocp7b.png" src-width="924" src-height="1250" align="center"/>
    9. Billing Management — Client Group Configuration — Batch Change Client Group
        <img src="/assets/Sl6DbSMtTo6vWAxboKVj97B5pwg.png" src-width="736" src-height="1118" align="center"/>

# 🪀 Improvements & Fixes

- Bank Statement feature optimizations
    <img src="/assets/V6nIbhxOioQToixSH7Yj6ONQpGb.png" src-width="3782" src-height="1480" align="center"/>
    - The Bank Statement feature has been optimized with the following improvements:

- Exception data source UI optimizations
    <img src="/assets/PnRAbatLaoarbXxUL0QjdwCcpsf.png" src-width="2310" src-height="1186" align="center"/>
    - The exception data source UI has been optimized with the following changes:

- Check printing: added date query condition
    <img src="/assets/GCG7bt7xto90FPxz1yLjSINlpGc.png" src-width="3794" src-height="1696" align="center"/>
    - Added date query condition

- Support selecting a specified accounting date for IPO debits and allotment announcements
    <img src="/assets/UMMvbh8U1oFYhgxuHOOjxDpmpPe.png" src-width="2378" src-height="1370" align="center"/>
    - Support selecting a specified accounting date for IPO debits and allotment announcements

- Offline account opening: Mainland China document issuing place now supports passport selection
    <img src="/assets/Pxe9bOOyhoMfSMx909Ijusk2pZd.png" src-width="2002" src-height="904" align="center"/>
    - In the offline account opening flow, if the document issuing place is set to "Mainland China," the document type may be either "ID Card" or "Passport"
    - Path: "Customer Management System" → "KYC" → "Data Management" → "Account Opening Data" → "Add Account Opening Application"
    - Supported client types: Individual, Joint Account

