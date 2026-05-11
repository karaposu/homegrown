---
status: active
type: loop_diagnose_finding
---
# Finding: Loop Diagnose — Aggregate Naming and Boundary Drift

## Question

**Question (from `_branch.md`):** Across the correction chain rooted at `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/` (where `prior_map_overlay` was the original artifact name, replaced by `Route Memory Review`), corrected by `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/` (where `Route-Memory Preflight` was rejected as a separate routine in favor of `route-memory status classification`), and reinforced by supporting context from three additional folders (`PastNavigationMemoryFile`, `source-present`, `PastNavigationMemoryFile Index`, `PastNavigationMemoryFile Discovery Search`) — and given the user's repeated pushback that `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough — what is the evidence-backed diagnosis for why unclear names kept producing mechanism confusion across the chain, and which of the candidate weakness axes (framing, Sensemaking vocabulary selection, Conclude wording, lack of user-language validation) is most likely the locus?

**Goal (from `_branch.md`):** Identify evidence-backed failure hypotheses for why unclear names kept producing mechanism confusion, with confidence levels (kept lower per aggregate-diagnostic constraint), affected stages, shortcoming types, and maintenance candidates with explicit evaluation gates. Seventh LOOP_DIAGNOSE run.

## Finding Summary

- **Failure diagnosis (cross-cutting absence + load-bearing manifestation).** The primary failure is the **cross-cutting absence of a user-language validation step** (Stage D, HIGH confidence). It manifests most strongly at **Sensemaking Phase 5 / Conceptual Stabilization output vocabulary commitment** (Stage A, HIGH; load-bearing). Secondary amplification surfaces are **Framing inheritance** (Stage B, MEDIUM) and **Conclude amplification** (Stage C, MEDIUM). The cleanest single-loop isolation is supporting context `2026-05-05_20-02` where `PastNavigationMemoryFile` and `source-present` were coined autonomously without any validation step.

