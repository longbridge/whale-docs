---
title: 头寸管理
slug: L4caw5q4fiphmkk468ZjKQJCpAF
sidebar_position: 5
---


# 头寸管理

# 系统介绍

本手册针对法币与加密货币头寸管理业务的后台操作全流程进行规范说明，涵盖头寸查询、调拨规则配置、自动调拨及手动调拨等核心操作环节，旨在指导后台操作人员规范开展工作，保障业务合规性与资金安全，规避操作风险。

# 前置条件

- 后台操作人员需使用专属帐号及密码登录WBO后台系统，成功登录后可进入以下核心模组：「虚拟资产管理 - 头寸管理」「款项管理 - 银行帐单 - 公司资金调拨」「业务参数设置 - 资金参数 - 结算渠道帐户」「业务参数设置 - 资金参数 - 资金调拨配置」。
- 操作人员帐号需提前具备「头寸管理」「公司资金调拨」「结算渠道帐户」「资金调拨配置」相关操作权限；若帐号无对应权限，需及时联系系统管理员提交权限申请，待权限开通后方可开展操作。

# <b>操作路径及权限说明</b>

- 以下为各核心模组的权限名称、对应操作权限及权限标识，操作人员需根据自身权限开展对应操作，严禁越权操作。
    <table header_row="1">
    <colgroup>
    <col width="317"/>
    <col width="163"/>
    <col width="400"/>
    </colgroup>
    <thead>
    <tr><th><p>操作路径</p></th><th><p>权限说明</p></th><th><p>权限标识</p></th></tr>
    </thead>
    <tbody>
    <tr><td rowspan="2"><p>「虚拟资产管理 - 头寸管理」</p></td><td><p>头寸管理查询</p></td><td><p>assets.position_anagement_inquiry_query</p></td></tr>
    <tr><td><p>头寸管理操作</p></td><td><p>assets.position_anagement_inquiry_operation</p></td></tr>
    <tr><td rowspan="3"><p>「款项管理 - 银行帐单 - 公司资金调拨」</p></td><td><p>公司资金调拨查询</p></td><td><p>atm.company_fund_allocation_inquiry</p></td></tr>
    <tr><td><p>公司资金调拨操作</p></td><td><p>atm.company_fund_allocation_operation</p></td></tr>
    <tr><td><p>公司资金调拨审批</p></td><td><p>atm.company_fund_allocation_approval</p></td></tr>
    <tr><td rowspan="2"><p>「业务参数设置 - 资金参数 - 结算渠道帐户」</p></td><td><p>结算渠道帐户查询</p></td><td><p>atm.settle_chnl_bank_acct_inquiry</p></td></tr>
    <tr><td><p>结算渠道帐户操作</p></td><td><p>atm.settle_chnl_bank_acct_operation</p></td></tr>
    <tr><td rowspan="2"><p>「业务参数设置 - 资金参数 - 资金调拨配置」</p></td><td><p>资金调拨配置查询</p></td><td><p>atm.funds_alloc_config_inquiry</p></td></tr>
    <tr><td><p>资金调拨配置操作</p></td><td><p>atm.funds_alloc_config_operation</p></td></tr>
    </tbody>
    </table>

# 操作说明

## <b>头寸查询操作</b>

- 登录 WBO 后台系统，透过路径「虚拟资产管理 - 头寸管理」进入对应模组，执行查询需具备权限标识：`assets.position_anagement_inquiry_query`
    - 进入模组后，可依业务需求筛选查询条件（如更新时间、币种、渠道帐号类型等），输入对应参数后点击「查询」按钮。
    <img src="/assets/JvHnbj8YfouixXx52kzjrLjlptc.png" src-width="3304" src-height="908" align="center"/>

