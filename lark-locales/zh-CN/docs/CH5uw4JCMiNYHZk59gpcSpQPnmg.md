---
title: 2024-05-06 更新日志
slug: CH5uw4JCMiNYHZk59gpcSpQPnmg
sidebar_position: 37
---


# 2024-05-06 更新日志

# 🎉 新功能

- 交收指令导出（新版）（原来的菜单下线）
    - 路径：清算管理-日终任务-交收指令导出
    - 支持导出未来日期的文件
    - 支持导出HK、SZ、SH多市场
    - 原来的菜单下线

<img src="/assets/Th2TbDLz0oRuZWxA9Fsj7Kpmpbj.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/DqBTbCUYAoFw0SxKtnRjY9oxpDg.png" src-width="3574" src-height="1774" align="center"/>

- 企业户的账户资料中新增‘企业实体类型’字段
    <img src="/assets/VG9eb1e42o3eH2xGpBSjTbEmp5d.png" src-width="2180" src-height="1264" align="center"/>
    - 在线下企业户的开户流程中，新增‘企业实体类型’字段，非必填
    - 在 kyc 详情页，支持新增字段的展示和编辑功能
    - 在批量修改的功能中，同步新增支持‘企业实体类型’字段的批量更新功能

- 清算前准备自义定配置功能
    <img src="/assets/BZnlb0MbYoG52WxeFPvjaG83pih.png" src-width="3574" src-height="1774" align="center"/>
    - 路径：业务参数设置-日终设置-清算前准备
    - 检查阶段释义：交易清算（数据同步-清算交收之前的检查项目）；日终清结算（数据汇总-日切之前的检查项目）
    - 失败后处理释义：仅提醒（不会拦截流程，仅提示）、工单审核（会拦截流程，但是可以手动通过）、强制校验（会拦截流程，必须通过）
    - 支持的操作：开启/关闭，选择失败后的处理方式
    - 可编辑时间段：操作日终任务之前
    - 编辑时需要审批，工单标识：clearing.before_clearing_ready.settiing
    - 其它：部分检查项目要求强制检查，不允许编辑

- 日终任务合并清算和清算初始化配置功能
    <img src="/assets/MlPibb8ZtoaxTYxFHCGjjba2pOb.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/YF7rb4mM0oTf48xGRqGjqbWTp4C.png" src-width="3574" src-height="1774" align="center"/>
    - 路径：业务参数设置-日终设置-清算参数配置
    - 可编辑时间段：操作日终任务之前
    - 编辑清算初始化配置时需要审批，工单标识：clearing.update_system_config.exec
    - 其它
        - 修改其它配置开关时请联系客户，在指导下操作

- 公司行动执行完毕后增加邮件通知
    <img src="/assets/QN8hbnjb3owZIWxIg70jUnZ2pLe.png" src-width="856" src-height="190" align="center"/>
    <img src="/assets/LwTWbs4mxowh9BxNqKjjf2bXpWy.png" src-width="828" src-height="182" align="center"/>
    <img src="/assets/A03fbciuqoU0aIxrKEDjjh9Bpnf.png" src-width="1242" src-height="232" align="center"/>
    <img src="/assets/T28Mbv93yo3BhgxbX8gjgp5ipce.png" src-width="1268" src-height="222" align="center"/>
    <img src="/assets/DQzibW8IVodsqXxc24Vj9EHBpBg.png" src-width="1210" src-height="274" align="center"/>
    <img src="/assets/SEDNbthuOovlKDxC3DojBufyprh.png" src-width="1182" src-height="334" align="center"/>
    - 供股类 RS、ER、OO、RS
    - 要约类
    - 拆合股、换股
    - ADR 执行
    - 红利、红股
    - 期权公司行动

- WBO换汇新增撤销功能
    - 针对客户提交上的换汇申请，需要根据“客户汇兑状态”进行判断，决定是否可以进行撤销。 其中：当“客户汇兑状态”=「已提交」、「汇兑中」时，可以进行撤销。

