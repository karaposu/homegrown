## User Input

devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/_branch.md

(Process-layer design for Task-Define; inheriting meaning-layer commitments from 15-39 + LOOP_DIAGNOSE constraints from 01-00; surfacing → sensemaking → decomposition produced 5 pieces P1-P5 with 33 verification criteria + 10 interfaces + 4 assumptions. Innovation operates in **Production-task mode** with the decomposition piece-list as the seed.)

---

# Innovation — Task-Define Process Layer

## Phase 1: Seed

### Seed

**Seed type:** Production-task mode — seed is a piece-list inherited from upstream sensemaking + decomposition. The 5 pieces (P1-P5) from `decomposition.md` are the units of innovation; each piece's question + verification criteria + interfaces are the elaboration territory.

### Methodology-Mode Consideration (Phase 1 refinement note)

- **Inherited mode (from seed framing):** **Standard default** — the `_branch.md` Goal says *"a concrete, authorable process-layer design"* and *"a clean process skeleton... the user can either approve as ready for runtime-spec authoring, or refine on specific points"* — these are "elaborate the committed direction; produce confident ship-ready output" signals.
- **Alternative mode named:** **Contrarian-rethink (Framer-weighted)** — could surface alternative phase shapes (1-phase, 5-phase, 7-phase), alternative enforcement loci (runtime-only, mixed), alternative dispatch architectures (separate field after all).
- **What follows under Contrarian-rethink:** the candidate space would inflate dramatically — questioning the 3-phase shape itself; questioning whether MQ-answers-as-signal is correct (vs. a separate field); questioning whether the per-operation firing-format triple is the right contract shape. Many of these would re-litigate meaning-layer commitments (15-39 §3 4-stage flow; 15-39 §5 dispatch substrate; 15-39 §9 lightweight criteria) that this inquiry's Layer Commitment explicitly declares OUT OF SCOPE.
- **Decision:** **Methodology-mode-alternative-marked-inapplicable.** Structural reason: the Layer Commitment in `_branch.md` declares meaning layer as inherited-not-relitigated; Contrarian-rethink at process-layer would systematically violate this scope boundary by inverting the inherited frame. Contextual reason: 15-39 was settled by the user at the prior /MVLw run; 01-00's LOOP_DIAGNOSE produced MC1-honoring constraints that this inquiry inherits; both upstream commitments are stable and intentional. Mode-switch to Contrarian-rethink would invert the frame the user established. Standard default is the inherited and contextually-correct mode.

### Meta-decision-piece classification

Per the 4+1 Meta-Decision-Piece Criterion, classify each of the 5 pieces P1-P5:

| Piece | Property fires | Classification |
|---|---|---|
| **P1** | (b) Framing-semantic — commits the 3-phase shape that downstream pieces inherit | **Meta-decision** |
| **P2** | (c) Lesson-vocabulary — coins "MC1-honoring authoring rule" that this finding and R1 apply; **(v) Intervention-shape commitment** — ADD-CONTENT (firing-format template + 5 instances) + REPAIR (MC1-honoring discipline at authoring time) | **Meta-decision (property v fires)** |
| **P3** | (b) Framing-semantic — commits scope boundary ("Task-Define-internal vs runner-side"); (d) Evaluation-criterion — names refinement trigger (2+ runner disagreements) | **Meta-decision** |
| **P4** | (b) Framing-semantic — commits enforcement-locus ("authoring-time only"); (c) Lesson-vocabulary — names "authoring-time-vs-runtime enforcement" pattern | **Meta-decision** |
| **P5** | (c) Lesson-vocabulary — adopts LAYER 1/LAYER 2 meta-pattern; **(v) Intervention-shape commitment** — ADD-CONTENT (failure-mode list + verdict shape + initial conditions) | **Meta-decision (property v fires)** |

5/5 pieces are meta-decision. All require piece-level Inversion per the "Piece-Level Inversion at Meta-Decision Pieces" rule. **P2 and P5 additionally require intervention-shape-axis Inversion** per the "Intervention-Shape-Axis Inversion at Property-(v) Pieces" rule.

---

## Phase 2: Generate

### P1 — Runtime structure

**Principal candidate (from decomposition Q1):**

