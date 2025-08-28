---
title: '2024-08-15 更新日志 '
slug: ZhxjwK3Egi2JKlkpD6ScgPNHncc
sidebar_position: 24
---


# 2024-08-15 更新日志 

# 🎉 新功能

无

# 🪀 改进与修复

- 支持修改客户详细类型字段
    - 路径：「客户管理系统」-「KYC」-「开户列表」-「kyc 详情页」
    - 在账户审核和开通的状态下，支持修改客户详细类型
        - 在审核状态下修改，可立即生效，且账户开通成功时，会按新的客户详细类型的值匹配对应的交易通道
        - 在账户开通状态下修改，工单审核通过后，才会生效。修改成功后，当前的交易通道会同步变更
    - 新增工单：kyc.update_application_client_detail_type

<img src="/assets/HJ4BbZsRNoqjgix0U9uc8Zl3nxg.png" src-width="2138" src-height="886" align="center"/>

- 客户资料页支持账户名称的展示
    - 路径：「客户管理系统」-「账户管理」-「账户列表」-「详情」
    - 在客户资料页面，新增展示当前证券账户的账户名称，包括关联账户的账户名称
    <img src="/assets/VBoab1VDWoXqKXxoMepcetN0nSd.png" src-width="2452" src-height="1616" align="center"/>

