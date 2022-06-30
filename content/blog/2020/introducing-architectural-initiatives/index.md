---
title: Introducing architectural initiatives
date: "2020-09-12T00:00:00.000Z"
description: "Future state architecture can sometimes be overwhelming, both for those producing and consuming it. This article discusses taking large scale architectural change and proposes using existing routines for introducing it piecemeal"
tags: Architecture, process
---
####TLDR;
>Increasing the rate of change for your future architecture allows for tighter feedback loops and more frequent course correction, it can help bring the team together culturally and minimises architectural gatekeeping.

***

You've defined your criteria for success, designed your systems accordingly, recorded your decisions, produced documentation and artifacts that describe the future state of architecture, and are ready to go...

![What next?](/whats-next.jpeg)

- Do the teams understand why specific decisions have been made?
- Do the engineering pods have the technical knowledge/skills to deliver that change?
- Can the current state transition toward the future architecture easily?
- Did anyone else in the team contribute toward the design?
- Is there scope for the design to change?

It's tempting to hand it over to engineering pods, but from my experience there are almost always questions and further decisions that need to be made from a holistic context. Once the engineering teams digest the designs and approach the solution space they will undoubtedly have plenty of their own suggestions.

If there isn't a process defined for prioritising work that could be a bigger conversation for your team. But if one does exist, as in my current situation, then the next step might be to start describing your architecture journey as a collection of smaller self-contained initiatives. Each initiative undergoes product prioritisation alongside all other work.

This idea isn't particularly unique, after all, using milestones is fairly analogous and typical. Both are a collection of logically grouped changes, but initiatives differ by being self-contained and scoped for  each pod.

A series of initiatives will ultimately comprise a milestone, but the milestone can represent an important point in the development of the system, be that a deliverable for the business or a particular technology adoption. An initiative describes a smaller, atomic change to the state of the system a particular pod owns.

![Architectural initiatives example roadmap](/architectural-initiatives-example-roadmap.jpeg)

If your team has clarity on responsibilities then aligning units of work to that structure is fairly straightforward. It is our responsibility as architects to ensure the transition to future state is comprised of work appropriately scoped to each pod, and the dependency graph for initiatives within each milestone is kept correct and up-to-date.

Managing self-contained change enables each pod to add their own solutions while ensuring the evolution of their systems are stable with contracts maintained as expected with neighbouring systems.

This also creates a useful feedback loop in the architectural process providing an opportunity to reflect the conclusion of each initiative back toward the architectural vector. Changes to that future may come from a better understanding of the system holistically, from engineering pods making improvements to their own systems, or a better understanding of generic capabilities that may be better suited elsewhere.

This results in greater resilience in design, consistency with existing processes, promotes culture and shared responsibility for architecture across the team. As architectural initiatives can also come from any role in the team, no ivory towers.