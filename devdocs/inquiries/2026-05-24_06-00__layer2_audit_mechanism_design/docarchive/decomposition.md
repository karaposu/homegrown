## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Decomposition — Layer-2 Audit Mechanism Design

Decomposes the audit mechanism design into independently-tractable pieces with explicit interfaces and dependency ordering, per the 7-step Structural Decomposition process.

## Step 1 — Perceive Coupling Topology

The whole: a designed audit mechanism that consumes substrates for 5 LAYER-2 modes, runs at some location, fires at some cadence, applies thresholds calibrated to autonomy phase, and writes verdicts. From Sensemaking SV6, 5 architecture parameters are FIXED and 4 design choices are LIVE.

### Element inventory

The candidate elements (sub-pieces of the design):

- E1 — **Runner choice** (who runs the audit; 3 candidates after /reflect-exclusion).
- E2 — **Cadence shape** (the 2-layer fixed-interval-gating + per-mode-firing structure).
- E3 — **Per-mode firing rules** (when each mode's substrate is consulted within the cadence gating).
- E4 — **Threshold table** (per-mode multi-dimensional parameter sets; autonomy-level-keyed).
- E5 — **Threshold scaling source** (autonomy register; fixed).
- E6 — **Substrate consumption for 4 mature modes** (read existing substrates from 24-40 + 24-01).
- E7 — **False-depth substrate composition** (drop-rate + meta-reasoning distinctness + coordinate-pairwise components; weights).
- E8 — **Verdict emission format** (per-mode PROCEED / FLAG / RE-RUN + evidence anchors).
- E9 — **Audit-log file shape** (extension of `_navig.md` OR parallel `_audit.md`).
- E10 — **External grounding mechanism** (the audit's calibration externally sourced, not from audit history; mitigates self-coupling).
- E11 — **User surfacing** (how FLAG / RE-RUN verdicts reach the user via the runner's output).
- E12 — **L2+ extension hooks** (documented places the L0/L1 design can be elaborated when autonomy advances).
- E13 — **The audit's own LAYER-2 self-coverage** (does the audit also audit itself? — meta-recursive concern).

### Coupling map (qualitative, peak-and-valley)

For each pair, "Change A → does B need to change?"

| Element | Coupling with each other element | Cluster |
|---|---|---|
| **E1 Runner** | Strongly coupled to E2 (cadence), E11 (user surfacing), E9 (where output goes). Moderate with E3 (firing rules — the runner constrains when it can ask the audit to fire). Weak with E4-E8 (these operate inside whatever runner). | **CLUSTER 1: Operational location** |
| **E2 Cadence shape** | Strongly coupled to E1 (runner), E3 (firing rules — cadence IS the firing-rule shape). Moderate with E4 (some thresholds have time-window dimensions). Weak with E6-E9. | **CLUSTER 1** |
| **E3 Per-mode firing** | Strongly coupled to E2 (firing IS cadence). Moderate with E6 (consumption rule's per-mode-readiness gates firing). Weak with others. | **CLUSTER 1** |
| **E11 User surfacing** | Strongly coupled to E1 (runner). Moderate with E8 (the verdict format determines what surfaces). Weak with others. | **CLUSTER 1** |
| **E4 Threshold table** | Strongly coupled to E5 (scaling source). Moderate with E2 (time-window dim needs cadence value), E3 (firing-rule needs threshold). Weak with E1, E6, E7. | **CLUSTER 2: Calibration** |
| **E5 Threshold scaling source** | Strongly coupled to E4. Weak with others (the source is FIXED per KI4 — the autonomy register). | **CLUSTER 2** |
| **E10 External grounding** | Strongly coupled to E5 (external grounding IS the autonomy-register source). Moderate with E4 (grounding determines threshold-set authority). Weak with others. | **CLUSTER 2** |
| **E6 Substrate consumption (4 mature modes)** | Strongly coupled to its source files (24-40's `transition_history`, 24-01's A1+A3 outputs — these are FIXED external interfaces). Moderate with E3 (per-mode firing rule reads E6's output). Weak with most others. | **CLUSTER 3: Substrate (mature)** |
| **E7 False-depth substrate** | Internally cohesive (3 components: drop-rate, distinctness, coordinate-pairwise). Moderate with E3 (firing rule for false-depth needs E7's output). Weak with E6 (different substrates entirely). | **CLUSTER 4: False-depth substrate (new)** |
| **E8 Verdict emission format** | Strongly coupled to E9 (format determines what file shape can hold it). Moderate with E11 (surfacing reads the format). Weak with others. | **CLUSTER 5: Output** |
| **E9 Audit-log file shape** | Strongly coupled to E8. Moderate with E1 (where the audit writes is determined by who runs it). Weak with others. | **CLUSTER 5** |
| **E12 L2+ extension hooks** | Strongly coupled to ALL elements (because hooks are a documentation property — each element gets a hook). | **CROSS-CUTTING; doesn't belong in any cluster** |
| **E13 Audit's own LAYER-2 self-coverage** | Moderately coupled to E10 (external grounding mitigates the meta-recursive risk). Otherwise weakly coupled. **NOTE: this is a research-frontier / meta-question more than a design element.** | **DEFERRED (research frontier; see Step 7 self-evaluation)** |

### Coupling map summary (clusters identified)

- **Cluster 1 — Operational location:** E1 + E2 + E3 + E11 (Runner + Cadence + Firing rules + User surfacing).
- **Cluster 2 — Calibration:** E4 + E5 + E10 (Threshold table + Scaling source + External grounding).
- **Cluster 3 — Substrate (mature):** E6 (substrate consumption for the 4 mature modes; mostly an interface to existing substrates).
- **Cluster 4 — Substrate (new):** E7 (false-depth substrate composition).
- **Cluster 5 — Output:** E8 + E9 (Verdict format + Audit-log file shape).
- **Cross-cutting:** E12 (L2+ extension hooks).
- **Deferred:** E13 (audit's own LAYER-2 self-coverage — research frontier).

The coupling MAP has 5 clusters + 1 cross-cutting + 1 deferred. Major boundaries: between Cluster 1 and Cluster 2 (runner-choice doesn't determine threshold values; threshold table doesn't determine runner); between Cluster 1 and Cluster 5 (the verdict-format is independent of who emits it); between Cluster 3 and Cluster 4 (different substrates entirely).

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural cut points are between the 5 clusters:

- **Cut between Cluster 1 (Operational location) and Cluster 2 (Calibration):** these can be designed independently. The runner choice doesn't affect threshold values, and vice versa. **Clean boundary.**
- **Cut between Cluster 2 (Calibration) and Cluster 5 (Output):** the threshold values don't affect the verdict format. **Clean boundary.**
- **Cut between Cluster 3 (Substrate-mature) and Cluster 4 (Substrate-new):** the false-depth substrate is structurally distinct (cross-Route pairwise vs per-Route checks; quadratic vs linear complexity). **Clean boundary.**
- **Cut between Cluster 1 (Operational location) and Cluster 3/Cluster 4 (Substrate consumption):** the substrates are inputs to whatever runs the audit; the runner choice doesn't determine substrate design. **Clean boundary.**

The cross-cutting E12 (L2+ extension hooks) attaches to every cluster but doesn't have its own piece — it's a documentation responsibility per piece.

E13 (audit's own LAYER-2 self-coverage) is split off as **research-frontier** — it's a meta-recursive concern that doesn't gate the first-ship design.

## Step 3 — Validate Boundaries (Bottom-Up Check)

Bottom-up validation: identify the obvious irreducible elements and check whether they group naturally with the top-down clusters.

- **Atom: "the runner is /MVL"** — would naturally cluster with E1 (Runner). ✓ matches Cluster 1.
- **Atom: "the threshold for Calibration-Drift at L0 is divergence ≥3 levels apart"** — would naturally cluster with E4 (Threshold table). ✓ matches Cluster 2.
- **Atom: "the false-depth substrate weighs drop-rate at 40%"** — would naturally cluster with E7 (False-depth composition). ✓ matches Cluster 4.
- **Atom: "the verdict format is `mode: <name>, status: <enum>, evidence: <citation>`"** — would naturally cluster with E8 (Verdict format). ✓ matches Cluster 5.
- **Atom: "the audit reads `docs/autonomy_level.md` to get current_level"** — would naturally cluster with E5 + E10. ✓ matches Cluster 2.
- **Atom: "the audit consumes A1+A3 output by reading WHY citations in the Route Map"** — would naturally cluster with E6. ✓ matches Cluster 3.

No atom is split across cluster boundaries; no atom is grouped that should be independent. **Boundary confidence: HIGH** — top-down and bottom-up agree on the 5-cluster + cross-cutting + deferred partition.

## Step 4 — Express as Question Tree

Each piece is a sub-question with verification criteria. The pieces map to the 4 live design choices identified in Sensemaking SV6, plus 2 cluster-level questions that compose the design.

### Piece P1 — Runner choice (Cluster 1)

**Question:** Which runner location should the LAYER-2 audit use — self-audit (routeman audits itself at invocation-end), separate audit protocol (a `cognitive_harness/protocols/layer2_audit.md` invoked by the runner or human), or runner-level (audit logic embedded in `/MVL` and `/MVLw`'s checkpoint sequence)? The /reflect option is excluded per user direction.

**Verification criteria:**

- [ ] One option committed per the strengthened diagnostic.
- [ ] The option survives prosecution against self-coupling-to-downstream (per KI1 from Sensemaking).
- [ ] The option preserves isolated-session + file-scanning architecture.
- [ ] The option preserves enumerate-all identity (audit observes; doesn't gate).
- [ ] The option is phase-fit at L0 (current state).
- [ ] L2+ extension hook documented.

**Includes (sub-pieces):** E1 (Runner), E11 (User surfacing — how verdicts reach user via runner's output channel).

### Piece P2 — Cadence shape and per-mode firing rules (Cluster 1)

**Question:** What is the cadence shape — fixed-interval gating value (per-invocation; every N invocations; on substrate-condition) + per-mode firing rules (when each LAYER-2 mode's substrate is consulted within the gating)?

**Verification criteria:**

- [ ] Two-layer shape (gating + firing) explicit.
- [ ] Per-mode firing rule for each of the 5 modes.
- [ ] The choice survives prosecution against audit-churn / consumer-training pathology (per R4 / 24-02 precedent).
- [ ] Each mode's firing rule is consistent with the mode's substrate availability (A1+A3 modes per-invocation; Calibration-Drift on N≥2; false-depth on stage-2-present).
- [ ] L0/L1 phase-fit.

**Includes (sub-pieces):** E2 (Cadence shape), E3 (Per-mode firing rules).

### Piece P3 — Threshold table per autonomy level (Cluster 2)

**Question:** What are the per-mode, per-autonomy-level threshold values? The scaling source (autonomy register) is fixed; the table structure (per-mode rows × per-autonomy-level columns × per-dimension cell content) needs values committed for at least L0/L1 (current + one-transition-away).

**Verification criteria:**

- [ ] Each of the 5 LAYER-2 modes has a row.
- [ ] At minimum L0 + L1 columns committed; L2-L5 columns may be scope-setting examples.
- [ ] Per-dimension values within each cell (time-window dim + magnitude dim).
- [ ] The time-window dim scales monotonically with autonomy level (looser at L0, tighter at L4+).
- [ ] The table reads from `docs/autonomy_level.md`'s `current_level` at runtime.
- [ ] L2+ extension hook: how threshold values are revised as autonomy advances.

**Includes (sub-pieces):** E4 (Threshold table), E5 (Threshold scaling source), E10 (External grounding).

### Piece P4 — False-depth substrate composition (Cluster 4)

**Question:** What is the composite substrate for the false-depth LAYER-2 mode? Components surfaced at Surfacing FF-S2: (a) Stage 1 drop-rate per parent, (b) pairwise meta-reasoning distinctness check, (c) secondary-attribute coordinate-pairwise check. Choose composition formula (additive scoring? AND-threshold? OR-threshold? majority vote?) and weight values.

**Verification criteria:**

- [ ] At least one of the 3 components used (composability per FF-S2; the minimum composite is one component but the design should justify the composition).
- [ ] Practical-detection criterion targeted (≥80% TP / ≤20% FP at first ship; calibratable later) — per Ambiguity-4 resolution.
- [ ] Substrate fires only when stage-2 has produced sub-routes (per-mode firing rule).
- [ ] Composition formula committed.
- [ ] Substrate avoids false-positive on legitimate-distinctness sub-routes (e.g., sub-routes that genuinely differ structurally — pairwise distinctness check should pass them).
- [ ] L2+ extension hook: refinement triggers if observed false-depth instances aren't caught.

**Includes (sub-pieces):** E7 (False-depth substrate composition).

### Piece P5 — Substrate consumption protocol for the 4 mature modes (Cluster 3)

**Question:** How does the audit's read protocol consume the existing substrates from 24-40 + 24-01? Per-mode: where does the substrate live (which file, which section), what is the parsing rule, what is the output (signal-true / signal-false / signal-uncertain), and what's the fallback if the substrate file is absent or malformed?

**Verification criteria:**

- [ ] Per-mode read protocol for each of the 4 mature modes (Calibration-Drift, Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, filler-meta-reasoning).
- [ ] Each protocol cites the source substrate (24-40 file + section OR 24-01 mechanism + output).
- [ ] Failure-handling: absent / malformed / out-of-range → tier (INFO / ERROR / ERROR per 24-40's precedent).
- [ ] Performance: protocol's complexity is O(N) or O(N·log M) — no quadratic surprises for the mature modes.

**Includes (sub-pieces):** E6 (Substrate consumption for 4 mature modes).

### Piece P6 — Verdict emission format + audit-log file shape (Cluster 5)

**Question:** What is the audit's output format (per-mode verdict structure) and where does it live (extension of `_navig.md` per Q12 schema extensions, OR parallel `_audit.md` file, OR both)?

**Verification criteria:**

- [ ] Verdict format committed: per-mode record with status enum (PROCEED / FLAG / RE-RUN), evidence citation (file-path-and-section per A1 precedent), timestamp.
- [ ] Storage location committed: extension vs parallel sidecar — decision justified.
- [ ] Append-only semantics (per /surfacing's audit substrate principle; per 24-00's persistence model).
- [ ] Audit log readable by future routeman invocations (e.g., to check if previous audit verdicts inform current behavior).
- [ ] User surfacing: how the runner reads + surfaces verdicts to the user.

**Includes (sub-pieces):** E8 (Verdict format), E9 (Audit-log file shape), and reuses E11's surfacing logic (which is partly in P1).

### Notes on cross-cutting + deferred elements

- **E12 (L2+ extension hooks)** is cross-cutting; each piece P1-P6 has its own L2+-hook verification criterion. The pieces self-document hooks individually; no separate P-piece needed.
- **E13 (audit's own LAYER-2 self-coverage)** is deferred to research frontier. The KI1 risk (self-coupling) is addressed structurally by external grounding (P3 commits this). The meta-recursive question "should the audit itself be audited?" is parked.

## Step 5 — Map Interfaces

Trace what flows between pieces.

### Interface P1 (Runner) ↔ P2 (Cadence)

- **Flow:** the runner choice DETERMINES the cadence's gating layer (a self-audit fires per-invocation by construction; a separate-protocol fires when invoked by runner / human; runner-level fires at the runner's checkpoint).
- **Direction:** P1 → P2 (P1's choice constrains P2's options).
- **Type:** decision-dependency (P2 cannot finalize until P1 is committed).
- **Hidden coupling check:** P2's per-mode firing rules might constrain P1 if a mode requires firing at a moment the runner can't easily provide. But all 5 modes can fire at routeman invocation-end (the most common gating point), so no hidden constraint. **Safe.**

### Interface P1 (Runner) ↔ P6 (Output)

- **Flow:** the runner choice INFORMS where the audit writes its output (a self-audit writes in routeman's output stream; a separate-protocol writes to its own folder; a runner-level audit writes via the runner's state).
- **Direction:** P1 → P6.
- **Type:** decision-dependency for the storage location.

### Interface P2 (Cadence) ↔ P5 (Substrate consumption)

- **Flow:** the per-mode firing rule TELLS P5 which substrate to consult at each firing moment.
- **Direction:** P2 → P5 (P2's firing rules invoke P5's per-mode read protocols).
- **Type:** invocation-dependency.

### Interface P2 (Cadence) ↔ P4 (False-depth substrate)

- **Flow:** same as P2 ↔ P5 but for the false-depth substrate specifically. The firing rule for false-depth ("on stage-2-present + composite-score crossed") invokes P4's composite calculation.
- **Direction:** P2 → P4.
- **Type:** invocation-dependency.

### Interface P3 (Threshold table) ↔ P2 (Cadence)

- **Flow:** the threshold-table's TIME-WINDOW dimension values inform the cadence's per-mode firing rule (e.g., "5 consecutive invocations" comes from P3, not P2).
- **Direction:** P3 → P2.
- **Type:** parameter-dependency.

### Interface P3 (Threshold table) ↔ P4 (False-depth substrate)

- **Flow:** the threshold for false-depth (when does the composite-score warrant FLAG / RE-RUN) is a P3 value applied to P4's output.
- **Direction:** P3 → P4 (P3 supplies the threshold; P4 computes the score; the firing happens when the score crosses the threshold).
- **Type:** parameter-dependency.

### Interface P3 (Threshold table) ↔ P5 (Substrate consumption)

- **Flow:** the threshold for the 4 mature modes (when does the substrate signal warrant FLAG / RE-RUN) is a P3 value applied to P5's output.
- **Direction:** P3 → P5.
- **Type:** parameter-dependency.

### Interface P5 (Substrate consumption) ↔ P6 (Output)

- **Flow:** P5's per-mode signal output feeds into P6's verdict format (the verdict contains evidence from P5's reads).
- **Direction:** P5 → P6.
- **Type:** content-dependency.

### Interface P4 (False-depth substrate) ↔ P6 (Output)

- **Flow:** P4's composite signal output feeds into P6's verdict format for the false-depth mode.
- **Direction:** P4 → P6.
- **Type:** content-dependency.

### Interface map summary

| From | To | Type | Flow |
|---|---|---|---|
| P1 | P2 | decision | runner choice constrains cadence gating options |
| P1 | P6 | decision | runner choice informs output storage location |
| P3 | P2 | parameter | time-window threshold values feed cadence firing rules |
| P3 | P4 | parameter | threshold for false-depth score |
| P3 | P5 | parameter | threshold for mature-mode signals |
| P2 | P4 | invocation | cadence fires false-depth substrate |
| P2 | P5 | invocation | cadence fires mature substrate consumption |
| P4 | P6 | content | composite score → verdict |
| P5 | P6 | content | substrate signal → verdict |

**Hidden coupling check (per refinement note "Assumptions-not-data check"):** beyond data flows, what ASSUMPTIONS does each piece make about what the others provide?

- P2 assumes P3's threshold values include a time-window dim per mode (true per P3's verification criteria).
- P4 assumes P3 commits a threshold value for the composite-substrate output (need to add: P3 must include a row for false-depth's composite threshold — added to P3's verification criteria).
- P5 assumes P6's verdict format can hold per-mode evidence with file-path citations (true per P6's verification criteria).
- P1 assumes the chosen runner is "phase-fit at L0" — but if all 3 candidates fail this assumption, the choice degenerates. The fall-back (human-only at L0) under any choice mitigates this.

No critical hidden coupling. The interface map is complete enough for Innovation + Critique to proceed.

## Step 6 — Order by Dependency

From the interface map's edges, derive the order pieces can be worked on.

### Dependency graph

```
P3 (Threshold table) ────────┐
                             ├──→ P2 (Cadence) ──→ P4 (False-depth) ──┐
                             │                       │                ├──→ P6 (Output)
                             └──→ P5 (Substrate) ────┴────────────────┘

P1 (Runner) ──→ P2 (Cadence — constrains gating)
P1 (Runner) ──→ P6 (Output — informs storage)
```

### Order

- **First wave (independent):** P1 (Runner), P3 (Threshold table), P5 (Substrate consumption protocol) — can each be worked on independently. P5 reads existing substrates; P1 is a 3-candidate choice; P3 is a table whose values can be drafted from the autonomy ladder's existing per-level evidence-gates.
- **Second wave (depends on P1 + P3):** P2 (Cadence) — needs P1's runner choice (to know what gating is possible) and P3's time-window values.
- **Third wave (depends on P2 + P3):** P4 (False-depth substrate) — needs P2's firing rule (when does P4 fire) and P3's threshold (when does P4's composite score warrant FLAG).
- **Fourth wave (depends on P4 + P5 + P1):** P6 (Output) — needs P4 + P5 outputs (the verdicts to format) and P1's location decision (where to write).

This is a 4-wave dependency order with NO cycles. Pieces in the same wave can be worked on in parallel; pieces across waves must be ordered.

### Innovation execution order

Per the dependency order, Innovation will generate options:

1. **P1 (Runner) — 3 candidate options + adversarial check on self-coupling.**
2. **P3 (Threshold table) — table structure + per-mode-per-level values for L0/L1.**
3. **P5 (Substrate consumption protocol) — per-mode read protocol for 4 mature modes.**
4. **P2 (Cadence) — gating + per-mode firing rules (uses P1 + P3 outputs).**
5. **P4 (False-depth substrate) — composition formula + weights (uses P2 + P3).**
6. **P6 (Output) — verdict format + storage shape (uses P4 + P5 + P1).**

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions; always run)

| Dimension | Check | Pass criterion | Result |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | Each piece's question is answerable without reading sibling pieces (except through defined interfaces). | **PASS.** P1 is a 3-candidate choice independent of threshold values or substrate composition. P3 reads from autonomy ladder, independent of who runs it. P5 reads existing substrates, independent of when. P2 depends on P1 + P3 (per interface map) but is otherwise independent. P4 depends on P2 + P3 (per interface map). P6 depends on P4 + P5 + P1. Dependencies are explicit, not hidden. |
| **Completeness** | Do the pieces cover the whole? | No aspect of the original whole falls through the gaps between pieces. | **PASS.** The 4 live design choices from Sensemaking SV6 (P-runner, P-cadence, P-threshold, P-substrate) map to P1, P2, P3, P4. The 2 architectural-completion pieces (P5 substrate-consumption for mature modes; P6 output format) are added to make the design end-to-end. The cross-cutting E12 (L2+ hooks) is absorbed into each piece's verification criteria. The deferred E13 (audit's own LAYER-2) is preserved as research frontier. **The 4 sub-questions from the user's input are covered: runner=P1, cadence=P2, thresholds=P3, false-depth-substrate=P4. P5 + P6 are downstream-required for a shippable design.** |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | Given all pieces answered + all interfaces satisfied → the original problem is solved. | **PASS.** Assembling P1-P6 produces a complete audit mechanism: where it runs (P1), when it fires (P2), what thresholds it applies (P3), how it detects false-depth (P4), how it reads existing substrates (P5), what it outputs and where (P6). The audit's runtime behavior is fully specified by the union of pieces. |

*Refinement note — Determination-mechanism piece check (applies at Self-Evaluate):*

The Q-tree includes load-bearing concepts whose use depends on runtime determination:
- "the audit fires when stage-2 has run" — needs a determination mechanism (how does the audit know stage-2 has run?). **The determination is via `_navig.md` cross-invocation history — the persistence model tracks stage-1 vs stage-2 invocations. P2 (Cadence) addresses this via its firing rules; P5 + P6 access `_navig.md`.** Determination mechanism is in the Q-tree.
- "the audit reads the current autonomy level" — needs a determination mechanism (how does the audit read `docs/autonomy_level.md`?). **The read protocol is in P3 (Threshold table) via the scaling source (E5/E10) — autonomy register's 3-tier failure handling from 24-40 is inherited.** Determination mechanism is in the Q-tree.
- "the audit applies per-mode firing rules" — needs a determination mechanism (which rule fires when?). **P2 (Cadence) commits per-mode firing rules.** Determination mechanism is in the Q-tree.

No load-bearing runtime determination is undeclared. **Determination-mechanism piece check PASSES.**

### Full evaluation (7 dimensions; run for high-stakes)

| Dimension | Check | Result |
|---|---|---|
| **Independence** | (as above) | PASS |
| **Completeness** | (as above) | PASS |
| **Reassembly** | (as above) | PASS |
| **Tractability** | Is each piece small enough to be worked on in a single focused pass? | **PASS.** Each piece is a single-focus design problem (a few options to compare with adversarial test). P1 is small (3 candidates). P3 is medium (a table with 5 rows × 2-6 columns × per-dimension values, but values can be drafted from existing autonomy_ladder.md gates). P5 is medium (5 read protocols, each a small spec). P2, P4, P6 are small. No piece is single-handedly large enough to warrant decomposition. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | **PASS.** 9 interfaces enumerated (Step 5). Hidden coupling check ran. The "assumptions-not-data" check surfaced the false-depth-threshold dependency on P3, which is now in P3's verification criteria. |
| **Balance** | Is complexity roughly proportional across pieces? Or is one piece 80% of the work? | **MOSTLY PASS.** P3 + P5 are the largest pieces (multi-row tables / 5 read protocols). P1 + P2 + P4 + P6 are smaller. The split is approximately 30-15-15-15-15-10 percent of total effort. Not perfectly balanced but no single piece dominates >40%. |
| **Confidence** | Do top-down and bottom-up agree on boundaries? | **PASS.** Per Step 3 validation — top-down clusters and bottom-up atoms agree on the partition. |

All 7 dimensions PASS. Decomposition confidence: HIGH.

### Failure-mode check

- **Premature decomposition:** ruled out — Sensemaking clarified the whole (5 architecture-fixed + 4 live + 2 substrate-classes) before decomposition. Concepts are domain-tested (Load-bearing concept test PASSED in Sensemaking).
- **Wrong boundaries:** ruled out — all cuts are at coupling valleys (between clusters), not through coupling peaks.
- **Hidden coupling:** assumptions-not-data check ran; one hidden dependency surfaced (P3 false-depth threshold) and was made explicit in P3's verification criteria.
- **Missing pieces:** the 4 user sub-questions are covered + P5/P6 close the end-to-end design. E13 (audit-of-audit) is preserved as research frontier with documented reasoning.
- **Over-decomposition:** ruled out — each piece is a single focused design problem; no fragments.
- **Ignoring dependencies:** Step 6 produced a 4-wave order with explicit dependencies; Innovation will follow it.
- **Imbalanced decomposition:** addressed in the Balance check above; no single piece dominates.

No failure mode triggers. The decomposition is stable.

---

## Final Deliverable

### 1. Coupling Map

5 clusters + 1 cross-cutting (L2+ hooks) + 1 deferred (audit-of-audit research frontier):

- **Cluster 1: Operational location** — E1 Runner, E2 Cadence shape, E3 Per-mode firing, E11 User surfacing.
- **Cluster 2: Calibration** — E4 Threshold table, E5 Scaling source, E10 External grounding.
- **Cluster 3: Substrate (mature)** — E6 Substrate consumption for 4 mature modes.
- **Cluster 4: Substrate (new)** — E7 False-depth substrate composition.
- **Cluster 5: Output** — E8 Verdict format, E9 Audit-log file shape.
- **Cross-cutting:** E12 L2+ extension hooks (per-piece documentation responsibility).
- **Deferred:** E13 Audit's own LAYER-2 self-coverage (research frontier).

### 2. Question Tree

| Piece | Question | Includes elements | Cluster |
|---|---|---|---|
| **P1** | Which runner location (self-audit / separate-audit-protocol / runner-level)? | E1, E11 | 1 |
| **P2** | What cadence shape (gating + per-mode firing rules)? | E2, E3 | 1 |
| **P3** | What per-mode, per-autonomy-level threshold values? | E4, E5, E10 | 2 |
| **P4** | What false-depth substrate composition? | E7 | 4 |
| **P5** | What substrate consumption protocol for 4 mature modes? | E6 | 3 |
| **P6** | What verdict format + audit-log file shape? | E8, E9 | 5 |

### 3. Interface Map

9 interfaces; all explicit (Step 5).

| From → To | Type | What flows |
|---|---|---|
| P1 → P2 | decision | Runner choice constrains cadence gating |
| P1 → P6 | decision | Runner choice informs output storage location |
| P3 → P2 | parameter | Time-window threshold values feed cadence firing rules |
| P3 → P4 | parameter | Threshold for false-depth composite score |
| P3 → P5 | parameter | Threshold for mature-mode signals |
| P2 → P4 | invocation | Cadence fires false-depth substrate |
| P2 → P5 | invocation | Cadence fires mature substrate consumption |
| P4 → P6 | content | Composite score → verdict |
| P5 → P6 | content | Substrate signal → verdict |

### 4. Dependency Order

4-wave order:

- **Wave 1 (independent):** P1, P3, P5.
- **Wave 2 (depends on P1, P3):** P2.
- **Wave 3 (depends on P2, P3):** P4.
- **Wave 4 (depends on P4, P5, P1):** P6.

Innovation will generate options in this order: P1 → P3 → P5 → P2 → P4 → P6.

### 5. Self-Evaluation

- **Independence:** PASS.
- **Completeness:** PASS (4 user sub-questions + 2 design-completion pieces).
- **Reassembly:** PASS.
- **Tractability:** PASS (each piece is single-focus).
- **Interface clarity:** PASS (9 interfaces explicit; assumptions-not-data check ran).
- **Balance:** MOSTLY PASS (no piece >40% of total effort; P3 + P5 are larger but tractable).
- **Confidence:** PASS (top-down + bottom-up agree on boundaries).
- **Determination-mechanism piece check:** PASS (no load-bearing runtime determination undeclared).
- **Failure-mode check:** all 7 failure modes addressed; no trigger.

---

## Telemetry

- **Pieces produced:** 6.
- **Cross-cutting responsibilities:** 1 (E12 absorbed into per-piece verification criteria).
- **Deferred research frontiers:** 1 (E13 audit-of-audit).
- **Dependency depth:** 4 waves (P1+P3+P5 → P2 → P4 → P6).
- **Self-evaluation dimensions checked:** 7 of 7; ALL pass.
- **Determination-mechanism piece check:** PASS.
- **Failure-mode check:** 7 of 7 considered; NONE triggered.

**Overall: PROCEED** (boundaries validated top-down + bottom-up; interfaces explicit; assumptions-not-data check ran; 7/7 self-evaluation dimensions pass; failure-mode check clean; dependency order has no cycles).
