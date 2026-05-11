# Innovation: Branch-Framing vs Sensemaking Corrective Surface

## User Input

devdocs/inquiries/2026-05-08_09-00__branch_framing_vs_sensemaking_corrective_surface/_branch.md

## Phase 1 — Seed

Sensemaking + Decomposition stabilized: composition (Edit 1 + Edit 2) with disposition update from prior 08-15 finding (WX promoted PRIMARY, W1 retained SECONDARY). Innovation finalizes Edit 1's wording + verifies /MVL parallel structure.

**Verification result (already obtained):** classic `homegrown/MVL/SKILL.md` lines 71-80 has identical Scope Check section structure. Propagation to /MVL would be structurally clean.

**Seed type:** Refinement of prior LOOP_DIAGNOSE finding (08-15 dispositions updated) + Composition pattern (defense-in-depth) + Concrete wording finalization.

## Phase 2 — Generate (7 Mechanisms × 3 Variations Each)

### Mechanism 1: Combination (Generator)

**Generic:** Combine sample-vs-population sub-check + existing Scope Check sufficiency check into one extended paragraph.

**Focused:** Append the sample-vs-population sub-check after the existing sufficiency check sentence in the Scope Check section. Two sentences total: (1) sufficiency; (2) sample-vs-population.

**Contrarian:** Combine sample-vs-population check with a broader frame-sensitivity check. Reject — over-heavy.

**Surviving:** focused combination — two-sentence Scope Check structure.

### Mechanism 2: Absence Recognition (Generator)

**Generic:** What's missing from the current Scope Check is goal-layer scope adequacy reasoning.

**Focused:** Specifically, the Scope Check tests sufficiency (Q→G coverage) but not goal scope (G→problem-class coverage). The sub-check fills the goal-scope gap.

**Surviving:** focused absence — goal-layer coverage check.

### Mechanism 3: Domain Transfer (Generator)

**Generic:** Transfer from epidemiology — sample-vs-population is a foundational distinction. Studies must explicitly state target population vs sampled subset.

**Focused:** Transfer applies directly: branch.md's goal must explicitly state target (sample or population) when finite evidence is referenced.

**Surviving:** focused transfer reinforces the principle.

### Mechanism 4: Extrapolation (Generator)

**Generic:** As more inquiries accumulate, sample-vs-population framing failures will recur. Branch.md template extension prevents at frame-formation.

**Focused:** Concrete evaluation gate: in next 3 MVL+ root inquiries that reference finite evidence in their Question or Goal, the Scope Check section explicitly states sample-vs-population target.

**Surviving:** focused extrapolation provides Edit 1's evaluation gate.

### Mechanism 5: Lens Shifting (Framer)

**Generic:** Under "templates are one-time fill-ins" frame, Edit 1 is structurally salient. Under "Scope Check is just a sufficiency check" frame, the sub-check expands the section's role.

**Focused:** Re-frame the Scope Check from "sufficiency only" to "sufficiency + goal-scope adequacy." Two-clause check at one section.

**Surviving:** focused lens shift confirms inline placement.

### Mechanism 6: Constraint Manipulation (Framer)

**Generic:** Add constraint: Edit 1 must fit ≤7 lines.

**Focused:** Constraints: (a) inline at existing Scope Check section; (b) ≤7 lines added; (c) generic principle + 2-3 illustrative example patterns; (d) over-firing mitigation via existing user-presentation flow.

**Contrarian:** Remove the constraint that Edit 1 stays at MVL+/SKILL.md. Allow runner-level documentation. Reject — branch.md template is canonical home; documentation is non-canonical.

**Surviving:** focused constraint set finalizes Edit 1's shape.

### Mechanism 7: Inversion (Framer)

**Generic level 1 (component):** "Scope Check tests Q→G sufficiency" → invert to "Scope Check tests Q→G sufficiency AND G→problem-class adequacy." This is Edit 1's structural shape.

**Focused level 2 (system):** "Branch.md is for inquiry framing" → invert to "branch.md is for inquiry framing AND scope-adequacy testing at frame-formation time." Re-frames branch.md's role.

