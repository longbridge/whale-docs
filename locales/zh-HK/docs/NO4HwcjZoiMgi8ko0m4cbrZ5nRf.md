---
title: 系統介紹
slug: NO4HwcjZoiMgi8ko0m4cbrZ5nRf
sidebar_position: 2
---


# 系統介紹

## 一、系統介紹

清算系统主要通过日终任务串联功能。日終任務分成兩個模塊，一個是市場清算，一個是日終管理。市場清算處理交易數據為主，用於各市場的計費、交收流程。日終清算處理涵蓋交易、調帳、公司行動在內的全部數據，進行利息計算，最終輸出報表和結單

<img src="/assets/QuCmw0vBohsEoubCvE3c7D4Gnbg-board.png"/>

## 二、系統設定

### 市場管理配置

#### <b>服務商資料管理</b>

主要用於維護服務商的基礎信息。可新增、編輯，刪除

服務商分類型分爲託管商、代理商。代理商爲交易渠道，託管商持倉的託管方

<img src="/assets/OlHCbC5dmoF8iMxWPMQcf86qnwg.png" src-width="3548" src-height="1806" align="center"/>

#### <b>子倉資料</b>

主要用於維護託管商子倉的基礎信息。可新增、編輯、刪除

新增、編輯時可選擇的服務商必須事先在服務商資料中配置，且服務商類型爲託管商

配置交收、倉位規則時需要用到該配置項

<img src="/assets/Xu5IbVllGo8T9zx64JrciOUhnCf.png" src-width="3548" src-height="1806" align="center"/>

#### <b>結算渠道資料</b>

主要用於維護結算渠道基礎信息，可新增、編輯、刪除。新增、編輯時可選擇的服務商必須事先在服務商資料中配置，且服務商類型爲代理商。配置交收、倉位規則時需要用到該配置項

<img src="/assets/R4yxbJdE8oIHHvxzX6Vcx37Tnsg.png" src-width="3548" src-height="1806" align="center"/>

#### <b>交收倉位規則管理</b>

<b>市場层规则</b>

每個市場可分別配置一條規則

特殊字段說明：
- 隔夜市場：隔夜市場選擇是的，系統處理時賬務日期=交易日期 +1。長橋將美股市場作爲隔夜市場
- 默認託管商、默認子倉編號：在未匹配到業務規則的情況下，倉位處理時取該配置

<img src="/assets/L9TBbxYoWozjRCx8DU2ca5BZnDc.png" src-width="3548" src-height="1806" align="center"/>

<b>業務層規則</b>
可以在業務層配置交收和倉位處理規則，一條規則可同時對交收和倉位服務起作用

依賴交收倉位基礎對象的配置

字段說明：
組織號選 ALL
櫃檯選 ALL
合約
暗盤和非暗盤的可單獨設置規則
買賣方向
可針對買、賣設置規則
期權類別
針對美股期權起作用，可根據期權類別設置規則
枚舉包括權利倉、義務倉
指令類型
針對滿足上述條件的流水，可生成交收指令
指令類型包括 ATI、STI、SI、ISI
交收方式
針對滿足上述條件的流水，可生成交收指令
交收方式包括 FOP、RDP、DVP
默認託管倉
針對滿足規則的持倉變動，在配置的託管商上進行倉位處理
託管商的枚舉爲服務商資料商已新增的服務商，且性質爲託管商
默認子倉
針對滿足規則的持倉變動，在配置的子倉上進行倉位處理
子倉的枚舉爲子倉資料已新增的子倉

<img src="/assets/IZCjbBSiOoCmwaxdG0GcMSIhnwh.png" src-width="3548" src-height="1806" align="center"/>

### 日終任務配置

路径：清算管理&gt;市場清算&gt;日終任務&gt;日終設置

<img src="/assets/GA3hb6ICYoiMPdxyDfzcogw0nJg.png" src-width="3574" src-height="1774" align="center"/>

<b>市場交收配置</b>

點擊新建新增分組

根據劵商交易市場帳務處理順序，配置市場執行的群組配置
常規是按時間區段將接近相同地域市場配置在一起：例 歐美市場/亞洲市場 
租戶劵商也可根據需要，將一些市場清算獨立出來

<img src="/assets/Sf2ObkeXUouFpIxcoELcABi2nsh.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/TP1ybFelmoRXmWx8G0kcMfIVnJo.png" src-width="2440" src-height="934" align="center"/>

新建多個分組後，可以點選右上方區‘執行順序設置'來 調整。所配置的市場群組清算順序（劵商常規順序：先歐美 - 亞洲 - 日終）

<img src="/assets/Bv9DbAUeOoPJC3xZxDwcf2l9nTb.png" src-width="2436" src-height="888" align="center"/>

<b>清算前準備配置</b>
可编辑时间段：操作日终任务之前
检查阶段释义：交易清算（数据同步 - 清算交收之前的检查项目）；日终清结算（数据汇总 - 日切之前的检查项目）
失败后处理释义：仅提醒（不会拦截流程，仅提示）、工单审核（会拦截流程，但是可以手动通过）、强制校验（会拦截流程，必须通过）
支持的操作：开启/关闭，选择失败后的处理方式
编辑时需要审批，工单标识：clearing.before_clearing_ready.setting       
其它：部分检查项目要求强制检查，不允许编辑
<img src="/assets/GoEYbJGiAo9VO6xVWL1cJQsnnpf.png" src-width="3574" src-height="1774" align="center"/>

<b>清算参数配置</b>

可编辑时间段：操作日终任务之前

编辑清算初始化配置时需要审批，工单标识：clearing.update_system_config.exec

注意：需要聯繫技術人員後修改

<img src="/assets/Nai0bUEJVoAqXKxW1QwcN5cCnih.png" src-width="3574" src-height="1774" align="center"/>

### 計費配置

#### 基礎概念

<b>合单规则和收费场景</b>：是系统的基础配置元素，通常在系统初始化时设置。

<b>套餐收费和个性化收费</b>：是根据业务需求灵活配置的功能，可根据实际情况选择是否启用。兩者在配置中需要選擇合單規則和收費場景

<b>套餐收费</b>：通常依据用户群体进行添加，例如经纪人 A 套餐、现金账户套餐。系统具备在客户开户时自动分配相应套餐的功能。

<b>个性化收费</b>：一般根据客户个性化需求单独进行设置。

<img src="/assets/OuYAwSctjhK8svbL9licXJnhnkb-board.png"/>

#### 收費場景

