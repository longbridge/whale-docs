---
title: 系统介绍
slug: NO4HwcjZoiMgi8ko0m4cbrZ5nRf
sidebar_position: 2
---


# 系统介绍

# 一、系统介绍

```text
清算系统主要通过日终任务串联功能。日终任务分成两个模块，一个是市场清算，一个是日终管理。市场清算处理交易数据为主，用于各市场的计费、交收流程。日终清算处理涵盖交易、调帐、公司行动在内的全部数据，进行利息计算，最终输出报表和结单
```

<img src="XB2CbiED9oQQuGxDrnYjuZCkpkc" src-width="4452" src-height="1865" align="center"/>

# 二、系统设定

## 市场管理配置

### <b>服务商资料管理</b>

主要用于维护服务商的基础信息。可新增、编辑，删除

服务商分类型分为托管商、代理商。代理商为交易渠道，托管商持仓的托管方

<img src="QJ3pbur9YoVD2oxKCGxjE5Hhpdg" src-width="3548" src-height="1806" align="center"/>

### <b>子仓资料</b>

主要用于维护托管商子仓的基础信息。可新增、编辑、删除

新增、编辑时可选择的服务商必须事先在服务商资料中配置，且服务商类型为托管商

配置交收、仓位规则时需要用到该配置项

<img src="Q5W5bCk4NoOMxrxfJoljcbIYpdf" src-width="3548" src-height="1806" align="center"/>

### <b>结算渠道资料</b>

主要用于维护结算渠道基础信息，可新增、编辑、删除。新增、编辑时可选择的服务商必须事先在服务商资料中配置，且服务商类型为代理商。配置交收、仓位规则时需要用到该配置项

<img src="U4zsbtmMaozRyNxsv6cjLS52p0b" src-width="3548" src-height="1806" align="center"/>

### <b>交收仓位规则管理</b>

<b>市场层规则</b>

每个市场可分别配置一条规则

特殊字段说明：

- 隔夜市场：隔夜市场选择是的，系统处理时账务日期=交易日期+1。长桥将美股市场作为隔夜市场
- 默认托管商、默认子仓编号：在未匹配到业务规则的情况下，仓位处理时取该配置

<img src="WVbWbq0vmoWa60xp0sKjugznpJD" src-width="3548" src-height="1806" align="center"/>

<b>业务层规则</b>

可以在业务层配置交收和仓位处理规则，一条规则可同时对交收和仓位服务起作用

依赖交收仓位基础对象的配置

```text
字段说明：


组织号选ALL


柜台选ALL


合约


    暗盘和非暗盘的可单独设置规则


买卖方向


    可针对买、卖设置规则


期权类别


    针对美股期权起作用，可根据期权类别设置规则


    枚举包括权利仓、义务仓


指令类型


    针对满足上述条件的流水，可生成交收指令


    指令类型包括ATI、STI、SI、ISI


交收方式


    针对满足上述条件的流水，可生成交收指令


    交收方式包括FOP、RDP、DVP


默认托管仓


    针对满足规则的持仓变动，在配置的托管商上进行仓位处理


    托管商的枚举为服务商资料商已新增的服务商，且性质为托管商


默认子仓


    针对满足规则的持仓变动，在配置的子仓上进行仓位处理


    子仓的枚举为子仓资料已新增的子仓
```

<img src="Uq9xbbkAQotFPfxc8rMjlg0NpHg" src-width="3548" src-height="1806" align="center"/>

## 日终任务配置

路径：清算管理&gt;市场清算&gt;日终任务&gt;日终设置

<img src="V0JvbMyfYocxIuxWNnFjMjCgpxf" src-width="2852" src-height="1374" align="center"/>

<b>市场交收配置</b>

点击新建新增分组

根据劵商交易市场帐务处理顺序，配置市场执行的群组配置

```text
常规是按时间区段将接近相同地域市场配置在一起：例 欧美市场/亚洲市场 


租户劵商也可根据需要，将一些市场清算独立出来
```

<img src="KJm2b77MEobf2pxMY6HjcRr6pvW" src-width="3574" src-height="1774" align="center"/>

<img src="Dql6bnw2soSEkZxBJGTjnGOupVf" src-width="2440" src-height="934" align="center"/>

新建多个分组后，可以点选右上方区 ‘执行顺序设置'来 调整。所配置的市场群组清算顺序（劵商常规顺序： 先欧美-亚洲-日终）

<img src="FxutbpXUOodYM4xKVrzj1XFnpVg" src-width="2436" src-height="888" align="center"/>

<b>清算前准备配置</b>

可编辑时间段：操作日终任务之前

检查阶段释义：交易清算（数据同步-清算交收之前的检查项目）；日终清结算（数据汇总-日切之前的检查项目）

失败后处理释义：仅提醒（不会拦截流程，仅提示）、工单审核（会拦截流程，但是可以手动通过）、强制校验（会拦截流程，必须通过）

支持的操作：开启/关闭，选择失败后的处理方式

编辑时需要审批，工单标识：clearing.before_clearing_ready.setting

其它：部分检查项目要求强制检查，不允许编辑

<img src="LNzXbqxS2ogysvxsg7TjCFEepLe" src-width="3574" src-height="1774" align="center"/>

<b>清算参数配置</b>

可编辑时间段：操作日终任务之前

编辑清算初始化配置时需要审批，工单标识：clearing.update_system_config.exec

注意：需要联系技术人员后修改

<img src="Lt4Nb9kljosl1vxvS0DjSCgep8e" src-width="3574" src-height="1774" align="center"/>

## 计费配置

### 基础概念

合单规则和收费场景是系统的基础配置元素，通常在系统初始化时进行设置

