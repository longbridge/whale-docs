---
title: 系统介绍
slug: EmoCwz2KQi7rsCk2RQNcY7Wpnrb
sidebar_position: 1
---


# 系统介绍

本使用手册适用于 Longbridge Whale-权益平台，运营系统管理员和使用成员使用。阅读此手册，你将了解 Whale-权益平台作业功能操作

权益系统是 Whale 来管理各类营销奖励与权益的发放，包含各类卡劵的创建与发放管理，整个 Whale 权益系统体系中，权益主要包括卡券福利、奖励中心、权益中心三大作业功能。

<img src="/assets/NvWPbCPOxoUVSrxLGIpctVXnnFb.jpeg" src-width="1354" src-height="414" align="center"/>

## 功能介绍

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>功能目录</p></td><td><p>目录说明</p></td></tr>
<tr><td><p>权益</p></td><td><p>Whale 权益系统体系中，权益主要包括卡券福利、奖励中心、权益中心三大块功能。</p></td></tr>
<tr><td><p>卡券福利</p></td><td><p>主要分卡券和实物福利，具备卡券的创建、管理、结算功能；实物奖励模版创建、实物奖励管理功能</p></td></tr>
<tr><td><p>奖励中心</p></td><td><p>查询通过各种方式发出的所有的奖励记录，并具备主动给用户发卡券、实物奖励的功能</p></td></tr>
<tr><td><p>权益中心</p></td><td><p>主要用于查询 APP 内的行情商店产生的行情订单数据</p></td></tr>
</tbody>
</table>

## 权益使用流程

