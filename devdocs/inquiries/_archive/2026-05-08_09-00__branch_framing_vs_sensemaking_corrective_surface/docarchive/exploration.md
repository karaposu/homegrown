# Exploration: Branch-Framing vs Sensemaking Corrective Surface

## User Input

devdocs/inquiries/2026-05-08_09-00__branch_framing_vs_sensemaking_corrective_surface/_branch.md

## Mode and Entry Point

- **Mode:** Possibility exploration. Conceptual design space — which corrective surface gives the best leverage against sample-vs-population framing failures?
- **Entry point:** Signal-first. The user named the alternative (branch.md framing fix instead of mid-cascade Sensemaking fix) and the structural reason (frame-momentum is hard to break mid-cascade; preventing the wrong frame is cleaner).

## Territory Overview

Three regions:

- **Region A — Branch.md framing surface.** What does the existing `_branch.md` template look like? Where would a sample-vs-population check fit? What's the over-firing risk profile?
- **Region B — Sensemaking M6 application surface (W1's surface).** The prior `2026-05-08_08-15` LOOP_DIAGNOSE finding's W1 candidate. Already characterized.
- **Region C — Composed.** Both surfaces; redundant coverage; aggregate cost.

## Inventory

### Region A — Current branch.md template + observed branch quality

**Current template** (from `homegrown/MVL+/SKILL.md` lines 76-87):

```markdown
# Branch: [name]
## Question
[the question, stated clearly in one sentence]
## Goal
[what would a good answer look like? what would the user be able to DO with the answer?]
## Scope Check
[compare the question's scope to the goal's requirements. Does the question, if answered perfectly, cover everything the goal asks for? If YES: "Question covers goal." If NO: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."]
```

**Observed Scope Check quality across the corpus:**

| Branch | Scope Check content | Caught the framing problem? |
|---|---|---|
| 06-30 (narrow, failed) | *"Question covers goal. The question asks for a lightweight discipline-level alternative to Component B that complements Component A..."* | NO — framed narrowly without flagging |
| 07-15 (broad, succeeded) | *"Question covers goal. The question asks for the broader generic version of the discipline-level convention..."* | N/A — already broad because user's correction instructed broad scope |
| 08-15 (LOOP_DIAGNOSE) | *"Question covers goal. The question asks for comparative diagnosis..."* | N/A — diagnostic chain, not a fix-design chain |

**Key observation:** the current Scope Check is a SUFFICIENCY check (does Q cover G?), not a SAMPLE-VS-POPULATION check (is G naming the full problem class or just a sample?). The 06-30 Scope Check passed sufficiency ("Q covers G") because the narrow Q did cover the narrow G — both were narrowly framed in lock-step. The check didn't surface the deeper question: *is G itself naming the full problem or just a sample?*

This is the structural surface for an intervention.

### Region B — Sensemaking M6 application surface (W1)

Already characterized in the prior `2026-05-08_08-15` LOOP_DIAGNOSE finding. W1 extends M6's recognition cue at `homegrown/sense-making/references/sensemaking.md` with a sample-vs-population test for load-bearing concepts that name "what the problem IS." ~70 words; one paragraph; read once at discipline startup; informs writing.

Properties:
- **Mid-cascade catch:** fires after Exploration has already characterized the failure shape narrowly (Region C-cascade-link).
- **Frame-momentum to fight:** by the time Sensemaking runs, narrow consensus is already in place from upstream + solve-mode momentum from goal.
- **Per-discipline-execution overhead:** small but non-zero — read once when Sensemaking starts, applied implicitly during Phase 1/Phase 3.
- **Judgment-dependent:** the recognition cue ("when a load-bearing concept names 'what the problem IS'") requires interpretation.

### Region C — Composed

Both surfaces. Branch.md catches at frame-formation; Sensemaking catches residuals when the branch was framed correctly but a load-bearing concept's stabilization derives from finite evidence regardless.

Aggregate cost: ~3-5 lines at branch.md template + ~70 words at sensemaking.md = ~75-85 words across 2 files.

## Inventory of Possible Branch.md Interventions

### Approach 1 — Extend Scope Check with sample-vs-population sub-check

Add a sub-check to the existing Scope Check section:

> **Sample-vs-population check:** if the goal references a finite evidence sample (e.g., "the 10 observed failures from inquiry X", "the corpus chains 1-7", "this set of N instances"), explicitly state whether the goal is to address that specific sample OR the underlying problem class the sample is drawn from. Default: address the underlying problem class unless the user explicitly scopes to the sample. If both readings are plausible, present both to the user before proceeding (mirroring the existing scope-widening flow at line 87 of MVL+/SKILL.md).

Cost: ~5-7 lines added to the branch.md template. Mechanical — the runner has to fill in this sub-check when writing the branch.

**Strengths:**
- One-time per inquiry; no per-output overhead.
- Frame-formation-time intervention; prevents wrong frame from forming.
- Mechanical (template fill-in); harder to skip than judgment-based recognition.
- Leverages existing user-presentation flow (Scope Check already presents alternative framings).

**Weaknesses:**
- Recognition cue ("does the goal reference a finite evidence sample?") is still judgment-dependent at the runner-template-fill-in step. If the runner doesn't recognize the goal as sample-bounded, the check doesn't fire.
- Over-firing risk: legitimate user-narrow-scope requests (e.g., "fix THIS specific instance") would trigger the check unnecessarily. Mitigated by the existing user-presentation flow, but adds friction.
- Branch is partly user-prompt; runner is translating; if runner is sample-bounded in their thinking, branch will be too.

### Approach 2 — Add a separate "Frame-Sensitivity Check" section to branch.md

A new section between Goal and Scope Check that explicitly tests for ambiguous wording in the Question or Goal that admits multiple readings.

Cost: ~10-15 lines added; new section.

**Strengths:** explicit; structurally salient.

**Weaknesses:** heavy. Adds new section; user-template-fill-in cognitive load. Over-firing risk high (every problem statement has SOME ambiguity).

**REJECT** as too heavy.

### Approach 3 — Inheritance Hand-Off section

A new section listing what specific semantics the branch transfers to downstream disciplines, with a checkbox per discipline (Exploration / Sensemaking / Decomposition / Innovation / Critique).

Cost: ~10-15 lines.

**Strengths:** explicit hand-off contract.

**Weaknesses:** very heavy. Per-discipline cognitive load at branch creation. Almost impossible to fill in without knowing how each discipline will interpret.

**REJECT** as too heavy.

### Approach 4 — Ambiguity-flagging only (lightweight)

Just one sentence appended to the Scope Check section: *"Flag any wording in the Question or Goal that admits multiple plausible readings; for each flagged phrase, state which reading the runner is choosing and why."*

Cost: ~2 lines.

**Strengths:** minimal; mechanical.

**Weaknesses:** broad recognition cue ("admits multiple plausible readings"); runner judgment required. Over-fires on every problem statement (most natural-language has multiple plausible readings).

**REJECT** as over-firing risk too high.

### Approach 5 — No branch.md intervention; rely on W1 alone

W1 at Sensemaking is the only intervention. Branch.md template stays as-is.

**Strengths:** zero added structure.

**Weaknesses:** misses the upstream catch; W1 has to fight frame-momentum.

**Defensible but suboptimal.**

## Signal Log

### Signal 1 — DENSITY at "frame-formation is upstream of frame-checking"

The user's hypothesis is structurally sound: prevention at frame-formation (branch.md) is structurally upstream of correction at frame-checking (Sensemaking). When both interventions are lightweight, prevention is cleaner because it eliminates the cascade root rather than catching mid-cascade.

### Signal 2 — TENSION: branch.md is partly user-prompt

The branch's content reflects the user's prompt translated by the runner. Patching the runner's template to ask sample-vs-population is fine, but the runner is also the one who identifies whether the goal references a finite sample. If the runner is sample-bounded in their thinking (the failure mode), they may write a sample-bounded branch even with the extended check.

This is the same recognition-cue limit that affects W1. Both interventions depend on the runner recognizing the pattern. Difference: branch.md surfaces it as a TEMPLATE FILL-IN (mechanical, harder to skip); W1 surfaces it as a DISCIPLINE RULE (judgment-dependent, easier to overlook in practice).

The mechanical-vs-judgment distinction tips the structural advantage toward branch.md. Templates force the runner to fill in each section; the act of filling in surfaces the question. Discipline rules apply when the runner recognizes applicability — which is what failed in 06-30.

### Signal 3 — DENSITY at composability

Branch.md catch + W1 catch = redundant coverage. Different cases:
- **Branch.md catches:** when the goal explicitly references a finite evidence sample.
- **W1 catches:** when a load-bearing concept's stabilization derives from finite evidence regardless of how the branch was framed.

These are correlated but not identical. Composition gives defense-in-depth at marginal added cost (W1 is already proposed; branch.md adds ~5-7 lines).

### Signal 4 — ABSENCE: existing Scope Check is sufficiency-only

The current Scope Check tests *"does Q cover G?"* — sufficiency. It doesn't test *"is G itself the full problem or a sample?"* — scope adequacy at the goal layer. Extending the existing section is a clean structural fit.

### Signal 5 — Empirical comparison: 06-30 vs 07-15 branches

The 06-30 (narrow, failed) and 07-15 (broad, succeeded) branches both have Scope Check sections that say *"Question covers goal."* Neither flagged a sample-vs-population concern. The 06-30 branch SHOULD have flagged ("most common ambiguity shape" admits sample-vs-population reading); the 07-15 branch had explicit user instruction so the wide framing came from the user, not from the branch's check.

This empirically confirms: the current Scope Check has no mechanism to catch sample-vs-population framing. Adding one would catch the 06-30-style failure at frame-formation.

### Signal 6 — The MVL+/SKILL.md template is a single canonical home

Unlike per-discipline rules (which propagate to 5 spec files), the branch.md template lives in ONE file (`homegrown/MVL+/SKILL.md`). One edit; affects all future MVL+ root inquiries. Highest-leverage edit point in the methodology library — single-line change at the template propagates to all future inquiries.

## Confidence Map

| Region | Confidence | Reason |
|---|---|---|
| Current Scope Check is sufficiency-only | **CONFIRMED** | Direct read of MVL+/SKILL.md lines 84-85 |
| 06-30 Scope Check didn't flag sample-vs-population | **CONFIRMED** | Direct read of 06-30 branch |
| Branch.md template is single canonical home | **CONFIRMED** | One edit at MVL+/SKILL.md affects all future inquiries |
| Approach 1 (extend Scope Check) feasibility | **CONFIRMED** | Existing template structure + user-presentation flow accommodate |
| Approach 1 over-firing risk bounded by user-presentation flow | **INFERRED** | Mitigation matches existing scope-widening flow |
| Approach 2-3 over-heavy | **CONFIRMED** | Multi-section additions vs single sub-check |
| Composition (branch.md + W1) value | **CONFIRMED** | Different catch surfaces; correlated but non-identical |
| Sole-W1 (Approach 5) | **SCANNED** | Defensible but loses upstream catch |

## Frontier State

**STABLE.** Two viable approaches in play (Approach 1 alone; Approach 1 + W1 composed). Approaches 2, 3, 4 rejected as too heavy or over-firing. Approach 5 (W1 alone) is the conservative fallback.

The convergence: Approach 1 (extend Scope Check with sample-vs-population sub-check) is the right shape. Composition with W1 is structurally sound but not strictly necessary if Approach 1 catches reliably at frame-formation.

### Jump Scan

Before declaring convergence, scan in a different direction: **could the corrective live entirely OUTSIDE the methodology library** (e.g., as a runner-level prompt the user issues before each inquiry)? This shifts the responsibility to the human user. Reject — methodology-library improvements should be IN the library, not external user discipline. The user's question explicitly asks for branch.md improvement, which is in-library.

Frontier convergence achieved.

## Gaps and Recommendations

### Three viable proposals, ranked

**Proposal 1 (PRIMARY) — Extend Scope Check at MVL+/SKILL.md branch.md template** with sample-vs-population sub-check. ~5-7 lines added. Mechanical fill-in; leverages existing user-presentation flow.

**Proposal 2 (KEEP as DEFENSE-IN-DEPTH) — W1 at sensemaking.md** stays as the proximate-cause corrective. ~70 words; defense-in-depth catch when branch.md is framed correctly but a load-bearing concept's stabilization derives from finite evidence.

**Proposal 3 (REJECT) — W1 alone (no branch.md intervention)** misses the upstream catch; suboptimal.

The composed approach (Proposal 1 + Proposal 2) gives redundant coverage at marginal cost (~75-85 words across 2 files; smaller than the original Component B's ~25-30 lines + per-output scan overhead).

### What this changes vs the prior 08-15 LOOP_DIAGNOSE finding

The prior `2026-05-08_08-15` finding identified W1 as PRIMARY ACTIONABLE and WX (runner-level branch-framing patch) as DEFERRED. This inquiry's analysis suggests:

- **WX should NOT be deferred.** It should be PROMOTED to PRIMARY ACTIONABLE — but with a specific, lightweight shape (extend Scope Check, not new template structure).
- **W1 should NOT be replaced.** It should stay as SECONDARY ACTIONABLE / defense-in-depth.
- **The relationship between WX and W1 is composition, not exclusivity.**

The user's hypothesis is partially correct: branch.md is the higher-leverage surface, but it doesn't fully obviate W1.

### Concrete proposal shape

**Edit 1 (NEW PRIMARY — was WX in 08-15 finding):**

Extend the Scope Check section in `homegrown/MVL+/SKILL.md` (lines 84-87) with a sample-vs-population sub-check. Wording finalized by Innovation. Approximate shape:

> *"Sample-vs-population check: if the Question or Goal references a finite evidence sample (e.g., 'these N observations', 'one corpus chain', 'these specific instances'), explicitly state whether the inquiry's target is to address THAT SAMPLE or the UNDERLYING PROBLEM CLASS the sample is drawn from. Default: address the underlying problem class unless the user has explicitly scoped to the sample. If both readings are plausible, present both to the user before proceeding (per the existing scope-widening flow)."*

**Edit 2 (KEEP as SECONDARY — was W1 in 08-15 finding):**

Apply W1 at `homegrown/sense-making/references/sensemaking.md` per the prior 08-15 finding's section 4. ~70 words; one paragraph appended to M6's application surface.

**Why both:** Edit 1 catches at frame-formation when the goal explicitly references a finite sample. Edit 2 catches at Sensemaking when a load-bearing concept's stabilization derives from finite evidence regardless of branch framing. Different surfaces; different cases; composition gives defense-in-depth.

### Speculative additions REJECTED

- **Approach 2 (Frame-Sensitivity Check section).** Heavy.
- **Approach 3 (Inheritance Hand-Off section).** Very heavy.
- **Approach 4 (broad ambiguity-flagging).** Over-firing risk too high.
- **Approach 5 (W1 alone, no branch.md intervention).** Defensible but suboptimal.

## Convergence Assessment

- **Frontier stability:** stable.
- **Declining discovery rate:** yes; jump scan finds no surprises.
- **Bounded gaps:** yes; only Sensemaking-level decision is the exact wording of the Scope Check sub-check.

All three convergence criteria met. **Exploration converges.**

Sensemaking should: (a) confirm the composed approach (Edit 1 + Edit 2) over sole-WX or sole-W1; (b) finalize wording shape decisions for the Scope Check sub-check; (c) decide whether the prior 08-15 finding's W1+WX dispositions need updating; (d) verify over-firing risk is structurally bounded by the existing user-presentation flow.
