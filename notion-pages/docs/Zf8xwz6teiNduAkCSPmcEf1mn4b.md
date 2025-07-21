---
slug: Zf8xwz6teiNduAkCSPmcEf1mn4b
title: CRS 操作文檔
sidebar_position: 2
---


# CRS 操作文檔


本使用手冊適用於 Longbridge Whale WBO 證券後台管理的管理員和使用成員使用。閱讀此手冊，你將瞭解 Whale WBO ‘CSR 文件’模組的作業功能操作


| 文档编辑历史 |                |         |          |
| ------ | -------------- | ------- | -------- |
| **版本** | **日期**         | **編輯人** | **變更內容** |
| V1.0   | 2023 年 9 月 5 日 |         | 第一版產生    |


# CSR 文件操作說明


執行菜單：報表管理>CRS 文件生成

- 注意： 租戶需要 增加下列權限 才能操作 相關 CSR 文件

![image.png](/assets/afb2a58791504d7aed6bbc854f25a2f5.png)


![image.png](/assets/9a1db44cb6ea836f7fb881b6a04659c3.png)


整個 CSR 文件操作基本上 下列流程的順序


需要更新图表到飞书的白板：https://longbridge.larkenterprise.com/wiki/IWiQd25SSoP63JxVS8JcSbXrnQb


## **計算收益**： 


![image.png](/assets/e294a0b1ccce49b2452bc7534607b7a4.png)


此時產生一個的系統任務，當系統任務完成後（這會需要點時間產生全年資料）， 當完成後系統會給予這批 CRS 數據一個 相同的‘**消息編號**'


![image.png](/assets/5c92de27e1b7029c275cffbe62cd98cb.png)


 也可以在任務列表 Tab 頁籤上 點選 紀錄右側操作區的【詳情】，會自動切換 **CRS 數據** Tab 頁籤，可以查詢數據資料或編輯修改


![image.png](/assets/f614ab419d592304ae7a4a2bb8e5f0db.png)


![image.png](/assets/5a9ee0ce1497ee5388743c0719494ea5.png)


可根據需要 刪除紀錄（不報送） 或修改數據資料


![image.png](/assets/918ef9ec00e57bd44bb3b6cd93a89d2d.png)


## **生成文件**： 


![image.png](/assets/d20289937288188ecc21363dcca90c9c.png)

1. **文件下載**

當生成文件任務完成後，就可以點選下載檔案，去外部網站傳送了


（系統會稱生一個 xml 附檔名的文檔）


![image.png](/assets/2ee2900ee5a943bca0e51bf5a2010ef2.png)


![image.png](/assets/3eefb8a5bb478ef67ac0be55ef4a9f91.png)


建議： 此文件不要自行編輯，容易誤操作造成文檔規格不對，無法上傳


## **生成文件上傳**： 


將上傳到外部系統的一個 XML 文件。這文件在外部系統上傳以後，在外部系統它會返回一個文件序列號，可以在任務列表 Tab 頁籤，更新狀態把外部系統序列號輸入


![image.png](/assets/46ccfbfb87ebf815c6fbca291191a66f.png)


![image.png](/assets/ccf9783d0d7fbed9686a590ea5bb89b7.png)


這等于 將 產生的 CRS 數據 打上這批次的 文件序列號，方便以後對數據查詢或更正已報送資料


![image.png](/assets/9339c6eaa67854b79d3d97a756c9e11e.png)


## **更正資料再上傳**： 


正常情況下，已報送資料其狀態是‘文件已報送'


![image.png](/assets/dcc462d9db016c08f21706947864464b.png)


當發現數據需要變更時，可以點選右側 【編輯】 來操作修改數據

> 系統會產生一筆新數據，可以根據需要來修改

或 【刪除】 已報送數據，

> 系統會將刪除那筆資料 變成已鎖定狀態

此時後面一樣操作方式輸入： **年度 /消息類型/編號/批次/消息編號**  查詢後。 生成文件的功能鍵就可以操作了


產生文件並上傳報送網站，同樣 也會取的最新的文件序列號，也一樣更新即可

