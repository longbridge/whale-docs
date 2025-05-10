---
title: 6. 公司行動問題
slug: OcH0w43lqi1mMDk3JHvcrJCbnMc
sidebar_position: 5
---


# 6. 公司行動問題

## 6A 問：不同類型的公司行動類別是什麼意思？（如：BE、CA、RS、TM 類別的）

<b>答：</b>見以下列表說明不同類別的公司行動類型

> 公司行動完成後，一般需要約 5 分鐘時間更新成本價

<table>
<colgroup>
<col width="415"/>
<col width="177"/>
<col width="229"/>
</colgroup>
<tbody>
<tr><td><p>預告類型</p></td><td><p>05 文件 - 對應數據</p></td><td><p>系統作業對照</p></td></tr>
<tr><td><p>TM<br/>(Take-Over (Compulsory) / Auto-Exercise of Structured PRSducts )<br/>未到期而被行使的牛熊證、窩輪</p></td><td><p>TM</p></td><td><p>牛熊證回收</p></td></tr>
<tr><td><p>BE<br/>( Benefit Entitlemen)<br/>含紅利、紅股、選股選息、供股權發放、公開發售權益發放等信息</p></td><td><p>BE</p></td><td><p>分股分紅</p></td></tr>
<tr><td><p>CA<br/>( Corporate Action )<br/>拆合股等企業行動</p></td><td><p>CA</p></td><td><p>拆合股</p></td></tr>
<tr><td><p>DS<br/>( Delisted、Expired、Lapsed)<br/>股權回收</p></td><td><p>DS</p></td><td><p>股權回收</p></td></tr>
<tr><td><p>OO<br/>( Open Offer )<br/>普通公開發售行權</p></td><td><p>OO（APP 尚未對接）</p></td><td rowspan="4"><p>認購</p></td></tr>
<tr><td><p>EO<br/>( Excess Open Offer)<br/>額外公開發售行權</p></td><td><p>EO（APP 尚未對接）</p></td></tr>
<tr><td><p>RS<br/>( Rights Subscription)<br/>普通供股權行權</p></td><td><p>RS（APP 尚未對接）</p></td></tr>
<tr><td><p>ER<br/>( Excess Rights Subscription)<br/>額外供股權行權</p></td><td><p>ER（APP 尚未對接）</p></td></tr>
<tr><td><p>TC<br/>( Take-Over (Conditional) )<br/>部分要約</p></td><td><p>TC（APP 尚未對接）</p></td><td rowspan="2"><p>要約</p></td></tr>
<tr><td><p>TU<br/>( Take-Over (Unconditional) )<br/>全面要約</p></td><td><p>TU（APP 尚未對接）</p></td></tr>
</tbody>
</table>

## 6B. 問：美股的公司行動如何操作？

<b>答：</b>需要依據上手通知操作美股的公司行動，

- 如 BE 類別可參考 [快速上手 - 普通紅股紅利（BE）](./VK4bwFoGyifITykmGaucY7fSncc)、[快速上手 - 自願類紅股紅利（BE） ](./NiQDwy0cziZ2b5kKIg5c0ExAn6f)

> 如美股發生 CA 類的公司行動需要完成美股日終的“清算交收”以拉取到最新新數據。
例如：NVDA 在 2024 年 6 月 7 日收盤後進行 1 拆 10 股的公司行動。系統需要完成 6 月 10 日的美股“清算交收" 後，CA 類公司行動的股權記登記日為 6 月 10 日，支付日期為 6 月 11 日。

## 6C 問：為何按了「登記」沒有客户數據？

<b>答：</b>如登記股權日為 4 月 8 日，需要完成當天日終，系統生成數據後點擊「登記」才能拉取到客户信息，提早點擊「登記」會沒有數據。

如需在日終前完成公司行動，可以修改股權登記日為 4 月 7 日，重新點擊「登記」拉取客户數據。

<img src="/assets/RQ3TbgmIUo6VFPxI4erczsgin0b.png" src-width="2131" src-height="849" align="center"/>

## 6D 問：派息金額跟系統派發的有差額，可以如何處理？

<b>答：</b>可以操作「尾差調整」輸入實際派發金額。

(i). 在「公司行動」頁面的操作欄點擊「詳情」。

<img src="/assets/S5uFbmgesorRnBxypOwcvpTbnLe.png" src-width="2816" src-height="1376" align="center"/>

(ii). 在“明細彙總”中點擊「尾差調整」可選金額／份額，之後作「提交執行」。

