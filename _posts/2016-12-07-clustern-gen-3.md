---
layout: post
title:  "Moving to new cloud hosting"
date:   2016-12-07 00:00:00 +0100
categories: hosting
---

We're in the process of moving all our hosted sites to our 3rd generation production cluster.
At the same time we migrate to our brand new live-meeting architecture.
The transition typically causes 1 hour of downtime, and will be done off-hours.

Back in mid 2015 we realized that we can't scale up, i.e. adapt to more users per site, properly in our virtual machine based setup.
We took a gamble on [Kubernetes](http://kubernetes.io/) and struggled with it a bit in our first generation cluster.
We've hosted half of our customer sites there, and it allowed us some scaling, but had more than one single point of failure.

Our second generation cluster never made it to production.
There we evaluated storage and high-availability options for services all our sites depend on, such as MySQL and Kafka.

In our new cluster, all critical services are replicated. This means two things:

 * It survives failure of individual nodes.

 * We can add replicas to support higher load.

Some of our work has been carried out in the open, such as:

 * https://github.com/Yolean/kubernetes-kafka

 * https://github.com/Yolean/kubernetes-mysql-cluster

 * https://github.com/Reposoft/keycloak-ha-kubernetes

 * https://github.com/Yolean/build-contract

In a series of upcoming blog post we'll revisit some of our design decisions along this journey.
