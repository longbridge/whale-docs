---
title: 系統介紹
slug: NO4HwcjZoiMgi8ko0m4cbrZ5nRf
sidebar_position: 2
---


# 系統介紹

# 一、系統介紹

```text
清算系统主要通过日终任务串联功能。日終任務分成兩個模塊，一個是市場清算，一個是日終管理。市場清算處理交易數據為主，用於各市場的計費、交收流程。日終清算處理涵蓋交易、調帳、公司行動在內的全部數據，進行利息計算，最終輸出報表和結單
```

<img src="XB2CbiED9oQQuGxDrnYjuZCkpkc" src-width="4452" src-height="1865" align="center"/>

# 二、系統設定

## 市場管理配置

### <b>服務商資料管理</b>

主要用於維護服務商的基礎信息。可新增、編輯，刪除

服務商分類型分爲託管商、代理商。代理商爲交易渠道，託管商持倉的託管方

<img src="QJ3pbur9YoVD2oxKCGxjE5Hhpdg" src-width="3548" src-height="1806" align="center"/>

### <b>子倉資料</b>

主要用於維護託管商子倉的基礎信息。可新增、編輯、刪除

新增、編輯時可選擇的服務商必須事先在服務商資料中配置，且服務商類型爲託管商

配置交收、倉位規則時需要用到該配置項

<img src="Q5W5bCk4NoOMxrxfJoljcbIYpdf" src-width="3548" src-height="1806" align="center"/>

### <b>結算渠道資料</b>

主要用於維護結算渠道基礎信息，可新增、編輯、刪除。新增、編輯時可選擇的服務商必須事先在服務商資料中配置，且服務商類型爲代理商。配置交收、倉位規則時需要用到該配置項

<img src="U4zsbtmMaozRyNxsv6cjLS52p0b" src-width="3548" src-height="1806" align="center"/>

### <b>交收倉位規則管理</b>

<b>市場层规则</b>

每個市場可分別配置一條規則

特殊字段說明：

- 隔夜市場：隔夜市場選擇是的，系統處理時賬務日期=交易日期+1。長橋將美股市場作爲隔夜市場
- 默認託管商、默認子倉編號：在未匹配到業務規則的情況下，倉位處理時取該配置

<img src="WVbWbq0vmoWa60xp0sKjugznpJD" src-width="3548" src-height="1806" align="center"/>

<b>業務層規則</b>

可以在業務層配置交收和倉位處理規則，一條規則可同時對交收和倉位服務起作用

依賴交收倉位基礎對象的配置

```text
字段說明：


組織號選ALL


櫃檯選ALL


合約


    暗盤和非暗盤的可單獨設置規則


買賣方向


    可針對買、賣設置規則


期權類別


    針對美股期權起作用，可根據期權類別設置規則


    枚舉包括權利倉、義務倉


指令類型


    針對滿足上述條件的流水，可生成交收指令


    指令類型包括ATI、STI、SI、ISI


交收方式


    針對滿足上述條件的流水，可生成交收指令


    交收方式包括FOP、RDP、DVP


默認託管倉


    針對滿足規則的持倉變動，在配置的託管商上進行倉位處理


    託管商的枚舉爲服務商資料商已新增的服務商，且性質爲託管商


默認子倉


    針對滿足規則的持倉變動，在配置的子倉上進行倉位處理


    子倉的枚舉爲子倉資料已新增的子倉
```

<img src="Uq9xbbkAQotFPfxc8rMjlg0NpHg" src-width="3548" src-height="1806" align="center"/>

## 日終任務配置

路径：清算管理&gt;市場清算&gt;日終任務&gt;日終設置

<img src="V0JvbMyfYocxIuxWNnFjMjCgpxf" src-width="2852" src-height="1374" align="center"/>

<b>市場交收配置</b>

點擊新建新增分組

根據劵商交易市場帳務處理順序，配置市場執行的群組配置

```text
常規是按時間區段將接近相同地域市場配置在一起：例 歐美市場/亞洲市場 


租戶劵商也可根據需要，將一些市場清算獨立出來
```

<img src="KJm2b77MEobf2pxMY6HjcRr6pvW" src-width="3574" src-height="1774" align="center"/>

<img src="Dql6bnw2soSEkZxBJGTjnGOupVf" src-width="2440" src-height="934" align="center"/>

新建多個分組後，可以點選右上方區 ‘執行順序設置'來 調整。所配置的市場群組清算順序（劵商常規順序： 先歐美-亞洲-日終）

<img src="FxutbpXUOodYM4xKVrzj1XFnpVg" src-width="2436" src-height="888" align="center"/>

<b>清算前準備配置</b>

可编辑时间段：操作日终任务之前

检查阶段释义：交易清算（数据同步-清算交收之前的检查项目）；日终清结算（数据汇总-日切之前的检查项目）

失败后处理释义：仅提醒（不会拦截流程，仅提示）、工单审核（会拦截流程，但是可以手动通过）、强制校验（会拦截流程，必须通过）

支持的操作：开启/关闭，选择失败后的处理方式

编辑时需要审批，工单标识：clearing.before_clearing_ready.setting

其它：部分检查项目要求强制检查，不允许编辑

<img src="LNzXbqxS2ogysvxsg7TjCFEepLe" src-width="3574" src-height="1774" align="center"/>

<b>清算参数配置</b>

可编辑时间段：操作日终任务之前

编辑清算初始化配置时需要审批，工单标识：clearing.update_system_config.exec

注意：需要聯繫技術人員後修改

<img src="Lt4Nb9kljosl1vxvS0DjSCgep8e" src-width="3574" src-height="1774" align="center"/>

## 計費配置

### 基礎概念

合單規則和收費場景是系統的基礎配置元素，通常在系統初始化時進行設置

