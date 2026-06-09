## User Input

devdocs/inquiries/2026-06-04_17-46__task_define_confidence_rubric/_branch.md

(Structural refinement to Task-Define §4.7. Production-task mode: seed = 2 pieces (P1 Rubric Definitions + P2 Cross-Verdict Note) with 15 verification criteria + exact text amendments.)

---

# Innovation — §4.7 Confidence Rubric

## Phase 1: Seed

### Methodology-Mode Consideration

- **Inherited mode:** Standard default.
- **Alternative:** Contrarian-rethink — would re-litigate sensemaking A1 (D1 alone vs D1+D3 combined) and A2 (wording form), both adjudicated at HIGH confidence on structural grounds.
- **Decision: Methodology-mode-alternative-marked-inapplicable.** **Structural reason:** sensemaking A1 explicitly tested D1-only as counter-interpretation and rejected on loss-of-user-intent (user's "internally coherent AND no boundary approached" pairing). A2 explicitly tested T1 (verbatim) and T3 (count-only) and rejected on cross-verdict-applicability gap + lost subjective axis. Contrarian-rethink would invert these structurally-grounded adjudications. **Contextual reason:** sensemaking.md A1-A2 named each alternative + rejected on structural grounds; Layer Commitment in `_branch.md` declares meaning + process layers settled.

### Meta-decision-piece classification

| Piece | Property fires | Classification |
|---|---|---|
| **P1** | (b) Framing-semantic; (c) Lesson-vocabulary; **(v) Intervention-shape: ADD-CONTENT** | Meta-decision (property v fires) |
| **P2** | (b) Framing-semantic; **(v) Intervention-shape: ADD-CONTENT** | Meta-decision (property v fires) |

Both pieces require Intervention-Shape-Axis Inversion.

---

## Phase 2: Generate

### P1 — Rubric Definitions

**Principal candidate (sensemaking A1+A2 exact text):**

> *Confidence rubric:*
> - **HIGH** — no LAYER 1 mode boundary (§4.2) was approached during the invocation, and each operation's output was internally coherent without close calls. The verdict reflects a clean run.
> - **MED** — one LAYER 1 mode boundary was approached but did not fire, or one operation's output had an observable close call that did not propagate to a mode boundary. The verdict reflects one friction point.
> - **LOW** — multiple LAYER 1 mode boundaries were approached, or one was very near firing, or multiple operations had close calls. The verdict reflects compound friction.

#### Mechanism 1 — Domain Transfer (Generator)

Source: sister-discipline confidence rubrics.

- **Generic:** Surfacing's per-item relevance-confidence (§2.3) ties confidence to match strength against purpose template; applies asymmetric-failure default for LOW. Pattern transfers: Task-Define ties confidence to friction observation; asymmetric-failure handles uncertain cases via §4.4.
- **Focused:** Sensemaking's ambiguity-collapse HIGH (evidence demands) vs LOW (elegant but counter merit). Pattern transfers: Task-Define HIGH = no boundary friction; LOW = compound friction. Same structural-grounds-based gradient.
- **Contrarian:** Import surfacing's typed `{source, value}` shape directly. **Rejected:** Task-Define's substrate is LLM-judgment text; typed shape would push perception → action.

Source-domain selection guard: surfacing + sensemaking are project-native sibling Core disciplines. PASS.

#### Mechanism 2 — Combination (Generator)

- **Generic:** LAYER 1 mode boundary proximity (objective) + per-operation output coherence (subjective) → 2-axis combined discriminator. Neither alone sufficient (D1-only loses subjective friction; D3-only too soft).
- **Focused:** Count axis (0/1/multiple) + severity axis (approached / very near firing) → ordered gradient HIGH/MED/LOW. Two sub-dimensions of the primary axis combine.
- **Contrarian:** Combine LAYER 1 + LAYER 2 proximity. **Rejected:** LAYER 2 is audit-over-time, not per-invocation observable; combining breaks §4.1 framework.

#### Mechanism 3 — Piece-Level Inversion (Intervention-Shape-Axis)

- **X (committed):** ADD-CONTENT — append rubric sub-block to §4.7.
- **Y (alternative shape):** **REPAIR** — modify §4.7's existing verdict-shape commitment paragraph to inline the rubric (e.g., expand "Confidence (HIGH / MED / LOW, reflecting the LLM's judgment about the strength of the verdict)" to include the 3 definitions inline).
- **What follows under Y:** the verdict-shape paragraph becomes longer; rubric is inseparable from the verdict-shape commitment.
- **Costs:** (i) verdict-shape paragraph + rubric flatten into one block; (ii) reader scanning verdict shape sees rubric interleaved; (iii) breaks the clean-section-structure §4.7 currently has.
- **Verdict:** **X (ADD-CONTENT) preferred** with HIGH confidence. Y collapses two structural units that serve different purposes.

