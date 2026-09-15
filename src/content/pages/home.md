---
title: 个人简介
description: 电子科技大学计算机科学与技术硕士研究生，关注具身智能、机器人感知与导航、在线适应，具备机器人系统集成和软硬件协同工程经验。
eyebrow: ABOUT
navigation:
  label: 关于
  order: 10
author:
  name: 曹家宇
  bio: 电子科技大学计算机科学与技术硕士研究生
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

- **电子科技大学智能计算研究院** — 计算机科学与技术硕士研究生（2026.09–）
- **电子科技大学自动化工程学院** — 自动化本科（2021.09–2025.06）
  - 绩点：3.4
  - 核心课程：模拟电路、数字电路、信号与系统、自动控制原理、现代控制理论、模式识别

## 当前研究方向

研究兴趣集中在具身智能、视觉—语言导航／动作（VLN/VLA）与在线适应，关注测试时适应与训练（TTA/TTT）、持续／在线学习以及世界模型等方向。目前主要进行相关文献阅读、方法梳理与实验复现准备，希望进一步探索具身智能体在分布变化和长期交互过程中的在线学习与适应能力。

## 科研与工程经历

### Unitree Go2 具身机器人视觉定位与自主导航系统（2026.05-2026.07）

- 基于 Unitree Go2 EDU、Jetson Orin NX、Intel RealSense D435i 与 L1 LiDAR 搭建具身机器人实验平台，完成 JetPack 6.x、Ubuntu 与 ROS 2 Humble 环境部署和迁移。
- 集成 NVIDIA cuVSLAM 双目视觉惯性里程计，完成位姿、注册点云与稀疏 landmarks 数据向现有自主导航框架的桥接，并替换原有 Point-LIO 定位模块。
- 完成相机、机器人与地图坐标系转换，以及高度、姿态、偏航角和异常数据处理；对 30/60 FPS 双目与 IMU 配置进行真实机器人测试和调优。
- 解决 Jetson USB OTG、DDS 跨网卡通信及 PVA/GPU 硬件加速相关问题，在真实环境中完成走廊绕行返回和短距离自主导航演示；同时搭建基于 MkDocs 与 GitLab CI/CD 的实验室技术文档站，沉淀部署、调试和交付文档。

### DNTR 小目标检测框架复现（2026.03）

- 基于 MMDetection 复现 DNTR，完成 AITOD 数据集上的模型配置、小规模训练与推理验证。
- 分析 DN-FPN、Trans R-CNN 等关键模块及其在密集小目标检测中的作用。

### 神经网络模型量化与部署（2022.12–2023.07）

- 使用 PPQ 对 ResNet、YOLO 等模型进行低比特量化。
- 使用 ONNX Runtime 部署量化模型，记录和分析不同策略下的精度与性能。

## 其他项目经历

### FPGA 存储板软件开发（2024.12–2025.04）

- 实现对 16 片 NOR Flash 阵列、EEPROM、CAN 总线与 UART 接口的统一控制，完成数据采集、命令处理、存储和磨损均衡。
- 使用 Verilog 编写控制逻辑并完成软件仿真，完成 60 余页技术报告。

### 非接触式红外温度测量模块（2023.09–2024.12）

- 独立完成硬件设计：采集热电堆信号，通过运放电路处理到 ΔΣ-ADC 最大输入范围，完成原理图、PCB、器件选型及焊接调试。
- 使用 STM32F103C8T6 处理 ADC 数据，通过 SPI 驱动 OLED，并使用 UART 和定时器中断实现上位机通信。
- 使用 Qt/C++ 开发上位机，实时显示温度曲线并支持数据点标注与标签。

### Python 微服务设计与 DevOps 实践（2024.03–2024.06）

- 团队完成共享单车与校园门禁系统的后端和管理员前端，课程项目成绩 93 分。
- 后端使用 Python Sanic 和 MySQL，服务间通过 HTTP API 通信。
- 前端使用 HTML、CSS、JavaScript 和 jQuery，系统通过 Docker 部署至云服务器。

## 专业技能

- **机器人系统：** ROS 2 Humble、Unitree Go2、Jetson Orin、RealSense D435i、LiDAR、NVIDIA cuVSLAM、DDS
- **人工智能：** PyTorch、MMDetection、PPQ、ONNX Runtime、模型量化与推理部署
- **嵌入式与 FPGA：** STM32、ADC、SPI、UART、CAN、PCB、Qt/C++、Verilog
- **开发语言：** Python、C/C++、Verilog、JavaScript
- **工程工具：** Linux、Git、Docker、MkDocs、GitLab CI/CD、MySQL

## 校内经历

* 2021.11 电子科技大学自动化学院创客中心电子设计新生赛二等奖
* 2022.09–2022.12 自动化创新能力提升训练营负责人
* 2022.09–2023.06 电子科技大学自动化学院学生创新中心负责人
