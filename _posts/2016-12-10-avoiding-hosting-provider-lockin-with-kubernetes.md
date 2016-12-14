---
layout: post
title: "Avoiding hosting provider lock in"
date: 2016-12-10 11:00:00 +0100
categories:
---

We've basically struggled with two aspects of our Kubernetes hosting: persistent disks and external IP+ports.
Google laid out the architecture of kubernetes, based on their [Borg](http://research.google.com/pubs/pub43438.html).
They have their BigTable and probably don't use disk based persistence directly,
and their load balancing is in a different league than at a small organization like us.

## Persistent storage

Since our first production cluster we've probably evaluated every volume type there is in [the access mode table](http://kubernetes.io/docs/user-guide/persistent-volumes/#access-modes).
We were used to file systems.
Back in our old VMs, services could pretty much read and write wherever they wanted.
So our model of persistent storage was a folder structure with, in k8s terminology, `RWX` support.

I think that what we always dreamed on was the graphics on the front page of http://infinit.sh/
 - that the cluster had also a pool of storage which we could mount per container.

We've learned, since then, that shared file system isn't the way to scale horizontally.
Instead you replicate on the application level, and each replica has a persistent volume.


## Exposing your services to users

The original [LoadBalancer](http://kubernetes.io/docs/user-guide/services/#type-loadbalancer) server is only practical if you already have a single frontend layer.
Without that and with microservices, you need something that routes from a single external IP to your services.

 - http://kubernetes.io/docs/user-guide/ingress/

 - https://github.com/kubernetes/contrib/tree/master/ingress/controllers/nginx   
