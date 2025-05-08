---
title: 系统介绍
slug: KSAHw715uivJOckDIjhcL8avnZf
sidebar_position: 5
---


# 系统介绍

# 一、系统介绍

<b>基本架构</b>

根据客户是否参与公司行动，可将公司行动分为强制类和自愿类（可选择）。强制类公司行动，客户无需采取任何操作即可参与的行动，例如普通分红。自愿类公司行动，客户需要采取一定的操作才能参与的行动，例如供股、选股选息。两种类型公司行动的流程略有差异

在公司行动处理过程中，还会和清算服务、消息中心、资产服务产生互动

<img src="/assets/FFVLw4DV6hN52tb38CscOQDjnhg-board.png" src-width="799" src-height="519"/>

<b>操作流程</b>

1. 预告和方案的创建
    - 券商操作：非 HK 市场，需要根据上手数据，人工创建预告和方案信息
    - 系统功能：直联港交所的券商，可利用导入的 05 文件自动创建 HK 市场的预告和方案信息

2. 登记
    - 券商操作：需要核对系统的持仓是否和上手的一致
    - 系统功能：将根据清算服务或者资产服务的数据，生成含权益信息和费用信息的客户明细

3. 客户行权
    - 自愿类公司行动流程之一，该步骤的时间一般比较长
    - 券商操作：需要在此阶段通知客户，收集客户的行权指令并在系统内做登记
    - 系统功能：可自动通知客户，并在 App 和证券后台提供行权操作入口

4. 上报
    - 自愿类公司行动流程之一
    - 券商操作：需要汇总客户的行权指令，并在截止日前向上手进行申报
    - 系统功能：针对供股、要约进行提前的资产处置

5. 执行：
    - 券商操作：核对上手的执行信息，并进行尾差调整
    - 系统功能：进行资产处置

已支持的的公司行动类型

TM（结构性产品的接管（强制）/自动练习）

BE（福利权利）
  CA（公司行动）

DS（已除名、过期、失效）

OO（公开发售）

EO（超额公开要约）

RS（权利认购）

ER（超额认购权）

TU（无条件接管）

TC（接管（有条件））

ADR（ADR 费用）

SO（剥离）

IP（利息支付）

       VT（股东大会）

# 二、系统设定

## 初始化参数配置

暂不支持页面配置，可联系客户服务调整配置

<table>
<colgroup>
<col width="258"/>
<col width="138"/>
<col width="324"/>
</colgroup>
<tbody>
<tr><td><p>参数名</p></td><td><p>参数初始值</p></td><td><p>适用范围</p></td></tr>
<tr><td><p>BE 默认支付日期+N 交易日</p></td><td><p>+1 交易日</p></td><td><p>BE 类</p></td></tr>
<tr><td><p>IP 默认支付日期+N 交易日</p></td><td><p>+1 交易日</p></td><td><p>IP 类</p></td></tr>
<tr><td><p>TM 默认支付日期+N 交易日</p></td><td><p>+1 交易日 1</p></td><td><p>TM 类</p></td></tr>
<tr><td><p>默认派发 NOMINEE</p></td><td><p>+1 交易日</p></td><td><p>1：街道<br/>0：提名<br/>全部类型</p></td></tr>
<tr><td><p>选择结束时间点（香港时间）</p></td><td><p>16:00</p></td><td><p>BE（可选择）TU TCOOEORSER</p></td></tr>
<tr><td><p>选择结束日期 - N 交易日</p></td><td><p>2</p></td><td><p>BE（可选择）TU TCOOEORSER</p></td></tr>
<tr><td><p>零股处理</p></td><td><p>开启</p></td><td><p>BE 类选股选息（其中一个方案是 BE-SCRIP DIVIDEND，且有同币种的 BE-CaSH DIVIDEND）</p></td></tr>
</tbody>
</table>

## 收费配置

<b>路径</b>

公司行动 &gt;费用管理

