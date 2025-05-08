---
title: 功能介绍
slug: Hw6fwuBDqi3lHnkhfCfcQuCon1c
sidebar_position: 2
---


# 功能介绍

## 更新

2022.06.20  初稿

2023.02.23  增加黑白名单限制类型，并且支持批量导入客户及标的

2024.08.11   更新各功能模块的操作说明

## 操作说明

### 1.成交补单

<b>功能概述</b>

成交补单通常指的是交易订单的补充记录功能。

这项功能对于确保交易资料的完整性和准确性至关重要。补单可以用来记录那些因系统故障、网路问题或其他原因而未能及时在系统中登记的交易。透过补单，可以更新交易记录，确保所有交易都能正确反映在帐户和结单中。

目前 Whale 系统支持手动单条录入及文件批量导入两种方式。支持补录港股、美股、沪深、新加坡市场。

<img src="/assets/UXErbz8nnoqRGqxAIo1cUM7dnBc.png" src-width="2868" src-height="1744" align="center"/>

<b>功能页面结构说明</b>

顶部为查询功能及新增功能区

列表左侧为 checkbox 多选，可批量选中操作取消补单

中间列表为补单数据，包含历史补单数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 1.1 补单列表

列表主要展示补单数据信息，部分字段（例如委托数量）支持上下排序，字段信息可根据使用习惯进行位置拖动。

<img src="/assets/HuqtbK2w4orMybxQ4hsc8DuQnte.gif" src-width="1848" src-height="1122" align="center"/>

- 查询条件：证券帐户、股票、委托时间、操作时间
- 特殊字段说明：
    - 委托渠道：目前系统支持多渠道下单，具体可在录入时选择委托渠道，一般为 APP、WTT、API 等
    - 交易渠道：用于显示当前帐户的交易结算渠道，如有上手则显示对应上手的结算渠道及大帐户号码
    - 操作人：补单操作人，即对应操作的交易员名称

- 操作项：详情、取消
    - 详情：查看补单订单详情数据
    - 取消：取消当前该笔的补单数据（仅当日的补单数据支持操作取消）

- 批量操作：列表头 Checkbox，可对数据进行多选，选中后为取消的订单可操作全部取消；

#### 1.2 新增补单 - 手动录入

点击右上角“新增”按钮，进入补单下单操作弹窗界面，默认进入到“手动录入”画面，手动填入委托及成交信息。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/DJGTbyocHoZzKexkjWYc5tDgnJd.png" src-width="760" src-height="1682" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/IjDobsAgeoWmA4xpv7rccLRnnWc.png" src-width="738" src-height="1668" align="center"/>
</div>
</div>

- 填写补单的订单委托数据，需要包含客户信息、股票、委托渠道及委托价格、数量等基本的下单信息
- 确认订单委托信息后，下方模块输入订单的成交信息，包含成交状态、日期及成交数量、价格
    - 输入成交价格、数量后点击“添加”将录入为成交明细，当订单存在分笔成交的情况，可添加多条成交明细。如明细添加有误，可在成交明细表往后滑动操作删除

- 委托、成交信息填写完成后，可点击“确定”提交（如信息填入不全按钮将置灰不可点击）。数据正确并提交后，将在补单列表中生成一条补单数据。
- 成交信息录入区订单状态说明：目前仅支持补“全部成交”、“部成部撤”、“已撤单”三种状态，选中的补单状态与订单表中的订单状态一致，当选择“全部成交”时，系统会在输入成交数量时校验数量是否满足全部成交要求，系统将提示：成交数量与订单状态不匹配，无法提交；

#### 1.3 新增补单 - 文件录入

点击右上角“新增”按钮，进入补单下单操作弹窗界面，顶部手动切换至“文件录入”，可在该处进行批量文件补单。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[52%]" width-ratio="52">
<img src="/assets/Nx6jba4q2oLhF2xmaaKcZFd4nRc.png" src-width="764" src-height="548" align="center"/>
</div>
<div class="w-[47%]" width-ratio="47">
<img src="/assets/HEn2be5k3o5LTMx9aYEcKoELnRg.png" src-width="742" src-height="596" align="center"/>
</div>
</div>

