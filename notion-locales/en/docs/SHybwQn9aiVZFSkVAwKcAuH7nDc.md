---
title: Frequently Asked Questions
slug: SHybwQn9aiVZFSkVAwKcAuH7nDc
sidebar_position: 6
---


# Frequently Asked Questions

# Frequently Asked Questions

# Corporate Action Creation

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Will corporate action data be updated?</p>
</div>

```text
BE-class corporate actions and actions in the initialization state support automatic updates.


    The 05 file updates basic information.


    The 02 file updates the latest status and file dates.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Cannot find a pre-announcement?</p>
</div>

```text
The system creates corporate action pre-announcements based on the 05 file and only generates corporate actions for securities with positions.


In OB mode, corporate actions can be created manually based on incoming documentation.


In EP mode, the system only generates corporate actions for securities with positions. Corporate actions may be missed if transfers were not processed in time or if automatic creation occurs when there are no positions; these can be supplemented via quick-create.


In EP mode, BE-class corporate actions with data present in the 02 file will be force-generated and will no longer be conditioned on the existence of positions.
```

<img src="/assets/Bt61bszQxobPymx77fOjZTrnpGg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/L808bRkXBo2F20x6esUjxBTzpPb.png" src-width="3639" src-height="1886" align="center"/>

# Registration

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: When can registration be performed?</p>
</div>

```text
It is recommended to register on the execution date; early registration is permitted based on your requirements.


BE-class corporate actions that are registered early on the registration date will have future dividends indicated on the statement.


If a broker intends to register early, they may enable the Corporate Action - Registration check item in Pre-Settlement Preparation.


Early registrations performed on the registration date must be completed after the end-of-day Hong Kong stock clearing and settlement steps.


Security identification information for equity can only be finalized on the execution date and therefore cannot be created in advance.
```

# Fee Configuration

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Why cannot a fixed-amount one-time charge be configured for rights issues and offers?</p>
</div>

```text
Under this configuration, all clients who have not exercised would also be charged; this option has been temporarily disabled.


For client types such as RS, OO, ER, EO, TU, and TC, who may waive exercise for a corporate action, configuration can be made as follows.
```

<img src="/assets/WuyabIWemocARZx59BMjLnGNpAg.png" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: How to exempt a client from the Handling Fee?</p>
</div>

```text
In the client rules, set the rate coefficient and the minimum fee coefficient to 0.
```

<img src="/assets/IAg2bBRBXoAbXSxEykejg1QKp3d.png" src-width="3578" src-height="1798" align="center"/>

# Execution

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: No counterparty data at execution</p>
</div>

```text
A corporate action may be canceled; execution must be based on the incoming data.


The counterparty data used to reconcile reports at execution comes from CCASS 02 files. Only EP mode is supported, and currently only certain types are supported. Corporate actions can still be executed even if no counterparty data exists.
```

# BE Class

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: How are special dividends handled?</p>
</div>

```text
Two default schemes must be selected simultaneously.


A special dividend will result in two distributions and two sets of charges.
```

<img src="/assets/EJpubrizjozmTRxhwBcjiD8lpsb.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Charging of transfer fees</p>
</div>

```text
You can configure whether to charge transfer fees via the “charge transfer fee” field; this is supported only for BE-class and TM-class actions.
```

<img src="/assets/XYylbq6RsoSqTJxPJIBjqlSUpkg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: How to ensure that collected fees do not exceed the dividend amount</p>
</div>

```text
Configure this in the fee rules.


    Definition of "single fee not exceeding dividend": each individual fee item will be compared against the dividend amount.


    Definition of "priority-based fees not exceeding dividend": for example, if the Handling Fee has priority 10 and the CA Fee has priority 1, then when calculating the Handling Fee the sum of CA Fee + Handling Fee will be compared against the dividend.


The default priority for the transfer fee is 0.


When issuing equity or shares, the dividend amount is treated as zero.
```

<img src="/assets/GMx2bkWqeoZEd6xyJIvjjsICpsg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Precise definition of scrip-or-cash election</p>
</div>

```text
There is one BE-SCRIP DIVIDEND scheme and one or more BE-CASH DIVIDEND schemes.


Calculation formula for BE-SCRIP DIVIDEND: dividend amount / reinvestment amount.


A combination of a BE-SCRIP EVENT scheme that issues non-Hong Kong shares and a BE-CASH DIVIDEND is not considered a scrip-or-cash election. The backend supports the full workflow, but the client application does not support customer elections; direct dividend distribution is recommended.
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Treatment of odd lots in scrip-or-cash elections</p>
</div>

```text
Definition


    When processing a scrip election, if a client exercises for 1,000 shares, they will achieve the allocation of 100 shares. If a client exercises for 1,002 shares, the system will automatically convert the extra 2 shares to the cash option in order to maximize benefit.


Operation


    Set the "odd-lot-to-dividend" field to Yes in both the share issuance scheme and the dividend scheme.


    If there is one share-issue scheme and two dividend schemes, exactly one of the dividend schemes must be set to Yes.


    During system initialization, the odd-lot-to-dividend feature can be enabled to automatically set odd-lot-to-dividend to Yes.
```

<img src="/assets/B5ZrbF3j4oQT8OxZ3FkjfQwapbc.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: When does the customer election period end?</p>
</div>

```text
It automatically ends when the election settlement time arrives; the time cannot be modified during this period.


If the time has been modified, or if you wish to end early, you may execute the "Complete instruction collection early" operation.
```

<img src="/assets/RRJhbcm8qoxOHAx22msjG8xppyg.png" src-width="3548" src-height="1806" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ Q: Is multi-currency selection supported?</p>
</div>

```text
Both the backend and the client support selection of different currencies, and reports display correctly.
```

