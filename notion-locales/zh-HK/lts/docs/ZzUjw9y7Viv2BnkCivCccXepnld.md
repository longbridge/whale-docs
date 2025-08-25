---
slug: 24-03-18
title: 2024-03-18 更新日誌
sidebar_position: 35
---


# 2024-03-18 更新日誌


# 🎉 新功能

- 支持港股國配
    - IPO 支持港股國配
    - 路徑：「新股認購」-「新股認購」-「港股國配」

    ![image.png](/assets/396937ad7a203d30c2f8dbe64a3b9a21.png)

- 新增客戶組及客戶保證金應用客戶組功能
    - 新增客戶組，支持應用保證金、報表業務
    - 路徑：「風控管理」-「名單管理」-「客戶組」
    - 權限：
        - 客戶組查詢：`credit_limit.client_group_query`
        - 客戶組操作：`credit_limit.client_group_operation`
    - 客戶保證金支持選擇客戶組和股票組創建
    - 路徑：「風控管理」-「保證金」-「客戶保證金」

    [output.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/1445bab0-c2cc-8114-afe4-000302ebb560/c99770d6-b573-447c-9412-12aa9aec7a87/output.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W646RUHV%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T064312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUvAvx5PZZMVzWh38elJtmlSoDHlTMsBilMEGyvYME7AiATypCynOtSyDTE8RvSRDNL3dOtg%2BznFX0SiDzaI0zVUCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMN%2F6L04YVVIaZKKkvKtwDHeJoQJsqLE2G5AbfhaFY7fN3Bl5iLSp883UOuYyzwLMc3C8%2Fy0M9d2yQcps8gAdjexAwgvp54ONqxxgZZ9d6vG7BkYnklQb3Hn1uXjJyMWeCwiQNmYtLul4vP%2BWgTWwvUVk6rUOqxQbxRK37fd0%2BXQyZG0YU9MMBlGXd9ShKl5YiMPBDdvLEmjkXyBRB8Bj%2BUga%2FDiwPG2cdo4MlVEzDa08fsFHC6oPh4xNReqm48IF7fbHhY3Fa3lVGMcl8LLf02cMi%2F4kW10b9c5PnWwM7WdJycemtAN8vBuU4VbxcPEn6RGbhkHa%2FxANaYduC8G4tCISjbTtBOOMW19BDZyz36lH919ssgS6tVG0H1sgUjnsk5cJ%2FP0FWFwTMyy4zqTygYbHYM6Kc69GPl8A%2FzoHrm%2BLi6q8CCfaYMNEnGnZIE6PhsVBG7JmoD%2FMWr9rgtauPHD6l4bt2LJC%2B1dFS6Y4aJg6yC%2FCNELi%2BMZwruPbV3XtXXMx6qqpkc4LLkmOpdfG8EU5T8BnTVjiGL3uyXsfiCiAJjAYkfPPdh9AiG9TLSMu%2FECyohz4g9Gcs6UOb0anDpPvl4%2FK6whaxLpFzb%2FJj5OGY725HpdK69IQLfCBi%2BtKZv6h7jl6MCLOVZoQwwPWvxQY6pgFoZMKyzM3dC8q3ja5K7uIrmLNvKmTA9ZwAPy0zRdUypvczSUZ4ycuA7rDpzs1XTIQR%2B%2FeYxVDHQHhUFDwEUSQMHog4uWsDzi8niypEr%2FrcgvfzWk8TuPby2eZxbsg328XU%2F4fsp9lUfHfYfsYiMHKwDzgZ%2F3PzCE6%2FwVcujW%2FAUpd7Dok4kCs01m%2Bp8V%2BbjGwMWcj2wNhQpAL8B4Frpdpi%2B6DpRoKO&X-Amz-Signature=60e1b611d5cfd48247e6eda1dc8da19f91497fed1e3772b54899e194d113b6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 在計費前修改下單渠道
    - 場景：在計費前修改用戶的下單渠道，並基於此進行清算
    - 操作：開始一鍵清算->暫停一鍵清算（數據同步步驟）-》編輯下單渠道
    - 編輯下單渠道路徑：「清算管理」-「流水管理」-「交易訂單」
    - 注意 1：在清算計費後不支持編輯收費渠道
    - 注意 2：清算計費後不再支持重新點擊數據同步。如先重新點擊的，先操作清算撤銷

    ![image.png](/assets/f120a896fbaa20f8f1d15ea7aa4fc6c4.png)

- 支持計費後，日切前重新補單功能
    - 場景：在計費後日切前，可重新進行後台補單或者前台補單
    - 流程：先操作清算撤銷->後台補單（前台補單）->重新執行日終
        - 操作清算撤銷時，資產類回撤選擇**不操作**&新增補單選擇**加入清算**
    - 清算撤銷路徑：「清算管理」-「日終管理」-「清算撤銷」

    ![image.png](/assets/b6c567fe140afa5ad0ca5c91e8ac38db.png)

- 公司行動支持展示客戶狀態
    - 公司行動支持展示客戶狀態
    - 券商可以聯繫客服，設置銷戶客戶執行或者不執行。系統默認執行

    ![客戶明細增加註銷狀態](/assets/1f2d2c9aae9ffc0366fdeea3961169b0.png)


    ![執行預覽增加註銷客戶數量提示](/assets/12dba2c5207f28c7b3d779dcd131e58c.png)

- 開戶列表詳情可配置交易權限
    - 開戶列表詳情 -「關聯賬戶列表」增加：未開通賬戶，可在 KYC 審核過程中修改賬戶的交易市場和權限
    - 路徑：「客戶管理系統」-「KYC」-「開戶列表」-「詳情」
    - 注意：交易權限配置需結合客戶開通賬戶的類型，是後台選擇的市場權限與開通賬戶功能的交集。如：後台選擇開通港股及虛擬資產交易權限，賬戶類型為虛擬資產賬戶，最終開通的賬戶僅虛擬資產交易權限
    - 權限：
        - 展示交易權限入口：`account.trade_permission`
        - 修改交易權限：`account.update_trade_permission`

        ![image.png](/assets/fca953291e69a2307f71e9fa9a884ae2.png)

- 開戶列表詳情增加專業投資者認證和風險測評信息
    - 審核人員如有對應查看權限，可在開戶詳情查看專業投資者認證記錄及風險測評信息；點擊可跳轉至詳情頁面
    - 路徑：「客戶管理系統」-「KYC」-「開戶列表」-「詳情」
    - 權限：需申請對應權限，開戶詳情才會展示對應模塊
        - 專業投資者認證：`customer.pi_app_record`
        - 風險測評數據查詢：`kyc.risk_assessment_query`

    ![image.png](/assets/9b846aa735712022371289a371e59bbe.png)


# 🪀 改進與修復

- 臨時結單支持自定義語言
    - 創建臨時結單支持選擇結單語言，默認為跟隨 App 語言（注：此處的 App 語言以臨時結單選擇的截止日期對應設置為準），可以自定義切換指定語言
    - 路徑：「清算管理」-「日終管理」-「結單管理」-「結單查詢」

    ![image.png](/assets/f3b21c75ff77b24419c7ba57ea8a55b0.png)

- 平倉增加交易時段選擇
    - margin call 下平倉彈窗頁面 美股限價單平倉支持自定義選擇“交易時段”，默認僅盤中
    - 路徑：「風控管理」-「Margin Call」-「風險預警」

    ![image.png](/assets/95306f3dd71e48fb0f15d324311cede5.png)

- 出入金模組部分功能新增工單審批
    - 入金申請頁中【駁回】增加工單審批
    - 出金申請頁中【駁回】增加工單審批
    - 異常出金模組【處理】增加工單審批
    - 客戶銀行卡選單下的【編輯】&【刪除】增加工單審核
- 借幣提醒增加異常單和規則審批
    - 編輯換匯規則需要工單審批通過才可修改成功
    - 增加異常單（換匯審核中、換匯失敗、提交失敗）查詢入口
        - 如遇換匯審核中 可取客戶匯兌單號在「款項管理」-「換匯」-「客戶匯兌」查看換匯審核進度；
        - 如遇換匯失敗/提交失敗可聯繫客服人員進行反饋
    - 路徑：「風控管理」-「授信額度」-「借幣提醒」

    ![image.png](/assets/78b7a7d4ec75b41dcb012ff2e2e41634.png)

- 手工調賬狀態優化
    - 手工調賬的【狀態】按實際調賬狀態使用，刪除“通過”，新增“調賬成功”“調賬失敗”“調賬處理中”三個狀態
        - 調賬成功：审批通过并处理调账成功
        - 調賬失敗：可在【調賬結果】查看失敗原因
        - 調賬處理中：系統正在處理調賬
    - 路徑：「資產賬戶」-「手工調賬」

    ![image.png](/assets/c579a1695de00f6e7ba2fed680c75678.png)

- 优化清算檢查等相关字段命名

![image.png](/assets/6750a1c770adbc4a7cb14a8f8852f961.png)


![image.png](/assets/aa256b7399d782612e1736efb147bda7.png)


![image.png](/assets/bc3957118412f84a1896fd57c026679c.png)


![image.png](/assets/15b18f6fbda36fbb0c833e088f28ee0f.png)


![image.png](/assets/c986f98a2677e16ced6d0fa4429f107f.png)


![image.png](/assets/bb664513bf5f9514c22d7de9db7ea21a.png)

