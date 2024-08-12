---
layout: archive
title: "Large Language Models for Travel Behavior Prediction"
permalink: /Projects/llm_mp/
author_profile: true
---

*Massachusetts Institute of Technology, Aug. 2023 ~ Jan. 2024*  
*Advisor*:  [Prof. Jinhua Zhao](https://mobility.mit.edu/)  
*Publication*: [TRC-30](https://trc-30.epfl.ch/)
*Resources*: [arxiv](https://arxiv.org/abs/2312.00819) 

Travel behavior prediction is a fundamental task in transportation demand management. The conventional methods for travel behavior prediction rely on numerical data to construct mathematical models and calibrate model parameters to represent human preferences. Recent advancement in large language models (LLMs) has shown great reasoning abilities to solve complex problems. In this study, we propose to use LLMs to predict travel behavior with prompt engineering without data-based parameter learning. Specifically, we carefully design our prompts that include 1) task description, 2) travel characteristics, 3) individual attributes, and 4) guides of thinking with domain knowledge, and ask the LLMs to predict an individual's travel behavior and explain the results. We select the travel mode choice task as a case study. Results show that, though no training samples are provided, LLM-based predictions have competitive accuracy and F1-score as canonical supervised learning methods such as multinomial logit, random forest, and neural networks. LLMs can also output reasons that support their prediction. However, though in most of the cases, the output explanations are reasonable, we still observe cases that violate logic or with hallucinations.

![](../../files/llm_mp.jpg)

<!-- <object data="../../files/stzinb.pdf" width="1000" height="1000" type='application/pdf'></object> -->