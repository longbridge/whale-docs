---
title: 常见问题
slug: 2a05bab0c2cc81a0b6d2c2008e1e6d28
sidebar_position: 3
---


# 常见问题

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：提交出币申请时提示「余额不足」，但账户显示有足够余额，为什么？</p>
</div>

答：需区分「可用余额」与「冻结余额」：若资产处于「T+1 锁定期」（如新买入币种未满 24 小时）、参与理财产品未赎回，或有未完成交易订单，会显示冻结状态，仅可用余额可用于出币；此外，出币金额需包含网络手续费，若仅按可用余额全额填写，可能因扣除手续费后余额不足导致失败，建议预留少量余额抵扣手续费。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：新注册账户为什么无法发起出币？</p>
</div>

答：正规平台对新账户设有「风控观察期」（通常 7-10 个自然日），期间买入的加密货币暂无法转出，需等待观察期结束；此外，未完成高级 KYC 认证的账户，可能被限制出币功能，完成身份验证（如上传护照、地址证明）后即可解锁。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：出币时要求填写 Memo/Tag，漏填或填错会有什么后果？如何处理？</p>
</div>

答：XRP、XLM、EOS 等币种需填写 Memo/Tag 才能正常入账，漏填或填错会导致资产被接收平台暂存（不会丢失）。处理方式：联系接收方客服，提供「交易哈希（TXID）、出币地址、正确的 Memo/Tag 信息」，申请手动入账；建议复制地址时同步复制 Memo/Tag，并二次核对，避免出错。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：点击「确认出币」后页面卡住，未生成 TXID，是否需要重复提交？</p>
</div>

答：切勿重复提交！页面卡住可能是网络延迟或系统临时故障，此时申请可能已处于「待提交」状态。登录「出币→出币申请」查看状态：若显示「待提交」，耐心等待即可；若长时间无状态，退出账户重新登录，或清除浏览器缓存后查询，确认未提交再重新操作。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：出币状态显示「已完成」，但接收方未到账，怎么排查？</p>
</div>

答：分三步处理：① 用 TXID 在对应区块链浏览器查询，确认交易已被区块链确认（如 BTC 需 6 次确认）；② 若链上显示「成功」，联系接收方平台客服，提供 TXID 与接收地址，排查是否因接收方系统同步延迟导致；③ 若资产被退回（链上显示「Failed」），资金会自动返还至原出币账户，耐心等待 1-3 个小时即可到账。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：出币金额与接收方到账金额不一致，差额较大，是被平台扣除了吗？</p>
</div>

答：差额主要来源于两部分：① 网络手续费（矿工费），由区块链网络收取，从出币金额中自动扣除，费率随网络拥堵波动；② 接收方平台的「入币门槛」，若出币金额低于接收方最低入币限额（如 BTC 需≥0.001 BTC），可能被拒收并退回，退回时需再次扣除手续费，导致差额增大；建议出币前确认接收方的费率与限额规则。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：误将 ETH 转至 BTC 地址，或 ERC-20 网络的 USDT 转至 TRC-20 地址，资产能找回吗？</p>
</div>

答：此类「跨链 / 跨币种转账」因地址格式不兼容，资产会永久处于「不可用状态」，无法自动退回。可尝试两种方式：① 联系接收方平台客服，提供 TXID 与转账凭证，说明操作失误，询问是否可手动归还（成功率极低）；② 若转至个人错误地址，且拥有该地址的私钥，可通过对应网络的钱包导入私钥提取；建议转账前用二维码扫描地址，并核对地址前 5 位与后 5 位字符。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：WBO 工单显示「已通过」，但未触发链上交易，是什么原因？</p>
</div>

答：可能是平台「提现热钱包余额不足」，系统正在从冷钱包向热钱包划转资金，通常需要 15-30 分钟；此外，若此时对应区块链网络发生剧烈波动（如 Gas 费暴涨），系统会暂停交易发送，等待网络稳定后自动执行；可通过平台「钱包状态」页面查看热钱包余额，或联系客服查询交易排队情况。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>❓ 问：出币手续费可以手动调整吗？为什么有时手续费特别高？</p>
</div>

答：部分平台支持手动调整（如 Coinbase Pro 的「Advanced 选项」），费率越高，矿工打包优先级越高；手续费暴涨通常是区块链网络拥堵导致（如 ETH Gas 费超 150 Gwei），平台会动态调整默认费率以保证交易成功，建议避开交易高峰（UTC 时间白天）出币，或切换至 Layer2 网络（如 Arbitrum）降低费用。

