# Articulate-Simple — Come-Back-When: A Routelister Subfield, or a Wrong Assumption?

## User Input

```text
File (end of the loop, small step). When a traverse finishes, it has already written its parked directions — the finding's "deferred" items and the route-list's set-aside routes, each with a come-back-when note. This step just saves them into one shared list, tagged by direction so they can be found later. Its only real work beyond copying is turning each come-back-when note into a searchable tag. It makes no decision about where the project should go next.

u said this, but wouldnt be easier for us if this is added to the routelister spec so each route has comeback-when subfield? 

but also the assumption of comeback when being obvious is wrong. we dont always know this, actually for most of the time. And for the times we know, we already have subfield regarding this called blocked by in routelister no ?
```

---

## Itemize

**Count = 1** (one coupled critique of the 18-12 finding's "File" step + its come-back-when assumption, carrying two intertwined objections and one factual claim to verify).

- **Item 1:** "re-examine the finding's File-step / come-back-when mechanism — (a) should come-back-when be a routelister route SUBFIELD (structure at the source) instead of post-hoc prose→tag extraction; (b) the finding's ASSUMPTION that come-back-when is knowable is wrong — usually it is NOT; (c) for the cases where it IS knowable, routelister may ALREADY have this as a `blocked by` subfield — verify, and revise the design accordingly."

**Keep-together check:** the subfield question (a) depends on the premise (b: is the condition usually knowable?) and on the fact (c: does `blocked by` already cover the knowable cases?). They resolve together as one correction to the finding. **Count = 1.**

---

## Item 1 — the come-back-when assumption + the routelister subfield

### Stage 2 — Meta-questions + MQA

**MQ1 (verdict-axis) — what is the user asking for?**
Identified-ambiguities-list:
- `[ADD-a-subfield (put comeback-when into the routelister route schema, structured at source) vs CORRECT-the-PREMISE (comeback-when is usually unknowable, so the finding's matching mechanism is wrong) vs USE-EXISTING-FIELD (the knowable cases = routelister's `blocked by`; no new field needed) vs REDESIGN-MATCHING (given most directions have no condition, how does matching actually work) — likely ALL, as one correction]`
- `[the SCOPE of the correction: a small fix to the File-step vs a correction to 18-12's whole matching mechanism (condition-firing assumed conditions exist) vs a change to the routelister SPEC itself]`
- `[the FACTUAL claim to verify: does routelister ALREADY have a `blocked by` subfield? what route subfields exist today? — the user says "no?" (uncertain) → must be grounded, not assumed]`

**MQ2 (context-need axis) — what context does the response need?**
Identified-ambiguities-list:
- `verdict:` the **18-12 finding** (being corrected — its File-step: "turn each come-back-when note into a searchable tag"; its matching mechanism: "look up the parked directions whose come-back-when note now fits"; its one-shot/standing split); the **ACTUAL routelister spec / route-record schema** (does `blocked by` exist? what subfields does a route carry today? — the crux, must be READ not assumed); the 17-45 prior pass (similarity-matching, which 18-12 demoted); how findings' DEFERRED next-actions + routelister routes actually express revisit-conditions today
- `kinds:` the distinction between a KNOWABLE revisit-condition (a dependency/block — "revive when X ships") and an UNKNOWABLE one (a promising direction with no stated trigger); how routelister currently records gates/@-conditions/blocked-by; what "tagged by direction" vs "matched by condition" mean mechanically
- `stance:` a CORRECTION inquiry — the user has found a likely real hole in 18-12 (over-assuming conditions are knowable); engage it honestly (don't defend the finding), verify the `blocked by` fact, and revise; non-sycophantic BOTH ways (the objection is likely right, but verify it — don't just agree that blocked-by suffices without checking)

**MQ3 (intent-axis, WHAT) — what is the user trying to accomplish?**
Identified-ambiguities-list:
- `[CORRECT the 18-12 finding (fix the come-back-when assumption + the File-step) vs DECIDE the routelister-schema question (add comeback-when? / use blocked-by? / neither) vs REVISE the matching mechanism (conditional vs unconditional parked directions) vs ALL THREE as one correction]`
- `[the endpoint: an amended finding / a routelister-spec change (or a decision NOT to change it) / a revised matching design / a short correction note]`

**MQ4 (boundary-axis) — what is the user explicitly excluding?**
Identified-ambiguities-list:
- `[NOT re-opening all of 18-12 — the parked-direction object, the file/look-up/revive shape, the append-only substrate stand; this targets the come-back-when ASSUMPTION + the File-step specifically]`
- `[NOT assuming `blocked by` exists — the user says "no?" (uncertain); the design must be grounded in the real routelister schema]`
- `[NOT the spec-slot DEFINITION — still the operation/schema, not the meaning of meaningful traversal]`
- `[NOT inventing a knowable condition where none exists — the correction's whole point is that most directions lack one]`

**MQA:** MQ1's ADD-subfield + MQ3's decide-schema span the **routelister route-schema question** (comeback-when field? / blocked-by? / neither). MQ1's CORRECT-premise + MQ3's revise-matching span the **matching-mechanism correction** (condition-firing assumed conditions; but most directions have none → matching must handle the unconditional majority). MQ2's `verdict`(the actual routelister schema) + MQ4's don't-assume-blocked-by span the **grounding requirement** (READ the spec). The three reconcile into one correction: *establish whether conditions are usually knowable and whether blocked-by already captures the knowable ones → then decide the schema and the matching design.*

### Stage 3 — Deconstruct + MultiDepth

**Deconstruct tuple:** `(deliverable: a grounded correction to the 18-12 finding's come-back-when mechanism — resolving (i) the routelister-subfield question, (ii) the is-come-back-when-usually-knowable premise, (iii) the does-blocked-by-already-cover-it fact, and (iv) the resulting revised matching design; kinds: a premise-verdict + a schema-decision + a matching-mechanism revision + the delta-vs-18-12; bounds: the come-back-when assumption + the File-step + the routelister route-schema; NOT the whole 18-12 finding, NOT the spec-slot, NOT assuming blocked-by exists)`.

**MultiDepth literal-statement:** "the finding's File-step assumed each parked direction has a come-back-when note that just needs turning into a searchable tag — but wouldn't it be easier to add come-back-when as a routelister route subfield; AND that assumption is wrong because come-back-when is usually NOT knowable; AND when it IS knowable, isn't that already routelister's `blocked by` subfield?"

**MultiDepth purpose-motivation-ambiguities (WHY-axis):**
Identified-ambiguities-list:
- `[why: SIMPLIFY (structure-at-source via a routelister subfield is leaner than post-hoc prose→tag extraction) vs CORRECTNESS (the finding's come-back-when-is-knowable premise is false and must be fixed) vs AVOID-REDUNDANCY (don't add a field that duplicates the existing `blocked by`) vs GET-THE-MECHANISM-RIGHT (if most directions have no condition, the matching design must change) vs KEEP-THE-DESIGN-HONEST (don't ship a mechanism built on a wrong assumption)]`

### Stage 4 — Considered Articulations
1. "Add a `comeback-when` subfield to the routelister route schema (structure at the source; the File-step stops extracting tags from prose)."
2. "Correct the finding's premise: come-back-when is usually NOT knowable — so matching cannot be primarily condition-firing; most parked directions must be matched another way (by relevance/topic)."
3. "Establish that the knowable cases are already routelister's `blocked by` subfield (verify it exists) — so no new comeback-when field is needed."
4. "Redesign matching around TWO kinds of parked direction: CONDITIONAL (has a knowable revisit-condition / blocked-by → match by condition-now-satisfied) vs UNCONDITIONAL (no condition, the majority → match by direction/topic relevance)."
5. "Do all of the above as one grounded correction to the 18-12 finding, with an explicit delta (what 18-12 got wrong: over-assuming conditions are knowable; what it demoted too far: relevance-matching, which is primary for the unconditional majority)."

---

## Statement-Level Bundle

- **Itemize count:** 1
- **Per-item identifiers:** Item 1 (the come-back-when assumption + the routelister subfield question)
- **Live cross-cutting axes surfaced (for downstream):**
  - the ROUTELISTER SCHEMA fact (does `blocked by` exist? what subfields? — MUST be read, not assumed)
  - the PREMISE (is come-back-when usually knowable? — the user says NO, likely right)
  - the TWO-KINDS split (conditional/blocked-by vs unconditional/relevance)
  - the MATCHING correction (18-12's condition-firing assumed conditions; relevance may be primary for the majority — partial rehabilitation of 17-45's demoted similarity)
  - the SCHEMA decision (add comeback-when / use blocked-by / neither)
  - the delta-vs-18-12 (what the correction changes)

### LAYER 1 self-check (single LIGHT pass)
- Mode 1 / 2 (item split): not fired — one coupled correction; the subfield/premise/blocked-by points resolve together.
- Mode 3 (MQ over-extension): not fired — canonical axes.
- Mode 4 / 5 / 6: not fired — all operations present; MQ2 carries verdict(18-12 + the real routelister schema)/kinds/stance(correction, verify-don't-defend).
- Mode 7 (2-shape): not fired — every MQ answer is an identified-ambiguities-list; the schema-decision + the premise-verdict held OPEN (though the user leans hard toward "condition usually unknowable / blocked-by suffices," the pipeline must VERIFY, not assume).
- Mode 8 (AMBIGUITY-NATURE): not fired — WHAT-endpoints at MQ3; WHY-motivations at MultiDepth.
- Mode 9 (drift): not fired — variants preserve deliverable-shape, respect the NOT-list (don't re-open all of 18-12; don't assume blocked-by; ground in the real schema).

**Friction:** moderate — the inquiry pivots on a FACTUAL claim about the routelister schema (`blocked by`) that MUST be verified in Surfacing before the design resolves; and it corrects a prior finding (18-12), so honesty (engage the objection, don't defend) is the stance. Layer Commitment + Synthesis Trigger both required.

---

## Self-Assessment Verdict

**HIGH-PROCEED** — clean self-check. The framing holds the schema-decision and the premise-verdict open while flagging that the user leans (rightly, likely) toward "come-back-when is usually unknowable" and "blocked-by already covers the knowable cases" — both of which Surfacing must VERIFY against the real routelister spec, not assume. Downstream: Layer Commitment = STRUCTURAL primary (the routelister route-schema decision), sequenced to PROCESS (the matching-mechanism revision), premised on a correction to 18-12's assumption; Synthesis Trigger = 18-12 (being corrected) + the routelister spec + 17-45. Watch-note: this is a CORRECTION of my own prior finding — engage the objection honestly (it is likely right), but still verify the `blocked by` fact and don't over-correct (relevance-matching returning as primary for the majority does NOT delete the conditional/blocked-by case).
