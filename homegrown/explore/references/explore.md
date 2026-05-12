# /explore — Structural Reference (accurate)

> **Loading note.** This file is the canonical reference for the `/explore` discipline. It is loaded by `homegrown/explore/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below is referenced by the protocol. Do not summarize or partial-load.
>
> **Sources.** This reference is synthesized from four findings in the project's inquiry log:
> - `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md` — the original from-scratch framing (5-section structure, NOT-list, components, modes)
> - `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md` — end-goal-aware additions (resolution-level field, staging telemetry, staging-boundary regression failure mode, Merge Contract, /staged-explore runner)
> - `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md` — per-item content depth (D0–D4 levels, depth-level field, labeling-vs-meaning heuristic, labeling/anchor terminology, NOT-list clarification)
> - `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` — /explore vs /navigation boundary (specialization pattern; /navigation is a specialization of /explore over the next-move-space)
>
> The spec follows the anatomy laid out in `thinking_disciplines/anatomy_of_disciplines.md` (Definition / Components / Process / Failure Modes / Coverage Strategy for the spec side; Transform / Progression / Telemetry / Frontier for the output side).

---

## 1. Identity

### 1.1 Verb-meaning (the cognitive operation)

**To explore is to perform purposive open-mode surfacing of a territory.**

A cognizer enters material whose contents are not pre-known. Attention is biased by the inquiry's purpose toward what stands out as worth bringing into view. Items are surfaced and accumulated into a **confidence-tagged map** with optional low-commitment annotations.

The unit of work is the **surfaced item** (user-facing). At the typed-record level (when a typed schema is activated as a deferred addition), the same referent is the **existence claim**: a statement that "this item is present in this region of the territory, at this confidence level."

**Exploration is NOT** — four near-neighbor contrasts (pedagogical; complements the operational NOT-list at §1.3):

- vs **Sensemaking** — sensemaking converts ambiguity → stable understanding (anchor extraction). Exploration converts unknown → map of what exists. /explore discovers WHAT/WHERE; sense-making discovers WHY/HOW.
- vs **Innovation** — innovation creates what doesn't exist; exploration maps what does exist or enumerates what could. Innovation's success = novelty; exploration's success = completeness.
- vs **Research** — research is closed-mode targeted interrogation (a defined question seeking its answer). Exploration is open-mode surfacing (the cognizer accepts they don't know what they'll find).
- vs **Browsing** — browsing is undirected. Exploration is purposive (has a *why*) and coverage-aware (tracks the frontier; stops on surprise-bounded coverage).

### 1.2 Upstream-precondition relationship (logical, not temporal)

`/explore` is the **upstream cognitive operation** that produces what every other discipline presupposes — items being claimed to exist. Sense-making operates on already-surfaced material; comprehend models a named artifact; decompose cuts a known whole; innovate generates novelty from a seed; navigation enumerates moves from a known state. None of those surface items into the inquiry's view — they presuppose surfacing has happened.

"Upstream" is meant logically (precondition relationship), not temporally. Within a single loop pass the temporal order may vary, but the precondition relationship is fixed.

### 1.3 NOT-list (five entries; what `/explore` does not extract)

`/explore` deliberately excludes five aspects of items. Each refers to the **conceptual-structure-level operation** of the named neighbor discipline.

| Excluded | Why | Belongs to |
|---|---|---|
| Meaning of items as concepts | conceptual-structure meaning, anchor extraction | sense-making (`homegrown/sense-making/`) |
| Mechanism of how items work | predictive models of internal operation | comprehend (`homegrown/comprehend/`) |
| Partition of items into independent pieces with interfaces | coupling-based decomposition | decompose (`homegrown/decompose/`) |
| Novelty assessment of items | seed-to-tested-novel-idea | innovate (`homegrown/innovate/`) |
| Choice of which item to act on next | route enumeration, labeling, guidance, selection | navigation (`homegrown/navigation/` — which is a specialization of `/explore` over the next-move-space; see §1.5) |

### 1.4 Clarification on "meaning" in the NOT-list

The first entry ("no meaning extraction") refers specifically to **conceptual-structure meaning** — anchor extraction, relational claims among anchors, interpretive role assignment within a conceptual model.

It does NOT exclude **identifying-labeling content** — functional one-lines, surface forms, structural adjacency facts. These are acceptable (indeed required at the default depth level; see §2.3) and are NOT meaning-extraction in the sense the NOT-list excludes.

The boundary between labeling and meaning-extraction is operationalized by a heuristic; see §4.4.

### 1.5 Specialization pattern and the /navigation boundary

`/explore` operates on a **stated territory**. A territory is any conceptual or artifact space whose contents are not pre-known to the cognizer. Two patterns matter:

- **General /explore** operates on a territory specified by the inquiry's `_branch.md` (e.g., a codebase, a research field, a problem domain).
- **Specialization** — another discipline (today: `/navigation`) is structurally a specialization of `/explore` over a specific territory (in `/navigation`'s case, the **next-move-space** from a known state). The specialization **transcludes** /explore's mechanics at spec-time; it does not invoke /explore at runtime. This preserves the workspace invariant.

The boundary between general /explore and /navigation: general /explore operates on territories whose contents need to be surfaced from scratch; /navigation operates on the specialized territory of *next-move routes from an already-mapped state*, adds a 16-type labeling vocabulary, generates per-route adaptive guidance, and includes a cognitive selection step. See the /navigation finding for the full specialization spec.

### 1.6 Vocabulary

| User-facing | Structural |
|---|---|
| map | confidence-tagged map (the Transform) |
| item | surfaced item (the unit) |
| region | named area of the territory the map organizes around |
| label | per-item identifying content at surface granularity |

**Labeling vs anchor.** *Labeling* is `/explore`'s per-item descriptive content at surface granularity — what each surfaced item IS at the inter-rater-agreement level. *Anchor* is sense-making's conceptual-structure unit — extracted via sense-making's Phase 1. The shorthand: **labels are observed; anchors are extracted.** `/explore` produces labels. Sense-making consumes labels to extract anchors.

---

## 2. Components

`/explore` has six core components, three annotation-layer commitments, and a per-item content depth specification.

### 2.1 Six core components

| Component | Role |
|---|---|
| **Scan** | Breadth-first surfacing of items at the current resolution. First scan is unweighted; subsequent scans may be importance-weighted. |
| **Signal detection** | Prioritize which items deserve deeper investigation. Signal types: density, novelty, relevance (purpose-biased attention; see §2.2), tension, absence. |
| **Probe** | Depth investigation of a prioritized signal. Stays at the existence-claim level — does NOT build mechanism models (that is comprehend's). |
| **Resolution management** | Decide when to zoom in or out within an invocation. Cross-invocation re-exploration at finer resolution is the runner's job, not the discipline's. |
| **Frontier tracking** | Maintain the boundary between known and unknown within the territory. Three states: advancing, stable, closed. |
| **Confidence mapping** | Assign one of five confidence levels to each region: *confirmed*, *scanned*, *inferred*, *unknown*, *confirmed-absent*. |

### 2.2 Annotation layers

Five annotation layers ride on the surfaced items:

| Layer | Commitment | Notes |
|---|---|---|
| Existence | Mandatory | every surfaced item asserts existence in the territory |
| Confidence | Mandatory | one of five levels (see §2.1 confidence mapping) |
| Relevance | Optional, low-commitment | **Relevance is a surfacing criterion**, not a post-scan tag. Purpose-biased attention biases what stands out as relevant during scan and signal detection; the explicit relevance tag (when emitted) is the recorded outcome of that bias, not a separate interpretive operation. |
| Adjacency | Optional, low-commitment | records **co-location only** (these items were found in the same region of the territory). Does NOT claim what items mean to each other — that would be relational meaning, which belongs to sense-making. |
| Confirmed-absent | Mandatory | confirmed absences are **productive output**, not gaps. The map records "this region was scanned and contains nothing." |

### 2.3 Per-item content depth (D0–D4)

Each surfaced item carries content at one of five labeling levels. The level is declared at Step 0 via the `depth-level` field (see §3.1).

| Level | What's included | Codebase example |
|---|---|---|
| **D0** | bare identifier only | `src/auth.py` |
| **D1** | + surface form (observable facts: size, signature, exports) | `src/auth.py, ~200 lines, exports authenticate()` |
| **D2** | + functional one-line **(DEFAULT MINIMUM)** | `src/auth.py — handles user authentication; ~200 lines, exports authenticate()` |
| **D3** | + structural adjacency (co-location facts) | `src/auth.py — handles user authentication; called by src/views/login.py, imports bcrypt` |
| **D4** | + relevance verdict (optional; forward-tied) | `src/auth.py — ...; relevance: confirmed-relevant-to-inquiry-purpose` |

**Default minimum: D2.** With D2, sense-making receives surfaced items that already carry identifier + observable surface form + functional one-line. Sense-making operates ON labeled items, not in place of them. Re-discovery is not forced.

**D1 is permitted at coarse-resolution scans if explicitly declared.** For very broad surveys where context budget is tight.

**D0 is NOT acceptable as final output.** Items at this level force downstream re-discovery and defeat /explore's upstream-precondition relationship.

**D5+ is excluded.** Conceptual-role gloss ("this is the access-control entry point") or relational meaning claims ("this grounds all downstream authorization") are sense-making's territory. See the labeling-vs-meaning boundary heuristic in §4.4.

**D4 (relevance verdict) is optional and forward-tied.** Its full specification awaits a planned follow-up inquiry on active verification-probing. Until that inquiry lands, users have three options: operate at D3 and let sense-making handle relevance; manually tag D4 when useful; skip the relevance tier.

**Per-invocation uniformity.** The depth commitment is per-invocation: all surfaced items in one /explore call aim for the declared level. Items with low confidence may have partial content (some fields empty) but the level commitment is per-call.

**Form.** Content is markdown prose by default. A typed existence-claim schema (a deferred addition; see §7) provides a machine-readable representation alongside the markdown rendering when activated.

---

## 3. Process

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

Modes are determined by the territory's type, not by the discipline's commitment.

- **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
- **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely.

**Completeness before novelty** (possibility mode). When scanning in possibility mode, explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1).

**Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.

### 3.3 Preliminary sub-phase: boundary-discovery

When the inquiry's `_branch.md` does not pre-specify the territory boundary, a **boundary-discovery sub-phase** fires before normal scanning. The discipline probes outward to surface the territory's edges; the discovered boundary becomes the input to the subsequent scan-signal-probe cycle.

Boundary-discovery is **NOT a third operational mode** — it is a preliminary sub-phase. Its output ("discovered territory edges") is a preliminary input to scan, not a Transform of the discipline. Each invocation produces one Transform (the confidence-tagged map of surfaced items); boundary-discovery's output is internal scaffolding.

The trigger is the absence of an explicit territory boundary in the input; the spec requires an explicit signal (e.g., `boundary: unknown` in the input contract or the inquiry's Scope section absent/empty). **Silent boundary-discovery** — firing the sub-phase without explicit input — is a failure mode (see §4.1).

### 3.4 The canonical cycle

Within an invocation, /explore runs iterative cycles. Each cycle:

```
1. Scan — breadth-first pass at current resolution
2. Detect signals — what stands out? Apply 5 signal types (§2.1).
3. Manage resolution — should we zoom in on a signal or zoom out for more breadth?
4. Probe (depth pass on highest-priority signal) OR Scan (broader pass at current resolution)
5. Update frontier — where is the boundary now? advancing / stable / closed?
6. Update confidence map — what do we know well, partially, not at all?
7. Assess convergence — are the three criteria met? (see §4.2)
   → if not converged: back to step 1 (new cycle)
   → if converged: produce the Transform