<img src="/assets/CCl7bE0DZoMbgIxoB9zjtiJDpWg.png" src-width="3276" src-height="1776" align="center"/>

# 🪀 改进与修复

- 公司行动相关优化
    <img src="/assets/F0KubVhJVoKcvKxGzDMjea3hpcg.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/FeHvbQsAPoba56xHBxvjukugpQg.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/XFGNbz6RkojOaExjxNkjP6RzpRh.png" src-width="3574" src-height="1774" align="center"/>
    - 标的的搜索组件进行升级
    - BE类不支持的自愿类公司行动增加提示。如果后台支持行权，App不支持行权的，不会提醒客户
    - 客户名字增加邮件发送时间，该字段展示的是这个公司行动最近的一次邮件发送时间
    - 其它
        - BE类兼容BONUS CONVERTIBLE NOTE方案类型，自动创建时映射为BE-BONUS ISSUE
        - 优化新加坡市场消费税处理逻辑

- 清算中检查相关优化项目
    <img src="/assets/YNH1bQdSUoHDLDx21kWjApV1pvh.png" src-width="3574" src-height="1774" align="center"/>
    - 余额对账排除冻结流水

- 清算前准备相关优化项目
    <img src="/assets/AX6mbaSNfoqhwHxdxEVjx7oIpac.png" src-width="3574" src-height="1774" align="center"/>
    - 收盘价确认：上一天提醒的报错项目不再报错，港股41000 - 46999、49000 - 49499代码段不再报错
    - 交易文件检查：当天没有发起过交易的不报错

- 会计中台上手费用改成从计费取数及文案调整
    - 会计中台上手费用改成从计费取数
    - 将会计中台数据源名称进行修改：
        “[LOTSNSDR]其它第三方费用(卖出)”改为“代理商收费 - 股票交易-佣金（卖）”
        - “其他费用账单”改为“代理商收费”
        - “[LOTSNSCR

<img src="/assets/YlynbL2wOovrQUx7lLgjHyTepXb.png" src-width="2158" src-height="1152" align="center"/>

- WBO首页dashboard待办名额卡显示逻辑更新
    - 出金待办：申请单状态=待提交&审批中&修改待审批&删除待审批&驳回待审批
    - 入金待办：匹配状态=「未匹配」&&加款状态=「处理中」&「修改待审批」&「删除待审批」&「驳回待审批」
    - 证券取出待办：取出申请中「待提交」与「执行中」2个指标卡数量的合计值
    - 证券存入待办：存入申请中「待提交」与「执行中」2个名额卡数量的合计值
    - 待审核银行卡：认证状态=待认证&&删除状态=未删除

<img src="/assets/X3ILbpfo4ojeGixa93hjT2w8p2f.png" src-width="3838" src-height="1802" align="center"/>

- 异常汇兑记录新增中文枚举值
    - 异常换汇记录页面中的“渠道汇兑状态”的枚举值根据语言环境做对应的展示

<img src="/assets/VPK4bdm02oieYFxvwCGj2MV0pNC.png" src-width="3302" src-height="1708" align="center"/>

- 结单发送方式配置由客户编号更改为证券账号维度
    <img src="/assets/FmsJbbvbboC9CZxUqLBj2ObjpBh.png" src-width="3212" src-height="984" align="center"/>
    - 结单发送方式配置更改为「证券账号」维度，支持按单个账户的配置来发送结单（对应APP「结单提醒」功能）
        - 列表增加[证券账号]列
        - 批量新增文件字段需填入证券账号，根据模版填写
    - 路径：「清算管理」-「日终管理」-「结单管理」-「发送方式配置」

- 线下开户流程中「是否接收线下结单」的入口移除
    <img src="/assets/FghxbtU52ojdqSxOMkWjvKezpib.png" src-width="1232" src-height="1694" align="center"/>
    - 线下开户流程中，「是否接收线下结单」的字段移除，统壹到‘结单管理’模块维护，应用于支持 Account 维度管理结单接收方式
    - 路径：「KYC」-「资料管理」-「开户资料」-企业户线下开户流程最后一步

