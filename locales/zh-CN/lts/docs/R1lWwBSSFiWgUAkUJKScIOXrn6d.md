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

<b>重要时间点参考： </b>（以下会根据不同基金代理商有所不同）

<table>
<colgroup>
<col width="202"/>
<col width="269"/>
<col width="157"/>
<col width="192"/>
</colgroup>
<tbody>
<tr><td><p>时间 </p></td><td><p>操作内容 </p></td><td><p>操作人员 </p></td><td><p>备注 </p></td></tr>
<tr><td><p>T 日 12:00 cut-off </p></td><td><p>申购、赎回数据发送基金代理商 (例：高腾) （会由前台自动获取订单） </p></td><td><p>BO 后台人员</p></td><td><p>资产冻结、发送后不可撤单 </p></td></tr>
<tr><td><p>T 日 16:00 之前 </p></td><td><p>T 日订单发送申购赎回表至基金托管行 </p></td><td><p>BO 后台人员</p></td><td></td></tr>
<tr><td><p>T 日 18:00 之前 </p></td><td><p>申购款打到基金托管行 </p></td><td><p>财务 </p></td><td></td></tr>
<tr><td><p>T+1 日（21:00 点左右） </p></td><td><p>申购份额、赎回份额确认 </p></td><td></td><td><p>证劵订单显示成交 </p></td></tr>
<tr><td><p>T+2 日（18:00 之前） </p></td><td><p>劵商收到赎回款 </p></td><td></td><td></td></tr>
</tbody>
</table>

# 基金业务操作管理

## 基金管理

### 公募基金

<img src="/assets/ErYpbMF3GomuTOxqVVFcpX6Cneh.png" src-width="558" src-height="997"/>

#### 客户订单

执行菜单：基金管理&gt; 公募基金&gt;客户订单 Tab 页签

- 在本作业可以查询到前台 APP 端的公募基金订单纪录，  可以看到基金订单的申购/赎的状态

<img src="/assets/TIZQbgayIo8DIRx4yLxcgj3dnOf.png" src-width="3228" src-height="1414" align="center"/>

注意：同时若租户劵商本身也接入下游劵商（OB 模式） ，下游劵商可以先透过【同步订单】操作下游劵商（OB）的基金订单同步至上游劵商

#### 外部份额

执行菜单：基金管理&gt; 公募基金&gt;外部份额 Tab 页签

- 本作业可以统计在基金公司的外部份额数据

<img src="/assets/DE8Mb6d2joEucWxIrw7caytJnzb.png" src-width="3276" src-height="882" align="center"/>

#### 净值表

执行菜单：基金管理&gt; 公募基金&gt;净值表 Tab 页签

- 本作业可以查询、添加、编辑基金的净值数据

<img src="/assets/Er76bqu2OomiSCxWTvhccFw3nsm.png" src-width="3322" src-height="1662" align="center"/>

- 添加基金净值
    - 点击「新增」按钮
        <img src="/assets/LSE6bB8GcoQHoAx1vIfc1EEange.png" src-width="3284" src-height="1656" align="center"/>
    - 输入需要添加净值的基金，输入净值后，选择净值对应的日期
        <img src="/assets/VfVsb2AJjonWFlxpRbXcZNzAnWf.png" src-width="3320" src-height="1652" align="center"/>
        <div class="callout callout-bg-2 callout-border-2">
        <div class='callout-emoji'>💡</div>
        <p>注意：系统已改成透过行情数据源自动获取公募基金的净值表，如果行情数据源获取到的数据延迟，则支持手动添加净值的方式来确保基金清算交收。</p>
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

执行菜单：基金管理&gt; 公募基金&gt;基金清算 Tab 页签

- 本作业可以进行基金后台的清算作业（包含数据确认/申购交收/赎回钱货交收）

<img src="/assets/Cnf7bimPmo45XKxFSC4cyu2pnNd.png" src-width="3302" src-height="1658" align="center"/>

<b>清算操作流程：</b>

1. 选择产生的基金管道订单，选择‘初始化’状态后，中点击【数据发送】，弹框资讯确认无误后，点击【确认】，此时订单状况会变成'发送成功'
    <img src="/assets/YR72bBQU1okV3GxsJxscObUrnsh.png" src-width="3278" src-height="1656" align="center"/>

