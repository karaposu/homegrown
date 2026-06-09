# Branch: MQs as Seed-Q+A for Surfacing — Overreach + Two-Pass Architecture

## Question

- **Subject:** The user's reframing of MQs (meta-questions) as **seed-Q+A pairs** consumed by /surfacing (rather than just as task-perception outputs internal to articulate). The implication that generating the A side at articulate_simple's cold-context substrate is structurally **overreach** (articulate is guessing the answer without the project context it would need to be confident). The user's proposed resolution: **articulate2 + staged-surfacing** — a multi-pass architecture where initial /surfacing brings context, articulate2 uses it to produce confident Q+A pairs, and a subsequent /surfacing operates on the now-confident substrate.

- **Action:** examine + decide. (a) Test whether the seed-Q+A reframing is structurally true for all MQs or only some (does it reveal a Substrate-MQ vs Intra-articulate-MQ distinction?). (b) Test the overreach concern: when does articulate_simple confidently perceive vs guess? Does the just-completed MQ4 Boundary cold-context-empty-valid rule cope with overreach or just defer it? (c) Evaluate the articulate2 + staged-surfacing proposal: is it now ripe to commit, or does Bootstrap-lock-simplest argue for keeping articulate_simple as the foundation and deferring articulate2? (d) Decide the relationship between the just-committed MQ4 Boundary finding and the architectural reframing: stands / refines / is stopgap.

- **Level:** discipline + cross-discipline (articulate ↔ /surfacing); architectural (single-pass vs multi-pass).

- **Observation targets:**
  1. **The seed-Q+A reframing** — is it structurally true that MQs are seed-Q+A pairs for /surfacing? Or only some MQs?
  2. **Substrate-MQ vs Intra-articulate-MQ distinction** — MQ2 (preparation-substrate-for-/surfacing per 21-58) and MQ4 (exclusions-for-/surfacing per the just-completed finding) feed /surfacing directly. MQ1 (scope-axis) and MQ3 (intent) feed intra-articulate operations (Rephrase, MultiDepth). Does this distinction exist? If so, the reframing is partial-truth.
  3. **The overreach concern** — at articulate_simple's cold context, generating the A side for Substrate-MQs requires guessing. The user's example: "from scratch, lets design feature x" → MQ generating "should we use existing designs? A: no" — but A=no is INFERRED without confirmation; LLM might guess wrong.
  4. **Intrinsic-vs-extrinsic revisited** — the example "from scratch" IS intrinsic to the task statement; the MQ3+MQA Example C pattern handles this case (per the just-completed inquiry). So the user's example is structurally a MQ3+MQA case, not MQ4. But the user's broader point (overreach for MQs generally) survives.
  5. **MQ4 finding's cold-context-empty-valid rule** — does it solve overreach (by emitting empty when uncertain) OR only defer it (LLMs might still guess when they shouldn't)?
  6. **The two-pass design** — explicitly referenced in `devdocs/how_articulate_simple_should_be.md` §9 as deferred: *"The two-pass design — where articulate runs, then /surfacing fires, then articulate runs again on a refined preparation substrate — is a separate construction."* Source: `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md`. The user is now motivating it from a new direction (overreach).
  7. **articulate2 essence** — what does articulate2 IS in this proposal? Same operations as articulate_simple but with broader substrate (warm context + first-/surfacing output)? Or a fundamentally different operation?
  8. **Staged-surfacing logic** — what cycle does the user propose? (initial-surfacing → articulate1? → articulate2 → second-surfacing → final-output?). Where does articulate_simple fit?
  9. **Bootstrap-lock-simplest at architecture level** — does it argue for KEEPING articulate_simple as foundation (Bootstrap floor) and DEFERRING articulate2 (Mature-Operation upgrade), OR does the overreach concern justify committing now?
  10. **Implications for the just-committed MQ4 Boundary finding** — does this inquiry's outcome refine, supersede, or coexist with the MQ4 commitment?
  11. **Implications for the doc** — §9 deferral text may need updating; the MUSTs from the MQ4 finding (M1-M5) may stand, refine, or defer depending on outcome.

- **Deliverable shape:** meaning-layer position (a) on the seed-Q+A reframing, (b) on the overreach concern's actual scope, (c) on whether articulate2 + staged-surfacing is now ripe; with explicit relationship to the just-committed MQ4 finding.

**Question statement:** Is the user's reframing of MQs as seed-Q+A pairs for /surfacing structurally true (and to what extent)? Is the overreach concern real (and is the MQ4 finding's cold-context-empty-valid rule sufficient or only a stopgap)? Is the deferred two-pass design (articulate2 + staged-surfacing) now ripe to commit at the meaning-layer, or does Bootstrap-lock-simplest argue for keeping articulate_simple as the foundation and continuing to defer articulate2?

