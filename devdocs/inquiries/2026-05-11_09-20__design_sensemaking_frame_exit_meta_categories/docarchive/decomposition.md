# Decomposition: Design Sensemaking — Frame-exit Perspective Meta-Categories

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_09-20__design_sensemaking_frame_exit_meta_categories/_branch.md`

The whole to decompose (from Sensemaking SV6): produce the complete %100-improvement design deliverable — drafted spec text for 4 sequenced meta-categories, inline placement within Frame-exit Completeness perspective, dimension-illustrative examples (non-exhaustive), failure-mode references at endpoints, coverage-proof against 03-07's baseline AND against the two failure mechanisms AND against meta-narrowing, with adoption explicitly DEFERRED. Critique must be able to test the design's %100-improvement claim on structural grounds.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

1. **E1 — Existence Enumeration meta-category spec text.** Defines the discovery move + non-exhaustive dimension prompts.
2. **E2 — Role Assessment meta-category spec text.** Defines the relevance move + re-location corrective.
3. **E3 — Verdict Rigor meta-category spec text.** Defines the counter-test move + failure-mode #5 reference.
4. **E4 — Residual / Coverage Justification meta-category spec text.** Defines the anti-narrowing closing-step move + recursion back to Existence/Role/Verdict-Rigor.
5. **E5 — Sequenced pipeline structure.** The ordering Existence → Role → Verdict-Rigor → Residual.
6. **E6 — Failure-mode references at endpoints.** Perspective Blindness (#4) cited at Existence; Clean Resolution Trap (#5) cited at Verdict Rigor.
7. **E7 — Gating predicate integration.** The conjunctive gating from 03-07 (inherited unchanged) sits upstream of the 4 meta-categories.
8. **E8 — Placement decision.** Inline within the Frame-exit Completeness bullet, not as a refinement note.
9. **E9 — Non-exhaustiveness phrasing.** "(this list is not exhaustive; other dimensions may apply)" appended to the dimension examples in E1.
10. **E10 — Coverage proof against 03-07 baseline.** Argument that the new 4-category structure catches every case the 03-07 single-bullet draft catches.
11. **E11 — Coverage proof against Instance 1 (not-fired).** Argument that Existence Enumeration would have caught Memory's md-file referent.
12. **E12 — Coverage proof against Instance 2 (fired-but-shallow).** Argument that Verdict Rigor would have flipped warming's clean-boundary verdict.
13. **E13 — Anti-narrowing proof.** Argument that Residual / Coverage Justification prevents meta-narrowing.
14. **E14 — Cognitive-move-axis defense.** Argument that the cognitive-move axis is structurally narrowing-resistant (vs frame-dimension axis).
15. **E15 — Self-applicability check.** Meta-apply the 4-category structure to this design (already done in Sensemaking Phase 2; result preserved).
16. **E16 — %100-improvement structural argument.** Composition of E10-E14 into the explicit defense the user asked for.
17. **E17 — Step-5 conformance statement.** Explicit (DRAFT — not adopted) header + revival-trigger reference.
18. **E18 — Adoption deferral mechanics.** Audit revival trigger inherited from 11-22 loop_diagnose (≥3-instance threshold for Part A; ≥3 fired-but-shallow for Part B; this design ships with Part A's gate).

### Coupling perception (pairwise change-propagation)

If E1 changes (Existence Enumeration's text), what must change?
- E5 (sequenced pipeline) — yes, if Existence's role in the pipeline changes
- E11 (Instance 1 coverage proof) — yes, if Existence's enumeration breadth changes
- E10 (03-07 baseline coverage) — yes, if Existence's question wording differs from 03-07's
- E9 (non-exhaustiveness) — yes, since E9 is appended to E1
- → **E1 strongly coupled with E5, E11, E10, E9**

If E2 changes (Role Assessment), what must change?
- E5 — yes
- E12 (partial — Role's role in Instance 2 coverage)
- E15 (self-applicability, since meta-application uses Role)
- → **E2 strongly coupled with E5; moderately coupled with E12, E15**

If E3 changes (Verdict Rigor), what must change?
- E5, E12, E6 (failure-mode reference)
- → **E3 strongly coupled with E5, E12, E6**

If E4 changes (Residual), what must change?
- E5, E13 (anti-narrowing proof)
- → **E4 strongly coupled with E5, E13**

If E5 changes (sequenced pipeline), what must change?
- All four meta-category bodies (E1-E4) because each references its position in the pipeline
- → **E5 strongly coupled with E1, E2, E3, E4**

If E6 changes (failure-mode references), what must change?
- E1 (Perspective Blindness cite), E3 (Clean Resolution Trap cite)
- → **E6 strongly coupled with E1, E3; weakly with E2, E4**

If E7 changes (gating predicate)... It's INHERITED unchanged from 03-07. This inquiry doesn't change E7.
- E7 is **upstream of all meta-categories**; touching it would require re-opening 03-07
- → **E7 is a frozen boundary input; not modified in this inquiry**

If E8 changes (placement decision)... Sensemaking fixed this (inline). Touching it would require re-opening Sensemaking.
- → **E8 is fixed; not modified**

If E9 changes (non-exhaustiveness phrasing), what must change?
- E1 (where it lives), E13 (anti-narrowing argument depends on it)
- → **E9 strongly coupled with E1; moderately with E13**

If E10 changes (03-07 baseline coverage proof), what must change?
- E1 (the spec text it proves coverage over)
- E16 (%100-improvement argument that uses E10)
- → **E10 strongly coupled with E1, E16**

E11, E12, E13, E14 all feed into E16 (the %100-improvement argument).
- → **E10-E14 strongly coupled with E16**

E15 (self-applicability) is somewhat independent: it tests the structure, doesn't change with text wording.
- → **E15 loosely coupled with the rest; can be drafted standalone**

E17 (Step-5 conformance), E18 (adoption deferral mechanics) are frame elements — they wrap the whole deliverable.
- → **E17 + E18 loosely coupled with the meta-category bodies; they live at the deliverable's framing layer**

### Coupling clusters (high-coupling regions)

- **Cluster A — Spec text bodies:** {E1, E2, E3, E4, E5, E6, E9} — the 4 meta-categories + their sequencing + failure-mode citations + non-exhaustiveness phrasing. All inter-couple via the pipeline structure E5.
- **Cluster B — Coverage proof + %100 argument:** {E10, E11, E12, E13, E14, E16} — all read FROM Cluster A and compose into the high-confidence-improvement argument.
- **Cluster C — Integration framing:** {E7, E8, E17, E18} — the upstream gating, placement choice, Step-5 conformance, and adoption deferral. These are the deliverable's wrapper. E7 and E8 are inherited (fixed); E17 and E18 specify wrapper text.
- **Singleton — Self-applicability check:** {E15} — already executed in Sensemaking Phase 2; preserved as evidence rather than re-drafted.

### Low-coupling valleys (candidate boundaries)

- Between Cluster A (spec text bodies) and Cluster B (coverage proofs / %100 argument) — Cluster B reads from A but doesn't modify it. **One-way coupling.** Good boundary.
- Between Cluster A and Cluster C (integration framing) — A's spec text fits INTO C's wrapper (gating + placement + DRAFT-not-adopted). One-way coupling: A produces; C frames. **Good boundary.**
- Between Cluster B and Cluster C — both reference Cluster A but don't directly modify each other. **Good boundary** (light coupling: B's %100-improvement argument references C's Step-5 conformance as the adoption-deferral context).
- Singleton E15 — independent of the others (was produced during Sensemaking). **Good boundary; can be referenced.**

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling topology, four candidate pieces emerge:

- **Piece P1 — Spec text drafting (Cluster A):** {E1, E2, E3, E4, E5, E6, E9}. The 4 meta-categories as drafted spec text with sequenced pipeline structure, failure-mode references, and non-exhaustiveness phrasing.
- **Piece P2 — Coverage proof + %100-improvement defense (Cluster B):** {E10, E11, E12, E13, E14, E16}. The structural argument that the design is a %100 improvement, decomposed into baseline-coverage + Instance-1-coverage + Instance-2-coverage + anti-narrowing + cognitive-move-axis-defense, composed into the overall claim.
- **Piece P3 — Integration framing (Cluster C):** {E7-inherited, E8-fixed, E17, E18}. The wrapper specifying placement (inline within 03-07's second bullet), gating predicate (inherited unchanged), Step-5 conformance (DRAFT header), and adoption-deferral mechanics (revival trigger).
- **Piece P4 — Self-applicability check evidence (Singleton):** {E15}. The completed meta-application from Sensemaking Phase 2, packaged as evidence for the design's self-applicability claim.

### Boundary qualities

- **P1 ↔ P2:** boundary is "what flows = the drafted spec text from P1 to P2 for coverage analysis." One-way Read. Clear interface.
- **P1 ↔ P3:** boundary is "what flows = the drafted spec text from P1 to P3 for placement wrapping." One-way Read.
- **P2 ↔ P3:** boundary is "what flows = the Step-5 conformance from P3 to P2 as the adoption-context for the %100-improvement defense." One-way Read.
- **P1 ↔ P4:** boundary is "what flows = the drafted structure from P1 to P4's evidence packaging (the meta-application used the same 4-category structure)." One-way Read.

All boundaries are one-way Reads with clear interfaces. No bidirectional or hidden coupling.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Identify the obvious irreducible atoms:

| Atom | Description |
|---|---|
| A1 | "Existence Enumeration" name + question (one bullet of spec text) |
| A2 | "Role Assessment" name + question (one bullet of spec text) |
| A3 | "Verdict Rigor" name + question (one bullet of spec text) |
| A4 | "Residual / Coverage Justification" name + question (one bullet of spec text) |
| A5 | Dimension example list (type, layer, phase, agent, time-horizon, …) |
| A6 | "(not exhaustive)" disclaimer |
| A7 | Sequencing arrow (E → R → VR → Res) |
| A8 | Failure-mode citation: "applies failure mode #4 (Perspective Blindness) to frame-exit axis" |
| A9 | Failure-mode citation: "applies failure mode #5 (Clean Resolution Trap) to frame-exit axis" |
| A10 | Re-location corrective phrase (within Role Assessment) |
| A11 | Coverage proof: superset claim vs 03-07 |
| A12 | Coverage proof: Instance 1 — Existence-would-have-caught-Memory |
| A13 | Coverage proof: Instance 2 — Verdict-Rigor-would-have-flipped-warming |
| A14 | Coverage proof: Residual prevents meta-narrowing |
| A15 | Cognitive-move-axis-vs-dimension-axis defense |
| A16 | %100-improvement composition (assembles A11-A15) |
| A17 | Placement decision (inline within 03-07's second bullet) |
| A18 | Gating predicate (inherited from 03-07; not re-derived) |
| A19 | DRAFT-not-adopted header |
| A20 | Revival-trigger statement (≥3 frame-scope-capture instances) |
| A21 | Self-applicability check evidence (from Sensemaking Phase 2) |

### Atom grouping vs Step-2 boundaries

| Atom | Assigned to | Step-2 boundary correct? |
|---|---|---|
| A1-A4 (meta-category names + questions) | P1 (spec text) | ✓ |
| A5, A6 (dimension examples + non-exhaustiveness) | P1 | ✓ (E1 + E9; A5 nests under A1) |
| A7 (sequencing) | P1 (E5) | ✓ |
| A8, A9 (failure-mode citations) | P1 (E6) | ✓ |
| A10 (re-location corrective) | P1 (within E2) | ✓ |
| A11-A15 (coverage proofs + axis defense) | P2 | ✓ |
| A16 (%100-improvement composition) | P2 (E16) | ✓ |
| A17 (placement) | P3 (E8) | ✓ |
| A18 (gating) | P3 (E7) | ✓ |
| A19, A20 (DRAFT + revival) | P3 (E17, E18) | ✓ |
| A21 (self-applicability evidence) | P4 (E15) | ✓ |

All atoms group cleanly into the four pieces. No atom is split across pieces. No atom is in the wrong piece.

**Confidence: HIGH.** Top-down + bottom-up agree on boundaries.

---

## Step 4 — Express as Question Tree

### Piece P1 — Spec text drafting (the four meta-categories)

**Question:** What are the exact spec-text bodies for the four sequenced meta-categories that, when inlined within the Frame-exit Completeness perspective bullet, force separate consideration of Discovery / Relevance / Verdict-Rigor / Residual cognitive moves while preserving the perspective's full intent?

**Verification criteria:**
- [ ] Existence Enumeration has a question and an operational test that asks "list referents project-wide; check whether each is within the frame's scope"
- [ ] Role Assessment has a question and an operational test that asks "for each excluded referent, state role + test operation-coherence; re-locate if load-bearing"
- [ ] Verdict Rigor has a question and an operational test that applies failure mode #5's corrective to any out-of-scope verdict
- [ ] Residual / Coverage Justification has a question and an operational test that asks "any frame-exit concern not captured by the prior three?"
- [ ] Sequencing is explicit (numbered list 1-2-3-4)
- [ ] Dimension example list (type, layer, phase, agent, time-horizon, structural role) is nested under Existence Enumeration with "(not exhaustive)" disclaimer
- [ ] Failure-mode references are present: #4 at Existence Enumeration; #5 at Verdict Rigor
- [ ] Re-location corrective phrase is present within Role Assessment
- [ ] Each meta-category is its own paragraph (forced separation, not collapsible into one move)
- [ ] User-language alignment: "meta-categories" is the term used (not "sub-perspectives" or "axes")

### Piece P2 — Coverage proof + %100-improvement defense

**Question:** What structural argument demonstrates that the 4-meta-category design produces a %100 improvement over the 03-07 single-bullet baseline — namely, that every case the baseline catches is still caught, AND fired-but-shallow cases are additionally caught, AND meta-narrowing is structurally prevented, AND the cognitive-move axis is narrowing-resistant by construction?

**Verification criteria:**
- [ ] Superset-coverage claim against 03-07: every aspect of 03-07's drafted single-bullet question is preserved (specifically: project-wide referents check; inherited multi-value gating; failure-mode reference)
- [ ] Instance-1 coverage proof: applied to Memory, the design's Existence Enumeration step would have surfaced the md-file referent (using dimension examples to prompt type-axis enumeration)
- [ ] Instance-2 coverage proof: applied to warming, the design's Verdict Rigor step would have forced the counter-test "warmup IS the pre-condition layer; project has it; navigation's coherence depends on it" against the clean-boundary verdict, flipping it
- [ ] Anti-narrowing proof: Residual / Coverage Justification operates at the perspective level (different grain size from Verdict Rigor's per-verdict counter-test) and forces "any frame-exit concern not captured?" after the three named categories
- [ ] Cognitive-move-axis defense: the axis is finite-by-purpose (4 named moves derived from what the perspective is fundamentally doing — discover, assess relevance, test verdicts, check residual); contrast with frame-dimension axis (enumerable-in-principle, narrowing-prone)
- [ ] Composition: the four sub-proofs assemble into the explicit %100-improvement claim
- [ ] Degradation surface analysis: only application-time friction (a few minutes per fired-perspective application), bounded and reversible

### Piece P3 — Integration framing (placement + gating + Step-5 wrapper)

**Question:** How does the drafted spec text from P1 integrate into the existing Sensemaking spec structure — specifically the 03-07 refactor's second bullet — with explicit Step-5 conformance (DRAFT — not adopted) and adoption-deferral mechanics tied to the audit-revival threshold?

**Verification criteria:**
- [ ] Placement specified: inline within the second bullet of the 03-07 refactor's replacement of line 213 (Definitional / Frame-exit Completeness)
- [ ] Gating predicate explicitly inherited from 03-07 unchanged (conjunctive: inherited multi-value terms AND committed structures)
- [ ] DRAFT-not-adopted header present
- [ ] Revival trigger named (M4 audit produces ≥3 instances of frame-scope-capture patterns across distinct inquiries; this design ships at Part A's gate per 11-22 loop_diagnose)
- [ ] Step-5 conformance asserted (this inquiry produces a draft; adoption is gated by audit, not by this inquiry's commit)
- [ ] Cross-reference to 03-07 finding included
- [ ] Cross-reference to 11-22 loop_diagnose finding's threshold-tracking included

### Piece P4 — Self-applicability check evidence

**Question:** Has the 4-meta-category structure been meta-applied to its own design analysis (this inquiry), and what did the application reveal about coverage and narrowing-resistance?

**Verification criteria:**
- [ ] Existence Enumeration meta-applied: enumerated the project-wide referents of "Frame-exit Completeness," "meta-category," "cognitive move" used in this inquiry
- [ ] Role Assessment meta-applied: no excluded referents identified → no role-relevance violations
- [ ] Verdict Rigor meta-applied: this analysis produces no out-of-scope verdicts on artifacts → no Clean-Resolution-Trap risk
- [ ] Residual / Coverage Justification meta-applied: examined whether broader patterns (frame-scope capture across disciplines beyond Sensemaking) are excluded; bounding judged intentional, not a defect
- [ ] Result: design is self-applicable AND application passes coverage without surfacing a defect — strong validity signal preserved from Sensemaking Phase 2

---

## Step 5 — Map Interfaces

### Interface table

| # | Source | Target | What flows | Direction | Type |
|---|---|---|---|---|---|
| I1 | P1 (spec text drafting) | P2 (coverage proof) | The 4 drafted meta-category bodies + dimension examples + failure-mode refs | One-way | Read |
| I2 | P1 | P3 (integration framing) | The drafted spec text (the body that P3 wraps with placement/gating/DRAFT header) | One-way | Read |
| I3 | P1 | P4 (self-applicability evidence) | The 4-meta-category structure (P4 references the structure; doesn't redraft) | One-way | Read |
| I4 | P3 | P2 | Step-5 conformance context (adoption is gated by audit) — informs the %100-improvement defense's "draft-vs-adoption" framing | One-way | Read |
| I5 | (External — 03-07 finding) | P1, P3 | Gating predicate; refactor structure (Internal Consistency + Frame-exit Completeness); placement location | One-way | Read (external) |
| I6 | (External — 11-22 loop_diagnose finding) | P3 | Revival trigger thresholds (≥3 instances for Part A; ≥3 fired-but-shallow for Part B); mechanism-aware classification | One-way | Read (external) |
| I7 | (External — Sensemaking spec) | P1 | Failure mode #4 + #5 corrective text (cited in P1's failure-mode references) | One-way | Read (external) |
| I8 | (External — Sensemaking SV6) | P2 | The cognitive-move-axis decision + the four meta-category names | One-way | Read (Sensemaking output) |

All interfaces are one-way Reads. No bidirectional flows. No hidden coupling identified.

### Interface clarity check

- I1: explicit — drafted text passed forward
- I2: explicit — drafted text wrapped
- I3: explicit — structure referenced
- I4: explicit — Step-5 framing
- I5-I8: external inheritance; explicitly cited per project's cross-reference convention

No interface is implicit or assumed.

---

## Step 6 — Order by Dependency

### Dependency analysis

- P1 depends on: external inputs (I5, I7, I8). No internal dependencies on P2, P3, P4.
- P2 depends on: P1 (via I1), P3 (via I4). Must come AFTER P1; conceptually can come AFTER OR PARALLEL TO P3.
- P3 depends on: P1 (via I2), external (I5, I6). Must come AFTER P1.
- P4 depends on: P1 (via I3) + Sensemaking Phase 2 (already done). P4 mostly references existing material.

### Execution order

```
P1 (spec text drafting; HUB)
  │
  ├─→ P3 (integration framing; can start once P1 is drafted)
  │     │
  │     └─→ feeds P2 via I4
  │
  ├─→ P2 (coverage proof + %100-improvement defense; needs P1 + P3)
  │
  └─→ P4 (self-applicability evidence; can run parallel with P3)