套餐收費和個性化收費是根據業務需求靈活配置的功能，用戶可根據實際情況選擇是否啟用。套餐收費通常依據用戶群體進行添加，例如經紀人A套餐、現金賬戶套餐。系統具備在客戶開戶時自動分配相應套餐的功能；個性化收費一般根據客戶個性化需求單獨進行設置

<img src="G2BObI1yTod9OrxW92bjEGUwpKd" src-width="4113" src-height="2018" align="center"/>

### 收費場景

<b>字段說明</b>

---

<b>說明：</b>

匹配條件：用於確定哪些流水需要進入計費流程

計費規則：用於定義如何計算費用金額，包括計費方式、精度、天數和截取方式等

輸出結果：最終的計費結果

---

<img src="TfnDbwNpgoq46TxJvuCjWJWZpLo" src-width="3548" src-height="1806" align="center"/>

### 客戶收費配置

<b>全部操作</b>

<b>字段说明</b>

1. 固定費率：收費金額 = 值 × 費率。計算方式為交易金額、持倉市值時，費率值為非百分比形式，不帶%<b>（例如：1%收費，需要填0.01）</b>。
2. 單筆階梯費率：針對單筆統計單位生效。收費金額 = 階梯結束值1 × 費率1 + （階梯結束值2 - 階梯結束值1）× 費率2 + …… + （階梯結束值N - 階梯結束值N-1）× 費率N。階梯輸入規則：左開右閉，最後一個階梯值為0（例如：大於1且小於等於3）。3. 按月階梯費率：後臺統計每月交易金額總量，系統根據該筆累計交易所在的階梯進行計費。收費金額 = 該筆交易金額 × 費率。跨階梯時，將交易金額拆分後，按各自階梯費率計算並疊加。 |
| 費率幣種      | 收費幣種，計算方式的枚舉值自帶幣種的，按照枚舉值的幣種。若計算方式爲交易金額的，收費幣種按照交易金額的幣種                                                                                                                                                                                                                                                                  |
| 最低、最高收費   | 略                                                                                                                                                                                                                                                                                                                      |
| 不超過交易金額比例 | 4. 不超過交易金額比例：收費金額不大於交易金額 × 設置值 / 100，僅適用於股票交易和期權交易。                                                                                                                                                                                                                                                                    |

<b>个性化收费</b>

<b>使用場景</b>

如果客戶需要定制某個費用，可使用個性化收費功能

一个個性化收費只包含一個收費

一个客户只能绑定多個個性化收費

<b>新建個性化收費示例</b>

<img src="Tl5AbChpxowII5xjNT4jl3J5puf" src-width="2852" src-height="1374" align="center"/>

<img src="F0cSbkBMzoec2RxGb04jSuxSpGc" src-width="2852" src-height="1374" align="center"/>

<img src="RnpXbM4X6oyoAexFwCnjKqj1p8b" src-width="2874" src-height="1312" align="center"/>

<b>添加客戶示例</b>

<img src="IB8GbLSULo5IJJxI2SJjRyd9pgg" src-width="2874" src-height="1312" align="center"/>

<img src="Dyt1bs3faoPmbGxlIunjqKEUpxc" src-width="2874" src-height="1312" align="center"/>

<img src="BhTlb0sAfoquoixjEAdjJNV7pTc" src-width="2522" src-height="1102" align="center"/>

<b>套餐收费</b>

如果客戶具有功能畫像（比如同一個經紀人，同是現金賬戶，多個費用收費標準一致），可以使用套餐收費功能

一个客户只能绑定一个套餐

一个套餐里可包含多个收费场景

<b>新建套餐示例</b>

<img src="Z7vsbRhTao1ePex8HF8jmtuepoh" src-width="2852" src-height="1374" align="center"/>

<img src="Ik9ybIrlaoarAfxzOhujuYLypNo" src-width="2502" src-height="1096" align="center"/>

<img src="DW85bcKKPorkDTxbL2mjDv4Rpxe" src-width="2502" src-height="1096" align="center"/>

<b>客戶計費查詢</b>

該功能用於查詢客戶的收費信息

<b>優先級處理</b>

<b>特殊收費</b>(個性化收費&gt;普通套餐&gt;全局套餐)&gt;<b>普通收費</b>(個性化收費&gt;普通套餐&gt;全局套餐)

<img src="Vk73bqgjuo20oyxynasjdKxipQb" src-width="2502" src-height="1096" align="center"/>

<img src="KlGFbGTxSo8qGexbJZTjsyERpUg" src-width="2502" src-height="1096" align="center"/>

<img src="X8iObXRxPouBaWxa5xyjlt04p3c" src-width="2502" src-height="1096" align="center"/>

<img src="PRagb9AX8oWaOvxXbzPjwNRcpxe" src-width="2502" src-height="1096" align="center"/>

<img src="PVnZbmimzoTXbPxEb2jjiw5ypLh" src-width="2502" src-height="1096" align="center"/>

## 其它計費項目

```text
功能清單
```

<b>香港市場印花稅豁免</b>

```text
配置注意事项
```

1. <b>資料自動更新</b>
    - 該欄位的資料將<b>自動從港交所獲取</b>，並<b>每日更新</b>。

2. <b>資料修改指南</b>
    - 如發現資料有誤，您可以在<b>清算计費步驟之前</b>修改標的資訊。請注意，所做修改將在次日被更新的資料覆蓋，因此修改後請<b>務必聯繫Whale客戶服務</b>反饋資料問題。

3. <b>適用範圍限制</b>
    - 非香港市場的標的，該欄位將<b>不適用</b>。

4. <b>特定標的稅收規則</b>
    - 以ETF/（ETF）和WT/（渦輪）開頭的標的，將<b>強制不收取印花稅</b>。

<b>配置案例</b>

