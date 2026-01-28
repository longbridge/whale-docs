---
title: 2024-05-06 更新日誌
slug: CH5uw4JCMiNYHZk59gpcSpQPnmg
sidebar_position: 37
---


# 2024-05-06 更新日誌

# 🎉 新功能

- 交收指令導出（新版）（原來的菜單下線）
    - 路徑：清算管理-日終任務-交收指令導出
    - 支持導出未來日期的文件
    - 支持導出HK、SZ、SH多市場
    - 原來的菜單下線

<img src="Th2TbDLz0oRuZWxA9Fsj7Kpmpbj" src-width="3574" src-height="1774" align="center"/>

<img src="DqBTbCUYAoFw0SxKtnRjY9oxpDg" src-width="3574" src-height="1774" align="center"/>

- 企業戶的賬戶資料中新增‘企業實體類型’字段
    <img src="VG9eb1e42o3eH2xGpBSjTbEmp5d" src-width="2180" src-height="1264" align="center"/>
    - 在線下企業戶的開戶流程中，新增‘企業實體類型’字段，非必填
    - 在 kyc 詳情頁，支持新增字段的展示和編輯功能
    - 在批量修改的功能中，同步新增支持‘企業實體類型’字段的批量更新功能

- 清算前準備自義定配置功能
    <img src="BZnlb0MbYoG52WxeFPvjaG83pih" src-width="3574" src-height="1774" align="center"/>
    - 路徑：業務參數設置-日終設置-清算前準備
    - 檢查階段釋義：交易清算（數據同步-清算交收之前的檢查項目）；日終清結算（數據彙總-日切之前的檢查項目）
    - 失敗後處理釋義：僅提醒（不會攔截流程，僅提示）、工單審覈（會攔截流程，但是可以手動通過）、強制校驗（會攔截流程，必須通過）
    - 支持的操作：開啓/關閉，選擇失敗後的處理方式
    - 可編輯時間段：操作日終任務之前
    - 編輯時需要審批，工單標識：clearing.before_clearing_ready.settiing
    - 其它：部分檢查項目要求強制檢查，不允許編輯

- 日終任務合併清算和清算初始化配置功能
    <img src="MlPibb8ZtoaxTYxFHCGjjba2pOb" src-width="3574" src-height="1774" align="center"/>
    <img src="YF7rb4mM0oTf48xGRqGjqbWTp4C" src-width="3574" src-height="1774" align="center"/>
    - 路徑：業務參數設置-日終設置-清算參數配置
    - 可編輯時間段：操作日終任務之前
    - 編輯清算初始化配置時需要審批，工單標識：clearing.update_system_config.exec
    - 其它
        - 修改其它配置開關時請聯繫客戶，在指導下操作

- 公司行動執行完畢後增加郵件通知
    <img src="QN8hbnjb3owZIWxIg70jUnZ2pLe" src-width="856" src-height="190" align="center"/>
    <img src="LwTWbs4mxowh9BxNqKjjf2bXpWy" src-width="828" src-height="182" align="center"/>
    <img src="A03fbciuqoU0aIxrKEDjjh9Bpnf" src-width="1242" src-height="232" align="center"/>
    <img src="T28Mbv93yo3BhgxbX8gjgp5ipce" src-width="1268" src-height="222" align="center"/>
    <img src="DQzibW8IVodsqXxc24Vj9EHBpBg" src-width="1210" src-height="274" align="center"/>
    <img src="SEDNbthuOovlKDxC3DojBufyprh" src-width="1182" src-height="334" align="center"/>
    - 供股類 RS、ER、OO、RS
    - 要約類
    - 拆合股、換股
    - ADR 執行
    - 紅利、紅股
    - 期權公司行動

- WBO換匯新增撤銷功能
    - 針對客戶提交上的換匯申請，需要根據“客戶匯兌狀態”進行判斷，决定是否可以進行撤銷。 其中：當“客戶匯兌狀態”=「已提交」、「匯兌中」時，可以進行撤銷。

<img src="CCl7bE0DZoMbgIxoB9zjtiJDpWg" src-width="3276" src-height="1776" align="center"/>

