# Branch: routeman_directional_input_read_policy

## Question

- **Subject** — `/routeman`'s INPUT-READ POLICY when invoked toward a direction (i.e., the directional-mode invocation per the staging mechanism from `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`). Specifically: must / should / may routeman READ prior `routeman.md` files and prior `_route.md` files as part of its directional-mode invocation? The question is whether reading these is a TENDENCY (encouraged), MANDATORY (required), or OPTIONAL (no commitment).
- **Action** — define the policy. The question is a from-scratch design question on a discipline's runtime input-read commitment — this is a process-layer commitment on the routeman discipline.
- **Level** — discipline-level (specifically routeman's process-layer; the runtime read-input behavior).
- **Observation targets** — preserved as separate items because the user's framing contains TWO distinct sub-questions (separated by clause + "And" + question-mark sentence):
  1. **Should routeman READ existing `routeman.md` files** (the cross-invocation route-map content) when invoked toward a direction? Should this be tendency, mandatory, or optional? User's reasoning: "This makes sense to keep it up to date."
  2. **Should routeman ALSO READ existing `_route.md` files** (the invocation-state files) too? User's stance: "maybe too? I am not sure."

  The user explicitly named these as two distinct things to adjudicate. Per LOOP_DIAGNOSE MC2's verbatim trigger (multi-sentence framings where each sentence introduces a new aspect), preserve as separate items.
- **Deliverable shape** — a process-layer policy memo: (a) verdict for `routeman.md` read in directional mode (tendency / mandatory / optional + reasoning), (b) verdict for `_route.md` read in directional mode (tendency / mandatory / optional + reasoning), (c) explicit policy statement that can be incorporated into `cognitive_harness/routeman/references/routeman.md`'s Reception phase (§3.2/§3.3) or wherever the directional-mode invocation contract lives.

**Stated question:** When `/routeman` is invoked toward a direction, must it / should it / may it READ existing `routeman.md` and `_route.md` files as input — and what's the difference between those two read decisions?

## Goal

- **Criterion** — a good answer: (a) treats the two sub-questions (read `routeman.md` vs read `_route.md`) as separate adjudications with separate reasoning, (b) defines tendency / mandatory / optional precisely (what each means operationally for a routeman invocation), (c) gives concrete reasoning grounded in the prior committed shape (per the 2026-05-27_00-51 + 27_13-23 inquiries) + the directional-mode mechanism (per the 2026-05-23_18-58 finding) + the persistence-and-invocation-modes commitments (per the 2026-05-24_00-20 finding), (d) connects the verdict to "keep it up to date" — the user's stated motivation, (e) produces a policy statement ready to land in the spec.
- **Use case** — the user will use the answer to decide what to add to `cognitive_harness/routeman/references/routeman.md`'s process-layer (Reception phase or directional-mode sub-section), and may add the read-policy as an additional MUST row in the amendment-delta lists from the prior 2 inquiries.
- **Desired outcome** — a clear policy: routeman's directional-mode invocation has a defined read-behavior on prior routeman-related artifacts; the cross-invocation continuity story is explicit rather than implicit.
- **What would fail** — an answer that: (i) treats the two sub-questions as one decision, (ii) decides tendency/mandatory/optional without defining what each operationally means, (iii) ignores the user's "keep it up to date" motivation (which is the structural reason this question matters), (iv) re-litigates the prior 2 inquiries' broader commitments, (v) misses that "directional mode" is a SPECIFIC invocation pattern from 18-58, not a free-form invocation, (vi) misses that `_route.md`'s content is already SELF-WRITE by routeman (per 24-00 + 27_00-51 commitments) — the read question is whether routeman reads its OWN prior writes when re-invoked.

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
(Run this skill) 

I am thinking, 

Routeman discipline towards a direction should  have tedency or maybe mandatory to read routeman.md files? This makes sense to keep it up to date? 

And route md files maybe too?

I am not sure.  But we should define this i think


Lets discuss
```

## Scope Check

Question covers goal: YES.

**Specific-vs-pattern check.** The user named the directional mode specifically; the generic-mode invocation (whole-codebase / fresh-state mode) is NOT in scope. The same read-policy question MAY apply to generic mode but adjudicating both at once would expand scope; the user's framing is directional-mode-only. Adjudicate the directional mode; flag any generic-mode implications as Open Questions / Refinement Triggers.

**Prior-inquiry-commitments check.** This inquiry inherits commitments from multiple priors but does NOT re-litigate them. The inherited commitments (Synthesis Trigger active):
- The staged-mapping mechanism from 2026-05-23_18-58 (which defines what directional mode IS — stage-2 = sub-route expansion under a selected parent route)
- The persistence-and-invocation-modes from 2026-05-24_00-20 (which named the 2 invocation modes: generic + directional)
- The committed simpler shape from 2026-05-27_00-51 (the `routeman.md` + `_route.md` two-file design)
- The 2026-05-27_13-23 amendment (Movement/Unlocks restored; Purpose/Cont.Note cut; doesn't directly affect this read-policy question but the per-Route schema content is what would be READ)

## Layer Commitment

**Primary layer: PROCESS.** The question is about WHAT STEPS routeman runs at invocation time — specifically the input-read step in directional mode. This is process-layer (procedure / mechanism / gates / loop), not meaning-layer (what routeman IS) and not structural-layer (artifact shape — the file structure is already decided).

**Other-layer alternatives considered and explicitly out of scope for THIS run:**
- **Meaning** — what routeman's directional-mode invocation IS as a cognitive operation. Out of scope; the operation is already named (sub-route expansion under a selected parent) by 18-58.
- **Structural** — the artifact shape of routeman's output. Out of scope; the file structure is committed by 27_00-51 + 27_13-23.

**Sequential multi-layer plan (declared, not executed in this run):** This run is process-only. If the verdict reveals a deeper structural question (e.g., "the read should produce a new section in routeman.md tagged 'prior-route-context'"), that's flagged for a follow-up structural inquiry.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs and inherits commitments. The finding MUST include `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — commits to: (a) the staged two-stage route mapping; stage-1 = parent Route Map (generic mode); stage-2 = sub-routes under a selected parent (directional mode); (b) the `Parent Route` reference field on sub-routes; (c) selective-runtime trigger for stage-2. **This finding defines what "directional mode" IS.**
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — commits to: (a) the 2 invocation modes (generic discovery + directional/topic-scoped); (b) the persistence ledger (originally `_navig.md` per the protocol adoption, renamed `_route.md` by 27_00-51); (c) the re-invocation behavior — *"read all navig.md files; recalibrate already-existant directions; decompose-or-create new directions."* **THIS COMMITMENT IS DIRECTLY RELEVANT — the user's question about reading prior routeman.md + _route.md files maps onto whether the 24-00 re-invocation behavior is REQUIRED or just SUGGESTED.**
- `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` — commits to: (a) the simpler `routeman.md` + `_route.md` two-file design; (b) routeman-native naming throughout (dropping the protocol's alias for routeman context); (c) the empirical-evidence-gated revival path for γ-field. **The file structure being read is committed here.**
- `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md` — commits to: per-Route schema with Movement + Unlocks restored, Purpose + Continuation Note cut. The per-Route entries' CONTENT (what would be read) is committed here.

Each commitment's re-test status will be enumerated in finding.md.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility` (most recent inquiry; identified follow-ups but this directional-read-policy question is finer-grained than those follow-up scopes — it's a process-layer commitment that should be settled BEFORE the broader follow-ups).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement` (per-Route schema content commitments — what would be READ).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification` (file-structure commitments — what FILES would be READ).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes` (re-invocation behavior — the load-bearing prior).
- **CONTINUES FROM:** `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field` (directional-mode definition).
- **RELATED:** `cognitive_harness/routeman/references/routeman.md` (the live spec the read policy would land in; specifically §3.2 Reception and/or §3.5 Re-invocation as parameterized variation).
