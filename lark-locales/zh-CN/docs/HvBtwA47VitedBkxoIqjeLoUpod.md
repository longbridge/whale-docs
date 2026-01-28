---
title: 10. 新股认购问题
slug: JLIUwnaXviuhGKk7rzPcXB8XnWg
sidebar_position: 9
---


# 10. 新股认购问题

# 10A 问：为什么申购新股要分不同渠道？

**答：**分不同渠道更容易进行 IPO 认购订单的融资管理及统计，例如，分别设置如下渠道：

```text
1. 自有资金渠道
2. A 上手融资渠道
3. B 上手融资渠道
```

在订单的汇总中，通过不同渠道汇总认购金额，融资使用情况，便于系统自动化统计不同渠道的订单、融资情况。

<img src="IbksbeWx3ozWjLxqJWJjXLnepnf" src-width="3612" src-height="592" align="center"/>

# 10B 问： 新股认购能否分开不同渠道逐一扣款？

答：可以先进行 A 渠道扣款，然后新增 B 渠道并推迟申请时间，最后为 B 渠道扣款。

<img src="Vcbrb8YKhoGnAJxVY1PjSR1ppKd" src-width="2876" src-height="1602" align="center"/>

<img src="CD0zbEocno48jWx4KNCjmtRPpzf" src-width="2820" src-height="1598" align="center"/>

# 10C 问：是否支持阶梯式认购收费？

**答：**现在不支持按照不同的认购股数进行阶梯收费。

# 10D 问：扣款订单中选择的财务日期，会有如何影响？

**答：**这里的财务日期指这个扣款发生的行为记录。例如：5 月 10 日账户 A 扣了 100，财务日期选了 5 月 11 日，结单会在 5 月 11 日显示扣款。

<img src="Ww5Fb9KMSoilPbxCty1jcuvop5c" src-width="2680" src-height="902" align="center"/>

# 10E 问：IPO 扣款订单的账务日期会否影响计息？

**答：**IPO 扣款订单的账务日期用以记录扣款发生，跟计息天数没有关系。选了相关财务日会在结单上显示扣款记录。

<img src="P9x6bJnOkokCQVxjLg9jbhVRpAw" src-width="2680" src-height="902" align="center"/>

# 10F 问：客户户口结余为 0，为什么申请 0 成本认购新股失败？

**答：**0 成本认购新股时有手续费要扣除，户口结余不能是 0。客户要存入足够手续费的资金或将 0 成本认购的手续费设为 0 才可以申请。

# 10G 问：交易额度能否用作新股认购？

答：交易额度不能用作现金或融资新股认购，新股认购需要有足够资金。

# 10H 问：为什么找不到债券 #4701 作新股认购 ？

**答：**这个债券标的是有的，但是不支援认购，因不是指定证券经纪，所以新股认购没显示。

# 10I 问：新股上市后撤回，重新招股的如何作认购设置？

**答：**在「新股认购＞全部」搜索重新招股的新股代号（见 10I 图一）点击「详情」，重新设置认购开始＆结束时间、费率、渠道等资料，选回「是」可认购。（见 10I 图二）

<img src="N5FFbygXPoCZrxx45DdjXbsLpDd" src-width="2554" src-height="662" align="center"/>

<em>10I 图一</em>

<img src="AGZJb8uUtoK13zxT9QIjTy3bpYy" src-width="2528" src-height="1552" align="center"/>

<em>10I 图二</em>

# 10J 问：能否支持到国际配售？

**答：**新股的国际配售可以在后台操作，但不支持上市公司的配售。

在「新股认购＞港股国配」页面配置流程、扣款、中签跟新股 IPO 一致（见 10J 图一、图二）。
上手的中签文件需要用通用模版导入系统（见 10J 图三）。但是如果过了认购的时间就要用到手工调账处理。

<img src="VncTbFgzForv2AxUopYjBKCFpBH" src-width="2506" src-height="854" align="center"/>

<em>10J 图一</em>

<img src="AKYRb242QoUVYoxfUcLjZASnplg" src-width="2498" src-height="928" align="center"/>

<em>10J 图二</em>

<img src="MBGFbk4W7o9NU9xjlzxjl9ZQp8f" src-width="2508" src-height="1428" align="center"/>

<em>10J 图三</em>

# 10K问：为什么新股认购扣款后，「账户详情」的「现金明细」会把该笔扣款计算在「总金额」上？

<img src="YjgBbBHbRogf1fxjkkxjHQZRp5b" src-width="1846" src-height="1392" align="center"/>

答：「总金额」是有计算「在途现金」，「在途现金」有计算正在申购新股的资金，能更实际反映客户资产；而客户实际能使用的是「总可用现金」，是没有加上这笔申购新股的资金。

