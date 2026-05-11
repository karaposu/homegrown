# Innovation: Is Explore-and-Navigation One Underlying Operation?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/_branch.md`

Produce the deliverables per Decomposition's 6-piece partition: P2 TEM operation definition + 3 instance characterizations (FOUNDATION); P1 verdict + recommendation; P3 U2 spec-edit drafts for explore.md and navigation.md; P4 U3 project-pattern document; P5 supersession framing for prior 13-30 finding; P6 Research Frontier observations. Per Decomposition's dependency order: P2 first, P1 second, then P3-P6 in parallel.

---

## Seed and Direction

- **Seed: user correction + verified gap.** User pushed back on prior 13-30 diagnosis; Exploration verified two correction points at the artifact level; Sensemaking adjudicated toward Candidate B (partial unification). The seed is a confirmed framing error in the prior diagnosis.
- **Intuition direction:** honor the user's framing ("concept mapping + content consumption") as the primary naming for the unified operation; TEM as a compact technical label. Preserve operation-level unity AND implementation-level differentiation. Innovation's job is concrete drafting of all six pieces.

---

## Phase 2 — Generate (full 7-mechanism coverage)

### Generator 1 — Combination

Combine the user's framing ("concept mapping + consuming the underlying content") with the technical naming pattern (TEM acronym) and the project's existing discipline-pattern conventions.

**Focused output:** use the user's full phrasing as the operation's PRIMARY DESCRIPTION; use TEM as a compact LABEL for ease of reference. Pattern: "X (Y)" where X is the user's framing and Y is the technical label. This honors both user-language alignment and technical concision.

**Result:** "Concept Mapping + Content Consumption (TEM — Typed Enumeration Mapping)." Used throughout the deliverables.

### Generator 2 — Domain Transfer

Where else are shared operations named explicitly across multiple instances?

- **Software design patterns:** named patterns (e.g., Observer, Factory) that appear in multiple language implementations. Pattern document; not consolidated implementations.
- **Biology / taxonomy:** shared traits across species (e.g., "endothermy") named explicitly; each species retains its full characterization while the shared trait is documented.
- **Mathematics:** abstract structures (e.g., monoids, groups) instantiated by multiple concrete examples; abstract operation documented separately from instances.

**Result:** the project-pattern-document approach (U3) is canonical in three independent fields. Recognizing shared operations explicitly while preserving instance distinctness is well-precedented.

### Generator 3 — Absence Recognition

What's missing from the current project structure?

- A pattern-document layer at `devdocs/patterns/` or similar. The project has disciplines (`homegrown/*`), inquiries (`devdocs/inquiries/*`), but no formal place for shared-operation patterns. The recommended U3 (project-pattern document) creates this layer.

**Result:** U3 fills a structural absence — the project lacks a meta-pattern documentation layer. Adding it is a small first instance that future shared-operation observations can extend.

### Generator 4 — Extrapolation

At higher autonomy (L2+), the AI invokes disciplines. If TEM is explicit in both specs (U2) and documented at the project-pattern level (U3), the AI can:
- Recognize when it's doing TEM at runtime
- Choose between Explore and Navigation based on workflow position (not based on confused operation-shape)
- Apply learnings from one TEM instance to the other

Value compounds with autonomy.

**Result:** U2 + U3 have long-term strategic value.

### Framer 1 — Lens Shifting

Under different lenses:
- **Project coherence lens:** U2 + U3 best — explicit pattern documentation matches the project's emerging discipline-pattern-recognition phase (4th inquiry).
- **Minimum-edit-cost lens:** U2 + U3 are low-cost (~100 words spec edits + ~400 word pattern doc).
- **User-vision lens:** the user pushed back AGAINST the prior framing; honoring their framing (concept mapping + content consumption) is the user-vision-aligned move.
- **Step-5 conformance lens:** U2 is clarification (naming an existing operation); not behavior-change. U3 is documentation, not spec change. Both are LOW Step-5 risk.

