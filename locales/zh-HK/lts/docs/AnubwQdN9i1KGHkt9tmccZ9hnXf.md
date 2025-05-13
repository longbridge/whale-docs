---
title: HKIDR 操作文檔
slug: AnubwQdN9i1KGHkt9tmccZ9hnXf
sidebar_position: 3
---


# HKIDR 操作文檔

# <b>1.設置 HKIDR 參與者</b>

配置 HKIDR 的參與人信息

<img src="/assets/KDjrbqYydolAqVxkNfsc31zonjh.png" src-width="425" src-height="155" align="center"/>

路徑：在「客戶管理系統＞賬戶管理＞BCAN 碼管理＞參與者管理」

<img src="/assets/L5YSbP68Aof2qXx9AwLcTAZxnme.png" src-width="425" src-height="234" align="center"/>

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p><b>港股 EP 模式</b></p></td><td><p><b>港股 Non-EP 模式</b></p></td></tr>
<tr><td><p>新增一條參與者記錄：</p>
<ul>
<li>參與者名稱：選擇當前租戶選項；</li>
<li>類型：選擇‘House’選項；</li>
<li>BCAN 類別：選擇‘CCEP&amp;TTEP’選項；</li>
<li>參與者編號：手動輸入 Firm ID；</li>
<li>中央編號：手動輸入 CE number；</li>
</ul></td><td><p>新增兩條參與者記錄</p>
<ul>
<li>參與者名稱：選擇當前租戶選項；</li>
<li>類型：選擇‘House’選項；</li>
<li>BCAN 類別：選擇‘TTEP’選項；</li>
<li>參與者編號：手動輸入 Firm ID；</li>
<li>中央編號：手動輸入 CE number；</li>
<li>參與者名稱：選擇&#39;lb&#39;選項；</li>
<li>類型：選擇‘Third’選項；</li>
<li>BCAN 類別：選擇‘CCEP’選項；</li>
<li>參與者編號：手動輸入 Firm ID=‘2195’；</li>
<li>中央編號：手動輸入 CE numbe=‘BPX066’；</li>
</ul></td></tr>
</tbody>
</table>

# <b>2.設置 BCAN 區間</b>

<img src="/assets/HxltblUffocwObxkbzncFJNCnAd.png" src-width="425" src-height="149" align="center"/>

路徑：客戶管理系統-＞賬戶管理-＞BCAN 碼管理-＞BCAN 區間

<img src="/assets/PRdPbqXUzoAJgKxBfOvcBNhcnLf.png" src-width="425" src-height="146" align="center"/>

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p><b>港股 EP 模式</b></p></td><td><p><b>港股 Non-EP 模式</b></p></td></tr>
<tr><td><ul>
<li>CCEP：選擇當前租戶選項；</li>
<li>使用者：選擇當前租戶選項；</li>
<li>是否上報：選擇‘是’；</li>
<li>起始編號/結束編號：手動輸入配置</li>
</ul></td><td><ul>
<li>CCEP：選擇‘lb’選項；</li>
<li>使用者：選擇當前租戶選項；</li>
<li>是否上報：選擇‘是’；</li>
<li>起始編號/結束編號：手動輸入配置</li>
</ul></td></tr>
<tr><td colspan="2"><p>（‘1’ - ‘99’是交易所自測區間，不可使用，不可用‘0’前置佔位，建議按 lb 提供的區間配置）</p></td></tr>
</tbody>
</table>

# <b>3.分配 BCAN</b>

①客戶賬戶開通時，將自動給客戶分配 BCAN，並在客戶同意 HKIDR 授權協議下啓用申報流程；

②存量客戶：在配置完成 BCAN 區間後，請儘快聯絡長橋，我們將自動給存量客戶按區間分配 BCAN；

# <b>4.申報 BCAN 到 HKEX</b>

申報邏輯：上報的數據是 已開通賬戶、有 BCAN 碼且同意授權協議 的全量客戶，申報給交易所後，獲取交易所返回的文件內容，將 BCAN 生效的狀態同步更新；

EP 模式支持 ECP SFTP 和 ECP Web 兩種方式；

Non-EP 模式支持 ECP Web 方式；

## <b>EP 模式申報</b>

### <b>①方式 1：SFTP 系統申報</b>

支持通過 ECP SFTP 方式自動申報

前置條件：提供 SFTP 的 SDNet/2 線路、User Id 和 private key

申報方式：

交易日 07:00 am- 03:00 pm 時間段內，手動點擊‘主動申報’按鈕，系統自動生成 BCAN-CID 文件，且通過 SFTP 的方式提交給交易所；

