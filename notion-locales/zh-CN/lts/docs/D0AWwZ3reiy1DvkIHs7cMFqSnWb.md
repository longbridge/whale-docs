---
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
title: 2.2 换汇
sidebar_position: 2
---


# 2.2 换汇


# 2.2A 问：如何设置换汇操作？


**答：**前期设置请参考以下步骤。确认已配置币种为可汇兑**、**币种对、换汇策略、换汇池额度。
(i). 在「业务参数设置＞资金参数＞币种」页面中，操作栏点击「编辑」把汇兑功能设置为"yes"


![image.png](/assets/bc687cb7ce514533aa746f8329a76eec.png)


![image.png](/assets/62f0c2da0fdeceb6a46de49f57ea3f78.png)


(ii). 在「业务参数设置＞汇兑＞币种对」页面中点击「新建」添加可兑出及兑入币种


![image.png](/assets/31b62394ad7ac84bc78efb98597fe04f.png)


![image.png](/assets/6d7fcf1ca9ac9869808ddff40c17a48f.png)


(iii). 在「业务参数设置＞汇兑＞换汇策略」页面中点击「新建」


![image.png](/assets/4dfb320190848663741d8de6ac394746.png)


(iv). 在「新建」页面添加按兑出及兑入币种

- 默认（如选了「指定」汇兑类型，不能为「无」）
- 服务策略：汇兑池换汇
- 汇兑类型：无
- 输入服务时段
- 支持的币种对，点击「添加」

![image.png](/assets/a4a73e2f34eda12525304a6f4a76e793.png)


(v).在「款项管理＞换汇池＞额度配置」点击「新建」


![image.png](/assets/1cc0c4766eefa7978c9e228a93de8b6a.png)


(vi). 在「新建」页面

- 币种：添加兑出兑入的币种
- 警戒线金额：输入金额（如到达警戒线会作提醒）
- 剩余额度调整：输入金额

![image.png](/assets/9011e8bcd861965db9e06b5f8c63639c.png)

- 基础设置完成后，可以操作换汇。

（一）在「款项管理＞换汇＞客户汇兑」点击「手工换汇」。

> 手工换汇自定义汇率支持到 8 位小数。如超过 8 位小数，需要先驳回换汇申请，使用调账功能操作

![image.png](/assets/562a076665e27ccbe291a5e7f34a9dbb.png)


![image.png](/assets/d1b0c7a59903cc451d104169a73dbb9a.png)


（二）在操作栏点击「复核」通过或驳回申请


![image.png](/assets/5dae5dbffc35cd715a92baf4f16da2ab.png)


![image.png](/assets/9959c88af0f5ce967f103222671ac7d4.png)


# 2.2B 问：Manual current / Manual account 有什么区别？有什样的影响？


**答：**结单上的汇率（见 2.2B 图一）及 手工换汇的系统配置汇率（见 2.2B 图二）会跟随即期汇率（Manual_current）。Manual_current 的汇率会一直根据上次修改的记录显示，直至手动再更新。

> 参考汇率以**中间拆算价**换算总资产市值。


会计与换汇、资产相关的报表，如 FRR006、FDR001、SDR003 的汇率类型（见 2.2B 图三），可选帐面汇率通常用于计算资产，帐务才会涉及到帐面汇率（Manual_account）。


![image.png](/assets/4e9fd08b4aff55c52fe39a493a0ee30f.png)


_2.2B 图一_


![image.png](/assets/3e821f30fbe92e0097351122160be4a0.png)


_2.2B 图二_


![image.png](/assets/559d6b25686aa8a7668ef60701a968f2.png)


_2.2B 图三_


# 2.2C 问：客户提交换汇申请为何不成功？


**答：**换汇池需要有足够的额度才能作换汇。

设置换汇池的步骤见以下：


(i). 在「业务参数设置＞汇兑＞换汇池额度配置」页面点击「新建」


![image.png](/assets/d0ee14a5094c8afa884e3ea112b96959.png)


(ii). 在编辑页面：

- 币种：添加兑出兑入的币种
- 警戒线金额：输入金额（如到达警戒线会作提醒）
- 剩余额度调整：输入金额

![image.png](/assets/bdaed1a3cfce4e534c896609be6ac08d.png)


# 2.2D 问：人工换汇能使用自己的汇率吗？


**答：**可以在「款页管理＞换汇」页面点击「手工换汇」选自定义汇率输入。


![image.png](/assets/cb6c186a3f9bfed5645301f57d6e9cf5.png)


# 2.2E 问：如何设置每笔换汇都需要人工审核？


**答：**在「业务参数设置＞汇兑＞换汇策略」点击「审批起点」，设置审核起始金额，如：0.01。 


![image.png](/assets/be4e5135672520e2203a345fe139f7bf.png)


![image.png](/assets/4cd07ea77b0e72a6302cbaa0a6b1c02b.png)


# 2.2F 问：出入金、换汇能有通知吗？


**答：**在右上方齿轮的「消息设置＞订阅管理」页面（见 2.2F 图一、图二）点击「新建」。


可选“换汇、出入金需要审核”电邮通知（见 2.2F 图二）。剔选邮件方式通知并添加需要通知的人员／角色（见 2F 图三）。如客户透过 App 提交换汇的没有电邮提醒。


![image.png](/assets/080af6970e16d553749bb4990a405fbd.png)


_2.2F 图一_


![image.png](/assets/9e03e45bc9157f64a60fe560f4ea94fc.png)


_2.2F 图二_


![image.png](/assets/2ee9e0808b901962554cd9d562e64430.png)


_2.2F 图三_


_Webhook 为内部飞书通知没对外开放_