<img src="/assets/TJwbbN0RXocnKOxBT4Fc58BmnT3.png" src-width="2084" src-height="1236" align="center"/>

## 6E 問：公司行動派發股息可以選擇以不同貨幣收取？

答：在「方案信息」點擊「編輯」，添加“BE-CASH DIVIDEND”的方案輸入「匯率」及「派息率」（每股派發多少股息），再點擊「重新登記」拉取到最新數據。

<img src="/assets/DaCwbe57CoUaUTx4KCpcs4O8n8e.png" src-width="2236" src-height="1490" align="center"/>

## 6F 問：如何為客户申購／修改供股權行權數量？

<b>答：</b>（i）「登記」成功後在「明細彙總」欄位看到可行權股票及客户數量。在「客户明細」可新增 或 在詳情中編輯。

<img src="/assets/KXDxbuyXIoNgkVxvbUGcLKAbnXe.png" src-width="2367" src-height="1392" align="center"/>

(ii). 在「客户明細」欄位查看到合資格的派發客户。修改資料後，請點擊「重新登記」刷新資料。確認資料無誤點擊「行權指令收集」進行下一步。


- 點擊「新增」：可添加個別客戶到派息名單；
- 點擊「作廢」：可刪除客户
- 點擊「詳情」：可修改個別客户的收費信息 或 權益信息的轉入份額

<img src="/assets/LFDKbNDhAo3ANTx442pczYLAnYD.png" src-width="2391" src-height="1438" align="center"/>

（iii） “行權信息”查到客户的行權數量，點擊「行權」可作修改
“收費信息”查到該客户的公司行動費用，點擊「編輯」可作調整

“權益信息”查到派出標的，點擊「編輯」可修改

<img src="/assets/DAvIbn0YDoEvasx4UCEcj6MNnQf.png" src-width="1849" src-height="1390" align="center"/>

## 6G 問：如客户的供股權（RS 類）不作認購，系統會自動刪除掉嗎？

<b>答：</b>需要操作 DS 類別的公司行動回收股權。 

RS 類別處理的是已認購上報的，DS 類別處理的是未申請的股權。兩個公司行動在 CCASS 處理的過程中，登記日期是不同的，DS 類別的會晚點生成。

## 6H 問：系統什麼時候將打靶的牛熊證進行移除？

<b>答：</b> 新建公司行動時，根據有沒有剩餘價值選 TM 或者 DS 類別，然後選「登記日」輸入上手提供的登記日。上手移除時，再完成公司行動以收回標的。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[72%]" width-ratio="72">
<img src="/assets/SgLlbByiIoNWS5x5yCvcKsJbnvh.png" src-width="2674" src-height="1226" align="center"/>
</div>
<div class="w-[27%]" width-ratio="27">
<img src="/assets/NYTRb6fL7objkyx7vPScVYNLnge.png" src-width="904" src-height="1126" align="center"/>
</div>
</div>

## 6I 問：公司行動操作「行權指令收集」出現報錯，需要如何處理？

<img src="/assets/Re0LblRTUo4YavxzISQcTv3vnKf.png" src-width="2137" src-height="510" align="center"/>

<b>答：</b>操作「行權指令收集」需要在選擇開始時間及結束時間之間。成功後，可以點擊「提前完成指令收集」提早完成公司行動。
另外，時間段需逐步遞進：選擇開始時間＜選擇結束時間＜選擇結束時間（CCASS）。

## 6J 問：公司行動在那個報表顯示出來？

<b>答：</b> 可以查看 SDR040 類別的報表。執行方式為“強制執行”的派息派股公司行動在 SDR040-09  Corporate Action Detail Report（BE/IP/SO）報表顯示；
“可選擇”的選股選息公司行動在 SDR040-10 Corporate Action Detail Report（BE With Selection）報表顯示。

## 6K 問：哪類別的公司行動需要上報埸外證券交易滙報制度（OTCR）？

<b>答：</b>不收印花稅的公司行動不需要上報埸外證券交易滙報制度（OTCR），現金要約類別的公司行動需要作上傳，可使用報表 `SDR070 - OTCR Report`，注意需要<b>導出 EXCEL 檔</b>才會展示要約收購的股份轉讓記錄，頁面查詢和 CSV 導出不支持。

<img src="/assets/V9lRbpJyaoAH7DxBpLHcX5AnnWg.png" src-width="2042" src-height="808" align="center"/>