<img src="RP2Rbe1MFoTr8dxiI0JjL4vBpKb" src-width="2878" src-height="1172" align="center"/>

<img src="XCmTbg3syoDoWvxRQN3jS0LTpBc" src-width="2878" src-height="1172" align="center"/>

<b>可交易債券利率配置</b>

```text
**功能清單**
```

<b>總開關</b>

```text
開啟總開關後才會正式啟用可交易債券的計息功能
```

<img src="Es4kbzijCo1aYwxlkZjjtlGbpSf" src-width="2502" src-height="1110" align="center"/>

<b>利率配置</b>

配置注意事項

```text
利息公佈後務必及時更新日曆


在派息日期-4個交易日內未更新利率的，可能會導致利息計算錯誤


必須一次性將所欲日曆配置上，未來的派息日留空
```

配置的使用

```text
累計利息=數量*賬面價格*上期派息利率*累計計息天數/一年天數


累計计息天數=交收日 - 派息日
```

系統針對配置的檢查

```text
-7個自然日內，系統在清算前準備會兜底性檢查


報錯時如果未到派息日期-4個交易日的，可先手動通過


報錯時如果已到派息日期-4個交易日的，建議先按上期利率更新且持續跟蹤利息計算情況
```

新建利率信息案例

<img src="P6HybTCS9owK0OxP3wZjpAN2pqg" src-width="2502" src-height="1110" align="center"/>

<img src="XN20bXQLzo81DLxcZgxjX1kmpwh" src-width="2502" src-height="1110" align="center"/>

## 结单配置

### 結單模版設置

```text
路径：清算管理> 日終管理>結單管理>結單模板 


本作業可以管理結單標準格式的配置，包含 公司訊息/聯絡方式/責任說明 （以下為參考）
```

<img src="W7AVbfKlqokMVMxBADkjuVxvpkb" src-width="2484" src-height="1468" align="center"/>

<img src="FNcabcR9zovyGXxabUyjtqrrphP" src-width="2272" src-height="1438" align="center"/>

```text
在結單模版可進行社交媒體信息配置功能，配置後會在結單展示，若不配置，則不展示該欄位
```

<img src="RkuHbKY1EomgLoxEkT0j161fpTg" src-width="2908" src-height="1546" align="center"/>

```text
結單模板新增結單語言配置功能（支持 5 種語言設置方式）

- 跟隨系統：跟隨客戶 app 設置語言進行展示
- 全局設定（英語）：所有客戶結單均為英文
- 全局設定（簡體中文）：所有客戶結單均為簡體中文
- 全局設定（繁體中文）：所有客戶結單均為繁體中文
- 全局設定（繁體中文&英語）：所有客戶結單均為雙語（繁體中文+英文）
```

<img src="F0lnbMO2Ko8rghxPoxcj5LPapPf" src-width="2476" src-height="1420" align="center"/>

### 結單配置

```text
本作業用來配置管理：客戶結單是否線下發送/是否接受郵件和 APP 通知/未配置的按線下發送為否/提醒全部開啟處理 等配置項
```

<img src="WzM1bcxQDoCEBwxpr3HjDkKlpwb" src-width="3336" src-height="1400" align="center"/>

<img src="Tbg2bpmqNoDaNExnySAjEhhBpsb" src-width="3346" src-height="1414" align="center"/>

```text
在結單配置上增加來源欄位，方便定位結單配置修改來源


也支持批量新增功能，透過事先模版下載後上傳來應用
```

<img src="Kio7bIrmLowDJ1xuc4mjWoNBpIf" src-width="3324" src-height="1412" align="center"/>

```text
新客戶查詢不到的，可新增發送方式
```

<img src="JFwPbyFJyow0fWxUnWvjrdwppJb" src-width="3364" src-height="1410" align="center"/>

### 客戶備註

```text
路径：清算管理> 日終管理>結單管理>客戶備註


提供一個客戶結單備註的管理入口，方便針對某些特定客戶結單增加備註說明


注意：若有需要增加客戶結單備註，要在日終作業完成前，補錄好客戶結單備註後才能發生效用
```

<img src="FGEibBEBvoepN2xJlIDjF6ympsg" src-width="3116" src-height="1132" align="center"/>

可以點選右上角【新增備註】，根據需要新增 日結單/月結單 結單上對應客戶備註

<img src="IU7Mbjx1Fosm4uxPb4rjFyUxpGg" src-width="3368" src-height="1462" align="center"/>

也提供批量結單模板導入的備註說明

<img src="UZy2brkshoua4fxF76EjhWmkpGh" src-width="3366" src-height="1460" align="center"/>

以下是備註參考模板：

<img src="EkqAbM3L3oN25txOiizjATLbp1e" src-width="1304" src-height="496" align="center"/>

可在列表頁查詢備註內容，進行二次編輯

<img src="U4DNbyOqKoDGRFxmFvvjuq9kp2g" src-width="3358" src-height="1240" align="center"/>

### DA 結單配置

```text
路径：清算管理> 日終管理>結單管理>DA 結單配置


DA 帳戶開戶後會默認配置為按 3 月/6 月/9 月/12 月這四個月生成月結單，結單模版為 DA 結單特殊模版。同時支持修改默認配置，修改後取最新配置
```

<img src="SCUqbJtrjomxM2xyFXQj2lB6pyg" src-width="3328" src-height="1454" align="center"/>

<img src="SLbnbaDrho3JGhxJ4fhjofzzpve" src-width="3346" src-height="1456" align="center"/>

# 三、市場清算（交易清算）操作說明

## 對手方文件轉入（Broker Trade）

```text
路径：清算管理>文件處理>文件導入 


點擊導入文件，上傳文件
```

<img src="X6rSbtXf1oILLFx1gqTjy5LSpuh" src-width="3578" src-height="1798" align="center"/>

