---
title: 系統介紹
slug: Jv6ew1wTYivfUCk8F2ocsTyqnIh
sidebar_position: 2
---


# 系統介紹

# 概述

Whale 新股認購系統支持券商支持客戶新股認購的全過程，主要包括新股發行信息管理、申購信息配置、訂單管理、中簽信息管理等模塊。

## 新股流程說明

<img src="ARFMbnItwoVSgYx0f7Vjuxefp9g" src-width="2166" src-height="3140" align="center"/>

## 新股模塊說明

<img src="" src-width="100" src-height="100" align="center"/>

- 新股發行信息管理模塊，用於整合和展示即將發行的新股的詳細信息，包括公司背景、財務數據和市場分析；
- 申購信息配置模塊，允許券商為不同客戶設置個性化的申購參數，包括申購限額和策略；
- 訂單管理模塊，用於處理和跟蹤客戶的新股申購訂單，包括訂單狀態和風險管理；
- 中簽信息管理模塊，負責在新股配售後向客戶通報中簽結果，並處理相關的財務事務。

# 務操作管理

## 1. 新股認購

## 1.1 港股認購

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 港股認購</p>
</div>

港股認購為券商處理客戶港股新股認購的全部流程，包括新股資訊管理、認購配置、認購訂單、中簽分配等。也是新股系統最核心的流程

### 1.1.1 新股列表

新股列表頁面為管理所有港股歷史新股的頁面，頁面區分三個狀態，方便券商進行操作：

- 未開啟認購：已有新股信息，新股未上市前，券商還未開啟認購的新股。
- 認購處理中：券商已開啟認購的新股，但新股還未上市，還有後續流程需要操作。
- 全部：包括所有新股，包括已上市，或取消上市的新股。

當有新股公告時，系統會透過行情自動同步數據，會默認記錄在『未開啟認購』列表中，方便券商查看與配置。對於未開啟認購的新股，點擊『詳情』，進行新股配置。

<img src="EOGXbc2L3ospXTxfPFxj7Ve0pNh" src-width="3804" src-height="1832" align="center"/>

<b>操作按鈕說明</b>

- 詳情：則可查看新股詳細的信息、訂單數據。
- 扣款：當存在待扣款訂單時，才會出現『扣款』操作按鈕，點擊可進行快捷扣款操作。
- 公佈中籤：當存在需要公佈中籤的訂單時，才會出現『公佈中籤』操作按鈕，點擊可進行中籤操作。

### 1.1.2 認購信息配置

若券商打算對某一個 IPO 開啟客戶申購，那麼需要手動開啟，並進行一些基礎設置，包括配置認購方式、認購時間、可認購人群等。

<b>1.1.2.1 現金認購</b>

1. 點擊新股列表的『詳情』，則進入配置頁面，進入頁面後，默認為“不可認購”，如下圖。
2. 單選，選擇『是』，再進行保存，則開啟認購，開啟後默認只能現金認購。
3. 此處設置完成，即現金認購開啟完成

<img src="BGw9bWf03osMkoxtYHsjxn20pKh" src-width="3782" src-height="1764" align="center"/>

<b>1.1.2.2融資認購配置</b>

若券商對该新股需要開啟『融資認購』，那麼需要設定融資池，<b>若不開啟，則無需此設置</b>。

<b>步驟一：新建融資池</b>

-<b>基礎信息</b>

點選『融資認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="NomKbH9ddo2qOixqjnxj3AXipof" src-width="3776" src-height="1816" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

<img src="OCLsbZVooo40VQxniMFj1wu2p1b" src-width="3296" src-height="1802" align="center"/>

<b>-更多配置</b>

點擊『更多配置』，則可進行個性化設置。

❤ Tips:

1. 『更多配置』中的配置數據，一般為須特別控制的信息，非必填。
2. 可見用戶群體：默認為全部客戶，若券商有運營系統的用戶分群功能，那麼可以指定這個融資只給部分客戶開放。
3. 上下限股數用於控制客戶的可認購股數範圍。

