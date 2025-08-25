---
slug: BhdxwdhAbiAKubkVNprcU5pZnru
title: 快速上手
sidebar_position: 1
---


# 快速上手


# 概述


Whale 的账户管理模块提供了对客户账户的综合管理和操作功能，帮助管理人员进行账户相关的管理工作。


# 前置条件


您需要获取以下授权后方可正常使用系统功能


| 权限名称                  | 权限说明                 |
| --------------------- | -------------------- |
| ClientAccountInfoFull | 管理账户列表、BCAN 码、工单中心的权限 |


# 账户列表


## 查询账户信息


可以查询所有已开户的客户帐户状态资料


![image.png](/assets/8637a2fe56aedf624d0dae79ee3518ec.png)


也可在右侧记录操作区：点选【详情】，查看客户细部基本资料，同时也提供资产交易/操作记录/登录设备/代理人/关系人 这些特定事项的 Tab 页签资料


![image.png](/assets/2ce30bcaa7a77a9a5ab539847f44e3aa.png)


 资产记录的入金记录


![image.png](/assets/a6a09d13a1d8fc139a5b2a1899df7ef6.png)


一些历史登录设备记录


![image.png](/assets/84910a3838da09c232e1b87a379c76d8.png)


本作业也可以对客户帐户作交易权益的变更，在记录右侧操作区点选【交易权限】


![image.png](/assets/05a2f73d8c9c3f8c3cff9bfffec551c3.png)


本作业也可以对客户作帐户安全事项管理，在记录右侧操作区点选【...】，选择对应安全事项管理（冻结/解锁/注销等....)


![image.png](/assets/757f8a9d3c5a7c9754e2cf87d8fe61df.png)


在帐户列表作业中，增加帐户标识筛选 查询条件，方便定位查询数据


![image.png](/assets/eb951b8645ddd6ec19d8950b89313afb.png)


# BCAN 码


## HKIDR 报送


本作业可以处理 HKIDR 机制的 BCAN-CID 档案上传（分成 SFTP 自动上传与手动上传 两种模式）

- 注：有关中华通的 BCAN 说明 将在系统开放支持时说明

![image.png](/assets/cae8d88d7ff2e4193486b9b36189e93a.png)


其中申报逻辑：上报的数据是 已开通帐户、有 BCAN 码且同意授权协议的全量客户，申报给港交易所后，获取交易所返回的档内容，将 BCAN 生效的状态同步更新；

1. **若是劵商是 EP 租户**：本作业是支持自动申报上传（透过 SFTP 的 SDNet/2 线路）

    SFTP 申报方式说明如下：

    - 交易日 08:00 am- 03:00 pm 时间段内，自动生成 BCAN-CID 档
    - 产生档案后自动通过 SFTP 的方式提交给交易所
    - 交易所返回的应答档展示在后台，支持下载
    - 返回的全景档自动解析，将客户的 BCAN 状态自动更新

![image.png](/assets/babd362290925d6a9c18402aaa28360f.png)

1. **若是劵商是 OB 租户**：是要手动产生 BCAN-CID 档后，再人工透过 SFC Web ECP 网站上传资料

    SFC Wings 申报方式说明如下：

    - 通过本作业先行下载申报文件

    ![image.png](/assets/ca4ce5051ad155523c745760432fa99f.png)

- 去 ECP 2.0 SFC 入口官网上传申报文件，将交易所返回的全景文件导入后台

![image.png](/assets/498ffbcd6785e5329a9491b6ba9d7d0b.png)

- 将交易所返回的全景文件，在本作业导入后台

![image.png](/assets/a81d2556c8ccb32fee1a7ed22bd9f6ff.png)


同时客户的 BCAN 生效状态结果将同步更新


![image.png](/assets/198991353105b22920f1156e2cedb845.png)


## BCAN 区间


本作业可以维护参与者的角色（CCEP）所自行维护本身 BCAN 码区间段或（TTEP）被上手劵商分配的 BCAN 码区间段


当 BCAN 区间分配后，系统就会对新开户的客户自动分配一个 BCAN 码


至于存量现有客户，长桥科技将会协助在实名制实施前，批量完成现有客户分配 BCAN 码


![image.png](/assets/31a07a50333bf405b76ef01d713fb08e.png)


点选右方上侧【新建区间】，新建一笔新的 BCAN 区间


![image.png](/assets/797cc384cbbac4f128754ef22418acaa.png)


其中栏位说明如下：


| **港股 EP 模式**                                               | **港股 Non-EP 模式**                                            |
| -------------------------------------------------------- | --------------------------------------------------------- |
| CCEP：选择当前租户选项
使用者：选择当前租户选项
是否上报：选择‘是’
起始编号/结束编号：手动输入配置·  | CCEP：选择‘lb’选项
使用者：选择当前租户选项
 是否上报：选择‘是’
 起始编号/结束编号：手动输入配置· |
| 注意：（‘1’ - ‘99’是交易所自测区间，不可使用，不可用‘0’前置占位，建议按 lb 提供的区间配置）       |                                                           |


# 参与者管理


本作业可以配置管理 实名制中有关劵商参与者的公司资料以及参与者的角色安排（CCEP/TTEP）


![image.png](/assets/7ab0a098965b002b272d2b418d3a2553.png)


点选右方上侧【新建参与者】，建一笔新的参与者信息


![image.png](/assets/e5f154a475d56d6d7dc5685905bc0528.png)


其中栏位说明如下：