<b>普通收费设置</b>

可以维护管理公司行动的全局相关费用收取配置（方案类型 - 费用类型）

<img src="/assets/ZU0kbo6G6odcUwxM0Ppc9Gy3nmf.png" src-width="3344" src-height="1558" align="center"/>

也可以在记录右侧区点击【编辑】，来修改所对应的公司行动费用配置，可以在左上方点击【新建】，来增加一笔费用配置
<img src="/assets/ICiUb4V8jovwRvxXqzscDd4yn4c.png" src-width="3192" src-height="1842" align="center"/>
- 方案类型：匹配条件之一，匹配的主要条件
- 市场：匹配条件之一，只能选择
- 费用类型：计算规则之一，只能选择
- 子仓编号：匹配条件之一，配置 TAX 费用的时候，需要使用，不同地区（大帐户），可使用不同费率
- 计费方式、计算方式：搭配使用
    - 登记持仓（每手）+ 比例收费：每手收 N 元 
    - 预告 + 固定数额：每次公司行动收 N 元 
    - 权益金额 + 比例收费：分红金额*5%
- 截取方式：控制小数位数的截取方式，按照 2 位截取
-  收费优先级、费用特殊限制配合使用，比较费用和分红（分股分红的分股也统计在分红内）的关系
    - 无限制：独立进行费用计算
    - 单项费用不超过权益：该项费用的费用金额和分红进行比较，费用大于分红的，按照分红金额收费
    - 优先级前费用不超过权：按照优先级进行费用计算，优先级前的费用（含自身）大于分红的，按照分红金额=优先级前费用收

<b>过户费设置</b>
公司行动过户费只需要配置一条
新增过户费设置：可进行单独收费，也可进行联合收费
- 单独收费：和 Handling Fee 独立，推荐此种配置
- 联合收费：和 Handling 联合收费，收取 Handling 时，自动抵扣过户费部分

<img src="/assets/SlMVbyh2ooJcarx6dUUcvA6bnmc.png" src-width="3348" src-height="992" align="center"/>

<img src="/assets/XdlibTlSnotHfHxWJqQc5UEsnTT.png" src-width="3376" src-height="1254" align="center"/>

# 三、版面区域说明

## 列表页摘要

在进公司行动预告纪录查询明细画面，版面如下：中间区域 展示‘推进状态’与‘指令收集状态‘，方便快速定位

<img src="/assets/O5hTbgDxQogcVGxHGVpcDBYmnMd.png" src-width="3186" src-height="1520" align="center"/>

右边纪录区展示该公司行动可操作的功能键（减少误操作，方便单一公司行动处理）

<img src="/assets/Uks7bOViLoLA4IxJ4EEcsIUenCd.png" src-width="3184" src-height="1512" align="center"/>

由于公司行动类型众多，业务节点不尽相同，系统也针对公司行动类型提供操作顺序顺序的文案（操作引导）

<img src="/assets/XqF5bpr3aojBKXxo1PUcTbZnn8g.png" src-width="2664" src-height="956" align="center"/>

在列表列也展示备注文案提示

<img src="/assets/UWmpbbV9SoCx04xqhPocih3Cnzj.png" src-width="3560" src-height="1528" align="center"/>

批量操作功能，系统会状态判断，提供可操作功能键

<img src="/assets/O4rtblSaMoCDY4xAS9jcRciYn8c.png" src-width="3324" src-height="1598" align="center"/>

提供 02 文件的互动，实时更新公司行动最新状态

<img src="/assets/KzkRbO0Njo0OgZxCnkWcJpA3nGd.png" src-width="3334" src-height="1478" align="center"/>

<img src="/assets/LhtObdJwFoIkI1xNHc4cxGIHnmg.png" src-width="3358" src-height="1002" align="center"/>

## 详情页面 

点选进入详情页面，分成几块 资讯区域如下 

<b>公司行动主体与 </b>

