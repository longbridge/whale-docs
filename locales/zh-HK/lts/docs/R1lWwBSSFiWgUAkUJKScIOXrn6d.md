---
title: 系统介绍
slug: R1lWwBSSFiWgUAkUJKScIOXrn6d
sidebar_position: 2
---


# 系统介绍

# 概述

Whale 基金管理系统全面支持券商维护基金库、配置 App 端基金展示、管理基金订单及交易结算等全流程的管理。

注意：目前 Whale 基金业务仅支持基金认购资金募集成立后，基金申购与赎回的业务操作，募集期间的认购目前暂不支持

<b>基金交易流程</b>

<img src="/assets/Zy5Zbiz5DoNoo2x1ZD8cnwk7nsb.png" src-width="1210" src-height="1716" align="center"/>

<b>重要時間點參考： </b>（以下會根據不同基金代理商有所不同）

<table>
<colgroup>
<col width="202"/>
<col width="269"/>
<col width="157"/>
<col width="192"/>
</colgroup>
<tbody>
<tr><td><p>時間 </p></td><td><p>操作內容 </p></td><td><p>操作人員 </p></td><td><p>備註 </p></td></tr>
<tr><td><p>T 日 12:00 cut-off </p></td><td><p>申購、贖回數據發送基金代理商 (例：高騰) （會由前台自動獲取訂單） </p></td><td><p>BO 後台人員</p></td><td><p>資產凍結、發送後不可撤單 </p></td></tr>
<tr><td><p>T 日 16:00 之前 </p></td><td><p>T 日訂單發送申購贖回表至基金託管行 </p></td><td><p>BO 後台人員</p></td><td></td></tr>
<tr><td><p>T 日 18:00 之前 </p></td><td><p>申購款打到基金託管行 </p></td><td><p>財務 </p></td><td></td></tr>
<tr><td><p>T+1 日（21:00 點左右） </p></td><td><p>申購份額、贖回份額確認 </p></td><td></td><td><p>證劵訂單顯示成交 </p></td></tr>
<tr><td><p>T+2 日（18:00 之前） </p></td><td><p>劵商收到贖回款 </p></td><td></td><td></td></tr>
</tbody>
</table>

# 基金業務操作管理

## 基金管理

### 公募基金

<img src="/assets/ErYpbMF3GomuTOxqVVFcpX6Cneh.png" src-width="558" src-height="997"/>

#### 客戶訂單

執行菜單：基金管理&gt; 公募基金&gt;客戶訂單 Tab 頁籤

- 在本作業可以查詢到前台 APP 端的公募基金訂單紀錄，  可以看到基金訂單的申購/贖的狀態

<img src="/assets/TIZQbgayIo8DIRx4yLxcgj3dnOf.png" src-width="3228" src-height="1414" align="center"/>

注意：同時若租戶劵商本身也接入下游劵商（OB 模式） ，下游劵商可以先透過【同步訂單】操作下游劵商（OB）的基金訂單同步至上游劵商

#### 外部份額

執行菜單：基金管理&gt; 公募基金&gt;外部份額 Tab 頁籤

- 本作業可以統計在基金公司的外部份額數據

<img src="/assets/DE8Mb6d2joEucWxIrw7caytJnzb.png" src-width="3276" src-height="882" align="center"/>

#### 淨值表

執行菜單：基金管理&gt; 公募基金&gt;淨值表 Tab 頁籤

- 本作業可以查詢、添加、编辑基金的淨值數據

<img src="/assets/Er76bqu2OomiSCxWTvhccFw3nsm.png" src-width="3322" src-height="1662" align="center"/>

- 添加基金净值
    - 点击「新增」按钮
        <img src="/assets/LSE6bB8GcoQHoAx1vIfc1EEange.png" src-width="3284" src-height="1656" align="center"/>
    - 输入需要添加净值的基金，输入净值后，选择净值对应的日期
        <img src="/assets/VfVsb2AJjonWFlxpRbXcZNzAnWf.png" src-width="3320" src-height="1652" align="center"/>
        <div class="callout callout-bg-2 callout-border-2">
        <div class='callout-emoji'>💡</div>
        <p>注意：系統已改成透過行情數據源自動獲取公募基金的淨值表，如果行情数据源获取到的数据延迟，则支持手动添加净值的方式来确保基金清算交收。</p>
        </div>