<img src="ABrFbZ8Tqo6q4px9RbIjpEbmpDc" src-width="3288" src-height="1808" align="center"/>

<b>-客戶分群配置</b>

融資池可設置多個分群規則，配合運營要求，例如：

1. A 客戶群體只能最多申購 10000 股；
2. B 客戶群體最多可以申購 100000 股。

<img src="KoufbkHjqokkHkx6xIgj792Opud" src-width="3766" src-height="1834" align="center"/>

<b>步驟二：融資池審批</b>

提交審批後，融資池為默認『待審批』狀態，審批成功後，才會生效。

❤ Tips:

融資池審批有兩個審批入口：

1. 融資池列表
2. 融資池審批頁面

<img src="HoMBb0zuuoVGHmxnlKAjoK2fpJb" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 融資池審批</p>
</div>

<img src="F6zIb9mxuoVIwBxqpQgj60PQpHd" src-width="3744" src-height="1290" align="center"/>

點擊『審批』按鈕，查看工單詳情，審批通過後，融資池生效。

<img src="FozQbY64aoliA7xos3kjJHUhpCc" src-width="3274" src-height="1824" align="center"/>

<b>1.1.2.3 零本金認購配置</b>

若券商對该新股需要開啟『0本金認購』，那麼需要設定0本金認購的融資池，若不開啟，則無需此設置。

0本金認購為一種比較特殊的認購方式，提供給客戶的融資比例只能為100%，即客戶不需要任何本金，就可以認購IPO。

<b>步驟一：新建融資池</b>

- <b>基礎信息</b>

點選『0本金認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="Z7pzblCrzo0OXxxH9jMj5cTDpmd" src-width="3056" src-height="1840" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

❤ Tips:

此處設置，與融資認購設置相似，只是<b>不需要填選融資比例</b>，固定為100%，更詳細操作參考：

<b>融資認購設置</b>。

<img src="DaYKb0LWModlGNx3QuJjPDUOpLg" src-width="3258" src-height="1814" align="center"/>

### 1.1.3 APP新展示信息

頁面主要用於配置APP的展示『標籤』、『文案信息』。

- 標籤：默認無數據，需要自行添加。
- 展示文案：每個新股數據生成時，都會有默認的展示文案，無需每次都進行填寫，若需要修改文案，則可以在此頁面進行修改

<img src="YUfHbzYVWoHiwdxf3SsjIpX7pYf" src-width="3274" src-height="1826" align="center"/>

### 1.1.4 認購記錄

頁面主要展示對應IPO所有的認購記錄，也包括撤銷、被人工拒絕的訂單，同時在此頁面可操作『扣款』、『中籤』

<img src="CfSmbJrGco1DqaxYBJ2jPvQtpKg" src-width="3286" src-height="1574" align="center"/>

<b>1.1.4.1 扣款操作</b>

當IPO認購截止後，券商需要把確認好的IPO訂單資料交給港交所或其他上手，此時對客戶的有效認購訂單進行扣款認購金額及認購手續費的操作，並發放一定的融資金额。

扣款操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<b>步驟一：點擊扣款，確認訂單範圍</b>

點擊扣款後，會展示待扣款的訂單範圍，確認並選擇訂單範圍，再進行下一步操作。

<img src="PswgbuPzMoUIS6xMGHSjYiZEpbf" src-width="3304" src-height="1820" align="center"/>

<b>步驟二：核對扣款訂單明細</b>

系統會自動根據認購訂單、費用、融資比例等計算出預覽數據，如下圖，操作人員需要核對相關的數據，並提交審核。

<img src="TFMBbyvUeoHyL7xnxKvjdvHupSe" src-width="3298" src-height="1836" align="center"/>

<b>步驟三：扣款審批</b>

扣款審批有兩個入口：

1. 專門的扣款審批頁面：可查看歷史的扣款申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在<b>待辦工單</b>中操作審批。

