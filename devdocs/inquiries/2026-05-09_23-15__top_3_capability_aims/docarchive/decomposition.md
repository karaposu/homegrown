# Decomposition: Top-3 Capability Aims (10x Multipliers)

## User Input

devdocs/inquiries/2026-05-09_23-15__top_3_capability_aims/_branch.md

Sensemaking SV6 produced a stable top-3 with multi-axis labeling. This decomposition partitions the user-facing verdict-communication space.

---

## Step 1 — Coupling Topology

### Elements

- **e1**: Per-capability concrete first-build-step spec (3 sub-elements: R10 / R3+R4 / R12)
- **e2**: Scenario recommendation (which of 3 named scenarios fits which user state)
- **e3**: Excluded-items disclosure (R1+R2 Baldwin closing; R11 tool use)
- **e4**: Verdict communication artifact (finding.md shape; preserves multi-axis labeling + dependency graph + phase-tag)

### Coupling matrix

| | e1 | e2 | e3 | e4 |
|---|---|---|---|---|
| e1 | — | mod (sub-spec depends partly on scenario) | weak | high (synthesis) |
| e2 | | — | weak | high (synthesis) |
| e3 | | | — | mod (synthesis) |
| e4 | | | | — |

### Reading

- e4 is synthesis sink consuming e1, e2, e3.
- e1 has internal sub-structure (3 capabilities → 3 concrete first-build specs).
- e2 ↔ e1 moderate coupling — the scenario you pick affects which capability you start with first.
- e3 is largely independent (just disclosure language).

### Clusters

- Cluster A: {e1} with three sub-pieces (per-capability concrete spec)
- Cluster B: {e2} (scenario recommendation)
- Cluster C: {e3} (excluded-items disclosure)
- Cluster D: {e4} (synthesis sink)

---

## Step 2 — Boundaries

Four-cluster cut at standard cluster boundaries. Within Cluster A, three natural sub-pieces:
- A.1: R10 concrete first-build spec
- A.2: R3+R4 concrete first-build spec (specifically R4 sequential meta-loop v1 since R3 is deferred behind it)
- A.3: R12 concrete first-build spec

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

Within Cluster A:
- "Eval harness shape (task-set choice / scoring / per-question logging)" → A.1
- "Sequential meta-loop runner shape (state representation / handoff / human-select-next)" → A.2
- "Vector retrieval over inquiries (DB choice / embedding model / retrieval rule)" → A.3

Within Cluster B:
- "All-parallel scenario fit" → B
- "R10-first-sequence scenario fit" → B
- "R3+R4-first-architectural scenario fit" → B

Within Cluster C:
- "R1+R2 (Baldwin closing) deprioritization framing" → C
- "R11 (tool use) deprioritization framing" → C

Within Cluster D:
- "Artifact shape preserving multi-axis + dependency graph + phase-tag" → D

Atoms cluster cleanly. Confidence HIGH.

---

## Step 4 — Question Tree

### Q1 — Per-capability concrete first-build spec

**Question:** For each of R10, R3+R4, R12, what's the concrete first-build step (low-cost MVP) that the user can start this month?

#### Sub-pieces

##### Q1.1 — R10 concrete first-build spec

**Question:** What's the minimum-viable benchmark setup (task set / model / baselines / scoring) that produces useful WON'T-MATTER signal in ~1-2 weeks?

**Verification:**
- [ ] Task set named (e.g., GPQA-Diamond ~198 questions; or smaller subset like 100 questions)
- [ ] Baseline conditions named (which use published; which require local re-runs)
- [ ] Scoring methodology named (exact-match / rubric / multi-judge)
- [ ] Per-question logging structure named
- [ ] Total cost estimate (hours + tokens)

##### Q1.2 — R3+R4 concrete first-build spec (sequential meta-loop v1)

**Question:** What's the minimum-viable sequential meta-loop runner (per `meta_loop.md` §6 "First Buildable Form") that produces useful traversal evidence in ~2-4 weeks?

**Verification:**
- [ ] State representation shape (extension of `_state.md` or new `_meta_state.md`)
- [ ] Navigation handoff shape (how /navigation feeds the runner)
- [ ] Human-select-next mechanism (simple prompt / structured input / etc.)
- [ ] Stop criterion (sequence length cap / convergence / human-call)
- [ ] Evidence what to log per probe (so meta-state actually accumulates useful traversal data)

##### Q1.3 — R12 concrete first-build spec

**Question:** What's the minimum-viable persistent cross-inquiry memory + retrieval (vector DB / embedding model / retrieval rule) over the existing ~30-inquiry corpus, deliverable in ~1 week?

**Verification:**
- [ ] Vector DB choice (sqlite-vec / chroma / qdrant / etc.)
- [ ] Embedding model choice
- [ ] What gets indexed (full inquiries / findings only / sub-section level / etc.)
- [ ] Retrieval rule (semantic-similarity / hybrid / etc.)
- [ ] How the retrieved context surfaces in new inquiry runs (manual lookup / auto-prefix / etc.)

#### Q1 top-level verification

- [ ] Each sub-piece has a concrete first-build spec sufficient for the user to start
- [ ] Cost estimate per sub-piece (hours + dependencies)
- [ ] Each sub-piece can be built without blocking the others

### Q2 — Scenario recommendation

**Question:** For each of the three named scenarios (all-parallel / R10-first-sequence / R3+R4-first-architectural), what user-state makes that scenario the right pick?

**Verification:**
- [ ] Trigger condition per scenario (when does this scenario fit?)
- [ ] Cost-per-scenario named
- [ ] Risk-per-scenario named
- [ ] Most-likely-recommended scenario named with reasoning

