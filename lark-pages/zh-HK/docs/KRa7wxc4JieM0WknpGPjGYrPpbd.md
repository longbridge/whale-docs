---
title: 2.2 換滙
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
sidebar_position: 2
---


# 2.2 換滙

# 2.2A 問：如何設置換滙操作？

**答：<b>前期設置請參考以下步驟。確認已配置幣種為可滙兌</b>、**幣種對、換滙策略、換滙池額度。
(i). 在「業務參數設置＞資金參數＞幣種」頁面中，操作欄點擊「編輯」把滙兌功能設置為"yes"

<img src="/assets/JP5vbtaM3o5hrqxMWR4jEnX6p4g.png" src-width="2641" src-height="1274" align="center"/>

<img src="/assets/OTAgbmPzRoSAUCxfBNgjOyGQpof.png" src-width="2858" src-height="1635" align="center"/>

(ii). 在「業務參數設置＞滙兌＞幣種對」頁面中點擊「新建」添加可兌出及兌入幣種

<img src="/assets/VbPNbK6NQobPGyxCvAEjdXlOpJd.png" src-width="2635" src-height="1203" align="center"/>

<img src="/assets/HtxUbbxLfoPg2gxjyYVjTVWxp6d.png" src-width="2383" src-height="941" align="center"/>

(iii). 在「業務參數設置＞滙兌＞換滙策略」頁面中點擊「新建」

<img src="/assets/ABqObm2rzoeQ8LxxtdujKCHbpCb.png" src-width="2627" src-height="1291" align="center"/>

(iv). 在「新建」頁面添加按兌出及兌入幣種

- 默認（如選了「指定」滙兌類型，不能為「無」）
- 服務策略：滙兌池換滙
- 滙兌類型：無
- 輸入服務時段
- 支持的幣種對，點擊「添加」

<img src="/assets/AWVQbxSmio8Ff3xrZtLjU8E6p2o.png" src-width="2229" src-height="1372" align="center"/>

(v).在「款項管理＞換滙池＞額度配置」點擊「新建」

<img src="/assets/VsA9bq2EIouPDExOPOaj3gmtpvf.png" src-width="2856" src-height="1555" align="center"/>

(vi). 在「新建」頁面

- 幣種：添加兌出兌入的幣種
- 警戒線金額：輸入金額 （如到達警戒線會作提醒）
- 剩餘額度調整：輸入金額

<img src="/assets/Wg37bYRYqo6RSzxNpfYjeMnfp3f.png" src-width="2246" src-height="1370" align="center"/>

- 基礎設置完成後，可以操作換滙。

（一） 在「款項管理＞換滙＞客户滙兌 」點擊「手工換滙」。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>手工換滙自定義滙率支持到 8 位小數。如超過 8 位小數，需要先駁回換滙申請，使用調賬功能操作</p>
</div>

<img src="/assets/LviobOyhKoliXMxbGFNj6RoppZe.png" src-width="2599" src-height="1104" align="center"/>

<img src="/assets/Aa13blgWyoZODux3hUljSVo0pVc.png" src-width="2702" src-height="1232" align="center"/>

（二） 在操作欄點擊「複核」通過或駁回申請

<img src="/assets/E3yibwIBzocQEJxW4q4juZOWpQe.png" src-width="2236" src-height="1034" align="center"/>

<img src="/assets/K5nabcrCRo6kI1x4hCSjD2jHp2d.png" src-width="2228" src-height="1367" align="center"/>

# 2.2B 問：Manual current / Manual account 有什麼區別？有什樣的影響？

**答：**結單上的滙率（見 2.2B 圖一） 及 手工換滙的系統配置匯率（見 2.2B 圖二） 會跟隨即期匯率（Manual_current）。Manual_current 的滙率會一直根據上次修改的記錄顯示，直至手動再更新。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>參考滙率以<b>中間拆算價</b>換算總資產市值。</p>
</div>

會計與換匯、資產相關的報表，如 FRR006、FDR001、SDR003 的滙率類型（見 2.2B 圖三），可選帳面匯率通常用於計算資產，帳務才會涉及到帳面匯率（Manual_account）。

<img src="/assets/VzXNbxXd9oQxoBxsIJDjoNXspQh.png" src-width="1268" src-height="194" align="center"/>

<em>2.2B 圖一</em>

<img src="/assets/DsGqbukeYof7Tjxzj4djUWD3pdg.png" src-width="2510" src-height="768" align="center"/>

<em>2.2B 圖二</em>

<img src="/assets/AlS3b9Ir0oj3qMxKBL8jVah5pKh.png" src-width="2042" src-height="382" align="center"/>

<em>2.2B 圖三</em>

# 2.2C 問：客户提交換滙申請為何不成功？

**答：**換滙池需要有足夠的額度才能作換滙。

設置換滙池的步驟見以下：

(i). 在「業務參數設置＞滙兌＞換滙池額度配置」頁面點擊「新建」

<img src="/assets/Lahgbr2cZo7HtGxr5ZBjtc5ppdb.png" src-width="2856" src-height="1555" align="center"/>

(ii). 在編輯頁面：

- 幣種：添加兌出兌入的幣種
- 警戒線金額：輸入金額 （如到達警戒線會作提醒）
- 剩餘額度調整：輸入金額

<img src="/assets/EB3ObjdOBoEZYFxSXNUjEnOSpqh.png" src-width="2096" src-height="1354" align="center"/>

# 2.2D 問：人工換滙能使用自己的滙率嗎？

**答：**可以在「款頁管理＞換滙」頁面點擊「手工換滙」選自定義滙率輸入。

<img src="/assets/CAthbBBofoit9lxIGhHjEW1Xpwg.png" src-width="2500" src-height="986" align="center"/>

# 2.2E 問：如何設置每筆換滙都需要人工審核？

**答：**在「業務參數設置＞滙兌＞換滙策略」點擊「審批起點」，設置審核起始金額，如：0.01。

<img src="/assets/VlSmbdaR3olrqVx4ewHjydoJphK.png" src-width="2712" src-height="1394" align="center"/>

<img src="/assets/ZCeGbmBZvotR2rx4HXujra6epVa.png" src-width="2346" src-height="940" align="center"/>

# 2.2F 問：出入金、換滙能有通知嗎？

**答：**在右上方齒輪的「消息設置＞訂閱管理」頁面（見 2.2F 圖一、圖二）點擊「新建」。

可選“換滙、出入金需要審核”電郵通知（見 2.2F 圖二）。剔選郵件方式通知并添加需要通知的人員／角色（見 2F 圖三）。如客户透過 App 提交換滙的沒有電郵提醒。

<img src="/assets/SHkXbRHw4oaI4yxM6FIj5L6Spce.png" src-width="2386" src-height="374" align="center"/>

<em>2.2F 圖一</em>

<img src="/assets/HfZMbrJZiorbDJxSLrXjFr3zpHd.png" src-width="2371" src-height="1098" align="center"/>

<em>2.2F 圖二</em>

<img src="/assets/BVstbil1goLos2xdImtj3Ldjpi8.png" src-width="2021" src-height="966" align="center"/>

<em>2.2F 圖三</em>

<em>Webhook 為內部飛書通知沒對外開放</em>

