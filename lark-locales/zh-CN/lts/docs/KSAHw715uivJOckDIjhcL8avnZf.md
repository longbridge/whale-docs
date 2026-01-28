---
title: 系统介绍
slug: KSAHw715uivJOckDIjhcL8avnZf
sidebar_position: 5
---


# 系统介绍

# 一、系统介绍

<b>基本架构</b>

```text
根据客户是否参与公司行动，可将公司行动分为强制类和自愿类（可选择）。强制类公司行动，客户无需采取任何操作即可参与的行动，例如普通分红。自愿类公司行动，客户需要采取一定的操作才能参与的行动，例如供股、选股选息。两种类型公司行动的流程略有差异


在公司行动处理过程中，还会和清算服务、消息中心、资产服务产生互动
```

<img src="/assets/HUGHbiRtlodsmLxlApBjJASvptb.png" src-width="3030" src-height="1698" align="center"/>

<b>操作流程</b>

1. 预告和方案的创建
    - 券商操作：非HK市场，需要根据上手数据，人工创建预告和方案信息
    - 系统功能：直联港交所的券商，可利用导入的05文件自动创建HK市场的预告和方案信息

2. 登记
    - 券商操作：需要核对系统的持仓是否和上手的一致
    - 系统功能：将根据清算服务或者资产服务的数据，生成含权益信息和费用信息的客户明细

3. 客户行权
    - 自愿类公司行动流程之一，该步骤的时间一般比较长
    - 券商操作：需要在此阶段通知客户，收集客户的行权指令并在系统内做登记
    - 系统功能：可自动通知客户，并在App和证券后台提供行权操作入口

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

ADR（ADR费用）

SO（剥离）

IP（利息支付）

VT（股东大会）

# 二、系统设定

## 1. 初始化参数配置

```text
暂不支持页面配置，可联系客户服务调整配置
```

## 2. 收费配置

<b>路径</b>

```text
公司行动 >费用管理
```

<b>普通收费设置</b>

```text
可以维护管理公司行动的全局相关费用收取配置（方案类型-费用类型）
```

<img src="/assets/PBvmb1zkuozQ3xxsvFgjsHxipac.png" src-width="3344" src-height="1558" align="center"/>

```text
也可以在记录右侧区点击【编辑】，来修改所对应的公司行动费用配置， 可以在左上方点击【新建】，来增加一笔费用配置


![image.png](/assets/2c08a0b7f409e07f2eac4aa2effcf02a.png)

- 方案类型：匹配条件之一，匹配的主要条件
- 市场：匹配条件之一，只能选择
- 费用类型：计算规则之一，只能选择
- 子仓编号：匹配条件之一，配置 TAX 费用的时候，需要使用，不同地区（大帐户），可使用不同费率
- 计费方式、计算方式：搭配使用
    - 登记持仓（每手）+比例收费：每手收 N 元
    - 预告+固定数额：每次公司行动收 N 元
    - 权益金额+比例收费：分红金额*5%
- 截取方式：控制小数位数的截取方式，按照 2 位截取
- 收费优先级、费用特殊限制配合使用，比较费用和分红（分股分红的分股也统计在分红内）的关系
    - 无限制：独立进行费用计算
    - 单项费用不超过权益：该项费用的费用金额和分红进行比较，费用大于分红的，按照分红金额收费
    - 优先级前费用不超过权：按照优先级进行费用计算，优先级前的费用（含自身）大于分红的，按照分红金额=优先级前费用收
```

<b>过户费设置</b>

```text
公司行动过户费只需要配置一条


新增过户费设置：可进行单独收费，也可进行联合收费

    - 单独收费：和Handling Fee独立，推荐此种配置
    - 联合收费：和Handling联合收费，收取Handling时，自动抵扣过户费部分
```

<img src="/assets/QLojbYK3MolwgZxYzvLjfWFqpTc.png" src-width="3348" src-height="992" align="center"/>

<img src="/assets/EgHfbAt6lomKwoxgXP7jU4Yxp2e.png" src-width="3376" src-height="1254" align="center"/>

# 三、版面区域说明

