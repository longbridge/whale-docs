---
title: 2024-04-08 更新日誌
slug: 24-04-08
sidebar_position: 30
---


# 2024-04-08 更新日誌

# 🎉 新功能

- 新增 SFC 要求的 Shortfall 壓力測試
    - 支持創建 Shortfall 壓力測試任務
    - 系統自動計算單一客戶是 Shortfall
    - 系統自動計算股票不可抵押後的 Shortfall 變化 Top 10
    - 路徑：「證券後台」-「風控管理」-「壓力測試」-「速動資金短欠」
    - 新增權限：
        - `risk.elc_test_management`
        - `lb_hk_margin_call.risk_monitoring_stock_level_query`
    <img src="/assets/O8d6biA5aovDjCxIQePcgCN8n5c.png" src-width="3740" src-height="1438" align="center"/>

- KYC 詳情頁導出的文件列表新增簽名文件
    - KYC 詳情頁導出的文件列表新增簽名文件
    - 路徑：「客戶管理系統」-「KYC」-「開戶審核」-「開戶列表」
    <img src="/assets/TY93bHsAlogu8jxM6Suc3AXynqc.png" src-width="2460" src-height="1090" align="center"/>

- 工單支持自定義默認審批流程
    - 在審批流程配置中，新增默認審批流配置的入口
    - 在具體的工單業務場景下，若工單審批流程未配置，則會取到默認審批流配置的流程
    - 配置路徑：「全局設置」-「身份管理」-「審批流程配置」-「默認審批流配置」
    <img src="/assets/ZqhBbdO5roHtaLxmTd1cSDDpnrP.png" src-width="2462" src-height="732" align="center"/>

- 工單新增業務分類及配置標識
    - 在工單的審批流程配置及詳情中，新增’業務分類‘字段的篩選和展示
    - 在工單的審批流程配置中，新增是否配置審批節點的標識
    - 已有的審批流程，可通過標識來檢查是否有正常配置審批節點
    - 路徑：「全局設置」-「身份管理」-「審批流程配置」
    <img src="/assets/GRGsbTe45o1OIox9K1PclzOOnEb.png" src-width="2540" src-height="919" align="center"/>

- 新增實驗室功能的開啓
    - 新增實驗室功能入口
    - 路徑：「全局頭像」-「實驗室功能」
    - 在實驗室功能內，可選擇開啓/關閉實驗室功能
        - 若選擇’開啓‘，則在相關的單個菜單頁面內，支持多窗口多標簽同時展示，且不同窗口間可以拖拽至任意位置，方便同時查看多條數據
        - 目前已支持的頁面：CRM-KYC-開戶列表，後續將持續新增
        - 若選擇’關閉‘，則不影響目前的使用
        <img src="/assets/GrPsbumgtoieVYxckpycV9MKnBe.png" src-width="2468" src-height="1010" align="center"/>
        <img src="/assets/YBjpbqNUCokxw3xpIIkcQRWHnPo.png" src-width="2834" src-height="845" align="center"/>

# 🪀 改進與修復

- 消息記錄查詢能力優化
    - 支持消息記錄導出
    - 支持通過發郵郵箱及證券賬號查詢記錄
    - 支持證券賬號、發郵郵箱展示
    - 路徑：「客戶管理系統」-「消息中心」-「消息模板」
    <img src="/assets/He7hbtZqIoATc0xtD6mczRzWnqb.png" src-width="3178" src-height="784" align="center"/>

- 出、入金對賬新增字段“賬務日期”
    - 出、入金對賬新增字段“賬務日期”
    <img src="/assets/Bre5bavteofJ14xJ7sIcnLjXnFe.png" src-width="2794" src-height="946" align="center"/>

- 已拒絕的入金憑證后台無感删除
- 用戶可以根據幣種對設定即可控制幣種的匯兌開關

