---
title: 系统介绍
slug: Jv6ew1wTYivfUCk8F2ocsTyqnIh
sidebar_position: 2
---


# 系统介绍

# 概述

Whale 新股认购系统支持券商支持客户新股认购的全过程，主要包括新股发行信息管理、申购信息配置、订单管理、中签信息管理等模块。

## 新股流程說明

<img src="/assets/WA2ZwNds0hy2bkbnElicgcmbnLe-board.png"/>

## 新股模塊說明

<img src="/assets/LW7UwzUBvh2T5xbTW8ucqTFbnfc-board.png"/>

<img src="/assets/Z2tAbdZTtoWHxnxxT9zcFqSgnxe.png" src-width="3214" src-height="1476" align="center"/>

- 新股发行信息管理模块，用于整合和展示即将发行的新股的详细信息，包括公司背景、财务数据和市场分析；
- 申购信息配置模块，允许券商为不同客户设置个性化的申购参数，包括申购限额和策略；
- 订单管理模块，用于处理和跟踪客户的新股申购订单，包括订单状态和风险管理；
- 中签信息管理模块，负责在新股配售后向客户通报中签结果，并处理相关的财务事务。

# 務操作管理

## 新股認購

### 港股認購

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 港股認購 </p>
</div>

港股認購為券商處理客戶港股新股認購的全部流程，包括新股資訊管理、認購配置、認購訂單、中簽分配等。也是新股系統最核心的流程

#### 新股列表

新股列表頁面為管理所有港股歷史新股的頁面，頁面區分三個狀態，方便券商進行操作：

- 未開啟認購：已有新股信息，新股未上市前，券商還未開啟認購的新股。
- 認購處理中：券商已開啟認購的新股，但新股還未上市，還有後續流程需要操作。
- 全部：包括所有新股，包括已上市，或取消上市的新股。

當有新股公告時，系統會透過行情自動同步數據，會默認記錄在『未開啟認購』列表中，方便券商查看與配置。對於未開啟認購的新股，點擊『詳情』，進行新股配置。

<img src="/assets/HX36b8nnJoKrKTxK7FbccjXAnge.png" src-width="3804" src-height="1832" align="center"/>

<b>操作按鈕說明</b>

- 詳情：則可查看新股詳細的信息、訂單數據。
- 扣款：當存在待扣款訂單時，才會出現『扣款』操作按鈕，點擊可進行快捷扣款操作。
- 公佈中籤：當存在需要公佈中籤的訂單時，才會出現『公佈中籤』操作按鈕，點擊可進行中籤操作。

#### 認購信息配置

若券商打算對某一個 IPO 開啟客戶申購，那麼需要手動開啟，並進行一些基礎設置，包括配置認購方式、認購時間、可認購人群等。

##### <b>現金認購</b>

1. 點擊新股列表的『詳情』，則進入配置頁面，進入頁面後，默認為“不可認購”，如下圖。
2. 單選，選擇『是』，再進行保存，則開啟認購，開啟後默認只能現金認購。
3. 此處設置完成，即現金認購開啟完成

<img src="/assets/M1aib4XYmoo13BxiSk3ct70LnSb.png" src-width="3782" src-height="1764" align="center"/>

##### 融資認購配置

若券商對该新股需要開啟『融資認購』，那麼需要設定融資池，<b>若不開啟，則無需此設置</b>。

<b>步驟一：新建融資池</b>

-<b>基礎信息</b>

點選『融資認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="/assets/F5lqbT3bOoUyWqxMtjLc5sMknge.png" src-width="3776" src-height="1816" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

<img src="/assets/RXwtbDa7Wo5cP3xx58GcQjXyn5e.png" src-width="3296" src-height="1802" align="center"/>

<b>-更多配置</b>

點擊『更多配置』，則可進行個性化設置。

❤ Tips: 

1. 『更多配置』中的配置數據，一般為須特別控制的信息，非必填。
2. 可見用戶群體：默認為全部客戶，若券商有運營系統的用戶分群功能，那麼可以指定這個融資只給部分客戶開放。
3. 上下限股數用於控制客戶的可認購股數範圍。

<img src="/assets/Jd3jb8ksho9AZExMQsDcK39CnTf.png" src-width="3288" src-height="1808" align="center"/>

<b>-客戶分群配置</b>

融資池可設置多個分群規則，配合運營要求，例如：

1. A 客戶群體只能最多申購 10000 股；
2. B 客戶群體最多可以申購 100000 股。

<img src="/assets/O9m6b7TjCodPVnx3nqDcmSyyncg.png" src-width="3766" src-height="1834" align="center"/>

<b>步驟二：融資池審批</b>

提交審批後，融資池為默認『待審批』狀態，審批成功後，才會生效。

❤ Tips: 

融資池審批有兩個審批入口：

1. 融資池列表
2. 融資池審批頁面

<img src="/assets/O4zGb5VlOoY68GxiRAUc0SkKnte.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 融資池審批</p>
</div>

<img src="/assets/JKvBb0IKLoULUQxGzobcSHmen1U.png" src-width="3744" src-height="1290" align="center"/>

點擊『審批』按鈕，查看工單詳情，審批通過後，融資池生效。

