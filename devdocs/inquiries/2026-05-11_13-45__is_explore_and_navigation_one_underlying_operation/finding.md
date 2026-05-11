---
status: active
supersedes: devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md
diagnoses: explore_vs_navigation_relationship
affects_spec: homegrown/explore/references/explore.md AND homegrown/navigation/references/navigation.md
creates: devdocs/patterns/typed-enumeration-mapping.md
---

# Finding: Is Explore-and-Navigation One Underlying Operation?

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md`.

**Revision trigger:** the user pushed back on the prior diagnosis with three correction points — (1) `/navigation` takes "or current project state" input, not just completed SIC output; (2) Navigation's route-cards and the north-star vision's concept-nodes share the concept-with-metadata structure; (3) Explore and Navigation share the same underlying operation (concept mapping + content consumption). Exploration verified corrections #1 and #2 at the artifact level. Sensemaking adjudicated; correction #3 has strong positive structural support.

**What's preserved:** the structural observation that Explore, the existing `/navigation` (R2), and the north-star vision (R3) each have their own implementation-level add-ons (16-type taxonomy + 12 route fields for R2; whole-codebase + directional + assess overlay for R3; artifact-vs-possibility modes + 5 confidence levels for Explore). The five operational paths for R3 from the prior finding (a/b/c/d/Hybrid) remain applicable if R3-specific implementation choices are needed later.

**What's changed:** the relational verdict. The prior framing called R2 vs Explore "separate but mechanism-sharing" (Candidate E) and R3 vs Explore "specialization + composition" (Candidate F). The corrected verdict is **Candidate B (partial unification)** — all three instantiate the same underlying operation; the "separateness" framing was a level-of-description error. They share the OPERATION, not just the mechanism.

**What's new:** an explicit name for the shared operation — **"concept mapping with content consumption" (loop-coined compact label: TEM — Typed Enumeration Mapping)**. A new operational recommendation: **U2 + U3 combined** (recognize-in-spec in both `explore.md` and `navigation.md`, plus a new project-pattern document at `devdocs/patterns/typed-enumeration-mapping.md`). The new `devdocs/patterns/` directory is itself a new project-structural layer.

**Migration:** downstream references to the prior 13-30 finding should cite this finding instead. The 13-30 finding remains as historical record; this finding is the current authoritative diagnosis.

## Question

The user observed (in extended pushback on the prior 13-30 finding) that Explore and Navigation share an underlying operation — **concept mapping with content consumption** — and that the prior diagnosis of "separate disciplines" was wrong. The question this finding answers: **is the user's unification claim correct, and if so, what is the operational consequence?**

## Finding Summary

- **The user's unification claim is correct at the OPERATION LEVEL.** Explore, the existing `/navigation` discipline, and the north-star navigation vision all instantiate the same underlying operation — concept mapping with content consumption (TEM — Typed Enumeration Mapping). All three produce typed concept-with-metadata enumerations by consuming content. The operation distinguishes them from sister disciplines (Sensemaking commits; Decomposition partitions; Critique evaluates).

- **The three instances have meaningful implementation-level differentiation.** Explore: artifact-vs-possibility modes + five confidence levels + Resolution Progression. Existing `/navigation` (R2): 16-type taxonomy + 12 route-card fields + Freshness Preflight + BOUNDARY-between-cycles framing + input flexibility ("completed SIC cycle OR current project state"). North-star vision (R3): whole-codebase iterative mapping + directional local mapping + assess overlay (work-status fields). These are not evolutionary noise — they reflect different applications of the shared operation.

- **The verdict is partial unification, not full unification or full separateness.** Operation-level unity (shared TEM) + implementation-level differentiation (meaningful add-ons per instance).

- **The prior 13-30 finding is SUPERSEDED**, not refined. Its framing of "separate but mechanism-sharing" for R2 vs Explore was a level-of-description error — R2 and Explore share the OPERATION (TEM), not just the iterative-staging mechanism. The framing error is corrected here rather than papered over.

- **Operational recommendation: U2 + U3 combined.** U2 adds short text (~50 words) to both `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` recognizing TEM and cross-referencing the pattern document. U3 creates a new project-pattern document at `devdocs/patterns/typed-enumeration-mapping.md` (~400 words) documenting TEM and its instances. Both are clarification (Step-5 low-risk); reversible at near-zero cost. Alternative paths — U1 (consolidate disciplines), U4 (refactor to shared base) — were considered and rejected as premature.

- **A Critique-stage discovery: TEM may also overlap with Sensemaking's Comprehending operation** (recently named in the 12-30 inquiry). Sensemaking's Phase 1 (Cognitive Anchor Extraction) and Phase 2 (Perspective Checking) do enumeration-with-typing of anchors. If true, TEM is more pervasive than the current Explore+Navigation framing captures. Flagged as Research Frontier 3 below.

## Finding

The user has been working through a sustained sequence of inquiries diagnosing discipline-mandate boundaries. The prior inquiry (13-30) diagnosed the Explore-vs-Navigation overlap as "two structurally separate operations with shared mechanism." The user pushed back: that framing missed that Explore and Navigation share the SAME UNDERLYING OPERATION. This inquiry re-examines under the user's pushback and produces a corrected diagnosis.

### 1. The shared operation — TEM (Typed Enumeration Mapping)

**Name:** Concept mapping with content consumption. Loop-coined compact label: **TEM (Typed Enumeration Mapping)**.

**Operational definition:** producing typed concept-with-metadata enumerations by consuming content. The operation takes content (territory, documents, prior outputs, project state) as input and produces a structured map of typed concepts — each concept carrying metadata (priority, status, confidence, relations, etc.) — as output.

**Distinguishing criterion (contrast-based):** the operation ENUMERATES without committing. It produces ALL items in scope (typed, with metadata) rather than selecting among them or stabilizing one interpretation. This distinguishes the operation from:
- **Sensemaking**, which commits to a stabilized interpretation (reduces ambiguity to one stable model).
- **Decomposition**, which partitions complexity into mutually-exclusive pieces.
- **Critique**, which evaluates candidates against weighted dimensions and produces SURVIVE / REFINE / KILL verdicts.

**Distinguishing criterion (positive characterization):** the output is **map-shaped** — many items, possibly overlapping in scope, with metadata — **not commitment-shaped** (one stabilized interpretation, as in Sensemaking) and **not partition-shaped** (mutually exclusive pieces covering the whole, as in Decomposition). The operation produces a structured representation that REPRESENTS the scope rather than reducing it or partitioning it.

**Process shape:** iterative scan-and-elaborate at multiple resolutions, with each iteration producing a denser map of the same scope.

### 2. The three instances

#### Instance 1 — Explore (`homegrown/explore/`)

**Application:** maps unknown territory of any kind (codebases, solution spaces, business landscapes, research fields).

**Implementation add-ons (specific to Explore):**
- Two modes: artifact (find existing things) + possibility (generate candidates).
- Five confidence levels: Confirmed, Scanned, Inferred, Unknown, Confirmed absent.
- Seven failure modes (the seventh — Premature Evaluation in Possibility Mode — was recently added via the 13-00 inquiry).
- Resolution Progression: Coarse Scan → Targeted Probes → Fine Scan.

**Workflow position:** upstream — Explore typically runs before Sensemaking; surveys territory before stabilizing interpretations.

#### Instance 2 — `/navigation` existing discipline (R2)

**Application:** enumerates all possible next directions from a completed SIC cycle output OR current project state. The "or current project state" input flexibility is explicit in `homegrown/navigation/SKILL.md` line 3; R2 is not strictly limited to post-SIC input.

**Implementation add-ons (specific to R2):**
- 16-type taxonomy: content-directed (6 types) + process-directed (5 types) + context-directed (5 types). Canonical per the navigation audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`.
- 12 route-card fields: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, WHY, Guidance mode, adaptive Guidance, Continuation note.
- Freshness Preflight (Step 0): context-staleness check before treating input as authoritative.
- BOUNDARY-discipline framing: positioned between cognitive cycles.

