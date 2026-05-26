# Decomposition — Explore Canonical Coverage via Staged Iteration

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md`. Sensemaking resolved Two Decisions (staging belongs in /staged-explore runner; canonical-source coverage is two-layer) and surfaced Four Action Paths (A ship /staged-explore; B canonical-source registry; C audit C1-C4 firing; D optional negative-space audit). Decompose the action paths into a question tree with interfaces and dependency ordering. Apply Determination-mechanism piece check at Phase 7.

---

## Step 1 — Coupling Topology

### Elements in the whole

The work surface implied by sensemaking's resolutions:

- **E1** — Ship `/staged-explore` skill (runner that orchestrates multi-pass /explore)
- **E2** — Implement Merge Contract (§5.5) — at least the manual procedure with examples
- **E3** — Add canonical-source registry field to `_branch.md` template
- **E4** — Define how `/explore` reads the registry and reports per-entry status (the runtime "is X canonical AND was it surfaced?" check)
- **E5** — Audit recent `/explore` runs to verify C1-C4 (boundary-discovery, surround-layer, confirmed-absent, jump-scan) fire as designed
- **E6** — Optional: negative-space audit pass in `/explore` (post-convergence, category-level absence check)
- **E7** — `/MVL+` (and other runners) routing decision: when does /MVL+ invoke /staged-explore vs /explore?
- **E8** — Update inquiry-framing discipline spec (`enes/runtime_environment/inquiry_framing_discipline.md`) with canonical-source-registry authoring guidance

### Coupling assessment (change-propagation test)

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | **Strong** | /staged-explore is non-functional without Merge Contract (at minimum a manual procedure with worked examples) |
| E1 ↔ E5 | Weak | Runner spec doesn't depend on audit verdict; audit informs priority/sequencing only |
| E1 ↔ E7 | Moderate | Routing question presupposes /staged-explore exists; but routing design is a separate decision |
| E3 ↔ E4 | **Strong** | Field shape determines reader logic; reader logic shapes field requirements |
| E3 ↔ E8 | **Strong** | Field definition and framing-spec guidance are two views of the same registry concept |
| E4 ↔ E6 | Weak | Both are /explore extensions but they answer different coverage questions (registry-based vs category-based) |
| E1 ↔ E3 | Weak | Staging is orthogonal to the registry; either ships without the other |
| E2 ↔ E3 | Weak | Merge logic is about combining maps; registry adds a new section but doesn't change merge structure |
| E5 ↔ E3 | Weak | Auditing existing rules is independent of adding a new mechanism |
| E5 ↔ E6 | Weak | Audit could surface signals that motivate D, but D ships independently |

### Coupling clusters (peaks)

- **Cluster I — Staging materialization:** {E1, E2}
- **Cluster II — Canonical-source registry:** {E3, E4, E8}
- **Cluster III — Coverage audit:** {E5}
- **Cluster IV — Optional /explore extension:** {E6}
- **Cluster V — Future routing:** {E7}

Five clusters with low coupling between them and high coupling within. Boundary valleys clean.

---

## Step 2 — Detect Boundaries (Top-Down)

Five major boundaries correspond to the five clusters. Each boundary is **single-point**, not diffuse — the inter-cluster coupling is weak in every case.

- **Boundary I-II** (Staging | Registry): different artifacts (skill file vs template field), different lifetimes (run-time vs framing-time), different surfaces of the project.
- **Boundary I-V** (Staging | Future routing): temporal dependency only — V can't start before I ships.
- **Boundary II-III** (Registry | Audit): different operations — adding a new mechanism vs verifying existing mechanisms.
- **Boundary III-IV** (Audit | Optional extension): independent — audit informs but doesn't require IV.
- **Boundary II-III** also doubles as the "constructive vs observational" divide — II adds capability; III observes existing capability.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms (irreducible elements)

- A1: `/staged-explore` SKILL.md file (one file)
- A2: Merge Contract document or worked example
- A3: `_branch.md` template canonical-source field
- A4: `/explore` reader logic for the registry
- A5: Audit report (output of P3)
- A6: Negative-space audit logic (in /explore spec)
- A7: `/MVL+` routing rule (future)
- A8: Inquiry-framing spec section on canonical-source authoring

### Atom-to-cluster mapping

| Atom | Cluster | Match? |
|---|---|---|
| A1, A2 | I (Staging) | ✓ |
| A3, A4, A8 | II (Registry) | ✓ |
| A5 | III (Audit) | ✓ |
| A6 | IV (Optional) | ✓ |
| A7 | V (Future routing) | ✓ |

Top-down clusters and bottom-up atom grouping agree across all five boundaries. **Boundary confidence: HIGH** on all five.

---

## Step 4 — Express as Question Tree

### P1: How is `/staged-explore` shipped as a thin invokable runner skill?

**Verification criteria:**
- [ ] `/staged-explore` exists as `~/.claude/skills/staged-explore/SKILL.md` + `references/staged-explore.md`
- [ ] Invokable via the Skill tool with documented inputs (territory, initial expected, max depth, depth-level)
- [ ] Transcludes `/multi-resolution-navigation.md`'s frontier-ledger pattern explicitly (`_frontier.md` artifact, coverage_mode, expansion_policy, scheduling_policy, no-final-selection boundary)
- [ ] Merge Contract (§5.5) documented at minimum as a manual procedure with at least one worked example
- [ ] One end-to-end test run produces a parent map + at least one child map + `_frontier.md`

**Sub-pieces:**
- **P1.1** — What is `/staged-explore`'s input contract and output shape? (Inputs: territory, initial `expected`, `depth-level`, max-depth, coverage_mode. Outputs: parent /explore map, N child maps, `_frontier.md`, optional merged map.)
- **P1.2** — Which `/multi-resolution-navigation.md` mechanics are transcluded vs adapted? (Frontier-ledger pattern, candidate-record schema, status taxonomy, `_frontier.md` shape — directly transcluded. Expansion-policy may need /explore-specific values.)
- **P1.3** — Where do the files live and what's the SKILL.md structure? (Convention from existing skills: top-level frontmatter + Step 0 pre-read + instructions; references file with full reference content.)
- **P1.4** — How does the Merge Contract ship — manual-first procedure, or runner-internal logic? (Manual-first per spec §5.5 "Operational status: spec only.")

---

### P2: How is canonical-source coverage made auditable via an inquiry-framing registry?

**Verification criteria:**
- [ ] `_branch.md` template has a `Canonical Sources` (or equivalent) field defined, with shape and authoring guidance
- [ ] Inquiry-framing discipline spec (`enes/runtime_environment/inquiry_framing_discipline.md`) updated to document the field and authoring procedure
- [ ] `/explore` spec updated to describe how the registry is consumed and reported
- [ ] `/explore` output has a per-entry "surfaced / confirmed-absent / not-checked" report when the registry is non-empty
- [ ] At least one example `_branch.md` uses the field
- [ ] At least one example /explore run produces the per-entry report

**Sub-pieces:**
- **P2.1** — What is the canonical-source registry's shape in `_branch.md`? (Bullet list, yaml block, or markdown table? Required fields per entry: path-or-identifier, why-canonical, optional pointer to where it's referenced. Required vs optional registry overall — i.e., is the field mandatory or omittable?)
- **P2.2** — How does the inquiry author decide what's canonical for THEIR inquiry? (Authoring heuristic: "anything the goal explicitly names; anything a downstream discipline must read to answer the question; anything the user's prior corrections referenced." Plus negative criterion: "discovery candidates that /explore SHOULD find on its own do not belong in the registry.")
- **P2.3** — How does /explore consume the registry and report per-entry status? (New optional section in /explore output: "Canonical-Source Registry Report" with per-entry verdict — surfaced (with ID), confirmed-absent (with reasoning), or not-checked (with reasoning if registry was not visible). Annotation lives alongside existing confidence map; does not change the Transform shape itself.)
- **P2.4** — How does the inquiry-framing discipline spec document the new field? (New section + authoring guidance + examples + relationship to scope check.)

---

### P3: Do the existing /explore coverage rules C1-C4 fire in practice across recent /explore runs?

**Verification criteria:**
- [ ] At least 5 recent inquiry-folder `exploration.md` files audited
- [ ] Each of C1 (boundary-discovery), C2 (coarse-scan-includes-surround), C3 (confirmed-absent as productive output), C4 (jump-scan) has firing-evidence checked per run
- [ ] Audit produces a per-rule verdict: PASS (consistently firing) / FLAG (intermittent) / FAIL (consistently not firing)
- [ ] If FAIL, a follow-up Path is created (revise spec, add structural check, or add reminder in skill instructions)

**Sub-pieces:**
- **P3.1** — Which recent /explore runs are in scope for the audit? (Last 5+ inquiry-folder exploration.md files; weight toward inquiries that actually used /explore non-trivially.)
- **P3.2** — What are the firing-evidence signatures per rule? (C1: `boundary_unknown` was declared and a boundary-discovery sub-phase output appears; C2: inventory includes ≥1 item from a project-wide surround layer when one was identifiable; C3: at least one region labeled `confirmed-absent`; C4: telemetry includes "jump-scan performed: ✓".)
- **P3.3** — What's the verdict format and downstream routing? (Per-rule: PASS/FLAG/FAIL. Aggregate: overall coverage-rule firing health. If FAIL, a /td-critique or new MVL+ inquiry on the failing rule.)

---

### P4 (optional, calibration-deferred): Should /explore gain a post-convergence negative-space audit pass?

**Verification criteria (if activated):**
- [ ] Negative-space audit protocol drafted as a /explore spec extension
- [ ] At least one /explore run executes the audit and produces a category-level absence report
- [ ] Audit is integrated into the convergence-check sequence (after jump-scan, before declaring PROCEED)

**Sub-pieces (deferred unless P4 activates):**
- P4.1 — Category taxonomy against which "what's missing?" is checked
- P4.2 — Where the audit lives in the cycle (post-convergence, pre-output)
- P4.3 — Output format (new section in exploration.md, or annotation)

**Activation trigger:** P3 surfaces category-level miss patterns OR repeated user reports of "/explore missed a kind of thing it shouldn't have."

---

### P5 (future, dependency-deferred): When and how does /MVL+ decide to invoke /staged-explore vs /explore?

**Verification criteria (if activated):**
- [ ] /MVL+ spec updated with a routing rule (or with `--staged` flag, or with auto-selection heuristic)
- [ ] At least one /MVL+ run exercises the routing path

**Sub-pieces (deferred until P1 ships):**
- P5.1 — What trigger signals "this territory needs staging"? (Inquiry-stated `expected: >50 items`? User opt-in via flag? Runner auto-detects?)
- P5.2 — How is the choice made: user opt-in, runner auto-select, or autonomous selector?
- P5.3 — Does /MVL+ gain a new flag, or does /staged-explore become its own pipeline?

**Activation trigger:** P1 has shipped AND at least 3 inquiries have hand-orchestrated /staged-explore showing the pattern is useful.

---

## Step 5 — Interface Map

### Inter-piece flows

| From | To | Direction | What flows | Flow type | Notes |
|---|---|---|---|---|---|
| **P2** | **P1** | one-way | /explore output may gain a "Canonical-Source Registry Report" section; Merge Contract must accommodate the new section when merging child maps | Spec / data-shape | **Hidden-coupling flag** — see Assumptions-not-data check below |
| P3 | P1 | one-way (information) | Audit verdict on C1-C4 informs whether P1's launch is urgent or can wait for spec hardening | Information | Doesn't gate P1; informs priority |
| P2 | P3 | one-way (spec dependency) | P2 introduces a new "rule" (registry coverage) that future P3-equivalent audits should include | Spec extension | Not load-bearing for the current audit |
| P3 | P4 | one-way (signal) | Category-miss patterns from P3 motivate P4 activation | Signal | P4 doesn't require P3's verdict to design, but activation depends on signal |
| **P1** | **P5** | one-way | /staged-explore must exist before /MVL+ can route to it | **Prerequisite** | Hard dependency |
| P2.1 | P2.3 | one-way | Registry shape determines consumption logic format | Contract | Within P2 |
| P2.{1,2,3} | P2.4 | many-to-one | Framing spec aggregates registry shape + authoring guidance + reader behavior | Documentation | Within P2 |

### Assumptions-not-data check (Step 5 refinement)

**Hidden assumption between P1 and P2:** P1's Merge Contract is being designed assuming /explore's per-call output shape is stable. But P2 changes /explore's output by adding the "Canonical-Source Registry Report" section. If P1 ships before this change is communicated, the runner's merge logic may break when merging maps from /explore runs that include the new section.

**Mitigation:** P2.3 (reader-and-reporter logic) must specify that the new section is OPTIONAL and APPEND-ONLY (does not change existing sections). P1's Merge Contract specification must explicitly state that unknown additional top-level sections are passed through unchanged. With these two explicit constraints, the hidden coupling is converted to an explicit interface.

No other hidden assumptions detected. P3's audit operates on observable exploration.md files, no shared state with P1 or P2.

---

## Step 6 — Dependency Order

### Phase 1 — Can run in parallel (no inter-dependencies)

- **P1** (ship /staged-explore) — independent
- **P2** (canonical-source registry) — independent (with explicit interface to P1 — append-only output section)
- **P3** (audit C1-C4 firing) — independent (informs others but not blocking)

### Phase 2 — Activation-gated

- **P4** (negative-space audit) — activation gated on signals from P3 OR direct user request; structurally independent when activated

### Phase 3 — Dependency-gated

- **P5** (/MVL+ routing) — gated on P1 shipping (prerequisite) AND ≥3 hand-orchestrated /staged-explore runs (calibration)

### Within-piece ordering

**P1 sub-pieces:**
1. P1.1 (input contract & output shape) — first
2. P1.2 (transclusion from multi-res-nav) — parallel with P1.1
3. P1.3 (file location / SKILL.md structure) — trivial; pick the convention
4. P1.4 (Merge Contract manual-first) — after P1.1 (needs the output shape)

**P2 sub-pieces:**
1. P2.1 (registry shape) — first
2. P2.2 (authoring guidance) — parallel with P2.1
3. P2.3 (consumption logic, APPEND-ONLY constraint per Assumptions-not-data check) — after P2.1
4. P2.4 (framing spec update) — after P2.1 + P2.2 + P2.3 (aggregates them)

**No circular dependencies detected** at any level.

---

## Step 7 — Self-Evaluate

### Determination-mechanism piece check (refinement applied)

The load-bearing concept is **"canonical-source"** — its applicability is determined at runtime by checking "is X canonical for THIS inquiry?". Has the Q-tree included a piece addressing HOW the determination is made?

**YES — P2 covers the determination mechanism in full:**

- P2.1 defines the registry shape (the data structure that captures the determination)
- P2.2 defines HOW the author decides what's canonical (the human-side authoring mechanism)
- P2.3 defines HOW /explore reads the determination and reports compliance (the runtime mechanism)
- P2.4 defines WHERE the discipline-level guidance lives (the institutional mechanism)

The determination is fully specified across P2's four sub-pieces. The Q-tree does NOT presuppose the determination; P2 IS the determination.

**Determination-mechanism check: PASS.**

### Minimum self-evaluation (3 dimensions)

| Dimension | Verdict | Reasoning |
|---|---|---|
| **Independence** | PASS | P1, P2, P3 work independently in Phase 1. Within-piece sub-pieces have ordered dependencies but cross-piece work is parallel. |
| **Completeness** | PASS | All four sensemaking action paths covered (A→P1, B→P2, C→P3, D→P4). Plus P5 emerged from coupling analysis (future routing) and was added explicitly. |
| **Reassembly** | PASS | Completing P1+P2+P3 produces: a working /staged-explore runner + a canonical-source-coverage mechanism + verified existing coverage rules. Together these solve the original problem (canonical-source coverage with staged iteration). The determination-mechanism check above is part of this PASS. |

### Full self-evaluation (7 dimensions)

| Dimension | Verdict | Reasoning |
|---|---|---|
| Independence | PASS | (as above) |
| Completeness | PASS | (as above) |
| Reassembly | PASS | (as above, with determination-mechanism check) |
| **Tractability** | PASS | Each piece is shippable in 1-3 focused sessions. P1 ≈ 1-2 sessions (write skill + reference + worked merge example). P2 ≈ 1-2 sessions (template field + spec updates + example). P3 ≈ 1 session (read 5 files, score each). P4/P5 are deferred. |
| **Interface clarity** | PASS (with one explicit constraint) | One hidden assumption surfaced and converted to explicit interface: P2's new output section must be APPEND-ONLY; P1's Merge Contract must pass through unknown sections. |
| **Balance** | PASS | P1 and P2 are roughly equal-weight (~similar materialization effort). P3 lighter (observational). P4/P5 deferred and lighter when activated. No single piece dominates 80%+. |
| **Confidence** | HIGH | Top-down clusters and bottom-up atoms agree across all 5 boundaries. |

### Failure-mode check

| Mode | Observed? | Notes |
|---|---|---|
| 1. Premature decomposition | NO | Sensemaking explicitly resolved the whole (Two Decisions + Four Paths) before this decomposition started. |
| 2. Wrong boundaries | NO | Coupling perception identified low-coupling valleys; bottom-up atom check confirmed. |
| 3. Hidden coupling | ONE FOUND, addressed | P2's new output section affects P1's merge logic; converted to explicit interface (append-only constraint + passthrough rule). |
| 4. Missing pieces | NO | Determination-mechanism check passed; all four action paths + future routing covered. |
| 5. Over-decomposition | NO | Sub-pieces within P1 and P2 are tractable, not trivial; each carries a distinct concern. |
| 6. Ignoring dependencies | NO | Explicit dependency order produced (Phase 1 parallel; Phase 2 activation-gated; Phase 3 prerequisite-gated). |
| 7. Imbalanced decomposition | NO | Pieces roughly balanced; no single piece dominates. |

### Telemetry

- Pieces: 5 top-level (P1-P5)
- Sub-pieces: 4 in P1 + 4 in P2 = 8 (P3-P5 not sub-decomposed at this resolution)
- Interfaces: 5 inter-piece + 4 intra-P2 + 4 intra-P1 = 13
- Hidden couplings surfaced: 1 (P2→P1 output shape)
- Hidden couplings unresolved: 0
- Dependency phases: 3 (parallel / activation-gated / prerequisite-gated)
- Circular dependencies: 0

---

## Final Deliverable

### Coupling Map (summary)

Five clusters with low inter-cluster coupling and high intra-cluster coupling:

```
[Cluster I — Staging materialization]      {E1 ship runner, E2 merge contract}
        │                                  
        │ weak (info)                      
        ▼                                  