公司行动类型图标 与推进状况

<img src="/assets/VBEnbGuRiogmPNxpIAgcz3P3nuc.png" src-width="2388" src-height="292" align="center"/>

<b>公司行动预告讯息资料</b>

纪录该公司行动预告的重要栏位讯息（预告类型/标的/执行方式/登记日/派发日.._) 

<img src="/assets/QxPybuZo9oVzV0xbIdGcSj5RnSg.png" src-width="2762" src-height="1033" align="center"/>

<b>方案信息与费用规则</b> 

这边记录对应的预告方案纪录与费用规则，一个公司行动如果有单独的规则，可以在费用规则维护

<img src="/assets/K1etb2bX5oWIAbxwLgSc683intS.png" src-width="2682" src-height="1138" align="center"/>

<b>明细汇总与客户明细</b>： 

这边记录 所登记的客户汇总资料与客户明细

<img src="/assets/JnXbboTa0ocqAxxpL0Wc7H8QnMd.png" src-width="2674" src-height="1182" align="center"/>

<b> 同时在详情页，基本上提供所有可供操作的功能键入口</b>
- 在详情页可以直接增、删、改客户派发计算的权益
- 在详情页 - 客户详情可以进一步操作线下行权、更改权益和费用

<img src="/assets/A4kWbqMLGoj3jtx9yGgcX5yenhc.png" src-width="2504" src-height="1634" align="center"/>

<img src="/assets/V9wRbNuTIomp44xqwKfcCc3SnyX.png" src-width="2380" src-height="814" align="center"/>

<img src="/assets/T6o3b50SuobfTwxuBB6c2QP4nUf.png" src-width="2370" src-height="1046" align="center"/>

## 备注栏位说明

因为公司行动预告执行时，会涉及资产与费用的变更，因此系统 也会自动产生 通用的资产流水相关备注说明

<b>方案备注（预告备注）</b>
HK 市场自动处理，其它市场手填
TM、BE、IP 类：股票编号 + 市场 + 名称 + 逗号+CCASS 备注

<img src="/assets/RNC2bFt1do4R6dx0LhIczkZ6nMh.png" src-width="3548" src-height="1806" align="center"/>

<b>权益备注</b>
- 方案备注 + 逗号 + 持仓

<img src="/assets/LW9lb6V7xomcY1xZzWPc1tkZnuf.png" src-width="3548" src-height="1806" align="center"/>

<b>费用备注</b>
格式（非 TAX_FEE）：费用名称英文 + 股票编号 + 市场 + 股票名称
CROSSTEC03893.HK 手续费

<img src="/assets/O3DjbR3LeoYj9NxxG9GcyOOznAd.png" src-width="3548" src-height="1806" align="center"/>

<b>费用备注格式（TAX_FEE</b>）

预告（或方案备注）+ "- Withholding TAX"

例：TROW（US74144T1088）现金股息 USD 每股 1.22（普通股息）- 预扣税

# 三、常规功能

路径：公司行动 - 公司行动

## 初始化

选择状态：初始化，就可以查询到近期刚导入的公司行动预告

初始化状态是公司行动预告的起始点，也可以操作【终止】

<img src="/assets/OD0bbUCguorKdQxHCbycPsEZnjb.png" src-width="3172" src-height="1835" align="center"/>

可以点击【详情】检查对应的公司行动预告资料与方案信息，同时系统会产生默认方案

<img src="/assets/P0a5bgajwo4xRUxMKoLcymsxnMf.png" src-width="3116" src-height="1616" align="center"/>

首先展示是该公司行动的 系统推进节点状态讯息：

<img src="/assets/Hwwxbt6S5oFPMNxUiptc9ieunth.png" src-width="2606" src-height="282" align="center"/>

注意：不同的公司行动类型，会有不同状态展示，方便用户直觉掌握推进状态

<img src="/assets/XlMZbynRUopOYrxyZHVcRQbhnLh.png" src-width="2196" src-height="292" align="center"/>

