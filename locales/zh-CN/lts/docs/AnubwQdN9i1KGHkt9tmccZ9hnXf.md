---
title: HKIDR 操作文档
slug: AnubwQdN9i1KGHkt9tmccZ9hnXf
sidebar_position: 3
---


# HKIDR 操作文档

# <b>1.设置 HKIDR 参与者</b>

配置 HKIDR 的参与人信息

<img src="/assets/KDjrbqYydolAqVxkNfsc31zonjh.png" src-width="425" src-height="155" align="center"/>

路径：在「客户管理系统＞账户管理＞BCAN 码管理＞参与者管理」

<img src="/assets/L5YSbP68Aof2qXx9AwLcTAZxnme.png" src-width="425" src-height="234" align="center"/>

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p><b>港股 EP 模式</b></p></td><td><p><b>港股 Non-EP 模式</b></p></td></tr>
<tr><td><p>新增一条参与者记录：</p>
<ul>
<li>参与者名称：选择当前租户选项；</li>
<li>类型：选择‘House’选项；</li>
<li>BCAN 类别：选择‘CCEP&amp;TTEP’选项；</li>
<li>参与者编号：手动输入 Firm ID；</li>
<li>中央编号：手动输入 CE number；</li>
</ul></td><td><p>新增两条参与者记录</p>
<ul>
<li>参与者名称：选择当前租户选项；</li>
<li>类型：选择‘House’选项；</li>
<li>BCAN 类别：选择‘TTEP’选项；</li>
<li>参与者编号：手动输入 Firm ID；</li>
<li>中央编号：手动输入 CE number；</li>
<li>参与者名称：选择&#39;lb&#39;选项；</li>
<li>类型：选择‘Third’选项；</li>
<li>BCAN 类别：选择‘CCEP’选项；</li>
<li>参与者编号：手动输入 Firm ID=‘2195’；</li>
<li>中央编号：手动输入 CE numbe=‘BPX066’；</li>
</ul></td></tr>
</tbody>
</table>

# <b>2.设置 BCAN 区间</b>

<img src="/assets/HxltblUffocwObxkbzncFJNCnAd.png" src-width="425" src-height="149" align="center"/>

路径：客户管理系统-＞账户管理-＞BCAN 码管理-＞BCAN 区间

<img src="/assets/PRdPbqXUzoAJgKxBfOvcBNhcnLf.png" src-width="425" src-height="146" align="center"/>

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p><b>港股 EP 模式</b></p></td><td><p><b>港股 Non-EP 模式</b></p></td></tr>
<tr><td><ul>
<li>CCEP：选择当前租户选项；</li>
<li>使用者：选择当前租户选项；</li>
<li>是否上报：选择‘是’；</li>
<li>起始编号/结束编号：手动输入配置</li>
</ul></td><td><ul>
<li>CCEP：选择‘lb’选项；</li>
<li>使用者：选择当前租户选项；</li>
<li>是否上报：选择‘是’；</li>
<li>起始编号/结束编号：手动输入配置</li>
</ul></td></tr>
<tr><td colspan="2"><p>（‘1’ - ‘99’是交易所自测区间，不可使用，不可用‘0’前置占位，建议按 lb 提供的区间配置）</p></td></tr>
</tbody>
</table>

# <b>3.分配 BCAN</b>

①客户账户开通时，将自动给客户分配 BCAN，并在客户同意 HKIDR 授权协议下启用申报流程；

②存量客户：在配置完成 BCAN 区间后，请尽快联络长桥，我们将自动给存量客户按区间分配 BCAN；

# <b>4.申报 BCAN 到 HKEX</b>

申报逻辑：上报的数据是 已开通账户、有 BCAN 码且同意授权协议 的全量客户，申报给交易所后，获取交易所返回的文件内容，将 BCAN 生效的状态同步更新；

EP 模式支持 ECP SFTP 和 ECP Web 两种方式；

Non-EP 模式支持 ECP Web 方式；

## <b>EP 模式申报</b>

### <b>①方式 1：SFTP 系统申报</b>

支持通过 ECP SFTP 方式自动申报

前置条件：提供 SFTP 的 SDNet/2 线路、User Id 和 private key

申报方式：

交易日 07:00 am- 03:00 pm 时间段内，手动点击‘主动申报’按钮，系统自动生成 BCAN-CID 文件，且通过 SFTP 的方式提交给交易所；

