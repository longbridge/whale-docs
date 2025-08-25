---
slug: 24-05-20
title: 2024-05-20 更新日志
sidebar_position: 28
---


# 2024-05-20 更新日志


# 🎉 新功能

- 新增会计通用报表导出 - 根据业务分类
    - 新增会计通用报表导出 - 根据业务分类

    ![image.png](/assets/07a720e1f54663f8ddf8edf1ca06fcf4.png)

- 支持批量出金
    - 系统预置范本，补充范本中的栏位可以实现单次多笔出金申请生成
    - 批量出金：atm.import_batch_withdraw

    ![image.png](/assets/8437fd4d33c8479fef49b7ee5b539853.png)

- 客户层空头保证金比例设置
    - 客户保证金新增空头保证金比例设置
    - 1、客户保证金下拆分 tab：空头股票、多头股票
    - 2、客户空头保证金股票卖空状态与空头股票保证金（菜单：股票保证金 - 空头保证金）可卖空状态同步
    - 3、保证金比例逻辑：若存在客户空头保证金比例，则优先取客户空头保证金设置；否则取空头股票保证金
    - 路径：「风控管理」-「保证金」-「客户保证金」-「空头股票」
    - 客户空头保证金查询：`margin_ratio.account_short_query`
    - 客户空头保证金操作：`margin_ratio.account_short_operation`

    ![image.png](/assets/0f4aeb4c52f5d3f5ca35ee791a08666e.png)

- Whale 首页快捷入口功能发布
    - 跨多系统处理业务不方便？浏览器书签太多难管理？
    - 控制台首页 - 快捷入口，让你更专注、更高效！

    ![image.png](/assets/d588ebeb942e0cce01dee0ea38acd0dc.png)

- 计费支持浮动利率功能
    - 融资利息支持浮动利率功能
    - 路径：业务参数设置 - 计费管理

    **基准利率的维护**

    - 在收费场景页面点击边界，并调整基准费率字段
    - 调整基准利率之前可通过 SDR065-01 报表判断是否有基点设置过低
    - 注意：输入的值不带%。例子：6% 输入，0.06

    ![存款利息和融资利息的支持该字段设置](/assets/e8fd960bed6b7d0d451a153cfa644204.png)


    ![image.png](/assets/43a0af3ed3f8a5fe82b85892730c6fee.png)


    ![调整基准利率之前可通过 SDR065-01 报表判断是否有基点设置过低](/assets/5370958b341d7bca4da1f91e3c3343f3.png)


    **基点的设置**

    - 在客户组计费、客户计费页面，选择浮动费率并输入基点。最终使用的利率=基点 + 基准费率
    - 注意：_1bp 输入 0.0001_

    ![image.png](/assets/2a50c676dc3e0cb536c7c7e43539eac2.png)

- 客户组计费和客户计费接入工单
    - 注意 1：新增的数据在审批后才生效
    - 注意 2：编辑的数据在审批后才生效，审批通过前，收费以原数据为准
    - 注意 3：删除的数据在审批后才失效，审批通过前，收费以原数据为准

    新增审批项目如下：


    | 标题                    | 标题（EN）                                                                    | 工单标识                           | 未设置审批流程  | 工单审批案例 |
    | --------------------- | ------------------------------------------------------------------------- | ------------------------------ | -------- | ------ |
    | 计费管理 - 客户群组计费配置 - 新增      | Billing Management-Rate Setups (By Group) -New                            | billing_package_add            | 超级管理员审批  |        |
    | 计费管理 - 客户群组计费配置 - 编辑      | Billing Management-Rate Setups (By Group) -Edit                           | billing_package_edit           | 超级管理员审批  |        |
    | 计费管理 - 客户群组计费配置 - 删除      | Billing Management-Rate Setups (By Group) -Delete                         | billing_package_del            | 超级管理员审批  |        |
    | 计费管理 - 客户计费配置 - 新增        | Billing Management-Rate Setups (By Client)-New                            | billing_level_fee_add          | 超级管理员审批  |        |
    | 计费管理 - 客户计费配置 - 编辑        | Billing Management-Rate Setups (By Client)-Edit                           | billing_level_fee_edit         | 超级管理员审批  |        |
    | 计费管理 - 客户计费配置 - 删除        | Billing Management-Rate Setups (By Client)-Delete                         | billing_level_fee_del          | 超级管理员审批  |        |
    | 计费管理 - 客户组配置 - 客户组变更（添加）  | Billing Management-Rate Setups (By Group) -Change client group (add)      | billing_package_aaid_add       | 超级管理员审批  |        |
    | 计费管理 - 客户组配置 - 变更客户组（移出）  | Billing Management-Rate Setups (By Group) -Change client group (move out) | billing_package_aaid_del       | 超级管理员审批  |        |
    | 计费管理 - 客户组配置 - 批量变更客户组    | Billing Management-Rate Setups (By Group) -Batch client  change group     | billing_package_aaid_add_batch | 超级管理员审批  |        |


# 🪀 改进与修复

- 「银行账单」功能优化
    - 「银行账单」功能优化，具体包括如下优化内容：
    - 1）入金账单自动同步整合账单的标签
    - 2）入金账单设置可组合判断
    - 3）出金账单自动关联提现单新增证券账号匹配规则
    - 4）自动打标规则中的银行附言新增模糊匹配

    ![image.png](/assets/d3a933eeef350f59763346694079f73f.png)

- 异常数据源 UI 优化
    - 异常数据源 UI 优化，具体包括如下优化内容：
    - 1）新增业务类型、币种、金额展示
    - 2）筛选字段以及列表页面删除“标的”
    - 3）异常数据源单号 统一改为 原始凭证号
    - 4）异常数据源中的账务日期采用 YY-MM-DD 的格式，去掉时分秒

    ![image.png](/assets/d7bec0dfee202b376ac58e30df251a27.png)

- 支票打印新增日期查询条件
    - 新增日期查询条件

    ![image.png](/assets/fbf4dff3fbe596c8a4fc171c9fabcf48.png)

- 支持新股扣款、公布中签选择指定帐务日期
    - 支持新股扣款、公布中签选择指定帐务日期

![image.png](/assets/e6037c427459d43ff4484de5812a5686.png)

- 线下开户中国大陆证件签发地新增支持选择护照开户
    - 线下开户流程中，若证件签发地选择了‘中国大陆’，则在证件类型中，支持选择‘身份证’或‘护照’
    - 路径：「客户管理系统」-「KYC」-「资料管理」-「开户资料」-「添加开户申请」
    - 支持的客户类型：个人户、联名户

![image.png](/assets/ca94a151defdd0d87ab5d1434579b17c.png)