- 此处上传补单文件需要按照模板规则进行上传，所以在上传补单文件之前请操作“下载模板”，在模板中进行数据录入，录入完成后可将文件进行上传
- 点击“上传文件”将唤起本地文件选择，选中需上传的补单文件后，系统将执行补单操作
    - 目前仅支持上传一份文件，文件内数据最多不超过 1,000 条，超过 1,000 条时系统将提示：文件超出一千条数据上限，请分批上传。 --- 如看到此提示，请将补单文件中的数据进行拆分

- 补单模板文件说明：

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="118"/>
<col width="111"/>
<col width="135"/>
<col width="125"/>
<col width="100"/>
<col width="100"/>
<col width="113"/>
<col width="128"/>
<col width="161"/>
<col width="205"/>
<col width="113"/>
</colgroup>
<tbody>
<tr><td><p>文件表头</p></td><td><p>Acc. Number</p></td><td><p>Symbol</p></td><td><p>Order Type</p></td><td><p>Side</p></td><td><p>Price</p></td><td><p>Quantity</p></td><td><p>Order Channel</p></td><td><p>Trade Date</p></td><td><p>Remark</p></td><td><p>Order Tag</p></td><td><p>Tag</p></td></tr>
<tr><td><p>字段说明</p></td><td><p>证券帐号</p></td><td><p>代码<br/>填入规则：股票代码。市场</p></td><td><p>订单类型<br/>暂不支持条件单，具体对应内容查看模板文件「Notification」Sheet</p></td><td><p>委托方向<br/>填入B/S</p>
<blockquote>
<p>B：Buy<br/>S：Sell</p>
</blockquote></td><td><p>委托价格</p>
<blockquote>
<p>不超过 20 字符</p>
</blockquote></td><td><p>委托数量</p></td><td><p>委托渠道<br/>具体对应内容查看模板文件「Notification」Sheet</p></td><td><p>委托日期</p>
<blockquote>
<p>YYYY-MM-DD</p>
</blockquote></td><td><p>订单/明细<br/>判断这条补单订单是 Order 还是 Done<br/>一般需要上下 Order、Done 结合使用<br/>可不填，即默认为 Order</p>
<blockquote>
<p>Order - 订单<br/>Done - 订单明细</p>
</blockquote></td><td><p>订单标记<br/>可不填，不填则默认为 Normal<br/>具体对应内容查看模板文件「Notification」Sheet</p></td><td><p>彩蛋字段 -- 风控豁免<br/>是否需要跳过风控，填入 Y/N<br/>默认为空，即为不跳过</p></td></tr>
<tr><td><p>填入示例</p></td><td><p>LPT243184</p></td><td><p>700.HK</p></td><td><p>ELO</p></td><td><p>B</p></td><td><p>366.90</p></td><td><p>300</p></td><td><p>WTT</p></td><td><p>2024-04-20</p></td><td><p>Order</p></td><td></td><td><p>Y</p></td></tr>
</tbody>
</table>

- 补单导入结果反馈：
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[53%]" width-ratio="53">
        <img src="/assets/QHp8baWGao63ePxGFUwcudnfnNh.png" src-width="806" src-height="318" align="center"/>
        </div>
    <div class="w-[46%]" width-ratio="46">
        <img src="/assets/MTjJbq6CVodKe4x0kkBcQzE9nle.png" src-width="1600" src-height="734" align="center"/>
        </div>
    </div>
    - 补单文件中异常数据提示，目前会针对客户证券帐号、股票标的、订单类型、委托渠道、订单标记、Remark 等多维度字段进行异常检测，存在异常时将被拦截，可通过「导入反馈」窗口查看详细数据

### 2.新股管理

<b>功能概述</b>

交易员可通过「新股列表」页面查看新股详情，并且可替客户进行新股申购。同时对线上客户的申购情况也可在「申购列表」中进行管理。

<img src="/assets/V5DgbBsLvoyiFPxyuX9cuePcnfd.png" src-width="2858" src-height="1736" align="center"/>

<b>功能页面结构说明</b>

顶部为「新股列表」、「申购类表」切换区

列表右侧固定为操作功能区

中间列表为新股 / 客户申购数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 2.1 新股列表

查看新股基础数据，包含新股代码、开始申购日期、截止申购日期、申购价格区间、每手股数等，可点击“详情”进入新股详情页面查看新股数据。新股数据均可通过 WBO 后台进行管理配置，WTT 仅展示后台配置数据及内容。

