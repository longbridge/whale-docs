---
title: '2024-05-20 更新日誌 '
slug: 24-05-20
sidebar_position: 30
---


# 2024-05-20 更新日誌 

# 🎉 新功能

- 新增會計通用報表導出 - 根據業務分類
    - 新增會計通用報表導出 - 根據業務分類
    <img src="/assets/U6xmb8axpo8vn3xla8jcPI9EnCt.png" src-width="3234" src-height="768" align="center"/>

- 支持批量出金
    - 系統預置範本，補充範本中的欄位可以實現單次多筆出金申請生成
    - 批量出金：atm.import_batch_withdraw
    <img src="/assets/MuAoblTUGo54uYxXVQ6cc14Pnhg.png" src-width="2850" src-height="1240" align="center"/>

- 客戶層空頭保證金比例設置
    - 客戶保證金新增空頭保證金比例設置
    - 1、客戶保證金下拆分 tab：空頭股票、多頭股票
    - 2、客戶空頭保證金股票賣空狀態與空頭股票保證金（菜單：股票保證金 - 空頭保證金）可賣空狀態同步
    - 3、保證金比例邏輯：若存在客户空头保证金比例，则优先取客户空头保证金设置；否則取空頭股票保證金
    - 路徑：「風控管理」-「保證金」-「客戶保證金」-「空頭股票」
    - 客戶空頭保證金查詢：`margin_ratio.account_short_query`
    - 客戶空頭保證金操作：`margin_ratio.account_short_operation`
    <img src="/assets/XShhbTtMtoPxwrxWntfc9VPEnIb.png" src-width="3224" src-height="1086" align="center"/>

- Whale 首頁快捷入口功能發佈
    - 跨多系统处理业务不方便？浏览器书签太多难管理？
    - 控制台首页 - 快捷入口，让你更专注、更高效！
    <img src="/assets/IXkjbXN6moLW9UxhC6ictSQWnzb.png" src-width="818" src-height="352" align="center"/>

- 計費支持浮動利率功能
    - 融資利息支持浮動利率功能
    - 路徑：業務參數設置 - 計費管理

<b>基準利率的維護</b>
- 在收費場景頁面點擊邊界，並調整基準費率字段
- 調整基準利率之前可通過 SDR065-01 報表判斷是否有基點設置過低
- 注意：輸入的值不帶%。例子：6% 輸入，0.06
<img src="/assets/OOwxbQF7poJ3VfxxRTIcty0qniq.png" src-width="3574" src-height="1794" align="center"/>
<img src="/assets/CGHpbqvCoouJzvxWnjOc6dP9nTn.png" src-width="3574" src-height="1794" align="center"/>
<img src="/assets/Nqj6bYhF3o24tBxefIcceQz6nLg.png" src-width="3574" src-height="1794" align="center"/>
<b>基點的设置</b>
- 在客户组计费、客户计费頁面，选择浮动费率并输入基点。最终使用的利率=基点 + 基准费率
- 注意：<em>1bp 输入 0.0001</em>
<img src="/assets/SBQAbWMZJoLtycxQsw2cNDArnEc.png" src-width="3574" src-height="1794" align="center"/>

