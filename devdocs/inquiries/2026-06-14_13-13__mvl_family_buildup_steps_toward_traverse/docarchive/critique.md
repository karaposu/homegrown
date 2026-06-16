## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-14_13-13__mvl_family_buildup_steps_toward_traverse/_branch.md

(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md, innovation.md. Adversarial targets: innovation survivor B + its RE-TEST flag; the keeper-thesis; the canon-staleness claim; the falsework/scaffold framing.)

---

# Structural Critique — The Lineage + Keeper-Thesis

## Phase 0 — Dimensions

The candidate set is claims about **project artifacts / operations / state** → project-specific risk dimensions required. The candidate-space rests on **inherited commitments** (the Sensemaking model) → Frame-premise test required.

| # | Dimension | Weight | Success criterion |
|---|---|---|---|
| D1 | **Correctness** | critical | the claim matches the structural facts (pipelines, filesystem, canon text) |
| D2 | **Coherence / canon-fit** | critical | fits committed principles (flow-type-is-identity; preserve-history; one-unit-for-SUSTRALL) without breaking them |
| D3 | **External-grounding** | critical | claims about canon/filesystem are verified against the *literal* artifacts (verbatim quote / `ls` state), not argued structurally |
| D4 | **Scope-honesty / non-overreach** | critical (project-specific risk: explicit-culture-fit) | no commitment smuggled beyond the user's ask (understand + ratify "maintain only traverse"); the user's anchor preserved |
| D5 | **Completeness** | moderate | covers lineage + keeper + rule + re-test + debts |
| D6 | **Elegance / parsimony** | moderate | simplest sufficient framing; no machinery the claim doesn't need |

### Frame-premise prosecution (the candidate-space's load-bearing premises)

- **P-α "the four pipelines are strictly nested supersets."** *What-if-wrong:* if an ancestor had something traverse dropped, superset-dominance fails. *Check:* `{S,I,C}` ⊂ `{Su,S,D,I,C}` ⊂ `{A,Su,S,D,I,C}` ⊂ `{A,Su,S,D,I,C,R}` — strictly nested on **disciplines**. **Holds.** BUT the prosecution lands one level down: superset-of-*disciplines* ≠ superset-of-*capability*. MVL's documented capability is **speed** ("Use `/MVL` … when speed matters" — worker_loop_logic.md §3), which traverse (always-full) lacks. So "nothing is lost" is false on the *speed* axis. **This is the load-bearing prosecution of the whole inquiry.**
- **P-β "one-unit-for-SUSTRALL."** *What-if-wrong:* if the meta-loop benefits from a fast scout loop + a deep loop, "one unit" is wrong. *Check:* worker_loop_logic.md §6 literally shows the meta-loop running "`/MVL` or `/MVLw`" — canon *did* imagine choosing among worker loops by weight. **Partially bites** — but a stage-set parameter on one runner satisfies it without 4 specs. Holds *with the speed-caveat*.
- **P-γ "chronological order = compositional order."** Grounded in the archive-note lineage table + affix semantics. **Holds.**

## Phase 1 — Fitness Landscape

- **Viable region:** claims that are externally verified (D3), match the structural facts (D1), and stay within the user's ask (D4).
- **Dead region:** any claim asserting traverse "loses nothing" (false on speed) or asserting a *build* the user didn't request (D4 fail).
- **Boundary region:** framings that are vivid-but-slightly-overclaiming (falsework; lens-disagreement; the construction-method) — viable as *color*, dead as *literal claims*.
- **Unexplored→now-checked:** whether the canon-cleanup target is *live canon* vs *immutable findings* (turned out load-bearing — see C3).

## Phase 2 — Adversarial Evaluation

### Candidate 1 — Keeper-thesis: "completeness structurally forces retirement; maintain only traverse"
- **Prosecution:** (a) is "forced" real, or post-hoc rationalization of an already-made decision (status-quo/decision-bias)? (b) **Speed** — retiring MVL *does* lose the documented fast lane; ~28 min/6-discipline run + the "throughput inversion" (When_Is_Good_Enough.md) make always-full a real cost. "Loses nothing" overclaims.
- **Defense:** superset-dominance holds on **cognitive output** (traverse computes everything the ancestors do); one maintained spec removes the drift we are *literally observing* (canon-staleness); history preserved; the user decided it.
- **Collision:** the thesis stands, but the word **"forced" must be split by plane**: *forced* on the **cognitive-capability** plane (traverse ⊇ ancestors → no cognitive loss); *chosen* on the **operational/speed** plane (justified by maintenance-cost + the completeness-trajectory, not by logical necessity). "Loses nothing" is **false** and must not appear.
- **Verdict: SURVIVE — with binding caveat** (state the cognition-forced / speed-chosen split; never claim "loses nothing").

