# Branch: Loop Diagnose — /innovate Missed the Breadth-is-Feature Inversion

## Question

Given the weak prior inquiry at `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/`, the user's correction (*"breadth is what we want, not the problem"*), and the corrected inquiry at `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/`, what did `/innovate` specifically fail to produce in the prior run that its current spec actually supports — scoped strictly to `/innovate`'s own job (not /td-critique's, /sense-making's, or /reflect's)?

## Goal

Identify `/innovate`-specific failures with three properties: (a) the failure points to a mechanism, sub-mode, or refinement that is already in `/innovate`'s spec but was applied shallowly or skipped in the prior run; (b) the failure has evidence in the prior's archived `innovation.md` output (concrete quote of what the mechanism did produce vs what it could have produced); (c) the failure maps to one of `/innovate`'s six existing failure modes (Premature Evaluation, Single-Mechanism Trap, Early Frame Lock, Innovation Without Grounding, Mechanism Exhaustion, Survival Bias) or to a named refinement (Inversion depth-check, Combination scope-fidelity caveat, Absence Recognition redesign-level question, assembly + axis coverage checks, disposition categories). The user will use the diagnosis later to improve `/innovate`'s spec; this inquiry's scope ends at producing the diagnosis.

## Scope Check

Question covers goal. Both ask for evidence-backed diagnosis of `/innovate`-specific failures in a known correction chain.

**Specific-vs-pattern check:** the user pointed to ONE specific pair, but the goal will be used to improve `/innovate` in general (pattern-level). The diagnosis must produce findings that generalize — failure modes / mechanism-depth shallowness / sub-mode skips — not findings that only apply to this specific multi-resolution-navigation topic. Both readings collapse: the specific pair is the evidence; the diagnosis is pattern-level.

**Hard scope constraint (user-stated):** *"only focus on what innovation should do, and not job of other disciplines."* If evidence points to /sense-making (the frame "breadth = risk" was inherited from upstream sensemaking) or /td-critique (the candidate's risk dimension wasn't tested adversarially), the diagnosis must NOTE that pointer but NOT propose changes to those other disciplines. The diagnosis stays bounded to what `/innovate` should have done with the seed and the upstream frame it inherited.

## Layer Commitment

**Primary layer: PROCESS.** The question targets `/innovate`'s procedure — what STEPS / mechanisms / depth-checks / sub-modes its current spec defines, and where the prior run executed shallowly. The diagnosis names process gaps, not redefinition of what `/innovate` IS (Meaning) or how its spec is organized (Structural).

**Other layers considered, explicitly out of scope:**

- **Meaning** — what `/innovate` IS as a cognitive operation. The user's correction does NOT challenge `/innovate`'s identity (creating novel content). Process gaps are within the existing identity. Deferred unless evidence forces it.
- **Structural** — what `/innovate`'s spec sections look like. Section-level reorganization is downstream of process commitments. Out of scope.

If during execution the diagnosis surfaces that `/innovate`'s spec is fundamentally unable to catch the move regardless of how well it ran (i.e., the spec itself has no mechanism that could have produced the user's correction), that's a Meaning-layer concern flagged as Open Question, not absorbed here.

## Synthesis Trigger

This inquiry consolidates the following prior outputs:

- `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/` — the weak prior inquiry. Commits: a depth+max_expansions+policy budgeted-runner contract; the framing that "breadth is the problem"; the 5-mechanism convergence on budget-based bounding; the assembly recommendation "Protocol-first, runner-later" with budget parameters.
- `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/` — the corrected inquiry. Commits: breadth is desirable at the discovery layer; the real risk is untracked unresumable expansion; the corrective is a frontier ledger separating discovery from execution.
- `cognitive_harness/innovate/references/innovate.md` — the `/innovate` spec itself. Commits: 2-operation structure; 7 mechanisms with their How-to-apply sub-sections; Inversion's depth-check refinement; Combination's both-direction (add + remove) and scope-fidelity caveat; Absence Recognition's redesign-level question; the 5-test cycle; the 6 failure modes; assembly + axis coverage checks.

CONCLUDE will require an `## Inherited Commitments Re-test` section. The re-test must address: (a) does the prior's innovation.md output actually fail one or more of `/innovate`'s named failure modes? (b) does the prior's mechanism application actually skip one or more of the spec's named sub-modes / depth-checks? (c) is there evidence that the spec ITSELF lacks a mechanism that could have caught the user's correction — i.e., is this a spec-coverage gap or a spec-execution gap? Critique will execute the re-tests.

## Correction Chain

- **Prior path:** `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/`
- **Corrected path:** `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/`
- **Human correction (verbatim from corrected inquiry's Source Input):**

  > *"lets reconsider it, i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want... if you limit it with these other params then we are limiting the navigation no? i can accept max_expansions, which would mean AI would pick top N paths and follow them. but how it is designed should allow running unrun ones too..."*

- **Optional context:** the prior 19-pair classification (`devdocs/inquiries/2026-05-18_01-30__loop_diagnose__innovate_metaops_boundary_leak/finding.md`) routed this pair to /td-critique improvement territory (REFINE with dimensional-correction direction). The current inquiry RE-EXAMINES the same pair from /innovate's side: even if /td-critique should have caught the dimensional correction in critique, what should /innovate have produced in the first place that, if produced, would have made the correction unnecessary?

## Required Reads

For both inquiry folders: `_branch.md`, `_state.md`, `finding.md`, and all `docarchive/` discipline outputs (exploration.md, sensemaking.md, decomposition.md, innovation.md, critique.md). Also re-read `cognitive_harness/innovate/references/innovate.md` to ground every diagnostic claim in spec quotes.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth — `/innovate`'s job in the prior was not to produce the corrected inquiry's specific solution; it was to produce a candidate set diverse enough that the corrected direction would be at least visible.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- **Stay bounded to `/innovate` per user scope.** When evidence points to other disciplines (the seed framing came from sensemaking; the budget-vs-no-budget dimension should have been tested by critique), note the pointer but do not propose changes to those disciplines.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them; the user's intent is to use these later for `/innovate` spec improvements, so the maintenance candidates should be `/innovate`-spec-edits, not abstract observations.

## Relationships

- DIAGNOSES: `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/finding.md` (weak prior inquiry)
- COMPARES WITH: `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md` (later corrected inquiry)
- RELATED: `cognitive_harness/innovate/references/innovate.md` (the artifact under diagnosis); `devdocs/inquiries/2026-05-18_01-30__loop_diagnose__innovate_metaops_boundary_leak/finding.md` (prior loop_diagnose that classified this pair).