<img src="/assets/CatUbWowpoTdTuxm567csyD3nSc.png" src-width="2734" src-height="1598" align="center"/>

#### 2.2 新股详情

新股详情窗口中包含三块内容：基本信息、融资信息、申购详情。可通过时间轴下的功能 Tab 进行切换查看。

<img src="/assets/MtwkbbMVuocjqVx27atcsgHFnRf.png" src-width="2752" src-height="1170" align="center"/>

- 基本信息：后台配置的新股基本数据
- 融资信息：当前新股可用到的融资倍数既要求
- 申购详情：当前新股认购的客户信息

#### 2.3 新股申购

交易员通过 WTT 可帮助客户进行新股申购，点击新股列表操作列中“申购”按钮，可进入新股申购窗口，通过此窗口进行申购。申购窗口主要分为资金确认、申购信息填入、申购结果覆核三个模块进行。

<img src="/assets/QovebuCYZo8ETgxN63dciIElnuh.png" src-width="2870" src-height="1730" align="center"/>

- 填写申购帐户，可通过帐户搜索选择需进行申购的客户
- 资金信息：选中客户后将展示客户购买力及现金情况，交易员可通过这些数据综合判断该帐户是否适合进行申购
- 申购操作：填写客户需申购的数量及方式，同时支持帮助客户选择并使用抵用券
- 申购覆核：填写的申购信息确认无误后，可操作底部“确认”进行提交，提交完成后即完成新股申购

#### 2.4 申购列表

可通过该列表查看客户申购数据（包含客户 App、PC 端申购及交易员 WTT 代客申购），并且可通过该列表对客户的申购订单进行改、撤操作。

<img src="/assets/SqzIbnFbRoPsx7xuUYhcZ96mneb.png" src-width="2856" src-height="1722" align="center"/>

- 查询功能：目前仅支持客户、订单状态搜索
    - 如需查看某一个新股标的的申购情况需前往「新股列表」-「详情」-「申购详情」中查看

- 列表数据：仅展示基础申购情况，包含申购客户帐号、申购金额、股数等
- 操作列说明：支持改单、撤单、重新申购、详情操作
    - 改单、撤单：交易员可直接对风险客户申购单进行改撤单处理
    - 重新申购：如将客户历史申购订单进行撤单后，当前新股仍在申购期内，则可通过该操作直接进行二次申购
    - 详情：查看客户申购详情数据

### 3.证券限制

<b>功能概述</b>

黑白名单：对股票设置黑名单进行交易限制，限制后客户提交交易时将提示拦截。同时如果批量设置黑名单后需要针对某些用户单独开放交易权限，可使用白名单功能进行权限开放。

风险限制：对 VA-ETF 进行交易限制，可通过“PI 认证、VA-ETF 风险问卷、VA-ETF 风险提示”三个维度进行设置。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/MoOibOAE2olEZMxb0bBcjcIInde.png" src-width="2852" src-height="1736" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/JgHwbMFESoT4R0xlNWocRz3ynPf.png" src-width="2870" src-height="1736" align="center"/>
</div>
</div>

<b>功能页面结构说明</b>

顶部为「黑白名单」、「风险限制」切换区

列表右侧固定为操作功能区

中间列表为黑白名单 / 风险限制已设置的条件数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 3.1 新增黑白名单条件

通过列表顶部右侧“新增”按钮进入「新增交易限制」窗口，可在窗口内对股票、帐户进行交易限制。目前系统支持手动限制、股票导入两个方式进行设置。

> 手动限制：手动人工添加股票限制条件，添加并提交成功后，条件生效
> 股票导入：通过批量导入股票的方式对客户进行交易限制，该方式目前仅支持限制全部客户

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/CxINbJ2cvoIsCpxW0Uoc13UHnsd.png" src-width="746" src-height="1666" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/C7gEbgLfdoHJcYxzsl8cEBfUnFO.png" src-width="752" src-height="1672" align="center"/>
</div>
</div>

