---
status: active
model: claude-opus-4-7[1m]
effort: unknown
supersedes: devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/finding.md
---

# Finding: Task-Define — Discipline Meaning Layer (Defined From Scratch)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/finding.md` (the last finding in the prior Inquiry-Elaboration arc; see "What's changed" below for the full predecessor list).

**Revision trigger:** User correction with a from-scratch mandate. The user wrote: *"lets redefine our elobarate discipline with different name. Task-Define is the name … and it should be lightweight … what do you think?"* and, after a brief alignment exchange, *"imagine it as from scratch we are defining it."* This is not a refinement of the prior arc; it is a deliberate replacement.

**What's preserved:** project-wide vocabulary (verb-meaning sentence as identity statement; intrinsic-grounded NOT-list pattern; perception-versus-action split as architectural divider between disciplines and their orchestrators; self-containment principle for discipline runtime reference files) — these are shared across all disciplines in this project (`cognitive_harness/surfacing/`, `cognitive_harness/sense-making/`, `cognitive_harness/decompose/`, etc.) and are not Inquiry-Elaboration-specific commitments. Inheriting project-wide vocabulary is not the same as inheriting the prior arc's design choices.

**What's changed:** every load-bearing meaning-layer commitment. The discipline's name changes from "Inquiry Elaboration" to **"Task-Define"**. The verb-meaning changes from the vague "elaborate" to the directional **"expand a task statement into a defined task"** with the mechanism named explicitly (itemization, meta-questioning, deconstruction, multi-scope rendering, constrained rephrasing). The input contract collapses from three inputs (`project_goal`, `original_query`, `recent_context`) to **one input** (the raw task statement); the prior anchor-grounded rephrasings disappear; the prior verify-phase + fidelity verdict + halt-with-one-bounce gate disappear; the prior process-layer's two adoption protocols (`reference_authority_check.md`, `inquiry_elaboration_adoption.md`) become mostly obsolete for Task-Define.

