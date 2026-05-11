# Decomposition: continuous_loop_priorities

## User Input

`devdocs/inquiries/continuous_loop_priorities/_branch.md`

Read `_branch.md`, `_state.md`, `exploration.md`, and `sensemaking.md`. Decompose the actionable decisions into independently-answerable sub-questions for innovation to design against and critique to evaluate. Suggested pieces A-H provided; verify via coupling perception. Order by dependency. Save as `devdocs/inquiries/continuous_loop_priorities/decomposition.md`.

---

## The Whole

The "whole" being decomposed is **the set of concrete design commitments the user must make in order to execute the 5-item roadmap**. Sensemaking produced the roadmap with sub-decisions per item (sequencing, conditional /navigate, dual-mode selection, sequential v1, mechanics-only synthetic test, time-box-with-fallback). What's left is to specify each commitment concretely enough that innovation can propose designs and critique can evaluate them.

This is **not** a decomposition of the *roadmap itself* (sensemaking already produced that). It's a decomposition of *what concrete designs have to be committed to* before the roadmap is actionable.

---

## Step 1 — Perceive Coupling Topology

### Elements (concrete decisions yet to be committed)

E1. Which punch lists to apply, in what order
E2. RESUME's fate (wire up vs delete)
E3. Which stalled inquiries to mark SUPERSEDED (and how)
E4. Item 1's regression check pass/fail tests
E5. N for /MVL+'s "no-converge after N iterations" trigger
E6. Where in /MVL+ the trigger logic lives (which file, which section)
E7. Manual vs autonomous selection routing post-/navigate
E8. Operational definitions of the 3 signals (coverage, convergence, productivity)
E9. Termination rule thresholds
E10. v1 autonomous-selection heuristic
E11. Where Item 4's spec lives (file path)
E12. What gets handed off to Item 3's /MVL+ as input
E13. Item 3 time-box trigger and fallback specifics
E14. Item 5 test problem choice
E15. Item 5 mechanics-only pass criteria
E16. Whether to also test manual mode in Item 5
E17. How this finding refines/relates-to the prior sensemaking
E18. Frontmatter pointer format for the prior-sensemaking reference
E19. Pacing: which items go in which session
E20. Pacing: natural break-points

### Coupling matrix (ask: "If I change X, must Y change?")

| Pair | Coupled? | Why |
|---|---|---|
| E1 ↔ E4 | Strong | Regression check verifies what was applied — change punch list → change check |
| E1 ↔ E2 | Moderate | RESUME's fate is itself a punch list item |
| E1 ↔ E3 | Moderate | Stalled-inquiry markers are part of one punch list (`inquiry_md_post_navigation_update_value_check`) |
| E2 ↔ E3 | Weak | Both are housekeeping but address different artifacts |
| E5 ↔ E6 | Strong | Trigger logic IS the implementation of N |
| E5 ↔ E7 | Moderate | Trigger fires → routing happens; routing reads N's outcome |
| E7 ↔ E10 | Strong | Autonomous routing USES the heuristic |
| E8 ↔ E9 | Strong | Termination rule combines the signals |
| E8 ↔ E10 | Strong | Heuristic operates on the signals |
| E9 ↔ E10 | Moderate | Both consume signals; separate logic |
| E11 ↔ E8/E9/E10 | Weak | Spec location is independent of spec content |
| E12 ↔ E5/E6/E7 | Strong | Item 3's handoff package INCLUDES Item 2's outputs |
| E12 ↔ E8/E9/E10 | Strong | Item 3's handoff package INCLUDES Item 4's outputs |
| E12 ↔ E1-E4 | Weak | Item 3 builds on the consolidated baseline but doesn't carry Item 1's specifics |
| E13 ↔ E12 | Moderate | Time-box criterion depends on what handoff package looks like |
| E14 ↔ E15 | Strong | Pass criteria depend on what test problem is being run |
| E15 ↔ E12 | Moderate | Pass criteria reference runner's interface (defined in handoff) |
| E16 ↔ E15 | Weak | Manual mode test is an addition, not a replacement |
| E17 ↔ E18 | Strong | Frontmatter format implements the relation choice |
| E17/E18 ↔ everything else | None | Reconciliation is metadata about this inquiry |
| E19 ↔ E1-E16 | Strong | Can't pace what's not scoped |
| E19 ↔ E20 | Strong | Break-points are session-boundary choices |

