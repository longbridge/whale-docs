---
title: 2023-10-9 更新日志
slug: 23-10-9
sidebar_position: 41
---


# 2023-10-9 更新日志

### 核心功能

1. 【新增】港交所 CTF 文件自动导入
    - 新增港交所 CTF 文件自动导入，日常在下午 16:30 前导入完毕
    - 注意：需要开通该功能的可联系客服对接
    - 路径：清算管理 - 文件导入
    <img src="/assets/LsEQbB3NLoSRaZxp9nMch3mnnX7.png" src-width="3576" src-height="1692" align="center"/>

2. 【新增】机构合约延迟交收
    - 新增机构合约维护模块，机构合约会在交易日的日切步骤后自动生成
    - 本次迭代支持针对机构合约进行延迟交收操作，解决 CCASS 延迟交收的记账问题
    - 注意：交收日&gt;=当前账务日期的机构合约才可进行延迟交收
    - 后续会迭代相关报表、机构收费等相关功能
    - 路径：清算管理 - 合约管理 - 机构合约
    <img src="/assets/JCeXbNlvKom7XXxmCTScIbHTn7c.png" src-width="3574" src-height="1158" align="center"/>

3. 【优化】结单 email 重发功能
    - 主要用于特殊情况（如数据异常等）下重发结单
    - 重新生成结单后状态为“重新生成待发送”，该状态下发送的 email 消息可为定制消息模版
    - 注意：状态为“生成失败”“生成中”不可重发
    - 路径：「清算管理」-「日终管理」-「结单管理」-「结单查询」
    <img src="/assets/Xv4VbEda6oaCk0xct0FcQjTNn9e.png" src-width="2200" src-height="1242" align="center"/>

4. 【优化】资产查询页面结构，增加图表，资产类别更清晰
    - 区分不同的风控状态及风控指标
    - 增加现金冻结明细查询（点击""冻结现金""即可查询）
    - 增加即时仓位明细查询（点击""已结算数量""即可查询）
    - 路径：「资产帐户」-「资产总览」-「客户帐户查询」
    <img src="/assets/EwoabarNyok7ufxSGZ1cju5RnWh.png" src-width="3780" src-height="1780" align="center"/>

5. 【优化】Margin Call 详情页面增加顾客现金明细
    - 路径：「风控管理」-「风险预警」-「实时预警」
    <img src="/assets/OJBebHAijolaEQxsJToceChynyb.png" src-width="3794" src-height="1766" align="center"/>

6. 【优化】Margin Call 支援对部分预警记录设定到固定日期自动平仓或到截止日自动平仓
    - 路径：「风控管理」-「风险预警」-「实时预警」
    <img src="/assets/P80xbSdWZoOFXLxDggwcOZWUnbf.png" src-width="3722" src-height="1698" align="center"/>

7. 【优化】手工提现银行卡列表在卡号后面显示币种
    - 路径：款项管理 - 出金 - 手工提现
    <img src="/assets/HPfLbX3ksouJDKxhyOwcpC0Znvf.png" src-width="2826" src-height="1042" align="center"/>

8. 【优化】转入或转出股票时如果客户位未完成 HKIDR 授权则提示“OTCR 申报需要请联络客户完成 HKIDR 授权”
    - 路径 1：证券管理 - 证券存入 - 手工入仓
    - 路径 2：证券管理 - 证券取出 - 手工出仓
    <img src="/assets/WVs7bXISvoYwFpxUIugcqN67ndv.png" src-width="2816" src-height="1440" align="center"/>
        ### 其他功能
    whale 支持最近登录记忆
    - 首次登录时，需输入企业编号，账号密码登录
    - 非首次登录时，系统记忆最近登录企业，仅输入账号密码登录即可
    <img src="/assets/MgqvbC1ZEoiKZDxIvsYc5np2nZE.png" src-width="2514" src-height="1208" align="center"/>
        
