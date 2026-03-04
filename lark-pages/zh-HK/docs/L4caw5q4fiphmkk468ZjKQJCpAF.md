---
title: 頭寸管理
slug: L4caw5q4fiphmkk468ZjKQJCpAF
sidebar_position: 5
---


# 頭寸管理

# 系統介紹

本手冊針對法幣與加密貨幣頭寸管理業務的後台操作全流程進行規範說明，涵蓋頭寸查詢、調撥規則配置、自動調撥及手動調撥等核心操作環節，旨在指導後台操作人員規範開展工作，保障業務合規性與資金安全，規避操作風險。

# 前置条件

- 後台操作人員需使用專屬帳號及密碼登錄WBO後台系統，成功登錄後可進入以下核心模組：「虛擬資產管理 - 頭寸管理」「款項管理 - 銀行帳單 - 公司資金調撥」「業務參數設置 - 資金參數 - 結算渠道帳戶」「業務參數設置 - 資金參數 - 資金調撥配置」。
- 操作人員帳號需提前具備「頭寸管理」「公司資金調撥」「結算渠道帳戶」「資金調撥配置」相關操作權限；若帳號無對應權限，需及時聯繫系統管理員提交權限申請，待權限開通後方可開展操作。

# <b>操作路徑及權限說明</b>

- 以下為各核心模組的權限名稱、對應操作權限及權限標識，操作人員需根據自身權限開展對應操作，嚴禁越權操作。
    <table header_row="1">
    <colgroup>
    <col width="317"/>
    <col width="163"/>
    <col width="400"/>
    </colgroup>
    <thead>
    <tr><th><p>操作路径</p></th><th><p>權限說明</p></th><th><p>權限標識</p></th></tr>
    </thead>
    <tbody>
    <tr><td rowspan="2"><p>「虛擬資產管理 - 頭寸管理」</p></td><td><p>頭寸管理查詢</p></td><td><p>assets.position_anagement_inquiry_query</p></td></tr>
    <tr><td><p>頭寸管理操作</p></td><td><p>assets.position_anagement_inquiry_operation</p></td></tr>
    <tr><td rowspan="3"><p>「款項管理 - 銀行帳單 - 公司資金調撥」</p></td><td><p>公司資金調撥查詢</p></td><td><p>atm.company_fund_allocation_inquiry</p></td></tr>
    <tr><td><p>公司資金調撥操作</p></td><td><p>atm.company_fund_allocation_operation</p></td></tr>
    <tr><td><p>公司資金調撥審批</p></td><td><p>atm.company_fund_allocation_approval</p></td></tr>
    <tr><td rowspan="2"><p>「業務參數設置 - 資金參數 - 結算渠道帳戶」</p></td><td><p>結算渠道帳戶查詢</p></td><td><p>atm.settle_chnl_bank_acct_inquiry</p></td></tr>
    <tr><td><p>結算渠道帳戶操作</p></td><td><p>atm.settle_chnl_bank_acct_operation</p></td></tr>
    <tr><td rowspan="2"><p>「業務參數設置 - 資金參數 - 資金調撥配置」</p></td><td><p>資金調撥配置查詢</p></td><td><p>atm.funds_alloc_config_inquiry</p></td></tr>
    <tr><td><p>資金調撥配置操作</p></td><td><p>atm.funds_alloc_config_operation</p></td></tr>
    </tbody>
    </table>

# 操作說明

## <b>頭寸查詢操作</b>

- 登錄 WBO 後台系統，透過路徑「虛擬資產管理 - 頭寸管理」進入對應模組，執行查詢需具備權限標識：`assets.position_anagement_inquiry_query`
    - 進入模組後，可依業務需求篩選查詢條件（如更新時間、幣種、渠道帳號類型等），輸入對應參數後點擊「查詢」按鈕。
    <img src="/assets/JvHnbj8YfouixXx52kzjrLjlptc.png" src-width="3304" src-height="908" align="center"/>

