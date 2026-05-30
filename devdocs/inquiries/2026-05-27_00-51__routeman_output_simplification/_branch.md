# Branch: routeman_output_simplification

## Question

- **Subject** — `/routeman`'s output logic and artifact shape (the per-route schema + Route Map wrapper + workspace/artifact dual output + telemetry layer, NOT the enumeration operation itself).
- **Action** — analyze + propose-simplification (compound; the analysis precedes and grounds the proposal).
- **Level** — discipline-level (the artifact/output shape of one discipline), with cross-discipline coherence check against the multi-head worker session use-case.
- **Observation targets** — preserved as separate items because the user's framing contains four distinct aspects joined by "and"/"so"/comma:
  1. **Problems with current output logic** — what specifically is bad about how routeman currently structures its output (per the prior poison flagged in `devdocs/routeman_releted/problem.md`).
  2. **Comprehension friction** — what makes the current output logic hard to understand for a reader (the inquiry author, a future Worker session, a Navigator session, a Selector layer).
  3. **Simplification feasibility** — whether the output logic can be simplified WITHOUT collapsing the enumeration (enumeration of routes is a hard constraint — must remain full; compression of the enumerated set is not allowed).
  4. **Multi-head compatibility preservation** — whether any proposed simplification still works for multi-head worker session coordination (the use-case where multiple parallel MVLw workers each produce routeman outputs that are consumed by a Navigator/Selector layer across heads).
- **Deliverable shape** — an analytical memo with: (a) a concrete list of identified problems in the current output spec, (b) a concrete list of comprehension-friction sources tied to specific reader contexts, (c) either a concretely-shaped simpler output proposal (file structure + section names + what each holds) OR an explicit justification of why the current shape is at minimum complexity, (d) an explicit multi-head compatibility check on the proposed shape.

**Stated question:** What is bad with the current `/routeman` output logic, what makes it hard to understand, and is it possible to simplify the output logic — preserving the full enumeration of routes AND the multi-head worker session use-case?

## Goal

