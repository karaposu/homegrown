# Decomposition — Structural Check Tool Decision Problem

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/_branch.md

Input: sensemaking.md (4 structural commitments + 4 viable paths committed; user's REMOVE prior tested) + exploration.md (6 regions; option space enumerated). Decompose the decision-making problem so Innovation can generate alternatives within and Critique can evaluate against. Determine primary organizing axis: per-commitment vs per-path vs hybrid. Probably 5-6 pieces total.
```

---

## Whole to decompose

**The decision-making problem:** which of the four viable paths (A REMOVE-with-gate / B KEEP-AND-BUILD MINIMAL / C FORMALIZE-protocol / D HYBRID-with-maturity-gate) should be committed, given Sensemaking's four structural commitments (gate preservation / mechanism honesty / reliability acknowledgment / autonomy-trajectory awareness)?

The deliverable Critique will produce is **a winning path + reasoning anchored to the four commitments**. Innovation's role is to flesh out each path with concrete operational details (exact spec edits for A; exact script for B; exact protocol text for C; exact adversarial-test design for D). Decomposition partitions the elaboration work so the four paths can be developed in parallel and synthesized for Critique.

---

## Step 1 — Coupling Topology

### Element inventory (atoms)

- 4 viable paths from sensemaking: A REMOVE-with-gate / B KEEP-AND-BUILD MINIMAL / C FORMALIZE-protocol / D HYBRID-with-maturity-gate
- 4 structural commitments: gate preservation / mechanism honesty / reliability acknowledgment / autonomy-trajectory awareness
- 7 reference locations (4 runtime + 3 design notes) — edit-target locations regardless of which path wins
- The user's REMOVE prior (Path A; tested but not eliminated)
- The Q4c sibling-inquiry calibration-state dependency
- The autonomy-trajectory dimension (L0 / L2-3 / L4+) — different appropriate forms by level

### Coupling-propagation test

**Two candidate organizing axes:**

*Per-path:* each path is a candidate solution. Paths are MUTUALLY EXCLUSIVE (only one wins). Within a path: tight coupling between the path's mechanism + spec edits + cost profile + commitment-satisfaction tableau. Between paths: loose coupling (different mechanisms, different costs, different addressed-commitments profiles).

*Per-commitment:* each commitment is a question every winning option must answer. Commitments are largely ORTHOGONAL (gate preservation is independent of mechanism honesty; reliability acknowledgment is independent of autonomy-trajectory). Within a commitment-piece: multiple paths' answers cluster — moderate coupling. Between commitment-pieces: low coupling (orthogonal axes).

**Which cut is at lower coupling?**

Per-path: within-piece coupling is TIGHT (a path's mechanism determines its edits, costs, and commitment-handling). Between-piece coupling is LOOSE (paths are alternatives, not interacting).

Per-commitment: within-piece coupling is MODERATE (multiple paths' answers gathered under one commitment). Between-piece coupling is LOW (commitments orthogonal).

**Per-path wins** because it has tighter within-piece coupling (each path's atoms naturally cluster) and loose between-piece coupling (alternatives don't interact). The 4 commitments become **transverse evaluation criteria** within each path-piece — every path-piece's verification states how the path addresses each of the four commitments.

### Coupling map (visual)

```
Sensemaking SV6 commits:
  4 structural commitments (gate / mechanism / reliability / autonomy)
  4 viable paths (A / B / C / D)
              │
              │ Each path independently elaborate-able
              ▼
   ┌──────────┬──────────┬──────────┬──────────┐
   │ P1 PATH  │ P2 PATH  │ P3 PATH  │ P4 PATH  │
   │ A REMOVE │ B BUILD  │ C FORMAL │ D HYBRID │
   │ + gate   │ MINIMAL  │ -IZE     │ + matur. │
   │          │          │ protocol │ gate     │
   │          │          │          │          │
   │ each piece: concrete operational form +    │
   │ commitment-satisfaction tableau            │
   └─────┬────┴─────┬────┴─────┬────┴─────┬─────┘
         │          │          │          │
         │          │          │          │
         ▼          ▼          ▼          ▼
   ┌─────────────────────────────────────────────┐
   │ P5 META-DECISION                            │
   │  Synthesizes P1-P4; produces                │
   │  comparison-tableau across 4 paths × 4      │
   │  commitments; prepares input for Critique's │
   │  Phase 0 dimension construction.            │
   └─────────────────────────────────────────────┘

Transverse criteria (apply within each P1-P4):
  - Gate preservation (does this path preserve fix-and-re-save?)
  - Mechanism honesty (does spec text accurately name what's implemented?)
  - Reliability acknowledgment (how does this path handle the empirical-record ambiguity?)
  - Autonomy-trajectory (how does this path fare at L0 / L2-3 / L4+?)
```

### Major clusters and boundaries

**Clusters (high coupling within):**
- A. Path A's elaboration: REMOVE-with-gate spec text + edit list + commitment-satisfaction.
- B. Path B's elaboration: KEEP-AND-BUILD-MINIMAL script + invocation + commitment-satisfaction.
- C. Path C's elaboration: FORMALIZE protocol text + integration + commitment-satisfaction.
- D. Path D's elaboration: HYBRID maturity-gate adversarial-test design + decision trigger + commitment-satisfaction.

**Boundary regions (low coupling between):**
- Paths A and B differ in mechanism (LLM-canonical vs script-augmented); low data flow between.
- Paths A and C are structurally similar (both elevate LLM-self-check) but differ in artifact (spec edit only vs spec edit + new protocol file). Moderate within-decision-region; low between-elaboration-work.
- Path D is the META-PATH (decision contingent on adversarial-test outcome). Loosely coupled with A and B (which it might collapse into).

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map: the natural cuts are between paths (loose coupling) and between the path-elaboration tier and the synthesis tier (one-way data flow from paths to synthesis).

**Initial piece set (top-down):**
- P1. Path A (REMOVE with gate-preservation) — concrete operational form
- P2. Path B (KEEP-AND-BUILD MINIMAL) — concrete operational form
- P3. Path C (FORMALIZE LLM-self-check as protocol) — concrete operational form
- P4. Path D (HYBRID with adversarial-test maturity gate) — concrete operational form
- P5. Meta-decision — synthesis across the four paths

---

## Step 3 — Validate Boundaries (Bottom-Up)

Bottom-up: do the atoms cluster naturally into the 5 pieces?

| Atom | Maps to piece |
|---|---|
| Path A concrete spec edits (4 references in MVL/MVL+ runtime) | P1 |
| Path A's LLM-self-check explicit-gate procedure | P1 |
| Path A's spec-caveat text on reliability | P1 |
| Path B's script design (bash; ~20-50 lines) | P2 |
| Path B's per-discipline "stable universal section" rule | P2 |
| Path B's invocation integration in MVL/MVL+ | P2 |
| Path C's `homegrown/protocols/structural_check.md` text | P3 |
| Path C's runner-load integration | P3 |
| Path C's protocol-internal fix-and-re-save procedure | P3 |
| Path D's adversarial-test experiment design (intentional-flaw test) | P4 |
| Path D's decision-trigger (validate → promote; fail → fall back to B) | P4 |
| Path D's interim spec-state (keep script reference until test fires) | P4 |
| Comparison tableau across 4 paths × 4 commitments | P5 |
| Recommendation hand-off to Critique | P5 |

All atoms cluster cleanly. **Bottom-up confirms 5 pieces.**

**Determination-mechanism piece check** (Step 7 refinement): the Q-tree includes a load-bearing concept — "the four commitments are evaluation criteria for each path." How is this determination made? P5 (meta-decision) is the determination piece — it explicitly produces the per-path commitment-satisfaction tableau that Critique consumes. Without P5, the determination is distributed-and-implicit; with P5, it's centralized-and-explicit. **Check passes.**

**Confidence:** HIGH. Top-down (4 paths from sensemaking + 1 synthesis) and bottom-up (atoms cluster into 5 groups) agree.

---

## Step 4 — Question Tree

### P1 — Path A: REMOVE with explicit gate-preservation

**Question:** What is the concrete operational form of Path A — the REMOVE option with explicit gate-preservation, substrate-honest LLM-self-check naming, and reliability acknowledgment?

**Verification criteria:**
- [ ] Specifies the 4 runtime spec edits (MVL line 23 / MVL line 159 / MVL+ line 26 / MVL+ line 197). Each edit's before-text and after-text is concrete.
- [ ] The after-text REPLACES the script invocation with explicit LLM-self-check + fix-and-re-save procedure. Gate preservation: explicit fix-and-re-save on FAIL, not just "manually check and record."
- [ ] Substrate-honest mechanism naming: the spec text accurately names the mechanism as "LLM-performed structural verification" or similar — does NOT call it "Primitive RC" without qualification.
- [ ] Reliability acknowledgment: the spec text or an accompanying note explicitly acknowledges that LLM-self-check reliability is empirically unvalidated. This could be a caveat in the spec, or a forward-pointer to a future adversarial-test inquiry.
- [ ] Addresses what happens to the 3 enes/ design-note references (`enes/self_improvement_rate.md`, `enes/runtime_environment/folder_based.md`, `enes/loop_desing_ideas/loop_design_2.md`). Decision: edit for consistency, OR keep as historical record with deprecation note.
- [ ] States the autonomy-trajectory position: at L0 acceptable; at L4+ may require revisit. The spec text or accompanying note should not silently commit to L4+ adequacy.
- [ ] States the cost profile: spec-edit cost ~minutes; ongoing maintenance cost zero; foregone optionality cost (rebuilding later requires re-specing the script).

### P2 — Path B: KEEP-AND-BUILD MINIMAL

**Question:** What is the concrete operational form of Path B — a thin script that checks stable universal-section requirements, with LLM-self-check handling discipline-specific deep structure?

**Verification criteria:**
- [ ] Specifies the script's scope: which sections to check across which discipline outputs. The "stable universal section" candidate must be identified (e.g., every discipline has a Self-Assessment or Self-Evaluation section per the discipline reference files; an `## Overall:` self-assessment verdict line is also universally produced).
- [ ] The script's source code (bash, ~20-50 lines) or a precise pseudocode spec. The script takes `[inquiry_path]/[output_file] [discipline_name]` per the MVL/MVL+ invocation contract.
- [ ] Output format: `[PASS]` or `[FAIL: label1, label2]` per the MVL/MVL+ spec's gating contract. Gate preservation: the script's `[FAIL]` output triggers fix-and-re-save in the runner.
- [ ] Mechanism honesty: the spec text accurately names the script as "automated Primitive RC check" (deterministic mechanism). LLM-self-check still handles discipline-specific deep-structure verification not covered by the script.
- [ ] Reliability profile: deterministic (same input → same output); discriminating power scoped to universal sections.
- [ ] Maintenance cost: states which spec changes would require script edits (top-level section renames in the universal-section set). Estimated frequency: low.
- [ ] Autonomy-trajectory position: scales to L4+ multi-head (deterministic + low per-invocation cost).
- [ ] Q4c sibling-inquiry interaction: this path partially automates Q4c's per-edit spec-symptom check at the universal-section level.

### P3 — Path C: FORMALIZE LLM-self-check as protocol

**Question:** What is the concrete operational form of Path C — writing `homegrown/protocols/structural_check.md` as an explicit protocol the runner loads, with the LLM-self-check procedure (including fix-and-re-save) formalized?

**Verification criteria:**
- [ ] The protocol file's text (~30-80 lines). Structure: loading note + purpose + when to use + step-by-step procedure (read spec's required sections; check each; on FAIL fix-and-re-save; record result in `_state.md`) + failure modes + integration with runner.
- [ ] The 4 runtime spec edits (MVL/MVL+ lines 23/26/159/197) are simpler than Path A: they replace `bash tools/structural_check.sh ...` with a Skill-tool load of the protocol or a direct Read+execute pattern (matching how `branch_inquiry.md` and `conclude.md` are loaded today).
- [ ] Gate preservation: explicit in the protocol's procedure section (fix-and-re-save on FAIL is a numbered step).
- [ ] Mechanism honesty: the protocol's loading note names the mechanism — "LLM-performed structural verification with deterministic outcome on binary structural questions, probabilistic mechanism."
- [ ] Reliability acknowledgment: the protocol's Failure Modes section explicitly names "rubber-stamping risk" (self-reference) and the corrective.
- [ ] The protocol covers what the runner does on FAIL (fix-and-re-save with re-check) — the gate behavior is in the protocol, not just in the runner spec.
- [ ] Autonomy-trajectory position: protocol is callable at any autonomy level; the LLM-self-check mechanism scales with the substrate; explicit caveat for L4+ multi-head context cost.
- [ ] Cost profile: spec-edit cost ~minutes; protocol-file authoring cost ~hours; ongoing maintenance: protocol edits when discipline reference files change (similar to Path A but with one extra file to maintain).

### P4 — Path D: HYBRID with adversarial-test maturity gate

**Question:** What is the concrete operational form of Path D — retaining the script reference now, committing to an adversarial-test experiment (intentional-flaw test) that validates LLM-self-check reliability, and promoting LLM-self-check to canonical IF validated?

**Verification criteria:**
- [ ] The adversarial-test experiment design: (a) construct N intentionally-flawed discipline outputs (e.g., missing a required section; section present but content absent; section name slightly altered); (b) give them to a fresh LLM session running the structural-check fallback; (c) record whether the LLM-self-check catches the flaw or rubber-stamps.
- [ ] The maturity-gate criteria: what fraction of flaws caught counts as "validated"? Suggested threshold (placeholder — Innovation can refine): ≥90% catch rate on N≥10 intentionally-flawed outputs.
- [ ] The decision trigger: if validated → promote LLM-self-check to canonical (transition to Path A or Path C); if not validated → fall back to building the script (Path B).
- [ ] The interim spec state: the runtime spec remains UNCHANGED (script reference retained; fallback rule unchanged) until the test fires.
- [ ] Gate preservation: in the interim, the spec's fix-and-re-save behavior is already documented; no change needed.
- [ ] Mechanism honesty: no change to spec text in the interim; honesty is preserved by the existing dual-mode spec.
- [ ] Reliability acknowledgment: directly addressed via the adversarial-test commitment. This is the path that takes the empirical-record ambiguity most seriously.
- [ ] Autonomy-trajectory position: defers the decision; validates the mechanism before relying on it.
- [ ] Cost profile: zero immediate spec-edit cost; adversarial-test build cost (~hours to design and run); decision-trigger cost (a follow-up materialization run to implement whichever path wins).

### P5 — Meta-decision

**Question:** Given the four paths (P1-P4) elaborated, how do they compare against the four structural commitments from Sensemaking, and what handoff does Critique need to pick the winner?

**Verification criteria:**
- [ ] Produces a 4×4 comparison tableau (rows: 4 paths; columns: 4 commitments). Each cell states: PASS / PARTIAL / FAIL and the reasoning.
- [ ] Identifies which paths are pareto-dominated (if a path fails any commitment another path passes without trade-off, it's dominated).
- [ ] States the trade-offs explicit: where each path's advantage comes at another path's expense.
- [ ] Names the asymmetries: invisible-vs-visible failure (Path A's invisible-rubber-stamping risk vs Path B's visible-maintenance cost); upfront-vs-ongoing cost; immediate-decision vs deferred-decision.
- [ ] Notes hybrids that could combine paths (e.g., Path B + Path C: build minimal script AND formalize LLM-self-check protocol for deep-structure; Path D collapsing into A or B depending on test outcome).
- [ ] Highlights where the user's REMOVE prior maps (Path A); what it loses relative to other paths.
- [ ] Prepares input for Critique's Phase 0: the 4 commitments become Critique's evaluation dimensions; the comparison tableau becomes the per-candidate adversarial-test scaffold.

---

## Step 5 — Interface Map

| # | Source | Target | What flows | Direction | Notes |
|---|---|---|---|---|---|
| I1 | Sensemaking SV6 (the 4 commitments + 4 paths) | P1, P2, P3, P4, P5 | **Conceptual model**: the four commitments are evaluation criteria; the four paths are the candidate set. | one-way | All five pieces read sensemaking. |
| I2 | Exploration (Reference Map; Empirical Record; Option Space; Confirmed-Absent) | P1, P2, P3, P4 | **Substrate data**: which file:line pairs to edit; what the empirical record looks like; what the script would check; what's absent. | one-way | P1 needs the 4 reference points; P2 needs the universal-section info; P3 needs the protocol-loading pattern; P4 needs the empirical-record ambiguity. |
| I3 | P1, P2, P3, P4 | P5 | **Per-path concrete forms + commitment-satisfaction state**: each path's mechanism, edits, cost profile, and per-commitment passes. | one-way | P5 cannot start until P1-P4 commit their concrete forms. |
| I4 | P5 | Critique (next discipline) | **Decision-ready synthesis**: comparison tableau + dominance analysis + trade-off summary. | one-way | P5's output is Critique's Phase 0 + Phase 1 raw material. |
| I5 | Q4c sibling-inquiry calibration-state | P1, P2 | **Side-effect on sibling**: Q4c's "could be automated when structural_check.sh ships" claim depends on which path wins. Path A: Q4c stays manual. Path B: Q4c partially automated. | one-way | Not a blocking dependency; informational for the sibling's calibration-state. |

**Hidden coupling check (assumptions-not-data):**

- *P1 assumes:* the 4 reference lines can be cleanly edited without breaking other parts of the runtime spec. Verified: the references are isolated paragraphs (fallback rule + invocation). Captured.
- *P1 assumes:* the LLM-self-check operationally happens (already documented as fallback). Captured.
- *P2 assumes:* bash is available in the user's environment. The MVL/MVL+ spec's existing invocation template assumes bash; assumption inherited from project. Captured.
- *P2 assumes:* a stable universal section exists across all 11 disciplines. Needs verification by Innovation (check each discipline's reference file for a common section like `Self-Assessment` or `## Overall:` verdict). Captured for Innovation to verify.
- *P3 assumes:* protocol-load infrastructure exists. Verified: `homegrown/protocols/` directory + the `conclude.md` / `branch_inquiry.md` loading pattern. Captured.
- *P4 assumes:* the user will commit to the adversarial-test experiment as a Next Action. Open assumption; Critique should test whether the user's stated preference for low-friction decisions is compatible with the maturity-gate commitment.
- *P5 assumes:* Critique will apply the 4 commitments as evaluation dimensions. Reasonable assumption per Critique's Phase 0 dimension-construction protocol.

All assumptions surfaced; either verified (captured) or surfaced for downstream attention.

---

## Step 6 — Dependency Order

```
Tier 1 (parallel; no internal dependencies):
  ● P1. Path A — REMOVE with gate-preservation
  ● P2. Path B — KEEP-AND-BUILD MINIMAL
  ● P3. Path C — FORMALIZE protocol
  ● P4. Path D — HYBRID with adversarial-test gate

Tier 2 (depends on Tier 1):
  ● P5. Meta-decision — synthesis across paths
```

**Reasoning:**
- *Tier 1 (P1-P4 parallel):* each path is an independent alternative; Innovation can generate concrete operational forms for all four in parallel.
- *Tier 2 (P5):* P5 synthesizes the four paths' outputs into the comparison tableau; cannot start until paths' concrete forms exist.

**No circular dependencies.**

**Parallel work opportunities for Innovation:** P1, P2, P3, P4 in parallel.

**Forced serial transition:** Tier 1 → Tier 2.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1, P2, P3, P4 are independent (different paths; no data flow between). P5 depends on P1-P4 via defined interface I3. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** 4 paths × per-path-piece + 1 meta-decision covers the decision problem. All atoms accounted for. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given each path's concrete form + the meta-decision's comparison tableau, Critique has what it needs to apply Phase 0-4 and pick a winning path. |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | (see above) | PASS |
| **Completeness** | (see above) | PASS |
| **Reassembly** | (see above) | PASS |
| **Tractability** | Each piece small enough for single focused pass? | **PASS.** Each P1-P4 specifies a single path's operational form (concrete mechanism + edits + commitments-satisfaction). P5 is a synthesis pass. None requires sub-decomposition. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies surfaced? | **PASS.** 5 interfaces enumerated (I1-I5). Assumptions-not-data check applied; 7 assumptions surfaced and captured. |
| **Balance** | Complexity proportional? | **PASS.** P1, P3, P4 are roughly similar in scope (spec edits + procedure text per path). P2 is slightly more (script source code). P5 is integrative — naturally smaller in raw word-count but high in synthesis value. Proportional, not imbalanced. |
| **Confidence** | Top-down + bottom-up agree? | **PASS (HIGH).** Both passes produce 5 pieces with the same clustering. The determination-mechanism check (P5 as the synthesis piece) is the one refinement bottom-up emphasized; already part of the design. |

### Failure mode check

- **Premature Decomposition:** NO — sensemaking clarified first (SV6 committed 4 commitments + 4 paths). Decomposition runs on stable understanding.
- **Wrong Boundaries:** NO — per-path cut groups tightly coupled atoms (mechanism + edits + costs per path); between-path coupling is loose.
- **Hidden Coupling:** NO — assumptions-not-data check applied; 7 assumptions surfaced and captured. P5 explicitly Reads from P1-P4.
- **Missing Pieces:** NO — determination-mechanism check fired and was resolved (P5 is the explicit synthesis/determination piece).
- **Over-Decomposition:** NO — 5 pieces is right-sized for 4 paths + 1 synthesis. Going finer (e.g., per-commitment sub-pieces within each path) would over-decompose.
- **Ignoring Dependencies:** NO — 2-tier order explicit; no circular dependencies; parallel-safe block (P1-P4) and forced-serial transition (P5).
- **Imbalanced Decomposition:** NO — P1-P4 are proportional; P5 is integrative.

---

## Self-Assessment

**Overall: PROCEED** (all 7 dimensions pass; all 7 failure modes clean; coupling map produced; question tree with verification criteria for 5 pieces; interface map with 5 interfaces + 7 captured assumptions; 2-tier dependency order with parallel + serial blocks).

**Handoff to Innovation:**

The 5 pieces are the sub-problems Innovation will generate concrete operational details for. Per-piece targets:
- **P1 Path A:** the 4 spec edits' exact text + the LLM-self-check procedure with fix-and-re-save + the reliability caveat wording + the enes/ design-note disposition.
- **P2 Path B:** the script's source code (bash) + the per-discipline stable-universal-section verification + invocation integration.
- **P3 Path C:** the `homegrown/protocols/structural_check.md` text + the runner-load integration + the protocol's failure-mode handling.
- **P4 Path D:** the adversarial-test experiment design (intentional-flaw construction + N + threshold) + the decision-trigger logic + interim-state specification.
- **P5 Meta-decision:** the 4×4 comparison tableau + dominance analysis + trade-off summary + Critique handoff packet.

Innovation should:
- Per path (P1-P4), apply the 7 mechanisms (or a relevant subset given the elaboration nature of the work) — Combination/Domain-Transfer/Constraint-Manipulation are most relevant; Absence-Recognition useful for catching omitted details; Inversion useful for testing whether the path's logic flips cleanly. Aim for full coverage across the inquiry as a whole, not per piece.
- For each piece, the verification criteria explicitly state the path's commitment-satisfaction tableau cells; Innovation populates them.
- The assembly check after individual outputs surfaces hybrids (e.g., a Path B+C hybrid: minimal script AND formalized protocol for deep-structure).

**Handoff to Critique:**

The 5-piece structure + the 4 structural commitments as transverse evaluation criteria + the user's stated REMOVE preference + Sensemaking's caveats give Critique the scaffolding for Phase 0 (commitments as dimensions) → Phase 1 (landscape with paths positioned per commitment-satisfaction) → Phase 2 (adversarial per path) → Phase 3 (SURVIVE/REFINE/KILL verdict) → Phase 3.5 (assembly check on hybrids) → Phase 4 (coverage + convergence; signal TERMINATE or ITERATE).