<img src="/assets/ZHvvb2BL0oSnyCxXtGIcAj2Bn8c.png" src-width="3274" src-height="1824" align="center"/>

##### 零本金認購配置

若券商對该新股需要開啟『0 本金認購』，那麼需要設定 0 本金認購的融資池，若不開啟，則無需此設置。

0 本金認購為一種比較特殊的認購方式，提供給客戶的融資比例只能為 100%，即客戶不需要任何本金，就可以認購 IPO。

<b>步驟一：新建融資池</b>

- <b>基礎信息</b>

點選『0 本金認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="/assets/GCEkb1Llpo1gxFxY3KrcTdafnOc.png" src-width="3056" src-height="1840" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

❤ Tips: 

此處設置，與融資認購設置相似，只是<b>不需要填選融資比例</b>，固定為 100%，更詳細操作參考：

<b>融資認購設置</b>。

<img src="/assets/F7NlbQsbkos44dxammGcUn6intb.png" src-width="3258" src-height="1814" align="center"/>

#### APP 新展示信息

頁面主要用於配置 APP 的展示『標籤』、『文案信息』。

- 標籤：默認無數據，需要自行添加。
- 展示文案：每個新股數據生成時，都會有默認的展示文案，無需每次都進行填寫，若需要修改文案，則可以在此頁面進行修改

<img src="/assets/BP9RbeJJqokFflxeBx1csAPtnuf.png" src-width="3274" src-height="1826" align="center"/>

#### 認購記錄

頁面主要展示對應 IPO 所有的認購記錄，也包括撤銷、被人工拒絕的訂單，同時在此頁面可操作『扣款』、『中籤』

<img src="/assets/RH2Sb0cmXoPL63x8NMdckMb2nuc.png" src-width="3286" src-height="1574" align="center"/>

##### 扣款操作

當 IPO 認購截止後，券商需要把確認好的 IPO 訂單資料交給港交所或其他上手，此時對客戶的有效認購訂單進行扣款認購金額及認購手續費的操作，並發放一定的融資金额。

扣款操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO 詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<b>步驟一：點擊扣款，確認訂單範圍</b>

點擊扣款後，會展示待扣款的訂單範圍，確認並選擇訂單範圍，再進行下一步操作。

<img src="/assets/YrQZbkrjkoXdIMxGbjLc2RF6ndd.png" src-width="3304" src-height="1820" align="center"/>

<b>步驟二：核對扣款訂單明細</b>

系統會自動根據認購訂單、費用、融資比例等計算出預覽數據，如下圖，操作人員需要核對相關的數據，並提交審核。

<img src="/assets/H6XWbEaEno4ntexzMuDcMWY0nxg.png" src-width="3298" src-height="1836" align="center"/>

<b>步驟三：扣款審批</b>

扣款審批有兩個入口：

1. 專門的扣款審批頁面：可查看歷史的扣款申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在<b>待辦工單</b>中操作審批。

點擊『審批』，則可查看工單，審批通過即可

<img src="/assets/VHMDb6Z1To9VOYxRVdfcDyOOnYb.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/SMyKbrJJdoxV9vxXmupcz5qEnsd.png" src-width="3302" src-height="1844" align="center"/>

##### 公佈中籤

一般在上市前一個交易日，會完成中籤結果公佈，系統需要對客戶完成中籤結果操作，中簽股票需要在當日到帳。

對於中籤的客戶：將退還認購金額，回收提供的 IPO 融資金額，扣除 IPO 融資利息，額外扣除中籤款、中籤費，發放中籤的新股。

對於未中籤的客戶：將退還認購金額，回收提供的 IPO 融資金額，同時扣除 IPO 融資利息

中籤操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO 詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<b>步驟一：點擊公佈中籤，核對數據</b>

點擊公佈中籤後，首先需要券商確認好以下數據，若信息無誤，則直接點擊『下一步』即可。

1. IPO 價格：一般情況系統會自動獲取，券商二次確認即可，若 IPO 價格系統自動獲取是異常的，操作人也可以人工填寫
2. 客戶的計息天數：默認計息天數為中籤日 - 認購截止日的差值（與港交所時間一致），操作者亦可自行修改。

<img src="/assets/Ex1EbVcz8o29xTxxV9tcA6Wunse.png" src-width="3306" src-height="1820" align="center"/>

<b>步驟二：選擇中籤方式</b>

IPO 系統提供多種中籤方式，券商可根據實際情況選擇不同的中籤方式。

