# Branch: Task-Define — Discipline Meaning Layer (Defined From Scratch)

## Question

- **Subject** — **Task-Define**: a new lightweight discipline (proposed to replace the prior Inquiry-Elaboration design line) whose job is to expand a task statement into a defined task via a small set of cognitive operations.
- **Action** — DEFINE the discipline from scratch at the MEANING layer (its identity as a cognitive operation; what its operations are; how its operations relate to each other; what it does NOT do).
- **Level** — discipline.
- **Observation targets** (each preserved separately; the user's framing bundles multiple distinct concerns):
  1. **Identity** — the name (**Task-Define**); what it IS as a cognitive operation; the contrast with the prior Inquiry-Elaboration heaviness (no anchor-grounded outputs, no fidelity verdict, no auto-fetch of external anchors).
  2. **The five operations** — Itemize, Meta-question, Deconstruct, MultiScope, Rephrase — what each produces, and how each operates on the task statement.
  3. **The DYNAMIC role of Meta-question** — meta-questions run FIRST and do scope-and-context-need determination on each task item. Sample meta-questions the user named: *"what scope is this task referring to? (time / concept / project / feature)"*; *"does additional scope information might be required, or is it a standalone sense?"* (example given: building a feature where the project end-goal would contribute to the feature's usefulness; creating a discipline where knowing discipline-creation scope-info would help). The user explicitly wants **more than these 3 questions, or better-refined meta versions** — surfacing/sensemaking should enumerate the meta-question set the discipline carries. **Purpose**: prevent rephrasings from adding undesired state/info and locking meaning in the wrong space; determine whether external context is needed at all.
  4. **The ordering of operations** — Meta-question FIRST (so its answers can constrain the rest); Itemize before Meta-question (so meta-questions apply per item); Rephrase LAST (so meta-question answers shape it). Validate or refine.
  5. **The Task-Define / Explore division (DYNAMIC)** — Task-Define's job is the task-statement-side work (using the LLM's own internal context). Explore's job is the project-side context fetching (project-goal-relevant, surrounding). The split is **DYNAMIC** — task-by-task: meta-questions decide whether external context is needed; some tasks don't need it (not about the project; standalone) and Explore is not invoked for those.
  6. **Inputs** — the raw task statement + the LLM's own internal context. NO external `project_goal` input. NO `recent_context` input. The discipline does not reach out for surrounding context.
  7. **NOT-list** — what Task-Define explicitly does NOT do: no verify-phase / no fidelity verdict / no PASS-FLAG output / no anchor-grounded rephrasings against external inputs / no automatic external-context fetch / no auto-detection of multi-request structure as a separate verdict (Itemize IS the multi-detection — implicit in the output, not a separate verdict); no project-goal awareness inside Task-Define.
  8. **Lightweight stance (load-bearing)** — the discipline must remain small. Each operation added should pull its weight; no creeping IE-style heaviness. The lightweight stance is what justifies the explicit departures from the prior IE arc.

**Question (one sentence covering all observation targets):** Defined from scratch (the prior Inquiry-Elaboration arc is set aside, not inherited as a commitment), what IS **Task-Define** as a discipline at the meaning layer — its identity (name = Task-Define, operation = expand-task-statement-into-defined-task), its five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) and what each produces, the dynamic ordering and role of Meta-question (run FIRST per item; scope-and-context-need determination; constrains rephrasings to prevent meaning-lock; the open set of meta-questions including but not limited to "what scope (time/concept/project/feature)?" and "is additional scope context required or standalone?"), the dynamic Task-Define / Explore division (Task-Define does task-side work using LLM internal context; Explore is invoked IF the meta-questions reveal external project context is needed, NOT always), the input contract (raw task statement + LLM internal context only; no external anchor inputs), the NOT-list (no verify-phase, no fidelity verdict, no anchor-grounded outputs, no auto-fetch of external context, no creeping IE machinery), and the lightweight stance (load-bearing — every operation must pull its weight)?

## Goal

- **Criterion** — clarity of the name + each operation's role; honest, dynamic (not static-coupling) treatment of the context-need via meta-questions; clean Task-Define / Explore division that is task-by-task variable rather than fixed; lightweight stance preserved and actionable (i.e., not just a label but a real constraint that can be enforced when designing the structural layer next); honest about what is NOT in Task-Define; the departure from the prior IE arc is explicit (and the priors are NOT silently re-inherited as commitments).
- **Use case** — settle the meaning layer so the next inquiry (structural) can design Task-Define's spec file shape (sections, output schema). After the structural inquiry, the process layer can be designed (and is expected to be much lighter than the prior 15-28 process design, because the verify-phase + fidelity gate are GONE).
- **Desired outcome** — a verdict on Task-Define's meaning concrete enough that a spec author could write the structural layer from it; the prior IE arc is acknowledged as superseded by this new design (which is why we are defining Task-Define from scratch rather than refining IE).
- **What would fail** — (i) silently re-introducing IE machinery (verify-phase, fidelity verdict, anchor inputs, auto-fetch of project_goal); (ii) treating meta-questions as static seeds (locking the Task-Define → Explore handoff as always-on rather than conditional on the meta-question answer); (iii) producing a discipline definition that is heavy by accident (e.g., five operations each of which expands into elaborate sub-machinery); (iv) leaving "lightweight" as a label rather than an actionable constraint (e.g., not naming what would VIOLATE lightweight); (v) over-fitting to the example meta-questions the user gave (the discipline must hold an open set of meta-questions — the user explicitly said "more than these 3 questions, or better refined"); (vi) leaving Task-Define / Explore division ambiguous about whether it's static or dynamic.

