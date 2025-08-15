---
slug: LxIbwuET8iV363kcGINc6wHxnth
title: 7. 佣金計費問題
sidebar_position: 6
---


# 7. 佣金計費問題


# 7A 問： 如何查詢客戶佣金收費？


**答：**見以下步驟，


(i). 在「業務參數設置＞計費管理＞客户計費查詢」頁面


![image.png](/assets/b6153cfb8ceb11193b9311b0697bf682.png)


(ii). 以「賬戶號碼」查詢客戶的收費及特殊收費

> 註＊特殊收費會優先於客户設置的收費

![image.png](/assets/67b69097c755be553934935e7b8a3f56.png)


# 7B 問：如何修改客户佣金？


**答：**在「業務參數設置＞計費管理＞客户計費配置」新建一個獨立的佣金費率給客户（見 7B 圖一）。


如計費套餐已有相關收費，可以在「客户組計費配置」進入詳情頁後，點擊「管理組內客户」把客户添加進去（見 7B 圖二、圖三）。

> 客戶計費設置取收費優先順序：針對某個客戶的設置＞普通客戶組＞全局客戶組。

![image.png](/assets/10a39a3fe09fbe4ce9a79f83488b4338.png)


_7B 圖一_


![image.png](/assets/fd9f9921f9ac5494dcb032d275663ad5.png)


_7B 圖二_


![image.png](/assets/a5a3ff1594b6c4e73806ad2d2bd67c56.png)


_7B 圖三_



# 7C 問：如何修改政府雜費或佣金費率？ （客户組計費修改）


**答：**（i）在「業務參數設置＞計費管理＞客户組計費配置」頁面中的 “默認客户組” 點擊「編輯」。


![image.png](/assets/3111e72f16acb8a8c5eb6ac94c42f649.png)


(ii). 在操作欄中點擊「編輯」修改相應的收費埸景。


![image.png](/assets/6d1d9c73d2710fe0d50ee3bcf8029666.png)


(iii). 可修改費率、最低/最高收費。


![image.png](/assets/c44799d281f60881b3d9ee973ddd23ec.png)


(iv). 修改完成後點擊「提交」（編輯後約 10 分鐘生效）。


![image.png](/assets/ce3b8f5c1fd03204d364ba1b7c01c38a.png)


(v). 點擊「客户計費查詢」查詢個別客户收費確認。


![image.png](/assets/7bebc7370eac23710592fc6e63ee9e02.png)


(vi). 隨機搜尋客户及點選修改了的收費類型查詢。


![image.png](/assets/0d72a7fee36d0b1d77fcc6da94f86a21.png)


# 7D 問：佣金收費／交易合約作一次性的額免或修改，可以什樣處理？


**答：**執行清算任務時，完成 "清算計費" 後先暫停，拉取到客户合約數據在「清算管理 > 合約管理」修改費用。


(i). 執行日終任務去到 "清算計費" 時點擊「暫停一鍵清算」。


![image.png](/assets/c0b6fd74856d4d6dd7276b921703cbef.png)


(ii). 執行完成後去到「合約管理 > 客户合約」頁面拉取到當天賬務日期的交易後，搜索客户及相應的訂單，在操作欄點擊「詳情」


![image.png](/assets/39f367ec65143f834a89f49e8c19b3f7.png)


(iii). 在「費用信息」頁面相應的收費類別點擊「編輯」


![image.png](/assets/ab3bffb0acb4464e8f0ca821b470b83a.png)


(iv). 在實收金額修改費用後點擊「確定」。如收取 0.74 USD > 0.01 USD


![image.png](/assets/45acd2554283342d7efdee093b31ae47.png)


(v). 在「費用信息」頁面，實收金額及應收金額費用會更新


![image.png](/assets/0717a52329e223d600befd0c76510a6b.png)


(vi). 之後繼續完成清算，費用會作調整及結單會顯示更新的費用


# 7E 問：計算精度的 Contract、Order、Trade done 如何區分？


**答：**Contract 、Order 、Trade done 見以下例子說明。

