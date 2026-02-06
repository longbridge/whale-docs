---
title: 系统介绍
slug: R1lWwBSSFiWgUAkUJKScIOXrn6d
sidebar_position: 2
---


# 系统介绍

# 概述

Whale 基金管理系统全面支持券商维护基金库、配置App端基金展示、管理基金订单及交易结算等全流程的管理。

注意： 目前 Whale 基金业务仅支持基金认购资金募集成立后，基金申购与赎回的业务操作，募集期间的认购目前暂不支持

<b>基金交易流程</b>

<img src="/assets/WFzXb95aeomDe6xgKmQjEVF5pNw.png" src-width="1210" src-height="1716" align="center"/>

<b>重要时间点参考：</b> （以下会根据不同基金代理商有所不同）

# 基金业务操作管理

# 1. 基金管理

## 1.1 公募基金

透过前端 APP 的基金下单成功后，就会进入后台基金订单作业

  <b>APP 端参考画面：</b>

<img src="/assets/DmPVbjEL1osNPdxuyBGj6k3HpBc.png" src-width="558" src-height="997" align="center"/>

### 1.1.1 客户订单

执行菜单：基金管理&gt; 公募基金&gt;客户订单 Tab 页签

- 在本作业可以查询到前台 APP 端的公募基金订单纪录，  可以看到基金订单的申购/赎的状态

<img src="/assets/Nfe2bGTaIoMJBRxkNN2jMHhzpsh.png" src-width="3228" src-height="1414" align="center"/>

注意：同时若租户劵商本身也接入下游劵商（OB 模式） ，下游劵商可以先透过【同步订单】操作下游劵商（OB）的基金订单同步至上游劵商

### 1.1.2 外部份额

执行菜单：基金管理&gt; 公募基金&gt;外部份额 Tab 页签

- 本作业可以统计在基金公司的外部份额数据

<img src="/assets/MFnqbYZrzooE50xVBnsjr5Ffp8b.png" src-width="3276" src-height="882" align="center"/>

### 1.1.3 净值表

执行菜单：基金管理&gt; 公募基金&gt;净值表 Tab 页签

- 本作业可以查询、添加、编辑基金的净值数据

<img src="/assets/UbbhbboAzoxUEFxIFYejQ8DXpGb.png" src-width="3322" src-height="1662" align="center"/>

- 添加基金净值
    - 点击「新增」按钮
        <img src="/assets/HphybDvGrortGKxYRQBjgOUupNf.png" src-width="3284" src-height="1656" align="center"/>
    - 输入需要添加净值的基金，输入净值后，选择净值对应的日期
        <img src="/assets/IwwUbhFu8o4WcMxfo7Bj3EtOpHe.png" src-width="3320" src-height="1652" align="center"/>
        <div class="callout callout-bg-5 callout-border-5 callout-color-1">
        <div class='callout-emoji'>🎁</div>
        <p>💡 注意：系统已改成透过行情数据源自动获取公募基金的净值表，如果行情数据源获取到的数据延迟，则支持手动添加净值的方式来确保基金清算交收。</p>
        </div>

- 编辑基金净值
    <div class="callout callout-bg-5 callout-border-5 callout-color-1">
    <div class='callout-emoji'>🎁</div>
    <p>💡 1. 更新完成后盈亏将重新计算，注意，只有修改最新的30条净值数据才会重新计算盈亏；</p>
    <ol>
    <li><p>更新完成后，货币基金的七日年化、万元收益、基金表现（今年以来）自动更新；</p>
    </li>
    <li><p>更新完成后，基金清算的渠道单在完成核对确认后的不更新；</p>
    </li>
    </ol>
    </div>
    - 找到需要编辑净值的基金，点击编辑按钮
        <img src="/assets/FaGTbRY1zoIwcbxbCLRjbax7pjd.png" src-width="3332" src-height="1660" align="center"/>
    - 输入对应的基金净值，并点击「确定」
        <img src="/assets/IiO0bvPPsoeReLxDTKXjSDbPpvd.png" src-width="3332" src-height="1756" align="center"/>
    - 完成净值修改后，如果开启编辑净值审批，则新的净值将在审批工单通过后生效；未开启编辑审批则编辑后立即生效；
        <img src="/assets/M6f3bP5mhoxoCgxAMcujH2iqpde.png" src-width="3314" src-height="1658" align="center"/>

