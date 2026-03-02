---
title: 2024-05-20 Release Notes
slug: 24-05-20
sidebar_position: 36
---


# 2024-05-20 Release Notes

# 🎉 New Features

- Accounting general report export added — by business category

    <img src="/assets/Ucx8bFdpbonanwxYaUij7sNbpMe.png" src-width="3234" src-height="768" align="center"/>
    - Accounting general report export added — by business category

- Support for batch withdrawals

    <img src="/assets/Bn6zbIsNNoi6AuxDlYYjbNYspQb.png" src-width="2850" src-height="1240" align="center"/>
    - System-provisioned templates: filling the fields in a template enables generation of multiple withdrawal requests in a single submission
    - Batch withdrawals: `atm.import_batch_withdraw`

- Customer-level short-position margin ratio settings

    <img src="/assets/CSZlbD4CuomkeUxGZzljYy6PpIb.png" src-width="3224" src-height="1086" align="center"/>
    - Customer margin now includes a setting for short-position margin ratios
    1. Under Customer Margin, tabs are split into: Short Stocks, Long Stocks
    2. Customer short-position stock shortable status is synchronized with the Short Margin setting under Stock Margin (Menu: Stock Margin - Short Margin)
    3. Margin ratio logic: if a customer short-position margin ratio exists, the customer short-position setting takes precedence; otherwise, the short-stock margin is used
    - Navigation: "Risk Management" - "Margin" - "Customer Margin" - "Short Stocks"
    - Customer short-position margin query: `margin_ratio.account_short_query`
    - Customer short-position margin operation: `margin_ratio.account_short_operation`

- Whale home page quick-access feature released

    <img src="/assets/QhstbMp8mocoBVx7cq2j8oTnpEe.png" src-width="818" src-height="352" align="center"/>
    - Is handling business across multiple systems inconvenient? Are browser bookmarks hard to manage?
    - The Console Home — Quick Access helps you stay focused and work more efficiently!

- Billing support for floating interest rates
Maintenance of benchmark interest rates

    <img src="/assets/KejwbtJIhowuluxqxwmjhWJEpjd.png" src-width="3574" src-height="1794" align="center"/>
    

    <img src="/assets/OjMyb20Gfoa1sYxoFcFjYyxzpmi.png" src-width="3574" src-height="1794" align="center"/>
    

    <img src="/assets/As9lbjDxeokRtcxNXVDjvS9LpRf.png" src-width="3574" src-height="1794" align="center"/>
    
Basis point configuration

    <img src="/assets/CxaBbo99TozHmoxKefajpt2Np40.png" src-width="3574" src-height="1794" align="center"/>
    - Financing interest now supports floating interest rates
    - Navigation: Business Parameter Settings - Billing Management
    - On the charging scenario page, click the boundary and adjust the benchmark rate field
    - Before adjusting the benchmark rate, use report SDR065-01 to check whether any basis point settings are too low
    - Note: enter values without the % symbol. Example: enter 6% as 0.06
    - On the Customer Group Billing and Customer Billing pages, select Floating Rate and enter the basis points. Final rate used = basis points + benchmark rate
    - Note: enter 1 bp as 0.0001

- Work order integration for customer-group billing and customer billing
New approval items are as follows:
Work order approval examples:
    - Note 1: Newly added data becomes effective only after approval
    - Note 2: Edited data becomes effective only after approval; before approval, billing is based on the original data
    - Note 3: Deleted data becomes ineffective only after approval; before approval, billing is based on the original data
    1. Billing Management - Customer Group Billing Configuration - Add

        <img src="/assets/DlQfbikIloYLqQxCMB8jzhKepfc.png" src-width="1280" src-height="642" align="center"/>
        
When added, the status is Pending Activation and can be approved on the work order page

        <img src="/assets/LKdAbxiPRox8cExRScCjkQe7pQg.png" src-width="1160" src-height="1280" align="center"/>
    2. Billing Management - Customer Group Billing Configuration - Edit

        <img src="/assets/CG8XbVFeQoaujjxhEdljYq7PpFb.png" src-width="1133" src-height="1280" align="center"/>
        
New and old data can be expanded separately
    3. Billing Management - Customer Group Billing Configuration - Delete

        <img src="/assets/Q0ZobFEaPoWZcPxe87VjJQ0dpc2.png" src-width="1154" src-height="1280" align="center"/>
    4. Billing Management - Customer Billing Configuration - Add

        <img src="/assets/JUkJbJ6ulomNPSxcg15jor7zpJg.png" src-width="1155" src-height="1280" align="center"/>
    5. Billing Management - Customer Billing Configuration - Edit

        <img src="/assets/JL6NbvagYoXrQMx7i2ZjfUwtpQb.png" src-width="1156" src-height="1280" align="center"/>
    6. Billing Management - Customer Billing Configuration - Delete

        <img src="/assets/AfB1bLe1EokazixPBI6j2RJ3p6f.png" src-width="1152" src-height="1280" align="center"/>
    7. Billing Management - Customer Group Configuration - Customer Group Change (Add)

        <img src="/assets/GAItbsnAdoRheNxGpOJjMIFHp5c.png" src-width="1159" src-height="1280" align="center"/>
    8. Billing Management - Customer Group Configuration - Change Customer Group (Remove)

        <img src="/assets/U1CybzeifoWBrmxT69sjisjLpF8.png" src-width="924" src-height="1250" align="center"/>
    9. Billing Management - Customer Group Configuration - Bulk Change Customer Group

        <img src="/assets/HPxXbUig3o0T3sxB0zWjkPy4pJe.png" src-width="736" src-height="1118" align="center"/>

# 🪀 Improvements and Fixes

- Bank Statement functionality enhancements

    <img src="/assets/JtEwbVuCQol7KrxQXRGjn4MBptd.png" src-width="3782" src-height="1480" align="center"/>
    - Bank Statement functionality optimized, including:
    1. Deposit statements now automatically synchronize labels from consolidated statements
    2. Deposit statement settings support combination-based evaluation
    3. Withdrawal statements automatically associate withdrawal orders; added securities account matching rule
    4. Added fuzzy matching for bank remarks in automatic tagging rules

- Exception data source UI optimization

    <img src="/assets/DIQBbpvq6oPiJDxJAYNjNDsCpQe.png" src-width="2310" src-height="1186" align="center"/>
    - Exception data source UI optimized, including:
    1. Added display of business type, currency, and amount
    2. Removed "Underlying" from filter fields and list pages
    3. Exception data source reference number is now uniformly changed to Original Voucher Number
    4. Accounting date in exception data source uses the YY-MM-DD format; time is removed

- Check printing: added date query condition

    <img src="/assets/Dmh4be4Qcob6EUxHzDtjifSmp4c.png" src-width="3794" src-height="1696" align="center"/>
    - Added date query condition

- Support for selecting a specified accounting date for IPO deductions and allotment announcements
    - Supports selecting a specified accounting date for IPO deductions and allotment announcements

<img src="/assets/TK9CbVI9Uo4lZdxWtwXjeAHYpah.png" src-width="2378" src-height="1370" align="center"/>

- Offline account opening: Mainland China document issuing place now supports passport for account opening
    - In the offline account opening flow, if the document issuing place is selected as "Mainland China", the document type field now supports selecting either "ID Card" or "Passport"
    - Navigation: "Customer Management System" - "KYC" - "Data Management" - "Account Opening Data" - "Add Account Opening Application"
    - Supported customer types: Individual Account, Joint Account

<img src="/assets/N6XRbRoycoVaWlx41Z6jKOpJp6X.png" src-width="2002" src-height="904" align="center"/>