## 1. 列表页摘要

```text
在进公司行动预告纪录查询明细画面， 版面如下： 中间区域 展示‘推进状态’与‘指令收集状态‘，方便快速定位
```

<img src="/assets/HU1WbAUVpo0IcZxh2iejIAKnpZZ.png" src-width="3186" src-height="1520" align="center"/>

```text
右边纪录区展示该公司行动可操作的功能键 （减少误操作，方便单一公司行动处理）
```

<img src="/assets/GuMCbnhmgowA02xGFsKj86UQpGb.png" src-width="3184" src-height="1512" align="center"/>

```text
由于公司行动类型众多，业务节点不尽相同， 系统也针对公司行动类型提供操作顺序顺序的文案（操作引导）
```

<img src="/assets/VOiwbHSyloaBGwx1ucpjBELZpnh.png" src-width="2664" src-height="956" align="center"/>

```text
在列表列也展示备注文案提示
```

<img src="/assets/MJD9bfckfohK4JxfSqzjpTTBpCd.png" src-width="3560" src-height="1528" align="center"/>

```text
批量操作功能，系统会状态判断，提供可操作功能键
```

<img src="/assets/M4phbSclxoxDhMxCCqpjvBArpf8.png" src-width="3324" src-height="1598" align="center"/>

```text
提供 02 文件的互动，实时更新公司行动最新状态
```

<img src="/assets/DN3sbinxboe5fTxy5CFjul32pb0.png" src-width="3334" src-height="1478" align="center"/>

<img src="/assets/Sahnbt7NNoUvANxryBqj4sBvphh.png" src-width="3358" src-height="1002" align="center"/>

## 2. 详情页面

```text
点选进入详情页面，分成几块 资讯区域如下
```

<b>公司行动主体与</b>

```text
公司行动类型图标 与推进状况
```

<img src="/assets/MDA5b5dYwo4Oakx18wZjOVP1p4c.png" src-width="2388" src-height="292" align="center"/>

<b>公司行动预告讯息资料</b>

```text
纪录该公司行动预告的重要栏位讯息（预告类型/标的/执行方式/登记日/派发日.._)
```

<img src="/assets/YLT3bICEkotdZuxh0DgjjlhUpEh.png" src-width="2762" src-height="1033" align="center"/>

<b>方案信息与费用规则</b>

```text
这边记录对应的预告方案纪录与费用规则，一个公司行动如果有单独的规则，可以在费用规则维护
```

<img src="/assets/LrabbunXCoTnWdxZkzPjlBLXppc.png" src-width="2682" src-height="1138" align="center"/>

<b>明细汇总与客户明细</b>：

```text
这边记录 所登记的客户汇总资料与客户明细
```

<img src="/assets/U6bmb70oqo0Zbix7NtHjnE4ppIc.png" src-width="2674" src-height="1182" align="center"/>

<b>同时在详情页，基本上提供所有可供操作的功能键入口</b>

```text
- 在详情页可以直接增、删、改客户派发计算的权益
- 在详情页-客户详情可以进一步操作线下行权、更改权益和费用
```

<img src="/assets/YnIjbu33qonYCqx7Dksj9WhupKh.png" src-width="2504" src-height="1634" align="center"/>

<img src="/assets/NYtxblC9yoYJQYxbepTjLyjXpSb.png" src-width="2380" src-height="814" align="center"/>

<img src="/assets/IbeqbjK9RosDRRxLrT8j0KhtpBc.png" src-width="2370" src-height="1046" align="center"/>

## 3. 备注栏位说明

```text
因为公司行动预告执行时，会涉及资产与费用的变更，因此系统 也会自动产生 通用的资产流水相关备注说明


**方案备注（预告备注）**


HK 市场自动处理，其它市场手填


TM、BE、IP 类：股票编号+市场+名称+逗号+CCASS 备注
```

<img src="/assets/VXGDbjm1Powg3uxZBefjstCip8w.png" src-width="3548" src-height="1806" align="center"/>

<b>权益备注</b>

```text
- 方案备注+逗号+持仓
```