<b>字段說明</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="397"/>
</colgroup>
<tbody>
<tr><td><p><b>字段用途</b></p></td><td><p><b>字段名稱</b></p></td><td><p><b>字段說明</b></p></td></tr>
<tr><td><p><b>匹配條件</b></p></td><td><p>業務類型</p></td><td><p>包括股票交易、融資利息、存款利息、出金交易、期權交易、轉倉手續費等。滿足此條件的流水，按計算規則收費。只能選擇，不能新增。</p></td></tr>
<tr><td></td><td><p>計費依據</p></td><td><p>股票交易選擇市場，融資交易選擇幣種。滿足此條件的，按此規則計費。</p></td></tr>
<tr><td><p><b>計費規則</b></p></td><td><p>計費方式</p></td><td><p>包括股數、交易金額等。</p></td></tr>
<tr><td></td><td><p>計費精度</p></td><td><p>分爲合約、訂單、成交記錄。不同精度影響收費明細和尾差處理的口徑。<br/>按合约计费：<br/>收费明细：1 条合约生成 1 条收费明细。<br/>尾差处理：按合约分别处理尾差。<br/>按订单计费：<br/>收费明细：1 条合约含 3 条订单，生成 3 条收费明细。<br/>尾差处理：按订单分别处理尾差。<br/>按成交记录计费：<br/>收费明细：1 条合约含 3 条订单，每条订单含 3 条成交记录，生成 9 条收费明细。<br/>尾差处理：按成交记录分别处理尾差</p></td></tr>
<tr><td></td><td><p>年費率天數</p></td><td><p>費用金額 = 計算金額 / 年費率天數。例子：融資利息的計費天數填 1，計費分母填 365。</p></td></tr>
<tr><td></td><td><p>結果截取方式</p></td><td><p>與截取位數搭配使用。包括四捨五入、向上截取、向下截取三種方式。</p></td></tr>
<tr><td></td><td><p>截取位數</p></td><td><p>與結果截取方式搭配使用，決定最終費用金額的精度。</p></td></tr>
<tr><td><p><b>輸出結果</b></p></td><td><p>收費類型</p></td><td><p>包括佣金、平臺費、印花稅等。滿足匹配條件的流水，收取該費用。只能選擇，不能新增。</p></td></tr>
</tbody>
</table>

---

<b>說明：</b>

1. <b>匹配條件</b>：用於確定哪些流水需要進入計費流程。
2. <b>計費規則</b>：用於定義如何計算費用金額，包括計費方式、精度、天數和截取方式等。
3. <b>輸出結果</b>：最終的計費結果

---

<img src="/assets/MhgcbTcFaolc12xafw8crlbUn6y.png" src-width="3548" src-height="1806" align="center"/>

#### 客戶收費配置

一个個性化收費只包含一個收費

一个客户只能绑定多個個性化收費
<b>新建個性化收費示例</b>
<img src="/assets/HraNbOt5QoNmADxKuK4cg2pin3e.png" src-width="2900" src-height="682" align="center"/>
<img src="/assets/TWCNbkmnBooOtGxex53cN7zAnmh.png" src-width="2870" src-height="1428" align="center"/>
<img src="/assets/FdM6btGyqosWmxxkRJScrlW4nfS.png" src-width="2870" src-height="1428" align="center"/>
<img src="/assets/BcbibYCv8opQnoxeaVHco6von0g.png" src-width="2870" src-height="1428" align="center"/>
<b>添加客戶示例</b>
<img src="/assets/CU9UbwTP5oBPt2x68IqcEDz9nMh.png" src-width="2944" src-height="998" align="center"/>
<img src="/assets/Vk0Ub1wKaocHo6xWHfdc9R4Bnqd.png" src-width="2944" src-height="998" align="center"/>
<img src="/assets/LVZ6bvVjwo4pw1xORQBcYF9AnIb.png" src-width="2940" src-height="1516" align="center"/>
##### 套餐收费
如果客戶具有功能畫像（比如同一個經紀人，同是現金賬戶，多個費用收費標準一致），可以使用套餐收費功能
一个客户只能绑定一个套餐
一个套餐里可包含多个收费场景

<b>新建套餐示例</b>

<img src="/assets/B4apbdN4VoAn1GxYMyecmnS7nDf.png" src-width="2900" src-height="1428" align="center"/>

<img src="/assets/QQuyboS0BoEsUGx4YKScb4jlnpb.png" src-width="2900" src-height="1428" align="center"/>

<img src="/assets/MlwLb56dToHZAvxGMkpcWczbn9g.png" src-width="2900" src-height="1428" align="center"/>

##### 客戶計費查詢

該功能用於查詢客戶的收費信息

<b>優先級處理</b>

<b>特殊收費</b>(個性化收費&gt;普通套餐&gt;全局套餐)&gt;<b>普通收費</b>(個性化收費&gt;普通套餐&gt;全局套餐)

<img src="/assets/VkFRbzMFboH0bcxUbGkcJfvsnUi.png" src-width="2940" src-height="1438" align="center"/>

<img src="/assets/ZZ0ObpQI5o1ODSxwAwxc9NMCnxb.png" src-width="2852" src-height="1322" align="center"/>

<img src="/assets/DBUvbmYcMovIHRx2Pw3crQq9nff.png" src-width="2852" src-height="1322" align="center"/>

<img src="/assets/JIyJbPxNlooCn2xRKB9cQ4zUneb.png" src-width="2852" src-height="1322" align="center"/>

<img src="/assets/A5EKbkA8Yofc1TxvYwmc1rDBnJf.png" src-width="2852" src-height="1322" align="center"/>

### 其它相關計費項目配配置

#### 香港市場印花稅豁免字段配置

#### <b>可交易債券利率配置</b>

功能權限清單

<table>
<colgroup>
<col width="146"/>
<col width="360"/>
<col width="235"/>
</colgroup>
<tbody>
<tr><td><p>操作</p></td><td><p>工單標識</p></td><td><p>操作日誌</p></td></tr>
<tr><td><p>編輯清算參數配置</p></td><td><p>clearing.update_system_config.exec</p></td><td><p>清算 - 修改系统配置</p></td></tr>
<tr><td><p>刪除債券利率信息</p></td><td><p>clearing.bond.delete</p></td><td><p>清算 - 新增债券信息与利率</p></td></tr>
<tr><td><p>新增債券利率信息</p></td><td><p>clearing.bond.insert</p></td><td><p>清算 - 删除债券信息与利率</p></td></tr>
<tr><td><p>編輯債券利率信息</p></td><td><p>clearing.bond.update</p></td><td><p>清算 - 更新债券信息与利率</p></td></tr>
</tbody>
</table>