接下展示是<b>预告信息</b>：同时系统也针对部分公司行动提供预设配置项来优化，
- 例：派发位置（Street 或 Nominee）或 支付日期+N 配置（每家租户可能不同）
- 零股转分红预设（是或否）。注意：以上预设配置变更，若有需要请联络 长桥运营团队来配置

<img src="/assets/WtmCbhOVOoRQcWxyzU8cZuSunLd.png" src-width="2888" src-height="1408" align="center"/>

接下来是<b>方案信息与费用规则</b>：

<img src="/assets/YKBMb582AoQiHNxC34dcYhScnrc.png" src-width="2904" src-height="1508" align="center"/>

这时候可以 根据需要 检查个别的公司行动资料纪录，若必要栏位有缺失，系统会标红出来，方便检核数据

<img src="/assets/Mv9YbbRkIoBqvjxOcPRchorpnHD.png" src-width="2868" src-height="1020" align="center"/>

若没问题，则可以点选 前方的 纪录 Checkbox 区域，往下操作【登记】

<img src="/assets/W0y0bi9jxooUXcxz3IYc8pp2nFg.png" src-width="3076" src-height="1436" align="center"/>

此时系统会检查登记日与帐务日期，必须登记日小于目前帐务日期

<img src="/assets/CASrbvH5GoEKCSxlW0wc4uS7np3.png" src-width="2964" src-height="246" align="center"/>

## 登记

前置作业：已经通过资料检核 的公司行动预告纪录

操作说明：选择状态：初始化，就可以查询到初始化的公司行动预告

后续可以操作【登记】或【终止】，

在登记时，提供业务校验功能的同时，增加了更多的业务检查项目

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<p>注：系统会判断 必须 帐务日期&gt;= 登记日 才可进行登记操作。</p>
</div>

<img src="/assets/YtTMbtjHpoy8WYxtovQc6p57nPf.png" src-width="2542" src-height="150" align="center"/>

<img src="/assets/QMMfbevBfoINxnxLh8ecmijZnf9.png" src-width="3094" src-height="1562" align="center"/>

注意：因为公司行动 CCASS 文件会有一段时间的内容更新，因此我们优化 02 文件的读取，增加 CCASS 文件日期与 CCASS 状态的展示，租户可选择此栏位查出真正要开始执行的公司行动，否则容易因为 CCASS 状态不是‘最终执行'，可能因为数据内容造成人工处理的环节

<img src="/assets/NOyBbT7sJolhNbxrW33cwdhtnGf.png" src-width="3192" src-height="1347" align="center"/>

这样可避免 CCASS 状态是‘初步确认’（并非最终状态）或后面被取消，此时若去执行后续公司行动操作容易有机会出错

<img src="/assets/Dbeqb4IQWobeP2xbcUHcXqcWnug.png" src-width="3094" src-height="390" align="center"/>

此时可以在登记日期当天，点选【登记】 ，往下一步操作节点进行，当登记成功后，
 注：由于系统处理‘登记'须有点时间，属于异步设计，状态会变成‘正在登记' （请稍后即可）
 当登记成功后，就可在 执行菜单：公司行动&gt;客户明细作业，可以查到对应预告方案的客户登记明细纪录 

<img src="/assets/UPx6bQYeqoRgDtxnlgxcLhDzn0f.png" src-width="2778" src-height="158" align="center"/>

## 指令收集

前置作业：已经通过 登记成功 的公司行动预告纪录

操作说明：查询条件 选择状态：登记成功。指令收集状态：初始化，就可以查询到 近期 公司行动预告可进行指令收集操作的预告纪录（前提是 已登记成功 状态）

<img src="/assets/IToNb4lqZoUzHex7uv9cIqbLnUd.png" src-width="3410" src-height="1472" align="center"/>

