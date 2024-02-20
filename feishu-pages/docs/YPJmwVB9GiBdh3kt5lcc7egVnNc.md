---
title: 業務介紹
slug: YPJmwVB9GiBdh3kt5lcc7egVnNc
sidebar_position: 0
---


# 業務介紹

# 概述

公司行動系統是證券後臺的重要組成部分，主要用於處理公司股權變動相關業務，包括分紅、拆合股、換股等

# 名詞釋義

<table header_column="1" header_row="1">
<colgroup>
<col width="203"/>
<col width="719"/>
</colgroup>
<thead>
<tr><th><p><strong>術語/ 缩略詞</strong></p></th><th><p><strong>說明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>登記日Record Date</p></td><td><p>分股分紅的登記日，拆合股的生效日<br/>系統基於此獲取持倉客戶</p></td></tr>
<tr><td><p>除權日 Ex Dividend Date</p></td><td><p>在除權日前一天結算後，仍持有該股票的投資者會自動參與該公司行動。例如股票派息的話, 除權日當天開市時會自動將公佈會派出的利息於股價扣減<br/>美股公司行動等會將除權日轉化爲登記日，系統實際交互以登記日爲準</p></td></tr>
<tr><td><p>預告編號<br/>公告編號</p></td><td><p>上手的預告編號，具有唯一性<br/>港股爲A開頭的編號</p></td></tr>
<tr><td><p>預告類型Announcement Type</p></td><td><p>枚舉：TM/OO/EO/BE 等各類型公司行動</p></td></tr>
<tr><td><p>選擇開始時間Election From</p></td><td><p>執行方式爲可選擇的必須填寫<br/>必須到這個時間點才能_進行行權指令收集_</p></td></tr>
<tr><td><p>選擇結束時間Client Election To</p></td><td><p>執行方式爲可選擇的必須填寫<br/>C端客戶操作結束時間</p></td></tr>
<tr><td><p>選擇結束時間（CCASS）Election To（CCASS）</p></td><td><p>執行方式爲可選擇的必須填寫<br/>上手券商選擇結束日期</p></td></tr>
<tr><td><p>支付日期Payable Date</p></td><td><p>決定執行的流水展示在那一天</p></td></tr>
<tr><td><p>創建時間Created Time</p></td><td><p>預告在公司行動系統內創建的時間</p></td></tr>
<tr><td><p>更新時間Updated Time</p></td><td><p>預告在公司行動系統內創建的時間</p></td></tr>
<tr><td><p>執行方式</p></td><td><p>描述公司行動流程推進是否需要客戶參與行權，分爲強制執行和可選擇（自願類）</p></td></tr>
<tr><td><p>過戶費收取 Is Scrip Fee</p></td><td><p>決定是否收取過戶費</p></td></tr>
<tr><td><p>派發NOMINEE</p></td><td><p>派股、供股等才生效，決定新派發的股票是否在將來的公司行動中需要收取過戶費，STREET需要收取，NOMINEE不需要收取</p></td></tr>
</tbody>
</table>

