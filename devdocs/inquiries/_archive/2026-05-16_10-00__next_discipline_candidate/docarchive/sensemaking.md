# Sensemaking: Next Discipline Candidate

## User Input

Inquiry `_branch.md`. Input: exploration.md (taxonomy mapped; 8 admitted disciplines + 15 rejected + 3 future-register; `/intuit` admitted + unbuilt; materialization documented + classification-uncertain; nav/reflect admitted + redesign-pending; user's stated cannon disconnects from taxonomy). Apply 9 perspectives; Frame-exit Completeness gating likely fires; Phase/Calibration-State required; test Status Quo Bias both directions; load-bearing concept test on "discipline."

---

## SV1 — Baseline Understanding

The user asks what discipline should be added to the cannon next. Exploration surfaced three strong candidate groups:
1. `/intuit` — uniquely admitted-but-unbuilt cannon position per the canonical taxonomy
2. Materialization — documented capability gap; classification uncertain (discipline vs lifecycle vs protocol)
3. Nav v2 / reflect v2 — admitted Boundary disciplines in mid-redesign

The challenge is committing a dominant frame for "next discipline" — strict cannon-fit (favors `/intuit`), capability-leverage (favors materialization), or in-flight engineering (favors nav/reflect v2). Sensemaking's job is to commit a frame, rank candidates, surface caveats, and produce a model Decomposition can partition.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** Must fit current project calibration state. Some future-register candidates need calibrations not yet reached (parallel-inquiry rate, autonomy Level 3, etc.).
- **C2** Must address the user's mental-model gap (their stated cannon omits taxonomy-admitted disciplines).
- **C3** Must respect canonical taxonomy structure unless explicitly justified to deviate.
- **C4** Recommendation must be actionable — the user can commit to a follow-up inquiry that designs the spec next.
- **C5** Dev-phase appropriate: low procedural overhead in current state.

### Key Insights

- **K1 `/intuit` is structurally singular.** It's the unique admitted-but-unbuilt cannon position in the taxonomy. Admission is grounded (audit PASS pending 2nd reviewer; 4 admission-criteria evidence cited in taxonomy doc). Documentation is complete (310 lines at `docs/intuit.md` with 13 sections + phased build plan A→B→C→D + integration patterns). No other admitted discipline is in the same state — Core disciplines are all implemented; Boundary disciplines have implementations (slated for archive but present); Cross-cutting has exactly one admitted slot, occupied by /intuit, with no implementation.

- **K2 Materialization is a real capability gap with unsettled classification.** The doc at `docs/materialization_lifecycle.md` explicitly frames it as the missing operation: "the missing operation is materialization: turning an accepted decision into concrete files under an explicit contract." But the doc characterizes it as a *lifecycle* (9 sequential steps from artifact request to retrospective learning) rather than a single-operation discipline. Whether it should be a discipline (and which category), a runner-shape (like MVL+), a protocol, or a new category is not settled — and the taxonomy doesn't admit it currently.

- **K3 The user's stated cannon doesn't match the canonical taxonomy.** User-listed cannon (from earlier inquiry): `explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique` (effectively 4 disciplines + 2 runners + 1 folder). Taxonomy-admitted: 5 Core + 1 Cross-cutting + 2 Boundary = 8 disciplines. The user's mental model likely treats "cannon" as "in-use" rather than "admitted." This is significant: when the user says "next discipline," they probably mean "next to realize / actualize," not "next to admit to taxonomy."

- **K4 The taxonomy's structure is grounded, not status-quo to challenge reflexively.** It carries a documented audit framework (4 admission-criteria with corpus-located evidence + two-reviewer pass), 15 rejected candidates with revival triggers, 3 future-register candidates with trigger conditions. This is worked-through architecture. Defending its frame is grounded reasoning, not Status Quo Bias.

- **K5 The Baldwin cycle (Predictive RC × Retrospective RC) needs /intuit.** Per `docs/intuit.md` and `docs/desc.md`, the project's strategic arc closes the Baldwin loop when Predictive RC (`/intuit`) interacts with Retrospective RC (post-hoc evaluation tied to `/reflect`). Building `/intuit` is half of that closure. Materialization is adjacent but doesn't close the Baldwin loop; it closes the finding-to-executable loop, a different gap.

- **K6 Build-readiness gradients differ sharply.** `/intuit` Phase A: spec complete; just needs `cognitive_harness/intuit/SKILL.md` + `references/intuit.md` written, plus follow-up structural and process inquiries to commit details. Materialization: structural inquiry needed first (which category? new category? sub-loop? protocol?) before any build. Nav v2 / reflect v2: redesign work in flight per prior context-blur inquiry's Next Actions.

### Structural Points

- **SP1** Three regions: canonical taxonomy / runtime inventory / named-but-unbuilt territories.
- **SP2** 8 admitted in taxonomy; 5 fully implemented; 2 implemented-but-redesigning (Boundary); 1 admitted-but-unbuilt (Cross-cutting /intuit).
- **SP3** 6 candidate dimensions from exploration: A unbuilt-admitted / B redesigns / C future-register / D materialization / E novel / F architecture-gaps.
- **SP4** The Baldwin cycle is the load-bearing project arc.

### Foundational Principles

- **P1** Cannon-fit on the canonical taxonomy is the highest-confidence path (admitted ∧ documented ∧ specified → just build it).
- **P2** Capability leverage matters but is unbounded — many things have high leverage; criterion-weighting must consider readiness AND fit AND phase.
- **P3** Build readiness is load-bearing: a candidate with complete spec is committed-to; one without isn't.
- **P4** Dev-phase appropriate: the next discipline should fit current calibration state, not require thresholds not yet reached.
- **P5** User-judgment is the determination mechanism; inquiry produces ranked recommendation, not unilateral commitment.

### Meaning-Nodes

- **MN1** "Discipline" — contested multi-value term (cognitive-op admitted vs capability vs runner vs protocol).
- **MN2** "Next" — contested criterion (lowest-friction / highest-leverage / in-flight).
- **MN3** "/intuit" — unique admitted-unbuilt candidate.
- **MN4** "Materialization" — highest-leverage capability gap, classification uncertain.
- **MN5** "Cannon" — disputed (user-stated 5-ish vs taxonomy-admitted 8).

---

## SV2 — Anchor-Informed Understanding

The question decomposes into three coupled sub-questions:

1. **What does "discipline" mean in the user's question?** — frame commitment (admitted-cannon-position vs capability vs in-flight).
2. **What does "next" mean?** — criterion weighting (lowest-friction / highest-leverage / readiness / strategic-fit).
3. **Given frame + criterion, which candidate wins?** — answer follows mechanically once 1+2 are settled.

The dominant criterion is **structural readiness within the canonical taxonomy**: a candidate that's admitted, documented, and unbuilt is the structurally next-to-realize. `/intuit` uniquely satisfies this. Materialization is highest-leverage but requires upstream classification work. Nav/reflect v2 are engineering, not new admissions.

---

## Phase 2 — Perspective Checking

### Technical / Logical

`/intuit` is closest to ready. Spec exists (310 lines, 13 sections); audit done; integration patterns specified. Technical work is mostly transcription of `docs/intuit.md` into discipline-file shape, plus follow-up structural and process inquiries to fine-tune.

Materialization needs structural decision first. The 9-step lifecycle could become: (a) a new category in the taxonomy, (b) a sub-loop runner like MVL+, (c) a protocol with internal disciplines, or (d) classified into existing categories. Each path is a separate architectural commitment.

**T1:** `/intuit` is the lowest-engineering-cost path with the most documented runway.

### Human / User

User's stated cannon (5-ish) is smaller than taxonomy-admitted (8). The most likely interpretation: user treats "cannon" as "actually invoked" rather than "admitted in taxonomy." If they viewed `/intuit` as cannon-by-admission, they wouldn't ask about it as "next." If they view it as outside cannon because not implemented, then implementing it IS the answer to "next discipline."

**U1:** The user's question implicitly distinguishes admitted from implemented. "Next discipline" likely means "next to realize."

### Strategic / Long-term

The project's strategic arc per `docs/desc.md`: autonomous-consciousness goal; multi-head loops; Baldwin cycle; cross-run cognitive steering. The Predictive RC (real-time hunch layer) IS `/intuit` per project framing. The Retrospective RC needs `/reflect` (Boundary, currently dormant) plus outcome measurement infrastructure.

`/intuit` is the next-component of the Baldwin cycle. Building it activates Predictive RC, which is foundation for half of the Baldwin loop.

Materialization is strategically valuable but for a different arc (finding → executable → real-world impact), not the Baldwin / consciousness-gradient arc.

**S1:** `/intuit` closes a strategic gap (Predictive RC); materialization closes a different gap (theory → action).

### Risk / Failure

**`/intuit` risks:**
- Adding invocation surface without calibration infrastructure ready (calibration is Phase B+, gated on N ≥ 15-30).
- Phase A may produce hunches with no reliable feedback mechanism until Retrospective RC matures.
- *Mitigation:* Phase A explicitly defers calibration; output schema includes reliability scores; honest-limits section in /intuit spec acknowledges this.

**Materialization risks:**
- Classification commitment without architectural clarity → discipline-with-no-good-home; potential drift.
- Large-scope build (9-step lifecycle requires multiple sub-disciplines).
- *Mitigation:* upstream classification inquiry first.

**Nav/reflect v2 risks:**
- Replacement work that hasn't been adversarially tested.
- Current implementations slated for archive; redesigns mid-flight.
- *Mitigation:* incremental — the archive-and-rebuild pattern is bounded.

**R1:** /intuit has documented risks with structural mitigations; materialization has architectural risks needing a separate inquiry; v2 work has replacement risks but is bounded.

### Resource / Feasibility

`/intuit` Phase A: ~2-3 inquiries to ship (structural spec + process spec + integration testing). Documented build plan exists.

Materialization: ~4-6 inquiries to ship (classification decision + per-step disciplines + lifecycle integration with MVL+ + testing).

Nav v2 / reflect v2: ~2 inquiries each.

**F1:** /intuit has the lowest build cost given documentation maturity.

### Ethical / Systemic

N/A specifically. Systemic dimension covered under Strategic.

### Definitional / Internal Consistency

Test the verdict "build /intuit next" against the strongest anchor: the canonical taxonomy. /intuit is admitted as Cross-cutting; admission alone is structurally sufficient.

Test the verdict "build materialization next" against the same anchor: materialization is NOT admitted in the canonical taxonomy. The taxonomy doc's 15 rejected candidates list includes "Consolidation" but not materialization specifically. Adding materialization requires either fitting it into an existing category (which the lifecycle doc says is hard) or proposing a 5th category. That's a taxonomy-evolution decision, not a direct admission.

**IC1:** /intuit is internal-consistency aligned with the taxonomy; materialization requires taxonomy-evolution work first.

### Definitional / Frame-exit Completeness

**Gating predicate check:**
- (i) Inherited multi-value terms? — YES: "discipline" and "next" are both multi-value across exploration's candidate-dimension table.
- (ii) Used across ≥2 distinct values within inquiry's committed structures? — YES: exploration's 6 candidate-dimension rows assert distinct propositions about what counts as "discipline" and "next."

**Gating fires.** Applying 4 meta-categories:

**1. Existence Enumeration.** What does "discipline" refer to project-wide?
- **TYPE axis:** cognitive-operation discipline (admitted in taxonomy); capability (materialization); runner (MVL/MVL+/meta-loop); protocol (CONCLUDE/BRANCH_INQUIRY). Four TYPE values, not one.
- **LAYER axis:** documented-admitted vs implemented-in-cognitive_harness vs registered-in-runtime. Three layers.
- **PHASE axis:** ship-ready (/intuit), structure-uncertain (materialization), redesign-pending (nav/reflect).
- **AGENT axis:** user's mental model vs taxonomy's structural model.

Inquiry's frame primarily addresses cognitive-operation disciplines admitted in taxonomy. Materialization is at the boundary — documented but not admitted.

**2. Role Assessment.**
- Materialization plays a CAPABILITY-CLOSING role at the post-finding layer. Its exclusion from "discipline" classification is contingent on a future taxonomy-evolution decision. Re-locate: materialization is a capability-pending-classification, not a current-discipline-not-yet-built.
- Future-register candidates (Consolidation, Parallel-MVL, Level-3 intuition-space) are explicitly trigger-deferred. Their exclusion from immediate "next" is structurally justified by the taxonomy's trigger mechanism.
- Nav v2 / reflect v2 plays a REPLACEMENT role for in-flight engineering. Their classification as "next discipline" depends on whether replacement work counts as new admission (it doesn't, per strict reading).

**3. Verdict Rigor.** Test the "build /intuit next" verdict against counter:
- *Counter:* Materialization is more leverage-positive — closes a real workflow gap that affects every project artifact.
- *Counter's weight:* Real. But leverage is unbounded; many capabilities have high leverage. Build-readiness, taxonomy-fit, phase-alignment, and "what does this inquiry's deliverable look like" all matter.
- *Counter-counter:* /intuit's spec is complete; materialization's classification is open. Building /intuit means committing to a deliverable; building materialization means committing to a structural inquiry FIRST. On all-criteria-weighted: /intuit primary; materialization strong alternate.

**4. Residual / Coverage Justification.**
Any frame-exit concern not captured? — YES: the inquiry's recommendation may be over-narrow if framed as "single next." A roadmap of 3-5 disciplines might be more useful. BUT: user asked "next" (singular); scope-fidelity defers roadmap to a separate inquiry. Surface this in finding's Open Questions.

**Frame-exit anchors:**
- **FE1** Three TYPE-axis profiles for "discipline" (admitted-cognitive-op / capability-unclassified / runner-or-protocol). This inquiry primarily addresses the first.
- **FE2** Three LAYER-axis statuses; /intuit is at layer 1 (documented-admitted), materialization at sub-layer 1 (documented but not admitted), nav/reflect at all three layers but in redesign.
- **FE3** PHASE-axis favors documented + ready-to-ship over architecturally-open.

### Phase / Calibration-State (required)

**Calibration the project has:**
- Rigorous taxonomy with audit framework.
- `/intuit` Phase A spec complete; integration patterns specified.
- Recent inquiries focused on cannon cleanup (rename, context-blur, safety substrate) — suggests user is positioned to add a new discipline now.

**Calibration NOT yet:**
- `/intuit` Phase B+ requires N ≥ 15 calibration runs.
- Materialization classification not decided.
- Future-register candidates need operational thresholds (parallel-inquiry rate, Level 3 autonomy, /intuit Phase D+).

**Early-stage default:** pick the candidate whose Phase A is documented and ready. /intuit uniquely fits.

**PC1:** Current project state strongly favors /intuit. Materialization is "after the structural decision" work. Future-register candidates are "after calibration thresholds" work.

### Self-Reference Blindness check

External grounding sources used by this sensemaking:
- Canonical taxonomy doc (`docs/discipline_taxonomy.md`) — observable artifact.
- /intuit spec (`docs/intuit.md`) — observable artifact.
- Materialization lifecycle doc — observable artifact.
- Runtime ls output — observable evidence of unbuilt status.

Multi-source grounding. Not pure self-reference. ✓

---

## SV3 — Multi-Perspective Understanding

Major shifts from SV2:

1. **`/intuit` is structurally singular** as the unique admitted-but-unbuilt cannon discipline. Strict cannon-fit frame yields it directly.
2. **Materialization is the highest-leverage alternate** but requires upstream taxonomy-classification work.
3. **Nav/reflect v2 are engineering, not admission.** Excluded from strict-cannon-fit reading.
4. **Phase-fit favors /intuit.** Documented + audit-passed + Phase A spec-complete = ship-ready.
5. **Baldwin cycle dependence** is the strategic anchor: /intuit is half of Baldwin loop closure.
6. **User mental-model gap** (stated cannon 5 ≠ admitted 8) is real but doesn't change the answer — most likely user means "next to realize."

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What is "next discipline"?

**Strongest counter-interpretation:** "Next" means "build whichever has the highest leverage" — favors materialization (closes a much bigger gap).

**Why counter fails (structural grounds):**
Leverage is real but unbounded as a criterion. The taxonomy provides a more grounded criterion: an admitted slot waiting to be filled is structurally next. /intuit uniquely occupies this position. Materialization's leverage claim is strong but cannot be cashed in until the taxonomy decides whether materialization IS a discipline (and which category) — that's a different inquiry. The current question is about the next discipline to build given the current taxonomy state.

The counter HAS structural merit: leverage matters. So /intuit isn't 100% confident as the unique answer; it's the highest-confidence answer under the strict-cannon-fit frame, with materialization as a strong alternate for the user who weights leverage differently.

**Confidence:** HIGH on "/intuit wins under strict cannon-fit frame"; MEDIUM on "this dominates all framings."

**Resolution:** "Next discipline" = the cognitive-operation discipline that the canonical taxonomy admits but lacks an implementation. /intuit uniquely fits. Materialization is a leverage-weighted alternate; nav/reflect v2 are engineering-not-admission.

**What is fixed:** /intuit is the primary recommendation under the dominant frame.
**What is no longer allowed:** Framing materialization as the strict-cannon-fit answer without first settling its taxonomy classification.

### Ambiguity 2: Does the user's mental model of "discipline" match the taxonomy?

**Strongest counter-interpretation:** The user might not know about the canonical taxonomy or might disagree with it. Their stated cannon (5-ish) suggests they don't think the way the taxonomy doc thinks.

**Why counter fails (structural grounds):**
The taxonomy is in the project's own `docs/` folder; it was authored or commissioned by the user. Disagreement would have surfaced in prior inquiries. The user's stated cannon being smaller than admitted most likely reflects DIFFERENT MEANINGS of "cannon" (in-use vs admitted), not disagreement with the taxonomy itself.

**Confidence:** MEDIUM (can be definitively tested only by asking the user; the finding's Open Questions does this).

**Resolution:** Assume user's mental model is "admitted ≠ realized; next-to-realize ≠ already-cannon." Under this model, "next discipline" = next admitted-but-unrealized to actualize. /intuit uniquely fits. User can override in the finding's Open Questions if wrong.

**What is fixed:** The finding assumes this mental model; user override path is explicit.

### Ambiguity 3: Single recommendation or roadmap?

**Strongest counter-interpretation:** A roadmap (next 3-5 disciplines with ordering) would be more useful than a single pick.

**Why counter fails:**
User asked "next" (singular). Scope-fidelity respects the asked question. Roadmap is broader-scope adjacent work; if user wants it, follow-up inquiry. Surface "roadmap-framing-exists" in Open Questions, don't expand inquiry scope here.

**Confidence:** HIGH.

**Resolution:** Single primary recommendation (/intuit) + 1-2 alternates with conditional reasoning + explicit user-decision question. Roadmap deferred.

### Ambiguity 4: Is materialization a discipline or lifecycle/protocol/runner?

**Strongest counter-interpretation:** Materialization could be a single-operation cognitive discipline ("convert finding to executable").

**Why counter fails (structural grounds):**
The documented lifecycle has 9 distinct steps (artifact request → task description → implementation plan → dynamic critic → plan repair → implementation → validation → materialization trace → retrospective learning). Most steps overlap with existing disciplines (dynamic critic ≈ /td-critique; retrospective learning ≈ /reflect; implementation plan ≈ /decompose + /innovate). Materialization is more naturally a sub-loop / runner over disciplines (like MVL+ is a runner over the 5 Core disciplines), not a single discipline.

**Confidence:** MEDIUM — classification is what a separate inquiry would settle.

**Resolution:** Materialization is classified-uncertain. Defer to a follow-up architectural inquiry. NOT this inquiry's territory to resolve. Listed as alternate with this caveat.

**What is fixed:** Materialization is NOT the strict-cannon-fit answer in this inquiry. It IS in the finding's discussion as a strong alternate requiring upstream work.

### Ambiguity 5: Should the answer surface trade-offs or commit to a single answer?

**Strongest counter:** Surface trade-offs lets user override; single answer is too prescriptive.

**Why counter doesn't actually fail (resolution):**
Both can coexist. Surface a primary recommendation with explicit reasoning; surface 1-2 alternates with conditions under which they'd be picked. Explicit user-decision question.

**Confidence:** HIGH.

**Resolution:** Ranked top-2 or top-3 with reasoning. Primary: /intuit Phase A. Alternates: materialization (with classification-first caveat); nav/reflect v2 (with engineering-not-admission caveat).

### Ambiguity 6 — Load-bearing concept test on "next discipline"

**Test predicate:** Is "next discipline" the project's actual operating concept, or a loop-coined term?

**Counter:** The user might not think in "next discipline" terms; might think in "next milestone" or "next capability."

**Why counter fails:**
The user's actual phrasing was "what do you think is next discipline might be?" — this IS the user's language. Not loop-coined. The term is user-aligned.

**Confidence:** HIGH.

**Resolution:** Term is user-language-aligned.

---

## SV4 — Clarified Understanding

After 6 ambiguity collapses:

- **Primary recommendation:** `/intuit` Phase A (build the admitted-unbuilt Cross-cutting cannon discipline).
- **Alternate 1:** Materialization (after a separate taxonomy-classification inquiry resolves what kind of thing materialization is).
- **Alternate 2:** Nav v2 / reflect v2 (engineering refresh; not strict new admission per cannon-fit reading).
- **Frame:** Strict cannon-fit dominates; "next discipline" means "next admitted-cannon-position to realize."
- **Scope:** Single recommendation primary; alternates surfaced; roadmap deferred.
- **User-decision:** explicit in finding; user adjudicates.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- **F1** Primary recommendation: `/intuit` Phase A.
- **F2** Strict cannon-fit is the dominant frame.
- **F3** Materialization is alternate; requires structural-classification follow-up inquiry.
- **F4** Nav/reflect v2 are engineering, not new admission.
- **F5** Future-register candidates are not-yet-triggered; out of scope.
- **F6** Inquiry produces ranked recommendation, not roadmap.
- **F7** User adjudicates final choice (determination mechanism).

### Eliminated

- Building a new discipline not in taxonomy or future-register (too speculative; would require admission audit first).
- Roadmap of next 5 disciplines (out of inquiry scope; deferred).
- Refusing to recommend until materialization classification is settled (over-cautious; ignores /intuit's ready state).

### Remaining viable

- `/intuit` Phase A (primary recommendation)
- Materialization with structural-classification caveat (strong alternate)
- Nav v2 / reflect v2 with engineering-not-admission caveat (weak alternate)

---

## Phase 5 — Conceptual Stabilization

### Three Core Commits

- **COMMIT 1 — Strict cannon-fit frame wins.** "Next discipline" means "next admitted-cannon-position to realize per the canonical taxonomy." /intuit uniquely fits.

- **COMMIT 2 — Materialization is a strong alternate but requires upstream taxonomy-classification work.** It's a real capability gap with documented lifecycle, but not currently admitted as a discipline. Adding it is a structural-evolution decision separate from the "what to build next" decision.

- **COMMIT 3 — Nav v2 + reflect v2 are engineering refreshes, not new admissions.** They appear in the finding's Open Questions as adjacent in-flight work, not as candidates for "next discipline."

### Cross-cutting

- **X1 — User-language alignment.** Term "next discipline" is the user's actual phrasing; aligned.
- **X2 — Phase-fit.** Current project state is ready for /intuit; not yet ready for materialization or future-register.
- **X3 — User-judgment is final.** Inquiry produces ranked recommendation; user adjudicates.

### Decomposition Handoff

The conceptual model partitions into 5-6 pieces naturally:

- **P1 — Criteria specification.** What makes a candidate fit as "next discipline" — cannon-fit, documentation-readiness, phase-fit, leverage, build-cost.
- **P2 — Per-candidate elaboration.** Primary (/intuit) + alternates (materialization, nav/reflect-v2).
- **P3 — Recommendation packet.** Ranked top-2 or top-3 with conditional reasoning + user-decision question.
- **P4 — Build path for the primary.** What the next inquiries are after THIS finding — structural inquiry on /intuit Phase A spec; process inquiry on /intuit procedure; initial implementation.
- **P5 — Roadmap noted.** Adjacent inquiry frame for "next 3-5 disciplines" (out of scope for this inquiry; surface to OQ).
- **P6 — Cross-references.** To `docs/discipline_taxonomy.md`, `docs/intuit.md`, `docs/materialization_lifecycle.md`, prior inquiries.

5-6 pieces; tractable.

---

## SV6 — Stabilized Model

**The committed conceptual model:**

The next discipline is **`/intuit`** — the unique admitted-but-unbuilt cannon discipline per the canonical taxonomy at `docs/discipline_taxonomy.md`. The taxonomy admits `/intuit` as a Cross-cutting category member with audit PASS (pending 2nd reviewer). The discipline's spec is fully documented at `docs/intuit.md` (310 lines, 13 sections, 4-phase build plan A→B→C→D, integration patterns with `/innovate` and `/td-critique`). Building Phase A is the natural next move because: documentation is complete; the audit framework's 4 admission-criteria evidence is cited; no other admitted discipline is in a similar admitted-but-unbuilt state; and building `/intuit` activates the Predictive RC component of the project's strategic Baldwin cycle.

**Strong alternate: materialization** (the documented capability gap at `docs/materialization_lifecycle.md`). It closes the finding → executable artifact gap, which has higher per-inquiry leverage than `/intuit`. But materialization requires upstream taxonomy-classification work (the doc characterizes it as a 9-step lifecycle, not a single discipline; whether it should become a 5th category, a sub-loop runner, or fit into existing categories is itself an inquiry). Recommended only if the user weights capability-leverage strongly above structural-readiness AND is willing to invest in the classification inquiry first.

**Weak alternate: nav v2 / reflect v2 redesign.** These are admitted Boundary disciplines whose current implementations are slated for archive (per the recently-completed context-blur inquiry). The redesigns are engineering refreshes, not new admissions to the cannon. They appear in the finding's Open Questions as in-flight adjacent work.

The recommendation respects the canonical taxonomy's structure. Final choice is user-adjudication; the inquiry produces ranked options.

### Difference from SV1

| Axis | SV1 | SV6 |
|---|---|---|
| Frame | "what's next?" — open | Strict cannon-fit dominates; alternates classified |
| Primary | unknown | `/intuit` Phase A (unique admitted-unbuilt) |
| Alternates | unknown | Materialization (leverage; needs classification first); nav/reflect v2 (engineering) |
| User-mental-model gap | implicit | Surfaced and assumed-then-overridable in OQ |
| Criterion weighting | unstated | Build-readiness + taxonomy-fit + phase-fit (HIGH); leverage (MEDIUM); engineering-refresh (LOW) |
| Roadmap question | implicit | Deferred to a separate inquiry; surfaced as adjacent |

---

## Telemetry — Saturation Check

| Indicator | Status |
|---|---|
| Perspective saturation | ✓ — 9 perspectives applied; Frame-exit Completeness produced TYPE/LAYER/PHASE/AGENT axes |
| Ambiguity resolution ratio | 6/6 resolved; 0 OPEN |
| SV delta | SV1 (open question) → SV6 (ranked primary + alternates + caveats + dependency map) |
| Anchor diversity | All 5 anchor types represented; 9 perspectives |

### Failure-Mode Self-Check

| Failure mode | Status |
|---|---|
| Status Quo Bias | ✗ avoided — taxonomy IS the structural status quo but is grounded (audit framework + rejection criteria + revival triggers); defending its frame is justified, not bias. Tested in reverse: the user could be questioning the taxonomy; but their stated cannon mismatch is more plausibly different-meaning-of-cannon than disagreement-with-taxonomy. |
| Premature Stabilization | ✗ avoided — `/intuit` appeared early as the obvious answer, but 8 perspectives each produced distinct anchors (T1, U1, S1, R1, F1, IC1, FE1-3, PC1). Multi-perspective surprise. |
| Anchor Dominance | ✗ avoided — no single anchor dominates; multi-criterion support across perspectives. |
| Perspective Blindness | ✗ avoided — Frame-exit Completeness + Internal Consistency surfaced uncomfortable findings (materialization-as-strong-alternate; user-cannon mismatch). |
| Clean Resolution Trap | ✗ avoided — counter-arguments stated and rebutted on structural grounds. |
| Self-Reference Blindness | ✗ avoided — external grounding via canonical taxonomy doc + intuit.md + materialization lifecycle doc + runtime ls. |

### Self-Assessment

**PROCEED.** Conceptual model committed; ready for Decomposition. Frame-exit Completeness applied with all 4 meta-categories. Phase/Calibration-State applied as required. Status Quo Bias tested in both directions. Load-bearing concept test on "next discipline" passed (HIGH confidence on user-language alignment).
