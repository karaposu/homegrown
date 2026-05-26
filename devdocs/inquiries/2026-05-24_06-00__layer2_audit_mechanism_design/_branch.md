# Branch: Layer-2 Audit Mechanism Design (Q4 dive-deep, /reflect excluded)

## Question

- **Subject** — routeman's LAYER-2 identity-erosion audit infrastructure: specifically the audit MECHANISM (the substrate is already partially supplied by 24-40 + 24-01 per the Q4 partial-progress notice).
- **Action** — design.
- **Level** — discipline-adjacent (a piece of routeman's runtime spec OR a separate audit-infrastructure protocol — the level decision is itself part of the design).
- **Observation targets** — FOUR separable sub-questions, each requiring its own analysis:
  1. **Who runs the audit.** Candidates EXCLUDING /reflect (explicit user exclusion — /reflect is not actively developed). Remaining candidates include self-audit by routeman, a separate audit discipline, runner-level audit, human-only-first-ship, periodic-batch audit, event-triggered audit, etc.
  2. **At what cadence.** Per-invocation / periodic / event-triggered / time-based / manual.
  3. **Threshold calibration.** How are thresholds (e.g., "across 5 consecutive invocations") calibrated to the project's actual invocation rate (which may be one per day at L0 and many per hour at L4+)?
  4. **Substrate question for the 5th LAYER-2 mode (false depth from 18-58).** Does Stage 1's drop-rate plus a sub-route-distinctness check suffice as substrate, or is a different substrate required? This is the one mode that lacks a BY-CONSTRUCTION substrate after 24-40 + 24-01.
- **Deliverable shape** — design memo with options + trade-offs + commitment per sub-question; sufficient for SKILL.md authoring to ship the LAYER-2 audit infrastructure without re-running this inquiry.

The question: produce the audit mechanism design (runner + cadence + threshold-calibration + false-depth substrate) that consumes the substrates already supplied by 24-40 + 24-01, **explicitly excluding /reflect from candidate runners** per user direction.

## Goal

- **Criterion** — an actionable design SKILL.md authoring can adopt verbatim; addresses all four sub-questions; preserves routeman's enumerate-all identity and isolated-session + file-scanning architecture; explicitly excludes /reflect from runner candidates; commits options rather than punting to "future work."
- **Use case** — routeman SKILL.md authoring inquiry inherits this design directly; Q4 in the frontier-questions finding graduates from "AUDIT SUBSTRATE PARTIALLY SUPPLIED (mechanism still open)" to "RESOLVED-WITH-DESIGN" (matching the resolution status of Q1, Q3, Q10).
- **Desired outcome** — Q4's mechanism dimension is settled with a concrete design; the LAYER-2 audit infrastructure is ready for SKILL.md inclusion; the 5th LAYER-2 mode (false depth) has either a substrate proposal or an explicit substrate-deferral with revival trigger.
- **What would fail** — an answer that proposes /reflect as the runner (explicit user exclusion); an answer that designs new substrates instead of consuming the existing 4 supplied by 24-40 + 24-01 (re-doing settled work); an answer that defers the mechanism design without committing options; an answer that violates routeman's isolated-session + file-scanning architecture (in-context-pass options are off the table per 16-31); an answer that misses any of the four sub-questions.

## Source Input

Preserved verbatim for downstream-discipline transcription audit:

```text
Question 4 — Who runs the LAYER-2 identity-erosion audits, at what cadence, and how are the thresholds calibrated? — AUDIT SUBSTRATE PARTIALLY SUPPLIED 2026-05-24 (mechanism still open)
🟡 PARTIAL PROGRESS (2026-05-24): AUDIT SUBSTRATE supplied for 4 of 5 LAYER-2 modes by devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md + devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md. The audit MECHANISM (who runs the audit, at what cadence, with what threshold calibration) — Q4's actual question — remains OPEN.

Mode-by-mode substrate status:

Auto-vs-Judgment Calibration Drift (design memo) — substrate supplied by 24-40's transition_history field in docs/autonomy_level.md. The register declares the current level; transition_history provides the per-change audit trace; observed routeman auto-vs-judgment behavior can be compared against the declared level.
Prescriptive-Without-Cycle-Context (design memo) — substrate supplied BY CONSTRUCTION by 24-01's A1+A3 enforcement (file-path-and-section citation in WHY text + drop-with-reason at Stage 1 generation time). Un-anchored pointers are structurally impossible; the mode is detected when WHY text lacks parseable file-path reference or the reference doesn't resolve.
Rename-Renders-Itself-Cosmetic (design memo) — substrate supplied BY CONSTRUCTION by the same A1+A3. Detected when ≥50% of Routes have empty Guidance Pointers OR all WHYs lack A1 citations across 5 consecutive invocations.
filler-meta-reasoning (added by 18-58; LAYER-2 scope extension) — substrate supplied BY CONSTRUCTION by the same A1+A3. Detected when meta-reasoning field content consistently fails to anchor downstream Stage 1 (high frequency of "W5 unresolved" drop-reasons across invocations).
false depth (added by 18-58; LAYER-2 scope extension) — NO substrate yet. Stage-2 sub-routes with only positional distinction (no structural distinction; meta-reasoning fields read interchangeably) are not currently catchable by construction. The substrate question is open for this mode.
What Q4 still needs. The substrate progress makes 4 of 5 LAYER-2 modes operationally detectable, so the audit-infrastructure inquiry can narrow its focus from "design per-mode recognition signals" to "design the mechanism that consumes the substrate." Open sub-questions: who runs the audit (e.g., does /reflect run it as part of its process-quality scope; does the discipline self-audit at invocation end; does a separate audit discipline need creation); at what cadence (per-invocation; periodic; event-triggered); how thresholds (the "across 5 consecutive invocations" type) are calibrated to the project's actual invocation rate (which may be one per day at L0 and many per hour at L4+); and substrate-question-for-false-depth (does Stage 1's drop-rate plus a sub-route-distinctness check suffice, or is a different substrate required).

Q4's Tier-1 status is unchanged — the SKILL.md still cannot ship a complete audit without the mechanism design — but the inquiry's scope is now narrower. Preserved pre-substrate content follows.

lets dive deep, but we dont care about reflect now, since it is not actively developed now
```

## Scope Check

**Question covers goal.** The question addresses all 4 sub-questions (runner, cadence, threshold-calibration, false-depth-substrate); the goal requires a design addressing all four with specific commitments per sub-question. The user's explicit "we don't care about reflect" exclusion is preserved in observation target 1.

**Specific-vs-pattern check:** the question addresses routeman's LAYER-2 audit specifically. The original Q4 candidate resolution path mentioned "generalizable to other Boundary disciplines" but the user's "dive deep" framing is on routeman. **Default: address routeman's specific case; generalization to other Boundary disciplines preserved as research frontier.**

**Transcription-audit fail-safe (Step 3.5).** Scanning Source Input for clause-joiners:
- "and" appears multiple times (e.g., "who runs the audit, at what cadence, and how the thresholds are calibrated") — preserved as four separate observation targets above (runner, cadence, threshold-calibration, false-depth-substrate).
- "but we dont care about reflect" — the user's exclusion clause is preserved verbatim in observation target 1 (`/reflect` excluded from runner candidates).
- "and substrate-question-for-false-depth" — preserved as observation target 4.

All load-bearing clauses survive to Question + Goal; no transcription drop detected.

## Synthesis Trigger

This inquiry consumes multiple prior outputs as inputs and inherits their commitments. CONCLUDE will require an `## Inherited Commitments Re-test` section that names each commitment and either re-tests it with cited evidence or explicitly flags it as inherited-without-re-test with a reason:

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — defines the 3 original LAYER-2 modes (Rename-Renders-Itself-Cosmetic, Prescriptive-Without-Cycle-Context, Auto-vs-Judgment Calibration Drift) with recognition signals; the 9-mode 2-layer failure framework; routeman's identity statement; the load-bearing residuals.
- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — defines Q4 itself; commits the candidate resolution path that excludes /reflect-related options now (per user); the substrate-vs-mechanism distinction; the 5-mode total scope (3 from design memo + 2 from 18-58).
- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — commits isolated-session + file-scanning architecture; CONSTRAINS where the audit can read from (files, not in-context); rules out runner-pass-as-parameter options for any audit reader.
- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — adds 2 LAYER-2 modes (false depth + filler-meta-reasoning); the LLM-operational-design principle (now at N=5).
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — adopts multi_resolution_navigation.md; provides `_navig.md` as cross-invocation audit trail (load-bearing for the cadence question because it determines what cross-invocation state the audit can consume).
- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` — supplies the Calibration-Drift substrate (transition_history); the L0/L1/L2+ phase-calibration discipline; the read-convention (file-mediated discipline reads of project-level metadata).
- `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` — supplies the A1+A3 substrate for 3 LAYER-2 modes BY CONSTRUCTION; commits the Stage 1 + Stage 2 mechanism whose outputs the audit consumes; the file-path-citation format for WHY texts.
- `cognitive_harness/surfacing/references/surfacing.md` — the LAYER-1/LAYER-2 framework origin; the self-coupling-to-downstream LAYER-2 mode (relevant to the audit design because a self-audit risks the audit's own identity erosion).
- `cognitive_harness/MVL/SKILL.md` and `cognitive_harness/MVLw/SKILL.md` — the runners that might host the audit (runner-level audit option); the resume / handoff conventions.

Plan: Sensemaking will extract the audit-infrastructure design's anchors from these priors; Decomposition will partition the design into the four sub-pieces (runner, cadence, thresholds, false-depth-substrate); Innovation will generate options per piece via the 7 mechanisms; Critique will adjudicate and produce verdicts; CONCLUDE compiles the design memo with the Inherited Commitments Re-test section enumerating each prior's commitments and re-test status.