點擊『審批』，則可查看工單，審批通過即可

<img src="PDyVbFelyot1axxr1Ujjlt4ApTh" src-width="3294" src-height="976" align="center"/>

<img src="OwqNbunGCopdBGxUiTZj31OGpQh" src-width="3302" src-height="1844" align="center"/>

<b>1.1.4.2 公佈中籤</b>

一般在上市前一個交易日，會完成中籤結果公佈，系統需要對客戶完成中籤結果操作，中簽股票需要在當日到帳。

對於中籤的客戶：將退還認購金額，回收提供的IPO融資金額，扣除IPO融資利息，額外扣除中籤款、中籤費，發放中籤的新股。

對於未中籤的客戶：將退還認購金額，回收提供的IPO融資金額，同時扣除IPO融資利息

中籤操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<b>步驟一：點擊公佈中籤，核對數據</b>

點擊公佈中籤後，首先需要券商確認好以下數據，若信息無誤，則直接點擊『下一步』即可。

1. IPO價格：一般情況系統會自動獲取，券商二次確認即可，若IPO價格系統自動獲取是異常的，操作人也可以人工填寫
2. 客戶的計息天數：默認計息天數為中籤日 - 認購截止日的差值（與港交所時間一致），操作者亦可自行修改。

<img src="ARMabJx7Fou0IixIzEDj5gwBp2d" src-width="3306" src-height="1820" align="center"/>

<b>步驟二：選擇中籤方式</b>

IPO系統提供多種中籤方式，券商可根據實際情況選擇不同的中籤方式。

<b>上傳自定義CSV文件</b>

1. 下載示例模板，模板如下：
    1. Order：代表IPO系統的訂單號
    2. APPLY：代表該訂單客戶申請了多少股
    3. SUCCESS：代表客戶中簽了多少股

<img src="GtnVbJhARoCf7kxBdvmjxRlcpCd" src-width="1004" src-height="258" align="center"/>

1. 填寫中籤數據，並上傳文件

<img src="RbuKbAxrqoaCgKxiqXlj5JJApYY" src-width="3286" src-height="1822" align="center"/>

<b>步驟三：核對中籤結果</b>

系統會根據操作人所選的中籤方式及中籤文件，自動解析中籤結果，生成匯總及明細數據。

匯總數據：用於跟上手核對總數量、總中籤數量，便於快捷發現中籤數量問題。

明細數據：用於預覽中籤數據及扣費數據。

若數據無誤，點擊『確定』，則提交審核。

<img src="U9zwbWUCfoe5uKxBqjtjYgO0p7g" src-width="3294" src-height="1832" align="center"/>

<b>步驟四：中籤結果審核</b>

中籤審批有兩個入口：

1. 專門的中籤審批頁面：可查看歷史的中籤申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在<b>待辦工單</b>中操作審批。

點擊『審批』，則可查看工單，審批通過即可。

<img src="HbMzbXQjqodhlbxydcIjarlcpRh" src-width="3272" src-height="954" align="center"/>

<img src="ZiTVbKzYdocGWExPmKdjLODJpqc" src-width="3286" src-height="1820" align="center"/>

### 1.1.5 文件生成

對於已經確認扣款成功的IPO認購訂單，券商需要把訂單提交給上手或港交所，一般來講，通過港交所做的IPO為CCASS文件，通過其他上手做的IPO一般需要線下Excel或CSV進行文件傳輸。

<b>1.1.5.1 已配置 FINI</b>

若券商已配置採用新的 <b>FINI 平台</b>，Whale系統將直接以API的方式將<b>IPO訂單直接同步給港交所</b>，則無需此操作。

<b>1.1.5.2 未配置 FINI</b>

<b>步驟一：選擇訂單類型</b>

根據渠道或融資比例，選擇指定的訂單類型，点击『生成文件』按鈕。

這裡建議相同上手的數據，生成同一份文件。

