# Decomposition: Meta-loop autonomy ladder and open design questions

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From Sensemaking's SV6 stabilized model, the design has these elements:

1. The ladder shape (discrete L0–L5).
2. The 8-axis frame (Worker, Navigator, Selector, Runner, Evaluator, Memory, Multi-head, Goal-formation).
3. Role-allocation per level (the L×8 table cells).
4. Loop-count default per level.
5. Chaining default per level (linear/tree/graph).
6. Movement-direction subset per level (when system selects).
7. Evidence gates per level transition.
8. Build-readiness phase per level.
9. Dominant failure mode per level.
10. Multi-axial honesty footnote.
11. Open architectural decisions: O1 (Memory axis advancement), O2 (Selector/Runner separation at L4), O3 (L3 convergence heuristic), O4 (L4 MERGE protocol), O5 (L5 goal-formation source).

### Pairwise coupling — "if I change A, does B need to change?"

| A | B | Coupling | Reason |
|---|---|---|---|
| Ladder shape (#1) | 8-axis frame (#2) | **Strong** | Ladder rows are summary points in the axis space; change axis count → table dim changes. |
| 8-axis frame (#2) | Role-allocation cells (#3) | **Strong** | Cells exist for each axis × level pair. |
| Role-allocation (#3) | Loop count per level (#4) | **Moderate** | L_N's loop-count default depends on which Selector/Runner position L_N has. |
| Role-allocation (#3) | Chaining per level (#5) | **Moderate** | Chaining shape depends on Multi-head axis position. |
| Role-allocation (#3) | Movement-direction subset (#6) | **Moderate** | Subset reliability depends on Selector + Memory axes. |
| Role-allocation (#3) | Evidence gates (#7) | **Moderate** | Gates fire when a specific role is graduating. |
| Role-allocation (#3) | Failure mode (#9) | **Moderate** | Dominant failure mode comes from which role just became system. |
| Loop count (#4) | Chaining (#5) | **Weak** | Mostly independent. Per-head budget at L4+ couples to multi-head shape, but resolved through #3 not directly. |
| Loop count (#4) | Movement-direction (#6) | **Weak** | Different concerns. |
| Chaining (#5) | Movement-direction (#6) | **Weak** | Tree/graph topology vs. movement vocabulary subset are separable choices. |
| Evidence gates (#7) | Build-readiness phase (#8) | **Strong** | Phase = function of gates (gate satisfied → phase advances). |
| Failure mode (#9) | Anything else | **Weak** | Failure modes are observations on the level, not inputs to other choices. |
| Multi-axial footnote (#10) | Anything | **Weak** | Framing meta-comment; doesn't change rows. |
| Open decisions (#11/O1–O5) | Specific axes/levels | **Strong but localized** | Each open decision binds to one piece (O1→#3, O3→#4, O4→#5, O5→#3 at L5). |

### Coupling map summary

```
        ┌─────────────────────────────────────────────────────┐
        │                  ROLE-ALLOCATION TABLE              │
        │       (Ladder × 8-axis cells; #1+#2+#3 fused)       │
        │       embeds O1, O2, O5 commitments                 │
        └──────────────────────┬──────────────────────────────┘
                               │ (Strong) — every other piece reads from here
       ┌───────────┬───────────┼───────────┬───────────┬─────────────┐
       │           │           │           │           │             │
       ▼           ▼           ▼           ▼           ▼             ▼
   Loop-count   Chaining   Movement-   Gates +    Failure mode    Multi-axial
   per level    per level  direction   build-     per level       footnote
   (#4 + O3)    (#5 + O4)  subset      readiness  (#9)            (#10)
                           per level   per level
                           (#6)        (#7+#8)
       │           │           │           │
       └───weak────┴───weak────┴───────────┘
       (P2/P3/P4/P5/P6 mostly independent of each other)
```

**Cluster identification:**
- **Cluster H (hub):** elements #1, #2, #3, plus O1, O2, O5 (open decisions about role-allocation cells). Tightly coupled — they describe the same object (the role-allocation table). Cuts within this cluster would split atoms.
- **Spoke clusters S1–S5:** each per-level dimension that depends on the hub but is independent of other spokes. S1 = loop count + O3. S2 = chaining + O4. S3 = movement-direction subset. S4 = gates + build-readiness. S5 = failure modes.
- **Frame cluster F:** multi-axial honesty footnote. Loosely coupled to everything; its job is to state the meta-frame.

---

## Step 2 — Detect Boundaries (Top-Down)

The natural boundaries are:

- **B-H/S:** between the hub (role-allocation table) and each spoke (per-level dimension). Crossing traffic: the spoke READS the hub for its level's role positions. Low-bandwidth one-way flow.
- **B-S/S:** between adjacent spokes. Almost no crossing traffic — each spoke can be answered without the others.
- **B-S/F:** between spokes and the framing footnote. Footnote READS the hub shape; spokes don't read the footnote.

**Initial piece set (boundary cuts marked):**

```
  ┌─ Hub: Role-Allocation Table (P1) ──────┐
  │                                         │
  ├─ Spoke S1: Loop count per level (P2) ──┤
  │                                         │
  ├─ Spoke S2: Chaining per level (P3) ────┤
  │                                         │
  ├─ Spoke S3: Movement-direction subset    │
  │            per level (P4) ──────────────┤
  │                                         │
  ├─ Spoke S4: Evidence gates +             │
  │            build-readiness (P5) ────────┤
  │                                         │
  ├─ Spoke S5: Failure modes per level (P6) ┤
  │                                         │
  └─ Frame: Multi-axial honesty (P7) ──────┘
```

**Why these boundaries:**
- Cuts at low-coupling regions (between spokes, between hub and each spoke).
- Each piece is internally cohesive — the hub is one table; each spoke is one column-of-defaults across L0–L5.
- Hub's high internal coupling preserved (don't split role-allocation cells across pieces).

**Boundary type:** Single-point boundaries between hub and each spoke; interface is "spoke reads hub at level L." Not diffuse.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms (irreducible elements)

- A1: "L0 row of role-allocation" (single tuple of 8 axis positions).
- A2: "L1 row" — same shape.
- A3–A6: L2, L3, L4, L5 rows.
- A7: "L0 loop-count default" (single value).
- A8–A12: L1–L5 loop-count defaults.
- A13–A18: L0–L5 chaining defaults.
- A19–A24: L0–L5 movement-direction subsets.
- A25–A29: L1→L0 transition gate criteria. Wait — gates exist on transitions, so A25 = L0→L1 gate, ..., A29 = L4→L5 gate. (5 transition gates for 6 levels.)
- A30–A35: L0–L5 build-readiness phase tags (now / soon / mid / mid-late / multi-head-phase / boundary).
- A36–A41: L0–L5 dominant failure modes.
- A42: Multi-axial honesty paragraph.

### Atom-to-piece grouping

| Atoms | Piece |
|---|---|
| A1–A6 (role-allocation rows) | P1 (hub) |
| A7–A12 (loop-count defaults) | P2 |
| A13–A18 (chaining defaults) | P3 |
| A19–A24 (movement-direction subsets) | P4 |
| A25–A29 (gates) + A30–A35 (build-readiness) | P5 |
| A36–A41 (failure modes) | P6 |
| A42 (multi-axial footnote) | P7 |

### Boundary checks

- **Are atoms split across boundaries?** Check O3 (L3 convergence heuristic). It's a stop-condition for L3+; it lives in P2 (loop count), not in P5 (gates). Good — P2 owns the heuristic; P5 only owns transition gates.
- **Are atoms incorrectly grouped?** Check Memory axis (column in the L×8 table). Memory advances at L_N alongside another role; the column is in P1, not in any spoke. Good — P1 owns ALL columns of the table.
- **L4 separation question (O2: Selector vs Runner separated as roles?).** This affects the SHAPE of the table at L4 (is "Selector" a column position; is "Runner" a column position). Both are columns regardless. The question is whether they are simultaneously system at L4 or staggered. This is a P1 commitment.
- **L4 MERGE protocol (O4).** This is a chaining concern (graph topology). Lives in P3.
- **L5 goal-formation source (O5).** This is a Goal-formation axis position commitment at L5. Lives in P1.

### Top-down vs bottom-up agreement

| Boundary | Top-down location | Bottom-up confirms? |
|---|---|---|
| P1 / P2 | between role-allocation table and loop-count column | ✓ Atoms group cleanly |
| P1 / P3 | between role-allocation table and chaining column | ✓ |
| P1 / P4 | between role-allocation table and movement-direction column | ✓ |
| P1 / P5 | between role-allocation table and gates+phase | ✓ |
| P1 / P6 | between role-allocation table and failure modes | ✓ |
| P1 / P7 | between table and footnote | ✓ |
| P2 / P3 / P4 / P5 / P6 | spokes mutually independent | ✓ Atoms don't cross |

All boundaries confirmed bottom-up. **Confidence: HIGH** — proceed.

---

## Step 4 — Express as Question Tree

### P1 — Role-Allocation Table (HUB)

**Question:** What are the role positions for Worker, Navigator, Selector, Runner, Evaluator, Memory, Multi-head, and Goal-formation at each level L0–L5, including the resolved positions for the open architectural decisions O1 (Memory axis advancement order), O2 (Selector/Runner separation at L4), and O5 (L5 goal-formation source)?

**Verification criteria:**
- [ ] All 6 rows (L0–L5) populated.
- [ ] All 8 columns populated for each row.
- [ ] Each cell is one of: `human`, `system`, `system (qualifier)`, `n/a`.
- [ ] Memory axis position is explicit (not implicit) at every level.
- [ ] L4 row resolves O2 (does Selector advance simultaneously with Runner, or before/after?).
- [ ] L5 row resolves O5 (system-curiosity vs. cumulative-feedback vs. user-set-priors).
- [ ] L0 and L1 rows match the user's anchored definitions (no contradiction).
- [ ] Navigator-isolation invariant (C1) preserved at every level ≥1.

### P2 — Loop-count default per level

**Question:** What is the default loop-count semantics and value (or rule) at each level L0–L5, including a placeholder L3 convergence heuristic (O3) for the budget+heuristic hybrid?

**Verification criteria:**
- [ ] Each level L0–L5 has a stated default.
- [ ] L0–L1 reflect human-decided semantics (no system-imposed bound).
- [ ] L2 commits to a fixed-budget value or rule.
- [ ] L3 specifies the placeholder convergence heuristic — what observable signals; how counted.
- [ ] L4 specifies per-head vs. session-aggregate budget.
- [ ] L5 specifies whether convergence-gated stop is operational (after C4 lands) or still placeholder.
- [ ] Each level's choice is justified by its corresponding role-allocation tuple in P1.

### P3 — Chaining default per level

**Question:** What is the default chaining topology (linear / tree / graph) at each level L0–L5, including the L4 MERGE protocol shape (O4) for cross-head finding integration?

**Verification criteria:**
- [ ] Each level L0–L5 has a stated chaining default.
- [ ] L0–L2 commit to linear.
- [ ] L3 commits to linear-with-light-revisit (or linear if revisit deferred).
- [ ] L4 commits to tree (multi-head) and specifies MERGE protocol shape (when does it fire; what does it produce; who reads it).
- [ ] L5 commits to graph or terminal.
- [ ] `_meta_state.md` schema requirement is named at each level transition (visited-path list / branch graph / inquiry-topology graph).
- [ ] Each level's choice is consistent with its Multi-head axis position in P1.

### P4 — Movement-direction subset per level

**Question:** When the system plays Selector at level L_N, which subset of Navigation's 16-type movement vocabulary can the system reliably select from, and how does the subset expand from L2 forward?

**Verification criteria:**
- [ ] L0 and L1 marked as "human selects, full taxonomy available."
- [ ] L2 specifies forward-only (or forward + a justified subset) with reasoning.
- [ ] L3 specifies expansion (typically + REVISIT, justified by Memory axis at L3).
- [ ] L4+ specifies expansion to full taxonomy including MERGE/CONSOLIDATE.
- [ ] Each subset's coupling to specific axis positions in P1 is explicit (e.g., "REVISIT requires Memory axis at L_N").
- [ ] Universal vocabulary claim restated: full Navigation 16-type taxonomy is the vocabulary at every level; restriction is on the SUBSET the system plays Selector over.

### P5 — Evidence gates + build-readiness phase per level

**Question:** What evidence gate certifies the transition from L_N to L_N+1, and what build-readiness phase tag (now / soon / mid / mid-late / multi-head / boundary) does each level carry — alongside how each gate is operationally measured?

**Verification criteria:**
- [ ] Each level L0→L1, L1→L2, L2→L3, L3→L4, L4→L5 has a named gate.
- [ ] L1→L2 gate restates "≥10 Navigation maps with selections + outcomes" (C3).
- [ ] L3→L4 gate restates "≥3 useful sequential chains" (C2).
- [ ] L2→L3 gate is named (currently undefined; must be specified or marked deferred).
- [ ] L4→L5 gate is named (currently informal; must be specified or marked deferred).
- [ ] Each gate's measurement procedure is operational (what to count; where to look).
- [ ] Build-readiness phase per level tagged (L0=now, L1=now, L2=soon if gate met, L3=mid, L4=multi-head phase, L5=boundary).

### P6 — Dominant failure mode per level

**Question:** What is the dominant level-specific failure mode at each level L0–L5, and how does the level's design counter it?

**Verification criteria:**
- [ ] Each level L0–L5 has a named dominant failure mode.
- [ ] L0: human-fatigue / arbitrary selection.
- [ ] L1: cold Navigation / manual-invocation friction.
- [ ] L2: low-value automated selections (Selector miscalibration).
- [ ] L3: spinning / non-stopping runner.
- [ ] L4: branch-explosion / cross-head race / MERGE failures.
- [ ] L5: goal-formation drift.
- [ ] Each failure mode has a corresponding mitigation traced to design choices in P1, P2, P3, P4, or P5.

### P7 — Multi-axial honesty footnote

**Question:** How is the multi-axial gradient framing communicated alongside the discrete ladder, including how to detect when a project's actual path diverges from the canonical L0–L5 path and how the user should reframe the ladder for that case?

**Verification criteria:**
- [ ] Footnote explicitly states the 8 axes are independent.
- [ ] Footnote names the canonical path (L0→L1→L2→L3→L4→L5 = Navigator→Selector→Runner→Multi-head+Evaluator→Goal-formation graduates in this order).
- [ ] Footnote names ≥1 alternative path example.
- [ ] Footnote specifies the divergence-detection mechanism (how does the user notice their project's path differs, e.g., a role graduates "out of order" because that role is the bottleneck rather than the user-anchored next-step).
- [ ] Footnote ties the multi-axial framing to `enes/desc.md`'s autonomy-indicator framing.

---

## Step 5 — Map Interfaces

### Interface table

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Role-allocation row at level L_N (especially Selector and Runner positions) | one-way | Read |
| P1 | P3 | Role-allocation row at L_N (especially Multi-head position) | one-way | Read |
| P1 | P4 | Role-allocation row at L_N (especially Selector + Memory positions) | one-way | Read |
| P1 | P5 | Role-allocation row at L_N AND the transition deltas (which axis advances L_N → L_N+1) | one-way | Read |
| P1 | P6 | Role-allocation row at L_N (especially the role that just became system at L_N) | one-way | Read |
| P1 | P7 | Full L×8 table shape | one-way | Read |
| P2 | (none) | — | — | terminal |
| P3 | (none) | — | — | terminal |
| P4 | (none) | — | — | terminal |
| P5 | P6 | Build-readiness phase tag (informs which failure mode is currently observable vs. designed) | one-way | Read |
| P6 | (none) | — | — | terminal |
| P7 | (none, except as wrap of P1) | divergence-detection rule references P1's canonical path | one-way | Read |

### Interface flow types

- **Read:** the consumer piece reads stable values from the producer piece.
- All flows are one-way (no bidirectional) — the hub provides; spokes consume.
- No "shared mutable state," no "timing dependency," no "callback" — all flows are static read.

### Hidden-coupling check

- **Q: Does P2 (loop count) depend on Memory axis position (in P1) without saying so?** Yes, partially — at L3 the convergence heuristic might use memory observations. Make this explicit: P2's L3 verification criterion says "specify the placeholder heuristic" which forces this dependency to the surface.
- **Q: Does P3 (chaining) hide-couple with P5 (multi-head gate)?** Possibly — chaining at L4 (tree) is gated by C2 (≥3 chains for multi-head). P3's L4 verification criterion says "MERGE protocol" which forces this dependency to the surface.
- **Q: Does P6 (failure modes) require runtime determination?** P5→P6 flow includes "build-readiness phase tag" which is itself a determination ("has the gate been met?"). The determination mechanism IS what P5 specifies (gate measurement). So the determination-mechanism piece check is satisfied: P5 owns HOW the runtime "is gate met?" check works.

No remaining hidden coupling.

---

## Step 6 — Order by Dependency

### Sequential ordering

```
Step 1: P1 (hub) — Role-Allocation Table
  ↓
Step 2: P2, P3, P4, P5, P6 — IN PARALLEL
  ↓
Step 3: P7 (frame footnote) — wraps the result
```

### Reasoning

- **P1 must come first** — every other piece reads from it.
- **P2, P3, P4, P5, P6 can be done in parallel** — they are mutually independent (no spoke depends on another spoke).
- **P5 → P6** has a soft dependency (P6 reads P5's build-readiness phase tag). In practice this is small enough that P6 can be drafted while P5 finalizes; reconcile at the end.
- **P7 last** — it summarizes the multi-axial honesty across the finished structure; needs P1 finished and ideally P2–P6 sketched (so the footnote can correctly reference the canonical path).

### Critical path

**P1 is critical.** Every other piece blocks on P1. Innovation should commit P1 in full before approaching P2–P7.

### No circular dependencies

Verified — all flows are one-way from the hub outward.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Verdict | Notes |
|---|---|---|---|
| **Independence** | Each piece's question answerable without sibling pieces? | **PASS** | P2–P6 each read P1 only. P7 reads P1 + summary of the others. No piece needs another piece's INTERIOR. |
| **Completeness** | Pieces cover the whole? | **PASS** | All four user-asked questions (ladder + 3 open parameters) are covered by P1–P4. Failure modes (P6), gates (P5), framing (P7) cover the implicit goal. The reassembly of P1+P2+P3+P4+P5+P6+P7 IS the final design proposal. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | Given P1's table, P2's loop-counts, P3's chaining, P4's movement-subsets, P5's gates+phases, P6's failure modes, and P7's footnote — the original "design the meta-loop autonomy ladder + open parameters" is fully addressed. |

### Determination-mechanism piece check

- **Determination at runtime:** "Is the gate for L_N→L_N+1 met?" — this is a runtime check.
- **Piece addressing how the check is performed:** P5 explicitly owns this. P5's verification criterion 6 says "Each gate's measurement procedure is operational (what to count; where to look)." Pass.

### Full 7-dimension evaluation

| Dimension | Check | Verdict | Notes |
|---|---|---|---|
| Independence | P2–P6 don't read each other's interiors | PASS | (above) |
| Completeness | All user-asked + sensemaking-derived questions covered | PASS | (above) |
| Reassembly | Pieces compose to the original whole | PASS | (above) |
| Tractability | Each piece small enough for one focused pass | PASS | P1 is the largest (6 rows × 8 cols + 3 open commitments O1/O2/O5); doable in one Innovation pass. P2–P6 are each ≈6 rows × 1 column; trivial in one pass. P7 is one paragraph. |
| Interface clarity | Cross-piece flows explicit? | PASS | All flows tabulated in Step 5; all are one-way Reads from P1. |
| Balance | Complexity proportional? | **WARN** | P1 carries ~50% of the work (it's the hub with the table and 3 commitments). P2–P6 are smaller. P7 is smallest. This is a hub-spoke shape; the hub's outsized share is intentional, not a sign of imbalance. Acceptable. |
| Confidence | Top-down ↔ bottom-up agree? | PASS | Step 3 confirmed full agreement on all boundaries. |

### Failure-mode self-check

- **Premature decomposition?** No — sensemaking provided clear conceptual structure (8 axes, ladder, 3 parameters) before this decomposition.
- **Wrong boundaries?** No — boundaries cut at low-coupling regions (between hub and spokes; between independent spokes).
- **Hidden coupling?** Two checked and surfaced (P2/Memory; P3/multi-head gate); both made explicit via verification criteria.
- **Missing pieces?** No — determination-mechanism check passed (P5 owns gate measurement). Specific-vs-pattern check: pieces cover the broad pattern (any project, any path), not just the user's L0+L1 specific case.
- **Over-decomposition?** No — 7 pieces for a complex multi-question inquiry is reasonable. None are trivial fragments.
- **Ignoring dependencies?** No — Step 6 made the dependency order explicit (P1 → parallel(P2–P6) → P7).
- **Imbalanced?** P1 is heavier than spokes; this is a hub-spoke architecture's natural shape, not an imbalance to fix. Flagged in evaluation.

---

## Final Deliverable

### Coupling Map

One hub (role-allocation table fusing #1+#2+#3+O1+O2+O5), five spokes (per-level dimensions: loop count, chaining, movement-direction, gates+phase, failure modes), one frame (multi-axial footnote). Strong coupling within hub; one-way Read coupling from hub to each spoke; weak coupling between spokes; weak coupling between spokes and frame.

### Question Tree

**P1 — Role-Allocation Table** (hub)
- Q: What are role positions for 8 axes × 6 levels, including O1, O2, O5 commitments?
- 8 verification criteria.

**P2 — Loop-count default per level** (spoke)
- Q: What loop-count default at each level, including O3 placeholder heuristic at L3?
- 7 verification criteria.

**P3 — Chaining default per level** (spoke)
- Q: What chaining topology at each level, including O4 MERGE protocol at L4?
- 7 verification criteria.

**P4 — Movement-direction subset per level** (spoke)
- Q: What system-Selector subset at each level, with axis-coupling explicit?
- 6 verification criteria.

**P5 — Gates + build-readiness per level** (spoke)
- Q: What gate certifies each transition, and what build-readiness phase per level?
- 7 verification criteria.

**P6 — Dominant failure mode per level** (spoke)
- Q: What dominant failure mode per level, with mitigations traced to design choices?
- 7 verification criteria.

**P7 — Multi-axial honesty footnote** (frame)
- Q: How communicate multi-axial framing + alternative-path detection?
- 5 verification criteria.

### Interface Map

| From | To | Flow | Type |
|---|---|---|---|
| P1 | P2 | role positions (esp. Selector/Runner) at level | Read |
| P1 | P3 | role positions (esp. Multi-head) at level | Read |
| P1 | P4 | role positions (esp. Selector/Memory) at level | Read |
| P1 | P5 | role positions + transition deltas | Read |
| P1 | P6 | role positions (newly-system role at level) | Read |
| P1 | P7 | full table shape | Read |
| P5 | P6 | build-readiness phase tag | Read |

All flows one-way Reads. No bidirectional, no shared state, no circular.

### Dependency Order

```
Step 1: P1 (HUB) ─── must complete first
Step 2: P2, P3, P4, P5, P6 ─── parallel (read P1)
Step 3: P7 ─── after P1; benefits from sketch of P2-P6
```

P1 is on the critical path.

### Self-Evaluation Result

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | WARN (intentional hub-spoke imbalance; acceptable) |
| Confidence | PASS |
| Determination-mechanism check | PASS |

**6/7 PASS, 1/7 WARN (acceptable).** Decomposition committed; proceed to Innovation.

---

## Notes for next discipline

**Innovation should:**
1. Commit P1 in full — write the 6×8 role-allocation table with explicit cell values; resolve O1 (Memory advancement order), O2 (L4 Selector/Runner timing), O5 (L5 goal-formation source).
2. Commit P2–P6 each as 6-row tables (one row per level), with the open decisions O3/O4 resolved.
3. Commit P7 as a paragraph or short subsection.
4. Watch for hidden coupling at L3 (Memory + Selector + REVISIT) and at L4 (multi-head + MERGE + Evaluator) — these are concentration zones for design errors.

**Critique should test:**
- Whether P1's commitments for O1/O2/O5 are justified or just plausible.
- Whether P2's L3 placeholder heuristic is robust enough or just placeholder.
- Whether P3's L4 MERGE protocol is operationally specifiable or hand-wavy.
- Whether P5's L2→L3 gate (currently unspecified in source documents) is well-defined or invented.
- Whether the hub-spoke decomposition obscures any genuinely cross-spoke coupling that would resurface during execution (DV2 trigger).
