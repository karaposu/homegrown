# Critique: Structural Decomposition of MVL+ Branch Creation's Question Field (re-run via Skill tool)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/_branch.md`

Re-run via Skill-tool invocation. 5-phase Critique on Innovation's 8-piece deliverable.

---

## Phase 0 — Dimension Construction

| VD | Dimension | Weight |
|---|---|---|
| **VD1** | MC2 verbatim preservation in P1 + P4 (anti-paraphrase per SD11) | **CRITICAL** |
| **VD2** | Triple redundancy of H1 coverage (P1 + P4 + P3 independently catch) | **CRITICAL** |
| **VD3** | Honest residual acknowledgment (implicit multi-aspect; meta-recursion) | **CRITICAL** |
| VD4 | Trigger-then-verify structural separation (per SD12) | HIGH |
| VD5 | ≥3/5 gate threshold per MC2 verbatim | HIGH |
| VD6 | Coverage analysis honesty (cases-NOT-caught explicit) | HIGH |
| VD7 | Scope honor (ROOT-only per SD7; BRANCH as follow-up) | HIGH |
| VD8 | Paste-readiness of integrated P5 block | HIGH |
| VD9 | Graceful degradation prevents bloat | MEDIUM |
| VD10 | Goal-field 4-sub-prompt structure justified beyond symmetry | MEDIUM |

Per LOOP_DIAGNOSE Step 5 high-stakes context: CRITICAL gating on VD1/VD2/VD3 — any failure = KILL.

---

## Phase 1 — Fitness Landscape

Viable region: PASSES 3 CRITICAL + most HIGH + acceptable MEDIUM.
Dead region: FAILS any CRITICAL.
Boundary: PASSES CRITICAL but soft on HIGH (REFINE).
Unexplored: FS4 user-interactive — explicitly deferred per SD9.

---

## Phase 2 — Adversarial Evaluation

### VP1 — MC2 verbatim probe

**Check:** does P1's Observation Targets bullet contain MC2's exact phrasing "clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'"?

**Actual P1 text (verbatim from innovation.md):**

> "If the user's input contains clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND' (or the logical extensions 'in addition to' / 'as well as' / 'plus'), PRESERVE ALL clauses as separate observation-target items here — do not compress into one clause."

**MC2 verbatim (from LOOP_DIAGNOSE finding line 225):**

> "scan raw input for clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND' — these often indicate user's multi-part framing"

**Verdict: ✓ MC2 verbatim preserved.** The exact phrase "clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'" appears in P1. Logical extensions are clearly marked as extensions; MC2 core is intact. **VP1 PASS.**

### VP2 — trigger-then-verify probe

**Check:** does P4 FS1 distinguish structural trigger from semantic verification, or do they collapse?

**Actual P4 text:**

> "The fail-safe is **trigger-then-verify**: **Structural trigger** (Step 2 above): operates on input STRUCTURE (conjunctions, clauses, sentences) — fires regardless of subject matter. **Semantic verification** (Step 3 above): at trigger-fire, check whether each clause's content appears in Question or Goal."

The two are explicitly named and structurally separated (Step 2 vs Step 3). Verdict: ✓ distinction is clean. **VP2 PASS.**

### VP3 — coverage honesty probe

**Check:** does P6 honestly enumerate cases NOT caught?

**Actual P6 text (Cases NOT necessarily caught section):**
- Implicit multi-aspect framing without explicit conjunctions
- Aspect axis not in 5 meta-categories
- Paraphrase drift in future edits

Three honest limitations enumerated. No over-claim of completeness. **VP3 PASS.**

### VP4 — triple redundancy probe

**Check:** is the H1 triple-redundancy real?

**Trace through innovation.md P6:**

1. **Mechanism 1 (P1 Observation Targets):** at _branch.md WRITE time. Agent reads bullet → recognizes "and" in user input → lists clauses separately.
2. **Mechanism 2 (P4 FS1):** at Step 3.5 AFTER _branch.md is written. Structural trigger on "and" → semantic verification at trigger-fire.
3. **Mechanism 3 (P3 Source Input):** at DOWNSTREAM-DISCIPLINE-READ time. Raw input preserved; any later discipline can audit.

**Different timings; mechanism-redundant.** Each operates independently in time + mechanism.

