---
status: active
diagnoses:
  - devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md
compares-with:
  - devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md
depends-on-protocol:
  - homegrown/protocols/loop_diagnose.md
related:
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
  - devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md
---

# Finding: Loop Diagnose — Phantom Canon (Existing-Artifact-as-Canonical-Reference)

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/`, the human correction (the user re-invoked /MVL+ with explicit clarification that the existing `/navigation` spec was "not correct fully" and should NOT be the test target — "navigation" was meant as the general future concept), and the later improved inquiry at `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow — specifically, can we name a failure mode so future loops catch when a referenced project artifact is a half-tried legacy rather than canon?

---

## Surrounding context

The user invoked `homegrown/protocols/loop_diagnose.md` after observing that the previous correction-chain revealed a recurring failure pattern: *"in [the prior inquiry] and many before mvl inquiries we were talking about navigation but we had a already existing navigation spec and it caused so many confusuion... when i was referring to navigation i was referring to unexisting future concept whcih doesnt exists now. but somehow our loops were confused."* The user identified the pattern as broader than the immediate case: *"in projects there are lots of half tried assets artifacts and they might not be cannon."*

This finding produces the diagnostic per LOOP_DIAGNOSE Step 4 format: failure hypotheses with evidence and confidence levels; a maintenance candidate (with risk + evaluation gate); a project-vocabulary failure mode name; and pattern-family positioning.

---

## Finding Summary

- **Diagnostic verdict: ACTIONABLE.** The prior inquiry's loop committed to the existing `/navigation` discipline spec as authoritative test target at framing time, without checking whether the spec represented the user's current intent for "navigation."
- **Primary failure hypothesis (HIGH confidence): Framing-time implicit canonicalization.** The prior `_branch.md` Question used `/navigation` without canon-status check; downstream stages inherited the commitment. Corrected inquiry (2026-05-14_00-26) repaired this by explicit framing-exclusion + DO NOT READ list + cross-domain external grounding.
- **Failure mode name: Phantom Canon** (technical) — user's lay term: "half-tried artifacts." A project artifact treated as canon without canon-status check; looks canonical because it exists, but may be a historical/legacy attempt rather than current intent.
- **Primary maintenance candidate: L1 — `/MVL+` artifact-canon-status pre-step.** Add a selective pre-step at root-NEW creation that fires when the inquiry's question explicitly references project artifacts. Per artifact, prompt for canon-status with concrete category examples; `unknown` is acceptable.
- **Deferred maintenance candidate: L4 — `/explore` §4.1 named failure mode entry.** Revival trigger: if L1 fails to catch a Phantom Canon case in 3 future inquiries.
- **Pattern-family positioning.** Third in an emerging "meta-conditions on verification" family — sister to `lesson-introduces-its-own-trap` (2026-05-13_12-45) and `framing-load-bearing` (2026-05-14_00-26). Family naming is calibration-state — emerging; pattern-confirmation requires more cases.
- **Self-reference acknowledgment (applied lesson, not performative).** This inquiry's reference to `/explore` spec was sourced from the installed runtime version. To genuinely apply the proposed L1 lesson, I checked whether `homegrown/explore/references/explore.md` (canonical) diverges from the installed `~/.claude/skills/explore/references/explore.md`. **Result: NO divergence found** — the canonical and installed versions are identical on load-bearing content. The self-reference check passes concretely, not just rhetorically.
- **Honest cost-naming.** This is the fourth MVL+ inquiry in succession on the related topic chain. Cumulative cost is real. Cumulative value is the meta-vocabulary expansion (Phantom Canon as third pattern in the family) + the L1 maintenance candidate that prevents future similar chains.

---

## Correction Chain Summary