<b>總開關</b>

開啟總開關後才會正式啟用可交易債券的計息功能

<img src="/assets/LZZObVt0CoZ1o9xw5fFc7vmFnLl.png" src-width="2852" src-height="1322" align="center"/>

<b>利率配置</b>

配置注意事項

利息公佈後務必及時更新日曆

在派息日期 -4 個交易日內未更新利率的，可能會導致利息計算錯誤

必須一次性將所欲日曆配置上，未來的派息日留空

配置的使用

累計利息=數量*賬面價格*上期派息利率*累計計息天數/一年天數

累計计息天數=交收日 - 派息日

系統針對配置的檢查

-7 個自然日內，系統在清算前準備會兜底性檢查

報錯時如果未到派息日期 -4 個交易日的，可先手動通過

報錯時如果已到派息日期 -4 個交易日的，建議先按上期利率更新且持續跟蹤利息計算情況

新建利率信息案例

<img src="/assets/Q8dybBZJToPdxFxBzhkc7XhMnSc.png" src-width="2910" src-height="1322" align="center"/>

<img src="/assets/E0zeboYvloqUkQx4XgscmlScnrf.png" src-width="2852" src-height="1322" align="center"/>

### 结单配置

#### 結單模版設置

路径：清算管理&gt; 日終管理&gt;結單管理&gt;結單模板 

本作業可以管理結單標準格式的配置，包含 公司訊息/聯絡方式/責任說明（以下為參考）

<img src="/assets/P9Y6bi0PPorbaQx40oNc4wJbnVf.png" src-width="2484" src-height="1468" align="center"/>

<img src="/assets/Di0CbFqXSo06llxnc4zcS7ItnLe.png" src-width="2272" src-height="1438" align="center"/>

在結單模版可進行社交媒體信息配置功能，配置後會在結單展示，若不配置，則不展示該欄位

<img src="/assets/TLIZbgU33oJRh4xWv4FcJKxxnKe.png" src-width="2908" src-height="1546" align="center"/>

結單模板新增結單語言配置功能（支持 5 種語言設置方式）
- 跟隨系統：跟隨客戶 app 設置語言進行展示
- 全局設定（英語）：所有客戶結單均為英文
- 全局設定（簡體中文）：所有客戶結單均為簡體中文
- 全局設定（繁體中文）：所有客戶結單均為繁體中文
- 全局設定（繁體中文&英語）：所有客戶結單均為雙語（繁體中文 + 英文）

<img src="/assets/PRTcbNWcJofdyTxliqBcz0Cjnic.png" src-width="2476" src-height="1420" align="center"/>

#### 結單配置

本作業用來配置管理：客戶結單是否線下發送/是否接受郵件和 APP 通知/未配置的按線下發送為否/提醒全部開啟處理 等配置項

<img src="/assets/M84XbC7xWoCVWBxOoVvcSWgDnue.png" src-width="3336" src-height="1400" align="center"/>

<img src="/assets/HBkcbA9sTosMTcxQlGJcgWZ8nXe.png" src-width="3346" src-height="1414" align="center"/>

在結單配置上增加來源欄位，方便定位結單配置修改來源

也支持批量新增功能，透過事先模版下載後上傳來應用

<img src="/assets/NMXfbWosdoiv8AxrXb0cz0P0n5d.png" src-width="3324" src-height="1412" align="center"/>

新客戶查詢不到的，可新增發送方式

<img src="/assets/BC5DboP39oaRsWxSUMQc3E3Pn6d.png" src-width="3364" src-height="1410" align="center"/>

#### 客戶備註

路径：清算管理&gt; 日終管理&gt;結單管理&gt;客戶備註

提供一個客戶結單備註的管理入口，方便針對某些特定客戶結單增加備註說明

注意：若有需要增加客戶結單備註，要在日終作業完成前，補錄好客戶結單備註後才能發生效用

<img src="/assets/FRowbvuURoZz1pxINv7c7tnZnSf.png" src-width="3116" src-height="1132" align="center"/>

可以點選右上角【新增備註】，根據需要新增 日結單/月結單 結單上對應客戶備註

<img src="/assets/Nkj5bw2DJoOgaExDNhKcPZ3Fnth.png" src-width="3368" src-height="1462" align="center"/>

也提供批量結單模板導入的備註說明

<img src="/assets/GYKPbVqoFo0p8kxVskJcpm0FnQM.png" src-width="3366" src-height="1460" align="center"/>

以下是備註參考模板：

<img src="/assets/GS8ub2lUwoJjqNxCLRxc4tmUnSe.png" src-width="1304" src-height="496"/>

可在列表頁查詢備註內容，進行二次編輯

<img src="/assets/XkDibU6pooVfjMxUf0Wc3Zb9nCg.png" src-width="3358" src-height="1240" align="center"/>

#### DA 結單配置

路径：清算管理&gt; 日終管理&gt;結單管理&gt;DA 結單配置

DA 帳戶開戶後會默認配置為按 3 月/6 月/9 月/12 月這四個月生成月結單，結單模版為 DA 結單特殊模版。同時支持修改默認配置，修改後取最新配置

<img src="/assets/J4wmbwKkjoUALlxVFKTckyWenfg.png" src-width="3328" src-height="1454" align="center"/>

<img src="/assets/YLlMbWxzqojCKjx5hxucHqJznnh.png" src-width="3346" src-height="1456" align="center"/>

## 三、市場清算（交易清算）操作說明

### 對手方文件轉入（Broker Trade）

路径：清算管理&gt;文件處理&gt;文件導入 

點擊導入文件，上傳文件

<img src="/assets/JZDdbnDGeoCZwbxf0HycKixLnec.png" src-width="3578" src-height="1798" align="center"/>

選擇文件並上傳

例子：港股 CCASS 交易文件導入（CTF）。市場：選擇港股，文件類型選擇 CTF Trade File 後，上傳文檔

<img src="/assets/EF9sbBfZfoA4IPxs6OXcUkrIn4g.png" src-width="3578" src-height="1798" align="center"/>

可通過列表區域的狀態字段關注文檔導入和解析狀態。解析成功才算處理完成

<img src="/assets/JQnUbsLgmoo5EmxADRwcD7DZnvg.png" src-width="2910" src-height="1548" align="center"/>

### 清算前準備

該功能的目的是檢查執行日終任務前是否完成了相關配置和当天業務操作。市場清算和日終清算有不同的檢查項目

