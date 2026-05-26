# Innovation — shape variants and specific phrasings for the end-goal additions

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/_branch.md`

Prior outputs consumed: this inquiry's `exploration.md`, `sensemaking.md`, `decomposition.md`. Decomposition's frontier asked innovation to: (a) generate shape variants per piece (P-α, P-β, P-δ); (b) generate candidate phrasings for specific spec entries.

---

## Seed

How should each of the 4 pieces (P-α /explore spec additions; P-β /staged-explore runner doc; P-δ nav_north_star.md decision; P-ε finding metadata) be EXPRESSED concretely? Specifically: what shape variants exist; what specific phrasings should be used for the resolution-level field, staging telemetry, staging-boundary regression failure mode, and merge contract specification?

**Seed type:** Question + Constraint. The constraints are: preserve iter-2 commitments; honor "manual-trigger v1 is acceptable"; cognitively clear; operationally runnable.

**Direction (intuition):** the user has historically asked for skeletons that are cognitively clear AND actionable. They've also explicitly accepted v1 manual triggering. The shape variants should range from MINIMUM (ship today) to MAXIMAL (richer; defer); the user can pick.

---

## Phase 2 — Generate (Seven Mechanisms × 3 Variations Each)

### 1. Lens Shifting (Framer)

- **Generic:** Under what conditions is the MAXIMUM shape right per piece? When the project is preparing for autonomous orchestration (Level 3+). Richer specs are easier for autonomous systems to consume. → Argues for maximum for future-proofing.
- **Focused:** Under what conditions is the MINIMUM shape right per piece? When the user wants to ship today and refine based on practice (per "manual-trigger v1 is acceptable"). → Argues for minimum for now.
- **Contrarian:** Under what conditions is NO ADDITION right at all? When iter-2 is sufficient and the staged-explore pattern can be inferred from existing framework + manual user orchestration. → Yields **α-NONE candidate**.

### 2. Combination (Generator)

- **Generic:** Combine P-α's resolution-level field + P-β's runner doc → the runner doc INCLUDES example resolution-level values for each pass. Reinforces concrete examples in P-β.
- **Focused:** Combine staging telemetry + merge contract → telemetry fields used by merge operation to detect overlapping items. Adds "merge support" purpose to staging telemetry.
- **Contrarian:** Combine /staged-explore runner + /MVL+ existing pattern → the runner doc adopts /MVL+'s structure (Path vocabulary; Discipline Workspace Invariant analog; Pipeline section) as scaffold. → Yields **β-MVL-STYLE candidate**.

### 3. Inversion (Framer)

- **Level 1 (component-level):** Assumption: the runner doc lives in `homegrown/runners/`. Invert: lives in `homegrown/explore/runners/` (subordinate to /explore). → Stronger ownership signal; may be appropriate since /staged-explore only orchestrates /explore.
- **Level 2 (system-level):** Assumption: /staged-explore is a separate runner. Invert: /staged-explore is /explore at runner-level — same name, different invocation. → Collapses discipline/runner distinction. → KILL candidate.
- **Level 3 (root-cause-level):** Assumption: the runner doc documents a pattern; users follow it. Invert: the runner doc TEACHES the pattern via worked example. → Yields **β-EXAMPLE-LED candidate**.

### 4. Constraint Manipulation (Framer)

- **Generic (add "max 200 lines for runner doc"):** Forces minimum/standard shape. Pushes toward **β-MIN-DOC** (one-page guide).
- **Focused (remove "single-file runner"):** Split into runner-pattern doc + worked-example doc. → Yields **β-PAIRED-DOC candidate**.
- **Contrarian (add "must be machine-readable"):** Runner doc becomes YAML-like with explicit steps. → Yields **β-MACHINE-READABLE candidate**.

### 5. Absence Recognition (Generator)

- **Generic gap:** Sensemaking didn't specify the runner doc's exact TITLE and FILE SLUG. → Surface decision: `homegrown/runners/staged_explore.md` (kebab/snake style matching project conventions; "staged_explore" reads naturally).
- **Focused gap:** Sensemaking said "re-classify as atomic-at-this-resolution" for staging-boundary regression but didn't specify the EXACT corrective phrasing or threshold for recognition. → Innovation: produce concrete corrective language + threshold.
- **Redesign-level gap:** Should staged-explore be a discipline or stay a runner? Innovation reaffirms RUNNER framing (it orchestrates a single discipline's invocations; that's runner-level, per project's runner pattern).

### 6. Domain Transfer (Generator)

- **Generic (Cartography):** Real cartographers do reconnaissance survey → topographic survey → thematic mapping as progressively-refined passes. Same pattern as staged-explore. Use cartographic vocabulary in the doc (legend, scale, projection) to ground readers. → Reinforces /explore's existing cartographic metaphor.
- **Focused (CS / iterative algorithms):** BFS builds a tree level-by-level. The staged-explore for-loop is BFS at the runner level. Frame the runner pattern as "iterative breadth-first exploration at increasing resolution." → Concrete framing for technical audiences.
- **Contrarian (Archaeology):** Archaeologists excavate in stratified layers; each layer is one "round" of careful observation. Layered excavation as metaphor. → Evocative but maybe too metaphorical for the discipline-doc level; **fold optional into β-STD**.

### 7. Extrapolation (Generator)

- **Generic (skill-ification path):** In 6 months, the runner doc may need skill-ification. Design the doc with a clear path: explicit steps mapping to Skill tool invocation. → Refinement to β-STD.
- **Focused (Level 3+ autonomy):** At Level 3+, the runner becomes autonomous. Doc should name autonomous-termination criteria upfront. → Refinement to β-STD.
- **Contrarian (long-term merger):** At Level 4+, /explore + /staged-explore might merge into one autonomous discipline (per iter-2's SK-PERSISTENT future state). The current design must not block this. → Constraint check: nothing in current design blocks future merger; PASS.

---

## Phase 3 — Test

### Candidate consolidation

**P-α shape variants:**
- α-MIN: each addition is a 1-paragraph entry in existing sections; minimal disruption
- α-STD: each addition is a 1-section addition with structured fields and a one-line cross-reference to the staged-explore runner doc
- α-MAX: each addition becomes its own subsection with worked examples and cross-references; richer for future-automation consumers
- α-NONE: no spec additions; users run /explore manually at different resolutions following a separate doc

**P-β shape variants:**
- β-MIN-DOC: single-page runner-pattern guide (≤ 200 lines)
- β-STD: 5-section spec doc (Identity / For-loop pattern / Resolution-progression / Termination / Taxonomy-boundary)
- β-EXAMPLE-LED: pattern explained primarily via the nav_north_star.md scenario (10 → 50–100 → ~200 nodes); abstract details secondary
- β-STD+EXAMPLE: combination — 5-section spec with a worked example threaded through
- β-MVL-STYLE: structured like /MVL+ (Path vocabulary; Discipline Workspace Invariant analog; Pipeline section); fully scaffolded
- β-PAIRED-DOC: runner-pattern doc + separate worked-example doc
- β-MACHINE-READABLE: YAML-like structured runner spec

**P-δ shape variants:**
- δ-MIN: one-line vocabulary note at top of nav_north_star.md
- δ-STD: preface paragraph + cross-references to /explore and /staged-explore runner doc
- δ-MAX: full migration log + structured note documenting which content moved where

**Specific phrasings (sub-decisions within α):**
- Resolution-level field
- Staging telemetry field names
- Staging-boundary regression recognition signal
- Merge contract spec shape

### 5-test cycle on each candidate

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech Indep | Disposition |
|---|---|---|---|---|---|---|
| **α-MIN** | LOW | MEDIUM (works but thin; loses end-goal-relevant articulation) | LOW | HIGH | HIGH | SURVIVE — viable minimum |
| **α-STD** | MEDIUM | HIGH (each addition gets structure; cross-references make connections explicit) | MEDIUM-HIGH | HIGH | HIGH | **SURVIVE — ACTIONABLE recommended default** |
| **α-MAX** | MEDIUM-HIGH | HIGH (examples illuminate) | HIGH (richer for future) | MEDIUM (more work) | HIGH | **SURVIVE — DEFERRED-with-revival** (revival: automation consumer or skill-ification triggers richer spec demand) |
| **α-NONE** | LOW | LOW (loses inquiry's reasoning; doesn't honor the end-goal lens) | LOW | HIGH | LOW (only lens-shifting-contrarian) | **KILL** — doesn't honor inquiry's reasoning |
| **β-MIN-DOC** | LOW | MEDIUM (sufficient for v1; thin for future) | MEDIUM | HIGH | HIGH | SURVIVE — viable v1 |
| **β-STD** | MEDIUM | HIGH (full structure; clear sections) | MEDIUM-HIGH | HIGH | HIGH | SURVIVE — recommended default |
| **β-EXAMPLE-LED** | MEDIUM | HIGH (concrete examples ground abstract pattern) | HIGH (pedagogically clearer) | HIGH | MEDIUM-HIGH | SURVIVE — combine with β-STD as β-STD+EXAMPLE |
| **β-STD+EXAMPLE** | MEDIUM-HIGH | HIGH | HIGH | HIGH | HIGH (3+ mechanisms converge) | **SURVIVE — ACTIONABLE recommended assembly** |
| **β-MVL-STYLE** | MEDIUM | MEDIUM (overkill for v1 doc; not all /MVL+ scaffolding applies to a single-discipline runner) | MEDIUM (consistency with project) | MEDIUM (more text) | MEDIUM | DEFERRED — revival when skill-ification arrives |
| **β-PAIRED-DOC** | MEDIUM | MEDIUM (two-file split is overhead for v1) | MEDIUM | MEDIUM (managing 2 docs) | LOW | REFINE → fold examples into β-STD+EXAMPLE |
| **β-MACHINE-READABLE** | HIGH | MEDIUM (no current machine reader) | HIGH (paves for skill-ification) | LOW (no consumer today) | LOW (only constraint-contrarian) | **KILL for v1**; revisit at skill-ification |
| **δ-MIN** | LOW | HIGH (one-line is clear; minimum-edit honors the user's "preserve" framing) | LOW | HIGH | HIGH | **SURVIVE — ACTIONABLE recommended** |
| **δ-STD** | LOW | HIGH (paragraph adds context) | MEDIUM | HIGH | HIGH | SURVIVE — alternative if MIN feels too thin |
| **δ-MAX** | MEDIUM | MEDIUM (migration log is detailed but adds maintenance) | MEDIUM | MEDIUM | LOW | **REFINE → fold useful content into δ-STD's preface** if needed |

### Specific phrasings — candidates and verdicts

**Resolution-level field (in α):**

| Phrasing | Verdict |
|---|---|
| "Resolution: coarse / medium / fine" (typed enum) | KILL — too coarse-grained; doesn't match territory variance |
| "Expected: ~N surfaced items" (quantitative anchor) | SURVIVE — recommended (sensemaking already committed to quantitative anchor) |
| "Depth target: ~N items" (depth semantics) | REFINE — "depth" overloads with /comprehend's CV depth; use "expected" instead |
| "Branching factor: ~N per parent" (for non-first passes) | SURVIVE — alternate phrasing for staged invocations after the first |

**Recommended:** Step 0 declaration includes `expected: ~N items` for first-pass; `expected: ~N items per parent` for staged invocations.

**Staging telemetry field names (in α):**

| Phrasing | Verdict |
|---|---|
| `items_surfaced_count` | SURVIVE — primary field; count of items this invocation surfaced |
| `parent_pass_anchor` | SURVIVE — for staged invocations: which prior-pass item this drilling into |
| `branching_factor` | SURVIVE — for non-first-pass: ratio of items-this-pass to items-implied-by-parent |
| `resolution_evidence` | SURVIVE — qualitative note on the depth achieved |
| `stage_index` | SURVIVE — which round of staging (1, 2, 3, ...) |
| `cumulative_node_count` | SURVIVE for runner-level reporting; CUT from /explore (it's a runner concern, not a discipline-invocation concern) |

**Recommended fields for /explore Telemetry section:** `items_surfaced_count`, `parent_pass_anchor` (optional), `branching_factor` (optional), `resolution_evidence`, `stage_index` (optional).

**Staging-boundary regression recognition signal (in α Quality):**

| Phrasing | Verdict |
|---|---|
| "Failure: the prior-pass item turned out to have no explorable sub-structure" (abstract) | SURVIVE — for the failure mode definition |
| "Recognition: next-pass /explore on a prior-pass item produces fewer than 2 surfaced items at the requested resolution" (concrete threshold) | SURVIVE — for the recognition signal |
| "Corrective: re-classify the prior-pass item as atomic-at-this-resolution; do not retry at the same resolution; if needed, retry at a coarser resolution to confirm" | SURVIVE — corrective action |
| "Speculative; needs empirical validation" (calibration flag) | SURVIVE — speculative-flag |

**Recommended Quality section entry combines all four phrases.**

**Merge contract spec shape (in α Output):**

| Phrasing | Verdict |
|---|---|
| Operation signature: `merge_explore_maps(map_a, map_b) -> merged_map` | SURVIVE |
| Inputs: two /explore output maps with surfaced items carrying sequential IDs + labels | SURVIVE |
| Logic (staging same run): child IDs (e.g., `N1.3`) reference parent (`N1`); merge preserves the hierarchy | SURVIVE |
| Logic (sibling inquiries): different sequential IDs across maps; LLM-assisted label-similarity matching identifies overlapping items; user confirms before merging | SURVIVE |
| Outputs: merged map with preserved confidence levels, frontier states, telemetry; conflicts flagged for human review | SURVIVE |
| Operational status: spec only; implementation deferred | SURVIVE — explicit |

**Recommended Merge Contract subsection:** above 6 elements as structured fields.

### Assembly check

Surviving + refined candidates:
- **α-STD** (ACTIONABLE) — recommended default for the /explore spec additions package
- **α-MAX** (DEFERRED-with-revival) — richer-shape future
- **β-STD+EXAMPLE** (ACTIONABLE) — recommended default for the /staged-explore runner doc (β-STD + β-EXAMPLE-LED combined)
- **β-MIN-DOC** (DEFERRED-fallback) — if user wants something thinner
- **β-MVL-STYLE** (DEFERRED-with-revival) — revival when skill-ification arrives
- **δ-MIN** (ACTIONABLE) — recommended default for the nav-doc reconciliation
- **δ-STD** (alternate) — if user prefers a paragraph
- Specific phrasings (above) — concrete content for α

**Recommended assembly:** α-STD + β-STD+EXAMPLE + δ-MIN + ε-default + the specific phrasings above. This honors the user's framing (cognitive clarity + runnability + "manual-trigger v1 is acceptable") while shipping concrete content that can be adopted today.

### Axis coverage check

| Axis | Variants generated | Status |
|---|---|---|
| P-α shape (min / std / max / none) | 4 variants | All tested; 3 survive, 1 killed |
| P-β shape (min-doc / std / example-led / std+example / MVL-style / paired / machine-readable) | 7 variants | All tested; 3 survive (1 ACTIONABLE, 2 DEFERRED), 2 refined, 1 killed-for-v1, 1 folded |
| P-δ shape (min / std / max) | 3 variants | All tested; 2 survive, 1 refined |
| Specific phrasings (resolution / telemetry / regression / merge) | Multiple per item | All tested; recommendations made |

Axis coverage complete.

### Convergence signal

- **α-STD** convergence: lens (focused), constraint (generic), absence (focused — all support standard-shape with structure)
- **β-STD+EXAMPLE** convergence: combination (generic), inversion (level 3), domain-transfer (focused), absence (focused) — 4 mechanisms converge
- **δ-MIN** convergence: lens (focused), constraint (generic) — 2 mechanisms; matches user's "preserve" framing from sensemaking
- **Specific phrasings**: high convergence on quantitative-anchor + structured telemetry + explicit threshold + spec-only merge contract

The assembly has HIGH convergence on the recommended set.

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Premature evaluation | No | All 7 mechanisms applied before testing |
| Single-mechanism trap | No | 4 Generators + 3 Framers applied |
| Early frame lock | No | After α-STD emerged, continued through all β candidates and specific-phrasing options |
| Innovation without grounding | No | Every candidate tested with 5-test cycle |
| Mechanism exhaustion | No | Survivors exist |
| Survival bias | Re-checked α-NONE and β-MACHINE-READABLE kills — α-NONE doesn't honor inquiry's reasoning (structural ground); β-MACHINE-READABLE has no current consumer (structural ground for v1). Both kills justified. |

---

## Final Deliverable

### ACTIONABLE survivors (recommended assembly)

1. **α-STD** — /explore spec additions package as structured 1-section additions with cross-references.
2. **β-STD+EXAMPLE** — /staged-explore runner doc as a 5-section spec with the nav_north_star.md codebase-mapping scenario as a worked example threaded through.
3. **δ-MIN** — nav_north_star.md vocabulary reconciliation as a one-line note at the top.
4. **ε-default** — finding frontmatter with `refines: <iter-2 finding path>`.
5. **Specific phrasings** (within α) — concrete content as recommended:
   - Resolution-level: `expected: ~N items` / `expected: ~N items per parent`
   - Staging telemetry fields: `items_surfaced_count`, `parent_pass_anchor`, `branching_factor`, `resolution_evidence`, `stage_index`
   - Staging-boundary regression: abstract failure + concrete threshold (< 2 items) + corrective + speculative flag
   - Merge contract: 6-element structured subsection (operation, inputs, staging-logic, sibling-logic, outputs, operational-status)

### DEFERRED-with-revival

- **α-MAX** — richer shape for /explore spec additions (worked examples + cross-references in every section). **Revival:** automation consumer materializes OR skill-ification triggers richer-spec demand.
- **β-MVL-STYLE** — runner doc structured like /MVL+ with full scaffolding. **Revival:** skill-ification of /staged-explore arrives, requiring discipline-style scaffolding for consistency with other runner skills.
- **β-MIN-DOC** — fallback minimum if standard feels too heavy. **Revival:** user explicitly prefers thinner v1.

### KILLED

- **α-NONE** — doesn't honor inquiry's reasoning (the end-goal lens identified attributes worth absorbing into the spec).
- **β-MACHINE-READABLE** — for v1: no current consumer; revisit at skill-ification.
- **/staged-explore as same-name-as-/explore (level 2 inversion)** — collapses discipline/runner distinction.
- Generic CS-BFS framing (level 1 inversion of doc-location) — `homegrown/runners/` placement preserved.

### REFINED-and-folded

- **β-EXAMPLE-LED** folded into β-STD+EXAMPLE.
- **β-PAIRED-DOC** folded into β-STD+EXAMPLE (worked example threaded through, not separate doc).
- **δ-MAX** folded into δ-STD if user prefers preface (useful content from migration log absorbed).

---

## Specific content recommendations (concrete drafts for adoption)

### For α — Resolution-level field (proposed Step 0 addition in SKILL.md)

Add to the Step 0 declarations block:

> `cognitive-commitment-mode: open` (from iter-2)
> `territory-type-mode: artifact | possibility` (from iter-2)
> `entry-point: frontier-first | signal-first` (from iter-2)
> **`expected: ~N surfaced items` or `expected: ~N items per parent`** (new — quantitative anchor for resolution)

### For α — Staging-aware telemetry block (proposed Telemetry addition in references/explore.md)

Add a subsection within the existing Telemetry section:

```
## Staging-aware telemetry