| Field | Value |
|---|---|
| **Prior path** | `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md` |
| **Corrected path** | `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md` |
| **Human correction (excerpt)** | *"don't use already existing navigation discipline as reference, it is not correct fully... when we say navigation we mean in general findingpaths... in projects there are lots of half tried assets artifacts and they might not be cannon"* |
| **What changed** | Prior committed to existing `/navigation` spec as test target → verdict NO with 4 residuals. Corrected explicitly excluded the spec + grounded in first principles + cross-domain → verdict YES at conceptual level. Both verdicts are correct for their respective questions (different scopes; framing-load-bearing meta-lesson named in corrected). |

---

## Failure Hypotheses

### Hypothesis 1: Framing-time implicit canonicalization

**Affected stage:** Loop framing / context elicitation (PRIMARY); cascades to `/explore`'s artifact-reading and `/sense-making`'s anchor-extraction.

**Shortcoming type:** Implicit canonicalization — the referenced project artifact was treated as authoritative test target without explicit canon-status declaration. The loop's framing committed by default to the existing artifact when the user's intent was a different referent.

**Evidence from prior inquiry:** The prior `_branch.md` Question reads *"Is `/navigation` structurally the same discipline as `/explore`, differing ONLY in how its mapping is configured..."* — uses `/navigation` without canon-status qualifier. The Goal section references *"the original `/navigation` finding's specialization treatment (per the 2026-05-12_11-40 inquiry)"* as established context. The exploration's KEY ARTIFACTS TO READ list named `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md` as authoritative reads.

**Evidence from human correction:** The user's reframing explicitly excluded the existing `/navigation` discipline as reference: *"don't use already existing navigation discipline as reference, it is not correct fully."* The user clarified that *"when we say navigation we mean in general findingpaths"* — naming the intended referent as the future concept, not the existing spec.

**Evidence from corrected inquiry:** The corrected `_branch.md` Scope Check has a "Specific exclusion" naming the existing `/navigation` discipline spec as NOT the reference. The corrected exploration had a DO NOT READ list. The corrected sensemaking and exploration grounded in first principles + cross-domain external treatments rather than in project-internal artifacts.

