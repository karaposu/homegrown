> **Loading note.** This file is loaded by `cognitive_harness/surfacing/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — identity, components, process, quality, output — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Surfacing — A Thinking Discipline

A thinking discipline for drawing items from a bounded territory into the inquiry's present attention, each tagged with relevance to the inquiry's purpose. Surfacing produces the workspace content on which all downstream cognitive work depends.

> **Structural Surfacing is the cognitive operation by which items present in (or candidate-generable for) a bounded territory move from latent into present + relevance-tagged, biased by the inquiry's purpose.**

Surfacing has two structural outputs that emerge together but live at different layers: a **workspace work-product** (the items read into the present attention with per-item relevance tags) and a **thin artifact work-product** (a persistent record of the traversal and discoveries, carrying no item content). Both are load-bearing — the workspace is the substantive product consumed by same-session downstream cognition; the artifact is the navigation/handoff product sufficient for cross-session consumption.

---

## 1. Identity

### 1.1 Verb-meaning (the cognitive operation)

**To surface is to draw items from latent context into present attention, tagged with relevance to the current inquiry's purpose, without yet ascribing stable conceptual structure to what was drawn.**

A cognizer enters a bounded territory whose items are either present (artifact case: codebases, literature, corpora) or candidate-generable for the territory (possibility case: solution spaces, design candidates). Attention is biased by the inquiry's purpose toward what bears on that purpose. Items are read into the inquiry's present attention and each tagged with a relevance verdict.

The operation is **purposive** (the inquiry's purpose is the bias source for relevance-tagging) and **idempotent within an invocation** (same input + same purpose produces same output). It is **re-invocable across invocations** as a parameterized variation of the same operation.

The unit of work is the **surfaced item** — a unit drawn from the territory, tagged at one of four relevance levels (core / sub / side / umbrella). The discipline's verb is "draw from"; surfacing does not generate items beyond what is present (or candidate-present) in the territory.

### 1.2 Upstream-precondition relationship (logical, not temporal)

Surfacing is the **upstream cognitive operation** that produces what every downstream cognitive work-product presupposes — items being claimed to bear on the inquiry. Without prior surfacing, subsequent cognition has nothing to operate on. "Upstream" is meant logically (precondition relationship), not temporally — within a single loop pass the temporal order may vary, but the precondition relationship is fixed.

### 1.3 NOT-list (eight entries; what surfacing does not produce)

Each exclusion grounds in an intrinsic feature of the operation, not in what neighbor operations do.

| Excluded | Intrinsic ground |
|---|---|
| Stable conceptual structure (anchors, relational claims among items, interpretive role-assignments) | Surfacing operates at item-granularity; cross-item relational structure is a different operation by definition. |
| Adjudication of which item to act on next | Relevance-tagging is multi-item-attributive; action-selection is single-item-decisive. These are operationally distinct. |
| Items beyond what is present (or candidate-present) in the territory | Surfacing's verb is "draw from"; items must pre-exist in or be candidate-derivable from the territory. Novelty-from-nothing is a different verb. |
| Partition of items into independent pieces with interfaces | Surfacing emits items as a flat-ish set with optional adjacency annotations; piece-level partitioning is a structural operation on the whole inventory. |
| Evaluation of items for correctness or quality | Relevance is purpose-conditioned; correctness and quality are content-conditioned. These are orthogonal axes. An item can be relevant and incorrect. |
| Interpretive meaning of items | Surfacing emits labeling content (identifier + adjacency facts) but not interpretive role-assignment. Labeling answers "what is this?"; interpretation answers "what does this mean in relation to other things?" |
| Cross-inquiry memory | Surfacing fires per-invocation. Cross-inquiry coordination is a meta-discipline concern. |
| The inquiry's purpose | Surfacing is purposive but the purpose is exogenous. Surfacing receives the inquiry's purpose as input; it does not generate it. |

### 1.4 Vocabulary

| User-facing term | Structural definition |
|---|---|
| **item** | The unit of work — anything in the territory the discipline can point at (a file, a candidate, a literature reference, a concept, an observation). |
| **territory** | The bounded scope the discipline operates within. Either pre-specified (concrete or abstract) or implicitly-given (requiring boundary-discovery sub-phase). |
| **purpose** | The inquiry's bias source for relevance-tagging. Exogenous to the discipline; received as input. |
| **workspace** | The discipline's substantive work-product: the LLM session's in-context content (items read) plus explicit scope tags (per-item relevance verdicts). Session-local. |
| **artifact** | The discipline's navigation/handoff work-product: a persistent record carrying no item content; traversal trace + state summary. Cross-session-sufficient. |
| **relevance tag** | A per-item relevance verdict at one of four levels: core-relevant / sub-relevant / side-relevant / umbrella (when subtype granularity is uncertain). |
| **relevance confidence** | HIGH / MEDIUM / LOW; per-item judgment confidence emitted alongside the relevance tag. |

### 1.5 Taxonomy placement

Surfacing is a **Core** discipline per the four-category taxonomy at `docs/discipline_taxonomy.md`. It operates pipeline-sequentially at the upstream loop step, consuming the inquiry's purpose + territory specification and producing input for subsequent cognitive work.

---

## 2. Components

Surfacing has six core components within its Traversal phase, plus one conditional pre-phase sub-component (Boundary-discovery), plus one signature internal mechanism (Relevance-attribution), plus a load-bearing primitive composition drawn from the project's typed primitive set.

### 2.1 The six Traversal components

| Component | Role |
|---|---|
| **Scope-determination** | Decide which sub-region of the territory the current cycle operates on. |
| **Item-enumeration / generation** | List existing items (artifact case) or generate candidate items (possibility case) within the current sub-region. |
| **Relevance-attribution** | Apply the relevance-attribution mechanism (§2.3) to each enumerated/generated item; produce per-item relevance tag + confidence. |
| **Coverage-tracking** | Maintain a record of which sub-regions have been operated on at which resolution. |
| **Absence-detection** | Mark sub-regions as confirmed-absent when they are operated on and contain no relevant items. |
| **Output-shaping** | Capture per-item tags AT THE MOMENT of emission during traversal (not retrospectively); accumulate into the in-progress artifact; the artifact is the authoritative tag record. (Default capture rule; refinement-trigger = empirical observation that capture-at-moment causes performance degradation or accuracy issues.) |

The six components do not have a strict temporal order in the abstract; the **default operational ordering** during a Traversal cycle is committed at §3.4. The components fire as needed within each cycle.

### 2.2 The Boundary-discovery sub-phase

A conditional pre-phase that operates before Reception when the inquiry's territory specification is implicit (the input contract field `territory` is `unbounded` or `discover`, not `explicit-bounded`). The sub-phase probes outward to surface the territory's edges; its output is a territory specification consumed by the main Reception phase.

The sub-phase uses the same primitive substrate as surfacing's main operation. Treating it as a separate operation would create a discipline that exists only to feed surfacing — a meaningless decomposition. The sub-phase is therefore a within-surfacing component, not an external operation.

### 2.3 The relevance-attribution mechanism (signature internal capability)

The discipline's signature internal capability. Named **relevance-attribution**. Structurally a per-item operation invoked iteratively during the Relevance-attributed Traversal phase (§3.4). It is not a layer (not a continuous background process), not a phase (not a temporal segment of the discipline's overall structure), and not a discrete classifier (not an isolated atomic predicate).

**Per-item operational steps** (default; refinement-trigger = empirical observation of inconsistent or unreliable tags):

1. **Receive:** the inquiry's purpose (already in workspace via Reception) + one item enumerated/generated by §2.1's Item-enumeration component.
2. **Match:** apply Intuition-similarity primitive against the purpose-template; produce a similarity profile.
3. **Tag emission:** emit one of {core-relevant, sub-relevant, side-relevant, umbrella}.
4. **Confidence assignment:** emit HIGH / MEDIUM / LOW reflecting match confidence.
5. **Uncertainty handling:** under low-confidence-match, default to **inclusion** (umbrella tag + LOW confidence) — per the asymmetric-failure principle (§4.4). Inhibition primitive suppresses only items with high-confidence rejection.

**Eight structural properties distinguish the relevance-attribution mechanism from sense-making's anchor-extraction:**

| Property | Relevance-attribution (within surfacing) | Sense-making's anchor-extraction |
|---|---|---|
| **Operation scope** | Per-item | Cross-item |
| **Output shape** | Per-item tag (relevance value) | Cross-item structure (anchors with relationships) |
| **Temporal positioning** | During the surfacing pass | After surfacing's output exists |
| **Granularity** | Labeling — "does this bear on the purpose?" | Interpretive — "what does this mean in relation to other items?" |
| **Speed / depth posture** | Fast / coarse / first-pass | Deliberate / fine / structured |
| **Primitive emphasis** | Intuition-similarity + Context-framing + Inhibition + Salience | Simulation + Working Memory + Intuition-similarity + Metacognition |
| **Failure-mode set** | LAYER 1 (operational) + LAYER 2 (identity-eroding) per §4 | A separate set per the sibling discipline |
| **Calibration target** | Coverage + relevance-confidence-calibration | A separate set per the sibling discipline |

### 2.4 Primitive composition

Surfacing's load-bearing cognitive primitives, drawn from the typed 11-primitive set in `docs/thinking_space_dynamics.md`.

| Primitive | Role in surfacing |
|---|---|
| **Attention-pointer** | Selects which item from the territory is currently under consideration during Traversal. |
| **Working Memory** | Holds the current candidate set + the territory representation + the inquiry's purpose + the in-progress inventory. The substrate of the workspace work-product (HYBRID delegation per the primitive set: LLM context native + explicit scope tagging). |
| **Salience** | Bottom-up "this item is surprising/notable" signal that pulls items into consideration, especially during the boundary-discovery sub-phase and within Scope-determination. |
| **Intuition-similarity** | Matches candidate items against the inquiry's purpose-template; the matching substrate of the relevance-attribution mechanism (§2.3). |
| **Context-framing** | The inquiry's purpose is the framing that biases everything; the purposive character is implemented via this primitive. |
| **Inhibition** | Suppresses items that fail relevance-attribution at HIGH confidence; suppresses out-of-territory items. |
| **Metacognition** | Monitors whether the territory has been covered, whether convergence criteria are met, whether re-invocation should be self-signaled. Handles uncertainty defaults. |
| **Focus-deep** | When an item appears highly relevant and complex, allocates depth-processing (probing for adjacent items / verifying content). |

**Three primitives are deliberately absent:**

- **Simulation** — surfacing does NOT construct hypotheticals about items. The territory exists (or candidate-exists); surfacing draws from it. Constructing hypotheticals is the operation of creating-from-nothing.
- **Evaluation-as-multi-axis-ranking** — surfacing tags items by RELEVANCE (purpose-conditioned single-axis judgment), not by multi-axis worth. Multi-axis ranking is the operation of adjudicating-among-candidates.
- **Motivation** — surfacing's effort-allocation is implicit in the purpose + Attention-pointer + Focus-deep composition.

---

## 3. Process Model

Surfacing's runtime pipeline is a three-phase shape with one optional conditional pre-phase.

### 3.1 The three-phase shape

```
[optional Boundary-discovery sub-phase — fires when territory is implicit]
                              │
                              ▼