### P2 — Cross-Verdict Applicability Note

**Principal candidate (sensemaking A2 exact text):**

> *The rubric applies to all three verdicts (PROCEED, FLAG, RE-RUN); confidence and verdict are independently determined. Common combinations include HIGH-confidence-PROCEED (clean run; output ready for downstream consumption), MED-confidence-FLAG (one boundary approached and one fired; downstream review warranted), and LOW-confidence-RE-RUN (structural failure; low confidence in any verdict claim about the malformed invocation). Less-common-but-valid combinations include LOW-confidence-PROCEED (process succeeded but the LLM perceives compound internal friction) and HIGH-confidence-FLAG (very confident the flagged condition actually exists).*

#### Mechanism 1 — Constraint Manipulation (Framer)

**Both-direction-mandatory:**

- **ADD-direction (generic):** ADD constraint "all 9 combinations explicitly allowed" → prevents accidental default-locking.
- **ADD-direction (focused):** ADD constraint "name common + less-common-valid combinations to guide application" → balances allowing all with offering guidance.
- **ADD-direction (contrarian):** ADD constraint "list ALL 9 combinations with examples" → over-specifies; bloats note.
- **REMOVE-direction (generic):** REMOVE the cross-verdict note entirely → P2 becomes DO-NOTHING.
- **REMOVE-direction (focused):** REMOVE the less-common combinations enumeration → leaves only common combinations; loses honest signaling of LOW-PROCEED / HIGH-FLAG validity.
- **REMOVE-direction (contrarian):** REMOVE the independence statement → confidence and verdict get implicitly coupled; bad framing.

#### Mechanism 2 — Absence Recognition (Generator)

**Both-levels-mandatory bidirectional:**

- **Patch-level (generic):** P2 doesn't address what happens when verdict and confidence are at odds at runtime — e.g., HIGH-RE-RUN seems contradictory. **Patch:** the independence statement + example (HIGH-FLAG: "very confident the flagged condition exists") covers this. Acceptable.
- **Patch-level (focused):** P2 doesn't give a per-combination reasoning for why each is common or rare. **Patch:** brief reasoning included in parentheticals ("clean run; output ready"). PASS.
- **Patch-level (contrarian):** P2 doesn't address how downstream consumers should weight LOW-confidence outputs. **Rejected:** runner-side concern, out of scope.
- **Redesign-level (missing direction):** if redesigned from scratch, would the note include a 3×3 matrix? **Rejected:** matrix is heavier than the paragraph; less readable in prose-style spec.
- **Redesign-level (present-in-different-form):** Surfacing's PROCEED/FLAG/RE-RUN at §4.7 + the per-item HIGH/MED/LOW relevance confidence at §2.3 together implicitly demonstrate verdict-confidence independence. The pattern is project-rooted; Task-Define's note makes explicit what surfacing leaves implicit.

#### Mechanism 3 — Piece-Level Inversion (Intervention-Shape-Axis)

