---
title: 2024-03-18 更新日誌
slug: ZzUjw9y7Viv2BnkCivCccXepnld
sidebar_position: 41
---


# 2024-03-18 更新日誌

# 🎉 新功能

- 支持港股國配
    <img src="Y7ezbasCfo6FJCx3AsKjN3Bzpzd" src-width="3304" src-height="1708" align="center"/>
    - IPO支持港股國配
    - 路徑：「新股認購」-「新股認購」-「港股國配」

- 新增客戶組及客戶保證金應用客戶組功能
    <img src="BhlGbovgnodlzVxo8yfjyYUcple" src-width="1970" src-height="1052" align="center"/>
    - 新增客戶組，支持應用保證金、報表業務
    - 路徑：「風控管理」-「名單管理」-「客戶組」
    - 權限：
        - 客戶組查詢：`credit_limit.client_group_query`
        - 客戶組操作：`credit_limit.client_group_operation`
    - 客戶保證金支持選擇客戶組和股票組創建
    - 路徑：「風控管理」-「保證金」-「客戶保證金」

- 在計費前修改下單渠道
    <img src="E9EsbHuhpofWvAxWOQtj2yH8pKb" src-width="3578" src-height="1798" align="center"/>
    - 場景：在計費前修改用戶的下單渠道，並基於此進行清算
    - 操作：開始一鍵清算-&gt;暫停一鍵清算（數據同步步驟）-》編輯下單渠道
    - 編輯下單渠道路徑：「清算管理」-「流水管理」-「交易訂單」
    - 注意1：在清算計費後不支持編輯收費渠道
    - 注意2：清算計費後不再支持重新點擊數據同步。如先重新點擊的，先操作清算撤銷

- 支持計費後，日切前重新補單功能
    <img src="A1PvbO3DKo8rP1xIXgbjT0bxpJh" src-width="3578" src-height="1798" align="center"/>
    - 場景：在計費後日切前，可重新進行後台補單或者前台補單
    - 流程：先操作清算撤銷-&gt;後台補單（前台補單）-&gt;重新執行日終
        - 操作清算撤銷時，資產類回撤選擇<b>不操作</b>&新增補單選擇<b>加入清算</b>
    - 清算撤銷路徑：「清算管理」-「日終管理」-「清算撤銷」

- 公司行動支持展示客戶狀態
    <img src="BK5nb53EAosk3Rx8sYJjyfYupdb" src-width="3578" src-height="1900" align="center"/>
    <img src="L2WXb1zdEoo9NHxxLhjjjRJ6pt7" src-width="3578" src-height="1900" align="center"/>
    - 公司行動支持展示客戶狀態
    - 券商可以聯繫客服，設置銷戶客戶執行或者不執行。系統默認執行

- 開戶列表詳情可配置交易權限
    - 開戶列表詳情-「關聯賬戶列表」增加：未開通賬戶，可在 KYC 審核過程中修改賬戶的交易市場和權限
    - 路徑：「客戶管理系統」-「KYC」-「開戶列表」-「詳情」
    - 注意：交易權限配置需結合客戶開通賬戶的類型，是後台選擇的市場權限與開通賬戶功能的交集。如：後台選擇開通港股及虛擬資產交易權限，賬戶類型為虛擬資產賬戶，最終開通的賬戶僅虛擬資產交易權限
    - 權限：
        <img src="DjQub9pCUoQfDDxtJ6AjPPimpoh" src-width="2140" src-height="1216" align="center"/>
        - 展示交易權限入口：`account.trade_permission`
        - 修改交易權限：`account.update_trade_permission`

- 開戶列表詳情增加專業投資者認證和風險測評信息
    <img src="LUW4bzOTjoHFZ3xsSjujsT2cpif" src-width="2120" src-height="1122" align="center"/>
    - 審核人員如有對應查看權限，可在開戶詳情查看專業投資者認證記錄及風險測評信息；點擊可跳轉至詳情頁面
    - 路徑：「客戶管理系統」-「KYC」-「開戶列表」-「詳情」
    - 權限：需申請對應權限，開戶詳情才會展示對應模塊
        - 專業投資者認證：`customer.pi_app_record`
        - 風險測評數據查詢：`kyc.risk_assessment_query`

# 🪀 改進與修復

- 臨時結單支持自定義語言
    <img src="G6wnb2LxLo9p8RxRthUjOnogpKp" src-width="3150" src-height="1132" align="center"/>
    - 創建臨時結單支持選擇結單語言，默認為跟隨App語言（注：此處的App語言以臨時結單選擇的截止日期對應設置為準），可以自定義切換指定語言
    - 路徑：「清算管理」-「日終管理」-「結單管理」-「結單查詢」

- 平倉增加交易時段選擇
    <img src="AfivbQmedoq8OmxSKWxjhGklpyh" src-width="1628" src-height="1712" align="center"/>
    - margin call下平倉彈窗頁面 美股限價單平倉支持自定義選擇“交易時段”，默認僅盤中
    - 路徑：「風控管理」-「Margin Call」-「風險預警」

- 出入金模組部分功能新增工單審批
    - 入金申請頁中【駁回】增加工單審批
    - 出金申請頁中【駁回】增加工單審批
    - 異常出金模組【處理】增加工單審批
    - 客戶銀行卡選單下的【編輯】&【刪除】增加工單審核

- 借幣提醒增加異常單和規則審批
    <img src="XYP2b7hMKo96asxwoPsjxtsbpIh" src-width="3282" src-height="1216" align="center"/>
    - 編輯換匯規則需要工單審批通過才可修改成功
    - 增加異常單（換匯審核中、換匯失敗、提交失敗）查詢入口
        - 如遇換匯審核中 可取客戶匯兌單號在「款項管理」-「換匯」-「客戶匯兌」查看換匯審核進度；
        - 如遇換匯失敗/提交失敗可聯繫客服人員進行反饋
    - 路徑：「風控管理」-「授信額度」-「借幣提醒」

- 手工調賬狀態優化
    <img src="R7EzbAVqQomuJCx1YOqjkD3NpVL" src-width="1750" src-height="678" align="center"/>
    - 手工調賬的【狀態】按實際調賬狀態使用，刪除“通過”，新增“調賬成功”“調賬失敗”“調賬處理中”三個狀態
        - 調賬成功：审批通过并处理调账成功
        - 調賬失敗：可在【調賬結果】查看失敗原因
        - 調賬處理中：系統正在處理調賬
    - 路徑：「資產賬戶」-「手工調賬」

- 优化清算檢查等相关字段命名

<img src="IaWDbumcJoTUzmx63q2jW4hupCc" src-width="3578" src-height="1798" align="center"/>

<img src="FCKlbzrAYoQ8qhx6zDfjCVPTpud" src-width="3578" src-height="1798" align="center"/>

<img src="VpSubXwQuotVYZxE4BBjR2Jipfh" src-width="3578" src-height="1798" align="center"/>

<img src="TNMXbfz0wog1d4xWeIbj6gorpwf" src-width="3578" src-height="1798" align="center"/>

<img src="CiOnbE4GVou8HqxkJKLj3Kb5pjf" src-width="3578" src-height="1798" align="center"/>

<img src="YYE7bBnmro2JtFxKgFDjqXVppae" src-width="3578" src-height="1798" align="center"/>

