---
title: 系统介绍
slug: I11BwVETbigTEtkRNEncAdRsnEc
sidebar_position: 1
---


# 系统介绍

PageHub 是 Whale 提供的可视化页面搭建作业工具，方便运营人员、投放人员通过组件拖拽的配置方式，自行搭建行销相关页面(H5 web page)，无需技术开发，配置完成后即可发布上线。

<img src="GmG5b3ODXoj6LExKJ5LjWzLKpRe" src-width="2782" src-height="2032" align="center"/>

# 页面管理

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ 菜单入口：运营系统 &gt; PageHub</p>
</div>

<img src="NBftbkfB4o63iVxR0ORjalJ9pBf" src-width="2758" src-height="1420" align="center"/>

本作业可以管理维护透过 PageHub 制作出来的页面，页面功能说明如下：

- 功能区
    - 搜索框
        <img src="ImigbryCmoJSaPxAAiJjk3FCpp3" src-width="1280" src-height="554" align="center"/>
        - 输入标题、页面地址、序号和筛选发布状态进行搜索
    - 新建页面
        <img src="TkzgbukK0oU3qPxD0TUjuklHpqd" src-width="1280" src-height="554" align="center"/>
        - 点击新建页面

- 列表
    - 序号
        <img src="Bd9fb7IXRopS07xmDQqjuhNCpye" src-width="2276" src-height="1330" align="center"/>
        - 页面序号
    - 标题
        <img src="TBRjblD8Vox4JAxg2lzj0UPppih" src-width="2244" src-height="1318" align="center"/>
        - 页面标题，当配置好自定义页面后点击打开头部标题栏展示的名字
    - 发布状态
        <img src="V276bq3QMoARUlxKg5GjcPIkpMc" src-width="2256" src-height="1308" align="center"/>
        - 未发布：该状态下页面为草稿状态，需要点击发布才会生效
        - 已发布：页面点击发布按钮并发布成功后则为该状态，该状态页面直接生效
        - 发布失败：当前页面点击发布按钮但是由于种种原因失败
    - 页面地址
        <img src="QvjjblwgioIodHxY0n2jIVPWp5f" src-width="3306" src-height="918" align="center"/>
        <img src="BanobuSQRoDr7CxSWzfj1OVOprd" src-width="3286" src-height="1002" align="center"/>
        - 展示链接以及二维码两种链接形态，可复制当前链接直接打开预览，也可扫描二维码预览
    - 创建人
        - 创建该页面的操作人名称
    - 最后发布时间
        <img src="T0Aqb1M6GojnuCxabGSjz2lKpQT" src-width="2224" src-height="1284" align="center"/>
        - 最新一次发布更新的时间
    - 操作
        <img src="BL9Hb0JqAo539gxSFKPjxzyupLe" src-width="2248" src-height="1256" align="center"/>
        - 编辑：点击打开编辑当前页面
        - 复制：点击复制当前页面内容创建并打开新页面
        - 删除：删除当前页面（谨慎使用）

# 页面组件

**组件树/物料库：**组件树木展示当前页面中已经配置的组件列表，点击对应组件名称可进行编辑配置。物料库为所有可配置的组件类型，点击/拖拽对应组件类型会自动添加至预览页面中。

<img src="AtT1bKfa5ojAs4xmZQljytmWp4b" src-width="664" src-height="754" align="center"/>

<img src="BcnFbdgb8oCPdTxBnfrjK5OGpMh" src-width="690" src-height="1268" align="center"/>

**导航头：**可以设置导航背景色、Logo 点击跳转后的链接、导航右侧可操作的功能。

<img src="EZfXbPSQLoByR4xfuZEjGfSvpzh" src-width="3828" src-height="1946" align="center"/>

**图片：**支持上传图片和图片地址，没有大小限制。

<img src="HoD3bGC3eoR8eQxvP6Qj2md3pof" src-width="3822" src-height="1928" align="center"/>

<b>热区：</b>

- 链接分享效果：用户点击后会复制分享链接到剪贴版中
- 海报分享效果：用户点击后按所配置图片生成一张海报，可以下载保存以海报形式分享出去
- 面对面分享效果：用户点击后按所配置图片生成打开二维码，可截图或者直接扫码进行分享。
- 开户：点击后跳转开户页面
- 入金：点击后跳转入金页面
- 转仓：点击后跳转转仓页面
- 跳转链接：点击后可自定义跳转到配置链接地址页面
- 开户-入金-链接：用户未开户跳转开户，已开户跳转入金，入金完成后直接对转所配置的链接页面。

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 单个热区可以添加配置多个热区点击事件。</p>
</div>