- 若需在该模组执行后续操作，需额外申请操作权限：`assets.position_anagement_inquiry_operation`
    - 系统预设每 5 分钟自动轮询一次头寸资讯；若需查询当前渠道各帐户、各币种的即时余额，可点击【重新取得】按钮手动更新。
        <img src="/assets/VE56bjkijol06yxt9w2jEAl2pof.png" src-width="3274" src-height="882" align="center"/>
    - 针对大额帐户，可依实际需求分别配置提示头寸与拦截头寸：
        - 若已配置提示头寸，当渠道可用余额 ＜ 提示头寸时，系统将依讯息订阅设定自动发送告警通知。
            <img src="/assets/Ly2VbXlProjmRZx6aNlj0T8Ephd.png" src-width="3300" src-height="1316" align="center"/>
        - 若已配置拦截头寸，当渠道可用余额 ＜ 拦截头寸时，系统将依讯息订阅设定发送告警通知；若该帐户用于出币本金拦截或出币手续费拦截场景，系统将在「虚拟资产管理 - 出币 - 出币申请」模组执行业务拦截，规则如下：
            1. 若出币手续费帐户头寸不足，出币申请工单无法审核通过，系统拦截并提示：「渠道帐户该币种手续费不足，请先进行资金调拨。」
            2. 若出币本金帐户头寸不足，出币申请工单无法审核通过，系统拦截并提示：「渠道帐户该币种本金不足，请先进行资金调拨。」
            3. 若本金与手续费帐户同时头寸不足，出币申请工单无法审核通过，系统拦截并提示：「渠道帐户该币种本金及手续费不足，请先进行资金调拨。」
                <div class="flex gap-3 columns-2" column-size="2">
                <div class="w-[59%]" width-ratio="59">
                                <img src="/assets/FDsPb5B2coHNTNxL6vJjhxGlp4d.png" src-width="3330" src-height="1204" align="center"/>
                                </div>
                <div class="w-[40%]" width-ratio="40">
                                <img src="/assets/RT17bdPgGo98bMxOrZrjJuQAppf.png" src-width="3320" src-height="1752" align="center"/>
                                </div>
                </div>

## 结算渠道帐户配置

- 执行头寸调拨业务前，需先完成上游渠道帐户资讯配置，配置生效后方可进行各帐户间的资金转帐操作。
- 登录WBO后台系统，按照路径「业务参数设置 - 资金参数 - 结算渠道帐户」进入对应模组，执行配置操作需具备权限标识：`atm.settle_chnl_bank_acct_operation`。
    - 进入配置页面后，可开展「新建」「编辑」两类操作，具体流程如下：
        - 新建帐户资讯：点击「新建」按钮，如实填写结算渠道资讯（包括结算渠道、币种类型、币种）及大帐户资讯（包括大帐户号、业务场景），仔细核对所有参数无误后提交保存，配置即时生效。
            <div class="flex gap-3 columns-2" column-size="2">
            <div class="w-[71%]" width-ratio="71">
                        <img src="/assets/DcAUbFQKko1yMMxjjwbjGoHup2b.png" src-width="3266" src-height="702" align="center"/>
                        </div>
            <div class="w-[28%]" width-ratio="28">
                        <img src="/assets/NnAobHohfoUEGIxkDNCjY3i6p3g.png" src-width="3198" src-height="1742" align="center"/>
                        </div>
            </div>
        - 编辑帐户资讯：选中需修改的帐户配置记录，点击「编辑」按钮，根据实际业务需求调整相关参数，提交保存后将覆盖原有配置；需重点关注配置修改后，对当前正在执行及即将开展的头寸调拨业务可能造成的影响，避免出现业务异常。
            <img src="/assets/Q0f0bQx1joNLMgxSafWjC9K3pnb.png" src-width="3272" src-height="1738" align="center"/>

- 配置完成后，可通过具备权限标识 `atm.settle_chnl_bank_acct_inquiry` 的查询权限，进入对应模组查询已配置的所有帐户资讯，逐项核对参数准确性，确保配置资讯与实际业务需求一致。
    <img src="/assets/N68rbPRwtoN33pxWH5Pj8fpypUs.png" src-width="3252" src-height="1744" align="center"/>

## <b>调拨规则配置</b>

