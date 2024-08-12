---
layout: archive
title: "A Universal Framework of Spatiotemporal Bias Block for Long-Term Traffic Forecasting"
permalink: /Projects/biasblock/
author_profile: true
---

*McGill University, Sep. 2020 ~ Aug. 2021*  
*Advisor*: [Prof. Lijun Sun](https://lijunsun.github.io/)  
*Publication*: IEEE Transactions on Intelligent Transportation Systems 
*Resources*: [doi](https://doi.org/10.1109/TITS.2022.3157129) 

Recent studies have demonstrated the great success of graph convolutional networks in short-term traffic forecasting (e.g., 15-30 min ahead) tasks by capturing dependencies in road network structure. Based on these models, long-term forecasting can be achieved by two approaches: (1) recursively generating a one-step-ahead prediction and (2) adapting the models to sequence-to-sequence (seq2seq) learning. However, in practice, these two approaches often show poor performance in long-term forecasting tasks. The recursive approach suffers from the error accumulation problem, as the model is trained based on one-stepahead loss. On the other hand, seq2seq shows convergence issues that limit its application. To address the issues for long-term forecasting, in this paper, we propose a universal framework that directly transforms any existing state-of-the-art models for onestep-ahead prediction to achieve more accurate long-term forecasting. The proposed framework consists of two components a base model and a bias block. The base model is assumed to be a well-trained state-of-the-art one-step-ahead forecasting model, and the bias block is constructed by a spatiotemporal graph neural network composed of gated temporal convolution layers and graph convolution layers. The base model and the bias block are residually-connected so that we can substantially reduce the training complexity. Extensive experiments are conducted on existing benchmark datasets. We experiment with several state-of-the-art models in the literature as base models, and our results demonstrate the ability of the proposed universal framework to greatly improve the long-term prediction accuracy for all models.

![](../../files/biasblock.png)

<!-- <object data="../../files/stzinb.pdf" width="1000" height="1000" type='application/pdf'></object> -->