---
slug: Zf8xwz6teiNduAkCSPmcEf1mn4b
title: CRS 操作文档
sidebar_position: 2
---


# CRS 操作文档


本使用手册适用于 Longbridge Whale WBO 证券后台管理的管理员和使用成员使用。阅读此手册，你将了解 Whale WBO ‘CSR 文件’模组的作业功能操作


| 文档编辑历史 |                |         |          |
| ------ | -------------- | ------- | -------- |
| **版本** | **日期**         | **编辑人** | **变更内容** |
| V1.0   | 2023 年 9 月 5 日 |         | 第一版产生    |


# CSR 文件操作说明


执行菜单：报表管理>CRS 文件生成

- 注意： 租户需要 增加下列权限 才能操作 相关 CSR 文件

![image.png](/assets/afb2a58791504d7aed6bbc854f25a2f5.png)


![image.png](/assets/9a1db44cb6ea836f7fb881b6a04659c3.png)


整个 CSR 文件操作基本上 下列流程的顺序


需要更新图表到飞书的白板：https://longbridge.larkenterprise.com/wiki/IWiQd25SSoP63JxVS8JcSbXrnQb


## **计算收益**： 


![image.png](/assets/e294a0b1ccce49b2452bc7534607b7a4.png)


此时产生一个的系统任务，当系统任务完成后（这会需要点时间产生全年资料）， 当完成后系统会给予这批 CRS 数据一个 相同的‘**消息编号**'


![image.png](/assets/5c92de27e1b7029c275cffbe62cd98cb.png)


 也可以在任务列表 Tab 页签上 点选 纪录右侧操作区的【详情】，会自动切换 **CRS 数据** Tab 页签，可以查询数据资料或编辑修改


![image.png](/assets/f614ab419d592304ae7a4a2bb8e5f0db.png)


![image.png](/assets/5a9ee0ce1497ee5388743c0719494ea5.png)


可根据需要 删除纪录（不报送） 或修改数据资料


![image.png](/assets/918ef9ec00e57bd44bb3b6cd93a89d2d.png)


## **生成文件**： 


![image.png](/assets/d20289937288188ecc21363dcca90c9c.png)

1. **文件下载**

当生成文件任务完成后，就可以点选下载档案，去外部网站传送了


（系统会称生一个 xml 附档名的文档）


![image.png](/assets/2ee2900ee5a943bca0e51bf5a2010ef2.png)


![image.png](/assets/3eefb8a5bb478ef67ac0be55ef4a9f91.png)


建议： 此文件不要自行编辑，容易误操作造成文档规格不对，无法上传


## **生成文件上传**： 


将上传到外部系统的一个 XML 文件。这文件在外部系统上传以后，在外部系统它会返回一个文件序列号，可以在任务列表 Tab 页签，更新状态把外部系统序列号输入


![image.png](/assets/46ccfbfb87ebf815c6fbca291191a66f.png)


![image.png](/assets/ccf9783d0d7fbed9686a590ea5bb89b7.png)


这等于 将 产生的 CRS 数据 打上这批次的 文件序列号，方便以后对数据查询或更正已报送资料


![image.png](/assets/9339c6eaa67854b79d3d97a756c9e11e.png)


## **更正资料再上传**： 


正常情况下，已报送资料其状态是‘文件已报送'


![image.png](/assets/dcc462d9db016c08f21706947864464b.png)


当发现数据需要变更时，可以点选右侧 【编辑】 来操作修改数据

> 系统会产生一笔新数据，可以根据需要来修改

或 【删除】 已报送数据，

> 系统会将删除那笔资料 变成已锁定状态

此时后面一样操作方式输入： **年度 /消息类型/编号/批次/消息编号**  查询后。 生成文件的功能键就可以操作了


产生文件并上传报送网站，同样 也会取的最新的文件序列号，也一样更新即可