套餐收费和个性化收费是根据业务需求灵活配置的功能，用户可根据实际情况选择是否启用。套餐收费通常依据用户群体进行添加，例如经纪人A套餐、现金账户套餐。系统具备在客户开户时自动分配相应套餐的功能；个性化收费一般根据客户个性化需求单独进行设置

<img src="G2BObI1yTod9OrxW92bjEGUwpKd" src-width="4113" src-height="2018" align="center"/>

### 收费场景

<b>字段说明</b>

---

<b>说明：</b>

匹配条件：用于确定哪些流水需要进入计费流程

计费规则：用于定义如何计算费用金额，包括计费方式、精度、天数和截取方式等

输出结果：最终的计费结果

---

<img src="TfnDbwNpgoq46TxJvuCjWJWZpLo" src-width="3548" src-height="1806" align="center"/>

### 客户收费配置

<b>全部操作</b>

<b>字段说明</b>

1. 固定费率：收费金额 = 值 × 费率。计算方式为交易金额、持仓市值时，费率值为非百分比形式，不带%<b>（例如：1%收费，需要填0.01）</b>。
2. 单笔阶梯费率：针对单笔统计单位生效。收费金额 = 阶梯结束值1 × 费率1 + （阶梯结束值2 - 阶梯结束值1）× 费率2 + …… + （阶梯结束值N - 阶梯结束值N-1）× 费率N。阶梯输入规则：左开右闭，最后一个阶梯值为0（例如：大于1且小于等于3）。3. 按月阶梯费率：后台统计每月交易金额总量，系统根据该笔累计交易所在的阶梯进行计费。收费金额 = 该笔交易金额 × 费率。跨阶梯时，将交易金额拆分后，按各自阶梯费率计算并叠加。 |
| 费率币种      | 收费币种，计算方式的枚举值自带币种的，按照枚举值的币种。若计算方式为交易金额的，收费币种按照交易金额的币种                                                                                                                                                                                                                                                                  |
| 最低、最高收费   | 略                                                                                                                                                                                                                                                                                                                      |
| 不超过交易金额比例 | 4. 不超过交易金额比例：收费金额不大于交易金额 × 设置值 / 100，仅适用于股票交易和期权交易。                                                                                                                                                                                                                                                                    |

<b>个性化收费</b>

<b>使用场景</b>

如果客户需要定制某个费用，可使用个性化收费功能

一个个性化收费只包含一个收费

一个客户只能绑定多个个性化收费

<b>新建个性化收费示例</b>

<img src="Tl5AbChpxowII5xjNT4jl3J5puf" src-width="2852" src-height="1374" align="center"/>

<img src="F0cSbkBMzoec2RxGb04jSuxSpGc" src-width="2852" src-height="1374" align="center"/>

<img src="RnpXbM4X6oyoAexFwCnjKqj1p8b" src-width="2874" src-height="1312" align="center"/>

<b>添加客户示例</b>

<img src="IB8GbLSULo5IJJxI2SJjRyd9pgg" src-width="2874" src-height="1312" align="center"/>

<img src="Dyt1bs3faoPmbGxlIunjqKEUpxc" src-width="2874" src-height="1312" align="center"/>

<img src="BhTlb0sAfoquoixjEAdjJNV7pTc" src-width="2522" src-height="1102" align="center"/>

<b>套餐收费</b>

如果客户具有功能画像（比如同一个经纪人，同是现金账户，多个费用收费标准一致），可以使用套餐收费功能

一个客户只能绑定一个套餐

一个套餐里可包含多个收费场景

<b>新建套餐示例</b>

<img src="Z7vsbRhTao1ePex8HF8jmtuepoh" src-width="2852" src-height="1374" align="center"/>

<img src="Ik9ybIrlaoarAfxzOhujuYLypNo" src-width="2502" src-height="1096" align="center"/>

<img src="DW85bcKKPorkDTxbL2mjDv4Rpxe" src-width="2502" src-height="1096" align="center"/>

<b>客户计费查询</b>

该功能用于查询客户的收费信息

<b>优先级处理</b>

<b>特殊收费</b>(个性化收费&gt;普通套餐&gt;全局套餐)&gt;<b>普通收费</b>(个性化收费&gt;普通套餐&gt;全局套餐)

<img src="Vk73bqgjuo20oyxynasjdKxipQb" src-width="2502" src-height="1096" align="center"/>

<img src="KlGFbGTxSo8qGexbJZTjsyERpUg" src-width="2502" src-height="1096" align="center"/>

<img src="X8iObXRxPouBaWxa5xyjlt04p3c" src-width="2502" src-height="1096" align="center"/>

<img src="PRagb9AX8oWaOvxXbzPjwNRcpxe" src-width="2502" src-height="1096" align="center"/>

<img src="PVnZbmimzoTXbPxEb2jjiw5ypLh" src-width="2502" src-height="1096" align="center"/>

## 其它计费项目

```text
功能清单
```

<b>香港市场印花税豁免</b>

```text
配置注意事项
```

1. <b>资料自动更新</b>
    - 该栏位的资料将<b>自动从港交所获取</b>，并<b>每日更新</b>。

2. <b>资料修改指南</b>
    - 如发现资料有误，您可以在<b>清算计费步骤之前</b>修改标的资讯。请注意，所做修改将在次日被更新的资料覆盖，因此修改后请<b>务必联系Whale客户服务</b>反馈资料问题。

3. <b>适用范围限制</b>
    - 非香港市场的标的，该栏位将<b>不适用</b>。

