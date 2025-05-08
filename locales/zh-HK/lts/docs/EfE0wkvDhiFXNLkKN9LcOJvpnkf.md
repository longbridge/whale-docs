---
title: 功能介紹
slug: EfE0wkvDhiFXNLkKN9LcOJvpnkf
sidebar_position: 2
---


# 功能介紹

## 客戶列表組件

### 客戶列表查詢

1. 打開「客戶列表」組件，支持三個維度的搜索條件
    1. 客戶搜索：可通過證券帳號、中文名、英文名、經紀人、證件 ID、手機號、郵箱
    2. 帳戶類型：Cash、Margin 帳戶
    3. 帳戶狀態：未激活、激活、系統賬號、輝立舊賬號、廢棄、凍結

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[84%]" width-ratio="84">
<img src="/assets/D3Onbq8jho8tPKxZ0Z1cMp5Wnze.png" src-width="2746" src-height="462" align="center"/>
</div>
<div class="w-[15%]" width-ratio="15">
<img src="/assets/F95ZbnM8FoPGSAxrHZgcZUKrnIc.png" src-width="634" src-height="598" align="center"/>
</div>
</div>

1. 列表默認展示當前交易員/經紀人管理的全部帳戶，可通過查詢條件篩選需查看的帳戶情況

## 客戶信息組件

1. 打開「客戶信息」組件，需要輸入“<b>證券賬戶</b>”後才可進行搜索，支持查看資產、持倉、訂單、流水等數據
2. 如帳戶通過手機號有綁定存在其他相關帳戶可直接進行切換查看
3. 功能模块概述
    1. 資產總覽：客戶資金數據，包含現金餘額、凍結金額等數據
    2. 客戶持倉：客戶持倉信息，包含持倉數量、市值、盈虧等數據
    3. 當日訂單：客戶當日交易訂單數據，支持多維度條件查詢
    4. 歷史訂單：客戶歷史交易訂單數據，可通過時間進行篩選
    5. 今日成交：依賴當日訂單成交數據，統計當日成交股票的成交數量、盈虧及均價
    6. 客戶資料：客戶基礎信息數據，包含住址、電話、經紀人等
    7. 交易通道：客戶不同市場的交易通道，對應 broker 的上手渠道
    8. 銀行卡：客戶已綁定的銀行卡信息
    9. 代理人信息：如客戶存在代理人時，該列表可查看所屬代理人基礎信息
    10. 聯名戶信息：如客戶存在聯名帳戶，可在該列表可查看聯名戶帳戶資料，包含基礎證件信息
    11. 交易權限：可查看客戶證券帳號交易權限，如需編輯需前往 WBO 後台客戶管理
    12. 融資狀態：客戶證券帳戶的融資情況，包含交易限額、融資額度及風控狀態
    13. 帳戶明細：客戶證券帳戶交易及現金流水流入流出情況
    14. 計費查詢：客戶當前帳號的收費情況，包含佣金、平台費等計費情況
    15. 授權人信息：如客戶存在交易授權人時，該列表可查看授權人基礎信息
    <img src="/assets/MOj2bifAnoD6VRxGbqrc45OxnGb.png" src-width="2634" src-height="914" align="center"/>

4. 設置功能：支持信息欄設置、客戶帳戶設置
    1. 信息欄設置：調整客戶信息組件上 Tab 的顯示 / 隱藏，及調整 Tab 使用順序
    2. 客戶帳戶設置：調整帳戶相關信息展示，是否需要展示聯名戶信息及帳戶信息展示格式，是否需要展示英文名
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <img src="/assets/PEd1blxYwo7jrCx2NDRcTPbEn4L.png" src-width="1374" src-height="922" align="center"/>
        </div>
    <div class="w-[49%]" width-ratio="49">
        <img src="/assets/G2PBb5Sdqofd44xlqUQcqq3xnrg.png" src-width="1376" src-height="940" align="center"/>
        </div>
    </div>

5. 客戶信息組件橫排、竪排樣式切換
    - 客戶信息組件支持切換橫排 / 竪排樣式，可通過右上角“···”快速切換使用！
        - 竪向排列樣式資產信息更緊湊，右側也增加了當日訂單的兩種狀態對比（進行中、已成交），更直觀通過一個竪向樣式查看到客戶的資產、持倉、訂單信息，功能更集中，使用更流暢
        - 切換至竪向排列樣式之後，後續新開的客戶信息組件均保留該樣式
        - 竪向排列樣式佔位面積相對較大，建議新開標籤頁進行使用，如在交易面板中進行切換可能會導致信息展示不全
            <img src="/assets/PA4PbxaAEoAEPgxyQ9Ocdb6qnRc.png" src-width="2746" src-height="528" align="center"/>
            <img src="/assets/BUMWbcQAno8K0txZEslcMxsXneg.png" src-width="2846" src-height="1590" align="center"/>
        - 竪向排列樣式設置功能說明：
            - 新增一個設置項，用於控制新開客戶信息組件是否跟隨以下的自訂設置，如選擇不跟隨則新開客戶信息組件時則打開默認的排列樣式
            - 顯示隱藏設置：與橫向排列樣式不同，竪向排列樣式中設置 Tab 操作隱藏，則表示收納僅下拉框中而不是不展示（橫向排列樣式則保留現有設置邏輯）
            <img src="/assets/HHsJbh7cJoPufExg9MocrQsTnDd.png" src-width="2128" src-height="800" align="center"/>
            
