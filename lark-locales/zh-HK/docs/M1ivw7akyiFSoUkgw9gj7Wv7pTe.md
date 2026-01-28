---
title: HKIDR 操作文檔
slug: AnubwQdN9i1KGHkt9tmccZ9hnXf
sidebar_position: 3
---


# HKIDR 操作文檔

# <b>1.設置HKIDR參與者</b>

```text
配置HKIDR的參與人信息
```

<img src="QTqVbSc39ojS23xL0UQjrweWpif" src-width="2900" src-height="1062" align="center"/>

```text
路徑：在「客戶管理系統＞賬戶管理＞BCAN碼管理＞參與者管理」
```

<img src="VH6hb48mGoQ86vxqb9LjpbA6prd" src-width="2544" src-height="1402" align="center"/>

# <b>2.設置BCAN區間</b>

<img src="LZz8ba2uromXBExVly6jiwK5phg" src-width="2536" src-height="892" align="center"/>

路徑：客戶管理系統-＞賬戶管理-＞BCAN碼管理-＞BCAN區間

<img src="Hal6biv1SoMweexF2UqjXMqIpYb" src-width="2896" src-height="1000" align="center"/>

# <b>3.分配BCAN</b>

```text
①客戶賬戶開通時，將自動給客戶分配BCAN，並在客戶同意HKIDR授權協議下啓用申報流程；


②存量客戶：在配置完成BCAN區間後，請儘快聯絡長橋，我們將自動給存量客戶按區間分配BCAN；
```

# <b>4.申報BCAN到HKEX</b>

申報邏輯：上報的數據是 已開通賬戶、有BCAN碼且同意授權協議 的全量客戶，申報給交易所後，獲取交易所返回的文件內容，將BCAN生效的狀態同步更新；

EP模式支持ECP SFTP和ECP Web 兩種方式；

Non-EP模式支持ECP Web 方式；

## <b>EP模式申報</b>

### <b>①方式1：SFTP系統申報</b>

支持通過ECP SFTP方式自動申報

前置條件：提供SFTP的SDNet/2線路、User Id和private key

申報方式：

交易日07:00 am- 03:00 pm時間段內，手動點擊‘主動申報’按鈕，系統自動生成BCAN-CID文件，且通過SFTP的方式提交給交易所；

<img src="WnhCbytKxogno2xFPqYjQoHGpNe" src-width="3050" src-height="1456" align="center"/>

交易所在十分鐘內會返回應答文件，在下午6點後，會返回驗證文件和全景文件，系統自動解析後，客戶的BCAN狀態自動更新；

<img src="CC5Qbrnllo3MXUxs7OtjwPt7pfl" src-width="2540" src-height="1420" align="center"/>

### <b>②方式2：ECP Web手動申報</b>

通過Whale後臺下載申報文件，去交易所官網上傳申報文件，將交易所返回的全景文件導入後臺；

```text
前置條件：向交易所申請ECP的User ID和Password
```

操作：

- 點擊右側‘下載申報文件’按鈕，導出並保存申報文件；

<img src="ZgbdblAuAocEFLxtOhGjLkGQpHe" src-width="2520" src-height="1200" align="center"/>

- 在登錄交易所網站，登錄ECP平臺上傳申報文件到SFC

網址：[https://ecp2.e2etest.hkex.com.hk/](https://ecp2.e2etest.hkex.com.hk/)

<img src="Y0Sib5EC8oHKvAxe8dKjb82sp76" src-width="2898" src-height="1656" align="center"/>

<img src="CYqkbUo55oakolx6IvijujIqpVd" src-width="2896" src-height="1674" align="center"/>

<img src="By7YbEDiVoZWW7xrqzQjaKpDpec" src-width="2940" src-height="1612" align="center"/>

<img src="BrQEbyo6Poo1idx45IajvgQjpWe" src-width="2952" src-height="1626" align="center"/>

<img src="Rqssbiz6romZtBx8Uz4jPZu6png" src-width="2670" src-height="1354" align="center"/>

- 將交易所返回的全景文件，導入後臺頁面；

<img src="STpsbkhPHopIrgxKNidjrAhMp5b" src-width="2528" src-height="1114" align="center"/>

- 客戶的BCAN生效狀態將同步更新；

<img src="Dl8sb8orNoVFwRxFwlyjpahrpmc" src-width="2540" src-height="1420" align="center"/>

## <b>Non-EP模式申報</b>

通過Whale後臺下載申報文件，去交易所官網上傳申報文件，將交易所返回的全景文件導入後臺；

前置條件：向交易所申請ECP的User ID和Password

操作：

- 點擊右側‘下載申報文件’按鈕，導出並保存申報文件；

<img src="G87gbSrrsozjqcxBgWOjuIgkppb" src-width="2520" src-height="1200" align="center"/>

- 在登錄交易所網站，登錄ECP平臺上傳申報文件到SFC

網址：[https://ecp2.e2etest.hkex.com.hk/](https://ecp2.e2etest.hkex.com.hk/)

<img src="VostbYwSCoiHbsx4jYPjnPcyp1d" src-width="2948" src-height="1704" align="center"/>

<img src="JrpWbOkXzobSRHx3oMsjcKvvpIe" src-width="2946" src-height="1642" align="center"/>

<img src="YLHxbqqRdoatCRxzUBbjkl0xp4g" src-width="2940" src-height="1612" align="center"/>

<img src="ReS7bhKKCo2YY2xMlB3javsOpwb" src-width="2952" src-height="1626" align="center"/>

<img src="TIuYbqob5oUR7dxs0NfjGqC5pvg" src-width="2670" src-height="1354" align="center"/>

- 將交易所返回的全景文件，導入後臺頁面；

<img src="GDITbzHKFoUFINxX30sjzmmup6b" src-width="2528" src-height="1114" align="center"/>

- 客戶的BCAN生效狀態將同步更新；

<img src="VLxKb1IhYobIFnxurO9je0GTpLh" src-width="2540" src-height="1420" align="center"/>

# <b>5.其他報告文件</b>

**格式要求：所有包含要採用CSV格式

## <b>①合併交易指令報告(Aggregated Transaction Report)</b>

```text
合併交易指令或合併場外交易的相關受規管中介人，在T+3日內，在已執行的合併交易指令下的各項相關交易的資料需填入表格模板中，通過ECP Web提交給交易所。





表格模板：HBCNATBN_BPX066_20220704.csv
```

## <b>②更改客戶券商編碼報告(Change BCAN Report)</b>

```text
修改已生效的券商客戶編碼，需要將客戶的信息填入表格模板中，通過ECP Web提交給交易所。





表格模板：HBCNBCBN_BPX066_20220704.csv
```

## <b>③券商客戶編碼錯誤報告</b>

```text
已部分/全部提交的交易指令發現不正確，在交易日6:00 PM前，將需要變更的信息，通過ECP Web提交給交易所。





表格模板：HBCNERBN_21950_20220704.csv
```

## <b>④場外交易(買方)券商客戶編碼報告</b>

```text
若買方的交易所參與者未能於收市前輸入券商客戶編碼，買方交易所參與者需通過ECP Web提交報告給交易所。





表格模板：HBCNOTBN_21950_20220704.csv
```

# <b>附錄</b>

## <b>時間表</b>

