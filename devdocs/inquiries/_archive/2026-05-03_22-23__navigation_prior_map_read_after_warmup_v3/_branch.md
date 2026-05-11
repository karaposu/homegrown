# Branch: navigation_prior_map_read_after_warmup_v3

## Question
Should prior Navigation maps be read by warm-up v1/v2/v3 themselves, or should they be read after v3 as a separate continuation-memory step before Navigation runs?

## Goal
Decide where prior `navigation.md` and `devdocs/navigation/*.md` reading belongs so Navigation warm-up stays clean, avoids premature anchoring, and still gives Navigation access to movement-space memory.

## Scope Check
Question covers goal.
