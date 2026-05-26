# Innovation: Concrete maintenance candidates for the 5-piece extension

## User Input

`devdocs/inquiries/2026-05-15_02-05__loop_diagnose__three_explore_sources_faults/_branch.md` plus upstream `exploration.md` (27 candidates), `sensemaking.md` (8 patterns → 5 sub-aspects + 2 new dimensions + 1 new attribution category), `decomposition.md` (5-piece question tree with universal precondition that the prior loop_diagnose's design ships first; 3-phase sequencing within this extension).

Seed: generate concrete maintenance candidates per the 5 decomposed pieces. Architecture and scope locked; within-piece design choices open.

---

## Direction

### Context
This loop_diagnose's maintenance extension layers on top of the prior loop_diagnose's design (which is established context, not re-decomposed here). The 5 pieces address: small refinements to existing prior pieces (Pieces 1+2), 2 new pieces for the new dimensions (Pieces 3+4 = P6 Synthesis-re-test + P7 User-words-as-constraint), and 1 cross-iteration extension for the new CHAIN-AMPLIFIED attribution category (Piece 5 = P-cross).

### Valuation (what feels load-bearing)
- Piece 5 (P-cross periodic audit) provides infrastructure that Piece 2 (Cluster II cross-iter refinements) consumes. High-leverage pairing.
- Piece 4 (P7 User-words-as-constraint) directly addresses the speculative-tooling pattern that the user has implicitly objected to across the chain. Most user-visible.
- Piece 3 (P6 Synthesis-re-test) is the most operationally novel — synthesis-as-validation circular evidence flow is structurally distinct.
- Piece 1 (Cluster I umbrella) is doc-only edits but distributes across 3 different prior pieces — coordination matters.

### Motivation
This is loop_diagnose #3 on the same chain. The user has invested significant compute to surface multi-layered patterns. The maintenance must compose cleanly with the prior loop_diagnose's design (not duplicate, not supersede) while extending the framework with the 2 new dimensions and 1 new attribution category.

---

## Phase 2 — Generation (7 mechanisms × 3 variations = 21 candidates)

Each candidate notes which piece(s) it bears on.

### 1. Lens Shifting (Framer)

**LS-G (generic) — "One consolidated spec-rewrite-governance bundle."**
Frame: ship all 5 pieces' content as a single new document `homegrown/protocols/spec_rewrite_governance.md` with cross-references to existing prior pieces. Single touchpoint for spec authors. Bears on: overall packaging.

**LS-F (focused) — "Always-on review at every spec edit."**
Frame: every spec edit (regardless of size) goes through a checklist that includes all 5 pieces' triggers. Increases overhead but reduces detection-miss risk. Bears on: P3, P5, P7 detection mechanisms.

**LS-C (contrarian) — "Document patterns; defer maintenance until more evidence."**
Frame: all 5 pieces become RESEARCH FRONTIER with explicit evidence triggers (e.g., "build P-cross when 5+ spec rewrites have occurred without governance"). No active maintenance ships now. Bears on: overall maintenance commitment.

### 2. Combination (Generator)

**CB-G (generic) — "P6 + P-cross combined as one rewrite-quality audit."**
Combine the Synthesis-re-test rule (Piece 3) and the periodic audit (Piece 5) into one CONCLUDE-level "rewrite-quality audit" that runs at every spec rewrite. The audit includes synthesis-re-test (when synthesis is detected) AND cumulative-state tracking (every N rewrites). One report format. Bears on: Piece 3 + Piece 5.

**CB-F (focused) — "Refinements + P7 as one spec-edit checklist."**
Combine the 3 single-target refinements in Piece 1 (B1, B3, B5) with P7 (Piece 4) into one "spec-edit checklist" with one checkbox per rule. All are tiny additive rules; bundling them as a single checklist reduces cognitive overhead. Bears on: Piece 1 + Piece 4.

**CB-C (contrarian) — "Wholesale consolidation: replace prior loop_diagnose's design."**
Combine all 5 pieces from this loop_diagnose with the prior loop_diagnose's pieces into a single new file `homegrown/protocols/discipline_spec_governance.md` that supersedes both deferred_governance.md and the pre-inquiry redefinition checklist. Bears on: overall packaging (REPLACES sub-assemblies).

### 3. Inversion (Framer)

**IN-G (generic, level-1) — "Trust spec-author judgment; document patterns only."**
Invert "add governance to prevent patterns" → patterns become DOCUMENTATION not enforcement. Spec authors read the patterns and self-apply at their discretion. Bears on: P3 refinement (B1), P5 refinement (B3), P7.

**IN-F (focused, level-2 system) — "Trust spec-rewrite iteration; catch faults retroactively via loop_diagnose."**
Invert IN-G at system level: no preventive governance; rely on periodic loop_diagnose runs (like the chain we just produced) to catch faults retroactively. Bears on: overall maintenance philosophy.

**IN-C (contrarian) — "All spec edits get the same governance, not just rewrites."**
Invert "spec-rewrite produces fault-prone outputs" → treat ALL spec edits with the same governance scope, not just rewrites. Bug fixes get the full checklist too. Bears on: scope of maintenance application.

### 4. Constraint Manipulation (Framer)

**CM-G (generic) — "Every refinement must include a worked example."**
Add constraint: each refinement and new piece must ship with a concrete worked example showing what the rule catches AND what it doesn't catch (false-positive boundary). Bears on: all 5 pieces.

**CM-F (focused) — "P-cross as manual checklist, not separate inquiry."**
Remove constraint "P-cross must run as a separate MVL+ inquiry" → P-cross can be a manual checklist the user runs after every N spec rewrites. Lower implementation cost; faster to ship. Bears on: Piece 5 form.

**CM-C (contrarian) — "No new files; all 5 pieces ship as edits to existing files."**
Add constraint: P6 lives in CONCLUDE.md (extending the prior CONCLUDE addition); P7 lives in `homegrown/MVL+/SKILL.md`; P-cross lives in `enes/stability_preservation_via_git.md` (as periodic-audit extension); refinements live in their target prior pieces. No new file created by this loop_diagnose. Bears on: file proliferation.

### 5. Absence Recognition (Generator)

**AR-G (generic — gap in current design) — "In-discipline real-time drift signals are missing."**
What's missing: in-discipline mechanism to detect when a fault pattern fires in real-time during pipeline execution (vs retroactively via loop_diagnose). Future-direction. Bears on: research frontier.

**AR-F (focused — gap in design-from-scratch process) — "Formal from-scratch declaration is missing."**
What's missing: a formal mechanism for the user to declare at inquiry start "this is a from-scratch rewrite vs an additive refinement vs a bug fix." This shapes which governance applies. Bears on: P7 (Piece 4) design + scope refinement.

**AR-C (contrarian — designed-from-scratch absence) — "Second-order discipline operating on disciplines."**
What's missing: a `/discipline-design` second-order skill (already named in prior loop_diagnose as research frontier). Re-affirming as the structural fix at root. Bears on: research frontier.

### 6. Domain Transfer (Generator)

**DT-G (generic — code review PR templates) — "Spec-edit checklist as PR template."**
GitHub PR templates list categories like "tests added; docs updated; changelog entry." Apply: the spec-edit checklist becomes a PR-style template with one checkbox per rule. Easy adoption; familiar pattern. Bears on: P7 + Piece 1 implementation.

**DT-F (focused — semantic versioning) — "Spec-rewrite scope via major/minor/patch versioning."**
Software versioning distinguishes major (breaking) / minor (additive) / patch (bug fix). Apply: spec edits get versioned; major spec rewrites trigger full governance, minor edits trigger lighter governance, patch fixes are exempt. Operationalizes the drift-rule scope. Bears on: B3 (Piece 1) + Piece 4 scope.

**DT-C (contrarian — judicial stare decisis) — "Convention as default; distinguishing requires explicit reasoning."**
Court systems use precedent as default but allow distinguishing/overruling with explicit reasoning. Apply: convention-citation as authority is OK as STARTING point, but distinguishing/overruling requires explicit per-case reasoning. Refines the "convention-citation is not authority" rule from a categorical rejection to a default-with-distinguishing-allowed. Bears on: B3 (Piece 1).

### 7. Extrapolation (Generator)

**EX-G (generic — trend extension) — "CHAIN-AMPLIFIED tracking system."**
If the project keeps doing spec rewrites, the patterns will recur. Build a CHAIN-AMPLIFIED tracking system that records which faults recur and at what rate. Operationalizes P-cross's cumulative-state output. Bears on: Piece 5 form.

**EX-F (focused — autonomy ladder) — "v1 manual governance; v2 automated at autonomy Level 3+."**
At higher autonomy levels (per `enes/desc.md`'s autonomy-ladder concept), the LLM checks each pattern at every spec edit automatically. v1 manual via checklist; v2 automated. Match revival trigger to autonomy ladder progression. Bears on: P3, P4, P7 deferred extensions.

**EX-C (contrarian — fault-cascade) — "Moratorium on /explore-spec edits until governance ships."**
If iter-1 + 3 priors + rewrite produced this much downstream cost, consider a moratorium on `/explore` spec edits until the maintenance design ships. Bears on: workflow research frontier.

---

## Phase 3 — Testing (5-test cycle on each candidate)

### Per-candidate verdicts

| ID | Novelty | Scrutiny survival | Fertility | Actionability | Mech. independence | Verdict | Bears on |
|---|---|---|---|---|---|---|---|
| **LS-G** consolidated bundle | Medium | Survives — single touchpoint for spec authors. Risk: hides per-piece structure | Medium | Medium | Single-mechanism | SURVIVE → REFINE — defer to materialization choice | overall packaging |
| **LS-F** always-on review | Low | Fails — overhead too high; bug fixes don't need full governance | Low | Low | Single-mechanism | KILL (seed: scope-tiered governance — see DT-F) | — |
| **LS-C** documentation-only | Low contrarian | Fails — defers all maintenance; doesn't address user's stated need | Low | High but defeats purpose | Single-mechanism | KILL | — |
| **CB-G** P6+P-cross combined audit | Medium | Survives — reduces touchpoints; one report format | High | High | Convergent (CM-F adjacent) | SURVIVE → ACTIONABLE | Pieces 3 + 5 |
| **CB-F** refinements + P7 as checklist | Medium | Survives — bundles tiny rules for cognitive economy | High | High | Convergent (DT-G) | SURVIVE → ACTIONABLE | Pieces 1 + 4 |
| **CB-C** wholesale consolidation | High contrarian | Fails — supersedes prior loop_diagnose's design (out of scope per FP3 maintenance composes not replaces) | Low | Low | Single-mechanism | KILL | — |
| **IN-G** documentation-only governance | Low | Fails (same as LS-C) | Low | Low | Convergent with LS-C | KILL | — |
| **IN-F** trust-iteration, catch retroactively | Medium contrarian | Fails — the loop_diagnose chain we're running IS the retroactive catch; relying on it is reactive-only and doesn't scale | Medium | Low | Single-mechanism | KILL (seed: loop_diagnose remains valuable as backstop) | — |
| **IN-C** all spec edits same governance | Medium contrarian | Fails — over-broad scope; bug fixes don't need synthesis-re-test | Low | Low | Single-mechanism | KILL | — |
| **CM-G** worked examples mandatory | Medium | Survives — strong quality rule for spec | High | High | Single-mechanism | SURVIVE → ACTIONABLE | all 5 pieces |
| **CM-F** P-cross as checklist | Medium | Survives — lower cost; faster ship; aligns with v1-minimal | Medium | High | Convergent (EX-G) | SURVIVE → ACTIONABLE | Piece 5 |
| **CM-C** no new files | Medium | Survives — pragmatic; reduces file proliferation. Strongest objection: existing files (CONCLUDE.md, MVL+/SKILL.md) become large and unfocused | Medium | High | Single-mechanism | SURVIVE → REFINE — split decision per piece (some refinements fit existing files; P-cross may warrant own location) | all 5 pieces |
| **AR-G** in-discipline real-time drift | High | Far future; requires LLM real-time detection mechanisms | High | Low | Single-mechanism | RESEARCH FRONTIER | — |
| **AR-F** formal from-scratch declaration | Medium | Survives — formalizes a distinction the user implicitly makes | High | High | Convergent (DT-F semantic-versioning) | SURVIVE → ACTIONABLE | Piece 4 + scope refinement |
| **AR-C** second-order /discipline-design skill | High | Far future (per prior loop_diagnose) | High | Low | Single-mechanism | RESEARCH FRONTIER | — |
| **DT-G** PR template style | Low-Medium | Survives — familiar pattern; easy adoption | High | High | Convergent (CB-F) | SURVIVE → ACTIONABLE | Piece 1 + Piece 4 |
| **DT-F** semantic-versioning scope | Medium | Survives — operationalizes scope tiering | High | Medium-High | Convergent (AR-F) | SURVIVE → REFINE on exact tier definitions | B3 (Piece 1) + Piece 4 |
| **DT-C** stare decisis (convention as default) | Medium | Survives — refines B3 from categorical rejection to default-with-distinguishing | Medium | Medium-High | Single-mechanism | SURVIVE → REFINE on B3 wording | B3 (Piece 1) |
| **EX-G** CHAIN-AMPLIFIED tracking system | Medium | Survives — operationalizes P-cross's cumulative-state output | High | High | Convergent (CM-F) | SURVIVE → ACTIONABLE | Piece 5 |
| **EX-F** autonomy ladder v2 trigger | Low | Survives — well-aligned with project trajectory | Medium | High (just adds revival trigger language) | Single-mechanism | SURVIVE → ACTIONABLE | P3, P4, P7 deferred extensions |
| **EX-C** moratorium on spec edits | High contrarian | Fails — over-restrictive; maintenance design ships in days, not months | Low | Low | Single-mechanism | KILL | — |

### Disposition tally

| Disposition | Count | Candidates |
|---|---|---|
| **ACTIONABLE** | 7 | CB-G, CB-F, CM-G, CM-F, AR-F, DT-G, EX-G, EX-F (= 8 — CB-G also bears on Pieces 3+5; counted with primary attribution) |
| **SURVIVE → REFINE** | 4 | LS-G, CM-C, DT-F, DT-C |
| **RESEARCH FRONTIER** | 2 | AR-G, AR-C |
| **KILL** | 7 | LS-F, LS-C, CB-C, IN-G, IN-F, IN-C, EX-C |

Total: 21 (with CB-G counted once).

---

## Assembly Check

Combining the ACTIONABLE survivors per piece produces a coherent maintenance design:

### The assembled per-piece designs

| Piece | Concrete design choice | Source mechanism(s) |
|---|---|---|
| **Piece 1** (Cluster I umbrella: B1+B3+B5 single-target refinements) | The 3 refinements ship as PR-style checklist items in a new spec-edit-checklist section (in CONCLUDE.md or a sibling file), each with a worked example showing what the rule catches and what it doesn't. **B1** in prior P3: anticipated-use-is-not-trigger-firing. Worked example: "promoting Cross-Inquiry Merge Contract because 'staged for-loop pattern requires it operationally' is anticipated-use, NOT trigger-firing; the trigger was 'meta-loop sibling-territory overlap,' which has not occurred." **B3** in prior P5: convention-citation-as-default-with-distinguishing-allowed (per stare-decisis framing). Worked example: "5/5 references use terminal SOLID-INSTRUCTIONS pattern" is acceptable as starting hint; using it as load-bearing argument requires explicit /explore-specific reasoning OR explicit distinguishing. **B5** in prior P2: vocabulary-absorption check. Worked example: "absorbing nav_north_star.md vocabulary into /explore spec via 'reconciliation' is project-coupling — move absorbed vocabulary to project-taxonomy notes alongside the NOT-list." | CB-F + CM-G + DT-G + DT-C (refines B3) |
| **Piece 2** (Cluster II umbrella: B2+B7 cross-iter refinements to prior P4) | Both refinements use Piece 5's audit infrastructure as evidence source. **B2** cross-iter pipeline-elaboration: track cumulative spec growth across iterations on the same target (e.g., `homegrown/explore/`). Trigger: cumulative growth >2× baseline triggers review. Worked example: "bf4ae1f baseline ~20kB; current rewrite ~43kB = >2× growth across 4 iterations → triggers review at iteration 4 had Piece 5 been in place." **B7** cross-iter MUST/COULD: track cumulative MUST resolution. Trigger: 3+ iterations on the same target with unresolved MUSTs cumulatively → escalate to user review. Worked example: "5 iterations on /explore with 5 unresolved MUSTs (iter-1 weak-reading, iter-2 wholesale-vs-meaning-layer, end-goal-aware adoption-mode, surfacing-mechanism none, old-vs-new G1) → would have triggered at iteration 3 had this rule been in place." | CB-F + CM-G (worked examples) |
| **Piece 3** (P6 Synthesis-re-test rule) | New sub-section in `homegrown/protocols/deferred_governance.md` (the prior loop_diagnose's sub-assembly 1). **Combined with P-cross (Piece 5) into a single "rewrite-quality audit"** that runs at every spec rewrite — synthesis-re-test fires when synthesis is detected; cumulative-state tracking fires every N rewrites. **Detection heuristic for synthesis:** the inquiry's `_branch.md` mentions "synthesizing N prior outputs" or `finding.md` lists N≥3 inherited commitments. **Re-test format:** each inherited commitment gets one ambiguity-collapse pair (per sense-making's Phase 3 format) with a counter-interpretation tested on structural grounds — NOT treating synthesis coherence as evidence. Worked example: "old-vs-new finding listed 11 commitments from 4 prior findings; under this rule it would have produced 11 ambiguity-collapse pairs, one per commitment, exposing weaknesses like the NOT-list framing question that emerged later." | CB-G (combined with P-cross) + CM-G (worked example) |
| **Piece 4** (P7 User-words-as-constraint default rule) | New rule in the pre-inquiry redefinition checklist (the prior loop_diagnose's sub-assembly 2), implemented as a PR-style checklist item. **Detection heuristic:** when user's `_branch.md` Source Input contains permissive markers ("acceptable," "OK," "fine," "manual is enough," "we can defer," "can wait") combined with a deferral candidate, treat as CONSTRAINT TO DEFER. **Override path:** if spec-author believes maximal interpretation is correct, `_branch.md` must include "Interpretive Justification" subsection naming why constraint-reading is wrong here. **Coupled with formal from-scratch-vs-additive declaration (AR-F):** at inquiry start, the user (or spec-author) declares whether this inquiry is from-scratch / additive-refinement / bug-fix. Different declarations apply different governance scopes (per DT-F semantic-versioning analog). Worked example: "end-goal-aware's user input said 'manual-trigger v1 is acceptable.' Under this rule, that's CONSTRAINT TO DEFER /staged-explore building. The actual choice (build /staged-explore) would have required an Interpretive Justification subsection naming why 'acceptable' meant 'OK to build' here — likely producing the realization that it didn't." | AR-F + CM-G + DT-G + DT-F |
| **Piece 5** (P-cross periodic audit extension) | Implemented as a manual checklist (per CM-F low-cost choice) the user runs after every 3 spec rewrites of the same target (per the calibration constraint). **Combined with P6 (Piece 3)** into the "rewrite-quality audit" pattern. **Tracks (CHAIN-AMPLIFIED tracking system per EX-G):** (a) cumulative spec growth (size; section count); (b) deferred-vs-active state changes with evidence citations; (c) MUST resolution state cumulative across iterations; (d) framework-or-convention citations used as load-bearing arguments. **Output format:** markdown report at `devdocs/audits/<target>__<date>.md`. Consumed by Piece 2's Cluster II refinements as evidence source. **Deferred extension (per EX-F):** at autonomy Level 3+, automate the audit; v1 manual. Worked example: "applied to current `homegrown/explore/`, this audit would surface (a) >2× cumulative growth, (b) 7+ deferred items activated without trigger evidence, (c) 5 unresolved cumulative MUSTs, (d) explicit '5/5 references' convention citation in old-vs-new — total 4-of-4 CHAIN-AMPLIFIED signals firing." | CB-G (combined with P6) + CM-F (manual checklist) + EX-G (tracking) + EX-F (deferred autonomy extension) |

### Emergent value of the assembly

- **The combined "rewrite-quality audit" (P6 + P-cross combined per CB-G)** unifies the two new infrastructure pieces into ONE document/operation. Spec authors have one audit to run, not two. The combination realizes B6 + CHAIN-AMPLIFIED in shared substrate, similar to how the prior loop_diagnose's sub-assembly 1 unified Dim 3 + Dim 4 maintenance.
- **The PR-template-style spec-edit checklist (DT-G + CB-F)** consolidates Pieces 1 and 4 into a single check-the-boxes-at-spec-edit ritual. Familiar pattern; easy adoption.
- **Worked examples (CM-G) across all 5 pieces** make the abstract rules concrete. Each rule's first deployment can be audited against its worked example.
- **Formal from-scratch-vs-additive-vs-bug-fix declaration (AR-F)** at inquiry start operationalizes scope tiering (per DT-F semantic-versioning analog). Different inquiry types apply different governance — solves the "drift-rule scope" question from prior loop_diagnose's REFINE-G.

---

## Axis Coverage Check

| Axis | Variants in candidate set | Coverage |
|---|---|---|
| Time-locus (immediate vs medium vs long-term) | Immediate (Piece 1 doc-only); medium (Pieces 2-5); long-term (RESEARCH FRONTIER AR-G, AR-C) | ✓ |
| Governance shape (preventive vs documentation vs reactive) | Preventive: most ACTIONABLE candidates. Documentation-only: KILL'd (LS-C, IN-G). Reactive: KILL'd (IN-F) | ✓ |
| File proliferation (new files vs existing files) | New files: P-cross, possibly P6+P-cross combined audit. Existing files: CM-C "no new files" SURVIVE → REFINE preserves alternative | ✓ |
| Mechanism direction (additive vs subtractive vs replacement) | Additive: most candidates. Subtractive: KILL'd (CB-C wholesale supersession). Replacement: not applicable | ✓ |
| Stakes / risk class | LOW: Piece 1 doc-only refinements. MEDIUM: Pieces 2-5 (governance + audit infrastructure). HIGH: AR-C second-order discipline (RESEARCH FRONTIER) | ✓ |
| Evidence-burden direction | Additive: candidates that ADD rules (CM-G worked examples; B1 trigger-distinction). Deletional: KILL'd (IN-G documentation-only removes rules) | ✓ |
| Scope (this-extension-only vs project-wide) | This-extension: 5 pieces. Project-wide: AR-C second-order discipline (RESEARCH FRONTIER) | ✓ |
| Substrate (new file vs existing file vs combined) | New file: combined rewrite-quality audit. Existing: P6 in deferred_governance.md. Combined: CB-G P6+P-cross | ✓ |
| Detection mechanism (heuristic vs always-on vs trigger-based) | Heuristic: P6 synthesis detection (3+ inherited commitments); P7 permissive-marker detection. Trigger-based: B1 trigger-distinction. Always-on: KILL'd (LS-F overhead too high) | ✓ |

9 axes covered. No single-axis bias detected.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Total candidates generated:** 21 (7 mechanisms × 3 variations)
- **Convergence signal:** YES — multiple mechanisms (CB-G + CM-F + EX-G) converge on the combined "rewrite-quality audit" design unifying P6 and P-cross. CB-F + DT-G converge on the PR-template-style spec-edit checklist pattern. AR-F + DT-F converge on the formal from-scratch-vs-additive-vs-bug-fix declaration with semantic-versioning-analog scope tiering. CM-G applies uniformly across all 5 pieces as a "worked example mandatory" rule.
- **Survivors tested:** 21 / 21 (all candidates received the 5-test cycle)
- **Failure modes observed:** None
  - **Premature evaluation:** No — all candidates generated before testing
  - **Single-mechanism trap:** No — all 7 mechanisms applied
  - **Early frame lock:** No — the user's framing was probed via LS, inverted via IN, expanded via CB, before settling on the convergent assembly
  - **Innovation without grounding:** No — every survivor was tested; failures (7 KILL) were extracted as seeds where applicable (LS-F → DT-F scope-tiered governance; IN-F → loop_diagnose remains valuable as backstop)
  - **Mechanism exhaustion:** No — viable outputs in every mechanism
  - **Survival bias:** Tested — the most uncomfortable candidate (CM-C "no new files" — would force reorganization of existing files) SURVIVED → REFINE because the structural argument supports it for some pieces; the KILL'd contrarian candidates (LS-C documentation-only; CB-C wholesale supersession; EX-C moratorium) were KILL'd on structural grounds (defers maintenance / out of scope per FP3 / over-restrictive), not for being threatening.

**Overall: PROCEED** — full mechanism coverage; convergence signal strong (3 sub-assemblies emerged: combined rewrite-quality audit; PR-template spec-edit checklist; formal inquiry-type declaration with scope tiering); 21/21 survivors tested with explicit dispositions; no failure modes triggered; axis coverage complete across 9 design axes.