市場清算完成交易文件導入，確認當前賬務日期準確後，可點擊執行清算前準備

<img src="/assets/U5D2b9haIocbEtxskspcDZrzn5d.png" src-width="2908" src-height="1540" align="center"/>

執行後，5 秒內會返回檢查結果。全部檢查都通過的，可以進行後續操作
檢查報錯的，點擊檢查項目右上角可查看檢查項目的規則和操作指引

<img src="/assets/HyXnbsgDMoWndSx7NEVclBnPnch.png" src-width="2906" src-height="1548" align="center"/>

部分檢查會提供異常詳情

<img src="/assets/U2ZUbrNkbokVQ7xXGRqcSxPunTc.png" src-width="2904" src-height="1540" align="center"/>

結算人員核對後，確認有問題的，在完成相關業務操作後，可點擊“重新執行”

<img src="/assets/JHxfbxdAso2912xuuyjc4ntKn9d.png" src-width="2906" src-height="1558" align="center"/>

結算人員核對後，檢查項目可以允許通過的，可點擊手動審核人工通過（需要複核）

<img src="/assets/HzfPbEJMaoZ0ZhxeoODcpDDunfB.png" src-width="2904" src-height="1558" align="center"/>

複核人員可點擊手動審核（也可直接在工單審核），調出工單審核

<img src="/assets/BTw3bPuDhomgG8xJ38ucrCz3nsd.png" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/OM0lbFaZ4owtSZx0HAscsiMNnkd.png" src-width="2920" src-height="1550" align="center"/>

結算人員核對後，因為業務流程有差別，需要永久關閉檢查項目的，可以聯繫客服處理

<img src="/assets/IbSjb8fK2obBUExKEiTcoLtNnqg.png" src-width="2926" src-height="1556" align="center"/>

當審核通過後，清算前準備就算完成（文字會提示：已手動通過）

<img src="/assets/QgJFbyxOLoffepxwQbQc6qsynjh.png" src-width="2926" src-height="1558" align="center"/>

清算前準備檢查項目

<table header_row="1">
<colgroup>
<col width="100"/>
<col width="147"/>
<col width="360"/>
<col width="169"/>
</colgroup>
<thead>
<tr><th><p>分類</p></th><th><p>檢查項目</p></th><th><p>對應 作業查詢檢查</p></th><th><p>檢查層級</p></th></tr>
</thead>
<tbody>
<tr><td><p>交易</p></td><td><p>交易文件導入</p></td><td><p>清算管理&gt;市場清算&gt;文件導入</p></td><td><p>市場清算</p></td></tr>
<tr><td></td><td><p>市場收市</p></td><td></td><td></td></tr>
<tr><td><p>期權</p></td><td><p>期權到期行權</p></td><td></td><td><p>市場清算</p></td></tr>
<tr><td><p>資產</p></td><td><p>資產調撥審核</p></td><td><p>資產帳戶&gt;資產調撥&gt;帳戶間轉帳</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>調帳審核</p></td><td><p>資產帳戶&gt;資產調帳&gt;手工調帳</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>資產凍結解凍審核</p></td><td><p>資產帳戶&gt;凍結解凍</p></td><td><p>日終清算</p></td></tr>
<tr><td><p>款項證劵</p></td><td><p>入金審核</p></td><td><p>款項管理&gt;入金&gt;入金審核 Tab</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>出金審核</p></td><td><p>款項管理&gt;出金&gt;出金申請（未處理）Tab</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>換匯審核</p></td><td><p>款項管理&gt;換匯&gt;客戶匯兌 Tab</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>證劵取出審核</p></td><td><p>證劵管理&gt;證劵取出</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>證劵存入審核</p></td><td><p>證劵管理&gt;證劵存入</p></td><td><p>日終清算</p></td></tr>
<tr><td><p>公司行動</p></td><td><p>行動登記</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>行動上報</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>行動執行</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>行動通知</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>將退市股票</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr><td><p>新股</p></td><td><p>未公佈中籤操作</p></td><td><p>新股認購&gt;中籤處理&gt;結果同步 Tab</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>未操作扣款</p></td><td><p>新股認購&gt;凍結收費&gt;待扣款 Tab</p></td><td><p>日終清算</p></td></tr>
<tr><td><p>結單</p></td><td><p>結單未發送</p></td><td><p>清算管理&gt;日終管理&gt;結單管理&gt;結單查詢</p></td><td><p>日終清算</p></td></tr>
<tr><td><p>系統數據</p></td><td><p>收盤價確認</p></td><td><p>清算管理&gt;市場清算&gt;收盤價管理</p></td><td><p>日終清算</p></td></tr>
<tr><td></td><td><p>匯率檢查</p></td><td><p>款項管理&gt;匯率管理&gt;參考匯率</p></td><td><p>市場清算、日終清算</p></td></tr>
<tr><td></td><td><p>市場日曆檢查</p></td><td><p>業務參數設置&gt;市場管理&gt;市場日曆 Tab</p></td><td><p>市場清算</p></td></tr>
<tr><td></td><td><p>市場規則配置</p></td><td><p>業務參數設置&gt;市場管理&gt;市場規則 Tab</p></td><td><p>市場清算</p></td></tr>
<tr><td></td><td><p>前台流水檢查</p></td><td><p>算前準備加“前台流水全部納入清算”的檢查項目</p></td><td><p>日終清算</p></td></tr>
</tbody>
</table>

### 市場清算<b>一鍵清算</b>

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵，系統會自動從第一步開始執行，一直到清算交收作業（當沒有錯誤發生時，系統會自動續執行下個作業）

注意：若有需要可點選 '暫停一鍵清算'，但系統會等當時作業執行完畢後，才開始暫停下一動作（功能鍵會變灰）

<img src="/assets/JAr5bv4jNoNv5DxiH47csq1vnhc.png" src-width="2916" src-height="1546" align="center"/>

如果要進行後台補單，或者修正合約的，在清算計費步驟後進行。可在數據同步直接點擊“暫停一鍵清算”，然後逐步執行，避免遺忘錯過暫停時機

<img src="/assets/RxXPb7rJ5oAzvnxZ3cPcmv8tnZm.png" src-width="2922" src-height="1548" align="center"/>

中間若有作業執行錯誤，則一鍵清算將會暫停，並停在相關錯誤的作業程序上，用戶可以參考錯誤訊息提示進行後續修正處理

<img src="/assets/OGl7bVIqloWA4ix176zcB1wbnkd.png" src-width="2908" src-height="1554" align="center"/>