- 编辑基金净值
    <div class="callout callout-bg-2 callout-border-2">
    <div class='callout-emoji'>💡</div>
    <ol>
    <li><p>更新完成后盈亏将重新计算，注意，只有修改最新的 30 条净值数据才会重新计算盈亏；</p>
    </li>
    <li><p>更新完成后，货币基金的七日年化、万元收益、基金表现（今年以来）自动更新；</p>
    </li>
    <li><p>更新完成后，基金清算的渠道单在完成核对确认后的不更新；</p>
    </li>
    </ol>
    </div>
    - 找到需要编辑净值的基金，点击编辑按钮
        <img src="/assets/H39ZbOp5XowTJpxSvOFc4vRxnbd.png" src-width="3332" src-height="1660" align="center"/>
    - 输入对应的基金净值，并点击「确定」
        <img src="/assets/PBQkbPgzmoQ6H7xpIikcQfzLnjg.png" src-width="3332" src-height="1756" align="center"/>
    - 完成净值修改后，如果开启编辑净值审批，则新的净值将在审批工单通过后生效；未开启编辑审批则编辑后立即生效；
        <img src="/assets/K7MkbbfZRoNkMBx9eabco5FtnGg.png" src-width="3314" src-height="1658" align="center"/>

#### 基金清算

執行菜單：基金管理&gt; 公募基金&gt;基金清算 Tab 頁籤

- 本作業可以進行基金後台的清算作業（包含數據確認/申購交收/贖回錢貨交收）

<img src="/assets/Cnf7bimPmo45XKxFSC4cyu2pnNd.png" src-width="3302" src-height="1658" align="center"/>

<b>清算操作流程：</b>

1. 選擇產生的基金管道訂單，選擇‘初始化’狀態後，中點擊【數據發送】，彈框資訊確認無誤後，點擊【確認】，此時訂單狀況會變成'發送成功'
    <img src="/assets/YR72bBQU1okV3GxsJxscObUrnsh.png" src-width="3278" src-height="1656" align="center"/>

2. 數據發送之後，选择“发送成功”的状态，等收到基金公司申購/贖回確認檔，這時在該基金記錄操作區，選擇「申购核对确认」、「赎回核对确认」，分别对「申购确认份额」和「赎回确认金额」进行填写和确认
    <img src="/assets/IyGdbgcQ0oBCFSxOWKtc9jzanbb.png" src-width="3304" src-height="1658" align="center"/>
    - 核对确认的弹窗中，需要分别选择清算交收使用的「基金净值」，并分别填写「申购确认份额」和「赎回确认金额」
        <div class="callout callout-bg-2 callout-border-2">
        <div class='callout-emoji'>💡</div>
        <ol>
        <li><p>「申购核对确认」、「赎回核对确认」分开进行核对确认，同时申购交割和赎回交割流程也支持分开进行。</p>
        </li>
        <li><p>如果所选「净值日期」无净值数据，需要前往净值表添加净值。申购份额和赎回金额的回填有自动校验机制，系统将根据申购提交金额、赎回提交份额和基金净值进行申购份额和赎回金额的计算，如果手动回填的数据与系统计算的数据差值在 0.5 时，点击『 确定 』将提示错误，需要重新填写。</p>
        </li>
        </ol>
        </div>
        <div class="flex gap-3 columns-2" column-size="2">
        <div class="w-[50%]" width-ratio="50">
                <img src="/assets/QPIrbndtUo8MqIxJhrecnQpRndg.png" src-width="1208" src-height="1678" align="center"/>
                </div>
        <div class="w-[49%]" width-ratio="49">
                <img src="/assets/JNuAbdeWjoSGGRxo937czpGPncb.png" src-width="1174" src-height="1646" align="center"/>
                </div>
        </div>

3. 若當天沒有訂單，自動核對確認，自動完成交收。
4. 选择“交收中”的状态，選中對應管道單進行申購交割，點擊確認之後沒有問題申購就完成了
    <img src="/assets/UC6QbHevboghzUxriyUc1jDMnSg.png" src-width="3280" src-height="1624" align="center"/>

5. 後續如果申購交割完成之後還有贖回，會彈出來贖回貨交割，點擊完贖回或交割後是贖回錢交割，點完整個流程就結束了；如果沒有贖回，申購交割完成之後整個流程就結束了
    <img src="/assets/JpJ5bUhaZoxgypxWV7hcVXsxnQd.png" src-width="3318" src-height="1648" align="center"/>
    <img src="/assets/PZxgbiXRRoTsnXxbDQ9c5gfEnNc.png" src-width="3304" src-height="1652" align="center"/>

