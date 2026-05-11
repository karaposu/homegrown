---
status: active
supersedes: devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md
refines: devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md
---
# Finding: Generic Discipline-Level Non-Ambiguity Convention

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` (the finding being superseded), and `devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md` (the original finding being refined; "the original" here means the inquiry that first diagnosed the internally-referential shorthand failure mode in `finding.md` outputs).

**Revision trigger:** User correction. The user explicitly named two issues with the prior `2026-05-08_06-30` finding: (1) it scoped the discipline-level convention too narrowly (covering only cross-spec references — terms defined in another Homegrown discipline reference spec, where "Homegrown" is this repository's methodology library at `homegrown/`); (2) the actual non-ambiguity problem is generic and includes inquiry-coined terms (e.g., "M6", "TP3", "Q-RF" — identifiers coined within the LOOP_DIAGNOSE corpus to track maintenance candidates), project-specific references (e.g., `/MVL+`, `enes/` — runner identifiers and folder paths in this project), abbreviations (e.g., "SV6" — Sense Version 6, the Sensemaking discipline's terminal output), bare file paths, and within-discipline references. The user's explicit ask: keep Component A from the original finding (the 4 expanded examples at `homegrown/protocols/conclude.md`, which is the CONCLUDE protocol invoked by the MVL+ runner at iteration-complete) AND add a generic discipline-level intervention covering all shorthand types, not just cross-spec references.

**What's preserved:**
- Component A from the original `2026-05-07_22-10` finding (4 expanded examples in the non-ambiguity principle's example list at `conclude.md`) — confirmed by direct grep that this is NOT yet applied to `conclude.md` and must be added (Edit 1 of this finding).
- Component B from the original `2026-05-07_22-10` finding (regex sub-section + checklist at `conclude.md`) — REMAINS REJECTED with structural rationale carried forward.
- The lightweight criterion (no per-output scan; no checklist; no audit step).
- The placement convention from `enes/discipline_rule_placement.md` (single canonical home + cross-references at non-canonical surfaces; "enes/" is this repository's design-doc folder).

**What's changed:**
- The discipline-level convention's scope is broadened from cross-spec-only (the prior `2026-05-08_06-30` shape) to GENERIC, covering all 6 observed shorthand types. The prior narrow scope covered ~1/6 of the actual problem; the generic version covers 6/6.
- The convention's wording is restructured: principle ("brief parenthetical context on first use") + 5 illustrative type examples + cross-reference to Component A's example bank at `conclude.md` (single canonical home for example shapes).
- The placement is the END of SOLID INSTRUCTIONS in each of the 5 discipline reference specs (the SOLID INSTRUCTIONS section is the actionable-instructions surface beginning with `---- NOW SOLID INSTRUCTIONS START ----` in each spec); same surface as the prior finding but with the generic principle.

**What's new:**
- Verification that Component A is currently absent from `conclude.md` (line 70-73 contains only the original "Template" example pair); Edit 1 of this finding applies it.
- Per-shorthand-type verification table showing all 6 types covered by the generic convention.
- Composition explanation: source-side prevention (Edit 2 at disciplines) + destination-side translation (Edit 1 at conclude.md) form a lightweight cascade with no per-output scanning anywhere.
- SUPERSEDES marker on prior `2026-05-08_06-30` `_state.md` (Edit S-1).

**Migration:** No breaking changes. Apply Edit 1 (Component A → conclude.md) + Edit 2 (generic convention → 5 discipline specs) + state update on prior `2026-05-08_06-30` finding. The prior narrow convention was never applied (the user pushed back before surgical-edit confirmation), so there's no rollback step. Total edits: 1 file (conclude.md) + 5 files (discipline specs) + 1 state file (prior finding's _state.md) = 7 file edits.

## Question

The original `devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md` proposed two components to fix internally-referential shorthand in `finding.md` outputs (the public artifact compiled by CONCLUDE — the protocol at `homegrown/protocols/conclude.md` invoked by the MVL+ runner at iteration-complete; "MVL+ runner" is the Extended Cognitive Loop runner at `homegrown/MVL+/SKILL.md`):

- **Component A** — expanded the existing non-ambiguity principle's example list at `conclude.md` with 3 additional example pairs (Probe section / Surface-Only Scanning failure mode / Coarse Scan), bringing the total to 4 examples. The non-ambiguity principle is the rule at lines 64-75 of `conclude.md` that prescribes: *"Each sentence must be understandable to a reader with no prior exposure to this inquiry."*

- **Component B** — added a new sub-section ("Non-ambiguity check (mechanical)") at `conclude.md` with regex pattern descriptions, a first-use checklist, valid parenthetical-context shapes, and remediation guidance.

The user accepted Component A as logical but pushed back on Component B as too heavy — Component B required the runner to perform a per-output scan task on every finding compilation, which the user explicitly named as overload. The user asked for a lightweight discipline-level alternative.

The prior `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` proposed a discipline-level intervention but scoped it too narrowly — triggering ONLY on cross-spec references. The user's correction: the non-ambiguity problem is GENERIC (covers cross-spec references, within-discipline references, inquiry-coined terms, project-specific references, abbreviations, and bare file paths — six observed shorthand types).

This finding answers: what is the right lightweight discipline-level convention covering the GENERIC non-ambiguity problem, AND confirms Component A's status (currently absent; must be applied)?

## Finding Summary

- **Component A from the original `2026-05-07_22-10` finding is currently NOT applied to `conclude.md`.** Direct grep verification: `conclude.md` lines 70-73 contain only the original single example pair ("Template extends from 4 sections to 6"). The 3 additional pairs proposed by Component A (Probe section / Surface-Only Scanning failure mode / Coarse Scan) were never added. **Edit 1** of this finding applies them.

- **The discipline-level convention is broadened from cross-spec-only to GENERIC.** The convention sits at the END of the SOLID INSTRUCTIONS section of each of the 5 discipline reference specs (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique), in identical-text form across all 5. The wording is one sentence (~55 words) with: (a) the principle ("brief parenthetical context on first use"); (b) 5 illustrative shorthand types (cross-spec references, project-specific references, abbreviations, bare file paths, inquiry-coined concepts); (c) cross-reference to `conclude.md`'s example bank.

- **The convention catches all 6 observed shorthand types at write-time.** Cross-spec references (e.g., "Probe component in Structural Exploration"); within-discipline references (when context isn't obvious); inquiry-coined terms (e.g., "M6", "TP3", "Q-RF" — identifiers coined within the LOOP_DIAGNOSE corpus to track maintenance candidates); project-specific references (e.g., `/MVL+`, `enes/`, `LOOP_DIAGNOSE`); abbreviations (e.g., "SV6", "CONCLUDE"); bare file paths (e.g., "explore.md" used bare on first use). The prior narrow convention covered 1/6; the generic version covers 6/6.

- **Composition with Component A is clean.** Source-side prevention (Edit 2 at disciplines) reduces ambiguity in the discipline outputs (the working documents in the inquiry's `docarchive/`). Destination-side translation (Edit 1 at `conclude.md`) provides 4 example shapes for residual cases at compile-time. Both layers lightweight; no per-output scanning anywhere.

- **Component B from the original finding remains REJECTED** with 4 structural reasons (heavy compute load; incompletely mechanizable — Pattern 2 and Pattern 3 require semantic judgment that pure regex can't express; user explicit constraint; source-side prevention obviates destination-side scan).

- **The prior `2026-05-08_06-30` finding is SUPERSEDED.** Its narrow cross-spec-only scope is structurally inadequate; this finding replaces it. Edit S-1 marks the prior `_state.md` as SUPERSEDED with a history entry pointing at this inquiry.

- **Aggregate cost: ~35–55 lines across 6 files.** Larger than the prior narrow convention's ~5 lines but covers 6x more cases. Per-case cost dramatically lower. Smaller than the original Component B's ~25–30 lines + per-output scan overhead.

- **Verdict: ACTIONABLE.** Two surgical edits + one state update.

## Finding

### 1. Component A application (Edit 1)

**Verified:** Component A from the original `2026-05-07_22-10` finding is currently NOT applied to `homegrown/protocols/conclude.md`. The current spec (lines 70-73) contains only the original single example pair:

```markdown
Example of the failure mode and its correction:

- ❌ "Template extends from 4 sections to 6" — which template? in what context?
- ✅ "Our existing finding.md template (defined in the value_extraction_design inquiry) has 4 sections; this audit adds 2 more for a total of 6."
```

**Edit:** insert the following 3 example pairs immediately after the existing example (verbatim from the original `2026-05-07_22-10` finding's Component A):

```markdown
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
```

After Edit 1, the example list at `conclude.md` contains 4 example pairs covering 4 distinct failure shapes: generic noun referring to external concept (Template); definite-article reference to a discipline-internal section (Probe section); named failure mode (Surface-Only Scanning); bare title-case noun phrase (Coarse Scan). These 4 shapes serve as the example bank for the generic discipline-level convention to cross-reference.

### 2. Generic discipline-level convention (Edit 2)

**Wording** (single sentence; ~55 words; identical text inserted at the END of SOLID INSTRUCTIONS section of each of the 5 discipline reference specs):

> **First-use context.** When introducing a niche term in this output — a name from another Homegrown discipline reference spec (e.g., "Probe component"), a project-specific reference (e.g., `/MVL+`, `enes/`), an abbreviation (e.g., "SV6"), a bare file path, or a concept coined within this inquiry — give brief parenthetical context on first use; subsequent uses can be bare. See `homegrown/protocols/conclude.md` non-ambiguity principle for example shapes.

**Placement:** end of the SOLID INSTRUCTIONS section in each of the 5 discipline reference specs. The SOLID INSTRUCTIONS section is the actionable-instructions surface in each discipline spec, beginning with the marker `---- NOW SOLID INSTRUCTIONS START ----`. The end placement positions the convention as a writing-style note that applies to the discipline's output, after the execute-the-discipline process steps.

**Files:**
- `homegrown/explore/references/explore.md`
- `homegrown/sense-making/references/sensemaking.md`
- `homegrown/decompose/references/decompose.md`
- `homegrown/innovate/references/innovate.md`
- `homegrown/td-critique/references/td-critique.md`

**Mechanism:** the convention is read once when the discipline starts executing (the SOLID INSTRUCTIONS section is the actionable-instructions surface every discipline opens with). The runner applies it implicitly during output writing. There is no post-write scan, no checklist, no audit step.

### 3. Why the convention is generic, not type-specific

The 6 observed shorthand types share the same correction (parenthetical context on first use) but differ in WHAT context to add:

- **Cross-spec references** ("Probe component", "Surface-Only Scanning") → name the source spec or discipline.
- **Within-discipline references** (when a discipline references its own component without obvious context) → name what it is.
- **Inquiry-coined terms** ("M6", "TP3", "Q-RF") → brief definition or "coined in this inquiry as [meaning]".
- **Project-specific references** (`/MVL+`, `enes/`) → brief role description.
- **Abbreviations** ("SV6", "CONCLUDE") → expansion.
- **Bare file paths** ("explore.md") → name what the file is.

A generic convention that says "give brief parenthetical context naming what the term refers to" covers all 6 with one principle. Type-specific rules (one rule per shorthand type) would multiply the convention's footprint without adding coverage. The generic principle scales: future shorthand types not yet observed are caught automatically by the principle's "any niche term" wording.

The 5 illustrative type examples in the convention's wording (cross-spec, project-specific, abbreviations, file paths, inquiry-coined) provide concrete recognition cues so the runner doesn't have to subjectively decide "is this niche?" without anchors. The illustrative list is NOT exhaustive — the principle's wording is the rule, and the examples ground it.

### 4. State update for prior `2026-05-08_06-30` finding (Edit S-1)

The prior `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` is structurally inadequate (covers 1/6 of the non-ambiguity problem). This finding replaces it.

**Edit S-1:** update `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_state.md`:

- Set `Status` field: `COMPLETE` → `SUPERSEDED`.
- Append History entry: *"2026-05-08: Superseded by `devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/`. The prior finding's narrow cross-spec-only scope was replaced with a generic convention covering all 6 shorthand types observed across the corpus (cross-spec references; within-discipline references; inquiry-coined terms; project-specific references; abbreviations; bare file paths). The narrow scope covered 1/6 of the actual problem; the generic version covers 6/6 at proportional cost."*

The prior finding.md remains in the prior folder as historical record; the SUPERSEDED status prevents future readers from applying the superseded narrow convention.

### 5. Component B remains rejected (carry-forward)

Component B from the original `2026-05-07_22-10` finding (the regex sub-section + first-use checklist + remediation steps at `conclude.md`) remains REJECTED. The structural reasoning, carried forward from the prior `2026-05-08_06-30` finding:

1. **Heavy compute load.** Component B required the runner to scan the drafted finding for regex pattern matches, list candidates, walk each candidate through a first-use checklist, and remediate failed checks. Each finding compilation pays this cost. For an AI-compute-limited methodology library (where disciplines themselves run substantial cognitive work), the per-output scan is meaningful additional load.

2. **Incompletely mechanizable.** Pattern 1 (`\bthe (current )?[A-Z][a-z]+...`) is a real regex; Pattern 2 ("bare filenames not preceded by parenthetical context") and Pattern 3 ("title-case noun phrases that don't appear in a parenthetical phrase already") require semantic judgment pure regex can't express. The original finding labeled them "Regex sketch," acknowledging the gap.

3. **User explicit constraint.** *"This shouldn't be necessary. We don't want to overload AI with such work."*

4. **Source-side prevention obviates destination-side scan.** When Edit 2's generic convention prevents most ambiguity at write-time, the destination-side scan layer becomes redundant. Edit 1's 4 examples handle residual cases via pattern teaching, not mechanical scanning.

These reasons are structural, not preference. The deferred-fallback note in this finding's Refinement Triggers preserves the option to revive Component B if the generic convention proves insufficient in observed practice — but the default is rejection.

### 6. Per-shorthand-type verification

| Shorthand type | Example | Caught by Edit 2 (write-time)? | Catches by Edit 1 (compile-time)? |
|---|---|---|---|
| Cross-spec references | "Probe component in Structural Exploration", "Surface-Only Scanning" | YES (convention names the source spec on first use) | YES (Component A example #2, #3) |
| Within-discipline references | Critique referencing own "Phase 0" without obvious context | YES (convention applies to any niche term in output) | YES (Component A's principle is generic) |
| Inquiry-coined terms | "M6", "TP3", "P11", "Q-RF" — coined within LOOP_DIAGNOSE corpus | YES (convention's "concept coined within this inquiry" trigger) | YES (residual case caught by principle) |
| Project-specific references | `/MVL+`, `enes/`, `LOOP_DIAGNOSE` | YES (convention's "project-specific reference" trigger) | YES (Component A example #2 demonstrates parenthetical role description) |
| Abbreviations | "SV6", "CONCLUDE" | YES (convention's "abbreviation" trigger) | YES (residual case) |
| Bare file paths | "explore.md" used bare on first use | YES (convention's "bare file path" trigger) | YES (Component A example #1 shows file path with parenthetical context) |

All 6 types caught at write-time by Edit 2. Edit 1 catches residual cases at compile-time. Cascade clean.

### 7. The cascade explained

```
Source-side prevention (Edit 2 at disciplines):
  Generic convention sentence in SOLID INSTRUCTIONS of each of 5 discipline reference specs.
  Read once at discipline startup; applied implicitly during output writing.
  Cost: ~5-8 lines × 5 specs = 25-40 lines aggregate.
  Catches: all 6 shorthand types at write-time.

  ↓  (residual cases — discipline didn't apply the convention on a borderline case,
       or the convention's recognition cue didn't pattern-match)

