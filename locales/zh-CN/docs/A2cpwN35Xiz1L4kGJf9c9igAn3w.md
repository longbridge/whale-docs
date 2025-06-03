---
title: 2024-01-08 更新日志
slug: 24-01-08
sidebar_position: 39
---


# 2024-01-08 更新日志

# 🎉 新功能

- 新增：入金新增【直接入帐】功能
    - 可实现入金快速入帐，预设需要审批，也可依实际业务需求设为无需审批直接入帐

<img src="/assets/OcsIbeOQ8ochAOxKSzXczkemnCE.png" src-width="1280" src-height="619" align="center"/>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/A7NEbJnT5oMC1BxlF30cWGemnfe.png" src-width="1280" src-height="631" align="center"/>

<p>-需要审批</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/RXsGbkvceoBd2hxpPEzcntIwneh.png" src-width="1280" src-height="619" align="center"/>

<p>-无需审批</p>
</div>
</div>

- 新增：AML 后台支持批量调用 TESS
    - AML 后台展示已开通账户或有 TESS 调用记录的客户信息，并增加：审核状态、筛查时间、开户资料入口
    - 增加批量调用 TESS 入口
    路径：「CRM」-「KYC」-「AML」-「批量调用」
    - 增加批量取消监控功能
    路径：「CRM」-「KYC」-「AML」-「勾选客户」-「批量取消监控」
    - 开户列表详情，可实时获取 TESS 的 case_id
    路径：「CRM」-「KYC」-「开户列表」-「详情」-「TESS 命中记录」

<img src="/assets/HDzKbiQu9o9a63xTHeuc2Iqbnpe.png" src-width="970" src-height="1324" align="center"/>

- 新增：工单支持审核人和创建人不为同壹人
    - 工单在配置审核流程时，支持各个节点设置审核人与创建人是否壹致
    路径：「设置」-「身份管理」-「审批流程配置」

<img src="/assets/G49lbFxtNo1vzUx31exc1qFMncb.png" src-width="2564" src-height="1058" align="center"/>

# 🪀 改进与修复

- 改进：入金&出金功能全面优化
    详见：[入金&出金优化说明 ](Vvpkw7jqeitbhjkQVTncStRBn4c) 

- 改进：风控菜单调整优化
    - 「客户参数」移动到「业务参数设置」-「风控」-「授信客户参数」
    - 「保证金」-「保证金风险指标」和「风控报表」移动到「报表管理」--在报表发布后会同步下线原菜单
    - 部分菜单位置及菜单名称调整
    详见：[风控菜单调整优化](Ifv0wLOvhifRslkFuvLc0zAvnwe) 
    <img src="/assets/K3fcbq3SPoLfD6xL33icNep5nkI.png" src-width="3766" src-height="1670" align="center"/>

- 改进：批量变更调减额度支持自动授信
    - 原逻辑：授信若发生降额，则不再触发自动授信
    - 新逻辑：批量变更额度 调减额度时可以自定义降额是否限制自动授信（导入授信时请根据模版字段说明填写文件）
    路径：「风控管理」-「授信额度」-「批量变更」

<img src="/assets/Tuy6bkHDOoChpbxuzgqcbPjdnpg.png" src-width="3266" src-height="1102" align="center"/>

- 改进：增加批量解冻功能
    - 路径：「资产账户」-「冻结/解冻」-「资产解冻」

<img src="/assets/VELqbPQi4omJjJxlr6lc4Vj5nSd.png" src-width="3280" src-height="1688" align="center"/>

- 改进：手工调账 - 股票调账去除数量强校验
    - 多头持仓支持调成负数
    - 数量超出当前持仓仍会提示（客户详细资产数据可点击「客户」进行查看）
    路径：「资产账户」-「调账」-「手工调账」-「股票调账」

<img src="/assets/NeAwbsXoCocnhVx2gKCcSLJKnoh.png" src-width="3236" src-height="1646" align="center"/>

- 改进：KYC 后台信息展示
    - 开户列表后台，支持通过：新标签页、新窗口打开详情链接
    - 开户列表后台，默认展示 20 条数据

<img src="/assets/HEokbMAZ4ory2JxqkSJcxRDfnAe.png" src-width="1032" src-height="602" align="center"/>

- 改进：开通公司户口时，支持公司董事信息/公司股东信息/公司受益人信息/公司授权人信息/指令授权人信息同步复用操作。
    - 开通公司户口、公司户 kyc 资料页编辑时，都可以同步复用
    - 选择复用模块后，可以继续在新增/编辑弹窗内修改内容
    <img src="/assets/Q964bOVNzoKHwMxXO97cba0Bnrg.png" src-width="1914" src-height="1438" align="center"/>
    <img src="/assets/AIrkbZGH6oH0OPxaNnRcCdiynZf.png" src-width="1900" src-height="1446" align="center"/>

- 改进：开户后台可直接开通虚拟资产账户
    - 开户资料后台，可提交虚拟资产账户开通申请。提交开户申请，选择现金账户且 账户标识为：Virtual Account，即可开通虚拟资产账户。虚拟资产账户仅支持交易虚拟资产。
    路径：「CRM」-「KYC」-「开户资料」-「添加开户申请」-「开通账户」-「现金账户」

<img src="/assets/QcG4bagXQo8dwoxDEpQcNn0xnWb.png" src-width="1758" src-height="680" align="center"/>

- 改进：结单发送方式配置、结单模版、客户备注接工单审批
    - 发送方式配置：新增、批量新增、编辑场景均对接工单。审批流对应如下：
        - 新增：BSS-清算管理 - 结单管理 - 发送方式配置新增
        - 批量新增：BSS-清算管理 - 结单管理 - 发送方式配置批量新增
        - 编辑：BSS-清算管理 - 结单管理 - 发送方式配置修改
    - 结单模版修改对接工单。审批流对应如下：
        - 编辑：BSS-清算管理 - 结单管理 - 结单模板修改
    - 客户备注：新增、批量导入、编辑
        - 新增：BSS-清算管理 - 结单管理 - 客户备注新增
        - 批量导入：BSS-清算管理 - 结单管理 - 客户备注批量导入
        - 编辑：BSS-清算管理 - 结单管理 - 客户备注修改
    - 注：本次所涉审批场景均默认系统自动审批通过，如需添加审批，请至对应的审批流进行配置修改。配置路径：「全局设置」-「身份管理」-「审批流程配置」
    <img src="/assets/DrofbwzdSojSkWxh4h7ccRlwnJh.png" src-width="3728" src-height="896" align="center"/>

- 改进：支持批量分配和更新经纪人
    - 经纪人管理后台，支持批量分配和更新经纪人
    路径：「证券后台」-「经纪人管理」-「关系管理」-「批量分配」

<img src="/assets/Jjz2b1ryFoWoDaxjYqgcAiUrnDh.png" src-width="1708" src-height="510" align="center"/>

- 改进：更新日志展示
    - 控制台首页更新日志展示优化，最近更新默认展示，让您更便捷的了解系统更新内容

<img src="/assets/OeBtb1qvnoGQIexHkgHcYbU0nvc.png" src-width="1046" src-height="984" align="center"/>