<img src="/assets/LM67biuimoGfUIx4f9yjFSVZp2f.png" src-width="3548" src-height="1806" align="center"/>

<b>费用备注</b>

```text
格式（非 TAX_FEE）：费用名称英文+股票编号+市场+股票名称


CROSSTEC03893.HK手续费
```

<img src="/assets/PxVxbyfeQoo3bmxNaORj3Wvjp2d.png" src-width="3548" src-height="1806" align="center"/>

<b>费用备注格式（TAX_FEE</b>）

```text
预告（或方案备注）+ "- Withholding TAX"


例： TROW（US74144T1088）现金股息USD每股1.22（普通股息）-预扣税
```

# 三、常规功能

```text
路径：公司行动-公司行动
```

## 1. 初始化

```text
选择状态：初始化 ，就可以查询到近期刚导入的公司行动预告


初始化状态是公司行动预告的起始点， 也可以操作【终止】
```

<img src="/assets/PsDTbZBAVot7qvxuPtijOXgCpje.png" src-width="3172" src-height="1835" align="center"/>

```text
可以点击【详情】检查对应的公司行动预告资料与方案信息，同时系统会产生默认方案
```

<img src="/assets/XEjQbvoqDoFhvMxq2LijrnRmpnf.png" src-width="3116" src-height="1616" align="center"/>

```text
首先展示是该公司行动的 系统推进节点状态讯息：
```

<img src="/assets/XTTEbYAwboz1RnxRBZBj0yyfpZe.png" src-width="2606" src-height="282" align="center"/>

```text
注意：  不同的公司行动类型，会有不同状态展示，方便用户直觉掌握推进状态
```

<img src="/assets/QqFNbGS6EovhWXxEW2vjRpO8pRo.png" src-width="2196" src-height="292" align="center"/>

```text
接下展示是**预告信息**： 同时系统也针对部分公司行动提供预设配置项来优化，

- 例： 派发位置（Street 或 Nominee） 或 支付日期+N 配置 （每家租户可能不同）
- 零股转分红预设（是或否）。  注意：以上预设配置变更，若有需要请联络 长桥运营团队来配置
```

<img src="/assets/RRlYbXcfTonNIOxtAGsj63DlpFf.png" src-width="2888" src-height="1408" align="center"/>

```text
接下来是**方案信息与费用规则**：
```

<img src="/assets/P3EWbl9Zoo5rOLxSeKpjGhrhpJE.png" src-width="2904" src-height="1508" align="center"/>

```text
这时候可以 根据需要 检查个别的公司行动资料纪录，若必要栏位有缺失， 系统会标红出来，方便检核数据
```

<img src="/assets/N2SjbJUJVogD43xAHBZjV3V2pDb.png" src-width="2868" src-height="1020" align="center"/>

```text
若没问题，则可以点选 前方的 纪录 Checkbox 区域，往下操作【登记】
```

<img src="/assets/RahGbmmn1oy4Pjx6BQxjD447phd.png" src-width="3076" src-height="1436" align="center"/>

```text
此时系统会检查登记日与帐务日期，必须登记日小于目前帐务日期
```

<img src="/assets/TZ0bb63CkoIwIaxUrEPjA3g7pHe.png" src-width="2964" src-height="246" align="center"/>

## 2. 登记

```text
前置作业：  已经通过资料检核 的公司行动预告纪录


操作说明：  选择状态：初始化 ，就可以查询到初始化的公司行动预告


后续可以操作【登记】或 【终止】，


在登记时，提供业务校验功能的同时，增加了更多的业务检查项目
```

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 注： 系统会判断 必须 帐务日期&gt;= 登记日 才可进行登记操作。</p>
</div>

<img src="/assets/J9AMbo9opoDoE4xbgcUjz8bZple.png" src-width="2542" src-height="150" align="center"/>

<img src="/assets/EGQBbZDJBoOxlMx0BxojDfpspEh.png" src-width="3094" src-height="1562" align="center"/>

```text
注意： 因为公司行动 CCASS 文件会有一段时间的内容更新，因此我们优化 02 文件的读取， 增加 CCASS 文件日期与 CCASS 状态的展示，  租户可选择此栏位查出真正要开始执行的公司行动，否则容易因为 CCASS 状态不是‘最终执行'，可能因为数据内容造成人工处理的环节
```