```text
選擇文件並上傳


例子：港股 CCASS 交易文件導入（CTF）。市場：選擇港股，文件類型選擇 CTF Trade File 後，上傳文檔
```

<img src="JcqwbgIEboVED8xQ7jpjhJwxpgg" src-width="3578" src-height="1798" align="center"/>

```text
可通過列表區域的狀態字段關注文檔導入和解析狀態。解析成功才算處理完成
```

<img src="Aidfb5KFGoEX4PxfI9gjbbMgpRc" src-width="2910" src-height="1548" align="center"/>

## 清算前準備

```text
該功能的目的是檢查執行日終任務前是否完成了相關配置和当天業務操作。市場清算和日終清算有不同的檢查項目


市場清算完成交易文件導入，確認當前賬務日期準確後，可點擊執行清算前準備
```

<img src="HtaObih5eoDDyHxjP7Ajaevip2e" src-width="2852" src-height="1374" align="center"/>

```text
執行後，5 秒內會返回檢查結果。全部檢查都通過的，可以進行後續操作


檢查報錯的，點擊檢查項目右上角可查看檢查項目的規則和操作指引


![image.png](/assets/f033fb5d65d7a79e0c051c521c7113e0.png)


部分檢查會提供異常詳情
```

<img src="YUyUbZnnxosWGQx3nHwjPLrTpZb" src-width="2852" src-height="1374" align="center"/>

```text
結算人員核對後，確認有問題的，在完成相關業務操作後，可點擊“重新執行”
```

<img src="ZeLDb7Nc5oGwjMx2ZZYjHk5pp4d" src-width="2906" src-height="1558" align="center"/>

```text
結算人員核對後，檢查項目可以允許通過的，可點擊手動審核人工通過（需要複核）
```

<img src="ZNHfbdw7OovNIsxI2DxjH9PEpme" src-width="2904" src-height="1558" align="center"/>

```text
複核人員可點擊手動審核（也可直接在工單審核），調出工單審核
```

<img src="YvPAbsHdgo3iR8xdafBj3IJrp4e" src-width="2920" src-height="1546" align="center"/>

<img src="Z1bHbi4BzopcEkxN5wPj7npJplf" src-width="2920" src-height="1550" align="center"/>

```text
結算人員核對後，因為業務流程有差別，需要永久關閉檢查項目的，可以聯繫客服處理


  當審核通過後， 清算前準備就算完成（文字會提示： 已手動通過）
```

<img src="F2l7bOBRuo6qtLx8RKwjHSJopFb" src-width="2852" src-height="1374" align="center"/>

```text
清算前準備檢查項目
```

## 市場清算<b>一鍵清算</b>

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵，系統會自動從第一步開始執行，一直到清算交收作業（ 當沒有錯誤發生時，系統會自動續執行下個作業）

注意： 若有需要可點選 '暫停一鍵清算'，但系統會等當時作業執行完畢後，才開始暫停下一動作（功能鍵會變灰）

<img src="RrkPbbONdoXBvExa78LjLdwtpvf" src-width="2852" src-height="1374" align="center"/>

如果要進行後台補單，或者修正合約的，在清算計費步驟後進行。可在數據同步直接點擊“暫停一鍵清算”

<img src="LLcLbXF3JorES0x4t8PjM9s6pNc" src-width="2852" src-height="1374" align="center"/>

<img src="N8HabIDYxoYF4LxVmwtju1ShpPc" src-width="2852" src-height="1374" align="center"/>

```text
中間若有作業執行錯誤，則一鍵清算將會暫停，並停在相關錯誤的作業程序上，用戶可以參考錯誤訊息提示進行後續修正處理
```

<img src="ApSdbZFH5oLNBGxHaL8jIugIpih" src-width="2908" src-height="1554" align="center"/>

```text
此時可根據業務需要手動點選右側下方相關的作業操作，來檢查或修正紀錄或著 往下一鍵算操作，系統會自動執行下一個作業


注意： 在一鍵清算過程中，可以依賴系統的一鍵清算操作（自動執行所有作業），也可以自行 點選作業自行操作
```

<img src="TZtRbusJao9JVTxlvBdjQ9rHpTf" src-width="2922" src-height="1556" align="center"/>

### 數據同步

```text
點擊執行後會同步系統數據（交易、日切點前的出入金、交易、開戶等數據）
```

### 清算前檢查

```text
在日終流程中點擊清算前檢查步驟會：自動觸發當日的交易對帳


交易對帳失敗的，可快速跳轉到交易對賬界面（清算管理-市場清算-清算檢查-交易對賬）查詢結果
```

<img src="Z8fabB0Yuo1N1ExO5DBjvaHFpRU" src-width="2852" src-height="1374" align="center"/>

<b>對帳結果查詢</b>

```text
可在**清算檢查-交易對賬**頁面分別查詢各市場的交易對帳


每次點擊檢查會生成最新的檢查結果，只需要維護最新的檢查結果


可在**交易對帳**頁面查詢交易對帳的差異明細、對帳總覽訊息；


點擊本端檔案可査詢本端明細；點擊對手端檔案可査詢對手端明細
```

參考圖示如下：

<img src="O6edbvnvOoVxX8xEsGQjUvgZpoh" src-width="3566" src-height="1732" align="center"/>

<b>特殊場景手動通過</b>

```text
對手端檔導入錯誤：在檔導入介面，重新導入對手端檔，然後重新點擊清算前檢查 


本端訂單錯誤：增、刪、改前台訂單後，重新點擊清算前檢查 


按系統數據處理：在“檢查結果”（清算管理-市場清算-清算檢查-檢查結果）中，將對應的檢查結果改為“通過”，然後重新點擊清算前檢查
```

