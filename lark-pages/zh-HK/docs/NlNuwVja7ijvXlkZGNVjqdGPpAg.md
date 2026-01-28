---
title: 2025-03-24 更新日誌
slug: X7tYw1V0Ki7ScLkzM6acdKqRnDb
sidebar_position: 11
---


# 2025-03-24 更新日誌

# 🎉 新功能

- 新增未來賬務日期查詢功能及日終界面優化
    <img src="/assets/ZdEbbEaWYoNFPux8J0Vjd4rDpsg.png" src-width="2846" src-height="1358" align="center"/>
    - 未來賬務日期查詢：在當前賬務日期旁點擊「更多」，即可查詢未來賬務日期
    - 新增單步執行功能，適用於費用修改場景
    - 對日終任務頁面進行了細節優化，提升用戶體驗
    - 路徑：清算管理 - 日終任務

- 個性化收費支持添加客戶及客戶計費查詢優化
    <img src="/assets/IBoDbkuDhok57LxqqOnjVzaApgg.png" src-width="2846" src-height="1358" align="center"/>
    <img src="/assets/Wf5nbkLp4oNcPhxSLrLjokoUp9f.png" src-width="2846" src-height="1358" align="center"/>
    <img src="/assets/Oo9mb3aOjoQlerxai4pjlukWpGe.png" src-width="2846" src-height="1358" align="center"/>
    - 個性化收費支持添加客戶，減少重複配置
    - 查詢到客戶計費配置信息後，可直接修改收費配置
        - 可變更客戶的計費套餐（原客戶組計費）
        - 可變更客戶的個性化收費（原客戶計費）：可綁定到已有的個性化收費，可複製已有的收費規則
    - 界面其他細節優化
        - 客戶計費查詢支持分組展示
        - 點擊刷新配置可將修改的收費配置提前生效
    - 路徑：業務參數設置 - 計費管理
    - 注意：上線後客戶組計費將更名為套餐收費，客戶計費將更名為個性化收費

- 新增債券利率管理功能
    <img src="/assets/YzEJbcYU0o2gjax8xqijixzgpef.png" src-width="2846" src-height="1358" align="center"/>
    <img src="/assets/P0fobiHyQoG5ggxbI5PjDnSKppb.png" src-width="2846" src-height="1358" align="center"/>
    - 券商可自行維護債券利率，靈活管理債券相關數據
    - 收盤價管理功能升級爲基礎信息管理，新增更多公有庫字段的臨時維護能力
    - 路徑：清算管理 - 清算標的
    - 注意1：後續如果有新的可交易債券上市，券商需人工在此添加標的
    - 注意2：原來的收盤價管理功能將下線

- BE類公司行動新增在途資金展示
    <img src="/assets/Tkj1b750Po8A9xxD0fFjt5Sgp4q.png" src-width="2846" src-height="1358" align="center"/>
    - BE類公司行動在執行前，將客戶的資金展示在在途資金頁面，使其避免誤觸發保證金追加通知（margin call），此功能有助於客戶更清晰地瞭解其資金狀況，避免因資金不足而意外觸發保證金追加通知
    - 注意：若預告登記後未執行，請及時撤銷預告，以免造成客戶購買力虛增

# 🪀 改進與修復

- 出金申請新增反洗錢（AML）審核流程
    <img src="/assets/InlDbQctPohfmLxd9Vaj3XbKpae.png" src-width="2848" src-height="1322" align="center"/>
    - 出金申請支持根據風控規則進行標記，規則包括：首張銀行卡、手工提現、融資出金、標記客戶轉人工、未入金且首次出金轉人工、開戶至今無交易
    - 所有出金申請均可配置自動審核規則，支持自動提交、自動駁回或人工提交是否需要工單的設置
    - 路徑
        - 證券後臺-款項管理-出金-出金申請
        - 證券後臺-業務參數設置-出金規則-自動審核規則
    - 注意
        - 如租戶未設定任何規則，則所有的出金申請都需要人工審批
        - 對於目前線上已經自動提交的租戶，在需求上線時，系統會自動生成一條自動提交的自動審核規則

- 出入金方式-eDDA後臺交互以及功能優化
    <img src="/assets/IxTvbo5oGo0BzmxM3eKjVcNep3c.png" src-width="2846" src-height="1358" align="center"/>
    - 新增字段：客戶端是否展示、是否刪除
    - 合併展示信息：公司銀行賬戶、客戶證件信息、客戶銀行卡、銀行返回信息
    - 新增操作：後臺人工刪除記錄（需工單審批）
    - 路徑：證券後臺 - 款項管理 - 出入金方式 - eDDA

- 自動還款開通記錄優化
    <img src="/assets/C58lbdYRPo7FLnx3Obrj9UUHpKd.png" src-width="2848" src-height="1322" align="center"/>
    - 記錄所有使用過自動還款功能的客戶，展示其當前狀態及最新狀態更新時間
    - 路徑：風控管理 - 授信額度 - 借幣提醒 - 自動還款開通查詢

- 借幣提醒歷史記錄詳情優化
    <img src="/assets/PH9DbBFWVozWb7xxH4Dj9W8ApUf.png" src-width="2848" src-height="1322" align="center"/>
    - 借幣提醒歷史記錄詳情更新爲彈窗展示，包含消息記錄和兌換記錄
    - 路徑：風控管理 - 授信額度 - 借幣提醒 - 歷史記錄

- CCASS匯率開放編輯
    <img src="/assets/Ncl4beGmgowjo8xidimj5qeEpff.png" src-width="2846" src-height="1358" align="center"/>
    - CCASS匯率管理功能更新：支持人工編輯和新建操作
    - 路徑：證券後臺 - 款項管理 - 換匯 - 參考匯率

- 出入金以及轉倉各幣種精度遷移到幣種配置
    <img src="/assets/DR1FbXM32oxMGWxJ6ZNje2wmplc.png" src-width="2848" src-height="1340" align="center"/>
    - 支持配置金額精度及金額取數邏輯
    - 新增相關字段解析
    - 路徑：證券後臺-業務參數設置-資金參數-幣種

- 換匯匯率精度統一配置
    <img src="/assets/MuLGbsVuooP2ZuxebzgjymTIpMg.png" src-width="2848" src-height="1322" align="center"/>
    - 在需要使用匯率的場景，參與計算以及展示的匯率精度取自兌出幣種的配置，最大可支持 10 位
        - 例如：HKD 換 USD 時，由於 HKD 匯率精度配置爲 6 位，那麼HKD兌換爲USD的匯率爲 0.123456
    - 路徑：證券後臺-業務參數設置-資金參數-幣種
    - 注意：該精度設置目前僅適用於客戶換匯業務，暫不涉及清算、報表或交易等其他場景

- 渠道匯兌異常單複覈接入工單
    <img src="/assets/NVBobyrKRoDYL3xxePSjrCeKpFb.png" src-width="2652" src-height="1544" align="center"/>
    - 渠道換匯異常單操作【轉成功】、【再匯兌】、【轉失敗】提交之後接入工單
    - 路徑：證券後臺-款項管理-換匯-渠道換匯

