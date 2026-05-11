# Exploration: Design Sensemaking — Frame-exit Perspective Meta-Categories

## Mode & Entry Point

**Mode: hybrid (artifact + possibility).**
- Artifact phase: the two referenced findings + the current Sensemaking spec are the artifact territory. They establish what the perspective currently is, what it's already been refactored to (proposed), and what failure modes it must address.
- Possibility phase: the meta-category structures themselves are possibilities. I enumerate candidate decompositions of the Frame-exit Completeness perspective and assess coverage.

**Entry: signal-first.** The user provided a specific signal ("structure into meta-categories with full coverage"). The exploration probes that signal while scanning for any frame dimensions the meta-categories might miss.

---

## Cycle 1 — Coarse scan: the territory's major regions

The territory has three intersecting layers:

| Region | What's here | Confidence |
|---|---|---|
| **R1 — Current Sensemaking spec** (`homegrown/sense-making/references/sensemaking.md`) | The 7 Phase-2 perspectives, the failure-mode catalog (6 modes), and 4 existing refinement notes | Confirmed (read in full) |
| **R2 — Frame-exit Completeness draft** (from 03-07 finding) | The proposed sub-perspective with conjunctive gating predicate ("inherited multi-value terms in committed structures") + example | Confirmed (read in full) |
| **R3 — Failure mechanisms** (from 11-22 + 01-21 findings) | Instance 1 (Memory; not-fired); Instance 2 (warming; fired-but-shallow). Both produce frame-scope capture as outcome. | Confirmed |
| **R4 — Surface-level meta-category space** | Possible structures for decomposing the perspective into sub-checks | Scanned (this cycle) |
| **R5 — Coverage/narrowing risk** | The user's explicit constraint — categories must cover the perspective fully without narrowing | Signal flagged (next probe) |
| **R6 — Step-5 conformance** | The design produces a DRAFT; adoption deferral remains unchanged | Inferred (from prior findings) |
| **R7 — Surround layer / contextual frame** | The Sensemaking discipline's overall purpose (transforming ambiguity → understanding) + the Phase-2 perspective family's conventions (parenthesized gating, "ask:" predicate, failure-mode references) — the layer that gives meaning to any new meta-category structure | Scanned this cycle |

**Surround-layer scan (per the Coarse-Scan-in-Layered-Territories rule):** Before going deep on R4 (meta-category structures), the surround layer R7 must be inventoried. The Sensemaking spec's Phase-2 perspectives have shared conventions:

- Each perspective is a bullet with a short name followed by an "ask:" or "question" predicate.
- Conditional perspectives use parenthesized gating: `(when the inquiry involves rules…)` — see `Phase / Calibration-State (when the inquiry involves rules that may behave differently in different project phases or calibration states)` at line 214.
- Refinement notes are explicit, named, and reference failure modes by number when they prevent a specific failure mode.
- The perspective's verbatim text in the spec is what the AI will read at application time — so the text must be self-explanatory.

These conventions constrain any meta-category design: the design has to fit the spec's existing surface form (bullets, gating parens, failure-mode references) rather than introduce a foreign sub-structure.

---

## Cycle 2 — Signal detection within R4 (meta-category space)

Signals (what stands out):

- **Signal S1 — Two failure mechanisms map to two distinct cognitive moves.** Instance 1 fail = no enumeration; Instance 2 fail = no counter-test. Two named mechanisms → at least 2 meta-categories.
- **Signal S2 — The user explicitly asked for "covered fully without narrowing."** This is a coverage constraint, not just a structure constraint. Meta-categories must demonstrably cover the perspective's full intent.
- **Signal S3 — The existing Phase-2 perspectives are single-bullet single-cognitive-move (except D/C, which 03-07 already split).** The spec's pattern is "one perspective = one move." Adding meta-categories WITHIN a perspective is a NEW pattern. Need to check whether the new pattern damages the spec's existing form.
- **Signal S4 — The Clean Resolution Trap corrective text** in `homegrown/sense-making/references/sensemaking.md` lines 147-153 already exists in the failure-mode catalog. Reusing it via reference (rather than inlining) preserves the project's failure-mode-reuse convention.
- **Signal S5 — Surround-layer convention: refinement notes** in the current spec (lines 219-291, four refinement notes) ARE the spec's existing pattern for adding sub-rules to perspectives or phases. Each refinement note is named, gated, and references the failure mode it prevents. This is the spec's idiom for "structured sub-detail."
- **Signal S6 — Density anomaly in possibility space:** the three core moves (enumeration / relevance / verdict-rigor) are dense; other candidate meta-categories (re-location, implication-tracing, cross-inquiry-check) thin out or fold into the three. Signal: the dense region (3 moves) is likely the natural decomposition; the thin candidates are likely sub-steps or out-of-scope.
- **Signal S7 — Narrowing risk concentrates at the Existence axis.** If "existence" is artifact-centric, it might miss dimensions like temporal scope, phase-dependence, agent-axis. Probe needed: is Existence dimension-agnostic enough?
- **Signal S8 — Verdict-Rigor axis is the most direct anti-narrowing tool.** Whatever Existence and Relevance miss, Verdict-Rigor backstops: any verdict of exclusion must test its strongest counter, regardless of how the verdict was reached. This is structurally narrowing-resistant.

