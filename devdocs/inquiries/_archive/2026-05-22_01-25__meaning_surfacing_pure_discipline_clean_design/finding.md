---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Surfacing — Pure Discipline Clean Design (Meaning Layer)

## Question

The user opened this inquiry with: "A clean discussion independent from how explore's current design, which we assume has multi layer problems and issues, and with understanding of how pure version of explore should be, lets call it surfacing for sake of distinction between current explore." The user then named five clauses surfacing must satisfy: (a) surface only what is relevant + sub-relevant + side-relevant + core-relevant; (b) not do other disciplines' jobs; (c) not know about other disciplines; carry an internal sensemaking-LIKE-but-NOT-sensemaking relevance-judging mechanism; (d) have a structure; (e) be the most upstream and most consequential discipline — failure cascades into all downstream operations.

**The question:** what IS "surfacing" as a cognitive discipline — from scratch, independent of the current `/explore` discipline at `cognitive_harness/explore/references/explore.md` (the Structural Exploration discipline spec) — given the five clauses, the project's general cognitive vocabulary, and the disciplines taxonomy at `docs/discipline_taxonomy.md`?

**The goal:** a MEANING-layer characterization (a finding-level artifact) — a one-paragraph identity statement + the discipline's structural shape + its internal relevance-judging mechanism + its failure modes (with the asymmetric-failure framing) + its calibration trajectory + the scope of what this artifact commits versus what is deferred to downstream inquiries. The user said "lets discuss this" — the discussion happens through the discipline's full E → S → D → I → C → CONCLUDE pipeline producing this finding.

The Layer Commitment is **MEANING primary** (a from-scratch redefinition of a discipline). **No Synthesis Trigger** was declared (the user explicitly wanted a clean independent discussion, not a synthesis of priors). The hard constraint: do NOT derive surfacing's identity by negating current `/explore`'s flaws; surfacing must stand on its own terms.

## Finding Summary

- **Surfacing is the cognitive operation by which items present in (or candidate-generable for) a bounded territory move from latent into present + relevance-tagged, biased by the inquiry's purpose.** It is purposive, idempotent within an invocation, re-invocable across invocations, and the most upstream operation in any cognitive loop — its output is the workspace content on which all downstream cognitive work depends.

- **Its signature internal capability is the *relevance-attribution mechanism*** — a per-item operation invoked iteratively during the discipline's Traversal phase. The mechanism is distinguished from sensemaking-proper (the Structural Sensemaking discipline at `cognitive_harness/sense-making/references/sensemaking.md`) on 8 structural properties: operation scope (per-item vs cross-item), output shape (tag vs anchor structure), temporal positioning (during vs after), granularity (labeling vs interpretive), speed/depth posture (fast-coarse-first-pass vs deliberate-fine-structured), primitive emphasis, failure-mode set, calibration target.

- **The relevance vocabulary commits to 4 levels: core-relevant, sub-relevant, side-relevant, and an umbrella "relevant" tag** used when subtype granularity is uncertain. The user's framing collapses to a "1 umbrella + 3 subtypes" interpretation, not a 4-flat-types or a 2-axis-grid.

- **The conceptual structural shape is three phases plus an optional pre-phase:** (optional Boundary-discovery sub-phase, fired only when the territory is implicit) → Reception → Relevance-attributed Traversal → Assembly. The Traversal phase is iterative and composes six components (Scope-determination, Item-enumeration/generation, Relevance-attribution, Coverage-tracking, Absence-detection, Output-shaping).

- **It composes 8 load-bearing cognitive primitives** from the project's typed 11-primitive set (`docs/thinking_space_dynamics.md` — the Thinking-Space Dynamics architectural reference): Attention-pointer + Working Memory + Salience + Intuition-similarity + Context-framing + Inhibition + Metacognition + Focus-deep. It **deliberately excludes** three: Simulation (no hypotheticals about items), Evaluation-as-multi-axis-ranking (no worth-ranking across multiple axes), Motivation (Phase B in the primitive set; deferred). The composition's signature is **Salience + Context-framing as load-bearing** combined with the deliberate absence of Simulation — no other discipline has this exact profile.

- **It produces a *relevance-tagged inventory*** — items with labeling content (identifier + functional one-line + surface form + optional adjacency facts) and a relevance tag at the 4 levels, plus confirmed-absent regions (a productive output, not a gap), plus a coverage map, plus frontier flags for re-invocation. Output is markdown by default; a typed-record schema is a forward-tied addition activated when downstream automation consumers exist.

- **Under uncertainty it leans toward inclusion** (the asymmetric-failure principle). The operational stop-rule is *territory-bounded traversal + uncertainty-includes filtering*: the territory specification bounds the work; items are filtered only on high-confidence rejection; items the mechanism is uncertain about default to inclusion with appropriate confidence-tagging. Reason: missing a relevant item is structurally worse than surfacing an irrelevant one, because downstream cannot recover what was never surfaced.

