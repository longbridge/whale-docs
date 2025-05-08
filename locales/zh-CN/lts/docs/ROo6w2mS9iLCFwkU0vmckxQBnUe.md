---
title: '2025-02-24 更新日志 '
slug: ROo6w2mS9iLCFwkU0vmckxQBnUe
sidebar_position: 1
---


# 2025-02-24 更新日志 

# 🎉 新功能

- 新增客户多头股票保证金变更记录
    - 1、股票停复牌自动处理客户保证金
    - 2、新增/编辑/系统停复牌/到期失效均会记录客户保证金变更记录
    - 路径：风控管理 - 保证金 - 客户保证金 - 多头股票
    - 权限：客户保证金变更记录查询 `credit_management.client_margin_change_query`
    <img src="/assets/UiRdb8qAjoNJe6xctYkc3Zkmnsc.png" src-width="3230" src-height="1024" align="center"/>

# 🪀 改进与修复

- 银行区域列表以及卡所属银行后台交互优化
    - 1.银行区域列表“图标”图片支持直接展示
    - 路径 1：证券后台 - 款项管理-App 管理 - 银行区域列表
    <img src="/assets/BKOHbIh3ToE3o7xu4tKcNxz1nTb.png" src-width="3272" src-height="716" align="center"/>
    - 2.卡所属银行“银行卡背景色”、“图标”、“银行 logo”图片支持直接展示，以及非香港区域下入金见证也可支持修改
    - 路径 2：证券后台 - 款项管理-App 管理 - 卡所属银行
    <img src="/assets/NJ6nbtol9orqJwxwr9IcgWwNntg.png" src-width="3308" src-height="726" align="center"/>

- 资金类型多语言优化
    - 资金类型新增多语言展示，并且在【新建】、【编辑】操作中都支持多语言配置
    - 路径：证券后台 - 业务参数设置 - 记账参数 - 资金类型
    <img src="/assets/E4nobZux3oaygzx0pTlcUHZQnMc.png" src-width="3256" src-height="674" align="center"/>

- 入金匹配【取款退还】操作新增权限控制
    - 入金匹配【取款退还】操作新增权限控制
    - 路径：证券后台 - 款项管理 - 入金 - 入金匹配
    - 权限：取款退还操作 `atm.withdrawal_refund_operation`
    <img src="/assets/Ls9tbtdvVoxw2fxo3vMc8Xa1n8g.png" src-width="3286" src-height="662" align="center"/>

- 对于自动还款的货币兑换结单备注优化
    - 自动还款的货币兑换结单备注中增加文案“自动还款”
    - 路径：证券后台 - 款项管理 - 换汇 - 客户汇兑
    <img src="/assets/UZckbvAJEo9ZNExwEYDcMEczncE.png" src-width="3280" src-height="1032" align="center"/>

- 新增银行卡报错文案优化
    - 绑定银行卡选定其他区域绑定的是预设列表的银行，报错文案优化
    - 路径：证券后台 - 款项管理 - 客户银行卡
    <img src="/assets/D1xpbVshJoZqCkxJ6qKcKUfkntg.png" src-width="1496" src-height="1818" align="center"/>

- 入金见证后台流程优化
    - 对于转账认证开户的客户银行卡，后台更新入金见证流程优化，允许不关联入金直接将入金见证状态更新为已见证
    - 路径：证券后台 - 款项管理 - 客户银行卡
    <img src="/assets/TaI3bb0LPozRLUxeHB9cz6qCn3f.png" src-width="3290" src-height="1696" align="center"/>

- 会计中台新增报表导出 - 金蝶
    - 会计中台新增报表导出 - 金蝶
    - 简化了报表导出页面
    - 路径：证券后台 - 会计中台 - 会计分录
    <img src="/assets/ZSK3b8upfoej8wxr87Bc05bMnWm.png" src-width="3294" src-height="1746" align="center"/>

- 合并分录支持自定义折算币种
    - 合并分录支持自定义折算币种
    - 路径：证券后台 - 业务参数设置 - 记账参数 - 合并规则
    <img src="/assets/PQ8gba6EMoKlQfxrmQUciOtAnYg.png" src-width="3282" src-height="894" align="center"/>

- 新增会计数据源 - 交收合约
    - 新增会计数据源 - 交收合约
    - 路径：证券后台 - 会计中台 - 分录数据源 - 交收合约
    - 权限：
        - 交收合约查询 `book.book_contract_bills_query`
        - 交收合约操作 `book.book_contract_bills_operation`
    <img src="/assets/BJutbexcDovhWwx7jXYcQxnJn0c.png" src-width="1280" src-height="379" align="center"/>

- 黑名单增加启用/停用功能
    - 黑名单在删除功能基础上增加启用/停用功能，启用/停用操作时均支持备注。
    - 路径：风控管理 - 名单管理 - 黑名单
    <img src="/assets/XfDsbkhYdo556hxI2zLcb6QWnmD.png" src-width="3262" src-height="992" align="center"/>
    
