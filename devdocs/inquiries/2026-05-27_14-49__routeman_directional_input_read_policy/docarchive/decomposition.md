# Decomposition — routeman_directional_input_read_policy

## User Input

```text
Decomposition purpose: partition production of policy-text + spec-edit-delta + read-failure handling + 18-58 contract clarification. Sensemaking adjudicated verdicts; Decomposition identifies spec-edit work-units. Save to decomposition.md.
```

---

## Step 1 — Perceive Coupling Topology

### Elements identified from Sensemaking SV6

| ID | Element | What it produces |
|---|---|---|
| **E1** | Policy text for routeman.md read | The MANDATORY-WHEN-AVAILABLE prose for §3.2 Reception |
| **E2** | Policy text for _route.md read | The SHOULD prose for §3.2 Reception |
| **E3** | Three-tier operational vocabulary definition | A short reference section defining MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY operationally; likely a sub-section in §3.2 or §3 prologue |
| **E4** | Read-failure handling spec | The graceful-degrade + HALT-on-malformed-AND-needed mechanic; likely embedded in E1 + E2 or a separate sub-section |
| **E5** | 18-58 contract clarification | Note in §3.3 (directional mode) or §3.2 noting that reading parent's routeman.md is the operational mechanic by which parent-route-id is acquired |
| **E6** | Spec-edit delta against §3.2 + §3.3 | The concrete amendment-row list (delta against `cognitive_harness/routeman/references/routeman.md`) |
| **E7** | Generic-mode follow-up scope statement | A bounded scope for a follow-up inquiry on generic-mode read policy |
| **E8** | Integration into finding.md deliverable | The compiled output (policy memo + delta + follow-up scope) |

### Coupling matrix

| | E1 | E2 | E3 | E4 | E5 | E6 | E7 |
|---|---|---|---|---|---|---|---|
| **E1** routeman.md policy | — | weak | **strong** (E3 defines the vocabulary E1 uses) | **strong** (E4 spec is part of E1's prose) | strong (E1 references E5's implicit-mechanic) | strong (E6 consumes E1) | weak |
| **E2** _route.md policy | weak | — | **strong** (same vocabulary) | **strong** (failure handling same shape) | weak | strong (E6 consumes E2) | weak |
| **E3** Vocabulary | strong | strong | — | weak (vocab includes failure language) | weak | strong (E6 consumes) | weak |
| **E4** Failure handling | strong | strong | weak | — | weak | strong (E6 consumes) | weak |
| **E5** 18-58 clarification | strong | weak | weak | weak | — | strong (E6 consumes) | weak |
| **E6** Spec-edit delta | strong (incoming) | strong (incoming) | strong (incoming) | strong (incoming) | strong (incoming) | — | weak |
| **E7** Generic-mode scope | weak | weak | weak | weak | weak | weak | — |

### Coupling clusters

- **Cluster I — Policy-text-coupled (E1 + E2 + E3 + E4).** The two per-file policies share vocabulary (E3) + failure handling (E4). Production order matters: E3 first (vocabulary established), then E4 (failure handling spec), then E1 and E2 in parallel (each consumes E3 + E4).
- **Cluster II — Clarification (E5).** Mostly independent of Cluster I.
- **Cluster III — Integration (E6).** Consumes everything.
- **Cluster IV — Independent (E7).** Generic-mode scope is standalone.

### Coupling map

```
                       ┌────────────────────────────┐
                       │ E8 — Integration into       │
                       │      finding.md deliverable │
                       └─────────────┬──────────────┘
                                     │ consumes
                                     ▼
                       ┌───────────────────────────┐
                       │ E6 — Spec-edit delta      │
                       └─────────────┬─────────────┘
                                     │ consumes all
              ┌─────────┬────────────┼────────────┬─────────┐
              ▼         ▼            ▼            ▼         ▼
         ┌─────┐    ┌─────┐    ┌──────┐    ┌─────┐    ┌─────┐
         │ E1  │←───┤ E3  │───→│  E2  │    │ E5  │    │ E7  │
         │     │    │     │    │      │    │     │    │     │
         │ rm  │    │vocab│    │_route│    │18-58│    │ gen │
         └──┬──┘    └──┬──┘    └──┬───┘    │clar.│    │ scop│
            │          │           │       └─────┘    └─────┘
            └──────────┼───────────┘
                       │
                       ▼
                  ┌─────┐
                  │ E4  │
                  │     │
                  │fail │
                  │handl│
                  └─────┘
```

---

## Step 2 — Detect Boundaries (Top-Down)

Natural cut points:

