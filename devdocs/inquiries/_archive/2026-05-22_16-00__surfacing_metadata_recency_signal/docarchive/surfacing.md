# Surfacing — Metadata-Recency Addition to /surfacing

## User Input

The inquiry's purpose, derived from `_branch.md`:

> What addition to the surfacing runtime spec — at what exact location — would let surfacing use file last-edit-datetime (mtime) metadata as a signal during territory traversal, while protecting against (a) treating "old" as "idle" AND (b) silently down-weighting older items, such that existing behavior is enriched rather than regressed?

## Mode + Entry Point

- **Territory-type mode:** `artifact` (concrete spec files exist).
- **Entry point:** `signal-first` (specific purpose given — add mtime to surfacing).
- **Territory specification:** `explicit-bounded`.
  - Primary: `cognitive_harness/surfacing/references/surfacing.md` (the surfacing runtime spec — the artifact being changed).
  - Adjacent (closely related conventions): `cognitive_harness/surfacing/SKILL.md` (runtime entry-point frontmatter); `docs/discipline_rule_placement.md` (placement convention for rule additions); `docs/step_refinement.md` (4-element rule shape primitive); `docs/discipline_taxonomy.md` (taxonomy + primitive profile; Surfacing is Core); `docs/thinking_space_dynamics.md` (typed 11-primitive set Surfacing composes from); `docs/runtime_environment/folder_based.md` (how the runtime artifacts surfacing operates over are organized).
  - Out of territory (NOT surfaced for this inquiry): institutional-memory locations (`docs/discipline_design_history/for_surfacing.md` does not yet exist, and per the "Disciplines self-contained" rule the runtime spec must not pointer out to it); the SIC-loop runners (`/MVL`, `/MVL+`, `/MVL2+` are downstream consumers of surfacing's output, not in surfacing's spec territory).

## Boundary-discovery Sub-phase

Skipped. Territory is `explicit-bounded`.

## Traversal Trace