PHASE 1: RECEPTION
   Receive purpose + territory specification + optional prior-artifact +
   optional prior-workspace + optional refined-sub-purpose. Once per invocation.
                              │
                              ▼
PHASE 2: RELEVANCE-ATTRIBUTED TRAVERSAL
   Iterative cycle; six components fire as needed per iteration (per §3.4).
   Loop until convergence (per §4.5).
                              │
                              ▼
PHASE 3: ASSEMBLY
   Compile the thin artifact (Traversal Trace + State Summary).
   Initialize workspace-populated field. Once per invocation.
```

### 3.2 Optional Boundary-discovery sub-phase

**Gating predicate** (default; refinement-trigger = operational ambiguity in identifying discover cases): fires when the input contract's `territory` field is `unbounded` or `discover` (not `explicit-bounded` and not `abstract-bounded`).

When fired: probe outward using Salience + Intuition-similarity to surface the territory's edges; emit a territory specification that becomes the input to the main Reception phase.

When skipped (territory is explicit-bounded or abstract-bounded): the sub-phase does not fire; Reception receives the pre-given territory specification directly.

### 3.3 Reception

Once per invocation. Receives:

- **Required:** the inquiry's `purpose` (the bias source for relevance-attribution); the `territory` specification (from input or from the sub-phase's output).
- **Optional re-invocation parameters:** `prior-artifact` (always available across invocations; persisted to disk); `prior-workspace` (supplied by the runner when the same LLM session continues from a prior invocation); `refined-sub-purpose` (a refined purpose narrowing the bias scope for this re-invocation).

Reception initializes the workspace (loading purpose + territory + prior-artifact if present) and prepares for Traversal.

### 3.4 Relevance-attributed Traversal

The iterative cycle. The six components from §2.1 fire within each iteration. The **default operational ordering** (refinement-trigger = empirical observation that a different order improves coverage or efficiency):

1. **Scope-determination** — determine the sub-region for this cycle.
2. **Item-enumeration / generation** — list (or generate) items within the sub-region.
3. **Relevance-attribution** — apply the mechanism (§2.3) to each item; emit per-item tag + confidence into the workspace; capture into the in-progress Traversal Trace (per §2.1 Output-shaping; capture-at-moment).
4. **Coverage-tracking** — update the sub-region's coverage confidence.
5. **Absence-detection** — if the sub-region contained no relevant items, mark it confirmed-absent.
6. **Output-shaping** — accumulate per-item records into the in-progress artifact state.

The cycle iterates until convergence per §4.5. Workspace items accumulate across iterations as the LLM session reads them (this is the substantive product). Artifact entries accumulate across iterations as the in-progress Traversal Trace grows.

### 3.5 Assembly

Once per invocation, at the end of Traversal. Compiles the thin artifact's two sub-sections:

- **Traversal Trace** (per §5.4) — the chronological per-entry record accumulated during Traversal is finalized.
- **State Summary** (per §5.5) — the aggregate view is mechanically derived from the Trace: per-region coverage map, confirmed-absent regions, concept-names list, frontier flags, territory + purpose echo, workspace-populated status initialization.

The workspace is implicitly assembled during Traversal (the LLM has accumulated content as it read); Assembly does not need to compile workspace content into the artifact.

### 3.6 Re-invocation as parameterized variation

Re-invocation is the same 3-phase operation with optional input parameters. Two parameters extend the initial invocation:

- **`prior-artifact`** — always available across invocations (persisted to disk). The Trace + Summary serve as the re-invocation's reference. Reception incorporates it; Traversal can skip items already in the prior Trace using the Trace as an exclusion filter (UNLESS the refined-sub-purpose changes the relevance assessment for previously-traversed items).
- **`prior-workspace`** (optional) — supplied by the runner ONLY when the same LLM session continues from a prior invocation. The runner is the session-continuity authority; the discipline does NOT detect session continuity itself. If `prior-workspace` is absent, the discipline operates from `prior-artifact` alone or from scratch.

The operation's identity is preserved across invocations; only inputs and intermediate behavior parameterize.

### 3.7 Idempotency within invocation

Surfacing is idempotent within a single invocation: same input + same purpose → same workspace + same artifact. The discipline does NOT loop over multiple invocations within itself; cross-invocation re-invocation is the runner's responsibility.

---

## 4. Quality

### 4.1 The failure-mode framework — LAYER 1 vs LAYER 2

Failure modes split into two layers:

- **LAYER 1 — Operational failures.** Detectable via output observation; recoverable via re-invocation. Seven modes (§4.2).
- **LAYER 2 — Identity failures.** Detectable via behavioral audit over time; erode the discipline's intrinsic character; not simply recoverable. Three modes (§4.3).

### 4.2 LAYER 1 — Operational failure modes

| # | Mode | Recognition | Corrective |
|---|---|---|---|
| **1** | **Missed-relevance** | Downstream signals a sub-region that should have been surfaced wasn't | Re-invoke with refined-sub-purpose for the missing region. |
| **2** | **Surfaced-irrelevance** | Downstream filters or critiques an inventory item as not bearing on the inquiry | Downstream filtering; no surfacing action needed (bounded cost). |
| **3** | **Over-coverage** | Inventory's signal-to-noise ratio is degraded by too many low-confidence items | Adjust the high-confidence-rejection threshold of Inhibition; re-invoke if downstream-blocking. |
| **4** | **Territory-mis-binding** | Discipline operates outside the territory specification; surfaces items not in scope | Re-invoke with corrected territory specification. |
| **5** | **Workspace overload** | The LLM session reads so much content during Traversal that the context window saturates; later cognitive operations have degraded performance | PRIMARY: self-signal frontier-for-re-invocation (the discipline traverses what it can within budget, tags items, emits a frontier flag saying "this sub-region is incomplete; re-invoke to cover it"). SECONDARY: sampling (future PROCESS-layer addition; not committed at MEANING-layer). |
| **6** | **Artifact under-specification** | The artifact is too thin for cross-session resume; a new LLM session cannot determine what to re-read | Required minimum fields enforced at Output-shaping: every Trace entry has item identifiers; every concept-name has provenance; coverage map is complete. |
| **7** | **Workspace-artifact desync** | Artifact claims item X was tagged core, but workspace LLM lost track due to context drift; the two disagree | Capture-at-moment-of-tagging during Output-shaping (per §2.1). The artifact is the authoritative tag record. |

### 4.3 LAYER 2 — Identity failure modes

| # | Mode | Recognition | Why-erodes-identity |
|---|---|---|---|
| **1** | **Interpretive-overstep** | Discipline produces cross-item relational structure or interpretive role-assignment in the inventory | Violates NOT-list items (does not produce stable conceptual structure; does not construct interpretive meaning). The discipline begins doing a different operation. |
| **2** | **Purpose-loss** | Discipline operates without a clear purpose; relevance tags become default-uniform or meaningless | Violates the purposive character (§1.1). The discipline's identity-operation cannot perform without a purpose. |
| **3** | **Self-coupling-to-downstream** | Discipline's calibration depends ENTIRELY on downstream-output verdicts | Violates the self-contained identity. Over time, surfacing's quality definition becomes downstream-dependent, eroding the intrinsic character. |

### 4.4 Asymmetric-failure principle

**Missing a relevant item is structurally worse than surfacing an irrelevant item.**

- False-positive (surfaced irrelevant): downstream filters or critiques the item out. Recovery is cheap (bounded effort).
- False-negative (missed relevant): downstream cannot recover what was never surfaced. The system does not know what it does not know. This is the **information-loss-in-the-dark failure mode**.

**Operational form:** lean toward INCLUSION under uncertainty. The stop-rule is **territory-bounded traversal + uncertainty-includes filtering** (§4.5).

### 4.5 Coverage criteria

The Traversal cycle terminates when (default; refinement-trigger = empirical observation that termination is too eager or too late):

- The bounded territory has been exhaustively traversed at the current resolution.
- All items the relevance-attribution mechanism is uncertain about have been included with appropriate confidence tagging (no item filtered at uncertain-relevance level).
- Items rejected only on HIGH-confidence rejection (per Inhibition primitive's behavior in §2.4).

**Workspace-overload trigger** (default; refinement-trigger = empirical observation that the trigger fires too early or too late): when the discipline self-observes that adding more items to workspace would likely exceed the LLM's effective context budget, the discipline emits a frontier flag for the remaining uncovered region rather than continuing to read. This preserves the asymmetric-failure principle (signal incompleteness rather than silently drop).

### 4.6 Calibration trajectory + signals

**Three-stage trajectory:**

- **Bootstrap** (current state; no calibration data yet): LLM-direct operation; trustworthiness via reference test bed + internal consistency checks.
- **Early operation** (~10-20 inquiries using surfacing): coverage of confirmed-absent regions observable; edge-item ratios accumulate; re-invocation rate trackable.
- **Mature operation** (~30+ inquiries per purpose-type): relevance-confidence-vs-downstream-confirmed-relevance frequency computable; per-purpose-type calibration curves stabilize.

**Five primary self-contained signals:**

| # | Signal | Operates at | Observation method |
|---|---|---|---|
| **PS1** | Coverage of obvious items | Workspace | LLM introspection ("did you load the obvious items for this purpose-type?"); cross-session proxy via artifact's concept-names list |
| **PS2** | Coverage of confirmed-absent regions | Artifact | Re-examination of regions claimed confirmed-absent |
| **PS3** | Internal consistency of relevance tags | Artifact | Tag-consistency check: no item multi-tagged at incompatible levels; no confirmed-absent region inconsistent with adjacent surfaced regions |
| **PS4** | Coverage of obvious-misses given purpose | Workspace + Artifact (hybrid) | Reviewer asks LLM about content (workspace channel); reads concept-names list (artifact channel); checks for obvious associations |
| **PS5** | Coverage of edge items via sub/side-to-core ratio | Artifact | Count Trace entries tagged sub/side vs core; observe ratio |

**Two secondary downstream-augmented signals** (refinement only; not foundation):

- **SS1** — relevance-confidence-vs-downstream-confirmed-relevance frequency over many inquiries.
- **SS2** — re-invocation rate per inquiry.

### 4.7 Self-assessment output

At the end of an invocation, surfacing reports:

- **PROCEED** — all checks pass; output is ready for downstream consumption.
- **FLAG** — output produced but one or more checks raised a flag (e.g., workspace-overload mitigation fired; frontier-signal emitted for uncovered region); downstream consumer should review.
- **RE-RUN** — output incomplete or structurally suspect; re-run recommended with adjusted parameters.

---

## 5. Output

### 5.1 The dual output

Surfacing produces TWO work-products with distinct roles, both load-bearing:

- **(a) The workspace work-product** (§5.2) — the substantive product; session-local; the LLM session's in-context content + explicit scope tags.
- **(b) The thin artifact work-product** (§5.3) — the navigation/handoff product; persistent; no item content; the Traversal Trace + State Summary.

### 5.2 The workspace work-product

The LLM session's in-context content (read items from the bounded territory during Traversal) plus explicit scope tags (per-item relevance verdicts emitted during reading). Substrate: the Working Memory primitive's HYBRID delegation per `docs/thinking_space_dynamics.md` ("LLM context native + explicit scope tagging").

**Observability:** via LLM introspection — a same-session reviewer queries the LLM about what was read and how it was tagged. The artifact's Traversal Trace serves as an external corroboration record.

**Persistence:** session-local. The workspace exists only within the LLM session that produced it; session-end loses the workspace. Cross-session downstream consumers must operate from the artifact alone or re-read items.

### 5.3 The thin artifact work-product

A persistent record saved to the inquiry folder. The artifact contains NO item content; item content lives in the workspace. The artifact carries identifiers + tags + metadata about the traversal.

**"Thin" criterion:** no item content. Size is consequence; criterion is content-type. A 200-region artifact with 500 concept-names is thin (no item content); a 5-region artifact that included item content would violate the criterion regardless of byte count.

The artifact has two top-level sub-sections: **Traversal Trace** (§5.4) and **State Summary** (§5.5).

### 5.4 Traversal Trace schema (PRIMARY artifact granularity)

Chronological record of the discipline's traversal. Per entry:

| Field | Content |
|---|---|
| Sequence ordinal | Position in the traversal (1, 2, 3, ...) |
| Region (or sub-region) | Identifier of the territory region operated on at this step |
| Item identifier(s) | Identifiers of items enumerated/generated at this step — NOT content |
| Per-item relevance verdict | One of {core / sub / side / umbrella} per item |
| Per-item confidence | HIGH / MEDIUM / LOW per item |
| Step note (optional) | Brief one-line note (e.g., "high signal density"; "boundary edge reached") |

Per-trace-entry tags are the **primary artifact granularity**. They are captured at the moment of tagging during Traversal (capture-at-moment-of-tagging; per §2.1 Output-shaping); the artifact is the authoritative tag record.

### 5.5 State Summary schema (DERIVED artifact granularity)

Aggregate view, mechanically derived from the Trace:

| Field | Content |
|---|---|
| Territory-specification echo | The bounded territory the discipline operated on |
| Purpose-specification echo | The inquiry's purpose biasing relevance-attribution |
| Coverage map | Per-region: confirmed / scanned-but-shallow / inferred / unknown; aggregate relevance verdict per region (derived from per-trace-entry tags in that region) |
| Confirmed-absent regions | Regions traversed where no relevant items were found |
| Concept-names list | Flat list; per-entry: `{name: <string>, type: <vocabulary \| structural-reference \| coined-term>, provenance: <trace-entry-id where discovered>, gloss: <optional one-line>}` |
| Frontier flags | Self-signaled requests for re-invocation; suggested refined-sub-purposes |
| Workspace-populated status | `{populated: <bool>, populated-at: <timestamp>, extent: <coverage-summary>}` — INITIALIZED by the discipline at Assembly; MAINTAINED by the runner over time (updated to `populated: false` when the session ends or the workspace is otherwise invalidated) |
| Re-invocation parameters (optional) | If the discipline self-signals re-invocation, suggested input parameters |

### 5.6 Telemetry

Operational metrics reported with the output:

- Mode (`artifact` | `possibility`) + entry point (`signal-first` | `frontier-first`)
- Cycles run; items enumerated; items tagged at each relevance level
- Sub-phase fired (yes/no) + boundary-discovery output
- Convergence criteria status; workspace-overload trigger (fired? when?)
- Failure modes checked (list of named modes from §4.1)
- Self-assessment verdict (PROCEED / FLAG / RE-RUN)

### 5.7 Frontier — open questions for downstream

The Frontier section captures what surfacing raised but did not answer:

- Sub-regions where coverage is incomplete (frontier flags from §5.5)
- Concept-names discovered but not interpreted (relational meaning belongs to downstream interpretive operations)
- Re-invocation requests with suggested refined-sub-purposes

A growing frontier is a signal of depth, not failure. It tells the next cognitive operation exactly what to investigate.

---

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Surfacing Process

### 1. State Mode + Entry Point + Receive Input

Determine the territory-type-mode (`artifact` if the territory has concrete pre-existing items — codebases, literature, corpora; `possibility` if the territory is conceptual and items must be candidate-generated). Determine the entry-point (`signal-first` if a specific purpose is given — the typical case for surfacing, which is always purposive; `frontier-first` if the territory is being surveyed before purpose-biased traversal).

Receive: the inquiry's `purpose` (required), the `territory` specification (required; either explicit-bounded, abstract-bounded, unbounded, or discover), optional `prior-artifact` (always available across invocations), optional `prior-workspace` (supplied by the runner when same-session continues), optional `refined-sub-purpose` (when re-invoking with a narrower focus).

### 2. Fire Optional Boundary-discovery Sub-phase

Apply the gating predicate (§3.2): if `territory` is `unbounded` or `discover`, fire the sub-phase. Probe outward using Salience + Intuition-similarity to surface the territory's edges. Emit a territory specification that becomes input to Reception.

If `territory` is `explicit-bounded` or `abstract-bounded`, skip the sub-phase.

### 3. Run Reception → Relevance-attributed Traversal → Assembly Cycle

**Reception** (once): initialize workspace with `purpose` + `territory` + optional `prior-artifact` + optional `prior-workspace`. Prepare for Traversal.

**Relevance-attributed Traversal** (iterative): apply the default component ordering per cycle (§3.4) — Scope-determination → Item-enumeration/generation → Relevance-attribution → Coverage-tracking → Absence-detection → Output-shaping. Per item, the relevance-attribution mechanism (§2.3) emits a per-item tag + confidence into the workspace and captures the same into the in-progress Traversal Trace (capture-at-moment).

Loop until convergence per §4.5.

**Assembly** (once): finalize the Traversal Trace; mechanically derive the State Summary; initialize the workspace-populated field.

### 4. Assess Convergence

Apply the stop-rule from §4.5:
- Territory exhaustively traversed at current resolution.
- No item filtered at uncertain-relevance level.
- Items rejected only on HIGH-confidence rejection.

If the workspace-overload trigger threshold is approached, emit a frontier flag (§5.7) for the remaining uncovered region; do NOT sample silently.

### 5. Emit Dual Output

**Workspace**: populated as side effect of Traversal (LLM in-context content + explicit scope tags). Note in the artifact's workspace-populated status: `{populated: true, populated-at: <timestamp>, extent: <coverage-summary>}`.

**Artifact**: save to the inquiry folder per the markdown rendering of §5.4 (Traversal Trace) + §5.5 (State Summary) schemas. The artifact carries no item content (per §5.3 "thin" criterion).

### 6. Self-Assessment Verdict

Report one of:

- **PROCEED** — all convergence criteria met; no LAYER 1 failure-mode flags raised; output ready for downstream consumption.
- **FLAG** — output produced; one or more flags raised (e.g., workspace-overload mitigation fired; frontier-signal emitted for uncovered region; coverage-confidence less than expected); downstream consumer should review the flags before consuming.
- **RE-RUN** — output incomplete or structurally suspect (e.g., territory-mis-binding detected mid-traversal; artifact under-specification self-detected); re-run recommended with adjusted parameters.

Include the telemetry metrics from §5.6 with the verdict.
