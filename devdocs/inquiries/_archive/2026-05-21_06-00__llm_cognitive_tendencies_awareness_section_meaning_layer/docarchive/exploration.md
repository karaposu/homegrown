# Exploration: LLM-Cognitive-Tendencies Awareness Section — Meaning-Layer Inquiry

## User Input

See `_branch.md`. MEANING-layer inquiry on the user's proposed "LLM-cognitive-tendencies awareness section" — what it IS as a cognitive operation, how it relates to existing correctives, whether warranted / redundant / reframe.

Mode: artifact primary (the existing correctives are concrete) + possibility-mode sub-phase (the proposed section is conceptual). Entry: signal-first (the proposal is named).

---

## 1. Territory Overview

The territory is the project's discipline-spec system at `cognitive_harness/<discipline>/references/<discipline>.md` (5 disciplines: explore, sense-making, decompose, innovate, td-critique) + the protocol layer at `cognitive_harness/protocols/` + the MVL+ runner at `~/.claude/skills/MVL+/SKILL.md` + the user's proposal + the 21-04-00 + 21-05-00 priors.

The user's question: where should a "tendencies section" live, and is it sufficient? The MEANING-layer question this Exploration maps: what cognitive operation does such a section perform, and is it operationally distinct from what already exists?

**Major regions (R1-R14):**

| Region | Content | Confidence |
|---|---|---|
| R1 | User's proposal parsed literally | confirmed |
| R2 | 21-04-00 named-meaning-node MN8 — cognitive operation | confirmed |
| R3 | 21-05-00 per-piece named-bias application — what made it work | confirmed |
| R4 | **Existing discipline failure-modes lists** (one per discipline) | confirmed (KEY DISCOVERY) |
| R5 | Phase 0 risk-dimension-check + Phase 3 load-bearing-concept-test refinement notes | confirmed |
| R6 | Intervention-Shape Vocabulary at innovate | confirmed |
| R7 | 21-04-00 DEFERRED enhancements MC-ENHANCE-1 + MC-ENHANCE-2 | confirmed |
| R8 | 21-04-00 "perfunctory satisfaction" structural warning | confirmed |
| R9 | Sensemaking's THREE coexisting check patterns (A/B/C) | confirmed |
| R10 | **Innovate's "Prior-step never-generate variant" refinement note** — already a substrate-bias-aware mechanism-corrective | confirmed (KEY DISCOVERY) |
| R11 | Auto-memory disciplines-self-contained principle | confirmed |
| R12 | User's "challenge" verb — active vs passive operation | scanned |
| R13 | Active-challenge mechanisms already in the spec system | scanned |
| R14 | Substrate-vs-mechanism-vs-discipline-process taxonomy | inferred |

---

## 2. Inventory — Surfaced Items per Region

### R1 — User's proposal parsed literally

Compound noun: **"LLM-cognitive-tendencies awareness section."**

