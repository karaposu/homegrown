# Decomposition: Decomposition Value Audit

## User Input

devdocs/inquiries/2026-05-09_11-54__decomposition_value_audit/_branch.md

```
lets a bit dwelve into what decomposition does. I want you to inspect last 10
inquiries in devdocs/inquiries and tell me if decomposition discipline step
produces any value or not much? what is the sense of decomposing after sensemaking,
does it help with anything substantial?
```

The post-sensemaking actionable space (named in SV5/SV6):
- **Within-D-spec refinements** (Option 1): sharpen self-eval (PASS-stamping); reduce perfunctory machinery for simple cases; make determination-mechanism check fire correctly.
- **Pipeline-rule inquiry** (Option 2): a separate inquiry on whether always-E→S→D→I→C should permit conditional D.
- **Audit-again-with-diversity** (Option 3): re-run the audit later with diverse inquiry shapes.
- **Verdict communication** (need d): the artifact the user reads to decide.

Decomposition's job is to partition this space so innovation can generate per-piece proposals and critique can evaluate per-piece.

---

## Step 1 — Coupling Topology (Coupling Map)

### Elements in the actionable space

From sensemaking SV6 + audit's named problems:

- **e1**: Sharpen self-eval to detect PASS-stamping (problem: 10/10 PASS in corpus; not catching anything)
- **e2**: Reduce perfunctory interface/dependency machinery for Layer-0-only inquiries (problem: 8/10 inquiries have read-only flat structure; full machinery is ceremony)
- **e3**: Make determination-mechanism piece check fire when applicable (problem: fires 0/10 in corpus despite recent refinement that added it)
- **e4**: Question/goal of the pipeline-rule inquiry
- **e5**: Seed input from this audit into pipeline-rule inquiry
- **e6**: Trigger condition for opening pipeline-rule inquiry (now / later / never)
- **e7**: Operationalization of "diversity" for audit-again
- **e8**: Trigger for audit-again (count / time / signal)
- **e9**: Threshold for "enough diverse evidence"
- **e10**: User-facing artifact for the graded verdict
- **e11**: Decision-action mapping in that artifact (what user decides based on what)

### Coupling matrix (sketch)

| | e1 | e2 | e3 | e4 | e5 | e6 | e7 | e8 | e9 | e10 | e11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| e1 | — | mod | high | weak | weak | weak | weak | weak | weak | weak | weak |
| e2 | | — | mod | weak | weak | weak | weak | weak | weak | weak | weak |
| e3 | | | — | weak | weak | weak | weak | weak | weak | weak | weak |
| e4 | | | | — | high | mod | weak | weak | weak | weak | weak |
| e5 | | | | | — | mod | weak | weak | weak | weak | weak |
| e6 | | | | | | — | weak | weak | weak | weak | weak |
| e7 | | | | | | | — | mod | high | weak | weak |
| e8 | | | | | | | | — | mod | weak | weak |
| e9 | | | | | | | | | — | weak | weak |
| e10 | | | | | | | | | | — | high |
| e11 | | | | | | | | | | | — |

### Clusters

- **Cluster A** (high internal coupling): {e1, e2, e3} — within-D-spec refinements. All three modify the /decompose spec; self-eval and machinery share format conventions; determination-mechanism check is part of self-eval (high e1↔e3 coupling).
- **Cluster B** (high internal coupling): {e4, e5, e6} — pipeline-rule inquiry seeding. Question/goal/seed/trigger move together.
- **Cluster C** (high internal coupling): {e7, e8, e9} — audit-again protocol. Diversity definition / trigger / threshold are interdependent.
- **Cluster D** (high internal coupling): {e10, e11} — verdict communication artifact.

### Boundaries