- 字段解释：
    - 限制类型：黑名单、白名单
    - 市场：全部市场、港股、美股、沪深、新加坡
    - 交易品种：全部品种、股票/ETF、轮证、期权
    - 股票：输入需限制的股票代码 --- 此处仅支持填单一股票
    - 限制交易方向：买入开仓、卖出平仓、卖出开仓、买入平仓 --- 此处支持多选，同时限制多个方向
    - 关联客户方式：手动关联、批量导入、关联地区
        - 手动关联：即在下方“关联客户”字段中手动选择客户帐号进行添加限制
        - 批量导入：通过文件批量上传需限制的客户帐号，切换该方式后，下方将出现“导入客户”字段，可进行文件上传 --- 需根据模板进行上传，首次使用时建议先下载模板
        - 关联地区：选择该方式后可通过地区对客户进行限制，在下方“关联地区”字段中设置完成提交后，将通过“居住国家 -- 证件签发地 -- 国籍”依次进行判断进行交易拦截 --- 此处支持多选，同时限制多个地区
    - 备注：仅支持填写文字，最多 30 个文字字符
    - 导入股票：上传股票列表文件，文件中股票代码填入格式为“代码。市场”，例如：00700.HK、BABA.US --- 需根据模板进行上传，首次使用时建议先下载模板

- 字段之间关联关系及注意事项：
    - 市场、交易品种、股票均存在关联关系，如选择港股市场的情况下，交易品种则不会出现期权的选项
    - 市场选择全部市场时，股票输入框内不支持填入股票。请注意：由于选择时全市场限制，填入的股票条件将不会生效
        - 限制全部市场、品种的交易：市场选择全部、交易品种选择全部品种，股票框不填
        - 限制单个市场、品种的交易：市场选择需要限制的市场，交易品种可根据实际进行选择，股票框不填
    - 针对美股 - 期权限制时，系统将默认限制填入股票代码下全部的期权。例如设置美股期权黑名单，当股票字段填入 BABA.US 时，则表示 BABA.US 下的期权均不支持操作买入开仓（参考下图）
    <img src="/assets/QRsybp22CoVkT4xNP6Wck0swnUe.png" src-width="748" src-height="744" align="center"/>

- 黑白名单拦截结果提示：黑名单提交成功至生效，将会有 1-2 min 的生效延迟），成功生效后，如客户交易被限制的股票时，客户交易终端将收到拦截提示。
    - 例如设置不支持买入开仓，则客户/交易员交易时将提示：委托失败，该标的不支持买入开仓
    <img src="/assets/EuA8bCj8RoHiXXxLjU5csROQnfe.png" src-width="574" src-height="118" align="center"/>

#### 3.2 黑白名单列表操作功能

黑白名单支持操作编辑、删除、关联客户、批量删除。编辑、删除均是股票条件维度下的操作，而关联客户则是操作调整限制条件内的客户范围。

<img src="/assets/Hsz9bZrLLo9omBxzYYuclfIUn2g.png" src-width="2870" src-height="1744" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[58%]" width-ratio="58">
<img src="/assets/FDDYbWDKRoSm7IxnYdectyL9nui.png" src-width="746" src-height="696" align="center"/>
</div>
<div class="w-[41%]" width-ratio="41">
<img src="/assets/YswWbPHRcoSF0UxqvfWcHZisn2f.png" src-width="758" src-height="992" align="center"/>
</div>
</div>

- Checkbox 批量删除：适用于仅单独删除某几条限制条件，则可通过 Checkbox 小范围选中后进行删除
- 右上角“批量删除”按钮：适用于全局性大范围的删除，可通过「批量删除」窗口手动添加需删除的限制条件，再导入需删除的股票代码，满足限制条件的股票将大批量的进行删除
- 操作列
    - 编辑：仅支持编辑限制交易方向、备注，其他限制条件（限制类型、市场、品种、股票）不支持编辑
    - 删除：仅删除当前选中的这条限制条件
    - 关联客户：
        - 如关联全部客户，点击该功能后将直接弹窗提示 - 已关联全部客户，则不可进行关联客户的相关编辑
        - 如仅关联部分客户，可进入「关联客户」窗口，在该窗口内新增、删除关联客户（窗口内暂不支持批量操作）
        <div class="flex gap-3 columns-2" column-size="2">
        <div class="w-[49%]" width-ratio="49">
                <img src="/assets/BeBqbHcVZobWp4xXf6OcOIC0nKh.png" src-width="698" src-height="314" align="center"/>
                </div>
        <div class="w-[50%]" width-ratio="50">
                <img src="/assets/OA5TbBacXo9SESxTzs1ceFHBn7f.png" src-width="2288" src-height="1006" align="center"/>
                </div>
        </div>

