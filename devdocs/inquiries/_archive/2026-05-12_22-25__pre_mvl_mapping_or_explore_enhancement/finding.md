---
status: active
continues_from: devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md
continues_from: devdocs/inquiries/2026-05-12_22-05__context_as_absolute_category_errors_deep_dive/finding.md
related: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/docarchive/finding_iter1.md
related: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/finding.md
related: devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/finding.md
related: devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/finding.md
---

# Finding (Iteration 2): Canonical-source surfacing belongs at THREE layers — GENERIC version covering any project entity, not just disciplines

## Changes from Prior

This is iteration 2 of the same inquiry. Iteration 1's `finding.md` is archived at `docarchive/finding_iter1.md`.

**Prior path (archived):** `devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/docarchive/finding_iter1.md`

**Revision trigger:** User correction. After iteration 1 concluded, the user wrote: *"what we are discussing was not about disciplines etc, it is a generic problem which occur during we were talking about disciplines... and your suggested edit is a bloat bc it is usecase specific."*

The user is correct. Iteration 1's proposed spec drafts were discipline-specific (phrases like "the inquiry analyzes a discipline X"; paths like `homegrown/<discipline>/references/<discipline>.md`). The problem the inquiry addresses — canonical-source content missed from the working context — applies to ANY project entity with a canonical authoritative source, not just disciplines. The discussion happened during discipline-analysis, but the pattern is wider.

**What's preserved (from iteration 1).** The structural conclusion — that canonical-source surfacing belongs at THREE complementary layers — survives. The project precedent (`navigation_context_intake.md` + warmup files) is still the structural anchor for the architectural framing. LOOP_DIAGNOSE's Candidate A is still Layer 2's basis. The bundled-MUST adoption pattern + deferred-broader-protocol-as-research-frontier separation is preserved.

**What's changed.** All three layers' spec drafts are GENERICIZED: replace "discipline" with "any project entity" (covering disciplines, protocols, runners, configurations, code modules, prior findings, or any other artifact with a canonical authoritative source). Example paths are listed in each layer's text as illustrative — NOT restrictive — so future readers identify common cases without the spec being tied to specific entity-types. The deferred broader protocol's first category is renamed from "discipline-analysis" to "entity-analysis" for the same generality.