### 1.1.4 基金清算

执行菜单：基金管理&gt; 公募基金&gt;基金清算 Tab 页签

- 本作业可以进行基金后台的清算作业（包含数据确认/申购交收/赎回钱货交收）

<img src="/assets/QQ0ebcbJUo3J8jxIhHEjQyvXp9g.png" src-width="3302" src-height="1658" align="center"/>

<b>清算操作流程：</b>

1. 选择产生的基金管道订单，选择‘初始化’状态后，中点击【数据发送】，弹框资讯确认无误后，点击【确认】，此时订单状况会变成'发送成功'
    <img src="/assets/BW8hbTkuJoOMhhxnjxPjn4EepUh.png" src-width="3278" src-height="1656" align="center"/>

2. 数据发送之后，选择“发送成功”的状态，等收到基金公司申购/赎回确认档，这时在该基金记录操作区，选择「申购核对确认」、「赎回核对确认」，分别对「申购确认份额」和「赎回确认金额」进行填写和确认
    <img src="/assets/MysFbzmksoatL4x1cqLjFKRypFh.png" src-width="3304" src-height="1658" align="center"/>
    - 核对确认的弹窗中，需要分别选择清算交收使用的「基金净值」，并分别填写「申购确认份额」和「赎回确认金额」
        <div class="callout callout-bg-5 callout-border-5 callout-color-1">
        <div class='callout-emoji'>🎁</div>
        <p>💡 1. 「申购核对确认」、「赎回核对确认」分开进行核对确认，同时申购交割和赎回交割流程也支持分开进行。</p>
        <ol>
        <li>如果所选「净值日期」无净值数据，需要前往净值表添加净值。申购份额和赎回金额的回填有自动校验机制，系统将根据申购提交金额、赎回提交份额和基金净值进行申购份额和赎回金额的计算，如果手动回填的数据与系统计算的数据差值在0.5时，点击『 确定 』将提示错误，需要重新填写。</li>
        </ol>
        </div>

<img src="/assets/Idkabuikjodf1SxaEdTj0ztQp7f.png" src-width="1208" src-height="1678" align="center"/>

<img src="/assets/NcJiby36RozvlIxRRSSjvX2qpSc.png" src-width="1174" src-height="1646" align="center"/>

1. 若当天没有订单，自动核对确认， 自动完成交收。
2. 选择“交收中”的状态，选中对应管道单进行申购交割，点击确认之后没有问题申购就完成了
    <img src="/assets/KSswbzWpyokLIIxVnBlj8ZeMpXg.png" src-width="3280" src-height="1624" align="center"/>

3. 后续如果申购交割完成之后还有赎回，会弹出来赎回货交割，点击完赎回或交割后是赎回钱交割，点完整个流程就结束了；如果没有赎回，申购交割完成之后整个流程就结束了
    <img src="/assets/AMBgbVtkmo4BPNxRQu9jLdAhpRc.png" src-width="3318" src-height="1648" align="center"/>
    <img src="/assets/WGx5bXc9WoDYlTxKRRgjQ6Orpcd.png" src-width="3304" src-height="1652" align="center"/>

### 1.1.5 交易日历

执行菜单：基金管理&gt; 公募基金&gt;交易日历 Tab 页签

- 本作业可以查询到公募基金商品的交易日历，可以操作【作废】与【回撤】

<img src="/assets/MIKUb9YeGoWkzuxJNmEjatiRpYf.png" src-width="3258" src-height="1544" align="center"/>

## 1.2 公募基金管理

### 1.2.1 基金管理

执行菜单：基金管理&gt;公募基金管理&gt;基金公司 Tab 页签

- 本作业维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示 。

首先在基金纪录右侧操作区，可以操作【详情】或【详情】来查阅编辑基金资料，同时提供基金上架 与显示管理

