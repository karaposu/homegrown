---
status: active
continues_from: devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md
continues_from: devdocs/inquiries/2026-05-12_22-05__context_as_absolute_category_errors_deep_dive/finding.md
related: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/docarchive/finding_iter1.md
related: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/finding.md
related: devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/finding.md
related: devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/finding.md
---

# Finding: Canonical-anchor surfacing belongs at THREE complementary layers (author + protocol + discipline); broader mvl_context_intake protocol is a research-frontier separate inquiry

## Question

From `_branch.md`: *Iter-1's failure was that `/navigate`'s canonical spec — a highly-relevant and obvious file — was never loaded into the working context. Is this a `/explore` failure (purposive surfacing missed an obvious anchor)? Do MVL+ loops need a separate pre-loop "mapping" step (analogous to a mapping done by /explore, or by some other mechanism)?*

Goal: locate canonical-anchor surfacing responsibility (in /explore, in a new pre-MVL+ context-mapping step, in protocol-level Candidate A from LOOP_DIAGNOSE, or some combination); specify mechanism + adoption.

---

## Finding Summary

- **Critical discovery during exploration: the project ALREADY has a precedent for the user's intuited "pre-discipline mapping step."** `homegrown/protocols/navigation_context_intake.md` exists as a Navigation Context Router protocol; it routes to warmup files at `homegrown/navigation/warmup/` (5 files). The pattern — "decide context-intake before discipline runs" — is established for `/navigation` but absent for `/MVL+`. The user's intuition correctly identifies a structural gap.

- **Canonical-anchor surfacing belongs at THREE complementary layers, not one.** Each layer catches the failure at a different stage of the loop lifecycle. Together they form defense-in-depth without redundancy because each layer plugs a different hole.

  - **Layer 1 — Inquiry-author level.** Update `_branch.md` template (in `/MVL+`'s "If NEW" section) to require listing canonical-spec sources for any discipline(s) the inquiry analyzes. Catches at inquiry creation: proactive.

  - **Layer 2 — Protocol level (= LOOP_DIAGNOSE Candidate A).** Add to `/MVL+`'s Discipline Workspace Invariant: when an inquiry mentions or analyzes a discipline X, the canonical spec at `homegrown/X/references/X.md` MUST be loaded in full into the working context before disciplines run. Catches at workspace setup: enforcement-level backstop regardless of inquiry-author discipline.

  - **Layer 3 — Discipline level.** Add a refinement note to `/explore`'s spec §1.1 verb-meaning clarifying that purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing a discipline. Catches during execution: discipline-level commitment makes `/explore`'s implicit purposive-canonical relevance explicit.

- **Each layer catches different failure cases, justifying the 3-layer adoption:**
  - If inquiry-author forgets to list canonicals → Layer 2 enforces.
  - If inquiry doesn't explicitly mention a discipline name (Layer 2's trigger) → Layer 3's purposive-surfacing-includes-canonical catches at execution.
  - If both Layers 1 and 2 miss → Layer 3 catches.
  - If Layer 3 drifts (e.g., /explore implementation drifts from its purposive commitment) → Layers 1 and 2 protect.

- **Bundled adoption as MUST.** All 3 layers together. Total ~25-35 lines of additive edits across two files (`/Users/ns/.claude/skills/MVL+/SKILL.md` for Layers 1 and 2; `homegrown/explore/references/explore.md` for Layer 3). No existing behavior changes; backward-compatible.

- **The broader mvl_context_intake.md protocol is RESEARCH-FRONTIER, deferred to a separate inquiry.** Following the navigation_context_intake precedent, a parallel `homegrown/protocols/mvl_context_intake.md` would route per inquiry-type (discipline-analysis / cross-finding-inheritance / standalone / continuation) and generalize Candidate A to cover more context-intake-failure cases. Revival trigger: 2+ additional context-intake-failure cases beyond canonical-spec-loading observed (e.g., cross-finding-inheritance authority confusions; missing project-config context for end-goal-touching inquiries).

- **/explore is not at fault per its current spec, but the spec is implicit on canonical-anchor seeking; Layer 3 makes it explicit.** `/explore`'s verb-meaning ("purposive open-mode surfacing") implicitly commits to canonical-anchor relevance via the "relevance signal type" (purpose-biased attention biases what stands out as relevant). The iter-1 failure was that /explore didn't apply this commitment to the canonical /navigate spec. Layer 3's refinement note states the commitment explicitly: when an inquiry analyzes a discipline, the discipline's canonical spec stands out as worth bringing into view. The refinement aligns the spec with its implicit purposive intent.

