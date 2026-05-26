# Decomposition — LOOP_DIAGNOSE-Format Deliverable Partition

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/_branch.md`

Context: Decomposition. Sensemaking committed 5 execution gaps + 1 spec-coverage gap + 7 maintenance candidates with evaluation gates. LOOP_DIAGNOSE Step 4 specifies the output format: Correction Chain Summary, Failure Hypotheses (each with fixed shape), Failure Attribution Summary table, Maintenance Candidates (each with fixed shape), Diagnostic Verdict. Partition; map interfaces; light decomposition expected.

---

## Step 1 — Perceive Coupling Topology

### Elements

| ID | Element |
|---|---|
| E1 | Correction Chain Summary (prior path / corrected path / human correction / what changed) |
| E2 | 5 Failure Hypothesis records (one per execution gap E1-E4 from Sensemaking + 1 for the spec-coverage gap C1) — each with LOOP_DIAGNOSE Step 4's 9-field shape |
| E3 | Failure Attribution Summary table (compact summary of E2) |
| E4 | 7 Maintenance Candidate records (1 meta-trigger A1 + 4 per-mechanism B1-B4 + 2 optional failure-mode C1-C2) — each with LOOP_DIAGNOSE Step 4's 6-field shape |
| E5 | Diagnostic Verdict (ACTIONABLE/PARTIAL/INCONCLUSIVE + best-supported diagnosis + strongest maintenance candidate + main uncertainty + recommended next step) |

### Pairwise coupling

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | **WEAK** | Chain summary is independent input; failure hypotheses consume Sensemaking commitments directly |
| E2 ↔ E3 | **STRONG** | Attribution table summarizes E2's hypotheses; same content, different format |
| E2 ↔ E4 | **STRONG** | Each maintenance candidate references one or more failure hypotheses by name/ID |
| E3 ↔ E4 | **WEAK** | Table and candidates are independent views |
| E2/E3/E4 → E5 | **STRONG** | Verdict aggregates everything |

### Coupling peaks

```
        ┌────────────────────────────────────────┐
        │ Peak 1 — CORRECTION CHAIN SUMMARY      │
        │ E1                                     │
        └─────────────┬──────────────────────────┘
                      │
                      ▼
        ┌────────────────────────────────────────┐
        │ Peak 2 — FAILURE HYPOTHESES + TABLE    │
        │ E2 + E3 (table summarizes E2)          │
        │ 5 hypotheses; 9-field shape per        │
        └─────────────┬──────────────────────────┘
                      │
                      ▼
        ┌────────────────────────────────────────┐
        │ Peak 3 — MAINTENANCE CANDIDATES        │
        │ E4                                     │
        │ 7 candidates; 6-field shape per        │
        └─────────────┬──────────────────────────┘
                      │
                      ▼
        ┌────────────────────────────────────────┐
        │ Peak 4 — DIAGNOSTIC VERDICT            │
        │ E5                                     │
        └────────────────────────────────────────┘
