# Innovation — /explore Bloat REPAIR Concrete Edits + Iteration #10 Finding

## User Input

```
/MVL+

 REPAIR the Neighbor-disciplines table to drop project paths (A2)

why Neighbor-disciplines is needed anyway?  why woudl explore need to know this ? 

i think you are not understanding the full bloat for some reason.
```

Plus the inquiry's `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Sensemaking committed Option (ii) RELOCATE-NOT-DELETE; decomposition partitioned into 5 pieces (P1–P5).

---

## Phase 1 — Seed

**Seed:** "Concrete final text for the 5 REPAIR pieces — the actual content for `_design_history.md`, the actual `old_string`/`new_string` Edit operations for `references/explore.md`, and the iteration #10 finding template."

**Intuition direction:** the output's form must not reproduce the bloat patterns being repaired. Lean form: prose-with-headers, content-addressed Edits, no enumerative scaffolding beyond what's necessary.

---

## Phase 2 — Generate (Minimum Coverage)

Per parsimony directive: ONE focused variant per piece. Two mechanisms applied:

- **Constraint Manipulation (Framer).** Constraints: (C1) concrete edits not abstract recommendations; (C2) content-addressed Edits to handle same-file line-number drift; (C3) lean output that doesn't reproduce the bloat patterns it's correcting; (C4) preserve exact verbatim content where the user has invested in specific wording.
- **Combination (Generator).** Combine the chain's per-element REPAIR pattern (specific old_string/new_string pairs) with the relocate-not-delete shape (institutional-memory destination + cleaned runtime spec) + the lean-form discipline (scope-fidelity self-check on the output).

---

## P1 — Full content for `enes/discipline_design_history/for_explore.md`

```markdown
# /explore — Design History

This file holds the **institutional memory** for the `/explore` discipline — the provenance, calibration-state notes, deferred additions, and research-frontier items that informed the discipline's design but are not needed at runtime.

The **runtime specification** lives at `homegrown/explore/references/explore.md`. The runtime spec is loaded by `homegrown/explore/SKILL.md` at Step 0; this design-history file is NOT loaded at runtime.

Material here is preserved for future spec-authoring and for readers who want to understand why the discipline is shaped the way it is. Removing items from the runtime spec while keeping them here preserves the option to consult them later without burdening every `/explore` invocation with their context cost.

---

## Sources

The `/explore` reference is synthesized from four findings in the project's inquiry log:

- `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md` — the original from-scratch framing (5-section structure, NOT-list, components, modes)
- `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md` — end-goal-aware additions (resolution-level field, staging telemetry, staging-boundary regression failure mode, Merge Contract, /staged-explore runner)
- `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md` — per-item content depth (D0–D4 levels, depth-level field, labeling-vs-meaning heuristic, labeling/anchor terminology, NOT-list clarification)
- `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` — /explore vs /navigation boundary (specialization pattern; /navigation is a specialization of /explore over the next-move-space)

Additional inquiry: `devdocs/inquiries/2026-05-14_17-30__explore_what_does_it_actually_need__bloat_reframe/finding.md` — the bloat-reframe that produced the current lean runtime spec by relocating institutional-memory content here.

---

## Calibration-state notes

Several items in the discipline reflect the current best-known answer with explicit acknowledgment that empirical refinement is expected.

- *The default depth-by-resolution coupling* — operational reasoning from LLM context-budget observations; not empirically validated. *Refinement trigger:* context-budget observations across staged-explore runs reveal consistent mismatch; refine.

- *The labeling-vs-meaning heuristic's edge cases* — domain jargon and contested terminology treated as labeling-at-low-confidence. *Refinement trigger:* 3+ observed runs report ambiguity at edge cases; refine via empirical examples.

- *The staging-boundary regression threshold* — `< 2 items` was a starting default for a speculative failure mode (formerly listed as failure mode #10 in the runtime spec; removed in the 2026-05-14 bloat-reframe because the mode is speculative and detection is runner-level, not discipline-level). *Refinement trigger:* observed runs reveal the threshold is too lax or too strict AND a runner exists that can detect it.

- *D4 (relevance verdict)* — optional in the runtime spec; full specification forward-tied to a planned follow-up inquiry on active verification-probing.

---

## Deferred additions (revival-triggered)

These items are structurally sound but presuppose a project state not yet reached. Each has a specific revival trigger.

- **Typed Input Contract** (excluding the already-actionable `expected` and `depth-level` fields). A typed `_branch.md` schema (territory specification, purpose, prior map, depth target). *Revival:* project introduces a typed `_branch.md` schema OR meta-loop introduces a cross-invocation map handoff requiring typed exchange.

- **Typed Existence-Claim Schema.** Typed record `{territory, region, item, confidence, claim_type ∈ {present, absent, inferred}, optional relevance, optional adjacent_items}` alongside markdown rendering. *Revival:* automation consumer downstream OR project adopts machine-readable inquiry artifacts.

- **Drift-as-Escalation.** Convert open→closed drift (failure mode in the runtime spec) from failure-mode suppression to a Frontier-output escalation to sense-making. *Revival:* 3+ runs observe drift OR sense-making is wired to consume escalations from /explore.

- **Legend output section.** Explicit semantics of confidence levels and annotation types as a Legend section. *Revival:* downstream consumers report confusion about annotation semantics in 2+ runs.

- **Controlled Vocabulary for claim types.** Typed categories (present / absent / inferred / hypothetical) replacing prose claim descriptions. *Revival:* claim-type ambiguity surfaces as a frontier signal in 2+ runs.

- **Discovery-vs-Revisit telemetry.** Track how often re-invocation finds new items vs re-confirms known ones. *Revival:* cross-invocation re-explore becomes common.

- **Implementation-level Merge Contract.** Code-supported merging instead of manual. *Revival:* meta-loop runs sibling inquiries with overlapping territories OR users report manual merging is unsustainable.

- **Frontmatter mode-declaration.** Add `cognitive-commitment: open` to the SKILL.md frontmatter. *Revival:* project introduces a frontmatter-mode convention OR autonomous mode-selection ships at Level 3+.

- **Paired-discipline cross-reference with /comprehend.** Explicit pairing as open-mode / closed-mode counterparts. *Revival:* /comprehend is being rewritten OR autonomous mode-selection ships requiring discipline pairing.

- **Skill-ification of `/staged-explore`.** Convert the doc-only v1 runner to an invokable skill. *Revival:* manual orchestration becomes unsustainable OR autonomous mode-selection ships at Level 3+.

- **Step 0 declarations** (removed from the runtime spec in the 2026-05-14 bloat-reframe). A 5-field declarations table (cognitive-commitment-mode; territory-type-mode; entry-point; expected; depth-level). *Revival:* autonomous orchestration ships AND requires a typed input contract AND empirical evidence shows that explicit declaration reduces a real failure rate; without those conditions, the declarations were ritual overhead that didn't fire at runtime.

- **Cross-Inquiry Merge Contract** (removed from the runtime spec in the 2026-05-14 bloat-reframe). The contract for merging multiple /explore output maps. Manual merging remains possible by reading two outputs and combining them; the spec-level merge contract is deferred until an automated implementation consumer exists. *Revival:* automated merge consumer exists OR meta-loop sibling-inquiry merging becomes routine.

- **Staged execution subsection** (removed from the runtime spec in the 2026-05-14 bloat-reframe). The `/staged-explore` runner orchestrates `/explore` at progressively finer resolutions. The runner's spec lives in its own file (`homegrown/runners/staged_explore.md` when materialized); the runtime `/explore` spec no longer cross-references it. *Revival:* /explore's runtime behavior changes in a way that affects /staged-explore.

- **Resolution progression subsection** (removed from the runtime spec in the 2026-05-14 bloat-reframe). Duplicated the canonical-cycle content with a different framing. *Revival:* if the two framings turn out to be meaningfully different and the duplication was load-bearing; otherwise stays removed.

- **Specialization pattern + /navigation boundary** (removed from the runtime spec in the 2026-05-14 bloat-reframe). The pattern described how `/navigation` transcludes `/explore`'s mechanics at spec-time. The pattern is meta-architectural; it does not fire at /explore runtime. The /navigation spec describes its own specialization independently. *Revival:* if a future specialization needs cross-reference at runtime, OR if the pattern becomes load-bearing for spec-time decisions about new disciplines.

- **Neighbor disciplines table** (removed from the runtime spec in the 2026-05-14 bloat-reframe). A 5-row table mapping disciplines to their spec paths and to what /explore does NOT do. The NOT-list portion duplicated §1.3 NOT-list; the spec-paths portion was project-coupling. *Revival:* if cross-discipline runtime cross-references become load-bearing; until then the §1.3 NOT-list is sufficient.

- **Runner taxonomy table** (removed from the runtime spec in the 2026-05-14 bloat-reframe). Lists the project's runners. /explore does not consult runners at runtime; the table was project-orientation overhead. *Revival:* if /explore's runtime behavior changes based on which runner invoked it.

- **Universal anatomy subsection** (removed from the runtime spec in the 2026-05-14 bloat-reframe). Cross-reference to `thinking_disciplines/anatomy_of_disciplines.md`. The anatomy template is for spec-authoring; it does not fire at /explore runtime. *Revival:* if the anatomy template changes in a way that affects runtime behavior.

- **Summary table** (removed from the runtime spec in the 2026-05-14 bloat-reframe). A 16-row recap of content present elsewhere in the spec. Pure duplication. *Revival:* none anticipated; if a future reader needs a one-page summary, the introduction of §1 can be expanded.

---

## Research-frontier items

These items are open research directions for the discipline; they exceed per-inquiry scope and do not block the current spec.

- **Persistent-state /explore.** `/explore` as a continuous state-machine running across the inquiry's lifetime, updating a project-wide map as new items surface. Incompatible with the current `/MVL+` discrete-invocation contract; depends on loop-architecture evolution (multi-head loops, merging loops).

- **`/parallel-loops` runner.** A fifth runner for multi-head loops with cross-comparison. Depends on the project starting multi-head loop capability.

- **Full restructure** of discipline reference files around cognitive operations rather than the spec-anatomy structure. Long-term direction if the project commits to systemic restructuring.

- **Cognitive-operation taxonomy across all 7 disciplines.** Each discipline characterized by open/closed mode and generative/analytic. Deserves its own inquiry.

- **Active verification-probing in /explore.** Should /explore actively probe candidates to confirm irrelevance (not just passively surface positives)? D4 (relevance verdict) is forward-tied to this future inquiry.

- **Generalizable from-scratch BLOAT audit.** The 2026-05-14 bloat-reframe inquiry (`devdocs/inquiries/2026-05-14_17-30__explore_what_does_it_actually_need__bloat_reframe/`) developed a from-scratch necessity-test frame as a generalizable BLOAT-audit operation. The same audit applies in principle to `/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation`, and any future discipline reference file. *Revival:* when another discipline shows similar bloat signals, OR proactively as a project-wide spec-hygiene pass.
```

