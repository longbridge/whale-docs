---
title: 2024-01-08 更新日誌
slug: 24-01-08
sidebar_position: 38
---


# 2024-01-08 更新日誌

# 🎉 新功能

- 新增：入金新增【直接入帳】功能
    - 可實現入金快速入帳，預設需要審批，也可依實際業務需求設為無需審批直接入帳

<img src="/assets/OcsIbeOQ8ochAOxKSzXczkemnCE.png" src-width="1280" src-height="619" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/A7NEbJnT5oMC1BxlF30cWGemnfe.png" src-width="1280" src-height="631" align="center"/>

<p>-需要審批</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/RXsGbkvceoBd2hxpPEzcntIwneh.png" src-width="1280" src-height="619" align="center"/>

<p>-無需審批</p>
</div>
</div>

- 新增：AML 後台支持批量調用 TESS
    - AML 後台展示已開通賬戶或有 TESS 調用記錄的客戶信息，並增加：審核狀態、篩查時間、開戶資料入口
    - 增加批量調用 TESS 入口
    路徑：「CRM」-「KYC」-「AML」-「批量調用」
    - 增加批量取消監控功能
    路徑：「CRM」-「KYC」-「AML」-「勾選客戶」-「批量取消監控」
    - 開戶列表詳情，可實時獲取 TESS 的 case_id
    路徑：「CRM」-「KYC」-「開戶列表」-「詳情」-「TESS 命中記錄」

<img src="/assets/HDzKbiQu9o9a63xTHeuc2Iqbnpe.png" src-width="970" src-height="1324" align="center"/>

- 新增：工單支持審核人和創建人不爲同壹人
    - 工單在配置審核流程時，支持各個節點設置審核人與創建人是否壹致
    路徑：「設置」-「身份管理」-「審批流程配置」

<img src="/assets/G49lbFxtNo1vzUx31exc1qFMncb.png" src-width="2564" src-height="1058" align="center"/>

# 🪀 改進與修復

- 改進：入金&出金功能全面優化
    詳見：[入金&出金優化說明 ](Vvpkw7jqeitbhjkQVTncStRBn4c) 

- 改進：風控菜單調整優化
    - 「客戶參數」移動到「業務參數設置」-「風控」-「授信客戶參數」
    - 「保證金」-「保證金風險指標」和「風控報表」移動到「報表管理」--在報表發佈後會同步下線原菜單
    - 部分菜單位置及菜單名稱調整
    詳見：[風控菜單調整優化](Ifv0wLOvhifRslkFuvLc0zAvnwe) 
    <img src="/assets/K3fcbq3SPoLfD6xL33icNep5nkI.png" src-width="3766" src-height="1670" align="center"/>

- 改進：批量變更調減額度支持自動授信
    - 原邏輯：授信若發生降額，則不再觸發自動授信
    - 新邏輯：批量變更額度 調減額度時可以自定義降額是否限制自動授信（導入授信時請根據模版字段說明填寫文件）
    路徑：「風控管理」-「授信額度」-「批量變更」

<img src="/assets/Tuy6bkHDOoChpbxuzgqcbPjdnpg.png" src-width="3266" src-height="1102" align="center"/>

- 改進：增加批量解凍功能
    - 路徑：「資產賬戶」-「凍結/解凍」-「資產解凍」

<img src="/assets/VELqbPQi4omJjJxlr6lc4Vj5nSd.png" src-width="3280" src-height="1688" align="center"/>

- 改進：手工調賬 - 股票調賬去除數量強校驗
    - 多頭持倉支持調成負數
    - 數量超出當前持倉仍會提示（客戶詳細資產數據可點擊「客戶」進行查看）
    路徑：「資產賬戶」-「調賬」-「手工調賬」-「股票調賬」

<img src="/assets/NeAwbsXoCocnhVx2gKCcSLJKnoh.png" src-width="3236" src-height="1646" align="center"/>

- 改進：KYC 後台信息展示
    - 開戶列表後台，支持通過：新標籤頁、新窗口打開詳情鏈接
    - 開戶列表後台，默認展示 20 條數據

<img src="/assets/HEokbMAZ4ory2JxqkSJcxRDfnAe.png" src-width="1032" src-height="602" align="center"/>

- 改進：開通公司戶口時，支持公司董事信息/公司股東信息/公司受益人信息/公司授權人信息/指令授權人信息同步複用操作。
    - 開通公司戶口、公司戶 kyc 資料頁編輯時，都可以同步複用
    - 選擇複用模塊後，可以繼續在新增/編輯彈窗內修改內容
    <img src="/assets/Q964bOVNzoKHwMxXO97cba0Bnrg.png" src-width="1914" src-height="1438" align="center"/>
    <img src="/assets/AIrkbZGH6oH0OPxaNnRcCdiynZf.png" src-width="1900" src-height="1446" align="center"/>

- 改進：開戶後台可直接開通虛擬資產賬戶
    - 開戶資料後台，可提交虛擬資產賬戶開通申請。提交開戶申請，選擇現金賬戶且 賬戶標識為：Virtual Account，即可開通虛擬資產賬戶。虛擬資產賬戶僅支持交易虛擬資產。
    路徑：「CRM」-「KYC」-「開戶資料」-「添加開戶申請」-「開通賬戶」-「現金賬戶」

<img src="/assets/QcG4bagXQo8dwoxDEpQcNn0xnWb.png" src-width="1758" src-height="680" align="center"/>

- 改進：結單發送方式配置、結單模版、客戶備注接工單審批
    - 發送方式配置：新增、批量新增、編輯場景均對接工單。審批流對應如下：
        - 新增：BSS-清算管理 - 結單管理 - 發送方式配置新增
        - 批量新增：BSS-清算管理 - 結單管理 - 發送方式配置批量新增
        - 編輯：BSS-清算管理 - 結單管理 - 發送方式配置修改
    - 結單模版修改對接工單。審批流對應如下：
        - 编辑：BSS-清算管理 - 结单管理 - 结单模板修改
    - 客戶備注：新增、批量導入、編輯
        - 新增：BSS-清算管理 - 結單管理 - 客戶備注新增
        - 批量導入：BSS-清算管理 - 結單管理 - 客戶備注批量導入
        - 編輯：BSS-清算管理 - 結單管理 - 客戶備注修改
    - 注：本次所涉審批場景均默認系統自動審批通過，如需添加審批，請至對應的審批流進行配置修改。配置路徑：「全局設置」-「身份管理」-「審批流程配置」
    <img src="/assets/DrofbwzdSojSkWxh4h7ccRlwnJh.png" src-width="3728" src-height="896" align="center"/>

- 改進：支持批量分配和更新經紀人
    - 經紀人管理後台，支持批量分配和更新經紀人
    路徑：「證券後台」-「經紀人管理」-「關係管理」-「批量分配」

<img src="/assets/Jjz2b1ryFoWoDaxjYqgcAiUrnDh.png" src-width="1708" src-height="510" align="center"/>

- 改進：更新日誌展示
    - 控制台首頁更新日誌展示優化，最近更新默認展示，讓您更便捷的了解系統更新內容

<img src="/assets/OeBtb1qvnoGQIexHkgHcYbU0nvc.png" src-width="1046" src-height="984" align="center"/>

