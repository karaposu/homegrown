# Branch: MVL Compact Prevention Without Core Changes

## Question

How can compact or batched MVL/MVL+ execution be prevented without rewriting the core MVL loop or sub-skill discipline logic, while allowing narrowly scoped edits to relevant peripheral/rules sections of the MVL/MVL+ skill files?

## Goal

A good answer should identify the prevention layer that can enforce sequential execution without rewriting the core MVL loop or discipline sub-skills; decide whether narrowly scoped rule/peripheral edits to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` are useful; distinguish prompt defects from execution/guardrail defects; and propose a concrete, durable prevention mechanism that fits this codebase's explicit Markdown workflow.

## Scope Check

Question covers goal. The question asks what to do, whether prompt changes are the fix or the problem, and constrains changes to relevant peripheral/rules edits rather than core-loop or sub-skill rewrites.