```

### Boundaries (low-coupling valleys)

- **B1** between Peak 1 and Peak 2: clean — chain summary is input; hypotheses are output.
- **B2** between Peak 2 and Peak 3: clean — hypotheses are referenced by candidates; single-direction.
- **B3** between Peak 2/3 and Peak 4: clean — verdict aggregates.

---

## Step 2 — Detect Boundaries (Top-Down)

Four pieces:

- **P1 — Correction Chain Summary** (E1): prepare the input data per LOOP_DIAGNOSE Step 4 (paths, human correction excerpt, what-changed).
- **P2 — Failure Hypotheses + Attribution Table** (E2 + E3): 5 hypothesis records + the summary table. Combined because the table is a summary view of the hypotheses; producing them together avoids duplication.
- **P3 — Maintenance Candidates** (E4): 7 candidate records, each linked to one or more hypotheses from P2.
- **P4 — Diagnostic Verdict** (E5): final aggregation.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atoms and piece assignments:

| Atom | Piece |
|---|---|
| "Prior path / corrected path / human-correction excerpt" | P1 |
| "Failure Hypothesis 1: Inversion depth-check skipped (Innovation stage)" | P2 |
| "Attribution table row: Innovation / depth-check-skipped / strong / HIGH / spec-edit B1" | P2 |
| "Maintenance Candidate A1: add Inherited Frame Audit sub-section to /innovate spec" | P3 |
| "Verdict: ACTIONABLE; strongest maintenance is A1; main uncertainty is single-correction-pair evidence" | P4 |

All atoms group cleanly. **HIGH CONFIDENCE.**

---

## Step 4 — Express as Question Tree

### Q1 — Piece P1 — Correction Chain Summary

> **What does the correction chain look like in publishable form?**

Verification criteria:
- [ ] Prior path stated.
- [ ] Corrected path stated.
- [ ] Human correction quoted verbatim from the corrected inquiry's Source Input.
- [ ] "What changed from prior result to corrected result" stated in 1-3 sentences.

### Q2 — Piece P2 — Failure Hypotheses + Attribution Table

> **What 5 failure hypotheses cover the diagnosis, each with full LOOP_DIAGNOSE Step 4 shape, plus the attribution summary table?**

Verification criteria:
- [ ] 5 hypothesis records present (4 execution gaps E1-E4 + 1 spec-coverage gap C1).
- [ ] Each record has 9 fields: Affected stage / Shortcoming type / Evidence from prior inquiry / Evidence from human correction / Evidence from corrected inquiry / Confidence / Why not stronger / Maintenance candidate / Evaluation gate.
- [ ] Each record cites prior innovation.md output verbatim where applicable.
- [ ] Each record cites /innovate spec passages verbatim where applicable.
- [ ] Confidence ratings: HIGH for clean spec-quote-grounded execution gaps; MEDIUM-HIGH for the spec-coverage gap (more interpretive); explicit "why not stronger" per record.
- [ ] Attribution table has 5 rows (one per hypothesis) with: Affected stage / Shortcoming type / Evidence strength / Confidence / Candidate action.

### Q3 — Piece P3 — Maintenance Candidates

> **What 7 maintenance candidates address the failure hypotheses, each with full LOOP_DIAGNOSE Step 4 shape?**

Verification criteria:
- [ ] 7 candidate records present (1 meta-trigger A1 + 4 per-mechanism B1-B4 + 2 optional failure-mode-list C1-C2).
- [ ] Each record has 6 fields: What should change / Which file or protocol / Risk class (low/medium/high) / Expected benefit / Evaluation gate / Whether it should become a branch experiment.
- [ ] Each candidate references the hypothesis (or hypotheses) it addresses by ID/name.
- [ ] All candidates target /innovate spec only (per user scope); none touch /sensemaking, /td-critique, or /reflect specs.

### Q4 — Piece P4 — Diagnostic Verdict

> **What is the diagnostic verdict in LOOP_DIAGNOSE Step 4 format?**

Verification criteria:
- [ ] Overall: ACTIONABLE / PARTIAL / INCONCLUSIVE.
- [ ] Best-supported diagnosis stated (one sentence).
- [ ] Strongest maintenance candidate named.
- [ ] Main uncertainty stated.
- [ ] Recommended next step stated.

---

## Step 5 — Map Interfaces

### Interface I1 (external): Sensemaking → P1

| Field | Value |
|---|---|
| **What flows** | The correction chain components from Exploration's territory data (already in Sensemaking's input contract). |
| **Direction** | One-way input. |
| **Type** | Data. |

### Interface I2 (external): Sensemaking → P2

| Field | Value |
|---|---|
| **What flows** | The 5 named execution gaps (E1 Inversion depth-check; E2 Constraint Manipulation single-direction; E3 Absence Recognition redesign-level; E4 Assembly axis-coverage; plus the spec-coverage gap C1 Inherited Frame Audit absent), plus failure-mode mappings (Survival Bias clean + 2 variants), plus user-scope boundary. |
| **Direction** | One-way input. |
| **Type** | Dependency. |
| **Hidden-coupling risk** | Each failure hypothesis must cite specific spec quotes and prior output quotes. If Sensemaking's commitments are referenced without re-citing the quotes, the LOOP_DIAGNOSE diagnostic falls back on commitment-only evidence (weaker). Mitigation: P2 re-cites all relevant quotes verbatim. NAMED. |

### Interface I3: P2 → P3

| Field | Value |
|---|---|
| **What flows** | Failure hypothesis IDs/names referenced by each maintenance candidate. |
| **Direction** | One-way (P2 produces; P3 references). |
| **Type** | Data + dependency. |
| **Hidden-coupling risk** | Maintenance candidates must trace back to specific failure hypotheses. If naming is inconsistent (e.g., "Inversion depth-check" in P2 but "depth-check skip" in P3), traceability breaks. Mitigation: standardize hypothesis IDs (H1, H2, ..., H5) and reference them by ID in P3. NAMED. |

### Interface I4: P2 + P3 → P4

| Field | Value |
|---|---|
| **What flows** | Aggregate evidence strength + candidate concreteness + uncertainty signals → verdict. |
| **Direction** | One-way. |
| **Type** | Aggregation. |
| **Hidden-coupling risk** | Verdict must be consistent with attribution strengths. If most hypotheses are HIGH confidence and candidates are concrete with evaluation gates, verdict should be ACTIONABLE. If hypotheses are MEDIUM or candidates lack evaluation gates, verdict should be PARTIAL. Inconsistency = mistake. NAMED. |

---

## Step 6 — Order by Dependency

```
[Sensemaking: 5 commitments]
       │ (input via I1, I2)
       ▼
   P1 (Correction Chain Summary)
       │
       ▼
   P2 (5 Failure Hypotheses + Attribution Table)
       │ (via I3)
       ▼
   P3 (7 Maintenance Candidates)
       │ (via I4 combined with P2)
       ▼
   P4 (Diagnostic Verdict)