- 若需在該模組執行後續操作，需額外申請操作權限：`assets.position_anagement_inquiry_operation`
    - 系統預設每 5 分鐘自動輪詢一次頭寸資訊；若需查詢當前渠道各帳戶、各幣種的即時餘額，可點擊【重新取得】按鈕手動更新。
        <img src="/assets/VE56bjkijol06yxt9w2jEAl2pof.png" src-width="3274" src-height="882" align="center"/>
    - 針對大額帳戶，可依實際需求分別配置提示頭寸與攔截頭寸：
        - 若已配置提示頭寸，當渠道可用餘額 ＜ 提示頭寸時，系統將依訊息訂閱設定自動發送告警通知。
            <img src="/assets/Ly2VbXlProjmRZx6aNlj0T8Ephd.png" src-width="3300" src-height="1316" align="center"/>
        - 若已配置攔截頭寸，當渠道可用餘額 ＜ 攔截頭寸時，系統將依訊息訂閱設定發送告警通知；若該帳戶用於出幣本金攔截或出幣手續費攔截場景，系統將在「虛擬資產管理 - 出幣 - 出幣申請」模組執行業務攔截，規則如下：
            1. 若出幣手續費帳戶頭寸不足，出幣申請工單無法審核通過，系統攔截並提示：「渠道帳戶該幣種手續費不足，請先進行資金調撥。」
            2. 若出幣本金帳戶頭寸不足，出幣申請工單無法審核通過，系統攔截並提示：「渠道帳戶該幣種本金不足，請先進行資金調撥。」
            3. 若本金與手續費帳戶同時頭寸不足，出幣申請工單無法審核通過，系統攔截並提示：「渠道帳戶該幣種本金及手續費不足，請先進行資金調撥。」
                <div class="flex gap-3 columns-2" column-size="2">
                <div class="w-[59%]" width-ratio="59">
                                <img src="/assets/FDsPb5B2coHNTNxL6vJjhxGlp4d.png" src-width="3330" src-height="1204" align="center"/>
                                </div>
                <div class="w-[40%]" width-ratio="40">
                                <img src="/assets/RT17bdPgGo98bMxOrZrjJuQAppf.png" src-width="3320" src-height="1752" align="center"/>
                                </div>
                </div>

## 結算渠道帳戶配置

- 執行頭寸調撥業務前，需先完成上游渠道帳戶資訊配置，配置生效後方可進行各帳戶間的資金轉帳操作。
- 登錄WBO後台系統，按照路徑「業務參數設置 - 資金參數 - 結算渠道帳戶」進入對應模組，執行配置操作需具備權限標識：`atm.settle_chnl_bank_acct_operation`。
    - 進入配置頁面後，可開展「新建」「編輯」兩類操作，具體流程如下：
        - 新建帳戶資訊：點擊「新建」按鈕，如實填寫結算渠道資訊（包括結算渠道、幣種類型、幣種）及大帳戶資訊（包括大帳戶號、業務場景），仔細核對所有參數無誤後提交保存，配置即時生效。
            <div class="flex gap-3 columns-2" column-size="2">
            <div class="w-[71%]" width-ratio="71">
                        <img src="/assets/DcAUbFQKko1yMMxjjwbjGoHup2b.png" src-width="3266" src-height="702" align="center"/>
                        </div>
            <div class="w-[28%]" width-ratio="28">
                        <img src="/assets/NnAobHohfoUEGIxkDNCjY3i6p3g.png" src-width="3198" src-height="1742" align="center"/>
                        </div>
            </div>
        - 編輯帳戶資訊：選中需修改的帳戶配置記錄，點擊「編輯」按鈕，根據實際業務需求調整相關參數，提交保存後將覆蓋原有配置；需重點關注配置修改後，對當前正在執行及即將開展的頭寸調撥業務可能造成的影響，避免出現業務異常。
            <img src="/assets/Q0f0bQx1joNLMgxSafWjC9K3pnb.png" src-width="3272" src-height="1738" align="center"/>

- 配置完成後，可通過具備權限標識 `atm.settle_chnl_bank_acct_inquiry` 的查詢權限，進入對應模組查詢已配置的所有帳戶資訊，逐項核對參數準確性，確保配置資訊與實際業務需求一致。
    <img src="/assets/N68rbPRwtoN33pxWH5Pj8fpypUs.png" src-width="3252" src-height="1744" align="center"/>

## <b>調撥規則配置</b>

