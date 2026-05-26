# Sensemaking — adaptive guidance generation mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/_branch.md`

---

## SV1 — Baseline Understanding (pre-analysis)

The inquiry is choosing among 6 mechanism shapes (M1-M7) and 5 WHY-anchor sources (W1-W5) and 4 audit substrates (A1-A4) to design routeman's adaptive-guidance generation. Naive framing: 6×5×4 = up to 120 combinations to evaluate.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — File-scanning architecture bounds WHY-anchor to file content (per 16-31); in-context-pass is OFF the table.
- **C2** — PROCESS-layer primary; mode definitions + pointer-count budgets + mode-allocation convention inherited from design memo unchanged.
- **C3** — Two observation targets (mechanism + WHY-anchor source) must be preserved as separate decisions.
- **C4** — LAYER-2 Prescriptive-Without-Cycle-Context mode must be made DETECTABLE by the design (not merely defined-but-undetectable).
- **C5** — Three LAYER-2 modes (Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning) monitor the SAME anchor substrate; one audit covers all.
- **C6** — Style commitment from design memo: short imperative pointer + conjunctive WHY ("bc..." shorthand).
- **C7** — Synthesis Trigger obligation: 7 priors + canonical /navigation must be re-tested.

### Key Insights

- **KI1** — **The LAYER-2 mode's recognition signal IS the design constraint.** "Pointers without anchored WHYs" is precisely what the mechanism must make impossible by construction. The audit substrate (A1+A3) IS the mechanism's correctness guarantee.
- **KI2** — **Three LAYER-2 modes share one anchor substrate.** A single mechanism that makes anchor-grounding non-bypassable satisfies all three modes' recognition requirements.
- **KI3** — **M2 (LLM-direct) without source-citation enforcement is the failure-causing shape.** M7 (mandatory-source-citation) is M2 + the enforcement that prevents the failure. M7 dominates M2.
- **KI4** — **M1 (cycle-output-derivation) is auditable but rigid.** Per-movement-type rules cover the common cases (DEEPEN←SURVIVE; REFINE←REFINE; PURSUE-SEED←KILL-seed) but not every route type. Pure M1 has coverage gaps.
- **KI5** — **M3 (meta-reasoning-projection) risks filler propagation.** If meta-reasoning field is filler, pointers projected from it inherit the filler. M3 alone is dominated; M3-as-one-source-among-many is the survivable shape.
- **KI6** — **M6 (two-stage: deterministic anchor-identification + LLM-judgment refinement) cleanly separates anchoring from wording.** Stage 1 is auditable; Stage 2 is flexible. The audit operates on Stage 1's output. This combines M1's auditability with M2/M7's flexibility without their respective weaknesses.
- **KI7** — **M4 (/intuit-hunch projection) is premature.** /intuit Phase β hasn't shipped; M4 deferred per existing project commitments.

### Structural Points