<table header_row="1">
<colgroup>
<col width="189"/>
<col width="522"/>
</colgroup>
<thead>
<tr><th><p><b>中籤方式</b></p></th><th><p><b>中籤方式說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>港交所 CCASS 中籤結果</p></td><td><p><b>通過港交所做的 IPO</b><br/>CCASS 的中籤結果，下載下來，直接上傳 CCASS 結果即可。</p></td></tr>
<tr><td><p>自定義 CSV 文件</p></td><td><p><b>不是通過港交所做的 IPO，而是通過銀行或其他上手做的</b><br/>一般情況上手把中籤結果給一份 CSV 或 Excel 文件，需要操作人把對應結果文件轉化為系統可識別的字段，再進行上傳。</p></td></tr>
<tr><td><p>FINI 中籤結果</p></td><td><p><b>通過港交所做的 IPO</b><br/>FINI 平台的中籤結果，下載下來，直接上傳即可。</p></td></tr>
<tr><td><p>自動獲取上手中籤結果</p></td><td><p><b>以長橋香港為上手做的 IPO，可以系統化自動獲取</b><br/>選擇後，直接點擊『下一步』，那麼系統將自動拉取結果。</p></td></tr>
<tr><td><p>自動獲取 FINI 中籤結果</p></td><td><p><b>通過港交所 FINI - API 自動做的 IPO 訂單</b><br/>選擇後，直接點擊『下一步』，那麼系統將自動拉取結果。</p></td></tr>
</tbody>
</table>

<b>上傳自定義 CSV 文件</b>

1. 下載示例模板，模板如下：
    1. Order：代表 IPO 系统的订单号
    2. APPLY：代表该订单客户申请了多少股
    3. SUCCESS：代表客户中签了多少股

<img src="/assets/DiOabKazUoJhmfxKzimcreyXnuf.png" src-width="1004" src-height="258" align="center"/>

1. 填寫中籤數據，並上傳文件

<img src="/assets/Em0MbCAPPonkVtx9yyacHDtanug.png" src-width="3286" src-height="1822" align="center"/>

<b>步驟三：核對中籤結果</b>

系統會根據操作人所選的中籤方式及中籤文件，自動解析中籤結果，生成匯總及明細數據。

匯總數據：用於跟上手核對總數量、總中籤數量，便於快捷發現中籤數量問題。

明細數據：用於預覽中籤數據及扣費數據。

若數據無誤，點擊『確定』，則提交審核。

<img src="/assets/DW7Kbw8AZobXgxx7PXRcfQp7n2f.png" src-width="3294" src-height="1832" align="center"/>

<b>步驟四：中籤結果審核</b>

中籤審批有兩個入口：

1. 專門的中籤審批頁面：可查看歷史的中籤申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在<b>待辦工單</b>中操作審批。

點擊『審批』，則可查看工單，審批通過即可。

<img src="/assets/HeoLbCgIUoCSeoxuPHxc2QRJnEb.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/C43NbEPuPo7r03xPrcZc6uEDnge.png" src-width="3286" src-height="1820" align="center"/>

#### 文件生成

對於已經確認扣款成功的 IPO 認購訂單，券商需要把訂單提交給上手或港交所，一般來講，通過港交所做的 IPO 為 CCASS 文件，通過其他上手做的 IPO 一般需要線下 Excel 或 CSV 進行文件傳輸。

##### <b>已配置 FINI</b>

若券商已配置採用新的<b> FINI 平台</b>，Whale 系統將直接以 API 的方式將<b>IPO 訂單直接同步給港交所</b>，則無需此操作。

##### <b>未配置 FINI</b>

<b>步驟一：選擇訂單類型</b>

根據渠道或融資比例，選擇指定的訂單類型，点击『生成文件』按鈕。

這裡建議相同上手的數據，生成同一份文件。

例如：

1. 融資是通過某一銀行做的，不直接通過港交所，那麼單獨選擇，生成 CSV 文件。
2. 現金、0 成本打新是通過港交所做的，那麼一起選擇，生成 CCASS 文件。

<img src="/assets/ZXaqbYx5loR0V4xUgIgchpbinBb.png" src-width="3288" src-height="1318" align="center"/>

<b>步驟二：生成指定文件</b>

彈出側拉彈窗後，選擇<b>文件格式</b>，並自定義<b>文件名</b>，點擊『生成並下載』即可。

<img src="/assets/Q6EcbP3EJoLbxOxQ0ZkcuEQcnlg.png" src-width="3302" src-height="1844" align="center"/>

#### 融資匯總

此頁面主要用於統計融資池的使用金額及使用率，會分為兩個模塊展示：

- 按照融資比例分組展示
- 按照融資渠道分組展示

<img src="/assets/AqchbAVoaoEPShxInE0cVxg3n0c.png" src-width="3294" src-height="1726" align="center"/>

