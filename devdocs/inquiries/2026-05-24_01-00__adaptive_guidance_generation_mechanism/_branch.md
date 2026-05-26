# Branch: adaptive_guidance_generation_mechanism

## Question

**Subject** — routeman's adaptive-guidance generation mechanism + WHY-anchor source. "Adaptive guidance" is the prescriptive content per Route in routeman's output: Guidance Mode (none / compact / full / expand-on-selection) + Guidance Pointers (short, actionable recommendations). Each pointer carries a WHY (the per-pointer reason). The mechanism question is HOW routeman produces those pointers from its inputs; the WHY-anchor source question is WHAT material grounds the WHY content.

**Action** — design (from scratch) the generation mechanism + the WHY-anchor source. Then evaluate the design against the LAYER-2 identity-erosion mode named "Prescriptive-Without-Cycle-Context."

**Level** — discipline-level (routeman's SKILL.md-authoring-stage piece for the prescriptive-extension layer's adaptive-guidance feature). The mechanism is a routeman procedure that runs during routeman's enumeration step.

**Observation targets** — preserve as separate items because the user's framing presents TWO distinct questions joined by "and":

1. **Generation mechanism** — HOW pointers are produced. The procedural steps routeman runs to derive a pointer from the inputs it scans. Includes: input-to-pointer mapping rule; pointer-content templating; mode-selection rule (which Routes get `none` / `compact` / `full` / `expand-on-selection`); pointer-count budgeting per mode.
2. **WHY-anchor source** — WHAT material grounds each pointer's WHY. Per the 16-31 correction's clarification: file content (cycle-output artifacts routeman reads from inquiry-folder files during its scan). The candidates the source-question names: critique verdicts written to file; sense-making anchors; telemetry; /reflect observations (when present). The 18-58 staged-mapping inquiry added a fifth candidate: the per-Route meta-reasoning field (`why_this_might_be_important`).

**Deliverable shape** — a design memo with: (a) the generation-mechanism specification (input-to-pointer mapping rule + templating + mode-selection + budgeting); (b) the WHY-anchor source commitment (which inputs ground the WHY content; whether single-source or multi-source); (c) explicit test against the LAYER-2 Prescriptive-Without-Cycle-Context failure mode; (d) boundary statements with adjacent commitments (meta-reasoning field from 18-58; corpus-limit-seeds input from 14-39; /intuit hunches when Phase β+ ships); (e) explicit deferred-options for any sub-decision genuinely premature (e.g., projection from /intuit hunches may not be calibratable until Phase β ships).

**Stated question:** What is the generation mechanism for routeman's adaptive guidance pointers (procedural steps + input-to-pointer mapping + mode-selection + budgeting), AND what is the WHY-anchor source (which file-content material grounds each pointer's WHY, single-source or multi-source), such that routeman's prescriptive-extension layer becomes implementable AND the LAYER-2 Prescriptive-Without-Cycle-Context mode becomes detectable rather than silently violated?

## Goal

- **Criterion** — a good answer (i) specifies the generation mechanism concretely enough that the SKILL.md authoring inquiry can write the adaptive-guidance section without re-running this inquiry; (ii) commits to a WHY-anchor source (or a multi-source priority order) with structural reasoning; (iii) explicitly tests the design against the LAYER-2 Prescriptive-Without-Cycle-Context failure mode (the design must include an audit-detectable check that the WHY is genuinely cycle-anchored, not LLM-filler); (iv) preserves boundaries with adjacent commitments (the meta-reasoning field from 18-58 is a candidate WHY-anchor; corpus-limit-seeds from 14-39 is an input but not necessarily a WHY-anchor; /intuit hunches are deferred to Phase β+); (v) provides defer-options for genuinely-premature sub-decisions; (vi) interacts cleanly with the autonomy register from 24-40 (the graduated-autonomy classification may gate which Routes get which guidance modes).

- **Use case** — the SKILL.md authoring inquiry inherits this design and writes the adaptive-guidance specification section in routeman's SKILL.md, including the input-contract, the procedural steps, the templating, and the failure-mode test.

- **Desired outcome** — Q3 in the frontier-questions finding becomes RESOLVED-WITH-DESIGN (or DEFERRED-WITH-DESIGN if some sub-decisions genuinely need empirical data before commitment); routeman's prescriptive-extension layer becomes IMPLEMENTABLE; the LAYER-2 Prescriptive-Without-Cycle-Context mode becomes detectable.

