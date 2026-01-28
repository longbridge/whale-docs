---
title: 2024-12-23 Release Notes
slug: KMI9w4Vw1id4n8kbkmscGlTVnMf
sidebar_position: 21
---


# 2024-12-23 Release Notes

# 🎉 New Feature

- Add arrival time, estimated cost configuration
    <img src="/assets/Btumb3GIRomyzWxZGxBjkbdqp8c.png" src-width="3306" src-height="734" align="center"/>
    <img src="/assets/VcIsbrILTo66n7xkvWIjEMwApjf.png" src-width="3302" src-height="962" align="center"/>
    <img src="/assets/InisbfwjjoqIdfxORoRjNGpppAd.png" src-width="1262" src-height="1458" align="center"/>
    - For the "arrival time" and "estimated fee" prompt content corresponding to the customer's withdrawal request submitted in the App, the background can be differentiated and configured according to the customer's bank card, submission time point, currency, and withdrawal range
    - Path: WBO - Service Parameter Settings - Withdrawal Rules Management - Withdrawal Configuration
    - Permissions1：withdrawalparameter.withdrawal_parameter_query Withdrawal parameter query
    - Permissions2：withdrawalparameter.withdrawal_parameter_management Withdrawal parameter management

- Debit Notification Snapshot
- Add snapshot query function for debit notification.  You can search the debit amount and other currency amount at the moment of snapshot record, besides cash and mmf data details can be found in "Detail" action.
- Path: Risk Control Compliance-Credit Limit-Debit Notification-Snapshot
- Permissions：Risk Debt Snapshot Query：margin_call.risk_debt_snapshot

<img src="/assets/YzQEbjmUnoDU0IxShACjOPbopzb.png" src-width="3310" src-height="1546" align="center"/>

- Credit Limit Multiplier Coefficient Rule Setting
    <img src="/assets/Niv5bXLDfoCpIzxiqrnjk4nOpLb.png" src-width="3342" src-height="1634" align="center"/>
    - Add the function of setting differentiated credit coefficients based on the customer's net asset level; if rules are set, the credit coefficient that meets the rules will be given priority, otherwise the default setting will be used.
    - Note:
    - Rule setting is not mandatory and should be configured according to actual business needs
    - If the customer's net asset level meets multiple rule setting conditions, the system will default to the first matched rule.
    - Path: Service Parameter-Risk Control-Credit Parameters

# 🪀 Optimization and Bugfix

- After the account opening authentication method is changed, the original deposit processing flow is optimized
    <img src="/assets/VM89beucbog64zxQATIjorlgp5J.png" src-width="3258" src-height="922" align="center"/>
    <img src="/assets/P6V8bdBLNoINSHxSHikjswUxpuc.png" src-width="2864" src-height="924" align="center"/>
    <img src="/assets/Yfy9boSCvoE8yRxoksKjdiLspOe.png" src-width="2452" src-height="820" align="center"/>
    <img src="/assets/Nf2Db83M1oNgvTxMoh8jKiIxpEf.png" src-width="2868" src-height="918" align="center"/>
    - If the account opening authentication method is changed, and the customer's deposit application is not associated and can have a corresponding securities account, the customer can cancel it in the App after the account opening is successful;
    - If the account opening authentication method is changed, and the customer's deposit application is not associated but cannot be corresponded to the corresponding securities account, there will be a message alarm in the background, which can be revoked in the background according to the alarm information
    - Path 1: WBO - Cash Management - Deposit - Pending Requests
    - If the account opening authentication method is changed, the customer's deposit application has been matched and credited with the corresponding securities account number, and the system will automatically update the addition status "account opening and deposit processing" to "addition successful" after the account opening is successful.
    - If the account opening authentication method is changed, and the customer's deposit application has been matched with the corresponding securities account but cannot be corresponded to the corresponding securities account, there will be a message alarm in the background, and the operation can be rejected in the background according to the alarm information
    - Path 2: WBO - Cash Management - Deposit - Account Opening Deposit

- Deposit supports configuration for multiple receiving banks
    <img src="/assets/M500bAgkXoRO5oxpE1eji8pEpHc.png" src-width="3758" src-height="838" align="center"/>
    - After the customer selects the bank card and deposit currency, they can switch the receiving bank independently, and the background can support configuring multiple deposit banks.
    - Path: WBO - Cash Management - App Config - Deposit Parameters Setups

