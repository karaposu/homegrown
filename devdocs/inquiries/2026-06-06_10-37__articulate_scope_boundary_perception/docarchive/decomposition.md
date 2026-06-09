# Decomposition — articulate_simple: Scope-Boundary Perception

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/_branch.md`

---

## Step 1 — Perceive Coupling Topology

Sensemaking SV6 yielded 10 commitments + Add-MQ4 verdict + 4-type taxonomy expansion. Coupling analysis identifies 3 natural clusters — the standard Verdict/Essence/Application pattern from prior task-define inquiries.

### Cluster identification

**Cluster A — Verdict + Essence + Taxonomy + Constraints + Scope (TIGHT internal coupling)**

- SV6-1 MQ4 as 4th base meta-question (the verdict)
- SV6-2 4th type "Boundary" added (the taxonomy expansion)
- SV6-3 MQ4 essence: perceives explicit-exclusion (the meaning)
- SV6-4 substrate-bounded (the source constraint)
- SV6-9 lightness preserved (the architecture constraint)
- SV6-10 project-level conventions DEFERRED (the scope boundary of MQ4 itself)

Tightly coupled: all describe WHAT MQ4 IS, what bounds it, and what's explicitly out of its scope. Together they form the foundational what-and-why answer.

**Cluster B — MQ4 Internal Specification (TIGHT internal coupling)**

- SV6-5 intrinsic-vs-extrinsic split (the division of labor)
- SV6-6 output shape: enumeration of excluded items + confidence (the output)
- A1 + A4 + A9 reasoning chains

Tightly coupled: how MQ4 internally allocates perception work (intrinsic vs extrinsic) and what shape its output takes.

**Cluster C — Integration with Existing Pipeline (TIGHT internal coupling)**

- SV6-7 MQ-aggregate-resolution domain extends to 4-MQ set (integration with aggregator)
- SV6-8 downstream consumers (Rephrase + /surfacing + loop disciplines + runner + user)
- A5 + A8 reasoning chains

Tightly coupled: how MQ4 fits into the existing operation-network without disturbing it.

### Cross-cluster coupling

- **A → B:** essence + taxonomy + constraints determine MQ4's internal specification. STRONG precondition.
- **B → C:** internal specification + output shape determine how downstream consumers receive. STRONG precondition.
- **A ↔ C:** lightness (A) constrains integration (no new operation; only MQA extension); MQA's extension respects 4-type taxonomy. MODERATE bidirectional.

---

## Step 2 — Detect Boundaries (Top-Down)

| Boundary | Crossing traffic | Interface clarity | Hidden coupling |
|---|---|---|---|
| P1 ↔ P2 | LOW (essence flows as precondition to internal specification) | CLEAR | None |
| P2 ↔ P3 | LOW (internal specification + output shape flow to integration) | CLEAR | None |
| P1 ↔ P3 | LOW (lightness + taxonomy constrain integration) | CLEAR | None |

All boundaries LOW-coupling. Natural cuts.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

| Atom | Cluster |
|---|---|
| "MQ4 Boundary as 4th base meta-question" | A → P1 |
| "Boundary as 4th type in taxonomy" | A → P1 |
| "MQ4 essence = perceives explicit-exclusion" | A → P1 |
| "Substrate-bounded perception sources" | A → P1 |
| "Lightness preserved via parallel architecture" | A → P1 |
| "Project-level conventions deferred (requires memory)" | A → P1 |
| "Intrinsic-vs-extrinsic responsibility split" | B → P2 |
| "Output = enumeration of excluded items + confidence" | B → P2 |
| "Empty output is valid" | B → P2 |
| "Cold-context vs warm-context behavior" | B → P2 |
| "MQ-aggregate-resolution domain extends to 4-MQ set" | C → P3 |
| "Rephrase honors MQ4 exclusions" | C → P3 |
| "Runner reads MQ2 + MQ4 for /surfacing input" | C → P3 |
| "Loop disciplines + user receive MQ4 output" | C → P3 |

Atoms cluster cleanly into 3 pieces. No atom split across boundaries; no atom grouped that's actually independent. **HIGH boundary confidence.**

---

## Step 4 — Express as Question Tree

### P1 — Verdict + Essence + Taxonomy + Constraints + Scope

**Question:** What is the meaning-layer verdict on scope-boundary perception, what essence does it commit to, what taxonomy change does it require, what constrains it, and what's explicitly out of its scope?

**Verification criteria:**
- [ ] **VK1** — MQ4 Boundary as 4th base meta-question explicitly stated (parallel to MQ1 Structural / MQ2 Relational / MQ3 Interpretive)
- [ ] **VK2** — 4th type "Boundary" added to MQ taxonomy alongside Structural/Relational/Interpretive (expands 3-type to 4-type)
- [ ] **VK3** — MQ4 essence: perceives what's explicitly out of scope or excluded for the task (cognitive operation type = perception, parallel to MQ1-MQ3)
- [ ] **VK4** — Substrate-bounded perception sources: task statement (intrinsic signals) + warm context (extrinsic explicit declarations); no fetching (substrate-compliance per 20-02)
- [ ] **VK5** — Lightness preserved — parallel architectural addition; no new sub-machinery beyond a paragraph; spec text parallel to existing MQ sub-sections (~30-50 lines)
- [ ] **VK6** — Project-level convention perception (e.g., "we don't use library X" as standing rule) DEFERRED to process-layer (requires project memory); MQ4 covers session-level explicit exclusions only

### P2 — MQ4 Internal Specification

**Question:** How does MQ4 internally divide its perception work between intrinsic and extrinsic boundaries, and what output shape does it emit?

**Verification criteria:**
- [ ] **VK7** — Intrinsic-vs-extrinsic split: MQ3 + MQ-aggregate-resolution continue to handle intrinsic exclusions (the Example C "from-scratch" pattern preserved); MQ4 handles extrinsic primary (user-declared exclusions outside the task statement)
- [ ] **VK8** — MQ4 may redundantly catch intrinsic signals for safety but its primary load-bearing responsibility is extrinsic (the gap MQ4 fills)
- [ ] **VK9** — Output shape: enumeration of excluded items / concepts + per-item confidence (parallel to MQ2 kinds-plural structure)
- [ ] **VK10** — Empty output is valid (when no exclusions perceivable); not a failure mode; comparable to MQ2 verdict=no
- [ ] **VK11** — Cold-context behavior: only intrinsic signals from task statement perceivable; output may be empty or short
- [ ] **VK12** — Warm-context behavior: extrinsic explicit declarations from session perceivable; output enumerates them
- [ ] **VK13** — Confidence-tagged per item (HIGH/MED/LOW), parallel to other MQ confidences

### P3 — Integration with Existing Pipeline

**Question:** How does MQ4 integrate with MQ-aggregate-resolution and downstream consumers without disturbing the existing architecture?

**Verification criteria:**
- [ ] **VK14** — MQ-aggregate-resolution domain extends to 4-MQ set without redesign — reconciliation operates over {MQ1, MQ2, MQ3, MQ4} contradictions/asymmetric-confidence/latent-conflicts
- [ ] **VK15** — Cross-MQ contradiction example: MQ4 says "X excluded" + MQ2 says "X is load-bearing context" → MQA reconciles (typically MQ4 explicit-exclusion overrides MQ2 default kinds-list, parallel to Example C's MQ3-overrides-MQ2 pattern)
- [ ] **VK16** — Rephrase honors MQ4 exclusions by not drifting into excluded vocabulary/framings (joins MQ1+MQ2+MQ3+MQ-aggregate-resolution as 5th constraint source)
- [ ] **VK17** — Runner reads MQ2 substrate (positive context-need) + MQ4 substrate (exclusions) when formulating /surfacing's input — territory boundary derived from both
- [ ] **VK18** — Loop disciplines (Sensemaking, Decomposition, Innovation, Critique downstream of articulate) receive MQ4 exclusions as part of inherited context — honor them in their own territory specifications
- [ ] **VK19** — User reading framing artifact sees MQ4 output explicitly — visibility of declared boundaries (parallel to other MQ outputs)

Total: 6 + 7 + 6 = 19 VKs. Balanced.

---

## Step 5 — Map Interfaces

| # | Source → Target | What flows | Direction |
|---|---|---|---|
| **I1** | P1 → P2 | Essence + taxonomy + constraints flow as precondition to internal specification (P2 specifies MQ4 internal work only after MQ4 is committed as 4th base MQ) | one-way |
| **I2** | P2 → P3 | Internal specification + output shape flow as input to integration (P3 integrates only after MQ4's output shape is known) | one-way |
| **I3** | P1 ↔ P3 | Lightness (P1) constrains integration (P3) — no new operation; only MQA extension; MQA extension respects 4-type taxonomy (P1) | bidirectional |
| **I4** | P3 → external | Integration drives doc revisions in §2.2 (add MQ4 sub-section + extend MQA sub-section) + §6 output bundle + §13 example demonstrating MQ4 firing | one-way (external) |

### Assumptions-not-data check

- **I1 assumption:** P2 assumes MQ4 is committed as the new base MQ (P1 supplies). Without P1's verdict, P2 has no operation to specify internals for.
- **I2 assumption:** P3 assumes MQ4 output shape is enumeration + confidence (P2 supplies). Without P2's spec, P3's integration can't define how downstream consumers parse MQ4 output.
- **I3 assumption:** lightness assumption — no new operation allowed; MQA extension to 4-MQ set is the architectural compromise that preserves lightness while integrating MQ4.
- **I4 assumption:** structural-layer doc edits will operate on the meaning-layer doc per Layer Commitment separation — this finding produces meaning-layer commitments; structural-layer applies them.

All explicit. No hidden coupling.

---

## Step 6 — Order by Dependency

**Linear chain:** P1 → P2 → P3. No parallel; no circular.

- P1 (verdict + essence + constraints) must come first — internal specification only meaningful after MQ4 committed
- P2 (internal specification) must come before P3 — integration only meaningful after output shape known
- P3 (integration) is downstream of both

Bidirectional I3 (P1 ↔ P3) does not create a cycle because it's a respects-relation (P3 respects P1's lightness constraint), not a flow-dependency.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Result |
|---|---|
| **Independence** | PASS — each piece answerable independently given prior piece's input (P1 from sensemaking SV6; P2 from P1's verdict + SV6-5/6; P3 from P2's spec + SV6-7/8) |
| **Completeness** | PASS — all 10 SV6 commitments mapped: SV6-1/2/3/4/9/10 in P1; SV6-5/6 in P2; SV6-7/8 in P3 |
| **Reassembly** | PASS — P1 verdict+essence+constraints + P2 internal spec + P3 integration = complete answer to inquiry question |

### Full evaluation (7 dimensions)

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS (6/7/6 VKs per piece — balanced) |
| Interface clarity | PASS (I1-I4 explicit; assumptions noted per Step 5) |
| Balance | PASS (atoms balanced; VKs balanced; no piece is 80% of work) |
| Confidence | PASS (top-down clusters + bottom-up atoms agree) |

### Determination-mechanism check

Q-tree references load-bearing concepts whose use depends on runtime determination:
- **"Intrinsic vs extrinsic perception"** — at runtime, the LLM judges which type the signal is and routes to MQ3+MQA or MQ4. Determination mechanism = LLM's perception of where the exclusion signal lives (in task statement = intrinsic → MQ3+MQA path; in warm context = extrinsic → MQ4 path).
- **"Cold vs warm context"** — at runtime, determined by what's already in workspace (per substrate-compliance from 20-02).

Both are LLM-judgment-level perceptions; same pattern as MQ2/MQ3 use cold/warm. Q-tree includes determination mechanism via VK11+VK12 (cold/warm behavior) + VK7 (intrinsic/extrinsic responsibility split). PASS.

### Failure mode audit

| # | Mode | Detected? |
|---|---|---|
| 1 | Premature decomposition | NO — sense-making clarified whole; SV6 stable with HIGH confidence on 9/10 ambiguities |
| 2 | Wrong boundaries | NO — coupling cuts at low-traffic interfaces (I1-I4 all LOW or bidirectional respects-relation) |
| 3 | Hidden coupling | NO — assumptions-not-data check applied; 4 assumptions explicit |
| 4 | Missing pieces | NO — Completeness PASS; project-level deferral in P1 covers scope-limit; Determination-mechanism check PASS |
| 5 | Over-decomposition | NO — 3 pieces match 3 natural clusters; pattern matches prior task-define inquiries' Verdict/Essence/Application |
| 6 | Ignoring dependencies | NO — linear P1→P2→P3 explicit |
| 7 | Imbalanced | NO — 6/7/6 VKs; no piece 80% of work |

---

## Final Deliverable

### Coupling Map

3 clusters: **Verdict+Essence+Taxonomy+Constraints+Scope (A → P1)** | **MQ4 Internal Specification (B → P2)** | **Integration with Existing Pipeline (C → P3)**. LOW-coupling boundaries throughout. A→B precondition; B→C derivative; A↔C respects-relation.

### Question Tree

- **P1 — Verdict + Essence + Taxonomy + Constraints + Scope** (6 VKs)
- **P2 — MQ4 Internal Specification** (7 VKs)
- **P3 — Integration with Existing Pipeline** (6 VKs)

Total: 19 VKs across 3 pieces; balance honored.

### Interface Map

| # | Source → Target | What flows | Direction |
|---|---|---|---|
| I1 | P1 → P2 | Verdict + essence + taxonomy precondition | one-way |
| I2 | P2 → P3 | Internal spec + output shape | one-way |
| I3 | P1 ↔ P3 | Lightness constrains integration; integration respects taxonomy | bidirectional |
| I4 | P3 → external | Drives doc revisions in §2.2 + §6 + §13 | one-way (external) |

### Dependency Order

P1 → P2 → P3 (linear). No parallel; no circular.

### Self-Evaluation

3 minimum: PASS / PASS / PASS. 7 full: all PASS. 0 failure modes. Determination-mechanism check PASS.

### Confidence

**HIGH** — pattern matches prior task-define inquiries (Verdict/Essence/Application 3-piece across 15-39 / 17-01 / 07-48 / 21-12 / 21-58 / 10-03 / 12-00 / 19-17 / 20-02 / 21-18 / 22-44 / 00-47 and this one).

---

## Next Discipline

Decomposition complete; commit to **Innovation**.