### Clusters detected

- **Cluster I (Item 1 commitments):** E1, E2, E3, E4. Strongly internally coupled (regression depends on what was applied; RESUME and stalled-markers are sub-tasks).
- **Cluster II (Item 2 specification):** E5, E6, E7. Strongly internally coupled (trigger value, location, routing are one architectural decision).
- **Cluster III (Item 4 specification):** E8, E9, E10, E11. Strongly internally coupled within E8-E10 (signals, termination, heuristic share semantics); E11 is moderately attached.
- **Cluster IV (Item 3 handoff package):** E12, E13. The handoff packages outputs from Cluster II and III + the time-box specifics.
- **Cluster V (Item 5 test design):** E14, E15, E16. Internally coupled (problem + criteria + manual addition).
- **Cluster VI (Reconciliation):** E17, E18. Internally coupled, externally isolated.
- **Cluster VII (Pacing):** E19, E20. Depends on Clusters I-V being scoped.

### Cross-cluster coupling

- Cluster IV consumes Cluster II + III (strong).
- Cluster V depends on Cluster IV's runner interface (moderate — abstract dependency, can be specified in parallel up to a point).
- Cluster VII depends on Clusters I-V (strong — pacing assigns scoped items to sessions).
- Cluster VI is independent of all others.

---

## Step 2 — Detect Boundaries (Top-Down)

The seven clusters become seven candidate pieces. Boundaries between them are at the cluster boundaries (low cross-coupling) verified above.

**Pre-resolution check on suggested pieces A-H:**

The user-suggested decomposition included **Piece A — Roadmap shape and ordering**. Coupling check: A's sub-questions ("is order right?", "should Items 2/4 be parallel?", "should Item 1 be split?") are **already resolved by sensemaking** (Phase 3, ambiguities 2, 6, and the SV5 ordering commitment). Re-asking them in decomposition would either (a) duplicate sensemaking, or (b) become a critique-phase challenge to sensemaking's verdict. Decomposition is not the right phase for that challenge — critique is.

**Decision:** Drop Piece A. Critique can re-challenge sensemaking's order if it wants; decomposition assumes the order and decomposes the design commitments inside it.

**Final pieces (7):**

| Piece | Cluster | Was suggested as |
|---|---|---|
| P1 | Cluster I (Item 1) | B |
| P2 | Cluster II (Item 2) | C |
| P3 | Cluster III (Item 4) | D |
| P4 | Cluster IV (Item 3 handoff) | E |
| P5 | Cluster V (Item 5) | F |
| P6 | Cluster VI (Reconciliation) | G |
| P7 | Cluster VII (Pacing) | H |

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms (irreducible elements)

- "Apply punch list X" (per-punch-list).
- "Decide RESUME wire-up vs delete" (single binary choice).
- "Mark inquiry Y SUPERSEDED" (per-inquiry).
- "Pick N=2/3/4 for trigger" (single choice).
- "Edit /MVL+ at line X" (single edit).
- "Define signal S operationally" (per-signal).
- "Pick autonomous heuristic v1" (single choice).
- "Pick test problem" (single choice).
- "Reference prior sensemaking via frontmatter" (single edit).

### Atom-to-piece mapping check

Every atom maps cleanly to one of P1-P7:

