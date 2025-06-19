---
title: 2024-05-06 更新日誌
slug: 24-05-06
sidebar_position: 28
---


# 2024-05-06 更新日誌

# 🎉 新功能

- 交收指令導出（新版）（原來的菜單下線）
    - 路徑：清算管理 - 日終任務 - 交收指令導出
    - 支持導出未來日期的文件
    - 支持導出 HK、SZ、SH 多市場
    - 原來的菜單下線

<img src="/assets/DfPobOvl0oJ7RaxTi2qcFiVkneh.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/TMdlb2aKNovOsyxKehkcLjMYnkk.png" src-width="3574" src-height="1774" align="center"/>

- 企業戶的賬戶資料中新增‘企業實體類型’字段
    - 在線下企業戶的開戶流程中，新增‘企業實體類型’字段，非必填
    - 在 kyc 詳情頁，支持新增字段的展示和編輯功能
    - 在批量修改的功能中，同步新增支持‘企業實體類型’字段的批量更新功能
    <img src="/assets/UBBpbvt4Ho4TljxWCrycFT4cnTb.png" src-width="2180" src-height="1264" align="center"/>

- 清算前準備自義定配置功能
    - 路徑：業務參數設置 - 日終設置 - 清算前準備
    - 檢查階段釋義：交易清算（數據同步 - 清算交收之前的檢查項目）；日終清結算（數據彙總 - 日切之前的檢查項目）
    - 失敗後處理釋義：僅提醒（不會攔截流程，僅提示）、工單審覈（會攔截流程，但是可以手動通過）、強制校驗（會攔截流程，必須通過）
    - 支持的操作：開啓/關閉，選擇失敗後的處理方式
    - 可編輯時間段：操作日終任務之前
    - 編輯時需要審批，工單標識：clearing.before_clearing_ready.setting       
    - 其它：部分檢查項目要求強制檢查，不允許編輯
    <img src="/assets/MglsbJdCkoAhdVxzVMschP7gnpc.png" src-width="3574" src-height="1774" align="center"/>

- 日終任務合併清算和清算初始化配置功能
    - 路徑：業務參數設置 - 日終設置 - 清算參數配置
    - 可編輯時間段：操作日終任務之前
    - 編輯清算初始化配置時需要審批，工單標識：clearing.update_system_config.exec  
    - 其它
        - 修改其它配置開關時請聯繫客戶，在指導下操作      
    <img src="/assets/BGrYb998Qo00lsxDbkEcZY39n1g.png" src-width="3574" src-height="1774" align="center"/>
    <img src="/assets/VOFzbs4MfoEu8exMOt7c2tF1nPc.png" src-width="3574" src-height="1774" align="center"/>

- 公司行動執行完畢後增加郵件通知

<table>
<colgroup>
<col width="130"/>
<col width="414"/>
</colgroup>
<tbody>
<tr><td><p>公司行動類型</p></td><td><p>消息模板</p></td></tr>
<tr><td><p>供股類<br/>RS、ER、OO、RS</p></td><td><img src="/assets/NYGubZhMxoYFi8xRvlfcuiKDnqc.png" src-width="856" src-height="190"/></td></tr>
<tr><td><p>要約類</p></td><td><img src="/assets/N38rb798noNxM3xE9MIcjYEkned.png" src-width="828" src-height="182"/></td></tr>
<tr><td><p>拆合股、換股</p></td><td><img src="/assets/Ym8mbYpNKoZPR3xNfoCcHg4inre.png" src-width="1242" src-height="232" align="center"/></td></tr>
<tr><td><p>ADR 執行</p></td><td><img src="/assets/Iunnb2E6pozlcBx7kZ6cWBrWnab.png" src-width="1268" src-height="222" align="center"/></td></tr>
<tr><td><p>紅利、紅股</p></td><td><img src="/assets/AMktbfyRzoKwlbxAZslcgM3xn4d.png" src-width="1210" src-height="274" align="center"/></td></tr>
<tr><td><p>期權公司行動</p></td><td><img src="/assets/PZQHb8ZGioQuUExaJPGc6oFmnjh.png" src-width="1182" src-height="334" align="center"/></td></tr>
</tbody>
</table>

- WBO 換匯新增撤銷功能
    - 針對客戶提交上的換匯申請，需要根據“客戶匯兌狀態”進行判斷，决定是否可以進行撤銷。其中：當“客戶匯兌狀態”=「已提交」、「匯兌中」時，可以進行撤銷。

