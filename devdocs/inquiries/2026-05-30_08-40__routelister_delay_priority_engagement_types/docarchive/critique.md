## User Input

`devdocs/inquiries/2026-05-30_08-40__routelister_delay_priority_engagement_types/_branch.md` (problem context: sensemaking.md [the verdict]; candidates: the category test + per-item disposition + no-4th-axis + served-need handoff + bloat verdict/doc residue, with foils F1–F5, in innovation.md; priors + workspace in context). Adjudicate the "don't add" verdict: category soundness (F1), no-4th-axis (F2), already-covered (F3), need-served (F4), bloat/document-not-extend (F5) — esp. guard against status-quo bias (rejecting a user proposal). Render verdicts + complete the Inherited Commitments Re-test.

---

# Structural Critique — The "Don't Add These Engagement-Types" Verdict

## Phase 0 — Dimension Construction

Extracted from Sensemaking + the `_branch.md` Goal's negative-spec. The candidate set involves project artifacts (routelister's design) + a *user proposal being rejected* → a project-specific risk dimension (status-quo-bias resistance) is mandatory and load-bearing.

| # | Dimension | What it asks | Extracted from | Weight |
|---|---|---|---|---|
| **D1** | **Category correctness** | Is the category test sound (engagement-type = partitionable by *kind*; the 3 fail)? | SV6 / K1, K8; Ambiguity 1 | **CRITICAL** |
| **D2** | **Boundary fidelity (non-re-coupling)** | Does the verdict respect "Navigation sees, it does not choose" — no perception↔selection re-coupling? | SV6 / P2, C4; 08-14 | **CRITICAL** |
| **D6** | **Status-quo-bias resistance** — *project-specific risk axis* | Is the rejection evidence-based, or protecting the settled 9-verb design? Is the user's need affirmed + served, not dismissed? | failure mode #1; `_branch` "what would fail" (b) | **CRITICAL** |
| **D3** | **Need-coverage** | Does the verdict actually serve the user's triage need, not just reject the proposal? | SV6 / K6, K9; the "many routes" use case | HIGH |
| **D4** | **Already-covered soundness** | Is "low-priority = the Priority field," "do-nothing = Excluded," etc. actually true of the existing design? | SV6 / K2, K3; artifact-grounding | HIGH |
| **D5** | **Bloat-resistance / parsimony** | Does the verdict avoid adding bloat — and is even the doc residue justified? | SV6 / K1; the user's explicit bloat warning | MED-HIGH |

**Dimension validation:** if a candidate passed all six — category-correct (D1), boundary-faithful (D2), status-quo-bias-resistant (D6), need-serving (D3), artifact-true (D4), parsimonious (D5) — it would be the careful verdict the goal wants. **D6 is the load-bearing project-specific risk axis** (the central danger of THIS inquiry is rubber-stamping a rejection because the design is settled). All sensemaking perspectives map (technical→D1, risk→D2/D5, human/user→D3/D6, definitional→D4).

---

## Phase 1 — Fitness Landscape

- **Viable region:** the verdict that (a) correctly classifies the three as non-engagement-types (D1), (b) keeps them out of routelister without re-coupling (D2), (c) affirms + serves the real triage need (D3/D6), (d) is true to the existing fields (D4), (e) adds nothing but a doc pointer (D5).
- **Dead region:** any verdict that adds them as engagement-types (fails D1/D5) or as a disposition axis (fails D2); any flat rejection that ignores the need (fails D3/D6).
- **Boundary region:** the doc residue (legitimate but DEFERRED to spec authoring); the "keep in mind" handling (perception vs meta-loop-memory — probed below).
- **Unexplored:** whether the meta-loop's *deferred-but-watched* state (the home of "keep in mind") is itself specified — out of scope (it's the prior finding's Gap B).

---

## Phase 2 — Adversarial Evaluation

### C1 — The category test ("an engagement-type must be partitionable by *kind*")
- **Prosecution (F1):** "an engagement-type is just 'what the route tells you to do,' and do/defer/drop ARE things to do — so they qualify." *Specific failure-case:* is there any reading of 'defer' that advances the goal or sharpens understanding (i.e., fits a *kind*)?
- **Defense:** the axis is partitioned by *kind* (teleological/epistemic); every one of the nine sits under one. 'Defer/neglect/do-nothing' sit under *neither* — deferring a route neither advances the goal nor sharpens the understanding it rests on. A value unplaceable in the axis's own partition is not an axis-member.
- **Collision:** F1 dies — even the strongest "things to do" reading can't place 'defer' under a *kind*; the failure-case search finds no kind-fit. The test is sound and *reusable* (it screens any future proposed engagement-type). **Position: viable (D1✓).** → **SURVIVE.**

