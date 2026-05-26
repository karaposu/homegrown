---
status: active
model: claude-opus-4-7[1m]
effort: max
extended_by:
  - devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md
---
# Finding: routeman should adopt both staged route mapping and a per-Route meta-reasoning field; recommended shapes and structural reasoning

> **📌 Downstream extension notice (applied 2026-05-24 00:20; source inquiry: `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`)**
>
> The source inquiry extends this finding's commitments by adopting `cognitive_harness/protocols/multi_resolution_navigation.md` as routeman's persistence mechanism. The user's "two invocation modes" framing in the source maps directly onto this finding's Point 1 (the staged-mapping adoption): generic mode = stage-1 (parent Route Map); directional mode = stage-2 (sub-route expansion under a selected parent). The new commitment in the source is the PERSISTENCE + RECALIBRATION model layered on top of the two stages, not new stages.
>
> **Per-commitment impact from this finding:**
>
> - **Point 1 (hybrid two-stage staged route mapping) — PRESERVED.** The source confirms the two stages without modification; the persistence model adds cross-invocation continuity (read prior `_navig.md` files; recalibrate; decompose-or-create) on top of the staging mechanism. FF-1 (staging trigger mechanism) from this finding is adjacent to but distinct from the source's new FF-1 (route-to-inquiry promotion threshold) — they target different decision points.
>
> - **Point 2 (per-Route `why_this_might_be_important` meta-reasoning field) — PRESERVED + EXTENDED.** The field is preserved unchanged in the base schema. The source extends the field to require versioning under recalibration: when routeman re-invokes on the same scope, the meta-reasoning may need to be UPDATED for routes whose context shifted, and the versioning must capture the change (so an audit can detect mechanical regeneration vs genuine recalibration). Concrete extension candidates are tracked at the source's FF-2 (routeman-specific schema extensions to the protocol's frontier-candidate-record); `meta_reasoning_revision_history` is one named candidate. The required + length-bounded properties are unchanged; the lifecycle property (in-place evolution + revision logging) is added.
>
> - **4-axis content distinction (Purpose / WHY / Continuation Note / `why_this_might_be_important`) — PRESERVED.** The source does not redefine any axis. The protocol's `continuation_note` field aligns with this finding's Continuation Note axis (object-level, forward-facing across sessions). Compatible.
>
> - **LLM-operational-characteristics-as-design-input principle (N=1 instance, deferred to research frontier here) — PRESERVED + APPLIED.** The source's hybrid-naming decision (`_navig.md` + `routeman.md` over protocol-native `_frontier.md` + `navigation.md`) is an explicit application of this principle. The source cites the principle by name in its naming rationale. This shifts the pattern-portability evidence: from N=1 (this finding) toward N=2 (the source applies the same principle to a different decision — naming, not field-design). The N≥2 threshold for promotion to project-canonical principle is now met if "naming under user-language alignment" and "field-design under LLM under-enumeration" are accepted as TWO distinct applications. The source flags this implicitly by applying the principle without re-justifying it.
>
> - **Sequencing recommendation (Point 2 first or concurrent with Point 1; not Point 1 alone before Point 2) — PRESERVED.** Unaffected by the source.
>
> - **LAYER-2 audit extension (false depth + filler meta-reasoning) — PRESERVED.** The source does not add or remove LAYER-2 failure modes for routeman. The persistence mechanism is checkable via the same audit substrate (the meta-reasoning field's versioning provides a stronger audit trail for false-depth detection — a sub-route's meta-reasoning that doesn't EVOLVE across recalibrations may indicate false depth).
>
> - **5 new sub-frontiers from THIS finding (FF-1 staging trigger; FF-2 recursion depth; FF-3 hierarchical Route Map consumption; FF-4 meta-reasoning audit mechanism; FF-5 /reflect coordination) — PRESERVED.** The source's own new frontier flags (its own FF-1 through FF-5) are SEPARATELY numbered + scoped (its FF-1 = promotion threshold for branch_inquiry; FF-2 = routeman-specific schema extensions; FF-3 = `_navig.md` lifecycle; FF-4 = cross-inquiry aggregation; FF-5 = `_navig.md` ↔ `_state.md` relationship). The numbering coincides but the content does not collide; both sets coexist. The frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` was retroactively updated to add the source's FFs as Tier-1 Questions 11-12 + Tier-2 Questions 13-15 + 1 new Research Frontier.
>
> For the full structural reasoning + the adoption spec sketch + the hybrid-naming decision rationale + the inherited-commitments re-test, consult the source inquiry's finding.

## Question

(from `_branch.md`)

The user raised two proposed additions to `routeman` after observing that the existing design's adaptive-guidance examples didn't address two structural concerns. The first concern: while routeman's 16-type taxonomy correctly classifies WHAT KIND a movement is (DEEPEN, REFINE, PURSUE-SEED, etc.), within any single type there are typically multiple specific ways to deepen or refine, and LLMs tend not to enumerate exhaustively — they take shortcuts. The user proposed **staged route mapping**: a first invocation produces high-level routes; a second invocation, given one selected route as scope, produces 10-20 sub-routes tied to that selected parent. The second concern: the LLM should articulate its reasoning for why each route was enumerated. The user proposed a per-Route **`why_this_might_be_important`** field where the LLM elaborates its enumeration reasoning, usable for improving routeman, improving the general SIC loop, and helping with prioritization.

The user explicitly framed both proposals as discussion items: "lets discuss these 2 points." The inquiry's job is to apply structural reasoning to each proposal — examine the underlying concern, evaluate candidate designs, consider alternatives, identify interactions with existing routeman commitments, surface failure modes, and produce a per-proposal recommendation grounded in reasoning rather than silent adoption.

**Goal.** A discussion-and-decision memo treating each proposal on its own merits, mapping each addition's interactions with the routeman design memo + correction + frontier-questions finding, identifying which open questions are affected and how, and producing actionable recommendations the user can take to the eventual `cognitive_harness/routeman/SKILL.md` authoring step. The decision is the user's; the inquiry's job is to ground that decision in structural reasoning.

## Finding Summary

- **ADOPT BOTH proposals**, each in a specific structural shape. The two are separable but reinforce each other: the meta-reasoning field is the natural audit substrate for whether staging produces genuine sub-route distinctness rather than minor variations. Adopting one without the other leaves a known gap (an audit gap if Point 1 ships alone; an enumeration-shortcut gap if Point 2 ships alone). Adopting both produces an **introspectable, hierarchically-enumerable Route Map** — a richer data structure than either proposal alone.

- **Point 1 (staged route mapping) — recommended shape: hybrid two-stage with selective-runtime trigger.** Stage 1 is the default routeman invocation producing the high-level Route Map per existing design (10 features; 16-attribute schema; 4 Route-Map wrapper fields). Stage 2 is an available follow-up invocation mode that, given one selected parent route as scope, produces 10-20 sub-routes tied to the parent via a new `Parent Route` reference field. The trigger is **selective-runtime** — the user or the runner decides per-cycle whether stage 2 is invoked and on which parent route; routeman does not auto-invoke stage 2. Recursion (stage 3 on a sub-route) is deferred to research frontier with a depth-cap question. The structural shape is **ADD-CONTENT** intervention: the existing schema gains one optional attribute (`Parent Route` reference) that fires only on sub-routes; the top-level Route schema is unchanged.

- **Point 2 (meta-reasoning field) — recommended shape: required, length-bounded, placed in the "Reasoning" group of the route-card schema.** Every Route carries the field. Length is bounded (1-2 sentences cap; specific char/word limit deferred to SKILL.md authoring) to prevent bloat into filler. The field is placed in the existing "Reasoning" group of the schema, which expands from `{WHY}` to `{WHY, why_this_might_be_important}`. The user's verbose name `why_this_might_be_important` is preserved as the canonical label — its explicitness is a feature, not a bug. The schema goes from 12 per-Route + 4 wrapper = 16 attributes to 13 per-Route + 4 wrapper = **17 total attributes** for top-level Routes (18 for sub-routes, with the `Parent Route` reference from Point 1).

- **The two proposals share an underlying design principle: LLM-operational-characteristics-as-design-input.** The user explicitly framed both as responses to known LLM operational limits and tendencies. This principle is named for routeman in this finding; whether it generalizes to other disciplines is deferred to research frontier (the pattern-portability test needs N≥2 instances; this inquiry is N=1).

- **A 4-axis content distinction is documented for the route-card schema.** Each of the four reasoning-side fields occupies a distinct content axis:
  - **Purpose** — object-level, forward-facing — what the route would serve, reveal, or unlock.
  - **WHY** — object-level, backward-facing to cycle — evidence from cycle output that makes the direction worth considering.
  - **Continuation Note** — object-level, forward-facing across sessions — what a future warm-up should remember about this route.
  - **why_this_might_be_important** — meta-level, LLM-introspective — the LLM's reasoning on why this route was enumerated.

  The distinction prevents readers (and the LLM populating the fields) from conflating the meta-level field with WHY. Schema documentation includes this table.

- **Sequencing recommendation: Point 2 first, or concurrent with Point 1; not Point 1 alone before Point 2.** The reasoning: Point 1 introduces staged enumeration whose primary failure mode is false depth (sub-routes that are minor variations rather than distinct moves). Without Point 2's meta-reasoning field, the LAYER-2 audit framework cannot detect false depth (no per-Route reasoning trace to verify distinctness). Sequencing Point 1 first creates an audit gap. Preferred sequence: both in the same SKILL.md authoring pass.

- **Each proposal carries its own failure mode, routed to the LAYER-2 audit infrastructure (frontier Q4 scope extension).** Point 1's failure mode is **false depth** (stage-2 sub-routes whose only distinguishing content is positional, without structural distinction). Point 2's failure mode is **filler meta-reasoning** (LLM produces "this seems important" rather than specific signal-naming). Both are identity-eroding (LAYER-2 by /surfacing's framework). The audit's recognition signals are: for false depth, sub-routes whose meta-reasoning reads interchangeably; for filler reasoning, generic-vs-cycle-grounded language. The LAYER-2 audit's specific operational design is frontier Q4's responsibility; this inquiry contributes recognition signals.

- **The recommendations interact with several surviving frontier questions** (post-correction list of 9):
  - **Q3 (adaptive-guidance generation mechanism)** — Point 2's field could BE the substrate that grounds each Guidance Pointer's WHY anchor. This is significant: adopting Point 2 may shift Q3's resolution path from "design a separate generation mechanism" to "use the meta-reasoning field's content as anchor source."
  - **Q4 (LAYER-2 audit infrastructure)** — scope extends to cover the two new failure modes (false depth + filler reasoning).
  - **Q2 (multi-head aggregation), Q5 (file-system protocol), Q6 (file-shape constraints)** — Point 1's staging introduces interactions: multi-head is orthogonal to staging (multi-head at worker level; staging at routeman level); file-system protocol gains a stage-2 invocation contract; file-shape contracts must accommodate the sub-route polymorphism (parent-reference field).

- **Five new frontier sub-questions emerge from the adoption decisions.** These are tracked in this finding's Open Questions section, not retroactively added to the previous frontier-questions finding's curated set:
  - **FF-1.** Staging trigger mechanism (always-available, under-enumeration signal, explicit parameter, or hybrid).
  - **FF-2.** Recursion depth (can stage 2 be re-staged; depth-cap mechanism).
  - **FF-3.** Hierarchical Route Map consumption (how downstream consumers navigate top-level + sub-route trees).
  - **FF-4.** Meta-reasoning field's audit mechanism (specific design within frontier Q4's scope).
  - **FF-5.** /reflect coordination on meta-reasoning (whether /reflect's process-quality observations and routeman's meta-reasoning should be coordinated or independent).

## Finding

### Surrounding context

Routeman is the forward-Boundary cognitive discipline whose MEANING-layer design was committed earlier today at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` and whose cycle-consumer process-layer was corrected at `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (routeman runs in an isolated session and scans worker-produced inquiry-folder artifacts, rather than receiving in-context cycle output). The frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` enumerated 10 frontier questions for the SKILL.md authoring step; the correction demoted one (Q11), leaving 9 surviving.

The user observed two design concerns after seeing example Guidance pointers:

- **Concern 1.** The 16-type movement-type taxonomy classifies WHAT KIND of move a route is, but within a type there are typically MULTIPLE specific ways to deepen or refine. LLMs have an operational tendency to NOT enumerate exhaustively — they produce 3-5 items under "list all" prompts even when 10+ distinct items exist. This is a structural problem the design must address, not an incidental quality. The user's proposed mitigation: **staged route mapping** — first invocation produces high-level routes; second invocation given one selected route produces 10-20 sub-routes scoped to that parent.

- **Concern 2.** The LLM should articulate its enumeration reasoning per Route. The user proposed a **`why_this_might_be_important`** field where the LLM elaborates why it enumerated this route. Three stated uses: improving routeman (cross-invocation pattern analysis); improving the general SIC loop (signal about what cycle-output triggers what enumeration); helping with prioritization (the LLM's articulated reasoning as a confidence signal).

The inquiry's job is to apply structural reasoning to each proposal. The user's framing ("lets discuss these 2 points") signaled discussion-orientation; the deliverable is a discussion-and-decision memo with per-proposal recommendations grounded in structural reasoning.

### 1. The shared underlying design principle: LLM-operational-characteristics-as-design-input

Before treating the proposals individually, name what they share. The user's framing identifies a structural design input: routeman is designed AROUND known LLM operational characteristics, not as if the LLM were idealized. Concrete characteristics relevant here:

- LLMs tend to under-enumerate when asked to "list all" — they produce convergent top-of-mind candidates rather than exhaustive coverage. Operationally observable in chain-of-thought research and in routine "list X" prompts where 10+ exist but only 3-5 are produced.
- LLMs can articulate reasoning if explicitly asked, but the articulation may be filler ("this seems important") rather than specific signal-naming unless the prompt structure encourages cycle-grounded anchors.

The proposals are concrete instantiations of designing around these characteristics. Point 1 bounds the per-invocation cognitive load (the LLM enumerates within a narrower scope, increasing per-invocation completeness). Point 2 makes the LLM's reasoning auditable, so further failure modes can be diagnosed empirically.

**Pattern-portability of the principle to other disciplines is deferred to research frontier.** N=1 (routeman) is observation; N=2 (a second discipline designed around LLM operational characteristics) would warrant promotion to project-canonical principle. Until then, the principle is named for routeman; not generalized.

### 2. Point 1 — staged route mapping

#### Recommendation: ADOPT

Hybrid two-stage staged route mapping. The shape:

- **Stage 1** is the default routeman invocation per existing design. Routeman scans the inquiry folder(s) per the corrected architecture and produces the Route Map of high-level routes (10 features; 16-attribute per-Route schema; 4 Route-Map wrapper fields).
- **Stage 2** is an available follow-up invocation mode. Given (a) a parent-route identifier from the stage-1 Route Map, (b) the file paths in scope (which inquiry folders the parent route was derived from), and optionally (c) a refined sub-purpose narrowing the scope, routeman produces a sub-route set of 10-20 sub-routes scoped to the parent. Each sub-route carries a new `Parent Route` reference field pointing to its parent.
- **Trigger is selective-runtime.** The user or the runner decides per-cycle whether stage 2 is invoked and on which parent route. Routeman does NOT auto-invoke stage 2.
- **Recursion (stage 3 on a sub-route) is deferred** to research frontier FF-2 with a depth-cap question. The two-stage shape is the committed shape; deeper levels are not in this commitment.

#### Schema impact

Top-level Route schema is unchanged (16 attributes). Sub-Route schema is 16 + 1 = 17 attributes (the additional `Parent Route` reference). The Route Map's wrapper structure remains 4 attributes. Polymorphism is light: top-level Routes don't carry the parent reference; sub-Routes do.

#### Alternative candidates considered and rejected

- **Eager-expansion** (auto-expand every route at stage 1; produce one large hierarchical map in a single invocation). Rejected: defeats the staging purpose. The LLM enumeration-shortcut tendency returns at the large-map level; the map balloons; the underlying concern recurs.
- **N-stage recursive default** (any sub-route auto-stages further into stage-3 sub-sub-routes). Rejected: unbounded tree without depth-cap. The depth-cap question is unresolved; deferring to FF-2 is the safe move.
- **Pure two-stage without selective trigger** (stage 2 auto-invoked on every route). Rejected: over-produces sub-routes for routes that won't be pursued. Selective-runtime trigger preserves enumeration capacity for routes worth deep-diving.
- **Per-Route schema-baked flag** (top-level Routes carry an `expandable: yes/no` field decided at author-time). Rejected: baking the trigger into the schema couples the decision to author-time; selective-runtime trigger keeps the decision at invocation time, where the user/runner has context.

#### Why the recommendation survives the strongest counter

The strongest counter is that the existing `expand-on-selection` Guidance Mode already addresses the deferral concern, making staging over-engineering. The counter fails on structural grounds: `expand-on-selection` defers **guidance content** on a route until selected; staged mapping defers **enumeration of sub-routes within a parent route** until stage 2 is invoked. The two address adjacent-but-distinct failure modes (guidance bloat vs enumeration shallowness). Adopting staging doesn't replace `expand-on-selection`; they cover different content-axes.

#### Interactions with surviving frontier questions

- **Q2 (multi-head aggregation):** orthogonal. Multi-head is at the worker level (N parallel workers writing to N inquiry folders); staging is at the routeman level (drilling down within one parent route). When multi-head ships, each worker produces its inquiry artifacts independently; routeman scans across worker folders and emits one Route Map. Stage 2 then operates on a selected parent route from that aggregated Route Map. New sub-frontier FF-3 (hierarchical Route Map consumption) lives within Q2's scope.
- **Q4 (LAYER-2 audit infrastructure):** the audit's "5 consecutive invocations" threshold may need re-calibration if stage-2 invocations are counted alongside stage-1. Recommendation: count stage-1 and stage-2 separately for audit threshold purposes.
- **Q5 (file-system protocol):** stage 2's invocation contract adds a new requirement — routeman must accept a parent-route identifier as input and write sub-routes to a file related to the parent. The protocol now spans stage-1 invocation + stage-2 invocation + their file-relationship. New sub-frontier FF-1 (staging trigger mechanism) lives within Q5's scope.
- **Q6 (file-shape constraints):** sub-routes have a slightly different shape (17 attributes including parent-reference) than top-level Routes (16 attributes). The file-shape contracts must accommodate the polymorphism. Simple in practice: same Route format with one optional field.

#### Failure mode: false depth

Point 1's primary failure mode is **false depth** — stage-2 produces 10-20 sub-routes that are minor variations rather than distinct moves. Recognition signal: sub-routes whose only distinguishing content is positional (1st, 2nd, 3rd sub-route) without structural distinction; sub-routes whose meta-reasoning fields read interchangeably. Audit routing: LAYER-2 audit infrastructure (frontier Q4 scope extension; specific operational design Q4's responsibility).

### 3. Point 2 — meta-reasoning field (`why_this_might_be_important`)

#### Recommendation: ADOPT

Required, length-bounded field placed in the existing "Reasoning" group of the route-card schema. The shape:

- **Required:** every Route carries the field. No conditional placement (no Guidance-Mode dependency; no Priority dependency). The field's stated uses (improving routeman; improving the loop; prioritization) require consistent presence for cross-invocation analysis.
- **Length-bounded:** 1-2 sentences cap (specific char/word limit deferred to SKILL.md authoring). The bound prevents bloat into filler.
- **Placement:** the existing "Reasoning" group of the schema. Group expands from `{WHY}` to `{WHY, why_this_might_be_important}`. No new group is needed; the field's content axis (meta-level) sits naturally alongside WHY's content axis (object-level evidence).
- **Schema total:** 12 per-Route + 1 = 13 per-Route + 4 wrapper = **17 total attributes** for top-level Routes (18 for sub-routes, with the `Parent Route` reference from Point 1).
- **Name:** the user's verbose `why_this_might_be_important` is preserved as the canonical attribute label. Allow shorter alias (`meta_why`, `enumeration_rationale`) in informal references or telemetry shorthand. The verbose name's explicitness is a feature — readers immediately see the field's purpose.

#### Alternative candidates considered and rejected

- **Optional Guidance-Mode-conditional** (required when Mode is `full` or `compact`; absent when `none`). Rejected: the field's stated uses require consistency for cross-invocation analysis. Conditional placement creates gaps that complicate the user-stated use (a) improving routeman.
- **Priority-conditional** (only HIGH/MEDIUM Routes carry the field). Rejected: same gap problem; under-uses the field's purposes.
- **Aggregated-per-invocation** (one routeman-level reasoning section per Route Map, not per-Route). Rejected: loses per-Route granularity; the prioritization signal (use c) requires per-Route content.
- **Separate log file** (meta-reasoning in a parallel telemetry file, not in the route-card). Rejected: decouples the meta-reasoning from the Route it's about; harder to read; harder to audit cross-invocation.
- **Field with no length bound.** Rejected: risks bloat into filler narrative; the route-card becomes unscannable.
- **Renaming to short alias as canonical** (e.g., `meta_why`). Rejected: loses the user's verbose-name explicitness; readers must learn what the short alias means. The verbose name self-documents.

#### User-stated uses, addressed

- **(a) Improving routeman.** Cross-invocation pattern analysis: aggregating `why_this_might_be_important` fields across many routeman invocations reveals which cycle-content signals consistently trigger which Route types. The ABSENCE of meta-reasoning for a class of routes that "should" be enumerable signals routeman's blind spots. Concrete example: if PURSUE-SEED routes' meta-reasoning consistently fails to anchor in critique's kill seeds, the adaptive-guidance generation mechanism has a blind spot at the kill-seed signal — which can then be fixed.
- **(b) Improving the general SIC loop.** The field surfaces what kinds of cycle-output signals trigger what enumeration patterns. This is feedback to upstream disciplines (sense-making, innovation, critique) about how their outputs are received by the consumer (routeman). If routeman's enumeration consistently misses a signal pattern, the upstream discipline may need to make that pattern more visible.
- **(c) Helping with prioritization.** The LLM's articulated reasoning provides a meta-confidence signal complementing the explicit Priority labeling. A Route with high Priority but vague meta-reasoning ("this seems worth considering") signals that the Priority is asserted without ground; a Route with low Priority but specific meta-reasoning ("critique's KILL seed on idea X explicitly asks 'what conditions would make this work?'; this Route addresses the explicit ask") may deserve elevation. The field is decision-support, not authoritative.

#### Interactions with surviving frontier questions

- **Q3 (adaptive-guidance generation mechanism):** **significant interaction.** The meta-reasoning field could BE the substrate from which each Guidance Pointer's WHY anchor is drawn. If routeman articulates its enumeration reasoning per Route, that reasoning provides cycle-content anchors that ground the Guidance Pointers' per-pointer WHYs. This means adopting Point 2 may shift Q3's resolution path: instead of designing a separate generation mechanism, the LAYER-2 audit can verify that Guidance Pointer WHYs draw from the meta-reasoning field's content.
- **Q4 (LAYER-2 audit infrastructure):** the field's content is the audit substrate for the "Prescriptive-Without-Cycle-Context" identity-erosion mode. The audit checks whether the meta-reasoning anchors in specific cycle-content signals (good) or is generic filler ("this seems important" — bad). The audit operationalizes the cycle-grounding check Point 2 enables.

#### Failure mode: filler meta-reasoning

Point 2's primary failure mode is **filler meta-reasoning** — the LLM produces surface-level reasoning rather than actual reflection. Recognition signal: generic language ("this seems important"; "worth considering"); absence of specific cycle-content references; per-Route reasoning that reads interchangeably across Routes. Audit routing: LAYER-2 audit infrastructure (frontier Q4 scope extension; specific operational design Q4's responsibility).

### 4. The 4-axis content distinction for the route-card schema

Documenting the content axes prevents readers (and the LLM populating the fields) from conflating the new meta-reasoning field with the existing WHY field, which is the most likely confusion under naive reading.

| Axis | Field | What it carries | Level | Direction |
|---|---|---|---|---|
| 1 | **Purpose** | What the route would serve, reveal, or unlock | Object | Forward-facing |
| 2 | **WHY** | Evidence from cycle output that makes the direction worth considering | Object | Backward-facing to cycle |
| 3 | **Continuation Note** | What a future warm-up should remember about this route | Object | Forward-facing across sessions |
| 4 | **why_this_might_be_important** | The LLM's reasoning on why this route was enumerated; what signal it picked up on | **Meta** | LLM-introspective |

The within-object-level structure (axes 1, 2, 3 differ in direction: forward, backward-to-cycle, forward-across-sessions) is already implicit in the design memo's schema — the 4-axis table makes it explicit. The 4th axis (meta-level) is the new content type Point 2 introduces.

This table is reproduced in the schema documentation. Schema-readers consult the table to decide which field carries which content.

### 5. Sequencing — Point 2 first or concurrent with Point 1

**Ship Point 2 first OR concurrently with Point 1; not Point 1 alone before Point 2.**

Reasoning: Point 1 introduces staged enumeration; its primary failure mode is false depth (sub-routes that are minor variations). Without Point 2's meta-reasoning field, the LAYER-2 audit cannot detect false depth (no per-Route reasoning trace to verify distinctness). Sequencing Point 1 first creates an audit gap.

Acceptable sequence:

- **Preferred:** ship both in the same SKILL.md authoring pass. Point 1 + Point 2 + the 4-axis content distinction land together.
- **Acceptable:** ship Point 2 first in a quick schema-extension pass; ship Point 1 in a follow-up that uses Point 2's field as the audit substrate.

### 6. LAYER-2 audit infrastructure extension

The frontier Q4 LAYER-2 audit infrastructure (originally focused on the design memo's 3 identity-eroding modes — Rename-Renders-Itself-Cosmetic, Prescriptive-Without-Cycle-Context, Auto-vs-Judgment Calibration Drift) extends to cover two additional failure modes introduced by Points 1 and 2:

- **False depth** (Point 1). Recognition: stage-2 sub-routes whose only distinguishing content is positional, without structural distinction; sub-routes whose meta-reasoning fields read interchangeably.
- **Filler meta-reasoning** (Point 2). Recognition: meta-reasoning content that is generic rather than naming specific cycle-content signals.

Both are LAYER-2 (identity-eroding via behavioral audit over time), not LAYER-1 (operational; recoverable via re-invocation). The audit's specific operational design is Q4's responsibility; this finding contributes the two new recognition signals to Q4's scope.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger consuming 5 priors. Each prior's commitments are tested per-commitment.

### Prior 1 — `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (routeman design memo)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| 3-layer identity (paradigm + prescriptive-extension + cycle-consumer) | RE-TESTED — STANDS | Identity layers unaffected by Points 1 and 2. Both proposals add to routeman's operation, not its identity. |
| 10 features (F-enum through F-seed) | RE-TESTED — STANDS | Features unaffected. Staging is a procedural pattern operating on existing features; meta-reasoning is a new attribute existing features populate. |
| 16-attribute schema | RE-TESTED — EXTENDED | Schema goes 16 → 17 (Point 2 adds 1 attribute). Sub-route schema goes 16 → 18 (Point 1 adds parent-reference; Point 2 adds meta-reasoning). Top-level Route schema = 17; sub-Route schema = 18 (only when stage 2 has run). |
| 9-mode failure framework | RE-TESTED — EXTENDED | Framework structure unchanged. LAYER-2 scope expands to cover 2 new failure modes (false depth + filler reasoning) per section 6. |
| 26 lineage decisions | RE-TESTED — STANDS | Lineage decisions unchanged; both proposals are additions to the discipline beyond the lineage list. |
| 3 endgame functions (EF-1, EF-2, EF-3) | RE-TESTED — EF-1 STRENGTHENED; EF-2/EF-3 STANDS | EF-1 (enumeration-first preserves multi-head) is strengthened by Point 1: staging makes enumeration genuinely complete rather than LLM-shortcut-bounded. EF-2 and EF-3 unaffected. |

### Prior 2 — `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (correction)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| Isolated-session + file-scanning + parallel-workers + singleton-navigator architecture | RE-TESTED — STANDS, COMPATIBLE | Staging is a follow-up invocation pattern within the isolated session; meta-reasoning is a schema field written to inquiry artifacts. Both compatible. |
| Corrected cycle-consumer process layer | RE-TESTED — COMPATIBLE | Staging extends the process layer with a new invocation mode; cycle-consumer relation preserved at structural level. |
| 4-tier downstream impact list | INHERITED-WITHOUT-RE-TEST | Out of scope for this inquiry; the tier classifications stand. |

### Prior 3 — `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (frontier-questions finding)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| Q1 (autonomy-level detection) | INHERITED-WITHOUT-RE-TEST | Unaffected by Points 1 and 2. |
| Q2 (multi-head aggregation) | RE-TESTED — INTERACTION ADDED | Point 1 + multi-head are orthogonal (multi-head at worker level; staging at routeman level). The hierarchical Route Map sub-frontier (FF-3) lives within Q2's scope. |
| Q3 (adaptive-guidance generation mechanism) | RE-TESTED — RESOLUTION PATH SHIFTED | Point 2's field may provide the substrate that grounds Guidance Pointer WHYs. Q3's resolution path now includes "use meta-reasoning field content as anchor source" as a primary candidate. |
| Q4 (LAYER-2 audit infrastructure) | RE-TESTED — SCOPE EXTENDED | Audit covers 2 new failure modes (false depth + filler reasoning) per section 6. |
| Q5 (file-system protocol) | RE-TESTED — INTERACTION ADDED | Stage-2 invocation adds requirements to the protocol; FF-1 (trigger mechanism) lives within Q5's scope. |
| Q6 (file-shape constraints) | RE-TESTED — INTERACTION ADDED | Sub-route schema differs from top-level Route schema by parent-reference field; file-shape contracts must accommodate the polymorphism. |
| Q7 (taxonomy completeness) | INHERITED-WITHOUT-RE-TEST | Unaffected. |
| Q9 (/reflect mapping shape) | INHERITED-WITHOUT-RE-TEST | Independent; FF-5 (/reflect coordination on meta-reasoning) is adjacent but not within Q9's specific scope. |
| Q10 (pre-maturity emission policy) | INHERITED-WITHOUT-RE-TEST | Unaffected. |
| Q11 (demoted) | INHERITED-WITHOUT-RE-TEST | Already demoted in the correction; this inquiry doesn't reopen. |

### Prior 4 — `cognitive_harness/navigation/references/navigation.md` (canonical /navigation)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| Existing route-card schema (12 fields + wrapper) + Guidance Modes | INHERITED-WITHOUT-RE-TEST | Canonical /navigation is on-path for archive. Both proposals extend routeman's schema, not canonical's. |

### Prior 5 — `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md` (verification finding)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| 4 confirmed residuals (F1 adaptive guidance; F2 reachability; F4 REVISIT; F5 auto-vs-judgment) | RE-TESTED — F1 RELATIONSHIP DEEPENED | The adaptive-guidance residual (F1) is the load-bearing prescriptive layer that Point 2's meta-reasoning field could ground (per Q3 interaction). The other 3 residuals are unaffected. |
| 5 reductions (R1-R5) | INHERITED-WITHOUT-RE-TEST | Unaffected. |
| 3 runner-level mis-attributions | INHERITED-WITHOUT-RE-TEST | Unaffected. |

## Next Actions

### MUST

There are no MUST actions required for this finding's value to be realized. The deliverable is the recommendations; downstream consumption is the user's call.

### COULD

- **What:** Apply Point 1 and Point 2 in the eventual `cognitive_harness/routeman/SKILL.md` authoring step. Use the structural shapes recommended in sections 2 and 3 + the 4-axis content distinction table from section 4. Sequence Point 2 first or concurrent with Point 1 per section 5.
  - **Who:** the SKILL.md author (human or follow-up inquiry).
  - **Gate:** condition-bound — when SKILL.md authoring proceeds.
  - **Why:** without applying the recommendations, the design memo and the SKILL.md will not reflect the dual-adoption + the structural shapes; the failure modes routed to LAYER-2 won't be auditable.

- **What:** When applying the recommendations, optionally relabel "hybrid two-stage" to a more descriptive phrase (e.g., "two-stage with selective trigger") if "hybrid" reads as decorative in the SKILL.md context.
  - **Who:** SKILL.md author.
  - **Gate:** condition-bound — at SKILL.md authoring time.
  - **Why:** the substance is the selective-runtime trigger; the label is editorial. Use whichever phrasing the SKILL.md author prefers.
  - **Depends-on:** the SKILL.md authoring COULD above. GATED.

- **What:** When integrating the 4-axis content distinction into the schema docs, verify the table reads clearly; if cluttered, consider a 2-row summary (object vs meta) with the within-object-level structure described in prose.
  - **Who:** SKILL.md author.
  - **Gate:** at schema-doc integration.
  - **Why:** the 4-axis distinction's purpose is anti-confusion; if the table itself causes confusion, the purpose is defeated.
  - **Depends-on:** the SKILL.md authoring COULD above. GATED.

- **What:** At SKILL.md authoring time, consider consolidating open items across the design memo's deferred items + the frontier-questions finding's 9 surviving + the correction's 5 new sub-frontiers + this inquiry's 5 new sub-frontiers (FF-1 through FF-5) into a single triage document.
  - **Who:** the SKILL.md author or a follow-up consolidation inquiry.
  - **Gate:** observable — when the cross-document triage friction becomes annoying at SKILL.md authoring time.
  - **Why:** consolidation reduces the user's navigation overhead. Not required because each document's open items have clear cross-references.

- **What:** Track this finding's 5 new sub-frontiers (FF-1 through FF-5) during SKILL.md authoring. Each has a candidate resolution path:
  - FF-1 staging trigger mechanism — likely default to always-available + add an under-enumeration signal as non-blocking hint.
  - FF-2 recursion depth — defer until empirical observation justifies stage-3 invocations.
  - FF-3 hierarchical Route Map consumption — specify in SKILL.md; default to "consumers receive top-level Route Map; sub-routes read via parent-reference when needed."
  - FF-4 meta-reasoning field audit mechanism — integrate into frontier Q4 resolution inquiry.
  - FF-5 /reflect coordination — independent; cross-discipline coordination inquiry if pursued.
  - **Who:** the SKILL.md author + whoever resolves Q4.
  - **Gate:** at SKILL.md authoring + when Q4 is resolved.
  - **Why:** the 5 sub-frontiers emerge from the dual-adoption; tracking them ensures the SKILL.md addresses or explicitly defers each.

### DEFERRED

- **What:** Test pattern-portability of the LLM-operational-characteristics-as-design-input principle when a second discipline is proposed to be designed around LLM operational characteristics.
  - **Gate:** observable — when a 2nd discipline-design inquiry references the principle.
  - **Why (if revived):** N=1 is observation; N=2 would warrant promotion to project-canonical principle. Until then, the principle is named for routeman; not generalized.

## Reasoning

**Why both proposals should be adopted, not just one.** Adopting only Point 1 creates an audit gap: stage-2 sub-routes might be false-depth (minor variations rather than distinct moves), but without Point 2's per-Route meta-reasoning field, the LAYER-2 audit framework can't interrogate the sub-routes for distinctness. Adopting only Point 2 captures meta-reasoning per Route, but the stage-1-only Route Map still suffers from the LLM enumeration shortcut at the top level. The proposals address different failure modes; together they form a coherent mitigation.

**Why the hybrid two-stage shape for Point 1 over alternatives.** Eager-expansion defeats the staging purpose (the LLM shortcut returns at the large-map level). N-stage recursive default introduces an unbounded depth question that's not yet resolved. Pure two-stage without selective trigger over-produces sub-routes for routes that won't be pursued. Per-Route schema-baked flag couples the trigger decision to author-time when invocation-time is the right moment. The hybrid (two-stage mechanic + selective-runtime trigger) preserves what works without committing to unresolved depth or wasted enumeration.

**Why the required length-bounded field for Point 2 over alternatives.** Optional or conditional placements (by Guidance Mode or by Priority) create gaps that complicate cross-invocation analysis (user's use case (a) improving routeman). Aggregated-per-invocation loses per-Route granularity that the prioritization signal (use case (c)) requires. Separate log file decouples the meta-reasoning from the Route it's about; harder to audit. The required + length-bounded placement is the simplest shape that satisfies all three stated uses without inviting bloat.

**Why preserve the user's verbose name `why_this_might_be_important`.** Shorter aliases (`meta_why`; `enumeration_rationale`) lose the self-documenting explicitness of the verbose name. The user's verbose name signals what the field is FOR to any reader — including the LLM populating it. The verbose name's length is a feature in this context.

**Why the 4-axis content distinction.** The 2-axis collapse (object-level vs meta-level) is structurally true at coarser grain, but loses the within-object-level structure that already exists in routeman's design (Purpose forward; WHY backward-to-cycle; Continuation Note cross-session). The 4-axis distinction makes the existing structure explicit and adds the new meta-level axis, preventing readers from conflating the meta-reasoning field with the WHY field.

**Why sequencing matters.** Risk B (Point 1 without Point 2 audit gap) is structurally real. The sequencing is recommendation, not enforcement; the user can ship in any order. But surfacing the risk lets the user make an informed choice.

**Why LAYER-2 routing for the failure modes.** Both false depth and filler reasoning are identity-eroding failure modes (per /surfacing's LAYER-1 vs LAYER-2 framework): they're not detectable by re-invocation (recoverable); they're detectable by behavioral audit over time (eroding); they erode routeman's intrinsic character if undetected. The LAYER-2 framework is the natural home; the audit's specific design is Q4's responsibility.

**Why the LLM-operational principle is named for routeman but not generalized.** The user explicitly identified LLM operational characteristics as a structural design input ("this is sth we should be aware of"). Naming the principle preserves the signal for downstream readers. Pattern-portability deferral to research frontier (N≥2 gate) follows the not-a-trump-card warning from finding 56's strengthened diagnostic — vocabulary alone doesn't authorize action; the diagnostic still applies per sub-claim.

**What could be wrong.** The strongest prosecution against the recommendation: dual-adoption with structural shapes + 4-axis distinction + sequencing + audit-routing is more committed than the user's "lets discuss" framing requested. The defense: discussion + structured recommendation is the standard MVL output; the user can reject any or all of the recommendations. Each is reversible.

## Open Questions

### Monitoring

- **Whether the LLM-operational-characteristics-as-design-input principle generalizes to other disciplines.** Observable when (and if) a second discipline-design inquiry references the principle. If the principle applies cleanly to the second case, it earns N=2 grounding and may be promoted to project-canonical.

- **Whether the false-depth failure mode (Point 1) materializes in practice after routeman ships.** Observable in stage-2 invocations: do the 10-20 sub-routes show structural distinctness, or do they cluster as minor variations? If false depth is consistently observed, the audit mechanism (frontier Q4) becomes urgent.

- **Whether the filler-meta-reasoning failure mode (Point 2) materializes in practice.** Observable in the meta-reasoning field across many invocations: does the LLM anchor in specific cycle-content signals, or does it produce generic filler? If filler is consistently observed, the LAYER-2 audit (Q4) must include the recognition signals named in this finding.

- **Whether Point 2's field becomes the substrate that resolves Q3.** Observable when Q3 is being resolved: does the resolution use the meta-reasoning field's content as the anchor source for Guidance Pointer WHYs? If yes, the dual adoption creates significant downstream simplification.

### Blocked

- **The specific operational design of the LAYER-2 audit's filler-meta-reasoning check and false-depth check.** Blocked until frontier Q4 is resolved. This finding contributes the recognition signals; Q4 designs the audit infrastructure.

- **The exact triggering mechanism for stage 2 (always-available vs under-enumeration signal vs explicit parameter vs hybrid).** Blocked until SKILL.md authoring time. FF-1 sub-frontier.

### Research Frontiers

- **Pattern-portability of LLM-operational-characteristics-as-design-input principle** across other disciplines. N=1 now; promotion to project-canonical at N=2.

- **Whether routeman should support stage-3 or deeper invocations** (recursion beyond two-stage). FF-2 sub-frontier; deferred until empirical observation justifies.

- **Whether routeman's meta-reasoning field should coordinate with /reflect's process-quality observations** at all, or whether they should remain independent. FF-5 sub-frontier.

### Refinement Triggers

- **If the user pushes back on the dual-adoption recommendation** (preferring only one), the inquiry's adopt-both recommendation reopens for re-adjudication. The risk acknowledgments (Risk B audit gap; Risk C enumeration gap) become the structural argument the user weighs.

- **If the 4-axis content distinction causes reader confusion** rather than preventing it in practice, the distinction may be simplified to 2-axis (object vs meta) with the within-object-level structure described in prose. The verbose name `why_this_might_be_important` may carry more of the self-documentation load.

- **If a second discipline-rename or addition uses the LLM-operational principle as a trump card** without applying the strengthened diagnostic per sub-claim, the principle's pattern-portability research-frontier status is re-opened.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Route: PURSUE-SEED on the "in-process invocation" idea that got killed.                                                                   
  ▎ Guidance pointer: "Frame the file-mediation prerequisites as positive conditions → bc the kill seed in critique.md explicitly asked 'what 
  ▎ conditions would make file-mediation work?'; the seed names the inversion routeman should pursue."                                        
                                                            
  ▎ Route: REFINE on the autonomy-register design.                                                                                            
  ▎ Guidance pointer: "Specify the read API first, write protocol second → bc critique flagged read API as the missing piece while accepting 
  ▎ the write protocol provisionally; the write protocol's shape depends on the read structure."                                              
                                                            
  ▎ Route: DEEPEN on the domain-transfer-from-manufacturing survivor.                                                                         
  ▎ Guidance pointer: "Test the specific pattern: process-vs-product maturity transition → bc critique's SURVIVE rests on this pattern (per 
  ▎ sense-making anchor SV4); deepen before generalizing to other domain transfers."      

these are okay but we are missing two thing ,  

first of all , refine, deepen etc correctly defines movement type. but there might be couple of ways to refine or deepen.  and it is extemely important important routeman uncovers all movements and enumarets all. and also consider the LLM limits and tendencies of not enumarating everything and using shortcuts, this is sth we should be aware of.  one way to encounter this is staged route mapping, where first run produces big routes and a second routeman run on one selected route gives us 10,20 more routes tied to that route etc. 


and a second thing is 


  ▎ Route: PURSUE-SEED on the "in-process invocation" idea that got killed.                                                                   
  ▎ Guidance pointer: "Frame the file-mediation prerequisites as positive conditions → bc the kill seed in critique.md explicitly asked 'what 
  ▎ conditions would make file-mediation work?'; the seed names the inversion routeman should pursue."      
maybe we need "why_this_might_be_important" field , where LLM can elaborate it's reasoning on enumarating this route? this can be both used for improving the routeman and also general loop and also help with priotizing things maybe


lets discuss these 2 points
```

</details>