---

## Cycle 3 — Resolution decision

**Decision:** zoom in on the meta-category structures (R4 region).

**Why:** R4 is the highest-importance, lowest-confidence region. The other regions (R1, R2, R3) are confirmed. R6 (Step-5) is inferred from prior findings — uncomplicated. R5 (coverage/narrowing) is fully entangled with R4, so probing R4 will resolve R5 implicitly.

---

## Cycle 4 — Probe R4: candidate meta-category structures

In possibility mode, enumerate candidate structures, then probe each. Per the discipline's completeness-bias prevention rule, include obvious / standard structures alongside any novel ones.

### Candidate 1 — Two-axis structure (Cognitive-move-only)

Meta-categories:
- **MC1.1: Discovery / Enumeration** — list referents project-wide.
- **MC1.2: Verdict Rigor / Counter-test** — for any exclusion verdict, test counter on structural grounds.

**Coverage check:** addresses Instance 1 (not-fired) via MC1.1 and Instance 2 (fired-but-shallow) via MC1.2. **Narrowing check:** missing — no explicit "what role does the excluded referent play?" sub-check. If MC1.1 surfaces a referent but the AI implicitly judges it irrelevant without naming the role, MC1.2 might still fire correctly via counter-test — but only as a backstop. Recognition of relevance is not explicit. Risk: AI might enumerate a referent in MC1.1 and dismiss it without invoking MC1.2 ("not even a verdict — just a non-mention"). Then nothing catches it.

**Confidence:** Boundary — covers the two named mechanisms but has a thin spot at relevance recognition.

### Candidate 2 — Three-axis structure (Discovery + Relevance + Verdict-Rigor)

