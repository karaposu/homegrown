# Surfacing — routeman implementation frontier questions

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/_branch.md`

## Mode + Entry Point

- **Territory-type-mode:** `possibility`. The territory contains artifacts (the routeman design memo, upstream findings, canonical /navigation spec, taxonomy, endgame doc), but the items being surfaced are not pre-existing items to enumerate — they are candidate questions whose existence is generative from gaps + tensions + un-specified interfaces in those artifacts.
- **Entry point:** `signal-first` (purpose is explicit per `_branch.md`'s Question + Goal + Synthesis Trigger).
- **Territory specification:** `explicit-bounded`. Edges: 7 prior-output files declared in `_branch.md`'s Synthesis Trigger + 2 cross-cutting reference points (`cognitive_harness/surfacing/references/surfacing.md` for the 2-layer failure-framework lineage; the design memo's "Open Questions" + "DEFERRED" sections as the "what's already known to be open" baseline). Boundary-discovery sub-phase SKIPPED.
- **Purpose template:** items qualify as candidate frontier questions if they speak to ANY of:
  - (a) a **gap** in the design memo that isn't already flagged as a deferred item or research frontier (net-new open territory);
  - (b) an **unresolved tension** between two design commitments;
  - (c) an **un-specified interface or invariant** the design implies but doesn't operationalize;
  - (d) a **downstream-discipline-interaction** (runner / neighbor / consumer) the meaning-layer design didn't address;
  - (e) an **empirical assumption** that needs validation before commitment.

  Items DO NOT qualify (and should be surfaced as side-relevant with reason) if they are:
  - Simple consequences of the design memo with no implementation-gating impact (trivial);
  - Already explicitly deferred-with-path in the design memo (these are on-the-path, not frontier);
  - Already named as research frontiers in the design memo (already-flagged, not net-new).

  The relevance gradient: **core** = clearly gating implementation; **sub** = related to a core question but smaller in scope; **side** = background tension surfaced for completeness; **umbrella** = uncertain whether it gates implementation.

## Traversal Trace

Capture-at-moment per §2.1 Output-shaping. Each entry: ordinal, region (with sub-region identifier), item identifier(s) only (no full content — questions are sketched at frontier-candidate level; the full question text is Innovation's job), per-item tag + confidence + brief step note.

| # | Region | Item identifier (candidate frontier question) | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | Identity → autonomy-context detection | "How does routeman detect/access the project's current autonomy level at invocation time?" | core | HIGH | The identity sentence references "the project's current autonomy level" but no mechanism exists today for a discipline to read the level. Gates F-autosplit's runtime behavior. |
| 2 | Identity → paradigm composition | "When does Navigational compose with Possibility paradigm (for generative moves), and what's the trigger?" | sub | MED | Composition rule from mapping framework permits this; the design memo flagged it without specifying the trigger. Smaller scope than Q1. |
| 3 | Identity → layer ordering | "Are the 3 identity layers ordered at runtime, or simultaneous?" | side | LOW | Mostly a structural-layer concern; not implementation-gating at MEANING layer. Tagged side because not net-new frontier — implicit in the design's "layers don't sequence; they describe identity from different angles." |
| 4 | Endgame fit → multi-head handoff | "Under multi-head architecture, does routeman re-invoke per parallel head (producing N Route Maps), produce ONE shared Route Map consumed by all heads, or some other handoff shape?" | core | HIGH | EF-1 commits to multi-head compatibility but doesn't specify the handoff mechanism. Gates output-shape semantics under multi-head and the per-head vs shared invocation contract. |
| 5 | Endgame fit → mid-ladder partition operation | "How does the 12/4 auto-vs-judgment partition operate at autonomy ladder mid-points (L1 reviews-all-self-modifications; L2 reviews-uncertain-only; L3 sets-strategic-direction), as opposed to the L0/L4 endpoints?" | core | HIGH | EF-2 commits to L0-L4 positioning but the partition's behavior at intermediate levels is unspecified. Gates calibration of the auto-derivable side as the project advances. |
| 6 | Endgame fit → EF-3 pattern-portability criterion | "What concrete observable makes rename-as-design-act 'apply cleanly' to a second discipline-rename case, sufficient to promote EF-3 from candidate-load-bearing to load-bearing?" | core | MED | EF-3's promotion test is named but the criterion is informal ("if the methodology applies cleanly"). Gates whether EF-3 is testable in practice or remains rhetorical. |
| 7 | Lineage → taxonomy completeness | "Is the 16-type movement-type taxonomy structurally complete (closed set), or should routeman accommodate type emergence at runtime (growable set)?" | core | HIGH | Inherited verbatim from canonical /navigation; canonical assumed completeness without testing. The design memo inherits the assumption. Gates whether route-cards permit type values outside the 16. |
| 8 | Lineage → Discipline Contract content | "What invariants does the new explicit Discipline Contract section (lineage refine L-r3) commit to beyond input/output shape?" | sub | MED | L-r3 was introduced by the design's Innovation step but its content is sketched, not specified. Sub-relevance because the L-r3 follow-up will likely settle this; not maximally hard. |
| 9 | Features → F-prescr generation mechanism | "What's the generation mechanism for adaptive guidance pointers (each pointer has a WHY) — LLM-direct, derived from specific cycle-output content, projected from /intuit hunches, or something else?" | core | HIGH | F-prescr (the prescriptive layer that distinguishes routeman from descriptive labelers) is named as a feature but the mechanism for producing prescriptive content is unspecified. Gates the load-bearing residual's operationalization. |
| 10 | Features → F-seed input shape | "How does the corpus_limit_seeds input from /intuit Phase β+ shape into routeman's input contract — same Route schema, separate seed-type sub-section, NEW-INQUIRY-SEED items per taxonomy Boundary-notes?" | sub | MED | Partially overlaps with the deferred primitive-composition item (L-f1) but the specific input-shape is open and separate from primitive-profile work. |
| 11 | Attributes → Continuation Note persistence | "How does the per-route Continuation Note (what a future warm-up should remember about this route) get loaded by a future agent across sessions without violating the discipline self-containment principle (no outbound pointers to design-history)?" | core | HIGH | The Continuation Note implies cross-session memory but the persistence mechanism is unspecified. The discipline-self-containment principle constrains how routeman's spec can reference external state. Gates the cross-session memory mechanism. |
| 12 | Attributes → guidance pointer WHY anchor | "What anchors a guidance pointer's WHY (the per-pointer rationale) — a specific cycle output element, a telemetry signal, project context, a prior finding, or something else?" | sub | MED | Sub-aspect of Q9 (the F-prescr generation mechanism). Anchored WHYs are required by the design (per L2-B identity-eroding mode); the anchor's source is unspecified. |
| 13 | Failure framework → LAYER-2 audit cadence + runner | "Who runs the LAYER-2 identity-erosion audits, at what cadence, and what triggers the audit? The discipline itself can't reliably self-audit identity-erosion (per /surfacing's failure-mode framework warning about self-coupling)." | core | HIGH | LAYER-2 modes are detectable via behavioral audit over time, but no audit mechanism is specified. Gates whether LAYER-2 modes are operationalizable at all. |
| 14 | Failure framework → L2-A threshold calibration | "Is the '5 consecutive invocations' threshold in L2-A calibrated to the project's actual invocation rate? At L0 the rate may be 1/day; at L4 many/hour. Should the threshold adapt?" | sub | MED | Sub-aspect of Q13. Specific calibration question. |
| 15 | Runtime integration → runner-discipline contract | "What's the explicit contract between the runner (/MVL, /MVLw) and routeman at invocation time — how does the runner pass cycle output, what shape does routeman emit to signal completion, what happens on partial failure?" | core | HIGH | The discipline-vs-runner boundary is canonical per finding 58, but the operational contract between them is unspecified for routeman. Gates runner integration. |
| 16 | Runtime integration → selection-step ownership | "At what point in the SIC loop does the selection step run (the step AFTER routeman's enumeration that picks one or more directions), and under multi-head, who/what runs the selection?" | core | HIGH | The R→N→Select flow is canonical, but selection's runtime owner is unspecified for routeman. Gates how the auto-vs-judgment split is operationally exercised (the system handles auto types — but at which step? routeman's invocation? a downstream step?). |
| 17 | Migration → incoming-reference cleanup | "What incoming references (in archived findings, in install scripts, in other discipline specs, in `docs/discipline_taxonomy.md`'s tables, in the memory system) cite /navigation by name, and what's the update plan?" | sub | MED | Operationally important for the archive step but lower frontier-level than design-gap questions. |
| 18 | Coupling → /reflect → routeman operational mapping | "What is the operational mapping from /reflect's process-quality observations to routeman's guidance pointers — direct one-to-one, aggregation, filtering, or a transformation rule?" | core | HIGH | Partially overlaps with the deferred /reflect coupling item (L-f2) but the specific mapping is open and the deferral didn't specify the mapping shape. Per canonical /navigation: "R's observations become N's guidelines" — but how? |
| 19 | Coupling → cycle-output shape constraints | "What shape constraints does routeman implicitly require on /sense-making, /innovate, /td-critique outputs (the cycle output that becomes routeman's input)? Are the constraints documented or invariants?" | core | HIGH | The cycle-consumer process position depends on the input being shape-conformant. Today the upstream disciplines don't have explicit output contracts that routeman could rely on. Gates the cycle-consumer commitment's operational integrity. |
| 20 | Calibration → telemetry consumer + feedback loop | "Who consumes routeman's telemetry (10 metrics), and how does it feed back into spec calibration? Is there a project-level dashboard? Does /reflect consume it? Does it close the Baldwin cycle?" | core | MED-HIGH | Telemetry is emitted but the feedback loop's other half isn't specified. Gates whether telemetry is informative or theatre. |
| 21 | Endgame conditional → INVESTIGATE FRONTIER + REVISIT pre-maturity | "Are INVESTIGATE FRONTIER and REVISIT movement-types disabled when calibration maturity (N<30 inquiries per discipline per `docs/desc.md`) hasn't been reached, or always emitted with appropriate confidence labels? The Baldwin-cycle's seed-generation maturity gate intersects with these types." | core | HIGH | The Baldwin-cycle maturity gate vs routeman's enumeration completeness creates an unresolved tension. Gates whether routeman's type set is autonomy-conditional at runtime. |
| 22 | (frontier — not deeply traversed) Methodology portability | "Pattern-portability of rename-as-design-act methodology when applied to a second discipline-rename." | umbrella | LOW | Already named as Research Frontier in the design memo's Open Questions / Research Frontiers section. Not net-new; tagged umbrella with frontier-flag below for downstream-discipline awareness. |
| 23 | (cross-cutting tension — surfacing-anchored) Composite-question consolidation | Many candidates above overlap or could be consolidated (e.g., Q4 multi-head handoff ↔ Q21 type-emission at maturity; Q9 F-prescr mechanism ↔ Q12 pointer-WHY anchor ↔ Q18 reflect mapping). | side | HIGH | Consolidation is Innovation's job (selecting the final 10). Surfacing flags the overlap. |

**Convergence check:** territory exhaustively traversed at current resolution. 21 net-new candidate frontier questions identified (Q1-Q21); 1 already-flagged research frontier preserved as umbrella; 1 cross-cutting consolidation tension flagged. Asymmetric-failure principle satisfied: under uncertainty, included with sub/umbrella tags rather than dropped. The final 10-selection is downstream-discipline work (Innovation), not Surfacing's.

## State Summary

### Territory-specification echo

The bounded scope: 7 prior-output files declared in `_branch.md`'s Synthesis Trigger (the routeman design memo at `2026-05-23_14-39`; findings 58, 56, 57; canonical /navigation; endgame `docs/desc.md`; `docs/discipline_taxonomy.md`) + cross-cutting reference points (`cognitive_harness/surfacing/references/surfacing.md` for the 2-layer failure-framework lineage check + the design memo's own "Open Questions" / "DEFERRED" sections as the baseline for "what's already known to be open").

### Purpose-specification echo

Items qualify as candidate frontier questions if they speak to (a) a net-new gap, (b) an unresolved tension, (c) an un-specified interface or invariant, (d) a downstream-discipline-interaction, or (e) an empirical assumption needing validation. Items DO NOT qualify if they are trivial, already-deferred-with-path, or already named as research frontiers.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| Identity (autonomy-context detection, paradigm composition, layer ordering) | confirmed (3 items) | 1 core + 1 sub + 1 side |
| Endgame fit (multi-head handoff, mid-ladder partition, EF-3 criterion) | confirmed (3 items) | 3 core |
| Lineage (taxonomy completeness, Discipline Contract content) | confirmed (2 items) | 1 core + 1 sub |
| Features (F-prescr mechanism, F-seed input shape) | confirmed (2 items) | 1 core + 1 sub |
| Attributes (Continuation Note persistence, pointer WHY anchor) | confirmed (2 items) | 1 core + 1 sub |
| Failure framework (LAYER-2 audit, L2-A threshold) | confirmed (2 items) | 1 core + 1 sub |
| Runtime integration (runner-discipline contract, selection-step ownership) | confirmed (2 items) | 2 core |
| Migration (incoming-reference cleanup) | confirmed (1 item) | 1 sub |
| Coupling (/reflect mapping, cycle-output shape constraints) | confirmed (2 items) | 2 core |
| Calibration (telemetry consumer + feedback loop) | confirmed (1 item) | 1 core |
| Endgame conditional (INVESTIGATE FRONTIER / REVISIT pre-maturity) | confirmed (1 item) | 1 core |
| Methodology portability | adjacency-only (already a research frontier) | 1 umbrella |
| Cross-cutting consolidation | flagged | 1 side |

Total: 13 core + 7 sub + 2 side + 1 umbrella = 23 trace entries covering 12 regions.

### Confirmed-absent regions

| Region traversed where no relevant items found | Why-traversed-anyway |
|---|---|
| Process-layer step sequencing (the 10 features' runtime order) | Out of MEANING-layer scope; explicitly deferred to a process-layer follow-up inquiry per the design memo's COULDs. Not a frontier — it's an explicit follow-up path. |

### Concept-names list

- `frontier question`: vocabulary, from `_branch.md`, "an open question whose resolution materially affects implementation choices, characterized by no known structural answer in the corpus, requiring new investigation, or depending on observations not yet made."
- `gating`: vocabulary, from `_branch.md`, "the property that an implementation choice depends on the question's answer; if the question stays unresolved, the implementation either makes a silent choice or proceeds with documented risk."
- `net-new`: structural-reference, from `_branch.md` Synthesis Trigger, "a question that is NOT already on the design memo's deferred-with-path or research-frontier list."
- `autonomy-context detection`: coined-term, this surfacing, "the mechanism by which a discipline learns the project's current position on the L0-L4 autonomy ladder at invocation time."
- `multi-head handoff`: coined-term, this surfacing, "the protocol by which a multi-head architecture consumes one (or N) Route Maps across parallel heads."
- `mid-ladder partition`: coined-term, this surfacing, "how the 12/4 auto-vs-judgment split behaves at autonomy levels between L0 endpoint (human does all judgment) and L4 endpoint (system does all)."
- `pattern-portability criterion`: structural-reference, from design memo, "the observable that determines whether EF-3 corpus-hygiene-as-design-act applies cleanly to a second case."
- `LAYER-2 audit cadence`: coined-term, this surfacing, "the timing + invocation pattern + owner of the behavioral audit detecting identity-erosion failure modes."
- `runner-discipline contract`: coined-term, this surfacing, "the explicit interface between the runner (/MVL, /MVLw) and routeman covering invocation triggers, input passing, completion signaling, and partial-failure handling."
- `selection-step ownership`: coined-term, this surfacing, "the agent (system / human / hybrid by autonomy level) that picks direction(s) from routeman's enumeration after R→N completes."
- `cycle-output shape constraint`: structural-reference, from design memo §"cycle-consumer process layer", "the implicit shape requirements routeman places on upstream cycle outputs (sense-making, innovation, critique, reflect)."
- `pre-maturity emission policy`: coined-term, this surfacing, "the policy governing whether routeman emits INVESTIGATE FRONTIER + REVISIT types before the project reaches Baldwin-cycle calibration maturity (N≥30 inquiries per discipline)."

### Frontier flags

- **FF-1.** The 23 candidate items surfaced here are CANDIDATES, not the final 10. Innovation must select 10 + provide candidate resolution paths. Surfacing has NOT prioritized; the tagging (core/sub/side/umbrella) is a relevance signal but not a final rank.
- **FF-2.** Several candidates overlap structurally (per trace entry #23). Innovation's selection should explicitly handle consolidation: e.g., Q12 (pointer WHY anchor) could be subsumed by Q9 (F-prescr generation mechanism); Q14 (L2-A threshold) is a sub-aspect of Q13 (LAYER-2 audit cadence). Surfacing flags the overlap; the consolidation rule is Innovation's call.
- **FF-3.** Already-flagged Research Frontiers from the design memo (notably pattern-portability of rename-as-design-act methodology) are NOT net-new; they should not occupy slots in the final 10 unless the inquiry decides to elevate them by stating WHY they belong in the gating-before-implementation list.
- **FF-4.** Process-layer questions (step sequencing of the 10 features) were not surfaced because they're explicit follow-up scope, not frontier. If Innovation finds the 10-question list under-represents the process-layer axis, it may need to re-elevate some process-layer items as frontiers; flag for Innovation's axis-coverage check.
- **FF-5.** Endgame-conditional questions (Q4 multi-head; Q21 pre-maturity emission) depend on capabilities the project doesn't yet have (multi-head architecture; N≥30 calibration maturity). Their "frontier" status is partly because the world they refer to hasn't shipped. Innovation should adjudicate whether questions about not-yet-shipped capabilities count as frontier-gating-for-implementation (a possible interpretation: routeman's design must accommodate these capabilities when they arrive, so the questions ARE gating for implementation; another interpretation: defer until the capabilities ship).

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-23T15:20
extent:
  in-context-files-fully-loaded:
    - devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md (the just-completed design memo)
  in-context-files-via-prior-session-loading:
    - devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md
    - devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
    - devdocs/inquiries/_archive/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md
    - devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md
    - cognitive_harness/navigation/references/navigation.md
    - docs/desc.md
    - docs/discipline_taxonomy.md
    - cognitive_harness/surfacing/references/surfacing.md (referenced for 2-layer failure-mode framework portability)
  frontier-files-not-loaded:
    - docs/thinking_space_dynamics.md (the 11-primitive set; if Innovation's selection includes a primitive-composition frontier, this file's load is needed)
    - docs/intuit.md (if Q10 corpus_limit_seeds input shape becomes a finalist, this load is needed)
    - cognitive_harness/reflect spec (if Q18 /reflect mapping becomes a finalist, this load is needed)
```