These fields are reported by /explore invocations participating in a staged run (orchestrated by the /staged-explore runner; see homegrown/runners/staged_explore.md):

- items_surfaced_count: integer (number of surfaced items in this invocation)
- parent_pass_anchor: string (optional; the prior-pass item ID this invocation drills into; absent for first-pass)
- branching_factor: float (optional; items_surfaced_count / parent_implied_count; absent for first-pass)
- resolution_evidence: qualitative note (depth achieved vs expected)
- stage_index: integer (optional; 1, 2, 3, ... per the staged run)
```

### For α — Staging-boundary regression failure mode (proposed Quality section addition)

> **Open→closed drift (preserved from iter-2)** — see existing entry.
> 
> **NEW — Staging-boundary regression** (speculative; needs empirical validation). The prior-pass surfaced item has no explorable sub-structure when next-pass /explore runs on it.
> - *Recognition signal:* next-pass /explore on a prior-pass item produces fewer than 2 surfaced items at the requested resolution.
> - *Corrective action:* re-classify the prior-pass item as "atomic-at-this-resolution"; do not retry at the same resolution; optionally retry at a coarser resolution to confirm.
> - *Detection placement:* the runner (/staged-explore) detects this from the invocation's telemetry; /explore itself names the failure mode but does not detect it.

### For α — Merge contract subsection (proposed Output addition in references/explore.md)

```
## Cross-Inquiry Merge Contract (spec-level activation; SK-MAX-4 from iter-1)

