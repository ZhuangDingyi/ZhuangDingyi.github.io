---
layout: archive
title: "Understanding and Mitigating the Braess Paradox in Dynamic Traffic using Reinforcement Learning"
permalink: /Projects/braess/
author_profile: true
---

*Massachusetts Institute of Technology, Sep. 2021 ~ Mar. 2022*  
*Advisor*:  [Prof. Cathy Wu](http://www.wucathy.com/blog/), [Prof. Jinhua Zhao](https://mobility.mit.edu/)  
Co-worker: Yuzhu Huang, [Vindula Jayawardana](https://vindulamj.github.io/web/), Dajiang Suo  
*Publication*: 2022 IEEE 25th International Conference on Intelligent Transportation Systems (ITSC)    
*Resources*: [ar5iv](https://ar5iv.labs.arxiv.org/html/2203.03726v1) [Video for Understanding](https://www.dropbox.com/s/wx4sbn2d0gd0kyx/ITSC_Braess_720p_edited.mp4?dl=0) [Video for Mitigating](https://www.dropbox.com/s/ut1q97ovs49ppfr/version2.mp4?dl=0)  

# Understand the Braess's Paradox
The Braess’s Paradox (BP) is the observation that adding one or more roads to the existing road network will counter-intuitively increase traffic congestion and slow down the overall traffic flow. Previously, the existence of the BP is modeled using the static traffic assignment model, which solves for the user equilibrium subject to network flow conservation to find the equilibrium state and distributes all vehicles instantaneously. Such approach neglects the dynamic nature of real-world traffic, including vehicle behaviors and the interaction between vehicles and the infrastructure. As such, this article proposes a dynamic traffic network model and empirically validates the existence of the BP under dynamic traffic. In particular, we use microsimulation environment to study the impacts of an added path on a grid network. We explore how the network flow, vehicle travel time, and network capacity respond, as well as when the BP will occur.

![](../../files/braess.gif)

<object data="../../files/braess.pdf" width="1000" height="500" type='application/pdf'></object>


---

# Mitigate the Braess's Paradox
The Braess’s Paradox (BP) is the observation that adding one or more roads to the existing road network will increase traffic congestion and slow down the overall traffic flow. In the context of traffic assignment, BP is usually proven by assuming that the travel cost for taking each road is related to the number of vehicles on it and that all vehicles are distributed instantaneously. Such assumption may not be accurately representing the BP phenomenon in real-world traffic scenarios. If BP is examined in a non-instantaneous, dynamic case, can we use mixed autonomy to mitigate the congestion introduced by the shortest path? In this project, we use the Flow project to design and simulate driver behaviors on a rotary road network with and without a shortcut. We find that BP exists within a certain number of vehicles. We try to alleviate the congestion caused by BP by adding autonomous vehicles (AVs) and applying reinforcement learning (RL) algorithm Proximal Policy Optimization (PPO) for control. Results show that the AV learns not to attenuate traffic but blocks the road for better system efficiency. This project is related to the Unit 3 contents about Markov Decision Process and deep reinforcement learning.

<object data="../../files/braess_mitigate.pdf" width="1000" height="500" type='application/pdf'></object>