- **Its failure-mode framework has two layers.** LAYER 1 (operational, recoverable via re-invocation): missed-relevance, surfaced-irrelevance, over-coverage, territory-mis-binding. LAYER 2 (identity, erodes intrinsic character): interpretive-overstep (the discipline begins producing cross-item relational structure), purpose-loss (the discipline operates without a clear purpose), self-coupling-to-downstream (the discipline's calibration depends entirely on downstream verdicts).

- **Calibration is primary-self-contained + secondary-downstream-augmented.** Five primary signals are observable from inside the discipline (coverage of obvious items via a small reference test bed; coverage of confirmed-absent regions via re-examination; internal consistency of relevance tags; coverage of obvious-misses given purpose via downstream-naive reviewer test; coverage of edge items via sub/side-to-core ratio). Two secondary signals depend on downstream observation (relevance-confidence-vs-downstream-confirmed-relevance frequency; re-invocation-rate per inquiry). The trajectory is **bootstrap → early operation → mature operation** — at the project's current state (Level 0 autonomy, no calibration data yet), primary signals operate; secondary signals come online after sustained operation.

- **Re-invocation is a parameterized variation of the same 3-phase operation, not a distinct operation.** Optional input parameters (a prior inventory + a refined sub-purpose) let the Reception phase merge with prior state and the Traversal phase skip already-surfaced items.

- **Discipline-taxonomy placement is Core** — pipeline-sequential at the upstream loop step, per the admission rule at `docs/discipline_taxonomy.md` (the thinking-discipline taxonomy with four categories: Core, Cross-cutting, Boundary, Situational).

- **Surfacing's identity is intrinsic.** It does not produce stable conceptual structure; does not adjudicate which item to act on next; does not generate items beyond the territory; does not partition items into pieces with interfaces; does not evaluate items for correctness or quality; does not construct interpretive meaning of items; does not maintain cross-inquiry memory; does not choose its own purpose. Each exclusion grounds in an intrinsic feature of the operation (per-item granularity, draw-from rather than create, labeling-not-interpretive, per-invocation not cross-inquiry, exogenous purpose), not in what siblings do.

- **The MEANING-layer artifact commits the above** and explicitly defers spec section organization, precise process step-level granularity, telemetry list, frontier-section precise structure, progression versioning (all to a downstream STRUCTURAL inquiry); exact re-invocation trigger details, exact iteration counts, exact convergence-iteration limits (all to a downstream PROCESS inquiry); rename-current-/explore-to-/surfacing decision, implementation timeline, multi-head architecture coordination (all to user-discretion downstream).

## Finding

### Surrounding context (why we are even discussing this)

The HomeGrown project at `/Users/ns/Desktop/projects/native/` builds a self-improving cognitive system — a set of thinking disciplines (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique, plus boundary/situational disciplines) that compose into iterative loops (`/MVL`, `/MVL+`, future `/meta-loop`) and an end-goal of autonomous self-modification via Baldwin cycles (see `docs/desc.md` — the autonomous-consciousness-goal frame).

In the project's recent inquiry chain (the 2026-05-21 series), the user surfaced a concern: `/explore` may be doing more than its declared `§1.5` identity allows (`§1.5` of `cognitive_harness/explore/references/explore.md` declares that `/explore` produces labels; sense-making consumes labels to extract anchors). The chain culminated in a forward-design inquiry (`devdocs/inquiries/2026-05-22_00-30__structural_explore_section_3_1_forward_design_per_21_07_00/`) that produced an additive form-recognition extension at `/explore` §3.1.

But the user then signaled a stronger move: stop trying to fix current `/explore`; instead, ask what its "pure version" should be from scratch. The user named this pure version "surfacing" to mark the distinction. The user said: "lets discuss this."

This finding is the discussion. It treats surfacing as a from-scratch discipline-design problem at the MEANING layer (what surfacing IS as a cognitive operation), independent of current `/explore`'s specifics. The hard constraint throughout: do not derive surfacing's identity by negating current `/explore`'s flaws; surfacing must stand on its own terms.

### 1. The intrinsic identity of surfacing

**Surfacing is the cognitive operation by which items present in (or candidate-generable for) a bounded territory move from latent into present + relevance-tagged, biased by the inquiry's purpose.**

Unpacking the sentence:

- **"items"** — the unit of work. An item is anything in the territory the discipline can point at: a file, a literature reference, a design candidate, a concept, an observation, a constraint, a piece of evidence. Surfacing operates one item at a time.

- **"present in (or candidate-generable for) a bounded territory"** — the items either exist in the territory (artifact case: a codebase, a literature corpus, a conversation history) or must be candidate-generated for the territory (possibility case: a conceptual space, a solution-candidate space). In both cases the territory is bounded — surfacing does not operate on the whole world; it operates on a specified scope.

- **"move from latent into present"** — surfacing is the act of *drawing into attention*. Before surfacing, the item exists or is generable but is not in the inquiry's workspace; after surfacing, the item is in the workspace, available for downstream cognitive work.

- **"+ relevance-tagged"** — every item that enters the workspace via surfacing carries a relevance tag (core-relevant / sub-relevant / side-relevant / umbrella). The tag is the discipline's per-item judgment about whether the item bears on the inquiry's purpose.

- **"biased by the inquiry's purpose"** — surfacing is purposive. The inquiry has a purpose (a question, a goal, a topic); the purpose biases what stands out as relevant. Without a purpose, surfacing has no bias source; with a purpose, the discipline operates against it.

The identity statement uses no sibling-discipline name. It grounds the operation in intrinsic terms: items, territory, purpose, workspace. A reader who has never encountered any other discipline can read the statement and understand what surfacing is.

**The most-upstream-in-any-loop positioning.** Whatever any subsequent cognitive operation considers, surfacing put there. Sense-making operates on already-surfaced material. Decomposition cuts a known whole. Innovation generates novelty from a seed. Critique evaluates candidates. None of those operations surface items into the inquiry's view — they all presuppose surfacing has happened. This is "upstream" in a logical (precondition) sense; within a single loop pass the temporal order can vary, but the precondition relationship is fixed.

**The cognitive-substrate consequence.** Because surfacing populates the workspace, its quality is load-bearing for everything that follows. A workspace populated with the wrong items will lead to downstream conclusions that depend on the wrong inputs; a workspace missing relevant items will lead to downstream conclusions that omit what was never considered. This is the user's clause (e) — failure cascades.

**Taxonomy placement: Core.** The four-category taxonomy at `docs/discipline_taxonomy.md` (the thinking-discipline taxonomy: Core, Cross-cutting, Boundary, Situational) admits a Core discipline when it operates pipeline-sequentially at a specific loop step. Surfacing meets the admission rule — it operates at the upstream loop step, consumes the inquiry's purpose + territory specification, and produces input for the next step.

### 2. The relevance-attribution mechanism (the discipline's signature internal capability)

The user named the discipline's most distinguishing internal feature: "it has it's own relevance sense making like mechanism inside i guess. but not exactly like sensemaking." This mechanism is the heart of surfacing — without it, the discipline cannot perform its job (it would emit untagged inventories), and with it, the discipline can perform its job without delegating to any sibling.

**Name and structural classification.** The mechanism is named **relevance-attribution**. Structurally it is a *per-item operation invoked iteratively during the discipline's Relevance-attributed Traversal phase* (see Section 4 for the phase structure). It is not a layer (not a continuous background process), not a phase (not a temporal segment of the discipline's overall structure), and not a discrete classifier (not an isolated atomic predicate). It is a recognizable named operation that fires once per candidate item, producing a relevance tag.

