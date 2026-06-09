---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---

# Finding: Task-Define — Discipline Process Layer (Authored)

## Question

From `_branch.md`:

**Question.** Design the **process layer** for the Task-Define discipline — the runtime procedure that executes Task-Define's already-settled meaning-layer commitments coherently at runtime, covering ten observation targets: (1) entry / receive contract; (2) execution of the meaning-layer's 4-stage intra-discipline flow at runtime; (3) per-operation firing logic for the five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase); (4) lightweight-stance enforcement mechanism; (5) NOT-list enforcement mechanism; (6) the substantive per-item output shape Task-Define emits; (7) the dispatch-signal mechanism for handing off to Exploration (the existing project discipline that finds external context); (8) convergence / exit criteria; (9) self-assessment verdict at end-of-run; (10) failure-mode hooks for runtime detection. *Task-Define* is the project's discipline for **expanding a task statement into a defined task** (the meaning layer was settled at `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`); the process layer is the next concrete artifact a downstream author can use to write the runtime spec.

**Goal.** A concrete, authorable process-layer design — harmonized with the meaning-layer commitments, honoring the user's "lightweight" directive, with the dynamic Task-Define/Exploration dispatch specified — that the next inquiry (runtime-spec authoring at `cognitive_harness/task-define/references/task-define.md`) can build directly from without re-litigating process choices.

**What would fail:** a design that re-litigates the meaning layer; over-procedurizes (mandatory ceremonies at every operation; multi-phase pipelines where a single perceptive pass suffices); leaves the Task-Define → Exploration dispatch under-specified; silently re-introduces the premature Itemize-split defect that an earlier diagnostic finding caught (`devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md`); or is too abstract to author from.

## Finding Summary

- **The process layer is a 3-runtime-phase procedure** — Reception (receive one input: the raw task statement) → per-item Traversal (executing the meaning-layer's 4-stage intra-discipline flow per item) → Assembly (emit per-item bundles + self-assessment verdict). The 3-phase shape mirrors the project's sister Core discipline Surfacing (the existing discipline at `cognitive_harness/surfacing/`, which draws relevance-tagged items from a bounded territory); the 4-stage intra-discipline flow is the meaning layer's already-settled cognitive ordering, embedded inside Phase 2.

- **The 4-stage flow embedded inside Phase 2** runs per item: Stage 1 = **Itemize** (statement-level; perceive whether the statement contains multiple completely-different tasks; default emit one item) → Stage 2 = **Meta-question** (per item; ask the three base meta-questions about the item's scope, context-need, and intent) → Stage 3 = parallel **Deconstruct** + **MultiScope** (per item; both are independent fields of the per-item bundle, computed without depending on each other; runtime serialization is allowed) → Stage 4 = **Rephrase** (per item; produce alternative formulations of the item, constrained by Stage 2's meta-question answers so as not to lock meaning in the wrong space).

- **Per-operation firing-format is a one-paragraph triple** per operation: `input` (what the operation receives at runtime) + `mechanism-reference` (a pointer to the meaning-layer spec's mechanism description, NOT a re-authored description) + `output` (what the operation emits per item). The mechanism-reference field MUST cite the meaning-layer source with an as-of-date or supersession-anchor (e.g., "per 15-39 §2 Itemize as of 2026-06-04") so a future reader can detect staleness if the meaning-layer spec is updated. This reference-not-re-author rule honors the diagnostic finding's first maintenance candidate, which identified that a previous authoring of "Itemize = split into distinct atomic items" was an LLM-auto-completion that misaligned with user intent for the user-named operation; mechanism-by-reference is the surgical fix that prevents the defect from recurring at process-layer authoring time.

- **The dispatch signal to Exploration is the meta-question answers themselves** — Task-Define emits no separate `external_context_required` field. The runner orchestrating the pipeline reads the meta-question answers (specifically MQ2's context-need answer) and decides whether to invoke Exploration. This honors the project's perception/action split: Task-Define perceives the framing-gap; the runner acts on the perception. The PROCESS-LAYER commitment is the substrate (MQ answers) + the locus (runner-extracts) + the necessary information content (MQ2's answer MUST contain information enabling the external-context-need determination — this constrains the meta-question's output schema at runtime-spec authoring). The runner-side extraction protocol (which runner, what parser, what default on equivocal answers) is a SEPARATE process layer per runner — out of scope for this inquiry.

- **Lightweight-stance enforcement lives at authoring time only, not runtime.** The meaning layer's six lightweight criteria (no separate verify-phase; no external-anchor inputs; no halt-gate output; no sub-machinery beyond a paragraph per operation; no ecosystem-knowledge reach; every output element load-bearing for some downstream actor's decision) gate what gets written into the runtime spec. Runtime self-enforcement of the criteria would itself be sub-machinery (running checks on every invocation), which would violate criterion (iv) — a self-referential structural collapse. The post-authoring inspection mechanism is a downstream review (a LOOP_DIAGNOSE-style audit; or the project's td-critique discipline's evaluation dimension that automatically tests the authored mechanism against literal application).

- **Late-split Itemize re-fire (the recovery path when downstream catches a missed multi-item case) is runner-initiated** via re-invocation of Task-Define with an optional `prior-bundles` parameter that lets the re-invocation skip what was already correctly computed. Task-Define itself does NOT perform in-invocation self-re-check on its own Itemize verdict — that would be runtime self-enforcement, the same self-referential trap noted above. The recovery responsibility lives where the action happens: at the runner.

- **Stage 3 parallelism is architectural independence at the per-item bundle field level, not runtime concurrency.** Deconstruct's output and MultiScope's output are independently-computable fields of the bundle — neither uses the other as input. At runtime, a single LLM session is sequential by nature, so the two operations serialize in whatever order is convenient. The architectural claim (independence) preserves the meaning-layer commitment that knowing the item's parts doesn't change what its scope variants are; the runtime claim (serialization) acknowledges substrate reality.

- **Failure-mode hook architecture follows the LAYER 1 / LAYER 2 meta-pattern** that the sister Core discipline Surfacing uses (operational failures, detectable via output observation and recoverable via re-invocation, vs identity-eroding failures, detectable via behavioral audit over time and not simply recoverable). The asymmetric-failure principle (under uncertainty, lean toward keep-together at Itemize; lean toward fire at meta-question extensions when the bounded-extensibility rule is met) is the runtime expression of the meaning-layer's already-committed cost-structure asymmetry. Specific failure modes are enumerated as an initial best-guess list — 6 LAYER 1 modes + 4 LAYER 2 modes — that will be empirically refined as Task-Define accumulates invocations.

- **Self-assessment verdict at end-of-run is PROCEED / FLAG / RE-RUN with a confidence attribute (HIGH / MED / LOW)** — adopting Surfacing's verdict shape augmented with a per-verdict confidence (which itself follows Surfacing's per-item relevance-confidence pattern). Initial FLAG conditions (4) cover meta-question uncertainty boundaries, bounded-extensibility-rule-partial-application, Rephrase variant scarcity, and any LAYER 1 mode self-recognition. Initial RE-RUN conditions (2) cover LAYER 2 mode self-recognition and receive-step failure (malformed task-statement input).

- **Scope is Task-Define-internal.** Runner-side dispatch mechanics (per-runner extraction protocol, parser code, default behavior on equivocal answers) are SEPARATE process layers — one per runner that invokes Task-Define. This separation honors the meaning layer's deferral (15-39 §5 explicitly committed that "the exact mechanism by which the runner reads the meta-question answers and dispatches Exploration is a process-layer concern" — that concern belongs to the runner-side process layer, not Task-Define's process layer).

