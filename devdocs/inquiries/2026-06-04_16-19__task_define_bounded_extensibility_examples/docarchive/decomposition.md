# Decomposition — Task-Define Rule (b) Operationalization Refinement

## Input

`devdocs/inquiries/2026-06-04_16-19__task_define_bounded_extensibility_examples/_branch.md` + `sensemaking.md`'s 8 SV6 commitments + 9 eliminations + 3 stylistic variables + 3 exact text amendments (rule (b) parenthetical + worked-examples sub-block + borderline-case clause).

The whole to decompose: a coordinated two-part structural amendment to `cognitive_harness/task-define/references/task-define.md` §2.3.

---

## Step 1 — Perceive Coupling Topology

### Element inventory

8 SV6 commitments + 1 cross-cutting concern:

| ID | Element |
|---|---|
| C1 | Operational test = variant-set divergence combined form (T1+T2+T3) |
| C2 | Wording = W2 inline operational test in rule (b) parenthetical |
| C3 | Example pair = Q1+N1 same-item contrast on "refactor the authentication module" |
| C4 | Placement = P1 (after a/b/c bullets, before §2.3's closing paragraph) |
| C5 | Mode 3 coherence = M3a (recognition column unchanged; inherits via existing wording) |
| C6 | Edge cases = EC1 lean-to-fire (asymmetric-failure-aligned borderline-case clause) |
| C7 | Qualitative anchor preserved ("materially shapes" wording stays in rule (b)) |
| C8 | Self-containment + lightweight preserved (cross-cutting; no inquiry-folder mentions; compact amendments) |
| Cross-cutting | Mode 3 coherence is a NON-CHANGE verification — mode 3 inherits §2.3's operational test via existing "three bounded-extensibility conditions" phrasing without amendment |

### Pairwise coupling assessment

| Pair | Coupling | Reason |
|---|---|---|
| C1 ↔ C2 ↔ C7 | TIGHT | All three live in rule (b)'s amended parenthetical; operational test + qualitative anchor are co-located |
| C3 ↔ C4 ↔ C6 | TIGHT | All three live in the worked-examples sub-block; the borderline-case clause naturally closes the sub-block |
| C1 ↔ C3 | MODERATE | Operational test (in P1) and examples (in P2) are linked by cross-reference: P1 says "worked examples below illustrate..."; P2 IS those examples |
| C5 (mode 3 unchanged) ↔ all | WEAK / non-change | Mode 3 inherits via the existing "three bounded-extensibility conditions" phrasing in its recognition column; no amendment in any piece |
| C8 ↔ all | CROSS-CUTTING | Self-containment + lightweight applied uniformly within both amendments |

### Coupling map (clusters + boundaries)

**Two high-coupling clusters:**

- **Cluster A — RULE (b) WORDING AMENDMENT** (C1 + C2 + C7): the parenthetical update; states the operational test inline; preserves the qualitative anchor. Lives in rule (b)'s bullet.
- **Cluster B — WORKED-EXAMPLES SUB-BLOCK** (C3 + C4 + C6): the same-item contrast examples + the borderline-case clause. Lives between the (a/b/c) bullets and §2.3's closing paragraph.

**Cross-cutting:** C5 (mode 3 unchanged) + C8 (self-containment + lightweight) apply uniformly within both amendments.

**Boundaries:**
- A↔B: MODERATE (A's "worked examples below illustrate..." pointer references B; A reads B as the target of the cross-reference; B IS the worked examples).
- Cross-cutting C5 + C8 don't create a separate piece; they are verification commitments applied within each piece's verification criteria.

---

## Step 2 — Detect Boundaries (Top-Down)

2 pieces:
- **P1** = Cluster A (Rule (b) wording amendment)
- **P2** = Cluster B (Worked-examples sub-block, including borderline-case clause)

2 pieces is the minimum-tractable decomposition for a coordinated two-text amendment. Below this (1 piece) would conflate two structurally separate text amendments to different parts of §2.3 (one inside a bullet; one as a free-standing sub-block). Above this (3+ pieces) would over-decompose what is structurally one sub-block in P2 (e.g., splitting P2 into Q1 + N1 + borderline-clause would split atoms that share a structural home and read together).

This mirrors the mode 6 inquiry's 2-piece decomposition (which had P1 §2.4 + P2 §4.2 covering shape commitment + detection predicate). Same pattern: operational layer + illustrative/detection layer.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atom inventory

- Rule (b) parenthetical text (text A from sensemaking) — atomic to P1.
- Operational test wording within parenthetical — atomic to P1.
- "Materially shapes" qualitative anchor preserved — atomic to P1.
- Pointer to worked examples ("worked examples below illustrate...") — atomic to P1.
- Closing sentence "A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded" — atomic to P1 (existing text preserved).
- Sub-block header "Worked examples illustrating rule (b):" — atomic to P2.
- Qualifying example Q1 (item + extension + answer + Rephrase variant divergence) — atomic to P2.
- Non-qualifying example N1 (same item + different extension + answer + variant invariance) — atomic to P2.
- Borderline-case clause (EC1; references §4.4 asymmetric-failure) — atomic to P2.
- Mode 3 unchanged commitment (C5) — cross-cutting; non-change verification in both pieces.

### Atom-cluster fit check

| Atom group | Cluster assignment | Bottom-up agrees? |
|---|---|---|
| Rule (b) parenthetical text + operational test + qualitative anchor + worked-examples pointer + closing sentence | P1 (Rule (b) Wording Amendment) | YES — all content of the rule (b) bullet amendment |
| Sub-block header + Q1 + N1 + borderline-case clause | P2 (Worked-Examples Sub-Block) | YES — all content of the sub-block addition |
| Mode 3 unchanged | Cross-cutting (not a piece) | YES — non-change verification documented in both pieces' compliance criteria |

No atoms split wrongly. No atoms grouped wrongly.

### Confidence scoring

Top-down 2 clusters ↔ Bottom-up 2 atom groups → **AGREE**. **HIGH CONFIDENCE** on both boundaries.

---

## Step 4 — Express as Question Tree

### P1 — Rule (b) Wording Amendment

**Q1:** *How does §2.3 rule (b)'s parenthetical become operational while preserving the qualitative anchor and pointing readers to the worked examples?*

**Verification criteria:**
- [ ] Rule (b) parenthetical AMENDED (not replaced); the existing "materially shapes how Rephrase produces alternative formulations for this item" remains as the parenthetical's first clause.
- [ ] Operational test added as the parenthetical's second clause: *"concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer."*
- [ ] Pointer to worked examples added: *"worked examples below illustrate qualifying and non-qualifying cases."*
- [ ] Closing sentence of rule (b) preserved verbatim: *"A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded."*
- [ ] Self-containment respected (no `devdocs/inquiries/...` references; only intra-spec section pointers if any).
- [ ] Mode 3 coherence preserved — §4.2 mode 3's "three bounded-extensibility conditions" phrasing continues to reference §2.3's rules (a/b/c), which now include the operational test; no mode 3 amendment required.
- [ ] Compact — the amended parenthetical is one sentence with multiple clauses + the closing sentence; does not expand into multi-paragraph content within the bullet.

### P2 — Worked-Examples Sub-Block

**Q2:** *How does the worked-examples sub-block illustrate rule (b) operationally — what are the qualifying and non-qualifying examples, how does the same-item contrast isolate the rule, and how is the borderline case handled?*

**Verification criteria:**
- [ ] Sub-block ADDED (not replaced); placed immediately after the §2.3 (a/b/c) bullets and before the closing paragraph about open-with-extension rationale.
- [ ] Header line present: *"Worked examples illustrating rule (b):"* (or stylistically equivalent header).
- [ ] **Qualifying example** present: item = *"Refactor the authentication module."* + extension = *"What's the unit of refactoring — function-level, class-level, module-level, or cross-module restructure?"* + the example's text demonstrates that the answer commits a granularity axis along which Rephrase's variants differ (small-scope variant differs from big-scope variant).
- [ ] **Non-qualifying example** present: SAME item = *"Refactor the authentication module."* + extension = *"What's the deadline for completion?"* + the example's text demonstrates that the answer commits a scheduling value that does NOT shape Rephrase's variant set (variants would be identical regardless of deadline).
- [ ] Same-item contrast preserved — both examples use the SAME task statement; only the extension varies.
- [ ] Content not syntax — both examples present extension answers as free-text descriptions, not as typed shapes.
- [ ] **Borderline-case clause** present (EC1; lean-to-fire): *"Borderline cases — when the constrains-Rephrase relation is genuinely ambiguous but rules (a) and (c) clearly pass — fire the extension. The asymmetric-failure principle at §4.4 favors over-coverage at Stage 2 over information-loss-in-the-dark at Stage 4."*
- [ ] Self-containment respected (no inquiry-folder references; only §4.4 intra-spec pointer).
- [ ] Sub-block stays compact — total length approximately 12-15 lines (header + 2 example blocks ≈ 4-5 lines each + borderline clause ≈ 2-3 lines).
- [ ] Lightweight respected — does not introduce sub-machinery beyond the example structure; no procedural logic; no runtime self-checks.

### Question-tree validity check

Each Q is purposeful and standalone-meaningful:
- Q1 ("how does the parenthetical become operational + preserve anchor + point to examples") is internally complete; doesn't require Q2 to make sense.
- Q2 ("how does the sub-block illustrate operationally with contrast + borderline") REFERENCES Q1's operational test via interface I1, but the question itself ("what content + structure for the sub-block") is standalone.

PASS.

---

## Step 5 — Map Interfaces

### Cross-piece flows

| ID | Source | Target | What flows | Direction | Flow type |
|---|---|---|---|---|---|
| **I1** | P1 (Rule (b) parenthetical) | P2 (Worked-examples sub-block) | P1's "worked examples below illustrate qualifying and non-qualifying cases" pointer references P2; the operational test stated in P1 is illustrated by P2's examples | one-way | structural cross-reference (within §2.3) |
| **I2** | external (existing §2.3 (a) and (c) bullets + closing paragraph) | P1 | P1's parenthetical exists within the (a/b/c) bullet structure; must respect adjacent bullets' positioning | one-way | structural placement constraint |
| **I3** | external (existing §2.3 closing paragraph about open-with-extension rationale) | P2 | P2's sub-block placed BEFORE the closing paragraph; placement must preserve the closing paragraph's role as section closer | one-way | placement constraint |
| **I4** | external (existing §4.4 asymmetric-failure principle) | P2 | P2's borderline-case clause references §4.4 by section pointer; intra-spec reference; self-containment respected | one-way | read-only inheritance |
| **I5** | external (existing §4.2 mode 3 recognition column) | both P1 + P2 | Mode 3's "three bounded-extensibility conditions" phrasing implicitly references §2.3's rules (a/b/c); the amendments preserve this inheritance without requiring mode 3 to change | one-way (mode 3 reads §2.3) | structural inheritance (non-change verification) |
| **I6** | external (15-39 §4 meaning-layer wording) | both P1 + P2 | P1's preserved "materially shapes" qualitative anchor inherits 15-39 §4 wording; P2's examples are consistent with the meaning-layer's bounded-extensibility intent | one-way (downstream) | meaning-layer inheritance |

### Assumptions-not-data check (per Step 5 refinement note)

| Assumption | Risk | Mitigation |
|---|---|---|
| **A1** | P1's "would cause Rephrase to produce a different set of variants" depends on the LLM being able to mentally simulate Rephrase's variant set with and without the candidate extension's answer | Under-capable LLMs may fail to apply the test; over-eager LLMs may over-apply | The same-item contrast in P2 provides concrete pattern-matching scaffolding the LLM can compare against; EC1 lean-to-fire is the safety default for ambiguous cases |
| **A2** | P2's "refactor the authentication module" example assumes the LLM has working understanding of software-engineering refactoring concepts | Domain narrowness; some users' task statements may be from very different domains where the refactoring example doesn't pattern-match | The example illustrates the rule's MECHANIC (axis-commitment vs non-axis-commitment), not its domain; alternative-domain examples (Q2 caching, Q4 onboarding) are available if empirical observation reveals the refactoring example is too narrow |
| **A3** | Mode 3 inheritance assumes the "three bounded-extensibility conditions" phrase remains in §4.2 mode 3 row | If a future inquiry refines mode 3, the inheritance may need to be made explicit | If mode 3 is later refined (e.g., by a propagation of the mode 6 pattern to modes 1-5), that future inquiry inherits this refinement's example structure and can amend mode 3's cross-reference at that time |
| **A4** | P2's compact size (~12-15 lines) assumes §2.3 can accommodate a sub-block without growing structurally beyond reader expectations | §2.3 grows beyond a one-screen section | §2.3 is already multi-paragraph (canonical questions + bounded-extensibility rule + closing paragraph); adding one structured sub-block consistent with the existing flow is within the section's existing scope |

All 4 assumptions identified and mitigated. Hidden coupling check PASS.

---

## Step 6 — Order by Dependency

### Dependency DAG

```
                  P1 (Rule (b) Wording Amendment)
                              │
                              ▼
                  P2 (Worked-Examples Sub-Block)
                              │
                              ▼
                R1 amendment compile (both edits applied to §2.3)
```

### Layer ordering

- **Layer 1 (foundation):** P1 — defines the operational test; P2 illustrates it.
- **Layer 2 (consumer):** P2 — depends on P1 via interface I1 (P1's pointer references P2). Must be authored after P1 so the cross-reference is valid.
- **Layer 3 (compile):** apply both edits to §2.3 of `cognitive_harness/task-define/references/task-define.md` (the parenthetical update first, then the sub-block addition; spec section ordering preserves this naturally — rule (b) is mid-§2.3, sub-block is post-bullets-pre-closing).

### Circular-dependency check

No circular dependencies. P2's content (Q1 + N1 + borderline clause) doesn't depend on P1; P2 is independently authorable in content. P1's cross-reference to P2 is via the phrase "worked examples below" — a positional pointer that resolves regardless of P2's exact wording.

### Parallelism opportunity

P1 and P2 content can be drafted in parallel (P2's content doesn't depend on P1's exact wording; P1's "worked examples below" is a positional pointer). At compile-time, the two edits to §2.3 are applied in section order (top-to-bottom).

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (always run)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the other existing? | **PASS** | P1's parenthetical is internally complete (operational test + qualitative anchor + pointer + closing sentence). P2's sub-block is internally complete (header + Q1 + N1 + borderline clause). P2's content doesn't depend on P1's exact wording; P1's pointer to P2 resolves via positional reference. |
| **Completeness** | Do the pieces cover all 8 SV6 commitments + cross-cutting? | **PASS** | P1 covers C1 (operational test) + C2 (W2 wording) + C7 (qualitative anchor preserved). P2 covers C3 (example pair Q1+N1) + C4 (placement P1) + C6 (borderline EC1). C5 (mode 3 unchanged) is cross-cutting non-change verification in both pieces. C8 (self-containment + lightweight) is cross-cutting verification in both pieces. 8/8 + cross-cutting accounted for. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS** | Given P1 + P2 both authored + I1 cross-reference correct + I2-I6 external routings to existing spec sections valid → §2.3 is amended with operationalized rule (b) + worked examples + borderline clause; mode 3 inherits via existing phrasing; the refinement is complete. A new reader of §2.3 sees the operational test in the rule and the examples illustrating it. |

### Determination-mechanism piece check (Step 7 refinement note)

Are there load-bearing concepts whose use depends on a runtime determination?

- **"constrains-Rephrase relation"** — runtime-determined by the LLM at Stage 2 when judging whether a candidate extension qualifies. Mechanism piece: P1's operational test ("would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer") + P2's same-item contrast examples specify HOW the LLM applies the determination. PASS.
- **"borderline (b)-case"** — runtime-determined by the LLM when the constrains-Rephrase relation is ambiguous. Mechanism piece: P2's borderline-case clause specifies the handling (fire per asymmetric-failure principle). PASS.
- **"variant-set divergence"** — runtime-determined by the LLM via mental simulation of Rephrase's variants. Mechanism piece: P1 names the test; P2's examples illustrate two variant-set divergence scenarios (Q1 = divergence visible; N1 = no divergence). PASS.

All runtime-determined load-bearing concepts have mechanism pieces. **PASS.**

### Full evaluation (4 additional dimensions for completeness)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Tractability** | Is each piece small enough to be worked on in a single focused pass? | **PASS** | P1: one bullet text update (≈ 3 sentences). P2: one sub-block addition (≈ 12-15 lines). Both well within single-focused-pass capacity. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | **PASS** | 6 interfaces I1-I6 explicit (1 internal P1→P2; 5 external read-only); 4 assumptions A1-A4 surfaced and mitigated. |
| **Balance** | Is complexity roughly proportional? Or is one piece 80%+? | **PARTIAL — minor asymmetry** | P1 is smaller (≈ 3 sentences); P2 is larger (≈ 12-15 lines). The asymmetry is intentional — P1 is a single-bullet update; P2 is a multi-element sub-block. Neither piece is 80%+ of the total work; ratio is ≈ 25/75 by line count which is acceptable for a 2-piece decomposition where the pieces are structurally different shapes (bullet vs sub-block). |
| **Confidence** | Do top-down and bottom-up agree? | **PASS — HIGH** | Top-down 2 clusters ↔ bottom-up 2 atom groups → AGREE. |

**6/7 dimensions PASS cleanly; balance flagged as minor asymmetry (intentional + acceptable).**

---

## Final Deliverable

### 1. Coupling Map

2 high-coupling clusters with one MODERATE cross-cluster coupling (interface I1: P1's "worked examples below" pointer references P2):
- **A = RULE (b) WORDING AMENDMENT** (C1 + C2 + C7) — lives in rule (b)'s amended parenthetical.
- **B = WORKED-EXAMPLES SUB-BLOCK** (C3 + C4 + C6) — lives between (a/b/c) bullets and §2.3's closing paragraph.

Cross-cutting C5 (mode 3 unchanged) + C8 (self-containment + lightweight) applied within both.

### 2. Question Tree

2 pieces:
- **P1 — Q1:** How does §2.3 rule (b)'s parenthetical become operational while preserving the qualitative anchor and pointing readers to the worked examples?
- **P2 — Q2:** How does the worked-examples sub-block illustrate rule (b) operationally with same-item contrast and borderline-case handling?

Each piece carries 7-10 verification criteria. Total: 17 verification criteria across the 2 pieces.

### 3. Interface Map

6 cross-piece flows (I1-I6) — see Step 5 table. 1 internal (I1, P1 → P2) + 5 external (I2-I3 placement constraints; I4-I5 reference inheritance; I6 meaning-layer inheritance).

### 4. Dependency Order

Layer 1 (foundation): P1 (Rule (b) Wording Amendment).
Layer 2 (consumer): P2 (Worked-Examples Sub-Block; depends on P1 via I1 cross-reference).
Layer 3 (compile): apply both edits to §2.3 of `cognitive_harness/task-define/references/task-define.md`.

No circular dependencies. Parallel-drafting feasible; sequential compile by section order.

### 5. Self-Evaluation

3/3 minimum dimensions PASS. 3/4 full-evaluation dimensions PASS cleanly + balance flagged as minor intentional asymmetry. Determination-mechanism check applied to 3 runtime-determined concepts — all PASS. Confidence: HIGH (top-down ↔ bottom-up AGREE on both boundaries).

**Decomposition verdict: COMPLETE and SOUND. Ready for Innovation phase.**

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ Step 1 — Perceive Coupling Topology (element inventory + pairwise coupling assessment + coupling map with 2 clusters + cross-cutting)
- ✓ Step 2 — Detect Boundaries (Top-Down) (2 boundaries identified; minimum-tractable + mode 6 inquiry parallel cited)
- ✓ Step 3 — Validate Boundaries (Bottom-Up) (atom inventory + atom-cluster fit + confidence scoring HIGH)
- ✓ Step 4 — Express as Question Tree (2 pieces, 2 questions, 17 verification criteria, validity check PASS)
- ✓ Step 5 — Map Interfaces (6 interfaces I1-I6 + Assumptions-not-data refinement check applied; 4 assumptions surfaced and mitigated)
- ✓ Step 6 — Order by Dependency (DAG + layer ordering + circular-dependency check + parallelism note)
- ✓ Step 7 — Self-Evaluate (3 minimum dimensions PASS + Determination-mechanism check PASS for 3 runtime-determined concepts + 4 full-evaluation dimensions: 3 clean PASS + 1 PARTIAL flagged as intentional)
- ✓ Final Deliverable (5 sections: Coupling Map + Question Tree + Interface Map + Dependency Order + Self-Evaluation)

**Manual structural check: PASS (8/8 required structural elements present + both refinement notes applied + decomposition verdict COMPLETE and SOUND).**