例如：

1. 融資是通過某一銀行做的，不直接通過港交所，那麼單獨選擇，生成CSV文件。
2. 現金、0成本打新是通過港交所做的，那麼一起選擇，生成CCASS文件。

<img src="Uk2ubz6KBoky3yxnjqEjN1b5pGc" src-width="3288" src-height="1318" align="center"/>

<b>步驟二：生成指定文件</b>

彈出側拉彈窗後，選擇<b>文件格式</b>，並自定義<b>文件名</b>，點擊『生成並下載』即可。

<img src="TENWbfyUNo8bb3xSJnCjfNuKpTg" src-width="3302" src-height="1844" align="center"/>

### 1.1.6 融資匯總

此頁面主要用於統計融資池的使用金額及使用率，會分為兩個模塊展示：

- 按照融資比例分組展示
- 按照融資渠道分組展示

<img src="EHA3bBOBkoS03FxbAADjZoYkpOe" src-width="3294" src-height="1726" align="center"/>

### 1.1.7 字段說明

<img src="ZfY1btiFiofyDvxvmSEjWTW4pic" src-width="1156" src-height="200" align="center"/>

## 1.2 美股認購

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 美股認購</p>
</div>

港股認購為券商處理客戶港股新股認購的全部流程，包括認購信息、認購訂單、中簽分配等模塊。認購信息需要手動進行填寫。

點擊『詳情』，則可查看認購信息

<img src="YGx3bh1qTo8C2mxQfCFjhaHrpDf" src-width="3298" src-height="740" align="center"/>

### 1.2.1 認購信息

此頁面主要用戶設置美股信息的基礎信息，若設置為『可認購』，且達到了『開始認購時間』，則客戶可以在APP上進行美股IPO認購。

<img src="PvIRbMWklo2zKFxsTmAj0Hfgped" src-width="3268" src-height="1878" align="center"/>

### 1.2.2 APP展示信息

頁面主要用於配置APP的展示『文案信息』。系统會有默認的展示文案，無需每次都進行填寫，若需要修改文案，則可以在此頁面進行修改與保存。

<img src="QQFdbEur7onI4pxkQYHjF5TcpGf" src-width="3258" src-height="1808" align="center"/>

### 1.2.3 认购记录

頁面主要展示對應IPO所有的認購記錄，也包括撤銷、被人工拒絕的訂單，同時在此頁面可操作『中籤』。

詳細的中籤操作，與港股一致，詳細操作請看1.1.4.2 公佈中籤。

<img src="B6U3bFU1NoWId5xhqfdjJEoppnb" src-width="3294" src-height="1688" align="center"/>

### 1.2.4 字段說明

## 1.3 港股國配

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 港股國配</p>
</div>

港股國配的主要流程為：創建國配新股 &gt; 客戶認購 &gt; 公佈中籤。

### 1.3.1 認購列表

此頁面主要展示歷史創建好的港股配售股票

<img src="UZf1brFfyoaaoPx3QMQj15fWp8M" src-width="3298" src-height="1018" align="center"/>

點擊『新建』，可創建新的國配新股，這裡僅能選擇，未上市的股票。

<img src="HmdVbhr7Lov9NXxuegej22ACpDg" src-width="3304" src-height="1580" align="center"/>

### 1.3.2 認購信息

創建國配新股後，需要填寫部分信息，並開啟認購。確認後，若已經到了認購開始時間，並符合可見客戶，則可在APP內進行申請。

<img src="AloDbsQEAon7f5xonf6jsbXQp4c" src-width="3276" src-height="1804" align="center"/>

### 1.3.3 APP展示信息

頁面主要用於配置APP的展示『文案信息』。系统會有默認的展示文案，無需每次都進行填寫，若需要修改文案，則可以在此頁面進行修改與保存。

<img src="UGvnbrWHtoY82CxftOzjCPGopne" src-width="3260" src-height="1776" align="center"/>

### 1.3.4 認購記錄