---

## P2 — Loading-note edits in `homegrown/explore/references/explore.md`

**Edit 1 — DELETE Sources subblock (4 bullets) + Anatomy reference paragraph; ADD design-history cross-reference.**

`old_string`:
```
> **Loading note.** This file is the canonical reference for the `/explore` discipline. It is loaded by `homegrown/explore/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below is referenced by the protocol. Do not summarize or partial-load.
>
> **Sources.** This reference is synthesized from four findings in the project's inquiry log:
> - `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md` — the original from-scratch framing (5-section structure, NOT-list, components, modes)
> - `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md` — end-goal-aware additions (resolution-level field, staging telemetry, staging-boundary regression failure mode, Merge Contract, /staged-explore runner)
> - `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md` — per-item content depth (D0–D4 levels, depth-level field, labeling-vs-meaning heuristic, labeling/anchor terminology, NOT-list clarification)
> - `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` — /explore vs /navigation boundary (specialization pattern; /navigation is a specialization of /explore over the next-move-space)
>
> The spec follows the anatomy laid out in `thinking_disciplines/anatomy_of_disciplines.md` (Definition / Components / Process / Failure Modes / Coverage Strategy for the spec side; Transform / Progression / Telemetry / Frontier for the output side).
```

`new_string`:
```
> **Loading note.** This file is the canonical reference for the `/explore` discipline. It is loaded by `homegrown/explore/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below is referenced by the protocol. Do not summarize or partial-load.
>
> Design history (sources, calibration-state notes, deferred additions, research-frontier items) is preserved at `enes/discipline_design_history/for_explore.md` to keep the runtime spec focused on the operation.
```

---

## P3 — Spec body bloat-block deletions

For each of the 11 deletions, the Edit operation is content-addressed (uses unique headings + first sentences as `old_string` anchor). All deletions target `homegrown/explore/references/explore.md`.

### Decision: §1.5 — DELETE IN FULL (both abstract intro and /navigation paragraph)

Justification: The abstract intro paragraph (`/explore` operates on a stated territory...) restates `/explore`'s subject from §1.1 ("purposive open-mode surfacing of a territory"). The Specialization-pattern concept (transcludes-at-spec-time) is meta-architectural — it does not fire at /explore runtime. The /navigation-specific paragraph is project-coupling. Under the from-scratch frame, the entire §1.5 is bloat. Delete.

`old_string` (§1.5):
```
### 1.5 Specialization pattern and the /navigation boundary

`/explore` operates on a **stated territory**. A territory is any conceptual or artifact space whose contents are not pre-known to the cognizer. Two patterns matter:

- **General /explore** operates on a territory specified by the inquiry's `_branch.md` (e.g., a codebase, a research field, a problem domain).
- **Specialization** — another discipline (today: `/navigation`) is structurally a specialization of `/explore` over a specific territory (in `/navigation`'s case, the **next-move-space** from a known state). The specialization **transcludes** /explore's mechanics at spec-time; it does not invoke /explore at runtime. This preserves the workspace invariant.

The boundary between general /explore and /navigation: general /explore operates on territories whose contents need to be surfaced from scratch; /navigation operates on the specialized territory of *next-move routes from an already-mapped state*, adds a 16-type labeling vocabulary, generates per-route adaptive guidance, and includes a cognitive selection step. See the /navigation finding for the full specialization spec.

---

## 2. Components
```

`new_string`:
```
---

## 2. Components
```

### §3.1 Step 0 declarations — DELETE entire subsection

