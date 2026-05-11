---
status: active
type: loop_diagnose_finding
---
# Finding: Loop Diagnose — Past Navigation Memory File Index Feasibility

## Question

**Question (from `_branch.md`):** Given the weak prior inquiry at `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/` (which made early-stage robust review depend on whether a `PastNavigationMemoryFile` exists), the human correction (the user asked whether Homegrown should keep a record of all Navigation-related file creations so there would be a `PastNavigationMemoryFile` index, asking whether that would be easier and feasible), and the later improved inquiry at `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/` (which tried to solve the discovery pressure by recommending a maintained index, narrowing it away from "all Navigation-related files") — did the prior loop's source-present robust policy create an under-specified discovery problem that pushed the next loop toward a maintained index, and was the index recommendation a reasonable bridge or an overcorrection?

**Goal (from `_branch.md`):** Identify evidence-backed failure hypotheses with confidence levels, name affected stages, classify shortcoming types, and produce maintenance candidates with explicit evaluation gates. Specifically: identify what the prior loop did or did not specify about discovering `PastNavigationMemoryFile` candidates. Sixth LOOP_DIAGNOSE run.

## Finding Summary

- **Failure diagnosis (cascade A → B → C → D).** The prior loop's source-present robust policy left the discovery mechanism for `PastNavigationMemoryFile` candidates unspecified, creating downstream pressure that pushed the corrected loop to recommend a maintained index. Stage A — Sensemaking specification gap (HIGH); Stage B — Decomposition missing discovery-mechanism piece (HIGH); Stage C — Innovation missing discovery-mechanism candidate (HIGH; mixed attribution); Stage D — Critique missing specification-gap prosecution (MEDIUM-HIGH).

- **Five per-chain ACTIONABLE candidates.** T1 (Sensemaking discoverability check at Phase 3 + Phase 5 dual-surface); T2 (Decomposition discovery-mechanism inclusion check; new P11 family; single-chain caveat); T3 (Innovation discovery-mechanism candidate generation rule); T7 (mark prior finding corrected with two-layer Status note); T8 (extend monitoring with chain-6 tracking dimensions).

- **TWO cross-chain promotion events in a single chain — corpus-level milestone.** First time across the LOOP_DIAGNOSE corpus that a single chain produces two cross-chain promotion events.
  - **M6-refinement-S2 PROMOTION** (third M6 evolution event): extends the cross-cutting `name-and-test` rule M6's Sensemaking sub-rule to Phase 5 / Conceptual Stabilization output, covering both proxy-vs-structural (chain 5) and discoverability-specification (chain 6) sub-types. P1 family at 5 chains × 5 layer-sub-types — strongest cross-chain claim by chain count across the corpus.
  - **TP3 PROMOTION** (second cross-cutting rule in LOOP_DIAGNOSE corpus, after M6): cross-cutting prosecution-depth rule for Critique covering three observed sub-types (user-perspective per chain 3's O3, failure-case per chain 5's S2, specification-gap per chain 6). P3 family reaches the 3-chain threshold this run.

- **Q-RF Reinforcement (Research Frontier, fourth specific instance).** The Quality-Awareness Gap is reinforced with operational-discovery-gap awareness, joining metacognitive (chain 3), calibration (chain 4), and proxy-vs-structural (chain 5) awareness. Stays Research Frontier; NOT a per-chain candidate.

- **Two-Layer Failure Framing (corpus-level observation, NOT a candidate).** Chain 6's diagnosis stands UPSTREAM of chain 1's separately-diagnosed failure: chain 6 explains why the specification gap chain 1 diagnosed existed in the first place. Chain 6's per-chain candidates address the upstream specification gap; chain 1's per-chain candidates addressed the downstream specific-candidate selection. Both diagnoses stand independently.

- **Verdict: ACTIONABLE-PARTIAL.** Concrete maintenance candidates produced; specific evaluation gates set; protocol-level changes beyond chain 5's N9 codification remain deferred to chain 7-10. M6 consolidation review deferred to chain 7+ if cumulative refinement count reaches 4 (currently 3).

## Finding

### 1. The shortcoming and its cascade

The prior loop (`devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/`) reached a robust verdict that early-stage Navigation should always run full Route Memory Review **when a `PastNavigationMemoryFile` is source-present**. That source-present qualifier is the load-bearing concept. But the prior loop did not specify HOW the runner discovers whether such a file exists for a given Navigation. Discovery was left to runner judgment.