此时可以操作‘指令收集'。在选择开始时间 到结算时间，对相关客户发送选择通知（透过 APP 或 mail  讯息）

参考通知范例：
     兹通知股票 700.HK，提出无条件要约收购，收购价格为每股 12.00 HKD。截止办理日期香港时间 2023-02-07  12:00. 预计派送日期 2023-03-07（仅供参考，以实际派发为准）。如欲参与，请登入 APP 在【我的资产 - 要约回购】进行操作。

注意：系统将在指令收集截止日期后，推进状态将自动变成‘指令收集完成'

<img src="/assets/QY0rbLd8ko3njIxEq2icgFQPnQh.png" src-width="3412" src-height="1574" align="center"/>

由于 指令收集涉及到 客户选择交互通知，后续也要把客户选择记录上传 CCASS 处理，整个指令收集的系统节点如下：正在收集指令/上报成功/回填完成/处理成功/ 处理失败

<img src="/assets/E1uJbVUdKotT1xx03MZc2W2dnbh.png" src-width="2584" src-height="600" align="center"/>

### 上报

上报操作是指 将客户指令提交到 CCASS

预告类型为（BE）的因为不需要资产预处理，不需要在系统内操作上报动作

预告类型为（OO EO RS ER TU TC ADR）因为需要资产预处理，需要在系统内操作上报动作。同时推进状态：登记成功，指令收集状态：处理成功 才可以进行，操作后系统将进行资产预处理，并更新指令收集状态为上报完成

<img src="/assets/GxRjbL6z9omrXoxs5gfcwXxenld.png" src-width="3548" src-height="1806" align="center"/>

上报时可根据明细汇总的数据进行操作

<img src="/assets/MmqmbzP7nocOg1xeR2fc3w2Fnle.png" src-width="3548" src-height="1806" align="center"/>

### 回填（Backfill）

回填操作是指 将客户指令选择上传 CCASS 处理后，要将 CCASS 的最后处理结果 回填到系统内的操作

操作说明：

预告类型为（OO EO RS ER TU TC ADR）同时推进状态：登记成功，指令收集状态：上报完成 才可以进行

### 尾差处理

预告类型为（OO EO RS ER TU TC ADR）不支持

同时推进状态：登记成功，指令收集状态：客户操作完成 才可以进行，可以在 纪录右侧功能键操作【尾差调整】按钮

<img src="/assets/DSZLbUCHUo2fipx2u9scWIKXnBh.png" src-width="3192" src-height="1318" align="center"/>

尾差处理功能，可以按子仓处理，也可以不分子仓处理

<img src="/assets/Wewfb7AYxo0ZusxWUa0cLqaonKb.png" src-width="2110" src-height="456" align="center"/>

## 提交执行

前置作业：已经通过 登记成功 的公司行动预告纪录，同时已完成该预告相关业务节点（指令收集 等）

注意：这步骤基本是最后一步：执行经办，若检查该公司行动预告应该处理的业务节点与系统节点后，就可提交执行经办

<img src="/assets/Dd5PbM5fLoqcabxz1dacCCcAnoh.png" src-width="3404" src-height="1560" align="center"/>

此时会出现提交审核的画面，确认提交后就会进入 后续执行审核的节点

<img src="/assets/NXbEbyR8SoqenyxEc80cC5OBnUc.png" src-width="3422" src-height="1628" align="center"/>

请根据资料数据，做出审核通过的操作或拒绝，当审核通过后就完成一个 公司行动的预告处理周期

<img src="/assets/FLThbZrKwocFHIxrB7ycU2hGnSd.png" src-width="3414" src-height="1628" align="center"/>

公司行动执行复核报表，增加了分组功能，可以协助操作者更方便地发现和 CCACC 的差异

<img src="/assets/RAIKbwjR0oTUquxaLmucSH52nix.png" src-width="2908" src-height="1558" align="center"/>

## 执行复核

操作说明：推进状态：执行待审核，就可以查询到 执行待审核的预告纪录

