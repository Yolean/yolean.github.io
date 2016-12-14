---
layout: post
title: "Kubernetes as build server"
date: 2016-11-12 12:00:00 +0100
categories:
---

As much as our developers love typing shell commands into HTML form boxes,
we've stayed away from Jenkins because of all the time we spent on it in earlier projects.
Time we didn't have now.

We also stayed away from cloud build services such as Travis, for the Vendor Lock In counter argument.
And also we figured that Docker changed everything.
[Drone](https://github.com/drone/drone) sort of proves that,
but we still had to figure out how to host a CI environment.

Our alternative can't seriously be called a build _server_ yet,
but maybe a build _principle_.
The bottom line is that builds, repeatable & portable, are defined using [docker-compose](https://docs.docker.com/compose/), which we use a lot anyway.
We tried to formalize this as [Yolean/build-contract](https://github.com/Yolean/build-contract).

Getting techical, we have an ephemeral VM exposing docker over TCP, next to our k8s cluster. In kubernetes we've created:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: docker
  namespace: build
spec:
  ports:
    - port: 4243
---
kind: Endpoints
apiVersion: v1
metadata:
  name: docker
  namespace: build
subsets:
  - addresses:
      - ip: 10.132.1.10
    ports:
      - port: 4243
```

Our build jobs are in fact Kubernetes [Jobs](http://kubernetes.io/docs/user-guide/jobs/):

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: module-that-has-a-build-contract
  namespace: build
spec:
  template:
    metadata:
      name: module-that-has-a-build-contract
    spec:
      restartPolicy: Never
      volumes:
        - name: source
          gitRepo:
            repository: "http://api-key@githosting/Org/module-that-has-a-build-contract"
            directory: "."
      containers:
        - name: build-contract
          image: solsson/build-contract@sha256:bcb502ca1d0506da2edba4b3350ce96b5c46bc06f230a28d238ae5b9f061c95e
          env:
            - name: DOCKER_HOST
              value: tcp://docker.build:4243
          volumeMounts:
            - name: source
              mountPath: "/source"
```

Lots of work remains, in particular automation of these jobs, so the fun has just started.