<img src="/assets/L5wJbo2iAo9exLxFpVTc7ESKndh.png" src-width="425" src-height="202" align="center"/>

交易所在十分钟内会返回应答文件，在下午 6 点后，会返回验证文件和全景文件，系统自动解析后，客户的 BCAN 状态自动更新；

<img src="/assets/XE55bGVKcorS1Ex8Notc2zzHn6g.png" src-width="425" src-height="237" align="center"/>

### <b>②方式 2：ECP Web 手动申报</b>

通过 Whale 后台下载申报文件，去交易所官网上传申报文件，将交易所返回的全景文件导入后台；

前置条件：向交易所申请 ECP 的 User ID 和 Password

操作：

- 点击右侧‘下载申报文件’按钮，导出并保存申报文件；

<img src="/assets/P4YqbGckJoUgFBxFy4TcEwj6nAd.png" src-width="425" src-height="202" align="center"/>

- 在登录交易所网站，登录 ECP 平台上传申报文件到 SFC

网址：https://ecp2.e2etest.hkex.com.hk/

<img src="/assets/Y5udbDOdaoD16sxWpFkc3PBInPb.png" src-width="425" src-height="243" align="center"/>

<img src="/assets/GmXxbJR55oLPJBxnrb5cYfpOnth.png" src-width="425" src-height="245" align="center"/>

<img src="/assets/Lg7kbktxrodHs1x2LixcsSi3nDb.png" src-width="425" src-height="232" align="center"/>

<img src="/assets/JsU6ba7r4o3bFRxbzQbcPVesnCf.png" src-width="425" src-height="234" align="center"/>

<img src="/assets/XgCwbkIXmo8v7pxc04FceQ4nnUd.png" src-width="425" src-height="215" align="center"/>

- 将交易所返回的全景文件，导入后台页面；

<img src="/assets/CoHSbCi6koCRirxPnrMcYx2hnkb.png" src-width="425" src-height="186" align="center"/>

- 客户的 BCAN 生效状态将同步更新；

<img src="/assets/Mr9Wbx4g6o9TY0xtxifcjqUQnQD.png" src-width="425" src-height="237" align="center"/>

## <b>Non-EP 模式申报</b>

通过 Whale 后台下载申报文件，去交易所官网上传申报文件，将交易所返回的全景文件导入后台；

前置条件：向交易所申请 ECP 的 User ID 和 Password

操作：

- 点击右侧‘下载申报文件’按钮，导出并保存申报文件；

<img src="/assets/PvDYbg3MaocliXxfkcjcOt35nsh.png" src-width="425" src-height="202" align="center"/>

- 在登录交易所网站，登录 ECP 平台上传申报文件到 SFC

网址：https://ecp2.e2etest.hkex.com.hk/

<img src="/assets/PEndbTHyboPCU5xu8SWcGsmznBd.png" src-width="425" src-height="245" align="center"/>

<img src="/assets/SwyrbkQnqoUCy6xINGxcrDwTnwd.png" src-width="425" src-height="237" align="center"/>

<img src="/assets/TZd0bXOtpoURmyxetctcBew8nib.png" src-width="425" src-height="232" align="center"/>

<img src="/assets/QTZsbL8Imo6XbixF6V8c7E34nKh.png" src-width="425" src-height="234" align="center"/>

<img src="/assets/KoMYbDietordlWxlpMacgEECnEg.png" src-width="425" src-height="215" align="center"/>

- 将交易所返回的全景文件，导入后台页面；

<img src="/assets/ZYM0btG2OorVHfxmFjLcDrGynuq.png" src-width="425" src-height="186" align="center"/>

- 客户的 BCAN 生效状态将同步更新；

<img src="/assets/J1QsbenWVo5fZvxntFfcutnfnke.png" src-width="425" src-height="237" align="center"/>

# <b>5.其他报告文件</b>