國配訂單認購成功後，頁面會正常展示認購記錄。

到中签階段，可操作中签，操作與普通港股中签一致。詳情見 <b>1.1.4.2</b>

<img src="QeKJbRzwvoR0tFxaVUzjljO4poh" src-width="3290" src-height="1154" align="center"/>

### 1.3.5 文件生成

若國配對接上手，需要提供給上手文件，那麼可在『文件生成』處，導出認購的基本訂單信息、客戶信息。

<img src="TKcbbrdGyonb6MxxzmvjNUsEpGh" src-width="2578" src-height="780" align="center"/>

### 1.3.6 字段說明

## 1.4 融資池審批

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 融資池審批</p>
</div>

此頁面記錄港股新股融資認購、0本金認購的所有融資池申請、變更記錄，同時可查看審核人、審核狀態。

<img src="LauKb3hLboWWn9x6oq5junTNp5b" src-width="3276" src-height="1488" align="center"/>

### 1.4.1 詳情

點擊『詳情』，可查看融資池的申請明細

<img src="HN0FbwcACosAEcxFwUKjGA8VpAh" src-width="3280" src-height="1800" align="center"/>

### 1.4.2 審批

點擊『審批』，可查看審批工單詳情。

若為變更數據，則可對比變更前、變更後數據。

<img src="BHMWb5ufGoDU57xUaApjMWNUpGe" src-width="3272" src-height="1780" align="center"/>

## 1.5 扣款審批

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 扣款審批</p>
</div>

此頁面主要記錄所有的歷史扣款記錄，可快速查到操作人，審核人。

<img src="RW9rbX5b2oDLj0xYP0vjPVxcpDs" src-width="3268" src-height="1766" align="center"/>

- 點擊詳情可查看具體的扣款明細數據

<img src="APdabQz2zohzHpxrbAUjn0ggpQb" src-width="3278" src-height="1590" align="center"/>

## 1.6 中籤審批

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 新股認購 &gt; 中籤審批</p>
</div>

此頁面展示所有新股歷史的中籤記錄，可快速查到操作人，審核人及歷史中籤文件數據。

<img src="XYAsbiww6oSeiRxeJRqjgqi7pi0" src-width="3236" src-height="1730" align="center"/>

### 1.6.1 詳情

點擊『詳情』，可查看中籤數據詳情，包括中籤文件、中籤明細等數據。

<img src="C8wkbsvs8ovOLqxUQ5zjikzFpzd" src-width="1634" src-height="1822" align="center"/>

<img src="TFGLbAAsXoWs7WxpWRhjDemuptf" src-width="1630" src-height="1844" align="center"/>

### 1.6.2 審批

點擊『審批』，可查看審批工單詳情。

<img src="CRCNblnveoWAUKxJl2Qj8icypXc" src-width="3276" src-height="1830" align="center"/>

## 2. 認購記錄

## 2.1 認購記錄

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 認購記錄 &gt; 認購記錄</p>
</div>

頁面展示所有的新股訂單，同時可操作後台批量拒絕訂單。

<b>步驟一：選中訂單，點擊『批量撤單』</b>

<img src="ZQjcb29Mlo6GAAxv0hUj9t9PpMg" src-width="3258" src-height="1812" align="center"/>

<b>步驟二：填寫撤單原因，並確認</b>

系統會有默認的拒絕原因，若需要修改拒絕原因，則可在輸入框內進行修改後確認。

拒絕後，客戶會收到對應的拒絕郵件。

<img src="NJzgbfE0joi9XlxJmcZjl2Dbpdf" src-width="3292" src-height="1810" align="center"/>

## 2.2 批量認購

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 認購記錄 &gt; 批量認購</p>
</div>

此頁面，主要為通過WBO幫客戶進行批量認購，主要適用於線下的認購單，可以批量錄入到系統中。

注意：這裡的批量認購，會正常需要凍結認購資金，走風控邏輯，只是操作人員代客下單。

