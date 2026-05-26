# Branch: Phantom Canon is Generic — Not This-Project-Specific (Redo with Generalized L1)

## Question

Given that the previous LOOP_DIAGNOSE finding (`2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md`) defined the L1 maintenance candidate's trigger criteria using this-project-specific examples (file paths under `homegrown/`; discipline names like `/navigation` or `/explore`; prior inquiry IDs like `2026-05-12_11-40`) — and the user has correctly observed that this over-specification implicitly canonicalizes THIS project's artifact structure as the only context where Phantom Canon applies — what is the GENERIC formulation of L1's trigger criteria such that the failure mode prevention works for ANY artifact in ANY project, and what does fixing this say about Phantom Canon itself (that even the diagnostic-for-it can exhibit it)?

## Goal

A re-issued LOOP_DIAGNOSE finding that:

(a) **Generalizes L1's trigger criteria** away from this-project-specific examples. The trigger should fire on ANY reference to an artifact whose canon-status could be ambiguous, regardless of project. Project-specific examples become illustrative (one or two, clearly tagged as examples from THIS project), not exhaustive enumeration.

(b) **Generalizes L1's illustrative examples** per canon-status category. The previous finding's examples leaned heavily on this-project's artifacts (e.g., "an existing `/navigation` discipline spec"). The new examples should span: this-project artifacts; other-project artifacts; external references (libraries, standards, frameworks); prior work products from any context.

(c) **Re-issues the LOOP_DIAGNOSE finding** with corrected L1 spec-edit text. The verdict, the failure hypothesis, the failure-mode name (Phantom Canon), the pattern-family positioning, and the self-reference acknowledgment can largely stand — what's corrected is the L1 operational specification.

(d) **Acknowledges the recursive demonstration**: the previous LOOP_DIAGNOSE finding ITSELF exhibited Phantom Canon by treating this-project's artifact structure as canonical context. The new finding records this as a meta-meta-lesson: the proposed pre-step needs to ask "is the trigger criteria itself project-agnostic?" alongside "is the referenced artifact's canon-status declared?" This is the lesson-introduces-its-own-trap pattern (from `2026-05-13_12-45`) firing on the LOOP_DIAGNOSE finding itself.

(e) **Honest cost-naming**: this is now the 5th MVL+ inquiry in succession on the related topic chain. The cumulative meta-lesson — that the diagnostic for Phantom Canon CAN ITSELF exhibit Phantom Canon — is worth the cost only if the corrected L1 actually prevents the recurrence in future inquiries.

## Scope Check

Question covers goal. The question asks for the genericization + the meta-meta-lesson; the goal articulates both.

**Specific-vs-pattern check:** the user explicitly named the pattern ("the same ghost canon could happen with any other artifact from any other project too"). The inquiry is pattern-level by user intent. The specific case (the previous LOOP_DIAGNOSE finding's L1 over-specification) is the demonstration; the pattern is the deliverable.

**Phantom Canon self-check on THIS inquiry:** does this inquiry treat any artifact as canon without status-check?

- The previous LOOP_DIAGNOSE finding at `devdocs/inquiries/2026-05-14_12-45__.../finding.md` is **referenced as the target being corrected** — `under-test` canon-status for this inquiry. NOT treated as canon.
- The user's correction is **external signal**, not an artifact — canon-status N/A.
- The strengthened diagnostic from `2026-05-13_12-45` is **canon** for this inquiry's relationship-declaration decision-making.
- The LOOP_DIAGNOSE protocol at `homegrown/protocols/loop_diagnose.md` is **canon** for the diagnostic format.
- `/explore`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique` skill specs at `~/.claude/skills/` are **canon** for discipline mechanics (and per the previous finding's applied-lesson, the canonical versions at `homegrown/` match the installed versions on load-bearing content — no divergence detected).

Canon-status declared for each referenced artifact. The check is applied to this inquiry rigorously.

## Relationships

- **CORRECTS:** `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md`. The previous finding's diagnostic verdict (ACTIONABLE; H1 HIGH framing-time; Phantom Canon named; family-positioned) is preserved. What's corrected: the L1 maintenance candidate's trigger criteria and illustrative examples were over-specified to this-project's artifact patterns, implicitly assuming Phantom Canon is a this-project-specific failure mode. The user has correctly identified that the failure is generic. The corrected L1 generalizes the trigger.
- **DEPENDS ON PROTOCOL:** `homegrown/protocols/loop_diagnose.md`
- **RELATED:** `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` (the strengthened CORRECTS/REFINES diagnostic applies + the lesson-introduces-its-own-trap pattern is exemplified at meta-meta-level here)
- **RELATED:** `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md` (the framing-load-bearing pattern; the previous LOOP_DIAGNOSE finding's framing of L1's trigger was load-bearing in the same way)