**Adversarial probe (Innovation's CONTRARIAN-RETHINK):** "what if P1 misfires due to phrase-vs-clause ambiguity?" → P4 catches structurally regardless of agent's reading interpretation.

**Verdict: triple redundancy is real at the mechanism level.** ✓ VP4 PASS.

### VP5 — FS4 deferral honesty

**Actual P8 text:**

> "Implicit multi-aspect framings without explicit conjunctions can still slip through. Example: a user who writes 'I want to test X' but who implicitly meant 'test X AND observe Y' — the fail-safe sees no conjunction, finds no trigger, doesn't fire."

> "FS4 deferral: Closing the implicit-multi-aspect residual would require user-interactive verification ('does this Question capture everything you meant?') — which adds a runner-interaction step out of scope for this edit."

Residual explicitly named with concrete example; FS4 deferral conditions stated. **VP5 PASS.**

### VP6 — gate threshold probe

**Actual P7 text:**

> "Pass threshold (per LOOP_DIAGNOSE MC2 verbatim): ≥3 of 5 chains where Step 3.5 catches a drop the current spec would have missed → promote to permanent edit."

**MC2 verbatim threshold (from finding line 229):**

> "compare whether audited version catches load-bearing phrase loss in ≥3 of 5 chains where the user input contains multi-part framing"

**Verdict: ✓ ≥3/5 matches MC2 verbatim.** VP6 PASS.

### VP7 — scope honor probe

**Actual P8 text:**

> "Scope: ROOT inquiry creation only. The edit refines `cognitive_harness/MVL+/SKILL.md` Step 3 of 'If NEW (input is a question or description).' It does NOT modify `cognitive_harness/protocols/branch_inquiry.md`, which governs BRANCH inquiry creation. Per LOOP_DIAGNOSE MC2: 'Optionally cognitive_harness/protocols/branch_inquiry.md for branch-new inquiries' — extending to BRANCH is a natural follow-up COULD if this experiment passes its gate."

ROOT-only scope honored; BRANCH flagged as follow-up; MC2 "optionally" citation present. **VP7 PASS.**

---

## Phase 2 — Standard Adversarial Prosecution Probes

### Prosecution 1: "Triple redundancy illusory — all 3 mechanisms depend on the agent reading raw input correctly"

**Defense:** The 3 mechanisms operate at DIFFERENT TIMES (write-time / post-write audit-time / downstream-discipline-read-time) and via DIFFERENT MECHANISMS (content-driven enumeration / structural-trigger / verbatim-preservation). They are mechanism-redundant, not agent-redundant — if the same agent fully ignores all three (total non-compliance), all three fail.

**Counter survives PARTIALLY:** the redundancy mitigates against specific failure modes (forgetting to list multiple targets at write time vs missing the audit step vs failing to consult Source Input downstream) — not against total agent non-compliance. P6 should explicitly acknowledge the distinction.

**Constructive output:** REFINE P6 — add note that "triple redundancy = mechanism-redundancy across timing-points, not agent-redundancy. Total agent non-compliance defeats all three; this is acceptable residual since it would defeat any agent-executed check."

### Prosecution 2: "MC2 verbatim preservation is one-time anti-paraphrase; future edits can re-paraphrase"

**Defense:** True. The verbatim citation in P1 and P4 includes an explicit reference to LOOP_DIAGNOSE MC2's source file. This creates an anchor — future maintainers who re-paraphrase would either:
- Notice the source citation and preserve verbatim
- Drop the citation but still use the language (intermediate drift)
- Re-paraphrase entirely (worst case — undetected drift)

The verbatim+citation pattern resists drift but doesn't prevent it.

**Counter survives PARTIALLY:** anchor preservation depends on future maintainers consulting the source citation.

**Constructive output:** REFINE P8 — add note that "MC2-verbatim language is preserved via explicit citation to LOOP_DIAGNOSE source. Future maintainers who edit MVL+ SKILL.md without consulting the citation source may re-paraphrase, undoing the authorship-bias mitigation. Mitigation: the citation makes the verbatim requirement self-documenting."

### Prosecution 3: "Branch experiment gate is gamed — same agent runs the audit"

**Defense:** True. The agent doing the audit IS the agent that wrote _branch.md (same session). Bias risk on the semantic verification step (where agent decides "did I capture this clause's content?"). But:
- The structural trigger is bias-immune (mechanical scan for conjunctions)
- The semantic verification has specific content checks (clause-by-clause), not aesthetic judgment
- A truly biased agent could either underflag (rationalize that compressed clause "is captured") or overflag (be defensive)

The bias residual exists. FS4 (user-interactive verification) would close it by having the USER confirm. FS4 is currently deferred per SD9.

**Counter survives PARTIALLY:** self-administered audit has a real bias residual; FS4 is the closer; FS4 is deferred.

**Constructive output:** REFINE P7 — add note that "the audit is self-administered by the same agent that wrote _branch.md. Bias residual on the semantic verification step exists. FS4 (user-interactive verification) is the closer for this residual; FS4 is deferred per SD9 unless 5-chain branch experiment shows insufficient catch rate due to self-administered bias."

---

## Phase 3 — Per-Candidate Verdicts

| Candidate | Verdict | Notes |
|---|---|---|
| P1 (Question text) | SURVIVE clean | MC2 verbatim ✓; graceful degradation ✓; Level + Observation Targets explicit |
| P2 (Goal text) | SURVIVE clean | 4 sub-prompts including "What would fail" |
| P3 (Source Input) | SURVIVE clean | Raw input verbatim preservation; downstream-readable |
| P4 (FS1) | SURVIVE clean | MC2 verbatim ✓; trigger-then-verify ✓ |
| P5 (Integrated block) | SURVIVE clean | Assembly preserves existing Scope Check / Layer Commitment / Synthesis Trigger |
| P6 (Coverage analysis) | REFINE | Add mechanism-vs-agent redundancy distinction (from Prosecution 1) |
| P7 (Gate spec) | REFINE | Add self-administered audit residual note; FS4 as closer (from Prosecution 3) |
| P8 (Caveats) | REFINE | Add anchor-preservation-depends-on-citation-consultation note (from Prosecution 2) |

**5 SURVIVE clean + 3 REFINE + 0 KILL.**

---

## Phase 3.5 — Assembly Check

8 pieces (5 SURVIVE clean + 3 REFINE) integrate coherently. Refinements are surface-level honest-acknowledgment additions; they don't restructure the design.

Emergent value: the design's robustness is genuine BUT bounded by 3 specific residuals that the REFINE notes make explicit:
1. Mechanism-redundancy not agent-redundancy (P6 refinement)
2. Anchor-preservation depends on future maintainer consultation (P8 refinement)
3. Self-administered audit has bias residual; FS4 is the closer (P7 refinement)

These three residuals are honest costs of the design, not flaws.

---

## Phase 4 — Coverage + Convergence

| Failure mode | Status |
|---|---|
| Wrong Dimensions | NOT OBSERVED — 10 dimensions extracted from SDs + user methodology |
| Rubber-Stamping | NOT OBSERVED — 3 REFINE verdicts from prosecution probes |
| Nitpicking | NOT OBSERVED — 0 KILLs; REFINEs are targeted improvements |
| Dimension Blindness | NOT OBSERVED — CRITICAL gating on MC2 verbatim + triple redundancy + residual honesty |
| False Convergence | NOT OBSERVED — clean SURVIVE exists; landscape stable; CRITICAL all PASS |
| Evaluation Drift | NOT OBSERVED — first pass; dimensions fixed |
| Self-Reference Collapse | NOT OBSERVED — VP1 explicitly verified MC2 verbatim against the LOOP_DIAGNOSE source artifact (not paraphrased recall); cross-checked each VP probe against innovation.md actual text, not narrative |

Dimension coverage: 10/10 + 3 standard prosecutions. Adversarial strength: STRONG. Landscape stability: STABLE.

---

## Convergence Telemetry

- Dimension coverage: 10/10
- Adversarial strength: STRONG (3 standard prosecutions; each partially survives → 3 REFINE outputs)
- Landscape stability: STABLE
- Clean SURVIVE exists: YES (5 pieces)
- Failure modes observed: NONE

**Overall: PROCEED to CONCLUDE.**

---

## Constructive Outputs for CONCLUDE

3 REFINE items to incorporate:

1. **P6 coverage analysis refinement:** add note "triple redundancy = mechanism-redundancy across timing-points (write-time / post-write audit-time / downstream-read-time), NOT agent-redundancy. Total agent non-compliance defeats all three; this is acceptable residual since it would defeat any agent-executed check."

2. **P7 gate spec refinement:** add note "the audit is self-administered by the same agent that wrote _branch.md. Bias residual on the semantic verification step exists (where agent decides 'did I capture this clause's content?'). FS4 (user-interactive verification) is the closer for this residual; FS4 is deferred per SD9 unless 5-chain branch experiment shows insufficient catch rate due to self-administered bias."

3. **P8 caveats refinement:** add note "MC2-verbatim language is preserved via explicit citation to the LOOP_DIAGNOSE source. Future maintainers who edit MVL+ SKILL.md without consulting the citation source may re-paraphrase, undoing the authorship-bias mitigation. Mitigation: the citation makes the verbatim requirement self-documenting; honest residual is that this depends on future-maintainer-consultation."

These three refinements convert the design from "looks robust" to "robust with three explicit honest residuals." Methodological honesty preserved.