- **X (committed):** ADD-CONTENT — append cross-verdict note to the sub-block.
- **Y (alternative shape):** **DO-NOTHING** — skip the cross-verdict note; let the rubric definitions stand alone; readers infer combinations.
- **What follows under Y:** sub-block contains only the 3-level rubric; ~2-3 lines shorter; readers must infer that all 9 combinations are valid from absence of constraint.
- **Costs:** (i) implicit allowance is fragile — a future reader might assume RE-RUN→LOW is required because no other combinations are documented; (ii) common combinations (HIGH-PROCEED etc.) aren't explicitly named, losing application guidance; (iii) the negative-spec from `_branch.md` lists "what would fail" includes vague rubric — a rubric without cross-verdict guidance leaves readers guessing.
- **Verdict:** **X (ADD-CONTENT) preferred** with MED-HIGH confidence. Y is leaner but loses guidance value. The cross-verdict note is small (~3 lines) and pays for itself by preventing implicit default-locking.

---

## Inherited Frame Audit

### Step (i) Seed-level assumption

"§4.7 amendment shape is sub-block addition (ADD-CONTENT) rather than amendment-in-place (REPAIR)."

### Step (iii) Challenge scan

| Assumption | Challenged? | By |
|---|---|---|
| Sub-block shape ADD-CONTENT | YES at piece level | P1 + P2 Intervention-Shape-Axis Inversion (REPAIR and DO-NOTHING tested) |
| LAYER 1 boundary as primary discriminator | YES (upstream A1) | Sensemaking A1 (D1-only counter) tested + rejected on loss-of-user-intent |
| Cross-verdict note included | YES at piece level | P2 Intervention-Shape-Axis Inversion (DO-NOTHING tested) |

All meta-decision commitments challenged.

### Step (iv)

**Audit DID NOT FIRE.** Every commitment challenged in the candidate set.

---

## Phase 3: Test

### P1 — Principal candidate

| Test | Verdict |
|---|---|
| Novelty | MED — project pattern; novel application to §4.7 |
| Scrutiny survival | PASS — Y (REPAIR) fails on flattening structural units; Combination contrarian (LAYER 2) fails on §4.1 framework |
| Fertility | HIGH — provides operational rubric; reusable pattern for sister disciplines |
| Actionability | HIGH — exact text drop-in |
| Mechanism independence | HIGH — Domain Transfer + Combination + Inversion converge from different upstream grounds |

**Disposition:** ACTIONABLE.

### P1 — Inversion candidate (REPAIR-existing-text)

| Test | Verdict |
|---|---|
| Novelty | LOW |
| Scrutiny | FAIL (flattens structural units) |
| Fertility | LOW |
| Actionability | LOW |

**Disposition:** Failed → not a survivor.

### P2 — Principal candidate

| Test | Verdict |
|---|---|
| Novelty | LOW-MED |
| Scrutiny survival | PASS — Y (DO-NOTHING) fails on implicit default-locking risk |
| Fertility | MED — guides application; prevents misuse |
| Actionability | HIGH — exact text drop-in |
| Mechanism independence | HIGH — Constraint Manipulation + Absence Recognition + Inversion converge |

**Disposition:** ACTIONABLE.

### P2 — Inversion candidate (DO-NOTHING)

| Test | Verdict |
|---|---|
| Novelty | LOW |
| Scrutiny | FAIL (implicit default-locking risk) |
| Fertility | LOW |
| Actionability | trivial |

**Disposition:** Failed → not a survivor.

### Per-row mechanism-trace

| Piece | Mechanisms | Trace | Verdict |
|---|---|---|---|
| P1 | Domain Transfer + Combination + Intervention-Shape Inversion | ✓ | PASS |
| P2 | Constraint Manipulation (both-direction) + Absence Recognition (bidirectional) + Intervention-Shape Inversion | ✓ | PASS |

### Axis coverage

Axes: discriminator dimension; wording form; cross-verdict applicability; placement; intervention shape. All addressed via principal + Inversion candidates.

### Mechanism Independence