- Punch-list atoms → P1 ✓
- RESUME atom → P1 ✓ (sub-task of consolidation)
- Stalled-inquiry atoms → P1 ✓
- Trigger N atom → P2 ✓
- /MVL+ edit atom → P2 ✓
- Signal definition atoms → P3 ✓
- Heuristic atom → P3 ✓
- Test problem atom → P5 ✓
- Frontmatter atom → P6 ✓

**No atoms split across pieces.** **No atoms grouped that should be separate.**

### Top-down vs bottom-up agreement

**HIGH** on all 7 boundaries. The cluster boundaries from Step 1 align with where atoms naturally group.

---

## Step 4 — Express as Question Tree

### P1 — Item 1 scope commitment

**Question:** What concrete consolidation actions does the user commit to, in what order, with what verification?

**Verification criteria:**
- [ ] Punch lists to apply listed by name + apply order
- [ ] For each punch list: piece-by-piece commitment OR explicit drop with reason
- [ ] RESUME decision committed: wire-up (with target discipline) OR delete (with markdown removal scope)
- [ ] Stalled inquiries listed by folder name with intended SUPERSEDED-marker text
- [ ] Regression check defined as a concrete pass/fail test list (each test has invocation + expected output)
- [ ] Total estimated effort for P1 within 4-6h band

### P2 — Item 2 specification (/navigate invocation)

**Question:** What are the precise trigger conditions for /navigate's invocation in the MVL flow, and how is post-invocation routing decided?

**Verification criteria:**
- [ ] N committed (specific integer for "no-converge after N iterations")
- [ ] Trigger 1 (partial finding): definition of "partial" specified (which fields/flags signal it)
- [ ] Trigger 3 (user-explicit): invocation surface specified (flag, command, comment)
- [ ] /MVL+ edit location identified (file + section + approximate diff size)
- [ ] Manual vs autonomous mode: how the runtime knows which mode (flag? state field? default?)
- [ ] /MVL changes (if any) — same questions, or explicit "no change to /MVL"
- [ ] Total estimated effort for P2 within 1-2h band

### P3 — Item 4 specification (traversal criteria + selection)

**Question:** What are the operational definitions of the 3 traversal signals, the termination rule's thresholds, the v1 autonomous-selection heuristic, and where does the spec live?

**Verification criteria:**
- [ ] Coverage signal: measurement formula (what artifacts produce the value, what counts as "new")
- [ ] Convergence signal: measurement formula (which counts decrease, by how much, over what window)
- [ ] Productivity signal: measurement formula (what counts as "new anchor / idea / verdict")
- [ ] Termination rule: specific N consecutive iterations + specific thresholds per signal
- [ ] v1 heuristic: committed candidate (highest-confidence vs max-projected-productivity vs other) with rationale
- [ ] Spec location: committed file path (e.g., `devdocs/spec/meaningful_traversal.md` vs alternative)
- [ ] Spec written or stub-with-fill-points present
- [ ] Total estimated effort for P3 within 4-6h band

### P4 — Item 3 handoff package

**Question:** What inputs does Item 3's /MVL+ inquiry receive, what time-box trigger applies, and what fallback does the user execute if the time-box fires?

**Verification criteria:**
- [ ] Handoff package contents listed (inputs from P2, P3, plus `enes/loop_desing_ideas/` + `enes/thinking_space_dynamics.md` + `enes/desc.md`)
- [ ] Time-box trigger specified concretely (e.g., "if Item 3's design /MVL+ doesn't produce a finding within 4h" or "if implementation exceeds 15h")
- [ ] Fallback decision specified: what exactly does the user do? (e.g., "halt Item 3, run external validation on disciplines per prior sensemaking, retry Item 3 after that")
- [ ] Item 3 inquiry folder name committed (e.g., `continuous_loop_runner_v1`)
- [ ] Total estimated effort for P4 within ~30-60min band (P4 is packaging, not designing)

### P5 — Item 5 design (synthetic test)

**Question:** Which project-internal test problem is committed, what mechanics-only pass criteria checklist applies, and is manual mode also tested?