#### 3.3 风险限制功能说明

<img src="/assets/F76Ebe80WoGAg3x0OGGc7ACBnSb.png" src-width="2864" src-height="1740" align="center"/>

- 可通过切换 Tab 页面来限制 VA-ETF 风险提示，可根据三个维度来设置：PI 认证、VA-ETF 风险问卷、VA-ETF 风险提示
    - PI 认证：勾选代表对应的标的需要有 PI 认证才可进行交易
    - VA-ETF 风险问卷：勾选代表对应的标的需要完成题集认证，未进行认证的用户将调整至问卷流程
    - VA-ETF 风险提示：勾选代表对应的标的需要在端侧内进行风险认证，没有铜通过 VA-ETF 风险测评的用户，首次交易将会展示风险声明

- VA-ETF 风险问卷、VA-ETF 风险提示，条件互斥，不支持同时多选该两项
- 其他限制规则与黑名单规则一致，可参考 3.1 中的操作说明

### 4.成交分配 & 转移

<b>功能概述</b>

成交分配页面支持操作订单分配、订单转移。可通过这个功能处理客户错单相关问题，普通订单、机构订单均支持操作分配，但是目前只有机构订单支持操作订单转移。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/AkaEbZpxoo2KsdxD5bdcpx3snpe.png" src-width="2874" src-height="1736" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/LPSCbKWtzoucCVx0O0qc4OhYnLb.png" src-width="2870" src-height="1732" align="center"/>
</div>
</div>

<b>功能页面结构说明</b>

顶部为「成交分配」、「已分配订单」切换区

列表右侧固定为操作功能区

中间列表为成交分配 / 已分配订单的数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 4.1 成交分配页面说明

成交分配页面分为上下两部分：上半部分为成交订单信息，其中包含普通订单及机构订单，可在列表中操作分配、转移。下半部分为成交订单相关的分配、转移、子订单数据，需要选中上方一条具体订单后才会有实际数据。

- 成交分配页面支持两种两个类型：普通订单、机构订单
    - 普通订单：仅支持分配。可任意选择分配帐户，分配完成后原订单将撤单，重新按新帐户生成一条普通订单
    - 机构订单：支持分配、转移。分配仅支持分配给交易帐户下的子帐户，分配成功后生成一条分配记录，不会产生实际订单；转移仅支持转移给其他主帐户，转移成功后生成一条机构订单，该机构订单可再次进行分配、转移。

- 分配列表说明
    - 列表基础数据字段均来自普通订单或机构订单组件中
    - 特别字段说明：
        - 成交均价 = 机构订单中的“当日成交均价”
        - 成交数量 = 机构订单中的“当日成交数量”
        - 待处理数量 = 当前机构订单可用于操作分配、转移的数量，即当日成交数量 - 已分配数量 - 已转移数量
        - 操作状态：未分配、已分配、部分分配或转移
        - 转移审批：审批中、已通过、已拒绝（-- 表示未进行提交审批）

- 列表操作
    - Checkbox：多选机构订单，可进行合并分配。合并分配只有同帐号、同股票、同方向才可以进行合并分配
    - 分配：执行成交分配，进入分配操作窗口
        - 当订单存在转移审批中或已经分配完时，分配按钮灰色不可点击
    - 转移：执行成交转移，进入转移操作窗口
        - 当订单存在转移审批中或已经分配完时，转移按钮灰色不可点击

- 设置分配组：可在分配之前预设好分配组，后续分配页面可直接选择已设置好的分配组，可提升分配操作效率。
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[72%]" width-ratio="72">
        <img src="/assets/ZPRHbu2XgojrJTxMpbhcsuktn6g.png" src-width="2876" src-height="1736" align="center"/>
        </div>
    <div class="w-[27%]" width-ratio="27">
        <img src="/assets/BtFRbE0FJoMMV6xJg4ucS4L7nph.png" src-width="1060" src-height="1700" align="center"/>
        </div>
    </div>
    - 新增分组：需要填入组名、分配方式、待分配客户、分配比例
        - 组名：体现在分配组预设列表中，并且后续操作分配时通过组名来进行关联，请填写较明显易理解的名称
        - 分配方式：支持按比例、按数量两种分配方式进行预设
        - 待分配客户：选择该分配组中的客户帐号
            - 客户如添加有误，可通过后面红色 icon 进行删除
            - 可点击“添加待分配客户”添加更多客户帐号
        - 分配比例：选择按比例分配方式时，则需要填写分配比例，分配比例加总上限为 100%
        - 分配数量：选择按数量分配方式时，则需要填写分配数量，分配数量一般为自定义设置
        <img src="/assets/QfYLbwVOzoZV4WxNAylcBrabnWJ.png" src-width="1064" src-height="678" align="center"/>