<img src="/assets/L5wJbo2iAo9exLxFpVTc7ESKndh.png" src-width="425" src-height="202" align="center"/>

交易所在十分鐘內會返回應答文件，在下午 6 點後，會返回驗證文件和全景文件，系統自動解析後，客戶的 BCAN 狀態自動更新；

<img src="/assets/XE55bGVKcorS1Ex8Notc2zzHn6g.png" src-width="425" src-height="237" align="center"/>

### <b>②方式 2：ECP Web 手動申報</b>

通過 Whale 後臺下載申報文件，去交易所官網上傳申報文件，將交易所返回的全景文件導入後臺；

前置條件：向交易所申請 ECP 的 User ID 和 Password

操作：

- 點擊右側‘下載申報文件’按鈕，導出並保存申報文件；

<img src="/assets/P4YqbGckJoUgFBxFy4TcEwj6nAd.png" src-width="425" src-height="202" align="center"/>

- 在登錄交易所網站，登錄 ECP 平臺上傳申報文件到 SFC

網址：https://ecp2.e2etest.hkex.com.hk/

<img src="/assets/Y5udbDOdaoD16sxWpFkc3PBInPb.png" src-width="425" src-height="243" align="center"/>

<img src="/assets/GmXxbJR55oLPJBxnrb5cYfpOnth.png" src-width="425" src-height="245" align="center"/>

<img src="/assets/Lg7kbktxrodHs1x2LixcsSi3nDb.png" src-width="425" src-height="232" align="center"/>

<img src="/assets/JsU6ba7r4o3bFRxbzQbcPVesnCf.png" src-width="425" src-height="234" align="center"/>

<img src="/assets/XgCwbkIXmo8v7pxc04FceQ4nnUd.png" src-width="425" src-height="215" align="center"/>

- 將交易所返回的全景文件，導入後臺頁面；

<img src="/assets/CoHSbCi6koCRirxPnrMcYx2hnkb.png" src-width="425" src-height="186" align="center"/>

- 客戶的 BCAN 生效狀態將同步更新；

<img src="/assets/Mr9Wbx4g6o9TY0xtxifcjqUQnQD.png" src-width="425" src-height="237" align="center"/>

## <b>Non-EP 模式申報</b>

通過 Whale 後臺下載申報文件，去交易所官網上傳申報文件，將交易所返回的全景文件導入後臺；

前置條件：向交易所申請 ECP 的 User ID 和 Password

操作：

- 點擊右側‘下載申報文件’按鈕，導出並保存申報文件；

<img src="/assets/PvDYbg3MaocliXxfkcjcOt35nsh.png" src-width="425" src-height="202" align="center"/>

- 在登錄交易所網站，登錄 ECP 平臺上傳申報文件到 SFC

網址：https://ecp2.e2etest.hkex.com.hk/

<img src="/assets/PEndbTHyboPCU5xu8SWcGsmznBd.png" src-width="425" src-height="245" align="center"/>

<img src="/assets/SwyrbkQnqoUCy6xINGxcrDwTnwd.png" src-width="425" src-height="237" align="center"/>

<img src="/assets/TZd0bXOtpoURmyxetctcBew8nib.png" src-width="425" src-height="232" align="center"/>

<img src="/assets/QTZsbL8Imo6XbixF6V8c7E34nKh.png" src-width="425" src-height="234" align="center"/>

<img src="/assets/KoMYbDietordlWxlpMacgEECnEg.png" src-width="425" src-height="215" align="center"/>

- 將交易所返回的全景文件，導入後臺頁面；

<img src="/assets/ZYM0btG2OorVHfxmFjLcDrGynuq.png" src-width="425" src-height="186" align="center"/>

- 客戶的 BCAN 生效狀態將同步更新；

<img src="/assets/J1QsbenWVo5fZvxntFfcutnfnke.png" src-width="425" src-height="237" align="center"/>

# <b>5.其他報告文件</b>

