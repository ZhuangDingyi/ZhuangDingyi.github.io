---
layout: archive
title: "SAUC: Sparsity-Aware Uncertainty Calibration for Spatiotemporal Prediction with Graph Neural Networks"
permalink: /Projects/sauc/
author_profile: true
---

*Massachusetts Institute of Technology, Aug. 2023 ~ Feb. 2024*  
*Advisor*:  [Prof. Shenhao Wang](https://dcp.ufl.edu/faculty/urp/), [Prof. Jinhua Zhao](https://mobility.mit.edu/)  
*Publication*: [NeurIPS Temporal Graph Learning Workshop (Best paper candidate)](https://neurips.cc/virtual/2023/workshop/66544)
*Resources*: [Openreview](https://openreview.net/forum?id=W9QOkbGccr) 

Quantifying uncertainty is crucial for robust and reliable predictions. However, existing spatiotemporal deep learning mostly focuses on deterministic prediction, overlooking the inherent uncertainty in such prediction. Particularly, highly-granular spatiotemporal datasets are often sparse, posing extra challenges in prediction and uncertainty quantification. To address these issues, this paper introduces a novel post-hoc Sparsity-aware Uncertainty Calibration (SAUC) framework, which calibrates uncertainty in both zero and non-zero values. To develop SAUC, we firstly modify the state-of-the-art deterministic spatiotemporal Graph Neural Networks (ST-GNNs) to probabilistic ones in the pre-calibration phase. Then we calibrate the probabilistic ST-GNNs for zero and non-zero values using quantile approaches. Through extensive experiments, we demonstrate that SAUC can effectively fit the variance of sparse data and generalize across two real-world spatiotemporal datasets at various granularities. Specifically, our empirical experiments show a 20\% reduction in calibration errors in zero entries on the sparse traffic accident and urban crime prediction. Overall, this work demonstrates the theoretical and empirical values of the SAUC framework, thus bridging a significant gap between uncertainty quantification and spatiotemporal prediction. 

![](../../files/sauc.png)

<!-- <object data="../../files/stzinb.pdf" width="1000" height="1000" type='application/pdf'></object> -->