```

### 3.5 Idempotency within invocation; cross-invocation delegated to runner

`/explore` is **idempotent within a single invocation**: same input produces same output. The discipline does NOT loop over multiple invocations within itself.

**Cross-invocation re-exploration** — re-running `/explore` on an evolved territory, or at finer resolution on a previously-mapped region — is the **runner's** responsibility. The discipline exposes the input contract (`expected`, `depth-level`, entry-point, parent-pass-anchor in staging telemetry) so the runner can re-invoke with refined parameters.

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

When a scan inventories a candidate carrying a **load-bearing quantifiable claim** — a claim whose answer is a number or measurable property (cost, benefit, frequency, magnitude, count) AND whose answer determines whether the candidate stabilizes or is dismissed — at least one **empirical probe** of the quantifiable claim is required before the candidate passes into the stabilized set. Dispatching a load-bearing quantifiable claim with qualitative reasoning is a Surface-Only Scanning instance (see §4.1).

---

## 4. Quality

### 4.1 Failure modes

The discipline guards against the following predictable failures.

**1. Premature depth.** Going deep on the first interesting signal before scanning broadly. The map has one detailed region and large unknown voids. *Prevention:* complete at least one coarse scan before probing; signals from the first scan get queued, not immediately probed.

**2. Surface-only scanning.** Scanning broadly but never probing. The confidence map is uniformly "scanned," nothing "confirmed." *Prevention:* after each scan, detect signals and probe at least one. Don't start another broad scan until the highest-priority signal has been probed. For load-bearing quantifiable claims, see §3.8.

**3. False confidence.** Stopping because the discovery rate dropped — but the drop was caused by scanning the wrong region, not by the territory being fully mapped. *Prevention:* before declaring convergence, perform a **jump scan** in a completely different direction than previous scans. If surprises emerge, the frontier wasn't actually stable.

**4. Premature termination.** Stopping because it "feels like enough" rather than because the three convergence criteria are met. *Prevention:* explicit convergence check before termination; all three criteria must hold.

**5. Re-exploration.** Scanning regions already scanned without realizing it. *Prevention:* frontier tracking — before scanning a region, check whether it has been scanned at the current resolution.

**6. Completeness bias in possibility mode.** Generating only "creative" or "novel" candidates and missing the obvious ones. *Prevention:* in possibility mode, scan for standard/obvious candidates BEFORE scanning for novel ones (see §3.2).

**7. Open→closed drift** (formerly "F-strong drift"). The relevance or adjacency annotations begin to claim relational meaning, drifting from open-mode surfacing into closed-mode interpretive operations (sense-making's territory). *Detection:* downstream-observable — sense-making finds redundant anchor work that /explore has already done; OR the explorer notices their own drift. The discipline does not have an in-discipline real-time classifier for drift in the current calibration state. *Prevention:* hold to the labeling-vs-meaning heuristic (§4.4); keep annotations at the labeling level.

**8. Silent boundary-discovery.** The boundary-discovery sub-phase (§3.3) fires without explicit input flag. The discipline silently mis-scopes by scanning a territory the inquiry did not request. *Prevention:* require an explicit `boundary: unknown` declaration in the input before firing boundary-discovery.

**9. Negative-space silent drop.** Confirmed-absent regions are omitted from the output because absence feels like a non-result. *Prevention:* confirmed-absent is a mandatory annotation layer (§2.2). The output schema requires confirmed-absent regions to be represented explicitly.

**10. Staging-boundary regression** (speculative; calibration-state-dependent). A prior-pass surfaced item has no explorable sub-structure when next-pass /explore is run on it. *Recognition signal:* next-pass /explore on a prior-pass item produces fewer than 2 surfaced items at the requested resolution. *Corrective:* re-classify the prior-pass item as **atomic-at-this-resolution**; do not retry at the same resolution; optionally retry at coarser resolution to confirm. *Detection placement:* the runner (`/staged-explore`) detects this from invocation telemetry; /explore names the failure mode but does not detect it. The threshold (< 2 items) is a starting default for empirical refinement.

**11. Inadequate per-item content depth.** Items surfaced at D0 (bare identifier) without sufficient labeling content force downstream re-discovery and defeat the upstream-precondition relationship. *Prevention:* enforce the D2 default minimum (§2.3); D1 only when explicitly declared at coarse resolution.

### 4.2 Coverage criteria (convergence within an invocation)

All three must hold before declaring convergence:

| Criterion | What it asserts |
|---|---|
| **Frontier stability** | New scans stop pushing the frontier outward. The territory's rough boundaries are known at the current resolution. |
| **Declining discovery rate** | Each new scan produces fewer new structural features. Diminishing returns signal that the major structure has been captured. |
| **Bounded gaps** | Remaining unknowns are between explored areas (interpolatable from neighbors) not beyond them (uncharted voids with no surrounding context). |

**Jump-scan rule.** Before declaring convergence (when all three criteria appear met), perform one deliberate scan in a completely different direction than previous scans. If surprises emerge, the frontier wasn't actually stable. Failing to perform a jump scan before declaring convergence is a False Confidence instance.

### 4.3 Per-invocation vs per-staging coverage

Within a single invocation, the three criteria above gate completion. **Per-staging coverage** — when multiple `/explore` invocations contribute to a staged map — is the runner's concern (see `homegrown/runners/staged_explore.md`). The discipline reports staging-aware telemetry (§5.3) that the runner consumes to decide next-pass parameters.

### 4.4 Labeling-vs-meaning boundary heuristic

When deciding whether a piece of content is acceptable labeling (D0–D4) or crosses into meaning-extraction (D5+), the scanner asks themselves a thought-experiment question:

> *"Would a scanner who reads the item but has NOT yet built a conceptual-structure model of the territory produce roughly the same description?"*

- **High agreement** (multiple naive scanners would produce similar descriptions) → **labeling**. Acceptable for /explore.
- **Low agreement** (multiple defensible framings depending on the conceptual model assumed) → **meaning-extraction**. Belongs to sense-making.

A "naive scanner" is one who has not done sense-making's anchor-extraction work on this territory. They read individual items and report observable facts; they do not yet have a frame for what items *mean in relation to each other*.

The heuristic is a **self-check thought-experiment**, not a claim about the LLM's actual epistemic state. The LLM running /explore has full inquiry context — it is never truly "naive." The check asks the LLM: "would another scanner without a conceptual-structure model produce this description?" If yes, the description is labeling. If no, it's meaning-extraction.

**Self-reference acknowledgment.** The heuristic is itself a meta-cognitive move — using a labeling-vs-meaning check to enforce the no-meaning-extraction NOT-list. This operates at the meta-level (output-content selection), not the object-level (item-meaning extraction). The corrective is external grounding: the NOT-list (§1.3) serves as the canonical reference; the heuristic implements its labeling-side.

**Edge cases.** Domain jargon and contested terminology can produce high agreement *among experts* but require conceptual-structure knowledge to assess. Treat these as **labeling at low confidence**: the surfaced item's functional one-line should be conservative; deeper interpretation is sense-making's job.

**Domain knowledge is acceptable.** A compiler reader doesn't need type theory to label `lib/parser.c` as "implements the LR(1) parser, ~500 lines." They need it to interpret "the parser embodies bottom-up shift-reduce paradigm." The first is labeling (functional one-line). The second is meaning-extraction (interpretive role claim). The test is whether the description requires conceptual-structure knowledge specifically.

### 4.5 Self-assessment output

At the end of an invocation, /explore reports:

- **PROCEED** — all checks pass; output is ready for downstream consumption.
- **FLAG** — output is produced but one or more checks raised a flag (e.g., a failure-mode recognition signal fired); downstream consumer should review.
- **RE-RUN** — output is incomplete or structurally suspect; re-run recommended with adjusted parameters.

---

## 5. Output

### 5.1 Transform — the confidence-tagged map

The discipline's primary output is a markdown file (`exploration.md` by convention when invoked inside an inquiry) containing:

| Section | Content |
|---|---|
| Territory overview | What major regions exist; at what resolution they were explored; the entry-point + mode + depth-level declared at Step 0 |
| Inventory | What was surfaced in each region — items with their labeling content (per the declared depth-level) and annotation layers |
| Confidence map | Each region tagged with one of five confidence levels (§2.1); confirmed-absent regions appear explicitly |
| Signal log | Signals detected during scans; which were probed, which were deferred (with reasoning) |
| Frontier state | Where the boundary between known and unknown stands at convergence; advancing / stable / closed |
| Gaps and recommendations | What remains unknown; what should be explored next if further exploration is warranted; frontier questions handed off to downstream disciplines |

### 5.2 Progression — versioned snapshots

Cycle-by-cycle snapshots showing how the map developed. Each cycle records: what was scanned, what signals were detected, the resolution decision (zoom in / zoom out), what was probed, frontier state after the cycle, confidence-map update. This serves two purposes: **traceability** (how did we get here?) and **cross-session resume** (pick up from the last saved cycle).

### 5.3 Telemetry — operational metrics

The discipline reports the following metrics so a runner can route (PROCEED / FLAG / RE-RUN):

**Base metrics:**
- Mode (`artifact` | `possibility`)
- Entry point (`frontier-first` | `signal-first`)
- Cycles run
- Candidates generated (in possibility mode)
- Signals detected; probed count; deferred count
- Resolution progression evidence
- Frontier state (`advancing` | `stable` | `closed`)
- Discovery rate (qualitative or numeric trend)
- Convergence criteria status (3 separate booleans)
- Jump-scan performed (boolean)
- Failure modes checked (list of named modes from §4.1)

**Staging-aware telemetry (when invoked under `/staged-explore` or similar):**

*Essential fields (always reported when staging applies):*
- `items_surfaced_count` — integer; number of surfaced items in this invocation (regression-detection signal)
- `parent_pass_anchor` — optional string; for staged invocations after the first, the prior-pass item ID this invocation drills into; absent for first-pass
- `stage_index` — integer; which round of staging (1, 2, 3, ...) per the staged run

*Optional fields:*
- `branching_factor` — float; `items_surfaced_count / parent_implied_count`; absent for first-pass
- `resolution_evidence` — qualitative note on the depth achieved vs expected

### 5.4 Frontier — open questions for downstream

The Frontier section captures what /explore raised but did not answer:

- Deferred signals (with reasoning)
- Unbounded gaps in the map (regions where confidence is "unknown" and which are not interpolable from neighbors)
- Frontier questions handed off to downstream disciplines (sense-making, comprehend, decompose, innovate, navigation)

A growing frontier is a signal of depth, not failure. It tells the next discipline exactly what to investigate.

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

## Execute the Exploration Process

### 1. State Mode and Entry Point

Declare the Step 0 fields (§3.1): `cognitive-commitment-mode: open`; `territory-type-mode`; `entry-point`; `expected`; `depth-level`. If the inquiry does not pre-specify territory bounds, fire the boundary-discovery sub-phase (§3.3) before scanning.

### 2. Run Exploration Cycles

Execute the 7-step canonical cycle (§3.4). Per cycle, produce: scan output with annotation layers (§2.2); signals detected (5 types per §2.1); resolution decision; probe output (with type-aware probing per §3.8 when load-bearing quantifiable claims appear); frontier-state update; confidence-map update. Maintain the declared `depth-level` uniformly across surfaced items (§2.3 — D0 unacceptable; D2 default; D5+ excluded).

### 3. Assess Convergence

Check all three criteria (§4.2): frontier stability; declining discovery rate; bounded gaps. **Jump-scan rule:** before declaring convergence, scan in a previously-unscanned direction. Surprises → not converged (return to step 2). No surprises → proceed to step 4. Failing to jump-scan is False Confidence (§4.1).

### 4. Final Deliverable — The Structural Map

Save as markdown (default name `exploration.md` when invoked inside an inquiry):

1. **Territory Overview** — regions; resolution; Step 0 declarations
2. **Inventory** — surfaced items per region at the declared depth-level (§2.3); annotation layers per §2.2
3. **Signal Log** — detected / probed / deferred with reasoning
4. **Confidence Map** — 5-level tagging; confirmed-absent regions explicit
5. **Frontier State** — advancing / stable / closed
6. **Gaps and Recommendations** — frontier questions handed to downstream disciplines

Add Telemetry (§5.3; staging-aware fields when applicable per §3.6) and Self-Assessment verdict (§4.5: PROCEED / FLAG / RE-RUN). For cross-invocation merging, follow §5.5.
