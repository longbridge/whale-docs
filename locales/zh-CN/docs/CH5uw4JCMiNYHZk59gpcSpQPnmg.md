---
title: 2024-05-06 更新日志
slug: 24-05-06
sidebar_position: 27
---


# 2024-05-06 更新日志

# 🎉 新功能

- 交收指令导出（新版）（原来的菜单下线）
    - 路径：清算管理 - 日终任务 - 交收指令导出
    - 支持导出未来日期的文件
    - 支持导出 HK、SZ、SH 多市场
    - 原来的菜单下线

<img src="/assets/DfPobOvl0oJ7RaxTi2qcFiVkneh.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/TMdlb2aKNovOsyxKehkcLjMYnkk.png" src-width="3574" src-height="1774" align="center"/>

- 企业户的账户资料中新增‘企业实体类型’字段
    - 在线下企业户的开户流程中，新增‘企业实体类型’字段，非必填
    - 在 kyc 详情页，支持新增字段的展示和编辑功能
    - 在批量修改的功能中，同步新增支持‘企业实体类型’字段的批量更新功能
    <img src="/assets/UBBpbvt4Ho4TljxWCrycFT4cnTb.png" src-width="2180" src-height="1264" align="center"/>

- 清算前准备自义定配置功能
    - 路径：业务参数设置 - 日终设置 - 清算前准备
    - 检查阶段释义：交易清算（数据同步 - 清算交收之前的检查项目）；日终清结算（数据汇总 - 日切之前的检查项目）
    - 失败后处理释义：仅提醒（不会拦截流程，仅提示）、工单审核（会拦截流程，但是可以手动通过）、强制校验（会拦截流程，必须通过）
    - 支持的操作：开启/关闭，选择失败后的处理方式
    - 可编辑时间段：操作日终任务之前
    - 编辑时需要审批，工单标识：clearing.before_clearing_ready.setting       
    - 其它：部分检查项目要求强制检查，不允许编辑
    <img src="/assets/MglsbJdCkoAhdVxzVMschP7gnpc.png" src-width="3574" src-height="1774" align="center"/>

- 日终任务合并清算和清算初始化配置功能
    - 路径：业务参数设置 - 日终设置 - 清算参数配置
    - 可编辑时间段：操作日终任务之前
    - 编辑清算初始化配置时需要审批，工单标识：clearing.update_system_config.exec  
    - 其它
        - 修改其它配置开关时请联系客户，在指导下操作      
    <img src="/assets/BGrYb998Qo00lsxDbkEcZY39n1g.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/VOFzbs4MfoEu8exMOt7c2tF1nPc.png" src-width="3574" src-height="1774" align="center"/>

- 公司行动执行完毕后增加邮件通知

<table>
<colgroup>
<col width="130"/>
<col width="414"/>
</colgroup>
<tbody>
<tr><td><p>公司行动类型</p></td><td><p>消息模板</p></td></tr>
<tr><td><p>供股类<br/>RS、ER、OO、RS</p></td><td><img src="/assets/NYGubZhMxoYFi8xRvlfcuiKDnqc.png" src-width="856" src-height="190"/></td></tr>
<tr><td><p>要约类</p></td><td><img src="/assets/N38rb798noNxM3xE9MIcjYEkned.png" src-width="828" src-height="182"/></td></tr>
<tr><td><p>拆合股、换股</p></td><td><img src="/assets/Ym8mbYpNKoZPR3xNfoCcHg4inre.png" src-width="1242" src-height="232" align="center"/></td></tr>
<tr><td><p>ADR 执行</p></td><td><img src="/assets/Iunnb2E6pozlcBx7kZ6cWBrWnab.png" src-width="1268" src-height="222" align="center"/></td></tr>
<tr><td><p>红利、红股</p></td><td><img src="/assets/AMktbfyRzoKwlbxAZslcgM3xn4d.png" src-width="1210" src-height="274" align="center"/></td></tr>
<tr><td><p>期权公司行动</p></td><td><img src="/assets/PZQHb8ZGioQuUExaJPGc6oFmnjh.png" src-width="1182" src-height="334" align="center"/></td></tr>
</tbody>
</table>

- WBO 换汇新增撤销功能
    - 针对客户提交上的换汇申请，需要根据“客户汇兑状态”进行判断，决定是否可以进行撤销。其中：当“客户汇兑状态”=「已提交」、「汇兑中」时，可以进行撤销。