- A↔B: weak (refinements of D's spec are independent of how a separate inquiry's question is shaped, though A's outputs are evidence for B's reasoning).
- A↔C: weak (refinements don't change diversity operationalization).
- A↔D: weak (refinements are options *listed in* D's artifact; the listing is one-way).
- B↔C: weak (both are deferred-action options; alternatives, not composables).
- B↔D, C↔D: weak (D's artifact lists B and C as options).

**Major coupling pattern:** four clusters with weak inter-cluster coupling. D (verdict artifact) is the synthesis sink that mentions A, B, C.

---

## Step 2 — Boundaries (Top-Down)

Cut at the four cluster boundaries:

- **Boundary 1**: between A {e1,e2,e3} and B {e4,e5,e6}
- **Boundary 2**: between A and C {e7,e8,e9}
- **Boundary 3**: between A and D {e10,e11}
- **Boundary 4**: between B and C
- **Boundary 5**: between B and D
- **Boundary 6**: between C and D

All six boundaries are low-coupling. Initial partition: 4 pieces.

Within Cluster A, three sub-targets are conceptually distinct (PASS-stamping, perfunctory machinery, determination-mechanism non-firing). Sub-decompose A into 3 sub-pieces (Layer-1 within Q1).

Other clusters: no internal sub-decomposition needed; B and C have moderate internal coupling but the elements move together as one tractable unit each.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- "How to make self-eval not be PASS-stamping" → atom; lands in Cluster A
- "When can Layer-0-only inquiries skip interface machinery" → atom; lands in Cluster A
- "Why does determination-mechanism check fire 0/10; how to fix" → atom; lands in Cluster A
- "What's the question/goal of the pipeline-rule inquiry" → atom; lands in Cluster B
- "What seed input from this audit goes into it" → atom; lands in Cluster B
- "When/whether to open it" → atom; lands in Cluster B
- "How to define diversity for audit-again" → atom; lands in Cluster C
- "When does audit-again fire" → atom; lands in Cluster C
- "What's the threshold" → atom; lands in Cluster C
- "What artifact does user read" → atom; lands in Cluster D
- "How does artifact map options to user decisions" → atom; lands in Cluster D

### Cross-check

Atoms cluster cleanly with Step 2 boundaries. No atom forced across a boundary; no atoms grouped that should be separated.

### Confidence

**HIGH** — top-down and bottom-up agree on the four-cluster partition with three sub-pieces inside A.

---

## Step 4 — Question Tree

### Q1 — Within-D-spec refinements

**Question:** Which specific changes to the /decompose discipline spec address the audit's three named problems (PASS-stamping in self-eval; perfunctory interface/dependency machinery for Layer-0-only inquiries; determination-mechanism piece check failing to fire), and what are the candidate changes for each?

**Sub-pieces:**

- **Q1.1 — Sharpen self-eval against PASS-stamping.** Question: What spec-level change to the 3-dimension or 7-dimension self-evaluation would make 10/10 PASS rate either drop (by surfacing real problems) or be honestly defended (by adding a "self-eval is perfunctory if X" guard)?
  - Verification: [ ] Concrete spec edit named (location in references/decompose.md or skill protocol). [ ] Edit's mechanism explained (does it change the dimensions? add a guard? require justification?). [ ] Phase-fit named (descriptive at machinery / active at maintenance).

- **Q1.2 — Reduce perfunctory machinery for Layer-0-only inquiries.** Question: When an inquiry's pieces are all Layer-0 with read-only flows (no cross-piece dependencies), should the spec name a reduced-machinery path (e.g., skip interface map; skip dependency-order section), and what is the trigger that determines a Layer-0-only inquiry?
  - Verification: [ ] Trigger condition named (concrete: e.g., "no cross-piece interfaces" or similar). [ ] Reduced-machinery path described (which sections become optional). [ ] Phase-fit named.

- **Q1.3 — Make determination-mechanism check fire correctly.** Question: The determination-mechanism piece check (recent addition) fires 0/10 in the corpus. Is the trigger wrong, the check wrong, or are there genuinely no determination-mechanism cases — and what's the candidate fix per hypothesis?
  - Verification: [ ] Hypothesis named for non-firing (trigger / wording / true-zero). [ ] Candidate change per surviving hypothesis. [ ] Phase-fit named.

**Top-level Q1 verification:** [ ] At least one candidate change for each sub-piece. [ ] Each candidate is at the spec level (not per-inquiry). [ ] Each candidate concrete enough for critique to evaluate phase-fit and feasibility.

### Q2 — Pipeline-rule inquiry seeding

**Question:** If a separate inquiry on the always-E→S→D→I→C rule (whether D should be conditional) is to be opened, what is its question, goal, seed input from this audit, and trigger condition?

**Verification:**
- [ ] One-sentence question for the proposed inquiry
- [ ] Stated goal (what a good answer would let the user do)
- [ ] Specific findings from this audit named as seed input (which counts, which patterns, which value tags)
- [ ] Trigger condition stated (open now / open after audit-again / open never)

### Q3 — Audit-again-with-diversity protocol

**Question:** If audit-again is the deferred path, how is "diversity" operationalized, when does the re-audit fire, and what threshold determines "enough diverse evidence to revise the verdict"?

**Verification:**
- [ ] Diversity operationalized concretely (e.g., "≥N inquiries of shape X; ≥M of shape Y" — with shape names from the audit's known shapes: meta-design / LOOP_DIAGNOSE / application / etc.)
- [ ] Trigger named (count-based / time-based / signal-based)
- [ ] Threshold stated for "enough" (even if approximate)
- [ ] Verdict-revision protocol named (does audit-again confirm/deny/refine the current verdict?)

### Q4 — Verdict communication artifact

**Question:** What is the shape of the artifact the user reads to decide which option(s) to take, such that the graded verdict (formalization-yes / validation-unknown / discovery-no / inquiry-shape-suggestive) is preserved without losing nuance, and the user's decision-action mapping is explicit?

**Verification:**
- [ ] One artifact named (finding.md alone / decision-table / option-card / etc.)
- [ ] Graded verdict's three precisions preserved (formalization vs validation vs discovery; PASS-stamping uncertainty; inquiry-shape suggestiveness)
- [ ] Decision-action mapping explicit, including the legitimate "do nothing now" option (lowest-action default)
- [ ] Self-reference scope acknowledged (corpus-internal verdict, not universal claim)

---

## Step 5 — Interfaces

### Cross-piece flows

| Source | Target | What flows | Direction |
|---|---|---|---|
| Q1 | Q4 | Refinement candidate set (the within-D-spec proposals) | one-way |
| Q2 | Q4 | Pipeline-rule inquiry candidate (question/goal/trigger) | one-way |
| Q3 | Q4 | Audit-again protocol candidate (diversity/trigger/threshold) | one-way |
| Q1 | Q2 | (weak) Refinement set is *evidence* for whether pipeline-rule inquiry is more or less needed | one-way, optional |
| Q1 | Q3 | (weak) Refinements (e.g., sharpened self-eval) define what the next audit would measure | one-way, optional |

### Within-Q1 flows

| Source | Target | What flows | Direction |
|---|---|---|---|
| Q1.1 | Q1.3 | (mod) Sharpened self-eval and determination-mechanism check share the self-eval section; refinements may need to be co-designed | bidirectional, modest |
| Q1.2 | Q1.1 | (weak) Reduced-machinery path may include reducing self-eval dimensions; coordinated design | bidirectional, weak |

**Hidden coupling check:** assumption all four pieces share — that the user wants action, not just a finding. If the user's actual choice is "interesting, no action," that is preserved by Q4's "do nothing" decision-action mapping requirement. No hidden coupling.

**Interface assumption explicit:** Q4's artifact assumes Q1, Q2, Q3 each produced ≥1 surviving candidate (post-critique). If a piece produces zero candidates, Q4's artifact omits that option transparently.

---

## Step 6 — Dependency Order

### Order

```
{Q1, Q2, Q3} ∥ parallel  →  Q4 synthesis
```

Within Q1: {Q1.1, Q1.2, Q1.3} can be worked on in parallel; modest co-design between Q1.1 and Q1.3 (shared self-eval section).

### For innovation

Generate proposals for Q1 (with three sub-targets), Q2, Q3 in parallel. Then synthesize Q4 (the user-facing artifact) using the Q1/Q2/Q3 proposals as input.

### For critique

Each piece evaluated independently against constraints (phase-fit conservatism, always-pipeline rule, "brushing teeth" disposition, self-reference risk, feasibility). Q4's evaluation depends on which Q1/Q2/Q3 candidates survived.

### Circular dependency check

None. Q4's dependencies on Q1-Q3 are one-way (synthesis sink).

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Each piece's question answerable without reading siblings (except via interfaces)? | **PASS** — Q1, Q2, Q3 fully independent. Q4 is by-design synthesis (declared interface, not hidden coupling). Within Q1, sub-pieces are mostly independent with declared modest co-design between Q1.1 and Q1.3. |
| **Completeness** | Pieces cover the whole? | **PASS** — All four sensemaking-named branches (Options 1, 2, 3 + verdict communication) covered. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** — Q1 produces refinement candidates; Q2 produces inquiry-design candidate; Q3 produces audit-protocol candidate; Q4 compiles them into user-facing artifact with decision-action mapping. User has what they need to decide. |

### Determination-mechanism piece check

Load-bearing concepts in the question tree whose use depends on a runtime determination:

- **"Layer-0-only inquiry"** (Q1.2): runtime determination = "does this inquiry have cross-piece interfaces?" Determination mechanism is *part of Q1.2's question* ("what is the trigger that determines a Layer-0-only inquiry?"). **Included.**
- **"Diversity"** (Q3): runtime determination = "are these inquiries diverse enough?" Determination mechanism is *part of Q3's question* (operationalization + threshold). **Included.**
- **"Determination-mechanism non-firing"** (Q1.3): meta-loop — Q1.3 itself addresses why a determination-mechanism check fires 0/10. The piece IS the determination-mechanism investigation. **Included.**
- **"Phase-fit"** (constraint, not piece): not addressed within decomposition; sensemaking named it as critique-side concern. Not Q-tree's responsibility.

**Determination-mechanism check: PASS.**

### Full (additional 4 dimensions)

| Dimension | Check | Result |
|---|---|---|
| **Tractability** | Each piece small enough for one focused pass? | **PASS** — Q1 has 3 sub-pieces but each sub-piece is single-focused. Q2, Q3, Q4 are each one focused pass. |
| **Interface clarity** | All cross-piece flows explicit; no hidden dependencies? | **PASS with note** — interfaces declared; one assumption (user wants action) explicitly preserved by Q4's "do nothing" requirement. |
| **Balance** | Complexity roughly proportional? Or 80/20? | **PASS with caveat** — Q1 is the largest (3 sub-targets, more concrete ground because audit gave specific named problems). Q2, Q3, Q4 are smaller. Not 80/20 imbalanced; Q1 is ~40% of total weight. |
| **Confidence** | Top-down and bottom-up agree on boundaries? | **PASS HIGH** — full agreement; atoms cluster cleanly. |

### HONEST self-assessment — IS THIS DECOMPOSITION DOING REAL WORK?

Per the audit framework this inquiry is producing, this D's output should be honestly tagged.

**What sensemaking already produced:**
- SV6 named three options + verdict communication need.
- SV5 named "within-D-spec refinements" / "meta-actions" / "verdict communication" categories.
- The categories were not yet partitioned into sub-pieces with verification criteria.

**What this decomposition adds beyond SV6:**

1. **Three sub-targets within Q1 (the within-D-spec refinements).** PASS-stamping, perfunctory machinery, determination-mechanism non-firing. These came from exploration's cross-inquiry pattern findings (P2, P4, P3 in the exploration map), not directly named in SV6's three-options framing. SV6 said "sharpen self-eval; reduce perfunctory machinery for simple cases" without separating the determination-mechanism issue as a third axis. This is **genuine partitioning value** — three independent refinement targets surfaced as separate sub-pieces.

2. **Verification criteria per piece.** SV6 named options at high level; the verification criteria here say "to count as a complete answer for Q1.1, you need at least one concrete spec edit with phase-fit named." That's a tractability boundary innovation can act on. **Modest formalization value.**

3. **Interface map (Q1/Q2/Q3 → Q4).** SV6 didn't separate "options" from "user-facing artifact." Pulling Q4 out as its own piece with explicit decision-action mapping is **modest formalization value** — it surfaces that the verdict has to *land* somewhere readable, not just exist.

4. **Dependency ordering (parallel-then-synthesis).** Trivial/obvious; not real value.

**Honest verdict on this D's value, by the audit's own framework:**

- Q1's three sub-target partitioning is **genuine partitioning** (not in SV6's flat three-option list). Score this contribution: **MEDIUM-leaning-HIGH** in isolation.
- Q4 as separate piece: **MEDIUM** (mild formalization that exposes the artifact-need).
- Q2 and Q3 as standalone pieces: **LOW-MEDIUM** (mostly reformatting SV6's options as questions with verification criteria).

**Overall this D scores MEDIUM** — consistent with the audit's median finding for the corpus. Not HIGH (Q2/Q3 are mostly reformatting; Q1's sub-pieces are the only genuinely surfaced partitioning). Not LOW (Q1's sub-targets, the Q4 separation, and verification criteria do real work for innovation/critique).

This is **not** circular self-validation — the audit's claim was that D's value is graded and most of it is formalization with occasional genuine partitioning. This D demonstrates that exact pattern. The audit's findings *survive* this D's self-application: D here is producing the corpus-typical MEDIUM value, with the genuine work concentrated in Q1's sub-piece surfacing.

**PASS-stamping risk acknowledged.** The audit found 10/10 self-evals were PASS. This self-eval is also coming back PASS on the 3-dimensional check + Determination-mechanism check + 4 additional dimensions. Is THIS another instance of perfunctory PASS-stamping?

Counter-evidence that this PASS is NOT perfunctory:
- The full evaluation explicitly named one "PASS with note" (Interface clarity) and one "PASS with caveat" (Balance) — the self-eval is not uniform PASS.
- The honest-self-assessment section above tags individual pieces with mixed value (LOW-MEDIUM for Q2/Q3; MEDIUM-leaning-HIGH for Q1's sub-targets), not blanket-HIGH for the decomposition.
- The MEDIUM overall verdict is stated, not avoided.

But: the 3-dim check IS coming back PASS, and the audit found that 10/10 in the corpus do too. The honest read is that the 3-dim check (independence/completeness/reassembly) is calibrated toward easy PASS — it catches gross failures but not the formalization-vs-genuine-work distinction. **This is itself evidence for Q1.1** (sharpen self-eval to detect when PASS is perfunctory).

The decomposition is useful for innovation (clear targets, verification criteria) and critique (clear pieces against constraints), but its MEDIUM value rather than HIGH is honestly stated.

### Self-reference notes

This decomposition is an instance of D in the corpus this inquiry audits. It will be subject to the same audit framework if D is audited again. Honest reading: this D scores MEDIUM, the corpus-typical value for D. The audit's findings are not undermined by this D's existence; they are exemplified by it.

The verdict scope (corpus-internal, not universal) is preserved in Q4's verification criteria.

---

## Final Deliverable

### 1. Coupling Map

Four clusters: A {within-D-spec refinements}, B {pipeline-rule inquiry seed}, C {audit-again protocol}, D {verdict artifact}. Weak inter-cluster coupling; D is synthesis sink. Within A, three sub-targets with modest internal coupling.

### 2. Question Tree

- **Q1** — Within-D-spec refinements (3 sub-pieces: Q1.1 sharpen self-eval; Q1.2 reduce perfunctory machinery; Q1.3 fix determination-mechanism non-firing)
- **Q2** — Pipeline-rule inquiry seeding
- **Q3** — Audit-again-with-diversity protocol
- **Q4** — Verdict communication artifact

Each piece has verification criteria (above).

### 3. Interface Map

- Q1 → Q4 (refinement candidates flow into artifact)
- Q2 → Q4 (inquiry candidate flows into artifact)
- Q3 → Q4 (audit-again candidate flows into artifact)
- Q1 → Q2 (weak; refinements are evidence)
- Q1 → Q3 (weak; refinements define audit-again's measurement targets)
- Within Q1: Q1.1 ↔ Q1.3 (modest, shared self-eval section)

### 4. Dependency Order

```
{Q1 (with 3 parallel sub-pieces), Q2, Q3} ∥ parallel
                  ↓
                  Q4 synthesis
```

### 5. Self-Evaluation

**Minimum (3 dimensions):** Independence PASS / Completeness PASS / Reassembly PASS. Determination-mechanism check PASS.

**Full (4 additional dimensions):** Tractability PASS / Interface clarity PASS-with-note / Balance PASS-with-caveat / Confidence HIGH.

**Honest value tag (by audit framework):** **MEDIUM** — Q1's three sub-target surfacing is genuine partitioning; Q4 separation is modest formalization; Q2/Q3 are mostly reformatting. Consistent with corpus-typical D value. PASS-stamping risk acknowledged; partial counter-evidence given.

**Self-reference:** This D scores MEDIUM, exemplifying the audit's own finding. Verdict scope is corpus-internal.
