# Decomposition — Task-Define §4.7 Confidence Rubric

## Input

`_branch.md` + `sensemaking.md`'s 7 SV6 commitments + exact text amendments for the rubric sub-block.

The whole to decompose: a single §4.7 sub-block amendment with two parts — the 3-level rubric definitions + a cross-verdict applicability note.

---

## Step 1 — Perceive Coupling Topology

### Element inventory

7 elements + 1 cross-cutting:

| ID | Element |
|---|---|
| V1 | Discriminator dimension (LAYER 1 mode boundary proximity primary + per-operation output coherence secondary) |
| V2 | HIGH definition |
| V3 | MED definition |
| V4 | LOW definition |
| V5 | Cross-verdict applicability note (all 9 combinations + common + less-common-valid named) |
| V6 | Placement (sub-block after verdict-shape paragraph, before FLAG conditions list) |
| V7 | Self-containment + lightweight compliance (cross-cutting; no inquiry-folder mentions; compact) |

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| V1 ↔ V2/V3/V4 | TIGHT | Discriminator is the shared axis the 3 definitions live on |
| V2 ↔ V3 ↔ V4 | TIGHT | Three levels form an ordered gradient (count + severity) |
| V5 ↔ V2/V3/V4 | MODERATE | V5 references the level meanings but doesn't define them; cross-reference within sub-block |
| V6 ↔ all | CROSS-CUTTING | Single placement decision for the entire sub-block |
| V7 ↔ all | CROSS-CUTTING | Compliance applied uniformly within both pieces |

### Coupling map

**Two clusters:**
- **Cluster A — RUBRIC DEFINITIONS** (V1+V2+V3+V4): the 3-level rubric proper (discriminator + HIGH + MED + LOW)
- **Cluster B — CROSS-VERDICT NOTE** (V5): the application-pattern paragraph

Cross-cutting V6 (placement) + V7 (compliance) applied within both pieces.

A↔B coupling: MODERATE — P2 references P1's level meanings via natural-language pointers ("HIGH-confidence-PROCEED" assumes HIGH is defined).

---

## Step 2 — Detect Boundaries (Top-Down)

2 pieces:
- **P1** = Cluster A (Rubric Definitions)
- **P2** = Cluster B (Cross-Verdict Applicability Note)

2 is the minimum-tractable decomposition for the §4.7 sub-block. The two parts are visually separated (bullet list + paragraph) and conceptually distinct (defining levels vs naming application patterns). 1 piece would conflate them; 3+ would over-decompose what is structurally one sub-block.

Pattern mirrors the prior 2-piece decompositions (mode 6: shape + predicate; rule (b): rule wording + worked examples; this inquiry: rubric definitions + cross-verdict note). Same structural form.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atom inventory

- Sub-block header "Confidence rubric:" — atomic to P1.
- HIGH bullet text — atomic to P1.
- MED bullet text — atomic to P1.
- LOW bullet text — atomic to P1.
- §4.2 reference (in HIGH bullet) — atomic to P1.
- Cross-verdict applicability paragraph — atomic to P2.
- Common combinations enumeration (HIGH-PROCEED / MED-FLAG / LOW-RE-RUN) — atomic to P2.
- Less-common-but-valid combinations enumeration (LOW-PROCEED / HIGH-FLAG) — atomic to P2.
- "Confidence and verdict are independently determined" statement — atomic to P2.

### Atom-cluster fit

| Atom group | Cluster | Bottom-up agrees? |
|---|---|---|
| Header + 3 level bullets + §4.2 reference | P1 (Rubric Definitions) | YES — all definitional content |
| Cross-verdict paragraph + combinations + independence statement | P2 (Cross-Verdict Note) | YES — all application-pattern content |

Confidence: HIGH (top-down ↔ bottom-up AGREE).

---

## Step 4 — Express as Question Tree

### P1 — Rubric Definitions

**Q1:** *How does the §4.7 sub-block define HIGH/MED/LOW confidence levels using LAYER 1 mode boundary proximity (primary, objective) + per-operation output coherence (secondary, subjective)?*

