---
status: active
corrects:
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
preserves-from:
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
depends-on-protocol:
  - homegrown/protocols/loop_diagnose.md
related:
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
  - devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md
  - devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md
---

# Finding: Phantom Canon is Generic — L1 Trigger Criteria Project-Agnosticism Correction

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md`

**Revision trigger:** User correction. After the prior LOOP_DIAGNOSE finding (a diagnostic produced by the project's correction-chain analysis protocol at `homegrown/protocols/loop_diagnose.md`) named Phantom Canon — the failure mode where a project artifact is treated as authoritative without checking whether it actually represents the user's current intent — the user observed that the prior finding's primary maintenance candidate (called L1: a pre-step for the `/MVL+` discipline runner that checks an artifact's canon-status before an inquiry's framing is written) defined its trigger criteria using examples exclusively drawn from this project's structure. The user's correction:

> *"why do you think this issue is only relevant to homegrown artifacts??? ... the same ghost canon could happen with any other artifact from any other project too. remake your loop run"*

**What's preserved:** The prior finding's diagnostic frame holds on its own terms — verdict ACTIONABLE, three failure hypotheses (H1 framing-time implicit canonicalization at HIGH confidence; H2 upstream-commitment cascade at MEDIUM; H3 assistant in-conversation framing pre-bias at MEDIUM), the failure attribution summary, the Phantom Canon failure-mode name, the pattern-family positioning (third entry in the emerging "meta-conditions on verification" family, alongside lesson-introduces-its-own-trap and framing-load-bearing), the self-reference precedent (applying L1's intended check to the prior inquiry's own use of the `/explore` discipline spec via a canonical-vs-installed diff), and the honest cost-naming for repeated MVL+ inquiries on related topics.

**What's changed:** The L1 maintenance candidate's specification text — specifically its trigger criteria's phrasing, its category illustrative examples, and its description of which file is affected. The previous L1 enumerated `homegrown/` file paths, this project's discipline names (`/navigation`, `/explore`), and this project's inquiry-ID format (`2026-05-12_11-40`) as if these defined the failure mode's scope. The corrected L1 uses project-agnostic trigger phrasing, an ambiguity threshold to control over-fire, and category examples that span multiple contexts (external standards like W3C HTML; current company API contracts; this-project artifacts tagged as one illustration; deprecated library versions; iter-1 design documents; third-party documentation pages).

**What's new:**

- A **standing meta-check** embedded inside the corrected L1 spec, addressing future spec-revisers: "are these criteria assuming a particular project's structure or conventions, or do they apply across projects?" — with a concrete 4-item checklist (folder structure, vocabulary, identifiers, phrasing).
- An **optional project-boundary declaration** the user may make when relevant, letting downstream disciplines treat the project boundary as a named concept rather than an implicit assumption.
- A **Recursive Demonstration section** recording that the previous finding's L1 spec itself exhibited Phantom Canon at meta-meta-level — the diagnostic-for-Phantom-Canon treated this project's artifact structure as canonical context for the L1's scope. This is a concrete instance of the pre-existing "lesson-introduces-its-own-trap" pattern (from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`), firing one layer above its original instance. No new failure-mode name was introduced; the existing pattern covers it.
- A **three-layer self-reference acknowledgment** (preserved Layer 1 — `/explore` canonical-vs-installed diff-check; added Layer 2 — canon-status declarations for this inquiry's referenced artifacts; added Layer 3 — applying the corrected L1's project-agnosticism check to the corrected L1's own phrasing, so the spec "eats its own dog food").

**Migration:** Future inquiries that reference artifacts of ambiguous canon-status should use the corrected L1 (this finding's `Maintenance Candidates` section) rather than the prior L1. The prior finding remains useful for the diagnostic frame and the failure-mode naming; only the L1 spec text is replaced.

---

## Question

Given that the prior LOOP_DIAGNOSE finding (`devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md`) defined the L1 maintenance candidate's trigger criteria using this-project-specific examples (file paths under `homegrown/`; discipline names like `/navigation` or `/explore`; prior inquiry IDs like `2026-05-12_11-40`) — and the user has correctly observed that this over-specification implicitly canonicalizes THIS project's artifact structure as the only context where Phantom Canon applies — what is the GENERIC formulation of L1's trigger criteria such that the failure mode prevention works for ANY artifact in ANY project, and what does fixing this say about Phantom Canon itself (that even the diagnostic-for-it can exhibit it)?

**Goal.** A re-issued LOOP_DIAGNOSE finding that (a) generalizes the L1 trigger criteria away from this-project-specific examples; (b) diversifies illustrative examples across contexts; (c) re-issues the diagnostic with corrected spec text while preserving the rest of the prior frame; (d) records the recursive demonstration explicitly as a meta-meta-lesson; (e) names cost honestly — this is the fifth MVL+ inquiry in succession on the related topic chain.

---

## Finding Summary

- **Diagnostic verdict:** preserved ACTIONABLE. The prior finding's diagnostic of the original correction chain (the inquiry at `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/` was repaired by `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/`) holds on its own terms. This finding corrects only the L1 specification text.

- **What this finding corrects.** The L1 trigger criteria phrasing, the category illustrative examples, and the description of which file is affected. The previous L1's phrasing read as if Phantom Canon were a this-project-specific failure mode; the corrected L1 uses project-agnostic phrasing applicable to artifacts in any project.

- **Corrected L1 trigger.** The pre-step fires when the inquiry's question or goal references any artifact whose canon-status — its relationship to the user's current intent for the question being asked — is non-obvious. The trigger applies equally to artifacts in the user's current project, artifacts in other projects the user is reasoning about, external references (W3C standards, RFCs, third-party libraries), and the user's own prior work products in any context.

- **Ambiguity threshold to prevent over-fire.** The corrected L1 fires only when the recognition heuristic — *"Can I easily say whether this artifact represents the user's current intent for the question being asked?"* — returns "no." Artifacts whose status is immediately clear from question/goal/context do not need the pre-step. This sensitivity slider replaces a binary fire-on-every-reference rule.

- **Six canon-status categories with diversified examples.** Beyond the prior finding's five categories (canon / non-canon / under-test / historical / unknown), the corrected L1 adds `external-uncertain` — a distinct category for third-party references whose authority for the inquiry is unclear. Examples for each category span multiple contexts rather than being drawn exclusively from this project.

- **New: standing meta-check on trigger criteria.** Embedded in the corrected L1 spec, addressing future spec-revisers: every revision of L1's trigger criteria must verify the criteria are not assuming a particular project's structure or conventions. A concrete 4-item checklist (folder structure, vocabulary, identifiers, phrasing) operationalizes the check.

- **New: optional project-boundary declaration.** The user may — but is not required to — declare the project boundary explicitly when the L1 pre-step fires. Useful for cross-project inquiries; soft to avoid forcing friction on inquiries clearly scoped to a single project.

- **Recursive demonstration (separate top-level section in this finding's body).** The prior LOOP_DIAGNOSE finding's L1 spec itself exhibited Phantom Canon at meta-meta-level: the diagnostic-for-Phantom-Canon treated this project's artifact structure as the canonical context for the L1's scope. This is a concrete instance of the pre-existing "lesson-introduces-its-own-trap" pattern firing one layer higher than its original instance. No new failure-mode name was introduced.

- **Three-layer self-reference acknowledgment.** Layer 1 (preserved): the prior finding's `/explore` canonical-vs-installed diff-check. Layer 2 (added): canon-status declarations for this inquiry's own referenced artifacts. Layer 3 (added): the corrected L1's project-agnosticism check applied to the corrected L1's own phrasing — the spec eats its own dog food.

- **Pattern-family extension.** The pre-existing "meta-conditions on verification" family naming is preserved (still calibration-state — emerging, not confirmed). The recursive demonstration adds a second concrete instance to the lesson-introduces-its-own-trap sub-member. A candidate variant — "spec-introduces-its-own-trap" — is flagged for future tracking (one instance is insufficient to name).

- **Honest cost-naming.** This is the fifth MVL+ inquiry in succession on the related topic chain. Cumulative cost is real and growing. The cumulative value justifying the fifth iteration: the recursive demonstration (concrete evidence the standing meta-check is necessary, not redundant); the CORRECTS-over-REFINES three-test reasoning template (reusable in future dimensional corrections); the spec-eats-its-own-dog-food architectural pattern (flagged as a research frontier in this finding's Open Questions). A simpler intervention — direct text-edit of the L1 — would have produced the corrected trigger phrasing without these surrounding outputs. The critique stage extracted a concrete guideline (in this finding's Reasoning section) for choosing direct-edit vs full-loop in future similar corrections.

---

## Finding

### Why this discussion exists

The project (Homegrown — a personal effort to build a thinking-discipline toolkit consisting of structured methodologies for exploration, sensemaking, decomposition, innovation, and critique) recently produced a diagnostic finding about a failure mode the project's MVL+ inquiry loop had encountered repeatedly: the loop was anchoring on artifacts that existed in the project but did not represent the user's current intent for the question being asked. The diagnostic named the failure mode Phantom Canon and proposed a pre-step (L1) for the `/MVL+` discipline runner to check artifact canon-status before each new inquiry's framing is written.

The user then noticed that the L1 spec, as written, treated Phantom Canon as if it were a failure mode specific to this project — the L1's trigger criteria listed `homegrown/` paths, this project's discipline names, and this project's inquiry-ID format as if these exhaustively defined when the pre-step should fire. The user's correction surfaces both a specific issue (the L1 spec needs project-agnostic phrasing) and a meta-meta-level observation (the diagnostic-for-Phantom-Canon itself exhibited Phantom Canon by treating this project's artifact structure as canonical context for the L1's scope).

This finding addresses both: it corrects the L1 spec to be project-agnostic and records the recursive demonstration as concrete evidence for a pattern that already exists in the project's vocabulary (lesson-introduces-its-own-trap, named in `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`).

### 1. Correction Chain Summary

| Field | Value |
|---|---|
| **Prior path** | `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md` |
| **Corrected path** | this finding |
| **Human correction (excerpt)** | *"why do you think this issue is only relevant to homegrown artifacts??? ... the same ghost canon could happen with any other artifact from any other project too. remake your loop run"* |
| **What changed** | The prior L1's trigger criteria enumerated this-project-specific examples (`homegrown/` paths, this-project discipline names, this-project inquiry-ID format) as if they exhaustively defined when Phantom Canon fires. The user identified this as itself a Phantom Canon at meta-meta-level: the L1 spec treated this project's artifact structure as canonical context for the L1's own scope. The corrected L1 generalizes the trigger to "any artifact whose canon-status could be ambiguous, regardless of project," with diversified examples + a standing meta-check + an optional project-boundary declaration. The prior diagnostic frame is preserved. |
| **Scope of the CORRECTS verdict** | Dimensional, NOT total. CORRECTS targets the L1 spec's project-agnosticism dimension. The diagnostic frame (what failed in the original 2026-05-14_00-01 → 2026-05-14_00-26 chain, why, with what confidence) is preserved on its own terms. |

### 2. Preserved Failure Hypotheses

The prior finding's three hypotheses about the original correction chain (the inquiry at `2026-05-14_00-01` being repaired by `2026-05-14_00-26`) are preserved unchanged. They describe the original chain's failure, not this inquiry's correction.

- **H1 — Framing-time implicit canonicalization (HIGH confidence; PRIMARY).** The prior inquiry's `_branch.md` Question text used `/navigation` without canon-status check; downstream stages inherited the commitment.
- **H2 — Upstream-commitment cascade (MEDIUM; supporting).** Prior findings' commitments propagated as defaults without re-verification.
- **H3 — Assistant in-conversation framing pre-bias (MEDIUM; contributing).** The assistant's natural-language reference to `/navigation` before the inquiry was created did not disambiguate the existing discipline spec from the user's future-concept usage.

For full hypothesis structure (Affected stage, Shortcoming type, Evidence from prior + correction + corrected, Confidence reasoning, Maintenance candidate, Evaluation gate), see the prior finding's "Failure Hypotheses" section. Re-elaborating here would duplicate content that has not changed.

### 3. Preserved Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| Loop framing / context elicitation (PRIMARY) | Implicit canonicalization | strong | HIGH | corrected L1 (this finding's section 5) |
| Cross-inquiry chain / cumulative anchoring | Anchored framing inheritance | medium | MEDIUM | secondary annotation; deferred |
| Pre-inquiry / context elicitation (assistant's reference) | Natural-language reference pre-bias | medium | MEDIUM | covered by corrected L1 |

The L1 row's "Candidate action" points to the corrected L1 in section 5 below, not the prior over-specified version.

### 4. Corrected Maintenance Candidates

This is the load-bearing section of the finding.

#### 4a. Primary: L1 — `/MVL+` artifact-canon-status pre-step (CORRECTED)

**What changes.** Add a pre-step to `/MVL+`'s root-NEW path — the moment when a new inquiry is being initialized but before its `_branch.md` (the file that records the inquiry's question, goal, and scope-check) is written. The pre-step is SELECTIVE; it does not fire on every inquiry.

**Trigger criterion (project-agnostic).** The pre-step fires when the question or goal text references any artifact whose canon-status — its relationship to the user's current intent for the question being asked — is non-obvious. The trigger applies regardless of which project the artifact belongs to. It applies equally to:

- artifacts in the user's current project (files, named entities, identifiers in any project's vocabulary),
- artifacts in other projects the user is reasoning about or comparing to,
- external references (libraries, standards, RFCs, frameworks, prior art, third-party documentation),
- the user's own prior work products in any context (prior inquiries, notes, drafts, archived findings, superseded designs).

**Ambiguity threshold (prevents over-fire).** The pre-step does NOT fire on every artifact reference — that would generate bureaucratic noise. It fires when canon-status is non-obvious. The recognition heuristic:

> *"Can I easily say whether this artifact represents the user's current intent for the question being asked?"*

If yes (status is immediately clear from question/goal/context), the pre-step does not fire. If no (status is non-obvious), the pre-step fires. The heuristic is a sensitivity slider, not a sharp threshold — two readers may reasonably differ on borderline cases. This subjectivity is intentional: it lets readers tune sensitivity to context rather than forcing a binary judgment.

**Per-artifact prompt (when pre-step fires).** For each artifact whose canon-status is ambiguous, prompt:

> *"What is the canon-status of `<artifact>` for the question being asked?"*
>
> - **`canon`** — represents current intent for this question.
>   *Examples (diversified across contexts):*
>   - The W3C HTML Living Standard cited as authoritative for a parsing question.
>   - A current Internet Engineering Task Force RFC referenced as the protocol-of-record for an integration design.
>   - A recently-published company API contract referenced as the integration target.
>   - A recently-shipped finding in the current project cited as established background for a new inquiry.
>
> - **`non-canon`** — exists as an accumulated or legacy attempt; do NOT treat as authoritative for this question.
>   *Examples:*
>   - An existing project discipline spec that was an earlier attempt (this project's `/navigation` discipline at the time of inquiry `2026-05-14_00-01` is one illustration, not a project-specific scope claim).
>   - A deprecated library version still present in a codebase but superseded by a newer integration.
>   - An early prototype prompt template that was never adopted by the team.
>
> - **`under-test`** — being verified by this inquiry; the test target itself.
>   *Examples:* a hypothesis spec the inquiry checks against operational reality; a competitor's published claim the inquiry tests against evidence; a draft architecture being adversarially evaluated.
>
> - **`historical`** — preserved for record but not current intent.
>   *Examples:* an iter-1 design document superseded by iter-2; a prior inquiry's finding kept in the archive but not load-bearing for this question; a meeting note that became preempted by a later decision.
>
> - **`external-uncertain`** — third-party reference whose authority for THIS question is not obvious.
>   *Examples:* a third-party library's documentation page whose recency is unclear; a Stack Overflow answer cited by a colleague; a blog post from an unknown author treated as informal background.
>
> - **`unknown`** — status not determined; proceed with caveat.
>   *Example:* an artifact whose canon-status the user genuinely doesn't know yet.

**Record the declarations.** Canon-status declarations are recorded in `_branch.md` under a "Referenced Artifacts" section. Downstream disciplines treat each declared status accordingly:

- `canon` → authoritative reference.
- `non-canon` and `historical` → context only; not authoritative; consider including in DO-NOT-READ lists for the inquiry's exploration step.
- `under-test` → the test target itself; not authoritative for its own verification.
- `external-uncertain` → cite with status caveat; do not treat as authoritative without further verification.
- `unknown` → proceed but note the canon-uncertainty in the final verdict.

**`unknown` is acceptable.** The pre-step's value is making the implicit explicit, not forcing a binary canon/non-canon judgment. An honest `unknown` declaration prevents silent canonicalization.

**Which file is affected.** `/MVL+`'s skill spec, at whatever location the canonical and installed versions live for the project. In the Homegrown project, the canonical spec lives at `homegrown/protocols/` (per the project's canonical-protocol-location convention); the installed version lives at `~/.claude/skills/MVL+/SKILL.md`. The corrected L1's runtime behavior is independent of where the canonical spec lives — the location convention is a property of the project, not of the L1 spec. The spec edit is doc-only.

**Risk class.** LOW. Doc-only; selective triggering avoids bureaucracy; `unknown` is acceptable so user friction is bounded; the ambiguity threshold prevents over-fire.

**Expected benefit.** Prevents Phantom Canon at the earliest point in the inquiry pipeline — before `_branch.md` is written, where the original correction chain's failure originated. Applies to artifacts in any project context, not just this one. Cumulative cost-savings: avoids correction-chain re-runs like the `2026-05-14_00-01` → `2026-05-14_00-26` case AND the present `2026-05-14_12-45` → `2026-05-14_13-08` case (where the prior L1's over-specification itself required correction).

**Evaluation gate.** After the corrected L1 is deployed, observe three future MVL+ inquiries that reference artifacts of ambiguous canon-status. For each:

1. Does the pre-step fire correctly (selective triggering, not over- or under-firing per the ambiguity threshold)?
2. Is the canon-status prompt answered, even if `unknown`?
3. Does downstream behavior reflect the declared status?
4. Are the trigger criteria project-agnostic at the time of firing (no this-project-specific assumption baked into the prompt)?

If all four pass on two of three inquiries → the corrected L1 is confirmed. If zero or one of three pass → revisit the prompt design.

**Branch-experiment Y/N.** NO — the edit is small enough to deploy directly.

#### 4b. Standing meta-check on trigger criteria (embedded in the L1 spec)

A standing rule embedded inside the L1 spec, addressing future spec-revisers: when defining or revising the L1 trigger criteria (or any future pre-step's trigger criteria for this project), the spec author must verify:

> *"Are these criteria assuming a particular project's structure or conventions, or do they apply across projects?"*

The 4-item concrete checklist:

- **Folder structure check.** Do example file paths name a specific folder structure (e.g., `homegrown/`)? If yes — generalize to "the project's canonical spec location, wherever that is."
- **Vocabulary check.** Do example artifact-type names assume a particular project's vocabulary (e.g., disciplines named `/navigation`, `/explore`)? If yes — keep them only as one illustration tagged as "an example from one project," and add examples from other contexts.
- **Identifier-convention check.** Do example identifiers assume a particular project's conventions (e.g., inquiry IDs in `YYYY-MM-DD_HH-MM__name` format)? If yes — generalize to "identifiers in the project's identifier scheme" and supply examples from at least two distinct identifier conventions.
- **Phrasing check.** Does the trigger criterion's phrasing assume the artifact "belongs to" a particular project (e.g., "artifacts under our codebase")? If yes — re-phrase to "the artifact, regardless of project."

**When the meta-check applies.** At spec-revision time, not at L1-runtime. Its purpose is preventative against future revisions re-introducing project-specific over-specification.

**Deployment recommendation (from critique).** Render the meta-check as a visually distinct sub-section with its own heading in the L1 spec's actual file. Spec-revisers encounter it on any edit to the trigger-criteria area. The check has no enforcement mechanism — it relies on the project's culture of treating documented constraints as obligations rather than suggestions. This is the same reliance other documented project conventions have. The hedge here is specific: the check could be bypassed by a spec-reviser who edits trigger criteria without consulting the checklist; visual prominence at deployment-time is the mitigation.

**Why this exists.** The prior LOOP_DIAGNOSE finding's L1 spec was over-specified to this project's structure (see section 6 — Recursive Demonstration). A one-time correction (this finding) fixes the current instance; the standing meta-check prevents recurrence at the spec-revision layer.

#### 4c. Optional project-boundary declaration

When the L1 pre-step fires, the user MAY declare the project boundary explicitly:

> *"For THIS inquiry, the project boundary is `<X>`; artifacts within `<X>` are considered project-internal; artifacts outside `<X>` are considered external."*

The declaration is OPTIONAL, not mandatory.

**Default behavior (no declaration).** Apply the canon-status check uniformly to every referenced artifact, without distinguishing internal/external.

**When the declaration helps.**

- Inquiries that span multiple projects (e.g., comparing this project's discipline spec to another project's analogous spec).
- Inquiries where the user wants downstream disciplines to treat "the project boundary" as a named concept rather than an implicit assumption (which itself would be a Phantom Canon risk at the project-frame level).
- Inquiries that reference external authoritative sources alongside internal artifacts.

**When the declaration is unnecessary.**

- Inquiries clearly scoped to a single project where no external comparison is in play.
- Inquiries where every referenced artifact's canon-status is already declared.

**Why optional, not mandatory.** Forcing the declaration on every inquiry would create friction. Letting the user opt in when relevant preserves the L1 pre-step's lightweight character.

#### 4d. L4 deferred (preserved from prior finding)

L4 is a deferred secondary candidate proposed in the prior finding: add a new named failure mode (Phantom Canon) to the `/explore` discipline spec's named-failure-modes list, providing defense-in-depth at the discipline layer if L1 fails to catch a case at the framing layer.

Status is PRESERVED. Revival trigger is unchanged: if the corrected L1 fails to catch a Phantom Canon case in three future MVL+ inquiries, deploy L4. See the prior finding's "Deferred: L4" subsection for full L4 specification.

### 5. Diagnostic Verdict

**Overall:** preserved ACTIONABLE.

- **Best-supported diagnosis (preserved):** Framing-time implicit canonicalization (Hypothesis H1, HIGH confidence). The original correction chain's primary failure attribution holds.

- **Strongest maintenance candidate (corrected):** L1 — `/MVL+` artifact-canon-status pre-step, with the corrected project-agnostic trigger criteria (section 4a), the standing meta-check on trigger criteria (section 4b), and the optional project-boundary declaration (section 4c). Risk LOW; expected benefit HIGH; project-agnostic.

- **Main uncertainty (extended).** Preserved: whether the corrected L1 alone catches all Phantom Canon cases, or whether the deferred L4 (defense-in-depth at the `/explore` discipline layer) is needed. Calibration over three future inquiries will resolve this. Added: whether the corrected L1's generic formulation itself over-specifies along some other dimension not yet noticed; the standing meta-check (section 4b) is the structural mitigation for that risk.

- **Recommended next step.** Apply the corrected L1 to `/MVL+`'s skill spec — both the canonical version at `homegrown/protocols/` and the installed version at `~/.claude/skills/MVL+/SKILL.md`. Preserve this finding as the project's precedent for "when even a careful failure-mode diagnostic itself exhibits the failure it names." Monitor three future inquiries; revisit the L4 deferral if the corrected L1 doesn't fire correctly.

### 6. Recursive Demonstration

The prior LOOP_DIAGNOSE finding's L1 spec — the spec this finding corrects — itself exhibited Phantom Canon at meta-meta-level.

**The mechanism.** The prior finding correctly named Phantom Canon as a generic failure mode (artifact treated as canon without check). The L1 maintenance candidate was designed to prevent Phantom Canon at framing time. But the L1 spec's own trigger criteria enumerated this-project-specific examples (`homegrown/` paths, this-project discipline names, this-project inquiry-ID format) as if they exhaustively defined the failure mode's scope. That implicit canonicalization of this project's artifact structure as the L1's scope-of-applicability is itself Phantom Canon — operating at the meta-meta-level (the L1 spec, not the artifacts the L1 is meant to catch).

**Concrete instance of a pre-existing pattern.** This is a concrete instance of the "lesson-introduces-its-own-trap" pattern, named in `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`. The lesson (Phantom Canon naming + L1 prevention spec) introduced a vocabulary and implementation, and the implementation became a vector for the failure mode the lesson names: the L1 spec treated the project's artifact structure as canon-of-the-diagnostic's-scope. The mechanism is the same as the original instance — a lesson's introduction creating a vector for the failure it names — operating at the spec-implementation layer rather than the conversational-introduction layer where the original instance fired.

**No new failure-mode name introduced.** The recursive case is covered by the existing pattern. A candidate sub-pattern — "spec-introduces-its-own-trap" — is flagged in section 7 for future tracking, but one instance is insufficient to name a new sub-pattern.

**Attenuated-failure-as-teaching framing.** The L1 spec's over-specification did not actually fire on a real Phantom Canon case in the wild (the L1 was not yet deployed); it surfaced when the spec was being authored, and the user caught it before deployment. The failure mode appeared in a form weak enough not to cascade damage but visible enough to teach — analogous to learning from a worked example rather than a live incident. The structural property is: the failure appearing in a teachable rather than damaging form.

**What this teaches.** Even careful diagnostics about a failure mode can exhibit the failure mode at one level higher than the level at which they operate. The standing meta-check on trigger criteria (section 4b) is the structural mitigation. The recursive demonstration in this section is the concrete evidence that the meta-check is necessary, not redundant.

**What this does not claim.**

- It does not claim the prior LOOP_DIAGNOSE finding was wholly wrong. The diagnostic frame (verdict ACTIONABLE, hypotheses, attribution, family positioning, self-reference structure) holds on its own terms.
- It does not claim Phantom Canon needs renaming or restructuring. The failure-mode concept is sound; only the L1 spec's trigger-criteria phrasing was over-specified.
- It does not claim the recursive case is a new failure mode. It is a concrete instance of an existing pattern.

**Why this gets its own top-level section (not folded into the self-reference acknowledgment).** The recursive demonstration operates at a different layer than the standard self-reference check. Standard self-reference asks: *"did this inquiry treat artifacts as canon without status check?"* — at the artifact-reference layer. The recursive demonstration asks: *"did the prior finding's spec treat the project's structure as canon for the spec's own scope?"* — at the diagnostic-specification layer. Different layers; structurally distinct cases warranting separate treatment.

### 7. Pattern-family positioning

The "meta-conditions on verification" family naming from the prior finding is preserved. The family captures patterns about CONDITIONS that affect the verification process itself rather than the verification's content. Three members are named so far:

1. **Lesson-introduces-its-own-trap** (from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`). When a new vocabulary is introduced in a meta-lesson, the vocabulary can become a vector for the failure mode the lesson names.

2. **Framing-load-bearing** (from `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md`). The same hypothesis can produce different verdicts under different framings (scope, referent, granularity).

3. **Phantom Canon** (named in the prior LOOP_DIAGNOSE finding; corrected here). A project artifact, or any artifact in any project, treated as canon without canon-status check.

**Calibration note (preserved).** The family is EMERGING, not confirmed. Pattern-confirmation requires three or more additional named patterns sharing the family feature.

**Extension added in this finding.** The recursive demonstration in section 6 provides concrete evidence for the lesson-introduces-its-own-trap member firing at meta-meta-level — a second instance of that sub-member. Previously, lesson-introduces-its-own-trap had one observed instance (the original from `2026-05-13_12-45`). With the recursive case added, it now has two:

- Original instance: a meta-lesson's introduction created a vector for the failure mode it named, at the conversational-introduction layer.
- Recursive instance: a diagnostic finding's L1 spec for a failure mode itself exhibited that failure mode, at the spec-implementation layer.

Two instances is still calibration-state (not pattern-confirmation), but stronger evidence than one for the sub-pattern's reality.

**Candidate variant flagged for future tracking (not named).** The recursive case suggests a potential sub-pattern: **spec-introduces-its-own-trap** — when a spec defining a check itself exhibits the failure mode the check is meant to catch (versus the original lesson-introduces-its-own-trap operating at the conversational-introduction layer). One instance is insufficient to name; the variant is flagged as a candidate for future tracking.

**Pattern-confirmation trigger (preserved + extended):**

- If three or more additional failure modes share the meta-conditions-on-verification feature → family-naming earns confirmation.
- If a second instance of spec-introduces-its-own-trap surfaces → promote the spec-level variant to a named sub-pattern.

**Pattern-revision trigger (preserved).** If a future named pattern doesn't fit the family cleanly → the family may need decomposition.

### 8. Self-reference acknowledgment — three layers

#### Layer 1: preserved from the prior finding — `/explore` canonical-vs-installed diff-check

The prior LOOP_DIAGNOSE finding applied the proposed L1 lesson to its own work by checking whether the canonical `/explore` spec at `homegrown/explore/references/explore.md` diverged from the installed runtime version at `~/.claude/skills/explore/references/explore.md`. The diff-check result was an empty diff — no divergence on load-bearing content. The prior diagnostic was grounded in canon, not just installed-runtime. This layer is preserved.

#### Layer 2: added — canon-status declarations for THIS inquiry's referenced artifacts

This inquiry's `_branch.md` Scope Check applied the proposed L1's check to its own referenced artifacts, declaring canon-status for each:

| Referenced artifact | Declared canon-status | Justification |
|---|---|---|
| Prior LOOP_DIAGNOSE finding (`2026-05-14_12-45__...`) | `under-test` | The artifact being corrected by this inquiry. |
| User's correction quote | external signal, not an artifact | Canon-status not applicable — it's input, not a referenced artifact. |
| Strengthened diagnostic finding (`2026-05-13_12-45__...`) | `canon` | Authoritative for this inquiry's relationship-declaration decision-making. |
| LOOP_DIAGNOSE protocol (`homegrown/protocols/loop_diagnose.md`) | `canon` | Authoritative for the diagnostic format. |
| Discipline skill specs at `~/.claude/skills/` | `canon` | Canonical-vs-installed match per the prior finding's diff-check. |

None of the referenced artifacts were silently canonicalized. The check was applied rigorously to this inquiry's own scope.

#### Layer 3: added — the corrected L1's trigger criteria themselves checked for project-agnosticism (the spec eats its own dog food)

Per the standing meta-check defined in section 4b: the corrected L1's trigger criteria were themselves checked for project-agnosticism before this finding was committed. The check on each component of the corrected L1:

| Component | Project-agnostic? | Justification |
|---|---|---|
| Trigger phrasing ("any artifact whose canon-status could be ambiguous, regardless of project") | YES | Names artifact + ambiguity + "regardless of project"; no project-specific terms. |
| Ambiguity threshold heuristic ("Can I easily say whether this artifact represents the user's current intent for the question being asked?") | YES | Uses "this artifact" and "the question"; no project-specific terms. |
| Category examples (W3C HTML spec; current RFC; current company API contract; this-project `/navigation` as one illustration; deprecated library version; prototype prompt template; iter-1 design; third-party library page) | YES | Examples span multiple contexts; this-project example is explicitly tagged as "one illustration, not a project-specific scope claim." |
| File-affected phrasing ("the project's canonical spec location, wherever that is") | YES | Explicitly project-agnostic. |
| Standing meta-check phrasing ("Are these criteria assuming a particular project's structure or conventions?") | YES | The check itself is the project-agnosticism check. |
| Optional project-boundary declaration | YES | The mechanism for letting the user declare project boundary is itself project-agnostic. |

The corrected L1 passes the meta-check on its own application. The hedge is specific: the "category examples" row includes one this-project example; this is a bounded concession traded for pedagogical concreteness. A strictly project-agnostic alternative (no this-project examples at all) is flagged in this finding's Open Questions as an unexplored region for future iteration; the chosen balance is justifiable but not the strongest possible form.

**Why all three layers matter.** Layer 1 demonstrated applied-lesson at the discipline-spec divergence layer (the layer where canonical and installed versions can drift). Layer 2 demonstrates applied-lesson at the inquiry-referenced-artifact layer (the layer the corrected L1 is designed to catch). Layer 3 demonstrates applied-lesson at the L1-spec-trigger-criteria layer (the meta-meta-level where the recursive demonstration in section 6 fired). Each layer addresses a different vector for Phantom Canon. The three layers together represent the spec's self-application across the levels at which Phantom Canon can fire.

---

## Next Actions

### MUST

No MUST actions. This finding is diagnostic; the maintenance candidate is presented for the user's decision rather than required for the finding's value to be realized.

### COULD

- **What:** Apply the corrected L1 (project-agnostic trigger from section 4a + standing meta-check from section 4b + optional project-boundary from section 4c) to `/MVL+`'s skill spec.
  - **Who:** the user (or whoever maintains the `/MVL+` skill spec), editing both `homegrown/protocols/` canonical and `~/.claude/skills/MVL+/SKILL.md` installed.
  - **Gate:** condition-bound — when the user is ready to commit the L1 edit.
  - **Why:** prevents Phantom Canon at the earliest point in the inquiry pipeline AND prevents project-specific over-specification of the trigger criteria in future revisions.

- **What:** Apply the standing meta-check (section 4b) retrospectively to other pre-step specifications or discipline-trigger specifications across the project — checking whether any of them have similar latent project-specific over-specifications.
  - **Who:** spec-maintenance review session.
  - **Gate:** condition-bound — during a project-vocabulary or spec-maintenance review.
  - **Why:** the recursive demonstration suggests this kind of over-specification may exist elsewhere; a retrospective audit would catch latent instances.

- **What:** Add the "spec-introduces-its-own-trap" candidate variant (flagged in section 7) to the project pattern-family tracker for future calibration.
  - **Who:** project-vocabulary maintenance.
  - **Gate:** condition-bound — when the project-vocabulary doc is being maintained.
  - **Why:** systematic tracking helps detect a second instance if it surfaces, which would promote the variant to a named sub-pattern.

- **What:** Add this finding's Phantom Canon naming and corrected L1 spec to the project vocabulary glossary alongside lesson-introduces-its-own-trap and framing-load-bearing.
  - **Who:** project-vocabulary maintenance.
  - **Gate:** condition-bound — during the next project-vocabulary doc review.
  - **Why:** makes the corrected vocabulary discoverable for future inquiries.

### DEFERRED

- **What:** L4 — add Phantom Canon to the `/explore` discipline spec's named-failure-modes list, providing defense-in-depth at the discipline layer.
  - **Gate:** observable revival trigger — if the corrected L1 fails to catch a Phantom Canon case in three future MVL+ inquiries.
  - **Why (if revived):** defense-in-depth catches cases that slip past the L1 pre-step at the framing layer.

- **What:** Retrospective audit of prior MVL+ inquiries to identify other instances where Phantom Canon was at play.
  - **Gate:** condition-bound — during a cumulative-quality review session.
  - **Why (if revived):** historical instances strengthen the family-confirmation calibration.

- **What:** Pattern-confirmation for the meta-conditions-on-verification family.
  - **Gate:** observable revival trigger — three or more additional named patterns sharing the family feature.
  - **Why (if revived):** family-naming earns confirmation; project-vocabulary stabilizes.

---

## Reasoning

This section explains why this finding's structure and verdicts hold against the alternatives that were considered and rejected.

### Why CORRECTS over REFINES

The project uses a strengthened diagnostic from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` to decide whether a new finding CORRECTS, REFINES, or SUPERSEDES a prior finding. The diagnostic applies three tests; three NOs warrant CORRECTS, two NOs warrant REFINES at most, one NO warrants neither.

Applied to the prior finding's L1 spec on the project-agnosticism dimension:

- **Claim-truth test.** Did the prior L1 claim that its trigger criteria covered Phantom Canon's full scope? Implicitly yes — the criteria were stated as the rule for when the pre-step fires. Under the user's correction, this implicit claim is false; the trigger criteria covered only this-project's artifact patterns, not Phantom Canon's actual generic scope. → **NO.**

- **Level-coherence test.** Was the L1's trigger-criteria specification at the right level for the failure mode it was meant to catch? Phantom Canon is a generic failure mode (artifact-treated-as-canon-without-check); the trigger criteria specified this-project-specific examples; the levels don't cohere. → **NO** (contestable under a charitable reading that treats parenthetical examples as illustrative, but the verdict survives without this NO).

- **External-citation test.** Could the prior L1's trigger criteria be cited as authoritative for catching Phantom Canon in another project's context? No — the criteria don't transfer outside the listed this-project examples without re-derivation. → **NO.**

Three NOs (or two NOs under the charitable reading) → CORRECTS verdict on the L1 spec's project-agnosticism dimension. The verdict is DIMENSIONAL — it does not extend to the diagnostic frame, which holds on its own terms.

### Why CORRECTS, not SUPERSEDES

SUPERSEDES would mean the prior finding is wholly replaced. That overreaches. The prior finding's verdict, hypotheses, attribution, family positioning, and self-reference structure are all sound. CORRECTS targets only the L1 spec's project-agnosticism dimension; the rest is preserved.

### What was preserved + why

| Element | Why preserved |
|---|---|
| Verdict ACTIONABLE | The underlying diagnostic correctness is unaffected by the L1 spec's project-agnosticism dimension. |
| H1 HIGH framing-time, H2 MEDIUM cascade, H3 MEDIUM pre-bias | These describe the original 2026-05-14_00-01 → 2026-05-14_00-26 correction chain, not the L1 spec's phrasing. |
| Failure Attribution Summary table | Attribution analysis is independent of L1 phrasing. |
| Phantom Canon failure-mode name | The failure mode is correctly named; only the L1 spec's trigger criteria were over-specified. |
| Pattern-family positioning (with calibration) | Family-naming holds; the recursive demonstration provides concrete evidence (one new instance) for one member. |
| Self-reference structure (with `/explore` canonical-vs-installed diff-check) | Preserved as Layer 1; Layers 2 and 3 added. |
| L4 deferred with revival trigger | L4's role is unchanged; defense-in-depth pending L1 calibration. |

### What was corrected + why

| Element | Why corrected |
|---|---|
| L1 trigger criteria phrasing | Over-specified to this-project examples. The user identified this as itself a Phantom Canon (the L1 spec treated this project's artifact structure as canonical context for the L1's scope). |
| L1 category illustrative examples | Previously leaned heavily on this-project artifacts; diversified examples across W3C, RFC, library, this-project (tagged as one illustration), and prior-work-product contexts. |
| L1 file-affected phrasing | Previously assumed a project-specific canonical-spec location convention; generalized to "the project's canonical spec location, wherever that is." |
| Added: standing meta-check on trigger criteria | The prior L1 had no preventative against re-introducing project-specific over-specification in future revisions. |
| Added: optional project-boundary declaration | The prior L1 had no affordance for letting users declare project boundary explicitly when inquiries span projects. |

### Why "Phantom Canon" stays the name at the generic level

The failure mode's name applies cleanly at the generic level. "Phantom Canon" describes the mechanism — an artifact LOOKS canonical (exists, persists, bears authority-signals) but may not represent current intent. Nothing in the name implies project-scope; the project-scoping was an over-specification of the prior L1's trigger criteria, not of the failure-mode concept itself.

### Why no new name was introduced for the recursive case

Naming a new failure mode for the recursive case ("Recursive Phantom Canon"; "Self-evading lesson"; "Spec-introduces-its-own-trap" as a named member) was considered and rejected. The recursive case is a concrete instance of an existing pattern (lesson-introduces-its-own-trap from `2026-05-13_12-45`), not a new pattern. Naming a new failure mode for one instance would be premature.

A candidate variant — "spec-introduces-its-own-trap" — is flagged in section 7 of the Finding body for future tracking. It is not named here because one instance is insufficient; promotion is gated on a second instance surfacing.

### What was killed in this iteration

The critique stage identified what was considered and rejected. Brief mentions:

- **Hybrid L1+L4 as the primary candidate (raised in the prior finding; preserved-rejection here).** One diagnostic chain justifies one source edit. L4 stays deferred behind L1.
- **A new discipline ("/canon-status") for the check.** The check is a pre-step, not a discipline.
- **Treating the prior finding's verdict as wholly wrong (SUPERSEDES).** Only the L1 spec's project-agnosticism dimension was wrong; the rest holds.
- **Mandatory project-boundary declaration.** Killed in favor of OPTIONAL — letting users opt in preserves the L1's lightweight character.
- **Skipping the standing meta-check as redundant after one-time correction.** The meta-check is preventative against future revisions, not redundant with this correction.
- **Embedding the recursive demonstration inside the self-reference acknowledgment.** The recursive case operates at a different layer (spec layer versus artifact-reference layer) and warrants its own top-level section.
- **Re-elaborating the preserved hypotheses in full.** Re-elaboration would duplicate content that has not changed and risk introducing inconsistency; brief cross-reference is sufficient.

### Contradictions reconciled across the disciplines

- **CORRECTS verdict on L1 spec versus preserved verdict on the diagnostic frame.** Reconciled by making the CORRECTS dimensional (L1 project-agnosticism only), not total.
- **Standing meta-check as new content versus preserved-finding framing.** Reconciled by placing the meta-check inside the corrected L1 (section 4b is a sub-piece of section 4, not a separate top-level addition).
- **Recursive demonstration as evidence for the family versus the family's calibration-state.** Reconciled by adding the instance count (two instances of lesson-introduces-its-own-trap) without elevating the family's overall calibration prematurely.

### Honest cost-naming + direct-edit-vs-full-loop guideline

This is the fifth MVL+ inquiry in succession on the related topic chain (the chain: verification-1 of /navigation as configured /explore at the spec level; verification-2 of /navigation as configured /explore at the concept level; LOOP_DIAGNOSE on the chain; this CORRECTS on that LOOP_DIAGNOSE's L1 spec; counting from the strengthened-diagnostic root at `2026-05-13_12-45`). Cumulative cost is real and growing.

The critique stage extracted a concrete guideline for choosing direct-edit versus the full MVL+ loop in future similar corrections:

| Use direct edit when... | Use the full MVL+ loop when... |
|---|---|
| The correction is text-only without diagnostic implications. | The correction surfaces a meta-meta-level failure (recursive demonstration). |
| No new pattern is being recognized. | A pattern-family member needs concrete evidence. |
| The prior finding's diagnostic frame is unchanged. | A new architectural pattern is emerging. |
| The prior verdict, hypotheses, attribution all stand. | The prior load-bearing artifact (like the L1 here) needs structural correction. |

For this iteration specifically, the full loop produced outputs that direct edit could not have produced: the recursive demonstration as concrete evidence (section 6); the CORRECTS-over-REFINES three-test reasoning template (this section); the pattern-family extension calibration (section 7); the three-layer self-reference acknowledgment with the spec-eats-its-own-dog-food check in Layer 3 (section 8); and the emergent architectural pattern (the spec defines a check, embeds a meta-check requiring future revisers to apply the check, records evidence the meta-check is necessary, and applies the meta-check to itself).

A simpler intervention — direct text-edit of the L1 trigger phrasing — would have produced sections 4a, 4b, and 4c without the surrounding outputs. Under the user's explicit signal ("remake your loop run"), the loop's full output is what was requested. For future similar corrections without that explicit signal, the guideline above applies.

---

## Open Questions

### Monitoring

- **Corrected L1 calibration.** Across three future MVL+ inquiries that reference artifacts of ambiguous canon-status — in any project, not just this one: does the corrected pre-step fire correctly per the ambiguity threshold? Is `unknown` declared honestly when status is genuinely unknown? Does downstream behavior respect the declared status? Are the trigger criteria project-agnostic at the time of firing?
- **Standing meta-check effectiveness.** Does the meta-check in section 4b actually get applied at future L1 revisions (or to other pre-step specs)? Does it prevent project-specific over-specification from being re-introduced? Observable after three or more future L1 revisions.
- **Two-reader convergence on the ambiguity threshold.** Do different readers applying the ambiguity threshold heuristic to the same artifact reference produce convergent canon-status declarations? Observable after three future inquiries where two readers independently apply the pre-step.
- **Family-confirmation trajectory.** Does the "meta-conditions on verification" family continue accruing patterns? Pattern-confirmation requires three or more additional named patterns; with the recursive demonstration adding a second instance for lesson-introduces-its-own-trap, the family is closer to (but not at) confirmation.

### Research Frontiers

- **Concept-vs-spec divergence pattern across other project disciplines** (e.g., `/comprehend` if it exists; `/innovate` revisions). Carried over from the prior finding.
- **Whether discipline specs should carry formal canon-status metadata** (e.g., a frontmatter field declaring status). Carried over from the prior finding.
- **Whether the "spec-introduces-its-own-trap" candidate variant generalizes** — does a second instance surface in future inquiries? If yes, promote the variant to a named sub-pattern within lesson-introduces-its-own-trap.
- **Whether other pre-step or discipline-trigger specifications in the project have similar latent project-specific over-specifications** waiting to be discovered by the standing meta-check from section 4b.
- **Whether the "spec eats its own dog food" architectural pattern** (the corrected L1's trigger criteria checked against the L1's own meta-check, per section 8 Layer 3) generalizes — should all spec corrections demonstrate this kind of structural self-application as standard practice?
- **A strictly project-agnostic L1 form with no this-project examples at all** (versus the chosen balanced form with one tagged this-project example for pedagogical concreteness). Trade-off: strict project-agnosticism vs concrete illustration. Decide based on deployment feedback after three future inquiries.

### Refinement Triggers

- **If a future MVL+ inquiry references artifacts of ambiguous canon-status and produces a Phantom Canon failure despite the corrected L1** — revisit the L1's prompt design; consider promoting the deferred L4.
- **If the "meta-conditions on verification" family accrues three or more additional patterns** — family-naming earns confirmation; record in the project vocabulary as a stable family.
- **If a second instance of spec-introduces-its-own-trap surfaces** (one more case where a check-defining spec exhibits the failure it checks for) — promote the candidate variant to a named sub-pattern of lesson-introduces-its-own-trap.
- **If the corrected L1 fires on a non-this-project artifact and works correctly** — document the case as confirmation of the correction's project-agnostic effectiveness.
- **If a future MVL+ run extends the L1 trigger criteria (adds new artifact categories)** — the spec-reviser MUST apply the standing meta-check from section 4b before committing the change.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+ ... use homegrown/protocols/loop_diagnose.md

Maintenance Candidates
Primary: L1 — /MVL+ artifact-canon-status pre-step
What changes. Add a pre-step to /MVL+'s root-NEW path (before _branch.md is written). The pre-step is SELECTIVE: it fires only when the question or goal text explicitly references project artifacts (file paths under homegrown/, discipline names like /navigation or /explore, prior inquiry IDs like 2026-05-12_11-40).


why do you think this issue is only relevant to homegrown artifacts???  it is obvious the problem mentioned in devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md

is generic , Just so we were working under this (hoomegrown) project, the error showed itself with such face, the same ghost canon could happen with any other artifact from any other project too


remake your loop run
```

</details>
