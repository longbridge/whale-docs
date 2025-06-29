---
title: 2024-12-23 更新日誌
slug: KMI9w4Vw1id4n8kbkmscGlTVnMf
sidebar_position: 8
---


# 2024-12-23 更新日誌

# 🎉 新功能

- 新增到賬時間，預估費用配置
    - 對於客戶在 App 提交出金申請時對應的“到賬時間”以及“預估費用”提示內容，可根據客戶銀行卡、提交時間點、幣種以及出金範圍進行後臺區分配置
    - 路徑：證券後臺 - 業務參數設置 - 出金規則 - 出金參數
    - 權限 1：withdrawalparameter.withdrawal_parameter_query 出金參數查詢
    - 權限 2：withdrawalparameter.withdrawal_parameter_management 出金參數管理
    <img src="/assets/YNQ8bFwEZoP0JIxGMEIcs1bbnTd.png" src-width="3310" src-height="760" align="center"/>
    <img src="/assets/XmSwbr9vpo8nE3x78zpc1mO1ncg.png" src-width="3308" src-height="972" align="center"/>
    <img src="/assets/MB0Qb0MJcoSrX2x6FvicUhQhnKh.png" src-width="1386" src-height="1430" align="center"/>

- 借幣提醒快照查詢
    - 增加快照查詢功能，可查詢快照時刻的欠款/可兌換金額以及現金/餘額通數據。
    - 路徑：風控管理 - 授信額度 - 借幣提醒 - 快照
    - 權限：借幣提醒快照查詢：margin_call.risk_debt_snapshot
    <img src="/assets/B6XVbztqCoiaCSxbujmcrIRLnvh.png" src-width="3314" src-height="1558" align="center"/>

- 授信系數規則配置
    - 新增根據客戶淨資產水平設置差異化授信系數功能；若設置規則，則優先取滿足規則的授信系數，否則取默認設定。
    - 注：
    - 1）規則設定非必填項，根據實際業務需要配置
    - 2）若客戶淨資產水平滿足多個規則設定條件，則系統默認取第一條匹配到的規則。
    - 路徑：業務參數設置 - 風控 - 授信客戶參數
    <img src="/assets/LeK4buamfoGWg4xGMSUcx2OXn6f.png" src-width="3352" src-height="1622" align="center"/>

# 🪀 改进与修复

- 開戶認證方式變更後，對原本入金處理流程優化
    - 如果開戶認證方式變更時，客戶入金申請未關聯且能有對應的證券賬號，在開戶成功後客戶可在 App 進行撤銷；
    - 如果開戶認證方式變更時，客戶入金申請未關聯但無法對應到相應證券賬號，則後臺會有消息告警，根據告警信息在後臺可撤銷
    - 路徑 1：證券後臺 - 款項管理 - 入金 - 入金申請
    - 如果開戶認證方式變更時，客戶入金申請已匹配入賬且能有對應的證券賬號，在開戶成功後系統會自動將加款狀態“開戶入金處理中”更新爲“加款成功”
    - 如果開戶認證方式變更時，客戶入金申請已匹配入賬但無法對應到相應證券賬號，則後臺會有消息告警，根據告警信息在後臺可駁回操作
    - 路徑 2：證券後臺 - 款項管理 - 入金 - 開戶中入金
    <img src="/assets/JXTzbDjEkouxklxD9crcyG2Dnuh.png" src-width="3248" src-height="816" align="center"/>
    <img src="/assets/CH9xbRCito5cmTxO29Eccuqznie.png" src-width="3588" src-height="1236" align="center"/>
    <img src="/assets/QTgUb1Y2QoT0dlxzquHcRSyEnOc.png" src-width="3258" src-height="862" align="center"/>
    <img src="/assets/KlqQbob5CoEwo4xIFeLc0Mlonnb.png" src-width="3592" src-height="1280" align="center"/>

- 入金支持多家收款行配置
    - 在客戶選定銀行卡以及入金幣種之後，可以自主切換收款行，後臺可支持配置多家入金銀行。
    - 路徑：證券後臺 - 款項管理-App 管理 - 入金參數
    <img src="/assets/W1n3bA294ofhYYxKJgicr4d0nPc.png" src-width="3790" src-height="846" align="center"/>