#### 4.2 普通订单 - 成交分配

操作普通订单分配时，顶部搜索项需将订单类型切换为“普通订单”，操作列中仅支持“分配”。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/AoLQbNuuKo6ECJxGa1NcFGsjnhh.png" src-width="2864" src-height="1734" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/LxfXbXnYTobrPUxv0sRcpueqn9z.png" src-width="2866" src-height="1742" align="center"/>
</div>
</div>

- 分配操作窗口
    - 普通订单操作分配支持订单分配、明细分配两种方式
        - 订单分配：按 Order 层面将整个订单统一进行分配，不管原订单的成交明细情况，订单分配时仅支持分配给当前帐户下的子帐户
        - 明细分配：按 Orde 下 Trade Done 进行分配，该方式如需将成交明细全部分配完需要操作多次，明细分配可将 Trade Done 分配给多个其他帐户（无需主子帐户关系）
    - 分配订单：默认为选中的订单，如果是明细分配模式，则可以进行下拉选择，选取具体的订单明细进行分配操作
    - 最大可分配数量：即为当前选中订单的待处理数量，如合并分配即为多条订单的待处理数量累加
    - 分配组：在分配列表页面中预设分配组，预设好后可在该位置选中分配组进行快速指定帐户
    - 分配方式：支持按数量、按比例两种分配方式
        - 按数量分配：默认为按数量的分配方式，该方式下需要手动输入每一个子帐户分配的具体数量，加总不可超过最大可分配数量
        - 按比例分配：该方式下手动输入子帐户接收的比例，系统将根据输入的比例及可分配数量自动计算，最终计算结果将取整，所以将存在零股的偏差情况，需要在预览页面进行手动修改，加总不可超过 100%
    - 分配价格：默认取用订单的成交价格，不可编辑
    - 待分配客户：选择需接受分配的帐户
    - 分配数量 / 比例：会根据选择的分配方式来进行切换

#### 4.3 机构订单 - 成交分配&转移

机构订单可支持在该页面中操作分配、转移，顶部搜索项需将订单类型切换为“机构订单”，操作列中支持“分配”、“转移”。待处理数量为 0 时，操作功能将置灰不可点击。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/MZQBbJ2vcobBmwxVgp3c0mXYnGO.png" src-width="2866" src-height="1740" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/K2d6b7GahoQ4IIxAU8Ccpbp8nvc.png" src-width="2864" src-height="1740" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/J9vsbRNoQoXN1ux41ftcKAGjn4g.png" src-width="2874" src-height="1722" align="center"/>
</div>
</div>

- 分配操作窗口
    - 分配模式：机构订单分配模式仅支持“订单分配”
    - 分配订单：
        显示选中的订单数据（母帐户帐号 / 股票名称 / 当日成交数量 @ 当日成交均价）
        如通过 checkbox 合并分配则该区域会显示批量选中的机构订单数据
    - 最大可分配数量、分配组、分配方式、待分配帐户、分配数量/比例：规则均普通订单一致
    - 分配价格：默认按机构订单的成交均价进行分配，如若合并分配则会根据选中的多条机构订单来计算成交均价，成交均价计算规则：sum 机构单成交金额 / sum 机构单成交数量，计算结果四舍五入保留四位小数

- 转移操作窗口
    - 转移订单：默认展示选中的机构订单（母帐户帐号 / 股票名称 / 当日成交数量 @ 当日成交均价）
    - 转移账户：选择需转移的目标账户，仅支持选择母帐户进行转移
    - 转移数量：仅支持输入数量，最大可转移数量为当前订单的待处理数量

