---
title: 2024-05-20 更新日誌
slug: 24-05-20
sidebar_position: 36
---


# 2024-05-20 更新日誌

# 🎉 新功能

- 新增會計通用報表導出-根據業務分類
    <img src="/assets/PYpDbYtsloInPOx1WMVjgVEOphe.png" src-width="3234" src-height="768" align="center"/>
    - 新增會計通用報表導出-根據業務分類

- 支持批量出金
    <img src="/assets/YbB2b59HtoHhIixKootja1EQplh.png" src-width="2850" src-height="1240" align="center"/>
    - 系統預置範本，補充範本中的欄位可以實現單次多筆出金申請生成
    - 批量出金：atm.import_batch_withdraw

- 客戶層空頭保證金比例設置
    <img src="/assets/C1Bhb8GqjoLxmwx5T3XjzEjrpgh.png" src-width="3224" src-height="1086" align="center"/>
    - 客戶保證金新增空頭保證金比例設置
    - 1、客戶保證金下拆分 tab：空頭股票、多頭股票
    - 2、客戶空頭保證金股票賣空狀態與空頭股票保證金（菜單：股票保證金-空頭保證金）可賣空狀態同步
    - 3、保證金比例邏輯：若存在客户空头保证金比例，则优先取客户空头保证金设置；否則取空頭股票保證金
    - 路徑：「風控管理」-「保證金」-「客戶保證金」-「空頭股票」
    - 客戶空頭保證金查詢：`margin_ratio.account_short_query`
    - 客戶空頭保證金操作：`margin_ratio.account_short_operation`

- Whale 首頁快捷入口功能發佈
    <img src="/assets/YPtgbFYoVoRQKZxzbcDjrDOmpIb.png" src-width="818" src-height="352" align="center"/>
    - 跨多系统处理业务不方便？浏览器书签太多难管理？
    - 控制台首页-快捷入口，让你更专注、更高效！

- 計費支持浮動利率功能
    <b>基準利率的維護</b>
    <img src="/assets/N7KnbLq0eogUtCxApk2jQfbLpDd.png" src-width="3574" src-height="1794" align="center"/>
    <img src="/assets/NK9Kbn7vnoidAZxBjRLjPkKapcb.png" src-width="3574" src-height="1794" align="center"/>
    <img src="/assets/RfT3b2wd6og4dgxDsQQjIcm8pGc.png" src-width="3574" src-height="1794" align="center"/>
    <b>基點的设置</b>
    <img src="/assets/S7D0b4fhloVWTVxHSn0jHTMgpVp.png" src-width="3574" src-height="1794" align="center"/>
    - 融資利息支持浮動利率功能
    - 路徑：業務參數設置-計費管理
    - 在收費場景頁面點擊邊界，並調整基準費率字段
    - 調整基準利率之前可通過 SDR065-01 報表判斷是否有基點設置過低
    - 注意：輸入的值不帶%。例子：6%輸入，0.06
    - 在客户组计费、客户计费頁面，选择浮动费率并输入基点。最终使用的利率=基点+基准费率
    - 注意：<em>1bp 输入 0.0001</em>

- 客戶組計費和客戶計費接入工單
    新增審批項目如下：
        工单审批案例：
    - 注意 1：新增的數據在審批後才生效
    - 注意 2：編輯的數據在審批後才生效，審批通過前，收費以原數據為准
    - 注意 3：刪除的數據在審批後才失效，審批通過前，收費以原數據為准
    1. 計費管理-客戶群組計費配置-新增
        <img src="/assets/BugwbLGeLoVsP7xm6Hvj4elcp5e.png" src-width="1280" src-height="642" align="center"/>
        新增時，狀態為待生效,可在工單頁面進行審批
        <img src="/assets/Omxfb3Kd8oCsPQxwrECjysSKpRb.png" src-width="1160" src-height="1280" align="center"/>
    2. 計費管理-客戶群組計費配置-編輯
        <img src="/assets/DeP5bpN3doqzzNx7oMsj0Ow6pUe.png" src-width="1133" src-height="1280" align="center"/>
        可分別展開新、舊數據
    3. 計費管理-客戶群組計費配置-刪除
        <img src="/assets/RA2obKHEZoYz6uxd0fXjwX0Apvf.png" src-width="1154" src-height="1280" align="center"/>
    4. 計費管理-客戶計費配置-新增
        <img src="/assets/BzuYbxReEox0fvx8C46jy5L4pjy.png" src-width="1155" src-height="1280" align="center"/>
    5. 計費管理-客戶計費配置-編輯
        <img src="/assets/UqQRbLo9NoqORdxihXkjoYrvpAb.png" src-width="1156" src-height="1280" align="center"/>
    6. 計費管理-客戶計費配置-刪除
        <img src="/assets/KMKnbAccgoqFufxRPERjXw06pTg.png" src-width="1152" src-height="1280" align="center"/>
    7. 計費管理-客户組配置-客户組變更（添加）
        <img src="/assets/AipGbCnASos0BoxUp4ujKkKHpuf.png" src-width="1159" src-height="1280" align="center"/>
    8. 計費管理-客户組配置-變更客户組（移出）
        <img src="/assets/TYiwbCOl8ohMQ4xWs4sjZE54pPf.png" src-width="924" src-height="1250" align="center"/>
    9. 計費管理-客户組配置-批量變更客户組
        <img src="/assets/Ui0JbO7PKomCCNx0fozji4oTpob.png" src-width="736" src-height="1118" align="center"/>

# 🪀 改進與修復

- 「銀行賬單」功能優化
    <img src="/assets/HMl2bV9fZoZbWuxwAzqjfJCWpQf.png" src-width="3782" src-height="1480" align="center"/>
    - 「銀行賬單」功能優化，具體包括如下優化內容：
    - 1）入金賬單自動同步整合賬單的標籤
    - 2）入金賬單設置可組合判斷
    - 3）出金賬單自動關聯提現單新增證券賬號匹配規則
    - 4）自動打標規則中的銀行附言新增模糊匹配

- 異常數據源 UI 優化
    <img src="/assets/QCr6bBbXtobAdMxI5XmjJogfpNg.png" src-width="2310" src-height="1186" align="center"/>
    - 異常數據源 UI 優化，具體包括如下優化內容：
    - 1）新增業務類型、幣種、金額展示
    - 2）篩選字段以及列表頁面刪除“標的”
    - 3）異常數據源單號 統一改爲 原始憑證號
    - 4）異常數據源中的賬務日期採用 YY-MM-DD 的格式，去掉時分秒

- 支票打印新增日期查詢條件
    <img src="/assets/JugkbtOfroO5ayxlABgjR7VIpvb.png" src-width="3794" src-height="1696" align="center"/>
    - 新增日期查詢條件

- 支持新股扣款、公佈中簽選擇指定帳務日期
    - 支持新股扣款、公佈中簽選擇指定帳務日期

<img src="/assets/D1yDb67xYoGlQhxpBNej1chopvh.png" src-width="2378" src-height="1370" align="center"/>

- 線下開戶中國大陸證件簽發地新增支持選擇護照開戶
    - 線下開戶流程中，若證件簽發地選擇了‘中國大陸’，則在證件類型中，支持選擇‘身份證’或‘護照’
    - 路徑：「客戶管理系統」-「KYC」-「資料管理」-「開戶資料」-「添加開戶申請」
    - 支持的客戶類型：個人戶、聯名戶

<img src="/assets/GKKEbyAEWo1EuOx3u69jhZGmpqN.png" src-width="2002" src-height="904" align="center"/>