4. <b>特定标的税收规则</b>
    - 以ETF/（ETF）和WT/（涡轮）开头的标的，将<b>强制不收取印花税</b>。

<b>配置案例</b>

<img src="RP2Rbe1MFoTr8dxiI0JjL4vBpKb" src-width="2878" src-height="1172" align="center"/>

<img src="XCmTbg3syoDoWvxRQN3jS0LTpBc" src-width="2878" src-height="1172" align="center"/>

<b>可交易债券利率配置</b>

```text
**功能清单**
```

<b>总开关</b>

```text
开启总开关后才会正式启用可交易债券的计息功能
```

<img src="Es4kbzijCo1aYwxlkZjjtlGbpSf" src-width="2502" src-height="1110" align="center"/>

<b>利率配置</b>

配置注意事项

```text
利息公布后务必及时更新日历


在派息日期-4个交易日内未更新利率的，可能会导致利息计算错误


必须一次性将所欲日历配置上，未来的派息日留空
```

配置的使用

```text
累计利息=数量*账面价格*上期派息利率*累计计息天数/一年天数


累计计息天数=交收日 - 派息日
```

系统针对配置的检查

```text
-7个自然日内，系统在清算前准备会兜底性检查


报错时如果未到派息日期-4个交易日的，可先手动通过


报错时如果已到派息日期-4个交易日的，建议先按上期利率更新且持续跟踪利息计算情况
```

新建利率信息案例

<img src="P6HybTCS9owK0OxP3wZjpAN2pqg" src-width="2502" src-height="1110" align="center"/>

<img src="XN20bXQLzo81DLxcZgxjX1kmpwh" src-width="2502" src-height="1110" align="center"/>

## 结单配置

### 结单模版设置

```text
路径：清算管理> 日终管理>结单管理>结单模板 


本作业可以管理结单标准格式的配置，包含 公司讯息/联络方式/责任说明 （以下为参考）
```

<img src="W7AVbfKlqokMVMxBADkjuVxvpkb" src-width="2484" src-height="1468" align="center"/>

<img src="FNcabcR9zovyGXxabUyjtqrrphP" src-width="2272" src-height="1438" align="center"/>

```text
在结单模版可进行社交媒体信息配置功能，配置后会在结单展示，若不配置，则不展示该栏位
```

<img src="RkuHbKY1EomgLoxEkT0j161fpTg" src-width="2908" src-height="1546" align="center"/>

```text
结单模板新增结单语言配置功能（支持 5 种语言设置方式）

- 跟随系统：跟随客户 app 设置语言进行展示
- 全局设定（英语）：所有客户结单均为英文
- 全局设定（简体中文）：所有客户结单均为简体中文
- 全局设定（繁体中文）：所有客户结单均为繁体中文
- 全局设定（繁体中文&英语）：所有客户结单均为双语（繁体中文+英文）
```

<img src="F0lnbMO2Ko8rghxPoxcj5LPapPf" src-width="2476" src-height="1420" align="center"/>

### 结单配置

```text
本作业用来配置管理：客户结单是否线下发送/是否接受邮件和 APP 通知/未配置的按线下发送为否/提醒全部开启处理 等配置项
```

<img src="WzM1bcxQDoCEBwxpr3HjDkKlpwb" src-width="3336" src-height="1400" align="center"/>

<img src="Tbg2bpmqNoDaNExnySAjEhhBpsb" src-width="3346" src-height="1414" align="center"/>

```text
在结单配置上增加来源栏位，方便定位结单配置修改来源


也支持批量新增功能，透过事先模版下载后上传来应用
```

<img src="Kio7bIrmLowDJ1xuc4mjWoNBpIf" src-width="3324" src-height="1412" align="center"/>

```text
新客户查询不到的，可新增发送方式
```

<img src="JFwPbyFJyow0fWxUnWvjrdwppJb" src-width="3364" src-height="1410" align="center"/>

### 客户备注

```text
路径：清算管理> 日终管理>结单管理>客户备注


提供一个客户结单备注的管理入口，方便针对某些特定客户结单增加备注说明


注意：若有需要增加客户结单备注，要在日终作业完成前，补录好客户结单备注后才能发生效用
```

<img src="FGEibBEBvoepN2xJlIDjF6ympsg" src-width="3116" src-height="1132" align="center"/>

可以点选右上角【新增备注】，根据需要新增 日结单/月结单 结单上对应客户备注

<img src="IU7Mbjx1Fosm4uxPb4rjFyUxpGg" src-width="3368" src-height="1462" align="center"/>

也提供批量结单模板导入的备注说明

<img src="UZy2brkshoua4fxF76EjhWmkpGh" src-width="3366" src-height="1460" align="center"/>

以下是备注参考模板：

<img src="EkqAbM3L3oN25txOiizjATLbp1e" src-width="1304" src-height="496" align="center"/>

可在列表页查询备注内容，进行二次编辑

<img src="U4DNbyOqKoDGRFxmFvvjuq9kp2g" src-width="3358" src-height="1240" align="center"/>

### DA 结单配置

```text
路径：清算管理> 日终管理>结单管理>DA 结单配置


DA 帐户开户后会默认配置为按 3 月/6 月/9 月/12 月这四个月生成月结单，结单模版为 DA 结单特殊模版。同时支持修改默认配置，修改后取最新配置
```

<img src="SCUqbJtrjomxM2xyFXQj2lB6pyg" src-width="3328" src-height="1454" align="center"/>

<img src="SLbnbaDrho3JGhxJ4fhjofzzpve" src-width="3346" src-height="1456" align="center"/>

# 三、市场清算（交易清算）操作说明

## 对手方文件转入（Broker Trade）

