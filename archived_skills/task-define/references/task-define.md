> **Loading note.** This file is loaded by `task-define/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — identity, components, process, quality, output — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Task-Define — A Thinking Discipline

A thinking discipline for expanding a task statement into a defined task — through perceptive itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing. Task-Define is not parsing — it is a practiced methodology that turns a compact task statement into a defined task downstream cognitive disciplines can operate on, by carrying out a small set of cognitive operations in a fixed order.

> **Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing. Expansion is the mechanism; definition is the outcome.**

A task statement is initially compact. The five operations expand it across multiple axes (items, meta-questions, parts, scopes, alternative formulations); what emerges from the expansion is a defined task the downstream loop disciplines can work on. The mechanism is expansive; the outcome is definitional.

Task-Define has two structural roles:

1. **Perceiving the shape of the task** — itemizing the statement (one item or N items), running per-item meta-questions (what scope, whether external context is needed, what the underlying intent is), deconstructing each item into its constituent parts, rendering each item at multiple scopes, and producing alternative rephrasings constrained by the per-item meta-question answers.

2. **Preparing the cross-discipline boundary** — the per-item meta-question answers carry the preparation content a runner reads to formulate the downstream Exploration discipline's input (purpose + territory + bias). The project's standard runner architecture always invokes the Exploration discipline; MQ2's answer prepares what it operates on rather than gating whether it invokes. Task-Define does not emit a separate preparation field; the answers themselves are the substrate, and the runner reads them and acts.

Perceiving without signaling = a defined task with no cross-discipline coordination.
Signaling without perceiving = an empty answer-set the runner cannot act on.
Both together = the full Task-Define process.

---

## 1. Identity

### 1.1 Verb-meaning (the cognitive operation)

**To task-define is to expand a task statement into a defined task by itemizing the statement, applying canonical meta-questions per item, deconstructing each item, rendering each item at multiple scopes, and producing alternative rephrasings constrained by the meta-question answers — using only the task statement and the LLM's own internal cognition as substrate.**

A cognizer receives a single input — the raw task statement, as given. The cognizer applies the five operations in their fixed intra-discipline ordering. The cognizer emits a substantive per-item output — one bundle per item from Itemize — plus a self-assessment verdict the runner consumes for downstream coordination.

The operation is **purposive** (the inquiry's framing is the implicit purpose; making the task statement defined is the directional goal) and **per-invocation** (one task statement → one execution; cross-invocation work is the runner's responsibility, not Task-Define's).

The unit of work is the **per-item bundle** — one bundle per item from Itemize, containing the output of every per-item operation. The discipline's verb is "expand-to-define"; Task-Define does not verify, fetch, adjudicate, or reach beyond the task statement and internal cognition.

### 1.2 Upstream-precondition relationship (logical, not temporal)

Task-Define is the **upstream cognitive operation** that produces what every downstream cognitive work-product presupposes — a defined task whose framing the loop disciplines operate on. Without prior Task-Define work, the loop disciplines have a compact task statement to interpret on their own; with prior Task-Define work, the framing is settled and the loop disciplines can focus on their own operations.

"Upstream" is meant logically (precondition relationship), not temporally — within a session, the temporal order may vary, but the precondition relationship is fixed: Task-Define's output is the framing the loop consumes.

### 1.3 Pipeline position

Task-Define runs **pre-pipeline** — before the runner's first loop discipline. The structural reason is positional: Task-Define's output IS the framing the loop disciplines operate on; if Task-Define ran inside the loop, the loop would already be running with some prior framing, and Task-Define's output would have nowhere to be encoded. The framing-producing discipline must be upstream of the framing-consuming disciplines.

The runner-side specifics — where exactly Task-Define is invoked in any particular runner's pipeline; how the runner's framing artifact incorporates Task-Define's output; how the runner reads Task-Define's per-item meta-question answers to decide whether to invoke the project's Exploration discipline — are runner-side process concerns, separate from this discipline's runtime spec.

### 1.4 NOT-list (five entries; what Task-Define does not produce)

Each exclusion grounds in an intrinsic feature of the operation — the discipline's verb (expand-to-define), substrate (task statement + LLM internal cognition), or granularity (per-item). The list grounds intrinsically, not by reference to neighbor disciplines and not by reference to predecessor work.

| Excluded | Intrinsic ground |
|---|---|
| **Verification operations** (fidelity adjudication; PASS/FLAG verdicts over input-vs-output faithfulness; transcription audits emitting separate verdicts) | Task-Define's verb is EXPAND-TO-DEFINE; fidelity adjudication is a different verb (VERIFY) at a different operation type. |
| **External-context fetching** (reaching for surrounding project state; reading project-goal sources; loading recent-context files; querying ecosystem state) | Task-Define's substrate is task statement + LLM internal cognition; reaching elsewhere is a different verb (DRAW-FROM-ELSEWHERE) at a different substrate. |
| **Fidelity-verdict emission** (PASS/FLAG outputs; faithfulness-scores; any output whose content is an adjudication rather than substantive task-content) | Task-Define's output is SUBSTANTIVE CONTENT (defined task; not adjudication); emitting verdicts is a different operation type. |
| **Cross-item interpretation / cross-task relational meaning** (claims like "item 1 enables item 2"; "items A and B share a common abstraction"; cross-item dependency assertions) | Task-Define operates at PER-ITEM granularity; cross-item operations are a different verb at a different granularity. *Itemize's perception of whether multiple distinct tasks exist is count-perception, not relational interpretation — count-perception is intrinsic to itemization; only relational meaning across items is excluded by this category.* |
| **Ecosystem-knowledge use** (deprecated-spec awareness; currency-of-references checks; project-history awareness; any operation that depends on knowledge of the project's evolving state) | Task-Define's substrate excludes project state; ecosystem-knowledge use is a different verb (READ-PROJECT-STATE) at a different substrate. |

### 1.5 Vocabulary

| User-facing term | Structural definition |
|---|---|
| **task statement** | The single input — the raw task as given, verbatim. The discipline operates on this and nothing else from outside. |
| **substrate** | The cognitive medium the discipline runs on — the LLM's own internal cognition (what the LLM happens to know, has been exposed to in training, has loaded in the current session). Substrate is endogenous to any LLM-implemented discipline; it is NOT an input. |
| **item** | The unit of work emitted by Itemize. One item is the default; N items emerge when the statement contains distinct (subject, action, deliverable-shape) tuples. Each item from Itemize becomes the per-item iteration unit for the rest of Phase 2. |
| **per-item bundle** | The substantive output unit — one bundle per item. Each bundle contains the output of every per-item operation: the item text, the meta-question answers for this item, the Deconstruct output, the MultiScope output, the Rephrasings. |
| **meta-question** | A question about the task's structure or framing (its kind, scope, intent, granularity) that Task-Define applies per item to determine the item's shape and to constrain Rephrase. The canonical set is three base meta-questions (MQ1 scope, MQ2 context-need, MQ3 intent) plus a bounded-extensibility rule for additional per-item meta-questions. |
| **preparation substrate** | The per-item meta-question answers themselves, which carry the preparation content a runner reads to formulate the project's Exploration discipline's input (purpose + territory + bias). The project's standard runner architecture always invokes the Exploration discipline; MQ2's answer prepares what it operates on rather than gating whether it invokes. Task-Define does NOT emit a separate preparation field; the answers ARE the substrate. The runner extracts the preparation content from the answers. |
| **self-assessment verdict** | The discipline's end-of-invocation report on its own run — PROCEED / FLAG / RE-RUN with a confidence attribute (HIGH / MED / LOW). Read by downstream consumers (runners, the user) to determine whether to proceed, review, or re-invoke. |
| **prior-bundles** (optional re-invocation parameter) | The per-item bundles produced by a previous Task-Define invocation on the same task statement. When the runner re-invokes Task-Define for late-split recovery (a missed Itemize multi-item case detected by downstream), `prior-bundles` lets the re-invocation skip per-item work that was already correctly computed. |

### 1.6 Taxonomy placement

Task-Define is a **Core** discipline. It operates pipeline-sequentially at the upstream loop step, consuming a single input (the task statement) plus its endogenous LLM substrate, and producing the substantive framing that downstream loop disciplines operate on. Position: pre-pipeline (before the runner's first loop discipline).

---

## 2. Components

Task-Define has five operations + one signature internal capability (the preparation substrate) + one canonical meta-question set (open-with-extension) + a load-bearing intra-discipline ordering.

### 2.1 The five operations

Each operation is described in one paragraph: input + mechanism + output. The descriptions are the discipline's runtime contract — what the operation receives, what it does, what it emits.

- **Itemize** (statement-level; fires once at the start of the discipline's invocation). **Input:** the raw task statement. **Mechanism:** perceive whether the statement contains multiple completely-different tasks — tasks distinguished by distinct (subject, action, deliverable-shape) tuples — versus a single task with multiple specifications. Specifications of one task vary along properties (e.g., "lightweight," "from-scratch"), constraints, operation details, illustrative clauses, rationales, or invitations, but converge on the same (subject, action, deliverable-shape) tuple. Multiple tasks have N distinct tuples. The cost of premature-split (separating coherence in a single-task statement; downstream operations operate on fragments; meaning-lock in the wrong space) is structurally **irrecoverable**. The cost of late-split (a multi-task statement treated as one — downstream Meta-question's context-need answer and the user's reading of the framing artifact can catch and correct; if catch fails, the option to re-invoke remains because the original statement is preserved verbatim) is **recoverable-in-principle**. The operation biases toward **keep-together**: default emit **one item** (the whole statement); emit N items only when distinct (subject, action, deliverable-shape) tuples are clearly established. When ambiguous between specifications-of-one-task and multiple-distinct-tasks, default to one item. **Output:** a list of items with cardinality ≥ 1. When count = 1, the verdict itself is the signal to the runner — "process in place; do not spawn." When count > 1, the runner spawns N sibling inquiries (one per item). When count = 0 (degenerate input: empty / malformed / contains no actionable task), Phase 2 iterates zero times; Phase 3 emits an empty per-item bundle list and the self-assessment carries a FLAG noting "Itemize emitted count = 0" so the runner can determine whether this is correct or a receive-step failure case.

- **Meta-question** (per item; fires first within each Phase 2 iteration). **Input:** one item from Itemize. **Mechanism:** apply the canonical meta-question set (the three base questions in §2.3 plus any extensions warranted under the bounded-extensibility rule) to the item, producing per-question answers. These answers serve two purposes: they are the preparation substrate the runner reads to formulate the project's Exploration discipline's input (purpose + territory + bias; especially MQ2's context-need answer); and they constrain the per-item Rephrase operation in Stage 4 to prevent rephrasings from locking meaning in the wrong space. The MQ2 answer specifically must contain enough information for a runner to formulate the Exploration discipline's input. **Output:** a structured set of meta-question answers per item, one answer per question fired (the three base + any extensions).

- **Deconstruct** (per item; fires in parallel with MultiScope as part of Stage 3). **Input:** one item from Itemize. **Mechanism:** analyze the item into its constituent parts. At minimum: the subject (what the item is about), the action (what cognitive operation it asks for), and the deliverable-shape (what form the result takes). Additional parts may be analyzed when the item's structure warrants them; the minimum-3 is the floor. **Output:** a structured parts-record per item — at minimum a (subject, action, deliverable-shape) tuple.

- **MultiScope** (per item; fires in parallel with Deconstruct as part of Stage 3). **Input:** one item from Itemize. **Mechanism:** produce versions of the item at multiple scales. At minimum: a small-scope version (the narrowest defensible interpretation) and a big-scope version (the widest defensible interpretation). The meta-question MQ1 answer (the scope-axis answer) informs what "scope" means for this particular item — for instance, an item flagged by MQ1 as time-horizon-scoped will have small/big-scope versions that differ along time horizons, whereas an item flagged as conceptual-scope will differ along conceptual breadth. **Output:** two or more scope-versions per item — at minimum a small-scope variant and a big-scope variant.

- **Rephrase** (per item; fires last within each Phase 2 iteration). **Input:** one item from Itemize PLUS its Meta-question answers. **Mechanism:** produce alternative formulations of the item — different vocabularies, different emphases, implicit-rendered-explicit — *constrained by the Meta-question answers* so the rephrasings do not drift to a vocabulary that locks meaning in the wrong space. The constrained-by relation is the load-bearing safety mechanism that justifies Meta-question's first-per-item position. If Rephrase ran without the constraint, the rephrasings could trap later disciplines in the wrong interpretation. **Output:** two or more rephrasings per item.

### 2.2 The 4-stage intra-discipline ordering

The five operations execute in a fixed 4-stage flow per item. The ordering is structural, not stylistic — a reordering removes the safety mechanism that Meta-question provides for Rephrase.

| Stage | Operation(s) | Why this position |
|---|---|---|
| Stage 1 (statement-level; fires once) | Itemize | Determines the per-item iteration count for the rest of Phase 2 |
| Stage 2 (per item) | Meta-question | Determines scope and context-need per item; the answers constrain Stage 4 |
| Stage 3 (per item; parallel) | Deconstruct + MultiScope | Both consume the same Meta-question answers (MultiScope reads MQ1 for scope-axis) and produce independent outputs — neither uses the other as input; runtime serialization order is implementation convenience |
| Stage 4 (per item; last) | Rephrase | Constrained by the Meta-question answers from Stage 2; cannot run earlier without losing the safety constraint |

Itemize precedes everything because the other four operate per item. Meta-question precedes the per-item analytic operations because its answers shape what "scope" means for MultiScope and what "constraint" means for Rephrase. Deconstruct and MultiScope are independent at the per-item bundle field level — knowing the item's parts does not change what its scope variants are. Rephrase comes last because its safety mechanism (preventing meaning-lock in the wrong space) depends on Meta-question's answers existing first.

The 4-stage flow is acyclic within an invocation. There is no in-invocation iteration over the stages; one pass per item is the runtime contract.

### 2.3 The meta-question canonical set (open-with-extension)

The Meta-question operation applies a canonical set of three base questions per item, plus any per-item extensions warranted under the bounded-extensibility rule.

**The three base meta-questions:**

- **MQ1 (scope-axis):** *"What scope does this task refer to? — in terms of time horizon, conceptual scope, project scope, feature scope, cross-cutting concern, or other."*
- **MQ2 (context-need-axis):** *"Does this item require external context? If yes or uncertain, what kinds of external information are load-bearing for it, and what is the relational stance toward existing project state (one of: continuation / fresh-start-of-prior / reference-to / fresh-self-contained, with bounded-extensibility for runtime-perceived subtypes)? Express in hypothetical-relational mode (type-pattern hypothesis: 'this kind of task typically has this stance and these kinds of load-bearing context'); do NOT assert specific project artifacts."* — see worked examples below.
- **MQ3 (intent-vs-surface-axis):** *"What is the underlying intent (vs the surface ask)?"*

**The bounded-extensibility rule:** additional meta-questions may be added per item when the LLM running the discipline perceives a need, bounded by three rules — all three required for an extension to qualify:

- (a) Must be a question about the task's **structure or framing** — its kind, scope, intent, granularity — NOT a question requiring external state-gathering or ecosystem knowledge to answer.
- (b) Must **constrain Rephrase** (i.e., the answer materially shapes how Rephrase produces alternative formulations for this item — concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer; worked examples below illustrate qualifying and non-qualifying cases). A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded.
- (c) Must be **expressible in one sentence** (a sentence-length cap that keeps each extension proportional to the base set).

The rule's bullet (a) has a specific exclusion target: it prevents extensions like *"What are all the project-wide commitments, ecosystem dependencies, and stakeholder concerns relevant to this task?"* — questions that would require Task-Define to reach for project state, violating the substrate.

**Worked examples for MQ2's answer shape:**

- *Item:* "Refactor the authentication module." **MQ2 answer:** verdict = yes; kinds = (current auth implementation, prior refactor decisions, security constraints, downstream dependents); stance = continuation. Expressed hypothetically: "this kind of task is typically a continuation of an existing system; the prior auth artifacts and downstream dependents bear on it."

- *Item:* "Write a memo about the Q3 outage." **MQ2 answer:** verdict = yes; kinds = (incident postmortem artifacts, prior memos for tonal comparison); stance = fresh-start-of-prior. Expressed hypothetically: "this kind of task is typically a fresh-start-of-prior — the current memo is new but references prior incident records; postmortem artifacts and tonal-comparison memos bear on it."

- *Item:* "Explain pure functions in JavaScript." **MQ2 answer:** verdict = no; self-contained. The task is answerable from the LLM's general programming knowledge; no project-base context is needed; no kinds or stance content required.

- *Item:* "Help me think through whether to add a metric." **MQ2 answer:** verdict = uncertain; kinds-likely = (metric-purpose context, existing instrumentation, downstream consumers); stance = exploratory (runtime-extended subtype). Expressed hypothetically: "if context is needed, this kind of exploratory task typically benefits from metric-purpose and instrumentation context; the relational stance is exploratory rather than continuation."

These illustrate the answer's three content elements (verdict + kinds + stance) and the hypothetical-relational expression mode. The runner reads each element to formulate the Exploration discipline's input: kinds → purpose + bias; stance → territory selection + framing. The hypothetical-relational mode is the substrate-compliance vehicle — the LLM perceives "this kind of task typically …" from task-statement + general task-type knowledge, without asserting specific project artifacts (which would require project access Task-Define doesn't have).

**Worked examples for rule (b):**

- *Qualifying example:* Item "Refactor the authentication module." Proposed extension: *"What unit of refactoring does this task target — function-level, module-level, or architecture-level?"* QUALIFIES — the answer materially shapes Rephrase: a function-level answer constrains rephrasings to mention specific function refactors; a module-level answer constrains rephrasings to mention module-boundary changes; an architecture-level answer constrains rephrasings to mention design-pattern shifts. Each answer produces a different set of alternative formulations than the others.

- *Non-qualifying example:* Same item. Proposed extension: *"What is the deadline for completing this refactor?"* DOES NOT QUALIFY — the answer doesn't shape how Rephrase produces alternative formulations of the task itself. "Refactor the authentication module by Friday" and "Refactor the authentication module by next quarter" would produce the same set of rephrasings (different vocabulary, same conceptual coverage); the deadline is orthogonal to the rephrasing space.

- *Borderline case:* if the proposed extension's effect on Rephrase is ambiguous, apply the asymmetric-failure principle (§4.4) — lean toward firing the extension. The cost of an extra constraint on Rephrase is bounded (one extra dimension Rephrase must respect); the cost of a missing constraint is a Rephrase drift the extension would have prevented.

### 2.4 The preparation substrate (signature internal capability)

The discipline's signature cross-discipline capability. Named **preparation substrate**. Structurally, it is the per-item meta-question answers themselves — the answers carry the preparation content a runner reads to formulate the project's Exploration discipline's input (purpose + territory + bias). The project's standard runner architecture always invokes the Exploration discipline (the existing Core discipline that finds external project-context relevant to an inquiry); MQ2's answer prepares what the Exploration discipline operates on rather than gating whether it invokes.

**The substrate is the answers, not a derivative field.** Task-Define does NOT emit a separate `needs_external_context: bool`, a `surfacing_input: object`, or any other derived preparation artifact. The answers themselves — specifically MQ2's context-need answer for the per-item external-context preparation, and (when present) related extension-question answers — are what the runner reads.

**The locus is the runner, not Task-Define.** Task-Define perceives the per-item framing-gap (via the meta-questions); the runner reads the perception and formulates the Exploration discipline's input. This honors the perception/action split: disciplines perceive and emit content/signals; runners interpret and act. Task-Define committing to a specific Exploration-input formulation (a `purpose: "..."` string or `territory: [...]` list) would blur the architectural distinction by making the discipline formulate rather than perceive.

**The necessary information content is constrained at runtime.** MQ2's answer MUST contain enough information for a runner to formulate the Exploration discipline's input. Operationally, MQ2's answer carries content elements:

- (a) A **context-need verdict** — one of {yes, no, uncertain}.
- (b) When verdict is yes or uncertain, a **two-element preparation payload**:
  - **Kinds-plural** — one or more types of external information that would be load-bearing for the item (e.g., "past incident memos", "prior auth-module designs", "team velocity data"). Kinds are perceived as TYPES, not as specific items.
  - **Relational stance** — one of {continuation, fresh-start-of-prior, reference-to, fresh-self-contained}, with bounded-extensibility for runtime-perceived subtypes (e.g., "hybrid", "referent-uncertain"). The stance captures how the current task relates to existing project state.

The kinds and stance are expressed in **HYPOTHETICAL-RELATIONAL mode** — the LLM perceives "this kind of task is typically a continuation of prior work; if so, the prior artifacts of kinds [X, Y] would bear on it" (type-pattern hypothesis from task-statement + LLM general task-type knowledge) rather than ASSERTIVE mode (which would name specific project artifacts — e.g., "this is a fresh start of commit abc123 at /src/auth/v2" — and violate the substrate). The hypothetical-relational mode is the substrate-compliance vehicle.

The 'uncertain' verdict is a valid runner-actionable state — the runner errs toward invoking the Exploration discipline with kinds-derived purpose and stance-derived territory on uncertain answers per the asymmetric-failure principle at §4.4. When verdict = no, the answer is verdict-only (kinds + stance not required; the minimal-shape signals self-contained). Operational form for this content commitment: lean toward RICHER specification on kinds and stance (more detail; cover plausible subtypes); STOP at pre-surfacing (no naming of specific project items; no asserting of specific project artifacts).

The specific schema of the answer (field names; serialization shape) is a per-spec-version detail; the constraint at this layer is sufficiency-for-runner-formulation.

**The runner-side formulation protocol is out of scope.** How a specific runner reads MQ2's answer and translates it into the Exploration discipline's input — which fields it inspects, how kinds map to purpose + bias, how stance maps to territory selection + framing, what default it applies on equivocal answers, how it composes with the rest of the meta-question answers — is a runner-side process concern, separate from this discipline's runtime spec. Each runner that invokes Task-Define carries its own preparation-extraction logic. The architectural invariant (Task-Define perceives the preparation content; runner formulates the Exploration discipline's input) is preserved across runners.

---

## 3. Process Model

Task-Define's runtime pipeline is a three-phase shape that embeds the meaning-layer's 4-stage intra-discipline flow inside Phase 2.

### 3.1 The three-phase shape

```
PHASE 1: RECEPTION
   Receive the task statement; bind the LLM internal cognition as substrate;
   initialize Phase 2 iteration state. Once per invocation.
                                │
                                ▼
