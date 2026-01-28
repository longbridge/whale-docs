---
title: 2024-06-11 Release Notes
slug: L1jUwZK6Ci5YlykVxaOc3vYfnQe
sidebar_position: 20
---


# 2024-06-11 Release Notes

# 🎉 New feature

- <b>Configuration of various accounting data source business types</b>
    - After various accounting data source business types are configured, various business types can be configured according to the company's own accounting needs
    - permission
        <img src="/assets/QA6tboNzGog3Ytxmd4yjrxn0p8e.png" src-width="3252" src-height="1376" align="center"/>
        - `book.booking_types_query`Query the accounting business type
        - `book.booking_types_update`Change the accounting business type

# 🪀 Optimization and bugfix

- <b>Optimization of the pop-up page for forceselling orders</b>
    <img src="/assets/FGsHb7SJ4ouRi7xDuq2j95aSpEf.png" src-width="3258" src-height="1614" align="center"/>
    - optimization list of margin call pop-up page for forceselling orders,
        - add real-time bid/ask price information, support  manual refresh
        - support selecting session for US stock limit order (for page "SBL Overview" and "Shorted Stock Call Back")
        - add reference information of estimated reduction in recovery amount
    - Add column setting function for page "Daytrade Margin Call" and "Forceselling Records"
    - Support stock searching for page "Forceselling Records"
    - Page path: "Risk Control Compliance" - "Margin Call"

- <b>New report export in accounting mid-platform - Sage300 AOM (GL)</b>

<img src="/assets/GRZAbFj8KotIcXxOXdcjsmnCp8b.png" src-width="3290" src-height="1406" align="center"/>

- <b>Add "Statement Unsent" data on dashboard</b>
    <img src="/assets/ZfAEbXDOmoe1PJxBkB4jPFRQpae.png" src-width="3222" src-height="722" align="center"/>
    - Add "Statement Unsent" data on dashboard, including all statements to be sent.