<img src="UITobHkrgoWHxUxz7uYjrrxlpFb" src-width="2920" src-height="1552" align="center"/>

### 清算計費

```text
在清算計費步驟會生成前台合約，狀態為待計費


該步驟暫停執行的，可以編輯前台訂單的收費
```

### 清算入帳（已清算交收合併）

```text
執行完畢後：


    根據計費帳單，股票本金和手續費作業務帳戶處理


    合約狀態變由計算完成更為待交收


    系統會生成 SDR018 系列報表


注意 1：後台補單必須在該步驟之前操作完成


注意 2：清算撤銷（資產處理選擇不處理的）後，此步驟已經完成的，清算計費和清算入帳為空跑，按原資料處理
```

### 清算交收

```text
執行後：


    根據合約和調帳等其他流水進行倉位處理


    對應日期的合約變更為交收完成


    生成倉位數據


    生成 ATI 等指令


    生成臨時持倉，用於處理公司行動
```

# 四、日終清算（非交易清算）操作說明

## 清算前準備

```text
在正式執行日終清算前，需要先執行清算前準備


    必須在完成所有的市場清算後再操作


    檢查是否完成了当天所有的業務操作


    操作方式同市場清算，詳見上文
```

## 日終清算一鍵清算

```text
當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵


系統會自動從第一步開始執行，一直到結單生成步驟


結單後可通過報表或者結單進行檢查
```

<img src="ZOtJbrihAoaR4HxCyRkjVfAqpJg" src-width="2852" src-height="1374" align="center"/>

### 數據匯總

```text
此操作前需要完成流水日期調整，證券組合費/融資利息的提前歸本、金額調整


此操作加工多個市場的交易數據、調帳數據、出入金、收盤價等文件，可重複點擊


數據匯總後操作流水日期調整、收盤價，需要重新點擊數據匯總
```

### 清算中檢查

```text
內部流水對帳、業務操作檢查等（不斷擴充中）


為內部數據檢查，有異常的可聯繫客服


清算中檢查手動通過的操作方式類似交易對帳
```

<img src="IIl4bybeiohDWdxgh81jG8zCpbh" src-width="2846" src-height="1418" align="center"/>

### 資金清算

```text
執行融資利息計算、證券組合費、融券計算等任務
```

### 清算後檢查

```text
內部流水對帳、業務操作檢查等


為內部數據檢查，有異常的可聯繫客服


清算中檢查手動通過的操作方式類似交易對帳
```

### 結單生成

<img src="Mr6Hbqu6kotFidxH1majM1vwpcb" src-width="3364" src-height="1452" align="center"/>

<img src="AWBybDQiMoPG3uxBnnYj7BrVpOf" src-width="3304" src-height="1452" align="center"/>

```text
可以點選右側記錄區對結單【重發】或【下載】
```

<img src="DpO5b8NN2onG3Vxiv8QjKEpopvc" src-width="3360" src-height="1460" align="center"/>

```text
也可產生一份臨時結單，在臨時結單視窗輸入對應客戶與結單日期。·臨時結單支持跨月，支持最早時間 1 年、最大時間跨度 3 個月的臨時結單
```

<img src="YRywbJaAko6YjIxrYbBjHoYCpjD" src-width="3340" src-height="1368" align="center"/>

<img src="UIbUbwMLdo9sgjxViURjuZA5p8c" src-width="3362" src-height="1368" align="center"/>

### 日切

```text
執行完日切流程后，當前系統帳務日会切换到下一日。进行了融資利息等的結算操作，触发了經紀人分成計算的任务
```

# 五、交收指令導出

```text
T+2日的早上可導出ATI交收指令，上傳到CCASS


路径：清算管理-日终任务-交收指令导出


支持导出未来日期的文件


支持導出HK、SZ、SH多市場
```

<img src="Nj0BbBOcRoBKNfxnS5jjXNwGpGd" src-width="3574" src-height="1774" align="center"/>

<img src="RDzgbBXUBouFPGxQbJvjCOm9pUd" src-width="3574" src-height="1774" align="center"/>

# 六、持倉對帳

```text
在文件導入界面可導入持倉文件，部分文件可直接系統觸發對帳處理
```

<img src="XkeXb5IOUoxYihxJFMVjqmsdpMe" src-width="3350" src-height="1456" align="center"/>

```text
導入後並觸發系統對帳處理後，對帳結果為進行中


對帳任務執行完畢後，對帳結果為不平帳或平帳
```

<img src="OqVSb41LyojBLDxiAwrjk8RTpUz" src-width="2930" src-height="1554" align="center"/>

```text
點擊重新對帳也可（重新）觸發系統對帳。支持觸發歷史日期對帳
```

<img src="LkgWbAr8lonHvYxWN8AjRl4tpuh" src-width="2914" src-height="1526" align="center"/>

# 七、非交易流水編輯日期

```text
本作業主要是市場清算後，若想要改變原本日終所計算的流水入帳日期，也就是進行資金/持倉的流水日期調整，新機制下通過修改前台帳戶日期實現


路径：清算管理  > 市場清算  > 流水管理
```

## 單筆流水日期編輯

```text
資金和持倉流水需要在不同頁面 Tab 上操作，找到流水紀錄點擊編輯
```

<img src="UJZsbxsDXo8snixzngDjLMwRp3c" src-width="3578" src-height="1798" align="center"/>

```text
輸入需要處理的日期
```

<img src="R1iybyxYQo6aEDxxsC0jV0Otpxg" src-width="3368" src-height="1308" align="center"/>

```text
觀察編輯號的帳務日期，看是否生效
```

<img src="E4aSbH12sos7QWxmYtgjT9hnp8c" src-width="3368" src-height="1308" align="center"/>

```text
在日終任務中重新點擊數據匯總
```

## 批量流水日期編輯