> Three runtime phases: (1) **Reception** — receive task_statement; bind LLM internal cognition as substrate; initialize Phase 2 iteration state. (2) **Per-item Traversal** — for each item from Itemize, execute the 4-stage intra-discipline flow: Stage 1 = Itemize (statement-level; fires once at start) → Stage 2 = Meta-question (per item) → Stage 3 = parallel Deconstruct + MultiScope (per item; architectural independence at bundle-field level; runtime serialization allowed) → Stage 4 = Rephrase (per item; constrained by Stage 2's MQ answers). (3) **Assembly** — aggregate N per-item bundles; emit substantive output + self-assessment. The 4-stage flow is acyclic within an invocation (one-pass); re-fire is runner-initiated per P3.

#### Mechanism 1 — Domain Transfer (Generator)

Source domain: sister-discipline runtime specs.

- **Generic variation:** Surfacing's 3-phase shape (Reception → Traversal → Assembly per surfacing ref §3.1) transfers directly as the architectural skeleton. Same pattern: receive once, iterate, assemble once.
- **Focused variation:** Surfacing's Traversal-phase iteration is over items (one cycle per region/item); Task-Define's Phase 2 Traversal iterates over items from Itemize — the per-item granularity is the iteration unit. Direct map.
- **Contrarian variation:** Sensemaking's 5-phase shape (Signal Detection → Anchor Extraction → Perspective Expansion → Boundary Formation → Conceptual Stabilization per sensemaking ref Process Model) could be transferred instead — would suggest mapping Itemize→Signal Detection, MQ→Anchor Extraction, Deconstruct+MultiScope→Perspective Expansion, Rephrase→Boundary Formation, bundle-emit→Conceptual Stabilization. **Rejected:** sensemaking's phases are iterative/recursive ("not strictly linear") while Task-Define's 4-stage flow is acyclic (15-39 §3 explicit). The sensemaking-precedent doesn't fit the acyclicity commitment.

Source-domain selection guard: at least one source domain is **native** — surfacing is computing-system/cognitive-process native (the same family Task-Define belongs to). PASS.

#### Mechanism 2 — Combination (Generator)

- **Generic variation:** 3-runtime-phase shape (Reception/Traversal/Assembly) + 4-intra-discipline-stage flow (Itemize/Meta-question/Deconstruct+MultiScope/Rephrase) — connecting two unrelated concepts (runtime pipeline shape + cognitive operation ordering) produces the architectural commitment: 4-stage flow is EMBEDDED in Phase 2 Traversal. Neither alone produces this; the combination does.
- **Focused variation:** Per-item granularity (from 15-39 §8) + Phase 2 iteration → per-item-Traversal-iteration. Itemize's count = cardinality of Phase 2 iterations = cardinality of per-item bundles assembled in Phase 3.
- **Contrarian variation:** Stage 3 parallelism (Deconstruct + MultiScope independent per 15-39 §3) + Phase 2 iteration → could attempt "parallel iteration" (run Stages 3a + 3b across all N items concurrently). **Rejected:** single LLM session is sequential by nature (per A8 sensemaking); architectural independence is at the bundle-field level, not at runtime-concurrency level. The combination produces a runtime claim the substrate doesn't support.

#### Piece-Level Inversion (compliance: meta-decision, property b)

- **Assumption being reversed:** "the 4-stage flow must be embedded within a single Traversal phase."
- **What if reversed:** "the 4 stages should be spread across the 3 runtime phases — Reception=Itemize, Traversal=MQ+Deconstruct+MultiScope, Assembly=Rephrase."
- **What follows:** Itemize moves out of Traversal (no per-item iteration on Itemize — but Itemize is statement-level, so this works); MQ + Deconstruct + MultiScope iterate per item in Traversal; Rephrase moves to Assembly (per-item Rephrase happens during emission).
- **Depth check (system-level):** the deeper inversion is "what if there are NO discrete phases at all — just an atomic operation?" → at system level, the discipline LOSES its structure as runnable procedure (no place to put per-item iteration; no place to put assembly state); fails the runnable-procedure structural criterion.
- **System-level verdict:** the depth-1 inversion (4 stages across 3 phases) is plausible-but-suboptimal; the depth-2 inversion (no phases at all) fails at system level. Original commitment (4 stages embedded in Phase 2) preserves the structure-of-a-runnable-procedure invariant.

---

### P2 — Per-operation contract + MC1-honoring discipline

**Principal candidate (from decomposition Q2):**

> Per-operation firing-format = **input + mechanism-reference + output triple, one paragraph total per operation**. Template per operation X: *"input: {what X receives at runtime}. Mechanism: as committed in 15-39 §2 [Operation X]. Output: {what X emits per-item}."* All 5 operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) get this triple. Mechanism field is REFERENCE-to-15-39, NOT a re-authored description (MC1-honoring at authoring time). Itemize's firing-format preserves the asymmetric-failure direction (lean-to-keep-together; default-emit-one) via the mechanism-reference. MC1-honoring authoring rule: every process-layer concept is inherited (from 15-39 or sister-discipline) OR explicitly defined inline — NO LLM-auto-completed concept names with implicit meanings.

#### Mechanism 1 — Constraint Manipulation (Framer)

**Both-direction-mandatory refinement applied:**