Meta-categories:
- **MC2.1: Existence Enumeration** — list what the load-bearing term refers to project-wide; for each referent, check whether it's within the frame's scope.
- **MC2.2: Role Assessment** — for each referent identified as outside the frame, state the role it plays in the operation being organized. Ask: "Is the operation's coherence preserved if this excluded referent is ignored?"
- **MC2.3: Verdict Rigor** — for any verdict of "out of scope" or "clean boundary" produced (whether in this perspective or elsewhere in Sensemaking), state the strongest counter-argument and test it on structural grounds (per Clean Resolution Trap corrective; failure mode #5).

**Coverage check:** MC2.1 addresses Instance 1 (forces enumeration). MC2.2 + MC2.3 together address Instance 2 (forces role-statement + counter-test). All three categories together cover discovery, relevance, and rigor. **Narrowing check:** the perspective's current text mentions "what does this term refer to project-wide" (→ MC2.1) and "does the project have artifacts/usages the frame's scope doesn't account for" (→ MC2.1 + MC2.2). The current text doesn't explicitly require counter-test (Instance 2 revealed the gap) — so MC2.3 ADDS rather than narrows. Coverage holds.

**Edge cases probed:**
- *Temporal scope exclusion* — e.g., the inquiry implicitly assumes current project phase. Does MC2.1 catch this? Yes if Existence Enumeration is dimension-agnostic ("list all dimensions where the term has multiple referents — types, layers, phases, time horizons, agents, structural roles, …"). Needs explicit dimension-openness.
- *Implicit exclusion without verdict* — referent is excluded silently without an "out of scope" verdict. MC2.3 fires only on verdicts. MC2.1 forces enumeration → makes silent exclusion visible. So MC2.1 backs up MC2.3 here.
- *Re-location guidance* — if a referent is judged load-bearing, what to do? Fold into MC2.2's corrective ("if NO to operation-coherence test, the corrective is to re-locate the referent to its correct in-scope layer, not to force inclusion in the current frame"). Same content as Part B from prior finding, applied within MC2.2.

**Confidence:** Confirmed (after edge-case probing) — covers the perspective fully; addresses both failure mechanisms; dimension-open via explicit list-with-extension at MC2.1.

### Candidate 3 — Four-axis structure (adds explicit Re-location)

Meta-categories:
- MC3.1: Existence Enumeration (same as MC2.1)
- MC3.2: Role Assessment (same as MC2.2 but excluding the re-location guidance)
- MC3.3: Verdict Rigor (same as MC2.3)
- MC3.4: Re-location — if a referent is judged load-bearing, identify its correct in-scope layer and acknowledge that the current inquiry operates within a per-layer slice.

**Coverage check:** same as Candidate 2 plus explicit re-location step.
**Narrowing check:** clean.
**Cost:** 4 categories increases cognitive load at application time. Each additional category adds friction without corresponding coverage gain (since re-location can live inside MC2.2's corrective).

**Confidence:** Scanned — viable but adds friction without coverage gain.

### Candidate 4 — Frame-Dimension structure (axis-centric)

Meta-categories enumerate FRAME DIMENSIONS the inquiry could exclude:
- MC4.1: Type-axis — does the term have multiple types? Are all within frame?
- MC4.2: Layer-axis — does the term operate at multiple layers? Are all within frame?
- MC4.3: Phase-axis — phase-dependence of relevant properties?
- MC4.4: Agent-axis — multiple agents/users?
- MC4.5: Time-horizon-axis — temporal scope considerations?

**Coverage check:** explicit dimension enumeration. Addresses Instance 1 (Memory's type-axis was the missed dimension) and Instance 2 (warming's layer-axis was the missed dimension) directly.
**Narrowing check:** SEVERE risk. By naming specific axes, the spec implicitly tells the AI "these are the axes to check" — and a frame dimension not in the list (e.g., a project-specific dimension not anticipated) will be missed. The user's narrowing warning applies most acutely here.
**Mitigation:** add "(this list is not exhaustive)" but that softens the structure.
**Cost:** 5+ categories; more friction; narrower than Candidate 2.

**Confidence:** Scanned — dimension-centric structure has the most acute narrowing risk; rejected as primary structure but useful as illustrative examples WITHIN a more general structure (e.g., MC2.1's "dimensions include but are not limited to…" list).

### Candidate 5 — Hybrid two-layer structure (Candidate 4 nested under Candidate 2)

LAYER 1 (discovery dimensions): the Candidate 4 axes as illustrative examples within MC2.1.
LAYER 2 (cognitive moves): the Candidate 2 three moves.

**Coverage check:** maximum coverage.
**Narrowing check:** clean if Layer 1 is illustrative ("dimensions include but are not limited to type, layer, phase…") rather than exhaustive.
**Cost:** mid (the layer-1 examples ground the spec but don't proliferate categories).

**Confidence:** Confirmed — this is the natural elaboration of Candidate 2 with concrete examples.

### Candidate 6 — Status-quo (single bullet, no meta-categories)

Keep the 03-07 finding's drafted Frame-exit Completeness as a single bullet.

**Coverage check:** addresses Instance 1 only. Instance 2 (fired-but-shallow) is NOT addressed — that's the gap the user is asking to close.
**Narrowing check:** N/A (no narrowing because no meta-categories).
**Cost:** zero application-friction.

**Confidence:** Confirmed but **fails the user's question.** The user explicitly asked for meta-category structure because the single-bullet form is insufficient against Instance 2's mechanism. Rejected for the user's purpose.

---

## Cycle 5 — Jump scan: deliberately scan a different direction

Before declaring convergence on Candidate 2 (or its Candidate 5 elaboration), do a jump scan in a different direction.

**Jump-scan question:** Could the user's "narrowing risk" warning be pointing at a structural issue I haven't seen — e.g., could the meta-categories themselves BECOME a frame that narrows future inquiries?

**Scan:** If the perspective lists 3 specific meta-categories, an AI running Sensemaking might:
- Treat the 3 as exhaustive (mistake the categories for the totality of frame-exit reasoning)
- Skip categories that "feel like" they don't apply ("relevance is obvious; skip")
- Tick boxes mechanically without deep application

**Probe:**

- *Meta-category narrowing — is it a real risk?* Yes. Naming sub-categories is itself a frame, and frames can narrow. The risk is specifically that an AI applying the perspective treats the 3 named categories as the complete list.
- *Mitigations:*
  1. **Explicit non-exhaustiveness:** include "this list is not exhaustive; check for frame-exit concerns not captured above" as a residual sub-check (call it MC2.4 or fold into MC2.3's tail).
  2. **Coverage-justification requirement:** after applying the 3 categories, require a one-line statement of "any frame-exit concern not captured by the above?" — forces the AI to look beyond.
  3. **Failure-mode reference:** keep the existing "Perspective Blindness applied to frame-exit axis" failure-mode reference at the end of the perspective so the FAILURE not the structure is the test.

- *Verdict on jump scan:* the meta-category-narrowing risk is real but manageable via the three mitigations. Mitigation 1 (explicit non-exhaustiveness) is the lightest-weight; Mitigation 2 (coverage-justification requirement) is the most rigorous. The recommended design includes both.

**Surprise:** the jump scan surfaced a 4th implicit meta-category — the **residual** / **coverage-justification** check. This is a meta-category about the meta-categories themselves — the perspective's self-check that it has applied the perspective fully.

This is real coverage information. Including it lifts Candidate 5 to:

LAYER 1 (discovery dimensions, illustrative): type, layer, phase, agent, time-horizon, structural role, …
LAYER 2 (cognitive moves, named meta-categories):
  - MC: Existence Enumeration
  - MC: Role Assessment
  - MC: Verdict Rigor
  - MC: Residual / Coverage Justification

So 4 meta-categories, not 3. The 4th is the anti-narrowing mitigation.

---

## Cycle 6 — Convergence assessment

**Frontier stability:** Cycles 4 and 5 produced candidates that converged on a structure (Candidate 2 elaborated with Candidate 5's two-layer form, plus the jump-scan's MC4 residual check). No further candidates surface in this direction.

**Discovery rate:** declining. Cycles 4-5 produced the candidate set; Cycle 5's jump scan added one residual check. Further cycles would refine wording, not add new candidates.

**Bounded gaps:** the remaining unknowns (exact spec-text wording, integration position) are addressable by Sensemaking + Innovation; they are bounded by the candidate-set produced in this exploration.

**Convergence: REACHED.**

---

## Final Deliverable — Structural Map

### Territory Overview

| Region | Resolution | Confidence | Major content |
|---|---|---|---|
| **R1 — Current Sensemaking spec** | Fine | Confirmed | 7 Phase-2 perspectives; 6 failure modes; 4 refinement notes |
| **R2 — Frame-exit Completeness draft (03-07)** | Fine | Confirmed | Conjunctive gating + 1-question text |
| **R3 — Failure mechanisms** | Confirmed | Confirmed | Instance 1 (not-fired); Instance 2 (fired-but-shallow) |
| **R4 — Meta-category space** | Fine | Confirmed | 6 candidates (C1-C6); C5+jump-scan = recommended |
| **R5 — Coverage / narrowing risk** | Fine | Confirmed | Manageable via non-exhaustiveness + residual check + failure-mode reference |
| **R6 — Step-5 conformance** | Coarse | Inferred | Design produces draft; adoption stays deferred |
| **R7 — Surround layer (spec conventions)** | Fine | Confirmed | Bullets, parenthesized gating, failure-mode references; refinement notes are spec's existing idiom for sub-detail |

### Inventory

**Sensemaking spec elements that constrain the design (R1, R7):**
- Line 213 — current Definitional / Consistency bullet (the bullet the 03-07 refactor replaces).
- Line 214 — Phase / Calibration-State conditional bullet with parenthesized gating pattern.
- Lines 219-221 — refinement note for Phase / Calibration-State requirement (one of 4 refinement-note patterns).
- Lines 147-153 — Clean Resolution Trap (failure mode #5) corrective text.
- Lines 139-145 — Perspective Blindness (failure mode #4) corrective text — referenced by 03-07's draft.

**03-07 draft elements that the new design inherits (R2):**
- Conjunctive gating predicate (inherited multi-value terms in committed structures).
- The "out of scope" / "clean boundary" verdict-shape language.
- Failure-mode reference ("Perspective Blindness applied to frame-exit axis").
- Examples (positive: Memory; negative: function-name).

**Two failure mechanisms (R3):**
- **Instance 1 — not-fired:** the perspective didn't apply because no perspective in the existing list explicitly asked the frame-exit question. Maintenance addresses by: making the perspective a named slot in Phase 2.
- **Instance 2 — fired-but-shallow:** the perspective fired but produced "clean boundary" via Clean Resolution Trap. The strongest counter-argument was never tested on structural grounds. Maintenance addresses by: forcing counter-test as a named sub-step within the perspective.

**Meta-category candidates (R4):**
- C1 (2-axis, cognitive-move-only) — thin spot at relevance recognition.
- **C2 (3-axis: Discovery + Relevance + Verdict-Rigor) — primary candidate.**
- C3 (4-axis adding Re-location) — adds friction without coverage gain.
- C4 (frame-dimension-centric) — high narrowing risk.
- **C5 (hybrid: C4-as-examples nested under C2) — preferred elaboration of C2.**
- C6 (status-quo, no meta-categories) — fails user's question.
- **C5 + jump-scan addition (4th meta-category for Residual / Coverage Justification) — preferred final structure.**

**Coverage / narrowing analysis (R5):**
- C2/C5 covers the two failure mechanisms.
- Narrowing risk concentrates at: (a) Existence axis being artifact-centric → mitigated by dimension-open phrasing; (b) the meta-categories themselves becoming a frame → mitigated by residual check + failure-mode reference + explicit non-exhaustiveness.

### Signal Log

| Signal | Status | Region |
|---|---|---|
| S1 — Two failure mechanisms map to ≥2 meta-categories | Probed → confirmed | R3 + R4 |
| S2 — Coverage constraint is strict | Probed → confirmed; mitigations identified | R5 |
| S3 — Phase-2 perspectives are single-move; meta-categories within a perspective is new pattern | Probed → can fit via refinement-note idiom (R7's existing pattern for sub-detail) | R4 + R7 |
| S4 — Reuse Clean Resolution Trap corrective via reference | Probed → confirmed; reference preserves spec's failure-mode-reuse convention | R1 + R4 |
| S5 — Refinement notes ARE the spec's idiom for structured sub-detail | Probed → can place meta-categories EITHER inline in the perspective bullet OR as a refinement note immediately after. Both are spec-consistent. | R7 |
| S6 — Density anomaly: 3 moves are dense; others fold | Probed → confirmed | R4 |
| S7 — Existence axis narrowing risk | Probed → mitigated by dimension-open phrasing | R5 |
| S8 — Verdict-Rigor axis is the most direct anti-narrowing tool | Probed → confirmed | R4 + R5 |
| Jump-scan signal — meta-categories themselves can narrow | Probed → mitigated by 4th residual / coverage-justification category | R5 |

### Confidence Map

- **R1 (current spec):** Confirmed.
- **R2 (03-07 draft):** Confirmed.
- **R3 (failure mechanisms):** Confirmed.
- **R4 (meta-category candidates):** Confirmed for the 6 candidates listed; the recommendation (C5 + residual check = 4 meta-categories with dimension-illustrative examples) is **Confirmed** at the structural-design level.
- **R5 (coverage / narrowing):** Confirmed for both directions (C5/C2 covers + mitigations identified for the structural narrowing risk).
- **R6 (Step-5 conformance):** Inferred (design produces draft; adoption follows prior deferral).
- **R7 (surround-layer / spec conventions):** Confirmed.

### Frontier State

**Stable.** The meta-category space is mapped at the resolution needed for Sensemaking and Innovation to operate.

### Gaps and Recommendations

**Remaining gaps (bounded; for Sensemaking and Innovation):**

- **G1 — Exact spec-text wording.** The structure is chosen; the wording needs Innovation's drafting (specifically: should the meta-categories live inline within the perspective bullet, or as a refinement note immediately after the bullet?). Both are spec-consistent; the wording choice depends on Sensemaking's clarity preference.
- **G2 — Position within Phase 2.** The 03-07 finding proposed replacing line 213's Definitional / Consistency with two bullets (Internal Consistency + Frame-exit Completeness). This inquiry's design fits inside the second bullet (Frame-exit Completeness). Position is inherited; no new choice needed.
- **G3 — Whether to include "this list is not exhaustive" in the dimension-illustrative examples.** Yes per the jump-scan analysis. Sensemaking can lock this.
- **G4 — Whether the 4th meta-category (Residual / Coverage Justification) is a peer category or a closing requirement on the prior 3.** Sensemaking should resolve.

**Recommendations for next discipline (Sensemaking):**

- Stabilize on the 4-meta-category structure: Existence Enumeration + Role Assessment + Verdict Rigor + Residual / Coverage Justification.
- Test for narrowing one more time at SV3-SV4 with concrete examples beyond Memory and warming (jump-scan-style).
- Decide G3 and G4 explicitly.
- Apply the failure-mode reference convention to the meta-categories (each cites the failure mode it addresses).
- Hand off concrete coverage-proof (the categories DO cover the perspective's full intent for both Instance 1 and Instance 2 mechanisms, and DON'T narrow vs. the 03-07 single-bullet draft).