<img src="/assets/MnGJbRAy9oWrQXxtrSrcq7R6nvc.png" src-width="3276" src-height="1776" align="center"/>

# 🪀 改进与修复

- 公司行动相关优化
    - 标的的搜索组件进行升级
    <img src="/assets/HZJabC6Exo7ckixgUGRcr827nlF.png" src-width="3574" src-height="1774" align="center"/>
    - BE 类不支持的自愿类公司行动增加提示。如果后台支持行权，App 不支持行权的，不会提醒客户
    <img src="/assets/PARwb6bdfobEuyxXdppcGvcPnfd.png" src-width="3574" src-height="1774" align="center"/>
    - 客户名字增加邮件发送时间，该字段展示的是这个公司行动最近的一次邮件发送时间
    <img src="/assets/PWM4b9pM1oD31dxdr1acCbtynHl.png" src-width="3574" src-height="1774" align="center"/>
    - 其它
        - BE 类兼容 BONUS CONVERTIBLE NOTE 方案类型，自动创建时映射为 BE-BONUS ISSUE
        - 优化新加坡市场消费税处理逻辑

- 清算中检查相关优化项目
    - 余额对账排除冻结流水
    <img src="/assets/BizJbnRanoEF5OxyboEckSSLnWe.png" src-width="3574" src-height="1774" align="center"/>

- 清算前准备相关优化项目
    - 收盘价确认：上一天提醒的报错项目不再报错，港股 41000 - 46999、49000 - 49499 代码段不再报错
    - 交易文件检查：当天没有发起过交易的不报错
    <img src="/assets/F9eUbl9iYoc5uWxQo77csMZUnTh.png" src-width="3574" src-height="1774" align="center"/>

- 会计中台上手费用改成从计费取数及文案调整
    - 会计中台上手费用改成从计费取数
    - 将会计中台数据源名称进行修改：
        - “其他费用账单”改为“代理商收费”
    “[LOTSNSDR]其它第三方费用 (卖出)”改为“代理商收费 - 股票交易 - 佣金（卖）”
    - “[LOTSNSCR

<img src="/assets/DwWibAQs3o4EcoxzYcOcSKjDnAg.png" src-width="2158" src-height="1152" align="center"/>

- WBO 首页 dashboard 待办名额卡显示逻辑更新
    - 出金待办：申请单状态=待提交&审批中&修改待审批&删除待审批&驳回待审批
    - 入金待办：匹配状态=「未匹配」&&加款状态=「处理中」&「修改待审批」&「删除待审批」&「驳回待审批」
    - 证券取出待办：取出申请中「待提交」与「执行中」2 个指标卡数量的合计值
    - 证券存入待办：存入申请中「待提交」与「执行中」2 个名额卡数量的合计值
    - 待审核银行卡：认证状态=待认证&&删除状态=未删除

<img src="/assets/Kv4ZbWHpAoyycbxbsVScBvAxnBf.png" src-width="3838" src-height="1802" align="center"/>

- 异常汇兑记录新增中文枚举值
    - 异常换汇记录页面中的“渠道汇兑状态”的枚举值根据语言环境做对应的展示

<img src="/assets/TizbbF5c6ovCY4xBB0TcAhcdnxh.png" src-width="3302" src-height="1708" align="center"/>

- 结单发送方式配置由客户编号更改为证券账号维度
    - 结单发送方式配置更改为「证券账号」维度，支持按单个账户的配置来发送结单（对应 APP「结单提醒」功能）
        - 列表增加 [证券账号]列
        - 批量新增文件字段需填入证券账号，根据模版填写
    - 路径：「清算管理」-「日终管理」-「结单管理」-「发送方式配置」
    <img src="/assets/QCepbMTuboCjZvxLlP2cFztOnZd.png" src-width="3212" src-height="984" align="center"/>

- 线下开户流程中「是否接收线下结单」的入口移除
    - 线下开户流程中，「是否接收线下结单」的字段移除，统壹到‘结单管理’模块维护，应用于支持 Account 维度管理结单接收方式
    - 路径：「KYC」-「资料管理」-「开户资料」- 企业户线下开户流程最后一步
    <img src="/assets/GUcdbAZy9oMzqdxSXfNc7uSXn2e.png" src-width="1232" src-height="1694"/>
    
