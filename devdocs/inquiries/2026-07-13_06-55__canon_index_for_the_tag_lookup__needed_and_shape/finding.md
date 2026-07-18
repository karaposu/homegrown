---
status: active
model: claude-fable-5
effort: unknown
corrects: devdocs/inquiries/2026-07-12_23-26__hierarchical_concept_tags_in_traverse__worth_and_shape/finding.md
---
# Finding: the canon lookup needs a filter and glosses, not an index — and your question caught a real defect

## Changes from Prior
**Prior path:** devdocs/inquiries/2026-07-12_23-26__hierarchical_concept_tags_in_traverse__worth_and_shape/finding.md
**Revision trigger:** the user's follow-up question ("maybe this requires cleaning or data extraction or indexing of canon? otherwise each conclude lookup will be too expensive").
**What's preserved:** the entire tag design (canon-anchored tags at CONCLUDE; children never parents; the nursery; the overlay lens; the carrier; all verdicts).
**What's changed (a formal correction, scoped):** the prior's §2 lookup line and Summary phrase said "1–3 picks from the **~38 canon docs**." That count was wrong as a vocabulary count: 38 includes 3 superseded `old_*` variants and 13 subdirectory files. The honest pickable set is **~22 current top-level docs + the `load_bearing_findings/` entries** (23 files today). The prior's raw "list `docs/canon/*.md`" lookup would have offered superseded docs as tag values. The user's follow-up caught this.
**What's new:** the vocabulary-glance wording (filtered, glossed, debugged live); the canon-vocabulary policy line (one blessing); the generated sidecar spec (consumer-bound); the recall-then-verify pattern.
**Migration:** none breaking — an amendment to a still-unshipped offer.

## Question

After the tag finding committed "the canon listing is the lookup," the user asked: *"maybe this requires certain cleaning or data extraction or indexing of canon folder? otherwise each conclude to look up to canon will be too expensive. and canon is already clean so removing things is not possible. what do you think?"* — three facets: is an index layer needed, was the lookup expensive, and whatever curation happens must not delete from canon.

## Finding Summary

