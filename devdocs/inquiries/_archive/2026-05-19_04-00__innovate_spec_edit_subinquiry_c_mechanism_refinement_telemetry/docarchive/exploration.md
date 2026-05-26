# Exploration — Sub-Inquiry C: /innovate Spec Edit: Mechanism-Specific Refinement Notes + Telemetry

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-19_04-00__innovate_spec_edit_subinquiry_c_mechanism_refinement_telemetry/_branch.md`

Extract operative content from Pair 1 V1-V4 + Pair 2 W1-W3 + Pair 4 W1 + Pair 9 B2-B3 + Pair 5 Q5 + Pair 7 Q4 + map insertion locations in current (post-A + post-B) /innovate spec (693 lines).

---

## Mode + Entry Point

- **Mode:** artifact.
- **Entry point:** signal-first (9 items pre-specified per 02-00 finding's Sub-Inquiry C forward-reference scope).
- **Depth commitment:** D3 on operative content + insertion locations; D2 elsewhere.
- **Boundary:** bounded.

---

## Territory Overview

9 items mapped to current spec sections:

| Item | Source | Insertion location |
|---|---|---|
| C1 | Pair 1 V2 — Re-test trigger 4th disposition category | Phase 3 Test → Output disposition categories refinement note (line 545+) |
| C2 | Pair 1 V1 — Per-row mechanism-trace at Assembly | Phase 3 Test → Axis coverage check refinement note (line 557+) — extends existing axis-coverage check |
| C3 | Pair 1 V3 + Pair 2 W1 — Artifact-grounding 6th conditional test | Phase 3 Test → 5-test cycle (line 537 ish) |
| C4 | Pair 1 V4 — Domain Transfer source-domain guard | Mechanism 6 Domain Transfer's How-to-apply (lines 210-227) |
| C5 | Pair 2 W2 — Inversion multi-axis depth-check refinement | Mechanism 3 Inversion's depth-check refinement note (after line 167; extends existing) |
| C6 | Pair 2 W3 — Mechanism Independence shared-input-detection | Phase 3 Test → Mechanism Independence 5th test (line 536) |
| C7 | Pair 9 B3 + Pair 4 W1 — AR bidirectional + examples-not-list | Mechanism 5 Absence Recognition's How-to-apply (lines 189-209) |
| C8 | Pair 9 B2 — CM both-direction explicit | Mechanism 4 Constraint Manipulation's How-to-apply (lines 172-188) |
| C9 | Pair 5 Q5 + Pair 7 Q4 — Telemetry per-piece + axis-distribution | Mechanism Coverage (Telemetry) section (line 678+) |

---

## Operative Content (verbatim from priors)

### C1 — Re-test trigger 4th disposition category (Pair 1 V2)

> **RE-TEST TRIGGER** — survivors whose content has implications for already-committed claims in the same output. When a surviving output (typically from a Framer mechanism producing a system-level or root-level inversion) carries content that contradicts or significantly recasts a committed cell value / claim / assembly element, the disposition is RE-TEST TRIGGER: the survivor is preserved + the affected committed claims are flagged for re-test before final assembly. The operational predicate: for each surviving output, after passing the 5-test cycle, ask "does this output's content imply that any already-committed claim should be re-tested?" If YES, list the affected claims and re-test them before the assembly check finalizes.

### C2 — Per-row mechanism-trace requirement (Pair 1 V1)

> For proposals with multi-row tables or multi-element committed structures (e.g., 9-axis role allocation, N-level ladder, M-category taxonomy), verify each row/element received active mechanism work — specifically, ≥1 of the variation outputs should reference or construct the row/element's cell values, and that variation must appear in the testing log. Rows/elements that appear only in the final committed output without any mechanism trace are flagged for re-scrutiny. This applies particularly to baseline / L0 / default rows, which tend to inherit silently from upstream stabilization. The operational predicate is mechanism-trace-presence: per row, check that at least one variation's content constructs or references the row's committed cell values.

### C3 — Artifact-grounding 6th conditional test (Pair 1 V3 + Pair 2 W1)

> **Artifact-grounding (6th test, conditionally applied).** When the output produces categorical claims about project state, cell values in multi-element committed tables, or claims about which agents/systems perform which roles, additionally check the claim against existing project artifacts (files, configurations, observable state, **including canonical discipline specs of any discipline being analyzed by the inquiry — found at `cognitive_harness/<discipline>/references/<discipline>.md`**). The operational predicate: for the claim's referent, enumerate the project artifacts that currently exist serving the claim's role; if existing artifacts contradict the claim, flag for re-test (route via RE-TEST TRIGGER disposition) or revision before commitment. This test lightly domain-couples /innovate by introducing artifact-awareness; the design tension with /innovate's domain-agnostic positioning is acknowledged: the coupling is justified by closing a recurring failure mode where abstract claims contradict existing project state.

The conditional application narrows the design-tension surface from "all /innovate outputs" to "outputs that produce committed cell values about project state."

### C4 — Domain Transfer source-domain guard (Pair 1 V4)

> **Source-domain selection guard.** When the seed is in a recognizable domain (computing systems, biology, physics, organizational behavior, etc.), at least one source domain selected MUST be NATIVE to that domain (in addition to deliberately-different fields). This counter-balances the 'deliberately different' rule and prevents missing the obvious native-domain source. Example: when the seed is about computing-system memory, the deliberately-different field (e.g., SAE J3016 regulatory tiers) is valuable for cross-domain pattern-matching, but at least one computing-native source ('files = memory' / RAM / persistent storage / filesystem / database tables) must also be in the source set to catch foundational frame mismatches.

### C5 — Inversion multi-axis depth-check refinement (Pair 2 W2)

> **Multi-axis system-level check (refinement to depth-check).** After reaching a system-level statement along ONE axis, additionally check: are there OTHER system-level axes you haven't inverted along? Specifically, the existence-axis (could the count/quantity be ZERO instead of N?) and the identity-axis (what does this thing fundamentally consist of?) are common system-level dimensions that may yield different inversions than the primary axis. Reaching system-level along ONE axis is not sufficient when a competing system-level statement along ANOTHER axis would change the verdict. The existing depth-check is correct as far as it goes; the multi-axis check is a refinement that handles the case where multiple system-level statements compete. Example: if the primary inversion reaches 'X is not a deeper-depth variant of Y' (depth-axis system-level), also try 'X has ZERO existence of additive operations beyond Y' (existence-axis system-level) — both are system-level; only one of them holds in any given case.

### C6 — Mechanism Independence shared-input-detection (Pair 2 W3)

> **Shared-input detection (refinement to Mechanism Independence).** When multiple mechanisms reach the same conclusion, additionally check: do they all operate on the same inherited input from upstream stages (e.g., from upstream Decomposition pieces, Sensemaking SV commitments, prior-finding inheritances, or shared user-stated framing)? If yes, the convergence may be SPURIOUS (tautological from shared input), not INDEPENDENT (multiple independent groundings). Mark spurious-from-shared-input convergence as needing additional adversarial testing — specifically, attempt to invert or challenge the shared upstream input before treating the convergence as robust. Independent convergence requires multiple mechanisms reaching the same conclusion from DIFFERENT upstream grounds.

### C7 — AR bidirectional + examples-not-list (Pair 9 B3 + Pair 4 W1)

> **Both-levels-mandatory refinement.** When Absence Recognition is applied, BOTH the patch-level question (gaps in the current design) and the redesign-level question (what would exist if designed from scratch) are mandatory per invocation. Record at least one patch-level absence and at least one redesign-level absence, or explicitly flag "redesign-level question yielded no novel absence" with reasoning. The redesign-level question is bidirectional:

> 1. **What's missing** — what would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?
> 2. **What's already present in different form** — what is the project already doing in a less articulated way that we are treating as 'new' or 'absent'? Particularly when generating proposals for capabilities the project might lack, check whether the project already has the capability in narrative / partial / hand-curated form.

> The two examples above (what's missing; what's already present in a different form) are illustrative, not exhaustive — other categories of absence may surface; the bidirectional framing's purpose is to prevent the unidirectional bias where only "missing" gets surfaced.

### C8 — CM both-direction explicit framing (Pair 9 B2)

> **Both-direction-mandatory refinement.** When Constraint Manipulation is applied, BOTH directions (ADD a constraint AND REMOVE a constraint) are mandatory per invocation. Record at least one ADD-direction output and at least one REMOVE-direction output, or explicitly flag "REMOVE-direction explored; no candidate produced" (or the analogous flag for ADD-direction) with reasoning. The bidirectional requirement prevents the unidirectional bias where only one direction is exercised.

### C9 — Per-piece mechanism log + axis-distribution telemetry (Pair 5 Q5 + Pair 7 Q4)

> When Innovation operates in Production-task mode, report additionally:
> 
> - **Per-piece mechanism log:** for each piece in the piece-list, report the mechanism(s) applied. Format: `<piece-id>: [<mechanism>, <mechanism>, ...]`.
> - **Per-piece axis-distribution log:** for each meta-decision piece with property (v) firing, the mechanism log gains an `axis` annotation: `<piece-id>: [<mechanism>:<axis>, <mechanism>:<axis>, ...]` where `<axis>` is one of: `content`, `intervention-shape`, `scope`, `direction`, or `other-named-axis`.
> - **Meta-decision-piece classification:** for each piece, report `meta-decision` / `content-production` / `inapplicable-override`.
> - **Piece-level Inversion compliance:** for each meta-decision piece, report `satisfied` / `violated` / `overridden`. A piece's compliance is *violated* when no Inversion-candidate was generated for that piece. An Inversion-candidate that was generated, tested, and rejected after the 5-test cycle does NOT count as violation.
> 
> **FLAG condition (refined):** if any meta-decision piece has `Piece-level Inversion compliance: violated`, the overall telemetry verdict is FLAG (not PROCEED), regardless of seed-level mechanism coverage. Additionally, when property (v) fires for a piece AND Inversion is logged at that piece with axis ≠ `intervention-shape` (without `Intervention-shape-Inversion-marked-inapplicable` override), the verdict is FLAG.
> 
> **RE-RUN condition (refined):** if two or more meta-decision pieces have `Piece-level Inversion compliance: violated` without override, OR if 2+ pieces have property (v) firing AND axis-misalignment violations (without overrides), the verdict is RE-RUN.

---

## Insertion Locations (post-A+B spec; 693 lines)

| Item | Location | Approximate line |
|---|---|---|
| C1 | Phase 3 Test → Output disposition categories refinement note (extends 3-category list with 4th category) | After line 545's existing categories |
| C2 | Phase 3 Test → Axis coverage check (extends with per-row trace requirement; could go inline OR as supplementary note) | After or within line 557's existing axis coverage check |
| C3 | Phase 3 Test → 5-test cycle (adds 6th conditional test) | After 5-test table, before/within current refinement notes |
| C4 | Mechanism 6 Domain Transfer's How-to-apply | Within lines 210-227 (Domain Transfer section) |
| C5 | Mechanism 3 Inversion's depth-check refinement note (extends existing) | After line 167's existing depth-check |
| C6 | Phase 3 Test → Mechanism Independence test (in 5-test table; or as refinement note after) | After 5-test table or as refinement |
| C7 | Mechanism 5 Absence Recognition's How-to-apply | Within lines 189-209 (AR section) |
| C8 | Mechanism 4 Constraint Manipulation's How-to-apply | Within lines 172-188 (CM section) |
| C9 | Mechanism Coverage (Telemetry) section | Within line 678+ (Telemetry section) |

---

## Sequencing within Phase 3 Test (C1, C2, C3, C6 all there)

Phase 3 Test (line 531+) currently contains:
- 5-test table
- Existing refinement notes: Output disposition categories; Assembly check; Axis coverage check

Insertions:
- C3 (6th conditional test) extends the 5-test cycle.
- C6 (shared-input detection) extends Mechanism Independence test.
- C1 (Re-test trigger 4th category) extends Output disposition categories.
- C2 (per-row mechanism-trace) extends Axis coverage check.

Each is additive to its specific existing location; no sequencing conflict.

---

## Frontier Questions for Sensemaking

1. **C2 placement.** Pair 1 V1 wording targets "Axis Coverage Check" but the substance is per-row trace at Assembly. Where exactly? Sensemaking decides.
2. **C7 unification of Pair 9 B3 + Pair 4 W1.** Both target AR; B3 commits "BOTH levels mandatory"; W1 commits "bidirectional redesign-level question." Single refinement note OR two? Per Sensemaking SV6 for sub-inquiry B precedent: prefer unified.
3. **C9 BASE vs EXTENSION.** Pair 5 Q5 base (per-piece + classification + compliance) + Pair 7 Q4 (axis-distribution) — single refinement note (unified per Pair 7's extension framing) OR two separate notes? Unified is structurally cleaner.
4. **Layer-3 §9 override discipline.** Aim for no-override per established pattern. C is the next trigger opportunity (count entering C is N=4 MONITORING).
5. **Cross-references to forthcoming/live features.** C3's RE-TEST TRIGGER reference depends on C1 (4th disposition category); C5's existing depth-check; C9's references to Meta-Decision-Piece Criterion + property (v) (now LIVE post-B).

---

## Telemetry

- Mode: artifact; Entry: signal-first; Cycles: 3.
- Signals: 6; Probed: 6.
- Convergence: YES.
- Failure modes checked: 0/10 observed.

---

## Verdict

**PROCEED.** All 9 items' operative content extracted verbatim; insertion locations identified; 5 frontier questions to Sensemaking. Estimated edit size: ~180-220 lines new content.
