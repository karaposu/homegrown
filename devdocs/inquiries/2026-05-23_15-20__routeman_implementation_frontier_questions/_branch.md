# Branch: routeman_implementation_frontier_questions

## Question

**Subject** — `routeman`, the forward-Boundary cognitive discipline just designed at MEANING layer in `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`. The inquiry is one step before implementation (the structural-layer follow-up that would author `cognitive_harness/routeman/SKILL.md`).

**Action** — enumerate / surface (generate a curated list of hard, frontier-level open questions). Distinct from "design" (the prior inquiry did that) and from "implement" (the next inquiry would do that). The cognitive operation is question-discovery, not answer-production.

**Level** — primarily discipline-level (questions about routeman as a discipline), with cross-cutting reach into runner-level (how /MVL and /MVLw integrate routeman), process-level (the runtime sequencing), and endgame-level (multi-head + L0-L4 + Baldwin-cycle interactions). The questions span layers because frontier questions for a Boundary discipline necessarily reach into the loop structures it interacts with.

**Observation targets** — preserve as separate items because the user's framing names several constraints:
1. **Exactly 10 questions** — finite count, not "around 10" or "a few." The cap is structurally meaningful (forces prioritization).
2. **"Hard" qualifier** — each question must be non-trivial. Trivial questions (already answered in the design memo, or answerable in a sentence) do not qualify.
3. **"Frontier" qualifier** — each question must be at the edge of current understanding, not within already-mapped territory. Frontiers are characterized by: no known structural answer in the corpus; the answer would require new investigation; or the answer depends on observations we haven't made yet.
4. **"Should be resolved before moving into implementation"** — gating criterion. Each question must be one whose answer materially affects implementation choices, not just nice-to-know context. Questions that don't gate implementation belong to a different deliverable.

**Deliverable shape** — a list of 10 questions, each with: (a) the question itself stated precisely; (b) why it's a frontier (what makes it hard); (c) what implementation choice it gates; (d) candidate resolution path (an inquiry-shape, a calibration period, an empirical test, etc.) — even if the path is just "open research."

**Stated question:** What are the 10 hardest frontier-level open questions about `routeman` (the cycle-consumer forward-Boundary discipline designed at MEANING layer in finding 2026-05-23_14-39) whose resolution is required — or whose conscious deferral with acknowledged risk is required — before the structural-layer follow-up authors `cognitive_harness/routeman/SKILL.md`?

## Goal

- **Criterion** — a good answer commits to (a) exactly 10 questions (not 8, not 12); (b) each question is non-trivially open (not already settled in the routeman design memo, the canonical /navigation spec, or the prior findings the routeman design consumed); (c) each question is genuinely gating for implementation (a structural-layer or runtime-layer choice depends on the answer); (d) each question has a candidate resolution path stated, even if the path is "open research"; (e) the 10 questions span axes (identity / endgame / lineage / features / attributes / failure / runtime integration / etc.) rather than clustering in one zone.
- **Use case** — the user will use the 10 questions as a triage list before authoring `cognitive_harness/routeman/SKILL.md`. For each question, the user decides: resolve now (run another inquiry), defer with documented risk (accept the consequence), or treat as research frontier (no resolution needed for shipping but worth tracking). The 10-question list IS the triage triage input.
- **Desired outcome** — the user reaches the SKILL.md authoring step with a clear-eyed view of what's settled vs what's open; no implementation choice is silently made when an explicit decision was needed.
- **What would fail** — (i) 10 trivial questions (each could be answered in a sentence from the routeman finding); (ii) 10 questions that don't gate implementation (interesting but optional); (iii) 10 questions clustered in one zone (e.g., all about features, ignoring runtime integration or endgame); (iv) over-claimed certainty in the answer (claiming all 10 are equally hard when they aren't) or under-claimed (refusing to commit to 10 because "everything is uncertain"); (v) failure to flag self-overlap with already-deferred items from the design memo (the 4 deferred lineage items + the research frontiers are NOT automatically frontier questions — some are already on the path with revival triggers; the inquiry should distinguish "deferred-with-path" from "frontier-without-path").

## Source Input

```text
lets dive deeper of routeman by creating 10 questions that should be resolved before moving into implementation . hard questions, like frontiers
```

## Scope Check

**Question covers goal: YES** with one explicit constraint to honor.

The "exactly 10" constraint is structurally significant — it forces prioritization. If 15 plausible frontier questions exist, the inquiry must rank and select; the bottom 5 either consolidate with others or get moved to a "watch list" outside the 10. If only 7 truly hard frontier questions exist, the inquiry should not pad — but the user explicitly asked for 10, so the disciplines should genuinely search for 10 (under the asymmetric-failure principle that missing a hard question is worse than including a marginal one).

**Specific-vs-pattern check:** the question is specific to routeman, not a general pattern about discipline design. The 10 questions are tied to routeman's particular shape (forward-Boundary, cycle-consumer, prescriptive-extension layer, etc.); they are not asking about generic discipline frontier-questions.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as inputs and inherits commitments from them. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the routeman design memo at MEANING layer. Commits to: routeman's identity sentence; 3 endgame functions (EF-1 + EF-2 + EF-3 with EF-3 as candidate-load-bearing); 10 features; 16 attributes (12+4); 26 lineage decisions (14 inherit / 5 drop / 3 refine / 4 defer); 9-mode failure framework (6 LAYER-1 + 3 LAYER-2). All deferred items + research frontiers from this finding are the starting point for "what's already known to be open."
- `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md` — the verification finding's 4-residual + 5-reduction + 3-mis-attribution analysis. Commits to the structural distinctions routeman inherits.
- `devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` — the mapping framework + strengthened diagnostic + lesson-introduces-its-own-trap meta-pattern. Commits to per-sub-claim diagnostic methodology routeman's design used.
- `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` — sibling-under-mapping + input-dependency + abstraction-level-conflation meta-pattern. Commits to the cycle-consumer process-level framing.
- `cognitive_harness/navigation/references/navigation.md` — canonical /navigation spec. Commits to the 16-type taxonomy, 12-field route-card, 6 failure modes, R→N pairing, 3 invocation contexts, telemetry skeleton.
- `docs/desc.md` — endgame / autonomous-consciousness document. Commits to autonomy ladder (L0-L4), multi-head architecture, Baldwin cycle, 6 observable indicators including spontaneous-attention.
- `docs/discipline_taxonomy.md` — the 4-category taxonomy + primitive-profile summary + Boundary-discipline-notes (including the corpus_limit_seeds extension).

**Each commitment will be re-tested in CONCLUDE's `## Inherited Commitments Re-test` section.** Sensemaking and Critique are responsible for the actual re-test work; CONCLUDE only enforces the section exists and references the re-test. Inheritance without re-test must be explicitly flagged with a reason. Specifically, the inquiry's 10 questions must be **net-new** open territory, not re-statements of the design memo's already-flagged deferrals and research frontiers (those serve as "what's already known to be open"; the inquiry must look beyond them to find hard frontier questions the design memo missed).