### Candidate 2 — Survivor B: "maintain ONE runner; parameterize the stage-set" (+ RE-TEST flag)
- **Prosecution (the user-flagged RE-TEST, D4):** does "parameterize the stage-set" **smuggle a build-commitment**? The user asked to *understand* the lineage and *ratify* "maintain only traverse." "Parameterize" can read as a directive to **re-architect traverse into a flagged/quick-mode runner** — a design commitment with no evidence behind it and outside the ask. Concrete failure case: the finding lands in canon, a future reader treats "the rule is: one runner, parameterized" as a TODO and builds a quick-mode nobody requested.
- **Defense:** B is offered as an *explanatory refinement* (why "only traverse" is the right rule) and as the *ungated home* for the speed-debt — its value is **preventing a future mistake** (reviving an ancestor for speed instead of adding a mode).
- **Collision:** the insight is real but the wording is dangerous. B must be rendered **descriptively, not imperatively**: "one *maintained* runner; loop-length is a parameter *in principle* — so IF a speed need ever arises, the structurally-correct response is a traverse mode-flag, **not** a revived ancestor. This is noted, **not scheduled**."
- **Verdict: REFINE** — keep the principle, strip the imperative, mark any quick-mode explicitly **DEFERRED / ungated (no build commitment)**. *This is the direct answer to the RE-TEST flag: yes, the raw wording risked smuggling a build-commitment; the refined wording does not.*

