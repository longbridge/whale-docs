---
slug: 24-05-20
title: 2024-05-20 更新日誌
sidebar_position: 28
---


# 2024-05-20 更新日誌


# 🎉 新功能

- 新增會計通用報表導出 - 根據業務分類
    - 新增會計通用報表導出 - 根據業務分類

    ![image.png](/assets/07a720e1f54663f8ddf8edf1ca06fcf4.png)

- 支持批量出金
    - 系統預置範本，補充範本中的欄位可以實現單次多筆出金申請生成
    - 批量出金：atm.import_batch_withdraw

    ![image.png](/assets/8437fd4d33c8479fef49b7ee5b539853.png)

- 客戶層空頭保證金比例設置
    - 客戶保證金新增空頭保證金比例設置
    - 1、客戶保證金下拆分 tab：空頭股票、多頭股票
    - 2、客戶空頭保證金股票賣空狀態與空頭股票保證金（菜單：股票保證金 - 空頭保證金）可賣空狀態同步
    - 3、保證金比例邏輯：若存在客户空头保证金比例，则优先取客户空头保证金设置；否則取空頭股票保證金
    - 路徑：「風控管理」-「保證金」-「客戶保證金」-「空頭股票」
    - 客戶空頭保證金查詢：`margin_ratio.account_short_query`
    - 客戶空頭保證金操作：`margin_ratio.account_short_operation`

    ![image.png](/assets/0f4aeb4c52f5d3f5ca35ee791a08666e.png)

- Whale 首頁快捷入口功能發佈
    - 跨多系统处理业务不方便？浏览器书签太多难管理？
    - 控制台首页 - 快捷入口，让你更专注、更高效！

    ![image.png](/assets/d588ebeb942e0cce01dee0ea38acd0dc.png)

- 計費支持浮動利率功能
    - 融資利息支持浮動利率功能
    - 路徑：業務參數設置 - 計費管理

    **基準利率的維護**

    - 在收費場景頁面點擊邊界，並調整基準費率字段
    - 調整基準利率之前可通過 SDR065-01 報表判斷是否有基點設置過低
    - 注意：輸入的值不帶%。例子：6% 輸入，0.06

    ![存款利息和融資利息的支持該字段設置](/assets/e8fd960bed6b7d0d451a153cfa644204.png)


    ![image.png](/assets/43a0af3ed3f8a5fe82b85892730c6fee.png)


    ![調整基準利率之前可通過 SDR065-01 報表判斷是否有基點設置過低](/assets/5370958b341d7bca4da1f91e3c3343f3.png)


    **基點的设置**

    - 在客户组计费、客户计费頁面，选择浮动费率并输入基点。最终使用的利率=基点 + 基准费率
    - 注意：_1bp 输入 0.0001_

    ![image.png](/assets/2a50c676dc3e0cb536c7c7e43539eac2.png)

- 客戶組計費和客戶計費接入工單
    - 注意 1：新增的數據在審批後才生效
    - 注意 2：編輯的數據在審批後才生效，審批通過前，收費以原數據為准
    - 注意 3：刪除的數據在審批後才失效，審批通過前，收費以原數據為准

    新增審批項目如下：


    | 標題                    | 標題（EN）                                                                    | 工單標識                           | 未設置審批流程  | 工单审批案例 |
    | --------------------- | ------------------------------------------------------------------------- | ------------------------------ | -------- | ------ |
    | 計費管理 - 客戶群組計費配置 - 新增      | Billing Management-Rate Setups (By Group) -New                            | billing_package_add            | 超級管理員審批  |        |
    | 計費管理 - 客戶群組計費配置 - 編輯      | Billing Management-Rate Setups (By Group) -Edit                           | billing_package_edit           | 超級管理員審批  |        |
    | 計費管理 - 客戶群組計費配置 - 刪除      | Billing Management-Rate Setups (By Group) -Delete                         | billing_package_del            | 超級管理員審批  |        |
    | 計費管理 - 客戶計費配置 - 新增        | Billing Management-Rate Setups (By Client)-New                            | billing_level_fee_add          | 超級管理員審批  |        |
    | 計費管理 - 客戶計費配置 - 編輯        | Billing Management-Rate Setups (By Client)-Edit                           | billing_level_fee_edit         | 超級管理員審批  |        |
    | 計費管理 - 客戶計費配置 - 刪除        | Billing Management-Rate Setups (By Client)-Delete                         | billing_level_fee_del          | 超級管理員審批  |        |
    | 計費管理 - 客户組配置 - 客户組變更（添加）  | Billing Management-Rate Setups (By Group) -Change client group (add)      | billing_package_aaid_add       | 超級管理員審批  |        |
    | 計費管理 - 客户組配置 - 變更客户組（移出）  | Billing Management-Rate Setups (By Group) -Change client group (move out) | billing_package_aaid_del       | 超級管理員審批  |        |
    | 計費管理 - 客户組配置 - 批量變更客户組    | Billing Management-Rate Setups (By Group) -Batch client  change group     | billing_package_aaid_add_batch | 超級管理員審批  |        |


# 🪀 改進與修復

- 「銀行賬單」功能優化
    - 「銀行賬單」功能優化，具體包括如下優化內容：
    - 1）入金賬單自動同步整合賬單的標籤
    - 2）入金賬單設置可組合判斷
    - 3）出金賬單自動關聯提現單新增證券賬號匹配規則
    - 4）自動打標規則中的銀行附言新增模糊匹配

    ![image.png](/assets/d3a933eeef350f59763346694079f73f.png)

- 異常數據源 UI 優化
    - 異常數據源 UI 優化，具體包括如下優化內容：
    - 1）新增業務類型、幣種、金額展示
    - 2）篩選字段以及列表頁面刪除“標的”
    - 3）異常數據源單號 統一改爲 原始憑證號
    - 4）異常數據源中的賬務日期採用 YY-MM-DD 的格式，去掉時分秒

    ![image.png](/assets/d7bec0dfee202b376ac58e30df251a27.png)

- 支票打印新增日期查詢條件
    - 新增日期查詢條件

    ![image.png](/assets/fbf4dff3fbe596c8a4fc171c9fabcf48.png)

- 支持新股扣款、公佈中簽選擇指定帳務日期
    - 支持新股扣款、公佈中簽選擇指定帳務日期

![image.png](/assets/e6037c427459d43ff4484de5812a5686.png)

- 線下開戶中國大陸證件簽發地新增支持選擇護照開戶
    - 線下開戶流程中，若證件簽發地選擇了‘中國大陸’，則在證件類型中，支持選擇‘身份證’或‘護照’
    - 路徑：「客戶管理系統」-「KYC」-「資料管理」-「開戶資料」-「添加開戶申請」
    - 支持的客戶類型：個人戶、聯名戶

![image.png](/assets/ca94a151defdd0d87ab5d1434579b17c.png)