P1's mechanisms (Domain Transfer + Combination + Inversion) from different grounds: sister-discipline precedent + first-principles axis composition + intervention-shape trade-offs. INDEPENDENT.
P2 similarly. INDEPENDENT.

### Artifact-grounding

Categorical claims:
- "Surfacing's relevance-confidence at §2.3" — verified in prior reads. PASS.
- "Sensemaking's ambiguity-collapse HIGH/LOW pattern" — verified. PASS.
- "§4.2 LAYER 1 mode list contains 6 modes" — verified. PASS.

### Assembly check

P1 + P2 → complete §4.7 sub-block: rubric definitions + cross-verdict note. Together they form an operational confidence rubric. Emergent value: reusable structural pattern (observable-signal-anchored confidence + cross-verdict applicability note) applies whenever a discipline needs a runtime confidence rubric.

---

## Mechanism Coverage Telemetry

### Standard

- **Generators:** 3/4 (Combination at P1; Absence Recognition at P2; Domain Transfer at P1).
- **Framers:** 2/3 (Constraint Manipulation at P2; Inversion at P1 + P2; Lens Shifting not separately applied — Domain Transfer's source-domain framing covered adjacent territory).
- **Total coverage:** 5/7 (Combination + Absence + Domain Transfer + Constraint Manipulation + Inversion). Acknowledged gap: Lens Shifting + Extrapolation not separately applied; Domain Transfer absorbed adjacent territory; Extrapolation's future-state framing didn't surface useful candidates for this Bootstrap-state rubric design.
- **Convergence:** YES — 3 mechanisms converge on each piece's principal.
- **Survivors tested:** 4/4.
- **Failure modes:** 0/6 critical.
- **Overall:** PROCEED (acceptable 5/7 coverage for a small refinement inquiry; convergence + independence intact).

### Production-task additional

- **Per-piece log:**
  - `P1: [Domain Transfer, Combination, Inversion:intervention-shape]`
  - `P2: [Constraint Manipulation (both-direction), Absence Recognition (bidirectional), Inversion:intervention-shape]`
- **Per-piece axis-distribution (property-v):**
  - `P1: [Inversion:intervention-shape] — axis = intervention-shape (X=ADD-CONTENT vs Y=REPAIR)`
  - `P2: [Inversion:intervention-shape] — axis = intervention-shape (X=ADD-CONTENT vs Y=DO-NOTHING)`
- **Meta-decision-piece classification:**
  - `P1: meta-decision (b + c + v)`
  - `P2: meta-decision (b + v)`
- **Piece-level Inversion compliance:**
  - `P1: satisfied (Y tested + rejected on structural flattening)`
  - `P2: satisfied (Y tested + rejected on implicit default-locking risk)`
  - 0 violations.

### Final → Critique handoff

2 ACTIONABLE candidates + 2 Inversion candidates tested + rejected. Ready for Critique.

---

## Manual Structural Check

- ✓ User Input
- ✓ Phase 1 — Methodology-Mode Consideration with override
- ✓ Meta-decision-piece classification
- ✓ Phase 2 — Generate per piece with mechanisms + Inversion
- ✓ Both-direction-mandatory Constraint Manipulation (P2)
- ✓ Both-levels-mandatory bidirectional Absence Recognition (P2)
- ✓ Source-domain selection guard Domain Transfer (P1)
- ✓ Intervention-Shape-Axis Inversion both property-v pieces (P1 + P2)
- ✓ Inherited Frame Audit DID NOT FIRE
- ✓ Phase 3 — 5-test cycle per candidate
- ✓ Per-row mechanism-trace
- ✓ Axis coverage
- ✓ Mechanism Independence INDEPENDENT
- ✓ Artifact-grounding 3 categorical claims verified
- ✓ Assembly check (reusable structural pattern emergent value)
- ✓ Mechanism Coverage Telemetry (standard + Production-task)
- ✓ 0 critical failure modes; PROCEED

**Manual structural check: PASS (16/16 + refinement notes + 0 failure modes + 2/2 Inversion compliance + PROCEED).**