1. **Between vocabulary + failure handling (E3 + E4) and the per-file policies (E1 + E2).** Vocabulary + failure handling are the COMMON SUBSTRATE; E1 and E2 INSTANTIATE the vocabulary with file-specific verdicts.
2. **Between policy-text production (E1, E2) and the spec-edit-delta compilation (E6).** Policy text is content; delta is integration.
3. **Between 18-58 contract clarification (E5) and the rest.** E5 has its own structural concern (clarifying an inherited contract) that doesn't depend on the policy strength.
4. **Between generic-mode scope (E7) and the rest.** Forward-looking; independent.

### Initial boundary set (top-down)

- **P1** — Common substrate (E3 vocabulary + E4 failure handling) packaged together because both feed E1 and E2 in the same way
- **P2** — routeman.md policy text (E1)
- **P3** — _route.md policy text (E2)
- **P4** — 18-58 contract clarification (E5)
- **P5** — Spec-edit delta against routeman.md §3.2 + §3.3 (E6)
- **P6** — Generic-mode follow-up scope (E7)
- **P7** — Final deliverable integration into finding.md (E8)

Seven pieces total.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atoms:

| Atom | Falls into |
|---|---|
| A1 — Define MANDATORY-WHEN-AVAILABLE operationally | P1 ✓ |
| A2 — Define SHOULD operationally | P1 ✓ |
| A3 — Define MANDATORY + MAY (for completeness) | P1 ✓ |
| A4 — Spec the graceful-degrade default | P1 ✓ |
| A5 — Spec the HALT-on-malformed-AND-needed edge | P1 ✓ |
| A6 — Write the prose: "routeman MUST-WHEN-AVAILABLE read prior routeman.md..." | P2 ✓ |
| A7 — Write the prose: "routeman SHOULD read prior _route.md..." | P3 ✓ |
| A8 — Clarify in §3.3 that parent-route-id acquisition presumes parent routeman.md read | P4 ✓ |
| A9 — Compose the §3.2 amendment-row(s) | P5 ✓ |
| A10 — Compose the §3.3 amendment-row(s) | P5 ✓ |
| A11 — Define the generic-mode follow-up scope | P6 ✓ |
| A12 — Compose the final finding.md deliverable | P7 ✓ |

All 12 atoms cluster. Top-down + bottom-up agree.

---

## Step 4 — Express as Question Tree

**P1 — What are the operational definitions of MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY + the read-failure handling default + edge cases?**

- **Verification criteria:**
  - [ ] All 4 strength-tiers operationally defined.
  - [ ] Graceful-degrade default specified.
  - [ ] HALT-on-malformed-AND-needed edge specified.
  - [ ] Definitions are project-coherent (close to RFC 2119 semantics; matches MUST/COULD/DEFERRED adjacency from finding-section gating).
- **Stopping criterion:** A reference sub-section ready to land in spec §3 or §3.2.

**P2 — What is the routeman.md read policy prose?**

- **Verification criteria:**
  - [ ] States routeman.md = MANDATORY-WHEN-AVAILABLE in directional mode.
  - [ ] References the operational mechanic (parent-route-id acquisition).
  - [ ] References the vocabulary from P1.
  - [ ] Specifies graceful-degrade behavior on absence; HALT on malformed-AND-needed.
- **Stopping criterion:** Prose ready to land in spec §3.2.

**P3 — What is the _route.md read policy prose?**

- **Verification criteria:**
  - [ ] States _route.md = SHOULD in directional mode.
  - [ ] References value-adding rationale (orchestration awareness + Baldwin substrate).
  - [ ] References the vocabulary from P1.
  - [ ] Specifies graceful-degrade behavior on absence-or-malformed.
- **Stopping criterion:** Prose ready to land in spec §3.2.

**P4 — How does the 18-58 stage-2 input contract get clarified?**

- **Verification criteria:**
  - [ ] Note added to §3.3 (or wherever stage-2 input contract lives in current spec) confirming that parent-route-id acquisition presumes reading parent's routeman.md.
  - [ ] Contract unchanged (parent-route-id + file-paths-in-scope + optional refined-purpose) — just made explicit.
  - [ ] No re-litigation of 18-58.
- **Stopping criterion:** Clarification note ready to land.

**P5 — What is the spec-edit delta against the live routeman.md?**