**Contrarian level 3 (root):** "Sensemaking is the right surface for sample-vs-population testing" → invert to "branch.md is the right primary surface; Sensemaking is defense-in-depth." This is exactly the disposition update D-1 captures.

**Surviving:** focused level 3 inversion confirms the disposition update.

## Mechanism Outputs Summary

| Mechanism | Surviving variation | Contribution |
|---|---|---|
| Combination (G) | Focused: two-sentence Scope Check | Edit 1 placement shape |
| Absence Recognition (G) | Focused: goal-layer scope adequacy | Edit 1 structural role |
| Domain Transfer (G) | Focused: epidemiology sample-vs-population | Edit 1 reasoning frame |
| Extrapolation (G) | Focused: chain-7+3 effectiveness window | Edit 1 evaluation gate |
| Lens Shifting (F) | Focused: sufficiency + adequacy | Edit 1 inline placement |
| Constraint Manipulation (F) | Focused: ≤7 lines, inline, 2-3 examples | Edit 1 wording shape |
| Inversion (F) | Focused level 3: branch primary, Sensemaking secondary | Confirms D-1 disposition update |

**Convergence:** All 7 mechanisms converge on Edit 1 as a two-sentence inline extension of the existing Scope Check at MVL+/SKILL.md, with sample-vs-population sub-check + 2-3 illustrative example patterns + over-firing mitigation via existing user-presentation flow. HIGH convergence.

## Phase 3 — Test (5 criteria per surviving candidate)

### Candidate E1 — Edit 1 Wording + Placement

**Concrete final wording** for Edit 1 (~6 lines added inline within the existing Scope Check section at `homegrown/MVL+/SKILL.md` lines 84-87 — and the parallel section at `homegrown/MVL/SKILL.md` lines 79-80 if /MVL propagation is approved):

The current template text:
```markdown
## Scope Check
[compare the question's scope to the goal's requirements. Does the question, if answered perfectly, cover everything the goal asks for? If YES: "Question covers goal." If NO: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."]
```

The proposed extension (Edit 1 — appended inline at the end of the existing Scope Check bracket):

```markdown
## Scope Check
[compare the question's scope to the goal's requirements. Does the question, if answered perfectly, cover everything the goal asks for? If YES: "Question covers goal." If NO: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."

Sample-vs-population check: if the Question or Goal references a finite evidence sample (e.g., "the N observations from inquiry X", "this corpus of M chains", "these specific instances"), explicitly state whether the inquiry's target is to address THAT SAMPLE or the UNDERLYING PROBLEM CLASS the sample is drawn from. Default: address the underlying problem class unless the user has explicitly scoped to the sample. If both readings are plausible, present both to the user before proceeding (per the existing scope-widening flow above).]
```

**Tests:**

- **Novelty:** new sub-check; not currently in either MVL+/SKILL.md or MVL/SKILL.md template. NOVEL.
- **Scrutiny survival:** strongest objection — *"the runner has to recognize 'finite evidence sample' references; this is judgment-dependent."* Defense — the wording grounds the abstraction with 3 illustrative example patterns ("the N observations", "this corpus of M chains", "these specific instances"); the recognition cue is concrete. Same precedent as the prior `2026-05-08_07-15` finding's generic non-ambiguity convention with 5 illustrative type examples. SURVIVES.
- **Fertility:** opens the Scope Check section as a structured surface for goal-layer scope adequacy testing; future scope-related sub-checks could be added the same way (e.g., temporal scope). FERTILE.
- **Actionability:** runner reads the template → fills in Scope Check → applies sample-vs-population check → states target. Mechanical (template fill-in). ACTIONABLE.
- **Mechanism independence:** all 7 mechanisms converge. HIGH.

**VERDICT: SURVIVES.**

### Candidate E2 — Edit 2 Reaffirmation

**Concrete reaffirmation:** apply W1 from the prior `2026-05-08_08-15` finding's section 4 verbatim. The wording (already finalized in 08-15):

