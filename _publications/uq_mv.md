---
layout: archive
title: "Uncertainty Quantification of Spatiotemporal Travel Demand with Probabilistic Graph Neural Networks"
permalink: /Projects/uq_mv/
author_profile: true
---

*MIT, Sep. 2021 ~ May. 2023* 
*Advisor*:  [Prof. Shenhao Wang](https://dcp.ufl.edu/faculty/urp/), [Prof. Haris N Koutsopoulos](https://coe.northeastern.edu/people/koutsopoulos-haris/), [Prof. Jinhua Zhao](https://mobility.mit.edu/) 
*Resources*: [arxiv](https://arxiv.org/abs/2303.04040) [doi](https://doi.org/10.1109/TITS.2024.3367779)

Recent studies have significantly improved the prediction accuracy of travel demand using graph neural networks. However, these studies largely ignored uncertainty that inevitably exists in travel demand prediction. To fill this gap, this study proposes a framework of probabilistic graph neural networks (Prob-GNN) to quantify the spatiotemporal uncertainty of travel demand. This Prob-GNN framework is substantiated by deterministic and probabilistic assumptions, and empirically applied to the task of predicting the transit and ridesharing demand in Chicago. We found that the probabilistic assumptions (e.g. distribution tail, support) have a greater impact on uncertainty prediction than the deterministic ones (e.g. deep modules, depth). Among the family of Prob-GNNs, the GNNs with truncated Gaussian and Laplace distributions achieve the highest performance in transit and ridesharing data. Even under significant domain shifts, Prob-GNNs can predict the ridership uncertainty in a stable manner, when the models are trained on pre-COVID data and tested across multiple periods during and after the COVID-19 pandemic. Prob-GNNs also reveal the spatiotemporal pattern of uncertainty, which is concentrated on the afternoon peak hours and the areas with large travel volumes. Overall, our findings highlight the importance of incorporating randomness into deep learning for spatiotemporal ridership prediction. Future research should continue to investigate versatile probabilistic assumptions to capture behavioral randomness, and further develop methods to quantify uncertainty to build resilient cities.

![](../../files/uq_mv.png)