## Goal

- **Criterion:** Defensible meaning-layer position grounded in: (a) the current operation-set's MQ semantics (which MQs feed /surfacing; which feed intra-articulate); (b) the cold-context overreach concern at the substrate boundary; (c) the explicit §9 deferral of the two-pass design with its prior finding at 2026-06-05_00-11; (d) the just-committed MQ4 Boundary finding's coping strategy; (e) Bootstrap-lock-simplest as governing principle for architectural commitment timing.
- **Use case:** Inform whether to (i) proceed with the MUSTs from the MQ4 finding (M1-M5 doc updates) as-is, (ii) refine them to acknowledge the seed-Q+A reframing without committing to two-pass yet, OR (iii) defer them and pivot to articulate2 design as the next inquiry.
- **Desired outcome:** Clear understanding of whether MQ4 commitment stands, whether the reframing is acknowledgment-worthy without committing to two-pass, and whether/when articulate2 becomes the next inquiry.
- **What would fail:** Technical answer that doesn't engage with the user's structural reframing; missing the Substrate-MQ vs Intra-articulate-MQ distinction the reframing reveals; assuming articulate_simple must change without considering Bootstrap; committing to two-pass without re-examining whether single-pass with cold-context-empty-valid is sufficient; drifting into structural or process layer rather than staying at meaning.

## Source Input

```text
i am starting to think that MQs  are seed questions that srufacing should find an answer tooo


for example 

if query is "from scracth, lets desing feature x"  we will generate a MQ4 as:

" should we use already existing designs if mentioned  feature exists ?  the answer is no" 


you see this question answer pair will be fed to srufacing and surfacing suddenly explicitly know that it shouldnt surface already existing designs if found... 


this is same feture we talked about or sth new for articulate_simple? 


also generating 

 should we use already existing designs if mentioned  feature exists ?  the answer is no

is a overreach? because without context we have to guess this is the case... 

so i think this is not a good way. 


I think eventually we will have to create articulate2 together with staged-surfacing logic. a initial surfacing will be followed by articulate's second staege and it will be followed by another surfacing stage... 


what do you think?
```

## Scope Check

Question covers goal. Specific-vs-pattern check: the user's example ("from scratch, lets design feature x" → MQ-generates-Q+A overreach) is ONE concrete instance. The inquiry addresses the BROADER PATTERN — the seed-Q+A reframing + the overreach concern + the architectural implication — across all MQ types and all task patterns. The example illustrates; the pattern is broader.

## Layer Commitment

**Primary layer: MEANING.** The user explicitly examines what MQs ARE as cognitive operations (perception vs seed-Q+A) AND whether articulate's substrate is sufficient for its current essence OR whether the essence needs to evolve to articulate2 with multi-pass substrate. Both are meaning-layer questions. The user's closing "what do you think?" asks for a position at the level of WHAT THE OPERATIONS ARE.

**Out of scope:**
- **Structural** (exact field shapes for Q+A pairs in the bundle; how articulate2 is sectioned; how staged-surfacing's hand-off artifacts look — all artifact-shape concerns; downstream of meaning-layer decision)
- **Process** (when initial vs second /surfacing fires; how articulate2's substrate is loaded; runner-level orchestration of multi-pass — all runtime/procedure concerns)

## Synthesis Trigger

This inquiry consumes commitments from MULTIPLE priors. The reframing examines: (a) what MQ2's seed-Q+A role committed in 2026-06-04_21-58 actually IS, (b) whether MQ4's cold-context-empty-valid rule from the just-completed 2026-06-06_10-37 finding holds under the reframing, (c) whether the deferred two-pass design from 2026-06-05_00-11 is now ripe, (d) whether the 3-type → 4-type taxonomy expansion from 2026-06-06_10-37 stands.

Priors being synthesized:

- `devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/finding.md` — commits to MQ4 Boundary as 4th base MQ; 4-type taxonomy; cold-context-empty-valid rule; intrinsic-vs-extrinsic split with MQ3+MQA; 5 downstream consumers
- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — commits to MQ2 as preparation-substrate for /surfacing; always-invoke premise; runner reads MQ2 to formulate /surfacing input
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — commits to MQ2's three-element substance + hypothetical-relational expression mode
- `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md` — commits to 3-type MQ taxonomy (Structural / Relational / Interpretive); just expanded to 4-type by the MQ4 finding
- `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md` — commits to two-pass design as separate construction; deferred per §9
- `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — original meaning-layer foundation; 5 operations + bounded-extensibility rule + substrate-bounded principle

Each carries commitments this inquiry will inherit. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section per the protocol.
