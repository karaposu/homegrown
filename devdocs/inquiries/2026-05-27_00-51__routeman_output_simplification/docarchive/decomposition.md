# Decomposition — routeman_output_simplification

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/_branch.md

Decomposition purpose: partition the simplification-analysis work into pieces that Innovation can operate on independently. The 4-layer model from Sensemaking is the natural top-down partition seam. The 5 candidate paths from Sensemaking are the natural bottom-up partition. Decomposition produces a question-tree Innovation can address piece-by-piece, with explicit interfaces.

Preserve: 7 hard constraints from Sensemaking; the 5 paths A-E; the 4 layers (α/β/γ/δ) with their asymmetric simplification room; 3 PARTIAL/CONTINGENT frontier flags (FF-Su4, FF-Su6, FF-Su7).

Save to decomposition.md in inquiry folder.
```

---

## Step 1 — Perceive Coupling Topology

### Elements identified

From Sensemaking's SV6 and the 7 constraints + 5 paths + 4 layers + 8 frontier flags, the "whole to decompose" — *produce a concrete simplified-shape proposal for routeman's output* — has these candidate work-elements:

| ID | Element | What it adjudicates |
|---|---|---|
| **E1** | α-layer decisions | Which per-route CONTENT fields are preserved (Direction / Goal / Movement Type / Priority / Status / Purpose / WHY / Guidance / Continuation Note). User has preserved α at the content level; this piece adjudicates the boundary between content-fields and wrapping-fields per Ambiguity 3. |
| **E2** | β-layer decisions | What CROSS-INVOCATION PERSISTENCE VOCABULARY remains after trimming. The 10-status, 13-field protocol machinery is up for cut. Per Ambiguity 4 the persistence requirement is bounded to 3 operations (read-prior / recalibrate / add-new). |
| **E3** | γ-layer decisions | Does `why_this_might_be_important` stay (and the 4-axis content distinction with it)? Per Ambiguity 7 the distinction is contingent on the parent field decision. |
| **E4** | δ-layer decisions | Which telemetry metrics survive, in what restructured form, in which file. Project-canonical per `anatomy_of_disciplines.md` — restructure but don't remove. |
| **E5** | File structure decisions | Number, names, section layout of files routeman produces. `routeman.md` vs `routeman_<N>.md` (sequential); `_route.md` vs `_navig.md` vs other; section-by-section layout per file. |
| **E6** | Multi-head compatibility check | A constraint-validation against each proposed shape: self-describing-on-disk + worker-identifier-inherent + stable schema. Per Sensemaking Ambiguity 2 trivially satisfied. |
| **E7** | Cross-invocation persistence semantics | The 3 operations (read-prior + recalibrate + add-new) the simplified shape must support; ties strongly to E2 (vocabulary) and E5 (where the state lives). |
| **E8** | User-veto compliance check | A constraint-validation: no warming-summary; not source-inquiry-required. |
| **E9** | Project-convention compliance check | A constraint-validation: underscore-prefix-for-meta-state; per-discipline canonical names; append-only-with-status-updates pattern; `docarchive/` for archived. |
| **E10** | Precedent-setting awareness | A meta-consideration: simpler routeman shape sets simpler template for `/reflect`; record awareness in final commitment rationale. |
| **E11** | Path selection / final commitment | Which of 5 paths A-E (or a 6th hybrid) is selected; concretely materialized as a shape that downstream materialization can implement. |
| **E12** | Frontier-flag-specific adjudication | FF-Su4 file-redundancy → maps to E5; FF-Su6 4-axis distinction → maps to E3; FF-Su7 staging-multi-head → maps to E2 + E5 + E6. Not a separate piece; markers placed within other pieces. |

### Coupling matrix (pairwise propagation: "if I change A, does B need to change?")

| | E1 | E2 | E3 | E4 | E5 | E6 | E7 |
|---|---|---|---|---|---|---|---|
| **E1** α | — | **STRONG** (shared per-route schema surface; α content fields and β wrapping fields coexist in current per-route entry) | **MODERATE** (γ's `why_this_might_be_important` is a per-route field; if γ goes, α's schema loses one field) | weak | moderate (file structure depends on per-route content size, but not deeply) | n/a (E6 is a check applied to E5) | n/a |
| **E2** β | strong | — | weak | weak (some telemetry tracks β states; cuts simplify telemetry) | **STRONG** (persistence-state lives in some file; β vocabulary and E5 file structure for state are bound) | n/a | **STRONG** (E2 IS the vocabulary that supports E7's 3 operations) |
| **E3** γ | moderate | weak | — | weak | weak (γ content lives in routeman.md per-route entries) | n/a | weak |
| **E4** δ | weak | weak | weak | — | **MODERATE** (telemetry's home — routeman.md vs `_route.md` vs split — is an E5 decision) | n/a | weak |
| **E5** | moderate | strong | weak | moderate | — | **MODERATE** (E5 outputs feed E6's validation) | **STRONG** (file structure carries the persistence state) |
| **E6** | — | — | — | — | moderate (checks against) | — | n/a |
| **E7** | — | strong | — | — | strong | — | — |

### Coupling clusters identified

- **Cluster I — Per-route schema surface.** E1 + E3 share the per-route entry as a surface. γ's `why_this_might_be_important` is a per-route field; α's content fields are also per-route fields. Adjudicating one informs the other.

- **Cluster II — Persistence state binding.** E2 + E5 + E7 are strongly coupled: persistence vocabulary (E2) + state file structure (E5 portion concerning state) + the operations supported (E7) co-exist as one binding.

- **Cluster III — Cross-cutting validation checks.** E6 (multi-head) + E8 (user vetoes) + E9 (project conventions) + E10 (precedent-setting awareness) are CHECKS applied to candidates, not pieces in the to-decide sense. Best handled as a Validation Layer applied at the selection stage.

- **Cluster IV — Selection.** E11 (final commitment) consumes outputs of all other pieces.

### Coupling map (visual summary)

```
                  ┌──────────────────────────┐
                  │ Validation Layer:         │
                  │ E6 multi-head check       │
                  │ E8 user-veto compliance   │
                  │ E9 project conventions    │
                  │ E10 precedent-setting     │
                  └──────────┬───────────────┘
                             │ applied to
                             ▼
        ┌──────────────────────────────────────┐
        │ E11 — Path selection / final shape  │
        └──────────────────────────────────────┘
                  ▲          ▲          ▲          ▲
                  │          │          │          │
        ┌─────────┴───┐  ┌───┴─────┐  ┌─┴────────┐ │
        │ E5 file     │◀─│ E1 α    │  │ E3 γ     │ │
        │ structure   │  │ content │◀─│ contingent│ │ (P3→P1 minor refinement loop)
        └──┬──────────┘  └────┬────┘  └──────────┘ │
           │ STRONG           │ MODERATE           │
           ▼                  │                    │
        ┌──────────────────┐  │                    │
        │ E2 β vocabulary  │  │                    │
        │ + E7 persistence │  │                    │
        │   semantics      │  │                    │
        └──────────────────┘  │                    │
                              ▼                    ▼
                        ┌────────────────────────────┐
                        │ E4 δ telemetry             │
                        │ (light coupling everywhere) │
                        └────────────────────────────┘
