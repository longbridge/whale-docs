---
title: 14. SFTP 问题
slug: C3fPwDaHxioXAHkRT8jcYA2hnLf
sidebar_position: 13
---


# 14. SFTP 问题

## 14A 问：如何设置 SFTP？

<b>答：</b>请参考操作文档 [SFTP 软件操作指引](./VoMUwGS2UiUsg7kciaacGKyhnjb)

## 14B 问：为什么 SFTP 里面 DB 备份的资料遗失了几天？

<b>答：</b>日常备份时间：北京时间周二到周六早上 6 点 - 8 点开始备份在第二天早上备份上一天资料。

通俗来说，周二备份的是周一产生的数据，周三是周二以此类推周六备份周五。所以周日、周一是没有备份资料的。

## 14C 问：为什么我 Statement 里面的资料遗失了几天？ 

<b>答：</b>日结单、月结单没有生成，就不会有结单资料的备份。日结单生成的前提是当天有资金／持仓变动。

## 14D 问：为什么我的 Log 目录资料遗失了几天？ 

<b>答：</b>目前仅为租用户开通了 `bingo,member-auth,msg-box,togo-proxy` 四个服务的日志会上传到 SFTP。
另外，我们预设为租户保存最近 14 天的日志，超过 14 天的日志会看不到记录。

