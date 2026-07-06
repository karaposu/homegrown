# Branch: Come-Back-When — A Routelister Subfield, or a Wrong Assumption?

## Source Input

```text
File (end of the loop, small step). When a traverse finishes, it has already written its parked directions — the finding's "deferred" items and the route-list's set-aside routes, each with a come-back-when note. This step just saves them into one shared list, tagged by direction so they can be found later. Its only real work beyond copying is turning each come-back-when note into a searchable tag. It makes no decision about where the project should go next.

u said this, but wouldnt be easier for us if this is added to the routelister spec so each route has comeback-when subfield? 

but also the assumption of comeback when being obvious is wrong. we dont always know this, actually for most of the time. And for the times we know, we already have subfield regarding this called blocked by in routelister no ?
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-04_19-10__comeback_when_assumption_and_routelister_blocked_by/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** Item 1 (the come-back-when assumption + the routelister subfield question)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none. Downstream: Layer Commitment = STRUCTURAL primary (routelister route-schema), sequenced to PROCESS (matching); Synthesis Trigger = 18-12 (corrected) + routelister spec + 17-45. Watch-note: correcting my own prior finding — engage honestly, but VERIFY the `blocked by` fact; don't over-correct (conditional/blocked-by case still exists alongside the unconditional majority).

## Question

**(Item 1 — literal statement)** "the finding's File-step assumed each parked direction has a come-back-when note that just needs turning into a searchable tag — but wouldn't it be easier to add come-back-when as a routelister route subfield; AND that assumption is wrong because come-back-when is usually NOT knowable; AND when it IS knowable, isn't that already routelister's `blocked by` subfield?"

**What kind of ask (MQ1 verdict-axis) — held open:**
- `[ADD-a-subfield vs CORRECT-the-PREMISE (come-back-when usually unknowable → matching mechanism wrong) vs USE-EXISTING-FIELD (knowable cases = `blocked by`) vs REDESIGN-MATCHING — likely ALL, as one correction]`
- `[SCOPE: a small File-step fix vs a correction to 18-12's whole matching mechanism vs a routelister SPEC change]`
- `[the FACTUAL claim to VERIFY: does routelister already have `blocked by`? what route subfields exist? (user uncertain — "no?")]`

**What action-endpoint (MQ3 intent-axis, WHAT) — held open:**
- `[CORRECT the 18-12 finding vs DECIDE the routelister-schema question vs REVISE the matching mechanism vs ALL THREE]`
- `[endpoint: an amended finding / a routelister-spec change (or a decision NOT to) / a revised matching design / a short correction note]`

## Goal

**Deliverable shape (Deconstruct tuple):** `(deliverable: a grounded correction to the 18-12 finding's come-back-when mechanism — resolving (i) the routelister-subfield question, (ii) the is-come-back-when-usually-knowable premise, (iii) the does-`blocked by`-already-cover-it fact, (iv) the resulting revised matching design; kinds: a premise-verdict + a schema-decision + a matching-mechanism revision + the delta-vs-18-12; bounds: the come-back-when assumption + the File-step + the routelister route-schema; NOT the whole 18-12 finding, NOT the spec-slot, NOT assuming blocked-by exists)`.

**Why — motivations a good answer might serve (WHY-axis, held open):**
- `[SIMPLIFY (structure-at-source subfield is leaner than post-hoc prose→tag extraction) vs CORRECTNESS (the come-back-when-is-knowable premise is false) vs AVOID-REDUNDANCY (don't duplicate the existing `blocked by`) vs GET-THE-MECHANISM-RIGHT (most directions have no condition → matching must change) vs KEEP-THE-DESIGN-HONEST (don't ship a mechanism built on a wrong assumption)]`

**Context downstream consumers need (MQ2 context-need axis, held open):**
- `verdict:` the **18-12 finding** (being corrected — its File-step "turn each come-back-when note into a searchable tag"; its matching "look up the parked directions whose come-back-when note now fits"; the one-shot/standing split); the **ACTUAL routelister spec / route-record schema** (does `blocked by` exist? what subfields? — the crux, READ not assumed); the 17-45 prior pass (similarity-matching, which 18-12 demoted); how findings' DEFERRED next-actions + routelister routes express revisit-conditions today
- `kinds:` KNOWABLE revisit-condition (a dependency/block) vs UNKNOWABLE (a promising direction, no trigger); how routelister records gates/@-conditions/blocked-by; "tagged by direction" vs "matched by condition"
- `stance:` a CORRECTION inquiry — engage the objection honestly (likely right), VERIFY the `blocked by` fact, revise; non-sycophantic both ways (don't defend the finding; but don't over-correct either)

**Boundary — what would explicitly fail (MQ4, held open):** NOT re-opening all of 18-12 (the parked-direction object, the file/look-up/revive shape, the append-only substrate stand); NOT assuming `blocked by` exists (verify); NOT the spec-slot DEFINITION; NOT inventing a knowable condition where none exists.

## Considered Articulations

**Item 1 — the come-back-when assumption + the routelister subfield:**
1. "Add a `comeback-when` subfield to the routelister route schema (structure at source; the File-step stops extracting tags from prose)."
2. "Correct the premise: come-back-when is usually NOT knowable — matching cannot be primarily condition-firing; most parked directions matched by relevance/topic."
3. "Establish that the knowable cases are already routelister's `blocked by` subfield (verify) — so no new comeback-when field is needed."
4. "Redesign matching around TWO kinds: CONDITIONAL (knowable revisit-condition / blocked-by → match by condition-now-satisfied) vs UNCONDITIONAL (no condition, the majority → match by direction/topic relevance)."
5. "Do all of the above as one grounded correction to the 18-12 finding, with an explicit delta (18-12 over-assumed conditions are knowable; it demoted relevance-matching too far — relevance is primary for the unconditional majority)."

## Scope Check

**Question covers goal: YES.** The Question (the come-back-when assumption + the subfield) spans the Goal (a grounded correction resolving the schema question + the premise + the blocked-by fact + the revised matching). IN-scope: the come-back-when assumption, the File-step, the routelister route-schema, the matching mechanism. OUT-of-scope: the rest of 18-12 (object, file/look-up/revive shape, append-only substrate); the spec-slot; assuming blocked-by.

**Specific-vs-pattern check:** the inquiry targets the specific come-back-when mechanism in 18-12, but the correction is a pattern (conditional vs unconditional parked directions; where structured revisit-info should live). Both the specific fix (amend 18-12) and the pattern (the two-kinds matching design) are in scope. The routelister-schema fact must be verified against the real spec, not the user's tentative memory.

## Layer Commitment

**Required** — targets the routelister route-schema (a protocol/framework artifact) for a possible field addition, and corrects a prior finding's mechanism. MQ1 ambiguities include `[ADD-a-subfield]` and `[REDESIGN-MATCHING]`.

**Primary layer: STRUCTURAL** — the routelister route-record SCHEMA: does a route need a `comeback-when` subfield, or does an existing `blocked by` subfield suffice, or neither? This is the concrete decidable artifact-question the user leads with ("wouldn't it be easier if each route has a comeback-when subfield").

**Other layers considered, sequenced:**
- **Process** — the matching MECHANISM revision (how matching works when most directions have no condition: conditional/blocked-by vs unconditional/relevance). This is the closely-following secondary — it falls out of the Structural decision + the premise-correction, and must be resolved in the same finding.
- **Meaning** — what a "parked direction" IS (does it inherently carry a knowable condition?). Touched only insofar as the premise-correction (conditions are usually unknowable) sharpens the object; not the primary adjudication.

**Sequential plan:** establish the PREMISE first (is come-back-when usually knowable? — verify via the real forks + the routelister schema), THEN decide the STRUCTURAL schema (comeback-when field / blocked-by / neither), THEN the PROCESS matching-mechanism (conditional vs unconditional) falls out. All in this one finding (they are tightly coupled), correcting 18-12.

## Synthesis Trigger

**Required** — consumes prior inquiry outputs (the finding being corrected + the prior pass) and a spec.

Priors being synthesized, each with the commitment this inquiry inherits (and re-tests):
- `devdocs/inquiries/2026-07-04_18-12__fork_recall_between_loops_innovation_heavy_pass/finding.md` (**being CORRECTED**) — commits: parked directions each have a come-back-when note; the File-step turns each note into a searchable tag; matching = "look up the parked directions whose come-back-when note now fits"; one-shot vs standing (condition-carrying). **This inquiry re-tests the load-bearing assumption that come-back-when is knowable — the user's objection is that it usually is NOT.**
- **The routelister spec / route-record schema** (`~/.claude/skills/routelister/references/routelister.md` + real `routelister.md`/`_route.md` outputs) — commits: the route-record fields (grain × kind × engagement, Movement, WHY, Priority/Confidence, guidance, @-gates). **This inquiry re-tests: does a `blocked by` (or equivalent revisit-condition) subfield already exist? — the user's claim, to VERIFY.**
- `devdocs/inquiries/2026-07-04_17-45__between_loops_fork_recall_surfacing_placement/finding.md` — commits: the two-halves shape; similarity-based CONNECT (demoted by 18-12). **Re-tested: does the come-back-when correction partially rehabilitate similarity/relevance matching as primary for the unconditional majority?**

**Re-testing plan:** Surfacing MUST read the real routelister schema and a sample of real parked directions to verify (a) whether `blocked by` exists, (b) what fraction of parked directions carry a knowable condition vs none. Sensemaking + Critique adjudicate: is the premise-correction right (conditions usually unknowable)? does blocked-by suffice for the knowable minority? what is the honest matching design for the unconditional majority? and the explicit delta-vs-18-12.