**Result:** U2 + U3 favored across all four lenses.

### Framer 2 — Constraint Manipulation

Soft word-count constraints:
- U2 spec edits: ~50-100 words each (matches the project's clarification-style edit size from Comprehending+Stabilizing precedent).
- U3 pattern doc: ~300-400 words total (matches the project's short documentation style).
- P5 supersession framing: ~100-150 words (matches the project's "Changes from Prior" pattern from finding templates).

These constraints are honored in the drafted texts below.

### Framer 3 — Inversion

Invert: don't make TEM explicit. What happens?
- The shared operation remains tacit; the user's reframe isn't honored.
- The 13-30 framing error persists.
- Future readers may re-encounter the same confusion the user had.

**Rejected at level 1.** Doing nothing leaves the framing error in place.

---

## P2 — TEM operation definition + 3 instance characterizations (FOUNDATION; drafted first)

### The operation

**Name: Concept Mapping + Content Consumption.** Loop-coined compact label: **TEM (Typed Enumeration Mapping).**

**Operational definition:** producing typed concept-with-metadata enumerations by consuming content. The operation takes content (territory; documents; prior outputs) as input and produces a structured map of typed concepts — each concept carrying metadata (priority, status, confidence, relations, etc.) — as output.

**Distinguishing criterion:** the operation ENUMERATES without committing. It produces ALL the items in scope (typed, with metadata) rather than selecting among them or stabilizing one interpretation. This distinguishes the operation from Sensemaking (which commits to a stabilized interpretation), Decomposition (which partitions complexity into pieces), and Critique (which evaluates candidates and produces SURVIVE/REFINE/KILL verdicts).

**Operation shape:** input = content; output = typed concept-with-metadata enumeration. Process: iterative scan-and-elaborate at multiple resolutions, with each iteration producing a denser map of the same scope.

### The three instances

#### Instance 1 — Explore (`homegrown/explore/`)

**Application:** maps unknown territory of any kind (codebases, solution spaces, business landscapes, research fields).

**Implementation add-ons (specific to Explore, not shared by the other instances):**
- Two modes: artifact (find existing things) + possibility (generate candidates).
- Five confidence levels: Confirmed, Scanned, Inferred, Unknown, Confirmed absent.
- Seven failure modes (recently expanded to include Premature Evaluation in Possibility Mode).
- Resolution Progression: Coarse Scan → Targeted Probes → Fine Scan.

**Workflow position:** upstream — Explore typically runs before Sensemaking; surveys territory before stabilizing interpretations.

#### Instance 2 — `/navigation` existing discipline (R2)

**Application:** enumerates all possible next directions from a completed SIC cycle output OR current project state. Note: the "or current project state" input flexibility is explicit in the spec (per `homegrown/navigation/SKILL.md` line 3); R2 is not strictly limited to post-SIC input.

**Implementation add-ons (specific to R2, not shared by the other instances):**
- 16-type taxonomy: content-directed (6 types) + process-directed (5 types) + context-directed (5 types). Canonical per audit.
- 12 route-card fields: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, WHY, Guidance mode, adaptive Guidance, Continuation note.
- Freshness Preflight (Step 0): context-staleness check before treating input as authoritative.
- BOUNDARY-discipline framing: positioned between cognitive cycles.

**Workflow position:** boundary — R2 typically runs between cycles or on current project state for strategic direction-setting.

#### Instance 3 — North-star navigation vision (R3; `devdocs/nav_north_star.md`)

**Application:** maps codebase work-direction structure. Two sub-cases — whole-codebase iterative mapping and directional local mapping.

**Implementation add-ons (specific to R3, not shared by the other instances):**
- Whole-codebase mode: iterative staged for-loop structure (10 → 50-100 → 200 concept-nodes across rounds).
- Directional mode: point at source files; produce local artifact (md file).
- Assess overlay: status fields per concept — "how much considered; how much worked on; blocking other stuff."

**Workflow position:** aspirational — R3 is vision-not-implementation. Its workflow position would be determined by the operational path chosen (see P1's recommendation).

### What all three instances share (the TEM core)

- All three produce typed concept-with-metadata enumerations.
- All three consume content (territory; SIC output; codebase; project state).
- All three iterate at multiple resolutions to manage LLM output limits / cover the scope.
- All three ENUMERATE rather than commit/partition/evaluate.

**The shared TEM core IS the user's "concept mapping + consuming the underlying content" framing, formalized.**

**Verification criteria (Decomposition P2):**
- [x] TEM defined operationally
- [x] TEM's distinguishing criterion stated (enumeration without committing)
- [x] Explore characterized as TEM instance + add-ons
- [x] R2 characterized as TEM instance + add-ons (with input flexibility acknowledged)
- [x] R3 characterized as TEM instance + add-ons
- [x] Shared TEM core summarized

---

## P1 — Verdict statement + recommendation + naming caveat (built on P2)

### The verdict

**Partial unification (Candidate B from the inquiry's candidate set).** Explore, `/navigation` (R2), and the north-star navigation vision (R3) all instantiate the same underlying operation — concept mapping + content consumption (TEM). They differ at the implementation level (each has structurally meaningful add-ons: Explore's modes and confidence levels; R2's taxonomy and BOUNDARY framing; R3's whole-codebase/directional sub-cases and assess overlay). The user's unification claim is structurally correct at the operation level; the implementations are intentionally distinct because they apply the same operation to different scopes and workflow positions.

The prior 13-30 finding's framing of "separate but mechanism-sharing" for R2 vs Explore was wrong: R2 and Explore share the OPERATION (TEM), not just the mechanism (iterative work). See P5 for supersession framing.

### The recommendation (soft)

**U2 + U3 combined.** Two complementary moves:

- **U2 — Recognize-in-spec:** add explicit text to both `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` stating that each discipline instantiates the shared TEM operation, with cross-reference to the other discipline and to the project-pattern document. ~50-100 words per spec.

- **U3 — Project-pattern document:** create a new short document at `devdocs/patterns/typed-enumeration-mapping.md` (or similar path) documenting the TEM operation and its instances. ~300-400 words.

**Alternative paths rejected:**
- U1 (consolidate into one discipline): premature given meaningful implementation differentiation. Consolidation would lose the workflow-position-specific add-ons.
- U4 (refactor to shared base discipline): too invasive; not justified by current evidence.

**Why U2 + U3 combined:** U2 makes the unity visible at the point of discipline invocation; U3 documents the pattern at the meta-architectural level. Together they honor the user's framing (operation-level unity) while preserving the disciplines' instance-level differentiation. Step-5 risk is low (U2 is clarification; U3 is documentation).

### TEM naming caveat

**TEM** (Typed Enumeration Mapping) is **loop-coined** in this inquiry. The primary description follows the user's framing: "concept mapping + consuming the underlying content." TEM is a compact label for ease of reference. The user may rename to anything that captures the shared operation (e.g., "Concept Mapping" alone; "Typed Enumeration"; or a different label entirely). The diagnosis doesn't depend on the specific name.

**Verification criteria (Decomposition P1):**
- [x] Verdict: Candidate B (partial unification) stated
- [x] Shared TEM core acknowledged
- [x] Non-shared implementation add-ons acknowledged as structurally meaningful
- [x] User's correction points honored
- [x] Recommendation: U2 + U3 with reasoning
- [x] U1 and U4 acknowledged but not recommended
- [x] TEM naming caveat (loop-coined; user may rename) included

---

## P3 — U2 spec-edit drafts (parallel with P4-P6)

### Edit for `homegrown/explore/references/explore.md`

**Insertion location:** in the "What Exploration Is" section, after the existing definition and before the "Two Exploration Modes" section.

**Drafted text (~80 words):**

```text
**Shared operation with /navigation.** Exploration is one instance of
a project-level operation also implemented by `/navigation` — **concept
mapping with content consumption** (loop-named **TEM — Typed
Enumeration Mapping**): producing typed concept-with-metadata
enumerations by consuming content. Both disciplines instantiate this
operation; they differ in implementation. Exploration's add-ons here:
artifact-vs-possibility modes; five confidence levels; seven failure
modes; Resolution Progression. Navigation's add-ons: 16-type taxonomy;
12 route-card fields; BOUNDARY-between-cycles workflow position; "or
current project state" input flexibility. See
`devdocs/patterns/typed-enumeration-mapping.md` for the shared-operation
pattern document.
```

### Edit for `homegrown/navigation/references/navigation.md`

**Insertion location:** in the "What Navigation Is" section, after the existing definition and before the "Navigation Item Structure" section.

**Drafted text (~80 words):**

```text
**Shared operation with /explore.** Navigation is one instance of
a project-level operation also implemented by `/explore` — **concept
mapping with content consumption** (loop-named **TEM — Typed
Enumeration Mapping**): producing typed concept-with-metadata
enumerations by consuming content. Both disciplines instantiate this
operation; they differ in implementation. Navigation's add-ons here:
16-type taxonomy; 12 route-card fields; Freshness Preflight;
BOUNDARY-between-cycles framing; input flexibility (completed SIC cycle
or current project state). Exploration's add-ons: artifact-vs-possibility
modes; five confidence levels; seven failure modes. See
`devdocs/patterns/typed-enumeration-mapping.md` for the shared-operation
pattern document.
```

**Verification criteria (Decomposition P3):**
- [x] `explore.md` edit drafted (~80 words; references TEM + cross-references)
- [x] `navigation.md` edit drafted (~80 words; references TEM + cross-references)
- [x] Both edits placed at natural locations (in each spec's introductory section)
- [x] Both reference the project-pattern document
- [x] Both acknowledge implementation differentiation
- [x] Step-5 conformance: clarification (naming an existing operation), not behavior-change

---

## P4 — U3 project-pattern document (parallel with P3, P5, P6)

**Proposed file path:** `devdocs/patterns/typed-enumeration-mapping.md`

**Drafted document (~400 words):**

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
concept-with-metadata enumerations by consuming content. The operation
takes content (territory, documents, prior outputs, project state) as
input and produces a structured map of typed concepts — each carrying
metadata (priority, status, confidence, relations, guidance, etc.) —
as output.

**Distinguishing criterion:** the operation ENUMERATES without
committing. It produces ALL items in scope (typed, with metadata)
rather than selecting among them or stabilizing one interpretation.

## What TEM is NOT

- Not Sensemaking — Sensemaking commits to a stabilized interpretation
  (reduces ambiguity to one stable model). TEM enumerates without
  reducing.
- Not Decomposition — Decomposition partitions complexity into pieces.
  TEM enumerates forward items, not partitions.
- Not Critique — Critique evaluates candidates against weighted
  dimensions and produces SURVIVE / REFINE / KILL verdicts. TEM
  enumerates without evaluating.

## The instances

### Explore
Maps unknown territory of any kind. Add-ons: artifact-vs-possibility
modes; five confidence levels; seven failure modes; Resolution
Progression. Workflow position: upstream of Sensemaking.

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
4. The output ENUMERATES the scope (breadth coverage), not a selection.

Failure modes that affect TEM: Premature Evaluation in Possibility
Mode (failure mode #7 in `explore.md`); analogous concerns may exist
for navigation-style enumeration if Critique-style rejection bleeds
into the enumeration.

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

**Verification criteria (Decomposition P4):**
- [x] File path proposed
- [x] TEM defined operationally
- [x] TEM's distinguishing criterion stated
- [x] What TEM is NOT (vs sister disciplines) named
- [x] Three instances characterized
- [x] How to recognize TEM in any discipline (the runtime test)
- [x] Cross-reference to this inquiry's finding

---

## P5 — Supersession framing for prior 13-30 finding

**To be included in this inquiry's finding.md frontmatter:**

```yaml
---
status: active
supersedes: devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md
diagnoses: explore_vs_navigation_relationship
affects_spec: homegrown/explore/references/explore.md AND homegrown/navigation/references/navigation.md
creates: devdocs/patterns/typed-enumeration-mapping.md
---
```

**To be included in this inquiry's finding.md "Changes from Prior" section:**

```markdown
## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md`.

**Revision trigger:** the user pushed back on the prior diagnosis with
three correction points — (1) R2 takes "or current project state"
input, not just completed SIC output; (2) R2's route-cards and R3's
concept-nodes share the concept-with-metadata structure; (3) Explore
and Navigation share the same underlying operation (concept mapping +
content consumption). Exploration verified corrections #1 and #2 at
the artifact level; correction #3 has strong positive structural
support.

**What's preserved:** the structural observation that Explore, R2, and
R3 each have their own implementation-level add-ons (16-type taxonomy
for R2; assess overlay for R3; modes + confidence levels for Explore).
The five operational paths for R3 (a, b, c, d, hybrid) from the prior
finding are also preserved as still-applicable options if needed
during R3 implementation.

**What's changed:** the relational verdict. The prior framing was R2
vs Explore = Candidate E "separate but mechanism-sharing" and R3 vs
Explore = Candidate F "specialization + composition." The corrected
verdict is Candidate B (partial unification): all three (Explore, R2,
R3) instantiate the same underlying operation (TEM); the
"separateness" framing was a level-of-description error — they share
the OPERATION, not just the mechanism.

**What's new:** TEM (Typed Enumeration Mapping) as the explicit name
for the shared operation; the U2 + U3 recommended operational paths
(recognize-in-spec + project-pattern document) replacing the prior
finding's Hybrid recommendation for R3 specifically.

**Migration:** downstream references to the prior 13-30 finding should
cite this finding instead. The 13-30 finding remains as historical
record; this finding is the current authoritative diagnosis.
```

**Verification criteria (Decomposition P5):**
- [x] Frontmatter `supersedes:` field drafted
- [x] What's preserved stated
- [x] What's changed stated (with framing error named explicitly)
- [x] What's new stated
- [x] Migration note included

---

## P6 — Research Frontier observations

To be included in this inquiry's finding.md "Open Questions / Research Frontiers" section.

### Research Frontier 1 — Other discipline pairs may have hidden operation-level unity

The TEM diagnosis (Explore and Navigation share an underlying operation despite implementation-level differentiation) may apply elsewhere. Candidate pairs worth examining:

- **Sensemaking vs Reflect.** Both produce models / understanding of process. Do they share an underlying operation at a deeper level?
- **Innovate vs Decompose.** Both produce structured outputs from inputs. Decompose partitions complexity; Innovate generates novelty. Are these instances of a deeper "Structured Transformation" operation, or are they genuinely separate?
- **Critique vs Reflect.** Both evaluate work. Critique evaluates candidates; Reflect evaluates process. Shared evaluation operation, or distinct?

Each of these would warrant its own /MVL+ inquiry following the same shape as this one.

### Research Frontier 2 — 4th instance of discipline-mandate-boundary inquiry

This inquiry is the **fourth** in a sequence of discipline-mandate-boundary inquiries within the same day:
- **12-30** "Is Sensemaking one discipline or multiple?" → ONE umbrella + TWO named operations (Comprehending + Stabilizing)
- **13-00** "Is Exploration overreaching into Critique?" → YES in 3 of 5 cases; spec + execution drift; added failure mode #7
- **13-30** "Why does Explore overlap with Navigation?" → SUPERSEDED by this inquiry
- **13-45** (this) "Is Explore-and-Navigation one underlying operation?" → partial unification + TEM

Four instances within hours suggests the project is in an active discipline-architecture refinement phase. The pattern may merit project-level codification — perhaps a meta-protocol for "how to diagnose discipline-mandate questions" or a guide for "when to inquire about a discipline's boundaries vs operations."

**Verification criteria (Decomposition P6):**
- [x] Research Frontier 1 (other discipline pairs) named with candidate pairs
- [x] Research Frontier 2 (4th instance of pattern) noted
- [x] Both observations flagged as out-of-scope for THIS inquiry; not in Next Actions
- [x] Candidate inquiries suggested

---

## Phase 3 — Test (5-test cycle)

| Test | Result |
|---|---|
| **Novelty** | The partial-unification diagnosis with TEM as the named operation is novel in the project. The U2 + U3 combined recommendation is novel (pattern document layer doesn't currently exist). **NOVEL.** |
| **Scrutiny survival** | Survived 7 mechanisms; 3 Inversion levels; 4 Lens conditions; user's pushback (which initiated the inquiry); two artifact verifications (R6 and R7); Sensemaking's 5 ambiguity resolutions + 3 load-bearing concept tests + FEC meta-application. **SURVIVED.** |
| **Fertility** | Opens: (a) Research Frontier 1 (other discipline-pair audits); (b) Research Frontier 2 (project-level codification of discipline-mandate-boundary inquiry pattern); (c) the pattern-document layer at `devdocs/patterns/` (precedent for future shared-operation documentation). **FERTILE.** |
| **Actionability** | All six pieces have concrete drafted texts. User can act on the recommendation (U2 + U3) immediately or override toward U1/U4 with reasoning. **ACTIONABLE.** |
| **Mechanism independence** | Four Generators (Combination; Domain Transfer with 3 sub-transfers; Absence Recognition; Extrapolation) + three Framers (Lens Shifting across 4 lenses; Constraint Manipulation; Inversion) all converge. **HIGH mechanism independence.** |

**Test cycle: SURVIVED.**

---

## Assembly check + Axis coverage check

### Assembly check

The six pieces compose into a complete supersession-with-operational-paths deliverable:
- **P2** establishes TEM as the foundation.
- **P1** delivers the verdict + recommendation.
- **P3 + P4** are the operational artifacts (spec edits + pattern doc).
- **P5** marks the prior finding superseded.
- **P6** preserves broader-pattern observations.

**Emergent observation:** this inquiry creates a NEW STRUCTURAL LAYER in the project — the `devdocs/patterns/` directory (proposed) for shared-operation documentation. This is itself a meta-architectural addition that the prior inquiries didn't introduce. Future shared-operation observations can extend this layer.

### Axis coverage check

Orthogonal axes:
- **Axis 1 — Operation-level unity** (TEM): covered by P2.
- **Axis 2 — Implementation-level differentiation** (Explore's modes; R2's taxonomy; R3's assess overlay): covered by P2's instance characterizations + P1's verdict.
- **Axis 3 — Spec-level recognition** (U2): covered by P3.
- **Axis 4 — Project-pattern-level recognition** (U3): covered by P4.
- **Axis 5 — Prior-finding status** (supersession): covered by P5.
- **Axis 6 — Broader-pattern context** (Research Frontiers): covered by P6.

All six axes covered.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4 (Combination; Domain Transfer; Absence Recognition; Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting; Constraint Manipulation; Inversion).
- **Total mechanisms:** 7/7.
- **Convergence:** YES — all 7 mechanisms converge on the U2+U3 recommendation and the TEM operation naming with user-language alignment.
- **Survivors tested:** 1/1 SURVIVED.
- **Failure modes observed:** None.

**Overall: PROCEED.** Innovation stayed within mandate. Hand off to Critique for adversarial testing.
