---
status: active
refines: devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md
---
# Finding: Lightweight Discipline-Level Disambiguation

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md`

**Revision trigger:** User correction. The prior finding proposed a fix to prevent internally-referential shorthand in `finding.md` outputs (the `finding.md` file is the artifact compiled by CONCLUDE — the protocol at `homegrown/protocols/conclude.md` invoked by the MVL+ runner at iteration-complete). It had two components: Component A (4 expanded examples in the existing non-ambiguity principle's example list at `conclude.md`) and Component B (a new sub-section with regex patterns + first-use checklist + remediation steps, also at `conclude.md`). The user accepted Component A but pushed back on Component B as too heavy: *"this shouldn't be necessary. we don't want to overload AI with such work. maybe better alternative would be slightly enhancing individual discipline outputs so they don't output ambiguous text..."* The user's hypothesis: a lightweight discipline-level intervention could prevent the ambiguity at source rather than scanning for it post-write at CONCLUDE.

**What's preserved:** Component A from the prior finding stays. Its 4 expanded examples in the non-ambiguity principle's example list at `conclude.md` are lightweight (4 examples in an existing paragraph), teach pattern recognition, and have no per-output overhead. They serve as destination-side translation when finding compilation happens.

**What's changed:** Component B is REJECTED with structural rationale. The prior finding's regex sub-section + first-use checklist + remediation steps required the runner to perform a per-output scan task on every finding compilation — heavy compute load, incompletely mechanizable (Pattern 2 and Pattern 3 required semantic judgment that pure regex couldn't express), and the user explicitly named this as the constraint to avoid.

**What's new:** A single shared sentence ("Cross-spec reference convention") added to the SOLID INSTRUCTIONS section of each of the five discipline reference specs (the SOLID INSTRUCTIONS section is the actionable-instructions portion at the bottom of each discipline's reference document, beginning with `---- NOW SOLID INSTRUCTIONS START ----`). The convention prescribes a writing-style preference: when an output references a named section, component, step, or failure mode that is defined in another Homegrown discipline reference spec (Homegrown is this repository's methodology library at `homegrown/`), name the source on first use; subsequent uses can be bare. The convention applies ONLY to cross-spec references; within-discipline references remain bare since context implies the source.

**Migration:** No breaking changes. Add the convention sentence to each of the five discipline reference specs (one-time edit per spec; identical text). Component A at `conclude.md` stays unchanged. The prior finding's Component B is documented as rejected with rationale; no implementation occurs.

## Question

The prior `2026-05-07_22-10` finding proposed two components to fix internally-referential shorthand in `finding.md` outputs:
- **Component A** — expanded the existing non-ambiguity principle's example list at `homegrown/protocols/conclude.md` with 4 example pairs showing the failure shape and its correction. Lightweight; already-applicable.
- **Component B** — added a new sub-section at the same protocol with 3 regex pattern descriptions, a first-use checklist, valid parenthetical-context shapes, an internally-referential-vs-template-shared distinction, and remediation guidance.

The user accepted Component A as logical. The user rejected Component B as too heavy and asked whether a lightweight discipline-level intervention could prevent ambiguity at source instead. The constraint: disciplines are already at compute limit, so any discipline-level fix must be genuinely lightweight (not "every output goes through a vocabulary translation pass").

Answered question: what is the smallest, lightest discipline-level fix that reduces internally-referential vocabulary at source, AND keeps Component A at CONCLUDE — without rebuilding Component B's heavy mechanical check?

## Finding Summary

- **The lightweight fix is a single sentence added to the SOLID INSTRUCTIONS section of each of the five discipline reference specs.** Identical text in all five files. Total cost: ~5 lines aggregate.

- **The convention's wording:** *"Cross-spec reference convention. When this output references a named section, component, step, or failure mode that is defined in another Homegrown discipline reference spec, name the source on first use (e.g., 'the Probe component in Structural Exploration'); subsequent uses can be bare."*

- **Trigger:** the convention fires only on cross-spec references — terms defined in another Homegrown discipline reference spec. Within-discipline references remain bare; their source is contextually clear from the output's discipline.

- **Mechanism:** write-time, not check-time. The runner reads the convention once when the discipline starts executing (the SOLID INSTRUCTIONS section is the actionable-instructions surface every discipline opens with) and applies it implicitly during output writing. There is no post-write scan, no checklist, no audit step. This is the structural difference from the prior finding's Component B, which required per-output scanning.

- **Cost comparison:**
  - This refinement: ~5 lines aggregate (one sentence × five discipline reference specs).
  - Prior Component B: ~25–30 lines + per-output scan + per-match first-use lookup + per-match remediation cycle.
  - Prior Component A (preserved): 4 examples in the existing non-ambiguity principle's example list at `homegrown/protocols/conclude.md` (the CONCLUDE protocol).

- **Composition with Component A.** The convention is source-side prevention; Component A is destination-side translation. They compose cleanly: the convention reduces ambiguous vocabulary in the discipline outputs (the working documents in the inquiry's `docarchive/`), Component A's 4-example pattern teaches CONCLUDE how to translate any residual cases when compiling finding.md. Both lightweight; both at appropriate surfaces.

- **Component B is REJECTED with structural rationale.** Four reasons documented in this finding's Reasoning section: (1) heavy compute load (per-output scan + per-match checklist); (2) incompletely mechanizable (Pattern 2 and Pattern 3 required semantic judgment pure regex can't express); (3) user explicit constraint; (4) source-side prevention obviates the destination-side scan.

- **All 10 observed failures from `2026-05-07_20-35`'s finding are cross-spec references** (Critique referencing Exploration's Surface-Only Scanning; Sensemaking referencing Critique's Probe component; etc.). The convention catches each at write-time. Component A catches any that slip through at compile-time. The cascade is clean.

- **The fix is the smallest intervention in the methodology-library refinement series so far** (sister analyses added 2 rules each for explore.md / sensemaking.md / innovate.md / td-critique.md and 1 rule for decompose.md, with line counts ranging from ~6–25). This refinement is ~5 lines, smaller than any sister-analysis intervention.

- **Verdict: ACTIONABLE.** The fix is mechanically simple (insert the same sentence into 5 specs), proportional to the user's lightweight constraint, demonstrably catches all observed failures at the write-time layer, and preserves the prior finding's Component A.

## Finding

### 1. The lightweight convention

The fix is a single sentence inserted into the SOLID INSTRUCTIONS section of each of the five discipline reference specs (`homegrown/explore/references/explore.md`, `homegrown/sense-making/references/sensemaking.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, `homegrown/td-critique/references/td-critique.md`). Identical text in all five:

