# Decomposition — MQ2 Shape Thoroughness Check

## Input

`devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/_branch.md` + `sensemaking.md`'s 6 SV6 commitments + 7 eliminations + 2 user-decision variables.

The whole to decompose: a verification finding with a binary substantive verdict (COMPLETE COVERAGE) + an OPTIONAL supplement (U1) the user can adopt or skip.

---

## Step 1 — Perceive Coupling Topology

### Element inventory

7 elements from sensemaking:

| ID | Element |
|---|---|
| V1 | Coverage verdict (COMPLETE COVERAGE on three named concerns + user's proposed refinement form) |
| V2 | Three traces (Concern A → mode 6 sentence 1+2; Concern B → 1+2+4; Concern C → 1+§4.2 predicate) |
| V3 | Residual concern characterization (STYLISTIC, not SUBSTANTIVE) |
| V4 | Optional supplement design (U1 = §2.4 worked-examples sub-block; U5 = skip) |
| V5 | U1 exact text (if user adopts) |
| V6 | User-decision framing (U1 vs U5; conservative default = U5) |
| V7 | Composition note (consistent with rule (b) inquiry's §2.3 sub-block if both adopted) |

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| V1 ↔ V2 | TIGHT | Verdict is supported by traces; both constitute the substantive coverage assessment |
| V1 ↔ V3 | MODERATE | Verdict is COMPLETE on substance; residual characterization is what isn't covered |
| V3 ↔ V4 | TIGHT | Supplement addresses the residual; both are stylistic-supplement concerns |
| V4 ↔ V5 | TIGHT | Design is instantiated by exact text |
| V4 ↔ V6 | TIGHT | Design includes the user-decision framing |
| V4 ↔ V7 | MODERATE | Composition note is contextual to the supplement design (only matters if U1 adopted) |
| V1 ↔ V4 | WEAK | Verdict stands alone; supplement is a conditional add-on |

### Coupling map

**Two clusters:**

- **Cluster A — VERIFICATION** (V1 + V2 + V3): coverage verdict + traces + residual characterization. The load-bearing finding output.
- **Cluster B — OPTIONAL SUPPLEMENT** (V4 + V5 + V6 + V7): the U1 design + exact text + user-decision framing + composition note. Conditional on user adoption.

Cross-cluster coupling A↔B: CONDITIONAL — Cluster B's framing depends on Cluster A's verdict being COMPLETE (which makes B optional rather than required).

---

## Step 2 — Detect Boundaries (Top-Down)

2 pieces:
- **P1** = Cluster A (Verification)
- **P2** = Cluster B (Optional Supplement)

The boundary is the verdict/supplement separation — verification stands alone; supplement is conditional. 2 pieces is the minimum-tractable decomposition for a finding that has both a load-bearing assessment and an optional add-on.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atom inventory

- Coverage verdict statement (V1) — atomic to P1.
- Trace A (Concern A → S1+S2) — atomic to P1.
- Trace B (Concern B → S1+S2+S4) — atomic to P1.
- Trace C (Concern C → S1+§4.2 predicate) — atomic to P1.
- Residual concern characterization (V3) — atomic to P1.
- U1 design (V4) — atomic to P2.
- U1 exact text — header + qualifying MQ2 example + non-qualifying MQ2 example (V5) — atomic to P2.
- User-decision framing (V6) — atomic to P2.
- Composition note with rule (b) inquiry (V7) — atomic to P2.

### Atom-cluster fit

| Atom group | Cluster assignment | Bottom-up agrees? |
|---|---|---|
| Verdict + 3 traces + residual characterization | P1 (Verification) | YES |
| Supplement design + exact text + framing + composition note | P2 (Optional Supplement) | YES |

Confidence: HIGH (top-down ↔ bottom-up AGREE on both boundaries).

---

## Step 4 — Express as Question Tree

### P1 — Verification

**Q1:** *How is mode 6's coverage of refinement #4's three named concerns verified, and what residual concern (if any) remains?*

**Verification criteria:**
- [ ] Coverage verdict stated explicitly: **COMPLETE COVERAGE** on three named concerns + the user's proposed refinement form.
- [ ] **Concern A (authoring sufficiency)** traced to mode 6 amendment sentence 1 (shape commitment: verdict {yes/no/uncertain} + kind specifier when yes) + sentence 2 (content-not-syntax tolerance).
- [ ] **Concern B (runner extraction target)** traced to mode 6 amendment sentence 1 + 2 + 4 (sentence 4 covers uncertain handling via §4.4 asymmetric-failure).
- [ ] **Concern C (mode 6 detection target)** traced to mode 6 amendment sentence 1 + the §4.2 mode 6 recognition column predicate.
- [ ] Residual concern characterized as **STYLISTIC** (worked examples would aid first-application illustration) **not SUBSTANTIVE** (the shape commitment is operationally complete; mode 6 sentence 1 explicitly acknowledges LLM-judgment substrate via "natural-language equivalents").
- [ ] Honest-assessment principle preserved: the verdict follows textual evidence; no motivated reasoning toward producing supplementary content.
- [ ] Distinction between mode 6's MECHANISM (shape commitment) and user's proposed mechanism (worked examples) made explicit: both eliminate the same cause (the example-gap), via different cause-eliminators, producing the same downstream effect (three concerns addressed).

### P2 — Optional Supplement (CONDITIONAL on user adoption)

**Q2:** *If the user adopts the OPTIONAL supplement (U1), what is the exact text, placement, user-decision framing, and composition note relative to the rule (b) inquiry's §2.3 sub-block?*

**Verification criteria:**
- [ ] **U1 placement:** worked-examples sub-block added to §2.4 immediately AFTER mode 6's amendment paragraph (i.e., after the new third paragraph mode 6's MUST adds) and BEFORE §2.4's final paragraph about runner-side-extraction-out-of-scope.
- [ ] **U1 sub-block structure:** header + qualifying MQ2 answer example + non-qualifying MQ2 answer example. Optional third element: uncertain example showing the third verdict state.
- [ ] **Same-item-shape contrast:** both examples on the SAME task statement (e.g., "Refactor the authentication module" — borrowing rule (b) inquiry's example item for cross-inquiry consistency). Only the MQ2 answer's shape compliance varies.
- [ ] **Qualifying example shows:** an MQ2 answer carrying both a verdict (yes/no/uncertain) AND, when verdict = yes, a kind specifier (one-sentence description of what kind of external context is needed).
- [ ] **Non-qualifying example shows:** an MQ2 answer missing the verdict OR (when verdict = yes) missing the kind specifier; the example states why this triggers LAYER 1 mode 6.
- [ ] **User-decision framing explicit:** U1 is OPTIONAL; U5 (skip supplement; apply only mode 6's MUST) is equally valid; finding presents both options + reasoning; user picks.
- [ ] **Composition note:** if U1 adopted, §2.3 has worked-examples sub-block (from rule (b) inquiry's MUST) AND §2.4 has worked-examples sub-block (from this inquiry's optional U1). Different sections; different commitments illustrated; structurally consistent. If U5 chosen, only §2.3's sub-block exists.
- [ ] **Self-containment:** no inquiry-folder references in U1 text; only intra-spec section pointers (§4.4 for uncertain example's asymmetric-failure note).
- [ ] **Lightweight:** U1 sub-block stays compact (~6-9 lines: header + 2-3 examples). Fits §2.4's existing multi-paragraph structure without bloat.
- [ ] **Conservative default explicit:** if user makes no choice, default = U5. The MUST that needs application is mode 6's; U1 is supplementary.

### Question-tree validity check

P1's question is purposeful and standalone — "how is coverage verified" is answerable without P2.
P2's question is purposeful and conditional — "if user adopts U1, what is it" is structurally dependent on P1's COMPLETE verdict (which makes P2 optional rather than required).

PASS.

---

## Step 5 — Map Interfaces

### Cross-piece flows

| ID | Source | Target | What flows | Direction | Flow type |
|---|---|---|---|---|---|
| **I1** | P1 (Verification) | P2 (Optional Supplement) | P1's residual characterization (STYLISTIC) is the precondition for P2's OPTIONAL framing. If P1 said SUBSTANTIVE, P2 would be REQUIRED, not optional. | one-way | structural precondition (verdict determines whether P2 is optional vs required) |
| **I2** | external (mode 6 inquiry's finding text) | P1 | P1's traces reference specific mode 6 amendment sentences (S1, S2, S4 + the §4.2 predicate). External evidence supports the verdict. | one-way | external trace inheritance |
| **I3** | external (rule (b) inquiry's §2.3 sub-block + mode 6 inquiry's §2.4 amendment) | P2 (if U1 adopted) | P2's composition note positions U1 alongside the rule (b) sub-block; placement is post-mode-6-amendment. | one-way | external composition reference |
| **I4** | external (existing §2.3 MQ2 template + §4.4 asymmetric-failure) | P2 (if U1 adopted) | P2's examples reference §2.3's MQ2 template (the question whose answer is illustrated) and §4.4 (the principle the uncertain example invokes). | one-way | intra-spec inheritance |

### Assumptions-not-data check (per Step 5 refinement note)

| Assumption | Risk | Mitigation |
|---|---|---|
| **A1** | P1's traces assume mode 6's amendment will actually be applied to the spec | If mode 6's MUST is never applied, the verdict's "COMPLETE COVERAGE" is conditional on future application | P1 explicitly notes that the verdict is on mode 6's COMMITTED CONTENT (the finding's text), regardless of application timing. Verdict is on the design; application is a separate step. |
| **A2** | P2's user-decision framing assumes the user reads the finding and explicitly chooses U1 or U5 | If the user doesn't explicitly choose, default by inaction is U5 (skip) | P2's framing explicitly states U5 as the conservative default. If user takes no action, applying only mode 6's MUST is the implicit choice. |
| **A3** | P2's composition note assumes both the rule (b) inquiry's MUST and this inquiry's U1 (if adopted) will be applied | If neither is applied, composition is moot; if only one, composition note still describes what's true | Composition note is conditional ("if both applied, then..."); doesn't fail if one or neither is applied. |
| **A4** | P1's "COMPLETE COVERAGE" verdict assumes the textual trace methodology is correct (i.e., the named concerns can be cleanly traced to specific sentences) | If concerns are diffuse or implicit in mode 6's text, the trace is fuzzy | P1's traces are sentence-level (S1, S2, S4 + §4.2 predicate) — each named concern maps to specific sentences. Methodology rigor is the finding's primary quality. |

All 4 assumptions identified and mitigated.

---

## Step 6 — Order by Dependency

### Dependency DAG

```
                  P1 (Verification: verdict + traces + residual)
                              │
                              ▼
                  P2 (Optional Supplement: U1 design + text + framing)
                              │
                              ▼
      User decision: U1 (adopt supplement) or U5 (skip supplement)
                              │
                              ▼
      R1 compile: apply mode 6's MUST + (if U1) this inquiry's U1
```

### Layer ordering

- **Layer 1 (foundation):** P1 — establishes the substantive verdict. Stands alone.
- **Layer 2 (conditional consumer):** P2 — depends on P1's COMPLETE verdict to be optional rather than required.
- **Layer 3 (user decision):** user picks U1 or U5 based on P2's framing.
- **Layer 4 (compile):** apply only what was committed (mode 6's MUST + optional U1).

### Circular-dependency check

No circular dependencies. P1 → P2 is one-way precondition; P2 is conditional on P1's verdict.

### Parallelism opportunity

P1 and P2 can be drafted in parallel during finding-authoring — P2's design + text doesn't depend on P1's exact wording; only on the verdict shape (COMPLETE vs PARTIAL). Both are independently authorable.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (always run)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the other existing? | **PASS** | P1 stands alone (verdict + traces are internally complete). P2 depends on P1's verdict for framing (optional vs required); with COMPLETE verdict, P2 is optional. Independence via interface I1. |
| **Completeness** | Do the pieces cover the whole? | **PASS** | P1 covers V1+V2+V3 (verdict + traces + residual). P2 covers V4+V5+V6+V7 (design + text + framing + composition). All 7 elements + honest-assessment principle. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS** | P1 + P2 (whether U1 adopted or skipped) = the finding's complete output. P1 alone = the finding if U5 is the implicit default. P1 + P2 with U1 adopted = the finding + supplementary refinement. |

### Determination-mechanism piece check (Step 7 refinement note)

Load-bearing runtime-determined concepts:

- **"User adopts U1 or U5"** — runtime-determined (at finding-read time). Mechanism piece: P2's user-decision framing (V6). PASS — P2 specifies the choice + the conservative default.
- **Coverage verdict** — NOT runtime-determined (one-time verification at sensemaking time). Not subject to this check.
- **U1 example content** — NOT runtime-determined (fixed at finding-author time). Not subject to this check.

### Full evaluation (4 additional dimensions for completeness)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Tractability** | Is each piece small enough for single focused pass? | **PASS** | P1: verdict + 3 traces + residual characterization (~10 lines in the finding). P2: U1 sub-block design + text + framing + composition note (~15-20 lines). Both well within single-focused-pass capacity. |
| **Interface clarity** | Are cross-piece flows explicit? | **PASS** | 4 interfaces I1-I4 (1 internal P1→P2; 3 external) + 4 assumptions A1-A4 mitigated. |
| **Balance** | Complexity roughly proportional? | **PARTIAL — intentional asymmetry** | P1 is smaller (verdict + traces); P2 is larger (design + text + framing + composition). The asymmetry is intentional given the inquiry's verification nature — the load-bearing output is P1's verdict; P2 is a conditional add-on. Acceptable for a verification finding. |
| **Confidence** | Do top-down and bottom-up agree? | **PASS — HIGH** | Both clusters identified by both top-down and bottom-up analysis. AGREE on both boundaries. |

**6/7 dimensions clean PASS + 1 PARTIAL flagged as intentional verification-nature asymmetry.**

---

## Final Deliverable

### 1. Coupling Map

2 high-coupling clusters with one CONDITIONAL cross-cluster coupling (interface I1: P1's verdict determines whether P2 is optional or required):
- **A = VERIFICATION** (V1 + V2 + V3) — verdict + traces + residual characterization
- **B = OPTIONAL SUPPLEMENT** (V4 + V5 + V6 + V7) — U1 design + exact text + framing + composition

### 2. Question Tree

2 pieces:
- **P1 — Q1:** How is mode 6's coverage of refinement #4's three named concerns verified, and what residual concern (if any) remains?
- **P2 — Q2:** If user adopts the OPTIONAL supplement (U1), what is the exact text, placement, framing, and composition note?

Each piece carries 7-10 verification criteria. Total: 17 verification criteria across 2 pieces.

### 3. Interface Map

4 cross-piece flows (I1-I4) — see Step 5 table. 1 internal (I1, P1 → P2 conditional precondition) + 3 external (I2 trace inheritance; I3 composition reference; I4 intra-spec inheritance).

### 4. Dependency Order

Layer 1 (foundation): P1 (Verification).
Layer 2 (conditional consumer): P2 (Optional Supplement; conditional on P1's COMPLETE verdict).
Layer 3 (user decision): U1 vs U5.
Layer 4 (compile): apply committed amendments.

No circular dependencies. Parallel-drafting feasible.

### 5. Self-Evaluation

3/3 minimum dimensions PASS. 3/4 full-evaluation dimensions PASS cleanly + balance flagged as intentional verification-nature asymmetry. Determination-mechanism check applied to 1 runtime-determined concept (user adoption decision) — PASS. Confidence: HIGH.

**Decomposition verdict: COMPLETE and SOUND. Ready for Innovation phase.**

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ Step 1 — Perceive Coupling Topology (element inventory + pairwise coupling + coupling map with 2 clusters)
- ✓ Step 2 — Detect Boundaries (Top-Down) (2 boundaries identified)
- ✓ Step 3 — Validate Boundaries (Bottom-Up) (atom inventory + atom-cluster fit + confidence scoring HIGH)
- ✓ Step 4 — Express as Question Tree (2 pieces, 2 questions, 17 verification criteria, validity check PASS)
- ✓ Step 5 — Map Interfaces (4 interfaces I1-I4 + Assumptions-not-data refinement check applied; 4 assumptions mitigated)
- ✓ Step 6 — Order by Dependency (DAG + layer ordering + circular-dependency check + parallelism note)
- ✓ Step 7 — Self-Evaluate (3 minimum dimensions PASS + Determination-mechanism check PASS + 4 full-evaluation dimensions: 3 clean PASS + 1 PARTIAL flagged as intentional)
- ✓ Final Deliverable (5 sections)

**Manual structural check: PASS (8/8 required structural elements present + both refinement notes applied + decomposition verdict COMPLETE and SOUND).**
