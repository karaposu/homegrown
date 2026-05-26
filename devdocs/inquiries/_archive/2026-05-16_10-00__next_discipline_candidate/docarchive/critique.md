# Critique: Next Discipline Candidate

## User Input

Inquiry `_branch.md`. Input: innovation.md (3 candidates × 7 criteria; /intuit 6/7 PASS+1 MED; materialization FAILS CRITICAL C1; nav/reflect-v2 semantic-match weak; ranked top-3 with conditional reasoning; 4-step build path for /intuit Phase A; convergence STRONG on /intuit) + decomposition.md + sensemaking.md (strict cannon-fit frame dominant) + exploration.md. Phase 0 dimensions: 7 Innovation criteria + 3 project-specific risk (decidability, reversibility, honesty-on-tradeoffs). Multi-axis prosecution: dimension + specific-failure-case + spec-gap + user-perspective. Honest tests on /intuit being easy-vs-right pick, materialization soft-rescue framing, build-path completeness, user-cannon-vs-taxonomy gap.

---

## Phase 0 — Dimension Construction

| # | Dimension | Weight |
|---|---|---|
| **D1** | **Cannon-fit (canonical taxonomy)** | **CRITICAL** |
| **D2** | Build-readiness | HIGH |
| **D3** | Phase-fit | HIGH |
| **D4** | Strategic-leverage | MEDIUM |
| **D5** | Build-cost | LOW |
| **D6** | User-language alignment | MEDIUM |
| **D7** | Composability with cannon | MEDIUM |
| **D8** | Decidability of recommendation | MEDIUM |
| **D9** | Reversibility | MEDIUM |
| **D10** | **Honesty-on-tradeoffs** | HIGH |

10 dimensions. D1 + D10 are the load-bearing constraints; failing either is fatal regardless of other scores.

### Dimension validation

- Sensemaking-perspective cross-reference: all 9 perspectives have ≥1 corresponding critique dimension. ✓
- Project-specific risk dimension check: candidates involve project artifacts and architecture. D8 (decidability), D9 (reversibility), D10 (honesty) added per project-specific risk axis. ✓
- All dimensions discriminate (PASS vs PARTIAL vs FAIL produces non-trivial distinctions). ✓

---

## Phase 1 — Fitness Landscape

### Viable region

Cleanly satisfies D1 PASS + D10 PASS + most of D2-D9.

Only `/intuit` Phase A inhabits this region.

### Boundary region

Candidates with FAIL or PARTIAL on a CRITICAL or HIGH dimension, with strong compensating scores:

- **Materialization** — FAIL on D1 (CRITICAL: not admitted in taxonomy), PARTIAL on D2 (no discipline-shape spec), HIGH cost on D5. Compensates on D4 (highest strategic-leverage).
- **Nav v2 / reflect v2** — PARTIAL on D2 (current implementations slated for archive), PARTIAL on D4 (refresh not new-arc). Semantic match with "next NEW discipline" weak.

### Dead region

