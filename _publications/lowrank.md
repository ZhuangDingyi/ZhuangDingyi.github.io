---
layout: archive
title: "Low-rank hankel tensor completion for traffic speed estimation"
permalink: /Projects/lowrank/
author_profile: true
---

*McGill University, Feb. 2021 ~ Jun. 2021*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/)  
Co-worker: [Xudong Wang](https://martina1024.github.io/) , [Yuankai Wu](https://kaimaoge.github.io/)  
*Resources*: [ar5iv](https://ar5iv.labs.arxiv.org/html/2105.11335) [GitHub](https://github.com/mcgill-smart-transport/traffic_state_estimation)  
* This paper studies the traffic state estimation (TSE) problem using sparse observations from mobile sensors. TSE can be considered a spatiotemporal interpolation problem in which the evolution of traffic variables (e.g., speed/density) is governed by traffic flow dynamics (e.g., partial differential equations).
* We consider TSE as a spatiotemporal matrix completion/interpolation problem, and apply spatiotemporal Hankel delay embedding to transforms the original incomplete matrix to a fourth-order tensor.
* The proposed framework only involves two hyperparameters—spatial and temporal window lengths, which are easy to set given the degree of data sparsity. 

![](../../files/lowrank.png)

<object data="../../files/lowrank.pdf" width="1000" height="1000" type='application/pdf'></object>