#### 交易日曆

執行菜單：基金管理&gt; 公募基金&gt;交易日曆 Tab 頁籤

- 本作業可以查詢到公募基金商品的交易日曆，可以操作【作廢】與【回撤】

<img src="/assets/VEu9bNBzvoCEHJx7sXUcbqo0nnc.png" src-width="3258" src-height="1544" align="center"/>

### 公募基金管理

#### 基金管理

執行菜單：基金管理&gt;公募基金管理&gt;基金公司 Tab 頁籤

- 本作業維護一個公募基金的基金資料，配置基金主體和介紹，也可以管理基金的上架與顯示展示。

首先在基金紀錄右側操作區，可以操作【詳情】或【詳情】來查閱編輯基金資料，同時提供基金上架 與顯示管理
【上架】：是指將基金 納入系統交易。并調整时需要標的是上架状態      
【下架】：是指將基金 將無法在系統交易
【顯示】：是指基金可在 APP 端展示、搜索和交易 
【隱藏】：是指基金在 APP 端不展示、不可搜索

<img src="/assets/YsCmbcVQHogXjFx9iItcHFdinZb.png" src-width="3270" src-height="1578" align="center"/>

可以點選左上角【新建公募基金】，只需要輸入 ISIN 後，系統就會根據 ISIN 讀取外部數據源的所有該基金的相關基金數據資料，簡化基金數據的錄入，最後僅需要核對後就能 存檔入系統

<img src="/assets/WXGybiFD8oA8RixlSFbc9PHonXf.png" src-width="3294" src-height="1464" align="center"/>

<b>APP 端展示效果</b>：  （如果一個 公募基金是 '上架' 且 '顯示' 的 狀況下）

<img src="/assets/PaNSboCVRonRQGxtH9OcCiusnre.png" src-width="686" src-height="1482" align="center"/>

- 本作業也支持批量導入基金資料，點選右上角【批量導入】，可以根據事先提供模板來批量導入基金

<img src="/assets/ECt6baMFsoszsxxoUw9cbpVCnrg.png" src-width="3286" src-height="1360" align="center"/>

#### 基金渠道

執行菜單：基金管理&gt;公募基金管理&gt;基金渠道 Tab 頁籤

- 本作業管理基金平台商的相關資料 ，維護基金渠道，配置與基金渠道交付的時間點配置

<img src="/assets/JJT2biXbxo96blxDUUTchtVAnTf.png" src-width="3270" src-height="1528" align="center"/>

可以左上角【新建配置】來新增基金渠道，根據基金渠道輸入 獲取訂單時間與回填時間

<img src="/assets/YYlzbqSNwoWZduxFcreceLgPnjD.png" src-width="3300" src-height="1288" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>注意： </p>
<p>其中获取订单时间是日切时间，请根据实际的业务要求进行准确的填写。</p>
<p>其中自動回填就是通过 API 拉取第三方基金公司的确認净值/确認金额/确認份额等，若劵商租户没有走 API 的配置時，請任意填下时间即可。</p>
</div>

#### 基金公司

執行菜單：基金管理&gt;公募基金管理&gt;基金公司 Tab 頁籤

- 本作業可以維護基金公司相關資料

<img src="/assets/AzK1bCqwcoeqVExwgLrcjOTvnVh.png" src-width="3276" src-height="794" align="center"/>

可以點擊【新建】來新增基金一筆基金公司

<img src="/assets/WpjabgONio8tmpxMXQLc32exnmZ.png" src-width="3292" src-height="1634" align="center"/>

<b>APP 端展示效果</b>： （當新建 基金公司後）

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[48%]" width-ratio="48">
<img src="/assets/C8ZZbK431og5VZxHmX6caAQKnLh.png" src-width="830" src-height="1764" align="center"/>
</div>
<div class="w-[51%]" width-ratio="51">
<img src="/assets/H9lIbVUfSod0ycxFWqlc9PQNnQb.png" src-width="1242" src-height="2451"/>
</div>
</div>

#### 基金管理費

執行菜單：基金管理&gt;公募基金管理&gt;基金分組 Tab 頁籤

- 本作業可以查詢基金管理費用的設置

<img src="/assets/EaCzbUxqVoRg3kxt89pco0Vsnff.png" src-width="3280" src-height="1416" align="center"/>

