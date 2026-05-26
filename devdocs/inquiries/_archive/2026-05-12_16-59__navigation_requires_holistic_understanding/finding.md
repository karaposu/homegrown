---
status: active
refines: devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md
related: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md
related: devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md
related: devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md
related: devdocs/inquiries/2026-05-12_12-30__explore_reference_old_vs_new/finding.md
---

# Finding: /navigation requires holistic understanding — adding a Setup sub-phase (B-refined-2)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` (the B-refined `/navigation` factoring finding — referred to below as "the prior factoring finding").

**Revision trigger:** User correction. The user followed up on the prior factoring finding with a structural challenge: "/navigation should comprehend and understand the holistic view and the goal in order to not navigate wrong, but /explore works at the surface level and it is not enough maybe?" The challenge questioned whether the prior factoring finding's specialization framing was structurally sufficient or whether it under-specified an operation /navigation must do beyond what /explore covers.

**What's preserved.** The prior factoring finding's core architectural commitment — `/navigation` is a specialization of `/explore` (a structural inheritance relationship: /navigation inherits /explore's scan-signal-probe mechanics over a specialized territory, the next-move-space) plus three added components (the 16-type labeling vocabulary, adaptive per-route guidance, and a cognitive selection step). The workspace invariant (each discipline runs in its own focused workspace, no runtime cross-discipline invocation), the discipline-runner separation (disciplines describe and decide; runners actuate), and the transclusion-at-spec-time pattern (inherited mechanics are included in the specializing spec, not invoked at runtime) all carry forward unchanged.

**What's changed.** None of the prior commitments is reversed. The four B-refined components (Enumerate, Label, Guide, Select) are unchanged in role.

**What's new.** A preliminary sub-phase, **Setup**, is added before Enumerate — analogous to the `boundary-discovery` sub-phase in `/explore` (described in `homegrown/explore/references/explore.md` §3.3, the preliminary scaffolding sub-phase pattern). The new operation has a project-native name (context-comprehension at navigation depth), a specified depth (descriptive — between /explore's labeling and sense-making's anchor-extraction), an inter-rater-agreement heuristic for the new boundary, and a set of failure modes that guard against drift. The project's depth hierarchy is enriched by one level.

**Migration.** Bounded — five spec changes inside `homegrown/navigation/references/navigation.md`: (1) Setup sub-phase definition, (2) depth heuristic sub-section, (3) four-to-five new failure modes, (4) a depth-hierarchy sub-section, (5) cross-references and a forward-compatibility note. No edits to `/explore`, `/sense-making`, or `/meta-loop` are required. Existing `/navigation` implementations continue to produce correct output without modification — the refinement names what /navigation already does in practice in its current Step 1 ("Read the Cycle's Output").

---

## Question

From `_branch.md`: *Is `/navigation` a specialization of `/explore` over the next-move-space — the prior factoring finding's commitment — or is `/navigation` a separate process that consumes `/explore`'s surface-level direction map AND builds a holistic understanding of the goal and current state, then selects?*

The user's specific claim: `/navigation` must comprehend the holistic view and the goal in order not to navigate wrong. `/explore` by design works at the labeling level (its NOT-list excludes meaning-extraction, mechanism-modeling, partition, novelty, and route-selection). If `/explore`'s surface-level output is insufficient grounding for correct navigation, then `/navigation` cannot be just a specialization — it must do something more.

Goal: name the missing operation (the "holistic understanding" piece), place it operationally inside the discipline structure, reconcile with or refine the prior factoring finding, and leave no critical ambiguity for the next iteration.

---

## Finding Summary

- **The user's challenge points at a real structural gap, but the gap is naming-level, not architecture-level.** The prior factoring finding's four-component model (Enumerate + Label + Guide + Select, with Enumerate as a specialization of /explore) does not make the goal-and-state-comprehension operation visible as a discrete piece. /navigation's existing spec already does this work implicitly in its Step 1 ("Read the Cycle's Output"); the prior factoring finding inherited this implicitness without naming it.

- **The structural framing — specialization, not composition — survives.** The user's compositional sketch ("/explore + holistic-context-builder + select") and the prior factoring finding's specialization framing ("specialization-of-/explore + Label + Guide + Select") produce the same runtime behavior because the workspace invariant (no runtime cross-discipline invocation) and the transclusion-at-spec-time pattern collapse the apparent choice. Both framings include /explore's mechanics in /navigation's spec; the only real question is whether the comprehension operation is named as a discrete piece or absorbed into Step 1.

- **The recommended refinement adds a Setup sub-phase to /navigation.** It runs before Enumerate, mirrors the `boundary-discovery` sub-phase pattern from `/explore`, reads `_branch.md` (the inquiry's Goal field) + SIC-cycle output (C's verdicts, frontier questions, telemetry, scope check) + current state, and produces an internal context model. The context model is internal scaffolding, not a separate Transform — it is consumed by Enumerate, Label, Guide, and Select.

- **The new operation has a depth between /explore's labeling and sense-making's anchor-extraction.** It is descriptive (identifies operative state and goal-target; assesses fit-to-goal at descriptive depth); it does NOT extract perspective-dependent conceptual roles (sense-making's territory) and does NOT build predictive cycle-dynamics models (`/comprehend`'s territory). The depth specification keeps /navigation purity-preserved against its two depth neighbors.

- **The boundary between context-comprehension and anchor-extraction uses an inter-rater-agreement heuristic.** Multiple naive scanners — scanners who have NOT done sense-making's Phase 1+2 (anchor extraction + perspective checking) on this specific inquiry — should produce roughly the same description of operative state and goal. High agreement means context-comprehension (acceptable at navigation depth). Low agreement (defensible alternative framings requiring conceptual models) means anchor-extraction (sense-making's territory). This is the structural analog of the labeling-vs-meaning heuristic in `/explore` (described at `homegrown/explore/references/explore.md` §4.4).

