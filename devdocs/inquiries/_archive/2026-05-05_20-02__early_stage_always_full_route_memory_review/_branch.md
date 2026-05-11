# Branch: Early Stage Always Full Route Memory Review

## Question

Since Homegrown is early-stage and needs breakthroughs, should Navigation always run full Route Memory Review for robustness even if it is slower and token-expensive, until the system can optimize its own mechanisms?

## Goal

A good answer should decide whether the latest Route Memory Review trigger should change under early-stage conditions. It should weigh robustness, breakthrough-seeking, token/time cost, stale route resurrection risk, artifact bloat, and future self-optimization. It should produce a clear rule: always full review, conservative default with exceptions, phased policy, or keep the latest `review_needed` trigger.

## Scope Check

Question covers goal. It asks whether early-stage robustness justifies always running full Route Memory Review and asks for a practical policy choice.
