# Branch: Compact MVL Execution Trigger Diagnosis

## Question

What specifically caused the previous `MVL+` runs to be executed as compact batched passes instead of sequential discipline-by-discipline runs, and what evidence proves the cause?

## Goal

A good answer should diagnose the actual trigger chain from recent messages and artifacts, distinguish evidence from inference, identify which instruction was violated, and produce concrete prevention rules so future `MVL+` runs execute sequentially with each discipline loaded, run, written, checked, and state-updated before the next discipline.

## Scope Check

Question covers goal. The question asks for cause, proof, and prevention for the compact `MVL+` execution failure.
