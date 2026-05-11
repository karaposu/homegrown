# Critique: Branch-Framing vs Sensemaking Corrective Surface

## User Input

devdocs/inquiries/2026-05-08_09-00__branch_framing_vs_sensemaking_corrective_surface/_branch.md

## Phase 0 — Dimensions With Weights

Dimensions extracted from sensemaking output (constraints + foundational principles + LOOP_DIAGNOSE Step 5/6 guardrails):

### 1. Lightweight (compute load) — 25%

**Critical.** No per-output checks; no scans; mechanical fill-in is acceptable. Aggregate ≤ ~15-20 lines.

### 2. Composition vs Replacement — 20%

**Critical.** The two surfaces (branch.md, Sensemaking) must have non-overlapping value to justify composition. Edit 1 alone or Edit 2 alone would lose coverage.

### 3. Over-Firing Risk Mitigation — 15%

**Critical.** Edit 1 must structurally bound over-firing risk via existing template flow; not require new gating mechanisms.

### 4. Generic / Meta-Discipline Framing — 10%

**Critical.** Edit 1 wording targets generic sample-vs-population pattern; not project-specific.

### 5. Disposition Update Coherence — 10%

The prior 08-15 finding's WX→Edit 1 promotion + W1→Edit 2 retention is logically coherent and structurally justified.

### 6. Single Canonical Home — 5%

Each edit at one canonical home; no multi-surface duplication.

### 7. /MVL Propagation Justification — 5%

The co-recommended P-1 follow-up (propagate Edit 1 to /MVL) is justified by parallel template structure.

### 8. Self-Reference Collapse Defense — 5%

This finding evaluates its own framing surface; external grounding via prior 08-15 LOOP_DIAGNOSE evidence + corpus chains.

### 9. User Hypothesis Honored — 5%

User's leverage hypothesis (branch.md primary) honored at intent level; exclusivity hypothesis corrected via composition.

**Critical dimensions (must pass for SURVIVE):** Lightweight, Composition vs Replacement, Over-Firing Risk Mitigation, Generic Framing.

## Phase 1 — Fitness Landscape

### Viable Region

Combined-fix proposals that pass all 4 critical dimensions + coherent disposition update + bounded /MVL propagation + Self-Reference Collapse defense + user-hypothesis honored.

### Dead Region

Proposals that:
- Replace W1 with Edit 1 alone (loses defense-in-depth; misses Sensemaking-only failure case).
- Add per-output checklists at branch.md.
- Use new Scope Check sub-section instead of inline.
- Over-fire on every legitimate user-narrow-scope request.
- Project-specific wording in Edit 1.
- Multi-surface duplication.
- Apply Edit 1 to /MVL without verification of parallel structure.

### Boundary Region

- Edit 1's recognition cue ("Question or Goal references a finite evidence sample") is judgment-dependent. Boundary because sample is observable from the wording, but borderline cases require runner judgment.
- /MVL propagation (P-1) is co-recommended but user-confirmable. Boundary because it's not strictly needed for the answer (the user named MVL+) but parallel structure supports it.
- Disposition update relative to prior 08-15: REFINES not SUPERSEDES. Boundary because the relationship label has corpus-process implications.

### Unexplored Region

- Whether other branch.md sections (Question, Goal) should also have scope-test sub-checks. Out of scope; only Scope Check section is currently the test surface.
- Whether the BRANCH_INQUIRY protocol (`homegrown/protocols/branch_inquiry.md`) used for child branches also needs Edit 1 propagation. Possible follow-up; not part of this finding.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (E1 + E2 + P-1 + C-1 + D-1)

**Prosecution (10 objections):**

1. **Edit 1's recognition cue ("references a finite evidence sample") is judgment-dependent.** Same risk that doomed the prior 06-30 narrow scope.

2. **The 3 illustrative examples in Edit 1 ("the N observations", "this corpus of M chains", "these specific instances") are LOOP_DIAGNOSE-corpus-flavored.** Not generic enough for non-LOOP_DIAGNOSE inquiries.

3. **Edit 1 expands the Scope Check from one paragraph to two** — drift toward longer.

