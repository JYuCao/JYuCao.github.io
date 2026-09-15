---
title: 个人简介
description: 自动化与计算机科学背景，关注人工智能、软硬件系统和工程实践。
eyebrow: ABOUT
navigation:
  label: 关于
  order: 10
author:
  name: 曹家宇
  bio: 电子科技大学计算机科学与技术硕士
  avatar: /images/profile.jpg
  avatarAlt: 曹家宇的头像
  location: 中国 · 成都
  links:
    - label: jycao233@163.com
      href: mailto:jycao233@163.com
    - label: GitHub
      href: https://github.com/JYuCao
      rel: me
---

## 教育背景

- **电子科技大学自动化工程学院** — 自动化本科（2021.09–2025.06）
  - 绩点：3.4
  - 核心课程：模拟电路、数字电路、信号与系统、自动控制原理、现代控制理论、模式识别
- **电子科技大学智能计算研究院** — 计算机科学与技术硕士（2026.09–2029.06）

## 项目经历

### 非接触式红外温度测量模块

- 独立完成硬件设计：采集热电堆信号，通过运放电路处理到 ΔΣ-ADC 最大输入范围，完成原理图、PCB、器件选型及焊接调试。
- 使用 STM32F103C8T6 处理 ADC 数据，通过 SPI 驱动 OLED，并使用 UART 和定时器中断实现上位机通信。
- 使用 Qt/C++ 开发上位机，实时显示温度曲线并支持标点与标签。

### Python 微服务设计与 DevOps 实践

- 团队完成共享单车／校园门禁系统的后端和管理员前端，课程项目成绩 93 分。
- 后端使用 Python Sanic 和 MySQL，服务间通过 HTTP API 通信。
- 前端使用 HTML、CSS、JavaScript 和 jQuery，系统通过 Docker 部署至云服务器。

### FPGA 存储板软件开发

- 协调 16 片 NOR Flash 阵列、EEPROM、CAN 总线与 UART 接口，完成数据采集、命令控制、存储和读写均衡。
- 使用 Verilog 编写控制逻辑并完成软件仿真，产出 60 余页技术实现论文。

## 科研经历

### 神经网络模型量化与部署

- 使用 PPQ 对 ResNet、YOLO 等模型进行低比特量化。
- 使用 ONNX Runtime 部署量化模型，记录和分析不同策略下的精度与性能。

### DNTR 小目标检测框架复现

- 基于 MMDetection 复现 DNTR，完成小规模训练与推理验证。
- 研究 Transformer 自注意力机制在 R-CNN 小目标检测中的作用。

## 专业技能

- **嵌入式：** STM32、ADC、SPI、UART、CAN、硬件电路与 PCB、Qt/C++。
- **FPGA：** Verilog、模块时序、硬件接口与软件仿真。
- **Web：** HTML、CSS、JavaScript、Vue 3、Python Sanic、MySQL、Docker。
- **人工智能：** PyTorch、模型训练、量化、部署与推理。

## 校内经历

- 2021.11 电子科技大学自动化学院创客中心电子设计新生赛二等奖
- 2021.09–2022.06 自动化学院分团委学生会职员
- 2021.11–2023.06 自动化学院学生创新中心优秀成员
- 2022.09–2022.12 自动化创新能力提升训练营负责人
- 2022.09–2023.06 自动化学院学生创新中心负责人
