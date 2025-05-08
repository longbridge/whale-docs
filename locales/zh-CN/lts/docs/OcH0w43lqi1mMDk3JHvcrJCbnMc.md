---
title: 6. 公司行动问题
slug: OcH0w43lqi1mMDk3JHvcrJCbnMc
sidebar_position: 5
---


# 6. 公司行动问题

## 6A 问：不同类型的公司行动类别是什么意思？（如：BE、CA、RS、TM 类别的）

<b>答：</b>见以下列表说明不同类别的公司行动类型

> 公司行动完成后，一般需要约 5 分钟时间更新成本价

<table>
<colgroup>
<col width="415"/>
<col width="177"/>
<col width="229"/>
</colgroup>
<tbody>
<tr><td><p>预告类型</p></td><td><p>05 文件 - 对应数据</p></td><td><p>系统作业对照</p></td></tr>
<tr><td><p>TM<br/>(Take-Over (Compulsory) / Auto-Exercise of Structured PRSducts )<br/>未到期而被行使的牛熊证、窝轮</p></td><td><p>TM</p></td><td><p>牛熊证回收</p></td></tr>
<tr><td><p>BE<br/>( Benefit Entitlemen)<br/>含红利、红股、选股选息、供股权发放、公开发售权益发放等信息</p></td><td><p>BE</p></td><td><p>分股分红</p></td></tr>
<tr><td><p>CA<br/>( Corporate Action )<br/>拆合股等企业行动</p></td><td><p>CA</p></td><td><p>拆合股</p></td></tr>
<tr><td><p>DS<br/>( Delisted、Expired、Lapsed)<br/>股权回收</p></td><td><p>DS</p></td><td><p>股权回收</p></td></tr>
<tr><td><p>OO<br/>( Open Offer )<br/>普通公开发售行权</p></td><td><p>OO（APP 尚未对接）</p></td><td rowspan="4"><p>认购</p></td></tr>
<tr><td><p>EO<br/>( Excess Open Offer)<br/>额外公开发售行权</p></td><td><p>EO（APP 尚未对接）</p></td></tr>
<tr><td><p>RS<br/>( Rights Subscription)<br/>普通供股权行权</p></td><td><p>RS（APP 尚未对接）</p></td></tr>
<tr><td><p>ER<br/>( Excess Rights Subscription)<br/>额外供股权行权</p></td><td><p>ER（APP 尚未对接）</p></td></tr>
<tr><td><p>TC<br/>( Take-Over (Conditional) )<br/>部分要约</p></td><td><p>TC（APP 尚未对接）</p></td><td rowspan="2"><p>要约</p></td></tr>
<tr><td><p>TU<br/>( Take-Over (Unconditional) )<br/>全面要约</p></td><td><p>TU（APP 尚未对接）</p></td></tr>
</tbody>
</table>

## 6B. 问：美股的公司行动如何操作？

<b>答：</b>需要依据上手通知操作美股的公司行动，

- 如 BE 类别可参考 [快速上手 - 普通红股红利（BE）](./VK4bwFoGyifITykmGaucY7fSncc)、[快速上手 - 自愿类红股红利（BE） ](./NiQDwy0cziZ2b5kKIg5c0ExAn6f)

> 如美股发生 CA 类的公司行动需要完成美股日终的“清算交收”以拉取到最新新数据。
例如：NVDA 在 2024 年 6 月 7 日收盘后进行 1 拆 10 股的公司行动。系统需要完成 6 月 10 日的美股“清算交收" 后，CA 类公司行动的股权记登记日为 6 月 10 日，支付日期为 6 月 11 日。

## 6C 问：为何按了「登记」没有客户数据？

<b>答：</b>如登记股权日为 4 月 8 日，需要完成当天日终，系统生成数据后点击「登记」才能拉取到客户信息，提早点击「登记」会没有数据。

如需在日终前完成公司行动，可以修改股权登记日为 4 月 7 日，重新点击「登记」拉取客户数据。

<img src="/assets/RQ3TbgmIUo6VFPxI4erczsgin0b.png" src-width="2131" src-height="849" align="center"/>

## 6D 问：派息金额跟系统派发的有差额，可以如何处理？

<b>答：</b>可以操作「尾差调整」输入实际派发金额。

(i). 在「公司行动」页面的操作栏点击「详情」。

<img src="/assets/S5uFbmgesorRnBxypOwcvpTbnLe.png" src-width="2816" src-height="1376" align="center"/>

