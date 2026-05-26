# Exploration — Per-Mechanism Diagnostic Map for /innovate's Breadth-Inversion Miss

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/_branch.md`

Context: LOOP_DIAGNOSE-framed exploration. Three territories: prior innovation.md output; /innovate spec; corrected innovation.md as comparative evidence. Goal: per-mechanism diagnostic table grounded in spec quotes.

---

## 1. Territory Overview

Three artifacts read in full:

1. **Prior `innovation.md`** at `_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/docarchive/innovation.md` — the weak /innovate output.
2. **/innovate spec** at `cognitive_harness/innovate/references/innovate.md` — the canonical reference for what each mechanism SHOULD produce.
3. **Corrected `innovation.md`** at `_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/docarchive/innovation.md` — comparative evidence showing what /innovate looks like when it CATCHES the breadth-is-feature move.

Mode: artifact. Entry: signal-first (the user's correction "breadth is what we want, not the problem").

Plus the prior's `_branch.md` seed: *"automated traversal must not become unbounded recursion or hidden selection"* — this is the inherited risk-frame from sensemaking.

---

## 2. Territory 1 — What Each Mechanism Produced in the Prior

Per the prior's `innovation.md` lines 14-56, here is what each of the 7 mechanisms produced verbatim:

| # | Mechanism | Generic | Focused | Contrarian |
|---|---|---|---|---|
| 1 | Lens Shifting | *"See the operation as traversal, not cognition."* | *"Treat depth the way a crawler treats crawl depth: useful, but always paired with max pages and allow/deny rules."* | *"The first 'runner' may be a protocol checklist, not executable automation."* |
| 2 | Combination | *"Navigation with job-queue semantics: parent map emits expansion jobs, jobs produce child maps, composer merges output."* | *"Combine route cards with expansion metadata and a traversal queue."* | *"Combine Navigation with outcome review."* |
| 3 | Inversion | *"Instead of 'runner decides what to expand,' require routes to prove they deserve expansion."* | *"Default Expansion: no; expansion happens only when policy or user selection changes it."* | *"The runner should be allowed to stop early and say 'coverage is enough at this resolution.'"* |
| 4 | Constraint Manipulation | *"Add a budget: depth, max_expansions, max_routes_per_map, and max_output_size."* | *"Add a policy: expansion-needed-only, high-priority-only, blocked-and-high, user-selected, or all-within-budget."* | *"Forbid parallelism in v1 even if the runner structure could support it."* |
| 5 | Absence Recognition | *"Missing artifact: homegrown/protocols/multi_resolution_navigation.md."* | *"Missing route fields: Expansion, Expansion reason, Child maps."* | *"Missing product surface: a composed route atlas may matter more than the runner command itself."* |
| 6 | Domain Transfer | *"Web crawler: depth plus robots/policy plus page budget plus sitemap output."* | *"Test runner: discover tests, apply filters, execute within budget, report summary."* | *"Incident triage: don't investigate every lead; triage, assign, reconcile, stop."* |
| 7 | Extrapolation | *"If Homegrown keeps growing, manual Navigation expansion will become impossible."* | *"If multihead arrives later, a traversal runner becomes necessary infrastructure."* | *"If runner automation arrives before outcome calibration, it may generate route maps that nobody uses."* |

**Telemetry the prior reported:** *"Convergence: YES. Five mechanisms converge on protocol-backed budgeted traversal."* *"Failure modes observed: none."*

**Surviving candidate the prior promoted:** *"Candidate B: Budgeted Traversal Runner — `/multi-navigation --depth 2 --max-expansions 4 --policy expansion-needed`. SURVIVE with staging."*

### Frame-Convergence Pattern (the load-bearing observation)

**13 of 21 prior outputs operate within the "expansion must be bounded" frame.** Specifically:
- All 3 Constraint Manipulation outputs add budget/policy constraints.
- All 3 Inversion outputs invert WHO decides expansion or WHEN to stop — staying inside "expansion is the thing to limit."
- 2 of 3 Lens Shifting outputs treat depth as a quantity-to-bound (crawler analogy).
- All 3 Domain Transfer outputs transfer to budget-shaped domains (crawler page budget; test-runner filters+budget; incident-triage selection-and-stop).
- 1 Combination output adds budget-via-queue-jobs.

**0 of 21 prior outputs surface the "breadth is feature, track unrun rather than limit" frame** that the user later delivered. Convergence on the budget frame was strong precisely because the upstream seed pre-committed the frame.

---

## 3. Territory 2 — /innovate's Spec Depth-Checks / Sub-Modes / Refinements

Per the canonical `cognitive_harness/innovate/references/innovate.md`, the spec already has named refinements that would have produced the breadth-is-feature frame if applied at full depth. Verbatim spec quotes:

### Lens Shifting (spec, lines 99-113)

> *"What it does: Changes the conditions under which the idea is evaluated. Same idea, different frame.* (...) *Ask: 'Under what different conditions would this idea become valid/powerful?' Construct those conditions explicitly. Re-evaluate the idea under the new conditions."*

The spec's worked example is EXACTLY this pattern: *"Under current conditions — where large capability gaps exist between models — this is weak. ... But when the proposer shifted the lens to convergence conditions ... the same idea became a powerful, defensible thesis. The idea didn't change. The evaluation conditions did."*

The spec's Lens Shifting therefore directly supports shifting from "expansion is risky" to "expansion is the feature" — same idea (the operation), different success-criterion lens (frontier-preservation rather than compute-limitation). The prior's Lens Shifting did not produce this success-criterion shift.

### Inversion (spec, lines 143-168) — with explicit DEPTH-CHECK refinement

> *"Identify a core assumption or belief related to the seed. State the opposite explicitly. Ask: 'If this opposite were true, what would follow?' Explore the implications without immediately judging feasibility.* (...) *Refinement note: Depth check: After each inversion, ask 'Can I invert AGAIN?' The first inversion often produces an incremental improvement. The second often reveals a structural change. Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT. ... Component-level inversions find workarounds. System-level inversions find architectural solutions."*

The spec's depth-check is the strongest single tool /innovate has against component-level inversions. The seed's core assumption was "unbounded recursion is the risk." A system-level inversion would be: "the risk isn't unboundedness; it's untracked execution." That's the user's correction verbatim.

### Constraint Manipulation (spec, lines 172-185) — both-direction explicit

> *"For each constraint, ask: 'What if I removed this?' and 'What if I added a new constraint?' Explore what becomes possible under the modified constraint set."*

The spec explicitly names BOTH directions — add AND remove. The prior applied only the add direction across all three variations.

### Absence Recognition (spec, lines 189-206) — with explicit redesign-level question

> *"Survey the landscape around the seed. Ask: 'What's missing?' (...) Ask: 'What would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?' The first three questions find gaps in the current design (a missing field, a missing validation, a missing handler). The last question finds things the current design never considered — structural absences that only become visible when you step outside the incremental mindset. The first finds patches. The last finds redesigns. Both are valid."*

The spec's redesign-level question would have surfaced: "If multi-resolution Navigation were designed from scratch today, the artifact distinguishing discovery from execution (a frontier ledger) would exist as a first-class output, not be conflated into a budget parameter." The prior's Absence Recognition surfaced patch-level absences only (a missing protocol file, missing route fields, a missing product surface).

### Axis Coverage Check (spec, lines 306-309) — at assembly phase

> *"Before producing the assembly verdict, examine the candidate set for the orthogonal axes it varies along.* (...) *each axis should have at least one candidate variant. A candidate set that varies along only one axis when multiple orthogonal axes are relevant is incomplete; the assembly check must explicitly identify the candidate-space axes and flag any axis with no variant.* **Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias.**"

The bolded sentence is the spec's explicit counter to inherited-frame convergence. The prior's candidate set (A through G) varies along the single axis "budget value" (none / depth-only / depth+max / protocol-with-budget). The orthogonal axis "discovery-vs-execution split" is absent. If the axis-coverage check had been applied, it would have flagged exactly this gap.

### Failure Modes Relevant to This Case

Spec lines 361-407 define six failure modes. Three are directly applicable here:

> *"3. Early Frame Lock: The first successful reframe is adopted permanently. No further mechanisms are applied. The innovation is real but suboptimal — a better version exists in an unexplored region."*

> *"6. Survival Bias: Only the most comfortable or familiar novel outputs survive testing. Truly disruptive innovations are killed because they're uncomfortable, not because they're wrong.* (...) *Everything that survives testing is incremental. Nothing challenges fundamental assumptions. The 'innovation' is really just optimization."*

> *"2. Single-Mechanism Trap: Only one mechanism is used. The innovation space is barely explored."* (spec defines at top-level mechanism scope, but the same logic applies to sub-modes within a mechanism — e.g., only the ADD direction of Constraint Manipulation.)

The prior's report *"Failure modes observed: none"* is itself diagnostic: the run didn't recognize its own Early Frame Lock or Survival Bias.

---

## 4. Territory 3 — What the Corrected Inquiry's /innovate Produced

For comparative evidence. Per the corrected `innovation.md`:

### The corrected's seed (lines 11-16) declared the inversion explicitly:

> *"The seed is a correction: 'Breadth is not bad. Broad route discovery is the purpose of Navigation. The runner needs controls that preserve breadth while making execution resumable.'"*

The corrected ran /innovate with the inverted frame already settled by the user — so the corrected's /innovate didn't have to DISCOVER the inversion; it had to OPERATIONALIZE it.

### How each corrected mechanism diverged from the prior:

| Mechanism | What the corrected produced (verbatim) | How it diverged from the prior |
|---|---|---|
| **Lens Shifting Focused** | *"Frame the runner as a frontier manager."* | The prior framed the runner as a compute-limiter; the corrected reframed as a frontier-manager. SUCCESS-CRITERION SHIFT. |
| **Lens Shifting Contrarian** | *"Frame the runner as a map publisher, not a run executor."* | Third frame the prior never reached. |
| **Inversion Generic** | *"Invert 'limit expansions to avoid too many directions.' → 'record all directions first; limit only materialization.'"* | THE SYSTEM-LEVEL INVERSION. Exactly the move the prior missed. |
| **Inversion Contrarian** | *"Invert 'unrun paths are less important.' → 'unrun paths may be the most important.'"* | Value-inversion the prior didn't reach. |
| **Constraint Manipulation Generic** | *"Add the constraint: no candidate may disappear silently."* | Add-direction but with the right invariant (record-everything, not bound-quantity). |
| **Constraint Manipulation Contrarian** | *"Remove the budget constraint entirely."* | THE REMOVE DIRECTION the prior skipped. |
| **Absence Recognition Generic** | *"Absent artifact: a frontier ledger."* | The redesign-level absence the prior didn't see. The prior's "missing protocol file" was the wrong absence. |
| **Domain Transfer Contrarian** | *"Transfer from search indexes. Result: an item can be discovered and indexed without being opened/read deeply."* | The discovery-vs-execution analogy the prior missed (the prior chose budget-shaped analogies only). |
| **Combination Focused** | *"Combine coverage_mode with batch_size. Result: coverage_mode: exhaustive | budgeted; batch_size: only applies to budgeted mode."* | The structural separation of coverage-from-budget that the prior conflated. |

**Telemetry the corrected reported:** *"Convergence: YES. Five mechanisms converge on the same core innovation: a persistent frontier ledger plus batch/exhaustive modes."*

The corrected's convergence was on the FRONTIER frame; the prior's convergence was on the BUDGET frame. Both reported "convergence YES." That's a convergence-signal-alone-is-not-enough finding.

---

## 5. Per-Mechanism Diagnostic Table

Combining Territories 1, 2, 3 into a per-mechanism diagnosis:

| Mechanism | What the prior produced | What the spec depth-check / sub-mode could have produced | Gap type |
|---|---|---|---|
| **Lens Shifting** | Surface frames (traversal vs cognition; crawler analogy; protocol-checklist) all within "expansion is risky" success-criterion | Lens Shifting spec: *"Under what different conditions would this idea become valid/powerful?"* → could have produced "under conditions where breadth-preservation is the success-criterion, the same operation becomes a frontier-manager not a compute-limiter" | **SHALLOW APPLICATION** of the success-criterion-shift question. Spec supports it; prior didn't apply it. |
| **Combination** | Job-queue + budget-shaped combinations (queue with budget; expansion metadata + traversal queue) | Combination spec includes *"what shares the same structure"* and "other mechanisms' outputs" as sources → if Inversion had produced the breadth-is-feature output first, Combination could have combined "queue with status" + "no candidate disappears silently" to produce frontier-ledger directly | **DOWNSTREAM-DEPENDENT.** Combination's failure is downstream of Inversion's failure (Combination consumes other mechanisms' outputs; Inversion didn't produce the system-level inversion that would have fed it). |
| **Inversion** | Component-level inversions (who decides expansion; default-no; stop-early) | Inversion depth-check spec: *"Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT."* → would have produced system-level inversion: "the risk isn't expansion being unbounded; it's expansion being untracked" | **DEPTH-CHECK SKIPPED OR SHALLOW.** This is the primary mechanism failure. Spec supports it; depth-check was not exercised. |
| **Constraint Manipulation** | All 3 outputs ADD constraints (add budget; add policy; add no-parallelism) | Constraint Manipulation spec: *"What if I removed this?"* AND *"What if I added a new constraint?"* — both directions explicit → could have produced "remove the bound-breadth constraint entirely; what becomes possible?" The corrected ran this exact move. | **SINGLE-DIRECTION TRAP.** Sub-mode-level Single-Mechanism Trap. Spec names both directions; prior applied only one. |
| **Absence Recognition** | Patch-level absences (missing protocol file; missing route fields; missing product surface) | AR redesign-level question spec: *"What would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created?"* → would have surfaced "a frontier ledger as a first-class artifact distinguishing discovery from execution" | **REDESIGN-LEVEL QUESTION NOT APPLIED.** Spec explicitly names two levels (patch and redesign); prior applied only the patch level. |
| **Domain Transfer** | All 3 outputs to budget-shaped domains (crawler page budget; test-runner budget; incident-triage selection) | DT spec: *"Look in deliberately different fields"* → cross-domain analogies including search indexes (discover-vs-open distinction), graph traversal (depth-vs-frontier distinction), library cataloging, exploratory testing (discovery without exhaustive execution) | **DOMAIN-SELECTION COMMON-CAUSE.** All chosen domains shared the budget-bounding pattern. The spec doesn't enforce domain diversity; this is a generic-application-of-a-good-mechanism gap. Could be argued as Survival Bias at domain-selection level. |
| **Extrapolation** | Neutral on budget vs frontier; produced timeline observations | Extrapolation spec: *"What becomes possible, necessary, or obsolete?"* → if the budget frame is extrapolated, eventually unrun paths accumulate and become invisible — leading to the same failure mode the user named | **PARTIAL-DEPTH.** Extrapolation could have surfaced the long-term consequence of the budget frame (silently-lost unrun paths) which would have flagged the frame. Not applied. |

### Assembly-Phase Diagnostic

The prior's Assembly Check (lines 214-231 of prior innovation.md) listed seven steps for the assembled protocol. The Assembly Check did not execute the **axis-coverage check refinement** (spec lines 306-309): *"Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias."* The prior's candidate set (A-G) varies along one axis only (budget magnitude); the orthogonal axis (discovery-vs-execution split) is missing. The axis-coverage check would have flagged this gap.

---

## 6. Signal Log

| # | Signal | Type | Action |
|---|---|---|---|
| S-1 | Inversion depth-check was either skipped or applied shallowly — strongest single mechanism failure | Tension + Density | PROBED — primary diagnostic seed |
| S-2 | Constraint Manipulation applied only ADD direction; REMOVE direction was skipped | Tension | PROBED |
| S-3 | Absence Recognition's redesign-level question was not applied | Tension | PROBED |
| S-4 | Lens Shifting changed surface-frames but not success-criterion-frames | Tension | PROBED |
| S-5 | Domain Transfer chose only budget-shaped domains (all 3 analogies share the same pattern) | Density | PROBED |
| S-6 | Axis-coverage check was not applied at the Assembly Phase | Absence + Tension | PROBED |
| S-7 | Prior reported "Failure modes observed: none" — failure-mode-blindness signal | Tension | PROBED |
| S-8 | The seed's "unbounded recursion is risk" framing is the upstream source of the locked frame; per user scope, this finding NOTES but does not address /sense-making | Density | NOTED, OUT OF SCOPE |
| S-9 | All four spec features needed (Inversion depth-check, CM both-direction, AR redesign-level, axis-coverage) ARE in the spec — this is spec-execution gap, not spec-coverage gap | Novelty | PROBED — load-bearing for maintenance candidates |
| S-10 | Convergence on a frame inherited from upstream is reported as "high confidence" by the spec's current convergence signal — convergence alone is not enough; convergence WITHIN-frame vs ACROSS-frames is the distinction | Novelty | DEFERRED — possible spec refinement |

---

## 7. Confidence Map

| Region | Confidence | Justification |
|---|---|---|
| Prior's innovation.md output content | **confirmed** | Direct quotes from archived file |
| /innovate spec content (mechanisms, depth-checks, refinements, failure modes) | **confirmed** | Direct quotes from canonical spec |
| Per-mechanism diagnostic table (gap type per mechanism) | **scanned → confirmed** | Each row grounded in both prior quote + spec quote |
| Failure modes mapping (Early Frame Lock, Single-Mechanism Trap at sub-mode level, Survival Bias) | **scanned** | The mappings are structurally defensible; Critique will adversarially test |
| Spec-execution gap vs spec-coverage gap distinction | **confirmed** | All four named spec features (Inversion depth-check, CM both-direction, AR redesign-level, axis-coverage) are present in the spec; the prior didn't apply them |
| The inherited frame from sensemaking explains WHY mechanisms stayed within budget territory | **scanned** | Cited in prior's seed; user-scope flag prevents action |

### Confirmed-absent regions

- **No spec-coverage gap requiring new /innovate mechanism.** The spec already has the named refinements needed; the failure was in EXECUTING them at full depth, not in their absence from the spec.
- **No "the spec lacks a fundamental capability" finding.** The prior could have produced the breadth-is-feature output with the current spec applied rigorously.
- **No /td-critique gap-finding within this inquiry's scope.** Critique's role in the prior would have been to test the surviving Candidate B adversarially; whether it did is OUT OF SCOPE per user constraint.

---

## 8. Frontier State

**STABLE.** All 7 mechanisms in the prior's innovation.md have been mapped against the corresponding spec depth-checks / sub-modes / refinements. Per-mechanism gap types are confirmed by direct spec quotes and prior output quotes.

Convergence check:
- Frontier stability: ✓ (additional probing refines but doesn't surface new mechanism gaps).
- Declining discovery rate: ✓ (second-cycle probes confirmed existing findings rather than surfacing new ones).
- Bounded gaps: ✓ (the remaining uncertainty is "how to operationally enforce depth-check application" — interpolable for Innovation phase).
- Jump scan: ✓ (checked whether Critique's role could be the locus of failure — out of scope per user, but the prior's critique.md will be briefly inspected during Sensemaking if needed for completeness).

---

## 9. Gaps and Recommendations — Hand-offs

### To Sensemaking

1. **Commit the diagnostic categorization.** Each of the 7 mechanisms has a gap-type tag in §5. Sensemaking should refine these into a clean taxonomy: depth-check-skipped, single-direction-trap, sub-mode-skipped, common-cause-in-domain-selection, downstream-dependent-failure, redesign-level-question-skipped.

2. **Confirm the spec-execution-gap-not-spec-coverage-gap finding.** This is load-bearing for the maintenance candidates: are we proposing changes to the spec's RULES (process), or are we proposing changes to how the discipline ENFORCES its existing rules (process at meta-level)? The diagnosis suggests the latter.

3. **Map failure-mode coverage.** Three of /innovate's six failure modes (Early Frame Lock; Single-Mechanism Trap at sub-mode level; Survival Bias) appear to apply to the prior's run. The prior's self-report "Failure modes observed: none" suggests the failure-mode self-check is either not run or is too shallow. Is this a sub-finding worth committing?

4. **Adjudicate the user-scope boundary.** Evidence points to the inherited seed framing ("unbounded recursion is risk") as the upstream source of the locked frame. Per user scope, this finding NOTES but does not address /sense-making's role. Confirm this scope handling.

### To Decomposition

- The deliverable has THREE parts: (a) the per-mechanism diagnostic table; (b) the failure-hypothesis list per LOOP_DIAGNOSE Step 4 format (each hypothesis: stage, shortcoming type, evidence, confidence, maintenance candidate, evaluation gate); (c) the maintenance-candidate set targeting /innovate spec edits. Light decomposition expected.

### To Innovation (execution)

- Produce the diagnostic finding per LOOP_DIAGNOSE Step 4 format with each failure hypothesis using the prescribed shape.
- Produce maintenance candidates that are concrete /innovate spec edits (not abstract observations).
- Confidence ratings per the protocol: HIGH = multi-artifact convergence; MEDIUM = pointed but ambiguous; LOW = possible but not isolated.

### To Critique

- Adversarially test each failure hypothesis: could the prior's mechanism output have arisen from CORRECT depth-check application but with a genuinely different (and possibly defensible) verdict? Or does the evidence isolate the depth-check skip as the failure?
- Test the spec-execution-gap-not-spec-coverage-gap claim: is there any way the prior could have produced the breadth-is-feature output WITHOUT the spec already supporting it?
- Test the survival-bias claim against /innovate's spec: the spec's existing survival-bias prevention is *"Deliberately test the most uncomfortable output with extra care. Ask: 'Am I rejecting this because it's wrong, or because it's threatening?'"* — did the prior's run apply this check? If not, that's the failure.
- Execute per-commitment re-tests per Sensemaking's plan (the 3 priors' commitments must be re-tested).

---

## 10. Telemetry

| Field | Value |
|---|---|
| Mode | artifact |
| Entry point | signal-first (user's "breadth is feature" correction) |
| Cycles run | 3 (coarse scan of 3 artifacts + per-mechanism deep probe + jump scan for spec-coverage-vs-execution distinction) |
| Artifacts read | 3 (prior innovation.md; /innovate spec; corrected innovation.md) |
| Per-mechanism diagnoses | 7 (one per mechanism) + 1 assembly-phase diagnosis (axis-coverage) |
| Failure-mode mappings | 3 (Early Frame Lock; Single-Mechanism Trap sub-mode-level; Survival Bias) |
| Spec features named that prior didn't apply | 4 (Inversion depth-check; Constraint Manipulation both-direction; Absence Recognition redesign-level; axis-coverage check) |
| Convergence — frontier stability | ✓ |
| Convergence — declining discovery rate | ✓ |
| Convergence — bounded gaps | ✓ |
| Jump scan | ✓ (confirmed this is spec-execution gap, not spec-coverage gap) |
| Failure modes checked | premature depth ✓; surface-only ✓; false confidence ✓ jump-scanned; premature termination ✓; re-exploration ✓; completeness-bias N/A; open→closed drift ✓; silent boundary discovery ✓ (boundary set by `_branch.md`); negative-space silent drop ✓ (confirmed-absent regions named); inadequate per-item depth ✓ |

---

## 11. Self-Assessment

**PROCEED.** Three territories mapped; per-mechanism diagnostic table grounded in direct spec quotes + prior output quotes. The diagnosis is concrete: 4 specific spec features (Inversion depth-check; Constraint Manipulation both-direction; Absence Recognition redesign-level; axis-coverage check) were not applied in the prior's run. 3 of /innovate's 6 existing failure modes (Early Frame Lock; Single-Mechanism Trap at sub-mode level; Survival Bias) apply to the prior's pattern.

The load-bearing finding is the **spec-execution-gap vs spec-coverage-gap distinction**: /innovate's current spec already supports the move the user later delivered; the prior's failure was not exercising the spec at full depth. This shapes the maintenance candidates: they should target HOW the discipline self-enforces its named depth-checks/sub-modes, not WHAT mechanisms exist.

Sensemaking should refine the diagnostic categorization and adjudicate the user-scope boundary. Critique should adversarially test the spec-execution-gap claim and the failure-mode mappings.