This subsection specifies the contract for merging multiple /explore output maps into a single combined map. Implementation is deferred; the contract exists so future code (or LLM-assisted merging) has a target.

Operation: merge_explore_maps(map_a, map_b) -> merged_map

Inputs:
- map_a, map_b — two /explore output maps. Each contains surfaced items with sequential IDs (e.g., N1, N2, ..., N1.3) and LLM-generated labels.

Logic — staging within a single run:
- Child IDs (N1.3) reference parent IDs (N1) and preserve the hierarchy in the merged map.
- Confidence levels and frontier states are preserved from each source.

Logic — sibling inquiries with overlapping territories:
- Different sequential ID schemes across maps. LLM-assisted label-similarity matching identifies probably-overlapping items. The merge presents these candidates; a human (or autonomous mode-selection at higher autonomy levels) confirms before merging.

Outputs:
- merged_map — combined map with preserved confidence levels, frontier states, and per-source telemetry. Conflicts (e.g., same label, different content) flagged for review.

Operational status: spec only. Manual merging is possible today (read two outputs; combine by hand or by LLM-assisted merging following this contract). Code-level implementation deferred; revival trigger: meta-loop runs sibling inquiries with overlapping territories.

Node-identity contract:
- Each surfaced item has a sequential ID (N1, N2, ..., N1.3, N1.3.2) and an LLM-generated descriptive label.
- IDs are stable within a single run (preserved across stages).
- Labels are for human readability and can drift across invocations; references use IDs for stability.
```

### For β — /staged-explore runner doc skeleton (proposed `homegrown/runners/staged_explore.md`)

```
# /staged-explore — Runner Pattern (manual-trigger v1)