Any candidate that:
- FAILS D1 under strict frame AND lacks the alternate-frame defense.
- FAILS D10 (recommendation that's not honest about its trade-offs).

Pre-filtered candidates (future-register; genuinely-new untaxonomized; merges; rename-only) are all in dead region per Innovation's disqualification list.

### Unexplored region

A "do nothing for now / wait until materialization classifies" option wasn't surfaced as a finalist. Implicitly, the project COULD pause discipline additions for a calibration cycle. But: this contradicts the user's question (which asked what's next), so it's correctly excluded.

---

## Phase 2 — Adversarial Evaluation

### Candidate 1: `/intuit` Phase A (recommended primary)

#### Prosecution

- **P-1 (D4 — easy-vs-right pick):** "/intuit is the EASY pick: high readiness but only MEDIUM leverage. The user asked 'what do you think is next?' — a meta-strategic question implying strategic-impact concern. Recommending the lowest-friction option may dodge the harder question of where the project really needs to go."

- **P-2 (specific-failure: calibration risk):** "What if /intuit Phase A is built but never reaches the N ≥ 15 calibration threshold needed for Phase B? Then Phase A produces hunches with no calibration signal, and Phase B+ never matures. The whole multi-phase build is wasted if calibration data doesn't accumulate."

- **P-3 (specific-failure: hidden coupling):** "What if building /intuit reveals coupling with materialization (the /reflect-with-calibration mechanism needs Retrospective RC signals; materialization may be the source)? Then this 'isolated next-discipline' framing was over-narrow; the next inquiry should have been the joint-architecture inquiry."

- **P-4 (user-perspective):** "The user said 'next DISCIPLINE' but their stated cannon (5-ish) omits /intuit AND the taxonomy. Are we answering their actual question, or the question we think the taxonomy implies? If the user's mental model of 'discipline' doesn't include admitted-unbuilt items, recommending /intuit is responsive to a different question."

- **P-5 (D10 honesty):** "Innovation's claim that /intuit is 'highest cannon-fit + readiness' is true but elides that it's MEDIUM leverage. Is the recommendation honest about this tradeoff?"

#### Defense

- **D-1 (against P-1):** Leverage is unbounded as a criterion — many disciplines have high leverage. The taxonomy's grounded criteria (admitted + documented + audit-passed + integration-patterns-specified) point to /intuit as the structurally next-to-realize. Building /intuit doesn't preclude materialization later — materialization is on an independent track. "Easy pick" is also "high-confidence pick" when readiness is documented and architectural commitment is bounded.

- **D-2 (against P-2):** Calibration risk is documented in the spec itself — Phase A explicitly defers calibration to Phase B+. Phase A produces standalone value: real-time hunches with explicit reliability scores + evidence-linked invocation traces. The Phase B gate uses calibration data accumulated from Phase A operation; if it doesn't accumulate, the gate prevents premature Phase B build. The build is gated, not blind.

- **D-3 (against P-3):** Hidden-coupling risk is real but bounded by the spec at `docs/intuit.md` — it documents integration patterns with `/innovate`, `/td-critique`, and `/MVL+` pipeline-early. If unanticipated coupling emerges, the project handles it via a follow-up SIC-loop on the coupling. Pre-emptively expanding scope to "what if coupling?" is over-engineering for the current question.

- **D-4 (against P-4):** User-perspective objection has weight. The user's stated cannon omits taxonomy-admitted disciplines, which is structurally captured in Innovation's P5 (user-cannon-vs-taxonomy gap clarification). The finding surfaces this explicitly — the user can override if their actual question was different. The recommendation respects both the documented taxonomy AND the user's adjudication path. The canonical taxonomy doc is in the project's own `docs/` folder (authored or commissioned by user); disagreement with it would be itself a flagged signal, which the finding's user-cannon clarification addresses.

- **D-5 (against P-5):** Innovation explicitly states /intuit is "medium leverage compared to materialization (which has higher per-inquiry leverage)." The per-candidate reasoning paragraph for /intuit notes "medium leverage." The honesty test is satisfied — the recommendation states the trade-off, doesn't hide it.

#### Collision

Defense survives all 5 prosecution lines. **P-4 (user-perspective) is the strongest residual:** the inquiry recommends a discipline the user's stated cannon doesn't name. Mitigation is structural — the user-cannon-vs-taxonomy gap clarification in P5 surfaces this; the user can override. The recommendation isn't imposing a verdict; it's surfacing the taxonomy's structurally-implied next-to-realize while preserving user adjudication.

**Verdict: SURVIVE-PRIMARY** with user-perspective caveat noted.

---

### Candidate 2: Materialization

#### Prosecution

- **P-6 (D1 CRITICAL fail):** "FAILS the critical dimension under strict reading. Per verdict framework, FAIL on CRITICAL = KILL or REFINE, not SURVIVE. Listing materialization as 'strong alternate' is a soft-failure rescue."

- **P-7 (D2 build-readiness):** "No discipline-shape spec exists. The lifecycle doc has 9 steps but doesn't enumerate which steps become disciplines vs sub-tasks. Build-readiness is genuinely PARTIAL, not just MEDIUM."

- **P-8 (D5 build-cost):** "4-6 follow-up inquiries means high cost; this isn't a Phase A build, it's an architectural expansion. The cost is qualitatively different from /intuit's bounded build."

- **P-9 (D9 reversibility):** "Once materialization is built (as new category or sub-loop), reversing is structural work — harder than reversing /intuit (which is one discipline that could be removed cleanly)."

#### Defense

- **D-6 (against P-6):** The FAIL on D1 is contingent on the strict-cannon-fit frame. The inquiry's framing in Sensemaking explicitly tested both strict and capability-leverage frames. Under strict reading, materialization fails; under capability-leverage reading, it dominates on D4. Listing as CONDITIONAL alternate ("right pick when user redirects scope") is the honest representation of this frame-dependence — NOT a soft rescue. It's a framing-aware verdict that respects the user's right to adjudicate which frame applies.

- **D-7 (against P-7):** Build-readiness is genuinely lower than /intuit's — Innovation marked this PARTIAL and noted the classification inquiry as upstream prerequisite. No misrepresentation.

- **D-8 (against P-8):** Build-cost is genuinely higher — Innovation marked HIGH cost and called out 5-8 total inquiries. No misrepresentation; the cost-vs-leverage trade-off is honest.

- **D-9 (against P-9):** Reversibility is harder for any architectural expansion (new categories are structural commitments). But /intuit's reversibility isn't perfectly clean either once integrated. The asymmetry is real but the conditional-alternate framing already accounts for it.

#### Collision

P-6 (D1 CRITICAL fail) is structurally load-bearing. The defense's strongest argument is the frame-dependence: under capability-leverage framing, materialization wins; under strict cannon-fit framing, it fails. The conditional-alternate framing is honest because it explicitly says: "right pick WHEN user weights capability-leverage AND is willing to redirect scope AND is willing to invest in classification inquiry first." Three conditions must hold; not all users meet all three.

**Verdict: REFINE-AS-CONDITIONAL-ALTERNATE.** Materialization is genuinely viable under a different frame; not viable under strict-cannon-fit. The framing is honest, not a soft rescue.

**Constructive output:** if the user picks materialization, the build-path is different — first run a taxonomy-classification inquiry (is materialization a new category, a sub-loop, a protocol, or fits existing?), then per-step disciplines, then integration with /MVL+ or a new runner.

---

### Candidate 3: Nav v2 / Reflect v2

#### Prosecution

- **P-10 (semantic match):** "The user asked for 'next DISCIPLINE.' Rebuilding admitted slots isn't a new admission. Semantic match between the question and this candidate is weak."

- **P-11 (D4 strategic-leverage):** "Refresh work doesn't activate a NEW project arc. Lower strategic novelty than /intuit (Predictive RC) or materialization (theory → action closure)."

- **P-12 (D6 user-language):** "The user's stated cannon omits nav and reflect. They may not consider these 'cannon' to refresh. Possibly these belong to _archive permanently per the prior context-blur inquiry's recommendation."

#### Defense

- **D-10 (against P-10):** Semantic match is weak — that's why Innovation positioned these as CONDITIONAL alternates with the "engineering not admission" caveat. Innovation didn't hide this.

- **D-11 (against P-11):** Refresh has structural value (completes Boundary category in implementation, not just in taxonomy). But the candidate accepts that this is structural-not-new-arc work.

- **D-12 (against P-12):** The prior context-blur inquiry recommended archiving these current implementations; the redesigns are explicitly the replacement work. User has authority to decide whether refresh = "next discipline."

#### Collision

P-10 (semantic match) is load-bearing. Nav/reflect v2 as "next DISCIPLINE" is genuinely stretched. The conditional-alternate framing is honest: right pick only if the user redirects scope from "next new discipline" to "next engineering work to focus on." Most users wouldn't redirect this way.

**Verdict: REFINE-AS-WEAK-CONDITIONAL-ALTERNATE.** Surfaced for completeness; lower priority than materialization in the conditional-alternate tier.

---

### Multi-axis checks on the response packet itself

#### Spec-gap probe — does the recommendation specify HOW the user adjudicates?

Innovation's P3 has:
- Top-3 ranked list with one-line operation-fit per candidate
- Conditional reasoning per rank ("right pick when ...")
- Explicit user-decision question
- Commitment scale per option

The user can map their priority (cannon-fit + readiness vs capability-leverage vs in-flight refresh) to a candidate via the "right pick when" framing. Adjudication path is structured.

**Verdict on spec-gap:** PASS. Decidability satisfied.

#### User-perspective objection — meta-strategic question vs packet response

The user asked: "what do you think is next discipline might be?" — phrased as inviting MY opinion. Does a ranked packet match this ask, or would a more opinionated single answer fit better?

Argument for single answer: "The user said 'what do you think.' They want my view, not a ranked list to adjudicate themselves."

Argument for ranked packet: "The user said 'might be.' That's hedged — inviting opinion while preserving their adjudication. The ranked packet primary IS my opinion (recommended primary = /intuit Phase A); alternates are transparency about the trade-offs they should know."

The ranked packet correctly handles this: the PRIMARY is the opinionated single answer (/intuit), and the alternates surface what the user should know about trade-offs. The user can read just the primary if they want a one-line answer; they can deliberate on alternates if they want.

**Verdict on response format:** SURVIVE.

#### Build-path completeness probe

Innovation's P4 has 4 steps:
1. Structural inquiry on /intuit Phase A spec
2. Process inquiry on /intuit Phase A procedure
3. Initial implementation testing
4. Calibration threshold gate established

Plus dependencies (audit 2nd reviewer + td-critique rename impact).

Hidden inquiries we might have missed:
- Integration testing with /innovate and /td-critique (covered in Step 3 partially, but not as a distinct inquiry)
- Documenting /intuit in the user's auto-memory (not in build path; small task)
- Updating discipline_taxonomy.md to note /intuit's implementation status changes from "admitted-unbuilt" to "Phase A shipped" (not in build path; small task)

The 4 main inquiries are right. Some small follow-up tasks (memory update, taxonomy update) could be MUST items in the eventual /intuit build inquiries.

**Verdict on build-path completeness:** PASS with note that small post-build tasks (memory + taxonomy update) should be captured in the structural or process inquiries' Next Actions.

---

## Phase 3 — Verdicts (Summary Table)

| Candidate | Verdict | Position | Constructive output |
|---|---|---|---|
| **`/intuit` Phase A** | **SURVIVE-PRIMARY** | Viable region | Recommended primary; user-perspective caveat noted; carry forward to finding |
| **Materialization** | **REFINE-AS-CONDITIONAL-ALTERNATE** | Boundary (CRITICAL fail under strict frame; valid under capability-leverage frame) | Right pick under specific user-priority weighting AND scope redirect; build-path requires upstream classification inquiry |
| **Nav v2 / Reflect v2** | **REFINE-AS-WEAK-CONDITIONAL-ALTERNATE** | Boundary (semantic-match weak) | Right pick only if user redirects scope to "next engineering work" rather than "next new discipline" |
| Response format (ranked packet) | SURVIVE | — | Primary opinion + transparent trade-offs; respects user adjudication |
| Build-path (P4) | SURVIVE with note | — | Small post-build tasks (memory + taxonomy update) should be captured in the structural/process follow-up inquiries |

### Constructive outputs for the finding

- **Recommended primary:** `/intuit` Phase A (admitted-but-unbuilt cannon discipline; spec complete; activates Predictive RC of Baldwin cycle)
- **Conditional alternate 1:** Materialization (highest leverage; requires upstream classification)
- **Conditional alternate 2:** Nav v2 / Reflect v2 (in-flight engineering refresh)
- **Caveats for Open Questions:**
  - User-cannon-vs-taxonomy gap: user's stated cannon omits `/intuit`; the recommendation surfaces this so user can override if intent was different
  - Calibration uncertainty for Phase B+: well-flagged in Phase A spec but worth carrying forward
  - Memory + taxonomy update tasks for after Phase A ships
- **Re-ranking:** Critique confirms Innovation's ranking. No reordering.

---

## Phase 3.5 — Assembly Check

The naming choice is singular — user picks one. Standard "combine into emergent architecture" doesn't apply directly.

But: **parallel-track variant.** Could the user build `/intuit` Phase A WHILE running a materialization classification inquiry in parallel?

Adversarial test:
- *Pro:* both tracks progress; reversible. Independent track per Innovation's P4 dependencies note.
- *Con:* split attention; the project may not have capacity for parallel inquiry tracks; the user's current pattern is sequential inquiries.

**Verdict on parallel-track:** NOT-A-COMPOUND-CANDIDATE (it's not a different recommendation, it's an execution pattern). Note as Open Question — user can opt for sequential or parallel.

No emergent compound candidate beats `/intuit` Phase A as primary. The packet is the local optimum.

---

## Phase 4 — Coverage + Convergence

### Coverage Map

**Per-candidate:** All 3 candidates evaluated against all 10 dimensions. ✓
**Per-prosecution-axis:** 4 axes applied (dimension-level / specific-failure-case / spec-gap / user-perspective). 12 prosecution lines total. ✓
**Per-solution-space:** Viable region (/intuit) + boundary region (materialization, nav/reflect v2) + dead region (pre-filtered) + unexplored region (do-nothing/pause; excluded by question framing). ✓

### Convergence Assessment

| Criterion | Status |
|---|---|
| Clean SURVIVE-as-primary | ✓ `/intuit` Phase A; user-perspective caveat is non-critical |
| Landscape stable | ✓ Assembly check produced no new compound candidate |
| No unexplored region likely productive | ✓ "do nothing" is excluded by user's framing |
| 4-mechanism convergence on primary | ✓ (taxonomy + readiness + Baldwin-cycle + Domain-Transfer all converge on /intuit) |

All convergence criteria met.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Wrong Dimensions | ✗ avoided — dimensions extracted from sensemaking + Innovation criteria + project-specific risk axes |
| 2. Rubber-stamping | ✗ avoided — 12 prosecution lines; multi-axis depth |
| 3. Nitpicking | ✗ avoided — defense applied per candidate; severity-weighted dimensions |
| 4. Dimension Blindness | ✗ avoided — D8 (decidability), D9 (reversibility), D10 (honesty) added |
| 5. False Convergence | ✗ avoided — clean SURVIVE-PRIMARY exists; multi-mechanism convergence validated |
| 6. Evaluation Drift | ✗ avoided — single iteration; dimensions fixed in Phase 0 |
| 7. Self-Reference Collapse | ✗ avoided — external grounding via canonical taxonomy doc + intuit.md + materialization lifecycle doc + runtime ls |

---

## Signal

**TERMINATE with ranked survivors.**

- **Primary survivor:** `/intuit` Phase A — viable region center; all critical dimensions PASS; multi-mechanism convergence validated.
- **Conditional alternate 1:** Materialization — boundary (CRITICAL-fail under strict frame; valid under capability-leverage frame).
- **Conditional alternate 2:** Nav v2 / Reflect v2 — boundary (semantic-match weak).

**Killed-by-pre-filtering:** future-register candidates (consolidation, parallel-MVL, Level-3 intuition-space — triggers not met); genuinely-new untaxonomized candidates; merges; rename-only changes.

### Convergence Telemetry

- Dimension coverage: 10/10
- Adversarial strength: STRONG (12 prosecution lines; multi-axis depth)
- Landscape stability: STABLE (no new regions in assembly check)
- Clean SURVIVE: YES (`/intuit` Phase A; non-critical user-perspective caveat)
- Failure modes observed: NONE
- **Overall: PROCEED**

### Constructive Outputs to Finding

**Next Actions MUST:**
- User adjudicates among the 4 options (primary + 3 alternates including "other")
- If `/intuit`: execute the 4-step build path (P4)

**Open Questions:**
- User-cannon-vs-taxonomy gap: clarify the user's intended scope of "cannon"
- Calibration uncertainty for `/intuit` Phase B+: well-flagged in spec; carry forward
- Parallel-track option: should `/intuit` Phase A and materialization classification run in parallel?
- Adjacent: memory-hygiene observation (enes/→docs/) + small post-build tasks (memory + taxonomy update)

**Reasoning section:**
- Why `/intuit` Phase A primary: unique admitted-but-unbuilt; spec complete; Baldwin cycle activation
- Why materialization conditional-alternate: highest leverage but FAILS strict cannon-fit; classification inquiry needed first
- Why nav/reflect v2 weakest alternate: refresh not new admission; semantic-match weak
- Why pre-filtered candidates killed: trigger conditions / admission criteria / overlap

The finding's primary recommendation is `/intuit` Phase A. Alternates are surfaced for users who weight criteria differently or redirect scope.