```text
【上架】：是指将基金 纳入系统交易。并调整时需要标的是上架状态      


【下架】：是指将基金 将无法在系统交易


【显示】：是指基金可在 APP 端展示、搜索和交易 


【隐藏】：是指基金在 APP 端不展示、不可搜索
```

<img src="/assets/Yfzebsr14oimpMxb42KjTSzTpWb.png" src-width="3270" src-height="1578" align="center"/>

可以点选左上角【新建公募基金】， 只需要输入 ISIN 后，系统就会根据 ISIN 读取外部数据源的所有该基金的相关基金数据资料， 简化基金数据的录入， 最后仅需要核对后就能 存档入系统

<img src="/assets/EaldbQ4UAoDPYIxI41xjV6dopsg.png" src-width="3294" src-height="1464" align="center"/>

<b>APP 端展示效果</b>：  （如果一个 公募基金是 '上架' 且 '显示' 的 状况下）

<img src="/assets/CVfbb9OzXoJtHCxIETHj0m1Lpnh.png" src-width="686" src-height="1482" align="center"/>

- 本作业也支持批量导入基金资料，点选右上角【批量导入】，可以根据事先提供模板来批量导入基金

<img src="/assets/M8zyb2qG6ochfbxVDaXjLEBYpGc.png" src-width="3286" src-height="1360" align="center"/>

### 1.2.2 基金渠道

执行菜单：基金管理&gt;公募基金管理&gt;基金渠道 Tab 页签

- 本作业管理基金平台商的相关资料 ， 维护基金渠道，配置与基金渠道交付的时间点配置

<img src="/assets/QWR5bv9ZXohQipxXRB7jb22BpNg.png" src-width="3270" src-height="1528" align="center"/>

可以左上角【新建配置】来新增基金渠道，根据基金渠道输入 获取订单时间与回填时间

<img src="/assets/M7w6biwtiorA4hxdTGPjQ3q9pJh.png" src-width="3300" src-height="1288" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 注意：</p>
<p>其中获取订单时间是日切时间，请根据实际的业务要求进行准确的填写。</p>
<p>其中自动回填就是通过 API 拉取第三方基金公司的确认净值/确认金额/确认份额等，若劵商租户没有走 API 的配置时，请任意填下时间即可。</p>
</div>

### 1.2.3 基金公司

执行菜单：基金管理&gt;公募基金管理&gt;基金公司 Tab 页签

- 本作业可以维护基金公司相关资料

<img src="/assets/RdBKbDJfaog0lbxMtGNjutZEpIp.png" src-width="3276" src-height="794" align="center"/>

可以点击【新建】来新增基金一笔基金公司

<img src="/assets/FDvvbg1XloJKUExXbo9jOotWpJb.png" src-width="3292" src-height="1634" align="center"/>

<b>APP 端展示效果</b>： （当新建 基金公司后）

<img src="/assets/HVM0bNP0Aov2Bjx2ehnjRKehp4c.png" src-width="830" src-height="1764" align="center"/>

<img src="/assets/TutrbEyRLopiYgx6tcCjrqiapvg.png" src-width="1242" src-height="2451" align="center"/>

### 1.2.4 基金管理费

执行菜单：基金管理&gt;公募基金管理&gt;基金分组 Tab 页签

- 本作业可以查询基金管理费用的设置

<img src="/assets/LYnYbxVTvoMlAexNRsejWXmBp6g.png" src-width="3280" src-height="1416" align="center"/>

## 1.3 私募基金

首先私募基金的业务系统操作流程如下 （SOP） :

<img src="/assets/N50yb1uRFoPjE9xJFbzjFfVnpIg.png" src-width="1222" src-height="2080" align="center"/>

### 1.3.1 基金管理

执行菜单：基金管理&gt; 私募基金&gt;基金管理 Tab 页签

- 本作业可以维护一个私募基金的基金资料，也可以管理基金的上架展示与显示管理
    【上架】：是指将基金 纳入系统交易。并调整时需要标的是上架状态
    【下架】：是指将基金 将无法在系统交易
    【显示】：是指基金可在 APP 端展示、搜索和交易
    【隐藏】：是指基金在 APP 端不展示、不可搜索