#### 字段說明

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="589"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>是否必填</b></p></th><th><p><b>填寫說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>認購開始時間</p></td><td><p>是</p></td><td><p>認購開始時間默認為交易所可認購時間，券商可自行修改</p></td></tr>
<tr><td><p>現金認購 - 結束時間</p></td><td><p>是</p></td><td><p>現金認購結束時間，默認為交易所結束時間，券商可自行修改</p></td></tr>
<tr><td><p>費率</p></td><td><p>是</p></td><td><blockquote>
<p>代表客戶選擇此方式認購時，所匹配的費率套餐<br/>所選費率只能為<a href="https://longbridge.feishu.cn/wiki/NCxvwUuDfiJJ66kgmcrcCUVunYg">費率管理</a>預設好的費率</p>
</blockquote></td></tr>
<tr><td><p>渠道</p></td><td><p>是</p></td><td><p>現金認購的渠道為默認現金渠道，券商可自行修改為其他現金渠道</p></td></tr>
<tr><td><p>融資總金額</p></td><td><p>是</p></td><td><blockquote>
<p>用於限制所有客戶可使用融資的最大總金額<br/>例如設置融資總金額設定為 500,000 HKD，融資比例為 90%。</p>
</blockquote>
<ol>
<li>客戶 A 使用了 200,000 HKD 融資</li>
<li>客戶 B 使用了 210,000 HKD 融資<br/>那麼此時融資池只剩下 90,000 HKD 額度，客戶使用 90% 的融資進行申購，最多只能申購 90,000 /90% =100,000 HKD 的金額，申購完畢後，融資池已用額度 500,000 HKD，其他客戶將不可用再使用該融資申購，除非券商將融資額度調高。</li>
</ol></td></tr>
<tr><td><p>融資比例</p></td><td><p>是</p></td><td><blockquote>
<p>代表提供給客戶的融資比例<br/>例如融資比例為 90%，那麼客戶 IPO 認購金額為 20,000 HKD 時，會用到 18,000 HKD 的 IPO 融資。</p>
</blockquote>
<ol>
<li>支持融資比例選擇</li>
<li>可自定義融資比例，設置好系統自動提醒槓桿倍數<img src="/assets/TbZgbgPf4o1waxxFSVZcFL4snW3.png" src-width="1156" src-height="200"/></li>
</ol></td></tr>
<tr><td><p>認購時間</p></td><td><p>是</p></td><td><blockquote>
<p>代表此認購方式的可認購時間<br/>券商可以靈活使用這個時間，做好 IPO 運營管理，例如可以配置為：</p>
</blockquote>
<ol>
<li>1 月 3 日支持 20 倍打新（2024-01-03 00:00:00  ～  2024-01-04 00:00:00）</li>
<li>1 月 4 日支持 10 倍打新（2024-01-04 00:00:00  ～  2024-01-05 00:00:00）</li>
</ol></td></tr>
<tr><td><p>預警金額</p></td><td><p>否</p></td><td><blockquote>
<p>當融資池剩餘金額小於設定值後，會有相關的預警通知，CS 會對券商做好友好提醒<br/>例如設置融資總金額設定為 500,000 HKD，若預警金額設置為 100,000 HKD，那麼當融資池剩餘額度低於設定值時，系統會進行相關通知</p>
</blockquote></td></tr>
<tr><td><p>最低本金要求</p></td><td><p>否</p></td><td><blockquote>
<p>一般情況下不設定，代表客戶使用此融資方式認購時，需要至少付出的本金<br/>例如：認購 A 股票 1 手為 5,000 HKD，融資池給的融資額度為 90%，若不設定此值時，客戶認購 1 手，只需要付出 500 HKD 本金，但當次值設置為 1,000 HKD 時，說明客戶至少要付出 1,000 HKD 本金。當客戶申購 3 手時，需要付出 1,500 HKD 本金，此時已經 &gt; 1,000 HKD，才能使用滿 90% 融資。</p>
</blockquote></td></tr>
<tr><td><p>渠道融資比例</p></td><td><p>否</p></td><td><blockquote>
<p>僅作為記錄使用，代表上手或銀行提供了多少融資比例。<br/>例如上手只給了 80% 的融資比例，但券商想給客戶提供 90% 融資，那麼可設置為：</p>
</blockquote>
<ol>
<li>融資比例 = 90%</li>
<li>渠道融資比例 = 80%<br/>系統在統計時，能更方便的計算出券商自己墊付了 10% 的融資</li>
</ol></td></tr>
<tr><td><p>可見客戶群體<br/>-客戶分群</p></td><td><p>是</p></td><td><p>系統默認對全部客戶開放，若券商有『Whale - 運營系統』，才會有用戶分群功能<br/>不在對應分群內的客戶，則在 IPO 申購時，看不到此認購方式</p></td></tr>
<tr><td><p>可見客戶群體<br/>-上限股數</p></td><td><p>是</p></td><td><p>系統默認填充，交易所允許的最大申購股數，券商可根據運營需要做相關修改</p></td></tr>
<tr><td><p>可見客戶群體<br/>-下限股數</p></td><td><p>是</p></td><td><p>系統默認填充，交易所的 1 手股數，券商可根據運營需要做相關修改</p></td></tr>
</tbody>
</table>

### 美股認購

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 美股認購 </p>
</div>

港股認購為券商處理客戶港股新股認購的全部流程，包括認購信息、認購訂單、中簽分配等模塊。認購信息需要手動進行填寫。

點擊『詳情』，則可查看認購信息

<img src="/assets/B18SbfNUmojkZPxyK12c8m5KnFd.png" src-width="3298" src-height="740" align="center"/>

#### 認購信息

此頁面主要用戶設置美股信息的基礎信息，若設置為『可認購』，且達到了『開始認購時間』，則客戶可以在 APP 上進行美股 IPO 認購。

<img src="/assets/DjUrbP50AoQOBhxSmXecg73OnEb.png" src-width="3268" src-height="1878" align="center"/>

#### APP 展示信息

頁面主要用於配置 APP 的展示『文案信息』。系统會有默認的展示文案，無需每次都進行填寫，若需要修改文案，則可以在此頁面進行修改與保存。

