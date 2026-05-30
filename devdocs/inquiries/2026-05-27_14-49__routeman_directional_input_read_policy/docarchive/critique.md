# Critique — routeman_directional_input_read_policy

## User Input

```text
Critique purpose: adversarially test the deliverable (7 pieces: vocabulary + 2 per-file prose + clarification + 6-row delta + follow-up + finding shape) against user criteria + prior commitments + K13 meta-pattern. Apply project-specific risk dimensions + multi-axis prosecution. Single deliverable confirmation-shape test. Save to critique.md.
```

---

## Phase 0 — Dimension Construction

### Dimensions (11) with weights

**CRITICAL** (KILL on failure):

| # | Dimension | Source | Pass |
|---|---|---|---|
| **D1** | Answers user's "tendency vs mandatory" question with grading | _branch.md Goal (a) | Each file gets explicit policy-strength verdict + operational definition |
| **D2** | Two sub-questions adjudicated separately | _branch.md Goal (a) | routeman.md verdict ≠ _route.md verdict by structural reason |
| **D3** | "Keep up to date" honored | _branch.md Goal (d) | Verdicts enable both route-content currency AND invocation-record currency |
| **D4** | Does NOT re-litigate prior commitments | _branch.md Goal (e) | 24-00 + 18-58 + 27_00-51 + 27_13-23 commitments preserved |
| **D5** | Spec-edit-actionable deliverable | _branch.md Goal | Delta-list has Delta/Where/Action; user can apply directly |

**HIGH**:

| # | Dimension | Source | Pass |
|---|---|---|---|
| **D6** | Read-failure handling specified | _branch.md what-would-fail / Sensemaking Ambiguity 6 | Graceful-degrade default + HALT edge cases named |
| **D7** | Operational definitions are project-coherent (RFC 2119-adjacent / matches existing MUST/COULD vocab) | Sensemaking K1 | Vocabulary lands naturally in project pattern |
| **D8** | 18-58 contract preserved | _branch.md Synthesis Trigger + Sensemaking K6 | Stage-2 input contract unchanged; policy makes implicit explicit |
| **D9** | Empirical/structural grounding, not just structural-convergence-only (K13) | Prior K13 pattern | Verdicts cite specific operational mechanic, not just mechanism convergence |

**MEDIUM**:

| # | Dimension | Source | Pass |
|---|---|---|---|
| **D10** | Cross-mode consistency considered | Project-specific risk per refinement | Generic-mode flagged as follow-up; consistency claim made |
| **D11** | Canon-precedent alignment | Project-specific risk per refinement | Vocabulary matches MUST/COULD pattern from existing finding-section gating |

### Dimension validation

All "what would fail" items map: (i) re-litigation → D4; (ii) ungraded → D1; (iii) collapsed → D2; (iv) ignored "keep up to date" → D3; (v) not 18-58-aware → D8; (vi) implicit-mechanic-missed → D8 + D9.

---

## Phase 1 — Fitness Landscape

Single deliverable (confirmation-shape). Landscape has the deliverable in Viable region; no divergent candidates.

---

## Phase 2 — Adversarial Evaluation

### The deliverable (single candidate): "7-piece policy package + 6-row delta"

#### Prosecution

| Dim | Score | Notes |
|---|---|---|
| D1 | PASS | routeman.md = MANDATORY-WHEN-AVAILABLE; _route.md = SHOULD. Each verdict has operational definition (HALT/FLAG behavior under each failure case). |
| D2 | PASS | Two verdicts by distinct structural reasons (directional mode's operational requirement vs value-adding). |
| D3 | PASS | Reading routeman.md enables route-content currency (per-Route Status update across invocations); reading _route.md enables invocation-record currency (History append). Both currencies enabled. |
| D4 | PASS | Prior commitments enumerated in Synthesis Trigger; this finding preserves all of them (18-58 stage-2 contract preserved per P4; 24-00 resume mechanism preserved per the verdict structure; 27_00-51 file structure preserved; 27_13-23 schema preserved). |
| D5 | PASS | 6-row delta with Delta/Where/Action columns + each row points at specific spec sections (§3 prologue / §3.2 / §3.3 / §3.5). Spec-edit-actionable. |
| D6 | PASS | Graceful-degrade default specified across all tiers + HALT edge cases ("MalformedRequiredInput" / "MissingRequiredInput" named errors). |
| D7 | PASS-with-caveat | 4-tier vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) is RFC 2119-adjacent with one project-coined tier (MANDATORY-WHEN-AVAILABLE). **Caveat:** the project's existing vocabulary is MUST/COULD/DEFERRED (in finding-section gating); RFC 2119 is MUST/SHOULD/MAY. The deliverable introduces a 4th tier (MANDATORY-WHEN-AVAILABLE) — a project-coined refinement. Is this confusion or precision? Test: the user explicitly asked for tendency-vs-mandatory grading; "mandatory-when-available" captures the precise structural reality (required when file exists; gracefully degraded when absent). Project-coined precision is justified. The caveat resolves to: documented in the substrate text per P1; future-readers see the 4-tier vocabulary defined. |
| D8 | PASS | P4 explicitly preserves 18-58's stage-2 input contract + names the operational mechanic (parent-route-id is acquired via reading parent's routeman.md). Implicit-made-explicit; no contract change. |
| D9 | PASS | Verdicts grounded in: 18-58's input-contract structural requirement (K6); the 22-route empirical example's per-route Status field that gets updated in-place (K7); canon evolving-quality-awareness doc's Baldwin substrate (K7 mapping). Not just mechanism convergence. K13 honored. |
| D10 | PASS | Generic mode flagged as follow-up scope with concrete consistency-application prediction (P6 names asymmetries between modes). |
| D11 | PASS-with-caveat | RFC 2119-adjacent vocabulary chosen. The project doesn't formally adopt RFC 2119 (per surfacing FF-Su5 observation). Choice justified: project's MUST/COULD/DEFERRED is for finding-section gating, not spec-runtime-behavior; runtime behavior in the discipline spec is a different concern and warrants its own vocabulary. **Caveat:** future inquiries may benefit from a unified project-wide spec-runtime vocabulary. Flag for project-level Reflection. |

