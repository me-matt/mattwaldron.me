---
title: Add intentional problems to your designs
date: "2020-10-10T00:00:00.000Z"
description: "Getting designs in front of engineers enough can be difficult. But engineers like puzzles and problems. Including intentional problems and easter eggs in those same designs resulted in a considerable increase in the attention those designs received"
tags: Architecture, Software
---

>### TLDR; Within architecture we are constantly reviewing and updating our designs, but for other functions it requires various strategies to ensure everyone has processed them and has a good understanding to surface issues early. One strategy I recently found to have a considerable increase in attention was to include intentional problems or 'easter eggs'.

[[protagonist]]
| #### I propose we add intentional gaps or mistakes to architectural designs.

[[antagonist]]
| Include mistakes...on purpose?

[[protagonist]]
| Not really mistakes, just less definition. Some undecided things that need exploring with a deeper expertise.

[[antagonist]]
| Won't that just result in teams building systems that include those problems?
[[antagonist]]
| Or what if they don't see them until it's too late? That sounds risky and potentially costly.

[[protagonist]]
| Left alone sure, that could happen. But that's not really the idea. Mention them to the team early, let the engineers know they exist. But don't give away the detail or mystery, they should find the problems themselves.
[[protagonist]]
| Once they're aware of 'easter eggs' in the designs, it can focus their attention on trying to find them and, depending on the complexity, to find them....

[[deuteragonist]]
| ...they need to understand the system in detail.

[[protagonist]]
| Exactly!

[[deuteragonist]]
| Could that discussion be used by engineers to give solutions too?

[[protagonist]]
| Yes. Two common challenges I've seen in architecture have been:
[[protagonist]]
| a. Keeping engineers interested long enough to convey the designs and intent for large systems, to ensure they're both deeply understood, and
[[protagonist]]
| b. Creating a space for them to contribute architectural ideas and design solutions, with guardrails.
[[protagonist]]
| This is an active problem that can vary from team to team and even person to person. I've seen a few instances where there is a genuine gap in mentoring systems thinking from architecture to senior engineers.

[[antagonist]]
| So is it really a good strategy, given success can vary from person to person?

[[deuteragonist]]
| It might be another tool in your toolbox.

[[protagonist]]
| Yeah. It may not work for everyone, but certain personalities might see it as a dangling carrot too juicy to ignore.
[[protagonist]]
| I do agree though, it likely won't be the only strategy you apply.

[[deuteragonist]]
| Providing learning opportunities for engineers to think about broader systems problems, especially with input from a strategic perspective is also really valuable.

[[antagonist]]
| Isn't this just palming work off to the engineers though?

[[protagonist]]
| Isn't that exactly what all levels of engineering do when they give structured units of work to engineers they're mentoring?

[[antagonist]]
| But this isn't design patterns or something contained within their field, it's entirely separate styles of thinking.

[[protagonist]]
| Styles that promote thinking about systems design holistically, or providing a greater context of what they're working on in an engineering capacity. Seems like a win-win to me.

[[deuteragonist]]
| I think there are merits worth exploring. It would be good to see some case studies.

[[protagonist]]
| Anecdotally, over the last year, I described an architecture and designed the end-to-end solution fairly comprehensively. The team and I carried out multiple workshops where we discussed the architecture in detail. We also had frequent catchups to discuss potential changes or issues as they arose. So I mostly stepped into an advisory ad-hoc space.
[[protagonist]]
| It became apparent over time, however, that the team didn't dig into the gnarly problems enough.
[[deuteragonist]]
| How could you tell?

[[protagonist]]
| Estimates varied in the project over time.
[[protagonist]]
| With the next project, I varied my approach to experiment with promoting designs within the team. I provided guidance on the problems, facilitated sessions and applied guardrails, but ultimately outsourced the design to the team. The result was a deeper understanding within the team. This worked quite well, but wasn't really scalable enough to encourage this type of thinking. It also lacked a cohesive view of the future.

[[antagonist]]
| So did that help create a space for the team to contribute architecturally?

[[protagonist]]
| It did. I think there are additional strategies that could be employed. It's important to understand what strategies work for what personalities and teams.

[[deuteragonist]]
| It seems there's a psychology aspect to this?

[[protagonist]]
| THAT is a conversation for another time.

[[protagonist]]
| So to approach the other problem, I tried printing out architecture designs and hanging sticking them up on whiteboards. There were two problems or difficult areas that weren't entirely solved. I knew they were there, but their presence didn't introduce inaccuracies or prevent understanding.
[[protagonist]]
| I mentioned these gaps existed, but didn't say what they were, only that they existed and still required solutions. Immediately, two engineers spent the next hour critiquing, asking questions, pouring over the detail of the designs in search of the problems.
[[protagonist]]
| We had discussions about tenancy models, abstractions, the relationships between components and systems and their evolution. There was a genuine drive to find the problems.

[[deuteragonist]]
| Did they find them?

[[protagonist]]
| They found one, the other is outstanding.
[[protagonist]]
| As engineers we all love problems and solving them. Give an engineer a problem and they'll naturally try to solve it. By giving them an architectural design and saying it has problems, especially carefully crafted ones, there is a good chance they'll try and solve it. To do that they'll need to understand the architecture in-depth.

[[protagonist]]
| I'm going to be adding more intentional easter eggs to m architecture designs from now on, and posting their existence more formally. Maybe even have a chart of who solved what.

This will be part 1 in a series of posts on the parallels between architecture and psychology and education.