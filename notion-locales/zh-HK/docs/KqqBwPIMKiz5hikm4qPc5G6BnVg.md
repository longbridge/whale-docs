---
slug: KqqBwPIMKiz5hikm4qPc5G6BnVg
title: 2024-09-23 更新日誌
sidebar_position: 23
---


# 2024-09-23 更新日誌


# 🎉 新功能

- 自動還款開通客戶查詢
    - 增加自動還款開通客戶查詢頁面
    - 路徑：「風控管理」-「借幣提醒」-「自動還款開通查詢」
    - 權限：自動還款開通客戶查詢 `margin_call.auto_convert_query`

    ![image.png](/assets/822e9d60aca24992727a4d16c1f940ca.png)

- 消息記錄-支援SMS/Email重發
    - 消息記錄列表，支持 SMS/Email 重發能力
    - 路徑：「消息中心」-「消息記錄」-「操作 - 重發」

    ![image.png](/assets/c7cb0bf5986a30169856d98c72023311.png)

- 支持文章複製，文章編輯/刪除/隱藏/顯示需審批
    - 幫助中心，支援文章複製，文章編輯/刪除/隱藏/顯示需審批
    - 路徑：「幫助中心」-「文章」-「操作 - 複製」

    ![image.png](/assets/a3ac5951b4f6f1561024264596981422.png)


# 🪀 改进与修复

- 保證金變更審批及交互優化

    主要優化點：

    - 保證金新建/編輯/批量上傳/刪除，以及日內交易規則設置均支持工單審批。

        涉及審批流標識如下：

        - 上傳多頭股票保証金 `risk.credit.upload_stock_margin_ratio`
        - 修改多頭股票保證金 `risk.credit.update_stock_margin_task`
        - 新增多頭股票保證金 `risk.credit.create_stock_margin_task`
        - 批量刪除多頭股票保證金 `risk.credit.batch_delete_stock_margin_ratio`
        - 刪除多頭股票保證金 `risk.credit.delete_stock_margin_ratio`
        - 上傳空頭股票保証金 `risk.credit.upload_short_sell_stock_margin_ratio`
        - 修改空頭股票保證金 `risk.credit.update_short_sell_stock_margin_ratios`
        - 設置日內融時間 `risk.credit.set_day_trade_time_config`
        - 上傳日內交易實時保証金 `risk.credit.upload_intraday_stock_margin_ratio`
        - 新增日內交易實時保證金 `risk.credit.create_intraday_stock_margin_task`
        - 批量刪除日內交易實時保證金 `risk.credit.batch_delete_intraday_stock_margin_ratio`
        - 刪除日內交易實時保證金 `risk.credit.delete_intraday_stock_margin_ratio`
        - 修改日內交易實時保證金 `risk.credit.update_intraday_stock_margin_task`
    - 多頭股票保證金新建界面優化，改為側邊欄

    ![image.png](/assets/71ae2e5f59417b1ad6e6a3d811694c06.png)

- 基金清算支持申贖單獨進行核對確認
    - 支持基金清算流程中的申購、贖回分別進行核對確認
    - 路徑：「基金管理」-「公募基金」-「基金清算」-「操作 - 申購核對確認、贖回核對確認」

    ![image.png](/assets/e2c94547abf1642e4f6e5dd9041f7908.png)

