## User Input

`devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — Task-Define Meaning Layer

**Whole being decomposed:** the SV6 stabilized meaning-layer model of Task-Define (13 stabilized commitments + 5 lightweight enforcement criteria + 5 NOT-list categories + 3 base meta-questions + extension rule + 5 operations + 4-stage intra-discipline ordering). The deliverable is a set of conceptual-commitment **pieces** that downstream consumers — primarily the **next inquiry (structural layer authoring Task-Define's spec file)**, secondarily innovation + critique within this run — can act on without re-deciding meaning-layer questions.

**What a "piece" means at meaning layer:** unlike the 15-28 process-layer decomposition where pieces were concrete authorable text-artifacts in specific files, meaning-layer pieces are **load-bearing conceptual commitments** that the structural-layer spec author will translate into spec sections. Each piece is one focused authoring concern with its own verification criteria.

## Step 1 — Coupling Map (perceive topology)

### Elements in the SV6 model

1. Identity / verb-meaning sentence ("expand-to-define")
2. The 5 operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase)
3. Intra-discipline ordering (Itemize → MQ per item → Deconstruct + MultiScope parallel → Rephrase last)
4. Meta-question canonical set (MQ1/MQ2/MQ3) + bounded-extension rule
5. Dynamic Task-Define / Exploration division (signal-via-MQ-answers)
6. Input contract (1 input: task statement)
7. Substrate (LLM internal context, implicit)
8. Output shape (substantive content, per-item)
9. Pipeline position (pre-pipeline; Exploration conditional)
10. Lightweight stance — 5 enforcement criteria
11. NOT-list — intrinsic grounding pattern + 5 exclusion categories
12. Perception/action split (load-bearing principle)
13. Self-containment principle
14. Departures from IE arc (acknowledgement, not load-bearing for spec)

### Coupling perception (which elements move together; which can be separated)

| Pair | Strength | Why |
|---|---|---|
| Identity ↔ 5 operations | **STRONG** | verb-meaning sentence MENTIONS the 5 operations; changing the operation-list changes the sentence |
| 5 operations ↔ Intra-discipline ordering | **STRONG** | the ordering IS a property of the operation-set; inseparable |
| Meta-question canonical set ↔ Dynamic Task-Define/Exploration division | **STRONG** | the signal IS the MQ answers; can't define one without the other |
| Meta-question role ↔ Intra-discipline ordering | **MODERATE** | MQ's first-per-item position is part of ordering, but the canonical-set authoring is separate from the ordering authoring |
| Output shape ↔ 5 operations | **MODERATE** | output is what operations produce; output-schema author needs to know what operations produce, but doesn't need to know HOW operations work internally |
| Input contract ↔ Output shape | **MODERATE** | both shape the I/O surface |
| Pipeline position ↔ Dynamic Task-Define/Exploration division | **MODERATE** | pipeline position is "pre-pipeline"; the Exploration-conditional part depends on the division mechanism |
| Lightweight ↔ NOT-list | **WEAK-MODERATE** | lightweight constrains what's IN; NOT-list explicates what's OUT — different directions of the same underlying logic |
| Perception/action split ↔ Dynamic division | **STRONG** | the split JUSTIFIES the signal-via-answers mechanism (Task-Define perceives, downstream acts) |
| Self-containment ↔ NOT-list grounding | **STRONG** | self-containment is the principle; intrinsic NOT-list grounding is its operationalization |
| Departures from IE arc ↔ everything else | **WEAK** | departures are an explicit note; they don't drive content |

### Clusters observed

- **Cluster X — IDENTITY-AND-OPERATIONS:** {Identity, 5 operations, Intra-discipline ordering, per-item granularity}. Strong internal coupling; loosely coupled to other clusters.
- **Cluster Y — DYNAMIC MECHANISM:** {Meta-question canonical set + extension rule, Dynamic Task-Define/Exploration division, Perception/action split}. Strong internal coupling (the MQ answers ARE the signal; perception/action JUSTIFIES the mechanism).
- **Cluster Z — I/O CONTRACT:** {Input contract, Substrate distinction, Output shape}. Strong internal coupling.
- **Cluster W — POSITIONING:** {Pipeline position, Exploration-conditional dispatch}. Coupled to Cluster Y (via the signal mechanism).
- **Cluster V — CONSTRAINTS:** {Lightweight + 5 enforcement criteria, NOT-list + 5 exclusion categories, Self-containment principle}. Internal coupling moderate; these are all constraints on what the discipline IS/ISN'T.
- **Acknowledgement:** {Departures from IE arc}. Standalone note.

## Step 2 — Detect Boundaries (top-down)

The natural cut points (low-coupling valleys between clusters):

1. **Anchor / shared reference (P0)** — the meaning-layer commitments cited by every piece: verb-meaning sentence + operation names + perception/action split principle + self-containment principle. Not a piece itself; it's the shared interface that prevents drift between authored pieces.
2. **P1 — Identity, 5 operations, intra-discipline ordering** (Cluster X) — one joint authoring piece (the identity sentence references operations, the ordering is a property of the operation-set; these belong together).
3. **P3 — Meta-question canonical set + dynamic Task-Define/Exploration division** (Cluster Y) — joint authoring piece (the MQ answers ARE the signal; perception/action split is justification).
4. **P5 — Input contract + output shape** (Cluster Z) — joint authoring piece.
5. **P6 — Pipeline position + Exploration-conditional dispatch** (Cluster W) — joint authoring piece.
6. **P7 — Lightweight stance + 5 enforcement criteria** (Cluster V part 1) — own authoring piece.
7. **P8 — NOT-list + 5 exclusion categories + intrinsic-grounding rationale** (Cluster V part 2) — own authoring piece.
8. **P9 — Departures-from-IE-arc acknowledgement** — terminal piece (a short note in the structural spec acknowledging the predecessor arc).

Initial boundary set: 7 pieces (P1, P3, P5, P6, P7, P8, P9) + 1 shared anchor (P0).

## Step 3 — Validate Boundaries (bottom-up)

The irreducible authoring atoms a spec writer would need to produce:

- The verb-meaning sentence — atom of P1 (cited by P0)
- One-paragraph mechanism description per operation × 5 — atoms of P1
- The 4-stage intra-discipline ordering with rationale — atom of P1
- The 3 base meta-question wording (MQ1/MQ2/MQ3) — atoms of P3
- The extension-rule wording (3 bullets: about-the-task + constrains-Rephrase + one-sentence) — atom of P3
- The signal-via-MQ-answers mechanism description — atom of P3
- The input-contract section (1 input) + substrate clarification — atoms of P5
- The output-shape description (substantive content per item) — atom of P5
- The pipeline-position paragraph (pre-pipeline) + Exploration-conditional paragraph — atoms of P6
- The lightweight-stance paragraph + 5 enforcement-criteria bullets — atoms of P7
- The NOT-list intrinsic-grounding paragraph + 5 exclusion-category entries — atoms of P8
- The departures-acknowledgement paragraph (one short section) — atom of P9

Atoms group naturally into the same clusters Step 2 identified. **Top-down (clusters) and bottom-up (atoms) agree. Confidence: HIGH.**

Considered merges + splits:
- Merge P7 + P8 (both are constraint-shaped)? Rejected. Lightweight = ENFORCEMENT CRITERIA (what would violate at structural-layer authoring); NOT-list = EXCLUSION CATEGORIES (what the discipline doesn't do). Different artifacts; same logical foundation but different authoring concerns. Keep separate.
- Split P1 into "identity sentence" + "5 operations" + "ordering"? Rejected. Cluster X's strong internal coupling makes them inseparable.
- Split P3 into "MQ canonical set" + "dynamic division mechanism"? Rejected. Per K5 from sensemaking, the MQ answers ARE the signal — joint definition.

## Step 4 — Question Tree (pieces as questions + verification criteria)

### P0 — Shared meaning-layer anchor (cited by every other piece)

Question: *What are the meaning-layer commitments every authored piece references?*

Verification: [ ] **Verb-meaning sentence** verbatim: *"Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing."* [ ] **5 operation names** (canonical labels every piece uses): Itemize, Meta-question, Deconstruct, MultiScope, Rephrase. [ ] **Perception/action split** principle: Task-Define perceives + emits content + signals; downstream actors decide and act. [ ] **Self-containment** principle: Task-Define's spec must not contain outbound pointers to design history, theory folders, or neighbor disciplines (per memory `feedback_disciplines_self_contained`). [ ] Stated as a one-screen anchor referenced (not restated) by P1/P3/P5/P6/P7/P8/P9. [ ] No runner-specific or other-discipline-specific details.

### P1 — Identity, the 5 operations, and the intra-discipline ordering

Question: *What is Task-Define's identity statement (verb-meaning), what 5 operations does it perform, and in what order do those operations run within one invocation?*

Verification:
- [ ] **Identity statement** = the verb-meaning sentence from P0, used as the structural-layer spec's §1 identity section.
- [ ] **Per-operation mechanism description** for each of 5 operations (one paragraph each):
  - **Itemize** — split the task statement into distinct atomic items (1 or more). One paragraph: input + mechanism + output.
  - **Meta-question** (per item) — apply meaning-layer questions ABOUT the item to determine scope and context-need. One paragraph: input + mechanism (the canonical-set + extension-rule per P3) + output (the answers as signals).
  - **Deconstruct** (per item) — analyze item into constituent parts (subject + action + deliverable-shape, at minimum). One paragraph.
  - **MultiScope** (per item) — produce versions at multiple scales (small + big at minimum). One paragraph.
  - **Rephrase** (per item, last) — produce alternative formulations, constrained by MQ answers. One paragraph including the constraint-by-MQ statement.
- [ ] **Intra-discipline ordering** as a 4-stage flow:
  - Stage 1: Itemize (statement-level)
  - Stage 2 (per item): Meta-question
  - Stage 3 (per item): Deconstruct + MultiScope (parallel)
  - Stage 4 (per item): Rephrase (constrained by Stage 2's answers)
- [ ] **Ordering rationale** stated (one paragraph): Itemize first because the rest are per-item; Meta-question second per item because it constrains; Deconstruct + MultiScope parallel because both are item-internal analyses informed by the same MQ answers; Rephrase last because MQ answers constrain it.
- [ ] **Per-item granularity** declared as an intrinsic property of the discipline (atoms after Itemize are independently processable).
- [ ] **Cross-references P0** for verb-meaning and operation names (does NOT restate them).
- [ ] No reference to other discipline names inside the operation-mechanism descriptions (per self-containment).

### P3 — Meta-question canonical set + bounded-extension rule + dynamic Task-Define / Exploration division (signal-via-MQ-answers)

Question: *What is the canonical Meta-question set, what rule bounds the open extension, and how does the meta-question stage signal whether Exploration is needed downstream?*

Verification:
- [ ] **3 base meta-questions** with final wording:
  - **MQ1 (scope-axis):** "What scope does this task refer to? (time / concept / project / feature / cross-cutting / other)"
  - **MQ2 (context-need-axis):** "Is this task self-contained, or does it require external context to make sense / be done right? If external, what kind?"
  - **MQ3 (intent-vs-surface-axis):** "What is the underlying intent (vs the surface ask)?"
- [ ] **Bounded-extension rule** as 3 bullets:
  - (a) must be ABOUT the task (not about its answer)
  - (b) must CONSTRAIN Rephrase (not free-floating)
  - (c) must be EXPRESSIBLE in one sentence (lightweight)
- [ ] **Signal-via-MQ-answers mechanism** stated: meta-question answers ARE the signal for whether external context is needed; no separate `needs_external_context` field; downstream consumers (the runner; Exploration) read MQ2 (especially) and decide whether to invoke external-context-fetching.
- [ ] **Perception/action split justification** stated: Task-Define perceives the framing-gap via meta-questions and emits the answers as signals; downstream actors decide and act. Cross-references P0.
- [ ] **Open-with-extension model rationale** stated: fully-closed over-fits to the 2 user-named examples; fully-open undermines the constraint-on-Rephrase that makes Meta-question load-bearing; the open-with-bounded-extension synthesis preserves lightweight while respecting the user's "more than these 3, or better refined" requirement.
- [ ] No naming of specific runners (MVLw, MVL+) inside this piece; "downstream consumers" generically.

### P5 — Input contract + substrate distinction + output shape

Question: *What does Task-Define consume as input, what is its substrate, and what shape does its output take?*

Verification:
- [ ] **Input contract** stated: ONE input — the raw task statement (exogenous; the only input).
- [ ] **Substrate distinction** stated: LLM internal context is the SUBSTRATE of Task-Define's operation (universal to LLM-implemented disciplines), NOT an input. Justification: inputs are exogenous things passed in; LLM context is endogenous (the LLM has it whether or not it's named).
- [ ] **Output shape — meaning-layer commitment** stated: outputs are SUBSTANTIVE (carry content; do NOT carry verdicts of input-vs-output faithfulness) and PER-ITEM (each item has its own bundle of meta-question answers + deconstructed parts + multi-scoped versions + rephrasings).
- [ ] **Output schema field-by-field** is explicitly DEFERRED to structural-layer detail (the meaning layer commits to "substantive + per-item"; the structural spec will instantiate exact field names).
- [ ] Cross-references P0 (verb-meaning); cross-references P1 (output is what operations produce).
- [ ] No external-anchor input fields (no `project_goal`, no `recent_context` as direct discipline-input).

### P6 — Pipeline position + Exploration-conditional dispatch

Question: *Where in the broader pipeline does Task-Define run, and how does Exploration's conditional invocation hook off Task-Define's output?*

Verification:
- [ ] **Pipeline position** declared: Task-Define runs PRE-PIPELINE — before the loop disciplines (Su → S → D → I → C in /MVLw; E → S → D → I → C in /MVL+; or whatever the adopting runner's downstream pipeline is).
- [ ] **Pre-pipeline justification** stated: Task-Define's output IS the framing the loop disciplines operate on; if Task-Define ran inside the loop, the loop would already be running with prior framing and Task-Define's output would have nowhere to be encoded. The structural call-site test that drove this conclusion.
- [ ] **Exploration-conditional dispatch** stated: Exploration runs AFTER Task-Define and BEFORE the loop, IF Task-Define's MQ answers (especially MQ2) signal external context is needed; otherwise the runner proceeds directly to Surfacing / pipeline-equivalent.
- [ ] **Determination mechanism** (HOW the runner reads MQ answers and dispatches Exploration) is explicitly DEFERRED to process-layer detail.
- [ ] **"Explore" disambiguation**: in this design, "Exploration" refers to the existing Core discipline at `cognitive_harness/explore/`, not a generic "go-find" actor.
- [ ] Cross-references P3 (the MQ-answers-as-signal mechanism).
- [ ] No naming of specific runner files; positioning is stated abstractly with example runners (MVLw, MVL+) cited as instances.

### P7 — Lightweight stance + 5 enforcement criteria

Question: *What is the lightweight stance, and what concretely violates it (criteria a structural-layer author can use as a checklist)?*

Verification:
- [ ] **Lightweight stance paragraph** stated: the load-bearing design constraint biasing the discipline AWAY from sub-machinery growth; the user's explicit anti-IE bias.
- [ ] **5 concrete enforcement criteria** with verifiable phrasing:
  - (i) NO verify-phase emitting a separate verdict beyond the operation's direct output.
  - (ii) NO external-anchor inputs to the discipline.
  - (iii) NO halt-gate output from the discipline (no signal that gates a runner's loop continuation).
  - (iv) NO sub-machinery within an operation beyond a single paragraph in the spec.
  - (v) NO ecosystem-knowledge reach (no fetching deprecated-spec lists, currency checks, project-history awareness).
- [ ] **Application rule** stated: at structural-layer authoring time, every operation + output must pass all 5 criteria; violations are detectable + correctable.
- [ ] **Justification** stated: the criteria themselves are not heavy (5 short bullets); what they EXCLUDE is the heavy IE-arc machinery being departed from. Stance graduates from label to enforceable constraint.
- [ ] Cross-references P0 (verb-meaning — the stance is grounded in expand-to-define identity).
- [ ] No comparative grounding ("not like IE") in the criteria themselves; each criterion stands on Task-Define's own character.

### P8 — NOT-list intrinsic grounding + 5 exclusion categories

Question: *What does Task-Define explicitly NOT do, and on what intrinsic grounds?*

Verification:
- [ ] **Intrinsic-grounding pattern** stated as the rule: every NOT-list entry grounds in an intrinsic feature of Task-Define's character (verb = expand-to-define; substrate = task-statement + LLM internal cognition; granularity = per-item), NOT by reference to neighbor disciplines or by reference to "what IE had but Task-Define doesn't."
- [ ] **5 exclusion categories** with intrinsic grounding per category:
  - **Verification operations** (fidelity adjudication, PASS/FLAG over input-vs-output faithfulness) — excluded because Task-Define's verb is EXPAND-TO-DEFINE; fidelity adjudication is a different verb (VERIFY).
  - **External-context fetching** (reaching for surrounding project state) — excluded because Task-Define's substrate is task-statement + LLM internal cognition; reaching elsewhere is a different verb.
  - **Fidelity-verdict emission** (PASS/FLAG outputs) — excluded because Task-Define's output is SUBSTANTIVE CONTENT, not adjudication.
  - **Cross-item interpretation / cross-task relational meaning** — excluded because Task-Define operates at PER-ITEM granularity; cross-item operations are a different verb at a different granularity.
  - **Ecosystem-knowledge use** (deprecated specs, currency of references, project-history) — excluded because Task-Define's substrate excludes project state.
- [ ] **Per-entry wording** is final at structural-layer (the meaning layer commits to the GROUNDING PATTERN + the 5 CATEGORIES; structural spec authors per-entry final phrasing).
- [ ] **Self-containment check** built into the authoring: any entry phrased by reference to a neighbor discipline FAILS this piece's verification.
- [ ] Cross-references P0 (self-containment principle + verb-meaning).

### P9 — Departures-from-IE-arc acknowledgement

Question: *What does the structural-layer spec say about the prior IE arc?*

Verification:
- [ ] **One short section** (one paragraph max) acknowledging:
  - Task-Define replaces (does not refine) the prior Inquiry-Elaboration arc.
  - Commitments from that arc are NOT inherited (user invoked "from scratch").
  - The 15-28 process-layer artifacts (`reference_authority_check.md`, `inquiry_elaboration_adoption.md`) become mostly obsolete for Task-Define; reference-authority is decoupled (a separate runner concern if kept).
  - Bookkeeping: the prior IE-arc findings should be marked SUPERSEDED-BY-PROPOSAL by this design (administrative action, not part of the spec itself).
- [ ] No detailed point-by-point comparison (lightweight); just the high-level acknowledgement.

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| P0 → P1, P3, P5, P6, P7, P8 | verb-meaning + operation names + perception/action split + self-containment principle | one-way (anchor) |
| P1 → P3 | the "Meta-question" operation's existence + its first-per-item position in the ordering | one-way |
| P1 → P5 | what the 5 operations produce (the output's content-shape originates here) | one-way |
| P1 → P7 | the operation-shape that the 5 enforcement criteria apply to | one-way (light reference) |
| P3 → P6 | the signal-via-MQ-answers mechanism (P6 cites it for the Exploration-conditional dispatch) | one-way |
| P3 → P8 | the perception/action split justification (the NOT-list's exclusion of fidelity-verdict emission cross-references the same principle) | one-way |
| P5 → (no downstream pieces) | terminal authoring piece | terminal |
| P6 → (no downstream pieces) | terminal authoring piece | terminal |
| P7 ↔ P8 | shared underlying logic (constraints on what discipline IS/ISN'T); each cites the other's existence in the spec's index but doesn't restate the other's content | bidirectional (light) |
| P9 → (no further pieces) | terminal | terminal |

**Hidden-coupling check (Assumptions-not-data per Step 5 refinement):**

- P1, P3, P5 must use **identical operation-name spellings** (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase). The shared anchor P0 enforces single-source-of-truth.
- P3 + P6 jointly assume the **runner-side dispatch logic** for Exploration reading MQ2 answers. The meaning layer says the mechanism is "MQ answers ARE the signal"; the runner-side HOW is deferred to process layer. P3 + P6 must both cite this deferral explicitly so the structural-layer author doesn't try to specify the dispatch.
- P7 + P8 share the underlying "expand-to-define vs verification" distinction. Each entry's grounding must hold independently (no cross-piece justification).
- P9 assumes the prior IE-arc findings still exist as readable artifacts; if they were deleted, the supersession bookkeeping would have nothing to point to. (Reality: they exist; verified via Relationships section of `_branch.md`.)

## Step 6 — Dependency Order

```
P0 (shared anchor — stated once at structural-spec top)
    │
    ├──► P1 (identity + 5 ops + ordering)        ─┐
    ├──► P7 (lightweight + 5 criteria)             │  parallel — all depend only on P0
    └──► P8 (NOT-list + 5 categories)             ─┘