```text
路径：清算管理>文件处理>文件导入 


点击导入文件，上传文件
```

<img src="X6rSbtXf1oILLFx1gqTjy5LSpuh" src-width="3578" src-height="1798" align="center"/>

```text
选择文件并上传


例子：港股 CCASS 交易文件导入（CTF）。市场：选择港股，文件类型选择 CTF Trade File 后，上传文档
```

<img src="JcqwbgIEboVED8xQ7jpjhJwxpgg" src-width="3578" src-height="1798" align="center"/>

```text
可通过列表区域的状态字段关注文档导入和解析状态。解析成功才算处理完成
```

<img src="Aidfb5KFGoEX4PxfI9gjbbMgpRc" src-width="2910" src-height="1548" align="center"/>

## 清算前准备

```text
该功能的目的是检查执行日终任务前是否完成了相关配置和当天业务操作。市场清算和日终清算有不同的检查项目


市场清算完成交易文件导入，确认当前账务日期准确后，可点击执行清算前准备
```

<img src="HtaObih5eoDDyHxjP7Ajaevip2e" src-width="2852" src-height="1374" align="center"/>

```text
执行后，5 秒内会返回检查结果。全部检查都通过的，可以进行后续操作


检查报错的，点击检查项目右上角可查看检查项目的规则和操作指引


![image.png](/assets/f033fb5d65d7a79e0c051c521c7113e0.png)


部分检查会提供异常详情
```

<img src="YUyUbZnnxosWGQx3nHwjPLrTpZb" src-width="2852" src-height="1374" align="center"/>

```text
结算人员核对后，确认有问题的，在完成相关业务操作后，可点击“重新执行”
```

<img src="ZeLDb7Nc5oGwjMx2ZZYjHk5pp4d" src-width="2906" src-height="1558" align="center"/>

```text
结算人员核对后，检查项目可以允许通过的，可点击手动审核人工通过（需要复核）
```

<img src="ZNHfbdw7OovNIsxI2DxjH9PEpme" src-width="2904" src-height="1558" align="center"/>

```text
复核人员可点击手动审核（也可直接在工单审核），调出工单审核
```

<img src="YvPAbsHdgo3iR8xdafBj3IJrp4e" src-width="2920" src-height="1546" align="center"/>

<img src="Z1bHbi4BzopcEkxN5wPj7npJplf" src-width="2920" src-height="1550" align="center"/>

```text
结算人员核对后，因为业务流程有差别，需要永久关闭检查项目的，可以联系客服处理


  当审核通过后， 清算前准备就算完成（文字会提示： 已手动通过）
```

<img src="F2l7bOBRuo6qtLx8RKwjHSJopFb" src-width="2852" src-height="1374" align="center"/>

```text
清算前准备检查项目
```

## 市场清算<b>一键清算</b>

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键，系统会自动从第一步开始执行，一直到清算交收作业（ 当没有错误发生时，系统会自动续执行下个作业）

注意： 若有需要可点选 '暂停一键清算'，但系统会等当时作业执行完毕后，才开始暂停下一动作（功能键会变灰）

<img src="RrkPbbONdoXBvExa78LjLdwtpvf" src-width="2852" src-height="1374" align="center"/>

如果要进行后台补单，或者修正合约的，在清算计费步骤后进行。可在数据同步直接点击“暂停一键清算”

<img src="LLcLbXF3JorES0x4t8PjM9s6pNc" src-width="2852" src-height="1374" align="center"/>

<img src="N8HabIDYxoYF4LxVmwtju1ShpPc" src-width="2852" src-height="1374" align="center"/>

```text
中间若有作业执行错误，则一键清算将会暂停，并停在相关错误的作业程序上，用户可以参考错误讯息提示进行后续修正处理
```

<img src="ApSdbZFH5oLNBGxHaL8jIugIpih" src-width="2908" src-height="1554" align="center"/>

```text
此时可根据业务需要手动点选右侧下方相关的作业操作，来检查或修正纪录或著 往下一键算操作，系统会自动执行下一个作业


注意： 在一键清算过程中，可以依赖系统的一键清算操作（自动执行所有作业），也可以自行 点选作业自行操作
```

<img src="TZtRbusJao9JVTxlvBdjQ9rHpTf" src-width="2922" src-height="1556" align="center"/>

### 数据同步

```text
点击执行后会同步系统数据（交易、日切点前的出入金、交易、开户等数据）
```

### 清算前检查

```text
在日终流程中点击清算前检查步骤会：自动触发当日的交易对帐


交易对帐失败的，可快速跳转到交易对账界面（清算管理-市场清算-清算检查-交易对账）查询结果
```

<img src="Z8fabB0Yuo1N1ExO5DBjvaHFpRU" src-width="2852" src-height="1374" align="center"/>

<b>对帐结果查询</b>

```text
可在**清算检查-交易对账**页面分别查询各市场的交易对帐


每次点击检查会生成最新的检查结果，只需要维护最新的检查结果


可在**交易对帐**页面查询交易对帐的差异明细、对帐总览讯息；


点击本端档案可查询本端明细；点击对手端档案可查询对手端明细
```

参考图示如下：

<img src="O6edbvnvOoVxX8xEsGQjUvgZpoh" src-width="3566" src-height="1732" align="center"/>

<b>特殊场景手动通过</b>

```text
对手端档导入错误：在档导入介面，重新导入对手端档，然后重新点击清算前检查 


本端订单错误：增、删、改前台订单后，重新点击清算前检查 


按系统数据处理：在“检查结果”（清算管理-市场清算-清算检查-检查结果）中，将对应的检查结果改为“通过”，然后重新点击清算前检查
```