- **What would fail** — (i) silently defaulting to "LLM-direct generation with structural template" without testing the alternatives (cycle-output-derivation rule; meta-reasoning-field projection; /intuit-hunch projection; hybrid); (ii) committing /intuit-hunch projection now (premature; /intuit Phase β hasn't shipped per the design memo's anticipatory-feature framing); (iii) producing a mechanism whose WHY content cannot be audit-distinguished from filler (failing the LAYER-2 test); (iv) ignoring the meta-reasoning field from 18-58 as candidate WHY-anchor (would silently drop a load-bearing prior commitment); (v) collapsing the two observation targets (mechanism vs WHY-anchor source) into a single undifferentiated decision; (vi) over-specifying the mode-selection rule when the design memo's "mode-allocation convention" already commits the default (HIGH/risky/blocked/near-action → compact-or-full; MEDIUM → compact; LOW → none-or-compact; selected → full-or-expand-on-selection).

## Source Input

```text
##### Question 3 — What is the generation mechanism for adaptive guidance pointers, and what anchors each pointer's WHY?

> *[Tier II minor re-statement applied 2026-05-23 per correction notice above. The question's substance is unchanged; the WHY-anchor source clarifies as file content (read by routeman from inquiry-folder artifacts during its scan), not in-context content.]*

The adaptive guidance feature is the load-bearing prescriptive residual that distinguishes routeman from descriptive-labeling sibling disciplines like /surfacing. Canonical /navigation describes the route-card structure including Guidance Mode and Guidance Pointers with per-pointer WHY, but does not specify how the pointers are generated or what anchors the WHY. The design memo names the feature without committing to the mechanism.

**Why this is a frontier.** No current answer. Gating: the load-bearing residual is the discipline's separability anchor; without a mechanism, the prescriptive layer degrades to filler and the LAYER-2 identity-erosion mode named "Prescriptive-Without-Cycle-Context" fires. Net-new: the design memo names the feature without specifying its operational mechanism.

**What it gates.** The SKILL.md's procedural specification for adaptive guidance generation. *[Post-correction:]* under the corrected file-scanning architecture, the WHY-anchor source is file content — specifically, the cycle-output artifacts routeman reads during its scan (critique verdicts written to file; sense-making anchors; telemetry; /reflect observations when present). The mechanism question (how pointers are generated from those file-content anchors) is unchanged; the source is clarified. Without commitment, the spec leaves the mechanism implicit, and the LAYER-2 audit cannot detect failure without an anchored-WHY check.

**Hardness.** Breadth high (every Route's prescriptive content depends on it; failure triggers a Layer-2 mode). Depth high (no mechanism specified; design from scratch). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design the adaptive-guidance generation mechanism for routeman, including the WHY-anchor source from inquiry-folder file content." Likely options to evaluate: a cycle-output-derivation rule mapping file-read critique verdicts to DEEPEN/REFINE/PURSUE-SEED guidance pointers (with the cycle-output coming from `critique.md` or equivalent in the worker's inquiry folder); projection from /intuit Phase-β-or-later hunches (which would also be file-mediated); LLM-direct generation reading file content with a structural template; or a hybrid. *Post-correction, all options operate on file-read content; the in-context-pass option is off the table.* The inquiry must commit to one option and test against the LAYER-2 Prescriptive-Without-Cycle-Context failure mode.

run full loop on this
```

## Scope Check

**Question covers goal: YES** with one specific-vs-pattern note and one widening note.

The question covers (i) generation mechanism, (ii) WHY-anchor source, (iii) LAYER-2 failure-mode test — matching the Goal's criteria.

**Specific-vs-pattern check:** the question targets routeman's adaptive guidance specifically. Generalization to other disciplines with prescriptive content (e.g., /intuit Phase β+ hunch presentation) is plausible but out of scope; flagged as research frontier.

**Widening consideration:** the question's "Likely options to evaluate" list (cycle-output-derivation; /intuit-hunch projection; LLM-direct with template; hybrid) is augmented by 18-58's addition: the per-Route meta-reasoning field (`why_this_might_be_important`) is a 5th candidate WHY-anchor source. The inquiry will evaluate ALL FIVE candidates, not just the 4 named in the source question.

## Layer Commitment

