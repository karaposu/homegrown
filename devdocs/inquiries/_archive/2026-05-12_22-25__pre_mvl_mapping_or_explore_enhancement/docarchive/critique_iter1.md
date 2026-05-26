# Critique: Pre-MVL+ mapping vs /explore enhancement

## User Input

`devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/_branch.md`

Operating on: prior pipeline outputs with concrete drafts. Critique adversarially evaluates the 3-layer recommendation + deferred broader protocol.

---

## Phase 0 — Dimensions

| # | Dimension | Weight |
|---|---|---|
| D1 | Correctness — fix addresses user's question | CRITICAL |
| D2 | Coherence — fits project precedent (navigation_context_intake) | CRITICAL |
| D3 | Defense-in-depth vs over-engineering | CRITICAL |
| D4 | Each layer catches at different stage | CRITICAL |
| D5 | Concrete spec drafts usable | HIGH |
| D6 | Deferred protocol scoped correctly | HIGH |
| D7 | User-intuition honor | HIGH |
| D8 | Operation-parsimony (bounded per-layer cost) | HIGH |
| D9 | LOOP_DIAGNOSE Candidate A integration | HIGH |
| D10 | Iteration risk acknowledgment | MEDIUM-HIGH |

---

## Phase 1 — Landscape

**Viable region:** 3 layers each catch at different stage; each is bounded (~10-15 lines); precedent justifies; concrete drafts are usable; deferred protocol has revival trigger.

**Dead region:** 3 layers are redundant (no — each catches different cases); spec edits break existing behavior (no — drafts are additive); recommendation feels good but isn't structurally sound (tested).

**Boundary region:** Layer 3 (/explore note) feels small enough to question whether it's needed at all separately; the deferred broader-protocol sketch is preliminary.

---

## Phase 2 — Adversarial Evaluation

### Candidate: 3-layer assembly + deferred sketch

**Prosecution:**

**O1 — Over-engineering probe (D3).** "3 layers feels comprehensive but might be over-engineering. Is each layer genuinely needed, or can the protocol-level (Candidate A) alone suffice?"

**O2 — Layer 3 minimality probe (D8).** "Layer 3's /explore note is small (~8 lines). Is it necessary, or is it cosmetic?"

**O3 — Concrete drafts quality (D5).** "The drafts are concrete but are they actually adoption-ready, or do they need further editing?"

**O4 — Deferred protocol scope (D6).** "The broader protocol sketch has 4 categories (discipline-analysis / cross-finding-inheritance / standalone / continuation). Are these the right categories, or are they speculative?"

**O5 — User-perspective (D7, multi-axis prosecution depth).** "User asked 'mapping by explore' — does the 3-layer split honor or dilute this?"

**O6 — Iteration risk (D10).** "What if this finding is wrong like prior findings?"

**Defense:**

**S1 — Each layer catches independently.** Author-level alone: fails if inquiry-author forgets canonicals. Protocol-level alone: fails if inquiry doesn't mention discipline name explicitly. Discipline-level alone: fails if /explore drifts from its purposive commitment. Each layer plugs a different hole.

**S2 — Concrete drafts are additive.** No existing behavior changes; backward-compatible.

**S3 — Project precedent justifies 3-layer.** navigation_context_intake.md + warmup files + (potentially) discipline-internal commitments — pattern exists.

**S4 — User intuition honored multi-way.** /explore enhancement (Layer 3) + mapping step (Layer 2 protocol) + author proactive (Layer 1).

**S5 — Iteration risk explicit.** Monitoring entry invites further correction.

**Collisions:**

| Objection | Defense | Outcome |
|---|---|---|
| O1 (over-engineering) | S1 (each layer catches different cases) | DEFENSE HOLDS. REFINE R1: state per-layer catch-cases EXPLICITLY in the finding's body so readers see the non-redundancy. |
| O2 (Layer 3 minimality) | S1 (catches if Layers 1+2 fail) | DEFENSE HOLDS. Layer 3 ~8 lines is bounded; benefit > cost. |
| O3 (drafts adoption-ready?) | drafts produced are reasonable starting text; small enough to refine in adoption pass | DEFENSE HOLDS with REFINE. R2: mark drafts as "starting text; final wording during adoption." |
| O4 (deferred protocol scope) | sketch borrows navigation_context_intake's structure; 4 categories cover observed + plausible future cases | DEFENSE HOLDS with REFINE. R3: mark 4 categories as "preliminary; refine when activated." |
| O5 (user-perspective) | 3-layer honors both readings (explore enhancement + mapping step) | DEFENSE HOLDS. |
| O6 (iteration risk) | Monitoring + self-acknowledgment | DEFENSE HOLDS with REFINE. R4: add explicit "this might be wrong" sub-section. |

---

## Phase 3 — Verdict

**SURVIVE with 4 REFINEMENTS.**

R1: state per-layer catch-cases explicitly (defense-in-depth justification visible).
R2: mark drafts as starting text; final wording during adoption.
R3: mark 4 categories in deferred protocol as preliminary.
R4: explicit "this might be wrong" sub-section.

---

## Phase 3.5 — Assembly Check

Refined assembly produces a finding that:
- 3 layers each with concrete starting text + per-layer catch-case justification.
- Deferred broader protocol sketch (preliminary).
- Cross-references + project precedent.
- Self-acknowledgment.

Emergent: **the assembly is the project's first instance of explicit 3-layer adoption package + research-frontier separation between immediate fix and broader architectural addition.**

---

## Phase 4 — Coverage + Convergence

| Dimension | Outcome |
|---|---|
| D1 | PASS |
| D2 | PASS |
| D3 | PASS-WITH-R1 |
| D4 | PASS |
| D5 | PASS-WITH-R2 |
| D6 | PASS-WITH-R3 |
| D7 | PASS |
| D8 | PASS |
| D9 | PASS |
| D10 | PASS-WITH-R4 |

10/10 tested; 6 cleanly-passing; 4 PASS-WITH-REFINE; 0 KILLs.

Convergence: 3/3 criteria met. **Signal: TERMINATE.**

---

## Convergence Telemetry

- Dimension coverage: 10/10. PASS.
- Adversarial strength: STRONG. 6 objections; defense-in-depth probe, user-perspective probe, iteration risk probe.
- Landscape stability: STABLE.
- Clean SURVIVE: YES.
- Failure modes: NONE observed.

**Output: PROCEED to CONCLUDE.**