<img src="/assets/A4OYbw8TQo2Orzx5lPSjN1AjpPb.png" src-width="3192" src-height="1347" align="center"/>

```text
这样可避免 CCASS 状态是‘初步确认’（并非最终状态） 或后面被取消，此时若去执行后续公司行动操作容易有机会出错
```

<img src="/assets/GwtNb9CD2oofNMxUYytjCOnApCe.png" src-width="3094" src-height="390" align="center"/>

```text
此时可以在登记日期当天，点选 【登记】 ，往下一步操作节点进行，当登记成功后，


 注： 由于系统处理‘登记'须有点时间， 属于异步设计，状态会变成‘正在登记' （请稍后即可）


 当登记成功后，  就可在 执行菜单：公司行动>客户明细作业， 可以查到对应预告方案的客户登记明细纪录
```

<img src="/assets/O0YXbpSsPouOfVxUfa1jYwDjpZc.png" src-width="2778" src-height="158" align="center"/>

## 3. 指令收集

```text
前置作业：  已经通过 登记成功 的公司行动预告纪录


操作说明：查询条件 选择状态： 登记成功。 指令收集状态：初始化  ，就可以查询到 近期 公司行动预告可进行指令收集操作的预告纪录 （前提是 已登记成功 状态）
```

<img src="/assets/HXODbDFWCoahVjxdC5Sj4kympHf.png" src-width="3410" src-height="1472" align="center"/>

```text
此时可以操作‘指令收集'。 在选择开始时间 到结算时间，对相关客户发送选择通知（透过 APP 或 mail  讯息）


参考通知范例：


     兹通知股票 700.HK，提出无条件要约收购，收购价格为每股 12.00 HKD。截止办理日期香港时间 2023-02-07  12:00. 预计派送日期 2023-03-07（仅供参考，以实际派发为准）。如欲参与，请登入 APP 在【我的资产-要约回购】进行操作。


注意：  系统将在指令收集截止日期后，推进状态将自动变成‘指令收集完成'
```

<img src="/assets/Vnsnb0lFUoVOLZx8pv9jwMvTp5c.png" src-width="3412" src-height="1574" align="center"/>

```text
由于 指令收集涉及到 客户选择交互通知， 后续也要把客户选择记录上传 CCASS 处理， 整个指令收集的系统节点如下：  正在收集指令/上报成功/回填完成/处理成功/ 处理失败
```

<img src="/assets/Xbqob2oCBoWOtpxAeudj4CeXp1b.png" src-width="2584" src-height="600" align="center"/>

### 上报

```text
上报操作是指 将客户指令提交到CCASS


预告类型为（BE）的因为不需要资产预处理，不需要在系统内操作上报动作


预告类型为（OO EO RS ER TU TC ADR）因为需要资产预处理，需要在系统内操作上报动作。同时推进状态：登记成功，指令收集状态：处理成功 才可以进行，操作后系统将进行资产预处理，并更新指令收集状态为上报完成
```

<img src="/assets/F8TAbQ5PIo6DJaxzxPIjB6rupne.png" src-width="3548" src-height="1806" align="center"/>

```text
上报时可根据明细汇总的数据进行操作
```

<img src="/assets/DvnWbSvMuozysSxmlF8j7mqbpLg.png" src-width="3548" src-height="1806" align="center"/>

### 回填（Backfill）

```text
回填操作是指 将客户指令选择上传 CCASS 处理后，要将 CCASS 的最后处理结果 回填到系统内的操作
```

操作说明：

```text
预告类型为（OO EO RS ER TU TC ADR）同时推进状态：登记成功，指令收集状态：上报完成 才可以进行
```

### 尾差处理

```text
预告类型为（OO EO RS ER TU TC ADR ）不支持


同时推进状态：登记成功，指令收集状态： 客户操作完成 才可以进行,可以在 纪录右侧功能键操作【尾差调整】按钮
```