### 私募基金

首先私募基金的業務系統操作流程如下（SOP） :

<img src="/assets/UmRWw1teMhFUQobBpZbcLFOVnAb-board.png"/>

#### 基金管理

執行菜單：基金管理&gt; 私募基金&gt;基金管理 Tab 頁籤

- 本作業可以維護一個私募基金的基金資料，也可以管理基金的上架展示與顯示管理
    【上架】：是指將基金 納入系統交易。并調整时需要標的是上架状態      
    【下架】：是指將基金 將無法在系統交易
    【顯示】：是指基金可在 APP 端展示、搜索和交易 
    【隱藏】：是指基金在 APP 端不展示、不可搜索

<img src="/assets/WSLKb9UCDoMevqxx7l6c92WEnff.png" src-width="3272" src-height="1570" align="center"/>

首先可以點選【新建】，分別填入私募基金 <b> 基本訊息/基本面/申購規則/贖回規則</b>

系統展示改成左側樹狀 Tab 配置页面，提高數據展示優化

<img src="/assets/TwOSbAU1moQ36xxIL7GcBSsYnrf.png" src-width="3190" src-height="1632" align="center"/>

<b>基本面：</b>

<img src="/assets/TzmLbCEogoV1z2xw3pEcRuTynge.png" src-width="2754" src-height="1532" align="center"/>

<b>申購規則</b>：

<img src="/assets/XVPbbuE1Ko0DH1xCv0jc3mgTntf.png" src-width="2296" src-height="1518" align="center"/>

<b>贖回規則：</b>

<img src="/assets/EJ58bw0YsoRAHBxSAwzcADPnn6G.png" src-width="2252" src-height="1532" align="center"/>

#### 淨值表

執行菜單：基金管理&gt; 私募基金&gt;淨值表 Tab 頁籤

- 在本作業可以維護所有的私募基金淨值資料

<img src="/assets/HOOGbg7Fyon2a1xZcpVc7hsinfg.png" src-width="3272" src-height="1418" align="center"/>

首先在右方左側【新增】操作，可以新增一筆 私募基金淨值紀錄

<img src="/assets/WEzcbmxP5ofKI3xNo3cc27KJnZf.png" src-width="3278" src-height="1406" align="center"/>

支持【编辑】基金净值
<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<ol>
<li><p>更新完成后盈亏将重新计算，注意，只有修改最新的 30 条净值数据才会重新计算盈亏；</p>
</li>
<li><p>更新完成后，基金清算的渠道单在完成核对确认后的不更新；</p>
</li>
</ol>
</div>
- 找到需要编辑净值的基金，点击编辑按钮
    <img src="/assets/WcKZbhReAoNhCqxZSIkcEY4AnmQ.png" src-width="3334" src-height="1656" align="center"/>
- 输入对应的基金净值，并点击「确定」
    <img src="/assets/JtOBbZduVolqsOxeXKxcVIEwnDg.png" src-width="3320" src-height="1656" align="center"/>
- 完成净值修改后，如果开启编辑净值审批，则新的净值将在审批工单通过后生效；未开启编辑审批则编辑后立即生效
    <img src="/assets/PGJmbIAQZoGIooxZ8N1cesXBnne.png" src-width="3314" src-height="1758" align="center"/>

#### 客戶訂單

執行菜單：基金管理&gt; 私募基金&gt;客戶訂單 Tab 頁籤

- 在本作業可以查詢到所有的私募基金訂單紀錄（包含前後台輸入），  可以看到基金訂單的申購/贖的狀態

  首先在上方右側【獲取訂單】操作，可以讀取到前台的私募基金訂單

<img src="/assets/I59vbXeuxo18KYxzJrDcCdADnoj.png" src-width="3278" src-height="376" align="center"/>

<img src="/assets/UjIEbfJ9kotXNfxpXejchZq2nxd.png" src-width="3248" src-height="1624" align="center"/>

<img src="/assets/UGw8bUhOzoXEP5x4KiGcCyNOnFd.png" src-width="3294" src-height="1726" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>注意：若後台下單後，在基金委托列表可以查詢對應交易訂單資訊，訂單資訊也會同步到 APP 客戶端展示，在未進行日切之前可以進行撤單</p>
</div>

#### 基金清算

執行菜單：基金管理&gt; 私募基金&gt;基金清算 Tab 頁籤 