<img src="UITobHkrgoWHxUxz7uYjrrxlpFb" src-width="2920" src-height="1552" align="center"/>

### 清算计费

```text
在清算计费步骤会生成前台合约，状态为待计费


该步骤暂停执行的，可以编辑前台订单的收费
```

### 清算入帐（已清算交收合并）

```text
执行完毕后：


    根据计费帐单，股票本金和手续费作业务帐户处理


    合约状态变由计算完成更为待交收


    系统会生成 SDR018 系列报表


注意 1：后台补单必须在该步骤之前操作完成


注意 2：清算撤销（资产处理选择不处理的）后，此步骤已经完成的，清算计费和清算入帐为空跑，按原资料处理
```

### 清算交收

```text
执行后：


    根据合约和调帐等其他流水进行仓位处理


    对应日期的合约变更为交收完成


    生成仓位数据


    生成 ATI 等指令


    生成临时持仓，用于处理公司行动
```

# 四、日终清算（非交易清算）操作说明

## 清算前准备

```text
在正式执行日终清算前，需要先执行清算前准备


    必须在完成所有的市场清算后再操作


    检查是否完成了当天所有的业务操作


    操作方式同市场清算，详见上文
```

## 日终清算一键清算

```text
当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键


系统会自动从第一步开始执行，一直到结单生成步骤


结单后可通过报表或者结单进行检查
```

<img src="ZOtJbrihAoaR4HxCyRkjVfAqpJg" src-width="2852" src-height="1374" align="center"/>

### 数据汇总

```text
此操作前需要完成流水日期调整，证券组合费/融资利息的提前归本、金额调整


此操作加工多个市场的交易数据、调帐数据、出入金、收盘价等文件，可重复点击


数据汇总后操作流水日期调整、收盘价，需要重新点击数据汇总
```

### 清算中检查

```text
内部流水对帐、业务操作检查等（不断扩充中）


为内部数据检查，有异常的可联系客服


清算中检查手动通过的操作方式类似交易对帐
```

<img src="IIl4bybeiohDWdxgh81jG8zCpbh" src-width="2846" src-height="1418" align="center"/>

### 资金清算

```text
执行融资利息计算、证券组合费、融券计算等任务
```

### 清算后检查

```text
内部流水对帐、业务操作检查等


为内部数据检查，有异常的可联系客服


清算中检查手动通过的操作方式类似交易对帐
```

### 结单生成

<img src="Mr6Hbqu6kotFidxH1majM1vwpcb" src-width="3364" src-height="1452" align="center"/>

<img src="AWBybDQiMoPG3uxBnnYj7BrVpOf" src-width="3304" src-height="1452" align="center"/>

```text
可以点选右侧记录区对结单【重发】或【下载】
```

<img src="DpO5b8NN2onG3Vxiv8QjKEpopvc" src-width="3360" src-height="1460" align="center"/>

```text
也可产生一份临时结单，在临时结单视窗输入对应客户与结单日期。·临时结单支持跨月，支持最早时间 1 年、最大时间跨度 3 个月的临时结单
```

<img src="YRywbJaAko6YjIxrYbBjHoYCpjD" src-width="3340" src-height="1368" align="center"/>

<img src="UIbUbwMLdo9sgjxViURjuZA5p8c" src-width="3362" src-height="1368" align="center"/>

### 日切

```text
执行完日切流程后，当前系统帐务日会切换到下一日。进行了融资利息等的结算操作，触发了经纪人分成计算的任务
```

# 五、交收指令导出

```text
T+2日的早上可导出ATI交收指令，上传到CCASS


路径：清算管理-日终任务-交收指令导出


支持导出未来日期的文件


支持导出HK、SZ、SH多市场
```

<img src="Nj0BbBOcRoBKNfxnS5jjXNwGpGd" src-width="3574" src-height="1774" align="center"/>

<img src="RDzgbBXUBouFPGxQbJvjCOm9pUd" src-width="3574" src-height="1774" align="center"/>

# 六、持仓对帐

```text
在文件导入界面可导入持仓文件，部分文件可直接系统触发对帐处理
```

<img src="XkeXb5IOUoxYihxJFMVjqmsdpMe" src-width="3350" src-height="1456" align="center"/>

```text
导入后并触发系统对帐处理后，对帐结果为进行中


对帐任务执行完毕后，对帐结果为不平帐或平帐
```

<img src="OqVSb41LyojBLDxiAwrjk8RTpUz" src-width="2930" src-height="1554" align="center"/>

```text
点击重新对帐也可（重新）触发系统对帐。支持触发历史日期对帐
```

<img src="LkgWbAr8lonHvYxWN8AjRl4tpuh" src-width="2914" src-height="1526" align="center"/>

# 七、非交易流水编辑日期

```text
本作业主要是市场清算后，若想要改变原本日终所计算的流水入帐日期，也就是进行资金/持仓的流水日期调整，新机制下通过修改前台帐户日期实现


路径：清算管理  > 市场清算  > 流水管理
```

## 单笔流水日期编辑

```text
资金和持仓流水需要在不同页面 Tab 上操作，找到流水纪录点击编辑
```

<img src="UJZsbxsDXo8snixzngDjLMwRp3c" src-width="3578" src-height="1798" align="center"/>

```text
输入需要处理的日期
```

<img src="R1iybyxYQo6aEDxxsC0jV0Otpxg" src-width="3368" src-height="1308" align="center"/>

```text
观察编辑号的帐务日期，看是否生效
```

<img src="E4aSbH12sos7QWxmYtgjT9hnp8c" src-width="3368" src-height="1308" align="center"/>

```text
在日终任务中重新点击数据汇总
```

