---
title: 快速上手
slug: BEYJw66Pei30p3kNwOQcQXtNnCe
sidebar_position: 1
---


# 快速上手

# 概述

Whale風控系統全面支持券商處理風控業務相關流程，包括額度管理、Margin Call、保證金、交易限額、壓力測試等。

# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

## 融資授信

客戶若開通 margin 賬戶，後面客戶有資產入賬，則系統自動會給客戶授信一定的額度，客戶可以進行保證金交易。同時，客戶也可自行在APP上申請調整融資額度。此外，系統也可支持由風控人員調整客戶額度。

### 1. 授信參數配置

需要先在「業務參數設置」-「授信客戶參數」核驗授信全局配置。
（首次使用授信系統會有初始化配置，券商可以根據實際業務需求進行調整）

<img src="/assets/NSMnb6dKXoVTM4xTdXCjVde4pDh.png" src-width="3726" src-height="1568" align="center"/>

### 2. 客戶額度查詢

所有已授信客戶可在「客戶額度」頁面進行查看其授予額度及額度使用情況

<img src="/assets/GA1ZbauvQo92SIxZV4AjHQKTpPh.png" src-width="3696" src-height="1412" align="center"/>

### 3. 額度調整及審批

券商後台人工調整額度或客戶APP申請命中人工審核額度均需要審批才可生效額度。

1. 「客戶額度」頁面操作【調整】

<img src="/assets/L9KfbQG90oI0NzxAuVajfieepHf.png" src-width="3694" src-height="1434" align="center"/>

<img src="/assets/NkjrbTMcHoDq7CxQ3NjjwaAGpzd.png" src-width="2050" src-height="1214" align="center"/>

1. 「額度審批」頁面核驗調整額度及審批，工單審批通過後即可調整額度

<img src="/assets/MA5Zblww2orMv6xftZYjR6Erpae.png" src-width="3736" src-height="848" align="center"/>

<img src="/assets/DLTNbHCDBoo5Scx1PcKjlpKlpxc.png" src-width="3724" src-height="1636" align="center"/>

## Margin Call

### 1. 追保金額配置

追保金額會有初始化配置，券商如需調整可聯繫技術或商務對接人進行改動。

<img src="/assets/NGg2b50xgof1rsxTABHjVKRapOh.png" src-width="3826" src-height="1724" align="center"/>

### 2. 平倉處理

1. Margin Call列表頁會展示觸發margin call客戶紀錄，點擊【詳情】可以查看具體資產數據信息

<img src="/assets/GSaubez85obvCYxfnGMjwwFVpEe.png" src-width="3710" src-height="1366" align="center"/>

1. 詳情頁面會有客戶現金和持倉明細，可以自主選擇對應的持倉操作【平倉】或者操作下方的批量【平倉】

<img src="/assets/EQzrb7djYoM15gxYaIIjhht4p1c.png" src-width="3740" src-height="1642" align="center"/>

## 保證金設置

支持設置股票或客戶級別保證金，保證金計算會按“客戶保證金&gt;股票保證金”的優先級邏輯處理。

<img src="/assets/Ws3wb40wKo36IdxONOKjBIeNpjc.png" src-width="3688" src-height="1558" align="center"/>

