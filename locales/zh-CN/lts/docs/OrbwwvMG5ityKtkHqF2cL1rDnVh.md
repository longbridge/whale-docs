---
title: '2024-08-12 更新日志 '
slug: OrbwwvMG5ityKtkHqF2cL1rDnVh
sidebar_position: 23
---


# 2024-08-12 更新日志 

# 🎉 新功能

无

# 🪀 改进与修复

- 出金规则相关优化
    - 「业务参数设置 - 风控 - 余额拦截」位置调整至「业务参数设置 - 出金规则 - 余额拦截」
    - 「业务参数设置 - 风控 - 出金额规则」位置调整至「业务参数设置 - 出金规则」，并且 tab 页面文案改为“自动审核规则”
    - 自动审核规则列表中出金卡类型改为银行账户地区，同时新增字段：银行名称、银行卡首次出金、优先级
    <img src="/assets/KP5ObODTBoGf9rxH5M2cegzGnwe.png" src-width="2678" src-height="3207" align="center"/>

- 出金申请新增批量提现
    - 「款项管理 - 出金 - 出金申请」操作【批量提现】优化：文案统一为“批量提现”；新增模板导入说明；导入模板中的字段“出金手续费”和“收款银行卡号”可为空
    <img src="/assets/HvpibOMf7oIS36xLmEqcXBCUnNc.png" src-width="1280" src-height="679" align="center"/>

- 放宽自定义汇率的小数点位数
    - 「款项管理 - 换汇 - 客户汇兑」手工换汇自定义汇率小数点后支持输入最多为 8 位
    <img src="/assets/ROKobk3vPoNUecxKKeQcFLz9n1c.png" src-width="2254" src-height="1230" align="center"/>

- 调账增加实时仓位查询
    - 证券类（股票/基金/期权/债券/OTC 其他/虚拟资产）调账出账增加根据托管商和子仓查询的实时仓位参考值
    - 路径：「资产账户」-「调账」-「手工调账」
    <img src="/assets/KyBAbDw6ZoGKvoxTrgvcLEKlnFe.png" src-width="3240" src-height="1624" align="center"/>

- 账户查询持仓明细增加“可抵押市值”
    - 账户查询持仓明细增加“可抵押市值”信息展示
    - 路径：「资产账户」-「账户」-「账户查询」
    <img src="/assets/UlBPbuIOToGoCNxDkFqcG7Mcnic.png" src-width="3318" src-height="1752" align="center"/>

- 交易对账支持模糊对账
    - 交易对账中，针对不平账可进行二次对账。支持针对不平账进行按股票对账
    - 路径：业务参数设置 - 日终设置 - 清算参数设置
    <img src="/assets/SD9UbQQ4TokQDkxN638c5jvGnOe.png" src-width="3548" src-height="1794" align="center"/>

- 新增 SO、DS 执行时的消息推送
    - SO、DS 在执行成功后会发送 push 与 email 给客户
    <img src="/assets/V1TAbdYIKo2J06x7vPmcE00snyg.png" src-width="2452" src-height="1084" align="center"/>

- 费用管理新增最低过户费设定
    - 客户可在费用管理页面对全域过户费进行最低额的设定
    <img src="/assets/SZILbH6svoVA2axaR8JcxXEAnYb.png" src-width="2854" src-height="1134" align="center"/>

- CRM 更新客户列表
    - 下架原有的“客户池”，由“客户列表”替换（客户列表，当前券商名下的所有客户）
    - 列表新增用户基础等级、账户信息、开户信息、活动地区等多个字段，补充完善了客户画像
    - 客户信息展示/筛选/查询等交互优化，支持快速获取客户的基础信息、开户信息、资产/交易和持仓等多维度的数据
    - 路径：「客户管理系统」-「CRM」-「客户列表」
    <img src="/assets/DsZLbUTEmoPVN9xy2bmcdUQHnVb.png" src-width="2562" src-height="1144" align="center"/>

- CRM 更新看板
    - 下架原有的“看板”，由“我的看板”替换（适用于有配置客户经理的券商，展示客户经理名下的客户数据）
    - 更新看板统计 Tab，按“基础等级”对用户进行更为细致的划分
    - 新增了更多描述客户基本信息的字段内容和操作项
    - 新增团队权限，支持查看团队下所有客户的数据权限
    - 字段解释：
        - 用户地区：为用户当前所在国家/地区。取值规则，按以下优先级取：
            -  ①：居住国家/地区；优先级 ②：手机区号；优先级 ③：注册时的 IP 对应地区 
        - 活动地区：指证件签发国所在地。部分客户居住地区和证件签发国不一致，则优先取证件签发国作为活动地区。取值规则如下：
            - 若有证件签发国，取证件签发国作为活动地区；若无，则取用户区域的值作为活动地区
    - 路径：「客户管理系统」-「CRM」-「我的看板」
        <img src="/assets/FNPXbSD01oL4GvxMBd1cwGRQnRc.png" src-width="3450" src-height="1682" align="center"/>