(ii). 在“明细汇总”中点击「尾差调整」可选金额／份额，之后作「提交执行」。

<img src="/assets/TJwbbN0RXocnKOxBT4Fc58BmnT3.png" src-width="2084" src-height="1236" align="center"/>

## 6E 问：公司行动派发股息可以选择以不同货币收取？

答：在「方案信息」点击「编辑」，添加“BE-CASH DIVIDEND”的方案输入「汇率」及「派息率」（每股派发多少股息），再点击「重新登记」拉取到最新数据。

<img src="/assets/DaCwbe57CoUaUTx4KCpcs4O8n8e.png" src-width="2236" src-height="1490" align="center"/>

## 6F 问：如何为客户申购／修改供股权行权数量？

<b>答：</b>（i）「登记」成功后在「明细汇总」栏位看到可行权股票及客户数量。在「客户明细」可新增 或 在详情中编辑。

<img src="/assets/KXDxbuyXIoNgkVxvbUGcLKAbnXe.png" src-width="2367" src-height="1392" align="center"/>

(ii). 在「客户明细」栏位查看到合资格的派发客户。修改资料后，请点击「重新登记」刷新资料。确认资料无误点击「行权指令收集」进行下一步。


- 点击「新增」：可添加个别客户到派息名单；
- 点击「作废」：可删除客户
- 点击「详情」：可修改个别客户的收费信息 或 权益信息的转入份额

<img src="/assets/LFDKbNDhAo3ANTx442pczYLAnYD.png" src-width="2391" src-height="1438" align="center"/>

（iii） “行权信息”查到客户的行权数量，点击「行权」可作修改
“收费信息”查到该客户的公司行动费用，点击「编辑」可作调整

“权益信息”查到派出标的，点击「编辑」可修改

<img src="/assets/DAvIbn0YDoEvasx4UCEcj6MNnQf.png" src-width="1849" src-height="1390" align="center"/>

## 6G 问：如客户的供股权（RS 类）不作认购，系统会自动删除掉吗？

<b>答：</b>需要操作 DS 类别的公司行动回收股权。 

RS 类别处理的是已认购上报的，DS 类别处理的是未申请的股权。两个公司行动在 CCASS 处理的过程中，登记日期是不同的，DS 类别的会晚点生成。

## 6H 问：系统什么时候将打靶的牛熊证进行移除？

<b>答：</b> 新建公司行动时，根据有没有剩余价值选 TM 或者 DS 类别，然后选「登记日」输入上手提供的登记日。上手移除时，再完成公司行动以收回标的。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[72%]" width-ratio="72">
<img src="/assets/SgLlbByiIoNWS5x5yCvcKsJbnvh.png" src-width="2674" src-height="1226" align="center"/>
</div>
<div class="w-[27%]" width-ratio="27">
<img src="/assets/NYTRb6fL7objkyx7vPScVYNLnge.png" src-width="904" src-height="1126" align="center"/>
</div>
</div>

## 6I 问：公司行动操作「行权指令收集」出现报错，需要如何处理？

<img src="/assets/Re0LblRTUo4YavxzISQcTv3vnKf.png" src-width="2137" src-height="510" align="center"/>

<b>答：</b>操作「行权指令收集」需要在选择开始时间及结束时间之间。成功后，可以点击「提前完成指令收集」提早完成公司行动。
另外，时间段需逐步递进：选择开始时间＜选择结束时间＜选择结束时间（CCASS）。

## 6J 问：公司行动在那个报表显示出来？

<b>答：</b> 可以查看 SDR040 类别的报表。执行方式为“强制执行”的派息派股公司行动在 SDR040-09  Corporate Action Detail Report（BE/IP/SO）报表显示；
“可选择”的选股选息公司行动在 SDR040-10 Corporate Action Detail Report（BE With Selection）报表显示。

## 6K 问：哪类别的公司行动需要上报埸外证券交易汇报制度（OTCR）？

<b>答：</b>不收印花税的公司行动不需要上报埸外证券交易汇报制度（OTCR），现金要约类别的公司行动需要作上传，可使用报表 `SDR070 - OTCR Report`，注意需要<b>导出 EXCEL 档</b>才会展示要约收购的股份转让记录，页面查询和 CSV 导出不支持。

<img src="/assets/V9lRbpJyaoAH7DxBpLHcX5AnnWg.png" src-width="2042" src-height="808" align="center"/>

