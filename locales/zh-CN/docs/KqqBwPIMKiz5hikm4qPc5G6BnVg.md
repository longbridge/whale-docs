---
title: 2024-09-23 更新日志
slug: KqqBwPIMKiz5hikm4qPc5G6BnVg
sidebar_position: 15
---


# 2024-09-23 更新日志

# 🎉 新功能

- 自动还款开通客户查询
    - 增加自动还款开通客户查询页面
    - 路径：「风控管理」-「借币提醒」-「自动还款开通查询」
    - 权限：自动还款开通客户查询 `margin_call.auto_convert_query`
    <img src="/assets/Sc7Hb9ie6oTBjIxy2T2cYPZPn4d.png" src-width="3306" src-height="1480" align="center"/>

- 消息记录-支援SMS/Email重发
    - 消息记录列表，支持 SMS/Email 重发能力
    - 路径：「消息中心」-「消息记录」-「操作 - 重发」
    <img src="/assets/WD1IbXHseoNYr1xaIaBcpOuUnrf.png" src-width="3206" src-height="1622" align="center"/>

- 支持文章复制，文章编辑/删除/隐藏/显示需审批
    - 帮助中心，支援文章复制，文章编辑/删除/隐藏/显示需审批​
    - 路径：「帮助中心」-「文章」-「操作 - 复制」​
    <img src="/assets/NvEJbWHUqoGtIzxkhbqcQmEXnIe.png" src-width="3272" src-height="1586" align="center"/>

# 🪀 改进与修复

- 保证金变更审批及交互优化
    主要优化点：
    - 保证金新建/编辑/批量上传/删除，以及日内交易规则设置均支持工单审批。
        涉及审批流标识如下：
        - 上传多头股票保证金 `risk.credit.upload_stock_margin_ratio`
        - 修改多头股票保证金 `risk.credit.update_stock_margin_task`
        - 新增多头股票保证金 `risk.credit.create_stock_margin_task`
        - 批量删除多头股票保证金 `risk.credit.batch_delete_stock_margin_ratio`
        - 删除多头股票保证金 `risk.credit.delete_stock_margin_ratio`
        - 上传空头股票保证金 `risk.credit.upload_short_sell_stock_margin_ratio`
        - 修改空头股票保证金 `risk.credit.update_short_sell_stock_margin_ratios`
        - 设置日内融时间 `risk.credit.set_day_trade_time_config`
        - 上传日内交易实时保证金 `risk.credit.upload_intraday_stock_margin_ratio`
        - 新增日内交易实时保证金 `risk.credit.create_intraday_stock_margin_task`
        - 批量删除日内交易实时保证金 `risk.credit.batch_delete_intraday_stock_margin_ratio`
        - 删除日内交易实时保证金 `risk.credit.delete_intraday_stock_margin_ratio`
        - 修改日内交易实时保证金 `risk.credit.update_intraday_stock_margin_task`
    - 多头股票保证金新建界面优化，改为侧边栏
    <img src="/assets/HVr1bCILNomVOqx68aRciswPnif.png" src-width="3330" src-height="1114" align="center"/>

- 基金清算支持申赎单独进行核对确认
    - 支持基金清算流程中的申购、赎回分别进行核对确认
    - 路径：「基金管理」-「公募基金」-「基金清算」-「操作 - 申购核对确认、赎回核对确认」
    <img src="/assets/P83Ib9UAZoqc5BxryJOcYK5enCd.png" src-width="2788" src-height="1648" align="center"/>
    
