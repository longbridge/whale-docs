---
title: 2023-10-9 更新日誌
slug: 23-10-9
sidebar_position: 41
---


# 2023-10-9 更新日誌

### 核心功能

1. 【新增】港交所 CTF 文件自動導入
    - 新增港交所 CTF 文件自動導入，日常在下午 16:30 前導入完毕
    - 注意：需要開通該功能的可聯繫客服對接
    - 路徑：清算管理 - 文件導入
    <img src="/assets/LsEQbB3NLoSRaZxp9nMch3mnnX7.png" src-width="3576" src-height="1692" align="center"/>

2. 【新增】機構合約延遲交收
    - 新增機構合約維護模塊，機構合約會在交易日的日切步驟後自動生成
    - 本次迭代支持針對機構合約進行延遲交收操作，解決 CCASS 延遲交收的記賬問題
    - 注意：交收日&gt;=當前賬務日期的機構合約才可進行延遲交收
    - 後續會迭代相關報表、機構收費等相關功能
    - 路徑：清算管理 - 合約管理 - 機構合約
    <img src="/assets/JCeXbNlvKom7XXxmCTScIbHTn7c.png" src-width="3574" src-height="1158" align="center"/>

3. 【優化】結單 email 重發功能
    - 主要用於特殊情況（如數據異常等）下重發結單
    - 重新生成結單後狀態為“重新生成待發送”，該狀態下發送的 email 消息可為定制消息模版
    - 注意：狀態為“生成失敗”“生成中”不可重發
    - 路徑：「清算管理」-「日終管理」-「結單管理」-「結單查詢」
    <img src="/assets/Xv4VbEda6oaCk0xct0FcQjTNn9e.png" src-width="2200" src-height="1242" align="center"/>

4. 【優化】資產查詢頁面結構，增加圖表，資產類別更清晰
    - 區分不同的風控狀態及風控指標
    - 增加現金凍結明細查詢（點擊""凍結現金""即可查詢）
    - 增加即時倉位明細查詢（點擊""已結算數量""即可查詢）
    - 路徑：「資產帳戶」-「資產總覽」-「客戶帳戶查詢」
    <img src="/assets/EwoabarNyok7ufxSGZ1cju5RnWh.png" src-width="3780" src-height="1780" align="center"/>

5. 【優化】Margin Call 詳情頁面增加顧客現金明細
    - 路徑：「風控管理」-「風險預警」-「實時預警」
    <img src="/assets/OJBebHAijolaEQxsJToceChynyb.png" src-width="3794" src-height="1766" align="center"/>

6. 【優化】Margin Call 支援對部分預警記錄設定到固定日期自動平倉或到截止日自動平倉
    - 路徑：「風控管理」-「風險預警」-「實時預警」
    <img src="/assets/P80xbSdWZoOFXLxDggwcOZWUnbf.png" src-width="3722" src-height="1698" align="center"/>

7. 【優化】手工提現銀行卡列表在卡號後面顯示幣種
    - 路徑：款項管理 - 出金 - 手工提現
    <img src="/assets/HPfLbX3ksouJDKxhyOwcpC0Znvf.png" src-width="2826" src-height="1042" align="center"/>

8. 【優化】轉入或轉出股票時如果客戶位未完成 HKIDR 授權則提示“OTCR 申報需要請聯絡客戶完成 HKIDR 授權”
    - 路徑 1：證券管理 - 證券存入 - 手工入倉
    - 路徑 2：證券管理 - 證券取出 - 手工出倉
    <img src="/assets/WVs7bXISvoYwFpxUIugcqN67ndv.png" src-width="2816" src-height="1440" align="center"/>
        ### 其他功能
    whale 支持最近登錄記憶
    - 首次登錄時，需輸入企業編號，賬號密碼登錄
    - 非首次登錄時，系統記憶最近登錄企業，僅輸入賬號密碼登錄即可
    <img src="/assets/MgqvbC1ZEoiKZDxIvsYc5np2nZE.png" src-width="2514" src-height="1208" align="center"/>
        