[Cluster III — Audit]                      {E5 verify C1-C4 firing}
        │                                  
        │ weak (signal)                    
        ▼                                  
[Cluster IV — Optional /explore ext]       {E6 negative-space audit}

[Cluster II — Registry]                    {E3 field, E4 reader, E8 framing spec}
        │
        │ weak (spec extension)
        ▼
[Cluster III]  (same node as above)

[Cluster V — Future routing]               {E7 /MVL+ routing}
        ↑
        │ prerequisite
        │
[Cluster I]  (waits on)
```

Only one cross-cluster flow carries a hidden-coupling risk (Cluster II → Cluster I on output shape); explicitly addressed via append-only constraint.

### Question Tree (summary)

- **P1** — How is /staged-explore shipped? (4 sub-pieces; ≈1-2 sessions)
- **P2** — How is the canonical-source registry built? (4 sub-pieces; ≈1-2 sessions; contains the determination mechanism)
- **P3** — Do C1-C4 fire in practice? (3 sub-pieces; ≈1 session)
- **P4** — Optional negative-space audit (activation-gated on P3 signals)
- **P5** — /MVL+ routing (prerequisite-gated on P1)

### Interface Map (summary)

- P2 → P1 (append-only output; explicit constraint)
- P3 → P1 (priority info, non-blocking)
- P2 → P3 (future spec extension)
- P3 → P4 (activation signal)
- P1 → P5 (prerequisite)
- Plus 8 intra-piece flows within P1 and P2

### Dependency Order (summary)

- **Phase 1 — Parallel:** P1, P2, P3
- **Phase 2 — Activation-gated:** P4
- **Phase 3 — Prerequisite-gated:** P5

### Self-Evaluation (summary)

| 3-min | 7-full |
|---|---|
| Independence: PASS | Tractability: PASS |
| Completeness: PASS | Interface clarity: PASS (1 hidden-coupling converted to explicit) |
| Reassembly: PASS (determination-mechanism check) | Balance: PASS |
| | Confidence: HIGH |

**Overall: PROCEED.** Decomposition complete; ready for innovation phase to generate concrete designs for each piece + assembly-check across pieces.
