---
title: 2023-10-9 更新日志
slug: SVGqw2QYViqRZGkTGMqc0VbRnOn
sidebar_position: 52
---


# 2023-10-9 更新日志

## 核心功能

1. 【新增】港交所CTF文件自动导入
    <img src="/assets/ENswbh86GozsKDx1VTFjk6J9pw0.png" src-width="3576" src-height="1692" align="center"/>
    - 新增港交所CTF文件自动导入，日常在下午16:30前导入完毕
    - 注意：需要开通该功能的可联系客服对接
    - 路径：清算管理-文件导入

2. 【新增】机构合约延迟交收
    <img src="/assets/JuHYbk8WSoor2Dxi2FnjVImBpmh.png" src-width="3574" src-height="1158" align="center"/>
    - 新增机构合约维护模块，机构合约会在交易日的日切步骤后自动生成
    - 本次迭代支持针对机构合约进行延迟交收操作，解决CCASS延迟交收的记账问题
    - 注意：交收日&gt;=当前账务日期的机构合约才可进行延迟交收
    - 后续会迭代相关报表、机构收费等相关功能
    - 路径：清算管理-合约管理-机构合约

3. 【优化】结单email重发功能
    <img src="/assets/DO5Ib0FrHo1jbJxkhRvj6kUGpoy.png" src-width="2200" src-height="1242" align="center"/>
    - 主要用于特殊情况（如数据异常等）下重发结单
    - 重新生成结单后状态为“重新生成待发送”，该状态下发送的email消息可为定制消息模版
    - 注意：状态为“生成失败”“生成中”不可重发
    - 路径：「清算管理」-「日终管理」-「结单管理」-「结单查询」

4. 【优化】资产查询页面结构，增加图表，资产类别更清晰
    <img src="/assets/WNSWboTXQok6PYxm7sKjvrmSp3b.png" src-width="3780" src-height="1780" align="center"/>
    - 区分不同的风控状态及风控指标
    - 增加现金冻结明细查询（点击""冻结现金""即可查询）
    - 增加即时仓位明细查询（点击""已结算数量""即可查询）
    - 路径：「资产帐户」-「资产总览」-「客户帐户查询」

5. 【优化】Margin Call详情页面增加顾客现金明细
    <img src="/assets/OAG5bLGLRoC8iCxL2jNjSt6DpR3.png" src-width="3794" src-height="1766" align="center"/>
    - 路径：「风控管理」-「风险预警」-「实时预警」

6. 【优化】Margin Call支援对部分预警记录设定到固定日期自动平仓或到截止日自动平仓
    <img src="/assets/SfEDb6NLBoKPMgxDl3WjaxsXpDg.png" src-width="3722" src-height="1698" align="center"/>
    - 路径：「风控管理」-「风险预警」-「实时预警」

7. 【优化】手工提现银行卡列表在卡号后面显示币种
    <img src="/assets/I24gbW4FVoNjMhxRX2zjjeBqplf.png" src-width="2826" src-height="1042" align="center"/>
    - 路径：款项管理-出金-手工提现

8. 【优化】转入或转出股票时如果客户位未完成HKIDR授权则提示“OTCR申报需要请联络客户完成HKIDR授权”
    <img src="/assets/YWAfb1J2OoTC6KxOitdj4zxapGM.png" src-width="2816" src-height="1440" align="center"/>
    ## 其他功能
    whale支持最近登录记忆
    <img src="/assets/D2hmbPA8DoL3MUxcn1ujvuwkpqh.png" src-width="2514" src-height="1208" align="center"/>
    - 路径1：证券管理-证券存入-手工入仓
    - 路径2：证券管理-证券取出-手工出仓
    - 首次登录时，需输入企业编号，账号密码登录
    - 非首次登录时，系统记忆最近登录企业，仅输入账号密码登录即可

