---
title: 2.2 换汇
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
sidebar_position: 2
---


# 2.2 换汇

# 2.2A 问：如何设置换汇操作？

**答：<b>前期设置请参考以下步骤。确认已配置币种为可汇兑</b>、**币种对、换汇策略、换汇池额度。
(i). 在「业务参数设置＞资金参数＞币种」页面中，操作栏点击「编辑」把汇兑功能设置为"yes"

<img src="JP5vbtaM3o5hrqxMWR4jEnX6p4g" src-width="2641" src-height="1274" align="center"/>

<img src="OTAgbmPzRoSAUCxfBNgjOyGQpof" src-width="2858" src-height="1635" align="center"/>

(ii). 在「业务参数设置＞汇兑＞币种对」页面中点击「新建」添加可兑出及兑入币种

<img src="VbPNbK6NQobPGyxCvAEjdXlOpJd" src-width="2635" src-height="1203" align="center"/>

<img src="HtxUbbxLfoPg2gxjyYVjTVWxp6d" src-width="2383" src-height="941" align="center"/>

(iii). 在「业务参数设置＞汇兑＞换汇策略」页面中点击「新建」

<img src="ABqObm2rzoeQ8LxxtdujKCHbpCb" src-width="2627" src-height="1291" align="center"/>

(iv). 在「新建」页面添加按兑出及兑入币种

- 默认（如选了「指定」汇兑类型，不能为「无」）
- 服务策略：汇兑池换汇
- 汇兑类型：无
- 输入服务时段
- 支持的币种对，点击「添加」

<img src="AWVQbxSmio8Ff3xrZtLjU8E6p2o" src-width="2229" src-height="1372" align="center"/>

(v).在「款项管理＞换汇池＞额度配置」点击「新建」

<img src="VsA9bq2EIouPDExOPOaj3gmtpvf" src-width="2856" src-height="1555" align="center"/>

(vi). 在「新建」页面

- 币种：添加兑出兑入的币种
- 警戒线金额：输入金额 （如到达警戒线会作提醒）
- 剩余额度调整：输入金额

<img src="Wg37bYRYqo6RSzxNpfYjeMnfp3f" src-width="2246" src-height="1370" align="center"/>

- 基础设置完成后，可以操作换汇。

（一） 在「款项管理＞换汇＞客户汇兑 」点击「手工换汇」。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>手工换汇自定义汇率支持到 8 位小数。如超过 8 位小数，需要先驳回换汇申请，使用调账功能操作</p>
</div>

<img src="LviobOyhKoliXMxbGFNj6RoppZe" src-width="2599" src-height="1104" align="center"/>

<img src="Aa13blgWyoZODux3hUljSVo0pVc" src-width="2702" src-height="1232" align="center"/>

（二） 在操作栏点击「复核」通过或驳回申请

<img src="E3yibwIBzocQEJxW4q4juZOWpQe" src-width="2236" src-height="1034" align="center"/>

<img src="K5nabcrCRo6kI1x4hCSjD2jHp2d" src-width="2228" src-height="1367" align="center"/>

# 2.2B 问：Manual current / Manual account 有什么区别？有什样的影响？

**答：**结单上的汇率（见 2.2B 图一） 及 手工换汇的系统配置汇率（见 2.2B 图二） 会跟随即期汇率（Manual_current）。Manual_current 的汇率会一直根据上次修改的记录显示，直至手动再更新。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>参考汇率以<b>中间拆算价</b>换算总资产市值。</p>
</div>

会计与换汇、资产相关的报表，如 FRR006、FDR001、SDR003 的汇率类型（见 2.2B 图三），可选帐面汇率通常用于计算资产，帐务才会涉及到帐面汇率（Manual_account）。

<img src="VzXNbxXd9oQxoBxsIJDjoNXspQh" src-width="1268" src-height="194" align="center"/>

<em>2.2B 图一</em>

<img src="DsGqbukeYof7Tjxzj4djUWD3pdg" src-width="2510" src-height="768" align="center"/>

<em>2.2B 图二</em>

<img src="AlS3b9Ir0oj3qMxKBL8jVah5pKh" src-width="2042" src-height="382" align="center"/>

<em>2.2B 图三</em>

# 2.2C 问：客户提交换汇申请为何不成功？

**答：**换汇池需要有足够的额度才能作换汇。

设置换汇池的步骤见以下：

(i). 在「业务参数设置＞汇兑＞换汇池额度配置」页面点击「新建」

<img src="Lahgbr2cZo7HtGxr5ZBjtc5ppdb" src-width="2856" src-height="1555" align="center"/>

(ii). 在编辑页面：

- 币种：添加兑出兑入的币种
- 警戒线金额：输入金额 （如到达警戒线会作提醒）
- 剩余额度调整：输入金额

<img src="EB3ObjdOBoEZYFxSXNUjEnOSpqh" src-width="2096" src-height="1354" align="center"/>

# 2.2D 问：人工换汇能使用自己的汇率吗？

**答：**可以在「款页管理＞换汇」页面点击「手工换汇」选自定义汇率输入。

<img src="CAthbBBofoit9lxIGhHjEW1Xpwg" src-width="2500" src-height="986" align="center"/>

# 2.2E 问：如何设置每笔换汇都需要人工审核？

**答：**在「业务参数设置＞汇兑＞换汇策略」点击「审批起点」，设置审核起始金额，如：0.01。

<img src="VlSmbdaR3olrqVx4ewHjydoJphK" src-width="2712" src-height="1394" align="center"/>

<img src="ZCeGbmBZvotR2rx4HXujra6epVa" src-width="2346" src-height="940" align="center"/>

# 2.2F 问：出入金、换汇能有通知吗？

**答：**在右上方齿轮的「消息设置＞订阅管理」页面（见 2.2F 图一、图二）点击「新建」。

可选“换汇、出入金需要审核”电邮通知（见 2.2F 图二）。剔选邮件方式通知并添加需要通知的人员／角色（见 2F 图三）。如客户透过 App 提交换汇的没有电邮提醒。

<img src="SHkXbRHw4oaI4yxM6FIj5L6Spce" src-width="2386" src-height="374" align="center"/>

<em>2.2F 图一</em>

<img src="HfZMbrJZiorbDJxSLrXjFr3zpHd" src-width="2371" src-height="1098" align="center"/>

<em>2.2F 图二</em>

<img src="BVstbil1goLos2xdImtj3Ldjpi8" src-width="2021" src-height="966" align="center"/>

<em>2.2F 图三</em>

<em>Webhook 为内部飞书通知没对外开放</em>

