---
title: 2025-12-15 Release Notes
slug: 2ca5bab0c2cc80f0a97cf7923261c911
sidebar_position: 24
version: stable
---


# 2025-12-15 Release Notes

# 🪀 改進與修復

- Customer withdrawal application triggers work order generation
    - When disabled, follow the existing process;
    - When enabled, application auto-generates approval work order. If customer cancels before approval, an abnormal work order is created (closed only by super administrator, no impact on the withdrawal business);
    - A new Tab entry is added to the withdrawal application for easy switching and viewing as needed.
    - WBO - Cash Management - Withdrawals - Withdrawal Request

<img src="/assets/GUPRb1LYpohdQhxjYeLjUbvWpfg.png" src-width="2048" src-height="446" align="center"/>

<img src="/assets/JZ4WbEidNokE5zxg7irjAe02pNc.png" src-width="2048" src-height="761" align="center"/>

- Withdrawal Rejection Page Optimization
    - New copy prompts added to the withdrawal rejection page:If the current counter has enabled work order approval, the prompt copy is: "After confirmation, a work order approval is required; once approved, a notification will be sent to the client informing them that the withdrawal has been rejected";If the current counter has not enabled work order approval, the prompt copy is: "After confirmation, a notification will be sent to the client immediately informing them that the withdrawal has been rejected";
    - Path: WBO-Cash Management-Withdrawal-Withdrawal Request

<img src="/assets/IBChb1WZRoOnCqxqhPEjmfqzpcd.png" src-width="2048" src-height="815" align="center"/>

<img src="/assets/OuWkb2oVDoRmr6xEBDxjyxSZpHg.png" src-width="2048" src-height="843" align="center"/>

- Simplify the Market Management Configuration Process
    - Simplify the Market Management Configuration Process
    - Path: Business Parameter Settings -Market Management

<img src="/assets/LrWab4ftIowJY9x24UHjVz1zpXd.png" src-width="3024" src-height="1614" align="center"/>