- Exchange strategy optimization
    <img src="/assets/DukGbrTCKogTMhxwTRBjxCWnpFd.png" src-width="2454" src-height="608" align="center"/>
    <img src="/assets/FX34bYCB9oBVv1xNtPGj61YapAh.png" src-width="892" src-height="1400" align="center"/>
    <img src="/assets/TPTHbdGaIoB0WlxZg6qjPAfZpBg.png" src-width="2502" src-height="1326" align="center"/>
    - The newly connected counter company will add a default exchange policy during initialization
    - Exchange policy If "service policy = exchange pool exchange" is selected, you can set whether the exchange pool intercepts.
        - No interception: refers to the customer's ability to continue submitting foreign exchange requests after selecting a foreign exchange pool, regardless of whether the remaining quota is sufficient. After the exchange is successful, the exchange quota can be adjusted normally.
        - Interception: refers to the customer's need to determine the remaining amount after selecting the exchange pool for exchange. Currently, the online logic
    - [New] and [Edit] operations added explanation of "Exchange Type" and "Service Policy" fields.
    - The service period of the exchange policy supports 7 × 24 configuration.
    - The currency pairs of the exchange strategy support full configuration, and all currency pairs come from the configuration of "Securities Background-Business Parameter Settings-Exchange-Exchange Strategy".
    - [New] The "Exchange Type" of the operation supports multiple selections.
    - Path: WBO - Service Parameter - Exchange - Exchange Service Control

- Review the customer's bank card input remarks docking remarks template
    <img src="/assets/P65Kbkq0ao8nBlx5aSCjWA0wpBj.png" src-width="1778" src-height="772" align="center"/>
    <img src="/assets/WZB2bmyScoCfwBxoZJQjisvZphe.png" src-width="1786" src-height="766" align="center"/>
    - Review the bank card in the background. If you choose "Reject", the manually entered remarks can be selected from the preset remarks.
    - For the entered remarks, you can choose whether the customer can see them. If you choose "visible", the remarks will be brought to the customer in the message that pushes the review result; if you choose "invisible", the corresponding remarks can only be seen in the background, and the customer cannot see them in the message.
    - Path 1: Securities backstage - Payment management - Customer bank card
    - The preset note for refusing customer card binding can be customized in the background
    - Path 2: Securities Backstage - Business Parameter Settings - Remarks Template

- The bank standard version template supports importing multiple files
    <img src="/assets/C2tLbxMtlo9C5PxGC90jUNtTpmf.png" src-width="2036" src-height="472" align="center"/>
    <img src="/assets/CXkwbg7zjoEZuYxFfOvjfkX9pVg.png" src-width="1774" src-height="928" align="center"/>
    - On the basis of importing a single file of the deposit statement bank standard template, multiple file imports can be supported
    - Path: WBO - Bank statement - Deposit statement

- Deposit application creation time is this week by default
    <img src="/assets/NrCYbfzrroblmLxeqX7jKIHIpid.png" src-width="2276" src-height="886" align="center"/>
    - Go to the deposit application page creation time is this week by default, but it can be manually modified.
    - Path: WBO - Cash Management - Deposits - Pending Requests

- Change the deposit application, add permissions, and optimize View Notes
    <img src="/assets/RPo8bVR2WoiwY8xppd1jT0pZpdL.png" src-width="3294" src-height="952" align="center"/>
    <img src="/assets/AJfZbSpBboW9S6xeBzej0nskpbe.png" src-width="3282" src-height="1202" align="center"/>
    - Change the deposit application to add permissions. If the change permission is not applied for, the corresponding operation button cannot be seen in the background.
    - Add notes to support attachment import
    - Path: WBO - Cash Management - Deposits - Pending Requests

- Bizcode group update selection component
    - Bizcode group update selection component
    - Path: WBO - Account Assets - Bizcode - Bizcode Group Management

<img src="/assets/WJ4Abao2vo9G4FxxU5zjozaFpPh.png" src-width="3326" src-height="1596" align="center"/>

- Add permission operation record
    - 1.Path: Global Settings-Identity Management-Permission Operation Record
    - 2.Function support: Support administrators to view and filter users’Historical operation records of permissions/roles