<img src="/assets/NLheb2FFfobqRHxCkf4j5ri9pqb.png" src-width="3192" src-height="1318" align="center"/>

```text
尾差处理功能，可以按子仓处理，也可以不分子仓处理
```

<img src="/assets/TmJsbPWj7o5AKXx9PCDjhdvdpjg.png" src-width="2110" src-height="456" align="center"/>

## 4. 提交执行

```text
前置作业：  已经通过 登记成功 的公司行动预告纪录，同时已完成该预告相关业务节点（ 指令收集 等）


注意：  这步骤基本是最后一步： 执行经办， 若检查该公司行动预告应该处理的业务节点与系统节点后，就可提交执行经办
```

<img src="/assets/PiJdbzwzuoxq6yxSRijjIzHWpPe.png" src-width="3404" src-height="1560" align="center"/>

```text
此时会出现提交审核的画面，确认提交后就会进入 后续执行审核的节点
```

<img src="/assets/VFgxbSPOToC1HvxjlCRjMgMopRf.png" src-width="3422" src-height="1628" align="center"/>

```text
请根据资料数据，做出审核通过的操作或拒绝，当审核通过后就完成一个 公司行动的预告处理周期
```

<img src="/assets/WgiPb8GLUoQSddxl6m9j97Hxp6c.png" src-width="3414" src-height="1628" align="center"/>

```text
公司行动执行复核报表，增加了分组功能，可以协助操作者更方便地发现和 CCACC 的差异
```

<img src="/assets/XjdUb5DNroCg45x2WNcjZSX0ptd.png" src-width="2908" src-height="1558" align="center"/>

## 5. 执行复核

```text
操作说明：  推进状态： 执行待审核  ，就可以查询到 执行待审核的预告纪录


执行审核通过后，系统将正式执行公司行动。


执行公司行动时同时进行过户操作，该预告登记成功且客户有持仓的状况下，在‘执行’推进状态时就系统会自动过户操作（当股份过户后： 即支付 Script Fee）股份记录将改为 Nominee


不是所有的公司行动都要过户，合股、拆股和换股不需要过户，过户时将完成 Street->Nominee 的 操作
```

<img src="/assets/QK6FbbH8koe9zkxbsmRjKQCkpFd.png" src-width="3406" src-height="1548" align="center"/>

<img src="/assets/Kl85b29kCoxd0ExNZcujfuxfppc.png" src-width="3548" src-height="1806" align="center"/>

# 四、扩展功能

## 1. 手工新增公司行动

<b>路径</b>

```text
公司行动>公司行动 > 左上角新增 功能键


系统提供两种方式手工新增手动创建与快捷创建
```

<img src="/assets/W1i8bsNigoeN6Vxf5GSjYUHBpHh.png" src-width="3348" src-height="298" align="center"/>

<b>手动创建</b>

```text
适用场景


    美股及其它市场公司行动自动创建


    OB模式手工创建公司行动


操作


    自行输入预告类型/标的/预告标号/除净日或登记日期


     预告编号要自行填写(不可与现行系统已有编号相同)


    美股的分股分红填写除净日，系统会基于除净日自动计算登记日（依然是基于登记日操作）；其它类型填写登记日


    ![image.png](/assets/5851c84a5d9ad93c3759569e7b6c6880.png)


    提交后进一步在详情页编辑信息


    注意：不管第一步选择的是登记日还是除净日，在详情页仅需保证登记日的准确


    ![image.png](/assets/ad978ef7c8e4ddb622c6ed7aad0a82c3.png)
```

<b>快捷创建</b>

```text
适用场景


    是利用系统内已导入的 CCNAN05 档内的预告编号， 读取其对应资料来产生公司行动数据纪录


    因为持仓不准或者其它原因漏创建的，可以利用该功能


    仅支持EP模式下HK、SZ、SH市场


  操作


    根据02文件，输入预告编号（A开头的9位文本）
```

<img src="/assets/ANZObg4QWo32gQxN1ESjgDKPpWd.png" src-width="3548" src-height="1806" align="center"/>

## <b>2. 新增客户明细</b>

适用场景