- 本作業可以進行私募基金後台的清算作業（包含數據確認/申購交收/贖回錢貨交收）

A. <b>數據發送</b> 

選中對應基金記錄勾選，發送給基金公司，系統會判斷基金訂單狀態'初始化'才會進行數據發送

<img src="/assets/V17Rb0A1xodMOCxBW6Xc8S5dnve.png" src-width="3334" src-height="1707" align="center"/>

 B. <b>回填</b> 

 根據基金公司提供資料，更新基金對應淨值以及每個帳戶及總體申購份額、贖回金額及外部收費，進行回填

<img src="/assets/S6cbbiBOzoKXhlxeO5Mc2MNAnAc.png" src-width="3262" src-height="1494" align="center"/>

<img src="/assets/Qef2btbaPoWpS2xyHcFcyv2Bn5f.png" src-width="3272" src-height="1258" align="center"/>

 C.<b>私募交割</b> 

 選中對應基金管道單 ID 進行私募交割，完成貨和錢交割的操作

<img src="/assets/NUctbTQ0xoq01MxMNjLcm4oonwf.png" src-width="1280" src-height="194" align="center"/>

#### APP 端列表 

執行菜單：基金管理&gt; 私募基金&gt;APP 端列表 Tab 頁籤 

- 本作業可以維護在 APP 端有關於私募基金主體的排序展示順序

<img src="/assets/FgJMbkdBNo1Oz3xngIPcTtAknLe.png" src-width="3284" src-height="780" align="center"/>

可以在右側點選【新建】，新建一個私募基金的排序

<img src="/assets/WAaNbayikoasyvx6qprc0yKcn7f.png" src-width="3302" src-height="1100" align="center"/>

設置後，就會影響私募基金在手機端展示排序效果

<b>APP 端展示畫面如下：</b>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[47%]" width-ratio="47">
<img src="/assets/UI98bgHw5o92VSxF9tScFNJqnnx.png" src-width="1125" src-height="2436"/>
</div>
<div class="w-[52%]" width-ratio="52">
<img src="/assets/IJ4Nb7fb3oOMgsx9mgncy1oYnjg.png" src-width="1242" src-height="2451"/>
</div>
</div>

### APP 展示管理

#### 熱銷基金

執行菜單：基金管理&gt; APP 管理&gt;熱銷基金 Tab 頁籤

- 本作業維護在 APP 端熱銷基金主體的排序展示順序

<img src="/assets/H64abZPZ3o2Iewxi9jKccDEenPX.png" src-width="3270" src-height="878" align="center"/>

可以在右側點選【新建】一個基金熱銷的排序

<img src="/assets/N87DbkVVkohNdgxaHstcRL8onNd.png" src-width="3290" src-height="954" align="center"/>

熱銷基金模塊是基金後台可配的運營型基金展示功能，熱銷基金頁面進行配置後可以在 App 端展示，默認展示的收益週期是近 3 年收益率。

<b>APP 端 參考畫面</b>：

<img src="/assets/Z3kNbSC3woTLFTxTF8UcDybjnUb.png" src-width="958" src-height="1722" align="center"/>

#### 基金主題

執行菜單：基金管理&gt; APP 管理&gt;基金主體 Tab 頁籤

- 本作業可以維護基金主體的數據與文字顯示 ，基金主體是基金運營方根據日常運營需求配置不同類的基金主體和介紹，並配置對應的基金標的

<img src="/assets/QL04bhvgiobrbDxirICcHeV5nqf.png" src-width="3280" src-height="890" align="center"/>

可以在右側點選【創建主題】，根據基金公司提供資料輸入相關基金訊息，確認資料後 存檔提交

<img src="/assets/RU65btDIxofplSx7cZ4cHgnbnRf.png" src-width="2824" src-height="1332" align="center"/>

基金主题的排序权重越大，主题的在前端的顺序越靠前；基金主题内的基金列表中的排序越小，基金在前端的顺序越靠前。

<b>APP 端展示畫面如下：</b>

<img src="/assets/GPhMblDP3oJfH5xnzLwcNUCpnOe.png" src-width="686" src-height="1482" align="center"/>

#### 基金推薦（風險）

執行菜單：基金管理&gt; APP 管理&gt;基金推薦（風險）Tab 頁籤

- 本作業可以管理配置基金推薦的風險等級

<img src="/assets/Qs1pb4sc1oUzFzxdvincgmgKnBc.png" src-width="3234" src-height="1342" align="center"/>