Destination-side translation (Edit 1 at conclude.md):
  4 example shapes in the non-ambiguity principle's example list.
  Read by CONCLUDE runner during finding compilation; teaches pattern recognition.
  Cost: ~10-15 lines added to conclude.md.
  Catches: residual at compile-time.

  ↓

Final finding.md output: niche terms have first-use parenthetical context.
```

The cascade has no scan, no checklist, no audit step at any layer. Both layers are read-once-apply-implicit interventions. Total methodology-library cost: ~35-55 lines across 6 files.

### 8. Why this approach over alternatives

Three alternatives were considered and rejected:

- **Pure principle without type enumeration** (Approach 3 from Exploration). The original `2026-05-07_22-10` non-ambiguity principle was already pure principle ("define niche terms briefly on first use"), and it FAILED — the runner couldn't reliably recognize "what wouldn't be obvious" subjectively when embedded in the inquiry's vocabulary. Adding type examples to the principle is the corrective.

- **Self-contained convention with examples baked in** (Approach 1 from Exploration). Each discipline spec would contain the full example list. Rejected because duplicating examples in 5 places creates a maintenance hazard (any new example added to Component A must propagate to 5 places). Cross-referencing a single canonical example bank (Component A at conclude.md) is structurally cleaner.

- **Component B revival** (mechanical regex check at conclude.md). Rejected with 4 structural reasons (above section 5). The deferred fallback note preserves the option but the default is rejection.

The chosen approach (generic principle + illustrative examples + cross-reference to Component A) sits at the lightweight floor that still covers the generic problem.

## Next Actions

### MUST

- **What:** Apply Edit 1 — insert the 3 example pairs from Component A (verbatim text in section 1 above) immediately after the existing "Template" example pair at `homegrown/protocols/conclude.md` line 73. The 3 pairs cover Probe section, Surface-Only Scanning failure mode, and Coarse Scan example shapes. After the edit, the example list contains 4 pairs total.
  - **Who:** User-confirmed surgical edit.
  - **Gate:** when the user confirms.
  - **Why:** Component A's 4 example shapes serve as the canonical example bank that Edit 2's discipline-level convention cross-references. Without Edit 1, Edit 2's cross-reference to "non-ambiguity principle for example shapes" points at only 1 example, which is insufficient pattern teaching for the 6 shorthand types.

- **What:** Apply Edit 2 — insert the generic first-use convention sentence (verbatim text in section 2 above) at the END of the SOLID INSTRUCTIONS section in each of the 5 discipline reference specs (`homegrown/explore/references/explore.md`, `homegrown/sense-making/references/sensemaking.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, `homegrown/td-critique/references/td-critique.md`). Identical text in all 5.
  - **Who:** User-confirmed surgical edit.
  - **Gate:** when the user confirms.
  - **Why:** Without Edit 2, future MVL+ runs continue to write internally-referential shorthand into discipline outputs (the working documents in `docarchive/`), which propagates into `finding.md` regardless of Component A at conclude.md. Edit 2's generic principle catches all 6 shorthand types at write-time.

