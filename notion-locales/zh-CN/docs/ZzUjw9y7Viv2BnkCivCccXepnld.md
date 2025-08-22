---
slug: 24-03-18
title: 2024-03-18 更新日志
sidebar_position: 35
---


# 2024-03-18 更新日志


# 🎉 新功能

- 支持港股国配
    - IPO 支持港股国配
    - 路径：「新股认购」-「新股认购」-「港股国配」

    ![image.png](/assets/396937ad7a203d30c2f8dbe64a3b9a21.png)

- 新增客户组及客户保证金应用客户组功能
    - 新增客户组，支持应用保证金、报表业务
    - 路径：「风控管理」-「名单管理」-「客户组」
    - 权限：
        - 客户组查询：`credit_limit.client_group_query`
        - 客户组操作：`credit_limit.client_group_operation`
    - 客户保证金支持选择客户组和股票组创建
    - 路径：「风控管理」-「保证金」-「客户保证金」

    [output.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/1445bab0-c2cc-8114-afe4-000302ebb560/c99770d6-b573-447c-9412-12aa9aec7a87/output.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV5WY2J%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T071448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAZFWY7LHFS0vRwdf3pgDlLfGYibe4szXJZeu15oVxmAiBvWliayNWDDbGPK8ROjk%2F9nwPawgPAhkxffS6RanyDKyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6d94NbJCYvtR%2B7fYKtwDyltYVfdLSK9EMjgdBuSNGRI2ZwrXYwFh%2FYujaprAv7lTb3f9m%2B7rFWfEJddzo45NuX4AsY1nq4JzGNqtg5FAQoFDy%2Fg2cfh%2FFAqf3jlwFOsqdlvbELS9cnAx3qKOsncbYXc9vXR6919n8cY8ZMR2Z7HC92U7aY6C5YPGBK%2FW%2BSHoGV9HsxwNJLrLp0NW5sJQ4QaBhVWVg%2B9WQXF%2BnpUFPGa9TbPrhEjauwZHFuHJuMQ8NssQ4KliwJNIFnl4oUISOf1ANgmloDmcSRy1eorbQKSezxIzCCT1XAQ9HruTI%2FEM%2Fw%2F%2BwVEGEV%2FwH3Yojh%2B3BS%2FpxmzAFq1LCjTieeZPkLx1A8L4WOFSCB90OkJa6M7R%2FYoJJ8VzCv3QfNFQS9nqNY%2Flx%2BwXrTlUnVT7q2xSyEAY1QLr146hMPMphPCCcQ9lNCWdfs9D2n1UQoi%2FRXLDVzzxuaclwGvBq66tqGFCI3Zlcbxrerwej5mIw11UrKqG91A4uRXxajAQn6gKVOturMrXEi9ci5YvmFK2G0dyGTU6St2dD%2B64MK8zq7J5h9WPiC7SdRKLRsbVBDuTO4pRTme2%2BhgzyMgrMp95oxtPRnudGO4nTRAA%2B30d6muMgb5pZ%2FUuoeSQvdcMv1UwipegxQY6pgG6Wo%2FDJEtI7%2B8YJw20idqyKM4M5XFV21zIKADQJoSPWLri5i%2BQmsGfZj16f2zYjBlyJA9vnPS1tjSRuJwbzSJmUcIo4scisTOXVymhmklvOcM2IGW5Cb1UNUM6Nh%2FBJAYMYj915c9RCm%2F8MSMWGttYEGUgEpbCVdD2jPyBZGNsHqf0dFg4Fm%2BVh4pmjlInPUd4ERomnEANSz2BjCfPFEyOxiFXhHxB&X-Amz-Signature=3db513702be3fc944b6e084164372a1d65bc4000e39610cd6d8afbab579004cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 在计费前修改下单渠道
    - 场景：在计费前修改用户的下单渠道，并基于此进行清算
    - 操作：开始一键清算->暂停一键清算（数据同步步骤）-》编辑下单渠道
    - 编辑下单渠道路径：「清算管理」-「流水管理」-「交易订单」
    - 注意 1：在清算计费后不支持编辑收费渠道
    - 注意 2：清算计费后不再支持重新点击数据同步。如先重新点击的，先操作清算撤销

    ![image.png](/assets/f120a896fbaa20f8f1d15ea7aa4fc6c4.png)

- 支持计费后，日切前重新补单功能
    - 场景：在计费后日切前，可重新进行后台补单或者前台补单
    - 流程：先操作清算撤销->后台补单（前台补单）->重新执行日终
        - 操作清算撤销时，资产类回撤选择**不操作**&新增补单选择**加入清算**
    - 清算撤销路径：「清算管理」-「日终管理」-「清算撤销」

    ![image.png](/assets/b6c567fe140afa5ad0ca5c91e8ac38db.png)

- 公司行动支持展示客户状态
    - 公司行动支持展示客户状态
    - 券商可以联系客服，设置销户客户执行或者不执行。系统默认执行

    ![客户明细增加注销状态](/assets/1f2d2c9aae9ffc0366fdeea3961169b0.png)


    ![执行预览增加注销客户数量提示](/assets/12dba2c5207f28c7b3d779dcd131e58c.png)

- 开户列表详情可配置交易权限
    - 开户列表详情 -「关联账户列表」增加：未开通账户，可在 KYC 审核过程中修改账户的交易市场和权限
    - 路径：「客户管理系统」-「KYC」-「开户列表」-「详情」
    - 注意：交易权限配置需结合客户开通账户的类型，是后台选择的市场权限与开通账户功能的交集。如：后台选择开通港股及虚拟资产交易权限，账户类型为虚拟资产账户，最终开通的账户仅虚拟资产交易权限
    - 权限：
        - 展示交易权限入口：`account.trade_permission`
        - 修改交易权限：`account.update_trade_permission`

        ![image.png](/assets/fca953291e69a2307f71e9fa9a884ae2.png)

- 开户列表详情增加专业投资者认证和风险测评信息
    - 审核人员如有对应查看权限，可在开户详情查看专业投资者认证记录及风险测评信息；点击可跳转至详情页面
    - 路径：「客户管理系统」-「KYC」-「开户列表」-「详情」
    - 权限：需申请对应权限，开户详情才会展示对应模块
        - 专业投资者认证：`customer.pi_app_record`
        - 风险测评数据查询：`kyc.risk_assessment_query`

    ![image.png](/assets/9b846aa735712022371289a371e59bbe.png)


# 🪀 改进与修复

- 临时结单支持自定义语言
    - 创建临时结单支持选择结单语言，默认为跟随 App 语言（注：此处的 App 语言以临时结单选择的截止日期对应设置为准），可以自定义切换指定语言
    - 路径：「清算管理」-「日终管理」-「结单管理」-「结单查询」

    ![image.png](/assets/f3b21c75ff77b24419c7ba57ea8a55b0.png)

- 平仓增加交易时段选择
    - margin call 下平仓弹窗页面 美股限价单平仓支持自定义选择“交易时段”，默认仅盘中
    - 路径：「风控管理」-「Margin Call」-「风险预警」

    ![image.png](/assets/95306f3dd71e48fb0f15d324311cede5.png)

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

    ![image.png](/assets/78b7a7d4ec75b41dcb012ff2e2e41634.png)

- 手工调账状态优化
    - 手工调账的【状态】按实际调账状态使用，删除“通过”，新增“调账成功”“调账失败”“调账处理中”三个状态
        - 调账成功：审批通过并处理调账成功
        - 调账失败：可在【调账结果】查看失败原因
        - 调账处理中：系统正在处理调账
    - 路径：「资产账户」-「手工调账」

    ![image.png](/assets/c579a1695de00f6e7ba2fed680c75678.png)

- 优化清算检查等相关字段命名

![image.png](/assets/6750a1c770adbc4a7cb14a8f8852f961.png)


![image.png](/assets/aa256b7399d782612e1736efb147bda7.png)


![image.png](/assets/bc3957118412f84a1896fd57c026679c.png)


![image.png](/assets/15b18f6fbda36fbb0c833e088f28ee0f.png)


![image.png](/assets/c986f98a2677e16ced6d0fa4429f107f.png)


![image.png](/assets/bb664513bf5f9514c22d7de9db7ea21a.png)