**Verification criteria:**
- [ ] Sub-block header present: *"Confidence rubric:"*
- [ ] **HIGH** bullet text: *"no LAYER 1 mode boundary (§4.2) was approached during the invocation, and each operation's output was internally coherent without close calls. The verdict reflects a clean run."*
- [ ] **MED** bullet text: *"one LAYER 1 mode boundary was approached but did not fire, or one operation's output had an observable close call that did not propagate to a mode boundary. The verdict reflects one friction point."*
- [ ] **LOW** bullet text: *"multiple LAYER 1 mode boundaries were approached, or one was very near firing, or multiple operations had close calls. The verdict reflects compound friction."*
- [ ] Cross-level coherence: HIGH > MED > LOW on the boundary-proximity axis (count + severity gradient).
- [ ] Both discriminator axes present: primary LAYER 1 mode boundary (objective) + secondary per-operation coherence (subjective).
- [ ] Reference to §4.2 by section pointer only — no inquiry-folder names, no design-history pointers.
- [ ] Compact: header + 3 bullets ≈ 6-7 lines.

### P2 — Cross-Verdict Applicability Note

**Q2:** *How does the §4.7 sub-block address cross-verdict applicability — naming common verdict×confidence combinations + signaling all 9 pairings are valid without committing defaults?*

**Verification criteria:**
- [ ] Paragraph follows the 3-bullet rubric definitions.
- [ ] Opening statement: *"The rubric applies to all three verdicts (PROCEED, FLAG, RE-RUN); confidence and verdict are independently determined."*
- [ ] **Common combinations** named with brief reasoning: HIGH-PROCEED (clean run; output ready for downstream consumption), MED-FLAG (one boundary approached and one fired; downstream review warranted), LOW-RE-RUN (structural failure; low confidence in any verdict claim).
- [ ] **Less-common-but-valid combinations** named: LOW-PROCEED (process succeeded but LLM perceives compound internal friction), HIGH-FLAG (very confident the flagged condition exists).
- [ ] No defaults committed; the paragraph names common patterns without precluding rare ones.
- [ ] No inquiry-folder mentions; only intra-spec references (verdict names from §4.7).
- [ ] Compact: ~3-4 lines.

### Question-tree validity check

Both questions standalone-meaningful. P1's question is internally complete; P2's question references P1's levels but is structurally its own concern (application pattern, not level definition).

PASS.

---

## Step 5 — Map Interfaces

### Cross-piece flows

| ID | Source | Target | What flows | Direction | Flow type |
|---|---|---|---|---|---|
| **I1** | P1 (Rubric Definitions) | P2 (Cross-Verdict Note) | P2 references P1's level meanings via natural-language pointers ("HIGH-confidence-PROCEED" etc.); cross-reference within the sub-block | one-way | structural cross-reference (intra-sub-block) |
| **I2** | external (existing §4.2 LAYER 1 mode list) | P1 | P1's HIGH/MED/LOW definitions reference §4.2 mode boundaries as the primary discriminator source | one-way | section-pointer inheritance |
| **I3** | external (existing §4.7 verdict-shape commitment + PROCEED/FLAG/RE-RUN definitions) | P1 + P2 | The rubric defines confidence for the already-committed verdict structure; both pieces operate within §4.7's existing structure | one-way | intra-section structural inheritance |
| **I4** | external (existing §4.1 LAYER 1/LAYER 2 framework + §4.4 asymmetric-failure principle) | P1 | P1's choice of LAYER 1 boundary (not LAYER 2) as discriminator + the supplementary coherence axis derive from §4.1 (LAYER 1 = per-invocation) and §4.4 (asymmetric-failure-aligned grading) | one-way | framework inheritance |

### Assumptions-not-data check

| Assumption | Risk | Mitigation |
|---|---|---|
| **A1** | P1's "LAYER 1 mode boundary" wording assumes §4.2 mode list remains stable | If §4.2 modes are revised (added/removed), the rubric's signal source changes | §4.2 is project-rooted; mode-list revisions are empirically warranted post-Bootstrap; supersession convention handles future change |
| **A2** | P2's common combinations assume the listed pairings ARE common in practice | Bootstrap-state means no observed evidence yet | Combinations are reasonable from structural reasoning (HIGH-PROCEED natural; LOW-RE-RUN natural); revisable at Mature Operation if empirical evidence shows different patterns |
| **A3** | P1's "close call" supplementary discriminator assumes LLM-judgment consistency across invocations | Different LLMs may interpret "close call" differently → confidence drift | The primary objective discriminator (LAYER 1 boundary proximity) anchors most cases; "close call" is secondary; drift is bounded |