- 为确保系统可自动执行资金调拨，需在后台提前配置自动调拨场景及对应规则。
- 登录WBO后台系统，按照路径「业务参数设置 - 资金参数 - 资金调拨配置」进入对应模组，执行规则配置操作需具备权限标识：`atm.funds_alloc_config_operation`。
    - 进入配置页面后，可进行「新建规则」「编辑规则」「复制规则」三类操作，具体流程如下：
        - 新建规则：点击「新建」按钮，选择调拨类型为「结算帐户间划转」、出帐通道为「settlement_hashkey_hk」，并根据不同业务场景，配置对应的自动划转规则，确认参数无误后提交保存。
            <div class="flex gap-3 columns-2" column-size="2">
            <div class="w-[69%]" width-ratio="69">
                        <img src="/assets/FsIebL48bolN9SxMmrCjJv4jpvf.png" src-width="3320" src-height="1564" align="center"/>
                        </div>
            <div class="w-[30%]" width-ratio="30">
                        <img src="/assets/Flvrbr6xAoxD4oxzshhjvwQxpAb.png" src-width="3248" src-height="3560" align="center"/>
                        </div>
            </div>
        - 编辑规则：选中需修改的调拨规则，点击「编辑」按钮，根据业务调整需求修改相关参数，提交保存后将覆盖原有规则；需重点关注规则修改后，对现有正在执行的自动调拨业务及后续业务的影响，避免引发业务异常。
            <img src="/assets/ACocb5IzQo8C3HxXArPjJG2kpIe.png" src-width="3298" src-height="734" align="center"/>
        - 复制规则：可选中现有已配置的规则，点击「复制」按钮，在原有规则基础上修改相关参数，简化新建规则的操作流程，提高配置效率。
            <img src="/assets/F4MHbgyuko8tufxieWRjwAiDpBh.png" src-width="3298" src-height="734" align="center"/>

- 规则配置完成后，可通过具备权限标识 `atm.funds_alloc_config_inquiry` 的查询权限，进入对应模组查询已配置的所有调拨规则，逐项核对参数准确性，确保规则配置符合业务自动调拨需求。
    <img src="/assets/DaZqbyxfvop6Qpx7ryyjqe1OpJg.png" src-width="3320" src-height="1564" align="center"/>

## <b>自动调拨操</b>

- 自动调拨需提前完成「资金调拨配置」（参考4.3章节），系统将根据预先配置的触发条件，自动执行调拨操作，无需人工干预。目前触发自动调拨的场景包括以下两大类：
    - 定时任务划转：支持配置定时任务（如每日凌晨），按预设规则将富余资金在入币帐户、交易帐户等之间自动划拨；可支持的定时类型为：自然日、港股交易日、周。
    - 事件触发划转：
        - 头寸不足时：「虚拟资产管理 - 头寸管理」中，对应大帐户的相应渠道可用余额 ＜ 拦截头寸时，系统会根据该大帐户匹配「业务参数设置 - 资金参数 - 资金调拨配置」；若存在已启用的规则（划拨策略=自动、状态=已启用且优先级最高），则系统会依据该规则自动发起调拨；若因出帐帐户余额不足导致自动调拨失败，后续需手动发起划转。
        - 出币提交时(本金)：「虚拟资产管理 - 出币 - 出币申请」生成出币申请时，针对本金部分，系统会匹配「业务参数设置 - 资金参数 - 资金调拨配置」；若存在已启用的规则（划拨策略=自动、状态=已启用且优先级最高），则系统依据规则自动发起调拨；若因出帐帐户余额不足导致调拨失败，后续需手动发起划转。
        - 出币提交时(手续费)：「虚拟资产管理 - 出币 - 出币申请」生成出币申请时，针对手续费部分，系统会匹配「业务参数设置 - 资金参数 - 资金调拨配置」；若存在已启用的规则（划拨策略=自动、状态=已启用且优先级最高），则系统依据规则自动发起调拨；若因出帐帐户余额不足导致调拨失败，后续需手动发起划转。
        - 出币失败时(本金)：「虚拟资产管理 - 出币 - 出币申请」出币申请失败时，针对本金部分，系统会匹配「业务参数设置 - 资金参数 - 资金调拨配置」；若存在已启用的规则（划拨策略=自动、状态=已启用且优先级最高），则系统依据规则自动发起调拨；若因出帐帐户余额不足导致调拨失败，后续需手动发起划转。
        - 出币失败时(手续费)：「虚拟资产管理 - 出币 - 出币申请」出币申请失败时，针对手续费部分，系统会匹配「业务参数设置 - 资金参数 - 资金调拨配置」；若存在已启用的规则（划拨策略=自动、状态=已启用且优先级最高），则系统依据规则自动发起调拨；若因出帐帐户余额不足导致调拨失败，后续需手动发起划转。
        - 入币成功时：「虚拟资产管理 - 入币 - 入币记录」显示入币成功时，系统会匹配「业务参数设置 - 资金参数 - 资金调拨配置」；若存在已启用的规则（划拨策略=自动、状态=已启用且优先级最高），则系统依据规则自动发起调拨；若因出帐帐户余额不足导致调拨失败，后续需手动发起划转。

