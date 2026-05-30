# Branch: routeman_comprehensive_structural_fix

## Question

- **Subject** — the live `/routeman` discipline spec at `cognitive_harness/routeman/references/routeman.md` as it currently exists. The question is what STRUCTURAL CHANGES against this live spec are needed to (a) clean the "context poison" effect (legacy inheritance from `cognitive_harness/non-active/` and the β-layer's protocol DNA that has shaped routeman's design beyond what's actually load-bearing) AND (b) fix how routeman's OUTPUT is handled (the artifact shape, file structure, per-Route schema, telemetry, status enum, read policy — all the prior 4 inquiries' commitments that have NOT YET landed in the spec).
- **Action** — DESIGN. Specifically: synthesize a single comprehensive amendment delta-list against the live spec that consolidates all prior 4 inquiries' commitments + addresses any context-poison residue NOT covered by those 4 priors. This is a from-scratch-against-current-spec synthesis, not a meta-redefinition of what routeman IS — the discipline's MEANING (boundary discipline; enumerates next moves) is settled; the question is the artifact's STRUCTURE.
- **Level** — discipline-level (specifically routeman). Cross-discipline implications (e.g., navigation-session aggregation, meta-loop runtime) are explicitly OUT OF SCOPE — those are the 2 bounded follow-up inquiries identified by 27_14-03 and remain bounded follow-ups.
- **Observation targets** — preserved as two separate items per LOOP_DIAGNOSE MC2 (the user's framing has clauses joined by "and"):
  1. **Clean context poison effect.** Identify and remove inheritance from `cognitive_harness/non-active/` (specifically: `multi_resolution_navigation.md`, the `navigation_context_intake_*.md` files, any other legacy navigation artifacts) that has propagated into the current spec without justification. The β-layer (persistence-protocol DNA) is the primary suspect. Specifically: which spec sections currently encode legacy commitments that are NOT load-bearing for routeman's actual mechanism? What residue remains after the prior 4 inquiries' amendments are applied?
  2. **Fix how output is handled.** Consolidate the prior 4 inquiries' amendment-deltas + any output-handling residue not covered by those priors into a single coherent spec-edit plan. This includes: file structure (committed: `routeman.md` + `_route.md`); per-Route schema (committed: 10 fields + 1 contingent); telemetry (committed: 5-6 metrics); status enum (committed: 7 statuses); read policy (committed: MANDATORY-WHEN-AVAILABLE + SHOULD); γ-field policy (committed: REPAIR / empirical-revival); naming conventions (committed: routeman-native throughout); 4-tier read-policy vocabulary; graceful-degrade default.
  
  The user explicitly named these as two distinct aspects of the same fix-question. Per LOOP_DIAGNOSE MC2, preserve as separate items.

- **Deliverable shape** — a comprehensive structural-amendment plan against `cognitive_harness/routeman/references/routeman.md`:
  - (a) An inventory of context-poison residue currently present in the live spec, with provenance traces to legacy `non-active/` sources where identifiable.
  - (b) A consolidated section-by-section spec-edit delta (rows: section path + change-type [ADD / REPLACE / DELETE / CLARIFY] + content + provenance — which prior inquiry committed this).
  - (c) A coverage map: each prior 4 inquiry's amendment-delta rows mapped to rows in this consolidated delta, showing none are dropped.
  - (d) An honest gaps list: any output-handling commitments NOT covered by the prior 4 inquiries that THIS inquiry identifies (e.g., naming-consistency residue, cross-section coherence issues, untouched sections that still reference retired vocabulary).
  - (e) A landing-order: which delta rows to apply first vs last (so the spec remains internally coherent after each application).

**Stated question:** What structural changes must be made to `cognitive_harness/routeman/references/routeman.md` to (1) remove residual context-poison inheritance from `non-active/` legacy sources, AND (2) land all prior 4 inquiries' output-handling commitments + any output-handling residue not covered by those priors, as ONE consolidated comprehensive amendment plan?

## Goal

- **Criterion** — a good answer: (a) treats the two observation targets as SEPARATE but INTERLOCKED — context-poison cleaning is a precondition for output-handling fixes landing coherently; (b) consolidates rather than re-litigates the prior 4 inquiries' commitments (the verdicts are inputs, not adjudication-targets); (c) produces a SINGLE delta-list keyed by spec section, not 4 separate delta-lists requiring the user to merge; (d) explicitly enumerates context-poison residue with provenance (where a poisoned commitment came FROM, to enable future audits); (e) honestly identifies gaps NOT covered by prior 4 inquiries; (f) gives a landing-order that prevents intermediate-state spec incoherence.
- **Use case** — the user will use the consolidated delta to LAND a single batch of edits against the live spec in one coordinated patch, rather than 4 sequential application-from-each-prior-inquiry passes that risk inter-amendment incoherence.
- **Desired outcome** — a clear, comprehensive, application-ready amendment plan that, when applied, leaves `cognitive_harness/routeman/references/routeman.md` (1) free of context-poison residue AND (2) reflecting all prior 4 inquiries' output-handling commitments in a single coherent end-state.
- **What would fail** — an answer that: (i) re-litigates the prior 4 verdicts instead of inheriting them; (ii) produces 4 separate delta-lists (one per prior) rather than one consolidated delta-list keyed by spec section; (iii) ignores the context-poison observation target (treats it as already-fixed or out-of-scope when the user explicitly named it); (iv) names "context poison" without identifying specific provenance (which non-active doc seeded which spec section); (v) misses output-handling residue not covered by the prior 4 inquiries (e.g., outdated section headings, retired-name references, internal cross-references that break after rename); (vi) gives no landing-order so intermediate spec states are incoherent; (vii) extends scope into navigation-session / meta-loop / cross-discipline territory (those are bounded follow-ups, not THIS inquiry).

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
To understand what structural changes are needed to fix the current routeman discipline so that we will clean context poison effect and fix how output is handled?
```

## Scope Check

Question covers goal: YES.

**Specific-vs-pattern check.** The user named "the current routeman discipline" specifically — not the broader question of discipline-design patterns. Scope is THIS discipline's spec at `cognitive_harness/routeman/references/routeman.md`. Other disciplines' specs (surfacing, sense-making, decompose, innovate, td-critique) are NOT in scope; if context-poison residue patterns observed here might apply to other disciplines, flag as Open Question, do not adjudicate.

**Prior-inquiry-commitments check.** This inquiry inherits commitments from FOUR priors and does NOT re-litigate them — the verdicts are INPUTS, not adjudication-targets. Re-test status will be enumerated in `## Inherited Commitments Re-test` per CONCLUDE's enforcement. The inquiry's job is to CONSOLIDATE + IDENTIFY RESIDUE NOT YET ADDRESSED.

**Out-of-scope-bounded follow-ups (from 27_14-03):** navigation-session aggregation output design + meta-loop runtime design. These remain bounded follow-ups and are NOT addressed here. Any spec section that needs them (e.g., a placeholder reference) is allowed but their CONTENT is not designed in this inquiry.

## Layer Commitment

**Primary layer: STRUCTURAL.** The question is about the artifact's SHAPE — what sections exist, what content they hold, what gets cut, what gets added, what cross-references hold. This is structural-layer (artifact shape / schema / organization), not meaning-layer (what routeman IS — settled) and not process-layer (what STEPS routeman runs — process-layer commitments inherited from priors land in their relevant structural sections).

**Other-layer alternatives considered and explicitly out of scope for THIS run:**
- **Meaning** — what `/routeman` IS as a discipline. Out of scope; the meaning is settled (boundary discipline that enumerates next moves under a 16-type movement taxonomy in 3 Families).
- **Process** — what STEPS routeman runs. Out of scope as a primary layer; process-layer commitments inherited from priors (e.g., directional-mode read policy from 27_14-49; γ-field REPAIR mechanic from 27_00-51) land in their relevant structural sections of the spec via this inquiry's amendment plan, but the process verdicts themselves are inherited, not re-decided.

**Sequential multi-layer plan (declared, not executed in this run):** This run is structural-only — synthesizing structural amendments. If the synthesis reveals a deeper process-layer gap (e.g., "the spec needs a new gate at step X that no prior addressed"), that's flagged as Open Question for a follow-up process-layer inquiry. If it reveals a deeper meaning-layer gap (extremely unlikely given 4 prior inquiries have settled meaning), that's flagged but with high resistance — meaning is presumed settled.

## Synthesis Trigger

This inquiry consumes 4 prior inquiry outputs and inherits commitments. The finding MUST include `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` — commits to: (a) `routeman.md` + `_route.md` two-file design; (b) 4-layer model (α content + β protocol-DNA + γ meta-reasoning + δ telemetry); (c) routeman-native naming throughout (dropping the protocol's alias `_navig.md` → renamed `_route.md`); (d) β-layer minimization (3 unused statuses + multiple unused frontier-record fields cut); (e) γ-field REPAIR mechanic + empirical-revival path; (f) 5-6 metric telemetry; (g) 7-status enum. **This finding committed the broadest output-shape redesign — provenance source for many amendment rows.**

- `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md` — commits to: (a) per-Route schema RESTORATION of Movement + Unlocks (the 00-51 cut was empirically refuted by Route 1 evidence on the 22-route 2026-05-25 readiness map); (b) Purpose CUT (redundant with Movement+Unlocks given the schema's purpose-group structure); (c) Continuation Note CUT (would bloat); (d) 4-axis content distinction reduced to 2-axis (graduated-beneficiary + current-state-to-target axes). **This finding amended 00-51 — the per-Route schema's CONTENT is committed here, not in 00-51.**

- `devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility/finding.md` — commits to: (a) the committed shape is fully compatible at L0/L1 + easily extensible to L2+ against multi-head navigation session + worker session + meta-loop architecture; (b) 2 bounded follow-up inquiries (nav-session aggregation output design; meta-loop runtime design); (c) 2 infrastructure-conditional revival paths (LAYER-2 audit; `/intuit` infrastructure) are extensibility-positive. **This finding is a COMPATIBILITY VERDICT — does not directly add amendment rows but VALIDATES that the prior 2 inquiries' commitments do not need re-design for cross-discipline integration. Provenance for "no need to extend scope" decisions.**

- `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md` — commits to: (a) directional-mode read policy: `routeman.md` = MANDATORY-WHEN-AVAILABLE, `_route.md` = SHOULD; (b) 4-tier read-policy vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY); (c) graceful-degrade default failure-handling (FLAG + proceed; HALT only on malformed-AND-needed); (d) 6-row spec-edit delta against §3 prologue + §3.2 + §3.3 + §3.5. **This finding committed the runtime READ POLICY — provenance for §3.2 Reception edits.**

Each commitment's re-test status will be enumerated in finding.md. The re-test in this synthesis-shape inquiry is necessarily lighter-touch than in a fresh-question inquiry — the commitments are recent (within the past 16 hours of project time), they have already been adjudicated, and re-litigation would not serve the user's stated goal of consolidation. The re-test here ASKS: does the commitment LAND coherently in the consolidated plan, or does it conflict with another commitment when both are merged into one delta-list? The re-test is for INTER-AMENDMENT COHERENCE, not for the commitments' truth.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy` (most recent inquiry — read-policy commitments are inputs to this consolidation).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility` (compatibility verdict; validates that the prior 2 inquiries' commitments are safe to land without cross-discipline redesign).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement` (per-Route schema content; load-bearing for §5.X schema sections).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification` (broadest output-shape redesign; primary provenance source).
- **RELATED:** `cognitive_harness/routeman/references/routeman.md` (the LIVE TARGET — this inquiry's deliverable is the consolidated delta against this spec).
- **RELATED:** `cognitive_harness/non-active/multi_resolution_navigation.md` (legacy protocol-DNA source — primary suspect for context-poison provenance traces).
- **RELATED:** `cognitive_harness/non-active/navigation_context_intake_*.md` (legacy navigation-context files — secondary suspects for context-poison provenance).
- **RELATED:** `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` (navigation-session role doc; navigation-session-layer aggregation is out-of-scope but the doc clarifies the boundary).
- **RELATED:** `docs/discipline_design_history/for_routeman.md` (discipline institutional memory; if it exists, the consolidated amendment should be reflected/referenced here as part of the institutional record — but writing to this file is not in scope of THIS inquiry's deliverable).