可以在右側點選【新增】一個基金推薦的風險配置，有默認與 A1 到 A5 等級的風險

<img src="/assets/IwCubvkAAosno6xEbN3caInFnKy.png" src-width="3224" src-height="1594" align="center"/>

## OB 基金管理

當租戶劵商本身也接入同樣採用 Whale 的 BSS 證劵系統的 OB 劵商時，可以針對下游 OB 劵商的基金訂單作主動拉取與限額檢查

整體流程參考示意如下：

<img src="/assets/HgsdwddQ0hO2OGb37mQcdOMnnEf-board.png"/>

### 基金帳號管理

執行菜單：OB 基金管理&gt; 基金帳號管理

<img src="/assets/OkzSbq60So2NphxQSvfcL5eHnrf.png" src-width="3142" src-height="642" align="center"/>

- 本作業維護下游劵商所開立的 OB 帳戶信息，可以透過右上方【新增】來新增一筆 OB 帳戶資料

<img src="/assets/CBhrbv1gdojEDfxSqUxcNx8QnXc.png" src-width="3152" src-height="970" align="center"/>

### OB 上報訂單管理

執行菜單：OB 基金管理&gt; OB 上報訂單管理

- 本作業與前述客戶訂單作業功能差不多，但是以上游劵商管理下游劵商的角度來管理下游基金訂單

注意：是下手 OB 劵商先在其 Whale 基金系統操作【訂單同步】後，上手劵商才能看到基金訂單紀錄

<img src="/assets/ExITbpdZ3otNJlxiqttchKzFnKb.png" src-width="3144" src-height="1444" align="center"/>

對上游劵商而言：

1. 下手 OB 劵商提交的基金訂單初期僅是基金申購請求，要經過上手劵商的的審批操作才能成為真正的基金訂單轉出，其中訂單狀況如下：
    <b>待生成：同步後的初始狀態（</b>上游劵商 將下游 OB 劵商的 基金 同步過來的 初始狀態<b>）</b>
    <b>已駁回：駁回訂單後的狀態</b>
    <b>已生成：</b>
    <b>下手已撤單</b>

2. 生成上手劵商基金訂單前，需要對下手 OB 帳戶餘額進行檢測，檢測之後，才顯示租戶 OB 帳戶對應的【帳戶餘額】和【持倉份額】數據，提供上游劵商審批操作下手 OB 劵商申購贖回進行參考
    在紀錄右側操作區點選【餘額檢測】，系統會計算目前該 OB 帳戶的基金帳戶餘額與持倉份額

<img src="/assets/U9xXbAkG9ocuexxl6jGciCnFnTc.png" src-width="3230" src-height="1422" align="center"/>

## 基金下單（後台）

Whale 系統 提供 三種終端方式來交易基金，分別是 LongPort APP 端/WTT 端/WBO 後台，而本作業室是屬於基金後台基金下單作業，直接在 WBO 後台錄入一筆基金交易訂單（包含私募/公募基金）的申購或贖回交易

執行菜單：交易面板&gt;基金下單

<img src="/assets/AwxGbG7JBorvLPxkub2cJH43nde.png" src-width="3221" src-height="1458" align="center"/>

（申購/贖回）:錄入一筆後台基金訂單步驟如下：

- 輸入基本客戶帳號後，會展示客戶帳戶的購買力 

<img src="/assets/Qe4ybdtltoJldrxBrUCcFdjvn9c.png" src-width="1578" src-height="651" align="center"/>

- 接著輸入 相對應的基金渠道的訂單（申購），對應的基金渠道與基金產品，與申購金額，其中下單頁面填入申購手續費用后，當核準後會從用户的對應幣種现金里直接扣除
    注：系統會判斷 <b>申購手續费 + 申購金额 &gt;= 现金</b>
    <img src="/assets/NL2ybRVeWotjCAx1x8Kc0kPmnHf.png" src-width="3202" src-height="1716" align="center"/>

 或 相對應的基金渠道的訂單（贖回），對應的基金渠道與基金產品，與贖回份數

- 在基本資料檢查無誤後提交後，就會展示在下方到基金訂單區，同時可以在紀錄右側區操作撤單
    注：若基金后台開始獲取前台基金訂單的时候。此時後台基金錄入訂單就不可撤销。

<img src="/assets/DnINbiblXoRsmlxleodcUVXZnlb.png" src-width="3174" src-height="1692" align="center"/>