```text
登记后发现某客户可以享受权益，但是不在登记明细中。如未及时同步转仓
```

路径

```text
公司行动-公司行动-详情-新建
```

操作

```text
登记后立刻核对持仓，发现缺客户的操作新增客户明细


点击新增按钮，输入预告编号、托管商、持仓


持仓 = STREET（未登记过户股票） + NOMINEE（已登记过户股票）+ OWN
```

<img src="/assets/C2lKbMMCso6t6ox4lHUjAce4peh.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/NA2XbnF9aoLcBExbYLQjVJrmp3Q.png" src-width="3548" src-height="1806" align="center"/>

注意事项

```text
若在客户选择阶段所新增的，不会再发送通知 (APP等)


    未登记、开始指令收集、执行后不可新增
```

## <b>3. 作废客户明细</b>

适用场景

```text
登记后发现某客户实际不需要享受某个公司行动权益
```

路径

```text
公司行动-公司行动-详情-作废
```

操作

```text
选中明细后点击【作废】
```

<img src="/assets/E90cbRJVgow1jmxr4dsjEyOlpxc.png" src-width="3548" src-height="1806" align="center"/>

注意事项

```text
在登记后可以即操作作废


若在选股选息等进入客户选择阶段后再作废容易引起客诉 


未登记、开始指令收集、执行后不可作废
```

## <b>4. 后台行权</b>

<b>适用场景</b>

```text
在客户选择阶段，代理客户进行后台方案的设置
```

<b>路径</b>

```text
公司行动-公司行动-详情-客户明细-详情-行权
```

<b>操作</b>

```text
在行权界面输入数量并提交
```

<img src="/assets/MJi1b94mjophNIxHlcojCWDupYf.png" src-width="3548" src-height="1806" align="center"/>

```text
**注意**


状态为指令收集中的公司行动才可行权


BE类各方案的数量之和必须等于可行权数量（持仓数量）


除了超额认购各方案的汇总行权数量不能大于可行权数量（持仓数量）


要约和供股会同时校验持仓
```

## <b>5. 编辑客户的费用和明细</b>

<b>路径</b>

```text
公司行动-公司行动-详情-客户明细-详情-编辑
```

<b>注意</b>

```text
提交执行前的公司行动才支持费用和明细的编辑


输入金额必须>=0；


最多支持两位小数； 


编辑后的结果会受到重新登记、尾差调整、回填等影响； 


费用币种和权益币种不一致，会影响报表展示。


权益编辑时，币种+转入金额、转入份额+新标的这两个组合不能同时提交
```

<img src="/assets/Rp3Lb5JXBoZ1nSxRXJrjd7Q3pJc.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/YpHObWk9DoIG2bxMHtDjuOLVpoe.png" src-width="3548" src-height="1806" align="center"/>

## 6. 公司行动的终止/撤销

<b>终止</b>

```text
初始化状态下的公司行动支持终止操作，终止后会彻底删除该公司行动
```

<img src="/assets/S9R6bitZZoXk2SxEdxsjT9iHpTc.png" src-width="3548" src-height="1806" align="center"/>

<b>撤销</b>

```text
登记后的公司行动支持撤销，撤销的公司行动系统将保存操作记录
```

<b>注意事项</b>

```text
执行后撤销时，如当日未完成日终，则为无痕撤销；若已经完成日终的，则系统将产生冲正流水，原流水不删除


执行后撤销仅限于撤销当日或者上一日的公司行动


供股、要约进入指令收集后，暂不支持撤销，可通过撤销客户行权进行操作
```

<img src="/assets/EPztbiyCZoC2F4xBKWnjrgmrpyf.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/XqFrbHc6Oo0iSBxxdIcj1G0wp0b.png" src-width="3548" src-height="1806" align="center"/>

<img src="/assets/RdYub6bqxoQlyfxyTbEjuEuGppe.png" src-width="3548" src-height="1806" align="center"/>

## 7. 公司行动邮件消息模板

- 公司行动类型
    - 模版

## 供股类

## 要约类

## 拆合股、换股

## ADR 执行

## 红利、红股

## 期权公司行动

## 股东大会