| # | Region | Item identifier(s) | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | surfacing.md §1.1 | `verb-meaning: draw items + tag relevance; "without yet ascribing stable conceptual structure"` | core | HIGH | mtime is NOT conceptual structure — it's a per-item annotation; admissible under the verb-meaning without redefinition |
| 2 | surfacing.md §1.3 | `NOT-list entry: Evaluation of items for correctness or quality — "relevance is purpose-conditioned; correctness and quality are content-conditioned"` | core | HIGH | mtime is ORTHOGONAL to both relevance AND content-quality; this is a third orthogonal axis — the addition must say so explicitly so the NOT-list isn't accidentally violated |
| 3 | surfacing.md §1.3 | `NOT-list entry: Items beyond what is present (or candidate-present) in the territory — "surfacing's verb is draw from"` | sub | HIGH | mtime is a property of items that ARE present; doesn't expand the territory; safe |
| 4 | surfacing.md §1.4 | `Vocabulary: relevance tag (core/sub/side/umbrella); relevance confidence (HIGH/MEDIUM/LOW)` | core | HIGH | the per-item output currently has TWO fields (tag + confidence); the addition's natural shape is a THIRD per-item field (recency annotation) so the schema stays per-item-additive |
| 5 | surfacing.md §2.1 | `Six Traversal components: Scope-determination, Item-enumeration/generation, Relevance-attribution, Coverage-tracking, Absence-detection, Output-shaping` | core | HIGH | mtime read happens during Item-enumeration (the discipline already touches the file to enumerate it); annotation emission happens during Output-shaping; no NEW component required |
| 6 | surfacing.md §2.3 | `Relevance-attribution mechanism — 5 per-item steps: Receive / Match / Tag emission / Confidence assignment / Uncertainty handling. "Tag emission" produces ONE of {core, sub, side, umbrella}` | core | HIGH | the tag itself stays content-driven. Adding mtime AS the tag would conflate; adding mtime ALONGSIDE the tag preserves the mechanism. The addition must be EXPLICIT about this separation |
| 7 | surfacing.md §2.3 | `Eight structural properties distinguishing relevance-attribution from sense-making's anchor-extraction: Operation scope = per-item; Output shape = per-item tag; Granularity = labeling, "does this bear on the purpose?"` | core | HIGH | mtime annotation is per-item labeling — same scope/shape/granularity as the existing tag. The addition fits the operation's identity |
| 8 | surfacing.md §2.4 | `Primitive composition: Attention-pointer, Working Memory, Salience, Intuition-similarity, Context-framing, Inhibition, Metacognition, Focus-deep. Three deliberately absent: Simulation, Evaluation-as-multi-axis-ranking, Motivation` | sub | HIGH | mtime is a deterministic file-system fact; no new primitive needed. It composes with the Attention-pointer / Working Memory primitives already in use |
| 9 | surfacing.md §3.4 | `Relevance-attributed Traversal default ordering: Scope-determination → Item-enumeration → Relevance-attribution → Coverage-tracking → Absence-detection → Output-shaping` | sub | MEDIUM | mtime read fits inside Item-enumeration with no new step needed; could be made explicit there as a "capture mtime alongside item identifier" sub-step |
| 10 | surfacing.md §4.2 | `LAYER 1 — Operational failure modes: 7 modes (Missed-relevance, Surfaced-irrelevance, Over-coverage, Territory-mis-binding, Workspace overload, Artifact under-specification, Workspace-artifact desync)` | core | HIGH | the user's two regression risks (old-equals-idle; silent down-weighting) are NEW failure modes that don't fit any of the 7; they need their own entries here |
| 11 | surfacing.md §4.3 | `LAYER 2 — Identity failure modes: Interpretive-overstep, Purpose-loss, Self-coupling-to-downstream` | side | MEDIUM | the LAYER 2 mode "Self-coupling-to-downstream" has structural parallel: a "Self-coupling-to-metadata" mode could appear (calibration depends entirely on mtime). Currently judged side-relevant because identity-erosion bar is high — needs more evidence than two design failure modes |
| 12 | surfacing.md §4.4 | `Asymmetric-failure principle: "Missing a relevant item is structurally worse than surfacing an irrelevant item" — false-negative is information-loss-in-the-dark; lean toward INCLUSION under uncertainty` | core | HIGH | DIRECT match to the user's "old ≠ idle" concern. Filtering by mtime creates false-negatives — which the asymmetric-failure principle already rejects. The new failure modes inherit this rationale verbatim |
| 13 | surfacing.md §4.5 | `Coverage criteria: territory-bounded traversal + uncertainty-includes filtering` | sub | HIGH | the stop-rule does NOT permit mtime-based filtering at convergence — already protective; the addition must respect this |
| 14 | surfacing.md §5.4 | `Traversal Trace schema fields: Sequence ordinal, Region, Item identifier(s), Per-item relevance verdict, Per-item confidence, Step note` | core | HIGH | natural place for a NEW per-trace-entry field "Per-item recency annotation" |
| 15 | surfacing.md §5.5 | `State Summary schema: Coverage map, Confirmed-absent regions, Concept-names list, Frontier flags, Workspace-populated status` | sub | HIGH | natural place for a NEW derived field "Recency distribution across surfaced inventory" — derived from the per-trace-entry annotations |
| 16 | surfacing.md §5.6 | `Telemetry: Mode, entry point, cycles run, items enumerated, items tagged at each relevance level, sub-phase fired, convergence criteria status, workspace-overload trigger, failure modes checked, self-assessment verdict` | sub | MEDIUM | could report aggregate "items with recent / aged / ancient mtime, items with no mtime available" alongside the existing relevance-level counts |
| 17 | docs/discipline_rule_placement.md | `Placement convention: Operation-or-Step-First with Scope-Of-Application. Category 1 = operation-level → Component section. Category 2 = step-level → Process Model step. Category 3 = failure-only-form → Failure Mode prevention. More specific scope wins` | core | HIGH | governs WHERE the addition goes. mtime-capture applies to ALL instances of Item-enumeration (operation-level → Component §2.1). The two new failure modes have positive forms (signal capture + reporting), so they're NOT failure-only-form; they live at Component too, with cross-references from Failure Mode entries |
| 18 | docs/step_refinement.md | `Step Refinement: 4-element shape — Name + Trigger + Required Action + Typed anchor-link. Two subtypes: failure-anchored (cites named failure mode) vs coverage-anchored (cites structural completeness). Three forms: Form 1 standalone bolted-on, Form 2 scattered/orphaned, Form 3 absorbed-into-spine. Visual marker: italic prefix` | core | HIGH | the addition should land as Step Refinement(s) — Form 1 with visual marker, failure-anchored to the two new failure modes |
| 19 | docs/discipline_taxonomy.md | `Surfacing is Core. Distinct primitive profile must be preserved. Pipeline-sequential — runs at upstream loop step` | side | MEDIUM | mtime addition does not change the taxonomy slot; recorded for non-regression check |
| 20 | docs/thinking_space_dynamics.md | `Typed 11-primitive set; surfacing's load-bearing primitives are 8 from §2.4. Three deliberately absent (Simulation, Evaluation-as-multi-axis-ranking, Motivation)` | side | MEDIUM | mtime addition introduces NO new primitive — recorded for non-regression check; the addition composes via the existing primitives (Attention-pointer reads the metadata along with the item; Working Memory holds it) |
| 21 | docs/runtime_environment/folder_based.md | `Inquiry folder convention; `_state.md` carries `## History` — mtime of project files is filesystem-derived` | umbrella | LOW | reference for the fact that mtime is filesystem-observable for project artifacts |
| 22 | surfacing.md §1.4 | `Vocabulary entries: item / territory / purpose / workspace / artifact / relevance tag / relevance confidence — 7 entries` | sub | MEDIUM | adding an 8th vocabulary entry (a name for the recency annotation) keeps the vocabulary section accurate; candidate name: "recency annotation" or "item-mtime annotation" |
| 23 | surfacing.md §2.4 (deliberately-absent list) | `Three primitives deliberately absent: Simulation; Evaluation-as-multi-axis-ranking; Motivation — each justified` | umbrella | LOW | no new primitive admitted; the deliberately-absent list need not change |
| 24 | surfacing.md §3.6 | `Re-invocation as parameterized variation; prior-artifact is always available across invocations` | side | LOW | mtime annotation should be a DURABLE field on the artifact (carries across invocations), not session-local; relevant when specifying schema location |

