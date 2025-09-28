---
slug: OrbwwvMG5ityKtkHqF2cL1rDnVh
title: 2024-08-12 更新日誌
sidebar_position: 26
---


# 2024-08-12 更新日誌


# 🎉 新功能


无


# 🪀 改进与修复

<details>
<summary>出金規則相關優化</summary>
- 「業務參數設置 - 風控 - 餘額攔截」位置調整至「業務參數設置 - 出金規則 - 餘額攔截」
- 「業務參數設置 - 風控 - 出金額規則」位置調整至「業務參數設置 - 出金規則」，並且 tab 頁面文案改爲“自動審覈規則”
- 自動審覈規則列表中出金卡類型改爲銀行賬戶地區，同時新增字段：銀行名稱、銀行卡首次出金、優先級

![image.png](/assets/b39b6d44281068963063d64a0681fec2.png)


</details>

<details>
<summary>出金申請新增批量提現</summary>
- 「款項管理 - 出金 - 出金申請」操作【批量提現】優化：文案統一爲“批量提現”；新增模板導入說明；導入模板中的字段“出金手續費”和“收款銀行卡號”可爲空

![image.png](/assets/0b7b3e7c0c6c4d93624c6d008341ec97.png)


</details>

<details>
<summary>放寬自定義匯率的小數點位數</summary>
- 「款項管理 - 換匯 - 客戶匯兌」手工換匯自定義匯率小數點後支持輸入最多爲 8 位

![image.png](/assets/364638c6e51862c2821222a8e96b77da.png)


</details>

<details>
<summary>調賬增加實時倉位查詢</summary>
- 證券類（股票/基金/期權/債券/OTC 其他/虛擬資產）調賬出賬增加根據託管商和子倉查詢的實時倉位參考值
- 路徑：「資產賬戶」-「調賬」-「手工調賬」

![image.png](/assets/ce4dbcf4cd777d7d38d6efee1a84d4bf.png)


</details>

<details>
<summary>賬戶查詢持倉明細增加“可抵押市值”</summary>
- 賬戶查詢持倉明細增加“可抵押市值”信息展示
- 路徑：「資產賬戶」-「賬戶」-「賬戶查詢」

![image.png](/assets/ad772e07fb13d074ae068bf6a03f7235.png)


</details>

<details>
<summary>交易對賬支持模糊對賬</summary>
- 交易對賬中，針對不平賬可進行二次對賬。支持針對不平賬進行按股票對賬
- 路徑：業務參數設置 - 日終設置 - 清算參數設置

![image.png](/assets/368b9b81bf10d3f68c612c22ce182916.png)


</details>

<details>
<summary>新增 SO、DS 執行時的消息推送</summary>
- SO、DS 在執行成功後會發送 push 與 email 給客戶

![image.png](/assets/e2e74bbb9e880490000ac71f1d615117.png)


</details>

<details>
<summary>費用管理新增最低過戶費設定</summary>
- 客戶可在費用管理頁面對全域過戶費進行最低額的設定

![image.png](/assets/49d0079444692148fa8a0f102aa6582a.png)


</details>

<details>
<summary>CRM 更新客戶列表</summary>
- 下架原有的“客户池”，由“客户列表”替换（客户列表，当前券商名下的所有客户）
- 列表新增用戶基礎等級、賬戶信息、開戶信息、活動地區等多個字段，補充完善了客戶畫像
- 客戶信息展示/篩選/查詢等交互優化，支持快速獲取客戶的基礎信息、開戶信息、資產/交易和持倉等多維度的數據
- 路徑：「客戶管理系統」-「CRM」-「客戶列表」

![image.png](/assets/353cec04cb0e1bafee9e5fc525f22f6e.png)


</details>

<details>
<summary>CRM 更新看板</summary>
- 下架原有的“看板”，由“我的看板”替换（适用于有配置客户经理的券商，展示客户经理名下的客户数据）
- 更新看板統計 Tab，按“基礎等級”對用戶進行更為細緻的劃分
- 新增了更多描述客戶基本信息的字段內容和操作項
- 新增團隊權限，支持查看團隊下所有客戶的數據權限
- 字段解释：
    - 用户地区：为用户当前所在国家/地区。取值规则，按以下优先级取：
        - ①：居住国家/地区；优先级 ②：手机区号；优先级 ③：注册时的 IP 对应地区
    - 活动地区：指证件签发国所在地。部分客户居住地区和证件签发国不一致，则优先取证件签发国作为活动地区。取值规则如下：
        - 若有证件签发国，取证件签发国作为活动地区；若无，则取用户区域的值作为活动地区
- 路徑：「客戶管理系統」-「CRM」-「我的看板」

    ![image.png](/assets/caab41d98a8cc4d869945ac527e25eae.png)


</details>

