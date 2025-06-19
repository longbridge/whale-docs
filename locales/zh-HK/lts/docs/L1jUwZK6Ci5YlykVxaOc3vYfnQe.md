---
title: 2024-06-11 更新日誌
slug: 24-06-11
sidebar_position: 26
---


# 2024-06-11 更新日誌

# 🎉 新功能

- <b>各種記賬數據源業務類型配置化</b>
    - 各種記賬數據源業務類型配置化後，可根據公司自身記賬需求配置各種業務類型是否記賬
    - 權限
        - `book.booking_types_query`會計業務類型查詢
        - `book.booking_types_update`會計業務類型修改
    <img src="/assets/UCTkbGJUSogFK6xmOz2c0d7onsh.png" src-width="3810" src-height="960" align="center"/>

- <b>支持批量修改更多郵箱的值</b>
    - 修改路徑：「客戶管理系統」-「賬戶管理」-「工單中心」-「客戶/賬戶信息」-「修改聯系方式」-「修改內容：更多聯系郵箱」
    - 支持單個新建或批量導入修改更多聯系郵箱，審核通過後，修改成功
    - KYC 詳情頁的更多郵箱的修改入口做隱藏，統一移至工單中心修改
    - 新增工單標識：`crm.edit_account_more_email`
    <img src="/assets/TRRQbABeqoPnygx4ObDcvpRkn5d.png" src-width="2612" src-height="1390" align="center"/>

# 🪀 改進與修復

- <b>M</b><b>argin </b><b>C</b><b>all</b><b> </b><b>平倉下單彈窗頁面優化</b>
    - 平倉下單彈窗頁面優化
        - 所有平倉彈窗頁面增加買一/賣一價，支持手動刷新價格
        - 美股限價單均支持選擇交易時段，在現有基礎上補充支持「融券持倉概覽」和「空頭股票追收」菜單
        - 增加展示預估減少追繳金額信息，便於平倉參考（不含「融券持倉概覽」和「股票追收」菜單）
    - 「日內融實時預警」「平倉訂單」菜單列表頁面增加自訂義列表功能
    - 平仓订单支持证券代码搜索
    - 路徑：「風控管理」-「Margin Call」
    <img src="/assets/ZxS9b96uioF7s8x6UvFc3jOjnGf.png" src-width="3742" src-height="1590" align="center"/>

- <b>會計中臺新增報表導出-Sage300 AOM（GL）</b>
    <img src="/assets/BlbNbqckZoZ48YxgpTIcX5lhnlr.png" src-width="3804" src-height="1772" align="center"/>

- <b>Margin Call 詳情增加基金持股市值及基金持倉明細</b>
    - 頁面依本位幣彙整所有基金持股的市值
    - 可單獨查看基金持倉明細
    <img src="/assets/F2gObrA5Qov0rEx8QI9cg90zn2d.png" src-width="2838" src-height="1340" align="center"/>

- <b>集中度壓力測試新增 PDF 列印功能</b>
    - 新增 RDR039 報表，記錄壓力測試結果
    - 可單獨在壓力測試明細頁面匯出指定結果
    <img src="/assets/KJKkbM2O0owgksxLCyHcMgBCnRc.png" src-width="2806" src-height="1238" align="center"/>

- <b>Dashboard</b><b> </b><b>頁面增加結單待發送數據查看</b>
    - Dashboard 頁面增加【結單待發送】數據展示，數據統計為存量所有待發送結單
    <img src="/assets/TnTkb5NiUoC5YUxosaecUpDJnQe.png" src-width="3232" src-height="830" align="center"/>
    
