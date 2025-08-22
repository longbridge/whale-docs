---
slug: LxIbwuET8iV363kcGINc6wHxnth
title: 7. 佣金计费问题
sidebar_position: 6
---


# 7. 佣金计费问题


# 7A 问：如何查询客户佣金收费？


**答：**见以下步骤，


(i). 在「业务参数设置＞计费管理＞客户计费查询」页面


![image.png](/assets/b6153cfb8ceb11193b9311b0697bf682.png)


(ii). 以「账户号码」查询客户的收费及特殊收费

> 注＊特殊收费会优先于客户设置的收费

![image.png](/assets/67b69097c755be553934935e7b8a3f56.png)


# 7B 问：如何修改客户佣金？


**答：**在「业务参数设置＞计费管理＞客户计费配置」新建一个独立的佣金费率给客户（见 7B 图一）。


如计费套餐已有相关收费，可以在「客户组计费配置」进入详情页后，点击「管理组内客户」把客户添加进去（见 7B 图二、图三）。

> 客户计费设置取收费优先顺序：针对某个客户的设置＞普通客户组＞全局客户组。

![image.png](/assets/10a39a3fe09fbe4ce9a79f83488b4338.png)


_7B 图一_


![image.png](/assets/fd9f9921f9ac5494dcb032d275663ad5.png)


_7B 图二_


![image.png](/assets/a5a3ff1594b6c4e73806ad2d2bd67c56.png)


_7B 图三_



# 7C 问：如何修改政府杂费或佣金费率？ （客户组计费修改）


**答：**（i）在「业务参数设置＞计费管理＞客户组计费配置」页面中的“默认客户组”点击「编辑」。


![image.png](/assets/3111e72f16acb8a8c5eb6ac94c42f649.png)


(ii). 在操作栏中点击「编辑」修改相应的收费埸景。


![image.png](/assets/6d1d9c73d2710fe0d50ee3bcf8029666.png)


(iii). 可修改费率、最低/最高收费。


![image.png](/assets/c44799d281f60881b3d9ee973ddd23ec.png)


(iv). 修改完成后点击「提交」（编辑后约 10 分钟生效）。


![image.png](/assets/ce3b8f5c1fd03204d364ba1b7c01c38a.png)


(v). 点击「客户计费查询」查询个别客户收费确认。


![image.png](/assets/7bebc7370eac23710592fc6e63ee9e02.png)


(vi). 随机搜寻客户及点选修改了的收费类型查询。


![image.png](/assets/0d72a7fee36d0b1d77fcc6da94f86a21.png)


# 7D 问：佣金收费／交易合约作一次性的额免或修改，可以什样处理？


**答：**执行清算任务时，完成 "清算计费" 后先暂停，拉取到客户合约数据在「清算管理 > 合约管理」修改费用。


(i). 执行日终任务去到 "清算计费" 时点击「暂停一键清算」。


![image.png](/assets/c0b6fd74856d4d6dd7276b921703cbef.png)


(ii). 执行完成后去到「合约管理 > 客户合约」页面拉取到当天账务日期的交易后，搜索客户及相应的订单，在操作栏点击「详情」


![image.png](/assets/39f367ec65143f834a89f49e8c19b3f7.png)


(iii). 在「费用信息」页面相应的收费类别点击「编辑」


![image.png](/assets/ab3bffb0acb4464e8f0ca821b470b83a.png)


(iv). 在实收金额修改费用后点击「确定」。如收取 0.74 USD > 0.01 USD


![image.png](/assets/45acd2554283342d7efdee093b31ae47.png)


(v). 在「费用信息」页面，实收金额及应收金额费用会更新


![image.png](/assets/0717a52329e223d600befd0c76510a6b.png)


(vi). 之后继续完成清算，费用会作调整及结单会显示更新的费用


# 7E 问：计算精度的 Contract、Order、Trade done 如何区分？


**答：**Contract、Order、Trade done 见以下例子说明。