- **The 3-layer recommendation honors the user's question fully.** The user asked: "(a) explore should have caught it; OR (b) we need a mapping step." Both readings are answered:
  - (a) Layer 3 — /explore's spec is enhanced to explicitly commit to canonical-anchor surfacing.
  - (b) Layer 2 — protocol-level Candidate A IS the mapping step (loading canonicals before disciplines run).
  - Plus Layer 1 — _branch.md authoring suggests canonicals proactively.

---

## Finding

### Surrounding context

`/MVL+` is the project's primary cognitive-loop runner. The recent inquiry thread observed a failure pattern (iter-1 of the 19-43 inquiry) where `/navigate`'s canonical spec identity-defining content was never loaded into the working context — the LOOP_DIAGNOSE finding's smoking-gun grep showed zero matches for three identity-defining phrases across all 5 iter-1 archived outputs. The user pointed out that this canonical content was not random; it was the most highly-relevant and most obvious file for the inquiry. `/explore` should have surfaced it; it didn't.

This inquiry explored where the responsibility for canonical-anchor surfacing should sit: in `/explore` (enhanced), in a new pre-`/MVL+` context-mapping step, in protocol-level Candidate A (already recommended by LOOP_DIAGNOSE), or some combination.

A critical discovery during exploration's boundary-discovery sub-phase: the project ALREADY has the pattern the user is intuiting, but only for `/navigation` — `homegrown/protocols/navigation_context_intake.md` is a Navigation Context Router that decides context-intake before `/navigation` runs, with 5 warmup files at `homegrown/navigation/warmup/`. The asymmetry (`/navigation` has context-intake; `/MVL+` doesn't) is the structural gap the user's question pointed at.

### 1. The 3-layer recommendation

The fix has three complementary layers, each operating at a different stage of the loop lifecycle and catching different failure cases.

#### Layer 1 — Inquiry-author level (proactive)

**Where:** `/MVL+` SKILL's "If NEW" section, after _branch.md is written.

**What:** require that the inquiry-author lists canonical-spec sources for any discipline(s) the inquiry analyzes, in a "Required canonical-spec loads" section of `_branch.md`.

**Proposed text (~10 lines added to `/MVL+` SKILL's "If NEW" section):**

> *3a. After writing `_branch.md`, the inquiry-author MUST list canonical-spec sources for any discipline(s) the inquiry analyzes. Format: add a "## Required canonical-spec loads" section to `_branch.md` listing the absolute paths of canonical spec files (e.g., `/Users/ns/Desktop/projects/native/homegrown/<discipline>/references/<discipline>.md`). The runner will load these into the working context before the first discipline runs. This is the inquiry-author layer of the 3-layer defense-in-depth for canonical-anchor surfacing; complementary to the protocol-level enforcement (Discipline Workspace Invariant item 6 below) and the discipline-level commitment in /explore's purposive-surfacing framing (cross-reference: `homegrown/explore/references/explore.md` §1.1).*

**Catch cases:** any inquiry-author who knows their inquiry will analyze a discipline lists the canonical sources at creation time. Catches at the earliest possible stage.

#### Layer 2 — Protocol level (enforcement-backstop)

**Where:** `/MVL+` SKILL's Discipline Workspace Invariant section, as a new item.

**What:** mandate canonical-spec-loading when an inquiry mentions or analyzes a discipline, regardless of whether Layer 1 was applied. This is LOOP_DIAGNOSE Candidate A.

**Proposed text (~12 lines added to `/MVL+` SKILL's Discipline Workspace Invariant section):**

> *6. **Canonical-spec-loading for analyzed disciplines.** When the inquiry's `_branch.md` mentions a discipline X by name (e.g., `/X` or "X discipline") OR otherwise analyzes X's structure / operations / components / canonical-spec content, the canonical spec at `homegrown/X/references/X.md` MUST be loaded in full into the working context before the first discipline runs. When the inquiry mentions multiple disciplines, load each named discipline's canonical spec. If unclear whether the inquiry "analyzes X's structure," default to load — the cost is low; the benefit is catching context-elicitation gaps. Loading is necessary but not sufficient for consideration; downstream disciplines should reference the loaded canonical content explicitly in their outputs. Cross-reference: Layer 1 (inquiry-author level in "If NEW" section) suggests canonical sources at inquiry-creation; this layer (protocol level) enforces loading at workspace setup. Layer 3 (`/explore`'s §1.1 refinement note) clarifies that purposive surfacing includes canonical-anchor seeking at the discipline-execution stage.*

**Catch cases:** any inquiry that mentions a discipline by name (or analyzes its structure) regardless of whether Layer 1 listed it. Protocol enforcement; doesn't rely on inquiry-author discipline.

#### Layer 3 — Discipline level (execution-time commitment)

**Where:** `/explore`'s canonical spec at `homegrown/explore/references/explore.md`, §1.1 verb-meaning, as a refinement note.

**What:** clarify that purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing a discipline.

**Proposed text (~8 lines added as a refinement note under §1.1 verb-meaning):**

> *Refinement note (applies at §1.1 Verb-meaning):*
>
> ***Canonical-anchor seeking sub-aspect.** Purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing a discipline (or other artifact with a canonical authoritative spec). The canonical specs of disciplines referenced in the inquiry STAND OUT as worth bringing into view via the relevance signal (§2.1). When an inquiry mentions discipline X, `/explore` should explicitly probe `homegrown/X/references/X.md`'s identity-defining content (typically the first ~30 lines containing the discipline's verb-meaning, NOT-list, and core operations) as a high-priority surfacing target. This sub-aspect is part of `/explore`'s discipline-level layer in the 3-layer defense-in-depth for canonical-anchor surfacing (cross-reference: `/MVL+` SKILL Discipline Workspace Invariant item 6; `_branch.md` template's "Required canonical-spec loads" section).*

