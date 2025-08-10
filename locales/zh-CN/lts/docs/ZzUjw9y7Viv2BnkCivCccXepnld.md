---
title: 2024-03-18 更新日志
slug: 24-03-18
sidebar_position: 35
---


# 2024-03-18 更新日志

# 🎉 新功能

- 支持港股国配
    - IPO 支持港股国配
    - 路径：「新股认购」-「新股认购」-「港股国配」
    <img src="/assets/AE0Tbk9WxoISrkxGaHncuw6JnRc.png" src-width="3304" src-height="1708" align="center"/>

- 新增客户组及客户保证金应用客户组功能
    - 新增客户组，支持应用保证金、报表业务
    - 路径：「风控管理」-「名单管理」-「客户组」
    - 权限：
        - 客户组查询：`credit_limit.client_group_query`
        - 客户组操作：`credit_limit.client_group_operation`
    - 客户保证金支持选择客户组和股票组创建
    - 路径：「风控管理」-「保证金」-「客户保证金」
    [output.gif](/assets/PPsabDrproaImWxGfrbcLYM2nTd.gif)

- 在计费前修改下单渠道
    - 场景：在计费前修改用户的下单渠道，并基于此进行清算
    - 操作：开始一键清算-&gt;暂停一键清算（数据同步步骤）-》编辑下单渠道
    - 编辑下单渠道路径：「清算管理」-「流水管理」-「交易订单」
    - 注意 1：在清算计费后不支持编辑收费渠道
    - 注意 2：清算计费后不再支持重新点击数据同步。如先重新点击的，先操作清算撤销
    <img src="/assets/SwHZbmfmIogU9NxV4oacG7MWn4W.png" src-width="3578" src-height="1798" align="center"/>

- 支持计费后，日切前重新补单功能
    - 场景：在计费后日切前，可重新进行后台补单或者前台补单
    - 流程：先操作清算撤销-&gt;后台补单（前台补单）-&gt;重新执行日终
        - 操作清算撤销时，资产类回撤选择<b>不操作</b>&新增补单选择<b>加入清算</b>
    - 清算撤销路径：「清算管理」-「日终管理」-「清算撤销」
    <img src="/assets/OBHebRPtMoeyXFxj3OdchQ31nFc.png" src-width="3578" src-height="1798" align="center"/>

- 公司行动支持展示客户状态
    - 公司行动支持展示客户状态
    - 券商可以联系客服，设置销户客户执行或者不执行。系统默认执行
    <img src="/assets/GvWcb5CxDoSEnpxHQVgc6sVYnBb.png" src-width="3578" src-height="1900" align="center"/>
    <img src="/assets/IMzabhOR1oU3JUxCGorctnUXnvc.png" src-width="3578" src-height="1900" align="center"/>

- 开户列表详情可配置交易权限
    - 开户列表详情 -「关联账户列表」增加：未开通账户，可在 KYC 审核过程中修改账户的交易市场和权限
    - 路径：「客户管理系统」-「KYC」-「开户列表」-「详情」
    - 注意：交易权限配置需结合客户开通账户的类型，是后台选择的市场权限与开通账户功能的交集。如：后台选择开通港股及虚拟资产交易权限，账户类型为虚拟资产账户，最终开通的账户仅虚拟资产交易权限
    - 权限：
        - 展示交易权限入口：`account.trade_permission`
        - 修改交易权限：`account.update_trade_permission`
        <img src="/assets/C4J4bWyZLo59ynxBhbpc75c2nsc.png" src-width="2140" src-height="1216" align="center"/>

- 开户列表详情增加专业投资者认证和风险测评信息
    - 审核人员如有对应查看权限，可在开户详情查看专业投资者认证记录及风险测评信息；点击可跳转至详情页面
    - 路径：「客户管理系统」-「KYC」-「开户列表」-「详情」
    - 权限：需申请对应权限，开户详情才会展示对应模块
        - 专业投资者认证：`customer.pi_app_record`
        - 风险测评数据查询：`kyc.risk_assessment_query`
    <img src="/assets/MdIjbrLTmoV8eoxgBt6cF1V3nAd.png" src-width="2120" src-height="1122" align="center"/>

# 🪀 改进与修复

- 临时结单支持自定义语言
    - 创建临时结单支持选择结单语言，默认为跟随 App 语言（注：此处的 App 语言以临时结单选择的截止日期对应设置为准），可以自定义切换指定语言
    - 路径：「清算管理」-「日终管理」-「结单管理」-「结单查询」
    <img src="/assets/Oyd3braTFoBKzDxklyocO92Pnwd.png" src-width="3150" src-height="1132" align="center"/>

- 平仓增加交易时段选择
    - margin call 下平仓弹窗页面 美股限价单平仓支持自定义选择“交易时段”，默认仅盘中
    - 路径：「风控管理」-「Margin Call」-「风险预警」
    <img src="/assets/LRe8bNCt0oCogaxSG78cjCb6nNe.png" src-width="1628" src-height="1712" align="center"/>

- 出入金模组部分功能新增工单审批
    - 入金申请页中【驳回】增加工单审批
    - 出金申请页中【驳回】增加工单审批
    - 异常出金模组【处理】增加工单审批
    - 客户银行卡选单下的【编辑】&【删除】增加工单审核

- 借币提醒增加异常单和规则审批
    - 编辑换汇规则需要工单审批通过才可修改成功
    - 增加异常单（换汇审核中、换汇失败、提交失败）查询入口
        - 如遇换汇审核中 可取客户汇兑单号在「款项管理」-「换汇」-「客户汇兑」查看换汇审核进度；
        - 如遇换汇失败/提交失败可联系客服人员进行反馈
    - 路径：「风控管理」-「授信额度」-「借币提醒」
    <img src="/assets/SycybkF6RoWdu7xY5MfcgWsQnTd.png" src-width="3282" src-height="1216" align="center"/>

- 手工调账状态优化
    - 手工调账的【状态】按实际调账状态使用，删除“通过”，新增“调账成功”“调账失败”“调账处理中”三个状态
        - 调账成功：审批通过并处理调账成功
        - 调账失败：可在【调账结果】查看失败原因
        - 调账处理中：系统正在处理调账
    - 路径：「资产账户」-「手工调账」
    <img src="/assets/HqGQbzxY8oPs3LxHaGwcIJpYnNf.png" src-width="1750" src-height="678" align="center"/>

- 优化清算检查等相关字段命名

<img src="/assets/URqIb7W8Zo9GJpx7EFfcM9sfnsh.png" src-width="3578" src-height="1798"/>

<img src="/assets/HBfRbtgAIo6OHHxzXENcF8B8nvb.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/JcEFblKTgojIswx0Y0EcNWQxnjd.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/XCAKbQZEgoj5gIxraPicGWPbnfb.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/CKHSbMD47oyy48x3mIycy9cunoe.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/NtjmbSQJ0o95BbxzcGXcXddmnHe.png" src-width="3578" src-height="1798" align="center"/>

