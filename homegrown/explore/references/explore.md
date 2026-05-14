# /explore — Structural Reference (accurate)

> **Loading note.** This file is the canonical reference for the `/explore` discipline. It is loaded by `homegrown/explore/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below is referenced by the protocol. Do not summarize or partial-load.
>
> Design history (sources, calibration-state notes, deferred additions, research-frontier items) is preserved at `enes/discipline_design_history/for_explore.md` to keep this runtime spec focused on the operation.

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

`/explore` deliberately excludes five aspects of items. Each refers to the **conceptual-structure-level operation** of a neighbor cognitive operation.

| Excluded | Why |
|---|---|
| Meaning of items as concepts | conceptual-structure meaning, anchor extraction |
| Mechanism of how items work | predictive models of internal operation |
| Partition of items into independent pieces with interfaces | coupling-based decomposition |
| Novelty assessment of items | seed-to-tested-novel-idea generation |
| Choice of which item to act on next | route enumeration, labeling, guidance, selection |

### 1.4 Clarification on "meaning" in the NOT-list

The first entry ("no meaning extraction") refers specifically to **conceptual-structure meaning** — anchor extraction, relational claims among anchors, interpretive role assignment within a conceptual model.

It does NOT exclude **identifying-labeling content** — functional one-lines, surface forms, structural adjacency facts. These are acceptable (indeed required at the default depth level; see §2.3) and are NOT meaning-extraction in the sense the NOT-list excludes.

The boundary between labeling and meaning-extraction is operationalized by a heuristic; see §4.4.

### 1.5 Vocabulary

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

Each surfaced item carries content at one of five labeling levels.

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

**Form.** Content is markdown prose by default. A typed existence-claim schema (a deferred addition; see the design-history file) provides a machine-readable representation alongside the markdown rendering when activated.

---

## 3. Process

### 3.1 Two operational modes

Modes are determined by the territory's type, not by the discipline's commitment.

- **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
- **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely.

**Completeness before novelty** (possibility mode). When scanning in possibility mode, explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1).

**Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.

### 3.2 Preliminary sub-phase: boundary-discovery

When the inquiry's `_branch.md` does not pre-specify the territory boundary, a **boundary-discovery sub-phase** fires before normal scanning. The discipline probes outward to surface the territory's edges; the discovered boundary becomes the input to the subsequent scan-signal-probe cycle.

Boundary-discovery is **NOT a third operational mode** — it is a preliminary sub-phase. Its output ("discovered territory edges") is a preliminary input to scan, not a Transform of the discipline. Each invocation produces one Transform (the confidence-tagged map of surfaced items); boundary-discovery's output is internal scaffolding.

The trigger is the absence of an explicit territory boundary in the input; the spec requires an explicit signal (e.g., `boundary: unknown` in the input contract or the inquiry's Scope section absent/empty). **Silent boundary-discovery** — firing the sub-phase without explicit input — is a failure mode (see §4.1).

### 3.3 The canonical cycle

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

**Surround-layer inclusion at first scan.** When the territory has an identifiable contextual or structural surround layer (e.g., project-wide protocols, foundational frames), the first breadth-first scan must include items from that surround layer before going deep on inquiry-specific objects. Omitting an identifiable surround layer at the first scan is a Premature Depth instance.

### 3.4 Idempotency within invocation; cross-invocation delegated to runner

`/explore` is **idempotent within a single invocation**: same input produces same output. The discipline does NOT loop over multiple invocations within itself.

**Cross-invocation re-exploration** — re-running `/explore` on an evolved territory, or at finer resolution on a previously-mapped region — is the **runner's** responsibility. The discipline exposes the input contract (`expected`, `depth-level`, entry-point) so the runner can re-invoke with refined parameters.

### 3.5 Type-aware probing

When a scan inventories a candidate carrying a **load-bearing quantifiable claim** — a claim whose answer is a number or measurable property (cost, benefit, frequency, magnitude, count) AND whose answer determines whether the candidate stabilizes or is dismissed — at least one **empirical probe** of the quantifiable claim is required before the candidate passes into the stabilized set. Dispatching a load-bearing quantifiable claim with qualitative reasoning is a Surface-Only Scanning instance (see §4.1).

---

## 4. Quality

### 4.1 Failure modes

The discipline guards against the following predictable failures.

**1. Premature depth.** Going deep on the first interesting signal before scanning broadly. The map has one detailed region and large unknown voids. *Prevention:* complete at least one coarse scan before probing; signals from the first scan get queued, not immediately probed.

**2. Surface-only scanning.** Scanning broadly but never probing. The confidence map is uniformly "scanned," nothing "confirmed." *Prevention:* after each scan, detect signals and probe at least one. Don't start another broad scan until the highest-priority signal has been probed. For load-bearing quantifiable claims, see §3.5.

**3. False confidence.** Stopping because the discovery rate dropped — but the drop was caused by scanning the wrong region, not by the territory being fully mapped. *Prevention:* before declaring convergence, perform a **jump scan** in a completely different direction than previous scans. If surprises emerge, the frontier wasn't actually stable.

**4. Premature termination.** Stopping because it "feels like enough" rather than because the three convergence criteria are met. *Prevention:* explicit convergence check before termination; all three criteria must hold.

**5. Re-exploration.** Scanning regions already scanned without realizing it. *Prevention:* frontier tracking — before scanning a region, check whether it has been scanned at the current resolution.

**6. Completeness bias in possibility mode.** Generating only "creative" or "novel" candidates and missing the obvious ones. *Prevention:* in possibility mode, scan for standard/obvious candidates BEFORE scanning for novel ones (see §3.1).

**7. Open→closed drift** (formerly "F-strong drift"). The relevance or adjacency annotations begin to claim relational meaning, drifting from open-mode surfacing into closed-mode interpretive operations (sense-making's territory). *Detection:* downstream-observable — sense-making finds redundant anchor work that /explore has already done; OR the explorer notices their own drift. The discipline does not have an in-discipline real-time classifier for drift in the current calibration state. *Prevention:* hold to the labeling-vs-meaning heuristic (§4.4); keep annotations at the labeling level.

**8. Silent boundary-discovery.** The boundary-discovery sub-phase (§3.2) fires without explicit input flag. The discipline silently mis-scopes by scanning a territory the inquiry did not request. *Prevention:* require an explicit `boundary: unknown` declaration in the input before firing boundary-discovery.

**9. Negative-space silent drop.** Confirmed-absent regions are omitted from the output because absence feels like a non-result. *Prevention:* confirmed-absent is a mandatory annotation layer (§2.2). The output schema requires confirmed-absent regions to be represented explicitly.

**10. Inadequate per-item content depth.** Items surfaced at D0 (bare identifier) without sufficient labeling content force downstream re-discovery and defeat the upstream-precondition relationship. *Prevention:* enforce the D2 default minimum (§2.3); D1 only when explicitly declared at coarse resolution.

### 4.2 Coverage criteria (convergence within an invocation)

All three must hold before declaring convergence:

| Criterion | What it asserts |
|---|---|
| **Frontier stability** | New scans stop pushing the frontier outward. The territory's rough boundaries are known at the current resolution. |
| **Declining discovery rate** | Each new scan produces fewer new structural features. Diminishing returns signal that the major structure has been captured. |
| **Bounded gaps** | Remaining unknowns are between explored areas (interpolatable from neighbors) not beyond them (uncharted voids with no surrounding context). |

**Jump-scan rule.** Before declaring convergence (when all three criteria appear met), perform one deliberate scan in a completely different direction than previous scans. If surprises emerge, the frontier wasn't actually stable. Failing to perform a jump scan before declaring convergence is a False Confidence instance.

### 4.3 Per-invocation vs per-staging coverage

Within a single invocation, the three criteria above gate completion. **Per-staging coverage** — when multiple `/explore` invocations contribute to a staged map — is the runner's concern, not the discipline's.

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
| Territory overview | What major regions exist; at what resolution they were explored; the entry-point + mode chosen for this invocation |
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

### 5.4 Frontier — open questions for downstream

The Frontier section captures what /explore raised but did not answer:

- Deferred signals (with reasoning)
- Unbounded gaps in the map (regions where confidence is "unknown" and which are not interpolable from neighbors)
- Frontier questions handed off to downstream disciplines (sense-making, comprehend, decompose, innovate, navigation)

A growing frontier is a signal of depth, not failure. It tells the next discipline exactly what to investigate.

---

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Exploration Process

### 1. State Mode and Entry Point

Determine the territory-type-mode (`artifact` or `possibility`) and entry-point (`frontier-first` if no prior signal, `signal-first` if a specific hunch or question exists). If the inquiry does not pre-specify territory bounds, fire the boundary-discovery sub-phase (§3.2) before scanning.

### 2. Run Exploration Cycles

Execute the 7-step canonical cycle (§3.3). Per cycle, produce: scan output with annotation layers (§2.2); signals detected (5 types per §2.1); resolution decision; probe output (with type-aware probing per §3.5 when load-bearing quantifiable claims appear); frontier-state update; confidence-map update. Maintain a uniform per-item content depth across surfaced items (§2.3 — D0 unacceptable; D2 default; D5+ excluded).

### 3. Assess Convergence

Check all three criteria (§4.2): frontier stability; declining discovery rate; bounded gaps. **Jump-scan rule:** before declaring convergence, scan in a previously-unscanned direction. Surprises → not converged (return to step 2). No surprises → proceed to step 4. Failing to jump-scan is False Confidence (§4.1).

### 4. Final Deliverable — The Structural Map

Save as markdown (default name `exploration.md` when invoked inside an inquiry):

1. **Territory Overview** — regions; resolution; mode + entry-point
2. **Inventory** — surfaced items per region at the chosen depth (§2.3); annotation layers per §2.2
3. **Signal Log** — detected / probed / deferred with reasoning
4. **Confidence Map** — 5-level tagging; confirmed-absent regions explicit
5. **Frontier State** — advancing / stable / closed
6. **Gaps and Recommendations** — frontier questions handed to downstream disciplines

Add Telemetry (§5.3) and Self-Assessment verdict (§4.5: PROCEED / FLAG / RE-RUN).
