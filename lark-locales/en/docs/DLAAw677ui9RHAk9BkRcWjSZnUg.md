---
title: Business Introduction
slug: DLAAw677ui9RHAk9BkRcWjSZnUg
sidebar_position: 0
---


# Business Introduction

# Overview

The Corporate Actions System is an important component of the securities back office, primarily used to process corporate equity change–related transactions, including dividends, share consolidations and splits, share exchanges, and other similar actions.

At present, the Corporate Actions System supports multiple types such as CBBC redemption, share consolidations and splits, dividends, rights issues, offers, and ADRs. The WTT front-end Corporate Actions page only supports viewing customer-related processing details and does not currently support operational handling of related transactions.

# Glossary

<table header_column="1" header_row="1">
<colgroup>
<col width="213"/>
<col width="631"/>
</colgroup>
<thead>
<tr><th><p>Term / Abbreviation</p></th><th><p>Description</p></th></tr>
</thead>
<tbody>
<tr><td><p>Notice Number / Announcement Number</p></td><td><p>The upstream notice number is unique. For Hong Kong securities, the number begins with the letter &quot;A.&quot;</p></td></tr>
<tr><td><p>预告类型 Announcement Type</p></td><td><p>Enumeration of corporate action types: TM / OO / EO / BE, etc.</p></td></tr>
<tr><td><p>选择开始时间 Election From</p></td><td><p>Required when the execution method is elective. Election instruction collection cannot commence until this time.</p></td></tr>
<tr><td><p>选择结束时间 Client Election To</p></td><td><p>Required when the execution method is elective. End time for client-side operations.</p></td></tr>
<tr><td><p>选择结束时间（CCASS） Election To（CCASS）</p></td><td><p>Required when the execution method is elective. The upstream broker’s selection end date in CCASS.</p></td></tr>
<tr><td><p>支付日期 Payable Date</p></td><td><p>Determines the date on which execution-related transactions are displayed. • When editing the notice, this date must be greater than or equal to the current accounting date. • During execution, additional validation ensures the date is within two days.</p></td></tr>
<tr><td><p>创建时间 Created Time</p></td><td><p>The time when the notice was created in the Corporate Actions System.</p></td></tr>
<tr><td><p>更新时间 Updated Time</p></td><td><p>The time when the notice was last updated in the Corporate Actions System.</p></td></tr>
<tr><td><p>执行方式</p></td><td><p>Describes whether customer participation in the exercise is required; divided into mandatory execution and elective (voluntary). • BE type may allow customer participation (stock selection or dividend election), but may also proceed without customer participation. • Rights issues and offers require customer participation.</p></td></tr>
<tr><td><p>过户费收取 Is Scrip Fee</p></td><td><p>Determines whether transfer fees are charged.</p></td></tr>
<tr><td><p>派发 NOMINEE</p></td><td><p>Applies to share distributions and rights issues; determines whether newly issued shares will incur transfer fees in future corporate actions. STREET requires charging transfer fees; NOMINEE does not require charging transfer fees.</p></td></tr>
</tbody>
</table>

