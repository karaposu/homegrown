---
status: active
refines: devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md
---
# Finding: Explore-Navigation Atomic Decomposition (Second Pass)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md`
**Revision trigger:** the user requested a deeper-pass examination of the Explore-and-Navigation connection — atomic decomposition of each into sub-operations, precise overlap shape, and verification of whether "TEM" is one atomic operation or something more refined.
**What's preserved:** the 13-45 verdict that Explore and Navigation share an underlying operation (TEM — Typed Enumeration Mapping) AT COARSE GRAIN. The implementation-level differentiation observations (5-level confidence + 16-type taxonomy + etc.) are preserved.
**What's changed:** at MEDIUM grain, the shared region is more precisely 4 atomic operations sharing an output-shape constraint, not "one operation." The 4 are role-equivalent across disciplines but content-different. TEM is best understood as a level-of-resolution label whose specific meaning depends on the granularity chosen.
**What's new:** an atomic-operation inventory for each discipline (11 Explore + 15 Navigation = 22 atomic operations across both); an explicit overlap map (4 SHARED + 7 Explore-only + 11 Navigation-only); the output-shape constraint as the distinguishing criterion against sister disciplines; a 3-resolution framing (coarse / medium / fine).
**Migration:** the pattern document `devdocs/patterns/typed-enumeration-mapping.md` (proposed by 13-45's MUST but not yet created) should incorporate this finding's medium-grain section when created. Either coordinated single-creation (Path A) or phased (Path B) — both produce the same end state.

## Question

The 13-45 finding concluded Explore and Navigation share an underlying operation called TEM. The user asked for a **deeper second pass**: not whether they share an operation (13-45 stands at its resolution), but **what is the atomic-sub-operation decomposition of Explore and Navigation, what is the precise shape of the overlap, and is "TEM" one atomic operation or something more refined?**

## Finding Summary

- **TEM is NOT one atomic operation. It is a label for a CLUSTER of 4 shared atomic operations** that together produce a shared OUTPUT SHAPE (map-shape, distinguishing TEM-instances from sister disciplines). The 4 are: **input reading** (consume content); **typed-item production** (produce items tagged by a discipline-specific type schema); **metadata attachment** (tag each item with discipline-specific metadata); **structured-map assembly** (compose items + metadata into a discipline-specific map format).

- **The 4 shared atomic operations are role-equivalent but content-different.** Each operation plays the same STRUCTURAL ROLE in both disciplines but with different IMPLEMENTATION CONTENT. Explore's "typed-item production" uses signal-detection + artifact-vs-candidate types + 5-level confidence; Navigation's uses the 16-type taxonomy + 7-state route-cards. Same role; different content. This is the precise structural truth that the 13-45 finding's "operation-level unity + implementation-level differentiation" framing was pointing at.

- **The overlap at MEDIUM grain is 4/22 atomic operations (~18%).** Beyond the 4 shared: Explore has 7 atomic operations Navigation doesn't (mode selection; entry-point selection; resolution management; probe vs scan distinction; frontier tracking; convergence assessment; jump scan). Navigation has 11 atomic operations Explore doesn't (Freshness Preflight; gate/reachability detection; 16-type taxonomy assignment; route-state assessment; adaptive guidance allocation; guidance pointer generation; continuation note; excluded section maintenance; REVISIT triggering; 3-category map formatting; optional route-index). The full inventories are in the Reasoning section below.

- **There are three useful resolutions for viewing TEM**, all correct at their grain:
  - **Coarse:** TEM is one underlying operation (the 13-45 verdict). Useful for high-level discipline-relationship discussions.
  - **Medium:** TEM is a cluster of 4 atomic operations sharing an output-shape constraint (this finding). Useful for diagnosing discipline overlaps and designing new disciplines.
  - **Fine:** at finer-than-medium grain, the shared atomic operations themselves decompose differently per discipline. The cluster becomes a level-of-resolution label rather than a literal share. Useful for understanding why two role-equivalent operations have different content.

- **The output-shape constraint is the sharper distinguishing criterion** against sister disciplines. TEM-instances produce MAP-SHAPED output (many typed items with metadata; coverage of scope; no commitment). Sensemaking produces commitment-shape (one stabilized interpretation). Decomposition produces partition-shape (mutually exclusive pieces). Critique produces verdict-shape (SURVIVE/REFINE/KILL with reasoning). The 4 shared atomic operations are how TEM-instances structurally produce map-shape.

- **The user's original framing — "concept mapping + content consumption" — is structurally more accurate than the compact "TEM" label.** The "+" in the original is load-bearing: content consumption (the input-reading atomic operation) AND concept mapping (the production + metadata + assembly atomic operations). The TEM label compresses this conjunction.

- **Deliverable: minor update to the TEM pattern document.** Add a ~20-25 line "Finer-resolution view: atomic decomposition" section to `devdocs/patterns/typed-enumeration-mapping.md` once that file is created (per 13-45's MUST). Two application paths: Path A creates the pattern doc once with both 13-45 content + 21-51 section combined; Path B phases the application. Both produce the same end state.

---

## Finding

The 13-45 finding established TEM as the shared operation between Explore and Navigation at the operation-level. The user requested a second pass — not to retest the conclusion, but to go DEEPER. What is the structural decomposition of each discipline into atomic sub-operations? What is the precise shape of the overlap? Is the "one operation" label refined when you look at sub-operations?

This finding answers via medium-grain atomic decomposition.

### 1. The shared cluster: 4 atomic operations + output-shape constraint

The shared region between Explore and Navigation is precisely:

| Shared atomic operation | What it does (universal across both disciplines) |
|---|---|
| **S-1 Input reading** | Consumes content (Explore: territory; Navigation: cycle output or project state). |
| **S-2 Typed-item production** | Produces items tagged by a discipline-specific type schema (Explore: artifact-vs-candidate types from signal-detection + scan + probe; Navigation: 16-type taxonomy from cycle-output mapping). |
| **S-3 Metadata attachment** | Attaches discipline-specific metadata to each item (Explore: 5-level confidence + frontier-state; Navigation: priority + 7-value status + purpose + WHY + guidance fields). |
| **S-4 Structured-map assembly** | Composes items + metadata into a discipline-specific map format (Explore: territory map with regions + signal log; Navigation: route-card-organized map with content/process/context grouping). |

These 4 atomic operations are ROLE-EQUIVALENT BUT CONTENT-DIFFERENT. Each plays the same structural role in both disciplines, but the IMPLEMENTATION CONTENT differs (different type schemas; different metadata vocabularies; different map formats).

The 4 operations together produce a shared OUTPUT-SHAPE CONSTRAINT: map-shape. This is what distinguishes TEM-instances from sister disciplines (Sensemaking commits; Decomposition partitions; Critique evaluates).

### 2. The discipline-specific operations

Beyond the 4 shared operations, each discipline has its own atomic operations.

**Explore has 7 atomic operations not in Navigation:** mode selection (artifact vs possibility); entry-point selection (frontier-first vs signal-first); resolution management (zoom in/out); probe vs scan distinction; frontier tracking (3-state machine: advancing/stable/closed); convergence assessment (3 criteria); jump scan (counter-direction safety check). These give Explore its iterative-mapping-of-unknown-territory character.

**Navigation has 11 atomic operations not in Explore:** Freshness Preflight; reachability/gate detection; 16-type taxonomy assignment; route-state assessment (7 values); adaptive guidance allocation (4 modes); guidance pointer generation; continuation note (cross-cycle memory); excluded section maintenance; REVISIT triggering; 3-category map formatting; optional route-index. These give Navigation its boundary-discipline-enumerating-next-directions character.

Full atomic-operation inventories with spec citations are in the Reasoning section below.

### 3. Three resolutions of TEM

All three views are correct at their respective grains:

- **Coarse-grain view (the 13-45 verdict):** TEM is one underlying operation. Useful for high-level discussions of discipline relationships.
- **Medium-grain view (this finding):** TEM is a cluster of 4 atomic operations sharing an output-shape constraint. Useful for diagnosing potential overlaps between disciplines and designing new ones.
- **Fine-grain view:** at finer-than-medium grain, the shared atomic operations decompose differently per discipline (e.g., Explore's "typed-item production" via signal-detection vs Navigation's via 16-type-taxonomy-assignment — each finer-grain operation is discipline-specific). The cluster becomes a level-of-resolution label rather than a literal share.

The 13-45 finding's "operation-level unity + implementation-level differentiation" framing maps cleanly onto medium-grain in this finding: the 4 shared atomic operations are the "operation-level unity"; the 7 + 11 discipline-specific atomic operations are the "implementation-level differentiation."

### 4. Why the user's "+" framing matters

The user's framing "concept mapping + content consumption" is more structurally accurate than the compact "TEM" label. The "+" is a load-bearing conjunction:
- **Content consumption** = S-1 (input reading)
- **Concept mapping** = S-2 + S-3 + S-4 (typed-item production + metadata attachment + structured-map assembly)

The TEM label compresses these into a single name. The user's framing keeps the structural composition visible. The pattern-doc update preserves the user's framing literally.

### 5. The deliverable

A minor update to `devdocs/patterns/typed-enumeration-mapping.md`: add a ~20-25 line "Finer-resolution view: atomic decomposition" section that:

1. Names the 4 shared atomic operations in a table.
2. States the output-shape constraint as the distinguishing criterion against sister disciplines.
3. States the role-equivalent-but-content-different framing.
4. Names the 3 resolutions (coarse / medium / fine).
5. Preserves the user's "+" framing.
6. Cross-references this finding as the source.

The drafted section text is in the Reasoning section below.

**Critical state-of-world note:** the target pattern doc and `devdocs/patterns/` directory DO NOT YET EXIST. The 13-45 finding's MUST proposed creating both. This finding's section is an ADDITION to that pattern doc. Two application paths are available (Path A coordinated single-creation; Path B phased) — both produce the same end state.

---

## Next Actions

### MUST

- **What:** Apply the medium-grain section to `devdocs/patterns/typed-enumeration-mapping.md` (the drafted section text is in the Reasoning section below).
  - **Who:** User-applied (or AI-applied with explicit user request).
  - **Gate:** Either Path A or Path B from below.
  - **Why:** Captures the medium-grain refinement in the pattern doc so future practitioners diagnosing discipline overlaps can use the 4-shared-atomic-operations + output-shape-constraint template.

  **Path A — coordinated single-creation:** Apply 13-45's MUST (create `devdocs/patterns/` directory + create the pattern doc with the 13-45-drafted content) AND this 21-51 finding's section (append to that pattern doc) in one coordinated act. Net result: one new file containing both 13-45 coarse-grain content + 21-51 medium-grain section. Recommended path.

  **Path B — phased:** Apply 13-45's MUST first (creates directory + initial pattern doc). Then apply this finding as a follow-up edit (append the medium-grain section). Same end state; two separate applications.

### COULD

- **What:** Expand the section's table to 3 columns (Shared atomic operation | Explore manifestation | Navigation manifestation) to make the section more self-contained.
  - **Who:** User decides.
  - **Gate:** Optional; current 2-column form is acceptable.
  - **Why:** Reduces dependency on following the 21-51 link for basic understanding. Cost: ~5-7 more lines (still under 30-line target). Sensemaking's compact-reference lens-shift chose 2 columns; this is an optional preference.

- **What:** Update the `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` recognize-in-spec text (per 13-45's MUST item) to reference the pattern doc.
  - **Who:** User.
  - **Gate:** When the pattern doc exists.
  - **Why:** 13-45's U2 recommendation; complements the pattern-doc creation.

### DEFERRED

- **What:** Future discipline-overlap inquiries could use the 3-resolution template (coarse / medium / fine) as a diagnostic framework. Not codified as a meta-protocol here; flagged as Research Frontier observation.

---

## Reasoning

### 6. Atomic-operation inventories (the analytical backing)

**Explore atomic operations (11), sourced from `homegrown/explore/references/explore.md`:**

| # | Operation | Source |
|---|---|---|
| EX-1 | Mode selection (artifact / possibility) | "Two Exploration Modes" |
| EX-2 | Entry-point selection (frontier-first / signal-first) | "Process Model → Entry Point" |
| EX-3 | Coarse scan (with surround-layer check) | "Resolution Progression" step 1 |
| EX-4 | Signal detection (5 signal types: density / novelty / relevance / tension / absence) | "Key Components → Signal Detection" |
| EX-5 | Resolution management (zoom in / out) | "Key Components → Resolution Management" |
| EX-6 | Probe (depth pass on a signal) | "Key Components → Probe" |
| EX-7 | Frontier tracking (3 states) | "Key Components → Frontier Tracking" |
| EX-8 | Confidence mapping (5 levels) | "Key Components → Confidence Mapping" |
| EX-9 | Convergence assessment (3 criteria) | "Coverage Strategy → Convergence Criteria" |
| EX-10 | Jump scan (counter-direction safety) | Failure Mode #3 prevention |
| EX-11 | Output assembly (territory map) | "Execute the Exploration Process" Step 4 |

**Navigation atomic operations (15), sourced from `homegrown/navigation/references/navigation.md` + `/Users/ns/.claude/skills/navigation/SKILL.md`:**

| # | Operation | Source |
|---|---|---|
| NV-1 | Input reading (cycle output or project state) | Process Model Step 1 + SKILL.md |
| NV-2 | Freshness Preflight | SKILL.md Step 0 |
| NV-3 | Reachability / gate detection | Process Model Step 1 sub-step |
| NV-4 | Type assignment (16-type taxonomy) | Process Model Step 2 + taxonomy section |
| NV-5 | Route-state assessment (7 values) | Route identity + route state |
| NV-6 | Priority assignment (HIGH/MEDIUM/LOW) | Process Model Step 4 |
| NV-7 | Purpose / Movement / Unlocks identification | Route meaning section |
| NV-8 | WHY (evidence) extraction | Reasoning section |
| NV-9 | Guidance mode selection (4 modes) | Adaptive guidance + Step 3 |
| NV-10 | Guidance pointer generation | Step 3 sub-step |
| NV-11 | Continuation note | Continuation note section |
| NV-12 | Excluded section maintenance | Process Model Step 5 |
| NV-13 | REVISIT triggering across cycles | Context-directed types section |
| NV-14 | Map formatting (3 categories) | Process Model Step 6 |
| NV-15 | Output assembly (navigation map) | Step 6 final |

**Overlap map:**

| Shared op | Explore manifestation (which Explore atomic operation(s)) | Navigation manifestation |
|---|---|---|
| **S-1 Input reading** | EX-3 (coarse scan reads territory) | NV-1 (reads cycle output or project state) |
| **S-2 Typed-item production** | EX-3 + EX-4 + EX-6 (inventory + signals + probes — typed by mode/signal-type) — *note: this is a medium-grain conflation; within Explore these are 3 distinct atomic operations* | NV-4 (route-cards typed by 16-type taxonomy) |
| **S-3 Metadata attachment** | EX-7 + EX-8 (frontier-state + 5-level confidence) | NV-5 + NV-6 + NV-7 + NV-8 (state + priority + purpose + WHY) |
| **S-4 Structured-map assembly** | EX-11 (territory map) | NV-14 + NV-15 (formatted navigation map) |

**Discipline-specific (not in the other discipline):** EX-1, EX-2, EX-5, EX-6-as-distinct (probe vs scan), EX-9, EX-10, and parts of EX-7+EX-8 are Explore-only; NV-2, NV-3, parts of NV-4 (taxonomy itself), NV-5 (route-state values), NV-9, NV-10, NV-11, NV-12, NV-13, NV-14 (category grouping), optional route-index are Navigation-only.

The S-2 grouping note: at MEDIUM grain (across-discipline view), Explore's EX-3 + EX-4 + EX-6 collectively manifest the shared "typed-item production" role. At FINE grain (within Explore), they are 3 distinct atomic operations. The medium-grain conflation is consistent with the 3-resolution framing — different views of the same structural pattern.

### 7. Drafted pattern-doc section (the deliverable text)

The following is the EXACT text to ADD to `devdocs/patterns/typed-enumeration-mapping.md` after the existing content (the "Why this document exists" section that 13-45's MUST creates):

```markdown

## Finer-resolution view: atomic decomposition

The "one underlying operation" view above describes TEM at COARSE grain. At MEDIUM grain, the shared region decomposes into 4 atomic operations sharing an output-shape constraint:

| Shared atomic operation | Role |
|---|---|
| Input reading | Consumes content (territory; cycle output; project state). |
| Typed-item production | Produces items tagged by a discipline-specific type schema. |
| Metadata attachment | Tags each item with discipline-specific metadata (confidence; priority; status; route-state; etc.). |
| Structured-map assembly | Composes the items + metadata into a discipline-specific map format. |

**Output-shape constraint.** TEM-instances produce MAP-SHAPED output — many items, possibly overlapping in scope, with metadata. This distinguishes TEM from sister disciplines: Sensemaking produces commitment-shape; Decomposition produces partition-shape; Critique produces verdict-shape. The 4 shared atomic operations above are how TEM-instances structurally produce map-shape.

**Role-equivalent but content-different.** Each shared atomic operation plays the same structural role in each TEM-instance but with different content. Explore's "typed-item production" uses 5-level confidence + signal-detection; Navigation's uses a 16-type taxonomy. Same role; different implementation content.

**Three resolutions.** At COARSE grain, TEM is one underlying operation (per the description above). At MEDIUM grain, TEM is a cluster of 4 atomic operations sharing an output-shape constraint (this section). At FINE grain, the shared atomic operations themselves decompose differently per discipline — the cluster becomes a level-of-resolution label. All three views are correct at their resolutions.

The user's original framing "concept mapping + content consumption" — note the "+" conjunction — captures the medium-grain composition: content consumption (S-1 above) AND concept mapping (S-2 + S-3 + S-4).

See `devdocs/inquiries/2026-05-11_21-51__explore_navigation_atomic_decomposition/finding.md` for the source of this finer-resolution view.
```

### 8. KILLs and SURVIVEs from Critique

Critique's verdicts:
- **P1 (pattern-doc section)** — SURVIVE with REFINE-OPTIONAL. Optional refinement: expand the 2-column table to 3 columns (Shared atomic operation | Explore manifestation | Navigation manifestation) at cost ~5-7 lines, making the section more self-contained. Not required; the 2-column form is what Sensemaking specified per the compact-reference lens-shift choice. Available as a user preference.
- **P2 (analytical inventories)** — SURVIVE with REFINE-MINOR. The S-2 grouping note (Explore's EX-3 + EX-4 + EX-6 collapse into the shared typed-item-production bucket) is medium-grain-appropriate but should be flagged. **APPLIED:** the inventory overlap map above explicitly notes this conflation.

11 Explore + 15 Navigation atomic operations were verified line-by-line against spec citations. The universal-discipline test was verified token-by-token. The 13-45 coarse-grain verdict was verified preserved.

### 9. Self-reference handling

This inquiry used three of the project's disciplines (Exploration, Sensemaking, Decomposition, Innovation, Critique) to analyze the relationship between two OTHER project disciplines (Explore, Navigation). Self-reference acuity HIGH.

External anchoring: the 13-45 finding (independent prior); the spec texts at `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` (artifact-grounded; verified line-by-line); the user's prose framing (independent of project sensemaking principles); the 20-13 universal-discipline test (independent criterion).

Counter-anchoring: per ambiguity in Sensemaking, counter-interpretations were tested. In Exploration, 3 counter-directions were probed (output-shape vs structural similarity; granularity choice; structural-equivalence-vs-literal-share). Self-Reference Blindness corrective applied. Self-reference HELD.

---

## Open Questions

### Monitoring

- After applying the pattern-doc section, does the next inquiry diagnosing discipline overlaps actually USE the 3-resolution template? Observable in the next such inquiry's Exploration/Sensemaking phase.

### Blocked

- The 13-45 finding's other MUST items (recognize-in-spec text in explore.md and navigation.md per U2) remain blocked on their separate application; not advanced by this finding.

### Research Frontiers

- **3-resolution template as a reusable diagnostic.** The coarse / medium / fine resolution framing could be a reusable template for future discipline-overlap inquiries: at coarse, are these the same operation? At medium, what are the shared atomic operations? At fine, how do shared operations decompose differently per discipline? Codification as a meta-protocol could happen if more discipline-overlap diagnostics emerge.

- **Cross-discipline atomic-decomposition audit.** If the medium-grain analysis is useful for Explore/Navigation, the other discipline pairs might benefit from similar atomic decomposition. Out of scope here.

- **The TEM partial-instance question (carried forward from 13-45 Research Frontier 3).** Sensemaking's Comprehending operation may also be a partial TEM instance. The atomic-decomposition framework from this finding could be applied to that question: would Sensemaking's Phase 1-2 (Comprehending) exhibit the 4 shared atomic operations? Out of scope here.

### Refinement Triggers

- **If practitioners report the 2-column table is insufficient** when applying the pattern, expand to 3 columns per the COULD action above.
- **If the medium-grain claim is contradicted** by a future TEM-instance that doesn't exhibit all 4 atomic operations, revisit the cluster claim.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md

lets try a second pass with that and try to understand more deeply the connection between explore and navigation.  what is common, what kind of decomposition of them give us overlap concept etc

be careful
```

</details>