```

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, natural cut points:

1. **Between per-layer adjudications and integration.** The 4 layers (α/β/γ/δ) each have their own simplification space; integration into a unified shape happens after layer-level adjudication. Cut here.
2. **Between layer adjudication and file structure.** Layer decisions (what content, what vocabulary, what telemetry) precede the where-it-lives decision (which files, what sections).
3. **Between proposed shape and validation.** Constraint-checks (multi-head, vetoes, conventions) are applied AFTER a shape is proposed, not interleaved.
4. **Between validation and final selection.** Selection consumes validated candidates.

This yields 7 pieces aligned with the 4-layer model + file structure + validation + selection.

### Initial boundary set (top-down)

- **P1** — α-layer adjudication (per-route content fields preserved)
- **P2** — β-layer adjudication (persistence vocabulary trimmed)
- **P3** — γ-layer adjudication (`why_this_might_be_important` + 4-axis distinction stay/go)
- **P4** — δ-layer adjudication (telemetry metrics + restructuring)
- **P5** — File structure adjudication (number, names, section layout)
- **P6** — Multi-head compatibility check + user-veto check + project-convention check (consolidated Validation Layer; E6 + E8 + E9 + E10 as one checking-piece)
- **P7** — Path selection / final concrete shape commitment

P6 consolidates E6 + E8 + E9 + E10 (the cross-cutting checks) into one Validation piece because they share a common application surface (each check fires against each candidate shape).

---

## Step 3 — Validate Boundaries (Bottom-Up Sanity Check)

Identify obvious irreducible atoms and check they cluster into the top-down pieces:

| Atom | Description | Falls naturally into |
|---|---|---|
| A1 | "Cut the 3 unused statuses (queued/scheduled/expanded) from per-route Status field" | P2 (β trimming) ✓ |
| A2 | "Cut the 6 unused frontier-record fields (candidate_id, parent_map, etc.)" | P2 ✓ |
| A3 | "Decide if `why_this_might_be_important` stays per-Route" | P3 (γ) ✓ |
| A4 | "Decide if 4-axis content distinction documentation stays" | P3 ✓ (contingent on A3) |
| A5 | "Decide which 7 status values stay (or simpler set)" | P2 ✓ |
| A6 | "Decide if Telemetry Block stays in routeman.md or moves to `_route.md`" | P4 + P5 (joint at the interface) ✓ |
| A7 | "Decide if files are sequential (`routeman_<N>.md`) or single-overwrite (`routeman.md`)" | P5 ✓ |
| A8 | "Decide the second file's name (`_route.md` vs `_navig.md` vs other)" | P5 ✓ |
| A9 | "Decide which Telemetry metrics survive (per-Family balance? per-type distribution? etc.)" | P4 ✓ |
| A10 | "Decide which α content fields per-route are kept (Direction / Goal / Movement Type / Priority / Status / Purpose / WHY / Guidance / Continuation Note — all? some?)" | P1 ✓ |
| A11 | "Test proposed shape against multi-head case (does Navigator-across-heads work?)" | P6 ✓ |
| A12 | "Test proposed shape against user-veto (no warming-summary; no source-inquiry-required)" | P6 ✓ |
| A13 | "Test proposed shape against project conventions (underscore-prefix; canonical names; append-only)" | P6 ✓ |
| A14 | "Select which of paths A-E (or hybrid) is the committed shape" | P7 ✓ |

All 14 atoms cluster cleanly into P1-P7. No atom split across pieces. No atom orphaned.

### Bottom-up vs top-down agreement: **HIGH confidence**

Top-down (cluster-derived) partition matches bottom-up (atom-derived) clustering. The 7 pieces are the natural seams.

---

## Step 4 — Express as Question Tree

### Q-tree

**P1 — What per-route content fields must be preserved (α layer)?**

- **Verification criteria:**
  - [ ] Every preserved field justified as "carries route content distinguishable for downstream selection" (Direction / Goal / Movement Type / Priority / Status / Purpose / WHY / Guidance / Continuation Note are each tested per-field).
  - [ ] Each field's removal-rationale OR retention-rationale is recorded.
  - [ ] The enumeration set's CONTENT completeness is preserved (per user constraint C1).
- **Stopping criterion:** all current α-layer fields have an explicit stay/cut/refine verdict + structural reasoning.

**P2 — What cross-invocation persistence vocabulary remains after β layer is trimmed?**

- **Verification criteria:**
  - [ ] The resulting vocabulary supports read-prior + recalibrate + add-new (3 operations per Ambiguity 4).
  - [ ] No dead-inheritance from the protocol remains (the 3 unused statuses + the unused frontier-record fields are cut).
  - [ ] No protocol-internal-only field survives (e.g., `expansion_reason`, `eligibility_reason`, `scheduling_reason` are unjustified for routeman's use).
  - [ ] The remaining vocabulary is routeman-NATIVE (named in routeman terms, not via alias to a protocol).
- **Stopping criterion:** the per-route Status field + any cross-invocation state field has a defined value set + rationale.

**P3 — Do `why_this_might_be_important` and the 4-axis content distinction stay?**

- **Verification criteria:**
  - [ ] Decision is structurally grounded (cites a load-bearing role OR cites the LAYER-2 filler-meta-reasoning failure mode the inquiry itself flagged).
  - [ ] If YES: the LAYER-2 audit substrate for "filler meta-reasoning" is preserved + the 4-axis content distinction is preserved.
  - [ ] If NO: the rationale for removal cites the contingent-on-parent reasoning from Ambiguity 7 + acknowledges what audit substrate is lost.
  - [ ] The decision provides input to P1 (if γ is cut, α schema loses one field via the P3→P1 refinement loop).
- **Stopping criterion:** binary verdict + reasoning + downstream-impact statement.

**P4 — What telemetry metrics survive, and how restructured (still in routeman.md, in `_route.md`, or split)?**

- **Verification criteria:**
  - [ ] The surviving metrics are useful (have a stated downstream consumer — Navigator, /reflect, manual review, etc.).
  - [ ] Restructuring preserves the project-canonical "telemetry is part of every discipline output" rule per `anatomy_of_disciplines.md`.
  - [ ] The 3 sub-categories from Sensemaking S7 (Content / Control / Quality telemetry) are reviewed for which sub-category stays where.
  - [ ] If telemetry moves out of routeman.md (e.g., to `_route.md`), the new home is justified.
- **Stopping criterion:** per-metric stay/cut/restructure verdict + final placement.

**P5 — What concrete file structure emerges (number of files; names; section layout per file)?**

- **Verification criteria:**
  - [ ] Underscore-prefix-for-meta-state convention respected (state file gets underscore prefix; content file doesn't).
  - [ ] Per-discipline canonical-name convention respected (the discipline-name `routeman.md` is the content file's name; matches sensemaking.md / innovation.md / etc.).
  - [ ] Supports the cross-invocation read flow (read-prior → recalibrate → add-new).
  - [ ] Doesn't require a source inquiry (user veto C4).
  - [ ] Doesn't re-introduce a warming-summary section (user veto C4).
  - [ ] Section layout per file is explicit (which sections, which content, which order).
- **Stopping criterion:** concrete file tree + per-file section list specified.

**P6 — Does the file structure satisfy multi-head + veto + convention checks?**

This is the consolidated Validation Layer (E6 + E8 + E9 + E10). For each candidate shape from P5:

- **Verification criteria:**
  - **Multi-head check:** (a) self-describing on disk; (b) worker-identifier inherent in inquiry folder + timestamp; (c) stable parseable schema; (d) Navigator-across-heads can read N outputs and aggregate without per-output multi-head-specific machinery.
  - **User-veto check:** (a) no warming-summary; (b) no source-inquiry-required; (c) the user's prior framing about `_route.md` cross-invocation behavior preserved.
  - **Project-convention check:** (a) underscore-prefix; (b) canonical names; (c) append-only-with-status-updates pattern; (d) `docarchive/` for archived (if applicable).
  - **Precedent-setting awareness:** the chosen shape's implications for `/reflect`'s eventual output template are noted.
- **Stopping criterion:** all four checks fire on the proposed shape with PASS / FLAG / FAIL verdict; failures route back to P5 for refinement.

**P7 — Which path is selected (A–E or a 6th hybrid), and what is the final committed shape?**

- **Verification criteria:**
  - [ ] Selected path satisfies all 7 constraints from Sensemaking.
  - [ ] Selected path resolves the 3 remaining frontier flags (FF-Su4 file-redundancy; FF-Su6 4-axis distinction; FF-Su7 staging-multi-head).
  - [ ] Selected path is concrete enough to be implemented as a spec edit to `cognitive_harness/routeman/references/routeman.md` (and SKILL.md if needed) without further design work.
  - [ ] The reasoning for selection over alternatives is recorded (Critique-style; SURVIVE survivors compared with reasoning).
  - [ ] Trade-offs acknowledged: what is GAINED + what is LOST + what is DEFERRED.
- **Stopping criterion:** committed shape with rationale + trade-off table.

### Pieces by current path-assignment:

For Innovation to map decisions to the 5 candidate paths (A through E) from Sensemaking, each path implies a particular cluster of per-piece decisions:

| Path | P1 (α) | P2 (β) | P3 (γ) | P4 (δ) | P5 (files) |
|---|---|---|---|---|---|
| **A** (user-hypothesis-minimal) | content-fields preserved | minimal (datetime + calc stats only) | likely cut (the hypothesis doesn't mention `why_this_might_be_important`) | folded into `_route.md` calc stats | `routeman.md` + `_route.md` |
| **B** (`nav_sample_story`-shape adapted) | content preserved | medium (Runs / Open Directions sections in `_route.md`) | could stay or go (not specified by source) | could live in either file | `routeman_<N>.md` sequential + `_route.md` ledger |
| **C** (routeman-specific-minimum-persistence) | content preserved | routeman-native 4-5-field record | contingent | restructured but present in routeman.md | `routeman.md` + `_route.md` |
| **D** (current-trimmed) | content preserved | trimmed but mostly retained | preserved | preserved | `routeman.md` + `_navig.md` (alias retained) |
| **E** (refactor-by-layer; eliminate β) | content preserved | eliminated (cross-inquiry pointers in routeman.md instead) | contingent (cut likely) | restructured | `routeman.md` + thin `_route.md` |

Innovation can use this table to generate per-path candidate variations + the path-comparison adversarial test.

---

## Step 5 — Map Interfaces

Interface map: what flows between which pieces.

| Source | Target | Flow content | Type | Direction |
|---|---|---|---|---|
| **P1** (α) | **P5** | Adjudicated set of per-route content fields | data / contract | one-way |
| **P1** | **P3** | List of currently-preserved per-route fields (informs γ's redundancy check) | data | one-way |
| **P1** | **P7** | Adjudicated α schema | data / verdict | one-way |
| **P2** (β) | **P5** | Persistence vocabulary that drives `_route.md`-equivalent file content | data / contract | one-way |
| **P2** | **P4** | The persistence states tracked (telemetry can report on them or skip if cut) | data | one-way |
| **P2** | **P7** | Adjudicated β vocabulary | verdict | one-way |
| **P3** (γ) | **P1** | If `why_this_might_be_important` is cut, α's schema loses that field | contract update | **feedback** |
| **P3** | **P5** | Whether γ-fields are present (affects per-route entry section structure) | data | one-way |
| **P3** | **P7** | Adjudicated γ (stay/go on field + distinction) | verdict | one-way |
| **P4** (δ) | **P5** | Telemetry's home (which file, which section) | placement | one-way |
| **P4** | **P7** | Adjudicated δ schema + placement | verdict | one-way |
| **P5** (files) | **P6** | Proposed concrete file structure for validation | proposal | one-way |
| **P6** (validation) | **P5** | Pass/fail/conditional verdicts on each check; failures route back for refinement | feedback | **two-way (refinement loop)** |
| **P6** | **P7** | Validated proposal (or set of validated proposals) | verdict + proposal | one-way |
| **P7** (selection) | (final inquiry output) | Committed simplified shape + selection rationale + trade-off table | final commitment | one-way |

### Assumptions-not-data check (refinement note from `decompose.md`)

Per the refinement note: interfaces must capture assumptions, not just data. For each interface, what assumptions does the target make about what the source provides?

- **P1 → P5 assumption:** P5 assumes P1's content-field set is COMPLETE for downstream selection. If P1 cuts a field that the Navigator-across-heads needs, P5's proposed structure fails P6's multi-head check. Captured by P6's check.
- **P2 → P5 assumption:** P5 assumes P2's vocabulary is sufficient for the 3 persistence operations. Captured by P2's verification criteria.
- **P3 → P1 assumption (feedback):** P1's final schema assumes P3 has decided BEFORE P5 starts. Sequencing: P3 must complete before P1's final commit if γ-cut would change α schema.
- **P5 → P6 assumption:** P6 assumes P5 produces a PROPOSAL (not a commitment) that can be modified if checks fail. Captured by the refinement loop.
- **P6 → P5 assumption:** When P6 fails a check, the failure is concrete enough to drive P5's refinement. Captured by P6's verification criteria (each check produces specific PASS/FLAG/FAIL with reasoning).

No hidden assumptions detected. The interface map is complete.

---

## Step 6 — Order by Dependency

### Tier 0 (can run in parallel)

- **P1** (α adjudication)
- **P2** (β adjudication)
- **P3** (γ adjudication)
- **P4** (δ adjudication)

These four layer-adjudications are mostly independent (per the coupling matrix). The P3→P1 feedback is shallow: if P3 cuts `why_this_might_be_important`, P1's preliminary schema is reduced by one field — this is a refinement, not a cycle.

**Recommended parallel execution:** P1, P2, P3, P4 in Tier 0.

**Sequencing within Tier 0:**

- P3 should run EARLY in Tier 0 so its feedback to P1 happens before P1 commits its final schema. Either: (a) P3 first, then P1; or (b) P1 and P3 in parallel, with P1's final commit waiting on P3's verdict.

### Tier 1

- **P5** (file structure) — depends on P1 + P2 + P3 + P4 outputs (all four layer adjudications).

### Tier 2

- **P6** (validation layer) — depends on P5 output.

### Tier 3

- **P7** (selection / final commitment) — depends on P1-P6.

### Dependency graph

```
Tier 0: [P1] [P2] [P3] [P4]    (parallel; P3→P1 feedback)
              │   │   │   │
              ▼   ▼   ▼   ▼
