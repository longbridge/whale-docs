---
title: 14. SFTP 問題
slug: C3fPwDaHxioXAHkRT8jcYA2hnLf
sidebar_position: 13
---


# 14. SFTP 問題

## 14A 問：如何設置 SFTP？

<b>答：</b>請參考操作文檔 [SFTP 軟件操作指引](./VoMUwGS2UiUsg7kciaacGKyhnjb)

## 14B 問：為什麼 SFTP 裡面 DB 備份的資料遺失了幾天？

<b>答：</b>日常備份時間：北京時間週二到週六早上 6 點 - 8 點開始備份在第二天早上備份上一天資料。

通俗來說，週二備份的是週一產生的數據，週三是週二以此類推週六備份週五。所以週日、週一是沒有備份資料的。

## 14C 問：為什麼我 Statement 裡面的資料遺失了幾天？ 

<b>答：</b>日結單、月結單沒有生成，就不會有結單資料的備份。日結單生成的前提是當天有資金／持倉變動。

## 14D 問：為什麼我的 Log 目錄資料遺失了幾天？ 

<b>答：</b>目前僅為租用戶開通了 `bingo,member-auth,msg-box,togo-proxy` 四個服務的日誌會上傳到 SFTP。
另外，我們預設為租戶保存最近 14 天的日誌，超過 14 天的日誌會看不到記錄。

