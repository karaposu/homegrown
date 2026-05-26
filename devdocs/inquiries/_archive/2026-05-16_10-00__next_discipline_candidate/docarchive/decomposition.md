# Decomposition: Next Discipline Candidate

## User Input

Inquiry `_branch.md`. Input: sensemaking.md (3 core commits; primary `/intuit` Phase A; strong alternate materialization; weak alternate nav-reflect v2; 6 pre-sketched pieces) + exploration.md. Test if 6 is right; note P5/P6 are very small; novel piece is the build-path for the primary.

---

## Step 1 — Coupling Topology

### Work-elements

| # | Element |
|---|---|
| E1 | Criteria specification (dimensions + weights for "next discipline") |
| E2 | Per-candidate elaboration (primary + alternates: /intuit / materialization / nav-reflect v2) |
| E3 | Recommendation packet (ranked + user-decision question) |
| E4 | Build path for the primary (what inquiries come after this finding to actually build the recommended discipline) |
| E5 | Adjacent observations + cross-references (roadmap framing noted; memory-hygiene observation; source-doc citations) |

(Sensemaking sketched 6; merging P5 roadmap-noted and P6 cross-refs into one "adjacent observations" piece reduces fragmentation without losing content. Decomposition adopts the 5-piece cut.)

### Pairwise coupling

| Pair | Coupling | Reasoning |
|---|---|---|
| E1 ↔ E2 | **Strong** | Evaluation = criteria-applied-to-candidates |
| E1 ↔ E3 | Moderate | Recommendation cites criteria |
| E1 ↔ E4 | Weak | Build path is execution-shape |
| E1 ↔ E5 | Weak | |
| E2 ↔ E3 | **Strong** | Recommendation distills evaluation |
| E2 ↔ E4 | Moderate | Build path depends on WHICH candidate is primary |
| E2 ↔ E5 | Weak | |
| E3 ↔ E4 | Moderate | Build path applies once user picks; conditional on primary selection |
| E3 ↔ E5 | Weak | |
| E4 ↔ E5 | Weak | |

### Coupling map and boundaries

```
HIGH-COUPLING CLUSTERS
  α: {E1, E2, E3}  ─ the evaluation chain (criteria → candidates → recommendation)
  β: {E4}          ─ build path for primary
  γ: {E5}          ─ adjacent observations + cross-refs

LOW-COUPLING VALLEYS
  α | β            ─ recommendation vs downstream-build path
  α/β | γ          ─ load-bearing vs adjacent
```

### Tested alternative cuts

| Alternate | Verdict |
|---|---|
| Per-candidate (3 pieces, one per finalist) | REJECTED — loses criteria home; loses recommendation home; duplicates the evaluation pattern |
| Coarse merge (E1+E2+E3 into single "evaluation") | REJECTED — loses evaluative independence; Critique can't separately assess criteria vs evaluation vs recommendation |
| Sensemaking's original 6 (P1-P6 with separate roadmap-noted + cross-references) | CONSIDERED — but P5 (roadmap) and P6 (cross-refs) are single-paragraph-each observations; consolidating them as one "adjacent" piece reduces fragmentation without losing content |

**Chosen cut:** 5 pieces (P1 criteria / P2 per-candidate / P3 recommendation / P4 build path / P5 adjacent observations).

---

## Step 2 — Boundaries Top-Down

- **B1: E1 | E2** — criteria vs candidates; clean.
- **B2: E2 | E3** — per-candidate evaluation vs distilled recommendation; clean.
- **B3: (E1+E2+E3) | E4** — recommendation vs build-path for the chosen primary; conditional dependency, clean.
- **B4: (E1+E2+E3+E4) | E5** — load-bearing pieces vs adjacent observations.

---

## Step 3 — Boundaries Bottom-Up

### Atoms

| Atom | Belongs to |
|---|---|
| a1 — list criteria dimensions | P1 |
| a2 — assign weights per dimension | P1 |
| a3 — score /intuit against each criterion + reasoning | P2 |
| a4 — score materialization against each criterion + reasoning + classification caveat | P2 |
| a5 — score nav/reflect v2 against each criterion + reasoning + engineering-not-admission caveat | P2 |
| a6 — disqualification list (future-register, genuinely new, etc.) with rationale | P2 |
| a7 — rank top-3 | P3 |
| a8 — articulate conditional reasoning per rank ("right pick when ...") | P3 |
| a9 — articulate user-decision question | P3 |
| a10 — specify next-inquiry sequence if user picks /intuit | P4 |
| a11 — note dependencies (audit 2nd-reviewer; potential td-critique → adjudicate rename impact on integration) | P4 |
| a12 — roadmap framing noted as OUT-OF-SCOPE adjacent | P5 |
| a13 — memory-hygiene observation (enes/→docs/) carried forward | P5 |
| a14 — cross-references list (taxonomy, intuit.md, materialization doc, prior findings) | P5 |

