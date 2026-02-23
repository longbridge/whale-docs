---
title: 常見問題
slug: 2a05bab0c2cc81a0b6d2c2008e1e6d28
sidebar_position: 3
---


# 常見問題

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> 問：提交出币申請時提示「餘額不足」，但賬戶顯示有足夠餘額，為什麼？</p>
</div>

答：需區分「可用餘額」與「凍結餘額」：若資產處於「T+1 鎖定期」（如新買入幣種未滿 24 小時）、參與理財產品未贖回，或有未完成交易訂單，會顯示凍結狀態，僅可用餘額可用于出币；此外，出币金額需包含網絡手續費，若僅按可用餘額全額填寫，可能因扣除手續費後餘額不足導致失敗，建議预留少量餘額抵扣手續費。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：新註冊賬戶為什麼無法發起出币？</p>
</div>

答：正規平台對新賬戶設有「风控觀察期」（通常 7-10 個自然日），期間買入的加密貨幣暫無法轉出，需等待觀察期結束；此外，未完成高級 KYC 認證的賬戶，可能被限制出币功能，完成身份驗證（如上传護照、地址證明）後即可解鎖。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：出币時要求填寫 Memo/Tag，漏填或填錯會有什麼後果？如何處理？</p>
</div>

答：XRP、XLM、EOS 等幣種需填寫 Memo/Tag 才能正常入賬，漏填或填錯會導致資產被接收平台暫存（不會丟失）。處理方式：聯繫接收方客服，提供「交易哈希（TXID）、出币地址、正確的 Memo/Tag 信息」，申請手動入賬；建議複製地址時同步複製 Memo/Tag，並二次核對，避免出錯。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：點擊「確認出币」後頁面卡住，未生成 TXID，是否需要重複提交？</p>
</div>

答：切勿重複提交！頁面卡住可能是網絡延遲或系統臨時故障，此時申請可能已處於「待提交」狀態。登錄「出幣→出幣申請」查看狀態：若顯示「待提交」，耐心等待即可；若長時間無狀態，退出賬戶重新登錄，或清除瀏覽器緩存後查詢，確認未提交再重新操作。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：出币狀態顯示「已完成」，但接收方未到账，怎麼排查？</p>
</div>

答：分三步處理：① 用 TXID 在對應區塊鏈瀏覽器查詢，確認交易已被區塊鏈確認（如 BTC 需 6 次確認）；② 若鏈上顯示「成功」，聯繫接收方平台客服，提供 TXID 與接收地址，排查是否因接收方系統同步延遲導致；③ 若資產被退回（鏈上顯示「Failed」），資金會自動返還至原出币賬戶，耐心等待 1-3 個小時即可到账。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：出币金額與接收方到账金額不一致，差額較大，是被平台扣除了嗎？</p>
</div>

答：差額主要來源於兩部分：① 網絡手續費（礦工費），由區塊鏈網絡收取，從出币金額中自動扣除，費率隨網絡擁堵波動；② 接收方平台的「入币門檻」，若出币金額低於接收方最低入币限額（如 BTC 需≥0.001 BTC），可能被拒收並退回，退回時需再次扣除手續費，導致差額增大；建議出币前確認接收方的費率與限額規則。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：誤將 ETH 轉至 BTC 地址，或 ERC-20 網絡的 USDT 轉至 TRC-20 地址，資產能找回嗎？</p>
</div>

答：此類「跨鏈 / 跨幣種轉賬」因地址格式不兼容，資產會永久處於「不可用狀態」，無法自動退回。可嘗試兩種方式：① 聯繫接收方平台客服，提供 TXID 與轉賬憑證，說明操作失誤，詢問是否可手動歸還（成功率極低）；② 若轉至個人錯誤地址，且擁有該地址的私鑰，可通過對應網絡的錢包導入私鑰提取；建議轉賬前用二維碼掃描地址，並核對地址前 5 位與後 5 位字符。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：WBO 工單顯示「已通過」，但未觸發鏈上交易，是什麼原因？</p>
</div>

答：可能是平台「提现熱錢包餘額不足」，系統正在從冷錢包向熱錢包劃轉資金，通常需要 15-30 分鐘；此外，若此時對應區塊鏈網絡發生劇烈波動（如 Gas 費暴漲），系統會暫停交易發送，等待網絡穩定後自動執行；可通過平台「錢包狀態」頁面查看熱錢包餘額，或聯繫客服查詢交易排隊情況。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：出币手續費可以手動調整嗎？為什麼有時手續費特別高？</p>
</div>

答：部分平台支持手動調整（如 Coinbase Pro 的「Advanced 選項」），費率越高，礦工打包優先級越高；手續費暴漲通常是區塊鏈網絡擁堵導致（如 ETH Gas 費超 150 Gwei），平台會動態調整默認費率以保證交易成功，建議避開交易高峰（UTC 時間白天）出币，或切換至 Layer2 網絡（如 Arbitrum）降低費用。