<table>
<colgroup>
<col width="182"/>
<col width="182"/>
<col width="182"/>
<col width="182"/>
</colgroup>
<tbody>
<tr><td></td><td><p>报告表格</p></td><td><p>提交方</p></td><td><p>港交所</p></td></tr>
<tr><td><p>1</p></td><td><p>合并交易指令报告<br/>汇总交易报告</p></td><td><p>合并交易指令或合并场外交易的受规管中介人<br/>(包括 EP 和 Non-EP)</p></td><td rowspan="5"><p>1.提交报告表格后，交易所在 10 分钟内返回格式验证的回应报告；<br/>2.T 日 提交多份同类型的报告文件时，在截止时间前会取最后一份报告表格；<br/>3.处理结果报告将在 T+1 日 8 点前返回；</p></td></tr>
<tr><td><p>2</p></td><td><p>更改券商客户编码报告<br/>更改 BCAN 报告</p></td><td><p>提交配对档案的相关受规管中介人<br/>(包括 EP 和 Non-EP)</p></td></tr>
<tr><td><p>3</p></td><td><p>券商客户编码错误报告<br/>BCAN 错误交易报告</p></td><td><p>在 OTP-C 输入相关交易指令及场外交易的交易所参与者 (EP)</p></td></tr>
<tr><td><p>4</p></td><td><p>场外交易 (买方) 券商客户编码报告<br/>场外交易报告</p></td><td><p>场外交易 (即人手交易) 的买方交易所参与者 (EP)</p></td></tr>
<tr><td><p>5</p></td><td><p>变更流通量提供者报价的券商客户编码报告</p></td><td><p>交易所参与者进行变更流通量提供者报价的券商客户编码 (EP)</p></td></tr>
</tbody>
</table>

**格式要求：所有包含要采用 CSV 格式

## <b>①合并交易指令报告 (Aggregated Transaction Report)</b>

合并交易指令或合并场外交易的相关受规管中介人，在 T+3 日内，在已执行的合并交易指令下的各项相关交易的资料需填入表格模板中，通过 ECP Web 提交给交易所。

表格模板：HBCNATBN_BPX066_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>说明</p></td></tr>
<tr><td><p>文件标题</p></td><td><p>‘HBCNATBN’+‘<em>’+CE Number+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>项目编号。</p></td><td><p>序号，依次增加</p></td></tr>
<tr><td><p>报告日期</p></td><td><p>提交报告的时间</p></td></tr>
<tr><td><p>CE 举报受规管中介人数目</p></td><td><p>相关受规管中介人的 CE No.</p></td></tr>
<tr><td><p>执行交易所参与者公司 ID</p></td><td><p>参与者编号</p></td></tr>
<tr><td><p>交易日期</p></td><td><p>交易日期</p></td></tr>
<tr><td><p>股票代码</p></td><td><p>股票代码</p></td></tr>
<tr><td><p>价格</p></td><td><p>价格</p></td></tr>
<tr><td><p>数量</p></td><td><p>数量</p></td></tr>
<tr><td><p>侧面（B/S）</p></td><td><p>买卖方向，填入‘B’或‘S’</p></td></tr>
<tr><td><p>基本个人 CE 号及 BCAN</p></td><td><p>附在买卖盘的中央编号及券商客户编号，格式 CE Number+‘.’+BCAN 码</p></td></tr>
</tbody>
</table>

## <b>②更改客户券商编码报告 (Change BCAN Report)</b>

修改已生效的券商客户编码，需要将客户的信息填入表格模板中，通过 ECP Web 提交给交易所。

表格模板：HBCNBCBN_BPX066_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>说明</p></td></tr>
<tr><td><p>文件标题</p></td><td><p>‘HBCNBCBN’+‘<em>’+CE Number+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>项目编号。</p></td><td><p>序号，依次增加</p></td></tr>
<tr><td><p>报告日期</p></td><td><p>提交报告的时间</p></td></tr>
<tr><td><p>CE 举报受规管中介人数目</p></td><td><p>相关受规管中介人的 CE No.</p></td></tr>
<tr><td><p>原始 CE 号和 BCAN</p></td><td><p>原 BCAN 账号，格式 CE Number+‘.’+BCAN 码</p></td></tr>
<tr><td><p>经修订的 CE 和 BCAN</p></td><td><p>修改后的 BCAN 账号，格式 CE Number+‘.’+BCAN 码</p></td></tr>
<tr><td><p>更改日期</p></td><td><p>修改的时间</p></td></tr>
<tr><td><p>变更原因</p></td><td><p>修改原因</p></td></tr>
</tbody>
</table>

## <b>③券商客户编码错误报告</b>

已部分/全部提交的交易指令发现不正确，在交易日6:00 PM 前，将需要变更的信息，通过 ECP Web 提交给交易所。