<img src="/assets/L3ImbFEvAo7Q0UxTaCpjW5NOpjK.png" src-width="3272" src-height="1570" align="center"/>

首先可以点选【新建】，分别填入私募基金  <b>基本讯息/基本面/申购规则/赎回规则</b>

系统展示改成左侧树状 Tab 配置页面，提高数据展示优化

<img src="/assets/LboybucuRoYjyoxI43djaI8Pppf.png" src-width="3190" src-height="1632" align="center"/>

<b>基本面：</b>

<img src="/assets/TZKXbWMn5oOzbqxO6xBj7yxWpLh.png" src-width="2754" src-height="1532" align="center"/>

<b>申购规则</b>：

<img src="/assets/WQt9bclRRowDPixXEKqjoeWWpGb.png" src-width="2296" src-height="1518" align="center"/>

<b>赎回规则：</b>

<img src="/assets/FykUbwkTvoCvOXxEhwkj0n8mpsb.png" src-width="2252" src-height="1532" align="center"/>

### 1.3.2 净值表

执行菜单：基金管理&gt; 私募基金&gt;净值表 Tab 页签

- 在本作业可以维护所有的私募基金净值资料

<img src="/assets/WbmZbZUyTowflmx5VVija5xepKf.png" src-width="3272" src-height="1418" align="center"/>

首先在右方左侧【新增】操作，可以新增一笔 私募基金净值纪录

<img src="/assets/UEpGbeHsLoJZ8Mx561DjJu67pPf.png" src-width="3278" src-height="1406" align="center"/>

支持【编辑】基金净值

1. 更新完成后盈亏将重新计算，注意，只有修改最新的30条净值数据才会重新计算盈亏；
2. 更新完成后，基金清算的渠道单在完成核对确认后的不更新；

- 找到需要编辑净值的基金，点击编辑按钮

<img src="/assets/O2adbonIGoYYhTx4Mx6jRaHppEd.png" src-width="3334" src-height="1656" align="center"/>

- 输入对应的基金净值，并点击「确定」

<img src="/assets/Xv1Ibac2LoB3pcxnYdmjwveXpge.png" src-width="3320" src-height="1656" align="center"/>

- 完成净值修改后，如果开启编辑净值审批，则新的净值将在审批工单通过后生效；未开启编辑审批则编辑后立即生效
    <img src="/assets/ZHGcbEi3KoMZfXxJw22jyS3CppZ.png" src-width="3314" src-height="1758" align="center"/>

### 1.3.3 客户订单

执行菜单：基金管理&gt; 私募基金&gt;客户订单 Tab 页签

- 在本作业可以查询到所有的私募基金订单纪录（包含前后台输入），  可以看到基金订单的申购/赎的状态
    首先在上方右侧【获取订单】操作，可以读取到前台的私募基金订单

<img src="/assets/NXF5bemmGoxjFlxyNc0jDfylp0f.png" src-width="3278" src-height="376" align="center"/>

<img src="/assets/B162bf0rdoQbO4xL6LTjadKepbb.png" src-width="3248" src-height="1624" align="center"/>

<img src="/assets/UwaPbXi0Ooarx8xI26Ej69xupO9.png" src-width="3294" src-height="1726" align="center"/>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 注意：若后台下单后，在基金委托列表可以查询对应交易订单资讯，订单资讯也会同步到 APP 客户端展示，在未进行日切之前可以进行撤单</p>
</div>

### 1.3.4 基金清算

执行菜单：基金管理&gt; 私募基金&gt;基金清算 Tab 页签

- 本作业可以进行私募基金后台的清算作业（包含数据确认/申购交收/赎回钱货交收）

A. <b>数据发送</b>

选中对应基金记录勾选 ，发送给基金公司，系统会判断基金订单状态'初始化'才会进行数据发送

<img src="/assets/N7A9bnPdBoAj14x7YZIjflSSpZN.png" src-width="3334" src-height="1707" align="center"/>

B. <b>回填</b>

根据基金公司提供资料，更新基金对应净值以及每个帐户及总体申购份额、赎回金额及外部收费，进行回填

