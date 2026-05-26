# Decomposition — Finding Type-Field Multi-Value Consideration

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/_branch.md
```

Sensemaking stabilized to a 2-verdict frontier: **W1** (clarifying note added; single-value `type:` preserved) as DEFAULT, **W3** (clarifying note + list-valued schema) as deferred-with-revival-trigger. The empirical multi-type claim from Exploration collapsed under the strict body-shape reading the prior finding's design implies. Decomposition's job: partition the remaining work so Innovation can surface hybrids between W1 and W3, and Critique can adversarially test which verdict survives.

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole

| Element | What it is |
|---|---|
| **E1** — W1 profile | Exact wording + location of the clarifying note in the prior finding |
| **E2** — W3 profile | List-valued schema shape + CONCLUDE behavior + migration cost |
| **E3** — Hybrid space | Schemas that sit between W1 and W3 (e.g., A3 primary+secondary; W1-with-also-key) |
| **E4** — Audit-deferral logic | When does the corpus audit fire? what triggers W3 revival? |
| **E5** — Refinement diff against prior finding | Concrete edit specs (which sections to modify, what text to add) |

### Coupling assessment

- **E1 ↔ E2:** Low. Each verdict's profile is independent of the other.
- **E1 ↔ E5:** Tight. W1's clarifying note IS the primary content of the refinement diff under the W1 verdict.
- **E2 ↔ E5:** Tight. W3 produces a different (larger) refinement diff.
- **E3 ↔ E1/E2:** Moderate. Hybrids compose elements of W1 and W2.
- **E4 ↔ E1/E2:** Tight. The audit-deferral logic determines when each verdict applies.

### Coupling map

```
   ┌──────────────────────────────────────────┐
   │  Per-verdict profiles                    │
   │  E1 (W1)         E2 (W3)                 │
   │  (low pairwise coupling)                 │
   └────┬──────────────────┬──────────────────┘
        │                  │
   (moderate)         (moderate)
        │                  │
        ▼                  ▼
        ┌─────────────────┐
        │  E3 Hybrid space │
        └─────────────────┘
                  │
                  │ (tight)
                  ▼
        ┌─────────────────┐         ┌──────────────────┐
        │  E4 Audit-      │◄────────┤  Decision        │
        │  deferral logic │  drives │  factors         │
        └────────┬────────┘         └──────────────────┘
                 │
            (tight)
                 ▼
        ┌─────────────────┐
        │  E5 Refinement  │
        │  diff           │
        └─────────────────┘
