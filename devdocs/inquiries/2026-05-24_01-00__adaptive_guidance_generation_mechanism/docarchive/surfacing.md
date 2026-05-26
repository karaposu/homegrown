# Surfacing — adaptive guidance generation mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/_branch.md`

## Mode + Entry Point

- **Territory-type-mode:** `possibility-dominant with artifact component`. Most items are CANDIDATE designs (5 mechanism shapes, 5 WHY-anchor sources, mode-selection rules, pointer-count budgeting, audit substrates). ARTIFACT component: the 7 priors (routeman chain) + canonical /navigation spec + the actual inquiry-artifact files (`critique.md`, `sensemaking.md`, `surfacing.md`, `innovation.md`, `decomposition.md`, `finding.md`) routeman scans during cycle-consumer operation.
- **Entry point:** `signal-first` (purpose explicit per `_branch.md`).
- **Territory specification:** `explicit-bounded`. Edges: 7 priors + canonical /navigation + 5 candidate WHY-anchor sources + design memo's mode-allocation convention + design memo's LAYER-2 mode definitions + the actual inquiry-artifact files routeman scans + interactions with autonomy register + persistence model + staged mapping. Boundary-discovery SKIPPED.
- **Purpose template:** items qualify if they speak to ANY of (a) existing design constraints from priors; (b) candidate generation-mechanism shapes; (c) candidate WHY-anchor sources; (d) input-to-pointer mapping rules; (e) mode-selection rule candidates; (f) pointer-count budgeting; (g) audit substrate for LAYER-2 mode; (h) interactions with autonomy register + persistence + staged mapping; (i) failure scenarios; (j) risks; (k) settled vs further-inquiry status; (l) inquiry-artifact structure (what routeman actually has to scan).

## Traversal Trace