**Items surfaced:** 24. **Workspace populated:** items 1–24 are now in present attention with explicit relevance tags.

## State Summary

### Territory specification echo

Surfacing runtime spec (`cognitive_harness/surfacing/references/surfacing.md`) plus closely-related conventions (placement convention, step refinement primitive, primitive set, taxonomy, folder runtime environment).

### Purpose specification echo

Identify items in the territory that constrain WHAT to add for mtime-awareness to the surfacing discipline AND WHERE the addition should be placed in the spec, while preserving the two anti-regression invariants (old ≠ idle; recency does not down-weight).

### Coverage map

| Region | Coverage |
|---|---|
| surfacing.md §1 (Identity) | confirmed |
| surfacing.md §2 (Components) | confirmed |
| surfacing.md §3 (Process Model) | confirmed |
| surfacing.md §4 (Quality / failure modes) | confirmed |
| surfacing.md §5 (Output) | confirmed |
| surfacing.md "Execute" instructions block | scanned-but-shallow (no new instructions needed; numbered steps stay; sub-step potentially added under §3.4 ordering) |
| SKILL.md frontmatter | scanned-but-shallow |
| Placement convention | confirmed |
| Step Refinement primitive | confirmed |
| Discipline taxonomy | confirmed (non-regression check) |
| Primitive set | confirmed (non-regression check) |
| Folder runtime environment | scanned-but-shallow |