- **The refinement is forward-compatible across the autonomy ladder** (the L0–L4+ autonomy hierarchy in `enes/desc.md`). The Setup sub-phase produces the same context model at all levels; what differs is the consumer — human-mediated reading + validation at L0–L1; system-suggested context model + human spot-check at L2; autonomous selector reads the context model as its input contract at L3+. Naming the operation now is forward-compatibility insurance; leaving it implicit is forward-incompatible (an autonomous selector cannot operate on an unspecified context model).

- **The project's depth hierarchy gains one explicit level.** With this refinement, the project has two disciplines with named depths: `/explore` at labeling depth (D0–D4); `/navigation` at context-comprehension depth. Sense-making at anchor-extraction depth and `/comprehend` at predictive-modeling depth are not yet given explicit Step 0 depth declarations but their depths are referenced. A project-wide depth-hierarchy document is flagged as a research frontier — activated when three or more disciplines have explicitly-named depths.

- **The prior factoring finding is refined, not replaced.** This finding's frontmatter declares `refines: devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md`. The prior factoring finding remains the architectural commitment; this finding adds a preliminary sub-phase and a depth specification on top.

---

## Finding

### Surrounding context

The Homegrown project develops formalized thinking disciplines — `/explore`, `/sense-making`, `/comprehend`, `/decompose`, `/innovate`, `/td-critique`, and `/navigation` — and the runners that orchestrate them (`/MVL`, `/MVL+`, `/meta-loop`, `/staged-explore`; described in `homegrown/`). Each discipline is defined by a spec at `homegrown/<discipline>/references/<discipline>.md`.

Over the past four inquiries (the "/explore-thread"), the `/explore` discipline was rebuilt from scratch. That rebuild produced commitments that have since served as project-wide constraints: the verb-meaning of `/explore` is "purposive open-mode surfacing of a territory"; a per-item content depth ladder (D0–D4) marks how much description each surfaced item carries; the labeling-vs-meaning boundary uses an inter-rater-agreement heuristic among naive scanners. The fifth inquiry (the prior factoring finding) extended these commitments to `/navigation`, concluding that `/navigation` is a specialization of `/explore` over the next-move-space, with three added components (the 16-type labeling vocabulary; adaptive per-route guidance; cognitive selection).

The user followed up with a structural challenge: navigation must comprehend the holistic view and the goal in order not to navigate wrong, but `/explore` works at the surface level only — is the prior factoring finding's framing sufficient?

This finding answers that challenge.

### The structural gap and its placement

The challenge identifies a real operation that /navigation must perform: comprehending the inquiry's goal and current state well enough to enumerate sensible next-moves, assess them, and write meaningful per-route reasoning. Exploration (cycles 1–7 in this inquiry's archived `exploration.md`) confirmed at the operational level that this comprehension exceeds /explore's surface-labeling commitments — it includes goal comprehension, current-state comprehension, relational integration (how state relates to goal), and forward route-fit reasoning (does this candidate route move state toward goal).

