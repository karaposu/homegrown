# Branch: routeman_mvlw_integration_pattern

## Question

- **Subject** — the relationship between `/routeman` (the Boundary discipline that enumerates next moves with typed metadata; `cognitive_harness/routeman/references/routeman.md`) and `/MVLw` (the extended cognitive loop with Surfacing → Sensemaking → Decomposition → Innovation → Critique pipeline; `cognitive_harness/MVL+/SKILL.md` and `~/.claude/skills/MVLw/SKILL.md`).
- **Action** — UNDERSTAND + DESIGN. Understand whether the two compose; if yes, design the integration pattern; if no, justify the boundary; in either case, address the user's concern about routeman's apparent "lightweight"-ness.
- **Level** — cross-cutting (a Boundary discipline + a runner-level cognitive loop; the question crosses both abstractions).
- **Observation targets** — preserved as separate items per LOOP_DIAGNOSE MC2 (the user's framing has clause-pairs joined by "and" and multiple distinct sub-questions across sentences):
  1. **Integration pattern.** How (if at all) can `/routeman` and `/MVLw` be used together? Specifically: when a route enumeration needs strong reasoning during enumeration (not just enumeration of moves), can the MVLw loop be invoked AS PART OF a routeman run? Or invoked AROUND a routeman run? Or are they orthogonal operations that should not be composed?
  2. **Job-boundary reframe.** Is the question even valid? The user offers an alternative framing: "Maybe hard reasoning tasks in order to find next steps are not job of routeman." Adjudicate whether reasoning-heavy enumeration is or is not routeman's job; if not, where does it belong (sense-making? MVLw? a different discipline)?
  3. **Heaviness concern.** Is routeman too lightweight in its current shape? Does it have no "heavy version" that can run in a more serious way when stakes are high?
  4. **Staged-rerunnability hypothesis.** The user proposes that staged re-runnability (each re-run refines enumeration) already provides the "heavy version" — double-run in really important stages to make enumerated routes highly accurate. Test this hypothesis: does staged re-runnability of routeman provide what a heavy-mode would provide, or does it leave a gap?
- **Deliverable shape** — an integration analysis with: (a) a verdict on whether `/routeman` + `/MVLw` should compose, and if yes the specific composition pattern(s) (routeman-inside-MVLw, MVLw-inside-routeman, MVLw-then-routeman, etc.); (b) a verdict on the job-boundary (is reasoning-heavy enumeration routeman's job or not); (c) a verdict on whether routeman needs a heavy-mode addition (and if not, why staged-rerunnability or some other existing mechanism suffices); (d) concrete recommendations (when to use which composition; when staged re-run is enough).

**Stated question:** Can `/routeman` and `/MVLw` be used together when route enumeration needs strong reasoning, and if so how — OR is reasoning-heavy enumeration not routeman's job at all (the boundary belongs elsewhere) — AND is routeman currently too lightweight to handle serious enumeration tasks, OR does staged re-runnability already provide the heavy-mode the user is worried is missing?

## Goal

- **Criterion** — a good answer: (a) treats the four observation targets as INTERLOCKED but distinct adjudications (integration pattern, job-boundary, heaviness concern, staged-rerunnability hypothesis); (b) grounds the verdict in routeman's actual shape (per the live spec + the recent 5+1 inquiry consolidation) and MVLw's actual shape (per its SKILL.md + the discipline pipeline); (c) gives a concrete integration pattern OR an explicit non-integration verdict with reasoning; (d) honors the user's proposal (staged-rerunnability) by testing it on structural grounds, not dismissing it; (e) addresses the heaviness concern honestly — either confirming a gap that requires a heavy-mode addition OR demonstrating that no gap exists.
- **Use case** — the user wants to know whether, in a high-stakes inquiry where they need both strong reasoning AND route enumeration, they should: (a) invoke `/MVLw` for the reasoning then `/routeman` for the enumeration; (b) invoke `/routeman` inside an `/MVLw` iteration; (c) something else entirely. The answer determines a workflow pattern for the project's higher-stakes work.
- **Desired outcome** — clarity on the workflow pattern for reasoning-heavy enumeration tasks; clarity on whether routeman has a hidden gap (no heavy-mode) or whether its current shape is sufficient with the right composition; an honest verdict on the user's staged-rerunnability hypothesis.
- **What would fail** — an answer that: (i) treats the integration question as obvious without testing whether the operations actually compose at the discipline-pipeline level; (ii) dismisses the user's "lightweight" concern without engaging the heaviness axis (cycles? depth? rigor? reasoning-substrate?); (iii) dismisses the staged-rerunnability hypothesis without testing whether re-runs actually improve enumeration accuracy in the way the user describes; (iv) gives a workflow recommendation without considering how the existing live discipline specs constrain or enable the composition; (v) over-extends into navigation-session / meta-loop territory (those are bounded follow-ups per the 14-03 inquiry); (vi) re-litigates routeman's shape (the recent 16-45 consolidated amendment plan + the priors are the current commitments) — this inquiry uses routeman's shape as a given, not as an adjudication target.

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
Use this skill


I want you to inspect and analyse how routeman can be used  with MVLw skill 

What i mean is this

There is a classic enumaration of routes. So far this was we were building 

But sometimes we need strong reasoning with path enumaration, and reasoning part for our project is usually handled by MVLw loop

But then how it is possible to use MVLw loop and routeman together


Or this is not a valid question? Maybe hard reasoning tasks in order to find next steps are not job of routeman.


But also i am worried about routeman being too light weight and it doesnt have heavy version where we can run and it can run in more serious way.. 

But maybe staged runnability of routeman gives us this already.  Each rerun refines the route enumaration .. so we cna double run in really important stage of the project to make sure enumerated routes are highly accurate 


Lets dice deep into this
```

## Scope Check

Question covers goal: YES.

**Specific-vs-pattern check.** The user's framing is about routeman + MVLw as the two specific abstractions, but the integration question implicates the broader pattern of "how do disciplines compose with cognitive-loop runners." Default per the runner: address the specific abstractions (routeman + MVLw) named by the user; flag the broader pattern as Open Question / Research Frontier if it surfaces from the analysis. The user explicitly named the specific pair, so the specific framing wins; pattern generalization is bonus content.

**Out-of-scope-bounded follow-ups (from prior routeman inquiries):** navigation-session aggregation output design + meta-loop runtime design (per 14-03). Multi-head concurrent directional invocation (per 14-49). These remain bounded follow-ups; this inquiry's integration analysis assumes single-worker, single-session context.

**Prior-inquiry-context (not synthesis).** This inquiry references the recent routeman inquiries for context but does NOT consolidate them. The relevant priors:
- `devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix/finding.md` — the consolidated amendment plan; defines routeman's current committed shape.
- `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md` — directional mode + read policy.
- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — staged two-stage route mapping (stage-1 generic, stage-2 directional); the per-Route `why_this_might_be_important` field.
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — the 2 invocation modes (generic discovery + directional/topic-scoped); persistence ledger.

These are TREATED AS GIVEN, not adjudication targets. The Synthesis Trigger does NOT fire — this inquiry asks a new question (integration with MVLw) that uses the priors as background context.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix` (most recent routeman inquiry; defines the current committed shape that this inquiry's integration analysis operates against).
- **RELATED:** `cognitive_harness/routeman/references/routeman.md` (the live routeman discipline spec; defines what routeman IS).
- **RELATED:** `~/.claude/skills/MVLw/SKILL.md` (the /MVLw runner spec; defines the extended cognitive loop's pipeline + handoff invariants).
- **RELATED:** `cognitive_harness/MVL+/SKILL.md` (the /MVL+ runner spec; the explore-variant of the extended loop; analogous structure to MVLw but different upstream discipline).
- **RELATED:** `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` (navigation session role doc — clarifies the boundary; this inquiry's integration analysis is at the single-worker single-session level, not the nav-session level).
- **RELATED:** `docs/canon/worker_loop_logic.md` (worker-loop architecture; the meta-loop architecture is bounded follow-up — out of scope for this inquiry).
