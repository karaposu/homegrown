---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md
---
# Finding: Inquiry Elaboration — Structure with Recent Context (refining 09-54 by adding a third anchor)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md`.

**Revision trigger:** the user asked to redo the structural design and *also* consider **recent-context rephrasing** as an addition to project-goal rephrasing and simple rephrasing. The 09-54 design had two inputs (project_goal + original_query) and treated the rephrasing-against-the-goal as a justification field (`why_makes_sense`); the user's three-peer framing of *project-goal rephrasing + simple rephrasing + recent-context rephrasing* reveals a missing input (recent context) and a cleaner output grouping.

**What's preserved:** every 09-54 commitment — self-containment (zero discipline-naming), output-organized spec, intrinsic NOT-list, the perception/action split, the upper bound stated intrinsically as `over-reach`, the dropped+re-homed reference-authority audit, the editor-brief image, scope versions, multi-request handling with `how_connected_with_other_part`, and the intrinsic failure modes (now generalized, not replaced).

**What's added:**
- **A new input:** `recent_context` — the inquiry's immediate surround, defined intrinsically by *currency* and *role*, source-agnostic.
- **A new output:** `rephrase_in_recent_context` — the inquiry restated in light of recent context.
- **A §1 sub-section: "Anchors and temporal layering"** — three anchors at three temporal scales (long-term / short-term / inquiry-itself), the principled frame that makes the addition non-ad-hoc.
- **A new §4 failure mode:** `anchor-imbalance` — content-leakage where one anchor's content fills another anchor's rephrasing (distinct from anchor-detachment).
- **A graceful-degradation convention:** if an anchor's input is empty, the corresponding rephrasing is replaced by an "anchor not supplied" marker rather than fabricated.

**What's renamed (semantic content preserved):**
- `why_makes_sense` → `rephrase_in_project_goal`. A rephrasing grounded in an anchor naturally carries its why-it-makes-sense; the user's parallel framing of three peer rephrasings treats them as one act, and merging the labels honors that.
- `goal-detachment` (§4) → `anchor-detachment` (now fires per anchor, generalized — not replaced).

**Migration for 09-54 readers:** any 09-54 reference to `why_makes_sense` maps 1:1 to `rephrase_in_project_goal`. Other 09-54 fields are unchanged in shape and semantics.

## Question

The user asked to redo the IE structure (settled at the meaning layer; the 09-54 self-contained, output-organized design was the prior reconciled answer) and *this time also consider recent-context rephrasing* as an addition to project-goal rephrasing and simple rephrasing. The structural question: what does the refined IE design look like with **recent context** added as a third input alongside *project goal* and *original query*, with a corresponding **recent-context rephrasing** added alongside the simple and project-goal-grounded rephrasings — preserving every 09-54 commitment (especially self-containment), and giving the addition a principled frame so it isn't just bolted on?

## Finding Summary

- **The refinement has a principled frame: three anchors at three temporal scales.** Inquiry elaboration grounds the inquiry against three anchors, each sitting at a different temporal scale: the **project goal** (long-term — what stays standing across many inquiries), **recent context** (short-term — what is currently in active focus), and the **original query** (the inquiry itself). The discipline produces a rephrasing per grounding. This layering is what makes the user's "recent context as an addition" principled rather than ad-hoc.

- **The schema gains exactly what was needed and nothing more:** one new input (`recent_context`), one new output (`rephrase_in_recent_context`), one renamed output (`why_makes_sense` → `rephrase_in_project_goal`, content preserved), one new §4 failure mode (`anchor-imbalance`), one generalized §4 mode (`goal-detachment` → `anchor-detachment`), and a one-paragraph §1 sub-section that names the temporal layering.

- **The rename is driven by the user's own framing.** The user grouped "project-goal rephrasing + simple rephrasing + recent-context rephrasing" as parallel peers. The 09-54 design had treated rephrasing-the-inquiry and justifying-the-inquiry-against-the-goal as separate things; here they collapse into one act per anchor — a rephrasing grounded in anchor X *intrinsically* makes the why-it-makes-sense relative to X visible. The renamed `rephrase_in_project_goal` honors the user's framing and merges rephrase+justify into a single field per anchor.