- **Verification criteria:**
  - [ ] All amendment rows enumerated in Delta / Where / Action columns (matching prior findings' MUST-list format).
  - [ ] Each row points to a specific section of `cognitive_harness/routeman/references/routeman.md`.
  - [ ] The delta is internally coherent: vocabulary defined before used; policy prose references vocabulary; failure handling is spec'd once + referenced.
- **Stopping criterion:** Spec-edit-actionable delta-list produced.

**P6 — What is the generic-mode follow-up scope statement?**

- **Verification criteria:**
  - [ ] Scope is bounded (generic-mode policy specifically; not redo of this inquiry).
  - [ ] Inputs identified (this inquiry's vocabulary + verdicts as priors).
  - [ ] Gate identified (when generic-mode operation is being designed / exercised).
- **Stopping criterion:** Concrete follow-up inquiry scope statement ready.

**P7 — Integration into finding.md.**

- **Verification criteria:**
  - [ ] Question + verdicts + walkthrough + Inherited Commitments Re-test + Next Actions all integrated.
  - [ ] Spec-edit delta from P5 is the load-bearing actionable output.
  - [ ] Follow-up from P6 in Open Questions.
- **Stopping criterion:** finding.md deliverable shape complete.

---

## Step 5 — Map Interfaces

| Source | Target | Flow content |
|---|---|---|
| P1 | P2 | Vocabulary + failure-handling reference |
| P1 | P3 | Vocabulary + failure-handling reference |
| P1 | P5 | Vocabulary definitions for spec section |
| P2 | P5 | routeman.md policy prose for §3.2 amendment row |
| P3 | P5 | _route.md policy prose for §3.2 amendment row |
| P4 | P5 | §3.3 clarification note for amendment row |
| P5 | P7 | Spec-edit delta-list |
| P6 | P7 | Follow-up scope statement |
| All | P7 | Each contributes to finding.md |

### Assumptions-not-data check

- **P1 → P2 / P3:** assumes vocabulary is stable + applicable to both files. Captured per Sensemaking K2 + S2.
- **P5 incoming:** assumes all upstream pieces produce SPEC-EDITABLE artifacts (not abstract claims). Captured in each piece's stopping criterion.

No hidden assumptions.

---

## Step 6 — Order by Dependency

### Tier 0

- **P1** (common substrate: vocabulary + failure handling)

### Tier 1 (parallel)

- **P2** (routeman.md prose, consumes P1)
- **P3** (_route.md prose, consumes P1)
- **P4** (18-58 clarification, independent of P1 but parallel-eligible)
- **P6** (generic-mode follow-up scope, independent)

### Tier 2

- **P5** (spec-edit delta, consumes P1 + P2 + P3 + P4)

### Tier 3

- **P7** (final deliverable, consumes P5 + P6)

### Dependency graph

```
Tier 0:               [P1]                  
                       │
       ┌───────────────┼───────────┐
       ▼               ▼           ▼
Tier 1: [P2]  [P3]  [P4]   [P6 parallel]
       │      │      │       │
       └──────┼──────┘       │
              ▼              │
Tier 2:    [P5]              │
              │              │
              └──────┬───────┘
                     ▼
Tier 3:           [P7]
```

No circular dependencies. Linear flow with parallelism opportunities at Tier 1.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Verdict | Reasoning |
|---|---|---|---|
| **Independence** | Can each piece be worked on without others? | **PASS** | P1 standalone; P2/P3/P4/P6 parallel after P1; P5 integrator; P7 consumer. Clean. |
| **Completeness** | Do pieces cover the whole? | **PASS** | All 12 atoms cluster cleanly. All Sensemaking SV6 verdicts produce concrete spec text via P2 + P3; vocabulary + failure handling via P1; 18-58 implicit-made-explicit via P4. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | The 7 pieces produce: spec-edit-actionable delta-list (P5) + final finding.md deliverable (P7). Reassembly is the spec-edit + the inquiry record. |

### Full evaluation (7 dimensions)

| Dim | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | |
| Reassembly | PASS | |
| Tractability | PASS | Pieces are small; each writes a few paragraphs or a delta-row. |
| Interface clarity | PASS | 9 interfaces explicit; assumptions-not-data check passed. |
| Balance | PASS | P1 + P5 are slightly larger (substrate + integrator); others smaller. By design. |
| Confidence | HIGH | Top-down + bottom-up agree. |

### Failure-mode review

- Premature Decomposition: No (Sensemaking ran first).
- Wrong Boundaries: No.
- Hidden Coupling: No.
- Missing Pieces: No.
- Over-Decomposition: No (7 pieces for 12 atoms; right-sized).
- Ignoring Dependencies: No.
- Imbalanced Decomposition: No (intentional asymmetry — substrate + integrator are larger).

---

## Summary

The policy-definition work partitions into 7 pieces along substrate / per-file-policy / clarification / delta / follow-up / deliverable seams.

- **Tier 0:** P1 vocabulary + failure handling.
- **Tier 1 (parallel):** P2 routeman.md prose; P3 _route.md prose; P4 18-58 clarification; P6 generic-mode follow-up scope.
- **Tier 2:** P5 spec-edit delta.
- **Tier 3:** P7 finding.md integration.

**Verdict: PROCEED.**
