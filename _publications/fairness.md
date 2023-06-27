---
layout: archive
title: "Fairness-enhancing deep learning for ride-hailing demand prediction"
permalink: /Projects/fariness/
author_profile: true
---

*MIT, Sep. 2021 ~ May. 2023*  
*Advisor*:  [Prof. Shenhao Wang](https://dcp.ufl.edu/faculty/urp/), [Prof. Jinhua Zhao](https://mobility.mit.edu/)  
*Resources*: [arxiv](https://arxiv.org/abs/2303.05698)  

Short-term demand forecasting for on-demand ride-hailing services is one of the fundamental issues in intelligent transportation systems. However, previous travel demand forecasting research predominantly focused on improving prediction accuracy, ignoring fairness issues such as systematic underestimations of travel demand in disadvantaged neighborhoods. This study investigates how to measure, evaluate, and enhance prediction fairness between disadvantaged and privileged communities in spatial-temporal demand forecasting of ride-hailing services. A two-pronged approach is taken to reduce the demand prediction bias. First, we develop a novel deep learning model architecture, named socially aware neural network (SA-Net), to integrate the socio-demographics and ridership information for fair demand prediction through an innovative socially-aware convolution operation. Second, we propose a bias-mitigation regularization method to mitigate the mean percentage prediction error gap between different groups. The experimental results, validated on the real-world Chicago Transportation Network Company (TNC) data, show that the de-biasing SA-Net can achieve better predictive performance in both prediction accuracy and fairness. Specifically, the SA-Net improves prediction accuracy for both the disadvantaged and privileged groups compared with the state-of-the-art models. When coupled with the bias mitigation regularization method, the de-biasing SA-Net effectively bridges the mean percentage prediction error gap between the disadvantaged and privileged groups, and also protects the disadvantaged regions against systematic underestimation of TNC demand. Our proposed de-biasing method can be adopted in many existing short-term travel demand estimation models, and can be utilized for various other spatial-temporal prediction tasks such as crime incidents predictions.

![](../../files/fairness.png)