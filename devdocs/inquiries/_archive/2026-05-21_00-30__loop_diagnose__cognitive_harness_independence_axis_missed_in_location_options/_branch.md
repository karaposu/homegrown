# Branch: Loop Diagnose — Cognitive-Harness Independence Axis Missed in Location-Option Adjudication

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/` (which produced the location recommendation "option (a) `docs/preserved_frontier_resolution_templates.md`" in its Exploration phase + carried it through to the finding) and the human correction (the user surfaced that `cognitive_harness/` is meant to be independent and installable, so placing the framework outside it AND/OR having anything inside `cognitive_harness/` point to `docs/` violates the independence constraint), what discipline + what specific part of that discipline allowed the bad assumption through?

## Goal

A good answer identifies:

- The discipline (Exploration / Sensemaking / Decomposition / Innovation / Critique / CONCLUDE / loop framing / orchestration / context elicitation / mixed / unknown) that was the **main cause** — where the assumption first manifested with insufficient adversarial scrutiny.
- The specific PART of that discipline — which component (the discipline's spec section, mechanism, refinement note, or output region) failed to surface the cognitive-harness-independence axis.
- Why downstream disciplines (those running AFTER the main-cause discipline) did not catch the assumption either — what would each have needed to surface it?
- Whether the failure surface generalizes (other axes that could be silently missed under the same mechanism) or is one-off.
- Maintenance candidates if any — only when evidence is strong enough to justify a spec/protocol edit; otherwise monitoring questions or another diagnostic run.

The answer should let the project's spec maintainer:

- Update the relevant discipline's spec to make the missed axis more discoverable in future runs.
- OR add an orchestration-level check (a `_branch.md` field; a Phase 0 axis-validation step) that catches the same class of miss.

## Scope Check

Question covers goal. The question asks for diagnosis of a specific correction chain (02-15's location recommendation → user correction); the goal requires discipline + part attribution, downstream-failure attribution, generalizability check, and maintenance candidate identification.

Specific-vs-pattern check: the question references the SPECIFIC 02-15 inquiry's location-recommendation failure. But the user's phrasing ("what discipline was the main cause and what part of it") asks for a structural diagnosis that may generalize. Default: address the BROADER PATTERN (which class of failures could this discipline-part allow through) while staying grounded in the specific 02-15 case as the primary evidence.

## Layer Commitment

Primary cognitive layer: **MEANING**.

Justification: the question is a diagnostic on a discipline (Exploration in particular, but possibly other disciplines too) — what cognitive operation failed, what concept the discipline should have captured but didn't. This is asking what the discipline IS as a concept (its mechanism's coverage), not what its spec text looks like (structural) or what procedural steps it runs (process).

Other-layer alternatives considered and explicitly OUT OF SCOPE:

- **STRUCTURAL** — what spec edits to apply to fix the gap. This is a downstream inquiry contingent on the diagnostic's verdict.
- **PROCESS** — exact procedural changes to discipline runs. Also downstream.

Sequential plan: diagnosis (this inquiry; MEANING) → spec edit STRUCTURAL inquiry (if maintenance candidate justified) → procedural PROCESS inquiry (if process-level change needed).

## Correction Chain

- **Prior path:** `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/`
- **Corrected path:** NONE — the correction was just received via conversation (2026-05-20 / 2026-05-21); no corrected inquiry has been run yet. This is a deviation from the LOOP_DIAGNOSE protocol's expected input contract (the protocol expects a corrected_path). Per the protocol's failure-mode list ("Missing role assignment" — but here it's missing comparator entirely), this diagnostic proceeds with **REDUCED EVIDENCE BASE**: only the prior inquiry + human correction. Confidence on attributions is lower than a 2-sided correction chain.
- **Human correction (verbatim):**
  ```text
  docs folder is related to this repo not to cognitive_harness since cognitive_harness is
  independent and installable thing, it shouldnt point out to other folders

  where this option first appeared? it is a bad assumption and i want to know where it first appeared

  ---

  as you see some wrong assumptions were made without proper checking.
  i want you to understand what discipline was the main cause and what part of it
  ```
- **Optional context:**
  ```text
  Prior conversational trace from the assistant identified the assumption's first appearance:
    - 02-15's exploration.md line 222 (now at docarchive/) introduced option (a) `docs/preserved_frontier_resolution_templates.md` in the 5-option location table.
    - 02-15's exploration.md line 233 explicitly recommended option (a).
    - The reasoning chain: pattern-matched against existing siblings at `docs/` (`docs/discipline_taxonomy.md`; `docs/discipline_rule_placement.md`; `docs/thinking_space_dynamics.md`).
    - Option (b) `cognitive_harness/protocols/` extension WAS in the option set but was downgraded as "Conflates with operational protocols (CONCLUDE; LOOP_DIAGNOSE)."
    - The independence/installability constraint of `cognitive_harness/` was NOT a weighted dimension in the option scoring.

  The user's auto-memory at `/Users/ns/.claude/projects/-Users-ns-Desktop-projects-native/memory/feedback_disciplines_self_contained.md` documents the principle: "discipline runtime spec files must not contain outbound pointers to design-history/theory folders; disciplines are individuals." This memory item PRE-EXISTED the 02-15 inquiry but was not invoked during the inquiry's runtime — neither by the discipline runners nor by the orchestration layer that prepares context.

  The 03-30 Layer-3 §9 trigger redesign inquiry (subsequent to 02-15) inherited the SAME 4-option / docs/-location frame in its Q6 (the structural location piece). The inheritance was uncorrected.

  The cross-reference "innovate spec → docs/..." enhancement idea (which would compound the assumption) was NOT proposed by 02-15 itself; it appeared in the assistant's conversational reply AFTER 02-15 had completed. The assistant's reply mis-extrapolated 02-15's location recommendation into an integration pattern that the 02-15 finding never proposed.
  ```
- **Diagnostic goal:** evidence-backed identification of (i) the main-cause discipline + the specific part of that discipline; (ii) downstream disciplines' failure-to-catch; (iii) whether the failure surface generalizes; (iv) maintenance candidates with calibrated confidence.

## Required Reads

For the prior inquiry folder (`devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/`):

- `_branch.md` (frontier-question framing)
- `_state.md` (pipeline history)
- `finding.md` (compiled output that carried the recommendation forward)
- `docarchive/exploration.md` (the artifact where the recommendation first appeared)
- `docarchive/sensemaking.md` (whether SV4 ambiguity-collapse tested the location assumption)
- `docarchive/decomposition.md` (whether Q-tree's location piece inherited the recommendation)
- `docarchive/innovation.md` (whether the per-piece articulation tested the recommendation)
- `docarchive/critique.md` (whether the fitness landscape included a cognitive-harness-independence dimension)

Cross-references (canonical sources):
- `cognitive_harness/explore/references/explore.md` (the Exploration discipline spec — to identify which part of the spec's mechanism failed)
- The user's auto-memory at `feedback_disciplines_self_contained.md` (the pre-existing project principle that should have been invoked)

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- No corrected inquiry exists; treat the available evidence as ONE-SIDED. Calibrate confidence DOWN accordingly.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates ONLY when the diagnosis gives enough evidence to justify them. Otherwise propose monitoring questions or another diagnostic run.
- Read `docarchive/` artifacts directly; do not diagnose from `finding.md` alone (per protocol Step 2).

## Synthesis Trigger

This inquiry synthesizes commitments from the following priors:

- `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/docarchive/exploration.md` — produced the 5-option location enumeration + recommendation (the source artifact under diagnosis).
- `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/docarchive/sensemaking.md` — should have tested the location recommendation as a load-bearing concept.
- `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/docarchive/critique.md` — should have prosecuted the recommendation.
- `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/finding.md` — the compiled output that carries the recommendation forward.
- `cognitive_harness/explore/references/explore.md` — the Exploration discipline spec (the candidate "main-cause" discipline).
- The user's auto-memory `feedback_disciplines_self_contained.md` — pre-existing project principle.

CONCLUDE will require this finding to include an `## Inherited Commitments Re-test` section listing each prior's commitment with re-test status. The diagnostic work is itself the re-testing — Sensemaking + Critique must actually evaluate each prior against the diagnostic question, not just record inheritance.

## Relationships

- **DIAGNOSES:** `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/` (weak prior inquiry — produced the docs/-location recommendation without weighting cognitive-harness independence)
- **NO COMPARATOR:** no corrected_path; correction received as conversational text only
- **RELATED:** `devdocs/inquiries/2026-05-20_03-30__layer_3_section_9_trigger_redesign_deep_dive/` — subsequent inquiry that inherited the same 4-option / docs/-location frame in its Q6; uncorrected
