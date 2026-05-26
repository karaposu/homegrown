# Branch: A/B Test Task Pair Design for /explore vs /surfacing Comparison

## Question

What 10 candidate test-task prompts (organized as 2 nature-groups of 5 each, the two groups chosen for difference-in-kind rather than difference-in-complexity) would maximally discriminate /explore from /surfacing when run as `/MVL+` vs `/MVL2+` on identical forked sessions, with each prompt paste-ready for immediate use?

## Goal

A deliverable the user can act on immediately:
- 10 paste-ready prompts grouped 5+5 by task-nature
- Each prompt annotated with which mechanism of /explore or /surfacing it stresses
- The two nature-groups explicitly differentiated by kind (not by size, depth, or domain familiarity)
- A warming protocol the user runs in the parent session before forking, so both forks start identical
- Guidance on which pair within the 5+5 set produces the sharpest discrimination signal

The user will: (1) open one session, run the warming protocol, (2) fork into two identical sessions, (3) pick one prompt from Group 1, paste into both forks (with `/MVL+` prefix in one, `/MVL2+` in the other), compare findings, (4) pick one prompt from Group 2, repeat. The findings' divergence (or convergence) is the experimental signal about whether /surfacing actually improves loop robustness over /explore.

## Scope Check

Question covers goal. The question asks for the 10 prompts + organization criterion; the goal asks for those + paste-ready format + annotation + warming protocol + selection guidance. The supporting elements (warming, annotation, selection guidance) are operationally necessary for the prompts to function as test prompts — they're scope-internal, not scope-extending.

Specific-vs-pattern check: SPECIFIC — the deliverable is 10 concrete test prompts for this exact A/B comparison, not a general theory of how to A/B-test cognitive disciplines. A general theory may emerge as a by-product but is explicitly not the foreground deliverable.
