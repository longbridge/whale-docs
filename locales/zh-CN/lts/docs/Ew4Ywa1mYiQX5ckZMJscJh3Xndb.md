---
title: 20. 运营系统问题
slug: Ew4Ywa1mYiQX5ckZMJscJh3Xndb
sidebar_position: 19
---


# 20. 运营系统问题

## 20A 问：客户转换登录手机号后，早前购买的行情卡能否继续使用？

答：用户的行情卡是与用户 ID 绑定，转换登录手机号不会影响用户使用已有行情卡。

## 20B 问：为何上传「批量发放卡券奖励」模板文件失败？

答：模板文件的「活动 code」和「奖品 code」字段只能填写英文字母和数字，如输入了中文字、特殊符号会引致不能导入。

<img src="/assets/F5ugbjNByonkiax0uSjcu7E6nxg.png" src-width="2842" src-height="1374" align="center"/>

<img src="/assets/XF29bp7T0oU6sWxJd3hclNR1nff.png" src-width="1314" src-height="380" align="center"/>

## 20C 问：投放系统中用户分群的「用户地区」如何筛选客户？

答：根据以下字段来作筛选，

优先级 1：居住国家/地区

优先级 2：手机区号

优先级 3：注册时的 IP 地区

<img src="/assets/TTNVb7TI3ovfe7xasdAcVcEhn4g.png" src-width="1914" src-height="902" align="center"/>

## 20D 问：App Push 如何向指定客户进行推送。

答：

1. 先在「用户分群」创造指定客户的分群

<img src="/assets/MXJfbdwYDoObo9x2cdBcqIFtnAc.png" src-width="2826" src-height="870" align="center"/>

2. 然后到「运营计划」中创建计划

<img src="/assets/E0E2bjprLo6DmIxBz5pcYVz0nqh.png" src-width="2840" src-height="880" align="center"/>

3. 选择「定时型 - 单次」和「触发时间」

<img src="/assets/RfRxbJBV5ojIhexI5r1cimeVnDb.png" src-width="2868" src-height="1042" align="center"/>

4. 选择用户分群

<img src="/assets/XyFFbyIXBomgyjxEFNUcPh4XnBY.png" src-width="2852" src-height="1436" align="center"/>

5. 选择「Push」及输入内容 

<img src="/assets/FjqNb5JrWoDPVEx7c2FcThyyncb.png" src-width="2842" src-height="1398" align="center"/>

6. 保存及审核后在「计划列表」按「启用」

<img src="/assets/Lw35bIS9ToE3x2xRc8tcVIyWnMf.png" src-width="2790" src-height="1454" align="center"/>