<table>
<colgroup>
<col width="182"/>
<col width="182"/>
<col width="182"/>
<col width="182"/>
</colgroup>
<tbody>
<tr><td></td><td><p>報告表格</p></td><td><p>提交方</p></td><td><p>港交所</p></td></tr>
<tr><td><p>1</p></td><td><p>合併交易指令報告<br/>彙總交易報告</p></td><td><p>合併交易指令或合併場外交易的受規管中介人<br/>(包括 EP 和 Non-EP)</p></td><td rowspan="5"><p>1.提交報告表格後，交易所在 10 分鐘內返回格式驗證的迴應報告；<br/>2.T 日 提交多份同類型的報告文件時，在截止時間前會取最後一份報告表格；<br/>3.處理結果報告將在 T+1 日 8 點前返回；</p></td></tr>
<tr><td><p>2</p></td><td><p>更改券商客戶編碼報告<br/>更改 BCAN 報告</p></td><td><p>提交配對檔案的相關受規管中介人<br/>(包括 EP 和 Non-EP)</p></td></tr>
<tr><td><p>3</p></td><td><p>券商客戶編碼錯誤報告<br/>BCAN 錯誤交易報告</p></td><td><p>在 OTP-C 輸入相關交易指令及場外交易的交易所參與者 (EP)</p></td></tr>
<tr><td><p>4</p></td><td><p>場外交易 (買方) 券商客戶編碼報告<br/>場外交易報告</p></td><td><p>場外交易 (即人手交易) 的買方交易所參與者 (EP)</p></td></tr>
<tr><td><p>5</p></td><td><p>變更流通量提供者報價的券商客戶編碼報告</p></td><td><p>交易所參與者進行變更流通量提供者報價的券商客戶編碼 (EP)</p></td></tr>
</tbody>
</table>

**格式要求：所有包含要採用 CSV 格式

## <b>①合併交易指令報告 (Aggregated Transaction Report)</b>

合併交易指令或合併場外交易的相關受規管中介人，在 T+3 日內，在已執行的合併交易指令下的各項相關交易的資料需填入表格模板中，通過 ECP Web 提交給交易所。

表格模板：HBCNATBN_BPX066_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>說明</p></td></tr>
<tr><td><p>文件標題</p></td><td><p>‘HBCNATBN’+‘<em>’+CE Number+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>項目編號。</p></td><td><p>序號，依次增加</p></td></tr>
<tr><td><p>報告日期</p></td><td><p>提交報告的時間</p></td></tr>
<tr><td><p>CE 舉報受規管中介人數目</p></td><td><p>相關受規管中介人的 CE No.</p></td></tr>
<tr><td><p>執行交易所參與者公司 ID</p></td><td><p>參與者編號</p></td></tr>
<tr><td><p>交易日期</p></td><td><p>交易日期</p></td></tr>
<tr><td><p>股票代碼</p></td><td><p>股票代碼</p></td></tr>
<tr><td><p>價格</p></td><td><p>價格</p></td></tr>
<tr><td><p>數量</p></td><td><p>數量</p></td></tr>
<tr><td><p>側面（B/S）</p></td><td><p>買賣方向，填入‘B’或‘S’</p></td></tr>
<tr><td><p>基本個人 CE 號及 BCAN</p></td><td><p>附在買賣盤的中央編號及券商客戶編號，格式 CE Number+‘.’+BCAN 碼</p></td></tr>
</tbody>
</table>

## <b>②更改客戶券商編碼報告 (Change BCAN Report)</b>

修改已生效的券商客戶編碼，需要將客戶的信息填入表格模板中，通過 ECP Web 提交給交易所。

表格模板：HBCNBCBN_BPX066_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>說明</p></td></tr>
<tr><td><p>文件標題</p></td><td><p>‘HBCNBCBN’+‘<em>’+CE Number+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>項目編號。</p></td><td><p>序號，依次增加</p></td></tr>
<tr><td><p>報告日期</p></td><td><p>提交報告的時間</p></td></tr>
<tr><td><p>CE 舉報受規管中介人數目</p></td><td><p>相關受規管中介人的 CE No.</p></td></tr>
<tr><td><p>原始 CE 號和 BCAN</p></td><td><p>原 BCAN 賬號，格式 CE Number+‘.’+BCAN 碼</p></td></tr>
<tr><td><p>經修訂的 CE 和 BCAN</p></td><td><p>修改後的 BCAN 賬號，格式 CE Number+‘.’+BCAN 碼</p></td></tr>
<tr><td><p>更改日期</p></td><td><p>修改的時間</p></td></tr>
<tr><td><p>變更原因</p></td><td><p>修改原因</p></td></tr>
</tbody>
</table>

## <b>③券商客戶編碼錯誤報告</b>

已部分/全部提交的交易指令發現不正確，在交易日6:00 PM 前，將需要變更的信息，通過 ECP Web 提交給交易所。