The corrected loop (`devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/`) was triggered by a human correction asking whether Homegrown should keep a record of all Navigation-related file creations to have a `PastNavigationMemoryFile` index — *"isnt this more easy? but agian is this feasible?"* The corrected loop attempted to solve the discovery pressure by recommending a maintained index (narrowing it away from "all Navigation-related files" to a more focused set).

The diagnosis is that the prior loop's source-present robust policy was correct in shape but under-specified in operational detail. The missing specification — *"how does the runner determine whether a `PastNavigationMemoryFile` exists?"* — created downstream pressure. The corrected loop's index recommendation was a reasonable bridge in spirit (it tried to make the source-present check operational) but an overcorrection in specifics (chain 1 separately diagnosed that maintained index was the wrong specific candidate; search-contract was preferred).

The shortcoming cascades through four stages:

- **Stage A — Sensemaking specification gap (HIGH).** Sensemaking stabilized the load-bearing concept (`PastNavigationMemoryFile` source-present check) without surfacing the discoverability question at Phase 3 (Ambiguity Collapse) or Phase 5 (Conceptual Stabilization). The Phase 5 / SV6 output committed the runner to a runtime determination ("does such a file exist?") without naming the determination mechanism or fallback. Evidence: corrected loop's Exploration Cycle 4 (active artifact population scan) and Innovation index candidate are direct evidence of the gap that Sensemaking would have surfaced earlier.

- **Stage B — Decomposition missing discovery-mechanism piece (HIGH).** Decomposition's Q-tree did not include a piece addressing how the runner discovers candidate `PastNavigationMemoryFile` instances. The Reassembly self-evaluation check did not flag the missing discovery piece as a completeness gap. This is a NEW Decomposition surface (P11 family at 1 chain so far). Evidence: corrected loop's Decomposition explicitly addressed index storage / schema / update ownership / validation — discovery mechanism became a first-class question in the corrected.

- **Stage C — Innovation missing discovery-mechanism candidate (HIGH; mixed attribution).** Innovation generated multiple candidates for *what the policy should do* (always full review, conditional review, etc.) but did not generate candidates for *how to discover the file*. The mixed attribution flag reflects that this gap is largely inherited from upstream stages (A and B) — Innovation cannot generate candidates for an axis that wasn't surfaced. Evidence: corrected loop's Innovation explicitly generated multiple discovery-mechanism candidates (Global Index, Append-Only Event Log, Per-File Metadata, Hybrid Registry, Consumed-Set).

- **Stage D — Critique missing specification-gap prosecution (MEDIUM-HIGH).** Critique evaluated the surviving policy candidates for robustness, evidence, and overreach, but did not include a depth-axis check for "are operational specifications complete?" — a prosecution dimension that would have surfaced the missing discovery mechanism. Evidence: P3 family pattern (chain 3 user-perspective per O3, chain 5 failure-case per S2, chain 6 specification-gap) reaches 3-chain threshold for cross-cutting promotion.

### 2. The five per-chain maintenance candidates (T1, T2, T3, T7, T8)

