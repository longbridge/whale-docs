---
title: 2024-06-11 更新日志
slug: 24-06-11
sidebar_position: 24
---


# 2024-06-11 更新日志

# 🎉 新功能

- <b>各种记账数据源业务类型配置化</b>
    - 各种记账数据源业务类型配置化后，可根据公司自身记账需求配置各种业务类型是否记账
    - 权限
        - `book.booking_types_query`会计业务类型查询
        - `book.booking_types_update`会计业务类型修改
    <img src="/assets/UCTkbGJUSogFK6xmOz2c0d7onsh.png" src-width="3810" src-height="960" align="center"/>

- <b>支持批量修改更多邮箱的值</b>
    - 修改路径：「客户管理系统」-「账户管理」-「工单中心」-「客户/账户信息」-「修改联系方式」-「修改内容：更多联系邮箱」
    - 支持单个新建或批量导入修改更多联系邮箱，审核通过后，修改成功
    - KYC 详情页的更多邮箱的修改入口做隐藏，统一移至工单中心修改
    - 新增工单标识：`crm.edit_account_more_email`
    <img src="/assets/TRRQbABeqoPnygx4ObDcvpRkn5d.png" src-width="2612" src-height="1390" align="center"/>

# 🪀 改进与修复

- <b>M</b><b>argin </b><b>C</b><b>all</b><b> </b><b>平仓下单弹窗页面优化</b>
    - 平仓下单弹窗页面优化
        - 所有平仓弹窗页面增加买一/卖一价，支持手动刷新价格
        - 美股限价单均支持选择交易时段，在现有基础上补充支持「融券持仓概览」和「空头股票追收」菜单
        - 增加展示预估减少追缴金额信息，便于平仓参考（不含「融券持仓概览」和「股票追收」菜单）
    - 「日内融实时预警」「平仓订单」菜单列表页面增加自订义列表功能
    - 平仓订单支持证券代码搜索
    - 路径：「风控管理」-「Margin Call」
    <img src="/assets/ZxS9b96uioF7s8x6UvFc3jOjnGf.png" src-width="3742" src-height="1590" align="center"/>

- <b>会计中台新增报表导出-Sage300 AOM（GL）</b>
    <img src="/assets/BlbNbqckZoZ48YxgpTIcX5lhnlr.png" src-width="3804" src-height="1772" align="center"/>

- <b>Margin Call 详情增加基金持股市值及基金持仓明细</b>
    - 页面依本位币汇整所有基金持股的市值
    - 可单独查看基金持仓明细
    <img src="/assets/F2gObrA5Qov0rEx8QI9cg90zn2d.png" src-width="2838" src-height="1340" align="center"/>

- <b>集中度压力测试新增 PDF 列印功能</b>
    - 新增 RDR039 报表，记录压力测试结果
    - 可单独在压力测试明细页面汇出指定结果
    <img src="/assets/KJKkbM2O0owgksxLCyHcMgBCnRc.png" src-width="2806" src-height="1238" align="center"/>

- <b>Dashboard</b><b> </b><b>页面增加结单待发送数据查看</b>
    - Dashboard 页面增加【结单待发送】数据展示，数据统计为存量所有待发送结单
    <img src="/assets/TnTkb5NiUoC5YUxosaecUpDJnQe.png" src-width="3232" src-height="830" align="center"/>
    