- **Recent context is defined intrinsically and stays source-agnostic.** *Currency* (what is in active focus, distinct from the long-term ambient goal that stays standing) and *role* (the inquiry's immediate surround — what has just been discussed, decided, or produced around the query, not the query itself) together define it. The supplier is external to the discipline; the spec does not name a session, a conversation history, or any specific component.

- **Two output families, not a flat list of rephrasings.** *Anchor-grounded rephrasings* (one per grounding: simple — the no-anchor base; in-project-goal — the long-term grounding; in-recent-context — the short-term grounding). *Emphasis variants* (foregrounding a facet of the inquiry itself: scope-highlighted; importance-highlighted). The families are orthogonal — the anchor family answers *"in light of what?"*, the emphasis family answers *"foregrounding what?"*.

- **§4 grows by one and generalizes one.** `anchor-detachment` (generalized from 09-54's `goal-detachment`) fires per anchor: a `rephrase_in_X` that doesn't actually reference X — a content-empty failure (an X-shaped hole). `anchor-imbalance` (new) fires across anchors: one anchor's content silently fills another anchor's rephrasing — a content-leakage failure (X's anchor displaced by Y's content). The two have different correctives, which is why they get separate names.

- **The family is open to extension without restructure.** If a future anchor is admitted (e.g., a future-pointed "desired outcome" anchor), it joins the anchor-grounded family as a fourth member with the same shape — no restructuring of the schema or the §4 failure modes (anchor-detachment and anchor-imbalance already generalize across N anchors). The temporal-layering frame is the right level of abstraction for this kind of future-proofing.

- **The unifying image strengthens with the third anchor:** a commissioning editor writing a brief reads the publication's **mission** (long-term anchor — project goal) **and** "what's been in the air lately" (short-term anchor — recent context) **and** the **pitch itself** (the inquiry — original query) before writing the brief. The editor never writes the article, fact-checks the sources, or critiques drafts (the over-reach upper bound from 09-54 holds).

- **Status:** the refined design **survived** adversarial critique as one coherent whole, with no kills. Three authoring-level REFINEs from Critique are applied in the §5 spec text below: (R-x) source-agnostic wording — "the surrounding orchestration layer" instead of any specific component name; (R-y) sharpened anchor-imbalance vs anchor-detachment wording with differential correctives; (R-z) explicit graceful-degradation marker for empty anchor inputs.

## Finding

### Why a third anchor, and why a principled frame

The 09-54 design served two inputs (project_goal + original_query) and produced a set of rephrasings + scope versions + multi-request handling. The user added a single concrete observation: rephrasings should also be available *against recent context*, not only against the project goal. Taken at face value that is one new field. Taken structurally — which is what a discipline spec demands — it reveals a missing input (where does recent context come from if it's never declared?) and a missing organizing principle (why these two anchors, and not also recent context, or future intent?). Naming the structural principle is the cheap durable fix: three anchors sit at three different temporal scales, and the schema is organized to make that layering visible. New anchors that fit a temporal scale can join the family; anchors that don't (e.g., role-anchors, audience-anchors) would force a separate axis. The principle is permissive but not unbounded.

### Why rename rather than add a fourth field

The 09-54 design treated `why_makes_sense` as a justification: "why does this inquiry make sense given the project goal?" The user's phrasing — "project goal rephrasing" — treats it as a rephrasing-of-the-inquiry-in-light-of-the-goal. Both readings can be true at the same time, because a rephrasing grounded in an anchor intrinsically makes the why-it-makes-sense visible: stating the inquiry as it serves the goal *is* the justification. Splitting them into two fields per anchor (`rephrase_in_project_goal` + `why_makes_sense_in_project_goal`) would double the schema for no semantic gain. So the cleanest move is to rename `why_makes_sense` to `rephrase_in_project_goal`, treat it as the long-term anchor's grounding-rephrasing, and let `rephrase_in_recent_context` be its short-term peer. The semantic content of the prior field is preserved; the label changes to honor the user's framing and the merged rephrase+justify reading.

### Why two output families instead of a flat list

Once `rephrase_in_recent_context` is added, the §5 output has five rephrasing-shaped fields: simple, in-project-goal, in-recent-context, scope-highlighted, importance-highlighted. Treated as a flat list, the schema feels arbitrary (why these five?). Grouped into two families, the structure is principled: the *anchor-grounded* family answers "in light of what?" (no anchor / project goal / recent context); the *emphasis-variants* family answers "foregrounding what?" (scope / importance). The two axes are orthogonal — an anchor-grounded rephrasing can in principle be combined with an emphasis variant, though the design does not require it. The grouping also makes the schema's growth path explicit: adding an anchor adds an anchor-grounded family member; adding an emphasis adds an emphasis-variant family member. Authors editing the spec later won't have to argue about where a new field goes.

### Why two failure modes, not just one generalization

The 09-54 design had `goal-detachment`: a `why_makes_sense` that doesn't actually reference the project goal. With three anchors, the natural move is to generalize this to `anchor-detachment`: a `rephrase_in_X` that doesn't reference X. That much is mechanical. But there's a second, distinct failure that only becomes visible with multiple anchors: one anchor's content silently filling another anchor's rephrasing. `rephrase_in_project_goal` and `rephrase_in_recent_context` could both be populated and both echo the project goal's content — neither is detached (each has content), but the recent-context grounding has been smothered. That's `anchor-imbalance` — a different failure with a different corrective. Detachment's corrective is to *re-ground* the empty rephrasing in its named anchor; imbalance's corrective is to *re-do* the rephrasings with the recessive anchors as primary sources, breaking the dominant anchor's content-spillover. Two modes earn their place because they have different signals and different fixes.

### How "recent context" stays source-agnostic

The risk in admitting "recent context" as an input is that someone authors the spec to read: "recent context = the last N conversation turns" or "recent context = the parent inquiry's docarchive." Either move names a specific supplier — which makes the discipline's spec carry an outbound dependency on the project's ecosystem, the exact self-containment violation the 09-54 finding spent its life correcting. The way around it is to define recent context by *what it is* (currency + role) and not by *where it comes from*. Currency: it is what's in active focus right now, distinct from the project goal which is what stays standing. Role: it is the immediate surround of the inquiry — what has just been discussed, decided, or produced around the query, not the query itself. The supplier is external to the discipline; if the project's surrounding orchestration layer doesn't supply it, the corresponding rephrasing is replaced by an "anchor not supplied" marker rather than fabricated (the graceful-degradation convention from R-z).

### The refined §5 schema (authorable)

```
elaborated_inquiry:
  project_goal:                       (echo)
  original_query:                     (echo)
  recent_context:                     (echo)      # NEW input

  # Anchor-grounded family — one rephrasing per grounding (3 members)
  rephrase_simple:                    plain restatement (no-anchor base)
  rephrase_in_project_goal:           restated in light of the project goal (carries why-it-makes-sense given the long-term goal)
                                                  # renamed from 09-54 why_makes_sense; content preserved
  rephrase_in_recent_context:         restated in light of recent context (carries why-it-makes-sense given current work)
                                                  # NEW

  # Emphasis variants — foregrounding a facet of the inquiry itself
  rephrase_scope_highlighted:         restated with scope made explicit
  rephrase_importance_highlighted:    restated with importance/why made explicit

  # Scope versions — bounds on the inquiry
  scope_small:                        tight, minimal-scope version
  scope_big:                          ambitious, wide-scope version

  # Multi-request handling — conditional (only when >=2 distinct asks)
  requests:
    - request:                        one distinct ask
      how_connected_with_other_part:  how it relates to the others
      seq_or_parallel:                (optional)
```

Graceful degradation (R-z): if any anchor's input is empty (e.g., `recent_context` not supplied), the corresponding anchor-grounded rephrasing is replaced by `(anchor not supplied)` rather than fabricated — preserves the anchor-detachment-prevention principle by refusing to invent content for an absent anchor.

### The refined §4 failure modes (R-y applied)

- **drift** — a rephrasing changes the inquiry's meaning. *Recognition:* the rephrasing no longer answers the original query. *Corrective:* re-anchor to the original query.
- **flattening** — only one framing produced; the multilayered grounding is lost. *Recognition:* the simple / project-goal / recent-context flavors look the same. *Corrective:* differentiate each by its actual anchor.
- **anchor-detachment** *(content-empty; generalized from 09-54's `goal-detachment`)* — a `rephrase_in_X` doesn't actually reference X. Fires per anchor: project-goal-detachment, recent-context-detachment. *Recognition:* the anchor name is invoked but the content is generic; an X-shaped hole. *Corrective:* re-ground the rephrasing in X's content.
- **anchor-imbalance** *(content-leakage; NEW)* — one anchor's content fills another anchor's rephrasing; the multilayered grounding collapses to a single view. *Recognition:* the recessive anchor's rephrasing is populated, but with the dominant anchor's content. *Corrective:* re-do the rephrasings with the recessive anchors as primary sources, breaking the dominant anchor's spillover.
- **missed-split** — distinct asks bundled as one. *Recognition:* the query reads as compound; only one ask was elaborated. *Corrective:* re-scan for separable deliverables; list + connect.
- **over-reach** *(the upper bound, intrinsic)* — the discipline begins *answering or solving* the inquiry instead of *framing* it. *Recognition:* the rephrasings contain solution content, not framing content. *Corrective:* stop at the framing; the answer is not this discipline's output.

### The §1 temporal-layering sub-section (R-x applied)

> **Anchors and temporal layering.** Inquiry elaboration grounds the inquiry against three anchors at three temporal scales:
> - **Long-term anchor — the project goal.** What stays standing across many inquiries; the ambient direction the inquiry serves.
> - **Short-term anchor — recent context.** What is currently in active focus around the inquiry: what has just been discussed, decided, or produced and has not yet settled into long-term standing. The discipline receives recent context as an input; its source lies outside this discipline — the surrounding orchestration layer supplies it.
> - **The inquiry itself — the original query.** The unit being elaborated.
>
> Each anchor grounds a different way of seeing the inquiry. The discipline produces anchor-grounded rephrasings — one per grounding — together with emphasis variants and scope versions of the inquiry itself. The anchor-grounded family is open to extension: a future anchor that fits a temporal scale can join as a fourth member without restructuring the schema.

## Inherited Commitments Re-test

This finding refines a prior finding. Each commitment is re-tested against this run's work, not absorbed.

- **Commitment:** the reconciled, self-contained, output-organized design — inputs `{project_goal, original_query}`; outputs `{why_makes_sense, scope_small/big, three rephrasings (simple/scope-highlighted/importance-highlighted), requests[]+how_connected}`; intrinsic NOT-list; intrinsic §4 failure modes; reference-authority dropped/re-homed; editor-brief image; the "describing-work ≠ naming-a-discipline" distinction.
  - **Source:** `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md`.
  - **Re-test status:** RE-TESTED — **EVERY COMMITMENT PRESERVED.** Self-containment held throughout (Critique R-x closed the one residual leak — "runner" word in F2 — by replacing it with "the surrounding orchestration layer"); output-organized structure unchanged (now organized into two families); intrinsic NOT-list unchanged; intrinsic §4 failure modes generalized (`goal-detachment` → `anchor-detachment`) and extended (+ `anchor-imbalance`), not replaced; reference-authority still out of IE (and re-homed for the process layer); editor-brief image extended (now reading three sources, not two); the describing-work ≠ naming-a-discipline distinction held (every refined sentence checked, including the §1 sub-section's "surrounding orchestration layer" phrasing). Evidence: `surfacing.md` (Regions A/C), `sensemaking.md` (C1, K1, A6), `critique.md` (Phase-2 #1 + #7 + Coverage Map).

- **Commitment:** the settled scope — operate on the request, perceive not act; the object/mode decision rule; the upper bound `over-reach`.
  - **Source:** `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md` (indirectly inherited via 09-54).
  - **Re-test status:** RE-TESTED — **UNCHANGED.** Recent context as an anchor still operates on the request (recent context grounds the *framing* of the inquiry, not a problem model); the discipline still emits, doesn't act; the upper bound `over-reach` is preserved verbatim in §4. Evidence: `sensemaking.md` (Phase 2 / Definitional / Internal-Consistency); `critique.md` (Phase-2 #6 confirms `over-reach` survives).

- **Commitment:** discipline specs must be self-contained (no outbound pointers to other disciplines / specific external components; disciplines are individuals).
  - **Source:** project memory `feedback_disciplines_self_contained`.
  - **Re-test status:** RE-TESTED (artifact-grounded) — **OBEYED, WITH A RESIDUAL CAUGHT.** Critique R-x flagged a borderline case (the word "runner" in F2's draft definition of recent context). It is fixed in this finding's §1 text by replacing "runner" with "the surrounding orchestration layer" — a generic role-description matching the routelister §1.2 pattern. The §5 schema and §4 failure modes name no discipline; the F6 migration note references 09-54 (IE's own prior, allowed by Changes-from-Prior convention). Evidence: `critique.md` (Phase-2 #1).

All commitments re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST
- **What:** Accept or reject the refined structural design (the three-anchor temporal-layered IE with the schema, §1 sub-section, §4 failure-mode delta, and the rename migration).
  - **Who:** user.
  - **Gate:** observable — explicit response.
  - **Why:** the refinement was prompted by your addition; your acceptance closes it and unlocks the next steps.

### COULD
- **What:** Author the refined IE spec — `references/<name>.md` (§1 with the temporal-layering sub-section · §2 Components with the two-family structure · §3 Process Model reading all three inputs · §4 failure modes including `anchor-imbalance` · §5 Output with the refined schema · §6 Changes from 09-54) plus the `SKILL.md` wrapper. Apply R-x (source-agnostic wording), R-y (sharpened anchor-imbalance vs anchor-detachment), R-z (graceful-degradation marker) throughout. The wording above is the source-of-truth for these sections.
  - **Who:** user or a follow-up authoring pass.
  - **Gate:** condition-bound — acceptance + go-ahead.
  - **Why:** the design is settled; what remains is integrating the refined sections into the spec file.
  - **Depends-on:** MUST. GATED.

- **What:** When ready, spawn the **process-layer** inquiry: where IE runs in MVLw; who supplies `project_goal` and (now) `recent_context`; how staleness/freshness of recent context is handled at runtime; the exact `branch.md` rewrite; the home of the re-homed reference-authority check.
  - **Who:** future inquiry (Layer Commitment = PROCESS).
  - **Gate:** condition-bound — after the refined spec is authored, or in parallel if preferred.
  - **Why:** process wiring needs the spec shape settled, which it now is.
  - **Depends-on:** the authoring COULD. GATED.

### DEFERRED
- **What:** Evaluate whether a fourth anchor (e.g., future-pointed *desired outcome*, or session-bounded context) should join the anchor-grounded family. The family is structurally open; this is a meaning-layer question about whether the new anchor sits at a distinct temporal scale that earns its own member.
  - **Gate:** condition-bound — when project usage reveals a recurring framing gap that one of the existing three anchors cannot fill.
  - **Why (if revived):** the family pattern was deliberately designed for extension; revival is principled, not ad-hoc.

## Reasoning

The refinement adopts the user's recent-context addition exactly as asked, gives it a principled frame (the temporal-layering of three anchors at three scales), and keeps every 09-54 commitment intact — most importantly self-containment, which Critique caught as still imperfect in the draft (the word "runner" in the recent-context definition) and fixed with R-x. The rename of `why_makes_sense` to `rephrase_in_project_goal` was an Inversion-tested decision: splitting rephrasing and justification per anchor would double the schema for no semantic gain (Inversion rejected at system level), and the user's parallel framing of three peer rephrasings strongly favored the merge. The new failure mode `anchor-imbalance` earned its place by failing a prosecution: it has a distinct recognition signal (content-leakage across anchors, not content-empty per anchor) and a distinct corrective (re-do recessive anchors as primary, not just re-ground the detached one). On self-reference: this is the third structural-layer pass on the same discipline (01-37 → 09-54 → this), so the risk of accumulating false elegance is real; it is bounded by every load-bearing claim resting on a checkable prior anchor (the 09-54 commitments, the self-containment project memory, the user's literal three-peer framing) and by landing on REFINEs that are wording-level rather than restructuring — the design is stable, not still in motion.

## Open Questions

### Blocked
- The process layer (project-goal source; recent-context source; staleness handling; the exact `branch.md` rewrite; reference-authority's new home) is blocked on acceptance + the refined spec being authored.

### Refinement Triggers
- **RT1** — If, at authoring, "recent context" cannot be defined without naming a specific supplier (a session, a conversation history, a runner), the self-containment principle is in tension with the addition and the third anchor needs to be re-thought.
- **RT2** — If `anchor-imbalance` cannot be observed independently of `anchor-detachment` in real IE runs, collapse them back into one mode (the distinction will not have earned its weight).
- **RT3** — If project usage reveals a recurring framing gap none of the three anchors fill (e.g., a future-pointed gap), revisit the family for a fourth member.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets redo it the last inquiry. but this time lets also consider recent context rephrasing as an addition to project goal rephrasing and simple rephrasing
```

</details>