2. 数据发送之后，选择“发送成功”的状态，等收到基金公司申购/赎回确认档，这时在该基金记录操作区，选择「申购核对确认」、「赎回核对确认」，分别对「申购确认份额」和「赎回确认金额」进行填写和确认
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

3. 若当天没有订单，自动核对确认，自动完成交收。
4. 选择“交收中”的状态，选中对应管道单进行申购交割，点击确认之后没有问题申购就完成了
    <img src="/assets/UC6QbHevboghzUxriyUc1jDMnSg.png" src-width="3280" src-height="1624" align="center"/>

5. 后续如果申购交割完成之后还有赎回，会弹出来赎回货交割，点击完赎回或交割后是赎回钱交割，点完整个流程就结束了；如果没有赎回，申购交割完成之后整个流程就结束了
    <img src="/assets/JpJ5bUhaZoxgypxWV7hcVXsxnQd.png" src-width="3318" src-height="1648" align="center"/>
    <img src="/assets/PZxgbiXRRoTsnXxbDQ9c5gfEnNc.png" src-width="3304" src-height="1652" align="center"/>

#### 交易日历

执行菜单：基金管理&gt; 公募基金&gt;交易日历 Tab 页签

- 本作业可以查询到公募基金商品的交易日历，可以操作【作废】与【回撤】

<img src="/assets/VEu9bNBzvoCEHJx7sXUcbqo0nnc.png" src-width="3258" src-height="1544" align="center"/>

### 公募基金管理

#### 基金管理

执行菜单：基金管理&gt;公募基金管理&gt;基金公司 Tab 页签

- 本作业维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示。

首先在基金纪录右侧操作区，可以操作【详情】或【详情】来查阅编辑基金资料，同时提供基金上架 与显示管理
【上架】：是指将基金 纳入系统交易。并调整时需要标的是上架状态      
【下架】：是指将基金 将无法在系统交易
【显示】：是指基金可在 APP 端展示、搜索和交易 
【隐藏】：是指基金在 APP 端不展示、不可搜索

<img src="/assets/YsCmbcVQHogXjFx9iItcHFdinZb.png" src-width="3270" src-height="1578" align="center"/>

可以点选左上角【新建公募基金】，只需要输入 ISIN 后，系统就会根据 ISIN 读取外部数据源的所有该基金的相关基金数据资料，简化基金数据的录入，最后仅需要核对后就能 存档入系统

<img src="/assets/WXGybiFD8oA8RixlSFbc9PHonXf.png" src-width="3294" src-height="1464" align="center"/>

<b>APP 端展示效果</b>：  （如果一个 公募基金是 '上架' 且 '显示' 的 状况下）

<img src="/assets/PaNSboCVRonRQGxtH9OcCiusnre.png" src-width="686" src-height="1482" align="center"/>

- 本作业也支持批量导入基金资料，点选右上角【批量导入】，可以根据事先提供模板来批量导入基金

<img src="/assets/ECt6baMFsoszsxxoUw9cbpVCnrg.png" src-width="3286" src-height="1360" align="center"/>

#### 基金渠道

执行菜单：基金管理&gt;公募基金管理&gt;基金渠道 Tab 页签

- 本作业管理基金平台商的相关资料 ，维护基金渠道，配置与基金渠道交付的时间点配置

<img src="/assets/JJT2biXbxo96blxDUUTchtVAnTf.png" src-width="3270" src-height="1528" align="center"/>

可以左上角【新建配置】来新增基金渠道，根据基金渠道输入 获取订单时间与回填时间

<img src="/assets/YYlzbqSNwoWZduxFcreceLgPnjD.png" src-width="3300" src-height="1288" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>注意： </p>
<p>其中获取订单时间是日切时间，请根据实际的业务要求进行准确的填写。</p>
<p>其中自动回填就是通过 API 拉取第三方基金公司的确认净值/确认金额/确认份额等，若劵商租户没有走 API 的配置时，请任意填下时间即可。</p>
</div>

#### 基金公司

执行菜单：基金管理&gt;公募基金管理&gt;基金公司 Tab 页签

- 本作业可以维护基金公司相关资料

<img src="/assets/AzK1bCqwcoeqVExwgLrcjOTvnVh.png" src-width="3276" src-height="794" align="center"/>