<img src="/assets/VWfeb5lDToOYFYxc1Gecd5iWnYc.png" src-width="3258" src-height="1808" align="center"/>

#### 认购记录

頁面主要展示對應 IPO 所有的認購記錄，也包括撤銷、被人工拒絕的訂單，同時在此頁面可操作『中籤』。

詳細的中籤操作，與港股一致，詳細操作請看 1.1.4.2 公佈中籤。

<img src="/assets/E5Qbb6zDDoo70rx5eAOccp1dnMc.png" src-width="3294" src-height="1688" align="center"/>

#### 字段說明

<table header_column="1" header_row="1">
<colgroup>
<col width="132"/>
<col width="121"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>是否必填</b></p></th><th><p><b>填寫說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>是否可認購</p></td><td><p>是</p></td><td><p>默认关闭，开启后代表可认购</p></td></tr>
<tr><td><p>最低發行價</p></td><td><p>是</p></td><td><p>發行價區間下限值，限制只能填正數</p></td></tr>
<tr><td><p>最高發行價</p></td><td><p>是</p></td><td><p>發行價區間上限值，限制只能填正數</p></td></tr>
<tr><td><p>總股本</p></td><td><p>是</p></td><td><p>限制只能填正數</p></td></tr>
<tr><td><p>凍結比例（%）</p></td><td><p>是</p></td><td><p>由於最終 IPO 價格會有變化，此值代表申購時按照最高發行價凍結現金的比例</p></td></tr>
<tr><td><p>最低認購股數</p></td><td><p>是</p></td><td><p>認購股數下限值，限制只能填正數</p></td></tr>
<tr><td><p>招股書</p></td><td><p>是</p></td><td><p>需要填寫招股書 PDF 鏈接</p></td></tr>
<tr><td><p>開始認購時間（美東時間）</p></td><td><p>是</p></td><td><p>美東時間的開始認購時間</p></td></tr>
<tr><td><p>截止認購時間（美東時間）</p></td><td><p>是</p></td><td><p>美東時間的截止認購時間</p></td></tr>
<tr><td><p>公佈中籤時間（美東時間）</p></td><td><p>是</p></td><td><p>美東時間的公佈中籤時間</p></td></tr>
<tr><td><p>IPO 時間</p></td><td><p>是</p></td><td><p>實際上市日</p></td></tr>
<tr><td><p>行業</p></td><td><p>是</p></td><td><p>新股所屬的行業，主要展示在 APP 新股詳情的介紹資料中</p></td></tr>
<tr><td><p>承销商</p></td><td><p>是</p></td><td><p>新股的承銷商，主要展示在 APP 新股詳情的介紹資料中</p></td></tr>
</tbody>
</table>

### 港股國配

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 港股國配</p>
</div>

港股國配的主要流程為：創建國配新股 &gt; 客戶認購 &gt; 公佈中籤。

#### 認購列表

此頁面主要展示歷史創建好的港股配售股票

<img src="/assets/V6uZb09J3oEWrMxDN6Cc9sRSnBe.png" src-width="3298" src-height="1018" align="center"/>

點擊『新建』，可創建新的國配新股，這裡僅能選擇，未上市的股票。

<img src="/assets/TweobuibwomTngxqCQ4c1wKGnQc.png" src-width="3304" src-height="1580" align="center"/>

#### 認購信息

創建國配新股後，需要填寫部分信息，並開啟認購。確認後，若已經到了認購開始時間，並符合可見客戶，則可在 APP 內進行申請。

<img src="/assets/Xvkjb1Q1eohWClxVsg9cE7aDnQg.png" src-width="3276" src-height="1804" align="center"/>

#### APP 展示信息

頁面主要用於配置 APP 的展示『文案信息』。系统會有默認的展示文案，無需每次都進行填寫，若需要修改文案，則可以在此頁面進行修改與保存。

<img src="/assets/GfBEbkIcxouilkxjfudcErdqnCg.png" src-width="3260" src-height="1776" align="center"/>

#### 認購記錄

國配訂單認購成功後，頁面會正常展示認購記錄。

到中签階段，可操作中签，操作與普通港股中签一致。詳情見 <b>1.1.4.2</b>

<img src="/assets/NSwrb0qw8oleCuxmeZpc46mYnbd.png" src-width="3290" src-height="1154" align="center"/>

#### 文件生成

若國配對接上手，需要提供給上手文件，那麼可在『文件生成』處，導出認購的基本訂單信息、客戶信息。

<img src="/assets/NF0db7QRkoAzmGxzfdpcTShbnnh.png" src-width="2578" src-height="780" align="center"/>

#### 字段說明