## 批量流水日期编辑

```text
先选中流水纪录，然后点击批量编辑帐务日期
```

<img src="BG2UbWLWTo6CPHx1AISjB4Gqpyh" src-width="3344" src-height="1456" align="center"/>

```text
在日终任务中重新点击数据汇总
```

## 通过业务码批量编辑日期

```text
注意：批量调整日期的，需要事先确认该业务码是否支持编辑，边界后需要在页面观察最终结果
```

<img src="VXQsbHMQKoWXCwxWFCYjePIcpbh" src-width="3356" src-height="1344" align="center"/>

## 更新数据

```text
流水同步为准实时。提交后，可刷新当前账务日期的全部数据。
```

<img src="Wechbd70Aoeu9wx4svcjg1VIpHd" src-width="3578" src-height="1798" align="center"/>

# 八、后台客户<b>合约补单和券商快捷补单</b>

```text
提供新增客户补单与劵商快捷补单的合约记录功能，这个补单就是业务上所谓的 Client trade 与 Broker trade 补单


在清算计费步骤前补录客户合约


上手合约（代理商合约）单是建立在合约基础上进行相关补单操作


上手合约（代理商合约）需要在清算前检查步骤前操作
```

## 后台客户合约补单

```text
点击新建客户补单
```

<img src="L2qsbE037oQI3Jxhx34j8T3DpRb" src-width="3008" src-height="1494" align="center"/>

```text
先补充基础信息，系统会自动进行部分字段的试算（可人工进一步修改）
```

<img src="IIgnb7WVjo1I7txjmTJjjvyhpc7" src-width="3008" src-height="1494" align="center"/>

```text
系统已支持历史交易日补单（最多前 5 个交易日），补单后交易日期为历史日期，帐务日期为当日
```

<img src="Ik1IbtQVSoeSVOx4KRtj2PpEpOd" src-width="3008" src-height="1594" align="center"/>

```text
提交后数据有错误，可进一步编辑后台合约的基础信息
```

<img src="VOesbzBaeolHLPxeJGwjPCqbpJH" src-width="3008" src-height="1494" align="center"/>

<img src="C6ZKb19QnouW3xxJnX2jcPyXprh" src-width="3008" src-height="1494" align="center"/>

点击计费可以自动计算费用

试算后可进一步编辑费用，详见费用查询和编辑

注意：只要操作过计费、添加、编辑的，即使删除了全部费用，在清算计费步骤中不会再计算费用；如果在费用信息页面未进行过任何操作的，在清算计费步骤会自动基于配置的规则计算费用

<img src="Z5tSbfc6XoeVT8xL1WdjTOSWp1d" src-width="3008" src-height="1494" align="center"/>

```text
若商品是 OTC 产品或者交易通道未进行系统对接的，则结算渠道要对应选择 OTC 结算渠道
```

<img src="VukrbjAnSo56XAxSKjkjV5RxpYe" src-width="3008" src-height="1594" align="center"/>

```text
OTC 补单系统会按大账号自动计算托管商、子仓


托管商、子仓可进一步编辑，详见仓位信息查询和编辑
```

<img src="Tj0NbNVPfooxGLxsqOVj5nQYpNb" src-width="3008" src-height="1494" align="center"/>

## <b>券商快捷补单</b>

```text
在完成所有客户合约补单后，可以透过右上【劵商快捷补单 】操作劵商补单


注意：券商快捷补单仅能查询结算渠道为 OTC 的数据，生成的数据用于清算前检查步骤的交易对帐
```

<img src="UaHvb5ejJoh7fUxBvPOjrTsOpPc" src-width="2898" src-height="1520" align="center"/>

<b>机构合约（代理商合约）提前试算</b>

```text
选择所有筛选条件，点击试算机构费用并刷新，系统会自动计算代理商费用（详见后文机构合约操作说明）
```

<img src="FiFIbUVRQo9sC0xUxOJj47BzpEc" src-width="2914" src-height="1098" align="center"/>

<b>更新对手方文件</b>

```text
初步核对数据，有问题的修改客户合约后，重新进入页面并刷新


操作人员也可以先点击编辑，临时调整数据。注意：此编辑不能保存在数据库中，仅配合“更新对手文件”按钮使用
```

<img src="CmmHbiwn3o1r2ExtyGMj5QODpRh" src-width="2926" src-height="1554" align="center"/>

```text
核对无误后，200 条以内数据，可点击更新对手文件，该文件可用于清算前检查的交易对账
```

<img src="IdHRbtDOiozpfxxU5X4jnWU1pTf" src-width="2922" src-height="848" align="center"/>

```text
200 条以上的数据，可下载模板文件，编辑后在清算前检查步骤前导入文件
```

<img src="B9s4bXXWpoEMdQxq1opjL109pqJ" src-width="2920" src-height="838" align="center"/>

<img src="FrILbtKEgolzqaxbL4tj5cUJpIh" src-width="2904" src-height="1542" align="center"/>

# 九、<b>查询和编辑前台交易合约</b>

```text
在操作清算计费步骤后，系统会基于前台交易订单、计费管理配置生成客户合约


点击详情可查看客户合约的详情


前台合约只支持编辑费用信息、IBOND 累计利息、结算币种、仓位信息


前台合约的其它字段如果有问题，需要先修改前台合约数据，再依次执行清算前检查和清算计费步骤
```

<img src="NZKzbAmf0oKaFJxRlmTj0u8fpbg" src-width="2456" src-height="1242" align="center"/>

<img src="IhVmbEayrofpTAxVsFrjA71jplb" src-width="2484" src-height="1530" align="center"/>