```

### Coarse coupling map

- **C1 (Per-verdict profiles)** — E1, E2; pairwise low coupling
- **C2 (Hybrid space)** — E3; moderate coupling to C1
- **C3 (Deferral logic)** — E4; tight coupling to verdict choice
- **C4 (Refinement diff)** — E5; tight coupling to chosen verdict

---

## Step 2 — Detect Boundaries (Top-Down)

**Boundaries:**

- **B1** — between C1 and C2: profiles inform hybrids (one-way).
- **B2** — between C1+C2 and C3 (deferral logic): the audit trigger applies regardless of which verdict is chosen.
- **B3** — between C1/C2/C3 and C4 (refinement diff): the diff operates on the chosen verdict + audit-logic.

### Initial partition (pieces)

- **P1** — W1 profile (clarifying note shape + exact location in prior finding)
- **P2** — W3 profile (list-valued schema + CONCLUDE + migration cost)
- **P3** — Hybrid space (intermediate schemas)
- **P4** — Audit-deferral logic (trigger conditions + revival path)
- **P5** — Refinement diff (concrete edit specs for the chosen verdict)

5 pieces.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- **A_P1** — the clarifying note's text (atomic).
- **A_P2** — the list-valued schema's shape + the CONCLUDE rule + migration steps (3 atoms).
- **A_P3** — each hybrid candidate (e.g., `type:` + `also:` field) is an atom.
- **A_P4** — the audit trigger condition + revival path (2 atoms).
- **A_P5** — the per-section edit specs against the prior finding (multiple atoms per section).

### Bottom-up grouping

All atoms group cleanly into the 5 pieces. Top-down ↔ bottom-up agree. **High confidence.**

---

## Step 4 — Express as Question Tree

### Q1 — W1 profile

**Verification criteria:**
- [ ] State the exact wording of the clarifying note that should be added to the prior finding.
- [ ] State where in the prior finding the note goes (which section/subsection).
- [ ] State whether the clarification changes the prior finding's schema or only its prose.

### Q2 — W3 profile

**Verification criteria:**
- [ ] State the list-valued schema shape (`types: [primary, secondary]` vs `type:` + `also: [...]` vs other).
- [ ] State CONCLUDE behavior changes (HALT-and-ask rule under W3; structural check changes).
- [ ] Estimate migration cost (existing findings need `type:` → `types:` rewrites; cross-reference filters need updates).

### Q3 — Hybrid space

**Verification criteria:**
- [ ] Surface intermediate candidates between W1 (pure single-value) and W3 (pure list-value).
- [ ] Test whether any hybrid dominates both endpoints.
- [ ] Identify failure modes specific to hybrid candidates (e.g., dual-field maintenance burden).

### Q4 — Audit-deferral logic

**Verification criteria:**
- [ ] Specify the trigger condition for the corpus audit (time-bound? evidence-bound? condition-bound?).
- [ ] Specify what the audit looks for (hybrid-body findings — findings whose body has variant-distinguishing sections from two variants).
- [ ] Specify the revival path: if audit finds ≥1 hybrid-body finding, what verdict does the audit produce?

### Q5 — Refinement diff

**Verification criteria:**
- [ ] For the chosen verdict, produce the concrete edit specs against the prior finding.
- [ ] Identify which sections of the prior finding are touched.
- [ ] Specify the verification check that confirms the edits landed correctly.

---

## Step 5 — Map Interfaces

| Source | Target | Flow | Direction |
|---|---|---|---|
| Q1 → Q3 | W1 profile (for hybrid composition) | one-way |
| Q2 → Q3 | W3 profile (for hybrid composition) | one-way |
| Q1, Q2, Q3 → Q5 | per-verdict refinement target | one-way |
| Q4 → Q5 | audit-deferral text included in refinement diff | one-way |
| Q1, Q2 → Q4 | trigger conditions per verdict | one-way |

### Assumptions-not-data check

Shared preconditions from Sensemaking:
- **SA1** — "Type" = body-section shape (reading (b)).
- **SA2** — Edit-Specifications in MUST are universal-base content, not variant-body content.
- **SA3** — Empirical evidence for hybrid-body findings is currently absent.
- **SA4** — The prior finding's universal-base + typed-variant architecture is preserved (not under revision in THIS inquiry).

---

## Step 6 — Order by Dependency

```
Phase 1 (parallel):  Q1 — Q2
Phase 2 (sequential): Q3 (consumes Q1 + Q2)
Phase 3 (parallel):  Q4
Phase 4 (sequential): Q5 (consumes Q1/Q2/Q3 + Q4)
```

No circular dependencies. SA1–SA4 are preconditions.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece answerable without sibling content. | PASS |
| **Completeness** | Pieces cover per-verdict profiles + hybrid space + deferral logic + refinement diff. | PASS — produces "concrete refinement diff against prior finding" per branch goal. |
| **Reassembly** | Answers compose into branch's verdict. | PASS. |

### Full evaluation (4 additional dimensions)

| Dimension | Verdict |
|---|---|
| Tractability | PASS — each piece is a focused pass |
| Interface clarity | PASS — flows named in Step 5; preconditions SA1–SA4 explicit |
| Balance | PASS — pieces are proportionally small |
| Confidence | PASS — top-down/bottom-up agree |

**All 7 dimensions PASS.**

---

## Final Deliverable

### Coupling Map

- **C1 (Per-verdict profiles)** — Q1 (W1), Q2 (W3); low pairwise coupling
- **C2 (Hybrid space)** — Q3; consumes from C1
- **C3 (Deferral logic)** — Q4; tight coupling to verdict choice
- **C4 (Refinement diff)** — Q5; tight coupling to all upstream

### Question Tree

```
The Whole: "Produce the concrete refinement diff against the prior finding"
├── Q1 — W1 profile (clarifying note shape + location)
├── Q2 — W3 profile (list-valued schema + CONCLUDE + migration)
├── Q3 — Hybrid space (intermediate candidates)
├── Q4 — Audit-deferral logic (trigger + revival)
└── Q5 — Refinement diff (concrete edit specs)
```

### Interface Map

(See Step 5 table.)

**Shared preconditions (SA1–SA4):**
- SA1: Type = body-section shape (reading (b))
- SA2: Edit-Specs in MUST are universal-base, not variant-body
- SA3: No empirical evidence of hybrid-body findings yet
- SA4: Prior finding's universal-base + typed-variant architecture preserved

### Dependency Order

```
Phase 1 (parallel): Q1 — Q2 — Q4
Phase 2 (sequential): Q3
Phase 3 (sequential): Q5
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

**Decomposition is committed.** Innovation can proceed with Q1, Q2, Q4 in parallel + Q3 hybrid generation. Critique then tests verdicts adversarially.