`old_string` (anchor on subsection heading through end-of-subsection content, including the orthogonality note and default-coupling table):
```
### 3.1 Step 0 declarations

When `/explore` is invoked, declare:

| Field | Values | Role |
|---|---|---|
| `cognitive-commitment-mode` | always `open` | held throughout the invocation; success = the cognizer's map changes by encountering what's there |
| `territory-type-mode` | `artifact` \| `possibility` | artifact = find pre-existing items (codebases, literature); possibility = generate candidates that could exist (solution spaces, design options) |
| `entry-point` | `frontier-first` (default) \| `signal-first` | frontier-first = no prior signal, start broad; signal-first = a specific hunch or question exists, start by probing it |
| `expected` | `~N items` \| `~N items per parent` | **resolution-level**: quantitative anchor for breadth. First-pass: number of items to surface. Staged invocations after first: items per parent. |
| `depth-level` | `D1` \| `D2` (default) \| `D3` \| `D4` | **per-item content richness** (see §2.3) |

**Orthogonality.** `depth-level` and `expected` (resolution-level) are orthogonal dimensions of the input contract. Breadth and per-item richness are conceptually independent. Users can declare any combination.

**Default coupling** (recommended, NOT enforced):

| Resolution (`expected`) | Recommended `depth-level` |
|---|---|
| ~10 items (coarse) | D1–D2 |
| ~50 items (medium) | D2–D3 |
| ~200 items (fine) | D3–D4 |

Users can override (e.g., coarse breadth with rich depth) when context budget allows. This coupling captures the typical case based on LLM context-budget reasoning; empirical refinement is expected.

### 3.2 Two operational modes
```

`new_string`:
```
### 3.1 Two operational modes
```

(Note: this Edit also renumbers §3.2 → §3.1. The runtime spec will use consecutive numbering after deletions; see renumbering decision below.)

### §3.6 Staged execution — DELETE entire subsection

`old_string`:
```
### 3.6 Staged execution (runner-orchestrated)

For territories too large for a single invocation, the runner `/staged-explore` (see `homegrown/runners/staged_explore.md`) orchestrates a for-loop of `/explore` invocations at progressively finer resolutions. A typical pattern:

- First pass: `/explore` with `expected: ~10 items` and `depth-level: D2`. Output: ~10 high-level items.
- Subsequent passes: for each first-pass item worth drilling, runner re-invokes `/explore` signal-first with `expected: ~5–10 items per parent` and `depth-level: D2` or `D3`. Output: child maps referencing parents by ID.

The runner combines child maps with parent maps via the Merge Contract (see §5.5). Each `/explore` invocation remains idempotent and produces a single Transform; the staging is runner-level orchestration.

### 3.7 Resolution progression (within a single invocation)
```

`new_string`:
```
### 3.5 Resolution progression (within a single invocation)
```

Wait — §3.7 is also being deleted. Let me revise: the staged-execution deletion should end at "### 3.7" but §3.7 is also deleted, so the post-staged-execution edit jumps to whatever comes next after §3.7. Let me sequence these correctly. Actually I'll provide ONE combined edit for §3.6 + §3.7 since they're adjacent:

### §3.6 + §3.7 — DELETE both subsections (combined edit)

`old_string`:
```
### 3.6 Staged execution (runner-orchestrated)

For territories too large for a single invocation, the runner `/staged-explore` (see `homegrown/runners/staged_explore.md`) orchestrates a for-loop of `/explore` invocations at progressively finer resolutions. A typical pattern:

- First pass: `/explore` with `expected: ~10 items` and `depth-level: D2`. Output: ~10 high-level items.
- Subsequent passes: for each first-pass item worth drilling, runner re-invokes `/explore` signal-first with `expected: ~5–10 items per parent` and `depth-level: D2` or `D3`. Output: child maps referencing parents by ID.

The runner combines child maps with parent maps via the Merge Contract (see §5.5). Each `/explore` invocation remains idempotent and produces a single Transform; the staging is runner-level orchestration.

### 3.7 Resolution progression (within a single invocation)

A typical /explore invocation follows a resolution progression:

1. **Coarse scan** — what major regions exist? (unweighted)
2. **Signal detection** — which regions matter most given the inquiry's purpose?
3. **Targeted probes** — go deeper on high-importance, low-confidence regions
4. **Fine scan** within probed regions, scan at higher resolution
5. **Repeat** until the frontier stabilizes at a resolution appropriate for the declared `expected` and `depth-level`

**Coarse scan in layered territories.** When the territory has an identifiable contextual/structural surround layer (e.g., project-wide protocols, foundational frames), the Coarse scan step must include items from that surround layer before going deep on inquiry-specific objects. Omitting an identifiable surround layer at Coarse scan is a Premature Depth instance.

### 3.8 Type-aware probing
```

`new_string`:
```
### 3.4 Type-aware probing
```

**Important:** the "Coarse scan in layered territories" rule (currently in §3.7) is a HELPFUL operational constraint per exploration's verdict. Innovation decides to relocate it into §3.4 Canonical cycle as a brief note rather than delete it. **Add this paragraph to §3.4 (Canonical cycle):**

After the existing §3.4 canonical-cycle content, add:

```
**Coarse scan in layered territories.** When the territory has an identifiable contextual/structural surround layer (e.g., project-wide protocols, foundational frames), the Coarse scan step must include items from that surround layer before going deep on inquiry-specific objects. Omitting an identifiable surround layer at Coarse scan is a Premature Depth instance.
```

This preserves the rule (which IS load-bearing) without keeping the §3.7 duplicate-of-§3.4 framing.

### §5.5 Cross-Inquiry Merge Contract — DELETE entire subsection

`old_string` (subsection heading through end of subsection, ending just before the `## 6. Cross-references` heading):
```
### 5.5 Cross-Inquiry Merge Contract (spec-level)

This subsection specifies the contract for merging multiple /explore output maps into a single combined map. Implementation is deferred; the contract exists so manual merging is possible today and future code has a target.

**Operation:** `merge_explore_maps(map_a, map_b) -> merged_map`

**Inputs:** two /explore output maps. Each contains surfaced items with sequential IDs and LLM-generated labels.

**Logic — staging within a single run:**
- Child IDs (`N1.3`) reference parent IDs (`N1`) and preserve the hierarchy in the merged map.
- Confidence levels and frontier states are preserved from each source.

**Logic — sibling inquiries with overlapping territories:**
- Different sequential ID schemes across maps.
- LLM-assisted label-similarity matching identifies probably-overlapping items.
- The merge presents these candidates; a human (or autonomous selector at higher autonomy) confirms before merging.

**Outputs:**
- `merged_map` — combined map with preserved confidence levels, frontier states, and per-source telemetry.
- Conflicts (e.g., same label, different content) flagged for review.

**Operational status:** spec only. Manual merging is possible today (read two outputs; combine by hand or via LLM-assisted merging following this contract). Code-level implementation deferred.

**Node-identity contract:**
- Each surfaced item has a **sequential ID** (`N1`, `N1.3`, `N1.3.2`, …) stable within a single run and across staged invocations of that run.
- Each item has an **LLM-generated descriptive label** for human readability. Labels may drift across invocations; references use IDs for stability.

**Manual merging in v1.** The user reads two /explore output maps and combines by hand or by asking an LLM to perform the merge following this contract's stated logic. The contract is concrete enough for manual use; automated code can be added later when a downstream automation consumer exists.

---

## 6. Cross-references
```

`new_string`:
```
---

```

(The `## 6. Cross-references` heading goes away too because §6.1–§6.4 are all being deleted; the whole §6 vanishes.)

### §6 (entire section: §6.1, §6.2, §6.3, §6.4) — DELETE entire section

After the §5.5 deletion above, §6 will already be partially-removed via that edit's `new_string`. But to be safe — if the implementing agent didn't bundle the §5.5 deletion with the §6 heading removal — here is the §6 deletion as a separate edit:

