## User Input

`devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/_branch.md` (priors consumed: surfacing / sensemaking / decomposition / innovation)

---

# Critique — Task-Define Meaning Layer

## Phase 0 — Dimensions (extracted; weighted)

| Dimension | Asks | Weight |
|---|---|---|
| **Self-containment** *(project risk)* | Does any piece's text, if transcribed into Task-Define's spec, name a neighbor discipline / prior arc / design-history in a load-bearing position? | **critical** |
| **NOT-list intrinsic grounding** *(project risk)* | Does every NOT-list entry ground in Task-Define's own character (verb / substrate / granularity), not by reference to neighbors or "what IE had"? | **critical** |
| **Perception/action split** *(project risk)* | Does the design keep Task-Define perceiving and downstream actors deciding/acting — or does any phrasing blur that line? | **critical** |
| **Lightweight stance enforcement** | Could a structural-layer author actually USE the 5 criteria to catch a violation? Are there gaps where heaviness could slip in? | **critical** |
| **User-language alignment** | Does every load-bearing concept name use the user's verbatim choices? | **critical** |
| **Meaning-layer scope discipline** | Does the design commit only meaning-layer content, with structural and process correctly deferred? | **critical** |
| **From-scratch consistency** | Does the design honestly depart from the prior IE arc without silently inheriting commitments? | high |
| **Open-with-extension preservation of lightweight** | Could the MQ extension rule's 3 bullets be exploited to add heavy meta-questions? | high |
| **Coherence with project architecture** | Does Task-Define fit cleanly alongside sibling Core disciplines (surfacing, sense-making, decompose, etc.) without violating its own self-containment? | high |
| **Coverage of 8 observation targets** | Do the 8 pieces collectively cover identity / 5 operations / dynamic MQ role / ordering / dynamic division / inputs / NOT-list / lightweight? | medium |
| **Cross-runner generalization** | Does P6's pipeline-position + conditional dispatch support runners beyond /MVLw without baking-in MVLw specifics? | medium |
| **Recursion fitness** | Could Task-Define elaborate the task "define Task-Define"? Does the design fit when applied to itself? (Self-reference recursion check.) | medium |