```text
先選中流水紀錄，然後點擊批量編輯帳務日期
```

<img src="BG2UbWLWTo6CPHx1AISjB4Gqpyh" src-width="3344" src-height="1456" align="center"/>

```text
在日終任務中重新點擊數據匯總
```

## 通過業務碼批量編輯日期

```text
注意：批量調整日期的，需要事先確認該業務碼是否支持編輯，邊界後需要在頁面觀察最終結果
```

<img src="VXQsbHMQKoWXCwxWFCYjePIcpbh" src-width="3356" src-height="1344" align="center"/>

## 更新數據

```text
流水同步為準實時。提交後，可刷新當前賬務日期的全部數據。
```

<img src="Wechbd70Aoeu9wx4svcjg1VIpHd" src-width="3578" src-height="1798" align="center"/>

# 八、後台客戶<b>合約補單和券商快捷補單</b>

```text
提供新增客戶補單與劵商快捷補單的合約記錄功能，這個補單就是業務上所謂的 Client trade 與 Broker trade 補單


在清算计費步骤前補錄客戶合約


上手合約（代理商合約）單是建立在合約基礎上進行相關補單操作


上手合約（代理商合約）需要在清算前檢查步驟前操作
```

## 後台客戶合約補單

```text
點擊新建客戶補單
```

<img src="L2qsbE037oQI3Jxhx34j8T3DpRb" src-width="3008" src-height="1494" align="center"/>

```text
先補充基礎信息，系統會自動進行部分字段的試算（可人工進一步修改）
```

<img src="IIgnb7WVjo1I7txjmTJjjvyhpc7" src-width="3008" src-height="1494" align="center"/>

```text
系統已支持歷史交易日補單（最多前 5 個交易日），補單後交易日期為歷史日期，帳務日期為當日
```

<img src="Ik1IbtQVSoeSVOx4KRtj2PpEpOd" src-width="3008" src-height="1594" align="center"/>

```text
提交後數據有錯誤，可進一步編輯後台合約的基礎信息
```

<img src="VOesbzBaeolHLPxeJGwjPCqbpJH" src-width="3008" src-height="1494" align="center"/>

<img src="C6ZKb19QnouW3xxJnX2jcPyXprh" src-width="3008" src-height="1494" align="center"/>

點擊計費可以自動計算費用

試算後可進一步編輯費用，詳見費用查詢和編輯

注意：只要操作過計費、添加、編輯的，即使刪除了全部費用，在清算計費步驟中不會再計算費用；如果在費用信息頁面未進行過任何操作的，在清算計費步驟會自動基於配置的規則計算費用

<img src="Z5tSbfc6XoeVT8xL1WdjTOSWp1d" src-width="3008" src-height="1494" align="center"/>

```text
若商品是 OTC 產品或者交易通道未進行系統對接的，則結算渠道要對應選擇 OTC 結算渠道
```

<img src="VukrbjAnSo56XAxSKjkjV5RxpYe" src-width="3008" src-height="1594" align="center"/>

```text
OTC 補單系統會按大賬號自動計算託管商、子倉


託管商、子倉可進一步編輯，詳見倉位信息查詢和編輯
```

<img src="Tj0NbNVPfooxGLxsqOVj5nQYpNb" src-width="3008" src-height="1494" align="center"/>

## <b>券商快捷補單</b>

```text
在完成所有客戶合約補單後，可以透過右上【劵商快捷補單 】操作劵商補單


注意：券商快捷補单僅能查詢结算渠道为 OTC 的數據，生成的數據用于清算前檢查步骤的交易對帳
```

<img src="UaHvb5ejJoh7fUxBvPOjrTsOpPc" src-width="2898" src-height="1520" align="center"/>

<b>機構合约（代理商合约）提前試算</b>

```text
選擇所有篩選條件，點擊試算機構費用並刷新，系統會自動計算代理商費用（詳見後文機構合約操作說明）
```

<img src="FiFIbUVRQo9sC0xUxOJj47BzpEc" src-width="2914" src-height="1098" align="center"/>

<b>更新對手方文件</b>

```text
初步核對數據，有問題的修改客戶合約後，重新進入頁面並刷新


操作人員也可以先點擊編輯，臨時調整數據。注意：此編輯不能保存在數據庫中，僅配合“更新對手文件”按鈕使用
```

<img src="CmmHbiwn3o1r2ExtyGMj5QODpRh" src-width="2926" src-height="1554" align="center"/>

```text
核對無誤后，200 條以內數據，可點擊更新對手文件，該文件可用於清算前檢查的交易對賬
```

<img src="IdHRbtDOiozpfxxU5X4jnWU1pTf" src-width="2922" src-height="848" align="center"/>

```text
200 條以上的數據，可下載模板文件，編輯後在清算前檢查步驟前導入文件
```

<img src="B9s4bXXWpoEMdQxq1opjL109pqJ" src-width="2920" src-height="838" align="center"/>

<img src="FrILbtKEgolzqaxbL4tj5cUJpIh" src-width="2904" src-height="1542" align="center"/>

# 九、<b>查詢和編輯前台交易合約</b>

```text
在操作清算計費步驟後，系統會基於前台交易訂單、計費管理配置生成客戶合約


點擊詳情可查看客戶合約的詳情


前台合約只支持編輯費用信息、IBOND 累計利息、結算幣種、倉位信息


前台合約的其它字段如果有問題，需要先修改前台合約數據，再依次執行清算前檢查和清算計費步驟
```

<img src="NZKzbAmf0oKaFJxRlmTj0u8fpbg" src-width="2456" src-height="1242" align="center"/>

<img src="IhVmbEayrofpTAxVsFrjA71jplb" src-width="2484" src-height="1530" align="center"/>