`old_string`:
```
## 6. Cross-references

### 6.1 Runner taxonomy (current state)

| Runner | Scope | Purpose |
|---|---|---|
| `/MVL` | discipline-loop on a question | Run S → I → C |
| `/MVL+` | discipline-loop on a question | Run E → S → D → I → C |
| `/meta-loop` | inquiry-orchestration | Traverse inquiry-level moves; uses MVL+ as probe |
| `/staged-explore` | discipline-orchestration | Map a territory via for-loop `/explore` invocations at progressive resolutions (see `homegrown/runners/staged_explore.md`) |

`/staged-explore` is the runner for territory mapping at scale (the staged for-loop pattern in §3.6). `/meta-loop` is for inquiry-level traversal — they have distinct scopes: `/staged-explore` is discipline-orchestration; `/meta-loop` is inquiry-orchestration.

### 6.2 Neighbor disciplines (NOT-list anchors)

| Discipline | Spec path | What /explore does NOT do |
|---|---|---|
| sense-making | `homegrown/sense-making/references/sensemaking.md` | conceptual-structure meaning, anchor extraction, perspective integration |
| comprehend | `homegrown/comprehend/references/comprehend.md` | predictive mechanism models, CV depth hierarchy |
| decompose | `homegrown/decompose/references/decompose.md` | coupling-based partitioning, interface specification |
| innovate | `homegrown/innovate/references/innovate.md` | seed-to-novel-idea generation via 7 mechanisms |
| navigation | `homegrown/navigation/` (specialization of /explore over next-move-space) | route enumeration + labeling + adaptive guidance + selection |

### 6.3 Universal anatomy

This spec follows `thinking_disciplines/anatomy_of_disciplines.md`:

- **Spec anatomy** — §1 Identity (Definition / Philosophy), §2 Components, §3 Process, §4 Quality (Failure Modes + Coverage Strategy)
- **Output anatomy** — §5 Output (Transform / Progression / Telemetry / Frontier)

### 6.4 Source findings

- Original framing: `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md`
- End-goal-aware additions: `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md`
- Per-item depth specification: `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md`
- /navigation specialization: `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md`

---

## 7. Calibration-state-flagged items and deferred additions
```

`new_string`:
```
---

```

### §7 — DELETE entire section (all three subsections)

`old_string`:
```
## 7. Calibration-state-flagged items and deferred additions

Several items in this spec are calibration-state-dependent — they capture the current best-known answer with explicit acknowledgment that empirical refinement is expected.

### 7.1 Calibration-state notes

- *The default depth-by-resolution coupling table* (§3.1) — operational reasoning from LLM context-budget observations; not empirically validated. *Refinement trigger:* context-budget observations across staged-explore runs reveal consistent mismatch; refine the table.

- *The labeling-vs-meaning heuristic's edge cases* (§4.4) — domain jargon and contested terminology treated as labeling-at-low-confidence. *Refinement trigger:* 3+ observed runs report ambiguity at edge cases; refine via empirical examples.

- *The staging-boundary regression threshold* (§4.1, mode 10) — `< 2 items` is a starting default. *Refinement trigger:* observed runs reveal the threshold is too lax or too strict.

- *D4 (relevance verdict)* (§2.3) — optional; full specification forward-tied to a planned follow-up inquiry on active verification-probing.

### 7.2 Deferred additions (revival-triggered)

These items are structurally sound but presuppose a project state not yet reached. Each has a specific revival trigger.

- **Typed Input Contract** (excluding the already-actionable `expected` and `depth-level` fields). A typed `_branch.md` schema (territory specification, purpose, prior map, depth target). *Revival:* project introduces a typed `_branch.md` schema OR meta-loop introduces a cross-invocation map handoff requiring typed exchange.
- **Typed Existence-Claim Schema.** Typed record `{territory, region, item, confidence, claim_type ∈ {present, absent, inferred}, optional relevance, optional adjacent_items}` alongside markdown rendering. *Revival:* automation consumer downstream OR project adopts machine-readable inquiry artifacts.
- **Drift-as-Escalation.** Convert open→closed drift (§4.1, mode 7) from failure-mode suppression to a Frontier-output escalation to sense-making. *Revival:* 3+ runs observe drift OR sense-making is wired to consume escalations from /explore.
- **Legend output section.** Explicit semantics of confidence levels and annotation types as a Legend section. *Revival:* downstream consumers report confusion about annotation semantics in 2+ runs.
- **Controlled Vocabulary for claim types.** Typed categories (present / absent / inferred / hypothetical) replacing prose claim descriptions. *Revival:* claim-type ambiguity surfaces as a frontier signal in 2+ runs.
- **Discovery-vs-Revisit telemetry.** Track how often re-invocation finds new items vs re-confirms known ones. *Revival:* cross-invocation re-explore becomes common.
- **Implementation-level Merge Contract.** Code-supported merging instead of manual. *Revival:* meta-loop runs sibling inquiries with overlapping territories OR users report manual merging is unsustainable.
- **Frontmatter mode-declaration.** Add `cognitive-commitment: open` to the SKILL.md frontmatter. *Revival:* project introduces a frontmatter-mode convention OR autonomous mode-selection ships at Level 3+.
- **Paired-discipline cross-reference with /comprehend.** Explicit pairing as open-mode / closed-mode counterparts. *Revival:* /comprehend is being rewritten OR autonomous mode-selection ships requiring discipline pairing.
- **Skill-ification of `/staged-explore`.** Convert the doc-only v1 runner to an invokable skill. *Revival:* manual orchestration becomes unsustainable OR autonomous mode-selection ships at Level 3+.

### 7.3 Research-frontier items

- **Persistent-state /explore.** `/explore` as a continuous state-machine running across the inquiry's lifetime, updating a project-wide map as new items surface. Incompatible with the current `/MVL+` discrete-invocation contract; depends on loop-architecture evolution (multi-head loops, merging loops).
- **`/parallel-loops` runner.** A fifth runner for multi-head loops with cross-comparison. Depends on the project starting multi-head loop capability.
- **Full restructure** of discipline reference files around cognitive operations rather than the spec-anatomy structure. Long-term direction if the project commits to systemic restructuring.
- **Cognitive-operation taxonomy across all 7 disciplines.** Each discipline characterized by open/closed mode and generative/analytic. Deserves its own inquiry.
- **Active verification-probing in /explore.** Should /explore actively probe candidates to confirm irrelevance (not just passively surface positives)? D4 (relevance verdict) is forward-tied to this future inquiry.

---

## 8. Summary table
```

`new_string`:
```
---

```

### §8 — DELETE entire section

`old_string`:
```
## 8. Summary table

| Aspect | Specification |
|---|---|
| **Verb-meaning** | purposive open-mode surfacing of a territory |
| **Unit** | surfaced item (user-facing) / existence claim (typed-schema level) |
| **Transform** | confidence-tagged map with 5 annotation layers |
| **Modes** | artifact + possibility (orthogonal to cognitive-commitment mode, which is always `open`) |
| **Sub-phase** | boundary-discovery (preliminary, conditional on `boundary: unknown`) |
| **Components** | 6 (scan, signal detection, probe, resolution management, frontier tracking, confidence mapping) |
| **Annotation layers** | 5 (existence, confidence, relevance, adjacency, confirmed-absent) |
| **Per-item depth levels** | 5 (D0–D4); D2 default; D0 not acceptable; D5+ excluded |
| **Step 0 declarations** | 5 fields (cognitive-commitment-mode; territory-type-mode; entry-point; expected; depth-level) |
| **Convergence criteria** | 3 (frontier stability + declining discovery rate + bounded gaps) |
| **Failure modes** | 11 identified (6 baseline + 5 introduced through findings) |
| **NOT-list** | 5 entries (meaning / mechanism / partition / novelty / route-selection) |
| **Idempotency** | within a single invocation; cross-invocation = runner's job |
| **Staging** | runner-orchestrated (`/staged-explore`); single-invocation produces one Transform |
| **Boundary heuristic** | inter-rater agreement among naive scanners (self-check thought-experiment) |
| **Output anatomy** | Transform + Progression + Telemetry + Frontier (+ Merge Contract subsection) |

---

---- NOW SOLID INSTRUCTIONS START ----
```