表格模板：HBCNERBN_21950_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>說明</p></td></tr>
<tr><td><p>文件標題</p></td><td><p>‘HBCNERBN’+‘<em>’+Firm ID+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>項目編號。</p></td><td><p>序號，依次增加</p></td></tr>
<tr><td><p>報告日期</p></td><td><p>提交報告的時間</p></td></tr>
<tr><td><p>執行交易所參與者公司 ID</p></td><td><p>參與者編號</p></td></tr>
<tr><td><p>交易日期</p></td><td><p>交易日期</p></td></tr>
<tr><td><p>股票代碼</p></td><td><p>股票代碼</p></td></tr>
<tr><td><p>交易數量</p></td><td><p>數量</p></td></tr>
<tr><td><p>貿易方（B/S）</p></td><td><p>買賣方向，填入‘B’或‘S’</p></td></tr>
<tr><td><p>OTP 的原始 CE 號和 BCAN 輸入</p></td><td><p>原 BCAN 賬號，格式 CE Number+‘.’+BCAN 碼</p></td></tr>
<tr><td><p>經修訂的 CE 和 BCAN</p></td><td><p>修改後的 BCAN 賬號，格式 CE Number+‘.’+BCAN 碼</p></td></tr>
<tr><td><p>貿易 ID（OTP-C）</p></td><td><p>交易編號</p></td></tr>
</tbody>
</table>

## <b>④場外交易 (買方) 券商客戶編碼報告</b>

若買方的交易所參與者未能於收市前輸入券商客戶編碼，買方交易所參與者需通過 ECP Web 提交報告給交易所。

表格模板：HBCNOTBN_21950_20220704.csv

<table>
<colgroup>
<col width="365"/>
<col width="365"/>
</colgroup>
<tbody>
<tr><td><p>字段</p></td><td><p>說明</p></td></tr>
<tr><td><p>文件標題</p></td><td><p>‘HBCNOTBN’+‘<em>’+Firm ID+‘</em>’ + 提交日期</p></td></tr>
<tr><td><p>項目編號。</p></td><td><p>序號，依次增加</p></td></tr>
<tr><td><p>報告日期</p></td><td><p>提交報告的時間</p></td></tr>
<tr><td><p>執行交易所參與者公司 ID</p></td><td><p>參與者編號</p></td></tr>
<tr><td><p>交易日期</p></td><td><p>交易日期</p></td></tr>
<tr><td><p>股票代碼</p></td><td><p>股票代碼</p></td></tr>
<tr><td><p>交易數量</p></td><td><p>交易數量</p></td></tr>
<tr><td><p>買方 CE 號和 BCAN</p></td><td><p>買方的 BCAN 賬號，格式 CE Number+‘.’+BCAN 碼</p></td></tr>
<tr><td><p>貿易 ID（OTP-C）</p></td><td><p>交易編號</p></td></tr>
</tbody>
</table>

# <b>附錄</b>

# <b>時間表</b>

<table>
<colgroup>
<col width="243"/>
<col width="243"/>
<col width="243"/>
</colgroup>
<tbody>
<tr><td><p><b>時間點</b></p></td><td><p><b>鯨魚</b></p></td><td><p><b>港交所</b></p></td></tr>
<tr><td><p>T 日 8:00 am-03:00 pm<br/>(自動申報)</p></td><td><p>自動/手動 生成 BCAN-CID Mapping File，通過 SFTP 自動申報文件至交易所</p></td><td><p>返回 BCAN-CID Response File<br/>(提交申報文件 10 分鐘內)</p></td></tr>
<tr><td><p>07:00 am-04:30 pm<br/>(手動申報)</p></td><td><p>Whale 後臺下載申報文件（HBCNMAPP）</p></td><td></td></tr>
<tr><td></td><td></td><td><p>通過 ECP 網站，上傳申報文件</p></td></tr>
<tr><td></td><td></td><td><p>返回 BCAN-CID Response File，下載並檢查正確性</p></td></tr>
<tr><td><p>06:00 pm-11:59 pm</p></td><td></td><td><p>返回 BCAN 進程結果文件（HBCNMPRP）</p></td></tr>
<tr><td></td><td></td><td><p>返回 BCAN 完整映像文件（HBCNFIMG）</p></td></tr>
<tr><td></td><td><p>導入交易所返回的全景文件，並確認客戶的 BCAN 是否有生效<br/>(手動申報需人工在後臺導入操作)</p></td><td></td></tr>
<tr><td></td><td><p>確認客戶的 BCAN 生效，當日檢查結束</p></td><td></td></tr>
<tr><td><p>T+1 日 12:00 am</p></td><td></td><td><p>系統清理，所有檔案文件在 e 通訊中刪除</p></td></tr>
</tbody>
</table>