**Why surfacing needs its own relevance-judgment rather than delegating.** Two structural reasons:

First, sensemaking-proper (the operation Structural Sensemaking performs at `cognitive_harness/sense-making/references/sensemaking.md`) operates on already-surfaced material. For sensemaking to judge an item's relevance, the item must already be in the workspace. Surfacing's job is to put items in the workspace; calling sensemaking to decide whether to put them in the workspace would be circular.

Second, sensemaking operates CROSS-ITEM — it constructs anchors that establish relationships among items, builds boundaries through perspective checking, and produces a stabilized model. Surfacing operates PER-ITEM — it tags individual items as relevant or not. The two operations have different scopes. A per-item operation that asks "is this item relevant?" without constructing cross-item structure is the natural fit for the surfacing-internal need.

**The 8 structural distinctions from sensemaking-proper.** The user's framing ("sensemaking-LIKE but not exactly like sensemaking") names a real structural distinction. The two operations differ on eight properties:

| # | Property | Relevance-attribution (inside surfacing) | Sensemaking-proper |
|---|---|---|---|
| 1 | Operation scope | per-item | cross-item |
| 2 | Output shape | per-item tag (a relevance value) | cross-item relational structure (anchors with relationships) |
| 3 | Temporal positioning | during the surfacing pass (immediate) | after surfacing's output exists (deliberate) |
| 4 | Granularity | labeling — "does this bear on the purpose?" | interpretive — "what does this mean in relation to other items?" |
| 5 | Speed / depth posture | fast / coarse / first-pass | deliberate / fine / structured |
| 6 | Primitive emphasis | Intuition-similarity + Context-framing + Inhibition + Salience load-bearing | Simulation + Working Memory + Intuition-similarity + Metacognition load-bearing |
| 7 | Failure-mode set | LAYER 1 (missed-relevance, surfaced-irrelevance, over-coverage, territory-mis-binding) + LAYER 2 (interpretive-overstep, purpose-loss, self-coupling-to-downstream) | Status quo bias, premature stabilization, anchor dominance, perspective blindness, clean resolution trap, self-reference blindness |
| 8 | Calibration target | coverage + relevance-confidence-calibration | stable model + perspective saturation + ambiguity resolution ratio |

The eight properties are largely independent — at least six can be varied without varying the others (operation scope is independent of temporal positioning; output shape is independent of granularity; primitive emphasis, failure-mode set, and calibration target are each independent axes). The distinction is structurally robust, not rhetorical.

**The mechanism's substrate.** Relevance-attribution composes from the project's typed 11-primitive set at `docs/thinking_space_dynamics.md`. The load-bearing primitives within the mechanism are:

