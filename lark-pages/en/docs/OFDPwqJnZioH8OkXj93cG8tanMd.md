---
title: 5.2.1 Statement Settings Modification
slug: OFDPwqJnZioH8OkXj93cG8tanMd
sidebar_position: 0
---


# 5.2.1 Modification of Closing Statement Settings

# 5.2.1 Statement Settings Modification

# 5.2.1A Question: If a login phone number is absent and is subsequently added or changed, will this affect the statement password?

<b>Answer:</b> Yes. If the login mobile number is added or changed in the work order center, the statement password will be updated.

The logic for statement passwords is as follows:

1. If the client has a login mobile number, the attachment password is the last four digits of the login mobile number plus the last four digits of the identity card number;
2. If there is no login mobile number, the statement password uses the last four digits of the contact mobile number plus the last four digits of the identity card number;
3. If neither a login nor a contact mobile number is available, the last four digits of the identity card number will be used.

If the client has provided multiple nationality documents, the priority order for selecting the document number is: Hong Kong identity card ＞ National identity card ＞ Passport, consistent with the Hong Kong Stock Exchange’s BCAN reporting order.

# 5.2.1B Question: How is the statement language configured?

<b>Answer:</b> See the following steps:
(i) In "Clearing Management ＞ Statement Management ＞ Statement Template," click "Edit"

<img src="/assets/QPTVbtH8MolcOoxR9WpjvYV4pgc.png" src-width="1842" src-height="1430" align="center"/>

(ii) Scroll to the bottom of the page and click "Statement Language" to select a language

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>&quot;Follow System&quot; means to follow the display language setting of the client&#39;s app</p>
</div>

<img src="/assets/C574bjBlxowVeWxH3a3jn3SrpXg.png" src-width="1898" src-height="1430" align="center"/>

# 5.2.1C Question: How can the statement "Liability Disclaimer" be modified?

Answer: By clicking "Edit" in "Clearing Management ＞ Statement Management ＞ Statement Template," you can modify the company information, contact details, and liability disclaimer on the statement.

<img src="/assets/CKDkbYRntoqarNxEHunj05LMpAg.png" src-width="1980" src-height="1410" align="center"/>

# 5.2.1D Question: In the statement "Delivery Method Configuration," what does "Offline Sending" mean?

Answer: "Offline Sending" refers to manual delivery via email or postal mail; the system will not send statements to customers who have selected "Offline Sending."

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>You can click &quot;Edit&quot; to modify this setting</p>
</div>

<img src="/assets/JQjIbwAYfoGU1HxHtyKjxEbYpFf.png" src-width="2814" src-height="1300" align="center"/>