- **The design is ready for runtime-spec authoring** at `cognitive_harness/task-define/references/task-define.md`. Every architectural choice traces to a meaning-layer commitment or a sister-discipline precedent; every potential drift (re-introducing premature Itemize-split, re-introducing a separate dispatch field, re-introducing runtime self-enforcement) was tested via piece-level Inversion and rejected on structural grounds. A future R1 author writes the runtime spec by transcribing each of this finding's section commitments into spec sections, with the per-operation firing-format triples filled in directly from the meaning layer's §2.

## Finding

Before laying out the design, a small piece of surrounding context so the reader understands where the conclusions come from: **Task-Define is a new discipline the user has been authoring across several recent inquiries** — replacing a prior, more elaborate "Inquiry Elaboration" discipline that had accumulated weight over a sequence of refinements. The meaning layer (what Task-Define IS as a cognitive operation; what its five operations are; what it does NOT do; what makes it lightweight) was settled in `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`. A subsequent diagnostic inquiry at `devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md` caught a specific defect-pattern in how disciplines get authored — an LLM auto-completing the *meaning* of an operation the user only *named* — and produced two maintenance candidates (one for the sense-making discipline spec, one for the td-critique discipline spec) to guard against recurrence. This inquiry — the **process layer** — is the next downstream artifact: it specifies how the meaning-layer commitments execute as a runtime procedure, with explicit guardrails against re-introducing the diagnostic-identified defect at process-layer authoring time. The design's most distinctive commitment (the dynamic dispatch boundary with Exploration via meta-question answers as signal) traces directly to the user's verbatim directive *"this part, is dynamic"*; the design's discipline (one-paragraph per-operation firing-format with mechanism by reference, not by re-authoring) traces to the diagnostic finding's first maintenance candidate.

### 1. The three runtime phases

Task-Define's runtime procedure has three phases, executed in sequence per invocation:

**Phase 1 — Reception.** Fires once per invocation. Receives the single input (the raw task statement, as supplied by the runner or user). Binds the LLM's internal cognition as the discipline's substrate — this is the universal substrate of any LLM-implemented discipline; it is NOT an input. Initializes the iteration state Phase 2 will use. Reception does NOT receive any other input — no `project_goal`, no `recent_context`, no `external_anchors`. The single-input contract is the meaning layer's commitment for what makes Task-Define lightweight at the I/O surface.

**Phase 2 — Per-item Traversal.** Fires per item. Each iteration of Phase 2 executes the meaning layer's 4-stage intra-discipline flow on one item from Itemize's output. The number of Phase 2 iterations equals the cardinality of Itemize's output — usually one (the default per the refined Itemize), occasionally N when distinct (subject, action, deliverable-shape) tuples are clearly established. The 4-stage internal ordering is acyclic within an invocation (one-pass; no internal iteration); recovery from late-discovered multi-item cases happens via runner-initiated re-invocation (see §6 below), not via in-invocation iteration.

**Phase 3 — Assembly.** Fires once per invocation, at the end. Aggregates the N per-item bundles produced by Phase 2 into the substantive output. Emits the self-assessment verdict (see §8 below). Assembly does NOT compute any new content — it is a packaging step that emits what Phase 2 already produced.

### 2. The 4-stage intra-discipline flow embedded inside Phase 2

The four stages within Phase 2's per-item iteration are the meaning layer's commitment (15-39 §3). Each iteration of Phase 2 executes all four stages on one item, in this fixed order:

- **Stage 1 (statement-level, fires once at the start of the discipline, before Phase 2 iteration begins):** **Itemize**. Perceives whether the task statement contains multiple completely-different tasks (distinguished by distinct subject/action/deliverable-shape tuples) or a single task with multiple specifications. Defaults to emitting one item; emits N only when distinct tuples are clearly established. Output is a list of items with cardinality ≥ 1. Itemize is the only stage that runs at statement-level; it determines the per-item iteration count for the rest of Phase 2.

- **Stage 2 (per item, fires first within each Phase 2 iteration):** **Meta-question**. Applies the meaning layer's three canonical meta-questions to this item: MQ1 asks what scope the task refers to (time horizon, conceptual scope, project scope, feature scope, cross-cutting concern, etc.); MQ2 asks whether the task is self-contained or requires external context to make sense and be done right; MQ3 asks what the underlying intent is (versus the surface ask). Additional meta-questions may be added per item under the bounded-extensibility rule, which requires three conditions: the question must be about the task's structure or framing (not requiring external state-gathering); the answer must constrain Rephrase later in the flow (not float free); the question must be expressible in one sentence. Output: per-question answers, structured per item.

- **Stage 3 (per item, parallel):** **Deconstruct** + **MultiScope**, computed as independent fields of the per-item bundle. Deconstruct analyzes the item into its constituent parts (at minimum: subject, action, deliverable-shape; the runtime-spec author may add more parts). MultiScope produces versions of the item at multiple scales (at minimum: a small-scope version with the narrowest defensible interpretation, and a big-scope version with the widest defensible interpretation; the meta-question MQ1 answer informs what dimension "scope" varies along for this item). Both fields are computed without depending on each other; runtime serialization order is implementation convenience.

