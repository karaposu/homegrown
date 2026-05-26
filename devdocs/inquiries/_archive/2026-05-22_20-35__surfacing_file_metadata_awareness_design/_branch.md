# Branch: surfacing file-metadata awareness design

## Question

The five meta-aspects of this question:

- **Subject** — the surfacing discipline as specified at `cognitive_harness/surfacing/references/surfacing.md`, specifically the question of file-metadata (last-edit datetime) as an input signal.
- **Action** — design: propose what (if anything) to add to the surfacing spec.
- **Level** — discipline-level (a single discipline's spec); not loop-level (`/MVL2+`) and not cross-cutting.
- **Observation targets** (multiple — all preserved per LOOP_DIAGNOSE MC2 verbatim trigger pattern, since the user joined three sub-questions with "and"):
  1. **Should** surfacing explicitly use file metadata (last-edit datetime) — i.e., is metadata a legitimate input signal for surfacing's relevance judgment?
  2. **Where in the spec** should this live — does surfacing need a dedicated section, or does it belong inside an existing component? (User: "maybe surfacing discipline should have some section regarding this?")
  3. **What addition** enables the metadata signal **without limiting or regressing** the discipline — specifically, without making "old file = idle/irrelevant" a default judgment that silently excludes relevant-but-idle items? (User's load-bearing "but" constraint: "this metadata is good for looking at recently edited files and what is the active task, but it shouldnt mean completely ignore rest of the files.")
- **Deliverable shape** — a design recommendation containing: (a) explicit "should/shouldn't" answer with reasoning, (b) named target location in the surfacing spec (existing section to extend, or new section to add, with section name), (c) concrete content shape — what the addition would say at the level of mechanism (how surfacing uses the signal at runtime), (d) explicit treatment of the non-regression constraint (how the proposal preserves the surfacing of relevant-but-idle items).

**The question, stated covering all five aspects:** What addition(s) to the surfacing discipline spec at `cognitive_harness/surfacing/references/surfacing.md` would enable file-metadata-awareness (last-edit datetime of files in the territory) as one input signal to surfacing's relevance judgment — including whether the addition lives in an existing component or warrants its own section, and what mechanism the addition introduces — without limiting or regressing the discipline by making "old file = idle/irrelevant" a default judgment that silently excludes relevant-but-idle items from being surfaced?

## Goal

- **Criterion** — concrete proposal naming: (i) the target location in the spec (existing section name to extend, or a new section name with where to insert it), (ii) the mechanism (how surfacing uses the metadata signal at runtime — as a tag? as an input to relevance? as a separate output dimension?), (iii) explicit non-regression treatment showing how relevant-but-idle items are still surfaced, (iv) reasoning that compares at least one alternative placement or mechanism before committing.
- **Use case** — the user will edit `cognitive_harness/surfacing/references/surfacing.md` based on the answer, integrating the proposed addition.
- **Desired outcome** — the surfacing discipline gains an explicit, principled mechanism for using last-edit metadata as ONE signal among many in its relevance judgment, addressing TWO failure modes the user named:
  - **Failure mode A (without metadata):** old-and-idle items get treated as "refined as recent files" — surfaced as actively-maintained when they are not. The user calls this "errors caused by idle artifacts."
  - **Failure mode B (with naive metadata):** old-but-non-idle items get dropped — the metadata becomes a hard exclusion gate that silently filters out relevant-but-idle material. The user's explicit "but" guard: *"just bc a file is old it doesnt mean it is idle as well."*

  A successful proposal addresses BOTH failure modes — gains the signal value of A-avoidance without paying B as a cost.
- **What would fail** — (a) a bare "yes, use metadata" answer with no mechanism specified; (b) a proposal that makes metadata a hard gate filtering old files out before relevance judgment (re-introduces Failure mode B); (c) a proposal that adds a new section without addressing how it interacts with the existing relevance tags (core / sub / side / umbrella); (d) a proposal that wires metadata into the *artifact case* but ignores the *possibility case*, or vice versa, without saying why; (e) a proposal that addresses Failure mode A only (catches idle artifacts) but doesn't preserve B-avoidance, or vice versa.

## Source Input

```text
in cognitive_harness/surfacing/references/surfacing.md we have a surfacing discipline

and it is essential part of MVL2+ loop in cognitive_harness/MVL2+


And i was wondering this. should surfacing discipline also explicitly use metadata (last datetime of edit) of files too? I think this can prevent errors caused by idle artifacts in the codebase, without metadata judgment, they will be considered as refined as recent files , which might not be the case. But just bc a file is old it doesnt mean it is idle as well...  but having this extra data piece is good. 

and maybe surfacing discipline should have some section regarding this ? 

and also this metadata is good for looking at recently edited files and what is the active task , but it shouldnt mean completely ignore rest of the files..

So, what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?
```

## Scope Check

Question covers goal. The question names the discipline + the signal type + the location-question + the non-regression constraint, all of which the goal asks an answer to address.

Specific-vs-pattern check: the question is scoped specifically to `surfacing` (the user named the discipline + path explicitly). The broader-pattern question (do `/explore`, `/sense-making`, or other disciplines also benefit from file-metadata-awareness?) is **out of scope for THIS run** — if any discipline surfaces it as a frontier, it is preserved as a future-inquiry seed but not solved here. Default behavior per the rule: address the specific case (surfacing) the user asked about.