All 3 assumptions identified and mitigated.

---

## Step 6 — Order by Dependency

### Dependency DAG

```
                  P1 (Rubric Definitions)
                              │
                              ▼
                  P2 (Cross-Verdict Note)
                              │
                              ▼
      R1 compile: apply sub-block to §4.7 of runtime spec
```

### Layer ordering

- **Layer 1:** P1 — defines levels; foundation.
- **Layer 2:** P2 — references P1's levels.
- **Layer 3:** apply the combined sub-block to `cognitive_harness/task-define/references/task-define.md` §4.7.

### Circular-dependency check

No circular dependencies. P1 standalone; P2 references P1.

### Parallelism

P1 and P2 content can be drafted in parallel (P2's combinations reference P1's level names but not specific wording).

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Independence** | Each piece workable separately? | **PASS** | P1 standalone; P2 references P1 via interface I1 — cross-reference is positional, not content-coupled |
| **Completeness** | All 7 elements + cross-cutting covered? | **PASS** | P1 covers V1+V2+V3+V4; P2 covers V5; V6 (placement) + V7 (compliance) cross-cutting within both |
| **Reassembly** | Sub-block reconstructs from pieces + interfaces? | **PASS** | P1 + P2 + I1 cross-reference + §4.2/§4.7 external inheritance → complete sub-block ready to insert at U1 placement |

### Determination-mechanism piece check

Runtime-determined concepts:
- **"LAYER 1 mode boundary approached"** — runtime-determined at end-of-invocation self-check. Mechanism piece: §4.2 mode list (referenced by P1) supplies the boundary set; P1 specifies "approached" as part of the rubric's pattern-match.
- **"Close call"** — runtime-determined per operation. Mechanism: LLM judgment; P1 names it but doesn't decompose further.
- **"Common combination"** — not runtime-determined; structural description.

PASS — mechanism pieces present for runtime-determined concepts.

### Full evaluation

| Dimension | Pass/Fail | Reason |
|---|---|---|
| **Tractability** | PASS | P1: header + 3 bullets ≈ 6 lines. P2: 1 paragraph ≈ 3-4 lines. Both small. |
| **Interface clarity** | PASS | 4 interfaces + 3 assumptions mitigated. |
| **Balance** | PARTIAL — intentional | P1 slightly larger than P2 (rubric is the load-bearing definition; note is supplementary). Acceptable. |
| **Confidence** | HIGH | Top-down ↔ bottom-up AGREE. |

6/7 clean PASS + 1 intentional PARTIAL.

---

## Final Deliverable

### 1. Coupling Map

2 clusters with MODERATE A↔B coupling (P2 references P1's level meanings):
- A = RUBRIC DEFINITIONS (V1+V2+V3+V4)
- B = CROSS-VERDICT NOTE (V5)

Cross-cutting: V6 placement + V7 compliance within both.

### 2. Question Tree

2 pieces, 2 questions, 15 verification criteria total.

### 3. Interface Map

4 interfaces (I1 internal P1→P2; I2-I4 external section-pointer inheritance). 3 assumptions A1-A3 mitigated.

### 4. Dependency Order

P1 → P2 → compile. No circular dependencies.

### 5. Self-Evaluation

3/3 minimum PASS. 3/4 full-eval clean PASS + 1 intentional PARTIAL on balance.

**Decomposition verdict: COMPLETE and SOUND. Ready for Innovation phase.**

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ Step 1 — Perceive Coupling Topology
- ✓ Step 2 — Detect Boundaries
- ✓ Step 3 — Validate Bottom-Up (HIGH confidence)
- ✓ Step 4 — Express as Question Tree (2 pieces, 15 verification criteria)
- ✓ Step 5 — Map Interfaces (4 interfaces + 3 assumptions)
- ✓ Step 6 — Order by Dependency
- ✓ Step 7 — Self-Evaluate (3/3 minimum + 4/4 full with intentional balance PARTIAL)
- ✓ Final Deliverable (5 sections)

**Manual structural check: PASS (8/8 required + both refinement notes applied).**
