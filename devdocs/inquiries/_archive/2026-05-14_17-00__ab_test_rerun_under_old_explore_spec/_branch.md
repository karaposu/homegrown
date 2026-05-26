# Branch: Rerun the /explore-Comparison Investigation with the OLD /explore Spec Loaded (A/B Test of Iteration #8)

## Question

Given that iteration #8 (`devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md`) ran the diff-comparison investigation under the CURRENT `/explore` spec and concluded "/explore is a CONTRIBUTING factor, not the primary cause" — does running the SAME investigation under the OLD `/explore` spec (loaded explicitly from `/Users/ns/Desktop/projects/native/archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md`) produce a materially different exploration output (in form, focus, or substance), and if so what does that tell us empirically about the current spec's contribution to MVL+ run quality?

## Goal

An A/B-test inquiry that:

(a) **Re-runs iteration #8's question** (whether the /explore rewrite caused recent problematic MVL+ runs, with what REPAIR scope) but with the EXPLORATION step executing under the OLD /explore spec.

(b) **Documents the spec-loading override.** Normal MVL+ pipeline invokes the Skill tool for /explore which loads the CURRENT spec at Step 0. This inquiry explicitly overrides that by loading the OLD spec into context manually (the OLD spec text is in the assistant's context before the Exploration step begins) and executing Exploration under the OLD spec's instructions.

(c) **Allows side-by-side comparison.** The output exploration.md should be comparable to iteration #8's exploration.md to reveal whether the spec change actually affects output form/substance.

(d) **Confirms or invalidates iteration #8's conclusion.** If this iteration's outputs are materially different in form (shorter, less protocol-laden, less template-driven) AND substance (clearer conclusions, less project-anchoring), it empirically supports iteration #8's claim that /explore is a CONTRIBUTING factor. If outputs are essentially identical, it suggests the spec change matters less than iteration #8 claimed.

(e) **Honest cost-naming for 9 MVL+ in succession on the chain.** The user explicitly requested this empirical test. The unique value: empirical verification of iteration #8's claim via direct A/B comparison.

## Scope Check

Question covers goal. The question asks for the empirical comparison; the goal articulates the comparison design + interpretation framework.

**Specific-vs-pattern check.** The user's question is specifically about this A/B test (concrete experimental design) — not about a broader pattern. Scope is intentionally tight.

**A/B test design integrity check:**

- **Independent variable:** the /explore spec loaded for the Exploration step (OLD vs CURRENT).
- **Dependent variable:** the form + substance of the resulting exploration.md.
- **Controls:** same question/inquiry; same surrounding pipeline disciplines (sense-making, decompose, innovate, td-critique) using their normal current specs; same supporting evidence (the diff between the two /explore versions).
- **Confounds to flag:** the LLM is the same instance with the iteration #8 context still in working memory. Some leakage from #8 is possible. Mitigation: document the OLD-spec-execution explicitly; lean on the OLD spec's lighter structure for the output form.

**Phantom Canon self-check on referenced artifacts** (canon-status declarations):

| Referenced artifact | Declared canon-status |
|---|---|
| Iteration #8 finding (`2026-05-14_16-00__.../finding.md`) | `under-test` (the iteration whose claim is being A/B-tested) |
| Old /explore references (`bf4ae1f-hg/bf4ae1f-explore/references/explore.md`) | `canon` for this iteration's Exploration step (loaded explicitly as the spec governing this exploration) |
| Current /explore references (`homegrown/explore/references/explore.md`) | `under-test` (the target of the comparison investigation; what iteration #8 said is contributing-factor) |
| Other prior chain findings (`15-00`, `14-00`, `13-08`, `12-45`, `13-12-45`) | `canon` for their respective scopes (related context) |

## Relationships

- **A/B TEST OF:** `devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md`. This iteration empirically tests iteration #8's claim via direct comparison: rerun the same investigation under the OLD spec; compare outputs.

- **RELATED (chain):** all of 2026-05-14_15-00, 14-00, 13-08, 12-45, 13-12-45.

- **DEPENDS ON PROTOCOL:** `homegrown/protocols/loop_diagnose.md`.

**Critical execution note.** The Exploration step of this MVL+ pipeline executes under the OLD /explore spec (loaded explicitly into the assistant's working context before the Exploration step). The OLD spec's process model is lighter than the current spec's: "State Mode and Entry Point" (one sentence) → "Run Exploration Cycles" (7-step cycle) → "Assess Convergence" (3 criteria + jump scan) → "Final Deliverable: Structural Map" (6 sections). No mandatory Step 0 declarations table, no D0-D4 commitment, no 5-annotation-layer table, no project-coupling Sources subsection, no Specialization pattern coupling, no Neighbor disciplines cross-references. The Exploration output should reflect this lighter form.
