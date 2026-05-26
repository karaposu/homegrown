---
status: active
corrects:
  - devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md
preserves-from:
  - devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md
depends-on-protocol:
  - homegrown/protocols/loop_diagnose.md
related:
  - devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
---

# Finding: REPAIR of `/innovate`'s Combination Mechanism — the Available-Examples Bias is Longstanding Spec Text, Not a Recent Regression

## Changes from Prior

**Prior path.** `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md` — referred to below as "2026-05-14_14-00."

**Revision trigger.** User's structural correction. After 2026-05-14_14-00 proposed M1 (a scope-fidelity-to-framing test added to `/innovate`'s Phase 3 test cycle) as the primary maintenance candidate, the user observed that adding a check on top of the broken spec is the wrong shape of intervention. The user's quote:

> *"this is not a simple misunderstanding. we want to detect the bad part of that skill to remove it not just add more tests... refocus on homegrown/innovate/references/innovate.md to understand this error. also u can compare with old version which did not had such errors /Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md and try to understand what change is causing the error"*

The user's directive: find the bad part of the spec and remove or repair it; do not add more tests on top. The user also provided a specific comparison target — an older `/innovate` references file (at commit bf4ae1f) versus the current one — hypothesizing that a recent change to the spec introduced the bias that produced the L1 over-specification in `devdocs/inquiries/2026-05-14_12-45__.../docarchive/innovation.md` lines 161-163.

**What's preserved.**