执行审核通过后，系统将正式执行公司行动。

执行公司行动时同时进行过户操作，该预告登记成功且客户有持仓的状况下，在‘执行’推进状态时就系统会自动过户操作（当股份过户后：即支付 Script Fee）股份记录将改为 Nominee

不是所有的公司行动都要过户，合股、拆股和换股不需要过户，过户时将完成 Street-&gt;Nominee 的 操作

<img src="/assets/D66JbpMojo8o9ZxOCiHccU72nZg.png" src-width="3406" src-height="1548" align="center"/>

<img src="/assets/XaQrbBOlqo1gmuxgR2SchQhBnpb.png" src-width="3548" src-height="1806" align="center"/>

# 四、扩展功能

## 手工新增公司行动

<b>路径</b>

公司行动&gt;公司行动 &gt; 左上角新增 功能键

系统提供两种方式手工新增手动创建与快捷创建

<img src="/assets/AQQNb5zbCoXmQtxPTfJc5OVlnDd.png" src-width="3348" src-height="298" align="center"/>

<b>手动创建</b>
适用场景
美股及其它市场公司行动自动创建
OB 模式手工创建公司行动
操作
自行输入预告类型/标的/预告标号/除净日或登记日期
 预告编号要自行填写 (不可与现行系统已有编号相同)
美股的分股分红填写除净日，系统会基于除净日自动计算登记日（依然是基于登记日操作）；其它类型填写登记日
<img src="/assets/HeRjbhLBjoYriuxGp4gc8lQBnQ9.png" src-width="3364" src-height="1394" align="center"/>
提交后进一步在详情页编辑信息
注意：不管第一步选择的是登记日还是除净日，在详情页仅需保证登记日的准确
<img src="/assets/JXx9bZGhnoeYRvxUhf9csivCnNh.png" src-width="2984" src-height="752" align="center"/>

<b>快捷创建</b>

适用场景
是利用系统内已导入的 CCNAN05 档内的预告编号，读取其对应资料来产生公司行动数据纪录
因为持仓不准或者其它原因漏创建的，可以利用该功能
仅支持 EP 模式下 HK、SZ、SH 市场
  操作
根据 02 文件，输入预告编号（A 开头的 9 位文本）

<img src="/assets/WYpubTrvvotdXFxPlGZcp4YCneh.png" src-width="3548" src-height="1806" align="center"/>

## <b>新增客户明细</b>

  适用场景
登记后发现某客户可以享受权益，但是不在登记明细中。如未及时同步转仓 

  路径
公司行动 - 公司行动 - 详情 - 新建

  操作
登记后立刻核对持仓，发现缺客户的操作新增客户明细
点击新增按钮，输入预告编号、托管商、持仓
 持仓 = STREET（未登记过户股票） + NOMINEE（已登记过户股票）+ OWN 

<img src="/assets/Af1NbSPkCoa6gRxflCcck3KunbH.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/KHFLbWRTIowQJNxxxyaclwc1nof.png" src-width="3548" src-height="1806" align="center"/>

  注意事项
若在客户选择阶段所新增的，不会再发送通知 (APP 等)
未登记、开始指令收集、执行后不可新增 

## <b>作废客户明细</b>

  适用场景
登记后发现某客户实际不需要享受某个公司行动权益

  路径
公司行动 - 公司行动 - 详情 - 作废

  操作
选中明细后点击【作废】 

<img src="/assets/LMpxbJnYroygwlxrfZfcnEu0nNf.png" src-width="3548" src-height="1806" align="center"/>

注意事项
在登记后可以即操作作废
若在选股选息等进入客户选择阶段后再作废容易引起客诉 
未登记、开始指令收集、执行后不可作废

## <b>后台行权</b>

<b>适用场景</b>

在客户选择阶段，代理客户进行后台方案的设置 

<b>路径</b>

