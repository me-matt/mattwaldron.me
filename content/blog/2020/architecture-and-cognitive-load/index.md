---
title: Architecture and cognitive load
date: "2020-10-23T00:00:00.000Z"
description: "Cognitive load is a critical dimension architecture must attempt to measure. It's an indicator the system needs dividing and provides a signal of how systems evolve."
tags: Cognitive load, architecture
---

>### TLDR;
> In this post we discuss the application of Conways law and cognitive load to software architecture and how we could use this as an indicator oh how a domain should evolve.

[[protagonist]]
| You've both heard of Conway's law, right?

[[deuteragonist]]
| Sure.

[[antagonist]]
| Who hasn't these days.

[[protagonist]]
| So, it's pretty well realised that software structure reflects organisational structure.

[[protagonist]]
| The architecture of systems should be synergistic with the organisational structure. When convenient, organisational structure should reflect a domain design accurately describing the capabilities of the systems.

[[antagonist]]
| When you can change organisational structure, I guess. That isn't always the case.

[[deuteragonist]]
| True. If the organisational structure can't change, this is more an exercise in understanding the domain capabilities and changing the boundaries to align with those teams.

[[protagonist]]
| OK. Sometimes teams can't change due to organisational limitations. They also can't scale past a point, typically around 5-7 engineers.

[[antagonist]]
| Why can't they scale more than that?

[[protagonist]]
| This has been estimated as an optimal level for performance and cognitive load.

[[deuteragonist]]
| So that's a typical ceiling to a team's effectiveness?

[[protagonist]]
| Yeah. A team's performance is bound by their size. The team can't scale up, but the number of teams can scale out.

[[antagonist]]
| So scaling the team horizontally.

[[deuteragonist]]
| Sounds about right.

[[antagonist]]
| That's all good, but how does it relate to architecture?

[[protagonist]]
| Good question. It has everything to do with architecture.

[[protagonist]]
| We should be attempting to measure this as effectively as possible, as early as possible.

[[antagonist]]
| Why? It doesn't seem like it has huge relevance to the architecture. Aside from maybe insight into delivery estimates.

[[protagonist]]
| The thing with cognitive load is, it is relative. The cognitive load for a team can change over time, depending on team members, projects, days and everything else that varies with people.

[[antagonist]]
| Isn't it really useful if you can estimate the cognitive capacity for a team? Isn't it really a retrospective metric?

[[protagonist]]
| Well, if we took the derivative of cognitive load for a team, we can estimate the rate of growth of a domain. As we know that the team can only scale out through addition of other teams, we can predict which domains will require division sooner.

[[deuteragonist]]
| Ah so that's how it applies to architecture.

[[protagonist]]
| Yeah, the architecture should be a reflection of the organisational structure. As the teams increase, the architecture should enable and simplify the division of that domain or capability. If we can predict this in advance, we can design the system so additional teams have clear ownership and the boundary between those domains is well defined. The cognitive load of a team is an indicator of how the system should evolve, after all, the team developing it are an intrinsic part of that system.

## Summary
In this post we discuss:
- Conway's law and the relationship between architecture and organisational structure
- How cognitive load is a measure of the ceiling of effectiveness for a team
- Teams optimal performance being bound by their size
- How architecture should measure growth in cognitive load
- How architecture should use the first derivative of cognitive load to predict what domains are likely to require organisational structure changes to mitigate that change
- How architecture should anticipate what domains will require isolation and support that in advance

We have a few dimensions we're interrogating { team size, cognitive load, growth of cognitive load, growth of team size }.
