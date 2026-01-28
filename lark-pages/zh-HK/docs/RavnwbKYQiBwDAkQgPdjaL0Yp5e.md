---
title: 18. 風控問題
slug: ZRKmwiiYDiLpCAkvio5cMBkInCc
sidebar_position: 17
---


# 18. 風控問題

# 18A. 問：設置交易額度的分幣種或全幣種有何分別？

**答：**設置分幣種需要選上對應貨幣，并限制在對應市埸使用；
設置全幣種可以在不同市埸上用交易額度限額，如設置了全幣種就不能設置分幣種的交易額度。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>顯示出來的額度會換算成 HKD。</p>
</div>

18B. 問：若同時存在全局限額和客戶限額會怎麼判斷？

**答：**限額順序是客戶限額 &gt; 全局限額；證券限額 &gt; 全局限額；交易員限額 &gt; 全局限額。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>例如：全局限額配置了【客戶買入拒絕限額】為 &gt; 500,000 HKD；用戶 A 配置了【客戶買入拒絕限額】為 &gt; 400,000 HKD 拒絕。用戶 A 下買單 410,000，命中了設置限額，會直接拒絕；用戶 B 下買單 410,000，則會判斷全局配置的限額，未命中，則會通過。</p>
</div>

# 18C. 問：客戶的現金賬戶戶口餘額為正數，沒有向券商借款，為什麼會佔用融資額度？

答：「風控管理＞客户融資」的 “已佔用融資額度” 包括已凍結不可用的現金。

<img src="JLPGbTjUxontxYx1bzAjd8M4pBb" src-width="2828" src-height="1346" align="center"/>

<img src="VJHHbbbUOo9vLlxH2gBj1jtfphg" src-width="2856" src-height="1602" align="center"/>

# 18D. 問：子賬戶總資產沒有負數，為什麼「風控狀態」是「危險」？

答：如果主賬戶的「風控狀態」是「危險」，子賬戶也會跟從主賬戶，「風控狀態」為「危險」。

# 18E. 問：Haircut管理中「指數Haircut管理」的指數會否自動更新成份股列表內的資訊？

答：「指數Haircut管理」會自動更新股票成份股比重、股份等資訊。

<img src="FJF4brbQ8oRjxkxCs6Jj0cempHc" src-width="2858" src-height="1298" align="center"/>

# 18F. 問：「Haircut 管理」中，現金或融資戶口可否獨立使用不同的haircut%去計算？

答：現金戶口和融資戶口不可以獨立用不同的haircut%去計算。

<img src="Mi2xbSLJUoXihzx1X0bjVlhApeb" src-width="2808" src-height="1330" align="center"/>