- **Stage 4 (per item, fires last within each Phase 2 iteration):** **Rephrase**. Produces alternative formulations of the item — different vocabularies, different emphases, implicit-rendered-explicit — *constrained by Stage 2's meta-question answers* so the rephrasings do not drift to a vocabulary that locks meaning in the wrong space. The constrained-by relation is the load-bearing safety mechanism that justifies Meta-question's first-per-item position; if Rephrase ran without that constraint, the rephrasings could trap later disciplines in the wrong interpretation. Output: two or more rephrasings per item.

The 4-stage ordering is structural, not stylistic. A reordering — for example, running Rephrase before Meta-question — would remove the safety mechanism. The intra-discipline ordering is part of Task-Define's identity, not a presentation preference.

### 3. Per-operation firing-format (the runtime contract per operation)

Each of the five operations gets a single firing-format triple in the runtime spec. The template:

> **Operation X — input:** {what X receives at runtime}. **Mechanism:** as committed in `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` §2 [Operation X], **as of 2026-06-04**. **Output:** {what X emits per-item}.

Three properties of this template are load-bearing:

(a) **One paragraph total per operation.** The meaning layer's lightweight criterion (iv) says "no sub-machinery beyond a paragraph"; the firing-format template is the minimum-sufficient contract that fits within one paragraph (three short sentences for input / mechanism-reference / output).

(b) **Mechanism is REFERENCED, not RE-AUTHORED.** The mechanism field cites the meaning-layer source by section pointer. It does NOT contain a re-written description of what the operation does. This is the surgical guard against the defect-pattern the diagnostic finding identified — the previous authoring of "Itemize = split into distinct atomic items" was an LLM auto-completion that misaligned with user intent for the user-named operation; reference-only authoring is the structural fix.

(c) **The reference includes an as-of-date or supersession-anchor.** If `15-39` is later updated or superseded by a new meaning-layer finding, the date or supersession-anchor lets a future reader detect staleness. The runtime-spec author keeps the mechanism-references aligned with the canonical meaning-layer version; the project's `## Relationships` supersession convention provides the upgrade path. (This commitment was added at finding-compile time per the critique discipline's refinement R-2; it mitigates a hidden-coupling assumption that decomposition surfaced — the firing-format silently assumed `15-39 §2` would never change.)

All five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) get their own triple. Itemize's triple in particular preserves the asymmetric-failure direction (lean-to-keep-together; default-emit-one) via the mechanism-reference to `15-39 §2` Itemize, which carries the cost-structure reasoning (premature-split is irrecoverable; late-split is recoverable-in-principle).

### 4. The MC1-honoring authoring rule (applies to every coined process-layer concept)

The reference-not-re-author rule for per-operation mechanisms generalizes to a broader authoring discipline that applies whenever the runtime spec is being written or revised:

> *Every concept used in the process spec must be either:*
> *(a) inherited from the meaning layer (`15-39`) — its meaning is user-validated;*
> *(b) inherited from a sister-discipline runtime spec (Surfacing, Sensemaking, Decompose, Innovate, Td-Critique, Routelister) — its meaning is project-rooted; or*
> *(c) coined here with an explicit inline definition — its meaning is on the page, not implicit.*
>
> *No process-layer concept may be used with an implicit, LLM-auto-completed meaning.*

