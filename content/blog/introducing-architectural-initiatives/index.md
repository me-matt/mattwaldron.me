---
title: Introducing architectural initiatives
date: "2020-09-12T00:00:00.000Z"
description: "Future state architecture can sometimes be overwhelming, both for those producing and consuming it. This article discusses taking large scale architectural change and proposes using existing routines for introducing it piecemeal"
tags: Architecture, process
---
####TLDR;
>Increasing the rate of change for your future architecture allows for tighter feedback loops and more frequent course correction, it can help bring the team together culturally and minimises architectural gatekeeping.

***

You've determined your dimensions for success, designed your systems to meet those conditions, created your ADRs, produced documentation and artifacts that describe the future state of architecture.

![What next?](/whats-next.jpeg)

- Do the teams understand why specific decisions have been made?
- Do the engineering pods have the technical knowledge/skills to deliver that change?
- Can the current state transition toward the future architecture easily?
- Did anyone else in the team contribute toward the design?
- Is there scope for the design to change?

It's tempting to just pass it over to engineering pods. From my experience though, there are almost always questions and further decisions that need to be made from a holistic context. Once the engineering teams digest the designs and approach the solution space they will undoubtedly have suggestions too.

If there isn't a process defined for prioritising work that could be a bigger conversation for your team. But if one does exist, as in my current situation, then the next step might be to start describing architecture as a collection of smaller self-contained initiatives. Each initiative enters the product prioritisation process like all other work.

This idea isn't particularly unique, after all, working with milestones is a pretty obvious approach. Both are a collection of logically grouped changes, initiatives differ by being self-isolated and being scoped to a pod, a series of initiatives comprise a milestone.

![Architectural initiatives example roadmap](/architectural-initiatives-example-roadmap.jpeg)

If your team is structured around ownership and your domain, then aligning units of work to that team structure simplifies the overhead of cross-pod coordination and communication. It is our responsibility as architects to ensure the transition to future state is scoped appropriately to the pods, and the initiatives dependency graph is kept up-to-date.

Delivering self-contained change promotes pods further owning their domain and components, in particular ensuring their evolution is stable and compatible with surrounding domains.

This also creates a feedback loop in the architectural process, reflecting the outcome of each initiative back at the architectural vector. This update could come from a better understanding of the system architecturally, or from engineering pods suggesting varying solutions.

This results in greater resilience in design, consistency when leveraging existing processes for change, promoting culture across the team, and as architectural initiatives can come from any role in the team, no gatekeeping.