- **Criterion** — a good answer: (a) names specific problems in the current routeman output logic with citations into the spec text (not vague "it feels complicated"); (b) names specific comprehension-friction sources tied to specific reader contexts (the inquiry writer / a future Worker / a Navigator session / a multi-head Selector); (c) either proposes a concretely-shaped simpler output (with file structure, section names, what each holds) OR explicitly justifies why the current shape is at minimum complexity (with the reduction-attempt evidence); (d) tests the proposed shape against the multi-head use-case with a concrete walkthrough (e.g., "head A produces routeman.md, head B produces routeman.md, Navigator reads both — does the proposed shape support that?").
- **Use case** — the user will use the answer to decide whether to (a) keep the current routeman spec as-is, (b) shrink the output to something like `routeman.md` + `_route.md` (the user's working hypothesis), or (c) something else that survives critique. If (b) or (c) survives, the user will edit `cognitive_harness/routeman/references/routeman.md` (and `SKILL.md` if needed) to match.
- **Desired outcome** — routeman has an output logic that is the simplest shape that preserves full enumeration + multi-head compatibility. Comprehension friction is reduced; cognitive load on a reader (human or AI) is lower without losing route information.
- **What would fail** — an answer that: (i) names problems too vaguely to act on; (ii) proposes a simplification that collapses or compresses the enumeration (the user has explicitly excluded that); (iii) proposes a shape that breaks multi-head consumption (the Navigator-across-heads use case); (iv) defends the current shape without engaging with the user's concrete simplification hypothesis (`routeman.md` + `_route.md`); (v) treats the user's hypothesis as the answer without testing it against the problems and the multi-head use; (vi) confuses simplification of output STRUCTURE with simplification of enumeration CONTENT.

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
now i want you to read devdocs/routeman_releted/problem.md and understand it fully.  and analyze what is bad with output logic of current routeman,  what makes it hard to understand . and if it is possible to simplify (not simplifying enumaration, or compressing it , we need enumeration of routes for sure ) routeman output logic, so still it will work wit multihead worker session etc too
```

Plus the contents of `devdocs/routeman_releted/problem.md` (the user instructed to read and understand it fully):

```text
current routeman discipline creation had context poison by already existing deprecated navigation related content. 

This poison was mostly about output logic of routeman and how it should work. 
poisining files are moved in to

/Users/ns/Desktop/projects/native/cognitive_harness/non-active/multi_resolution_navigation.md
/Users/ns/Desktop/projects/native/cognitive_harness/non-active/navigation_context_intake_my_version.md
/Users/ns/Desktop/projects/native/cognitive_harness/non-active/navigation_context_intake.md
 (doesnt mean these are bad, or not feasible. but we should be suspectful of these ideas..)


since routeman was created project folders are re structured to be cleaner, and to prevent more further poisoning. 


Yet we need to understand routeman and and current poisining (maybe most of it is good.. we dont know)


I think main thing we need with routeman is 2 things 

one logic to enumarete routes , this is main output, routeman.md inside inquiry folder

other logic is to save the state of route calculation stats, maybe _route.md which saves datetime of the calcualtion, and if new routeman is run, it will be updated... 

but maybe this is missing some vital information? 


lets think it through. 
```

## Scope Check

Question covers goal: YES with two notes.

**Specific-vs-pattern check.** The user named `routeman.md + _route.md` as a working hypothesis. This is a specific candidate proposal; the inquiry should evaluate BOTH (a) this specific hypothesis as one candidate, AND (b) the broader simplification space (what alternative shapes exist, what's the minimum that preserves full enumeration + multi-head compatibility). Treating the user's hypothesis as the only candidate would be premature narrowing — the user explicitly opened the door (`"but maybe this is missing some vital information?"`).

**Poison-suspicion gate.** Three named files are flagged as possible context-poison sources (`non-active/multi_resolution_navigation.md`, `non-active/navigation_context_intake_my_version.md`, `non-active/navigation_context_intake.md`). The inquiry must surface and read these in Surfacing, and must explicitly mark each subsequent commitment that traces back to them as "poison-traced" so Critique can adversarially test those commitments harder. The user's framing leaves room for "maybe most of it is good" — the test is structural, not blanket rejection.

## Layer Commitment

**Primary layer: STRUCTURAL.** The user's question is "how should routeman's output be shaped" — the artifact shape, file structure, section organization, schema fields. The user explicitly preserves the meaning ("enumeration of routes for sure"). They explicitly preserve a process aspect ("re-run updates state"). What's adjudicated here is the STRUCTURE of routeman's output.

**Other-layer alternatives considered and explicitly out of scope for THIS run:**
- **Meaning** — what routeman IS as a cognitive operation. Out of scope: the user has explicitly preserved enumeration as the meaning-layer commitment. If the analysis surfaces a meaning-layer concern (e.g., "the adaptive-guidance component isn't actually part of enumeration and could be a separable concern"), it goes to the finding's frontier rather than being adjudicated here.
- **Process** — the step sequence routeman runs (the ten Enumeration components, the typed-reachability mechanism, the adaptive-guidance mechanism). Out of scope as the primary frame, though the output shape constrains what the process produces. If a process step's existence depends on an output field that's being collapsed, that's noted but not the primary deliverable.

**Sequential multi-layer plan (declared, not executed in this run):**
1. THIS run — settle structural shape. Output: analysis of current shape's problems + simplification proposal (if feasible) with concrete file/section structure + multi-head compatibility check.
2. Follow-up run (if simplification is adopted) — author the spec edits to `cognitive_harness/routeman/references/routeman.md` and `cognitive_harness/routeman/SKILL.md` to match the structural decision (a materialization run, not a fresh investigation).
3. Follow-up run (if frontier issues emerged at the meaning layer) — re-test meaning-layer commitments (e.g., is adaptive-guidance truly part of routeman or a separable boundary-discipline-companion concern?).