### Confirmed-absent regions

None. Every region of the surfacing spec yielded at least one item relevant to the addition.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| `mtime` | vocabulary | trace #5, #14 | filesystem last-modified-time of an item; deterministic, machine-readable |
| `recency annotation` | coined-term | trace #4, #14, #22 | candidate name for the new per-item field carrying mtime-derived information |
| `recency-equates-idleness` | coined-term | trace #10 | candidate name for the failure mode "treating mtime-old as relevance-low" |
| `recency-bias-filter` | coined-term | trace #10 | candidate name for the failure mode "silently down-weighting items by mtime" |
| `recency distribution` | coined-term | trace #15 | candidate name for the derived State Summary field aggregating mtime annotations |
| `metadata-as-signal-not-verdict` | coined-term | trace #6, #12, #17 | structural principle: metadata enriches per-item annotation; never replaces or filters the relevance tag |
| `orthogonal axis` (third axis after content-correctness and purpose-relevance) | structural-reference | trace #2 | the metadata-recency channel is orthogonal to both existing axes; must be named explicitly to prevent NOT-list violation |
| `Item-enumeration sub-step` | structural-reference | trace #5, #9 | the §2.1 component where mtime read happens (no new component) |

### Frontier flags

| Sub-region | Open question for downstream |
|---|---|
| LAYER 2 identity failure modes | Is "Self-coupling-to-metadata" a new LAYER 2 mode, or does it stay subsumed by "Self-coupling-to-downstream"? Tagged side; not load-bearing for the primary addition |
| Telemetry section §5.6 | Should aggregate recency stats be reported by default, or only when mtime is available? Implementation detail, downstream-decidable |
| Re-invocation §3.6 | When a re-invocation occurs and an item's mtime has changed since the prior artifact, what's the right behavior — update annotation or preserve historical? Edge case; defer |

### Recency observation on the territory itself

Recency-aware traversal of the surfacing.md spec itself: file last-modified is on the order of "this week" per the project's git activity. The spec is freshly authored (per git log entries in recent days). This is itself first-order evidence that recency-as-relevance would be WRONG — the spec just landed, so by mtime alone it would dominate every relevance ranking. The "old ≠ idle" caveat is real and present.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-22T16:00
extent: 24 items across 7 spec regions; coverage confirmed in 5 of 7 regions; 2 scanned-but-shallow
```

### Re-invocation parameters

Not requested. Single-invocation traversal is sufficient at this resolution.

## Telemetry

- **Mode:** artifact + signal-first
- **Cycles run:** 1
- **Items enumerated:** 24
- **Items tagged at each relevance level:** core = 11, sub = 7, side = 3, umbrella = 3
- **Sub-phase fired:** no (territory was explicit-bounded)
- **Boundary-discovery output:** N/A
- **Convergence criteria status:**
  - Territory exhaustively traversed at current resolution: YES
  - No item filtered at uncertain-relevance level: YES (umbrella tag used for the 3 low-confidence inclusions)
  - Items rejected only on HIGH-confidence rejection: YES
- **Workspace-overload trigger:** not fired
- **Failure modes checked:** Missed-relevance (no signal), Surfaced-irrelevance (3 umbrella tags retained per asymmetric-failure principle), Over-coverage (no), Territory-mis-binding (no), Workspace overload (no), Artifact under-specification (no — all required fields present), Workspace-artifact desync (no — capture-at-moment honored)
- **Self-assessment verdict:** PROCEED

## Self-Assessment

**PROCEED.** All convergence criteria met. The workspace is populated with 24 items relevant to the design question; the artifact carries the full Traversal Trace and State Summary. Downstream sensemaking has sufficient material to construct stable anchors around (a) the operational identity of the addition, (b) the structural placement of the addition, and (c) the anti-regression mechanism.
