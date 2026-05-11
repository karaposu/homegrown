---
status: active
refines: devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/finding.md
impacted_by:
  - devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md
---
# Finding: Discipline Verdict Telemetry Value Risk

## Changes from Prior

**What's preserved:** The prior Resume finding was right that telemetry-aware Resume needs standardized discipline verdicts before it can safely become useful runtime behavior.

**What's changed:** The earlier phrasing could be read as if the main need were simply adding the exact `Overall: PROCEED / FLAG / RE-RUN` line everywhere. That is too thin. The real need is an evidence-backed telemetry contract.

**What's new:** This finding defines what the verdicts should mean. They should report process sufficiency and visible risk inside a discipline. They should not claim final truth, empirical validation, or autonomous quality judgment.

**Migration:** Add verdicts as advisory telemetry first. Do not use them as hard routing gates until Homegrown has retrospective evidence that the verdicts predict later usefulness or failure.

## Question

Should Homegrown add standardized `PROCEED / FLAG / RE-RUN` verdicts to all MVL+ disciplines, and what would that do to quality, trust, routing, and rigidity?

A good answer should explain why verdict telemetry would be added, whether it can improve discipline quality, how much we can trust self-evaluation by each discipline, what other advantages it brings, what rigidity risks it creates, and what design would preserve flexibility while making outputs routable.

## Finding Summary

- **Yes, Homegrown should add `PROCEED / FLAG / RE-RUN` verdicts to all MVL+ disciplines, but only as evidence-backed telemetry.** A bare label at the end of each file would be too weak.

- **The main reason to add verdicts is routability.** Resume, Navigation, checkpoints, future meta-loop traversal, and branch experiments need a stable signal they can inspect.

- **The verdict should evaluate process sufficiency, not final truth.** A discipline can say whether its own work is sufficient by its own criteria. It cannot prove the final inquiry answer is correct.

- **The quality effect is indirect.** Verdicts can improve discipline quality by forcing each discipline to expose evidence, risk, and uncertainty. They do not automatically make the reasoning better.

- **Self-verdicts are useful but not highly trustworthy as standalone truth.** They are stronger than freeform prose for routing and review, but they need evidence and later retrospective calibration.

- **The biggest rigidity risk is label-only hard routing.** If `PROCEED` becomes "trust this" or `RE-RUN` becomes an automatic command too early, the system will amplify weak self-report.

- **The recommended design is a two-layer contract.** The outer labels are shared across disciplines. The inner evidence remains discipline-specific.

## Finding

### 1. Why Add Verdicts At All

Homegrown is trying to move from isolated textual protocols toward coordinated cognitive loops. Coordinated loops need some shared interface between discipline outputs.

Right now, a runner can usually tell whether a file exists. That is not enough for richer behavior. A file can exist and still be weak, partial, stale, or self-flagged.

Verdicts add a compact quality signal:

```text
What does this discipline believe about its own output quality,
based on its own criteria, and what risk remains if downstream work continues?
```

That signal helps humans scan a run. It also gives Resume, Navigation, future meta-loop traversal, and diagnostic protocols something to inspect.

### 2. What The Verdict Should Mean

The verdict should be scoped narrowly.

`PROCEED` should mean: this discipline's output is sufficient for downstream use by this discipline's own criteria.

`FLAG` should mean: this discipline's output is usable, but a named risk, weakness, unresolved ambiguity, or confidence gap remains.

`RE-RUN` should mean: the minimum discipline process failed, so downstream use is likely misleading.

These labels should not mean that the final answer is true. They should not mean the discipline has empirically validated itself. They should not mean the runner must obey the label automatically.

This distinction matters most for early disciplines. Exploration can report whether the territory was sufficiently mapped. Sensemaking can report unresolved ambiguity and anchor diversity. Decomposition can report whether the pieces reassemble. None of them can know whether the final finding will be useful.

### 3. Can Disciplines Evaluate Themselves

Disciplines can evaluate some things about themselves.