此時可根據業務需要手動點選右側下方相關的作業操作，來檢查或修正紀錄或著 往下一鍵算操作，系統會自動執行下一個作業

注意：在一鍵清算過程中，可以依賴系統的一鍵清算操作（自動執行所有作業），也可以自行 點選作業自行操作

<img src="/assets/PZbibMo0yozKWYx4DX1cNbC4nqg.png" src-width="2922" src-height="1556" align="center"/>

#### 數據同步（Client Trade）

點擊執行後會同步系統數據（交易、日切點前的出入金、交易、開戶等數據）

#### 清算前檢查（Trade Match）

在日終流程中點擊清算前檢查步驟會：自動觸發當日的交易對帳

交易對帳失敗的，可快速跳轉到交易對賬界面（清算管理 - 市場清算 - 清算檢查 - 交易對賬）查詢結果

<img src="/assets/HujDbj6wko4Zrgx3o0CcBGYXntf.png" src-width="2904" src-height="1544" align="center"/>

<b>對帳結果查詢</b>

可在<b>清算檢查 - 交易對賬</b>頁面分別查詢各市場的交易對帳

每次點擊檢查會生成最新的檢查結果，只需要維護最新的檢查結果

可在<b>交易對帳</b>頁面查詢交易對帳的差異明細、對帳總覽訊息；

點擊本端檔案可査詢本端明細；點擊對手端檔案可査詢對手端明細

參考圖示如下：

<img src="/assets/S8MtbgmR2oh4IYxMfEHck5R3nTh.png" src-width="3566" src-height="1732" align="center"/>

<b>特殊場景手動通過</b>

對手端檔導入錯誤：在檔導入介面，重新導入對手端檔，然後重新點擊清算前檢查 

本端訂單錯誤：增、刪、改前台訂單後，重新點擊清算前檢查 

按系統數據處理：在“檢查結果”（清算管理 - 市場清算 - 清算檢查 - 檢查結果）中，將對應的檢查結果改為“通過”，然後重新點擊清算前檢查

<img src="/assets/NoJ5bSM4vomhhax2lhUcieEMnae.png" src-width="2920" src-height="1552" align="center"/>

#### 清算計費

在清算計費步驟會生成前台合約，狀態為待計費

該步驟暫停執行的，可以編輯前台訂單的收費

#### 清算入帳

執行完畢後：
根據計費帳單，股票本金和手續費作業務帳戶處理
合約狀態變由計算完成更為待交收
系統會生成 SDR018 系列報表

注意 1：後台補單必須在該步驟之前操作完成

注意 2：清算撤銷（資產處理選擇不處理的）後，此步驟已經完成的，清算計費和清算入帳為空跑，按原資料處理

#### 清算交收

執行後：
根據合約和調帳等其他流水進行倉位處理
對應日期的合約變更為交收完成
生成倉位數據
生成 ATI 等指令
生成臨時持倉，用於處理公司行動

## 四、日終清算（非交易清算）操作說明

### 清算前準備

在正式執行日終清算前，需要先執行清算前準備
必須在完成所有的市場清算後再操作
檢查是否完成了当天所有的業務操作
操作方式同市場清算，詳見上文

<img src="/assets/JJVQbvFSuoMkdXxs9sRc8cBfnAe.png" src-width="2492" src-height="1412" align="center"/>

<img src="/assets/P69dbSKKvodCRhx3XzDc9UJPnaf.png" src-width="2434" src-height="1418" align="center"/>

### 日終清算一鍵清算

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵

系統會自動從第一步開始執行，一直到結單生成步驟

結單後可通過報表或者結單進行檢查

<img src="/assets/Hi7Lbn8ufoHjJAxccc6cPRV7nTc.png" src-width="2912" src-height="1522" align="center"/>

#### 數據匯總

此操作前需要完成流水日期調整，證券組合費/融資利息的提前歸本、金額調整

此操作加工多個市場的交易數據、調帳數據、出入金、收盤價等文件，可重複點擊

數據匯總後操作流水日期調整、收盤價，需要重新點擊數據匯總

#### 清算中檢查

內部流水對帳、業務操作檢查等（不斷擴充中）

為內部數據檢查，有異常的可聯繫客服

清算中檢查手動通過的操作方式類似交易對帳

<img src="/assets/JH5ybYIFqo3GxzxN5oUc1GDwnic.png" src-width="2846" src-height="1418" align="center"/>

#### 資金清算

執行融資利息計算、證券組合費、融券計算等任務

#### 清算後檢查

內部流水對帳、業務操作檢查等

為內部數據檢查，有異常的可聯繫客服

清算中檢查手動通過的操作方式類似交易對帳

#### 結單生成

<img src="/assets/DMYWbK1ZmoSxlKxpimicH0EGnOe.png" src-width="3364" src-height="1452" align="center"/>

<img src="/assets/GZfib9fmlo6h9vxxn2vc2mYUnj3.png" src-width="3304" src-height="1452" align="center"/>

可以點選右側記錄區對結單【重發】或【下載】

<img src="/assets/Fxjrb0KGVoVVMfx3uvmcC2qon0b.png" src-width="3360" src-height="1460" align="center"/>

也可產生一份臨時結單，在臨時結單視窗輸入對應客戶與結單日期。·臨時結單支持跨月，支持最早時間 1 年、最大時間跨度 3 個月的臨時結單

<img src="/assets/DFzGbHvtioWzQ3x6P3TciJzUn2g.png" src-width="3340" src-height="1368" align="center"/>

<img src="/assets/NVv4bf0bvoH4Fmxwr4dcPg2fnsg.png" src-width="3362" src-height="1368" align="center"/>

#### 日切

執行完日切流程后，當前系統帳務日会切换到下一日。进行了融資利息等的結算操作，触发了經紀人分成計算的任务

## 五、交收指令導出

T+2 日的早上可導出 ATI 交收指令，上傳到 CCASS

路径：清算管理 - 日终任务 - 交收指令导出

支持导出未来日期的文件

支持導出 HK、SZ、SH 多市場

<img src="/assets/I9Wgb8c5doirwUxzZ9Xc9yN8nle.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/AjoWbZWNho9sDdxQlsGcrWDGnKg.png" src-width="3574" src-height="1774" align="center"/>

## 六、持倉對帳

在文件導入界面可導入持倉文件，部分文件可直接系統觸發對帳處理

<img src="/assets/Cu6WbgX6yoeUCBxkmJicjpMHnCb.png" src-width="3350" src-height="1456" align="center"/>

導入後並觸發系統對帳處理後，對帳結果為進行中