**Primary layer: PROCESS.** The inquiry is dominantly about specifying the steps routeman runs to produce a pointer from inputs (the generation mechanism) and the input-to-pointer mapping rule (which input material grounds which pointer's WHY). The mechanism is a procedure — input scan → derive pointer content → emit pointer with WHY. The WHY-anchor source decision is structurally adjacent (which inputs flow into the procedure) but the central commitment is the procedure itself. Structural concerns (the schema of a Guidance Pointer; the Guidance Mode enum) are inherited from the design memo unchanged; this inquiry doesn't restructure them.

**Other-layer alternatives considered and explicitly out of scope for THIS run:**

- **Meaning** — would mean re-defining what "adaptive guidance" IS as a concept. Out of scope: the prescriptive-extension layer is defined in the design memo; this inquiry inherits the definition and designs the mechanism that produces it.
- **Structural (as primary)** — would mean restructuring the route-card schema's Adaptive Guidance group (Guidance Mode + Guidance Pointers + per-pointer WHY). Out of scope: the schema is committed; this inquiry adds the procedural specification.

**Sequential multi-layer plan (declared, not executed in this run):**

1. THIS run — PROCESS: specify the generation mechanism + WHY-anchor source + LAYER-2 failure-mode test.
2. Follow-up (likely the SKILL.md authoring inquiry) — STRUCTURAL: integrate the mechanism specification into routeman SKILL.md's adaptive-guidance section.
3. Follow-up (if needed) — PROCESS extension: when /intuit Phase β ships, extend the WHY-anchor source set to include /intuit hunches.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as inputs and inherits commitments from them. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the routeman design memo (with subsequent additions through 24-40). Commits to: 3-layer identity (prescriptive-extension layer's adaptive-guidance feature is one of the 4 residuals; the load-bearing one); 10 features (F-prescr = "Generate adaptive guidance per move"; F-revisit; F-autosplit); the Adaptive Guidance group of the route-card schema (Guidance Mode + Guidance Pointers); the LAYER-2 Prescriptive-Without-Cycle-Context mode with recognition signal "routeman emits adaptive guidance without sufficient cycle context, producing pointers without anchored WHYs"; the mode-allocation convention (HIGH/risky/blocked/near-action → compact/full; MEDIUM → compact; LOW → none/compact; selected → full/expand-on-selection).

- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — the frontier-questions finding (Q3 is the source of this inquiry). Commits to: Q3's Tier-1 status; the candidate resolution path (the 4 options the source-question named; expanded to 5 via 18-58).

- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — the cycle-consumer process-layer correction. Commits to: isolated session + file-scanning + parallel workers + singleton navigator. The WHY-anchor source is bounded to file-read content; in-context passing is OFF the table.

- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — the staged-mapping + meta-reasoning adoptions. Commits to: per-Route `why_this_might_be_important` meta-reasoning field; the LLM-operational-design principle. The meta-reasoning field is a 5th candidate WHY-anchor source (added to the 4 the source-question named). The 18-58 inquiry's per-Q3 impact note explicitly says: "Q3's resolution path now includes 'use the meta-reasoning field's content as anchor source' as a primary candidate."

- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — the persistence-and-invocation model. Commits to: hybrid placement-by-scope for `_navig.md`; the LLM-operational-design principle (now N=2 evidence; this inquiry may add N=4 if applied here). The persistence model's recalibration may interact with adaptive-guidance updates across invocations (does a re-invoked routeman re-generate guidance from updated inputs? per the persistence ledger's status evolution?).

- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` — the autonomy register design. Commits to: the autonomy register provides the current meta-loop level; the graduated-autonomy classification gates which types are auto-emitable. The graduated-autonomy classification may interact with adaptive-guidance generation (e.g., at L0, all human-judgment Routes get `expand-on-selection` mode; at L2+, some judgment Routes become auto-emitable with `compact` mode).

- `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` — the input-dependency anchor. Commits to: routeman is a cycle-consumer; depending ≠ being a configuration. The adaptive-guidance mechanism is another cycle-consuming operation; same structural framing applies.

- `cognitive_harness/navigation/references/navigation.md` — canonical /navigation spec. Commits to: route-card structure including Guidance Mode + Guidance Pointers; mode-allocation convention. This inquiry inherits the schema unchanged.

**Each commitment will be re-tested in CONCLUDE's `## Inherited Commitments Re-test` section.**