适用：运营人员，权益系统涉及到下列几个主体：
权益系统：运营人员负责配置管理权益项目 (卡劵福利/奖励中心/权益中心)
APP  端：客户与各种权益做交互行为互动
结算系统：当客户与权益项目作交互时所产生的相关帐务处理
数据服务系统：这部份是指一些权益项目与行情服务开通有关 (若有）
交易系统：这部份是指一些权益项目与交易服务使用有关 (若有）

<img src="/assets/FF93bUxneosgg4xCMxbcGwh3nMb.jpeg" src-width="1734" src-height="2634" align="center"/>

## 1.卡券福利

### 1.1 功能菜单目录

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>菜单名称</p></td><td><p>功能说明</p></td></tr>
<tr><td><p>卡券配置</p></td><td><p>主要功能为根据卡券模版配置对应的卡券，以及对已有卡券进行查询</p></td></tr>
<tr><td><p>卡券管理</p></td><td><p>主要对已发放出去的所有卡券进行管理，可查询到卡券具体发给谁，以及卡券当前状态与使用情况。</p></td></tr>
<tr><td><p>卡券结算</p></td><td><p>主要为所有已经结算完成且进行金额返还的卡券结算流水表单，如先收后返的平台费、免佣卡等卡券使用所产生需要返还现金的流水，而自动抵扣的免佣卡不生成流水则不会提现在表单中</p></td></tr>
<tr><td><p>实物奖品</p></td><td><p>主要用于根据实物奖励模版配置实物奖励，以及对已有实物奖励进行查询</p></td></tr>
<tr><td><p>实物发放管理</p></td><td><p>对实物奖励进行发货，导入物流单号等。</p></td></tr>
</tbody>
</table>

### 1.2 卡券配置

执行菜单：运营系统&gt;权益系统&gt;卡劵福利&gt;卡劵配置

<img src="/assets/NkIDbwJFDoAVy4xKdigc8KR3nqb.png" src-width="2784" src-height="1190" align="center"/>

列表功能操作

- 查询：可通过卡券的商品模版代码、标题、卡券类型，有效时间等筛选查询已有卡券
- 查看：点击查看则可见当前卡券所有配置字段信息
- 编辑：点击编辑则可编辑当前卡券字段与规则

（谨慎使用，修改保存之后的字段会影响到当前线上已发放的卡券信息）

- 复制：当想要快速创建相似卡券时，点击复制可直接复制当前卡券模版的信息，再进行部分字段修改即可快速创建新的卡券。

#### 1.2.1 新建卡券

本作业提供新建卡券工具，在此处创建卡券并获得奖励模版编号后，可用于之后通过活动系统等形式的发放

当前 whale 的权益系统支持配置以下类型的卡券权益

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>卡券类型</p></td><td><p>对应权益说明</p></td></tr>
<tr><td><p>股票卡</p></td><td><p>设置对应的特定股票/指数/基金及其股数，用户得到卡券后即代表可兑换相应数量的该股票指数/基金</p></td></tr>
<tr><td><p>现金卡</p></td><td><p>用户领取本卡券后即会向其账户中充入对应现金，相当于红包</p></td></tr>
<tr><td><p>行情卡</p></td><td><p>用户得到卡券并激活后，可查看对应的行情内容</p></td></tr>
<tr><td><p>免佣卡</p></td><td><p>用户使用该卡，佣金可以得到一定程度直至全部免除</p></td></tr>
<tr><td><p>基本面卡</p></td><td><p>用户获得后可以查看对应的基本面信息</p></td></tr>
<tr><td><p>打新手续费卡</p></td><td><p>用户使用该卡，在认购新股时可以免除相应额度的手续费</p></td></tr>
<tr><td><p>股票现金卡</p></td><td><p>用户交易时选择使用该卡券，交易后的三个工作日内会返现卡面金额</p></td></tr>
<tr><td><p>平台费抵扣卡</p></td><td><p>用户使用该卡，可以按一定规则抵扣平台费</p></td></tr>
<tr><td><p>融资利息卡</p></td><td><p>用户使用该卡，融资利息可以获得一定折扣直至免除</p></td></tr>
</tbody>
</table>

<b>操作说明</b>

点击右上角“新建”按钮后打开如下页面

卡券信息分为基本信息和规则配置两部分，对于每种卡券类型，基本信息所需要配置的字段相同，规则配置所需要的字段有所差别

<img src="/assets/ZURcb88s0oLkQNx9xfYcBicdn5g.png" src-width="1668" src-height="1960" align="center"/>

<b>基本信息</b>

选择对应要创建的卡券类型，选择后每种卡券的基本信息配置字段相同

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>卡券类型</p></td><td><p>按照所购买的产品不同将展示不同卡券种类。</p></td></tr>
<tr><td><p>卡券标题</p></td><td><p>可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>卡券有效期</p></td><td><p>分为固定有效期和相对有效期两种模式</p>
<ul>
<li>设置固定有效期为卡券在固定时间段内有效，例如 2023 年 1 月 1 日至 2023 年 1 月 31 日有效期卡券，不管在何时发放何时领取，用户收到后使用日期都不变；</li>
<li>设置领取后 XX 天后有效则按照领取时间起开始算有效时间，例如设置卡券领取 7 天后有效，则用户在 2023 年 1 月 1 日领取卡券，卡券有效期则 Wie2023 年 1 月 1 日至 2023 年 1 月 8 日。</li>
</ul></td></tr>
<tr><td><p>卡券价值</p></td><td><p>配置当前卡券币种以及对应价值/价值上限。<br/>部分卡券会使用此值作为结算价值，如：现金卡、股票现金卡、平台费抵扣卡、全额免佣卡等</p></td></tr>
<tr><td><p>卡券使用说明</p></td><td><p>卡券使用说明，填写后将在卡券中心，以及卡券选择页面中展示<br/>可以在交易环节使用的卡券类型（如平台费抵扣卡、股票现金卡、免佣卡）该字段建议填写，以便指导用户使用</p></td></tr>
<tr><td><p>备注</p></td><td><p>用于操作人员个人备忘，非必填</p></td></tr>
</tbody>
</table>

<b>规则配置</b>

选择对应要创建的卡券类型后，每种类型需要设置规则字段不一样，以下详细描述

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="127"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>卡券类型</p></td><td><p>规则字段</p></td><td><p>配置说明</p></td></tr>
<tr><td rowspan="2"><p>股票卡</p></td><td><p>指定股票</p></td><td><p>必填项，单选。兑换后可获得对应股票代码股票</p></td></tr>
<tr><td><p>可兑换股票股数</p></td><td><p>必填项，填写单张可兑换的股票的股数</p></td></tr>
<tr><td><p>现金卡</p></td><td><p>/</p></td><td></td></tr>
<tr><td><p>行情/基本面卡</p></td><td><p>数据权益标签</p></td><td><p>必填项，代表获得该卡后可查看对应数据权益服务包中的内容</p></td></tr>
<tr><td rowspan="4"><p>免佣卡</p></td><td><p>适用市场</p></td><td><p>必填项，可多选。即可使用该卡进行免佣的市场有哪些，可配置单市场也可配置多市场</p></td></tr>
<tr><td><p>适用标的类型</p></td><td><p>必填项，可多选。</p></td></tr>
<tr><td><p>结算模式</p></td><td><p>必填项，单选，支持直接抵扣和先收后返两种模式</p>
<ul>
<li>直接抵扣：交易时直接免除相应佣金</li>
<li>先收后返：交易后三个工作日内退还相应佣金</li>
</ul></td></tr>
<tr><td><p>免佣模式</p></td><td><p>必填项，单选，选择直接抵扣后，会出现三种模式：</p>
<ul>
<li>终生免佣：即免除该用户在平台内当前市场交易产生的所有佣金，有效期为终身。（用户注销后重新注册的除外）</li>
<li>金额次卡：设置使用次数，每次免除金额为卡券价值/次数</li>
<li>折扣次卡：按照配置比例进行佣金优惠，例如配置 80%，则收取 80% 佣金。免除 20%。有最多使用次数，并可设置单次金额上限<br/>选择先收后返后，有两种模式可选：</li>
<li>全额免佣：即支持按照当前卡券价值全额免佣，直到扣完全部额度为止</li>
<li>按比例免佣：即按照配置比例进行佣金优惠。例如配置 80%，则收取 80% 佣金。免除 20%</li>
</ul></td></tr>
<tr><td rowspan="3"><p>打新手续费卡</p></td><td><p>指定 IPO 可用</p></td><td><p>非必填，单选。可选择指定新股可用。</p></td></tr>
<tr><td><p>打新方式</p></td><td><p>必填项，单选。可选择融资打新或现金打新时使用该卡券</p></td></tr>
<tr><td><p>融资额度门槛</p></td><td><p>当选择融资打新时可选填，设置后则只有在大于该融资额度打新时才可使用本卡券</p></td></tr>
<tr><td rowspan="3"><p>股票现金卡</p></td><td><p>指定股票</p></td><td><p>非必填，单选。不选则可通用。选择后则只有对应股票交易或兑换可使用。</p></td></tr>
<tr><td><p>适用市场</p></td><td><p>必填项，可多选。即可使用该卡进行交易的股票市场有哪些，可配置单市场也可配置多市场</p></td></tr>
<tr><td><p>适用标的类型</p></td><td><p>必填项，单选。当前支持正股交易、期权交易两种类型现金卡配置</p></td></tr>
<tr><td><p>平台费抵扣卡</p></td><td><p>可使用次数</p></td><td><p>必填项，即当前卡券可抵扣多少次平台费。如卡券价值为 30 港币，抵扣次数为 3，则单次可抵扣上限 10 港币。</p></td></tr>
<tr><td rowspan="2"><p>融资利息卡</p></td><td><p>优惠方式</p></td><td><p>必填项，单选。支持免息、折扣两种优惠模式选择</p>
<ul>
<li>免息：则有效期内所产生融资利息直接免除</li>
<li>折扣：则有效期内所产生融资利息直接打折收取。</li>
</ul></td></tr>
<tr><td><p>折扣率</p></td><td><p>选择折扣优惠时，必填字段。设置折扣为当前收取折扣。例如 80%，则直接收取 80% 利息，优惠 20%。</p></td></tr>
</tbody>
</table>

填好这些配置项后，点击确定，则生成对应卡券以及奖品模版代码。

#### 1.2.2 卡券管理

菜单入口：运营系统&gt;权益系统&gt;卡劵福利&gt;卡劵管理

本作业提供卡券发放数据查看，列表为每个卡券的每一笔发放记录（不论通过何种方式发出）

可通过卡券编号、奖励模版编号、卡券类型、到账时间、客户编号、卡券状态等筛选特定记录筛选查看和导出

<img src="/assets/PzMLba9UWozViSxUe9WcjxEUnth.png" src-width="2758" src-height="820" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>卡券编号</p></td><td><p>卡券通过各种用户发放给用户后，会生成一个卡券编号，相当于一个记录编号对应这一笔发放记录</p></td></tr>
<tr><td><p>客户编号</p></td><td><p>收到卡券的用户 id</p></td></tr>
<tr><td><p>客户姓名</p></td><td><p>收到卡券的用户姓名</p></td></tr>
<tr><td><p>卡券类型</p></td><td><p>这一条记录中发放卡券的类型</p></td></tr>
<tr><td><p>卡券标题</p></td><td><p>该卡的标题 | 卡券的奖励模版代码</p></td></tr>
<tr><td><p>有效期</p></td><td><p>开始时间为用户实际获得卡券的时间，结束时间为根据规则算出的卡券到期时间</p></td></tr>
<tr><td><p>状态</p></td><td><ul>
<li>未使用：卡券还未开始使用</li>
<li>使用中：部分有使用周期的卡券类型会有使用中状态，即卡券当前已使用了部分。例如：10 次卡，当前已使用 3 次，则状态为使用中</li>
<li>已使用：全部价值均使用完毕，例如：50 次卡，当前已使用 50 次则状态为已使用</li>
<li>已过期：卡券未使用或未全部使用完就到了卡券有效期，均称为已过期</li>
<li>已锁定：未全部使用但当前该卡已被绑定不可使用了。例如：股票现金卡，下单时选择本卡，卡券状态即变为已锁定，不可再次使用。后续成交后卡券状态变为已使用，未成交变为未使用</li>
</ul></td></tr>
<tr><td><p>总价值</p></td><td><p>卡券价值</p></td></tr>
<tr><td><p>到账时间</p></td><td><p>卡券发放给用户的时间</p></td></tr>
<tr><td><p>来源</p></td><td><p>即通过何种方式发出的卡券，目前支持通过活动中台或通过任务中心进行发放</p></td></tr>
</tbody>
</table>

#### 1.2.3 卡券结算

菜单入口：运营系统&gt;权益系统&gt;卡劵福利&gt;卡券结算

本作业提供卡券结算数据查看，适用于会返现的卡券（免佣卡和股票现金卡）

列表为每一笔返现记录，每次返现成功视为当次结算成功

可通过卡券编号、用户编号、结算日期、活动代码、核销场景、进行筛选查看

<img src="/assets/Nzmkbz2IpoaHl9xXEjLcTof4n3e.png" src-width="2750" src-height="784" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>每一笔返现记录的编号</p></td></tr>
<tr><td><p>客户编号</p></td><td><p>收到返现的用户 id</p></td></tr>
<tr><td><p>客户姓名</p></td><td><p>收到返现的用户姓名</p></td></tr>
<tr><td><p>卡券编号</p></td><td><p>这一条记录中产生返现的卡券编号</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>发放该卡券的活动名称</p></td></tr>
<tr><td><p>活动代码</p></td><td><p>发放该卡券的活动代码</p></td></tr>
<tr><td><p>核销场景</p></td><td><p>股票、打新</p></td></tr>
<tr><td><p>关联流水号</p></td><td><p>核销业务内部流水号</p></td></tr>
<tr><td><p>市场</p></td><td><p>使用卡券时的股票市场</p></td></tr>
<tr><td><p>返佣金额</p></td><td><p>本次返佣的金额</p></td></tr>
<tr><td><p>余额</p></td><td><p>对于免佣卡来说，可以多次使用，故单次返佣后可能还有余额；对于股票现金卡，只能单次使用，返现后余额为 0</p></td></tr>
<tr><td><p>货币</p></td><td><p>返现及余额币种</p></td></tr>
<tr><td><p>发放状态</p></td><td><p>返现是否发放成功，一般状态都是「发放成功」</p></td></tr>
<tr><td><p>核销日期</p></td><td><p>返现，及卡券本次结算的日期</p></td></tr>
</tbody>
</table>

### 1.3 实物奖品

执行菜单：运营系统&gt;权益系统&gt;卡劵福利&gt;实物奖品

<img src="/assets/SdqTbDUsgo2KgPxx4KIcDE9TnMg.png" src-width="2432" src-height="1142" align="center"/>

列表功能操作

- 查询：可通过奖品模版代码、奖品类型、创建时间等筛选查询
- 查看：点击查看则可见当前实物奖品所有配置字段信息
- 编辑：点击编辑则可编辑当前实物奖品信息。
- 复制：当想要快速创建相似实物奖品时，点击复制可直接复制当前物品信息，再进行部分字段修改即可快速创建新的实物奖品。

#### 1.3.1 新建实物奖品

点击页面右上角“新建模版”按钮，将打开以下页面

<img src="/assets/Wkd4b6lgxoKQ9Jxd7sUcOOwdn3p.png" src-width="1680" src-height="2645" align="center"/>

配置面板进行如下字段配置

<table>
<colgroup>
<col width="111"/>
<col width="783"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>奖品类型</p></td><td><p>当前仅支持实物奖励一种奖品类型，后续拓展其他类型</p></td></tr>
<tr><td><p>奖品图片</p></td><td><p>按照建议尺寸上传图片即可</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>奖品概述</p></td><td><p>可对实物奖品进行简单介绍供用户查看</p></td></tr>
<tr><td><p>领取截止时间</p></td><td><p>分为固定时间和相对时间两种模式。</p>
<ul>
<li>设置固定时间，则奖品在固定时间之前可领取，不管在何时发放何时领取，用户收到后均需要在该时间之前领取或填写邮寄地址才有效，否则奖励将直接过期。</li>
<li>设置发放后 x 天内有效，则按按照产生奖励记录开始算起，x 天内用户需要领取或填写邮寄地址，否则奖励将直接过期</li>
</ul></td></tr>
<tr><td><p>价值</p></td><td><p>配置当前商品的币种以及对应价值</p></td></tr>
<tr><td><p>实物领取方式</p></td><td><p>可多选。选择线下领取后，需填写线下领取地址，改地址会展示给用户；选择邮寄，则在用户侧会出现填写邮寄地址的入口</p></td></tr>
</tbody>
</table>

填写好以上信息后，点击提交则创建成功，系统自动生成对应奖品模版代码

#### 1.3.2 实物发放管理

实物发放业务流程

<img src="/assets/MLxTbHMflo1xMsxN15xcluEVnDh.jpeg" src-width="1114" src-height="2174"/>

执行菜单：运营系统&gt;权益系统&gt;卡劵福利&gt;实物发放管理

本作业可通过线上线下结合操作为获得实物奖励的用户发货，已提供查询发货记录的功能

<b>发货操作说明：</b>

用户获得实物奖励后，会在实物奖励发放管理处产生一条记录。之后用户在手机侧上传邮寄地址后，需给用户发货，执行这一作业需要操作如下：

<b>（1）筛选已填写地址的用户</b>

<img src="/assets/NRlNbpwoloErQcxG5cJczeppndh.png" src-width="2782" src-height="880" align="center"/>

当用户收到奖励未填写地址时，发货状态为「未填写地址」，用户填写地址后，该状态则变更为「已填写地址」

可以通过此处筛选出已填写地址待发货的记录

<b>（2）导出地址</b>

筛选出已填写地址的用户后，可以导出用户填写的地址信息，进行线下发货操作

<img src="/assets/C9yEbcimFoHzf9xrYMXccY5fnQg.png" src-width="2758" src-height="946" align="center"/>

为防止导出地址后用户又进行地址修改，需锁定该记录状态，导出信息后，可批量将记录的发货状态变更为「发货中」，变更后用户不可再修改地址

<img src="/assets/LziPbisuCo57hsxLXpcc2VkWnjb.png" src-width="2758" src-height="1608" align="center"/>

<b>（3）上传物流单号</b>

随后进行线下发货，发货后得到物流单号，需要填写至系统中，以便用户查看

只有少量物流单时，可选择逐个输入，点击每天记录的“发货”按钮，在弹框中输入物流单号

<img src="/assets/Bj6abbAZRoWhtexFad6cGnFMnie.png" src-width="2770" src-height="1036" align="center"/>

若操作量多时，可点击页面右上角“批量导入物流单号”，通过上传文件方式批量导入物流单号

<img src="/assets/J2YqbODJboj1tXx2ZWZcqZngnNh.png" src-width="2788" src-height="1640" align="center"/>

上传物流单号后，实物奖励发放流程完毕。

## 2.奖励中心

奖励中心用于汇总通过各种发放形式发出的额各类奖励的发放记录，并提供手动发奖和审批用户资产兑换的功能

### 2.1 奖励发放

本作业用于查询所有发放的奖励记录与手动发奖

#### 2.1.1 查询奖励记录

菜单入口：运营系统&gt;权益系统&gt;奖励中心&gt;奖励发放

<img src="/assets/Tk5Lb4yyxodAgsx7hbIccwZdnmc.png" src-width="2788" src-height="1042" align="center"/>

<table>
<colgroup>
<col width="143"/>
<col width="783"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>发放流水号</p></td><td><p>业务自动赋予的流水号</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>发放该奖励的活动及活动代码</p></td></tr>
<tr><td><p>客户编号</p></td><td><p>获得奖励的客户 id</p></td></tr>
<tr><td><p>奖励类型</p></td><td><p>获得的奖励的类型，即权益中心支持的权益类型，可能是现金、卡券、实物</p></td></tr>
<tr><td><p>奖励批次号</p></td><td><p>业务自动赋予的流水号</p></td></tr>
<tr><td><p>奖励价值</p></td><td><p>创建奖品时备注的每个奖品的价值</p></td></tr>
<tr><td><p>奖品模版代码</p></td><td><p>发放的奖品对应的奖品模版代码（奖品创建后即会生成，卡券福利部分有详细介绍）</p></td></tr>
<tr><td><p>状态</p></td><td><p>支付成功状态的奖励为发放至用户</p></td></tr>
<tr><td><p>奖励发放时间</p></td><td><p>奖励发放至用户侧的时间</p></td></tr>
<tr><td><p>操作人</p></td><td><p>如果是人工发放奖励，会显示发放操作人</p></td></tr>
<tr><td><p>备注</p></td><td><p>如果是人工发放奖励，会显示操作人发放时备注的内容，非必填</p></td></tr>
</tbody>
</table>

#### 2.1.2 手动发放奖励

适用场景：如活动系统中提到的非标准活动所述，一些情况下无具体规则，单纯需要给用户发放礼品，如回馈老客户；或在一些线上活动中有查漏补缺需求，将用到手动发放奖励

<b>给单一用户发奖</b>

点击右上方「新建」按钮，打开新建发奖弹窗

<img src="/assets/BafOb2MKmod6mPxxHt3cS8Ngnce.png" src-width="2792" src-height="310" align="center"/>

<img src="/assets/Q53qbqq2UoKj68xMrGcc2Nmxnze.png" src-width="2816" src-height="1646" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>客户</p></td><td><p>选择被发奖励的客户，支持根据用户 id、用户注册电话、用户注册邮箱来定位到客户</p></td></tr>
<tr><td><p>奖励类型</p></td><td><p>目前权益系统支持的权益类型：卡券、现金、实物<br/>根据不同奖励类型，需填写关联字段<br/>卡券：需从下拉框中选择已创建的卡券<br/>实物：需从下拉框中选择已创建的实物奖品<br/>现金：需填写金额及币种</p></td></tr>
<tr><td><p>奖励活动</p></td><td><p>此次发放必须挂靠一个活动以便财务归档，可从已创建的标准活动及非标准活动中选择</p></td></tr>
<tr><td><p>用户批次识别</p></td><td><p>系统自动赋予，无特别必要不用修改</p></td></tr>
<tr><td><p>备注</p></td><td><p>发放人员备忘，非必填</p></td></tr>
</tbody>
</table>

点击确定后，生成发放记录，若设有审批环节，则本条发放记录进入审批流，审批通过后发放，不通过取消发放；若审批流为自动通过，则本条记录开始执行发放操作。

<b>给批量用户发奖</b>

若操作量多时，可点击页面右上角“批量发放奖励”，通过上传文件方式一次性给一批用户发奖

<img src="/assets/CP5CbIbVXovcl2xtPG9cuumxnIf.png" src-width="2782" src-height="378" align="center"/>

<img src="/assets/JZlbbHr86oqI8kxv09Schoj8nkh.png" src-width="2780" src-height="1600" align="center"/>

首先选择发放的奖励类型，随后在下方模版处下载模版文件（不同奖励类型对应的模版不同，步骤不可颠倒）

按照模版填写好所需字段后，将文件拖入输入框中上传

点击确定，生成对应数量的发放记录，若设有审批环节，则这些条发放记录进入审批流，审批通过后发放，不通过取消发放；若审批流为自动通过，则这些条记录开始执行发放操作。

### 2.2 资产处置

本作业用于处理用户的资产（股票和现金），当用户获得现金时可在此查询记录，当用户使用卡券兑换股票时，可在此进行审批操作

用户可以使用股票卡兑换相应股票，也可以累计数张股票现金卡，直至他们的总价值超过一股价格，再一次性使用这些卡券兑换股票

菜单入口：运营系统&gt;权益系统&gt;奖励中心&gt;奖励发放

<img src="/assets/CEGtbE4wIouI4sxcOSwcagcInjh.png" src-width="2750" src-height="1004" align="center"/>

现金及现金卡一般直接发放，兑换股票类型，需在此审批后，对应股数的股票才会转到对应账户中

## 3.权益中心

权益中心目前用于行情商品管理，以及查看、导出行情商品产生的订单

### 3.1 权益商店

菜单入口：运营系统&gt;权益系统&gt;权益中心&gt;权益商店

<img src="/assets/FL3TbPUfaoR0NFxkKmWcK14bnvd.png" src-width="2752" src-height="1002" align="center"/>

如果订阅了 whale 的内容服务中的行情内容，则可以将行情查看权限售卖给用户，目前 whale 的工作人员会帮助每一位租户创建和管理行情商品，在此不做过多说明

### 3.2 权益订单

菜单入口：运营系统&gt;权益系统&gt;权益中心&gt;权益订单

此作业用于查询，导出行情商店产生的订单，供运营和财务人员使用

<img src="/assets/Dgtzb9jMGoElfAxyw2Dcy4iNnXg.png" src-width="2420" src-height="730" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>订单号</p></td><td><p>用户购买订单流水号</p></td></tr>
<tr><td><p>产品名称</p></td><td><p>用户所购买的行情商品名称</p></td></tr>
<tr><td><p>付款人</p></td><td><p>付款的用户 ID</p></td></tr>
<tr><td><p>货币类型</p></td><td><p>付款币种</p></td></tr>
<tr><td><p>产品成本</p></td><td><p>产品实际成本价格</p></td></tr>
<tr><td><p>周期</p></td><td><p>该行情可使用的周期，产品 + 周期组成一个实际的 sku</p></td></tr>
<tr><td><p>支付额度</p></td><td><p>用户付款金额</p></td></tr>
<tr><td><p>支付时间</p></td><td><p>用户进行支付的时间</p></td></tr>
<tr><td><p>支付渠道</p></td><td><p>用户支付的渠道，当前提供：现金支付，Stripe 支付，ApplePay（仅苹果系统）</p></td></tr>
<tr><td><p>支付流水号</p></td><td><p>有支付行为后产生的流水号</p></td></tr>
<tr><td><p>下单时间</p></td><td><p>订单产生的时间（下单时间早于支付时间）</p></td></tr>
<tr><td><p>超时时间</p></td><td><p>订单产生后 40 分钟之内未支付成功则将超时，此处未未完成的订单的超时时间</p></td></tr>
<tr><td><p>支付状态</p></td><td><p>未支付：建立了订单还未支付<br/>支付中：支付正在进行中<br/>支付成功：用户已支付成功，行情卡还未发放<br/>支付失败：用户有支付动作但支付失败<br/>清算成功：用户购买成功并且行情卡已发放给用户<br/>支付超时：订单建立后 40 分钟之内未支付成功<br/>已关闭：用户手动关闭订单<br/>（其他无需关注）</p></td></tr>
</tbody>
</table>

## App 端用户功能

以下展示前端  APP 有关的配置呈现效果：

### 卡券

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>App 入口</b></p>
<img src="/assets/MscXb8U7KodWEIx6wRzcPdchnug.png" src-width="628" src-height="1352" align="center"/>

<p>我的 - 我的卡券</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>我的卡券</b></p>
<img src="/assets/EDeEbd2wdoZRuwxAD5oc2IYZnBd.png" src-width="624" src-height="1360" align="center"/>

<p>用户可自行查看当前已有卡券以及卡券状态</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>交易使用卡券</b></p>
<img src="/assets/OjY3b3jRSoyDDcxCf7scavNJnrf.png" src-width="674" src-height="1366" align="center"/>

<img src="/assets/Nt8WbSAo0oOqf2xUtHZcWlUonSd.png" src-width="750" src-height="1624" align="center"/>

</div>
<div class="w-[25%]" width-ratio="25">
<p><b>打新使用卡券</b></p>
<img src="/assets/J9z1byDzsoTwWyx2Qhzciofentd.jpeg" src-width="724" src-height="1610" align="center"/>

</div>
</div>

### 奖励

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<p><b>App 入口</b></p>
<img src="/assets/UBDzbE9wno8h8IxE3tBcg1bbnLf.png" src-width="620" src-height="1366" align="center"/>

<p>我的 - 奖励记录</p>
<img src="/assets/BDomb6mPOoVCzmxT9nJcpDBJntb.png" src-width="626" src-height="1360" align="center"/>

<p>我的 - 活动中心 - 奖励</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>奖励记录</b></p>
<img src="/assets/HyG4b1X2aop949xSQR1cf9JhnH7.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有历史记录</p>
<img src="/assets/SBx1bmkw6oUof2xDIAUcltmxnPd.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>可筛选类别进行查看</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>实物奖励领取</b></p>
<img src="/assets/QoVCbrFw5oUkeuxHErUchiB7nsg.png" src-width="750" src-height="1624" align="center"/>

<p>输入地址与电话</p>
<img src="/assets/GLyzbBtx9og5fqx6HYTcqMdYnFe.png" src-width="750" src-height="1626" align="center"/>

<p>确认邮寄信息</p>
<img src="/assets/QjHpb2ZCkowquYx7bqpcCE0PnNb.png" src-width="750" src-height="1296" align="center"/>

<p>查看物流单号</p>
</div>
</div>

### 权益商店

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>商店入口</b></p>
<img src="/assets/O9QQbQtl7ojLErxqqzVc8YrVnz3.png" src-width="614" src-height="1366" align="center"/>

<img src="/assets/Ave1bImSpoMlwextaaFc7K4tn3g.png" src-width="626" src-height="1374" align="center"/>

<p>我的 - 我的行情 - 行情商店</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>行情商店</b></p>
<img src="/assets/LaYibIKfaou2tUxSmYIcOfpSn6g.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有产品，可分 tab 切换不同市场行情产品列表</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>购买产品</b></p>
<img src="/assets/LsPBbeU5sowKT1xw8zIcFXTqnMe.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>选择对应产品、对应套餐支付购买</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>购买记录查看</b></p>
<img src="/assets/K18MbF2VVojVvZxWRJCc0QVanBd.png" src-width="628" src-height="1330" align="center"/>

<img src="/assets/HUembGSCioUNOcxKOhecJIuXnjf.jpeg" src-width="1080" src-height="2338" align="center"/>

</div>
</div>

