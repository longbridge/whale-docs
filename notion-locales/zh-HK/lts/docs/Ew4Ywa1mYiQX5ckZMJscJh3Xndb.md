---
slug: Ew4Ywa1mYiQX5ckZMJscJh3Xndb
title: 20. 運營系統問題
sidebar_position: 19
---


# 20. 運營系統問題


# 20A 問：客戶轉換登錄手機號後，早前購買的行情卡能否繼續使用？


答：用戶的行情卡是與用戶 ID 綁定，轉換登錄手機號不會影響用戶使用已有行情卡。


# 20B 問：為何上傳「批量發放卡券獎勵」模板文件失敗？


答：模板文件的「活動 code」和「獎品 code」字段只能填寫英文字母和數字，如輸入了中文字、特殊符號會引致不能導入。


![image.png](/assets/7047d6dce3ffcab0fea24bef94d77248.png)


![image.png](/assets/15c42cc315565d8f6227d16a9aec7174.png)


# 20C 問：投放系統中用戶分群的「用戶地區」如何篩選客戶？


答：根據以下字段來作篩選，


優先級 1：居住國家/地區


優先級 2：手機區號


優先級 3：注冊時的 IP 地區


![image.png](/assets/cfbfa2bcf209906ea81a0f4bd1cb9d1f.png)


# 20D 問：App Push 如何向指定客戶進行推送。


答：


1. 先在「用戶分群」創造指定客戶的分群


![image.png](/assets/6cc496bcfb773e3ca7a37e63fb8d7eae.png)


2. 然後到「運營計劃」中創建計劃


![image.png](/assets/ff58f38bc654834486bca3d7ab39ed2c.png)


3. 選擇「定時型 - 單次」和「觸發時間」


![image.png](/assets/f0497c616d630dc9ff3f04c02cf625be.png)


4. 選擇用戶分群


![image.png](/assets/1e2a85db25fdebf73197348530eea254.png)


5. 選擇「Push」及輸入內容 


![image.png](/assets/a17ef05d0330b3e153fdfd388399c162.png)


6. 保存及審核後在「計劃列表」按「啟用」


![image.png](/assets/08526f6f0d33044a0a4406d6d18d0a6a.png)