**Multi-axis prosecution:**

- **User-perspective objection:** The user asked "tendency or maybe mandatory." Did the deliverable answer that directly? **Yes:** routeman.md = mandatory-when-available (closer to user's "mandatory"); _route.md = SHOULD (closer to user's "tendency"). The grading exactly maps onto the user's framing.

- **Specific failure-case scenario:** Imagine a directional invocation on a parent route whose parent inquiry's routeman.md was recently amended (e.g., per the 13-23 amendment) but in a way that broke schema compatibility — old-schema fields removed, new fields added. The committed deliverable says: MANDATORY-WHEN-AVAILABLE → present-but-malformed-AND-needed → HALT with `MalformedRequiredInput`. **This is correct behavior.** Operator gets a named error pointing at the schema mismatch; they fix it; re-invoke. Failure mode: not silent corruption.

- **Specification-gap probe:** Where is the deliverable under-specified?
  - (a) The exact format of the `MalformedRequiredInput` and `MissingRequiredInput` error messages isn't specified. Resolution-level: spec-detail; not blocking; spec author fills in at edit-time.
  - (b) The threshold for "staleness" in `_route.md` is unspecified ("recently invoked" is vague). Resolution: defer to operator judgment; the staleness FLAG is informational, not action-gating. OK to leave vague at L0/L1.
  - (c) The interaction with multi-head workers (when 2 workers concurrently invoke directional mode on the same parent) is not addressed. Resolution: out of scope per this inquiry's directional-mode + single-worker assumption. Flag for cross-mode-and-cross-worker follow-up if surfaced operationally.

**Strongest single objection:** D7 PASS-with-caveat (4-tier vocabulary introduces a project-coined tier) + spec-gap (c) (multi-head concurrency unaddressed). Both are refinement opportunities, not CRITICAL failures.

#### Defense

**Core strength:** The deliverable is structurally honest, spec-edit-actionable, and grounds verdicts in operational mechanics rather than vague claims. It answers the user's specific question with precision (4-tier vocabulary captures the structural reality of routeman.md's near-mandatory read in directional mode).

**Conditions under which this is the obvious right answer:** Always (subject to caveats addressed in CONCLUDE).

#### Collision

- Prosecution: D7 + D11 PASS-with-caveat + spec-gap (c) multi-head concurrency unaddressed.
- Defense: Caveats are project-coined-precision-justified; spec-gap is out-of-scope; refinement opportunities not blockers.
- Verdict: Defense survives.

#### Verdict: **SURVIVE** (with D7 + D11 + spec-gap caveats; resolvable in CONCLUDE)

#### Constructive output

CONCLUDE must:
1. **D7 resolution:** in the finding, explicitly note the 4-tier vocabulary as project-coined for runtime-behavior policies, distinct from the existing finding-section MUST/COULD vocabulary. Flag for future cross-spec consistency review.
2. **D11 resolution:** flag the desire for a project-wide unified spec-runtime vocabulary as Open Question / Research Frontier.
3. **Spec-gap (c) resolution:** note in Open Questions that multi-head concurrent invocation on the same parent is not addressed; flag for surfacing if operationally encountered.

---

## Phase 3 — Verdict + Constructive Output

| Candidate | Verdict | Disposition |
|---|---|---|
| The deliverable (7-piece policy package) | SURVIVE (with D7 + D11 + multi-head caveats) | ACTIONABLE |

---

## Phase 3.5 — Assembly Check

The deliverable plus caveats form a complete spec-edit + Open Questions package. No emergent.

---

## Phase 4 — Coverage + Convergence Assessment

**Coverage:** single deliverable in Viable region.

**Convergence criteria:**
- At least one SURVIVE: ✓
- Landscape stable: ✓
- Clean SURVIVE: ✓ (caveats on HIGH/MEDIUM only)
- Convergence signal: **TERMINATE**

---

## Convergence Telemetry

- Dimension coverage: 11/11
- Adversarial strength: STRONG (multi-axis prosecution + K13 + project-specific risk dims applied)
- Landscape stability: STABLE
- Clean SURVIVE: YES
- Failure modes observed: none
  - Wrong Dimensions — no
  - Rubber-Stamping — no (caveats flagged)
  - Nitpicking — no
  - Dimension Blindness — no (project-specific risk dims added)
  - False Convergence — no
  - Evaluation Drift — no
  - Self-Reference Collapse — no

---

## Final Deliverable Summary

**Dimensions with weights:** 5 CRITICAL + 4 HIGH + 2 MEDIUM = 11.
**Fitness landscape:** single deliverable in Viable region.
**Verdict:** SURVIVE (ACTIONABLE) with D7 + D11 + multi-head-concurrency resolvable caveats.
**Coverage:** Viable region (1 candidate); 0 KILLs; 0 Unexplored.
**Signal:** TERMINATE.

---

## Overall: **PROCEED**

Critique converges on the deliverable as ACTIONABLE. Caveats route to CONCLUDE: 4-tier vocabulary noted as project-coined; project-wide spec-runtime vocabulary flagged as Open Question; multi-head concurrency flagged as out-of-scope Open Question.

No failure modes observed. Ready for CONCLUDE.