Tier 1:     ┌───────────┐
            │    P5     │
            └─────┬─────┘
                  ▼
Tier 2:     ┌───────────┐
            │    P6     │◀──────── refinement loop ────────┐
            └─────┬─────┘                                   │
                  ▼                                         │
            ┌───────────┐                                   │
            │   (P5 refined per P6 verdicts; loop)         │
            └─────┬─────┘                                   │
                  └─────────────────────────────────────────┘
                  ▼
Tier 3:     ┌───────────┐
            │    P7     │
            └───────────┘
```

No circular dependencies. Parallel execution at Tier 0 is genuine (each piece adjudicates its own layer independently). The refinement loop between P5 and P6 is bounded: P6 produces concrete failure signals; P5 refines; re-run P6.

### Parallel-vs-serial verdict

Innovation can effectively work on P1-P4 in parallel (one mechanism set per layer), then on P5 (after Tier 0 commits), then validate via P6, then select via P7. Critique fires across the whole — adversarially testing each piece's outputs and the final committed shape.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Verdict | Reasoning |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** (with conditional) | Tier 0 (P1-P4) genuinely independent (each adjudicates its own layer). Tier 1-3 conditionally independent given upstream outputs. The P3→P1 refinement loop is shallow + acknowledged + sequenced. P5→P6 refinement loop is similarly bounded. Each piece's verification criteria are answerable without reading sibling pieces (only the explicit interface outputs are consumed). |
| **Completeness** | Do the pieces cover the whole? | **PASS** | All 4 layers (α/β/γ/δ) addressed by P1-P4. File structure by P5. Multi-head + vetoes + conventions + precedent by P6. Selection by P7. The 7 constraints from Sensemaking map to specific pieces (C1 → P1's verification; C2 → P6; C3 → Layer Commitment honored throughout; C4 → P6 user-veto check; C5 → P6 project-convention check; C6 → P6 multi-head check; C7 → P6 append-only check). The 3 remaining frontier flags map to specific pieces (FF-Su4 → P5; FF-Su6 → P3; FF-Su7 → P2 + P5 + P6). The 5 candidate paths are the input space for P7. No part of the simplification problem is unaddressed. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | Given each piece's verification criteria met + interfaces honored, the result is a concrete simplified-shape proposal that respects all constraints, resolves all frontier flags, and is ready for spec materialization. Reassembly check: the 7 pieces + 14 interfaces, executed in dependency order, produce the final-commitment artifact (a routeman output shape proposal with per-file/per-section structure + selection rationale + trade-off table). |

### Full evaluation (7 dimensions)

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | Each piece small enough for one focused Innovation pass. P7 is heaviest (integrator) but bounded by upstream outputs. |
| **Interface clarity** | PASS | 14 interfaces explicitly mapped + assumptions check passed. |
| **Balance** | PASS-WITH-FLAG | P1-P4 roughly equivalent size; P5 larger (concrete file/section structure); P6 small (validation checks); P7 large (integrator). Some imbalance but not pathological. Flag: if P5 becomes too large, sub-decompose later. |
| **Confidence** | HIGH | Top-down (4-layer model + path partition) and bottom-up (14 atoms cluster cleanly into 7 pieces) agree. No hidden coupling detected. |

### Determination-mechanism piece check (refinement note)

The Q-tree includes a load-bearing concept whose use depends on runtime determination: P6 (multi-head + veto + convention checks). The check's applicability is determined at runtime by whether the proposed shape has been TESTED against each case. The Q-tree includes P6 as a separate piece with explicit verification criteria — the determination mechanism IS embedded. Reassembly check passes — the runtime check is provided by P6, not presupposed.

### Failure-mode review

- **Premature Decomposition:** No. Sensemaking ran first; the whole was clarified via 4-layer model + 5 paths + 7 constraints before partitioning.
- **Wrong Boundaries:** No. Cluster analysis showed natural seams at layer boundaries + file-structure + selection. Cuts respect coupling gradients (low-coupling between layers; strong-coupling within layer's internal decisions).
- **Hidden Coupling:** No (the P3→P1 feedback is acknowledged explicitly, not hidden). Assumptions-not-data check passed.
- **Missing Pieces:** No. Constraint-check via P6; selection via P7; precedent-setting in P6. Per determination-mechanism check: P6 provides the runtime determination mechanism for "is the proposed shape multi-head compatible?"
- **Over-Decomposition:** No. 7 pieces for a simplification problem with 4 layers + selection + validation feels right-sized. Each piece is tractable.
- **Ignoring Dependencies:** No. Explicit tier order (Tier 0 P1-P4 || ; Tier 1 P5; Tier 2 P6 with loop; Tier 3 P7). P3→P1 feedback noted.
- **Imbalanced Decomposition:** PASS-WITH-FLAG. P5 + P7 are heavier than P1-P4 + P6 but ratio is acceptable. If P5 explodes during Innovation, sub-decompose.

---

## Summary

**The simplification-analysis whole partitions into 7 pieces along the 4-layer × file-structure × validation × selection seams.**

- **Tier 0 (parallel):** P1 (α), P2 (β), P3 (γ), P4 (δ) — adjudicate each layer independently. P3 should run early to feed back to P1.
- **Tier 1:** P5 (file structure) — integrates Tier 0 outputs into a concrete file/section proposal.
- **Tier 2:** P6 (validation) — applies 4 cross-cutting checks (multi-head + vetoes + conventions + precedent). Refines P5 on failure.
- **Tier 3:** P7 (selection / final shape) — commits to one of 5 paths (A-E) or proposes a 6th hybrid; produces final shape + rationale + trade-off table.

**Innovation's input space:** 5 candidate paths × per-piece variations. Innovation can address P1-P4 in parallel (per-layer mechanism applications), then P5 (file-structure generation), then validate via P6, then select via P7.

**Critique's adversarial test surface:** each piece's output adversarially tested; the final committed shape adversarially tested against all 7 constraints + all 3 remaining frontier flags + the 5 paths.

**Verdict: PROCEED** — partition is sound; pieces are independent (with shallow acknowledged feedback); interfaces explicit; dependency order clear; self-evaluation passes 7/7 (with one balance flag); no failure modes triggered.