PHASE 2: PER-ITEM TRAVERSAL
   Stage 1: Itemize (statement-level; fires once at start).
   Then, for each item from Itemize, in fixed intra-discipline ordering:
     Stage 2: Meta-question (per item).
     Stage 3: parallel Deconstruct + MultiScope (per item; bundle-field independence).
     Stage 4: Rephrase (per item; constrained by Stage 2's MQ answers).
   The 4-stage flow is acyclic within an invocation (one-pass per item).
                                │
                                ▼
PHASE 3: ASSEMBLY
   Aggregate the per-item bundles produced by Phase 2;
   emit the substantive output + the self-assessment verdict.
   Once per invocation.
```

### 3.2 Reception

Once per invocation. Receives:

- **Required:** the `task_statement` (the raw task as given, verbatim).
- **Optional re-invocation parameter:** `prior-bundles` (the per-item bundles produced by a previous Task-Define invocation on the same task statement; supplied by the runner when re-invoking for late-split recovery, to let the re-invocation skip per-item work already correctly computed).

Reception initializes the workspace (loading the task statement; binding LLM internal cognition as the substrate; if `prior-bundles` is present, marking which per-item slots are already filled). It does NOT receive any other input — no `project_goal`, no `recent_context`, no `external_anchors`. The single-input contract is the load-bearing property that keeps the I/O surface lightweight.

### 3.3 Per-item Traversal

Phase 2 executes the meaning-layer's 4-stage intra-discipline flow.

**Stage 1 — Itemize (statement-level; fires once).** Apply the Itemize operation (§2.1) to the task statement. The operation produces a count ≥ 0 and a list of items. When count = 0, the iteration loop body skips entirely (zero per-item bundles produced). When count = 1, the iteration loop body runs once on the whole statement. When count > 1, the iteration loop body runs once per item.

**Per-item iteration loop body** (runs for each item produced by Itemize):

- **Stage 2 — Meta-question (per item).** Apply the Meta-question operation (§2.1) to this item. Fire the three base meta-questions (MQ1 scope, MQ2 context-need, MQ3 intent). Apply the bounded-extensibility rule (§2.3) to determine whether additional per-item meta-questions are warranted; for each warranted extension, fire and record the answer. The MQ2 answer must carry sufficient information for the preparation substrate (§2.4) — verdict ∈ {yes, no, uncertain}, plus (when verdict=yes/uncertain) the two-element kinds+stance payload in hypothetical-relational mode.
- **Stage 3 — Deconstruct + MultiScope (per item, parallel at the bundle-field level).** Apply Deconstruct and MultiScope to this item; both operations consume the Stage 2 MQ answers (MultiScope reads MQ1 for the scope-axis; Deconstruct may read the answers for context). The two operations produce independent fields of the per-item bundle — neither uses the other as input. Runtime serialization order is implementation convenience; the architectural claim is independence.
- **Stage 4 — Rephrase (per item; constrained by Stage 2's MQ answers).** Apply Rephrase to this item plus its Stage 2 MQ answers. The Rephrase output is constrained by the MQ answers to prevent meaning-lock; the constraint relation is the load-bearing safety mechanism.

After the per-item loop body completes for this item, the item's bundle (item text + Stage 2 + Stage 3 + Stage 4 outputs) is added to the in-progress bundle list. Move to the next item.

### 3.4 Assembly

Once per invocation, at the end of Phase 2. Compiles the substantive output and emits the self-assessment verdict.

- **Substantive output:** the per-item bundle list (one bundle per item from Itemize; empty list when Itemize count = 0).
- **Self-assessment verdict:** one of PROCEED / FLAG / RE-RUN with a confidence attribute (HIGH / MED / LOW) and a list of conditions (specifying which FLAG conditions fired, if any; or which RE-RUN condition fired, if RE-RUN). See §4.7 for verdict shape.

Assembly does NOT compute any new content beyond aggregating Phase 2's per-item bundles. It is a packaging step.

### 3.5 Re-invocation as parameterized variation

Task-Define is re-invokable. The re-invocation is the same 3-phase operation with one optional input parameter:

- **`prior-bundles`** (optional) — the per-item bundles produced by a previous Task-Define invocation on the same task statement. When supplied, Reception marks which per-item slots are already filled; Phase 2's per-item loop body skips items whose bundle is already in `prior-bundles` and only runs the loop body on items whose bundle is new (e.g., a missed multi-item case where the runner has re-invoked with a refined understanding of the item set).

The runner is the re-invocation authority. Task-Define itself does NOT decide to re-invoke; it does NOT perform any in-invocation self-re-check on its Itemize verdict. Late-split recovery (a missed multi-item case detected by downstream) is runner-initiated.

The operation's identity is preserved across invocations; only inputs and intermediate behavior parameterize.

### 3.6 Acyclicity within invocation; one-pass

Task-Define's 4-stage intra-discipline flow is acyclic within an invocation. There is no internal iteration over the stages; one pass per item is the runtime contract. Any recovery (late-split, missed multi-item, etc.) happens via re-invocation, not via in-invocation re-cycling.

### 3.7 Pipeline position (pre-pipeline)

Task-Define runs **pre-pipeline** — before the runner's first loop discipline. The structural reason is positional: Task-Define's output IS the framing the loop disciplines operate on. Position-internal commitments (how the runner stitches Task-Define's output into the framing artifact it passes to its loop's first discipline; how the runner invokes the project's Exploration discipline conditionally based on the per-item MQ2 answers) are runner-side process concerns, separate from this discipline's runtime spec.

---

## 4. Quality

### 4.1 The failure-mode framework — LAYER 1 vs LAYER 2

Failure modes split into two layers, mirroring the project's per-discipline failure-mode convention:

- **LAYER 1 — Operational failures.** Detectable via output observation (the discipline's self-assessment or a downstream consumer can flag them). Recoverable via re-invocation (the runner re-invokes Task-Define with refined parameters). The discipline's self-assessment may itself recognize a LAYER 1 mode at end-of-invocation and emit FLAG.
- **LAYER 2 — Identity failures.** Detectable via behavioral audit over time (across many invocations; not detectable in-invocation). Erode the discipline's intrinsic character (its verb, substrate, granularity). Not simply recoverable — a LAYER 2 occurrence signals that the discipline is drifting away from what it IS and requires correction of the spec or the authoring discipline, not just re-invocation of an instance.

### 4.2 LAYER 1 — Operational failure modes

Initial enumeration. Specific modes are empirically-refined as the discipline accumulates invocations (per the calibration trajectory at §4.6). Each mode is intrinsic-grounded against an operation's specific structure.

| # | Mode | Recognition | Corrective |
|---|---|---|---|
| **1** | **Premature-Itemize-split** | Itemize emits count > 1 when the statement is actually a single task with multiple specifications. Downstream consumes fragments; meaning-lock in the wrong space. Structurally irrecoverable in-invocation. | Re-invoke with the original task statement; if the spec author observes a pattern of premature splits, sharpen the (subject, action, deliverable-shape) tuple test wording. Grounded in Itemize's PERCEIVE-default-one direction. |
| **2** | **Late-multi-item-detected-by-downstream** | Itemize emits count = 1 but downstream signals (Meta-question's context-need answer; a downstream discipline's analysis; user reading) reveal a missed split. Recoverable-in-principle because the original statement is preserved verbatim. | Runner re-invokes Task-Define with `prior-bundles` of any already-correctly-computed work, plus a refined understanding of the item set. Grounded in Itemize's late-split recoverability. |
| **3** | **MQ-extension-violates-bounded-rule** | A per-item meta-question extension was added but fails one or more of the three bounded-extensibility conditions (about task structure / constrains Rephrase / one sentence). The extension drifts into ecosystem-knowledge territory or floats free without constraining Rephrase. | Drop the offending extension from the per-item meta-question set; re-fire Rephrase for the affected items without the offending extension's constraint. Grounded in MQ's bounded-extensibility rule. |
| **4** | **Rephrase-drifted-without-MQ-constraint** | A Rephrase variant for an item contradicts the constraint imposed by the item's MQ answers. The variant locks meaning in a vocabulary the MQ answers were meant to prevent. | Re-fire Rephrase for the affected items; explicitly cite the MQ answers as constraints during the re-fire. Grounded in Rephrase's constrained-by relation. |
| **5** | **Per-operation-firing-missed-an-operation** | A per-item bundle is missing the output of one of the per-item operations (no MQ answers, or no Deconstruct output, or no MultiScope output, or no Rephrasings). The bundle is incomplete. | Re-fire the missing operation for the affected items. Grounded in the 4-stage flow's per-item completeness requirement. |
| **6** | **MQ2-answer-missing-preparation-info** | Per-item check at end-of-invocation: any item's MQ2 answer is missing the content required by §2.4 — i.e., the answer does not state a context-need verdict (one of {yes, no, uncertain}), OR — when the verdict is yes or uncertain — the answer does not state the two-element preparation payload (kinds-plural + relational stance, in hypothetical-relational mode). The runner cannot formulate the Exploration discipline's input. Applies when MQ2 has fired for at least one item; does not fire on verdict=no answers (verdict=no IS the required content; nothing missing). Detection is binary on presence/absence of the required content. | Re-fire MQ2 for the affected items, explicitly demanding the necessary information content per §2.4. If repeated, the spec author may need to tighten MQ2's wording. Grounded in the preparation substrate's necessary-information-content commitment (§2.4). |

### 4.3 LAYER 2 — Identity failure modes

Initial enumeration. Each mode is intrinsic-grounded against a specific NOT-list category (§1.4) and detectable only by behavioral audit over time.

| # | Mode | Recognition | Why-erodes-identity |
|---|---|---|---|
| **1** | **Verification-drift** | Task-Define starts emitting fidelity verdicts (PASS/FLAG over input-vs-output faithfulness; adjudication outputs). Detectable when a session's output history shows a verdict-emission pattern that wasn't there earlier. | Violates NOT-list category 1 (verification operations are a different verb). The discipline begins doing a different operation. |
| **2** | **Substrate-reach** | Task-Define's invocations start consuming external project state (reading project-goal sources, recent-context files, ecosystem-state queries). Detectable when invocation prompts or processing include content from non-task-statement sources. | Violates NOT-list category 2 (external-context fetching is a different substrate) or category 5 (ecosystem-knowledge use is a different substrate). The discipline's substrate is changing. |
| **3** | **Cross-item-interpretation-drift** | Task-Define's per-item bundles start including relational claims across items (e.g., "item 1 enables item 2"; "items A and B share an abstraction"). Detectable when bundle content includes inter-bundle assertions. | Violates NOT-list category 4 (cross-item interpretation is a different granularity). The discipline's granularity is changing. |
| **4** | **Fidelity-verdict-drift** | Task-Define's output starts including adjudication verdicts on input-vs-output faithfulness (rather than substantive content). Distinct from Verification-drift in that the output type itself shifts toward adjudication. | Violates NOT-list category 3 (fidelity-verdict emission is a different operation type). The discipline's output shape is changing. |

LAYER 2 modes are not recoverable by re-invocation alone. A LAYER 2 occurrence signals that the spec or the authoring discipline needs correction. The runner consuming Task-Define's output may surface a LAYER 2 mode via the project's diagnostic protocol; the spec author addresses it by correcting the spec or sharpening the authoring rules.

### 4.4 Asymmetric-failure principle

**Premature commitment that locks meaning in the wrong space is structurally worse than over-cautious commitment that preserves recoverability.**

- **Premature-split (Itemize count > 1 when the statement is actually one task):** structurally irrecoverable in-invocation. Downstream operates on fragments; the meaning is locked in the wrong space. The original statement is preserved verbatim, but downstream work has already committed to the wrong framing.
- **Late-split (Itemize count = 1 when the statement is actually multiple tasks):** recoverable-in-principle. Downstream Meta-question's context-need answer or user reading can catch and correct; the option to re-invoke remains because the original statement is preserved.

**Operational form:** lean toward **keep-together** at Itemize (default emit one; emit N only when distinct (subject, action, deliverable-shape) tuples are clearly established). Lean toward **fire** at MQ extensions (when the bounded-extensibility rule (a)+(b)+(c) is met, fire the extension; the cost of a fired-but-marginal extension is bounded — it constrains Rephrase slightly more; the cost of an un-fired-but-warranted extension is a Rephrase drift the constraint would have prevented).

The asymmetric-failure principle is the runtime expression of the meaning-layer's already-committed cost-structure asymmetry.

### 4.5 Coverage criteria

The 4-stage intra-discipline flow completes when (default; refinement-trigger = empirical observation of incomplete bundles):

- Itemize has fired and produced a count ≥ 0 verdict.
- For each item from Itemize, all four per-item stages have fired (Stage 2 + Stage 3a + Stage 3b + Stage 4) and produced their outputs.
- The per-item bundle for each item contains the output of every per-item operation (no operation missed; per LAYER 1 mode 5 mitigation).
- The self-assessment verdict has been computed and emitted alongside the substantive output.

**Workspace-overload trigger** (default; refinement-trigger = empirical observation that the trigger fires too early or too late): when the LLM running the discipline self-observes that adding more per-item bundles to the workspace would exceed the effective context budget — typically when Itemize emits a large N (count > ~10) — the discipline emits a FLAG in the self-assessment noting "workspace approaching capacity at N items" and proceeds with the per-item iteration, completing bundles in order until the budget is reached, then assembling what it has and signaling that the remaining items need a re-invocation. This preserves the asymmetric-failure principle (signal incompleteness rather than silently drop).

### 4.6 Calibration trajectory + signals

**Three-stage trajectory:**

- **Bootstrap** (current state at first authoring; no calibration data yet): LLM-direct operation; trustworthiness via internal consistency (the 4-stage flow's operation outputs each satisfy the per-operation contract) + sister-discipline precedent (the LAYER 1 / LAYER 2 meta-pattern is project-rooted).
- **Early Operation** (~10-20 invocations using Task-Define): mode firing rates observable; LAYER 1 mode frequencies accumulate; the MQ extension bounded-rule's clarity becomes testable; the preparation substrate's necessary-information-content commitment is empirically tested against real runner-side formulation.
- **Mature Operation** (~30+ invocations per task-type-family): per-task-type firing-rate distributions stabilize; the LAYER 1 mode list can be tightened (modes that never fire empirically may be dropped; modes that fire frequently may be re-grounded with sharper detection criteria); calibration curves stabilize.

**Five primary self-contained signals** (observable per-invocation or per-rolling-window):

| # | Signal | Operates at | Observation method |
|---|---|---|---|
| **PS1** | Itemize count distribution | Per-invocation | Count of items emitted per task statement; expect a skewed distribution with count = 1 dominant per the asymmetric-failure principle |
| **PS2** | MQ extension firing rate | Per-invocation | Count of extension meta-questions added per item; expect low rate (base 3 is sufficient for most items); high rate without LAYER 1 mode 3 firings suggests the extension rule is well-calibrated |
| **PS3** | Self-assessment verdict distribution | Per rolling window | Ratio of PROCEED / FLAG / RE-RUN verdicts; expect PROCEED dominant; FLAG and RE-RUN flag specific recoverable / unrecoverable patterns |
| **PS4** | LAYER 1 mode firing rate (per mode) | Per rolling window | Count of each LAYER 1 mode's self-recognition; modes that never fire may be vestigial; modes that fire frequently may need sharper detection |
| **PS5** | Preparation-substrate formulation success | Per rolling window | Downstream-augmented signal: rate at which runners successfully formulate the Exploration discipline's input from MQ2 answers; declining rate signals LAYER 1 mode 6 (MQ2-answer-missing-preparation-info) needing investigation |

### 4.7 Self-assessment output (PROCEED / FLAG / RE-RUN with confidence)

At the end of an invocation, Task-Define reports a self-assessment verdict with three components:

- **Verdict:** one of PROCEED / FLAG / RE-RUN.
- **Confidence:** one of HIGH / MED / LOW, reflecting the LLM's judgment about the strength of the verdict.
- **Conditions:** a list of specific FLAG conditions that fired (if FLAG) or the RE-RUN condition that fired (if RE-RUN); empty list when PROCEED.

*Confidence rubric:*

- **HIGH** — no LAYER 1 mode boundary (§4.2) was approached during the invocation, and each operation's output was internally coherent without close calls. The verdict reflects a clean run.
- **MED** — one LAYER 1 mode boundary was approached but did not fire, OR one operation's output had an observable close call that did not propagate to a mode boundary. The verdict reflects one friction point.
- **LOW** — multiple LAYER 1 mode boundaries were approached, OR one was very near firing, OR multiple operations had close calls. The verdict reflects compound friction.

*The rubric applies to all three verdicts (PROCEED, FLAG, RE-RUN); confidence and verdict are independently determined. Common combinations include HIGH-confidence-PROCEED (clean run; output ready for downstream consumption), MED-confidence-FLAG (one friction point; downstream review of the flag conditions warranted before consuming), and LOW-confidence-RE-RUN (compound issues; re-invocation strongly indicated). Less-common-but-valid combinations include LOW-confidence-PROCEED (compound minor friction without any LAYER 1 firing — output usable with awareness) and HIGH-confidence-FLAG (clean run on most operations; a single FLAG condition tripped cleanly without propagating to other operations).*

**PROCEED** — all 4-stage operations fired; no LAYER 1 mode self-recognized; output is ready for downstream consumption.

**FLAG** — output produced; one or more flags raised; downstream consumer should review the flags before consuming. Initial FLAG conditions (empirically-refined):

- (a) Itemize uncertainty HIGH on the count = 1 vs count > N boundary — the (subject, action, deliverable-shape) tuple test was close; downstream should consider whether a missed split is plausible.
- (b) An MQ extension was applied but the bounded-extensibility rule (a)+(b)+(c) was only partially clearly met — the extension's qualification is borderline.
- (c) Rephrase produced only 1 variant despite the MQ-answer constraint allowing more — the rephrasing space may be under-explored.
- (d) Any LAYER 1 mode was self-recognized at end-of-invocation (modes 1-6).
- (e) Workspace approaching capacity at N items (per §4.5 workspace-overload trigger); remaining items not processed; re-invocation needed for completeness.
- (f) Itemize emitted count = 0 (degenerate input case; runner should determine whether this is correct or a receive-step failure case).

**RE-RUN** — output incomplete or structurally suspect; re-invocation recommended. Initial RE-RUN conditions:

- (a) Any LAYER 2 mode was self-recognized (identity-eroding; not recoverable in-invocation).
- (b) Receive-step failure — the input task statement is malformed (e.g., empty when not expected to be) or otherwise prevents the discipline from proceeding.

---

## 5. Output

### 5.1 The substantive output

Task-Define produces one work-product: the **per-item bundle list**. One bundle per item from Itemize; cardinality of the list equals Itemize's count. When count = 0, the bundle list is empty; the self-assessment verdict carries the FLAG explaining the empty list.

Item content lives in the bundles. The discipline's output is consumed by downstream actors (the runner; downstream loop disciplines; the user reading the framing artifact); each actor reads the per-item bundles for the substantive task definition and reads the self-assessment verdict for runtime quality information.

### 5.2 Per-item bundle contract

Each per-item bundle is required to contain the output of every per-item operation in the 4-stage flow. The contract:

| Field | Source | Content |
|---|---|---|
| **item text** | Stage 1 (Itemize) per-item slice | The verbatim slice of the task statement that this item represents — when count = 1, the whole statement; when count > 1, the specific item-text Itemize identified |
| **MQ answers** | Stage 2 (Meta-question) per-item output | The set of meta-question answers for this item — the three base (MQ1 scope, MQ2 context-need, MQ3 intent) plus any extensions warranted under the bounded-extensibility rule; MQ2's answer carries the preparation substrate content (verdict + (when verdict=yes/uncertain) kinds-plural + relational stance, in hypothetical-relational mode) per §2.4 |
| **Deconstruct output** | Stage 3 (Deconstruct) per-item output | The parts-record for this item — at minimum (subject, action, deliverable-shape); additional parts when warranted |
| **MultiScope output** | Stage 3 (MultiScope) per-item output | The scope-versions for this item — at minimum small-scope + big-scope; additional intermediate scopes when warranted |
| **Rephrasings** | Stage 4 (Rephrase) per-item output | Two or more alternative formulations of the item, constrained by the MQ answers |

A bundle missing any of the five fields is incomplete (LAYER 1 mode 5 — Per-operation-firing-missed-an-operation).

The exact serialization shape of the bundle (field names in the runner's framing artifact; nesting structure; whether fields are JSON / YAML / markdown / other) is a runner-side concern, separate from this discipline's runtime spec. The contract committed here is which logical fields must be present per bundle.

### 5.3 Telemetry

Operational metrics reported with the output:

- Itemize count for this invocation (cardinality of the per-item bundle list).
- Per-item bundle completeness (each bundle's count of fields populated; expected 5).
- MQ extension firings for this invocation (count of extension meta-questions added per item; aggregated).
- Self-assessment verdict + confidence + conditions list.
- Workspace-overload trigger status (fired / not fired; if fired, at which item index).
- LAYER 1 modes self-recognized for this invocation (list).
- LAYER 2 modes self-recognized for this invocation (list; expected empty in healthy operation).

### 5.4 Frontier — open questions for downstream

The Frontier captures what Task-Define perceived but did not resolve:

- Per-item meta-question answers that carry preparation content (the preparation substrate; the runner reads to formulate the Exploration discipline's input — purpose + territory + bias — for its always-invoked downstream pass).
- Rephrasings that span a wide alternative space (signals that the item's meaning is open to multiple defensible interpretations; downstream may need to settle).
- MultiScope versions that span scope axes whose right choice depends on inquiry-specific context (the runner or the user picks the scope to operate on).
- FLAG conditions that signal recoverable failure modes (the runner decides whether to re-invoke or proceed with the existing output).

A growing Frontier is a signal of depth, not failure. It tells the next cognitive operation exactly what to investigate.

---

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Task-Define Process

### 1. Reception

Receive the single input: the `task_statement` (the raw task as given, verbatim). Bind the LLM's internal cognition as the discipline's substrate. If the optional re-invocation parameter `prior-bundles` is supplied (when the runner is re-invoking for late-split recovery), mark which per-item slots are already filled.

Do NOT receive any other input. No `project_goal`, no `recent_context`, no `external_anchors`. The single-input contract is the load-bearing property that keeps the I/O surface lightweight.

### 2. Per-item Traversal (executing the 4-stage intra-discipline flow per item)

**Stage 1 — Itemize (statement-level; fires once).** Apply the Itemize operation per §2.1. Perceive whether the task statement contains multiple completely-different tasks (distinguished by distinct (subject, action, deliverable-shape) tuples) versus a single task with multiple specifications. Default emit one item; emit N items only when distinct tuples are clearly established. When ambiguous, default to one item. Emit the count verdict and the list of items.

If `prior-bundles` was supplied, compare Itemize's current count and item list to the count and item list represented in `prior-bundles`. Per-item iteration body below will skip items whose bundle is already in `prior-bundles`.

**Per-item iteration body** (runs for each item from Itemize whose bundle is not already in `prior-bundles`):

- **Stage 2 — Meta-question (per item; fires first).** Apply the Meta-question operation per §2.1. Fire the three base meta-questions (MQ1 scope, MQ2 context-need, MQ3 intent). Apply the bounded-extensibility rule per §2.3 to determine whether additional per-item meta-questions are warranted (an extension qualifies only when (a) about task structure or framing + (b) constrains Rephrase per the worked examples in §2.3 + (c) expressible in one sentence — all three required). For each warranted extension, fire and record the answer. Ensure MQ2's answer carries the necessary information content for the preparation substrate (per §2.4 — verdict ∈ {yes, no, uncertain}; when verdict is yes or uncertain, the two-element kinds + relational stance payload, expressed in hypothetical-relational mode).
- **Stage 3 — Deconstruct + MultiScope (per item; parallel at the bundle-field level).** Apply Deconstruct and MultiScope per §2.1. Both operations consume the Stage 2 MQ answers (MultiScope reads MQ1 for the scope-axis; Deconstruct may read the answers for context). Produce independent fields of the per-item bundle — neither uses the other as input. Runtime serialization order is implementation convenience; do not introduce a dependency between the two operations.
- **Stage 4 — Rephrase (per item; fires last; constrained by Stage 2's MQ answers).** Apply Rephrase per §2.1. Produce two or more alternative formulations of the item — different vocabularies, different emphases, implicit-rendered-explicit — explicitly constrained by the Stage 2 MQ answers so the rephrasings do not drift to a vocabulary that locks meaning in the wrong space. The constraint relation is the load-bearing safety mechanism; do not skip it.

After the per-item loop body completes for this item, the item's bundle (item text + Stage 2 + Stage 3 + Stage 4 outputs) is added to the in-progress bundle list. Move to the next item.

The 4-stage flow is acyclic within an invocation. Do NOT loop back over the stages; one pass per item is the runtime contract. Any recovery from a missed split or other downstream-detected issue happens via runner-initiated re-invocation with the optional `prior-bundles` parameter, NOT via in-invocation re-cycling.

### 3. Assembly

Aggregate Phase 2's per-item bundles into the per-item bundle list — one bundle per item from Itemize, in the order Itemize emitted them. The bundle list is the substantive output.

Do NOT compute any new content during Assembly. Assembly is a packaging step.

### 4. Self-assessment verdict + telemetry

Compute the self-assessment verdict per §4.7. Determine which (if any) FLAG conditions fired during this invocation; determine which (if any) RE-RUN condition fired. Determine the verdict:

- **PROCEED** if no LAYER 1 mode was self-recognized and no degenerate / RE-RUN condition fired.
- **FLAG** if one or more LAYER 1 modes were self-recognized OR one or more FLAG conditions (a)-(f) fired.
- **RE-RUN** if a LAYER 2 mode was self-recognized OR the receive-step failed.

Determine the confidence (HIGH / MED / LOW) based on the strength of the per-operation outputs and the proximity to LAYER 1 mode boundaries.

Emit the verdict + confidence + conditions list alongside the substantive output (the per-item bundle list). Include the telemetry metrics from §5.3 with the verdict.

### Failure-mode self-check (per-invocation)

Before emitting the verdict, examine the in-progress output for any of the failure modes in §4.2 (LAYER 1) and §4.3 (LAYER 2):

- **LAYER 1 self-check:** for each of the 6 LAYER 1 modes, ask whether the current invocation's output exhibits the mode's recognition pattern. If yes, include the mode in the verdict's conditions list; the verdict becomes FLAG (with the mode named).
- **LAYER 2 self-check:** for each of the 4 LAYER 2 modes, ask whether the current invocation's output crosses into the mode's identity-eroding territory. If yes, include the mode in the verdict's conditions list; the verdict becomes RE-RUN; the spec author needs to be notified that an identity-eroding pattern was observed.

The self-check is a per-invocation pass over the output (NOT a runtime check during operation firing — that would be sub-machinery beyond the per-operation paragraph and violate the discipline's lightweight stance). Recognition is by pattern-match against the mode's recognition column in §4.2 / §4.3.