- 如：想合单计算，选 Contract，会按客户当天买同一只股票的总交易金额计算佣金
- 则：客户下单 3 次 10000，合成 30000 计算一次佣金
- 如：平台费逐条订单计算，选 Order，会按客户下单次数计算
- 则：客户下单 3 次 10000，逐笔计算 会收取 3 次平台费
- 如：收取政府杂费，选 Trade done，会按订单成交的次数计算
- 则：客户下单 3 次 10000，每笔分了 3 次成交，会逐条成交计算税花税，总共计算 9 次费用
> 选了 Contract 是依照合约进行计费。如果没开启合单功能，一个 Contract 对应的是一个 Order；如果已经开启了合单功能，多个 Order 才会合并成一个 Contract 计算（见 7E 图一），这样 Contract 和按 Order 才有差别

![image.png](/assets/90d92f1d77f5c420d55c1c75a4767aba.png)


_7E 图一_


# 7F 问：特殊收费的设置如何影响到客户？


**答：**全局客户组设置了特殊收费，所有客户都会依据该特殊收费计算佣金。如把客户添加到普通客户组，需要在这套餐添加特殊收费才能覆盖掉全局的设置。


![image.png](/assets/bea06e76bee2184d751a606222a4132e.png)


![image.png](/assets/10724550fc4933ac1e144998c9a963dc.png)


# 7G 问：全局客户组为什么看不到客户数量和组内的客户？


**答：**全局客户组理论上配置到所有客户，所以没有显示到数量及组内客户。在普通客户组能看到数量及组内客户。


![image.png](/assets/d471723ec37809f2830aefd83ac5aa24.png)


![image.png](/assets/cea9161dd12575ed30badf3218956c90.png)


# 7H 问：暗盘平台费和正常交易平台费能否分开计算？


答：在「业务参数设置＞计算管理＞客户组计费配置」相关客户组点击「编辑」（见 7H 图一），然后在平台费收费点击「编辑」。（见 7H 图二）
在“特殊收费”点击「添加」，“订单类型”选择「暗盘」后并输入收费资料。（见 7H 图三）


![image.png](/assets/ceeebe543e6583237d0d9196e7c59ab0.png)


_7H 图一_


![image.png](/assets/1f20dbb7fa81cfbdeefd421f61108190.png)


_7H 图二_


![image.png](/assets/88e8bd5c77316b63a2d7d648b5545e09.png)


_7H 图三_


# 7I 问：收费渠道 Longport，Pro，App，Web，WTT 的分别表示什么？


答：Longport 是公版 App；Pro 是豪华版 Longport Pro；App 是白标 App；Web 是网页版 Web Trade；WTT 是前台 Whale Trade Terminal。


![image.png](/assets/f03745efb88387b88bd0bcc2c8bc9009.png)


# 7J 问：如何添加开户时所选的计费套餐？


答：在「业务参数设置＞计费管理＞机构计费」对应的 "默认用户组" 点击「编辑」（见 7J 图一），在 "可选客户组" 添加「客户组计费配置」已建立的计费套餐，之后在计费套餐可选择（见 7J 图二）。


![image.png](/assets/62ad9385998bf9ec2efb5f6f1186d3d0.png)


_7J 图一_


![image.png](/assets/f4d134b0102f7a3a0c72a0816e784374.png)


_7J 图二_


# 7K 问：App「我的费率」佣金计费的取值逻辑是什么？


答：取值逻辑先后次序如下：

1. 「客户计费」佣金特殊收费中的「条件」（「条件」在「收费渠道」有设置了「APP」才会显示）
2. 「客户组计费」佣金特殊收费中的「条件」
3. 「全局客户组计费」佣金特殊收费中的「条件」
4. 「客户计费」佣金特殊收费
5. 「客户组计费」佣金特殊收费
6. 「全局客户组计费」佣金特殊收费

此外，可以在「了解示例」中为客户提供更多「费率」资讯，而后台「帮助中心」可以修改「了解示例」中的内容。


![image.png](/assets/22efe4162de448ac20cec0954f92f679.png)


![image.png](/assets/cfeb1cdcd0e6b735d7ee2278d7f45e8f.png)


![image.png](/assets/4cd67093f2e3f8d5d7345c35ab594c3a.png)


 

