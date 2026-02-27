---
title: HKIDR Operating Manual
slug: AnubwQdN9i1KGHkt9tmccZ9hnXf
sidebar_position: 3
---


# HKIDR Operational Documentation

# HKIDR Operating Manual

# 1. Configure HKIDR Participants

Configure participant information for HKIDR.

<img src="/assets/JV3PbrArIoVS8oxD0cIjFqw3pLh.png" src-width="3024" src-height="1648" align="center"/>

Path: in "Customer Management System &gt; Account Management &gt; BCAN Code Management &gt; Participant Management"

<img src="/assets/J6OEb7vIsovntgxkI3djrXf8pCh.png" src-width="2528" src-height="1542" align="center"/>

# 2. Configure BCAN Plan

<img src="/assets/NhLfbZNdboXDpLxz5VBjXGXnpzb.png" src-width="3024" src-height="1648" align="center"/>

Path: Customer Management System -&gt; Account -&gt; BCAN Code -&gt; BCAN Plan

<img src="/assets/AccqbMDb5oMicLxBA5QjYLCopFg.png" src-width="3024" src-height="1648" align="center"/>

# 3. Assign BCAN

1. When a customer account is opened, a BCAN will be automatically assigned to the customer, and the reporting process will be activated once the customer consents to the HKIDR authorization agreement.
2. Existing customers: after BCAN ranges have been configured, please contact Changqiao as soon as possible; we will automatically assign BCANs to existing customers according to the configured ranges.

# 4. Report BCAN to HKEX

Reporting logic: The data reported comprises all customers with opened accounts who have BCANs and have consented to the authorization agreement. After reporting to the exchange and receiving the files returned by the exchange, synchronize and update the BCAN activation status.

The EP mode supports both ECP SFTP and ECP Web methods.

The Non-EP mode supports the ECP Web method.

## EP Mode Reporting

### 1) Method 1: SFTP System Reporting

Supports automatic reporting via ECP SFTP.

Prerequisites: provide the SFTP SDNet/2 line, User ID, and private key.

Reporting method:

During trading days between 07:00 AM and 03:00 PM, manually click the "Initiate Report" button; the system will automatically generate a BCAN-CID file and submit it to the exchange via SFTP.

<img src="/assets/AmisbhyG5oXIUyxp9cYjidDgpyb.png" src-width="3024" src-height="1648" align="center"/>

The exchange will return a response file within ten minutes; after 6:00 PM it will return the validation file and the full image file. The system will automatically parse these files and update the customer's BCAN status.

<img src="/assets/IHDcbL4kmolgxXxjlfkja23Aphg.png" src-width="3024" src-height="1648" align="center"/>

### 2) Method 2: ECP Web Manual Reporting

Download the reporting file from the Whale backend, upload the reporting file to the exchange website, and import the full image file returned by the exchange into the backend.

Prerequisites: apply to the exchange for an ECP User ID and Password.

Procedure:

- Click the "Download Reporting File" button on the right to export and save the reporting file;

<img src="/assets/C24KbQumEoFdJWxWFG1jGMnRpsc.png" src-width="2518" src-height="1402" align="center"/>

