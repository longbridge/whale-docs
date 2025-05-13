---
title: 9. 公募／私募基金问题
slug: JDFXw8SxUi52hmkc9COczn0Jnah
sidebar_position: 8
---


# 9. 公募／私募基金问题

## 9A 问：为什么后台下基金订单不能撤单？

<b>答：</b>下单后可以马上撤单。如订单状况为“已日切”过了截止时间就不能作撤单。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[66%]" width-ratio="66">
<img src="/assets/IEwrbveUGo53AcxD47tcWQtlndh.png" src-width="2848" src-height="1634" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/SPr5bz4teoDas7xZsJRcheNrnTe.png" src-width="1352" src-height="1580" align="center"/>
</div>
</div>

## 9B 问：什么是 获取订单时间 和 自动回填时间？

<b>答：</b>“获取订单时间”是日切时间；“自动回填时间”只对系统接了上手 API 的才有作用。接了的，上手会在自动回填时间返回回填数值；没有接的，就需要在后台手动输入数据回填。

<img src="/assets/JPt5b0atXo6WEYxkxUtc2BRyn4c.png" src-width="2630" src-height="542" align="center"/>

## 9C 问：自动回填的时间如何输入？

<b>答：自动回填是针对有用 API 的场景</b>。不走 API 的，自动回填时间对租户不生效，可以跟获取订单时间一样。

<img src="/assets/IQTmbXkgZo1y3mx5b3WcS48Kn8g.png" src-width="2502" src-height="596" align="center"/>

## 9D 问：公募基金 及 私募基金 如何操作回填？

<b>答：</b>确认申购份额／赎回金额需根据上手给的结单或交易确认资料填写，如没有的数值可输入 0。

<img src="/assets/KUilb17Huo7kHTxcSxIcoB8snZd.png" src-width="2164" src-height="1198" align="center"/>

## 9E 问：接了 API 上架的基金，系统没有自动进行日切，能如何处理？ 

<img src="/assets/BmVtb4zJho0uGnxzeTMcnwTEnoc.png" src-width="2510" src-height="932" align="center"/>

<b>答：</b>系统会在每天的 8:00-22:00，每隔 5 分钟检查是否到达基金日切时间。请修改日切时间至 8:00-22:00 之间的时间段。（见 9E 图一、图二）

> 自动回填的检测时间也是相同的时间段（8:00 - 22:00）。

<img src="/assets/YXZpbOehDoQMZVx91rQcBBZPngh.png" src-width="2502" src-height="692" align="center"/>

<em>9E 图一</em>

<img src="/assets/Ouk2buPYhoVHv3xtkw4camMknIf.png" src-width="2170" src-height="1042" align="center"/>

<em>9E 图二</em>

## 9F 问：如何更新每日基金的价格？

<b>答：</b>在「基金管理＞公募基金／私募基金＞净值表」页面内作更新价格。

<img src="/assets/LjWObrztEoXdLTxtayVc9tMlnzb.png" src-width="2636" src-height="640" align="center"/>

## 9G 问：补回之前的基金净值，结单上会更新吗？

<b>答：</b>结单的基金净值生成是以自然日取值，即使修改历史基金净值也不会更新到。清算彻销重新生成的结单对过往记录不影响，仍然是取值该自然日前的基金净值。

> 例子说明：现在为 2 月 28 日，而基金净值的记录截取至 1 月 31 日。之后在 2 月 28 日更新之前的历史基金净值，重新生成的结单也是取值 1 月 31 日。修改历史基金净值重跑日终生成结单，也不会更新。

## 9H 问：<b>PI 认证如何影响到认购公募／私募基金？</b>

<b>答：</b>（i）公募基金：没有作 PI 限制，会以风险测评问卷限制认购基金。

（ii）私募基金：PI 认证后先可以认购；

前台 WTT 下单会提醒，客户不是 PI，但仍可为客户下单；

后台 WBO 没有校验，可以为客户下单；

App 的未作 PI 认购不能认购。          

## 9I 问：手工调账操作基金进出，会有什么限制？

<b>答：</b>基金手工调账，客户可在 APP 作赎回；在后台也可以操作认购／赎回订单。

> 后台「交易面板＞基金下单」只接受港元、美金的基金下单；
其他币种的基金，需在 WTT「基金管理＞基金列表」下单

## 9J 问：新建私募基金的「最少持仓份额」、「最少持仓金额」和「最少卖出份额」、「内部代码（来自上手）」是什么？

<img src="/assets/SDiMbyFuJoqE8sx6bcIcnJuwnJg.png" src-width="2842" src-height="1068" align="center"/>

<img src="/assets/EAiib3TWloSbNzxrM5vckVsLncc.png" src-width="2838" src-height="1050" align="center"/>

答：

「最少持仓份额」、「最少持仓金额」：限制客户出售基金数量、金额，须要持有一定数量的基金；

「最少卖出份额」：出售的基础值，类似股票手数的概念；

「内部代码（来自上手）」：租户自行选择用以识别标的的唯一码。

## 9K 问：基金合单交易中，为什么「基金清算」的总交易份额和所有客户分配的份额总和不一样？

<img src="/assets/HXiBbuVA0ovnMYx95kFc4mPrnkc.png" src-width="2866" src-height="964" align="center"/>

<img src="/assets/EdxYbzJbgogLa7xJtFPc4mYOnHb.png" src-width="2864" src-height="916" align="center"/>

答：系统现在计算基金合单交易的份额是以「个体客户的认购金额/总认购金额*基金净值」来计算，因此出现小数位差异。租户可以用手工调账方式帮助客户调整份额。