<img src="V5rfbVHI5oy7Ezxo7qrjO8Wjpad" src-width="3812" src-height="1942" align="center"/>

<b>按钮组：</b>

1. 按钮点击事件支持配置：

链接分享效果：用户点击后会复制分享链接到剪贴版中

```text
- 海报分享效果：用户点击后按所配置图片生成一张海报，可以下载保存以海报形式分享出去
- 面对面分享效果：用户点击后按所配置图片生成打开二维码，可截图或者直接扫码进行分享。
- 开户：点击后跳转开户页面
- 入金：点击后跳转入金页面
- 转仓：点击后跳转转仓页面
- 跳转链接：点击后可自定义跳转到配置链接地址页面
- 开户-入金-链接：用户未开户跳转开户，已开户跳转入金，入金完成后直接对转所配置的链接页面。
1. 文件链接配置

如果按钮需要附带超链，例如协议文本等等，可以在此设置文案以及跳转链接


 b.  其他配置
```

是否悬浮固定底部：勾选后则用户滚动屏幕时，按钮始终展示在页面底部

组件背景颜色：可设置按钮外的组件背景颜色。

<img src="ENbPb55YJopVCBxN4C6jlk7gpuf" src-width="3792" src-height="1948" align="center"/>

**间隔区：**调节不同组件间高度

<img src="GpYeb1gM2ofATyxfRrGj7ULapyc" src-width="3810" src-height="1952" align="center"/>

<b>我的战绩：</b>

<img src="FPCfbMNEmopaOzx31Fajvzm9pbg" src-width="3824" src-height="1918" align="center"/>

<b>助力得奖：</b>

<img src="Oe1mb9SfJolGdzxiz26jzYkTpGg" src-width="3786" src-height="1868" align="center"/>

**组件快捷操作：**预览区组件支持上下移动，复制和删除。

<img src="KENmbhNesogP7GxOKXEj6ZJHpUb" src-width="2406" src-height="1832" align="center"/>

# 页面<b>配置</b>

页面配置区域参数有：多语言设置，适用区域，活动配置，UI配置，链接参数，分享设置。如下图：

<img src="HxhrbVBAKoAcJTx7ebzjwS5yplf" src-width="696" src-height="632" align="center"/>

- **多语言设置：**可配置当前页面需要支持的语种与页面标题，也支持快捷切换。
    <img src="DHtzbK6Q1o1NbpxDMuCj427Kpde" src-width="800" src-height="356" align="center"/>

- **适用区域设置：**可配置能打开当前页面的 IP 区域有哪些。分为不限制、仅支持区域、不支持区域三种类型可选。
    - 不限制：则表示任何地区 IP 均可访问该页面
    - 仅支持区域：仅限制所配置的地区 IP 可访问该页面
    - 不支持区域：仅限制所配置的地区 IP 不可访问该页面

- **活动配置：**可配置当前页面是否需要登录后才可访问
    - 不需要登录：则用户不需要登录账号即可访问页面
    - 通用登录页：则用户需要在通用登录页面中进行登录后才可访问页面

- **UI 配置：**页面的背景颜色配置
- **链接参数配置：**链接渠道号配置，若为了统计数据需要区分渠道来源的话可以配置专属渠道号。否则可以不填。
- **分享配置：**页面分享功能的配置
    - 链接分享模式：即点击分享时直接复制链接或者当前链接形式直接分享，可配置分享链接时自带的分享标题以及分享描述。分享链接可单独配置，不配置则默认分享当前页面的链接，若配置后则分享时将分享配置之后的页面链接。分享缩略图即当分享链接至微信或者其他需要缩略图展示的平台时，可展示当前配置的缩略图。
    - 面对面分享模式：即点击分享时直接弹出自带二维码的图片，可截图分享或者当面扫码打开对应页面。需配置二维码弹窗背景图片。
    - 海报分享模式：即点击分享时弹出一张海报，可截图分享或者直接分享海报，可配置分享海报时自带的分享标题以及分享描述。需配置海报图片。