對帳任務執行完畢後，對帳結果為不平帳或平帳

<img src="/assets/GudmbSccnorbLZxLn9Wcr1yNn7d.png" src-width="2930" src-height="1554" align="center"/>

點擊重新對帳也可（重新）觸發系統對帳。支持觸發歷史日期對帳

<img src="/assets/XulibqZa0oMH4Hx5B96cB4PAnX3.png" src-width="2914" src-height="1526" align="center"/>

## 七、非交易流水編輯日期

本作業主要是市場清算後，若想要改變原本日終所計算的流水入帳日期，也就是進行資金/持倉的流水日期調整，新機制下通過修改前台帳戶日期實現

路径：清算管理  &gt; 市場清算  &gt; 流水管理

### 單筆流水日期編輯

資金和持倉流水需要在不同頁面 Tab 上操作，找到流水紀錄點擊編輯

<img src="/assets/AxPEbwD9boqPVuxm5PLcD7IIn5g.png" src-width="3578" src-height="1798" align="center"/>

輸入需要處理的日期

<img src="/assets/Q8XFbOGk4oWQHfxo93wcHhtnn1f.png" src-width="3368" src-height="1308" align="center"/>

觀察編輯號的帳務日期，看是否生效

<img src="/assets/JoUJbhbUuojD0xxC4MqcjTy9ncc.png" src-width="3368" src-height="1308" align="center"/>

在日終任務中重新點擊數據匯總

### 批量流水日期編輯

先選中流水紀錄，然後點擊批量編輯帳務日期

<img src="/assets/RFxabZ7o1oVheAxsmOkc2Nman0e.png" src-width="3344" src-height="1456" align="center"/>

在日終任務中重新點擊數據匯總

### 通過業務碼批量編輯日期

注意：批量調整日期的，需要事先確認該業務碼是否支持編輯，邊界後需要在頁面觀察最終結果

<img src="/assets/Fsosb77I6onLl1xp9NmcJ44CnBe.png" src-width="3356" src-height="1344" align="center"/>

### 更新數據

流水同步為準實時。提交後，可刷新當前賬務日期的全部數據。

<img src="/assets/Ba0bbLaHpoKMBcx6Ms5cc1T9nVb.png" src-width="3578" src-height="1798" align="center"/>

## 八、後台客戶<b>合約補單和券商快捷補單</b>

提供新增客戶補單與劵商快捷補單的合約記錄功能，這個補單就是業務上所謂的 Client trade 與 Broker trade 補單

在清算计費步骤前補錄客戶合約

上手合約（代理商合約）單是建立在合約基礎上進行相關補單操作

上手合約（代理商合約）需要在清算前檢查步驟前操作

### 後台客戶合約補單

點擊新建客戶補單

<img src="/assets/LZKObyXjiokJkMxLdOccYsZMnze.png" src-width="2900" src-height="1546" align="center"/>

先補充基礎信息

系統已支持歷史交易日補單（最多前 5 個交易日），補單後交易日期為歷史日期，帳務日期為當日

<img src="/assets/ViwZbcGhUo4uQZxHw2Ecq8genTE.png" src-width="2256" src-height="1274" align="center"/>

提交後數據有錯誤，可進一步編輯後台合約的基礎信息

<img src="/assets/FeNob3t1joxVFDxSR6CcT3vqnoh.png" src-width="2906" src-height="1550" align="center"/>

结算幣種和交易幣種不一致的可進一步编辑基本信息。詳見结算幣種编辑功能

<img src="/assets/F7WsbmKQToNB5lxvFcNcpaASnye.png" src-width="2904" src-height="1544" align="center"/>

若商品是 OTC 產品或者交易通道未進行系統對接的，則結算渠道要對應選擇 OTC 結算渠道

<img src="/assets/TIqQbcK3xooNrox7zPkczvDtnpg.png" src-width="2910" src-height="1554" align="center"/>

<img src="/assets/YnDQbxCbFoLi2jx9CdqcpDTanXe.png" src-width="2896" src-height="1552" align="center"/>

后台訂单號、后台成交流水號可直接複製合约號，有多筆成交的后台成交流水號不能相同。系统將根據交易金额和交易數量計算價格，最多保留 4 位小數

<img src="/assets/WnrkbW1jgolOwTxplptcShvvn5d.png" src-width="2914" src-height="1552" align="center"/>

點擊試算可以自動計算費用

試算後可進一步編輯費用，詳見費用查詢和編輯

注意：只要操作過試算、添加、編輯的，即使刪除了全部費用，在清算計費步驟中不會再計算費用；如果在費用信息頁面未進行過任何操作的，在清算計費步驟會自動基於配置的規則計算費用

<img src="/assets/MemKbQGqwoRpHixBj7rcIZzRnbh.png" src-width="2900" src-height="1540" align="center"/>

OTC 補單系統會按大賬號自動計算託管商、子倉

託管商、子倉可進一步編輯，詳見倉位信息查詢和編輯

<img src="/assets/XnMzb87Uxof2FWxUlRwc6Wkfn1b.png" src-width="2900" src-height="1550" align="center"/>

### <b>券商快捷補單</b>

在完成所有客戶合約補單後，可以透過右上【劵商快捷補單】操作劵商補單

注意：券商快捷補单僅能查詢结算渠道为 OTC 的數據，生成的數據用于清算前檢查步骤的交易對帳

<img src="/assets/B7M0b7tVZowcdXxB4LicJnTGnBh.png" src-width="2898" src-height="1520" align="center"/>

<b>機構合约（代理商合约）提前試算</b>

選擇所有篩選條件，點擊試算機構費用並刷新，系統會自動計算代理商費用（詳見後文機構合約操作說明）

<img src="/assets/THwTbC48QombuwxRUmbcNnnmn2b.png" src-width="2914" src-height="1098" align="center"/>

<b>更新對手方文件</b>

初步核對數據，有問題的修改客戶合約後，重新進入頁面並刷新

操作人員也可以先點擊編輯，臨時調整數據。注意：此編輯不能保存在數據庫中，僅配合“更新對手文件”按鈕使用

<img src="/assets/Y2Npbfzq3oQOffxipQ8c6MCKnfc.png" src-width="2926" src-height="1554" align="center"/>

核對無誤后，200 條以內數據，可點擊更新對手文件，該文件可用於清算前檢查的交易對賬

<img src="/assets/W8tPbjPowo4PcYxevCVcsUJFnDf.png" src-width="2922" src-height="848" align="center"/>

200 條以上的數據，可下載模板文件，編輯後在清算前檢查步驟前導入文件

