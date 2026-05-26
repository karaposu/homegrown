# Critique: Meta-loop autonomy ladder and open design questions

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/_branch.md`

> **Question:** How should the meta-loop be designed across an autonomy ladder (L0 → L_N), with the user anchoring L0 and L1, and what are the answers (or design options) for its three currently-unresolved parameters: (a) how many loops per session, (b) how the loops are chained, (c) which movement directions can be taken?

The user is operating at L0; the proposal must enable them to identify their position, what graduates next, what evidence is required, and committed values for the three open parameters.

---

## Phase 0 — Dimension Construction

### Sensemaking-derived constraints, principles, and meaning-nodes (per `sensemaking.md`)

- **Constraints (C1–C7):** Navigator-always-isolated; multi-head ≥3 chains gate; automated selector ≥10 maps gate; meaningful-traversal substrate not yet operational; state-in-files; sequential ≈3 / multi-head N+2 sessions; user-anchored L0+L1.
- **Foundational Principles (P1–P4):** role-allocation = unit of autonomy; bounded meaningful traversal = coverage target; failure modes are level-shaped; V1-buildability at low levels + design clarity at high levels.
- **Meaning-Nodes (M1–M5):** autonomy as role-graduation; multi-axial ladder with summary levels; composition over independent ladders; level-stratified parameters; movement vocabulary is universal, subset reliability is level-dependent.

### Evaluation Dimensions (extracted)

| # | Dimension | Source | Weight |
|---|---|---|---|
| D1 | **Correctness** — does the proposal answer the stated question (ladder + 3 open parameters + gates + failure modes)? | Sensemaking M1+M5 | HIGH |
| D2 | **Source-document fidelity** — does the proposal match what 2026-05-10 and 2026-04-27 findings actually say (no fabrication)? | Sensemaking C1, C2, C3 | HIGH |
| D3 | **User-anchor preservation** — does the proposal preserve user's L0 and L1 anchors? | Sensemaking C7 | HIGH |
| D4 | **Coherence** — does the proposal fit with the project's other architecture (MVL+, Navigation, Reflect, Materialization)? | Sensemaking M3 | HIGH |
| D5 | **Specification operability** — for runtime-determined behaviors (gates, heuristics, MERGE), is the determination mechanism specified, not just named? | Sensemaking C4 + Decomposition determination-mechanism check | HIGH |
| D6 | **Robustness** — does each level's design counter its dominant failure mode? | Sensemaking P3 | HIGH |
| D7 | **Completeness** — does the proposal cover the user's full question (ladder + all 3 open parameters + relationships to prior findings)? | Sensemaking K1, K5 | MEDIUM-HIGH |
| D8 | **Feasibility** — at minimum, is L1 buildable today; at max, are L4–L5 designed honestly even if unbuildable? | Sensemaking P4 | MEDIUM |
| D9 | **Evidence-gate honesty** — does the proposal respect the documented gates (≥10 maps, ≥3 chains) without inventing override criteria? | Sensemaking C2+C3 | HIGH |
| D10 | **Elegance / non-bloat** — is the proposal the simplest sufficient answer, or has it added axes/levels for completeness theatre? | Default | LOW-MEDIUM |

### Project-specific risk dimension check

Per the references doc requirement: when candidates involve project artifacts/operations/state, dimensions must include project-specific risk axes.

This proposal involves: ladder spec, runner state schemas, gate criteria, heuristic specs, MERGE protocol. Project-specific risk axes:
- **Specification operability (D5)** — covers runtime-determination axis.
- **Source-document fidelity (D2)** — covers the project's "no fabrication, anchor in source documents" risk.
- **Evidence-gate honesty (D9)** — covers the project's "don't invent gates that bypass documented deferral" risk.

Coverage of project-specific risks: present.

### Burden of proof

**HIGH STAKES** — the proposal becomes the operational reference for runner spec design and shapes L1–L5 build-readiness. Burden of proof: defense must demonstrate clear viability for each load-bearing commitment.

---

## Phase 1 — Landscape Construction

### Viable region

A proposal lives in the viable region when:
- Passes D1 (answers all three open parameters + ladder).
- Passes D2 (no fabrication; claims anchored in source docs).
- Passes D3 (L0 + L1 match user anchors).
- Passes D5 on runtime-determined items (heuristics + gates have specified determination mechanism).
- Passes D9 (no override of documented deferral gates).
- Passes D6 (per-level failure mode named + mitigation traced).
- Reasonable on D4 (coherent with MVL+, Navigation, Reflect, Materialization).
- Adequate on D7 (completeness).

### Dead region

A proposal dies when ANY of:
- Fails D2 (fabrication / claims contradict source documents).
- Fails D3 (rewrites L0 or L1 against user anchors).
- Fails D9 (overrides documented gates).
- Hand-waves a runtime-determined behavior (D5 fails — "determined by heuristic" without specifying the heuristic).

### Boundary region

Boundary candidates:
- D5 partial — heuristic specified but not yet validated empirically (placeholder).
- D8 partial — designed but not buildable (acceptable for L4–L5).
- D10 partial — adds an axis or level whose load-bearingness is ambiguous.

### Unexplored

- Whether the ladder's coverage of `enes/desc.md` autonomy indicators is operationally checkable (Innovation 2.3 deferred this).
- Whether multi-user / collaborative meta-loop variants exist (Innovation 4.2 flagged as research frontier).

---

## Phase 2 — Adversarial Evaluation

I evaluate the 12 load-bearing commitments from `innovation.md`. Critical-load (C1, C5, C6, C7, C8) get full prosecution + defense + collision. Important-load (C2, C3, C4, C9, C10, C11, C12) get medium evaluation.

### C1 — 9-axis frame (Reflect-channel promoted from 8-axis sensemaking model)

**Prosecution.**
- *Killer objection (D10 elegance):* Adding a 9th axis is bloat. Reflect-channel is just a use-case of Memory; Memory + Reflect-axis double-counts. The 8-axis frame from sensemaking already implied Reflect lived inside Memory. Promoting it adds a column without adding distinct decisions per level.
- *User-perspective objection:* The user asked about a few levels and three parameters. They didn't ask for axes. Adding a 9th axis is innovation-overreach.
- *Specification-gap probe:* If Reflect-channel is its own axis, what's the determination mechanism for "Reflect-channel is system-managed at L_N"? Innovation says "system uses Reflect for self-stop at L3" but doesn't say HOW the system uses it (read frequency? trigger conditions? feedback path?).

**Defense.**
- *Core strength (D6 robustness):* The 9-axis frame surfaces a genuine architectural distinction. Memory is "what the system remembers" (read/write of artifacts). Reflect-channel is "what the system DOES with reflection observations" (consume → adapt). These are separable: a system can have Memory at L_N (writes `_meta_state.md`) without having Reflect-channel at L_N (doesn't change behavior based on what it reads). Folding them collapses a distinction that matters for L3+ self-correction.
- *Convergent evidence (D1 correctness):* Innovation surfaced this from 3 mechanisms (Combination 2.2, Absence 5.1, Constraint 4.3) — multi-mechanism convergence is the project's mark of structural insight, not bloat.
- *Coherence (D4):* The Reflect discipline already exists in the project (`homegrown/reflect/`); having it represented in the meta-loop ladder makes the ladder coherent with the existing discipline catalogue.

**Collision.**
- Defense's distinction (Memory vs Reflect-channel) is structurally real. But prosecution's specification-gap is also real — Innovation didn't fully spec HOW Reflect-channel works at L3+. The verdict depends on whether the spec gap is fatal or refinable.
- The spec gap is REFINABLE — Innovation explicitly named Reflect-channel as an axis with per-level positions, and the operational details (read frequency, trigger) can be committed in the runner spec without invalidating the ladder.

**Verdict: SURVIVE with caveat on D5.** The 9-axis promotion is structurally justified by multi-mechanism convergence. The Reflect-channel operational details (HOW the system reads/uses Reflect) need to be committed in the runner spec — flagged as a follow-up but not a kill condition.

---

### C5 — O3 commit: L3 placeholder convergence heuristic

**Specifically:** "stop if last 3 Navigation maps produce zero new direction-types AND Reflect-channel has no unaddressed observations."

**Prosecution.**
- *Killer objection (D5 specification operability):* "Zero new direction-types" requires comparing two Navigation maps to detect whether any new direction-type appeared. The 16-type Navigation taxonomy is fixed, so "new direction-type" means a type that wasn't present in prior maps. But what about new INSTANCES of an existing type (a new specific REFINE direction)? The heuristic doesn't say. Concrete failure case: the system could keep selecting REFINE moves with different specific targets each time, producing "no new TYPES" → premature stop, even though the system is making genuine forward progress.
- *Specification-gap probe:* "Unaddressed Reflect observations" — what makes an observation "unaddressed"? Is it un-archived? Un-tagged? The heuristic assumes Reflect outputs have a tag/state mechanism that isn't yet specified.
- *User-perspective objection:* The user asked "how many loops? how it chains?" — they want a concrete answer. A heuristic that itself contains undefined terms ("new direction-types," "unaddressed") doesn't answer concretely.

**Defense.**
- *Core strength (D8 feasibility):* The heuristic is a PLACEHOLDER explicitly. Innovation labeled it as such because the meaningful-traversal substrate is deferred per `enes/what_is_meaningful_traversal.md`. A placeholder that's better than nothing AND can be validated empirically once L3 ships is the right level of commitment.
- *Coherence (D4):* The heuristic uses signals the project already produces (Navigation maps, Reflect observations) rather than inventing new infrastructure. Pragmatic.
- *Honesty:* Innovation explicitly flagged the heuristic as a placeholder — it's not claiming to solve the meaningful-traversal substrate, just to bridge the gap until that lands.

**Collision.**
- Defense's "placeholder" framing rebuts the killer objection partially — placeholders are allowed to be incomplete. But prosecution's specific failure case (REFINE-with-different-targets producing premature stop) is a real semantic gap, not a depth issue.
- Verdict turns on whether the heuristic, if shipped at L3, would EARLY-STOP usefully or wrongly. The most likely failure mode is wrong early-stop in cases where all moves are REFINE-with-different-targets.

**Verdict: REFINE.** Direction: tighten the heuristic's "new direction-type" criterion to "new direction-type OR new SPECIFIC target within an existing type." Add a fallback: "if budget N reached without early-stop, stop anyway (budget is the floor)." Innovation's L3 default already specifies budget+heuristic hybrid, so the budget floor is present — the REFINE just clarifies the heuristic semantics.

**Constructive output for refinement:**
- Replace: "stop if last 3 Navigation maps produce zero new direction-types"
- With: "stop if last 3 Navigation maps produce zero new direction-types AND zero new specific-targets within any existing type (i.e., the navigator is suggesting only re-runs of past selections)."
- Specify: "unaddressed Reflect observations" = Reflect-channel observations not marked DONE in `_meta_state.md`'s reflect_log section.

---

### C6 — O4 commit: L4 MERGE protocol shape

**Prosecution.**
- *Killer objection (D5 specification operability):* The protocol says Evaluator produces `merge_observer.md` with per-head verdicts and a recommended action (PROMOTE/MERGE/CONTINUE/STOP). But it doesn't say HOW the Evaluator computes "spinning" vs "productive" per head, or HOW the Evaluator computes "merge" recommendation. These are themselves load-bearing decisions deferred to a future spec.
- *Specific failure-case scenario:* Two heads both produce findings with overlapping conclusions but different reasoning paths. Evaluator must decide MERGE vs PROMOTE. The protocol doesn't specify the merge-decision logic.
- *Source-document fidelity (D2) probe:* Source documents say multi-head is deferred until ≥3 chains. They don't yet specify MERGE protocol. Innovation has invented this protocol. Is the invention coherent with deferred source state?

**Defense.**
- *Core strength (D8 feasibility + D7 completeness):* Multi-head is at L4 — deferred. Innovation isn't saying "build this protocol now." It's specifying the protocol SHAPE so L1–L3 work can prepare for it. The shape (Evaluator → merge_observer → Selector commits) is coherent with the project's existing patterns (Navigator → navigation_observer → Selector).
- *Coherence (D4):* The protocol mirrors the existing artifact-mediated cross-session pattern. File-lock proxy via `finding.md` presence is consistent with state-in-files principle (sensemaking C5).
- *Source-doc honesty:* The shape is invented but doesn't fabricate claims about source documents. Innovation explicitly flagged this as a commit (not a citation).

**Collision.**
- Defense rebuts the source-doc fabrication concern — the protocol is presented as a COMMITMENT (innovation's role) not a finding. Prosecution's spec-gap on Evaluator's logic is real but acceptable at L4 design level (build readiness is gated on ≥3 chains; Evaluator's logic gets specified during L4 build, not at this design layer).
- The specific failure-case (overlapping conclusions, different reasoning) is a real concern that the protocol shape should at least acknowledge.

**Verdict: REFINE.** Direction: keep the MERGE protocol shape; add an explicit note that "Evaluator's per-head verdict logic and merge-recommendation logic are deferred to the L4 build spec (post-≥3-chains gate), not committed here." Add the overlapping-conclusions failure case to the L4 dominant-failure-mode list (P6) so it's visible during L4 design.

**Constructive output for refinement:**
- Add to P3 L4 row: "Evaluator's verdict logic and merge-recommendation logic are deferred to the L4 build spec; this commits the SHAPE only (read all heads → produce merge_observer.md → Selector consumes)."
- Add to P6 L4 failure mode: "MERGE-decision ambiguity (overlapping conclusions across heads with different reasoning paths) — mitigation: deferred to L4 build spec after empirical examples."

---

### C7 — Newly committed L2→L3 gate

**Specifically:** "≥5 sequential chains where system Selector's choices ≥80% match what human would have chosen AND meaningful-traversal heuristic placeholder shown to fire correctly in ≥3 cases."

**Prosecution.**
- *Killer objection (D9 evidence-gate honesty):* This gate is invented in this inquiry. Source documents don't mention "≥5 chains" or "80% match." The 80% threshold has no anchor. Inventing gates without empirical basis is exactly the kind of fabrication D9 is designed to catch.
- *Specification-gap probe (D5):* "What human would have chosen" requires a counterfactual judgment — every system Selector decision needs a human to also make a selection so they can be compared. This is operational double-work; what's the concrete protocol for capturing both?
- *User-perspective objection:* The user is asking about levels, not about gates. Inventing complex gates between levels overcomplicates the answer they wanted.

**Defense.**
- *Core strength (D7 completeness):* The L2→L3 gate is structurally needed — without it, the user can't tell when L2 graduates to L3. Sensemaking explicitly identified this as a previously-unspecified gate that needs commitment in the proposal.
- *Source-doc honesty:* Innovation explicitly flagged this as "newly committed" — it's not claimed to be from source docs.
- *Operationally workable:* "Human would have chosen" can be captured at L2 because the user is still Runner; they observe each Selector decision and could mark agreement/disagreement in `_meta_state.md`. This is not double-work; it's the natural overhead of supervised L2.

**Collision.**
- Defense's structural-need argument is strong — the gate gap is real. Prosecution's "fabrication" charge is partially correct: the SPECIFIC threshold (≥5 chains, ≥80% match) is invented without empirical anchor. But the SHAPE of the gate (demonstrate Selector calibration before promoting to autonomous L3) is structurally correct.
- The right verdict: keep the gate's SHAPE but mark the specific thresholds as PLACEHOLDER values pending empirical calibration.

**Verdict: REFINE.** Direction: present the gate as "shape committed; thresholds calibrated empirically once L2 ships and produces data." This is honest about what's invented vs. what's structurally defensible.

**Constructive output for refinement:**
- Reword P5 L2→L3 row: "≥N sequential chains (default placeholder N=5) where system Selector's agreement-with-human is high (default placeholder ≥80%); thresholds to be calibrated against actual L2 data once available. AND meaningful-traversal heuristic placeholder fires correctly in ≥M cases (default M=3)."
- Add a note in P5 frontmatter: "Gates marked 'placeholder' have invented thresholds; the shape is structurally needed but the numeric values must be re-calibrated against L_N empirical data before L_N+1 promotion."

---

### C8 — Newly committed L4→L5 gate

**Specifically:** "Meaningful-traversal substrate operationalized (`enes/what_is_meaningful_traversal.md` lands) AND ≥10 multi-head sessions with stable Evaluator outputs."

**Prosecution.**
- *Killer objection (D9 evidence-gate honesty):* Same as C7 — "≥10 multi-head sessions with stable Evaluator" is invented without empirical anchor. What does "stable" mean? Without specification, the gate is unfalsifiable.
- *Specification-gap probe:* "Operationalized" for the meaningful-traversal substrate means... what? Currently the substrate is fuzzy (per `enes/what_is_meaningful_traversal.md` — 5 candidate signals, no formula). The gate requires a future spec to be done; until that future spec exists, the gate is non-evaluable.

**Defense.**
- *Core strength (D7 completeness):* L4→L5 gate is structurally needed (same argument as C7). Without it, L5 is unreachable.
- *Source-doc anchoring:* The "meaningful traversal substrate operationalized" criterion DOES anchor in source — both `meta_loop.md` and `what_is_meaningful_traversal.md` flag this as the prerequisite for stop-condition decisions at L5 type. This part of the gate is source-anchored, not invented.
- *L5 is boundary-level:* By design, L5 is more aspirational than buildable. Strict thresholds are inappropriate.

**Collision.**
- "Meaningful traversal substrate operationalized" is source-anchored; defense wins on this part.
- "≥10 multi-head sessions with stable Evaluator" — invented threshold + invented stability criterion. Prosecution wins on this part.
- Verdict: split the gate. Source-anchored part survives; invented part needs same PLACEHOLDER framing as C7.

**Verdict: REFINE.** Direction: keep "meaningful-traversal substrate operationalized" as the primary gate (source-anchored); mark "≥10 multi-head sessions with stable Evaluator" as PLACEHOLDER pending L4 empirical data.

**Constructive output for refinement:**
- Reword P5 L4→L5 row: "Meaningful-traversal substrate operationalized (per `enes/what_is_meaningful_traversal.md`) AND ≥M multi-head sessions (default placeholder M=10) showing stable Evaluator outputs (stability criterion calibrated empirically once L4 ships)."

---

### C2 — O1 commit: Memory advances alongside graduating role

**Prosecution.**
- *Specific failure case:* What if Selector graduates at L2 but Memory infrastructure isn't ready (e.g., `navigation_memory.md` schema not yet specified)? "Alongside" implies coupling, but the coupling is loose.

**Defense.**
- *Coherence (D4):* The "alongside" rule prevents premature memory advancement (system writes navigation_memory.md before any consumer needs it). Pragmatic.
- *Multi-mechanism support:* The 9-axis framing already commits Memory positions per level; the "alongside" rule is the simplest consistent position.

**Collision.**
- Prosecution's failure case is a coordination concern (schema must exist before promotion); the rule itself is coherent. Mitigation: the L1→L2 gate should require the consumer-side memory schema (e.g., `navigation_memory.md`) to be specified before L2 ships.

**Verdict: SURVIVE with caveat.** The rule is coherent. Add to P5 L1→L2 gate: "navigation_memory.md schema specified."

---

### C3 — O2 commit: Selector L2 / Runner L3 / both system-distinct at L4

**Prosecution.**
- *Source-document fidelity probe (D2):* The 2026-05-10 finding says "N+3 at L4 with explicit Selector role separated from Runner." Innovation's commit aligns with this — but the finding doesn't say WHEN exactly (does L4's first version separate them, or only later L4 work?).

**Defense.**
- *Source-doc anchoring:* "N+3 at L4" is the finding's recorded session count for L4 with separate Selector. Innovation aligns with this.
- *Coherence:* Selector and Runner have different concerns (selection logic vs. orchestration). At multi-head, separating them is structurally clean.

**Verdict: SURVIVE.** Source-anchored, structurally clean.

---

### C4 — O5 commit: L5 cumulative-feedback driven goal-formation

**Prosecution.**
- *Source-document fidelity (D2):* `enes/desc.md`'s consciousness-gradient framing is broader than "cumulative-feedback." Innovation has SELECTED one of three options (system-curiosity, cumulative-feedback, user-set-priors) without strong source anchor for the choice.
- *Specification-gap probe (D5):* "Cumulative-feedback driven" — what's the algorithm? How does the system extract a seed from accumulated feedback?

**Defense.**
- *Honesty:* Innovation explicitly noted that the choice was made among three options with reasoning ("user-set-priors blocks autonomy; pure system-curiosity drifts").
- *Boundary-level acknowledgment:* L5 is explicitly a boundary level handed off to `desc.md`. The choice doesn't need to be operationally complete; it just needs to be the right HANDOFF point.
- *Reflect-channel coherence:* If Reflect-channel is the 9th axis (C1), then cumulative-feedback driven goal-formation is its natural terminal — the ladder consistently uses Reflect signals at higher levels.

**Collision.**
- Defense's coherence argument with C1 is strong: if Reflect-channel is the 9th axis, then cumulative-feedback for L5 is internally consistent.
- Prosecution's spec-gap is real but acceptable at boundary level.

**Verdict: SURVIVE with caveat (boundary).** Mark explicitly as "default selection; alternative goal-formation mechanisms remain open at the `desc.md` handoff."

---

### C9 — L1→L2 gate refinement: ≥10 maps WITH selection-rationale

**Prosecution.**
- *Source-document fidelity (D2):* Source docs say "≥10 Navigation maps with recorded human selections + later outcomes." Innovation adds "+ explicit user selection-rationale." This is a refinement, not contradicting; but is it necessary?
- *Burden of overhead:* Every L1 selection now requires the user to write rationale text. This is meta-work that may slow L1.

**Defense.**
- *Calibration data quality (D6 robustness):* Source-doc gate says "selections + outcomes." Without rationale, the system Selector at L2 can't learn the WHY of past selections — only the WHAT. Rationale is what makes the data calibration-grade vs. just observational.
- *Variation 5.3 from Innovation:* Single-mechanism (Absence) but high-actionability — fixes a real data-quality gap.

**Collision.**
- Defense's "calibration-grade data" argument is strong. Prosecution's overhead concern is real but small (one sentence per selection at L1).

**Verdict: SURVIVE.** Refinement is justified by data-quality argument. The user writing one sentence of rationale per selection is acceptable overhead at L1.

---

### C10 — Operational Design Domain (ODD) per level

**Prosecution.**
- *Elegance (D10):* Adding ODD to every level is an additional column in P1's table. Is it load-bearing or completeness theatre?
- *Specification-gap probe:* The ODDs given in P1 are descriptive sentences, not operational predicates. How does a runner check "we are within the ODD"?

**Defense.**
- *Multi-mechanism convergence:* Innovation surfaced ODD from 3 mechanisms (Lens Shifting 1.1, Domain Transfer 6.1, Constraint Manipulation 4.3). High confidence per project's mark of structural insight.
- *Failure-mode tracing (D6):* Each level's failure mode (P6) is tied to ODD violations (e.g., L2 picks low-value direction = OUT-OF-ODD because Selector wasn't calibrated for that inquiry class). ODD is the precondition for each level's safety.

**Collision.**
- Defense wins on multi-mechanism convergence. Prosecution's spec-gap is real but addressable: at L1–L2, ODD is informally checked by human Runner; at L3+, ODD becomes a system precondition that needs operationalization later.

**Verdict: SURVIVE with caveat.** ODDs at L1–L2 are informal (human checks). ODDs at L3+ need operational predicates by the time those levels ship. Note this in P1.

---

### C11 — Bidirectional progression (human gains judgment as system gains execution)

**Prosecution.**
- *Source-document fidelity (D2):* Source docs don't explicitly state this. Innovation surfaced via Inversion only.
- *Single-mechanism (Inversion):* Reduces confidence per project's "multi-mechanism convergence" mark.

**Defense.**
- *Honesty + framing role:* This is in P7 (the multi-axial honesty footnote), not in load-bearing P1. It's framing, not architecture.
- *Coherence with the project's user-centered design:* The project explicitly frames human-system collaboration; bidirectional progression is consistent with that.

**Collision.**
- Defense argues correctly: this is framing, low-load. Single-mechanism is acceptable for framing.

**Verdict: SURVIVE.** Acceptable as framing in P7.

---

### C12 — Graceful arrest (L2 or L3 arrest is valid)

**Prosecution.**
- *Source-document fidelity (D2):* Source docs don't discuss arrest. Innovation surfaced via Domain Transfer (neoteny) — possibly contrarian.

**Defense.**
- *Multi-mechanism support:* Lens Shifting 1.3 (cost frame) + Domain Transfer 6.3 (graceful arrest) — 2 mechanisms.
- *Honesty:* Acknowledges that L4+ has cost (multi-head complexity); some projects don't need it. Pragmatic.
- *Counter to forcing-function risk:* Without graceful arrest, the ladder reads as "every project should reach L5." That's prescriptive in a way the project doesn't intend.

**Collision.**
- Defense wins on framing role + 2-mechanism support.

**Verdict: SURVIVE.** Acceptable as framing in P7.

---

## Phase 3.5 — Assembly Check

Surviving + refining candidates compose into the proposal: 9-axis ladder (C1) with role-allocation table containing memory-alongside-role (C2), Selector-L2/Runner-L3/both-at-L4 (C3), cumulative-feedback L5 (C4), ODD per level (C10); per-level parameter defaults including refined L3 heuristic (C5 → REFINE); chaining including refined MERGE protocol (C6 → REFINE); evidence gates including L1→L2 with rationale (C9 SURVIVE) and refined L2→L3 + L4→L5 (C7+C8 → REFINE); failure modes per level (P6 SURVIVE); P7 footnote with bidirectional progression (C11) + graceful arrest (C12).

### Assembly emergent property

The whole proposal — when ALL refinements are applied — produces an architecture that:
1. Tells the user **where they are** (L0).
2. Tells them **what's next** (L1, buildable today).
3. Tells them **what data they need** (L1→L2 gate: ≥10 maps with rationale + memory schema spec).
4. Tells them **what graduates and when** (per-level role-allocation table).
5. **Honestly marks** invented thresholds as placeholders (after C7, C8 refinement).
6. **Acknowledges** the multi-axial reality and graceful arrest as a valid path (P7).
7. **Bridges** to `desc.md` at L5 without overstepping into consciousness-gradient territory.

This satisfies the user's stated goal. The assembly is structurally coherent.

### Assembly's adversarial test

**Prosecution.**
- *Coverage gap:* The assembly says nothing about TODAY's transition from L0 to L1 — what ARTIFACTS does the user create at the moment of transition? Is L1 just "start invoking /navigate after each /MVL+"?
- *Source-fidelity (D2) at assembly level:* The assembly invents 9th axis, ODD framing, multiple gates. Cumulatively, is this still source-aligned, or have we drifted from "design that respects source documents" to "ambitious extension"?

**Defense.**
- The assembly explicitly distinguishes source-anchored claims (L1 = V1 from `meta_loop.md` §6; L1→L2 gate ≥10 maps from prior finding; L3→L4 gate ≥3 chains from prior finding; meaningful-traversal substrate as L5 prerequisite) from invented commitments (9th axis, ODD framing, L2→L3 gate thresholds, MERGE protocol shape). After C5/C6/C7/C8 refinement, invented thresholds are marked placeholders.
- L0→L1 transition: Innovation's P1 ODD column at L1 specifies "Navigator-warming context fits in one fresh session" — operational guidance. Plus L1's chaining schema (visited-path list) tells the user what to populate. The transition guidance exists; it might be worth surfacing more visibly, but the assembly doesn't omit it.

**Collision.**
- The L0→L1 transition concrete guidance can be sharpened by adding one explicit sub-section in the finding: "How to start operating at L1 today." This is small.
- Source-fidelity at assembly level: the proposal is honest about invented vs. anchored claims after refinements; the cumulative drift concern is mitigated by the placeholder labeling.

**Assembly verdict: SURVIVE with one additive recommendation.** Add a short "How to transition L0 → L1" sub-section to the finding, summarizing the concrete user-facing change (start invoking Navigator as a separate session after each /MVL+; capture selection-rationale text in `_meta_state.md`; build the visited-path list).

---

## Phase 4 — Coverage + Convergence Assessment

### Accumulator entry

| Iteration | Candidates evaluated | SURVIVE | REFINE | KILL | Notes |
|---|---|---|---|---|---|
| 1 (this iter) | 12 (C1–C12) | 6 (C1, C3, C4, C9, C11, C12) — some with caveats; C2, C10 SURVIVE-with-caveat | 4 (C5, C6, C7, C8) | 0 | All REFINEs are about specification operability of placeholders; refinement direction is concrete in each. |

### Coverage map

| Region | Status | Notes |
|---|---|---|
| Viable region | Mapped | C1, C2, C3, C4, C9, C10, C11, C12 cluster here |
| Boundary region (REFINE-able) | Mapped | C5, C6, C7, C8 — placeholders awaiting empirical calibration |
| Dead region | Mapped (empty) | No KILLs this iteration |
| Unexplored | Two flagged: (a) operational checking of `desc.md` indicators at L5; (b) multi-user / collaborative meta-loop variants. Both are research frontiers per Innovation's deferrals. Not blocking this iteration. |

### Convergence assessment

- At least one SURVIVE with no critical-dimension caveats? **YES** — C3 (O2 commit) is clean SURVIVE.
- New candidates landing in already-mapped regions? **YES** — second-wave evaluations reinforce first-wave results; no new regions emerging.
- Landscape stable? **YES** — boundaries between SURVIVE and REFINE regions are clear; no candidates are oscillating.
- Decreasing rate of new information? **YES** — Innovation's mechanisms have been exhausted; new variations would land in already-mapped territory.

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Wrong dimensions | NO | Phase 0 validated against sensemaking + project-specific risk axes |
| Rubber-stamping | NO | 4 REFINE verdicts; concrete prosecution arguments per candidate |
| Nitpicking | NO | No KILLs on minor issues; weights respected |
| Dimension blindness | Mitigated | Project-specific risk dimensions explicit (D2, D5, D9) |
| False convergence | NO | Convergence criteria all met; clean SURVIVE exists |
| Evaluation drift | N/A | First iteration |
| Self-reference collapse | Partial risk acknowledged | This critique uses MVL+'s own framework to evaluate MVL+'s extension; the 2026-05-10 finding noted the same residual self-reference. External reference points used: source documents (`meta_loop.md`, `towards_cross_run...md`), project's documented gates. Cannot fully eliminate without outside expert review (would be a useful complement but is not blocking). |

---

## Final Deliverable

### (a) Dimensions with weights

| # | Dimension | Weight |
|---|---|---|
| D1 | Correctness | HIGH |
| D2 | Source-document fidelity | HIGH |
| D3 | User-anchor preservation | HIGH |
| D4 | Coherence | HIGH |
| D5 | Specification operability | HIGH |
| D6 | Robustness | HIGH |
| D7 | Completeness | MEDIUM-HIGH |
| D8 | Feasibility | MEDIUM |
| D9 | Evidence-gate honesty | HIGH |
| D10 | Elegance / non-bloat | LOW-MEDIUM |

### (b) Fitness Landscape

- **Viable region:** {C1, C2, C3, C4, C9, C10, C11, C12} — 8 candidates cluster here. Ladder spine + framing + source-anchored gates.
- **Boundary region:** {C5, C6, C7, C8} — 4 placeholder commitments awaiting empirical calibration. Refinable, not dead.
- **Dead region:** empty (no KILLs).
- **Unexplored:** L5 indicators operational checking; multi-user variants (both research frontier).

### (c) Candidate Verdicts

| ID | Verdict | Constructive output |
|---|---|---|
| C1 (9-axis frame) | SURVIVE w/ caveat on D5 | Reflect-channel operational details deferred to runner spec |
| C2 (Memory alongside role) | SURVIVE w/ caveat | L1→L2 gate must require navigation_memory.md schema spec |
| C3 (Selector L2 / Runner L3 / both at L4) | SURVIVE | Clean — source-anchored |
| C4 (L5 cumulative-feedback) | SURVIVE w/ boundary caveat | Mark as default selection; alternatives open at `desc.md` handoff |
| C5 (L3 heuristic placeholder) | REFINE | Tighten "new direction-type" to include "new specific-target"; specify "unaddressed Reflect observations" semantics |
| C6 (L4 MERGE protocol shape) | REFINE | Add note: Evaluator's verdict logic and merge-recommendation logic deferred to L4 build spec; add overlapping-conclusions failure case to P6 |
| C7 (L2→L3 gate) | REFINE | Mark thresholds as PLACEHOLDER; commit shape, defer numbers to empirical L2 data |
| C8 (L4→L5 gate) | REFINE | Split: meaningful-traversal substrate part is source-anchored; "≥10 multi-head sessions" part is PLACEHOLDER |
| C9 (L1→L2 gate adds selection-rationale) | SURVIVE | Justified by data-quality argument |
| C10 (ODD per level) | SURVIVE w/ caveat | ODDs informal at L1–L2; need operational predicates at L3+ |
| C11 (bidirectional progression framing) | SURVIVE | Acceptable as P7 framing |
| C12 (graceful arrest framing) | SURVIVE | Acceptable as P7 framing |
| **Assembly** | SURVIVE w/ recommendation | Add a "How to transition L0 → L1" sub-section to the finding |

### (d) Coverage map

- All 12 load-bearing innovation commitments evaluated.
- 5 dimensions critical-weight, all checked.
- Multi-axis prosecution depth: user-perspective objections raised on C1, C5, C7; specific failure-case scenarios constructed for C5, C6; specification-gap probes on C5, C6, C7, C8 (the placeholder cluster).
- Unexplored regions remain at research-frontier level only; not blocking for this iteration.

### (e) Signal: TERMINATE with ranked survivors

**TERMINATE.** Convergence reached: clean SURVIVE exists (C3); landscape stable; rate of new information decreasing; coverage map shows no large unexplored regions adjacent to viable.

**Ranked survivors:**
1. **C3** (O2 Selector/Runner separation) — clean SURVIVE, source-anchored.
2. **C9** (L1→L2 gate adds rationale) — clean SURVIVE.
3. **C11** (bidirectional progression) — clean SURVIVE in framing role.
4. **C12** (graceful arrest) — clean SURVIVE in framing role.
5. **C1, C2, C4, C10** — SURVIVE with addressable caveats.
6. **C5, C6, C7, C8** — REFINE; concrete refinement direction provided per candidate.
7. **Assembly** — SURVIVE with one additive recommendation (add L0→L1 transition sub-section).

---

## Convergence Telemetry

- **Dimension coverage:** 10/10 dimensions applied, 6 critical-weight + 4 medium/low. Project-specific risk dimensions explicit (D2, D5, D9).
- **Adversarial strength:** STRONG. Prosecution constructed killer objections at multi-axis depth (user-perspective, specific failure case, specification-gap) for critical candidates. No weak prosecutions among C1–C12.
- **Landscape stability:** STABLE. All 12 candidates positioned cleanly; refines have concrete direction; no oscillation.
- **Clean SURVIVE exists:** YES (C3 minimum; plus C9, C11, C12).
- **Failure modes observed:** None blocking. Self-reference partial risk acknowledged; external anchoring used (source documents, documented gates).
- **Overall: PROCEED.** Critique converged. The proposal can be promoted to finding after applying the 4 REFINE-direction modifications + assembly's L0→L1 transition sub-section addition.

---

## Notes for Conclude / next steps

The `finding.md` should:
1. Apply the 4 REFINE directions to the innovation commitments before publishing them as findings:
   - C5 → Tighten L3 heuristic semantics (include "new specific-target" + define "unaddressed").
   - C6 → Add note about deferred Evaluator logic; add overlapping-conclusions failure case.
   - C7 → Mark thresholds as PLACEHOLDER; commit shape only.
   - C8 → Split source-anchored vs. placeholder; mark accordingly.
2. Add a short "How to transition L0 → L1" sub-section per assembly recommendation.
3. Mark caveats explicitly on C1 (Reflect-channel operational details deferred), C2 (memory schema gate), C4 (default selection at boundary), C10 (ODD informal at low levels).
4. Surface research frontiers (L5 indicators operational checking; multi-user variants; new seeds: L6 spec-modification, discontinuity).
5. Print clearly: the user's current position (L0) + immediate next step (L1 buildable today; concrete actions named).