- 為確保系統可自動執行資金調撥，需在後台提前配置自動調撥場景及對應規則。
- 登錄WBO後台系統，按照路徑「業務參數設置 - 資金參數 - 資金調撥配置」進入對應模組，執行規則配置操作需具備權限標識：`atm.funds_alloc_config_operation`。
    - 進入配置頁面後，可進行「新建規則」「編輯規則」「復制規則」三類操作，具體流程如下：
        - 新建規則：點擊「新建」按鈕，選擇調撥類型為「結算帳戶間劃轉」、出帳通道為「settlement_hashkey_hk」，並根據不同業務場景，配置對應的自動劃轉規則，確認參數無誤後提交保存。
            <div class="flex gap-3 columns-2" column-size="2">
            <div class="w-[69%]" width-ratio="69">
                        <img src="/assets/FsIebL48bolN9SxMmrCjJv4jpvf.png" src-width="3320" src-height="1564" align="center"/>
                        </div>
            <div class="w-[30%]" width-ratio="30">
                        <img src="/assets/Flvrbr6xAoxD4oxzshhjvwQxpAb.png" src-width="3248" src-height="3560" align="center"/>
                        </div>
            </div>
        - 編輯規則：選中需修改的調撥規則，點擊「編輯」按鈕，根據業務調整需求修改相關參數，提交保存後將覆蓋原有規則；需重點關注規則修改後，對現有正在執行的自動調撥業務及後續業務的影響，避免引發業務異常。
            <img src="/assets/ACocb5IzQo8C3HxXArPjJG2kpIe.png" src-width="3298" src-height="734" align="center"/>
        - 復制規則：可選中現有已配置的規則，點擊「復制」按鈕，在原有規則基礎上修改相關參數，簡化新建規則的操作流程，提高配置效率。
            <img src="/assets/F4MHbgyuko8tufxieWRjwAiDpBh.png" src-width="3298" src-height="734" align="center"/>

- 規則配置完成後，可通過具備權限標識 `atm.funds_alloc_config_inquiry` 的查詢權限，進入對應模組查詢已配置的所有調撥規則，逐項核對參數準確性，確保規則配置符合業務自動調撥需求。
    <img src="/assets/DaZqbyxfvop6Qpx7ryyjqe1OpJg.png" src-width="3320" src-height="1564" align="center"/>

## <b>自動調撥操</b>

- 自動調撥需提前完成「資金調撥配置」（參考4.3章節），系統將根據預先配置的觸發條件，自動執行調撥操作，無需人工干預。目前觸發自動調撥的場景包括以下兩大類：
    - 定時任務劃轉：支持配置定時任務（如每日凌晨），按預設規則將富餘資金在入幣帳戶、交易帳戶等之間自動劃撥；可支持的定時類型為：自然日、港股交易日、週。
    - 事件觸發劃轉：
        - 頭寸不足時：「虛擬資產管理 - 頭寸管理」中，對應大帳戶的相應渠道可用餘額 ＜ 攔截頭寸時，系統會根據該大帳戶匹配「業務參數設置 - 資金參數 - 資金調撥配置」；若存在已啟用的規則（劃撥策略=自動、狀態=已啟用且優先級最高），則系統會依據該規則自動發起調撥；若因出帳帳戶餘額不足導致自動調撥失敗，後續需手動發起劃轉。
        - 出幣提交時(本金)：「虛擬資產管理 - 出幣 - 出幣申請」生成出幣申請時，針對本金部分，系統會匹配「業務參數設置 - 資金參數 - 資金調撥配置」；若存在已啟用的規則（劃撥策略=自動、狀態=已啟用且優先級最高），則系統依據規則自動發起調撥；若因出帳帳戶餘額不足導致調撥失敗，後續需手動發起劃轉。
        - 出幣提交時(手續費)：「虛擬資產管理 - 出幣 - 出幣申請」生成出幣申請時，針對手續費部分，系統會匹配「業務參數設置 - 資金參數 - 資金調撥配置」；若存在已啟用的規則（劃撥策略=自動、狀態=已啟用且優先級最高），則系統依據規則自動發起調撥；若因出帳帳戶餘額不足導致調撥失敗，後續需手動發起劃轉。
        - 出幣失敗時(本金)：「虛擬資產管理 - 出幣 - 出幣申請」出幣申請失敗時，針對本金部分，系統會匹配「業務參數設置 - 資金參數 - 資金調撥配置」；若存在已啟用的規則（劃撥策略=自動、狀態=已啟用且優先級最高），則系統依據規則自動發起調撥；若因出帳帳戶餘額不足導致調撥失敗，後續需手動發起劃轉。
        - 出幣失敗時(手續費)：「虛擬資產管理 - 出幣 - 出幣申請」出幣申請失敗時，針對手續費部分，系統會匹配「業務參數設置 - 資金參數 - 資金調撥配置」；若存在已啟用的規則（劃撥策略=自動、狀態=已啟用且優先級最高），則系統依據規則自動發起調撥；若因出帳帳戶餘額不足導致調撥失敗，後續需手動發起劃轉。
        - 入幣成功時：「虛擬資產管理 - 入幣 - 入幣記錄」顯示入幣成功時，系統會匹配「業務參數設置 - 資金參數 - 資金調撥配置」；若存在已啟用的規則（劃撥策略=自動、狀態=已啟用且優先級最高），則系統依據規則自動發起調撥；若因出帳帳戶餘額不足導致調撥失敗，後續需手動發起劃轉。

