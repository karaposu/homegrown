# Sensemaking: Structural Decomposition of MVL+ Branch Creation's Question Field

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/_branch.md`

Plus exploration.md (5 candidate enumerations + 4 fail-safe options + meta-recursion residual + bloat trade-off).

---

## SV1 — Baseline Understanding

Commit which candidate enumeration to use, which fail-safe(s), how graceful-degradation works, and the branch-experiment gate. The deep risk per user's methodology: my meta-category enumeration cannot be provably complete. The fail-safe must be load-bearing precisely because the enumeration cannot guarantee coverage.

---

## Phase 1 — Anchor Extraction

### Constraints

- C1: Output must be paste-ready instruction text for `cognitive_harness/MVL+/SKILL.md` Step 3
- C2: H1 failure case (dropped conjunction-joined observation target) MUST be caught by at least one mechanism
- C3: Per LOOP_DIAGNOSE Step 5: branch experiment with evaluation gate; not a permanent source edit
- C4: Acknowledge meta-recursion residual explicitly
- C5: Graceful degradation — simple inputs shouldn't pay overhead

### Key Insights

- KI1: Clause-preservation rule (Candidate D / FS1) catches structural pattern (conjunctions, multi-clause); doesn't depend on knowing content axes — STRUCTURALLY ROBUST
- KI2: Meta-category enumeration (Candidate A) gives guided thinking; helps even for non-conjunction-joined multi-target inputs
- KI3: Both together (Candidate E) is robust; cost is bloat
- KI4: Source Input preservation (FS3) provides downstream-readable audit trail; cheap to add
- KI5: User-interactive fail-safe (FS4) shortcircuits meta-recursion but adds an interaction step the runner currently doesn't have

### Structural Points

- SP1: Coverage-vs-bloat trade-off requires explicit decision
- SP2: Meta-recursion residual cannot be eliminated; can only be mitigated via structural fail-safe (clause-preservation) and audit trail (Source Input preservation)
- SP3: Graceful degradation needs explicit "if input is simple, the one-sentence form satisfies all 5 categories implicitly" instruction
- SP4: Goal field instruction may or may not need decomposition — separate question

### Foundational Principles

- FP1: Structural fail-safe (catches conjunctions) is load-bearing; content-fail-safe (meta-categories) is supplementary
- FP2: Branch-experiment guarding per LOOP_DIAGNOSE Step 5 — one-chain evidence is thin
- FP3: Honest acknowledgment of meta-recursion residual is required (it's the user's own warning)

### Meaning-Nodes

- MN1: "Full coverage" = catches H1 + plausible variants of H1 (other conjunction-joined drops) + most other-axis question-content drops
- MN2: "Fail-safe" = mechanism that catches what the enumeration misses
- MN3: "Branch experiment" = parallel SKILL.md variant; evaluation gate before permanence
- MN4: "Graceful degradation" = simple inputs don't pay enumeration overhead

---

## Phase 2 — Perspective Checking

### Technical / Logical

Candidate E (Hybrid) gives best coverage but is most bloat. Candidate A + FS1 is balanced. Pure D is structurally simplest. Decision criterion: which is most likely to catch H1 + similar without bloating simple inquiries?

### Risk / Failure

- R-RISK-1: Bloat — adding enumeration to every _branch.md slows simple inquiries. Mitigation: graceful degradation policy.
- R-RISK-2: Meta-recursion residual — my enumeration could miss something. Mitigation: structural fail-safe (FS1) doesn't depend on enumeration completeness.
- R-RISK-3: Source-edit overreach — one chain is thin evidence. Mitigation: branch-experiment gate.
- R-RISK-4: User-interactive verification slows runner. Mitigation: skip FS4; rely on FS1 + FS3.

### Definitional / Frame-exit Completeness

Multi-value terms: "coverage," "fail-safe," "meta-category."

- "Coverage": referents = coverage-of-H1 / coverage-of-other-axis-drops / coverage-of-meta-recursion-residual. Inquiry's frame: all three; FS1 catches the first two structurally; FS3 (Source Input preservation) catches the third via downstream-readable audit.
- "Fail-safe": referents = automated check / interactive check / audit trail. Inquiry's frame: automated (FS1) + audit (FS3); skip interactive.
- "Meta-category": referents = content-axis (subject/action/level/...) / structural-axis (clause-preservation / conjunction-detection). Inquiry's frame: both; A gives content; D/FS1 gives structural.

### Phase / Calibration-State

MVL+ runner is in deployed state; changes affect all future inquiries. Branch-experiment guard appropriate.

---

## SV3 — Multi-Perspective Understanding

The optimal design appears to be:

1. **Meta-category enumeration: Candidate A** (5 content-axis categories). Provides guided thinking. Not Candidate C because Constraints overlaps with existing Scope Check section.

2. **Structural fail-safe: FS1** (clause-preservation diff). Catches H1's structural pattern; doesn't depend on enumeration completeness.

3. **Source Input preservation: FS3**. Add to _branch.md template as new section. Provides audit trail for downstream readers + diagnostic-inquiry evidence in future.

4. **Graceful degradation**: enumeration is a CHECK not a sub-field requirement. Simple inputs satisfy implicitly via one-sentence form.

5. **Goal field**: decompose lightly (4 sub-prompts: criterion / use case / desired outcome / what would fail). Decomposition is cheap here; H1's failure wasn't at Goal but Goal could fail similarly.

6. **Branch-experiment evaluation gate**: 5 NEW inquiries; ≥3 of 5 catches of dropped load-bearing phrase = pass.

---

## Phase 3 — Ambiguity Collapse

### A1: Which candidate enumeration?

**Counter:** Pure Candidate D (clause-preservation alone) is simplest and structurally robust.

**Why counter doesn't dominate:** Clause-preservation catches conjunction-joined drops but doesn't guide the agent to think about multi-level (level conflation), multi-target (observation targets), or shape (deliverable) considerations BEFORE writing the question. Meta-categories prompt structured thinking; clause-preservation only catches what was written. Both are needed.

**Resolution:** Commit Candidate A (5 content-axis categories) + FS1 (clause-preservation) = Hybrid. Cost is moderate; coverage is robust.

**Confidence:** HIGH.

### A2: Goal field — decompose or leave?

**Counter:** Goal field wasn't implicated in H1; leave alone.

**Why counter doesn't dominate:** Goal CAN fail similarly (drop a criterion, drop a use case, drop a what-would-fail spec). Lightweight 4-sub-prompt decomposition is cheap. The marginal cost is small; the upside is the field becomes more useful for downstream stages.

**Resolution:** Commit lightweight Goal decomposition (4 sub-prompts).

**Confidence:** MEDIUM-HIGH (not directly implicated in H1; reasonable extension).

### A3: Source Input preservation in _branch.md?

**Counter:** Source Input is currently only in finding.md (via CONCLUDE); adding to _branch.md duplicates.

**Why counter doesn't dominate:** Having Source Input in _branch.md (at creation, not just at conclusion) means EVERY downstream discipline reads the raw input directly. Currently they read _branch.md's Question + Goal (transcribed); the transcription is the failure surface. Source Input at _branch.md eliminates this entire failure surface for downstream stages — they can audit anytime.

**Resolution:** Commit Source Input section in _branch.md.

**Confidence:** HIGH.

### A4: Graceful degradation policy?

**Counter:** Always require explicit sub-field listing — most robust.

**Why counter doesn't dominate:** Bloat trade-off (R-RISK-1). Simple inputs (single subject + single action + single target) don't benefit from explicit enumeration. Forcing enumeration on simple inputs reduces signal-to-noise.

**Resolution:** Meta-categories are a CHECK, not required sub-fields. One-sentence form is acceptable IF the agent can confirm all 5 categories are implicitly captured. Encourage explicit listing when input has any conjunction / multi-clause pattern.

**Confidence:** HIGH.

### A5: Branch-experiment gate threshold?

**Counter:** 5 inquiries is arbitrary; could be 3 or 10.

**Why counter doesn't dominate:** Per LOOP_DIAGNOSE MC1 monitoring proposal: 5-10 future chains. 5 is the lower bound — minimum to gather statistical signal; 10 would be more robust. Trade-off: 5 is faster gate; 10 is more confidence.

**Resolution:** Commit 5-inquiry gate; threshold = ≥3 of 5 chains where input contains multi-part framing must be caught by audit.

**Confidence:** MEDIUM (one-bound calibration; could refine after observing).

### Load-bearing concept tests

**LBT1 — "Full coverage":** is the concept operationally distinguishable from "complete enumeration"?

- Counter: "full coverage" could mean perfect enumeration (impossible) OR sufficient coverage (defined by failure-case catching).
- Why counter doesn't dominate: per FP1 — full coverage operationalized as catching H1 + similar STRUCTURAL patterns via FS1, not as enumerating every content axis. The fail-safe makes "full coverage" achievable structurally.
- PASS.

**LBT2 — "Meta-category":** is this distinguishable from "list of sub-fields"?

- Counter: meta-category and sub-field overlap.
- Why counter doesn't dominate: meta-category is a CHECK that the agent verifies the question covers; sub-field would be a required listing. Graceful-degradation policy makes them different — one-sentence form satisfies meta-categories implicitly without listing sub-fields.
- PASS.

---

## SV4 — Clarified Understanding

The deliverable shape is now stable:

- 5 meta-categories for Question (Subject / Action / Level / Observation Targets / Deliverable Shape) as a CHECK
- 4 sub-prompts for Goal (Criterion / Use Case / Desired Outcome / What Would Fail)
- FS1 clause-preservation fail-safe after writing _branch.md
- FS3 Source Input section in _branch.md preserving raw user input
- Graceful degradation: enumeration is implicit-satisfiable for simple inputs
- Branch-experiment gate: 5 NEW inquiries; ≥3 of 5 catches = pass
- Meta-recursion residual: acknowledged; FS1 + FS3 are load-bearing precisely because enumeration can't be proven complete

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- F1: Candidate A (5 content-axis meta-categories)
- F2: FS1 clause-preservation fail-safe
- F3: FS3 Source Input preservation in _branch.md
- F4: Goal field lightweight 4-sub-prompt decomposition
- F5: Graceful degradation policy (enumeration as check, not required sub-field)
- F6: Branch-experiment gate (5 NEW; ≥3 of 5)
- F7: Explicit meta-recursion-residual acknowledgment

### Eliminated

- Pure Candidate D (loses guided-thinking benefit)
- Candidate C (Constraints overlaps Scope Check; redundant)
- FS4 user-interactive (adds runner-interaction step out of scope)
- Always-explicit-sub-field-listing (bloat)
- Permanent direct source edit (per Step 5 guardrail)

---

## SV5 — Constrained Understanding

Innovation has constrained search space:
- Write paste-ready Question instruction with 5 categories + FS1 + graceful degradation
- Write paste-ready Goal instruction with 4 sub-prompts
- Write Source Input section template
- Write branch-experiment evaluation gate spec

---

## Phase 5 — Conceptual Stabilization

### Integrated model

The proposed edit converts the Question + Goal field instructions from vague single-prompts to structured enumerations WITH a structural fail-safe (clause-preservation) that catches what the enumeration might miss. The Source Input preservation in _branch.md eliminates the transcription failure surface for downstream disciplines (they can read raw input directly). Graceful degradation prevents bloat for simple inquiries. Branch-experiment gate respects LOOP_DIAGNOSE Step 5 guardrail.

### Accommodation trigger

No model-misfit signal. Settles cleanly.

---

## SV6 — Stabilized Model

### Committed Structural Decisions (SDs)

| SD | Decision |
|---|---|
| SD1 | Question field: 5 meta-categories (Subject / Action / Level / Observation Targets / Deliverable Shape) as CHECK |
| SD2 | Goal field: 4 sub-prompts (Criterion / Use Case / Desired Outcome / What Would Fail) |
| SD3 | FS1 clause-preservation fail-safe — automated check after writing _branch.md |
| SD4 | FS3 Source Input preservation — new section in _branch.md template |
| SD5 | Graceful degradation — enumeration is implicit-satisfiable for simple inputs |
| SD6 | Branch-experiment gate — 5 NEW inquiries; ≥3 of 5 catches = pass |
| SD7 | Meta-recursion residual acknowledged in finding's caveats |
| SD8 | The Observation Targets category MUST include the language: "If MULTIPLE, list each. If user's input joined targets with 'and' / 'both X and Y' / 'in addition to' / 'as well as' / 'plus' — PRESERVE ALL of them as separate items, do not compress into one clause." This is the H1-specific language. |
| SD9 | The FS1 fail-safe MUST scan raw input for conjunctions and clause-joining commas, then verify each clause's content appears in Question OR Goal OR Source Input |
| SD10 | The Level category MUST include examples: "component / system / loop / discipline / runner / cross-cutting" — H1's loop-vs-discipline conflation case |

---

## Failure-mode check

| Failure | Status |
|---|---|
| Status Quo Bias | NOT OBSERVED — explicitly chose to change current spec |
| Premature Stabilization | NOT OBSERVED — 5 ambiguities tested |
| Anchor Dominance | NOT OBSERVED |
| Perspective Blindness | NOT OBSERVED — Frame-exit fired on 3 terms |
| Clean Resolution Trap | NOT OBSERVED — all counters structurally tested |
| Self-Reference Blindness | NOT OBSERVED — meta-recursion residual explicitly acknowledged; FS1 + FS3 load-bearing |

---

## Verdict

**PROCEED to Decomposition with 10 SDs.**
