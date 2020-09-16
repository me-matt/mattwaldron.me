---
title: Architecture design is just the start of architecture
date: "2020-09-08T00:00:00.000Z"
description: "Software systems design is a moving target that should be available for continuous updates by engineering and product, it's just owned by architecture"
tags: Architecture, Engineering
---

Since joining the architecture team in bank feeds, we have had constant discussions on what our future design should look like. Taking into consideration relevant metrics we should be prioritising for functions over the platform. Once we had a good design and justification it was time to communicate those designs to the broader team, in particular engineering.

Engineering bring a different perspective to architecture, but an equally important one. There were also considerable knowledge gaps in our future designs vs the current skill set of the team.

Here's where things got interesting.

The designs involved domain modelling workshops, domain boundaries, eventual consistency, messaging and eventing etc. We needed to convey the benefits and challenges of designs in this world.

So how best to convey our designs and ensure the engineering team had and equal footing with the foundational knowledge required to measure value and contribute changes to the design?

We started analysing the high-level topics and preparing a journey we could go on as a team. Architecture would present high-level concepts to the broader team. Each high-level topic would also have a series of detailed presentations done by the engineering team in their community of practice.

While this was all being prepared, we were also finalising our architecture for a consistent first cut in a common C4 model. We also prepared regular catch ups with engineering, added AMAs (Ask me Architecture sessions) and printed out many copies sticking them up clearly visible to the team.

So everything was in place to get from current state to desired state except the route to take. Low hanging fruit and dependent units of work needed describing so we could begin stating our milestones in this journey.

This led me to define a 'change introduction' workflow. Given a particular type of change to the system, the engineer would know all relevant stakeholders to include and, as a cross-functional team, could ensure that change is in the direction of our broader platform goals.

Next time, I'll talk about this change management process and how having a documented and relied upon workflow can enable autonomous teams to move toward this desired state faster.