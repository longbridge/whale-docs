---
title: 快速上手
slug: K3iswCEWDi48zckDsjHc3pvinwe
sidebar_position: 1
---


# 快速上手

# 概述

Whale 新股认购系统全面支持券商处理客户新股认购流程，包括新股信息管理、认购配置、订单管理、中签分配等全流程的管理。

针对即将上市的新股，快速配置即可支持客户线上进行新股认购。

# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

<table header_row="1">
<colgroup>
<col width="437"/>
<col width="393"/>
</colgroup>
<thead>
<tr><th><p>權限名稱</p></th><th><p>權限說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>管理新股认购信息、融资配置、认购记录、费用处理、中签处理的权限<br/>IPOOrderFull</p></td><td><p>新股從開啟認購到中籤處理的全部權限</p></td></tr>
</tbody>
</table>

## 開啟認購

以港股现金认购为例，经过几分钟快速的配置，即可支持客户线上进行新股认购。

### 現金認購配置

若券商打算對某一個 IPO 開啟客戶申購，那麼需要手動開啟，並進行一些基礎的費率、時間設置。

<b>步驟一：查看新股列表</b>

當有新股公告時，系統會透過行情自動同步數據，會默認記錄在『未開啟認購』列表中，方便券商查看與配置。對於未開啟認購的新股，點擊『詳情』，進行新股配置。

<img src="/assets/Ok7pbvn5PoxW4sxe986cNZd2nwd.png" src-width="3804" src-height="1832" align="center"/>

<b>步驟二：開啟認購</b>

1. 點擊新股列表的『詳情』，則進入配置頁面，進入頁面後，默認為“不可認購”，如下圖。
2. 單選，選擇『是』，再進行保存，則開啟認購，開啟後默認只能現金認購。
3. 此處設置完成，即現金認購開啟完成

<img src="/assets/HvQAbD3kNoMUJ3xivPqcL7KxnRf.png" src-width="3782" src-height="1764" align="center"/>

### 融資認購配置

若券商對该新股需要開啟『融資認購』，那麼需要設定融資池，<b>若不開啟，則無需此設置</b>。

<b>步驟一：新建融資池</b>

-<b>基礎信息</b>

點選『融資認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="/assets/U6bHbtbwDoqAs0xjjx0cyTDTngh.png" src-width="3776" src-height="1816" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

<img src="/assets/XQI3bpalloDrNOx5vZHcCUvYnic.png" src-width="3296" src-height="1802" align="center"/>

<b>-更多配置</b>

點擊『更多配置』，則可進行個性化設置。

❤ Tips: 

1. 『更多配置』中的配置數據，一般為須特別控制的信息，非必填。
2. 可見用戶群體：默認為全部客戶，若券商有運營系統的用戶分群功能，那麼可以指定這個融資只給部分客戶開放。
3. 上下限股數用於控制客戶的可認購股數範圍。

<img src="/assets/NufAbYKGroh9PKxYGy6cINDwn1f.png" src-width="3288" src-height="1808" align="center"/>

<b>-客戶分群配置</b>

融資池可設置多個分群規則，配合運營要求，例如：

1. A 客戶群體只能最多申購 10000 股；
2. B 客戶群體最多可以申購 100000 股。

<img src="/assets/SbmEbsGmIolVuQxEbQJcVK30noc.png" src-width="3766" src-height="1834" align="center"/>

<b>步驟二：融資池審批</b>

提交審批後，融資池為默認『待審批』狀態，審批成功後，才會生效。

❤ Tips: 

融資池審批有兩個審批入口：

1. 融資池列表
2. 融資池審批頁面

<img src="/assets/F5vvb1evVoNgogxc2Z9cqWnynvh.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>新股認購 &gt; 新股認購 &gt; 融資池審批</p>
</div>

<img src="/assets/LOeib9ZBooqSH6xxS6ccKAaznIV.png" src-width="3744" src-height="1290" align="center"/>

點擊『審批』按鈕，查看工單詳情，審批通過後，融資池生效。

<img src="/assets/Smv7b28HCoLKVhxbnGhcrraQnwh.png" src-width="3274" src-height="1824" align="center"/>

### 零本金認購配置

若券商對该新股需要開啟『0 本金認購』，那麼需要設定 0 本金認購的融資池，若不開啟，則無需此設置。

0 本金認購為一種比較特殊的認購方式，提供給客戶的融資比例只能為 100%，即客戶不需要任何本金，就可以認購 IPO。

<b>步驟一：新建融資池</b>

- <b>基礎信息</b>

點選『0 本金認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="/assets/PSGobCUEdoY49WxAVKlcARvFnOd.png" src-width="3056" src-height="1840" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

❤ Tips: 

此處設置，與融資認購設置相似，只是<b>不需要填選融資比例</b>，固定為 100%，更詳細操作參考：

<b>融資認購設置</b>。

<img src="/assets/CELSb1uyZoyuyxxkUa4cXeeCnmc.png" src-width="3258" src-height="1814" align="center"/>

## 认购截止扣款

當 IPO 認購截止後，券商需要把確認好的 IPO 訂單資料交給港交所或其他上手，此時對客戶的有效認購訂單進行扣款認購金額及認購手續費的操作，並發放一定的融資金额。

扣款操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO 詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<img src="/assets/NyQibak1io4R3OxYecPceUPhnOb.png" src-width="3280" src-height="860" align="center"/>