- **SP1** — Mechanism (procedural steps) and WHY-anchor source (input material) are decouplable decisions, but the mechanism's STRUCTURE depends on the anchor source's STRUCTURE. M6's Stage 1 is shaped by which anchor sources it pulls from.
- **SP2** — Per-movement-type input-to-pointer mapping (D1 from Surfacing) is the most natural rule: each movement type has natural anchor sources (DEEPEN←SURVIVE+anchors; REFINE←REFINE+anchors; PURSUE-SEED←KILL+telemetry; INVESTIGATE-FRONTIER←anchors+Open-Questions; REVISIT←prior-cycle+meta-reasoning).
- **SP3** — Pointer-rejection-on-unresolvable-WHY (A3) IS the LAYER-2 audit mechanism made operational. Combined with file-path-in-WHY-text (A1), the audit is non-bypassable at generation time.
- **SP4** — Multi-source priority (per-movement-type) is a natural rule: each pointer type has expected primary anchor + fallback anchors.
- **SP5** — Cycle-output may be partially absent (an inquiry that didn't reach Critique yet has no `critique.md`). Mechanism must degrade gracefully, not halt.

### Foundational Principles

- **FP1** — Don't reinvent. LAYER-2 mode's recognition signal is already specified; design just needs to make it operational.
- **FP2** — User-language alignment (LLM-operational-design, now N=3+ evidence). The source-question itself uses "anchors each pointer's WHY" — "anchor" is user-language; adopt.
- **FP3** — File-mediated state per 16-31.
- **FP4** — Auditable mechanism preferred over LLM-judgment when both available. Anchor-grounding is too load-bearing to defer to LLM-judgment-without-enforcement.

### Meaning-Nodes

- **MN1** — **WHY-as-anchor** — the WHY isn't a free-form explanation; it's a POINTER TO a specific source the audit can resolve.
- **MN2** — **Mechanism-vs-source decoupling** — the mechanism designs procedural steps; the source designs what flows IN. Decoupled decisions.
- **MN3** — **Audit-substrate-as-recognition** — the audit IS the LAYER-2 mode's recognition mechanism; designing the audit IS designing the failure-mode detection.
- **MN4** — **Filler-propagation** — if meta-reasoning is filler, pointers projected from it inherit the filler; M3 alone propagates the LAYER-2 mode "filler meta-reasoning" into LAYER-2 mode "Prescriptive-Without-Cycle-Context."
- **MN5** — **Stage-separation** — anchoring (deterministic) and wording (LLM judgment within budget) can be different stages with different rigor requirements.

### Meta-Inspection — H4 (concept names) + H5 (motivating examples)

- **H4 — concept names.** Load-bearing: "WHY-as-anchor", "Stage-separation", "Audit-substrate-as-recognition", "Filler-propagation". User-language: the source-question's "anchors each pointer's WHY" preserves "anchor" — adopt. Mechanism shape names (M1, M6, M7) are workspace labels; in the finding, name them descriptively ("cycle-output-derivation rule", "two-stage anchor-then-refine", "mandatory-source-citation").
- **H5 — motivating examples.** Design memo's example pointer ("Check against actual SIC/MVL runs" / WHY: "bc real usage is the only valid test of completeness") shows the tone: short imperative + conjunctive WHY. Style commitment honored in mechanism design.

### SV2 — Anchor-Informed Understanding

The inquiry's central insight: **the LAYER-2 audit's recognition signal IS the design constraint.** "Pointers without anchored WHYs" must be impossible by construction. This filter reduces the 6×5×4 combination space dramatically:
- M2 without enforcement (fails by allowing un-anchored pointers): KILLED.
- M3 alone (propagates filler if meta-reasoning is filler): KILLED-as-primary.
- M4 (/intuit, premature): DEFERRED.
- M6 (two-stage with deterministic anchor identification): SURVIVES — Stage 1 enforces anchor grounding.
- M7 (mandatory-source-citation) is a refinement of M2; M6's Stage 1 already enforces equivalently.

The reduced space: M6 with multi-source WHY-anchor priority + A1+A3 audit substrate + design-memo mode-allocation. Most combinations were dominated; one coherent design emerges.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **P-TECH-1** — M6's Stage 1 (deterministic anchor identification per movement type) PASSES LAYER-2 audit by construction; Stage 2 (LLM-judgment refinement) operates WITHIN constraints set by Stage 1. The two-stage separation is clean.
- **P-TECH-2** — A1 (file-path-in-WHY-text) is parseable by audit; combined with A3 (pointer-rejection-on-unresolvable-WHY), it's enforceable at generation time AND at audit time.
- **P-TECH-3** — Per-movement-type mapping (D1) covers the 16-type taxonomy with natural anchor-source assignments per type; remaining types fall back to the multi-source priority chain.

### Human / User

- **P-HUMAN-1** — User said "run full loop on this" — full pipeline including resolution. The design must be ship-ready, not a sketch.
- **P-HUMAN-2** — User's framing preserves the "or hybrid" option from the source-question; M6 IS the hybrid (deterministic-then-LLM).
- **P-HUMAN-3** — Routeman is a discipline FOR LLM consumption (the LLM at next inquiry uses the pointers); user-language-aligned pointer text matches consumer expectations.

### Strategic / Long-term

- **P-STRAT-1** — Multi-head + Baldwin cycle endgame requires consistent, auditable guidance across parallel workers. Deterministic Stage 1 ensures consistency; LLM Stage 2 produces uniform tone.
- **P-STRAT-2** — As /intuit Phase β ships (per existing deferral), W4 (/reflect) integration and M4 (/intuit) projection become available. The mechanism must accommodate without restructuring.

### Risk / Failure

- **R1** — M2 without enforcement → LAYER-2 mode fires. KILLED.
- **R2** — M3 alone → filler propagation. KILLED-as-primary; M3-as-one-source-of-many (W5 within M6) survives.
- **R3** — M5 (hybrid with multiple rule branches) → SKILL.md complexity. Mitigated by M6's clean two-stage shape.
- **R4** — Cycle-output absent (critique.md missing) → mechanism halt. Mitigated by graceful degradation (fallback chain W1→W2→W5→`none` mode).

### Resource / Feasibility

- **P-RES-1** — M6 is implementable in moderate SKILL.md complexity: Stage 1 is per-movement-type rules (~16 type entries); Stage 2 is a prompt template. Auditable + tractable.

### Definitional / Internal Consistency

- The mechanism's claim "pointers carry anchored WHYs" is testable: each pointer's WHY must contain a resolvable file-path-and-section reference. Internal consistency: the design SATISFIES the LAYER-2 audit's recognition signal by construction.

### Definitional / Frame-exit Completeness

**Gating predicate.** Inquiry inherits multi-value term "WHY-anchor source" across 5 candidate values (W1-W5); distinct propositions per cell. **Gate fires.**

1. **Existence Enumeration.** What does "WHY-anchor source" refer to project-wide?
   - **TYPE axis:** critique-verdict; sensemaking-anchor; meta-reasoning-field; telemetry; /reflect-observation; corpus-limit-seed (/intuit Phase β+); finding's Open-Questions section; finding's Next-Actions section.
   - **LAYER axis:** per-pointer anchor; per-Route meta-reasoning; per-inquiry artifact section.
   - **PHASE axis:** pre-cycle-completion (some artifacts not yet written; common during in-progress inquiries); post-cycle-completion (all written); cross-cycle (F-revisit reads prior-cycle artifacts).
   - **AGENT axis:** which discipline produced the artifact (/sense-making, /critique, /innovate, /reflect, /intuit).

2. **Role Assessment.**
   - **corpus-limit-seeds (when /intuit Phase β):** role = input to PURSUE-SEED pointer generation. Currently NOT available; deferred as future-source. M4 / FF-7 handles.
   - **finding-level sections (Open Questions, Next Actions):** role = stable cross-cycle references for INVESTIGATE-FRONTIER or DEVELOP pointer anchors. Subsumed by W2 (sensemaking anchors live in sensemaking.md; finding-level summaries paraphrase). Re-locate: treat as W2 sub-source when relevant; not a separate anchor source.
   - **Cross-cycle anchors (for F-revisit):** role = REVISIT pointer anchors. Addressed by W5 (meta-reasoning field carries cross-recalibration content per 24-00 + 18-58).

3. **Verdict Rigor.** Verdict "5 WHY-anchor sources" (W1-W5) — strongest counter: maybe Surfacing over-counted (some candidates aren't structurally distinct). Test: are W1 (critique-verdicts) and W2 (sensemaking-anchors) structurally identical? NO — different output schemas, different disciplines, different content type. Are W3 (telemetry) and W1 (critique-verdicts) overlapping? PARTIAL — critique.md contains telemetry as part of its output but is distinct (W1 = verdicts; W3 = quantitative signals). The 5 sources stand as structurally distinct.

4. **Residual / Coverage Justification.** Are there WHY-anchor sources NOT in the 5+? finding-level artifacts → subsumed by W2. corpus-limit-seeds → captured as future-W6 deferred per /intuit Phase β. Multi-source priority IS the residual question for Ambiguity 2.

### Phase / Calibration-State perspective

- Phase-dependent rules: M4 (/intuit) DEFERRED until Phase β; W4 (/reflect) DEFERRED until /reflect coupling spec. Both correctly deferred per project state.
- Calibration check: the design must work at L0 (current); the autonomy-register inquiry (24-40) provides the substrate; the mechanism reads the register and applies mode-allocation accordingly.

### Meta-Inspection — H1 + H2 + H3 + H7

- **H1 — candidate set.** 6 mechanism shapes + 5 WHY-anchor sources. Cross-Candidate Unity check: M7 is a refinement of M2 (M2 + enforcement); could merge. M5 is a composition (M1+M2+M3); M6 supersedes by cleaner staging. Independent shapes: M1, M2, M3, M6, M7 — but M6 absorbs M1+M7 cleanly, leaving M2 and M3 as alternatives to M6 (both dominated). Reduced to 1 viable: M6.
- **H2 — frame scope.** Already addressed.
- **H3 — question framing.** Question is well-formed; doesn't bias toward a particular candidate. The "or hybrid" in the source-question preserves M5/M6 as natural answers.
- **H7 — phase/calibration.** Addressed above.

### SV3 — Multi-Perspective Understanding

The 6 mechanism shapes collapse to 1 viable (M6 two-stage); the 5 WHY-anchor sources commit to multi-source priority per-movement-type with deferral of W4 and future-W6; the 4 audit substrates resolve to A1+A3 first ship with A2/A4 deferred to SKILL.md authoring. The cycle-output-absent case is handled via graceful fallback chain. The LAYER-2 audit becomes detectable by construction.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Which mechanism shape ships first — M1 / M2 / M3 / M5 / M6 / M7?

**Strongest counter-interpretation:** M7 alone is sufficient — mandatory source citation enforced at generation makes any LLM-direct mechanism (M2) auditable. Why split into stages?

**Why the counter is partial:** M7 puts the entire burden on LLM-judgment to find AND cite anchors. For known cycle-output patterns (critique verdicts), citations are derivable mechanically — no LLM judgment needed. Splitting into stages (M6) lets the deterministic Stage 1 handle the structured patterns and Stage 2 LLM handle wording.

**Counter-counter (defense of M6):** M6 cleanly separates the auditable part (Stage 1 anchor identification) from the LLM-judgment part (Stage 2 wording refinement). The audit operates on Stage 1's output; Stage 2's wording doesn't affect auditability.

**Confidence:** HIGH for M6 (two-stage anchor-then-refine; absorbs M1's deterministic Stage 1 + M7's enforcement into Stage 1 + M2's flexibility into Stage 2).

**Resolution:** Adopt **M6 — two-stage anchor-then-refine**. Stage 1 (deterministic): per-Route, identify candidate WHY-anchors from cycle-output via per-movement-type mapping. Stage 2 (LLM-judgment within constraints): generate the pointer text + WHY text from Stage 1's anchors, respecting design-memo tone + pointer-count budget per mode. Audit operates on Stage 1's anchor citations (verifiable via file-read).

**What is now fixed:** mechanism shape = M6 two-stage.
**What is no longer allowed:** M2 alone (without enforcement); M3 alone (without M6's deterministic stage); M4 first ship (deferred).
**What now depends:** Stage 1's per-movement-type rules (NEW-FF); Stage 2's LLM template (NEW-FF).

---

### Ambiguity 2: Which WHY-anchor source(s) at first ship — single-source vs multi-source?

**Strongest counter-interpretation:** single-source (W1 critique-verdicts only) is simplest and most auditable.

**Why the counter fails (structural grounds):** W1 doesn't cover all movement types. INVESTIGATE-FRONTIER routes anchor to sensemaking-anchors (W2) or finding's Open Questions. REVISIT routes anchor to prior-cycle artifacts. PURSUE-SEED anchors to W1's KILL-with-seed entries. DEEPEN anchors to W1 SURVIVE + W2 supporting anchors. Single-source W1 has coverage gaps.

**Counter-counter (defense of multi-source with priority):** multi-source with per-movement-type priority. Each movement type has expected anchor sources; the mechanism prefers those; falls back to others when primary is absent.

**Confidence:** HIGH for multi-source with per-movement-type priority.

**Resolution:** Multi-source with **per-movement-type priority chain**:
- **DEEPEN** ← W1 SURVIVE verdicts + W2 Key-Insights/Constraints (primary); W5 meta-reasoning (fallback).
- **REFINE** ← W1 REFINE verdicts + W2 Ambiguity-Collapse entries (primary); W5 (fallback).
- **PURSUE-SEED** ← W1 KILL-with-seed + W3 telemetry coverage gaps (primary); W5 (fallback).
- **INVESTIGATE-FRONTIER** ← W2 Constraints/Key-Insights + finding's Open-Questions (primary); W5 (fallback).
- **REVISIT (RESURRECT/INVALIDATE/REVERT)** ← prior-cycle's W1 + W5 cross-cycle meta-reasoning (primary).
- **WIDEN, DEVELOP, DIFFERENT-APPROACH, DIAGNOSE, others** ← W1 + W2 (primary); W5 (fallback).
- **W4 (/reflect observations)** — integrated when /reflect ran (additive); NOT required first ship.
- **W6 (corpus-limit-seeds from /intuit)** — DEFERRED to /intuit Phase β.

**What is now fixed:** multi-source with per-movement-type priority; primary chain W1+W2+W5; secondary W3+W4; W6 deferred.
**What is no longer allowed:** silently dropping pointers when primary anchor absent (use fallback per Ambiguity 5).
**What now depends:** Stage 1's mapping rules implement this priority.

---

### Ambiguity 3: Audit substrate shape — A1 (file-path-in-WHY-text) vs A2 (structured substructure) vs A3 (pointer-rejection-only)?

**Strongest counter-interpretation:** A1 alone is sufficient if the audit can parse paths from text.

**Why the counter has merit:** A1 is text-based; parseable via regex. A2 (structured substructure) is verbose but machine-parseable. A3 (rejection) is the enforcement mechanism.

**Counter-counter (defense of A1+A3 first ship):** A1+A3 covers human-readable + enforcement. A2 adds machine-parseability at verbosity cost — adopt at SKILL.md authoring if the audit infrastructure needs structured input.

**Confidence:** HIGH for A1+A3 first ship; A2 + A4 deferred to SKILL.md authoring (covered by NEW-FF).

**Resolution:** **A1 + A3 first ship.** WHY field is human-readable text that CONTAINS a file-path-and-section reference (e.g., "bc per `devdocs/inquiries/X/critique.md` §Phase 3 the SURVIVE verdict on Y identifies this as load-bearing"). M6's Stage 1 ENFORCES that every pointer has a resolvable anchor; if Stage 1 can't find an anchor (after fallback chain), the pointer is DROPPED-WITH-REASON (drop-reason logged; not silently filtered).

**What is now fixed:** audit substrate = A1 (file-path text in WHY) + A3 (drop-with-reason at generation if anchor unresolvable).
**What is no longer allowed:** WHY fields without file-path references; silent pointer drops.
**What now depends:** SKILL.md authoring may elevate to A2 (structured substructure) if audit infrastructure demands.

---

### Ambiguity 4: M3 (meta-reasoning projection) — primary, secondary, or rejected?

**Strongest counter-interpretation:** primary because meta-reasoning field is already required + length-bounded (per 18-58); using it directly avoids redundancy.

**Why the counter fails (structural grounds):** M3 alone propagates filler — if meta-reasoning field content is generic ("seems important"), pointers projected from it inherit the filler. This INTERACTS WITH LAYER-2 mode "filler-meta-reasoning" (from 18-58) creating cascading failure modes.

**Counter-counter (defense of M3-as-secondary):** M3 absorbed into M6 as W5 (one of the multi-source priority list). Used as PRIMARY anchor only when W1 + W2 are absent; used as FALLBACK when primary absent. Pointers projected from W5 must ADD VALUE beyond restating meta-reasoning (e.g., translate meta-reasoning's "why this Route" into actionable "what to check when executing this Route").

**Confidence:** HIGH for M3-as-one-source-among-many (W5 within M6's multi-source).

**Resolution:** **M3 absorbed into M6 as W5.** NOT a primary mechanism shape. Pointers anchored to W5 must add actionable value beyond restating meta-reasoning content.

**What is now fixed:** M3 not standalone; W5 is one source in M6's multi-source priority.
**What is no longer allowed:** M3 as standalone mechanism.

---

### Ambiguity 5: Cycle-output-absent handling — halt+flag vs graceful degradation?

**Strongest counter-interpretation:** halt+flag (don't generate guidance without cycle output).

**Why the counter fails (structural grounds):** too restrictive. `critique.md` may be missing because the inquiry didn't reach Critique yet (in-progress inquiries); the Route still has W2 (sensemaking-anchors written by Sensemaking discipline) + W5 (meta-reasoning if Route was previously enumerated) available. Halting all guidance because one source is absent fails graceful handling.

**Counter-counter (defense of graceful degradation):** fallback chain. If W1 unavailable, use W2+W5; if W2 also unavailable, use W5 alone; if W5 also unavailable, emit `none` mode (no pointers) with rationale ("no anchorable sources available for this Route at this time").

**Confidence:** HIGH for graceful degradation with fallback chain.

**Resolution:** **Fallback chain: W1 → W2 → W5 → `none` mode (with rationale).** Pointers emitted with whatever anchors are available within the chain; mechanism doesn't halt on missing artifacts. When fallback reaches `none`, the Route's Guidance Mode is set to `none` with the rationale recorded.

**What is now fixed:** fallback chain.
**What is no longer allowed:** halting routeman because one anchor source is absent.
**What now depends:** SKILL.md authoring specifies the "rationale" format for fallback-to-none cases.

---

### Ambiguity 6: Mode-selection rule — design memo convention alone (MS1) vs extension (MS2-MS5)?

**Strongest counter-interpretation:** extend with MS3 (autonomy-level axis) because 24-40 committed the autonomy register; routeman now CAN read autonomy level.

**Why the counter is partial:** the design memo's mode-allocation convention is calibration-agnostic (HIGH/risky/blocked/near-action → compact/full; etc.); it works at any autonomy level. MS3 would commit autonomy-aware mode-selection that is orthogonal to the mechanism (the mechanism's job is anchor + wording; autonomy-aware mode-selection is an enhancement).

**Counter-counter (defense of MS1+MS5):** Adopt MS1 (design memo's convention) verbatim + MS5 (per-mode overrides for routeman-specific Route attributes — e.g., if a Route's `meta_reasoning_revision_history` shows multiple recalibrations across invocations, override to `expand-on-selection` mode to defer guidance until next selection). MS3 deferred — the autonomy register's substrate is available but the mode-selection rule extension is not load-bearing for first ship.

**Confidence:** HIGH for MS1+MS5; MS2, MS3, MS4 deferred.

**Resolution:** **MS1 (design memo convention) verbatim + MS5 (per-mode overrides on multi-recalibration).** Other extensions (MS2 complexity-axis, MS3 autonomy-axis, MS4 selection-probability-axis) deferred — preserved as candidates for SKILL.md authoring or future refinement.

**What is now fixed:** mode selection = MS1 + MS5.
**What is no longer allowed:** silently extending mode-selection beyond the design memo convention without MS5's per-mode-override structure.

---

### Load-bearing concept tests (refinement note)

- **"WHY-as-anchor"** — proxy-vs-structural: real structural commitment (LAYER-2 mode's recognition signal depends on it). Discoverability: yes, via the audit. User-language alignment: user said "anchors each pointer's WHY" — matches. **PASS.**
- **"M6 two-stage anchor-then-refine"** — coined-this-inquiry. Alternative names: "stage-separated", "anchor-then-refine", "deterministic-then-LLM". All describe the same concept. **PASS.**
- **"Audit-substrate-as-recognition"** — load-bearing: operationalizes the LAYER-2 mode. **PASS.**
- **"Graceful degradation with fallback chain"** — operational rule; verifiable. **PASS.**

### Specific-vs-pattern recognition cue

The user's framing is about routeman's adaptive guidance specifically. Wider pattern: other disciplines with prescriptive content (e.g., /intuit Phase β+ hunch presentation) may need similar mechanism. Scoped to routeman per inquiry; generalization is research frontier (mirrors FF-strat-pattern from 24-00 / FF-4 from 24-40). **Appropriate scope.**

### SV4 — Clarified Understanding

The design crystallizes into 8 commitments + 4 new FFs + 2 deferred FFs:

**Committed (this inquiry):**

1. **Mechanism shape:** M6 two-stage (Stage 1 deterministic anchor identification per movement type; Stage 2 LLM-judgment pointer text + WHY text from anchors).
2. **WHY-anchor source:** multi-source per-movement-type priority (W1+W2+W5 primary; W3+W4 secondary; W6 deferred to /intuit Phase β).
3. **Audit substrate:** A1 (file-path-in-WHY-text) + A3 (drop-with-reason at generation).
4. **Mode selection:** MS1 (design memo convention) + MS5 (per-mode overrides on multi-recalibration).
5. **Cycle-output-absent handling:** fallback chain W1 → W2 → W5 → `none` mode (with rationale).
6. **LAYER-2 mode detectability:** A1+A3 makes Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning all DETECTABLE.
7. **Per-movement-type input-to-pointer mapping:** D1 with per-type primary + fallback anchors.
8. **Pointer style:** inherited from design memo (short imperative + conjunctive WHY; pointer-count budgets per mode).

**Open follow-ups (new):**

- **NEW-FF-1** — Stage 1's exact per-movement-type parsing rules (how Stage 1 reads `critique.md` Phase 3 verdicts; how it reads `sensemaking.md` Phase 1 anchors).
- **NEW-FF-2** — Stage 2's LLM template (the exact prompt structure for refinement).
- **NEW-FF-3** — A2 (structured substructure in WHY) elevation if/when audit infrastructure demands.
- **NEW-FF-4** — MS3 (autonomy-level mode-selection extension) if/when needed.

**Pre-existing deferrals carried forward:**

- **FF-7 (/intuit M4 projection)** — revival when /intuit Phase β ships.
- **FF-8 (/reflect W4 integration shape)** — revival when /reflect coupling spec lands.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- **Mechanism shape:** M6 two-stage anchor-then-refine.
- **WHY-anchor source:** multi-source per-movement-type priority.
- **Audit substrate:** A1+A3.
- **Mode selection:** MS1+MS5.
- **Fallback chain:** W1→W2→W5→`none` mode (with rationale).
- **Per-movement-type mapping:** D1 (per-type primary + fallback).
- **Pointer style:** design memo's tone + budgets.

### Options eliminated

- M2 alone (without enforcement) — FAILS LAYER-2 audit.
- M3 alone (standalone meta-reasoning projection) — propagates filler.
- M4 (/intuit projection) — premature.
- M5 (general hybrid with multiple rule branches) — superseded by cleaner M6 staging.
- M7 alone (mandatory-source-citation as standalone) — absorbed into M6's Stage 1.
- A2/A4 structured substructure first ship — deferred to SKILL.md authoring.
- MS2/MS3/MS4 extensions — deferred.
- Single-source WHY-anchor — coverage gaps.
- Halt-on-cycle-output-absent — too restrictive.

### Paths still viable

- Stage 1 + Stage 2 SKILL.md specifications (NEW-FF-1, NEW-FF-2).
- A2 elevation if audit infrastructure demands (NEW-FF-3).
- MS3 if autonomy-aware mode-selection becomes load-bearing (NEW-FF-4).
- W4 integration when /reflect ships (FF-8).
- M4 / W6 when /intuit Phase β ships (FF-7).

### SV5 — Constrained Understanding

The problem reduces to seven concrete deliverable shapes for Decomposition/Innovation:

1. The mechanism specification (M6 two-stage with Stage 1 + Stage 2 procedural steps).
2. The WHY-anchor source specification (multi-source per-movement-type priority + fallback chain).
3. The audit substrate specification (A1+A3 with drop-with-reason enforcement).
4. The mode-selection specification (MS1+MS5).
5. The per-movement-type mapping specification (D1).
6. The LAYER-2 detectability statement (one audit covers all three modes).
7. The 4 new FFs + 2 deferred FFs for follow-up.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did multiple perspectives produce destabilizing anchors that required patching? Looking back:
- M1 vs M2 vs M5 vs M6 vs M7 → resolved cleanly via M6 absorbing M1+M7 into stages.
- Single vs multi-source → resolved via per-movement-type priority.
- A1 vs A2 vs A3 → resolved via A1+A3 first ship; A2 deferred.
- M3 status → absorbed into W5 within M6.
- MS rule extension → MS1+MS5.
- Cycle-output-absent → graceful degradation.

Model didn't require multiple patches. **Central insight:** the LAYER-2 audit's recognition signal IS the design constraint; making it operational (A1+A3) collapses most of the candidate space.

Self-applicability check: target is mechanism + protocol design, not sensemaking itself. Low self-reference.

### Meta-Inspection — H6 (model fit) + H8 (self-reference)

- **H6 — model fit.** Has the model required multiple patches? No. The LAYER-2-mode-as-constraint insight + the M6-two-stage shape + multi-source priority all fit cleanly. PASS.
- **H8 — self-reference.** Sensemaking evaluating routeman's mechanism design — different target framework. Low risk. PASS.

### SV6 — Stabilized Model

**The model.**

Routeman's adaptive-guidance generation mechanism is a **two-stage anchor-then-refine** process:

- **Stage 1 (deterministic per-movement-type anchor identification):** for each Route, identify candidate WHY-anchors from cycle-output using per-movement-type priority. DEEPEN routes anchor to critique SURVIVE + sensemaking Key-Insights; REFINE routes to critique REFINE + sensemaking Ambiguity-Collapse; PURSUE-SEED to critique KILL-with-seed + telemetry; INVESTIGATE-FRONTIER to sensemaking Constraints + finding Open-Questions; REVISIT to prior-cycle critique + meta-reasoning; others to critique + sensemaking. Multi-source fallback chain: W1 (critique) → W2 (sensemaking) → W5 (meta-reasoning) → `none` mode (with rationale).
- **Stage 2 (LLM-judgment refinement within constraints):** generate pointer text + WHY text from Stage 1's anchors, respecting design-memo tone (short imperative pointer + conjunctive WHY) and pointer-count budget per mode (`compact`=1-2, `full`=3-5, `expand-on-selection`=deferred, `none`=0).

**Audit substrate:** WHY field carries a human-readable file-path-and-section reference (A1). At generation time, Stage 1 enforces that every pointer has a resolvable anchor; pointers with unresolvable anchors are dropped-with-reason (A3). This makes the LAYER-2 modes Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning all detectable through one substrate.

**Mode selection:** design memo's mode-allocation convention (MS1) verbatim — HIGH/risky/blocked/near-action → compact/full; MEDIUM → compact; LOW → none/compact; selected → full/expand-on-selection. Per-mode override (MS5): when a Route's `meta_reasoning_revision_history` shows multi-recalibration, override to `expand-on-selection`.

**Cycle-output-absent handling:** graceful degradation through the fallback chain. The mechanism doesn't halt; if all anchors fall back to `none`, the Route's mode is `none` with rationale logged.

**How SV6 differs from SV1.**

| Axis | SV1 (pre-analysis) | SV6 (stabilized) |
|---|---|---|
| Problem framing | Choose among 6×5×4 = 120 combinations | One coherent design (M6 + multi-source + A1+A3 + MS1+MS5) |
| Mechanism shape | 6 candidates open | M6 only (others dominated or absorbed) |
| WHY-anchor source | 5 candidates open | Multi-source per-movement-type priority |
| Audit substrate | 4 candidates open | A1+A3 (A2/A4 deferred) |
| LAYER-2 mode detectability | Open question | DETECTABLE by construction |
| Cycle-output-absent | Open | Graceful fallback chain |
| Open questions | Implicit | 4 new FFs + 2 deferred (FF-7 /intuit, FF-8 /reflect) |

---

## Telemetry

- **Perspective saturation:** 8 perspectives applied (Technical, Human, Strategic, Risk, Resource, Definitional, Frame-exit, Phase/Calibration). 4 produced new anchors. Converging.
- **Ambiguity resolution ratio:** 6 ambiguities raised; 6 resolved (4 HIGH; 2 HIGH).
- **SV delta:** SV1 → SV6 shows MAJOR structural shift (120-combinations → 1 coherent design).
- **Anchor diversity:** 5 anchor types (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes). 8 perspectives.
- **Failure modes checked:** Status Quo Bias (none — M6 is newly-surfaced, not status-quo); Premature Stabilization (verified via 4 new-anchor perspectives + the LAYER-2 audit insight is grounded in design memo's recognition signal, not invented); Anchor Dominance (the LAYER-2-as-constraint insight is dominant; checked by listing 4 other distinct decisions — multi-source, audit shape, mode-selection, fallback — that don't all collapse to it); Perspective Blindness (most uncomfortable perspective = "maybe deterministic Stage 1 is too rigid and we should trust LLM judgment entirely" — addressed via M2 KILL); Clean Resolution Trap (M6 is clean; tested via M2/M3/M5 alternatives all failing structurally); Self-Reference Blindness (target is files+protocols, not sensemaking framework).
- **Convergence verdict:** STABILIZED.

---

## Output handoff to Decomposition

Decomposition's task: take the 8 commitments + 4 new FFs + 2 deferred FFs and produce a clean coupling map + question tree. The commitments fall into clusters:

- **Mechanism cluster:** M6 (Stage 1 + Stage 2) + audit substrate (A1+A3).
- **Source cluster:** multi-source per-movement-type priority + fallback chain.
- **Mode-selection cluster:** MS1+MS5.
- **Disambiguation cluster:** LAYER-2 detectability statement + sidecar boundary (no new sidecar; mechanism operates within routeman's existing scan).

Key load-bearing concepts handed off:
- **M6 two-stage anchor-then-refine** as the mechanism shape.
- **Multi-source per-movement-type priority** as the WHY-anchor source rule.
- **A1+A3** as the audit substrate.
- **Graceful fallback chain** as the cycle-output-absent handling.
- **LAYER-2-audit-as-design-constraint** as the central insight that filtered the design space.