### C2 — Per-item disposition table
- **Prosecution (F3):** "low-importance should be first-class/visible — a type would surface it." *Spec-gap probe:* does the existing design actually surface priority?
- **Defense:** routelister's **Map Header already carries the high-priority count** and every record carries **Priority** (walkthrough §6.1); **do-nothing** non-routes go to the **Excluded section with reasons**; **high-priority-delay** decomposes into Priority + Confidence/depth-signal (covered) + excluded dependency + meta-loop defer. Visibility is an existing-field property, already met.
- **Collision:** F3 dies — the visibility need is already served by the Map Header; a new type would duplicate Priority. The decomposition is artifact-true. **Position: viable (D4✓).** → **SURVIVE.**

### C3 — No 4th "disposition" axis
- **Prosecution (F2):** "keep the engagement axis clean but add a separate disposition axis (act/defer/neglect/drop) — that captures the triage AND respects the category test."
- **Defense:** a disposition is a recommendation about *what to do* with a route = soft selection; routelister is "not a selector" and the rule is "Navigation sees, it does not choose." A disposition axis re-couples perception↔selection (re-imports the `01-11` defect). The disposition *input* (salience) is already Priority; the *decision* is the meta-loop's.
- **Collision:** F2 dies — the steelman relocates rather than rescues: act/defer/neglect/drop is the meta-loop's triage, fed by routelister's Priority. The system-level rule (a perception discipline must not emit choices) forbids the axis. **Position: viable; D2-critical.** → **SURVIVE.**