<img src="/assets/HIv7bHykzoan32xlzd8cTXn2nCh.png" src-width="2920" src-height="838" align="center"/>

<img src="/assets/D62fbJXLnoepe5xzdwTc2AxhnKg.png" src-width="2904" src-height="1542" align="center"/>

## 九、<b>查詢和編輯前台交易合約</b>

在操作清算計費步驟後，系統會基於前台交易訂單、計費管理配置生成客戶合約

點擊詳情可查看客戶合約的詳情

前台合約只支持編輯費用信息、IBOND 累計利息、結算幣種、倉位信息

前台合約的其它字段如果有問題，需要先修改前台合約數據，再依次執行清算前檢查和清算計費步驟

<img src="/assets/QdaGbj2DzoDWg4xibAscsfOVn6A.png" src-width="2456" src-height="1242" align="center"/>

<img src="/assets/R06IbrSEborsA6xi12gcsOWGnGd.png" src-width="2484" src-height="1530" align="center"/>

進入詳情頁直接展示含交易日期、交收日期、特殊收費條件在內的基本信息
數據來源是“交易”的爲前台合約

<img src="/assets/AkfOblq8XodksmxzDrfcyrqGnJc.png" src-width="2486" src-height="1544" align="center"/>

### 結算幣種編輯

在基礎信息點擊編輯

<img src="/assets/Yz86bWV1io3TQJxBT3NcYI45nwh.png" src-width="2486" src-height="1502" align="center"/>

同時修改結算幣種和匯率並提交

系統會根據匯率和結算幣種計算累計利息（結算幣種）、交易金額（結算幣種）、費用（結算幣種）

系統會按結算幣種進行扣費和交收

<img src="/assets/OHkQbgZEuoTUBTxOIkwcs1qxnef.png" src-width="2512" src-height="1558" align="center"/>

### 成交紀錄查詢

點擊成交記錄可展示成交記錄

<img src="/assets/VbLEbqRbZohpZZxzS5xcbRX9nSc.png" src-width="2480" src-height="1542" align="center"/>

### IBOND 累計利息編輯

在成交記錄中，可以點擊編輯，修改累計利息

<img src="/assets/F6mGbL86ZoVwK6xzQfPc2DJWn1b.png" src-width="2500" src-height="1556" align="center"/>

### 费用查詢和編輯

點擊費用信息可展示收費明細

<img src="/assets/LRaob16pfoTPYTxzRDLcyxiRnzc.png" src-width="2488" src-height="1526" align="center"/>

點擊試算會重算全部費用

<img src="/assets/FVhrbEnVPoGTdZxaNl1ck0iInFd.png" src-width="2480" src-height="1536" align="center"/>

點擊添加可以增加費用，增加收費類型不能和已有的重複

<img src="/assets/Lwh8b1azCoAZwlxEwfdc4Abvnwc.png" src-width="2894" src-height="1548" align="center"/>

點擊刪除可以刪除費用

<img src="/assets/CQITbRRXrofPWBx4KDFcj6OxnPg.png" src-width="2892" src-height="1538" align="center"/>

點擊編輯可以修改費用

<img src="/assets/U6FwbiEz7ocZUBxsYbzcJhgZn7b.png" src-width="2916" src-height="1538" align="center"/>

### 倉位信息查詢和編輯

點擊倉位信息可查詢倉位數據

<img src="/assets/VndtbxNYdokC0HxbvVHccTW6nBV.png" src-width="2900" src-height="1552" align="center"/>

點擊編輯可修改託管商和子倉

<img src="/assets/OE8ybBYSmoULvZxCd0kcTWLSnHl.png" src-width="2914" src-height="1544" align="center"/>

## 十、提前交收

若在 T+2（N）時有提早交收的入帳操作，方便客戶可以提早操作資金相關處理

路径：清算管理&gt; 市場清算&gt;交收系統&gt;交收批次 Tab 頁籤

點選【提前交收】，輸入欲提早交收的市場（可多選）

<img src="/assets/Oe7Yb06CxoaAOLx8VsycA3wNnSg.png" src-width="3364" src-height="1450" align="center"/>

操作後可觀察交收批次是否處理完畢

<img src="/assets/WMvIbJmkyoc8UaxskGWcVbAOnth.png" src-width="2516" src-height="740" align="center"/>

## 十一、倉位調整

路径：清算管理&gt; 日終管理&gt;倉位管理&gt;倉位查詢

### 子倉位置调整

查詢出對應的客戶記錄後，在右側記錄區點擊【<b>編輯倉位</b>】

<img src="/assets/Y0vxbtG9BoIZWLxGcmacQZennUc.png" src-width="2924" src-height="1546" align="center"/>

此處根據實際數據來調整子倉位置（子倉位置之後必須和持倉保持一致）

<img src="/assets/PLG6bo1KkoMT3NxRGutcSpxVngb.png" src-width="2914" src-height="1538" align="center"/>

調整後會在倉位流水頁面（Tab 頁籤）生成一條調整記錄

<img src="/assets/F7ENbsM3XoGzdOxlqvjcMlOKnBd.png" src-width="2892" src-height="1022" align="center"/>

### 内部轉倉

查詢出對應的客戶記錄後，在右側記錄區點擊【<b>內部轉倉</b>】

<img src="/assets/HqeKb6YEuo4EBQxzpGNcOp6RnId.png" src-width="2920" src-height="1548" align="center"/>

調整後會在倉位流水頁面生成兩條調整記錄

<img src="/assets/AJbFbAtMOobGysxC6ZbcPmQgnGg.png" src-width="2922" src-height="1236" align="center"/>

### 批量調整

可以根據事先下載模板，進行批量調倉

<img src="/assets/EI53bs7gWoH7Egxn2Nfc3q1Kn5c.png" src-width="2052" src-height="640" align="center"/>

<img src="/assets/S9e0bjFIRodLIBxwDujcB9y5nng.png" src-width="2926" src-height="1556" align="center"/>

## 十二、融資利息調整

### 融資利息查詢

可在融資利息賬單頁面查詢每個客戶的融資利息收費詳情
當期賬單=抵扣後金額 + 已調整利息
抵扣後金額=抵扣前金額 + 抵扣金額

<img src="/assets/A9PDbM0OyokHjCxrRmLc8TJinqe.png" src-width="2910" src-height="1544" align="center"/>

點擊抵扣後金額可查詢每日的融資利息明細

<img src="/assets/KfSGb0IFKoQBNnxp3F5cSsVAnJX.png" src-width="2910" src-height="1554" align="center"/>