- **What:** Apply Edit S-1 — update `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_state.md`. Set `Status` to `SUPERSEDED`. Append History entry pointing at this inquiry.
  - **Who:** Procedural state update.
  - **Gate:** simultaneous with Edit 2 application.
  - **Why:** Closes the prior wrongly-scoped finding cleanly; prevents future readers from applying the superseded narrow convention.

### COULD

(None this iteration. The 3 edits are the complete intervention.)

### DEFERRED

- **What:** Revive Component B from the original `2026-05-07_22-10` finding (the regex/checklist/remediation sub-section at conclude.md) as a fallback if the generic convention proves insufficient.
  - **Gate:** Observable — in next 3 MVL+ runs producing finding outputs with niche terms, ≥ 1 niche term slips through both the convention (at discipline level) AND Component A (at conclude.md) without first-use parenthetical context. If recurrence is observed, Component B revives despite its compute cost.
  - **Why (if revived):** A third layer of defense via mechanical scan accepts the compute load as the price of reduced recurrence rate; the user's constraint would need to be reconsidered against the observed failure rate.

- **What:** Extend the convention to cover Homegrown protocols and contracts (e.g., `homegrown/protocols/loop_diagnose.md`, `homegrown/contracts/alignment_control.md`) if observed shorthand types include references to these documents.
  - **Gate:** Observable — finding outputs contain bare references to protocol or contract documents on first use; the current 5-discipline-spec convention doesn't cover these references.
  - **Why (if revived):** The methodology library's surface area is broader than the 5 discipline reference specs; if the convention's coverage proves narrow in observed practice, extension is the natural next step.