### Region A — Existing design constraints from priors

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | A | Design memo's *Adaptive guidance* feature definition: "per-route prescriptive guidance pointers with adaptive guidance modes (none/compact/full/expand-on-selection) and continuation notes" | core | HIGH | The committed feature definition. Each pointer = short actionable recommendation + WHY (per-pointer reason). |
| 2 | A | Design memo's mode definitions: `none`=0 pointers; `compact`=1-2 short pointers with one-line WHY (DEFAULT); `full`=3-5 pointers with developed WHYs; `expand-on-selection`=deferred (one-line statement of what would be expanded) | core | HIGH | Pointer-count budgeting per mode IS specified. Inquiry inherits. |
| 3 | A | Design memo's mode-allocation convention (inherited from canonical /navigation): HIGH/risky/blocked/near-action → compact/full; MEDIUM open/deferred → compact; LOW or deferred-for-memory → none/compact; selected → full/expand-on-selection | core | HIGH | Mode-SELECTION rule IS partially specified via this convention. Inquiry inherits but may add axes. |
| 4 | A | Design memo's LAYER-2 mode **Prescriptive-Without-Cycle-Context**: "routeman emits adaptive guidance without sufficient cycle context: the prescriptive layer is the load-bearing residual that distinguishes routeman from descriptive labeling siblings; without anchored cycle context, the prescription degrades to filler" | core | HIGH | The mode the design must be tested against. "Anchored cycle context" = the WHY-anchor source must be CYCLE OUTPUT (not LLM-generated filler). |
| 5 | A | Design memo's LAYER-2 mode **Rename-Renders-Itself-Cosmetic**: signal includes "adaptive guidance pointers carry no anchored WHYs" | core | HIGH | Second LAYER-2 mode that fires on un-anchored WHYs. Two modes monitor the same anchor substrate. |
| 6 | A | Design memo example pointers (illustrative wording): "Check against actual SIC/MVL runs", "Try domain transfer from manufacturing", "Watch for the trap where X masks Y" with example WHY "bc real usage is the only valid test of completeness" | sub | HIGH | The pointer-content TONE is short, actionable, second-person-implicit. WHY is conjunctive ("bc..."). Style commitment from design memo. |
| 7 | A | Design memo's "modes exist because routes warrant different amounts of attention" — calibration rationale | sub | HIGH | The MOTIVATION for mode-allocation. Without scaling, spec either pays full-guidance cost on every route (forces fluff into low-stakes) or produces no guidance anywhere (collapsing to descriptive labeling). |
| 8 | A | Cycle-consumer correction (16-31): file-scanning architecture; WHY-anchor source bounded to file-read content; in-context-pass OFF the table | core | HIGH | Constrains all 5 WHY-anchor candidates to be file-mediated. /intuit hunches must be file-mediated when Phase β ships. |
| 9 | A | Staged-mapping inquiry (18-58) adds per-Route `why_this_might_be_important` meta-reasoning field as required + length-bounded | core | HIGH | The 5th WHY-anchor candidate. The 18-58 inquiry's per-Q3 impact note explicitly says: "Point 2's meta-reasoning field may BE the substrate that grounds each Guidance Pointer's WHY anchor. Q3's resolution path now includes 'use the meta-reasoning field's content as anchor source' as a primary candidate." |
| 10 | A | Staged-mapping inquiry adds LAYER-2 mode **filler meta-reasoning**: "meta-reasoning field content that is generic rather than naming specific cycle-content signals" | core | HIGH | Third LAYER-2 mode that monitors the SAME anchor substrate (cycle-content signals). Three LAYER-2 modes total now monitor anchoring. |
| 11 | A | Autonomy register inquiry (24-40): graduated-autonomy classification gates which types are auto-emitable | sub | HIGH | Interaction with adaptive-guidance generation. At L0, all human-judgment Routes may need `expand-on-selection` mode (defer to human selector); at L2+, some types become auto-emitable. |
| 12 | A | Persistence inquiry (24-00): `_navig.md` carries per-Route status + recalibration history | sub | HIGH | Interaction. On re-invocation, the generation mechanism may RE-GENERATE pointers if inputs have changed (new critique.md content; updated sense-making anchors). The persistence model's recalibration semantics extend to pointer updates. |
| 13 | A | Design memo's F-revisit feature (RESURRECT/INVALIDATE/REVERT) operates cross-cycle | sub | HIGH | F-revisit may be the operational substrate for cross-cycle pointer updates. A RESURRECT route's pointers may need fresh WHY-anchors from the current cycle. |
| 14 | A | Design memo's F-seed input contract: corpus_limit_seeds (when /intuit Phase β ships) + `_navig.md` (per 24-00 extension) | sub | HIGH | F-seed's inputs become candidate inputs for the generation mechanism. The corpus_limit_seeds may anchor PURSUE-SEED-type pointers. |
| 15 | A | Canonical /navigation spec at `cognitive_harness/navigation/references/navigation.md` exists | sub | HIGH | Inherited route-card schema (Guidance Mode + Guidance Pointers) is in this spec. This inquiry doesn't restructure. |
| 16 | A | Routeman is a SINGLETON main navigator per 16-31 + 24-00 | sub | HIGH | The generation mechanism runs once per routeman invocation, not per worker. Aggregation across workers (when multi-head ships per FF) is at routeman level. |

### Region B — The 5 candidate WHY-anchor sources

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 17 | B | **W1: Critique verdicts from `critique.md`** | core | HIGH | Phase 3 SURVIVE/REFINE/KILL outputs + prosecution/defense reasoning. Each verdict is a CYCLE-OUTPUT signal with clear structure. SURVIVE → DEEPEN-pointer-anchor; REFINE → REFINE-pointer-anchor with direction; KILL with seed → PURSUE-SEED-pointer-anchor. |
| 18 | B | **W2: Sense-making anchors from `sensemaking.md`** | core | HIGH | Phase 1 anchors (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes) + Phase 3 ambiguity-collapse entries (resolutions with confidence). Each anchor is a stable conceptual commitment that grounds WHYs. |
| 19 | B | **W3: Telemetry signals from any discipline's output** | sub | HIGH | Coverage metrics; failure-mode checks; convergence verdict (PROCEED/FLAG/RE-RUN). Less rich than W1/W2 but provides quantitative anchors ("WHY: coverage at 60% on dimension X"). |
| 20 | B | **W4: /reflect observations** | sub | HIGH | When /reflect ran before routeman, its process-quality observations are file-content. Per design memo's reflect-routeman pairing. Available when present; not load-bearing for first ship if /reflect hasn't run on the inquiry. |
| 21 | B | **W5: Per-Route meta-reasoning field (`why_this_might_be_important`)** | core | HIGH | Added by 18-58. Already CARRIES the "why this Route is enumerated" reasoning. May be projected into pointer WHYs OR may serve as the meta-anchor that points to W1-W4 sources. |
| 22 | B | Multi-source priority: an SDeepen-pointer anchors to W1 (the SURVIVE verdict) AND W2 (the anchor that supports the SURVIVE direction); a PURSUE-SEED pointer anchors to W1's KILL seed only; etc. | sub | HIGH | The WHY-anchor may be multi-source per pointer-type. |
| 23 | B | Other candidate WHY-anchor sources NOT in the 5: corpus-limit-seeds (from /intuit Phase β+); finding.md's Open Questions section (named research frontiers); Next Actions DEFERRED items (revival-triggered work) | sub | MED | Additional sources beyond the original 4 + meta-reasoning field. Worth flagging for completeness but most are subsumed by W1-W5. |

