---
title: 2.2 换汇
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
sidebar_position: 1
---


# 2.2 换汇

## 2.2A 问：如何设置换汇操作？

<b>答：</b>确认已配置币种为可汇兑<b>、</b>币种对、换汇策略、换汇池额度，前期设置请参考以下步骤。
(i). 在「业务参数设置 &gt; 资金参数 &gt; 币种」的页面中，操作栏点击「编辑」把汇兑功能设置为"yes"

<img src="/assets/JUC4bkt5YohctzxrtPec0bpjnhh.png" src-width="2641" src-height="1274" align="center"/>

<img src="/assets/FWRabG84noF9uSxeVVqca7Scnkf.png" src-width="2858" src-height="1635" align="center"/>

(ii). 在「业务参数设置 &gt; 汇兑 &gt; 币种对」页面中点击「新建」添加可兑出及兑入币种

<img src="/assets/VXIvb4LPdofbnPxzck1cmupmncc.png" src-width="2635" src-height="1203" align="center"/>

<img src="/assets/VlIqbPgsWoc7XMxfyYTcr5GenCe.png" src-width="2383" src-height="941" align="center"/>

(iii). 在「业务参数设置 &gt; 汇兑 &gt; 换汇策略」页面中点击「新建」

<img src="/assets/Kj5Jbh3X3ofI1xxXCTEclbWynMb.png" src-width="2627" src-height="1291" align="center"/>

(iv). 在「新建」页面需添加按兑出及兑入币种

- 默认
- 服务策略：汇兑池换汇
- 汇兑类型：无
- 输入服务时段
- 支持的币种对，点击「添加」

<img src="/assets/V65kbY9fGopMqjxAutEcLXzqnFb.png" src-width="2229" src-height="1372" align="center"/>

(v).在「款项管理 &gt; 换汇池 &gt; 额度配置」点击「新建」

<img src="/assets/Ww9abnkngoPwzwxViGscpscTnae.png" src-width="2856" src-height="1555" align="center"/>

(vi). 在「新建」页面

- 币种：添加兑出兑入的币种
- 警戒线金额：输入金额（如到达警戒线会作提醒）
- 剩余额度调整：输入金额

<img src="/assets/E0nIbROIwo7vrexbezmc5adfnVf.png" src-width="2246" src-height="1370" align="center"/>

- 基础设置完成后，可以操作换汇。

(i). 在「款项管理 &gt; 换汇 &gt; 客户汇兑」点击「手工换汇」。

> 手工换汇自定义汇率支持到 4 位小数。如超过 4 位小数，需要先驳回换汇申请，使用调账功能操作

<img src="/assets/UBCobIH49oMrZHxT7q9cg2jvnxe.png" src-width="2599" src-height="1104" align="center"/>

<img src="/assets/MSqubmODyoVgWIxQKrqcSlJqnig.png" src-width="2237" src-height="1374" align="center"/>

(ii). 在操作栏点击「复核」通过或驳回申请

<img src="/assets/D1W9bkBYgoONZvxyZEGcTCNen7f.png" src-width="2236" src-height="1034" align="center"/>

<img src="/assets/UDn6bYa0Ho1yNqxG7hPcLkHTnmc.png" src-width="2228" src-height="1367" align="center"/>

## 2.2B 问：Manual current / Manual account 有什么区别？有什样的影响？

<b>答：</b>结单上的汇率（见 2.2B 图一）及 手工换汇的系统配置汇率（见 2.2B 图二）会跟随即期汇率（Manual_current）。Manual_current 的汇率会一直根据上次修改的记录显示，直至手动再更新。

会计与换汇、资产相关的报表，如 FRR006、FDR001、SDR003 的汇率类型（见 2.2B 图三），可选帐面汇率通常用于计算资产，帐务才会涉及到帐面汇率（Manual_account）。

<img src="/assets/C1GabusCEojk4zx7ayVctC9knoe.png" src-width="1268" src-height="194" align="center"/>

2.2B 图一

<img src="/assets/PLKybW3K0oF9ruxOQIncWNRcndc.png" src-width="2510" src-height="768" align="center"/>

2.2B 图二

<img src="/assets/WQpSbYbOWoicPbxj8aJcjdnDnVd.png" src-width="2042" src-height="382" align="center"/>

2.2B 图三

## 2.2C 问：客户提交换汇申请为何不成功？

<b>答：</b>换汇池需要有足够的额度才能作换汇。

设置换汇池的步骤见以下：

(i). 在「业务参数设置 &gt; 汇兑 &gt; 换汇池额度配置」页面点击「新建」

<img src="/assets/TVtNbgv4toAidqx4W6HcBjAUnwO.png" src-width="2856" src-height="1555" align="center"/>

(ii). 在编辑页面：

- 币种：添加兑出兑入的币种
- 警戒线金额：输入金额（如到达警戒线会作提醒）
- 剩余额度调整：输入金额

<img src="/assets/Bp6WbBfD0ovZybxIdUjcEVCqnCe.png" src-width="2096" src-height="1354" align="center"/>

## 2.2D 问：人工换汇能使用自己的汇率吗？

<b>答：</b>可以在「款页管理 ＞ 换汇」页面点击「手工换汇」选自定义汇率输入。

<img src="/assets/RKf7bF5xLoxK7mxgjznc6hxLnrf.png" src-width="2500" src-height="986" align="center"/>

## 2.2E 问：如何设置每笔换汇都需要人工审核？

<b>答：</b>在「业务参数设置 &gt; 汇兑 &gt; 换汇策略」点击「审批起点」设置审核起始金额，如：0.01。 

<img src="/assets/KiGEbMDB1oCjT2xyBg6cWi2LnJb.png" src-width="2712" src-height="1394" align="center"/>

<img src="/assets/WRCbbyrbZol2bHxJU4Kcgj0tnih.png" src-width="2346" src-height="940" align="center"/>