可以点击【新建】来新增基金一笔基金公司

<img src="/assets/WpjabgONio8tmpxMXQLc32exnmZ.png" src-width="3292" src-height="1634" align="center"/>

<b>APP 端展示效果</b>： （当新建 基金公司后）

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[48%]" width-ratio="48">
<img src="/assets/C8ZZbK431og5VZxHmX6caAQKnLh.png" src-width="830" src-height="1764" align="center"/>
</div>
<div class="w-[51%]" width-ratio="51">
<img src="/assets/H9lIbVUfSod0ycxFWqlc9PQNnQb.png" src-width="1242" src-height="2451"/>
</div>
</div>

#### 基金管理费

执行菜单：基金管理&gt;公募基金管理&gt;基金分组 Tab 页签

- 本作业可以查询基金管理费用的设置

<img src="/assets/EaCzbUxqVoRg3kxt89pco0Vsnff.png" src-width="3280" src-height="1416" align="center"/>

### 私募基金

首先私募基金的业务系统操作流程如下（SOP） :

<img src="/assets/UmRWw1teMhFUQobBpZbcLFOVnAb-board.png"/>

#### 基金管理

执行菜单：基金管理&gt; 私募基金&gt;基金管理 Tab 页签

- 本作业可以维护一个私募基金的基金资料，也可以管理基金的上架展示与显示管理
    【上架】：是指将基金 纳入系统交易。并调整时需要标的是上架状态      
    【下架】：是指将基金 将无法在系统交易
    【显示】：是指基金可在 APP 端展示、搜索和交易 
    【隐藏】：是指基金在 APP 端不展示、不可搜索

<img src="/assets/WSLKb9UCDoMevqxx7l6c92WEnff.png" src-width="3272" src-height="1570" align="center"/>

首先可以点选【新建】，分别填入私募基金 <b> 基本讯息/基本面/申购规则/赎回规则</b>

系统展示改成左侧树状 Tab 配置页面，提高数据展示优化

<img src="/assets/TwOSbAU1moQ36xxIL7GcBSsYnrf.png" src-width="3190" src-height="1632" align="center"/>

<b>基本面：</b>

<img src="/assets/TzmLbCEogoV1z2xw3pEcRuTynge.png" src-width="2754" src-height="1532" align="center"/>

<b>申购规则</b>：

<img src="/assets/XVPbbuE1Ko0DH1xCv0jc3mgTntf.png" src-width="2296" src-height="1518" align="center"/>

<b>赎回规则：</b>

<img src="/assets/EJ58bw0YsoRAHBxSAwzcADPnn6G.png" src-width="2252" src-height="1532" align="center"/>

#### 净值表

执行菜单：基金管理&gt; 私募基金&gt;净值表 Tab 页签

- 在本作业可以维护所有的私募基金净值资料

<img src="/assets/HOOGbg7Fyon2a1xZcpVc7hsinfg.png" src-width="3272" src-height="1418" align="center"/>

首先在右方左侧【新增】操作，可以新增一笔 私募基金净值纪录

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

#### 客户订单

执行菜单：基金管理&gt; 私募基金&gt;客户订单 Tab 页签

- 在本作业可以查询到所有的私募基金订单纪录（包含前后台输入），  可以看到基金订单的申购/赎的状态

  首先在上方右侧【获取订单】操作，可以读取到前台的私募基金订单

<img src="/assets/I59vbXeuxo18KYxzJrDcCdADnoj.png" src-width="3278" src-height="376" align="center"/>

<img src="/assets/UjIEbfJ9kotXNfxpXejchZq2nxd.png" src-width="3248" src-height="1624" align="center"/>

<img src="/assets/UGw8bUhOzoXEP5x4KiGcCyNOnFd.png" src-width="3294" src-height="1726" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>注意：若后台下单后，在基金委托列表可以查询对应交易订单资讯，订单资讯也会同步到 APP 客户端展示，在未进行日切之前可以进行撤单</p>
</div>

#### 基金清算

执行菜单：基金管理&gt; 私募基金&gt;基金清算 Tab 页签 

- 本作业可以进行私募基金后台的清算作业（包含数据确认/申购交收/赎回钱货交收）

A. <b>数据发送</b> 