> **Sample-vs-population recognition cue.** When a load-bearing concept stabilized in Sensemaking output names "what the problem IS" — particularly when it appears as a Phase 1 / Key Insight derived from a finite evidence sample (e.g., observations from one inquiry, instances from one corpus chain) — the ambiguity-collapse pair MUST explicitly test whether the sample is representative of the underlying problem class. The strongest counter-interpretation is: the sample's distribution is not the population's distribution; the load-bearing concept may bound the observed sample, not the actual problem.

Placement: appended after the existing M6 application paragraph in `homegrown/sense-making/references/sensemaking.md`.

**Tests:** SURVIVES (already characterized in prior 08-15 finding; status: STAYS ACTIONABLE).

### Candidate C-1 — Composition Rationale Documentation

**Final documentation** (in finding's body): the cascade is:

```
Branch.md template (Edit 1) catches: when Question/Goal explicitly references a finite evidence sample.
  ↓ (residual cases — branch was framed neutrally; Sensemaking still narrows during Phase 1)
Sensemaking M6 application (Edit 2) catches: when load-bearing concept stabilization derives from finite evidence regardless of branch framing.
```

Both edits lightweight; aggregate ~10-15 lines across 2 files. Defense-in-depth at marginal cost.

**Tests:** SURVIVES.

### Candidate D-1 — Prior 08-15 Disposition Update

**Final dispositions** (relative to prior `2026-05-08_08-15` finding):

| Prior 08-15 candidate | Prior status | New status |
|---|---|---|
| W1 (Sensemaking M6 extension) | ACTIONABLE PRIMARY | ACTIONABLE SECONDARY (defense-in-depth; now Edit 2) |
| W2 (Critique scope-adequacy dimension) | DEFERRED-conditional | DEFERRED-conditional (unchanged) |
| W7 (content cleanup) | already addressed by 07-15 finding's S-1 | already addressed (unchanged) |
| W8 (5-track monitoring) | ACTIONABLE-MONITORING | ACTIONABLE-MONITORING (unchanged) |
| WX (runner-level branch-framing patch) | DEFERRED | **PROMOTED to ACTIONABLE PRIMARY** (now Edit 1) |

Relationship to 08-15: **REFINES** (not SUPERSEDES). Substantive content of 08-15 stays; only WX/W1 ranking is updated.

**Tests:** SURVIVES.

### Candidate P-1 — /MVL Propagation Follow-Up

**Verification result:** `homegrown/MVL/SKILL.md` lines 71-80 has IDENTICAL branch.md template structure (Question / Goal / Scope Check) to MVL+/SKILL.md lines 76-87. Same Scope Check sufficiency wording.

**Disposition:** Edit 1 SHOULD propagate to /MVL classic. Same wording; same placement (parallel Scope Check section). Cost: ~6 lines at /MVL/SKILL.md, identical to the MVL+ edit.

**Decision shape:** include /MVL propagation as **part of Edit 1** (one edit applied to both MVL+ and MVL templates), OR as separate **Edit 1b** (deferred, since the user explicitly named MVL+ as the target).

**Conservative choice:** since the user named MVL+ explicitly, treat /MVL propagation as a CO-RECOMMENDED but USER-CONFIRMABLE follow-up. Flag it in Next Actions / COULD section. The substantive edit is identical; the user can apply both or just MVL+ depending on preference.

**Tests:** SURVIVES as CO-RECOMMENDED follow-up.

## Phase 4 — Assembly Check

The strongest assembly:

```
E1 (Edit 1 wording + placement at MVL+/SKILL.md lines 84-87)
  + E2 (Edit 2 reaffirmation at sensemaking.md per 08-15 finding's section 4)
  + C-1 (composition rationale: defense-in-depth)
  + D-1 (prior 08-15 disposition update; REFINES not SUPERSEDES)
  + P-1 (/MVL propagation co-recommended; identical wording at /MVL/SKILL.md lines 79-80)
```

**Emergent value:**

- E1 + E2 form the upstream + downstream catch composition.
- C-1 explains why both edits are needed despite the user's "instead of" framing.
- D-1 cleanly updates the prior 08-15 finding's dispositions without superseding.
- P-1 extends the leverage further — single template edit propagates across both runners (MVL+ and MVL classic).

**Self-applying check:** this finding's Question and Goal reference *the prior `2026-05-08_06-30` cascade* — a finite evidence sample (one cascade). Per Edit 1's own rule, the inquiry's target should be explicitly stated. Self-test: this finding's `_branch.md` Scope Check section includes a *"Sample-vs-population check"* paragraph that explicitly addresses this. The finding walks its own talk.

**Assembly verdict: SURVIVE.**

## Phase 5 — V1 Shape (Stable Output for Critique)

```
Two edits + co-recommended propagation, addressing the prior 08-15
finding's WX/W1 disposition through composition:

EDIT 1 (NEW PRIMARY — promoted from prior 08-15's WX DEFERRED):
  Where: homegrown/MVL+/SKILL.md, Scope Check section of branch.md template
         (lines 84-87); inline appended after existing sufficiency check
  Wording: ~6 lines added; sample-vs-population sub-check with 3
           illustrative example patterns and over-firing mitigation
           via existing user-presentation flow (line 87)
  Cost: ~6 lines at 1 file (single canonical home for branch.md template)

EDIT 2 (SECONDARY/defense-in-depth — STAYS ACTIONABLE from prior 08-15's W1):
  Where: homegrown/sense-making/references/sensemaking.md, M6 application
         paragraph (the rule applied via 2026-05-08_00-20 sister analysis)
  Wording: ~70 words verbatim from prior 2026-05-08_08-15 finding's section 4
  Cost: ~70 words at 1 file

CO-RECOMMENDED FOLLOW-UP (P-1):
  Apply Edit 1's identical wording at homegrown/MVL/SKILL.md lines 79-80
  (parallel Scope Check section in classic /MVL runner). User-confirmable;
  same wording.
  Cost: ~6 lines at 1 file (identical text to Edit 1).

DISPOSITION UPDATE (D-1) — relative to prior 2026-05-08_08-15 finding:
  WX → Edit 1: PROMOTED from DEFERRED to ACTIONABLE PRIMARY.
  W1 → Edit 2: STAYS ACTIONABLE; ranking demoted to SECONDARY/defense-in-depth.
  W2, W7, W8: unchanged.
  Relationship: REFINES (not SUPERSEDES); substantive content stays.

COMPOSITION (C-1):
  Edit 1 catches at frame-formation when goal references finite sample.
  Edit 2 catches at Sensemaking when load-bearing concept derives from
  finite evidence regardless of branch framing.
  Defense-in-depth at marginal cost (~10-15 lines aggregate; ~16-21 if
  P-1 also applied).

USER HYPOTHESIS VALIDATION:
  Leverage hypothesis (branch.md primary): VALIDATED.
  Exclusivity hypothesis ("instead of" Sensemaking): partially CORRECTED
  to composition discipline (defense-in-depth retained from prior chains'
  Component A + W1 + W2 patterns).

Aggregate cost: ~10-15 lines at 2 files (MVL+ + sensemaking) +
  ~6 lines at 1 file (MVL classic) IF P-1 also approved = ~16-21 lines
  across 3 files maximum. Smallest possible intervention covering
  branch-framing surface + Sensemaking surface + classic-runner parallel.
```

## Innovation Telemetry

- Generators applied: 4 / 4. Framers applied: 3 / 3. Coverage: FULL.
- Convergence: HIGH — all 7 mechanisms converge on Edit 1.
- Survivors tested: 5 (E1, E2, C-1, D-1, P-1). All SURVIVE.
- Failure modes observed: NONE.
- **Output disposition** (per innovate.md's Rule B from sister analysis):
  - E1: ACTIONABLE.
  - E2: ACTIONABLE-REAFFIRMED.
  - P-1: CO-RECOMMENDED (user-confirmable).
  - C-1, D-1: DOCUMENTATION (in finding).
- **Overall: PROCEED.**