### Q3 — Excluded-items disclosure language

**Question:** How is R1+R2 (Baldwin cycle closing) and R11 (tool use) surfaced in the finding so the user knows they were considered-and-deprioritized for explicit reasons (not overlooked)?

**Verification:**
- [ ] R1+R2 framing: "more important long-term but multi-year + depends on /intuit Phase A maturing first"
- [ ] R11 framing: "categorical capability addition, not 10x of existing; situational"
- [ ] Both surface in finding's Reasoning section (not buried)
- [ ] Revival triggers named per excluded item

### Q4 — Verdict communication artifact

**Question:** What's the shape of the user-facing artifact that preserves the top-3 ranking + multi-axis labeling + honest 10x plausibility + dependency graph + phase-tag + scenario recommendations + excluded-items disclosure at lowest cost?

**Verification:**
- [ ] One artifact shape named
- [ ] Top-3 with multi-axis labeling visible
- [ ] Dependency graph visible
- [ ] Phase-tag visible
- [ ] Scenario recommendations visible
- [ ] Excluded items visible
- [ ] User's conversational voice respected

---

## Step 5 — Interfaces

| Source | Target | What flows | Direction |
|---|---|---|---|
| Q1 (all sub-pieces) | Q4 | Per-capability concrete specs | one-way |
| Q2 | Q4 | Scenario recommendations | one-way |
| Q3 | Q4 | Excluded-items disclosure language | one-way |
| Q1 ↔ Q2 | (weak coupling) | Scenario choice may inform which capability's spec is most relevant | weak bidirectional |

No hidden coupling.

---

## Step 6 — Dependency Order

```
{Q1 (with Q1.1 ∥ Q1.2 ∥ Q1.3 sub-pieces), Q2, Q3} ∥ parallel  →  Q4 synthesis
```

---

## Step 7 — Self-Evaluation

### Minimum (3 dim)

| Dimension | Result |
|---|---|
| Independence | **PASS** — Q1 sub-pieces independent (different capabilities); Q2/Q3 independent of Q1; Q4 by-design synthesis. |
| Completeness | **PASS** — covers per-capability spec + scenario + excluded + artifact. |
| Reassembly | **PASS** — pieces compile into user-facing artifact with all required content. |

### Determination-mechanism check

Load-bearing concepts with runtime determination:
- "Scenario fit" (Q2): runtime determination = which user-state applies. Q2 specifies. **Included.**
- "Concrete first-build" (Q1 sub-pieces): each sub-piece IS a concrete spec. **Included.**

**PASS.**

### Full (4 dim)

Tractability PASS / Interface clarity PASS / Balance PASS-with-caveat (Q1 has 3 sub-pieces; Q2/Q3/Q4 are smaller — Q1 is ~50% of weight, justified by being load-bearing) / Confidence HIGH.

### HONEST self-assessment per audit framework

**What sensemaking SV6 already named:**
- Top-3 picks with multi-axis labels.
- Dependency graph.
- Phase-tag.
- Excluded items with rationale.
- Three usage scenarios.

**What this decomposition adds:**
1. **Q1 sub-pieces (3 concrete first-build specs)** — sensemaking named the picks; D partitions the implementation-spec for innovation to develop. **MEDIUM partitioning value** (innovation needs concrete specs to generate proposals against).
2. **Q2, Q3, Q4** — formalization of structure already implicit in SV6.

**Honest value tag: LOW-MEDIUM.** Q1 sub-pieces add modest value; rest is formalization. Consistent with the recurring pattern across recent inquiries (5th MEDIUM-or-lower D in a row when sensemaking has done substantial work).

**Self-application observation:** the prior audit's Q1.2-T4 trigger ("S has named partition fully") would likely have triggered SKIP for this D. Sensemaking SV6 named the top-3 with multi-axis labels, dependencies, phase-tag, and 3 scenarios — there's not much partitioning left for D to do beyond pulling per-capability specs into sub-pieces. This D ran ceremonially per the always-pipeline rule, with the Q1 sub-pieces being the only genuine partitioning value-add.

This continues to be evidence FOR the prior audit's D-CONDITIONAL recommendation — when S does substantial work, D's value is reliably bounded.

### Self-reference notes

This is the 5th MEDIUM-or-lower D across recent inquiries. The pattern is consistent and provides additional self-application data for the prior audit's verdict.

---

## Final Deliverable

### 1. Coupling Map

Four clusters; Q1 has 3 sub-pieces.

### 2. Question Tree

- **Q1** — Per-capability concrete first-build spec
  - Q1.1 — R10 (benchmark) concrete spec
  - Q1.2 — R3+R4 (sequential meta-loop v1) concrete spec
  - Q1.3 — R12 (persistent memory) concrete spec
- **Q2** — Scenario recommendation
- **Q3** — Excluded-items disclosure language
- **Q4** — Verdict communication artifact

### 3. Interface Map

- {Q1, Q2, Q3} → Q4 (synthesis)
- Q1 ↔ Q2 (weak)

### 4. Dependency Order

```
{Q1 (Q1.1 ∥ Q1.2 ∥ Q1.3), Q2, Q3} ∥ parallel  →  Q4
```

### 5. Self-Evaluation

3-dim PASS + Determination-mechanism PASS + 4 full-dim (Tractability PASS, Interface PASS, Balance PASS-with-caveat, Confidence HIGH).

**Honest value tag: LOW-MEDIUM.** Q1's three sub-pieces add modest partitioning; rest is formalization. Consistent with corpus-typical D value — 5th in a row when S has done substantial work. Continues to provide self-application evidence FOR the prior audit's D-CONDITIONAL recommendation.