<table header_column="1" header_row="1">
<colgroup>
<col width="132"/>
<col width="121"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>是否必填</b></p></th><th><p><b>填寫說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>是否可認購</p></td><td><p>是</p></td><td><p>默认关闭，开启后代表可认购</p></td></tr>
<tr><td><p>是否可使用持倉購買力</p></td><td><p>是</p></td><td><p>默認否。<br/>為否：代表只能用可提現金認購<br/>為是：代表可以用現金 + 持倉抵押的購買力認購</p></td></tr>
<tr><td><p>凍結比例（%）</p></td><td><p>是</p></td><td><p>此值代表申購時按照申購金額價凍結現金的比例</p></td></tr>
<tr><td><p>渠道</p></td><td><p>是</p></td><td><p>國配認購的渠道只能選擇支持國配的渠道</p></td></tr>
<tr><td><p>費率</p></td><td><p>是</p></td><td><blockquote>
<p>代表客戶選擇此方式認購時，所匹配的費率套餐<br/>所選費率只能為<a href="https://longbridge.feishu.cn/wiki/NCxvwUuDfiJJ66kgmcrcCUVunYg">費率管理</a>預設好的費率</p>
</blockquote></td></tr>
<tr><td><p>認購開始時間</p></td><td><p>是</p></td><td><p>開始認購的時間</p></td></tr>
<tr><td><p>結束時間</p></td><td><p>是</p></td><td><p>截止認購的時間</p></td></tr>
<tr><td><p>可見客戶群體</p></td><td><p>是</p></td><td><p>系統默認對全部客戶開放，若券商有『Whale - 運營系統』，才會有用戶分群功能<br/>不在對應分群內的客戶，則在 IPO 申購時，看不到此認購方式</p></td></tr>
<tr><td><p>可認購數量</p></td><td><p>是</p></td><td><p>可認購的上限、下限數量範圍</p></td></tr>
</tbody>
</table>

### 融資池審批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 融資池審批</p>
</div>

此頁面記錄港股新股融資認購、0 本金認購的所有融資池申請、變更記錄，同時可查看審核人、審核狀態。

<img src="/assets/UvfobI0RDoODuIxEjmtc3tlGnvg.png" src-width="3276" src-height="1488" align="center"/>

#### 詳情

點擊『詳情』，可查看融資池的申請明細

<img src="/assets/E8QgbRhJUosIufx4l8qc73E2ndb.png" src-width="3280" src-height="1800" align="center"/>

#### 審批

點擊『審批』，可查看審批工單詳情。

若為變更數據，則可對比變更前、變更後數據。

<img src="/assets/OB2wbBCmloMufLxhr2xcUEI2noe.png" src-width="3272" src-height="1780" align="center"/>

### 扣款審批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 扣款審批</p>
</div>

此頁面主要記錄所有的歷史扣款記錄，可快速查到操作人，審核人。

<img src="/assets/Pineb2b9XoFOaCxwslmcXTJCnAh.png" src-width="3268" src-height="1766" align="center"/>

- 點擊詳情可查看具體的扣款明細數據

<img src="/assets/EssIbJydiorRcbxiQOHc7bmlns2.png" src-width="3278" src-height="1590" align="center"/>

### 中籤審批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 中籤審批</p>
</div>

此頁面展示所有新股歷史的中籤記錄，可快速查到操作人，審核人及歷史中籤文件數據。

<img src="/assets/Umpgb2McCoWgVVxOGjTc9Xr7nuh.png" src-width="3236" src-height="1730" align="center"/>

#### 詳情

點擊『詳情』，可查看中籤數據詳情，包括中籤文件、中籤明細等數據。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/H5M9bFqRKov6RFxwsoWcN1g4nag.png" src-width="1634" src-height="1822" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/OIoxbZQtuoquvDxIk3Oc45renFb.png" src-width="1630" src-height="1844" align="center"/>
</div>
</div>

#### 審批

點擊『審批』，可查看審批工單詳情。

<img src="/assets/AH4IbvyjIoL5UyxSr5LcNe2gnkc.png" src-width="3276" src-height="1830" align="center"/>

## 認購記錄

### 認購記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 認購記錄 &gt; 認購記錄</p>
</div>

頁面展示所有的新股訂單，同時可操作後台批量拒絕訂單。

<b>步驟一：選中訂單，點擊『批量撤單』</b>

<img src="/assets/TvE4bOnI8oeilbxF2nzcn8uCncc.png" src-width="3258" src-height="1812" align="center"/>

<b>步驟二：填寫撤單原因，並確認</b>

系統會有默認的拒絕原因，若需要修改拒絕原因，則可在輸入框內進行修改後確認。

拒絕後，客戶會收到對應的拒絕郵件。

<img src="/assets/Mfhyb83hSoebxDxtSQ3cEjN1n6g.png" src-width="3292" src-height="1810" align="center"/>

### 批量認購

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 認購記錄 &gt; 批量認購</p>
</div>

此頁面，主要為通過 WBO 幫客戶進行批量認購，主要適用於線下的認購單，可以批量錄入到系統中。

注意：這裡的批量認購，會正常需要凍結認購資金，走風控邏輯，只是操作人員代客下單。

#### 認購列表

頁面主要展示批量認購的操作記錄，包括認購數量，操作人信息。

<img src="/assets/XSPhbYyUFoxl9JxGw1LcHEbvnfb.png" src-width="3304" src-height="1776" align="center"/>

點擊『詳情』，則可查看批量認購的信息。

- 認購成功則會有關聯訂單號
- 認購失敗則會有拒絕原因

<img src="/assets/IyMfbKkN2okN9NxcoTDcujvWn6f.png" src-width="3302" src-height="920" align="center"/>

#### 認購操作

<b>步驟一：點擊『批量認購』按鈕</b>

