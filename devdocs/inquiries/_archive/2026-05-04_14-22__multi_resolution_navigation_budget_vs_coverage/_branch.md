# Branch: Multi-Resolution Navigation Budget Vs Coverage

## Question
Did the prior multi-resolution Navigation runner finding overstate the risk of many expansions, and should `max_expansions` be treated as a resumable batch/frontier control rather than a limit that reduces Navigation coverage?

## Goal
A good answer should clarify whether many uncovered directions are actually the desired outcome, redefine `max_expansions` and related parameters so they do not erase unrun paths, and specify how the runner should preserve complete coverage while still controlling compute, output size, and continuation.

## Scope Check
Question covers goal.
