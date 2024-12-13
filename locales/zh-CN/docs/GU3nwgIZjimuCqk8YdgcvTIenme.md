---
title: 2024-02-20 更新日志
slug: 24-02-20
sidebar_position: 27
---


# 2024-02-20 更新日志

# 🎉 新功能

- 清算检查接入工单审批
    - 工单编号：clearing.clearing_check.fix_result
    - 初始化时，工单未配置审批人的，默认在 5S 后自动审批通过
    - 清算检查项目文案作优化，支持按多语言展示
    - 注意：如果有未审批的工单，无法重新点击工单
    <img src="/assets/P5tdbgzurobXgBxfuTWcdYg2nJe.png" src-width="3574" src-height="1770" align="center"/>

- 报表导出及批量打印优化
    - 报表批量打印可设置是否打印后自动同步至 SFTP。
    - 路径：「报表管理」-「批量打印」
    - 报表及文件导出后，所有数据都放在导出列表，可快速查看。
    - 文件及报表导出若在 10s 导出成功可自动下载。
    <img src="/assets/XREcbvLovonqflxnJgIcdT4Rn5b.png" src-width="3802" src-height="1810" align="center"/>

- 公司行动支持私有化类型和债券回收类型的自动创建
    - 私有化和债券回收都以 TM 类型自动创建
    - TM 类型支持过户费收取，创建时自动取文件的值
    <img src="/assets/UJQyboq0ZoL88WxxrkhcV3bIn7g.png" src-width="3574" src-height="1770"/>

- 增加通用文件的对账
    - 未对接交易文件的通道，可通过通用文件进行对账
        - 已对接的根据文件规则处理
    - 初始化配置操作
        - 路径：业务参数设置 - 市场管理 - 结算渠道
        - 新增的对应结算渠道并选择股票对账（Common Trade File）
    <img src="/assets/WHMibku8Io5cxlxlAxmclsHJn0f.png" src-width="3570" src-height="1780" align="center"/>
    <img src="/assets/KFy0bfvZuooDoHxvuX3ckg5Dn8c.png" src-width="3574" src-height="1770" align="center"/>

- KYC 开户资料新增一键导出文件的功能
    - 路径：「客户管理系统」 - 「KYC」-「开户列表」
    - 在开户资料的详情页面，点击‘文件下载’按钮，系统将自动把开户资料中的文件信息压缩到一个文件夹中，可自行导出
    - 文件信息包括：证件照片、地址证明、转账证明、开户文件等
    <img src="/assets/AV08b4xOko67uuxr38ncdZ51n3e.png" src-width="2520" src-height="1362" align="center"/>

# 🪀 改进与修复

- 客户明细界面优化
    - 路径：公司行动 - 客户公司行动
    - 功能定位：主要用于查询客户名下经历的公司行动
    - 客户明细的选择结束时间修改为客户选择结束时间，客户明细增加经纪人、预告备注字段
    - 该下线客户明细增、删、改，客户明细编辑功能的新路径：公司行动 - 详情 - 客户明细
    - 该页面后续将添加到 WTT
    <img src="/assets/CmBDb98DNoLNl0xFLrZcdiapnOg.png" src-width="3574" src-height="1770" align="center"/>

- 港股托管费报表支持按类型设置费率
    - 新增 SDR058-02 报表，可根据配置的费率进行计算
    - 路径：报表管理 - 报表打印
    - 原路径（已配套下线）：业务参数设置 - 报表参数
    <img src="/assets/BEAXb5XYFoCHVMx2Mw3cDeevn6L.png" src-width="3574" src-height="1770" align="center"/>

- 「开户资料后台」- 出生日期/注册成立日期限制
    - 开户资料详情增加账户信息，包括：审核状态、登录手机号、认证类型、开户时间、券商名称、证券账号、账户类型、客户类型、客户详细类型、联系手机号
    <img src="/assets/Be62bUVsQor7IwxmJYzc2UbpnOf.png" src-width="3286" src-height="804" align="center"/>

