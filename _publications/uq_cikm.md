---
layout: archive
title: "Uncertainty Quantification via Spatial-Temporal Tweedie Model for Zero-inflated and Long-tail Travel Demand Prediction"
permalink: /Projects/uq_cikm/
author_profile: true
---

*MIT, Mar. 2023 ~ Aug. 2023*  
*Collaborators*: [Xinke Jiang](https://jiangxinke.github.io/), Dingyi Zhuang, Xianghui Zhang, Hao Chen, Jiayuan Luo, Xiaowei Gao  
*Publication*: Proceedings of the CIKM 2023  
*Resources*: [arxiv](https://arxiv.org/abs/2306.09882) [GitHub](https://github.com/STTDAnonymous/STTD)

Understanding Origin-Destination (O-D) travel demand is crucial for transportation management. However, traditional spatial-temporal deep learning models grapple with addressing the sparse and long-tail characteristics in high-resolution O-D matrices and quantifying prediction uncertainty. This dilemma arises from the numerous zeros and over-dispersed demand patterns within these matrices, which challenge the Gaussian assumption inherent to deterministic deep learning models. To address these challenges, we propose a novel approach: the Spatial-Temporal Tweedie Graph Neural Network (STTD). The STTD introduces the Tweedie distribution as a compelling alternative to the traditional 'zero-inflated' model and leverages spatial and temporal embeddings to parameterize travel demand distributions. Our evaluations using real-world datasets highlight STTD's superiority in providing accurate predictions and precise confidence intervals, particularly in high-resolution scenarios.

![](../../files/STTD.png)