## Source Input

```text
[/MVLw invocation args]
lets redefine our elobarate discipline with different name. Task-Define is the name 

and it should be like this 

it is a discipline whcih
Expand task definition by, ,MultiScope, Deconstruct, Itemize,

i think this a lot clear than elobarate version


and it should be lightweight 


what do you think ?

[follow-up clarification — "imagine it as from scratch we are defining it"]

[follow-up clarification — operations & division]
yes run MVLw 

but it is importnat that u understnad 

Task-Define = produce seeds (angles + meaning-layer meta-questions on the task statement, using LLM's internal context); Explore = take those seeds, go find project-goal-relevant context in the surroundings.


this part, is dynamic. it depends on the task. thats the point of meta questions, maybe the question is not require project goal understending even, and maybe it is not about the project ...


so these meta questions should be like 

what scope is this task is referring to ?  in terms of time, concept, project, feature, 

does additional scope information might be required, or it is a standalone sense, (this is for when we are building a feature but including the end goal of the project would contribute to the design of this feature's usefulness , this is just an example, for example when we are careting a discipline , it would be know the scope information of disipline creation too, )

and of ource more than these 3 , questions or better more refined meta version of them so rephrasing will not add undesired state or info and lock the meaning in wrong space
```

## Scope Check

**Question covers goal: YES.** The 8 observation targets enumerate identity + 5 operations + meta-question dynamic role + ordering + Task-Define/Explore dynamic division + inputs + NOT-list + lightweight stance. The Goal's "what would fail" fences off (a) silent IE re-inheritance, (b) static-coupling of Task-Define→Explore, (c) heavy-by-accident sub-machinery, (d) un-actionable lightweight, (e) over-fitting to the example meta-questions, (f) ambiguous Task-Define/Explore division. These map 1:1 to the observation targets.

**Specific-vs-pattern check:** the user named **Task-Define specifically** (committed name) AND named the **dynamic-meta-question principle as a general approach** (with the 3 examples being non-exhaustive — "more than these 3"). Treat both as load-bearing: this inquiry defines THIS discipline (specific) using THIS dynamic-meta-question approach (broader principle that the meta-question set is OPEN and intended to grow / refine).

**Transcription audit (per step 3.5):** the Source Input contains clause-joiners — "by, MultiScope, Deconstruct, Itemize" (comma-joined list); "Task-Define = produce seeds (angles + meaning-layer meta-questions ...)" (and-joined list inside parentheses); "Task-Define ... ; Explore ..." (the dynamic division); "more than these 3, questions or better more refined meta version" (and-joined). Each semantic clause appears in Question or Goal: the 5 operations are observation-target 2; the seed-vs-fetch division is observation-target 5; the meta-question open set is observation-target 3; the dynamic/conditional Task-Define→Explore is observation-target 5; the "more than these 3" requirement is observation-target 3 (made explicit). **Transcription complete.**

## Layer Commitment

**Primary layer: MEANING.** The user invoked a from-scratch redefinition of the discipline ("lets redefine ... Task-Define is the name", "imagine it as from scratch we are defining it"). This is the meaning layer — what the discipline IS as a cognitive operation, what its operations are, what it does NOT do. Structural and process choices are downstream of settling this.

Out of scope for this run:
- **Structural** — what the spec file LOOKS LIKE (sections, output schema, NOT-list grounding, failure-mode list). Sequential next step after this meaning settles.
- **Process** — how runners invoke Task-Define (call-site, input supply, runtime gates, branch.md rewrite, cross-runner generalization). Sequential step AFTER structural. Expected to be much lighter than the prior 15-28 process design because the verify-phase + fidelity gate + bounce-with-halt are GONE in this new design.

**Multi-layer sequential plan:**
1. **This run** — meaning (identity + operations + dynamic-roles + division + NOT-list + lightweight stance).
2. **Next** — structural (the spec file shape; the output schema; the meta-question set the discipline carries; the NOT-list anchored in Task-Define's character).
3. **After** — process (the runner-side wiring; expected to be substantially lighter than the prior 15-28 design).

The order is meaning → structural → process, per the project's standing layer-discipline.

## Relationships

- **RELATED:** `devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/finding.md` — and the rest of the prior Inquiry-Elaboration arc (22-30, 13-31, 20-08, 01-17, 09-54, 11-27, 11-46, 15-28). This inquiry **departs from and effectively supersedes** the prior IE arc (user invocation: "lets redefine our elobarate discipline with different name", "imagine it as from scratch we are defining it"). The priors are informational context but are NOT being synthesized — their commitments are NOT inherited; the departures are deliberate. If this inquiry's finding settles Task-Define cleanly, a follow-up administrative action will mark the prior IE-arc finding(s) as SUPERSEDED BY this inquiry.

(No `## Synthesis Trigger` section: the user said "from scratch" — the priors are not inputs being synthesized, they are predecessors being departed from. The `## Relationships` RELATED note above carries the bookkeeping without obligating a `## Inherited Commitments Re-test` section that would silently re-import the priors' commitments.)