- **The cost worry, taken at its word, dissolves** — the committed lookup was always a filename listing ("one glance… never research"), never content reads; ~25 short lines is trivial at any CONCLUDE.
- **But your instinct caught a real defect the prior finding missed.** A raw `ls docs/canon` is an INVALID vocabulary: it offers 3 superseded docs as pickable tag values (the two old north-stars even share a first heading with each other), bare names under-inform (`reasoning.md` names nothing) — and my "~38 docs" was the wrong count. The honest vocabulary: **~22 current top-level docs + the load-bearing-findings entries.** Corrected formally against the prior finding, credited to you.
- **What's needed is not an index to maintain — it's a filter + glosses, generated fresh each time.** A maintained index has no owner (no canonize protocol exists; hand-maintained files die here — the routelog's mortality) and would drift. The surviving shape is ONE COMMAND: list the pickable files with their own first headings as glosses, superseded-filtered. Live-tested at the gate — which caught **two real bugs** before they could ship: the drafted filter missed `old2_…` (fixed: `'/old[0-9]*_|_old\.'`, zero escapees), and a grep-based glance silently omitted the 2 heading-less docs (fixed: ls-based, "(no heading)" shown).
- **"Cleaning without removing" already exists as your own practice:** you mark superseded canon by RENAMING (`old_*` — 3 live instances). Formalized as the standing status rule, it does all the curation — nothing is deleted, canon is untouched. (If you'd ever rather mark than rename: a `status: superseded` frontmatter line works too; the filter checks both marks always.) One caution now that the convention is load-bearing: a future superseded doc left unrenamed silently re-enters the vocabulary.
- **Your single act: bless one policy line** (drafted verbatim in §2) — what counts as pickable. Then everything downstream is mechanical, forever.
- **The lookup's shape improved along the way: RECALL-THEN-VERIFY** — the concluding runner picks areas from working knowledge and CONFIRMS against the glance. This is the project's own verify-canon-terms honesty guard turned into protocol wording, at the cheapest attention point.
- **A small generated sidecar (β) is specified but builds only with its consumers:** `canonVocab` (name + gloss + status) emitted by the existing `npm run data`, giving the second parse a new honesty counter (`unknownCanonAreas` — machine-validated tag values), the lens its labels, and C2 its old-doc rule (merge old→current for grouping, with visible `superseded-cited (merged)` provenance — only ~3% of references are affected). No speculative infrastructure.

## Finding

### 1. The answer, plainly

Was the lookup too expensive? No — as committed it was a names-only glance. Does the design require "cleaning or data extraction or indexing"? **Extraction-as-a-generated-view: yes, and it is one command. Indexing-as-a-maintained-artifact: no — and it would die.** The question's deepest yield is the defect it caught: the vocabulary the prior finding pointed at was wrong (superseded docs included; the count inflated by subdirs), and picking from a wrong list makes wrong tags no matter how cheap the picking is. The problem was never cost; it was validity and informativeness — plus currency (canon grows by your canonization; any static list drifts). Those three needs are the test every shape below passes or fails.

### 2. The design (amending the still-unshipped tag offer)

**The vocabulary glance (α) — the CONCLUDE lookup's corrected wording:**

> Run the vocabulary glance: list the pickable canon files with their first-heading glosses — pickable per the canon-vocabulary policy; superseded (`old*_`/`*_old`, or `status: superseded`) and infrastructure excluded; heading-less files shown as "(no heading)", never omitted. **Pick from working knowledge and CONFIRM against the glance** (recall-then-verify). Choose the 1–3 areas this finding ACTUALLY ENGAGES — skip when unclear; never open docs to decide (headings are listing-grade; documents are research); no honest fit → none.

The filter was live-tested: `grep -viE '/old[0-9]*_|_old\.'` excludes all 3 superseded docs with zero escapees (the first draft's `/old_` missed `old2_…` — caught at the gate, not in production).

**The canon-vocabulary policy (your one blessing, drafted):**

> Pickable canon areas = **current top-level docs + `load_bearing_findings/` entries**. Excluded: docs marked superseded by the rename convention (`old_*`/`*_old`) — the practiced convention, now the standing status rule — or by a `status: superseded` frontmatter line (your preference; the filter checks both); `runtime_environment/` and `regression/` (infrastructure); `thinking_disciplines/` counts as **one** area.

Adjustable edges, enumerated: the nine discipline docs as individual values (if per-discipline effort tracking is ever wanted); infrastructure included (if those docs become engage-able). The one-area default was tested against a live case — this very inquiry's parent dive would honestly have tagged nothing-or-weakly plus child tags, which is the no-fit floor and the nursery working as designed, not a policy failure.

**The generated sidecar (β) — specified, consumer-bound:** ~20 lines riding the adapter's existing run; `canonVocab[]` = {name, gloss, status, class}. Consumers (it builds only when they do): the second parse validates `canon_areas` values → `unknownCanonAreas` (tag typos and stale names counted, never silent); the canon-area lens takes its labels; C2 handles its ~3% old-doc references by merging to the name-evident successor for grouping while showing `superseded-cited (merged)` provenance (the raw name stays visible in detail — nothing is fabricated, everything re-homed is marked).

**The two stragglers:** `methodogy_development_pitfalls.md` and `reasoning.md` lack headings. Their glosses are NOT drafted here — writing a gloss for an unread doc would be fabrication. The rule ships instead: at fix time (user-gated), open each once and give it its own first heading.

### 3. What was considered and set aside

A maintained index file — no owner exists (there is no canonize protocol to hook an update into) and hand-maintained files die here by the project's own mortality data. A static list pasted into the CONCLUDE paragraph — fails currency by construction (canon grows). Skipping the blessing — the filter keys on YOUR convention and judges YOUR artifact's edges; one line, once. Pure warm recall with no glance — bare recall about canon is exactly what the project's verify-canon-terms guard exists to distrust; recall-then-verify keeps the speed and adds the check (it also survives as the degraded mode for a runner that can't shell out, validated later by β's counter). A "premature optimization" objection was run against this whole dive fairly: the follow-up question was your gate-consideration for the tag offer itself — answering it serves that gate, and the yield (the count correction, the census, C2's filter) stands even if tags are never adopted.

## Inherited Commitments Re-test

- **Commitment:** the canon-anchored tag design and its lookup ("the canon listing is the lookup"; "~38 canon docs").
  **Source:** `devdocs/inquiries/2026-07-12_23-26__hierarchical_concept_tags_in_traverse__worth_and_shape/finding.md` §2.
  **Re-test status:** RE-TESTED — design confirmed; count found INVALID and corrected.
  **Evidence:** the census (25 top-level − 3 superseded = 22 current; +1 load-bearing entry; 13 subdir files were never pickable-grade); the confusable old north-star headings; the fixed filter live-tested. The design's every verdict survives; only the lookup line and the count are amended.
- **Commitment:** C2 (canon-area citation-inference) and the atlas-domain rule's read-verb.
  **Source:** `devdocs/inquiries/2026-07-12_21-48__atlas_content_generation_for_the_five_operations/finding.md`.
  **Re-test status:** RE-TESTED — confirmed, with the shared filter and a provenance rule added.
  **Evidence:** ~3% of C2's references hit old docs (9/308) — merged-for-grouping with visible provenance; reading canon first-headings stays within the clarified rule (a heading is a name-grade string, not content-rendering).
- **Commitment:** the writer-scale (runner-mechanical > protocol-LLM > habit-run).
  **Source:** the standing memory-mirrored finding.
  **Re-test status:** RE-TESTED — confirmed by application.
  **Evidence:** it adjudicated the whole shape question (no owner → generated-only; the hand index dead on arrival) and the maintenance policy (β regenerates with the build, never maintained).

## Next Actions

### MUST
- **What:** place the correction's consumer mark on the 23-26 record and mirror this landing into persistent memory.
  **Who:** this session. **Gate:** at this inquiry's close (now). **Why:** the corrected count must live where the wrong count lives; the answer must outlive the session.

### COULD
- **What:** bless (or adjust) the canon-vocabulary policy line (§2).
  **Who:** the user — one read, one line. **Gate:** whenever taken; it precedes or accompanies any tag-offer go. **Why:** the single act that makes everything downstream mechanical.
- **What:** fold the fixed vocabulary-glance wording into the tag offer's paragraph (the 23-26 R1 offer, still unshipped).
  **Who:** this assistant. **Gate:** rides the tag offer's own gate (no separate approval; no build occurs). **Why:** the offer ships pre-debugged if and when gated open.
- **What:** attach the β rider (canonVocab + `unknownCanonAreas` + the C2 merge rule) to the second-parse/adapter offers.
  **Who:** this assistant (spec note now; build with those offers). **Gate:** their existing gates. **Why:** machine-validated tag values from day one; one filter, three consumers.

### DEFERRED
- **What:** the two straggler headings. **Gate:** the user's go; open-once-at-fix-time. **Why (if revived):** 23/23 glossed; "(no heading)" disappears.
- **What:** any canonize-protocol hook for β's regeneration. **Gate:** a canonize protocol existing at all (none does; none is proposed). **Why (if revived):** regeneration-at-canonization beats regeneration-at-build only if that moment gains a protocol home.

## Reasoning

The kills and their grounds: the maintained index (no owner — the no-canonize-protocol absence verified; the routelog's mortality); the static inline list (currency fails by construction); the no-blessing shortcut (the convention becomes load-bearing — its named failure mode is a future superseded doc left unrenamed; the owner must know); bare-recall tagging (the verify-canon-terms guard's whole case; absorbed into recall-then-verify rather than killed outright). The gate earned its keep concretely: it predicted one bug-surface (the `old2_` escape) and confirmed it live, caught a second nobody predicted (the grep-glance silently dropping heading-less files — a no-silent-drops violation inside one command), and pressure-tested the policy's edges against a real dive. The frame-premise test on the three-needs standard held (attribution, completeness, and stability were each tried as a fourth need and re-homed). The correction to the prior finding was scoped deliberately: its design survives whole; its count and unfiltered listing were wrong; saying so plainly — and crediting the catch to the user's follow-up — is the corrects-discipline working.

## Open Questions

### Monitoring
- When tags accrue: does `unknownCanonAreas` stay at zero (recall-then-verify working) or climb (the glance being skipped)?
- Does the rename convention hold for the NEXT superseded canon doc (the rule's named failure mode)?

### Blocked
- β builds with its consumers (the second parse / the lens / C2) — all still user-gated offers.

### Refinement Triggers
- **The one-area default for `thinking_disciplines/` re-opens** when per-discipline effort tracking is wanted (the named alternative: nine values).
- **The infrastructure exclusion re-opens** if `runtime_environment/` docs become engage-able canon.
- **The glance's filter re-opens** only if the naming convention changes shape (the specific blocking feature: the `old` prefix/suffix patterns the regex keys on).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

The surviving form: canon-anchored tags written at CONCLUDE. Each finding's frontmatter gets canon_areas: — 1 to 3 picks from the ~38 canon docs (a controlled vocabulary the user ALREADY governs by canonizing) — plus up to 5 optional free child tags: (children never parents). The canon listing is the lookup; the grouping lens is the consumer. Hierarchy comes for free as ONE governed parent level — no maintained tree, which would re-enter exactly the "whole work" the user declined.

maybe this requires certain cleaning or data extraction or indexing of canon folder? otherwise each conclude to look up to canon will be too expensive
and canon is already clean so removing things is not possible. 

what do you thinkn?
```

</details>