```text
进入详情页直接展示含交易日期、交收日期、特殊收费条件在内的基本信息


    数据来源是“交易”的为前台合约
```

<img src="IXXzbJk09owT47xhO6njZWucple" src-width="2486" src-height="1544" align="center"/>

## 结算币种编辑

```text
在基础信息点击编辑
```

<img src="YlAXbgAv0ofvmTxsK8OjibK2pnf" src-width="2486" src-height="1502" align="center"/>

```text
同时修改结算币种和汇率并提交


系统会根据汇率和结算币种计算累计利息（结算币种）、交易金额（结算币种）、费用（结算币种）


系统会按结算币种进行扣费和交收
```

<img src="G0rzbmU37o8EWSxBaOzjIFMbpfb" src-width="2512" src-height="1558" align="center"/>

## 成交纪录查询

```text
点击成交记录可展示成交记录
```

<img src="Upltb7IMJon3N1xgHymjkIJQpvT" src-width="2480" src-height="1542" align="center"/>

## IBOND 累计利息编辑

```text
在成交记录中，可以点击编辑，修改累计利息
```

<img src="Ugfkb5ib8o9adKxSxe2jM85xp6d" src-width="2500" src-height="1556" align="center"/>

## 费用查询和编辑

```text
点击费用信息可展示收费明细
```

<img src="B4mybwFc5olSd6xAro5jCbhNpOe" src-width="2488" src-height="1526" align="center"/>

点击试算会重算全部费用

<img src="Edd1bOtipoqcoRxB1kYjs8imphg" src-width="2480" src-height="1536" align="center"/>

点击添加可以增加费用，增加收费类型不能和已有的重复

<img src="KTDZbUnkSooZ2cxP82Cj549cpHv" src-width="2894" src-height="1548" align="center"/>

点击删除可以删除费用

<img src="BH0xbSykEobJ5pxTJ7nj8LKhpEf" src-width="2892" src-height="1538" align="center"/>

点击编辑可以修改费用

<img src="Zgfoblt1ioAnnjxysa5jiYe3pSf" src-width="2916" src-height="1538" align="center"/>

## 仓位信息查询和编辑

```text
点击仓位信息可查询仓位数据
```

<img src="I6T3bJRpbofmP1xBmUPjUAQGp3g" src-width="2900" src-height="1552" align="center"/>

```text
点击编辑可修改托管商和子仓
```

<img src="XuOEbFzP3oOqoixmqjUjTJospNg" src-width="2914" src-height="1544" align="center"/>

# 十、提前交收

```text
若在 T+2（N） 时有提早交收的入帐操作，方便客户可以提早操作资金相关处理


路径：清算管理> 市场清算>交收系统>交收批次 Tab 页签


点选【提前交收】，输入欲提早交收的市场（可多选）
```

<img src="N7epb8y9ioHpHdxtcIWjxYw5p4c" src-width="3364" src-height="1450" align="center"/>

```text
操作后可观察交收批次是否处理完毕
```

<img src="JGyabAg9soU17Sxma5HjgmnUpvc" src-width="2516" src-height="740" align="center"/>

# 十一、仓位调整

```text
路径：清算管理> 日终管理>仓位管理>仓位查询
```

## 子仓位置调整

```text
查询出对应的客户记录后，在右侧记录区点击【**编辑仓位**】
```

<img src="R7uxb1KLVoqwwtxuMgLj4KQbpTd" src-width="2924" src-height="1546" align="center"/>

```text
此处根据实际数据来调整子仓位置（子仓位置之后必须和持仓保持一致）
```

<img src="RRADbOlM0o0GYSx19hEjr28VpXc" src-width="2914" src-height="1538" align="center"/>

```text
调整后会在仓位流水页面（Tab 页签）生成一条调整记录
```

<img src="Wt7AbTjsnoHsD3xR1lLj3uWlpIc" src-width="2892" src-height="1022" align="center"/>

## 内部转仓

```text
查询出对应的客户记录后，在右侧记录区点击【**内部转仓**】
```

<img src="HOOpbSuZ3oErUxxT3vMjzynWpCh" src-width="2920" src-height="1548" align="center"/>

```text
调整后会在仓位流水页面生成两条调整记录
```

<img src="QfY6bJ391oFYHwxSOBBjQO7OpPe" src-width="2922" src-height="1236" align="center"/>

## 批量调整

```text
可以根据事先下载模板，进行批量调仓
```

<img src="LyPpbopJwojZGnxlFj2jnJlVpQi" src-width="2052" src-height="640" align="center"/>

<img src="C6JqbEmCLoYhVkxIOJHjHHkHpfb" src-width="2926" src-height="1556" align="center"/>

# 十二、融资利息调整

## 融资利息查询

```text
可在融资利息账单页面查询每个客户的融资利息收费详情


    当期账单=抵扣后金额 + 已调整利息


    抵扣后金额=抵扣前金额 + 抵扣金额
```

<img src="YS9cbDQZIoB3tKxe2cHj2gZGpf0" src-width="2910" src-height="1544" align="center"/>

```text
点击抵扣后金额可查询每日的融资利息明细
```

<img src="K3qrblWKwod0anxJv1UjPnqQpuh" src-width="2910" src-height="1554" align="center"/>

<img src="DQaQbx5xToT3sgxLDuhjCroCpKh" src-width="2898" src-height="1522" align="center"/>

## 融资利息调整

注意：日切期间（第一次击数据汇总后-日终流畅点完日切）不能操作利息调整

点击调整可调整融资利息

<img src="Un3sbp1c7o5LVcxifFAjRc4hp6e" src-width="2910" src-height="1528" align="center"/>