The /staged-explore runner orchestrates multiple /explore invocations at progressively finer resolutions to map a territory via a for-loop pattern. v1 is documentation-only: the user manually triggers each /explore call following this doc. Skill-ification deferred.

## Position in runner taxonomy

| Runner | Scope | Purpose |
|---|---|---|
| /MVL | discipline-loop on a question | Run S → I → C |
| /MVL+ | discipline-loop on a question | Run E → S → D → I → C |
| /meta-loop | inquiry-orchestration | Traverse inquiry-level moves; uses MVL+ as probe |
| **/staged-explore** | **discipline-orchestration** | **Map a territory via for-loop /explore invocations at progressive resolutions** |

## Boundary against /meta-loop

/meta-loop orchestrates inquiry-level moves (probe with MVL+, perceive with /navigation, select next move). /staged-explore orchestrates a SINGLE discipline's invocations at progressive resolutions of a single mapping task. Different scope; complementary purposes.

## For-loop pattern

**First pass:**
- Invoke /explore on the territory (e.g., the codebase).
- Step 0 declarations: `cognitive-commitment-mode: open`, `territory-type-mode: artifact`, `entry-point: frontier-first`, `expected: ~10 surfaced items`.
- Output: first-pass map with ~10 surfaced items at coarse resolution.