# 🪀 改進與修復

- 公司行動相關優化
    <img src="F0KubVhJVoKcvKxGzDMjea3hpcg" src-width="3574" src-height="1774" align="center"/>
    <img src="FeHvbQsAPoba56xHBxvjukugpQg" src-width="3574" src-height="1774" align="center"/>
    <img src="XFGNbz6RkojOaExjxNkjP6RzpRh" src-width="3574" src-height="1774" align="center"/>
    - 標的的搜索組件進行升級
    - BE類不支持的自願類公司行動增加提示。如果後台支持行權，App不支持行權的，不會提醒客戶
    - 客戶名字增加郵件發送時間，該字段展示的是這個公司行動最近的一次郵件發送時間
    - 其它
        - BE類兼容BONUS CONVERTIBLE NOTE方案類型，自動創建時映射為BE-BONUS ISSUE
        - 優化新加坡市場消費稅處理邏輯

- 清算中檢查相關優化項目
    <img src="YNH1bQdSUoHDLDx21kWjApV1pvh" src-width="3574" src-height="1774" align="center"/>
    - 餘額對賬排除凍結流水

- 清算前準備相關優化項目
    <img src="AX6mbaSNfoqhwHxdxEVjx7oIpac" src-width="3574" src-height="1774" align="center"/>
    - 收盤價確認：上一天提醒的報錯項目不再報錯，港股41000 - 46999、49000 - 49499代碼段不再報錯
    - 交易文件檢查：當天沒有發起過交易的不報錯

- 會計中臺上手費用改成從計費取數及文案调整
    - 會計中臺上手費用改成從計費取數
    - 將會計中臺數據源名稱進行修改：
        “[LOTSNSDR]其它第三方費用(賣出)”改爲“代理商收費 - 股票交易-佣金（賣）”
        - “其他費用賬單”改爲“代理商收費”
        - “[LOTSNSCR

<img src="YlynbL2wOovrQUx7lLgjHyTepXb" src-width="2158" src-height="1152" align="center"/>

- WBO首頁dashboard待辦名額卡顯示邏輯更新
    - 出金待辦：申請單狀態=待提交&審批中&修改待審批&删除待審批&駁回待審批
    - 入金待辦：匹配狀態=「未匹配」&&加款狀態=「處理中」&「修改待審批」&「删除待審批」&「駁回待審批」
    - 證券取出待辦：取出申請中「待提交」與「執行中」2個指標卡數量的合計值
    - 證券存入待辦：存入申請中「待提交」與「執行中」2個名額卡數量的合計值
    - 待审核銀行卡：認證狀態=待認證&&删除狀態=未删除

<img src="X3ILbpfo4ojeGixa93hjT2w8p2f" src-width="3838" src-height="1802" align="center"/>

- 异常匯兌記錄新增中文枚舉值
    - 异常換匯記錄頁面中的“渠道匯兌狀態”的枚舉值根據語言環境做對應的展示

<img src="VPK4bdm02oieYFxvwCGj2MV0pNC" src-width="3302" src-height="1708" align="center"/>

- 結單發送方式配置由客戶編號更改為證券賬號維度
    <img src="FmsJbbvbboC9CZxUqLBj2ObjpBh" src-width="3212" src-height="984" align="center"/>
    - 結單發送方式配置更改為「證券賬號」維度，支持按單個賬戶的配置來發送結單（對應APP「結單提醒」功能）
        - 列表增加[證券賬號]列
        - 批量新增文件字段需填入證券賬號，根據模版填寫
    - 路徑：「清算管理」-「日終管理」-「結單管理」-「發送方式配置」

- 線下開戶流程中「是否接收線下結單」的入口移除
    <img src="FghxbtU52ojdqSxOMkWjvKezpib" src-width="1232" src-height="1694" align="center"/>
    - 線下開戶流程中，「是否接收線下結單」的字段移除，統壹到‘結單管理’模塊維護，應用于支持 Account 維度管理結單接收方式
    - 路徑：「KYC」-「資料管理」-「開戶資料」-企業戶線下開戶流程最後一步