- **What:** Add the convention to the runner-level preamble (e.g., `homegrown/MVL+/SKILL.md`) so it fires across ALL disciplines without per-discipline placement.
  - **Gate:** Observable — maintenance cost of 5-place identical-text propagation becomes problematic (e.g., the convention's wording needs to be updated and 5 specs require synchronized edits).
  - **Why (if revived):** Single-place placement reduces maintenance cost. Currently deferred because the placement convention prefers single canonical home (per spec) and 5-place identical-text is bounded.

## Reasoning

This finding refines the original `2026-05-07_22-10` finding (which diagnosed the internally-referential shorthand failure mode in finding.md outputs) and supersedes the prior `2026-05-08_06-30` finding (which proposed a wrongly-scoped narrow convention). The user's correction was direct: the non-ambiguity problem is generic, not narrow.

**Exploration** mapped the shorthand taxonomy. Six observed types: cross-spec references, within-discipline references, inquiry-coined terms, project-specific references, abbreviations, bare file paths. The prior `2026-05-08_06-30` convention targeted only type 1; the generic version targets all 6. Approach 1 (self-contained) and Approach 4 (cross-reference to Component A) emerged as viable; both ~45 words.

**Sensemaking** stabilized the answer through six Sense Versions. Five ambiguities collapsed: (1) Approach 4 chosen over Approach 1 (cross-reference cleaner per placement convention); (2) convention enumerates 4-5 type examples within the principle (not pure principle, which the prior failure shows is unreliable); (3) convention applies to all output the discipline produces; (4) placement at end of SOLID INSTRUCTIONS; (5) prior `2026-05-08_06-30` `_state.md` marked SUPERSEDED.

**Decomposition** partitioned the answer into 5 pieces (E1 Component A application; E2 generic convention; S-1 SUPERSEDES update; C-1 verification + composition; B-1 Component B rejection carried forward). All 7 self-evaluation dimensions PASS. The Determination-Mechanism Piece Check (a rule added to `homegrown/decompose/references/decompose.md` Step 7 in a prior sister inquiry — the inquiry that analyzed Decomposition for-sure-missing rules) was applied: the Q-tree has no load-bearing concept whose use depends on a runtime determination.

**Innovation** generated the concrete wording. All 7 mechanisms converged on a single-sentence generic convention with illustrative type examples and a cross-reference to Component A's example bank. Five tests passed for E2's wording; final word count ~55 (5 over the 50-word target, justified by explicit type enumeration).

**Critique** evaluated against 10 dimensions. Verdict: SURVIVE. All 4 critical dimensions HIGH. Adversarial strength STRONG (10 prosecution objections including size inflation, judgment-dependence, project-specific examples; 12 defense rebuttals; the strongest prosecution survived defense). Self-Reference Collapse defended via 3-pronged grounding (empirical 7-chain corpus + 6-type taxonomy; cross-discipline dimensions extracted from sensemaking output; adversarial structure preserved).

**Significant kills:**

- **Pure principle without type enumeration.** Considered briefly. Rejected because the original `2026-05-07_22-10` principle was already pure ("define niche terms briefly on first use") and it failed under embedded-vocabulary conditions. The 5 illustrative type examples in Edit 2 are the corrective.

- **Self-contained convention with examples baked in.** Considered as Approach 1 in Exploration. Rejected because duplicating examples in 5 specs creates a maintenance hazard. Approach 4's cross-reference to Component A's canonical example bank is structurally cleaner.

- **Component B from the original `2026-05-07_22-10` finding.** Carried forward as REJECTED with 4 structural reasons preserved. The original finding's intent (catch ambiguous references at compile-time via mechanical scan) is replaced by source-side prevention (Edit 2 at disciplines) + lightweight pattern teaching (Edit 1 at conclude.md).

- **Per-discipline customized wording.** Considered (each discipline gets its own wording). Rejected because customizing per-discipline triples maintenance cost. Identical text in 5 specs is the correct shape.

- **Triple placement** (discipline + conclude + runner preamble). Rejected per the placement convention's single-canonical-home principle.

- **Embedded glossary in each spec.** Heavy. Rejected.

- **Within-discipline term coverage explicitly excluded.** Considered as a narrowing. Rejected because the generic principle naturally covers within-discipline references when context isn't obvious; explicit exclusion would create a gap.

**Survivors that held:**

- **The generic single-sentence convention** at the end of SOLID INSTRUCTIONS in each of the 5 discipline reference specs. Held because (a) generic principle covers all 6 shorthand types via one rule; (b) 5 illustrative type examples ground the recognition; (c) cross-reference to Component A's example bank is structurally cleaner than self-contained duplication; (d) write-time prevention is structurally lighter than check-time enforcement; (e) the convention catches all 6 types at write-time per the verification table.

- **Component A from the original finding** (the 4 expanded examples at conclude.md). Held because it provides the example bank Edit 2 cross-references; it's already lightweight; it teaches pattern recognition for residual cases at compile-time.

- **Component B rejection** (carried forward). Held because the 4 structural reasons remain valid; the user's explicit constraint is preserved; source-side prevention obviates destination-side scan.

- **SUPERSEDES marker** on prior `2026-05-08_06-30` finding. Held because two competing conventions in the corpus would confuse future readers; SUPERSEDED is the corpus convention for replaced findings.

**Why this is the right shape:**

The intervention covers the generic problem (6 shorthand types) at the lightweight floor (one sentence per discipline; ~5-8 lines × 5 specs; no per-output scan). The prior narrow scope covered 1/6 at ~5 lines (much smaller per-file but missed 5/6 categories). The generic version covers 6/6 at ~35-55 lines aggregate (~6-9 lines per type covered). Per-case cost dramatically lower; total cost still bounded.

## Open Questions

### Monitoring

- **Effective firing of the generic convention in the next 3 MVL+ runs producing finding outputs with niche terms.** Observable in the resulting `docarchive/` (do discipline outputs name sources on first use?) and in the resulting `finding.md` (are niche terms disambiguated?). If the convention fires correctly at all 3 runs, the refinement is validated.

- **Component A's effectiveness for residual cases.** If 1+ niche terms slip through the convention at the discipline level (the discipline output didn't apply it on a borderline case), does Component A's 4-example pattern teaching catch it during CONCLUDE compilation? Observable in the `finding.md` output.