**Iteration logic (for each subsequent pass):**
- For each surfaced item from the prior pass that warrants deeper exploration (user selects, or autonomous selection at higher autonomy levels):
  - Invoke /explore with the prior-pass item as the signal-first entry point.
  - Step 0 declarations: `entry-point: signal-first`, `parent_pass_anchor: <prior_item_id>`, `expected: ~5-10 items per parent`.
  - Output: child map referencing the parent by ID; cross-merged via the Merge Contract.

**Worked example — nav_north_star.md's codebase scenario:**

First pass on the project codebase produces ~10 high-level directions:
- N1: How to run loops
- N2: How to handle errors in loop outputs
- N3: How to handle ambiguous loop ends
- ... (etc., up to N10)

Second pass on each direction (assuming user pursues all):
- /explore signal-first on N1 → 5-10 sub-items (N1.1, N1.2, ...)
- /explore signal-first on N2 → 5-10 sub-items
- ... (etc.)

After second pass: ~50-100 nodes total.

Third pass deepens further; total grows toward ~200 nodes.

## Resolution-progression strategy

- First pass: coarse (~10 items)
- Second pass: medium (~5-10 items per parent)
- Third pass: fine (~3-5 items per parent)
- Resolution decreases with each round; staging-boundary regression triggers if expected items aren't found.