4. **Defense-in-depth (Edit 1 + Edit 2) is over-engineered when one might suffice.** If Edit 1 catches reliably at frame-formation, Edit 2 is dead weight.

5. **The disposition update (WX promoted, W1 demoted) within just-completed prior 08-15 finding is fast methodology churn.** Two findings within hours; structural instability signal.

6. **/MVL propagation (P-1) is scope creep.** The user explicitly named MVL+; classic /MVL is a separate concern.

7. **The "user-presentation flow at line 87" mitigation is procedural but not structural** — it depends on the runner remembering to invoke it. Same kind of judgment-dependence W1 has.

8. **No verification mechanism.** If Edit 1 is ignored or misapplied, there's no detection.

9. **3 illustrative examples in Edit 1 set a too-narrow recognition cue** — runner might pattern-match only to those exact phrasings, missing other finite-sample references.

10. **Sample-vs-population is statistical jargon** — runners may not recognize it as relevant to non-statistical inquiries (e.g., software architecture, business strategy).

**Defense (12 rebuttals):**

1. **Edit 1's judgment-dependence is reduced relative to W1's.** W1 fires when the runner recognizes a load-bearing concept (deep judgment). Edit 1 fires when the Question or Goal text contains a finite-evidence reference (surface-level recognition). The 3 illustrative example patterns ground the recognition. Recognition cost is meaningfully lower than W1's.

2. **The 3 illustrative examples are MVL+-corpus-flavored because that's the corpus the runner is most likely to encounter.** The wording's GENERIC PRINCIPLE ("if the Question or Goal references a finite evidence sample") is project-agnostic; the examples are illustrative anchors. This matches the precedent from the prior `2026-05-08_07-15` finding's generic non-ambiguity convention with 5 illustrative type examples.

3. **Two-paragraph Scope Check (sufficiency + sample-vs-population) is structurally analogous** to the existing Question + Goal split (two distinct concerns at one section). The expansion is bounded; ~6 lines added.

4. **Defense-in-depth is the deliberate composition choice the user has supported across the corpus** (Component A + W1 in earlier chains; Component A + Edit 2 in 07-15). Edit 1 + Edit 2 covers both upstream and downstream surfaces; non-overlapping cases. Per LOOP_DIAGNOSE Step 5, redundant catches at multiple surfaces are appropriate when each catch is lightweight.

5. **The disposition update is corpus-precedented** — chain 6 had two cross-chain promotion events in a single chain (M6-refinement-S2 + TP3); this finding has one disposition update within hours of the prior 08-15. Both reflect rapid corpus learning, not instability. The prior 08-15's WX deferral was conservative-but-suboptimal; the new analysis surfaces a stronger argument for promotion. Updating dispositions on stronger evidence is the corpus's mechanism for self-correction.

6. **/MVL propagation is justified by parallel template structure** (verified: lines 79-80 of /MVL/SKILL.md identical to lines 84-87 of MVL+/SKILL.md). The user named MVL+ but the same wording applies cleanly to /MVL. Treating it as CO-RECOMMENDED (user-confirmable) rather than mandatory respects the user's scope while flagging the natural extension.

7. **The user-presentation flow mitigation is structural** — it's a written procedural rule in MVL+/SKILL.md line 87. The runner is required to invoke it when the Scope Check flags a gap. This is the same kind of "structural rule the runner follows" that defines the entire methodology library; if we don't trust it for sample-vs-population mitigation, we don't trust it for any check. The structural-vs-judgment distinction here is: the rule's existence + invocation is structural; the runner's recognition of when it applies is judgment-dependent. Edit 1's mechanical fill-in surfaces the question; the user-presentation flow handles the over-firing case.

8. **No verification mechanism is intentional.** The user's constraint ("we don't want to overload AI with such work") forbids check-time mechanisms. Defense-in-depth via Edit 2 is the structural answer to "what if Edit 1 misses?" — not a per-output check.

9. **3 examples ground without locking.** Compared to pure principle (which would over-rely on subjective recognition), 3 illustrative examples provide concrete cues. Compared to a long enumeration (e.g., 10 examples), 3 examples balance grounding with brevity. The runner can pattern-match to the 3 examples + recognize generalizations (the principle is the rule, examples are anchors).