- 操作人员可通过「款项管理 - 银行帐单 - 公司资金调拨」模组（需具备对应atm.company_fund_allocation_inquiry查询权限），查看自动调拨的执行记录，包括调拨时间、金额、币种、发起帐户、接收帐户、业务单号等核心资讯，便于追溯核查。
    <img src="/assets/SQE8bIDDaol8f7xxalijPBKhpfc.png" src-width="3294" src-height="670" align="center"/>

- 若自动调拨失败，系统将明确提示失败原因（如帐户余额不足等）；操作人员需及时排查问题，调整对应规则或补充资金后，可手动触发重试（需具备「款项管理 - 银行帐单 - 公司资金调拨」对应操作权限），确保资金调拨顺利完成。
    <img src="/assets/Q9HEb3JVIoSKMsx3A88jmqIPpTf.png" src-width="3304" src-height="852" align="center"/>

## <b>手动调拨操作</b>

- 登录WBO后台系统，按照路径「款项管理 - 银行帐单 - 公司资金调拨」进入对应模组，执行手动调拨操作需具备权限标识：`atm.company_fund_allocation_operation`。
    - 点击「新建」按钮，如实填写调拨相关资讯，包括发起帐户、接收帐户、调拨币种、调拨金额、调拨备注（需明确注明调拨原因，便于后续追溯核查），仔细核对所有资讯无误后提交。
        <div class="flex gap-3 columns-2" column-size="2">
        <div class="w-[84%]" width-ratio="84">
                <img src="/assets/JqFVbDNxmoevCmxGIdAjsFgVphb.png" src-width="3296" src-height="694" align="center"/>
                </div>
        <div class="w-[15%]" width-ratio="15">
                <img src="/assets/VrEebTP1fo3AtQxXRq9jB6RBp1g.png" src-width="2856" src-height="3348" align="center"/>
                </div>
        </div>

- 人工通过「新建」按钮提交的调拨申请，或根据「业务参数设置 - 资金参数 - 资金调拨配置」中，审核策略为「工单审核」的调拨申请，将自动进入审批流程；需由具备权限标识 `atm.company_fund_allocation_approval` 的审批人员进行审核：
    - 审核通过后，系统将自动执行调拨操作；
    - 审核驳回的，该次调拨申请失败，若仍需进行对应资金调拨，需重新发起手动调拨申请。
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[76%]" width-ratio="76">
        <img src="/assets/Lj1tbnlHwobHV9xWVRZjw80qpcc.png" src-width="3286" src-height="686" align="center"/>
        </div>
    <div class="w-[23%]" width-ratio="23">
        <img src="/assets/LYS6b3NN8oCOTlxo1TYj6zf2pPR.png" src-width="2514" src-height="1758" align="center"/>
        </div>
    </div>

- 调拨操作完成后，操作人员可通过具备权限标识`atm.company_fund_allocation_inquiry` 的查询权限，查看手动调拨的执行状态、记录详情，逐项核对相关数据，确保调拨流程合规、数据准确无误。
    <img src="/assets/UVc7b9jqSo884XxDcoIjZQzLpJd.png" src-width="3284" src-height="1166" align="center"/>

# <b>注意事项</b>

- 操作人员需妥善保管帐号密码，严禁转借他人使用，登录后及时锁定系统，退出时需正常登出，防止帐号被盗用导致资金风险。
- 所有操作需严格按照本手册规范执行，严禁越权操作、违规调拨；操作过程中需仔细核对相关参数（如帐户资讯、金额、币种），避免操作失误。
- 调拨规则配置、手动调拨等关键操作，需做好记录留存，便于后续审计核查；若发现异常情况（如头寸异常、调拨失败、数据不符），需及时上报管理员，严禁隐瞒。
- 系统权限变更需由管理员统一操作，操作人员若需调整权限，需提交正式申请，经审批通过后生效；权限变更后，需及时熟悉新权限对应的操作范围。
- 法币与加密货币头寸变动敏感，操作人员需即时关注头寸状态，尤其是自动调拨触发阈值附近的头寸余额，提前做好资金筹备，避免因头寸不足影响业务正常开展。

