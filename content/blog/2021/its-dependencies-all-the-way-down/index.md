---
title: Template
date: "2021-04-09T00:00:00.000Z"
description: "This is a template blog post"
tags: Template
draft: true
---

>#TL;DR
>Providing architectural clarity of the future requires a reasonable confidence in the future product choices, this post follows the product architecture dependency chain.

#Introduction

In a previous post, I discussed the customers and users of product architecture. To achieve architectures' unique value propositions: visualise clarity, framing of the future, demystifying of complexity, and bridging between worlds, we must know what that future is with a reasonable degree of confidence. How can we design, visualise and simplify a future and communicate this without knowing what the future entails? This means engaging with product management to flesh out future requirements.

#What's your ~~requirement?~~ ~~requirements?~~ product outcomes?

I've thought about this a lot and I think there are a variety of interpretations of requirements. So before answering we really need to understand what a requirement is. I asked around to my local product people...and it turns out product requirements are less favourable or typically indicate something at quite a high resolution for a product, at least in terms of architecture; we should instead focus on more general product outcomes.

So, what's a product outcome, you ask? In essence it is comprised of a required outcome and an appropriate experience achieving that outcome i.e. the product must achieve x and our customers would benefit most from it being done via y. An example might be a customer must be able to receive transactions from their bank and our customers would benefit most from it being done in a secure and beautiful way.

That sounds like a good outcome! It empowers engineering teams to focus on solutions best satisfying those experiences and product teams, but it doesn't really say much for the products' architecture. Product architecture can add value in reflecting the principles of architecture to the engineering teams, empowering them to make the most applicable technology choices and apply patterns where possible, that would definitely be sustainable.

This raises an interesting question for me; is this alone enough to require an embedded architect?

At the risk of losing focus let's generalise and say a product outcome really represents some idea(s) for a behaviour(s) the product must demonstrate at some time. Given the previous example, the core ideas might be:

- A simple interface for the customer
- An interface to authorise against the bank
- Secure authorisation protocols
- Technology choices that can scale to a predicted throughput
- An interface to receive transactions from the bank

There are aspects of these core ideas architecture may want to contribute to, for example we would likely want to enable a variety of devices and experiences for the customer interface, we might ensure an implementation isn't tightly coupled enough to prevent this by promoting particular patterns and technology choices. Again though, I find myself at a point where I'm not convinced this requires an embedded architect. It should be entirely feasible and arguably preferable to provide guidance and facilitation to engineering teams.

#So what is a product architect to do?

We need to redefine what a product outcome really is, at least what we expect for architecture. If it is indeed an idea indicating a behaviour the product should have at some time, let's start with where those ideas might arise:

New learnings and definitions for customer success (presumably from research),
strategic objectives,
tactical changes,
additional or change to a system* or
all of the above.
* System is defined as the components within a product.

From this we can make some assumptions:

1. The resolution or definition of an outcome differs for each source - it is not fixed.
2. Each source has varying degrees of architectural scope.
3. The further from now we expect to deliver an outcome, the broader the potential impact to the existing system(s) - we are unlikely to ever deliver a moonshot strategy tomorrow.

I think we can logically continue this thought process and add some definition:

1. The resolution of an outcome (or degree of well-defined action) decreases over time for the majority of outcomes.
2. Architectural significance* is not fixed over time - changing an existing system won't have the same architectural relevance as designing for a strategic objective, in the vast majority of cases.
3. Strategic objectives and long-term customer success depend on future change relative to that of a system change (which is likely now or next).
4. With the enablement of engineering, architecture are less involved in the now or next types of change.
5. The ability for a single team to own an outcome decreases over time (unless outcomes are forced into the scope of a particular domain, hindering appropriate experience).
  a. Similarly, architectural contribution increases over time as future change is where the majority of potential cross-domain outcomes exist, i.e. strategic and definitions of customer success.
6. Architectures' visibility of the future roadmap and outcomes correlates with the effectiveness of a team, by understanding what is technically possible and ensuring decisions that may prevent those future outcomes aren't made, as early as possible.

#The gist?

As an architecture team, delivering value depends on ensuring we're working to the same scopes and definitions within product spaces.

Cast your gaze to the future. Are the product outcomes you're working to defined at a point in time best suited for architecture? Do you have those outcomes at all? If not, you might need to go on a discovery-quest within your product and leadership teams.

If your product roadmap isn't reasonably well-defined or stable for the next n years, you may need to start understanding whether there are bottlenecks or find if there are external factors introducing instability. Ensuring engineering teams can be autonomous by clarifying further into their future certainly seems a good contribution an embedded product architect can bring to a team.