<img src="/assets/NUIvbRQ3ao2CVux8mgKcRtOxnkg.png" src-width="3286" src-height="1574" align="center"/>

<b>步驟一：點擊扣款，確認訂單範圍</b>

點擊扣款後，會展示待扣款的訂單範圍，確認並選擇訂單範圍，再進行下一步操作。

<img src="/assets/IfAlb6xHbopyx7xHr8CcA4EFnae.png" src-width="3304" src-height="1820" align="center"/>

<b>步驟二：核對扣款訂單明細</b>

系統會自動根據認購訂單、費用、融資比例等計算出預覽數據，如下圖，操作人員需要核對相關的數據，並提交審核。

<img src="/assets/HhdAb7dDMoRzTJxiLu5chBMcnkh.png" src-width="3298" src-height="1836" align="center"/>

<b>步驟三：扣款審批</b>

扣款審批有兩個入口：

1. 專門的扣款審批頁面：可查看歷史的扣款申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在<b>待辦工單</b>中操作審批。

點擊『審批』，則可查看工單，審批通過即可

<img src="/assets/LRbWbUGnuo6SNNxjU7ycFQAXnoh.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/SoC6bGammoTb7UxYLfqcIo9XnJe.png" src-width="3302" src-height="1844" align="center"/>

## 訂單提交上手

對於已經確認扣款成功的 IPO 認購訂單，券商需要把訂單提交給上手或港交所，一般來講，通過港交所做的 IPO 為 CCASS 文件，通過其他上手做的 IPO 一般需要線下 Excel 或 CSV 進行文件傳輸。

### <b>已配置 FINI</b>

若券商已配置採用新的<b> FINI 平台</b>，Whale 系統將直接以 API 的方式將<b>IPO 訂單直接同步給港交所</b>，則無需此操作。

### <b>未配置 FINI</b>

<b>步驟一：選擇訂單類型</b>

根據渠道或融資比例，選擇指定的訂單類型，点击『生成文件』按鈕。

這裡建議相同上手的數據，生成同一份文件。

例如：

1. 融資是通過某一銀行做的，不直接通過港交所，那麼單獨選擇，生成 CSV 文件。
2. 現金、0 成本打新是通過港交所做的，那麼一起選擇，生成 CCASS 文件。

<img src="/assets/LFLHbXYf1oF35kxKOw4cfhQtnjd.png" src-width="3288" src-height="1318" align="center"/>

<b>步驟二：生成指定文件</b>

彈出側拉彈窗後，選擇<b>文件格式</b>，並自定義<b>文件名</b>，點擊『生成並下載』即可。

<img src="/assets/J7EFbQIfHohxyUxWMwxcGksgnYe.png" src-width="3302" src-height="1844" align="center"/>

## 公布中签

一般在上市前一個交易日，會完成中籤結果公佈，系統需要對客戶完成中籤結果操作，中簽股票需要在當日到帳。

對於中籤的客戶：將退還認購金額，回收提供的 IPO 融資金額，扣除 IPO 融資利息，額外扣除中籤款、中籤費，發放中籤的新股。

對於未中籤的客戶：將退還認購金額，回收提供的 IPO 融資金額，同時扣除 IPO 融資利息

中籤操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO 詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<img src="/assets/DMBpbv1CKopKN6xqz6JcsOBLn1b.png" src-width="3282" src-height="720" align="center"/>

<img src="/assets/Xs5DbkCqToOXajxPJ7jc0AfpnFh.png" src-width="3284" src-height="1590" align="center"/>

<b>步驟一：點擊公佈中籤，核對數據</b>

點擊公佈中籤後，首先需要券商確認好以下數據，若信息無誤，則直接點擊『下一步』即可。

1. IPO 價格：一般情況系統會自動獲取，券商二次確認即可，若 IPO 價格系統自動獲取是異常的，操作人也可以人工填寫
2. 客戶的計息天數：默認計息天數為中籤日 - 認購截止日的差值（與港交所時間一致），操作者亦可自行修改。

<img src="/assets/ASkXbxLvYo7brUxVIPMcw3ZRnMh.png" src-width="3306" src-height="1820" align="center"/>

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

<img src="/assets/LmEOb48B6oYnmYx2n50cPwOGnId.png" src-width="1004" src-height="258" align="center"/>

1. 填寫中籤數據，並上傳文件

<img src="/assets/Kwfmba2tooVXTExcHH2cVfrhnJh.png" src-width="3286" src-height="1822" align="center"/>

<b>步驟三：核對中籤結果</b>

系統會根據操作人所選的中籤方式及中籤文件，自動解析中籤結果，生成匯總及明細數據。

匯總數據：用於跟上手核對總數量、總中籤數量，便於快捷發現中籤數量問題。

明細數據：用於預覽中籤數據及扣費數據。

若數據無誤，點擊『確定』，則提交審核。

<img src="/assets/V6plb6dv4o6BnWxplcpcrFJ5nfd.png" src-width="3294" src-height="1832" align="center"/>

<b>步驟四：中籤結果審核</b>

中籤審批有兩個入口：

1. 專門的中籤審批頁面：可查看歷史的中籤申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在<b>待辦工單</b>中操作審批。

點擊『審批』，則可查看工單，審批通過即可。

<img src="/assets/Wf36bW0VwoI66ZxxGu0c3RaNnTd.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/N3cHbN37sod8HNxhpIvcprd1n0d.png" src-width="3286" src-height="1820" align="center"/>