> **Cross-spec reference convention.** When this output references a named section, component, step, or failure mode that is defined in another Homegrown discipline reference spec, name the source on first use (e.g., "the Probe component in Structural Exploration"); subsequent uses can be bare.

That is the entire convention. ~33 words. No examples baked in beyond the single inline one. No checklist. No remediation step. No post-write scan.

The convention sits in SOLID INSTRUCTIONS because that is the actionable-instructions surface the runner attends to before executing the discipline (each discipline reference spec has a section starting with `---- NOW SOLID INSTRUCTIONS START ----` containing the runner's execute-the-discipline instructions). Adding a writing-style preference there means the runner reads it once and applies it implicitly during output writing — there is no separate execution step.

### 2. Why write-time prevention works without a post-write check

The prior `2026-05-07_22-10` finding's Component B used the cascade: write the output → scan for regex patterns → list candidates → walk each candidate through a first-use checklist → remediate if needed → re-scan. The runner pays this cost on every finding compilation.

The convention's cascade is shorter: read the convention once at discipline startup → apply implicit during writing → done. The convention shapes what gets written rather than what gets verified after writing.

This works because internally-referential shorthand is a writing-time choice. The runner inheriting upstream vocabulary (e.g., reading "the Probe section" in an exploration.md working document and copying it bare into the finding) is making a choice about whether to preserve or translate the bare reference. A pre-loaded convention informs that choice before the runner faces it. A post-write check catches the choice's consequences after they're already on the page.

Source-side intervention is structurally lighter than destination-side detection when both are cheap to apply, which is the case here.

### 3. Why the convention's scope is cross-spec references only

The observed failures in the `2026-05-07_20-35` inquiry's finding (the 10+ examples like "the current Probe section says...", "Surface-Only Scanning failure-mode prevention", bare "Coarse Scan", etc.) are all cross-spec references — the finding was compiled by CONCLUDE from discipline outputs that referenced concepts in OTHER discipline specs. Critique discussed Exploration's Surface-Only Scanning; Sensemaking discussed Critique's Probe component; etc.

Within-discipline references are different. When Critique discusses its own "Prosecution" or its own "Phase 0", the source is contextually clear — the output is Critique's discipline output, so the named concepts come from Critique's spec by default. There is no ambiguity for the reader about where the term is defined.

Restricting the convention to cross-spec references matches the failure evidence and avoids over-firing on within-discipline references where disambiguation isn't needed. The convention's recognition cost is correspondingly small — one test against a 5-file set ("is this term defined in another Homegrown discipline reference spec?"), not an open-ended scan against all named terms.

### 4. Why Component A from the prior finding stays

Component A is the 4 expanded examples added to the existing non-ambiguity principle's example list at `homegrown/protocols/conclude.md` (the CONCLUDE protocol). Each example shows a failure shape and its correction (e.g., ❌ "the current Probe section says..." vs ✅ "the Probe section in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec) says..."). It teaches pattern recognition without adding a check step.

Component A handles destination-side translation: when CONCLUDE compiles finding.md from upstream discipline outputs, the runner has 4 example shapes to recognize and translate. The convention handles source-side prevention: discipline outputs themselves carry less ambiguous vocabulary because the discipline read the convention before writing.

Together they form a clean cascade. Source-side prevention reduces the load on the destination-side translation; destination-side translation catches whatever slips through. Neither is exhaustive; together they cover the observed failure set with no per-output scan overhead.

### 5. Why Component B from the prior finding is rejected

Four structural reasons:

**Reason 1 — Heavy compute load.** Component B required the runner to scan the drafted finding for regex pattern matches, list candidates, walk each candidate through a first-use checklist, and remediate failed checks. Each finding compilation pays this cost. For a methodology library that is already at AI-compute limit (the disciplines themselves run substantial cognitive work), adding a per-output scan-and-check step at CONCLUDE imposes meaningful additional load.

**Reason 2 — Incompletely mechanizable.** Pattern 1 in Component B (`\bthe (current )?[A-Z][a-z]+( [A-Z][a-z]+)* (section|component|step|failure mode|protocol|principle|prevention|cycle)\b`) is a real regex; the runner could literally `grep -E` for it. But Pattern 2 ("bare filenames not preceded by parenthetical context") and Pattern 3 ("title-case noun phrases that don't appear in a parenthetical phrase already") require semantic judgment — pure regex can't decide whether surrounding text counts as "a parenthetical context describing what the file is" or as "a parenthetical phrase already." The prior finding labeled these as "Regex sketch," acknowledging the gap. The runner ends up making the same kind of judgment call the convention requires, but at the destination side after the writing has already been done.

**Reason 3 — User explicit constraint.** The user's pushback was direct: *"this shouldn't be necessary. we don't want to overload AI with such work."* Maintaining Component B against this explicit constraint is preference-overruling-instruction. The convention honors the constraint structurally.

**Reason 4 — Source-side prevention obviates destination-side scan.** When the convention prevents most cross-spec ambiguity at write-time (because the discipline outputs themselves no longer carry bare cross-spec references), the destination-side scan has very few real matches to find. Component A's 4 examples handle residual cases via pattern teaching rather than mechanical scanning. The mechanical scan layer becomes redundant.

These reasons are structural, not preference. Component B's verdict is REJECTED in this refinement.

### 6. Per-failure verification

The 10+ observed failures in the `2026-05-07_20-35` inquiry's finding mapped against the convention:

| Observed reference | Cross-spec? | Convention catches at write-time? | Component A catches if slips? |
|---|---|---|---|
| "the current Probe section says..." | YES (Probe is in Exploration spec) | YES — convention requires "Probe component in Structural Exploration" on first use | YES (Component A example #1) |
| "the current Surface-Only Scanning failure-mode prevention says..." | YES | YES | YES (Component A example #2) |
| "the current Scan section says..." | YES | YES | YES |
| "the current Premature Depth failure-mode prevention says..." | YES | YES | YES |
| "the current Resolution Progression's Coarse Scan step asks..." | YES | YES | YES (Component A example #3) |
| "explore.md" (bare) | YES (filename) | YES | YES |
| "Surface-Only Scanning" (bare title-case) | YES | YES | YES |
| "Premature Depth" (bare) | YES | YES | YES |
| "Coarse Scan" (bare) | YES | YES | YES |
| "Resolution Progression" (bare) | YES | YES | YES |

All 10 observed failures are cross-spec references. The convention catches them at write-time. Component A catches any that slip through at compile-time. The cascade is complete.

### 7. The composition explained

```
Source-side prevention (this finding):
  Convention sentence in SOLID INSTRUCTIONS of each of 5 discipline reference specs.
  Read once at discipline startup; applied implicitly during output writing.
  Cost: ~5 lines aggregate (one sentence × 5 specs).
  Catches: cross-spec references at write-time.

  ↓  (residual cases — discipline output forgot to apply convention,
       or convention's wording didn't pattern-match a borderline case)

Destination-side translation (prior finding's Component A, preserved):
  4 expanded examples in non-ambiguity principle's example list at conclude.md.
  Read by CONCLUDE runner during finding compilation; teaches pattern recognition.
  Cost: 4 examples in existing paragraph (no new sub-section, no checklist).
  Catches: residual cross-spec references at compile-time.

  ↓

Final finding.md output: cross-spec references have first-use parenthetical context.
```

The cascade has no scan, no checklist, no audit step. Both layers are read-once-apply-implicit interventions. Total methodology-library cost across both layers: ~5 lines (convention) + 4 examples (Component A in existing paragraph) ≈ 10–15 lines aggregate.

For comparison, the prior finding's combined Component A + Component B cost was ~25–30 lines added at CONCLUDE (Component B sub-section is the heavy part) plus per-output scan and check overhead.

### 8. Why this is the smallest intervention in the methodology-library refinement series

This refinement is the lightest intervention in the recent series of methodology-library improvements:

| Refinement | Spec / file | Aggregate lines |
|---|---|---|
| explore.md sister | `homegrown/explore/references/explore.md` | ~25 |
| sensemaking.md sister | `homegrown/sense-making/references/sensemaking.md` | ~20 |
| decompose.md sister | `homegrown/decompose/references/decompose.md` | ~6–10 |
| innovate.md sister | `homegrown/innovate/references/innovate.md` | ~16–23 |
| td-critique.md sister | `homegrown/td-critique/references/td-critique.md` | ~10–15 |
| **This refinement (cross-spec convention)** | **5 discipline specs** | **~5** |

Each of the sister analyses added multi-line rules with examples, illustrations, and triggers. This refinement is a single sentence repeated five times. It targets a writing-style preference rather than a process step or a check, which is why it costs less.

## Next Actions

### MUST

- **What:** Insert the Cross-spec reference convention sentence into the SOLID INSTRUCTIONS section of each of the five discipline reference specs (`homegrown/explore/references/explore.md`, `homegrown/sense-making/references/sensemaking.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, `homegrown/td-critique/references/td-critique.md`). Identical text in all five. The exact wording: *"Cross-spec reference convention. When this output references a named section, component, step, or failure mode that is defined in another Homegrown discipline reference spec, name the source on first use (e.g., 'the Probe component in Structural Exploration'); subsequent uses can be bare."*
  - **Who:** User-confirmed surgical edit (matching the pattern from the five sister analyses).
  - **Gate:** when the user confirms.
  - **Why:** Without the convention, future MVL+ runs producing finding outputs with cross-spec references will continue to inherit the upstream-discipline-output internally-referential vocabulary into finding.md. Component A at CONCLUDE catches some but not all residual cases.

- **What:** Confirm Component A from the prior `2026-05-07_22-10` finding remains as-is (4 expanded examples in the non-ambiguity principle's example list at `homegrown/protocols/conclude.md`).
  - **Who:** No edit required if Component A was already applied (verify); apply if not.
  - **Gate:** verifiable by single read of `conclude.md`.
  - **Why:** Component A handles destination-side translation for residual cases that slip through the convention's source-side prevention.

### COULD

(None this refinement.)

### DEFERRED

- **What:** Revive Component B (mechanical regex check at CONCLUDE) as a fallback if the convention proves insufficient.
  - **Gate:** Observable — in next 3 MVL+ runs producing finding outputs with cross-spec references, ≥ 1 cross-spec reference slips through both the convention (at discipline level) AND Component A (at CONCLUDE) without first-use parenthetical context. If recurrence is observed, Component B's heavier approach revives despite its compute cost.
  - **Why (if revived):** The mechanical scan provides a third layer of defense. Reviving it accepts the compute load as the price of a recurrence-rate improvement; the user's constraint would need to be reconsidered against the observed failure rate.

## Reasoning

This finding refines the prior `2026-05-07_22-10` finding in response to user pushback. The user accepted Component A but rejected Component B as too heavy.

**Exploration** mapped the lightweight intervention space. Six approaches identified; three rejected on weight grounds (per-output checklist at discipline level; embedded glossary; inline term hints) and three viable (one-line per discipline; shared wording; no discipline-level fix at all). Approach 6 (no discipline-level fix; rely entirely on Component A) was the maximally minimal option but lost source-side reduction. Approach 1/2 (one shared sentence in SOLID INSTRUCTIONS) emerged as the lightweight viable region.

**Sensemaking** stabilized the answer. Five ambiguities collapsed: (1) shared wording across all 5 disciplines (not per-discipline customized); (2) discipline-only placement (no triple placement at CONCLUDE + runner); (3) minimal wording (~30 words; no verbose examples baked in); (4) no post-write check (the regression to Component B's check-time approach was explicitly rejected); (5) cross-spec scope only (within-discipline references are contextually clear).

**Decomposition** partitioned the answer into 4 pieces (C-1: convention; A-1: Component A preservation; B-1: Component B rejection rationale; V-1: verification + composition). All 7 self-evaluation dimensions PASS. The Determination-Mechanism Piece Check (the new rule added to `decompose.md` Step 7 in the prior decompose sister inquiry) was applied: the Q-tree has no load-bearing concept whose use depends on a runtime determination — passes.

**Innovation** generated concrete wording. Six of seven mechanisms converged on the one-sentence convention. Five tests passed for the wording candidate.

**Critique** evaluated against 8 dimensions with weights. Verdict: SURVIVE with one refinement (drop the file-list parenthetical from the convention wording to keep it generic). All 4 critical dimensions HIGH after refinement. Adversarial strength STRONG (8 prosecution objections; 10 defense rebuttals; the strongest prosecution about subjective recognition + project-specific file list resolved by structural defense + wording refinement).

**Significant kills:**

- **Component B from the prior finding.** REJECTED with 4 structural reasons (above in section 5). The prior finding's reasoning for Component B was that the principle was too subjective to apply reliably; the convention here addresses the same root cause (subjectivity) at write-time rather than check-time, with smaller cognitive load.

- **Per-discipline customized wording (Approach 1 from Exploration).** Each discipline could have customized wording naming its own specific cross-spec terms. Rejected because customizing per discipline triples maintenance cost (any new term added to any spec requires updating other disciplines' wording). Shared wording (Approach 2) is generic enough that all disciplines reference "any other Homegrown discipline reference spec" and let the runner identify which terms apply at write-time.

- **Triple placement (discipline + CONCLUDE + runner preamble).** Rejected per the placement convention's single-canonical-home principle. The convention lives at the discipline level (write-time); Component A lives at CONCLUDE (compile-time). Adding a third placement at the MVL+ runner preamble would duplicate concerns.

- **Verbose wording with examples baked in.** Rejected because every word adds compute load when the runner reads SOLID INSTRUCTIONS. Examples live at Component A and serve all disciplines.

- **Post-write check / verification step (regression to Component B at the discipline level).** Rejected because reintroducing a verification step (even one line: "Before terminating, verify cross-spec references have first-use parenthetical context") defeats the purpose. The user's explicit constraint was no scan, no audit; the convention's effect must come from informing writing behavior, not from post-write verification.

- **Within-discipline term coverage.** Rejected because within-discipline references are contextually clear; over-firing the convention on within-discipline references would add unnecessary cognitive load without addressing the observed failure shape (which is exclusively cross-spec).

**Survivors that held:**

- The shared one-sentence convention at the SOLID INSTRUCTIONS section of each of the 5 discipline reference specs. Held because (a) write-time prevention is structurally lighter than check-time enforcement; (b) one sentence is enough; (c) shared wording across all 5 disciplines is cheaper to maintain than per-discipline customization; (d) the convention catches all 10 observed failures at write-time; (e) Component A at CONCLUDE handles residual cases.

- Component A from the prior finding (preserved, not modified). Held because it was already lightweight and complementary; this refinement keeps the destination-side translation layer.

- Component B rejection (preserved as a documented rejection, not as a candidate). Held because the user's constraint is structural; reviving it would override the constraint.

**Why this is the right shape:**

A single sentence per discipline is the smallest possible intervention that addresses the source. Anything smaller (zero discipline-level intervention) gives up source-side reduction entirely. Anything larger (multi-line rule with examples) adds cognitive load to SOLID INSTRUCTIONS, which is the runner's most-attended-to surface and where every byte counts. The convention sits at the lightweight floor.

## Open Questions

### Monitoring

- **Effective firing of the convention in the next 3 MVL+ runs producing finding outputs with cross-spec references.** Observable in the resulting docarchive's discipline outputs (do they name sources on first use?) and in the resulting finding.md (are cross-spec references disambiguated?). If the convention fires correctly at all 3 runs, the refinement is validated.

- **Component A's effectiveness for residual cases.** If 1 of 10 cross-spec references slips through the convention (the discipline output didn't apply it on a borderline case), does Component A's 4-example pattern teaching catch it during CONCLUDE compilation? Observable in the finding.md output.

### Refinement Triggers

- **Component B revival trigger.** If the convention + Component A together fail to catch cross-spec ambiguity in the next 3 MVL+ runs (≥ 1 cross-spec reference slips through both layers without first-use parenthetical), revive Component B's mechanical regex check at CONCLUDE. The user's constraint about overload would need to be reconsidered against the observed failure rate.

- **Convention wording refinement.** If the convention's recognition cue ("defined in another Homegrown discipline reference spec") is judged too narrow by the runner in practice (e.g., terms defined in Homegrown protocol specs at `homegrown/protocols/` aren't covered), the wording can be broadened to "any Homegrown spec" without changing the cascade structure.

- **Within-discipline coverage extension.** If observed failures appear in WITHIN-discipline references (e.g., Critique's output uses "Prosecution" without ever defining it on first appearance), extend the convention's scope. Currently rejected because failure evidence is exclusively cross-spec; if new evidence accumulates, reconsider.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

in devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md 

it has 

Additional examples of the failure mode and its correction:

- ❌ "the current Probe section says..." — which spec? in what discipline?
- ✅ "the Probe section in `homegrown/explore/references/explore.md` (the
   Structural Exploration discipline spec) says..."

- ❌ "Surface-Only Scanning failure mode" — failure mode of what? defined
   where?
- ✅ "Surface-Only Scanning (one of six failure modes documented in the
   Structural Exploration discipline spec at
   `homegrown/explore/references/explore.md`)"

- ❌ "Coarse Scan" — coarse scan of what? in what process?
- ✅ "Coarse Scan (the breadth-first first-pass step in Structural
   Exploration's Resolution Progression)"

part which is logical



but Component B — Add a new sub-section between the principle and the finding template section is overdid it by asking for regex chekcs etc.. 

i think this shouldnt be neccesary. we dont want to overload AI with such work

maybe better alternative would be slighly enhancing individual discipline outputs so they dont output ambigious text , at least not that much. But again , disciplines are already in limit in terms of overloading the AI, so it must be a light weight fix with them.  But this is not suggested at all..
```

</details>