<img src="/assets/MnGJbRAy9oWrQXxtrSrcq7R6nvc.png" src-width="3276" src-height="1776" align="center"/>

# 🪀 改進與修復

- 公司行動相關優化
    - 標的的搜索組件進行升級
    <img src="/assets/HZJabC6Exo7ckixgUGRcr827nlF.png" src-width="3574" src-height="1774" align="center"/>
    - BE 類不支持的自願類公司行動增加提示。如果後台支持行權，App 不支持行權的，不會提醒客戶
    <img src="/assets/PARwb6bdfobEuyxXdppcGvcPnfd.png" src-width="3574" src-height="1774" align="center"/>
    - 客戶名字增加郵件發送時間，該字段展示的是這個公司行動最近的一次郵件發送時間
    <img src="/assets/PWM4b9pM1oD31dxdr1acCbtynHl.png" src-width="3574" src-height="1774" align="center"/>
    - 其它
        - BE 類兼容 BONUS CONVERTIBLE NOTE 方案類型，自動創建時映射為 BE-BONUS ISSUE
        - 優化新加坡市場消費稅處理邏輯

- 清算中檢查相關優化項目
    - 餘額對賬排除凍結流水
    <img src="/assets/BizJbnRanoEF5OxyboEckSSLnWe.png" src-width="3574" src-height="1774" align="center"/>

- 清算前準備相關優化項目
    - 收盤價確認：上一天提醒的報錯項目不再報錯，港股 41000 - 46999、49000 - 49499 代碼段不再報錯
    - 交易文件檢查：當天沒有發起過交易的不報錯
    <img src="/assets/F9eUbl9iYoc5uWxQo77csMZUnTh.png" src-width="3574" src-height="1774" align="center"/>

- 會計中臺上手費用改成從計費取數及文案调整
    - 會計中臺上手費用改成從計費取數
    - 將會計中臺數據源名稱進行修改：
        - “其他費用賬單”改爲“代理商收費”
    “[LOTSNSDR]其它第三方費用 (賣出)”改爲“代理商收費 - 股票交易 - 佣金（賣）”
    - “[LOTSNSCR

<img src="/assets/DwWibAQs3o4EcoxzYcOcSKjDnAg.png" src-width="2158" src-height="1152" align="center"/>

- WBO 首頁 dashboard 待辦名額卡顯示邏輯更新
    - 出金待辦：申請單狀態=待提交&審批中&修改待審批&删除待審批&駁回待審批
    - 入金待辦：匹配狀態=「未匹配」&&加款狀態=「處理中」&「修改待審批」&「删除待審批」&「駁回待審批」
    - 證券取出待辦：取出申請中「待提交」與「執行中」2 個指標卡數量的合計值
    - 證券存入待辦：存入申請中「待提交」與「執行中」2 個名額卡數量的合計值
    - 待审核銀行卡：認證狀態=待認證&&删除狀態=未删除

<img src="/assets/Kv4ZbWHpAoyycbxbsVScBvAxnBf.png" src-width="3838" src-height="1802" align="center"/>

- 异常匯兌記錄新增中文枚舉值
    - 异常換匯記錄頁面中的“渠道匯兌狀態”的枚舉值根據語言環境做對應的展示

<img src="/assets/TizbbF5c6ovCY4xBB0TcAhcdnxh.png" src-width="3302" src-height="1708" align="center"/>

- 結單發送方式配置由客戶編號更改為證券賬號維度
    - 結單發送方式配置更改為「證券賬號」維度，支持按單個賬戶的配置來發送結單（對應 APP「結單提醒」功能）
        - 列表增加 [證券賬號]列
        - 批量新增文件字段需填入證券賬號，根據模版填寫
    - 路徑：「清算管理」-「日終管理」-「結單管理」-「發送方式配置」
    <img src="/assets/QCepbMTuboCjZvxLlP2cFztOnZd.png" src-width="3212" src-height="984" align="center"/>

- 線下開戶流程中「是否接收線下結單」的入口移除
    - 線下開戶流程中，「是否接收線下結單」的字段移除，統壹到‘結單管理’模塊維護，應用于支持 Account 維度管理結單接收方式
    - 路徑：「KYC」-「資料管理」-「開戶資料」- 企業戶線下開戶流程最後一步
    <img src="/assets/GUcdbAZy9oMzqdxSXfNc7uSXn2e.png" src-width="1232" src-height="1694"/>
    
