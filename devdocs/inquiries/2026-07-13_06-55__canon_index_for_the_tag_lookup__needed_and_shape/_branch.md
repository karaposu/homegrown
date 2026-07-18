# Branch: a canon index for the tag lookup — needed, and what shape

## Source Input
[The user's raw request, preserved verbatim. Also lives in articulate_simple.md's `## User Input` section; both copies are authoritative for transcription audit.]

```text
u said 

The surviving form: canon-anchored tags written at CONCLUDE. Each finding's frontmatter gets canon_areas: — 1 to 3 picks from the ~38 canon docs (a controlled vocabulary the user ALREADY governs by canonizing) — plus up to 5 optional free child tags: (children never parents). The canon listing is the lookup; the grouping lens is the consumer. Hierarchy comes for free as ONE governed parent level — no maintained tree, which would re-enter exactly the "whole work" the user declined.

maybe this requires certain cleaning or data extraction or indexing of canon folder? otherwise each conclude to look up to canon will be too expensive
and canon is already clean so removing things is not possible. 

what do you thinkn?
```

[Standing context: the 23-26 tag finding committed the canon listing (filenames, one glance) as the lookup; docs/canon holds ~38 files incl. old_*/superseded variants + subdirs — a raw `ls` vocabulary includes superseded docs; bare names may be ambiguous pickers; the writer-scale governs who maintains any index; C2 shares the valid-subset question; removal from canon is excluded by the user.]

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-13_06-55__canon_index_for_the_tag_lookup__needed_and_shape/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** item-1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 (literal-statement):** "You said the tag design uses the canon listing as the lookup at CONCLUDE. Maybe this requires some cleaning or data extraction or indexing of the canon folder? Otherwise each CONCLUDE looking up canon will be too expensive. And canon is already clean, so removing things is not possible. What do you think?"

**What kinds of ask this carries (MQ1, preserved):** `assess-the-need` (is an index/extraction layer required?) · `correct-or-confirm-the-cost-model` (was the committed lookup expensive — heavier-reading vs listing-doubt, both open) · `design-the-index-if-needed` · `honor-the-no-removal-constraint`.

**Plausible action-endpoints (MQ3, preserved):** `confirm-and-correct` · `vocabulary-curation-design` (the valid subset + glosses) · `index-artifact-spec` (generated) · `no-index-alternative` (inline the list in the CONCLUDE paragraph).

## Goal

**Deconstruct tuple:** (deliverable: an assessment — the cost model corrected/confirmed (names-vs-contents) + the real need identified honestly (vocabulary curation: WHICH of the ~38 are valid tag values; glosses for accurate picking — the instinct credited where it bites) + the minimal index design if needed (mechanically generated; removal-free status marks; maintenance per the writer-scale) + the C2 shared-subset extension + gated implications; kinds: cost-correction · curation assessment · index spec · maintenance policy · implications; bounds: removal-free; assessment-first; no canon reorganization; gates).

**WHY-axis motivations (preserved):** `keep-conclude-cheap` · `protect-tag-accuracy` (the deeper motive: picks from a wrong/ambiguous vocabulary make wrong tags) · `avoid-hidden-maintenance` · `reuse-across-consumers` (tags + C2 + future).

**Context the answer needs (MQ2, preserved):**
- *verdict:* the 23-26 lookup's actual spec (names-not-contents); ★the exact canon census (current vs superseded/old variants vs subdir files — probeable); whether bare filenames suffice for honest picks (the gloss question); ★whether glosses are mechanically extractable (titles/first headings — probeable); WHO maintains an index (writer-scale); the C2 shared-subset fact.
- *kinds:* corrected cost model · curation assessment · minimal index spec · maintenance policy · gated implications.
- *stance:* assessment-first; removal-free (status marks, never deletion); the index DESCRIBES canon, never judges it; implications gated.

**What would explicitly fail (MQ4, preserved):** removal from canon (the user's explicit constraint); hand-maintained habit files (the dying writer tier); ungated spec/build changes; canon-cleanup work smuggled in.

## Considered Articulations

**Item item-1 — the canon-index question:**
1. "Correct the cost model first: the committed lookup is a filename LISTING (one glance), not content reads — then assess what the instinct still rightly demands: the raw listing includes superseded `old_*` docs as tag values, and bare names are ambiguous pickers."
2. "Design the minimal vocabulary artifact: a mechanically GENERATED canon index — name + one-line gloss (each doc's own title/first heading) + status (current / superseded / subdir-class) — removal-free; canon itself untouched."
3. "Adjudicate maintenance by the writer-scale: generated-on-demand (a small script, like the atlas adapter) vs a canonization-time protocol line vs a hand-file — who writes it so it doesn't die."
4. "Evaluate the no-index alternative: inline the valid list into the CONCLUDE paragraph — and why a static in-spec list drifts as canon grows (the vocabulary must track the folder, not a snapshot of it)."
5. "Extend the answer to C2: citation-inference can hit `old_*` docs too — one curated subset, two consumers (the tag picker and the inference lens)."

## Scope Check

Question covers goal. The bounds (removal-free; assessment-first; no reorganization) contain the Goal; MQ4's exclusions carried above.

**Specific-vs-pattern check:** the question targets the specific artifact (docs/canon as the tag vocabulary) — address it specifically; the reusable pattern (vocabulary artifacts for controlled lists) may be noted but is not the deliverable.

## Synthesis Trigger

This inquiry consumes prior outputs as inputs:
- `devdocs/inquiries/2026-07-12_23-26__hierarchical_concept_tags_in_traverse__worth_and_shape/finding.md` — commits the canon-anchored tag design (the listing-as-lookup, the CONCLUDE step, the nursery, the overlay lens) this follow-up stress-tests at its lookup joint.
- `devdocs/inquiries/2026-07-12_21-48__atlas_content_generation_for_the_five_operations/finding.md` — commits C2 (canon-area citation-inference), which shares the valid-subset question.
- The writer-scale standing finding (memory-mirrored) — commits the maintenance-tier ordering any index design must obey.

CONCLUDE will require an `## Inherited Commitments Re-test`; the load-bearing re-tests: does the 23-26 "one glance" lookup claim survive the canon census (or does the raw listing mis-vocabulary via old_* docs)? does C2 need the same subset? does the writer-scale pick the index's writer?
