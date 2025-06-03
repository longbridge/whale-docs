---
title: '2024-08-12 更新日誌 '
slug: OrbwwvMG5ityKtkHqF2cL1rDnVh
sidebar_position: 20
---


# 2024-08-12 更新日誌 

# 🎉 新功能

无

# 🪀 改进与修复

- 出金規則相關優化
    - 「業務參數設置 - 風控 - 餘額攔截」位置調整至「業務參數設置 - 出金規則 - 餘額攔截」
    - 「業務參數設置 - 風控 - 出金額規則」位置調整至「業務參數設置 - 出金規則」，並且 tab 頁面文案改爲“自動審覈規則”
    - 自動審覈規則列表中出金卡類型改爲銀行賬戶地區，同時新增字段：銀行名稱、銀行卡首次出金、優先級
    <img src="/assets/KP5ObODTBoGf9rxH5M2cegzGnwe.png" src-width="2678" src-height="3207" align="center"/>

- 出金申請新增批量提現
    - 「款項管理 - 出金 - 出金申請」操作【批量提現】優化：文案統一爲“批量提現”；新增模板導入說明；導入模板中的字段“出金手續費”和“收款銀行卡號”可爲空
    <img src="/assets/HvpibOMf7oIS36xLmEqcXBCUnNc.png" src-width="1280" src-height="679" align="center"/>

- 放寬自定義匯率的小數點位數
    - 「款項管理 - 換匯 - 客戶匯兌」手工換匯自定義匯率小數點後支持輸入最多爲 8 位
    <img src="/assets/ROKobk3vPoNUecxKKeQcFLz9n1c.png" src-width="2254" src-height="1230" align="center"/>

- 調賬增加實時倉位查詢
    - 證券類（股票/基金/期權/債券/OTC 其他/虛擬資產）調賬出賬增加根據託管商和子倉查詢的實時倉位參考值
    - 路徑：「資產賬戶」-「調賬」-「手工調賬」
    <img src="/assets/KyBAbDw6ZoGKvoxTrgvcLEKlnFe.png" src-width="3240" src-height="1624" align="center"/>

- 賬戶查詢持倉明細增加“可抵押市值”
    - 賬戶查詢持倉明細增加“可抵押市值”信息展示
    - 路徑：「資產賬戶」-「賬戶」-「賬戶查詢」
    <img src="/assets/UlBPbuIOToGoCNxDkFqcG7Mcnic.png" src-width="3318" src-height="1752" align="center"/>

- 交易對賬支持模糊對賬
    - 交易對賬中，針對不平賬可進行二次對賬。支持針對不平賬進行按股票對賬
    - 路徑：業務參數設置 - 日終設置 - 清算參數設置
    <img src="/assets/SD9UbQQ4TokQDkxN638c5jvGnOe.png" src-width="3548" src-height="1794" align="center"/>

- 新增 SO、DS 執行時的消息推送
    - SO、DS 在執行成功後會發送 push 與 email 給客戶
    <img src="/assets/V1TAbdYIKo2J06x7vPmcE00snyg.png" src-width="2452" src-height="1084" align="center"/>

- 費用管理新增最低過戶費設定
    - 客戶可在費用管理頁面對全域過戶費進行最低額的設定
    <img src="/assets/SZILbH6svoVA2axaR8JcxXEAnYb.png" src-width="2854" src-height="1134" align="center"/>

- CRM 更新客戶列表
    - 下架原有的“客户池”，由“客户列表”替换（客户列表，当前券商名下的所有客户）
    - 列表新增用戶基礎等級、賬戶信息、開戶信息、活動地區等多個字段，補充完善了客戶畫像
    - 客戶信息展示/篩選/查詢等交互優化，支持快速獲取客戶的基礎信息、開戶信息、資產/交易和持倉等多維度的數據
    - 路徑：「客戶管理系統」-「CRM」-「客戶列表」
    <img src="/assets/DsZLbUTEmoPVN9xy2bmcdUQHnVb.png" src-width="2562" src-height="1144" align="center"/>

- CRM 更新看板
    - 下架原有的“看板”，由“我的看板”替换（适用于有配置客户经理的券商，展示客户经理名下的客户数据）
    - 更新看板統計 Tab，按“基礎等級”對用戶進行更為細緻的劃分
    - 新增了更多描述客戶基本信息的字段內容和操作項
    - 新增團隊權限，支持查看團隊下所有客戶的數據權限
    - 字段解释：
        - 用户地区：为用户当前所在国家/地区。取值规则，按以下优先级取：
            -  ①：居住国家/地区；优先级 ②：手机区号；优先级 ③：注册时的 IP 对应地区 
        - 活动地区：指证件签发国所在地。部分客户居住地区和证件签发国不一致，则优先取证件签发国作为活动地区。取值规则如下：
            - 若有证件签发国，取证件签发国作为活动地区；若无，则取用户区域的值作为活动地区
    - 路徑：「客戶管理系統」-「CRM」-「我的看板」
        <img src="/assets/FNPXbSD01oL4GvxMBd1cwGRQnRc.png" src-width="3450" src-height="1682" align="center"/>