```text
按本金调整：系统将根据输入的本金自动计算需要调整的利息
```

<img src="MqvMbWimaoIYAdx6NaKjK78rpTf" src-width="2914" src-height="1548" align="center"/>

```text
按结果调整：系统将根据输入的该日利息总额，自动计算需要调整的利息
```

<img src="CxVCbOPQGoynQtxwlGHjV5lwp4c" src-width="2928" src-height="1558" align="center"/>

```text
按发生额调整：系统将根据输入额，调整利息。按发生额调整支持同时修改多天
```

<img src="TGpBbxMEGowLJmxohSojt2ZGpBh" src-width="3008" src-height="1494" align="center"/>

```text
调整的流水可在**差错流水**页面查询
```

<img src="IiJtbeKYToaAmlxzs1Ajv7vgplC" src-width="2482" src-height="1406" align="center"/>

```text
特殊情况，未生成融资利息帐单的，可先新增帐单，再调整
```

<img src="A1GKbX6iSoBzyaxhBUQj62mGpDb" src-width="2912" src-height="1550" align="center"/>

## 批量调整

```text
可按照发生额调整进行批量处理
```

<img src="XcSnb7pU6o9kOXxMAoBj5L9Yphe" src-width="3578" src-height="1798" align="center"/>

## 提前结算

```text
注意：日切期间（第次击数据汇总后-日终流畅点完日切）不能操作提前结算


筛选客户，点击提前结算
```

<img src="JliqbdCKyoxzLzx5h4NjNUnxpS2" src-width="2900" src-height="1546" align="center"/>

# 十三、收盘价临时编辑

```text
有持仓的股票会展示在收盘价管理页面


路径：清算管理  >  市场清算 >  收盘价管理


前置条件：已经完成日终任务-清算交收/数据汇总 这个流程节点
```

<img src="Jk3wboeTFokkc5xf2F4jkrcjpsh" src-width="3362" src-height="1342" align="center"/>

```text
需要临时修改清算收盘价的可点击编辑
```

<img src="O4cYbp9odovczfxpktNjNYiOpSg" src-width="3460" src-height="1555" align="center"/>

```text
修改收盘价并提交


提交后，需要重新再执行一次数据汇总


如果是清算前准备报错的，可先执行清算交收，然后重新执行清算前准备
```

# 十四、清算撤销

```text
选择需要撤销的日期，点击清算撤销，根据实际需要，选择撤销项目，并提交


注意 1：该任务为异步操作，可能须等一点时间


注意2：仅能 操作 T 日与 T-1 日的清算撤销操作


注意3：操作连续撤销的，必须按顺序进行撤销


点击新建清算撤销
```

<img src="KfkMbOXDJoJOhPx3ANrjqagipgd" src-width="3578" src-height="1798" align="center"/>

```text
根据撤销场景选择实际项目
```

<img src="IDp1bs1Dio5cLFxponcjUdeXpPg" src-width="3578" src-height="1798" align="center"/>

```text
提交后，可在列表页关注撤销
```

<img src="JPDIbECVNo59KNxI2fSjZoWlpQc" src-width="3578" src-height="1798" align="center"/>

- 场景：日切点后调账，下一日的流水改到当日
日切点后调账，当日的流水调整到下日
资金清算后，调整收盘价
    <img src="M83MbqSCQohXA8xuvOqjaXlKpLe" src-width="3020" src-height="1452" align="center"/>
    - 清算撤销表单

- 场景：日切前发现计费（合约收费、补单）有问题需要调整
    <img src="Eo02bFIC7oKpL3xKuBzjhsPHpXd" src-width="3020" src-height="1452" align="center"/>
    - 清算撤销表单

- 场景：月底融资利息结算异常
例子：某客户的融资利息需要调整后再结算
    <img src="Iv18baA1UoqaNAxmrcJjcMiZpwA" src-width="3020" src-height="1452" align="center"/>
    - 清算撤销表单

- 场景：台风天已经进行提前交收，需要撤销
    <img src="HqHpbvfR9o7rF2xUTq7jDaU0p5e" src-width="3020" src-height="1452" align="center"/>
    - 清算撤销表单

- 场景：日切后发现计费有问题需要调整
量大的券商建议联系客服技术介入
    <img src="HZnybtOcloC87Txdp5ij0M8pp4f" src-width="3020" src-height="1452" align="center"/>
    - 清算撤销表单

# 十五、台风天处理

```text
台风天 8 号风球处理


路径：清算管理 > 市场管理-台风天处理
```

## 台风天全日市

```text
场景：9 月 2 日为台风天，港股交收整体延后


    选择需要处理的账务日期（如 9 月 2 日），需要处理的市场（HK）


    操作时可操作钱货同时延后，或者仅钱延后


    提交后：所有待交收的货（钱）都会延后一个帐务日期进行处理，点击完「确定」后更新版面
```

<img src="AMGtbK4fFoFivSxWKkjjXUC8pQd" src-width="3578" src-height="1798" align="center"/>

```text
在日切点前需要操作日终的，日终任务点击提前日切。最终支持在下午2点半后操作。推荐在下一日进行操作


注意：提前日切按钮需要配置工单审核来操作
```

<img src="UsRzbbbHKopxnJxkr6xjjQA7psf" src-width="3332" src-height="1192" align="center"/>

<img src="UaBAbVOi2ovr2dxJOj5jbZnepjb" src-width="3368" src-height="1172" align="center"/>

## 台风天半日市

上午有交易，下午没交易的，选择钱延后

<img src="Ik0AboF3oougw2xFy3Djj6ifpyc" src-width="1280" src-height="643" align="center"/>