**What's new:** the **lightweight stance**, made operational rather than aspirational — enforced via five concrete criteria a structural-layer spec author can use as a checklist. The **dynamic Task-Define / Exploration division** where Exploration runs conditionally based on Meta-question answers (not unconditionally) — implementing the project's perception/action split at the cross-discipline boundary. The **open-with-extension Meta-question canonical set** (three base questions plus a bounded-extensibility rule). The **NOT-list intrinsic grounding pattern** (every exclusion grounded in Task-Define's own character, not by reference to neighbors or to "what the prior arc had").

**Migration:** the prior arc's findings (eight inquiries spanning `2026-05-31_22-30__inquiry_elaboration_discipline_or_not/` through `2026-06-01_15-28__inquiry_elaboration_process_layer/`) are SUPERSEDED-BY-PROPOSAL by this design. Bookkeeping note: the predecessor-acknowledgement does NOT live in Task-Define's runtime reference file (that would violate the project's self-containment rule for discipline specs); it lives in a separate file at `docs/discipline_design_history/for_task-define.md` per the project's discipline-history convention.

## Question

From `_branch.md`:

**Question.** Defined from scratch (the prior Inquiry-Elaboration arc is set aside, not inherited as a commitment), what IS **Task-Define** as a discipline at the meaning layer — its identity (the name plus the cognitive operation it performs), its five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) and what each produces, the dynamic ordering and role of Meta-question (run first per item; scope-and-context-need determination; constrains rephrasings to prevent meaning-lock; the open meta-question set), the dynamic Task-Define / Exploration division (Task-Define does the task-side work using the LLM's own internal context; Exploration runs only when meta-question answers reveal external project-context is needed), the input contract (one input plus the LLM's internal context as substrate), the NOT-list (what Task-Define does not do; grounded intrinsically), and the lightweight stance (load-bearing — every operation must pull its weight)?

**Goal.** Settle the meaning layer cleanly enough that the next inquiry (structural-layer authoring of Task-Define's spec file) can act without re-opening meaning-layer questions. Honor what the user explicitly wanted: a lighter, clearer discipline than the prior Inquiry-Elaboration arc had become; an honest from-scratch design that doesn't silently re-inherit the prior arc's accumulated machinery.

**What would fail:** silently re-introducing the prior arc's machinery (a verify-phase emitting PASS/FLAG; external anchor inputs); leaving "lightweight" as a label rather than an actionable constraint; treating meta-questions as static seeds rather than dynamic scope-determiners; producing a spec that is heavy by accident (each operation expanding into elaborate sub-machinery); failing to make explicit what the discipline does NOT do.

## Finding Summary

- **Identity.** Task-Define is the cognitive operation of **expanding a task statement into a defined task** — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing. Expansion is the mechanism; definition is the outcome.

- **Five operations** running in a 4-stage intra-discipline flow:
  - Stage 1 (statement-level): **Itemize** — perceive whether the statement contains multiple completely-different tasks; default emit one item, emit N only when distinct (subject, action, deliverable-shape) tuples are clearly established.
  - Stage 2 (per item): **Meta-question** — apply meaning-layer questions about the item to determine its scope and whether external context is needed.
  - Stage 3 (per item, parallel): **Deconstruct** (subject + action + deliverable-shape) and **MultiScope** (small-scope + big-scope versions).
  - Stage 4 (per item, last): **Rephrase** — alternative formulations, constrained by the Meta-question answers so as not to lock meaning in the wrong space.

- **Meta-question canonical set (open-with-extension).** Three base questions form the lightweight baseline:
  - **MQ1 (scope-axis):** "What scope does this task refer to? — in terms of time horizon, conceptual scope, project scope, feature scope, cross-cutting concern, or other."
  - **MQ2 (context-need-axis):** "Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"
  - **MQ3 (intent-vs-surface-axis):** "What is the underlying intent (vs the surface ask)?"

  Additional meta-questions may be added per item when the LLM perceives a need, bounded by three rules: (a) must be about the task's structure or framing (its kind, scope, intent, granularity) — NOT a question requiring external state-gathering or ecosystem knowledge to answer; (b) must constrain Rephrase, not float freely; (c) must be expressible in one sentence.

- **Input contract.** One input — the raw task statement. The **LLM's internal context** is the discipline's substrate (universal to any LLM-implemented discipline) and is not listed as a separate input.

- **Output.** A more-defined task: **substantive content** (carries content, not verdicts of input-vs-output faithfulness) and **per-item** (each item from Itemize has its own bundle of Meta-question answers, deconstructed parts, multi-scoped versions, and rephrasings). The exact output schema is a structural-layer concern, deferred.

- **Dynamic Task-Define / Exploration division.** Task-Define does the task-statement-side work using the LLM's internal cognition. **Exploration** (the existing Core discipline at `cognitive_harness/explore/` — the discipline that finds project-context) runs **conditionally** after Task-Define and before the loop disciplines, when the Meta-question answers (especially MQ2's context-need answer) signal that external context is needed. **The Meta-question answers themselves are the signal** — no separate `needs_external_context` field. The runner orchestrating the pipeline reads the answers and decides whether to invoke Exploration. This honors the project's perception/action split: Task-Define perceives the framing-gap; the runner acts.

- **Pipeline position.** Task-Define runs **pre-pipeline** — before the runner's first loop discipline. The justification is structural: Task-Define's output IS the framing the loop disciplines operate on; if Task-Define ran inside the loop, the framing would already be in use. For specific instances of adopting runners (illustrative, not load-bearing), see the Reasoning section below.

- **Lightweight stance — operationalized as 6 enforcement criteria.** The structural-layer spec author can use the criteria as a checklist; a violation is a defect.
  - (i) No separate-verdict verify-phase emitting PASS/FLAG or any equivalent adjudication.
  - (ii) No external-anchor inputs to the discipline.
  - (iii) No halt-gate output from the discipline (no signal that gates a runner's loop continuation).
  - (iv) No sub-machinery within an operation beyond a single paragraph in the spec.
  - (v) No ecosystem-knowledge reach (no fetching deprecated-spec lists, currency checks, project-history awareness).
  - (vi) Every output element must be load-bearing for at least one downstream actor's decision. Auxiliary fields without a named downstream consumer are excluded — even if not separately emitted as verdicts and not used to gate. (This closes a specific exploit path where a verify-axis could slip in as an unused output field.)

- **NOT-list — intrinsically grounded; 5 exclusion categories.** Every NOT-list entry grounds in Task-Define's own character (verb = expand-to-define; substrate = task statement + LLM internal cognition; granularity = per-item). The structural-layer spec author writes the exact per-entry wording; the meaning layer commits to the categories:
  - **Verification operations** (fidelity adjudication; PASS/FLAG over input-vs-output faithfulness) — excluded because Task-Define's verb is expand-to-define, not verify.
  - **External-context fetching** — excluded because Task-Define's substrate is task statement + LLM internal cognition, not the surrounding project.
  - **Fidelity-verdict emission** — excluded because Task-Define's output is substantive content, not adjudication.
  - **Cross-item interpretation / cross-task relational meaning** — excluded because Task-Define operates at per-item granularity.
  - **Ecosystem-knowledge use** — excluded because Task-Define's substrate excludes project state.

- **Self-containment.** Task-Define's runtime reference spec (the file the discipline is loaded from at run time) contains no outbound pointers to design history, theory folders, or other disciplines. The discipline is an individual. Predecessor-acknowledgement (the relationship to the prior Inquiry-Elaboration arc) lives in a separate design-history file, not in the runtime spec.

## Finding

This inquiry was triggered by a user-initiated reframing of a discipline that had been under development across the prior day. The discipline — initially named **Inquiry Elaboration** — had accumulated, across roughly eight successive inquiries, a sequence of additions (a three-input contract; five anchor-grounded rephrasings; a fidelity verify-phase; a halt-with-one-bounce runtime gate; two new runner-side protocols at the process layer). Each addition addressed a real concern at the time it was added, but the cumulative effect was a discipline that no longer matched the simple cognitive operation the user originally wanted. The user's reframe was direct: a different name, a clearer verb, three concrete operations he could enumerate (MultiScope, Deconstruct, Itemize), and an explicit *"and it should be lightweight."* Across a short alignment exchange, two additional operations (Rephrase and Meta-question) were folded in, and the dynamic relationship to Exploration was settled. The final user directive — *"imagine it as from scratch we are defining it"* — authorized this inquiry to set the prior arc aside entirely rather than refine it.

The reason a from-scratch redefinition needed its own meaning-layer inquiry (rather than being a brief renaming exercise) is that the prior arc's design choices weren't only conventions to be renamed — they were architectural commitments that constrained where complexity could live. Removing the three-input contract has ripple effects: no anchor-rephrasings (no anchors to ground them in); no fidelity verify-phase (no input-output mismatch to verify against); no halt-with-one-bounce gate (no verdict to halt on); and the cross-runner adoption contract simplifies dramatically (one substantive output instead of three outputs across distinct interfaces). The meaning layer needed to settle what Task-Define *is* before the next inquiry (a structural-layer authoring pass) writes the spec file, and before any process-layer work re-instantiates the lighter runtime.

### 1. Identity — what Task-Define IS as a cognitive operation

Task-Define's verb-meaning, stated as the load-bearing identity sentence the structural spec uses:

> **Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing.**

The user's name choice ("Task-Define") and the user's verb-phrase choice ("Expand task definition by …") read as if they're in tension — one is a settle-the-identity verb, the other is an open-and-broaden verb. The synthesis is that they're not in opposition: expansion is the mechanism by which definition is reached. A task statement is initially compact; the five operations expand it across multiple axes (items, meta-questions, parts, scopes, angles); what emerges from the expansion is a defined task the loop disciplines can operate on. The mechanism is expansive; the outcome is definitional.

This verb-meaning also locates Task-Define among its sibling Core disciplines. Sense-making operates on a problem and produces a stabilized model (its verb is closer to *compress-to-define* — identify the essential and discard the rest). Surfacing draws relevance-tagged items from a bounded territory. Decomposition perceives coupling topology. Innovation generates novel ideas. Critique evaluates candidates. Task-Define joins this family at a distinct granularity — it operates on a task statement (more granular than Sense-making's problem; less granular than Surfacing's items) — and at a distinct operation (expand-to-define rather than organize-into-stable-model).

### 2. The five operations — what each does, in one paragraph each

The operations are committed at the meaning layer with one-paragraph mechanism descriptions. The structural-layer spec will instantiate these into spec sections with exact field names and output schemas; the meaning layer commits to *what each operation does as a cognitive act*.

- **Itemize** (statement-level) — input: the raw task statement. Mechanism: PERCEIVE whether the statement contains multiple **completely-different tasks** — tasks distinguished by distinct (subject, action, deliverable-shape) tuples — versus a single task with multiple specifications. Specifications of one task vary along properties (e.g., "lightweight," "from-scratch"), constraints, operation details, illustrative clauses, rationales, or invitations, but converge on the same (subject, action, deliverable-shape) tuple. Multiple tasks have N distinct tuples.

  The cost of premature-split (separating coherence in a single-task statement; downstream operations operate on fragments; meaning-lock in the wrong space) is structurally **irrecoverable**. The cost of late-split (a multi-task statement treated as one — downstream Meta-question's context-need answer and the user's reading of the framing artifact can catch and correct; if catch fails, the option to re-fire Itemize after later discovery still exists, because the original statement is preserved verbatim in the framing artifact) is **recoverable-in-principle**. The operation biases toward **keep-together**: default emit **one item** (the whole statement); emit N items only when clearly distinct (subject, action, deliverable-shape) tuples are established. When ambiguous between specifications-of-one-task and multiple-distinct-tasks, default to one item.

  The operation is load-bearing in both single-item and multi-item cases. When count = 1, the verdict itself is the signal to the runner — "process in place; do not spawn." When count > 1, the runner spawns N sibling inquiries (one per item). Without Itemize's perception, the runner has no signal to determine spawn-or-process-in-place. Output: a list of items with cardinality ≥ 1.

  *Worked positive example* (Itemize fires; count > 1): *"fix the auth bug AND build the billing feature."* Distinct subjects (auth vs billing), distinct actions (fix vs build), distinct deliverable-shapes (bug-fix vs feature-implementation). Itemize emits two items: item 1 = "fix the auth bug"; item 2 = "build the billing feature."

  *Worked negative example* (Itemize does not fire; count = 1): a statement that bundles multiple specifications of one task — for instance, *"redefine the discipline with a different name, make it lightweight, use these operations, and apply this from-scratch stance."* Single subject (the discipline being redefined), single action (redefine), single deliverable-shape (the redefined-discipline definition). The specifications (name, lightweight, operations, from-scratch) are facets of the one task. Itemize emits one item: the whole statement.

- **Meta-question** (per item) — input: one item. Mechanism: apply the canonical Meta-question set (the three base questions plus any extensions warranted under the bounded-extensibility rule; see §4 below) to the item, producing per-question answers. These answers serve two purposes: they are signals to downstream consumers (signaling whether the item needs external context — see §5 below); and they constrain the per-item Rephrase operation later in the flow (preventing rephrasings from locking meaning in the wrong space). Output: a structured set of meta-question answers per item.

- **Deconstruct** (per item) — input: one item. Mechanism: analyze the item into its constituent parts. At minimum: the subject (what the item is about), the action (what cognitive operation it asks for), and the deliverable-shape (what form the result takes). The structural spec may add more parts; the meaning-layer commitment is that Deconstruct is item-internal analysis into structural parts. Output: a structured parts-record per item.

- **MultiScope** (per item) — input: one item. Mechanism: produce versions of the item at multiple scales. At minimum: a small-scope version (the narrowest defensible interpretation) and a big-scope version (the widest defensible interpretation). The Meta-question answers inform what "scope" means for this particular item — for instance, an item flagged by MQ1 as time-horizon-scoped will have small/big-scope versions that differ along time horizons, whereas an item flagged as conceptual-scope will differ along conceptual breadth. Output: two or more scope-versions per item.

- **Rephrase** (per item, last) — input: one item plus its Meta-question answers. Mechanism: produce alternative formulations of the item — different vocabularies, different emphases, implicit-rendered-explicit — *constrained by the Meta-question answers* so as not to lock meaning in the wrong space. This is the safety mechanism that makes Meta-question's first-per-item ordering load-bearing: if Rephrase ran without Meta-question's constraint, the rephrasings could drift to a vocabulary that traps later disciplines in the wrong interpretation. With the constraint, the rephrasings stay anchored to the perceived task structure. Output: two or more rephrasings per item.

### 3. The intra-discipline ordering and its rationale

The five operations execute in a 4-stage flow per item:

| Stage | Operation(s) | Why this position |
|---|---|---|
| 1 (statement-level) | Itemize | Determines the units the rest operate on |
| 2 (per item) | Meta-question | Determines scope and context-need; constrains Stage 4 |
| 3 (per item, parallel) | Deconstruct + MultiScope | Both consume the same Meta-question answers and produce independent outputs — no dependency on each other |
| 4 (per item, last) | Rephrase | Constrained by the Meta-question answers from Stage 2; can't run earlier |

The ordering is structural, not stylistic. Itemize precedes everything because the other four operate per item. Meta-question precedes the per-item analytic operations because its answers shape what "scope" means for MultiScope and what "constraint" means for Rephrase. Deconstruct and MultiScope parallelize because they're independent: knowing the item's parts doesn't change what its scope variants are, and vice versa. Rephrase comes last because its load-bearing safety mechanism (preventing meaning-lock in the wrong space) depends on Meta-question's answers existing first.

A reordering — for example, running Rephrase before Meta-question — would remove the safety mechanism and let Rephrase drift. The intra-discipline ordering is part of Task-Define's identity, not a stylistic preference.

### 4. The Meta-question canonical set and the bounded-extensibility rule

The Meta-question canonical set is **open-with-extension**: three base questions form the lightweight baseline, and the LLM running the discipline may add additional questions per item when it perceives a need, bounded by three rules.

The three base questions:

- **MQ1 (scope-axis):** *"What scope does this task refer to? — in terms of time horizon, conceptual scope, project scope, feature scope, cross-cutting concern, or other."*
- **MQ2 (context-need-axis):** *"Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"*
- **MQ3 (intent-vs-surface-axis):** *"What is the underlying intent (vs the surface ask)?"*

The bounded-extensibility rule (three bullets, all required for an extension to qualify):

- (a) Must be a question about the task's **structure or framing** — its kind, scope, intent, granularity — NOT a question requiring external state-gathering or ecosystem knowledge to answer. This rule has a specific exclusion target: it prevents extensions like *"What are all the project-wide commitments, ecosystem dependencies, and stakeholder concerns relevant to this task?"* — questions that would require Task-Define to reach for project state, violating the substrate exclusion.
- (b) Must **constrain Rephrase** (i.e., the answer materially shapes how Rephrase produces alternative formulations for this item). A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded.
- (c) Must be **expressible in one sentence** (a sentence-length cap that applies the lightweight criterion (iv) at the meta-question level).

The reason for open-with-extension rather than a closed three-question set: a fully-closed three-question set over-fits to a small specific set of canonical examples (and the user explicitly rejected this by saying *"more than these 3, or better refined"*); a fully-open anything-goes set undermines the constraint Rephrase needs to remain safe. The synthesis preserves the lightweight stance (the baseline is small) while respecting that real tasks vary in ways the canonical three may not anticipate.

### 5. The dynamic Task-Define / Exploration division

The division between Task-Define and **Exploration** (the existing Core discipline at `cognitive_harness/explore/`, which finds project-context relevant to an inquiry) is dynamic — it varies task-by-task rather than being a fixed coupling.

Task-Define operates on the task statement using the LLM's internal cognition. When the Meta-question answers (especially MQ2's context-need answer) reveal that the task requires external project-context to make sense or be done right, Exploration runs after Task-Define and before the loop disciplines. When the answers reveal the task is self-contained — for example, a task purely about restructuring an internal thought, or a task that doesn't depend on the project's surrounding state — Exploration is skipped and the runner proceeds directly to the loop's first discipline.

The mechanism that conveys the need is: **the Meta-question answers themselves are the signal.** Task-Define does not emit a separate `needs_external_context` boolean or any explicit dispatch directive. The runner orchestrating the pipeline reads the Meta-question answers and decides whether to invoke Exploration. This honors the perception/action split that runs throughout this project's architecture: Task-Define perceives the framing-gap (via the meta-questions); the runner acts on the perception. If Task-Define emitted a separate explicit field saying "you should invoke Exploration," it would be deciding rather than perceiving — which would blur the architectural distinction between disciplines (which perceive) and orchestrators (which act).

The exact mechanism by which the runner reads the Meta-question answers and dispatches Exploration is a process-layer concern, deferred to a future inquiry. At the meaning layer, the commitment is that the signal-substrate is the Meta-question answers, and that no separate decision-field exists.

### 6. Pipeline position

Task-Define runs **pre-pipeline** — before the first discipline of the runner's loop. The structural reason: Task-Define's output IS the framing the loop disciplines operate on. If Task-Define ran inside the loop, the loop would already be running with some prior framing, and Task-Define's output would have nowhere to be encoded. The framing-producing discipline must be upstream of the framing-consuming disciplines.

The runner-side specifics (where exactly Task-Define is invoked in any particular runner's pipeline; how the runner's framing artifact incorporates Task-Define's output) are process-layer concerns. The meaning-layer commitment is positional: pre-pipeline. (For illustrative examples — not load-bearing — `/MVLw` runs a 5-discipline loop, so Task-Define runs before Surfacing in that runner; `/MVL+` runs a 5-discipline loop starting with Exploration, so Task-Define runs before Exploration in that runner. Any other runner with its own pipeline would invoke Task-Define before that pipeline's first discipline. The ordering is the contract; specific runner names are instances.)

### 7. Input contract and substrate distinction

Task-Define receives **one** input: the raw task statement (the user's request as given, verbatim).

The LLM's internal context — what the LLM happens to know, what it has been exposed to in its training, what is loaded in the current session — is the discipline's **substrate**, not an input. This distinction matters because inputs are exogenous (passed in by an upstream actor) while substrates are endogenous (universal to whatever cognitive system is running the discipline). Stating "the LLM's internal context" as an input would be analogous to stating "the LLM" as an input. Both are implicit to any LLM-implemented operation. Making them explicit conflates the discipline's interface with the discipline's running environment.

The single-input contract is what makes Task-Define lightweight at the I/O surface. The prior arc's three-input contract required the discipline (and the runner invoking it) to source two anchor inputs (`project_goal`, `recent_context`), with graceful-degradation markers for absent anchors, and per-anchor rephrasings of the question. That entire machinery dissolves at one-input: there is one thing to handle, no anchors to fetch, no graceful-degradation to wire.

### 8. Output shape

Task-Define's output is a more-defined task — **substantive** (carrying content, not adjudication verdicts of input-output faithfulness) and **per-item** (each item produced by Itemize has its own bundle of Meta-question answers, deconstructed parts, multi-scoped versions, and rephrasings).

The exact output schema — field names, field shapes, nesting structure — is a structural-layer concern, deferred to the next inquiry. The meaning layer commits to *substantive* (because the discipline's verb is expand-to-define and the output is the expansion) and to *per-item* (because the discipline operates at per-item granularity after Itemize splits the statement).

### 9. The lightweight stance — what it means concretely

The user's directive *"and it should be lightweight"* is operationalized as six enforcement criteria the structural-layer spec author can use as a checklist. At authoring time, every operation, output element, and sub-section must pass all six; a violation is a defect.

The criteria, with one line of explanation each:

- (i) **No separate-verdict verify-phase.** Task-Define does not run any internal verification stage that emits a separate verdict (PASS/FLAG, fidelity-score, or equivalent) beyond the operation's direct output. The user is the fidelity-checker; the discipline does not pre-empt that role.
- (ii) **No external-anchor inputs.** Task-Define does not receive `project_goal`, `recent_context`, or any non-task-statement input. The substrate is task statement + LLM internal context only.
- (iii) **No halt-gate output.** Task-Define does not emit any signal that gates a runner's loop continuation (no halt-before-loop output; no bounce-budget; no separate-halt-tier semantics).
- (iv) **No sub-machinery beyond a paragraph.** Each operation's spec description is one paragraph (one cohesive mechanism description). No sub-protocols, no separate output-axes inside an operation, no multi-stage internal verifiers.
- (v) **No ecosystem-knowledge reach.** Task-Define does not fetch deprecated-spec lists, currency-of-references information, project-history awareness, or any other ecosystem-state. The substrate is bounded to the task statement + LLM internal context.
- (vi) **Every output element must be load-bearing for at least one downstream actor's decision.** Auxiliary fields without a named downstream consumer are excluded — even if not separately emitted as verdicts and not used to gate. This criterion closes a specific exploit path: a verify-axis could otherwise slip into Deconstruct or another operation as an unused output field, satisfying criteria (i)–(v) while still violating the lightweight stance's spirit.

The criteria themselves are not heavy (six short bullets). What they EXCLUDE is the prior arc's growing complexity — the verify-phase, the anchor-rephrasings, the halt-tier-semantics, the adoption-contract overhead. The lightweight stance graduates from label to enforceable constraint via this checklist.

### 10. The NOT-list — intrinsic grounding pattern and five exclusion categories

Every entry in Task-Define's NOT-list grounds in an intrinsic feature of the operation — Task-Define's own character — not by reference to neighbor disciplines and not by reference to "what the prior arc had but Task-Define doesn't." The grounding rule is structural: an entry phrased as *"Task-Define doesn't X because [prior arc/predecessor] had X"* or *"Task-Define doesn't X because that's [neighbor discipline]'s job"* is a defect; the author must re-ground in Task-Define's own verb (expand-to-define), substrate (task statement + LLM internal cognition), or granularity (per-item).

The structural-layer spec author writes the exact per-entry wording. The meaning layer commits to five load-bearing exclusion categories, each with intrinsic grounding:

| # | Excluded | Intrinsic ground |
|---|---|---|
| 1 | **Verification operations** (fidelity adjudication; PASS/FLAG over input-output faithfulness; transcription audits) | Task-Define's verb is EXPAND-TO-DEFINE; fidelity adjudication is a different verb (VERIFY) at a different operation type |
| 2 | **External-context fetching** (reaching for surrounding project state, project-goal sources, recent-context files) | Task-Define's substrate is task statement + LLM internal cognition; reaching elsewhere is a different verb (DRAW-FROM-ELSEWHERE) |
| 3 | **Fidelity-verdict emission** (PASS/FLAG outputs, faithfulness-scores) | Task-Define's output is SUBSTANTIVE CONTENT; emitting verdicts is a different operation type (adjudication) |
| 4 | **Cross-item interpretation / cross-task relational meaning** | Task-Define operates at PER-ITEM granularity; cross-item operations are a different verb at a different granularity. *Note on Itemize's multi-detection vs cross-item interpretation:* Itemize's perception of WHETHER multiple distinct tasks exist (count-perception) is intrinsic to itemization and is NOT the cross-item interpretation excluded here. Cross-item interpretation is the operation of claiming relational meaning across items once separated (e.g., "item 1 enables item 2"; "items A and B share a common abstraction"); count-perception is the operation of perceiving cardinality. They are distinct cognitive operations; only the relational one is excluded by this category. |
| 5 | **Ecosystem-knowledge use** (deprecated-spec awareness; currency-of-references checks; project-history awareness) | Task-Define's substrate excludes project state; ecosystem-knowledge use is a different verb (READ-PROJECT-STATE) |

The self-containment check the author should apply: any NOT-list entry containing a phrase that names a specific neighbor discipline or a specific prior arc in a load-bearing position fails this piece's verification and must be re-grounded.

### 11. Self-containment and predecessor-acknowledgement

Task-Define's runtime reference spec (the file the discipline is loaded from at run time, conventionally at `cognitive_harness/task-define/references/task-define.md`) contains **no outbound pointers** to design history, theory folders, or other disciplines. This honors the project's standing convention for discipline runtime reference files (memory: `feedback_disciplines_self_contained`).

The predecessor-acknowledgement — the fact that Task-Define replaces the prior Inquiry-Elaboration arc — is load-bearing for future readers but does not belong in the runtime spec (an outbound pointer to design history would violate self-containment). It lives in a separate design-history file at `docs/discipline_design_history/for_task-define.md`, per the project's discipline-history convention (memory: `project_discipline_design_history_location`). A future reader who wants to know "why does Task-Define exist instead of Inquiry-Elaboration?" finds the answer in the design-history file; a future reader who wants to invoke Task-Define finds the runtime spec self-sufficient.

### 12. The unifying frame — why the design is non-arbitrary

Two analogs make the design memorable and confirm that each commitment is non-arbitrary:

- **The journalism 5W+H analog.** A reporter takes a story-idea and runs it through *Who / What / Where / When / Why / How* to define the story before writing it. Task-Define IS that operation for the cognitive pipeline: a task statement comes in; the five operations expand it into a defined task before the loop disciplines work on it. The journalism framework is also open-with-extension — additional questions arise per story ("What's the visual?", "Who's the antagonist?") — exactly the bounded-extensibility pattern Task-Define uses for the Meta-question canonical set.

- **The API-gateway-middleware analog.** In service architectures, a request-normalizing middleware sits in front of the service: it normalizes, validates, and routes the request before the service runs. Task-Define is that middleware for the cognitive pipeline, but lighter than the prior arc's was — no validation gate, no halt-tier semantics, just framing. Each NOT-list category becomes "business logic the gateway doesn't run" (verification is service-layer; ecosystem-knowledge is service-layer; etc.) — making the exclusions non-arbitrary.

These analogs are not part of the spec; they are sensemaking devices that confirm the design coheres with familiar architectural patterns. The structural-layer spec author may cite them or ignore them.

## Next Actions

### MUST

- **What:** Author Task-Define's runtime reference spec at `cognitive_harness/task-define/references/task-define.md`, instantiating the 12 meaning-layer commitments above into the project's standard discipline-spec structure (Identity / Components / Process Model / Quality / Output, following the sibling-discipline pattern at `cognitive_harness/surfacing/references/surfacing.md` and `cognitive_harness/sense-making/references/sensemaking.md`).
  - **Who:** the structural-layer spec author (next inquiry).
  - **Gate:** condition-bound — before any runner can actually invoke Task-Define via the Skill tool, this spec file must exist (otherwise the `Skill(skill: "task-define", ...)` invocation has nothing to load).
  - **Why:** unblocks the whole Task-Define rollout. Until this spec exists, the meaning layer settled here is paper.

- **What:** Author the discipline's design-history file at `docs/discipline_design_history/for_task-define.md`, containing the predecessor-acknowledgement (Task-Define replaces the prior Inquiry-Elaboration arc spanning the eight inquiries from `2026-05-31_22-30__inquiry_elaboration_discipline_or_not/` through `2026-06-01_15-28__inquiry_elaboration_process_layer/`). The acknowledgement does NOT live in the runtime spec.
  - **Who:** the structural-layer spec author (concurrent with the runtime spec authoring).
  - **Gate:** condition-bound — concurrent with the runtime spec.
  - **Why:** preserves load-bearing predecessor context for future readers without violating the runtime spec's self-containment.

- **What:** Mark the prior Inquiry-Elaboration arc findings as `SUPERSEDED BY` this finding, in each prior finding's `## Relationships` section.
  - **Who:** administrative bookkeeping; can be done by anyone with edit access (likely the same author as the structural spec).
  - **Gate:** condition-bound — after the structural spec exists and Task-Define is invocable, so the supersession is concrete rather than aspirational.
  - **Why:** keeps the prior findings discoverable as historical record while preventing future readers from acting on commitments the new design has departed from.

### COULD

- **What:** Author Task-Define's process layer (how runners invoke it; the runner-side dispatch logic for the conditional Exploration invocation; the cross-runner adoption contract).
  - **Who:** a future inquiry author.
  - **Gate:** condition-bound — after the structural spec exists AND at least one runner wants to actually invoke Task-Define in practice.
  - **Why:** completes the meaning → structural → process trio. The process layer is expected to be substantially lighter than the prior arc's 15-28 process design — the fidelity gate + halt-tier semantics + adoption protocol all disappear, replaced by a much simpler "pre-pipeline invocation; runner reads MQ2 answer to decide whether to call Exploration."
  - **Depends-on:** MUST item "Author Task-Define's runtime reference spec." GATED.

- **What:** Empirically test Task-Define on a real task statement (one that should yield multiple items; one that's self-contained; one that needs Exploration) and verify the design behaves as committed.
  - **Who:** human + LLM together.
  - **Gate:** condition-bound — after the structural spec exists and is loadable.
  - **Why:** validates the design empirically. Paper designs can hide edge cases (e.g., what does Itemize do with a statement that's ambiguous between one ask and two?).
  - **Depends-on:** MUST item "Author Task-Define's runtime reference spec." GATED.

### DEFERRED

- **What:** Final wording for the three base Meta-questions (MQ1/MQ2/MQ3) and the three extension-rule bullets.
  - **Gate:** condition-bound — when the structural spec is authored. The meaning layer commits to the QUESTIONS and the RULE; the structural layer commits to the exact wording (with one or two iterations possible as the wording is tested in practice).
  - **Why (if revived):** establishes the canonical Meta-question text that the discipline carries forward.

- **What:** Detailed examination of journalism 5W+H, API-gateway-middleware, or any other unifying analog as a pedagogical aid for the spec.
  - **Gate:** condition-bound — only if the structural-layer author finds the spec hard to introduce without an analog.
  - **Why (if revived):** the analogs are memorable but not load-bearing; including them is a stylistic choice, not a requirement.

## Reasoning

### Why "from scratch" rather than "refine the prior arc"

The strongest counter-design was a fifth iteration of the prior Inquiry-Elaboration arc: keep the three-input contract, keep the verify-phase, keep the anchor-rephrasings, but rename to Task-Define and lighten where possible. The reason that design fails: the prior arc's commitments are interlocking — removing any one (the verify-phase, say) requires unwinding what it justified (the halt-with-one-bounce gate; the runner-side adoption protocol's verdict-handling). At the user's verbatim directive *"imagine it as from scratch we are defining it,"* attempting to refine while preserving any of the load-bearing prior commitments would silently re-import the very heaviness the user was rejecting. A from-scratch design is honest; a refinement under the guise of from-scratch is not.

The convergence is independent: (a) the user's verbatim "from scratch" directive; (b) the prior arc's accumulated complexity (verified by reading the 15-28 finding — four piece-types, two new protocols, gate-tier semantics, adoption contract); (c) the sibling-discipline pattern (surfacing, sense-making, decompose, routelister all have one-paragraph operation descriptions and intrinsic-grounded NOT-lists; Task-Define matches that pattern, the prior arc had moved away from it).

### Why "expand-to-define" as the verb-meaning synthesis

Two simpler verb choices were considered and rejected:

- **"Expand" alone** (matching the user's verb-phrase "Expand task definition by …"): describes the mechanism well but doesn't name the outcome. A discipline that only expands without converging produces sprawling output that the loop disciplines can't use as a framing. Naming the outcome (definition) anchors the expansion.

- **"Define" alone** (matching the discipline name "Task-Define"): names the outcome well but doesn't name the mechanism. The user explicitly chose "Expand task definition by …" as the operation phrase; making "Define" the primary verb privileges the name over the user's verb-choice.

The synthesis preserves both load-bearing user-language elements (Expand + Define) and locates them at distinct architectural roles (mechanism + outcome).

### Why "Itemize → Meta-question → Deconstruct + MultiScope (parallel) → Rephrase" rather than another ordering

Three alternative orderings were considered:

- **All five operations in arbitrary order, runtime-determined.** Removes the safety mechanism that Meta-question provides for Rephrase — Rephrase could fire first and drift to wrong-vocabulary. Fails the load-bearing constraint commitment.

- **Itemize → Deconstruct + MultiScope + Meta-question (all parallel per item) → Rephrase.** Meta-question's first-per-item position is necessary because MultiScope's "scope" depends on what kind of scope (time / concept / project / feature) the item is at, which is exactly what MQ1 determines. Running them in parallel means MultiScope might pick the wrong scope-axis. Constraint chain breaks.

- **Itemize → Meta-question → Deconstruct → MultiScope → Rephrase (sequential, no parallelism).** Sequential works but loses the observation that Deconstruct and MultiScope are independent: knowing the item's parts doesn't change what its scope variants are. Parallelism is a clarity gain, not a correctness commitment; either sequential or parallel-stage-3 would be defensible. Parallel-stage-3 is the meaning-layer commitment because it makes the independence explicit; the runtime may serialize for implementation convenience.

### Why "Meta-question answers ARE the signal" rather than a separate field

The strongest counter was a separate `needs_external_context: bool` field that Task-Define emits explicitly. The reason that design fails: it duplicates information already in the Meta-question answers (MQ2 directly asks the context-need question), and it makes Task-Define DECIDE rather than perceive — blurring the perception/action split that runs throughout the project's architecture. A discipline that decides what downstream actors should do is doing the actors' job; the project's pattern is that disciplines perceive and emit content/signals, and downstream actors (runners, the user, sibling disciplines) interpret and act.

The runner-side dispatch logic (HOW the runner reads MQ2's answer and decides whether to invoke Exploration) is a process-layer concern, not a meaning-layer one. At meaning level the commitment is that the signal-substrate is the answers themselves.

### Why "open-with-extension" rather than a closed 3-question Meta-question set or a fully-open one

- **Closed 3:** over-fits to the canonical examples; the user explicitly rejected this by asking for "more than these 3, or better refined."
- **Fully-open:** undermines the constraint Rephrase needs. If meta-questions can be anything, there's nothing to constrain Rephrase against.
- **Open-with-bounded-extensibility:** the synthesis. Three base questions provide the lightweight baseline; bounded extension (about-the-task + constrains-Rephrase + one-sentence) preserves both flexibility and constraint.

The bullet-(a) tightening from the initial "about the task" to "about the task's structure or framing — NOT a question requiring external state-gathering or ecosystem knowledge" closes a specific exploit path where a one-sentence state-gathering question could otherwise satisfy the rule.

### Why six lightweight enforcement criteria rather than five (or zero, just the stance)

- **Zero criteria, "lightweight" as a stance only:** un-actionable; structural-layer authors have no signal which choices violate lightweight; the prior arc's growth happened precisely because each addition individually felt small until the cumulative weight was visible.
- **Five criteria** (the initial set: no verify-phase, no external inputs, no halt-gate, no sub-machinery beyond a paragraph, no ecosystem-knowledge): catches the main heaviness categories but has a specific exploit path — a verify-axis could slip in as an auxiliary output field that's not separately emitted and not used to gate.
- **Six criteria** (adding "every output element must be load-bearing for at least one downstream actor's decision"): closes the exploit path. The sixth criterion is a positive principle (every output earns its place) rather than another negative enumeration; it catches the auxiliary-field case and any other non-load-bearing addition.

### Why the NOT-list grounds intrinsically and what was rejected

The strongest counter was neighbor-referenced grounding ("Task-Define doesn't verify because that's some other operation's job; Task-Define doesn't fetch external context because the prior arc had that and it didn't work"). The reason that design fails: it violates the project's standing self-containment convention for discipline runtime reference files (memory: `feedback_disciplines_self_contained`), which prevents discipline specs from carrying outbound knowledge about their neighbors or their predecessors. The discipline must be readable as a self-contained individual; neighbor-references create coupling that breaks future re-organization (if a neighbor discipline is renamed, every cross-reference would have to be updated).

The five categories chosen are intrinsically grounded — each grounds in Task-Define's own verb (expand-to-define), substrate (task statement + LLM internal cognition), or granularity (per-item). The structural-layer author who finds themselves writing "because IE had this" or "because Sense-making does that" is writing a defect.

### Why the predecessor-acknowledgement lives outside the runtime spec

A short note acknowledging that Task-Define supersedes the prior Inquiry-Elaboration arc is genuinely load-bearing for future readers — without it, a reader encountering Task-Define and the prior arc's findings simultaneously would not know which is the canonical version. But this acknowledgement is by definition an outbound pointer (it points to the prior arc's files), and outbound pointers in discipline runtime reference files violate the project's self-containment convention. The acknowledgement's correct home is the discipline's design-history file at `docs/discipline_design_history/for_task-define.md` — a separate file the project's convention already supports (memory: `project_discipline_design_history_location`). Future readers find the supersession context where they look for design history; future LLMs loading the runtime spec see only the discipline-as-individual.

### Why "Task-Define runs pre-pipeline" rather than as an in-loop Core discipline

Sense-making could in principle accept a task statement as input and produce a stabilized model of what the task is; Itemize-Deconstruct-MultiScope-Rephrase could be cognitive operations that Sense-making performs. Making Task-Define a Core in-loop discipline this way would conflate two distinct operations: organizing a problem into stabilized meaning (Sense-making) versus expanding a task statement into a defined task (Task-Define). They operate at different granularities (problem vs task statement) and produce different output shapes (a stabilized model vs substantive per-item content).

More structurally: Task-Define's output IS the framing the loop disciplines (including Sense-making) operate on. If Task-Define ran inside the loop, the loop would already be running with prior framing; Task-Define's output would have nowhere to be encoded. The framing-producing discipline must be upstream of the framing-consuming disciplines.

### Why Exploration runs conditionally rather than always

The user's verbatim directive made this explicit: *"this part, is dynamic. it depends on the task. thats the point of meta questions, maybe the question is not require project goal understending even, and maybe it is not about the project."* Some tasks don't need project context (purely about restructuring a thought; about a generic concept not tied to this project's state); running Exploration unconditionally wastes its work in those cases. The dynamic division uses the Meta-question answers to decide; this honors the user's directive directly and preserves the lightweight stance at the cross-discipline level (Exploration's overhead is paid only when needed).

## Open Questions

### Monitoring

- **Observable after the runtime spec is authored and Task-Define is invoked on real task statements.** Do the six lightweight enforcement criteria actually catch heaviness during structural-layer authoring? If a hypothetical future author attempts to add (say) a verify-axis to Deconstruct, do the criteria flag it before the addition lands?
- **Observable after the first multi-item task statement runs through Task-Define.** Does the bias-toward-keep-together correctly handle the boundary between specifications-of-one-task and multiple-distinct-tasks? Empirical signal will reveal whether the (subject, action, deliverable-shape) tuple test needs sharpening or whether the default-one rule is correctly bounded in practice.
- **Observable after Task-Define has been used across multiple inquiries.** Does the open-with-extension Meta-question set sharpen toward a canonical baseline (suggesting the open extension was useful) or do extensions stay marginal (suggesting the canonical 3 are sufficient)?

### Refinement Triggers

- **If a structural-layer author repeatedly violates one of the six lightweight criteria** without realizing it, that criterion's wording may need to be tightened. Trigger: 3+ violations of the same criterion across the discipline's first 10 authoring/refactoring touches.
- **If the Meta-question extension rule's bullet (a) ("about the task's structure or framing — NOT requiring external state-gathering")** turns out to be ambiguous in practice, the bullet's wording may need a worked-example clarification. Trigger: 2+ disagreements about whether a proposed extension qualifies.
- **If the bias-toward-keep-together misses N≥3 multi-task cases** (single-task verdicts that downstream Meta-question / user-reading later correct to multi-task), the (subject, action, deliverable-shape) tuple test may need tightening — possibly the "ambiguous → single" rule is too aggressive. Trigger: N=3 observed misses.
- **If the dynamic Task-Define / Exploration division's signal mechanism** turns out to be ambiguous (runners interpret MQ2 answers differently), the process-layer inquiry's dispatch logic may need to be more prescriptive. Trigger: 2+ runners disagreeing about whether Exploration should fire for the same MQ2 answer.

### Research Frontiers

- **Whether Task-Define's design pattern (from-scratch mandate + lightweight stance + intrinsic NOT-list grounding) generalizes to a meta-discipline of how to design lightweight individual disciplines.** If Task-Define succeeds, its design-history may itself become a template for future discipline-design inquiries. No known path; emerges if the empirical signal supports it.
- **Whether the journalism 5W+H or API-gateway-middleware analogs are pedagogically useful in the runtime spec itself, or whether they are best confined to the design-history file.** The structural-layer author's judgment call.
- **The interaction between Task-Define's per-item granularity and the project's multi-head + merging-loop trajectory (memory: `project_end_goal_loop_architecture`).** When Itemize yields N items, do downstream runners spawn N parallel sub-inquiries (multi-head pattern)? The 15-28 process design had a spawn_set wrapper for this; Task-Define inherits the spawn-is-runner-action commitment but defers the spawn-mechanics design.

## Source Input

<details>
<summary>Raw user input for this finding (the iterated framing across the alignment exchange)</summary>

```text
[Initial /MVLw invocation]
lets redefine our elobarate discipline with different name. Task-Define is the name

and it should be like this

it is a discipline whcih
Expand task definition by, ,MultiScope, Deconstruct, Itemize,

i think this a lot clear than elobarate version

and it should be lightweight

what do you think ?

[Alignment iteration 1]
imagine it as from scracth we are defining it

[Alignment iteration 2 — the final settling]
yes run MVLw

but it is importnat that u understnad

Task-Define = produce seeds (angles + meaning-layer meta-questions on the task statement, using LLM's internal context); Explore = take those seeds, go find project-goal-relevant context in the surroundings.


this part, is dynamic. it depends on the task. thats the point of meta questions, maybe the question is not require project goal understending even, and maybe it is not about the project ...


so these meta questions should be like

what scope is this task is referring to ?  in terms of time, concept, project, feature,

does additional scope information might be required, or it is a standalone sense, (this is for when we are building a feature but including the end goal of the project would contribute to the design of this feature's usefulness , this is just an example, for example when we are careting a discipline , it would be know the scope information of disipline creation too, )

and of ource more than these 3 , questions or better more refined meta version of them so rephrasing will not add undesired state or info and lock the meaning in wrong space
```

</details>
