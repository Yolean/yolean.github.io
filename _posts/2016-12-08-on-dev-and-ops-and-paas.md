---
layout: post
title: "On Dev and Ops"
date: 2016-12-08 11:00:00 +0100
categories:
---

We used to take the view that we had an IT-department:

 * _Dev_ - writes the code.
 * _Ops_ - moves releases into production.

Actually, as a small company, you buy - as a service - as much as possible of _Ops_.
For us the unit was 1 virtual machine with 1 IP address.

 * _Dev_
   - some abstraction/contract to:
 * _Ops_
   - some abstraction/contract to:
 * _Hosting_

With hindsight you could have predicted the two major issues we got:

 * To scale horizontally we must involve all of these disciplines.
 * Ops (our "IT") would struggle to stay up to date with what Dev is doing.

Hey, let's do [DevOps](https://en.wikipedia.org/wiki/DevOps), let's just merge the Dev and Ops departments!

Hold on... It's rather complex to manage a fleet of virtual machines (we went with [Chef](https://www.chef.io/))
and our developers struggled to even stay up to date with the automated Chef+[VirtualBox]() setup we used as production-like development environment.

I think that to in order to make DevOps work, you must simplify the Ops part quite a bit.
You need to move the OS work to the _Hosting_ side.
That's what you do when you develop for [AWS](https://aws.amazon.com/).
Since the arrival of Docker, you can get the same effect with self-hosted backends,
as the myriad of container hosting offers testify.