- 操作人員可通過「款項管理 - 銀行帳單 - 公司資金調撥」模組（需具備對應atm.company_fund_allocation_inquiry查詢權限），查看自動調撥的執行記錄，包括調撥時間、金額、幣種、發起帳戶、接收帳戶、業務單號等核心資訊，便於追溯核查。
    <img src="/assets/SQE8bIDDaol8f7xxalijPBKhpfc.png" src-width="3294" src-height="670" align="center"/>

- 若自動調撥失敗，系統將明確提示失敗原因（如帳戶餘額不足等）；操作人員需及時排查問題，調整對應規則或補充資金後，可手動觸發重試（需具備「款項管理 - 銀行帳單 - 公司資金調撥」對應操作權限），確保資金調撥順利完成。
    <img src="/assets/Q9HEb3JVIoSKMsx3A88jmqIPpTf.png" src-width="3304" src-height="852" align="center"/>

## <b>手動調撥操作</b>

- 登錄WBO後台系統，按照路徑「款項管理 - 銀行帳單 - 公司資金調撥」進入對應模組，執行手動調撥操作需具備權限標識：`atm.company_fund_allocation_operation`。
    - 點擊「新建」按鈕，如實填寫調撥相關資訊，包括發起帳戶、接收帳戶、調撥幣種、調撥金額、調撥備註（需明確註明調撥原因，便於後續追溯核查），仔細核對所有資訊無誤後提交。
        <div class="flex gap-3 columns-2" column-size="2">
        <div class="w-[84%]" width-ratio="84">
                <img src="/assets/JqFVbDNxmoevCmxGIdAjsFgVphb.png" src-width="3296" src-height="694" align="center"/>
                </div>
        <div class="w-[15%]" width-ratio="15">
                <img src="/assets/VrEebTP1fo3AtQxXRq9jB6RBp1g.png" src-width="2856" src-height="3348" align="center"/>
                </div>
        </div>

- 人工通過「新建」按鈕提交的調撥申請，或根據「業務參數設置 - 資金參數 - 資金調撥配置」中，審核策略為「工單審核」的調撥申請，將自動進入審批流程；需由具備權限標識 `atm.company_fund_allocation_approval` 的審批人員進行審核：
    - 審核通過後，系統將自動執行調撥操作；
    - 審核駁回的，該次調撥申請失敗，若仍需進行對應資金調撥，需重新發起手動調撥申請。
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[76%]" width-ratio="76">
        <img src="/assets/Lj1tbnlHwobHV9xWVRZjw80qpcc.png" src-width="3286" src-height="686" align="center"/>
        </div>
    <div class="w-[23%]" width-ratio="23">
        <img src="/assets/LYS6b3NN8oCOTlxo1TYj6zf2pPR.png" src-width="2514" src-height="1758" align="center"/>
        </div>
    </div>

- 調撥操作完成後，操作人員可通過具備權限標識`atm.company_fund_allocation_inquiry` 的查詢權限，查看手動調撥的執行狀態、記錄詳情，逐項核對相關數據，確保調撥流程合规、數據準確無誤。
    <img src="/assets/UVc7b9jqSo884XxDcoIjZQzLpJd.png" src-width="3284" src-height="1166" align="center"/>

# <b>注意事項</b>

- 操作人員需妥善保管帳號密碼，嚴禁轉借他人使用，登錄後及時鎖定系統，退出時需正常登出，防止帳號被盜用導致資金風險。
- 所有操作需嚴格按照本手冊規範執行，嚴禁越權操作、違規調撥；操作過程中需仔細核對相關參數（如帳戶資訊、金額、幣種），避免操作失誤。
- 調撥規則配置、手動調撥等關鍵操作，需做好記錄留存，便於後續審計核查；若發現異常情況（如頭寸異常、調撥失敗、數據不符），需及時上報管理員，嚴禁隱瞞。
- 系統權限變更需由管理員統一操作，操作人員若需調整權限，需提交正式申請，經審批通過後生效；權限變更後，需及時熟悉新權限對應的操作範圍。
- 法幣與加密貨幣頭寸變動敏感，操作人員需即時關注頭寸狀態，尤其是自動調撥觸發閾值附近的頭寸餘額，提前做好資金籌備，避免因頭寸不足影響業務正常開展。

