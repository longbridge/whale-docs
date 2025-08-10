---
title: 2024-12-02 更新日誌
slug: JEfKwYAyniQVA6kQfhlcT0Xfnkd
sidebar_position: 13
---


# 2024-12-02 更新日誌

# 🎉 新功能

- Margin Call 新增緊湊版頁面設置功能
    - 表格設置組件新增樣式自定義設置，可根據實際使用場景切換標準模式和緊湊模式，系統默認標準模式
    - 該組件本次應用在 Margin Call 頁面，後續將推廣至其他後台頁面
    - 路徑：「風控管理」-「Margin Call」-「風險預警/股票追收/平倉訂單」

<img src="/assets/V8wRb9S1Do88Dxx4C4fcX9OInrc.png" src-width="3346" src-height="1634" align="center"/>

- 支票入金新增凍結、解凍流程
    - 對於「直接入賬」或者「憑證關聯」操作入賬時，當入金方式爲支票，可根據實際業務訴求選擇是否凍結。如選擇凍結，則可以人爲修改預計解凍時間。
    - 路徑 1：「款項管理」-「入金」-「入金申請」
    - 入金匹配關聯入金申請入賬時，當入金方式爲支票，可根據實際業務訴求選擇是否凍結。如選擇凍結，則可以人爲修改預計解凍時間。
    - 路徑 2：「款項管理」-「入金」-「入金匹配」
    - 入金審核時，當入金方式爲支票，會展示是否凍結相應信息
    - 路徑 3：「款項管理」-「入金」-「入金審核」
    - 對於已經凍結的支票入金，在“預計解凍時間”之前可以後臺手工解凍，也可以等系統自動解凍。
    - 路徑 4：「款項管理」-「入金」-「入金記錄」
    - 人工提交解凍申請後，需等待工單審批。
    - 路徑 5：「款項管理」-「入金」-「入金記錄」
    <img src="/assets/CYMWb419BoYhEcxPCUzce47mnkd.png" src-width="2650" src-height="1368" align="center"/>
    <img src="/assets/DfLabFpeAoUq2Nx5mo0cEk5Zn2f.png" src-width="1886" src-height="1316" align="center"/>
    <img src="/assets/UVqdbA88iohr1BxrPm1c6Kxnnpc.png" src-width="2118" src-height="1554" align="center"/>
    <img src="/assets/L92Ab0thGoiV5OxAyIncIdUxnld.png" src-width="2144" src-height="1168" align="center"/>
    <img src="/assets/W3L7b8Igyo89mHx2bzocD8Oondb.png" src-width="2180" src-height="484" align="center"/>
    <img src="/assets/CdTSbm2choopu8xu6oVcRljSn3e.png" src-width="2120" src-height="610" align="center"/>

# 🪀 改进与修复

- 批量設置 Margin Call 豁免
    - 支持批量設置個性化 Margin Call 客戶豁免規則
    - 客戶選擇可調用客戶組列表
    - 路徑：「業務參數設置」-「風控」-「風控參數」

<img src="/assets/M4G3b9P3JoX2vjxxhLIc5RW2nng.png" src-width="3354" src-height="1638" align="center"/>

- 支持新股新增融資池備註
    - 支持新股在設定融資池時，設定自定義備註，同時展示在 App
    - 路徑：「新股認購」-「新股認購」-「港股認購」- 「基本信息」

<img src="/assets/QdotbZ6jqoPnG8xagW3cEmvMnxf.png" src-width="2346" src-height="1356" align="center"/>

- 控制台新增人員邏輯最佳化
    - 在全局設置 - 人員 - 添加人員時，支援建立經紀人、交易員、普通管理員等三種類型。
    - 路徑：「全局設置」-「人員」-「添加人員」

<img src="/assets/MzpjbCrwmoPAkXxHlKvcGf0EnDl.png" src-width="2234" src-height="1174" align="center"/>

- CRS 文件生成
    - 支持歷史數據導入
    - 展示申報財務地區
    - 支持編輯實際控制人等賬戶信息

<img src="/assets/KdfJbRpHQoLQ0bxOOWGcMftEnpf.png" src-width="3276" src-height="834" align="center"/>

<img src="/assets/G1X2brR0uoP89VxlsUCcgdiZnqg.png" src-width="3282" src-height="1696" align="center"/>

<img src="/assets/N25qbRnE5ozheqxIziscIYqtn8g.png" src-width="3320" src-height="1798" align="center"/>

