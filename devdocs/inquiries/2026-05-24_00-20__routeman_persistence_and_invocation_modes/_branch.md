# Branch: routeman_persistence_and_invocation_modes

## Question

**Subject** — `routeman`'s invocation patterns, persistent-memory model, recalibration semantics, and file-convention extensions. The user proposes (and asks the inquiry to formalize) a set of design extensions: two distinct invocation modes (generic discovery vs directional/topic-scoped); a per-inquiry-folder `_navig.md` persistent-memory file analogous to `_state.md`; recalibration behavior on re-invocation (read prior `_navig.md` files; recalibrate or decompose existing directions; create new ones); adoption of the existing `cognitive_harness/protocols/branch_inquiry.md` protocol for routeman invocations; and a file-content split (`routeman.md` holds the actual route enumerations; `_navig.md` holds metadata + status + pointers to `routeman.md`).

**Action** — surface + rephrase + reason. The user explicitly asked for the questions to be "list[ed] in better phrased way" — so the first cognitive operation is question-discovery + clearer-phrasing, NOT immediate adjudication. The second operation is per-question reasoning (which proposals are structurally sound; which need further inquiry; which have settled answers).

**Level** — discipline-level (routeman's invocation + persistence behavior) with protocol-level reach (branch_inquiry.md adoption decision) and runtime-state-level reach (file-convention proposals).

**Observation targets** — preserve as separate items because the user's framing presents 6 distinct topics joined by "and"/"also" + a meta-task:

1. **Two routeman modes:** generic navigation discovery vs directional/topic-scoped ("what's next in this direction or topic").
2. **`_navig.md` persistent-memory file per inquiry folder**, analogous to `_state.md`.
3. **Recalibration on re-invocation (generic mode):** read all prior `_navig.md` files → recalibrate existing generic directions (importance, goal) → optionally decompose or create new directions.
4. **Recalibration on re-invocation (directional mode):** same pattern but scoped to a route's sub-folders.
5. **`cognitive_harness/protocols/branch_inquiry.md` adoption** for routeman invocations to keep things tidy.
6. **File-content split:** `routeman.md` for enumerations, `_navig.md` for metadata/status/pointers — the user prefers this over conflating them.
7. **Meta-task:** rephrase all of the above as a clean, well-phrased question list before adjudication.

**Deliverable shape** — a discussion memo with TWO clear parts: (a) the questions re-phrased clearly + de-duplicated + organized; (b) per-question structural reasoning (proposed answer, alternative framings, recommendation, or "needs further inquiry" with reason).

**Stated question:** What are the well-phrased questions latent in the user's proposal about routeman's persistence model, invocation-mode split, recalibration semantics, branch-protocol adoption, and file-content split — and what is the structural reasoning per question (settled answer, candidate design, or needs-further-inquiry verdict)?

## Goal

- **Criterion** — a good answer (i) extracts the questions latent in the user's input + rephrases them so each is testable, mutually exclusive where possible, and structurally grounded; (ii) groups related questions (some are sub-questions of others); (iii) per question, produces either a settled answer (with reasoning) or a clear "needs further inquiry" verdict (with the inquiry-shape named); (iv) honors the user's explicit "list them in better phrased way" request as the first deliverable shape; (v) doesn't conflate the 6 topics into one mega-question.
- **Use case** — the user reads the rephrased question list, decides which to commit immediately (via direct adoption or via spec edits), which to defer (with documented risk), and which need further /MVL2+ inquiries.
- **Desired outcome** — clean question list + per-question reasoning the user can navigate at SKILL.md authoring time + when deciding the persistence model's specifics.
- **What would fail** — (i) silent adoption of all proposals without surfacing the questions; (ii) collapsing all 6 topics into a single recommendation; (iii) treating the meta-task (rephrasing) as decoration rather than the primary first deliverable; (iv) producing settled answers for questions that genuinely need further inquiry; (v) producing "needs further inquiry" verdicts for questions that have settled answers already accessible from the existing routeman chain; (vi) failing to honor the user's structural intuition that `routeman.md` and `_navig.md` belong to different content axes (the file-split is a structural commitment the inquiry should engage with directly, not silently dismiss).

## Source Input

```text
routeman has 2 ways, 

1 is generic navigation discovery 
2 is towards direction, (what is next in this direction or topic )

do think we need _navig.md like file for persistance memory? 

lets think for a sec

MVL loop creates inquiry folders, and after MVL loop if we run routeman to understand what is next , it makes sense that just like state.md we can have navig.md in that inquiry folder?

imagine this, 
we have one generic run of routeman in our codebase, which should generate generic directions. 

if we have a second generic run of routeman, it should 
     0. read all nagiv.md files and use them to
     1. recalibrate already existsant generic directions  (importance, goal, etc ...)
     2. maybe decompose or create new  directions 

this makes sense... 

and when we are running routeman towards a direction, it goes and find branch routes of that direction and expands it.  and if it is ran a second time, again it reads all nagiv.md files under that route folders and use them to recalibrate already existsant generic directions  (importance, goal, etc ...) and   maybe decompose or create new  directions 


so it is important for us to start using cognitive_harness/protocols/branch_inquiry.md logic. because it makes everything tidy. i guess it is okay if not used but using it is a lot better. 


Another issue is , what _navig.md includes?? it includes the enumarations? or maybe enumarations of routes are saved in routeman.md and _nagiv is about metadata and status of routeman running? i think this is more consistant. _navig.md can can contain a path to the routeman.md  file easily 



check all these questions, and list them in better phrased way.
```

## Scope Check

**Question covers goal: YES** with one specific-vs-pattern note.

The user's framing is specific to routeman + the existing project conventions (`_state.md`; branch_inquiry protocol; inquiry-folder structure). The inquiry stays scoped to routeman; pattern-level claims about "all disciplines should have a `_X.md` persistence file" are out of scope (might be a research frontier).

**Specific-vs-pattern check:** the meta-task (rephrase the questions) is specific to THIS user input. The 6 topics are specific to routeman's design. The inquiry should NOT generalize the persistence model to other disciplines in this run.

## Layer Commitment

**Primary layer: PROCESS.** The proposals are dominantly about how routeman OPERATES at runtime (invocation modes; persistence-as-process; recalibration steps; branch-protocol adoption). The file-content split (Topic 6) is the one structural-leaning topic, but it serves the process model (persistence-as-process needs a file shape; the shape is downstream of the process commitment). Routeman's identity at meaning layer is settled by the existing chain; this inquiry doesn't re-litigate it.

**Other-layer alternatives considered and explicitly out of scope for THIS run:**

- **Meaning** — would mean re-defining what routeman IS. Out of scope: the user's proposals extend routeman's operation, not its identity. The cycle-consumer relation + Navigational paradigm + prescriptive-extension residuals + 3-layer identity all stand.
- **Structural (as primary)** — would mean reorganizing the SKILL.md sections or the route-card schema. The file-content split (Topic 6) touches structural concerns but its primary frame is "persistence-as-process needs a file shape." If the user later wants a separate structural-layer inquiry on the file shape, that's a follow-up.

**Sequential multi-layer plan (declared, not executed in this run):**

1. THIS run — process-layer adjudication on the invocation-mode split + persistence model + recalibration semantics + branch-protocol adoption + content-split rationale. Produce the rephrased question list + per-question reasoning.
2. Follow-up (likely the structural-layer SKILL.md authoring inquiry) — specify the `_navig.md` file format if adopted, the `routeman.md` file format, the path conventions, and the branch_inquiry protocol integration.
3. Follow-up (if needed) — process-layer specification of the recalibration STEPS (the runtime procedure for "read prior _navig.md files → recalibrate → decompose → create new").

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as inputs and inherits commitments from them. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the routeman design memo (with subsequent additions notice). Commits to: 3-layer identity; 10 features; 17-attribute schema (post-adoptions); 9-mode failure framework; 26 lineage decisions; 3 endgame functions. The persistence model proposed here may extend the design memo's commitments (specifically Feature F-seed + the corpus_limit_seeds input contract).

- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — the cycle-consumer process-layer correction. Commits to: isolated-routeman + file-scanning + parallel-workers + singleton-navigator architecture. The persistence model proposed here lives within this architecture; `_navig.md` files are read via the same file-scanning mechanism that scans inquiry artifacts.

- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — the frontier-questions finding (9 surviving questions post-correction). Several questions interact with the proposals here: Q4 (LAYER-2 audit) for the recalibration's audit substrate; Q5 (file-system protocol) for the `_navig.md` filename + folder topology; Q6 (file-shape constraints) for the `_navig.md` + `routeman.md` schemas.

- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — the staged-mapping + meta-reasoning field adoptions. Commits to: hybrid two-stage staging; per-Route meta-reasoning field; 4-axis content distinction; LLM-operational-design principle. The directional mode (Topic 1.2 in this inquiry) interacts directly with the staged mapping; recalibration semantics may use the meta-reasoning field as the substrate for "recalibrate importance/goal."

- `cognitive_harness/protocols/branch_inquiry.md` — the existing branch-inquiry protocol the user proposes adopting for routeman invocations. Commits to: child-inquiry creation with parent reference; `_branches.md` index; the runner-agnostic creation pattern.

- `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` — the input-dependency anchor (routeman depends on cycle output). The persistence model proposed here doesn't change this dependency; it adds a mechanism for cross-invocation continuity ON TOP OF the per-invocation cycle-consumer relation.

**Each commitment will be re-tested in CONCLUDE's `## Inherited Commitments Re-test` section.** Sensemaking and Critique do the actual re-test work; CONCLUDE enforces the section. The surgical-correction principle (per finding 2026-05-23_11-30's abstraction-level-conflation meta-pattern) means: each prior is re-tested per-commitment; commitments that survive at their level are preserved; commitments affected by the persistence model's adoption (if recommended) are explicitly flagged.
