---
title: '2024-05-20 更新日志 '
slug: 24-05-20
sidebar_position: 30
---


# 2024-05-20 更新日志 

# 🎉 新功能

- 新增会计通用报表导出 - 根据业务分类
    - 新增会计通用报表导出 - 根据业务分类
    <img src="/assets/U6xmb8axpo8vn3xla8jcPI9EnCt.png" src-width="3234" src-height="768" align="center"/>

- 支持批量出金
    - 系统预置范本，补充范本中的栏位可以实现单次多笔出金申请生成
    - 批量出金：atm.import_batch_withdraw
    <img src="/assets/MuAoblTUGo54uYxXVQ6cc14Pnhg.png" src-width="2850" src-height="1240" align="center"/>

- 客户层空头保证金比例设置
    - 客户保证金新增空头保证金比例设置
    - 1、客户保证金下拆分 tab：空头股票、多头股票
    - 2、客户空头保证金股票卖空状态与空头股票保证金（菜单：股票保证金 - 空头保证金）可卖空状态同步
    - 3、保证金比例逻辑：若存在客户空头保证金比例，则优先取客户空头保证金设置；否则取空头股票保证金
    - 路径：「风控管理」-「保证金」-「客户保证金」-「空头股票」
    - 客户空头保证金查询：`margin_ratio.account_short_query`
    - 客户空头保证金操作：`margin_ratio.account_short_operation`
    <img src="/assets/XShhbTtMtoPxwrxWntfc9VPEnIb.png" src-width="3224" src-height="1086" align="center"/>

- Whale 首页快捷入口功能发布
    - 跨多系统处理业务不方便？浏览器书签太多难管理？
    - 控制台首页 - 快捷入口，让你更专注、更高效！
    <img src="/assets/IXkjbXN6moLW9UxhC6ictSQWnzb.png" src-width="818" src-height="352" align="center"/>

- 计费支持浮动利率功能
    - 融资利息支持浮动利率功能
    - 路径：业务参数设置 - 计费管理

<b>基准利率的维护</b>
- 在收费场景页面点击边界，并调整基准费率字段
- 调整基准利率之前可通过 SDR065-01 报表判断是否有基点设置过低
- 注意：输入的值不带%。例子：6% 输入，0.06
<img src="/assets/OOwxbQF7poJ3VfxxRTIcty0qniq.png" src-width="3574" src-height="1794" align="center"/>
<img src="/assets/CGHpbqvCoouJzvxWnjOc6dP9nTn.png" src-width="3574" src-height="1794" align="center"/>
<img src="/assets/Nqj6bYhF3o24tBxefIcceQz6nLg.png" src-width="3574" src-height="1794" align="center"/>
<b>基点的设置</b>
- 在客户组计费、客户计费页面，选择浮动费率并输入基点。最终使用的利率=基点 + 基准费率
- 注意：<em>1bp 输入 0.0001</em>
<img src="/assets/SBQAbWMZJoLtycxQsw2cNDArnEc.png" src-width="3574" src-height="1794" align="center"/>

