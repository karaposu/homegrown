# Branch: routeman_per_route_schema_refinement

## Question

- **Subject** — four specific per-route schema field decisions in `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md`'s committed simplification shape: (a) Movement, (b) Unlocks, (c) Continuation Note / Continuation Memory, (d) Purpose.
- **Action** — re-adjudicate (compound: each field's verdict from the prior finding is now contested by user feedback; specific objections need to be tested against prior reasoning + reasoned-to a refined verdict).
- **Level** — discipline-level, specifically the per-route schema sub-component of routeman's α-layer (the prior finding's structural decision space). This is a NARROWER scope than the prior inquiry, which adjudicated the whole 4-layer shape.
- **Observation targets** — four distinct fields, each with its own objection. Preserved as separate items because the user's message contains: (1) clause-pair joined by "and" ("Movement AND Unlocks") which per LOOP_DIAGNOSE finding MC2's verbatim trigger pattern requires separate-item preservation; (2) sentence-separated objections on Continuation Memory (with bloat reason) and Purpose (with redundancy reason). Four distinct fields, four distinct re-adjudications:
  1. **Movement** — user disagrees with removing it (prior finding's P1-Generic verdict cut it as "derivable from Direction → Goal"). User's position: keep it. Re-test the derivability argument; identify whether Movement carries content the derivation can't reconstruct.
  2. **Unlocks** — user disagrees with removing it (prior finding cut it as "derivable from forward-chain reasoning over Status + Blocked By"). User's position: keep it. Re-test the derivability argument; identify whether Unlocks carries forward-looking information that Status + Blocked By can't carry.
  3. **Continuation Note / Continuation Memory** — user thinks the field SHOULDN'T be in the schema; user's stated reason: "it will bloat the md file." Prior finding kept it as a content field. Re-test: does the field carry content that justifies its size cost? What's lost if cut?
  4. **Purpose** — user questions whether Purpose is needed at all; user's reasoning: "we already have goal, why and why important" (Goal + WHY + why_this_might_be_important may collectively cover what Purpose carries). Prior finding kept it. Re-test: is Purpose's content axis distinct from those three other fields, or is it redundant?
- **Deliverable shape** — a per-field verdict memo: for each of the 4 fields, (a) state user's objection verbatim, (b) re-test the prior finding's reasoning against the objection, (c) commit a verdict (keep / cut / refine / split), (d) name what would change in `cognitive_harness/routeman/references/routeman.md` if applied + the implication for the prior finding's MUST spec-edit delta list. End-state: an updated per-route schema (with field count + per-field reasoning) that supersedes the prior finding's α-layer schema commitment for these four fields specifically.

**Stated question:** For each of the four contested per-route schema fields (Movement, Unlocks, Continuation Note, Purpose) — does the prior finding's verdict survive the user's specific objections, or should the field's verdict be revised?

## Goal

- **Criterion** — a good answer: (a) treats each of the four fields as its own adjudication with its own evidence, (b) engages user's objection on its specific structural ground (the user's reasons are: bloat (for Continuation Note); redundancy-with-other-fields (for Purpose); and an absence of stated reason for Movement/Unlocks which the inquiry must DRAW OUT by reading the prior finding's derivability argument against), (c) preserves the prior finding's other commitments unchanged (does not re-litigate the whole α/β/γ/δ stack — only these 4 fields), (d) ends with a CONCRETE updated per-route schema + a delta-list addendum to apply to the prior finding's MUST list.
- **Use case** — the user will use the answer to decide whether to keep, refine, or revert specific commitments from the prior finding before applying the spec edits to `cognitive_harness/routeman/references/routeman.md`. The output may TRIGGER an update to the prior finding's MUST delta list OR a follow-up correction finding.
- **Desired outcome** — a per-field schema reaching either re-confirmation (prior verdict holds; user's objection answered with structural reasoning) or correction (prior verdict revised; user's objection sustained with structural reasoning). The user should be able to read the verdict and act on the spec edit immediately.
- **What would fail** — an answer that: (i) blanket-defends the prior finding without engaging the specific objections, (ii) blanket-accepts the user's objections without testing them on structural grounds (the user invited testing by submitting them; rubber-stamping isn't a SIC-loop verdict), (iii) re-opens the whole 4-layer stack instead of focusing on the 4 specific fields, (iv) collapses Movement and Unlocks into a single decision (the user joined them with "and" — they're TWO observation targets per LOOP_DIAGNOSE MC2), (v) treats "bloat" or "redundancy" as vibes rather than testing them structurally (what specifically would the field's removal lose, in concrete terms).

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
i have some questions for 

 devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md

i disagree with removing movement and unlocks

i think we shouldnt have Continuation memory, it will bloat the md file 

maybe Purpose is not needed since we already have goal, why and why important ...
```

## Scope Check

Question covers goal: YES.

**Specific-vs-pattern check.** The user named 4 specific fields. The inquiry should adjudicate THESE FOUR specifically — not generalize to "all fields of the per-route schema" or "all design decisions in the prior finding." The Movement+Unlocks decision DOES have a derivability-claim structure that might extend to other fields not mentioned (e.g., Blocked By could be derivable from Status), but the user has scoped their objection to these four; broadening the scope would be over-reach. Adjudicate the four; if a similar derivability-pattern surfaces during reasoning, flag it as Open Question / Refinement Trigger rather than expanding scope.

**Implicit-target-target check.** The user objects to specific FIELD decisions but does not object to the prior finding's larger structural decisions (4-layer model, β-layer minimization, γ-field REPAIR, file structure `routeman.md` + `_route.md`, etc.). Those commitments stand UNCHANGED. The inquiry's scope is exactly the 4 field-level decisions.

## Layer Commitment

**Primary layer: STRUCTURAL.** Same layer as the prior inquiry. The user is questioning specific FIELD-level commitments in the prior finding's per-route schema — the artifact's shape at finer granularity. Meaning-layer (what routeman IS) and process-layer (the 10 Enumeration components, the typed-reachability mechanism) are not under question.

**Other-layer alternatives considered and explicitly out of scope:**
- **Meaning** — what each FIELD means semantically (e.g., what "Movement" denotes vs what "Goal" denotes). Touched only insofar as the meaning-axis of each field must be examined to test redundancy claims; not re-adjudicated as the primary frame.
- **Process** — how each field is populated at runtime by the LLM. Out of scope; if a field's runtime population mechanism changes as a result of a structural decision (e.g., cut field means LLM doesn't populate it), that's a downstream consequence noted in the verdict, not the primary frame.

**Sequential multi-layer plan (declared, not executed in this run):** This run is structural-only. If the verdict reveals a deeper meaning-layer issue (e.g., "Movement and Goal denote different things and the prior finding conflated them"), that's flagged for a follow-up meaning-layer inquiry.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` (the prior simplification finding; specific per-route schema commitments are inherited and 4 are now contested).
- **RELATED:** `cognitive_harness/routeman/references/routeman.md` (the live routeman spec; the prior finding's MUST delta list targets this file; this inquiry's verdict updates that delta list for the 4 contested fields).
- **RELATED:** `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (the original meaning-layer design memo that committed the original 16-attribute schema including all 4 contested fields — the source for understanding what each field was originally meant to carry).
- **RELATED:** `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (committed `why_this_might_be_important`, the field the user references as part of the Purpose-redundancy argument).