<img src="/assets/MDT5bXQoDoi5BUxSIGZc7Efrnwb.png" src-width="2898" src-height="1522" align="center"/>

### 融資利息調整

點擊調整可調整融資利息

<img src="/assets/GuIIb92Lqo5b9wxfnwocyyEtnRW.png" src-width="2910" src-height="1528" align="center"/>

按本金調整：系統將根據輸入的本金自動計算需要調整的利息

<img src="/assets/OlT2bXPiRorp8xxZp4HcktCKnRf.png" src-width="2914" src-height="1548" align="center"/>

按結果調整：系統將根據輸入的該日利息總額，自動計算需要調整的利息

<img src="/assets/QYNFbQugJoZLuPxT8K8c6jEhnZc.png" src-width="2928" src-height="1558" align="center"/>

按發生額調整：系統將根據輸入額，調整利息。

<img src="/assets/Nnl3b5ypgooGaVxHYZ3cTsTmnHV.png" src-width="2914" src-height="1548" align="center"/>

調整的流水可在<b>差錯流水</b>頁面查詢

<img src="/assets/M9a3bTQiZoUpcJxBqSwcNWPLnSd.png" src-width="2482" src-height="1406" align="center"/>

特殊情況，未生成融資利息帳單的，可先新增帳單，再調整

<img src="/assets/XsVxbnCE6oiYFNxD65tcxrT5noc.png" src-width="2912" src-height="1550" align="center"/>

### 批量調整

可按照發生額調整進行批量處理

<img src="/assets/BRn7b5Qc6o4kOzxNTLucPioHnBb.png" src-width="3578" src-height="1798" align="center"/>

### 提前結算

注意：日切期間（第次擊數據匯總後 - 日終流暢點完日切）不能操作提前結算

篩選客戶，點擊提前結算

<img src="/assets/OE5BbyWPfoeiOGxzmVHcICF2nIf.png" src-width="2900" src-height="1546" align="center"/>

## 十三、收盤價临时编辑

有持倉的股票會展示在收盤價管理頁面

路径：清算管理  &gt;  市場清算 &gt;  收盤價管理

前置条件：已經完成日終任務 - 清算交收/數據匯總 這個流程節點

<img src="/assets/BvZMbvkZ8o4fOxxDQSCchpCfn1c.png" src-width="3362" src-height="1342" align="center"/>

需要臨時修改清算收盤價的可點擊編輯

<img src="/assets/LvrGbhmaCowQbnx89JOcTYFbnwg.png" src-width="3460" src-height="1555" align="center"/>

修改收盤價並提交

提交後，需要重新再執行一次數據匯總

如果是清算前準備報錯的，可先執行清算交收，然後重新執行清算前準備

## 十四、清算撤銷

選擇需要撤銷的日期，點擊清算撤銷，根據實際需要，選擇撤銷項目，並提交

注意 1：該任務為異步操作，可能須等一點時間

注意 2：僅能 操作 T 日與 T-1 日的清算撤銷操作

注意 3：操作連續撤銷的，必須按順序進行撤銷

點擊新建清算撤銷

<img src="/assets/Z36KbHV65opdpdxma5gcUQdSnib.png" src-width="3578" src-height="1798" align="center"/>

根據撤銷場景選擇實際項目

<img src="/assets/Ws3xbHIZLoPGINxfrZLcUtU1nVf.png" src-width="3578" src-height="1798" align="center"/>

提交後，可在列表頁關注撤銷

<img src="/assets/LLwebJiYIoL3SLx7wsdcOdGPnIh.png" src-width="3578" src-height="1798" align="center"/>

<table>
<colgroup>
<col width="183"/>
<col width="383"/>
<col width="330"/>
</colgroup>
<tbody>
<tr><td><p>場景</p></td><td><p>清算撤銷表單</p></td><td><p>後續操作</p></td></tr>
<tr><td><p>日切點後調賬，下一日的流水到當日<br/>日切點後調賬，當日的流水調整到下日<br/>資金清算後，調整收盤價</p></td><td><img src="/assets/WdXbbx8DIoxkh8xrRn8cnQd8nMf.png" src-width="3578" src-height="1798" align="center"/></td><td><p>清算撤銷 - 流水管理界面編輯日期 - 重新執行日終<br/>注意：找不到流水的可點擊更新數據</p></td></tr>
<tr><td><p>月底融資利息結算異常<br/>例子：某客戶的融資利息需要調整後再結算</p></td><td><img src="/assets/P392bR0z8oKdoBxiVwsckkzinZg.png" src-width="3578" src-height="1798" align="center"/></td><td><p>清算撤銷 - 融資利息管理編輯利息 - 重新執行日終</p></td></tr>
<tr><td><p>颱風天已經進行提前交收，需要撤銷<br/>量大的租戶建議謹慎操作提前交收</p></td><td><img src="/assets/PNBeb43c5or1aExSrUKcJYttn6J.png" src-width="3578" src-height="1798" align="center"/></td><td><p>清算撤銷 - 颱風天處理 - 執行日終</p></td></tr>
<tr><td><p>日切前發現計費有問題需要調整</p></td><td><img src="/assets/Gnl7bnAxco1tuyxYKNAcoHAvnuh.png" src-width="3578" src-height="1798" align="center"/></td><td><p>清算撤銷 - 執行日終 - 暫停 - 清算計費 - 編輯費用 - 繼續日終</p></td></tr>
</tbody>
</table>

## 十五、颱風天處理

颱風天 8 號風球處理

路径：清算管理 &gt; 市場管理 - 颱風天處理

### 颱風天全日市

場景：9 月 2 日為颱風天，港股交收整體延後
選擇需要處理的賬務日期（如 9 月 2 日），需要處理的市場（HK）
操作時可操作錢貨同時延後，或者僅錢延後
提交後：所有待交收的貨（錢）都會延後一個帳務日期進行處理，點擊完「確定」後更新版面

<img src="/assets/BH18biKOjorWRBxeFGdcLcYZnoI.png" src-width="3578" src-height="1798" align="center"/>

在日切點前需要操作日終的，日終任務點擊提前日切。最終支持在下午 2 點半後操作。推薦在下一日進行操作

注意：提前日切按鈕需要配置工單審核來操作

<img src="/assets/MTCEbPEYDooAdCx39FRcxjbfnbg.png" src-width="3332" src-height="1192" align="center"/>

<img src="/assets/CpoobZLiioXDRTxJv8qcx223nnb.png" src-width="3368" src-height="1172" align="center"/>

### 颱風天半日市

