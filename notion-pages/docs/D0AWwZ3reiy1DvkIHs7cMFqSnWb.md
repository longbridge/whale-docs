---
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
title: 2.2 換滙
sidebar_position: 2
---


# 2.2 換滙


# 2.2A 問：如何設置換滙操作？


**答：**前期設置請參考以下步驟。確認已配置幣種為可滙兌**、**幣種對、換滙策略、換滙池額度。
(i). 在「業務參數設置＞資金參數＞幣種」頁面中，操作欄點擊「編輯」把滙兌功能設置為"yes"


![image.png](/assets/bc687cb7ce514533aa746f8329a76eec.png)


![image.png](/assets/62f0c2da0fdeceb6a46de49f57ea3f78.png)


(ii). 在「業務參數設置＞滙兌＞幣種對」頁面中點擊「新建」添加可兌出及兌入幣種


![image.png](/assets/31b62394ad7ac84bc78efb98597fe04f.png)


![image.png](/assets/6d7fcf1ca9ac9869808ddff40c17a48f.png)


(iii). 在「業務參數設置＞滙兌＞換滙策略」頁面中點擊「新建」


![image.png](/assets/4dfb320190848663741d8de6ac394746.png)


(iv). 在「新建」頁面添加按兌出及兌入幣種

- 默認（如選了「指定」滙兌類型，不能為「無」）
- 服務策略：滙兌池換滙
- 滙兌類型：無
- 輸入服務時段
- 支持的幣種對，點擊「添加」

![image.png](/assets/a4a73e2f34eda12525304a6f4a76e793.png)


(v).在「款項管理＞換滙池＞額度配置」點擊「新建」


![image.png](/assets/1cc0c4766eefa7978c9e228a93de8b6a.png)


(vi). 在「新建」頁面

- 幣種：添加兌出兌入的幣種
- 警戒線金額：輸入金額 （如到達警戒線會作提醒）
- 剩餘額度調整：輸入金額

![image.png](/assets/9011e8bcd861965db9e06b5f8c63639c.png)

- 基礎設置完成後，可以操作換滙。

（一） 在「款項管理＞換滙＞客户滙兌 」點擊「手工換滙」。

> 手工換滙自定義滙率支持到 8 位小數。如超過 8 位小數，需要先駁回換滙申請，使用調賬功能操作

![image.png](/assets/562a076665e27ccbe291a5e7f34a9dbb.png)


![image.png](/assets/d1b0c7a59903cc451d104169a73dbb9a.png)


（二） 在操作欄點擊「複核」通過或駁回申請


![image.png](/assets/5dae5dbffc35cd715a92baf4f16da2ab.png)


![image.png](/assets/9959c88af0f5ce967f103222671ac7d4.png)


# 2.2B 問：Manual current / Manual account 有什麼區別？有什樣的影響？


**答：**結單上的滙率（見 2.2B 圖一） 及 手工換滙的系統配置匯率（見 2.2B 圖二） 會跟隨即期匯率（Manual_current）。Manual_current 的滙率會一直根據上次修改的記錄顯示，直至手動再更新。

> 參考滙率以**中間拆算價**換算總資產市值。


會計與換匯、資產相關的報表，如 FRR006、FDR001、SDR003 的滙率類型（見 2.2B 圖三），可選帳面匯率通常用於計算資產，帳務才會涉及到帳面匯率（Manual_account）。


![image.png](/assets/4e9fd08b4aff55c52fe39a493a0ee30f.png)


_2.2B 圖一_


![image.png](/assets/3e821f30fbe92e0097351122160be4a0.png)


_2.2B 圖二_


![image.png](/assets/559d6b25686aa8a7668ef60701a968f2.png)


_2.2B 圖三_


# 2.2C 問：客户提交換滙申請為何不成功？


**答：**換滙池需要有足夠的額度才能作換滙。

設置換滙池的步驟見以下：


(i). 在「業務參數設置＞滙兌＞換滙池額度配置」頁面點擊「新建」


![image.png](/assets/d0ee14a5094c8afa884e3ea112b96959.png)


(ii). 在編輯頁面：

- 幣種：添加兌出兌入的幣種
- 警戒線金額：輸入金額 （如到達警戒線會作提醒）
- 剩餘額度調整：輸入金額

![image.png](/assets/bdaed1a3cfce4e534c896609be6ac08d.png)


# 2.2D 問：人工換滙能使用自己的滙率嗎？


**答：**可以在「款頁管理＞換滙」頁面點擊「手工換滙」選自定義滙率輸入。


![image.png](/assets/cb6c186a3f9bfed5645301f57d6e9cf5.png)


# 2.2E 問：如何設置每筆換滙都需要人工審核？


**答：**在「業務參數設置＞滙兌＞換滙策略」點擊「審批起點」，設置審核起始金額，如：0.01。 


![image.png](/assets/be4e5135672520e2203a345fe139f7bf.png)


![image.png](/assets/4cd07ea77b0e72a6302cbaa0a6b1c02b.png)


# 2.2F 問：出入金、換滙能有通知嗎？


**答：**在右上方齒輪的「消息設置＞訂閱管理」頁面（見 2.2F 圖一、圖二）點擊「新建」。


可選“換滙、出入金需要審核”電郵通知（見 2.2F 圖二）。剔選郵件方式通知并添加需要通知的人員／角色（見 2F 圖三）。如客户透過 App 提交換滙的沒有電郵提醒。


![image.png](/assets/080af6970e16d553749bb4990a405fbd.png)


_2.2F 圖一_


![image.png](/assets/9e03e45bc9157f64a60fe560f4ea94fc.png)


_2.2F 圖二_


![image.png](/assets/2ee9e0808b901962554cd9d562e64430.png)


_2.2F 圖三_


_Webhook 為內部飛書通知沒對外開放_

