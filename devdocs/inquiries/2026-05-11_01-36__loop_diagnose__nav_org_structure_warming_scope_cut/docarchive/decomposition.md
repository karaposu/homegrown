# Decomposition: Loop Diagnose — Nav Org Structure / Warming Scope-Cut

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From Sensemaking SV6:

1. **3-surface failure chain** with line citations (origin `_branch.md:29`; critical `docarchive/sensemaking.md:130`; manifestation `finding.md:256`; propagation to 22-46).
2. **Per-surface failure-mechanism naming** (Surface 1 = categorization error; Surface 2 = Clean Resolution Trap, Sensemaking failure mode #5; Surface 3 = unverified-confirmation manifestation).
3. **Instance distinction** (Instance 1 Memory = not-fired; Instance 2 here = fired-but-shallow; same OUTCOME pattern but different MECHANISM).
4. **Three maintenance candidates** — Part A (existing refactor candidate; DEFERRED), Part B (NEW counter-argument testing requirement; DEFERRED), scope-cut writing convention (ACTIONABLE; loop-builder-level guideline).
5. **Pattern context** — N=2 toward refactor candidate's ≥3 audit threshold; revival implications.
6. **Diagnostic verdict** — ACTIONABLE per `loop_diagnose.md` Step 4.

### Pairwise coupling

| A | B | Coupling | Reason |
|---|---|---|---|
| Chain (#1) | Per-surface mechanism (#2) | **Strong** | Same chain at different layers — describe same analytical object |
| Chain + mechanism (#1+#2) | Instance distinction (#3) | **Strong** | Distinction (not-fired vs fired-but-shallow) is derived from Surface 2's mechanism analysis |
| #1+#2+#3 | Maintenance candidates (#4) | **Strong** | Each candidate maps to a specific mechanism + surface |
| Instance distinction (#3) | Pattern context (#5) | **Strong** | Instance count is N=2 toward threshold; same instances inform both |
| All upstream | Verdict (#6) | **Strong** | Verdict synthesizes |

### Coupling map

```
                  ┌─────────────────────────────────────────────────────┐
                  │ P1: Chain + mechanisms + instance distinction (HUB) │
                  │  - 3 surfaces with line citations                   │
                  │  - Failure modes named per surface                  │
                  │  - Instance 1 vs Instance 2 mechanism comparison    │
                  └────────────────────────┬────────────────────────────┘
                                           │
              ┌────────────────────────────┼────────────────────────────┐
              │                            │                            │
              ▼                            ▼                            ▼
       ┌───────────────┐           ┌────────────────┐           ┌────────────────────┐
       │ P2: Maint.    │           │ P3: Pattern    │           │ (synthesis P4 below)│
       │   candidates  │           │   context +    │           │                    │
       │   (3 items:   │           │   audit thresh-│           │                    │
       │   A, B, scope-│           │   old tracking │           │                    │
       │   cut writing)│           │                │           │                    │
       └────────┬──────┘           └───────┬────────┘           │                    │
                │                          │                    │                    │
                └─────────────┬────────────┘                    │                    │
                              │                                 │                    │
                              ▼                                 │                    │
                  ┌────────────────────────────────┐            │                    │
                  │ P4: Diagnostic verdict         │◀───────────┘                    │
                  │   (loop_diagnose Step 4 shape) │                                 │
                  └────────────────────────────────┘                                 │
```

**Cluster identification:**
- **Hub:** P1 (chain + mechanisms + instance distinction fused).
- **Spokes:** P2 (maintenance candidates); P3 (pattern context).
- **Synthesis:** P4 (verdict).

### Why fuse chain + mechanisms + instance distinction into P1

These three describe the SAME analytical object: the failure chain. The surfaces are the structural locations; the mechanisms are the named failure-mode patterns AT those locations; the instance distinction is the comparative analysis of the mechanism at this instance vs the prior instance. Splitting them would create high-bandwidth interfaces (every per-surface mechanism statement would need to reference back to the surface; every instance distinction would need to reference both surfaces and mechanisms). Fusing makes the hub self-contained.

---

## Step 2 — Detect Boundaries (Top-Down)

Cuts at low coupling:

- **B-1: P1 ↔ P2.** Crossing traffic: each maintenance candidate references the surface + mechanism it addresses. Low (≈3 named references per candidate).
- **B-2: P1 ↔ P3.** Crossing traffic: pattern context reads the instance distinction. Low (1 read).
- **B-3: P2/P3 ↔ P4.** Crossing traffic: verdict synthesizes upstream. Low.

All boundaries clean.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

- A1–A3: 3 surfaces (origin, critical, manifestation) with line citations.
- A4: Surface 1 mechanism (categorization error; loop-builder-level conflation).
- A5: Surface 2 mechanism (Clean Resolution Trap; Sensemaking failure mode #5).
- A6: Surface 3 mechanism (unverified confirmation; CONCLUDE-level no-retest).
- A7: Instance 1 mechanism (not-fired).
- A8: Instance 2 mechanism (fired-but-shallow).
- A9: Maintenance candidate Part A (existing refactor; DEFERRED).
- A10: Maintenance candidate Part B (NEW counter-argument testing; DEFERRED).
- A11: Maintenance candidate scope-cut writing convention (ACTIONABLE).
- A12: Pattern context — N=2 toward ≥3 threshold.
- A13: Verdict ACTIONABLE per loop_diagnose Step 4.

### Atom-to-piece grouping

| Atoms | Piece |
|---|---|
| A1–A8 (chain + mechanisms + instance distinction) | P1 |
| A9, A10, A11 (3 maintenance candidates) | P2 |
| A12 (pattern context + threshold) | P3 |
| A13 (verdict) | P4 |

### Boundary checks

- **A4-A6 (per-surface mechanisms) inside P1?** Yes. They describe the failure-mode at each surface; integral with the chain.
- **A7-A8 (instance mechanisms) inside P1?** Yes. They're the comparative analysis OF the per-surface mechanisms.
- **A9-A11 inside P2?** Yes. All 3 candidates together; consistent with prior loop_diagnose decompositions.
- **A12 inside P3?** Yes. Pattern context = audit-threshold tracking.

### Top-down vs bottom-up

| Boundary | Top-down location | Bottom-up confirms? |
|---|---|---|
| P1 ↔ P2 | chain+mechanisms vs maintenance | ✓ |
| P1 ↔ P3 | chain vs pattern context | ✓ |
| P2/P3 ↔ P4 | upstream vs synthesis | ✓ |

All confirmed. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — Chain + mechanisms + instance distinction (HUB)

**Question:** What is the 3-surface failure chain in 11-22 (each surface with line citation), what failure-mode mechanism operates at each surface (using existing Sensemaking failure modes where possible), and how does Instance 2's mechanism (fired-but-shallow) differ from Instance 1's (not-fired)?

**Verification criteria:**
- [ ] Surface 1 (Origin) named with line citation `_branch.md:29` and exact text of the scope cut.
- [ ] Surface 2 (Critical failure) named with line citation `docarchive/sensemaking.md:130` and exact text of the verdict ("OUT OF SCOPE; clean boundary").
- [ ] Surface 3 (Manifestation) named with line citation `finding.md:256` and exact text of the published frame-exit verification.
- [ ] Surface 1 mechanism: categorization error (conflating precondition-class with cognitive-content-class).
- [ ] Surface 2 mechanism: Clean Resolution Trap (Sensemaking failure mode #5; spec text cited).
- [ ] Surface 3 mechanism: unverified confirmation (no retest at the finding stage).
- [ ] Propagation to 22-46 noted (downstream inheritance manifested as "concept-mapping = new capability").
- [ ] Instance distinction explicit: Instance 1 (Memory) = perspective NOT FIRED; Instance 2 (here) = perspective FIRED BUT SHALLOW.
- [ ] Audit verification: confirmed audit categorizes warming as precondition (Category I), not cognitive content — deepest root is loop-builder's `_branch.md` writing, NOT the audit.

### P2 — Maintenance candidates

**Question:** What are the three maintenance candidates that emerge from the 3-surface chain + 2-mechanism instance distinction, each with file affected, risk class, expected benefit, evaluation gate, and commitment status (ACTIONABLE / DEFERRED)?

**Verification criteria:**
- [ ] Part A — existing Frame-exit Completeness refactor candidate per `2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`. Addresses Instance 1 (not-fired). DEFERRED. Revival trigger: M4 audit ≥3 instances (this instance brings count to 2).
- [ ] Part B — NEW counter-argument testing requirement within frame-exit verdicts. Addresses Instance 2 (fired-but-shallow). DEFERRED. Revival trigger separate: audit produces ≥3 instances of fired-but-shallow frame-exit verdicts.
- [ ] Scope-cut writing convention — ACTIONABLE. Loop-builder-level guideline (not a spec edit). When writing `_branch.md` scope cuts, distinguish "out of scope for cognitive-content redesign" from "out of scope for organization-discussion entirely." Examples: cognitive-content-out for 16-type taxonomy + 12 route fields (no organization-implications); organization-out is a SEPARATE category that should not group with cognitive-content-out.
- [ ] Each candidate cross-references the specific surface(s) it addresses (Part A → Surface 2 future firing; Part B → Surface 2 reasoning quality; scope-cut convention → Surface 1).
- [ ] Step 5 caution honored for Parts A + B (DEFERRED).
- [ ] Scope-cut convention's "actionable" status justified by being a writing-discipline reminder, not a spec change.

### P3 — Pattern context + audit threshold tracking

**Question:** Where does this instance fit in the broader frame-scope-capture pattern, what is the current count toward the refactor candidate's ≥3 audit threshold, and what should the audit (proposed M4 in the prior loop_diagnose finding) track for instance counting?

**Verification criteria:**
- [ ] Pattern named: frame-scope capture (per `2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` + drill-down at `2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md`).
- [ ] Current count: Instance 1 (Memory) + Instance 2 (this) = N=2 toward Part A's ≥3 threshold.
- [ ] Mechanism distinction within pattern noted: Part A's threshold should count BOTH not-fired AND fired-but-shallow instances (since both produce frame-scope capture); Part B's threshold counts only fired-but-shallow instances.
- [ ] If a third instance arises that's clearly fired-but-shallow, Part B's threshold may be met before Part A's (or simultaneously).
- [ ] Audit-tracking implication: the M4 audit should classify each instance by mechanism (not-fired / fired-but-shallow / other) to enable both thresholds to track independently.

### P4 — Diagnostic verdict

**Question:** What is the diagnostic verdict per `homegrown/protocols/loop_diagnose.md` Step 4 — overall verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE), best-supported diagnosis, strongest maintenance candidate, main uncertainty, recommended next step?

**Verification criteria:**
- [ ] Overall verdict assigned with criteria.
- [ ] Best-supported diagnosis: 3-surface failure chain with Clean Resolution Trap at Surface 2; Instance 2 differs from Instance 1 in mechanism (fired-but-shallow vs not-fired).
- [ ] Strongest maintenance candidate among the 3 named.
- [ ] Main uncertainty: whether Part B's spec text can be drafted concisely or whether it requires more evidence (Step 5).
- [ ] Recommended next step: apply scope-cut writing convention immediately (loop-builder guideline); keep Part A + Part B deferred; track this as Instance 2 in the audit count toward ≥3 threshold.

---

## Step 5 — Map Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Per-surface mechanism + instance distinction → informs which candidate addresses which mechanism | one-way | Read |
| P1 | P3 | Instance distinction → audit threshold tracking | one-way | Read |
| P1 | P4 | Full chain + mechanism analysis → best-supported diagnosis | one-way | Read |
| P2 | P4 | Maintenance candidates → strongest candidate | one-way | Read |
| P3 | P4 | Pattern context → main uncertainty + recommended next step | one-way | Read |

All flows one-way Reads.

### Hidden coupling check

- **Q: Does P2's Part A hide-couple with P3's pattern context?** Yes — Part A's revival trigger is the ≥3 threshold which lives in P3. P2 should cross-reference P3 for the threshold value. Made explicit via P2 verification criterion 4.
- **Q: Does the audit-tracking implication (P3) hide-couple with M4 from prior loop_diagnose?** Yes — P3 names how the existing M4 audit should classify instances. Make explicit: this inquiry's recommendation enhances M4's design slightly.

No remaining hidden coupling.

---

## Step 6 — Order by Dependency

```
Step 1: P1 (HUB — chain + mechanisms + instance distinction)
Step 2: P2 (maintenance) + P3 (pattern context) — parallel
Step 3: P4 (verdict synthesis)
```

### Critical path

P1 → P2 → P4 (Part A's threshold depends on P3 which depends on P1's instance count).

### No circular dependencies

Verified.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | P2/P3 read P1 only; P4 reads upstream. |
| Completeness | PASS | All 6 deliverable elements covered. |
| Reassembly | PASS | P1 + P2 + P3 + P4 → complete diagnostic. |

### Determination-mechanism check

- **Determination at runtime:** "Should Part A's revival trigger fire?" — depends on audit count vs ≥3 threshold.
- **Piece addressing how:** P3 explicitly owns the threshold tracking; P2 cross-references P3.

- **Determination at runtime:** "Should this instance count toward Part A or Part B's threshold (or both)?" — depends on mechanism classification (not-fired vs fired-but-shallow).
- **Piece addressing how:** P3 verification criterion 3 specifies that Part A counts both; Part B counts only fired-but-shallow.

### Full 7-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| Tractability | PASS | All pieces small enough for one focused pass. |
| Interface clarity | PASS | Flows tabulated; hidden coupling surfaced. |
| Balance | PASS | P1 is hub (heaviest); spokes proportional. |
| Confidence | PASS | Top-down ↔ bottom-up agreed. |

### Failure-mode self-check

- Premature decomposition? No — Sensemaking provided clear structure.
- Wrong boundaries? No.
- Hidden coupling? Surfaced (P2/P3 audit-threshold cross-reference).
- Missing pieces? Determination-mechanism check passed.
- Over-decomposition? No — 4 pieces for a complete diagnostic.
- Ignoring dependencies? No.
- Imbalanced? No.

---

## Final Deliverable

### Coupling Map

One hub (P1: chain + mechanisms + instance distinction fused), two spokes (P2: maintenance candidates; P3: pattern context), one synthesis (P4: verdict).

### Question Tree

- **P1 — Chain + mechanisms + instance distinction** (hub): 3 surfaces with line citations; named failure modes; Instance 1 vs Instance 2 mechanism comparison; audit verification (deepest root = loop-builder, not audit).
- **P2 — Maintenance candidates** (spoke): 3 candidates (Part A existing refactor DEFERRED; Part B NEW counter-arg DEFERRED; scope-cut writing convention ACTIONABLE).
- **P3 — Pattern context + audit threshold** (spoke): N=2 toward ≥3; mechanism-aware threshold tracking implications for M4 audit.
- **P4 — Diagnostic verdict** (synthesis): per loop_diagnose Step 4 shape (overall verdict + best-supported diagnosis + strongest candidate + main uncertainty + recommended next step).

### Interface Map

| From | To | Flow | Type |
|---|---|---|---|
| P1 | P2 | Per-surface mechanism informs candidate-mapping | Read |
| P1 | P3 | Instance distinction informs threshold tracking | Read |
| P1 | P4 | Full chain analysis informs best-supported diagnosis | Read |
| P2 | P4 | Maintenance landscape informs strongest candidate | Read |
| P3 | P4 | Pattern context informs main uncertainty | Read |

### Dependency Order

```
Step 1: P1 (hub)
Step 2: P2 + P3 (parallel)
Step 3: P4 (synthesis)
```

### Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | PASS |
| Determination-mechanism check | PASS |

**8/8 PASS.** Decomposition committed; proceed to Innovation.

---

## Notes for next discipline

**Innovation should:**
1. Commit P1 with all 3 surface line-citations, named failure modes (Clean Resolution Trap for Surface 2 with spec text cited), and Instance 1 vs Instance 2 comparison.
2. Commit P2 with 3 candidates; draft exact wording for Part B (counter-argument testing requirement) and scope-cut writing convention.
3. Commit P3 with N=2 count + mechanism-aware threshold-tracking implications.
4. Commit P4 with verdict synthesis.
5. Apply minimum mechanism coverage to validate if needed (this is a focused diagnostic; full mechanism scan not required).

**Critique should:**
1. Test whether "fired-but-shallow" is the right label for Instance 2's mechanism.
2. Test whether Clean Resolution Trap is the most-fitting failure mode (vs Premature Stabilization or Anchor Dominance — Sensemaking acknowledged but didn't choose those).
3. Test whether the scope-cut writing convention should be ACTIONABLE now (vs deferred like Parts A+B). The rationale ("loop-builder guideline, not spec change") may need scrutiny.
4. Verify audit-threshold count of N=2 is correct (could it be N=1 if Instance 2's mechanism is different enough to not count toward Part A's threshold?).
5. Apply self-reference resistance (this diagnoses a Sensemaking-phase failure within a Sensemaking-using analysis).
