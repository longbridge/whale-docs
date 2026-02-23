---
title: 系統介紹
slug: 2a05bab0c2cc81039fcee82d68166238
sidebar_position: 0
---


# 系統介紹

# 一、系統介紹

客戶在使用「存入加密貨幣」「提取加密貨幣」功能時，所使用的錢包地址均需完成認證及加白流程。

钱包地址认证系统的操作流程会因平台和钱包类型的不同而有所差异，以下以 HashKey Exchange 平台为例，为你提供一份钱包地址认证系统操作流程圖解：

### 準備工作

確認你的個人錢包支持消息簽名功能，HashKey Exchange 原則上對錢包類型不做限制，常見的軟件錢包如 Metamask、Electrum、MyEtherWallet，硬件錢包如 Ledger Nano S、Trezor 等均可。

### 操作步驟

1. <b>觸發地址認證</b>：充值時，如果你的充值來源地址為個人錢包地址，且地址未經 HashKey PRO 認證，則你的虛擬資產將在獲得一定數量的區塊確認後自動觸發地址認證。
2. <b>選擇認證方式</b>：以 Metamask 錢包為例，在添加充值白名單頁面選擇 MetaMask 認證方式，點擊【連接 MetaMask】。
3. <b>連接錢包</b>：彈出錢包連接界面，確認需要認證的錢包地址，點擊【下一步】，再點擊【連接】。
4. <b>小額支付驗證</b>：在「客戶錢包地址」頁面點擊「新增認證」按鈕，如實填寫待認證錢包地址、對應幣種等信息，仔細核對無誤後提交。登錄個人加密貨幣錢包，向系統生成的「驗證地址」轉賬指定「驗證金額」
5. <b>完成認證</b>：完成小額支付驗後，該地址即加入充值白名單，後續充值可直接選擇該地址，無需再次認證。

# 二、操作說明

## <b>權限準備</b>

登錄 WBO 後台系統，確認已獲得「加密貨幣」、「渠道存管賬戶」、「客户錢包地址」相關操作權限，無權限請聯繫管理員申請。

## <b>前置準備：加密貨幣資料維護（所有操作首要步驟）</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>菜單入口：WBO - 業務參數設置 - 資金參數 - 加密貨幣</p>
</div>

在開展加密貨幣出入、錢包地址認證業務前，後台操作人員需先完成加密貨幣相關資料維護：

1. 登錄 WBO 後台系統，進入「業務參數設置 - 資金參數 - 加密貨幣」頁面；
2. 點擊「新增」或「編輯」，完善目標加密貨幣的基礎信息（如幣種代碼、名稱、認證規則等）；
3. 核實信息無誤後提交生效，確保後續認證、出入幣業務可正常對接。

<img src="/assets/UQiVb0OiIoqZbHx7KscjMmgapbc.png" src-width="3260" src-height="1124" align="center"/>

## <b>渠道存管賬戶導入</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>菜單入口：WBO - 虛擬資產管理 - 出入幣 - 渠道存管賬戶</p>
</div>

1. 進入「虛擬資產管理 - 出入幣 - 渠道存管賬戶」頁面
2. 點擊「批量新建」，上傳經審核的渠道存管賬戶清單（需符合系統指定格式）
3. 導入完成後，核實賬戶信息無誤，點擊「確定」，用於客戶認證前的自動分配

<img src="/assets/ZoHobE0azoJMWxxyqOUjP2N8pdd.png" src-width="2510" src-height="1362" align="center"/>

## <b>認證記錄監控</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p> 菜單入口：WBO - 虛擬資產管理 - 出入幣 - 客户錢包地址</p>
</div>

1. 進入「客戶錢包地址」後台管理頁面，可查看所有客戶的認證申請記錄
2. 支持按「認證狀態」「創建時間」「客戶編號」等條件篩選查詢，點擊單條記錄可查看詳情（含分配的存管賬戶、支付信息、校驗結果等）
3. 對「未認證」的記錄，可協助客戶排查問題（如核實轉賬是否到賬、地址是否匹配）

<img src="/assets/Tt8bbVXU2oIeCsxflgtjVWJnpCf.png" src-width="3288" src-height="1076" align="center"/>

## <b>加白與後續管理</b>

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>📍</div>
<p>菜單入口：WBO - 虛擬資產管理 - 出入幣 - 客户錢包地址</p>
</div>

1. 客戶地址認證通過後，系統自動納入「加白名單」，後台可查看加白地址清單
2. 支持對已加白地址進行狀態管理（如删除），應對異常風險
3. 定期導出認證與加白記錄，完成合規備案與數據歸檔

<img src="/assets/FdBebKmwmoJZONxuicwjwGDZpEg.png" src-width="3274" src-height="1082" align="center"/>

## 注意事項

1. 待認證錢包地址需為客戶本人所有，切勿使用他人地址提交認證，否則將影響資金接收
2. 小額支付驗證的資金僅用於歸屬權驗證，不收取任何費用，認證完成後無需單獨提現
3. 妥善保管認證過程中的操作記錄與轉賬憑證，便於後續問題排查
4. 如遇系統異常（如頁面無法打開、提交失敗），請刷新頁面或更換瀏覽器；問題未解決，聯繫技術支持團隊
5. 嚴格遵守加密貨幣業務相關法規與平臺規則，虛假認證將導致賬戶限制，情節嚴重者終止服務

