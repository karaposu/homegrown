# Branch: rlu behavioral spec — should / shouldn't / scenarios

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
lets dive deep into how rlu should be and shouldnt be, what it must do in what scenarios
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** Item 1 — "how rlu should be and shouldn't be, what it must do in what scenarios"
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**Literal statement (verbatim, uncontaminated):** *"Let's dive deep into how rlu should be and shouldn't be, what it must do in what scenarios."*

rlu is the not-yet-built "route-engagement recorder" skill: the tool that records which enumerated routes have been engaged (run / in-flight / parked) and points to what each engagement produced. Its design has been adopted-and-retargeted across two prior findings; this inquiry deepens it into a behavioral contract.

**What kinds of ask the statement carries (MQ1 verdict-axis — preserved as ambiguities, not resolved):**
- `[depth-target]` — a **build-ready behavioral contract** (implement-next) vs a **stress-test / gap-find** (run scenarios to expose holes in the adopted design) vs a **boundary-draw** (sharpen what rlu is vs isn't). These are not mutually exclusive — a good scenario-spec does several at once.
- `[spec-layer]` — the **behavioral** layer (what rlu does/doesn't do, and when) vs also the **structural** layer (commands, the `_route_engagements.md` row format) vs the **meaning** layer (what rlu fundamentally IS). "how it should be / must do" leans behavioral; "should be / shouldn't be" can reach into identity.
- `[tripartition]` — the spec is three-faced: **positive obligations** (`should be` / `must do`), **negative exclusions** (`shouldn't be` — the NOT-list), **conditional triggers** (`in what scenarios` — situation→required-behavior).

**What action-endpoints are plausible (MQ3 intent-axis, WHAT — preserved as ambiguities):**
- `[finalize-contract]` — pin rlu's behavior precisely enough that implementation has no open judgment calls.
- `[expose-gaps]` — run rlu through every scenario to find where the design is silent or wrong, before building.
- `[fence-scope]` — make the responsibility boundary sharp (recorder/pointer, never chooser/launcher) so rlu can't scope-creep.
- `[resolve-deferred]` — turn the design's open/deferred bits into definite scenario-triggered behaviors.

## Goal

**Deliverable shape (Deconstruct tuple):**
- **deliverable:** a specification / design document — rlu's behavioral contract.
- **kinds:** prose spec + a **scenario→required-behavior table** + an explicit **NOT-list** + **decision-rules** (which object a tracking-need belongs to; how to disambiguate a route); optionally a lifecycle/state-machine sketch and a thin command-interface surface.
- **bounds:** rlu's own behavior only (not the Selector / Dispatcher / human-meta-loop); reconciled with the settled `_route_engagements.md` write-target and the deferred object-B; honors `_route.md`'s process-state exclusion and the route-map's archived/never-mutated status.

**What motivations a good answer might serve (MultiDepth WHY-axis — preserved as ambiguities, not collapsed):**
- `[readiness-driven]` — a build-ready contract with no open judgment calls left for implementation.
- `[correctness-driven]` — make sure rlu's behavior is RIGHT before committing, especially since the design just shifted this session (placement + name changed).
- `[coverage-driven]` — the "in what scenarios" signals worry about unhandled cases (forgotten start, crash mid-run, cross-inquiry route, first-run-in-project guard, parked route); ensure none is silently undefined.
- `[boundary-driven]` — keep rlu from creeping into a decider/launcher ("I am the meta loop still").

**Context downstream consumers need (MQ2 context-need axis):**
- **prior outputs (verdict sub-axis):** the prior rlu finding (`2026-06-12_20-48`); the placement finding (`2026-06-13_07-24`); the routelister spec; the Pipeline/selections design (`2026-06-11_12-47`); the SUSTRALL launch checklist (`2026-06-11_16-45`). (See Synthesis Trigger.)
- **kinds of context:** the already-settled decisions (must honor, not re-open); the field evidence (crowboy hand-annotations); the scenario inventory.
- **stance:** reconciliation-bound, production-aimed (this becomes rlu's real build contract), not greenfield.

**What would explicitly fail the goal (MQ4 boundary-axis — task-level exclusions):**
- Re-deciding the write-target / file name (settled this session: `_route_engagements.md`).
- Specifying the Selector / Dispatcher / human-meta-loop behavior (rlu is not them).
- Specifying object-B (the project working-queue) behavior (deferred behind the Dispatcher gate).
- UNCERTAIN-exclusion (preserved as open): actually *implementing* rlu now — "dive deep into how it should be" reads as spec-not-build, but the spec may be wanted build-ready.

## Considered Articulations

- **Item 1 — "how rlu should be and shouldn't be, what it must do in what scenarios":**
  1. **Build-ready contract.** Produce rlu's build-ready behavioral contract: positive obligations (at `start` / `done` / `park` / `list`), the NOT-list, and a scenario→behavior table covering normal + edge cases — reconciled with the settled `_route_engagements.md` write-target.
  2. **Scenario stress-test.** Enumerate every scenario rlu could face (formal `/aMVLwr` run, informal plain-session run, forgotten `start`, crash/resume mid-run, cross-inquiry route, first-run-in-project, parked/decided-against route, multi-route inquiry, ambiguous route reference) and specify the required behavior in each — surfacing gaps the prior findings left open.
  3. **Responsibility boundary.** Draw rlu's scope fence sharply: what it **should be** (engagement recorder + manifestation pointer) vs **shouldn't be** (route-chooser, run-launcher, route-map editor, status-writer-into-`_route.md`, the Selector/Dispatcher).
  4. **Resolve the deferred.** Turn the still-open design questions into definite scenario-triggered behaviors: window-guard re-attachment (glob for the first `_route_engagements.md`), cross-inquiry row placement (where-it-ran + source-map back-ref), the degraded `done`-without-`start` mode, multi-route disambiguation (ask-never-guess).
  5. **Lifecycle state-machine.** Specify rlu as a state-machine over the route-engagement lifecycle (none → in-flight → done, plus parked) with per-scenario transitions and the invariants it preserves (append-only, never mutate the route-map, single-writer, the ↗ pointer into `_route.md`).

## Scope Check

**Question covers goal.** The question (rlu's behavioral contract across its three faces, applied across scenarios) covers the goal (a build-ready, correct, coverage-complete, scope-fenced spec). No widening needed.

**Specific-vs-pattern check:** the question names one artifact (rlu), so it is inherently scoped to that one skill — no example-vs-pattern widening on the *subject*. But on the *scenarios*: the named scenarios (forgotten start, crash, cross-inquiry, first-run, parked, multi-route) are **seeds, not the closed set** — the inquiry should address the BROADER scenario space rlu faces, using the named ones as anchors, and explicitly hunt for unnamed scenarios (that is the `[coverage-driven]` motivation). Default-to-broader applies.

## Layer Commitment

**Primary layer: PROCESS.** The operative ask — "what it must **do** in what **scenarios**," "how it should **be** and shouldn't **be**" — is rlu's *behavioral contract*: the obligations it runs, the exclusions it refuses, and the conditional behaviors it triggers per situation. That is the Process layer (procedure, mechanism, gates, conditional steps).

Other layers, considered and scoped out (or sequenced after) for THIS run:
- **Meaning** (what rlu fundamentally IS) — largely **settled by the priors** (rlu = the route-engagement recorder; "records and points, never chooses or launches"). Re-touched here only where the boundary face ("shouldn't be") forces an identity statement — not re-derived from scratch.
- **Structural** (the command surface, the `_route_engagements.md` row schema) — **downstream of, and derivable from, the behavioral contract**; this run may sketch it but does not adjudicate it. A dedicated structural pass can follow if the behavioral contract surfaces schema decisions worth their own inquiry.

Sequencing: Process now (behavioral contract) → Structural next if needed (the file/command schema) → Meaning only if the boundary work reopens identity (not expected).

## Synthesis Trigger

This inquiry consolidates commitments from multiple prior outputs into rlu's behavioral contract; the finding MUST include an `## Inherited Commitments Re-test`. The priors:

- `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` — commits to: ADOPT rlu; the **two writing moments** (`rlu start` writes the in-flight admission row immediately; `rlu done` completes it); the **degraded `done`-without-`start`** mode; **`park`** (record a deciding-against) and **`list`** (print the table); the **stale-in-flight sweep** every invocation; the **NOT-list scope fence** (records and points — never chooses, launches, edits route-maps, or writes status into `_route.md`); the **graded pre-registration window guard** (hard-STOP where a pre-registration program is declared, warn elsewhere); route disambiguation **asks-never-guesses**.
- `devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/finding.md` — commits to: the **write-target is per-inquiry `_route_engagements.md`** (append-only, at the inquiry root, sibling to `_route.md`); run-state is **two objects** (A = the local per-route run-log; B = the project Selector-queue, deferred); the project overview is a **DERIVED `rlu list` view** (glob + assemble, never a maintained file); the **window guard re-attaches to "the first `_route_engagements.md` anywhere"** via a glob; **rows live where-the-work-ran** with a source-map back-reference; only object-A ships now.
- `cognitive_harness/routelister/references/routelister.md` — commits to: `_route.md` holds within-concept facts only and **excludes process/control-flow state**; route-maps (`routelister.md`) are **archived at CONCLUDE and regenerated** (so marks written into them would vanish); the ↗ manifestation pointer is the legal way to reference a later-engagement artifact from `_route.md`.
- `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md` — commits to: the **selections file = the Selector's working-queue** (object-B), the cross-inquiry forward-intent ledger the Dispatcher fires from; distinct from rlu's per-route done-log; deferred behind the Dispatcher gate.
- `devdocs/inquiries/2026-06-11_16-45__sustrall_next_main_steps_and_alternatives/finding.md` — commits to: the **pre-registration window** (before the project's first traversal record exists, a pre-registration file must exist first, irreversibly) — the rule rlu's window guard enforces.
