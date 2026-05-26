# Branch: Self-Improvement Rate — Conceptual Clarification and Measurable-Question Enumeration

## Question
What is *self-improvement rate* as a measurable property of a self-improving cognitive system — what it means, what it includes, what it excludes — and what is a list of approximately 15 proximately-but-consistently measurable questions that, taken together, could form the basis of a calculation method for self-improvement rate?

## Goal
A two-part deliverable:
1. **Conceptual clarification of self-improvement rate.** What the concept names; what observable phenomena it includes; what observable phenomena it explicitly excludes (e.g., what looks like self-improvement but isn't, and what looks unrelated but is). Boundaries must be drawn against neighbor concepts (task-completion rate; capability growth; quality improvement; learning rate; convergence speed) so the term doesn't collapse into a synonym for any of them.
2. **A list of approximately 15 measurable questions** that each (a) are proximately measurable (observable enough to be answered approximately, even if the measurement is qualitative or coarse), (b) are consistently measurable (the same question yields comparable answers across measurement events, not drifting standards), and (c) collectively span the conceptual dimensions surfaced in part 1.

**Out of scope (explicitly deferred):** the calculation method itself — how to combine the 15 questions' answers into a single rate value or rate curve. The user has stated this comes *after* the conceptual + measurable-question work. The inquiry must not commit a formula or weighting; it must produce the input set that a future inquiry's formula would consume.

A good answer enables: a future calculation-method inquiry that starts from a clean problem statement (these are the measurable inputs; combine them) without having to re-derive what self-improvement rate means.

## Scope Check
**Question covers goal.** Both halves of the goal (conceptual clarification + measurable-question list) are stated in the question. Answering the question well produces the goal artifact.

**Specific-vs-pattern check.** The user provided two specific example measurable questions ("how long after error caught to apply fix?" and "how many cycles does self-improvement require to converge?"). These are illustrative seeds, not the answer. The inquiry must produce a list that addresses **the broader pattern of self-improvement-rate dimensions**, of which the user's two examples are specific instances of two underlying dimensions (latency and convergence efficiency).

## Source Territory (what disciplines should consume)
The project has an existing commitment to self-improvement rate as the primary measured objective. The load-bearing texts:

- `enes/desc.md` — explicit statement: "**Self-improvement rate:** Baldwin cycles × quality per cycle. Task completion is the grounding signal for quality — a self-improvement that doesn't help the system solve problems isn't improvement. But the terminal aim isn't task completion alone; it's the rate at which the system's ability to complete tasks IMPROVES. This distinguishes this system from task-executing agents." The Baldwin cycle is defined here: `run problem → observe → detect pattern → propose change → evaluate → encode into spec`.

- `enes/evolving_quality_assetment_component.md` — distinguishes regression detection from improvement detection, notes regression is easier to measure than improvement, and defines the three-layer quality awareness (Primitive RC + Predictive RC + Retrospective RC) that gates self-improvement.

- `enes/regression/desc.md` — the regression-symptom catalog. Self-improvement rate is structurally adjacent to regression rate (improvements that regress aren't net improvements; the rate is net, not gross).

- `enes/autonomy_ladder.md` — the 6-level meta-loop ladder with evidence gates. Self-improvement rate plausibly varies across autonomy levels (L0 human-driven improvements vs. L4+ system-driven).

- `enes/thinking_space_dynamics.md` — defines the Baldwin cycle's substrate (Predictive RC × Retrospective RC closing) and the calibration loop. The Baldwin cycle IS the self-improvement mechanism; self-improvement rate is its measurable output.

- `enes/what_is_meaningful_traversal.md` — distinguishes *thinking* from *spinning*; the inquiry-rate metric is structurally adjacent because not every cycle is a meaningful one.

- The finding from the just-completed prior inquiry (`devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md`) — names self-improvement rate as the primary objective; its load-bearing risk section names regression as the safety substrate.

## User-given seed questions (treat as instances of underlying dimensions, not as the answer)
- "How long does the system need to wait after an error is caught to apply a fix?" → dimension: **fix latency / time-to-correction.**
- "How many cycles does self-improvement require — fix, didn't work, another path, another, till finally it is correct?" → dimension: **convergence efficiency / cycles-per-successful-improvement.**

The inquiry should treat these as two seed dimensions and surface the others (likely 5–10 more underlying dimensions, with 1–2 measurable questions per dimension giving ~15 total).

## Anti-patterns to avoid
- Producing the calculation method (out of scope per user statement).
- Conflating self-improvement rate with task-completion rate, capability growth, quality improvement, or learning rate (each is a neighbor concept; the boundaries matter).
- Treating "self-improvement" as a binary event rather than a graded property.
- Treating "rate" as solely temporal (per unit time); rate can also be per-cycle or per-attempt or per-quality-unit.
- Producing measurable questions whose answers require infrastructure that doesn't yet exist (e.g., questions that presuppose a Retrospective RC running at scale). The questions should be **proximately** measurable — observable today or with modest investment, not gated on Family III calibration regime.