**Verification criteria:**
- [ ] Test problem identified (specific inquiry to re-run, OR specific synthesized question with known answer, OR specific decomposition with known structure)
- [ ] Pass criteria: checklist of N items, each measurable from the runner's outputs
- [ ] Manual mode test: yes/no, with brief test scope if yes
- [ ] Diagnose-and-patch budget: time-box for fixing mechanics bugs surfaced in Item 5
- [ ] Total estimated effort for P5 within 2-4h band

### P6 — Reconciliation handling

**Question:** How does this finding's roadmap relate to the prior sensemaking (`devdocs/sensemaking/what_this_project_needs_most.md`), and what frontmatter/cross-reference enforces the relation?

**Verification criteria:**
- [ ] Relation type committed (REFINES vs SUPERSEDES-CONDITIONALLY vs RELATED — sensemaking implied "nested-as-fallback" which doesn't match standard frontmatter labels)
- [ ] Frontmatter format committed (key + value, with the prior-sensemaking path)
- [ ] Whether prior sensemaking gets a back-reference added pointing to this finding
- [ ] One-paragraph reconciliation text committed (for use in finding's "Changes from Prior" section)
- [ ] Total estimated effort for P6 within 15-30min band

### P7 — Pacing

**Question:** Which scoped items go in which session, and where are the natural break-points?

**Verification criteria:**
- [ ] Session-by-session plan: each session lists which items are addressed and rough hours
- [ ] Break-points: explicit markers between sessions where the project state is stable (no half-applied changes)
- [ ] Total session count within 4-7 band; total span within 2-3 weeks
- [ ] Sustainability check: max hours per session, recovery time between sessions
- [ ] Plan honors the dependency order from Step 6 (P1 before P4, etc.)

---

## Step 5 — Map Interfaces

### Interface table

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Stable baseline (consolidated state) — P2's edits to /MVL+ assume the file is in a known consistent state | One-way | Prerequisite |
| P1 | P3 | Stable baseline | One-way | Prerequisite |
| P1 | P4 | Stable baseline | One-way | Prerequisite |
| P2 | P4 | Trigger logic (committed N, trigger conditions, mode-routing rule) | One-way | Spec input |
| P3 | P4 | Traversal criteria + termination rule + heuristic | One-way | Spec input |
| P3 | P5 | Heuristic v1 (Item 5 runs in autonomous mode using this) | One-way | Spec input |
| P4 | P5 | Runner interface contract (state file path, mode flags, termination signal output) | One-way | Interface contract |
| P5 | (output) | Mechanics-validation results | One-way | Verification |
| P6 | (output) | Frontmatter + reconciliation paragraph | One-way | Metadata |
| P1-P5 | P7 | Scoped items with effort estimates | Many-to-one | Inputs to pacing |
| P6 | (independent) | — | — | No interfaces to other pieces |

### Hidden coupling check

- **P5 ↔ P4 (interface contract):** P5 specifies pass criteria *abstractly* ("autonomous mode terminates correctly") at decomposition time, but the *concrete* test invocation (e.g., `/<runner-name> --auto problem.md`) depends on P4's eventual output. **Resolution:** P5 produces a *template* checklist with placeholders; P4 fills the placeholders. This is captured as a known interface, not hidden.
- **P3 ↔ P5 (heuristic semantics):** P5's autonomous-mode test depends on the heuristic actually being runnable on the test problem. **Resolution:** P3 commits to a heuristic that's measurable on any inquiry's artifacts; P5's test problem must be one where the artifacts exist. Captured.
- **P7 ↔ everything (pacing):** P7 needs effort estimates to pace. Each piece's verification criteria explicitly include effort estimates. Captured.

No hidden coupling discovered.

---

## Step 6 — Order by Dependency

```
                 ┌─────────────────────────────┐
                 │ P1 — Item 1 commitments     │  (Prerequisite for all that touch /MVL+ or runner)
                 │ Independent                 │
                 └──────────┬──────────────────┘
                            │ Stable baseline
              ┌─────────────┴──────────────┐
              ▼                            ▼
        ┌──────────────┐            ┌──────────────┐
        │ P2 — Item 2  │            │ P3 — Item 4  │
        │ /navigate    │            │ Traversal    │
        │ spec         │            │ criteria     │
        │ (parallel)   │            │ (parallel)   │
        └──────┬───────┘            └──────┬───────┘
               │                           │
               │  Trigger logic            │  Criteria + heuristic
               └───────────┬───────────────┘
                           ▼
                  ┌──────────────┐
                  │ P4 — Item 3  │
                  │ handoff      │
                  └──────┬───────┘
                         │  Runner interface contract
                         ▼
                  ┌──────────────┐
                  │ P5 — Item 5  │
                  │ test design  │
                  └──────────────┘

  ┌─────────────────────────────┐
  │ P6 — Reconciliation         │  (Independent of P1-P5; can be done anytime)
  └─────────────────────────────┘

  ┌─────────────────────────────┐
  │ P7 — Pacing                 │  (Last; depends on P1-P5 scope)
  └─────────────────────────────┘
```

### Order summary

1. **P1** — must be first (prerequisite for everything that touches the system).
2. **P2 || P3 || P6** — parallelizable after P1. P6 needs nothing.
3. **P4** — after P2 + P3 (consumes both).
4. **P5** — after P4 (consumes runner contract); can be drafted-with-placeholders in parallel with P4.
5. **P7** — last (consumes effort estimates from P1-P5).

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Each piece's question is answerable without reading siblings (except via interfaces)? | **PASS.** P1 can be committed without knowing /navigate's N. P2 can be specified without committing pacing. P6 is fully isolated. P7 needs sibling outputs but only as quantities (effort estimates), not internals. |
| **Completeness** | Do P1-P7 cover the original whole (all design commitments needed for the roadmap)? | **PASS.** Walking the 5 roadmap items: Item 1 → P1; Item 2 → P2; Item 3 → P4 (handoff; the /MVL+ itself is a future inquiry); Item 4 → P3; Item 5 → P5. Reconciliation → P6. Pacing → P7. All commitments mapped. |
| **Reassembly** | Given P1-P7 answered + interfaces satisfied, can the user execute the roadmap? | **PASS.** P1 → consolidated baseline. P2 + P3 → glue + criteria. P4 → handoff package launches Item 3's /MVL+. P5 → tests Item 3's output when it ships. P6 → finding correctly references prior. P7 → user knows which session does what. |

### Full 7 dimensions

| Dimension | Check | Result |
|---|---|---|
| Independence | (above) | PASS |
| Completeness | (above) | PASS |
| Reassembly | (above) | PASS |
| **Tractability** | Is each piece small enough for a single focused pass? | PASS for P1, P2, P5, P6 (each ≤6h). PASS for P3 (~4-6h focused /MVL+). P4 is small (~30-60min) — packaging only. P7 is medium (~30-60min). All tractable. |
| **Interface clarity** | All flows explicit; no hidden dependencies? | PASS. P5 ↔ P4 placeholder pattern flagged. P3 ↔ P5 heuristic-runnability flagged. P7's many-to-one (effort estimates) flagged. |
| **Balance** | Roughly proportional complexity per piece? | MIXED. P3 is the heaviest piece (own focused /MVL+ to design signals + heuristic). P4 is the lightest (packaging). The imbalance is structural — P3 contains epistemically harder work. Acceptable for this decomposition because P3's complexity is genuinely larger; partitioning P3 further would just push the same work into sub-pieces that have to come back together. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | PASS. All 7 boundaries showed top-down/bottom-up agreement in Step 3. |

### Failure-mode self-check

- **Premature decomposition?** No — sensemaking's SV6 was reached and stable; this decomposition operates on its committed roadmap.
- **Wrong boundaries?** No — coupling matrix confirmed cluster-internal coupling > cluster-boundary coupling.
- **Hidden coupling?** Two flagged in Step 5 (P5↔P4 placeholder, P3↔P5 heuristic-runnability), both made explicit as interface contracts. No remaining hidden.
- **Missing pieces?** No — atom-to-piece check (Step 3) showed every atom maps cleanly; reassembly check (above) confirmed completeness.
- **Over-decomposition?** No — 7 pieces for a 5-item roadmap with ~20 commitments. Roughly 3 commitments per piece, each piece tractable.
- **Ignoring dependencies?** No — Step 6 produced explicit dependency order with no circulars.
- **Imbalanced decomposition?** Mild — P3 is heavier than P4. Acceptable per Step 7 reasoning.

---

## Final Deliverable

### 1. Coupling Map

7 clusters identified; cross-cluster coupling minimal except for the P2/P3 → P4 → P5 spec-flow pipeline, which IS the natural dependency chain (not a coupling problem).

### 2. Question Tree

| # | Piece | Question |
|---|---|---|
| P1 | Item 1 commitments | What concrete consolidation actions does the user commit to, in what order, with what verification? |
| P2 | Item 2 spec | What are the precise trigger conditions for /navigate's invocation in the MVL flow, and how is post-invocation routing decided? |
| P3 | Item 4 spec | What are the operational definitions of the 3 traversal signals, the termination rule's thresholds, the v1 autonomous-selection heuristic, and where does the spec live? |
| P4 | Item 3 handoff | What inputs does Item 3's /MVL+ inquiry receive, what time-box trigger applies, and what fallback does the user execute if the time-box fires? |
| P5 | Item 5 design | Which project-internal test problem is committed, what mechanics-only pass criteria checklist applies, and is manual mode also tested? |
| P6 | Reconciliation | How does this finding's roadmap relate to the prior sensemaking, and what frontmatter/cross-reference enforces the relation? |
| P7 | Pacing | Which scoped items go in which session, and where are the natural break-points? |

Verification criteria per piece: detailed in Step 4 above.

### 3. Interface Map

(Detailed in Step 5; summary:) P1 → all (prerequisite); P2 + P3 → P4 (spec input); P3 → P5 (heuristic); P4 → P5 (runner contract via placeholder); P1-P5 → P7 (effort estimates); P6 isolated.

### 4. Dependency Order

```
P1 → (P2 || P3 || P6) → P4 → P5 → P7
```

P6 is parallelizable with anything. P5 can begin in parallel with P4 (placeholder mode). P7 is last.

### 5. Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS (with two flagged contracts) |
| Balance | MIXED (acceptable — P3 is structurally heavier) |
| Confidence | PASS |

**Decomposition is sound. Proceed to Innovation.**

### Notes for Innovation phase

- **P3 is the heaviest piece** and likely deserves the most innovation effort (multiple candidate signal definitions, multiple heuristic candidates, multiple termination thresholds).
- **P1's RESUME decision** has only 2 candidates (wire-up vs delete) but each has sub-variants (which discipline to wire to; what scope of removal). Innovation should enumerate the sub-variants.
- **P5's test problem choice** has at least 3 candidates from sensemaking; innovation should produce a 4th-candidate scan to avoid premature commitment.
- **P6's relation type** doesn't match standard frontmatter labels cleanly (sensemaking's "nested-as-fallback" relation isn't REFINES, isn't SUPERSEDES, isn't RELATED). Innovation should propose either a new label or pick the closest existing one with rationale.
- **P7's pacing** has weak constraints (4-7 sessions, 2-3 weeks). Innovation should propose 2-3 candidate session schedules; critique can pick.
- **Skip Piece A** (roadmap shape/ordering challenge) — sensemaking already resolved the order; if critique wants to re-challenge it, that's critique's job, not innovation's.
