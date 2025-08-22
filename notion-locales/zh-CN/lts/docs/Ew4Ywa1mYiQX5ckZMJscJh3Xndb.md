---
slug: Ew4Ywa1mYiQX5ckZMJscJh3Xndb
title: 20. 运营系统问题
sidebar_position: 19
---


# 20. 运营系统问题


# 20A 问：客户转换登录手机号后，早前购买的行情卡能否继续使用？


答：用户的行情卡是与用户 ID 绑定，转换登录手机号不会影响用户使用已有行情卡。


# 20B 问：为何上传「批量发放卡券奖励」模板文件失败？


答：模板文件的「活动 code」和「奖品 code」字段只能填写英文字母和数字，如输入了中文字、特殊符号会引致不能导入。


![image.png](/assets/7047d6dce3ffcab0fea24bef94d77248.png)


![image.png](/assets/15c42cc315565d8f6227d16a9aec7174.png)


# 20C 问：投放系统中用户分群的「用户地区」如何筛选客户？


答：根据以下字段来作筛选，


优先级 1：居住国家/地区


优先级 2：手机区号


优先级 3：注册时的 IP 地区


![image.png](/assets/cfbfa2bcf209906ea81a0f4bd1cb9d1f.png)


# 20D 问：App Push 如何向指定客户进行推送。


答：


1. 先在「用户分群」创造指定客户的分群


![image.png](/assets/6cc496bcfb773e3ca7a37e63fb8d7eae.png)


2. 然后到「运营计划」中创建计划


![image.png](/assets/ff58f38bc654834486bca3d7ab39ed2c.png)


3. 选择「定时型 - 单次」和「触发时间」


![image.png](/assets/f0497c616d630dc9ff3f04c02cf625be.png)


4. 选择用户分群


![image.png](/assets/1e2a85db25fdebf73197348530eea254.png)


5. 选择「Push」及输入内容 


![image.png](/assets/a17ef05d0330b3e153fdfd388399c162.png)


6. 保存及审核后在「计划列表」按「启用」


![image.png](/assets/08526f6f0d33044a0a4406d6d18d0a6a.png)

