---
title: 快速上手
slug: QUlww7SV3iiohxkxUb7c8CkenXd
sidebar_position: 1
---


# 快速上手

# 概述

Whale CRM 系統，支持券商在線查看、管理旗下所有註冊客戶的個人基礎信息和開戶/入資信息；支持券商主動推進目標客戶的生命周期的推進，高效實現註冊客戶快速轉化為有效戶。系統包含客戶列表、客戶經理、我的看板、任務跟進、今日完成五大模塊。其中，客戶列表整合了券商名下所有的客戶信息，涵蓋了客戶基本信息、開戶信息、邀請關係、入資等內容；同時也支持不同角色的後台用戶基於一定的功能權限和數據權限獲取一定範圍的客戶信息。

對於存在客戶經理維繫客戶的券商，可以在線管理客經團隊，支持將客戶按一定規則分配給對應的客戶經理；同時，也通過更細分的數據篩選等方式，支持客戶經理更好的進行 CRM 工作，實現客戶的高效轉化。

# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

## 客戶列表：全量客戶池

各券商客戶，通過券商指定的方式註冊成功後，客戶數據均會匯總至 客戶列表 菜單。當客戶在平台上完成開戶、入金、交易、邀請等行為事項時，客戶列表會一併記錄相關信息。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❗ 作為全量客戶的核心數據的聚合點，客戶列表 菜單的權限開發，需格外注意</p>
</div>

**路徑：**客戶管理系統 &gt; CRM &gt; 客戶列表

**操作：**作為券商名下的全量客戶池，支持按一定的規則條件篩選目標客戶，並查看該客戶的詳情信息。同時根據登錄用戶擁有的權限，支持查看該客戶的開戶信息、備註、分配客經、更新客戶認證等能力。

<img src="SIWjbWdoeodQNlxvRdejznqBp4c" src-width="2316" src-height="1432" align="center"/>

選中某客戶，點擊「詳情」，可查看該客戶的基本信息、邀請關係、賬戶資產、持倉交易等信息（需開通相應的權限）

<img src="RiTtbHqFXorrvbxLt7vjOpZkpEb" src-width="458" src-height="956" align="center"/>

<img src="IXGgbppvJoyrBIxWZPrjyKqLpQf" src-width="2322" src-height="1420" align="center"/>

同時，對小體量的券商團隊，可直接在該菜單進行客戶的管理和跟進事宜。支持單客戶的跟進、備註等操作，也支持批量分配客經、備註等功能。

<img src="AaqabEXZpozEBlxJNVjjptAApRb" src-width="2318" src-height="1408" align="center"/>

## 管理『客戶經理』

對於存在客戶經理維繫客戶的券商，可以在線管理客經團隊，支持將客戶按一定規則分配給對應的客戶經理，方便客戶經理在線跟進、高效推動客戶的有效轉化。

**路徑：**客戶管理系統 &gt; CRM &gt; 客戶經理

**操作：**點擊【添加客戶經理】，新增一個客戶經理的基本信息，包括姓名、崗位、團隊、地區等信息

<img src="LRr5bQXAEocN6BxGMacjEksCpQb" src-width="3232" src-height="1526" align="center"/>

<img src="PQQvb6yrBo28eexjCpnjHkQYpEv" src-width="1280" src-height="669" align="center"/>

## 分配客戶經理

說明：此模塊僅針對存在客戶經理場景的券商。

客戶列表匯總了所有註冊成功的客戶，支持將客戶按一定規則分配給對應的客戶經理，支持一個客戶由不同的客戶經理來負責不同的階段，如前期的商務拓展、後期的渠道轉化。

**路徑：**客戶管理系統 &gt; CRM &gt; 客戶列表

**操作：**支持為單個客戶分配客戶經理，也支持勾選多個客戶後進行批量分配客經。

<img src="VWREb76hoo9PeExpLgYjFNiYpve" src-width="1180" src-height="713" align="center"/>

## 我的看板：客經負責的客戶看板

為客戶經理分配好客戶後，客戶經理可在 我的看板 查看跟自己綁定的所有客戶數據，包括客戶的基本信息、開戶/入資/交易/邀請等所有客戶數據。若有團隊數據權限，則可查看當前團隊下所有客經跟進的所有客戶信息。

同時，客戶經理可在線記錄與客戶聯繫的的摘要記錄，包括聯繫方式、客戶意願、下次跟進時間等主觀信息，幫助客經更高效的建立客戶畫像，以期更好的服務客戶。