They can often see local process evidence. Sensemaking can report that anchor diversity was low. Decomposition can report that interface clarity was weak. Innovation can report that only one mechanism produced a survivor. Critique can report that adversarial testing was weak.

Disciplines cannot fully evaluate their own downstream usefulness.

The same process that produced a weak output may also rationalize that output. A self-verdict can be blind to its own failure. That is why the verdict should be treated as low-to-medium trust as a truth signal, but useful as structured self-report.

The trust improves when the verdict must cite evidence. The trust improves further when later correction chains compare the self-verdict against user dissatisfaction, better follow-up findings, and branch outcomes.

### 4. Does This Improve Quality

Adding verdicts does not automatically improve quality.

A label-only footer can make quality worse because it creates fake closure. A model can write `PROCEED` without doing better work.

An evidence-backed verdict block can improve quality indirectly. It forces each discipline to ask: what evidence supports continuing, what risk remains, and what later evidence would prove this self-assessment wrong?

That pressure is valuable because it turns uncertainty into visible artifact structure. The discipline is not just producing content. It is also exposing the condition of that content.

### 5. Other Advantages

Verdicts make Resume more meaningful. Instead of continuing from the first missing file, Resume can eventually inspect completed files and warn when a prior discipline said `FLAG` or `RE-RUN`.

Verdicts make MVL/MVL+ checkpoints more informative. A checkpoint can show not only that a discipline completed, but whether it completed cleanly, with risk, or with a rerun recommendation.

Verdicts make Navigation more usable as a larger-loop input. Navigation can use flagged uncertainties, weak decompositions, or critique failures as signals for next moves.

Verdicts support fundamentals improvement. If a later user correction shows that a `PROCEED` output was actually bad, that mismatch becomes evidence for improving the discipline.

Verdicts also support branch experiments. A future branch can be compared against baseline not only by final finding quality, but by whether intermediate discipline verdicts became better calibrated.

### 6. Rigidity Risk

The user's rigidity concern is valid.

The dangerous version is a shared label with no evidence. That would encourage checklist compliance.

Another dangerous version is immediate hard routing. If the runner automatically obeys uncalibrated verdicts, false `PROCEED` hides weak work and false `RE-RUN` wastes time.

Another dangerous version is shared inner criteria. Exploration, Sensemaking, Decomposition, Innovation, and Critique should not be forced to measure themselves the same way. Their work is structurally different.

The safer version standardizes only the outer shape:

```text
Shared outer label:
  PROCEED / FLAG / RE-RUN

Discipline-specific inner evidence:
  each discipline cites its own criteria

Current routing authority:
  advisory, not hard control
```

This gives Homegrown routability without flattening the disciplines.

### 7. Recommended Contract

The minimal contract should look like this:

```markdown
## Discipline Verdict

**Overall: PROCEED | FLAG | RE-RUN**
**Scope:** Process sufficiency for this discipline, not final truth.

- **Evidence:** [2-4 concrete discipline-specific signals]
- **Risk:** [known weakness if downstream continues]
- **Suggested routing:** [continue / continue with caution / rerun recommended]
- **Calibration note:** [later evidence that would confirm or disconfirm this verdict]
```

This is small enough to add to each discipline without rewriting the runner.

It is also rich enough to support future automation. The important point is sequencing: collect and inspect verdicts first, then decide later whether they deserve stronger routing authority.

## Next Actions

### MUST

- **What:** Draft a `structural_integrity_and_telemetry_contract` protocol or spec section that defines the shared verdict block and label semantics.
  **Who:** Homegrown protocol maintainer.
  **Gate:** Before editing Exploration, Sensemaking, Decomposition, Innovation, and Critique to standardize verdicts.
  **Why:** Prevents each discipline from inventing slightly different meanings for the same labels.

- **What:** Add verdict blocks as advisory telemetry, not hard routing gates.
  **Who:** Discipline specs for Exploration, Sensemaking, Decomposition, Innovation, and Critique.
  **Gate:** When the telemetry contract has one agreed format.
  **Why:** Creates routable outputs without giving uncalibrated self-report runtime authority.

