---
title: 2024-10-21 更新日誌
slug: QbLQweIfTijPM9kI8QechrQgnpd
sidebar_position: 23
---


# 2024-10-21 更新日誌

# 🪀 改进与修复

- 手工入倉、出倉操作流程簡化以及手工出倉股票按照編碼從小到大排序
    <img src="/assets/QuAbbblXgo82T2xlBXXjvsjqpDh.png" src-width="1312" src-height="1600" align="center"/>
    - 手工入倉提交後無需人工審覈直接進入明細待處理
    - 手工出倉提交，在風控處理完成後無需人工審覈直接進入明細待處理
    - 手工出倉股票按照編碼從小到大排序

- 存入明細以及取出明細 Tab 入口優化
    <img src="/assets/UlvNbwKPboFEWpxWJtNjMfpWpzn.png" src-width="2326" src-height="1310" align="center"/>
    - 存入明細 Tab 入口拆分爲：申請待處理、明細待處理、已入倉、已失敗及已刪除、全部
    - 取出明細 Tab 入口拆分爲：申請待處理、明細待處理、已出倉、已失敗及已刪除、全部
    - 申請待處理：是指存入或者取出明細對應申請單等待人工審覈
    - 明細待處理：是指存入或者取出申請已經審覈通過，等待明細後續處理

- 額度審批增加直接拒絕
    <img src="/assets/SYoybncSKoIN3xxdrm2jRtkMpzf.png" src-width="3326" src-height="1618" align="center"/>
    - 額度審批增加直接拒絕入口
    - 路徑：「風控管理」-「授信額度」-「融資授信」-「額度審批」

