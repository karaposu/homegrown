# Branch: Loop Diagnose — Enumeration Frame Error in Test Design

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/`, the human correction (excerpt below), and the later improved inquiry at `devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should avoid pretending to know exact root cause when the evidence is weak, allow mixed or unknown attribution, and propose maintenance only when evidence justifies it.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain; the goal requires failure hypotheses, evidence, confidence, and maintenance candidates.

Specific-vs-pattern check: SPECIFIC to this one correction chain. Broader pattern (general diagnostic methodology for MVL+ correction chains) flagged as Open Question, not foreground — per LOOP_DIAGNOSE Step 5 guardrail "do not propose broad fundamentals rewrites from one weak correction chain."

## Correction Chain

- **Prior path:** `devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/`
- **Corrected path:** `devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/`
- **Human correction:**
  ```
  in devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md

  u suggested prompts but almost all of them are about finding, identifying sths,
  and this is not what i asked. we are not testing between explore and surfacing,
  we are between MVL+ and MVL2+ so we should give them better meaningful tasks.
  this way we can both understand cumilative effect of surfacing vs explore on
  the loop, and also individual outputs of them...

  redo it in another inquiry
  ```
- **Optional context:** The prior inquiry's CONCLUDE (Critique stage + finding) was authored by the same agent (Claude) that drafted `/surfacing` earlier in the same session. The corrected inquiry was authored by the same agent acknowledging the frame error. Self-reference vigilance applies to the diagnostic itself.

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, and all `docarchive/` discipline outputs (`exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`). The user explicitly directed: "analyze why this misunderstanding happened, which discipline is at fault, what mechanism exactly **by looking at docarchive files**." Diagnosis must not rest on finding.md alone.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth — the corrected inquiry's own R13 frame-error diagnosis is one hypothesis among several to be tested independently against prior-inquiry docarchive evidence.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.
- Apply guardrails from LOOP_DIAGNOSE Step 5: do not collapse all failures into discipline failures; loop framing / orchestration / context elicitation / CONCLUDE can be the real failure surface.

## Relationships

- DIAGNOSES: `devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/` (weak prior inquiry)
- COMPARES WITH: `devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/` (later corrected inquiry)
- RELATED: `cognitive_harness/protocols/loop_diagnose.md` (protocol governing this inquiry's framing)