```text
進入詳情頁直接展示含交易日期、交收日期、特殊收費條件在內的基本信息


    數據來源是“交易”的爲前台合約
```

<img src="IXXzbJk09owT47xhO6njZWucple" src-width="2486" src-height="1544" align="center"/>

## 結算幣種編輯

```text
在基礎信息點擊編輯
```

<img src="YlAXbgAv0ofvmTxsK8OjibK2pnf" src-width="2486" src-height="1502" align="center"/>

```text
同時修改結算幣種和匯率並提交


系統會根據匯率和結算幣種計算累計利息（結算幣種）、交易金額（結算幣種）、費用（結算幣種）


系統會按結算幣種進行扣費和交收
```

<img src="G0rzbmU37o8EWSxBaOzjIFMbpfb" src-width="2512" src-height="1558" align="center"/>

## 成交紀錄查詢

```text
點擊成交記錄可展示成交記錄
```

<img src="Upltb7IMJon3N1xgHymjkIJQpvT" src-width="2480" src-height="1542" align="center"/>

## IBOND 累計利息編輯

```text
在成交記錄中，可以點擊編輯，修改累計利息
```

<img src="Ugfkb5ib8o9adKxSxe2jM85xp6d" src-width="2500" src-height="1556" align="center"/>

## 费用查詢和編輯

```text
點擊費用信息可展示收費明細
```

<img src="B4mybwFc5olSd6xAro5jCbhNpOe" src-width="2488" src-height="1526" align="center"/>

點擊試算會重算全部費用

<img src="Edd1bOtipoqcoRxB1kYjs8imphg" src-width="2480" src-height="1536" align="center"/>

點擊添加可以增加費用，增加收費類型不能和已有的重複

<img src="KTDZbUnkSooZ2cxP82Cj549cpHv" src-width="2894" src-height="1548" align="center"/>

點擊刪除可以刪除費用

<img src="BH0xbSykEobJ5pxTJ7nj8LKhpEf" src-width="2892" src-height="1538" align="center"/>

點擊編輯可以修改費用

<img src="Zgfoblt1ioAnnjxysa5jiYe3pSf" src-width="2916" src-height="1538" align="center"/>

## 倉位信息查詢和編輯

```text
點擊倉位信息可查詢倉位數據
```

<img src="I6T3bJRpbofmP1xBmUPjUAQGp3g" src-width="2900" src-height="1552" align="center"/>

```text
點擊編輯可修改託管商和子倉
```

<img src="XuOEbFzP3oOqoixmqjUjTJospNg" src-width="2914" src-height="1544" align="center"/>

# 十、提前交收

```text
若在 T+2（N） 時有提早交收的入帳操作，方便客戶可以提早操作資金相關處理


路径：清算管理> 市場清算>交收系統>交收批次 Tab 頁籤


點選【提前交收】，輸入欲提早交收的市場（可多選）
```

<img src="N7epb8y9ioHpHdxtcIWjxYw5p4c" src-width="3364" src-height="1450" align="center"/>

```text
操作後可觀察交收批次是否處理完畢
```

<img src="JGyabAg9soU17Sxma5HjgmnUpvc" src-width="2516" src-height="740" align="center"/>

# 十一、倉位調整

```text
路径：清算管理> 日終管理>倉位管理>倉位查詢
```

## 子倉位置调整

```text
查詢出對應的客戶記錄後，在右側記錄區點擊【**編輯倉位**】
```

<img src="R7uxb1KLVoqwwtxuMgLj4KQbpTd" src-width="2924" src-height="1546" align="center"/>

```text
此處根據實際數據來調整子倉位置（子倉位置之後必須和持倉保持一致）
```

<img src="RRADbOlM0o0GYSx19hEjr28VpXc" src-width="2914" src-height="1538" align="center"/>

```text
調整後會在倉位流水頁面（Tab 頁籤）生成一條調整記錄
```

<img src="Wt7AbTjsnoHsD3xR1lLj3uWlpIc" src-width="2892" src-height="1022" align="center"/>

## 内部轉倉

```text
查詢出對應的客戶記錄後，在右側記錄區點擊【**內部轉倉**】
```

<img src="HOOpbSuZ3oErUxxT3vMjzynWpCh" src-width="2920" src-height="1548" align="center"/>

```text
調整後會在倉位流水頁面生成兩條調整記錄
```

<img src="QfY6bJ391oFYHwxSOBBjQO7OpPe" src-width="2922" src-height="1236" align="center"/>

## 批量調整

```text
可以根據事先下載模板，進行批量調倉
```

<img src="LyPpbopJwojZGnxlFj2jnJlVpQi" src-width="2052" src-height="640" align="center"/>

<img src="C6JqbEmCLoYhVkxIOJHjHHkHpfb" src-width="2926" src-height="1556" align="center"/>

# 十二、融資利息調整

## 融資利息查詢

```text
可在融資利息賬單頁面查詢每個客戶的融資利息收費詳情


    當期賬單=抵扣後金額 + 已調整利息


    抵扣後金額=抵扣前金額 + 抵扣金額
```

<img src="YS9cbDQZIoB3tKxe2cHj2gZGpf0" src-width="2910" src-height="1544" align="center"/>

```text
點擊抵扣後金額可查詢每日的融資利息明細
```

<img src="K3qrblWKwod0anxJv1UjPnqQpuh" src-width="2910" src-height="1554" align="center"/>

<img src="DQaQbx5xToT3sgxLDuhjCroCpKh" src-width="2898" src-height="1522" align="center"/>

## 融資利息調整

注意：日切期間（第一次擊數據匯總後-日終流暢點完日切）不能操作利息調整

點擊調整可調整融資利息

<img src="Un3sbp1c7o5LVcxifFAjRc4hp6e" src-width="2910" src-height="1528" align="center"/>

