---
title: 2024-05-06 Release Notes
slug: CH5uw4JCMiNYHZk59gpcSpQPnmg
sidebar_position: 37
---


# 2024-05-06 Release Notes

# 2024-05-06 Release Notes

# 🎉 New Features

- Settlement Instruction Export (New Version) (previous menu deprecated)
    - Path: Clearing Management - End-of-Day Tasks - Settlement Instruction Export
    - Supports exporting files for future dates
    - Supports exporting across multiple markets: HK, SZ, SH
    - The previous menu has been deprecated

<img src="/assets/IguTbuZVlopkaRxZPFSjnC04p7e.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/VFSZbbIIYohM1Ax8pdXjtVKOp1d.png" src-width="3574" src-height="1774" align="center"/>

- Added 'Enterprise Entity Type' field to corporate account information
    <img src="/assets/Nxg0bDy3yoxcjyxXPYjjpFxzpUh.png" src-width="2180" src-height="1264" align="center"/>
    - Added the 'Enterprise Entity Type' field to the offline corporate account opening process; this field is optional
    - The KYC detail page now supports display and editing of the new field
    - The bulk edit feature has been updated to support batch updates of the 'Enterprise Entity Type' field

- Custom Pre-Clearing Preparation Configuration
    <img src="/assets/RNRPbvJCqoNuglxbItKj6YrVpxe.png" src-width="3574" src-height="1774" align="center"/>
    - Path: Business Parameter Settings - End-of-Day Settings - Pre-Clearing Preparation
    - Explanation of check stages: Trade Clearing (data synchronization — checks before clearing and settlement); End-of-Day Final Settlement (data aggregation — checks before day cut-off)
    - Explanation of post-failure handling: Notify Only (does not block the process; only prompts), Work Order Review (will block the process but can be manually approved), Forced Validation (will block the process and must pass)
    - Supported operations: enable/disable, and select the post-failure handling method
    - Editable time window: before executing the end-of-day tasks
    - Editing requires approval; work order identifier: clearing.before_clearing_ready.settiing
    - Other: some checks are mandatory and cannot be edited

- End-of-Day Task Merging and Clearing Initialization Configuration
    <img src="/assets/SRsOb0xyuouUqNxZ5NXjgfLQpve.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/R8MrbWVCAofsbFxXwFPjg0U7png.png" src-width="3574" src-height="1774" align="center"/>
    - Path: Business Parameter Settings - End-of-Day Settings - Clearing Parameter Configuration
    - Editable time window: before executing the end-of-day tasks
    - Editing the clearing initialization configuration requires approval; work order identifier: clearing.update_system_config.exec
    - Other:
        - When modifying other configuration toggles, please contact the client and operate under guidance

- Added email notifications after corporate actions complete
    <img src="/assets/XuoNbdeosogQDnxpxTvjc37Cp5d.png" src-width="856" src-height="190" align="center"/>
    <img src="/assets/ADYrbC70eoApBmxYXyFjHPsxpjb.png" src-width="828" src-height="182" align="center"/>
    <img src="/assets/O9m3bsHrModttsxRbuYjg5kjpl6.png" src-width="1242" src-height="232" align="center"/>
    <img src="/assets/GfaobvOgmoC3vgxoycOjNZsyp3b.png" src-width="1268" src-height="222" align="center"/>
    <img src="/assets/AjpWbCuwlotFs6xiDURjgElApve.png" src-width="1210" src-height="274" align="center"/>
    <img src="/assets/VpdnbKztuoruO9x3C9ujtTTCpTh.png" src-width="1182" src-height="334" align="center"/>
    - Rights offering types: RS, ER, OO, RS
    - Offer-type actions
    - Share splits/consolidations and share exchanges
    - ADR execution
    - Dividends and bonus shares
    - Options corporate actions

- WBO FX Exchange Cancellation Added
    - For FX exchange requests submitted by clients, cancellation eligibility is determined based on the "Client Exchange Status". Specifically: when "Client Exchange Status" = "Submitted" or "Exchanging", cancellation is permitted.

<img src="/assets/XRrsbYHYIovKO8xrOrejmbmmpQf.png" src-width="3276" src-height="1776" align="center"/>