- **Whether all 6 shorthand types fire correctly.** Track per-type observations across the next 3-5 MVL+ runs. If any type is consistently missed, refine the convention's illustrative examples.

### Refinement Triggers

- **Component B revival trigger.** If the convention + Component A together fail to catch niche-term ambiguity in the next 3 MVL+ runs (≥ 1 niche term slips through both layers without first-use parenthetical), revive Component B's mechanical regex check at conclude.md. The user's constraint about overload would need to be reconsidered against the observed failure rate.

- **Type enumeration extension.** If a 7th distinct shorthand type emerges in observed outputs (a type not covered by the current 5 illustrative examples in Edit 2), extend the convention's example list. The principle ("any niche term") covers automatically; the example list extends to keep concrete recognition cues current.

- **Within-discipline coverage tightening.** If the convention over-fires on within-discipline references where context is obvious (false positives), tighten the trigger to "when context isn't obvious." Currently the principle's "niche term" qualifier is expected to handle this naturally.

- **Coverage extension to other Homegrown spec types.** If observed shorthand types include references to Homegrown protocols (`homegrown/protocols/`) or contracts (`homegrown/contracts/`), extend the convention's enumeration. Currently the convention focuses on the 5 discipline reference specs; extending to other specs is deferred until evidence accumulates.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

in devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md

the original question/query was 

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

and it is disucussing clearly about how to make this non ambiguity edit better, however

devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md           

is talking about small edits to disciplines and only regarding referring to other discipline text references, which is incredibley narrow scoped and wrong goal.  Our nonambiguity problem is generic and not onlt relevant to referring other discipine text, 

so do another loop 

it should acknowledge 

[the 3 example pairs]

is good solution and should be added. And then it sohuld talk about what can be done in individiaul discipine texts to prvent ambuguity from their end ..
```

</details>