```text
按本金調整：系統將根據輸入的本金自動計算需要調整的利息
```

<img src="MqvMbWimaoIYAdx6NaKjK78rpTf" src-width="2914" src-height="1548" align="center"/>

```text
按結果調整：系統將根據輸入的該日利息總額，自動計算需要調整的利息
```

<img src="CxVCbOPQGoynQtxwlGHjV5lwp4c" src-width="2928" src-height="1558" align="center"/>

```text
按發生額調整：系統將根據輸入額，調整利息。按發生額調整支持同時修改多天
```

<img src="TGpBbxMEGowLJmxohSojt2ZGpBh" src-width="3008" src-height="1494" align="center"/>

```text
調整的流水可在**差錯流水**頁面查詢
```

<img src="IiJtbeKYToaAmlxzs1Ajv7vgplC" src-width="2482" src-height="1406" align="center"/>

```text
特殊情況，未生成融資利息帳單的，可先新增帳單，再調整
```

<img src="A1GKbX6iSoBzyaxhBUQj62mGpDb" src-width="2912" src-height="1550" align="center"/>

## 批量調整

```text
可按照發生額調整進行批量處理
```

<img src="XcSnb7pU6o9kOXxMAoBj5L9Yphe" src-width="3578" src-height="1798" align="center"/>

## 提前結算

```text
注意：日切期間（第次擊數據匯總後-日終流暢點完日切）不能操作提前結算


篩選客戶，點擊提前結算
```

<img src="JliqbdCKyoxzLzx5h4NjNUnxpS2" src-width="2900" src-height="1546" align="center"/>

# 十三、收盤價临时编辑

```text
有持倉的股票會展示在收盤價管理頁面


路径：清算管理  >  市場清算 >  收盤價管理


前置条件：已經完成日終任務-清算交收/數據匯總 這個流程節點
```

<img src="Jk3wboeTFokkc5xf2F4jkrcjpsh" src-width="3362" src-height="1342" align="center"/>

```text
需要臨時修改清算收盤價的可點擊編輯
```

<img src="O4cYbp9odovczfxpktNjNYiOpSg" src-width="3460" src-height="1555" align="center"/>

```text
修改收盤價並提交


提交後，需要重新再執行一次數據匯總


如果是清算前準備報錯的，可先執行清算交收，然後重新執行清算前準備
```

# 十四、清算撤銷

```text
選擇需要撤銷的日期，點擊清算撤銷，根據實際需要，選擇撤銷項目，並提交


注意 1：該任務為異步操作，可能須等一點時間


注意2：僅能 操作 T 日與 T-1 日的清算撤銷操作


注意3：操作連續撤銷的，必須按順序進行撤銷


點擊新建清算撤銷
```

<img src="KfkMbOXDJoJOhPx3ANrjqagipgd" src-width="3578" src-height="1798" align="center"/>

```text
根據撤銷場景選擇實際項目
```

<img src="IDp1bs1Dio5cLFxponcjUdeXpPg" src-width="3578" src-height="1798" align="center"/>

```text
提交後，可在列表頁關注撤銷
```

<img src="JPDIbECVNo59KNxI2fSjZoWlpQc" src-width="3578" src-height="1798" align="center"/>

- 场景：日切點後調賬，下一日的流水改到當日
日切點後調賬，當日的流水調整到下日
資金清算後，調整收盤價
    <img src="M83MbqSCQohXA8xuvOqjaXlKpLe" src-width="3020" src-height="1452" align="center"/>
    - 清算撤銷表單

- 场景：日切前發現計費（合約收費、補單）有問題需要調整
    <img src="Eo02bFIC7oKpL3xKuBzjhsPHpXd" src-width="3020" src-height="1452" align="center"/>
    - 清算撤銷表單

- 场景：月底融資利息結算異常
例子：某客戶的融資利息需要調整後再結算
    <img src="Iv18baA1UoqaNAxmrcJjcMiZpwA" src-width="3020" src-height="1452" align="center"/>
    - 清算撤銷表單

- 场景：颱風天已經進行提前交收，需要撤銷
    <img src="HqHpbvfR9o7rF2xUTq7jDaU0p5e" src-width="3020" src-height="1452" align="center"/>
    - 清算撤銷表單

- 场景：日切后發現計費有問題需要調整
量大的券商建議聯繫客服技術介入
    <img src="HZnybtOcloC87Txdp5ij0M8pp4f" src-width="3020" src-height="1452" align="center"/>
    - 清算撤銷表單

# 十五、颱風天處理

```text
颱風天 8 號風球處理


路径：清算管理 > 市場管理-颱風天處理
```

## 颱風天全日市

```text
場景：9 月 2 日為颱風天，港股交收整體延後


    選擇需要處理的賬務日期（如 9 月 2 日），需要處理的市場（HK）


    操作時可操作錢貨同時延後，或者僅錢延後


    提交後：所有待交收的貨（錢）都會延後一個帳務日期進行處理，點擊完「確定」後更新版面
```

<img src="AMGtbK4fFoFivSxWKkjjXUC8pQd" src-width="3578" src-height="1798" align="center"/>

```text
在日切點前需要操作日終的，日終任務點擊提前日切。最終支持在下午2點半後操作。推薦在下一日進行操作


注意：提前日切按鈕需要配置工單審核來操作
```

<img src="UsRzbbbHKopxnJxkr6xjjQA7psf" src-width="3332" src-height="1192" align="center"/>

<img src="UaBAbVOi2ovr2dxJOj5jbZnepjb" src-width="3368" src-height="1172" align="center"/>

## 颱風天半日市

上午有交易，下午沒交易的，選擇錢延後

<img src="Ik0AboF3oougw2xFy3Djj6ifpyc" src-width="1280" src-height="643" align="center"/>