```

Strict sequential: P1 → P2 → P3 → P4. No parallelism within this conversation (each piece needs the prior's output).

No circular dependencies.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece works given prior input? | **PASS** — P1 needs Sensemaking + correction-chain data; P2 needs P1 + Sensemaking commitments; P3 needs P2 + Sensemaking; P4 needs P2+P3. |
| **Completeness** | Pieces cover the whole LOOP_DIAGNOSE Step 4 output? | **PASS** — Correction Chain Summary (P1) + Failure Hypotheses (P2) + Failure Attribution Summary (P2) + Maintenance Candidates (P3) + Diagnostic Verdict (P4) = the full required output. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** — concatenating P1 → P2 → P3 → P4 produces the LOOP_DIAGNOSE finding. |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| Independence | (as above) | PASS |
| Completeness | (as above) | PASS |
| Reassembly | (as above) | PASS |
| Tractability | Each piece in one focused pass? | **PASS** — P1 is small (data extraction); P2 is the heaviest (5 hypothesis records each with 9 fields + table); P3 is moderate (7 candidate records each with 6 fields); P4 is trivial (5-field verdict). |
| Interface clarity | All flows explicit, no hidden dependencies? | **PASS** — 4 interfaces specified; 3 hidden-coupling risks named (quote re-citation in P2; ID-based traceability in P3; verdict-consistency at P4). |
| Balance | Complexity proportional? | **MIXED** — P2 carries ~50% of the work; P3 ~30%; P1 and P4 ~10% each. P2's weight matches its load-bearing role (the failure hypotheses are the cognitive content). Acceptable. |
| Confidence | Top-down + bottom-up agree? | **PASS** — atoms grouped cleanly. |

### Determination-mechanism piece check (Step 7 refinement)

The Q-tree references "Affected stage" as a load-bearing concept whose application requires runtime determination per hypothesis. Q2 explicitly includes this as part of the 9-field shape; the determination is per-hypothesis (Innovation stage for E1-E4; Innovation stage for C1 but at the spec-coverage layer rather than execution layer). **PASS.**

### Failure-mode checks

- **Premature decomposition?** Sensemaking committed the 5 decisions; the whole was understood. ✓ Avoided.
- **Wrong boundaries?** Single-direction flows. ✓ Avoided.
- **Hidden coupling?** 3 risks named. FLAGGED (constructive).
- **Missing pieces?** Completeness passes; all LOOP_DIAGNOSE Step 4 elements covered. ✓ Avoided.
- **Over-decomposition?** 4 pieces for the LOOP_DIAGNOSE format. Could collapse P2's attribution table into P2's hypotheses (already done — combined into one piece). ✓ Avoided.
- **Ignoring dependencies?** Strict sequential order. ✓ Avoided.
- **Imbalanced?** P2 heaviest — by design. Acceptable.

---

## Leverage Center

**P2 (Failure Hypotheses + Attribution Table) is the leverage center.** It carries the cognitive content of the diagnosis. P1, P3, P4 are derivative — P1 is data extraction; P3 transforms P2 into spec-edit candidates; P4 aggregates verdict from P2+P3. Without P2, the rest is empty.

Within P2, the hottest sub-decision is **per-hypothesis confidence rating + "why not stronger" reasoning** — this is what makes the diagnostic honest vs over-claiming. Per LOOP_DIAGNOSE Step 5: "Do not claim exact root cause unless the artifacts isolate it."

---

## Hand-offs

### To Innovation (executes P1 → P2 → P3 → P4)

- Execute P1: extract correction-chain components from prior + corrected inquiry artifacts.
- Execute P2: produce 5 failure hypothesis records (4 execution + 1 coverage), each with 9-field shape, citing prior innovation.md verbatim + /innovate spec verbatim. Produce 5-row attribution table summarizing.
- Execute P3: produce 7 maintenance candidate records (1 meta-trigger + 4 per-mechanism + 2 optional failure-mode-list), each with 6-field shape, referencing P2 hypotheses by ID.
- Execute P4: produce diagnostic verdict with 5 standard fields.

Use Inversion + Constraint Manipulation as light mechanism tools (per spec minimum coverage) only as light sanity checks; this is mostly execution work.

### To Critique

- Adversarially test each failure hypothesis: could the prior have produced the same output via CORRECT depth-check application but with a defensible different verdict? Or does evidence isolate the depth-check skip?
- Test each maintenance candidate: is the spec-edit text concrete enough? Does the evaluation gate actually test the candidate's claim?
- Test the diagnostic verdict: does the evidence support ACTIONABLE, or is it PARTIAL?
- Execute per-commitment re-tests per Sensemaking's plan (3 priors, 14 commitments).
- Survival-bias check on the recommended maintenance candidates: did we propose the comfortable spec edits (per-mechanism reinforcement language — easy text additions) and demote the disruptive ones (Inherited Frame Audit meta-trigger — a new spec sub-section)?