**T1 — Sensemaking discoverability check for load-bearing concepts (Phase 3 + Phase 5 dual-surface).** When Sensemaking stabilizes a load-bearing concept whose use depends on a runtime determination (e.g., *"does X exist?"*, *"is X applicable?"*), apply a discoverability check at two surfaces. At Phase 3 / Ambiguity Collapse, generate an ambiguity-collapse pair targeting the discoverability question. At Phase 5 / Conceptual Stabilization, the SV6 output must name the determination mechanism explicitly OR explicitly mark *"left to runner judgment"* as the fallback. T1 opens a fifth Sensemaking surface beyond the four already covered by M1+N2+O1+R1+S1 (Constraints, Foundational Principles, SV2+ Terminology, Phase 2 Perspective Coverage, Phase 5 / Conceptual Stabilization output via S1's proxy-vs-structural test). T1 pairs with M6-refinement-S2 — M6-refinement-S2 covers Phase 5 broadly; T1 is the specific discoverability sub-type instance under it.

**T2 — Decomposition discovery-mechanism inclusion check (single-chain caveat).** When a Q-tree's load-bearing concept depends on a runtime determination (operation-policy with a runtime trigger), Decomposition's Reassembly self-evaluation check verifies the Q-tree includes a piece addressing the determination mechanism. T2 opens a NEW Decomposition surface — the first per-discipline candidate for Decomposition in the LOOP_DIAGNOSE corpus. P11 family is at 1 chain; revival trigger if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P11 instance.

**T3 — Innovation discovery-mechanism candidate generation rule.** When Innovation evaluates operation-policy candidates with runtime-determined triggers, at least one discovery-mechanism candidate variant must be generated (alongside the policy-shape candidates). T3 is orthogonal to N3 (storage axis), R3 (phase axis), and S3 (classifier proxy-vs-structural axis). Together they cover four distinct Innovation candidate-generation axes for operation-policy problems. The recognition predicate (*"operation-policy candidates with runtime-determined triggers"*) narrows scope.

**T7 — Mark prior finding corrected with two-layer Status note.** Prior finding's frontmatter gets `corrected_by:` pointing at chain 6's corrected; Status note at start of prior's body explicitly notes (a) the immediate correction (discovery-mechanism specification via maintained index recommendation), AND (b) chain 1's separate diagnosis showing that the specific candidate (maintained index) was the wrong choice (search-contract preferred). The two-layer Status note is more nuanced than M7+N7+O7+R7+S7 — it preserves the corpus-level observation that two distinct failures exist along this chain.

**T8 — Continue monitoring (extends M8+N8+O8+R8+S8).** At chain-7 LOOP_DIAGNOSE run completion, document: M6 cumulative refinement count (currently 3); TP3 effectiveness (newly promoted); P11 chain count (currently 1); signal-type observation (chain 6 was question-style); corpus-level pattern stability; two-layer failure framing recurrence.

### 3. The TWO cross-chain promotion events

This chain produces TWO cross-chain promotion events in a single run — a first across the LOOP_DIAGNOSE corpus.

**M6-refinement-S2 PROMOTION (third M6 evolution event).** The cross-cutting `name-and-test` rule M6 (promoted in chain 3) is extended at its Sensemaking sub-rule to Phase 5 / Conceptual Stabilization output. This refinement was DEFERRED at chain 5 with explicit revival language: *"revive at chain 6 if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs."* Chain 5's trigger-classifier sub-type and chain 6's specification-gap sub-type are BOTH at the Phase 5 / Conceptual Stabilization output layer. P1 family is now at 5 chains × 5 layer-sub-types — strongest cross-chain claim across the LOOP_DIAGNOSE corpus by chain count. The refinement covers BOTH Phase 5 sub-types observed (proxy + specification-gap) — broader than a chain-specific patch.

Cumulative M6 refinement count is 3 (chain 4: refinement-S, refinement-C; chain 6: refinement-S2). This approaches the consolidation review threshold; chain 7+ will trigger consolidation review if a fourth refinement appears. Caveats: small-scope refinement; chain-7-effectiveness-check; cumulative-refinement-count caveat.

**TP3 PROMOTION (second cross-cutting rule in LOOP_DIAGNOSE corpus).** The P3 family (Critique prosecution-depth shortcomings) reached the 3-chain threshold this run with three observed sub-types: chain 3's user-perspective sub-type (O3), chain 5's failure-case sub-type (S2), and chain 6's specification-gap sub-type. TP3 codifies a cross-cutting prosecution-depth rule for Critique: when evaluating candidates, explicitly consider which depth-axes apply (user-perspective, failure-case, specification-gap, plus future sub-types as they emerge) and prosecute the candidates accordingly.

TP3 is the SECOND cross-cutting rule in the LOOP_DIAGNOSE corpus (after M6). The corpus's cross-cutting-rule structure now has two rules: M6 covering Sensemaking + Critique-dimension layers; TP3 covering Critique-prosecution depth. O3 and S2 remain valid as concrete instances under TP3's broader formalization — TP3 subsumes their shared meta-property without replacing them. Caveats: three sub-types observed so far; future sub-types may emerge; chain-7-effectiveness-check.

### 4. Q-RF Reinforcement (Research Frontier — NOT a candidate)

The Quality-Awareness Gap (Q-RF, introduced in chain 3) is reinforced with its FOURTH specific instance: operational-discovery-gap awareness. The four observed instances are:

- Chain 3 — metacognitive awareness (the user said *"this feels wrong but I can't articulate why"*).
- Chain 4 — calibration-awareness (the prior loop didn't account for phase / calibration state).
- Chain 5 — proxy-vs-structural-awareness (the prior loop adopted a proxy distinction at the trigger-classifier-rule layer).
- Chain 6 — operational-discovery-gap awareness (the prior loop's load-bearing concept depended on runtime determination but the determination mechanism was unspecified).

Q-RF stays as Research Frontier. It does NOT translate into per-chain maintenance candidates this run. The Predictive RC (Robustness Check) implementation requires multi-phase architectural work per `enes/desc.md`; per-chain patches cannot bridge to it. Q-RF is documented in Open Questions / Research Frontiers as longer-horizon direction.

### 5. Two-Layer Failure Framing (corpus-level observation)

Chain 6's prior IS chain 4's corrected; chain 6's corrected IS chain 1's prior. Third corpus-level instance of *"same artifact serves as corrected in one chain and prior in another"* pattern. Importantly, chain 6's diagnosis stands UPSTREAM of chain 1's separately-diagnosed failure:

- **Chain 1** diagnosed that the corrected loop's maintained-index recommendation was the wrong specific candidate (search-contract preferred).
- **Chain 6** diagnoses that the prior loop's specification gap created the pressure that led to the corrected loop attempting any specific operational-discovery candidate at all.

Both diagnoses stand independently. Chain 6's per-chain candidates address the upstream specification gap (T1 + T2 + T3); chain 1's per-chain candidates addressed the downstream specific-candidate selection (M1-M9 family). The cascade is not *"chain 6 supersedes chain 1"* — it's *"chain 6 explains why the gap chain 1 diagnosed existed in the first place."*

### 6. Verdict

**ACTIONABLE-PARTIAL.** Concrete per-chain maintenance candidates produced (T1, T2, T3, T7, T8) with explicit evaluation gates. TWO cross-chain promotion events (M6-refinement-S2 + TP3) with established threshold citations and caveats. Q-RF Reinforcement framed as Research Frontier. Two-Layer Failure Framing documented as corpus-level observation. Protocol-level changes beyond N9 codification (chain 5 promotion) remain deferred to chain 7-10. M6 consolidation review deferred to chain 7+ if cumulative refinement count reaches 4.

## Next Actions

### MUST

- **What:** PROMOTE M6-refinement-S2 (extend M6 Sensemaking sub-rule to Phase 5 / Conceptual Stabilization output) FROM DEFERRED TO ACTIONABLE.
  - **Who:** Cross-cutting `name-and-test` rule M6 (in LOOP_DIAGNOSE protocol or wherever M6 is documented).
  - **Gate:** In next 3 MVL+ runs where Sensemaking encounters trigger-classifier rules or load-bearing-concept stabilization at Phase 5 / Conceptual Stabilization output, M6's refined rule fires at the Phase 5 surface (covering both proxy-vs-structural and discoverability-specification sub-types).
  - **Why:** Capture the chain-5 deferral revival trigger (P1 family at 5 chains × 5 layer-sub-types — strongest cross-chain claim across the corpus by chain count) before chain 7's consolidation review. Caveats: small-scope refinement; cumulative refinement count of 3 approaches consolidation territory but does not yet trigger; chain-7-effectiveness-check.

- **What:** PROMOTE TP3 (cross-cutting prosecution-depth rule for Critique) AS ACTIONABLE.
  - **Who:** Critique discipline spec / LOOP_DIAGNOSE Step 5 prosecution check.
  - **Gate:** In next 3 Critique runs against candidates where prosecution-depth-axes apply, TP3's relevance-check fires (the runner explicitly considers which depth-axes apply: user-perspective per O3, failure-case per S2, specification-gap per chain-6 D, plus future sub-types as they emerge).
  - **Why:** Prosecute critique candidates along the depth-axes most relevant per inquiry; subsume O3 + S2 + chain-6's prosecution-gap observation under broader formalization. Second cross-cutting rule in LOOP_DIAGNOSE corpus (after M6). Caveats: three sub-types observed so far; future sub-types may emerge; chain-7-effectiveness-check.

- **What:** Promote T1 (Sensemaking discoverability check at Phase 3 + Phase 5 dual-surface) as ACTIONABLE.
  - **Who:** Sensemaking discipline spec.
  - **Gate:** Within next 3 MVL+ runs producing Sensemaking outputs with load-bearing concepts whose use depends on runtime determination, T1 fires (Phase 3 ambiguity-collapse pair targeting concept discoverability + Phase 5 output marker naming determination mechanism or *"left to runner judgment"* fallback).
  - **Why:** Prevent the recurrence of upstream specification gaps that cascade into Decomposition / Innovation / Critique blind spots. T1 opens a fifth Sensemaking surface and pairs with M6-refinement-S2 (which covers Phase 5 broadly).

- **What:** Promote T3 (Innovation discovery-mechanism candidate generation rule) as ACTIONABLE.
  - **Who:** Innovation discipline spec.
  - **Gate:** In next 3 Innovation runs evaluating operation-policy candidates with runtime-determined triggers, at least one discovery-mechanism candidate variant is generated.
  - **Why:** Ensure Innovation surfaces discovery-mechanism candidates as a distinct axis (orthogonal to N3 / R3 / S3).

- **What:** Promote T7 (mark prior finding corrected with two-layer Status note) as ACTIONABLE.
  - **Who:** Manual edit to prior `finding.md` plus reciprocal annotation in chain 6 corrected's `finding.md`.
  - **Gate:** Frontmatter `corrected_by:` + Status note at start of body covering both layers (immediate correction + chain 1's separate diagnosis).
  - **Why:** Prevent runners reading the prior in isolation from executing the obsolete recommendation; preserve the corpus-level observation that two distinct failures exist along this chain.

- **What:** Promote T8 (extend M8+N8+O8+R8+S8 monitoring with chain-6 tracking dimensions) as ACTIONABLE (always-on baseline).
  - **Who:** LOOP_DIAGNOSE protocol's monitoring track.
  - **Gate:** At chain-7 LOOP_DIAGNOSE run completion, document M6 cumulative refinement count, TP3 effectiveness, P11 chain count, signal-type observation, corpus-level pattern stability, two-layer failure framing recurrence.
  - **Why:** Manage the maturing rule-evolution structure (3 M6 refinements + 1 N9 promotion + 2 cross-cutting rules).

### COULD

- **What:** Promote T2 (Decomposition discovery-mechanism inclusion check) as ACTIONABLE with single-chain caveat.
  - **Who:** Decomposition discipline spec / Reassembly self-evaluation check.
  - **Gate:** In next 3 MVL+ runs producing Decomposition Q-trees about operation-policy problems with runtime-determined triggers, T2's Reassembly check fires (the Q-tree includes a piece addressing discovery/determination mechanism for any load-bearing concept the policy depends on).
  - **Why:** First per-discipline candidate for Decomposition in the LOOP_DIAGNOSE corpus; opens new surface. P11 family at 1 chain; revival trigger if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P11 instance.

### DEFERRED

- **What:** M6 consolidation review (whether M6's Sensemaking sub-rule should consolidate to *"any load-bearing concept stabilized in any Sensemaking output, anywhere in the SV1-SV6 progression"*).
  - **Gate:** Trigger at chain 7+ if cumulative refinement count reaches 4 (currently 3). Definitely trigger at chain 8+ if no consolidation has occurred and refinement count persists at 3+.
  - **Why (if revived):** Prevent piecemeal layer-by-layer refinement burden; consolidate to a more general rule shape if the layer-specific instances continue to recur.

- **What:** LOOP_DIAGNOSE protocol-level changes beyond N9 codification.
  - **Gate:** Chain 7-10 effective range for protocol-level changes per Step 6 (5-10 finding window). Trigger only when 3+ findings within chain 7-10 propose convergent protocol-level changes.
  - **Why (if revived):** The corpus is now mature enough (6 chains, 2 cross-cutting rules, 1 N9 promotion) that protocol-level changes may emerge from cumulative learning.

- **What:** Predictive RC (Robustness Check) implementation steps for Q-RF (Quality-Awareness Gap).
  - **Gate:** Out of scope for per-chain LOOP_DIAGNOSE candidates. Requires multi-phase architectural work per `enes/desc.md` end-goal loop architecture.
  - **Why (if revived):** Q-RF has now been reinforced with 4 specific instances across chains 3-6. If chain 7-10 produces additional instances OR if the end-goal loop architecture work begins, Q-RF transitions from Research Frontier to actionable architectural design.

## Reasoning

### Why the diagnosis cascade A → B → C → D

Sensemaking (A) is the upstream surface where the load-bearing concept is stabilized. The corrected loop's Exploration Cycle 4 (active artifact population scan) and Innovation index candidate are direct evidence of the gap that Sensemaking would have surfaced earlier — both the corrected loop and the human correction independently asked *"how does the runner determine this?"*, which is the discoverability question A's discoverability check addresses.

Decomposition (B) cannot include a discovery-mechanism piece if Sensemaking didn't surface the discoverability question. B is downstream of A. But B has its own check (Reassembly self-evaluation) that could have flagged the missing piece even without A's earlier surfacing — that's the structural reason T2 opens a NEW Decomposition surface independent of T1.

Innovation (C) is downstream of B. Without a discovery-mechanism piece in the Q-tree, Innovation generates candidates only for the policy shape, not the discovery mechanism. The mixed-attribution flag for C reflects this inheritance — Innovation didn't fail to do its job; the Q-tree it received didn't have the relevant axis.

Critique (D) is the last stage. D's specification-gap prosecution dimension would have surfaced the missing discovery mechanism even if A, B, and C all missed it. That's why TP3 (cross-cutting prosecution-depth rule) is the right scope for D's candidate: a depth-axis check at Critique catches gaps from any upstream stage.

### Why the 5 per-chain candidates (T1, T2, T3, T7, T8) survived Critique

- **T1 SURVIVED** because the dual-surface (Phase 3 + Phase 5) defense in depth structure is appropriate for catching the same Sensemaking shortcoming at two stages. Single-chain evidence specifically for the discoverability-check sub-type is acknowledged as a caveat; the broader Phase 5 layer is at 2 chains via M6-refinement-S2's coverage.

- **T2 SURVIVED with explicit single-chain caveat** (P11 at 1 chain). Decomposition has been silent in chains 1-5; chain 6 is the first per-chain Decomposition shortcoming. The defense — Decomposition's silence was attribution-elsewhere, not Decomposition correctness — held.

- **T3 SURVIVED** because the discovery-mechanism axis is structurally distinct from N3 (storage), R3 (phase), and S3 (classifier). Together they cover four orthogonal Innovation axes; T3's recognition predicate (*"operation-policy candidates with runtime-determined triggers"*) narrows scope.

- **T7 SURVIVED** because the cost is trivial and the two-layer Status note acknowledges chain 1's separate diagnosis explicitly. Mirrors M7+N7+O7+R7+S7 pattern with two-layer refinement.

- **T8 SURVIVED** because multi-track monitoring is appropriate at chain 6 — the corpus has matured to the point where rule-evolution tracking is structurally necessary (3 M6 refinements + 1 N9 promotion + 2 cross-cutting rules).

### Why M6-refinement-S2 PROMOTION

Mechanically grounded in chain-5 deferral revival language: *"revive at chain 6 if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs."* Chain 5's trigger-classifier sub-type and chain 6's specification-gap sub-type are BOTH at the Phase 5 / Conceptual Stabilization output layer — revival trigger met.

P1 family at 5 chains × 5 layer-sub-types is the strongest cross-chain claim across the LOOP_DIAGNOSE corpus by chain count. The refinement is small in scope (one extension to existing M6 Sensemaking sub-rule) and covers BOTH observed Phase 5 sub-types.

The cumulative refinement burden (3) is real and tracked. Chain-7 consolidation review is the right next pace — promoting refinement-S2 at chain 6 captures chain 6's evidence in M6's current shape; consolidation review at chain 7 then addresses the structural question. Deferring refinement-S2 at chain 6 would mean the revival-trigger-met condition is ignored — promoting it respects the chain-5 deferral language.

### Why TP3 PROMOTION

P3 family (Critique prosecution-depth shortcomings) reached the 3-chain threshold this run. The three observed sub-types (chain 3's user-perspective per O3, chain 5's failure-case per S2, chain 6's specification-gap per H4) span three distinct chains and three distinct Critique prosecution dimensions.

The 3-chain threshold for cross-cutting candidate revival/promotion is the established LOOP_DIAGNOSE convention. TP3 promotion mechanically respects this convention.

The *"pick the depth-axes most relevant"* wording is judgment-dependent but necessary — applying ALL axes uniformly to every Critique run would be over-firing. The relevance check is the right mechanism.

TP3 is the SECOND cross-cutting rule in the LOOP_DIAGNOSE corpus (after M6). The corpus's cross-cutting-rule structure now has two rules covering different surfaces (M6: Sensemaking + Critique-dimension; TP3: Critique-prosecution). O3 and S2 remain valid as concrete instances under TP3's broader formalization — TP3 subsumes their shared meta-property without replacing them.

### Why Q-RF stays Research Frontier (NOT a candidate)

Four specific instances across four chains might tempt promoting Predictive RC implementation steps. Rejected. Q-RF's underlying capability gap (Quality-Awareness — distinct from object-level reasoning) requires multi-phase architectural work per `enes/desc.md`. The four observed instances reinforce the gap as a real Research Frontier; they do NOT justify per-chain candidates.

Predictive RC implementation needs end-goal loop architecture work; per-chain LOOP_DIAGNOSE patches cannot bridge to it. Q-RF stays Research Frontier across chain 6, with the fourth specific instance (operational-discovery-gap awareness) added to the catalog.

### Why Two-Layer Failure Framing in Reasoning, NOT in Candidates

The two-layer framing is a corpus-level observation about chain 6's position relative to chain 1's separately-diagnosed failure. It is NOT a per-chain shortcoming or a maintenance candidate. Including it as a candidate would dilute the candidate set.

The defense — that the framing answers part of the diagnostic_goal's second sub-question (*"was the index recommendation a reasonable bridge or overcorrection?"*) — survives. The right place is the Reasoning section here, plus the T7 Status note. The framing is documentation for future readers of the chain-6 / chain-1 corpus position, not a rule.

### Reconciliation across stages

Exploration's nine cycles (corrected loop's structural shift; human correction signal type analysis; affected-stage attribution table; active artifact population scan; Sensemaking specification gap evidence; Decomposition Q-tree completeness; Innovation candidate axes; Critique dimension scope; cross-chain pattern observations) converged on the four primary shortcomings (A, B, C, D).

Sensemaking's SV1-SV6 progression stabilized the load-bearing concept set: source-present check; runtime determination; discovery mechanism; index-as-bridge; index-as-overcorrection. Phase 2's six perspectives surfaced the operational-detail blind spot. Phase 3's four ambiguity-collapse entries resolved the proxy-bridge ambiguity (index ≠ search-contract).

Decomposition's 13-piece question tree mapped the shortcomings to the LOOP_DIAGNOSE Step 4 schema with cross-chain extension and the TWO cross-chain promotion events as separate boundary regions.

Innovation's 7 mechanism outputs (4 generators + 3 framers) produced 9 candidate designs that passed assembly check.

Critique's Phase 0-3 evaluation evaluated each candidate along the 6-dimension framework with 4 critical dimensions (Evidence Strength, Recurrence Prevention, Evaluation Gate Specificity, Overreach Risk). The strongest assembly survived with refinements before implementation specified explicitly.

No contradictions across stages. The cascade A → B → C → D is consistent with all upstream evidence. The TWO cross-chain promotion events are mechanically justified by chain-5 deferral language and 3-chain P3 threshold respectively. Q-RF stays Research Frontier — no stage proposed elevating it. Two-Layer Failure Framing is a corpus-level observation appearing in Reasoning across multiple stages.

### Significant kills (Innovation stage)

- A *"broader Decomposition completeness rule"* candidate was killed by overreach risk: the rule applied to all Q-trees, not just operation-policy with runtime triggers — too broad for chain-6 evidence.
- A *"discoverability check at all 6 SV stages"* candidate was killed by overreach risk: too broad relative to the observed evidence at Phase 3 + Phase 5 specifically.
- A *"Predictive RC implementation steps"* candidate was killed by Q-RF Research Frontier framing: out of scope for per-chain candidates; requires architectural work.
- A *"LOOP_DIAGNOSE protocol-level promotion-event format change"* candidate was killed by Step 6 guardrail: not enough evidence at chain 6 to change protocol structure beyond chain 5's N9 codification.
- An *"M6 wholesale Sensemaking sub-rule replacement"* candidate was killed by overreach risk: M6 should refine, not be replaced; consolidation review is at chain 7+.

### Trivial kills

- *"MVL+ pipeline structure changes"* — out of scope per LOOP_DIAGNOSE Step 5.
- *"Replace existing Sensemaking discipline"* — far beyond chain-6 evidence.
- *"Add a 7th SIC-shaped discipline"* — protocol-level, not chain-6 scope.
- *"Skip Critique for chain-6's known cascade"* — violates MVL+ pipeline invariant.

### Previous LOOP_DIAGNOSE candidates — status updates

- **M1, N2, O1, R1, S1** (Sensemaking concept-stabilization across multiple layers): retained; M6-refinement-S2 PROMOTION extends M6 to cover Phase 5 layer (where chains 5 and 6 both surfaced instances). T1 opens a fifth Sensemaking surface (discoverability-check at Phase 3 + Phase 5).
- **M3, N4, O2, R2** (Critique project-specific dimensions): retained; M6's Critique sub-rule (with chain-4 refinement-C wording tightening) covers these.
- **M4, M5, M9** (deferred): no new evidence in this chain. Gates unchanged.
- **M6** (cross-cutting `name-and-test` pattern): refined further this run via M6-refinement-S2 PROMOTION. Cumulative refinement count: 3. Consolidation review trigger at chain 7+.
- **M7, N7, O7, R7, S7** (mark prior finding superseded): mirrored by T7 with two-layer Status note. Pattern consistent.
- **M8, N8, O8, R8, S8** (monitoring): extended by T8 with chain-6-specific tracking dimensions.
- **N5, O5 effectively** (output-level source verification, deferred): N2's process-rule still in evaluation window. Gate unchanged.
- **N6, O6 effectively** (cultural-norms manifest file, deferred): N1 in evaluation window. Gate unchanged.
- **N9** (LOOP_DIAGNOSE protocol promotion-gate documentation): PROMOTED in chain 5; codification stands.
- **O3** (Critique prosecution-strength check, single-chain): SUBSUMED by TP3 PROMOTION as the user-perspective sub-type. O3 remains valid as concrete instance under TP3's broader formalization.
- **O4** (Innovation candidate-discrimination check on cosmetic variants, single-chain): no extension this chain (P4 stays at 1 chain). Gate unchanged.
- **R3** (Innovation phase-conditional candidate generation): retained; T3 is sister rule (different axis: discovery-mechanism vs phase).
- **R4** (Innovation guardrail scope-broadening, single-chain caveat): no extension this chain. Gate unchanged.
- **S1** (Sensemaking proxy-vs-structural test for trigger-classifier rules; chain-5 candidate): retained; M6-refinement-S2 PROMOTION makes S1 a concrete instance under the broader Phase 5 / Conceptual Stabilization output rule.
- **S2** (Critique prosecution failure-case construction, single-chain caveat): SUBSUMED by TP3 PROMOTION as the failure-case sub-type. S2 remains valid as concrete instance under TP3's broader formalization.
- **S3** (Innovation differential-classifier candidate generation): retained; T3 is sister rule (different axis: discovery-mechanism vs structural-vs-proxy classifier).

## Open Questions

### Monitoring

- **M6 cumulative refinement count**: currently 3. If chain 7+ adds a fourth refinement, consolidation review triggers.
- **TP3 effectiveness**: newly promoted at chain 6. Chain-7 effectiveness check is the next gate.
- **P11 family chain count**: currently 1 (Decomposition completeness). Cross-cutting promotion threshold is 3 chains.
- **Signal-type observation**: chain 6 was question-style (*"isnt this more easy? but agian is this feasible?"*). Sixth distinct expression style across the LOOP_DIAGNOSE corpus.
- **Corpus-level pattern stability**: TWO cross-chain promotion events in a single chain is a milestone — observe whether chain 7+ continues at one promotion per chain or the milestone repeats.
- **Two-Layer Failure Framing recurrence**: observe whether chain 7+ shows another instance of *"diagnosis stands UPSTREAM of separately-diagnosed downstream failure."*

### Blocked

- **M6 consolidation review**: blocked until chain 7+ refinement count reaches 4 OR cumulative-refinement burden becomes operationally measurable.
- **LOOP_DIAGNOSE protocol-level changes beyond N9 codification**: blocked until chain 7-10 produces convergent protocol-level proposals.

### Research Frontiers

- **Q-RF (Quality-Awareness Gap)**. Reinforced this run with the fourth specific instance: operational-discovery-gap awareness. Joins prior instances (metacognitive awareness, calibration-awareness, proxy-vs-structural-awareness). Predictive RC implementation requires multi-phase architectural work per `enes/desc.md` end-goal loop architecture; out of scope for per-chain candidates. Stays Research Frontier across chain 6.

### Refinement Triggers

- **M6-refinement-S2 chain-7 effectiveness check.** Refinement-S2 was promoted this run; if chain-7 Sensemaking output for trigger-classifier or specification-gap concepts at Phase 5 does NOT exhibit the refined rule firing, M6-refinement-S2 re-opens.
- **TP3 chain-7 effectiveness check.** TP3 was promoted this run; if chain-7 Critique runs against candidates where prosecution-depth-axes apply do NOT show TP3's relevance-check firing, TP3 re-opens.
- **T2 single-chain revival trigger.** If chain-7 LOOP_DIAGNOSE shows another P11 instance (Decomposition discovery-mechanism gap), T2's caveat is reinforced toward cross-cutting promotion.
- **M6 consolidation review trigger.** If chain-7+ cumulative refinement count reaches 4, M6 consolidation review becomes mandatory.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review

corrected_path:
devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility

human_correction:
The user asked whether Homegrown should keep a record of all Navigation-related file creations so there would be a PastNavigationMemoryFile index, asking whether that would be easier and feasible.

optional_context:
The prior inquiry made early-stage robust review depend on whether a PastNavigationMemoryFile exists. The later inquiry tried to solve that discovery pressure by recommending a maintained index, while narrowing it away from all Navigation-related files.

diagnostic_goal:
Diagnose whether the source-present robust policy created an under-specified discovery problem that pushed the next loop toward a maintained index. Identify what the prior loop did or did not specify about discovering PastNavigationMemoryFile candidates, and whether the later index idea was a reasonable bridge or an overcorrection. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>
