---
title: 2025-02-24 更新日志
slug: ROo6w2mS9iLCFwkU0vmckxQBnUe
sidebar_position: 12
---


# 2025-02-24 更新日志

# 🎉 新功能

- 新增客户多头股票保证金变更记录
    <img src="UMipbZxSHokoW6xmwSrjxBRhppd" src-width="3230" src-height="1024" align="center"/>
    - 1、股票停复牌自动处理客户保证金
    - 2、新增/编辑/系统停复牌/到期失效均会记录客户保证金变更记录
    - 路径：风控管理-保证金-客户保证金-多头股票
    - 权限：客户保证金变更记录查询 `credit_management.client_margin_change_query`

# 🪀 改进与修复

- 银行区域列表以及卡所属银行后台交互优化
    <img src="Eh13bX514o2sewxtG9JjfVGPpWb" src-width="3272" src-height="716" align="center"/>
    <img src="IlS4b79iZooppVxURDNjvp0Cprb" src-width="3308" src-height="726" align="center"/>
    - 1.银行区域列表“图标”图片支持直接展示
    - 路径1：证券后台-款项管理-App 管理-银行区域列表
    - 2.卡所属银行“银行卡背景色”、“图标”、“银行 logo”图片支持直接展示，以及非香港区域下入金见证也可支持修改
    - 路径2：证券后台-款项管理-App 管理-卡所属银行

- 资金类型多语言优化
    <img src="V7AwbKL0SondK4xu6w3jc5kkp1b" src-width="3256" src-height="674" align="center"/>
    - 资金类型新增多语言展示，并且在【新建】、【编辑】操作中都支持多语言配置
    - 路径：证券后台-业务参数设置-记账参数-资金类型

- 入金匹配【取款退还】操作新增权限控制
    <img src="WRdAb3RcYonXFUxZj95jfMHNpuf" src-width="3286" src-height="662" align="center"/>
    - 入金匹配【取款退还】操作新增权限控制
    - 路径：证券后台-款项管理-入金-入金匹配
    - 权限：取款退还操作 `atm.withdrawal_refund_operation`

- 对于自动还款的货币兑换结单备注优化
    <img src="S0WqbFHqMoqVh3xVqG3j2Kkvpzh" src-width="3280" src-height="1032" align="center"/>
    - 自动还款的货币兑换结单备注中增加文案“自动还款”
    - 路径：证券后台-款项管理-换汇-客户汇兑

- 新增银行卡报错文案优化
    <img src="CctRbVD0soTq8pxoZcXju6UNpHb" src-width="1496" src-height="1818" align="center"/>
    - 绑定银行卡选定其他区域绑定的是预设列表的银行，报错文案优化
    - 路径：证券后台-款项管理-客户银行卡

- 入金见证后台流程优化
    <img src="Wu4pbRf7yoSxgpx6epdj91Hvpre" src-width="3290" src-height="1696" align="center"/>
    - 对于转账认证开户的客户银行卡，后台更新入金见证流程优化，允许不关联入金直接将入金见证状态更新为已见证
    - 路径：证券后台-款项管理-客户银行卡

- 会计中台新增报表导出-金蝶
    <img src="HvrMbUz3AoWKycxWMItj1RJ8pyg" src-width="3294" src-height="1746" align="center"/>
    - 会计中台新增报表导出-金蝶
    - 简化了报表导出页面
    - 路径：证券后台-会计中台-会计分录

- 合并分录支持自定义折算币种
    <img src="KXhCbCXC5odoV9xLCfpjBmprpbg" src-width="3282" src-height="894" align="center"/>
    - 合并分录支持自定义折算币种
    - 路径：证券后台-业务参数设置-记账参数-合并规则

- 新增会计数据源-交收合约
    <img src="H4L0bCCEzolkfixIH8djm9depz7" src-width="1280" src-height="379" align="center"/>
    - 新增会计数据源-交收合约
    - 路径：证券后台-会计中台-分录数据源-交收合约
    - 权限：
        - 交收合约查询 `book.book_contract_bills_query`
        - 交收合约操作 `book.book_contract_bills_operation`

- 黑名单增加启用/停用功能
    <img src="CejBbVL51o593zxJojFj2Soapgd" src-width="3262" src-height="992" align="center"/>
    - 黑名单在删除功能基础上增加启用/停用功能，启用/停用操作时均支持备注。
    - 路径：风控管理-名单管理-黑名单