點擊按鈕按鈕後，彈出如下彈窗

<img src="/assets/KVM6bLVveoaeQwxdh1lcg5XGn9e.png" src-width="3298" src-height="1768" align="center"/>

<b>步驟二：輸入股票代碼</b>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>需要輸入批量認購的股票代碼，輸入後代表全部的認購均為此股票，頁面會限制，只能輸入認購中的新股，例如新股已上市，則會給出報錯說明。</p>
<p>如右圖。</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/I6e7bK6iNoM5csxHTpBcnKE5nqr.png" src-width="1062" src-height="1060" align="center"/>
</div>
</div>

<b>步驟三：下載模板，並填寫信息</b>

普通認購模板信息如下圖。

<img src="/assets/W88tbnVdoomvlsxgr2rcX0aznxU.png" src-width="1232" src-height="96" align="center"/>

- Account No：代表認購的證券賬號。
- Subscription Type：C 代表現金認購、M 代表融資認購、F 代表 0 本金認購。
- Subscription Qty：代表認購的數量，這個必須與實際可認購數量相符合。
- Channel：代表申購的渠道。這個必須為該股票認購信息配置時，配置的渠道。
- Financing Ratio(%)：代表融資比例。
    - 若為現金認購，則填 0。
    - 若為融資認購，則填寫融資池的比例即可，融資比例 + 渠道需要與認購信息配置的融資池匹配。
    - 若為 0 本金認購，則填 100。

---

港股國配認購模板信息如下圖。

<img src="/assets/YNz2bBUMaoUKyfxWtgzcYnDmnNf.png" src-width="546" src-height="100"/>

- Account No：代表認購的證券賬號。
- Subscription Qty：代表認購的數量，這個必須與實際可認購數量相符合。
- Channel：代表申購的渠道。這個必須為該股票認購信息配置時，配置的渠道。

<b>步驟四：上傳批量認購文件</b>

數據填寫完畢，保存後，即可上傳文件數據，建議數據量控制在 5000 以內。

上傳完畢後，點擊『確認』即可，若文件信息無問題，則會生成一條批量認購記錄，點擊『詳情』，則可查看申購結果。

### 認購匯總

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 認購記錄 &gt; 認購匯總</p>
</div>

此頁面主要為分統計所有 IPO 認購訂單的匯總數據。所統計的訂單，只會統計有效訂單部分，會剔除撤銷的訂單。

融資金額，會拆分成渠道融資金額和券商墊資金額。

- 融資總額：客戶認購金額 * 融資比例
- 渠道融資金額：客戶認購金額 * 渠道融資比例
- 券商墊資金額：客戶認購金額 *（融資比例 - 渠道融資比例）

<img src="/assets/KG0xbVuAZofsiHxwjaOcmcvincb.png" src-width="3316" src-height="748" align="center"/>

## 新股配置

### 费率配置

#### 功能介紹

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數配置 &gt; 新股配置 &gt; 費率管理</p>
</div>

IPO 的費率是以<b>計費套餐</b>的方式進行配置，可多個新股複用，在配置新股認購信息時，選擇一個預設好的計費套餐即可，計費內容主要包括：

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="720"/>
</colgroup>
<tbody>
<tr><td><p>認購手續費</p></td><td><p>對申購的有效訂單，收取的固定手續費，與申購金額無關</p></td></tr>
<tr><td><p>融資年利率</p></td><td><p>收取客戶的利息 = 融資金額 * 融資年利率/365 * 計息天數</p></td></tr>
<tr><td><p>中籤費用</p></td><td><p>此設置為比例，按照最終中籤金額 × 對應的比例</p></td></tr>
</tbody>
</table>

在系統上線前，會根據港交所要求，系統默認設置好中籤費率，券商可點選右上角：<b>默認中籤費率</b>，修改或設定設定對應信息。

- 費率名稱盡可能設置為容易識別的信息，如：90% 融資費率、現金費率；
- 中籤費率在 0 本金認購的場景下，若不做任何收取，可在設置時，修改為 0。

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<p>中籤費率為交易所收取，一般情況下不會變化，因此只需要設置默認值，在設置計費套餐時會默認引用默認值，無需每次填寫。</p>
</div>

#### 操作說明

<b>步驟一：默認中籤費率設置</b>

點選右上角：默認中籤費率，設定對應信息，填寫信息後，確認即可。

<img src="/assets/HOvnbP2SnoleddxGihWco2S7nVh.png" src-width="1280" src-height="615" align="center"/>

<b>步驟二：默認中籤費率設置</b>

點選右上角：新建，進行計費套餐設置，填寫信息後，確認即可。

<img src="/assets/R24nbLIXEoFnRNxCVGrcFxg4nHf.png" src-width="3288" src-height="1826" align="center"/>