**Catch cases:** any `/explore` execution where the inquiry's purpose involves analyzing a discipline, regardless of whether Layers 1 and 2 successfully loaded the canonical at workspace setup. Discipline-level execution commitment.

### 2. Why three layers, not one

The 3-layer structure is defense-in-depth because each layer catches different cases:

| Failure case | Layer 1 catch? | Layer 2 catch? | Layer 3 catch? |
|---|---|---|---|
| Author lists canonical → loaded → /explore uses | YES | (already loaded) | (already loaded) |
| Author forgets → inquiry mentions discipline name | NO | YES | (loaded; /explore uses) |
| Author forgets AND inquiry doesn't mention discipline name explicitly (e.g., conceptual question that turns out to require canonical) | NO | NO (no trigger) | YES (/explore seeks canonical during execution if territory involves analyzing a discipline) |
| All three layers miss (rare; would require Layer 3 to drift from its commitment too) | NO | NO | NO — recurrence requires future iteration |

Three layers, three different catch points. Defense-in-depth without redundancy.

### 3. The 3 layers fit project precedent

The project already has the pattern at the `/navigation` level: `homegrown/protocols/navigation_context_intake.md` + warmup files. The pattern is: "pre-discipline context-intake routing + per-route warmup procedures." The 3-layer recommendation for `/MVL+` mirrors this pattern in a smaller, more bounded form for the specific canonical-spec-loading case.

The broader mvl_context_intake.md protocol (Section 5 below) would fully analogize the pattern. It's deferred to a separate inquiry because the immediate 3-layer fix handles the observed case class.

### 4. Bundled adoption as MUST

All three layers should be adopted together. Total ~25-35 lines of additive edits across two files:
- `/Users/ns/.claude/skills/MVL+/SKILL.md` — Layers 1 and 2 (~22-27 lines).
- `homegrown/explore/references/explore.md` — Layer 3 (~8 lines).

Backward-compatible: no existing behavior changes. All edits are additive. Existing inquiries continue to work; new inquiries get the new protections.

### 5. The deferred broader protocol — sketched, not adopted

The broader protocol `homegrown/protocols/mvl_context_intake.md` (analogous to existing `homegrown/protocols/navigation_context_intake.md`) is RESEARCH-FRONTIER, deferred to a separate inquiry. Sketched here:

**Skeleton (preliminary; refine when activated):**

> # MVL_CONTEXT_INTAKE — Context-intake protocol for MVL+ inquiries
>
> Routes pre-discipline context-intake per inquiry-type, analogous to `navigation_context_intake.md`.
>
> **Input Classification:**
> ```yaml
> inquiry_type: discipline-analysis | cross-finding-inheritance | standalone | continuation
> analyzed_disciplines: [/X, /Y, ...]
> inherited_findings: [path1, path2, ...]
> project_context_needed: yes | no | unknown
> prior_inquiry_thread: present | absent
> ```
>
> **Routing Table:**
> - **discipline-analysis** → load canonical spec of each analyzed discipline. (Generalizes Layer 2.)
> - **cross-finding-inheritance** → load each inherited finding + canonical specs of disciplines it commits structure for. Check inherited claims against canonicals.
> - **standalone** → minimal context-intake; _branch.md only.
> - **continuation** → load predecessor inquiry's finding.md + this inquiry's _branch.md.