The rule is load-bearing because the defect-pattern the diagnostic identified (an LLM filling in a meaning for a user-named concept without testing whether the meaning matched user intent) can re-emerge at process-layer authoring if any coined concept slips in undefined. The rule's compliance is checkable at downstream evaluation time — the td-critique discipline's per-operation verb-meaning dimension (added by the diagnostic finding's second maintenance candidate) tests authored mechanisms against literal application, which catches both meaning misalignment and missing definitions.

### 5. The dispatch boundary to Exploration

Task-Define's most distinctive process-layer commitment is the dynamic dispatch boundary with **Exploration** (the existing Core discipline at `cognitive_harness/explore/` that finds project-context relevant to an inquiry). The commitment has four parts:

(a) **The dispatch signal substrate is the meta-question answers themselves.** Task-Define emits NO separate `external_context_required` field, NO `needs_exploration` boolean, NO derivative signal. The MQ2 answer (the per-item context-need answer) IS the dispatch substrate; the runner reads it directly.

(b) **The dispatch locus is the runner — not Task-Define.** Task-Define perceives the framing-gap (via the meta-questions); the runner reads the perception and decides whether to invoke Exploration. This honors the project's perception/action architectural commitment: disciplines perceive, runners act.

(c) **The necessary information content is constrained.** MQ2's answer MUST contain enough information for a runner to make the external-context-need determination. This is a constraint on the meta-question's output schema at runtime-spec authoring time — the schema for MQ2's answer must carry, at minimum, a context-need verdict and (when needed) what kind of external context is needed. The specific schema fields are R1 structural concerns; the constraint at this layer is "the information must be sufficient for runner-side extraction."

(d) **The extraction protocol is runner-side, separate from Task-Define.** How a specific runner (MVLw, MVL+, classic MVL, future runners) reads MQ2's answer and dispatches to Exploration is a process layer of that runner — a separate inquiry per runner. This inquiry covers Task-Define-internal only. The deferral is explicit, not under-specification: the meaning layer's §5 already committed that "the exact mechanism by which the runner reads the meta-question answers and dispatches Exploration is a process-layer concern, deferred to a future inquiry"; this finding honors the deferral by placing the runner-side mechanics outside its scope.

If two or more runners later disagree about how to interpret the same MQ2 answer, that's a cross-discipline-coordination signal — a separate refinement inquiry would adjudicate, not this process-layer spec.

### 6. Re-fire semantics for late-split Itemize recovery

The meaning layer commits that Itemize's premature-split is structurally irrecoverable (downstream operations operate on fragments; meaning-lock in the wrong space), while late-split is recoverable-in-principle (the original statement is preserved verbatim; Itemize can re-fire if a missed multi-item case is later detected). The process layer specifies HOW that recovery happens at runtime:

Recovery is **runner-initiated**, not Task-Define-internal. When downstream signals reveal that an item should have been split (e.g., the runner notices that downstream disciplines are surfacing contradictory contexts that map to distinct sub-tasks; or the user inspects Task-Define's output and identifies a missed split), the runner **re-invokes Task-Define** with the original task statement plus an optional `prior-bundles` parameter that lets the re-invocation skip per-item work that was already correctly computed (analogous to Surfacing's `prior-artifact` re-invocation parameter at surfacing ref §3.6). Task-Define itself does NOT perform any in-invocation self-re-check on its Itemize verdict — that would be runtime self-enforcement, which violates lightweight criterion (iv).

The runner-side detection mechanics (HOW the runner notices a missed split; what signals trigger re-invocation) are runner-side process concerns, not Task-Define-internal.

### 7. Authoring-time lightweight enforcement (no runtime overhead)

The meaning layer commits six criteria that gate what counts as "lightweight" (no separate verify-phase; no external-anchor inputs; no halt-gate output; no sub-machinery beyond a paragraph per operation; no ecosystem-knowledge reach; every output element load-bearing for some downstream actor's decision). The process layer specifies WHERE these criteria are enforced:

Enforcement is **at authoring time, not at runtime.** The runtime-spec author (a future inquiry) writes R1 — `cognitive_harness/task-define/references/task-define.md` — passing each section through the 6-criterion checklist before committing it. The runtime carries NO self-enforcement code: there is no per-operation check that the operation's output satisfies the criteria; there is no end-of-invocation audit that the discipline as a whole satisfies them.

The structural reason for authoring-time-only enforcement is self-referential: a runtime self-enforcement mechanism would itself be sub-machinery — additional operation-level logic running on every invocation — which violates criterion (iv) directly. Putting the enforcement at runtime would mean the enforcement code defeats the criterion it enforces.

The defense-in-depth mechanism for authoring failures is **downstream review**:

- A **LOOP_DIAGNOSE-style audit** (per `cognitive_harness/protocols/loop_diagnose.md`) catches violations after-the-fact, by examining the authored spec against the diagnostic protocol's failure-mode framework.
- The **td-critique discipline's per-operation verb-meaning evaluation dimension** (added by the diagnostic finding's second maintenance candidate; per `cognitive_harness/td-critique/references/td-critique.md`) tests the authored mechanism descriptions against literal application — divergence between intuitive and literal reading triggers a REFINE verdict.

This is two independent mechanisms catching the same class of authoring violations at different times, so a slip past the R1 author's self-discipline is not silently lost.

### 8. Failure-mode hook architecture (LAYER 1 / LAYER 2 meta-pattern + asymmetric-failure principle)

The runtime spec exposes named failure-mode handles that follow the meta-pattern Surfacing uses (per surfacing ref §4): **LAYER 1** modes are operational failures, detectable by examining the discipline's output, recoverable via re-invocation; **LAYER 2** modes are identity-eroding failures, detectable only by behavioral audit over time, not simply recoverable. The asymmetric-failure principle — under uncertainty, lean toward keep-together at Itemize; lean toward fire at meta-question extensions when the bounded-extensibility rule is met — is the runtime expression of the meaning layer's already-committed cost-structure asymmetry (irrecoverable false-split is worse than recoverable false-keep-together).

**Initial LAYER 1 modes (6; empirically-refined post-authoring; each is intrinsic-grounded against a specific operation's structure):**

1. **Premature-Itemize-split** — Itemize emits count > 1 when the statement is actually a single task with multiple specifications. Grounded in Itemize's PERCEIVE-default-one direction.
2. **Late-multi-item-detected-by-downstream** — Itemize emits count = 1 but downstream signals reveal a missed split. Grounded in Itemize's late-split recoverability.
3. **MQ-extension-violates-bounded-rule** — an added meta-question fails one of the three bounded-extensibility conditions (about task structure / constrains Rephrase / one sentence). Grounded in MQ's bounded-extensibility rule.
4. **Rephrase-drifted-without-MQ-constraint** — Rephrase produces a variant that contradicts the MQ-answer constraint. Grounded in Rephrase's constrained-by relation.
5. **Per-operation-firing-missed-an-operation** — the per-item bundle is missing the output of one of the five operations. Grounded in the 4-stage flow's completeness requirement.
6. **MQ2-answer-missing-dispatch-info** — Meta-question fires but MQ2's answer lacks information enabling external-context-need determination. Grounded in the dispatch-substrate necessary-information-content commitment (§5 above). (This mode emerged from the innovation discipline's patch-level absence-recognition during the inquiry; it surfaced from the cross-discipline interface as a runtime failure-mode candidate.)

**Initial LAYER 2 modes (4; intrinsic-grounded against the meaning layer's five NOT-list categories at `15-39` §10):**

1. **Verification-drift** — Task-Define starts emitting fidelity verdicts (PASS/FLAG over input-output faithfulness). Grounded against NOT-list category 1 (verification operations are a different verb).
2. **Substrate-reach** — Task-Define starts reaching for external project state. Grounded against NOT-list category 2 (external-context fetching is a different substrate) or category 5 (ecosystem-knowledge use).
3. **Cross-item-interpretation-drift** — Task-Define starts asserting relational claims across items. Grounded against NOT-list category 4 (cross-item interpretation is a different granularity).
4. **Fidelity-verdict-drift** — Task-Define's output starts including adjudication verdicts rather than substantive content. Grounded against NOT-list category 3 (fidelity-verdict emission is a different operation type).

The LAYER 1 modes are detectable in-invocation (the discipline's self-assessment can flag them; downstream consumers can observe them); the LAYER 2 modes are detectable only by behavioral audit across many invocations (per surfacing's pattern). Specific modes are empirically-refined post-authoring — the discipline is in Bootstrap calibration state (no observed-performance data yet); calibration accumulates over the first ~10-20 invocations (Early Operation) and stabilizes around ~30+ invocations (Mature Operation), at which point the mode list can be tightened or extended.

### 9. Self-assessment verdict at end-of-run (PROCEED / FLAG / RE-RUN, with confidence)

At the end of each invocation, Task-Define emits a self-assessment verdict with three shapes plus a confidence attribute:

- **PROCEED** (HIGH / MED / LOW confidence) — all 4-stage operations fired; no LAYER 1 mode self-recognized; output is ready for downstream consumption.
- **FLAG** (HIGH / MED / LOW confidence) — output produced but one or more flags raised; downstream consumer should review the flags before consuming.
- **RE-RUN** — output incomplete or structurally suspect; re-invocation recommended.

The confidence attribute follows Surfacing's per-item relevance-confidence pattern (surfacing ref §2.3); HIGH/MED/LOW reflects the LLM's judgment about the strength of the verdict, not a numerical score.

**Initial FLAG conditions** (4; downstream-actionable; empirically-refined):

(a) Itemize's count = 1 verdict carried HIGH uncertainty (the count=1 vs count>N boundary was close); downstream should consider whether a missed split is plausible.
(b) A meta-question extension was applied but the bounded-extensibility rule's three conditions (a)+(b)+(c) were only partially clearly met; downstream should review the extension.
(c) Rephrase produced only 1 variant despite the MQ-answer-constraint allowing more; downstream should consider whether the rephrasings adequately span the alternatives.
(d) Any LAYER 1 mode was self-recognized at end-of-invocation.

**Initial RE-RUN conditions** (2):

(a) Any LAYER 2 mode was self-recognized (identity-eroding; not recoverable in-invocation).
(b) Receive-step failure — the input task statement is malformed or empty; the discipline cannot proceed.

### 10. Degenerate-case handling (Itemize count = 0)

A degenerate input is one where Itemize emits count = 0 (no items recognized — typically because the input is empty, malformed, or genuinely contains no actionable task). The runtime handles this:

- Phase 2 (per-item Traversal) iterates zero times (no items to iterate over).
- Phase 3 (Assembly) emits an empty per-item bundle list with the self-assessment verdict.
- The self-assessment verdict for a count=0 case is **PROCEED** with a **FLAG** noting "Itemize emitted count=0" — the verdict communicates that the discipline ran successfully and produced no per-item output, allowing the runner to decide whether this is correct (e.g., the input was deliberately empty as a test) or a receive-step failure case (which would map to RE-RUN per §9).

This degenerate-case specification was added at finding-compile time per the critique discipline's optional refinement R-1, as a lightweight edge-case completeness.

### 11. The per-item bundle output shape (commitments at this layer; field names deferred)

Task-Define's output is a per-item bundle — one bundle per item from Itemize. Each bundle is required (at this process layer) to contain the output of every per-item operation:

- The item text itself (the per-item slice of the original task statement, as Itemize emitted it).
- The meta-question answers (per Stage 2; structured per question, with the bounded-extensibility extensions if any).
- The Deconstruct output (per Stage 3a; subject + action + deliverable-shape at minimum).
- The MultiScope output (per Stage 3b; small-scope + big-scope at minimum).
- The Rephrasings (per Stage 4; two or more variants).

The exact field NAMES, the nesting structure, the schema syntax, and the encoding of extension cases are STRUCTURAL-layer concerns — they belong to R1 (the runtime-spec authoring inquiry), not to this process layer. The process layer commits the CONTRACT (which operations must be represented in each bundle); the structural layer commits the SHAPE (what the JSON / YAML / markdown looks like).

### 12. Scope clarification — Task-Define-internal vs runner-side process layer

This inquiry's "process layer" means **Task-Define-internal** — the runtime procedure that Task-Define itself runs when invoked. It does NOT cover:

- The runner-side dispatch logic (how MVLw or MVL+ or classic MVL or any future runner reads MQ2's answer and decides to invoke Exploration); each runner has its own process-layer inquiry for this.
- The runner-side late-split detection (how a runner notices a missed Itemize split and decides to re-invoke); runner-side.
- The runner-side framing-artifact assembly (how a runner incorporates Task-Define's output into the framing it passes to its loop's first discipline); runner-side.
- The structural-layer concerns of R1 (sections, field names, schema syntax for the runtime spec artifact); structural-layer.
- The meaning-layer commitments (what each operation IS as a cognitive act; what Task-Define does NOT do; the lightweight criteria's text); already settled in `15-39` and inherited here without re-litigation.

Out-of-scope items are NOT under-specified — they are explicitly placed in their correct cognitive layer or in a separate inquiry. The Task-Define-internal scope of this finding is what enables a downstream R1 author to write the runtime spec without re-deciding runner-side or meaning-layer or structural-layer concerns; each layer's commitments live where they belong.

## Inherited Commitments Re-test

This finding is downstream of the Task-Define meaning-layer inquiry and inherits commitments from it and from the diagnostic finding that produced the MC1+MC2 maintenance candidates. The sensemaking discipline of this inquiry explicitly re-tested every inherited commitment via its Phase 2 Definitional/Internal-Consistency perspective (12/12 against `15-39` §1-§12) and its Phase 3 ambiguity-collapse pair A9 (LOOP_DIAGNOSE H1+H2 + MC1+MC2). Re-test status per commitment:

| Source | Commitment | Re-test status | Evidence / Reason |
|---|---|---|---|
| `15-39` §1 | Identity: expand-to-define | RE-TESTED | Sensemaking Phase 2 Definitional-Internal-Consistency 12-row table row 1: PASS — process executes expansion at runtime |
| `15-39` §2 | Five operations + refined Itemize (PERCEIVE-default-one) | RE-TESTED | Phase 2 table row 2: PASS — process references mechanism not re-authors; firing-format triple at §3 above honors this directly |
| `15-39` §3 | 4-stage flow | RE-TESTED | Phase 2 table row 3: PASS — embedded as Phase 2 sub-flow at §2 above |
| `15-39` §4 | MQ canonical set + bounded-extensibility rule (a/b/c) | RE-TESTED | Phase 2 table row 4: PASS — process invokes baseline 3 + (a/b/c) gate at MQ extension time |
| `15-39` §5 | Dynamic Exploration division (signal = MQ answers) | RE-TESTED | Phase 2 table row 5: PASS — process commits MQ-answers-as-signal substrate at §5 above; runner-side extraction deferred per scope (§12 above) |
| `15-39` §6 | Pipeline position: pre-pipeline | RE-TESTED | Phase 2 table row 6: PASS — process IS pre-pipeline; runner invokes before its loop's first discipline |
| `15-39` §7 | Single-input + substrate distinction | RE-TESTED | Phase 2 table row 7: PASS — process receives task_statement; substrate is LLM internal cognition (§1 above) |
| `15-39` §8 | Output substantive + per-item | RE-TESTED | Phase 2 table row 8: PASS — process emits per-item bundles (§11 above) |
| `15-39` §9 | Lightweight 6 criteria | RE-TESTED | Phase 2 table row 9: PASS — process passes all 6 at authoring time (§7 above) |
| `15-39` §10 | NOT-list 5 categories intrinsic-grounding | RE-TESTED | Phase 2 table row 10: PASS — process LAYER 2 modes intrinsic-grounded against the 5 NOT-list categories (§8 above) |
| `15-39` §11 | Self-containment of runtime spec | RE-TESTED | Phase 2 table row 11: PASS — R1 will respect no-outbound-pointers; design-history goes to a separate file per project convention |
| `15-39` §12 | Unifying frame analogs (journalism / API-middleware) | INHERITED-WITHOUT-RE-TEST | Analogs are pedagogical, not load-bearing; the process design makes no commitment that depends on them (Phase 2 table row 12: N/A) |
| `01-00` H1 | Name-vs-meaning conflation at sensemaking A8 | RE-TESTED | Sensemaking Phase 3 ambiguity-collapse pair A9: PASS — every process-layer concept is inherited, sister-rooted, or explicitly defined inline (§4 above MC1-honoring rule) |
| `01-00` H2 | Critique dimension absence | RE-TESTED | The critique discipline of this inquiry applied multi-axis prosecution depth (user-perspective + failure-case + specification-gap + dimension-level) per the td-critique spec's MC2 extension — explicit catch of the failure-mode the diagnostic identified |
| `01-00` MC1 | Sensemaking A8 sub-aspect for user-named-operation auto-completed-meaning | RE-TESTED | Sensemaking's Load-bearing concept test applied with the sub-aspect's predicate; all this inquiry's coined concepts have explicit inline definitions; no auto-completed meanings |
| `01-00` MC2 | Td-critique Phase 0 per-operation verb-meaning dimension | RE-TESTED | Critique discipline included a project-specific risk dimension covering per-operation mechanism interrogation; defense-in-depth at downstream evaluation |

15 of 16 commitments re-tested; 1 (the unifying frame analogs) explicitly flagged as INHERITED-WITHOUT-RE-TEST because the process design makes no commitment depending on them — pedagogical, not structural. No silent absorptions.

## Next Actions

### MUST

- **What:** Author Task-Define's runtime reference spec at `cognitive_harness/task-define/references/task-define.md`, transcribing each of this finding's section commitments into spec sections — §1 (3 runtime phases) + §2 (4-stage intra-discipline flow) + §3 (per-operation firing-format triples for the five operations, each with mechanism-reference to `15-39` §2 with as-of-date) + §4 (MC1-honoring authoring rule) + §5 (dispatch substrate + necessary information content) + §6 (re-fire delegation) + §7 (authoring-time enforcement structural reason) + §8 (LAYER 1 + LAYER 2 mode lists) + §9 (PROCEED / FLAG / RE-RUN verdict shape with conditions) + §10 (degenerate-case handling) + §11 (per-item bundle contract, with field names deferred to the spec section that defines the output schema) + §12 (Task-Define-internal scope).
  - **Who:** the runtime-spec author (a future inquiry).
  - **Gate:** condition-bound — before any runner can actually invoke Task-Define via the Skill tool, the spec file must exist (otherwise `Skill(skill: "task-define", ...)` has nothing to load).
  - **Why:** unblocks the entire Task-Define rollout. Until this spec exists, both the meaning layer (15-39) and the process layer (this finding) are paper. The transcription is mechanical — the design decisions are settled here; R1 is structural authoring.

- **What:** When R1 is authored, apply the meaning layer's 6 lightweight criteria as the authoring-time gate per §7 above. Every per-operation firing-format triple + every cross-discipline interface commitment + every failure-mode + every output element must pass each of the 6 criteria. If any criterion fails for a section, revise the section before committing.
  - **Who:** R1 author (same as above).
  - **Gate:** condition-bound — at every section commit during R1 spec-writing.
  - **Why:** authoring-time enforcement is the process-layer commitment; runtime self-enforcement would itself violate criterion (iv). The 6 criteria gate what gets written.

### COULD

- **What:** Empirically test Task-Define on three real task statements (one that should yield count = 1; one that should yield count > 1; one whose MQ2 answer should trigger Exploration). Observe whether the design behaves as committed, particularly: does Itemize correctly default to count = 1 on a single-task statement with multiple specifications? Does MQ2's answer carry information sufficient for runner-side dispatch determination? Does Rephrase honor the MQ-answer constraint?
  - **Who:** human + LLM together; after R1 is authored.
  - **Gate:** condition-bound — after the MUST item "Author Task-Define's runtime reference spec" resolves.
  - **Why:** validates the design empirically; surfaces edge cases not visible on paper; produces initial calibration data toward Early Operation (~10-20 invocations).
  - **Depends-on:** MUST item "Author Task-Define's runtime reference spec." This COULD is GATED — do not act until the MUST resolves.

- **What:** Author the runner-side dispatch process-layer inquiry for the first runner that wants to actually invoke Task-Define and dispatch to Exploration. The runner-side inquiry specifies HOW that runner reads MQ2's answer and decides to invoke Exploration, with that runner's specific pipeline architecture.
  - **Who:** runner-side process-layer inquiry author; one per runner.
  - **Gate:** condition-bound — when a specific runner needs to actually invoke Task-Define and dispatch to Exploration.
  - **Why:** completes the cross-discipline coordination loop. Task-Define's process layer commits the dispatch substrate + locus + necessary information content; the runner-side process inquiry commits the extraction mechanics.
  - **Depends-on:** MUST item "Author Task-Define's runtime reference spec." This COULD is GATED — the spec must exist before a runner can invoke Task-Define and need runner-side dispatch logic.

- **What:** After ~10-20 Task-Define invocations accumulate (Early Operation calibration), review the initial LAYER 1 + LAYER 2 mode lists for empirical refinement — are any modes never observed? Are any common failures not captured by an existing mode? Refine the mode lists based on observed evidence.
  - **Who:** spec maintainer; future inquiry.
  - **Gate:** observable — after ~10-20 invocations have been logged.
  - **Why:** the initial mode lists are best-guess based on meaning-layer + sister-discipline precedent; empirical refinement moves the calibration from Bootstrap to Early Operation per the trajectory at §8 above.

- **What:** Author the discipline's design-history file at `docs/discipline_design_history/for_task-define.md`, adding the process-layer milestone to the existing history (which already documents the meaning-layer settlement). The history file is where the relationship to prior inquiries (15-39, 17-01, 01-00, 02-30, and this finding) is recorded; the runtime spec itself stays self-contained per the project convention.
  - **Who:** spec maintainer; can be done by anyone with edit access.
  - **Gate:** condition-bound — concurrent with R1 authoring.
  - **Why:** preserves load-bearing predecessor context for future readers without violating the runtime spec's self-containment rule.
  - **Depends-on:** MUST item "Author Task-Define's runtime reference spec." This COULD is GATED — the history file references R1 by path; R1 must exist for the path to be valid.

### DEFERRED

- **What:** Final wording for FLAG conditions, RE-RUN conditions, and specific LAYER 1 + LAYER 2 mode names in the runtime spec.
  - **Gate:** condition-bound — when R1 is authored. This finding commits the SHAPES and INITIAL ENUMERATIONS; the runtime spec author commits the exact text with one or two iterations possible as the wording is tested in practice.
  - **Why (if revived):** establishes the canonical FLAG / RE-RUN / mode text the discipline carries forward.

- **What:** If 2+ runners disagree about how to interpret the same MQ2 answer for dispatch determination, escalate to a cross-discipline-coordination inquiry that adjudicates the interpretation — possibly producing a more prescriptive necessary-information-content schema or a shared MQ2-answer convention.
  - **Gate:** observable — 2+ runner disagreements observed.
  - **Why (if revived):** prevents fragmentation of MQ-answer extraction conventions across runners; the meaning layer's `## Open Questions` Refinement Triggers section explicitly flagged this trigger.

- **What:** If a 3rd LOOP_DIAGNOSE chain produces the same authored-in-sensemaking → not-caught-by-critique shape that the prior two chains (`2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain` + `2026-06-04_01-00__loop_diagnose__itemize_default_split_miss`) identified, promote the pattern-claim from MED to HIGH confidence and consider broader changes beyond the current MC1+MC2 narrow refinements (per `01-00` finding's DEFERRED Action item).
  - **Gate:** observable — a 3rd matching LOOP_DIAGNOSE chain.
  - **Why (if revived):** sufficient evidence to justify protocol-level changes (e.g., a project-wide rule about per-operation verb-meaning interrogation).

## Reasoning

### Why a 3-runtime-phase shape with the 4-stage flow embedded inside Phase 2, rather than a 4-phase shape

The meaning layer commits the 4-stage intra-discipline flow as the cognitive ordering Task-Define performs per item; this is structural, not stylistic. The process layer's task was to specify the RUNTIME PHASE shape — the receive-iterate-emit skeleton. The candidate alternative was a 4-phase runtime shape (one phase per stage, no per-item iteration wrapper), or a 5-phase shape (adding an explicit "receive" phase before stage 1). Both alternatives fail because:

- 4-phase loses the per-item iteration unit (Stages 2-4 are per-item; making them runtime-top-level conflates statement-level Itemize with per-item operations).
- 5-phase adds a phase whose only content is "receive" — sub-machinery beyond the operation, violating criterion (iv).

The 3-runtime-phase shape with the 4-stage flow embedded inside Phase 2 preserves both the per-item iteration unit and the lightweight constraint. It mirrors Surfacing's 3-phase shape (Reception → Traversal → Assembly per surfacing ref §3.1), so it's project-rooted rather than invented. The innovation discipline's piece-level Inversion at this commitment tested the depth-2 alternative (no discrete phases at all — just an atomic operation); that alternative fails at system level because it leaves no place for per-item iteration or assembly state. The 3-phase shape is structurally minimal.

### Why mechanism-reference, not mechanism-re-authoring, in the per-operation firing-format

The diagnostic finding (`01-00`) identified that a previous authoring of "Itemize = split into distinct atomic items" was an LLM auto-completion that misaligned with user intent for the user-named "Itemize" operation. The defect entered at sensemaking-time (when the LLM filled in a mechanism for a user-named operation without testing whether the mechanism matched user intent) and survived past critique (because the dimension list didn't include a per-operation verb-meaning probe). The diagnostic's first maintenance candidate (MC1) added a sub-aspect to the sensemaking spec to catch this at sensemaking-time going forward; the second (MC2) added a dimension to the td-critique spec to catch it at evaluation time.

This process layer's mechanism-by-reference rule is the **structural fix at process-layer authoring time** — by referencing the meaning-layer spec instead of re-authoring the mechanism description, the process spec cannot drift into a new LLM-auto-completion. The reference field is mechanical (it cites a section pointer); the meaning is preserved by reference, not by transcription. The candidate alternative — including a brief summary alongside the reference, as a convenience — was tested at the innovation discipline's Inversion depth-check and rejected: any summary introduces re-authoring; pure-reference is the only direction that fully prevents the defect-pattern from recurring.

The version-pin or supersession-anchor commitment (as-of-date) was added at finding-compile time per the critique discipline's refinement R-2; it mitigates a hidden-coupling assumption that decomposition surfaced — without the anchor, the mechanism-reference silently assumes `15-39 §2` will never change, which is a brittle assumption over time.

### Why authoring-time enforcement of the 6 lightweight criteria, not runtime

The candidate alternative was runtime self-enforcement — Task-Define itself checks at runtime whether each operation's output meets the 6 criteria and FLAGs violations. The reason that design fails is **self-referential structural collapse**: criterion (iv) says "no sub-machinery beyond a paragraph"; a runtime self-enforcement mechanism would itself be sub-machinery (additional operation-level logic running on every invocation), which violates the very criterion it's meant to enforce. The rule's enforcement code defeats the rule's intent if the enforcement is procedural-runtime.

The only enforcement locus that doesn't self-collapse is **authoring time** — the 6 criteria gate WHAT GETS WRITTEN into the runtime spec, not WHAT RUNS at runtime. The runtime spec author applies the criteria as a checklist at R1 spec-writing time; the runtime is gate-free.

Defense-in-depth against authoring slippage comes from two independent downstream mechanisms: LOOP_DIAGNOSE-style review (a project protocol that catches violations after-the-fact); and the td-critique discipline's per-operation verb-meaning evaluation dimension (the MC2 sub-aspect that catches violations at downstream evaluation time). Both fire after R1 is authored, so a slip past the author's self-discipline is not silently lost.

### Why MQ-answers-as-dispatch-signal, not a separate `external_context_required` field

The candidate alternative was an explicit `external_context_required: bool` field that Task-Define emits per item. The reason that design fails is **architectural commitment violation**: the project's perception/action split says disciplines perceive and emit content/signals; runners (and the user) interpret and act. A separate dispatch field would make Task-Define DECIDE (the dispatch determination) rather than PERCEIVE (the framing-gap). The MQ2 answer IS the framing-gap perception; the runner reads it and decides.

Also: a separate field would duplicate information already in the MQ2 answer (the answer carries context-need information by design; an additional boolean would be a derivative of the answer that adds nothing). The principle "every output element must be load-bearing for at least one downstream actor's decision" (criterion (vi) of the lightweight stance) would catch this as a violation — a derivative field not used by any actor that the MQ2 answer doesn't already serve.

The candidate was tested at the innovation discipline's piece-level Inversion for P3 and rejected on both structural grounds simultaneously (perception/action split violation + lightweight criterion (vi) violation).

### Why runner-initiated re-fire for late-split recovery, not in-invocation self-re-check

The candidate alternative was Task-Define performing an in-invocation Itemize self-re-check — after Phase 2's per-item operations produce results, check whether the results suggest a missed Itemize split, and re-fire Itemize if so. The reason that design fails: (i) it's runtime self-enforcement, violating criterion (iv) — see the authoring-time enforcement reasoning above; (ii) it violates the perception/action split — late-split recovery is fundamentally an ACTION (re-invoke the discipline with refined framing), not a perception. Putting both perception and action inside Task-Define would blur the architectural distinction.

The recovery responsibility lives where the action happens: at the runner. The runner detects (via downstream signals or user inspection) that a missed split needs recovery, and re-invokes Task-Define with the optional `prior-bundles` parameter that lets the re-invocation skip what was already correctly computed. The pattern is project-rooted at Surfacing (per surfacing ref §3.6 re-invocation-as-parameterized-variation).

### Why the LAYER 1 / LAYER 2 meta-pattern, not a flat failure-mode list or sensemaking's 6-named-modes pattern

The candidate alternatives were: (i) a flat failure-mode list without the layered split, or (ii) sensemaking's 6-named-modes shape (Status Quo Bias / Premature Stabilization / Anchor Dominance / Perspective Blindness / Clean Resolution Trap / Self-Reference Blindness per sensemaking ref Failure Modes). Both fail at the abstraction level:

- A flat list loses the operational-vs-identity-eroding distinction that determines recoverability and detection method. LAYER 1 modes are detectable in-invocation (the discipline self-flags); LAYER 2 modes are detectable only by behavioral audit over time. A flat list conflates these.
- Sensemaking's 6-named-modes are PROCESS-quality patterns ("how analysis goes wrong"); Task-Define's modes need OPERATION-quality patterns ("how individual operation invocations go wrong") — different abstraction level. Surfacing's LAYER 1/2 split matches the operation-level abstraction.

Surfacing's meta-pattern (LAYER 1 = operational, LAYER 2 = identity-eroding, asymmetric-failure principle) is itself project-rooted at a sister Core discipline and generalizes across operations — the META-PATTERN (the layered split) generalizes; the SPECIFIC modes within each layer are discipline-specific and intrinsic-grounded against the meaning layer's structure.

The candidate was tested at the innovation discipline's contrarian variation for P5 Domain Transfer and rejected on abstraction-level mismatch.

### Why the per-item bundle commits CONTRACT not SHAPE

The candidate alternative was committing exact field names + nesting + schema syntax at this layer. The reason that design fails: it pre-empts the structural layer's authoring decisions. The project's discipline-spec convention separates meaning (what the discipline IS) from process (what it DOES at runtime) from structural (how the spec artifact ORGANIZES that). Committing schema syntax at process-layer would invert the dependency — structural decisions would have to fit a pre-committed schema rather than being authored as part of the runtime-spec design.

The process layer commits per-item granularity (one bundle per item; cardinality from Itemize) + bundle contract (each bundle must contain the output of every per-item operation). The structural layer (R1 authoring) commits field names and schema. The two layers are complementary; conflating them silently violates the project's discipline-spec convention.

## Open Questions

### Monitoring

- **Observable after the runtime spec is authored and Task-Define has been invoked on ~10-20 real task statements (Early Operation calibration).** Do the 6 initial LAYER 1 modes fire empirically with similar frequencies, or do some never fire (suggesting they don't represent real failures) while others are insufficient (real failures fall outside the enumeration)? Refine the mode list based on observed evidence.

- **Observable after Task-Define has been invoked across 2+ runners.** Do runners interpret the same MQ2 answer consistently for dispatch determination? If 2+ runners produce different dispatch verdicts for the same answer, trigger the cross-discipline-coordination inquiry (per Next Actions DEFERRED).

- **Observable after the runtime spec is authored.** Does the authoring-time application of the 6 lightweight criteria actually catch heaviness during R1 authoring? If a hypothetical R1 author attempts to add (say) a runtime verify-phase to one of the operations, does the authoring-time check flag it before the addition lands?

- **Observable across the full set of disciplines.** Does the MC1-honoring authoring rule (every coined concept is inherited, sister-rooted, or explicitly defined inline) successfully prevent the LLM-auto-completion defect-pattern from recurring in this process layer's runtime spec — or do downstream LOOP_DIAGNOSE or td-critique reviews catch a violation that this rule was supposed to prevent?

### Refinement Triggers

- **If a per-operation firing-format triple repeatedly fails the version-pin commitment** (the as-of-date or supersession-anchor isn't kept aligned when `15-39` is updated), tighten the rule — possibly automating the supersession-anchor check at R1 authoring time. Trigger: 2+ observed staleness issues.

- **If runtime-spec authors repeatedly violate one of the 6 lightweight criteria** without realizing it, that criterion's wording may need to be tightened. Trigger: 3+ violations of the same criterion across the first 10 R1 authoring/refactoring touches.

- **If the LAYER 1 mode list misses ≥2 multi-item-detected-too-late cases** (cases where the runner caught a missed split that none of the 6 modes captured), the mode list needs to be sharpened — possibly the asymmetric-failure direction needs to be re-examined. Trigger: 2+ observed misses.

### Research Frontiers

- **Whether the runner-side dispatch protocol generalizes across runners** or each runner ends up with substantively different extraction logic. If runners converge on a shared extraction convention, the MQ2 output schema can be tightened; if they diverge, the necessary-information-content commitment may need to be elevated to a shared contract specification. No known path; emerges as runner-side process inquiries accumulate.

- **Whether the multi-head + merging-loop trajectory** (per the project's end-goal loop architecture) changes how Task-Define's per-item granularity interacts with downstream pipelines. When Itemize emits count > 1, do downstream runners spawn N parallel sub-inquiries (multi-head pattern)? This finding inherits the meaning-layer commitment that spawn-mechanics is a runner-side concern; the runner-side process inquiry for the first multi-head runner will adjudicate.

- **Whether Task-Define's design pattern (meaning-layer + process-layer + structural-layer separation with explicit inheritance + MC1-honoring authoring) generalizes to a meta-discipline of how to design lightweight individual disciplines.** If Task-Define's authoring succeeds in practice, the meta-pattern may itself become a template for future discipline-design inquiries. The meaning-layer finding's research frontier (15-39 §Research Frontiers) flagged this; this process layer's authoring confirms the pattern is at least internally consistent across three cognitive layers.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
author Task-Define process layer (DEVELOP)

lets do this
```

</details>