10. **"Sample-vs-population" is the precise statistical term, but the wording immediately follows it with a plain-language gloss** ("the inquiry's target is to address THAT SAMPLE or the UNDERLYING PROBLEM CLASS"). Plain language is provided. Same precedent as the prior 07-15 finding's wording style.

11. **All 4 critical dimensions HIGH:** Lightweight (~6 lines at MVL+/SKILL.md + ~70 words at sensemaking.md = ~10-15 lines aggregate); Composition (Edit 1 catches frame-formation cases; Edit 2 catches Sensemaking-only cases; non-overlapping value); Over-Firing Risk Mitigation (existing user-presentation flow at MVL+/SKILL.md line 87); Generic Framing (sample-vs-population is generic; examples illustrative).

12. **The user's hypothesis is honored at intent level** — branch.md is PROMOTED to PRIMARY, validating the leverage instinct. The exclusivity correction is structurally grounded (different cases at different surfaces) and respects the user's prior composition discipline.

**Collision:**

Strongest prosecution: objection 4 (defense-in-depth over-engineered) and objection 5 (fast methodology churn). Strongest defense: composition is corpus-precedented; disposition update reflects stronger evidence. Defense survives both.

**Verification against critical dimensions:**

| Critical Dimension | Score | Rationale |
|---|---|---|
| Lightweight | HIGH | ~6 lines at MVL+ + ~70 words at sensemaking = ~10-15 lines aggregate; mechanical fill-in only |
| Composition vs Replacement | HIGH | Edit 1 catches frame-formation cases; Edit 2 catches Sensemaking-only cases; non-overlapping value |
| Over-Firing Risk Mitigation | HIGH | Existing user-presentation flow at MVL+/SKILL.md line 87 structurally bounds over-firing |
| Generic Framing | HIGH | Sample-vs-population is generic statistical/epistemic concept; examples illustrative not prescriptive |

**Verification against secondary dimensions:**