# 🪀 Improvements and Fixes

- Corporate actions related improvements
    <img src="/assets/K5y8b16h1oSIlaxA3bAjQ8xJpff.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/XEtWbTiEto0MuuxbLCljmEsPpuL.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/ZdDcbHmG2oQJpDxOsVEjm7bUpDf.png" src-width="3574" src-height="1774" align="center"/>
    - The search component for targets has been upgraded
    - Added a prompt for voluntary corporate actions unsupported by the BE category. If the backend supports exercise but the app does not, customers will not be notified
    - Added an 'Email Sent Time' to the client name; this field displays the most recent email sent time for the corporate action
    - Other:
        - BE category is now compatible with the BONUS CONVERTIBLE NOTE scheme type and will map to BE-BONUS ISSUE on auto-creation
        - Optimized GST handling logic for the Singapore market

- Clearing check optimizations
    <img src="/assets/KrFrbJst9oWjSOxZ8uxjtLglpBh.png" src-width="3574" src-height="1774" align="center"/>
    - Balance reconciliation now excludes frozen transactions

- Pre-clearing preparation optimizations
    <img src="/assets/CVNvbGGszo7RFlxSI4bj1VLQpIh.png" src-width="3574" src-height="1774" align="center"/>
    - Closing price confirmation: items that generated alerts the previous day will no longer error; Hong Kong stock code ranges 41000–46999 and 49000–49499 will no longer error
    - Trade file check: no error if no trades were initiated on the day

- Accounting middleware onboarding fees now sourced from billing and copy adjusted
    - The accounting middleware's onboarding fees are now sourced from billing
    - Renamed the accounting middleware data source names:
        - "Other Fees Bill" renamed to "Agent Charges"
        - "[LOTSNSDR] Other third-party fees (Sell)" renamed to "Agent Charges - Equity Trading - Commission (Sell)"
        - "[LOTSNSCR

<img src="/assets/PasBbRCPaoA6WGxJHVCjawqNpbg.png" src-width="2158" src-height="1152" align="center"/>

- WBO Home Dashboard pending quota card display logic updated
    - Withdrawal To-Do: application statuses = "To Submit", "Under Approval", "Modification Pending Approval", "Deletion Pending Approval", "Rejection Pending Approval"
    - Deposit To-Do: Match status = "Unmatched" and credit status = "Processing", "Modification Pending Approval", "Deletion Pending Approval", or "Rejection Pending Approval"
    - Securities Withdrawal To-Do: combined count of the "To Submit" and "In Progress" metric cards for withdrawal applications
    - Securities Deposit To-Do: combined count of the "To Submit" and "In Progress" quota cards for deposit applications
    - Bank Cards Pending Review: authentication status = "Pending Authentication" && deletion status = "Not Deleted"

<img src="/assets/EoRybS5LOojKPUxubu1jUqswpFg.png" src-width="3838" src-height="1802" align="center"/>

- Added Chinese enumeration values for abnormal exchange records
    - The enumeration values of "Channel Exchange Status" on the abnormal FX records page are displayed according to the language environment

<img src="/assets/CCF6bXHvJoDUo7xqMEujeVuEpIc.png" src-width="3302" src-height="1708" align="center"/>

- Statement sending method configuration changed from customer number to Client ID dimension
    <img src="/assets/VOiybqmppowGpnx5Ee4jFsP8pdg.png" src-width="3212" src-height="984" align="center"/>
    - The statement sending method configuration has been changed to the Client ID dimension, supporting statement delivery configuration per individual account (corresponds to the APP "Statement Reminder" feature)
        - The list now includes a [Client ID] column
        - The batch import file must include the Client ID field, filled according to the template
    - Path: Clearing Management - End-of-Day Management - Statement Management - Sending Method Configuration

- Removed the "Receive Offline Statements" entry from the offline account opening process
    <img src="/assets/AbMebQ1s3o8QAlxHho7jjJTupFd.png" src-width="1232" src-height="1694" align="center"/>
    - The "Receive Offline Statements" field has been removed from the offline account opening process and unified for maintenance in the Statement Management module, enabling statement receipt to be managed at the Account level
    - Path: KYC - Data Management - Account Opening Information - Final step of the offline corporate account opening process