### Region C — Candidate generation-mechanism shapes

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 24 | C | **M1: Cycle-output-derivation rule (deterministic)** — routeman scans `critique.md` → finds KILL seeds → emits PURSUE-SEED pointers; finds REFINE verdicts → emits REFINE-pointer-anchor with direction; finds SURVIVE → emits DEEPEN pointers | core | HIGH | Deterministic; auditable; the WHY-anchor source (W1 = critique verdicts) is verified via file-content lookup. Risks: rigid; only emits pointers for movement types that map to critique outputs. |
| 25 | C | **M2: LLM-direct generation with structural template** — LLM reads inquiry artifacts + applies template ("For each route, generate 1-2 pointers; each pointer must cite a specific file path + section where the WHY-anchor lives") | core | HIGH | Flexible; LLM-judgment-based; can adapt to any cycle-output shape. Risks: filler risk (LLM may produce plausible-sounding pointers without true anchors); LAYER-2 Prescriptive-Without-Cycle-Context mode fires if template doesn't enforce anchor-grounding. |
| 26 | C | **M3: Meta-reasoning-field projection** — the Route's `why_this_might_be_important` field IS the substrate; pointers are PROJECTED from meta-reasoning content (each sentence in meta-reasoning becomes a candidate pointer with WHY = the sentence's supporting context) | sub | HIGH | Tight coupling between meta-reasoning field and pointers. Risks: redundancy (pointers restate meta-reasoning); the meta-reasoning field's `filler meta-reasoning` LAYER-2 mode propagates to pointers. |
| 27 | C | **M4: /intuit-hunch projection (DEFERRED to /intuit Phase β+)** | side | MED | Anticipatory; /intuit Phase β hasn't shipped. Premature commitment now. |
| 28 | C | **M5: Hybrid (M1 for known cycle-output patterns; M2 for everything else; M3 for routes with rich meta-reasoning)** | core | HIGH | Combines strengths. Risks: more complex; rule-precedence question (M1 vs M2 vs M3 when multiple match). |
| 29 | C | **M6 (newly-surfaced): Two-stage — Stage 1 (M1 deterministic to populate WHY-anchor pointers) + Stage 2 (LLM-judgment to refine wording per the design memo's tone style)** | sub | HIGH | Separates anchoring from wording. Stage 1 = "what cycle output grounds this pointer"; Stage 2 = "how to phrase it actionably." Auditable Stage 1; LLM-judgment Stage 2. |
| 30 | C | **M7 (newly-surfaced): Template-with-mandatory-source-citation** — LLM-direct generation but the template REQUIRES every pointer to include a `{source_path, source_section, source_content}` substructure verbatim from the file-read; if the LLM can't cite, the pointer is dropped | sub | HIGH | Mitigates M2's filler risk by enforcing source-citation at generation time. Audit substrate (A1/A2 from Region G) verifies citations resolve. |

### Region D — Input-to-pointer mapping rule candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 31 | D | **D1: Per-movement-type mapping** — DEEPEN pointers ← W1 SURVIVE verdicts; REFINE pointers ← W1 REFINE verdicts; PURSUE-SEED pointers ← W1 KILL seeds; INVESTIGATE-FRONTIER pointers ← finding.md Open Questions/Research Frontiers; REVISIT pointers ← F-revisit prior-cycle outcomes | core | HIGH | Per-type rule. Each movement type has its "natural" WHY-anchor source. Auditable. |
| 32 | D | **D2: Per-priority mapping** — HIGH-priority routes get rich anchors (W1+W2 multi-source); MEDIUM get one anchor; LOW get meta-reasoning-only anchor | sub | MED | Priority-based anchor depth. Aligns with mode-allocation convention but adds anchor-depth axis. |
| 33 | D | **D3: Per-status mapping** — `blocked` routes' pointers anchor to W1 + telemetry (what's blocking?); `selected` routes anchor to W1+W2+W4 (deepest context for the route to be executed); `deferred-for-memory` routes anchor to meta-reasoning only | sub | HIGH | Status-based anchor selection. Practical and natural. |
| 34 | D | **D4: Fan-in vs fan-out** — each pointer has 1 primary anchor + N supporting anchors (fan-in); OR each anchor produces N pointers across multiple routes (fan-out) | sub | MED | Architectural question. Fan-in produces denser pointers; fan-out distributes one anchor across routes. Probably fan-in (each pointer cites its own anchor). |
| 35 | D | **D5: User-action-context mapping** — pointers that say "Check against X" anchor to a SURVIVE candidate; pointers that say "Try Y" anchor to an INVESTIGATE-FRONTIER opportunity; pointers that say "Watch for the trap where X masks Y" anchor to a critique prosecution argument | sub | HIGH | The pointer's GRAMMATICAL FORM (imperative verb + object) suggests its anchor type. Style-derivation. |

