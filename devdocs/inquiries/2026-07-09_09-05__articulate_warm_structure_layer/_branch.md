# Branch: articulate_warm — the structure layer of how it should be

## Source Input

```text
okay lets go back to articulate warm , reread docs/how_articulate_warm_should_be.md fully. 


lets dive deep structure layer of how it should be
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-09_09-05__articulate_warm_structure_layer/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** Item A (the structural design of articulate_warm — spec-artifact form · loop-control location · output-artifact shape · naming/directory)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item A — the structural design of articulate_warm.**
Literal: *"Go back to articulate_warm; re-read `docs/how_articulate_warm_should_be.md` fully; dive deep on the STRUCTURE layer of how it should be."*

The Meaning is settled (articulate_warm is a re-anchor→re-surface fetch-loop controller — 21-50 + 23-46 + 08-00) and the Process is largely specified (doc §8/§10). This dive adjudicates the **spec/artifact structure** that houses them. Kinds of ask (MQ1):
- `decide-the-spec-artifact-form` — its own spec/reference, a WARM-MODE section inside the articulate_simple spec, a thin mode-doc, or a protocol? (Doc §10/§12 leans "a re-invocation of the same machinery under a mode, not a separate discipline" — but never pins the artifact.)
- `locate-the-loop-control` — where does the re-anchor→re-surface→terminate control (fixpoint + round-cap + oscillation guard + material-change judgment, §8) structurally live — the runner (traverse), the warm mode, or a shared fetch_loop protocol? (23-46: runner-owned now, protocol-at-N=2; this is the one wired instance.)
- `specify-the-output-artifact` — what does the warm pass WRITE (own file / update-to-articulate_simple.md / delta), and how do re-surface rounds accumulate?
- `handle-naming/directory` — does the structural decision interact with the deferred cold/warm rename (built dir still `articulate_simple/`)?

Action-endpoints (MQ3): `produce-a-structural-design` vs `decide-the-artifact-form` vs `map-the-structural-options`.

## Goal

Deliverable (Deconstruct): a **structural design** — the recommended artifact form for articulate_warm + where the loop-control and output live + the N=2 extraction seam. Kinds: design + evaluation + recommendation. Bounds: the harness's spec/artifact structure, the canon doc, the built spec, the runner; NOT Meaning, NOT Process-redesign, NOT a build, NOT the rename.

- WHY (MultiDepth, held open): `buildability` (pin the structure so articulate_warm can be built/adopted — the doc is Meaning/Process-complete but structure-open) vs `consistency-with-the-fetch-loop-verdicts` (honor 23-46's runner-owned/protocol-at-N=2 + 08-00's axis) vs `legibility` (a clear artifact structure makes the two-pass family legible) vs `close-the-articulate2-thread` (the standing deferred "scoped articulate2 inquiry" — this may be it).
- Context needed (MQ2): the canon doc (the target design; structure is the gap); the built spec `cognitive_harness/articulate_simple/references/articulate_simple.md`; the traverse runner `cognitive_harness/traverse/SKILL.md`; the 23-46 fetch_loop finding; the protocols dir (conclude.md etc. — the loaded-and-run structural-unit exemplar); the 21-50 + 08-00 findings.
- Would fail (MQ4): re-opening the Meaning (settled — Structural only); re-deriving the Process/loop mechanics (settled §8/§10 — structure houses them); an implementation/build (a design, no spec files written); executing the rename (deferred — note interaction only); contradicting the 23-46 verdict (runner-owned loop / protocol-at-N=2) or the 08-00 axis.

## Considered Articulations

**Item A — the structural design of articulate_warm:**
1. **Structural-design (dominant).** Recommend the artifact structure — separate-spec vs warm-mode section; where the loop-control lives (runner now, protocol-seam at N=2); what the warm pass writes; how re-surface rounds accumulate — all consistent with 23-46/08-00.
2. **Artifact-form decision.** Narrower: settle spec-vs-mode-vs-protocol as the primary output, derive the rest.
3. **Loop-control-location reading.** Center on where the fetch-loop control structurally lives + the clean seam for the eventual fetch_loop protocol extraction (the 23-46 consumer).
4. **Options-map reading.** Enumerate the structural forms (separate-spec / warm-mode-section / thin-mode-doc / protocol) with trade-offs; let the pipeline choose.
5. **Output-artifact reading.** Center on the concrete file/bundle structure the warm pass produces and its relation to articulate_simple.md and _branch.md.

## Scope Check

Question covers goal. The structural facets (spec-form / loop-location / output / naming) compose into the one structural-design deliverable.

**Specific-vs-pattern check:** the question targets `articulate_warm` specifically. It is NOT a general "how should all disciplines be structured" dive — it is scoped to this one discipline's structure. BUT the loop-control facet (S2) is genuinely shared with the fetch_loop question (articulate_warm↔surfacing is the one wired instance), so the structural design must define the N=2 extraction seam — that one facet reaches the broader fetch_loop pattern, by necessity, not by scope-creep.

## Layer Commitment

The question targets a framework artifact's structure (explicit: "structure layer"), so the section is required.

- **PRIMARY — Structural.** What the articulate_warm spec/artifact should LOOK LIKE — its form (separate spec / warm-mode section / protocol), where the loop-control lives, what it writes, how re-surface rounds accumulate. This is the adjudicated layer.
- **Out of scope — Meaning.** What articulate_warm IS (a fetch-loop controller / convergence capability) is settled by the 21-50 + 23-46 + 08-00 findings; inherited, not re-opened.
- **Out of scope — Process.** The loop STEPS (re-anchor → re-surface → terminate; fixpoint + round-cap + oscillation guard + material-change judgment) are specified in the canon doc §8/§10; the structure HOUSES them, it does not redesign them.

Primary layer picked cleanly (Structural — the user named it); no layer ambiguity requiring user input.

## Synthesis Trigger

**Required** — the inquiry consumes and must stay consistent with several prior outputs:

- `docs/how_articulate_warm_should_be.md` — the target design (Meaning + Process complete; the STRUCTURE is the gap this dive fills). Commitments: the two-pass shape; re-anchor→re-surface→terminate; "a re-invocation under a mode, not a separate discipline" (§10); no-fetch substrate (§6).
- `devdocs/inquiries/2026-07-08_23-46__fetch_loop_as_reusable_discipline_extract_and_generalize/finding.md` — the reusable form (a protocol/skill packaging a convergence capability, not a traverse-like linear runner); the loop is RUNNER-OWNED now; extract at N=2; articulate_warm↔surfacing is the one wired instance. The structure must honor this.
- `devdocs/inquiries/2026-07-09_08-00__harness_stage_lens_and_fetch_loop_necessity_vs_substrate/finding.md` — the division-of-labor axis (the loop-control is the judgment-governed re-fetch, not data-gathering the substrate owns).
- `devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/finding.md` — the Meaning (surfacing-loop controller).

CONCLUDE must include an `## Inherited Commitments Re-test` naming each and confirming the structural design is consistent with (or explicitly refines) it. Plan Sensemaking + Critique to actually test the consistency, not just record it.

## Layer / Grade note for downstream

A **Structural design dive** with the Meaning + Process inherited. The spine (from MQA): the spec-artifact form (S1) determines where the loop-control lives (S2) and what gets written (S3); naming (S4) rides on top; the load-bearing sub-question is S1×S2 (separate-spec-or-mode × where-the-loop-lives), and 23-46 pre-constrains S2 toward runner-owned, which pushes S1 toward "a warm-mode, not a separate discipline spec." Guard: the structure must house the settled Meaning/Process without re-opening them, and must define the clean N=2 seam for the eventual fetch_loop protocol. This dive may be the standing deferred "scoped articulate2 inquiry."