选中对应基金记录勾选，发送给基金公司，系统会判断基金订单状态'初始化'才会进行数据发送

<img src="/assets/V17Rb0A1xodMOCxBW6Xc8S5dnve.png" src-width="3334" src-height="1707" align="center"/>

 B. <b>回填</b> 

 根据基金公司提供资料，更新基金对应净值以及每个帐户及总体申购份额、赎回金额及外部收费，进行回填

<img src="/assets/S6cbbiBOzoKXhlxeO5Mc2MNAnAc.png" src-width="3262" src-height="1494" align="center"/>

<img src="/assets/Qef2btbaPoWpS2xyHcFcyv2Bn5f.png" src-width="3272" src-height="1258" align="center"/>

 C.<b>私募交割</b> 

 选中对应基金管道单 ID 进行私募交割，完成货和钱交割的操作

<img src="/assets/NUctbTQ0xoq01MxMNjLcm4oonwf.png" src-width="1280" src-height="194" align="center"/>

#### APP 端列表 

执行菜单：基金管理&gt; 私募基金&gt;APP 端列表 Tab 页签 

- 本作业可以维护在 APP 端有关于私募基金主体的排序展示顺序

<img src="/assets/FgJMbkdBNo1Oz3xngIPcTtAknLe.png" src-width="3284" src-height="780" align="center"/>

可以在右侧点选【新建】，新建一个私募基金的排序

<img src="/assets/WAaNbayikoasyvx6qprc0yKcn7f.png" src-width="3302" src-height="1100" align="center"/>

设置后，就会影响私募基金在手机端展示排序效果

<b>APP 端展示画面如下：</b>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[47%]" width-ratio="47">
<img src="/assets/UI98bgHw5o92VSxF9tScFNJqnnx.png" src-width="1125" src-height="2436"/>
</div>
<div class="w-[52%]" width-ratio="52">
<img src="/assets/IJ4Nb7fb3oOMgsx9mgncy1oYnjg.png" src-width="1242" src-height="2451"/>
</div>
</div>

### APP 展示管理

#### 热销基金

执行菜单：基金管理&gt; APP 管理&gt;热销基金 Tab 页签

- 本作业维护在 APP 端热销基金主体的排序展示顺序

<img src="/assets/H64abZPZ3o2Iewxi9jKccDEenPX.png" src-width="3270" src-height="878" align="center"/>

可以在右侧点选【新建】一个基金热销的排序

<img src="/assets/N87DbkVVkohNdgxaHstcRL8onNd.png" src-width="3290" src-height="954" align="center"/>

热销基金模块是基金后台可配的运营型基金展示功能，热销基金页面进行配置后可以在 App 端展示，默认展示的收益周期是近 3 年收益率。

<b>APP 端 参考画面</b>：

<img src="/assets/Z3kNbSC3woTLFTxTF8UcDybjnUb.png" src-width="958" src-height="1722" align="center"/>

#### 基金主题

执行菜单：基金管理&gt; APP 管理&gt;基金主体 Tab 页签

- 本作业可以维护基金主体的数据与文字显示 ，基金主体是基金运营方根据日常运营需求配置不同类的基金主体和介绍，并配置对应的基金标的

<img src="/assets/QL04bhvgiobrbDxirICcHeV5nqf.png" src-width="3280" src-height="890" align="center"/>

可以在右侧点选【创建主题】，根据基金公司提供资料输入相关基金讯息，确认资料后 存档提交

<img src="/assets/RU65btDIxofplSx7cZ4cHgnbnRf.png" src-width="2824" src-height="1332" align="center"/>

基金主题的排序权重越大，主题的在前端的顺序越靠前；基金主题内的基金列表中的排序越小，基金在前端的顺序越靠前。

<b>APP 端展示画面如下：</b>

<img src="/assets/GPhMblDP3oJfH5xnzLwcNUCpnOe.png" src-width="686" src-height="1482" align="center"/>

#### 基金推荐（风险）

执行菜单：基金管理&gt; APP 管理&gt;基金推荐（风险）Tab 页签

- 本作业可以管理配置基金推荐的风险等级

<img src="/assets/Qs1pb4sc1oUzFzxdvincgmgKnBc.png" src-width="3234" src-height="1342" align="center"/>