- The entry-point identification from 2026-05-14_14-00. The L1 over-specification entered at innovation's concrete-text generation step. This finding's diff investigation localizes the cause WITHIN innovation's spec (at B3, line 126 of `/innovate` references) — refining the entry-point, not overturning it.
- The Recursive Demonstration correction of `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md` (referred to below as "2026-05-14_13-08"). 2026-05-14_14-00 corrected 2026-05-14_13-08's Phantom-Canon-at-meta-meta-level framing; that correction stands.
- The L1 PARALLEL preservation. L1 (from 2026-05-14_13-08) catches framing-time canonicalization at the pre-`_branch.md` stage. The new REPAIR addresses the `/innovate` spec-text level. Both stand at different layers.
- The recursive self-application analysis structure from 2026-05-14_14-00 (adapted here to single-layer bug-level form because this finding's scope is bug-level, not pattern-level).
- "Available-examples bias" as a cognitive-level mechanism description. The term describes a real phenomenon and is preserved as descriptive vocabulary.

**What's changed (dimensional CORRECTS on 2026-05-14_14-00).** Three sub-dimensions corrected:

1. **M1 intervention shape.** 2026-05-14_14-00's primary maintenance candidate was M1 — a scope-fidelity-to-framing test added to `/innovate`'s Phase 3 (Test) cycle. The shape was ADD-TEST. The user's directive corrects this: the right shape is REMOVE/REPAIR the spec-text element that causes the bias. This finding replaces M1 with the REPAIR of B3+B4+B5 in `/innovate`'s Combination mechanism (the actual cause-location).

2. **Failure-mode pattern-naming.** 2026-05-14_14-00 named "loop-stage scope-leakage" as a pattern-level failure-mode with family-member status. This finding downgrades the naming to a descriptive phrase only — the phenomenon is real (the scope leaked from generic-as-framed to project-specific during the loop), but with one observed instance there is no confirmed pattern. The name describes; it does not commit to family-member status.

3. **Family-positioning as fourth member.** 2026-05-14_14-00 placed "loop-stage scope-leakage" as the fourth member of the meta-conditions-on-verification family. This finding retracts that placement. One observed instance is insufficient for family-member commitment. The family remains at three members (lesson-introduces-its-own-trap; framing-load-bearing; Phantom Canon) at the previous calibration state.

**What's new.**

- The diff-result documentation. The diff between the older `/innovate` references at `/Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md` and the current at `/Users/ns/Desktop/projects/native/homegrown/innovate/references/innovate.md` is essentially nil at the semantic-content level. Only 3 cosmetic "Refinement note" header labels were added between the two versions (6 lines total across 3 locations); no body content changed. The user's specific regression hypothesis is structurally invalidated. The user's broader directive (find and remove the bad part of the spec) is satisfiable by targeting longstanding spec elements.
- The B3 identification. Line 126 of `/innovate`'s references — the Combination mechanism's "What's already nearby" source — explicitly lists "project" as a source for second concepts. This instruction is the load-bearing cause that produced the L1 over-specification. The instruction is longstanding (present in both versions of the spec); it is not a recent regression.
- The REPAIR spec-edit text for B3+B4+B5 (the load-bearing piece — concrete spec text in this finding's Maintenance Candidates section). The REPAIR preserves the Combination mechanism's legitimate function while adding scope-fidelity awareness as a conditional caveat.
- Deferred candidates for B1, B2, B6 (sister bias-inducing elements in the Intuition section and Absence Recognition mechanism) with revival trigger.
- A meta-observation about recurring premature-pattern-naming in the inquiry chain — explicitly flagged in Research Frontiers but NOT committed as a new pattern (avoiding the same error this iteration is correcting). The revival trigger requires a third instance in a DIFFERENT inquiry topic-chain (not on this related-chain).
- An elevated threshold for iteration #8+ on this topic chain (per the prior critique's recommendation, reinforced here).

**Migration.** Future spec-revisers of `/innovate` should apply the REPAIR (described in this finding's Maintenance Candidates section) to the Combination mechanism's B3+B4+B5 at both canonical (`homegrown/innovate/references/innovate.md`) and installed (`~/.claude/skills/innovate/references/innovate.md`) locations. Past references to "loop-stage scope-leakage as a fourth-member family pattern" should be downgraded to descriptive-phrase status. M1 (from 2026-05-14_14-00) is not deployed; the REPAIR replaces it. L1 (from 2026-05-14_13-08) continues to fire at the pre-`_branch.md` stage; both stand in parallel addressing different layers.

---

## Question

Given that the prior MVL+ inquiry (`devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md`) diagnosed "loop-stage scope-leakage" as a generic failure mode at `/innovate`'s concrete-text generation step and proposed M1 (a new scope-fidelity-to-framing test added to `/innovate`'s Phase 3) as an ADD-ON check on top of the existing spec — and the user has correctly observed that this diagnostic was at the wrong level of intervention (adding a test rather than finding and removing the bug) — what specific change(s) between the OLDER `/innovate` spec at `/Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md` (which did NOT exhibit the available-examples bias) and the CURRENT `/innovate` spec at `homegrown/innovate/references/innovate.md` (which produced the over-specified L1 spec text in 2026-05-14_12-45's `innovation.md` lines 161-163) introduced the regression, and what is the REMOVE/REPAIR fix at the spec-text level (not an ADD-TEST fix on top of the broken spec)?

---

## Finding Summary

- **Diagnostic verdict.** ACTIONABLE, CORRECTS-flavored on `2026-05-14_14-00` (dimensional — three sub-dimensions corrected; the rest stands).

- **Surprising diff result.** Comparing the two versions of `/innovate`'s references file reveals that only 3 cosmetic "Refinement note" header labels were added between them (6 lines total across 3 locations); no body content changed. The user's specific regression hypothesis fails.

- **Longstanding bias is the actual issue.** The bad part of the spec exists in BOTH versions. The load-bearing cause is at line 126 of `/innovate`'s references — the Combination mechanism's "What's already nearby" source listing "project" alongside "conversation, problem space" as sources for second concepts.

- **Primary maintenance: REPAIR B3+B4+B5.** A spec-text edit to `/innovate`'s Combination mechanism that preserves the mechanism's legitimate function while adding a scope-fidelity conditional. NOT a new test. NOT a new failure-mode entry. NOT a full removal of context-sources. Concrete REPAIR text is in this finding's Maintenance Candidates section.

- **Deferred maintenance: REPAIR B1+B2+B6.** Sister bias-inducing elements in the Intuition section and Absence Recognition mechanism. With revival trigger: if the primary REPAIR calibrates poorly, activate the deferred repairs to broaden coverage.

- **The prior M1 dies entirely.** The prior finding's primary maintenance candidate (M1) was the wrong shape of intervention per the user's directive. It does not survive as deferred defense-in-depth. Revival only if the REPAIR demonstrably fails.

- **Pattern-naming downgrade + family-positioning retraction.** "Loop-stage scope-leakage" is downgraded from failure-mode-with-family-membership to descriptive-phrase only. The fourth-member family-positioning is retracted. One observed instance is insufficient for pattern-naming or family-member commitment under the project's calibration principles.

- **Meta-observation flagged, not committed.** The inquiry chain has exhibited a recurring "premature-pattern-naming" failure across two iterations (2026-05-14_13-08 mis-attributed; 2026-05-14_14-00 over-generalized from one instance). This finding corrects the most recent instance but does NOT name "premature-pattern-naming" as a new failure mode — naming a pattern from two instances within one chain would itself be premature-pattern-naming. The meta-observation is flagged in Research Frontiers with a cross-chain revival trigger.

- **Honest cost at iteration #7.** The full-loop was justified (3 of 4 direct-edit-vs-full-loop conditions returned NO; all 6 unique outputs are load-bearing). The threshold for iteration #8+ is elevated: full-loop needs explicit structural-correction justification; direct-edit-as-counterfactual should be considered explicitly before invoking.

---

## Finding

### Why this discussion exists

The Homegrown project — a personal effort to build a thinking-discipline toolkit consisting of structured methodologies for exploration, sensemaking, decomposition, innovation, and critique — recently produced a chain of LOOP_DIAGNOSE-style findings about a failure mode the project's MVL+ inquiry loop had been encountering. The chain's most recent iteration (`2026-05-14_14-00`) diagnosed a phenomenon called "loop-stage scope-leakage" at `/innovate`'s concrete-text generation step and proposed M1 — a new scope-fidelity-to-framing test added to `/innovate`'s Phase 3 (Test) cycle — as the primary maintenance candidate.

The user identified that M1 was the wrong shape of intervention. Adding a check on top of the broken spec is not the right fix. The right fix is to find the bad part of the spec and remove or repair it. The user provided a specific comparison target — an older `/innovate` references file vs the current one — hypothesizing that a recent change to the spec introduced the bias that produced the over-specified L1 spec text.

This finding performs the diff and surfaces a surprising result. The diff is essentially nil at the semantic-content level. Only 3 cosmetic "Refinement note" header labels were added between the two versions; no body content changed. The user's specific regression hypothesis fails. However, the user's broader directive (find and remove the bad part of the spec) is satisfiable by targeting longstanding spec elements that exist in BOTH versions. The load-bearing cause is at line 126 of `/innovate`'s references — the Combination mechanism's "What's already nearby" source, which explicitly lists "project" as a source for second concepts to connect.

The CORRECTS on `2026-05-14_14-00` is dimensional. Three sub-dimensions are corrected: (i) the M1 intervention shape (ADD-TEST → REMOVE/REPAIR); (ii) the "loop-stage scope-leakage" failure-mode-naming-with-family-membership claim (downgraded to descriptive phrase only; one observed instance does not establish a confirmed pattern); (iii) the fourth-member family-positioning (retracted as premature pattern-naming from one instance). The rest of `2026-05-14_14-00` stands: the entry-point at innovation, the 5-file trace evidence, the Recursive Demonstration correction of `2026-05-14_13-08`, the L1 PARALLEL preservation, and the recursive self-application analysis structure.

This finding produces a REPAIR maintenance candidate at the spec-text level — specifically, repairs to B3, B4, and B5 within `/innovate`'s Combination mechanism. The REPAIR preserves the mechanism's legitimate function (context-sources ARE useful when the inquiry's scope allows) while adding scope-fidelity awareness (a conditional caveat: when the inquiry's framing claims generic scope, prefer sources from outside the immediate working context). The REPAIR is NOT a new test, NOT a new failure-mode entry. Deferred candidates exist for B1, B2 (Intuition section) and B6 (Absence Recognition mechanism) with revival triggers if the primary REPAIR proves insufficient.

### 1. Correction Chain Summary

| Field | Value |
|---|---|
| **Prior path** | `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md` |
| **Corrected path** | this finding |
| **Human correction (excerpt)** | *"this is not a simple misunderstanding. we want to detect the bad part of that skill to remove it not just add more tests... refocus on homegrown/innovate/references/innovate.md to understand this error. also u can compare with old version which did not had such errors... and try to understand what change is causing the error"* |
| **Initial hypothesis (from user)** | A recent change to `/innovate`'s references introduced the available-examples bias. The fix should be a REMOVE/REPAIR of that change, not an ADD-TEST. |
| **Diff result (SURPRISING)** | The diff is essentially nil at semantic-content level. Only 3 cosmetic "Refinement note" header labels were added between the older (bf4ae1f) and current versions; no body content changed. The specific regression hypothesis is structurally invalidated. |
| **Actual cause (longstanding, not regression)** | B3 — line 126 of `/innovate`'s references, in the Combination mechanism's "How to apply" → "Sources" subsection. The text explicitly lists "project" alongside "conversation, problem space" as sources for second concepts to connect. This instruction has been present in both versions. When `/innovate` runs inside a project context and is asked to combine concepts, this instruction directly produces project-specific examples. Supporting contributors: B4 (line 129, "What the user/audience is already thinking about" → "projects, and interests") and B5 (line 133, the Combination Example). |
| **What changed in framing** | The user's hypothesis was regression-based (recent change to find and revert). The actual finding is longstanding-bias-based (longstanding spec text to repair). The user's broader directive (REMOVE/REPAIR the bad part of the spec) is satisfied by repairing the longstanding spec elements. The intervention shape (REPAIR not ADD-TEST) is honored. |
| **Scope of CORRECTS** | Dimensional, not total. Targets three sub-dimensions of `2026-05-14_14-00`: (i) M1 intervention shape; (ii) failure-mode pattern-naming; (iii) family-positioning fourth-member. Other elements (entry-point, trace evidence, recursive correction of `2026-05-14_13-08`, L1 PARALLEL) stand. |

For traceability, the diff between the two `/innovate` references files (older `bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md` vs current `homegrown/innovate/references/innovate.md`):

```
@@ -148,6 +148,8 @@ (Inversion mechanism section)
+*Refinement note (applies at Inversion mechanism):*
+

@@ -284,6 +286,8 @@ (Phase 3 Test section)
+*Refinement note (applies at Phase 3 Test):*
+

@@ -295,6 +299,8 @@ (Phase 3 Test → before Axis coverage check)
+*Refinement note (applies at Phase 3 Test):*
+
```

Three cosmetic header additions. No semantic content changed.

### 2. Failure Hypotheses

#### Hypothesis 1: B3 — Combination mechanism's "What's already nearby" source listing "project" (HIGH confidence; PRIMARY)

**Affected stage.** `/innovate`'s Combination mechanism, specifically the "How to apply" → "Sources" subsection, first source at line 126 of `homegrown/innovate/references/innovate.md`.

**Shortcoming type.** **Bias-inducing instruction.** The current spec text reads: *"What's already nearby — concepts in the current context (conversation, project, problem space) that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work."* The explicit listing of "project" as a source — without a scope-fidelity conditional — directly instructs the Combination mechanism to pull project-specific concepts when run inside a project context. The "Most combinations come from things already in proximity" framing reinforces this as the default approach.

**Evidence — direct linguistic match between B3 and the L1 over-specification.** The L1 over-specification in `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/docarchive/innovation.md` lines 161-163 reads: *"file paths under `homegrown/`, discipline names like `/navigation` or `/explore`, prior inquiry IDs like `2026-05-12_11-40`."* All three categories are project-specific artifacts present in the "current context" of the inquiry that was running inside the Homegrown project. The Combination mechanism's instruction to use "the current context (conversation, project, problem space)" as a source directly produces this kind of project-specific output.

**Evidence — diff invalidates the regression alternative.** The bf4ae1f-vs-current diff shows that B3 existed in BOTH versions (only 3 cosmetic label additions; no body content changed). The bias is longstanding, not a recent regression. The hypothesis is longstanding-spec-text, not regression.

**Evidence — user's structural correction.** The user's directive: *"detect the bad part of that skill to remove it not just add more tests."* The bad part is in the spec text; the fix is REPAIR.

**Confidence.** HIGH. Direct linguistic match + diff confirmation + user's structural directive all converge.

**Why not stronger.** HIGH is the maximum. The causal trace is conclusive.

**Maintenance candidate.** REPAIR B3 (section 4 of this finding's body) with scope-fidelity conditional. The REPAIR preserves the mechanism's legitimate function while preventing the unconditional project-pulling behavior.

**Evaluation gate.** Deploy the REPAIR; observe 3 future MVL+ inquiries where: (i) `/innovate` is invoked, (ii) the inquiry's framing claims generic scope, (iii) the Combination mechanism is applied during innovation. For each: does the repaired Combination mechanism produce text that retains the framed scope, rather than narrowing to project-specifics? If 2 of 3 retain the framed scope → REPAIR confirmed. If 0-1 of 3 → revisit the REPAIR wording or escalate to deferred candidates. Additionally, track two-reader divergence rate on borderline cases (per critique recommendation R1).

#### Hypothesis 2: B4+B5 — Sister bias-inducing elements within the same Combination mechanism (MEDIUM confidence; CONTRIBUTING)

**Affected stage.** Same Combination mechanism, lines 129 (B4) and 133 (B5, the Example).

**Shortcoming type.** **Reinforcing bias-inducing instructions.**

- B4 (line 129): *"What the user/audience is already thinking about — the innovator's own concerns, projects, and interests are a rich source of second concepts."* Lists "projects, and interests" as "rich source" without scope-fidelity conditional. Same pattern as B3.
- B5 (line 133, the Example): *"In a discussion about AI's future, three concepts were in proximity through the speaker's daily work and concerns... The concepts were available for combination because intuition had already placed them in proximity."* The example rewards available-context combination ("intuition had already placed them in proximity" as a positive). Without a counter-example or scope-fidelity tag, the example reinforces the bias-inducing pattern.

**Evidence.** Same Combination-mechanism location as B3; same "list project/user-context as source" pattern. If B3 alone is repaired, B4 and B5 could individually re-introduce the bias via the same mechanism.

**Confidence.** MEDIUM. The contributing causal role is real but secondary to B3. B3 is the most explicit instruction; B4 is similar phrasing; B5 reinforces via example.

**Why not stronger.** B4 and B5 alone (without B3) might not produce the same level of bias — the explicit "project" listing in B3 is the most direct cause. They are reinforcing, not load-bearing.

**Maintenance candidate.** REPAIR B4 + REPAIR B5, included in the same edit as B3 (section 4 of this finding's body). Multi-element repair within the same mechanism keeps the fix internally consistent.

**Evaluation gate.** Same as H1 — observe Combination-mechanism behavior in 3 future inquiries.

#### Hypothesis 3: Meta-observation — premature-pattern-naming as recurring failure in the inquiry chain (EXPLORATORY; flagged as research frontier, NOT committed)

**Affected stage.** The diagnostic chain itself, across multiple iterations.

**Shortcoming type observed.** **Premature pattern-naming from one or two instances.**

- `2026-05-14_13-08` named "Phantom Canon at meta-meta-level / second instance of lesson-introduces-its-own-trap" — corrected by `2026-05-14_14-00` as a different failure mode.
- `2026-05-14_14-00` named "loop-stage scope-leakage as a fourth-member family pattern" — corrected by THIS finding: one instance is insufficient; downgrade to descriptive phrase; retract family-member status.

The pattern: each iteration's diagnostic over-generalized from one observed instance to a pattern-level + family-member claim, which the next iteration corrected.

**Why this is NOT committed as a new named failure mode.** Committing "premature-pattern-naming" as a new failure mode from two instances in one project topic-chain would itself be premature-pattern-naming. The same error one level higher. Avoiding this error requires explicit non-naming — flag for tracking, do not commit.

**Confidence.** EXPLORATORY. Two instances within one topic-chain is suggestive; it is not evidence of a generalizable pattern that warrants naming.

**Maintenance candidate.** None in this iteration. Flagged in section 7 (Open Questions, Research Frontiers).

**Evaluation gate.** Revival trigger: if a third instance of premature-pattern-naming surfaces in a DIFFERENT inquiry topic-chain (not on this related-chain), then the pattern's evidence base strengthens to the point where naming could be reconsidered. The cross-chain requirement prevents within-chain confirmation bias (per critique recommendation R3).

### 3. Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| `/innovate` Combination mechanism, B3 (line 126) — PRIMARY | Explicit instruction lists "project" as source without scope-fidelity conditional | strong (direct linguistic match + diff confirmation + user directive) | HIGH | REPAIR B3 (section 4) |
| `/innovate` Combination mechanism, B4 (line 129) + B5 (line 133) — CONTRIBUTING | Sister bias-inducing instructions / Example rewarding available-context combination | medium | MEDIUM | REPAIR B4+B5 in same edit |
| Diagnostic chain — meta-observation | Premature pattern-naming from one or two instances | exploratory (two within one chain) | EXPLORATORY | Flag as research frontier; do not commit |

Primary attribution is at the Combination mechanism's "Sources" subsection (B3). B4 and B5 are reinforcing within the same mechanism. The meta-observation is acknowledged but not actioned.

### 4. Maintenance Candidates

#### Primary: REPAIR B3+B4+B5 in `/innovate`'s Combination mechanism

**What changes.** Edit three locations in `homegrown/innovate/references/innovate.md` (and the installed copy at `~/.claude/skills/innovate/references/innovate.md`) within the Combination mechanism section. The edits preserve the mechanism's legitimate context-source function and add scope-fidelity awareness as a conditional caveat.

**B3 — Current text (line 126):**

> *"**What's already nearby** — concepts in the current context (conversation, project, problem space) that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work."*

**B3 — Repaired text:**

> *"**What's already nearby** — concepts in the current context that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work.*
>
> ***Scope-fidelity caveat.** When the inquiry's framing claims generic scope (e.g., "applies to a class of cases," "should be reusable," "applies regardless of context"), treat the current context as ONE inspiration anchor among many — do not let it become the scope-defining source. Actively seek concepts from outside the immediate working context to match the framed scope. When the inquiry's framing is narrow/specific to one context, the current context is the natural primary source."*

The change: (i) removed the parenthetical enumeration "(conversation, project, problem space)" that was the most concrete bias-enabler (the explicit "project" listing); (ii) added a scope-fidelity caveat that conditionally applies based on the inquiry's framed scope.

**B4 — Current text (line 129):**

> *"**What the user/audience is already thinking about** — the innovator's own concerns, projects, and interests are a rich source of second concepts."*

**B4 — Repaired text:**

> *"**What the user/audience is already thinking about** — the innovator's concerns and interests are a rich source of second concepts. For generic-scope inquiries, treat these as inspiration anchors but verify the resulting combinations don't narrow output to the user's specific contexts."*

The change: (i) removed "projects" from the enumeration of "rich sources"; (ii) added the scope-fidelity verification step.

**B5 — Current text (line 133, the Combination Example):**

> *"In a discussion about AI's future, three concepts were in proximity through the speaker's daily work and concerns: methodology (they were building methodologies), convergence (introduced via Lens Shifting), and business value (a personal concern). Connecting all three produced: proprietary AI frameworks as a market category. None of the three alone produces this — it emerges from their combination. The concepts were available for combination because intuition had already placed them in proximity."*

**B5 — Repaired text:**

> *"**Example (specific-scope inquiry):** In a discussion about AI's future, three concepts were in proximity through the speaker's daily work and concerns: methodology, convergence, and business value. Connecting all three produced: proprietary AI frameworks as a market category. None of the three alone produces this — it emerges from their combination. Available-context combination worked here because the inquiry's scope was specific to the speaker's domain.*
>
> ***Counter-example (generic-scope inquiry):** For an inquiry framed as "identify reusable design patterns across software domains," drawing combinations from only the current project's domain would narrow the output's scope. Cross-domain sourcing — combining patterns from database systems, UI frameworks, and compiler design rather than from one domain — preserves the generic scope the inquiry framed."*

The change: (i) the existing example is tagged as "specific-scope inquiry" (clarifying its applicability); (ii) "intuition had already placed them in proximity" framing is softened to "Available-context combination worked here because the inquiry's scope was specific"; (iii) a counter-example is added showing what generic-scope inquiries require — cross-domain sourcing across multiple software-engineering sub-domains.

**Why REPAIR and not REMOVE.** Removing the "What's already nearby" source entirely would break the Combination mechanism's legitimate function — context-sources are useful for inquiries whose scope IS specific. The bias arises from UNCONDITIONAL sourcing without scope-fidelity awareness, not from the existence of the source itself. The REPAIR adds the conditional; the source-mechanism is preserved.

**Why REPAIR and not ADD-TEST.** The user's directive rules out adding a new test on top of the broken spec. The bug is in the spec text; the fix is in the spec text.

**Which file is affected.** `homegrown/innovate/references/innovate.md` (canonical, per the project's canonical-protocol-location convention) and `~/.claude/skills/innovate/references/innovate.md` (installed copy). The edit is doc-only. Both copies need the change to keep canonical and runtime versions consistent.

**Risk class.** LOW. Doc-only edit; scope-fidelity caveat is conditional (doesn't fire on specific-scope inquiries); the counter-example clarifies the boundary case.

**Expected benefit.** Removes the load-bearing instruction that produced the L1 over-specification in `2026-05-14_12-45`'s archived innovation step. Repairs the mechanism at its actual cause-location rather than catching the failure downstream. Honors the user's directive (REMOVE/REPAIR, not ADD-TEST).

**Evaluation gate.** Deploy the REPAIR; observe 3 future MVL+ inquiries where: (i) `/innovate` is invoked, (ii) the inquiry's framing claims generic scope, (iii) the Combination mechanism is applied during innovation. For each:

1. Does the repaired mechanism produce text that retains the framed scope (does not narrow to immediate-context specifics)?
2. Does the scope-fidelity caveat fire correctly (selective on generic-framed inquiries; not on specific-scoped)?
3. Does the counter-example serve as useful illustration for spec-readers?
4. Two-reader divergence rate on borderline cases (track but do not gate on this).

If 3 of 4 (excluding two-reader divergence) pass on 2 of 3 inquiries → REPAIR confirmed. If fewer → revisit REPAIR wording or escalate to deferred candidates.

**Branch experiment Y/N.** NO — the edit is small and contained to one mechanism section.

#### Deferred: REPAIR B1+B2+B6 in `/innovate`'s Intuition section and Absence Recognition mechanism

**What would change.** Apply analogous scope-fidelity caveats to:

- **B1** (line 50, Intuition section, Context component): the framing of "Context — what concepts are cognitively proximate. Determined by what you're working on, thinking about, and exposed to." Deferred repair: add scope-fidelity caveat about when daily-work-loaded context should be embraced vs cross-checked against framing-scope.
- **B2** (line 73, Intuition Practical Implication): "Context can be supported through deliberate loading (workspace knowledge, recent work, domain themes)." Deferred repair: add scope-fidelity caveat about when deliberate-loading is scope-appropriate vs scope-narrowing.
- **B6** (line 192, Absence Recognition's "How to apply" first item): "Survey the landscape around the seed" — context-bound surveying. Deferred repair: add scope-fidelity caveat about when "around the seed" landscape is appropriate vs requires cross-domain surveying.

**Which file.** Same as primary REPAIR.

**Risk class.** LOW (doc-only).

**Expected benefit (if revived).** Defense-in-depth: catches available-examples bias at the Intuition + Absence Recognition layers if the Combination-mechanism repair (primary) proves insufficient.

**Evaluation gate (revival trigger).** If the primary REPAIR of B3+B4+B5 calibrates poorly — specifically, if a future MVL+ inquiry produces project-specific examples in a generic-framed candidate despite the REPAIR — then activate B1+B2+B6 repair to broaden the fix.

**Branch experiment Y/N.** NO.

**Status.** DEFERRED until primary REPAIR's calibration trigger fires.

#### L1-vs-REPAIR distinction (PARALLEL, different layers)

L1 (from `2026-05-14_13-08`) is preserved for what it catches. The REPAIR addresses a different layer.

| Dimension | L1 (preserved from `2026-05-14_13-08`) | REPAIR (this finding) |
|---|---|---|
| **What it addresses** | Framing-time canonicalization (Phantom Canon): artifact-treated-as-canon-without-check at `_branch.md` framing | Bias-inducing spec instruction in `/innovate`'s Combination mechanism that produces project-specific concrete text from generic-scope inquiries |
| **Stage where check fires** | `/MVL+` root-NEW path, BEFORE `_branch.md` is written | At `/innovate` spec-text level (no runtime check; the spec is repaired so the bias is no longer present in the instruction) |
| **Mechanism** | Pre-step prompt for artifact canon-status | REPAIR of spec text (add scope-fidelity caveat to B3+B4+B5) |
| **Relationship** | PARALLEL — addresses framing-time canonicalization | PARALLEL — addresses spec-text bias |

The two stand without conflict. L1 catches at framing; the REPAIR fixes the spec. The prior finding's M1 (a test in `/innovate` Phase 3 to catch the symptom) is replaced by the REPAIR (which removes the cause).

### 5. Diagnostic Verdict

**Overall:** ACTIONABLE (CORRECTS-flavored on `2026-05-14_14-00`).

- **Best-supported diagnosis.** H1 HIGH — `/innovate`'s Combination mechanism at line 126 (B3) explicitly lists "project" as a source for second concepts without scope-fidelity conditional. The bias is longstanding spec text, not a recent regression (diff confirms). Direct linguistic match between B3's "project" listing and the L1 over-specification's project-specifics.

- **Strongest maintenance candidate.** REPAIR B3+B4+B5 in `/innovate`'s Combination mechanism (section 4 above). Concrete spec-edit text provided. Preserves mechanism function; adds scope-fidelity caveat. PARALLEL to L1 (which addresses a different layer). Risk LOW; doc-only.

- **Main uncertainty.** Whether the primary REPAIR alone is sufficient or whether deferred candidates (B1+B2+B6) need activation. Calibration over 3 future MVL+ inquiries will resolve.

- **Recommended next step.** Apply the REPAIR to `/innovate`'s spec at canonical and installed locations. Preserve this finding as the precedent for *"find the spec-text bug and repair it; do not add tests on top."* Preserve L1 (from `2026-05-14_13-08`) PARALLEL for what it actually catches. Monitor 3 future MVL+ inquiries; escalate to deferred-candidate repair if calibration fails.

### 6. Self-reference acknowledgment

This finding introduces a REPAIR for `/innovate`'s Combination mechanism. The REPAIR adds scope-fidelity awareness as a conditional caveat. The finding's own outputs must pass scope-fidelity at the bug-level scope its framing claims.

#### Bug-level scope-fidelity check on this finding's outputs

| This finding's output | Bug-level scope claim | Check |
|---|---|---|
| The REPAIR text for B3+B4+B5 (section 4) | A specific repair to a specific spec mechanism (Combination), with generic phrasing of the scope-fidelity caveat applicable across inquiries | PASS — the REPAIR text uses "current context" (generic), "inquiry's framing" (generic), "specific-scope" / "generic-scope" (generic terms); no project-specific narrowing |
| The REPAIR's counter-example for B5 | Cross-domain illustration to show what generic-scope inquiries require | PASS at the counter-example's own claimed scope (software-engineering sub-domains within the project's natural parent-domain); cross-parent-domain illustration is flagged as unexplored region in section 7 |
| The B3 identification + 5-file linguistic trace | Specific identification of one spec element as the load-bearing cause for one observed instance | PASS — the identification is at bug-level specificity; not over-generalized to pattern |
| The retraction of "loop-stage scope-leakage" as failure-mode | Downgrade to descriptive phrase from pattern-level commitment | PASS — explicitly distinguishes descriptive use from family-member naming |
| The meta-observation flagged as research frontier | Explicit non-naming (avoiding premature-pattern-naming on the meta-pattern itself) | PASS — flagged not committed; cross-chain revival trigger preserves option without committing |

All outputs pass bug-level scope-fidelity. The REPAIR text in section 4 self-applies the scope-fidelity caveat to its own wording.

#### Why single-layer (not three-layer like 2026-05-14_14-00)

2026-05-14_14-00 had a three-layer self-reference (text + mechanism + evidence-calibration) because it introduced a check (M1) that operated at multiple layers. This finding's REPAIR operates at one layer — spec-text. The self-reference is correspondingly single-layer. Adding extra layers would over-engineer for the bug-level scope.

#### One-instance evidence acknowledgment

The B3 identification is based on ONE concrete instance of bias-produced output (the L1 over-specification in `2026-05-14_12-45`'s archived innovation step). One instance is sufficient for a bug-level identification with strong causal trace. It is NOT sufficient for a pattern-level commitment — which is why this finding retracts the prior pattern-naming and stays at bug-level.

If a second instance of B3-induced bias surfaces in a future MVL+ inquiry — a generic-framed inquiry where Combination produces narrow project-specific output despite the REPAIR — then revisit the REPAIR's effectiveness and consider whether a structural pattern is emerging that warrants higher-confidence naming.

---

## Next Actions

### MUST

No MUST actions. This is a diagnostic finding.

### COULD

- **What:** Apply the REPAIR (section 4 above) to `/innovate`'s spec at `homegrown/innovate/references/innovate.md` (canonical) and `~/.claude/skills/innovate/references/innovate.md` (installed).
  - **Who:** the user (or whoever maintains the `/innovate` skill spec).
  - **Gate:** condition-bound — when the user is ready to commit the REPAIR edit.
  - **Why:** removes the load-bearing instruction that produced the L1 over-specification; preserves the mechanism's legitimate function; honors the user's REMOVE/REPAIR directive.

- **What:** Verify the corrected L1 from `2026-05-14_13-08` continues to stand for what it catches (framing-time canonicalization); not affected by this finding.
  - **Who:** the user during spec-deployment review.
  - **Gate:** condition-bound — when reviewing the REPAIR's impact.
  - **Why:** L1 and the REPAIR address different layers; both stand.

- **What:** Mark `2026-05-14_14-00`'s "loop-stage scope-leakage" naming as descriptive-only (not failure-mode-with-family-member) in any project-vocabulary references.
  - **Who:** project-vocabulary maintenance.
  - **Gate:** condition-bound — during the next project-vocabulary review.
  - **Why:** prevents downstream readers from invoking the retracted family-member status.

### DEFERRED

- **What:** REPAIR B1+B2+B6 (Intuition section and Absence Recognition mechanism) — secondary contributors.
  - **Gate:** observable revival trigger — if the primary REPAIR of B3+B4+B5 calibrates poorly (a future generic-framed MVL+ inquiry produces project-specific examples despite the REPAIR).
  - **Why (if revived):** defense-in-depth at the Intuition + Absence Recognition layers.

- **What:** Retrospective audit of other prior MVL+ inquiries to identify additional instances of B3-induced bias.
  - **Gate:** condition-bound — during a cumulative-quality review.
  - **Why (if revived):** strengthens the evidence base for the spec-level cause.

- **What:** Cross-discipline scope-fidelity audit — whether `/sense-making`, `/decompose`, `/td-critique` have analogous bias-inducing instructions.
  - **Gate:** observable revival trigger — if available-examples bias is observed in a non-`/innovate` discipline output.
  - **Why (if revived):** identifies whether the bias is `/innovate`-specific or cross-discipline.

---

## Reasoning

### Why CORRECTS over REFINES on `2026-05-14_14-00` (dimensional)

Apply the strengthened diagnostic three-test from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` to each of the three sub-dimensions of `2026-05-14_14-00`:

**Sub-dimension 1 — M1 intervention shape (ADD-TEST at Phase 3).**

- Claim-truth: did the prior claim M1 was the right fix? YES. Is the claim true under the user's directive? NO — REMOVE/REPAIR is the right shape, not ADD-TEST. → **NO.**
- Level-coherence: is "test at Phase 3" the right level for a spec-text cause? NO — the cause is IN the spec (at B3); the fix should be IN the spec. → **NO.**
- External-citation: could M1 be cited as authoritative for fixing the L1 over-specification? NO — it would add a check on top without removing the cause. → **NO.**

Three NOs → CORRECTS on M1 intervention shape.

**Sub-dimension 2 — "loop-stage scope-leakage" as failure-mode-with-family-membership.**

- Claim-truth: is "loop-stage scope-leakage is a generalizable failure mode" true with one observed instance? Premature; not established. → **NO.**
- Level-coherence: is "failure mode at pattern level" the right level for a one-instance spec-element bug? NO — bug-level is more accurate. → **NO.**
- External-citation: could the pattern-naming be cited as authoritative for future inquiries invoking it as a family member? NO — one instance is insufficient. → **NO.**

Three NOs → CORRECTS on the pattern-naming. Downgrade to descriptive phrase only.

**Sub-dimension 3 — family-positioning as fourth member.**

- Claim-truth: is the fourth-member placement supported by evidence? NO — one instance is insufficient for family-member status. → **NO.**
- Level-coherence: is "fourth member of family" the right level for a one-instance bug? NO. → **NO.**
- External-citation: could the fourth-member positioning be cited authoritatively? NO. → **NO.**

Three NOs → CORRECTS on the family-positioning. Retract fourth-member.

### Why dimensional CORRECTS, not total

The three corrected sub-dimensions do NOT invalidate the rest of `2026-05-14_14-00`. The following stand:

- The entry-point at innovation (5-file trace evidence). Confirmed by THIS finding's diff investigation (the bias is in innovation's spec; B3 is the load-bearing cause within that spec).
- The Recursive Demonstration correction of `2026-05-14_13-08`. That correction stands; this finding doesn't re-litigate it.
- The L1 PARALLEL preservation. L1 catches framing-time canonicalization; the REPAIR addresses a different layer. Both stand.
- The recursive self-application analysis structure (adapted here to single-layer bug-level form).
- "Available-examples bias" as cognitive-level mechanism description.

### What is preserved + why

| Element | Why preserved |
|---|---|
| Entry-point at innovation | The 5-file trace in `2026-05-14_14-00` correctly identified innovation as the entry stage. This finding's diff investigation localizes the cause WITHIN innovation's spec (at B3) — refining, not overturning. |
| Recursive Demonstration correction of `2026-05-14_13-08` | Stands on its own terms; this finding doesn't address `2026-05-14_13-08` directly. |
| L1 PARALLEL preservation | L1's framing-time-canonicalization catch is at a different layer than the REPAIR. Both stand. |
| Recursive self-application structure | Used here in single-layer form; multi-layer from `2026-05-14_14-00` informed this finding's approach. |
| "Available-examples bias" as cognitive description | Descriptive phrase for a real phenomenon; preserved as vocabulary. |

### What is corrected + why

| Element | Why corrected |
|---|---|
| M1 intervention shape | ADD-TEST on top of a broken spec doesn't honor the user's directive (REMOVE/REPAIR the spec defect). |
| Failure-mode pattern-naming | Pattern-naming from one instance is premature; downgrade to descriptive phrase. |
| Family-positioning fourth-member | Family-member status from one instance is premature; retract. |

### Why NOT correcting `2026-05-14_13-08`

`2026-05-14_13-08`'s Recursive Demonstration framing was already corrected by `2026-05-14_14-00`. THIS finding addresses the misframings introduced by `2026-05-14_14-00` itself (the pattern-naming and the M1 shape). `2026-05-14_13-08`'s downstream-corrected status stands; no double-correction is needed.

### Honest cost-naming for 7 MVL+ in succession

This is the seventh MVL+ inquiry in succession on the related topic chain. Cumulative cost is heavy. Apply the direct-edit-vs-full-loop guideline (extracted from `2026-05-14_13-08`'s reasoning; reinforced by `2026-05-14_14-00`'s critique):

| Direct-edit condition | This iteration's result | Verdict |
|---|---|---|
| Correction is text-only without diagnostic implications | NO — structural correction (intervention shape; pattern-naming; family-positioning) | full-loop |
| No new pattern recognized | YES (explicitly NOT committing a new pattern; meta-observation flagged not committed) | mixed |
| Prior diagnostic frame unchanged | NO — three sub-dimensions corrected | full-loop |
| Prior verdict/hypotheses/attribution stand | PARTIALLY — entry-point + trace stand; pattern-naming + family-positioning corrected | full-loop |

3 of 4 conditions → full-loop justified.

Unique outputs of this iteration:

1. The diff result (regression hypothesis fails). Required artifact-comparison exploration; direct-edit wouldn't have tested it.
2. The B3 identification with strong causal trace. Required spec-text causal analysis; direct edit might have edited the wrong location.
3. The REPAIR spec-edit text (concrete deployable text for B3+B4+B5). Required innovation step's mechanism design with recursive self-check.
4. The dimensional CORRECTS three-test on each of three sub-dimensions. Required sensemaking formal adjudication.
5. The retraction of pattern-naming + family-positioning. Distributed across Changes from Prior + Reasoning; required decomposition decision.
6. The meta-observation flag (recurring premature-pattern-naming in the chain, flagged not committed). Required sensemaking calibration; direct edit wouldn't have produced this structural observation.

All six unique outputs are load-bearing.

**Honest cost-benefit at iteration #7: POSITIVE.** The 7th iteration prevents deployment of M1 (which would have been the wrong intervention shape) and identifies the actual fix (REPAIR of B3+B4+B5). Without this iteration, the chain would have propagated forward with M1 as a misdirected mitigation, and the actual spec cause would have remained unfixed.

**For iteration #8+:** the threshold is elevated. Apply the direct-edit-vs-full-loop guideline rigorously. Full-loop needs explicit structural-correction justification. Per critique recommendation R5: before invoking iteration #8 on this chain, explicitly consider whether direct-edit suffices.

### What was killed in this iteration

- **M1 (the prior finding's primary maintenance candidate, a Phase 3 scope-fidelity test).** Killed entirely. Not preserved as deferred defense-in-depth.
- **"Loop-stage scope-leakage" as failure-mode-with-family-member status.** Killed at that level. Retained as descriptive phrase only.
- **Fourth-member family-positioning.** Retracted.
- **Committing "premature-pattern-naming" as a new named failure mode from two within-chain instances.** Killed at this iteration; flagged as research frontier only.
- **REMOVE (delete) of B3 entirely.** Killed in favor of REPAIR (preserve mechanism function; add scope-fidelity conditional).
- **SUPERSEDES on `2026-05-14_14-00`.** Killed — CORRECTS is dimensional.
- **Hybrid REPAIR + M1.** Killed — REPAIR alone; M1 dies.

### Contradictions reconciled

- **CORRECTS on `2026-05-14_14-00` vs PRESERVES the entry-point identification.** Reconciled by dimensional CORRECTS: three sub-dimensions corrected; the rest stands.
- **REPAIR not REMOVE.** Reconciled by preserving Combination's legitimate function while adding scope-fidelity conditional.
- **One-instance evidence vs bug-level claim.** Reconciled by staying at bug-level (where one instance + strong causal trace IS sufficient); not over-claiming to pattern-level.
- **Meta-observation flagged but not committed.** Reconciled by explicit non-naming (the meta-observation itself would be premature-pattern-naming if named from two instances within one chain). Cross-chain revival trigger prevents within-chain confirmation bias.

---

## Open Questions

### Monitoring

- **REPAIR calibration.** Across 3 future MVL+ inquiries where `/innovate` is invoked with generic-scope framing and the Combination mechanism is applied: does the repaired mechanism produce text that retains the framed scope (not narrowing to immediate-context specifics)? Track two-reader divergence rate on borderline cases (per critique recommendation R1).

- **L1 calibration (preserved from `2026-05-14_13-08`).** Continued monitoring of L1's framing-time-canonicalization catch under the prior evaluation gate.

### Research Frontiers

- **Whether `bf4ae1f`-vs-current is the right diff window.** This finding's diff was specifically between bf4ae1f and current. Earlier history (before bf4ae1f) might show different content. Historical archaeology research frontier.

- **Premature-pattern-naming as recurring failure in the inquiry chain — flagged, NOT committed.** Two instances observed within this topic-chain. Naming this from two within-chain instances would itself be premature-pattern-naming. Revival trigger: a third instance in a DIFFERENT inquiry topic-chain — then the pattern's evidence base strengthens enough to consider naming. The cross-chain requirement prevents within-chain confirmation bias.

- **Whether the available-examples bias appears in disciplines other than `/innovate`.** `/sense-making` (anchor-extraction), `/decompose` (piece-naming), `/td-critique` (dimension-construction) all generate text and could exhibit analogous biases. Cross-discipline research frontier.

- **Whether the `/innovate` spec's internal inconsistency between B1-B5 (bias-inducing) and Domain Transfer mechanism (bias-countering, requires "deliberately different fields") needs full harmonization.** Full harmonization is research-frontier; targeted REPAIR is sufficient for this iteration.

- **Whether the REPAIR's B5 counter-example needs cross-field examples beyond software-engineering** (currently the counter-example uses databases + UI frameworks + compilers, all within software-engineering parent-domain). Per critique recommendation R2.

- **The Combination mechanism's specific-scope-vs-generic-scope conditional.** The REPAIR introduces this conditional. Whether it generalizes well across the many shapes of inquiries — and whether it should be applied uniformly to other context-using mechanisms — is a calibration question for future iterations.

### Refinement Triggers

- **If a future generic-framed MVL+ inquiry produces project-specific examples in `/innovate`'s output despite the REPAIR** → revisit REPAIR wording; activate deferred B1+B2+B6 candidates.

- **If a second instance of B3-induced bias surfaces in a different topic-chain** → strengthens the bug-level diagnosis; consider whether the bias affects mechanisms beyond Combination.

- **If a third instance of premature-pattern-naming surfaces in a DIFFERENT inquiry chain** → revisit the meta-observation; consider naming. (Cross-chain requirement per critique recommendation R3.)

- **If iteration #8+ becomes necessary on this topic chain** → apply the direct-edit-vs-full-loop guideline rigorously; full-loop needs explicit structural-correction justification. Per critique recommendation R5: before invoking iteration #8, explicitly consider whether direct-edit suffices.

- **If two-reader divergence on the REPAIR's borderline cases exceeds 30% across 3 future deployments** → revisit REPAIR wording for operational clarity.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+
innovation.md (the P2.4 L1 spec-edit text at lines 161-163): "The pre-step is SELECTIVE: it fires only when the question or goal text explicitly references project artifacts (file paths under homegrown/, discipline names like /navigation or /explore, prior inquiry IDs like 2026-05-12_11-40)." — THIS-PROJECT-SPECIFIC (first appearance of the over-specification).

u said this 


but your action suggestion is to add more tests to innovate skill rather than understand what is wrong with current one.  

this is not a simple misunderstanding.  we want to detect the bad part of that skill to remove it 

not just add more tests ... 


refocus on homegrown/innovate/references/innovate.md to understand this error. 


also u can compare with old version which did not had such errors /Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md 

and try to understand what change is causing the error
```

</details>