#### 4.4 分配预览窗口

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[42%]" width-ratio="42">
<img src="/assets/AG9ZbfU3rop2QGxPRLHc8RjWnTe.png" src-width="942" src-height="698" align="center"/>
</div>
<div class="w-[57%]" width-ratio="57">
<img src="/assets/JyA8baVIyoGQwNx8BF0cFv2SnRb.png" src-width="940" src-height="514" align="center"/>
</div>
</div>

- 分配预览窗口
    - 显示当前这笔分配的基本情况，包含分配模式、分配订单（原始机构订单）、分配详情
    - 分配详情如存在多个帐户可在列表中滚动查看
    - 查看填入的分配基础信息及分配帐户、数量情况
    - 统计实际操作分配的数量及剩余可分配数量，剩余可分配数量 = 可分配数量 - 已分配数量

- 转移预览窗口
    - 显示当前这笔转移订单的基础信息
    - 转移对应账户及转移数量信息

#### 4.5 已分配订单

该页面主要仅显示通过成交分配操作出来的订单数据，并且支持在该页面上操作发动成交确认书、修改佣金、确认书预览、查看订单详情、取消分配。

<img src="/assets/H8PKbsT9ioMI0LxQw3IcRgxPnVb.png" src-width="2858" src-height="1740" align="center"/>

<b>列表说明</b>

- 该列表字段均通过分配而来，基础股票方向等数据与分配前原机构订单数据一致
- 特别字段说明：
    - 分配状态：成功、失败、取消
    - 佣金修改：未提交、待审批、修改失败、修改成功
    - 发送状态：未发送、已发送（成交确认书是否发送）
    - 说明：如存在分配失败，将在此列中显示分配失败原因

<b>列表操作</b>

- 发送成交确认书
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>通过列表左侧的 Checkbox 勾选需要发送成交确认书的分配订单，勾选成功后底部将出现“发送成交确认书”按钮，可点击进行批量发送</p>
        </li>
        <li><p>当分配订单存在审批或已取消时，不支持发送成交确认书，此时提交系统会有响应拦截及提示，详细原因可参考提示文案</p>
        </li>
        <li><p>可在列表上的“发送状态”对应查看当前成交确认书的发送节点&amp;状态</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/WgyobYr9BoGrCxx4BQfcXVkin7g.png" src-width="2862" src-height="1734" align="center"/>
        </div>
    </div>

- 修改佣金
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>列表右侧“操作”列支持选择“修改佣金”，直接通过弹出的窗口对当前分配订单进行佣金、结算日期的修改</p>
        </li>
        <li><p>确认提交修改后将发起审批，将直接提交至 BO 后台进行审批，同时可以在列表中“佣金修改”自字段来查看审批状态</p>
        </li>
        <li><p>佣金修改窗口中修改的数据审批通过后生效显示</p>
        </li>
        <li><p>如订单处于佣金审批中、已取消分配、非订单分配状态下，则不支持操作修改佣金（按钮限制置灰）</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/PhAybIxEro7Ii3xXnjJcYY04n8c.png" src-width="2866" src-height="1738" align="center"/>
        </div>
    </div>

- 预览：确认书预览
    - 预览帐户分配订单的成交确认书，点击后将跳转至网页查看

- 详情：查看订单详情
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>查看分配订单详情，具体包含信息：原订单信息、分配情况。可直接通过详情窗口页面查看</p>
        </li>
        <li><p>当前详情窗口仅支持查看，无其他操作功能</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/VZPlbaxTUoG1mQxscWAcMCdsnKe.png" src-width="2864" src-height="1734" align="center"/>
        </div>
    </div>

- 取消：取消分配
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p>当操作取消分配时，相对应同一个订单源的订单将同时被取消，取消二次确认窗口中将同步展示全部关联的分配订单</p>
        </li>
        <li><p>点击“确定”后，窗口列表中的订单将同意被取消，取消分配的数量也将回滚至原帐户中</p>
        </li>
        <li><p>仅当天分配的订单支持操作取消分配，历史订单由于已做结算，故不支持取消。历史订单点击取消时，将提示：分配取消失败。</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/VhMTbQFJOou1tHxF0CDcpQIenhb.png" src-width="1102" src-height="588" align="center"/>
        </div>
    </div>

### 5.订单批核

<b>功能概述</b>