- **What:** Keep discipline-specific evidence criteria.
  **Who:** Each discipline spec.
  **Gate:** During each discipline edit.
  **Why:** Preserves the distinct logic of each discipline and avoids rigid one-size-fits-all quality checks.

### COULD

- **What:** Mirror verdicts into `_state.md` after the markdown contract is stable.
  **Who:** Future MVL/MVL+ runner or Resume integration.
  **Gate:** When a runner or protocol actually consumes verdicts programmatically.
  **Why:** Structured state is easier for automation than scanning markdown, but it is premature before consumers exist.

- **What:** Use correction chains to calibrate verdict trust.
  **Who:** Future `loop_diagnose` or retrospective review work.
  **Gate:** After at least five inquiries include standardized verdict blocks and at least two have user corrections.
  **Why:** This starts testing whether `PROCEED`, `FLAG`, and `RE-RUN` predict later usefulness.

### DEFERRED

- **What:** Hard route MVL/MVL+ or Resume on discipline verdicts.
  **Gate:** Revive only after all five MVL+ disciplines emit verdicts and at least 20 verdict-bearing inquiries have been retrospectively reviewed.
  **Why (if revived):** Hard routing may become useful if the labels prove predictive, but using it now would overtrust self-report.

- **What:** Define exact per-discipline thresholds for every label.
  **Gate:** Revive after the first contract version has been used on at least 10 inquiries.
  **Why (if revived):** Real examples will show where each discipline's `FLAG` and `RE-RUN` boundaries should sit.

## Reasoning

Exploration found that verdict-like thinking already exists in the system. Innovation has the exact `Overall: PROCEED / FLAG / RE-RUN` format. Critique already uses the same vocabulary in its convergence telemetry. Exploration, Sensemaking, and Decomposition already have telemetry concepts, but they do not share a standardized final routable signal.

Sensemaking resolved the main ambiguity. The verdict evaluates discipline process sufficiency, not final truth. This prevents the system from treating `PROCEED` as proof that an answer is correct.

Decomposition showed the main coupling. Trust and routing are tightly coupled. Since trust is not yet calibrated, routing must stay advisory.

Innovation killed label-only verdicts. A bare `Overall: PROCEED` is easy to parse, but it gives no evidence, no risk, and no calibration surface.

Innovation also killed prose-only telemetry as the long-term state. Freeform prose preserves flexibility, but it blocks Resume, Navigation, meta-loop traversal, and comparative diagnostics from reliably consuming discipline quality signals.

Critique killed immediate hard routing. The strongest objection is that current self-verdicts are not calibrated. Hard routing would make self-report errors operationally powerful before Homegrown has evidence that the labels are predictive.

Critique preserved the evidence-backed advisory verdict block. It survived because it gives a stable parse point, requires local evidence, preserves discipline-specific criteria, and stays honest about its trust level.

The final answer is therefore not "add labels everywhere." The final answer is "add an evidence-backed telemetry contract everywhere, and keep it advisory until retrospective evidence earns stronger routing."

## Open Questions

### Monitoring

- After 10 verdict-bearing inquiries, check whether verdict blocks are useful to read or whether they have become boilerplate.

- After 20 verdict-bearing inquiries, check whether `FLAG` and `RE-RUN` correlate with later user corrections, reruns, or weak findings.

### Blocked

- Telemetry-aware Resume is blocked until all five MVL+ disciplines emit standardized verdict blocks.

- Hard routing is blocked until retrospective review shows that verdicts predict later usefulness or failure.

### Research Frontiers

- It remains open whether the best long-term storage is markdown-only, `_state.md`, or a separate machine-readable trace.

- It remains open how strict each discipline's `FLAG` and `RE-RUN` thresholds should be.

### Refinement Triggers

- Reopen this finding if verdict blocks become repetitive boilerplate after 10 inquiries.

- Reopen this finding if a future Resume implementation needs more machine-readable state than the markdown block provides.

- Reopen this finding if repeated user corrections show that `PROCEED` verdicts are often wrong.
