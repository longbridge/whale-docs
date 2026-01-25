---
title: 1.1.1 CA Account Opening
slug: CbFowrXBaiv2Y8kuoIecqRrPnYs
sidebar_position: 0
---


# 1.1.1 CA Account Opening

# 1.1.1 CA Account Opening

# 1.1.1A Question: What are the verification elements for CA-certified account opening?

Answer: There are two verification elements for CA-certified account opening:

1. UnionPay card verification: ID number, full name, bank card number, mobile phone number reserved with UnionPay.
2. Facial video: compare the face photo on the ID with a live video.

# 1.1.1B Question: Why cannot mainland customers modify their address when opening an account in the App?

Answer: Customers who open an account using a Mainland China ID will have the address defaulted to the one on the ID; there is no field to enter an address. Holders of documents from other regions can enter a residential address. For domestic customers, the address can be modified in the backend by navigating to KYC &gt; Account Opening List and clicking Details (see Figure 1.1.1B).

<img src="/assets/HDTKbxiG5oahcvxI19DjimD5pXd.png" src-width="2574" src-height="984" align="center"/>

<em>Figure 1.1.1B</em>

# 1.1.1C Question: Which fields can CA-certified online account opening customers modify in the app?

Answer: CA verification uses OCR (optical character recognition) to extract information:

Name, document number, gender, date of birth — these fields are auto-filled by default and may be edited by the customer;

Detailed address, document validity dates — these cannot be modified in the current app; they can be modified in the backend (in KYC &gt; Account Opening List &gt; Details, hover over the relevant field and click the pencil icon to edit).

# 1.1.1D Question: What are the retry limits for CA authentication during account opening?

Answer: If there are too many errors, the default limits are:

- 1 minute: limited to 3 attempts;
- 1 hour: limited to 10 attempts;
- 1 day (24 hours): limited to 15 attempts.

# 1.1.1E Question: What is the source of the information used for CA account opening?

Answer: It is sourced from Shenzhen E‑Commerce Security Certificate Management Co., Ltd., which obtains Ministry of Public Security query data and UnionPay identity information.

# 1.1.1F Question: Can Mainland China customers be restricted from using the App to open accounts?

Answer: Yes. This can be configured by distinguishing customers' IP addresses; if the IP address is identified as originating from Mainland China, the customer will be prevented from using the App to open an account.

