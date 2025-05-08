---
title: 18. 风控问题
slug: ZRKmwiiYDiLpCAkvio5cMBkInCc
sidebar_position: 17
---


# 18. 风控问题

## 18A. 问：设置交易额度的分币种或全币种有何分别？

<b>答：</b>设置分币种需要选上对应货币，并限制在对应市埸使用；
设置全币种可以在不同市埸上用交易额度限额，如设置了全币种就不能设置分币种的交易额度。

> 显示出来的额度会换算成 HKD。

## 18B. 问：若同时存在全局限额和客户限额会怎么判断？

<b>答：</b>限额顺序是客户限额 &gt; 全局限额；证券限额 &gt; 全局限额；交易员限额 &gt; 全局限额。

> 例如：全局限额配置了【客户买入拒绝限额】为 &gt; 500,000 HKD；
>            用户 A 配置了【客户买入拒绝限额】为 &gt; 400,000 HKD 拒绝。
> 用户 A 下买单 410,000，命中了设置限额，会直接拒绝；用户 B 下买单 410,000，则会判断全局配置的限额，未命中，则会通过。

## 18C. 问：客户的现金账户户口余额为正数，没有向券商借款，为什么会占用融资额度？

答：「风控管理＞客户融资」的“已占用融资额度”包括已冻结不可用的现金。

<img src="/assets/GEBcbfofqo9LtYxmTRlcRsUZn7d.png" src-width="2828" src-height="1346" align="center"/>

<img src="/assets/EkMQbDjSZoN6zLxUb3Rc3XVLnNc.png" src-width="2856" src-height="1602" align="center"/>

## 18D. 问：子账户总资产没有负数，为什么「风控状态」是「危险」？

答：如果主账户的「风控状态」是「危险」，子账户也会跟从主账户，「风控状态」为「危险」。

## 18E. 问：Haircut 管理中「指数 Haircut 管理」的指数会否自动更新成份股列表内的资讯？

答：「指数 Haircut 管理」会自动更新股票成份股比重、股份等资讯。

<img src="/assets/SUzUbaMKEoQuvcxZ1WYc5A1TnFe.png" src-width="2858" src-height="1298" align="center"/>

## 18F. 问：「Haircut 管理」中，现金或融资户口可否独立使用不同的 haircut%去计算？

答：现金户口和融资户口不可以独立用不同的 haircut%去计算。

<img src="/assets/Il5qbFVIro8BDixGBnmcR6aynff.png" src-width="2808" src-height="1330" align="center"/>