**Workflow position:** boundary — R2 typically runs between cycles or on current project state for strategic direction-setting.

#### Instance 3 — North-star navigation vision (R3; `devdocs/nav_north_star.md`)

**Application:** maps codebase work-direction structure. Two sub-cases — whole-codebase iterative mapping and directional local mapping.

**Implementation add-ons (specific to R3):**
- Whole-codebase mode: iterative staged for-loop structure (~10 → 50-100 → 200 concept-nodes across rounds).
- Directional mode: point at source files; produce local artifact (md file).
- Assess overlay: status fields per concept — "how much considered; how much worked on; blocking other stuff."

**Workflow position:** aspirational — R3 is vision-not-implementation. Its workflow position depends on the operational path chosen for implementation (see the prior 13-30 finding's five-path analysis for the implementation-choice space).

### 3. Cross-discipline observation (Research Frontier 3)

A discovery surfaced during Critique: **TEM may also overlap with Sensemaking's Comprehending operation** (the Phases 1-2 sub-operation of Sensemaking, recently named via the 12-30 inquiry). Phase 1 (Cognitive Anchor Extraction) extracts cognitive anchors with type labels (Constraints, Insights, Structural Points, Foundational Principles, Meaning-Nodes). Phase 2 (Perspective Checking) expands the anchor set by applying multiple perspectives — generating typed enumerations of new anchors. This IS enumeration-with-typing of items found by consuming content.

Sensemaking's Stabilizing operation (Phases 3-5) is structurally distinct — it commits to a stabilized interpretation. So the Comprehending operation may be a TEM instance; the Stabilizing operation is not.

This suggests TEM is more pervasive than the current Explore+Navigation framing captures. A focused follow-on inquiry could examine whether Sensemaking's Comprehending is a full TEM instance or a partial overlap. See Research Frontier 3 below.

### 4. Operational recommendation: U2 + U3 combined

The diagnosis is the structural verdict. The user now decides how to make it operationally explicit. Soft recommendation: **U2 + U3 combined**.

#### U2 — Recognize-in-spec

Add ~50 words to each of `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` declaring that each discipline instantiates TEM, with cross-references.

**Drafted text for `homegrown/explore/references/explore.md`** (insert in "What Exploration Is" section, after the existing definition):

```text
**Shared operation with /navigation.** Exploration instantiates a
project-level operation also implemented by `/navigation` —
**concept mapping with content consumption** (loop-named
**TEM — Typed Enumeration Mapping**): producing typed concept-with-
metadata enumerations by consuming content. Both disciplines share
this operation; they differ in implementation. See
`devdocs/patterns/typed-enumeration-mapping.md` for the operation
definition and per-instance implementation details.
```

**Drafted text for `homegrown/navigation/references/navigation.md`** (insert in "What Navigation Is" section, after the existing definition):

```text
**Shared operation with /explore.** Navigation instantiates a
project-level operation also implemented by `/explore` —
**concept mapping with content consumption** (loop-named
**TEM — Typed Enumeration Mapping**): producing typed concept-with-
metadata enumerations by consuming content. Both disciplines share
this operation; they differ in implementation. See
`devdocs/patterns/typed-enumeration-mapping.md` for the operation
definition and per-instance implementation details.
```

#### U3 — Project-pattern document

Create a new file at `devdocs/patterns/typed-enumeration-mapping.md` (~400 words) documenting TEM and its three instances.

**Drafted document:**

```markdown
# Typed Enumeration Mapping (TEM)

A project-level operation pattern shared by two disciplines: `/explore`
and `/navigation`. This document defines the operation and its
instances. It is NOT a discipline spec — the discipline specs at
`homegrown/explore/references/explore.md` and
`homegrown/navigation/references/navigation.md` remain canonical for
their respective implementations.

## What TEM is

**Operation:** concept mapping + content consumption — producing typed
concept-with-metadata enumerations by consuming content.

**Distinguishing criterion (contrast):** the operation ENUMERATES
without committing. It produces ALL items in scope (typed, with
metadata) rather than selecting among them or stabilizing one
interpretation.

**Distinguishing criterion (positive):** the output is **map-shaped**
— many items, possibly overlapping in scope, with metadata — **not
commitment-shaped** (one stabilized interpretation) and **not
partition-shaped** (mutually exclusive pieces covering the whole).

## What TEM is NOT

- Not Sensemaking — Sensemaking COMMITS to a stabilized interpretation.
  (Possible partial overlap with Sensemaking's Comprehending operation
  — see Research Frontier 3 in the originating inquiry's finding.)
- Not Decomposition — Decomposition PARTITIONS complexity into pieces.
- Not Critique — Critique EVALUATES candidates with weighted dimensions
  and produces verdicts.

## The instances

### Explore
Maps unknown territory of any kind. Add-ons: artifact-vs-possibility
modes; five confidence levels (Confirmed, Scanned, Inferred, Unknown,
Confirmed absent); seven failure modes; Resolution Progression.
Workflow position: upstream of Sensemaking.

### /navigation (existing discipline)
Enumerates next directions from a completed SIC cycle or current
project state. Add-ons: 16-type taxonomy; 12 route-card fields;
Freshness Preflight; BOUNDARY-between-cycles framing. Workflow
position: between cycles.

### Navigation vision (north-star; `devdocs/nav_north_star.md`)
Maps codebase work-direction structure. Add-ons: whole-codebase
iterative for-loop staging; directional local mapping; assess overlay
(work-status fields). Workflow position: aspirational; depends on
operational path chosen for implementation.

## How to recognize TEM in a discipline

A discipline is doing TEM if:
1. Its output is a structured map of typed concepts (not a single
   commitment).
2. Each concept carries metadata (type, status, priority, relations,
   etc.).
3. The discipline consumes content to produce the map.
4. The output ENUMERATES the scope (breadth coverage) rather than
   reducing it or partitioning it.

## Partial-instance note

Sensemaking's **Comprehending** operation (Phases 1-2, recently named
via the 2026-05-11_12-30 inquiry) may be a partial TEM instance.
Phase 1 (Cognitive Anchor Extraction) and Phase 2 (Perspective
Checking) do enumeration-with-typing of anchors. The **Stabilizing**
operation (Phases 3-5) is not TEM. A focused inquiry could examine
the depth of this overlap.

## Why this document exists

This pattern document was created because the two disciplines that
instantiate TEM (Explore and Navigation) were initially diagnosed as
separate operations. The structural truth is that they share the
operation; their implementations are differentiated by scope and
workflow position. Recognizing the shared operation explicitly helps
future reasoning about both disciplines, and may help future discipline
design when similar shared-operation patterns surface.

See `devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md`
for the inquiry that produced this pattern.
```

#### Why U2 + U3 combined (not just one)

U2 alone (recognize-in-spec) addresses the spec-level visibility. U3 alone (project-pattern doc) addresses the meta-architectural layer. Together they address both at low total cost. Either alone leaves a layer un-addressed.

#### Alternative paths considered and not recommended

- **U1 — Consolidate Explore and Navigation into one discipline:** premature given meaningful implementation differentiation. Consolidation would lose the workflow-position-specific add-ons.
- **U4 — Refactor to shared base discipline:** too invasive; not justified by current evidence.

#### TEM naming caveat

TEM is loop-coined. The primary description follows the user's framing: "concept mapping + consuming the underlying content." The user may rename to anything that captures the shared operation (e.g., "Concept Mapping" alone; "Typed Enumeration"; or a different label). The diagnosis doesn't depend on the specific name.

## Next Actions

### MUST

- **What:** apply the U2 spec edits to `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` (the drafted texts in Section 4 above).
  - **Who:** the user (or loop-builder layer with user approval).
  - **Gate:** observable — the user agrees the diagnosis and recommendation.
  - **Why:** makes the shared operation visible at the point of discipline invocation; preserves implementation differentiation.

- **What:** create `devdocs/patterns/typed-enumeration-mapping.md` with the U3 drafted content (Section 4 above).
  - **Who:** the user (or loop-builder layer).
  - **Gate:** same as U2.
  - **Why:** documents TEM at the meta-architectural level; establishes a new `devdocs/patterns/` layer for future shared-operation observations.

### COULD

- **What:** consider whether the four Research Frontier observations (below) warrant individual /MVL+ runs in the near term.
  - **Who:** the user when bandwidth allows.
  - **Gate:** time-bound — when next discipline-architecture-refinement work is scheduled.
  - **Why:** the patterns are accumulating; codification may become useful.

### DEFERRED

(No DEFERRED items beyond the COULD items above.)

## Reasoning

### Why partial unification (Candidate B), not full (A) or separate (C)

Candidate A (full unification) would treat implementation differences as evolutionary noise. But the implementation differences are non-trivial: R2's 16-type taxonomy is canonical per audit; R3's assess overlay serves a specific purpose; Explore's modes serve different use cases. Dismissing these as noise loses meaning. Full unification over-generalizes.

Candidate C (the prior 13-30 diagnosis: separate but mechanism-sharing) was wrong at the level of description. The prior framing said R2 and Explore share only the iterative mechanism. The artifact evidence (R6 verification of R2's "or current project state" input; R7 verification that route-cards and concept-nodes share concept-with-metadata structure) shows they share the OPERATION, not just the mechanism. The prior framing missed this.

Partial unification (Candidate B) is the precise structural answer: operation-level unity + implementation-level differentiation. It honors the user's "they are the same" claim at the operation level and the structural reality of meaningful add-ons at the implementation level.

### Why TEM (the loop-coined name) honors rather than replaces the user's framing

The user said "explore is concept_mapping + consuming the underlying content. and actually navigation is the same." This is the user's framing — both descriptive and naming the shared operation. The diagnosis uses the user's full description as PRIMARY ("concept mapping with content consumption") and TEM as a compact LABEL for ease of reference. The user may rename the label or drop it; the operation-level identification stands either way.

### Why supersession, not refinement, of the prior 13-30 finding

The prior diagnosis's framing was wrong — not just imprecise. It said R2 and Explore are "separate" operations when they actually share an operation. Refinement would obscure this. Supersession is honest about the framing error, preserves what was right (the implementation differentiation observations), and corrects what was wrong (the separateness framing).

### Why U2 + U3, not U1 or U4

U1 (consolidate disciplines) would merge implementations that serve different workflow positions; lose structural value. U4 (refactor to shared base) is invasive; not justified at current evidence. U2 + U3 are clarification moves — they make the operation-level unity explicit at the spec level (U2) and at the meta-architectural level (U3). Low cost; low risk; reversible.

### Why the new `devdocs/patterns/` directory is appropriate

The project lacks a meta-pattern documentation layer. Disciplines live in `homegrown/`; inquiries live in `devdocs/inquiries/`; specs and operations have no shared-pattern home. Adding `devdocs/patterns/` as a first instance establishes the layer; future shared-operation observations can extend it. Reversal: delete the directory and the doc; near-zero cost.

### Critique survivors and refinements applied

The Critique phase ran 12 evaluation dimensions across the six pieces + assembly. Three pieces survived cleanly (C1, C4, C5); three received REFINE verdicts (C2, C3, C6); the assembly survives after refinements. All four refinements have been applied in this finding:

- **C2 REFINE #1:** added positive characterization to TEM's distinguishing criterion (Section 1; "the output is map-shaped...").
- **C2 REFINE #2:** added the Sensemaking-Comprehending cross-discipline observation (Section 3; Research Frontier 3 below).
- **C3 REFINE:** compressed both U2 spec edits to ~50 words each (Section 4).
- **C6 REFINE:** added Research Frontier 3 about TEM-Sensemaking overlap (Open Questions below).

No KILLs. The verdict mix (3 REFINE all applied + 3 SURVIVE + 1 Assembly SURVIVE + 0 KILL) reflects honest evaluation under multi-level self-reference.

### Self-reference handling — supersession of my own prior diagnosis

I (Claude) produced the prior 13-30 diagnosis. This inquiry supersedes it. Self-reference is acute: the Status Quo Bias risk (failure mode #1 in Sensemaking spec) is real — defending one's prior work is the natural protect-response.

Mitigations applied:
- **Sensemaking explicitly tested Status Quo Bias** and Clean Resolution Trap (failure mode #5). Neither fired — the revision is evidence-driven (R6 + R7 artifact verifications), not user-pressure-driven.
- **Critique produced non-trivial REFINE verdicts** (C2, C3, C6), evidencing non-collapsing adversarial structure.
- **The user's correction points were tested against the artifacts**, not accepted on user authority alone.
- **The supersession framing explicitly names the framing error** rather than papering over it.

Self-reference collapse not observed.

## Open Questions

### Monitoring

- Whether the U2 + U3 implementations, once applied, actually make TEM visible to readers and future AIs invoking the disciplines. Observable over the next several /MVL+ runs that involve Explore or Navigation.
- Whether Research Frontier 3 (TEM-Sensemaking overlap) materializes as a follow-on inquiry, and what it surfaces.

### Blocked

(No blocking questions — the diagnosis is complete; the user's adoption decisions are the only remaining steps.)

### Research Frontiers

**Research Frontier 1 — Other discipline pairs may have hidden operation-level unity.**

Candidate pairs worth examining in follow-on inquiries:
- **Sensemaking vs Reflect.** Both produce understanding-of-process / models-of-work. Do they share an underlying operation?
- **Innovate vs Decompose.** Both produce structured outputs from inputs. Decompose partitions complexity; Innovate generates novelty. Are these instances of a deeper "Structured Transformation" operation?
- **Critique vs Reflect.** Both evaluate work. Critique evaluates candidates; Reflect evaluates process. Shared evaluation operation, or distinct?

Each warrants its own /MVL+ inquiry following the same shape as this one.

**Research Frontier 2 — 5th instance of discipline-mandate-boundary inquiry; pattern strongly emergent.**

This inquiry is the fifth in a sequence within hours:
- **12-30** "Is Sensemaking one discipline or multiple?" → ONE umbrella + TWO named operations (Comprehending + Stabilizing).
- **13-00** "Is Exploration overreaching into Critique?" → YES in 3 of 5 cases; spec + execution drift; added failure mode #7.
- **13-30** "Why does Explore overlap with Navigation?" → SUPERSEDED by this finding.
- **13-45** (this) "Is Explore-and-Navigation one underlying operation?" → partial unification + TEM.

Five instances within hours suggests the project is in an active discipline-architecture refinement phase. The pattern may merit project-level codification — perhaps a meta-protocol for "how to diagnose discipline-mandate questions" or a guide for "when a discipline-pair inquiry is warranted."

**Research Frontier 3 — TEM may overlap with Sensemaking's Comprehending operation.**

Sensemaking's just-named Phases 1-2 sub-operation (Comprehending) does enumeration-with-typing of cognitive anchors. Phase 1 (Cognitive Anchor Extraction) and Phase 2 (Perspective Checking) produce typed anchor sets (Constraints / Insights / Structural Points / Foundational Principles / Meaning-Nodes; plus new anchors from perspective application). The Stabilizing operation (Phases 3-5) is structurally distinct — it commits.

If Comprehending is a TEM instance:
- TEM is more pervasive than the current Explore+Navigation framing captures.
- The pattern document at `devdocs/patterns/typed-enumeration-mapping.md` should be extended to include Sensemaking-Comprehending as a partial-instance.
- Sensemaking's spec may benefit from a cross-reference to TEM (similar to U2's spec edits).

A focused /MVL+ inquiry could examine: (a) does Comprehending fit the TEM definition exactly, partially, or not at all? (b) if yes, what are the implementation differences (e.g., anchor types vs route-card types)? (c) what's the operational consequence — does the pattern doc need extension or does Sensemaking's spec need cross-reference to TEM?

**Research Frontier 4 — The `devdocs/patterns/` layer is now established.**

This finding creates `devdocs/patterns/` as a new project-structural layer for shared-operation documentation. The TEM pattern document is the first instance. Future shared-operation observations across disciplines can extend this layer. The project's overall architecture grows by one layer.

### Refinement Triggers

The diagnosis re-opens under any of these observable conditions:

- **Implementation evolution reveals operation-level divergence.** If Explore or Navigation evolves in ways that no longer fit the TEM definition, the partial-unification verdict needs revisiting.
- **A discipline-pair inquiry surfaces a counter-pattern.** If a follow-on inquiry (per Research Frontier 1) finds that some discipline-pairs really ARE separate operations (no shared operation), the pattern of "look for unification" needs to be tempered.
- **Research Frontier 3 finds Comprehending IS a TEM instance.** The pattern doc and Sensemaking spec should both be updated to acknowledge this; the partial-unification framing extends to three disciplines (Explore + Navigation + Sensemaking-Comprehending).
- **The user renames TEM** to a different label that captures the operation more clearly.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Different inputs: R2 takes completed SIC output; R3 takes the codebase as territory.
Different outputs: R2 produces route-cards (12 fields, 16 types); R3 produces concept-nodes as directions of work.

u said this

but you missed seeing that they are the same thing being created from different start points


R2 takes completed SIC output; R3 takes the codebase as territory., is correct. But missing. r2 can be also run without SIC output as input...


R2 produces route-cards (12 fields, 16 types); R3 produces concept-nodes as directions of work. correct but you are missing that r2 route-cards are sth probably that will be integrated to r3 concept nodes


they are both are not fully evolved, that might be the reason u think they are distinct. But if you look at what they are doing as end goal. They are both mapping concepts.

i guess explore is concept_mapping + consuming the underlying content . and actually navigation is the same.
```

</details>