**Activation trigger:** 2+ additional context-intake-failure cases beyond canonical-spec-loading observed (e.g., cross-finding-inheritance authority confusions; missing project-config context for end-goal-touching inquiries).

**Why deferred:**
- The immediate 3-layer fix handles the OBSERVED failure case class (canonical-spec-loading for discipline-analysis).
- The broader protocol's routing categories are preliminary; refinement requires more observed cases.
- Larger scope (~80-150 lines) for a new protocol file + potential warmup directory; better to scope as its own inquiry.

The deferred broader protocol's existence as a research-frontier item is itself valuable — it names the next architectural step without committing to it before observation justifies it.

### 6. The user's question fully answered

The user asked two things:
1. **Is this a `/explore` failure?** PARTIALLY. `/explore`'s spec implicitly commits to canonical-anchor relevance via its "purposive open-mode surfacing" verb-meaning + the "relevance signal type." Iter-1's failure was that the loop running `/explore` didn't apply this implicit commitment. Layer 3's refinement note makes the commitment explicit.
2. **Do MVL+ loops need a separate pre-loop mapping step?** YES — that's Layer 2 (Candidate A) at the immediate-fix scope; the broader mvl_context_intake.md protocol (research-frontier) is the full architectural realization analogous to `navigation_context_intake.md`.

Both readings are honored by the 3-layer approach. The user's intuition is structurally correct AND aligns with existing project precedent.

### 7. This finding might be wrong

The same `/MVL+` loop that has been corrected multiple times this session is producing this finding. External grounding (project precedent navigation_context_intake; iter-1 artifact evidence; /explore + /MVL+ canonical specs) protects against most self-reference collapse, but does not eliminate it.

If a future user observation or analysis reveals an error in the 3-layer recommendation — for instance, that Layer 3 actually overreaches /explore's scope, or that Layer 1 + Layer 2 alone are sufficient — iteration N should follow the same self-correction pattern this thread has applied.