- 客戶組計費和客戶計費接入工單
    - 注意 1：新增的數據在審批後才生效
    - 注意 2：編輯的數據在審批後才生效，審批通過前，收費以原數據為准
    - 注意 3：刪除的數據在審批後才失效，審批通過前，收費以原數據為准
    新增審批項目如下：
    <table>
    <colgroup>
    <col width="316"/>
    <col width="240"/>
    <col width="100"/>
    <col width="100"/>
    <col width="227"/>
    </colgroup>
    <tbody>
    <tr><td><p>標題</p></td><td><p>標題（EN）</p></td><td><p>工單標識</p></td><td><p>未設置審批流程</p></td><td><p>工单审批案例</p></td></tr>
    <tr><td><p>計費管理 - 客戶群組計費配置 - 新增</p></td><td><p>Billing Management-Rate Setups (By Group) -New</p></td><td><p>billing_package_add</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/NXCcbbXGjo1kB4xL2tGcVL2cnSI.png" src-width="3574" src-height="1794" align="center"/>
    <img src="/assets/XCKhbqf6sow8ABxL8YscB1aHnrg.png" src-width="1360" src-height="1500" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客戶群組計費配置 - 編輯</p></td><td><p>Billing Management-Rate Setups (By Group) -Edit</p></td><td><p>billing_package_edit</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/G0dubCHiPoGKE5xEyWecDCgqnOg.png" src-width="1436" src-height="1622" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客戶群組計費配置 - 刪除</p></td><td><p>Billing Management-Rate Setups (By Group) -Delete</p></td><td><p>billing_package_del</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/UnNqb02WIo5jHRxBVCtcXSh6nJb.png" src-width="1472" src-height="1632" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客戶計費配置 - 新增</p></td><td><p>Billing Management-Rate Setups (By Client)-New</p></td><td><p>billing_level_fee_add</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/Npmkb0Uvoo46ddxTtMncA40qnVd.png" src-width="1480" src-height="1640" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客戶計費配置 - 編輯</p></td><td><p>Billing Management-Rate Setups (By Client)-Edit</p></td><td><p>billing_level_fee_edit</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/JyVIbjM01oNaE5xewNKcJC34nAh.png" src-width="1458" src-height="1614" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客戶計費配置 - 刪除</p></td><td><p>Billing Management-Rate Setups (By Client)-Delete</p></td><td><p>billing_level_fee_del</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/G9OWbOfCIokh8FxHR4ic5A4Rnag.png" src-width="1482" src-height="1646" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客户組配置 - 客户組變更（添加）</p></td><td><p>Billing Management-Rate Setups (By Group) -Change client group (add)</p></td><td><p>billing_package_aaid_add</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/WOjwbQiDJoOlYNxC62VcxwHHn4f.png" src-width="1480" src-height="1634" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客户組配置 - 變更客户組（移出）</p></td><td><p>Billing Management-Rate Setups (By Group) -Change client group (move out)</p></td><td><p>billing_package_aaid_del</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/Gp9UbgmPOoObdhxhEvIcKyXinIf.png" src-width="924" src-height="1250" align="center"/></td></tr>
    <tr><td><p>計費管理 - 客户組配置 - 批量變更客户組</p></td><td><p>Billing Management-Rate Setups (By Group) -Batch client  change group</p></td><td><p>billing_package_aaid_add_batch</p></td><td><p>超級管理員審批</p></td><td><img src="/assets/WDaXbUf9SotFU5xiSSRcsr6nnpx.png" src-width="736" src-height="1118" align="center"/></td></tr>
    </tbody>
    </table>

# 🪀 改進與修復

- 「銀行賬單」功能優化
    - 「銀行賬單」功能優化，具體包括如下優化內容：
    - 1）入金賬單自動同步整合賬單的標籤
    - 2）入金賬單設置可組合判斷
    - 3）出金賬單自動關聯提現單新增證券賬號匹配規則
    - 4）自動打標規則中的銀行附言新增模糊匹配
    <img src="/assets/V6c6bS2wuom6W4xy0e2ceQm8nNd.png" src-width="3782" src-height="1480" align="center"/>

- 異常數據源 UI 優化
    - 異常數據源 UI 優化，具體包括如下優化內容：
    - 1）新增業務類型、幣種、金額展示
    - 2）篩選字段以及列表頁面刪除“標的”
    - 3）異常數據源單號 統一改爲 原始憑證號
    - 4）異常數據源中的賬務日期採用 YY-MM-DD 的格式，去掉時分秒
    <img src="/assets/II89bqvmvocUkex7UDMc4qeInRf.png" src-width="2310" src-height="1186" align="center"/>

- 支票打印新增日期查詢條件
    - 新增日期查詢條件
    <img src="/assets/O8U4bHpj9ot23VxcaJQckJTjnKf.png" src-width="3794" src-height="1696" align="center"/>

- 支持新股扣款、公佈中簽選擇指定帳務日期
    - 支持新股扣款、公佈中簽選擇指定帳務日期

<img src="/assets/Vsr9bxS4pou0SCxCBdXcmZHmnSe.png" src-width="2378" src-height="1370" align="center"/>

- 線下開戶中國大陸證件簽發地新增支持選擇護照開戶
    - 線下開戶流程中，若證件簽發地選擇了‘中國大陸’，則在證件類型中，支持選擇‘身份證’或‘護照’
    - 路徑：「客戶管理系統」-「KYC」-「資料管理」-「開戶資料」-「添加開戶申請」
    - 支持的客戶類型：個人戶、聯名戶

<img src="/assets/QwTAb7rVao51MlxxMTUc9lmunvh.png" src-width="2002" src-height="904" align="center"/>