### 2.2.1 認購列表

頁面主要展示批量認購的操作記錄，包括認購數量，操作人信息。

<img src="JEbDbF9xPoXmelxkBiWjRuj1p8c" src-width="3304" src-height="1776" align="center"/>

點擊『詳情』，則可查看批量認購的信息。

- 認購成功則會有關聯訂單號
- 認購失敗則會有拒絕原因

<img src="HmjdbuSOJo7PFPxaHFCjk7gxpQg" src-width="3302" src-height="920" align="center"/>

### 2.2.2 認購操作

<b>步驟一：點擊『批量認購』按鈕</b>

點擊按鈕按鈕後，彈出如下彈窗

<img src="AsbUbUMaDo58Csx3jm3jGmEtpId" src-width="3298" src-height="1768" align="center"/>

<b>步驟二：輸入股票代碼</b>

需要輸入批量認購的股票代碼，輸入後代表全部的認購均為此股票，頁面會限制，只能輸入認購中的新股，例如新股已上市，則會給出報錯說明。

如右圖。

<img src="A2r2bnOKSotLS5x5c6Ij2bDWpCI" src-width="1062" src-height="1060" align="center"/>

<b>步驟三：下載模板，並填寫信息</b>

普通認購模板信息如下圖。

<img src="MPhabcZedoHL9LxzBzPj9oCkpwh" src-width="1232" src-height="96" align="center"/>

- Account No：代表認購的證券賬號。
- Subscription Type：C代表現金認購、M代表融資認購、F代表0本金認購。
- Subscription Qty：代表認購的數量，這個必須與實際可認購數量相符合。
- Channel：代表申購的渠道。這個必須為該股票認購信息配置時，配置的渠道。
- Financing Ratio(%)：代表融資比例。
    - 若為現金認購，則填0。
    - 若為融資認購，則填寫融資池的比例即可，融資比例 + 渠道需要與認購信息配置的融資池匹配。
    - 若為0本金認購，則填100。

---

港股國配認購模板信息如下圖。

<img src="Aq4xbCW9MovJssxf9fojzz3UpFb" src-width="546" src-height="100" align="center"/>

- Account No：代表認購的證券賬號。
- Subscription Qty：代表認購的數量，這個必須與實際可認購數量相符合。
- Channel：代表申購的渠道。這個必須為該股票認購信息配置時，配置的渠道。

<b>步驟四：上傳批量認購文件</b>

數據填寫完畢，保存後，即可上傳文件數據，建議數據量控制在5000以內。

上傳完畢後，點擊『確認』即可，若文件信息無問題，則會生成一條批量認購記錄，點擊『詳情』，則可查看申購結果。

## 2.3 認購匯總

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 新股認購 &gt; 認購記錄 &gt; 認購匯總</p>
</div>

此頁面主要為分統計所有IPO認購訂單的匯總數據。所統計的訂單，只會統計有效訂單部分，會剔除撤銷的訂單。

融資金額，會拆分成渠道融資金額和券商墊資金額。

- 融資總額：客戶認購金額 * 融資比例
- 渠道融資金額：客戶認購金額 * 渠道融資比例
- 券商墊資金額：客戶認購金額 *（融資比例 - 渠道融資比例）

<img src="Y4mmbfV1FoMr51xEIOzj9JpRp1f" src-width="3316" src-height="748" align="center"/>

## 3. 新股配置

## 3.1 费率配置

### 3.1.1 功能介紹

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數配置 &gt; 新股配置 &gt; 費率管理</p>
</div>

IPO 的費率是以<b>計費套餐</b>的方式進行配置，可多個新股複用，在配置新股認購信息時，選擇一個預設好的計費套餐即可，計費內容主要包括：

在系統上線前，會根據港交所要求，系統默認設置好中籤費率，券商可點選右上角：<b>默認中籤費率</b>，修改或設定設定對應信息。