After P1 is committed:
    ├──► P3 (MQ set + dynamic division mechanism)  ─┐
    └──► P5 (input contract + output shape)        ─┘  parallel — depend on P0 + P1

After P3 is committed:
    └──► P6 (pipeline position + Exploration-conditional)  — depends on P3's signal mechanism

Terminal:
    └──► P9 (departures-from-IE-arc acknowledgement)  — independent; author last
```

**Parallelizable groups:**
- After P0: {P1, P7, P8} can be authored in parallel.
- After P1: {P3, P5} can be authored in parallel.

**Sequential dependencies:**
- P3 depends on P1 (names "Meta-question" operation; cites the per-item ordering).
- P5 depends on P1 (output shape references what operations produce).
- P6 depends on P3 (Exploration-conditional dispatch cites the signal mechanism).

**Terminal:** P9 (no downstream; can be authored at the very end as a standalone acknowledgement section).

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be authored independently given P0 + declared inputs? | **PASS** — every piece has a clear question + verification criteria; cross-references to other pieces are explicit (P3→P1, P5→P1, P6→P3, P8→P3); no piece's verification requires reading another piece's content beyond what's interface-stated. |
| **Completeness** | Do the pieces cover all 13 SV6 commitments? | **PASS** — verified piece-by-piece:<br>SV6.1 Identity → P0 + P1 · SV6.2 5 operations → P1 · SV6.3 Ordering → P1 · SV6.4 MQ canonical set + extension → P3 · SV6.5 Input contract → P5 · SV6.6 Output → P5 · SV6.7 Dynamic division → P3 · SV6.8 Pipeline position → P6 · SV6.9 Lightweight + criteria → P7 · SV6.10 NOT-list + categories → P8 · SV6.11 Perception/action split → P0 (principle) + P3 (instantiation) · SV6.12 Self-containment → P0 (principle) + P8 (NOT-list intrinsic grounding) · SV6.13 Departures from IE arc → P9. |
| **Reassembly** | Do pieces + interfaces = the SV6 model? | **PASS** — assembling P0 + P1 + P3 + P5 + P6 + P7 + P8 + P9 gives a spec author everything needed to write Task-Define's structural-layer spec: identity + operations + ordering + meta-question set + division mechanism + I/O + pipeline position + lightweight enforcement + NOT-list + departures acknowledgement. No gaps. |

**Determination-mechanism piece check** (Step 7 refinement): does the Q-tree include load-bearing concepts whose use depends on a runtime determination, and does it include pieces addressing HOW those determinations are performed?

- **Determination 1: "When does the LLM perceive a need for an extra meta-question?"** (the open-with-extension rule). HOW: bounded by 3 rules (about-the-task + constrains-Rephrase + one-sentence). **Piece-home: P3 (extension-rule verification criterion).** Determination mechanism IS in the Q-tree. ✓
- **Determination 2: "When should Exploration be invoked?"** (the dynamic Task-Define/Exploration division). HOW: meaning-layer commits to "MQ answers ARE the signal"; HOW THE RUNNER reads the answers and dispatches Exploration is explicitly DEFERRED to process layer. **Piece-home: P3 (signal mechanism committed) + P6 (deferral noted).** Determination mechanism is properly bounded — meaning layer commits the signal source; process layer instantiates the reader. ✓

**Full-evaluation extension (4 additional dimensions, since this is a discipline-design inquiry — higher-stakes than ordinary problem-solving):**

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Is each piece small enough for a single focused authoring pass? | **PASS** — P0 is one-screen anchor; P1 is the largest (verb-meaning + 5 one-paragraph operation descriptions + ordering rationale) but still fits in one focused pass; P3/P5/P6/P7/P8/P9 are all small. |
| **Interface clarity** | Are all cross-piece flows explicit? Any hidden dependencies? | **PASS** — Step 5 interface map names 9 directional flows + the shared-anchor pattern; the Assumptions-not-data check surfaces 4 hidden assumptions, all bounded (operation-name single-source via P0; deferred runner-side dispatch noted in P3+P6; P7/P8 logical foundation independent per-entry; prior findings still readable). |
| **Balance** | Is complexity roughly proportional, or is one piece 80% of the work? | **PASS — with note** — P1 is the heaviest (verb-meaning + 5 operations + ordering ≈ 40% of authoring). Others are smaller (P3 ≈ 20%; P5 + P6 + P7 + P8 ≈ 8% each; P9 ≈ 4%). Distribution acceptable: P1 IS the discipline's substantive content; that's where the substance lives. |
| **Confidence** | Do top-down + bottom-up agree on boundaries? | **PASS HIGH** — Step 3's bottom-up atom-listing maps cleanly onto Step 2's cluster-derived pieces. No mismatches. |

### Failure-mode self-check (per `references/decompose.md` § Failure Modes)

1. **Premature decomposition?** No — sensemaking SV6 settled the meaning layer first; pieces here are authorable conceptual commitments, not exploratory cuts.
2. **Wrong boundaries?** Considered merging P7 + P8 (both constraint-shaped). Kept separate — they're different authoring artifacts (enforcement criteria vs exclusion categories) even though they share logical foundation. Considered splitting P1 into 3 sub-pieces. Rejected — Cluster X's strong internal coupling makes them inseparable.
3. **Hidden coupling?** Surfaced via the Assumptions-not-data check at Step 5: operation-name single-source (mitigated by P0); deferred runner-side dispatch (mitigated by explicit-deferral notes in P3+P6); P7/P8 logical-foundation sharing (mitigated by per-entry independent grounding).
4. **Missing pieces?** Cross-checked SV6's 13 commitments against piece-coverage; all covered. Determination-mechanism check passes: both runtime determinations (extension-rule firing; Exploration-conditional dispatch) have piece-homes.
5. **Over-decomposition?** 7 authorable pieces + 1 anchor for 13 SV6 commitments — reasonable balance. Could collapse P9 into a footnote on P0; kept separate because it's an authoring concern an author would want explicit.
6. **Ignoring dependencies?** Explicit Step 6 order: P0 → {P1, P7, P8 parallel} → {P3, P5 parallel} → P6 → P9 terminal.
7. **Imbalanced decomposition?** P1 is heaviest at ~40%; others ~8% each. Expected — that's where the discipline's substantive content lives. Acceptable (no piece can be split further without violating the cluster X coupling).

### Frontier (handed to Innovation/Critique)

- **Innovation** (this run's next step) will produce concrete authorable content for each piece — most of the content is already settled in SV6, so innovation's primary job is to APPLY mechanisms (Combination + Domain Transfer + Inversion + Constraint Manipulation) to test whether the design has emergent value beyond the per-piece content, and to formalize the per-piece content into transcribable form.
- **Critique** (last step before CONCLUDE) will pressure-test:
  - (a) Does the verb-meaning synthesis "expand-to-define" hold under prosecution (the K1 + A1 resolution)?
  - (b) Do the 5 lightweight enforcement criteria (P7) ACTUALLY constrain structural-layer authoring — could the author violate one without the criteria flagging it?
  - (c) Does the NOT-list intrinsic-grounding (P8) survive — is any of the 5 exclusion-category entries phrased by reference to a neighbor (a self-containment violation)?
  - (d) Does the perception/action split honor (P3) — does the signal-via-MQ-answers mechanism cleanly preserve "Task-Define perceives; downstream acts"?
  - (e) Does the open-with-extension MQ set (P3) preserve lightweight — could the extension rule itself be exploited to add heavy meta-questions?
  - (f) Self-reference recursion check: could Task-Define elaborate the task "define Task-Define"? Does the design fit when applied to itself?
