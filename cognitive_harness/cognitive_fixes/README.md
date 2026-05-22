# Cognitive Fixes

This folder accumulates documented applications of a specific methodology for mitigating recurring LLM failure modes: **decompose vague instructions into named meta-categories with full coverage + add a structural fail-safe that doesn't depend on enumeration completeness**.

Each fix here is one application of the methodology to a specific failure mode. The folder is at a LOWER level of formalization than a protocol — it preserves methodology and accumulates evidence without claiming protocol-level stability.

## What goes here

A fix belongs here when ALL of these hold:

1. **Trigger condition met** — an LLM-driven instruction (in a discipline spec, runner spec, or protocol) produces inconsistent coverage across runs; some runs catch all aspects of user intent, others drop one or more.
2. **Methodology applied** — the 7-step pattern (Identify → Decompose → Coverage check → Structural fail-safe → Meta-recursion residual ack → Branch experiment → Evidence gate) is documented for the specific case.
3. **Branch-experiment evaluation gate proposed** — the fix is staged, not directly applied as a permanent edit (unless the user explicitly overrides per their authority).

## What does NOT go here

- General spec refactors (no specific LLM-coverage-failure trigger)
- Bug fixes unrelated to coverage stability
- Feature additions
- Performance optimizations
- Style/formatting changes

## Index of current fixes

| # | KIND | Source inquiry | Status |
|---|---|---|---|
| 01 | [Vague Instruction Decomposition](./01__vague_instruction_decomposition.md) | `devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md` | Edit applied; branch-experiment pending |

## Staging gates (verbatim from LOOP_DIAGNOSE)

This folder follows the same staging discipline as `cognitive_harness/protocols/loop_diagnose.md`'s Step 5/6 guardrails.

**Step 5 verbatim (for protocol promotion threshold):**

> "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question."

Applied here: do NOT promote cognitive_fixes from folder to standalone protocol at `cognitive_harness/protocols/cognitive_fixes.md` until 5 to 10 cognitive-fix applications show a stable internal method (shared structure across instances) that cannot be explained as ordinary spec-edit work.

**Step 6 verbatim (for runner hook threshold):**

> "Do not add silent automatic diagnosis-mode inference until at least 10 explicit LOOP_DIAGNOSE runs show stable trigger language with no confusing false positives."

Applied here: do NOT add a runner hook to MVL+/MVL2+ that automatically loads a cognitive_fixes protocol until at least 10 explicit cognitive-fix applications show stable trigger language with no confusing false positives.

## Kill conditions

The folder is retired (not promoted) if any of these fire:

- **(a) N=5 future inquiries pass with NO new cognitive-fix applicable cases** — the pattern is not recurring; methodology is one-off; folder becomes documentation but not actionable structure. Retire.
- **(b) Cross-fix audit at N=3-5 shows no shared structure** — each fix is bespoke; the methodology is not generic. Merge documentation into `cognitive_harness/protocols/spec_governance.md` (or another related protocol); retire folder.
- **(c) Calendar-bound supplement:** N=5 refers to MVL+/MVL2+ inquiries with multi-part user framing that DON'T add a cognitive_fix. If the project enters long inactivity periods (no new inquiries for >90 days), supplement with a calendar-bound retire trigger.

If none fire, fixes accumulate. At N≥5 stable applications, reconsider Step 5 promotion threshold.

## First-instance authorship acknowledgment

The first instance (`01__vague_instruction_decomposition.md`) was authored by the same agent (Claude) that authored the methodology in the source inquiry. There is mild authorship-bias risk: the template shape and the first instance's structure may anchor future instances to one agent's framing.

**Mitigation:** future cognitive fixes should be cross-author-validated where feasible — reviewed by a different agent session, or grounded in user-explicit pattern observations rather than agent-extracted patterns. The staging gates (LOOP_DIAGNOSE-precedent verbatim quoted above) provide external precedent for promotion decisions rather than relying on author judgment.

## Reversibility commitment

This folder + its contents are CLEANLY DELETABLE at creation time. No downstream dependencies are created by the folder's existence:

- Runner specs (`MVL+/SKILL.md`, `MVL2+/SKILL.md`) do NOT reference this folder
- Other protocols in `cognitive_harness/protocols/` do NOT reference this folder
- Disciplines do NOT reference this folder

If kill condition (a), (b), or (c) fires, the folder can be removed via `rm -rf cognitive_harness/cognitive_fixes/` with no upstream/downstream cleanup needed.

**Two important caveats on reversibility:**

1. **Future-incoming-dependency warning:** If a future edit adds an incoming dependency (e.g., a spec or protocol cites a cognitive_fix), reversibility is reduced. Do NOT add incoming dependencies until N≥5 protocol-promotion threshold is met. Outgoing dependencies (the fix file links to source inquiries) are fine — they don't reduce reversibility.

2. **Sunk-cost reluctance warning:** If a kill condition fires, DELETE the folder. Do not preserve from sunk-cost reluctance. Preserving the folder after kill condition firing creates zombie infrastructure — the reversibility commitment is operationally meaningful only if the deletion actually happens.

If promotion to protocol occurs at N≥5, dependencies will be created at that time (e.g., MVL+ SKILL.md hook); only then does deletion become non-trivial.
