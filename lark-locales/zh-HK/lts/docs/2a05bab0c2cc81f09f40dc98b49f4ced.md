---
title: 常見問題
slug: 2a05bab0c2cc81f09f40dc98b49f4ced
sidebar_position: 3
---


# 常見問題

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> 問：客戶說已轉賬成功，為什麼後台查不到對應入幣記錄？</p>
</div>

答：先檢查系統數據同步狀態，可能存在 5-10 分鐘延遲，刷新頁面後再查；若仍無記錄，核對客戶入幣地址是否已完成「認證與加白」，未通過會導致記錄未被識別；最後用客戶提供的 TXID 在區塊鏈瀏覽器驗證交易真實性。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：入幣記錄被標記「異常」，一般是什麼原因？怎麼處理？</p>
</div>

答：常見原因有 3 種：①地址格式無效（如比特幣地址填成以太坊地址）；②交易哈希（TXID）不存在，可能是虛假交易；③入幣金額低於平台最低門檻。處理方式：地址無效需通知客戶重新提供正確地址；虛假交易直接刪除記錄；金額不足則告知客戶補轉或說明無法入賬原因。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：想撤銷未入幣的記錄，點擊「撤銷」按鈕沒反應，為什麼？</p>
</div>

答：僅「錢包地址認證中」狀態的記錄可撤銷。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：客戶入幣成功後申請退幣，操作時提示失敗，該怎麼排查？</p>
</div>

答：分步骤排查：①核對客戶提供的退幣地址是否已完成「認證」，未認證地址無法接收退幣；②確認退幣網絡與入幣網絡是否一致（如入幣用 ERC-20，退幣不可選 TRC-20）；

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> 問：入幣時不小心複製錯地址，資產轉到別人地址了怎麼辦？</p>
</div>

答：地址錯轉後，加密貨幣交易因區塊鏈不可篡改特性，通常無法撤回。建議立即聯繫平台客服，提供「轉出地址、錯轉目標地址、交易哈希（TXID）、轉賬時間」，嘗試協助聯絡接收方；後續操作優先用二維碼掃描地址，避免手動輸入。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：明明選了對應幣種，為什麼轉賬後一直沒到賬？</p>
</div>

答：先核對「轉出方與目標平台的網絡是否一致」（如 USDT 轉出選 ERC-20，目標地址需對應 ERC-20 網絡），網絡不匹配會導致資產無法到賬；再用 TXID 在對應網絡的區塊瀏覽器查詢交易狀態，若交易已確認但未到賬，聯繫目標平台客服協助排查。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> 問：入幣後長時間顯示「確認中」，是卡住了嗎？</p>
</div>

答：大概率是區塊鏈網絡擁堵，或轉出時設置的手續費過低，導致礦工未優先打包。可通過 TXID 在區塊瀏覽器查看「確認次數」，若確認次數未達平台要求（如 ERC-20 需 12 次確認），耐心等待即可；若手續費過低，聯繫轉出方確認是否支持「加速交易」。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：轉 XRP 時漏填標籤（Tag），資產沒到賬怎麼處理？</p>
</div>

答：XRP、XLM 等幣種需填寫標籤才能正常入賬，漏填會導致資產被平台暫存。此時需登錄目標平台，找到對應入幣記錄，聯繫客服並提供「TXID、漏填的標籤信息」，申請手動入賬；後續操作記得同步複製標籤，避免漏填。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>問：轉賬金額和到賬金額不一樣，少了一部分是怎麼回事？</p>
</div>

答：少的部分通常是區塊鏈網絡手續費，轉出時會從轉出金額中自動扣除，屬正常現象；若差額較大，檢查是否低於平台「最低入幣門檻」，低於門檻可能無法入賬，需聯繫客服確認是否可補轉差額後統一入賬。