| Dimension | Score |
|---|---|
| Disposition Update Coherence | HIGH (WX promoted on stronger evidence; W1 demoted to defense-in-depth; relationship REFINES not SUPERSEDES) |
| Single Canonical Home | HIGH (Edit 1 at MVL+/SKILL.md template; Edit 2 at sensemaking.md M6 paragraph; no duplication) |
| /MVL Propagation Justification | MEDIUM-HIGH (parallel structure verified; user-confirmable rather than mandatory) |
| Self-Reference Collapse Defense | HIGH (external grounding via prior 08-15 LOOP_DIAGNOSE evidence + 06-30 cascade; this finding's branch even includes a sample-vs-population check section, walking its own talk) |
| User Hypothesis Honored | HIGH (leverage validated; exclusivity corrected via composition) |

**Verdict: SURVIVE.**

Constructive output:

1. Apply Edit 1 (verbatim wording in Innovation's Phase 3) at `homegrown/MVL+/SKILL.md` Scope Check section (lines 84-87).
2. Apply Edit 2 (verbatim wording from prior 08-15 finding's section 4) at `homegrown/sense-making/references/sensemaking.md` M6 application paragraph.
3. CO-RECOMMENDED: apply Edit 1's identical wording at `homegrown/MVL/SKILL.md` lines 79-80 (parallel /MVL Scope Check section).
4. DOCUMENT in this finding: composition rationale; prior 08-15 disposition update; /MVL propagation justification; Self-Reference Collapse defense.

Risk class: LOW. Evaluation gate: in next 3 MVL+ root inquiries that reference finite evidence in their Question or Goal, the Scope Check section explicitly states sample-vs-population target. In next 3 MVL+ runs producing Sensemaking output with "what the problem IS" load-bearing concepts, the Phase 3 ambiguity-collapse pair tests sample-vs-population.

If neither Edit 1 nor Edit 2 fires effectively in the next 3 applicable runs, escalate (e.g., re-examine Edit 1's wording for over-narrow examples; OR promote prior 08-15's W2 from DEFERRED-conditional to ACTIONABLE).

## Phase 3.5 — Assembly Check

The combined fix's components:

- E1 + E2 form the upstream + downstream catch composition.
- C-1 explains the composition rationale.
- D-1 cleanly updates prior 08-15 dispositions without superseding.
- P-1 extends leverage to /MVL classic via verified parallel structure.

**Self-applying check:** this Critique evaluates its own finding's framing surface. Self-Reference Collapse defended via:
- Empirical: prior 08-15 LOOP_DIAGNOSE finding (which itself externally grounded the 06-30 cascade); 06-30 + 07-15 branch comparison.
- Cross-discipline: dimensions from sensemaking output (LOOP_DIAGNOSE Step 5/6 + foundational principles), not from td-critique.md itself.
- Adversarial: 10 prosecution objections including over-engineering, fast churn, project-specific examples, jargon concerns; 12 defense rebuttals.
- This finding's `_branch.md` itself includes a Sample-vs-Population check paragraph (per the rule it proposes) — walks its own talk.

**Assembly verdict: SURVIVE.**

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix (E1 + E2 + P-1 + C-1 + D-1).** Edit 1 PRIMARY at MVL+/SKILL.md branch.md template; Edit 2 SECONDARY at sensemaking.md (W1 retained); P-1 co-recommended /MVL propagation; composition documented; prior 08-15 dispositions updated.

2. **REJECT: Edit 1 alone (no Edit 2).** Loses defense-in-depth; misses Sensemaking-only failure cases.

3. **REJECT: Edit 2 alone (no Edit 1).** Misses upstream catch; W1 has to fight frame-momentum mid-cascade (the prior 08-15's choice; updated here on stronger evidence).

4. **REJECT: New Scope Check sub-section instead of inline.** Heavier; structurally inconsistent with existing template parsimony.

5. **REJECT: Pure principle without illustrative examples.** Same failure mode that affected prior 06-30 narrow scope.

6. **DOCUMENT (in finding):** composition rationale; prior 08-15 disposition update with REFINES relationship; /MVL propagation justification; Self-Reference Collapse defense; over-firing mitigation explanation.

## Coverage Map

Evaluated:
- Combined assembly as a unit.
- Per-edit verification: E1 wording + placement; E2 reaffirmation; P-1 verification (parallel structure confirmed).
- Per-dimension verification: 4 critical + 5 secondary all HIGH or appropriate.
- Disposition update coherence: REFINES not SUPERSEDES.
- Self-Reference Collapse: 3-pronged defense + walks-its-own-talk.

Unexplored but not blocking:
- BRANCH_INQUIRY protocol propagation. Out of scope; possible follow-up.
- Other branch.md sections (Question, Goal) scope-test extensions. Out of scope.

Coverage: sufficient.

## Signal

**TERMINATE with ranked survivor:**

1. SURVIVE: Combined fix.
2. REJECT: Edit 1 alone; Edit 2 alone; new sub-section; pure principle.
3. CO-RECOMMENDED: P-1 /MVL propagation.
4. DOCUMENT: composition + disposition update + Self-Reference Collapse defense.

The user's question is answered. The branch.md framing surface IS the higher-leverage primary corrective (user's leverage hypothesis validated). But the W1 Sensemaking-level catch stays as defense-in-depth (composition discipline preserved; user's exclusivity hypothesis corrected). Aggregate cost ~10-15 lines across 2 files (~16-21 if /MVL propagation also applied).

## Convergence Telemetry

- **Dimension coverage:** complete (9 dimensions; 4 critical + 5 secondary).
- **Adversarial strength:** STRONG (10 prosecution objections including over-engineering, fast methodology churn, project-specific examples, statistical jargon; 12 defense rebuttals; strongest objections survived).
- **Landscape stability:** STABLE.
- **Clean SURVIVE:** YES (all 4 critical dimensions HIGH).
- **Failure modes observed:** NONE.
  - Wrong Dimensions: NO.
  - Rubber-Stamping: NO.
  - Nitpicking: NO.
  - Dimension Blindness: NO.
  - False Convergence: NO.
  - Evaluation Drift: NO.
  - Self-Reference Collapse: NO (3-pronged external grounding + walks-its-own-talk).
- **Overall: PROCEED.**