表格模板：HBCNERBN_21950_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>说明</p></td></tr>
<tr><td><p>文件标题</p></td><td><p>‘HBCNERBN’+‘<em>’+Firm ID+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>项目编号。</p></td><td><p>序号，依次增加</p></td></tr>
<tr><td><p>报告日期</p></td><td><p>提交报告的时间</p></td></tr>
<tr><td><p>执行交易所参与者公司 ID</p></td><td><p>参与者编号</p></td></tr>
<tr><td><p>交易日期</p></td><td><p>交易日期</p></td></tr>
<tr><td><p>股票代码</p></td><td><p>股票代码</p></td></tr>
<tr><td><p>交易数量</p></td><td><p>数量</p></td></tr>
<tr><td><p>贸易方（B/S）</p></td><td><p>买卖方向，填入‘B’或‘S’</p></td></tr>
<tr><td><p>OTP 的原始 CE 号和 BCAN 输入</p></td><td><p>原 BCAN 账号，格式 CE Number+‘.’+BCAN 码</p></td></tr>
<tr><td><p>经修订的 CE 和 BCAN</p></td><td><p>修改后的 BCAN 账号，格式 CE Number+‘.’+BCAN 码</p></td></tr>
<tr><td><p>贸易 ID（OTP-C）</p></td><td><p>交易编号</p></td></tr>
</tbody>
</table>

## <b>④场外交易 (买方) 券商客户编码报告</b>

若买方的交易所参与者未能于收市前输入券商客户编码，买方交易所参与者需通过 ECP Web 提交报告给交易所。

表格模板：HBCNOTBN_21950_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>说明</p></td></tr>
<tr><td><p>文件标题</p></td><td><p>‘HBCNOTBN’+‘<em>’+Firm ID+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>项目编号。</p></td><td><p>序号，依次增加</p></td></tr>
<tr><td><p>报告日期</p></td><td><p>提交报告的时间</p></td></tr>
<tr><td><p>执行交易所参与者公司 ID</p></td><td><p>参与者编号</p></td></tr>
<tr><td><p>交易日期</p></td><td><p>交易日期</p></td></tr>
<tr><td><p>股票代码</p></td><td><p>股票代码</p></td></tr>
<tr><td><p>交易数量</p></td><td><p>交易数量</p></td></tr>
<tr><td><p>买方 CE 号和 BCAN</p></td><td><p>买方的 BCAN 账号，格式 CE Number+‘.’+BCAN 码</p></td></tr>
<tr><td><p>贸易 ID（OTP-C）</p></td><td><p>交易编号</p></td></tr>
</tbody>
</table>

# <b>附录</b>

# <b>时间表</b>

<table>
<colgroup>
<col width="243"/>
<col width="243"/>
<col width="243"/>
</colgroup>
<tbody>
<tr><td><p><b>时间点</b></p></td><td><p><b>鲸鱼</b></p></td><td><p><b>港交所</b></p></td></tr>
<tr><td><p>T 日 8:00 am-03:00 pm<br/>(自动申报)</p></td><td><p>自动/手动 生成 BCAN-CID Mapping File，通过 SFTP 自动申报文件至交易所</p></td><td><p>返回 BCAN-CID Response File<br/>(提交申报文件 10 分钟内)</p></td></tr>
<tr><td><p>07:00 am-04:30 pm<br/>(手动申报)</p></td><td><p>Whale 后台下载申报文件（HBCNMAPP）</p></td><td></td></tr>
<tr><td></td><td></td><td><p>通过 ECP 网站，上传申报文件</p></td></tr>
<tr><td></td><td></td><td><p>返回 BCAN-CID Response File，下载并检查正确性</p></td></tr>
<tr><td><p>06:00 pm-11:59 pm</p></td><td></td><td><p>返回 BCAN 进程结果文件（HBCNMPRP）</p></td></tr>
<tr><td></td><td></td><td><p>返回 BCAN 完整映像文件（HBCNFIMG）</p></td></tr>
<tr><td></td><td><p>导入交易所返回的全景文件，并确认客户的 BCAN 是否有生效<br/>(手动申报需人工在后台导入操作)</p></td><td></td></tr>
<tr><td></td><td><p>确认客户的 BCAN 生效，当日检查结束</p></td><td></td></tr>
<tr><td><p>T+1 日 12:00 am</p></td><td></td><td><p>系统清理，所有档案文件在 e 通讯中删除</p></td></tr>
</tbody>
</table>