- 費率名稱盡可能設置為容易識別的信息，如：90% 融資費率、現金費率；
- 中籤費率在 0 本金認購的場景下，若不做任何收取，可在設置時，修改為 0。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 中籤費率為交易所收取，一般情況下不會變化，因此只需要設置默認值，在設置計費套餐時會默認引用默認值，無需每次填寫。</p>
</div>

### 3.1.2 操作說明

<b>步驟一：默認中籤費率設置</b>

點選右上角：默認中籤費率，設定對應信息，填寫信息後，確認即可。

<img src="SMgLbqJguox9XUxD1gsjWJGHpOB" src-width="1280" src-height="615" align="center"/>

<b>步驟二：默認中籤費率設置</b>

點選右上角：新建，進行計費套餐設置，填寫信息後，確認即可。

<img src="J7mqbghaaoT5NEx2oAijljjspzf" src-width="3288" src-height="1826" align="center"/>

### 3.1.3 字段說明

<img src="LK6qbWymJoKIRgxbh9Nj1U8Mpqe" src-width="1162" src-height="472" align="center"/>

### 渠道管理

### 3.1.4 功能介紹

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數配置 &gt; 新股配置 &gt; 渠道管理</p>
</div>

渠道配置主要是用來管理：劵商提供客戶認購新股的融資來源(渠道)

1. IPO 的資金來源是哪裡：例如是券商自有資金，或是某銀行提供融資資金；
2. 這個渠道可以進行什麼類型的認購：例如只能現金認購、或只能進行 0 本金認購。

分配使用不同渠道，更方便券商後續的融資成本管理及 IPO 數據的統計。

### 3.1.5 操作說明

<b>步驟一：查看新股列表</b>

點選右上角：新建，設定對應數據。

<img src="TLcZb4xYdoL3j1x7w9yjqj7cpuf" src-width="3770" src-height="1694" align="center"/>

<img src="Jllyb1wqNogoHoxJS3Sj1hcupaf" src-width="3788" src-height="1734" align="center"/>

### 3.1.6 字段說明

## 3.2 购买力配置

### 3.2.1 功能介紹

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 業務參數配置 &gt; 新股配置 &gt; 購買力配置</p>
</div>

該功能主要用於配置，在新股認購時，是否支持使用持倉購買力進行打新。若不配置，则默认不支持持仓购买力打新。

- 支持持倉購買力打新：那麼無論是現金認購，還是融資認購，現金部分可以使用持倉抵押的購買力。
    - 舉例說明：現金為0，持倉100,000HKD，能抵押60,000 HKD的購買力，那麼若客戶申購新股時候，就可以使用60,000 KHD的購買力進行現金申購，而非一定需要現金。

- 不支持持倉購買力打新：那麼無論是現金認購，還是融資認購，現金部分只能使用港幣已結算現金進行申購。
    - 舉例說明：現金為0，持倉100,000HKD，能抵押60,000 HKD的購買力，那麼若客戶申購新股時候，現金申購金額為0，融資申購若存在現金部分，那麼也不可以申購。

### 3.2.2 操作說明

<b>『新建』並填寫信息</b>

1. 點擊『新建』後彈出如下彈窗
2. 輸入股票代碼
3. 選擇認購類型，普通認購選『認購』，國配認購選『國配』
4. 是否支持持倉打新，填寫『是』
5. 是否支持借幣，填寫『是』
6. 信息填寫完畢確認即可

<img src="ELYbblpDYom8spxWsb5jrACEpeh" src-width="3284" src-height="1750" align="center"/>

打新購買力上浮係數說明：

代表認購新股時，持倉不能完全抵押。例如700.HK持倉10,000 HKD，初始保證金=40%，那麼代表可以抵押出來6,000 HKD的購買力，若此時填寫了『上浮係數』=0.2。

那麼在新股認購時，700.HK的初始保證金會按照40%+20%=60%（最多不超過100%）計算，也就是打新時，購買力=4,000 HKD。

