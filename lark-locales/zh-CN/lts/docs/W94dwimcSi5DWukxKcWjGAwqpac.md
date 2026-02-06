---
title: 快速上手
slug: W94dwimcSi5DWukxKcWjGAwqpac
sidebar_position: 1
---


# 快速上手

[Document original - 原始文档](https://longbridge.larkenterprise.com/docx/YoAzdNPCvo1S5sxjAjUcDNzynCc)

Creator - chuanyuan.chen@longbridge-inc.com

---

## 适用场景

直联港交所的租户（EP模式）

券商只有港股市场

## 前置条件

您需要获取以下授权后方可正常使用系统功能

<table header_row="1">
<colgroup>
<col width="269"/>
<col width="100"/>
</colgroup>
<thead>
<tr><th><p>权限名称</p></th><th><p>权限说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>ChargingFull  管理市场清算、日终、合约的权限<br/>ChargingReadOnly 只读市场清算、日终、合约的权限<br/>ChargingFileProcessingFull  管理文件导入、导出、快捷导入的权限</p></td><td></td></tr>
</tbody>
</table>

## 操作说明 

### 导入交易文件

在下午16:10分之后，导入CTF Trade File

路径：清算管理  &gt; 市场清算  &gt;文件导入

点击导入文件，上传文件

<img src="/assets/K3FDbTeQFoGkOAxxd6KjuHSPplc.jpeg" src-width="3578" src-height="1798" align="center"/>

可通过列表区域的状态字段关注解析状态， 解析成功才算处理完成

<img src="/assets/EozjbLTqHo2gT7xaw3RjSGr3pEd.jpeg" src-width="3548" src-height="1806" align="center"/>

### 市场清算(交易清算)

完成交易文件导入,可操作市场清算

路径：清算管理-市场清算-日终任务

#### 清算前准备

该功能的目的是检查执行前是否完成了相关配置和当天业务操作

确认当前账务日期准确后，可点击执行清算前准备

注意：如果只有港股市场，在初始化设置时可隐藏欧美市场清算

<img src="/assets/P9rkbBufKoLbrRxa4LTjlpS8pDf.jpeg" src-width="2908" src-height="1540" align="center"/>

执行后，5 秒内会返回检查结果。全部检查都通过的，可以进行后续操作

检查报错的，点击检查项目右上角可查看检查项目的规则和操作指引

<img src="/assets/WCa9blTwxo8NgixsZtFj33fvpbb.jpeg" src-width="2906" src-height="1548" align="center"/>

部分检查会提供异常详情

<img src="/assets/C2AabZCQfoPDG0xcmZJjX8J2pLf.jpeg" src-width="2904" src-height="1540" align="center"/>

结算人员核对后，确认有问题的，在完成相关业务操作后，可点击“重新执行”

<img src="/assets/OEFmb2wploU3nzxPCrhjd835pBg.jpeg" src-width="2906" src-height="1558" align="center"/>

结算人员核对后，检查项目可以允许通过的，可点击手动审核人工通过（需要复核）

<img src="/assets/WHUHbG43RodUWoxd5vgjjitipWb.jpeg" src-width="2904" src-height="1558" align="center"/>

复核人员可点击手动审核（也可直接在工单审核），调出工单审核

<img src="/assets/ZBWJbn1KaoffNqx3jzmjucOopSb.jpeg" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/NrdfbGMbTomnpLxcfmUjkURRpwe.jpeg" src-width="2920" src-height="1550" align="center"/>

结算人员核对后，因为业务流程有差别，需要永久关闭检查项目的，可以联系客服处理

<img src="/assets/Hx3FbpmQioIL9CxJXwxjzvAmpYg.jpeg" src-width="2926" src-height="1556" align="center"/>

当审核通过后， 清算前准备就算完成（文字会提示： 已手动通过）

<img src="/assets/BX05bRxVKoplanxoEKAjjsQCp2f.jpeg" src-width="2926" src-height="1558" align="center"/>

#### 市场清算<b>一键清算</b>

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键，系统会自动从第一步开始执行，一直到清算交收作业（ 当没有错误发生时，系统会自动续执行下个作业）

注意： 若有需要可点选 '暂停一键清算'，但系统会等当时作业执行完毕后，才开始暂停下一动作（功能键会变灰）

<img src="/assets/CUTrbuJAJox2KSxoqGYj7b3Wp0g.jpeg" src-width="2916" src-height="1546" align="center"/>

如果要进行后台补单，或者修正合约的，可在数据同步直接点击“暂停一键清算”，然后逐步执行，防止错过暂停时机

<img src="/assets/DLKObOkyroppUtxCzt7j0Wc6p5c.jpeg" src-width="2922" src-height="1548" align="center"/>

中间若有作业执行错误，则一键清算将会暂停，并停在相关错误的作业程序上，用户可以参考错误讯息提示进行后续修正处理

<img src="/assets/EcXAbWFLfojVdtxTPH0jPFoXpid.jpeg" src-width="2908" src-height="1554" align="center"/>

此时可根据业务需要手动点选右侧下方相关的作业操作，来检查或修正纪录或著 往下一键算操作，系统会自动执行下一个作业

注意： 在一键清算过程中，可以依赖系统的一键清算操作（自动执行所有作业），也可以自行点选作业自行操作

<img src="/assets/I7S1bOGU1olYbkxtPd0jRgZGpxh.jpeg" src-width="2922" src-height="1556" align="center"/>

<b>日终数据同步（Client Trade）</b>

执行后会同步系统数据，含交易、日切点前的出入金、交易、开户等数据

<b>清算前检查（Trade Match）</b>

执行清算前检查步骤会自动触发时当日的交易对帐

交易对帐失败的，可快速跳转到交易对账界面查询结果

<img src="/assets/ZS0vb1mIKobwh8x08vjjttBspAb.jpeg" src-width="2904" src-height="1544" align="center"/>

可在清算检查（路径：清算管理-市场清算-清算检查-交易对账）页面分别查询各市场的交易对帐

每次点击检查会生成最新的检查结果，只需要维护最新的检查结果

<img src="/assets/VNywbuQ2Moh99Qx4JAIjefprppe.jpeg" src-width="3566" src-height="1732" align="center"/>

对手端档导入错误：在档导入介面，重新导入对手端档，然后重新点击清算前检查 

本端订单错误：增、删、改前台订单后，重新点击清算前检查 

按系统数据处理：在“检查结果”（ 路径：清算管理-市场清算-日终任务-清算检查-检查结果）中，将对应的检查结果改为“通过”，然后在日终任务页面重新点击清算前检查

<img src="/assets/VOSubv4f1o3eEFx97TQjzSFVpHu.jpeg" src-width="2920" src-height="1552" align="center"/>

<b>清算计费</b>

在清算计费步骤会生成前台合约，状态为待计费

该步骤暂停执行的，可以编辑前台订单的收费

<b>清算入帐</b>

根据计费帐单，股票本金和手续费作业务帐户处理，合约状态变由计算完成更为待交收，系统会生成 SDR018系列报表

注意 1：后台补单必须在该步骤之前操作完成

注意 2：清算撤销（资产处理选择不处理的）后，此步骤已经完成的，清算计费和清算入帐为空跑，按原资料处理

<b>清算交收</b>

根据合约和调帐等其他流水进行仓位处理

对应日期的合约变更为交收完成

生成仓位数据

生成 T+2的ATI 等交收指令

生成临时持仓，用于处理公司行动

### 日终清算（非交易清算）

完成市场清算后可操作日终清算

#### 清算前准备

在正式执行日终清算前，需要先执行清算前准备

必须在完成所有的市场清算后再操作，主要检查是否完成了当天所有的业务操作

操作方式同市场清算，详见上文

<img src="/assets/NfzzbFuSWoZi0JxpMUKjvd2wpFb.jpeg" src-width="2492" src-height="1412" align="center"/>

<img src="/assets/Ct1cbhN3soleWixN2eXjj4jbppc.jpeg" src-width="2434" src-height="1418" align="center"/>

#### 日终清算一键清算

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键

系统会自动从第一步开始执行，一直到结单生成步骤

结单后可通过报表或者结单进行检查

<img src="/assets/PZBJbIygVoxnrfxHQ03jIAuYpje.jpeg" src-width="2912" src-height="1522" align="center"/>

<b>数据汇总</b>

此操作前需要完成流水日期调整，证券组合费/融资利息的提前归本、金额调整

此操作加工多个市场的交易数据、调帐数据、出入金、收盘价等文件，可重复点击。数据汇总为全市场最后一次同步日终数据；全市场最后一次仓位处理，生成完整仓位数据

数据汇总后操作流水日期调整、收盘价，需要重新点击数据汇总

<b>清算中检查</b>

内部流水对帐、业务操作检查等

检查可重复触发，排除问题后可重新触发检查

<b>资金清算</b>

执行融资利息计算、证券组合费、融券计算等任务

<b>清算后检查</b>

清算后检查主要检查资金清算步骤的执行状况

<b>结单生成</b>

点击结单生成后，可生成结单

结单已发送的，不能重新生成

<b>日切</b>

执行完日切流程后，当前系统帐务日会切换到下一日

融资利息等的结算操作

进行经纪人分成计算

### 结单发送

结单生成步骤后即可操作结单发送

路径：清算管理&gt; 日终管理&gt;结单管理&gt;结单查询

<b>系统支持在日切步骤汇总进行结单自动发送,但须事先配置,请联络Whale 客服</b>

<img src="/assets/UXabbsy3fo0aVEx4wsNjW9Bophh.jpeg" src-width="3364" src-height="1452" align="center"/>

<img src="/assets/Jo0tbCSXJomNWrxjwK4ju6h0pVL.jpeg" src-width="3304" src-height="1452" align="center"/>

可以点选右侧记录区对结单【重发】或【下载】

<img src="/assets/KgawbCqakoTg1Fxr6VvjMvEsped.jpeg" src-width="3360" src-height="1460" align="center"/>

### ATI 指令导出

T+2日的早上可导出ATI交收指令，上传到CCASS

路径：清算管理-日终任务-交收指令导出

支持导出未来日期的文件

支持导出HK、SZ、SH多市场

<img src="/assets/In6eb57VsonWjJxWEjoj5HQPp2c.jpeg" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/X9KEbr95SoghLqxMJhMjMXUNphf.jpeg" src-width="3574" src-height="1774" align="center"/>

### 持仓对帐

T+1上午，在文件导入界面可导入CCASS持仓文件，进行持仓对账

导入后系统将自动触发对账

<img src="/assets/Qx7gb2b8moKebMxjkXXjxZHApKf.jpeg" src-width="3350" src-height="1456" align="center"/>

导入后并触发系统对帐处理后，对帐结果为进行中

对帐任务执行完毕后，对帐结果为不平帐或平帐

<img src="/assets/IrMpbyZ2mo1buExcEdNjjHHbpcd.jpeg" src-width="2930" src-height="1554" align="center"/>

点击重新对帐也可（重新）触发系统对帐。系统支持触发历史日期对帐

<img src="/assets/HkGMbLpgsoDDgexnQJJjcfiwp0e.jpeg" src-width="2914" src-height="1526" align="center"/>