触发 WBO 后台设置风控审核条件的订单，将进入「订单批核」页面进行批核，批核通过后将再执行交易委托上报，在批核完成之前，订单均存储在 Whale 系统中并未进行委托上报。

提交订单、改单，均有可能会触发风控审批，撤单不触发。

<img src="/assets/WTSKbpAsXol7Rmxva0hch6uwntg.png" src-width="2868" src-height="1732" align="center"/>

<b>功能页面结构说明</b>

列表顶部为功能页面查询条件

列表右侧固定为操作功能区

中间列表为触发风控审批的数据，页面数据支持分页查看（一页 30 条数据）

#### <b>操作及功能说明</b>

#### 5.1 订单批核列表页面说明

下单触发批核的订单将进入该列表统一进行审批工作，如需要执行审批操作需确保您拥有订单批核页面管理权限（权限参考《快速上手》文档内容）。

<img src="/assets/Q9WBbxSDDo7wO8xaKvBcVxoSnyc.png" src-width="1280" src-height="772" align="center"/>

- 查询条件：订单号、客户、市场、股票、批核状态、委托时间、操作时间
    - 订单号为订单委托单号，与交易面板中订单组件中一致，如需查询某一订单是否审批通过可使用订单号进行精准查询
    - 批核状态：待审批、已通过、已拒绝、已过期、已撤单
        （待审批、已通过、已拒绝：均为批核的操作状态。在批核操作之前可操作撤单或订单已过期则自动变更状态，无需进行再进行审批）
        当订单触发批核时，对应在交易面板中订单组件“批核状态”字段将会展示“待审批”，前台交易员可直观知晓订单情况（仅下单、改单会触发批核，撤单不触发批核）
        <img src="/assets/ABvSb0XKfoS4pTxFjeMcyom8nrb.png" src-width="2716" src-height="742" align="center"/>
    - 委托时间：订单提交委托时间，与交易面板中订单组件中一致
    - 操作时间：风控员/交易员操作批核的具体时间

- 列表字段：列表展示订单基础信息及审批信息，当订单未进行批核时，批核状态为“待审批”，操作人及操作时间均为空
- 操作：批量审批、单条审批、详情
    - 批量审批：可通过列表前的 Checkbox 进行批量选择，选中后可操作批量通过或驳回，该方式可进行快捷审批，但是无法查看到每一条触发的具体风险限制
    - 单条审批：通过列表右侧操作列进入批核窗口，针对性进行审批
    - 详情：
    
#### 5.2 批核操作窗口

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[61%]" width-ratio="61">
<img src="/assets/Qv3KbsBQBowfU0xz0jccY3X9nQg.png" src-width="2864" src-height="1096" align="center"/>
</div>
<div class="w-[38%]" width-ratio="38">
<img src="/assets/Yzr0bzI26o7rKhxjFYXcvyn7nie.png" src-width="2866" src-height="1740" align="center"/>
</div>
</div>

<img src="/assets/RBq0b7ymyoy8iGxekPncktHEnVe.png" src-width="2868" src-height="1736" align="center"/>

- <b>单条审批：</b>
    - 当批核状态为“待审批”时，可操作“批核”，其余状态下均只支持查看批核订单详情
    - 批核操作窗口，主要包含三部分信息：订单基础信息、触发批核的限制类型、批核操作
        - 订单基础信息：包含委托单客户信息、委托订单方向、类型及价格数量
        - 触发批核的限制类型：对应展示具体触发的风控限制类型，展示格式为“风控代码｜风控限制名称”
        - 批核操作：操作“通过”/“驳回”及输入批核原因，无论批核通过或驳回均支持填写批核原因，填写的批核原因将在订单批核详情中查看

- <b>批量审批：</b>
    - 通过列表前 Checkbox 选中订单进行批量操作，选中后列表底部将出现“通过”、“驳回”操作按钮，可对这批选中的订单快捷处理批核
    - 批量审批将不可查看到每一条订单触发的具体风控类型，请谨慎使用！

#### 5.3 批核详情

<img src="/assets/KYNJbNhLzo6J83xUMMncy6XOnbg.png" src-width="2872" src-height="1742" align="center"/>

- 当订单非待审批状态时，均支持查看详情，详情中可查看订单基础信息及风控限制类型，同时也包含订单的批核状态及操作时间