#### 字段說明

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="65"/>
<col width="604"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>必填</b></p></th><th><p><b>填寫說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>證監會交易徵費</p></td><td><p>是</p></td><td><p>對應港交所 SFC Transaction Levy 的費用類型</p></td></tr>
<tr><td><p>聯交所交易徵費</p></td><td><p>是</p></td><td><p>對應港交所 Transaction Fee 的費用類型</p></td></tr>
<tr><td><p>財匯局交易徵費</p></td><td><p>是</p></td><td><p>對應港交所 Transaction Levy 的費用類型</p></td></tr>
<tr><td><p>經紀人佣金</p></td><td><p>是</p></td><td><p>給經紀人的佣金（具體使用待確認）</p></td></tr>
<tr><td><p>費率名稱</p></td><td><p>是</p></td><td><p>券商自定義的費率名稱，再配置 IPO 費用時，選擇使用，如下圖：<br/><img src="/assets/TPaUbENXHohTbhxyggRc3xdUnCd.png" src-width="1162" src-height="472" align="center"/></p></td></tr>
<tr><td><p>計費幣種</p></td><td><p>是</p></td><td><p>港股 IPO 默認以港幣計費</p></td></tr>
<tr><td><p>客戶融資年利率</p></td><td><p>是</p></td><td><p>為客戶提供融資認購，收取客戶的融資利息年利率，可以為 0</p></td></tr>
<tr><td><p>認購手續費</p></td><td><p>是</p></td><td><p>IPO 認購時，券商收取客戶的認購手續費，為一次性收費，與認購金額無關，可以為 0</p></td></tr>
</tbody>
</table>

### 渠道管理

#### 功能介紹

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數配置 &gt; 新股配置 &gt; 渠道管理</p>
</div>

渠道配置主要是用來管理：劵商提供客戶認購新股的融資來源 (渠道)

1. IPO 的資金來源是哪裡：例如是券商自有資金，或是某銀行提供融資資金；
2. 這個渠道可以進行什麼類型的認購：例如只能現金認購、或只能進行 0 本金認購。

分配使用不同渠道，更方便券商後續的融資成本管理及 IPO 數據的統計。

#### 操作說明

<b>步驟一：查看新股列表</b>

點選右上角：新建，設定對應數據。

<img src="/assets/C6v2b0Tb2oZJtAxMY28c4PONn4b.png" src-width="3770" src-height="1694" align="center"/>

<img src="/assets/T25Mbgv77oSijMxzvxpcEmgNnn4.png" src-width="3788" src-height="1734" align="center"/>

#### 字段說明

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="569"/>
</colgroup>
<thead>
<tr><th><p><b>字段</b></p></th><th><p><b>必填</b></p></th><th><p><b>填寫說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>渠道名稱</p></td><td><p>是</p></td><td><p>自定義渠道名稱，建議小于 10 個字符，不能有空格<br/>在配置融資池時，會根據名稱選擇。</p></td></tr>
<tr><td><p>支持類型</p></td><td><p>是</p></td><td><p>該渠道都支援什麼樣的認購類型，可多選。</p></td></tr>
<tr><td><p>是否同步至港交所</p></td><td><p>是</p></td><td><p>對應通路的訂單是否需要同步到港交所。</p>
<ul>
<li>是 - 開啟了 FINI 後，會透過 API 自動把該通路訂單同步給港交所</li>
<li>否 - 不同步<br/>例如：透過上手/銀行做的新股認購，不直接提交到港交所，則選擇<b>否</b>；</li>
</ul></td></tr>
<tr><td><p>備註</p></td><td><p>否</p></td><td><p>自主備註，方便查看這個管道的用途、定義</p></td></tr>
</tbody>
</table>

### 购买力配置

#### 功能介紹

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數配置 &gt; 新股配置 &gt; 購買力配置</p>
</div>

該功能主要用於配置，在新股認購時，是否支持使用持倉購買力進行打新。若不配置，则默认不支持持仓购买力打新。

- 支持持倉購買力打新：那麼無論是現金認購，還是融資認購，現金部分可以使用持倉抵押的購買力。
    - 舉例說明：現金為 0，持倉 100,000HKD，能抵押 60,000 HKD 的購買力，那麼若客戶申購新股時候，就可以使用 60,000 KHD 的購買力進行現金申購，而非一定需要現金。

- 不支持持倉購買力打新：那麼無論是現金認購，還是融資認購，現金部分只能使用港幣已結算現金進行申購。
    - 舉例說明：現金為 0，持倉 100,000HKD，能抵押 60,000 HKD 的購買力，那麼若客戶申購新股時候，現金申購金額為 0，融資申購若存在現金部分，那麼也不可以申購。

#### 操作說明

<b>『新建』並填寫信息</b>

1. 點擊『新建』後彈出如下彈窗
2. 輸入股票代碼
3. 選擇認購類型，普通認購選『認購』，國配認購選『國配』
4. 是否支持持倉打新，填寫『是』
5. 是否支持借幣，填寫『是』
6. 信息填寫完畢確認即可

<img src="/assets/HfD7bhuiqojdEMx62AoceF8gnZe.png" src-width="3284" src-height="1750" align="center"/>

打新購買力上浮係數說明：

代表認購新股時，持倉不能完全抵押。例如 700.HK 持倉 10,000 HKD，初始保證金=40%，那麼代表可以抵押出來 6,000 HKD 的購買力，若此時填寫了『上浮係數』=0.2。

那麼在新股認購時，700.HK 的初始保證金會按照 40%+20%=60%（最多不超過 100%）計算，也就是打新時，購買力=4,000 HKD。