[%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A1%A8%E6%A0%BC.xlsx](https://prod-files-secure.s3.us-west-2.amazonaws.com/1445bab0-c2cc-8114-afe4-000302ebb560/0a6767cb-7717-407b-b8f3-cae4c8e8ea10/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A1%A8%E6%A0%BC.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZHQITZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGGjFay252TXnInwleSBt%2B8ACnLG1HdT5bPXODaoKfwSAiEAxxXs5t4r5Lwtej0QpFg5Oni7dhSMIXSaYwxs3HgMPcwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6t1s3ESbp7jyeRASrcA%2Fmhf7vKsTI2oO23q9vKhcvl1z3oVX9FygfEV6aj6v8w%2BQn3a0Ih8F2OoG7oehL36AMNssKsCtQddvb02FzN9CjKlWUFtbdO6wXVJ1g%2BDQmL8Q181C6ZiVc%2BWWpkx7k0Ja230PYQuFXO9RAnLsWrDdmZhR0W7dvgkxdPVIDqD6GdP22QHtrw629%2BOZSbxMZvQ9twvRK2ZVVLadFOEnDaxi0nN6kpuwQcHl7ASDLcHFhFVy3agqv2v12f9WsBi9vxLqr09Z8z4ww2fvv48hilXTuxkZ4iQbJYzP9ktF%2B%2Fi9A9l5c%2Bqf1RgwurtDQ2RnsCzW6B5kjLW2Rx6ByJtFN6WwnDXfP8N73PssAmuUP6gwwMGZq97wKH%2FBkjFupCz96a2oHis3okzG56kT6u9fZR1txCkQ3Fwqmp7xfl0ImQyIFaYB8zKFiRyycTcfV4RnXLY57nJHQBaWl2XSd5%2B8eGCT4uh9g0ul5%2FOK1G9VBi2FTJA8p2LHTX%2Bs90khGK8Pf7L7z%2Bn%2FN6c%2BFrG%2FJXVWUBtl6fQ9I%2B5pQAMJJQvuuy496FFYy2Q%2FGG0iJJwxiV9fQmmFqSF0VQxdPFZltFyaGRJIY%2F43Ti%2BJAdDzhySfjuK5pbpy9RPaAUNGHAcOUYMM2758MGOqUBcLkPdSNxpKez8jB13HF%2FJuxngsAucUVKTbPjnKdSMPwPeifQ5EImrrhFBV%2Bb2fJHKE6jdkBfQCY0IrWr%2BliiyF9%2BYxNU2gKY9ueypCGSsjC4qealA5PUoN9JYidhSXBeqn5fXz9EkIts%2BMV2X56UAgloqSCLMXDShjzvojPECzBPlhEM5zem3qoTqjbzXYGkpDz1tqcl2o6LtoeMMqxX8WuwIGjp&X-Amz-Signature=a20910eaabafa43de424e716889be1182bfab711dd1321b2c956bcc05002385c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


| 港股 EP 模式                                                                                                | 港股 Non-EP 模式                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 新增一条参与者记录：
参与者名称：选择当前租户选项
类型：选择‘House’选项
 BCAN 类别：选择‘CCEP&TTEP’选项
参与者编号：手动输入 Firm ID
中央编号：手动输入 CE number | 新增两条参与者记录：
记录 1
参与者名称：选择当前租户选项
类型：选择‘House’选项
BCAN 类别：选择‘TTEP’选项
参与者编号：手动输入 Firm ID
中央编号：手动输入 CE numbe
记录 2
参与者名称：选择'lb'选项
类型：选择‘Thrid’选项
BCAN 类别：选择‘CCEP’选项
参与者编号：手动输入 Firm ID=‘2195’
中央编号：手动输入 CE numbe=‘BPX066’；·  |
| 港股 EP 模式                                                                                                | 港股 Non-EP 模式                                                                                                                                                                                                    |
| 新增一条参与者记录：
参与者名称：选择当前租户选项
类型：选择‘House’选项
 BCAN 类别：选择‘CCEP&TTEP’选项
参与者编号：手动输入 Firm ID
中央编号：手动输入 CE number | 新增两条参与者记录：
记录 1
参与者名称：选择当前租户选项
类型：选择‘House’选项
BCAN 类别：选择‘TTEP’选项
参与者编号：手动输入 Firm ID
中央编号：手动输入 CE numbe
记录 2
参与者名称：选择'lb'选项
类型：选择‘Thrid’选项
BCAN 类别：选择‘CCEP’选项
参与者编号：手动输入 Firm ID=‘2195’
中央编号：手动输入 CE numbe=‘BPX066’；·  |


# 工单中心


## 冻结客户


支持在后台操作客户的账号冻结，冻结后，当前账号将无法登录 App、桌面端等。


**单个账号冻结**


点击「新建工单」，选择「冻结客户」


![image.png](/assets/f54a6bd80c3692d57d77bd318d7b6f29.png)


在「新建冻结客户」弹窗内，选择需要冻结的客户编号，填写备注说明及附件后，提交工单申请


![image.png](/assets/7fac0f7e60df1b65fde71827cacd689f.png)


点击「详情」，或批量勾选数据后，可单次/批量审核工单，审核通过后，客户的状态将发生变更


![image.png](/assets/e0a9ae54b8411d5ff2245e54513e2948.png)


**批量客户冻结**


在冻结客户的列表页，点击「批量导入」按钮


![image.png](/assets/58ab7c41432798594c5123b67988da20.png)


下载批量导入的文件模板，按要求填入待处理的数据，再在后台点击上传文件


![image.png](/assets/7c370d33590ba893f08b636c2d0b65c1.png)


提交后，再在冻结客户的列表页，单次/批量审核数据。审核完成后，客户的状态发生变更


![image.png](/assets/d1850c8af0cab4a0d6845eb2725c7c4d.png)


其他客户/账户操作的流程，与冻结客户类似