- Log in to the exchange website and upload the reporting file to the ECP platform at:
[https://ecp2.e2etest.hkex.com.hk/](https://ecp2.e2etest.hkex.com.hk/)

<img src="/assets/MRribU06mo8JjExb3okjsx51p9f.png" src-width="2898" src-height="1656" align="center"/>

<img src="/assets/LxBIb0TVCoqMKwxT9mLjqRvspie.png" src-width="2896" src-height="1674" align="center"/>

<img src="/assets/TQ8Yb6Ufkon25Lx18dRjZk0Vp5d.png" src-width="2940" src-height="1612" align="center"/>

<img src="/assets/TyvPbPvVoowzXhxUh4mjlN0ipEe.png" src-width="2952" src-height="1626" align="center"/>

<img src="/assets/REx6b3RlnorBBlxznZHjHD1bpZc.png" src-width="2670" src-height="1354" align="center"/>

- Import the full image file returned by the exchange into the backend page;

<img src="/assets/F2z4blQL5o6OZdxFEHkjY2T2pfb.png" src-width="2508" src-height="1414" align="center"/>

- The customer's BCAN activation status will be updated accordingly;

<img src="/assets/RHf1bF47ooJdRgxAZwFjsYsDpNg.png" src-width="2498" src-height="1418" align="center"/>

## Non-EP Mode Reporting

Download the reporting file from the Whale backend, upload the reporting file to the exchange website, and import the full image file returned by the exchange into the backend.

Prerequisites: apply to the exchange for an ECP User ID and Password.

Procedure:

- Click the "Download Reporting File" button on the right to export and save the reporting file;

<img src="/assets/OiqZbt0NaonSOaxladsjr4MnpMi.png" src-width="2518" src-height="1402" align="center"/>

- Log in to the exchange website and upload the reporting file to the ECP platform at:
[https://ecp2.e2etest.hkex.com.hk/](https://ecp2.e2etest.hkex.com.hk/)

<img src="/assets/M52hbTnilov2lvxYaEsjwx0CpPe.png" src-width="2948" src-height="1704" align="center"/>

<img src="/assets/IoTEbSXOWoygVrxa2I6j2fDVpfb.png" src-width="2946" src-height="1642" align="center"/>

<img src="/assets/CuBFbXhxyoVA26xhDERjNEmmprb.png" src-width="2940" src-height="1612" align="center"/>

<img src="/assets/ABk5b8i6SoYqp5xBnpGjDRErpYS.png" src-width="2952" src-height="1626" align="center"/>

<img src="/assets/Ex03bxKbBowae8xHF65jA0KEprR.png" src-width="2670" src-height="1354" align="center"/>

- Import the full image file returned by the exchange into the backend page;

<img src="/assets/Ip5Pb8co5oxXfxxK1fjjLXyIpQd.png" src-width="2508" src-height="1414" align="center"/>

- The customer's BCAN activation status will be updated accordingly;

<img src="/assets/IqEwb41doojiTvxpQAPjuhmppyh.png" src-width="2498" src-height="1418" align="center"/>

# 5. Other Report Files

1. When multiple files of the same type are submitted on T day, the last file submitted before the deadline will be accepted;
2. The processing result report will be returned by 8:00 AM on T+1. |
| 2 | Change BCAN Report     | Regulated intermediaries submitting matched files (including EP and Non‑EP)      | Same as above                                                                                         |
| 3 | BCAN Error Trade Report   | Exchange participants (EP) entering the relevant trade instructions and off‑exchange trades in OTP‑C       | Same as above                                                                                         |
| 4 | Off‑Exchange Trade (Buy‑side) Report | Buy‑side exchange participants (EP) for off‑exchange (manual) trades             | Same as above                                                                                         |
| 5 | Broker Client Code Report for Change of Liquidity Provider Quote     | Exchange participants changing broker client codes for liquidity provider quotes (EP)        | Same as above                                                                                         |

Format requirements: All files must be in CSV format.

## 1) Aggregated Transaction Report (Aggregated Transaction Report)

Regulated intermediaries for aggregated trading instructions or aggregated off‑exchange trades must, within T+3 days, fill in the details of each related trade executed under the aggregated instruction into the provided template and submit it to the exchange via ECP Web.

Template: HBCNATBN_BPX066_20220704.csv

## 2) Change BCAN Report (Change BCAN Report)

To modify an already effective broker client code, fill in the customer's information in the provided template and submit it to the exchange via ECP Web.

Template: HBCNBCBN_BPX066_20220704.csv

## 3) BCAN Error Trade Report

If partially or fully submitted trade instructions are found to be incorrect, submit the required change information to the exchange via ECP Web before 6:00 PM on the trading day.

Template: HBCNERBN_21950_20220704.csv

## 4) Off‑Exchange Trade (Buyer) Broker Client Code Report

If the buyer's exchange participant fails to enter the broker client code before market close, the buyer's exchange participant must submit a report to the exchange via ECP Web.

Template: HBCNOTBN_21950_20220704.csv

# Appendix

## Schedule