- 換匯策略優化
    - 新接入的櫃檯公司會在初始化時新增一條默認的換匯策略
    - 換匯策略如果選定“服務策略=換匯池換匯”，則可以設置匯兌池是否攔截
        - 不攔截：是指客戶換匯在選定換匯池換匯後，無論剩餘額度是否充足，都可以繼續提交換匯，換匯成功後正常加減匯兌額度；
        - 攔截：是指客戶換匯在選定換匯池換匯後，需要判斷剩餘額度，目前線上邏輯
    - 【新建】和【編輯】操作新增“匯兌類型”和“服務策略”字段解釋
    - 匯兌策略的服務時段支持 7×24 配置
    - 匯兌策略的幣種對支持全量配置，全部幣種對來自「證券後臺 - 業務參數設置 - 匯兌 - 換匯策略」的配置
    - 【新建】操作的“匯兌類型”支持多選
    - 路徑：證券後臺 - 業務參數設置 - 匯兌 - 換匯策略
    <img src="/assets/HMhGbwnX6ot1ivxdJYncyK0gnvh.png" src-width="2862" src-height="1220" align="center"/>
    <img src="/assets/QNkObLuBIo1I1jxLV28cA4Ljnbf.png" src-width="906" src-height="1332" align="center"/>
    <img src="/assets/HOwdbBppkof9d9xFbBXcLicDnPd.png" src-width="2484" src-height="1332" align="center"/>

- 審核客戶銀行卡輸入的備註對接備註模板
    - 在後臺審核銀行卡，如果選擇【拒絕】，則人工輸入的備註可以從預設備註進行選擇。
    - 對於輸入的備註可以選擇客戶是否可見，如果選擇“可見”，則在推送審核結果的消息中會將備註帶給客戶；如果選擇“不可見”，則相應備註只能後臺看到，客戶在消息中看不到
    - 路徑 1：證券後臺 - 款項管理 - 客戶銀行卡
    - 拒絕客戶綁卡的預設備註可以在後臺進行自定義
    - 路徑 2：證券後臺 - 業務參數設置 - 備註模板
    <img src="/assets/JSx0b3GTyoR9w4xwN6XcarPanlz.png" src-width="2850" src-height="1214" align="center"/>
    <img src="/assets/TFvLb0HHmowzzvxydnFcT85znof.png" src-width="2862" src-height="1220" align="center"/>

- 銀行標準版模板支持多個文件導入
    - 對於入金賬單銀行標準模板單個文件導入的基礎上，可支持多個文件導入
    - 路徑：證券後臺 - 銀行賬單 - 入金賬單
    <img src="/assets/OgEcbDGY1o0MqYxpMTNcXeAKnZe.png" src-width="2850" src-height="680" align="center"/>
    <img src="/assets/VCPibkmk8oc4h5xcdqKcykJTnFc.png" src-width="2482" src-height="1338" align="center"/>

- 入金申請創建時間默認本週
    - 進入入金申請頁面創建時間默認本週，但可人工修改
    - 路徑：證券後臺 - 款項管理 - 入金 - 入金申請
    <img src="/assets/CUjebNYScodWiNxH7P4cWBgPnoq.png" src-width="2276" src-height="890" align="center"/>

- 將入金申請【更改】新增權限以及【查看備註】優化
    - 將入金申請【更改】新增權限，如未申請該更改權限，後臺無法看到對應操作按鈕
    - 添加備註支持附件導入
    - 路徑：證券後臺 - 款項管理 - 入金 - 入金申請
    - 權限：atm.deposit_request_change 入金申請更改
    <img src="/assets/JpXcbojFSoeT1hxsI4dcv94DnGd.png" src-width="3286" src-height="856" align="center"/>
    <img src="/assets/NhjqbM9ihoLHA9xNdqKcV5IXnsf.png" src-width="3302" src-height="1232" align="center"/>

- 業務碼分組更新選擇組件
    - 業務碼分組更新選擇組件
    - 路徑：資產賬戶 - 業務碼 - 業務管理
    <img src="/assets/EfMjbgKTCoB1XUxJ6aScV811nZT.png" src-width="3326" src-height="1610" align="center"/>

- 新增權限操作記錄
    - 1、路徑：全域設定 - 身分管理 - 權限操作記錄
    - 2、功能支援：支援管理員檢視、篩選使用者的
    - 權限/角色的歷史操作記錄