### Region E — Mode-selection rule candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 36 | E | **MS1: Use design memo's mode-allocation convention verbatim** (HIGH/risky/blocked/near-action → compact/full; etc.) | core | HIGH | Inherited; doesn't need redesign. |
| 37 | E | **MS2: Add a "complexity-of-pointer-derivation" axis** — some routes require deeper context (e.g., a cross-cycle REVISIT); those get `expand-on-selection` mode | sub | MED | Practical extension. Allows mode to scale with derivation effort, not just route importance. |
| 38 | E | **MS3: Add autonomy-level axis** — at L0, more conservative (smaller modes, fewer pointers); at L2+, more aggressive | sub | MED | Interaction with autonomy register. May be premature; the design memo's convention is calibration-agnostic. Defer unless evidence forces. |
| 39 | E | **MS4: Add selection-probability axis** — routes the Selector is likely to pick get `full`; others get `compact` | sub | LOW | Requires knowing selection probability, which the system can't reliably estimate at L0/L1. Defer. |
| 40 | E | **MS5: Allow per-mode overrides** — routeman's mechanism normally applies MS1, but specific Route attributes (e.g., `meta_reasoning_revision_history` showing multiple recalibrations) can override to `expand-on-selection` | sub | MED | Refinement rule. Compatible with MS1. |