`new_string`:
```
---

---- NOW SOLID INSTRUCTIONS START ----
```

### Renumbering decision

After all deletions: §1 keeps subsections §1.1, §1.2, §1.3, §1.4, §1.6 (no §1.5). §2 keeps all subsections. §3 currently has §3.1 (now declarations table is gone), §3.2 Two operational modes, §3.3 boundary-discovery, §3.4 canonical cycle, §3.5 idempotency, §3.6 (gone), §3.7 (gone), §3.8 type-aware probing. §4 keeps all subsections. §5 keeps §5.1–§5.4 (no §5.5). §6, §7, §8 all gone.

**RENUMBER subsections within each section to consecutive numbering.** This produces:
- §1 with subsections §1.1–§1.5 (was §1.1, §1.2, §1.3, §1.4, §1.6 — drop §1.5 Specialization; renumber §1.6 → §1.5)
- §2 with §2.1, §2.2, §2.3 (unchanged)
- §3 with §3.1 Two operational modes (was §3.2), §3.2 boundary-discovery (was §3.3), §3.3 canonical cycle (was §3.4), §3.4 idempotency (was §3.5), §3.5 Type-aware probing (was §3.8)
- §4 with §4.1–§4.5 (unchanged; mode #10 demoted per P4)
- §5 with §5.1–§5.4 (unchanged; §5.5 removed)
- No §6, §7, §8

Internal cross-references within the spec that point to renumbered sections need updating:
- §1.4 references "§4.4" — keep (§4.4 still exists)
- §2.2 references "§2.1 confidence mapping" — keep
- §2.3 references "§3.1" (for declarations) — UPDATE: this reference becomes stale because §3.1 declarations is deleted. Just remove the "(see §3.1)" parenthetical.
- §3.4 (was §3.4, now §3.3) references end-state — keep
- §4.1 mode #2 references "§3.8" → update to "§3.5" (renumbered)
- §4.1 mode #4 references "§4.2" — keep
- §4.1 mode #6 references "§3.2" — UPDATE to "§3.1" (Two operational modes renumbered)
- §4.4 references "§1.3" — keep
- §4.4 references "§2.3" — keep
- §5.1 references "§2.1 confidence mapping" — keep
- §5.3 references "§2.1" — keep
- §5.3 references "§3.6" (under `/staged-explore`) — UPDATE: this reference becomes stale; the staging-aware-telemetry section in §5.3 also referenced §3.6. The reference can stay because the descriptor "when invoked under `/staged-explore` or similar" is self-explanatory; just delete the "(when invoked under `/staged-explore` or similar)" parenthetical along with related stale cross-refs to staging-execution which is moved to design-history.

(The Critique step will catch any remaining stale references.)

**Renumbering as a single bulk Edit pass after the deletion edits.** Implementing agent should run all deletion edits first; then re-read the file; then a renumbering pass on the headings + a small number of internal cross-reference fixes.

---

## P4 — Surgical edits within kept sections

### §1.3 — REPAIR NOT-list table (drop "Belongs to" column)

`old_string`:
```
### 1.3 NOT-list (five entries; what `/explore` does not extract)

`/explore` deliberately excludes five aspects of items. Each refers to the **conceptual-structure-level operation** of the named neighbor discipline.

| Excluded | Why | Belongs to |
|---|---|---|
| Meaning of items as concepts | conceptual-structure meaning, anchor extraction | sense-making (`homegrown/sense-making/`) |
| Mechanism of how items work | predictive models of internal operation | comprehend (`homegrown/comprehend/`) |
| Partition of items into independent pieces with interfaces | coupling-based decomposition | decompose (`homegrown/decompose/`) |
| Novelty assessment of items | seed-to-tested-novel-idea | innovate (`homegrown/innovate/`) |
| Choice of which item to act on next | route enumeration, labeling, guidance, selection | navigation (`homegrown/navigation/` — which is a specialization of `/explore` over the next-move-space; see §1.5) |
```

`new_string`:
```
### 1.3 NOT-list (five entries; what `/explore` does not extract)

`/explore` deliberately excludes five aspects of items. Each refers to the **conceptual-structure-level operation** of a neighbor cognitive operation.

| Excluded | Why |
|---|---|
| Meaning of items as concepts | conceptual-structure meaning, anchor extraction |
| Mechanism of how items work | predictive models of internal operation |
| Partition of items into independent pieces with interfaces | coupling-based decomposition |
| Novelty assessment of items | seed-to-tested-novel-idea generation |
| Choice of which item to act on next | route enumeration, labeling, guidance, selection |
```

### §2.3 — REPAIR (remove Default coupling table + intro paragraph)

`old_string`:
```
**Default coupling** (recommended, NOT enforced):

| Resolution (`expected`) | Recommended `depth-level` |
|---|---|
| ~10 items (coarse) | D1–D2 |
| ~50 items (medium) | D2–D3 |
| ~200 items (fine) | D3–D4 |

Users can override (e.g., coarse breadth with rich depth) when context budget allows. This coupling captures the typical case based on LLM context-budget reasoning; empirical refinement is expected.

```

`new_string`:
```

```

(This deletes just the Default-coupling table block. The surrounding D0–D4 vocabulary table + "Default minimum: D2" guidance + per-invocation-uniformity paragraph stay.)

Note: this edit's `old_string` appears in two places in the current spec (one in §2.3 and one in §3.1). The §3.1 occurrence is already targeted for deletion via P3 (the entire §3.1 subsection). If P3's deletion runs first, the §2.3 occurrence is the only remaining one and this Edit succeeds. If order is reversed, the implementing agent should use `replace_all: false` and provide additional surrounding context to disambiguate.

### §4.1 — REPAIR failure mode #10 (REMOVE entirely)

Decision: REMOVE rather than demote. The mode is self-flagged speculative + runner-detected + has a starting-default threshold without empirical validation. 10 modes is a cleaner runtime list than 11 modes with one carrying multi-caveat. The removed mode is preserved in `_design_history.md` Calibration-state notes (see P1).

`old_string`:
```
**10. Staging-boundary regression** (speculative; calibration-state-dependent). A prior-pass surfaced item has no explorable sub-structure when next-pass /explore is run on it. *Recognition signal:* next-pass /explore on a prior-pass item produces fewer than 2 surfaced items at the requested resolution. *Corrective:* re-classify the prior-pass item as **atomic-at-this-resolution**; do not retry at the same resolution; optionally retry at coarser resolution to confirm. *Detection placement:* the runner (`/staged-explore`) detects this from invocation telemetry; /explore names the failure mode but does not detect it. The threshold (< 2 items) is a starting default for empirical refinement.

**11. Inadequate per-item content depth.** Items surfaced at D0 (bare identifier) without sufficient labeling content force downstream re-discovery and defeat the upstream-precondition relationship. *Prevention:* enforce the D2 default minimum (§2.3); D1 only when explicitly declared at coarse resolution.
```

`new_string`:
```
**10. Inadequate per-item content depth.** Items surfaced at D0 (bare identifier) without sufficient labeling content force downstream re-discovery and defeat the upstream-precondition relationship. *Prevention:* enforce the D2 default minimum (§2.3); D1 only when explicitly declared at coarse resolution.
```

(This renumbers the old mode #11 to #10. The failure-modes list now has 10 modes.)

---

## P5 — Iteration #10 finding template

The CONCLUDE phase compiles this template into the final `finding.md`. The template includes the substantive content; CONCLUDE adjusts cross-references and formatting per its protocol.

```markdown
---
status: active
continues-from: devdocs/inquiries/2026-05-14_17-00__ab_test_rerun_under_old_explore_spec/finding.md
related:
  - devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md
  - devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md
  - devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/finding.md
  - devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md
  - devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
verdict: BLOAT identified beyond chain E2 scope; REPAIR pattern is RELOCATE-NOT-DELETE
---

# Finding: /explore — What Does It Actually Need? (Bloat Reframe)

## Question

The prior chain (`2026-05-14_16-00` through `2026-05-14_17-00`) concluded with an E2 selective-revert REPAIR targeting three project-coupling elements (A1 Sources subsection, A2 Neighbor-disciplines table, A3 Specialization-pattern coupling). The user pushed back: "why Neighbor-disciplines is needed anyway? ... you are not understanding the full bloat for some reason."

The structurally new question this iteration asks: rather than "which catalogued diff items to revert," **what does `/explore` actually need in its references file to do its job — element by element, regardless of diff history?**

## Finding Summary

- **The chain was under-counting.** Applying a from-scratch necessity frame (does this element fire at /explore's runtime execution?) surfaces ~12–16 BLOAT items in the current `/explore` references file, versus the chain's E2 scope of 3 items. The user's "full bloat" signal was empirically correct on structural grounds.

- **The Neighbor-disciplines table (§6.2) is BLOAT in full** — not just in its project-paths column. The table's "What /explore does NOT do" column duplicates §1.3 NOT-list (different framing, same information); the "Spec path" column is project-coupling; the framing "Neighbor disciplines" itself presupposes a multi-discipline project context that /explore does not consult at runtime. The whole table can be removed; the §1.3 NOT-list (without project paths) carries the scope-anchoring value alone.

- **BLOAT spans form and substance, driven by one underlying force.** Form bloat (tables, declarations, enumerations) and substance bloat (project-coupling, provenance, institutional-memory in runtime spec) both derive primarily from inheriting the `thinking_disciplines/anatomy_of_disciplines.md` template, with a smaller fraction from local additions. One repair pattern addresses both: write the spec for the operation, not for the template; keep institutional memory in a separate artifact.

- **The REPAIR is RELOCATE-NOT-DELETE.** Institutional-memory content (Sources subsection, §7 Calibration-state items + Deferred additions + Research-frontier items, §6.4 Source findings) moves to a new file `enes/discipline_design_history/for_explore.md`. Pure protocol-overhead content (Step 0 declarations table, Neighbor-disciplines table, Staged-execution subsection, Resolution-progression duplicate of §3.4, Cross-Inquiry Merge Contract subsection, Runner taxonomy, Universal anatomy, Summary table, /navigation-specific paragraph, project-paths column, Anatomy reference paragraph) is deleted in place. The lean runtime spec (~7–9 pages from ~15–20 pages) keeps the actual operation: definition, NOT-list, vocabulary, components, annotation layers, depth-level vocabulary, modes, boundary-discovery, canonical cycle, idempotency, type-aware probing, 10 failure modes, coverage criteria, labeling-vs-meaning heuristic, output anatomy.

- **BLOAT-confirmed is Level-1.5 evidence.** The chain's prior calibration ladder (iteration #9) had Level 1 form-confirmed (empirical-output-form), Level 2 substance-inferred (not measured), Level 3 mistake-prevention-out-of-scope. This iteration's BLOAT-confirmed verdicts use structural reasoning ("element does not fire at runtime") — stronger than form-observation but weaker than empirical substance-measurement. It does not upgrade iteration #9's Level 2; it complements with a different evidence type.

- **The cost-asymmetry argument is the load-bearing structural point.** The chain's "no per-element evidence of harm → keep" default was over-conservative for `/explore`'s runtime-read context, where false-keep costs ongoing context per invocation and false-remove costs at most one re-add. Future spec calibration should use the cost-asymmetry-appropriate default.

- **Honest 10-MVL+ cost.** This iteration's load-bearing work was carried by Exploration (the from-scratch frame) and Sensemaking (the REPAIR-shape adjudication). The remaining disciplines produced concrete artifacts (decomposition partitioned the work; innovation generated the edits; critique caught issues) but added incrementally less compared to a hypothetical truncate-after-sensemaking + direct-edit alternative. The pipeline ran continuously per the user's /MVL+ commitment.

- **Pattern-level research frontier.** The from-scratch necessity frame is a generalizable BLOAT-audit operation. It plausibly applies to `/innovate` (iteration #7 already repaired B3/B4/B5 along similar lines), `/sense-making`, `/comprehend`, `/decompose`, `/navigation`, and any future discipline reference file. Naming this as a research frontier rather than pursuing it inside iteration #10 keeps the current iteration scoped.

## Finding

### Why this question exists

The related-topic chain (9 prior iterations) had progressively diagnosed and repaired sources of project-coupling in discipline references. Iteration #7 repaired `/innovate`. Iteration #8 catalogued 12 candidate items in `/explore` and proposed an E2 selective-revert REPAIR targeting 3 of them. Iteration #9 empirically confirmed the form-level effect via A/B test under the OLD `/explore` spec.

The user then asked a question the chain's frame couldn't fully answer: **why does `/explore` need a Neighbor-disciplines cross-reference table at all?** The chain's diff-catalogue frame could only adjudicate "revert the changes since OLD"; it couldn't see bloat in elements that were either unchanged or changed in ways the catalogue had marked KEEP/flagged. The user's signal — "you are not understanding the full bloat for some reason" — pointed at exactly this blind spot.

This iteration's reframe: walk the current spec element by element under a from-scratch necessity test ("does this fire at runtime?"). The reframe produces a substantially wider BLOAT set than the chain's E2.

### What the from-scratch frame found

Across the current `/explore` references file's 8 numbered sections and approximately 30 distinct subsections / tables / blocks, the from-scratch frame classified each as NECESSARY (load-bearing for runtime), HELPFUL (useful but not strictly required), or BLOAT (doesn't fire at runtime).

The BLOAT verdicts fall into three rough categories:

**Institutional memory in the runtime spec.** Provenance (the Sources subsection in the Loading note), design-history content (§7 Calibration-state-flagged items + Deferred additions + Research-frontier items), and source-finding paths (§6.4) have genuine value — but for spec-authoring and project-history, not for runtime execution. Every `/explore` invocation pays the context cost of reading them without consulting them.

**Protocol-overhead enumerations.** Step 0 declarations (a 5-field table where 3 fields are constants or trivially inferable), the Summary table (a 16-row recap), the Resolution-progression subsection (a 5-step list duplicating the canonical-cycle content), the staging-execution subsection (about a separate runner's behavior). These produce mid-execution scaffolding output without changing what `/explore` does.

**Project-coupling references.** The Neighbor-disciplines table with project-internal paths, the §6.1 Runner taxonomy listing the project's runners, the §6.3 Universal anatomy cross-reference to the spec-authoring template, the /navigation-specific paragraph in §1.5. These tie `/explore`'s runtime spec to specific other project artifacts that `/explore` does not consult during execution.

### The REPAIR — RELOCATE-NOT-DELETE

Two operations on disk:

**Create `enes/discipline_design_history/for_explore.md`** with the institutional-memory content. The header makes clear this is design history; the runtime spec is at `references/explore.md` and is the file the discipline loads at Step 0. Sources, calibration-state notes, deferred additions (with their revival triggers), research-frontier items, and source findings all move to this new file. No information is lost; it's relocated to where it costs nothing at runtime.

**Edit `homegrown/explore/references/explore.md`** to delete the bloat content in place. The Loading note keeps the "this file is loaded by..." sentence and gains a one-line cross-reference to `_design_history.md`. The body deletes §1.5 (specialization pattern + /navigation paragraph), §3.1 (Step 0 declarations), §3.6 (Staged execution), §3.7 (Resolution progression — content moved into §3.4 canonical-cycle as a brief note), §5.5 (Cross-Inquiry Merge Contract), §6 entirely (Cross-references with all four subsections), §7 entirely (Calibration-state + Deferred + Research-frontier), §8 (Summary table). Within kept sections: §1.3 NOT-list table drops the "Belongs to" project-paths column; §2.3 drops the Default-coupling table; §4.1 removes the speculative failure mode #10 (staging-boundary regression).

After the edits, the runtime spec has ~7–9 pages of content focused on the operation: what /explore is, what it isn't, its core components, its process cycle, its failure modes (10), its output format. The institutional memory remains accessible at `_design_history.md` for future spec-authoring work.

### Why this REPAIR shape over the alternatives

Two alternative shapes were considered and not chosen.

**In-place wider REPAIR (extend E2 from 3 to 12–16 elements without relocation).** Tempting because it preserves the chain's selective-revert pattern at bigger scope. Rejected because it leaves the spec's protocol form intact while patching content; the underlying force (template-inheritance) reasserts on the next iteration. Also, several items (the Sources subsection, §7 deferred additions) have institutional value that would be lost via pure deletion.

**Full reset toward OLD with selective add-back.** Tempting because the user's earlier framing pointed toward OLD. Rejected because (a) the user's deeper preference is for lighter form rather than for OLD-as-base specifically; (b) the add-back work (preserving the genuinely-HELPFUL new content like the D0–D4 vocabulary, the new failure modes around drift and depth, the type-aware probing rule, the boundary-discovery clarification) is non-trivial and would risk losing items during per-element review; (c) RELOCATE-NOT-DELETE delivers the lighter runtime spec with operationally simpler edits from the current base. Reset-toward-OLD remains available as an escalation option if the relocate pattern fails to deliver enough cleanup or if the template-inheritance force keeps producing new bloat in future iterations.

### The pattern-level finding

The from-scratch necessity frame is a generalizable operation. The specific test ("does this element fire at runtime?") applies to any discipline-reference file in the project. The cost-asymmetry argument (false-keep > false-remove for runtime-read specs) is structural, not specific to `/explore`. Iteration #7 already applied a related pattern to `/innovate` (B3/B4/B5 scope-fidelity caveat). The other disciplines (`/sense-making`, `/comprehend`, `/decompose`, `/navigation`) plausibly carry similar bloat patterns from template-inheritance.

A project-wide spec-hygiene pass applying the from-scratch frame to all disciplines is a research-frontier item — not blocking this iteration's REPAIR, but worth naming for future revival.

## Next Actions

### MUST

- **Apply the REPAIR edits** to `homegrown/explore/references/explore.md` and create `enes/discipline_design_history/for_explore.md`.
  - **Who:** the user, or an assistant invoked specifically to apply the edits (the iteration #10 `innovation.md` contains the concrete `old_string`/`new_string` pairs for each edit).
  - **Gate:** condition-bound — apply when the user is ready to act. The REPAIR is reversible via git; nothing blocks immediate application.
  - **Why:** the lean runtime spec reduces context cost on every `/explore` invocation while preserving institutional memory in `_design_history.md`.

- **Renumber subsections** within `references/explore.md` after deletions; update internal cross-references (a small number of stale `§X.Y` references after renumbering — see `innovation.md` Renumbering decision).
  - **Who:** same as above.
  - **Gate:** sequential to the deletion edits.
  - **Why:** cosmetic consistency; avoids gaps in subsection numbering that would confuse future readers.

### COULD

- **Test the lean spec reversibly via the A/B-test inquiry protocol** (`devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md`) before considering further bloat-audit work.
  - **Who:** the user.
  - **Gate:** if the user wants empirical confirmation that the lean spec produces equivalent or better cognitive operation. Optional; not blocking.

### DEFERRED

- **Apply the from-scratch BLOAT-audit frame to other discipline references** (`/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation`).
  - **Gate:** observable — if any of those disciplines exhibits similar bloat signals during use, OR proactively as a project-wide spec-hygiene pass.
  - **Why (if revived):** plausibly produces similar BLOAT findings; would reduce context cost across the discipline set.

## Reasoning

### What was killed

**Option (i) — In-place wider REPAIR.** Tempting as a continuation of the chain's selective-revert pattern. Killed on the structural ground that it leaves the spec's form intact while patching content, allowing template-inheritance to reassert. Also loses institutional value via pure deletion of items that have spec-authoring use.

**Option (iii) — Reset toward OLD with selective add-back.** Tempting given the user's earlier framing. Killed (as primary) because the user's preference is for lighter form not OLD-as-base specifically, and because RELOCATE-NOT-DELETE delivers the same lightness with simpler edits and lower risk of losing genuinely-HELPFUL new content. Preserved as escalation option.

**Upgrade iteration #9's Level 2 (substance-inferred).** Tempting because BLOAT-confirmed reasoning ("doesn't fire at runtime") feels substance-like. Killed because BLOAT-confirmed is LLM structural reasoning, not empirical substance measurement. It complements iteration #9's calibration at a different evidence level (Level 1.5), it does not upgrade it.

**The chain's "no harm → keep" default for /explore's runtime context.** Tempting to preserve as a conservative principle. Killed by the cost-asymmetry argument: for runtime-read specs where every invocation pays the context cost, false-keep is structurally more expensive than false-remove.

### Why the form-vs-substance distinction collapses to one axis

The exploration distinguished form bloat (tables, enumerations, declarations) from substance bloat (project-coupling, provenance). They appeared as two surface manifestations. Under sensemaking's perspective check, both turned out to be driven primarily by one underlying force: inheriting the `thinking_disciplines/anatomy_of_disciplines.md` template demands certain sections (which produces form bloat) and bakes in project-coupling assumptions (which produces substance bloat). A smaller fraction of substance bloat comes from local in-spec additions (e.g., the Neighbor-disciplines table is a local addition, not template-required). For repair purposes the distinction is functionally one axis: address the template-inheritance + per-element review for local additions.

## Open Questions

### Monitoring

- After the REPAIR is applied, watch `/explore` invocations across the next several inquiries. Does the lean runtime spec produce equivalent-or-better Exploration outputs? Does the bookkeeping-to-core-operation ratio shift in the predicted direction? Informal monitoring; not a controlled study.

- After the REPAIR is applied, watch whether new bloat creeps in during future spec edits. The relocate pattern is preserved as a routing convention; future institutional-memory additions should go to `_design_history.md` rather than back into `references/explore.md`.

### Research Frontiers

- **From-scratch BLOAT audit applied to other disciplines.** The frame is generalizable; the other discipline references (`/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation`) plausibly carry similar bloat patterns from template-inheritance. A project-wide spec-hygiene pass would apply the same audit. Out of scope for this iteration; named for future revival when a project decision benefits from the audit OR when one of the listed disciplines shows similar bloat signals.

- **Empirical-substance test for the lean runtime spec.** The chain's Level 2 calibration (does lighter form produce better cognitive operation?) remains inferred-not-confirmed. A multi-run study under the lean spec versus the current spec, across multiple investigation topics, would upgrade Level 2 toward empirical. Out of scope for this iteration; named because the A/B-test inquiry protocol (`2026-05-14_16-41`) provides the infrastructure to perform this test reversibly.

### Refinement Triggers

- **Iteration #11+ threshold.** Requires structurally NEW questions (not refinements of this iteration's BLOAT-confirmed scope or the chain's earlier E2). Examples of what would qualify: empirical mistake-rate measurement under the lean spec; from-scratch BLOAT audit of another discipline; a runtime issue caused by something the REPAIR deleted that turns out to have been load-bearing.

- **RELOCATE pattern failure trigger.** If the lean spec doesn't deliver enough cleanup (e.g., new bloat creeps back; or the institutional-memory file becomes a dumping ground for new content that should be deleted not relocated), the chain's escalation option is reset-toward-OLD with selective add-back. The relocate pattern's success criterion: across the next several spec iterations, total bloat stays bounded.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

 REPAIR the Neighbor-disciplines table to drop project paths (A2)

why Neighbor-disciplines is needed anyway?  why woudl explore need to know this ? 

i think you are not understanding the full bloat for some reason.
```

</details>
```

---

## Phase 3 — Test (5-Test Cycle)

Applied to the unified artifact (P1–P5 as one REPAIR specification):

| Test | Verdict |
|---|---|
| **Novelty** | YES on the RELOCATE pattern (new to chain) + the from-scratch frame as generalizable operation. The per-element edits are routine; the structural shape (relocate-not-delete) is novel. |
| **Scrutiny survival** | YES. Strongest objection: "wider deletion loses A4–A12 useful content the chain explicitly kept as flagged." Defense: RELOCATE-NOT-DELETE preserves the content via `_design_history.md`; nothing is lost, only relocated. Holds. |
| **Fertility** | YES — the pattern-level research frontier (apply audit to other disciplines) opens significant downstream territory. |
| **Actionability** | YES — Innovation produced concrete `old_string`/`new_string` Edit pairs and the full `_design_history.md` content. Implementing agent can execute the REPAIR mechanically. |
| **Mechanism independence** | YES — Domain Transfer (treat /explore spec as a discipline-spec instance of a template-inheritance pattern) would produce the same RELOCATE-NOT-DELETE recommendation. Inversion (what if the bloat IS the discipline?) confirms not — the bloat is identifiable and removable without affecting the discipline's operation. |

### Scope-fidelity self-check on the innovation output

- ✓ No Sources subsection listing project-finding paths in the finding template (P5)
- ✓ No Step 0 declarations table for the finding
- ✓ No Universal anatomy reference
- ✓ No Summary table
- ✓ The finding template does not enumerate 11 failure modes; only the substantive content present
- ✓ Lean form: prose-with-headers, not nested-tables-with-cross-references; the few tables (NOT-list, Edit-operation specifications) are load-bearing rather than scaffolding
- ✓ The `_design_history.md` content IS enumerative (lists of deferred items + revival triggers) but that is appropriate for a design-history artifact — institutional memory IS lists of historical items

### Project-specific risk dimensions

| Dimension | Verdict |
|---|---|
| **duplicate-derivable-state** | PASS — innovation produces the edits, not a restated catalogue. The exploration's per-element BLOAT verdicts stay in exploration.md. |
| **operation-parsimony** | PASS — 5 pieces; one focused variant each; one Generator + one Framer minimum coverage. |
| **phase-fit** | PASS — innovation produces concrete text for sensemaking's committed REPAIR shape; doesn't re-adjudicate. |
| **explicit-culture-fit** | PASS — RELOCATE-NOT-DELETE is novel-to-chain; output form respects the inquiry's own findings (lean, no protocol-overhead reproduction). |

---

## Phase 3.5 — Assembly Check

The 5 pieces assemble into a coherent REPAIR specification. Emergent properties:

1. **The RELOCATE pattern is preserved as institutional routing.** P1 creates the destination; P2 adds the cross-reference; P3+P4 delete the relocated content (and pure bloat) from the runtime spec. Future spec edits can follow the same routing (institutional content → `_design_history.md`; runtime content → `references/explore.md`).

2. **Content-addressed editing handles same-file line-number drift.** Every Edit in P2/P3/P4 uses unique surrounding context as `old_string`; no edit depends on line numbers. The implementing agent can execute the edits in any order within the same file without interference.

3. **The finding template (P5) records what was decided AND signals the pattern-level frontier.** Without P5, the REPAIR is a one-off cleanup; with P5, it becomes the first instance of a generalizable BLOAT-audit operation. The artifact preserves the learning beyond /explore.

### Axis coverage check

Orthogonal axes of the underlying problem:
- **Edit-target axis** (runtime spec / new file) — addressed (P1 new file; P2–P4 runtime spec)
- **Operation-type axis** (relocate / delete / surgical-repair) — addressed (P1 + P2 partial = relocate; P3 = delete; P4 = surgical)
- **Artifact axis** (file content / edit operations / finding record) — addressed (P1 = content; P2–P4 = ops; P5 = record)

All axes covered.

---

## Phase 4 — Telemetry

- Generators applied: **1 / 4** (Combination)
- Framers applied: **1 / 3** (Constraint Manipulation)
- Convergence: **N/A** (single-variant content-generation per parsimony directive; not multi-mechanism idea-space exploration)
- Survivors tested: **5 / 5** tests passed for the unified REPAIR specification
- Failure modes observed: **none**
  - Premature evaluation? No — tests applied after generation.
  - Single-mechanism trap? Acknowledged-and-justified — parsimony directive explicit; multi-mechanism sweep would re-explore territory exploration + sensemaking already settled.
  - Early frame lock? No — the frame (RELOCATE-NOT-DELETE) was committed by sensemaking; innovation generates content within that frame.
  - Innovation without grounding? No — every edit is grounded in current-spec text + sensemaking's REPAIR shape decision.
  - Mechanism exhaustion? No — minimum coverage met; further mechanisms intentionally not applied.
  - Survival bias? No — the killed alternatives (in-place wider, reset-toward-OLD) are explicitly named in the finding's Reasoning section, not avoided.

**Overall: PROCEED to Critique.**

---

## Final Summary

5 pieces generated with concrete final text:
- **P1:** Full `_design_history.md` content (institutional-memory artifact)
- **P2:** Loading-note `old_string`/`new_string` edit (Sources + Anatomy reference replaced by one-line cross-reference)
- **P3:** 9 body-deletion Edits (§1.5, §3.1, §3.6+§3.7, §5.5, §6, §7, §8) with content-addressed `old_string`s; the layered-territories rule from §3.7 relocated into §3.4 canonical-cycle as a brief note
- **P4:** 3 surgical Edits (§1.3 table column drop; §2.3 Default-coupling removal; §4.1 mode #10 removal)
- **P5:** Iteration #10 finding template with frontmatter, summary, body, next actions, reasoning, open questions, source input — lean form, no bloat patterns reproduced

REPAIR specification is complete and executable. Renumbering decision documented (consecutive renumbering within each section after deletions; small number of internal cross-reference updates).

**Output: PROCEED to Critique.**
