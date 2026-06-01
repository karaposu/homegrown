---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Inquiry Elaboration — Scope & Coverage (what it should achieve, cover, and not cover)

## Question

From `_branch.md`: the project has accepted (in `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md`) that **Inquiry Elaboration** is a discipline — the front-of-loop operation that gets a raw request correctly understood and shaped before the reasoning loop runs. This inquiry settles its **remit at the meaning layer**: what it should **achieve**, what it should **cover** in elaborating a task/request, and what it should **not** cover. Goal: a precise, decidable scope (consistent with the accepted arc and with the neighboring disciplines, bounded so it can't become a mini-runner) ready to feed the deferred structural design. Structural design (spec sections, artifact shape) and process design (pipeline placement, spawn mechanics) are explicitly out of scope.

## Finding Summary

- **The whole scope hangs on one boundary:** Inquiry Elaboration (IE) operates on the **request** (the inquiry's framing), never on the **problem** (the thing the loop reasons about); and it **perceives/emits**, it does not **act** (spawning, file-writing, and gating are the runner's). These two tests are the decision rule for everything in or out.

- **A useful one-image model (from Innovation, survived Critique):** IE is the **request-gateway in front of the reasoning service.** A gateway validates, normalizes, and routes an incoming request before the service runs — it never executes the business logic. Everything IE does is gateway work; everything it doesn't do is "business logic the gateway doesn't run."

- **What IE should ACHIEVE:** turn a raw, imperfect request into a **loop-ready, fidelity-verified inquiry framing** — emitted as a perception bundle of three things: an *elaborated-inquiry spec* (the articulated question with its subject / action / level / observation-targets / deliverable-shape, plus goal and scope), a *request-structure verdict* (is this one inquiry or several; parallel or sequential; in what order), and a *fidelity verdict* (does the framing faithfully match what the user meant). The point of all three: the loop never spends a full pass on a **misframed** or **wrongly-bundled** query — the two failures the user actually hit.

- **What IE should COVER — three coupled, tailored phases, all operating on the request:**
  1. **Comprehend & articulate** the request multilayer — read past imperfect phrasing to the real intent, and produce the framing content. **Depth-limited**: comprehend only enough to *frame faithfully*, never enough to build a problem model.
  2. **Perceive request-structure** — detect whether the request bundles several distinct inquiries, whether they run in parallel or sequence, and their order — from *request-level* signals (distinct deliverables, "also/then," separate questions), not from problem-coupling analysis.
  3. **Verify framing-fidelity** — confirm the framing matches the comprehended intent, across three axes (from `2026-05-24_04-00__branch_md_reference_authority_audit`): internal consistency, faithfulness to the user's input (including transcription and preservation of the raw request), and external validity of any cited references.

- **What IE should NOT COVER (each border is an instance of the decision rule, attributed to its real owner):**
  - understanding / stabilizing the **problem** → `/sense-making`
  - partitioning the **problem** into pieces + interfaces + dependency order → `/decompose`
  - drawing items from a **territory** (codebase, corpus) by relevance → `/surfacing`
  - generating solution **candidates** → `/innovate`; judging candidates → `/td-critique`
  - **spawning** the sub-inquiries / creating folders / **gating** branch-creation / **encoding** the framing into `_branch.md` → the runner + `branch_inquiry` protocol
  - **meta-routing** the inquiry (the Layer-Commitment decision; the Synthesis-Trigger that drives CONCLUDE) → the runner

- **The upper bound that keeps IE a discipline, not a mini-runner:** every in-scope phase must be a *tailored, coupled* phase. If a phase can only be realized by re-invoking the full `/decompose` or `/td-critique` disciplines, IE has slid into orchestration — that is the line from 22-30's load-bearing residual, and it caps how much the cover-list may grow.

- **Where the work comes from:** IE is **not new capability** — the branch.md creation step already does this work *implicitly and scattered* (its question-shaping, its Step 3.5 transcription audit, its Step 3.6 reference-authority audit). IE **relocates and couples** that scattered work into one discipline. Consequently branch.md **thins**: comprehension + fidelity move into IE; orchestration (spawn, Synthesis-Trigger, Layer-Commitment) stays with the runner. The exact section-by-section migration list is a structural-layer detail, deferred.

- **Status:** the scope (achieve / cover / not-cover + the decision rule + the upper bound + the migration principle) **survived** adversarial critique as one coherent whole, with **no kills**. The four refinements Critique raised (an explicit depth-limit stop-rule; perceive-structure specified as request-signal-based; verify kept as a fixed-criteria gate; source-input preservation located inside the fidelity axis) are all **structural-layer** and are carried forward, not unresolved meaning-layer gaps.

## Finding

### Why this question, and what "meaning layer" buys us

The earlier arc established *that* Inquiry Elaboration is a discipline and roughly *what shape* it has (a four-phase arc: comprehend → perceive request-structure → verify → produce an elaborated inquiry). What it did not pin down is the discipline's **remit** — the exact set of jobs it owns and, just as important, the jobs it must refuse. Getting the remit wrong propagates: too narrow and it won't prevent the failures it exists for; too broad and it duplicates the loop's own disciplines or quietly becomes a second runner. So before anyone designs its spec sections or wires it into the pipeline, the in/out boundary has to be decidable. That is this inquiry's whole job.

### The one boundary that decides everything (the decision rule)

The scope is not a list to be memorized; it is generated by a two-part test, which we call the decision rule:

1. **Object test — request or problem?** Does the job operate on the **request** (the user's ask and how the inquiry is framed) or on the **problem** (the substance the loop reasons about)? Request-side is IE's; problem-side is the loop's (sense-making, decompose, innovate, critique).
2. **Mode test — perceive or act?** Does the job **perceive and emit a verdict**, or does it **act on that verdict** (create folders, spawn inquiries, gate the next step, write the framing to disk)? Perceiving is IE's; acting is the runner's.

A job is in IE's scope only if it is *request-side* **and** *perceive-mode*. Everything else has an owner elsewhere. This is why the gateway image fits so well: a gateway inspects and routes the request (request-side, perceive-mode) but never runs the service's logic (problem-side) and is not itself the scheduler (act-mode).

### What it achieves

IE's reason for existing is to make sure the loop starts from a correct framing. Its output is therefore not an answer to the user's problem but a **clean, verified framing of the user's request** — three things emitted together: the articulated inquiry (the question with its five framing aspects, the goal, the scope), the request-structure verdict (one inquiry vs several, and their order), and the fidelity verdict (the framing faithfully reflects intent). These are emitted as a *perception bundle* the runner then acts on. The success condition is concrete and tied to the user's stated pain: a framing faithful enough that the loop won't run on a wrongly-scoped or wrongly-bundled query.

### What it covers, and the depth limit that protects the boundary

The three in-scope phases are all the same kind of thing — operations on the request — and they are coupled (the later two consume the first's comprehension), which is exactly what makes them phases of one discipline rather than three separate disciplines bolted together.

The single most important guard inside "cover" is the **depth limit on comprehension.** Critique's sharpest prosecution was that comprehending a request often seems to require understanding the problem (to know whether "fix the auth bug" is one ask or several, don't you need to understand the auth system?). The defense — and the resolution — is that IE comprehends only far enough to *frame*: to fix the subject, the action, the level, the observation targets, the deliverable shape, and whether the request is bundled. The moment it starts building a model of the problem, it has crossed into sense-making's territory. So the depth limit is not a nicety; it is what keeps the request/problem boundary real rather than asserted. (This becomes structural refinement R1 — the phase must ship with an explicit stop-rule.)

### What it does not cover, and why each exclusion is principled

Every exclusion is a direct consequence of the decision rule, which is what makes the NOT-list non-arbitrary:

- Understanding the **problem** (sense-making), partitioning the **problem** (decompose), drawing **items** from a territory (surfacing), generating **candidates** (innovate), and judging **candidates** (critique) are all **problem-side** — they fail the object test.
- Spawning the sub-inquiries, creating folders, gating branch-creation, and encoding the framing into `_branch.md` are all **act-mode** — they fail the mode test. This is the same perception/action split the project established for routelister/routeman: the discipline *sees* the structure and emits it; the runner *spawns*. A discipline whose output reshapes the pipeline is still a discipline, not a runner.
- Meta-routing (which cognitive layer the inquiry targets; the Synthesis-Trigger that obligates CONCLUDE's re-test) is the runner's coordination of the pipeline, not work on the request itself.

Two borders are genuinely **thin**, and Critique flagged both for the structural pass rather than pretending they're crisp:
- **perceive-request-structure vs `/decompose`** — both "see structure," but IE reads request-level signals while decompose reads problem-coupling within an understood problem. If, at build time, perceive-structure turns out to need real coupling analysis, it has become decompose (structural refinement R2).
- **verify-fidelity vs `/td-critique`** — verifying framing-against-intent is the *kind* of move critique makes (evaluate against criteria), but tailored: one fixed-criteria gate with three axes, no fitness landscape, no prosecution/defense. If it ever grows adversarial structure, it has become td-critique (structural refinement R3).

These are not unresolved meaning-layer questions — at the meaning layer the borders hold by the object/mode test. They are warnings for the *build*, which is where a discipline silently turns into a mini-runner if the phases are implemented as wrappers over other disciplines.

### Why IE thins branch.md instead of adding machinery

The motivation that started this whole arc was that branch.md kept accreting checks. The canon's rule-placement principle ("a rule's home is the smallest scope that contains what it governs") plus the "pregnant meaning" diagnostic say plainly: those checks are governed by the request-comprehension operation, so their home is the discipline that owns that operation. IE is therefore mostly a **relocation** of work that already happens — the question shaping, the transcription audit, the reference-authority audit — into one coupled place, after which branch.md goes back to merely *encoding* a framing and *orchestrating* the pipeline. This is reassuring for risk: IE introduces little genuinely new behavior; it gives existing, scattered, implicitly-done work a coherent owner.

## Inherited Commitments Re-test

This inquiry declared a Synthesis Trigger over five priors; each inherited commitment was re-tested against this inquiry's own work, not absorbed.

- **Commitment:** IE is a discipline; its arc is comprehend → perceive request-structure → verify → elaborated-inquiry; the spawn is the runner's action; it is a discipline only if built with tailored, coupled phases.
  - **Source:** `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md`.
  - **Re-test status:** RE-TESTED — **CONFIRMED + OPERATIONALIZED.** The scope is built on the arc; "spawn = runner" is re-derived as the *mode test* and survived a system-level Inversion (a thing that spawns is a runner); "tailored phases" became the explicit upper bound + structural refinements R2/R3. Evidence: `innovation.md` (Inversion on the mode commitment), `critique.md` (Phase 2.4 + the operation-parsimony dimension).

- **Commitment:** the three jobs map to existing operations (comprehend = Comprehending; split = Decomposition; fidelity = a verification gate); two senses of "understanding" (operation vs stage/discipline); branch.md thins as audits migrate in.
  - **Source:** `devdocs/inquiries/2026-05-31_20-08__understanding_stage_identity/finding.md`.
  - **Re-test status:** RE-TESTED — **CONFIRMED + REFINED.** The mappings hold *with the object = request qualifier* doing the load-bearing work. "split = Decomposition" is refined to "perceive-request-structure, request-signal-based, ≠ `/decompose`-on-the-problem" (R2). branch.md-thinning is re-derived from the canon rule-placement principle. Evidence: `sensemaking.md` (frame-exit perspective; ambiguities A2/A5), `critique.md` (Phase 2.2).

- **Commitment:** understanding-the-operation = sense-making's Comprehending; position ≠ identity; one operation, many consumers.
  - **Source:** `devdocs/inquiries/2026-05-31_13-31__understanding_vs_sensemaking_reexamine/finding.md`.
  - **Re-test status:** RE-TESTED — **APPLIED.** "position ≠ identity" is the reason scope is defined by *object*, not by IE's pipeline position; "comprehend the request" is the Comprehending operation on a new object (a further consumer), which is why it does not steal sense-making's territory. Evidence: `sensemaking.md` (P1, the definitional/internal-consistency perspective).

- **Commitment:** multilayer/multi-resolution comprehension of the task; legitimate standalone pre-framing use; an early 5-entry NOT-list (don't converge / don't relevance-tag / don't partition / don't encode / don't generate).
  - **Source:** `devdocs/for_future/2026-05-24_05-30__understand_discipline_meaning/finding.md` (basis corrected by 13-31; content preserved).
  - **Re-test status:** RE-TESTED — **CONFIRMED (content), SUBSUMED.** The multilayer comprehension is in-scope phase 1; the early 5-entry NOT-list is absorbed and extended into the 7-border NOT-list (its "don't encode" is now the runner border; "don't converge/tag/partition/generate" map to the sense-making/surfacing/decompose/innovate borders). Evidence: `sensemaking.md` SV6 NOT-list entry 7.

- **Commitment:** branch.md checks span three orthogonal axes (internal-consistency / user-faithfulness / external-validity); the reference-authority audit is a verify sub-job.
  - **Source:** `devdocs/for_future/2026-05-24_04-00__branch_md_reference_authority_audit/finding.md`.
  - **Re-test status:** RE-TESTED — **CONFIRMED + PLACED.** The three axes are exactly the three axes of IE's verify phase; the reference-authority audit (and the transcription audit) migrate into that phase under the canon rule-placement principle. Evidence: `surfacing.md` (Region D, rule-placement), `sensemaking.md` (A5).

All five priors re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST
- **What:** Accept or reject this meaning-layer scope (the achieve statement + the 3-phase cover + the 7-border NOT-list + the object/mode decision rule + the tailored-phases upper bound + the migration principle).
  - **Who:** user.
  - **Gate:** observable — explicit response.
  - **Why:** the scope is the input to the deferred structural design; it cannot be self-validated (the work was done by the same agent under the same session's framing), so user acceptance is the external check.

### COULD
- **What:** When ready, spawn the **structural-layer** inquiry to author IE's spec (Identity / Components / Process / Quality / Output), folding in the four refinements — R1 (comprehend's explicit depth-limit/stop-rule), R2 (perceive-structure specified as request-signal-based, not coupling-based), R3 (verify kept a fixed-criteria fidelity gate), R4 (source-input preservation located inside the fidelity/faithfulness axis) — and the exact branch.md migration list.
  - **Who:** future inquiry (Layer Commitment = STRUCTURAL).
  - **Gate:** condition-bound — user accepts this scope + gives go-ahead.
  - **Why:** the remit is settled here; the spec shape is the next layer.
  - **Depends-on:** MUST "user accepts the scope." GATED — do not act until it resolves.

### DEFERRED
- **What:** Resolve F2 (does verify need a genuinely-new check, or is a generic fidelity gate enough?) and F3 (the precise tailored-phase-vs-wrapper line for perceive-structure and verify).
  - **Gate:** condition-bound — during the structural design, when the verify and perceive-structure phases are specified.
  - **Why (if revived):** these are the two thin borders where IE could silently become a mini-runner; the build is where the line actually gets drawn.

## Reasoning

The verdict is the band between two failure poles, and both poles were tested. **Too narrow** (IE = just a transcription check) was rejected because it would not catch the wrongly-phrased scope/goal that hurt the user — the headline pain. **Too broad** (IE models or partitions the problem, or spawns the inquiries) was rejected by driving each over-broad reading to its system-level consequence: a second problem-modeler collapses sense-making's identity; a spawner is by definition a runner (the routeman role/operation-fusion trap). What survived in the middle is "operate on the request, perceive don't act," which is the decision rule.

Three independent mechanisms converged on that same rule — Inversion (both over-broad inversions failed at the system level), Domain Transfer (the API-gateway and clinical-intake analogues both draw the same business-logic border), and the canon taxonomy (which independently places IE as upstream-first and assigns the branch.md audits to it). Convergence from different angles is why the boundary is held at high confidence rather than as one plausible reading among several.

No candidate was killed, because the dead region (anything that models/solves the problem or spawns) was defined to be empty of IE-survivors by construction — that is the NOT-list. The four REFINEs were deliberately *not* resolved here: each is a structural-build decision, and this run is meaning-layer by the Layer Commitment. Resolving them now would be the exact premature-structural-design mistake the layering discipline exists to prevent.

A note on self-reference: the scope of a discipline was decided by running the project's own disciplines, which share assumptions with the thing being scoped. The bound is that every load-bearing border rests on the object/mode test applied to checkable neighbor-spec facts (sense-making converges; decompose needs an understood problem; surfacing draws items; the runner spawns) plus an external principle established earlier this session for an unrelated subject (position ≠ identity), and the verdict lands in the middle with named structural residuals rather than at either comfortable extreme. Full bounding awaits user acceptance.

## Open Questions

### Blocked
- The structural design (spec sections; the exact branch.md migration list; the resolution of the two thin borders) is blocked on user acceptance of this scope + go-ahead.

### Research Frontiers
- **F2** — Does the verify phase need a genuinely-new fidelity check, or does a generic evaluate-framing-against-intent gate suffice?
- **F4** — The exact section-by-section branch.md migration (which named sections move into IE, which stay runner-side).

### Refinement Triggers
- **RT1** — If, in structural design, perceive-request-structure cannot be specified without real problem-coupling analysis, it has become `/decompose` — narrow the scope and move it out.
- **RT2** — If the verify phase cannot do its job without a fitness landscape / adversarial structure, it has become `/td-critique` — narrow the scope and move it out.
- **RT3** — If comprehension cannot be given a workable stop-rule (R1) and keeps sliding into problem-modeling, the request/problem boundary is weaker than this finding claims — revisit the decision rule.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets discuess what Inquiry elaboration discipline should achieve, what it should cover in terms of task definition
  elobaration, and what it shouldnt cover
```

</details>