- **Intuition-similarity** — matches the candidate item against the inquiry's purpose-template; the matching engine
- **Context-framing** — the inquiry's purpose is the framing that biases the match; this primitive supplies the bias source
- **Inhibition** — suppresses items that fail relevance-matching at high confidence (so they don't enter the inventory)
- **Metacognition** — handles uncertainty (when the match is unclear, defaults to inclusion per the asymmetric-failure principle in Section 6)

### 3. The relevance vocabulary and the output

**The 4-level relevance vocabulary.**

The user named four relevance modes: "relevant + sub-relevant + side-relevant + core-relevant." The committed interpretation: **one umbrella term plus three granular subtypes.**

- **core-relevant** — the item directly addresses the inquiry's central question.
- **sub-relevant** — the item addresses a sub-aspect of the central question (within the central scope but secondary).
- **side-relevant** — the item is adjacent material that bears on the question without being about it (contextual, related territory).
- **relevant** (umbrella) — the item is at least one of the three subtypes; used when the discipline judges relevance but uncertainty about which subtype is appropriate.

An item carries exactly one tag — one of {core, sub, side, umbrella}. The umbrella is the fallback when granularity is uncertain. The vocabulary may evolve with operating data (downstream consumers may collapse to relevant/not-relevant in practice, or may need finer granularity), but the MEANING-layer commitment is the 4-level scheme.

Rejected interpretation: a "4 flat parallel types" reading. Structurally, "core" and "sub" share an axis (depth into the question); "side" is on a different axis (adjacency to the question); "relevant" is the umbrella. The four terms do not form a 4-flat-types set.

Rejected interpretation: a "2-axis grid" reading. The four terms do not form a clean (depth × position) grid; "relevant" would not fit as a cell — it functions as the union of the other three.

**The output shape (the Transform's right-side).**

| Output field | Content |
|---|---|
| **Territory-statement** | What territory was operated on; which sub-regions were scanned; the invocation's input parameters |
| **Purpose-statement** | What inquiry-purpose biased the relevance-attribution |
| **Inventory** | The set of surfaced items, each with: identifier; labeling content (functional one-line + surface form + optional adjacency facts); relevance tag (one of core/sub/side/umbrella); relevance-confidence (HIGH / MEDIUM / LOW); region-of-origin |
| **Confirmed-absent regions** | Regions of the territory scanned where no relevant items were found — a productive output, not a gap. Absence is a positive claim, recorded explicitly. |
| **Coverage map** | Per-region confidence of coverage: confirmed / scanned-but-shallow / inferred / unknown |
| **Frontier flags** | Self-signaled requests: sub-regions where coverage is incomplete and the discipline recommends re-invocation; suggested re-invocation parameters when applicable |

**The output is a contract with downstream consumers.** The output's quality is partly defined by whether downstream consumers can use it without re-doing surfacing work. Items must carry enough labeling to be interpretable downstream; the relevance tags must be confidence-tagged; the confirmed-absent regions must be explicit; the coverage map must honestly represent coverage confidence. Failing this contract pushes work back upstream and defeats the upstream-precondition relationship.

**Output format.** Markdown by default — the discipline produces a markdown rendering of the output structure, consistent with the project's existing artifact conventions (`docs/runtime_environment/folder_based.md` — the Folder-Based Inquiry System spec). A typed-record schema is a forward-tied addition: it activates when downstream automation consumers exist OR the project commits to machine-readable inquiry artifacts. Until activation, markdown-only is canonical.

### 4. The conceptual structural shape

Surfacing has a structure. The user invoked this explicitly: "and it should have a structure." The committed shape:

```
[optional Boundary-discovery sub-phase — fires only when the territory is implicit]
                              │
                              ▼
        ┌─────────────────────────────────────────┐
PHASE 1 │              RECEPTION                  │
        │  Receive purpose + territory spec +     │
        │  optional prior inventory + optional    │
        │  refined sub-purpose. Once per          │
        │  invocation.                            │
        └─────────────────────┬───────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
PHASE 2 │     RELEVANCE-ATTRIBUTED TRAVERSAL      │
(iter.) │                                         │
        │  Iterative — six components fire as     │
        │  needed within each cycle:              │
        │    • Scope-determination                │
        │    • Item-enumeration / generation      │
        │    • Relevance-attribution (Section 2)  │
        │    • Coverage-tracking                  │
        │    • Absence-detection                  │
        │    • Output-shaping                     │
        │                                         │
        │  Loop until territory traversal is      │
        │  complete (per the stop-rule in §6).    │
        └─────────────────────┬───────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
PHASE 3 │               ASSEMBLY                  │
        │  Compile the inventory + confirmed-     │
        │  absent regions + coverage map +        │
        │  frontier flags. Once per invocation.   │
        └─────────────────────────────────────────┘
```

**The Boundary-discovery sub-phase is conditional.** It fires only when the inquiry does not pre-specify the territory's bounds. When it fires, it probes outward to surface the territory's edges; its output is a territory specification that becomes the input to the main Reception phase. When the territory is explicit (concrete pre-specified — a codebase path, a literature topic, a corpus; or abstract pre-specified — a conceptual space with explicit description), the sub-phase is skipped and the shape begins at Reception.

The sub-phase is not a separate operation or a separate discipline — it uses the same primitive substrate as surfacing's main operation and its output is consumed only by surfacing itself. Treating it as a separate operation would create a discipline that exists only to feed surfacing, which is a meaningless decomposition.

**The six Traversal components are not sub-phases.** They have no strict temporal ordering relative to each other; they are operations that fire as needed within each iteration of the Traversal cycle:

- **Scope-determination** decides which sub-region of the territory the current cycle operates on.
- **Item-enumeration / generation** lists existing items (artifact case) or generates candidate items (possibility case) within the current sub-region.
- **Relevance-attribution** applies the mechanism from Section 2 to each enumerated/generated item, producing a per-item relevance tag.
- **Coverage-tracking** maintains a record of which sub-regions have been operated on at which resolution.
- **Absence-detection** marks sub-regions as confirmed-absent when they are operated on and contain no relevant items.
- **Output-shaping** accumulates the per-item tags + region annotations into the in-progress inventory; prepares for Assembly.

**Re-invocation: parameterized variation of the same operation.** When surfacing is invoked a second time within the same inquiry (or across iterations of an outer loop), it is the same 3-phase + sub-phase shape with additional input parameters. Two optional parameters:

- **prior-inventory** — when present, Reception incorporates the prior inventory; Traversal can skip already-surfaced items (using the prior inventory as an exclusion filter); Assembly merges the new tags with the prior inventory rather than producing a fresh inventory.
- **refined-sub-purpose** — when present, Reception uses the refined sub-purpose as the relevance-bias source for this invocation. The inquiry's overall purpose remains; the refined purpose narrows the bias scope.

Re-invocation triggers (the conditions under which a runner or a downstream signal warrants re-invoking surfacing): a downstream discipline identifies a sub-region not yet surfaced; the inquiry purpose narrows (a sub-question emerges that needs its own surfacing); the inquiry purpose widens (the original scope was too narrow); or the discipline self-signals re-invocation via frontier flags emitted at Assembly (the discipline knows it didn't fully cover some region).

### 5. The cognitive primitives surfacing composes from

The project commits to a typed 11-primitive set in `docs/thinking_space_dynamics.md` (the Thinking-Space Dynamics architectural reference). Surfacing's primitive composition selects from this set.

**Eight load-bearing primitives:**

| Primitive | Role in surfacing |
|---|---|
| **Attention-pointer** | Selects which item from the territory is currently under consideration during the Traversal phase |
| **Working Memory** | Holds the current candidate set + the territory representation + the inquiry's purpose + the in-progress inventory |
| **Salience** | The bottom-up "this item is surprising/notable" signal that pulls items into consideration, especially during the boundary-discovery sub-phase and within Scope-determination |
| **Intuition-similarity** | Matches candidate items against the inquiry's purpose-template; the matching substrate of the relevance-attribution mechanism (Section 2) |
| **Context-framing** | The inquiry's purpose is the framing that biases everything; surfacing's purposive character is implemented via this primitive |
| **Inhibition** | Suppresses items that fail relevance-attribution at high confidence; suppresses out-of-territory items |
| **Metacognition** | Monitors whether the territory has been covered, whether convergence criteria are met, whether re-invocation should be self-signaled; handles uncertainty defaults |
| **Focus-deep** | When an item appears highly relevant and complex, allocates depth-processing to it (probing for adjacent items / verifying its content) |

**Three deliberately-absent primitives, each with an intrinsic reason:**

- **Simulation absent** — surfacing does NOT construct hypotheticals about items. The territory exists (artifact case) or candidate-exists for the possibility case; surfacing draws from it. Constructing hypotheticals is the operation of creating-from-nothing, not the operation of drawing-from-territory.
- **Evaluation-as-multi-axis-ranking absent** — surfacing tags items by RELEVANCE (purpose-conditioned single-axis judgment), not by multi-axis worth (cost / quality / feasibility / novelty / etc.). Multi-axis ranking is the operation of adjudicating-among-candidates, not the operation of drawing-from-territory.
- **Motivation absent** — surfacing's effort-allocation is implicit in the purpose + Attention-pointer + Focus-deep composition. Explicit cross-problem effort-allocation is a different operation. (Motivation is also Phase B in the primitive set per `docs/thinking_space_dynamics.md`, so its absence is also project-state-aware.)

**Composition distinctiveness.** The 8-primitive composition with **Salience + Context-framing as load-bearing** — combined with the deliberate absence of Simulation — is the **surfacing signature**. Comparing to the Primitive Profiles table at `docs/discipline_taxonomy.md`: no current discipline has this exact composition. Sensemaking-proper has Simulation as dominant; Innovation has Simulation as dominant; Critique has Evaluation as dominant; Navigation has Simulation and Evaluation as dominant. Surfacing is distinct from each on the absence of Simulation alone, plus the Salience + Context-framing emphasis.

### 6. The asymmetric-failure principle and the two-layer failure-mode framework

**The asymmetric-failure principle.** Missing a relevant item is structurally worse than surfacing an irrelevant item. The reason is an information-flow asymmetry:

- **False-positive (surfaced irrelevant):** downstream disciplines see a tagged item that doesn't actually bear on the inquiry. Cost: downstream filters or critiques the item out. Recovery is cheap (filter, ignore, defer). The item remains in the inventory; downstream allocates bounded effort to recognizing it's irrelevant.

- **False-negative (missed relevant):** a relevant item is never tagged, never entered into the inventory. Downstream disciplines never see the item. Cost: downstream operates on an incomplete inventory; produces conclusions that depend on items that were never considered. Recovery is only via re-surfacing (re-running the discipline with revised purpose); but downstream has no way to know the missing item exists because surfacing didn't surface it. This is the **information-loss-in-the-dark failure mode** — the system doesn't know what it doesn't know.

**The principle's operational form.** The discipline leans toward INCLUSION under uncertainty. The stop-rule is *territory-bounded traversal + uncertainty-includes filtering*:

- Traverse the bounded territory exhaustively. The territory specification bounds the work — not a relevance-confidence floor.
- The relevance-attribution mechanism tags items at any relevance level — including the umbrella value for uncertainty.
- Filter out items ONLY when the mechanism produces a HIGH-CONFIDENCE rejection (the Inhibition primitive applies to clearly-irrelevant items only).
- Include all items the mechanism is uncertain about — tagged at "umbrella" or the most-likely subtype with LOW confidence.

The rule is *not* "surface everything." It is "include unless high-confidence rejected." The signal-to-noise ratio of the output is maintained by the Inhibition primitive; the noise floor is set so that edge-case relevant items are kept rather than dropped.

**LAYER 1 failure modes — operational, recoverable via re-invocation:**

| Failure mode | Recognition | Recovery |
|---|---|---|
| **Missed-relevance** | Downstream signals that a sub-region that should have been surfaced wasn't | Re-invoke with a refined sub-purpose for the missing region |
| **Surfaced-irrelevance** | Downstream filters or critiques an inventory item as not bearing on the inquiry | Filter downstream; no surfacing action needed; cost is bounded |
| **Over-coverage** | The inventory's signal-to-noise ratio is degraded by too many low-confidence items | Adjust the high-confidence-rejection threshold of Inhibition; re-invoke if material is downstream-blocking |
| **Territory-mis-binding** | The discipline operates outside the territory specification; surfaces items not in the inquiry's scope | Re-invoke with corrected territory specification |

**LAYER 2 failure modes — identity erosion, not simply recoverable:**

| Failure mode | Recognition | Why this erodes identity |
|---|---|---|
| **Interpretive-overstep** | The discipline produces cross-item relational structure or interpretive role-assignment in the inventory | Violates Section 1's NOT-list item ("does not produce stable conceptual structure") and ("does not construct interpretive meaning"). The discipline begins doing a different operation. |
| **Purpose-loss** | The discipline operates without a clear purpose; relevance tags become meaningless or default-uniform | Violates the purposive character. The discipline's identity-operation cannot perform without a purpose; if it tries, it produces an inventory but not a *relevance-tagged* inventory. |
| **Self-coupling-to-downstream** | The discipline's calibration depends ENTIRELY on downstream-output verdicts | Violates the self-contained identity. Over time, surfacing's quality definition becomes downstream-dependent, eroding the intrinsic character. |

LAYER 1 failures are expected to occur and have known recovery paths (re-invocation). LAYER 2 failures are dangerous because they shift the discipline's identity over time; they require periodic identity-audit, not just operational correction.

### 7. The calibration trajectory and trustworthiness signals

The user's framing makes surfacing's trustworthiness a central concern — if the discipline produces a bad inventory, "rest of the disciplines also messed up." But coupling surfacing's trustworthiness ENTIRELY to downstream verdicts violates the self-contained identity. The committed approach: **primary-self-contained + secondary-downstream-augmented**, with a 3-stage trajectory that respects the project's current state.

**Five primary, self-contained signals.** Each is observable from inside the discipline without requiring downstream output:

| # | Signal | Observation method |
|---|---|---|
| **PS1** | Coverage of obvious items | Maintain a small reference test bed of "obvious items per common purpose-type"; check whether surfacing surfaces them in test runs. |
| **PS2** | Coverage of confirmed-absent regions | When the discipline claims a region has no relevant items, can a re-examination of the region confirm this? If re-examination surfaces items, the discipline under-covered. |
| **PS3** | Internal consistency of relevance tags | Automated check on each inventory: no two items multi-tagged at incompatible levels; no confirmed-absent region adjacent to surfaced-region with high tag. |
| **PS4** | Coverage of obvious-misses given purpose | A downstream-naive reviewer reads the inquiry's purpose + the surfaced inventory; do obvious associations appear in the inventory? |
| **PS5** | Coverage of edge items | Count sub-relevant + side-relevant items vs core-relevant items in the inventory; the ratio shouldn't be zero (which would indicate over-tight relevance bias). |

**Two secondary signals that depend on downstream observation** (not foundation, only refinement):

- **SS1** — relevance-confidence-vs-downstream-confirmed-relevance frequency. Over many inquiries, does a "core-relevant with HIGH confidence" tag correspond to a "core-relevant in downstream consumption" frequency that matches the confidence claim? This requires accumulated data; long-horizon.
- **SS2** — re-invocation rate per inquiry. If downstream disciplines repeatedly request re-invocation of surfacing for missing material, surfacing's initial coverage was inadequate.

**The 3-stage trajectory:**

- **Stage 1 — Bootstrap (current project state, Level 0 autonomy, no calibration data yet).** The discipline operates at LLM-direct level. Trustworthiness is human-judged via the reference test bed (PS1) + the downstream-naive reviewer test (PS4). Internal consistency (PS3) is the cheapest signal to apply.
- **Stage 2 — Early operation (after roughly 10-20 inquiries using surfacing).** Coverage of confirmed-absent regions (PS2) becomes observable as inquiries re-visit territories. Coverage of edge items (PS5) becomes trackable as inventory ratios accumulate. Re-invocation rate (SS2) becomes a process-level signal. Calibration adjusts the high-confidence-rejection threshold and the relevance-attribution mechanism's bias strength.
- **Stage 3 — Mature operation (after roughly 30+ inquiries per purpose-type, per the N≥30 threshold for calibrated claims in `docs/thinking_space_dynamics.md`).** Relevance-confidence vs downstream-confirmed-relevance frequency (SS1) becomes computable. Per-purpose-type calibration curves stabilize. Baldwin-cycle seeds can be generated from miscalibration patterns (per the discipline's role in the autonomous-consciousness-goal trajectory in `docs/desc.md`).

**Phase-state-awareness commitment.** This MEANING-layer artifact explicitly acknowledges that the project is at Stage 1 (Bootstrap) now. Primary signals operate now; secondary signals come online at later stages. The discipline's identity is preserved across all three stages because primary signals remain self-contained throughout; the trajectory adds refinement, not redefinition.

### 8. The intrinsic boundary — what surfacing does NOT do

Each item below is stated on an intrinsic ground. A reader who has not encountered any sibling discipline can read each item and understand why it is excluded based on what surfacing IS, not based on what siblings are.

1. **Surfacing does NOT produce stable conceptual structure.** Intrinsic ground: surfacing operates at item-granularity; cross-item relational structure is a different operation by definition.

2. **Surfacing does NOT adjudicate which item to act on next.** Intrinsic ground: relevance-tagging is multi-item-attributive; action-selection is single-item-decisive. These are operationally distinct.

3. **Surfacing does NOT generate items beyond what is present (or candidate-present) in the territory.** Intrinsic ground: surfacing's verb is "draw from"; the items must pre-exist in or be candidate-derivable from the territory. Novelty-from-nothing is a different verb.

4. **Surfacing does NOT partition items into independent pieces with interfaces.** Intrinsic ground: surfacing emits items as a flat-ish set with optional adjacency annotations; piece-level partitioning is a structural operation on the whole inventory.

5. **Surfacing does NOT evaluate items for correctness or quality.** Intrinsic ground: relevance is purpose-conditioned; correctness and quality are content-conditioned. These are orthogonal axes. An item can be relevant and incorrect; surfacing's job is to bring it into view, not to verify it.

6. **Surfacing does NOT construct interpretive meaning of items.** Intrinsic ground: surfacing emits labeling content (identifier + functional one-line + surface form + adjacency facts) but not interpretive role-assignment ("this item plays the role of X in the larger model"). Labeling answers "what is this?"; interpretation answers "what does this MEAN in relation to other things?" Surfacing operates only at the former.

7. **Surfacing does NOT maintain cross-inquiry memory.** Intrinsic ground: surfacing fires per-invocation. Cross-inquiry coordination (what was surfaced last week; whether this territory was already mapped) is a meta-discipline concern.

8. **Surfacing does NOT choose its own purpose.** Intrinsic ground: surfacing is purposive but the purpose is exogenous. Surfacing receives the inquiry's purpose as input; it does not generate the purpose.

### 9. MEANING-layer compliance scope — what this artifact commits, what is deferred

The Layer Commitment for this inquiry is MEANING (per `_branch.md`). The artifact commits the elements in Sections 1-8 above. The following items are explicitly deferred:

**Deferred to a downstream STRUCTURAL inquiry** (about the surfacing spec file's artifact shape):
- The spec section organization (where each commitment lives in the spec file)
- The precise Process Model step-level granularity (within each Traversal component, the exact step sequence)
- The detailed Telemetry list (which fields are reported at the end of an invocation)
- The Frontier-section precise structure (the fields the frontier flags carry)
- The Progression versioning approach (whether cycle-by-cycle snapshots are produced)

**Deferred to a downstream PROCESS inquiry** (about the discipline's operational procedure):
- The exact re-invocation trigger details (which downstream signals fire re-invocation; how thresholds are set)
- The exact iteration counts within the Traversal phase (when to stop iterating; convergence criteria)
- The exact convergence-iteration limits (how many cycles before forced termination)

**Deferred to user-discretion decisions:**
- Whether to rename current `/explore` to `/surfacing` in the project's runtime (or keep both as separate skills; or migrate over time)
- The implementation timeline (when surfacing becomes a callable skill)
- The materialization plan (per `docs/materialization_lifecycle.md` — the project's lifecycle for turning findings into concrete artifacts)

**Deferred to a downstream multi-head architecture inquiry:**
- Per-head surfacing coordination details (per the autonomy ladder at `docs/autonomy_ladder.md` — the meta-loop autonomy ladder L4+ where parallel worker sessions exist)
- Multi-territory surfacing (when an inquiry needs items from multiple territories simultaneously)
- Cross-head merge protocols

## Next Actions

### MUST

- **What:** Decide whether to proceed with a downstream STRUCTURAL inquiry to produce the surfacing spec file (the artifact at, e.g., `cognitive_harness/surfacing/references/surfacing.md`), or whether the MEANING-layer characterization in this finding is sufficient discussion for now.
  **Who:** The user.
  **Gate:** Observable — the user signals the next step explicitly (e.g., "let's design the spec" or "this is enough for now").
  **Why:** The MEANING-layer commitment is now stable; the natural next step is the STRUCTURAL operationalization. But the user said "lets discuss this" — discussion completion may be sufficient without committing to a buildout.

### COULD

- **What:** Run a downstream STRUCTURAL inquiry on surfacing's spec file organization, with this finding as the MEANING-layer input.
  **Who:** A future `/MVL+` inquiry invoked by the user with a STRUCTURAL Layer Commitment.
  **Gate:** Observable — the user decides to commit to building the discipline.
  **Why:** Operationalizes the MEANING-layer commitment into a runnable spec. The STRUCTURAL inquiry would commit the spec's section organization + the precise Process Model step granularity + the Telemetry list + the Frontier-section structure + the Progression versioning. This is the natural next inquiry if the user decides to build surfacing.
  **Depends-on:** MUST item "Decide whether to proceed." This COULD is GATED — do not act until the MUST resolves.

- **What:** Decide whether to rename current `/explore` to `/surfacing` in the project's runtime, or keep both as coexisting skills, or migrate over time.
  **Who:** The user.
  **Gate:** Condition-bound — after the STRUCTURAL inquiry produces a spec that the user judges either as a replacement for current `/explore` (rename) or as a parallel discipline (keep both).
  **Why:** The user's framing ("lets call it surfacing for sake of distinction") implied a name distinction but did not commit to a rename. The decision is user-discretion and depends on whether surfacing's spec, once built, is suitable as a replacement.
  **Depends-on:** MUST item "Decide whether to proceed." This COULD is GATED — do not act until the MUST resolves.

- **What:** Build a small reference test bed for the relevance-attribution mechanism's PS1 signal (obvious items per common purpose-type).
  **Who:** A future small materialization run (per `docs/materialization_lifecycle.md` — the materialization lifecycle).
  **Gate:** Condition-bound — when surfacing is being implemented as a callable skill OR when the user wants to begin calibrating the relevance-attribution mechanism at bootstrap.
  **Why:** PS1 is the cheapest calibration signal at bootstrap state. Building it produces baseline data; later measurements observe whether the baseline moves.
  **Depends-on:** MUST item "Decide whether to proceed." This COULD is GATED — do not act until the MUST resolves.

### DEFERRED

- **What:** Operationalize the secondary calibration signals (SS1: relevance-confidence-vs-downstream-confirmed-relevance frequency; SS2: re-invocation-rate per inquiry).
  **Gate:** Condition-bound — when surfacing has been invoked in roughly 10-20 inquiries (early operation stage) AND downstream consumption data is recordable.
  **Why if revived:** Secondary signals refine the calibration; bringing them online expands the calibration trajectory from bootstrap into early operation.

- **What:** Per-purpose-type calibration curves at mature operation.
  **Gate:** Condition-bound — when surfacing has been invoked in roughly 30+ inquiries per purpose-type, per the N≥30 threshold from `docs/thinking_space_dynamics.md` (the Thinking-Space Dynamics reference).
  **Why if revived:** Calibrated claims become possible at this threshold; per-purpose-type curves are the input to Baldwin-cycle seed generation.

- **What:** Multi-head architecture coordination for parallel surfacing instances.
  **Gate:** Condition-bound — when the project's meta-loop reaches Level 4 autonomy (per `docs/autonomy_ladder.md`).
  **Why if revived:** Multi-head loops need a per-head surfacing architecture; this inquiry has not specified the coordination details.

## Reasoning

### Why this finding over alternatives

This inquiry ran through the full `/MVL+` extended pipeline: Exploration → Sensemaking → Decomposition → Innovation → Critique → CONCLUDE. Three CONTRARIAN-RETHINK Inversion-candidates were explicitly tested during Innovation and rejected on structural grounds:

**Inversion 1 (at Section 1 — Identity): "What if surfacing's identity should be defined RELATIONALLY (in terms of siblings) rather than intrinsically?"** REJECTED. The user's clause (b) explicitly requires self-contained identity ("it shouldnt know about other discipilines at all"). A relationally-defined identity would require the discipline to know about siblings to be defined, which directly violates the user's clause. The Domain-Transfer convergence (importing patterns from how single-purpose tools — UNIX-style — are defined intrinsically) supports the intrinsic choice.

**Inversion 2 (at Section 2 — Mechanism): "What if the mechanism should be called sensemaking-light or sensemaking-coarse rather than relevance-attribution?"** REJECTED. The two operations differ on eight structural properties (Section 2's table). Calling the mechanism sensemaking-light would collapse two structurally distinct operations into one — losing surfacing's signature. The Domain-Transfer convergence (importing from biology: coarse filtering at sensory periphery is structurally distinct from cortical interpretation, even though both use neurons; they compose primitive substrates differently) supports the distinction.

**Inversion 3 (at Section 9 — Compliance Scope): "What if the MEANING-layer scope should EXTEND to include some structural detail rather than defer it all?"** REJECTED. The Layer Commitment (MEANING) was made deliberately at inquiry creation to keep the inquiry tractable and to honor the downstream-inquiry pattern. Extending the MEANING-layer to include structural detail would violate the Layer Commitment, inflate this artifact toward a full spec (overscope), and reduce the downstream STRUCTURAL inquiry's flexibility to refine details based on operating data. Clean-design methodology (meaning-vs-structure separation as a well-established pattern) supports the scope split.

### What survived (the 9 candidate pieces from Innovation + the assembled artifact)

All eight pieces of the MEANING-layer content (Sections 1-8 above, plus Section 9 on the compliance scope) survived Critique's adversarial testing on 14 evaluation dimensions — four CRITICAL (clean-slate independence, self-contained intrinsic identity, mechanism structural distinction, asymmetric-failure operational form), eight HIGH (correctness, coherence, completeness, robustness, purposive character preservation, layer-commitment compliance, user-language alignment, disciplines-taxonomy admission), and two MEDIUM (feasibility, elegance). The composite assembled artifact (the finding) also survived as a SURVIVE candidate.

No piece was killed. No piece was sent back for refinement. The convergence was clean.

### Two partial-convergences with current `/explore` (acknowledged, derived from first principles)

The hard constraint of this inquiry was independence from current `/explore`'s content. Two acknowledged partial-convergences were derived from first principles via independent reasoning paths:

- **Section 2's tagging-vs-anchoring distinction** overlaps conceptually with current `/explore`'s §1.5 labels-vs-anchors framing. The path was first-principles (per-item-vs-cross-item-relational reasoning); the destination overlaps with familiar vocabulary. This is convergence, not coupling.

- **Section 4's territory + boundary-discovery sub-phase** overlaps conceptually with current `/explore`'s artifact/possibility mode distinction. The path was first-principles (4 territory sources from territory-specification reasoning); the destination overlaps. This is convergence, not coupling.

The anti-coupling check (searching the artifact for current `/explore`'s distinctive vocabulary: "labels-vs-anchors", "§3.1", "§4.4", "scan-signal-probe", "mode-determination", "confidence-tagged map", "Form-(i)/(ii)", "Completeness before novelty rule") found zero matches. The surfacing artifact uses its own vocabulary: items, territory, purpose, relevance-attribution, Reception/Traversal/Assembly, LAYER 1/LAYER 2, bootstrap → early → mature. The independence constraint is honored.

### How the conclusion holds

The MEANING-layer characterization holds because:

1. **The identity statement (Section 1) is intrinsic.** It uses no sibling-discipline name; it grounds in intrinsic terms (items, territory, purpose, workspace). It passes the no-sibling-reference test on text and the intrinsic-grounds test on structure.

2. **The relevance-attribution mechanism (Section 2) is structurally distinct from sensemaking-proper on eight grounds.** At least six of the eight properties are genuinely independent on inspection; the distinction is robust against a "they're the same thing at different scale" reading.

3. **The structural shape (Section 4) is minimum-sufficient.** Conflating Reception with Traversal or Assembly loses operationally distinct cognitive acts. The Boundary-discovery sub-phase is conditional, not over-engineering. The six Traversal components are load-bearing (removing any loses an output property).

4. **The asymmetric-failure principle (Section 6) has a concrete operational form.** "Territory-bounded + uncertainty-includes" is a specific operational rule, not a rhetorical commitment. The LAYER 1 / LAYER 2 split is structurally defensible (operational failures are output-observable; identity failures require behavioral audit).

5. **The calibration trajectory (Section 7) is operational at bootstrap.** All five primary signals are observable from the discipline's current state; none requires downstream verdicts. Self-containment is preserved.

6. **The compliance scope (Section 9) honors the Layer Commitment.** STRUCTURAL and PROCESS content is correctly deferred; the downstream-inquiry pattern is preserved.

## Open Questions

### Monitoring

- **Will the 4-level relevance vocabulary (core / sub / side / umbrella) prove operationally distinct downstream?** Observable after roughly 10-20 inquiries that use surfacing. If downstream disciplines consistently collapse to relevant/not-relevant in practice, the vocabulary may need refinement (Section 7's calibration trajectory may surface this).

- **Will the asymmetric-failure principle's operational form (territory-bounded + uncertainty-includes) produce signal-to-noise overload in practice?** Observable in early-operation calibration data (PS5 — coverage of edge items). If the inventory's sub/side-to-core ratio drifts too high, the high-confidence-rejection threshold in Inhibition may need tightening.

- **Will the relevance-attribution mechanism's primitive composition stay stable as the project's understanding of the typed primitive set evolves?** The composition references Phase A + Phase B primitives from `docs/thinking_space_dynamics.md`. If the primitive set evolves (e.g., new primitives admitted; existing primitives refined), the composition may need re-evaluation.

### Blocked

- **The precise spec section organization** is blocked on a downstream STRUCTURAL inquiry. Cannot be committed at MEANING-layer.

- **The exact re-invocation trigger details** are blocked on operating data from early-operation stage.

- **The decision to rename current `/explore` to `/surfacing`** is blocked on a downstream STRUCTURAL inquiry producing a spec that the user can compare against current `/explore`.

### Research Frontiers

- **The broader-pattern MEANING-layer-characterization methodology.** This inquiry committed to the SPECIFIC discipline named surfacing. The broader pattern (a general approach for MEANING-layer characterization of any discipline from scratch) is a research frontier — a future inquiry could test whether this inquiry's path is generalizable.

- **The consciousness-substrate role buildout.** Surfacing's output is the workspace content on which consciousness-gradient indicators (per `docs/desc.md`) depend. The detailed role of surfacing in the autonomous-consciousness-goal trajectory is a research frontier — it does not change WHAT surfacing IS (the MEANING-layer commitment stands), but it changes WHY surfacing's quality matters for the project's end goal.

- **The multi-head architecture coordination.** Per-head surfacing is the preferred architecture in multi-head loops, but the precise coordination protocol is a research frontier (depends on the meta-loop reaching Level 4 autonomy per `docs/autonomy_ladder.md`).

### Refinement Triggers

- **Re-open the 4-level relevance vocabulary** if downstream operating data shows the subtypes collapse or need finer granularity in practice. Observable: after roughly 10-20 inquiries.

- **Re-open the relevance-attribution mechanism's primitive composition** if the typed primitive set at `docs/thinking_space_dynamics.md` increments materially (new admitted primitives) AND the new primitives are operationally load-bearing for the mechanism.

- **Re-open the asymmetric-failure principle's operational form** if early-operation calibration data shows the territory-bounded + uncertainty-includes rule produces signal-to-noise overload OR insufficient coverage. Observable: in early operation stage.

- **Re-open the discipline-taxonomy placement (Core)** if a future inquiry surfaces a structural argument that surfacing fits the Cross-cutting admission criteria better. The Cross-cutting category requires multi-location operation; surfacing currently fits Core (single-step-in-pipeline), but mid-loop re-invocation could be reinterpreted as multi-location.

- **Re-open the discipline name "surfacing"** if a future inquiry surfaces a name that better captures the operation's intrinsic identity AND the user prefers it.

## Source Input

<details>
<summary>Raw user input for this inquiry</summary>

```text
/MVL+

BEFORE STARTING THIS INQUIRY READ ALL IN /Users/ns/Desktop/projects/native/docs fully and also thinking_disciplines/anatomy_of_disciplines.md


A clean discussion independent from how explore's current design, which we assume has multi layer problems and issues

and with understanding of how pure version of explore should be, lets call it surfacing for sake of distinction between current explore

surfacing should only focus on surfacing what exists relevant and subrelevant and siderelevant and core relevant things ...

it shouldnt do the sense making's job or others, it shouldnt know about other discipilines at all ...


also it's job is not easy, it is the most important because if surfacing surfaces some irrelevant info and leave relevant ones unsurfaced, rest of the disciplines also messed up.

so it has it's own relevance sense making like mechanism inside i guess. but not exactly like sensemaking,

and it should have a structure

lets discuss this
```

</details>