Where does this operation live? Exploration cycle 7 enumerated four candidate placements:

(a) **Inside /navigation, absorbed into the Guide component.** Guide already generates per-route reasoning; comprehension could be folded in.

(b) **Upstream from /navigation, provided by sense-making.** A completed sense-making run's output becomes /navigation's input.

(c) **Inside /navigation, as a preliminary Setup sub-phase.** Analogous to `/explore`'s `boundary-discovery` sub-phase (defined at `homegrown/explore/references/explore.md` §3.3) — a preliminary step that produces internal scaffolding, not a separate Transform.

(d) **Not at all — /navigation operates at surface labeling only.** The Guide and Select components fill any gap implicitly.

Sensemaking (in this inquiry's archived `sensemaking.md`) collapsed these four options via the workspace invariant. Option (b) would require runtime cross-discipline invocation, which the workspace invariant forbids — /navigation cannot call /sense-making mid-execution. Option (d) is rejected by the user's own structural intuition: leaving the operation to ad hoc judgment means /navigation may "navigate wrong" when implicit reading flattens the rich SIC-cycle input. Options (a) and (c) both keep the operation inside /navigation; the choice between them is a separation-of-concerns question. Setup as a sub-phase (option c) wins because (i) it keeps comprehension separate from guidance generation (two operations with different inputs and outputs), and (ii) it is precedented in `/explore` (the `boundary-discovery` sub-phase exists in the same structural slot).

### The Setup sub-phase

The Setup sub-phase runs at the start of every `/navigation` invocation, before the four existing components (Enumerate, Label, Guide, Select). Operationally it does five things, all of which `/navigation`'s current spec already implies in its Step 1 ("Read the Cycle's Output"):

1. **Read the Goal.** Open `_branch.md`; identify what success looks like for this inquiry.

2. **Read the SIC-cycle output.** Open `sensemaking.md` (or equivalent for the runner being used) and the other discipline output files; collect C's verdicts (SURVIVE / REFINE / KILL with seeds), frontier questions, telemetry signals, scope-check results, the original question, and any reflection observations.

3. **Read the current state.** Identify what artifacts exist, what blockers are in place, what gates are open or closed.

4. **Build the context model.** Produce an internal description of operative state plus goal-target plus the rough fit between them (how far the state is from the goal; what directions are open; what blockers exist). The description stays descriptive — it identifies things and notes their relationships but does not extract perspective-dependent conceptual roles or build predictive models of how routes will unfold.

5. **Output the context model as internal scaffolding.** It is not saved as a separate Transform (Setup does not produce `setup.md` or anything analogous); it is held in working memory and consumed by Enumerate, Label, Guide, and Select, which already presuppose this material when they write per-route fields.

The Setup sub-phase is conditional on `/navigation` being invoked; it always fires (it is not gated on a flag like `boundary-discovery` is in `/explore`). That difference reflects /navigation's structural commitment: every navigation invocation reads SIC output + goal + state. There is no "navigation without context."

### The depth specification

The Setup operation has a depth: **context-comprehension at navigation depth**. This depth lies between /explore's labeling depth and sense-making's anchor-extraction depth. Three commitments fix it:

- **Above labeling.** /explore's labeling depth (D0–D4 — bare identifier, surface form, functional one-line, structural adjacency, optional relevance verdict; documented at `homegrown/explore/references/explore.md` §2.3) describes individual items. Context-comprehension describes operative state and goal-target — it integrates items into a relational picture. A pure labeling output ("there are 3 SURVIVE verdicts, 1 REFINE verdict, 2 frontier questions") is not yet context-comprehension; the context model adds the integration ("the inquiry has 3 viable candidates concentrated in the same problem region, one needs refinement on the same axis, and the open frontiers are about evaluation depth, not about candidate generation").

- **Below anchor-extraction.** Sense-making's anchor-extraction (described at `homegrown/sense-making/references/sensemaking.md` Phase 1+2) builds a perspective-dependent conceptual model — it extracts constraints, principles, structural points, meaning-nodes, then checks the result from multiple perspectives. Context-comprehension does NOT do this. It does not extract conceptual structure; it does not require multi-perspective checking; it does not produce anchors that other disciplines will consume.

- **Below predictive-modeling.** `/comprehend` builds predictive models of mechanism ("under conditions X, the system will do Y with such-and-such probability"). Context-comprehension stays descriptive — it identifies state and goal and notes fit, but does not predict how routes will unfold.

The project's depth hierarchy now contains four named depths, in order of richness: labeling (`/explore`) → context-comprehension (`/navigation`) → anchor-extraction (`/sense-making`) → predictive-modeling (`/comprehend`). Each depth contains the prior depth's commitments and adds. Other disciplines (`/decompose`, `/innovate`, `/td-critique`) have not had their depths explicitly named; that is a research frontier (see Open Questions).

### The depth heuristic — how to recognize the boundary at runtime

A self-check is needed at the boundary between context-comprehension (acceptable at navigation depth) and anchor-extraction (sense-making's territory). The heuristic is the structural analog of /explore's labeling-vs-meaning heuristic (the inter-rater-agreement test among naive scanners; described at `homegrown/explore/references/explore.md` §4.4).

**Heuristic statement.** Multiple naive scanners — scanners who have NOT done sense-making's Phase 1+2 (anchor extraction + perspective checking) on this specific inquiry — should produce roughly the same description of operative state and goal-target. If they would converge, the description is at context-comprehension depth (acceptable at navigation depth). If they would defensibly produce different framings depending on the conceptual model they assume, the description is at anchor-extraction depth (belongs to sense-making).

**Positive example (context-comprehension depth).** "The SIC cycle survived two SURVIVE verdicts on candidate routes A and B; one KILL on candidate C carried a seed about evaluation conditions. The goal is to identify which candidate route best advances the inquiry's commitment to lowering migration cost. Open frontier: whether candidate A's strength on coherence offsets its weakness on feasibility." Multiple naive scanners would produce this description; no conceptual model is needed to articulate it.

**Negative example (anchor-extraction depth).** "The inquiry's epistemic posture is in a phase transition between exploration and commitment; the candidate set forms a coherence-stability gradient anchored by candidate A's role as the convergence point of three otherwise-divergent intuitions." This description requires a conceptual model (epistemic posture; coherence-stability gradient; convergence-point) that different scanners would not converge on without first doing sense-making's anchor extraction.

**Edge case — domain jargon and contested terminology.** When the context model uses domain-specific terms whose meaning depends on conceptual-structure knowledge, treat the description as context-comprehension at low confidence: the functional reading is acceptable, but a deeper interpretation belongs to sense-making.

**Self-reference note.** The heuristic is a meta-cognitive move — the LLM running /navigation asks itself "would another scanner without a conceptual-structure model produce this?" The corrective for self-reference is external grounding via /explore's existing labeling-vs-meaning heuristic (the same structural pattern, already in use across the project).

### Failure modes

`/navigation`'s spec adds five failure modes guarding against drift related to the new operation:

1. **Context-comprehension drift into anchor-extraction.** Setup starts extracting perspective-dependent anchors instead of producing a descriptive state model. *Recognition:* a re-read by a naive scanner produces a substantially different state description than Setup's. *Prevention:* hold to the inter-rater-agreement heuristic.

2. **Context-comprehension drift into predictive modeling.** Setup starts building predictive cycle-dynamics models ("if route X is taken, the inquiry will reach state Y with probability Z"). *Recognition:* Setup output contains probability claims or mechanism-of-change claims. *Prevention:* stay descriptive; predictive modeling belongs to `/comprehend`.

3. **Implicit-comprehension.** /navigation runs Enumerate / Label / Guide / Select without first running Setup; comprehension is left to ad hoc judgment per component. *Recognition:* per-route WHY fields lack reference to operative state or goal; routes feel disconnected from each other. *Prevention:* enforce Setup as the first operational step of every /navigation invocation. (This is the user's original "navigate wrong" concern formalized as a recognizable failure mode.)

4. **Context-model staleness.** Setup output is reused across iterations without re-running, even though state or goal has shifted. *Recognition:* prior context model and current SIC output diverge. *Prevention:* Setup runs at each /navigation invocation; the context model is not cached.

5. **Context-model flattening.** Setup's output silently collapses internal conflicts in the SIC output (e.g., a SURVIVE on candidate A combined with REFINE conditions on candidate B that overlap with A's survival conditions) into a flat reading. *Recognition:* per-route WHY fields lack reference to the conflict; Guide pointers don't acknowledge mutual tension. *Prevention:* when conflicts exist in the SIC input, the context model represents them explicitly; an "absent-conflict" statement is acceptable only when no conflict was actually present.

### Forward-compatibility across the autonomy ladder

The Setup sub-phase produces the **same** context model at every autonomy level (the L0–L4+ autonomy hierarchy in `enes/desc.md`). What differs across levels is the consumer of that model:

- **L0–L1.** Setup's output is held by the LLM running /navigation; the human reading the produced `navigation.md` mentally validates whether the context model is reasonable; selection is human-mediated.
- **L2.** The system suggests a context model alongside the route map; the human spot-checks it before the selection step.
- **L3+.** Setup's output becomes the autonomous selector's input contract. The selector reads the context model + the labeled-and-guided route map and produces a selection without human intervention.

The same Setup spec, the same depth, the same heuristic, the same failure modes work at all levels. Naming the operation now is forward-compatibility insurance; leaving it implicit was forward-incompatible because an autonomous selector cannot operate on an unspecified model.

### What this means for the prior factoring finding

The prior factoring finding (`devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md`) committed to a four-component `/navigation`: Enumerate (specialization of `/explore`) + Label (16-type taxonomy) + Guide (adaptive guidance) + Select (cognitive selection step). That commitment stands. This finding adds:

- One preliminary sub-phase (Setup), placed before Enumerate.
- One depth specification (context-comprehension at navigation depth).
- One depth heuristic (inter-rater-agreement among naive scanners on operative state and goal).
- Five failure modes (drift modes plus implicit-comprehension and context-model flattening).
- One depth-hierarchy entry (the fourth named depth in the project's emerging hierarchy).

The four B-refined components are unchanged. /meta-loop's spec (the inquiry-orchestration runner described at `homegrown/meta-loop/`) does NOT cascade — Setup is internal to /navigation, and runners do not reach inside disciplines' preliminary sub-phases.

### What this means at the project level

Two disciplines now have explicitly-named depths: `/explore` at labeling depth (D0–D4) and `/navigation` at context-comprehension depth. The pattern — naming a discipline's depth + providing an inter-rater-agreement heuristic at the boundary with the adjacent deeper discipline — is now precedented in two instances. Future inquiries that name other disciplines' depths can reference both instances as project pattern. This is the emergent property of the refinement (identified in critique Phase 3.5): the value of the refinement is not only the one sub-phase added to /navigation, but the second instance of a project-wide pattern.

A project-wide depth-hierarchy document is flagged as a research frontier (see Open Questions / Research Frontiers).

---

## Next Actions

### MUST

- **What:** Adopt the B-refined-2 refinement — edit `homegrown/navigation/references/navigation.md` to add (1) Setup sub-phase definition, (2) depth heuristic sub-section, (3) five failure modes, (4) depth-hierarchy sub-section, (5) forward-compatibility note. The standard variant of each piece (referred to in the inquiry's archived `innovation.md` and `critique.md` as α-STD, β-STD, γ-STD, δ-STD with refinements R1–R4 applied) is the adoption package.
  - **Who:** user (or maintainer authorized to edit `homegrown/`).
  - **Gate:** none — adoption-ready; this finding has no critical-weight user-confirmation gate.
  - **Why:** addresses the structural gap the user identified; preserves the prior factoring finding's architecture; aligns the spec with what /navigation already does in practice; provides forward-compatibility for autonomous selection at L3+; establishes the second instance of the project-wide depth-naming pattern.

### COULD

- **What:** Adopt the larger variant of one or more pieces — the α-RICH spec text (with a worked example showing a Setup invocation), the β-RICH heuristic (with the explicit project-wide depth-boundary-heuristic pattern callout), the γ-RICH failure-mode set (six modes instead of five), the δ-RICH depth-hierarchy form (creating a separate `homegrown/depth_hierarchy.md` document instead of an inline sub-section), or the ε-RICH finding format with extended Open Questions and a worked diff.
  - **Who:** user (specifies which variant per piece).
  - **Gate:** user-preference; OR observed comprehension difficulty with the standard variant in two or more reads.
  - **Why:** richer variants are available when the standard variant is judged too compact for the audience.

- **What:** Adopt the smaller variant of one or more pieces — α-MIN, β-MIN, γ-MIN, δ-MIN, ε-MIN (each defined in the inquiry's `innovation.md`).
  - **Who:** user.
  - **Gate:** user-preference (minimum-change adoption); OR migration friction observed in two or more adoption attempts.
  - **Why:** smaller variants preserve the structural commitments with less spec text.

### DEFERRED

- **What:** Activate the `service-initialization` analogy in the Setup spec text (the M6f variant from `innovation.md`).
  - **Gate:** two or more readers report difficulty understanding Setup's role from the existing spec.
  - **Why (if revived):** the service-initialization analogy is a single-mechanism reader-clarity device.

- **What:** Activate the depth-hierarchy as a project-wide document (the δ-RICH variant).
  - **Gate:** three or more disciplines have explicitly-named depths (current state: two — `/explore` and `/navigation`).
  - **Why (if revived):** a project-wide document reduces duplication when many disciplines reference the hierarchy.

- **All prior /explore-thread deferred items remain active.** Their gates are unchanged.

---

## Reasoning

### Why this refinement over the alternatives

Five alternative framings were generated during innovation and killed during critique. Each was rejected on structural grounds, not on discomfort or preference grounds:

- **No spec edit.** The proposal was to document the user's challenge as a research-frontier note without changing the canonical spec. Killed on dimension D1 (correctness): the structural gap exists and persists if unaddressed; the user's "navigate wrong" concern would remain unmitigated. The proposal trades present-day correctness for migration-cost savings; the trade is not net-positive.

- **Cross-discipline context-comprehension layer.** The proposal was to combine all disciplines' implicit comprehension operations into one unified cross-cutting layer outside the discipline taxonomy. Killed on dimension D3 (workspace-invariant fidelity) and D4 (discipline-purity): over-couples disciplines; loses the per-depth heuristic precision; introduces a layer that no discipline owns.

- **Separate Setup discipline.** The proposal was to introduce an eighth discipline that sits between SIC and /navigation, dedicated to context-comprehension. Killed on dimension D6 (operation-parsimony) and D11 (elegance): the 7-discipline taxonomy is structurally complete; adding an eighth for setup over-decomposes; the operation is a sub-phase, not a discipline.

- **Remove the specialization framing.** The proposal was to re-architect /navigation as a free-standing 5-component discipline with no parent. Killed on dimension D2 (coherence) and D3 (workspace-invariant fidelity): loses the inheritance from /explore; bloats the spec; sensemaking already rejected this on the grounds that workspace invariant + transclusion-at-spec-time make specialization and composition runtime-equivalent (so the rename produces no behavioral change, only conceptual loss).

- **Mini-sense-making inside Setup.** The proposal was to have Setup literally run a miniature sense-making pass (extract anchors from SIC output). Killed on dimension D4 (discipline-purity): violates the depth boundary; the same LLM call cannot simultaneously do navigation-depth and anchor-extraction-depth without losing the distinction.

### Why the recommended refinement survived

Critique evaluated the adoption package (α-STD + β-STD + γ-STD + δ-STD + ε-STD) against 11 dimensions (6 default + 5 project-specific: workspace-invariant fidelity, discipline-purity, operation-parsimony, user-language honor, specification-gap probe). The package passed all four critical-weight dimensions (correctness, coherence, workspace-invariant fidelity, discipline-purity) cleanly. Four high-weight dimensions (completeness, specification-gap probe, robustness) required targeted refinements (R1–R4, listed in the inquiry's archived `critique.md`):

- **R1** added concrete examples to the depth heuristic and a precise definition of "naive scanner" (one who has not done sense-making's Phase 1+2 on this specific inquiry). Addresses the prosecution objection that the heuristic was hand-wavy.

- **R2** replaced the thin forward-compatibility note with an explicit statement of what differs across autonomy levels (the consumer of the context model, not the model itself).

- **R3** added the context-model-flattening failure mode, addressing the edge case where SIC input contains internal conflicts.

- **R4** flagged the unexplored FQ6 region (under-named operations besides context-comprehension — specifically the excluded-vs-blocked distinction and the taxonomy-incompleteness operation) as a research frontier rather than silently dropping it.

The refined package is the standard variant with R1–R4 applied. Larger and smaller variants are preserved as DEFERRED with revival triggers.

### Contradictions reconciled across disciplines

Across the pipeline, three apparent contradictions were resolved:

- **Exploration vs. sensemaking on the framing question.** Exploration enumerated four placement options for the missing comprehension operation; sensemaking collapsed them to one (Setup sub-phase inside /navigation) by applying the workspace invariant. The reconciliation: exploration's four options were exhaustive at the operational level, but the workspace invariant (a project-wide constraint, not a placement-specific one) is what selects among them.

- **The user's "composition" framing vs. the prior factoring finding's "specialization" framing.** Both produce the same runtime behavior under the workspace invariant + transclusion-at-spec-time pattern. The user's framing is correct at the structural/relational level; the prior factoring finding's framing is correct at the architectural-vocabulary level. The reconciliation: "specialization" is the project-coherent term for the relationship; "holistic understanding" is the user-coherent term for the missing operation; both are honored.

- **/navigation's NOT-list excludes meaning-extraction; the refinement adds context-comprehension.** No contradiction: the NOT-list's "meaning-extraction" refers to anchor-extraction at sense-making depth, which is distinct from context-comprehension at navigation depth. The refinement explicitly clarifies this in the NOT-list section of the spec.

---

## Open Questions

### Monitoring

- **Does the context-model-flattening failure mode actually fire?** Recognition signal: per-route WHY fields lack reference to SIC-input conflicts when conflicts existed. *Observable after:* three or more /navigation runs on SIC outputs with internal conflicts.

- **Does the inter-rater-agreement heuristic discriminate at runtime?** Recognition signal: in self-checks, the LLM running /navigation flags items at the boundary; the flagging produces useful actions (re-state-description or delegate-to-sense-making). *Observable after:* five or more /navigation runs with explicit Setup invocations.

- **Does naming the operation actually improve output quality?** Recognition signal: per-route WHY fields and Guide pointers become more goal-anchored after the spec edit lands. *Observable after:* a side-by-side comparison of three /navigation runs pre-edit vs. three post-edit on similar SIC inputs.

### Refinement Triggers

- **Activate the project-wide depth-hierarchy document** (the δ-RICH variant in `innovation.md`) when a third discipline has its depth explicitly named.

- **Activate the γ-RICH failure-mode set** (six modes instead of five) when an additional drift pattern is observed in three or more runs.

- **Activate the service-initialization analogy** in the Setup spec text (the M6f variant) when two or more readers report difficulty understanding Setup's role.

- **Activate a separate inquiry on /navigation's other under-named operations** (the excluded-vs-blocked distinction; the taxonomy-incompleteness operation — both surfaced in this inquiry's exploration cycle 5 but kept out of scope here) when /navigation accumulates three or more confirmed-present-but-under-named operations in practice, OR when /navigation's selection/excluded logic produces user-visible confusion in two or more runs.

### Research Frontiers

- **Project-wide depth-hierarchy document.** A cross-discipline reference that names every discipline's depth + the heuristic at every adjacent boundary. *Path:* not yet known; depends on three or more disciplines having named depths and a writer willing to consolidate.

- **Per-discipline depth specifications for `/sense-making`, `/comprehend`, `/decompose`, `/innovate`, `/td-critique`.** Each may have an under-named depth analogous to /navigation's. *Path:* requires per-discipline inquiry analogous to this one.

- **Cognitive-operation taxonomy across all seven disciplines.** Each discipline characterized along axes (open/closed cognitive mode; descriptive/predictive output type; depth specification; territory type). Carried forward from prior /explore-thread inquiries. *Path:* requires a dedicated taxonomy inquiry.

- **Autonomous-selection mechanism at L3+ that consumes the Setup context model.** What does the autonomous selector actually do with the context model? What heuristics does it use? *Path:* depends on the project reaching L3+ readiness; currently L0–L1.

- **The other under-named operations in /navigation** (excluded-vs-blocked distinction; taxonomy-incompleteness operation) — see Refinement Triggers above for the gate.

### Blocked

- *None.* No identified blocker prevents adoption of B-refined-2 today.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

we were discussing navigation and explore similarity. we had understanding of navigation is specialized explore...


i think there is more to that discussion


it is not quite clear still


navigation some other process which uses the direction map generated by explore maybe? 

explore is clear as what it is, but it is not clear what navigation is with respect to explore. 

lets discuss and highlight all questions and ambiguities , 

for example we know that navigation should comprehend and understand the holistic view and the goal in order to not navigate wrong , but explore works surface level and it is not enough maybe ?
```

</details>
