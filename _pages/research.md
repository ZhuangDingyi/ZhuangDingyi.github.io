---
<!-- layout: archive -->
title: "Research"
permalink: /research/
author_profile: true
---
**Research project list**

<!-- TOC -->
- [Neural Spatiotemporal Point Process for City-Scale Traffic Accident Modeling](#neural-spatiotemporal-point-process-for-city-scale-traffic-accident-modeling)
- [Modeling Paratransit Demand with Hankel-structured Poisson Tensor Factorization](#modeling-paratransit-demand-with-hankel-structured-poisson-tensor-factorization)
- [Inductive Graph Neural Networks for Spatiotemporal Kriging](#inductive-graph-neural-networks-for-spatiotemporal-kriging)
- [Reinforcement Learning-based Traffic Signal Control in Special Scenarios](#reinforcement-learning-based-traffic-signal-control-in-special-scenarios)
- [A General Framework Based on Temporally Dynamic Adjacency Matrix for Long-Term Traffic Prediction](#a-general-framework-based-on-temporally-dynamic-adjacency-matrix-for-long-term-traffic-prediction)
- [Bayesian Poisson Tensor Factorization for Learning Paratransit Mobility Patterns](#bayesian-poisson-tensor-factorization-for-learning-paratransit-mobility-patterns)
- [A Spatial-temporal Deep Learning Framework for Network-wide Bus Passenger Flow Prediction](#a-spatial-temporal-deep-learning-framework-for-network-wide-bus-passenger-flow-prediction)
- [A Pseudo-3D Convolutional Neural Network based Framework for Short-term Mixed Passenger Flow Prediction in Large-scale Public Transit](#a-pseudo-3d-convolutional-neural-network-based-framework-for-short-term-mixed-passenger-flow-prediction-in-large-scale-public-transit)
- [Understanding semantic similarity among subway stations using smart card data](#understanding-semantic-similarity-among-subway-stations-using-smart-card-data)
- [Understanding the bike sharing travel demand and cycle lane network: the case of Shanghai](#understanding-the-bike-sharing-travel-demand-and-cycle-lane-network-the-case-of-shanghai)

<!-- /TOC -->

------
## Neural Spatiotemporal Point Process for City-Scale Traffic Accident Modeling
*McGill University, Sep. 2020 ~ Nov. 2020*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/)  
Co-worker: [Yuankai Wu](https://kaimaoge.github.io/)  
* Defined the conditional probability functions of accident timing and location as nonlinear functions of the history, whose representation could be effectively learned by sequence-to-sequence networks.
* Formulated the conditional probabilities of future accident timing and location as log-normal mixture models with parameters conditioned on the historical representation.
* Experiments on real-world datasets from three cities confirmed NSTPP's capacity to outperform deep learning and conventional point process in accident prediction

![](http://zhuangdingyi.github.io/files/stpp.png)

## Modeling Paratransit Demand with Hankel-structured Poisson Tensor Factorization
*McGill University, May. 2020 ~ Aug. 2020*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/)  
* Derived and implemented Hankel-based Poisson Tensor Factorization to learn latent seasonal spectrum of paratransit service for the disabled people in the region-level. [PDF](https://zhuangdingyi.github.io/files/sparse_demand_estimation.pdf) 
* Enhanced interpretability traditional probabilistic factorization model, and conducted cases studies on both temporal and spatial latent modes to discover behaviors from sparse and dispersed paratransit data.  

## Inductive Graph Neural Networks for Spatiotemporal Kriging
*McGill University, Apr. 2020 ~ Jun. 2020*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/)  
Co-worker: [Yuankai Wu](https://kaimaoge.github.io/)  
* Developed a dynamic sampling based inductive framework of graph neural network to recover data for unsampled sensors on a network/graph structure. [arXiv](https://arxiv.org/abs/2006.07527) [code](https://github.com/Kaimaoge/IGNNK)
* Learned the spatial message passing mechanism by generating random subgraph samples and adjacency, then reconstructing signals on them.
* Implemented and outperformed advanced spatial kriging and matrix completion models on various spatiotemporal datasets to test the inductive ability.
* Paper in the proceeding of *AAAI 2020*.
![](http://zhuangdingyi.github.io/files/ignnk.png)

## Reinforcement Learning-based Traffic Signal Control in Special Scenarios
*McGill University, Mar. 2020 ~ May 2020*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/), [Doina Precup](https://www.cs.mcgill.ca/~dprecup/)  
Co-worker: [Zhenyuan Ma](https://zhenyuanma.github.io/)  
* Point out that reinforcement learning traffic signal control should not only focus on regular intersection, but also special scenarios like high-way offramps. [video](https://www.youtube.com/watch?v=wtCUl-WCAj0&feature=youtu.be) [code](https://github.com/ZhuangDingyi/COMP-767-Project) [PDF](https://zhuangdingyi.github.io/files/rl_control.pdf)
* Both Reinforcement learning efficiency and saftey issues will greatly influenced by scenario changing like simply adding an offramp, which leaves concerns for using reinforcement learning signal control.
![](http://zhuangdingyi.github.io/files/comp767.gif)

## A General Framework Based on Temporally Dynamic Adjacency Matrix for Long-Term Traffic Prediction
*McGill University, Dec. 2019 ~ Feb. 2020*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/)  
*Co-worker*: Fuqiang Liu, Jiawei Wang, [Jingbo Tian](https://joshuatian-mcgill.github.io/) and [Prof. Luis Miranda-Moreno](https://www.mcgill.ca/civil/luis-miranda-moreno)  

* Introduced a general framework with Bias Block to improve the performance of seq2seq extreme long-time prediction.
* Used STGCN, DCRNN and GWNet as base model and chose Matrix Factorization, VAR and SVR as the baseline to prove that our model obtain higher accuracy and stronger interpretability. 
* Geodata visualization with Python and paper writing (In proceeding of KDD'2020).
![](http://zhuangdingyi.github.io/files/framework_kdd.png) 

## Bayesian Poisson Tensor Factorization for Learning Paratransit Mobility Patterns  
*McGill University, Oct. 2019 ~ Dec. 2019*  
*Advisor*:  [Prof. Lijun Sun](https://lijunsun.github.io/)  
* Derived and implemented Bayesian Poisson Tensor Factorization to learn latent patterns of paratransit service for the disabled people in the region-level. [PDF](https://zhuangdingyi.github.io/files/project_cive_648.pdf) 
* Discovered multiple peak-time, indifference between weekdays&weekends as temporal patterns and discuss the spatial regularity.
* Offered a trial on a marginal research field and appealed for more researches of the disabled and how their transit can be improved.

## A Spatial-temporal Deep Learning Framework for Network-wide Bus Passenger Flow Prediction 
*National University of Singapore, Apr. 2019~ Aug. 2019*  
*Advisors*: [Prof. Lee Der-Horng](https://www.eng.nus.edu.sg/cee/staff/lee-der-horng/) and [Prof. Jiangang Jin](http://naoce.sjtu.edu.cn/en/teachershow.aspx?info_lb=24&info_id=8&flag=2)  
*Co-worker*: Dr. Siyu Hao  
* Proposed an end-to-end deep learning framework (spatial-temporal block) that aims at making multi-step collective prediction for different types of bus passenger flow (boarding and alighting) in a network-wide region level. [PDF](https://zhuangdingyi.github.io/files/bus_flow_pred.pdf)  
* Captured simultaneously both long-range spatial dependencies and the correlations with channel dimension and predicted the boarding demand and alighting demand at each region in the near future.

![](http://zhuangdingyi.github.io/files/st_block.png) 

## A Pseudo-3D Convolutional Neural Network based Framework for Short-term Mixed Passenger Flow Prediction in Large-scale Public Transit 
*National University of Singapore, Apr. 2019~ Aug. 2019*  
*Advisors*: [Prof. Lee Der-Horng](http://www.eng.nus.edu.sg/cee/people/ceeleedh/) and [Prof. Jiangang Jin](http://naoce.sjtu.edu.cn/en/teachershow.aspx?info_lb=24&info_id=8&flag=2)  
*Co-worker*: Dr. Siyu Hao and De Zhao  
*  Proposed a Pseudo-3D Convolutional Neural Network (Pseudo-3DCNN) based model to predict the public transport passenger flow in a network-wide region level. [PDF](https://zhuangdingyi.github.io/files/pseudo3d.pdf)
*  Took metro passenger flow, bus passenger flow as well as the transfer flow between metro system and bus system together into consideration instead of merely predicting a single type of passenger flow.
*  The feasibility and effectiveness of our proposed model has been demonstrated on real-world data collected in Singapore.
*  Paper presented in TRB 2020.

![](http://zhuangdingyi.github.io/files/pseudo_3d.png) 


## [Understanding semantic similarity among subway stations using smart card data](https://zhuangdingyi.github.io/files/Final_report_prof_lee.pdf) 
*National University of Singapore, July. 2018~ Sept. 2018*  
*Advisors*: [Prof. Lee Der-Horng](https://www.eng.nus.edu.sg/cee/staff/lee-der-horng/) and [Prof. Jiangang Jin](http://naoce.sjtu.edu.cn/en/teachershow.aspx?info_lb=24&info_id=8&flag=2)  
*Co-worker*: Dr. Siyu Hao  
  * Proposed a new conception to understand metropolitan mobility as words  
  * Independently selected mobility features then trained stacked autoencoder network to discover mobility semantics  
  * Applied topic modeling (TF-IDF+SVD+LDA) on scraped POI data to find service semantics 
  * Paper published in *Transportation Research Part C: Emerging Technology* [doi](https://doi.org/10.1016/j.trc.2020.02.017) 

![](http://zhuangdingyi.github.io/files/stns.gif) 

## [Understanding the bike sharing travel demand and cycle lane network: the case of Shanghai](https://zhuangdingyi.github.io/files/2018-08-23-Pre-Bikesharing.pdf)  
*Shanghai Jiao Tong University, Mar. 2017~ June. 2018*  
*Advisor*: [Prof. Jiangang Jin](http://naoce.sjtu.edu.cn/en/teachershow.aspx?info_lb=24&info_id=8&flag=2)  
  * Proposed methods to scrape data from bike-sharing application  
  * Applied graphic clustering to mine the insight of bike-sharing data  
  * Suggested a method to explore cycle lane network then presented advice for urban planning  
  * Paper accepted published in *International Journal of Sustainable Transportation* [doi](https://www.tandfonline.com/doi/full/10.1080/15568318.2019.1699209) .

![](http://zhuangdingyi.github.io/files/geographic_barrier_titled.png) 