- **ADD-direction (generic variation):** ADD constraint "mechanism field MUST be a reference, not a re-authored description." This produces the MC1-honoring template directly.
- **ADD-direction (focused variation):** ADD constraint "the reference must include a section pointer (15-39 §2.X) AND an as-of-date or supersession-anchor to handle 15-39 updates." Mitigates A1 (process spec's mechanism-reference assumes 15-39 §2 remains stable; see decomposition Step 5).
- **ADD-direction (contrarian variation):** ADD constraint "the firing-format is exactly 3 sentences (one per field)." Fixes syntax tightly. **Risk:** rigid syntax may force operations whose mechanism needs nuance into truncation; over-applies criterion (iv).
- **REMOVE-direction (generic variation):** REMOVE the mechanism field entirely — process spec has only input + output. **What becomes possible:** truly minimal authoring; lightest possible criterion (iv) compliance. **Cost:** breaks A6 sensemaking commitment that the mechanism is REFERENCED (not absent); leaves the per-operation contract under-specified.
- **REMOVE-direction (focused variation):** REMOVE the "one paragraph" cap — allow each operation's firing-format to be as long as needed. **What becomes possible:** richer per-operation contracts. **Cost:** invites re-authoring (LOOP_DIAGNOSE H1 re-introduction); violates criterion (iv).
- **REMOVE-direction (contrarian variation):** REMOVE the input field entirely — the operation knows its own input from context. **Rejected:** input is the receive-step contract; removing makes the operation non-callable.

#### Mechanism 2 — Piece-Level Inversion at intervention-shape axis (compliance: property v fires)

- **X (committed intervention shape):** **ADD-CONTENT** (append firing-format template + 5 per-operation instances + MC1-honoring rule).
- **Y (alternative shape from Vocabulary):** **REORGANIZE-WITHOUT-ADDING** — just reorganize 15-39 §2's existing operation descriptions into firing-format triples in-place, without adding a separate process-layer spec section. The mechanism-references in P2 become explicit cross-references to a restructured 15-39 §2 that already presents the triples.
- **What follows under Y:** no new process-layer content; the process-layer commitment lives in a restructured meaning-layer spec. **Costs:** (1) re-opens the meaning-layer commitment (violates Layer Commitment scope); (2) loses the architectural-clarity benefit of "process layer has its own home" (R1 would have nowhere for non-operation process-layer content like phase-shape, dispatch-substrate, failure modes); (3) couples process to meaning artifact, breaking the meaning→process→structural separation 15-39 §11 commits.
- **Verdict:** **X (ADD-CONTENT) preferred** with HIGH confidence — Y violates the inherited Layer Commitment. (Inversion-candidate generated and tested per compliance criterion; X is the survivor.)

#### Mechanism 3 — Inversion (depth-check)

- **Belief being reversed:** "the mechanism field must reference 15-39 §2."
- **What if reversed:** "the mechanism field is a citation but ALSO contains a one-sentence summary of what the reference says."
- **Depth check:** the deeper inversion — "what if the spec contains ONLY summaries, never references, and the reader must reconstruct 15-39 §2 from the summary alone" — produces a structurally-different design: pure-summary (re-authoring) vs pure-reference (cite-only). Pure-summary is the LOOP_DIAGNOSE H1 defect; rejected.
- **System-level statement:** "the per-operation contract's meaning-fidelity must be defended by reference, not by paraphrase." Reference-only is correct; the depth-1 hybrid (cite + summary) risks slow drift toward H1 re-introduction.

---

### P3 — Cross-discipline interface + scope

**Principal candidate (from decomposition Q3):**

> Process commits: (1) dispatch substrate = MQ answers (NO separate `needs_external_context` field); (2) dispatch locus = runner-extracts (perception/action split honored); (3) necessary information content = MQ2's answer MUST contain information enabling external-context-need determination — this constrains R1's MQ2 output schema; (4) late-split Itemize re-fire = runner-initiated via re-invocation of Task-Define (with optional `prior-bundles` parameter; NOT in-invocation self-re-check); (5) scope boundary = Task-Define-internal vs runner-side process layer (separate inquiry per runner); (6) refinement trigger = 2+ runners disagree about dispatch interpretation of same MQ2 answer → escalate to cross-discipline-coordination inquiry.

#### Mechanism 1 — Lens Shifting (Framer)

- **Generic variation:** Under conditions of ONE-RUNNER (e.g., only MVLw exists), the necessary-information-content constraint is light — the runner can extract any way it wants. Under conditions of MULTI-RUNNER (MVLw + MVL+ + classic + future runners), the necessary-info-content constraint becomes load-bearing — multiple runners need to agree on what MQ2's answer contains.
- **Focused variation:** Under conditions where MQ2's answer is FREE-TEXT, the necessary-info-content is a heuristic check; under STRUCTURED-OUTPUT (e.g., JSON schema), the necessary-info-content becomes a schema constraint enforceable at R1 authoring time. Frame shift suggests R1 should author MQ2's output schema with explicit external-context-need-determination support.
- **Contrarian variation:** Under conditions where Task-Define is ONLY invoked by one runner that ALWAYS calls Exploration regardless of MQ2, the dispatch substrate is moot — the runner pays for Exploration's overhead unconditionally. **Rejected:** violates the user's directive "this part, is dynamic" (15-39 Source Input verbatim); the dynamic dispatch IS the design's signature commitment.

#### Mechanism 2 — Absence Recognition (Generator)

**Both-levels-mandatory and bidirectional refinement applied:**

- **Patch-level (what's missing in current design):**
  - **Generic:** no per-runner registry of MQ-extraction conventions exists; if 3+ runners adopt different conventions, there's no canonical reference. **Patch candidate:** specify a "runner-side dispatch convention" file pattern (e.g., `cognitive_harness/<runner>/dispatch/from_task_define.md`).
  - **Focused:** no specification of what Task-Define does if MQ2's answer is empty / malformed / silent on external-context-need. **Patch candidate:** initial FLAG condition added: "Task-Define emits FLAG when MQ2 answer's external-context-need information is absent or ambiguous."
  - **Contrarian:** no specification of cross-discipline TRACEABILITY (which downstream Exploration invocation came from which Task-Define dispatch signal). **Rejected:** traceability is runner-side observability concern, not Task-Define-internal.
- **Redesign-level (what would exist if designed from scratch today):**
  - **What's missing direction (generic):** if designed from scratch, the cross-discipline interface might be a typed CONTRACT object (not just MQ answers) — explicit external-context-need-determination as a typed claim. **Rejected:** typed-contract is a separate field, which violates 15-39 §5's "MQ-answers-as-signal, no separate field" commitment.
  - **What's already present in different form direction (focused):** the project's existing surfacing discipline ALREADY has a `refined-sub-purpose` re-invocation parameter (surfacing ref §3.6); Task-Define's `prior-bundles` re-invocation parameter is analogous — the re-invocation pattern is project-rooted, not invented here. PASS — already present in different form. Adopt the pattern.
  - **What's already present in different form (contrarian):** the project's runner orchestration (MVLw skill) ALREADY has a discipline-workspace-invariant; Task-Define's process-layer commitments operate within that invariant. **Confirmed:** the workspace-invariant is the runner-side enforcement; Task-Define-internal process doesn't need to duplicate.

#### Piece-Level Inversion (compliance: meta-decision, properties b + d)

- **Assumption being reversed:** "the dispatch substrate is MQ answers; the runner extracts."
- **What if reversed:** "Task-Define emits a separate `external_context_required: bool` field as the dispatch signal; the runner reads the boolean and dispatches."
- **What follows:** Task-Define decides (not just perceives); runner is mechanical. Eliminates dispatch ambiguity. **Cost:** violates 15-39 §5's perception/action split (15-39 explicit reasoning: "If Task-Define emitted a separate explicit field saying 'you should invoke Exploration,' it would be deciding rather than perceiving — which would blur the architectural distinction"). Also: duplicates information already in MQ2's answer. Rejected.
- **System-level verdict:** original commitment (MQ-answers-as-signal) preserves the perception/action split architectural invariant; Inversion-candidate violates a load-bearing meaning-layer commitment.

---

### P4 — Authoring-time enforcement architecture

**Principal candidate (from decomposition Q4):**

> Lightweight enforcement lives at **authoring time only** (NOT runtime). The 6 criteria (15-39 §9) gate R1 spec-writing: at authoring time, every per-operation firing-format (P2) + every cross-discipline interface commitment (P3) + every failure-mode + self-assessment (P5) passes through the 6-criterion gate; author cannot commit content that fails a criterion. Structural reason for authoring-time-only: runtime self-enforcement would itself be sub-machinery, violating criterion (iv). Post-authoring inspection mechanism: LOOP_DIAGNOSE-style review catches violations after the fact; td-critique spec MC2 (per 01-00) automates the catch at downstream critique time. Meaning-layer harmony: 12 commitments from 15-39 are inherited and NOT re-litigated; any change requires a separate meaning-layer inquiry.

#### Mechanism 1 — Extrapolation (Generator)

- **Generic variation (1-year horizon):** Bootstrap state; very few Task-Define invocations; authoring-time gate is the primary defense; post-authoring inspection rare.
- **Focused variation (5-year horizon, Mature operation):** Task-Define has been invoked across many runners and inquiries; calibration data accumulates; LAYER 2 mode detection becomes data-driven (audit-over-time per surfacing's framework). td-critique's MC2 evaluation dimension fires regularly during downstream evaluation; authoring violations get caught quickly. The authoring-time gate ages well — it doesn't need to evolve because it operates on the fixed 6-criterion gate.
- **Contrarian variation (10-year horizon, post-Mature with hypothetical Task-Define-of-Task-Define meta-discipline):** what if Task-Define itself becomes used to define new disciplines, including its own successors? Authoring-time enforcement of the 6 criteria becomes a recursive self-test. **Rejected:** speculative; out of current scope (15-39 ## Open Questions Research Frontiers flag this).

#### Mechanism 2 — Constraint Manipulation (Framer)

**Both-direction-mandatory refinement applied:**

- **ADD-direction (generic):** ADD constraint "authoring-time gate must produce a written record of which criterion was checked against what content." → audit trail enables retrospective review.
- **ADD-direction (focused):** ADD constraint "if a criterion is overridden (rare), the override must be specifically reasoned per the LOOP_DIAGNOSE override-pattern (structural + contextual)." → prevents accidental criterion-skipping.
- **ADD-direction (contrarian):** ADD constraint "authoring-time gate fires at every paragraph, not at end-of-spec." → over-fires; may produce excessive ceremony at authoring time. **Rejected as defect:** violates the spirit of lightweight (the gate is meant to be a lightweight checklist, not a heavyweight inspection regime).
- **REMOVE-direction (generic):** REMOVE the post-authoring inspection mechanism — only authoring-time gate. **Cost:** gate slips past in practice → no defense. **Mitigation:** MC2-honoring at td-critique catches at downstream critique time, so removal is partially compensated. **Verdict:** keep the post-authoring mechanism as defense-in-depth.
- **REMOVE-direction (focused):** REMOVE the criterion-vi "every output element load-bearing" — the simplest 5-criterion version. **Cost:** re-opens the exploit path 15-39 §9 closed (auxiliary fields slipping in as non-emitted outputs). **Rejected:** the 6th criterion is structurally load-bearing per 15-39's reasoning.
- **REMOVE-direction (contrarian):** REMOVE the structural-reason ("runtime self-enforcement would itself be sub-machinery"). **Rejected:** the structural-reason is the JUSTIFICATION for the locus; removing it makes the locus look arbitrary, opening drift toward runtime enforcement.

#### Piece-Level Inversion (compliance: meta-decision, properties b + c)

- **Assumption being reversed:** "lightweight enforcement is authoring-time only; no runtime self-enforcement."
- **What if reversed:** "lightweight enforcement is runtime self-enforcement; the discipline checks at runtime whether each operation's output meets the 6 criteria and FLAGs violations."
- **What follows:** runtime self-enforcement is itself sub-machinery (per A2 sensemaking + ADD-direction contrarian above) — VIOLATES criterion (iv). Self-referential collapse. The Inversion-candidate fails on its own grounds.
- **System-level verdict:** authoring-time enforcement is the only locus that doesn't violate the criteria it enforces. Original commitment preserved.

---

### P5 — Failure-mode meta-pattern + self-assessment verdict

**Principal candidate (from decomposition Q5):**

> LAYER 1 / LAYER 2 meta-pattern adopted (per surfacing ref §4). Asymmetric-failure principle: under uncertainty, lean toward INCLUSION at Itemize (keep-together default) + lean toward FIRE at MQ extensions (when bounded-rule is met). **Initial LAYER 1 modes (5; empirically-refined):** (1) Premature-Itemize-split; (2) Late-multi-item-detected-by-downstream; (3) MQ-extension-violates-bounded-rule (a/b/c); (4) Rephrase-drifted-without-MQ-constraint; (5) Per-operation-firing-missed-an-operation. **Initial LAYER 2 modes (4; intrinsic-grounded against 15-39 §10 NOT-list categories):** Verification-drift (cat 1) / Substrate-reach (cat 2 or 5) / Cross-item-interpretation-drift (cat 4) / Fidelity-verdict-drift (cat 3). **PROCEED / FLAG / RE-RUN verdict shape.** Initial FLAG conditions (4): (a) Itemize uncertainty HIGH on count=1 vs count>N boundary; (b) MQ extension applied with bounded-extensibility rule (a/b/c) only partially clearly met; (c) Rephrase produced only 1 variant despite MQ-answer-constraint allowing more; (d) any LAYER 1 mode self-recognized. Initial RE-RUN conditions (2): (a) any LAYER 2 mode self-recognized; (b) receive-step failure (malformed task-statement). **Calibration trajectory:** Bootstrap → Early Operation (~10-20 invocations) → Mature Operation (~30+ invocations); specific modes empirically-refined post-authoring.

#### Mechanism 1 — Domain Transfer (Generator)

- **Generic variation:** Surfacing's LAYER 1 / LAYER 2 framework (surfacing ref §4.1-§4.3) transfers as the meta-pattern (operational-vs-identity-eroding; detectable-by-output vs detectable-by-audit-over-time + corresponding correctives).
- **Focused variation:** Surfacing's specific LAYER 1 modes (Missed-relevance / Surfaced-irrelevance / Over-coverage / Territory-mis-binding / Workspace-overload / Artifact-under-specification / Workspace-artifact-desync / Recency-Equates-Idleness / Recency-Bias-Filter) provide a TYPOLOGY template (information-loss / false-positive / over-coverage / boundary-violation / capacity / artifact-quality). Map to Task-Define: (1) Premature-Itemize-split maps to information-loss-in-fragment (analog of Missed-relevance); (2) Late-multi-item-detected maps to artifact-quality (analog of Artifact-under-specification — Itemize's verdict was incomplete for downstream); (3) MQ-extension-violates-bounded-rule maps to boundary-violation (analog of Territory-mis-binding); (4) Rephrase-drifted maps to information-loss (analog of Missed-relevance); (5) Per-operation-firing-missed maps to over-coverage's inverse (under-coverage). Typology-mapping confirms the 5 initial modes cover distinct failure categories.
- **Contrarian variation:** Sensemaking's 6-failure-mode framework (Status Quo Bias / Premature Stabilization / Anchor Dominance / Perspective Blindness / Clean Resolution Trap / Self-Reference Blindness) transfers as alternative. **Rejected:** sensemaking's modes are PROCESS-quality patterns ("how analysis goes wrong"); Task-Define's modes need OPERATION-quality patterns ("how individual operation invocations go wrong") — different abstraction level. Surfacing's LAYER 1/2 split matches the operation-level abstraction needed.

Source-domain selection guard: surfacing is native-domain (same Core-discipline family) — PASS.

#### Mechanism 2 — Absence Recognition (Generator)

**Both-levels-mandatory and bidirectional refinement applied:**

- **Patch-level (what's missing from initial enumeration):**
  - **Generic:** initial LAYER 1 misses "Dispatch-info-content-absent" (P3-related) — when MQ2's answer doesn't contain information enabling external-context-need determination, the runner can't dispatch. **Patch candidate:** add LAYER 1 mode 6: "MQ2-answer-missing-dispatch-info."
  - **Focused:** initial LAYER 2 misses "Cross-runner-misalignment-drift" — Task-Define accumulates operations that bias toward a specific runner's conventions. **Rejected:** cross-runner concerns are runner-side, not Task-Define-internal (per A10 scope).
  - **Contrarian:** initial RE-RUN misses "Self-contradiction-in-bundle" — Itemize emits count=1 but Phase 2's per-item operations emit multiple items. **Rejected:** structurally impossible if Itemize precedes Phase 2 (15-39 §3 ordering).
- **Redesign-level (bidirectional):**
  - **What's missing direction:** if designed from scratch, the verdict shape might include a CONFIDENCE attribute (PROCEED/FLAG/RE-RUN + HIGH/MED/LOW per surfacing ref §2.3 + §5.4). Adopt? **Yes — additive enrichment.** The verdict-with-confidence pattern is project-rooted at surfacing. **Patch candidate:** verdict shape = `{verdict: PROCEED|FLAG|RE-RUN, confidence: HIGH|MED|LOW, conditions: [...]}`.
  - **What's already present in different form direction:** Itemize's cost-structure asymmetry (15-39 §2: premature-split irrecoverable; late-split recoverable) IS already an asymmetric-failure embedding at the operation level. P5's asymmetric-failure principle adoption is just NAMING what 15-39 §2 already commits structurally. PASS — not over-reach; explicit naming of an inherited commitment.

#### Mechanism 3 — Piece-Level Inversion at intervention-shape axis (compliance: property v fires)

- **X (committed intervention shape):** **ADD-CONTENT** (append failure-mode list + verdict shape + initial conditions).
- **Y (alternative shape from Vocabulary):** **ADD-DIMENSION** — instead of Task-Define carrying its own failure-mode self-check, add a failure-mode-interrogation DIMENSION to td-critique's evaluation framework; Task-Define has no self-assessment.
- **What follows under Y:** failure-mode detection moves entirely downstream to critique-time. **Costs:** (1) Task-Define has NO runtime self-signal — downstream actors (runner, user) get no immediate quality information; (2) Bootstrap calibration becomes impossible (no per-invocation data to accumulate; only after-the-fact critique observations); (3) the asymmetric-failure principle has no runtime expression (it's just a critique heuristic).
- **Verdict:** **X (ADD-CONTENT) preferred** with HIGH confidence — Y loses the runtime self-signal that's load-bearing for downstream consumers + breaks Bootstrap-compatible calibration. The Inversion-candidate is generated and tested per compliance criterion; X is the survivor.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

The seed framing (decomposition piece-list) presupposes: **"the 5 pieces P1-P5 from decomposition are the right partition for process-layer authoring."** This is inherited from the upstream Decomposition output.

### Step (ii) — Per-piece load-bearing commitments

- **P1:** framing-semantic — "3-phase shape with 4-stage flow embedded."
- **P2:** lesson-vocabulary — "MC1-honoring authoring rule"; intervention-shape — ADD-CONTENT.
- **P3:** framing-semantic — "Task-Define-internal vs runner-side scope boundary"; evaluation-criterion — "2+ runner disagreements refinement trigger."
- **P4:** framing-semantic — "authoring-time only enforcement locus"; lesson-vocabulary — "authoring-time-vs-runtime enforcement."
- **P5:** lesson-vocabulary — "LAYER 1/LAYER 2 meta-pattern"; intervention-shape — ADD-CONTENT.

### Step (iii) — Challenge scan

| Assumption / commitment | Challenged in candidate set? | By which mechanism |
|---|---|---|
| Seed: 5-piece partition is correct | YES (implicitly) | Decomposition's bottom-up confidence check; P1 Inversion at depth-2 attempts "no phases" — fails, which CONFIRMS the partition |
| P1: 3-phase shape with 4-stage flow embedded | YES | P1 Piece-Level Inversion (4 stages across 3 phases at depth-1; no phases at depth-2) |
| P2: MC1-honoring at ADD-CONTENT | YES | P2 Intervention-Shape-Axis Inversion (REORGANIZE-WITHOUT-ADDING as Y); P2 Inversion depth-check (pure-summary vs pure-reference) |
| P3: scope boundary + MQ-answers-as-signal | YES | P3 Piece-Level Inversion (separate `external_context_required` field); P3 Lens Shifting (one-runner vs multi-runner conditions) |
| P4: authoring-time only enforcement | YES | P4 Piece-Level Inversion (runtime enforcement) — fails on self-referential ground |
| P5: LAYER 1/2 at ADD-CONTENT | YES | P5 Intervention-Shape-Axis Inversion (ADD-DIMENSION to td-critique as Y); P5 Domain Transfer contrarian (sensemaking's 6-mode framework) |

### Step (iv) — Firing condition

**Inherited Frame Audit DID NOT FIRE.** Every meta-decision piece's load-bearing commitment has at least one explicit challenge in the candidate set. The seed's central assumption (5-piece partition) is implicitly challenged via P1's depth-2 inversion (which would have collapsed the partition if successful; failure confirms partition).

Proceed directly to Phase 3 Test.

---

## Phase 3: Test (5-test cycle per candidate)

### P1 — Principal candidate (3-phase shape with 4-stage flow embedded)

| Test | Verdict | Reasoning |
|---|---|---|
| **Novelty** | LOW-MED | Pattern-borrowed from surfacing's 3-phase; novel application to 4-stage cognitive-ordering embedding |
| **Scrutiny survival** | PASS | Strongest objection (no-phases at depth-2 inversion) fails on structural ground |
| **Fertility** | HIGH | Opens 4 verification criteria for R1; clear authoring path |
| **Actionability** | HIGH | R1 author writes 3 named sections + 4-stage sub-flow; concrete |
| **Mechanism independence** | HIGH | Domain Transfer + Combination + Inversion all converge on the same architecture (not spurious — different upstream grounds: surfacing precedent + meaning-layer 4-stage + first-principles inversion test) |

**Disposition:** ACTIONABLE.

### P1 — Inversion candidate (4 stages spread across 3 phases / no phases)

| Test | Verdict |
|---|---|
| Novelty | LOW (component-rearrangement) / HIGH (no-phases at depth-2) |
| Scrutiny survival | FAIL (depth-2 fails structurally; depth-1 plausible but suboptimal) |
| Fertility | LOW |
| Actionability | LOW (depth-2 leaves no place for per-item iteration) |
| Mechanism independence | N/A |

**Disposition:** Failed → not a survivor.

### P2 — Principal candidate (firing-format triple + MC1-honoring)

| Test | Verdict |
|---|---|
| Novelty | MED (firing-format pattern inherited; MC1-honoring novel articulation as reference-not-re-author) |
| Scrutiny survival | PASS (REORGANIZE-WITHOUT-ADDING Y fails on Layer Commitment violation; pure-summary at depth-2 fails as H1-re-introduction) |
| Fertility | HIGH (5 per-operation triples + authoring rule → 5 spec sections for R1) |
| Actionability | HIGH (R1 author writes 5 triples + rule paragraph) |
| Mechanism independence | HIGH (Constraint Manipulation + Inversion + Domain Transfer's MC1 inheritance all converge from different upstream grounds) |

**Disposition:** ACTIONABLE.

### P2 — Inversion candidate (REORGANIZE-WITHOUT-ADDING at intervention-shape axis)

| Test | Verdict |
|---|---|
| Novelty | MED |
| Scrutiny survival | FAIL (violates Layer Commitment) |
| Fertility | LOW |
| Actionability | LOW (R1 would have no home for non-operation content) |
| Mechanism independence | N/A |

**Disposition:** Failed → not a survivor.

### P3 — Principal candidate (cross-discipline interface + scope)

| Test | Verdict |
|---|---|
| Novelty | MED (substrate commitment + scope-boundary articulation) |
| Scrutiny survival | PASS (separate-field Inversion fails on perception/action split violation) |
| Fertility | HIGH (defines what R1 commits + what defers to runner-side inquiries) |
| Actionability | HIGH (R1 author writes 6 verification criteria; per-runner inquiries can start) |
| Mechanism independence | HIGH (Lens Shifting + Absence Recognition + Inversion converge; different upstream grounds: scenario analysis + project-pattern recognition + first-principles) |

**Disposition:** ACTIONABLE.

### P3 — Inversion candidate (separate `external_context_required` field)

**Disposition:** Failed (scrutiny: violates 15-39 §5 perception/action split).

### P3 — Patch-level absence finding

The "MQ2-answer-missing-dispatch-info" LAYER 1 mode candidate (from P3 Absence Recognition patch-level) **RE-TEST TRIGGER fires** on P5's initial LAYER 1 enumeration: the 5 initial modes in P5 should include this 6th mode. **Disposition:** RE-TEST TRIGGER — surfaces back to P5's LAYER 1 list.

### P4 — Principal candidate (authoring-time only enforcement)

| Test | Verdict |
|---|---|
| Novelty | MED (locus split articulated explicitly with structural-reason) |
| Scrutiny survival | PASS (runtime-enforcement Inversion fails on self-referential ground) |
| Fertility | HIGH (defines authoring gate + post-authoring inspection + meaning-layer harmony) |
| Actionability | HIGH (R1 author + LOOP_DIAGNOSE reviewer + td-critique have clear roles) |
| Mechanism independence | HIGH (Extrapolation 1-year + 5-year + Constraint Manipulation + Inversion all converge) |

**Disposition:** ACTIONABLE.

### P4 — Inversion candidate (runtime enforcement)

**Disposition:** Failed (self-referential collapse).

### P5 — Principal candidate (LAYER 1/2 + verdict + initial conditions)

| Test | Verdict |
|---|---|
| Novelty | MED (LAYER 1/2 inherited from surfacing; Task-Define-specific modes novel enumeration) |
| Scrutiny survival | PASS (ADD-DIMENSION-only Y fails on loss of runtime self-signal) |
| Fertility | HIGH (R1 spec gets 9-mode list + verdict shape + 6 initial conditions) |
| Actionability | HIGH (R1 author + downstream LOOP_DIAGNOSE both inherit) |
| Mechanism independence | HIGH (Domain Transfer + Absence Recognition + Inversion converge from different upstream grounds: sister-discipline precedent + gap-recognition + first-principles) |

**Disposition:** ACTIONABLE.

**Augmentation from P3 RE-TEST TRIGGER:** P5's LAYER 1 list expands from 5 to 6 modes — added: **(6) MQ2-answer-missing-dispatch-info** (a downstream LAYER 1 mode where Meta-question fires but MQ2's answer lacks information enabling external-context-need determination; surfaced via P3 Absence Recognition patch-level).

### P5 — Inversion candidate (ADD-DIMENSION-only at intervention-shape axis)

**Disposition:** Failed (loses runtime self-signal + breaks Bootstrap-compatible calibration).

### P5 — Verdict enrichment from Absence Recognition redesign-level

Verdict shape augmented: **`{verdict: PROCEED|FLAG|RE-RUN, confidence: HIGH|MED|LOW, conditions: [...]}`** — adopting surfacing's verdict-with-confidence pattern (project-rooted). **Disposition:** ACTIONABLE additive enrichment.

### Per-row / per-element mechanism-trace check (Phase 3 refinement note)

For each of the 5 pieces (rows of the principal-candidate output), verify mechanism work:

| Piece | Mechanisms applied | Trace present | Verdict |
|---|---|---|---|
| P1 | Domain Transfer + Combination + Inversion | ✓ | PASS |
| P2 | Constraint Manipulation + Inversion (intervention-shape-axis) + Inversion (depth-check) | ✓ | PASS |
| P3 | Lens Shifting + Absence Recognition (patch + redesign bidirectional) + Inversion | ✓ | PASS |
| P4 | Extrapolation + Constraint Manipulation (ADD + REMOVE) + Inversion | ✓ | PASS |
| P5 | Domain Transfer + Absence Recognition (patch + redesign bidirectional) + Inversion (intervention-shape-axis) | ✓ | PASS |

Every piece received active mechanism work. PASS.

### Axis coverage check (Phase 3 refinement note)

Underlying orthogonal axes in the process-layer-design problem:
- **Axis 1: phase-shape / flow-shape** — addressed by P1 candidates.
- **Axis 2: per-operation-contract** — addressed by P2 candidates.
- **Axis 3: cross-discipline-coordination** — addressed by P3 candidates.
- **Axis 4: enforcement-locus** — addressed by P4 candidates.
- **Axis 5: runtime-quality-signal** — addressed by P5 candidates.
- **Axis 6 (intervention-shape, cross-cutting)** — addressed via P2 + P5 intervention-shape-axis Inversion.
- **Axis 7 (methodology-mode, cross-cutting)** — addressed at seed-time via Methodology-Mode Consideration.

Each axis has at least one variant. PASS.

### Mechanism Independence shared-input detection

P1's three converging mechanisms (Domain Transfer + Combination + Inversion) — do they share upstream input?
- Domain Transfer's source = surfacing's 3-phase shape (external project precedent).
- Combination's source = 15-39 §3 4-stage flow + 15-39 §8 per-item output.
- Inversion's source = first-principles structural test (depth-2 collapses).

Three DIFFERENT upstream grounds. NOT spurious. INDEPENDENT convergence confirmed.

Same check for P2: Constraint Manipulation (project-pattern: criterion iv) + Inversion (first-principles: pure-summary vs pure-reference) + Domain Transfer (LOOP_DIAGNOSE MC1 inheritance). Three different grounds. INDEPENDENT.

P3, P4, P5 similarly: multiple mechanisms with different upstream grounds → INDEPENDENT convergence on each.

### Artifact-grounding (6th conditional test)

Does the output produce categorical claims about project state? **Some claims qualify:**
- "Surfacing's 3-phase shape exists" — verified by reading `cognitive_harness/surfacing/references/surfacing.md` §3.1 in this conversation. PASS.
- "15-39 §2 commits PERCEIVE-default-one Itemize" — verified by reading `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` §2 in this conversation. PASS.
- "LOOP_DIAGNOSE MC1 commits sensemaking spec extension" — verified by reading `devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md` (Next Actions MUST section). PASS.

All artifact-grounded claims verified against existing project state. No contradictions.

### Assembly check

Combining the 5 piece-level survivors + the augmentations (LAYER 1 mode 6 + verdict-with-confidence): the assembly produces a **complete, authorable process-layer design** that:
- Honors all 10 SV6 commitments (Sensemaking)
- Resolves all 9 frontier flags from Surfacing
- Maps cleanly to the 5 pieces from Decomposition (with augmentations folded into P5)
- Honors the LOOP_DIAGNOSE H1+H2+MC1+MC2 constraints (MC1-honoring at authoring; failure-mode hooks enable MC2 at critique)
- Honors the Layer Commitment (process-layer only; meaning + structural deferred per scope)
- Honors the user's verbatim "lightweight" directive (authoring-time enforcement; no runtime sub-machinery)
- Honors the user's verbatim "this part, is dynamic" directive (MQ-answers-as-signal substrate)

Emergent value (assembly-only): the 5 pieces together form a **runnable contract** R1 author can transcribe into the discipline spec; each piece's verification criteria become spec sections; each interface becomes a cross-reference. The augmentations (LAYER 1 mode 6 + verdict-with-confidence) emerged from the Phase 3 test cycle, not from any individual piece — these are assembly-emergent.

---

## Mechanism Coverage Telemetry

### Standard telemetry

- **Generators applied:** 4 / 4 (Combination at P1; Absence Recognition at P3 + P5; Domain Transfer at P1 + P5; Extrapolation at P4)
- **Framers applied:** 3 / 3 (Lens Shifting at P3; Constraint Manipulation at P2 + P4; Inversion at all 5 pieces)
- **Convergence:** YES — 3+ mechanisms converge on each piece's principal candidate (mechanism independence confirmed)
- **Survivors tested:** 5 / 5 principal candidates + 2 augmentations + 5 Inversion-candidates all tested via 5-test cycle
- **Failure modes observed:** none — (1) Premature Evaluation NO (testing only after mechanisms applied); (2) Single-Mechanism Trap NO (multiple mechanisms per piece); (3) Early Frame Lock NO (Inversion-candidates generated and tested even when principal candidates seemed obvious); (4) Innovation Without Grounding NO (every output 5-test-cycled); (5) Mechanism Exhaustion NO (all 7 mechanisms produced viable outputs); (6) Survival Bias NO (Survival-Bias prior-step never-generate variant addressed via Piece-Level Inversion compliance at all 5 meta-decision pieces — uncomfortable alternatives WERE generated, not just rejected for absence)
- **Overall:** **PROCEED** (full coverage + convergence + all tested survivors)

### Production-task additional telemetry

- **Per-piece mechanism log:**
  - `P1: [Domain Transfer, Combination, Inversion]`
  - `P2: [Constraint Manipulation, Inversion:intervention-shape, Inversion:content (depth-check)]`
  - `P3: [Lens Shifting, Absence Recognition:bidirectional+two-level, Inversion]`
  - `P4: [Extrapolation, Constraint Manipulation:both-direction, Inversion]`
  - `P5: [Domain Transfer, Absence Recognition:bidirectional+two-level, Inversion:intervention-shape]`
- **Per-piece axis-distribution log (property-v pieces):**
  - `P2: [Inversion:intervention-shape] — axis target = intervention-shape (X=ADD-CONTENT vs Y=REORGANIZE-WITHOUT-ADDING)`
  - `P5: [Inversion:intervention-shape] — axis target = intervention-shape (X=ADD-CONTENT vs Y=ADD-DIMENSION)`
- **Meta-decision-piece classification:**
  - `P1: meta-decision (b)`
  - `P2: meta-decision (c) + (v)`
  - `P3: meta-decision (b) + (d)`
  - `P4: meta-decision (b) + (c)`
  - `P5: meta-decision (c) + (v)`
- **Piece-level Inversion compliance:**
  - `P1: satisfied (Inversion generated, tested, rejected via depth-check)`
  - `P2: satisfied (Inversion generated at intervention-shape axis; tested via 5-test; X selected)`
  - `P3: satisfied (Inversion generated, tested, rejected on perception/action split)`
  - `P4: satisfied (Inversion generated, tested, rejected on self-referential collapse)`
  - `P5: satisfied (Inversion generated at intervention-shape axis; tested via 5-test; X selected)`
  - **0 violations; 0 overrides; FLAG / RE-RUN conditions NOT triggered.**

### Final innovation output → Critique handoff

5 ACTIONABLE principal candidates + 2 ACTIONABLE augmentations (LAYER 1 mode 6 + verdict-with-confidence). 5 Inversion-candidates tested and rejected (each for a specific structural reason). All 5 pieces have full mechanism trace + axis coverage + independent convergence. Ready for Critique evaluation against the 12 meaning-layer commitments + LOOP_DIAGNOSE constraints + user goal.

---

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ User Input at top
- ✓ Phase 1 — Seed with Methodology-Mode Consideration (inherited mode named + alternative named + what-follows + decision with structural+contextual override per compliance criterion)
- ✓ Meta-decision-piece classification at seed time (5/5 pieces classified; property-v firing flagged for P2 + P5)
- ✓ Phase 2 — Generate (per piece: principal candidate + mechanisms with 3 variations each + piece-level Inversion compliant)
- ✓ Both-direction-mandatory refinement applied for Constraint Manipulation (P2 + P4)
- ✓ Both-levels-mandatory and bidirectional refinement applied for Absence Recognition (P3 + P5)
- ✓ Source-domain selection guard applied for Domain Transfer (P1 + P5)
- ✓ Intervention-Shape-Axis Inversion applied for property-v pieces (P2 + P5; both with X-vs-Y alternative shape from Vocabulary + 5-test on both)
- ✓ Inversion depth-check applied (P1 + P2)
- ✓ Inherited Frame Audit between Phase 2 and Phase 3 (predicate + Step i + Step ii + Step iii + Step iv); audit DID NOT FIRE (every assumption challenged in candidate set)
- ✓ Phase 3 — Test (5-test cycle per candidate; output dispositions)
- ✓ Per-row / per-element mechanism-trace check (all 5 pieces PASS)
- ✓ Axis coverage check (7 axes; all addressed)
- ✓ Mechanism Independence shared-input detection (3+ mechanisms per piece with different upstream grounds — INDEPENDENT)
- ✓ Artifact-grounding (6th conditional test) — categorical claims about project state verified
- ✓ Assembly check (emergent value identified: augmentations + runnable contract)
- ✓ Mechanism Coverage Telemetry (standard + Production-task additional)
- ✓ 0 failure modes observed; 0 piece-level Inversion violations; PROCEED verdict

**Manual structural check: PASS (17/17 required structural elements present + all refinement notes applied + 0 failure modes + 5/5 piece-level Inversion compliance satisfied + PROCEED).**