**What's new.** Two additions beyond the corrected layer texts:
1. An explicit observation that iteration 1's drafts committed the specific-vs-pattern recognition cue failure that `/sense-making`'s Phase 3 spec already addresses (the rule exists; iter-1 didn't apply it to the recommended fix).
2. A COULD candidate: small wording refinement to `/sense-making`'s Phase 3 specific-vs-pattern recognition cue extending it to cover "recommended fix being too specific to observed cases" — not just "problem concept being too specific" (which the existing rule covers).

**Migration.** Same bounded scope as iteration 1: ~25-35 lines additive across `/MVL+` SKILL + `/explore` spec, with the generic phrasing replacing the discipline-specific phrasing. The COULD candidate adds ~8 lines to `/sense-making` spec (optional adoption). Iter-1 finding stays archived as historical reference.

---

## Question

From `_branch.md` + iteration 1 trigger: *Iter-1's failure was that `/navigate`'s canonical spec was never loaded into the working context. Is this a `/explore` failure, do MVL+ loops need a pre-loop mapping step, or is protocol-level Candidate A sufficient?*

Iteration 2's added context (user correction): the problem is GENERIC — canonical anchors missed for ANY project entity, not just disciplines. Iteration 1's fix was too narrow.

Goal: structurally-grounded recommendation that covers all entity types + acknowledges iter-1's meta-failure.

---

## Finding Summary

- **The pattern is generic, not discipline-specific.** Canonical-source content can be missed for any project entity with a canonical authoritative source: a discipline, a protocol, a runner, a configuration, a code module, a prior finding, or any other artifact. Iteration 1's discipline-specific framing was bloat — the spec drafts mentioned "discipline" explicitly when the actual rule should reference any project entity. The user correction directly fixes this.

- **The structural conclusion — 3 complementary layers — stays.** The shape of the fix is sound; only the entity-specific phrasing was wrong. Each layer catches at a different stage (author / protocol / discipline) and is bounded.

- **Generic Layer 1 (inquiry-author level):** update `/MVL+` SKILL's "If NEW" section so `_branch.md` template requires a "Required canonical loads" section listing canonical sources for any project entity the inquiry analyzes. Example paths illustrate common locations (discipline canonical specs, protocol files, runner SKILL.md, configuration docs) without restricting the rule to those types.

- **Generic Layer 2 (protocol level):** add to `/MVL+`'s Discipline Workspace Invariant a mandate that the canonical source for any analyzed entity is loaded in full into working context before disciplines run. Same generic phrasing; same example paths as Layer 1. Default-to-load when unclear whether something is being "analyzed."

- **Generic Layer 3 (discipline level):** add a refinement note to `/explore`'s spec §1.1 verb-meaning clarifying that purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing the structure of any project entity. Aligns `/explore`'s implicit purposive commitment with explicit text.

- **Iteration 1 committed a specific-vs-pattern recognition cue failure that `/sense-making`'s spec already addresses.** `/sense-making`'s Phase 3 refinement note (Specific-vs-pattern recognition cue) says: "When Sensemaking commits to a key concept built from a small set of specific examples, the ambiguity-collapse pair MUST ask: are these specific examples THE WHOLE PROBLEM, or just a few cases of a wider pattern?" Iteration 1's sense-making should have applied this rule to the recommended fix ("is canonical-spec-loading for disciplines the whole problem, or just one case of canonical-loading for any analyzed entity?") but didn't. The fix is application discipline — the rule already exists.

- **COULD candidate: small wording refinement to `/sense-making` Phase 3.** Optionally extend the existing specific-vs-pattern recognition cue so it explicitly applies to "recommended fix being too specific to observed cases," not just "problem concept being too specific to observed cases." Bounded (~8 lines added to `/sense-making` spec). Helps future loops apply the rule to recommendations, not just to problem-framings.

- **All three layers stay MUST, bundled adoption.** Total ~25-35 lines additive across `/MVL+` SKILL + `/explore` spec, same bounded scope as iteration 1. The broader `mvl_context_intake.md` protocol remains research-frontier (deferred to a separate inquiry; revival trigger unchanged: 2+ additional context-intake-failure cases beyond canonical-source-loading observed).

- **The broader protocol's first category is renamed** from "discipline-analysis" to "entity-analysis" — the same generalization applied to the deferred sketch.

- **This finding might be wrong.** The same loop that produced iteration 1's discipline-specific bloat is producing iteration 2. External grounding via the user correction + the existing `/sense-making` Phase 3 rule + the navigation_context_intake precedent protects against most self-reference collapse but does not eliminate it. Iteration 3 invited if further error is observed.

---

## Finding

### Surrounding context

`/MVL+` is the project's primary cognitive-loop runner. The recent inquiry thread surfaced a failure pattern: iteration 1 of the 19-43 inquiry produced a wrong commitment because the canonical `/navigate` spec was never loaded into the working context. The 20-31 LOOP_DIAGNOSE diagnosed this as a context-elicitation gap and recommended Candidate A (protocol-level canonical-spec-loading).

This inquiry's iteration 1 expanded that recommendation into a 3-layer fix (inquiry-author template + protocol level + `/explore` refinement note). The 3-layer structure was right, but iteration 1's spec drafts were discipline-specific — they explicitly mentioned "discipline" and discipline-canonical-spec paths. The user pointed out that the underlying problem is generic: canonical anchors can be missed for any project entity with a canonical authoritative source, not just disciplines. Iteration 1 made the specific-vs-pattern recognition cue mistake (the same `/sense-making` Phase 3 rule that iteration 1's loop should have applied).

Iteration 2 corrects the bloat by genericizing all three layers' spec drafts + observes the meta-failure for future-loop benefit.

### 1. Generic Layer 1 — Inquiry-author level

**Where:** `/Users/ns/.claude/skills/MVL+/SKILL.md` "If NEW" section.

**What:** require that the inquiry-author lists canonical sources for any project entity the inquiry analyzes.

**Proposed text (~10 lines, GENERIC):**

> *3a. After writing `_branch.md`, the inquiry-author MUST list canonical sources for any project entity the inquiry analyzes (a discipline, protocol, runner, configuration, code module, prior finding, or any other artifact with a canonical authoritative source). Format: add a "## Required canonical loads" section to `_branch.md` listing the absolute paths of canonical source files. Common locations include `homegrown/<discipline>/references/<discipline>.md` for disciplines, `homegrown/protocols/<protocol>.md` for protocols, `~/.claude/skills/<runner>/SKILL.md` for runners, plus configurations like `enes/desc.md`. The runner will load these into the working context before the first discipline runs. **Default to load when unclear** whether something is being "analyzed" — the cost is low; the benefit is catching context-elicitation gaps. This is the inquiry-author layer of the 3-layer defense-in-depth for canonical-source surfacing.*

### 2. Generic Layer 2 — Protocol level

**Where:** `/Users/ns/.claude/skills/MVL+/SKILL.md` Discipline Workspace Invariant section.

**What:** mandate canonical-source loading for any analyzed entity, regardless of whether Layer 1 was applied.

**Proposed text (~12 lines, GENERIC):**

> *6. **Canonical-source-loading for analyzed entities.** When the inquiry's `_branch.md` mentions or analyzes the structure of any project entity — a discipline, protocol, runner, configuration, code module, prior finding, or other artifact with a canonical authoritative source — the canonical source MUST be loaded in full into the working context before the first discipline runs. Common canonical-source locations: `homegrown/<discipline>/references/<discipline>.md` for disciplines; `homegrown/protocols/<protocol>.md` for protocols; `~/.claude/skills/<runner>/SKILL.md` for runners; `enes/desc.md`, `README.md`, and similar for configurations. When multiple entities are analyzed, load each. **Default to load when unclear** whether something is being "analyzed" — the cost is low; the benefit is catching context-elicitation gaps. Loading is necessary but not sufficient for consideration; downstream disciplines should reference the loaded canonical content explicitly in their outputs.*

### 3. Generic Layer 3 — Discipline level

**Where:** `homegrown/explore/references/explore.md` §1.1 verb-meaning, as a refinement note.

**What:** clarify that purposive surfacing includes canonical-anchor seeking for any analyzed entity.

**Proposed text (~8 lines, GENERIC):**

> *Refinement note (applies at §1.1 Verb-meaning):*
>
> ***Canonical-anchor seeking sub-aspect.** Purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing the structure of any project entity (a discipline, protocol, runner, configuration, code module, prior finding, or other artifact with a canonical authoritative source). The canonical authoritative source of the analyzed entity STANDS OUT as worth bringing into view via the relevance signal (§2.1). `/explore` should explicitly probe the canonical source's identity-defining content (typically the first ~30 lines) as a high-priority surfacing target. **Default to seek when unclear** whether the entity is being "analyzed."*

### 4. Iteration 1's meta-failure observation

Iteration 1 of this inquiry committed the specific-vs-pattern recognition cue failure that `/sense-making`'s Phase 3 spec already addresses. The existing rule says: when Sensemaking commits to a key concept built from a small set of specific examples, the ambiguity-collapse pair MUST ask whether those examples are the whole problem or just cases of a wider pattern. Iteration 1's sense-making should have applied this rule to the recommended fix:

- The observed case: canonical `/navigate` spec missed (a discipline).
- The wider pattern: canonical sources for any project entity can be missed.
- The recommended fix should have been GENERIC from the start.

The rule exists; iteration 1's loop didn't apply it. The fix is application discipline — better attention to the existing rule, not a new rule.

This is also a structural observation worth naming: the project has accumulated rules (per the 22-05 inquiry's Family A, Operation-Status Drift; per the 20-31 LOOP_DIAGNOSE's Candidate A) and the loop has accumulated patterns of NOT applying its own rules. Future loops should treat existing rules as load-bearing when their preconditions fire.

### 5. COULD candidate — extend `/sense-making` Phase 3 wording

Optionally, extend `/sense-making`'s Phase 3 specific-vs-pattern recognition cue to explicitly cover "recommended fix" cases:

**Proposed extension text (~8 lines added under the existing Phase 3 refinement note):**

> *Extension (applies to existing Phase 3 Specific-vs-pattern recognition cue):*
>
> The cue applies not only to "what the problem IS" concepts but ALSO to "what the FIX IS" recommendations. When Sensemaking commits to a recommended fix or maintenance candidate based on a specific observed case, the ambiguity-collapse pair MUST ask: is the recommended fix specific to the OBSERVED instances, or generic to a wider pattern? The strongest counter is: a fix that works for the observed cases may miss similar cases at the same structural level but with different surface details. Example: if the observed instance is canonical-spec missed for a discipline, the wider pattern is canonical-source missed for any entity; the recommended fix should generalize.

**Status: COULD.** The existing rule covers "what the problem IS"; the extension covers "what the FIX IS." Whether the extension is needed (or whether the existing rule's text is sufficient for diligent application) is user-decision tier.

### 6. Broader protocol category rename

The deferred broader `mvl_context_intake.md` protocol's first category is renamed from "discipline-analysis" to "entity-analysis." All other elements of the deferred sketch (other categories, routing logic, activation trigger) are unchanged.

### 7. This finding might be wrong

The same `/MVL+` loop that produced iteration 1's discipline-specific bloat is producing iteration 2's correction. External grounding via the user correction + the existing `/sense-making` Phase 3 rule + the navigation_context_intake precedent protects against most self-reference collapse but does not eliminate it.

If a future user observation or analysis reveals that iteration 2's generic framing is itself wrong — for example, that "any project entity" is too broad and creates unintended loading burden, or that the iter-1 meta-failure observation is misframed — iteration 3 should follow the same self-correction pattern this thread has been applying.

Specifically watch for: whether "default to load when unclear" produces context-bloat in practice (each unclear case loads canonicals, possibly overwhelming the working context); whether the COULD `/sense-making` Phase 3 extension is needed or redundant; whether the broader protocol's "entity-analysis" category covers all observed entity-types.

---

## Next Actions

### MUST

- **What:** Adopt the iter-2 GENERIC 3-layer texts (replacing iter-1's discipline-specific drafts).
  - **Layer 1:** edit `/Users/ns/.claude/skills/MVL+/SKILL.md` "If NEW" section per the generic text above.
  - **Layer 2:** edit `/Users/ns/.claude/skills/MVL+/SKILL.md` Discipline Workspace Invariant section per the generic text above.
  - **Layer 3:** edit `homegrown/explore/references/explore.md` §1.1 per the generic text above.
  - **Who:** user (or maintainer).
  - **Gate:** none — adoption-ready.
  - **Why:** pattern is generic, not discipline-specific; iter-1's discipline-specific drafts were bloat per the user's correction.

### COULD

- **What:** Adopt the small `/sense-making` Phase 3 wording extension covering "recommended fix being too specific to observed cases."
  - **Who:** user.
  - **Gate:** user-preference; OR observed recurrence of the loop's "fix-too-specific" failure pattern in 2+ future inquiries despite the existing rule.
  - **Why:** explicit wording extension may help future loops apply the rule to recommendations, not just to problem-framings.

- **What:** Adopt the iter-2 layers incrementally (e.g., Layer 2 alone first, then Layers 1 and 3).
  - **Gate:** user-preference for incremental rollout.
  - **Why:** reduces per-increment risk.

### DEFERRED

- **What:** Sketch and adopt the broader `homegrown/protocols/mvl_context_intake.md` protocol (with renamed "entity-analysis" first category).
  - **Gate:** 2+ additional context-intake-failure cases beyond canonical-source-loading observed.
  - **Why (if revived):** generalizes Layer 2; matches project precedent (navigation_context_intake) at full scale.

- **All prior deferred items from this thread** remain active.

---

## Reasoning

### Why generic framing is right

Iteration 1's discipline-specific framing was bloat because the underlying problem (canonical sources missed from working context) doesn't depend on the entity being a discipline. Any project entity with a canonical authoritative source — discipline, protocol, runner, configuration, code module, prior finding — could be the missed entity in a future iter-1-style failure. Generic framing covers all observed and plausible cases without spec edits.

The user's correction is direct: "it is a generic problem which occur during we were talking about disciplines." The discussion context (analyzing `/navigate`) is not the same as the structural scope.

### Why iter-1 committed the specific-vs-pattern failure

`/sense-making`'s Phase 3 has a refinement note specifically for "Specific-vs-pattern recognition cue" — when committing to a key concept built from a small set of specific examples, ask whether those examples are the whole problem or just instances of a wider pattern. Iter-1's sense-making should have applied this rule:

- Observed: canonical `/navigate` spec missed in iter-1 of 19-43.
- The loop committed: "the problem is canonical-spec-loading for disciplines; fix is discipline-specific."
- The wider pattern check should have asked: "is canonical-spec-loading for disciplines the whole problem, or just one case of canonical-loading for any entity with a canonical source?"

Iter-1 didn't apply the check. The fix is application discipline, not a new rule. The `/sense-making` Phase 3 COULD extension above is a small wording strengthening to help future loops apply the rule to recommendations, but the existing rule already covers the principle.

### Why the 3-layer structure stays

Iteration 1's analysis of the 3-layer structure (author / protocol / discipline catches at different stages with bounded per-layer cost) is sound. Iteration 2's correction is at the entity-type-phrasing level, not at the layer-count level.

### Why "this might also be wrong"

The same `/MVL+` loop that produced iteration 1's bloat is producing iteration 2's correction. The loop's track record this session is mixed (multiple corrections). External grounding (user correction; existing `/sense-making` rule; project precedent) reduces self-reference risk but doesn't eliminate it.

### Killed candidates

| Candidate | Reasoning |
|---|---|
| Iter-1's discipline-specific drafts | User correction; bloat |
| "Any analyzed artifact" / "any subject" phrasing | Less project-natively grounded than "any project entity" |
| Restrictive entity-type list | Would re-introduce bloat |
| New `/sense-making` rule (rather than wording extension) | The existing rule covers the principle; application discipline is the fix |

---

## Open Questions

### Monitoring

- **Does "default to load when unclear" produce context-bloat in practice?** Watch for cases where many uncertain "is this entity being analyzed?" calls trigger heavy canonical-loading. *Observable after:* 3 or more iter-2-adopting inquiries.

- **Does the loop apply the `/sense-making` Phase 3 specific-vs-pattern rule to recommended fixes in future inquiries?** Watch for iter-1-style failures recurring despite the existing rule. *Observable after:* 2 or more inquiries that surface fixes from observed cases.

- **Does the broader protocol's "entity-analysis" category cover all observed entity-types?** Watch for entity-types not anticipated. *Observable after:* the broader protocol is activated.

### Refinement Triggers

- **Activate the `/sense-making` Phase 3 COULD wording extension** if 2 or more future inquiries commit the "fix-too-specific" pattern despite the existing rule.

- **Activate the broader `mvl_context_intake.md` protocol** if 2 or more additional context-intake-failure cases beyond canonical-source-loading are observed.

- **Revert to iter-1's discipline-specific framing** if iter-2's generic framing produces "any project entity" confusion in practice.

### Research Frontiers

- Cross-discipline application of the specific-vs-pattern recognition cue — does the rule apply equally to `/innovate`'s seed-to-fix generalization? `/td-critique`'s candidate-to-verdict generalization? Worth a separate inquiry.

- Project-wide failure-mode catalog consolidating the recognition-cue rules (per the 22-05 inquiry's deeper-pattern research-frontier).

### Blocked

- *None.*

---

## Source Input

<details>
<summary>Raw user input for iteration 2</summary>

```text
/MVL+


in devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/finding.md

you said 


> *3a. After writing `_branch.md`, the inquiry-author MUST list canonical-spec sources for any discipline(s) the inquiry analyzes. Format: add a "## Required canonical-spec loads" section to `_branch.md` listing the absolute paths of canonical spec files (e.g., `/Users/ns/Desktop/projects/native/homegrown/<discipline>/references/<discipline>.md`)
*Catch cases:** any inquiry-author who knows their inquiry will analyze a discipline lists the canonical sources at creation time. Catches at the earliest possible stage.

but what we are discussing was not about discipines etc, it is a generic problem which occur during we were talking about disciplines... 

and your suggested edit is a bloat bc it is usecase specific...
```

</details>

<details>
<summary>Raw user input for iteration 1 (preserved for cross-reference)</summary>

```text
/MVL+


in 
devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md
u said 

Context elicitation (stage 1). The canonical /navigate spec's identity-defining content (homegrown/navigation/references/navigation.md lines 16-29) was not loaded into iteration 1's working context. Evidence: grep across all 5 iter-1 archived outputs for "ONE structural operation" / "Decision-making" / "Navigation is not" returned ZERO matches.


thats a huge issue, and it is because explore did not surface this information? ...
```

</details>