### C4 — The served-need handoff (annotate → schedule)
- **Prosecution (F4):** "the need ISN'T served — there's a gap the existing fields miss." *Specific failure-case (the user's own distinction):* "high-priority delay is what our **next moves should keep in mind**" — where does the *"keep in mind"* state live? Priority=HIGH alone doesn't say "deferred-but-watched."
- **Defense:** routelister annotates salience (Priority/Confidence) + maturity (depth-signal); the meta-loop triages.
- **Collision:** F4 mostly dies (salience/maturity/exclusion are all covered), BUT the failure-case *lands* as a refinement: the **"keep in mind / deferred-but-watched" state is a meta-loop *memory* state** — precisely the prior loop-harmony finding's **Gap B (the REVISIT / cross-cycle verdict-state operation on `_meta_state.md`)**. So "keep in mind" is served, but by a *meta-loop* state that is itself an already-identified (unspecified) gap — not by routelister, and not by a new engagement-type. **Position: viable core, one clarifying refinement.** → **SURVIVE + REFINE.**
  - **Refinement brief:** state explicitly that "high-priority-but-deferred / keep-in-mind" is a **meta-loop deferred-watched state** (the prior finding's Gap B REVISIT/state-tracking on `_meta_state.md`), fed by routelister's Priority=HIGH annotation — not a routelister type. This *links* the two findings: the user's "high-priority delay" is the concrete motivating case for Gap B.

### C5 — Bloat verdict + documentation residue
- **Prosecution (F5):** "if there's a real need, ADD-DIMENSION (a real new axis/type) rather than just documenting." *User-perspective:* the user asked for a capability; documentation isn't a capability.
- **Defense:** ADD-DIMENSION re-imports the category error (D1) + re-coupling (D2); the capability the user wants (triage) already exists across routelister-perception + meta-loop-selection — what's *missing* is only the *statement* of the handoff, so ADD-CONTENT (document) is the correct minimal shape. The user's need is met by existing capability, not by a new one.
- **Collision:** F5 dies — adding a dimension would be the bloat the user themselves warned against; the doc residue is the parsimonious fix. **Position: viable; doc residue DEFERRED to spec authoring.** → **SURVIVE (doc residue DEFERRED).**

### Status-quo-bias audit (D6 — the load-bearing project-specific check, applied across all candidates)
Is this verdict protecting the settled 9-verb design, or evidence-based? **Evidence-based:** every rejection rests on an *external/structural* ground that predates this inquiry — the category definition (engagement-type = partitionable by kind, from the route-type schema), the perception/selection boundary (08-14), and the *pre-existing* Priority/Confidence + Excluded + Map Header fields (verified by artifact-grounding below). And the verdict does NOT dismiss the user: it **affirms the triage need is real**, **shows exactly where it's already served**, and **produces a refinement** (C4: the user's "high-priority delay" is the motivating case for the meta-loop's Gap B). A status-quo-protective verdict would deny the need or stop at "no"; this one affirms, serves, and connects. **D6: PASS.**

---

## Phase 3.5 — Assembly Check

The survivors assemble into: **routelister annotates (Priority/Confidence/depth-signal + Excluded + Map Header); the meta-loop decides (defer/neglect/drop/keep-in-mind), with "keep-in-mind" being the meta-loop's deferred-watched state (Gap B).** Evaluated as a candidate: passes D1 (category-correct), D2 (no re-coupling), D3+D6 (need served + affirmed), D4 (artifact-true), D5 (no new type — one doc sentence). **The assembly SURVIVES and ranks top.** Emergent value: this is the *same perception→selection split* as the prior loop-harmony finding, reached from an independent direction (a proposed *vocabulary extension*), and it pins down a concrete motivating case for that finding's Gap B. The two findings reinforce each other.

---

## Inherited Commitments Re-test (Synthesis Trigger obligation)

| Prior | Commitment | Re-test verdict |
|---|---|---|
| `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md` | route-type = grain × kind × engagement-type; the engagement-type axis = the 9 concept-engagement verbs (the loop-control 7 dropped) | **RE-TESTED ✓** — the category test ("an engagement-type must be partitionable by *kind*") operationalizes this commitment; the three proposals fail it (unplaceable under teleological/epistemic), confirming the axis is the how-to-engage verb axis, not a disposition/priority axis. |
| `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` | "Navigation sees; it does not choose"; selection/priority/scheduling = meta-loop; loop-relative route-state (Blocked-By) dropped | **RE-TESTED ✓ — confirmed + reinforced.** The verdict relies on this rule (disposition = selection = meta-loop; the no-4th-axis kill). "delay until peripherals defined" = the dropped Blocked-By / excluded inter-concept dependency. "keep in mind / deferred-watched" = the meta-loop's Gap B state. The inquiry confirms the boundary from a 2nd independent direction and supplies a motivating case for Gap B. |
| `docs/walkthrough.md` §4 + §6.1 | routelister is "Not a selector" but tags an **attributive Priority/Confidence**; "Not an inter-concept dependency-graph builder"; the **Excluded section**; the **Map Header high-priority count** | **RE-TESTED ✓ (artifact-grounded)** — all verified present in the design: Priority/Confidence (§6.1 Attribution group), the Excluded section (§6.1), the Map Header high-priority count (§6.1), "not a selector" + "not a dependency-graph builder" (§4). "low-priority" is therefore a duplicate of the existing Priority field; "do-nothing" is the existing Excluded section; the dependency part is explicitly excluded. |

All three priors re-tested with cited evidence; none inherited-without-re-test.

---

## Coverage Map + Signal

| Region | Status |
|---|---|
| Category test (D1) | covered — SURVIVE (C1); F1 KILLED |
| Per-item disposition (D1/D4) | covered — SURVIVE (C2); F3 KILLED |
| No-4th-axis / boundary (D2) | covered — SURVIVE (C3); F2 KILLED |
| Need served (D3/D6) | covered — SURVIVE+REFINE (C4); F4 mostly killed, "keep-in-mind"→meta-loop Gap B |
| Bloat verdict + doc residue (D5) | covered — SURVIVE (C5); F5 KILLED; doc residue DEFERRED |
| Status-quo-bias (D6) | covered — PASS (evidence-based; need affirmed + served + connected) |

**Signal: TERMINATE.** A clean SURVIVE exists (the assembly + C1/C2/C3/C5 with no critical-dimension caveats); the one REFINE (C4: link "keep-in-mind" to the meta-loop's Gap B) is a strengthening clarification, not a viability blocker; the doc residue is DEFERRED to spec authoring. The landscape is stable; the question is answered.

---

## Convergence Telemetry

- **Dimension coverage:** 6/6; D6 (project-specific status-quo-bias axis) present and load-bearing. Every dimension discriminated (D1 killed F1; D2 killed F2; D4 killed F3; D3 surfaced the C4 refinement; D5 killed F5; D6 audited the rejection).
- **Adversarial strength:** STRONG — prosecution constructed genuine pro-addition objections (F1–F5 are the user's case, steelmanned), multi-axis depth (user-perspective on C5/D6; the failure-case "where does keep-in-mind live?" landed as the C4 refinement; spec-gap probe on C2).
- **Landscape stability:** STABLE — every candidate landed in a mapped region; no new regions opened.
- **Clean SURVIVE exists:** YES — the annotate→schedule assembly + the category test.
- **Failure modes checked:** Rubber-stamping (avoided — the pro-addition foils were genuinely steelmanned, and a real REFINE emerged); Nitpicking (avoided — the REFINE is critical-axis strengthening, the SURVIVEs are real); **Status-Quo / Self-Reference (failure mode #7) — guarded** (D6 explicitly audited the rejection; grounded in external anchors — the category definition + the 08-14 boundary + the artifact-verified existing fields; the user's need affirmed + served + connected to Gap B, not dismissed); Wrong/Missing dimensions (D6 project-specific axis included); Evaluation Drift (dimensions fixed in Phase 0); False Convergence (a clean SURVIVE with the assembly exists).
- **Overall: PROCEED** — sufficient coverage, strong adversarial testing, stable landscape, clean survivor, status-quo-bias audited. Ready to CONCLUDE.