**Project-specific risk dimension check** (per Phase 0 refinement): the candidate set involves project artifacts (the proposed Task-Define spec) and operations (the 5 ops + intra-discipline ordering). Project-specific risk dimensions included: **Self-containment** + **NOT-list intrinsic grounding** + **Perception/action split** + **Lightweight stance enforcement**. These are the documented load-bearing project-risk axes (per memory `feedback_disciplines_self_contained` + LOOP_DIAGNOSE MC-A from 11-46 + the user's verbatim "lightweight" directive).

## Phase 1 — Landscape (brief)

- **Viable region:** meaning-layer design that preserves self-containment + intrinsic NOT-list grounding + perception/action split + lightweight + user-language alignment + meaning-layer scope discipline.
- **Dead region:** any text that, if transcribed, would name a neighbor discipline / prior arc as load-bearing; any sub-machinery beyond a paragraph; any reach for external context; any verify-phase output; any output that decides rather than perceives; any NOT-list entry grounded by neighbor-reference.
- **Boundary region:** P6's specific runner naming (MVLw / MVL+) in the pipeline-position text; P9 itself as a piece in the spec (the acknowledgement IS an outbound pointer to design history — the very thing self-containment prohibits); the open-with-extension rule's bullet (a) wording ("about the task" — ambiguous); P3's rationale phrasing ("the user named in the design conversation"); P7's criteria's coverage of auxiliary non-emitted outputs; P8's bad-phrasing-examples (which themselves name neighbor disciplines).
- **Unexplored region:** edge cases of Itemize (statement that's ambiguous between 1-item and N-items) — structural-layer concern, properly deferred; the exact boundary between Deconstruct (parts) and MultiScope (scope variants) — structural-layer concern.

## Phase 2 — Adversarial Evaluation

### 1. Self-containment scan (the critical gate)

- *Prosecution (spec-gap scan):* read every sentence of every authored piece for any phrase like "because IE had X," "because [neighbor] does Y," or any specific-runner/specific-neighbor-discipline name in a load-bearing position.
- *Defense (per piece):*
  - **P0**: "perception/action split" + "self-containment" stated as principles. The self-containment paragraph applies the rule to itself ("this spec contains no outbound pointers to design history, theory folders, or other disciplines"). Meta-correct. ✓
  - **P1**: per-operation mechanism descriptions are intrinsic; no neighbor references. ✓
  - **P3**: the rationale paragraph contains: "a fully-closed 3-question set over-fits to the 2 examples **the user named in the design conversation**." This phrase points outward to this inquiry's process — a kind of meta-reference, not a neighbor-discipline reference, but still violates the self-containment spirit (the discipline's spec shouldn't reference its own design conversation).
  - **P5**: substrate distinction uses analogy ("analogous to stating 'the LLM' as an input"). Not a neighbor reference. ✓
  - **P6**: pipeline position text says "For /MVLw (which runs Su → S → D → I → C), Task-Define runs before Surfacing. For /MVL+ (which runs E → S → D → I → C), Task-Define runs before Exploration." **Names specific runners in load-bearing positions.** A reader transcribing this into the spec would copy the MVLw / MVL+ references verbatim, which would name two specific runners in a meaning-layer commitment.
  - **P7**: 5 criteria pure intrinsic. ✓
  - **P8**: intrinsic-grounding rule paragraph contains: "an entry phrased as 'Task-Define doesn't X because IE had X' or 'Task-Define doesn't X because that's Sense-making's job' is a defect." **Names IE and Sense-making as examples of bad phrasing.** The phrasing is meta-correct (it's saying "this kind of phrasing is bad" rather than using it), but a strict reading still puts neighbor-discipline names in the spec.
  - **P9**: entire piece IS an outbound pointer to design-history (file paths to 8 prior IE-arc inquiries). **Direct violation of memory `feedback_disciplines_self_contained` — "Discipline runtime reference files must not contain outbound pointers to design-history/theory folders."** The supersession acknowledgement, while load-bearing for future readers, doesn't belong IN the discipline's runtime reference file.
- *Collision:*
  - **R-2 (P6 specific-runner naming):** the pipeline-position commitment should be stated **abstractly** as the load-bearing claim; specific runner names belong in a "Worked Examples" appendix (clearly marked as instances). Revise P6's pipeline-position paragraph to: "Task-Define runs PRE-PIPELINE — before the runner's loop disciplines. For any runner with a discipline-loop pipeline, Task-Define runs before that pipeline's first discipline." Move the MVLw/MVL+ examples to a final "Examples (illustrative, not load-bearing)" sub-section that the reader can ignore without losing the contract.
  - **R-4 (P9 entire piece moves out of the spec):** P9's content moves to `docs/discipline_design_history/for_task-define.md` per memory `project_discipline_design_history_location` (D5 from surfacing). The discipline's runtime spec contains NO supersession acknowledgement, NO file paths to prior inquiries, NO IE-arc references. Future readers find the supersession in the design-history file (where it belongs) rather than in the discipline spec.
  - **R-1 (P3 rationale phrasing):** drop "the user named in the design conversation"; replace with intrinsic phrasing: "a fully-closed 3-question set over-fits to a small specific set of canonical examples; a fully-open anything-goes set undermines the constraint-on-Rephrase that makes Meta-question load-bearing."
  - **R-3 (P8 bad-phrasing examples):** replace neighbor-discipline names in the bad-phrasing examples with generic placeholders. Revise to: "an entry phrased as 'Task-Define doesn't X because [prior arc/predecessor] had X' or 'Task-Define doesn't X because that's [neighbor discipline]'s job' is a defect."
- *Verdict:* **SURVIVE on all pieces individually + REFINE (R-1, R-2, R-3) + KILL → REFINE on P9 (move out, don't kill the content — it has a legitimate home elsewhere).**

### 2. NOT-list intrinsic grounding (the second critical gate)

- *Prosecution:* check each of the 5 NOT-list categories at P8 for intrinsic grounding.
- *Defense:*
  - **Category 1 (Verification operations)** — grounded in "Task-Define's verb is EXPAND-TO-DEFINE; fidelity adjudication is a different verb (VERIFY)." Intrinsic ✓
  - **Category 2 (External-context fetching)** — grounded in "Task-Define's substrate is task statement + LLM internal cognition; reaching elsewhere is a different verb (DRAW-FROM-ELSEWHERE)." Intrinsic ✓
  - **Category 3 (Fidelity-verdict emission)** — grounded in "Task-Define's output is SUBSTANTIVE CONTENT; emitting verdicts is a different operation type (adjudication)." Intrinsic ✓
  - **Category 4 (Cross-item interpretation)** — grounded in "Task-Define operates at PER-ITEM granularity; cross-item operations are a different verb at a different granularity." Intrinsic ✓
  - **Category 5 (Ecosystem-knowledge use)** — grounded in "Task-Define's substrate excludes project state; ecosystem-knowledge use is a different verb (READ-PROJECT-STATE)." Intrinsic ✓
- *Collision:* SURVIVE. All 5 categories pass the intrinsic-grounding test.
- *Verdict:* SURVIVE.

### 3. Perception/action split fidelity

- *Prosecution:* find any phrasing where Task-Define acts on its own output (decides whether Exploration runs, spawns sub-inquiries, gates the loop).
- *Defense:*
  - P0 states the split explicitly: Task-Define perceives + emits; downstream acts. ✓
  - P3: "Meta-question answers ARE the signal" — downstream consumers READ them and DECIDE. Task-Define doesn't decide. ✓
  - P5: output is substantive content + per-item, not decision-output. ✓
  - P6: explicit — "downstream consumers — specifically the runner orchestrating the pipeline and (when invoked) the Exploration discipline" — runner is the deciding actor. ✓
  - P7 criterion (iii): "No halt-gate output from the discipline" — confirms Task-Define doesn't gate. ✓
  - P8 category 3: "fidelity-verdict emission" excluded — confirms no verdict-shaped outputs. ✓
- *Collision:* SURVIVE.
- *Verdict:* SURVIVE.

### 4. Lightweight stance enforcement (gap probe)

- *Prosecution (specification-gap probe per refinement note):* could a structural-author add a verify-axis to Deconstruct phrased as part of the operation's direct output (e.g., "Deconstruct produces parts AND a faithfulness-check field"), without the criteria flagging it?
- *Defense:*
  - Criterion (i) "No separate-verdict verify-phase" — phrased around "separate verdict." A faithfulness-status FIELD inside Deconstruct's output isn't a "separate verdict" by strict reading; the criterion's letter might miss it.
  - Criterion (iv) "No sub-machinery within an operation beyond a single paragraph" — would catch a multi-stage internal verifier; might miss a single-field addition.
  - Criterion (iii) "no halt-gate output" — would catch the field if it's used to gate; not if it's auxiliary-non-load-bearing.
  - **Gap surfaced:** if the verify-axis is folded into the output as an auxiliary field (not separately emitted, not used to gate, not multi-stage), the 5 criteria might miss it.
- *Defense response (deeper):* the lightweight stance's SPIRIT is "every output element should be load-bearing for downstream actors." An auxiliary faithfulness-status field that no actor consumes is by definition not lightweight (adds output content without function). The spirit catches what the letter might miss — but only if the spirit is stated.
- *Collision:* SURVIVE — with **R-5: tighten the criteria.** Add a clarifying line OR a 6th criterion:
  - Option A: revise criterion (i) to: "No separate-verdict verify-phase, no auxiliary verification fields, no faithfulness-status outputs — even if not separately emitted and even if not used to gate. Any verification-shaped output is excluded."
  - Option B: add criterion (vi): "Every output element must be load-bearing for at least one downstream actor's decision. Outputs without a named downstream consumer are excluded."
  - Option B is cleaner (positive principle vs negative enumeration) and more durable (catches verification-shaped outputs and any other non-load-bearing additions). Recommended.
- *Verdict:* SURVIVE + REFINE (R-5).

### 5. User-language alignment

- *Prosecution:* find any load-bearing concept name that doesn't match the user's verbatim choices.
- *Defense:* sensemaking A8 verified all concepts (Task-Define, 5 operation names, "lightweight," "dynamic," "from scratch," "use the context info of LLM"); innovation's principal-candidate text uses the user's vocabulary throughout. ✓
- *Collision:* SURVIVE.
- *Verdict:* SURVIVE.

### 6. Meaning-layer scope discipline

- *Prosecution:* does the design bleed into structural or process concerns?
- *Defense:*
  - Structural concerns (output schema field names, NOT-list per-entry wording) are explicitly DEFERRED at P5 + P8.
  - Process concerns (runner dispatch logic, Exploration-trigger timing) are explicitly DEFERRED at P3 + P6.
  - The 5 enforcement criteria at P7 operationalize lightweight (meaning-layer commitment) without specifying which spec section must do what (structural).
  - The 4-stage intra-discipline ordering at P1 is meaning-layer (the order of cognitive operations) not process (the runner's scheduling).
- *Collision:* SURVIVE.
- *Verdict:* SURVIVE.

### 7. From-scratch consistency

- *Prosecution:* does the design silently inherit IE-arc commitments while claiming "from scratch"?
- *Defense:*
  - SV6 lists 13 commitments + 5 enforcement criteria + 5 NOT-list categories + 3 base MQs — each independently derived via sensemaking's 10-ambiguity-collapse work.
  - Project-wide vocabulary (verb-meaning, NOT-list, intrinsic grounding, perception/action split) is shared across all disciplines (surfacing, sense-making, decompose) — not IE-arc specific. Sharing project-wide vocabulary ≠ inheriting IE-arc commitments.
  - No SV6 commitment cites an IE-arc finding as its grounding.
  - The 4 intervention-shape Inversion overrides (P3, P5, P7, P8) each name specific structural reasons grounded in Task-Define's own commitments (not "because IE didn't have this").
- *Collision:* SURVIVE.
- *Verdict:* SURVIVE.

### 8. Open-with-extension preservation of lightweight (exploit probe)

- *Prosecution (failure-case scenario per refinement note):* construct a heavy meta-question that satisfies all 3 extension-rule bullets, to test whether the rules are exploit-resistant.
- *Test case:* "What are all the project-wide commitments, ecosystem dependencies, deprecation states, and stakeholder concerns relevant to this task across time horizons of immediate, short-term, and long-term scope?" — one sentence (bullet c ✓), about the task (bullet a — ambiguous), constrains Rephrase (bullet b — arguably ✓).
- *Defense:* bullet (a) "about the task" can be read as "about the task's structure/framing" OR "about the task's required external state/context." The test case satisfies the latter reading and would slip through.
- *Collision:* SURVIVE — with **R-7: tighten bullet (a).** Revise to:
  - "must be a question about the task's **structure or framing** — what kind of task it is, what scope it operates at, what intent it carries — NOT a question requiring external state-gathering or ecosystem knowledge to answer."
  - This excludes state-gathering meta-questions while preserving the legitimate ones (scope, context-need, intent). Confirms the lightweight-substrate exclusion at the meta-question level.
- *Verdict:* SURVIVE + REFINE (R-7).

### 9. Coherence with project architecture

- *Prosecution:* does Task-Define fit alongside surfacing, sense-making, decompose, etc. without conflict?
- *Defense:*
  - Surfacing draws from a bounded territory; Task-Define operates upstream (before territory is even defined). Distinct operations, no conflict.
  - Sense-making organizes anchors into stabilized model; Task-Define expands task statement into defined task. Distinct operations at distinct granularities (Sense-making = problem-level; Task-Define = task-statement-level).
  - Decompose perceives coupling topology; Task-Define produces the items decompose might later partition. Distinct.
  - Innovate generates novel ideas; Task-Define defines tasks (not generates them). Distinct.
  - Critique evaluates candidates; Task-Define produces framing (not candidates to evaluate). Distinct.
  - Routelister enumerates routes from territory + goal; Task-Define is more granular (operates on the task statement). Adjacent but distinct.
  - All sibling disciplines have intrinsic-grounded NOT-lists and self-contained specs — Task-Define's design follows the same pattern.
- *Collision:* SURVIVE.
- *Verdict:* SURVIVE.

### 10. Coverage of 8 observation targets

- *Prosecution:* are any of the 8 observation targets from `_branch.md` left uncovered?
- *Defense (cross-check):*
  - Target 1 (Identity) → P0 + P1. ✓
  - Target 2 (5 operations) → P1. ✓
  - Target 3 (Dynamic MQ role) → P3. ✓
  - Target 4 (Operation ordering) → P1. ✓
  - Target 5 (Dynamic Task-Define / Exploration division) → P3 + P6. ✓
  - Target 6 (Inputs) → P5. ✓
  - Target 7 (NOT-list) → P8. ✓
  - Target 8 (Lightweight stance) → P7. ✓
- *Collision:* SURVIVE — coverage complete.
- *Verdict:* SURVIVE.

### 11. Cross-runner generalization

- *Prosecution:* does P6 bake-in MVLw / MVL+ specifics that block other runners?
- *Defense:* (after R-2 is applied) the abstract claim is "Task-Define runs pre-pipeline; before the runner's first loop discipline." This is runner-agnostic. The Examples appendix (post-R-2) is illustrative.
- *Collision:* SURVIVE — contingent on R-2 being applied. Without R-2, this dimension would be REFINE (already captured).
- *Verdict:* SURVIVE (with R-2 applied).

### 12. Recursion fitness (self-reference recursion check)

- *Prosecution:* could Task-Define elaborate the task "define Task-Define from scratch at meaning layer"?
- *Defense:* let's apply the 5 operations to this task statement:
  - **Itemize:** the statement is one ask (define a discipline) — yields 1 item.
  - **Meta-question** (MQ1 scope): "concept-level" + "discipline-level" (multi-axis); (MQ2 context-need): "external context required — need to understand the broader project architecture, sibling disciplines, prior arc"; (MQ3 intent): "the user wants a settled meaning-layer model the structural layer can act on."
  - **Deconstruct:** subject (Task-Define discipline) + action (DEFINE at meaning layer from scratch) + deliverable-shape (a stabilized meaning-layer model).
  - **MultiScope:** small (just identity + 5 operations) + big (full SV6: identity + ops + ordering + dynamic-mechanism + I/O + positioning + lightweight + NOT-list + departures).
  - **Rephrase:** (constrained by MQ answers) — angle 1: "settle Task-Define's identity as expand-to-define"; angle 2: "operationalize the lightweight discipline-design pattern."
- *Defense:* the design FITS when applied to itself. MQ2 (context-need) correctly flags external-context as needed → Exploration would run (and did, implicitly, via the prior IE arc context + project memories). The recursion is well-founded.
- *Collision:* SURVIVE.
- *Verdict:* SURVIVE — meta-validation passes.

## Phase 3 — Verdicts

- **SURVIVE (the assembly + 7 of 8 pieces; P9 → relocation):**
  - **P0** contract anchor (clean as-is)
  - **P1** identity + 5 ops + ordering (clean as-is)
  - **P3** MQ canonical set + dynamic division + perception/action split (with R-1 + R-7 applied — drop "the user named in the design conversation"; tighten bullet (a) of extension rule to exclude state-gathering meta-questions)
  - **P5** input + substrate + output shape (clean as-is)
  - **P6** pipeline position + Exploration-conditional (with R-2 applied — abstract pipeline-position commitment; specific runner names moved to "Examples (illustrative, not load-bearing)" appendix)
  - **P7** lightweight + 5 enforcement criteria (with R-5 applied — add criterion (vi) "Every output element must be load-bearing for at least one downstream actor's decision" OR revise criterion (i) to include auxiliary verification fields)
  - **P8** NOT-list + 5 categories (with R-3 applied — replace neighbor-discipline names in bad-phrasing examples with generic placeholders)
- **RELOCATE (P9 — content survives, location changes):**
  - **R-4** — P9's departures-acknowledgement content moves OUT of the discipline runtime reference spec to `docs/discipline_design_history/for_task-define.md` per memory `project_discipline_design_history_location`. The discipline spec contains no supersession acknowledgement, no file paths to prior inquiries, no IE-arc references. This honors the `feedback_disciplines_self_contained` memory's prohibition on outbound design-history pointers in runtime reference files.
- **REFINE (8 authoring-level refinements to apply at CONCLUDE-time):**
  - **R-1** — P3: drop "the user named in the design conversation" from the rationale; replace with intrinsic phrasing ("a small specific set of canonical examples").
  - **R-2** — P6: state the pipeline-position commitment abstractly ("Task-Define runs pre-pipeline; before the runner's first loop discipline"); move MVLw / MVL+ specific references to a final "Examples (illustrative, not load-bearing)" sub-section.
  - **R-3** — P8: replace IE / Sense-making names in the bad-phrasing examples with generic placeholders (`[prior arc/predecessor]` / `[neighbor discipline]`).
  - **R-4** — P9: relocate the entire piece's content from the discipline spec to `docs/discipline_design_history/for_task-define.md`. The discipline spec contains no P9-equivalent section.
  - **R-5** — P7: add a 6th lightweight enforcement criterion (or revise criterion (i)) to cover auxiliary verification fields: "Every output element must be load-bearing for at least one downstream actor's decision; auxiliary fields without a named downstream consumer are excluded — even if not separately emitted as verdicts and not used to gate." Closes the verify-axis-as-auxiliary-field exploit path.
  - **R-7** — P3: tighten extension-rule bullet (a) to "must be a question about the task's structure or framing (kind, scope, intent, granularity) — NOT a question requiring external state-gathering or ecosystem knowledge to answer." Closes the heavy-meta-question exploit path.
- **KILL:** none. The design's core (self-containment + perception/action split + intrinsic NOT-list + lightweight + user-language alignment + meaning-layer scope) all survived.

## Phase 3.5 — Assembly Check

The 8 pieces, with R-1 through R-5 + R-7 applied at CONCLUDE-time and P9 relocated per R-4, compose into a coherent meaning-layer design that:
- preserves self-containment at strict reading (no neighbor-discipline names in load-bearing positions; no design-history outbound pointers; no IE-arc references inside the discipline spec);
- maintains NOT-list intrinsic grounding (5 categories all grounded in Task-Define's verb/substrate/granularity);
- honors perception/action split at every interface;
- enforces lightweight via 5+1 concrete criteria (the +1 closes the auxiliary-fields exploit path);
- aligns with user language (every concept name verified verbatim);
- respects meaning-layer scope discipline (structural and process correctly deferred);
- honestly departs from IE arc without silent inheritance;
- preserves cross-runner generalization (specific runners as examples-not-load-bearing);
- exhibits recursion fitness (the design fits when applied to itself);
- covers all 8 observation targets;
- coheres with sibling-discipline architecture.

Emergent value over individual pieces (preserved from innovation):
- The **journalism 5W+H Domain Transfer analog** makes the design memorable + non-arbitrary at the operation level.
- The **gateway-middleware unifying frame** makes the NOT-list categories non-arbitrary (each exclusion = "business logic the gateway doesn't run").
- The **conditional-gating pattern reuse** (surfacing's §3.2) means the dynamic Task-Define/Exploration division reuses a project-internal structural pattern rather than inventing a new one.

The assembly SURVIVES.

## Phase 4 — Coverage + Convergence Assessment

- All 12 dimensions evaluated (6 critical, 3 high, 3 medium).
- One clean SURVIVE on the assembly with 6 authoring-level REFINEs (R-1, R-2, R-3, R-5, R-7) + 1 relocation (R-4) + 0 KILLs.
- The dead region (any text that names a neighbor discipline / prior arc as load-bearing; any verify-phase output; any output that decides rather than perceives; any reach for external context) is empty of survivors after R-1 through R-7 + R-4.
- **Convergence: TERMINATE.** The question (from-scratch meaning-layer definition of Task-Define) is answered.

## Coverage Map

| Dimension | Coverage | Notes |
|---|---|---|
| Self-containment | **viable** | After R-1, R-2, R-3, R-4 applied — all neighbor-discipline / prior-arc references either removed or relocated |
| NOT-list intrinsic grounding | **viable** | All 5 categories intrinsically grounded; R-3 cleans the meta-example wording |
| Perception/action split | **viable** | Clean throughout |
| Lightweight stance enforcement | **viable** | R-5 closes the auxiliary-fields exploit path |
| User-language alignment | **viable** | All load-bearing concepts user-verbatim |
| Meaning-layer scope discipline | **viable** | Structural + process correctly deferred |
| From-scratch consistency | **viable** | No silent IE-arc inheritance |
| Open-with-extension preservation of lightweight | **viable** | R-7 closes the heavy-meta-question exploit path |
| Coherence with project architecture | **viable** | Fits alongside sibling Core disciplines |
| Coverage of 8 observation targets | **viable** | All 8 targets covered by piece-mapping |
| Cross-runner generalization | **viable** | Contingent on R-2 (abstract pipeline-position commitment) |
| Recursion fitness | **viable** | Design fits when applied to itself |

## Signal

**TERMINATE — clean SURVIVE on the assembly. Six authoring REFINEs (R-1, R-2, R-3, R-5, R-7) + one piece-relocation (R-4) to apply at CONCLUDE-time.** The Task-Define meaning-layer design is ready to be compiled into the finding.

## Convergence Telemetry

- **Dimension coverage:** 12/12 evaluated, including 6 critical project-risk dimensions (self-containment, NOT-list intrinsic grounding, perception/action split, lightweight stance enforcement, user-language alignment, meaning-layer scope discipline).
- **Adversarial strength:** **STRONG** —
  - R-4 caught a load-bearing meta-violation (P9 itself violates self-containment by being an outbound design-history pointer in the runtime reference file).
  - R-2 caught a real cross-runner generalization issue (specific runner naming in load-bearing positions).
  - R-5 caught a real exploit path in the lightweight enforcement (auxiliary verification fields slipping through).
  - R-7 caught a real exploit path in the open-with-extension MQ rule (state-gathering meta-questions slipping through bullet a).
  - R-1, R-3 are smaller authoring-cleanup issues (rationale phrasing; bad-phrasing examples).
  - These are not nitpicks — R-4 and R-5 each prevent a specific structurally-detectable failure at structural-layer authoring time.
- **Landscape stability:** **STABLE** — the assembly verdict (8 SURVIVE; 0 KILL; 6 REFINE + 1 RELOCATE) doesn't change. All REFINEs are wording-level / location-level.
- **Clean SURVIVE exists:** **YES** — the assembly survives all 12 dimensions with R-1..R-7 applied (R-4 is RELOCATE not REFINE; content survives unchanged in a new location).
- **Failure modes observed (per `references/td-critique.md` §7):** **none.**
  - Not wrong-dimensions (project-specific risk dimensions surfaced — the 6 critical ones).
  - Not rubber-stamping (R-2, R-4, R-5, R-7 are real adversarial finds; R-4 is a non-trivial meta-violation).
  - Not nitpicking (no piece KILLed on minor issues; REFINEs target real authoring vulnerabilities or exploit paths).
  - Not dimension-blindness (cross-referenced with sensemaking's 8 perspectives + project memories + LOOP_DIAGNOSE 11-46 lessons).
  - Not false convergence (clean SURVIVE on critical dimensions; assembly check survives; emergent value preserved).
  - Not evaluation drift (dimensions + weights fixed in Phase 0).
  - Not self-reference collapse — this critique tests Task-Define-designed-via-same-paradigm; external grounding via (a) user verbatim choices for every load-bearing concept (verified at sensemaking A8); (b) sibling-discipline pattern matching (surfacing, sense-making, decompose, routelister all follow intrinsic-NOT-list + self-contained patterns; Task-Define matches); (c) project memories (`feedback_disciplines_self_contained` + `project_discipline_design_history_location`) which empirically detect specific violations (R-4 specifically grounded in these memories); (d) LOOP_DIAGNOSE 11-46 finding's MC-A obligation (independently externally-validated diagnostic). The critique's R-4 specifically would be detectable at structural-layer authoring time as an empirical violation of the runtime-reference-file rule.
- **Verdict:** **PROCEED** (apply R-1, R-2, R-3, R-5, R-7 at CONCLUDE-time during finding compilation; flag R-4 as a piece-relocation that the structural-layer author must execute by creating `docs/discipline_design_history/for_task-define.md` instead of authoring P9 into the discipline spec).