- **Six per-chain ACTIONABLE candidates.** U1 (PRIMARY: Sensemaking user-language validation check at Phase 5; sister rule to T1); U7 (TP3 refinement for vocabulary-naturalness sub-type; chain-7 effectiveness check #1 fires correctly); U2 (Framing name-question check; single-chain caveat); U3 (Conclude name-validation check; single-chain + low-mechanism-independence caveats); U5 (mark prior finding corrected with two-layer Status note); U6 (extend M8+...+T8 monitoring with chain-7 tracking dimensions).

- **TWO DEFERRED candidates with explicit revival triggers.** **M6-refinement-U** deferred to chain-8 consolidation review (cumulative refinement count of 3 makes a 4th refinement trigger consolidation involuntarily; chain-7 evidence does not justify forcing). **U9** (Sensemaking operation-shape stability check at Phase 4) deferred to operational-shape evidence revival trigger (jump-scan single-cycle limitation; new Phase 4 structural surface needs stronger evidence).

- **TP3 effectiveness check #1 outcome: FIRES CORRECTLY.** Chain-7's Critique applies TP3's prosecution-depth rule across all four sub-types — user-perspective (chain-3 O3), failure-case (chain-5 S2), specification-gap (chain-6), and vocabulary-naturalness (chain-7) — across all U1-U6 evaluations. TP3's "future sub-types may emerge" caveat respected; vocabulary-naturalness joins as the 4th sub-type via U7.

- **Q-RF Reinforcement (Research Frontier; 5th specific instance).** The Quality-Awareness Gap is reinforced with vocabulary-naturalness awareness, joining metacognitive (chain 3), calibration (chain 4), proxy-vs-structural (chain 5), and operational-discovery-gap (chain 6). Stays Research Frontier; NOT a per-chain candidate.

- **Two-Layer Failure Framing (corpus-level observation, NOT a candidate).** Operational-shape jump-scan observation: rename events trace to operation-shape rethinks (vocabulary churn may be symptom of operational-shape instability). Documented in Reasoning; tied to U9's deferral and revival trigger.

- **Chain-7 milestone.** **FIRST chain since chain 1 to produce only per-chain candidates plus Research Frontier reinforcement** — no new cross-chain promotion event. The corpus's promotion-trigger mechanics worked as intended; the aggregate-diagnostic confidence constraint led to conservative selection.

- **Verdict: ACTIONABLE-PARTIAL** with aggregate-diagnostic confidence caveats throughout. Six ACTIONABLE per-chain candidates; concrete evaluation gates; two deferred candidates with revival triggers; Q-RF Research Frontier; Two-Layer Failure Framing observation. Chain-7 deliberately did NOT trigger M6 consolidation, did NOT introduce new SIC-shaped discipline, did NOT push protocol-level changes from chain 7 alone.

## Finding

### 1. The shortcoming and its diagnosis

The corpus's correction chain shows 5 rename events across 5 inquiry findings: `prior_map_overlay` → `Route Memory Review`; `Route-Memory Preflight` → `route-memory status classification`; `PastNavigationMemoryFile` (kept but with user pushback); `source-present` (kept but with user pushback); `PastNavigationMemoryFile Index` → `PastNavigationMemoryFile Discovery Search`.

The rename events have a structural pattern: when the user supplied a name in the input, the loop adopted it (sometimes uncritically); when the loop coined a name autonomously, no validation against user-language occurred. The corrected loops succeeded only because the user provided the validation in subsequent input. There is an ASYMMETRY — the loop has a built-in respect mechanism for user-supplied names that does NOT extend to loop-coined names.

The cleanest single-loop isolation is supporting context (`2026-05-05_20-02`) where `PastNavigationMemoryFile` and `source-present` were coined autonomously without any validation step. This is the strongest single-loop direct positive evidence for the autonomous-coining failure mode that the primary maintenance candidate U1 prevents.

The cross-cutting absence is observable across 4/5 chains: only chain 1 has a "Terms Used Here" section justifying its vocabulary commitments. Chains 2-5 lack vocabulary justification, even when they coin new load-bearing concepts. This is supplementary evidence consistent with the single-loop isolation — the gap is structural, not incidental.

### 2. The shortcoming cascade (Stage A + Stage D as primary; Stage B and Stage C as amplification)

The four candidate weakness axes named in the diagnostic_goal are not equally weighted, and they are not independent:

- **Stage A — Sensemaking vocabulary commitment without user-language validation (HIGH).** SV2-SV3 / Phase 5 Conceptual Stabilization output commits to a name without testing whether the name matches user-language. Chain 1's "Terms Used Here" was a partial mitigation (definitions provided), but did not include user-language validation specifically. Stage A is the load-bearing surface where names are coined.

- **Stage B — Framing inheritance of unvalidated names (MEDIUM).** `_branch.md` writing step inherits names from prior context (user input or prior finding) without questioning whether the inherited name is appropriate. The framing stage hands a pre-named question to Sensemaking. Stage B is upstream amplification.

- **Stage C — Conclude amplification of unvalidated names (MEDIUM).** Finding-template structure amplifies committed names without a vocabulary-validation step before amplification. Once a name is committed, it appears 5+ times in the finding without re-validation. Stage C is downstream amplification.

- **Stage D — Cross-cutting absence of explicit user-language validation step (HIGH; spans A+B+C).** No discipline (Exploration, Sensemaking, Decomposition, Innovation, Critique) has a built-in step that asks "would the user say it this way?" or "does this name match the user's language?" The absence is observable across all 5 chains' artifacts.

The primary diagnosis is Stage D (cross-cutting absence). Stage A is the strongest single-stage manifestation. Stages B and C are amplification surfaces. The four axes are organized as one cross-cutting absence (D) manifesting at three stages (A, B, C) — they are not parallel options.

### 3. The six per-chain ACTIONABLE candidates

**U1 — Sensemaking user-language validation check at Phase 5 / Conceptual Stabilization output (PRIMARY).** When Sensemaking commits a load-bearing concept name at Phase 5 / Conceptual Stabilization output (load-bearing = name appears 3+ times in finding OR in MUST-action items), verify either (a) the name appears in user input verbatim/paraphrase, OR (b) the name's match-with-user-language has been explicitly justified in the SV6 commitment with named alternatives considered. U1 is the primary candidate — six of seven Innovation mechanisms converge on it. Sister rule to chain 6's T1 (discoverability check at Phase 5); both T1 and U1 are sub-rules under the Phase 5 vocabulary-justification umbrella, covering different sub-aspects (discoverability, vocabulary-naturalness).

**U7 — TP3 refinement for vocabulary-naturalness sub-type.** TP3 (cross-cutting prosecution-depth rule for Critique, promoted at chain 6) is extended to a 4th sub-type: vocabulary-naturalness. TP3's "future sub-types may emerge" caveat is respected. Chain-7's Critique applies TP3's relevance-check across all four sub-types (user-perspective per O3, failure-case per S2, specification-gap per chain-6, vocabulary-naturalness per chain-7) — TP3 effectiveness check #1 FIRES CORRECTLY. U7 promotes from PENDING to ACTIONABLE.

**U2 — Framing name-question check in `_branch.md` (single-chain caveat).** When `_branch.md` inherits a name from user input or prior context, mark it as "not yet validated" until Sensemaking Phase 5 validates. Opens P12 family at 1 chain (Framing-stage vocabulary-validation). Single-chain caveat applies; revival trigger if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P12 instance.

**U3 — Conclude name-validation check (single-chain + low-mechanism-independence caveats).** CONCLUDE re-checks coined names against user input before committing in `finding.md`. If a load-bearing name appears 5+ times in the finding but never in user input, prompt for justification. Single-chain caveat + low-mechanism-independence caveat (only one of seven Innovation mechanisms produced U3); revival trigger if not effective in 3 CONCLUDE runs OR if next LOOP_DIAGNOSE shows convergent CONCLUDE-stage evidence.

**U5 — Mark prior finding corrected with two-layer Status note.** Prior finding's frontmatter (supporting context `2026-05-05_20-02` is the cleanest single-loop isolation) gets `corrected_by:` pointing at chain 7's diagnostic finding; Status note at start of prior's body explicitly notes (a) the immediate correction (vocabulary commitment without user-language validation), AND (b) the corpus-level observation that the prior loop coined autonomously without validation, which contributed to subsequent vocabulary drift across chains 4-5. Mirrors M7+N7+O7+R7+S7+T7 pattern with two-layer adaptation.

**U6 — Continue monitoring (extends M8+N8+O8+R8+S8+T8).** At chain-8 LOOP_DIAGNOSE run completion, document: U1 effectiveness, M6 cumulative refinement count post-chain-7, TP3 effectiveness chain-7 outcome, P1 layer-sub-type count, P12 chain count, signal-type observation, Q-RF instance count, Two-Layer Failure Framing recurrence.

### 4. The TWO DEFERRED candidates

**M6-refinement-U DEFERRED (chain-8 consolidation review revival trigger).** Promoting M6-refinement-U at chain 7 would push M6 cumulative refinement count from 3 to 4, mandatorily triggering consolidation review at chain 8. Chain-7's evidence (vocabulary-validation gap) does not justify forcing consolidation involuntarily. The deferral is the right resolution: at chain-8 LOOP_DIAGNOSE run completion, M6 consolidation review MUST address user-language validation as part of M6's consolidated rule shape. If no chain-8 consolidation review occurs (e.g., chain 8 has no relevant input), M6-refinement-U revives mechanically.

**U9 DEFERRED (operational-shape evidence revival trigger).** U9 (Sensemaking operation-shape stability check at Phase 4 / Functional Stabilization) is the jump-scan deeper-layer hypothesis: rename events trace to operation-shape rethinks; vocabulary churn may be symptom of operational-shape instability. Chain-7's evidence is ONE cycle of jump-scan reasoning, not multi-loop direct observation. New Phase 4 structural surface needs stronger evidence. The deferral is the right resolution: if a future chain shows operational-shape evidence as primary cause of vocabulary churn (multi-loop direct observation predicting vocabulary churn from operational-shape instability), U9 re-opens with revised evidence base.

### 5. Q-RF Reinforcement (Research Frontier — NOT a candidate; 5th specific instance)

The Quality-Awareness Gap (Q-RF, introduced in chain 3) is reinforced with its FIFTH specific instance: vocabulary-naturalness awareness. The five observed instances are:

- Chain 3 — metacognitive awareness (the user said *"this feels wrong but I can't articulate why"*).
- Chain 4 — calibration-awareness (the prior loop didn't account for phase / calibration state).
- Chain 5 — proxy-vs-structural-awareness (the prior loop adopted a proxy distinction at the trigger-classifier-rule layer).
- Chain 6 — operational-discovery-gap awareness (the prior loop's load-bearing concept depended on runtime determination but the determination mechanism was unspecified).
- **Chain 7 — vocabulary-naturalness awareness** (the user sensed names "either sounded like the wrong operation or were not understandable enough" without articulating exactly why each was wrong).

Q-RF stays as Research Frontier. The five reinforcing instances do NOT translate into per-chain maintenance candidates. Predictive RC implementation requires multi-phase architectural work per `enes/desc.md`; per-chain LOOP_DIAGNOSE patches cannot bridge to it. Q-RF is documented in Open Questions / Research Frontiers as longer-horizon direction.

### 6. Two-Layer Failure Framing (operational-shape jump-scan observation)

Each rename event was paired with an operation rethink:
- `prior_map_overlay` → `Route Memory Review` rename was accompanied by reframing the operation from "bookkeeping artifact" to "memory review operation."
- `Route-Memory Preflight` → `route-memory status classification` rename was accompanied by reframing the operation from "separate routine" to "classification inside existing intake."
- `PastNavigationMemoryFile Index` → `PastNavigationMemoryFile Discovery Search` rename was accompanied by reframing the operation from "maintained registry" to "search contract."

The deeper-layer hypothesis: names drift because operations drift. Vocabulary churn may be a SYMPTOM of operational-shape instability. Chain-7's evidence is one cycle of jump-scan reasoning (Cycle 14 of Exploration); insufficient to anchor as primary diagnosis at chain 7. Documented as corpus-level observation in Reasoning; tied to U9's deferral and revival trigger.

### 7. Chain-7 milestone

Chain 7 is the **FIRST chain since chain 1** to produce only per-chain candidates plus Research Frontier reinforcement. No new cross-chain promotion event. The corpus's promotion-trigger mechanics worked as intended:

- M6 cumulative refinement count stays at 3 (chain-7 deliberately did NOT trigger consolidation).
- TP3 effectiveness check #1 fires correctly; vocabulary-naturalness extends TP3 catalog without requiring TP3 refinement.
- No new SIC-shaped discipline introduced (Inversion Level 3 contrarian variation killed by Step 5 + Step 6 guardrails).
- No LOOP_DIAGNOSE protocol-level change pushed from chain 7 alone (deferred to chain 7-10 effective range).

The aggregate-diagnostic confidence constraint led to conservative selection — single-chain caveats applied to U2, U3; deferral chosen for M6-refinement-U and U9; Q-RF stays Research Frontier; Two-Layer Failure Framing stays documentation note.

### 8. Verdict

**ACTIONABLE-PARTIAL** with aggregate-diagnostic confidence caveats throughout. Six per-chain ACTIONABLE candidates (U1 PRIMARY; U2, U3, U5, U6, U7) with concrete evaluation gates. Two DEFERRED candidates (M6-refinement-U, U9) with explicit revival triggers. Q-RF Research Frontier reinforcement (5th specific instance: vocabulary-naturalness awareness). Two-Layer Failure Framing as corpus-level observation. Chain-7 milestone: first chain since chain 1 with no cross-chain promotion event.

## Next Actions

### MUST

- **What:** Promote U1 (Sensemaking user-language validation check at Phase 5 / Conceptual Stabilization output) as ACTIONABLE.
  - **Who:** Sensemaking discipline spec (`/Users/ns/.claude/skills/sense-making/SKILL.md`).
  - **Gate:** In next 3 MVL+ runs producing Sensemaking outputs with newly-coined load-bearing concept names (load-bearing = appears 3+ times in finding OR in MUST-action items), U1 fires (Phase 5 / Conceptual Stabilization output marker confirms either (a) name appears in user input verbatim/paraphrase, OR (b) name's justification is explicit in SV6 with named alternatives considered).
  - **Why:** Closes the load-bearing vocabulary-validation gap observable across 4/5 chains. Sister rule to chain 6's T1 (discoverability check) under Phase 5 vocabulary-justification umbrella.

- **What:** Promote U7 (TP3 refinement for vocabulary-naturalness sub-type) as ACTIONABLE.
  - **Who:** Critique discipline spec / TP3's depth-axis catalog.
  - **Gate:** In next 3 Critique runs against candidates where prosecution-depth-axes apply, TP3's relevance-check fires across all four sub-types (user-perspective, failure-case, specification-gap, vocabulary-naturalness).
  - **Why:** Extend TP3's depth-axis catalog respecting "future sub-types may emerge" caveat. Chain-7 effectiveness check #1 fires correctly; vocabulary-naturalness is observably a 4th sub-type. Caveats: four sub-types observed so far; future sub-types may emerge; chain-8 effectiveness check.

- **What:** Promote U2 (Framing name-question check in `_branch.md`) as ACTIONABLE with single-chain caveat.
  - **Who:** `_branch.md` template / Framing stage convention.
  - **Gate:** In next 3 MVL+ runs producing `_branch.md` files inheriting names from user input, U2 fires (the inherited name is marked "not yet validated" until Sensemaking Phase 5 validates).
  - **Why:** Defense in depth at Framing stage. Single-chain caveat (P12 family at 1 chain); revival trigger if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P12 instance.

- **What:** Promote U3 (Conclude name-validation check) as ACTIONABLE with single-chain + low-mechanism-independence caveats.
  - **Who:** CONCLUDE protocol step (in `/Users/ns/.claude/skills/protocols/conclude.md`).
  - **Gate:** In next 3 CONCLUDE runs producing `finding.md` files where a load-bearing concept name appears 5+ times, U3 fires (CONCLUDE checks whether the name appears in user input; if not, prompts for justification before committing).
  - **Why:** Defense in depth at CONCLUDE stage; downstream position catches gaps Sensemaking missed.

- **What:** Promote U5 (mark prior finding corrected with two-layer Status note) as ACTIONABLE.
  - **Who:** Manual edit to prior `finding.md` (supporting context `2026-05-05_20-02`).
  - **Gate:** Frontmatter `corrected_by:` + Status note at start of body covering both layers (immediate correction + corpus-level observation that the prior loop coined autonomously without validation).
  - **Why:** Prevent runners reading the prior in isolation from executing the obsolete recommendation; preserve the corpus-level observation that the prior loop's vocabulary commitment was uncorrected at coining time.

- **What:** Promote U6 (extend M8+N8+O8+R8+S8+T8 monitoring with chain-7 tracking dimensions) as ACTIONABLE (always-on baseline).
  - **Who:** LOOP_DIAGNOSE protocol's monitoring track.
  - **Gate:** At chain-8 LOOP_DIAGNOSE run completion, document U1 effectiveness, M6 cumulative refinement count post-chain-7, TP3 effectiveness chain-7 outcome, P1 layer-sub-type count, P12 chain count, signal-type observation, Q-RF instance count, Two-Layer Failure Framing recurrence.
  - **Why:** Manage the maturing rule-evolution structure (3 M6 refinements + 1 N9 promotion + 2 cross-cutting rules + 5 Q-RF instances).

### COULD

(All COULD candidates from Innovation became MUST after Critique survival; nothing additional in COULD tier this chain.)

### DEFERRED

- **What:** M6-refinement-U (extend M6 Sensemaking sub-rule to include user-language validation as a test criterion).
  - **Gate:** Trigger at chain-8 LOOP_DIAGNOSE run completion; M6 consolidation review MUST address user-language validation as part of M6's consolidated rule shape. If no chain-8 consolidation review occurs, M6-refinement-U revives mechanically.
  - **Why (if revived):** Pushing M6 cumulative refinement count to 4 at chain 7 would force consolidation involuntarily; deferring respects the cumulative-refinement structural pressure while preserving the candidate for chain 8's consolidation review.

- **What:** U9 (Sensemaking operation-shape stability check at Phase 4 / Functional Stabilization).
  - **Gate:** If a future chain shows operational-shape evidence as primary cause of vocabulary churn (multi-loop direct observation that operational-shape rethink predicts vocabulary churn), U9 re-opens with revised evidence base.
  - **Why (if revived):** The jump-scan deeper-layer hypothesis (operational-shape instability behind vocabulary churn) may become primary if direct multi-loop evidence emerges; new Phase 4 structural surface needs stronger evidence than chain-7's single-cycle jump-scan provides.

- **What:** Predictive RC (Robustness Check) implementation steps for Q-RF (Quality-Awareness Gap).
  - **Gate:** Out of scope for per-chain LOOP_DIAGNOSE candidates. Requires multi-phase architectural work per `enes/desc.md` end-goal loop architecture.
  - **Why (if revived):** Q-RF has now been reinforced with 5 specific instances across chains 3-7. If chain 8-10 produces additional instances OR if the end-goal loop architecture work begins, Q-RF transitions from Research Frontier to actionable architectural design.

- **What:** LOOP_DIAGNOSE protocol-level changes beyond N9 codification.
  - **Gate:** Chain 7-10 effective range for protocol-level changes per Step 6 (5-10 finding window). Trigger only when 3+ findings within chain 7-10 propose convergent protocol-level changes.
  - **Why (if revived):** The corpus is now mature enough (7 chains, 2 cross-cutting rules, 1 N9 promotion, 3 M6 refinements, 5 Q-RF instances) that protocol-level changes may emerge from cumulative learning.

## Reasoning

### Why the cross-cutting framing (Stage D) is primary, with Sensemaking (Stage A) as load-bearing

Sensemaking (Stage A) is the upstream surface where vocabulary is committed. The corrected loop's Exploration Cycle 4 (active artifact population scan) and Innovation index candidate are direct evidence of the gap that Stage A would have surfaced earlier — both the corrected loops and the human correction independently asked "is this name right?", which is the validation question A's user-language check addresses.

Framing (Stage B) inherits names from user input or prior context without questioning. Stage B is upstream of Sensemaking; the gap is structural inheritance, not active failure. A framing-only fix without Sensemaking discipline change would not catch loop-coined names. So Stage B is necessary-but-not-sufficient.

CONCLUDE (Stage C) amplifies committed names without re-validating before propagation. Stage C is downstream of Sensemaking; the source is upstream. A CONCLUDE check is the last line of defense.

The cross-cutting absence (Stage D) names what's MISSING across all stages: no discipline has a built-in user-language validation step. Stage D is the unifying explanation: A, B, C are surfaces where the missing step would plug in. The cross-cutting framing is the correct PRIMARY diagnosis; Stage A is the correct PRIMARY locus for the maintenance candidate (U1).

### Why the six per-chain candidates survived Critique

- **U1 SURVIVED** because six of seven Innovation mechanisms converge on it; sister-rule positioning under Phase 5 vocabulary-justification umbrella keeps cognitive load bounded; recognition predicate has dual escape valves (user-input verbatim/paraphrase OR explicit justification with named alternatives); the cleanest single-loop isolation (supporting context `2026-05-05_20-02`) provides HIGH-quality direct positive evidence.

- **U7 SURVIVED** because TP3 effectiveness check #1 fires correctly via this Critique applying all four sub-types (user-perspective, failure-case, specification-gap, vocabulary-naturalness) across the U1-U6 evaluations. TP3's "future sub-types may emerge" caveat is respected; vocabulary-naturalness is observably a 4th sub-type.

- **U2 SURVIVED with single-chain caveat** because Framing-stage P12 family is at 1 chain. Defense in depth structure (U1 + U2 + U3) provides composition value; single-chain revival trigger preserves the rule's narrow scope.

- **U3 SURVIVED with single-chain + low-mechanism-independence caveats** because CONCLUDE-stage evidence is single-chain and only one Innovation mechanism produced U3. Defense in depth at the last line catches gaps the upstream stages missed; trivial cost.

- **U5 SURVIVED** because the cost is trivial and the two-layer Status note explicitly preserves the corpus-level observation that the prior loop's vocabulary commitment was uncorrected at coining time. Mirrors M7-T7 lineage with two-layer adaptation.

- **U6 SURVIVED** because multi-track monitoring is appropriate at chain 7 — the corpus has matured to the point where rule-evolution tracking is structurally necessary (3 M6 refinements + 1 N9 promotion + 2 cross-cutting rules + 5 Q-RF instances).

### Why M6-refinement-U was DEFERRED (not promoted)

M6 cumulative refinement count is 3 (chain 4: refinement-S + refinement-C; chain 6: refinement-S2). Promoting M6-refinement-U at chain 7 would push count to 4, mandatorily triggering consolidation review at chain 8. Chain-7's evidence (vocabulary-validation gap) does not justify forcing consolidation involuntarily. The Sensemaking Phase 3 ambiguity-collapse explicitly resolved this at LOW confidence: both promotion and deferral were defensible; deferral chosen to respect the structural pressure of the cumulative refinement count.

User-language validation IS a test criterion within M6's existing "name-and-test" pattern. Adding it as part of chain-8 consolidation review (with M6's other refinement evidence) is consistent with M6's existing structure and avoids piecemeal layer-by-layer refinement burden.

### Why U9 was DEFERRED (not promoted)

U9 introduces a NEW Phase 4 / Functional Stabilization structural surface (operation-shape stability check). Chain-7's evidence is one cycle of jump-scan reasoning (Cycle 14 of Exploration), not multi-loop direct observation. The aggregate-diagnostic confidence constraint specifically warns against new structural surfaces from one cycle of jump-scan evidence.

The Two-Layer Failure Framing observation (rename events trace to operation-shape rethinks) is preserved in Reasoning as corpus-level documentation. If a future chain shows operational-shape evidence as primary cause of vocabulary churn (multi-loop direct observation), U9 re-opens with revised evidence base.

### Why Q-RF stays Research Frontier (NOT a candidate)

Five specific instances across five chains might tempt promoting Predictive RC implementation steps. Rejected. Q-RF's underlying capability gap (Quality-Awareness as distinct from object-level reasoning) requires multi-phase architectural work per `enes/desc.md`. The five observed instances reinforce the gap as a real Research Frontier; they do NOT justify per-chain candidates.

Predictive RC implementation needs end-goal loop architecture work; per-chain LOOP_DIAGNOSE patches cannot bridge to it. Q-RF stays Research Frontier across chain 7, with the fifth specific instance (vocabulary-naturalness awareness) added to the catalog.

### Why the chain-7 milestone matters

Chain 7 is the **FIRST chain since chain 1** to produce only per-chain candidates plus Research Frontier reinforcement. No new cross-chain promotion event. Five chains in a row (chains 2-6) produced cross-chain promotion events (M6 in chain 3, M6-refinement-S + M6-refinement-C in chain 4, N9 promotion in chain 5, M6-refinement-S2 + TP3 in chain 6). Chain 7's deliberate restraint shows that the corpus's promotion-trigger mechanics work in BOTH directions — they trigger when evidence supports promotion, AND they HOLD when evidence is constrained.

The aggregate-diagnostic confidence constraint specifically pushed for conservative selection. Chain 7's outcome (six per-chain ACTIONABLE candidates plus two DEFERRED with revival triggers plus Q-RF Research Frontier reinforcement plus Two-Layer Failure Framing observation) demonstrates that the constraint can be honored while still producing actionable diagnosis.

### Reconciliation across stages

Exploration's 15 cycles converged on the four primary shortcomings (A, B, C, D) plus the jump-scan operational-shape hypothesis. Sensemaking stabilized the model at SV6 with cross-cutting absence as primary diagnosis and U1 as primary candidate. Decomposition mapped the 15-piece question tree (H × 4 + CS × 5 + XC × 3 + RF × 2 + V × 1). Innovation generated 21 variations across 7 mechanisms with HIGH convergence (6/7 mechanisms point to U1). Critique evaluated 9 candidates with prosecution/defense/collision; 6 ACTIONABLE survivors plus 2 DEFERRED plus 1 Research Frontier plus 1 Documentation Note.

No contradictions across stages. The cascade Stage D → Stage A (with Stage B and Stage C as amplification surfaces) is consistent with all upstream evidence. Q-RF stays Research Frontier — no stage proposed elevating it. Two-Layer Failure Framing is a corpus-level observation appearing in Reasoning across multiple stages.

### Significant kills (Innovation stage)

The candidates that did NOT survive Innovation included:

- A *"new Vocabulary discipline between Sensemaking and Decomposition"* (Inversion Level 3 contrarian) was killed by Step 5 + Step 6 guardrails — protocol-level overreach; new SIC-shaped disciplines need 5-10 findings of evidence.
- A *"force every load-bearing name to appear in user input verbatim"* (Constraint Manipulation Generic) was killed by overreach risk — too restrictive; would prohibit useful loop-coined neologisms.
- A *"discoverability check at all 6 SV stages"* (Absence Recognition Generic) was killed by overreach — too broad relative to Phase 5 evidence specifically.
- A *"Predictive RC implementation steps"* candidate was killed by Q-RF Research Frontier framing — out of scope for per-chain candidates.

### Trivial kills

- *"MVL+ pipeline structure changes"* — out of scope per LOOP_DIAGNOSE Step 5.
- *"Replace existing Sensemaking discipline"* — far beyond chain-7 evidence.
- *"Add a 7th SIC-shaped discipline"* — protocol-level, not chain-7 scope.
- *"Skip Critique for chain-7's known cascade"* — violates MVL+ pipeline invariant.

### Previous LOOP_DIAGNOSE candidates — status updates

- **M1, N2, O1, R1, S1, T1** (Sensemaking concept-stabilization across multiple layers): retained; T1 covers Phase 5 / Conceptual Stabilization output discoverability sub-aspect; **U1 covers Phase 5 vocabulary-naturalness sub-aspect**; both are sister rules under Phase 5 vocabulary-justification umbrella.
- **M3, N4, O2, R2** (Critique project-specific dimensions): retained; M6's Critique sub-rule covers these.
- **M4, M5, M9** (deferred): no new evidence in this chain. Gates unchanged.
- **M6** (cross-cutting `name-and-test` pattern): cumulative refinement count stays at 3 (chain 7 deferred M6-refinement-U). Consolidation review trigger at chain 8+.
- **M7-T7** (mark prior finding superseded): mirrored by U5 with two-layer Status note. Pattern consistent.
- **M8-T8** (monitoring): extended by U6 with chain-7-specific tracking dimensions.
- **N5, O5 effectively** (output-level source verification, deferred): N2's process-rule still in evaluation window. Gate unchanged.
- **N6, O6 effectively** (cultural-norms manifest file, deferred): N1 in evaluation window. Gate unchanged.
- **N9** (LOOP_DIAGNOSE protocol promotion-gate documentation): PROMOTED in chain 5; codification stands.
- **O3** (Critique prosecution-strength check, single-chain): SUBSUMED by TP3 PROMOTION as user-perspective sub-type. Remains valid as concrete instance under TP3's broader formalization.
- **O4** (Innovation candidate-discrimination check on cosmetic variants, single-chain): no extension this chain (P4 stays at 1 chain). Gate unchanged.
- **R3** (Innovation phase-conditional candidate generation): retained.
- **R4** (Innovation guardrail scope-broadening, single-chain caveat): no extension this chain. Gate unchanged.
- **S1** (Sensemaking proxy-vs-structural test, chain-5 candidate): retained; M6-refinement-S2 makes S1 a concrete instance under broader Phase 5 / Conceptual Stabilization output rule.
- **S2** (Critique prosecution failure-case construction, single-chain caveat): SUBSUMED by TP3 PROMOTION as failure-case sub-type. Remains valid as concrete instance under TP3's broader formalization.
- **S3** (Innovation differential-classifier candidate generation): retained.
- **T1** (Sensemaking discoverability check, chain-6 candidate): retained; sister rule to U1 under Phase 5 vocabulary-justification umbrella.
- **T2** (Decomposition discovery-mechanism inclusion check, single-chain caveat): retained; no chain-7 extension (P11 family stays at 1 chain). Gate unchanged.
- **T3** (Innovation discovery-mechanism candidate generation): retained.
- **TP3** (cross-cutting prosecution-depth rule for Critique): PROMOTED at chain 6; **effectiveness check #1 fires correctly at chain 7**; vocabulary-naturalness extends TP3 to a 4th sub-type via U7.
- **M6-refinement-S, M6-refinement-C, M6-refinement-S2** (M6 refinements; chains 4 + 6): retained; cumulative count 3.

## Open Questions

### Monitoring

- **U1 effectiveness:** newly promoted at chain 7. Chain-8+ effectiveness check is the next gate.
- **TP3 effectiveness check #1 outcome:** FIRES CORRECTLY at chain 7. Chain-8 effectiveness check #2 is the next gate.
- **U7 effectiveness:** newly promoted at chain 7 as TP3's 4th sub-type. Chain-8+ effectiveness check is the next gate.
- **M6 cumulative refinement count:** stays at 3 at chain 7 (deliberate non-trigger). Consolidation review trigger at chain 8+ if cumulative count remains 3+ AND chain 8 reveals evidence converging on consolidation question.
- **P12 family chain count:** currently 1 (Framing-stage vocabulary-validation via U2). Cross-cutting promotion threshold is 3 chains.
- **P1 family layer-sub-type count:** stays at 6 layer-sub-types via M6-refinement-S2 chain-6 promotion (chain 7 added vocabulary-naturalness as a sub-type INSIDE the Phase 5 surface, not as a new layer).
- **Signal-type observation:** chain 7 was aggregate vocabulary pushback (multi-name pushback across multiple chains). Seventh distinct expression style across the LOOP_DIAGNOSE corpus.
- **Corpus-level pattern stability:** chain 7 is FIRST chain since chain 1 with no new cross-chain promotion event. Observe whether chain 8+ continues this pattern or reverts to per-chain promotions.
- **Two-Layer Failure Framing recurrence (chain-7 variant):** chain 6's two-layer was about chain 6 + chain 1 corpus position; chain 7's two-layer is operational-shape jump-scan. Observe whether chain 8+ shows another two-layer instance.
- **Q-RF instance count:** 5 specific instances across chains 3-7. Observe whether chain 8 produces a 6th.

### Blocked

- **M6 consolidation review:** blocked until chain-8 LOOP_DIAGNOSE run completion OR chain-8+ refinement count reaches 4.
- **LOOP_DIAGNOSE protocol-level changes beyond N9 codification:** blocked until chain 7-10 produces convergent protocol-level proposals (chain 7 produces none).
- **U9 promotion:** blocked until operational-shape evidence emerges as multi-loop direct observation.

### Research Frontiers

- **Q-RF (Quality-Awareness Gap).** Reinforced this run with the fifth specific instance: vocabulary-naturalness awareness. Joins prior instances (metacognitive awareness, calibration-awareness, proxy-vs-structural-awareness, operational-discovery-gap awareness). Predictive RC implementation requires multi-phase architectural work per `enes/desc.md` end-goal loop architecture; out of scope for per-chain candidates. Stays Research Frontier across chain 7.

### Refinement Triggers

- **U1 chain-8+ effectiveness check.** U1 was promoted this run; if chain-8+ Sensemaking output for newly-coined load-bearing concept names does NOT exhibit U1 firing, U1 re-opens.
- **U7 chain-8+ effectiveness check.** U7 was promoted this run; if chain-8+ Critique runs against candidates where prosecution-depth-axes apply do NOT show TP3's relevance-check firing across all 4 sub-types, U7 re-opens.
- **U2 single-chain revival trigger.** If chain-8+ LOOP_DIAGNOSE shows another P12 instance (Framing-stage vocabulary-validation gap), U2's caveat is reinforced toward cross-cutting promotion.
- **U3 single-chain revival trigger.** If chain-8+ shows convergent CONCLUDE-stage evidence (multiple Innovation mechanisms producing CONCLUDE-stage candidates), U3's caveat is reinforced.
- **M6-refinement-U revival trigger.** At chain-8 LOOP_DIAGNOSE run completion, M6 consolidation review MUST address user-language validation as part of M6's consolidated rule shape; if no consolidation occurs, M6-refinement-U revives mechanically.
- **U9 revival trigger.** If a future chain shows operational-shape evidence as primary cause of vocabulary churn (multi-loop direct observation predicting vocabulary churn from operational-shape rethink), U9 re-opens.
- **M6 consolidation review trigger.** If chain-8+ cumulative refinement count reaches 4, M6 consolidation review becomes mandatory.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity

corrected_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

human_correction:
Across the chain, the user repeatedly pushed back on unclear or unnatural names and boundaries: `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough.

optional_context:
Use these two folders as the primary correction chain for naming and operation-boundary drift. Also inspect, as supporting context, `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, and `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search` for `source`, `PastNavigationMemoryFile`, index, search, and route-memory wording. This is an aggregate naming diagnostic, so keep confidence lower unless evidence isolates a specific prior-loop failure.

diagnostic_goal:
Identify evidence-backed hypotheses for why unclear names kept producing mechanism confusion. Diagnose whether the weakness is in framing, sensemaking vocabulary selection, conclude wording, or lack of user-language validation. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for the prior and corrected folders; read the additional context folders only for supporting vocabulary evidence. Do not treat later wording as ground truth.
```

</details>