Each atom maps cleanly to one piece. **Confidence: HIGH.**

---

## Step 4 — Question Tree

### P1 — Criteria Specification

**Question:** What dimensions does a candidate need to score on to qualify as the next discipline, and at what weights?

**Verification criteria:**
- [ ] All sensemaking-committed dimensions enumerated: taxonomy-cannon-fit (CRITICAL), build-readiness (HIGH), phase-fit (HIGH), strategic-leverage (MEDIUM), build-cost (LOW), user-language-alignment (MEDIUM); plus additional dimensions if Innovation surfaces them
- [ ] Weight per dimension stated explicitly
- [ ] Success criterion per dimension (what "passing" looks like)
- [ ] Source per dimension (sensemaking commit / exploration finding / taxonomy doc)

### P2 — Per-Candidate Elaboration

**Question:** For each candidate (primary + alternates), how does it score against each criterion, and what is the load-bearing reasoning?

**Verification criteria:**
- [ ] **Primary: `/intuit` Phase A** — score per criterion + reasoning paragraph (load-bearing argument: admitted-but-unbuilt unique position; spec complete; Baldwin cycle activation)
- [ ] **Alternate 1: Materialization** — score per criterion + reasoning + classification caveat (the lifecycle-shape vs discipline-shape uncertainty; upstream taxonomy inquiry needed)
- [ ] **Alternate 2: Nav v2 / Reflect v2** — score per criterion + reasoning + engineering-not-admission caveat (these are refreshes of admitted slots, not new admissions)
- [ ] **Disqualifications** listed with one-line reason: future-register candidates (consolidation / parallel-MVL / Level-3 intuition-space — trigger conditions not met); genuinely-new untaxonomized candidates (translation / resolution / hypothesis — overlap with existing or would require new admission audit)
- [ ] Light prosecution/defense framing per candidate (Critique will deepen downstream)

### P3 — Recommendation Packet

**Question:** What is the user-facing ranked recommendation, with the explicit user-decision framing?

