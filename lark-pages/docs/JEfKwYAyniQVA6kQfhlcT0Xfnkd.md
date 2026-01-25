---
title: 2024-12-02 Release Notes
slug: JEfKwYAyniQVA6kQfhlcT0Xfnkd
sidebar_position: 19
---


# 2024-12-02 Update Log

# 2024-12-02 Release Notes

# 🎉 New Features

- Margin Call: New compact page setting feature
    - The table settings component now includes style customization, allowing switching between Standard mode and Compact mode according to actual usage scenarios. The system defaults to Standard mode.
    - This component is currently applied on the Margin Call page and will be promoted to other backend pages subsequently.
    - Path: "Risk Management" - "Margin Call" - "Risk Alerts / Stock Recovery / Liquidation Orders"

<img src="/assets/FePNbCXEcozfNvx3lxVjcMRMpyg.png" src-width="3346" src-height="1634" align="center"/>

- Check deposit: New freeze and unfreeze workflow
    <img src="/assets/QKCFbHU3Vo353Kx3n84jdbhEpGD.png" src-width="2650" src-height="1368" align="center"/>
    <img src="/assets/ENSVb6rPholLJJxmuTrjr7IPpbf.png" src-width="1886" src-height="1316" align="center"/>
    <img src="/assets/X2inbDzbVog0kFxa2FbjTLE1pBd.png" src-width="2118" src-height="1554" align="center"/>
    <img src="/assets/Cxz9bpJ2yo7dGSxbmSjjG4nlpve.png" src-width="2144" src-height="1168" align="center"/>
    <img src="/assets/YoYmbxHTsoskqIx6P9Nj3LJOpCg.png" src-width="2180" src-height="484" align="center"/>
    <img src="/assets/VIWubekr7oS3vfxL3VWjL0G7pgc.png" src-width="2120" src-height="610" align="center"/>
    - For deposits posted via "Direct Posting" or "Voucher Association," when the deposit method is a check, the system allows choosing whether to freeze the funds according to business requirements. If frozen, the estimated unfreeze time can be manually modified.
    - Path 1: "Funds Management" - "Deposit" - "Deposit Application"
    - When a deposit is posted by matching it to a deposit application, if the deposit method is a check, the system allows choosing whether to freeze the funds according to business requirements. If frozen, the estimated unfreeze time can be manually modified.
    - Path 2: "Funds Management" - "Deposit" - "Deposit Matching"
    - During deposit review, when the deposit method is a check, information indicating whether the deposit is frozen will be displayed.
    - Path 3: "Funds Management" - "Deposit" - "Deposit Review"
    - For check deposits that have been frozen, manual unfreeze in the backend is possible prior to the "Estimated Unfreeze Time," or the system may automatically unfreeze them at that time.
    - Path 4: "Funds Management" - "Deposit" - "Deposit Records"
    - After a manual unfreeze request is submitted, the request must await work order approval.
    - Path 5: "Funds Management" - "Deposit" - "Deposit Records"

# 🪀 Improvements and Fixes

- Bulk setting of Margin Call exemptions
    - Support for bulk configuration of personalized Margin Call exemption rules for clients.
    - Client selection can invoke the client group list.
    - Path: "Business Parameter Settings" - "Risk Control" - "Risk Parameters"

<img src="/assets/XhwBbdfihoUc02xLKACjysSOpgf.png" src-width="3354" src-height="1638" align="center"/>

- Support for adding financing pool remarks for IPO subscriptions
    - When setting up a financing pool for a new share subscription, custom remarks can be specified and displayed in the App.
    - Path: "IPO Subscription" - "IPO Subscription" - "Hong Kong Stock Subscription" - "Basic Information"

<img src="/assets/TAApbNzPbobjxBxfL1wjGHJXpGf.png" src-width="2346" src-height="1356" align="center"/>

- Console personnel logic optimization
    - In Global Settings → Personnel → Add Personnel, support has been added to create three types of users: Broker, Trader, and Regular Administrator.
    - Path: "Global Settings" - "Personnel" - "Add Personnel"

<img src="/assets/FQNXblxWforZJ7xKpBijT51apLf.png" src-width="2234" src-height="1174" align="center"/>

- CRS file generation
    - Support for importing historical data.
    - Display of declared financial jurisdictions.
    - Support for editing account information such as the actual controller.

<img src="/assets/REFvbQY4VoLsgPxfRnsjN2bCpxe.png" src-width="3276" src-height="834" align="center"/>

<img src="/assets/QcmybJb4poLBrBxePZNjQjW7pHh.png" src-width="3282" src-height="1696" align="center"/>

<img src="/assets/J2T9bakRXoPwgZxFmy1jIrDPpub.png" src-width="3320" src-height="1798" align="center"/>