```

**Concrete order:**

1. **P1 first** — spec text drafting (hub piece; everything else reads from it).
2. **P3 and P4 in parallel** — integration framing (P3) and self-applicability evidence (P4) both depend only on P1. They can be drafted simultaneously.
3. **P2 last** — coverage proof + %100-improvement defense reads from P1 (drafted text) and from P3 (Step-5 context). Must come after both.

No circular dependencies. The dependency order is linear at the top (P1 → {P2 with P3 first} ; P4 parallel).

---

## Step 7 — Self-Evaluate (7-dimension full evaluation)

This is a complex, high-stakes design inquiry (Sensemaking spec edit; %100-improvement claim). Apply the full 7-dimension evaluation.

| # | Dimension | Check | Result |
|---|---|---|---|
| 1 | **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1 can be drafted from Sensemaking SV6 alone. P2 can be drafted once P1 + P3 exist. P3 can be drafted from P1 + external (03-07, 11-22). P4 already done in Sensemaking; just packaged. Each piece is internally coherent. |
| 2 | **Completeness** | Do the pieces cover the whole? | **PASS.** P1 (spec text) + P2 (coverage + %100 defense) + P3 (integration framing) + P4 (self-applicability) covers everything Sensemaking SV6 handed off. No aspect falls between pieces. |
| 3 | **Reassembly** | Pieces + interfaces = whole? | **PASS.** Combining the four pieces produces the complete finding.md deliverable: drafted spec text wrapped with Step-5 framing, defended by coverage proof + %100 argument, validated by self-applicability evidence. |
| 4 | **Tractability** | Each piece small enough for a single focused pass? | **PASS.** P1 is the largest (4 meta-categories' spec text) but still tractable as one drafting pass. P2's structural argument is composed of 5-6 sub-claims (sub-tractable). P3 is small (placement + gating + DRAFT). P4 is small (packaging). |
| 5 | **Interface clarity** | All cross-piece flows explicit? | **PASS.** 8 interfaces (4 internal + 4 external); all one-way Reads; all explicitly typed. No hidden assumptions. |
| 6 | **Balance** | Complexity proportional across pieces? | **MOSTLY PASS** with note. P1 (spec text drafting) is the heaviest — has 7 atoms (A1-A7) plus failure-mode citations + dimension examples + non-exhaustiveness. P2 has 6 atoms (A11-A16). P3 has 4 atoms (A17-A20). P4 has 1 atom (A21; already executed). Distribution: ~9 : 6 : 4 : 1. P1 is ~50% of total complexity. This is acceptable because the spec text IS the heart of the deliverable; other pieces frame or defend it. Not so imbalanced that further decomposition of P1 is needed. |
| 7 | **Confidence** | Top-down and bottom-up agree on boundaries? | **PASS.** Step 3's atom-grouping check confirmed all 21 atoms group cleanly into the four pieces; no atom split; no atom misplaced. |

### Determination-mechanism piece check

The Q-tree includes a load-bearing concept whose use depends on runtime determination: "when the gating predicate fires." Is HOW the gating fires specified somewhere in the Q-tree?

- The gating predicate is INHERITED from 03-07 unchanged (E7 / A18). P3's verification criteria include "Gating predicate explicitly inherited from 03-07 unchanged." So the determination-mechanism is specified by reference — P3 carries the determination by pointing at 03-07's existing gating predicate.
- Q-tree includes the determination mechanism via P3's inheritance interface (I5). **PASS.**

Another runtime-determined concept: "Residual" — applicability is determined at runtime by checking "anything missing from the three prior?". Is HOW specified?

- Residual's spec text (within P1's E4) IS the determination mechanism — it asks the AI to check for uncaptured concerns. The mechanism is self-contained within Residual's body. **PASS.**

### Self-evaluation summary: 7/7 PASS

All dimensions PASS. Decomposition ready for handoff to Innovation.

---

## Final Deliverable Summary

### Coupling Map (summary)

- **Cluster A (P1 — spec text bodies):** 7 elements; high internal coupling via sequenced pipeline E5
- **Cluster B (P2 — coverage + %100 argument):** 6 elements; reads-only from Cluster A and Cluster C
- **Cluster C (P3 — integration framing):** 4 elements; 2 inherited unchanged from external sources
- **Singleton (P4 — self-applicability evidence):** 1 element; already executed in Sensemaking Phase 2

### Question Tree (summary)

| # | Question | Tractable? |
|---|---|---|
| P1 | What are the exact spec-text bodies for the 4 sequenced meta-categories? | Yes — single focused drafting pass |
| P2 | What structural argument demonstrates the design produces a %100 improvement? | Yes — compose 5 sub-claims into the explicit defense |
| P3 | How does the drafted spec text integrate into 03-07's refactor structure with Step-5 wrapper? | Yes — small framing pass |
| P4 | Has the design been meta-applied to itself and what did it reveal? | Yes — package existing evidence |

### Interface Map (summary)

- 4 internal one-way Reads (P1→P2; P1→P3; P1→P4; P3→P2)
- 4 external one-way Reads (03-07; 11-22; Sensemaking spec; Sensemaking SV6 of this inquiry)
- Zero bidirectional flows; zero hidden coupling

### Dependency Order

1. **P1 first** (hub — spec text drafting)
2. **P3 and P4 in parallel** (integration framing; self-applicability packaging)
3. **P2 last** (coverage proof + %100-improvement defense; reads from P1 + P3)

### Self-Evaluation (7/7 PASS)

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS (P1 carries ~50% complexity; acceptable — it IS the deliverable's core) |
| Confidence | PASS (top-down + bottom-up agree on boundaries) |

Determination-mechanism check: PASS (gating inherited via P3's I5; Residual self-contained within P1's E4).

**Decomposition ready for Innovation.**
