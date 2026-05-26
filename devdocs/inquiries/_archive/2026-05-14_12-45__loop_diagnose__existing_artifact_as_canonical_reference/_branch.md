# Branch: Loop Diagnose — Existing-Artifact-as-Canonical-Reference

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/`, the human correction (the user re-invoked /MVL+ with explicit clarification that the existing `/navigation` spec was "not correct fully" and should NOT be the test target — "navigation" was meant as the general future concept of finding-paths), and the later improved inquiry at `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow — specifically, can we name a failure mode (in a discipline or in MVL+) so future loops catch when a referenced project artifact is a half-tried legacy rather than canon?

## Goal

A good answer should identify:

(a) **Evidence-backed failure hypotheses** for why the prior loop treated the existing `/navigation` spec as canonical — when/where in the pipeline this commitment occurred; whether it was exploration's artifact-reading, sensemaking's anchor-extraction, the assistant's in-conversation framing, or somewhere else.

(b) **A named failure mode** worth introducing into a discipline spec or into `/MVL+`'s skill spec. The failure mode should be recognizable (have a signal), preventable (have a check), and reusable (applies to other half-tried artifacts in the project, not just /navigation).

(c) **A maintenance candidate** — a specific change to a discipline spec or /MVL+ skill that introduces the check. Risk class, expected benefit, and evaluation gate stated.

(d) **A pattern-name** for the general phenomenon: legacy artifacts in projects that LOOK canonical but are actually accumulated attempts that don't represent the project's current intent. The user has framed this clearly ("lots of half tried assets artifacts and they might not be cannon"); this finding should crystallize a project-vocabulary term for it.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of the correction chain plus a maintenance candidate; the goal requires hypotheses, evidence, confidence, maintenance candidate, and a pattern-name.

**Specific-vs-pattern check:** the user explicitly named the pattern at the end ("in projects there are lots of half tried assets artifacts and they might not be cannon"). The inquiry is pattern-level by user intent. The specific case (the /navigation spec confusion across multiple prior inquiries) is the demonstration; the pattern is the deliverable.

## Correction Chain

- **Prior path:** `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/`
- **Corrected path:** `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/`
- **Human correction:**
  ```text
  use homegrown/protocols/loop_diagnose.md

  in devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md and many before mvl inquiries we were talking about navigation but we had a already existing navigation spec and it caused so many confusuion, because it was an attempt from previous times, when i was referring to navigation i was referring to unexisting future concept whcih doesnt exists now. but somehow our loops were confused.

  in devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md this was fixed

  i think this is a huge point and sth our loop should be capable of understanding. Because in projects there are lots of half tried assets artifacts and they might not be cannon

  maybe we can have a failure mode about this in one discipine or in MVL skill ? so that such things are checked ?
  ```
- **Optional context:**
  ```text
  The user notes "many before mvl inquiries" had similar confusion. Notable priors: 2026-05-12_11-40__navigation_factoring_question (the B-refined finding that established /navigation as a 4-component specialization — itself an attempt that the user now signals is "not correct fully"). The /navigation discipline directory at homegrown/navigation/ contains SKILL.md + references/navigation.md, which the prior verification (00-01) read as canonical and tested against. The /explore §1.5 spec also names /navigation as a "specialization" which further anchored the prior verification's spec-as-canonical assumption.
  ```
- **Diagnostic goal:** evidence-backed failure hypotheses + named failure mode (with signal, check, prevention) + maintenance candidate (discipline-spec or MVL+ edit) + project-vocabulary pattern name.

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, and `docarchive/` discipline outputs:

- `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/` — all artifacts (especially exploration.md and sensemaking.md from docarchive, which document the spec-reading commitment)
- `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/` — all artifacts (especially exploration.md, which explicitly excluded the spec as reference and grounded in first principles + cross-domain)

Also read for upstream context:
- `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md` (the "non-canonical" artifact)
- `/Users/ns/.claude/skills/explore/references/explore.md` (the discipline whose artifact-reading behavior is in question)
- `/Users/ns/.claude/skills/sense-making/references/sensemaking.md` (where anchor-extraction happens; possible failure surface)

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.
- Do NOT silently treat the existing /navigation spec as "wrong" globally — the user's signal is that it's a non-canonical attempt for THEIR current concept of navigation; the spec might still be useful for OTHER purposes. The maintenance candidate should address the META-issue (loops treating accumulated artifacts as canonical reference without checking), not adjudicate the /navigation spec itself.

## Relationships

- **DIAGNOSES:** `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md` (the weak prior inquiry — treated existing /navigation spec as canonical)
- **COMPARES WITH:** `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md` (the later corrected inquiry — excluded the existing /navigation spec; grounded in first principles + cross-domain)
- **DEPENDS ON PROTOCOL:** `homegrown/protocols/loop_diagnose.md` (this inquiry follows that protocol's framing)
- **RELATED:** `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` (an earlier inquiry that also operated against the /navigation spec; possible additional weak prior in the broader correction chain)