**Confidence:** HIGH. Multiple artifacts converge (prior framing + corrected anti-commitment structure + user's explicit reframing). The corrected inquiry clearly repairs the same failure.

**Why not stronger:** No stronger level than HIGH applies. The hypothesis is well-supported on multiple independent grounds.

**Maintenance candidate:** L1 — `/MVL+` artifact-canon-status pre-step (see Maintenance Candidates below).

**Evaluation gate:** Deploy L1 to `/MVL+` skill spec; observe 3 future inquiries that reference project artifacts in their questions. If the pre-step fires correctly and prevents a Phantom Canon commitment in any of them, the hypothesis is corroborated.

---

### Hypothesis 2: Upstream-commitment cascade

**Affected stage:** Cross-inquiry chain / cumulative anchoring (not isolated to one discipline; spans the project's accumulated commitments).

**Shortcoming type:** Anchored framing inheritance — prior findings' commitments propagate as defaults without re-verification.

**Evidence from prior inquiry:** The prior `_branch.md`'s Goal section explicitly cites the prior 2026-05-12_11-40 finding as established context. The cascade was inherited, not originated.

**Evidence from human correction:** The user noted *"many before mvl inquiries"* had similar confusion — signaling that the cascade is a recurring contributor.

**Evidence from corrected inquiry:** The corrected inquiry treats the 2026-05-12_11-40 finding as RELATED-context but does NOT inherit its B-refined model as authoritative.

**Confidence:** MEDIUM. The cascade IS contributing, but Hypothesis 1 would fire even without it (the assistant's natural-language reference + the spec's existence at `homegrown/navigation/` would have sufficed to anchor the spec-as-canon assumption).

**Why not stronger:** Cascade-causality vs cascade-contribution is hard to isolate from the evidence; conservative reading places it as MEDIUM.

**Maintenance candidate:** Secondary — annotate prior findings with canon-status declarations when they're cited in later inquiries. DEFERRED.

**Evaluation gate:** Monitor cross-inquiry citations over time for canon-status declarations.

---

### Hypothesis 3: Assistant in-conversation framing pre-bias

**Affected stage:** Pre-inquiry / context elicitation by the runner.

**Shortcoming type:** The assistant's natural-language reference (in conversation, before the inquiry was created) used `/navigation` without disambiguating concept vs spec.

**Evidence from prior inquiry:** Before the prior inquiry was created, the assistant had argued the unification hypothesis using `/navigation` as the referent — implicitly the existing discipline. The inquiry's `_branch.md` inherited this framing.

**Evidence from human correction:** The user's reframing emphasized that "navigation" was meant as a future concept; the assistant's prior usage had not disambiguated.

**Evidence from corrected inquiry:** The corrected inquiry's Surrounding context section explicitly named the assistant's prior in-conversation argument as a contributor that didn't disambiguate.

**Confidence:** MEDIUM. This is a contributor, not the structural failure.

**Why not stronger:** The assistant's reference was natural-language; pre-bias is a soft factor compared to the structural framing commitment in `_branch.md`.

**Maintenance candidate:** Covered by L1 (the pre-step catches at framing regardless of pre-bias source).

**Evaluation gate:** Same as H1.

---

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| Loop framing / context elicitation (PRIMARY) | Implicit canonicalization | strong | HIGH | L1 `/MVL+` pre-step |
| Cross-inquiry chain / cumulative anchoring | Anchored framing inheritance | medium | MEDIUM | secondary annotation; deferred |
| Pre-inquiry / context elicitation (assistant's reference) | Natural-language reference pre-bias | medium | MEDIUM | covered by L1 |

The primary attribution is to loop framing (the inquiry's `_branch.md` text) with cross-inquiry chain as a supporting contributor. Single discipline attribution would over-claim — the failure spans loop-design + cumulative-commitment + assistant-reference, with framing-time as the actionable intervention point.

---

## Maintenance Candidates

### Primary: L1 — `/MVL+` artifact-canon-status pre-step

**What changes.** Add a pre-step to `/MVL+`'s root-NEW path (before `_branch.md` is written). The pre-step is SELECTIVE: it fires only when the question or goal text explicitly references project artifacts (file paths under `homegrown/`, discipline names like `/navigation` or `/explore`, prior inquiry IDs like `2026-05-12_11-40`).

For each referenced artifact, prompt:

> **Artifact-canon-status check.** *"What is the canon-status of `<artifact>` for the question being asked?"*
>
> - **`canon`** — represents current project intent for this question.
>   *Example: a recently-shipped finding cited as established background for a new inquiry.*
>
> - **`non-canon`** — exists as an accumulated/legacy attempt; do not treat as authoritative.
>   *Example: an existing `/navigation` discipline spec that was an earlier attempt but doesn't represent the user's current intent for "navigation" in this inquiry.*
>
> - **`under-test`** — being verified by this inquiry; the test target itself.
>   *Example: a hypothesis spec the inquiry is checking against operational reality.*
>
> - **`historical`** — preserved for record but not current intent.
>   *Example: an iter-1 finding superseded by iter-2.*
>
> - **`unknown`** — status not determined; proceed with caveat.
>   *Example: an artifact whose canon-status the user genuinely doesn't know yet.*

Record the canon-status declarations in `_branch.md` under a new "Referenced Artifacts" section. Downstream disciplines treat the declared status accordingly:

- `canon` artifacts → authoritative references
- `non-canon` / `historical` artifacts → context only; not authoritative; consider including in DO NOT READ lists for exploration
- `under-test` artifacts → the test target itself
- `unknown` → proceed but note the canon-uncertainty in the verdict

**"Unknown" is acceptable.** The pre-step's value is making the implicit explicit, not forcing a binary canon/non-canon judgment. Even an `unknown` declaration prevents silent canonicalization.

**Which file is affected.** `/MVL+`'s skill spec (canonical at `homegrown/protocols/` if a canonical version exists; installed at `~/.claude/skills/MVL+/SKILL.md`). The spec edit is doc-only.

**Risk class.** LOW. Doc-only; selective triggering avoids bureaucracy; `unknown` is acceptable so user friction is bounded.

**Expected benefit.** Prevents Phantom Canon at the earliest point in the pipeline (before `_branch.md` is written). Cumulative cost-savings: avoids correction-chain re-runs like the 2026-05-14_00-01 → 2026-05-14_00-26 case. Reusable across all future MVL+ inquiries that reference project artifacts.

**Evaluation gate.** After L1 is deployed, observe 3 future MVL+ inquiries that explicitly reference project artifacts in their question. For each:

1. Does the pre-step fire correctly (selective triggering not over- or under-firing)?
2. Is the canon-status prompt answered, even if `unknown`?
3. Does downstream behavior reflect the declared status (e.g., `non-canon` artifacts not used as authoritative)?

If all three pass on 2 of 3 inquiries → L1 confirmed. If 0-1 of 3 pass → revisit L1's prompt design.

**Branch experiment Y/N.** NO — the L1 edit is small enough to deploy directly.

### Deferred: L4 — `/explore` §4.1 named failure mode entry

**What would change.** Add a new failure mode to `/explore`'s §4.1 list: "Phantom Canon: artifact in artifact mode read as authoritative without canon-status check," with prevention rule (cross-reference L1's pre-step).

**Which file.** `homegrown/explore/references/explore.md` (and installed copy).

**Risk class.** LOW (doc-only).

**Expected benefit.** Defense-in-depth: catches Phantom Canon if it slips past L1's pre-step at the discipline level.

**Evaluation gate.** Revival trigger: if L1 fails to catch a Phantom Canon case in 3 future MVL+ inquiries, deploy L4 as backup.

**Branch experiment Y/N.** NO.

**Status:** DEFERRED until L1's calibration trigger fires.

---

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** Framing-time implicit canonicalization (H1, HIGH confidence). The prior inquiry's `_branch.md` framing committed to the existing `/navigation` spec as authoritative test target without canon-status check; the failure cascaded through exploration and sensemaking; the corrected inquiry's anti-commitment structure (explicit exclusion + DO NOT READ list + cross-domain grounding) clearly repaired the same failure.
- **Strongest maintenance candidate:** L1 — `/MVL+` artifact-canon-status pre-step. Selective triggering on artifact references; per-artifact prompt for canon-status with concrete category examples; `unknown` acceptable; downstream disciplines respect the declared status. Risk LOW; expected benefit HIGH.
- **Main uncertainty:** Whether L1 alone catches all Phantom Canon cases or whether L4 (`/explore` §4.1 failure mode entry) is needed as defense-in-depth. Calibration over 3 future inquiries will resolve this.
- **Recommended next step:** Apply L1 to `/MVL+`'s skill spec. Preserve this finding as the project's Phantom Canon naming + diagnostic precedent. Monitor 3 future MVL+ inquiries; revisit L4 deferral if L1 doesn't fire correctly.

---

## Pattern-family positioning: meta-conditions on verification (third entry)

The Phantom Canon failure mode is the third in an emerging project pattern-family the previous corrected inquiry (`2026-05-14_00-26`) named **"meta-conditions on verification."** The family captures patterns about CONDITIONS that affect the verification process itself (rather than the verification's content). Three patterns named so far:

1. **Lesson-introduces-its-own-trap** (from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`). When a new vocabulary is introduced in a meta-lesson, the vocabulary can become a vector for the failure mode the lesson names. **Prevention:** pair every new meta-lesson vocabulary with an obligatory diagnostic check before its first application.

2. **Framing-load-bearing** (from `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md`). The same hypothesis can produce different verdicts under different framings (scope, referent, granularity). **Prevention:** explicit framing-clarification before verification.

3. **Phantom Canon** (this finding). A project artifact treated as canon without canon-status check. The artifact looks canonical because it exists in the project, but it may be a historical/legacy attempt rather than current intent. **Prevention:** artifact-canon-status pre-step at framing time (the L1 maintenance candidate).

**Calibration note.** The "meta-conditions on verification" family is EMERGING. Three concrete patterns is real evidence, but pattern-confirmation requires more cases. Treat as observation worth tracking, not project axiom.

- **Pattern-confirmation trigger:** if 3 or more additional failure modes share the meta-conditions-on-verification feature, the family naming earns confirmation.
- **Pattern-revision trigger:** if a future named pattern doesn't fit the family cleanly, the family may need decomposition.

---

## Self-reference acknowledgment (applied lesson)

This LOOP_DIAGNOSE inquiry is itself an MVL+ run. By the lesson it introduces, it COULD exhibit Phantom Canon if it treated a project artifact as canon without checking. Applying the lesson to itself:

**Did this inquiry treat the prior inquiry (the failed case) as canon?** **No.** The LOOP_DIAGNOSE protocol explicitly directs treating the prior as *"comparative evidence, NOT ground truth"* (Step 5 guardrails). This inquiry followed that direction throughout — the prior was treated as the failed case being diagnosed, not as an authoritative reference.

**Did this inquiry reference other project artifacts whose canon-status should have been checked?** **Yes.** The `/explore` discipline spec was read as authoritative for Step 0 declarations, possibility-mode semantics, annotation layers, and the failure-mode list. The spec was sourced from the installed runtime version at `~/.claude/skills/explore/references/explore.md`.

**Lesson genuinely applied (not just acknowledged).** Per the proposed L1's spirit, I checked whether the canonical version diverges:

```bash
diff homegrown/explore/references/explore.md ~/.claude/skills/explore/references/explore.md
```

**Result: empty diff. No divergence on load-bearing content.** The canonical and installed versions match. The diagnostic's structural reductions referencing `/explore` are grounded in canon, not just installed-runtime.

**Why this matters.** The self-reference acknowledgment is not performative-honesty; it's applied-lesson. A LOOP_DIAGNOSE finding that introduces Phantom Canon as a failure mode AND applies the L1 lesson to its own work demonstrates the proposed check's value concretely. Future LOOP_DIAGNOSE runs should similarly check canonical-vs-installed divergence on any referenced discipline specs.

---

## Reasoning

### Why H1 is primary

The prior inquiry's structural commitment to the existing `/navigation` spec was made at framing time (the `_branch.md` Question text). Downstream stages (exploration, sensemaking) inherited the commitment but did not originate it. The corrected inquiry's anti-commitment structure operated at the same framing layer. The commitment-point + the repair-point both live at framing — that's where the failure happens and where the fix lives. H1 is structurally primary; H2 (cascade) and H3 (pre-bias) are contributing supports.

### Why L1 single-layer (not hybrid)

LOOP_DIAGNOSE Step 5 guardrails advise narrowing the candidate + adding an evaluation gate rather than proposing broad fundamentals rewrites. One diagnostic chain justifies one source edit. L1 at the earliest commitment point (framing) is the most parsimonious intervention. L4 (defense-in-depth at the discipline level) is appropriate AS A REVIVAL trigger if L1 calibration fails.

### Why "Phantom Canon" over alternatives

Project precedent supports vivid-but-grounded failure-mode names: `lesson-introduces-its-own-trap` (vivid; metaphorical; grounded), `preservation-for-preservation's-sake` (descriptive; user-language). Phantom Canon captures the mechanism — the artifact LOOKS canonical (exists in project; bears project-namespace) but may not represent current intent. The user's lay term "half-tried artifacts" is preserved as alias.

### Honest cost-naming for 4 MVL+ in succession

This is the fourth MVL+ inquiry in succession on the related topic chain (verification-1 spec-equivalence; verification-2 concept-equivalence; this LOOP_DIAGNOSE on the chain). Cumulative cost is real. The pipeline produced value beyond just the L1 spec-edit:

1. The Phantom Canon failure-mode naming (project-vocabulary contribution).
2. The pattern-family positioning (Phantom Canon as third entry in meta-conditions-on-verification family).
3. The H1-vs-H2-vs-H3 attribution disambiguation (framing primary; cascade supporting; pre-bias contributing).
4. The evaluation-gate specification for L1.
5. The L4-deferred-with-revival-trigger structure.
6. The self-reference precedent (applied-lesson via diff-check).

A simpler intervention (just-write-L1) would have produced the spec-edit without the surrounding diagnostic context. The full pipeline's cost was offset by the cumulative meta-vocabulary expansion. But the user's signal that 4 MVL+ in succession is heavy is real — the L1 candidate is precisely the mechanism to reduce future cycle counts.

### What was killed

- **Hybrid L1+L4 as primary candidate** — killed; one diagnostic justifies one source edit. L4 stays deferred.
- **A new discipline ("/canon-status") for the check** — killed; the check is a pre-step, not a discipline.
- **Treating the prior inquiry's verdict as wrong** — killed; the prior's verdict was correct for its scope.
- **Treating the family-naming as pattern-axiom** — killed; calibration is honest about emerging-vs-confirmed.
- **Skipping the self-reference check** — killed; explicit demonstration is structurally important.
- **Performative-acknowledgment of the /explore source** — killed; applied-lesson (actual diff-check) replaces it.

### Contradictions reconciled

- **Prior inquiry's NO vs corrected inquiry's YES** — already reconciled in the corrected inquiry (different scopes; both verdicts stand). This diagnostic affirms that reconciliation.
- **Single-layer L1 vs defense-in-depth instinct** — reconciled via LOOP_DIAGNOSE Step 5 guardrails.
- **Family-naming from 3 cases vs pattern-confirmation needs more** — reconciled via explicit calibration note.

---

## Next Actions

### MUST

No MUST actions. This is a diagnostic finding.

### COULD

- **What:** Apply the L1 spec-edit to `/MVL+`'s skill spec at both canonical and installed locations.
  - **Gate:** condition-bound — when the user is ready to commit the L1 edit.
  - **Why:** prevents Phantom Canon at earliest commitment point.

- **What:** Add this finding's Phantom Canon naming to a project vocabulary glossary alongside `lesson-introduces-its-own-trap` and `framing-load-bearing`.
  - **Gate:** when project vocabulary doc is being maintained.

### DEFERRED

- **L4 — `/explore` §4.1 failure mode entry.** Revival trigger: L1 fails to catch a Phantom Canon case in 3 future inquiries.
- **Retrospective audit of "many before mvl inquiries"** to identify other Phantom Canon cases. Gate: cumulative-quality review session.

---

## Open Questions

### Monitoring

- **L1 calibration.** Across 3 future MVL+ inquiries referencing project artifacts, does the pre-step fire correctly? Is `unknown` declared honestly when status is genuinely unknown? Does downstream behavior respect declared status?
- **Family-confirmation.** Does the meta-conditions-on-verification family continue accruing patterns?

### Research Frontiers

- **Concept-vs-spec divergence pattern across other project disciplines** (`/comprehend`? `/innovate`?).
- **Whether discipline specs should carry formal canon-status metadata.**

### Refinement Triggers

- **If a future MVL+ inquiry references project artifacts and produces a Phantom Canon failure despite L1** — revisit L1's prompt design; consider promoting L4.
- **If the meta-conditions-on-verification family accrues 3+ more patterns** — family-naming earns confirmation.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use homegrown/protocols/loop_diagnose.md

in devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md and many before mvl inquiries we were talking about navigation but we had a already existing navigation spec and it caused so many confusuion, because it was an attempt from previous times, when i was referring to navigation i was referring to unexisting future concept whcih doesnt exists now. but somehow our loops were confused.

in devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md this was fixed

i think this is a huge point and sth our loop should be capable of understanding. Because in projects there are lots of half tried assets artifacts and they might not be cannon

maybe we can have a failure mode about this in one discipine or in MVL skill ? so that such things are checked ?
```

</details>
