---
title: HKIDR 操作文档
slug: AnubwQdN9i1KGHkt9tmccZ9hnXf
sidebar_position: 3
---


# HKIDR 操作文档

# <b>1.设置HKIDR参与者</b>

```text
配置HKIDR的参与人信息
```

<img src="QTqVbSc39ojS23xL0UQjrweWpif" src-width="2900" src-height="1062" align="center"/>

```text
路径：在「客户管理系统＞账户管理＞BCAN码管理＞参与者管理」
```

<img src="VH6hb48mGoQ86vxqb9LjpbA6prd" src-width="2544" src-height="1402" align="center"/>

# <b>2.设置BCAN区间</b>

<img src="LZz8ba2uromXBExVly6jiwK5phg" src-width="2536" src-height="892" align="center"/>

路径：客户管理系统-＞账户管理-＞BCAN码管理-＞BCAN区间

<img src="Hal6biv1SoMweexF2UqjXMqIpYb" src-width="2896" src-height="1000" align="center"/>

# <b>3.分配BCAN</b>

```text
①客户账户开通时，将自动给客户分配BCAN，并在客户同意HKIDR授权协议下启用申报流程；


②存量客户：在配置完成BCAN区间后，请尽快联络长桥，我们将自动给存量客户按区间分配BCAN；
```

# <b>4.申报BCAN到HKEX</b>

申报逻辑：上报的数据是 已开通账户、有BCAN码且同意授权协议 的全量客户，申报给交易所后，获取交易所返回的文件内容，将BCAN生效的状态同步更新；

EP模式支持ECP SFTP和ECP Web 两种方式；

Non-EP模式支持ECP Web 方式；

## <b>EP模式申报</b>

### <b>①方式1：SFTP系统申报</b>

支持通过ECP SFTP方式自动申报

前置条件：提供SFTP的SDNet/2线路、User Id和private key

申报方式：

交易日07:00 am- 03:00 pm时间段内，手动点击‘主动申报’按钮，系统自动生成BCAN-CID文件，且通过SFTP的方式提交给交易所；

<img src="WnhCbytKxogno2xFPqYjQoHGpNe" src-width="3050" src-height="1456" align="center"/>

交易所在十分钟内会返回应答文件，在下午6点后，会返回验证文件和全景文件，系统自动解析后，客户的BCAN状态自动更新；

<img src="CC5Qbrnllo3MXUxs7OtjwPt7pfl" src-width="2540" src-height="1420" align="center"/>

### <b>②方式2：ECP Web手动申报</b>

通过Whale后台下载申报文件，去交易所官网上传申报文件，将交易所返回的全景文件导入后台；

```text
前置条件：向交易所申请ECP的User ID和Password
```

操作：

- 点击右侧‘下载申报文件’按钮，导出并保存申报文件；

<img src="ZgbdblAuAocEFLxtOhGjLkGQpHe" src-width="2520" src-height="1200" align="center"/>

- 在登录交易所网站，登录ECP平台上传申报文件到SFC

网址：[https://ecp2.e2etest.hkex.com.hk/](https://ecp2.e2etest.hkex.com.hk/)

<img src="Y0Sib5EC8oHKvAxe8dKjb82sp76" src-width="2898" src-height="1656" align="center"/>

<img src="CYqkbUo55oakolx6IvijujIqpVd" src-width="2896" src-height="1674" align="center"/>

<img src="By7YbEDiVoZWW7xrqzQjaKpDpec" src-width="2940" src-height="1612" align="center"/>

<img src="BrQEbyo6Poo1idx45IajvgQjpWe" src-width="2952" src-height="1626" align="center"/>

<img src="Rqssbiz6romZtBx8Uz4jPZu6png" src-width="2670" src-height="1354" align="center"/>

- 将交易所返回的全景文件，导入后台页面；

<img src="STpsbkhPHopIrgxKNidjrAhMp5b" src-width="2528" src-height="1114" align="center"/>

- 客户的BCAN生效状态将同步更新；

<img src="Dl8sb8orNoVFwRxFwlyjpahrpmc" src-width="2540" src-height="1420" align="center"/>

## <b>Non-EP模式申报</b>

通过Whale后台下载申报文件，去交易所官网上传申报文件，将交易所返回的全景文件导入后台；

前置条件：向交易所申请ECP的User ID和Password

操作：

- 点击右侧‘下载申报文件’按钮，导出并保存申报文件；

<img src="G87gbSrrsozjqcxBgWOjuIgkppb" src-width="2520" src-height="1200" align="center"/>

- 在登录交易所网站，登录ECP平台上传申报文件到SFC

网址：[https://ecp2.e2etest.hkex.com.hk/](https://ecp2.e2etest.hkex.com.hk/)

<img src="VostbYwSCoiHbsx4jYPjnPcyp1d" src-width="2948" src-height="1704" align="center"/>

<img src="JrpWbOkXzobSRHx3oMsjcKvvpIe" src-width="2946" src-height="1642" align="center"/>

<img src="YLHxbqqRdoatCRxzUBbjkl0xp4g" src-width="2940" src-height="1612" align="center"/>

<img src="ReS7bhKKCo2YY2xMlB3javsOpwb" src-width="2952" src-height="1626" align="center"/>

<img src="TIuYbqob5oUR7dxs0NfjGqC5pvg" src-width="2670" src-height="1354" align="center"/>

- 将交易所返回的全景文件，导入后台页面；

<img src="GDITbzHKFoUFINxX30sjzmmup6b" src-width="2528" src-height="1114" align="center"/>

- 客户的BCAN生效状态将同步更新；

<img src="VLxKb1IhYobIFnxurO9je0GTpLh" src-width="2540" src-height="1420" align="center"/>

# <b>5.其他报告文件</b>

**格式要求：所有包含要采用CSV格式

## <b>①合并交易指令报告(Aggregated Transaction Report)</b>

```text
合并交易指令或合并场外交易的相关受规管中介人，在T+3日内，在已执行的合并交易指令下的各项相关交易的资料需填入表格模板中，通过ECP Web提交给交易所。





表格模板：HBCNATBN_BPX066_20220704.csv
```

## <b>②更改客户券商编码报告(Change BCAN Report)</b>

```text
修改已生效的券商客户编码，需要将客户的信息填入表格模板中，通过ECP Web提交给交易所。





表格模板：HBCNBCBN_BPX066_20220704.csv
```

## <b>③券商客户编码错误报告</b>

```text
已部分/全部提交的交易指令发现不正确，在交易日6:00 PM前，将需要变更的信息，通过ECP Web提交给交易所。





表格模板：HBCNERBN_21950_20220704.csv
```

## <b>④场外交易(买方)券商客户编码报告</b>

```text
若买方的交易所参与者未能于收市前输入券商客户编码，买方交易所参与者需通过ECP Web提交报告给交易所。





表格模板：HBCNOTBN_21950_20220704.csv
```

# <b>附录</b>

## <b>时间表</b>