Specifically watch for:
- Whether Layer 3's spec note actually changes `/explore`'s execution behavior in practice (or if it's cosmetic).
- Whether the 3-layer adoption produces spec-bloat over time.
- Whether the deferred broader protocol's 4-category routing turns out to be the wrong decomposition when activation triggers.

---

## Next Actions

### MUST

- **What:** Adopt the 3-layer recommendation as a bundled change.
  - **Layer 1:** edit `/Users/ns/.claude/skills/MVL+/SKILL.md` "If NEW" section per the proposed text above (~10 lines added).
  - **Layer 2:** edit `/Users/ns/.claude/skills/MVL+/SKILL.md` Discipline Workspace Invariant section per the proposed text above (~12 lines added).
  - **Layer 3:** edit `homegrown/explore/references/explore.md` §1.1 verb-meaning section per the proposed text above (~8 lines added as a refinement note).
  - **Who:** user (or maintainer authorized to edit homegrown/ and skills).
  - **Gate:** none — adoption-ready; user has decision authority on whether to bundle or adopt incrementally.
  - **Why:** 3 layers catch the failure at different stages; each is bounded; combined cost ~25-35 lines additive; matches project precedent (navigation_context_intake).

### COULD

- **What:** Adopt the layers incrementally rather than bundled. For example: Layer 2 alone first (since Candidate A was already recommended); add Layers 1 and 3 after observing Layer 2's adoption stabilizes.
  - **Gate:** user-preference for incremental rollout; OR observed Layer 2 stabilization before adding Layers 1 and 3.
  - **Why:** smaller adoption increments reduce risk per increment.

### DEFERRED

- **What:** Sketch and eventually adopt the broader `homegrown/protocols/mvl_context_intake.md` protocol analogous to `navigation_context_intake.md`.
  - **Gate:** 2+ additional context-intake-failure cases beyond canonical-spec-loading observed (e.g., cross-finding-inheritance authority confusions; missing project-config context for end-goal-touching inquiries).
  - **Why (if revived):** generalizes Layer 2; matches project precedent at full scale; supports future autonomy needs (autonomous loops at L3+ require systematic context-intake).

- **What:** Update the 22-05 finding's "Family A — Operation-Status Drift" recommendation to cross-reference this finding's Layer 3 (/explore note).
  - **Gate:** when the 22-05 finding's recommendations are applied to /sense-making, simultaneously apply this finding's Layer 3 to /explore.
  - **Why:** the two findings produce complementary spec edits (sensemaking gets failure mode #7; /explore gets canonical-anchor-seeking refinement note).

- **All prior deferred items from this thread** remain active.

---

## Reasoning

### Why all three layers, not one

The 3-layer recommendation was tested adversarially during critique. The strongest counter ("3 layers is over-engineering; Layer 2 alone suffices") failed on structural grounds: each layer catches different failure cases (see the failure-case table in Section 2). If only Layer 2 were adopted:
- An inquiry whose `_branch.md` doesn't mention a discipline name explicitly (but the inquiry turns out to require canonical knowledge) would slip through Layer 2's trigger.
- The author's proactive listing (Layer 1) would not be encouraged.
- `/explore`'s implicit commitment (Layer 3) would stay implicit and could drift.

Defense-in-depth with bounded per-layer cost is structurally cleaner than single-layer protection.

### Why deferred broader protocol

The broader `mvl_context_intake.md` protocol is the natural full analog of `navigation_context_intake.md`. But:
- Its 4 routing categories are preliminary; refinement requires more observed cases.
- Adopting it now without observation would over-specify based on the one observed case (canonical-spec-loading).
- The 3-layer immediate fix handles the observed case; the broader protocol's value emerges with more diverse cases.

Research-frontier deferral with explicit revival trigger preserves the option without committing prematurely.

### Why Layer 3 (/explore note) is bounded

Layer 3's spec note (~8 lines) might seem small, but it serves a specific structural purpose: it aligns `/explore`'s spec with its implicit commitment via "purposive." Without Layer 3, `/explore`'s spec stays implicit on canonical-anchor seeking, and future `/explore` implementations might drift (as iter-1's exploration did). The bounded cost is justified by the alignment value.

### Killed candidates

| Candidate | Reasoning |
|---|---|
| Single-layer fix (Layer 2 only) | Misses Layer 1 + Layer 3 catch cases |
| All-in-one giant protocol now | Over-engineers; matches mvl_context_intake.md research-frontier item, not immediate need |
| /explore enhancement only (no protocol) | Discipline-level alone doesn't enforce context-loading; protocol-level needed |
| _branch.md template only | Relies on inquiry-author discipline alone; insufficient |

---

## Open Questions

### Monitoring

- **Does the 3-layer recommendation catch future similar failures?** Watch for cases where canonical-anchor-surfacing fails despite the 3 layers being adopted. *Observable after:* 3 or more inquiries adopt the 3 layers.

- **Does Layer 3 change /explore execution behavior in practice?** Watch for /explore outputs that explicitly cite canonical-spec line ranges (evidence that the refinement note is being applied). *Observable after:* 2 or more inquiries analyze a discipline post-adoption.

- **Does the 3-layer adoption produce spec-bloat?** Watch for spec edits that snowball beyond the bounded ~25-35 lines. *Observable after:* the initial adoption + 2 or more subsequent edits.

### Refinement Triggers

- **Activate the broader `mvl_context_intake.md` protocol** when 2 or more additional context-intake-failure cases beyond canonical-spec-loading are observed.

- **Pivot to incremental adoption** if the bundled MUST proves too large in one change.

- **Iteration N** if the user observes errors in this finding's claims.

### Research Frontiers

- **The broader mvl_context_intake.md protocol** — full design + routing categories + warmup file structure (parallel to navigation_context_intake.md + navigation/warmup/). Sketched here as a skeleton; refined when activated.

- **Cross-discipline context-intake patterns.** Does each discipline-runner need its own context-intake protocol, or can a unified pattern emerge?

- **Autonomy-path context-intake.** At L3+, autonomous loops need systematic context-intake. The 3-layer + broader protocol form the foundation.

### Blocked

- *None.*

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+


in 
devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md
u said 

Context elicitation (stage 1). The canonical /navigate spec's identity-defining content (homegrown/navigation/references/navigation.md lines 16-29) was not loaded into iteration 1's working context. Evidence: grep across all 5 iter-1 archived outputs for "ONE structural operation" / "Decision-making" / "Navigation is not" returned ZERO matches.


thats a huge issue, and it is because explore did not surface this information? which is a highly relevant information.. this is what exactly we should avoid and what explore should do perfectly... if it only surfaces random relevant things then we wont get full context... 


so it is interesting. Even with worker session where we run mvl loops, we still need some kind of mapping ? made by explore ?  and then we can run MVLs ? 

and in this above errror case it isnot like it was a random file with vital infromation , it was highly relevant and obvious file
```

</details>