**Verification criteria:**
- [ ] **Rank 1 — `/intuit` Phase A** with: one-line operation-fit summary + tradeoff vs alternates + build-commitment scale (~2-3 inquiries to ship Phase A)
- [ ] **Rank 2 — Materialization** with: conditions under which it's the right pick (high capability-leverage weighting + willingness to invest in classification inquiry first)
- [ ] **Rank 3 — Nav v2 / Reflect v2** with: conditions under which it's the right pick (continue in-flight engineering rather than open a new admission)
- [ ] User-decision question explicit (user adjudicates which to commit to)
- [ ] Note about user-cannon-vs-taxonomy gap (user's stated cannon omits taxonomy-admitted disciplines; finding clarifies this so user mental model can update if desired)

### P4 — Build Path for the Primary (`/intuit` Phase A)

**Question:** If the user commits to /intuit Phase A as the primary, what is the next-inquiry sequence?

**Verification criteria:**
- [ ] **Step 1 — Structural inquiry on `/intuit` Phase A spec.** Translate docs/intuit.md sections into discipline-file shape: `cognitive_harness/intuit/SKILL.md` (frontmatter + Step 0 pre-read + Additional Input + Instructions) + `cognitive_harness/intuit/references/intuit.md` (canonical reference).
- [ ] **Step 2 — Process inquiry on `/intuit` procedure.** The 3-step transform-space pattern (Forward transform → Scan → Projection); convergence/decline conditions; output schema (10-13 fields); invocation trace format.
- [ ] **Step 3 — Initial implementation testing.** Run /intuit on a small corpus to verify Phase A end-to-end.
- [ ] **Step 4 — Calibration threshold gate for Phase B+.** N ≥ 15 calibration runs documented; only after this can Phase B (divergent mode + discriminators) ship.
- [ ] **Dependencies noted:**
  - Audit 2nd-reviewer pass (per taxonomy doc, /intuit's audit is PASS pending 2nd reviewer)
  - Potential td-critique → adjudicate rename (per recent rename inquiry recommendation) may shift integration-pattern wording in /intuit spec; align timing
  - Materialization classification inquiry NOT a prerequisite (independent track)

### P5 — Adjacent Observations + Cross-References

**Question:** What adjacent context is worth surfacing in the finding (without expanding inquiry scope)?

**Verification criteria:**
- [ ] **Roadmap framing noted as OUT-OF-SCOPE adjacent.** "Next 3-5 disciplines with ordering" deserves its own inquiry; this finding answers "next" (singular).
- [ ] **Memory-hygiene observation carried forward.** User's auto-memory "Discipline design-history location" still points at `enes/` but folder is now at `docs/` — already surfaced in prior inquiries; noting again for visibility.
- [ ] **User-cannon-vs-taxonomy gap surfaced.** User's stated cannon (5-ish) ≠ canonical taxonomy admitted (8). Finding clarifies the meaning gap so user knows where their mental model differs from the documented taxonomy.
- [ ] **Cross-references list:**
  - `docs/discipline_taxonomy.md` — canonical taxonomy
  - `docs/intuit.md` — Phase A spec for /intuit
  - `docs/materialization_lifecycle.md` — materialization lifecycle
  - `devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md` — milestone arc
  - `devdocs/inquiries/2026-05-16_09-15__rename_td_critique/finding.md` — rename impact on integration patterns
  - `devdocs/inquiries/2026-05-16_07-25__preventing_replacement_design_context_blur/finding.md` — nav/reflect archive recommendation

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 → P2 | Criteria + weights | data | one-way | precondition |
| P2 → P3 | Per-candidate scores + reasoning | data | one-way | precondition |
| P3 → P4 | (Conditional on user) primary recommendation → build-path applies | data, conditional | one-way | conditional precondition |
| P5 ↔ all | Cross-references cited inline | reference | bidirectional | informational |

### Assumptions-not-data check

| Piece | Assumption | Explicit? |
|---|---|---|
| P2 | Criteria from P1 are stable (no late additions during scoring) | ✓ |
| P3 | Evaluation from P2 is complete; ranking defensible | ✓ |
| P4 | User commits to /intuit primary — if they pick differently, P4's build-path is replaced with a different sequence | ✓ via conditional precondition |
| P4 | docs/intuit.md is authoritative spec for /intuit Phase A | ✓ (named in cross-refs) |
| P5 | Inquiry scope = single recommendation; roadmap is adjacent | ✓ |

No hidden assumptions.

---

## Step 6 — Dependency Order

### For Innovation phase

```
P1 ─┐
P5 ─┘ (independent of P1-P4; can elaborate in parallel)

P1 → P2 → P3 → P4 (sequential)
```

P1 and P5 can be drafted in parallel. P2 depends on P1. P3 depends on P2. P4 depends on P3 (conditional on primary selection — but since this inquiry recommends /intuit as primary, P4 elaborates that branch).

### For execution (the user's actual to-do list after the finding)

1. **Read recommendation** (P3).
2. **Adjudicate primary** (user decides one of: /intuit / materialization / nav-reflect v2 / other).
3. **If /intuit:** execute P4's build-path sequence.
4. **If materialization:** run classification inquiry first; then build path.
5. **If nav-reflect v2:** continue in-flight redesign work (no new inquiry needed; this is engineering not admission).

---

## Step 7 — Self-Evaluate (Full 7 Dimensions)

| Dimension | Status | Notes |
|---|---|---|
| **Independence** | PASS | Each piece's question is answerable using only declared interfaces |
| **Completeness** | PASS | Criteria (P1) + candidates (P2) + recommendation (P3) + build-path (P4) + adjacent observations (P5) cover the whole "what discipline to build next" problem |
| **Reassembly** | PASS | All 5 pieces answered → user has ranked recommendation + adjudication path + concrete build sequence + adjacent context |
| **Tractability** | PASS | P1 ~10 lines; P2 ~40-50 lines (3 candidates × N criteria + reasoning); P3 ~20 lines; P4 ~15-20 lines; P5 ~10 lines |
| **Interface clarity** | PASS | All interfaces explicit; assumptions surfaced; no hidden coupling |
| **Balance** | PASS | P2 is largest (3 candidates) but not 80% of work; others roughly proportional |
| **Confidence** | PASS | Top-down + bottom-up boundaries agree |

### Determination-Mechanism Check

Load-bearing concept with runtime-determined applicability: **user's choice of primary**. Determined at user-adjudication time after reading P3. P3 explicitly surfaces this (ranked list + decision question); P4 parameterizes on the chosen primary. ✓

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Decomposition | ✗ avoided — Sensemaking fully clarified the whole (3 commits, 6 ambiguities collapsed) before this step |
| 2. Wrong Boundaries | ✗ avoided — cuts at low-coupling points; alternatives tested |
| 3. Hidden Coupling | ✗ avoided — assumptions-not-data check applied |
| 4. Missing Pieces | ✗ avoided — determination mechanism (P3 user-decision; P4 conditional build-path) explicit |
| 5. Over-Decomposition | ✗ avoided — 5 pieces; each non-trivial. Merged P5+P6 from sensemaking pre-sketch to avoid fragmenting single-paragraph items |
| 6. Ignoring Dependencies | ✗ avoided — execution order specified, parallel-vs-sequential identified |
| 7. Imbalanced Decomposition | ✗ avoided — P2 is largest by design but balanced overall |

### Self-Assessment

**PROCEED.** 5 well-bounded pieces; clean interfaces; dependency order specified; all 7 self-evaluation dimensions PASS; determination mechanism explicit. Ready for Innovation to produce concrete content per piece (criteria table; per-candidate scoring + reasoning; ranked recommendation; build-path inquiry sequence; adjacent observations).