### Region F — Pointer-count budgeting per mode

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 41 | F | Design memo already specifies budgets: `none`=0; `compact`=1-2; `full`=3-5; `expand-on-selection`=deferred (one-line statement) | core | HIGH | Inherited; this inquiry doesn't redesign. |
| 42 | F | Implicit: pointer LENGTH per mode — `compact` pointers are short (1 line); `full` pointers have developed WHYs (multi-line acceptable); `expand-on-selection` pointers are the one-line statement of what-would-be-expanded | sub | HIGH | Length per mode. Inherited from design memo's wording. |
| 43 | F | Budget enforcement: routeman's mechanism MUST cap pointers per mode; if more candidate pointers are generated than the budget allows, the mechanism must DROP-WITH-REASON (preserve the drop-reason in a side log, not silently filter) | sub | HIGH | Enforcement rule. Aligns with surfacing's asymmetric-failure principle (don't silently drop). |

### Region G — Audit substrate for LAYER-2 mode

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 44 | G | **A1: WHY field carries explicit file-path-and-line reference** — e.g., "WHY: per `devdocs/inquiries/X/critique.md` §Phase 3 Q5 verdict" | core | HIGH | Audit verifies the reference exists and content matches. Strong substrate. |
| 45 | G | **A2: WHY field contains structured substructure** — `{anchor_type: critique-verdict|sensemaking-anchor|meta-reasoning|telemetry|reflect-observation, source_path: <path>, source_section: <section>}` plus the human-readable text | sub | HIGH | Machine-parseable for audit. More verbose but enables automated audit. |
| 46 | G | **A3: Pointer-rejection-on-unresolvable-WHY** — during audit (or during generation itself), if the WHY can't be traced to a source, the pointer is FLAGGED (or DROPPED with reason). Generic language ("seems important") that doesn't cite a source IS the failure-mode signal | core | HIGH | The audit's enforcement mechanism. Could fire at generation-time (preventive) OR at audit-time (retrospective). |
| 46.5 | G | **A4: Per-discipline "expected WHY-anchor sources" check** — for each pointer type, the audit checks that the WHY's source is in the EXPECTED set (e.g., DEEPEN pointers should anchor to W1 SURVIVE or W2 anchor; if a DEEPEN pointer anchors to telemetry only, flag for review) | sub | MED | Type-coherence check. Catches misalignment between pointer type and anchor type. |
| 47 | G | The LAYER-2 mode's recognition signal "pointers without anchored WHYs" → A3's pointer-rejection check IS the recognition signal made operational | core | HIGH | Audit substrate IS the LAYER-2 mode's recognition mechanism. The audit fires on per-pointer basis. |
| 48 | G | Three LAYER-2 modes monitor anchor substrate: Prescriptive-Without-Cycle-Context; Rename-Renders-Itself-Cosmetic (when pointers carry no anchored WHYs); filler meta-reasoning (when meta-reasoning is filler — propagates to pointers if M3 is adopted) | sub | HIGH | Audit substrate is multi-mode shared. One mechanism (A1+A2+A3) covers all three modes' recognition needs. |

### Region H — Interactions with autonomy register + persistence + staged mapping

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 49 | H | **Autonomy register (24-40)** — at L0, the graduated-autonomy classification puts most types in `human-judgment`; those Routes may default to `expand-on-selection` (defer guidance to human-selection moment) | sub | HIGH | Mode-selection interaction. At higher levels, more types become auto-emitable with `compact` mode. |
| 50 | H | **Persistence (24-00)** — re-invocation reads prior `_navig.md`; if a Route's underlying inputs (W1-W5) have changed since last invocation, pointers must be RE-GENERATED (not stale-cached) | sub | HIGH | Lifecycle interaction. Pointers are recalibrated alongside the Route's other attributes. |
| 51 | H | **Staged mapping (18-58)** — Stage 1 (parent Route Map) has high-level Routes with broader anchors; Stage 2 (sub-routes) has finer-grained Routes with narrower anchors (e.g., sub-route's WHY-anchor may be a SPECIFIC critique entry, while parent's may be a critique CLUSTER) | sub | HIGH | Pointer anchor-granularity scales with Route granularity. Stage 2 pointers have more specific anchors. |
| 52 | H | **Meta-reasoning field (18-58)** — if M3 or hybrid M5 is adopted, the meta-reasoning field is the substrate; M3 risks redundancy (pointers restate meta-reasoning); M5 uses meta-reasoning as one source among many | core | HIGH | Adjudication question for sensemaking. |
| 53 | H | **/reflect coupling (deferred per design memo's reflect-routeman pairing)** — when /reflect ships, its observations become W4 anchor source; the generation mechanism must accommodate W4 without restructuring | sub | MED | Forward-looking interaction. The mechanism shape should support W4 when it ships. |

### Region I — Failure scenarios

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 54 | I | **Filler pointers** — LLM generates plausible-sounding pointers without genuine cycle-context anchors. Fires LAYER-2 Prescriptive-Without-Cycle-Context | core | HIGH | M2's primary failure mode. M7's mandatory-source-citation mitigates. |
| 55 | I | **Ungrounded WHYs** — WHY field carries generic language ("seems important"; "could be useful") without source citation. Fires LAYER-2 Rename-Renders-Itself-Cosmetic | core | HIGH | A1/A2 audit detects. |
| 56 | I | **Over-generation** — mechanism emits more pointers than the budget allows; if silently dropped, loses signal | sub | HIGH | F43 enforcement rule (drop-with-reason) mitigates. |
| 57 | I | **Under-generation** — mechanism emits fewer pointers than the mode's lower bound (e.g., `compact` should be 1-2 pointers but emits 0) | sub | MED | Either downgrade the mode (compact → none) or escalate to halt+flag. |
| 58 | I | **Anchor-citation-broken** — pointer's WHY cites a source path that doesn't resolve (file moved/renamed/deleted) | sub | MED | A1/A2 audit catches. Recovery: regenerate the pointer or downgrade the route. |
| 59 | I | **Style drift** — pointers drift from design-memo style (short imperative + conjunctive WHY) into long prose | side | LOW | Style is secondary to anchor-grounding; LAYER-2 doesn't fire on style. Not load-bearing. |
| 60 | I | **Cycle-output absent** — when an inquiry hasn't run /td-critique yet (or `critique.md` is mid-write), W1 is unavailable; the mechanism must handle gracefully (use W2/W5; or defer that Route's guidance) | sub | HIGH | File-scanning architecture risk. Mechanism must handle partial-cycle-output. |
| 61 | I | **Meta-reasoning-field filler propagation** — if M3 adopted, filler in meta-reasoning becomes filler in pointers. Two LAYER-2 modes correlate (filler meta-reasoning → ungrounded WHYs) | sub | HIGH | Mitigation: pointers must add VALUE beyond restating meta-reasoning; M3 alone is risky. |

### Region J — Risks and counter-considerations

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 62 | J | **Mechanism complexity** — hybrid M5 has multiple rule branches; risks SKILL.md becoming unwieldy. Mitigation: prefer M1+M7 if they cover most cases | core | HIGH | Trade-off between coverage and simplicity. |
| 63 | J | **LLM-judgment-vs-deterministic** — M2/M7 require LLM judgment per pointer; M1 is rule-based. LLM-judgment risks inconsistency but adapts; rule-based is auditable but rigid | core | HIGH | Adjudication tension. Hybrid balances. |
| 64 | J | **Audit substrate complexity** — A2 (structured substructure) is more verbose; A1 (file-path reference in WHY text) is more readable. Trade-off | sub | HIGH | First-ship may use A1; A2 may be SKILL.md authoring decision. |
| 65 | J | **Premature /intuit commitment** — M4 (/intuit-hunch projection) is not buildable until Phase β ships. Including in first-ship over-commits | sub | HIGH | Defer M4. |
| 66 | J | **Meta-reasoning field dependency** — M3 + M5's meta-reasoning component depends on 18-58's required field being populated. If field is filler, mechanism degrades | sub | HIGH | Mitigation: mechanism's M3-component should test field quality before projecting. |
| 67 | J | **Style hard-coding** — locking in design-memo's specific tone ("Check against X") may not generalize across inquiry types. Mitigation: style is guideline, not enforcement | side | MED | Defer to SKILL.md authoring. |
| 68 | J | **Multi-source priority undefined** — if pointer can anchor to multiple sources (W1+W2+W5), which is the "primary" cited in WHY? Mitigation: priority order (W1 > W2 > W5 > W3 > W4) or per-pointer-type rule | sub | HIGH | Multi-source resolution. |

### Region K — What's settled vs needs further inquiry

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 69 | K | Settled: file-scanning bound (16-31); pointers anchored to file content | core | HIGH | |
| 70 | K | Settled: mode definitions + counts + mode-allocation convention (design memo) | core | HIGH | |
| 71 | K | Settled: LAYER-2 mode recognition signal is "pointers without anchored WHYs" | core | HIGH | |
| 72 | K | Settled: meta-reasoning field is required + length-bounded (18-58); is a candidate WHY-anchor source | core | HIGH | |
| 73 | K | Needs further inquiry: which mechanism shape (M1 / M2 / M3 / M5 / M6 / M7) | core | HIGH | Sensemaking adjudicates. |
| 74 | K | Needs further inquiry: which WHY-anchor source priority order | sub | HIGH | If multi-source, what's the priority. |
| 75 | K | Needs further inquiry: audit substrate shape (A1 file-path-in-WHY-text vs A2 structured substructure) | sub | HIGH | First-ship vs SKILL.md authoring decision. |
| 76 | K | Needs further inquiry: M3 (meta-reasoning projection) — adopt as primary, secondary, or reject | core | HIGH | Tightly coupled with meta-reasoning field. |
| 77 | K | Needs further inquiry: failure-handling for cycle-output-absent (e.g., critique.md mid-write or missing) | sub | HIGH | |

### Region L — Frontier flags

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 78 | L | **FF-1: Which generation-mechanism shape (M1 / M2 / M3 / M5 / M6 / M7) ships first?** | umbrella | HIGH | Open. Central design decision. |
| 79 | L | **FF-2: Which WHY-anchor source(s) at first ship?** (single-source or multi-source; priority order) | umbrella | HIGH | Open. |
| 80 | L | **FF-3: Audit substrate shape** (A1 text-with-citation vs A2 structured substructure vs A3 pointer-rejection-only) | umbrella | HIGH | Open. |
| 81 | L | **FF-4: M3 (meta-reasoning projection) primary, secondary, or rejected?** | umbrella | HIGH | Open. |
| 82 | L | **FF-5: Cycle-output-absent handling** (defer pointers, use fallback W5/W2, halt+flag) | umbrella | MED | Open. |
| 83 | L | **FF-6: Multi-source priority order** if pointer can anchor to multiple sources | umbrella | MED | Open. |
| 84 | L | **FF-7: /intuit-hunch projection (M4) revival timing** when Phase β ships | umbrella | MED | Already-deferred. |
| 85 | L | **FF-8: /reflect-observation (W4) integration shape** when /reflect coupling spec lands | umbrella | MED | Already-deferred. |

**Convergence check:** 85 trace entries across 12 regions. Major findings: (1) the design space has 5 WHY-anchor candidates (the original 4 + meta-reasoning field from 18-58); (2) generation-mechanism shape space has 6 candidates (M1-M3 + M5 + 2 newly-surfaced M6/M7); (3) LAYER-2 audit substrate has 3 candidate shapes (A1-A3 + A4 type-coherence); (4) three LAYER-2 modes monitor the SAME anchor substrate (Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler meta-reasoning); (5) interactions with autonomy register + persistence + staged mapping all constrain the design.

## State Summary

### Territory-specification echo

The bounded scope: 7 routeman-chain priors + canonical /navigation spec + the 5 candidate WHY-anchor sources + 6+ candidate generation-mechanism shapes + the design memo's mode-allocation convention + 3 LAYER-2 modes monitoring the anchor substrate + audit substrate candidates + interactions with autonomy register, persistence, staged mapping, and /reflect coupling.

### Purpose-specification echo

Items qualify if they speak to (a) existing design constraints; (b) candidate generation-mechanism shapes; (c) candidate WHY-anchor sources; (d) input-to-pointer mapping rules; (e) mode-selection candidates; (f) pointer-count budgeting; (g) audit substrate; (h) interactions with priors; (i) failure scenarios; (j) risks; (k) settled vs needs-further; (l) frontier flags.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| A — Existing design constraints (16 entries) | confirmed | 8 core + 8 sub |
| B — 5 WHY-anchor candidates (7 entries) | confirmed | 3 core + 4 sub |
| C — 6 generation-mechanism shapes (7 entries) | confirmed | 3 core + 3 sub + 1 side |
| D — Input-to-pointer mapping rules (5 entries) | confirmed | 1 core + 4 sub |
| E — Mode-selection rule candidates (5 entries) | confirmed | 1 core + 3 sub + 1 side |
| F — Pointer-count budgeting (3 entries) | confirmed | 1 core + 2 sub |
| G — Audit substrate (5 entries) | confirmed | 3 core + 2 sub |
| H — Interactions (5 entries) | confirmed | 1 core + 4 sub |
| I — Failure scenarios (8 entries) | confirmed | 2 core + 5 sub + 1 side |
| J — Risks (7 entries) | confirmed | 2 core + 5 sub |
| K — Settled vs needs-further (9 entries) | confirmed | 6 core + 3 sub |
| L — Frontier flags (8 entries) | confirmed | 0 core + 0 sub + 8 umbrella |

Total: 85 entries (31 core + 43 sub + 3 side + 8 umbrella).

### Confirmed-absent regions

None — every region traversed yielded items.

### Concept-names list

- `adaptive guidance` — existing-project-term, "per-Route prescriptive content with Guidance Mode + Guidance Pointers + per-pointer WHY."
- `Guidance Mode` — existing-project-term, "enum: none / compact / full / expand-on-selection; calibrates pointer count per Route."
- `Guidance Pointer` — existing-project-term, "short actionable recommendation per Route, with its own WHY (per-pointer reason)."
- `WHY-anchor source` — coined-this-surfacing, "the file-content material that grounds each pointer's WHY; one of 5 candidates."
- `Prescriptive-Without-Cycle-Context` — existing-project-term, "LAYER-2 mode where routeman emits guidance without sufficient cycle context; pointers without anchored WHYs."
- `Rename-Renders-Itself-Cosmetic` — existing-project-term, "LAYER-2 mode where outputs lack prescriptive layer or carry no anchored WHYs."
- `filler meta-reasoning` — existing-project-term (18-58), "LAYER-2 mode where meta-reasoning field is generic rather than naming specific cycle-content signals."
- `generation mechanism` — coined-this-surfacing-formal-frame, "the procedural steps routeman runs to produce pointers from inputs; one of 6 candidate shapes (M1-M7)."
- `cycle-output-derivation rule` — coined-this-surfacing-shorthand, "M1: deterministic rule mapping critique verdicts to pointer types."
- `LLM-direct with structural template` — coined-this-surfacing-shorthand, "M2: LLM judgment with template enforcing source citation."
- `meta-reasoning-field projection` — coined-this-surfacing-shorthand, "M3: pointers PROJECTED from meta-reasoning content."
- `mandatory-source-citation` — coined-this-surfacing, "M7: template requires {source_path, source_section, source_content} substructure per pointer."
- `audit substrate` — coined-this-surfacing, "the file-content that lets the LAYER-2 audit detect ungrounded WHYs; A1/A2/A3/A4 candidates."
- `mode-allocation convention` — existing-project-term, "the design memo's rule for which Routes get which modes (HIGH/risky/blocked/near-action → compact/full; etc.)."

### Frontier flags

- **FF-1** — Which generation-mechanism shape ships first?
- **FF-2** — Which WHY-anchor source(s) at first ship?
- **FF-3** — Audit substrate shape (A1/A2/A3/A4 priority).
- **FF-4** — M3 (meta-reasoning projection) primary, secondary, or rejected?
- **FF-5** — Cycle-output-absent handling.
- **FF-6** — Multi-source priority order.
- **FF-7** — /intuit-hunch (M4) revival timing.
- **FF-8** — /reflect-observation (W4) integration shape.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T01:00
extent:
  in-context-files-fully-loaded:
    - devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md (adaptive-guidance section + LAYER-2 mode wording verified via grep)
  in-context-files-via-prior-session-loading:
    - devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md (Q3 source)
    - devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md
    - devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md (meta-reasoning field + LAYER-2 mode "filler meta-reasoning")
    - devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md
    - devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md
    - devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md
  frontier-files-not-loaded:
    - cognitive_harness/navigation/references/navigation.md (canonical /navigation; route-card schema inherited)
    - existing inquiry artifacts (sample critique.md / sensemaking.md from this session) — structure verified via this-session experience
```

## Telemetry

- **Mode:** `possibility-dominant with artifact component`. **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated:** 85 trace entries across 12 regions.
- **Items tagged at each relevance level:** core = 31; sub = 43; side = 3; umbrella = 8.
- **Sub-phase fired:** no.
- **Convergence criteria status:** territory exhaustively traversed; design space (6 mechanism shapes + 5 WHY-anchor sources + 4 audit substrates + interactions + failure scenarios) well-mapped; 8 frontier flags raised for downstream adjudication.
- **Workspace-overload trigger:** not fired.
- **Failure modes checked (LAYER 1):** Missed-relevance (mitigated by 12-region sweep + pre-traversal artifact verification); Surfaced-irrelevance (3 side items kept with reasons); Over-coverage (mitigated by core/sub split); Territory-mis-binding (none); Workspace overload (not fired); Artifact under-specification (per-trace tags captured); Workspace-artifact desync (capture-at-moment).
- **Failure modes checked (LAYER 2):** Interpretive-overstep (items are candidates / mappings / risks, not cross-piece interpretive structure); Purpose-loss (purpose explicit); Self-coupling-to-downstream (avoided — surfacing surfaces candidates without pre-recommending).
- **Self-assessment verdict:** **PROCEED with FLAG.** 8 frontier flags for downstream. Two structural observations: (1) the original 4 candidate mechanism options expanded to 6 via 18-58's meta-reasoning addition + 2 newly-surfaced (M6 two-stage, M7 mandatory-source-citation); (2) three LAYER-2 modes monitor the SAME anchor substrate — a single audit mechanism (A1+A2+A3) covers all three modes' recognition.