- 如：想合單計算，選 Contract，會按客户當天買同一隻股票的總交易金額計算佣金
- 則：客户下單 3 次 10000，合成 30000 計算一次佣金
- 如：平台費逐條訂單計算，選 Order，會按客户下單次數計算
- 則：客户下單 3 次 10000，逐筆計算 會收取 3 次平台費
- 如：收取政府雜費，選 Trade done，會按訂單成交的次數計算
- 則：客户下單 3 次 10000，每筆分了 3 次成交，會逐條成交計算稅花稅，總共計算 9 次費用
> 選了 Contract 是依照合約進行計費。 如果沒開啟合單功能，一個 Contract 對應的是一個 Order；如果已經開啟了合單功能，多個 Order 才會合併成一個 Contract 計算（見 7E 圖一），這樣 Contract 和按 Order 才有差別

![image.png](/assets/90d92f1d77f5c420d55c1c75a4767aba.png)


_7E 圖一_


# 7F 問：特殊收費的設置如何影響到客户？


**答：**全局客户組設置了特殊收費，所有客户都會依據該特殊收費計算佣金。如把客户添加到普通客户組，需要在這套餐添加特殊收費才能覆蓋掉全局的設置。


![image.png](/assets/bea06e76bee2184d751a606222a4132e.png)


![image.png](/assets/10724550fc4933ac1e144998c9a963dc.png)


# 7G 問：全局客戶組為什麼看不到客戶數量和組內的客戶？


**答：**全局客戶組理論上配置到所有客戶，所以沒有顯示到數量及組內客户。在普通客户組能看到數量及組內客户。


![image.png](/assets/d471723ec37809f2830aefd83ac5aa24.png)


![image.png](/assets/cea9161dd12575ed30badf3218956c90.png)


# 7H 問：暗盤平台費和正常交易平台費能否分開計算？


答：在「業務參數設置＞計算管理＞客户組計費配置」相關客戶組點擊「編輯」（見 7H 圖一），然後在平台費收費點擊「編輯」。（見 7H 圖二）
在“特殊收費”點擊「添加」，“訂單類型”選擇「暗盤」後并輸入收費資料。（見 7H 圖三）


![image.png](/assets/ceeebe543e6583237d0d9196e7c59ab0.png)


_7H 圖一_


![image.png](/assets/1f20dbb7fa81cfbdeefd421f61108190.png)


_7H 圖二_


![image.png](/assets/88e8bd5c77316b63a2d7d648b5545e09.png)


_7H 圖三_


# 7I 問：收費渠道 Longport， Pro， App， Web， WTT 的分別表示什麼？


答：Longport 是公版 App；Pro 是豪華版 Longport Pro；App 是白標 App；Web 是網頁版 Web Trade；WTT 是前台 Whale Trade Terminal。


![image.png](/assets/f03745efb88387b88bd0bcc2c8bc9009.png)


# 7J 問：如何添加開户時所選的計費套餐？


答：在「業務參數設置＞計費管理＞機構計費」對應的 "默認用户組" 點擊「編輯」（見 7J 圖一），在 "可選客户組" 添加「客户組計費配置」已建立的計費套餐，之後在計費套餐可選擇（見 7J 圖二）。


![image.png](/assets/62ad9385998bf9ec2efb5f6f1186d3d0.png)


_7J 圖一_


![image.png](/assets/f4d134b0102f7a3a0c72a0816e784374.png)


_7J 圖二_


# 7K 問：App「我的費率」佣金計費的取值邏輯是什麼？


答：取值邏輯先後次序如下：

1. 「客戶計費」佣金特殊收費中的「條件」（「條件」在「收費渠道」有設置了「APP」才會顯示）
2. 「客戶組計費」佣金特殊收費中的「條件」
3. 「全局客戶組計費」佣金特殊收費中的「條件」
4. 「客戶計費」佣金特殊收費
5. 「客戶組計費」佣金特殊收費
6. 「全局客戶組計費」佣金特殊收費

此外，可以在「瞭解示例」中為客戶提供更多「費率」資訊，而後台「幫助中心」可以修改「瞭解示例」中的內容。


![image.png](/assets/22efe4162de448ac20cec0954f92f679.png)


![image.png](/assets/cfeb1cdcd0e6b735d7ee2278d7f45e8f.png)


![image.png](/assets/4cd67093f2e3f8d5d7345c35ab594c3a.png)


 