公司行动 - 公司行动 - 详情 - 客户明细 - 详情 - 行权

<b>操作</b>

在行权界面输入数量并提交

<img src="/assets/IOOubMCS0oBeK6x3kUucDda4nch.png" src-width="3548" src-height="1806" align="center"/>

<b>注意</b>

状态为指令收集中的公司行动才可行权

BE 类各方案的数量之和必须等于可行权数量（持仓数量）

除了超额认购各方案的汇总行权数量不能大于可行权数量（持仓数量）

要约和供股会同时校验持仓

## <b>编辑客户的费用和明细</b>

<b>路径</b>

公司行动 - 公司行动 - 详情 - 客户明细 - 详情 - 编辑

<b>注意</b>

提交执行前的公司行动才支持费用和明细的编辑

输入金额必须&gt;=0；

 最多支持两位小数； 

编辑后的结果会受到重新登记、尾差调整、回填等影响； 

费用币种和权益币种不一致，会影响报表展示。

权益编辑时，币种 + 转入金额、转入份额 + 新标的这两个组合不能同时提交

<img src="/assets/RDnJbQu2doamnHx41PJcPcqinjg.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/QzLSbBMs4oscvexdmIScQRULnOh.png" src-width="3548" src-height="1806" align="center"/>

## 公司行动的终止/撤销

<b>终止</b>

初始化状态下的公司行动支持终止操作，终止后会彻底删除该公司行动

<img src="/assets/YQMOboH92oSGphxPZYcc9RT5nfe.png" src-width="3548" src-height="1806" align="center"/>

<b>撤销</b>

登记后的公司行动支持撤销，撤销的公司行动系统将保存操作记录

<b>注意事项</b>
执行后撤销时，如当日未完成日终，则为无痕撤销；若已经完成日终的，则系统将产生冲正流水，原流水不删除
执行后撤销仅限于撤销当日或者上一日的公司行动
供股、要约进入指令收集后，暂不支持撤销，可通过撤销客户行权进行操作

<img src="/assets/Vl97b79aqokaZgxObAHcD5cmnib.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/LyItbZv5FoNJKHx6vYHc9hYgnOf.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/AN7Kbrg5Mox1m1xQBlyc1KDVn8d.png" src-width="3548" src-height="1806" align="center"/>

## 公司行动邮件消息模板

<table>
<colgroup>
<col width="100"/>
<col width="414"/>
</colgroup>
<tbody>
<tr><td><p>公司行动类型</p></td><td><p>模板</p></td></tr>
<tr><td><p>供股类</p></td><td><img src="/assets/PjFkbrQH9oOPLGxZb90cVs33nLb.png" src-width="856" src-height="190" align="center"/></td></tr>
<tr><td><p>要约类</p></td><td><img src="/assets/AsE2bzS7KokWq8xwXXgcSY16nmb.png" src-width="828" src-height="182" align="center"/></td></tr>
<tr><td><p>拆合股、换股</p></td><td><img src="/assets/VXIKbF63hox7wTxMK55cRFcWn2d.png" src-width="1242" src-height="232" align="center"/></td></tr>
<tr><td><p>ADR 执行</p></td><td><img src="/assets/NcBYbOwUDoe0cyxqkKxcDeIAnBe.png" src-width="1268" src-height="222" align="center"/></td></tr>
<tr><td><p>红利、红股</p></td><td><img src="/assets/MunrbSleWoqnCoxWhDTcTy2in46.png" src-width="1210" src-height="274" align="center"/></td></tr>
<tr><td><p>期权公司行动</p></td><td><img src="/assets/YkosbXVRsovl39xdOGOcEIamnBc.png" src-width="1182" src-height="334" align="center"/></td></tr>
<tr><td><p>股东大会</p></td><td><img src="/assets/U7PCbViUNoCdrixpEuNcC3DqnDe.png" src-width="1238" src-height="310" align="center"/></td></tr>
</tbody>
</table>

