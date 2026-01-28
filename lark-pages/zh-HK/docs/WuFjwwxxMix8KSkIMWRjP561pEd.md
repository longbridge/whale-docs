---
title: 快速上手
slug: UMWcwWJFkix9AdkVRp7cjzsunHf
sidebar_position: 1
---


# 快速上手

# 概述

Whale 基金管理系统全面支持券商维护基金库、配置App端基金展示、管理基金订单及交易结算等全流程的管理。

# 维护基金库

可以维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示。同时配置和管理基金渠道，查看基金管理费。

## <b>步骤一：创建基金渠道</b>

首先点击『 新建渠道 』，配置基金渠道，基金渠道指定了基金提交的上手、日切时间、基金申赎信息确认的回填时间以及时区；

<img src="/assets/O3uub0T1fonGqQxbRRVjQEXLpGc.png" src-width="3252" src-height="1708" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 - 基金公司渠道一定要遵循範例格式模式填寫，禁止填寫中文以及其他特殊符號；</p>
<ul>
<li><p>私募基金的基金公司渠道嚴格按照提示加前綴 private-；</p>
</li>
<li><p>其中自動回填就是通过 API 拉取第三方基金公司的确認净值/确認金额/确認份额等，若劵商租户没有走 API 的配置時，請任意填下时间即可；</p>
</li>
</ul>
</div>

## <b>步骤二：新建基金</b>

在基金管理中，根据新建基金的数量决定单个添加 / 批量导入。

<img src="/assets/WRYcbHHmwoePB6xhO2wjSyO2pob.png" src-width="3220" src-height="1714" align="center"/>

通过ISIN代码快速选择需要添加的基金，并选择已经配置的基金渠道。

<img src="/assets/SRCWbi1K6ofkfnxBDOijy8RGpSh.png" src-width="3232" src-height="1714" align="center"/>

新建基金后补充基金的基本信息、申购规则、赎回规则和适当性匹配规则。

<img src="/assets/GRpib3ydyov4WNxt7E3jHqqjpze.png" src-width="3248" src-height="1720" align="center"/>

# 配置基金展示

完成新建基金后，需要对基金的状态进行设置，同时在App的场景中配置基金的展示。

## <b>步骤一：配置基金显示和交易状态</b>

在基金管理列表中，将新建的基金设置为显示&上架状态，此时App中的基金排行中将显示该基金，同时基金支持交易。

```text
![image.png](/assets/cba0b356b108bde4399694e2e31f90a8.png)


    App客户端展示的位置在『 市场-基金-基金排行 』


![image.png](/assets/4f5606c1a3c15e4867ff3a6866243796.png)
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 - 隐藏状态的基金，App客户端无法搜索和查看基金；</p>
<ul>
<li>显示状态但是未上架的基金，App客户端可搜索和查看基金，但客户无法交易基金；</li>
</ul>
</div>

## <b>步骤二：配置基金运营场景</b>

在App展示管理中，配置基金展示的位置

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 基金管理 &gt; App展示管理</p>
</div>

<img src="/assets/VFsablSBGohhmfx86BQjNNxApde.png" src-width="3238" src-height="1756" align="center"/>

```text
App客户端展示位置如下
```

- 热销基金

<img src="/assets/WAygbTR9yoIJCtxKM1bjMyQKpjc.png" src-width="958" src-height="1722" align="center"/>

- 基金主题

<img src="/assets/F51xbzbHcoRDKFxjdu5jmkVwp4c.png" src-width="686" src-height="1482" align="center"/>

- 基金推荐

<img src="/assets/HHZSb9VO1o5WfMxlRCBjntjspZE.png" src-width="830" src-height="1756" align="center"/>

# 管理基金订单

客户在客户端申赎基金后，产生的基金订单将汇总展示在基金后台，支持后台人员查看

<img src="/assets/HZcxbDxGjok2prxae6AjtUvjpM2.png" src-width="1280" src-height="746" align="center"/>

当系统时间到达配置的「基金渠道」的「获取订单时间」，则对应渠道的基金订单将会汇总成一个渠道单，进入到基金清算环节。

# 基金清算交收

1. 選擇產生的基金管道訂單，選擇‘初始化’狀態後，中點擊【數據發送】，彈框資訊確認無誤後，點擊【確認】，此時訂單狀況會變成'發送成功'
    <img src="/assets/VjZWbMQ5LogD0Px3EeqjDJyDpxd.png" src-width="3278" src-height="1656" align="center"/>

2. 數據發送之後，选择“发送成功”的状态，等收到基金公司申購/贖回確認檔，這時在該基金記錄操作區，選擇「申购核对确认」、「赎回核对确认」，分别对「申购确认份额」和「赎回确认金额」进行填写和确认
    <img src="/assets/YQSibnizpogdczxbfl9jyrA4pLh.png" src-width="3304" src-height="1658" align="center"/>
    - 核对确认的弹窗中，需要分别选择清算交收使用的「基金净值」，并分别填写「申购确认份额」和「赎回确认金额」
        <div class="callout callout-bg-5 callout-border-5 callout-color-1">
        <div class='callout-emoji'>🎁</div>
        <p>💡 1. 「申购核对确认」、「赎回核对确认」分开进行核对确认，同时申购交割和赎回交割流程也支持分开进行。</p>
        <ol>
        <li>如果所选「净值日期」无净值数据，需要前往净值表添加净值。申购份额和赎回金额的回填有自动校验机制，系统将根据申购提交金额、赎回提交份额和基金净值进行申购份额和赎回金额的计算，如果手动回填的数据与系统计算的数据差值在0.5时，点击『 确定 』将提示错误，需要重新填写。</li>
        </ol>
        </div>

<img src="/assets/PrBHbVojTo3Qcoxgb0RjgTa4pFd.png" src-width="1208" src-height="1678" align="center"/>

<img src="/assets/XNo3bovZhoZ6MdxWIQrjf0e0pth.png" src-width="1174" src-height="1646" align="center"/>

1. 若當天沒有訂單，自動核對確認， 自動完成交收。
2. 选择“交收中”的状态，選中對應管道單進行申購交割，點擊確認之後沒有問題申購就完成了
    <img src="/assets/JXqMbpsWZoHEgFxzzg0jkGUmp1f.png" src-width="3280" src-height="1624" align="center"/>

3. 後續如果申購交割完成之後還有贖回，會彈出來贖回貨交割，點擊完贖回或交割後是贖回錢交割，點完整個流程就結束了；如果沒有贖回，申購交割完成之後整個流程就結束了
    <img src="/assets/HSxRb2q2yoRCmaxY7gFjFZp9pPh.png" src-width="3318" src-height="1648" align="center"/>
    <img src="/assets/TUBQb1ibWo500Zxc75kjvrcEpHf.png" src-width="3304" src-height="1652" align="center"/>