<img src="/assets/JpHWbf0upoplDLxb0HdjCGrepng.png" src-width="3262" src-height="1494" align="center"/>

<img src="/assets/RhAPbeElooBlhuxTxFwj35T3pkN.png" src-width="3272" src-height="1258" align="center"/>

C.<b>私募交割</b>

选中对应基金管道单 ID 进行私募交割，完成货和钱交割的操作

<img src="/assets/GMMgbt5mao6RV2x57lijhKpep0d.png" src-width="1280" src-height="194" align="center"/>

### 1.3.5 APP 端列表

执行菜单：基金管理&gt; 私募基金&gt;APP 端列表 Tab 页签

- 本作业可以维护在 APP 端有关于私募基金主体的排序展示顺序

<img src="/assets/IvsxbliLBoxtm8xEqybjwYgwpBc.png" src-width="3284" src-height="780" align="center"/>

可以在右侧点选【 新建】，新建一个私募基金的排序

<img src="/assets/GoPQb5vCloBCwCx8K5jj4XfqpJe.png" src-width="3302" src-height="1100" align="center"/>

设置后，就会影响私募基金在手机端展示排序效果

<b>APP 端展示画面如下：</b>

<img src="/assets/OKOQb70VYoNA4kxOjakjW18tpvg.png" src-width="1125" src-height="2436" align="center"/>

<img src="/assets/Nen8bT9W1oUflvxZeZvjPEOUpre.png" src-width="1242" src-height="2451" align="center"/>

## 1.6 APP 展示管理

### 1.6.1 热销基金

执行菜单：基金管理&gt; APP 管理&gt;热销基金 Tab 页签

- 本作业维护在 APP 端热销基金主体的排序展示顺序

<img src="/assets/XK7ebVxnRouAexxEYrUjF5HtpFh.png" src-width="3270" src-height="878" align="center"/>

可以在右侧点选【 新建】一个基金热销的排序

<img src="/assets/Xfxhb6saXooZGrx34m8j2kP9pPf.png" src-width="3290" src-height="954" align="center"/>

热销基金模块是基金后台可配的运营型基金展示功能，热销基金页面进行配置后可以在 App 端展示，默认展示的收益周期是近 3 年收益率。

<b>APP 端 参考画面</b>：

<img src="/assets/ULHtbkykooyEa7xGvCfj2OvJp0d.png" src-width="958" src-height="1722" align="center"/>

### 1.6.2 基金主题

执行菜单：基金管理&gt; APP 管理&gt;基金主体 Tab 页签

- 本作业可以维护基金主体的数据与文字显示 ，基金主体是基金运营方根据日常运营需求配置不同类的基金主体和介绍，并配置对应的基金标的

<img src="/assets/Wqmvb3TD2or2FFx5bIfj0XVTpEg.png" src-width="3280" src-height="890" align="center"/>

可以在右侧点选【创建主题】，根据基金公司提供资料输入相关基金讯息，确认资料后 存档提交

<img src="/assets/XxsPbEqEuoJlOVxI3qcj6c1opev.png" src-width="2824" src-height="1332" align="center"/>

基金主题的排序权重越大，主题的在前端的顺序越靠前；基金主题内的基金列表中的排序越小，基金在前端的顺序越靠前。

<b>APP 端展示画面如下：</b>

<img src="/assets/MlhdbiZCDon13GxpizQjwKuipGc.png" src-width="686" src-height="1482" align="center"/>

### 1.6.3 基金推荐（风险）

执行菜单：基金管理&gt; APP 管理&gt;基金推荐（风险） Tab 页签

- 本作业可以管理配置基金推荐的风险等级

<img src="/assets/JyrRbxOmIoTqLFxFXoMjZGpPp9e.png" src-width="3234" src-height="1342" align="center"/>

可以在右侧点选【新增】一个基金推荐的风险配置，有默认与 A1 到 A5 等级的风险

<img src="/assets/ADmlbSdJ5opJQAxwBKyjbl9vpvb.png" src-width="3224" src-height="1594" align="center"/>

# 2. OB 基金管理