**路徑：**客戶管理系統 &gt; CRM &gt; 我的看板

**操作：**對分配至當前客經名下的客戶，按客戶所處的生命週期分成了待開戶、待入金、已入資、已交易四個模塊。點擊生命週期卡片，快速篩選處於該生命周期下的所有客戶信息

- 字段解释：
    - 用户地区：为用户当前所在国家/地区。取值规则，按以下优先级取：
        - ①：居住国家/地区；优先级 ②：手机区号；优先级 ③：注册时的 IP 对应地区
    - 活动地区：指证件签发国所在地。部分客户居住地区和证件签发国不一致，则优先取证件签发国作为活动地区。取值规则如下：
        - 若有证件签发国，取证件签发国作为活动地区；若无，则取用户区域的值作为活动地区

<img src="HAbTbEU5CoI5ugxTRcIj2XU0ptf" src-width="3306" src-height="1222" align="center"/>

點擊特定客戶編號時，右側呼出抽屜彈層，同步展示該客戶的詳細資料，包括個人基礎信息、資產/交易數據、邀請關係、跟進記錄等，方便客戶經理快速構建該用戶畫像，更好的服務客戶。

<img src="WBFxbUY5AoqcbsxiP2ajN1Cepud" src-width="3304" src-height="1782" align="center"/>

同時，跟進記錄 Tab頁，可點擊【添加跟進記錄】，記錄該客戶詳細情況，包括客戶意願、客戶級別、與聯繫的聯繫方式、下次跟進時間、客戶標簽、備註等

<img src="FCyDbxguJokEjsxrIR4jnCDgp5e" src-width="1180" src-height="1766" align="center"/>

<img src="QbMKbOYipo9G8DxAiJdjVqbbpSd" src-width="1174" src-height="1808" align="center"/>

此外，對於同類客戶，也可在勾選後點選【批量備註】添加相關備註說明

<img src="Jaqwbnuq7ojJkgx8rh8jUjNZpjS" src-width="3252" src-height="1016" align="center"/>

## 『任務』跟進

任務列表，在客戶已經分配的情況下，若客戶的客戶、入金等行為有變化，系統將自動創建任務提醒客戶經理跟進。

**路徑：**客戶管理系統&gt;CRM&gt;任務

**操作：**點擊不同任務節點，可展示該節點下的客戶列表。

選擇某個客戶，點擊【跟進】，可打開右側彈層，將該客戶的資料以卡片形式展示

<img src="DADYbcvIhohqe5xsnqEjla9Apgh" src-width="3256" src-height="1482" align="center"/>

點擊【跟進記錄】Tab 頁，點擊【添加跟進記錄】，可錄入一些互動標籤說明

<img src="MihlbN6x3ouX2VxVXwijnclppZc" src-width="2242" src-height="1252" align="center"/>

<img src="LVvobm7LtoEvyoxMEBdjcNYEpDe" src-width="2228" src-height="1612" align="center"/>

點擊【資產/交易】Tab 頁籤，查看客戶資產總覽與近期出入金記錄

<img src="Kkwmbnkt2o2aEQxbXmJjIWVapic" src-width="2216" src-height="1624" align="center"/>

點擊【邀請關係】Tab 頁籤，查看邀請關係

<img src="B4EObHwGFo5iN9xPWx1jl1GHppg" src-width="2230" src-height="1608" align="center"/>

## 查看『今日完成』

客戶經理在今日完成列表，可通過多種維度的圖文展示，來查看自己今日跟進的客戶數據和進展。今日完成列表主要展示客戶進展、每日跟進、我的日報三個維度的信息。

**路徑：**客戶管理系統&gt;CRM&gt;今日完成

**操作：**客戶進展，提供多種維度對比（開戶數/入金數/待開戶跟進數/待入金跟進數/TMT 注冊跟進數/已入金跟進數）

<img src="EximbSChmoE2Z5xpQkwjOqcipuf" src-width="2322" src-height="1438" align="center"/>

每日跟進，支持在作業中間區域根據篩選條件查詢出需要跟進的用戶（客戶）記錄

<img src="BCTtbsZvNoJG5Nxb8tpjHKS9pqb" src-width="2322" src-height="1442" align="center"/>

我的日報，提供日報記錄的功能，方便客務人員記錄日報摘要

<img src="NC31bcm1xo2a1ixbPwYjEvrlpme" src-width="2322" src-height="1412" align="center"/>