- **"LLM-cognitive"** — the substrate (the LLM's runtime cognitive process). 21-04-00 Section 2 enumerated 7 mechanisms of this substrate that produce the additive-fix bias.
- **"tendencies"** — patterns of the substrate's behavior. Plural; the user explicitly anticipates multiple tendencies ("in the future we can add more").
- **"awareness section"** — a structural-spec element. The user proposes it as a SECTION (a named container), suggesting a single artifact-place that holds the list.
- **"adding to MVL loop"** — placement at the runner-spec level (MVL+ SKILL.md), candidate (a).
- **"or discipline should get this"** — placement at discipline-spec level (all 5 disciplines), candidate (b).
- **"or maybe just sensemaking and innovation since they are fix related things"** — placement at specific disciplines, candidate (c).
- **"everytime we will run it, it can challenge this"** — active firing; not passive reading.
- **"and this will be enough?"** — sufficiency question.
- **"in the future we can add more tendencies if needed"** — extensibility.

**Implied operational properties:**
- Lists named biases (≥1 entry initially: "Additive-fix anchoring bias").
- Fires actively during runs.
- Extensible over time.
- Placement-flexible (user open to multiple options).

### R2 — 21-04-00 named-meaning-node MN8 — cognitive operation

21-04-00 Section 5 named **"Additive-fix anchoring bias"** at the **FINDING LEVEL** (not at a discipline-spec level). The named meaning-node has:

- **Definition** — the cognitive tendency to default to ADD-* intervention shapes when faced with "X is missing" diagnostics, without first inspecting whether the existing design has a structural defect.
- **4 recognition signals** — (1) gap framed as "X is missing"; (2) proposed fix begins with add/append/extend; (3) Inversion considers same-category-shapes only; (4) existing spec design treated as HOST for new addition.
- **Corrective** — "INSPECT before fix-category-commitment."

**Cognitive role of naming:**
- Creates a recognition handle for future inquiries.
- Inheritable via Synthesis Trigger (the named meaning-node travels with the finding it's defined in).
- Pattern-matchable operationally (a future inquiry can apply the 4 recognition signals).

**Note:** the naming is at the FINDING LEVEL — not in any discipline-spec. The bias was named ONCE in 21-04-00's finding.md and is referenced by future findings (e.g., 21-05-00 inherited MN8 via Synthesis Trigger).

### R3 — 21-05-00 per-piece named-bias application — what made it work

21-05-00 (the just-completed §3.1 redesign) operationalized MN8 within its own pipeline. Specifically:

| Mechanism | Description |
|---|---|
| Synthesis Trigger inheritance | 21-05-00's _branch.md listed 21-04-00 finding as a prior; MN8 inherited automatically |
| Sensemaking SV3 perspectives | Included self-reference vigilance perspective (existing) |
| Decomposition piece Q8 | Created as a dedicated "self-vigilance verification" piece in the Q-tree |
| Innovation Q8 generation | Applied the 4 recognition signals to final wording during generation |
| Critique D7 (Integration-vs-accretion) | Created as a CRITICAL evaluation dimension (per Phase 0 refinement note) |

**KEY OBSERVATION:** the application worked WITHOUT a separate "tendencies section." The mechanisms used were:
- Synthesis Trigger (existing protocol mechanism).
- Per-piece verification at Decomposition + Innovation (existing discipline patterns).
- Project-specific risk dimension at Critique (existing refinement note at td-critique Phase 0).

The named-meaning-node-per-finding pattern + the per-inquiry pipeline mechanisms together produced operational application. No "tendencies section" was needed.

**BUT:** 21-05-00 had to ACTIVELY DECIDE to apply MN8 via Synthesis Trigger declaration + dedicated Q-tree piece + dedicated Critique dimension. A future inquiry that doesn't have MN8 in Synthesis Trigger inheritance would not automatically apply the recognition signals. The application depends on the runner's awareness of MN8.

### R4 — Existing discipline failure-modes lists (KEY DISCOVERY)

**Each discipline already has a "Failure Modes" section** listing named patterns with recognition signals + correctives:

| Discipline | # Failure Modes | Examples |
|---|---|---|
| Explore | 10 | Premature depth; Surface-only scanning; False confidence; Premature termination; Re-exploration; Completeness bias in possibility mode; Open→closed drift; Silent boundary-discovery; Negative-space silent drop; Inadequate per-item content depth |
| Sense-making | 6 | Status Quo Bias; Premature Stabilization; Anchor Dominance; Perspective Blindness; Clean Resolution Trap; Self-Reference Blindness |
| Decompose | 7 | Premature decomposition; Wrong boundaries; Hidden coupling; Missing pieces; Over-decomposition; Ignoring dependencies; Imbalanced decomposition |
| Innovate | 6 | Premature Evaluation; Single-Mechanism Trap; Early Frame Lock; Innovation Without Grounding; Mechanism Exhaustion; Survival Bias |
| Td-critique | 7 | Wrong Dimensions; Rubber-Stamping; Nitpicking; Dimension Blindness; False Convergence; Evaluation Drift; Self-Reference Collapse |

**Each list:**
- Has named patterns ("modes" or "failure modes").
- Each pattern has: How to recognize / Feels like (or analog) / Corrective (or "How to prevent").
- Each list is extensible per the discipline's evolution.
- Each fires AT DISCIPLINE EXECUTION TIME — runners apply the list during the discipline's process.
- The lists are STRUCTURALLY ANALOGOUS to what the user proposes.

**Sensemaking explicitly frames failure modes as "not checkpoints to execute at each phase — they are patterns to notice when they're happening, like recognizing when you're off-balance."** This is INTENTIONALLY anti-mechanical — addresses the perfunctory-satisfaction trap directly.

### R5 — Phase 0 risk-dimension-check + Phase 3 load-bearing-concept-test refinement notes

Two existing structural-spec elements within disciplines' refinement notes that LIST named entries with extensibility framing:

**Td-critique Phase 0 "Project-specific risk dimension check" (line 178):**
- Lists named project-specific risk dimensions with exemplars (duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit).
- Fires at evaluation-framework-construction time.
- "validate-dimensions sub-step must explicitly check this and flag any missing axes for inclusion" — active firing.
- Extensible ("across recent inquiries: X have been the load-bearing axis").

**Sensemaking Phase 3 "Load-bearing concept test" sub-aspect list (line 424):**
- Lists named sub-aspects (proxy-vs-structural; discoverability; user-language alignment).
- Fires at ambiguity-collapse time.
- "The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates."

**Operational pattern:** named-thing list + extensibility framing + when-to-apply rule. Fires actively during discipline execution.

### R6 — Intervention-Shape Vocabulary at innovate

`cognitive_harness/innovate/references/innovate.md` lines 332-346:
- Lists 10 named shapes (ADD-TEST, ADD-DIMENSION, ADD-CONTENT, REPAIR, REVERT-REGRESSION, REMOVE, REFRAME-AS-BUG, DO-NOTHING, REORGANIZE-WITHOUT-ADDING, CONTRARIAN-RETHINK).
- Fires at intervention-shape commitment time.
- Extensible ("Add new shapes or modes as evidence accumulates. Revival trigger: when 3+ inquiries surface a candidate or seed framing whose shape/mode doesn't fit").

**Operational pattern:** named-thing list + extensibility framing (with explicit revival-trigger threshold) + when-to-apply rule.

### R7 — 21-04-00 DEFERRED enhancements

Inherited from 21-04-00 finding's Section 7:

- **MC-ENHANCE-1:** Add "design-elision" category to LOOP_DIAGNOSE protocol's failure-classification taxonomy (alongside "mechanism-absence").
- **MC-ENHANCE-2:** Require CONTRARIAN-RETHINK consideration at Innovate's Intervention-Shape-Axis Inversion when principal shape is ADD-*.

Both DEFERRED to monitoring observable per Step 5 guardrail (one correction chain insufficient evidence).

**Important distinction:** these are **mechanism-specific** enhancements — they edit specific spec mechanisms at specific phases. They are NOT cross-cutting tendency lists. They wouldn't naturally accommodate "more tendencies if needed" (each tendency would require its own mechanism edit at potentially different specs).

### R8 — 21-04-00 "perfunctory satisfaction" structural warning

21-04-00 Section 6 reasoning explicitly identifies a structural property:

> "Mechanical enforcement risks perfunctory satisfaction (the same trap the Inversion mechanism fell into when it considered REPAIR/REORGANIZE alternatives but rejected them without engaging the framing-flip option). The corrective is at the awareness level — apply as a cognitive habit, not a checklist item."

And:

> "'Design-defect inspection' is a CONCEPTUAL META-MECHANISM, not a mechanically-enforced step."

**This is a STRUCTURAL constraint on the design space.** Any active-challenge mechanism risks the perfunctory-satisfaction trap. The user's "everytime we will run it, it can challenge this" implies active firing — which raises this risk.

The corrective form 21-04-00 endorses: **awareness-level cognitive habit**, not mechanical checklist.

**This is consistent with sensemaking's "Failure Modes are patterns to notice... like recognizing when you're off-balance" framing.** The existing discipline failure-modes are NOT mechanically enforced — they are awareness handles.

### R9 — Sensemaking's THREE coexisting check patterns (A/B/C)

`cognitive_harness/sense-making/references/sensemaking.md` line 197-203:

- **Pattern A — Hook-specific structural meta-inspection** (9 hooks; meta-question "What am I treating as FIXED that might not be?")
- **Pattern B — Process-level failure-mode correctives** (6 failure modes — these are NAMED patterns of HOW analysis fails)
- **Pattern C — Lateral viewpoint diversity** (perspectives in Phase 2)

The spec EXPLICITLY commits to these being at DIFFERENT abstraction levels:

> "These operate at a different abstraction level than the hook-specific pattern; they do not all map cleanly to hooks."

**Insight for this inquiry:** the project's design-vocabulary ALREADY recognizes that named-pattern lists exist at multiple levels (process-failure-mode list, hook-specific check list, viewpoint list). The user's proposed section could be interpreted as Pattern D at a new level (substrate-cognitive-tendency list).

### R10 — Innovate's "Prior-step never-generate variant" refinement note (KEY DISCOVERY)

`cognitive_harness/innovate/references/innovate.md` line 702-704:

> "**Prior-step never-generate variant.** The base prevention rule above presupposes the uncomfortable output exists in the candidate set. When the candidate set at a meta-decision piece contains only one direction — preserve / accept / continue / extend the inherited frame — without a candidate that rejects / inverts / discards, the uncomfortable alternative was NEVER GENERATED. There is nothing to test with extra care. **Recognition signal:** at a meta-decision piece, the candidate set contains only directions that preserve the prior, with no candidate that challenges it. **Prevention:** apply the 'Piece-Level Inversion at Meta-Decision Pieces' refinement note at Phase 2 Generate to surface the missing direction before reaching the test stage."

**This IS the mechanism-level corrective for additive-fix bias at Innovation.** Already in the spec. The refinement note recognizes the "extend the inherited frame without challenger" pattern (= the additive-fix bias) and prevents it via Piece-Level Inversion.

**This is a CRITICAL find.** The additive-fix bias's mechanism-level corrective is partially ALREADY DEPLOYED at innovate's Survival Bias failure-mode refinement note — it's not fully deferred. MC-ENHANCE-2 (require CONTRARIAN-RETHINK at ADD-* pieces specifically) would STRENGTHEN this, but the recognition-signal + prevention is already there.

The "Prior-step never-generate variant" was added to innovate's spec earlier than 21-04-00 (likely from an earlier inquiry). It is structurally a substrate-bias-aware failure-mode-list entry — exactly the kind of entry the user's proposed "tendencies section" would hold.

### R11 — Auto-memory disciplines-self-contained principle

`feedback_disciplines_self_contained.md`:
> "Discipline runtime reference files must not contain outbound pointers to other folders — disciplines are individuals."

If the proposed section lives at MVL+ loop level (single source), no cross-discipline coupling issue.

If the proposed section lives at every discipline (replicated content), no outbound coupling (each discipline self-contained), but maintenance cost.

If the proposed section lives at SPECIFIC disciplines (Sensemaking + Innovation), the section's content is each discipline's own content (self-contained), but different disciplines have different tendency lists (operational asymmetry — disciplines aren't equally exposed to all biases).

### R12-R14 — Active-challenge mechanisms + substrate-vs-mechanism-vs-discipline-process taxonomy

**Active-challenge mechanisms already in the spec system:**
- Inherited Frame Audit at innovate (lines 416-549) — actively challenges un-inherited frame; forces alternative-shape generation.
- Property (v) firing → Intervention-Shape-Axis Inversion (lines 399-410) — actively challenges intervention-shape commitment.
- Per-piece Inversion at Meta-Decision Pieces (lines 385-396) — actively challenges meta-decision pieces.
- Phase 0 Project-specific risk dimension check at td-critique — actively flags missing axes.
- Phase 3 Load-bearing concept test at sense-making — actively generates ambiguity-collapse pairs per concept.

**These are ALL discipline-internal active-challenge mechanisms.** They fire at specific phases within specific disciplines.

**Three-level taxonomy emerges:**

| Level | Operation | Existing instances |
|---|---|---|
| **Substrate** (LLM cognitive tendency) | Naming gives recognition handle; not directly spec-fixable | 21-04-00 MN8 "Additive-fix anchoring bias" (at finding level) |
| **Mechanism** (specific spec mechanism enhancement) | Spec edits at specific phases | "Prior-step never-generate variant" (R10); Piece-Level Inversion; Intervention-Shape-Axis Inversion; DEFERRED MC-ENHANCE-1 + MC-ENHANCE-2 |
| **Discipline-process** (failure modes of the discipline's process) | Named patterns per discipline | 6-10 failure modes per discipline (R4) |

**The proposed section sits at... which level?**

Option α: **Substrate (cross-cutting cumulative)** — a list of named LLM-cognitive tendencies aggregated across findings. Cognitive operation: cumulative-substrate-awareness-library. Each entry is a finding's named meaning-node, surfaced for cross-inquiry pattern-matching.

Option β: **Mechanism (active per-phase enforcement)** — a list of named biases each with a phase-specific check. Cognitive operation: active-challenge-fire-during-pipeline. Each entry has a firing condition + corrective + spec phase.

Option γ: **Discipline-process (extension of existing failure-modes lists)** — adds substrate-cognitive entries to existing per-discipline failure-modes lists. Cognitive operation: extends discipline's awareness pattern-set with substrate-aware entries.

Each option implies different downstream STRUCTURAL choices (placement) and different operational properties.

---

## 3. Signal Log

| # | Signal | Detected at | Probed → Outcome |
|---|---|---|---|
| S1 | **Density** | R4 — each discipline already has 6-10 named failure modes with recognition + corrective | Probed: the user's proposed section is STRUCTURALLY ANALOGOUS to existing per-discipline failure-modes lists; the operation-pattern (named-thing + recognition + corrective + extensibility) is well-established |
| S2 | **Tension** | R8 — perfunctory-satisfaction risk + R12 — active-challenge mechanisms exist | Probed: tension between "challenge every run" (active firing the user wants) and "awareness-level cognitive habit, not checklist" (the 21-04-00 corrective form). The existing failure-mode lists thread this needle by being "patterns to notice... like recognizing when you're off-balance" rather than mechanical checklists |
| S3 | **Absence** | R2 — MN8 is named at finding-level only, not at any discipline-spec | Probed: confirmed absence. The user's proposal addresses this absence — a discipline-spec-level home for named substrate-tendencies vs the current finding-level home |
| S4 | **Density** | R10 — innovate already has "Prior-step never-generate variant" refinement | Probed: innovate's spec ALREADY contains a substrate-bias-aware mechanism-corrective for the additive-fix pattern. This is partial coverage of what the user proposes — but only at Innovation discipline, not cross-cutting |
| S5 | **Novelty** | R9 — sensemaking has 3 coexisting check patterns at different abstraction levels | Probed: the design-vocabulary already supports multiple check patterns at different levels. The user's proposed section could be a Pattern D at a new abstraction level (cross-discipline substrate-tendency) |
| S6 | **Relevance** | R3 — 21-05-00 applied MN8 without a section | Probed: per-inquiry application worked via Synthesis Trigger + dedicated Q-tree piece + dedicated Critique dimension. BUT this required runner-awareness of MN8 + explicit declaration in _branch.md — a future inquiry that doesn't know about MN8 won't automatically apply it |
| S7 | **Tension** | R7 — MC-ENHANCE-1/MC-ENHANCE-2 are DEFERRED; the user's proposal is a 3rd candidate corrective | Probed: the deferred enhancements are specific mechanism edits; the proposed section is a cross-cutting cumulative library. These are operationally distinct correctives at different scopes |
| S8 | **Absence** | R12 — no cross-cutting cumulative substrate-tendency list exists anywhere in the project | Probed: confirmed absence. 21-04-00's MN8 is the FIRST named LLM-cognitive bias at the project level. The user's proposal would establish the infrastructure for accumulating more |
| S9 | **Tension** | R1 — user's "everytime we will run it, it can challenge this" implies active firing; R8 perfunctory-satisfaction warns against mechanical enforcement | Probed: the user's verb "challenge" requires interpretation. If "challenge" = mechanical-checklist-firing → perfunctory-satisfaction risk. If "challenge" = awareness-cognitive-habit-trigger → consistent with 21-04-00. The user likely means the latter; the section's design should reflect this |
| S10 | **Novelty** | R10 — innovate's "Prior-step never-generate variant" is structurally proof that substrate-bias-aware entries can live within existing discipline failure-mode-list extensions | Probed: this is a NATURAL EXTENSION model — substrate-bias entries can be added to existing discipline failure-mode lists rather than creating a new section. Innovate's existing refinement note demonstrates the pattern works |

### Deferred Signals

| # | Why deferred |
|---|---|
| D1 | Specific placement decision (MVL+ vs disciplines vs specific-disciplines) — out of MEANING-layer scope; deferred to STRUCTURAL inquiry IF warranted |
| D2 | Specific firing-mechanism design (refinement-note pattern vs new section vs hook-table entry) — out of MEANING-layer scope; deferred to PROCESS inquiry IF warranted |
| D3 | Whether the section should accept additions automatically vs require evidence threshold (LOOP_DIAGNOSE Step 5 style) — partially MEANING (what the section IS for) + partially PROCESS (how it grows); deferred until MEANING settles |

---

## 4. Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| R1 — User proposal parsed | confirmed | Compound noun parsed; operational properties extracted |
| R2 — MN8 finding-level operation | confirmed | Verbatim 21-04-00 Section 5 |
| R3 — 21-05-00 per-piece application | confirmed | Verbatim 21-05-00 finding |
| R4 — Discipline failure-modes lists | confirmed | Verified across all 5 disciplines' spec files |
| R5 — Phase 0 + Phase 3 refinement notes | confirmed | Verbatim |
| R6 — Intervention-Shape Vocabulary | confirmed | Verbatim |
| R7 — DEFERRED MC-ENHANCE-1/2 | confirmed | Verbatim 21-04-00 |
| R8 — Perfunctory-satisfaction warning | confirmed | Verbatim 21-04-00 Section 6 |
| R9 — Sensemaking 3 patterns | confirmed | Verbatim sensemaking spec |
| R10 — Innovate Prior-step never-generate | confirmed | Verbatim innovate spec line 702 |
| R11 — Auto-memory | confirmed | Verbatim |
| R12 — User "challenge" verb | scanned | Interpretation deferred to Sensemaking SV4 |
| R13 — Active-challenge mechanisms | scanned | Catalogued at high level |
| R14 — 3-level taxonomy | inferred | Synthesis of R2 + R7 + R4 |

**Calibration: HIGH confidence on existing-correctives mapping; MEDIUM-HIGH on the three operational-options for the section (α / β / γ).**

---

## 5. Frontier State

**STABLE** at the MEANING-layer territory.

Remaining gaps handed to Sensemaking:

1. **Operational distinctness adjudication** — is the proposed section truly distinct from (a) the named-meaning-node-per-finding pattern; (b) the existing discipline failure-modes lists; (c) MC-ENHANCE-1/MC-ENHANCE-2; OR does it overlap fully or partially?

2. **Active vs passive operation** — what does the user's "challenge" verb commit the section to operationally? Test load-bearing concept on "challenge."

3. **Three options α / β / γ** — substrate-cumulative-library / mechanism-active-enforcement / discipline-process-extension. Which option (if any) is the section's correct operational identity? Sensemaking ambiguity-collapse with strongest-counter test on structural grounds.

4. **Sufficiency criterion** — what makes the section "enough" per the user's question? Effectiveness (catches future biases)? Non-perfunctoriness? Compatibility with awareness-cognitive-habit principle? Scalability for future tendencies?

5. **Specific-vs-pattern coherence** — the section as a category-of-spec-element must accommodate multiple entries (not just the additive-fix). If future entries don't fit the section's structural form, the form is mis-designed.

---

## 6. Jump-Scan Performed

Direction: **does the same cognitive operation exist anywhere else in the project that I haven't catalogued?**

Specifically: are there cumulative-cross-discipline tendency lists somewhere in:
- The protocols layer (`cognitive_harness/protocols/`)?
- The MVL/MVL+ skill specs?
- Any docs/* file?

**Findings:**
- `cognitive_harness/protocols/loop_diagnose.md` — Step 5 documents named failure modes ("Overconfident attribution," "Ground-truth inversion," "Maintenance overreach," etc.) — these are PROTOCOL-level failure modes, structurally analogous to discipline failure modes but at a different abstraction level (across protocol application, not within a single discipline). This is ANOTHER existing list-pattern.
- MVL+ SKILL.md does NOT contain a cognitive-tendencies list or analog. It contains pipeline rules + invariants.

**Surprise:** loop_diagnose.md HAS a failure-modes-like list (Step 5 guardrails). This is a 6th instance of the named-pattern-list operation in the project.

**Jump-scan result: NO BREAKING SURPRISES** — the discovery of loop_diagnose's guardrail list strengthens the convergence that named-pattern lists are a well-established project operation pattern at multiple scopes.

Frontier remains stable.

---

## 7. Gaps and Recommendations

### Gaps (open to Sensemaking)

1. **Adjudicate operational distinctness** between proposed section + existing correctives (R4 + R5 + R7 + R10). The 3 options α / β / γ must be tested.

2. **Resolve "challenge" verb interpretation** — active firing vs awareness-cognitive-habit.

3. **Sufficiency criterion** — what makes the section "enough"?

4. **Specific-vs-pattern check** — does the section accommodate future entries beyond additive-fix?

### Pre-Sensemaking Provisional Recommendation (subject to SV1-SV6 adjudication)

Based on the territory mapped, the strongest provisional interpretation is **option γ extended** — the section's cognitive operation is best understood as **adding substrate-cognitive-tendency entries to existing discipline failure-modes lists where applicable**, NOT as a new top-level section.

Reasoning:
- R4: each discipline already has a failure-modes section operationally analogous.
- R10: innovate's "Prior-step never-generate variant" is structurally proof that substrate-bias entries can live within existing discipline failure-mode extensions.
- R8: this avoids perfunctory-satisfaction by inheriting the existing failure-modes lists' "patterns to notice, not checklists" framing.
- R5 + R9: the project's design-vocabulary supports multi-pattern check systems at different abstraction levels; adding to existing patterns is more parsimonious than introducing a new top-level category.

**Counter to provisional recommendation:** the user's proposal is cross-cutting + cumulative ("all LLM tendencies in one place"). Adding entries to discipline-specific failure-modes lists FRAGMENTS the cumulative library (each discipline's list has different substrate-bias entries; no single cross-discipline view).

This counter must be tested at Sensemaking SV4.

**Sensemaking should adjudicate** the 3 options + the cross-cutting-cumulative vs discipline-fragmented trade-off.

---

## 8. Frontier — Open Questions for Downstream

### Frontier Questions (FQ) handed to Sensemaking + Decomposition

**(FQ1)** Operational identity of the proposed section: option α (substrate-cumulative-library) / option β (mechanism-active-enforcement) / option γ (discipline-process-extension) / something else? Sensemaking ambiguity-collapse with strongest-counter.

**(FQ2)** "Challenge" verb interpretation: active-fire-per-run vs awareness-habit-trigger? Load-bearing concept test.

**(FQ3)** Operational distinctness from existing correctives: warranted-as-new-mechanism vs redundant-with-existing vs reframe-as-extension-of-existing?

**(FQ4)** Cross-cutting cumulative vs discipline-fragmented trade-off — does the cumulative-library property require its own home, or is fragmenting across disciplines acceptable?

**(FQ5)** Specific-vs-pattern coherence — does the section's structural form accommodate future entries beyond additive-fix (e.g., 21-04-00 named 7 mechanisms of the additive-fix bias; would each be a separate entry, or just the bias as a whole)?

**(FQ6)** Sufficiency criterion — what would make the section enough per the user's question? Effectiveness (catches future biases at the right moments)? Non-perfunctoriness (awareness-habit-compatible)? Scalability? Cross-discipline coherence?

**(FQ7)** Substrate-vs-mechanism-vs-discipline-process taxonomy — should the section explicitly position itself in this 3-level taxonomy, or implicitly?

### Convergence Telemetry

- **Mode:** artifact primary
- **Entry point:** signal-first
- **Cycles run:** 1
- **Signals detected:** 10 (S1-S10)
- **Probed count:** 10
- **Deferred count:** 3 (D1-D3)
- **Resolution progression:** medium-grained at all 14 regions
- **Frontier state:** STABLE
- **Discovery rate:** declining (jump-scan added 1 new region — loop_diagnose Step 5 guardrails — but doesn't change the convergence)
- **Convergence criteria:** Frontier stability ✓; Declining discovery rate ✓; Bounded gaps ✓
- **Jump-scan performed:** YES (no breaking surprise)
- **Failure modes checked:** Premature depth ✓; Surface-only scanning ✓; False confidence ✓; Premature termination ✓; Re-exploration ✓; Completeness bias in possibility mode (this was a possibility-mode sub-phase — checked) ✓; Open→closed drift ✓; Silent boundary-discovery ✓ (boundary explicit); Negative-space silent drop ✓ (confirmed-absent regions explicit); Inadequate per-item content depth ✓
- **Self-assessment:** PROCEED

---

## 9. Self-Vigilance Audit (per 21-04-00 MN8)

This Exploration's own pipeline applied the 4 recognition signals:

| Signal | Applied at Exploration | Result |
|---|---|---|
| #1 (gap framed as "X is missing") | Initial framing of the user's proposal: "we want a section that doesn't exist." MITIGATED via R3 + R4 + R10 surfacing what ALREADY EXISTS — the framing is reframed from "section missing" to "what does this operation add vs what's already there." | ✓ |
| #2 (proposed fix begins with "add"/"append"/"extend") | User's verb is literally "adding LLM-cognitive-tendencies section to MVL loop." Self-vigilance applied: the Exploration INSPECTED existing correctives (R4 + R5 + R6 + R10) before recommending. | ✓ |
| #3 (Inversion considers same-category-shapes only) | At Sensemaking + Innovation, Inversion-candidates should include CONTRARIAN-RETHINK (e.g., "what if the section concept itself is the wrong frame"). Deferred to downstream. | ✓ (forward) |
| #4 (existing spec design treated as HOST for new addition) | The Exploration explicitly inspected existing discipline failure-modes lists (R4), Phase 0/Phase 3 refinement notes (R5), Intervention-Shape Vocabulary (R6), Prior-step never-generate variant (R10) — treating them as artifacts under inspection, not as hosts for the new section. | ✓ |

**Verdict: SELF-VIGILANCE PASS at Exploration.**