### Candidate 3 — Canon-staleness claim (External-anchor prosecution — verbatim)
- **External anchors quoted:**
  - `naming_change.md` (line 42, present tense): *"the affix-named members (`/MVL`, `/MVLw`, `/aMVLw`) are unchanged and **coexist with it**."* — Filesystem: those three are in `cognitive_harness/non-active/`; installer `skills_no_refs=("traverse" "routelog")`. → "coexist" as **live peers** is now false. **STALE — confirmed.** (Nuance: naming_change.md's own "Transition state" section anticipated "Retiring the `/aMVLwr` alias is a later cleanup" — so it described a transition now completed; it was *correct-for-its-time*, **stale-now**.)
  - `worker_loop_logic.md` (§3): *"Two worker loop runners are shipped in `cognitive_harness/`: `/MVL` … `/MVLw`."* — Filesystem: `cognitive_harness/` ships `traverse` (+ disciplines); MVL/MVLw in non-active/. **STALE — confirmed** (and doubly behind: it never mentions aMVLw/aMVLwr at all).
  - `When_Is_the_Worker_Loop_Good_Enough.md` (line 71): *"Newest-runner maturity | count of completed `/aMVLw` inquiries | N≈3."* — treats `/aMVLw` as the current newest. **References old names — confirmed.**
- **Prosecution that bites (D2 canon-fit):** the surfacing/sensemaking outputs lumped **all three** as "docs to update." But `When_Is_the_Worker_Loop_Good_Enough.md` is a **`# Finding:`** — and the project's committed principle is that **findings are immutable historical records** (a finding that says `/aMVLw` is correct for its time). **Editing it would violate preserve-history.** So the cleanup target must be split.
- **Defense:** the core claim (canon misdescribes live state) is true and externally verified.
- **Collision / Verdict: SURVIVE — refined and split.** The canon-cleanup list is **live canon docs only**: `worker_loop_logic.md` (§3 active-runner description) + `naming_change.md` ("coexist" clause + Transition-state section). **Immutable — do NOT edit:** `When_Is_the_Worker_Loop_Good_Enough.md` and the rest of the findings/inquiry corpus that merely *reference* the old names (legitimately, historically). External-grounding **VALIDATED** (verbatim quotes + filesystem).

### Candidate 4 — Falsework / bootstrap-compiler / resorbed-scaffold framing
- **Prosecution (analogy honesty, D1):** falsework is *struck and discarded*; resorbed scaffold is *gone*. The ancestors are **NOT gone** — they're preserved in non-active/. Both images overclaim removal.
- **Defense:** the images capture the essential, correct point (necessary-to-build, not-maintained-in-the-product) vividly.
- **Collision / Verdict: SURVIVE — with stated disanalogy.** Prefer **bootstrap-compiler** (you keep the stage-0 *source*, you just don't *ship* it) as the most honest; if "falsework" is used, explicitly note the disanalogy: *unlike struck falsework, these are preserved as readable history.* Use as **color, not literal claim.**

### Candidate 5 — "The canon contradiction is a lens disagreement"
- **Prosecution (D6 parsimony):** over-intellectualizes. The simpler, truer explanation is **temporal** — naming_change.md described a transition state that has since completed; it is *stale*, not a different-but-valid lens.
- **Defense:** there is still a mild genuine lens point (archive-note "stages" vs naming_change "variants").
- **Collision / Verdict: SURVIVE — demoted.** Lead with the **temporal** explanation (transition completed → update the doc); offer the lens point as secondary color only. Don't let "lens disagreement" excuse a simple staleness.

### Candidate 6 — Construction-method generalization
- **Prosecution (D4/D6):** **N=1.** One family instantiates the "method." The project's own rule (When_Is_Good_Enough.md DEFERRED items): *"N=2 justifies a protocol; N=1 is an observation."* Claiming a reusable "construction method" from one family overreaches.
- **Defense:** offered as a fertile observation, not a committed protocol.
- **Collision / Verdict: SURVIVE — as observation, not protocol.** State it as "a pattern this one family *suggests*"; route to the finding's **Open Questions / Research Frontiers**; do **not** canonize.

## Phase 3.5 — Assembly Check

The refined survivors assemble cleanly into the finding spine (P1 lineage → P2 keeper-thesis[cognition-forced/speed-chosen] → P3 rule[descriptive] + ancestor-status → P4 prior-re-test → P5 debts[canon-cleanup split live-vs-immutable; speed ungated] → P6 method[observation]). No *new* emergent assembly beyond innovation's B-unified thesis; **critique's contribution is the honesty corrections**, not a new architecture.

## Phase 4 — Coverage + Convergence

- **Coverage:** all 6 candidates evaluated on all critical dimensions; the load-bearing **speed-axis** (where the real "loses nothing" failure rides) was explicitly prosecuted — Axis-Absence guarded.
- **External-grounding:** VALIDATED (verbatim canon quotes + filesystem/installer cross-check). **Mechanism-independence NOT quarantined.**
- **Convergence:** clean SURVIVE exists (keeper-thesis, refined); landscape stable; refinements are targeted, not landscape-changing.
- **Failure modes checked:** Wrong-Dimensions (no), Rubber-Stamping (no — 1 REFINE + 4 binding caveats + a list-split, not a pass-everything), Nitpicking (no — zero KILLs; every refinement is load-bearing, severity-weighted), Dimension-Blindness (no — added D3 external-grounding + D4 scope-honesty), False-Convergence (no), Evaluation-Drift (single pass), Self-Reference-Collapse (guarded — external anchors, not loop-vocabulary), Axis-Absence (speed-axis prosecuted), External-Grounding-Absence (no — verbatim).

## Deliverable Summary

**(a) Dimensions:** D1 Correctness · D2 Canon-fit · D3 External-grounding · D4 Scope-honesty *(all critical)* · D5 Completeness · D6 Elegance.

**(b) Landscape:** viable = externally-verified, fact-matching, within-ask; dead = "loses nothing" / smuggled build-order; boundary = vivid-but-overclaiming framings.

**(c) Verdicts:**
1. Keeper-thesis — **SURVIVE** (caveat: split *cognition-forced* vs *speed-chosen*; never "loses nothing").
2. Survivor B — **REFINE** (descriptive not imperative; quick-mode DEFERRED/ungated — answers the RE-TEST: raw wording *did* risk smuggling a build-commitment).
3. Canon-staleness — **SURVIVE/refined** (cleanup = live canon `worker_loop_logic.md` + `naming_change.md` only; findings like `When_Is_Good_Enough.md` are immutable — do NOT edit). External-grounding validated.
4. Falsework/scaffold — **SURVIVE** (use bootstrap-compiler; note preservation disanalogy; color not claim).
5. Lens-disagreement — **SURVIVE/demoted** (lead temporal; lens secondary).
6. Construction-method — **SURVIVE/observation** (N=1 → Open Questions, not canon).

**(d) Coverage map:** lineage ✓ · keeper-justification ✓ (speed-axis tested) · forward-rule ✓ (overreach tested) · prior-re-test ✓ (external-anchored) · debts ✓ (cleanup-target split) · generalization ✓ (N-rule applied). No unexplored viable regions.

**(e) Signal: TERMINATE** — ranked survivors, all SURVIVE/REFINE, zero KILL; the question is answered once the honesty refinements are applied. Ranking: #1 keeper-thesis (core) > #3 canon-staleness (actionable + verified) > #2 rule-form > #4/#5/#6 (framings/observation).

## Convergence Telemetry

- Dimension coverage: 6 dims, all critical ones tested per candidate.
- Adversarial strength: **STRONG** (the speed-axis + the build-commitment-smuggle + the immutable-finding split each made a candidate's advocate pause).
- Landscape stability: **STABLE** (refinements targeted, not structural).
- Clean SURVIVE exists: **YES** (keeper-thesis, refined).
- External-grounding: **VALIDATED** (verbatim quotes + filesystem).
- Failure modes observed: **none**.
- **Overall: PROCEED.**
