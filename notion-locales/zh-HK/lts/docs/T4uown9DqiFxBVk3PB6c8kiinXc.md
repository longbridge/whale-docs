---
slug: T4uown9DqiFxBVk3PB6c8kiinXc
title: 2.0.1 出入金修改／拒絕
sidebar_position: 0
---


# 2.0.1 出入金修改／拒絕


# 2.0.1A 問：出金／入金申請在後台已點擊提交，想拒絕申請如何處理？


**答：**已作提交申請的，需要在工單中作拒絕（見 2.0.1A 圖一）。加款狀態更新為已駁回（見 2.0.1A 圖二），如有需要可再操作一筆出／入金申請。


![image.png](/assets/ef946b90c3ed05a71634dfd062130359.png)


_2.0.1A 圖一_


![image.png](/assets/66ada1050ac2e56224014b89a21d8541.png)


_2.0.1A 圖二_ 


# 2.0.1B 問：出金申請已作審批，如何駁回客户的出入／入金申請？


**答：**出金申請已作提交確認，在「打包待處理」頁面未作審批的能操作拒絕。如已作審批的，點擊「查看并更新結果」修改狀態為失敗，再操作一筆出金。


![image.png](/assets/3b3b6b0b934c25a062f92664c989c88d.png)


![image.png](/assets/3bb5681ce44b9f2a14aef6398254d017.png)


# 2.0.1C 問：入金能做到入賬後修改／撤銷？


**答：**開通相關權限 key 後能操作，請見以下步驟。

> **入金流水修改審批**`atm.deposit_jour_update_approval`；**入金流水修改**`atm.deposit_jour_update_ticket`  
> **入金流水刪除審批**`atm.deposit_jour_delete_approval`；**入金流水刪除** `atm.deposit_jour_delete_ticket`


已完成的入金可在當天作修改／刪除（見 2.0.1C 圖一），操作修改／刪除後需要作審批（見 2.0.1C 圖二、圖三），入金記錄會顯示到相關流水（見 2.0.1C 圖四）。


![image.png](/assets/b4c8032d29929b3ccac1628d3ec05137.png)


_2.0.1C 圖一_


![image.png](/assets/b9e31d67f67707f71c7dd3f67e92a77f.png)


_2.0.1C 圖二_


![image.png](/assets/cb5d2dbd3c54e05fb9625af1b1558fc3.png)


_2.0.1C 圖三_


![image.png](/assets/c43d4d8abb951168f3ef900f20a686f9.png)


_2.0.1C 圖四_