当租户劵商本身也接入同样采用 Whale 的 BSS 证劵系统的 OB 劵商时，可以针对下游 OB 劵商的基金订单作主动拉取与限额检查

整体流程参考示意如下：

<img src="/assets/D0lwb3pLqouCsqxnXYFjVMrZpKh.png" src-width="1354" src-height="636" align="center"/>

## 2.1 基金帐号管理

执行菜单：OB 基金管理&gt; 基金帐号管理

<img src="/assets/TMVRbdH7FouRWpxO2oSjXQ98p0c.png" src-width="3142" src-height="642" align="center"/>

- 本作业维护下游劵商所开立的 OB 帐户信息，可以透过右上方【新增】来新增一笔 OB 帐户资料

<img src="/assets/Bf9ubGNVPoS63jxsYwDj0TirpsV.png" src-width="3152" src-height="970" align="center"/>

## 2.2 OB 上报订单管理

执行菜单：OB 基金管理&gt; OB 上报订单管理

- 本作业与前述客户订单作业功能差不多，但是以上游劵商管理下游劵商的角度来管理下游基金订单

注意： 是下手 OB 劵商先在其 Whale 基金系统操作 【订单同步】后，上手劵商才能看到基金订单纪录

<img src="/assets/NSHubYfIqoSz7nxCllOjPEgxpmh.png" src-width="3144" src-height="1444" align="center"/>

对上游劵商而言：

1. 下手 OB 劵商提交的基金订单初期仅是基金申购请求，要经过上手劵商的的审批操作才能成为真正的基金订单转出，其中订单状况如下：
    <b>待生成：同步后的初始状态 （</b><b>上游劵商 将下游 OB 劵商的 基金 同步过来的 初始状态</b><b>）</b>
    <b>已驳回：   驳回订单后的状态</b>
    <b>已生成：</b>
    <b>下手已撤单</b>

2. 生成上手劵商基金订单前，需要对下手 OB 帐户余额进行检测，检测之后，才显示租户 OB 帐户对应的【帐户余额】和【持仓份额】数据，提供上游劵商审批操作下手 OB 劵商申购赎回进行参考
    在纪录右侧操作区点选【余额检测】，系统会计算目前该 OB 帐户的基金帐户余额与持仓份额

<img src="/assets/Ckoxbtl0Zo0EqIx3jkXjNETWpxf.png" src-width="3230" src-height="1422" align="center"/>

# 3. 基金下单（后台）

Whale 系统 提供 三种终端方式来交易基金，分别是 LongPort APP 端/WTT 端/WBO 后台，而本作业室是属于基金后台基金下单作业，直接在 WBO 后台录入一笔基金交易订单（包含私募/公募基金）的申购或赎回交易

执行菜单：交易面板&gt;基金下单

<img src="/assets/KfCebmJqyoL9HbxvhF6jVaQNpBe.png" src-width="3221" src-height="1458" align="center"/>

（申购/赎回）:录入一笔后台基金订单步骤如下：

- 输入基本客户帐号后，会展示客户帐户的购买力

<img src="/assets/CatDb8ewYoBinJxDVQ9jZpy1pSc.png" src-width="1578" src-height="651" align="center"/>

- 接著输入 相对应的基金渠道的订单（申购），对应的基金渠道与基金产品，与申购金额，其中下单页面填入申购手续费用后，当核准后会从用户的对应币种现金里直接扣除
    注：  系统会判断 <b>申购手续费+申购金额 &gt;= 现金</b>
    <img src="/assets/HYhKbpnMaoKie4xlMOojFsE1pSf.png" src-width="3202" src-height="1716" align="center"/>

或 相对应的基金渠道的订单（赎回），对应的基金渠道与基金产品，与赎回份数

- 在基本资料检查无误后提交后，就会展示在下方到基金订单区，同时可以在纪录右侧区操作撤单
    注：若基金后台开始获取前台基金订单的时候。此时后台基金录入订单就不可撤销。

<img src="/assets/AJ2lbS8DaopRKExa2ObjVRyxpmg.png" src-width="3174" src-height="1692" align="center"/>

