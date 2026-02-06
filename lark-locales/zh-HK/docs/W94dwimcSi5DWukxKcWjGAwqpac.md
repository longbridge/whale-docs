---
title: 快速上手
slug: W94dwimcSi5DWukxKcWjGAwqpac
sidebar_position: 1
---


# 快速上手

[Document original - 原始文档](https://longbridge.larkenterprise.com/docx/YoAzdNPCvo1S5sxjAjUcDNzynCc)

Creator - chuanyuan.chen@longbridge-inc.com

---

## 適用場景

直聯港交所的租戶（EP模式）

券商只有港股市場

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

<table header_row="1">
<colgroup>
<col width="269"/>
<col width="100"/>
</colgroup>
<thead>
<tr><th><p>權限名稱</p></th><th><p>權限說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>ChargingFull  管理市場清算、日終、合約的權限<br/>ChargingReadOnly 只讀市場清算、日終、合約的權限<br/>ChargingFileProcessingFull  管理文件導入、導出、快捷導入的權限</p></td><td></td></tr>
</tbody>
</table>

## 操作說明 

### 導入交易文件

在下午16:10分之後，導入CTF Trade File

路徑：清算管理  &gt; 市場清算  &gt;文件導入

點擊導入文件，上傳文件

<img src="/assets/K3FDbTeQFoGkOAxxd6KjuHSPplc.jpeg" src-width="3578" src-height="1798" align="center"/>

可通過列表區域的狀態字段關注解析狀態， 解析成功才算處理完成

<img src="/assets/EozjbLTqHo2gT7xaw3RjSGr3pEd.jpeg" src-width="3548" src-height="1806" align="center"/>

### 市場清算(交易清算)

完成交易文件導入,可操作市場清算

路徑：清算管理-市場清算-日終任務

#### 清算前準備

該功能的目的是檢查執行前是否完成了相關配置和当天業務操作

確認當前賬務日期準確後，可點擊執行清算前準備

注意：如果只有港股市場，在初始化設置時可隱藏歐美市場清算

<img src="/assets/P9rkbBufKoLbrRxa4LTjlpS8pDf.jpeg" src-width="2908" src-height="1540" align="center"/>

執行後，5 秒內會返回檢查結果。全部檢查都通過的，可以進行後續操作

檢查報錯的，點擊檢查項目右上角可查看檢查項目的規則和操作指引

<img src="/assets/WCa9blTwxo8NgixsZtFj33fvpbb.jpeg" src-width="2906" src-height="1548" align="center"/>

部分檢查會提供異常詳情

<img src="/assets/C2AabZCQfoPDG0xcmZJjX8J2pLf.jpeg" src-width="2904" src-height="1540" align="center"/>

結算人員核對後，確認有問題的，在完成相關業務操作後，可點擊“重新執行”

<img src="/assets/OEFmb2wploU3nzxPCrhjd835pBg.jpeg" src-width="2906" src-height="1558" align="center"/>

結算人員核對後，檢查項目可以允許通過的，可點擊手動審核人工通過（需要複核）

<img src="/assets/WHUHbG43RodUWoxd5vgjjitipWb.jpeg" src-width="2904" src-height="1558" align="center"/>

複核人員可點擊手動審核（也可直接在工單審核），調出工單審核

<img src="/assets/ZBWJbn1KaoffNqx3jzmjucOopSb.jpeg" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/NrdfbGMbTomnpLxcfmUjkURRpwe.jpeg" src-width="2920" src-height="1550" align="center"/>

結算人員核對後，因為業務流程有差別，需要永久關閉檢查項目的，可以聯繫客服處理

<img src="/assets/Hx3FbpmQioIL9CxJXwxjzvAmpYg.jpeg" src-width="2926" src-height="1556" align="center"/>

當審核通過後， 清算前準備就算完成（文字會提示： 已手動通過）

<img src="/assets/BX05bRxVKoplanxoEKAjjsQCp2f.jpeg" src-width="2926" src-height="1558" align="center"/>

#### 市場清算<b>一鍵清算</b>

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵，系統會自動從第一步開始執行，一直到清算交收作業（ 當沒有錯誤發生時，系統會自動續執行下個作業）

注意： 若有需要可點選 '暫停一鍵清算'，但系統會等當時作業執行完畢後，才開始暫停下一動作（功能鍵會變灰）

<img src="/assets/CUTrbuJAJox2KSxoqGYj7b3Wp0g.jpeg" src-width="2916" src-height="1546" align="center"/>

如果要進行後台補單，或者修正合約的，可在數據同步直接點擊“暫停一鍵清算”，然後逐步執行，防止錯過暫停時機

<img src="/assets/DLKObOkyroppUtxCzt7j0Wc6p5c.jpeg" src-width="2922" src-height="1548" align="center"/>

中間若有作業執行錯誤，則一鍵清算將會暫停，並停在相關錯誤的作業程序上，用戶可以參考錯誤訊息提示進行後續修正處理

<img src="/assets/EcXAbWFLfojVdtxTPH0jPFoXpid.jpeg" src-width="2908" src-height="1554" align="center"/>

此時可根據業務需要手動點選右側下方相關的作業操作，來檢查或修正紀錄或著 往下一鍵算操作，系統會自動執行下一個作業

注意： 在一鍵清算過程中，可以依賴系統的一鍵清算操作（自動執行所有作業），也可以自行點選作業自行操作

<img src="/assets/I7S1bOGU1olYbkxtPd0jRgZGpxh.jpeg" src-width="2922" src-height="1556" align="center"/>

<b>日終數據同步（Client Trade）</b>

執行後會同步系統數據，含交易、日切點前的出入金、交易、開戶等數據

<b>清算前檢查（Trade Match）</b>

執行清算前檢查步驟會自動觸發時當日的交易對帳

交易對帳失敗的，可快速跳轉到交易對賬界面查詢結果

<img src="/assets/ZS0vb1mIKobwh8x08vjjttBspAb.jpeg" src-width="2904" src-height="1544" align="center"/>

可在清算檢查（路徑：清算管理-市場清算-清算檢查-交易對賬）頁面分別查詢各市場的交易對帳

每次點擊檢查會生成最新的檢查結果，只需要維護最新的檢查結果

<img src="/assets/VNywbuQ2Moh99Qx4JAIjefprppe.jpeg" src-width="3566" src-height="1732" align="center"/>

對手端檔導入錯誤：在檔導入介面，重新導入對手端檔，然後重新點擊清算前檢查 

本端訂單錯誤：增、刪、改前台訂單後，重新點擊清算前檢查 

按系統數據處理：在“檢查結果”（ 路徑：清算管理-市場清算-日終任務-清算檢查-檢查結果）中，將對應的檢查結果改為“通過”，然後在日終任務頁面重新點擊清算前檢查

<img src="/assets/VOSubv4f1o3eEFx97TQjzSFVpHu.jpeg" src-width="2920" src-height="1552" align="center"/>

<b>清算計費</b>

在清算計費步驟會生成前台合約，狀態為待計費

該步驟暫停執行的，可以編輯前台訂單的收費

<b>清算入帳</b>

根據計費帳單，股票本金和手續費作業務帳戶處理，合約狀態變由計算完成更為待交收，系統會生成 SDR018系列報表

注意 1：後台補單必須在該步驟之前操作完成

注意 2：清算撤銷（資產處理選擇不處理的）後，此步驟已經完成的，清算計費和清算入帳為空跑，按原資料處理

<b>清算交收</b>

根據合約和調帳等其他流水進行倉位處理

對應日期的合約變更為交收完成

生成倉位數據

生成 T+2的ATI 等交收指令

生成臨時持倉，用於處理公司行動

### 日終清算（非交易清算）

完成市場清算后可操作日终清算

#### 清算前準備

在正式執行日終清算前，需要先執行清算前準備

必須在完成所有的市場清算後再操作，主要檢查是否完成了当天所有的業務操作

操作方式同市場清算，詳見上文

<img src="/assets/NfzzbFuSWoZi0JxpMUKjvd2wpFb.jpeg" src-width="2492" src-height="1412" align="center"/>

<img src="/assets/Ct1cbhN3soleWixN2eXjj4jbppc.jpeg" src-width="2434" src-height="1418" align="center"/>

#### 日終清算一鍵清算

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵

系統會自動從第一步開始執行，一直到結單生成步驟

結單後可通過報表或者結單進行檢查

<img src="/assets/PZBJbIygVoxnrfxHQ03jIAuYpje.jpeg" src-width="2912" src-height="1522" align="center"/>

<b>數據匯總</b>

此操作前需要完成流水日期調整，證券組合費/融資利息的提前歸本、金額調整

此操作加工多個市場的交易數據、調帳數據、出入金、收盤價等文件，可重複點擊。數據匯總為全市場最後一次同步日終數據；全市場最後一次倉位處理，生成完整倉位數據

數據匯總後操作流水日期調整、收盤價，需要重新點擊數據匯總

<b>清算中檢查</b>

內部流水對帳、業務操作檢查等

檢查可重複觸發，排除問題後可重新觸發檢查

<b>資金清算</b>

執行融資利息計算、證券組合費、融券計算等任務

<b>清算後檢查</b>

清算後檢查主要檢查資金清算步驟的執行狀況

<b>結單生成</b>

點擊結單生成後，可生成結單

結單已發送的，不能重新生成

<b>日切</b>

執行完日切流程后，當前系統帳務日会切换到下一日

融資利息等的結算操作

進行經紀人分成計算

### 結單發送

結單生成步驟後即可操作結單發送

路径：清算管理&gt; 日終管理&gt;結單管理&gt;結單查詢

<b>系統支持在日切步驟匯總進行結單自動發送,但須事先配置,請聯絡Whale 客服</b>

<img src="/assets/UXabbsy3fo0aVEx4wsNjW9Bophh.jpeg" src-width="3364" src-height="1452" align="center"/>

<img src="/assets/Jo0tbCSXJomNWrxjwK4ju6h0pVL.jpeg" src-width="3304" src-height="1452" align="center"/>

可以點選右側記錄區對結單【重發】或【下載】

<img src="/assets/KgawbCqakoTg1Fxr6VvjMvEsped.jpeg" src-width="3360" src-height="1460" align="center"/>

### ATI 指令導出

T+2日的早上可導出ATI交收指令，上傳到CCASS

路径：清算管理-日终任务-交收指令导出

支持导出未来日期的文件

支持導出HK、SZ、SH多市場

<img src="/assets/In6eb57VsonWjJxWEjoj5HQPp2c.jpeg" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/X9KEbr95SoghLqxMJhMjMXUNphf.jpeg" src-width="3574" src-height="1774" align="center"/>

### 持倉對帳

T+1上午，在文件導入界面可導入CCASS持倉文件，進行持倉對賬

導入後系統將自動觸發對賬

<img src="/assets/Qx7gb2b8moKebMxjkXXjxZHApKf.jpeg" src-width="3350" src-height="1456" align="center"/>

導入後並觸發系統對帳處理後，對帳結果為進行中

對帳任務執行完畢後，對帳結果為不平帳或平帳

<img src="/assets/IrMpbyZ2mo1buExcEdNjjHHbpcd.jpeg" src-width="2930" src-height="1554" align="center"/>

點擊重新對帳也可（重新）觸發系統對帳。系統支持觸發歷史日期對帳

<img src="/assets/HkGMbLpgsoDDgexnQJJjcfiwp0e.jpeg" src-width="2914" src-height="1526" align="center"/>