可以在右侧点选【新增】一个基金推荐的风险配置，有默认与 A1 到 A5 等级的风险

<img src="/assets/IwCubvkAAosno6xEbN3caInFnKy.png" src-width="3224" src-height="1594" align="center"/>

## OB 基金管理

当租户劵商本身也接入同样采用 Whale 的 BSS 证劵系统的 OB 劵商时，可以针对下游 OB 劵商的基金订单作主动拉取与限额检查

整体流程参考示意如下：

<img src="/assets/HgsdwddQ0hO2OGb37mQcdOMnnEf-board.png"/>

### 基金帐号管理

执行菜单：OB 基金管理&gt; 基金帐号管理

<img src="/assets/OkzSbq60So2NphxQSvfcL5eHnrf.png" src-width="3142" src-height="642" align="center"/>

- 本作业维护下游劵商所开立的 OB 帐户信息，可以透过右上方【新增】来新增一笔 OB 帐户资料

<img src="/assets/CBhrbv1gdojEDfxSqUxcNx8QnXc.png" src-width="3152" src-height="970" align="center"/>

### OB 上报订单管理

执行菜单：OB 基金管理&gt; OB 上报订单管理

- 本作业与前述客户订单作业功能差不多，但是以上游劵商管理下游劵商的角度来管理下游基金订单

注意：是下手 OB 劵商先在其 Whale 基金系统操作【订单同步】后，上手劵商才能看到基金订单纪录

<img src="/assets/ExITbpdZ3otNJlxiqttchKzFnKb.png" src-width="3144" src-height="1444" align="center"/>

对上游劵商而言：

1. 下手 OB 劵商提交的基金订单初期仅是基金申购请求，要经过上手劵商的的审批操作才能成为真正的基金订单转出，其中订单状况如下：
    <b>待生成：同步后的初始状态（</b>上游劵商 将下游 OB 劵商的 基金 同步过来的 初始状态<b>）</b>
    <b>已驳回：驳回订单后的状态</b>
    <b>已生成：</b>
    <b>下手已撤单</b>

2. 生成上手劵商基金订单前，需要对下手 OB 帐户余额进行检测，检测之后，才显示租户 OB 帐户对应的【帐户余额】和【持仓份额】数据，提供上游劵商审批操作下手 OB 劵商申购赎回进行参考
    在纪录右侧操作区点选【余额检测】，系统会计算目前该 OB 帐户的基金帐户余额与持仓份额

<img src="/assets/U9xXbAkG9ocuexxl6jGciCnFnTc.png" src-width="3230" src-height="1422" align="center"/>

## 基金下单（后台）

Whale 系统 提供 三种终端方式来交易基金，分别是 LongPort APP 端/WTT 端/WBO 后台，而本作业室是属于基金后台基金下单作业，直接在 WBO 后台录入一笔基金交易订单（包含私募/公募基金）的申购或赎回交易

执行菜单：交易面板&gt;基金下单

<img src="/assets/AwxGbG7JBorvLPxkub2cJH43nde.png" src-width="3221" src-height="1458" align="center"/>

（申购/赎回）:录入一笔后台基金订单步骤如下：

- 输入基本客户帐号后，会展示客户帐户的购买力 

<img src="/assets/Qe4ybdtltoJldrxBrUCcFdjvn9c.png" src-width="1578" src-height="651" align="center"/>

- 接著输入 相对应的基金渠道的订单（申购），对应的基金渠道与基金产品，与申购金额，其中下单页面填入申购手续费用后，当核准后会从用户的对应币种现金里直接扣除
    注：系统会判断 <b>申购手续费 + 申购金额 &gt;= 现金</b>
    <img src="/assets/NL2ybRVeWotjCAx1x8Kc0kPmnHf.png" src-width="3202" src-height="1716" align="center"/>

 或 相对应的基金渠道的订单（赎回），对应的基金渠道与基金产品，与赎回份数

- 在基本资料检查无误后提交后，就会展示在下方到基金订单区，同时可以在纪录右侧区操作撤单
    注：若基金后台开始获取前台基金订单的时候。此时后台基金录入订单就不可撤销。

<img src="/assets/DnINbiblXoRsmlxleodcUVXZnlb.png" src-width="3174" src-height="1692" align="center"/>

