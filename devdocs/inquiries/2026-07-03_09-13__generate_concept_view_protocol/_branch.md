# Branch: Generate-Concept-View Protocol

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
u said

"What you gain. The missing cross-inquiry layer: ten lines that tell a returning reader where the project has been. Faster session warm-up (read the summary lines before anything else). And a counting surface: the Allocation Rule's 'consult every ~5 inquiries' trigger never fired because nothing counted inquiries — a file that gains one line per inquiry IS the count."

but i think we already have finding summary sections which can be used for exact this purpose, we just need an custom instruction so that AI will read inquiry folders with regex to read only Finding Summary section.

u said

"What F4 says. Keep one thread per THING (per route, per concept), and extend that thread every time the thing is touched. The usual way to do this is a registry: a database, a wiki, one page per entity."

but codebase is complex, recoming to a topic usually requires multiple updates to the base of that inquiry, which is not feasible at all bc many many things can be changed, history should stay as history. keeping track of each thing individually is hugee burden, since our atomic operation is traverse loop this can be done by reading relevant inquiry folders and generating a view yes but this view would also be a traverse loop output, maybe we should create this. a generate concept view protocol that can be used for this purpose. I think this is really good idea.
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/articulate_simple.md`
- **Itemize count:** 2
- **Per-item identifiers:** `I1` — the Finding-Summary digest instruction (amends F6); `I2` — the Generate-Concept-View protocol (amends F4)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**Item I1 — the Finding-Summary digest instruction.** *(Literal:)* "We already have Finding Summary sections which can serve exactly the cross-inquiry read-surface purpose; we just need a custom instruction so the AI reads inquiry folders with a regex extracting only the Finding Summary sections."
- **MQ1 asks:** amend-F6 (the epoch-line WRITE is unnecessary — the per-inquiry distilled layer exists; only the READ instruction is missing); specify-the-instruction (text + extraction pattern); home-the-instruction (warming clause / standalone recipe / standing instruction).
- **MQ3 endpoints:** the instruction text; its home; the F6 amendment stated; the count question re-answered (a folder count needs no file at all).

**Item I2 — the Generate-Concept-View protocol.** *(Literal:)* "Per-thing registries aren't feasible — many things change, history should stay as history, tracking each thing is a huge burden. Since our atomic operation is the traverse loop, the per-concept view can be produced by reading the relevant inquiry folders and generating a view — itself a traverse-loop output. We should create this protocol. I think this is a really good idea."
- **MQ1 asks:** design-the-protocol (concept in → relevant folders read → view generated); settle-its-class (protocols/ file vs skill vs traverse-recipe — "the view would also be a traverse loop output" preserved as the depth ambiguity); amend-F4 (the store rejected definitively; views-on-demand confirmed; the protocol makes generation repeatable); relate-to-existing (the F4-views verdict extended; the registry deferral; the sweep-map precedent — a generated, dated, static analysis artifact).
- **MQ3 endpoints:** the protocol designed; possibly authored vs on-go; the F4 amendment; **possibly the memory-design selection FORMING** (views-over-writes converging across both items — preserved open).

## Goal

**I1 deliverable (Deconstruct):** the digest instruction — text + parameters (how many summaries, what order, bound) + home — with the F6 amendment stated. **Kinds:** read-recipe design. **Bounds:** no new writes; cheap (regex-grade, not synthesis); bounded reads.

**I2 deliverable (Deconstruct):** the Generate-Concept-View protocol's design — what a view IS (contents; lifecycle: dated, static, regenerable — never updated), inputs (concept + optional goal), relevant-folder discovery, generation depth (light-assemble vs traverse-output vs dialed — settled or explicitly dialed), the view-artifact's home, the protocol's own home (protocols/ vs skill) — plus the shared-mechanism relation to I1 and build staging. **Kinds:** protocol design (meaning-first; structural sketched). **Bounds:** no stores; no history edits; views regenerable; the four-assessments finding is the amended baseline.

**Motivations (WHY-axis — preserved open):** simplification (writes→reads); zero-maintenance memory; burden-elimination; history-preservation; leveraging the atomic operation; reusable capability; warm-up speed.

**Context needed (MQ2 — preserved open):**
- **verdict:** the four-assessments finding (F6 + F4 sections — the amended baselines); the finding template's uniform `## Finding Summary` (CONCLUDE-mandated; extraction mechanical); the corpus scale (~350+ findings — bounds needed); the **relevant-folder discovery question** (name-grep / `_route.md` identity-sets / the digest as index); the **view lifecycle** (dated + static + regenerate-never-update — the F8 constitution extending naturally); the house homes (protocols/ = runner-loaded procedures; skills = user-invocable with artifacts — the sweeper precedent); warming's relation (views as warming-material); the pre-registration boundary (a view derived from findings is NOT a traversal-memory trace; the design must not smuggle one).
- **kinds:** view contents (candidate: the concept's Finding-Summary excerpts + route-map rows + ✓ states + choice-lines-if-any, ordered first-seen → decisions → outcomes → open ends); the depth dial; the artifact's home (devdocs/views/?).
- **stance:** simplification-driven; history-sacred; build-encouraged ("really good idea"); the traverse loop as the atomic operation.

**Negative spec (MQ4):**
- I1: any new write-artifact for the digest; expensive synthesis where a regex read suffices.
- I2: a registry/store; updates to old inquiries; per-thing bookkeeping; views that get edited (regenerate instead); smuggled memory-traces before pre-registration; *(standing)* artifact-creation without go (the endorsement noted as strong encouragement, not yet the go for file-creation — to adjudicate).

## Considered Articulations

**Item I1 — the digest instruction:**
1. **Warming-clause reading:** one clause in the warming doctrine (read the last N Finding Summaries first).
2. **Standalone-recipe reading:** a small protocols/ recipe callable any time (catch-up on demand).
3. **Standing-instruction reading:** a project-level custom instruction (always-on for any session).

**Item I2 — the protocol:**
1. **Light-protocol reading:** a read-assemble recipe (minutes): discover → extract → order → emit.
2. **Traverse-output reading:** the view IS a full traverse run's finding on the concept's territory.
3. **Dialed reading:** one protocol, two depths (light assemble / full traverse) — mirroring the sweeper's dial.
4. **Skill reading:** a ninth skill (`concept-view`) with its own artifact contract.
5. **Selection-forming reading:** together, I1+I2 are the user's memory-design direction emerging — views-over-writes everywhere; name it honestly.

## Scope Check

Question covers goal for both items. No widening needed.

**Specific-vs-pattern check:** I1 is scoped to the specific mechanism the user named (Finding-Summary regex-reads). I2 is explicitly the PATTERN ("can be used for this purpose… in future too" implied by protocol-framing) — the concept-view generator as a reusable capability, with no single concept scoped.

## Layer Commitment

This inquiry creates a NEW protocol/skill artifact — the Layer Commitment is required.

**Primary layer: MEANING** — what a concept-view IS (a generated, dated, regenerable read-artifact over inquiry history), what the generator does (discover → extract → order → emit at a dialed depth), and what it must never be (a store; an editor of history). The user's ask ("how it should be" implicit in "we should create this") is meaning-first.

**Other layers considered, out of scope for THIS run:**
- **Structural** (the protocol file's exact sections / the view artifact's letter-level template) — sketched here only as far as meaning requires; full structure follows the sweeper chain's precedent (its own pass or the build session).
- **Process** (exact step wording) — the mechanism's beats are settled at meaning grain; step text belongs to the build.

**Sequential plan:** Meaning (this inquiry) → build on go (the artifact's class decided here determines whether that's a protocols/ file or a skill) → first invocation (a real concept — candidates: "traversal memory" itself, or "routelister" — chosen at build).

## Synthesis Trigger

This inquiry consumes prior outputs as direct inputs — the section is required.

- `devdocs/inquiries/2026-07-03_00-53__four_unconsidered_memory_paradigms_assessed/finding.md` — commits: the F6 assessment (epoch-lines riding CONCLUDE; the counting surface; memory-iff-read) and the F4 assessment (views-not-stores; the fresh-only ceiling; store-at-scale-trigger) — **both now AMENDED by the user's reactions**; the E1–E4 criteria; the seam asymmetry; the pre-registration boundary.
- `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md` — commits: the duplication anti-pattern (generalized); history-as-territory (outcomes live in artifacts) — the deep ground both user-reactions stand on.

CONCLUDE will require an `## Inherited Commitments Re-test` section. The re-tests to actually perform: does the digest instruction really replace ALL THREE of F6's claimed gains (read-surface, warm-up, count) or only some; does the view-generator preserve F4's zero-duplication property when the view becomes a SAVED artifact (a saved view COPIES content — does the anti-pattern bite, and is dated-snapshot-status the honest answer?); does anything here constitute a traversal-memory trace before pre-registration.
