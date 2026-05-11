# Branch: Multi-Resolution Navigation Runner Depth Param

## Question
Should multi-resolution Navigation become a separate loop/runner like MVL with a depth parameter, or is there a better operational shape that avoids manually running Navigation one by one while keeping coverage bounded?

## Goal
A good answer should decide whether a separate runner is justified, define what a depth parameter should and should not mean, identify the safest minimal implementation path, and clarify how the design avoids both manual infeasibility and uncontrolled recursive expansion.

## Scope Check
Question covers goal.