- 客户组计费和客户计费接入工单
    - 注意 1：新增的数据在审批后才生效
    - 注意 2：编辑的数据在审批后才生效，审批通过前，收费以原数据为准
    - 注意 3：删除的数据在审批后才失效，审批通过前，收费以原数据为准
    新增审批项目如下：
    <table>
    <colgroup>
    <col width="316"/>
    <col width="240"/>
    <col width="100"/>
    <col width="100"/>
    <col width="227"/>
    </colgroup>
    <tbody>
    <tr><td><p>标题</p></td><td><p>标题（EN）</p></td><td><p>工单标识</p></td><td><p>未设置审批流程</p></td><td><p>工单审批案例</p></td></tr>
    <tr><td><p>计费管理 - 客户群组计费配置 - 新增</p></td><td><p>Billing Management-Rate Setups (By Group) -New</p></td><td><p>billing_package_add</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/NXCcbbXGjo1kB4xL2tGcVL2cnSI.png" src-width="3574" src-height="1794" align="center"/>
    <img src="/assets/XCKhbqf6sow8ABxL8YscB1aHnrg.png" src-width="1360" src-height="1500" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户群组计费配置 - 编辑</p></td><td><p>Billing Management-Rate Setups (By Group) -Edit</p></td><td><p>billing_package_edit</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/G0dubCHiPoGKE5xEyWecDCgqnOg.png" src-width="1436" src-height="1622" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户群组计费配置 - 删除</p></td><td><p>Billing Management-Rate Setups (By Group) -Delete</p></td><td><p>billing_package_del</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/UnNqb02WIo5jHRxBVCtcXSh6nJb.png" src-width="1472" src-height="1632" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户计费配置 - 新增</p></td><td><p>Billing Management-Rate Setups (By Client)-New</p></td><td><p>billing_level_fee_add</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/Npmkb0Uvoo46ddxTtMncA40qnVd.png" src-width="1480" src-height="1640" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户计费配置 - 编辑</p></td><td><p>Billing Management-Rate Setups (By Client)-Edit</p></td><td><p>billing_level_fee_edit</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/JyVIbjM01oNaE5xewNKcJC34nAh.png" src-width="1458" src-height="1614" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户计费配置 - 删除</p></td><td><p>Billing Management-Rate Setups (By Client)-Delete</p></td><td><p>billing_level_fee_del</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/G9OWbOfCIokh8FxHR4ic5A4Rnag.png" src-width="1482" src-height="1646" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户组配置 - 客户组变更（添加）</p></td><td><p>Billing Management-Rate Setups (By Group) -Change client group (add)</p></td><td><p>billing_package_aaid_add</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/WOjwbQiDJoOlYNxC62VcxwHHn4f.png" src-width="1480" src-height="1634" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户组配置 - 变更客户组（移出）</p></td><td><p>Billing Management-Rate Setups (By Group) -Change client group (move out)</p></td><td><p>billing_package_aaid_del</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/Gp9UbgmPOoObdhxhEvIcKyXinIf.png" src-width="924" src-height="1250" align="center"/></td></tr>
    <tr><td><p>计费管理 - 客户组配置 - 批量变更客户组</p></td><td><p>Billing Management-Rate Setups (By Group) -Batch client  change group</p></td><td><p>billing_package_aaid_add_batch</p></td><td><p>超级管理员审批</p></td><td><img src="/assets/WDaXbUf9SotFU5xiSSRcsr6nnpx.png" src-width="736" src-height="1118" align="center"/></td></tr>
    </tbody>
    </table>

# 🪀 改进与修复

- 「银行账单」功能优化
    - 「银行账单」功能优化，具体包括如下优化内容：
    - 1）入金账单自动同步整合账单的标签
    - 2）入金账单设置可组合判断
    - 3）出金账单自动关联提现单新增证券账号匹配规则
    - 4）自动打标规则中的银行附言新增模糊匹配
    <img src="/assets/V6c6bS2wuom6W4xy0e2ceQm8nNd.png" src-width="3782" src-height="1480" align="center"/>

- 异常数据源 UI 优化
    - 异常数据源 UI 优化，具体包括如下优化内容：
    - 1）新增业务类型、币种、金额展示
    - 2）筛选字段以及列表页面删除“标的”
    - 3）异常数据源单号 统一改为 原始凭证号
    - 4）异常数据源中的账务日期采用 YY-MM-DD 的格式，去掉时分秒
    <img src="/assets/II89bqvmvocUkex7UDMc4qeInRf.png" src-width="2310" src-height="1186" align="center"/>

- 支票打印新增日期查询条件
    - 新增日期查询条件
    <img src="/assets/O8U4bHpj9ot23VxcaJQckJTjnKf.png" src-width="3794" src-height="1696" align="center"/>

- 支持新股扣款、公布中签选择指定帐务日期
    - 支持新股扣款、公布中签选择指定帐务日期

<img src="/assets/Vsr9bxS4pou0SCxCBdXcmZHmnSe.png" src-width="2378" src-height="1370" align="center"/>

- 线下开户中国大陆证件签发地新增支持选择护照开户
    - 线下开户流程中，若证件签发地选择了‘中国大陆’，则在证件类型中，支持选择‘身份证’或‘护照’
    - 路径：「客户管理系统」-「KYC」-「资料管理」-「开户资料」-「添加开户申请」
    - 支持的客户类型：个人户、联名户

<img src="/assets/QwTAb7rVao51MlxxMTUc9lmunvh.png" src-width="2002" src-height="904" align="center"/>

