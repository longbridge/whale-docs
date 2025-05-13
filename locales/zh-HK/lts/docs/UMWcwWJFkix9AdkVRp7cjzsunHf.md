---
title: 快速上手
slug: UMWcwWJFkix9AdkVRp7cjzsunHf
sidebar_position: 1
---


# 快速上手

## 概述

Whale 基金管理系统全面支持券商维护基金库、配置 App 端基金展示、管理基金订单及交易结算等全流程的管理。

## 维护基金库

可以维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示。同时配置和管理基金渠道，查看基金管理费。

### <b>步骤一：创建基金渠道</b>

首先点击『 新建渠道 』，配置基金渠道，基金渠道指定了基金提交的上手、日切时间、基金申赎信息确认的回填时间以及时区；

<img src="/assets/NcS0b7TvBoRj9fxDAg2crCxUnGd.png" src-width="3252" src-height="1708" align="center"/>

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<ul>
<li><p>基金公司渠道一定要遵循範例格式模式填寫，禁止填寫中文以及其他特殊符號；</p>
</li>
<li><p>私募基金的基金公司渠道嚴格按照提示加前綴 private-；</p>
</li>
<li><p>其中自動回填就是通过 API 拉取第三方基金公司的确認净值/确認金额/确認份额等，若劵商租户没有走 API 的配置時，請任意填下时间即可；</p>
</li>
</ul>
</div>

### <b>步骤二：新建基金</b>

在基金管理中，根据新建基金的数量决定单个添加 / 批量导入。

<img src="/assets/BkQ7biLKBopMHxxfvBac0bg1n1g.png" src-width="3220" src-height="1714" align="center"/>

通过 ISIN 代码快速选择需要添加的基金，并选择已经配置的基金渠道。

<img src="/assets/Bnitb3hUzoNhAyx91F0cUIjrn1e.png" src-width="3232" src-height="1714" align="center"/>

新建基金后补充基金的基本信息、申购规则、赎回规则和适当性匹配规则。

<img src="/assets/G9mabDRtfoNjyZxvBkEcn75vnIS.png" src-width="3248" src-height="1720" align="center"/>

## 配置基金展示

完成新建基金后，需要对基金的状态进行设置，同时在 App 的场景中配置基金的展示。

### <b>步骤一：配置基金显示和交易状态</b>

在基金管理列表中，将新建的基金设置为显示&上架状态，此时 App 中的基金排行中将显示该基金，同时基金支持交易。
<img src="/assets/IEWTbgafhoFICMxdLrOc6llTnPF.png" src-width="3234" src-height="1716" align="center"/>
App 客户端展示的位置在『 市场 - 基金 - 基金排行 』
<img src="/assets/WCmsbhUTfo1q52xlMAQc5dfGnYc.png" src-width="696" src-height="1206" align="center"/>

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<ul>
<li><p>隐藏状态的基金，App 客户端无法搜索和查看基金；</p>
</li>
<li><p>显示状态但是未上架的基金，App 客户端可搜索和查看基金，但客户无法交易基金；</p>
</li>
</ul>
</div>

### <b>步骤二：配置基金运营场景</b>

在 App 展示管理中，配置基金展示的位置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>基金管理 &gt; App 展示管理</p>
</div>

<img src="/assets/VBihbyFgwo6mfux5iAecDj0FnSf.png" src-width="3238" src-height="1756" align="center"/>

App 客户端展示位置如下
<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<ul>
<li>热销基金</li>
</ul>
<img src="/assets/EzpMbLSoio7Tkgxge1Bc4mKynih.png" src-width="958" src-height="1722" align="center"/>

</div>
<div class="w-[33%]" width-ratio="33">
<ul>
<li>基金主题</li>
</ul>
<img src="/assets/EfUabfsm9oO724xyIXpcXeP1n2g.png" src-width="686" src-height="1482" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<ul>
<li>基金推荐</li>
</ul>
<img src="/assets/QW2qbmLSAodGmHxUXdlcObbFnId.png" src-width="830" src-height="1756" align="center"/>

</div>
</div>

## 管理基金订单

客户在客户端申赎基金后，产生的基金订单将汇总展示在基金后台，支持后台人员查看

<img src="/assets/Nl7vbeNcToj2BmxX3dBczdGenvb.png" src-width="1280" src-height="746" align="center"/>

当系统时间到达配置的「基金渠道」的「获取订单时间」，则对应渠道的基金订单将会汇总成一个渠道单，进入到基金清算环节。

## 基金清算交收

1. 選擇產生的基金管道訂單，選擇‘初始化’狀態後，中點擊【數據發送】，彈框資訊確認無誤後，點擊【確認】，此時訂單狀況會變成'發送成功'
    <img src="/assets/FopHbLVDooBLBkxCqjEchMf6n2f.png" src-width="3278" src-height="1656" align="center"/>

2. 數據發送之後，选择“发送成功”的状态，等收到基金公司申購/贖回確認檔，這時在該基金記錄操作區，選擇「申购核对确认」、「赎回核对确认」，分别对「申购确认份额」和「赎回确认金额」进行填写和确认
    <img src="/assets/XZiHbO0Zio812SxfbhccOwqXnnf.png" src-width="3304" src-height="1658" align="center"/>
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
                <img src="/assets/AqFjbki7aoFFDfxXA5hc83pZnNb.png" src-width="1208" src-height="1678" align="center"/>
                </div>
        <div class="w-[49%]" width-ratio="49">
                <img src="/assets/TBhjbzuHFozbtJxTasjcyReHn6b.png" src-width="1174" src-height="1646" align="center"/>
                </div>
        </div>

3. 若當天沒有訂單，自動核對確認，自動完成交收。
4. 选择“交收中”的状态，選中對應管道單進行申購交割，點擊確認之後沒有問題申購就完成了
    <img src="/assets/LTUlbXZTqoaSggxYASIcVMFonwb.png" src-width="3280" src-height="1624" align="center"/>

5. 後續如果申購交割完成之後還有贖回，會彈出來贖回貨交割，點擊完贖回或交割後是贖回錢交割，點完整個流程就結束了；如果沒有贖回，申購交割完成之後整個流程就結束了
    <img src="/assets/IMt3bvoWDowPI2xT8ezcC6vxnhf.png" src-width="3318" src-height="1648" align="center"/>
    <img src="/assets/IbwybQFABo55SJxHWyYcc28EnOg.png" src-width="3304" src-height="1652" align="center"/>
    
