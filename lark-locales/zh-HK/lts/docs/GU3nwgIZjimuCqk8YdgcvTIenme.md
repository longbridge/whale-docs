---
title: 2024-02-20 更新日志
slug: GU3nwgIZjimuCqk8YdgcvTIenme
sidebar_position: 44
---


# 2024-02-20 更新日志

# 🎉 新功能

- 清算檢查接入工單審批
    <img src="/assets/EgqebxSBMo35Cnx5YGmjTvF7pdf.png" src-width="3574" src-height="1770" align="center"/>
    - 工單編號：clearing.clearing_check.fix_result
    - 初始化時，工單未配置審批人的，默認在5S後自動審批通過
    - 清算檢查項目文案作優化，支持按多語言展示
    - 注意:如果有未審批的工單，無法重新點擊工單

- 報表導出及批量打印優化
    <img src="/assets/XgVEbrX4yo87g5x72Awj39U3psh.png" src-width="3802" src-height="1810" align="center"/>
    - 報表批量打印可設置是否打印後自動同步至SFTP。
    - 路徑：「報表管理」-「批量打印」
    - 報表及文件導出後，所有數據都放在導出列表，可快速查看。
    - 文件及報表導出若在10s導出成功可自動下載。

- 公司行动支持私有化類型和債券回收類型的自動創建
    <img src="/assets/Dx4bbEuv5ohWJHx8rI9jYtkApIf.png" src-width="3574" src-height="1770" align="center"/>
    - 私有化和債券回收都以TM類型自動創建
    - TM類型支持過戶費收取，創建時自動取文件的值

- 增加通用文件的對賬
    <img src="/assets/W3mzbLAp4oEQo6xFTR7jguGEpZd.png" src-width="3570" src-height="1780" align="center"/>
    <img src="/assets/EXF4bFkUZoim9TxS3j7jXjJtpXc.png" src-width="3574" src-height="1770" align="center"/>
    - 未對接交易文件的通道，可通過通用文件進行對賬
        - 已對接的根據文件規則處理
    - 初始化配置操作
        - 路徑：業務參數設置-市場管理-結算渠道
        - 新增的對應結算渠道並選擇股票對賬（Common Trade File）

- KYC開戶資料新增一鍵導出文件的功能
    <img src="/assets/DSmcb9FPsoAYxFxo7VpjWcsmpMf.png" src-width="2520" src-height="1362" align="center"/>
    - 路徑：「客戶管理系統」 - 「KYC」-「開戶列表」
    - 在開戶資料的詳情頁面，點擊‘文件下載’按鈕，系統將自動把開戶資料中的文件信息壓縮到一個文件夾中，可自行導出
    - 文件信息包括：證件照片、地址證明、轉賬證明、開戶文件等

# 🪀 改進與修復

- 客戶明細界面優化
    <img src="/assets/MAM8bIOlPox4yox1GIGj1L7zpaf.png" src-width="3574" src-height="1770" align="center"/>
    - 路徑：公司行動-客戶公司行動
    - 功能定位：主要用於查詢客戶名下經歷的公司行動
    - 客戶明細的選擇結束時間修改為客戶選擇結束時間，客戶明細增加經紀人、預告備註字段
    - 該下線客戶明細增、刪、改，客戶明細編輯功能的新路徑：公司行動-詳情-客戶明細
    - 該頁面後續將添加到WTT

- 港股託管費報表支持按類型設置費率
    <img src="/assets/VeHGbVTCzoYQj8xUkKVjFb5UpNb.png" src-width="3574" src-height="1770" align="center"/>
    - 新增SDR058-02報表，可根據配置的費率進行計算
    - 路徑：報表管理-報表打印
    - 原路徑（已配套下線）：業務參數設置-報表參數

- 「開戶資料後台」-出生日期/註冊成立日期限制
    <img src="/assets/X1SAblU4toKDcfxXbLYjmN68pOe.png" src-width="3286" src-height="804" align="center"/>
    - 開戶資料詳情增加賬戶信息，包括：審核狀態、登錄手機號、認證類型、開戶時間、券商名稱、證券賬號、賬戶類型、客戶類型、客戶詳細類型、聯繫手機號

