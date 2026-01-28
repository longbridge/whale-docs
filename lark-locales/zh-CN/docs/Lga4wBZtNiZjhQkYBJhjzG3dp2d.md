---
title: 常见问题
slug: 2a05bab0c2cc81f09f40dc98b49f4ced
sidebar_position: 3
---


# 常见问题

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：客户说已转账成功，为什么后台查不到对应入币记录？</p>
</div>

答：先检查系统数据同步状态，可能存在 5-10 分钟延迟，刷新页面后再查；若仍无记录，核对客户入币地址是否已完成「认证与加白」，未通过会导致记录未被识别；最后用客户提供的 TXID 在区块链浏览器验证交易真实性。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：入币记录被标记「异常」，一般是什么原因？怎么处理？</p>
</div>

答：常见原因有 3 种：①地址格式无效（如比特币地址填成以太坊地址）；②交易哈希（TXID）不存在，可能是虚假交易；③入币金额低于平台最低门槛。处理方式：地址无效需通知客户重新提供正确地址；虚假交易直接删除记录；金额不足则告知客户补转或说明无法入账原因。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：想撤销未入币的记录，点击「撤销」按钮没反应，为什么？</p>
</div>

答：仅「钱包地址认证中」状态的记录可撤销。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：客户入币成功后申请退币，操作时提示失败，该怎么排查？</p>
</div>

答：分步骤排查：①核对客户提供的退币地址是否已完成「认证」，未认证地址无法接收退币；②确认退币网络与入币网络是否一致（如入币用 ERC-20，退币不可选 TRC-20）；

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：入币时不小心复制错地址，资产转到别人地址了怎么办？</p>
</div>

答：地址错转后，加密货币交易因区块链不可篡改特性，通常无法撤回。建议立即联系平台客服，提供「转出地址、错转目标地址、交易哈希（TXID）、转账时间」，尝试协助联络接收方；后续操作优先用二维码扫描地址，避免手动输入。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：明明选了对应币种，为什么转账后一直没到账？</p>
</div>

答：先核对「转出方与目标平台的网络是否一致」（如 USDT 转出选 ERC-20，目标地址需对应 ERC-20 网络），网络不匹配会导致资产无法到账；再用 TXID 在对应网络的区块浏览器查询交易状态，若交易已确认但未到账，联系目标平台客服协助排查。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：入币后长时间显示「确认中」，是卡住了吗？</p>
</div>

答：大概率是区块链网络拥堵，或转出时设置的手续费过低，导致矿工未优先打包。可通过 TXID 在区块浏览器查看「确认次数」，若确认次数未达平台要求（如 ERC-20 需 12 次确认），耐心等待即可；若手续费过低，联系转出方确认是否支持「加速交易」。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：转 XRP 时漏填标签（Tag），资产没到账怎么处理？</p>
</div>

答：XRP、XLM 等币种需填写标签才能正常入账，漏填会导致资产被平台暂存。此时需登录目标平台，找到对应入币记录，联系客服并提供「TXID、漏填的标签信息」，申请手动入账；后续操作记得同步复制标签，避免漏填。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：转账金额和到账金额不一样，少了一部分是怎么回事？</p>
</div>

答：少的部分通常是区块链网络手续费，转出时会从转出金额中自动扣除，属正常现象；若差额较大，检查是否低于平台「最低入币门槛」，低于门槛可能无法入账，需联系客服确认是否可补转差额后统一入账。