## Termination criteria

The runner stops deepening when ANY of:
- User signals stop (manual-trigger v1)
- Staging-boundary regression rate > threshold (e.g., > 50% of recent invocations regress)
- Cumulative node count exceeds budget (e.g., > 500 nodes)
- Frontier across all maps is stable

## Manual-trigger v1 note

Per nav_north_star.md ("manual-trigger v1 is acceptable"), the user triggers each /explore invocation manually. The runner is documentation, not code. Skill-ification revival trigger: manual orchestration becomes unsustainable, OR autonomous mode-selection ships at Level 3+.

## Cross-references

- Discipline spec: `homegrown/explore/SKILL.md` and `homegrown/explore/references/explore.md`
- Source pattern: `devdocs/nav_north_star.md` (the staged for-loop description; vocabulary uses "navigation" for /explore operations)
- Sibling runners: `homegrown/MVL/SKILL.md`, `homegrown/MVL+/SKILL.md`, `homegrown/meta-loop/SKILL.md`
```

### For δ — nav_north_star.md vocabulary note (proposed top-of-document note)

```
> **Vocabulary note (added 2026-05-12 after iter-2+ refinement of /explore):** The "navigation" vocabulary in this document refers to `/explore` operations (mapping a territory's contents). See `homegrown/explore/references/explore.md` for the canonical discipline definition and `homegrown/runners/staged_explore.md` for the runner pattern. The /navigation discipline itself (enumerating routes from a known state) is a different operation; this document's "navigation" name is historical and predates the iter-2 distinction.
```

### For ε — Finding metadata (recommended)

```yaml
---
status: active
refines: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md
---
```

And on adoption, edit the iter-2 finding's frontmatter to add:

```yaml
refined-by: devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md
```

---

## Frontier (for /td-critique)

1. *Stress-test the recommended assembly* (α-STD + β-STD+EXAMPLE + δ-MIN + ε + specific phrasings). Does it honor the user's framing and the project's end-goal trajectory?
2. *Test the doc-vs-skill v1 decision* for β. Is a doc sufficient, or would a skill (even minimal) be more useful given the project's loop-running emphasis?
3. *Test specific phrasings*. The resolution-level field as "expected: ~N items" — is this the right level of formality? Should it be more rigorous (e.g., "expected_item_count: 10")? Or less (free prose)?
4. *Test the staging-boundary regression failure mode*. The recognition signal (< 2 items) is arbitrary; should the threshold be more principled?
5. *Test the runner taxonomy*. Are 4 runners enough? Does the taxonomy table belong in the staged-explore runner doc, or somewhere project-level?

---

## Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Mechanism coverage:** 7 / 7 (full)
- **Variations per mechanism:** 3 (generic / focused / contrarian)
- **Candidates generated:** ~15 (4 P-α + 7 P-β + 3 P-δ + multiple specific-phrasings)
- **Convergence:** HIGH on recommended assembly; multiple mechanisms support α-STD, β-STD+EXAMPLE, δ-MIN, and specific phrasings
- **Survivors tested:** all candidates received 5-test cycle
- **Dispositions:** 4 ACTIONABLE (α-STD; β-STD+EXAMPLE; δ-MIN; ε-default) + concrete phrasings; 3 DEFERRED-with-revival (α-MAX; β-MVL-STYLE; β-MIN-DOC); 4 KILL (α-NONE; β-MACHINE-READABLE; level-2 inversion; level-1 inversion doc-location); 3 REFINED-and-folded (β-EXAMPLE-LED, β-PAIRED-DOC, δ-MAX)
- **Assembly check:** YES — recommended assembly tested against 5-test cycle as a whole
- **Axis coverage check:** YES — 4 axes; all covered
- **Failure modes observed:** none

## Self-Assessment

**Overall: PROCEED**

The recommended assembly (α-STD + β-STD+EXAMPLE + δ-MIN + ε-default + specific phrasings) is convergent across multiple mechanisms, honors the user's framing, and produces concrete content ready for adoption today. Three deferred items provide a clear evolution path (α-MAX for richer spec; β-MVL-STYLE for skill-ification consistency; β-MIN-DOC for thinner-v1 fallback). Critique should now stress-test the assembly + specific phrasings.