### Re-invocation parameters (optional)

If downstream disciplines need deeper coverage of any specific candidate (e.g., the multi-head handoff candidate Q4 needs the multi-head architecture proposal loaded — but no such proposal is committed in `docs/desc.md` beyond the memory note), re-invoke surfacing with the refined-sub-purpose naming the specific candidate.

## Telemetry

- **Mode:** `possibility`. **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated/generated:** 23 candidate items (21 net-new candidate frontier questions + 1 already-flagged research frontier + 1 cross-cutting consolidation tension).
- **Items tagged at each relevance level:** core = 13; sub = 7; side = 2; umbrella = 1.
- **Sub-phase fired:** no (territory was explicit-bounded).
- **Convergence criteria status:** territory exhaustively traversed at current resolution across 12 regions; uncertainty-includes filtering applied (sub/umbrella tags preserved); HIGH-confidence rejection only — no item dropped silently.
- **Workspace-overload trigger:** not fired.
- **Failure modes checked (LAYER 1):** Missed-relevance (mitigated via 12-region sweep + Synthesis Trigger declaration); Surfaced-irrelevance (3 candidates tagged side/umbrella with explicit reasons rather than dropped); Over-coverage (mitigated by core/sub split — Innovation should weight core higher); Territory-mis-binding (none); Workspace overload (not triggered); Artifact under-specification (per-trace-entry tags + identifiers captured); Workspace-artifact desync (capture-at-moment applied).
- **Failure modes checked (LAYER 2):** Interpretive-overstep (avoided — items are surfaced as question-candidates, not as answers or relational structure); Purpose-loss (purpose explicit per `_branch.md`); Self-coupling-to-downstream (avoided — Surfacing doesn't preselect the final 10; Innovation does).
- **Self-assessment verdict:** **PROCEED with FLAG.** Coverage is broad (12 regions); 23 candidates is more than enough for Innovation to select 10 (asymmetric-failure principle: better to include a marginal candidate than miss a hard one). FLAG covers 5 frontier sub-aspects (FF-1 candidate-vs-final distinction; FF-2 overlap consolidation rule; FF-3 already-flagged frontiers vs net-new; FF-4 process-layer axis coverage; FF-5 not-yet-shipped capability questions) that Innovation must adjudicate during the 10-question selection.
