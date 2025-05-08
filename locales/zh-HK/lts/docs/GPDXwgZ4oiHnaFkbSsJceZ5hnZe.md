---
title: 5.1.1 清算對賬
slug: GPDXwgZ4oiHnaFkbSsJceZ5hnZe
sidebar_position: 0
---


# 5.1.1 清算對賬

## 5.1.1A 問：美股文件如何處理對賬？ 

<b>答：</b>美股是隔夜市场，交易日會在下一天結束，需要美股上手第二天早上提供文件後導入對賬。

系統持倉對賬邏輯是對上一日的已交收持倉（持倉對帳對的是 T-1），需要導入美股上手文件，以完成美股清算。

> 美股清算最早在當天 11 點可執行

在「清算管理＞清算檢查＞持倉對賬」中按「重新對賬」選擇對應的執行日期及賬務日期以刷新數據，再導出報表 SDR025 核對。

<img src="/assets/D7bhbYS7YofPIpxIfjUcN55bnhg.png" src-width="2398" src-height="1188" align="center"/>

## 5.1.1B 問：對賬日期如何選擇？

<b>答：</b>常規租戶是下一天上午對上一天的賬，系統是按對賬任務發起的日期去默認展示，見下例說明。

<img src="/assets/XiuobUlooo6wPzx2iAicxL60n7d.png" src-width="1466" src-height="972" align="center"/>

## 5.1.1C 問：為什麼 4 月 30 日港股清算後，系統賬務日是 5 月 1 日，不是 5 月 2 日？
（以 5 月 1 日為例子）

<b>答：</b>5 月 1 日港股為假期，但美股為交易日，需要空跑港股清算，反之美股假期情況也一樣。

## 5.1.1D 問：持倉不對賬，倉位數量有差異，如何處理？

<b>答：</b>在「清算管理＞倉位管理＞倉位查詢」頁面搜索相應的客户，從需要轉出的倉位點擊「內部轉倉」（見 5.1.1D 圖一）。
轉出的數量需要等於 street + nominee + own，沒有數量的保持為 0（見 5.1.1D 圖二）。

> 持倉對帳對的是 T-1。如昨天（20/5）日終後的內部轉倉要明天（22/5）的持倉對帳才能反映出來

<img src="/assets/OH63bYXz6oUY8mxZA3pc7LKAnFf.png" src-width="2500" src-height="1136" align="center"/>

<em>5.1.1D 圖一</em>

<img src="/assets/WQBWb9Wepoowi2xd3YMcUH1Wndh.png" src-width="1188" src-height="805" align="center"/>

<em>5.1.1D 圖二</em>

## 5.1.1E 問：上手為長橋證券，在進行日終清算時，出現持倉不對賬的原因是什麼？

答：租户未完成日終前作持倉對賬，會出現不平賬。持倉文件要日切後作解析，完成日終後，系統的倉位數據作更新。
之後在「清算管理＞清算檢查＞持倉對賬」點擊「重新對賬」才能跟上手的持倉文件對得上。（賬務日期選上一天）


## 5.1.1F 問：“結算賬户”跟“業務賬户”如何影響到對賬類型？

<b>答：</b>上手代理／託管商設置的對賬類型「結算賬户」指以已結算數量（T+2 交收後）來顯示持倉股數，「業務賬户」指以賬面股數（即時反映）來顯示持倉股數。
系統主要以「結算賬户」已交收的股數作對賬，如設置了「業務賬户」以賬面股數對賬，會引致 SDR025 - Stock Reconciliation Report 不對賬，可以統一以把對賬類型選為結算賬户。

<img src="/assets/YQaWbAwU7ol2QVxP8FgcmbcZnlg.png" src-width="2672" src-height="1404" align="center"/>

